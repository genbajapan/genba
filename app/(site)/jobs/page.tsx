import Container from "@/components/Container";
import JobExplorer from "@/components/JobExplorer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { companies, jobs } from "@/lib/market-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "外資SaaS営業求人", description: "外資SaaS企業の公式サイトで確認した日本の営業求人。", path: "/jobs" });
export default function JobsPage() { return <><section className="page-hero"><Container className="page-hero-grid"><div><p className="eyebrow">OPEN SALES ROLES</p><h1>日本の外資SaaS営業求人。</h1><p className="page-lead">エージェント経由ではなく、各社が公開する公式求人だけを整理。企業の採用文脈とあわせて見られます。</p></div><div className="page-summary"><div><strong>{jobs.length}</strong><span>確認済み求人</span></div><div><strong>{companies.filter(c => c.salesRoles > 0).length}</strong><span>掲載企業</span></div></div></Container></section><section id="job-results" className="content-section job-results-section"><Container><JobExplorer /><NewsletterCTA compact /></Container></section></>; }
