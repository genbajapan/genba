import Container from "@/components/Container";
import AdvertiseInquiryForm from "@/components/AdvertiseInquiryForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "掲載パートナーについて",
  description: "外資IT営業人材に向けて、採用背景と企業の魅力を正確に届けるGenba掲載パートナー。月額15万円から、1か月から掲載できます。",
  path: "/advertise",
});

const audiences = [
  {
    index: "01",
    title: "採用企業",
    body: "日本で営業人材を採用する小中規模の外資IT企業。知名度だけでは伝わりにくい製品、顧客課題、営業の面白さ、採用背景を深く届けたい企業向け。",
  },
  {
    index: "02",
    title: "外資IT特化型の採用支援会社",
    body: "外資IT・SaaSの営業職に専門性を持つ人材紹介会社、RPO、エグゼクティブサーチ。得意領域と支援価値を読者へ明確に伝えたい事業者向け。",
  },
];

const inclusions = [
  "企業一覧上部の独立したSponsored枠",
  "企業ページの情報拡充",
  "企業提供の事実・採用背景・注力職種の掲載",
  "公式求人へのリンク",
  "掲載期間中は無制限で情報更新を依頼可能",
  "更新依頼を受けてから原則2営業日以内に反映",
  "表示回数・クリック数の簡易レポート",
];

const steps = [
  { title: "掲載相談", body: "会社名、採用職種、掲載目的、希望開始日をフォームで送信。" },
  { title: "掲載可否の確認", body: "読者との適合性、公式求人、事業実態を確認。原則2営業日以内に回答。" },
  { title: "情報提出", body: "公式URL、採用背景、注力職種、掲載したい事実を所定フォームへ入力。" },
  { title: "原稿作成・事実確認", body: "Genbaが調査と提出情報をもとに作成。公開前の事実確認は1回。" },
  { title: "支払い・公開", body: "前払い確認後、5営業日以内に30日間掲載。終了前に継続を確認。" },
];

export default function AdvertisePage() {
  return (
    <>
      <section className="page-hero advertise-hero">
        <Container className="page-hero-grid">
          <div>
            <p className="eyebrow">GENBA PARTNERSHIP</p>
            <h1>外資IT営業を理解する読者へ、採用の背景まで届ける。</h1>
            <p className="page-lead">求人票だけでは伝わらない事業、製品、営業の面白さを、公開情報と企業提供事実に分けて掲載。読者の企業理解を深めるためのパートナープランです。</p>
          </div>
          <aside className="advertise-price-card" aria-label="掲載料金と期間">
            <span>ONE SIMPLE PLAN</span>
            <div><strong>15万円</strong><small>（税別）〜 / 月</small></div>
            <p>掲載期間は1か月から。初期費用・成功報酬なし。</p>
            <a href="#inquiry" className="button button-primary">掲載を相談する</a>
          </aside>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="advertise-section-heading">
            <p className="eyebrow">WHO IT IS FOR</p>
            <h2>対象は、2者だけ。</h2>
            <p>Genbaの読者と直接関係する採用企業・採用支援会社に限定します。</p>
          </div>
          <div className="advertise-audience-grid">
            {audiences.map((audience) => (
              <article key={audience.title}>
                <span>{audience.index}</span>
                <h3>{audience.title}</h3>
                <p>{audience.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <div className="advertise-plan-grid">
            <div className="advertise-plan-copy">
              <p className="eyebrow">WHAT IS INCLUDED</p>
              <h2>掲載パートナー</h2>
              <p>通常の企業順位やGenbaの分析結論を販売せず、通常掲載と分離したSponsored枠で認知と企業理解を支援します。</p>
              <div className="advertise-plan-terms">
                <div><span>費用</span><strong>15万円〜</strong><small>税別 / 月</small></div>
                <div><span>期間</span><strong>1か月〜</strong><small>自動更新なし</small></div>
              </div>
            </div>
            <ul className="advertise-inclusion-list">
              {inclusions.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></li>)}
            </ul>
          </div>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="advertise-section-heading">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>掲載までの流れ</h2>
            <p>相談から公開まで、確認ポイントと期限を明確に進めます。</p>
          </div>
          <div className="advertise-flow" aria-label="掲載までの5つのステップ">
            {steps.map((step, index) => (
              <div className="advertise-flow-item" key={step.title}>
                <article>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
                {index < steps.length - 1 && <b aria-hidden="true">→</b>}
              </div>
            ))}
          </div>
          <div className="advertise-policy-strip">
            <strong>掲載方針</strong>
            <span>Sponsored表記を明示</span>
            <span>企業提供事実とGenba分析を分離</span>
            <span>ランキング・分析結論は販売しない</span>
            <span>読者の個人データは提供しない</span>
          </div>
        </Container>
      </section>

      <section id="inquiry" className="content-section surface-section advertise-inquiry-section">
        <Container>
          <div className="advertise-section-heading">
            <p className="eyebrow">INQUIRY</p>
            <h2>掲載を相談する</h2>
            <p>現時点で分かる範囲で構いません。掲載可否は原則2営業日以内にご連絡します。</p>
          </div>
          <AdvertiseInquiryForm />
        </Container>
      </section>
    </>
  );
}
