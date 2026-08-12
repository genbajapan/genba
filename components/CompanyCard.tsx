"use client";

import Link from "next/link";
import type { Company } from "@/lib/market-data";
import StatusBadge from "./StatusBadge";

export default function CompanyCard({ company, onNavigate }: { company: Company; onNavigate?: (slug: string) => void }) {
  const rememberPosition = () => onNavigate?.(company.slug);

  return (
    <article id={`company-${company.slug}`} className="data-card group">
      <div className="data-card-topline">
        <span>{company.broadCategory}</span>
        {company.entryStatus === "not-entered" ? <span className="pre-entry-badge"><i /> 日本未進出</span> : <StatusBadge status={company.hiringStatus} />}
      </div>
      <h3><Link href={`/companies/${company.slug}`} onClick={rememberPosition}>{company.name}</Link></h3>
      <p>{company.description}</p>
      <div className="metric-row">
        <div><strong>{company.salesRoles}</strong><span>現在の求人</span></div>
        <div><strong>{company.lastChecked.slice(5).replace("-", "/")}</strong><span>最終更新日</span></div>
      </div>
      <Link href={`/companies/${company.slug}`} className="card-link" onClick={rememberPosition}>企業データを見る <span>→</span></Link>
    </article>
  );
}
