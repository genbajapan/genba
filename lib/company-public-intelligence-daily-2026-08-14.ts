import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { entered, preEntry, type EnteredSeed, type PreSeed } from "@/lib/company-public-intelligence-additions-2026-08-13";

const checkedAt = "2026-08-14";

const enteredSeeds: EnteredSeed[] = [
  {
    slug: "dialpad", name: "Dialpad", founded: "2011", jobUrl: "https://job-boards.greenhouse.io/dialpad/jobs/8606879002", officialUrl: "https://www.dialpad.com/jp/", customersUrl: "https://www.dialpad.com/jp/customers/", financeUrl: "https://www.dialpad.com/about-us/", role: "Account Executive, Mid-MarketとしてJapanのnew logoをfull-cycleで開拓", category: "AI Communications Platform", buyer: "CIO・IT・Customer Support・Sales Leadership", problems: ["電話・meeting・contact centerの会話dataがsystemごとに分断する", "録音や文字起こしだけでは応対品質とseller performanceが変わらない", "複数vendorの運用・security・costを一つのbusiness outcomeで説明できない"], origin: "Google Voiceの系譜を持つcloud telephonyから、voice、meeting、contact center、sales coachingとAI conversation intelligenceを一つのplatformへ拡張。", external: "AI活用と個人情報保護への関心が高まるなか、企業は会話dataの利用目的、保存、access、human reviewを管理しつつ、顧客体験と生産性を改善する必要がある。", value: "応答時間、resolution、quality、coaching time、seller ramp、telephony運用を改善", objection: "Microsoft Teams、Zoom、既存PBX・contact centerで十分。", reframe: "通話単価ではなく、voiceからAI insight、workflow、coaching、support outcomeまでを同じdataで改善できるかで比較する。", headcount: "1,001〜5,000人規模（LinkedIn公開レンジ）", japanPresence: "Dialpad Japan / 東京・渋谷office / 国内3,000社", japanSince: "日本法人で継続展開", facts: ["世界30,000社超・国内3,000社", "70カ国超でAI communicationsを提供", "ランスタッド、USEN、HIS等の国内事例", "Account Executive, Mid-Market"], customers: ["ランスタッド株式会社", "USEN", "エイチ・アイ・エス"], solutions: ["Dialpad Connect", "Dialpad Support", "Dialpad Sell"], competitors: "Zoom、Microsoft Teams、RingCentral", fit: ["AI Communications", "UCaaS", "CCaaS", "Mid-Market", "Full-cycle", "Japan"]
  },
  {
    slug: "fivetran", name: "Fivetran", founded: "2012", jobUrl: "https://www.fivetran.com/careers/job?gh_jid=7818344003", officialUrl: "https://www.fivetran.com/", customersUrl: "https://www.fivetran.com/case-studies", financeUrl: "https://www.fivetran.com/company", role: "Partner Sales ManagerとしてJapanのcloud・SI・technology partnerとjoint GTMを作る", category: "Automated Data Movement Platform", buyer: "CIO・CDO・Data Engineering・Analytics・Cloud Platform", problems: ["SaaS・database・fileのdata sourceが増えpipelineの構築と保守が重い", "schema changeやconnector障害がanalyticsとAI projectの信頼性を下げる", "cloud移行後もdata movementのsecurity・governance・costを一貫管理できない"], origin: "data connectorの構築・保守を自動化する発想から、database replication、transformation、governance、hybrid deploymentを含むautomated data movement platformへ拡張。", external: "cloud analyticsとAI活用が拡大するほど、企業はmodel以前にfreshでtrustedなdataを安全かつ継続的に届ける必要があり、手作業pipelineの運用riskが事業課題になる。", value: "pipeline開発・保守時間、data latency、schema change failure、運用costを改善", objection: "cloud標準ETL、Informatica、Airbyte、内製pipelineで十分。", reframe: "connector数ではなく、schema change対応、reliability、security、運用人件費、time-to-dataを同じsourceで比較する。", headcount: "1,001〜5,000人規模（LinkedIn公開レンジ）", japanPresence: "日本語公式サイト / Remote Japan GTM", japanSince: "日本市場で継続展開", facts: ["700超のsource対応を訴求", "automated data movementへplatform拡張", "日本語公式情報とJapan customer proof", "Partner Sales Manager"], customers: ["Okta", "Autodesk", "Intercom"], solutions: ["Fivetran Managed Data Movement", "High-Volume Agent Connectors", "Fivetran Transformations"], competitors: "Informatica、Airbyte、Matillion", fit: ["Data Integration", "Cloud", "Partner", "Enterprise", "AI Data", "Japan"]
  },
];

const preSeed: PreSeed = {
  slug: "klaviyo", name: "Klaviyo", homepage: "https://www.klaviyo.com/", growthUrl: "https://investors.klaviyo.com/financials/quarterly-results/default.aspx", careers: "https://www.klaviyo.com/careers", customersUrl: "https://www.klaviyo.com/customers", trust: "https://www.klaviyo.com/trust", apac: "https://www.klaviyo.com/newsroom/sydney-office", linkedin: "https://www.linkedin.com/company/klaviyo/", category: "B2C CRM Platform", buyer: "CMO・Ecommerce・CRM・Lifecycle Marketing・Customer Service", problem: "commerce、customer profile、email、SMS、service dataが分断し、獲得後のrepeat purchaseとcustomer lifetime valueを一貫して改善できない", growth: "FY2025 revenueは12.34億ドル、前年比32%増。193,000社超の顧客と、ARR 5万ドル超の顧客3,912社を会社が開示。", headcount: "2,000人超（公式Careers）", apacText: "SydneyとSingaporeを含むAPAC拠点を持つが、公式拠点一覧・CareersでJapan・Tokyo officeとJapan求人は確認できない。", language: "一部AI機能の日本語対応情報はあるが、日本語UI、support、SMS、data residency、国内implementationの同等性は未確認。", customers: ["Good American", "Jones Road", "Graza"], solutions: ["Klaviyo Marketing", "Klaviyo Data Platform", "Klaviyo Service"], competitors: "Salesforce、Braze、HubSpot"
};

const enteredProfiles = Object.fromEntries(enteredSeeds.map((seed) => {
  const profile = entered(seed, checkedAt);
  const salesSnapshot = seed.slug === "dialpad"
    ? "Dialpadは、IT・Support・Salesが抱える会話dataの分断をAI Communications Platformで解く会社。東京でMid-Market AEを採用しており、cloud telephonyの置換から応対品質・seller performanceまで商談を広げる。国内3,000社の顧客基盤を起点に、複数部門の業務成果を設計する営業が面白い。"
    : "Fivetranは、Data Engineeringが抱えるpipeline構築・保守とdata freshnessの課題をAutomated Data Movementで解く会社。日本でPartner Sales Managerを採用しており、cloud・SI・technology partnerとのjoint GTMを担う。connector機能を、AI・analyticsのtime-to-dataと運用TCOという投資理由へ翻訳する営業が面白い。";
  return [seed.slug, { ...profile, salesSnapshot }];
}));

const klaviyoBase = preEntry(preSeed, checkedAt);
const baseMarket = klaviyoBase.marketStatus;
const klaviyo: CompanyPublicIntelligence = {
  ...klaviyoBase,
  salesSnapshot: "Klaviyoは、B2C企業のcustomer dataとmarketing・service executionの分断をB2C CRM Platformで解く会社。FY2025は12.34億ドルの売上と193,000社超の顧客を開示し、Sydney・SingaporeまでAPAC基盤を広げている。日本法人・Tokyo拠点・Japan求人は確認できず、国内customer proof、local delivery、日本語運用が進出成立の観測点になる。",
  marketStatus: {
    isPublic: true,
    ticker: "KVYO",
    exchange: "NYSE",
    listedSince: "2023年9月",
    stockLinkUrl: "https://investors.klaviyo.com/",
    growthSummary: baseMarket.growthSummary,
    milestones: baseMarket.milestones,
    sourceIds: baseMarket.sourceIds,
    genbaVerdict: baseMarket.genbaVerdict,
    growthDrivers: baseMarket.growthDrivers,
    japanGrowth: baseMarket.japanGrowth,
    riskHypotheses: baseMarket.riskHypotheses,
  },
};

export const daily20260814IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  ...enteredProfiles,
  klaviyo,
};
