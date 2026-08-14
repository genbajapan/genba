import type { Company } from "@/lib/market-data";
import { getCompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { getFABECompanyCardSummary } from "@/lib/company-fabe";

export function getCompanyCardSummary(company: Company): string {
  const intelligence = getCompanyPublicIntelligence(company.slug);
  if (!intelligence) return `${company.category}領域の課題を専門テクノロジーで解決し、運用・統合面に優位性を持つ。`;
  return getFABECompanyCardSummary(intelligence, company.slug);
}
