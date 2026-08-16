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
  disclosure: "公開値" | "年率換算" | "推定";
};

export type CompanyScaleComparisons = {
  revenue: ScaleComparisonItem[];
  headcount: ScaleComparisonItem[];
  revenueBasis?: string;
  revenueBasisDisclosure?: "公開値" | "年率換算" | "推定";
  revenueMethodology?: string;
  headcountBasis?: string;
};

type RevenueScale = {
  amount: number;
  lower: number;
  upper: number;
  label: string;
  value: string;
  disclosure: "公開値" | "年率換算" | "推定";
  methodology?: string;
};

const recognizableCompanySlugs = new Set([
  "salesforce", "mongodb", "hubspot", "okta", "zendesk", "uipath", "confluent", "pagerduty",
  "monday-com", "miro", "rubrik", "notion", "elastic", "deel", "anthropic", "zscaler",
  "cloudflare", "datadog", "docusign", "veeva", "shopify", "stripe", "snowflake", "servicenow",
]);

const revenueLabelPattern = /(売上(?:高|収益)?|純収益|net revenue|revenue)/i;
const excludedRevenueLabelPattern = /(比率|成長率|構成|予測|ガイダンス|目標|見通し)/;

function parseJpyAmount(text: string) {
  const match = text.match(/(?:約\s*)?([\d,.]+(?:\.\d+)?)\s*(兆|億|万)?円/);
  if (!match) return undefined;
  const amount = Number(match[1].replaceAll(",", ""));
  const multiplier = match[2] === "兆" ? 1_000_000_000_000 : match[2] === "億" ? 100_000_000 : match[2] === "万" ? 10_000 : 1;
  return amount * multiplier;
}

function parseEuroAmount(text: string) {
  const symbol = text.match(/€\s*([\d,.]+(?:\.\d+)?)\s*([KMBT])?/i);
  if (symbol) {
    const multiplier = symbol[2]?.toUpperCase() === "T" ? 1e12 : symbol[2]?.toUpperCase() === "B" ? 1e9 : symbol[2]?.toUpperCase() === "M" ? 1e6 : symbol[2]?.toUpperCase() === "K" ? 1e3 : 1;
    return Number(symbol[1].replaceAll(",", "")) * multiplier;
  }
  const japanese = text.match(/([\d,.]+(?:\.\d+)?)\s*(兆|億|万)?ユーロ/);
  if (!japanese) return undefined;
  const multiplier = japanese[2] === "兆" ? 1e12 : japanese[2] === "億" ? 1e8 : japanese[2] === "万" ? 1e4 : 1;
  return Number(japanese[1].replaceAll(",", "")) * multiplier;
}

function annualizationFactor(fact: PublicFact) {
  const periodText = `${fact.label} ${fact.detail}`;
  return /(Q[1-4]|四半期)/i.test(periodText) ? 4
    : /(上期|半期|6カ月|6か月)/.test(periodText) ? 2
      : /(9カ月|9か月)/.test(periodText) ? 4 / 3
        : 1;
}

function revenueAmount(fact: PublicFact) {
  // 円換算が併記されている場合は、サイト上で読者が見る値を比較にもそのまま使う。
  const displayedYen = parseJpyAmount(fact.value);
  const usdToken = fact.value.match(/(?:\$[\d,.]+(?:\.\d+)?(?:[KMBT]|万|億|兆)?|[\d,.]+(?:\.\d+)?(?:万|億|兆)?ドル)/i)?.[0];
  const euro = parseEuroAmount(fact.value);
  const yen = displayedYen ?? (usdToken ? (parseUsdAmount(usdToken) ?? 0) * 157 : euro ? euro * 185 : undefined);
  if (!yen) return undefined;
  return yen * annualizationFactor(fact);
}

function findRevenueFact(facts: PublicFact[]) {
  const candidates = facts
    .filter((fact) => revenueLabelPattern.test(fact.label) && !excludedRevenueLabelPattern.test(fact.label))
    .map((fact) => ({ fact, amount: revenueAmount(fact) }))
    .filter((entry): entry is { fact: PublicFact; amount: number } => Boolean(entry.amount));
  return candidates.sort((a, b) => {
    const score = (fact: PublicFact) => /(FY|年度|通期|年間|年次)/i.test(`${fact.label} ${fact.detail}`) ? 3 : /(上期|半期|9カ月|9か月)/i.test(`${fact.label} ${fact.detail}`) ? 2 : /(Q[1-4]|四半期)/i.test(`${fact.label} ${fact.detail}`) ? 1 : 0;
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

function quantile(values: number[], point: number) {
  const ordered = [...values].sort((a, b) => a - b);
  const index = (ordered.length - 1) * point;
  const lower = Math.floor(index);
  const fraction = index - lower;
  return ordered[lower] + ((ordered[lower + 1] ?? ordered[lower]) - ordered[lower]) * fraction;
}

function formatYen(amount: number) {
  if (amount >= 1_000_000_000_000) {
    const value = amount / 1_000_000_000_000;
    return `${value >= 10 ? Math.round(value) : value.toFixed(1)}兆円`;
  }
  if (amount >= 100_000_000) return `${Math.round(amount / 100_000_000).toLocaleString("ja-JP")}億円`;
  if (amount >= 10_000) return `${Math.round(amount / 10_000).toLocaleString("ja-JP")}万円`;
  return `${Math.round(amount).toLocaleString("ja-JP")}円`;
}

function buildEstimatedRevenue(
  company: Company,
  headcount: number | undefined,
  benchmarks: Array<{ company: Company; amount: number; headcount: number }>,
): RevenueScale | undefined {
  if (!headcount) return undefined;
  const sameCategory = benchmarks.filter((entry) => entry.company.broadCategory === company.broadCategory);
  const selected = sameCategory.length >= 3 ? sameCategory : benchmarks;
  if (selected.length < 3) return undefined;
  const ratios = selected.map((entry) => entry.amount / entry.headcount);
  const lower = headcount * quantile(ratios, 0.25);
  const upper = headcount * quantile(ratios, 0.75);
  const scope = sameCategory.length >= 3 ? `同じ大分類「${company.broadCategory}」` : "Genba掲載企業全体";
  return {
    amount: (lower + upper) / 2,
    lower,
    upper,
    label: "年間売上規模（推定）",
    value: `約${formatYen(lower)}〜${formatYen(upper)}`,
    disclosure: "推定",
    methodology: `${scope}のうち、売上と従業員数の両方を確認できる企業の「従業員1人当たり売上」の中央50%レンジを、公開従業員規模に掛けて概算。非公開情報を示すものではありません。`,
  };
}

function proximityLabel(target: number, candidate: number) {
  const ratio = candidate / target;
  if (ratio >= 0.8 && ratio <= 1.25) return "ほぼ同規模";
  return `約${ratio.toFixed(1)}倍`;
}

export function getCompanyScaleComparisons(company: Company, allCompanies: Company[]): CompanyScaleComparisons {
  const intelligenceBySlug = getAllCompanyPublicIntelligence();
  const companyBySlug = new Map(allCompanies.map((entry) => [entry.slug, entry]));
  const observations = allCompanies.map((entry) => {
    const intelligence = intelligenceBySlug[entry.slug];
    const revenue = intelligence ? findRevenueFact(intelligence.facts) : undefined;
    const scale = resolveGlobalScale(entry.slug, intelligence?.companyStats.globalHeadcount);
    return {
      company: entry,
      intelligence,
      revenue,
      scale,
      headcount: parseHeadcount(scale?.value),
    };
  });
  const benchmarks = observations
    .filter((entry): entry is typeof entry & { revenue: { fact: PublicFact; amount: number }; headcount: number } => Boolean(entry.revenue && entry.headcount))
    .map((entry) => ({ company: entry.company, amount: entry.revenue.amount, headcount: entry.headcount }));
  const revenueBySlug = new Map(observations.map((entry) => {
    const annualizer = entry.revenue ? annualizationFactor(entry.revenue.fact) : 1;
    const exact: RevenueScale | undefined = entry.revenue ? {
      amount: entry.revenue.amount,
      lower: entry.revenue.amount,
      upper: entry.revenue.amount,
      label: entry.revenue.fact.label,
      value: annualizer > 1 ? `約${formatYen(entry.revenue.amount)}` : entry.revenue.fact.value,
      disclosure: annualizer > 1 ? "年率換算" : "公開値",
    } : undefined;
    return [entry.company.slug, exact ?? buildEstimatedRevenue(entry.company, entry.headcount, benchmarks)] as const;
  }));

  const currentObservation = observations.find((entry) => entry.company.slug === company.slug);
  const currentRevenue = revenueBySlug.get(company.slug);
  const currentHeadcount = currentObservation?.headcount;
  const candidates = observations
    .filter((entry) => entry.company.slug !== company.slug && companyBySlug.has(entry.company.slug))
    .map((entry) => ({
      ...entry,
      revenueScale: revenueBySlug.get(entry.company.slug),
      recognizable: recognizableCompanySlugs.has(entry.company.slug),
    }));

  const closest = <T extends { recognizable: boolean }>(items: T[], distance: (item: T) => number) =>
    items.sort((a, b) => distance(a) - distance(b) || Number(b.recognizable) - Number(a.recognizable)).slice(0, 4);

  const revenue = currentRevenue ? closest(
    candidates.filter((entry): entry is typeof entry & { revenueScale: RevenueScale } => Boolean(entry.revenueScale)),
    (entry) => Math.abs(Math.log(entry.revenueScale.amount / currentRevenue.amount)),
  ).map((entry) => ({
    slug: entry.company.slug,
    name: entry.company.name,
    label: entry.revenueScale.label,
    value: entry.revenueScale.value,
    distanceLabel: proximityLabel(currentRevenue.amount, entry.revenueScale.amount),
    disclosure: entry.revenueScale.disclosure,
  })) : [];

  const headcount = currentHeadcount ? closest(
    candidates.filter((entry): entry is typeof entry & { headcount: number } => Boolean(entry.headcount)),
    (entry) => Math.abs(Math.log(entry.headcount / currentHeadcount)),
  ).map((entry) => ({
    slug: entry.company.slug,
    name: entry.company.name,
    label: "グローバル従業員数",
    value: entry.scale?.value ?? "確認中",
    distanceLabel: proximityLabel(currentHeadcount, entry.headcount),
    disclosure: "公開値" as const,
  })) : [];

  return {
    revenue,
    headcount,
    revenueBasis: currentRevenue ? `${currentRevenue.label}: ${currentRevenue.value}` : undefined,
    revenueBasisDisclosure: currentRevenue?.disclosure,
    revenueMethodology: currentRevenue?.methodology,
    headcountBasis: currentHeadcount ? currentObservation?.scale?.value : undefined,
  };
}
