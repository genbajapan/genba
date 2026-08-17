import { buildKnowledgeBlocks, retrieveRelevantBlocks } from "./knowledge";
import { getCompany } from "../lib/market-data";

export interface Env {
  AI: Ai;
  ASSETS: Fetcher;
  IMPROVEMENT_EMAIL: SendEmail;
  IMPROVEMENT_RATE_LIMITER: RateLimit;
}

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; content: string };

const MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const MAX_HISTORY = 8;
const MAX_MESSAGE_LENGTH = 800;
const IMPROVEMENT_DESTINATION = "js@genbajapan.com";
const IMPROVEMENT_SENDER = "notifications@genbajapan.com";
const IMPROVEMENT_CATEGORIES = new Set([
  "情報が足りない",
  "説明がわかりにくい",
  "内容が古い・誤っている",
  "画面が使いにくい",
  "その他",
]);

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

  // 直近のuser発言だけでなく、直近数ターンの会話も検索クエリに含める(company名を省略したフォローアップ質問に対応するため)
  const recentUserMessages = messages
    .filter((message) => message.role === "user")
    .slice(-3)
    .map((message) => message.content)
    .join(" ");
  const relevantBlocks = retrieveRelevantBlocks(knowledgeBlocks, recentUserMessages || lastUserMessage.content, 3);
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

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, maxLength);
}

async function handleImprovementRequest(request: Request, env: Env): Promise<Response> {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");
  const headers: Record<string, string> = {};
  if (origin === requestUrl.origin) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers.Vary = "Origin";
  }

  if (request.method === "OPTIONS") {
    if (origin !== requestUrl.origin) return jsonResponse({ error: "origin_not_allowed" }, { status: 403 }, null);
    return new Response(null, { headers: { ...headers, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" } });
  }
  if (request.method !== "POST") return jsonResponse({ error: "method_not_allowed" }, { status: 405, headers }, null);
  if (origin !== requestUrl.origin) return jsonResponse({ error: "origin_not_allowed" }, { status: 403 }, null);

  const contentLength = Number(request.headers.get("Content-Length") ?? "0");
  if (contentLength > 12_000) return jsonResponse({ error: "payload_too_large" }, { status: 413, headers }, null);

  let payload: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("invalid_payload");
    payload = parsed as Record<string, unknown>;
  } catch {
    return jsonResponse({ error: "invalid_json" }, { status: 400, headers }, null);
  }

  // Botが埋める非表示欄。送信成功のように返し、再試行を誘発しない。
  if (cleanText(payload.companyWebsite, 200)) return jsonResponse({ ok: true }, { status: 200, headers }, null);

  const companySlug = cleanText(payload.companySlug, 80);
  const company = getCompany(companySlug);
  const category = cleanText(payload.category, 40);
  const section = cleanText(payload.section, 120);
  const message = cleanText(payload.message, 2_000);
  const pageUrl = cleanText(payload.pageUrl, 500);
  const token = cleanText(payload.visitorToken, 100);

  if (!company || !IMPROVEMENT_CATEGORIES.has(category) || message.length < 10 || !/^[a-zA-Z0-9-]{8,100}$/.test(token)) {
    return jsonResponse({ error: "invalid_fields" }, { status: 400, headers }, null);
  }

  try {
    const submittedUrl = new URL(pageUrl);
    const expectedPaths = [`/companies/${company.slug}`, `/companies/${company.slug}.html`];
    if (submittedUrl.origin !== origin || !expectedPaths.includes(submittedUrl.pathname.replace(/\/$/, ""))) {
      return jsonResponse({ error: "invalid_page" }, { status: 400, headers }, null);
    }
  } catch {
    return jsonResponse({ error: "invalid_page" }, { status: 400, headers }, null);
  }

  const rateLimit = await env.IMPROVEMENT_RATE_LIMITER.limit({ key: `improvement:${token}` });
  if (!rateLimit.success) return jsonResponse({ error: "rate_limited" }, { status: 429, headers }, null);

  const receivedAt = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
  const emailBody = [
    "Genbaの企業ページから改善要請が届きました。",
    "",
    `企業：${company.name}`,
    `要請の種類：${category}`,
    `対象箇所：${section || "未指定"}`,
    "",
    "【改善してほしい内容】",
    message,
    "",
    `ページURL：${pageUrl}`,
    `受信日時：${receivedAt}`,
  ].join("\n");

  try {
    await env.IMPROVEMENT_EMAIL.send({
      from: { email: IMPROVEMENT_SENDER, name: "Genba改善要請" },
      to: IMPROVEMENT_DESTINATION,
      subject: "改善要請",
      text: emailBody,
    });
    return jsonResponse({ ok: true }, { status: 200, headers }, null);
  } catch (deliveryError) {
    console.error("Improvement request email delivery failed", deliveryError);
    return jsonResponse({ error: "email_delivery_failed" }, { status: 502, headers }, null);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin");

    if (url.pathname === "/api/chat") {
      return handleChat(request, env, origin);
    }

    if (url.pathname === "/api/improvement-request") {
      return handleImprovementRequest(request, env);
    }

    if (url.pathname === "/signals" || url.pathname === "/signals/") {
      return Response.redirect(`${url.origin}/#hiring-signals`, 301);
    }

    if (
      url.pathname === "/companies/salesforce" ||
      url.pathname === "/companies/salesforce/" ||
      url.pathname === "/companies/servicenow" ||
      url.pathname === "/companies/servicenow/"
    ) {
      return Response.redirect(`${url.origin}/companies`, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
