import Container from "@/components/Container";
import JobExplorer from "@/components/JobExplorer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { companies, jobs } from "@/lib/market-data";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({ title: "外資SaaS営業求人", description: "外資SaaS企業の公式サイトで確認した日本の営業求人。", path: "/jobs" });
const latestJobUpdate = jobs.reduce((latest, job) => job.lastChecked > latest ? job.lastChecked : latest, "").replaceAll("-", ".") || "—";

export default function JobsPage() { return <><section className="page-hero"><Container className="page-hero-grid"><div><p className="eyebrow">OPEN SALES ROLES</p><h1>現在の求人一覧</h1><p className="page-lead">エージェント経由ではなく、各社が公開する公式求人だけを整理。企業の採用文脈とあわせて見られます。</p></div><div className="page-summary"><a href="#job-results" aria-label={`${jobs.length}件の現在確認できている求人一覧へ移動`}><strong>{jobs.length}</strong><span>現在確認できている求人</span><small>更新日：{latestJobUpdate}</small></a><Link href="/companies#company-results" aria-label="企業一覧を見る"><strong>{companies.filter(c => c.salesRoles > 0).length}</strong><span>掲載企業</span></Link></div></Container></section><section id="job-results" className="content-section job-results-section"><Container><JobExplorer /><NewsletterCTA compact /></Container></section></>; }
