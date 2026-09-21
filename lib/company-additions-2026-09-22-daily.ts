import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-22";

export const companies20260922Daily: Company[] = [
  {
    slug: "datarobot",
    name: "DataRobot",
    category: "エンタープライズAI・エージェント・MLOps・AIガバナンス",
    broadCategory: "AI・データ基盤",
    hq: "ボストン（米国）",
    japanPresence: "DataRobot Japan株式会社・東京。日本法人、東京SaaSリージョン、現行の日本勤務求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "予測AI、生成AI、AIエージェントを構築・運用・監視・統制する企業向け基盤。日本でProfessional ServicesのAI Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.datarobot.com/jp/careers/open-positions/",
    tags: ["Agentic AI", "MLOps", "AI Governance", "Professional Services", "Remote Japan"],
  },
  {
    slug: "illumio",
    name: "Illumio",
    category: "侵害封じ込め・マイクロセグメンテーション・ゼロトラスト",
    broadCategory: "セキュリティ・IT運用",
    hq: "サニーベール（米国）",
    japanPresence: "Illumio Japan合同会社・東京。日本法人、国内顧客事例、東京の現行営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ハイブリッド・マルチクラウド環境の通信を可視化・分離し、侵害後の横展開を封じ込める。東京でEnterprise Sales Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.illumio.com/company/careers",
    tags: ["Breach Containment", "Microsegmentation", "Zero Trust", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "qumulo",
    name: "Qumulo",
    category: "非構造化データ・ファイル・ハイブリッドクラウド基盤",
    broadCategory: "AI・データ基盤",
    hq: "シアトル（米国）",
    japanPresence: "Qumulo Japan株式会社・東京。日本法人、日本語サイト、国内顧客事例、東京勤務の現行求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "データセンター、エッジ、クラウドにまたがる大規模な非構造化データを一つの名前空間で管理する。日本でSenior Customer Success Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/qumulo",
    tags: ["Unstructured Data", "Hybrid Cloud", "AI Infrastructure", "Customer Success", "Remote Japan"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の技術課題を測定可能な事業成果へ変えたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を受注、導入、利用、更新、顧客KPIで定量化できれば、隣接する企業向け技術企業の同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職、地域責任者、管理職へ広げやすい。",
    },
  };
}

export const jobs20260922Daily: Job[] = [
  makeJob({
    id: "datarobot-ai-engineer-professional-services-japan-102663",
    companySlug: "datarobot",
    title: "AI Engineer - Professional Services",
    segment: "Professional Services / AI Engineering",
    location: "Remote Japan",
    workStyle: "日本国内フルリモート。顧客訪問を伴う出張25〜50%",
    language: "求人本文で日本語水準の明記なし。顧客対応と英語環境の実務水準は選考で確認",
    source: { label: "DataRobot Careers", url: "https://www.datarobot.com/jp/careers/open-positions/job/102663/" },
    descriptionSummary: "戦略顧客と業務目標・要件を整理し、予測モデル、生成AI、RAG、AIエージェントを設計・実装・本番展開する。",
    genbaTake: "製品説明やモデル作成だけでなく、顧客業務へAIを実装し、セキュリティ、監視、ガバナンス、経営層への説明まで含めて価値を出す役割。",
    compensationReality: "給与、賞与、株式、評価KPIは公式求人で未記載。",
    desiredProfile: "公式求人はAIアプリ開発3〜5年、Python、LLM・RAG・エージェント、API、Docker・Kubernetes、クラウド、顧客対応経験を重視する。",
  }),
  makeJob({
    id: "illumio-enterprise-sales-executive-japan-a4f93cba",
    companySlug: "illumio",
    title: "Enterprise Sales Executive",
    segment: "Enterprise Sales / Cybersecurity",
    location: "Tokyo, Japan",
    workStyle: "ハイブリッド。東京勤務",
    language: "日本語・英語。詳細水準は公式求人を確認",
    source: { label: "Illumio Careers (Ashby)", url: "https://jobs.ashbyhq.com/illumio/a4f93cba-ae3e-4330-9d45-e34d1c8837fe" },
    descriptionSummary: "日本の大手企業で新規・既存商談を開拓し、侵害封じ込めとマイクロセグメンテーションの提案から受注までを担う。",
    genbaTake: "境界防御の追加ではなく、侵害後の横展開をどの資産・通信から止めるかを経営、セキュリティ、インフラ部門へ翻訳する営業。",
    compensationReality: "基本給は年1,152万〜1,440万円。株式とコミッション対象。OTE、目標額、達成率は未確認。",
    desiredProfile: "公式求人は企業向けセキュリティ営業、複雑な商談、経営層との関係、正確な予測、パートナー・技術部門との連携を重視する。",
  }),
  makeJob({
    id: "qumulo-senior-customer-success-manager-apac-dfaec4ee",
    companySlug: "qumulo",
    title: "Senior Customer Success Manager (APAC)",
    segment: "Customer Success / Data Infrastructure",
    location: "Tokyo, Japan (remote)",
    workStyle: "東京圏を優先する日本国内リモート。顧客・パートナー訪問あり",
    language: "日本語・英語とも流暢さを求める",
    source: { label: "Qumulo Careers (Ashby)", url: "https://jobs.ashbyhq.com/qumulo/dfaec4ee-6675-4a3c-b658-22871e48074b" },
    descriptionSummary: "日本の大手顧客とOEM・販売パートナーを担当し、導入、利用、更新、拡大まで顧客ライフサイクル全体を担う。",
    genbaTake: "ストレージの保守窓口ではなく、データ基盤の設計・運用と顧客成果を結び、パートナーを含む更新・拡大の再現性を作る役割。",
    compensationReality: "給与、変動給、株式、更新・拡大の評価配分は公式求人で未記載。",
    desiredProfile: "公式求人はCS・AM・Partner Success 5年以上、データ・ストレージ・クラウドの技術理解、最大50社の担当経験、日本語・英語を重視する。",
  }),
];
