import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-15";

export const companies20261015Daily: Company[] = [
  {
    slug: "tenable",
    name: "Tenable",
    category: "エクスポージャー管理・脆弱性対策",
    broadCategory: "セキュリティ・IT運用",
    hq: "メリーランド州コロンビア（米国）",
    japanPresence: "Tenable Network Security Japanを2013年に設立。東京・丸の内オフィス、日本企業の導入事例、東京の公式求人1件を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "IT、クラウド、ID、OTを横断して攻撃面と重大リスクを可視化・優先順位付け。東京でCommercial Territory Account Managerを募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/tenableinc",
    tags: ["Exposure Management", "Vulnerability Management", "Cloud Security", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "zimperium",
    name: "Zimperium",
    category: "モバイル端末・アプリセキュリティ",
    broadCategory: "セキュリティ・IT運用",
    hq: "テキサス州ダラス（米国）",
    japanPresence: "日本を主要市場として公式に掲載し、SoftBankとの国内展開実績、東京勤務のSales Director公式求人1件を確認。日本法人名と国内在籍人数は未確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "モバイル端末とアプリを、端末上のAI検知、アプリ保護、脆弱性診断で守る。東京で日本市場の販売と組織を担う責任者を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.lever.co/zimperium",
    tags: ["Mobile Security", "Application Security", "AI", "Sales Leadership", "Tokyo"],
  },
  {
    slug: "fireworks-ai",
    name: "Fireworks AI",
    category: "生成AI推論・学習基盤",
    broadCategory: "AI・データ基盤",
    hq: "カリフォルニア州サンマテオ（米国）",
    japanPresence: "日本法人・国内拠点・日本在住求人・国内顧客名は未確認。シンガポールでAI Field Engineerなど公式求人3件を確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "企業固有のデータと業務に合わせたAIモデルの学習、評価、高速推論を提供。シンガポールで技術導入と基盤開発の体制を拡大。",
    lastChecked: checkedAt,
    careersUrl: "https://fireworks.ai/careers",
    tags: ["日本未進出", "AI Inference", "Model Training", "Field Engineering", "Singapore"],
    entryStatus: "not-entered",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客のリスクと技術を経営判断、導入、継続利用へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客・組織成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "企業向けセキュリティ営業、技術提案、事業開発、複数関係者を動かす顧客支援の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、上級企業営業、地域責任者、セキュリティ事業開発、顧客組織へ広げやすい。",
    },
  };
}

export const jobs20261015Daily: Job[] = [
  makeJob({
    id: "tenable-commercial-territory-account-manager-japan-5379199008",
    companySlug: "tenable",
    title: "Commercial Territory Account Manager",
    segment: "Japan Commercial Territory Sales",
    location: "東京都",
    workStyle: "東京オフィス勤務。固定出社日数は公式求人で明記なし",
    language: "公式求人で明記なし",
    source: { label: "Tenable Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/tenableinc/jobs/5379199008" },
    descriptionSummary: "担当顧客の新規・既存商談、地域販売計画、見込み顧客の開拓、実演、交渉、案件優先順位、予測、受注後の長期価値を担う。",
    genbaTake: "脆弱性の件数を売るのではなく、IT、クラウド、ID、OTに散らばる攻撃面から、事業影響が大きいリスクへ投資を集中させる企業営業職。",
    desiredProfile: "営業またはアカウント管理3年以上を含む実務5年以上、新規開拓、目標達成、販売パートナー型の営業、案件管理、部門横断の協業を重視する。",
    compensationReality: "日本の給与、変動給、目標、達成率、株式、担当社数は公式求人で確認できない。",
  }),
  makeJob({
    id: "zimperium-sales-director-tokyo-5a7bd1a4",
    companySlug: "zimperium",
    title: "Sales Director (Tokyo, Japan)",
    segment: "Japan Mobile Security Sales Leadership",
    location: "Tokyo, Japan",
    workStyle: "ハイブリッド。東京への出社と国内・地域出張を伴う",
    language: "日本語・英語ともに流暢な水準",
    source: { label: "Zimperium Careers (Lever)", url: "https://jobs.lever.co/zimperium/5a7bd1a4-928d-474f-8a86-fd0a5718c584" },
    descriptionSummary: "日本でモバイルセキュリティの案件創出、提案・実演、複雑な契約、販売予測、販売組織の運営・育成、提携者・経営層との関係を担う。",
    genbaTake: "端末管理の追加機能ではなく、従業員端末と顧客向けアプリを同じモバイル攻撃面として捉え、日本の市場開拓と販売組織を作る責任者。",
    desiredProfile: "サイバーセキュリティ等の企業向け販売・事業開発、販売管理、予測、複雑な契約、経営層・提携者との関係、組織育成を重視する。",
    compensationReality: "日本の給与、変動給、目標、達成率、株式、チーム人数は公式求人で確認できない。",
  }),
];
