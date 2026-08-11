import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "確認メールをご確認ください",
  robots: { index: false, follow: false },
};

export default function NewsletterCheckEmailPage() {
  return (
    <section className="content-section newsletter-status-page">
      <Container>
        <div className="newsletter-status-card">
          <p className="eyebrow">ONE MORE STEP</p>
          <h1>確認メールをご確認ください。</h1>
          <p><strong>js@genbajapan.com</strong>から届く確認メールを開き、本文の登録確認ボタンを押すと購読が完了します。</p>
          <p className="source-note">数分待っても届かない場合は、迷惑メール・プロモーションフォルダをご確認ください。</p>
          <Link href="/" className="button button-secondary">トップへ戻る</Link>
        </div>
      </Container>
    </section>
  );
}
