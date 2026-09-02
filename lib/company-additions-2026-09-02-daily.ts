import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-02";

export const companies20260902Daily: Company[] = [
  {
    slug: "kong",
    name: "Kong",
    category: "API・AI接続管理",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンフランシスコ（米国）",
    japanPresence: "Kong株式会社・東京（Japan Cloudとの合弁、六本木オフィス）",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "APIとAIモデル間の通信を接続、保護、統制、計測するKong Konnectを提供。日本でSales Development RepresentativeとAccount Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://open.talentio.com/r/1/c/japancloud/homes/4310",
    tags: ["API Management", "AI Gateway", "Developer Platform", "Enterprise", "Tokyo", "Hybrid"],
  },
  {
    slug: "perplexity",
    name: "Perplexity",
    category: "AI回答エンジン・企業検索",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点を確認できず。東京HybridのAPAC Customer Success求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "出典付きの回答検索と企業向けAI検索を提供。日本本社の企業顧客を担当する東京HybridのCustomer Success & Enterprise Support Leadを進出シグナルとして掲載。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/perplexity",
    tags: ["日本進出の兆しあり", "AI Search", "Enterprise AI", "Customer Success", "APAC", "Tokyo Hybrid"],
    entryStatus: "pre-entry-signal",
  },
  {
    slug: "linear",
    name: "Linear",
    category: "製品開発・課題管理",
    broadCategory: "業務自動化・コラボレーション",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点・日本向け公式求人を確認できず",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "ソフトウェア企業が課題、プロジェクト、製品計画を一つの高速な作業系で管理する製品開発基盤。4万社超の利用を確認する一方、日本の応募導線は未確認。",
    lastChecked: checkedAt,
    careersUrl: "https://linear.app/careers",
    tags: ["日本未進出", "Product Development", "Issue Tracking", "Developer Tools", "AI", "Remote First"],
    entryStatus: "not-entered",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "日本の給与、変動報酬、株式、担当範囲、評価指標は公式求人で確認できない。提示条件と評価方法を面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題の確認から部門横断の実行まで担いたい人に向く。`,
      thingsToKnow: "担当範囲、個人・チームの評価指標、支援体制、給与・賞与・株式、日本組織の人数は十分に公開されていない。面接で確認したい。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise softwareの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `【Genba仮説】${draft.segment}では在籍年数より、担当範囲の成果と再利用できる実行の型が次の職位を左右する。支持材料: 公式求人は顧客成果と部門横断の実行を求める。反証・留保: 日本の昇進率・離職率・職位別基準は未公開。面接で確認: 直近24カ月の昇進・異動・退職と次の職位に必要な定量成果は。`,
      priorCompanies: `【Genba仮説】${draft.segment}に近い顧客課題、複数の意思決定者、目標責任を持った人材が隣接する。支持材料: 公式求人は社名より顧客の意思決定を前へ進めた経験を重視する。反証・留保: 日本の採用者を同じ条件で十分に集計できない。面接で確認: 直近採用者の前職領域、共通スキル、立ち上がり期間は。`,
      nextCompanies: `【Genba仮説】${draft.segment}の成果を数字で残せれば、同領域の専門職、より大きな顧客層、Lead・管理職へ広げやすい。支持材料: 公式求人が成果責任と部門横断の実行を置く。反証・留保: 公開された転職先分布ではなく職務構造からの仮説。面接で確認: 退職者の次職種と社内で担当範囲を広げた実例は。`,
    },
  };
}

export const jobs20260902Daily: Job[] = [
  makeJob({
    id: "kong-sales-development-representative-japan-121565",
    companySlug: "kong",
    title: "Sales Development Representative",
    segment: "Sales Development / API・AI Infrastructure",
    location: "東京都港区",
    workStyle: "Hybrid（六本木オフィス。出社日数は公式求人で確認できず）",
    language: "日本語での顧客対応。英語要件は公式求人で確認が必要",
    source: { label: "Kong Japan Careers (Talentio)", url: "https://open.talentio.com/r/1/c/japancloud/pages/121565" },
    descriptionSummary: "電話、ビデオ、メール、SNSでIT・事業の意思決定者へ接点を作り、営業・マーケティングと連携して見込み顧客を評価し、商談機会を創出する。",
    genbaTake: "件数だけを追うのではなく、APIやAI通信の増加を開発速度、セキュリティ、統制の課題へ翻訳し、技術部門と経営層の商談入口を作る役割。",
    desiredProfile: "公式求人は新しいIT製品を学ぶ力、顧客会話の共有、速い環境への適応を重視し、90日で営業手法の習得と立ち上がり目標の達成を置く。",
  }),
  makeJob({
    id: "kong-account-executive-japan-122479",
    companySlug: "kong",
    title: "Account Executive",
    segment: "Enterprise Sales / API・AI Infrastructure",
    location: "東京都港区",
    workStyle: "Hybrid（東京近郊居住を必須）",
    language: "日本語での顧客対応。英語力は歓迎要件",
    source: { label: "Kong Japan Careers (Talentio)", url: "https://open.talentio.com/r/1/c/japancloud/pages/122479" },
    descriptionSummary: "Enterprise顧客のキーパーソンを新規開拓し、Kong Enterprise・Konnectの価値提案、案件管理、予測、交渉、受注までを担うハンター型Account Executive。",
    genbaTake: "API gatewayの機能比較で終わらず、複数クラウドとAI利用で増える接続を、開発速度・障害・統制・利用量の経営課題へ変えて予算化する役割。",
    desiredProfile: "公式求人はEnterprise software営業5年以上、CxOへの提案、新規開拓、交渉・説明・受注の実績を必須とし、API・基盤・オープンソース経験を歓迎する。",
  }),
  makeJob({
    id: "perplexity-customer-success-enterprise-support-lead-apac-ab448b33",
    companySlug: "perplexity",
    title: "Customer Success & Enterprise Support Lead, APAC",
    segment: "Customer Success / Enterprise AI Support",
    location: "東京",
    workStyle: "Hybrid（出社頻度は公式求人で確認できず）",
    language: "日本語・英語に堪能。韓国語または中国語は歓迎",
    source: { label: "Perplexity Careers (Ashby)", url: "https://jobs.ashbyhq.com/perplexity/ab448b33-0a0e-4acf-8b86-df61f38716ac" },
    descriptionSummary: "日本本社のEnterprise顧客を担当し、導入、活用、更新、拡大を進めながら、APACの複雑な技術問い合わせの最終エスカレーションを担う。",
    genbaTake: "一般的なCSと一次Supportの分業ではなく、AI検索の業務定着、価値の定量化、API・SSO等の技術解決を一つの顧客責任として持つ地域アンカー。",
    desiredProfile: "公式求人はB2B SaaSの顧客支援3年以上と顧客対応3年以上、Enterpriseの更新・拡大、LLM・API・SSOの理解、日本語・英語を求める。",
  }),
];
