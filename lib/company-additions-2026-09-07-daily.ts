import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-07";

export const companies20260907Daily: Company[] = [
  {
    slug: "o9-solutions",
    name: "o9 Solutions",
    category: "AI統合事業・サプライチェーン計画",
    broadCategory: "AI・データ基盤",
    hq: "ダラス（米国）",
    japanPresence: "o9ソリューションズ・ジャパン株式会社・東京（2018年設立）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "需要、供給、財務、営業の計画を企業知識グラフとAIでつなぐ。東京でAccount Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://o9solutions.wd5.myworkdayjobs.com/o9SolutionsExternal",
    tags: ["Supply Chain", "Enterprise Planning", "AI", "Sales", "Tokyo"],
  },
  {
    slug: "kinaxis",
    name: "Kinaxis",
    category: "サプライチェーン計画・オーケストレーション",
    broadCategory: "コマース・業界特化",
    hq: "オタワ（カナダ）",
    japanPresence: "キナクシス・ジャパン株式会社・東京。gBizINFOの事業所被保険者数89人",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "計画、調達、生産、物流をリアルタイムに同期するMaestroを提供。東京でAccount Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://join.kinaxis.com/search-jobs",
    tags: ["Supply Chain", "Planning", "Manufacturing", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "ashby",
    name: "Ashby",
    category: "採用管理・採用分析・採用業務自動化",
    broadCategory: "HR・人材育成",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本を勤務地に含むAPACリモート求人を1件確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ATS、採用CRM、日程調整、分析を一つのデータ基盤でつなぐ。日本から応募可能と明記されたAPAC Product Supportを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/ashby",
    entryStatus: "pre-entry-signal",
    tags: ["HRTech", "Recruiting", "Analytics", "Remote", "Pre-entry signal"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "給与、変動給、株式、目標、担当範囲は公式求人で確認できる範囲だけを事実として扱い、未確認条件は面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客・利用者の課題確認から複数部門を動かす実行まで担いたい人に向く。`,
      thingsToKnow: "担当範囲、評価指標、支援体制、報酬構成、日本組織の職種別人数は十分に公開されていない。面接で確認したい。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `${draft.segment}では、顧客成果と再利用できる実行の型が担当拡張の土台になる。`,
      priorCompanies: `${draft.segment}に近い顧客課題、複数の意思決定者、目標責任を持った経験が隣接する。`,
      nextCompanies: `${draft.segment}の成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。`,
    },
  };
}

export const jobs20260907Daily: Job[] = [
  makeJob({
    id: "o9-account-executive-jr102757", companySlug: "o9-solutions", title: "Account Executive", segment: "Enterprise Sales / Integrated Planning", location: "東京都", workStyle: "東京勤務。ハイブリッド勤務（週2日オフィスを会社が案内）", language: "日本語・英語の詳細要件は公式求人で要確認",
    source: { label: "o9 Solutions Careers (Workday)", url: "https://o9solutions.wd5.myworkdayjobs.com/en-US/o9SolutionsExternal/job/Tokyo-Japan/Account-Executive_JR102757" },
    descriptionSummary: "日本の大企業へ統合事業・サプライチェーン計画基盤を提案し、新規開拓から経営層合意、受注までを担う。",
    genbaTake: "計画ソフトの機能説明ではなく、在庫、欠品、計画時間、運転資本を部門横断の経営成果へ変える営業。",
    desiredProfile: "公式求人は企業向けソフトウェアの複雑商談、経営層との関係構築、全販売工程の責任を重視する。",
  }),
  makeJob({
    id: "kinaxis-account-executive-33342", companySlug: "kinaxis", title: "Account Executive", segment: "Enterprise Sales / Supply Chain", location: "東京都港区赤坂", workStyle: "東京オフィス勤務。柔軟な勤務制度あり", language: "日本語ネイティブまたは流暢。英語は業務レベルを歓迎",
    source: { label: "Kinaxis Careers", url: "https://join.kinaxis.com/jobs/33342?lang=en-us" },
    descriptionSummary: "日本の大企業で既存契約の更新・拡大、新規売上、Professional Services提案、予測管理を担う。",
    genbaTake: "供給計画の導入で終わらず、複数部門の意思決定を同期し、更新・拡大の根拠を在庫、納期、計画速度で作る営業。",
    desiredProfile: "公式求人は10年以上の企業向け重要システム営業、SCM・ERP・BI、大規模顧客、経営層提案を重視する。",
  }),
  makeJob({
    id: "ashby-product-support-specialist-apac-033ce772", companySlug: "ashby", title: "Product Support Specialist - APAC", segment: "Customer Support / Recruiting Operations", location: "日本・シンガポール・フィリピン・韓国", workStyle: "リモート。週末1日勤務と平日振替休を含む", language: "英語での顧客対応。日本語要件は公式求人で明記なし",
    source: { label: "Ashby Careers", url: "https://jobs.ashbyhq.com/ashby/033ce772-ed08-4a59-bb52-4ff0eaac9bcd" },
    descriptionSummary: "APAC顧客の問い合わせを調べ、複雑な採用業務と製品設定を解決し、知見を製品・文書へ還元する。",
    genbaTake: "問い合わせ処理だけでなく、採用担当者の業務設計とデータを理解し、再発防止と製品改善までつなぐ支援職。",
    desiredProfile: "公式求人は技術的な推論、文章での精密な説明、複雑な製品の学習、顧客への共感を重視する。",
  }),
];
