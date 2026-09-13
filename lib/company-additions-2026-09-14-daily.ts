import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-14";

export const companies20260914Daily: Company[] = [
  {
    slug: "substack",
    name: "Substack",
    category: "独立系出版・購読者課金基盤",
    broadCategory: "CRM・顧客体験",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。東京から日本事業を立ち上げるHead of Partnershipsを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "作り手が記事、音声、動画と有料購読を直接運営できる出版基盤。東京Remoteで日本事業責任者を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/substack",
    tags: ["Creator Economy", "Subscriptions", "Publishing", "Partnerships", "Japan Launch", "Remote"],
  },
  {
    slug: "tradlinx",
    name: "Tradlinx",
    category: "国際物流可視化・AI到着予測",
    broadCategory: "AI・データ基盤",
    hq: "ソウル（韓国）",
    japanPresence: "日本法人・国内拠点は未確認。東京Hybridで日本進出の最初の事業開発責任者を公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "船会社ごとに分断した貨物情報を標準化し、追跡、AI到着予測、遅延対応を一元管理して供給網の意思決定を改善する。日本の最初の顧客獲得責任者を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/cygnify",
    tags: ["Supply Chain", "Ocean Visibility", "AI ETA", "Enterprise Sales", "Japan Launch", "Tokyo"],
  },
  {
    slug: "motherduck",
    name: "MotherDuck",
    category: "DuckDBベースのサーバーレス分析基盤",
    broadCategory: "AI・データ基盤",
    hq: "シアトル（米国）",
    japanPresence: "日本法人・国内拠点・日本求人は未確認。公式求人は米国の顧客技術職を中心に確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "端末上のDuckDBとクラウドを組み合わせ、小中規模データの分析を簡素化する。日本進出の成立条件を先回りして観測。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/MotherDuck",
    entryStatus: "not-entered",
    tags: ["日本未進出", "DuckDB", "Serverless Analytics", "Data Warehouse", "Developer Tools", "Usage Based"],
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
      fit: `${draft.segment}で、未整備な市場や顧客課題を構造化し、社内外の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260914Daily: Job[] = [
  makeJob({
    id: "substack-head-partnerships-japan-1c76f297", companySlug: "substack", title: "Head of Partnerships, Japan", segment: "Japan Partnerships / Market Launch", location: "東京", workStyle: "Remote。東京を拠点に勤務", language: "日本語と英語で作り手・本社双方を動かせる水準",
    source: { label: "Substack Careers (Ashby)", url: "https://jobs.ashbyhq.com/substack/1c76f297-ed2b-4349-a29d-34f1edf1f3be" },
    descriptionSummary: "日本事業の認知拡大、作り手の発掘と参加支援、提携、イベント、国内ニーズの製品・支援方針への反映を担う。",
    genbaTake: "広告枠を売る役割ではなく、日本で誰の発信が有料購読へ転換し、作り手同士の推薦網が継続成長するかをゼロから作る市場責任者。",
    desiredProfile: "公式求人は日本の文化・メディア・作り手への理解、事業成長、提携、創造的人材との関係構築、東京での自律的な実行を重視する。",
  }),
  makeJob({
    id: "tradlinx-japan-business-development-manager-0154cd14", companySlug: "tradlinx", title: "Japan Business Development Manager", segment: "Japan Market Entry / Enterprise Sales", location: "東京", workStyle: "Hybrid。東京勤務", language: "日本語ネイティブ水準。英語または韓国語で本社と業務連携",
    source: { label: "Cygnify / Tradlinx Careers (Ashby)", url: "https://jobs.ashbyhq.com/cygnify/0154cd14-2240-4a4a-8a78-bb4dec562da7" },
    descriptionSummary: "日本進出戦略、荷主・フォワーダー・船会社への新規営業、最初の基準顧客獲得、提携先開拓、現地組織づくりを担う。",
    genbaTake: "販売計画だけでなく最初の契約を自ら取り、物流データの現地化と販売網を同時に作る、実質的な初代日本事業責任者。",
    desiredProfile: "公式求人は企業向け営業・事業開発7年以上、物流・SCMまたはB2B SaaS、日本拠点の0→1、長い商談の受注経験を求める。",
  }),
];
