"use client";

import { useEffect, useId, useRef, useState } from "react";

type Props = {
  companyName: string;
  companySlug: string;
};

type FormState = "idle" | "sending" | "sent" | "error";

const VISITOR_KEY = "genba-improvement-visitor-v1";

function visitorToken() {
  try {
    const existing = window.localStorage.getItem(VISITOR_KEY);
    if (existing) return existing;
    const created = window.crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, created);
    return created;
  } catch {
    return window.crypto.randomUUID();
  }
}

export default function CompanyImprovementRequest({ companyName, companySlug }: Props) {
  const titleId = useId();
  const messageId = useId();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    messageRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDialog();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const controls = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, select, textarea, input:not([type='hidden'])"))
        .filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
      if (controls.length === 0) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function closeDialog() {
    if (state === "sending") return;
    setOpen(false);
    setState("idle");
    setError("");
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = String(data.get("message") ?? "").trim();
    if (message.length < 10) {
      setError("改善してほしい内容を10文字以上で入力してください。");
      return;
    }

    setState("sending");
    setError("");
    try {
      const response = await fetch("/api/improvement-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          companySlug,
          category: String(data.get("category") ?? ""),
          section: String(data.get("section") ?? ""),
          message,
          companyWebsite: String(data.get("companyWebsite") ?? ""),
          pageUrl: window.location.href,
          visitorToken: visitorToken(),
        }),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null) as { error?: string } | null;
        if (response.status === 429) throw new Error("rate_limited");
        throw new Error(result?.error ?? "request_failed");
      }
      form.reset();
      setState("sent");
    } catch (requestError) {
      setState("error");
      setError(requestError instanceof Error && requestError.message === "rate_limited"
        ? "短時間に送信できる回数を超えました。少し時間をおいて再度お試しください。"
        : "送信できませんでした。時間をおいて再度お試しください。");
    }
  }

  return (
    <>
      <button ref={triggerRef} type="button" className="improvement-request-trigger" onClick={() => setOpen(true)}>
        <span aria-hidden="true">✎</span>
        このページを改善
      </button>

      {open && (
        <div className="improvement-request-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}>
          <div ref={dialogRef} className="improvement-request-dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
            <header>
              <div>
                <span>IMPROVEMENT REQUEST</span>
                <h2 id={titleId}>{companyName}のページを改善する</h2>
              </div>
              <button type="button" aria-label="閉じる" onClick={closeDialog}>×</button>
            </header>

            {state === "sent" ? (
              <div className="improvement-request-success" role="status">
                <span aria-hidden="true">✓</span>
                <h3>改善要請を受け付けました</h3>
                <p>内容を確認し、追加調査や修正の判断に使います。ありがとうございます。</p>
                <button type="button" className="button button-primary" onClick={closeDialog}>閉じる</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="improvement-request-intro">解像度が足りない箇所、追加してほしい情報、わかりにくい説明をそのまま教えてください。画面を移動せず匿名で送信できます。</p>
                <div className="improvement-request-grid">
                  <label>
                    <span>要請の種類</span>
                    <select name="category" defaultValue="情報が足りない" required>
                      <option>情報が足りない</option>
                      <option>説明がわかりにくい</option>
                      <option>内容が古い・誤っている</option>
                      <option>画面が使いにくい</option>
                      <option>その他</option>
                    </select>
                  </label>
                  <label>
                    <span>対象箇所 <small>任意</small></span>
                    <input name="section" maxLength={120} placeholder="例：給与事情、想定できる売り方" />
                  </label>
                </div>
                <label className="improvement-request-message" htmlFor={messageId}>
                  <span>改善してほしい内容</span>
                  <textarea ref={messageRef} id={messageId} name="message" required minLength={10} maxLength={2000} rows={6} placeholder="例：日本のAEが実際にどの業界を担当するのか、海外情報も含めて仮説がほしい。" />
                </label>
                <label className="improvement-request-honeypot" aria-hidden="true">
                  <span>Webサイト</span>
                  <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
                </label>
                <p className="improvement-request-note">個人情報、勤務先で知った非公開情報、第三者を特定できる内容は入力しないでください。</p>
                {error && <p className="improvement-request-error" role="alert">{error}</p>}
                <footer>
                  <button type="button" className="button button-secondary" onClick={closeDialog}>キャンセル</button>
                  <button type="submit" className="button button-primary" disabled={state === "sending"}>{state === "sending" ? "送信中…" : "改善要請を送信"}</button>
                </footer>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
