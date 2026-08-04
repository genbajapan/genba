"use client";

import { useMemo, useState } from "react";
import { companies } from "@/lib/market-data";
import CompanyCard from "./CompanyCard";

const statuses = ["すべて", "積極採用", "採用中", "継続観測"];

export default function CompanyExplorer() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("すべて");
  const results = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.category} ${company.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (status === "すべて" || company.hiringStatus === status);
  }), [query, status]);

  return (
    <>
      <div className="filter-panel">
        <label className="search-field">
          <span>企業・カテゴリを検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Data、Enterprise、Salesforce" />
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
