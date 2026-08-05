"use client";

import { useMemo, useState } from "react";
import { companies } from "@/lib/market-data";
import CompanyCard from "./CompanyCard";

const statuses = ["すべて", "積極採用", "採用中", "継続観測"];
const solutionAreas = ["すべて", ...Array.from(new Set(companies.map((company) => company.category)))];

export default function CompanyExplorer() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("すべて");
  const [solutionArea, setSolutionArea] = useState("すべて");
  const results = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.category} ${company.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "すべて" || company.hiringStatus === status;
    const matchesSolution = solutionArea === "すべて" || company.category === solutionArea;
    return matchesQuery && matchesStatus && matchesSolution;
  }), [query, status, solutionArea]);

  return (
    <>
      <div className="filter-panel company-filter-panel">
        <label className="search-field">
          <span>企業・カテゴリを検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Data、Enterprise、Salesforce" />
        </label>
        <label className="select-field">
          <span>ソリューション領域</span>
          <select value={solutionArea} onChange={(event) => setSolutionArea(event.target.value)}>
            {solutionAreas.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div className="filter-chips" aria-label="採用状況で絞り込み">
          {statuses.map((item) => (
            <button key={item} className={status === item ? "active" : ""} onClick={() => setStatus(item)}>{item}</button>
          ))}
        </div>
      </div>
      <p className="result-count">{results.length}社を表示</p>
      <div className="card-grid">
        {results.map((company) => <CompanyCard key={company.slug} company={company} />)}
      </div>
    </>
  );
}
