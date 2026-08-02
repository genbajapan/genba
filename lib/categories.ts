export type CategoryId = "1" | "2" | "3" | "4" | "5";
export type Locale = "en" | "ja";

export interface Category {
  id: CategoryId;
  slug: string;
  label: string;
  labelJa: string;
  description: string;
  descriptionJa: string;
}

export const categories: Record<CategoryId, Category> = {
  "1": {
    id: "1",
    slug: "business-customs",
    label: "Business Customs & Decision-Making",
    labelJa: "商習慣・意思決定プロセス",
    description:
      "How ringi, nemawashi, and Japanese org structures shape whether — and how fast — a deal actually closes.",
    descriptionJa:
      "稟議・根回し・日本企業の組織構造が、商談が成立するか、どれだけ早く進むかをどう左右するか。",
  },
  "2": {
    id: "2",
    slug: "industry-playbooks",
    label: "Industry Playbooks",
    labelJa: "業界別プレイブック",
    description:
      "Sector-specific notes on retail/EC and OTA/travel — where the leverage points differ from a generic Japan playbook.",
    descriptionJa:
      "リテール/EC、OTA/旅行など業界別の勘所。汎用的な日本進出プレイブックとは勝ち筋が異なる部分に焦点を当てる。",
  },
  "3": {
    id: "3",
    slug: "market-data",
    label: "Market Data & Trends",
    labelJa: "市場データ・トレンド",
    description:
      "Primary-source data on Japan's EC, cashless, and inbound trends — cited from METI, JTA, and JETRO.",
    descriptionJa:
      "経済産業省・観光庁・JETROなど一次情報に基づく、日本のEC・キャッシュレス・インバウンド動向データ。",
  },
  "4": {
    id: "4",
    slug: "sales-tactics",
    label: "Sales Tactics & Strategy",
    labelJa: "セールス実践・戦略",
    description:
      "Entity vs. agency vs. fractional sales, pricing localization, and how to land a first reference customer.",
    descriptionJa:
      "現地法人 vs 代理店 vs フラクショナル営業、価格ローカライズ、最初のリファレンス顧客の獲得法。",
  },
  "5": {
    id: "5",
    slug: "case-studies",
    label: "Why Post-Entry Growth Stalls",
    labelJa: "進出後に伸び悩む理由",
    description:
      "Diagnostic case studies on why pipeline dries up after the first pilot — the gap most Japan GTM content skips.",
    descriptionJa:
      "最初のパイロット後にパイプラインが枯れる理由を診断するケーススタディ。多くの日本GTM系コンテンツが手薄な領域。",
  },
};

export const categoryList = Object.values(categories);

export function getCategory(id: string): Category | undefined {
  return categories[id as CategoryId];
}

export function getCategoryLabel(id: string, locale: Locale = "en"): string {
  const category = getCategory(id);
  if (!category) return "";
  return locale === "ja" ? category.labelJa : category.label;
}
