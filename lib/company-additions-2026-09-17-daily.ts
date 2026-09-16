import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-17";

export const companies20260917Daily: Company[] = [
  {
    slug: "jfrog",
    name: "JFrog",
    category: "ソフトウェアサプライチェーン・DevSecOps",
    broadCategory: "セキュリティ・IT運用",
    hq: "サニーベール（米国）・ネタニヤ（イスラエル）",
    japanPresence: "JFrog Japan株式会社・東京。日本向け公式サイトと東京拠点を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "開発成果物、依存関係、脆弱性、配布を一つの信頼できる記録へまとめる。東京でBusiness Development Representativeを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://join.jfrog.com/",
    tags: ["DevSecOps", "Software Supply Chain", "Artifact Management", "Business Development", "Tokyo"],
  },
  {
    slug: "axis-communications",
    name: "Axis Communications",
    category: "ネットワーク映像・入退室・エッジ分析",
    broadCategory: "コマース・業界特化",
    hq: "ルンド（スウェーデン）",
    japanPresence: "Axis Communications K.K.・東京。公式グループ法人一覧と東京求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ネットワークカメラ、入退室、インターコム、音響とエッジ分析を提供する。東京でSales Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://axis.wd3.myworkdayjobs.com/External_Career_Site",
    tags: ["Network Video", "Physical Security", "Edge Analytics", "Sales Engineering", "Hybrid", "Tokyo"],
  },
  {
    slug: "rogo",
    name: "Rogo",
    category: "金融機関向け生成AI・業務エージェント",
    broadCategory: "AI・データ基盤",
    hq: "ニューヨーク（米国）",
    japanPresence: "日本法人・国内拠点・日本求人は未確認。SingaporeのAPAC初期営業求人がJapanを対象例に含む",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "投資銀行、PE、資産運用会社向けに調査、財務モデル、資料作成を支援するAIを提供。SingaporeでAPAC初期営業を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/rogo",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Financial AI", "Investment Banking", "Enterprise AI", "APAC", "Singapore"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "公式求人に日本向けの給与、変動給、株式、目標、達成率の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を事業成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業の同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260917Daily: Job[] = [
  makeJob({
    id: "jfrog-business-development-representative-tokyo-6870647",
    companySlug: "jfrog",
    title: "Business Development Representative",
    segment: "Business Development / DevSecOps",
    location: "東京",
    workStyle: "公式求人にRemoteタグ。出社日数と雇用条件の詳細は未確認",
    language: "日本語は母語水準、英語は読み書き・会話とも高い業務水準",
    source: { label: "JFrog Careers", url: "https://join.jfrog.com/job/6870647-business-development-representative-tokyo-japan/" },
    descriptionSummary: "新規見込み客の最初の接点となり、調査、電話、メール、SNS、問い合わせ対応を通じて商談候補を作り、営業・マーケティングと市場開拓を進める。",
    genbaTake: "単なる架電件数ではなく、開発・セキュリティ部門の複雑な課題を見つけ、技術製品の価値へ翻訳して再現可能な案件創出経路を作る役割。",
    desiredProfile: "公式求人はB2Bまたは開発者向けSaaSのBDR経験2年以上、深い技術製品への理解、日本語母語水準、英語、Salesforce等を重視する。",
  }),
  makeJob({
    id: "axis-communications-sales-engineer-japan-r-121601",
    companySlug: "axis-communications",
    title: "Sales Engineer",
    segment: "Sales Engineering / Network Video",
    location: "東京",
    workStyle: "Hybrid。週3日出社・週2日在宅勤務が可能。国内外出張と顧客先での長期活動の可能性あり",
    language: "日本語は母語水準、英語はTOEIC 600相当を公式求人に記載",
    source: { label: "Axis Careers (Workday)", url: "https://axis.wd3.myworkdayjobs.com/en-US/External_Career_Site/job/Sales-Engineer_R-121601" },
    descriptionSummary: "販売パートナーと顧客の要件を整理し、デモ、試験導入、技術提案、製品教育、競合分析、国内規制対応を通じて案件の技術面を担う。",
    genbaTake: "カメラ単体の説明ではなく、ネットワーク、クラウド、エッジ分析、入退室を顧客の安全・運用効率へ結び、販売パートナーが自走できる技術力まで育てる役割。",
    desiredProfile: "公式求人はITチャネルでの技術営業、TCP/IP・クラウド・ハードウェアとソフトウェア、監視カメラ・セキュリティ市場、提案・教育経験を重視する。",
  }),
];
