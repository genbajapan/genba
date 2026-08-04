import Link from "next/link";
import type { Job } from "@/lib/market-data";
import { getCompany } from "@/lib/market-data";

export default function JobCard({ job }: { job: Job }) {
  const company = getCompany(job.companySlug);
  return (
    <article className="job-row">
      <div className="job-company-mark" aria-hidden="true">{company?.name.slice(0, 1)}</div>
      <div className="job-main">
        <div className="job-company"><Link href={`/companies/${job.companySlug}`}>{company?.name}</Link><span>{job.segment}</span></div>
        <h3>{job.title}</h3>
        <div className="job-meta"><span>{job.location}</span><span>{job.language}</span><span>確認 {job.lastChecked}</span></div>
      </div>
      <a className="button button-secondary" href={job.source.url} target="_blank" rel="noreferrer">公式求人 <span aria-hidden="true">↗</span></a>
    </article>
  );
}
