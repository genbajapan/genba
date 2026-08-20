import Link from "next/link";
import Container from "@/components/Container";

type NewsletterCompany = {
  index: string;
  kind: string;
  name: string;
  category: string;
  status: string;
  statusClass: "active" | "hiring" | "preentry";
  summary: string;
  perspective: string;
  perspectiveLabel?: string;
  cta: string;
  href: string;
};

const companies: NewsletterCompany[] = [
  {
    index: "01",
    kind: "有名企業",
    name: "Figma",
    category: "プロダクト開発・AI協働",
    status: "積極採用",
    statusClass: "active",
    summary:
      "Figmaはdesign toolから、Design、Dev Mode、FigJam、Sites、Makeまでをつなぐproduct-development platformへ広がっています。三菱電機の公式事例では、あるprojectのprototype構築が2週間から1日へ短縮されました。",
    perspective:
      "design部門だけでなく、Product、Engineering、Marketing、IT・Securityを同じworkflowへ巻き込むplatform saleです。東京ではSales、Solutions、Onboarding、Enablement、TAMまで対象8求人を確認でき、new logoからadoptionまで日本で組織を厚くしている局面です。",
    cta: "東京の8つの役割を見る",
    href: "/companies/figma",
  },
  {
    index: "02",
    kind: "穴場企業",
    name: "Zilliz",
    category: "AIデータ基盤",
    status: "積極採用",
    statusClass: "active",
    summary:
      "RAGやAI agentは、欲しい情報を正しく検索できなければ賢くなりません。Zillizは、その検索部分を担うvector database「Milvus」をopen sourceで育て、production運用をZilliz Cloudで支える会社です。公式記事によると、Cloud顧客のおよそ80%がMilvus userから始まっています。",
    perspective:
      "AIのdemoを見せて終わる営業ではなく、PoCをproductionへ移す際の検索精度、latency、scale、安定性、costを技術teamと詰める仕事です。TokyoでEnterprise AEとFounding Field Engineerを同時募集しているため、完成した日本組織へ入るより、技術側の相棒と市場を立ち上げたい人に面白い局面です。",
    cta: "日本立ち上げの2つの役割を見る",
    href: "/companies/zilliz",
  },
  {
    index: "03",
    kind: "採用の動き",
    name: "Dialpad",
    category: "AI Communications",
    status: "採用中",
    statusClass: "hiring",
    summary:
      "Dialpadは「cloud電話の置き換え」に見えますが、本丸は企業に眠る会話dataです。通話、meeting、contact centerを一つにつなぎ、日本語でもリアルタイム文字起こし、要約、action item、coachingを業務の中へ組み込みます。公式サイトでは世界3万社超、70カ国超での導入を案内しています。",
    perspective:
      "商談はIT部門の電話基盤から始めても、Supportの応対品質、managerのcoaching、Salesの立ち上がりまで広げられます。東京で募集中のMid-Market AEは、prospectingから提案、交渉、closeまでを持つfull-cycle。AIを抽象論ではなく、毎日の会話が変わるところまで売りたい人向けです。",
    cta: "Mid-Market AEが売るものを見る",
    href: "/companies/dialpad",
  },
  {
    index: "04",
    kind: "異色企業",
    name: "Planet",
    category: "衛星データ・地理空間情報",
    status: "採用中",
    statusClass: "hiring",
    summary:
      "Planetの価値は、きれいな衛星画像を一枚売ることではありません。地球の陸域を高頻度で観測し続け、過去のarchiveと比べて「いつ、どこで、何が変わったか」を意思決定へ変える会社です。公式には65カ国超・900顧客へ提供し、農業、災害、森林、政府・防衛まで用途が広がっています。",
    perspective:
      "SaaSの定番商材とはかなり違います。日本のDefence & Intelligence AEは、政府・National Security機関のmissionを理解し、partner、pre-sales、Customer Successと政府調達やtechnical validationを進める役割。衛星data、AIによる変化検知、公共領域の長期商談を横断できる希少性があります。応募期限は2026年9月27日です。",
    cta: "日本のDefence & Intelligence求人を見る",
    href: "/companies/planet",
  },
  {
    index: "05",
    kind: "日本進出候補",
    name: "Airtable",
    category: "業務アプリ・AI workflow",
    status: "日本未進出",
    statusClass: "preentry",
    summary:
      "Airtableは、表計算の使いやすさとdatabaseの構造を組み合わせ、現場teamがshared dataから自分たちの業務appを作れるplatformです。世界50万組織が利用し、West Elmでは商品撮影に関わる部門をつないで週85時間を削減。単なるtask管理ではなく、分断した業務そのものを組み替えられる点が魅力です。",
    perspective:
      "700人超・世界6拠点を持ち、SydneyからAPACを見られる一方、本日の公式CareersではJapan・Tokyo求人を確認できません。日本語対応、国内顧客事例、partner、Japan担当求人のどれが最初に出るか。今すぐ応募する会社ではなく、日本進出のsignalが揃う前から覚えておきたい1社です。",
    perspectiveLabel: "日本進出を先回りすると：",
    cta: "日本進出の成立条件を見る",
    href: "/companies/airtable",
  },
];

export default function NewsletterIssue001() {
  return (
    <main className="newsletter-issue-page">
      <section className="newsletter-issue-hero">
        <Container>
          <p className="eyebrow">GENBA HAKKUTSU</p>
          <h1>Genba発掘 #001</h1>
          <p>AIデータ、衛星、会話AIの5社</p>
          <div className="newsletter-issue-meta" aria-label="配信情報">
            <span>2026.08.15</span>
            <span>5 COMPANIES</span>
            <span>3 MIN READ</span>
          </div>
        </Container>
      </section>

      <Container className="newsletter-issue-shell">
        <section className="newsletter-issue-intro">
          <p>Genba編集長です！</p>
          <p>皆さん、いつもありがとうございます。</p>
          <p>
            Genba発掘シリーズでは、あなたにとっての優良、穴場な小中規模の外資IT企業について、そして日本に進出してきたらアツい外資ITと出会える可能性にかけて、5社短くお届けします。
          </p>
          <p>
            1社でも「こんな会社があったのか」と思えたら、そこから先はGenbaで深く見てください。
          </p>
        </section>

        <div className="newsletter-issue-list">
          {companies.map((company) => (
            <article className="newsletter-company" key={company.name}>
              <div className="newsletter-company-index">
                <strong>{company.index}</strong>
                <span>{company.kind}</span>
              </div>
              <div className="newsletter-company-body">
                <div className="newsletter-company-title">
                  <div>
                    <h2>{company.name}</h2>
                    <p>{company.category}</p>
                  </div>
                  <span className={`newsletter-company-status ${company.statusClass}`}>
                    {company.status}
                  </span>
                </div>
                <p>{company.summary}</p>
                <p className="newsletter-company-perspective">
                  <strong>{company.perspectiveLabel ?? "仕事として見ると："}</strong>
                  {company.perspective}
                </p>
                <Link href={company.href}>{company.cta} →</Link>
              </div>
            </article>
          ))}
        </div>

        <section className="newsletter-issue-cta">
          <p className="eyebrow">TODAY&apos;S DISCOVERY</p>
          <h2>今日の1社はありましたか？</h2>
          <p>
            5社全部を調べる必要はありません。1社でも「知らなかったけど、少し面白そう」があれば、今日の発見は成功です。
          </p>
          <Link className="button button-primary" href="/companies">
            Genbaで外資企業をもっと探す
          </Link>
        </section>

        <p className="newsletter-issue-note">
          Genbaは、外資IT企業の日本採用を公開情報から整理する無料メディアです。求人への応募は各社の公式採用ページで行ってください。
        </p>
      </Container>
    </main>
  );
}
