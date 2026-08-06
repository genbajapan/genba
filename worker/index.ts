import { buildKnowledgeBlocks, retrieveRelevantBlocks } from "./knowledge";

export interface Env {
  AI: Ai;
  ASSETS: Fetcher;
}

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const MAX_HISTORY = 8;
const MAX_MESSAGE_LENGTH = 800;

const SYSTEM_PROMPT = `あなたはGenba(外資SaaS営業職向けの日本語インテリジェンスメディア)のAIアシスタントです。読者がGenbaに掲載されている企業情報やキャリアの考え方について「壁打ち」できるよう手伝います。

必ず守ること:
- 回答は日本語で、丁寧かつ簡潔に(目安300〜400字程度)書く
- 下に渡される「参考情報」に書かれている内容だけを事実の根拠にする。参考情報にない具体的な数字・年収額・企業固有の詳細を推測で作らない
- 参考情報だけで答えられない場合は、正直に「現時点でGenbaが確認している情報にはありません」と伝え、公式情報の確認を促す
- 個人の転職の合否、内定可能性、年収を保証・断定する発言はしない
- Genba上では求人応募の受付・候補者と企業の個別マッチング・条件交渉は行っていないことを踏まえて回答する(応募は各社公式ページで行うよう案内する)
- 参考情報の中に、Genbaが実際に調査している企業の個別ページの情報が含まれている場合に限り、末尾で「詳しくは◯◯のページも参考にしてください」と案内してよい。参考情報に登場しない企業について、Genba上にページがあるかのような案内はしない`;

const knowledgeBlocks = buildKnowledgeBlocks();

function corsHeaders(origin: string | null): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin ?? "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body: unknown, init: ResponseInit, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin), ...(init.headers ?? {}) },
  });
}

function sanitizeMessages(raw: unknown): ChatMessage[] {
  if (!Array.isArray(raw)) return [];
  const messages: ChatMessage[] = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const trimmed = content.trim().slice(0, MAX_MESSAGE_LENGTH);
    if (trimmed.length === 0) continue;
    messages.push({ role, content: trimmed });
  }
  return messages.slice(-MAX_HISTORY);
}

async function handleChat(request: Request, env: Env, origin: string | null): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(origin) });
  }
  if (request.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, { status: 405 }, origin);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "invalid_json" }, { status: 400 }, origin);
  }

  const messages = sanitizeMessages((payload as { messages?: unknown })?.messages);
  const lastUserMessage = [...messages].reverse().find((message) => message.role === "user");
  if (!lastUserMessage) {
    return jsonResponse({ error: "messages_required" }, { status: 400 }, origin);
  }

  const relevantBlocks = retrieveRelevantBlocks(knowledgeBlocks, lastUserMessage.content, 3);
  const context = relevantBlocks.map((block) => `--- ${block.title} ---\n${block.text}`).join("\n\n");

  const aiMessages = [{ role: "system", content: `${SYSTEM_PROMPT}\n\n# 参考情報(Genba掲載データ)\n${context}` }, ...messages];

  try {
    const result = await env.AI.run(MODEL, { messages: aiMessages, max_tokens: 700 });
    const answer =
      result && typeof result === "object" && "response" in result && typeof (result as { response?: unknown }).response === "string"
        ? (result as { response: string }).response
        : "回答の生成に失敗しました。時間をおいて再度お試しください。";

    return jsonResponse({ answer, sources: relevantBlocks.map((block) => ({ id: block.id, title: block.title })) }, { status: 200 }, origin);
  } catch (error) {
    return jsonResponse({ error: "ai_error" }, { status: 502 }, origin);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (url.pathname === "/api/chat") {
      return handleChat(request, env, origin);
    }

    return env.ASSETS.fetch(request);
  },
};
