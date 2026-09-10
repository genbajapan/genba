import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-11";

export const companies20260911Daily: Company[] = [
  {
    slug: "tricentis",
    name: "Tricentis",
    category: "AI搭載ソフトウェアテスト・品質保証",
    broadCategory: "セキュリティ・IT運用",
    hq: "オースティン（米国）",
    japanPresence: "Tricentis Japan合同会社・東京。gBizINFOの事業所被保険者数14人",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "企業向けの継続的テスト、テスト自動化、品質分析を提供。東京でSenior Account Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://tricentis.wd1.myworkdayjobs.com/Tricentis_Careers",
    tags: ["Software Testing", "Quality Engineering", "DevOps", "Enterprise Sales", "AI", "Tokyo"],
  },
  {
    slug: "medallia",
    name: "Medallia",
    category: "顧客・従業員体験管理",
    broadCategory: "CRM・顧客体験",
    hq: "プレザントン（米国）",
    japanPresence: "Medallia株式会社・東京。gBizINFOでは事業所被保険者数の掲載なし。国内の正確な在籍人数は非公開",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "顧客・従業員の声を収集、分析し、現場の改善行動へつなぐ体験管理基盤。東京でSenior Technical Consultantを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.medallia.com/",
    tags: ["Experience Management", "Customer Experience", "Employee Experience", "Professional Services", "AI", "Tokyo"],
  },
  {
    slug: "launchdarkly",
    name: "LaunchDarkly",
    category: "フィーチャー管理・実験・ソフトウェア提供",
    broadCategory: "AI・データ基盤",
    hq: "オークランド（米国）",
    japanPresence: "SingaporeでMid-Market Account Executiveを公式募集。日本法人・国内拠点・日本求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "機能公開をコード配備から切り離し、段階公開、即時停止、実験を安全に運用する開発基盤。Singaporeの営業採用から日本進出条件を観測。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/launchdarkly",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Feature Management", "Software Delivery", "Experimentation", "DevOps", "Singapore", "APAC"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "公式求人に日本の給与、変動給、株式、目標達成率、担当範囲の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を定量成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当社数、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、目標責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260911Daily: Job[] = [
  makeJob({
    id: "tricentis-senior-account-executive-jr105896",
    companySlug: "tricentis",
    title: "Senior Account Executive",
    segment: "Enterprise Sales / Software Quality",
    location: "東京都",
    workStyle: "東京勤務。出社日数は公式求人で未確認",
    language: "日本市場担当。日本語・英語の水準は公式求人で未確認",
    source: { label: "Tricentis Careers (Workday)", url: "https://tricentis.wd1.myworkdayjobs.com/Tricentis_Careers/job/JP---Tokyo/Senior-Account-Executive_JR105896" },
    descriptionSummary: "日本の大企業・見込み顧客を担当し、新規開拓から要件整理、提案、交渉、受注、既存拡大まで複雑な販売サイクルを持つ。",
    genbaTake: "テスト自動化機能の説明ではなく、品質事故、手動テスト、リリース遅延を経営課題へ翻訳し、品質保証の運用変更を売る営業。",
    desiredProfile: "公式求人は企業向けB2B SaaS営業5年以上、10万ドル超ACVの成約、複数関係者商談、目標達成、MEDDPICC等を重視する。",
  }),
  makeJob({
    id: "medallia-senior-technical-consultant-client-delivery-5978",
    companySlug: "medallia",
    title: "Senior Technical Consultant, Client Delivery",
    segment: "Professional Services / Experience Management",
    location: "東京都",
    workStyle: "東京勤務。出社日数は公式求人で未確認",
    language: "日本語・英語の水準は公式求人で未確認",
    source: { label: "Medallia Careers (iCIMS)", url: "https://jobs.medallia.com/jobs/5978?lang=en-us" },
    descriptionSummary: "顧客の事業目標を技術設計へ変換し、体験データから課題と成長機会を読み、経営層の行動と投資対効果へつなぐ。",
    genbaTake: "設定代行ではなく、顧客・従業員の声を事業指標へ翻訳し、運用変更と価値実現までを持つ導入コンサルタント。",
    desiredProfile: "公式求人はソフトウェアを使った顧客維持・管理4年以上、Web・API等の技術理解、事業課題と技術概念の翻訳力を重視する。",
  }),
];
