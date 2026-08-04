import Link from "next/link";
import type { Company } from "@/lib/market-data";
import StatusBadge from "./StatusBadge";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="data-card group">
      <div className="data-card-topline">
        <span>{company.category}</span>
        <StatusBadge status={company.hiringStatus} />
      </div>
      <h3><Link href={`/companies/${company.slug}`}>{company.name}</Link></h3>
      <p>{company.description}</p>
      <div className="metric-row">
        <div><strong>{company.salesRoles}</strong><span>確認中の営業職</span></div>
        <div><strong>{company.lastChecked.slice(5).replace("-", "/")}</strong><span>最終確認</span></div>
      </div>
      <Link href={`/companies/${company.slug}`} className="card-link">企業データを見る <span>→</span></Link>
    </article>
  );
}
