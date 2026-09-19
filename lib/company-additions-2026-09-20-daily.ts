import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-20";

export const companies20260920Daily: Company[] = [
  {
    slug: "stackadapt",
    name: "StackAdapt",
    category: "広告配信・オーディエンス・計測基盤",
    broadCategory: "CRM・顧客体験",
    hq: "トロント（カナダ）",
    japanPresence: "StackAdapt Japan株式会社・東京。日本国内勤務の現行営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "複数の広告媒体、対象者設計、配信、計測を一つにつなぐ広告基盤。日本事業の営業責任者を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/stackadapt",
    tags: ["Advertising", "Audience", "CTV", "Measurement", "Enterprise Sales", "Japan"],
  },
  {
    slug: "acquia",
    name: "Acquia",
    category: "コンテンツ管理・デジタル体験・デジタル資産管理",
    broadCategory: "CRM・顧客体験",
    hq: "ボストン（米国）",
    japanPresence: "アクイアジャパン合同会社・東京。日本国内リモートの現行求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "Drupalを起点に、企業のWeb、コンテンツ、デジタル資産、顧客体験を管理する。日本の提案技術責任者を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/acquia",
    tags: ["Drupal", "DXP", "CMS", "DAM", "Solutions Engineering", "Japan"],
  },
  {
    slug: "sentry",
    name: "Sentry",
    category: "アプリケーション監視・エラー解析・AIデバッグ",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点・日本求人は未確認。SydneyのAPAC技術支援求人を公式確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "エラー、性能、ログ、トレース、利用画面を開発者の修正作業へつなぐ。APACではSydneyを起点に技術支援体制を構築中。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/sentry",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Observability", "Error Monitoring", "Developer Tools", "AI Debugging", "APAC"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の技術・事業課題を成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業の同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260920Daily: Job[] = [
  makeJob({
    id: "stackadapt-senior-sales-manager-japan-4317821009",
    companySlug: "stackadapt",
    title: "Senior Sales Manager, Japan",
    segment: "Japan Market Development / Advertising Technology",
    location: "日本",
    workStyle: "Remote-first。日本国内の候補者を優先し、国内出張あり",
    language: "日本語・英語ともに流暢であることを必須とする",
    source: { label: "StackAdapt Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/stackadapt/jobs/4317821009" },
    descriptionSummary: "日本の広告会社、広告主、事業提携先を開拓し、案件創出、受注、予測、長期的な販路づくりまでを持つ日本市場の営業責任者。",
    genbaTake: "広告枠を売るだけでなく、日本の事業計画、販売経路、顧客成果をゼロから組み立てる市場開発の役割。地域組織との連携と日本での自律性を同時に求められる。",
    compensationReality: "基本給は年1,345万6,800〜1,850万3,100円。賞与、歩合、株式の対象になり得るが、目標変動給、比率、目標額、達成率は非公開。",
    desiredProfile: "公式求人は広告技術・運用型広告の営業8年以上、日本の広告会社・広告主との関係、新市場開発、新規案件、提携、日本語・英語を重視する。",
  }),
  makeJob({
    id: "acquia-lead-solutions-engineer-japan-8000008",
    companySlug: "acquia",
    title: "Lead Solutions Engineer",
    segment: "Solutions Engineering / Digital Experience Platform",
    location: "日本",
    workStyle: "Remote - Japan。国内顧客・提携先への出張あり",
    language: "日本語は母語水準、英語は業務水準",
    source: { label: "Acquia Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/acquia/jobs/8000008" },
    descriptionSummary: "日本の新規顧客を中心に、営業とSI・販売パートナーを支援し、技術調査、提案、実演、検証、事業価値の説明を主導する。",
    genbaTake: "製品デモの担当ではなく、ほぼ全ての日本の新規契約がパートナー経由という前提で、提案技術とパートナーの再現力を同時に高める役割。",
    compensationReality: "日本向けの基本給、賞与、株式、目標変動給、案件支援件数、受注への評価配分は公式求人で確認できない。",
    desiredProfile: "公式求人はDXP・CMSまたは企業向けSaaSの提案技術、Webとクラウドの基礎、SI・販売パートナー、新規顧客、PoC、日本語と英語を重視する。",
  }),
];
