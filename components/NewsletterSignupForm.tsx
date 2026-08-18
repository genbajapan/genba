"use client";

import { useEffect, useRef } from "react";

const kitFormUid = process.env.NEXT_PUBLIC_KIT_FORM_UID?.trim() || "e55c8dd730";
const kitFormEmbedUrl = process.env.NEXT_PUBLIC_KIT_FORM_EMBED_URL?.trim() || "https://genba-2.kit.com/e55c8dd730/index.js";
const kitFormUrl = process.env.NEXT_PUBLIC_KIT_FORM_URL?.trim() || "https://genba-2.kit.com/e55c8dd730";

const isConfigured = Boolean(kitFormUid && kitFormEmbedUrl?.startsWith("https://"));

export default function NewsletterSignupForm({
  sourceLocation = "newsletter_page",
  companySlug,
  compact = false,
}: {
  sourceLocation?: string;
  companySlug?: string;
  compact?: boolean;
}) {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isConfigured || !embedRef.current) return;

    const container = embedRef.current;
    const script = document.createElement("script");
    script.async = true;
    script.dataset.uid = kitFormUid;
    script.src = kitFormEmbedUrl;
    container.appendChild(script);

    return () => container.replaceChildren();
  }, []);

  return (
    <div
      className={compact ? "newsletter-signup newsletter-signup-compact" : "newsletter-signup"}
      aria-labelledby={compact ? undefined : "newsletter-signup-title"}
      data-newsletter-form
      data-analytics-location={sourceLocation}
      data-analytics-company-slug={companySlug}
    >
      {!compact && (
        <>
          <p className="eyebrow" id="newsletter-signup-title">FREE SUBSCRIPTION</p>
          <h2><span>次に知るべき小中規模外資</span><span>5社を、週3回無料で受け取る</span></h2>
          <p>求人の有無だけでなく、仕事として面白い理由と応募前の確認点まで3分で読めます。メールアドレスを入力後、届いた確認メールのボタンを押すと登録完了です。</p>
        </>
      )}

      {isConfigured ? (
        <div ref={embedRef} className="newsletter-kit-embed">
          <noscript>
            {kitFormUrl ? <a href={kitFormUrl}>Kitの登録フォームを開く</a> : "登録フォームを表示するにはJavaScriptを有効にしてください。"}
          </noscript>
        </div>
      ) : (
        <div className="newsletter-form-pending">
          <p>配信フォームの接続準備中です。接続完了まではメールで購読希望を受け付けています。</p>
          <a
            href="mailto:js@genbajapan.com?subject=Genba%20%E7%84%A1%E6%96%99%E8%B3%BC%E8%AA%AD%E5%B8%8C%E6%9C%9B&body=Genba%EF%BC%88%E9%80%B13%E5%9B%9E%EF%BC%89%E3%81%AE%E7%84%A1%E6%96%99%E8%B3%BC%E8%AA%AD%E3%82%92%E5%B8%8C%E6%9C%9B%E3%81%97%E3%81%BE%E3%81%99%E3%80%82"
            className="button button-primary"
          >
            メールで仮登録
          </a>
        </div>
      )}

      <p className="newsletter-consent">登録により、<a href="/privacy">プライバシーポリシー</a>と毎週月曜・木曜・土曜のメール配信に同意したものとします。確認前のアドレスには本配信を行わず、いつでも解除できます。</p>
      <p className="newsletter-sender">送信元：Genba &lt;js@genbajapan.com&gt;</p>
    </div>
  );
}
