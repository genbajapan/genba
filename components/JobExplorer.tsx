"use client";

import { useMemo, useState } from "react";
import { jobs, getCompany } from "@/lib/market-data";
import JobCard from "./JobCard";

export default function JobExplorer() {
  const [query, setQuery] = useState("");
  const [segment, setSegment] = useState("すべて");
  const segments = ["すべて", ...Array.from(new Set(jobs.map((job) => job.segment)))];
  const results = useMemo(() => jobs.filter((job) => {
    const company = getCompany(job.companySlug);
    const matchesQuery = `${job.title} ${company?.name ?? ""} ${job.location}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (segment === "すべて" || job.segment === segment);
  }), [query, segment]);

  return (
    <>
      <div className="filter-panel">
        <label className="search-field">
          <span>求人・企業名を検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Enterprise、Datadog" />
        </label>
        <label className="select-field">
          <span>セグメント</span>
          <select value={segment} onChange={(event) => setSegment(event.target.value)}>
            {segments.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="results-heading"><p>{results.length}件の公式求人</p><span>最終確認：2026-08-04</span></div>
      <div className="job-list">
        {results.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  );
}
