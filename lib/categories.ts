export type CategoryId = "1" | "2" | "3" | "4" | "5";

export interface Category {
  id: CategoryId;
  slug: string;
  label: string;
  description: string;
}

export const categories: Record<CategoryId, Category> = {
  "1": {
    id: "1",
    slug: "business-customs",
    label: "Business Customs & Decision-Making",
    description:
      "How ringi, nemawashi, and Japanese org structures shape whether — and how fast — a deal actually closes.",
  },
  "2": {
    id: "2",
    slug: "industry-playbooks",
    label: "Industry Playbooks",
    description:
      "Sector-specific notes on retail/EC and OTA/travel — where the leverage points differ from a generic Japan playbook.",
  },
  "3": {
    id: "3",
    slug: "market-data",
    label: "Market Data & Trends",
    description:
      "Primary-source data on Japan's EC, cashless, and inbound trends — cited from METI, JTA, and JETRO.",
  },
  "4": {
    id: "4",
    slug: "sales-tactics",
    label: "Sales Tactics & Strategy",
    description:
      "Entity vs. agency vs. fractional sales, pricing localization, and how to land a first reference customer.",
  },
  "5": {
    id: "5",
    slug: "case-studies",
    label: "Why Post-Entry Growth Stalls",
    description:
      "Diagnostic case studies on why pipeline dries up after the first pilot — the gap most Japan GTM content skips.",
  },
};

export const categoryList = Object.values(categories);

export function getCategory(id: string): Category | undefined {
  return categories[id as CategoryId];
}
