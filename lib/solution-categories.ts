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

type CategorizedCompany = {
  slug: string;
  broadCategory: BroadCategory;
};

type CompanyJob = {
  companySlug: string;
};

export type HiringHeatRow = {
  area: BroadCategory;
  count: number;
  companies: number;
  tier: HiringHeatTier;
};

export function buildHiringHeatRows(companies: CategorizedCompany[], jobs: CompanyJob[]): HiringHeatRow[] {
  const companyBySlug = new Map(companies.map((company) => [company.slug, company]));
  const jobCounts = new Map<BroadCategory, number>();

  for (const job of jobs) {
    const area = companyBySlug.get(job.companySlug)?.broadCategory;
    if (area) jobCounts.set(area, (jobCounts.get(area) ?? 0) + 1);
  }

  const maximum = Math.max(1, ...broadCategories.map((area) => jobCounts.get(area) ?? 0));
  const hotThreshold = Math.max(1, Math.ceil(maximum * 0.67));
  const activeThreshold = Math.max(1, Math.ceil(maximum * 0.34));

  return broadCategories
    .map((area) => {
      const count = jobCounts.get(area) ?? 0;
      const tier: HiringHeatTier = count >= hotThreshold
        ? "hot"
        : count >= activeThreshold
          ? "active"
          : "selective";

      return {
        area,
        count,
        companies: companies.filter((company) => company.broadCategory === area).length,
        tier,
      };
    })
    .sort((a, b) => b.count - a.count || a.area.localeCompare(b.area, "ja"));
}
