"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

type ChatMessage = { role: "user" | "assistant"; content: string; sources?: Array<{ id: string; title: string }> };

const STORAGE_KEY = "genba-chat-history-v1";
const MAX_STORED_MESSAGES = 40;

// **太字** をReact要素の<strong>に変換する(dangerouslySetInnerHTMLは使わず、AI生成テキストへのHTML混入を避ける)
function renderRichText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, lineIndex) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g).filter((part) => part.length > 0);
    return (
      <Fragment key={lineIndex}>
        {lineIndex > 0 && <br />}
        {parts.map((part, partIndex) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={partIndex}>{part.slice(2, -2)}</strong>
          ) : (
            <Fragment key={partIndex}>{part}</Fragment>
          ),
        )}
      </Fragment>
    );
  });
}

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "こんにちは。Genba掲載企業のデータや、外資SaaS営業のキャリアについて壁打ち相手になります。会員登録は不要です。何を知りたいですか?",
};

function loadStoredMessages(): ChatMessage[] | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

export default function GenbaChatWidget() {
  // closed: 非表示 / peek: モバイルではボトムシート(画面の2/5)、デスクトップでは通常のドッキングパネル / full: モバイルではほぼ全画面
  const [sheetState, setSheetState] = useState<"closed" | "peek" | "full">("closed");
  const open = sheetState !== "closed";
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const isComposingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hydratedRef = useRef(false);

  // ページ遷移(特にフルリロードを伴う遷移)をまたいで会話を復元する。サーバーには送信・保存しない。
  useEffect(() => {
    const stored = loadStoredMessages();
    if (stored) setMessages(stored);
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current || typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_STORED_MESSAGES)));
    } catch {
      // sessionStorageが使えない環境(プライベートモード等)では単に保存をスキップする
    }
  }, [messages]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.map(({ role, content }) => ({ role, content })) }),
      });

      if (!response.ok) throw new Error("request_failed");

      const data = (await response.json()) as { answer?: string; sources?: Array<{ id: string; title: string }> };
      if (!data.answer) throw new Error("no_answer");

      setMessages((prev) => [...prev, { role: "assistant", content: data.answer!, sources: data.sources }]);
    } catch {
      setError("回答の取得に失敗しました。少し時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    // 日本語入力の変換確定EnterではisComposingがtrueになるため、その場合は送信しない
    if (event.key === "Enter" && !event.shiftKey && !isComposingRef.current && event.nativeEvent.isComposing !== true) {
      event.preventDefault();
      sendMessage();
    }
  }

  function resetConversation() {
    setMessages([WELCOME_MESSAGE]);
    setError(null);
    if (typeof window !== "undefined") {
      try {
        window.sessionStorage.removeItem(STORAGE_KEY);
      } catch {
        // no-op
      }
    }
  }

  return (
    <>
      {sheetState === "closed" && (
        <button type="button" className="genba-chat-toggle" onClick={() => setSheetState("peek")}>
          AIチャット
        </button>
      )}

      <div className={`genba-chat-dock genba-chat-dock-${sheetState}`} role="dialog" aria-label="Genba AIチャット" aria-hidden={!open}>
        <div className="genba-chat-panel-head">
          <div>
            <strong>Genba AIチャット</strong>
            <span>掲載企業データを根拠に回答します。ページを移動しても会話は続きます。</span>
          </div>
          <div className="genba-chat-panel-head-actions">
            <button type="button" onClick={resetConversation} className="genba-chat-reset">
              新しい会話
            </button>
            <button
              type="button"
              onClick={() => setSheetState(sheetState === "full" ? "peek" : "full")}
              className="genba-chat-expand"
            >
              {sheetState === "full" ? "縮める" : "広げる"}
            </button>
            <button type="button" aria-label="閉じる" onClick={() => setSheetState("closed")} className="genba-chat-close">
              ✕
            </button>
          </div>
        </div>

        <div className="genba-chat-messages" ref={scrollRef}>
          {messages.map((message, index) => {
            const companySources = message.sources?.filter((source) => source.id !== "about-genba") ?? [];
            return (
              <div key={index} className={`genba-chat-message genba-chat-message-${message.role}`}>
                <div className="genba-chat-bubble">
                  <p>{renderRichText(message.content)}</p>
                </div>
                {companySources.length > 0 && (
                  <div className="genba-chat-company-links">
                    <p className="genba-chat-company-links-label">現時点の情報で方向性が合いそうな会社</p>
                    {companySources.map((source) => (
                      <Link key={source.id} href={`/companies/${source.id}`} className="genba-chat-company-chip">
                        {source.title}のページを見る <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {loading && (
            <div className="genba-chat-message genba-chat-message-assistant genba-chat-message-loading">
              <div className="genba-chat-bubble genba-chat-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>

        {error && <p className="genba-chat-error">{error}</p>}

        <div className="genba-chat-input-row">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            onCompositionStart={() => (isComposingRef.current = true)}
            onCompositionEnd={() => (isComposingRef.current = false)}
            placeholder="質問を入力してください(例: Datadogのカルチャーは?)"
            rows={2}
          />
          <button type="button" onClick={sendMessage} disabled={loading || input.trim().length === 0}>
            送信
          </button>
        </div>
        <div className="genba-chat-disclaimer-row">
          <button type="button" className="genba-chat-disclaimer-toggle" onClick={() => setShowDisclaimer((prev) => !prev)}>
            ご利用にあたって
          </button>
          {showDisclaimer && (
            <div className="genba-chat-disclaimer-popover">
              <p>
                AIによる自動回答です。内容の正確性は各企業の個別ページ・出典元でご確認ください。会員登録やメールアドレスの入力は不要です。この会話はブラウザのタブを閉じるまでの間だけ保持され、Genbaのサーバーには保存されません。
              </p>
              <button type="button" onClick={() => setShowDisclaimer(false)}>
                閉じる
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
