import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-12";

export const companies20260912Daily: Company[] = [
  {
    slug: "cloudera",
    name: "Cloudera",
    category: "ハイブリッドデータ・AI基盤",
    broadCategory: "AI・データ基盤",
    hq: "サンタクララ（米国）",
    japanPresence: "Cloudera株式会社・東京。gBizINFOの事業所被保険者数21人",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "オンプレミスと複数クラウドのデータ、分析、AIを一つの統制下で運用する基盤。日本向けAI専門職3件を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://cloudera.wd5.myworkdayjobs.com/External_Career",
    tags: ["Data Platform", "Hybrid Cloud", "AI", "Forward Deployed Engineering", "Tokyo", "Remote"],
  },
  {
    slug: "boomi",
    name: "Boomi",
    category: "統合・自動化・API管理",
    broadCategory: "業務自動化・コラボレーション",
    hq: "コンショホッケン（米国）",
    japanPresence: "ブーミー株式会社・東京。gBizINFOの事業所被保険者数19人",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "アプリ、データ、API、AIエージェントを接続し、企業の業務統合を支える。日本でEnterprise Account Executive等2件を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://boomi.com/company/careers/",
    tags: ["iPaaS", "Integration", "API Management", "Automation", "Enterprise Sales", "Japan"],
  },
  {
    slug: "cockroach-labs",
    name: "Cockroach Labs",
    category: "分散SQLデータベース",
    broadCategory: "AI・データ基盤",
    hq: "ニューヨーク（米国）",
    japanPresence: "SingaporeでAPAC向け営業・技術営業を公式募集。日本法人・国内拠点・日本求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "障害や地域分散を前提に、強い整合性と拡張性を両立する分散SQLデータベース。SingaporeのAPAC採用から日本進出条件を観測。",
    lastChecked: checkedAt,
    careersUrl: "https://www.cockroachlabs.com/careers/",
    entryStatus: "not-entered",
    tags: ["日本未進出", "Distributed SQL", "Database", "Multi-Region", "Singapore", "APAC"],
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
      fit: `${draft.segment}で、顧客課題を技術と事業成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当社数、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260912Daily: Job[] = [
  makeJob({
    id: "cloudera-forward-deployed-ai-engineer-261080", companySlug: "cloudera", title: "Forward Deployed AI Engineer", segment: "Forward Deployed Engineering / AI", location: "日本（リモート）", workStyle: "Japan-Remoteを公式求人に明記", language: "日本・顧客担当。日本語・英語の水準は公式求人で未確認",
    source: { label: "Cloudera Careers (Workday)", url: "https://cloudera.wd5.myworkdayjobs.com/External_Career/job/Japan-Remote/Forward-Deployed-AI-Engineer_261080" },
    descriptionSummary: "戦略顧客へ入り、生成AI・エージェント型AIの試作から本番化、再利用できる実装パターン化までを担う。",
    genbaTake: "デモ開発ではなく、顧客データ、既存システム、権限、運用制約の中でAIを本番成果へ変える実装責任者。",
    desiredProfile: "公式求人はシステム構築5年以上、生成AI・エージェント型AI2〜3年、Python、API、クラウド、顧客との共同開発を重視する。",
  }),
  makeJob({
    id: "cloudera-forward-deployed-ai-engineer-japan-korea-261171", companySlug: "cloudera", title: "Forward Deployed AI Engineer, Japan / Korea (Senior/Principal Level)", segment: "Forward Deployed Engineering / AI", location: "東京・ソウル", workStyle: "Remoteを公式求人に明記。日本または韓国を担当", language: "日本・韓国市場担当。各言語と英語の水準は公式求人で未確認",
    source: { label: "Cloudera Careers (Workday)", url: "https://cloudera.wd5.myworkdayjobs.com/External_Career/job/JapanTokyo/Forward-Deployed-AI-Engineer--Japan---Korea_261171" },
    descriptionSummary: "日本・韓国の戦略顧客に入り、AIアプリの設計、実装、本番化と、再利用可能な業界別パターンへの還元を担う。",
    genbaTake: "個別受託に閉じず、顧客固有のAI実装を製品と地域の再現可能な導入モデルへ戻す上級技術職。",
    desiredProfile: "公式求人はシステム構築7年以上、AI・機械学習2〜4年、生成AIの本番導入、顧客経営層との協働を重視する。",
  }),
  makeJob({
    id: "cloudera-applied-ai-specialist-261163", companySlug: "cloudera", title: "Applied AI Specialist", segment: "Technical Pre-Sales / Applied AI", location: "東京・ソウル", workStyle: "Hybridを公式求人に明記", language: "日本・韓国市場担当。各言語と英語の水準は公式求人で未確認",
    source: { label: "Cloudera Careers (Workday)", url: "https://cloudera.wd5.myworkdayjobs.com/External_Career/job/JapanTokyo/Applied-AI-Specialist_261163-1" },
    descriptionSummary: "顧客のAI成熟度と利用場面を整理し、ワークショップ、技術検証、価値仮説を作って実装担当へ引き継ぐ。",
    genbaTake: "AI機能の説明ではなく、実現可能性、データ準備、事業価値を早期に見極め、投資判断と本番化の入口を作る技術営業。",
    desiredProfile: "公式求人はPython、API、クラウド、MLOps、生成AI、技術営業または顧客向けAI設計の経験を重視する。",
  }),
  makeJob({
    id: "boomi-account-executive-4-direct-sales-6147718004", companySlug: "boomi", title: "Account Executive 4, Direct Sales", segment: "Enterprise Direct Sales / Integration", location: "日本", workStyle: "日本勤務。出社日数は公式求人で未確認", language: "日本市場担当。日本語・英語の水準は公式求人で未確認",
    source: { label: "Boomi Careers (Greenhouse)", url: "https://boomi.com/boomi-jobs/?gh_jid=6147718004" },
    descriptionSummary: "大企業の新規顧客を開拓し、アプリ・データ・API・自動化の複雑な販売サイクルを、経営層と社内専門家を束ねて進める。",
    genbaTake: "接続機能ではなく、分断した業務、データ、AI導入の速度と統制を全社変革の投資理由へ変える企業営業。",
    desiredProfile: "公式求人は企業向け技術営業10年以上、複雑な新規開拓、経営層対応、案件創出と予測管理を重視する。",
  }),
  makeJob({
    id: "boomi-enterprise-account-executive-direct-sales-6008805004", companySlug: "boomi", title: "Enterprise Account Executive, Direct Sales", segment: "Enterprise Direct Sales / Integration", location: "日本", workStyle: "日本勤務。出社日数は公式求人で未確認", language: "日本市場担当。日本語・英語の水準は公式求人で未確認",
    source: { label: "Boomi Careers (Greenhouse)", url: "https://boomi.com/boomi-jobs/?gh_jid=6008805004" },
    descriptionSummary: "日本の大企業で新規案件を作り、技術・事業関係者と統合基盤の選定、提案、交渉、受注を担う。",
    genbaTake: "個別連携の置換ではなく、将来の統合コスト、AI利用、API統制まで含む標準基盤を売る大企業担当営業。",
    desiredProfile: "公式求人は大企業向けソフトウェア営業、複雑な意思決定者管理、新規案件創出、目標達成を重視する。",
  }),
];
