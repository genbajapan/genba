"use client";

import Link from "next/link";
import type { Company } from "@/lib/market-data";
import StatusBadge from "./StatusBadge";

export default function CompanyCard({ company, valueSummary, onNavigate }: { company: Company; valueSummary: string; onNavigate?: (slug: string) => void }) {
  const rememberPosition = () => onNavigate?.(company.slug);

  return (
    <Link href={`/companies/${company.slug}`} className="company-card-link" onClick={rememberPosition}>
      <article id={`company-${company.slug}`} className="data-card group">
        <div className="data-card-topline">
          <span>{company.broadCategory}</span>
          {company.entryStatus === "pre-entry-signal"
            ? <span className="pre-entry-badge"><i /> {company.salesRoles > 0 ? "日本進出準備中" : "進出シグナルあり"}</span>
            : company.entryStatus === "not-entered"
              ? <span className="pre-entry-badge"><i /> 日本未進出</span>
              : <StatusBadge status={company.hiringStatus} />}
        </div>
        <h3>{company.name}</h3>
        <p className="company-card-value">{valueSummary}</p>
        <div className="metric-row">
          <div><strong>{company.salesRoles}</strong><span>現在の求人</span></div>
          <div><strong>{company.lastChecked.slice(5).replace("-", "/")}</strong><span>最終更新日</span></div>
        </div>
        <span className="card-link">企業データを見る <span>→</span></span>
      </article>
    </Link>
  );
}
