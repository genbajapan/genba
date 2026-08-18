import Container from "@/components/Container";
import NewsletterSignupForm from "@/components/NewsletterSignupForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "無料ニュースレター", description: "外資IT企業の採用変化を毎週月曜・木曜・土曜に無料で受け取る。", path: "/newsletter" });

export default function NewsletterPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <p className="eyebrow">GENBA NEWSLETTER</p>
          <h1>情報を追いかける時間を、減らす。</h1>
          <p className="page-lead">動いた企業、新しい営業求人、見落としたくない採用変化を毎週月曜・木曜・土曜に分けて短く整理。読者は無料です。</p>
        </Container>
      </section>
      <section className="content-section">
        <Container className="detail-grid newsletter-detail-grid">
          <div className="prose-genba newsletter-detail-content">
            <h2>月曜・木曜・土曜に届くもの</h2>
            <ul>
              <li>新しく確認した外資IT・SaaS営業求人</li>
              <li>募集開始・停止・対象領域の変化</li>
              <li>今見るべき小中規模外資と、その理由</li>
              <li>現役外資AEの視点による短い解説</li>
            </ul>
            <h2>短く、必要な変化だけ</h2>
            <p>1通につきテーマを絞り、求人の羅列ではなく「何が変わり、営業候補者の判断にどう影響するか」を届けます。</p>
            <h2>無料である理由</h2>
            <p>Genbaは読者課金ではなく、採用企業・人材関連企業・SaaS企業からの明示された広告やスポンサーシップで運営する方針です。編集内容と広告は分離します。</p>
          </div>
          <aside className="detail-sidebar newsletter-sidebar">
            <NewsletterSignupForm sourceLocation="newsletter_page" />
          </aside>
        </Container>
      </section>
    </>
  );
}
