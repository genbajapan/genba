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
              Genbaを知る現役外資AEの編集長が「日本で求人のある小中規模外資IT」と「日本未進出の注目外資IT」に特化して最新情報を届け続ける場所です。各社(本日時点{companies.length}社)、公開情報をベースに事実と仮説を交えた企業研究になってます。
              <br />
              「ここだ」と思える次のフィールドを見つけられるように。
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
                <h2 className="founder-note-hook">大手外資から小中規模の外資へ転職して、実感しました。</h2>
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
