export const broadCategories = [
  "AI・データ基盤",
  "セキュリティ・IT運用",
  "CRM・顧客体験",
  "業務自動化・コラボレーション",
  "経営管理・FinTech",
  "コマース・業界特化",
  "HR・人材育成",
] as const;

export type BroadCategory = (typeof broadCategories)[number];
export type HiringHeatTier = "hot" | "active" | "selective";
type HiringHeatRowTier = HiringHeatTier | "observing";

export const hiringHeatCriteria = {
  hot: { minimumJobs: 20, minimumCompanies: 10 },
  active: { minimumJobs: 10, minimumCompanies: 5 },
  selective: { minimumJobs: 1, minimumCompanies: 1 },
} as const;

type CategorizedCompany = {
  slug: string;
  broadCategory: BroadCategory;
  entryStatus?: "not-entered";
};

type CompanyJob = {
  companySlug: string;
};

export type HiringHeatRow = {
  area: BroadCategory;
  count: number;
  companies: number;
  tier: HiringHeatRowTier;
};

export function buildHiringHeatRows(companies: CategorizedCompany[], jobs: CompanyJob[]): HiringHeatRow[] {
  const eligibleCompanies = companies.filter((company) => company.entryStatus !== "not-entered");
  const companyBySlug = new Map(eligibleCompanies.map((company) => [company.slug, company]));
  const jobCounts = new Map<BroadCategory, number>();
  const hiringCompanies = new Map<BroadCategory, Set<string>>();

  for (const job of jobs) {
    const company = companyBySlug.get(job.companySlug);
    if (!company) continue;
    const area = company.broadCategory;
    jobCounts.set(area, (jobCounts.get(area) ?? 0) + 1);
    const companySlugs = hiringCompanies.get(area) ?? new Set<string>();
    companySlugs.add(company.slug);
    hiringCompanies.set(area, companySlugs);
  }

  return broadCategories
    .map((area) => {
      const count = jobCounts.get(area) ?? 0;
      const companyCount = hiringCompanies.get(area)?.size ?? 0;
      const tier: HiringHeatRowTier = count >= hiringHeatCriteria.hot.minimumJobs && companyCount >= hiringHeatCriteria.hot.minimumCompanies
        ? "hot"
        : count >= hiringHeatCriteria.active.minimumJobs && companyCount >= hiringHeatCriteria.active.minimumCompanies
          ? "active"
          : count >= hiringHeatCriteria.selective.minimumJobs
            ? "selective"
            : "observing";

      return {
        area,
        count,
        companies: companyCount,
        tier,
      };
    })
    .sort((a, b) => b.count - a.count || a.area.localeCompare(b.area, "ja"));
}

export function getHiringHeatCompanies<T extends CategorizedCompany>(companies: T[], jobs: CompanyJob[], tier: HiringHeatTier): T[] {
  const tierAreas = new Set(buildHiringHeatRows(companies, jobs).filter((row) => row.tier === tier).map((row) => row.area));
  const companiesWithJobs = new Set(jobs.map((job) => job.companySlug));

  return companies.filter((company) => (
    company.entryStatus !== "not-entered"
    && companiesWithJobs.has(company.slug)
    && tierAreas.has(company.broadCategory)
  ));
}
