import { resolveGlobalScale } from "@/lib/company-directory";
import { getAllCompanyPublicIntelligence, type PublicFact } from "@/lib/company-public-intelligence";
import { parseUsdAmount } from "@/lib/currency-display";
import type { Company } from "@/lib/market-data";

export type ScaleComparisonItem = {
  slug: string;
  name: string;
  label: string;
  value: string;
  distanceLabel: string;
};

export type CompanyScaleComparisons = {
  revenue: ScaleComparisonItem[];
  headcount: ScaleComparisonItem[];
  revenueBasis?: string;
  headcountBasis?: string;
};

const recognizableCompanySlugs = new Set([
  "salesforce", "mongodb", "hubspot", "okta", "zendesk", "uipath", "confluent", "pagerduty",
  "monday-com", "miro", "rubrik", "notion", "elastic", "deel", "anthropic", "zscaler",
  "cloudflare", "datadog", "docusign", "veeva", "shopify", "stripe", "snowflake", "servicenow",
]);

function parseJpyAmount(text: string) {
  const match = text.match(/([\d,.]+(?:\.\d+)?)\s*(兆|億|万)?円/);
  if (!match) return undefined;
  const amount = Number(match[1].replaceAll(",", ""));
  const multiplier = match[2] === "兆" ? 1_000_000_000_000 : match[2] === "億" ? 100_000_000 : match[2] === "万" ? 10_000 : 1;
  return amount * multiplier;
}

function revenueAmount(fact: PublicFact) {
  const usdToken = fact.value.match(/(?:\$[\d,.]+(?:\.\d+)?(?:[KMB]|万|億|兆)?|[\d,.]+(?:\.\d+)?(?:万|億|兆)?ドル)/i)?.[0];
  const yen = usdToken ? (parseUsdAmount(usdToken) ?? 0) * 157 : parseJpyAmount(fact.value);
  if (!yen) return undefined;
  const periodText = `${fact.label} ${fact.detail}`;
  const annualizer = /(Q[1-4]|四半期)/i.test(periodText) ? 4
    : /(上期|半期|6カ月|6か月)/.test(periodText) ? 2
      : /(9カ月|9か月)/.test(periodText) ? 4 / 3
        : 1;
  return yen * annualizer;
}

function findRevenueFact(facts: PublicFact[]) {
  const candidates = facts
    .filter((fact) => /(売上|Revenue)/i.test(fact.label) && !/(比率|成長率|構成|予測|ガイダンス)/.test(fact.label))
    .map((fact) => ({ fact, amount: revenueAmount(fact) }))
    .filter((entry): entry is { fact: PublicFact; amount: number } => Boolean(entry.amount));
  return candidates.sort((a, b) => {
    const score = (fact: PublicFact) => /(FY|年度|通期|年間)/i.test(fact.label) ? 2 : /(Q[1-4]|四半期)/i.test(fact.label) ? 1 : 0;
    return score(b.fact) - score(a.fact);
  })[0];
}

function parseHeadcount(value?: string) {
  if (!value || /(非公開|非開示|未確認|確認中|確認でき)/.test(value)) return undefined;
  const range = value.match(/([\d,]+)\s*[〜～-]\s*([\d,]+)/);
  if (range) return (Number(range[1].replaceAll(",", "")) + Number(range[2].replaceAll(",", ""))) / 2;
  const exact = value.match(/([\d,]+)/);
  return exact ? Number(exact[1].replaceAll(",", "")) : undefined;
}

function proximityLabel(target: number, candidate: number) {
  const ratio = candidate / target;
  if (ratio >= 0.8 && ratio <= 1.25) return "ほぼ同規模";
  return `約${ratio.toFixed(1)}倍`;
}

export function getCompanyScaleComparisons(company: Company, allCompanies: Company[]): CompanyScaleComparisons {
  const intelligenceBySlug = getAllCompanyPublicIntelligence();
  const companyBySlug = new Map(allCompanies.map((entry) => [entry.slug, entry]));
  const currentIntel = intelligenceBySlug[company.slug];
  const currentRevenue = currentIntel ? findRevenueFact(currentIntel.facts) : undefined;
  const currentScale = resolveGlobalScale(company.slug, currentIntel?.companyStats.globalHeadcount);
  const currentHeadcount = parseHeadcount(currentScale?.value);

  const candidates = Object.entries(intelligenceBySlug)
    .filter(([slug]) => slug !== company.slug && companyBySlug.has(slug))
    .map(([slug, intelligence]) => {
      const revenue = findRevenueFact(intelligence.facts);
      const scale = resolveGlobalScale(slug, intelligence.companyStats.globalHeadcount);
      return {
        slug,
        name: companyBySlug.get(slug)!.name,
        revenue,
        scale,
        headcount: parseHeadcount(scale?.value),
        recognizable: recognizableCompanySlugs.has(slug),
      };
    });

  const closest = <T extends { recognizable: boolean }>(items: T[], distance: (item: T) => number) =>
    items.sort((a, b) => Number(b.recognizable) - Number(a.recognizable) || distance(a) - distance(b)).slice(0, 4);

  const revenue = currentRevenue ? closest(
    candidates.filter((entry): entry is typeof entry & { revenue: { fact: PublicFact; amount: number } } => Boolean(entry.revenue)),
    (entry) => Math.abs(Math.log(entry.revenue.amount / currentRevenue.amount)),
  ).map((entry) => ({
    slug: entry.slug,
    name: entry.name,
    label: entry.revenue.fact.label,
    value: entry.revenue.fact.value,
    distanceLabel: proximityLabel(currentRevenue.amount, entry.revenue.amount),
  })) : [];

  const headcount = currentHeadcount ? closest(
    candidates.filter((entry): entry is typeof entry & { headcount: number } => Boolean(entry.headcount)),
    (entry) => Math.abs(Math.log(entry.headcount / currentHeadcount)),
  ).map((entry) => ({
    slug: entry.slug,
    name: entry.name,
    label: "グローバル従業員数",
    value: entry.scale?.value ?? "確認中",
    distanceLabel: proximityLabel(currentHeadcount, entry.headcount),
  })) : [];

  return {
    revenue,
    headcount,
    revenueBasis: currentRevenue ? `${currentRevenue.fact.label}: ${currentRevenue.fact.value}` : undefined,
    headcountBasis: currentHeadcount ? currentScale?.value : undefined,
  };
}
