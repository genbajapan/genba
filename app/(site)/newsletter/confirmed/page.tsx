import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import NewsletterSignupEvent from "@/components/NewsletterSignupEvent";

export const metadata: Metadata = {
  title: "ニュースレター登録完了",
  robots: { index: false, follow: false },
};

export default function NewsletterConfirmedPage() {
  return (
    <>
      <NewsletterSignupEvent />
      <section className="content-section newsletter-status-page">
        <Container>
          <div className="newsletter-status-card">
            <p className="eyebrow">SUBSCRIBED</p>
            <h1>登録が完了しました。</h1>
            <p>Genbaから毎週月曜・木曜・土曜に、<strong>js@genbajapan.com</strong>を送信元としてお届けします。</p>
            <p className="source-note">各メール末尾のリンクから、いつでも配信を解除できます。</p>
            <div className="newsletter-status-actions">
              <Link href="/companies" className="button button-primary">企業を探す</Link>
              <Link href="/jobs" className="button button-secondary">営業求人を見る</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
