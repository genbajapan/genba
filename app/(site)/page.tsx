import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import JobCard from "@/components/JobCard";
import NewsletterCTA from "@/components/NewsletterCTA";
import AudienceList from "@/components/AudienceList";
import HiringHeatmap from "@/components/HiringHeatmap";
import RandomCompanyGrid from "@/components/RandomCompanyGrid";
import { getCompanyCardSummary } from "@/lib/company-card-summary";
import { companies, jobs } from "@/lib/market-data";

export const metadata: Metadata = {
  title: { absolute: "Genba - 小中規模外資IT企業研究所" },
  description: "転職のたびにOTEを上げてきた現役外資SaaS AEが、日本の外資SaaS採用市場を毎日ウォッチ。情報収集・面接準備に役立つ知見を無料で届けます。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Genba",
    title: "Genba - 小中規模外資IT企業研究所",
    description: "転職のたびにOTEを上げてきた現役外資SaaS AEが、日本の外資SaaS採用市場を毎日ウォッチ。情報収集・面接準備に役立つ知見を無料で届けます。",
    images: [{ url: "/og-genba-v3.png", width: 1200, height: 630, alt: "Genba - 小中規模外資IT企業研究所" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genba - 小中規模外資IT企業研究所",
    description: "転職のたびにOTEを上げてきた現役外資SaaS AEが、日本の外資SaaS採用市場を毎日ウォッチ。情報収集・面接準備に役立つ知見を無料で届けます。",
    images: ["/og-genba-v3.png"],
  },
};

export default function HomePage() {
  const companyCardSummaries = Object.fromEntries(companies.map((company) => [company.slug, getCompanyCardSummary(company)]));
  const lastUpdated = [...companies.map((company) => company.lastChecked), ...jobs.map((job) => job.lastChecked)].sort().at(-1) ?? "—";
  const companySlugsWithOpenJobs = new Set(jobs.map((job) => job.companySlug));
  const companiesWithOpenJobs = companies.filter((company) => companySlugsWithOpenJobs.has(company.slug));
  const preEntryCompanies = companies.filter((company) => company.entryStatus);

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
        <Container className="trust-inner"><span className="trust-label">編集原則</span><div className="trust-points"><span>公式情報を優先</span><span>更新日を明記</span><span>事実と分析を分離</span></div></Container>
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

          <details className="audience-disclosure">
            <summary className="audience-summary">
              <div className="audience-summary-copy">
                <p className="eyebrow">誰のためのサイトか</p>
                <h2>Genbaはこんな人のためのサイトです</h2>
              </div>
              <span className="audience-toggle">
                <span className="audience-toggle-icon" aria-hidden="true">+</span>
                <span className="audience-toggle-label-closed">当てはまるか見る</span>
                <span className="audience-toggle-label-open">閉じる</span>
              </span>
            </summary>

            <div className="audience-body">
              <AudienceList />
            </div>
          </details>

          <details className="value-disclosure">
            <summary className="value-summary">
              <div className="value-summary-copy">
                <p className="eyebrow">Genbaで得られる2つの価値</p>
                <h2>知らなかった企業に出会い、挑戦すべき一社を見極める。</h2>
              </div>
              <span className="value-toggle">
                <span className="value-toggle-icon" aria-hidden="true">+</span>
                <span className="value-toggle-label-closed">詳しく見る</span>
                <span className="value-toggle-label-open">閉じる</span>
              </span>
            </summary>

            <div className="value-body">
              <div className="value-grid">
                <article className="value-card">
                  <div className="value-card-head"><span>01</span><p>選択肢を増やす</p></div>
                  <h3>知らない会社は、選択肢にならない。</h3>
                  <p>まだ日本語情報が少ない中小規模の外資IT企業や、日本進出前の注目企業を発掘。広く知られる前から、第一号AEやカントリーマネージャーを含む次のキャリア機会を見つけられます。</p>
                </article>

                <article className="value-card">
                  <div className="value-card-head"><span>02</span><p>選択の解像度を上げる</p></div>
                  <h3>「入れそうか」だけでなく、「ここで売りたいか」まで考える。</h3>
                  <p>ソリューション、Buyer、国内導入事例、想定できる売り方、求人、組織、働いている人、企業文化まで1ページに集約。自分にフィットするか、ワクワクできるか、面接を受ける価値があるかを効率よく判断できます。</p>
                </article>
              </div>

              <div className="value-proof">
                <p className="value-proof-label">現役外資AEの事前調査を基準に</p>
                <p>各社の情報は、現役外資AEの編集長が自身の転職活動で実際に行ってきた事前調査の粒度を基準に整理。公開事実だけでなく、そこから考えられる仮説、日本法人で働いている人の確認、想定できる売り方、などが研究されています。</p>
              </div>

              <div className="value-footer">
                <strong>企業を知るところから、応募判断と面接準備まで。この1ページで。</strong>
                <Link href="/companies">実際の企業研究を見る →</Link>
              </div>
            </div>
          </details>
        </Container>
      </section>

      <section className="content-section market-section">
        <Container><HiringHeatmap /></Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="COMPANY TRACKER" title="企業研究一覧" description="現在の求人の有無やソリューション領域をベースに企業を探す" href="/companies" linkLabel={`${companies.length}件の企業を全て見る`} />
          <RandomCompanyGrid companies={companiesWithOpenJobs} valueSummaries={companyCardSummaries} />
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="PRE-ENTRY WATCH" title="「日本法人未確認」注目企業" description="日本法人・常設拠点、日本で働く担当者、現行の日本採用を分けて追います。" href="/companies?entry=pre-entry#company-results" linkLabel={`日本法人未確認企業${preEntryCompanies.length}社をすべて見る`} />
          <RandomCompanyGrid companies={preEntryCompanies} valueSummaries={companyCardSummaries} />
        </Container>
      </section>

      <section className="content-section">
        <Container>
          <SectionHeader eyebrow="OPEN SALES ROLES" title="公式サイトで確認した営業求人" description="応募や個人情報の入力はGenba上では行いません。各社の公式採用ページへ直接つなぎます。" href="/jobs" linkLabel="すべての求人" />
          <div className="job-list">{jobs.slice(0, 5).map((job) => <JobCard key={job.id} job={job} />)}</div>
        </Container>
      </section>

      <section className="content-section"><Container><NewsletterCTA /></Container></section>
    </>
  );
}
