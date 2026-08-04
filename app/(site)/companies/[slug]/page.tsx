import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import JobCard from "@/components/JobCard";
import SignalCard from "@/components/SignalCard";
import StatusBadge from "@/components/StatusBadge";
import NewsletterCTA from "@/components/NewsletterCTA";
import { companies, getCompany, getCompanyJobs, getCompanySignals } from "@/lib/market-data";

export function generateStaticParams() { return companies.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const company = getCompany(params.slug); return company ? { title: `${company.name}の日本採用・営業求人`, description: company.description, alternates: { canonical: `/companies/${company.slug}` } } : {}; }

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug); if (!company) notFound();
  const companyJobs = getCompanyJobs(company.slug); const companySignals = getCompanySignals(company.slug);
  return <><section className="page-hero"><Container><p className="eyebrow">COMPANY PROFILE / {company.category}</p><div className="page-hero-grid"><div><h1>{company.name}</h1><p className="page-lead">{company.description}</p></div><div><StatusBadge status={company.hiringStatus} /></div></div></Container></section><section className="content-section"><Container className="detail-grid"><div><section className="detail-section"><h2>確認中の営業求人</h2>{companyJobs.length ? <div className="job-list">{companyJobs.map((job) => <JobCard key={job.id} job={job} />)}</div> : <p>現在、Genbaで確認済みの営業求人はありません。公式採用ページは継続して観測しています。</p>}</section><section className="detail-section"><h2>採用シグナル</h2>{companySignals.length ? <div className="signal-feed">{companySignals.map((signal) => <SignalCard key={signal.id} signal={signal} />)}</div> : <p>分析可能な変化を確認次第、ここに追加します。</p>}</section></div><aside className="detail-sidebar"><h2>企業データ</h2><dl className="fact-list"><div><dt>カテゴリ</dt><dd>{company.category}</dd></div><div><dt>グローバル本社</dt><dd>{company.hq}</dd></div><div><dt>日本拠点</dt><dd>{company.japanPresence}</dd></div><div><dt>最終確認</dt><dd>{company.lastChecked}</dd></div></dl><div className="tag-list">{company.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={company.careersUrl} target="_blank" rel="noreferrer" className="button button-primary" style={{marginTop: 20, width: "100%"}}>公式採用ページ ↗</a><p className="source-note">公開された公式情報をもとに編集しています。求人の有効性・条件は必ず遷移先で確認してください。</p></aside></Container></section><section className="content-section surface-section"><Container><NewsletterCTA /></Container></section></>;
}
