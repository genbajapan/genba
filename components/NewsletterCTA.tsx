import Link from "next/link";

export default function NewsletterCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "newsletter-card newsletter-card-compact" : "newsletter-card"}>
      <div>
        <p className="eyebrow eyebrow-light">GENBA NEWSLETTER</p>
        <h2>注目の小中規模＆日本未進出外資ITを、週3回。</h2>
        <p>新着求人、募集停止、注目企業の動きをテーマ別に無料で届けます。読者への有料化は予定していません。</p>
      </div>
      <Link href="/newsletter" className="button button-light">
        無料で受け取る
      </Link>
    </section>
  );
}
