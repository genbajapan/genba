import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-23";

export const companies20260923Daily: Company[] = [
  {
    slug: "veeam",
    name: "Veeam",
    category: "データレジリエンス・バックアップ・復旧・AIデータ保護",
    broadCategory: "セキュリティ・IT運用",
    hq: "シアトル（米国）",
    japanPresence: "ヴィーム・ソフトウェア株式会社。東京本社、名古屋・大阪オフィスと東京の現行求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "クラウド、SaaS、仮想・物理環境のデータをバックアップし、サイバー攻撃や障害後の復旧を支える。東京でProfessional ServicesのSolution Architectを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://careers.veeam.com/en/search-jobs",
    tags: ["Data Resilience", "Backup", "Recovery", "AI Data", "Solution Architecture", "Tokyo"],
  },
  {
    slug: "d-fend-solutions",
    name: "D-Fend Solutions",
    category: "カウンタードローン・RFサイバー制御・空域セキュリティ",
    broadCategory: "セキュリティ・IT運用",
    hq: "ラアナナ（イスラエル）",
    japanPresence: "D-Fend Solutions Japan・東京。日本責任者、国内拠点、東京常駐の現行技術営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "不正ドローンを妨害波や破壊に頼らず検知し、RFサイバー技術で安全な着陸へ制御する。東京でPresales Field Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.lever.co/d-fendsolutions",
    tags: ["Counter-UAS", "RF Cyber", "Airspace Security", "Presales", "Field Engineering", "Tokyo"],
  },
  {
    slug: "aiven",
    name: "Aiven",
    category: "オープンソースデータ・ストリーミング・データベース基盤",
    broadCategory: "AI・データ基盤",
    hq: "ヘルシンキ（フィンランド）",
    japanPresence: "日本法人、国内拠点、日本専任求人は未確認。APACはSydney・Auckland拠点、東京クラウドリージョン対応を公式確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "PostgreSQL、Kafka、OpenSearch、ClickHouse、Valkeyなどを主要クラウド上で運用するマネージドなオープンソースデータ基盤。",
    lastChecked: checkedAt,
    careersUrl: "https://aiven.io/careers",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Open Source", "Data Platform", "Kafka", "PostgreSQL", "APAC"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、技術要件を顧客の事業継続・安全性・運用品質へ変えたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を提案、実証、導入、復旧・安全性の指標で定量化できれば、隣接する企業向け技術企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる設計・実行の型が次の役割の土台になる。",
      priorCompanies: "インフラ、セキュリティ、技術提案、現場導入で複数の意思決定者を動かした経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、技術営業、専門サービス、顧客技術責任者へ広げやすい。",
    },
  };
}

export const jobs20260923Daily: Job[] = [
  makeJob({
    id: "veeam-solution-architect-professional-services-tokyo-99420332992",
    companySlug: "veeam",
    title: "Solution Architect (Professional Services)",
    segment: "Solution Architecture / Professional Services",
    location: "Tokyo, Japan",
    workStyle: "東京オフィス勤務。顧客環境での設計・導入・検証を含む",
    language: "日本語・英語。詳細水準は公式求人を確認",
    source: { label: "Veeam Careers", url: "https://careers.veeam.com/en/job/tokyo/solution-architect-professional-services/22681/99420332992" },
    descriptionSummary: "顧客環境にVeeamのデータ保護・復旧基盤を設計、導入、検証し、長期運用へ引き継ぐ専門サービスを担う。",
    genbaTake: "バックアップ設定の代行ではなく、復旧目標、サイバー攻撃時の隔離、クラウド・既存基盤、運用責任を一つの復旧設計へ落とす役割。",
    compensationReality: "給与、賞与、株式、評価KPI、出張頻度は公式求人で未記載。",
    desiredProfile: "公式求人はデータ保護・仮想化・クラウドの設計、顧客向け導入、プロジェクト管理、営業・技術支援との連携を重視する。",
  }),
  makeJob({
    id: "d-fend-solutions-presales-field-engineer-tokyo-7bcd1f61",
    companySlug: "d-fend-solutions",
    title: "Presales Field Engineer",
    segment: "Presales / Field Engineering / Counter-UAS",
    location: "Tokyo, Japan",
    workStyle: "東京常駐・オンサイト。屋外実証、現地調査、導入後支援、時間外・週末対応の可能性あり",
    language: "日本語・英語とも優れたコミュニケーション力を求める",
    source: { label: "D-Fend Solutions Careers (Lever)", url: "https://jobs.lever.co/d-fendsolutions/7bcd1f61-af74-41f4-aedb-e9ad52b91b0d" },
    descriptionSummary: "顧客要件の確認、製品説明、屋外デモ、実証、RFP・RFI、現地調査、導入後の技術支援までを担う。",
    genbaTake: "製品説明だけでなく、空域・無線環境・安全手順を現場で検証し、営業から導入・保守まで技術責任をつなぐ役割。",
    compensationReality: "給与、変動給、株式、評価KPI、時間外・週末対応の頻度は公式求人で未記載。",
    desiredProfile: "公式求人はプリセールス・ポストセールス、戦術・RF機器、屋外デモ、現地調査、日本語・英語、入社3カ月以内の二等無人航空機操縦士取得を重視する。",
  }),
];
