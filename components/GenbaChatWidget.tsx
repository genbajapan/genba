"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type ChatMessage = { role: "user" | "assistant"; content: string; sources?: Array<{ id: string; title: string }> };

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "こんにちは。Genba掲載企業のデータや、外資SaaS営業のキャリアについて壁打ち相手になります。会員登録は不要です。何を知りたいですか?",
};

export default function GenbaChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isComposingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="genba-chat-widget">
      <div className={`genba-chat-panel ${open ? "genba-chat-panel-open" : "genba-chat-panel-closed"}`} role="dialog" aria-label="Genba AIチャット" aria-hidden={!open}>
        <div className="genba-chat-panel-head">
          <div>
            <strong>Genba AIチャット</strong>
            <span>掲載企業データを根拠に回答します</span>
          </div>
          <button type="button" aria-label="閉じる" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="genba-chat-messages" ref={scrollRef}>
          {messages.map((message, index) => {
            const companySources = message.sources?.filter((source) => source.id !== "about-genba") ?? [];
            return (
              <div key={index} className={`genba-chat-message genba-chat-message-${message.role}`}>
                <div className="genba-chat-bubble">
                  <p>{message.content}</p>
                </div>
                {companySources.length > 0 && (
                  <div className="genba-chat-company-links">
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
        <p className="genba-chat-disclaimer">
          AIによる自動回答です。内容の正確性は各企業の個別ページ・出典元でご確認ください。会員登録やメールアドレスの入力は不要で、この会話はGenbaのデータベースに保存されません。
        </p>
      </div>

      <button type="button" className="genba-chat-toggle" onClick={() => setOpen((prev) => !prev)}>
        {open ? "閉じる" : "AIチャット"}
      </button>
    </div>
  );
}
