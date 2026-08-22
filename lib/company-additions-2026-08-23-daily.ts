import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-23";

export const companies20260823Daily: Company[] = [
  {
    slug: "vonage",
    name: "Vonage",
    category: "クラウドコミュニケーション・CPaaS・コンタクトセンター",
    broadCategory: "業務自動化・コラボレーション",
    hq: "ニュージャージー州ホルムデル（米国）",
    japanPresence: "Vonage Japan合同会社・東京拠点・日本向け公式求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "messaging、voice、video、認証APIとcontact centerを提供するEricsson傘下のcloud communications企業。日本でAPI顧客のadoption、renewal、expansionを担うCustomer Success Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/vonage/jobs/8528707002",
    tags: ["CPaaS", "Communications API", "Contact Center", "Customer Success", "Expansion", "Japan Remote"],
  },
  {
    slug: "coderabbit",
    name: "CodeRabbit",
    category: "AIコードレビュー・ソフトウェア変更管理",
    broadCategory: "AI・データ基盤",
    hq: "カリフォルニア州サンフランシスコ（米国）",
    japanPresence: "Japan Salesのfounding member求人を確認（日本法人・常設officeは未確認）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "AIが増やすcode changeをreview、優先順位付け、説明、security監視まで管理するplatform。日本でnamed mid-enterpriseのpipelineと初期受注を作るAccount Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/coderabbit/0e889e16-a2a3-47f3-bce9-ce87ef795762",
    tags: ["日本未進出", "AI Code Review", "Developer Tools", "Agentic Change Management", "Enterprise Sales", "Remote Japan"],
    entryStatus: "pre-entry-signal",
  },
];

function careerInsights(domain: string, roleEvidence: string, marketValue: string): Job["careerInsights"] {
  return {
    fit: `${domain}を機能説明で終わらせず、顧客の業務KPIと導入・定着へ変えたい人に向く。`,
    thingsToKnow: "日本のbase、OTE、quota、担当社数、達成率、ramp、昇進・離職の集計は公式求人で確認できない。配属先の分母と期間を面接で確認したい。",
    marketValue,
    tenureAndPromotion: `【Genba仮説】次のscopeは在籍年数より、${roleEvidence}を定量成果として再現できるかで決まる。支持材料: 公式求人は顧客成果、部門横断の実行、継続的な学習と目標責任を求める。反証・留保: 日本teamの昇進率・離職率、level別の標準在籍期間、評価分布は未公開。面接で確認: 直近24カ月の昇進・異動・退職の分母、次levelへ進んだ人の共通成果、performance reviewの周期は。`,
    priorCompanies: `【Genba仮説】${domain}に近い顧客課題、複数stakeholder、目標責任を持ち、複雑な案件を社内専門家と進めた人が隣接する。支持材料: 公式求人はrole固有のdomain、顧客折衝、部門横断の実行、成果責任を要件にする。反証・留保: 日本の同一roleを十分な件数で集計できず、特定社からの採用傾向は断定しない。面接で確認: 直近採用者の前職category上位3つ、標準ramp期間は。`,
    nextCompanies: `【Genba仮説】${marketValue}を数字と具体例で残せれば、隣接するEnterprise SaaSの専門職、上位segment、leadershipへ接続しやすい。支持材料: 公式求人が顧客成果、複数stakeholder、社内外の協働、目標ownershipを求める。反証・留保: 公開された日本在籍者の転職先分布ではなく、職務構造からの仮説。面接で確認: alumniの次role category、社内異動例、次の職位で必要な定量成果は。`,
  };
}

export const jobs20260823Daily: Job[] = [
  {
    id: "vonage-junior-customer-success-manager-api-8528707002",
    companySlug: "vonage",
    title: "Junior Customer Success Manager (API)",
    segment: "Customer Success / CPaaS",
    location: "日本",
    workStyle: "Work from Home - Japan、Full-time",
    language: "日本語・英語ともfluent必須",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "Vonage Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/vonage/jobs/8528707002" },
    descriptionSummary: "日本のAPI顧客へsuccess plan、利用拡大、renewal・upsell、training、issue解決を提供し、Product・Engineeringへfeedbackを戻す。",
    genbaTake: "APIの利用量だけでなく、messaging・voice・video・認証が顧客のconversion、到達率、support効率、継続率へどう効くかを定量化するpost-sales role。",
    compensationReality: "competitive salaryとの記載はあるが、日本のbase、bonus、equity、評価KPI、renewal・expansion creditは公式求人で確認できない。",
    desiredProfile: "Customer Success、Account Management等の顧客対応経験を歓迎し、API、cloud communications、software integration、利用data分析、日本語・英語を求める。",
    careerInsights: careerInsights("CPaaS・Customer Success", "adoption、renewal、expansion、issue解決", "communications API、technical CS、usage analytics、renewal・expansionの実績"),
  },
  {
    id: "coderabbit-account-executive-japan-0e889e16",
    companySlug: "coderabbit",
    title: "Account Executive, Japan",
    segment: "Mid-Enterprise / Founding Sales",
    location: "日本",
    workStyle: "Remote、Full-time",
    language: "公式求人で明記なし",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "CodeRabbit Careers (Ashby)", url: "https://jobs.ashbyhq.com/coderabbit/0e889e16-a2a3-47f3-bce9-ce87ef795762" },
    descriptionSummary: "Japan Salesのfounding memberとしてnamed mid-enterpriseのoutbound、PoV、demo、business value assessment、six-figure deal、land-and-expandをfull-cycleで担う。",
    genbaTake: "AI code review単体ではなく、AI agentで増えるPRの品質、review待ち、security、開発者の判断時間を一つのchange management投資へ束ねる技術営業。",
    compensationReality: "competitive salary、equity、benefitsとの記載はあるが、日本のbase、OTE、quota、accelerator、ramp保証は公式求人で確認できない。",
    desiredProfile: "technical SaaSのfull-cycle quota経験8年以上、outbound、six-figure deal、CTO・VP Engineering・DevOps向け営業、technical curiosityを求める。",
    careerInsights: careerInsights("AI developer tools・Enterprise Sales", "outbound、PoV、six-figure close、land-and-expand", "AI code review、developer productivity、technical value selling、日本GTM構築の実績"),
  },
];
