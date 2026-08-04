import Link from "next/link";
import type { Signal } from "@/lib/market-data";
import { getCompany } from "@/lib/market-data";
import StatusBadge from "./StatusBadge";

export default function SignalCard({ signal }: { signal: Signal }) {
  const company = getCompany(signal.companySlug);
  return (
    <article className="signal-row">
      <time dateTime={signal.date}>{signal.date.slice(5).replace("-", ".")}</time>
      <div className="signal-line" aria-hidden="true"><span /></div>
      <div className="signal-content">
        <div className="signal-labels"><Link href={`/companies/${signal.companySlug}`}>{company?.name}</Link><span>{signal.type}</span><StatusBadge status={signal.confidence} /></div>
        <h3>{signal.title}</h3>
        <p>{signal.summary}</p>
        <a href={signal.source.url} target="_blank" rel="noreferrer">根拠となる公式情報 ↗</a>
      </div>
    </article>
  );
}
