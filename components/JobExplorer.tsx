"use client";

import { useMemo, useState } from "react";
import { jobs, getCompany } from "@/lib/market-data";
import JobCard from "./JobCard";

const jobFunctions = [
  "すべて",
  "アカウント営業",
  "インサイドセールス",
  "営業マネジメント",
  "パートナー・アライアンス",
  "プリセールス・導入支援",
  "カスタマーサクセス",
] as const;

type JobFunction = (typeof jobFunctions)[number];

function getJobFunction(title: string): Exclude<JobFunction, "すべて"> {
  const normalizedTitle = title.toLowerCase();

  if (/customer success/.test(normalizedTitle)) return "カスタマーサクセス";
  if (/solution|field engineering|forward deployed/.test(normalizedTitle)) return "プリセールス・導入支援";
  if (/partner|partnership|alliance|channel|ecosystem/.test(normalizedTitle)) return "パートナー・アライアンス";
  if (/sales development|business development representative|account development representative/.test(normalizedTitle)) return "インサイドセールス";
  if (/vice president|head of .*sales|sales director|sales manager/.test(normalizedTitle)) return "営業マネジメント";

  return "アカウント営業";
}

export default function JobExplorer() {
  const [query, setQuery] = useState("");
  const [jobFunction, setJobFunction] = useState<JobFunction>("すべて");
  const lastUpdated = [...jobs].sort((a, b) => b.lastChecked.localeCompare(a.lastChecked))[0]?.lastChecked ?? "—";
  const results = useMemo(() => jobs.filter((job) => {
    const company = getCompany(job.companySlug);
    const matchesQuery = `${job.title} ${company?.name ?? ""} ${job.location}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (jobFunction === "すべて" || getJobFunction(job.title) === jobFunction);
  }), [query, jobFunction]);

  return (
    <>
      <div className="filter-panel">
        <label className="search-field">
          <span>求人・企業名を検索</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="例：Enterprise、Datadog" />
        </label>
        <label className="select-field">
          <span>職種</span>
          <select value={jobFunction} onChange={(event) => setJobFunction(event.target.value as JobFunction)}>
            {jobFunctions.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <div className="results-heading"><p>{results.length}件の公式求人</p><span>最終更新日：{lastUpdated}</span></div>
      <div className="job-list">
        {results.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </>
  );
}
