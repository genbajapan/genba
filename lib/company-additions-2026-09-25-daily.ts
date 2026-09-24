import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-25";

export const companies20260925Daily: Company[] = [
  {
    slug: "vectra-ai",
    name: "Vectra AI",
    category: "AI駆動のネットワーク脅威検知・応答基盤",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンノゼ（米国）",
    japanPresence: "Vectra AI Japan株式会社・東京。日本の現行技術営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ネットワーク、クラウド、ID、SaaSを横断し、行動AIで攻撃の進行を検知・優先順位付けする。東京でSecurity Engineer, Pre-Salesを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.vectra.ai/about/careers",
    tags: ["Cybersecurity", "NDR", "AI", "Pre-Sales", "Tokyo", "Japan"],
  },
  {
    slug: "circleci",
    name: "CircleCI",
    category: "CI/CD・ソフトウェア配送基盤",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "CircleCI合同会社・東京。東京勤務で日本を除くAPACを担当する現行営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "コードのビルド、テスト、安全性確認、配備を自動化するCI/CD基盤。東京でStrategic Client Account Executive, APACを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://circleci.com/careers/",
    tags: ["CI/CD", "Developer Tools", "DevOps", "Enterprise Sales", "APAC", "Tokyo"],
  },
  {
    slug: "catapult-sports",
    name: "Catapult Sports",
    category: "スポーツパフォーマンス・映像分析基盤",
    broadCategory: "AI・データ基盤",
    hq: "メルボルン（オーストラリア）",
    japanPresence: "Catapult Sports合同会社・東京。日本の現行Customer Success求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ウェアラブル計測、映像分析、選手管理、スカウティングを通じて競技団体の判断を支援。東京圏でCustomer Success Specialistを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.catapult.com/careers",
    tags: ["Sports Technology", "Performance Analytics", "Video Analysis", "Customer Success", "Tokyo", "Japan"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、技術評価を顧客の事業成果と投資判断へ変えたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、実証、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる設計・実行の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、クラウド、開発基盤、セキュリティ、技術提案で複数の意思決定者を動かした経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、企業営業、技術営業、顧客技術責任者へ広げやすい。",
    },
  };
}

export const jobs20260925Daily: Job[] = [
  makeJob({
    id: "vectra-ai-security-engineer-pre-sales-tokyo-7724894",
    companySlug: "vectra-ai",
    title: "Security Engineer, Pre-Sales",
    segment: "Pre-Sales / Cybersecurity",
    location: "Tokyo, Japan",
    workStyle: "東京勤務。顧客・販売提携先訪問と地域内出張を含む",
    language: "事業レベルの英語を求める。日本語水準の明記は未確認",
    source: { label: "Vectra AI Careers (Greenhouse)", url: "https://www.vectra.ai/about/jobs?gh_jid=7724894" },
    descriptionSummary: "営業と組み、技術調査、設計、実演、実証、RFP/RFI、導入設計の確認を通じて、ネットワーク・クラウド・ID横断の検知価値を証明する。",
    genbaTake: "機能実演だけでなく、EDRやSIEMに残る死角、調査工数、アラートの優先順位を実際の環境で検証し、導入判断へ変える役割。",
    compensationReality: "給与、変動給、株式、評価KPI、出社日数は公式求人で未記載。",
    desiredProfile: "公式求人は技術営業、大手顧客、ネットワーク、SOC・インシデント対応、クラウドセキュリティ、事業レベルの英語を重視する。",
  }),
  makeJob({
    id: "circleci-strategic-client-account-executive-apac-tokyo-8790033002",
    companySlug: "circleci",
    title: "Strategic Client Account Executive, APAC",
    segment: "Strategic Sales / Developer Tools",
    location: "Tokyo",
    workStyle: "東京勤務。日本を除くAPACの大手顧客を担当",
    language: "事業レベルの英語を必須とし、日本語は必須としない",
    source: { label: "CircleCI Careers (Greenhouse)", url: "https://www.circleci.com/careers/jobs/8790033002/?gh_jid=8790033002" },
    descriptionSummary: "東京を拠点に日本を除くAPACの大手顧客で新規開拓と既存拡大を担い、技術部門・経営層の課題をCI/CDの事業価値へ変える。",
    genbaTake: "日本市場の営業ではない。東京から複数国の開発組織を担当し、ビルド時間、失敗率、開発者待ち時間、安全性確認を大口契約の投資理由へ束ねる役割。",
    compensationReality: "日本の給与、OTE、変動給、株式、担当社数、達成率は公式求人で未記載。",
    desiredProfile: "公式求人はSaaS営業5年以上、大手企業の技術商材、複雑な意思決定者、新規開拓、事業レベルの英語を重視する。",
  }),
  makeJob({
    id: "catapult-sports-customer-success-specialist-japan-8055068",
    companySlug: "catapult-sports",
    title: "Customer Success Specialist",
    segment: "Customer Success / Sports Technology",
    location: "Tokyo, Japan",
    workStyle: "日本勤務。Greater Tokyoを優先し、国内・APAC出張を含む",
    language: "日本語と英語での顧客・地域チーム連携を求める。水準の個別表記は未確認",
    source: { label: "Catapult Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/catapultsports/jobs/8055068" },
    descriptionSummary: "日本のプロチーム、競技団体、大学等を担当し、計測・映像・スカウティング製品の導入、教育、定着、更新、拡張を進める。",
    genbaTake: "一般的なSaaS定着支援だけでなく、監督、コーチ、スポーツ科学者、分析担当がデータを日々の選手起用、負荷、復帰、戦術判断へ使う状態を作る役割。",
    compensationReality: "給与、変動給、担当チーム数、更新目標、出社日数は公式求人で未記載。",
    desiredProfile: "公式求人は顧客成功、アカウント管理、スポーツ科学・映像分析への理解、複数の顧客関係者との連携、国内・APAC出張への対応を重視する。",
  }),
];
