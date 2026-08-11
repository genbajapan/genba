"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { companies, getCompany, jobs } from "@/lib/market-data";
import CompanyCard from "./CompanyCard";

const statuses = ["すべて", "積極採用", "採用中", "継続観測"];
const solutionAreas = ["すべて", ...Array.from(new Set(companies.map((company) => company.category)))];
const areaJobCounts = new Map<string, number>();
for (const job of jobs) {
  const area = getCompany(job.companySlug)?.category;
  if (area) areaJobCounts.set(area, (areaJobCounts.get(area) ?? 0) + 1);
}
const maximumAreaJobs = Math.max(1, ...solutionAreas.slice(1).map((area) => areaJobCounts.get(area) ?? 0));
const tierAreas = {
  hot: new Set(solutionAreas.slice(1).filter((area) => (areaJobCounts.get(area) ?? 0) === maximumAreaJobs)),
  active: new Set(solutionAreas.slice(1).filter((area) => (areaJobCounts.get(area) ?? 0) > 0 && (areaJobCounts.get(area) ?? 0) < maximumAreaJobs)),
  selective: new Set(solutionAreas.slice(1).filter((area) => (areaJobCounts.get(area) ?? 0) === 0)),
};
type TierFilter = "すべて" | keyof typeof tierAreas;
const tierLabels: Record<TierFilter, string> = { "すべて": "すべて", hot: "HOT", active: "Active", selective: "Selective" };

export default function CompanyExplorer() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const tierParam = searchParams.get("tier");
  const initialSolutionArea = categoryParam && solutionAreas.includes(categoryParam) ? categoryParam : "すべて";
  const initialTier: TierFilter = initialSolutionArea === "すべて" && (tierParam === "hot" || tierParam === "active" || tierParam === "selective") ? tierParam : "すべて";

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("すべて");
  const [solutionArea, setSolutionArea] = useState(initialSolutionArea);
  const [tier, setTier] = useState<TierFilter>(initialTier);
  const results = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.category} ${company.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "すべて" || company.hiringStatus === status;
    const matchesSolution = solutionArea === "すべて" || company.category === solutionArea;
    const matchesTier = tier === "すべて" || tierAreas[tier].has(company.category);
    return matchesQuery && matchesStatus && matchesSolution && matchesTier;
  }), [query, status, solutionArea, tier]);

  function changeSolutionArea(nextArea: string) {
    setSolutionArea(nextArea);
    setTier("すべて");
  }

  return (
    <>
      {tier !== "すべて" && (
        <div className={`tier-filter-summary tier-filter-summary-${tier}`}>
          <div><span>採用温度で絞り込み中</span><strong>{tierLabels[tier]}</strong></div>
          <p>{tierAreas[tier].size}領域に含まれる企業を表示</p>
          <button type="button" onClick={() => setTier("すべて")}>絞り込みを解除</button>
        </div>
      )}
      <div className="filter-panel company-filter-panel">
        <label className="search-field">
          <span>企業・カテゴリを検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Data、Enterprise、Salesforce" />
        </label>
        <label className="select-field">
          <span>ソリューション領域</span>
          <select value={solutionArea} onChange={(event) => changeSolutionArea(event.target.value)}>
            {solutionAreas.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div className="filter-chips" aria-label="採用状況で絞り込み">
          {statuses.map((item) => (
            <button key={item} className={status === item ? "active" : ""} onClick={() => setStatus(item)}>{item}</button>
          ))}
        </div>
      </div>
      <p className="result-count">{tier !== "すべて" ? `${tierLabels[tier]}に含まれる${results.length}社を表示` : `${results.length}社を表示`}</p>
      <div className="card-grid">
        {results.map((company) => <CompanyCard key={company.slug} company={company} />)}
      </div>
    </>
  );
}
