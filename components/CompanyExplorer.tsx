"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { companies, jobs } from "@/lib/market-data";
import { broadCategories, buildHiringHeatRows } from "@/lib/solution-categories";
import CompanyCard from "./CompanyCard";

const statuses = ["すべて", "積極採用", "採用中", "継続観測"];
const solutionAreas = ["すべて", ...broadCategories];
const heatRows = buildHiringHeatRows(companies, jobs);
const tierAreas = {
  hot: new Set(heatRows.filter((row) => row.tier === "hot").map((row) => row.area)),
  active: new Set(heatRows.filter((row) => row.tier === "active").map((row) => row.area)),
  selective: new Set(heatRows.filter((row) => row.tier === "selective").map((row) => row.area)),
};
type TierFilter = "すべて" | keyof typeof tierAreas;
const tierLabels: Record<TierFilter, string> = { "すべて": "すべて", hot: "HOT", active: "Active", selective: "Selective" };
type EntryFilter = "すべて" | "not-entered";

export default function CompanyExplorer() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const tierParam = searchParams.get("tier");
  const initialSolutionArea = categoryParam && solutionAreas.includes(categoryParam) ? categoryParam : "すべて";
  const initialTier: TierFilter = initialSolutionArea === "すべて" && (tierParam === "hot" || tierParam === "active" || tierParam === "selective") ? tierParam : "すべて";
  const initialEntry: EntryFilter = searchParams.get("entry") === "not-entered" ? "not-entered" : "すべて";

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("すべて");
  const [solutionArea, setSolutionArea] = useState(initialSolutionArea);
  const [tier, setTier] = useState<TierFilter>(initialTier);
  const [entry, setEntry] = useState<EntryFilter>(initialEntry);
  const results = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.broadCategory} ${company.category} ${company.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "すべて" || company.hiringStatus === status;
    const matchesSolution = solutionArea === "すべて" || company.broadCategory === solutionArea;
    const matchesTier = tier === "すべて" || tierAreas[tier].has(company.broadCategory);
    const matchesEntry = entry === "すべて" || company.entryStatus === entry;
    return matchesQuery && matchesStatus && matchesSolution && matchesTier && matchesEntry;
  }), [query, status, solutionArea, tier, entry]);

  function changeSolutionArea(nextArea: string) {
    setSolutionArea(nextArea);
    setTier("すべて");
  }

  return (
    <>
      {tier !== "すべて" && (
        <div className={`tier-filter-summary tier-filter-summary-${tier}`}>
          <div><span>採用温度で絞り込み中</span><strong>{tierLabels[tier]}</strong></div>
          <p>{tierAreas[tier].size}つの大分類に含まれる企業を表示</p>
          <button type="button" onClick={() => setTier("すべて")}>絞り込みを解除</button>
        </div>
      )}
      {entry === "not-entered" && (
        <div className="entry-filter-summary">
          <div><span>進出状況で絞り込み中</span><strong>日本未進出</strong></div>
          <p>日本法人・国内拠点・日本向け求人が未確認で、将来の進出可能性を調査した企業を表示</p>
          <button type="button" onClick={() => setEntry("すべて")}>絞り込みを解除</button>
        </div>
      )}
      <div className="filter-panel company-filter-panel">
        <label className="search-field">
          <span>企業・カテゴリを検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Data、Enterprise、Braze" />
        </label>
        <label className="select-field">
          <span>ソリューション大分類</span>
          <select value={solutionArea} onChange={(event) => changeSolutionArea(event.target.value)}>
            {solutionAreas.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div className="filter-chips" aria-label="採用状況で絞り込み">
          {statuses.map((item) => (
            <button key={item} className={status === item ? "active" : ""} onClick={() => setStatus(item)}>{item}</button>
          ))}
        </div>
        <div className="filter-chips entry-filter-chips" aria-label="日本進出状況で絞り込み">
          <button className={entry === "すべて" ? "active" : ""} onClick={() => setEntry("すべて")}>進出状況すべて</button>
          <button className={entry === "not-entered" ? "active entry-active" : ""} onClick={() => setEntry("not-entered")}>日本未進出</button>
        </div>
      </div>
      <p className="result-count">{entry === "not-entered" ? `日本未進出の注目企業${results.length}社を表示` : tier !== "すべて" ? `${tierLabels[tier]}に含まれる${results.length}社を表示` : `${results.length}社を表示`}</p>
      <div className="card-grid">
        {results.map((company) => <CompanyCard key={company.slug} company={company} />)}
      </div>
    </>
  );
}
