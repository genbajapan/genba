import { getHeadquartersRegion, type HeadquartersRegion } from "@/lib/company-headquarters";
import type { CompanyListSortMetric } from "@/lib/company-list-sort";
import type { Company, Job } from "@/lib/market-data";
import {
  buildHiringHeatRows,
  getHiringHeatCompanies,
  type HiringHeatTier,
} from "@/lib/solution-categories";

export type CompanyCardItem = Pick<
  Company,
  "slug" | "name" | "broadCategory" | "hiringStatus" | "salesRoles" | "lastChecked" | "entryStatus"
> & {
  valueSummary: string;
};

export type CompanyExplorerItem = CompanyCardItem & {
  searchText: string;
  headquartersRegion: Exclude<HeadquartersRegion, "すべて"> | "other";
  tier: HiringHeatTier | null;
  hasOpenJobs: boolean;
  newestJobDate: string;
  sortMetric: CompanyListSortMetric;
};

export type TierAreaCounts = Record<HiringHeatTier, number>;

export type JobListItem = Pick<
  Job,
  "id" | "companySlug" | "title" | "segment" | "location" | "language" | "lastChecked"
> & {
  companyName: string;
  sourceUrl: string;
};

export function toCompanyCardItem(company: Company, valueSummary: string): CompanyCardItem {
  return {
    slug: company.slug,
    name: company.name,
    broadCategory: company.broadCategory,
    hiringStatus: company.hiringStatus,
    salesRoles: company.salesRoles,
    lastChecked: company.lastChecked,
    entryStatus: company.entryStatus,
    valueSummary,
  };
}

export function buildCompanyExplorerData(
  companies: Company[],
  jobs: Job[],
  valueSummaries: Record<string, string>,
  sortMetrics: Record<string, CompanyListSortMetric>,
) {
  const heatRows = buildHiringHeatRows(companies, jobs);
  const tierAreaCounts: TierAreaCounts = {
    hot: heatRows.filter((row) => row.tier === "hot").length,
    active: heatRows.filter((row) => row.tier === "active").length,
    selective: heatRows.filter((row) => row.tier === "selective").length,
  };
  const tierByCompanySlug = new Map<string, HiringHeatTier>();
  for (const tier of ["hot", "active", "selective"] as const) {
    for (const company of getHiringHeatCompanies(companies, jobs, tier)) {
      tierByCompanySlug.set(company.slug, tier);
    }
  }

  const newestJobDates = new Map<string, string>();
  for (const job of jobs) {
    if (job.firstSeen > (newestJobDates.get(job.companySlug) ?? "")) {
      newestJobDates.set(job.companySlug, job.firstSeen);
    }
  }

  return {
    companies: companies.map((company): CompanyExplorerItem => ({
      ...toCompanyCardItem(company, valueSummaries[company.slug]),
      searchText: `${company.name} ${company.broadCategory} ${company.category} ${company.hq} ${company.tags.join(" ")}`.toLowerCase(),
      headquartersRegion: getHeadquartersRegion(company.hq),
      tier: tierByCompanySlug.get(company.slug) ?? null,
      hasOpenJobs: newestJobDates.has(company.slug),
      newestJobDate: newestJobDates.get(company.slug) ?? "",
      sortMetric: sortMetrics[company.slug] ?? {
        japanEntryYear: null,
        japanEntityYear: null,
        japanHeadcount: null,
      },
    })),
    tierAreaCounts,
  };
}

export function buildJobListItems(jobs: Job[], companies: Company[]): JobListItem[] {
  const companyNames = new Map(companies.map((company) => [company.slug, company.name]));
  return jobs.map((job) => ({
    id: job.id,
    companySlug: job.companySlug,
    companyName: companyNames.get(job.companySlug) ?? job.companySlug,
    title: job.title,
    segment: job.segment,
    location: job.location,
    language: job.language,
    lastChecked: job.lastChecked,
    sourceUrl: job.source.url,
  }));
}
