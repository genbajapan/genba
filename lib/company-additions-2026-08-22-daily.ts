import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-22";

export const companies20260822Daily: Company[] = [
  {
    slug: "cirrus-data",
    name: "Cirrus Data Solutions",
    category: "ブロックデータ移行・ストレージモダナイゼーション",
    broadCategory: "セキュリティ・IT運用",
    hq: "ニューヨーク州サイオセット（米国）",
    japanPresence: "東京担当Account Executiveを公式募集（日本法人・常設officeは未確認）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "稼働中のblock dataをon-premises、cloud、hybrid間で停止を抑えて移行するdata mobility software。東京担当のfull-cycle Account Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.smartrecruiters.com/CirrusDataSolutionsInc/743999891680073-account-executive-in-tokyo",
    tags: ["Data Mobility", "Storage Migration", "Cloud Migration", "Enterprise Sales", "Channel", "Tokyo"],
  },
  {
    slug: "synthesia",
    name: "Synthesia",
    category: "エンタープライズAI動画・学習コンテンツ基盤",
    broadCategory: "AI・データ基盤",
    hq: "ロンドン（英国）",
    japanPresence: "APAC営業teamと初のAPAC専任Field Marketing採用を確認（日本法人・Japan求人は未確認）",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "AI avatar、翻訳、version管理、analyticsで企業の研修・enablement動画を制作・運用する。日本を拡張市場に挙げる一方、国内法人・拠点・Japan求人は未確認。",
    lastChecked: checkedAt,
    careersUrl: "https://www.synthesia.io/careers",
    tags: ["日本未進出", "AI Video", "Learning and Development", "Localization", "Enterprise", "APAC"],
    entryStatus: "pre-entry-signal",
  },
];

const careerInsights: Job["careerInsights"] = {
  fit: "storage migrationを単体製品ではなく、data center刷新、cloud移行、停止risk、partner deliveryの事業caseとして売りたい人に向く。",
  thingsToKnow: "日本の雇用主体、base、OTE、equity、quota、担当社数、既存pipeline、SE・support体制、達成率は公式求人で確認できない。",
  marketValue: "block storage、cloud migration、BCDR、channel co-sell、Fortune 1000の複雑なfull-cycle salesを定量成果で示せる経験。",
  tenureAndPromotion: "【Genba仮説】日本territoryの成果に加え、partner経由の再現可能なpipelineとmigration caseを作れることが次のscopeにつながる。支持材料: 公式求人は新規開拓、戦略案件、channel協業、市場feedbackを同時に求める。反証・留保: 日本teamの昇進・離職dataは未公開。面接で確認: reporting line、評価KPI、直近24カ月の昇進・異動・退職を聞く。",
  priorCompanies: "【Genba仮説】storage、cloud infrastructure、data protection、disaster recovery、SI・VARで複雑なmigrationを売った人が隣接する。支持材料: 公式求人はstorage migration、BCDR/CDP、channel、Fortune 1000営業を要件にする。反証・留保: 日本採用者の公開分布は未確認。面接で確認: 活躍者の前職類型とramp支援を聞く。",
  nextCompanies: "【Genba仮説】migration volume、downtime回避、partner pipeline、受注額を成果化できれば、Cloud・Storage・Data ResilienceのStrategic Sales、Channel Leadership、Country Leadershipへ接続しやすい。支持材料: roleがterritory planからclose、partner戦略まで持つ。反証・留保: 実際の転職先分布ではない。面接で確認: alumniの進路と社内の次roleを聞く。",
};

export const jobs20260822Daily: Job[] = [
  {
    id: "cirrus-data-account-executive-tokyo-743999891680073",
    companySlug: "cirrus-data",
    title: "Account Executive in Tokyo",
    segment: "Enterprise / Data Center & Cloud Migration",
    location: "東京",
    workStyle: "Full-time（出社頻度・Remote可否は未記載）",
    language: "日本語・英語ともfluent",
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    source: { label: "Cirrus Data Solutions Careers (SmartRecruiters)", url: "https://jobs.smartrecruiters.com/CirrusDataSolutionsInc/743999891680073-account-executive-in-tokyo" },
    descriptionSummary: "日本territoryのprospecting、qualification、strategic deal、closeを担い、distributor・VARとco-sellしてblock storage migration案件を開拓する。",
    genbaTake: "software licenseだけでなく、停止時間、移行期間、professional services、cloud・storage vendor、cutover riskを一つのbusiness caseへ束ねるinfrastructure sale。",
    compensationReality: "日本向けのbase、OTE、equity、quota、accelerator、ramp保証は公式求人で確認できない。",
    desiredProfile: "5年以上のtechnology sales、IT infrastructureまたはSaaS、storage migration・data protection・BCDR/CDP、new logo、Fortune 1000、channel、日本語・英語を求める。",
    careerInsights,
  },
];
