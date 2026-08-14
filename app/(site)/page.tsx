import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import HiringHeatmap from "@/components/HiringHeatmap";
import RandomCompanyGrid from "@/components/RandomCompanyGrid";
import { getCompanyCardSummary } from "@/lib/company-card-summary";
import { companies, jobs } from "@/lib/market-data";

export const metadata: Metadata = {
  title: { absolute: "Genba - 小中規模外資IT企業研究所" },
  description: "転職のたびにOTEを上げてきた現役外資SaaS AEが、日本の外資SaaS採用市場を毎日ウォッチ。情報収集・面接準備に役立つ知見を無料で届けます。",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const companyCardSummaries = Object.fromEntries(companies.map((company) => [company.slug, getCompanyCardSummary(company)]));
  const lastUpdated = [...companies.map((company) => company.lastChecked), ...jobs.map((job) => job.lastChecked)].sort().at(-1) ?? "—";
  const companySlugsWithOpenJobs = new Set(jobs.map((job) => job.companySlug));
  const companiesWithOpenJobs = companies.filter((company) => companySlugsWithOpenJobs.has(company.slug));
  const preEntryCompanies = companies.filter((company) => company.entryStatus === "not-entered");

  return (
    <>
      <section className="hero">
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">現役外資ITセールスマンによる運営</p>
            <h1>小中規模外資IT<br />企業研究所</h1>
            <p className="hero-lead">
              <span className="hero-lead-focus">
                <span className="hero-highlight hero-highlight-hiring">「日本で求人のある小中規模外資IT」</span><span className="hero-highlight-separator">・</span><span className="hero-highlight hero-highlight-pre-entry">「日本未進出の注目外資IT」</span><span className="hero-highlight-suffix">に完全特化。</span>
              </span>
              <span className="hero-lead-research">公開情報をベースに現役AE目線から情報整理をし、仮説や示唆を含めた企業研究サイトです。</span>
              <span className="hero-lead-closing">「ここだ」と思える次のフィールドを見つけられるように。</span>
            </p>
            <div className="hero-actions">
              <Link href="/companies" className="button button-primary">企業一覧</Link>
              <Link href="/jobs" className="button button-secondary">営業求人を見る</Link>
              <Link href="/insights" className="button button-secondary">外資ITのリアル記事</Link>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Genbaデータの概要">
            <div className="terminal-head"><span>GENBA / MARKET WATCH</span><span className="terminal-live">更新中</span></div>
            <Link href="/companies" className="terminal-stat" aria-label={`掲載企業 ${companies.length}社の各企業研究ページを見る`}>
              <span>掲載企業</span><strong>{companies.length}</strong><small>各企業研究ページ直結</small>
            </Link>
            <Link href="/companies?openJobs=1#company-results" className="terminal-stat" aria-label={`現在求人ありの企業 ${companiesWithOpenJobs.length}社の各企業研究ページを見る`}>
              <span>現在求人ありの企業</span><strong>{companiesWithOpenJobs.length}</strong><small>各企業研究ページ直結</small>
            </Link>
            <Link href="/jobs" className="terminal-stat" aria-label={`現在の求人 ${jobs.length}件の各社公式求人ページを見る`}>
              <span>現在の求人</span><strong>{jobs.length}</strong><small>各社公式求人ページ直結</small>
            </Link>
            <div className="terminal-foot">
              <span>サイト内更新日</span>
              <strong>{lastUpdated.replaceAll("-", ".")}</strong>
              <small>東京時間</small>
            </div>
          </aside>
        </Container>
      </section>

      <div className="trust-bar">
        <Container className="trust-inner"><span className="trust-label">編集原則</span><div className="trust-points"><span>公式情報を優先</span><span>更新日を明記</span><span>事実と分析を分離</span><span>広告は明示</span></div></Container>
      </div>

      <section className="content-section founder-note-section">
        <Container>
          <details className="founder-note-card">
            <summary className="founder-note-summary">
              <div>
                <p className="eyebrow">なぜGenbaを作ったか</p>
                <h2 className="founder-note-hook">Genba編集長は大手外資から小中規模の外資へ転職して、実感しました。</h2>
              </div>
              <span className="founder-note-toggle">
                <span className="founder-note-toggle-icon" aria-hidden="true">+</span>
                <span className="founder-note-toggle-label-closed">続きを読む</span>
                <span className="founder-note-toggle-label-open">閉じる</span>
              </span>
            </summary>
            <div className="founder-note-body">
              <p>まだ誰も耕していないテリトリー。肩書きではなく「実力と成果」で見られる正当な評価。魅力的で高いOTE、無駄な社内政治のない風通しの良さ。自分の貢献がダイレクトに成長につながる手応え。厳しい環境であることに変わりはない。けれども同時に高いスキルと当事者意識を持つチャレンジャーにとって、これほど素晴らしい環境はありません。しかし、いざ次の挑戦先を探そうとすると、情報がとにかく少ない。日本語で読める一次情報はほとんどなく、海外やLinkedInの情報源を漁っては断片をつなぎ合わせるしかありませんでした。</p>
              <p>「だったら、自分が本当に欲しかった解像度でまとめよう」そうして立ち上げたのがGenbaです。</p>
              <p className="founder-note-emphasis">「ここだ」と思える次のフィールドを見つけられるように。</p>
            </div>
          </details>

          <section className="audience-section" aria-labelledby="audience-title">
            <div className="audience-heading">
              <p className="eyebrow">WHO GENBA IS FOR</p>
              <h2 id="audience-title">こんな人のためのサイトです。</h2>
              <p>有名企業の次にある選択肢を知り、求人票だけでは見えない「その会社で勝てるか」を自分で判断したい人へ。</p>
            </div>

            <div className="audience-grid">
              <article className="audience-card audience-card-primary">
                <span className="audience-number">01</span>
                <p className="audience-kicker">NEXT CHALLENGE</p>
                <h3>大手外資から、次のフィールドを探している</h3>
                <p>ブランドよりも、テリトリー・OTE・裁量・昇進機会を重視。情報の少ない小中規模外資も、本気で次の候補に入れたい。</p>
              </article>

              <article className="audience-card">
                <span className="audience-number">02</span>
                <p className="audience-kicker">MARKET WATCH</p>
                <h3>今すぐではないが、いい話があれば動きたい</h3>
                <p>転職活動を始める前から、新規採用・組織拡大・日本参入の変化を定点観測しておきたい。</p>
              </article>

              <article className="audience-card">
                <span className="audience-number">03</span>
                <p className="audience-kicker">FIRST GLOBAL MOVE</p>
                <h3>日系IT・SaaSから、外資SaaSに挑戦したい</h3>
                <p>OTE、Quota、Territoryなどの仕組みを理解し、自分の経験がどの企業・ポジションで生きるかを知りたい。</p>
              </article>

              <article className="audience-card">
                <span className="audience-number">04</span>
                <p className="audience-kicker">NEXT AE ROLE</p>
                <h3>SDR・BDRからAEへ、次のキャリアを描きたい</h3>
                <p>社内昇進と他社への挑戦を比較し、若い組織の成長性やAEになれる機会を見極めたい。</p>
              </article>

              <article className="audience-card">
                <span className="audience-number">05</span>
                <p className="audience-kicker">SALES LEADERSHIP</p>
                <h3>日本立ち上げや、次のマネジメント機会を探している</h3>
                <p>日本市場のフェーズ、採用順序、組織体制から、会社の投資本気度と自分が担う役割を見極めたい。</p>
              </article>

              <article className="audience-card">
                <span className="audience-number">06</span>
                <p className="audience-kicker">GO-TO-MARKET CAREER</p>
                <h3>SE・CS・Partner Salesとして、伸びる環境を選びたい</h3>
                <p>製品の強さ、国内導入実績、パートナー戦略や周辺職種の採用から、日本事業全体の成長を判断したい。</p>
              </article>

              <article className="audience-card audience-card-forward">
                <span className="audience-number">07</span>
                <p className="audience-kicker">EARLY DISCOVERY</p>
                <h3>まだ日本で知られていない、次の外資を早く見つけたい</h3>
                <p>海外での成長、APAC展開、製品の日本対応を手がかりに、将来の一人目AEや初期GTMメンバーの機会を先回りしたい。</p>
              </article>
            </div>
          </section>
        </Container>
      </section>

      <section className="content-section market-section">
        <Container><HiringHeatmap /></Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="COMPANY TRACKER" title="「現場」でどの企業が動いているか" description="日本市場における採用の広がりを企業単位で整理。単発の求人票では見えにくい変化を追います。" href="/companies" linkLabel={`${companies.length}件の企業を全て見る`} />
          <RandomCompanyGrid companies={companiesWithOpenJobs} valueSummaries={companyCardSummaries} />
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="PRE-ENTRY WATCH" title="「日本未進出」注目企業" description="海外で成長し、今後の日本進出が注目される企業を、進出の可能性と障壁の両面から追います。" href="/companies?entry=not-entered#company-results" linkLabel={`日本未進出企業${preEntryCompanies.length}社をすべて見る`} />
          <RandomCompanyGrid companies={preEntryCompanies} valueSummaries={companyCardSummaries} />
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="OPEN SALES ROLES" title="公式サイトで確認した営業求人" description="応募や個人情報の入力はGenba上では行いません。各社の公式採用ページへ直接つなぎます。" href="/jobs" linkLabel="すべての求人" />
          <div className="job-list">{jobs.slice(0, 5).map((job) => <JobCard key={job.id} job={job} />)}</div>
        </Container>
      </section>

      <section className="content-section surface-section">
        <Container>
          <SectionHeader eyebrow="EDITORIAL" title="求人票の向こう側を読む" description="外資SaaSの現役AEの視点から、キャリア・営業組織・日本市場を解像度高く読み解きます。" href="/insights" linkLabel="役立ち記事一覧" />
          <div className="editorial-grid">
            <article className="editorial-card"><span>CAREER INTELLIGENCE</span><h3>求人票で見るべき「空白」とは</h3><p>OTEやタイトルだけでは分からない、組織フェーズと営業難易度を見抜く観点。</p><Link href="/insights">読む →</Link></article>
            <article className="editorial-card"><span>FIELD NOTE</span><h3>Enterprise AEの仕事は会社ごとに違う</h3><p>担当社数、既存比率、SE体制。タイトルが同じでも役割が変わる理由。</p><Link href="/insights">読む →</Link></article>
            <article className="editorial-card"><span>MARKET MAP</span><h3>外資SaaS日本法人の採用を定点観測する</h3><p>求人の増減から、日本市場への投資姿勢をどこまで読み取れるのか。</p><Link href="/methodology">調査方針を見る →</Link></article>
          </div>
        </Container>
      </section>

      <section className="content-section"><Container><NewsletterCTA /></Container></section>
    </>
  );
}
