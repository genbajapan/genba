import { Suspense } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import CompanyExplorer from "@/components/CompanyExplorer";
import NewsletterCTA from "@/components/NewsletterCTA";
import { companies, jobs } from "@/lib/market-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "外資SaaS企業データ", description: "外資SaaS企業の日本採用状況を企業別に定点観測。", path: "/companies" });

export default function CompaniesPage() {
  return <><section className="page-hero"><Container className="page-hero-grid"><div><p className="eyebrow">COMPANY TRACKER</p><h1>外資SaaS企業を、採用の動きから探す。</h1><p className="page-lead">会社名や知名度だけではなく、日本市場でどのソリューション領域・顧客セグメントに投資しているかを確認できます。</p></div><div className="page-summary"><a href="#company-results" aria-label={`${companies.length}社の企業一覧へ移動`}><strong>{companies.length}</strong><span>観測企業</span></a><Link href="/jobs#job-results" aria-label={`${jobs.length}件の営業求人一覧を見る`}><strong>{jobs.length}</strong><span>営業求人</span></Link></div></Container></section><section id="company-results" className="content-section company-results-section"><Container><Suspense fallback={null}><CompanyExplorer /></Suspense><NewsletterCTA compact /></Container></section></>;
}
