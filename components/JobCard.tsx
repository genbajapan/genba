import Link from "next/link";
import type { JobListItem } from "@/lib/listing-data";

export default function JobCard({ job }: { job: JobListItem }) {
  return (
    <article className="job-row">
      <div className="job-company-mark" aria-hidden="true">{job.companyName.slice(0, 1)}</div>
      <div className="job-main">
        <div className="job-company"><Link href={`/companies/${job.companySlug}`}>{job.companyName}</Link><span>{job.segment}</span></div>
        <h3>{job.title}</h3>
        <div className="job-meta"><span>{job.location}</span><span>{job.language}</span><span>更新 {job.lastChecked}</span></div>
      </div>
      <a
        className="button button-secondary"
        href={job.sourceUrl}
        target="_blank"
        rel="noreferrer"
        data-analytics-event="official_apply_click"
        data-analytics-location="job_card"
        data-analytics-company-slug={job.companySlug}
        data-analytics-job-id={job.id}
      >
        公式求人 <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
