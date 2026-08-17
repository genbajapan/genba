import type { Company } from "@/lib/market-data";
import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

export type CompanyListSortMode =
  | "updated"
  | "new-jobs"
  | "jobs"
  | "name"
  | "entry-asc"
  | "entry-desc"
  | "headcount-desc"
  | "headcount-asc"
  | "entity-asc"
  | "entity-desc";

export const companyListSortOptions: Array<{ value: CompanyListSortMode; label: string }> = [
  { value: "updated", label: "最終更新が新しい順" },
  { value: "new-jobs", label: "新着求人が新しい順" },
  { value: "jobs", label: "求人が多い順" },
  { value: "name", label: "企業名 A–Z" },
  { value: "entry-asc", label: "日本進出が早い順" },
  { value: "entry-desc", label: "日本進出が遅い順" },
  { value: "headcount-desc", label: "日本法人従業員数が多い順" },
  { value: "headcount-asc", label: "日本法人従業員数が少ない順" },
  { value: "entity-asc", label: "日本法人設立が早い順" },
  { value: "entity-desc", label: "日本法人設立が遅い順" },
];

export type CompanyListSortMetric = {
  japanEntryYear: number | null;
  japanEntityYear: number | null;
  japanHeadcount: number | null;
};

const unavailableYearPattern = /(?:未確認|確認不能|非公開|不明|未特定|確認中|未設立|未進出)/;
const japanMarketPattern = /(?:日本|東京|国内|Japan)/i;
const entryActionPattern = /(?:進出|参入|開始|展開|開設|設立|拠点|オフィス|office|launch)/i;
const hiringOnlyPattern = /(?:採用|求人|recruit|hiring)/i;
const entityEvidencePattern = /(?:(?:日本|Japan)[^。。]{0,40}(?:法人|株式会社|合同会社|K\.?K\.?|G\.?K\.?)[^。。]{0,20}(?:設立|登記|法人化)|(?:株式会社|合同会社|有限会社|K\.?K\.?|G\.?K\.?)[^。。]{0,20}(?:設立|登記)|法人(?:を)?(?:設立|登記|法人化))/i;
const entityUnconfirmedPattern = /(?:(?:法人|設立|登記).{0,20}(?:未確認|確認不能|確認できない|不明|ではない|異なる)|(?:未確認|確認不能|確認できない|不明).{0,20}(?:法人|設立|登記))/;

function parseYear(value: string) {
  const match = value.match(/(?:19|20)\d{2}/);
  return match ? Number(match[0]) : null;
}

function parseJapanHeadcount(value: string) {
  const match = value.trim().match(/^(\d[\d,]*)人?$/);
  return match ? Number(match[1].replaceAll(",", "")) : null;
}

function resolveJapanEntityYear(company: Company, intelligence: CompanyPublicIntelligence) {
  if (company.entryStatus === "not-entered") return null;

  const explicitEntityYears = intelligence.marketStatus.milestones
    .filter((milestone) => {
      const text = `${milestone.label} ${milestone.detail}`;
      return entityEvidencePattern.test(text) && !entityUnconfirmedPattern.test(text);
    })
    .map((milestone) => parseYear(milestone.year))
    .filter((year): year is number => year !== null);
  if (explicitEntityYears.length) return Math.min(...explicitEntityYears);

  const japanSince = intelligence.companyStats.japanSince;
  const japanSinceText = `${japanSince.value} ${japanSince.detail}`;
  if (unavailableYearPattern.test(japanSinceText) || entityUnconfirmedPattern.test(japanSinceText) || !entityEvidencePattern.test(japanSinceText)) return null;
  return parseYear(japanSinceText);
}

function resolveJapanEntryYear(company: Company, intelligence: CompanyPublicIntelligence, entityYear: number | null) {
  if (company.entryStatus === "not-entered") return null;

  const entryYears = intelligence.marketStatus.milestones
    .filter((milestone) => {
      const text = `${milestone.label} ${milestone.detail}`;
      return japanMarketPattern.test(text) && entryActionPattern.test(text) && !hiringOnlyPattern.test(text);
    })
    .map((milestone) => parseYear(milestone.year))
    .filter((year): year is number => year !== null);
  return entryYears.length ? Math.min(...entryYears) : entityYear;
}

export function buildCompanyListSortMetric(company: Company, intelligence?: CompanyPublicIntelligence): CompanyListSortMetric {
  if (!intelligence) {
    return {
      japanEntryYear: null,
      japanEntityYear: null,
      japanHeadcount: company.entryStatus === "not-entered" ? 0 : null,
    };
  }

  const japanEntityYear = resolveJapanEntityYear(company, intelligence);
  return {
    japanEntryYear: resolveJapanEntryYear(company, intelligence, japanEntityYear),
    japanEntityYear,
    japanHeadcount: company.entryStatus === "not-entered" ? 0 : parseJapanHeadcount(intelligence.companyStats.japanHeadcount.value),
  };
}

export function compareKnownNumbers(a: number | null, b: number | null, direction: "asc" | "desc") {
  if (a === null) return b === null ? 0 : 1;
  if (b === null) return -1;
  return direction === "asc" ? a - b : b - a;
}
