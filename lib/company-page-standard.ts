export const COMPANY_PAGE_STANDARD = {
  id: "adyen-v1",
  canonicalSlug: "adyen",
  canonicalCommit: "66ca2e2",
  canonicalPath: "/companies/adyen",
  sections: [
    { id: "overview", label: "会社概要", defaultOpen: true },
    { id: "scale", label: "近しい規模感の外資IT企業", defaultOpen: false },
    { id: "market", label: "決算・IPOと成長性／リスク", defaultOpen: false },
    { id: "culture", label: "働き方とカルチャー", defaultOpen: false },
    { id: "work-there", label: "働いている人を見る", defaultOpen: true },
    { id: "roles", label: "募集中ポジション", defaultOpen: true },
    { id: "decision", label: "AEとして見抜くべき5つの未解決論点", defaultOpen: false },
    { id: "solution", label: "売るソリューションの深掘り", defaultOpen: true },
    { id: "playbook", label: "想定できる売り方", defaultOpen: false },
    { id: "compare", label: "合わせて見るべき会社", defaultOpen: true },
    { id: "sources", label: "このページの根拠", defaultOpen: false },
  ],
  fabeLabels: ["機能", "優位性", "提供価値", "根拠", "競合・代替手段"],
  layout: {
    heroDisclosureBoundedToContentColumn: true,
    allowHorizontalResize: false,
    wideTableOverflow: "horizontal-scroll",
  },
  heroSummary: {
    readerFirst: true,
    requiredElements: ["customer-problem", "plain-language-solution", "business-outcome"],
    rejectFeatureRowReuse: true,
    rejectProductNameEnumeration: true,
    minimumSentences: 2,
  },
  jobMarketValue: {
    roleSpecific: true,
    dimensions: ["role-family", "seniority", "segment", "target-ownership"],
    compensationHypothesisWhenOfficialRangeMissing: true,
    requiredHypothesisBreakdown: ["estimated-base", "estimated-ote-or-total-cash", "pay-model-assumption"],
    requireNumericRange: true,
    requireMarketBenchmarkSource: true,
    excludeEquityFromCashRange: true,
    rejectUnpricedMarketBands: true,
    rejectIdenticalOutputsAcrossDifferentRoleFamilies: true,
  },
  reputationResearch: {
    requireExternalReviewSource: true,
    useOverseasReviewsWhenJapanSampleIsInsufficient: true,
    separateFactsExternalSignalsAndHypotheses: true,
    requirePositiveAndCautionThemes: true,
    requireRoleSpecificHypothesis: true,
    roleDimensions: ["quota-or-portfolio", "manager", "team-capacity", "workload", "career"],
    rejectUnavailableOnlyConclusion: true,
  },
  hypothesisLabel: "【Genba仮説】",
  staleJobDays: 30,
} as const;

export type CompanyPageRolloutStatus = "未着手" | "調査中" | "検証済み" | "公開済み";
export type CompanyPagePriority = "HOT" | "Active" | "Selective" | "求人なし";

export function getCompanyPagePriority(salesRoles: number): CompanyPagePriority {
  if (salesRoles >= 3) return "HOT";
  if (salesRoles === 2) return "Active";
  if (salesRoles === 1) return "Selective";
  return "求人なし";
}

export const COMPANY_PAGE_PRIORITY_ORDER: CompanyPagePriority[] = ["HOT", "Active", "Selective", "求人なし"];
