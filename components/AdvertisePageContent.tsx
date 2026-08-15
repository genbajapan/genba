import Link from "next/link";
import Container from "@/components/Container";
import AdvertiseInquiryForm from "@/components/AdvertiseInquiryForm";

type Language = "ja" | "en";

export default function AdvertisePageContent({ language = "ja" }: { language?: Language }) {
  const en = language === "en";

  const audiences = en ? [
    {
      label: "CURRENT PROFESSIONALS",
      title: "People already working in global IT and SaaS",
      body: "Sales professionals who compare products, markets, sales motions and the reality of Japan teams—not company names alone.",
    },
    {
      label: "FUTURE CANDIDATES",
      title: "Strong professionals from Japanese IT companies considering a move into global IT",
      body: "Readers seriously exploring a global IT career and looking beyond famous employers to discover smaller global companies and promising companies that have not yet entered Japan.",
    },
  ] : [
    {
      label: "CURRENT PROFESSIONALS",
      title: "外資IT・SaaSで働く現役層",
      body: "企業名だけでなく、製品、市場、営業モーション、日本組織の実態まで比較して次のキャリアを考える人たちです。",
    },
    {
      label: "FUTURE CANDIDATES",
      title: "外資ITへの転職を本気で考えている、実力ある日系IT出身層",
      body: "有名企業だけでなく、まだ知られていない小中規模外資や、日本進出前の注目企業まで選択肢を広げたい人たちです。",
    },
  ];

  const values = en ? [
    ["Discovery", "Introduce companies readers would not have found through job boards or name recognition alone."],
    ["Understanding", "Explain the product, buyer, market and sales role using official public information and clearly separated Genba analysis."],
    ["Relevant reach", "Connect useful sponsor information with a focused audience through the site and the Genba newsletter."],
  ] : [
    ["発見", "求人媒体や知名度だけでは出会えなかった企業を、読者の新しい選択肢として届けます。"],
    ["理解", "公開情報をもとに、製品、Buyer、市場、営業職としての面白さを整理し、Genba分析と分けて伝えます。"],
    ["適切な接点", "サイトと「Genba発掘」を通じて、読者に本当に関係するスポンサー情報だけを届けます。"],
  ];

  return (
    <>
      <section className="page-hero advertise-hero advertise-simple-hero">
        <Container>
          <div className="advertise-language-row">
            <span>{en ? "SPONSORSHIP INQUIRY" : "SPONSORSHIP / PARTNERSHIP"}</span>
            <div aria-label={en ? "Language" : "言語切り替え"}>
              <Link href="/advertise" className={!en ? "is-active" : ""}>日本語</Link>
              <Link href="/en/advertise" className={en ? "is-active" : ""}>English</Link>
            </div>
          </div>
          <div className="advertise-simple-hero-copy">
            <p className="eyebrow">{en ? "FOR COMPANIES SERIOUS ABOUT WINNING IN JAPAN" : "日本市場を本気で取りにいく企業へ"}</p>
            <h1>{en ? "Global IT professionals looking for their next challenge are gathering at Genba." : "次の挑戦を探す外資戦士たちが、Genbaに集まっています。"}</h1>
            <p className="page-lead">{en ? "Genba delivers useful, decision-grade intelligence every day to ambitious professionals working in, or seriously considering, global IT and SaaS careers in Japan. We welcome sponsors prepared to invest in exceptional talent and build a genuinely strong Japan organisation—not simply fill an advertising slot." : "Genbaは、外資IT・SaaSで成果を出す現役層と、次の挑戦を真剣に選ぶ人へ、企業とキャリアを判断するための価値ある情報を日々届けます。スポンサーとして迎えたいのは、広告枠を埋めたい会社ではなく、日本市場を取りにいくために、優秀な人材と強い組織づくりへ本気で投資する会社です。"}</p>
            <a href="#inquiry" className="button button-primary">{en ? "Contact Genba" : "スポンサー掲載について相談する"}</a>
          </div>
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <div className="advertise-section-heading">
            <p className="eyebrow">{en ? "WHO READS GENBA" : "想定読者"}</p>
            <h2>{en ? "A focused audience making career decisions in global IT." : "外資ITの次の選択肢を、真剣に探している人たち。"}</h2>
          </div>
          <div className="advertise-audience-grid">
            {audiences.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <div className="advertise-section-heading">
            <p className="eyebrow">{en ? "THE VALUE OF GENBA" : "このメディアの価値"}</p>
            <h2>{en ? "Turn unfamiliar names into informed consideration." : "知らなかった会社を、検討できる会社へ。"}</h2>
            <p>{en ? "Genba does not sell rankings or favourable conclusions. We create a credible path from discovery to understanding, then to the company’s official information." : "Genbaが売るのは、順位や好意的な評価ではありません。企業との発見をつくり、仕事として判断できる理解へつなぎ、公式情報へ届けます。"}</p>
          </div>
          <div className="advertise-simple-value-grid">
            {values.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="advertise-policy-strip">
            <strong>{en ? "EDITORIAL POLICY" : "編集方針"}</strong>
            <span>{en ? "Sponsored content is clearly labelled" : "広告・スポンサー表記を明示"}</span>
            <span>{en ? "Editorial analysis remains independent" : "対価で評価・分析を変更しない"}</span>
            <span>{en ? "No individual reader data is shared" : "読者の個人データを提供しない"}</span>
          </div>
        </Container>
      </section>

      <section id="inquiry" className="content-section advertise-inquiry-section">
        <Container className="advertise-inquiry-layout">
          <div className="advertise-section-heading">
            <p className="eyebrow">{en ? "INQUIRY" : "お問い合わせ"}</p>
            <h2>{en ? "Contact us about sponsorship." : "スポンサー掲載について相談する。"}</h2>
            <p>{en ? "Send us a short introduction to your company or service and what you would like to discuss. We will reply after reviewing your message, and share placement options and pricing individually." : "会社・サービスの概要と、ご相談内容を簡単にお送りください。内容を確認のうえ返信し、掲載方法や料金を個別にご案内します。"}</p>
          </div>
          <AdvertiseInquiryForm language={language} />
        </Container>
      </section>
    </>
  );
}
