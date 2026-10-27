import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const checkedAt = "2026-10-28";

export function applyDaily20261028Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.qumulo;
  if (!intelligence) return;

  const sourceId = "qumulo-senior-customer-success-manager-closure-20261028";
  const label = "Senior Customer Success Manager求人終了";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({
      id: sourceId,
      label: `${label}（公式求人）`,
      url: "https://jobs.ashbyhq.com/qumulo/dfaec4ee-6675-4a3c-b658-22871e48074b",
      kind: "企業公式",
      scope: "旧公式URLの404と公式求人一覧からの消失を確認",
      checkedAt,
    });
  }
  intelligence.researchedAt = checkedAt;
  const jobFact = intelligence.facts.find((fact) => fact.label === "日本求人");
  if (jobFact) {
    jobFact.value = "0件";
    jobFact.detail = "2026年10月28日時点。旧Senior Customer Success Manager求人は終了。";
    jobFact.sourceIds = [sourceId];
  }
  intelligence.roleLens = {
    ...intelligence.roleLens,
    salesMotion: "2026年10月28日時点で日本向け公式求人は0件。旧Senior Customer Success Managerは、日本の大手顧客と販売パートナーの導入、利用、更新、拡大を担う役割だった。",
  };
  if (intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人と国内顧客事例は確認。日本向け公式求人は0件";
    intelligence.marketStatus.japanGrowth.narrative = "Qumulo Japan株式会社、日本語サイト、国内顧客事例は継続確認できる。一方、旧Senior Customer Success Manager求人は終了し、2026年10月28日時点の日本向け公式求人は0件。";
  }
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
    {
      year: "2026.10.28",
      label,
      detail: "旧公式求人URLが404を返し、Qumuloの公式求人一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業の縮小を意味しない。",
      sourceId,
    },
  ];
}

export const daily20261028IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {};
