import { expansionIntelligenceBySlug } from "@/lib/company-public-intelligence-expansion";
import { waveTwoIntelligenceBySlug } from "@/lib/company-public-intelligence-wave-two";
import { preEntryIntelligenceBySlug } from "@/lib/company-public-intelligence-pre-entry";
import { waveThreeIntelligenceBySlug } from "@/lib/company-public-intelligence-wave-three";
import { preEntryWaveTwoIntelligenceBySlug } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { waveFourIntelligenceBySlug } from "@/lib/company-public-intelligence-wave-four";
import { preEntryWaveThreeIntelligenceBySlug } from "@/lib/company-public-intelligence-pre-entry-wave-three";
import { cursorIntelligenceBySlug } from "@/lib/company-public-intelligence-cursor";
import { daily20260813IntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-13";
import { additions20260813IntelligenceBySlug } from "@/lib/company-public-intelligence-additions-2026-08-13";
import { additions20260813WaveTwoIntelligenceBySlug } from "@/lib/company-public-intelligence-additions-2026-08-13-wave-two";
import { additions20260813WaveThreeIntelligenceBySlug } from "@/lib/company-public-intelligence-additions-2026-08-13-wave-three";
import { daily20260814IntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-14";
import { daily20260814WaveTwoIntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-14-wave-two";
import { daily20260815IntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-15";
import { daily20260816IntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-16";
import { daily20260817IntelligenceBySlug } from "@/lib/company-public-intelligence-daily-2026-08-17";
import { additions20260817BatchTwentyThreeIntelligenceBySlug } from "@/lib/company-public-intelligence-additions-2026-08-17-batch-23";
import { addYenConversionsDeep } from "@/lib/currency-display";
import { applyCompanyPageRolloutBatchOne } from "@/lib/company-page-rollout-batch-01";
import { applyCompanyPageRolloutBatchTwo } from "@/lib/company-page-rollout-batch-02";
import { applyCompanyPageRolloutBatchThree } from "@/lib/company-page-rollout-batch-03";
import { applyCompanyPageRolloutBatchFour } from "@/lib/company-page-rollout-batch-04";
import { applyCompanyPageRolloutBatchFive } from "@/lib/company-page-rollout-batch-05";
import { applyCompanyPageRolloutBatchSix } from "@/lib/company-page-rollout-batch-06";
import { applyCompanyPageRolloutBatchSeven } from "@/lib/company-page-rollout-batch-07";
import { applyCompanyPageRolloutBatchEight } from "@/lib/company-page-rollout-batch-08";
import { applyCompanyPageRolloutBatchNine } from "@/lib/company-page-rollout-batch-09";
import { applyCompanyPageRolloutBatchTen } from "@/lib/company-page-rollout-batch-10";
import { applyCompanyPageRolloutBatchEleven } from "@/lib/company-page-rollout-batch-11";
import { applyCompanyPageRolloutBatchTwelve } from "@/lib/company-page-rollout-batch-12";
import { applyCompanyPageRolloutBatchThirteen } from "@/lib/company-page-rollout-batch-13";
import { applyCompanyPageRolloutBatchFourteen } from "@/lib/company-page-rollout-batch-14";
import { applyCompanyPageRolloutBatchFifteen } from "@/lib/company-page-rollout-batch-15";
import { applyCompanyPageRolloutBatchSixteen } from "@/lib/company-page-rollout-batch-16";
import { applyCompanyPageRolloutBatchSeventeen } from "@/lib/company-page-rollout-batch-17";
import { applyCompanyPageRolloutBatchEighteen } from "@/lib/company-page-rollout-batch-18";
import { applyCompanyPageRolloutBatchNineteen } from "@/lib/company-page-rollout-batch-19";
import { applyCompanyPageRolloutBatchTwenty } from "@/lib/company-page-rollout-batch-20";
import { applyCompanyPageRolloutBatchTwentyOne } from "@/lib/company-page-rollout-batch-21";
import { applyCompanyPageRolloutBatchTwentyTwo } from "@/lib/company-page-rollout-batch-22";
import { applyCompanyPageRolloutBatchTwentyThree } from "@/lib/company-page-rollout-batch-23";
import { applyCompanyPageRolloutBatchTwentyFour } from "@/lib/company-page-rollout-batch-24";

export type ResearchSourceKind = "企業公式" | "法定開示" | "公的機関" | "外部集計" | "コミュニティ";

export type ResearchSource = {
  id: string;
  label: string;
  url: string;
  kind: ResearchSourceKind;
  scope: string;
  checkedAt: string;
};

export type PublicFact = {
  label: string;
  value: string;
  secondaryValue?: string;
  detail: string;
  sourceIds: string[];
};

export type GenbaHypothesis = {
  topic: string;
  title: string;
  conclusion: string;
  confidence: "高" | "中" | "探索中";
  evidence: string[];
  counterSignals: string[];
  interviewQuestions: string[];
  sourceIds: string[];
};

export type AeInterviewHypothesis = {
  issue: string;
  hypothesis: string;
  question: string;
  goodSignal: string;
  cautionSignal: string;
  sourceIds: string[];
};

export type CustomerProof = {
  company: string;
  products: string;
  outcome: string;
  implication: string;
  sourceId: string;
};

export type ExternalSignal = {
  label: string;
  value: string;
  detail: string;
  caveat: string;
  sourceId: string;
};

export type CompanyStat = {
  value: string;
  detail: string;
  sourceId?: string;
};

export type SalesAppealPoint = {
  title: string;
  detail: string;
  sourceIds: string[];
};

export type InterviewPrepQuestion = {
  question: string;
  why: string;
  sourceIds: string[];
};

export type CultureNotes = {
  organizationReadTitle: string;
  hypothesis: { title: string; body: string };
  careerValue: { title: string; body: string; confidence: "高" | "中" | "探索中" };
};

export type CultureDeepDive = {
  researchedAt: string;
  headline: string;
  workStyle: {
    classification: "フルリモート" | "ハイブリッド" | "出社中心" | "未確認";
    displayLabel: string;
    remoteOnly: string;
    officeDays: string;
    flexibility: string;
    summary: string;
    sourceIds: string[];
  };
  principles: Array<{
    label: string;
    title: string;
    companySays: string;
    readerMeaning: string;
    sourceIds: string[];
  }>;
  tokyoExperience: Array<{
    label: string;
    value: string;
    detail: string;
    sourceId: string;
  }>;
  salesCulture: Array<{
    title: string;
    evidence: string;
    readerMeaning: string;
    sourceIds: string[];
  }>;
  communitySnapshot: {
    label: string;
    rating: string;
    recommend: string;
    metrics: Array<{ label: string; value: string }>;
    positiveRead: string;
    cautionRead: string;
    caveat: string;
    sourceId: string;
  };
  fit: {
    goodFor: string[];
    cautionFor: string[];
    interviewQuestions: string[];
  };
  careerValue: {
    title: string;
    body: string;
  };
  sourceIds: string[];
};

export type GrowthMilestone = {
  year: string;
  label: string;
  detail: string;
  sourceId: string;
};

export type GenbaVerdict = { headline: string; body: string };

export type GrowthDriver = { title: string; body: string; sourceId: string };

export type JapanFiscalDataPoint = {
  period: string;
  fiscalYear: string;
  revenue: string;
  revenueGrowth: string;
  netIncome: string;
  netIncomeGrowth: string;
};

export type JapanQualitativeSignal = { label: string; detail: string; sourceId: string };

export type JapanEntryAssessment = {
  verdict: string;
  factSignals: Array<{ title: string; body: string; sourceIds: string[] }>;
  hurdles: Array<{ title: string; body: string; sourceIds: string[] }>;
  readinessConditions: Array<{ title: string; body: string }>;
  watchSignals: string[];
};

export type JapanGrowthAnalysis = {
  headline: string;
  narrative: string;
  // 日本法人が株式会社で決算公告(官報)が確認できた企業のみfiscalDataを設定する
  fiscalData?: JapanFiscalDataPoint[];
  // 合同会社等、財務非公開の企業はqualitativeSignalsで代替する
  qualitativeSignals?: JapanQualitativeSignal[];
  // 日本未進出企業は、事実・障壁・現実化条件・観測シグナルを分けて掲載する
  entryAssessment?: JapanEntryAssessment;
  sourceIds: string[];
};

export type RiskHypothesis = {
  title: string;
  body: string;
  confidence: "高" | "中" | "探索中";
  evidence: string[];
  counterSignal: string;
  sourceIds: string[];
};

export type CapitalMarketGrowthRead = {
  asOf: string;
  metrics: Array<{
    label: string;
    value: string;
    change: string;
    interpretation: string;
    sourceId: string;
  }>;
  growthDrivers: Array<{
    title: string;
    evidence: string;
    japanMeaning: string;
    sourceIds: string[];
  }>;
  risks: Array<{
    title: string;
    disclosedRisk: string;
    companyResponse: string;
    genbaRead: string;
    sourceIds: string[];
  }>;
  japanCommitment: {
    verdict: string;
    summary: string;
    signals: Array<{
      year: string;
      title: string;
      detail: string;
      sourceIds: string[];
    }>;
    unknowns: string[];
  };
  scenarios: Array<{
    scenario: "基本" | "上振れ" | "下振れ";
    title: string;
    body: string;
  }>;
  sourceIds: string[];
};

// 深掘り分析(調査が完了した企業のみpopulate。未設定の企業は従来通りの簡易表示になる)
type MarketStatusDeepDive = {
  capitalMarketRead?: CapitalMarketGrowthRead;
  genbaVerdict?: GenbaVerdict;
  growthDrivers?: GrowthDriver[];
  japanGrowth?: JapanGrowthAnalysis;
  riskHypotheses?: RiskHypothesis[];
};

export type MarketStatus =
  | ({
      isPublic: true;
      ticker: string;
      exchange: string;
      listedSince: string;
      stockLinkUrl: string;
      growthSummary: string;
      milestones: GrowthMilestone[];
      sourceIds: string[];
    } & MarketStatusDeepDive)
  | ({
      isPublic: false;
      growthSummary: string;
      ipoOutlookSummary: string;
      milestones: GrowthMilestone[];
      sourceIds: string[];
    } & MarketStatusDeepDive);

export type SellingPlaybookLens = { title: string; body: string };
export type SellingPlaybookStage = { label: string; body: string };

export type SellingPlaybook = {
  frameIntro: string;
  issueLenses: SellingPlaybookLens[];
  narrative: SellingPlaybookStage[];
  openingHook: string;
  valueHypothesis: string;
  commonObjection: { objection: string; reframe: string };
};

export type CompanySolution = {
  name: string;
  valueProp: string;
  url: string;
  competitors: string;
  differentiation: string;
  retention: string;
  // 公式情報で製品単位の根拠を確認できた場合は、自動生成よりこちらを優先する。
  feature?: string;
  advantage?: string;
  benefit?: string;
  evidence?: string;
  competitor?: string;
};

export type SalesMarketOutlook = {
  title: string;
  verdict: string;
  paragraphs: string[];
  cases: Array<{
    company: string;
    need: string;
    sourceId: string;
  }>;
  sourceIds: string[];
};

export type SalesFabeOverview = {
  targetSegments: string[];
  summary: string;
  fabeRows: Array<{
    key: "feature" | "advantage" | "benefit" | "evidence" | "competitor";
    label: string;
    analysis: string;
    customerMeaning: string;
    sourceIds?: string[];
  }>;
};

export type CompanyPublicIntelligence = {
  researchedAt: string;
  salesSnapshot: string;
  // 会社概要の上段に表示する、公開確認済みの経営責任者。未設定時は従来レイアウトを使う。
  overviewLeadership?: Array<{
    label: string;
    people: Array<{
      name: string;
      url: string;
      linkLabel: string;
    }>;
  }>;
  // 企業ごとに人手で検証したFABEサマリー。未設定時は共通ロジックで生成する。
  salesSnapshotFabe?: string;
  // 結論の後に任意で展開する、成果指標・導入実績・市場背景。
  salesSnapshotFabeExpanded?: string;
  // 日本市場の需要と3〜5年の成長性を、根拠・国内事例とともに示す任意の深掘り枠。
  salesMarketOutlook?: SalesMarketOutlook;
  // 対象領域と、FABE・競合比較を開閉表示する任意のセールスサマリー。
  salesFabeOverview?: SalesFabeOverview;
  // 公式情報と外部レビューを分離して、働き方・価値観・向き不向きを示す任意のカルチャー深掘り。
  cultureDeepDive?: CultureDeepDive;
  marketStatus: MarketStatus;
  sellingPlaybook: SellingPlaybook;
  facts: PublicFact[];
  hypotheses: GenbaHypothesis[];
  aeInterviewHypotheses?: {
    intro: string;
    items: AeInterviewHypothesis[];
  };
  cultureNotes: CultureNotes;
  customerProof: CustomerProof[];
  externalSignals: ExternalSignal[];
  roleLens: {
    salesMotion: string;
    compensation: string;
    quota: string;
    collaboration: string;
  };
  leadership: {
    name: string;
    role: string;
    read: string;
    sourceId: string;
  };
  companyStats: {
    globalHeadcount: CompanyStat;
    japanHeadcount: CompanyStat;
    japanOffice: CompanyStat;
    japanSince: CompanyStat;
  };
  salesAppeal: {
    intro: string;
    points: SalesAppealPoint[];
  };
  interviewPrep: {
    intro: string;
    questions: InterviewPrepQuestion[];
  };
  solutions: CompanySolution[];
  customerStoriesUrl: string;
  fitTags: string[];
  comparisonMap: Array<{
    arena: string;
    companies: string[];
    why: string;
  }>;
  sources: ResearchSource[];
};

// Adyen v1への移行完了時に満たす共通データ型。移行期間中は元の型を読み込み、
// 自動バリデーターがこの必須フィールド群の充足を判定する。
export type StandardCompanyPublicIntelligence = CompanyPublicIntelligence & Required<Pick<
  CompanyPublicIntelligence,
  "overviewLeadership" | "salesMarketOutlook" | "salesFabeOverview" | "cultureDeepDive" | "aeInterviewHypotheses"
>>;

const salesforceSources: ResearchSource[] = [
  {
    id: "sf-fy26",
    label: "Salesforce FY26決算",
    url: "https://investor.salesforce.com/news/news-details/2026/Salesforce-Delivers-Record-Fourth-Quarter-Fiscal-2026-Results/default.aspx",
    kind: "企業公式",
    scope: "グローバル業績・Agentforce / Data 360",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-10k",
    label: "Salesforce FY26 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
    kind: "法定開示",
    scope: "グローバル従業員数・事業リスク",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-japan-company",
    label: "セールスフォース・ジャパン会社概要",
    url: "https://www.salesforce.com/jp/company/salesforce-japan/",
    kind: "企業公式",
    scope: "日本法人・代表者",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-japan-careers",
    label: "Salesforce Japan キャリアページ",
    url: "https://www.salesforce.com/jp/company/careers/locations/apac/japan/",
    kind: "企業公式",
    scope: "日本のカルチャー・育成・働き方",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-service-ae",
    label: "Account Executive, Service Cloud",
    url: "https://www.salesforce.com/jp/company/careers/jobs/jr322461/account-executive-service-cloud/",
    kind: "企業公式",
    scope: "Specialist AEの役割・協業構造",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-agentforce-ae",
    label: "Account Executive, Agentforce",
    url: "https://www.salesforce.com/jp/company/careers/jobs/jr277313/account-executive-agentforce/",
    kind: "企業公式",
    scope: "AI専門営業の要件",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-data360-manager",
    label: "Senior Manager, Data360",
    url: "https://www.salesforce.com/jp/company/careers/jobs/jr343895/senior-manager-data360/",
    kind: "企業公式",
    scope: "Data 360営業組織・消費型売上",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-cyberagent",
    label: "サイバーエージェント Agentforce導入事例",
    url: "https://www.salesforce.com/jp/news/press-releases/2026/04/13/cyberagentamebalife/",
    kind: "企業公式",
    scope: "日本のAgentforce導入成果",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-kddi",
    label: "KDDI Data Cloud導入事例",
    url: "https://www.salesforce.com/jp/customer-stories/kddi/",
    kind: "企業公式",
    scope: "日本のData Cloud / Marketing Cloud導入成果",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-shiseido",
    label: "資生堂 Salesforce導入事例",
    url: "https://www.salesforce.com/jp/customer-stories/shiseido/",
    kind: "企業公式",
    scope: "複数製品・グローバル展開",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-leadership",
    label: "Salesforce Japan 2026年役員人事",
    url: "https://www.salesforce.com/jp/news/stories/20260206/",
    kind: "企業公式",
    scope: "日本営業組織の責任領域",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-openmoney",
    label: "OpenMoney セールスフォース・ジャパン給与データ",
    url: "https://openmoney.jp/corporations/94/salaries",
    kind: "外部集計",
    scope: "日本・職種混在の自己申告給与",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-repvue",
    label: "RepVue Salesforce sales organization data",
    url: "https://www.repvue.com/companies/Salesforce",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-mynavi-outline",
    label: "マイナビ セールスフォース・ジャパン会社概要",
    url: "https://job.mynavi.jp/27/pc/search/corp109155/outline.html",
    kind: "外部集計",
    scope: "日本法人の会社概要(採用媒体掲載)",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-org-structure",
    label: "Challengers Academy「Salesforceの営業組織を理解する」",
    url: "https://challengers.academy/articles/6187/",
    kind: "コミュニティ",
    scope: "Core / Specialist AEの組織構造の解説記事",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-interview-prep",
    label: "corp-research.jp「セールスフォースの中途採用面接では何を聞かれるのか」",
    url: "https://corp-research.jp/articles/4894",
    kind: "コミュニティ",
    scope: "中途面接の実際の質問例・対策記事",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-careers-blog-bdr",
    label: "Salesforce Blog「最前線に立つ営業社員の声」",
    url: "https://www.salesforce.com/jp/blog/jp-careers3-bdr/",
    kind: "企業公式",
    scope: "インサイドセールス(BDR)出身社員のキャリア紹介",
    checkedAt: "2026-08-05",
  },
  {
    id: "sf-q1fy27-earnings",
    label: "Salesforce Delivers Record First Quarter Fiscal 2027 Results",
    url: "https://www.salesforce.com/news/press-releases/2026/05/27/fy27-q1-earnings/",
    kind: "企業公式",
    scope: "FY27 Q1決算・通期ガイダンス",
    checkedAt: "2026-08-06",
  },
  {
    id: "sf-founding",
    label: "Wikipedia「Salesforce」",
    url: "https://en.wikipedia.org/wiki/Salesforce",
    kind: "外部集計",
    scope: "1999年3月8日の創業経緯・共同創業者",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-ipo",
    label: "Salesforce.com Form S-1(IPO目論見書)",
    url: "https://www.sec.gov/Archives/edgar/data/1108524/000119312503096073/ds1.htm",
    kind: "法定開示",
    scope: "2004年IPO時の公開価格・調達額",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-acquisitions-history",
    label: "Salesforce Ben「The 10 Biggest Salesforce Acquisitions」",
    url: "https://www.salesforceben.com/the-10-biggest-salesforce-acquisitions/",
    kind: "外部集計",
    scope: "MuleSoft・Tableau・Slack買収の金額・時期",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-2023-layoffs",
    label: "Bloomberg「Salesforce Job Cuts, Big Deals at Stake as Elliott Pushes for Profit」",
    url: "https://www.bloomberg.com/news/articles/2023-01-24/salesforce-job-cuts-big-deals-at-stake-as-elliott-pushes-for-profit",
    kind: "外部集計",
    scope: "2023年人員削減とアクティビスト投資家の圧力",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-agentforce-arr-growth",
    label: "Futurum「Salesforce Q4 FY2026 Earnings Show Agentic AI Scaling」",
    url: "https://futurumgroup.com/insights/salesforce-q4-fy-2026-earnings-show-agentic-ai-scaling-guidance-steadies/",
    kind: "外部集計",
    scope: "Agentforce・Data 360 ARRの成長率",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-fy26-global-results",
    label: "Salesforce「Delivers Record Fourth Quarter Fiscal 2026 Results」",
    url: "https://www.salesforce.com/news/press-releases/2026/02/25/fy26-q4-earnings/",
    kind: "企業公式",
    scope: "FY26通期のグローバル売上($415億、+10%)・営業利益率",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-agentic-cannibalization-risk",
    label: "The Index Times「CRM: Salesforce's $41.5B Agentic Gamble」",
    url: "https://www.theindextimes.com/post/crm-salesforce-s-41-5b-agentic-gamble-record-revenue-30",
    kind: "外部集計",
    scope: "座席課金モデルの侵食リスクとAgentforce ARR・Agentic Work Unitの反証データ",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-japan-fy23-settlement",
    label: "官報決算データベース「株式会社セールスフォース・ジャパン 第23期決算公告」",
    url: "https://catr.jp/settlements/5446b/298905",
    kind: "法定開示",
    scope: "日本法人 第23期(2022年2月〜2023年1月期)決算公告",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-japan-fy24-settlement",
    label: "官報決算データベース「株式会社セールスフォース・ジャパン 第24期決算公告」",
    url: "https://catr.jp/companies/1b573/6657/settlements/fe68e/349750",
    kind: "法定開示",
    scope: "日本法人 第24期(2023年2月〜2024年1月期)決算公告",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-japan-fy25-settlement",
    label: "決算公告データ倉庫「セールスフォース・ジャパン 第25期決算公告」",
    url: "https://ryo-nakamura1.hatenablog.jp/entry/2025/05/26/120000_6",
    kind: "外部集計",
    scope: "日本法人 第25期(2024年2月〜2025年1月期)決算公告の集計記事",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-japan-fy26-settlement",
    label: "官報ブログ「セールスフォース・ジャパン 決算公告(第26期)」",
    url: "https://kanpo-kanpo.blog.jp/archives/46150195.html",
    kind: "外部集計",
    scope: "日本法人 第26期(2025年2月〜2026年1月期)決算公告の集計記事",
    checkedAt: "2026-08-07",
  },
  {
    id: "sf-japan-president-tenure",
    label: "週刊BCN+「セールスフォース・ジャパン 代表取締役会長兼社長 小出伸一」",
    url: "https://www.weeklybcn.com/journal/keyperson/detail/20220225_189269.html",
    kind: "外部集計",
    scope: "日本法人代表者の略歴・就任時期(2014年4月〜)",
    checkedAt: "2026-08-07",
  },
];

const salesforceIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Salesforceは、営業・マーケティング・顧客対応部門が分散した顧客情報と業務を統合し、CRMからAIエージェントによる実行までつなぐ顧客接点基盤。「顧客情報が部門ごとに分断されている」「営業活動を可視化・標準化できない」「AIを導入しても業務成果につながらない」といった課題を解決する。経営課題から現場の業務設計、データ統合、AI活用まで複数部門を巻き込み、単一製品から全社変革へ提案を広げられる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "CRM",
    exchange: "NYSE",
    listedSince: "2004年",
    stockLinkUrl: "https://stockanalysis.com/stocks/crm/",
    growthSummary: "1999年にMarc Benioff氏らが創業し、2004年6月にNYSEへ上場(公開価格$11、調達額約1.1億ドル)。上場後はMuleSoft(2018年、$65億)・Tableau(2019年、$153億)・Slack(2021年、$277億=同社史上最大の買収)と大型買収を重ねてCRMから統合プラットフォームへ拡張してきた。2023年には株価下落とアクティビスト投資家の圧力を受けて人員の約10%を削減し、成長一辺倒から収益性重視の経営へ転換。直近はAgentforce・Data 360を軸としたAIエージェント事業への大きな賭けに入っており、既存の人的ライセンス売上の伸び鈍化とAI事業の急拡大が同時に進む転換期にある、というのがGenbaの読み。",
    milestones: [
      { year: "1999", label: "創業", detail: "元Oracle幹部のMarc Benioff氏がParker Harris氏らと共同で設立。", sourceId: "sf-founding" },
      { year: "2004", label: "NYSE上場", detail: "公開価格1株$11、調達額約1.1億ドルでIPO。", sourceId: "sf-ipo" },
      { year: "2018-21", label: "MuleSoft・Tableau・Slackを相次いで買収", detail: "MuleSoft($65億)・Tableau($153億)・Slack($277億、自社最大の買収)で統合プラットフォーム化を推進。", sourceId: "sf-acquisitions-history" },
      { year: "2023", label: "人員約10%削減・収益性重視へ転換", detail: "株価下落とアクティビスト投資家(Elliott等)の圧力を受け、成長一辺倒から利益重視の経営へ舵を切った。", sourceId: "sf-2023-layoffs" },
      { year: "2025-26", label: "Agentforce・Data 360のARRが前年比200%超で拡大", detail: "AIエージェント事業のARRが急拡大し、既存事業の減速とのせめぎ合いが続く。", sourceId: "sf-agentforce-arr-growth" },
    ],
    sourceIds: ["sf-founding", "sf-ipo", "sf-acquisitions-history", "sf-2023-layoffs", "sf-agentforce-arr-growth", "sf-q1fy27-earnings"],
    genbaVerdict: {
      headline: "「座席の奪い合い」を恐れる市場と、「座席の外側」を狙うSalesforce。",
      body: "株価は2024年12月の史上最高値$364から現在は$187前後まで、年初来で30%超下落したまま戻っていない。AIエージェントが人間の座席を代替し、売上の95%を占める座席課金モデルを侵食するという懸念が晴れないためだ。ただしAgentforce・Data 360という「座席の外側」の従量課金収益はすでに合計で年間数十億ドル規模まで拡大しており、日本を含む既存15万社の顧客基盤にどこまで浸透させられるかが、今後1〜2年の成長シナリオを左右する、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "「侵食」ではなく「拡張」を狙う消費型収益への転換",
        body: "Agentforceは1アクション約$0.10(20 Flex Credits)の従量課金制で、座席契約とは別建ての収益。ARRは$8億(前年比+169%)、29,000件の商談が成立し、AIエージェントが実行した処理件数(Agentic Work Unit)は四半期で24億件、前四半期比+57%というペースで伸びている。座席収益が鈍化しても、その外側に新しい収益プールを作れるかどうかの実証が進んでいる段階。",
        sourceId: "sf-agentic-cannibalization-risk",
      },
      {
        title: "15万社の顧客基盤という、汎用AIには真似しにくい参入障壁",
        body: "顧客ごとに蓄積されたメタデータグラフや業務プロセスの文脈は、ChatGPT等の汎用AIエージェントが持たない資産。Data 360のARRは$29億(前年比+200%超)まで拡大しており、既存顧客への横展開(クロスセル)がAgentforce普及の主エンジンになっている。",
        sourceId: "sf-agentic-cannibalization-risk",
      },
      {
        title: "増収鈍化の中でも守られている利益率",
        body: "FY26通期の非GAAP営業利益率は34.1%で、2023年の人員削減以降、一貫して改善傾向にある。「AI投資を積み増しながら利益率は落とさない」という経営規律を維持できていることは、成長率だけを見る市場の懸念とは別の角度で評価できる材料。",
        sourceId: "sf-fy26-global-results",
      },
    ],
    japanGrowth: {
      headline: "日本の成長率は、9年ぶりに世界と歩調を合わせた。",
      narrative: "セールスフォース・ジャパンの決算公告を追うと、直近4期の売上高は197億円→235億円→279億円→307億円(第23〜26期)と着実に拡大している。ただし成長率で見ると、+24.29%→+18.89%→+19.0%→+9.79%と4期連続で鈍化しており、特に直近1年での減速幅(約19%→9.8%)は際立つ。この9.79%という成長率は、同じ会計年度(2025年2月〜2026年1月期に相当するFY26)のグローバル全体の成長率+10%とほぼ一致する水準で、これまで日本が世界平均を大きく上回るペースで伸びてきたことを踏まえると、9年ぶりに「世界並み」まで収斂したことになる。一方で純利益は69.5億円(前年比+39.85%)と、売上の伸び以上に加速しており、日本法人でもグローバルと同じ「増収率よりも利益率を優先する」経営への転換が起きている可能性が高い、というのがGenbaの読み。代表取締役の小出伸一氏は2014年4月の就任から12年目という、外資系企業の日本法人トップとしては異例の長期政権であり、方針の一貫性という点では強みになり得る。",
      fiscalData: [
        { period: "第23期", fiscalYear: "2022年2月期〜2023年1月期", revenue: "197.3億円", revenueGrowth: "+24.29%", netIncome: "36.8億円", netIncomeGrowth: "-7.72%" },
        { period: "第24期", fiscalYear: "2023年2月期〜2024年1月期", revenue: "234.6億円", revenueGrowth: "+18.89%", netIncome: "35.8億円", netIncomeGrowth: "-2.8%" },
        { period: "第25期", fiscalYear: "2024年2月期〜2025年1月期", revenue: "279.2億円", revenueGrowth: "+19.02%", netIncome: "49.7億円", netIncomeGrowth: "+38.9%" },
        { period: "第26期", fiscalYear: "2025年2月期〜2026年1月期", revenue: "306.6億円", revenueGrowth: "+9.79%", netIncome: "69.5億円", netIncomeGrowth: "+39.85%" },
      ],
      sourceIds: ["sf-japan-fy23-settlement", "sf-japan-fy24-settlement", "sf-japan-fy25-settlement", "sf-japan-fy26-settlement", "sf-japan-president-tenure", "sf-fy26-global-results"],
    },
    riskHypotheses: [
      {
        title: "「座席の共食い」という最大の懸念は、まだ解けていない",
        body: "サブスクリプション売上(全体の95%、約394億ドル)の大部分は座席課金に依存している。AIエージェントが人間の作業を代替するほど「座席を買う理由」が薄まるという懸念が市場に根強く残っており、株価は史上最高値から半値近くまで調整したまま戻っていない。",
        confidence: "中",
        evidence: [
          "サブスクリプション売上が全体の95%を占め、大部分が座席課金に依存",
          "2026年に入り株価は年初来で30%超下落し、2024年12月の史上最高値$364から現在$187前後まで調整",
        ],
        counterSignal: "Flex Creditsによる従量課金収益とAgentic Work Unitの急拡大は、座席の代替ではなく座席の外側に新しい収益プールを作っている可能性を示す。ただしこの従量課金収益が、座席収益の純減を上回るペースで拡大し続けられるかは、まだ実証段階にある。",
        sourceIds: ["sf-agentic-cannibalization-risk"],
      },
      {
        title: "日本の成長率鈍化は、大企業への浸透が一巡したサインかもしれない",
        body: "日本法人の売上成長率は4期連続で鈍化しており(+24.29%→+18.89%→+19.0%→+9.79%)、特に直近1年での減速幅が大きい。これまで大企業中心に深く刺さってきたエンタープライズ顧客基盤で、これ以上の新規開拓余地が薄くなっている可能性がある。",
        confidence: "中",
        evidence: [
          "4期連続で増収率が鈍化(24.29%→18.89%→19.0%→9.79%)",
          "同時期の純利益成長率はむしろ加速(+38.9%→+39.85%)しており、増収より効率を優先する経営への転換が疑われる",
        ],
        counterSignal: "売上規模が既に300億円を超える中での+9.79%成長は、絶対額では約27億円の純増に相当し、鈍化したとはいえ多くの外資SaaS日本法人と比べて依然高い水準。中堅・中小企業(ミッドマーケット)開拓が公式に成長戦略として位置付けられており、そこでの成果次第では再加速の余地も残る。",
        sourceIds: ["sf-japan-fy23-settlement", "sf-japan-fy24-settlement", "sf-japan-fy25-settlement", "sf-japan-fy26-settlement"],
      },
    ],
  },
  sellingPlaybook: {
    frameIntro: "SalesforceはCRMからAIエージェント基盤へと軸足を移しつつあり、売り方の起点は「顧客対応の記録」から「顧客対応の自動化」に変わっている。既存のSales/Service/Marketing Cloud資産をどう土台として使うかが提案の中心になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "FY26 Q4時点でAgentforce・Data 360のbookingsの60%超が既存顧客への拡張で、新規開拓よりクロスセル・アップセルが成長の中心。顧客データが複数システムに分散し、AIエージェントが動く一元化されたデータ基盤がないと自動化が始められない、という課題が拡張の起点になっている。" },
      { title: "製品の成り立ちから見る課題", body: "Data CloudはSales/Service/Marketing CloudやAgentforceに、ETLの遅延なくリアルタイムでデータを連携する目的で作られた。製品が生まれた理由そのものが「AIエージェントを動かす土台としてのデータ統合」という課題を指し示している。" },
      { title: "外部環境の要求から見る課題", body: "経営層・投資家からAI投資のROI説明責任を求める圧力が強まっており、Microsoft Copilot Studioとの2強構造の中で「模倣されにくい参入障壁」としてCRMデータの厚みを主張できる局面にある。" },
    ],
    narrative: [
      { label: "背景", body: "顧客企業はSales・Service・Marketingが別々のツール・別々のデータで動いており、AIエージェントに「何が起きているか」を判断させる材料が揃っていない。" },
      { label: "課題", body: "対応履歴・商談データ・ケース情報が部門ごとに孤立し、Agentforceのようなエージェントを入れても参照できる情報が薄く、期待した精度が出ない。" },
      { label: "解決策", body: "Data Cloudでデータを一元化した上でAgentforceを重ね、エージェントが厚みのある顧客文脈を参照して動くようにする。既存のSales/Service/Marketing Cloud資産をそのまま活かせる拡張として提案する。" },
      { label: "選定の理由", body: "Microsoft CopilotはM365中心の生産性ツールでCRMデータの厚みを持たず、ServiceNowはIT・HR・セキュリティ起点。Salesforceは「顧客対応履歴に基づいて動くエージェント」を売れる立場にある。" },
    ],
    openingHook: "Agentforceを検討する前に、貴社のSales・Service・Marketingのデータは、今どれくらい同じ場所に集まっていますか。",
    valueHypothesis: "Data Cloud導入企業でマーケティングROIが32%向上、サポート対応が28%高速化したという自社調査を根拠に、AIエージェントの精度はデータ統合の度合いに比例する、という価値仮説を立てて提案する。",
    commonObjection: { objection: "すでにCRMは入っているので今は要らない", reframe: "CRMは記録のためのツールだが、Agentforceは判断・実行のためのツール。既存のCRMデータをそのまま資産として使えるかどうかで、AI導入の速度が変わる、という視点で問い直す。" },
  },
  cultureNotes: {
    organizationReadTitle: "大きな会社では「社風」より、自分が入る小さな組織を見抜く。",
    hypothesis: {
      title: "学習資源は厚い。ただし体験はOUと上司次第。",
      body: "公式の研修・mentorship・昇進パスと、外部レビューのtraining評価は整合します。一方、高業績文化やmanager差も示唆されるため、配属チーム単位で検証が必要です。",
    },
    careerValue: {
      title: "“Enterprise Salesの学校”として見る。",
      body: "大手顧客、複数製品、C-level、Partner、専門組織を束ねた経験は次の転職でも説明しやすい。一方、昇進実績や在籍年数は同一OUの実数を面接で確かめたいです。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "FY26売上",
      value: "$41.5B(約6兆5,000億円)",
      detail: "前年比10%増(1ドル=157円換算、2026年8月時点の目安レート)。サブスクリプション＆サポート売上は$39.4B(約6兆1,900億円)。",
      sourceIds: ["sf-fy26"],
    },
    {
      label: "グローバル従業員",
      value: "83,334人",
      detail: "2026年1月31日時点の法定開示値。",
      sourceIds: ["sf-10k"],
    },
    {
      label: "Agentforce + Data 360 ARR",
      value: "$2.9B+(約4,550億円超)",
      detail: "前年比200%超。Informatica Cloud ARRを含む。",
      sourceIds: ["sf-fy26"],
    },
    {
      label: "Agentforce累計契約",
      value: "29,000件+",
      detail: "FY26 Q4時点。Agentforce単体ARRは$800M(約1,256億円)、前年比169%増。",
      sourceIds: ["sf-fy26"],
    },
    {
      label: "AI / Data新規受注の既存拡張",
      value: "60%超",
      detail: "FY26 Q4のAgentforce・Data 360 bookingsに占める既存顧客拡張。",
      sourceIds: ["sf-fy26"],
    },
    {
      label: "日本法人",
      value: "2000年設立",
      detail: "代表取締役会長兼社長は小出伸一氏。",
      sourceIds: ["sf-japan-company"],
    },
  ],
  hypotheses: [
    {
      topic: "PRODUCT / MARKET",
      title: "売る土台は強い。特にAI・Dataは“実験”から拡張フェーズへ入りつつある",
      conclusion: "CRMの既存基盤、FY26の成長、国内の具体的成果事例を合わせると、初回商談の信用獲得とクロスセル余地は外資SaaSの中でも強いとみます。",
      confidence: "高",
      evidence: [
        "FY26売上$41.5B(約6兆5,000億円)、RPO$72.4B(約11兆4,000億円)で事業基盤が大きい",
        "Agentforce ARRが前年比169%増、累計29,000件超",
        "KDDI・資生堂・サイバーエージェントなど日本企業の公開事例がある",
      ],
      counterSignals: [
        "AI・DataのARRは急成長だが、全社売上に対してはまだ新しい収益層",
        "製品群が広く、競合・価格・導入負荷は商材ごとに異なる",
      ],
      interviewQuestions: [
        "担当製品の日本売上成長率と、既存顧客へのpenetrationはどれくらいか",
        "直近4四半期の勝ち筋と失注理由を、製品別にどう見ているか",
      ],
      sourceIds: ["sf-fy26", "sf-cyberagent", "sf-kddi", "sf-shiseido"],
    },
    {
      topic: "SALES MOTION",
      title: "新規一本ではなく、既存基盤への拡張と社内co-sellが成果を左右しそう",
      conclusion: "AI・Data bookingsの60%超が既存顧客拡張で、Specialist AE求人もCore AE、Marketing、SDR、Channel、Partnerとの協業を明記しています。単独ハンターより、複数チームを動かせるAE向きです。",
      confidence: "高",
      evidence: [
        "Agentforce・Data 360 bookingsの60%超が既存顧客拡張",
        "Service Cloud Specialist AEは製品軸でCore AEと協業",
        "Enterprise顧客向け求人ではC-levelとのマネジメント経験を要求",
      ],
      counterSignals: [
        "SMB、Core AE、Specialist AEで新規・既存比率は大きく異なる可能性",
        "売上クレジットとアカウント主導権は公開求人だけでは分からない",
      ],
      interviewQuestions: [
        "自分が主担当になるアカウント数、white space、既存契約額を見せてもらえるか",
        "CoreとSpecialistのcredit split、案件主導権、更新責任はどう分かれるか",
      ],
      sourceIds: ["sf-fy26", "sf-service-ae", "sf-agentforce-ae", "sf-data360-manager"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "会社平均より“割り当てられるテリトリー”の質を重視すべき",
      conclusion: "強いブランドと導入実績は追い風ですが、外部営業レビューではOU・製品・上司・テリトリーによる体験差が繰り返し示されています。OTEより先にアカウントブックの再現性を見るべきです。",
      confidence: "中",
      evidence: [
        "RepVueの公開スナップショットではTop 20%の営業組織評価",
        "複数のレビューでPMF・トレーニングを評価する一方、territory差を指摘",
        "求人がEnterprise、SMB、製品Specialistまで細かく分かれている",
      ],
      counterSignals: [
        "RepVueはグローバル集計で、日本組織や現在のチームを直接示さない",
        "日本のfully-ramped AE達成率は公開されていない",
      ],
      interviewQuestions: [
        "fully-ramped AEのうち100%達成者は直近4四半期で何%か",
        "前任者の在籍期間、達成率、担当変更理由、今年のquota変更率はどうか",
      ],
      sourceIds: ["sf-repvue", "sf-service-ae", "sf-agentforce-ae"],
    },
    {
      topic: "COMPENSATION",
      title: "総報酬は国内上位水準の可能性。ただし平均年収と“達成可能なOTE”は別物",
      conclusion: "日本の外部給与集計は高水準を示しますが、職種・グレード混在です。提示OTEではなく、同じOU・同じsegmentの中央値と、未達時の実支給額で判断したいです。",
      confidence: "中",
      evidence: [
        "OpenMoneyは863件で全職種平均1,322万円、営業平均1,332万円を表示",
        "2026年投稿86件の全職種平均は1,510万円",
        "公式求人は日本のOTE、Pay Mix、達成率を開示していない",
      ],
      counterSignals: [
        "自己申告データで、AEだけのOTEやbase / variable比率ではない",
        "平均値には高グレード・長期在籍者・非営業職が混在する",
      ],
      interviewQuestions: [
        "同一ポジションのbase / variable、昨年度実支給中央値、accelerator条件は何か",
        "ramp期間の保証、quota relief、製品別SPIF、crediting ruleを書面で確認できるか",
      ],
      sourceIds: ["sf-openmoney", "sf-japan-careers"],
    },
    {
      topic: "CULTURE / CAREER",
      title: "“Sales school”としての価値は高そう。ただし大企業ゆえ上司とOU依存も大きい",
      conclusion: "公式には研修、mentorship、透明な昇進、hybridを掲げ、外部レビューも学習資源を評価しています。キャリア資産は作りやすい一方、意思決定や社内調整の重さは覚悟が必要です。",
      confidence: "中",
      evidence: [
        "日本キャリアページが個別研修、mentorship、昇進パスを明記",
        "営業戦略、Commercial、Enterprise、Data & Integrationなど責任領域が細分化",
        "外部レビューではtraining・brand・sales resourcesへの肯定シグナル",
      ],
      counterSignals: [
        "公式キャリア情報はEmployer Brandコンテンツである",
        "外部レビューでは高業績文化、社内政治、manager差への指摘もある",
      ],
      interviewQuestions: [
        "直近12カ月の同チーム内昇進者数と、昇進までの中央値はどれくらいか",
        "managerの在籍期間、span of control、1on1頻度、forecast cadenceはどうか",
      ],
      sourceIds: ["sf-japan-careers", "sf-leadership", "sf-repvue"],
    },
  ],
  customerProof: [
    {
      company: "サイバーエージェント",
      products: "Agentforce Sales / Agentforce",
      outcome: "営業事務工数を約50%削減、月間商談数を3倍へ",
      implication: "日本語の営業現場で、AIを単体デモではなく業務プロセスへ埋め込んだ事例。",
      sourceId: "sf-cyberagent",
    },
    {
      company: "KDDI",
      products: "Data Cloud / Marketing Cloud / Tableau",
      outcome: "同時実行施策を200から600へ。横断施策コスト50%削減",
      implication: "Data Cloudを大規模顧客の複数サービス横断基盤として売る根拠になる。",
      sourceId: "sf-kddi",
    },
    {
      company: "資生堂",
      products: "Data Cloud / MuleSoft / Marketing Cloud / Service Cloud",
      outcome: "グローバル顧客データ・API統合を複数製品で推進",
      implication: "単品販売より、複数Cloudを束ねた長期アカウント拡張の余地を示す。",
      sourceId: "sf-shiseido",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "営業平均 1,332万円",
      detail: "OpenMoneyのSalesforce Japan全体863件。全職種平均1,322万円、2026年投稿86件平均1,510万円。",
      caveat: "自己申告・職種混在。AEのOTE、Pay Mix、達成率ではありません。",
      sourceId: "sf-openmoney",
    },
    {
      label: "グローバル営業組織シグナル",
      value: "RepVue Top 20%",
      detail: "公開スナップショットは約9,900件のratingsと80% verifiedを表示。PMF・trainingとterritory差の両方が見られます。",
      caveat: "日本限定ではなく、匿名・自己申告を含むコミュニティ情報です。",
      sourceId: "sf-repvue",
    },
  ],
  roleLens: {
    salesMotion: "求人を横断すると、Data Cloud AEは「アダプション期でまだ勝ちパターンがない」新規提案型、Agentforce SMB AEはAI新製品を高速に商談化するボリューム型、Enterprise B2C AEはC-level向けの事業設計パートナー型と、同じSalesforceでもセグメントごとに営業スタイルが大きく異なる。",
    compensation: "OTEは基本給+インセンティブ+株式報酬(RSU)の3本立てが共通設計。転職エージェント集計ではSMB帯900万〜1,600万円、Enterprise帯1,200万〜1,800万円、Strategic帯は1,500万〜2,500万円超まで伸びる。ただしRSU支給はグレード7以上が目安という口コミがあり、配属セグメントの等級がその基準に届くかは面接で要確認。",
    quota: "Base:Incentive比率は6:4が共通で、達成率100%超でアクセラレーターが効く設計。Agentforce SMBのような新製品ポジションは商談数で数字を作る設計だが、Data Cloudのようなアダプション期の製品は導入事例の少なさが数字化の難所になりやすい。",
    collaboration: "Core AEとSpecialist AE(Data Cloud等)の案件連携、SDRとのパイプライン連携が前提。Enterprise B2C AEのようなC-level商談では、単独ではなくSEやプリセールスを動員する社内営業力も問われる。",
  },
  leadership: {
    name: "小出 伸一",
    role: "代表取締役会長 兼 社長",
    read: "2026年役員人事ではCommercial Growth、Data & Integration、Enterprise首都圏などの責任者を明示。日本営業組織は製品・顧客規模・地域で細分化された成熟組織とみられます。",
    sourceId: "sf-leadership",
  },
  companyStats: {
    globalHeadcount: {
      value: "83,334人",
      detail: "FY26 Form 10-K、2026年1月31日時点のグローバル従業員数。",
      sourceId: "sf-10k",
    },
    japanHeadcount: {
      value: "非公開",
      detail: "採用媒体では「当社規定により非公開」と明記。外部の推計値はあるが自己申告・非公式のため掲載しません。",
      sourceId: "sf-mynavi-outline",
    },
    japanOffice: {
      value: "東京都千代田区丸の内1-1-3",
      detail: "日本生命丸の内ガーデンタワー(Salesforce Tower)。2022年2月に本社移転。",
      sourceId: "sf-japan-company",
    },
    japanSince: {
      value: "2000年4月",
      detail: "日本法人設立。代表取締役会長兼社長は小出伸一氏。",
      sourceId: "sf-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "提案領域がIT予算のほぼ全域に広がっている",
        detail: "Core CRMに加えAgentforce、Data Cloud、Tableau、MuleSoft、Slackまで製品群が広く、顧客の課題起点で提案先を横断的に選べる。Enterprise担当ではC-levelを含む複数部門との折衝経験を積みやすい。",
        sourceIds: ["sf-fy26", "sf-org-structure"],
      },
      {
        title: "The Modelに沿った、型として説明しやすいキャリアルート",
        detail: "SDR/BDR(インサイドセールス)→Commercial AE→Enterprise AEという分業型モデルに、Core(顧客規模別)とSolution(製品特化)の2軸が組み合わさる。次の転職でも自分の経験を役割名で説明しやすい。",
        sourceIds: ["sf-org-structure", "sf-careers-blog-bdr"],
      },
      {
        title: "成果と報酬が直結する評価構造",
        detail: "基本給+インセンティブの成果報酬型。外部の給与集計(自己申告)では営業平均1,300万円超という水準感が示されているが、これはOTEや達成率を示すものではない。",
        sourceIds: ["sf-openmoney"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜSalesforceか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "競合(Microsoft、HubSpot、Oracle、SAPなど)との違いを、自分の担当予定領域で具体的に説明できるか",
        why: "中途面接で高頻度に問われる定番質問。企業理解の深さを測る意図が強い。",
        sourceIds: ["sf-interview-prep"],
      },
      {
        question: "同社の意思決定フレームワーク「V2MOM」を理解した上で、自部門の数字目標をロジカルに語れるか",
        why: "SWOT分析や事業戦略に絡めた質問が実際に出ており、フレームワークへの理解が評価軸になっている。",
        sourceIds: ["sf-interview-prep"],
      },
      {
        question: "最終面接で想定される商談ロールプレイングに向けて、担当予定セグメントの顧客課題を具体的に用意できているか",
        why: "営業職の最終選考ではロールプレイングが実施されるケースが報告されている。",
        sourceIds: ["sf-interview-prep"],
      },
      {
        question: "前任者のquota達成率・在籍期間・担当変更理由を、逆質問として尋ねられるか",
        why: "ブランドや平均年収ではなく、実際に割り当てられるテリトリーの質を見極めるための質問。",
        sourceIds: ["sf-repvue", "sf-service-ae"],
      },
    ],
  },
  solutions: [
    {
      name: "Sales Cloud",
      valueProp: "営業プロセス・パイプライン管理の中核製品。Core AEが主に売る基幹CRM。",
      url: "https://www.salesforce.com/jp/sales/",
      competitors: "Microsoft Dynamics 365、HubSpot、Oracle CX、SAPが主要な競合。CRM市場全体ではSalesforceが約20.7%のシェアを持ち、これは競合上位4社の合計シェアより大きいとされる(市場調査記事の集計)。",
      differentiation: "Microsoft Dynamicsは自社のMicrosoft 365・Power Platformとの統合を強みにする一方、HubSpotはSMB・Mid-Market向けに導入の速さとノーコードでの展開しやすさで急成長している。Salesforceの差別化は、Sales/Service/Marketing Cloudやデータ基盤(Data Cloud)を横断した「顧客情報の一元化」と、Enterprise向けのカスタマイズ性の高さにある。",
      retention: "Salesforceは製品別の解約率・継続率を公表していないが、FY26のCRPO(現時点の残存履行義務)は前年比14%増の724億ドルで、既存顧客からの契約拡張が事業成長の中心にあることを示している。個別の継続率は面接で確認したい情報として残る。",
    },
    {
      name: "Service Cloud",
      valueProp: "カスタマーサービス・コールセンター向け。問い合わせ対応の効率化を支援する。",
      url: "https://www.salesforce.com/jp/service/",
      competitors: "Zendesk、Freshdesk、Microsoft Dynamics 365 Customer Serviceが主要な競合。",
      differentiation: "Zendeskは数日で導入できるスピードと低コスト、標準搭載のAIによる自動応答が強み。Service Cloudの差別化は、サポート対応がSales/Marketingと同じ顧客レコード上で完結し、営業・マーケティングの履歴を踏まえた対応ができる点と、大企業向けの高いカスタマイズ性にある。「早さのZendesk、深さのService Cloud」という比較のされ方をしている。",
      retention: "製品別の継続率は非公開。サイバーエージェントの事例では、Agentforce Sales/Agentforceの導入で営業事務工数を約50%削減、月間商談数を3倍にしたと公式に発表されており、Service Cloud単体ではなく複数製品を組み合わせた活用実績が事例として語られる傾向がある。",
    },
    {
      name: "Marketing Cloud",
      valueProp: "メール・SMS・広告連携などのマーケティングオートメーション。",
      url: "https://www.salesforce.com/jp/marketing/",
      competitors: "Adobe(Journey Optimizer)、HubSpot、Braze、Oracle Marketing Cloudが主要な競合。",
      differentiation: "Adobeはエンタープライズ領域で最も直接競合するとされる。HubSpotは導入から効果が出るまでの期間の短さ(数週間)を強みにする一方、Marketing Cloudは半年〜1年規模の導入期間になりやすいという指摘がある。Brazeはリアルタイム・クロスチャネル配信に強く、モバイル起点の設計が特徴。Marketing CloudはData Cloudと連携した顧客データ活用の広さが差別化点とされる。",
      retention: "KDDIの事例では、Data Cloud・Marketing Cloud・Tableauの組み合わせで同時実行施策を200から600へ拡大し、横断施策コストを50%削減したと公式に発表されている。単体の継続率データはないが、複数製品への拡張が進んでいる実例として語れる。",
    },
    {
      name: "Data Cloud",
      valueProp: "複数チャネルの顧客データを統合するデータプラットフォーム。AI活用の基盤。",
      url: "https://www.salesforce.com/jp/data/",
      competitors: "Snowflake、Databricks、Adobe Real-Time CDPが主要な競合。ただし2025年以降はSnowflake・DatabricksともSalesforceと戦略的パートナーシップ(データ連携)を結んでおり、純粋な競合というより併存関係になりつつある。",
      differentiation: "SnowflakeとDatabricksは機械学習モデルの構築には強いが、自律型のCRMエージェントを直接動かすことはできない。Adobeはコンテンツのパーソナライズはできるが、サービスケースの自動対応はできない。Data Cloudの強みは、Sales/Service/Marketing CloudやAgentforceに、ETLの遅延なくリアルタイムでデータを連携できる点。",
      retention: "Salesforceの「2025 State of Data Report」では、Data Cloud導入企業でマーケティングROIが32%向上、サポート対応が28%高速化したと報告されている。社内実績としては、Agentforce・Data 360のFY26 Q4 bookingsの60%超が既存顧客からの拡張によるものであることが決算で開示されており、この製品群は新規開拓よりクロスセル・アップセルが伸びの中心になっている。",
    },
    {
      name: "Agentforce",
      valueProp: "AIエージェントが顧客対応・営業支援タスクを自動化する最新製品。",
      url: "https://www.salesforce.com/jp/agentforce/",
      competitors: "Microsoft Copilot Studio、ServiceNowのAIエージェントが主要な競合。2026年時点でエンタープライズAIエージェント市場はSalesforce AgentforceとMicrosoft Copilot Studioの2強とされる。",
      differentiation: "Microsoft Copilotは M365を中心とした日常業務の生産性向上に強みがあり、ServiceNowはIT・人事・セキュリティ領域の既存のワークフロー基盤を土台に30以上の製品にまたがる300以上のAIスキルを展開している。Agentforceの強みは「CRMデータの厚み」で、長年蓄積した顧客対応履歴・商談データ・ケース情報をもとに推論できる点が他社に模倣されにくい参入障壁とされる。",
      retention: "FY26 Q4時点でAgentforceの累計契約は29,000件超、単体ARRは$800M(約1,256億円)で前年比169%増。Agentforce・Data 360 bookingsの60%超が既存顧客への拡張によるもので、新規導入より既存顧客への追加販売が成長の中心になっている。",
    },
    {
      name: "Tableau",
      valueProp: "データ可視化・BI分析ツール。買収により製品群に統合されている。",
      url: "https://www.salesforce.com/jp/analytics/tableau/",
      competitors: "Microsoft Power BI、Qlik、Google Looker(Looker Studio)が主要な競合。",
      differentiation: "Power BIはMicrosoft Fabricという大きなデータ基盤の一部として位置づけられ、Copilotによるレポート作成の速さが強み。TableauはSalesforce傘下になったことで、Slackでの自動サマリー通知(Tableau Pulse)や、Data Cloudとのリアルタイム連携による顧客ジャーナルの可視化など、営業・CRM文脈での活用に強みがある。",
      retention: "製品単体の継続率は非公開。資生堂の事例では、Data Cloud・MuleSoft・Marketing Cloud・Service Cloudと合わせてグローバル顧客データ・API統合を複数製品で推進していると公式発表されており、Tableauも含めた複数製品の併用が大手顧客での典型的な使われ方だと考えられる。",
    },
    {
      name: "MuleSoft",
      valueProp: "社内システム間のデータ連携基盤(iPaaS)。買収による統合製品。",
      url: "https://www.mulesoft.com/jp",
      competitors: "Boomi、Workato、Informatica(SalesforceがInformatica Cloudを買収済み)が主要な競合。",
      differentiation: "Boomiはノーコードで低学習コスト、素早い導入に強みがある一方、MuleSoftは開発者中心の複雑なAPI連携・ガバナンス要件がある大企業向けに強いとされる。「開発者が多く複雑な統合ならMuleSoft、素早い低コード連携ならBoomi」という比較のされ方をしている。",
      retention: "製品単体の継続率は非公開。資生堂の事例のように、MuleSoftはData Cloudやその他製品と組み合わせてシステム間連携基盤として使われるケースが多く、単体販売よりインフラ的な位置づけで長期契約になりやすいと考えられる(Genba分析)。",
    },
    {
      name: "Slack",
      valueProp: "社内コミュニケーションツール。買収によりCustomer 360と連携する。",
      url: "https://slack.com/intl/ja-jp",
      competitors: "Microsoft Teamsが最大の競合。",
      differentiation: "Teamsは特にMicrosoft 365を導入済みの企業で強く、エコシステム内の統合の「深さ」に強みがある一方、サードパーティ連携の「広さ」では見劣りするとされる。SlackはTableauでの自動サマリー通知やMuleSoftとのAPI連携など、Salesforce製品群との横断的な連携が強みで、営業・CRMのワークフローに組み込みやすい設計になっている。",
      retention: "製品単体の継続率は非公開。Tableau Pulseの通知先としてSlackが使われるなど、他製品との併用を前提にした活用が公式に紹介されている。",
    },
  ],
  customerStoriesUrl: "https://www.salesforce.com/jp/customer-stories/",
  fitTags: [
    "成長したい",
    "市場価値を上げたい",
    "高OTEで稼ぎたい",
    "英語を使う環境に身を置きたい",
    "AI・データ領域を極めたい",
    "Enterpriseの大型商談経験を積みたい",
    "複数製品を横断して学びたい",
    "外資特有の実力主義に挑戦したい",
  ],
  comparisonMap: [
    { arena: "Core CRM", companies: ["Microsoft", "HubSpot", "Oracle", "SAP"], why: "基幹CRM・営業標準化の比較" },
    { arena: "AI Agent / Workflow", companies: ["Microsoft", "ServiceNow", "Google Cloud"], why: "業務AIエージェント予算の比較" },
    { arena: "Customer Data", companies: ["Adobe", "Snowflake", "Databricks"], why: "Data 360・データ基盤予算の比較" },
    { arena: "Engagement", companies: ["Adobe", "Braze", "HubSpot"], why: "Marketing / Customer Engagement予算の比較" },
  ],
  sources: salesforceSources,
};

const mongodbSources: ResearchSource[] = [
  {
    id: "mdb-10q-fy27",
    label: "MongoDB FY2027 Q1 Form 10-Q",
    url: "https://investors.mongodb.com/static-files/490d8959-9448-4d2b-b2ed-aed7799fc56c",
    kind: "法定開示",
    scope: "Net ARR Expansion 121%(2026年4月30日時点)",
    checkedAt: "2026-08-14",
  },
  {
    id: "mdb-plaid-atlas",
    label: "プレイド MongoDB Atlas導入事例",
    url: "https://www.mongodb.com/ja-jp/solutions/customer-case-studies/plaid",
    kind: "企業公式",
    scope: "国内導入事例・マルチクラウド運用・SRE負荷・開発速度",
    checkedAt: "2026-08-14",
  },
  {
    id: "mdb-toyota-connected-atlas",
    label: "Toyota Connected MongoDB Atlas導入事例",
    url: "https://www.mongodb.com/solutions/customer-case-studies/toyota-connected",
    kind: "企業公式",
    scope: "可用性99.99%・最短3秒のデータ処理・運用効率",
    checkedAt: "2026-08-14",
  },
  {
    id: "mdb-atlas-10-years",
    label: "MongoDB「10 Years of MongoDB Atlas」",
    url: "https://www.mongodb.com/company/blog/news/10-years-mongodb-atlas-built-for-whats-next",
    kind: "企業公式",
    scope: "Atlas Vector Search・AIアプリケーション基盤の利用実態",
    checkedAt: "2026-08-14",
  },
  {
    id: "ipa-legacy-modernization-2025",
    label: "レガシーシステムモダン化委員会総括レポート",
    url: "https://www.ipa.go.jp/disc/committee/begoj90000002xuk-att/legacy-system-modernization-committee-20250528-report.pdf",
    kind: "公的機関",
    scope: "日本企業のレガシー刷新・生成AI連携・データ活用需要",
    checkedAt: "2026-08-14",
  },
  {
    id: "mdb-q1fy27",
    label: "MongoDB 2027年度第1四半期決算",
    url: "https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-first-quarter-fiscal-2027-financial",
    kind: "企業公式",
    scope: "グローバル業績・Atlas売上・顧客数(2026年4月期)",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-q4fy26",
    label: "MongoDB 2026年度第4四半期・通期決算",
    url: "https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-fourth-quarter-fiscal-2026-financial",
    kind: "企業公式",
    scope: "通期業績・顧客数",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-10k",
    label: "MongoDB FY2026 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm",
    kind: "法定開示",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-japan-company",
    label: "MongoDB Japan合同会社 企業情報",
    url: "https://www.houjin.info/detail/2010003019010",
    kind: "外部集計",
    scope: "日本法人従業員数の推定値・設立日・所在地",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-squareexnix",
    label: "スクウェア・エニックス MongoDB導入ブログ(公式)",
    url: "https://www.mongodb.com/blog/post/leaf-in-the-wild-square-enix-scales-tomb-raider-hitman-absolution-deus-ex-and-more-on-mongodb",
    kind: "企業公式",
    scope: "国内導入事例(ゲーム・エンターテインメント)",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-repvue",
    label: "RepVue MongoDB company reviews",
    url: "https://www.repvue.com/companies/MongoDB",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-repvue-recognition",
    label: "MongoDB Blog「Sales Recognized as a Top 20 Org for Professional Development by RepVue」",
    url: "https://www.mongodb.com/blog/post/mongodb-sales-recognized-as-top-20-org-professional-development-repvue",
    kind: "企業公式",
    scope: "営業組織の人材育成評価",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-levels",
    label: "Levels.fyi MongoDB Account Executive給与データ",
    url: "https://www.levels.fyi/companies/mongodb/salaries/sales/title/account-executive",
    kind: "外部集計",
    scope: "米国の自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-cosmosdb-compare",
    label: "MongoDB公式「Comparing Azure Cosmos DB and MongoDB」",
    url: "https://www.mongodb.com/resources/compare/mongodb-vs-cosmos-db",
    kind: "企業公式",
    scope: "競合比較(自社発行のため一定のバイアスに留意)",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-careers",
    label: "MongoDB Careers",
    url: "https://www.mongodb.com/careers/",
    kind: "企業公式",
    scope: "採用情報・カルチャー",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-q2fy27-outlook",
    label: "MongoDB Outlines 21%-23% Atlas Revenue Growth for Fiscal 2027(Seeking Alpha)",
    url: "https://seekingalpha.com/news/4559959-mongodb-outlines-21-percentminus-23-percent-atlas-revenue-growth-for-fiscal-2027-while",
    kind: "外部集計",
    scope: "Atlas成長ガイダンス",
    checkedAt: "2026-08-06",
  },
  {
    id: "mdb-ipo",
    label: "CNBC「MongoDB IPO stock price on first trading day」",
    url: "https://www.cnbc.com/2017/10/19/mongodb-mdb-ipo-stock-price-on-first-trading-day.html",
    kind: "外部集計",
    scope: "2017年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "mdb-sspl-license",
    label: "MongoDB「MongoDB Issues New Server Side Public License」プレスリリース",
    url: "https://www.mongodb.com/company/newsroom/press-releases/mongodb-issues-new-server-side-public-license-for-mongodb-community-server",
    kind: "企業公式",
    scope: "2018年のライセンス変更(SSPL)",
    checkedAt: "2026-08-07",
  },
  {
    id: "mdb-q1fy27-results",
    label: "StockTitan「MongoDB Announces First Quarter Fiscal 2027 Results」",
    url: "https://www.stocktitan.net/news/MDB/mongo-db-inc-announces-first-quarter-fiscal-2027-financial-pn6ou0elo2cm.html",
    kind: "外部集計",
    scope: "Atlas比率・成長率、AI需要による株価反発",
    checkedAt: "2026-08-08",
  },
  {
    id: "mdb-leadership-change",
    label: "CNBC「MongoDB CEO Dev Ittycheria exits, replaced by Cloudflare's CJ Desai」",
    url: "https://www.cnbc.com/2025/11/03/mongodb-ceo-dev-ittycheria-exits-replaced-by-cloudflares-cj-desai.html",
    kind: "外部集計",
    scope: "2025年11月のCEO交代",
    checkedAt: "2026-08-08",
  },
  {
    id: "mdb-exec-departures",
    label: "FinancialContent「MongoDB Shares Crater 25% as Conservative 2027 Guidance and Executive Exodus Rattle Cloud Sector」",
    url: "https://markets.financialcontent.com/stocks/article/marketminute-2026-3-5-mongodb-shares-crater-25-as-conservative-2027-guidance-and-executive-exodus-rattle-cloud-sector",
    kind: "外部集計",
    scope: "2026年3月の株価急落と経営陣の相次ぐ離脱",
    checkedAt: "2026-08-08",
  },
  {
    id: "mdb-postgres-competition",
    label: "Tech Insider「MongoDB vs PostgreSQL 2026」比較記事",
    url: "https://tech-insider.org/mongodb-vs-postgresql-2026/",
    kind: "コミュニティ",
    scope: "pgvector等によるPostgreSQL陣営の追い上げ",
    checkedAt: "2026-08-08",
  },
];

const mongodbIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-14",
  salesSnapshot: "MongoDBは、アプリケーション開発企業や大企業の開発・IT部門が、変化の速いデータを柔軟に扱いながらクラウドとAIサービスを構築するためのデータ基盤。「リレーショナルDBの変更に時間がかかる」「複数クラウドでデータ基盤の運用が複雑」「生成AI向け検索と業務データが分断している」といった課題を解決する。開発者起点の技術採用から、基幹システム移行や全社のAIアプリケーション基盤へ案件を広げられる点が、営業としての面白さ。",
  salesSnapshotFabe: "アプリケーション開発企業や大企業の開発・IT部門に対し、「リレーショナルDBの変更に時間がかかる」「複数クラウドでデータ基盤の運用が複雑」「生成AI向け検索と業務データが分断している」などの課題を解決する。主力製品は、AWS・Azure・Google Cloudで利用できるフルマネージドのドキュメントデータベース「MongoDB Atlas」である。競合優位性は、スキーマ変更へ柔軟に対応できるドキュメントモデルと、オペレーショナルデータ・全文検索・ベクトル検索をマルチクラウド上の同一基盤で扱える点にある。顧客への一番のメリットは、DB運用や検索基盤の同期に時間を取られる状態を、開発者がデータモデルとAI機能を素早く変更できる状態へ変え、SRE負荷とインフラ管理コストの削減、開発速度・可用性・検索性能の向上につなげられることにある。",
  salesSnapshotFabeExpanded: "Atlas売上は2027年度第1四半期に前年同期比29%超で成長し、MongoDB全体のNet ARR Expansionは121%に達した。成果は、導入前後のリリース期間、DB運用工数、インシデント件数、検索応答時間、可用性、インフラコストで測定できる。プレイドでは毎秒数万件の読み書きを支えながらSRE負荷を軽減し、Toyota Connectedでは99.99%の可用性と最短3秒のデータ処理を実現している。日本市場では、レガシーシステムをモダン化し、生成AIを既存データへ組み込む必要性が高まっており、クラウド移行とAIデータ基盤を同時に提案できる余地がある。",
  marketStatus: {
    isPublic: true,
    ticker: "MDB",
    exchange: "NASDAQ",
    listedSince: "2017年",
    stockLinkUrl: "https://stockanalysis.com/stocks/mdb/",
    growthSummary: "2007年に「10gen」として創業し、2013年にMongoDB Inc.へ改称。2017年10月にNASDAQへ上場(公開価格$24、初日+34%)。2016年に開始したフルマネージド型クラウドサービス「Atlas」が、自己ホスト型のライセンス販売中心だった収益構造をサブスクリプション型へ転換させる転機になり、現在はAtlasが売上の7割超を占める。2018年にはクラウド事業者が無償でMongoDBをサービス化することを防ぐため、ライセンスをSSPL(Server Side Public License)へ変更。オープンソース界隈から論争を呼んだが、独自のクラウド収益モデルを守る布石になった。開発者主導のボトムアップ採用から始まる成長パターンは続いているが、Atlasの成長率はFY2026の26〜30%からFY2027は21〜23%への鈍化が見込まれており、ハイパーグロースから安定成長期へ移行しつつある局面にある、というのがGenbaの読み。",
    milestones: [
      { year: "2017", label: "NASDAQ上場", detail: "公開価格$24、初日+34%の値上がりで取引開始。", sourceId: "mdb-ipo" },
      { year: "2016", label: "Atlas(フルマネージドクラウド)を開始", detail: "自己ホスト型ライセンス販売中心から、サブスクリプション型クラウドサービスへ事業モデルを転換する起点になった。", sourceId: "mdb-q2fy27-outlook" },
      { year: "2018", label: "ライセンスをSSPLへ変更", detail: "クラウド事業者による無償サービス化を防ぐ目的で、オープンソースライセンスをAGPLv3からSSPLへ変更。業界から論争を呼んだ。", sourceId: "mdb-sspl-license" },
      { year: "2026-27", label: "Atlas成長率が26〜30%から21〜23%へ鈍化見込み", detail: "ハイパーグロース期から安定成長期への移行が進んでいる。", sourceId: "mdb-q2fy27-outlook" },
    ],
    sourceIds: ["mdb-ipo", "mdb-sspl-license", "mdb-q2fy27-outlook"],
    genbaVerdict: {
      headline: "Atlasという勝ち筋は明確。ただし経営陣の相次ぐ離脱が「次の一手」への不安材料に。",
      body: "Atlasの成長率が四半期で29〜34%まで再加速し、2026年3月に一度22%超急落した株価も6月には反発するなど、事業モメンタム自体は底堅い。一方でCEO・CFO・営業トップ(President of Field Operations)・CRO(最高収益責任者)が2025年後半から2026年前半にかけて相次いで交代しており、AIという最も説明責任を問われるテーマのタイミングで経営体制が入れ替わっているのは軽視できない、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "Atlasの成長率がAI需要で再加速",
        body: "売上の73〜75%を占めるAtlas(フルマネージドクラウド)の成長率は、四半期ベースで29〜34%まで再加速。2026年3月の弱いガイダンスで株価が急落した後、6月のQ1 FY2027決算では「AI関連需要の強さ」を理由に株価が約20%反発した。",
        sourceId: "mdb-q1fy27-results",
      },
      {
        title: "特定顧客に依存しない、広く分散した顧客基盤の拡大",
        body: "総顧客数は47,800社(2024年1月)→54,500社(2025年1月)→62,500社超(2025年10月)と着実に増加。開発者主導のボトムアップ採用による広く分散した成長パターンが続いており、一部の大口顧客に依存する構造ではない。",
        sourceId: "mdb-q2fy27-outlook",
      },
      {
        title: "増収率が鈍化する中でも利益率改善を優先",
        body: "FY2027の非GAAP営業利益率ガイダンスは、前年から100〜150bpの改善を見込む水準。成長率だけでなく収益性を重視する経営へ、他の外資SaaS大手と同様の転換が進んでいる。",
        sourceId: "mdb-q2fy27-outlook",
      },
    ],
    riskHypotheses: [
      {
        title: "経営陣の相次ぐ離脱は、単なる偶然ではないかもしれない",
        body: "2025年11月にCEOのDev Ittycheria氏が退任(後任は元CloudflareのCJ Desai氏)、CFOも辞任。2026年に入るとPresident of Field Operations、CRO(最高収益責任者)も相次いで離脱した。2026年3月の株価急落時の報道では「保守的なガイダンスと経営陣の離脱」がセットで株安要因として語られている。",
        confidence: "中",
        evidence: [
          "CEO(2025年11月)・CFO・President of Field Operations・CRO(2026年前半)が相次いで交代",
          "2026年3月の株価急落(-22%超)の報道で、ガイダンスの弱さと経営陣離脱が同時に語られている",
        ],
        counterSignal: "後任(CJ Desai氏ら)は既に発表・着任済みで、空白期間を作らない移行が図られている。6月のQ1 FY2027決算は市場予想を上回り株価も反発しており、少なくとも足元の業績には経営体制の変化が悪影響を及ぼしていない。",
        sourceIds: ["mdb-leadership-change", "mdb-exec-departures", "mdb-q1fy27-results"],
      },
      {
        title: "PostgreSQL陣営(pgvector等)の追い上げが、新規案件での差別化を難しくしている可能性",
        body: "ベクター検索機能を追加したPostgreSQL(pgvector)が標準的なベンチマークで高い精度を達成しており、「新規のAIネイティブアプリ開発ではPostgreSQLが最も無難な選択肢になりつつある」という論調が業界比較記事で見られる。AWS等のハイパースケーラーも自社DBサービスの値下げを進めている。",
        confidence: "探索中",
        evidence: [
          "pgvector 0.8が標準的なANNベンチマークで約95%の再現率を達成したとされる",
          "AWSがDynamoDBの従量課金価格を50%引き下げるなど、ハイパースケーラー製品との価格競争が続いている",
        ],
        counterSignal: "Atlasの成長率(29〜34%)は現時点でMongoDB全事業セグメントの中で最も高く、少なくとも既存顧客の拡張フェーズでは競合による目立った侵食は数字上確認できていない。新規案件での勝率低下という、より先行指標的なリスクである点には留意。",
        sourceIds: ["mdb-postgres-competition", "mdb-q1fy27-results"],
      },
    ],
    japanGrowth: {
      headline: "日本では、レガシー刷新とAIデータ基盤が案件の入口になり得る。",
      narrative: "MongoDB Japan合同会社は合同会社(GK)のため決算公告の義務がなく、日本の売上・利益・Atlas成長率は非公開。公開情報は限られる一方、プレイドはMongoDB Atlasで毎秒数万件の読み書きを処理し、DB運用負荷を減らして開発者を新機能開発へ振り向けている。スクウェア・エニックスでも100以上のクラスター・570以上のノードを使う大規模運用が確認できる。IPA・経済産業省のレガシーシステムモダン化委員会は、既存システムが生成AI等の最新技術の連携・組み込みを妨げていると指摘しており、レガシー刷新、クラウド移行、AI向け検索基盤を一続きで提案できる市場背景がある。ただし、日本固有の売上・継続率・競合勝率は未公開であり、成長性の定量評価には留保が必要。",
      qualitativeSignals: [
        { label: "プレイドのAtlas運用", detail: "毎秒数万件の読み書きを支え、DB管理・拡張・バックアップ等の運用負荷を軽減。開発速度、安定性、性能の改善を公式事例で確認。", sourceId: "mdb-plaid-atlas" },
        { label: "スクウェア・エニックスの大規模運用", detail: "100以上のクラスター・570以上のノードで複数タイトルの非同期マルチプレイヤー機能を支える。", sourceId: "mdb-squareexnix" },
        { label: "日本企業のモダナイゼーション需要", detail: "公的レポートは、レガシーシステムが生成AI等の最新技術との連携・組み込みを妨げる問題を指摘。", sourceId: "ipa-legacy-modernization-2025" },
      ],
      sourceIds: ["mdb-plaid-atlas", "mdb-squareexnix", "ipa-legacy-modernization-2025"],
    },
  },
  sellingPlaybook: {
    frameIntro: "MongoDBの売り方は「リリース速度を落とさずにデータモデルを進化させたい」という開発チームの痛みが起点。ボトムアップで入った後、AIユースケース(ベクター検索・RAG)を追加提案の切り口にする。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "開発チームが自己主導でAtlasを使い始め(ボトムアップ)、その後全社基幹システムへ拡大するのが典型。Atlas成長が4四半期連続29%超という実績はこの拡張フェーズの強さを示している。" },
      { title: "製品の成り立ちから見る課題", body: "MongoDBはリレーショナルDBのスキーマ変更が重く開発速度を落とすという課題を解消するために、柔軟なドキュメント型DBとして生まれた。存在理由は「開発速度を落とさずにデータモデルを進化させられること」。" },
      { title: "外部環境の要求から見る課題", body: "生成AIアプリ開発が増え、ベクター検索・非構造データの扱いがアプリケーション設計の標準要件になりつつある。" },
    ],
    narrative: [
      { label: "背景", body: "開発チームは新機能を素早く出したいが、リレーショナルDBはスキーマ変更のたびにマイグレーション作業が発生し、リリース速度が落ちる。" },
      { label: "課題", body: "AI機能(レコメンド・検索・RAG)を既存DBに追加しようとすると、ベクターデータと通常データを別々のシステムで管理する必要が出て開発・運用が複雑化する。" },
      { label: "解決策", body: "Atlas上でドキュメントデータとベクター検索を同じ基盤に統合し、スキーマ変更を伴わずにAI機能を追加できるようにする。" },
      { label: "選定の理由", body: "従来型RDBMSはスキーマ変更のコストが高く、専用ベクターDBは通常データと別管理になる。MongoDBは開発者コミュニティでの支持(ボトムアップ採用)と、Atlas成長が4四半期連続29%超という実績を根拠に選ばれている。" },
    ],
    openingHook: "直近でスキーマ変更を伴うリリースがあった時、テストと移行にどれくらい時間がかかりましたか。",
    valueHypothesis: "Atlasの成長が個別顧客の変動に左右されにくくなったとCFOが説明している開示を根拠に、開発者が自発的に選ぶDBほど全社導入後の定着率が高い、という価値仮説を立てる。",
    commonObjection: { objection: "今のRDBMSを置き換えるのはリスクが大きい", reframe: "全置き換えではなく、新規機能・AIユースケースから部分導入するのが典型的な入り方だと事例で示す。" },
  },
  cultureNotes: {
    organizationReadTitle: "「情報が少ない」こと自体が、組織の実態を映す鏡かもしれない。",
    hypothesis: {
      title: "開発者文化が強く、営業もボトムアップ採用の理解が前提になりやすい。",
      body: "MongoDBは長年、開発者コミュニティからのボトムアップ採用で成長してきた企業。営業組織もトップダウンの大型商談だけでなく、既に社内で使われている製品を「どう全社契約に引き上げるか」という動き方が求められる場面が多いと考えられる。",
    },
    careerValue: {
      title: "「技術理解を武器にした営業」という経験は、データ×AI領域全般で通用する。",
      body: "Cosmos DB・DynamoDBとの技術比較を踏まえた提案経験は、他のデータベース・データ基盤企業への転職でも評価されやすい。一方、日本法人の情報開示が薄いため、在籍中に語れる実績を自分で言語化しておく意識がより重要になる。",
      confidence: "探索中",
    },
  },
  facts: [
    {
      label: "売上(2027年度Q1)",
      value: "$687.6M(約1,080億円)",
      detail: "前年比+25%。1ドル=157円換算。",
      sourceIds: ["mdb-q1fy27"],
    },
    {
      label: "Atlas売上比率",
      value: "約75%",
      detail: "前年は72%。Atlas売上は前年比+29%成長(2026年4月期時点)。",
      sourceIds: ["mdb-q1fy27"],
    },
    {
      label: "総顧客数",
      value: "67,700社超",
      detail: "前年の57,100社から増加(2026年4月期時点)。",
      sourceIds: ["mdb-q1fy27"],
    },
    {
      label: "ARR10万ドル(約1,570万円)以上の顧客数",
      value: "2,895社",
      detail: "前年の2,506社から増加(2026年4月期時点)。1ドル=157円換算。",
      sourceIds: ["mdb-q1fy27"],
    },
    {
      label: "Net ARR Expansion",
      value: "121%",
      detail: "既存顧客の消費量拡大が成長に寄与(2026年4月期時点)。",
      sourceIds: ["mdb-q1fy27"],
    },
    {
      label: "グローバル従業員数",
      value: "5,636人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceIds: ["mdb-10k"],
    },
  ],
  hypotheses: [
    {
      topic: "JAPAN DISCLOSURE GAP",
      title: "日本法人の情報開示が薄い。これ自体が「組織のフェーズ」を示すシグナルかもしれない",
      conclusion: "Salesforce・Datadog・ServiceNow・Snowflakeと比べ、MongoDB Japanは代表者名・具体的な導入事例・給与データの公開情報が著しく少ないことが分かりました。日本法人は2015年設立で一定の年数が経っていますが、開示の薄さは、マーケティング・PR体制が他社ほど手厚くない段階にある可能性を示唆します。",
      confidence: "中",
      evidence: [
        "MongoDB Japan合同会社の代表者名は主要な企業データベースでも非公開",
        "公式サイトに日本企業向けの個別導入事例(customer story)がほぼ確認できない(スクウェア・エニックス以外)",
        "OpenMoney等の給与集計サイトにMongoDB Japan単独のデータが確認できない",
      ],
      counterSignals: [
        "情報開示が薄いことは、必ずしも組織が小さい・不活発であることを意味しない。開発者向け製品は元々マーケティング露出が少ない傾向がある",
        "コミュニティ(MongoDB User Group)には700人以上のメンバーがおり、技術コミュニティでの存在感は一定ある",
      ],
      interviewQuestions: [
        "日本チームの人数・体制はどのくらいか。直近1年での増減は",
        "日本の顧客事例を外部に出さない方針なのか、単に整備が追いついていないだけなのか",
      ],
      sourceIds: ["mdb-japan-company"],
    },
    {
      topic: "CLOUD SHIFT",
      title: "Atlas(クラウド版)が売上の75%に到達。オンプレミスからクラウド消費型への移行が進む",
      conclusion: "Atlas売上が全体の約75%を占めるまでになり、前年の72%から拡大しています。今後の新規商談はクラウド版Atlasが前提となり、オンプレミス版(Enterprise Advanced)の営業比重は下がっていくと考えられます。",
      confidence: "高",
      evidence: [
        "Atlas売上が前年比+29%、全売上の約75%(前年72%から上昇)",
        "Net ARR Expansionが121%と、既存顧客の消費量拡大が成長に寄与",
        "全社売上は前年比+25%で成長が加速している(前年同期+22%から)",
      ],
      counterSignals: [
        "EA(Enterprise Advanced、オンプレミス版)などその他売上も前年比+13%とプラス成長は続けており、完全に消滅したわけではない",
        "日本市場でのAtlas比率・オンプレミス比率の内訳は非公開",
      ],
      interviewQuestions: [
        "自分が担当する商談は、Atlas(クラウド)とEnterprise Advanced(オンプレミス)のどちらが中心か",
        "オンプレミスからAtlasへの移行(マイグレーション)提案は自分のノルマにどう反映されるか",
      ],
      sourceIds: ["mdb-q1fy27", "mdb-q4fy26"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "クオータ達成率は約46〜57%。SnowflakeやServiceNowと比べると中程度で、人材育成評価も高い",
      conclusion: "RepVueの集計ではEnterprise Account Executiveの達成率が約46%、Strategic Account Executiveが約57%です。ServiceNow(約47%)と近い水準で、Snowflake(約1%)ほど極端ではありません。また「育成・研修」の分野でRepVue Top20組織に選出されており、教育体制への評価は比較的高いと見られます。",
      confidence: "中",
      evidence: [
        "RepVue集計でEnterprise AE達成率約46%、Strategic AE約57%、Sales Development Manager約74%",
        "MongoDB自身がブログで、営業組織がRepVueの「Professional Development(人材育成)」分野でTop20組織に選出されたと発表",
        "標準クオータは約135万ドル(Enterprise AE)",
      ],
      counterSignals: [
        "RepVueの母数・算出期間は非公開であり、絶対値としての精度には留保が必要",
        "「人材育成」の評価が高くても、実際のクオータ達成のしやすさとは別軸の指標である",
      ],
      interviewQuestions: [
        "自分が配属されるチームの直近のクオータ達成率(実数)を教えてほしい",
        "Top20評価を受けた人材育成プログラムの具体的な内容(オンボーディング期間・研修体制)を聞きたい",
      ],
      sourceIds: ["mdb-repvue", "mdb-repvue-recognition"],
    },
    {
      topic: "COMPENSATION",
      title: "OTEは外資SaaSの標準的な水準。ベース・変動が50/50で、達成後のアクセラレータが効く設計",
      conclusion: "米国データではEnterprise AEの総報酬(OTE)は225,000〜300,000ドル、ベースと変動が50/50という設計です。日本独自のデータは確認できていませんが、クオータ100%達成後にアクセラレータが効く一般的な外資SaaS型の報酬設計だと考えられます。",
      confidence: "探索中",
      evidence: [
        "levels.fyi集計でEnterprise AEの総報酬(OTE)は225,000〜300,000ドル、ベース120,000〜150,000ドル",
        "ベース・変動の比率は50/50、クオータ100%達成後にアクセラレータが適用される設計",
        "標準クオータは約135万ドル",
      ],
      counterSignals: [
        "これらの数値はすべて米国のデータであり、日本オフィスの給与水準を示すものではない",
        "日本法人独自の給与データは、主要な集計サイトでは確認できていない",
      ],
      interviewQuestions: [
        "日本オフィスのOTE水準・ベースと変動の比率は米国と同じ設計か",
        "アクセラレータが発生する具体的な達成率のラインはどこか",
      ],
      sourceIds: ["mdb-levels"],
    },
    {
      topic: "PRODUCT / MARKET",
      title: "「開発者に選ばれるデータベース」から「AIネイティブなデータ基盤」への転換期",
      conclusion: "MongoDBは長年、開発者コミュニティからのボトムアップ採用で成長してきましたが、Atlas Vector Search等AI関連機能への投資を進めており、AIアプリケーション開発の基盤としての立ち位置を強めています。Cosmos DB・DynamoDBとの比較では、スキーマの柔軟性とマルチクラウド対応が引き続き強みです。",
      confidence: "中",
      evidence: [
        "Atlas売上が全体の75%に到達し、クラウドネイティブな消費モデルへの移行が進んでいる",
        "MongoDB.local Londonで、AI実験から本番運用への橋渡しとなる新機能を複数発表",
        "Cosmos DBとの比較では、Atlasはインスタンス課金でワークロードが安定している場合にコストが読みやすいとされる",
      ],
      counterSignals: [
        "Cosmos DBは5段階の一貫性レベルを提供するなど、特定用途ではAtlasより柔軟な制御が可能とされる",
        "DynamoDBはAWS環境での低レイテンシ・サーバーレススケーラビリティで優位という評価がある",
      ],
      interviewQuestions: [
        "AI関連(Vector Search等)の商談は、自分の担当エリアでどれくらいの比率になっているか",
        "Cosmos DBやDynamoDBとの競合案件で、直近の勝率・失注理由の傾向はどうか",
      ],
      sourceIds: ["mdb-q1fy27", "mdb-cosmosdb-compare"],
    },
  ],
  customerProof: [
    {
      company: "プレイド",
      products: "MongoDB Atlas",
      outcome: "KARTEの基盤で毎秒数万件の読み書きを処理。DB管理・拡張・バージョンアップ・バックアップの運用負荷を軽減し、開発速度・安定性・性能を改善",
      implication: "日本企業に対し、マルチクラウド対応だけでなく、SRE負荷を減らして開発者を顧客価値の創出へ戻す商談ストーリーを組み立てられる。",
      sourceId: "mdb-plaid-atlas",
    },
    {
      company: "Toyota Connected",
      products: "MongoDB Atlas",
      outcome: "20のAtlasデータベースで車両安全サービスを支え、99.99%の可用性と最短3秒のデータ処理を実現。専任DBチームを置かずに運用",
      implication: "ミッションクリティカルなIoT・モビリティ用途で、可用性、処理速度、運用効率を同時に提案できる。",
      sourceId: "mdb-toyota-connected-atlas",
    },
    {
      company: "スクウェア・エニックス",
      products: "MongoDB Atlas",
      outcome: "『トゥームレイダー』『ヒットマン アブソリューション』『デウスエクス』など複数タイトルの非同期マルチプレイヤー機能を運用。100以上のクラスター・570以上のノードを稼働し、最大クラスターは100TB超のデータを管理",
      implication: "日本を代表するゲーム企業が、グローバル規模のバックエンド基盤としてAtlasを採用した公式事例。ゲーム・エンターテインメント業界への提案材料になる。",
      sourceId: "mdb-squareexnix",
    },
  ],
  externalSignals: [
    {
      label: "営業職の報酬データ(米国)",
      value: "Enterprise AE OTE $225,000〜$300,000",
      detail: "levels.fyi集計。ベース$120,000〜$150,000、ベース・変動50/50。",
      caveat: "米国データであり、日本の給与水準を示すものではない。",
      sourceId: "mdb-levels",
    },
    {
      label: "営業組織の外部評価",
      value: "RepVue Professional Development Top20",
      detail: "Enterprise AE達成率約46%、Strategic AE約57%。人材育成分野でRepVue Top20組織に選出。",
      caveat: "グローバル集計であり日本法人限定ではない。",
      sourceId: "mdb-repvue-recognition",
    },
  ],
  roleLens: {
    salesMotion: "開発者のボトムアップ採用を起点に、Enterprise Advanced(オンプレミス)からAtlas(クラウド)への移行提案が中心的な動き。Atlas比率は全体の75%に達している。",
    compensation: "米国データではEnterprise AE OTEは22.5万〜30万ドル、ベース・変動50/50。日本独自の水準は非公開。",
    quota: "RepVueの集計ではEnterprise AE達成率約46%、Strategic AEは約57%。標準クオータは約135万ドル。",
    collaboration: "開発者コミュニティ・Solutions Architect・パートナー(AWS/Azure/GCP)との連携が前提。技術検証(PoC)を伴う商談が多いと考えられる。",
  },
  leadership: {
    name: "非公開",
    role: "日本法人代表(氏名非公開)",
    read: "MongoDB Japanは2015年設立で一定の運用年数がありますが、代表者名を含む組織体制の詳細は主要な公開データベースでは確認できませんでした。Salesforce・Datadog・ServiceNow・Snowflakeと比べて、日本市場での情報発信・PR活動が手薄な段階にあると考えられます。",
    sourceId: "mdb-japan-company",
  },
  companyStats: {
    globalHeadcount: {
      value: "5,636人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceId: "mdb-10k",
    },
    japanHeadcount: {
      value: "約100人(推定)",
      detail: "採用データベースによる推定値。公式には開示されていない。",
      sourceId: "mdb-japan-company",
    },
    japanOffice: {
      value: "東京都港区白金台",
      detail: "MongoDB Japan合同会社本社。",
      sourceId: "mdb-japan-company",
    },
    japanSince: {
      value: "2015年",
      detail: "MongoDB Japan合同会社設立。",
      sourceId: "mdb-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "開発者コミュニティ発の「下から積み上がる」採用モデルを経験できる",
        detail: "MongoDBはトップダウンの大型商談だけでなく、開発者が使い始めて組織に広がるボトムアップ採用が伝統的に強い。技術理解を伴う提案力を、他社とは違う切り口で鍛えられる。",
        sourceIds: ["mdb-cosmosdb-compare"],
      },
      {
        title: "Atlas比率75%への転換期にあり、オンプレミスからクラウドへの移行提案を主導できる",
        detail: "Net ARR Expansionが121%と、既存顧客の消費拡大が成長の柱になっている。移行提案・アップセルの経験を積みやすい局面にある。",
        sourceIds: ["mdb-q1fy27"],
      },
      {
        title: "スクウェア・エニックスなど、日本発のグローバル企業のバックエンド基盤に関われる可能性がある",
        detail: "ゲーム・エンターテインメント業界など、データベース選定がプロダクト体験に直結する業界で、技術理解を武器にした提案ができる。",
        sourceIds: ["mdb-squareexnix"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜMongoDBか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "MongoDBとCosmos DB、DynamoDBとの違いを、自分の担当予定顧客像に当てはめて具体的に説明できるか",
        why: "データベース選定の技術比較は面接での定番。",
        sourceIds: ["mdb-cosmosdb-compare"],
      },
      {
        question: "自分が配属されるチームの直近のクオータ達成率(実数)を逆質問できるか",
        why: "RepVueでEnterprise AEの達成率が約46%と公開されており、入社後のギャップを避けるために確認したい。",
        sourceIds: ["mdb-repvue"],
      },
      {
        question: "Enterprise Advanced(オンプレミス)からAtlas(クラウド)への移行提案が、自分のノルマにどう反映されるか説明を求められるか",
        why: "Atlas比率が75%に達しており、今後の商談構造を理解しておくことが重要。",
        sourceIds: ["mdb-q1fy27"],
      },
      {
        question: "開発者コミュニティ発のボトムアップ採用の中で、営業がどう関与するのかを具体的に聞けるか",
        why: "MongoDBは技術者主導の採用文化が強く、一般的なトップダウン営業とは異なる動き方が求められる可能性がある。",
        sourceIds: ["mdb-japan-company"],
      },
    ],
  },
  solutions: [
    {
      name: "MongoDB Atlas",
      valueProp: "AWS・Azure・Google Cloudで利用でき、構築・拡張・バックアップ・バージョン更新を自動化するフルマネージドのドキュメントデータベース。",
      url: "https://www.mongodb.com/atlas",
      competitors: "Azure Cosmos DB、Amazon DynamoDB、Google Cloud Firestoreが主要な競合。",
      differentiation: "Cosmos DBは5段階の一貫性レベルで柔軟な制御ができる一方、Atlasはインスタンス課金でワークロードが安定していればコストが読みやすい。ドキュメント指向のスキーマ柔軟性と、AWS/Azure/GCPいずれでも同等に使えるマルチクラウド対応が強み。",
      retention: "Atlas売上は2027年度第1四半期に前年同期比29%超で成長。MongoDB全体のNet ARR Expansionは121%。",
    },
    {
      name: "Atlas Vector Search",
      valueProp: "ベクトル検索機能を組み込んだAI・生成AIアプリケーション向けの拡張機能。",
      url: "https://www.mongodb.com/products/platform/atlas-vector-search",
      competitors: "Pinecone、Weaviate、Elasticsearchが主要な競合。",
      differentiation: "専業のベクトルDB(Pinecone等)と比べ、既存のオペレーショナルデータと同じ基盤でベクトル検索を扱える点が強み。データを別基盤に移さずAI機能を追加できる。",
      retention: "MongoDB.local Londonで関連の新機能が複数発表されるなど投資が続いている領域だが、普及率・継続率のデータは非公開。",
    },
    {
      name: "Enterprise Advanced(オンプレミス版)",
      valueProp: "自社データセンター・プライベートクラウドで運用するオンプレミス版MongoDB。",
      url: "https://www.mongodb.com/products/self-managed/enterprise-advanced",
      competitors: "Oracle Database、PostgreSQL、Couchbaseが主要な競合。",
      differentiation: "厳格なデータ主権・規制要件がある業界(金融・官公庁等)で選ばれやすい。ただしAtlas比率が75%に達している通り、新規商談ではクラウド版が主流になりつつある。",
      retention: "EA & other revenueは前年比+13%とプラス成長を維持しているが、Atlasほどの成長率ではない。",
    },
    {
      name: "MongoDB Relational Migrator",
      valueProp: "リレーショナルデータベース(Oracle、SQL Server等)からMongoDBへの移行を支援するツール。",
      url: "https://www.mongodb.com/products/tools/relational-migrator",
      competitors: "AWS Database Migration Service、Google Cloud Database Migration Serviceが隣接する競合。",
      differentiation: "MongoDB独自のスキーマ設計支援機能を持ち、単純なデータ移行だけでなくドキュメント指向への再設計を支援する点が特徴。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "MongoDB for Government / Federal",
      valueProp: "官公庁・連邦政府向けのコンプライアンス対応版MongoDB。",
      url: "https://www.mongodb.com/industries/government",
      competitors: "Oracle、AWS GovCloud関連サービスが主要な競合。",
      differentiation: "2026年にClarity Business Solutionsを買収し、米国連邦政府向け領域を強化したと発表されている。日本の官公庁向け展開の有無は確認できていない。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "MongoDB for AI Applications",
      valueProp: "生成AIアプリケーション開発のための統合的なデータ基盤(Vector Search、Atlas、Relational Migrator等を組み合わせたソリューション)。",
      url: "https://www.mongodb.com/solutions/use-cases/ai",
      competitors: "Databricks、Snowflake Cortex AIが主要な競合(データ基盤上でAIを実行するという方向性で共通)。",
      differentiation: "オペレーショナルデータとAI用途のデータを同一基盤で扱える点を強みとする。SnowflakeやDatabricksは分析基盤としての歴史が長く、AIワークロードとの統合はMongoDBと同様に進行中。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "MongoDB Compass / Developer Tools",
      valueProp: "GUIベースのデータベース管理ツールなど、開発者体験を支える周辺ツール群。",
      url: "https://www.mongodb.com/products/tools/compass",
      competitors: "専業のDB管理ツール(DataGrip等)が隣接する競合。",
      differentiation: "開発者コミュニティでの評判・利用実績が長く、ボトムアップ採用の起点になっている。700人超のMongoDB User Groupなど、日本でも一定のコミュニティが存在する。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "MongoDB for Gaming(ゲーム業界向け活用)",
      valueProp: "非同期マルチプレイヤー機能やプレイヤーデータ管理など、ゲーム業界特有のワークロードに対応する活用パターン。",
      url: "https://www.mongodb.com/industries/games",
      competitors: "Amazon DynamoDB、Google Cloud Firestoreが主要な競合(ゲームバックエンド用途で比較されやすい)。",
      differentiation: "スクウェア・エニックスの事例では100以上のクラスター・570以上のノードを運用し、複数タイトルの非同期マルチプレイヤー機能を支えている。スキーマ柔軟性がゲームデータ特有の非定型構造に適しているとされる。",
      retention: "スクウェア・エニックスは「今後の全ゲーム制作でMongoDB Atlasを採用」と公式に紹介されており、継続利用が確認されている数少ない事例。",
    },
  ],
  customerStoriesUrl: "https://www.mongodb.com/solutions/customer-case-studies",
  fitTags: [
    "開発者起点のボトムアップ営業を経験したい",
    "データ×AI領域を極めたい",
    "オンプレミスからクラウドへの移行提案を主導したい",
    "技術理解を伴う提案力を鍛えたい",
    "消費量ベースの成長モデルを経験したい",
    "外資特有の実力主義に挑戦したい",
    "急成長企業でスピード感を求めたい",
    "情報の少ない市場で自ら動き方を作りたい",
  ],
  comparisonMap: [
    { arena: "クラウドデータベース", companies: ["Microsoft(Cosmos DB)", "Amazon(DynamoDB)", "Google Cloud(Firestore)"], why: "クラウドDB予算の比較" },
    { arena: "データ基盤 / AI", companies: ["Snowflake", "Databricks"], why: "データ・AI予算の比較" },
    { arena: "検索・ベクトルDB", companies: ["Elastic", "AWS"], why: "ベクトル検索・AI検索予算の比較" },
    { arena: "オンプレミスDB", companies: ["Oracle", "Microsoft"], why: "レガシー基盤リプレイス予算の比較" },
  ],
  sources: mongodbSources,
};

const brazeSources: ResearchSource[] = [
  {
    id: "brz-q1fy27",
    label: "Braze 2027年度第1四半期決算",
    url: "https://investors.braze.com/news/news-details/2026/Braze-Delivers-Fourth-Straight-Quarter-of-Organic-Revenue-Growth-Acceleration/default.aspx",
    kind: "企業公式",
    scope: "グローバル業績・顧客数・大口顧客数(2026年4月期)",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-q4fy26",
    label: "Braze 2026年度第4四半期・通期決算",
    url: "https://investors.braze.com/news/news-details/2026/Braze-Reports-Fiscal-Year-and-Fourth-Quarter-2026-Results/default.aspx",
    kind: "企業公式",
    scope: "通期業績・RPO",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-10k",
    label: "Braze FY2026 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1676238/000167623826000013/brze-20260131.htm",
    kind: "法定開示",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-japan-company",
    label: "Braze株式会社 会社概要",
    url: "https://salesnow.jp/db/companies/jcbhr4cttgydm0c4",
    kind: "外部集計",
    scope: "日本法人従業員数の推定値・設立日・代表者",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-japancloud",
    label: "Japan Cloud Braze採用ページ",
    url: "https://japancloud.jp/career/companies/braze/",
    kind: "企業公式",
    scope: "日本の採用情報・募集職種一覧",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-mercari",
    label: "メルカリ Braze導入事例",
    url: "https://www.braze.com/ja/customers/mercari",
    kind: "企業公式",
    scope: "国内導入事例(マーケットプレイス)",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-freee",
    label: "freee Braze導入事例",
    url: "https://www.braze.com/ja/customers/freee",
    kind: "企業公式",
    scope: "国内導入事例(BtoB SaaS)",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-moneyforward",
    label: "マネーフォワード Braze導入事例",
    url: "https://www.braze.com/ja/customers/moneyforward",
    kind: "企業公式",
    scope: "国内導入事例(金融・家計管理)",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-repvue",
    label: "RepVue Braze company reviews",
    url: "https://www.repvue.com/companies/Braze",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-competitors-compare",
    label: "InsiderOne「Best Braze Alternatives for Enterprise」比較記事",
    url: "https://insiderone.com/best-braze-alternatives-enterprise/",
    kind: "コミュニティ",
    scope: "顧客エンゲージメント製品の競合比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-sales-director-job",
    label: "Sales Director, Enterprise求人",
    url: "https://japancloud.jp/career/jobs/8270/",
    kind: "企業公式",
    scope: "Sales Directorの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-ae-commercial-job",
    label: "Account Executive, Commercial求人",
    url: "https://japancloud.jp/career/jobs/8264/",
    kind: "企業公式",
    scope: "Commercial AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-ae-enterprise-job",
    label: "Account Executive, Enterprise求人",
    url: "https://japancloud.jp/career/jobs/8105/",
    kind: "企業公式",
    scope: "Enterprise AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-q1fy27-earnings",
    label: "Braze, Inc. - Form 8-K(Q1 FY27決算)",
    url: "https://www.sec.gov/Archives/edgar/data/0001676238/000167623826000024/a20260430-brazeincxq127ear.htm",
    kind: "法定開示",
    scope: "Q1 FY27決算・ガイダンス",
    checkedAt: "2026-08-06",
  },
  {
    id: "brz-ipo",
    label: "Bloomberg「Customer Engagement Platform Braze Jumps After IPO Tops Target」",
    url: "https://www.bloomberg.com/news/articles/2021-11-17/customer-engagement-platform-braze-jumps-after-ipo-tops-target",
    kind: "外部集計",
    scope: "2021年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "brz-fy2026-results",
    label: "Braze「Fiscal Year and Fourth Quarter 2026 Results」",
    url: "https://investors.braze.com/news/news-details/2026/Braze-Reports-Fiscal-Year-and-Fourth-Quarter-2026-Results/default.aspx",
    kind: "企業公式",
    scope: "FY2026通期決算・成長率の加速",
    checkedAt: "2026-08-07",
  },
  {
    id: "brz-northstar-acquisition",
    label: "Braze, Inc. - Form 10-Q(North Star買収の開示)",
    url: "https://www.sec.gov/Archives/edgar/data/1676238/000167623823000209/brze-20231031.htm",
    kind: "法定開示",
    scope: "2023年North Star(豪州・NZ販売代理店)買収",
    checkedAt: "2026-08-07",
  },
  {
    id: "brz-fy2026-margin-detail",
    label: "Braze IR「Braze Reports Fiscal Year and Fourth Quarter 2026 Results」(詳細版)",
    url: "https://investors.braze.com/news/news-details/2026/Braze-Reports-Fiscal-Year-and-Fourth-Quarter-2026-Results/default.aspx",
    kind: "企業公式",
    scope: "非GAAP営業利益率・GAAP営業損失・NRRの詳細",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-revenue-acceleration",
    label: "Businesswire「Braze Delivers Fourth Straight Quarter of Organic Revenue Growth Acceleration」",
    url: "https://www.businesswire.com/news/home/20260527699075/en/Braze-Delivers-Fourth-Straight-Quarter-of-Organic-Revenue-Growth-Acceleration",
    kind: "企業公式",
    scope: "5四半期連続の売上成長率加速",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-q1fy27-selloff",
    label: "Motley Fool「Why Braze Stock Is Sinking Today」",
    url: "https://www.fool.com/investing/2026/05/28/why-braze-stock-is-sinking-today/",
    kind: "外部集計",
    scope: "2026年5月、利益率悪化を理由とした株価下落",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-goldman-category-call",
    label: "emailexpert.com「Goldman Backs the Orchestration Thesis, With Klaviyo as the Boldest Buy」",
    url: "https://emailexpert.com/goldman-backs-the-orchestration-thesis-with-klaviyo-as-the-boldest-buy/",
    kind: "外部集計",
    scope: "Goldman SachsによるBraze/Twilio/Klaviyoの同時カバレッジ開始",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-japan-settlement",
    label: "官報決算データベース「Braze株式会社」決算公告一覧",
    url: "https://catr.jp/companies/b5beb/171443",
    kind: "法定開示",
    scope: "日本法人 2021〜2026年(第1〜6期)の純損益・総資産(貸借対照表のみ、売上高は非開示)",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-japan-president",
    label: "MarkeZine「Braze日本法人、水谷篤尚氏が社長に就任」",
    url: "https://markezine.jp/article/detail/48081",
    kind: "外部集計",
    scope: "2024年4月の日本代表就任(水谷篤尚氏)",
    checkedAt: "2026-08-08",
  },
  {
    id: "brz-japan-datacenter",
    label: "Braze「日本国内データセンター開設」プレスリリース",
    url: "https://www.braze.com/ja/press-releases/braze-japan-data-center",
    kind: "企業公式",
    scope: "2026年3月開設予定の日本データセンター(FISC対応)",
    checkedAt: "2026-08-08",
  },
];

const brazeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Brazeは、アプリやWebサービスを展開するBtoC企業に対し、顧客データを活用してメール、プッシュ通知、アプリ内メッセージなどを最適化する顧客エンゲージメント基盤。「獲得したユーザーが定着しない」「顧客データや施策がチャネルごとに分断している」「一人ひとりに合った体験をリアルタイムで届けられない」といった課題を解決する。単なる配信ツールではなく、マーケティング、プロダクト、データ部門を巻き込みながら、売上・継続率・LTVの向上まで提案できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "BRZE",
    exchange: "NASDAQ",
    listedSince: "2021年",
    stockLinkUrl: "https://stockanalysis.com/stocks/brze/",
    growthSummary: "2011年に「Appboy」として創業し、2017年にBrazeへ改称。2021年11月にNASDAQへ上場(公開価格$65、初日+44%)。2023年には豪州・NZの独占販売代理店North Starを約2,680万ドルで買収し、APAC展開の直接運営体制を強化した。2023年以降は生成AI機能(Sage AI等)をプラットフォームへ統合し、パーソナライゼーションの高度化を進めている。FY2026通期売上は7.38億ドル(前年比+24.4%)で、直近四半期の成長率は22〜25%台と、時価総額が近い他社と比べても加速気味の高成長を維持している、というのがGenbaの読み。",
    milestones: [
      { year: "2021", label: "NASDAQ上場", detail: "公開価格$65、初日+44%の値上がりで取引開始。", sourceId: "brz-ipo" },
      { year: "2023", label: "North Starを買収しAPAC展開を強化", detail: "豪州・NZの独占販売代理店を約2,680万ドルで買収し、直接運営体制へ移行。", sourceId: "brz-northstar-acquisition" },
      { year: "2023-", label: "生成AI機能(Sage AI等)を統合", detail: "パーソナライゼーション機能の高度化を継続的に進めている。", sourceId: "brz-fy2026-results" },
      { year: "2026", label: "FY2026通期売上7.38億ドル(前年比+24.4%)", detail: "直近四半期の成長率は22〜25%台で推移し、加速気味の高成長を維持。", sourceId: "brz-fy2026-results" },
    ],
    sourceIds: ["brz-ipo", "brz-northstar-acquisition", "brz-fy2026-results", "brz-q1fy27-earnings"],
    genbaVerdict: {
      headline: "売上成長は5四半期連続で加速中。ただし「加速すればするほど赤字も広がる」という構造がまだ解けていない。",
      body: "Brazeの売上成長率はQ1 FY26の19.6%からQ1 FY27には30.2%まで、5四半期連続で加速している数少ない外資SaaSの一社。一方でGAAP営業損失はFY2026に▲1.448億ドルまで拡大(前年▲1.222億ドル)しており、非GAAPベースでは黒字化した収益性が、GAAPベースでは依然として広がり続けているという二面性がある。日本法人は逆に、赤字体質から黒字転換・急拡大という真逆の軌跡を辿っており、グローバルより一歩先を行っている、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "売上成長率が5四半期連続で加速",
        body: "四半期売上成長率はQ1 FY26 +19.6%→Q2 +23.8%→Q3 +25.5%→Q4 +27.9%→Q1 FY27 +30.2%と、5四半期連続で加速。自社も「4四半期連続のオーガニック成長加速」と公式に発表している、大型SaaSの中では珍しい逆張りの成長パターン。",
        sourceId: "brz-revenue-acceleration",
      },
      {
        title: "AI機能の利用規模が桁違いに拡大",
        body: "2025年の1年間でプラットフォームは4.5兆件のメッセージ・アクションを処理し、3.1兆件のAI判断推論を実行。新しいAIエージェント機能「Operator」はGA後数週間で顧客の3分の2以上が採用したと報告されている。ただしAI機能単体のARR・売上貢献額は開示されていない。",
        sourceId: "brz-fy2026-margin-detail",
      },
      {
        title: "140以上のパートナー統合によるエコシステムの厚み",
        body: "Snowflake・Databricks・AWS・Twilio Segment等、140以上の技術パートナー統合を持つ「Alloys」エコシステムを構築。RPO(残存履行義務)は10億ドル超(前年比+30%)まで拡大しており、契約の積み上がりという点でも成長の裏付けがある。",
        sourceId: "brz-fy2026-margin-detail",
      },
    ],
    riskHypotheses: [
      {
        title: "成長率が加速するほど、GAAPベースの赤字も広がっている",
        body: "非GAAP営業利益はFY2026に2,850万ドル(利益率3.9%)まで黒字化した一方、GAAP営業損失は▲1.448億ドル(利益率-19.6%)まで拡大(前年▲1.222億ドル)。2026年5月のQ1 FY27決算では、売上はビートしたものの利益率悪化と粗利益率の低下(69.8%→68.7%)を理由に株価が1日で最大16%下落する場面があった。",
        confidence: "中",
        evidence: [
          "GAAP営業損失がFY2026に▲1.448億ドルまで拡大(前年▲1.222億ドル)、非GAAP粗利益率も69.8%→68.7%へ低下",
          "2026年5月、売上ビートにも関わらず利益率悪化を理由に株価が1日で最大16%下落",
        ],
        counterSignal: "非GAAP営業利益・フリーキャッシュフローは着実に改善しており(FCF: 1,960万ドル→5,810万ドル)、投資判断はJPMorganが「押し目買いの好機」と評したように分かれている。純収益維持率(NRR)も108%から110〜111%へ足元で回復している。",
        sourceIds: ["brz-q1fy27-selloff", "brz-fy2026-margin-detail"],
      },
      {
        title: "Goldman Sachsが競合3社を同時にカバレッジ開始——「代替可能なカテゴリー」と見られている可能性",
        body: "Goldman SachsはBraze・Twilio・Klaviyoを「カスタマーエクスペリエンスソフトウェア」という単一カテゴリーとして同時にBuy格付けで新規カバレッジ開始した。これは市場が3社を明確に差別化された存在としてではなく、同じ予算を奪い合う代替可能な選択肢群として見ている可能性を示唆する。",
        confidence: "探索中",
        evidence: [
          "Goldman SachsがBraze・Twilio・Klaviyoを同一カテゴリーとして同時にカバレッジ開始(2026年6月)",
          "Iterable・Salesforce Marketing Cloud・MoEngage等との具体的な勝率・シェアデータは非開示",
        ],
        counterSignal: "アナリスト21名中、Strong Buy評価は15名・平均目標株価は現在値を+34%上回るなど、機関投資家からの評価自体はむしろ強気。カテゴリーとして括られること自体は、市場そのものの拡大を示すポジティブな側面もある。",
        sourceIds: ["brz-goldman-category-call"],
      },
    ],
    japanGrowth: {
      headline: "赤字続きだった日本法人が、たった1年で純利益4倍。グローバルより一歩先を行く反転。",
      narrative: "Braze株式会社(日本法人)は2020年7月設立の株式会社で、決算公告(貸借対照表のみ、売上高は非開示)を追うと、設立から4期連続で純損失を計上していた(第1期▲4,605万円→第2期▲3億3,163万円→第3期▲4億8,159万円→第4期▲3億6,110万円)。しかし第5期(2025年1月期)に+7,870万円で黒字転換し、第6期(2026年1月期)には+3億1,259万円(前年比+297.2%)まで急拡大。総資産も第6期には19.6億円(前年比+86.2%)まで倍近くに増えている。2024年4月には水谷篤尚氏(元SAP Japan)が代表取締役社長に就任しており、黒字転換のタイミングと重なる。2025年11月には金融機関のFISC(データ常駐)要件に対応するための国内データセンター開設(2026年3月予定)も発表しており、日本法人はグローバル本体に先行して黒字化と国内投資拡大の両方を実現しつつある、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "純利益が1年で約4倍に急拡大", detail: "赤字続きだった日本法人が第5期(2025年1月期)に黒字転換(+7,870万円)、第6期(2026年1月期)には+3億1,259万円(前年比+297.2%)まで拡大。総資産も同期間で+86.2%。", sourceId: "brz-japan-settlement" },
        { label: "2024年4月に水谷篤尚氏(元SAP Japan)が社長就任", detail: "黒字転換のタイミングと社長交代の時期が重なる。", sourceId: "brz-japan-president" },
        { label: "金融機関向けの国内データセンターを2026年3月開設予定", detail: "FISC(金融情報システムセンター)のデータ常駐要件に対応するため、Dentsu Digital・Hakuhodo・AWS・Snowflake・Databricks等とのパートナーシップも深化。", sourceId: "brz-japan-datacenter" },
      ],
      sourceIds: ["brz-japan-settlement", "brz-japan-president", "brz-japan-datacenter"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Brazeの売り方は「今この瞬間のユーザー行動に反応できているか」という切り口が刺さる。バッチ配信中心の既存運用と、リアルタイムのトリガー配信を対比させて語る。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "D2C・アプリ企業がプッシュ通知・メール・SMSをリアルタイムでパーソナライズするために導入し、エンタープライズ化が進行中。" },
      { title: "製品の成り立ちから見る課題", body: "Brazeはモバイルアプリ全盛期に、リアルタイムでユーザー行動に反応するクロスチャネル配信基盤として生まれた。存在理由は「バッチ配信ではなく、行動した瞬間に反応するマーケティング」。" },
      { title: "外部環境の要求から見る課題", body: "サードパーティCookie規制強化でファーストパーティデータ活用が必須になり、D2C・サブスクビジネスの成長で顧客との直接的な関係構築への投資が増えている。" },
    ],
    narrative: [
      { label: "背景", body: "企業はメール配信ツールとプッシュ通知ツールが別々で、ユーザーが今何をしたかに応じたリアルタイム対応ができていない。" },
      { label: "課題", body: "バッチ配信中心のため、カート離脱や退会予兆などの今この瞬間のシグナルに反応できず、機会損失(離脱・LTV低下)が起きている。" },
      { label: "解決策", body: "Brazeでチャネル横断のリアルタイムトリガー配信に切り替え、行動データに基づくパーソナライズを1つの基盤に統合する。" },
      { label: "選定の理由", body: "Salesforce Marketing Cloudは大規模導入に強いが導入期間が長い(半年〜1年)。Brazeは4四半期連続で成長が加速という実績と、モバイル起点のリアルタイム設計で、D2C・アプリ企業に選ばれやすい。" },
    ],
    openingHook: "アプリでカートに商品を入れたまま離脱したユーザーに、今何分後にリアクションが飛んでいますか。",
    valueHypothesis: "Q1 FY27売上成長率が30%(4四半期連続加速)という実績を根拠に、リアルタイム性がLTV改善に直結する、という価値仮説を立てる。",
    commonObjection: { objection: "今のメール配信ツールで十分", reframe: "メールだけでは今この瞬間のユーザー行動に追いつけない。チャネル追加ではなく、リアルタイム性という軸で比較し直すよう促す。" },
  },
  cultureNotes: {
    organizationReadTitle: "「Japan Cloud経由」の運営体制は、独立子会社とは違う協業のダイナミクスを生む。",
    hypothesis: {
      title: "6職種同時募集は拡大シグナル。ただし組織の意思決定構造は要確認。",
      body: "Sales Director・AE(Commercial/Enterprise)・データサイエンティスト・AIリードを同時に募集している点は、複数機能を並行して立ち上げる拡大期であることを示唆する。一方、Japan Cloud Consultingとの協業体制が、実際の意思決定・評価制度にどこまで影響するかは公開情報だけでは分からない。",
    },
    careerValue: {
      title: "「日本発SaaS企業のグロースを支えた」実績は、マーケテック領域で広く通用する。",
      body: "メルカリ・フリー・マネーフォワードといった知名度の高い企業への導入支援経験は、他のマーケティングテクノロジー企業への転職でも説明しやすい。一方、大口顧客シフトが進行中のため、今後はSMB規模の商談経験だけでは物足りなくなる可能性があり、意識的にEnterprise案件への関与を増やしたい。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "売上(2027年度Q1)",
      value: "$211M(約331億円)",
      detail: "前年比+30%(オーガニック成長率+27%)。4四半期連続の成長加速。1ドル=157円換算。",
      sourceIds: ["brz-q1fy27"],
    },
    {
      label: "RPO(残存履行義務)",
      value: "$10億超(約1,570億円超)",
      detail: "前年比+30%(2026年度第4四半期時点)。1ドル=157円換算。",
      sourceIds: ["brz-q4fy26"],
    },
    {
      label: "総顧客数",
      value: "2,170社",
      detail: "前年比+16%(2026年4月期時点)。",
      sourceIds: ["brz-q1fy27"],
    },
    {
      label: "大口顧客数(ARR50万ドル以上)",
      value: "349社",
      detail: "前年比+33%。ARR全体の65%を占める(2026年4月期時点)。",
      sourceIds: ["brz-q1fy27"],
    },
    {
      label: "Dollar-Based Net Retention",
      value: "110%",
      detail: "大口顧客コホートは111%(2026年4月期時点)。",
      sourceIds: ["brz-q1fy27"],
    },
    {
      label: "グローバル従業員数",
      value: "1,988人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceIds: ["brz-10k"],
    },
  ],
  hypotheses: [
    {
      topic: "ENTERPRISE SHIFT",
      title: "大口顧客(ARR50万ドル以上)がARRの65%を占める。中小規模から大企業シフトが進行中",
      conclusion: "ARR50万ドル以上の大口顧客が349社(前年比+33%)に達し、ARR全体の65%を占めるまでになりました。日本の求人でも「Sales Director, Enterprise」「Account Executive, Enterprise」など大企業担当ポジションが目立ち、Braze全体の戦略と日本の採用が連動していると見られます。",
      confidence: "高",
      evidence: [
        "ARR50万ドル以上の大口顧客が349社、前年比+33%、ARR全体の65%を占める",
        "2026年度第4四半期の決算で「エンタープライズセグメントの著しい強さ」に牽引され、四半期ブッキングが前年比50%超増加したと発表",
        "日本の求人でもSales Director, Enterprise、Account Executive, Enterpriseなど大企業担当職が募集されている",
      ],
      counterSignals: [
        "顧客数全体(2,170社)に占める大口顧客(349社)の比率はまだ16%程度で、中小規模顧客も引き続き事業の土台",
        "日本市場での「Enterprise」の定義(売上規模・従業員数の基準)は公開されていない",
      ],
      interviewQuestions: [
        "日本におけるEnterprise/Commercialの区切り(売上規模・従業員数)は具体的にどこにあるか",
        "大口顧客シフトの中で、中小規模顧客担当チームの位置づけはどう変わっているか",
      ],
      sourceIds: ["brz-q1fy27", "brz-q4fy26"],
    },
    {
      topic: "JAPAN OPERATING MODEL",
      title: "Japan Cloud経由の運営体制。日本参入から5年、組織拡大期にあると見られる",
      conclusion: "Braze Japanは2020年7月設立で、日本市場では大手・成長企業向けSaaSのGTM(市場参入)支援を専門とするJapan Cloud Consultingとの協業体制で採用・求人を展開しています。6件の求人(営業・データサイエンス・AI関連)が同時に掲載されている点から、複数機能を同時に強化する拡大期にあると考えられます。",
      confidence: "中",
      evidence: [
        "Braze Japanは2020年7月設立、代表は水谷篤尚氏",
        "Japan Cloud Consultingの採用ページで、Sales Director・AE(Commercial/Enterprise)・BD Manager・Data Scientist・AI Leadなど6職種を同時掲載",
        "メルカリ・フリー・マネーフォワードなど日本のスタートアップ〜メガベンチャー層への導入事例が複数公開されている",
      ],
      counterSignals: [
        "日本法人単独の従業員数は約64人(推定)と小規模で、組織の詳細な体制は非公開",
        "Japan Cloudとの協業の具体的な役割分担(採用・GTM戦略のどこまでを担うか)は公開されていない",
      ],
      interviewQuestions: [
        "Japan Cloudとの協業体制は、入社後の指揮命令系統にどう影響するか",
        "6職種が同時募集されている背景(組織拡大の具体的な計画)を教えてほしい",
      ],
      sourceIds: ["brz-japan-company", "brz-japancloud"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "クオータ達成率は全体で約45%。SDRは約1%と極端に低く、役割による差が大きい",
      conclusion: "RepVueの集計では、全体のクオータ達成率が約45%である一方、Sales Development Representativeは約1%と極端に低い数値が示されています。日本の求人はAE(Account Executive)が中心のため、SDR特有のリスクは低いと考えられますが、確認が必要です。",
      confidence: "中",
      evidence: [
        "RepVue集計で全体の達成率は約45%",
        "Sales Development Representativeの達成率は約1%と極端に低い",
        "SDRの標準OTEは85,500〜94,500ドル、ベース・変動は59/41",
      ],
      counterSignals: [
        "RepVueの母数・算出期間は非公開であり、SDRの1%という数値は極端なため単独の判断材料にはしない",
        "日本の求人はAE・Sales Director中心で、SDR相当の職種(Manager, Business Development)は募集要項が異なる",
      ],
      interviewQuestions: [
        "自分が応募するポジションの直近のクオータ達成率(実数)を教えてほしい",
        "SDRからAEへの内部異動は日本オフィスでも運用されているか",
      ],
      sourceIds: ["brz-repvue"],
    },
    {
      topic: "SALES MOTION",
      title: "「One Team」型の協業営業。マーケ・プリセールス・CSと一体で進める設計",
      conclusion: "日本の求人票では、マーケティング・プリセールス・カスタマーサクセスと「One Team」として連携することが明記されています。単独で完結する新規開拓ではなく、複数機能を巻き込みながらValue Sellingを実践する設計だと考えられます。",
      confidence: "高",
      evidence: [
        "求人票に「マーケティング、プリセールス、カスタマーサクセスチームとOne Teamとして連携」と明記",
        "Value Sellingの実践、CRM(Salesforce等)でのパイプライン管理経験が必須要件として明記",
        "Sales Director求人ではBDR・マーケティング・Value Engineeringとのgo-to-market連携が明記されている",
      ],
      counterSignals: [
        "「One Team」がどこまで実質的な連携か(単なる標語か、実際のインセンティブ設計に反映されているか)は求人票だけでは分からない",
      ],
      interviewQuestions: [
        "マーケティング・プリセールスとの連携で、直近半年の成功例と失敗例を教えてほしい",
        "パイプライン創出は自分主導かBDR経由が中心か、その比率はどれくらいか",
      ],
      sourceIds: ["brz-ae-commercial-job", "brz-ae-enterprise-job"],
    },
    {
      topic: "PRODUCT / MARKET",
      title: "モバイル・アプリ起点の顧客エンゲージメント基盤として、Salesforce/Adobeとは違う土俵で戦う",
      conclusion: "BrazeはSalesforce Marketing CloudやAdobeのようなエンタープライズCRM系ではなく、モバイル・アプリ中心の消費者向けサービス企業に強いとされています。日本の導入企業(メルカリ、フリー、マネーフォワード)もアプリ・SaaS系のB2C/B2Bハイブリッド企業が中心で、この傾向と一致します。",
      confidence: "中",
      evidence: [
        "Brazeはモバイル・アプリ内メッセージングでSFMCより「ネイティブ」とされ、消費者向けアプリ・サブスクリプション事業に強いと評価される",
        "日本の事例(メルカリ・フリー・マネーフォワード)はいずれもアプリ/SaaS系のB2C・B2Bハイブリッド企業",
        "直接の競合とされるIterableは2026年にAIエージェントスイート「Nova」を追加するなど、機能面での競争が激化している",
      ],
      counterSignals: [
        "Salesforce Marketing CloudはCRMとの二方向データ連携を武器に、既存Salesforce顧客への導入では依然として強い",
        "Adobeはコンテンツパーソナライゼーションで強みを持ち、Adobe Experience Platform導入企業では選ばれやすい",
      ],
      interviewQuestions: [
        "Iterable・Salesforce Marketing Cloud・Adobeとの競合案件で、直近の勝率・失注理由の傾向はどうか",
        "自分が担当する業界で、モバイルアプリ中心の顧客とWebブラウザ中心の顧客の比率はどれくらいか",
      ],
      sourceIds: ["brz-competitors-compare", "brz-mercari"],
    },
  ],
  customerProof: [
    {
      company: "メルカリ",
      products: "Braze(Eメール、キャンバス、A/Bテスト等)",
      outcome: "グローバル展開を支援。出品コンバージョン率の向上、プロモーションキャンペーンの効果改善、A/Bテストによる顧客LTV向上",
      implication: "日本発グローバル企業のマーケティング基盤として採用された事例。フリマ・マーケットプレイス業界への提案材料になる。",
      sourceId: "brz-mercari",
    },
    {
      company: "freee",
      products: "Braze(トリガーメール、キャンバス、A/Bテスト、Webメッセージ)",
      outcome: "個人事業主向けカゴ落ちトリガーメールで開封率77%、課金CVR7%を達成。数千万円規模のビジネスインパクトを定常的な収益基盤として創出。社内10部門・約50名が活用",
      implication: "BtoB SaaS企業がBtoC的なグロース手法を実践した事例。国内SaaS企業への提案材料になる。",
      sourceId: "brz-freee",
    },
    {
      company: "マネーフォワード",
      products: "Braze(シナリオベースジャーニー、セグメント配信)",
      outcome: "画一的だった配信を、ユーザーステータスに応じた段階的コミュニケーションへ転換。口座連携という重要ハードルの個別フォローを実現",
      implication: "金融・家計管理系サービスでのパーソナライズ配信の実例。",
      sourceId: "brz-moneyforward",
    },
  ],
  externalSignals: [
    {
      label: "営業組織の外部評価",
      value: "RepVue クオータ達成率 約45%",
      detail: "全体の達成率。SDRは約1%と職種による差が大きい。",
      caveat: "グローバル集計であり日本法人限定ではない。",
      sourceId: "brz-repvue",
    },
    {
      label: "大口顧客(ARR50万ドル以上)の拡大",
      value: "349社(前年比+33%)",
      detail: "ARR全体の65%を占める(2026年4月期時点)。",
      caveat: "日本市場単独の内訳は非公開。",
      sourceId: "brz-q1fy27",
    },
  ],
  roleLens: {
    salesMotion: "Commercial・Enterpriseどちらも新規ビジネス開拓が中心で、マーケティング・プリセールス・カスタマーサクセスとの「One Team」連携が繰り返し明記されている。Sales Director職は自らも商談に参加しながらチームをコーチするプレイングマネージャー型。",
    compensation: "日本オフィス固有の給与データは非公開。株式(equity)・401K相当・ESPP等の福利厚生は求人票で共通して明記。Sales Director等マネジメント職は配下AEのクオータ達成に連動したインセンティブ設計と推測されるが、具体的な数値は非公開。",
    quota: "RepVueの集計では全体の達成率は約45%。Sales Director求人では「5人以上のクオータ保有Enterprise AEを率いた経験」が要件化されており、個人だけでなくチーム単位のクオータ管理経験が問われる。",
    collaboration: "BDR・マーケティング・Value Engineeringとの連携がSales Director求人で明記。AE求人でもマーケティング・プリセールス・カスタマーサクセスとの「One Team」体制が前提。",
  },
  leadership: {
    name: "水谷 篤尚",
    role: "日本法人代表",
    read: "2020年7月設立と日本参入から5年が経過し、Sales Director・AE(Commercial/Enterprise)・データサイエンティスト・AIリードなど6職種を同時募集している点から、複数機能を並行して強化する拡大期にあると考えられます。メルカリ・フリー・マネーフォワードなど、日本発SaaS/アプリ企業への導入実績が積み上がっています。",
    sourceId: "brz-japan-company",
  },
  companyStats: {
    globalHeadcount: {
      value: "1,988人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceId: "brz-10k",
    },
    japanHeadcount: {
      value: "約64人(推定)",
      detail: "採用データベースによる推定値(2026年7月時点)。公式には開示されていない。",
      sourceId: "brz-japan-company",
    },
    japanOffice: {
      value: "東京都港区赤坂(赤坂ミッドタウン・タワー18階)",
      detail: "Braze株式会社本社。",
      sourceId: "brz-japan-company",
    },
    japanSince: {
      value: "2020年7月",
      detail: "Braze株式会社設立。",
      sourceId: "brz-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "メルカリ・フリー・マネーフォワードなど、日本発SaaS/アプリ企業のグロース戦略に直接関われる",
        detail: "freeeの事例では開封率77%・課金CVR7%という具体的な成果が公式に公開されており、成果が数字で語れる提案がしやすい。",
        sourceIds: ["brz-freee"],
      },
      {
        title: "大口顧客シフトが進行中で、Enterprise商談の経験を積みやすい局面にある",
        detail: "ARR50万ドル以上の大口顧客が前年比+33%で増加し、ARR全体の65%を占めるまでになっている。日本でもEnterprise専任ポジションが募集されている。",
        sourceIds: ["brz-q1fy27"],
      },
      {
        title: "マーケ・プリセールス・CSと一体で動く「One Team」型の営業スタイルを経験できる",
        detail: "単独ハンター型ではなく、複数機能を巻き込みながらValue Sellingを実践する設計。社内横断の調整力が鍛えられる。",
        sourceIds: ["brz-ae-enterprise-job"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜBrazeか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "BrazeとIterable、Salesforce Marketing Cloud、Adobeとの違いを、自分の担当予定顧客像に当てはめて具体的に説明できるか",
        why: "モバイル・アプリ中心という強みの理解度が面接で問われやすい。",
        sourceIds: ["brz-competitors-compare"],
      },
      {
        question: "自分が応募するポジションの直近のクオータ達成率(実数)を逆質問できるか",
        why: "RepVueで全体の達成率が約45%と公開されており、職種による差も大きいため確認しておきたい。",
        sourceIds: ["brz-repvue"],
      },
      {
        question: "Value Sellingの実践経験を、具体的な商談エピソードで説明できるか",
        why: "求人票で「Value Sellingを実践しながら契約の締結を目指す」ことが明記されている。",
        sourceIds: ["brz-ae-commercial-job"],
      },
      {
        question: "Japan Cloudとの協業体制が、自分の入社後の指揮命令系統にどう影響するか説明を求められるか",
        why: "日本の求人がJapan Cloud Consultingの採用ページ経由で掲載されており、体制を理解しておく必要がある。",
        sourceIds: ["brz-japancloud"],
      },
    ],
  },
  solutions: [
    {
      name: "Canvas(ジャーニーオーケストレーション)",
      valueProp: "顧客の行動・属性に応じて、複数チャネルにまたがるコミュニケーションシナリオを設計・自動化する中核機能。",
      url: "https://www.braze.com/ja/product/canvas",
      competitors: "Salesforce Marketing Cloud Journey Builder、Adobe Journey Optimizer、Iterableが主要な競合。",
      differentiation: "Salesforce Marketing Cloudは実装に6〜12ヶ月かかるとされる一方、BrazeはAPI主導でモバイル・アプリ中心の設計に強く、エンジニア主導のプロダクト企業に「ネイティブ」に馴染むと評価される。",
      retention: "マネーフォワードの事例では、Canvasによるシナリオベースのジャーニー設計で画一的だった配信を段階的コミュニケーションへ転換したと公式に紹介されている。",
    },
    {
      name: "メッセージング(Email / Push / SMS / In-App)",
      valueProp: "Eメール、プッシュ通知、SMS、アプリ内メッセージを横断した配信基盤。",
      url: "https://www.braze.com/ja/product/messaging-channels",
      competitors: "Iterable、MoEngage、Salesforce Marketing Cloudが主要な競合。",
      differentiation: "Braze・Iterable・MoEngageはオムニチャネルの広さで強く、Klaviyo・HubSpotはEメール+1チャネルの深さで強いとされる。1つのプラットフォームで広さと深さを両立するのは難しいという評価が一般的。",
      retention: "freeeの事例ではトリガーメール開封率77%、課金CVR7%という具体的な成果が公式に公開されている。",
    },
    {
      name: "A/Bテスト & 効果検証",
      valueProp: "配信内容・タイミングを比較検証し、高速でPDCAを回すための機能。",
      url: "https://www.braze.com/ja/product/reporting-analytics",
      competitors: "Iterable、Adobe Journey Optimizerが主要な競合。",
      differentiation: "freeeの事例では、A/Bテストによる高速PDCAが数千万円規模のビジネスインパクト創出に寄与したと紹介されている。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Braze Data Platform / Currents",
      valueProp: "顧客データを外部システム(データウェアハウス等)とリアルタイム連携するデータ基盤機能。",
      url: "https://www.braze.com/ja/product/data-activation",
      competitors: "Segment、mParticleなどCDP専業ベンダーが隣接する競合。",
      differentiation: "freeeの事例ではSalesforceとのリアルタイム連携(Webメッセージ経由)が活用されており、既存のCRM・データ基盤と組み合わせて使われるケースが多い。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Braze AI",
      valueProp: "生成AIによるコンテンツ最適化・パーソナライゼーションを支援する機能群。",
      url: "https://www.braze.com/ja/product/ai",
      competitors: "Iterableの「Nova」、Adobe Sensei AI、Salesforce Einsteinが主要な競合。",
      differentiation: "2026年にForgeカンファレンスでAIロードマップを発表し、四半期ブッキングが前年比50%超増加する牽引役になったとされる。競合各社も同時期にAIエージェント機能を強化しており、差別化は流動的。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Braze for Retail / E-commerce",
      valueProp: "小売・ECの購買データを活用したパーソナライズ配信の業界特化パッケージ。",
      url: "https://www.braze.com/ja/industries/retail-ecommerce",
      competitors: "MoEngage、Salesforce Marketing Cloudが主要な競合。",
      differentiation: "米国の求人では「Account Executive, Retail Scale」という専任ポジションが存在し、業界特化の営業体制が敷かれていることがうかがえる。日本での同様の専任体制の有無は確認できていない。",
      retention: "普及率・継続率のデータは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.braze.com/ja/resources/reports-and-guides/case-studies",
  fitTags: [
    "モバイル・アプリ起点のマーケティングDXに関わりたい",
    "日本発グローバル企業の成長を支えたい",
    "Enterpriseの大型商談経験を積みたい",
    "AI・パーソナライゼーション領域を極めたい",
    "複数部門と連携する「One Team」営業を経験したい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "急成長企業でスピード感を求めたい",
  ],
  comparisonMap: [
    { arena: "顧客エンゲージメント / MA", companies: ["Salesforce", "Adobe", "Iterable"], why: "マーケティングオートメーション予算の比較" },
    { arena: "CDP / データ活用", companies: ["Segment", "Adobe"], why: "顧客データ活用予算の比較" },
    { arena: "AIパーソナライゼーション", companies: ["Salesforce", "Adobe", "Iterable"], why: "AI活用マーケティング予算の比較" },
    { arena: "モバイルエンゲージメント", companies: ["MoEngage", "CleverTap"], why: "モバイルアプリ特化予算の比較" },
  ],
  sources: brazeSources,
};

const hubspotSources: ResearchSource[] = [
  {
    id: "hs-q1fy26",
    label: "HubSpot 2026年度第1四半期決算",
    url: "https://ir.hubspot.com/static-files/a4c0bbe9-83ff-47b3-89f6-259fecf58a2e",
    kind: "企業公式",
    scope: "グローバル業績・顧客数・ARPC(2026年Q1)",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-10k",
    label: "HubSpot FY2025 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1404655/000119312526046646/hubs-20251231.htm",
    kind: "法定開示",
    scope: "グローバル従業員数(地域別内訳含む)",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-japan-info",
    label: "HubSpot Japan株式会社 会社概要",
    url: "https://www.hubspot.jp/company-information",
    kind: "企業公式",
    scope: "日本法人設立日・代表者・従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-work-tokyo",
    label: "HubSpot Japan 採用ページ",
    url: "https://www.hubspot.jp/work-in-tokyo",
    kind: "企業公式",
    scope: "日本の採用情報・募集職種一覧",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-pca",
    label: "ピー・シー・エー株式会社 HubSpot導入事例",
    url: "https://www.hubspot.jp/case-studies/pca",
    kind: "企業公式",
    scope: "国内導入事例(ソフトウェア)",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-yomiuri",
    label: "読売新聞グループ HubSpot導入事例",
    url: "https://www.hubspot.jp/case-studies/yomiurigroup",
    kind: "企業公式",
    scope: "国内導入事例(メディア)",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-openmoney",
    label: "OpenMoney HubSpot Japan給与データ",
    url: "https://openmoney.jp/corporations/3515/salaries",
    kind: "外部集計",
    scope: "日本・自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-repvue",
    label: "RepVue HubSpot company reviews",
    url: "https://www.repvue.com/companies/Hubspot",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-repvue-dispute",
    label: "RepVue HubSpot Q&A(クオータ達成率への現職社員の異議)",
    url: "https://www.repvue.com/companies/Hubspot/questions/repvue-says-hubspot-has-50-quota-attainment-from-a-current-employee-that-is-nowhere-near-accurate-where-are-these-numbers-coming-from",
    kind: "コミュニティ",
    scope: "公開クオータ数値への現職社員からの異議",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-interview-prep",
    label: "corp-research.jp「HubSpot Japanへの転職チャンスをモノにする」",
    url: "https://corp-research.jp/articles/6102",
    kind: "コミュニティ",
    scope: "面接プロセス・カルチャー適合の対策記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-competitors-compare",
    label: "Business Model Analyst「Top HubSpot Competitors and Alternatives」",
    url: "https://businessmodelanalyst.com/hubspot-competitors-and-alternatives/",
    kind: "コミュニティ",
    scope: "CRM/MA製品の競合比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-ae-smb-job",
    label: "Account Executive, Small Business求人",
    url: "https://www.hubspot.com/careers/jobs/5990435",
    kind: "企業公式",
    scope: "SMB AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-ae-midmarket-job",
    label: "Senior Account Executive, Mid Market求人",
    url: "https://www.hubspot.com/careers/jobs/5990448",
    kind: "企業公式",
    scope: "Mid Market AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-ae-corporate-job",
    label: "Lead Account Executive, Corporate求人",
    url: "https://www.hubspot.com/careers/jobs/6225701",
    kind: "企業公式",
    scope: "Corporate AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-q2-2026-earnings",
    label: "HubSpot Cuts Customer Growth Outlook as AI Pivot Creates Near-Term Headwinds(BigGo Finance)",
    url: "https://finance.biggo.com/news/US_HUBS_2026-08-05",
    kind: "外部集計",
    scope: "Q2 2026決算・顧客成長鈍化とAIピボット",
    checkedAt: "2026-08-06",
  },
  {
    id: "hs-ipo",
    label: "WBUR「HubSpot Opens Trading」",
    url: "https://www.wbur.org/news/2014/10/09/hubspot-opens-trading",
    kind: "外部集計",
    scope: "2014年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "hs-growth-deceleration",
    label: "SiliconANGLE「HubSpot's Stock Plummets on Weak Sales Guidance, Slowing Growth」",
    url: "https://siliconangle.com/2025/11/05/hubspots-stock-plummets-weak-sales-guidance-slowing-growth/",
    kind: "外部集計",
    scope: "2022年以降の売上成長率の推移",
    checkedAt: "2026-08-07",
  },
  {
    id: "hs-breeze-ai",
    label: "StockTitan「HubSpot Completes Acquisition of AI-Powered Conversation」",
    url: "https://www.stocktitan.net/news/HUBS/hub-spot-completes-acquisition-of-ai-powered-conversation-4iqajbx388rg.html",
    kind: "外部集計",
    scope: "Breeze AIプラットフォーム・Frame AI買収",
    checkedAt: "2026-08-07",
  },
  {
    id: "hs-fy2025-results",
    label: "HubSpot「Reports Strong Q4 and Full Year 2025 Results」",
    url: "https://ir.hubspot.com/news-releases/news-release-details/hubspot-reports-strong-q4-and-full-year-2025-results",
    kind: "企業公式",
    scope: "FY2025通期の営業利益率(初のGAAP黒字化)",
    checkedAt: "2026-08-08",
  },
  {
    id: "hs-q2-2026-breeze-adoption",
    label: "Yahoo Finance「HubSpot Inc (HUBS) Q2 2026」決算ハイライト",
    url: "https://finance.yahoo.com/technology/ai/articles/hubspot-inc-hubs-q2-2026-051232063.html",
    kind: "外部集計",
    scope: "Breeze AI採用数・アウトカムベース課金・大型契約の伸び",
    checkedAt: "2026-08-08",
  },
  {
    id: "hs-q3-2025-selloff",
    label: "SiliconANGLE「HubSpot's Stock Plummets on Weak Sales Guidance, Slowing Growth」(詳細版)",
    url: "https://siliconangle.com/2025/11/05/hubspots-stock-plummets-weak-sales-guidance-slowing-growth/",
    kind: "外部集計",
    scope: "2025年11月の決算発表後の株価急落・新規顧客純増数の鈍化",
    checkedAt: "2026-08-08",
  },
  {
    id: "hs-japan-leadership",
    label: "HubSpot Japan「新カントリーマネージャー就任」プレスリリース",
    url: "https://www.hubspot.jp/country-manager-20260401",
    kind: "企業公式",
    scope: "2026年4月の日本代表交代(伊佐裕也氏)",
    checkedAt: "2026-08-08",
  },
  {
    id: "hs-japan-settlement",
    label: "官報決算データベース「HubSpot Japan株式会社」決算公告一覧",
    url: "https://catr.jp/companies/46a8c/32709",
    kind: "法定開示",
    scope: "日本法人 2017〜2025年の純利益・総資産(貸借対照表のみ、売上高は非開示)",
    checkedAt: "2026-08-08",
  },
];

const hubspotIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "HubSpotは、成長企業のマーケティング、営業、カスタマーサービス部門が、顧客獲得から継続支援までを一つのCRMで運営するための顧客基盤。「リード獲得を広告や属人的な営業に頼っている」「顧客情報がツールごとに分断している」「部門間の引き継ぎで商談や顧客対応が途切れる」といった課題を解決する。SMBの経営課題に入り込み、マーケティング施策から営業プロセス、サポート、Web、AI活用へ段階的に提案を拡張できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "HUBS",
    exchange: "NYSE",
    listedSince: "2014年",
    stockLinkUrl: "https://stockanalysis.com/stocks/hubs/",
    growthSummary: "2006年にBrian Halligan氏とDharmesh Shah氏がMIT在学中に創業し、2014年10月にNYSEへ上場(公開価格$25、初日+20%)。インバウンドマーケティングの概念を提唱したツールから、CRM全体をカバーするプラットフォームへ拡張してきた。2019年のPieSync買収、2023年のClearbit買収(現Breeze Intelligenceの基盤)を経て、2024年以降はAIプラットフォーム「Breeze」(Copilot・Agents・Intelligence)を軸とした製品戦略へ大きく舵を切り、2025年にはFrame AI(会話インテリジェンス)も統合した。ただし売上成長率は2022年+33.1%→2023年+25.4%→2024年+21.1%→2025年+19.2%と一貫して鈍化しており、2025年11月の決算では市場予想を下回るガイダンスで株価が急落。ハイパーグロースから成熟期へ移行しつつある局面で、AIピボットがどこまで成長を再加速できるかが焦点になっている、というのがGenbaの読み。",
    milestones: [
      { year: "2014", label: "NYSE上場", detail: "公開価格$25、初日+20%の値上がりで取引開始。", sourceId: "hs-ipo" },
      { year: "2019-23", label: "PieSync・Clearbitを買収", detail: "データ連携・エンリッチメント機能を強化し、現在のBreeze Intelligenceの基盤を構築。", sourceId: "hs-breeze-ai" },
      { year: "2024-", label: "AIプラットフォーム「Breeze」へ製品戦略をシフト", detail: "Copilot・Agents・Intelligenceの3本柱を軸に、2025年にはFrame AI(会話インテリジェンス)も買収・統合。", sourceId: "hs-breeze-ai" },
      { year: "2022-25", label: "売上成長率が33.1%から19.2%へ一貫して鈍化", detail: "2025年11月の決算では市場予想を下回るガイダンスで株価が急落。成熟期への移行が進む。", sourceId: "hs-growth-deceleration" },
    ],
    sourceIds: ["hs-ipo", "hs-breeze-ai", "hs-growth-deceleration", "hs-q2-2026-earnings"],
    genbaVerdict: {
      headline: "決算は市場予想を上回り続けているのに、株価は下がり続ける。",
      body: "2025年11月の決算は売上・EPSともに市場予想を上回るビートだったにも関わらず、翌四半期のガイダンスが市場予想をわずかに下回っただけで株価は時間外に13%超急落し、その日までの年初来下落率は30%を超えた。実際のFY2025通期は上方修正後のガイダンスすら上回って着地し、非GAAP営業利益率も過去最高を更新している。「実行力は落ちていないのに、成長率の鈍化ペースだけが売られている」という状態が続いている、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "9.8%→18.6%、一貫して改善する利益率",
        body: "非GAAP営業利益率はFY2022の9.8%からFY2025には18.6%まで一貫して改善し、FY2025はGAAPベースでも初の通期黒字化(営業利益$7.4M)を達成した。Q4 2025単体では非GAAP営業利益率22.6%と過去最高を記録している。",
        sourceId: "hs-fy2025-results",
      },
      {
        title: "Breeze AIの利用が着実に広がり、アウトカム課金へ移行",
        body: "Customer Agentは8,000社超、Prospecting Agentは10,000社超(四半期比+57%)が有効化。2026年4月からはBreezeエージェントを従量クレジットからアウトカムベース課金(解決した会話1件$0.50等)へ移行し、座席課金の外側に新しい収益源を作る動きを進めている。",
        sourceId: "hs-q2-2026-breeze-adoption",
      },
      {
        title: "アップマーケットの深耕が加速",
        body: "$120,000超の大型契約は前年比+38%で成長し、Pro Plus顧客のうち4製品以上を契約する比率は40%(前年比+6pt)に達した。中堅・SMB中心のブランドイメージとは裏腹に、実態は大型顧客深耕がここ数四半期で最も勢いのあるセグメントになっている。",
        sourceId: "hs-q2-2026-breeze-adoption",
      },
    ],
    riskHypotheses: [
      {
        title: "「ガイダンスの弱さ」だけで年初来30%超の株価下落を招くほど、市場の許容度が下がっている",
        body: "2025年11月の決算では、Q3自体は売上・EPSともに市場予想を上回るビートだったが、Q4ガイダンス($828-830M)が市場予想($836.3M)をわずかに下回っただけで株価は時間外に13%超下落。新規顧客純増数もQ3の10,900件からQ4以降は四半期9,000〜10,000件のレンジへ鈍化する見通しが示され、NRR(純収益維持率)もQ3時点で102%(前年比-1pt)と伸び悩んだ。",
        confidence: "高",
        evidence: [
          "Q4 2025ガイダンス($828-830M)が市場予想をわずかに下回っただけで株価が時間外に13%超急落、年初来下落率は30%超に達した",
          "新規顧客純増数が四半期10,900件から9,000〜10,000件のレンジへ鈍化する見通し、NRRもQ3時点で102%(前年比-1pt)",
        ],
        counterSignal: "FY2025通期は結局、上方修正後のガイダンスすら上回る$3.13B(為替調整後+18.2%)で着地し、Q4の非GAAP営業利益率は22.6%と過去最高を更新した。市場の反応と実際の着地には明確なギャップがある。",
        sourceIds: ["hs-q3-2025-selloff", "hs-fy2025-results"],
      },
      {
        title: "Breeze AIが実際にどれだけ収益に貢献しているか、会社自身も明確な数字を示していない",
        body: "利用社数(Customer Agent 8,000社超等)は開示されているが、Breeze/AI起因のARRやドル建て収益貢献は開示されていない。経営陣自身、決算説明会で「クレジットの消費量とAIの収益化は同じではない」と釘を刺しており、AI活用の広がりがそのまま収益成長に直結しているとは言い切れない。",
        confidence: "中",
        evidence: [
          "Breeze/AI起因の具体的なARR・売上貢献額が一切開示されていない",
          "CFOが決算説明会で「AI機能の利用拡大=AI収益化ではない」と明言している",
        ],
        counterSignal: "2026年4月からのアウトカムベース課金への移行は、AI機能を座席契約とは別建ての収益源として確立しようとする明確な意思表示であり、Pro Plus顧客の4製品以上契約比率の上昇(+6pt)等、周辺指標は着実に改善している。",
        sourceIds: ["hs-q2-2026-breeze-adoption"],
      },
    ],
    japanGrowth: {
      headline: "日本法人の純利益は8年で右肩上がり。ただし代表者は4年で3人交代している。",
      narrative: "HubSpot Japan株式会社は2016年設立の株式会社で、決算公告(貸借対照表のみ、売上高は非開示)を追うと、2017年・2018年は赤字だったが2019年に黒字転換し、以降は2022年+29.1%、2023年+81.2%、2024年+17.5%、2025年+47.5%と純利益が概ね右肩上がりで拡大している。総資産も2017年の1.2億円から2025年には50億円超まで、8年間で約40倍に拡大しており、事業規模自体は大きく成長していることがうかがえる。一方で日本代表(カントリーマネージャー)は、2022年時点のダン・ボグナー氏→2024年4月に須田孝雄氏→2026年4月に伊佐裕也氏(社内で2018年から在籍し、2023年から代行を務めていた人物)と、4年で3回交代している。急成長企業にありがちな組織の新陳代謝と見ることもできるが、代表交代のペースとしては速く、方針の一貫性という観点では留意しておきたい、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "純利益が9年連続で概ね拡大基調", detail: "2019年に黒字転換して以降、2025年まで純利益はほぼ一貫して増加。総資産は8年で約40倍(1.2億円→50億円超)に拡大。", sourceId: "hs-japan-settlement" },
        { label: "カントリーマネージャーが4年で3回交代", detail: "ダン・ボグナー氏(〜2022年頃)→須田孝雄氏(2024年4月)→伊佐裕也氏(2026年4月、社内在籍歴は2018年から)。", sourceId: "hs-japan-leadership" },
      ],
      sourceIds: ["hs-japan-settlement", "hs-japan-leadership"],
    },
  },
  sellingPlaybook: {
    frameIntro: "HubSpotの売り方は「限られた予算で継続的にリードを獲得する仕組み」という中堅・SMB企業の切実な課題が起点。AI検索時代における新しいインバウンド手法という文脈で語ると響きやすい。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "SMBがマーケティングブログ・SEOのインバウンド施策から入り、その後Sales HubやService Hubへクロスセルするのが典型的な拡張パターン。$120,000超の大型契約が前年比38%増というのはこの拡張が進んでいる証拠。" },
      { title: "製品の成り立ちから見る課題", body: "HubSpotは押し売り型(アウトバウンド)マーケティングへの顧客の拒否反応を背景に、コンテンツで見込み客を惹きつけるインバウンド手法を体系化するために生まれた。存在理由は「押し売りではなく、顧客に見つけてもらう仕組み」。" },
      { title: "外部環境の要求から見る課題", body: "AIエージェントによる検索結果の変化(AIが直接回答する時代)で、これまでのSEO前提のインバウンド手法自体が変化を迫られており、企業はAIに見つけてもらう新しい手法への投資判断を迫られている。" },
    ],
    narrative: [
      { label: "背景", body: "中堅・SMB企業は限られたマーケティング予算の中で、広告費をかけずに継続的にリードを獲得する仕組みが必要になっている。" },
      { label: "課題", body: "複数の点在するツール(CMS・メール・CRM)を使い回すと、リードの行動履歴が分断され、誰が今購買に近いかを判断できない。" },
      { label: "解決策", body: "HubSpotのHub群(Marketing・Sales・Service・CMS)を1つのCRM基盤の上に統合し、AIエージェント(Data Agent、Prospecting Agent等)でリードの優先順位付けから対応まで自動化する。" },
      { label: "選定の理由", body: "SalesforceはEnterprise向けの深さで強いが導入期間が長い。HubSpotは$120,000超の大型契約が前年比38%増・複数Hub導入率上昇という実績が示す通り、拡張しやすさとAI Agentの実装スピードで中堅市場に選ばれている。" },
    ],
    openingHook: "今月獲得したリードのうち、営業がフォローすべき優先順位は何を根拠に決めていますか。",
    valueHypothesis: "AI Agentをトライアル・成果報酬型の価格へ転換し試してから契約できる設計にしたことを根拠に、導入障壁を下げることで検討期間中の失注を防ぐ、という価値仮説を立てる。",
    commonObjection: { objection: "新規顧客数の伸びが鈍化していると聞いた。成長が止まっているのでは", reframe: "四半期の新規顧客数ガイダンス未達は事実だが、$120,000超の大型契約が38%増・複数Hub導入率上昇など、数から質へ の移行期にあるという文脈で説明する。" },
  },
  cultureNotes: {
    organizationReadTitle: "『カルチャーに100%マッチしない人材は採用しない』という評判の、良い面と難しい面。",
    hypothesis: {
      title: "HEART文化への適合が、スキル以上に選考を左右する可能性がある。",
      body: "HubSpotはHEART(Humble・Empathetic・Adaptable・Remarkable・Transparent)という行動指針を重視し、『カルチャーに100%マッチする人材以外は採用しない』という評判がコミュニティで語られています。実力主義でありながら協調性も強く求められる、独特のバランスが求められると考えられます。",
    },
    careerValue: {
      title: "『インバウンド方法論を実践した営業』という経験は、マーケティング理解を伴う営業として評価されやすい。",
      body: "単なる御用聞き営業ではなく、インバウンドリードの文脈を理解した提案経験は、マーケティングテクノロジー領域全般で評価されやすい。一方、セグメント(SMB/Mid Market/Corporate)ごとに要件年数が明確に段階分けされているため、自分の経験年数に見合わないセグメントに応募すると選考通過が難しい可能性がある。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "売上(2026年Q1)",
      value: "前年比+23%",
      detail: "定額為替ベースでは+18%。",
      sourceIds: ["hs-q1fy26"],
    },
    {
      label: "総顧客数",
      value: "約30万社",
      detail: "四半期の純増customersは10,800社(2026年Q1時点)。",
      sourceIds: ["hs-q1fy26"],
    },
    {
      label: "顧客あたり平均サブスク収益(ARPC)",
      value: "$11,700(約184万円)",
      detail: "定額為替ベースで前年比+2%(2026年Q1時点)。1ドル=157円換算。",
      sourceIds: ["hs-q1fy26"],
    },
    {
      label: "通期2026年ガイダンス",
      value: "$37.0億〜$37.08億(約5,810億〜5,822億円)",
      detail: "前年比+18%(定額為替ベース+17%)。1ドル=157円換算。",
      sourceIds: ["hs-q1fy26"],
    },
    {
      label: "グローバル従業員数",
      value: "8,882人",
      detail: "2025年12月末時点、Form 10-K開示値。うちアジア太平洋地域678人。",
      sourceIds: ["hs-10k"],
    },
    {
      label: "日本法人",
      value: "2016年2月設立",
      detail: "代表は伊佐裕也氏。2026年6月時点で日本従業員数は約300人(推定)。",
      sourceIds: ["hs-japan-info"],
    },
  ],
  hypotheses: [
    {
      topic: "SEGMENT STRUCTURE",
      title: "SMB/Mid Market/Corporateの3層構造。経験年数の壁が明確で、キャリアパスが読みやすい",
      conclusion: "日本の求人は「2年以上→SMB」「5年以上→Mid Market」「7年以上→Corporate」と、経験年数によって応募セグメントが明確に区分されています。他社に比べてキャリアパスが可視化されやすい設計だと考えられます。",
      confidence: "高",
      evidence: [
        "SMB AE求人は2年以上のSaaS/Web・IT製品営業経験を要件化",
        "Mid Market AE求人は5年以上、Corporate AE求人は7年以上と段階的に引き上げられている",
        "3セグメントとも職務内容(新規開拓・アップセル・インバウンド対応)は共通で、対象企業規模と経験要件だけが変わる設計",
      ],
      counterSignals: [
        "セグメント間の異動(SMBからMid Marketへの昇格等)の実際の運用・頻度は公開されていない",
        "経験年数の要件は「目安」であり、実際の採用判断がどこまで厳密に運用されているかは面接で確認が必要",
      ],
      interviewQuestions: [
        "SMBからMid Market、Mid MarketからCorporateへのステップアップは、具体的にどのような実績があれば実現するか",
        "経験年数の要件は絶対的な基準か、実績次第で柔軟に判断されるか",
      ],
      sourceIds: ["hs-ae-smb-job", "hs-ae-midmarket-job", "hs-ae-corporate-job"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "クオータ達成率は『50%』という数字に、現職社員から異議あり。公開データと現場感の差に注意",
      conclusion: "RepVueには『HubSpotのクオータ達成率は50%』という表示がありますが、現職社員から『現場の実態とはかけ離れている』という異議がQ&Aに投稿されています。SDRの達成率が約1%という極端な数値も含め、公開データの解釈には慎重さが必要です。",
      confidence: "探索中",
      evidence: [
        "RepVueのQ&Aで現職社員が『50%達成というのは全く正確でない。この数字はどこから来ているのか』と投稿",
        "Sales Managerの達成率は約52%と別途表示されている",
        "SDRの達成率は約1%と極端に低い数値が示されている",
      ],
      counterSignals: [
        "異議を投稿した社員が具体的にどのセグメント・地域の所属かは不明で、日本法人の実態を代弁しているとは限らない",
        "RepVueの母数・算出期間は非公開",
      ],
      interviewQuestions: [
        "自分が応募するセグメント(SMB/Mid Market/Corporate)の直近のクオータ達成率(実数)を教えてほしい",
        "『月次目標を常に上回る』という表現の、具体的な評価基準・達成ラインはどこにあるか",
      ],
      sourceIds: ["hs-repvue", "hs-repvue-dispute"],
    },
    {
      topic: "SALES MOTION",
      title: "Corporate(500名〜)まで一貫してインサイドセールス型。フィールドセールス中心の他社とは営業スタイルが異なる",
      conclusion: "HubSpotは500名以上のCorporateセグメントまで、訪問型ではなく電話・Web中心の商談スタイルを採用しています。Salesforceなど訪問中心のEnterprise AEとは、同じ規模の顧客を担当していても働き方が大きく異なると考えられます。",
      confidence: "中",
      evidence: [
        "Corporate AE(500名〜担当)の求人でも、電話・Web中心の商談スタイルが基本とされる",
        "インバウンド方法論を軸に、リードのフォローアップとアップセルが職務の中心に位置づけられている",
        "3セグメントとも「新規商談の創出〜クロージング」を一気通貫で担当する設計で、分業型(SDR→AE)よりも自己完結度が高い",
      ],
      counterSignals: [
        "大型のCorporate案件で訪問が全く発生しないかどうかは、求人票だけでは断定できない",
        "日本法人独自の商談スタイル(本国と同一かどうか)は確認できていない",
      ],
      interviewQuestions: [
        "Corporate案件で、訪問・対面商談が発生する頻度はどれくらいか",
        "SDR・BDRとの分業はどこまであるか、それともAEが新規開拓も一貫して担うのか",
      ],
      sourceIds: ["hs-ae-corporate-job"],
    },
    {
      topic: "CULTURE FIT",
      title: "HEART文化への適合が、選考の重要な評価軸。実力主義とカルチャーフィットの両立が求められる",
      conclusion: "HubSpotはHumble・Empathetic・Adaptable・Remarkable・Transparentという行動指針(HEART)を重視し、『カルチャーに100%マッチする人材以外は採用しない』という評判があります。スキル面の要件を満たすだけでは選考通過が難しい可能性があります。",
      confidence: "中",
      evidence: [
        "corp-research.jpの記事で『カルチャーに100%マッチする人材以外は絶対に採用しない』と紹介されている",
        "面接ではCan(スキル・経験)・Will(志向)・Must(職務要件)の3軸で評価されるとされる",
        "『あらかじめ面接対策をしないと、選考を通過する確率はかなり落ちる』という注意喚起がある",
      ],
      counterSignals: [
        "この情報は転職コンサルティング記事からの引用であり、HubSpot公式の選考基準ではない",
        "カルチャーフィットの具体的な評価方法・基準は公開されていない",
      ],
      interviewQuestions: [
        "HEARTの5つの価値観について、自分の過去の行動で説明できる具体例を用意できているか",
        "面接官はどの価値観を特に重視して評価する傾向があるか、逆質問できるか",
      ],
      sourceIds: ["hs-interview-prep"],
    },
    {
      topic: "GROWTH TRAJECTORY",
      title: "全社成長は堅調も、NRRは横ばい。新規獲得と同じくらい既存顧客維持が課題になっている",
      conclusion: "2026年Q1の売上は前年比+23%と堅調ですが、通期のNRR(Net Revenue Retention)見通しは横ばいとされ、顧客の継続利用率は『高80%台』で推移しています。新規顧客の獲得ペースは速い一方、既存顧客の維持・拡張が今後の課題になっている可能性があります。",
      confidence: "中",
      evidence: [
        "2026年Q1で顧客数が純増10,800社、約30万社に到達",
        "通期のNRR見通しは横ばい、顧客の継続率(dollar retention)は高80%台で推移",
        "ARPC(顧客あたり平均収益)は定額為替ベースで前年比+2%とほぼ横ばい",
      ],
      counterSignals: [
        "NRRの内訳(セグメント別・地域別)は公開されていないため、日本市場が同じ傾向かは不明",
        "顧客数の急増は主にSMB層の新規獲得によるものと推測されるが、公式には確認できていない",
      ],
      interviewQuestions: [
        "自分の担当セグメントで、新規獲得とアップセル・既存維持のどちらがより重視されているか",
        "解約(チャーン)防止の取り組みは、AEの評価にどう反映されるか",
      ],
      sourceIds: ["hs-q1fy26"],
    },
  ],
  customerProof: [
    {
      company: "ピー・シー・エー株式会社",
      products: "Marketing Hub / Sales Hub",
      outcome: "導入から約2年でMRR(月次経常収益)が5倍以上に拡大。リード品質・営業効率が向上し、販売代理店を含めた情報共有が実現",
      implication: "ソフトウェア企業でのマーケ・営業一体運用の成功事例。同業界への提案材料になる。",
      sourceId: "hs-pca",
    },
    {
      company: "読売新聞グループ",
      products: "Marketing Hub / Service Hub / Content Hub / Data Hub",
      outcome: "読売ID登録者数が前年比2倍以上のペースで増加。51部署600名超が全社的に活用する体制を構築。紙媒体からの置き換えでコスト削減も実現",
      implication: "伝統的なメディア企業が全社的にデータドリブン化した事例。大手企業・複数部門展開への提案材料になる。",
      sourceId: "hs-yomiuri",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "全社平均 1,217万円",
      detail: "OpenMoney自己申告データ(39件)。レンジは600万〜2,600万円。",
      caveat: "自己申告・職種混在(営業以外も含む)。SMB/Mid Market/Corporateの内訳は不明。",
      sourceId: "hs-openmoney",
    },
    {
      label: "営業組織の外部評価(要注意データ)",
      value: "RepVue クオータ達成率 『50%』に異議あり",
      detail: "Sales Managerは約52%と表示される一方、SDRは約1%。現職社員から50%という数字への異議がQ&Aに投稿されている。",
      caveat: "グローバル集計であり、数値の正確性についてコミュニティ内でも意見が分かれている。",
      sourceId: "hs-repvue-dispute",
    },
  ],
  roleLens: {
    salesMotion: "SMB(〜100名規模)は2年以上、Mid Market(101〜500名規模)は5年以上、Corporate(500名〜規模)は7年以上と、担当企業規模に応じて要求経験年数が明確に段階設計されている。Corporateも訪問型ではなく電話・Web中心のインサイドセールス型である点が、他社のEnterprise AEと異なる。",
    compensation: "米国データでは基本給75,000〜100,000ドル、OTE150,000〜210,000ドル(RepVue)。OpenMoney集計では全社平均年収1,217万円(レンジ600万〜2,600万円)。Sr・Lead等シニア職ほど高いOTEが期待されるが、日本固有の内訳は非公開。",
    quota: "全セグメント共通で「継続的に営業目標を上回ってきた実績」が求人要件。Mid Market職では「常に月次目標(MRR)以上の達成」と明記され、単なる達成ではなく超過達成が前提とされている。",
    collaboration: "インバウンドリード対応が起点のため、マーケティング・セールスエンジニアリングとの連携が前提。HEART(Humble・Empathetic・Adaptable・Remarkable・Transparent)というカルチャー適合が、スキル面と並ぶ評価軸として全セグメント共通で重視される。",
  },
  leadership: {
    name: "伊佐 裕也",
    role: "日本法人代表",
    read: "2016年2月の日本法人設立から10年が経過し、2026年6月時点で従業員数は約300人規模に成長したとされています。読売新聞グループやPCAなど、伝統的な大手企業からソフトウェア企業まで幅広い導入事例が積み上がっており、日本市場での定着が進んでいると見られます。",
    sourceId: "hs-japan-info",
  },
  companyStats: {
    globalHeadcount: {
      value: "8,882人",
      detail: "2025年12月末時点、Form 10-K開示値。うちアジア太平洋地域678人。",
      sourceId: "hs-10k",
    },
    japanHeadcount: {
      value: "約300人(推定)",
      detail: "2026年6月時点の推定値。公式には開示されていない。",
      sourceId: "hs-japan-info",
    },
    japanOffice: {
      value: "東京都千代田区丸の内(丸の内永楽ビル26F)",
      detail: "HubSpot Japan株式会社本社。",
      sourceId: "hs-japan-info",
    },
    japanSince: {
      value: "2016年2月",
      detail: "HubSpot Japan株式会社設立。営業開始は同年7月。",
      sourceId: "hs-japan-info",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "読売新聞グループ・PCAなど、業種を問わず大手〜中堅企業のDX化に関われる",
        detail: "PCAの事例ではMRRが5倍以上、読売新聞グループの事例では51部署600名超が活用するまで拡大するなど、具体的な成果が公式に公開されている。",
        sourceIds: ["hs-pca", "hs-yomiuri"],
      },
      {
        title: "SMB→Mid Market→Corporateという明確なキャリアパスで、成長を実感しやすい",
        detail: "経験年数に応じたセグメント設計になっており、自分の市場価値の伸びをポジション名の変化として説明しやすい。",
        sourceIds: ["hs-ae-smb-job", "hs-ae-midmarket-job", "hs-ae-corporate-job"],
      },
      {
        title: "インバウンド方法論を軸にした『マーケティング理解のある営業』としての経験を積める",
        detail: "単なる新規開拓ではなく、リードの文脈を理解した提案経験は、マーケティングテクノロジー領域全般で評価されやすい。",
        sourceIds: ["hs-interview-prep"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜHubSpotか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "HEART(Humble・Empathetic・Adaptable・Remarkable・Transparent)の5つの価値観について、自分の過去の行動で説明できる具体例を用意できているか",
        why: "corp-research.jpの記事で、カルチャーフィットが選考の重要な評価軸とされていると紹介されている。",
        sourceIds: ["hs-interview-prep"],
      },
      {
        question: "Can(スキル・経験)・Will(志向)・Must(職務要件)の3軸で、自分のキャリアを整理して話せるか",
        why: "この3フレームワークが面接準備の型として紹介されている。",
        sourceIds: ["hs-interview-prep"],
      },
      {
        question: "HubSpotとSalesforce、Zoho、ActiveCampaignとの違いを、自分の担当予定セグメントに当てはめて具体的に説明できるか",
        why: "競合比較の理解度は面接で問われやすい定番の質問。",
        sourceIds: ["hs-competitors-compare"],
      },
      {
        question: "自分が応募するセグメントの直近のクオータ達成率(実数)を逆質問できるか",
        why: "RepVueの達成率データに現職社員から異議が出ており、入社後のギャップを避けるために確認したい。",
        sourceIds: ["hs-repvue-dispute"],
      },
    ],
  },
  solutions: [
    {
      name: "Marketing Hub",
      valueProp: "リード獲得・ナーチャリング・キャンペーン管理を行うマーケティングオートメーション製品。",
      url: "https://www.hubspot.jp/products/marketing",
      competitors: "Salesforce Marketing Cloud、Adobe Marketo、ActiveCampaignが主要な競合。",
      differentiation: "ActiveCampaignはビジュアルなマーケティングオートメーションに強く、CRMを副次的に扱う設計。Marketing HubはCRMプラットフォームとの統合が前提で、営業・マーケティングのデータを同一基盤で扱える点が強み。",
      retention: "読売新聞グループの事例では、Marketing Hubを含む複数製品の活用で読売ID登録者数が前年比2倍以上のペースで増加したと公式に紹介されている。",
    },
    {
      name: "Sales Hub",
      valueProp: "パイプライン管理・商談トラッキング・メール自動化を行う営業支援製品。",
      url: "https://www.hubspot.jp/products/sales",
      competitors: "Salesforce Sales Cloud、Zoho CRM、Pipedriveが主要な競合。",
      differentiation: "SalesforceはEnterprise向けの高いカスタマイズ性が強みだが導入・運用の複雑さもある。Sales HubはMarketing Hubとのシームレスな統合と、比較的短期間での導入のしやすさが強みとされる。",
      retention: "PCAの事例ではSales Hub導入によりMRRが5倍以上に拡大したと公式に紹介されている。",
    },
    {
      name: "Service Hub",
      valueProp: "カスタマーサポートのチケット管理・ナレッジベース・顧客満足度調査を行う製品。",
      url: "https://www.hubspot.jp/products/service",
      competitors: "Zendesk、Salesforce Service Cloudが主要な競合。",
      differentiation: "Zendeskはサポート専業としての機能の深さに強みがあるが、Service HubはCRMデータと統合された顧客対応履歴の一元管理が強み。",
      retention: "読売新聞グループの事例で活用製品の一つとして公式に紹介されている。",
    },
    {
      name: "Content Hub",
      valueProp: "Webサイト・ブログ・SEOコンテンツの管理と最適化を行うCMS製品。",
      url: "https://www.hubspot.jp/products/cms",
      competitors: "WordPress(エンタープライズ向けプラグイン含む)、Adobe Experience Managerが主要な競合。",
      differentiation: "Adobe Experience Managerは大規模エンタープライズ向けの高度なカスタマイズ性で強いが、導入・運用コストが高い。Content HubはMarketing Hub・CRMとの統合による運用のしやすさが強み。",
      retention: "読売新聞グループの事例で活用製品の一つとして公式に紹介されている。",
    },
    {
      name: "Data Hub",
      valueProp: "複数システムに散在する顧客データを統合・同期するデータ基盤機能。",
      url: "https://www.hubspot.jp/products/data-hub",
      competitors: "Salesforce Data Cloud、Segmentが主要な競合。",
      differentiation: "SalesforceのData Cloudは大規模エンタープライズのデータ統合に強みがあるが、Data HubはHubSpotの他Hub製品とネイティブに統合されている点で、中堅企業でも扱いやすい設計とされる。",
      retention: "読売新聞グループの事例では、51部署600名超が全社的にHubSpotを活用する基盤として位置づけられている。",
    },
    {
      name: "HubSpot AI(Breeze等のAI機能)",
      valueProp: "生成AIによるコンテンツ作成・リードスコアリング・顧客対応支援を行うAI機能群。",
      url: "https://www.hubspot.jp/artificial-intelligence",
      competitors: "Salesforce Agentforce、Adobe Senseiが主要な競合。",
      differentiation: "2026年後半の決算では『AIエージェントの採用が80%増加した』と報告される一方、AIシフトに伴う短期的な顧客数成長の鈍化も指摘されている。移行期にある領域と見られる。",
      retention: "普及率・継続率のデータは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.hubspot.jp/case-studies",
  fitTags: [
    "SMBからCorporateまで明確なキャリアパスを歩みたい",
    "インバウンドマーケティングの理解を伴う営業をしたい",
    "カルチャーフィットを重視する組織で働きたい",
    "中堅〜大手企業のDX化を支援したい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "非対面(電話・Web)中心の効率的な営業スタイルを身につけたい",
    "AI・マーケティングテクノロジー領域を極めたい",
  ],
  comparisonMap: [
    { arena: "CRM / 営業支援", companies: ["Salesforce", "Zoho", "Pipedrive"], why: "営業支援ツール予算の比較" },
    { arena: "マーケティングオートメーション", companies: ["Salesforce", "Adobe", "ActiveCampaign"], why: "MA予算の比較" },
    { arena: "カスタマーサポート", companies: ["Zendesk", "Salesforce"], why: "カスタマーサポート予算の比較" },
    { arena: "CMS / コンテンツ管理", companies: ["Adobe", "WordPress(エンタープライズ)"], why: "Web/コンテンツ管理予算の比較" },
  ],
  sources: hubspotSources,
};

const oktaSources: ResearchSource[] = [
  {
    id: "okta-q1fy27-earnings",
    label: "Okta Announces First Quarter Fiscal Year 2027 Financial Results",
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-First-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx",
    kind: "企業公式",
    scope: "FY27 Q1決算・顧客数",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-ipo",
    label: "TechCrunch「Okta Finishes Up 38% in Stock Market Debut」",
    url: "https://techcrunch.com/2017/04/07/okta-finishes-up-38-in-stock-market-debut/",
    kind: "外部集計",
    scope: "2017年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-auth0-acquisition",
    label: "TechCrunch「Okta Acquires Cloud Identity Startup Auth0 for $6.5B」",
    url: "https://techcrunch.com/2021/03/03/okta-acquires-cloud-identity-startup-auth0-for-6-5b/",
    kind: "外部集計",
    scope: "2021年Auth0買収(全株式交換、$65億)",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-lapsus-breach",
    label: "The Hacker News「New Report on Okta Hack Reveals Entire Timeline」",
    url: "https://thehackernews.com/2022/03/new-report-on-okta-hack-reveals-entire.html",
    kind: "外部集計",
    scope: "2022年Lapsus$による侵害インシデント",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-github-breach",
    label: "TechCrunch「Okta Says Hackers Stole Source Code After Breaking Into Its GitHub Repositories」",
    url: "https://techcrunch.com/2022/12/22/okta-breach-source-code-github/",
    kind: "外部集計",
    scope: "2022年12月のGitHubソースコード窃取事案",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-country-manager-press",
    label: "Okta、日本法人に初の代表取締役社長を迎え日本での事業拡大に注力開始",
    url: "https://www.okta.com/ja-jp/newsroom/press-releases/okta-deepens-japanese-operations-welcomes-first-country-manager/",
    kind: "企業公式",
    scope: "日本法人設立・代表者",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-openwork",
    label: "Okta Japan株式会社 社員クチコミ(OpenWork)",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x00000S2NJk",
    kind: "コミュニティ",
    scope: "日本組織の口コミ・評判",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-openmoney",
    label: "Okta Japan 年収・給与データ(OpenMoney)",
    url: "https://openmoney.jp/corporations/9796/salaries",
    kind: "外部集計",
    scope: "日本・営業職の自己申告給与",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-employees",
    label: "Okta: Number of Employees(Macrotrends)",
    url: "https://www.macrotrends.net/stocks/charts/OKTA/okta/number-of-employees",
    kind: "外部集計",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-case-sana",
    label: "株式会社サンエーのOkta導入事例(クラスメソッド)",
    url: "https://classmethod.jp/news/cases-san-a/",
    kind: "コミュニティ",
    scope: "日本導入事例(パートナー公開)",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-case-saison",
    label: "セゾン情報システムズ様 Okta Workforce Identity導入事例(日立ソリューションズ)",
    url: "https://www.hitachi-solutions.co.jp/okta/case02/",
    kind: "コミュニティ",
    scope: "日本導入事例(パートナー公開)",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-competitor-comparison",
    label: "Best IAM Solutions of 2026: Okta vs Entra ID vs CyberArk vs Ping Identity Compared",
    url: "https://unlocked.everykey.com/best-iam-solutions-of-2026/",
    kind: "外部集計",
    scope: "IAM製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-job-sme",
    label: "Account Executive, Okta(Associate)求人",
    url: "https://job-boards.greenhouse.io/oktajp/jobs/8102278",
    kind: "企業公式",
    scope: "SMEセグメントAEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-job-auth0",
    label: "Account Executive, Auth0求人",
    url: "https://job-boards.greenhouse.io/oktajp/jobs/7374462",
    kind: "企業公式",
    scope: "Auth0 AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-job-enterprise-auth0",
    label: "Enterprise Account Executive, Auth0求人",
    url: "https://job-boards.greenhouse.io/oktajp/jobs/7597551",
    kind: "企業公式",
    scope: "Enterprise Auth0 AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "okta-fy26-results",
    label: "Okta「Announces Fourth Quarter Fiscal Year 2026 Financial Results」",
    url: "https://www.okta.com/newsroom/press-releases/okta-announces-fourth-quarter-fiscal-year-2026-financial-results/",
    kind: "企業公式",
    scope: "FY2026通期の営業利益率・新製品ブッキング比率",
    checkedAt: "2026-08-08",
  },
  {
    id: "okta-ai-agents-launch",
    label: "TIKR「Okta Stock Fell 20% in 2026: Why the April 30 Launch Changes the Math」",
    url: "https://www.tikr.com/blog/okta-stock-fell-20-in-2026-why-the-april-30-launch-changes-the-math",
    kind: "外部集計",
    scope: "AWS Marketplace経由の契約額成長、Okta for AI Agents",
    checkedAt: "2026-08-08",
  },
  {
    id: "okta-microsoft-competition",
    label: "Decryption Digest「Okta vs Microsoft Entra ID Enterprise IAM Comparison」",
    url: "https://www.decryptiondigest.com/blog/okta-vs-microsoft-entra-id-enterprise-iam-comparison",
    kind: "コミュニティ",
    scope: "IAMaaS市場でのマインドシェア推移",
    checkedAt: "2026-08-08",
  },
  {
    id: "okta-2023-support-breach",
    label: "Nightfall AI「Okta Data Breach: What Happened, Impact and Security Lessons Learned」",
    url: "https://www.nightfall.ai/blog/okta-data-breach-what-happened-impact-and-security-lessons-learned",
    kind: "外部集計",
    scope: "2023年10月のサポートケース管理システム侵害事案",
    checkedAt: "2026-08-08",
  },
  {
    id: "okta-japan-settlement",
    label: "官報決算データベース「Okta Japan株式会社」決算公告",
    url: "https://catr.jp/companies/35bfa/169662",
    kind: "法定開示",
    scope: "日本法人 第1期(2021年1月期)決算公告(以降の期は公開データベース上で確認できず)",
    checkedAt: "2026-08-08",
  },
];

const oktaIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Oktaは、IT・セキュリティ部門やアプリケーション開発組織が、従業員と顧客のIDを安全に管理するためのアイデンティティ基盤。「SaaSごとに認証が分散している」「入退社に伴う権限変更が遅く、不要なアクセスが残る」「顧客向けアプリへ安全な認証を迅速に組み込めない」といった課題を解決する。セキュリティ対策だけでなく、働き方、クラウド移行、顧客体験まで横断し、CISO、IT、開発、事業責任者を巻き込む提案ができる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "OKTA",
    exchange: "NASDAQ",
    listedSince: "2017年",
    stockLinkUrl: "https://stockanalysis.com/stocks/okta/",
    growthSummary: "2009年にTodd McKinnon氏とFrederic Kerrest氏が創業(当初社名SaaSure)し、2017年4月にNASDAQへ上場(公開価格$17、初日+38%)。2021年には開発者向けID管理のAuth0を$65億の全株式交換で買収し、自社史上最大の買収として従業員向けIDと開発者向けIDの両輪体制を築いた。しかし2022年には、サードパーティのサポートベンダー経由で攻撃者グループLapsus$に内部ツールへ侵入される事案と、同年12月にGitHub上のソースコードリポジトリが窃取される事案が相次ぎ、セキュリティ企業としての信頼が大きく揺らいだ。その後は信頼回復を進めながら、サブスクリプション売上の成長率が緩やかに再加速しており(FY26 Q1 +11.6%→Q2 +12.5%)、大口顧客(ACV$100万以上)は前年比+19%で増加中。ただしFY27の成長ガイダンスは9〜10%と、大型SaaSとして成熟局面に入りつつある、というのがGenbaの読み。",
    milestones: [
      { year: "2017", label: "NASDAQ上場", detail: "公開価格$17、初日+38%の値上がりで取引開始。", sourceId: "okta-ipo" },
      { year: "2021", label: "Auth0を$65億で買収", detail: "自社史上最大の買収。開発者向けID管理を取り込み、従業員向けIDとの両輪体制を構築。", sourceId: "okta-auth0-acquisition" },
      { year: "2022.1-3", label: "Lapsus$による侵害インシデント", detail: "サードパーティのサポートベンダー(Sitel)経由で攻撃者に内部ツールへ約5日間アクセスされた。", sourceId: "okta-lapsus-breach" },
      { year: "2022.12", label: "GitHubソースコード窃取事案", detail: "Workforce Identity Cloud関連のプライベートリポジトリが不正アクセスを受けた。本番環境・顧客データへの影響はないとOktaは説明。", sourceId: "okta-github-breach" },
      { year: "2023.10", label: "3件目のセキュリティインシデント(サポートシステム侵害)", detail: "サポートケース管理システムが窃取された認証情報経由で侵害され、報道では顧客基盤の実質全体が影響を受けうる規模だったとされる。", sourceId: "okta-2023-support-breach" },
    ],
    sourceIds: ["okta-ipo", "okta-auth0-acquisition", "okta-lapsus-breach", "okta-github-breach", "okta-2023-support-breach", "okta-q1fy27-earnings"],
    genbaVerdict: {
      headline: "利益率は着実に改善しているが、成長率でMicrosoftとの差が開きつつある。",
      body: "非GAAP営業利益率はFY24の14%からFY26には26%まで着実に改善し、AI関連の新製品(Identity Governance、Privileged Access、Okta for AI Agents)がQ4 FY26のブッキングの3割を占めるまでに育っている。一方で、IAMaaS市場でのマインドシェアはMicrosoft Entra IDの16.8%に対しOktaは8.9%まで低下(前年比)しており、増収率もFY27ガイダンスで9〜10%まで鈍化する見通し。利益体質の強化と、Microsoftとのシェア争いでの防戦という、2つの異なる戦いを同時に戦っている局面にある、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "非GAAP営業利益率がFY24の14%からFY26には26%へ改善",
        body: "FY2026通期の非GAAP営業利益は7.66億ドル(売上29.19億ドルに対し26%の利益率)。増収率が鈍化する中でも、利益体質の強化では明確な実績を積み上げている。",
        sourceId: "okta-fy26-results",
      },
      {
        title: "新製品(ID統治・AIエージェントセキュリティ)がブッキングの3割を占める",
        body: "Identity Governance、Privileged Access等の新製品は、Q4 FY26のブッキングの約3割を占め、これらを含む契約は平均契約額が約4割高い。2026年4月30日には「Okta for AI Agents」を発表し、AIエージェントのID管理という新しい領域への布石も打っている。",
        sourceId: "okta-ai-agents-launch",
      },
      {
        title: "AWS Marketplace経由の販売がFY26に前年比+45%で拡大",
        body: "AWS Marketplace経由で取引された契約額はFY26に前年比45%超で成長し、約7.5億ドル規模に達した。直販に依存しない販売チャネルの多様化が進んでいる。",
        sourceId: "okta-ai-agents-launch",
      },
    ],
    riskHypotheses: [
      {
        title: "Microsoft Entra IDとのマインドシェア争いで、明確に劣勢に立たされている",
        body: "IAMaaS市場のマインドシェア調査では、Oktaは前年比14.0%→8.9%まで低下した一方、Microsoft Entra IDは16.8%とOktaのほぼ2倍の水準を維持している。Gartnerの実行力評価でもMicrosoftが1位、Oktaが2位という順位の逆転が起きている。売上成長率も12%→13%→12%→11%→11%(Q1 FY27)と鈍化が続き、FY27通期ガイダンスは9〜10%にとどまる。",
        confidence: "高",
        evidence: [
          "IAMaaS市場のマインドシェアがOkta 8.9%に対しMicrosoft Entra ID 16.8%(前年比、約2倍の差)",
          "売上成長率が12%→11%台まで鈍化し、FY27ガイダンスは9〜10%",
        ],
        counterSignal: "MicrosoftはM365・Azureに深く標準化した顧客での優位が中心で、Google Workspace・AWS・Salesforce・Snowflake等が混在するマルチベンダー環境では、18,000以上のアプリ連携を持つOktaが依然として選ばれやすいとされる。大口顧客(ACV$100万以上)は前年比+19%で増加を続けており、購買の最終局面での信頼は失われていない。",
        sourceIds: ["okta-microsoft-competition", "okta-q1fy27-earnings"],
      },
      {
        title: "2022年の2件に続き、2023年にも3件目のセキュリティインシデントが発生していた",
        body: "2022年のLapsus$侵害・GitHubソースコード窃取に続き、2023年10月にはサポートケース管理システムが窃取された認証情報経由で侵害される事案が発生。報道では顧客基盤の実質全体が影響を受けうる規模とされ、セキュリティ企業としての信頼回復が思うように進んでいない可能性がある。純収益維持率(NRR)も複数四半期にわたり106%前後で横ばいが続いている。",
        confidence: "中",
        evidence: [
          "2022年の2件に続き、2023年10月にもサポートシステム経由の侵害インシデントが発生",
          "純収益維持率(NRR)が複数四半期にわたり106%前後で横ばい",
        ],
        counterSignal: "GartnerのMagic Quadrant(アクセス管理分野)では7年連続でリーダーに選出されており、セキュリティ企業としての第三者評価そのものは維持されている。大口顧客のACV成長が続いていることも、購買時点での信頼喪失が限定的であることを示唆する。",
        sourceIds: ["okta-2023-support-breach"],
      },
    ],
    japanGrowth: {
      headline: "日本法人の決算公告は、設立直後の1期分しか公開データベース上で確認できない。",
      narrative: "Okta Japan株式会社(2020年9月設立の株式会社)の決算公告を探すと、第1期(2021年1月期、純利益648.6万円・総資産1億4,554.8万円)のみが官報決算データベース上で確認でき、第2期以降の公告は複数の検索方法を試しても見つからなかった。小規模な株式会社では決算公告の継続的な提出が徹底されていないケースもあり、非公開化(意図的な不提出)なのか、単にデータベースの索引漏れなのかは判別できない。なお、買収したAuth0の日本法人だった「Auth0株式会社」は、同じ官報決算データベース上で「閉鎖済み」と表示されており、buyout後にOkta Japanへ統合されたとみられる。日本法人単体の直近の成長度合いを示す公開データはほぼ無く、この点は他社と比べても情報開示が薄い部類に入る、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "決算公告は設立直後の1期分のみ確認可能", detail: "第1期(2021年1月期)は純利益648.6万円・総資産1億4,554.8万円。第2期以降は公開データベース上で確認できず、継続提出の有無は不明。", sourceId: "okta-japan-settlement" },
        { label: "Auth0の日本法人は「閉鎖済み」", detail: "買収前にAuth0の日本展開を担っていた「Auth0株式会社」は、官報決算データベース上で閉鎖済みとされており、Okta Japanへの統合が進んだとみられる。", sourceId: "okta-japan-settlement" },
      ],
      sourceIds: ["okta-japan-settlement"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Oktaの売り方の起点は「ID基盤がベンダーごとに分散し、セキュリティの穴と運用負荷を生んでいる」という課題。Microsoft中心の環境か、マルチクラウド・マルチSaaS環境かで、刺さる切り口が変わる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "$100,000以上のACV顧客が前年比6%増、$1,000,000以上は19%増と大口化が進んでいる。SSO・MFAといった単一機能の導入から、全社的なID統合基盤への拡張が既存顧客の成長パターンになっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "Oktaは特定のクラウドベンダーに依存しない「ベンダーニュートラルなID基盤」として生まれた。存在理由は「Microsoft中心でも、マルチクラウドでも使えるID管理」というポジショニングにある。" },
      { title: "外部環境の要求から見る課題", body: "AIエージェントの普及により、人間だけでなくAIエージェントの認証・認可をどう管理するかが新しい論点になっており、IDセキュリティ全体への投資圧力が高まっている。" },
    ],
    narrative: [
      { label: "背景", body: "企業は複数のクラウド・SaaSアプリを使うようになり、それぞれ別々のID・パスワード管理が発生し、退職者アカウントの削除漏れなどセキュリティの穴が生まれやすくなっている。" },
      { label: "課題", body: "ID管理がアプリごとに分散していると、IT部門の運用負荷が増えるだけでなく、退職者・異動者のアクセス権限が残り続けるといったセキュリティリスクが放置されやすい。" },
      { label: "解決策", body: "Oktaで全社のID・アクセス管理を一元化し、シングルサインオン・多要素認証・自動プロビジョニングで、利便性とセキュリティを両立させる。" },
      { label: "選定の理由", body: "Microsoft Entra IDはM365環境ならライセンス込みで使えるが、Microsoft以外のSaaSとの統合は手薄になりやすい。Oktaは18,000以上のアプリ連携という広さを武器に、マルチベンダー環境の顧客に選ばれやすい。" },
    ],
    openingHook: "今使っているSaaS、退職した人のアカウントは何日以内に消えていますか。",
    valueHypothesis: "$1,000,000以上のACV顧客が前年比19%増という開示を根拠に、ID基盤への投資は一度始まると全社展開に向けて拡大しやすい、という価値仮説を立てる。",
    commonObjection: { objection: "Microsoft 365を使っているのでEntra IDで十分", reframe: "Entra IDはMicrosoft環境には強いが、Microsoft以外のSaaSとの連携数ではOktaに分がある。既存のM365投資を否定せず「Entra IDと併用しながら、Microsoft以外のアプリをカバーする」という位置づけで提案するのが有効。" },
  },
  facts: [
    { label: "FY27 Q1売上", value: "$765M(約1,201億円)", detail: "前年比+11.2%。1ドル=157円換算。", sourceIds: ["okta-q1fy27-earnings"] },
    { label: "$100K+ ACV顧客数", value: "5,180社", detail: "前年比+6%。", sourceIds: ["okta-q1fy27-earnings"] },
    { label: "$1M+ ACV顧客数", value: "570社", detail: "前年比+19%と大口顧客の伸びが加速。", sourceIds: ["okta-q1fy27-earnings"] },
    { label: "総顧客数", value: "20,000社超", detail: "FY26期末時点。", sourceIds: ["okta-q1fy27-earnings"] },
    { label: "FY27通期売上ガイダンス", value: "$3.185B〜$3.205B(約5,001億〜5,032億円)", detail: "前年比+9〜10%成長を見込む。1ドル=157円換算。", sourceIds: ["okta-q1fy27-earnings"] },
    { label: "日本法人設立", value: "2020年9月", detail: "Okta Japan株式会社。代表取締役社長は渡邉崇氏(Adobe・SAP出身)。", sourceIds: ["okta-country-manager-press"] },
  ],
  hypotheses: [
    {
      topic: "PRODUCT / MARKET STRUCTURE",
      title: "Auth0とOkta本体で、売る相手も売り方も別物。",
      conclusion: "Auth0(開発者向け)とOkta本体(従業員向け)は買い手が異なり、必要な技術理解の深さも異なる。どちらの配属になるかでキャリアの専門性が変わる。",
      confidence: "高",
      evidence: ["Auth0 AE求人は「開発者コミュニティに響く技術的発見スキル」「DevOps理解」を明記", "Okta本体のAssociate AE求人は技術経験より日本語コミュニケーション力・中小企業営業実績を重視"],
      counterSignals: ["Oktaエコシステム全体との連携が両ポジションで求められており、完全に独立した組織ではない可能性"],
      interviewQuestions: ["Auth0とOkta本体の顧客基盤はどの程度重複していますか", "配属はAuth0/Okta本体のどちらで確定していますか、選べる余地はありますか"],
      sourceIds: ["okta-job-auth0", "okta-job-sme"],
    },
    {
      topic: "COMPETITIVE PRESSURE",
      title: "最大の競合はMicrosoftの「タダ乗り」。",
      conclusion: "Microsoft Entra IDはM365ライセンスに含まれるため、コスト面で強い競合になる。Oktaは「マルチベンダー環境での統合力」を売りにする必要がある。",
      confidence: "高",
      evidence: ["Microsoft Entra IDはM365環境で追加コストなくSSO/MFA/条件付きアクセスを提供", "OktaはSaaSアプリ連携数(18,000以上)の広さで差別化"],
      counterSignals: ["FY27通期の売上成長ガイダンスが9〜10%とやや減速しており、競合圧力の影響を否定できない"],
      interviewQuestions: ["Microsoft Entra IDとの競合商談で、実際にどう差別化して勝っていますか", "直近で失注した商談の主な理由は何でしたか"],
      sourceIds: ["okta-competitor-comparison", "okta-q1fy27-earnings"],
    },
    {
      topic: "GROWTH QUALITY",
      title: "顧客数の伸びより、大口顧客の拡大が成長の中心。",
      conclusion: "$1M以上のACV顧客が前年比19%増と、既存の大口顧客への深耕が成長を牽引している。新規開拓より、既存顧客の予算拡大を引き出す提案力が問われる可能性が高い。",
      confidence: "中",
      evidence: ["$1M+ACV顧客が前年比19%増、$100K+ACV顧客は+6%と、大口ほど伸びが大きい"],
      counterSignals: ["新規ロゴ獲得を明記する求人も複数あり、新規開拓が軽視されているわけではない"],
      interviewQuestions: ["配属予定のテリトリーは新規開拓と既存拡張、どちらの比重が大きいですか"],
      sourceIds: ["okta-q1fy27-earnings"],
    },
    {
      topic: "JAPAN ORGANIZATION MATURITY",
      title: "日本法人はまだ発展途上、ブランド力に頼れない。",
      conclusion: "Okta Japanは2020年設立とまだ若く、OpenWorkの口コミには知名度の低さやパートナー協業の課題を指摘する声がある。ブランド力に頼らない、自走型の営業力が求められる。",
      confidence: "中",
      evidence: ["Okta Japan設立は2020年9月", "OpenWorkの口コミに「業績悪化、知名度低く、パートナー協業も課題」という指摘"],
      counterSignals: ["同じOpenWorkには「社員のモチベーションが高い」「自由度が高い」という肯定的な声もある"],
      interviewQuestions: ["日本市場での認知度をどう評価していますか。大手ブランドと比べた営業のしやすさは"],
      sourceIds: ["okta-openwork", "okta-country-manager-press"],
    },
    {
      topic: "COMPENSATION TRANSPARENCY",
      title: "給与レンジは非公開、自己申告データのみが頼り。",
      conclusion: "求人票に給与レンジの記載がなく、OpenMoneyの自己申告データ(Enterprise AEでベース1,200万円という一例)以外に公開情報がない。オファー交渉は個別の情報収集が前提になる。",
      confidence: "中",
      evidence: ["求人票に給与レンジの記載なし", "OpenMoney自己申告でEnterprise AEベース1,200万円+コミッションという一例のみ確認"],
      counterSignals: [],
      interviewQuestions: ["OTE・Base:Incentive比率・RSU支給条件を教えてください"],
      sourceIds: ["okta-openmoney"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "自由度は高いが、知名度に頼れない組織。",
    hypothesis: {
      title: "「モチベーションは高いが認知度は低い」という口コミの二面性。",
      body: "OpenWorkの口コミには「社員のモチベーションが高い」「自由度が高い」という肯定的な声がある一方、「知名度が低い」「パートナー協業に課題」という指摘もある。ブランド力に頼らず自分で機会を作れるかが、この組織で成果を出せるかの分かれ目になりそうだ。",
    },
    careerValue: {
      title: "ID/セキュリティという専門性は、外資SaaS全般で通用する武器になる。",
      body: "Auth0の技術理解を伴う営業経験は、他の技術系SaaS(Datadog、MongoDB、Snowflake等)への転職でも再現性を説明しやすい。ID・セキュリティ領域特有の専門性は、セキュリティ投資が拡大を続ける市場環境の中で希少価値を持ち続けると考えられる。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "サンエー",
      products: "Okta + Google Workspace",
      outcome: "沖縄の大手小売企業がセキュリティ強化と利便性向上を目的に導入(クラスメソッド支援)。",
      implication: "小売業のような多店舗・多人数組織でのID統合ニーズを示す事例。",
      sourceId: "okta-case-sana",
    },
    {
      company: "セゾン情報システムズ",
      products: "Okta Workforce Identity",
      outcome: "日立ソリューションズの支援を受けてWorkforce Identityを導入。",
      implication: "SIer・システムインテグレーターとの協業を通じた導入ルートがあることを示す。",
      sourceId: "okta-case-saison",
    },
  ],
  externalSignals: [
    {
      label: "OpenWorkの評価",
      value: "賛否両論",
      detail: "「モチベーションが高い」「自由度が高い」という声と、「知名度が低い」「パートナー協業に課題」という指摘が併存。",
      caveat: "自己申告の口コミであり、母集団・時期による偏りがある可能性。",
      sourceId: "okta-openwork",
    },
    {
      label: "$1M+ACV顧客数の伸び",
      value: "570社(前年比+19%)",
      detail: "大口顧客の拡大が続いている。",
      caveat: "IR開示の定義に基づく数値。",
      sourceId: "okta-q1fy27-earnings",
    },
  ],
  roleLens: {
    salesMotion: "Okta本体(従業員向けID)とAuth0(開発者向けID)で、売る相手も動き方も分かれる。本体は中小企業向けの新規開拓中心、Auth0はエンジニアリング・プロダクト部門への技術理解を要する提案が中心。",
    compensation: "求人票に給与レンジの記載はなく、OpenMoney自己申告でEnterprise AEベース1,200万円+コミッションという一例のみ確認できる。日本法人固有のOTE水準・Pay Mixは非公開。",
    quota: "Auth0 AEは5年以上、Enterprise Auth0 AEは8年以上と経験年数要件が明確に段階設計されている。「予測と機会衛生管理での高いエネルギー維持」という表現から、フォーキャスト精度が評価軸として重視されている。",
    collaboration: "xDR・パートナー・プリセールスを含む「Oktaエコシステム」との連携が全求人で共通して明記されている。パートナー経由の商談も多く、チャネル協業力も問われる。",
  },
  leadership: {
    name: "渡邉 崇",
    role: "Okta Japan株式会社 代表取締役社長",
    read: "Adobe・SAPなど外資テクノロジー企業で25年超のキャリアを持ち、Okta入社前はアピリオ(Salesforce関連ソリューション企業)の代表取締役社長として事業拡大を主導した人物。日本市場での外資SaaS事業拡大の経験が豊富で、2020年の日本法人設立時に初代代表として着任した。",
    sourceId: "okta-country-manager-press",
  },
  companyStats: {
    globalHeadcount: { value: "6,366人", detail: "FY2026時点(2026年1月期末)。前年から452人(+7.6%)増加。", sourceId: "okta-employees" },
    japanHeadcount: { value: "非公開", detail: "Okta Japan株式会社の正確な人数は確認できていない。" },
    japanOffice: { value: "東京", detail: "Okta Japan株式会社。" },
    japanSince: { value: "2020年9月", detail: "初代代表取締役社長として渡邉崇氏が着任。", sourceId: "okta-country-manager-press" },
  },
  salesAppeal: {
    intro: "ID/セキュリティ領域は、AIエージェントの普及に伴い認証・認可の重要性が高まっている成長市場。技術理解を武器にした提案力を鍛えられる環境。",
    points: [
      { title: "AIエージェント時代の新しい論点を扱える", detail: "人間だけでなくAIエージェントの認証・認可をどう管理するかが、ID業界全体の新しいテーマになっている。最先端の議論に日常的に触れられる。", sourceIds: ["okta-competitor-comparison"] },
      { title: "開発者向け(Auth0)と従業員向け(Okta本体)、2つの商流を経験できる", detail: "同じ会社の中でも、技術理解を要するAuth0と、幅広い業種を相手にするOkta本体とで、異なる営業スタイルを学べる。", sourceIds: ["okta-job-auth0", "okta-job-sme"] },
      { title: "18,000以上のアプリ連携という「広さ」を武器にできる", detail: "Microsoft中心の環境でも、マルチクラウド環境でも提案できる汎用性の高さが、商談の間口を広げてくれる。", sourceIds: ["okta-competitor-comparison"] },
      { title: "大口顧客の拡大が続いている伸び盛りの領域", detail: "$1M以上のACV顧客が前年比19%増と、既存顧客の投資拡大が続いており、アップセルの機会が豊富にある可能性が高い。", sourceIds: ["okta-q1fy27-earnings"] },
    ],
  },
  interviewPrep: {
    intro: "求人票だけでは分からない、Okta Japanの実態を確認するための質問例です。",
    questions: [
      { question: "Microsoft Entra IDとの競合商談で、実際にどう差別化して勝っていますか。", why: "最大の競合はコスト面で強いMicrosoftとされる。実際の勝ちパターンを聞くことで、商談の難易度をイメージできる。", sourceIds: ["okta-competitor-comparison"] },
      { question: "配属はAuth0とOkta本体のどちらになりますか。選べる余地はありますか。", why: "同じ会社でも買い手・必要スキルが異なるため、自分に合う方を確認したい。", sourceIds: ["okta-job-auth0", "okta-job-sme"] },
      { question: "OTE・Base:Incentive比率・RSU支給条件を教えてください。", why: "求人票に給与レンジの記載がなく、公開データも乏しいため、面接で直接確認する必要がある。", sourceIds: ["okta-openmoney"] },
      { question: "日本市場での認知度をどう評価していますか。大手ブランドと比べた営業のしやすさは。", why: "OpenWorkの口コミには知名度の低さを指摘する声があり、実際の商談への影響を確認したい。", sourceIds: ["okta-openwork"] },
    ],
  },
  solutions: [
    {
      name: "Workforce Identity Cloud",
      valueProp: "従業員・パートナー向けのID管理基盤。SSO・MFA・ライフサイクル管理・ID統治で、社内システムへのアクセスを一元的にセキュアにする。",
      url: "https://www.okta.com/products/workforce-identity/",
      competitors: "Microsoft Entra ID、Ping Identity、SailPointが主要な競合。",
      differentiation: "Microsoft Entra IDはM365ライセンスに含まれコスト面で強いが、Microsoft以外のSaaSとの統合は手薄になりやすい。Oktaは18,000以上のアプリ連携という広さを武器に、マルチベンダー環境の顧客に選ばれやすい。SailPointは主にID統治(ガバナンス)に特化しており、Oktaはより広いID管理領域をカバーする。",
      retention: "$100,000以上のACV顧客が前年比6%増の5,180社、$1,000,000以上のACV顧客は前年比19%増の570社(FY27 Q1決算)。大口顧客の拡大が続いており、既存顧客への追加提案が成長の一部を支えている。",
    },
    {
      name: "Auth0",
      valueProp: "開発者向けのID管理プラットフォーム。アプリケーション・AIエージェントのユーザー認証・認可をAPI経由で組み込める。",
      url: "https://auth0.com/",
      competitors: "AWS Cognito、Firebase Authentication、Ping Identityなどが主要な競合。",
      differentiation: "AWS CognitoやFirebase Authenticationは各クラウドベンダー純正のため導入しやすい反面、マルチクラウド環境では管理が分散しやすい。Auth0はクラウド非依存で、複雑な認証要件(SSO、多要素認証、カスタムログイン)にも対応できる柔軟性が差別化点とされる。",
      retention: "2021年のOkta買収後もAuth0ブランド・製品は独立運用されており、開発者コミュニティでの支持を維持している。具体的な継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.okta.com/customers/",
  fitTags: [
    "ID・セキュリティ領域を極めたい",
    "AIエージェント時代の新しい認証課題に関わりたい",
    "技術理解を伴う提案力を鍛えたい",
    "開発者向けと従業員向け、両方の商流を経験したい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "知名度に頼らず自分で機会を作りたい",
    "急成長するセキュリティ市場で経験を積みたい",
  ],
  comparisonMap: [
    { arena: "ID管理 / IAM", companies: ["Okta", "Microsoft", "Ping Identity"], why: "ID・アクセス管理予算の比較" },
    { arena: "セキュリティ全般", companies: ["Okta", "CrowdStrike"], why: "セキュリティ予算の比較" },
  ],
  sources: oktaSources,
};

const zendeskSources: ResearchSource[] = [
  {
    id: "zendesk-ipo-and-buyout",
    label: "Permira「Zendesk to be Acquired by Investor Group Led by Hellman & Friedman and Permira for $10.2 Billion」",
    url: "https://www.permira.com/news-and-insights/announcements/zendesk-to-be-acquired-by-investor-group-led-by-hellman-friedman-and-permira-for-102-billion",
    kind: "企業公式",
    scope: "2014年IPO・2022年非公開化(買収価格$77.50/株)の経緯",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-acquisition-press",
    label: "Consortium led by Hellman & Friedman and Permira completes acquisition of Zendesk",
    url: "https://www.zendesk.com/newsroom/press-releases/consortium-led-by-hellman-friedman-and-permira-completes-acquisition-of-zendesk/",
    kind: "企業公式",
    scope: "非公開化・買収完了",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-tokyo-expansion",
    label: "Zendesk Expands in Tokyo",
    url: "https://www.zendesk.com/company/press/zendesk-expands-tokyo/",
    kind: "企業公式",
    scope: "日本売上成長・東京オフィス拡張",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-stats-2026",
    label: "Zendesk Statistics 2026: AI ARR and Customer Milestones",
    url: "https://sqmagazine.co.uk/zendesk-statistics/",
    kind: "外部集計",
    scope: "AI ARR・大口顧客数・総顧客数",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-arr-estimate",
    label: "Zendesk's $1.93B Revenue($3B in 2025?)",
    url: "https://getlatka.com/blog/zendesk-revenue",
    kind: "外部集計",
    scope: "推定ARR(非公開企業のため業界推計)",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-japan-founding",
    label: "米Zendesk社が日本法人 株式会社Zendeskを設立",
    url: "https://www.zendesk.co.jp/company/press/us-company-zendesk-establishes-japanese-subsidiary-incorporating-zendesk-kk/",
    kind: "企業公式",
    scope: "日本法人設立",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-japan-president",
    label: "Zendesk日本法人社長に冨永健が就任",
    url: "https://www.zendesk.co.jp/company/press/ken-tominaga/",
    kind: "企業公式",
    scope: "日本法人代表者(2021年3月発表)",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-openwork",
    label: "Zendesk 社員クチコミ(OpenWork)",
    url: "https://www.openwork.jp/company.php?m_id=a0C100000177Se8",
    kind: "コミュニティ",
    scope: "日本組織の口コミ・評価制度",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-openmoney",
    label: "Zendesk 年収・給与制度(OpenMoney)",
    url: "https://openmoney.jp/corporations/9997/salaries",
    kind: "外部集計",
    scope: "日本・営業職の自己申告給与",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-employees",
    label: "Zendesk Number of Employees(Revelio Labs)",
    url: "https://www.reveliolabs.com/companies/zendesk/employees",
    kind: "外部集計",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-case-list",
    label: "Zendesk の導入事例一覧(デジタル化の窓口)",
    url: "https://digi-mado.jp/products/18038/case/",
    kind: "コミュニティ",
    scope: "日本導入事例(第三者集計)",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-competitor-comparison",
    label: "Zendesk Competitors: Best 7 Alternatives Compared 2026(Pylon)",
    url: "https://www.usepylon.com/blog/zendesk-competitors-2026",
    kind: "外部集計",
    scope: "カスタマーサポート製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-smb-job",
    label: "SMB Account Executive求人",
    url: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk/job/SMB-Account-Executive_R32909",
    kind: "企業公式",
    scope: "SMB AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-commercial-job",
    label: "Senior Commercial Account Executive求人",
    url: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk/job/Senior-Commercial-Account-Executive_R33688-4",
    kind: "企業公式",
    scope: "Senior Commercial AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "zendesk-ai-momentum",
    label: "Zendesk「Zendesk Secures Key Industry Recognition as Its AI-First Strategy Gains Momentum」",
    url: "https://www.prnewswire.com/news-releases/zendesk-secures-key-industry-recognition-as-its-ai-first-strategy-gains-momentum-302711393.html",
    kind: "企業公式",
    scope: "AI ARRの実績・見通し、Forrester Wave評価",
    checkedAt: "2026-08-08",
  },
  {
    id: "zendesk-marketplace-moat",
    label: "Zendesk公式ブログ「Zendesk Marketplace」拡大状況",
    url: "https://www.zendesk.co.jp/blog/zendesk-marketplace/",
    kind: "企業公式",
    scope: "マーケットプレイスのアプリ数・導入率",
    checkedAt: "2026-08-08",
  },
  {
    id: "zendesk-ai-competitor-benchmark",
    label: "usefini.com「Zendesk vs Intercom AI Support Alternatives」比較記事",
    url: "https://www.usefini.com/guides/zendesk-vs-intercom-ai-support-alternatives",
    kind: "コミュニティ",
    scope: "AIエージェントの解決率比較(Forrester集計の二次引用)",
    checkedAt: "2026-08-08",
  },
  {
    id: "zendesk-lbo-debt",
    label: "Axios「Zendesk LBO Debt Financing」(2022年6月)",
    url: "https://www.kore1.com/zendesk-layoffs-2026/",
    kind: "外部集計",
    scope: "PE買収時の負債規模と人員削減の経緯",
    checkedAt: "2026-08-08",
  },
  {
    id: "zendesk-japan-leadership-2025",
    label: "PR TIMES「合同会社Zendesk、森太郎氏が代表執行役社長に就任」",
    url: "https://prtimes.jp/main/html/rd/p/000000049.000064750.html",
    kind: "企業公式",
    scope: "2025年7月の日本代表交代(森太郎氏)・日本チーム人員規模",
    checkedAt: "2026-08-08",
  },
  {
    id: "zendesk-japan-growth-interview",
    label: "マイナビニュース「Zendesk CEOが語る日本市場戦略」",
    url: "https://news.mynavi.jp/techplus/article/20251104-3624744/",
    kind: "外部集計",
    scope: "日本売上の世界順位・2桁成長・AI活用状況",
    checkedAt: "2026-08-08",
  },
];

const zendeskIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Zendeskは、カスタマーサポート部門がメール、チャット、電話などの問い合わせを統合し、AIと人で迅速に解決するための顧客対応基盤。「問い合わせが増えて対応が追いつかない」「チャネルごとに履歴が分断している」「担当者によって品質や解決時間に差が出る」といった課題を解決する。顧客満足度とサポートコストという両方の経営指標を扱い、チケット管理からAI自動化や業務改革へ提案を広げられる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2007年にコペンハーゲンでMikkel Svane氏ら3名が創業し、2009年に本社をカリフォルニアへ移転。2014年5月にNYSEへ上場したが、2022年6月にHellman & FriedmanとPermira主導の投資家グループによる買収(1株$77.50、企業価値約102億ドルの全額現金)が発表され、同年11月22日に買収完了・上場廃止となった。非公開化後はPE傘下で収益性・効率性重視の経営へ転換しつつ、AI自動化(Resolution Platform)への投資を加速。財務詳細の開示は限定的だが、AI関連ARRは非公開化直後のほぼゼロから2025年末には約2億ドルまで拡大し、2026年は最大5億ドルを見込むなど、非公開化後も明確な成長シグナルが確認できる、というのがGenbaの読み。",
    ipoOutlookSummary: "2026年8月時点で、IPO(再上場)に関する公式な計画発表は確認できていない。プライベートエクイティ(PE)による買収は一般的に数年程度で売却・再上場等のイグジットを目指すケースが多いとされるが、これはZendesk固有の確認情報ではなく業界一般の傾向であり、具体的な時期を推測する根拠にはならない。日本事業は前年比約50%成長と、非公開化後も投資が継続していることを示すシグナルがある。",
    milestones: [
      { year: "2007", label: "コペンハーゲンで創業", detail: "Mikkel Svane氏ら3名が設立。2009年に本社をカリフォルニアへ移転。", sourceId: "zendesk-ipo-and-buyout" },
      { year: "2014", label: "NYSE上場", detail: "ティッカーZENでNYSEへ上場。", sourceId: "zendesk-ipo-and-buyout" },
      { year: "2022", label: "$102億ドルで非公開化", detail: "Hellman & FriedmanとPermira主導の投資家グループが1株$77.50の全額現金で買収し、NYSE上場廃止。", sourceId: "zendesk-acquisition-press" },
      { year: "2025-26", label: "AI関連ARRが急拡大", detail: "非公開化直後のほぼゼロから2025年末に約2億ドルへ拡大、2026年は最大5億ドルを見込む。", sourceId: "zendesk-stats-2026" },
    ],
    sourceIds: ["zendesk-ipo-and-buyout", "zendesk-acquisition-press", "zendesk-tokyo-expansion", "zendesk-stats-2026"],
    genbaVerdict: {
      headline: "PE傘下の負債とリストラの陰で、AI ARRはほぼゼロから2億ドルへ——非公開化は「守り」ではなく「攻め」の投資だった。",
      body: "2022年の非公開化は約110億ドル(うち大部分が負債)というレバレッジド・バイアウトで、その後複数回のレイオフを伴う効率化が進んだ。しかし同時にAI関連ARRは非公開化直後のほぼゼロから2025年末に2億ドルへ急拡大し、2026年は最大5億ドルを見込む。日本市場では「グローバル8位の売上規模からトップ5入りを目指す」と経営陣自ら明言しており、コスト規律とAI投資の両輪を回せるかが今後の焦点、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "AI ARRがほぼゼロから2億ドルへ、2026年は最大5億ドルを見込む",
        body: "2025年末時点でAI ARRは2億ドル(前年はほぼゼロ)、AI製品を利用する顧客は2万社超に達した。2026年通期のガイダンスは最大5億ドル(前年比約150%増)。Forrester Wave(2026年Q1)では評価項目13項目で最高評価「Superior」を獲得している。",
        sourceId: "zendesk-ai-momentum",
      },
      {
        title: "マーケットプレイスの厚みによる乗り換えコストの高さ",
        body: "Zendeskマーケットプレイスは1,800以上のアプリ・パートナー統合を持ち、顧客の58%が1つ以上のアプリを導入済み。アプリを導入している顧客が年間売上の約75%を占めており、単純な価格競争では代替されにくいエコシステムの厚みがある。",
        sourceId: "zendesk-marketplace-moat",
      },
      {
        title: "日本市場を「グローバル8位からトップ5」に押し上げる方針",
        body: "CEOのTom Eggemeier氏は日本市場について「新規受注・売上ともに2桁成長」「AIセグメントは前年比100%超の成長」と明言し、グローバルでの売上順位を現在の8位からトップ5へ引き上げたいと発言している。",
        sourceId: "zendesk-japan-growth-interview",
      },
    ],
    riskHypotheses: [
      {
        title: "AIネイティブ競合(Intercom等)に解決率で先行されている可能性",
        body: "第三者による比較記事(Forrester集計の二次引用)では、Zendesk AI Agentsの解決率が約38%とされる一方、Intercom Finは約50%(Intercomの自社発表では76%)とされている。出典の性質上、数値そのものは慎重に扱う必要があるが、AIエージェントの解決精度という土俵で競合と比較される場面が増えている。",
        confidence: "探索中",
        evidence: [
          "第三者比較記事でZendesk AI Agentsの解決率が約38%、Intercom Finが約50%とされる(Forrester集計の二次引用、一次資料未確認)",
          "Intercomは自社発表で解決率76%・1件あたり$0.99という成果報酬型の価格を打ち出している",
        ],
        counterSignal: "ZendeskはForrester Wave(2026年Q1)で評価13項目中最高評価「Superior」を獲得しており、第三者評価機関の総合評価では強みを見せている。またAI ARRの実際の拡大ペース(ほぼゼロ→2億ドル→最大5億ドル見込み)は、少なくとも商業的にはAI競争で後れを取っていないことを示唆する。",
        sourceIds: ["zendesk-ai-competitor-benchmark", "zendesk-ai-momentum"],
      },
      {
        title: "PE買収時の負債とリストラが、投資余力・人材定着に影を落としている可能性",
        body: "2022年の買収は総額約50億ドル規模の負債(SOFR+6.25%、実質金利11%台とされる一部トランシェを含む)で調達されており、重い元利払い負担を抱える。非公開化以降、カリフォルニアで3回のWARN通知(計199人)、2026年1月にはダブリン拠点で約350人(同拠点の約半数)を削減するなど、複数回のレイオフが確認されている。",
        confidence: "中",
        evidence: [
          "2022年の買収は総額約50億ドル規模の負債で調達され、一部トランシェは実質金利11%台とされる",
          "非公開化以降、カリフォルニアで3回のWARN通知(計199人)、2026年1月にダブリン拠点で約350人(同拠点の約半数)を削減",
        ],
        counterSignal: "レイオフと同時に、グローバル全体の人員数はむしろ前年比+10.3%増(約6,821〜6,970人)と増加しており、ダブリンの削減は「地理的な拠点再編」であって全社的な縮小ではないとされる。会社側は2026年に全社的なエンジニア削減は予定していないと説明し、インド・フィリピン等の低コスト拠点への再配置(投資の継続)が実態に近いとみられる。",
        sourceIds: ["zendesk-lbo-debt"],
      },
    ],
    japanGrowth: {
      headline: "日本代表が1年で交代。それでも「2桁成長」を掲げ続けられるかが焦点。",
      narrative: "合同会社Zendeskは合同会社のため決算公告の義務がなく、日本法人単体の売上・利益は非公開。ただしCEOのTom Eggemeier氏自身が「日本は新規受注・売上ともに2桁成長」「AIセグメントは前年比100%超」「主要顧客の約7割が既にAIエージェントを利用」と繰り返し発言しており、グローバル本社が名指しで力を入れている市場であることがうかがえる。2025年5月には日本代表(冨永健氏)がjinjer株式会社のCEOへ転出し、後任として2025年7月に森太郎氏(元SAP Japan・Oracle Japan)が代表執行役社長に就任した。日本チームの人員規模は営業・コンサルティング・カスタマーサクセスを合わせて約80名とされる。2025年10〜11月には金融機関向けのコンタクトセンター新製品を日本でも正式提供開始し、SIerのUNIADEXを新たな販売パートナーに迎えるなど、代表交代と並行して製品・パートナー展開は継続している、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "CEOが名指しで「2桁成長」「AIセグメント+100%」と明言", detail: "日本の新規受注・売上ともに2桁成長、AIセグメントは前年比100%超、主要顧客の約7割がAIエージェントを利用済みとCEO自ら発言。グローバル売上順位は現在8位、トップ5入りを目指すとしている。", sourceId: "zendesk-japan-growth-interview" },
        { label: "2025年7月に日本代表が交代", detail: "冨永健氏(2021年3月就任)がjinjer株式会社のCEOへ転出し、森太郎氏(元SAP Japan・Oracle Japan)が後任に。日本チームは営業・コンサル・CSで約80名。", sourceId: "zendesk-japan-leadership-2025" },
      ],
      sourceIds: ["zendesk-japan-growth-interview", "zendesk-japan-leadership-2025"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Zendeskの売り方の起点は「サポートチケットが増え続け、対応品質もスピードも落ちている」という課題。Salesforce Service Cloudほど大掛かりでなく、Freshdeskより高機能という「ちょうど良さ」を軸に語る。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "$1M以上のACV顧客が前年比65%増と大口化が進んでいる。チケット管理という単機能導入から、AI機能を含めた全社的なCX基盤への拡張が既存顧客の成長パターンになっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "Zendeskはサポートチケットの管理が煩雑化し、SLA(対応時間の約束)を守れなくなるという課題を解消するために、シンプルなチケット管理ツールとして生まれた。19年分のサポートデータの蓄積が、今はAI機能の学習データという新しい価値に転化している。" },
      { title: "外部環境の要求から見る課題", body: "AIエージェントによる一次対応の自動化が業界標準になりつつあり、従来型の人力チケット処理だけでは対応コストで競合に劣後するという危機感が企業側に生まれている。" },
    ],
    narrative: [
      { label: "背景", body: "問い合わせ件数が増えるにつれ、メールや電話だけでの対応では抜け漏れやSLA違反が発生しやすくなる。" },
      { label: "課題", body: "チケットの管理が属人化・煩雑化し、対応漏れ・二重対応・応答時間の長期化が顧客満足度を下げている。" },
      { label: "解決策", body: "Zendeskでチケットを一元管理し、オムニチャネル対応とAIによる一次対応の自動化で、対応品質とスピードを両立させる。" },
      { label: "選定の理由", body: "Salesforce Service Cloudは営業データとの統合に強いが大掛かりになりやすく、Freshdeskは低価格だが統合数(300以上)がZendesk(1,000以上)より少ない。Zendeskは「導入のしやすさ」と「拡張性」の中間という立ち位置で選ばれやすい。" },
    ],
    openingHook: "今、1件の問い合わせに対応するまで平均何分かかっていますか。",
    valueHypothesis: "$1M以上のACV顧客が前年比65%増という開示を根拠に、チケット管理という入り口から入った顧客ほど、AI機能を含めた全社展開に進みやすい、という価値仮説を立てる。",
    commonObjection: { objection: "Salesforceを使っているのでService Cloudで十分では", reframe: "Service Cloudは営業データとの統合に強いが、サポート専業ツールとしての導入スピード・使いやすさではZendeskに分がある。Salesforceとの連携を前提に「サポート専業部分だけZendeskに任せる」という併用提案が有効。" },
  },
  facts: [
    { label: "推定ARR", value: "約$2.0B(約3,140億円)", detail: "2025年末時点の業界推計値。非公開企業のため公式開示ではない。1ドル=157円換算。", sourceIds: ["zendesk-arr-estimate"] },
    { label: "AI ARR", value: "$200M(約314億円)→$400M〜$500M予測", detail: "2025年末実績から2026年見込みへの成長率は+100〜150%。1ドル=157円換算。", sourceIds: ["zendesk-stats-2026"] },
    { label: "$1M以上ACV顧客数", value: "140社", detail: "前年比+65%。", sourceIds: ["zendesk-stats-2026"] },
    { label: "総顧客数", value: "約18万社", detail: "6senseの2026年テレメトリー集計による推計。", sourceIds: ["zendesk-stats-2026"] },
    { label: "非公開化", value: "2022年11月", detail: "Hellman & FriedmanとPermira主導の投資家グループが約102億ドルで買収、NYSE上場廃止。", sourceIds: ["zendesk-acquisition-press"] },
    { label: "日本法人設立", value: "2013年2月", detail: "米Zendesk社の5番目の現地法人として設立。日本売上は前年比約50%成長。", sourceIds: ["zendesk-japan-founding", "zendesk-tokyo-expansion"] },
  ],
  hypotheses: [
    {
      topic: "OWNERSHIP STRUCTURE",
      title: "非公開化で身軽になったが、外部からは見えにくい会社に。",
      conclusion: "2022年のPE買収でNYSE上場廃止となり、詳細な財務開示義務がなくなった。長期目線の投資判断がしやすくなった半面、候補者が入手できる情報は限定的。",
      confidence: "高",
      evidence: ["2022年11月に約102億ドルで非公開化", "四半期決算のような定期開示が確認できない"],
      counterSignals: ["業界推計ではARR約$2.0Bという情報が複数のメディアで報じられている"],
      interviewQuestions: ["非公開化以降、営業組織の投資方針にどんな変化がありましたか"],
      sourceIds: ["zendesk-acquisition-press"],
    },
    {
      topic: "JAPAN GROWTH MOMENTUM",
      title: "日本は「トップ10市場」、成長率も高い。",
      conclusion: "日本売上は前年比約50%成長とグローバル平均を上回るペースで拡大しており、東京オフィスも拡張済み。日本組織への投資が続いている強いシグナル。",
      confidence: "高",
      evidence: ["日本売上が前年比約50%成長、グローバルトップ10市場の一つ", "東京都中央区京橋にオフィスを拡張"],
      counterSignals: [],
      interviewQuestions: ["日本チームの人員は直近1年でどれくらい増えましたか"],
      sourceIds: ["zendesk-tokyo-expansion"],
    },
    {
      topic: "AI PRODUCT MOMENTUM",
      title: "AI ARRが急拡大、営業の売り方も変わりつつある。",
      conclusion: "AI ARRは2025年末の$200Mから2026年に$400M〜$500Mへの成長を見込んでおり、AIエージェント機能の販売が営業の重要なテーマになっていると考えられる。",
      confidence: "中",
      evidence: ["AI ARRが前年比100〜150%成長の見込み"],
      counterSignals: ["AI ARRの定義・算出方法の詳細は非公開"],
      interviewQuestions: ["AI関連機能の商談は、通常のチケット管理機能の商談とどう違いますか"],
      sourceIds: ["zendesk-stats-2026"],
    },
    {
      topic: "COMPENSATION CULTURE",
      title: "外資ITらしい「実績が全て」の評価文化。",
      conclusion: "OpenWorkの口コミでは評価制度について「実績(予算達成率)が全て」と評されており、年功ではなく数字による評価が徹底されていると考えられる。",
      confidence: "中",
      evidence: ["OpenWork口コミ「外資ITなので、実績(予算達成率)が全て」"],
      counterSignals: [],
      interviewQuestions: ["未達だった場合のパフォーマンス改善プロセスはどうなっていますか"],
      sourceIds: ["zendesk-openwork"],
    },
    {
      topic: "COMPETITIVE POSITIONING",
      title: "Salesforceより軽量、Freshdeskより高機能という中間ポジション。",
      conclusion: "Salesforce Service Cloudほど大掛かりでなく、Freshdeskよりも機能・連携数で上回るという「ちょうど良さ」がZendeskのポジショニング。この立ち位置を商談でどう語れるかが提案力の差になる。",
      confidence: "中",
      evidence: ["1,000以上のネイティブ統合、Freshdeskは300以上", "Salesforce Service Cloudは営業・サポートを一体化した「360度ビュー」が強み"],
      counterSignals: ["Intercomのような会話型サポートへのシフトが進むと、従来型チケット管理という立ち位置自体が競争力を失うリスクがある"],
      interviewQuestions: ["Intercomのような会話型サポートツールとの競合で、どう差別化していますか"],
      sourceIds: ["zendesk-competitor-comparison"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "PE傘下で「数字がすべて」、日本は成長エンジンの一つ。",
    hypothesis: {
      title: "非公開化後も、日本への投資は継続・加速している。",
      body: "PE買収後は一般的にコスト規律が強まる印象があるが、Zendesk Japanはオフィス拡張・前年比約50%成長という、投資継続を示すシグナルが確認できる。日本は数少ない「伸びている外資」の一つと言えそうだ。",
    },
    careerValue: {
      title: "CX(顧客体験)領域の実績は、SaaS全般に転用しやすい。",
      body: "カスタマーサポート・CX領域での新規開拓・既存拡張の経験は、Salesforce・HubSpotなど隣接するCRM/SaaS企業への転職でも再現性を説明しやすい。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "東京電力エナジーパートナー",
      products: "Zendesk for Service",
      outcome: "大手電力小売企業がカスタマーサポート基盤として導入(第三者集計記事による)。",
      implication: "インフラ・公益企業のような大規模コールセンター運用でのZendesk活用実績。",
      sourceId: "zendesk-case-list",
    },
    {
      company: "サイバーエージェント",
      products: "Zendesk for Service",
      outcome: "国内大手IT企業がカスタマーサポート基盤として導入(第三者集計記事による)。",
      implication: "国内テック企業でもZendeskが選ばれていることを示す事例。",
      sourceId: "zendesk-case-list",
    },
  ],
  externalSignals: [
    {
      label: "日本売上成長率",
      value: "前年比約50%",
      detail: "グローバルトップ10市場の一つとされる。",
      caveat: "Zendesk公式プレスリリースの表現に基づく、具体的な金額の裏付けはない。",
      sourceId: "zendesk-tokyo-expansion",
    },
    {
      label: "$1M以上ACV顧客数の伸び",
      value: "140社(前年比+65%)",
      detail: "大口顧客の拡大が続いている。",
      caveat: "第三者集計(6sense等)による推計値。",
      sourceId: "zendesk-stats-2026",
    },
  ],
  roleLens: {
    salesMotion: "SMBは新規開拓とアップセルの両立、Senior Commercialは新規のハンティングと既存アカウントの維持・拡大をより大きな裁量で担う。両セグメントとも「ハンティング」の要素が明確に求められる。",
    compensation: "OpenMoney集計で全社平均年収1,332万円、営業職平均1,420万円(レンジ810万〜2,500万円)。基本給+インセンティブ+RSU+携帯手当という設計。セグメント別の内訳は非公開。",
    quota: "求人票に具体的なクオータ額の記載はない。OpenWorkの口コミでは「実績(予算達成率)が全て」という評価文化が示唆されている。",
    collaboration: "Senior Commercial職では「リソースチームを率いる」ことが明記されており、単独商談だけでなく社内の関連チームを動かす調整力も問われる。",
  },
  leadership: {
    name: "冨永 健",
    role: "Zendesk日本法人 社長",
    read: "テクノロジー業界で23年以上のビジネス・マネジメント経験を持つ人物として、2021年3月に日本法人社長に就任したことが公式発表されている。2026年時点で同職を継続しているかどうかの最新確認はできていない。",
    sourceId: "zendesk-japan-president",
  },
  companyStats: {
    globalHeadcount: { value: "約7,000人", detail: "2026年時点の推計。集計元・時期により6,970人〜7,800人台まで幅がある。", sourceId: "zendesk-employees" },
    japanHeadcount: { value: "非公開", detail: "合同会社Zendeskの正確な人数は確認できていない。" },
    japanOffice: { value: "東京(京橋)", detail: "合同会社Zendesk。オフィスを拡張済み。", sourceId: "zendesk-tokyo-expansion" },
    japanSince: { value: "2013年2月", detail: "米Zendesk社の5番目の現地法人として設立。", sourceId: "zendesk-japan-founding" },
  },
  salesAppeal: {
    intro: "PE傘下で非公開化した後も日本事業は前年比約50%成長と勢いがあり、AI ARRの急拡大という新しいテーマも扱える環境。",
    points: [
      { title: "「伸びている外資」という希少な立ち位置", detail: "日本売上が前年比約50%成長し、グローバルトップ10市場の一つとされる。停滞気味の外資も多い中、明確な成長シグナルがある。", sourceIds: ["zendesk-tokyo-expansion"] },
      { title: "AI ARR急拡大の最前線に立てる", detail: "AI ARRが2025年末の$200Mから2026年に$400M〜$500Mへ拡大見込み。AIプロダクトの商談経験を積める。", sourceIds: ["zendesk-stats-2026"] },
      { title: "新規開拓と既存深耕、両方の筋肉を鍛えられる", detail: "SMB・Commercialとも新規のハンティングと既存アカウント拡張の両方が求人に明記されており、営業として汎用性の高い経験が積める。", sourceIds: ["zendesk-smb-job", "zendesk-commercial-job"] },
      { title: "PE傘下ならではの「数字がすべて」の実力主義", detail: "OpenWorkの口コミでは評価が実績(予算達成率)ベースと評されており、成果を出せば正当に評価されやすい環境と考えられる。", sourceIds: ["zendesk-openwork"] },
    ],
  },
  interviewPrep: {
    intro: "非公開化企業ゆえに公開情報が少ないZendesk Japanについて、面接で確認したい質問例です。",
    questions: [
      { question: "非公開化以降、営業組織の投資方針にどんな変化がありましたか。", why: "PE傘下でのコスト規律と、日本の成長投資が両立しているかを確認したい。", sourceIds: ["zendesk-acquisition-press"] },
      { question: "日本チームの人員は直近1年でどれくらい増えましたか。", why: "前年比50%成長という数字の裏付けとして、実際の組織拡大ペースを知りたい。", sourceIds: ["zendesk-tokyo-expansion"] },
      { question: "OTE・Base:Incentive比率・RSU支給条件を教えてください。", why: "OpenMoneyの自己申告データ以外に公開情報がなく、面接で直接確認する必要がある。", sourceIds: ["zendesk-openmoney"] },
      { question: "Intercomのような会話型サポートツールとの競合で、どう差別化していますか。", why: "従来型チケット管理から会話型サポートへのシフトという業界トレンドへの対応力を確認したい。", sourceIds: ["zendesk-competitor-comparison"] },
    ],
  },
  solutions: [
    {
      name: "Zendesk for Service",
      valueProp: "チケット管理・オムニチャネル対応・SLA管理を軸にしたカスタマーサポート基盤。",
      url: "https://www.zendesk.com/service/",
      competitors: "Salesforce Service Cloud、Freshdesk、Intercomが主要な競合。",
      differentiation: "Salesforce Service Cloudは営業・サポートを一体化した360度ビューが強みだが大掛かりになりやすい。Freshdeskは低価格・シンプルさが強みだが統合数(300以上)がZendesk(1,000以上)より少ない。IntercomはAI会話型サポートに強いが、大規模なチケット処理・SLA管理という従来型の強みではZendeskに分がある。",
      retention: "$1M以上のACV顧客が前年比65%増の140社(6sense集計)。大口顧客の拡大が継続している。",
    },
    {
      name: "Zendesk AI",
      valueProp: "問い合わせ内容の自動分類・自動応答・エージェント支援を行うAI機能群。",
      url: "https://www.zendesk.com/service/ai/",
      competitors: "Intercom Fin AI、Salesforce Agentforceなどが主要な競合。",
      differentiation: "19年分のサポートチケットデータを学習データとして活用できる点が差別化ポイントとされる。既存顧客への追加提案(アップセル)の主力商材になっている。",
      retention: "AI ARRは2025年末の$200Mから2026年に$400M〜$500Mへの成長を見込む。",
    },
  ],
  customerStoriesUrl: "https://www.zendesk.co.jp/blog/customer-experience-customer-stories-jp/",
  fitTags: [
    "カスタマーサポート/CX領域を極めたい",
    "新規開拓と既存深耕、両方を経験したい",
    "AI ARR急拡大の最前線に立ちたい",
    "伸びている外資で成果を出したい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "非公開化企業ならではの長期目線の事業運営を経験したい",
    "社内の関連チームを巻き込む調整力を鍛えたい",
  ],
  comparisonMap: [
    { arena: "カスタマーサポート", companies: ["Zendesk", "Salesforce", "HubSpot"], why: "カスタマーサポート予算の比較" },
    { arena: "CRM / 営業支援", companies: ["Zendesk", "Salesforce", "HubSpot"], why: "隣接するCRM予算との比較" },
  ],
  sources: zendeskSources,
};

const uipathSources: ResearchSource[] = [
  {
    id: "uipath-q1fy27-earnings",
    label: "UiPath Reports First Quarter Fiscal 2027 Financial Results",
    url: "https://ir.uipath.com/news/detail/452/uipath-reports-first-quarter-fiscal-2027-financial-results",
    kind: "企業公式",
    scope: "FY27 Q1決算・ARR・顧客数",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-ipo",
    label: "CNBC「UiPath Rises 17% in NYSE Debut After One of Top Software IPOs Ever」",
    url: "https://www.cnbc.com/2021/04/21/uipath-rises-17percent-in-nyse-debut-after-one-of-top-software-ipos-ever.html",
    kind: "外部集計",
    scope: "2021年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-rpa-pivot",
    label: "Sequoia Capital「Crucible Moments: UiPath」",
    url: "https://sequoiacap.com/podcast/crucible-moments-uipath/",
    kind: "外部集計",
    scope: "アウトソーシング企業からRPAへのピボット(2013〜2015年)",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-agentic-platform",
    label: "UiPath「UiPath Launches First Enterprise-Grade Platform for Agentic Automation」",
    url: "https://www.uipath.com/newsroom/uipath-launches-first-enterprise-grade-platform-for-agentic-automation",
    kind: "企業公式",
    scope: "エージェンティック・オートメーションへの製品戦略転換",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-japan-founding",
    label: "UiPath社、アジアでのさらなる事業強化に向け日本法人を設立",
    url: "https://kyodonewsprwire.jp/release/201703290384",
    kind: "企業公式",
    scope: "日本法人設立",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-country-manager",
    label: "UiPath株式会社のカントリーマネージャーに南哲夫が就任",
    url: "https://www.uipath.com/ja/newsroom/uipath-appoints-minami-tetsuo-to-lead-japan-operations",
    kind: "企業公式",
    scope: "日本法人代表者(2026年2月就任)",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-japan-marketshare",
    label: "UiPath社が、ITRの調査レポートで国内RPA市場シェア1位を8年連続で獲得",
    url: "https://www.uipath.com/ja/newsroom/uipath-ranked-no1-in-the-rpa-market-share-in-japan-for-the-eighth-consecutive-year-in-itrs-survey-report",
    kind: "企業公式",
    scope: "日本国内RPA市場シェア(ITR調査、2025年7月発表)",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-competitor-comparison",
    label: "Top UiPath Competitors & Alternatives in 2026",
    url: "https://improvado.io/blog/uipath-competitors",
    kind: "外部集計",
    scope: "RPA/自動化製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-openmoney",
    label: "UiPath 年収・給与制度(OpenMoney)",
    url: "https://openmoney.jp/corporations/655/salaries",
    kind: "外部集計",
    scope: "日本・営業職の自己申告給与",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-openwork",
    label: "UiPath 社員クチコミ(OpenWork)",
    url: "https://www.openwork.jp/company.php?m_id=a0C100000177nE1",
    kind: "コミュニティ",
    scope: "日本組織の口コミ・年収データ",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-employees",
    label: "UiPath (PATH) Number of Employees(stockanalysis.com)",
    url: "https://stockanalysis.com/stocks/path/employees/",
    kind: "外部集計",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-case-jpx",
    label: "導入事例：日本取引所グループ",
    url: "https://www.uipath.com/ja/resources/automation-case-studies/jpx",
    kind: "企業公式",
    scope: "日本導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-case-nttcom",
    label: "導入事例：NTTコミュニケーションズ株式会社",
    url: "https://www.uipath.com/ja/resources/automation-case-studies/nttcom",
    kind: "企業公式",
    scope: "日本導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "uipath-q1fy27-results",
    label: "UiPath IR「Reports First Quarter Fiscal 2027 Financial Results」",
    url: "https://ir.uipath.com/news/detail/452/uipath-reports-first-quarter-fiscal-2027-financial-results",
    kind: "企業公式",
    scope: "ARR成長率の推移・NRR",
    checkedAt: "2026-08-08",
  },
  {
    id: "uipath-agentic-skepticism",
    label: "Diginomica「Hype, Hard Truths: UiPath's Ed Challis on What's Holding Agentic AI Back」",
    url: "https://diginomica.com/hype-hard-truths-uipath-ed-challis-whats-holding-agentic-ai-back",
    kind: "外部集計",
    scope: "エージェンティックAI導入の実態への懐疑的な見方",
    checkedAt: "2026-08-08",
  },
  {
    id: "uipath-stock-drop-2026",
    label: "Motley Fool「UiPath Stock Just Fell 15%. Here's Why」",
    url: "https://www.fool.com/investing/2026/07/24/uipath-stock-just-fell-15-heres-why-this-could-be-a-great-buying-opportunity/",
    kind: "外部集計",
    scope: "2026年7月の株価急落とAI自動化需要への懸念",
    checkedAt: "2026-08-08",
  },
  {
    id: "uipath-japan-settlement",
    label: "官報決算データベース「UiPath株式会社」決算公告一覧",
    url: "https://catr.jp/companies/e9365/58572",
    kind: "法定開示",
    scope: "日本法人 2023〜2026年(第7〜10期)の純利益・総資産(貸借対照表のみ、売上高は非開示)",
    checkedAt: "2026-08-08",
  },
];

const uipathIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "UiPathは、企業に残る定型作業や複数システムをまたぐ業務を、RPAとAIエージェントで自動化するエンタープライズオートメーション基盤。「人が転記・照合・入力を繰り返している」「レガシーシステムが分断され、業務を一気通貫で処理できない」「部門ごとの自動化が乱立し、全社展開や統制が進まない」といった課題を解決する。一つの作業効率化を入口に、業務プロセス全体の再設計や全社的な自動化基盤へ提案を広げ、削減時間・コスト・ミス率で成果を可視化できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "PATH",
    exchange: "NYSE",
    listedSince: "2021年",
    stockLinkUrl: "https://stockanalysis.com/stocks/path/",
    growthSummary: "2005年にDaniel Dines氏らがルーマニア・ブカレストで「DeskOver」として創業し、当初はIBM・Google・Microsoft向けの受託ソフトウェア開発を手がけていた。2013年頃に自動化製品を投入、2015年にUiPathへ改称してRPA(ロボティック・プロセス・オートメーション)専業へ舵を切ったことが急成長の起点になった。2021年4月にNYSEへ上場(公開価格$56、初日+23%)、当時の米国ソフトウェアIPOとして史上3位規模の評価額を得た。しかしRPA市場の成熟に伴い成長率は鈍化を続けており、2024年秋以降は「エージェンティック・オートメーション」(AIエージェントがロボットと人を指揮する仕組み)への戦略転換を進めている。FY2026(2026年1月期)は創業以来初めてGAAPベースの通期黒字を達成した一方、ARR成長率は+11%まで鈍化しており、収益性改善と新戦略の収益化を同時に進める過渡期にある、というのがGenbaの読み。",
    milestones: [
      { year: "2013-15", label: "受託開発からRPA専業へピボット", detail: "自動化製品を投入し、社名をDeskOverからUiPathへ改称。", sourceId: "uipath-rpa-pivot" },
      { year: "2021", label: "NYSE上場", detail: "公開価格$56、初日+23%の値上がり。当時の米国ソフトウェアIPOとして史上3位規模の評価額。", sourceId: "uipath-ipo" },
      { year: "2024-25", label: "「エージェンティック・オートメーション」へ転換", detail: "AIエージェントがロボットと人を指揮する新プラットフォームを発表・展開。", sourceId: "uipath-agentic-platform" },
      { year: "2026", label: "創業以来初のGAAP通期黒字化", detail: "収益性は改善した一方、ARR成長率は+11%まで鈍化。新戦略の収益化が今後の焦点。", sourceId: "uipath-q1fy27-earnings" },
    ],
    sourceIds: ["uipath-rpa-pivot", "uipath-ipo", "uipath-agentic-platform", "uipath-q1fy27-earnings"],
    genbaVerdict: {
      headline: "成長率の鈍化は底を打ちつつあるが、「エージェンティック」の看板に見合う実績はまだない。",
      body: "ARR成長率はFY24の+22%からFY26には+11%まで落ち込んだ後、Q1 FY27には+12%へわずかに反転し、鈍化に歯止めがかかりつつある。一方で「エージェンティック・オートメーション」という新戦略は、Gartnerの評価では確かにリーダー格と認められているものの、ARR・売上への貢献額は一切開示されておらず、2026年7月には需要への懐疑から株価が1日で15%下落する場面もあった。数字の底打ちと、新戦略の看板が実績として結びつくのはこれからだ、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "ARR成長率が鈍化から反転の兆し",
        body: "ARR成長率はFY24 +22%→FY25 +14%→FY26 +11%と鈍化を続けていたが、Q1 FY27(2026年5月発表)には+12%へわずかに反転。NRR(純収益維持率)は109%で、$1M以上のARR顧客も374社まで拡大している。",
        sourceId: "uipath-q1fy27-results",
      },
      {
        title: "創業以来初のGAAP通期黒字化、非GAAP営業利益率は22%",
        body: "FY2026は創業以来初めてGAAPベースの通期黒字を達成。Q1 FY27の非GAAP営業利益率は22%で、長期目標として非GAAP営業利益率30%への引き上げも掲げている。",
        sourceId: "uipath-q1fy27-results",
      },
      {
        title: "Gartnerがエージェンティック・オートメーション分野の「リーダー」に選出",
        body: "Gartnerの「Magic Quadrant for Agentic Automation Platforms」(2026年版)で、Microsoft・ServiceNowと並びリーダーの一角に選出された。自社の主張だけでなく第三者評価機関からも独立した裏付けを得ている。",
        sourceId: "uipath-agentic-skepticism",
      },
    ],
    riskHypotheses: [
      {
        title: "「エージェンティック」の看板に、まだ数字の裏付けがない",
        body: "Maestro等のエージェンティック製品について、専用のARR・売上・顧客数は一切開示されておらず、決算での説明も「パイロットから本番運用へ移行中」という定性的な表現にとどまる。2026年7月には、AI自動化需要への投資家の懐疑と弱めのQ2 ARR見通しを理由に株価が1日で15%下落する場面もあった。",
        confidence: "中",
        evidence: [
          "エージェンティック製品(Maestro等)専用のARR・売上・顧客数が一切開示されていない",
          "2026年7月、AI自動化需要への懸念とQ2 ARR見通しの弱さを理由に株価が1日で15%下落",
        ],
        counterSignal: "GartnerのMagic Quadrant(2026年版)でMicrosoft・ServiceNowと並びリーダーに選出されており、第三者評価では独立した裏付けがある。ARR成長率自体もFY26の+11%からQ1 FY27には+12%へ反転しており、鈍化に歯止めがかかりつつある兆候もある。",
        sourceIds: ["uipath-stock-drop-2026", "uipath-agentic-skepticism"],
      },
      {
        title: "「エンタープライズ全般がAI活用の効果を測定できていない」という業界共通の壁に直面",
        body: "自社のAI戦略責任者(Ed Challis氏)自身が、多くの企業がAIエージェントの技術的な能力と、実際のビジネスインパクトの間の「未実現ゾーン」で足踏みしていると公に指摘している。これはUiPath固有の弱さというより業界全体の壁だが、自動化ツールを売る企業自身がこの壁を公に認めている点は率直に評価すべき情報。",
        confidence: "探索中",
        evidence: [
          "自社のAI戦略責任者が、企業のAIエージェント活用が「技術力とビジネスインパクトの間の未実現ゾーン」で止まっていると公言",
          "Microsoft 365 Copilot Studio等、汎用プラットフォームとの価格・機能の収斂により、CFOから「なぜ専用ツールが必要か」を問われる場面が増えているとの業界分析がある",
        ],
        counterSignal: "業界全体が同じ壁に直面しているなら、最初に顧客の実運用データを蓄積し、具体的な成功パターンを提示できたベンダーが先行者優位を得られる可能性がある。UiPathは長年のRPA導入実績を持つ既存顧客基盤を、その実証の場として活用できる立場にある。",
        sourceIds: ["uipath-agentic-skepticism"],
      },
    ],
    japanGrowth: {
      headline: "日本法人の純利益も、グローバルと同じタイミングで頭打ちの兆しを見せている。",
      narrative: "UiPath株式会社(日本法人)は2017年設立の株式会社で、決算公告(貸借対照表のみ、売上高は非開示)を追うと、純利益は第7期(2023年1月期)4.0億円→第8期(2024年1月期)5.4億円(+35.9%)→第9期(2025年1月期)8.9億円(+64.2%)と急拡大した後、第10期(2026年1月期)は8.0億円(-10.9%)と減少に転じている。総資産も同時期に99.9億円→149.2億円→141.6億円→145.3億円と、第9期をピークに伸びが止まっている。これは、グローバルのARR成長率がFY24の+22%からFY26に+11%まで鈍化した時期とほぼ重なっており、日本法人単体でも同じ成長減速の波を受けている可能性が高い、というのがGenbaの読み。代表者名は決算公告上で表記が変わっており(第7期と第8期以降で異なる)、この間に代表者交代があったとみられるが、詳細な経緯は確認できていない。",
      qualitativeSignals: [
        { label: "純利益が第9期をピークに減少に転じる", detail: "4.0億円(第7期)→5.4億円→8.9億円(第9期、+64.2%)→8.0億円(第10期、-10.9%)。総資産も第9期をピークに伸びが止まっている。", sourceId: "uipath-japan-settlement" },
        { label: "決算公告上、代表者表記が交代", detail: "第7期と第8期以降で登記上の代表者名の表記が変わっており、この間に代表者交代があったとみられる。詳細な経緯・後任者の経歴は確認できていない。", sourceId: "uipath-japan-settlement" },
      ],
      sourceIds: ["uipath-japan-settlement"],
    },
  },
  sellingPlaybook: {
    frameIntro: "UiPathの売り方は、従来の「定型作業の自動化(RPA)」から「AIエージェントがRPAボットを指揮する自動化(エージェンティック・オートメーション)」への転換をどう語れるかが軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "$1M以上のARR顧客が前年比18%増と、既存の大口顧客がさらに自動化範囲を広げている。1つの部署の定型業務自動化から、複数部門・複数プロセスへの横展開が既存顧客の成長パターンになっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "UiPathは、人手で行っていた定型的なPC操作(データ入力・転記等)を自動化するために生まれた。存在理由は「人がやらなくていい作業を、ソフトウェアロボットに任せる」ことにある。" },
      { title: "外部環境の要求から見る課題", body: "生成AIの普及により、単純作業の自動化だけでなく、判断を伴う業務プロセス全体をAIエージェントが指揮する「エージェンティック・オートメーション」への移行が業界全体のテーマになっている。" },
    ],
    narrative: [
      { label: "背景", body: "多くの企業では、データ入力・転記・照合といった定型的なPC作業に、依然として多くの人手と時間が割かれている。" },
      { label: "課題", body: "定型作業の自動化(RPA)だけでは、判断が必要な例外処理や複数システムをまたぐ複雑なプロセスまではカバーしきれず、自動化の効果が頭打ちになりやすい。" },
      { label: "解決策", body: "UiPathのRPAボットに加えて、AIエージェントが状況を判断しながら複数のボット・システムを指揮する仕組みを導入し、自動化の対象を単純作業から複雑なプロセス全体へ広げる。" },
      { label: "選定の理由", body: "Microsoft Power AutomateはM365環境内では低コストで導入しやすいが、複雑なエンタープライズワークフローやガバナンス機能ではUiPathに一日の長がある。UiPathは大規模組織向けのオーケストレーション・ガバナンス機能の厚みで選ばれやすい。" },
    ],
    openingHook: "今、御社で一番「人がやらなくていいのに人がやっている」作業は何ですか。",
    valueHypothesis: "$1M以上のARR顧客が前年比18%増という開示を根拠に、一度自動化の効果を実感した大口顧客ほど、対象範囲を広げ続ける傾向がある、という価値仮説を立てる。",
    commonObjection: { objection: "Microsoft 365を使っているのでPower Automateで十分では", reframe: "Power AutomateはM365環境内の軽量な自動化には向くが、複数システムをまたぐ複雑なエンタープライズワークフローやガバナンス機能では設計思想が異なる。「まずPower Automateで小さく始め、複雑なプロセスはUiPathで」という併用の提案が有効。" },
  },
  facts: [
    { label: "Q1 FY27売上", value: "$418M(約656億円)", detail: "前年比+17%。1ドル=157円換算。", sourceIds: ["uipath-q1fy27-earnings"] },
    { label: "ARR", value: "$1.901B(約2,985億円)", detail: "前年比+12%。純新規ARRは4,900万ドル。1ドル=157円換算。", sourceIds: ["uipath-q1fy27-earnings"] },
    { label: "$1M+ARR顧客数", value: "374社", detail: "前年比+18%。", sourceIds: ["uipath-q1fy27-earnings"] },
    { label: "FY27通期売上ガイダンス", value: "$1.776B〜$1.781B(約2,789億〜2,796億円)", detail: "1ドル=157円換算。", sourceIds: ["uipath-q1fy27-earnings"] },
    { label: "日本国内RPA市場シェア", value: "1位(8年連続)", detail: "ITR Market View調査(2025年7月発表)による。", sourceIds: ["uipath-japan-marketshare"] },
    { label: "日本法人設立", value: "2017年3月", detail: "大手RPAベンダーの中で最初に日本法人を設立。2026年2月にカントリーマネージャーが南哲夫氏に交代。", sourceIds: ["uipath-japan-founding", "uipath-country-manager"] },
  ],
  hypotheses: [
    {
      topic: "STRATEGIC PIVOT",
      title: "RPA専業から「エージェンティック・オートメーション」へ、全社転換の最中。",
      conclusion: "UiPathは2026年、LLMエージェントがRPAボットを指揮する新しいモデルへ全社的にピボットしている。営業に求められる提案の中身が、従来のRPA営業から大きく変わりつつある。",
      confidence: "高",
      evidence: ["UiPathが2026年に「エージェンティック・オートメーション」へ全社ピボットしたと複数メディアが報道"],
      counterSignals: ["既存のRPA(ボット単体の自動化)需要も引き続き存在し、完全にAIエージェント中心の商談ばかりではない可能性"],
      interviewQuestions: ["エージェンティック・オートメーションの商談は、従来のRPA商談と比べてどう変わりましたか"],
      sourceIds: ["uipath-competitor-comparison"],
    },
    {
      topic: "FINANCIAL MILESTONE",
      title: "創業以来初のGAAP黒字化という節目。",
      conclusion: "Q1 FY27で初めてGAAPベースの黒字を達成した。成長率が鈍化する中でも収益性を重視する経営方針への転換がうかがえる。",
      confidence: "高",
      evidence: ["Q1 FY27で創業以来初のGAAP黒字を達成"],
      counterSignals: ["ARR成長率は+12%と、かつての高成長期からは大きく鈍化している"],
      interviewQuestions: ["収益性重視への転換は、営業組織の目標設定にどう影響していますか"],
      sourceIds: ["uipath-q1fy27-earnings"],
    },
    {
      topic: "JAPAN LEADERSHIP CHANGE",
      title: "日本のカントリーマネージャーが2026年2月に交代したばかり。",
      conclusion: "2026年2月1日付で南哲夫氏が新カントリーマネージャーに就任しており、日本組織の戦略・体制が更新されている可能性が高い。",
      confidence: "中",
      evidence: ["2026年2月1日付でカントリーマネージャー交代の公式発表"],
      counterSignals: [],
      interviewQuestions: ["新体制になってから、日本の営業戦略にどんな変化がありましたか"],
      sourceIds: ["uipath-country-manager"],
    },
    {
      topic: "JAPAN MARKET POSITION",
      title: "日本のRPA市場でシェア1位を8年維持、ただし市場自体が成熟期に。",
      conclusion: "ITR調査で国内RPA市場シェア1位を8年連続で獲得している。ただしRPA市場自体が成熟しつつあり、既存シェアの防衛と新領域(エージェンティックAI)への転換を同時に進める必要がある。",
      confidence: "中",
      evidence: ["ITR Market View調査(2025年7月発表)で国内RPA市場シェア1位を8年連続で獲得"],
      counterSignals: ["ARR成長率の鈍化は、成熟市場における競争激化を示唆している可能性がある"],
      interviewQuestions: ["新規開拓と、既存導入企業への追加提案、どちらの比重が大きいですか"],
      sourceIds: ["uipath-japan-marketshare"],
    },
    {
      topic: "COMPENSATION TRANSPARENCY",
      title: "自己申告データ間で年収水準にばらつきがある。",
      conclusion: "OpenMoneyでは営業職平均1,792万円、OpenWorkでは全社平均1,192万円と、集計元によって数値に差がある。母集団・回答時期の違いによるものと考えられ、オファー時は個別確認が前提になる。",
      confidence: "中",
      evidence: ["OpenMoney: 営業職平均1,792万円", "OpenWork: 全社平均1,192万円(40名回答)"],
      counterSignals: [],
      interviewQuestions: ["OTE・Base:Incentive比率を教えてください"],
      sourceIds: ["uipath-openmoney", "uipath-openwork"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "節目の年。黒字化と、日本トップの交代が重なるタイミング。",
    hypothesis: {
      title: "全社的な戦略転換と、日本のリーダーシップ交代が同時期に重なっている。",
      body: "2026年はUiPathにとって、初のGAAP黒字化とエージェンティック・オートメーションへの全社転換が重なる節目の年。日本でも同時期にカントリーマネージャーが交代しており、事業の方向性と組織体制の両方が更新されているタイミングだと考えられる。",
    },
    careerValue: {
      title: "「自動化×AI」の実務経験は、今後数年の需要が読みやすい領域。",
      body: "RPA単体の知識だけでなく、AIエージェントによる自動化という新しい提案経験を積めることは、自動化・AI関連のSaaS営業職全般で市場価値になりやすい。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "日本取引所グループ",
      products: "UiPath",
      outcome: "証券取引インフラを担う企業がUiPathを導入(公式事例ページで公開)。",
      implication: "金融インフラのような高い信頼性が求められる領域での導入実績。",
      sourceId: "uipath-case-jpx",
    },
    {
      company: "NTTコミュニケーションズ",
      products: "UiPath",
      outcome: "大手通信企業がUiPathを導入(公式事例ページで公開)。",
      implication: "大企業の全社的な業務自動化ニーズに対応した事例。",
      sourceId: "uipath-case-nttcom",
    },
  ],
  externalSignals: [
    {
      label: "日本国内RPA市場シェア",
      value: "1位(8年連続)",
      detail: "ITR Market View調査(2025年7月発表)による。",
      caveat: "UiPath自身が発表しているが、根拠となるITR調査レポート名が明記されている。",
      sourceId: "uipath-japan-marketshare",
    },
    {
      label: "年収データのばらつき",
      value: "OpenMoney 1,792万円 vs OpenWork 1,192万円(営業/全社平均)",
      detail: "集計元・母集団によって数値に差がある。",
      caveat: "いずれも自己申告データ。",
      sourceId: "uipath-openmoney",
    },
  ],
  roleLens: {
    salesMotion: "Enterprise AEはテリトリー・市場ポテンシャルの分析からの高タッチ型新規開拓、Enterprise Sales Executive IIは既存の大口顧客ポートフォリオを組織横断的に拡大する役割と、新規/既存で役割が分かれる。",
    compensation: "OpenMoneyでは営業職平均年収1,792万円、OpenWorkでは全社平均1,192万円(40名回答)と、集計元によって幅がある。四半期クオータ制で達成率100%超のアクセラレーターが一般的とされる。",
    quota: "四半期ごとのクオータ達成が前提とされ、継続的な達成実績が求人要件として重視される傾向にある。具体的なクオータ額の公開情報はない。",
    collaboration: "Enterprise Sales Executiveでは「複数階層・複数部門の意思決定者との関係構築」が明記されており、単一窓口ではなく組織横断的な合意形成力が問われる。営業サポート・カスタマーサクセスとの連携も前提。",
  },
  leadership: {
    name: "南 哲夫",
    role: "UiPath株式会社 カントリーマネージャー",
    read: "2026年2月1日付で日本法人のカントリーマネージャーに就任。就任時期が近いため、就任の背景や前任者からの引き継ぎ方針については、面接で直接確認することが望ましい。",
    sourceId: "uipath-country-manager",
  },
  companyStats: {
    globalHeadcount: { value: "3,981人", detail: "2026年1月31日時点の公式開示。LinkedIn集計では5,000人超という異なる数値もある。", sourceId: "uipath-employees" },
    japanHeadcount: { value: "非公開", detail: "UiPath株式会社の正確な人数は確認できていない。" },
    japanOffice: { value: "東京都千代田区", detail: "UiPath株式会社。2017年3月設立。", sourceId: "uipath-japan-founding" },
    japanSince: { value: "2017年3月", detail: "大手RPAベンダーの中で最初に日本法人を設立。", sourceId: "uipath-japan-founding" },
  },
  salesAppeal: {
    intro: "RPAという既に実績のある市場で足場を持ちながら、AIエージェントによる自動化という新しいテーマにも挑戦できる、転換期ならではの環境。",
    points: [
      { title: "日本市場シェア1位というブランドを武器にできる", detail: "ITR調査で国内RPA市場シェア1位を8年連続で獲得しており、商談の入り口での信頼獲得に直結する。", sourceIds: ["uipath-japan-marketshare"] },
      { title: "AIエージェント時代の自動化提案を最前線で経験できる", detail: "エージェンティック・オートメーションへの全社転換が進んでおり、従来のRPA提案にとどまらない新しい商談経験を積める。", sourceIds: ["uipath-competitor-comparison"] },
      { title: "黒字化を達成した安定感のある事業基盤", detail: "Q1 FY27で創業以来初のGAAP黒字化を達成しており、投資家からの評価軸が「成長」から「成長+収益性」に移りつつある局面。", sourceIds: ["uipath-q1fy27-earnings"] },
      { title: "新体制の日本組織で、初期メンバーとして立ち回れる可能性", detail: "2026年2月にカントリーマネージャーが交代したばかりで、新体制の戦略づくりに関わるチャンスがあるタイミングと考えられる。", sourceIds: ["uipath-country-manager"] },
    ],
  },
  interviewPrep: {
    intro: "戦略転換とリーダーシップ交代が重なるタイミングだからこそ、面接で確認しておきたい質問例です。",
    questions: [
      { question: "エージェンティック・オートメーションの商談は、従来のRPA商談と比べてどう変わりましたか。", why: "全社的な戦略転換の実態を、現場の営業目線で確認したい。", sourceIds: ["uipath-competitor-comparison"] },
      { question: "新体制になってから、日本の営業戦略にどんな変化がありましたか。", why: "カントリーマネージャー交代直後のタイミングであり、方針の連続性・変化を確認したい。", sourceIds: ["uipath-country-manager"] },
      { question: "新規開拓と、既存導入企業への追加提案、どちらの比重が大きいですか。", why: "日本市場が成熟期に入りつつある中で、実際の商談構成を確認したい。", sourceIds: ["uipath-japan-marketshare"] },
      { question: "OTE・Base:Incentive比率を教えてください。", why: "OpenMoneyとOpenWorkで年収データに差があり、面接で直接確認する必要がある。", sourceIds: ["uipath-openmoney", "uipath-openwork"] },
    ],
  },
  solutions: [
    {
      name: "UiPath Platform(RPA・オーケストレーション)",
      valueProp: "定型業務を自動化するソフトウェアロボット(RPA)と、それらを統括するオーケストレーション基盤。",
      url: "https://www.uipath.com/ja/product",
      competitors: "Microsoft Power Automate、Automation Anywhereが主要な競合。",
      differentiation: "Microsoft Power AutomateはM365環境内では低コスト・導入しやすいが、複雑なエンタープライズワークフローやガバナンス機能では設計が異なる。UiPathは大規模組織向けのオーケストレーション・ガバナンス機能の厚みで差別化される。Automation Anywhereはクラウドネイティブ領域で競合するとされる。",
      retention: "$1M以上のARR顧客が前年比18%増の374社(Q1 FY27決算)。大口顧客の拡大が継続している。",
    },
    {
      name: "エージェンティック・オートメーション",
      valueProp: "LLMエージェントが状況を判断しながら複数のRPAボット・システムを指揮する、次世代の自動化モデル。",
      url: "https://www.uipath.com/ja/ai/agentic-automation",
      competitors: "Microsoft Copilot Studio、Automation AnywhereのAI機能などが主要な競合。",
      differentiation: "既存のRPAボット資産(顧客が既に構築した自動化フロー)をそのまま活かしながらAIエージェントを組み合わせられる点が、ゼロから作り直す必要がある競合との差別化点とされる。",
      retention: "2026年に全社的な戦略の中心として位置づけられている、比較的新しい製品領域。継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.uipath.com/ja/resources/automation-case-studies",
  fitTags: [
    "RPA/自動化領域を極めたい",
    "AIエージェント時代の自動化提案に挑戦したい",
    "日本市場シェア1位のブランドを味方につけたい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "戦略転換期の会社で新しい提案を作りたい",
    "複数部門を巻き込む組織横断的な商談力を鍛えたい",
    "黒字化した安定感のある事業基盤で働きたい",
  ],
  comparisonMap: [
    { arena: "業務自動化 / RPA", companies: ["UiPath", "Microsoft", "Automation Anywhere"], why: "業務自動化予算の比較" },
    { arena: "AIエージェント", companies: ["UiPath", "Salesforce", "ServiceNow"], why: "AIエージェント関連予算の比較" },
  ],
  sources: uipathSources,
};

const confluentSources: ResearchSource[] = [
  {
    id: "confluent-founding",
    label: "TechCrunch「Confluent」設立時記事",
    url: "https://techcrunch.com/2014/11/06/confluent/amp/",
    kind: "外部集計",
    scope: "2014年創業の経緯(元LinkedInのKafka開発者による起業)",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-ipo",
    label: "CNBC「Confluent Climbs 26% After Raising $828 Million in IPO」",
    url: "https://www.cnbc.com/2021/06/24/confluent-climbs-26percent-after-raising-828-million-in-ipo.html",
    kind: "外部集計",
    scope: "2021年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-ibm-acquisition",
    label: "IBM Completes Acquisition of Confluent, Making Real Time Data the Engine of Enterprise AI and Agents",
    url: "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
    kind: "企業公式",
    scope: "IBMによる完全子会社化(2026年3月17日完了)",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-japan-founding",
    label: "Confluent、勝俣正起をエリアバイスプレジデント兼日本カントリーマネージャーに迎えて、日本での事業を開始",
    url: "https://www.businesswire.com/news/home/20210414005962/ja",
    kind: "企業公式",
    scope: "日本法人設立(2021年4月)",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-japan-cm-2024",
    label: "Confluent、日本法人のカントリーマネージャーに石井晃一が就任",
    url: "https://digitalpr.jp/r/85756",
    kind: "企業公式",
    scope: "日本法人代表者(2024年就任)",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-competitor-comparison",
    label: "Best Confluent Alternatives: Kafka, CDC & Streaming Tools Compared",
    url: "https://estuary.dev/blog/confluent-alternatives/",
    kind: "外部集計",
    scope: "データストリーミング製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-case-list",
    label: "Confluent Customers(公式事例一覧)",
    url: "https://www.confluent.io/customers/",
    kind: "企業公式",
    scope: "APAC地域の導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-openwork",
    label: "Confluent Japan合同会社 年収・給与制度(OpenWork)",
    url: "https://www.openwork.jp/company_answer.php?m_id=a0C2x00000YCjOK&q_no=2",
    kind: "コミュニティ",
    scope: "日本組織の給与口コミ(2026年8月時点で該当件数0件)",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-digital-native-job",
    label: "Account Executive (Digital Native)求人",
    url: "https://careers.confluent.io/jobs/15305884-account-executive-digital-native",
    kind: "企業公式",
    scope: "Digital Native AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-msp-isv-job",
    label: "Japan MSP/ISV Account Executive求人",
    url: "https://careers.confluent.io/jobs/15311824-japan-msp-slash-isv-account-executive",
    kind: "企業公式",
    scope: "MSP/ISV AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "confluent-fy2025-results",
    label: "Confluent「Fourth Quarter and Fiscal Year 2025 Financial Results」",
    url: "https://finance.yahoo.com/news/confluent-announces-fourth-quarter-fiscal-210300269.html",
    kind: "企業公式",
    scope: "非公開化前最後の通期決算・Confluent Cloud成長率",
    checkedAt: "2026-08-08",
  },
  {
    id: "confluent-deceleration-and-deal",
    label: "WallStreetZen売上推移データ・CNBC買収報道",
    url: "https://www.cnbc.com/2025/12/08/ibm-confluent-deal-data.html",
    kind: "外部集計",
    scope: "非公開化前4年間の増収率鈍化、買収発表時の株価反応",
    checkedAt: "2026-08-08",
  },
  {
    id: "confluent-japan-salesnow",
    label: "SalesNow「Confluent Japan合同会社」企業情報",
    url: "https://salesnow.jp/db/companies/4010903006196",
    kind: "外部集計",
    scope: "日本法人の直近ニュース・GTM活動状況(2026年3月の買収完了後も継続)",
    checkedAt: "2026-08-08",
  },
];

const confluentIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Confluentは、金融、製造、小売、デジタルサービス企業のIT・データ部門が、システム間で発生するデータをリアルタイムに流し続けるためのデータストリーミング基盤。「バッチ連携では顧客行動や異常への対応が遅れる」「システムごとにデータが分断している」「Kafkaの運用負荷が高く本番展開が進まない」といった課題を解決する。不正検知、在庫、顧客体験、AIなど事業成果に近いユースケースから入り、企業全体のデータ基盤へ展開できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2014年に、LinkedIn社内でApache Kafkaを開発した3名(Jay Kreps氏・Neha Narkhede氏・Jun Rao氏)がスピンアウトする形で創業。2021年6月にNASDAQへ上場(公開価格$36、初日+25%)し、データストリーミングという新カテゴリーを公開市場に定着させた。しかし2025年12月にIBMによる買収が発表され、2026年3月17日に1株31ドル・総額約110億ドルで買収が完了、完全子会社化・上場廃止となった。IBMはConfluentのリアルタイムデータストリーミング技術を、自社のwatsonx.data・IBM MQ・webMethods・IBM Zと初日から統合し、エンタープライズAI・エージェント活用の基盤に据える方針を示している。買収直後のため、日本を含む営業組織の統合方針・目標設定がどう変わるかは、公開情報だけでは確認できていない、というのがGenbaの読み。",
    ipoOutlookSummary: "IBMの完全子会社となったため、今後の新規上場(再IPO)の可能性は極めて低く、IBMの一事業として運営される見通し。Zendeskのような独立系PE傘下の企業とは異なり、大手IT企業に完全統合された以上、単独での再上場は現実的な選択肢ではないと考えられる。",
    milestones: [
      { year: "2014", label: "LinkedInからのスピンアウトで創業", detail: "Apache Kafkaの開発者3名が、社内で作った技術を商用化する形で設立。", sourceId: "confluent-founding" },
      { year: "2021", label: "NASDAQ上場", detail: "公開価格$36、初日+25%の値上がりで取引開始。", sourceId: "confluent-ipo" },
      { year: "2026.3", label: "IBMが完全子会社化・上場廃止", detail: "1株31ドル・総額約110億ドルで買収完了。watsonx.data等IBM製品との統合を進める方針。", sourceId: "confluent-ibm-acquisition" },
    ],
    sourceIds: ["confluent-founding", "confluent-ipo", "confluent-ibm-acquisition"],
    genbaVerdict: {
      headline: "4年連続の増収率鈍化の末の身売り。ただし「安売り」ではなく、市場はこの買収を好感して迎えた。",
      body: "Confluentの増収率は2021年の+64%から2025年には+21%まで4年連続で鈍化しており、これがIBMによる買収を招いた背景にあると考えられる。しかしIBMは直近30日間の出来高加重平均株価に35%のプレミアムを乗せて買収しており、発表当日の株価も+29%と急伸した。「業績が息切れしたから買われた」のではなく「事業の伸びしろをIBMが評価して買った」という構図に近い、というのがGenbaの読み。日本を含む営業組織が買収後どう変わるかは、公開情報からはほとんど確認できない。",
    },
    growthDrivers: [
      {
        title: "消費型のConfluent Cloudが、サブスクリプション全体より速いペースで成長",
        body: "非公開化前最後の通期(2025年)で、サブスクリプション売上11.2億ドル(+21%)に対し、消費型のConfluent Cloud売上は6.24億ドル(+27%)とより高い成長率を記録。ストリーム処理機能Flinkの ARRはQ3 2025に前四半期比+70%超という急拡大を見せた。",
        sourceId: "confluent-fy2025-results",
      },
      {
        title: "長年の赤字体質から、利益率の明確な改善軌道へ",
        body: "非GAAP営業利益率はほぼ収支トントンの水準から、2025年Q1に4.3%、Q2に6.3%(いずれも前年比約6pt改善)へ向上。Q3 2025の調整後フリーキャッシュフローは前年比2倍超の2,460万ドルに達した。",
        sourceId: "confluent-fy2025-results",
      },
      {
        title: "IBMは「コスト削減」ではなく「製品統合」を買収の理由として説明",
        body: "IBMはConfluentの技術を、watsonx.data・IBM MQ・IBM Zと初日から統合する方針を示しており、エンタープライズAI戦略の中核技術として位置づけている。買収の動機がリストラよりも事業拡張にあることを、公式には強調している。",
        sourceId: "confluent-ibm-acquisition",
      },
    ],
    riskHypotheses: [
      {
        title: "非公開化前、増収率は4年連続で鈍化しており、大口顧客の伸びも売上ほど強くなかった",
        body: "増収率は2021年+64%→2022年+51%→2023年+33%→2024年+24%→2025年+21%と、きれいな右肩下がりの鈍化カーブを描いていた。$100,000以上のARR顧客数は前年比+10%(1,521社)にとどまり、売上成長率(+21%)の半分程度のペース。株価も2025年2月の高値$37.65から同年8月には$15.91まで下落し、買収発表直前(12月5日)時点でも$23.14と、高値からほぼ半減した水準にとどまっていた。",
        confidence: "高",
        evidence: [
          "増収率が2021年+64%から2025年+21%まで4年連続で鈍化",
          "$100,000以上のARR顧客数の伸びは+10%と、売上成長率(+21%)の半分程度のペース",
        ],
        counterSignal: "IBMは直近30日間の出来高加重平均株価に35%のプレミアムを乗せた1株31ドル(総額約110億ドル)で買収しており、発表当日の株価は+29%と急伸した。市場はこの買収を「苦境の身売り」ではなく「株主にとって good な決着」と評価したことになる。Cloud・Flinkの消費量ベースの指標は減速する中でもむしろ加速していた。",
        sourceIds: ["confluent-deceleration-and-deal", "confluent-fy2025-results"],
      },
      {
        title: "日本の営業組織が買収後どうなるか、公開情報からはほとんど分からない",
        body: "IBM日本法人のプレスリリース、日本の主要IT系メディアのいずれも、APAC・日本の組織体制に関する具体的な言及は見当たらない。OpenWorkの給与口コミも引き続き0件のままで、社内の声を推測する材料もない。カントリーマネージャーの石井晃一氏は、買収完了後の時期とみられるイベント(Data Streaming World Tour 2026: Tokyo)でも引き続き対外的に会社を代表しているとみられるが、正式な続投発表があったわけではなく、確度の高い情報とは言えない。",
        confidence: "探索中",
        evidence: [
          "IBM・Confluent双方の公式発表、日本の主要IT系メディアのいずれにも日本組織の統合方針に関する言及が見当たらない",
          "OpenWorkの給与口コミは買収後も0件のまま",
        ],
        counterSignal: "2025年6月には日本市場向けに新サービス(Confluent Cloud for Apache Flink、Tableflow)を発表しており、買収プロセスが進行する中でも日本のGTM活動自体は止まっていなかったとみられる。ただしこれは買収完了(2026年3月)より前の活動であり、完了後の体制を直接示す証拠ではない。",
        sourceIds: ["confluent-japan-salesnow"],
      },
    ],
    japanGrowth: {
      headline: "買収完了後の日本組織の姿は、公開情報からはまだ見えてこない。",
      narrative: "Confluent Japan合同会社は合同会社のため決算公告の義務がなく、財務データは非公開。2026年3月のIBM完全子会社化を経て、日本の営業組織・目標設定がどう変わるかについても、IBM・Confluent双方から具体的な発表は確認できていない。買収プロセスが進行していた2025年6月時点では、日本市場向けの新サービス発表(Confluent Cloud for Apache Flink、Tableflow)を行うなど、GTM活動自体は継続していた。カントリーマネージャーの石井晃一氏(元Rubrik・Tanium・VMware)は、買収完了後とみられる時期のイベントでも引き続き名前が見られるが、正式な続投発表があったわけではない。日本を含むConfluentの営業組織がIBMの日本法人とどう統合されるか(あるいは独立性を保つか)は、今後の公開情報を継続的に追う必要がある、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "買収後の日本組織の方針は未発表", detail: "IBM・Confluentいずれの公式発表にも、日本を含むAPAC組織の統合方針に関する具体的な言及が見当たらない。", sourceId: "confluent-japan-salesnow" },
        { label: "買収プロセス中も日本向けの新サービス発表は継続", detail: "2026年3月の買収完了に先立つ2025年6月、日本市場向けにConfluent Cloud for Apache Flink・Tableflowを発表。", sourceId: "confluent-japan-salesnow" },
      ],
      sourceIds: ["confluent-japan-salesnow"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Confluentの売り方は「複数システムに散らばったデータが、リアルタイムで連携できていない」という課題が起点。IBM傘下入り後は、既存のIBM顧客基盤へどう食い込むかという新しい切り口も加わる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "Fortune 500企業の約40%を含む6,500社超が導入しているとされる。単一システムのイベント処理から、複数部門・複数システムをまたぐリアルタイムデータ基盤への拡張が、既存顧客の成長パターンになっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "ConfluentはApache Kafkaの開発者自身が、バッチ処理中心のデータ連携では即時性が求められる業務に対応できないという課題を解消するために創業した。存在理由は「データが発生した瞬間に、必要な場所へ届ける」ことにある。" },
      { title: "外部環境の要求から見る課題", body: "生成AI・AIエージェントの普及により、AIが参照するデータが古い・断片的だと精度が落ちるという問題が顕在化しており、リアルタイムデータ基盤への投資圧力が高まっている。" },
    ],
    narrative: [
      { label: "背景", body: "企業の基幹システム・ログ・顧客データは複数のシステムに分散しており、それぞれ更新タイミングがバラバラになりやすい。" },
      { label: "課題", body: "バッチ処理(1日1回等)でのデータ連携では、AIエージェントや不正検知のような即時性が求められる用途に対応できず、機会損失やリスクが発生する。" },
      { label: "解決策", body: "Confluentでシステム間のデータをリアルタイムに連携させ、発生した瞬間にAIエージェントや分析基盤がその情報を使えるようにする。" },
      { label: "選定の理由", body: "AWS MSKはAWS環境内での運用の手軽さが強みだが、マルチクラウド対応では制約がある。RedpandaはKafka互換で低コスト・高速だが、Confluentほどのエコシステム(コネクタ・スキーマレジストリ等)の厚みはない。Confluentは「Kafkaを作った会社」としての技術的信頼と、IBMという後ろ盾で選ばれやすい。" },
    ],
    openingHook: "今、部門をまたいだデータ連携に、どれくらいのタイムラグがありますか。",
    valueHypothesis: "Fortune 500企業の約40%が導入しているという開示を根拠に、リアルタイムデータ基盤は一度大企業に定着すると全社インフラとして扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "AWSを使っているのでMSKで十分では", reframe: "MSKはAWS環境内での運用は手軽だが、マルチクラウド・オンプレミスが混在する環境では管理が分散しやすい。「AWS内はMSK、全社横断のデータ連携はConfluent」という併用の提案が有効。" },
  },
  facts: [
    { label: "IBMによる買収額", value: "約$11B(約1兆7,270億円)", detail: "1株31ドルの現金買収。2025年12月発表、2026年3月17日完了。1ドル=157円換算。", sourceIds: ["confluent-ibm-acquisition"] },
    { label: "導入企業数", value: "6,500社超", detail: "Fortune 500企業の約40%を含む(買収発表時点の公式発表)。", sourceIds: ["confluent-ibm-acquisition"] },
    { label: "上場廃止日", value: "2026年3月17日", detail: "2021年6月のNASDAQ上場から約4年9か月で非公開化。", sourceIds: ["confluent-ibm-acquisition"] },
    { label: "日本法人設立", value: "2021年4月", detail: "初代カントリーマネージャーは勝俣正起氏。2024年に石井晃一氏へ交代。", sourceIds: ["confluent-japan-founding", "confluent-japan-cm-2024"] },
  ],
  hypotheses: [
    {
      topic: "M&A INTEGRATION",
      title: "IBM買収直後、営業組織がどう変わるかは未知数。",
      conclusion: "2026年3月にIBMの完全子会社となったばかりで、営業目標・評価制度・ブランドの扱いがどう変化するかについての公開情報はまだない。入社後の変化リスクを織り込んで判断する必要がある。",
      confidence: "高",
      evidence: ["2026年3月17日にIBMが完全子会社化を完了"],
      counterSignals: ["IBMはConfluentの技術をAI戦略の中核と位置付けており、事業を縮小するのではなく強化する方針を示している"],
      interviewQuestions: ["買収後、Confluent Japanの営業目標や評価制度に変更はありましたか"],
      sourceIds: ["confluent-ibm-acquisition"],
    },
    {
      topic: "PRODUCT MOAT",
      title: "Kafkaの生みの親という出自が、技術的な信頼の土台。",
      conclusion: "ConfluentはApache Kafkaの開発者自身が創業した会社であり、この出自が技術者相手の商談での信頼構築に有利に働くと考えられる。",
      confidence: "中",
      evidence: ["Kafka開発者による2014年創業", "Confluent Cloudは「10倍の弾力性・回復力・パフォーマンス」を謳う"],
      counterSignals: ["Redpanda等、Kafka互換でより低コスト・高速を謳う新興競合が増えている"],
      interviewQuestions: ["Redpanda等の新興Kafka互換製品との競合で、どう差別化していますか"],
      sourceIds: ["confluent-competitor-comparison"],
    },
    {
      topic: "PARTNER CHANNEL STRATEGY",
      title: "MSP/ISVという専任ポジションがあるほど、パートナー経由の拡大を重視。",
      conclusion: "直接商談のDigital Native AEとは別に、MSP/ISV専任のAEポジションが存在することから、パートナーエコシステム経由の販売拡大を日本市場で重視していると考えられる。",
      confidence: "中",
      evidence: ["Japan MSP/ISV Account Executiveという専任ポジションの存在"],
      counterSignals: [],
      interviewQuestions: ["主要なMSP/ISVパートナーは具体的にどこですか"],
      sourceIds: ["confluent-msp-isv-job"],
    },
    {
      topic: "JAPAN LEADERSHIP",
      title: "現カントリーマネージャーは複数の外資データ/セキュリティ企業出身。",
      conclusion: "2024年に就任した石井晃一氏は、Rubrik・Tanium・VMwareでの日本事業立ち上げ・マネジメント経験を持つ。日本市場でのゼロからの事業拡大に強みを持つ人物と考えられる。",
      confidence: "中",
      evidence: ["石井氏の前職はRubrikのカントリーマネージャー、Tanium・VMwareでの要職"],
      counterSignals: [],
      interviewQuestions: ["石井体制になってから、営業戦略にどんな変化がありましたか"],
      sourceIds: ["confluent-japan-cm-2024"],
    },
    {
      topic: "COMPENSATION TRANSPARENCY",
      title: "給与の公開データがほぼ皆無。",
      conclusion: "OpenWorkには2026年8月時点で給与関連の口コミが1件も投稿されておらず、外部から検証できる給与情報がほぼない。オファー交渉は完全に個別情報収集が前提になる。",
      confidence: "高",
      evidence: ["OpenWork「該当件数0件」"],
      counterSignals: [],
      interviewQuestions: ["OTE・Base:Incentive比率・買収後の株式報酬の扱いを教えてください"],
      sourceIds: ["confluent-openwork"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "生みの親としての技術的信頼と、買収直後の不確実性が同居する組織。",
    hypothesis: {
      title: "Kafka開発者集団としての技術文化と、IBM傘下という新しい現実。",
      body: "Confluentはこれまで「Kafkaを生んだ会社」としての技術的権威を武器に営業してきたと考えられるが、2026年3月のIBM完全子会社化により、その看板・独立性がどう維持されるかは未知数。技術力への自負と、組織変化への適応力の両方が求められる局面にある。",
    },
    careerValue: {
      title: "データストリーミングという専門性は、AI活用が進むほど価値が上がる領域。",
      body: "リアルタイムデータ処理の知識・商談経験は、AI・データ基盤関連のSaaS営業全般で今後さらに評価されやすくなると考えられる。IBMという大企業のリソースを使えるようになる可能性も、キャリアの選択肢を広げる材料になり得る。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "Affin Hwang Asset Management(マレーシア)",
      products: "Confluent Cloud",
      outcome: "APAC地域の資産運用会社がリアルタイムデータ基盤として採用(公式事例ページに掲載)。",
      implication: "日本企業の直接事例は確認できていないが、APAC地域の金融機関での導入実績がある。",
      sourceId: "confluent-case-list",
    },
  ],
  externalSignals: [
    {
      label: "IBM買収額",
      value: "約$11B",
      detail: "1株31ドルでの完全子会社化(2026年3月17日完了)。",
      caveat: "IBM・Confluent双方の公式発表に基づく。",
      sourceId: "confluent-ibm-acquisition",
    },
    {
      label: "OpenWork給与口コミ",
      value: "0件(2026年8月時点)",
      detail: "Confluent Japanの給与に関する公開口コミがまだ存在しない。",
      caveat: "口コミが少ないのは組織の若さ・小ささによる可能性がある。",
      sourceId: "confluent-openwork",
    },
  ],
  roleLens: {
    salesMotion: "Digital Native AEはテック企業・スタートアップ向けの直接商談、MSP/ISV AEはパートナー経由の間接販売と、セグメントによって商流が分かれる。両セグメントともMEDDPICC等の型のある営業プロセスが前提。",
    compensation: "公開されている給与データはほぼない。求人票にも給与レンジの記載はなく、OpenWorkの口コミも0件(2026年8月時点)。",
    quota: "四半期ごとの売上目標達成が前提とされ、継続的なクオータ達成実績が求人要件として重視される。具体的なクオータ額は非公開。",
    collaboration: "ビジネス開発・カスタマーサクセス・サポートチームとの連携が求人に明記されている。MSP/ISV AEはパートナー企業との関係構築力も問われる。",
  },
  leadership: {
    name: "石井 晃一",
    role: "Confluent Japan合同会社 カントリーマネージャー",
    read: "2024年にカントリーマネージャーに就任。前職はRubrik(データセキュリティ)のカントリーマネージャーとして日本事業をゼロから構築した経験を持ち、Tanium・VMwareでも要職を務めた。複数の外資テクノロジー企業で日本市場のゼロイチ立ち上げに関わってきた人物。",
    sourceId: "confluent-japan-cm-2024",
  },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "IBM完全子会社化後の従業員数は確認できていない。" },
    japanHeadcount: { value: "非公開", detail: "Confluent Japan合同会社の正確な人数は確認できていない。" },
    japanOffice: { value: "東京都新宿区", detail: "Confluent Japan合同会社。2021年4月設立。", sourceId: "confluent-japan-founding" },
    japanSince: { value: "2021年4月", detail: "初代カントリーマネージャーは勝俣正起氏。", sourceId: "confluent-japan-founding" },
  },
  salesAppeal: {
    intro: "Kafkaの生みの親としての技術的権威と、IBM傘下入りによる新しいリソース・スケールの両方にアクセスできる、転換期ならではの環境。",
    points: [
      { title: "「Kafkaを作った会社」という技術的信頼を武器にできる", detail: "Apache Kafka開発者自身による創業という出自は、技術者相手の商談での信頼構築に直結する。", sourceIds: ["confluent-competitor-comparison"] },
      { title: "IBMの企業基盤・既存顧客ネットワークにアクセスできる可能性", detail: "IBMはConfluentの技術をエンタープライズAI戦略の中核に位置づけており、IBMの既存大企業顧客への展開機会が広がる可能性がある。", sourceIds: ["confluent-ibm-acquisition"] },
      { title: "リアルタイムデータ×AIという、今後伸びる領域の最前線", detail: "生成AI・AIエージェントの普及により、リアルタイムデータ処理の重要性が高まっている。", sourceIds: ["confluent-ibm-acquisition"] },
      { title: "パートナーエコシステム経由の間接販売も経験できる", detail: "MSP/ISV専任のAEポジションがあり、直接商談とは異なるチャネル営業のスキルも積める。", sourceIds: ["confluent-msp-isv-job"] },
    ],
  },
  interviewPrep: {
    intro: "IBMによる買収直後というタイミングだからこそ、面接で確認しておきたい質問例です。",
    questions: [
      { question: "買収後、Confluent Japanの営業目標や評価制度に変更はありましたか。", why: "M&A直後の組織変化は、入社後の働き方に直結する。", sourceIds: ["confluent-ibm-acquisition"] },
      { question: "Redpanda等の新興Kafka互換製品との競合で、どう差別化していますか。", why: "低コストな新興競合の台頭という業界トレンドへの対応力を確認したい。", sourceIds: ["confluent-competitor-comparison"] },
      { question: "主要なMSP/ISVパートナーは具体的にどこですか。", why: "パートナー経由の商流の実態を、担当予定のポジションに応じて確認したい。", sourceIds: ["confluent-msp-isv-job"] },
      { question: "OTE・Base:Incentive比率・買収後の株式報酬の扱いを教えてください。", why: "公開されている給与データがほぼなく、面接で直接確認する必要がある。", sourceIds: ["confluent-openwork"] },
    ],
  },
  solutions: [
    {
      name: "Confluent Cloud",
      valueProp: "Apache Kafka互換のフルマネージド・データストリーミング基盤。インフラ管理不要でリアルタイムデータパイプラインを構築できる。",
      url: "https://www.confluent.io/confluent-cloud/",
      competitors: "AWS MSK、Amazon Kinesis、Redpandaが主要な競合。",
      differentiation: "AWS MSKはAWS環境内での運用の手軽さが強みだが、マルチクラウド対応では制約がある。RedpandaはKafka互換で低コスト・高速だが、Confluentほどのエコシステム(コネクタ、スキーマレジストリ等)の厚みはない。ConfluentはKafka開発者自身による設計という技術的信頼と、クラウドネイティブ設計が差別化点とされる。",
      retention: "6,500社超が導入、Fortune 500企業の約40%を含むとされる(買収発表時点の公式発表)。",
    },
    {
      name: "Confluent Platform",
      valueProp: "オンプレミス・ハイブリッド環境向けのデータストリーミング基盤。金融・製造業等、規制の厳しい業界向けの自己ホスト型オプション。",
      url: "https://www.confluent.io/product/confluent-platform/",
      competitors: "自己運用のApache Kafka、Clouderaが主要な競合。",
      differentiation: "自己運用のApache Kafkaは無償だが運用負荷が高い。Confluent Platformは商用サポート・ガバナンス機能・スキーマレジストリ等の企業向け機能で差別化される。",
      retention: "継続率データは非公開。規制業界での信頼性が実績として語られる。",
    },
  ],
  customerStoriesUrl: "https://www.confluent.io/customers/",
  fitTags: [
    "データストリーミング領域を極めたい",
    "リアルタイムデータ×AIの最前線に立ちたい",
    "技術理解を伴う提案力を鍛えたい",
    "IBM傘下という新しいスケールでのキャリアを築きたい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "パートナー経由の間接販売も経験したい",
    "M&A後の組織変化に対応する適応力を鍛えたい",
  ],
  comparisonMap: [
    { arena: "データ基盤 / ストリーミング", companies: ["Confluent", "Snowflake", "MongoDB"], why: "データ関連予算の比較" },
    { arena: "エンタープライズAI基盤", companies: ["Confluent", "Salesforce", "ServiceNow"], why: "AI活用基盤予算の比較" },
  ],
  sources: confluentSources,
};

const pagerdutySources: ResearchSource[] = [
  {
    id: "pagerduty-q1fy27-earnings",
    label: "PagerDuty Announces First Quarter Fiscal 2027 Financial Results",
    url: "https://investor.pagerduty.com/news/news-details/2026/PagerDuty-Announces-First-Quarter-Fiscal-2027-Financial-Results/default.aspx",
    kind: "企業公式",
    scope: "FY27 Q1決算・ARR・NRR",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-ipo",
    label: "Forbes「PagerDuty's IPO Values It At $1.8 Billion」",
    url: "https://www.forbes.com/sites/alexkonrad/2019/04/11/pagerdutys-ipo-values-it-at-18-billion--heres-why-it-had-doubters-early-on/",
    kind: "外部集計",
    scope: "2019年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-acquisitions",
    label: "PagerDuty「PagerDuty to Acquire Rundeck」プレスリリース",
    url: "https://www.pagerduty.com/newsroom/pagerduty-to-aquire-rundeck/",
    kind: "企業公式",
    scope: "2020年Rundeck買収(約1億ドル)",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-pricing-shift",
    label: "diginomica「PagerDuty Delivers Mixed Q1 2026 Results」",
    url: "https://diginomica.com/pagerduty-delivers-mixed-q1-2026-results-enterprise-transformation-takes-time-gain-traction",
    kind: "外部集計",
    scope: "座席課金から使用量ベース課金への移行",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-japan-founding",
    label: "PagerDutyが日本で事業を拡大、Japan Cloudと提携してPagerDuty株式会社を設立",
    url: "https://www.pagerduty.co.jp/topics/108/",
    kind: "企業公式",
    scope: "日本法人設立(2022年5月)",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-japan-ceo",
    label: "PagerDuty日本法人代表に山根伸行が就任",
    url: "https://www.pagerduty.co.jp/topics/24/",
    kind: "企業公式",
    scope: "日本法人代表者",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-competitor-comparison",
    label: "PagerDuty vs Opsgenie: A Practical Comparison",
    url: "https://neubird.ai/blog/pagerduty-vs-opsgenie",
    kind: "外部集計",
    scope: "インシデント管理製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-case-nttdata",
    label: "NTTデータ導入事例「システム障害対応時間を大幅軽減」",
    url: "https://www.pagerduty.co.jp/customers/nttdata/",
    kind: "企業公式",
    scope: "日本導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-case-docomo",
    label: "PagerDuty、NTTドコモの導入事例「第二弾」を公開",
    url: "https://prtimes.jp/main/html/rd/p/000000011.000101675.html",
    kind: "企業公式",
    scope: "日本導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-openmoney",
    label: "PagerDuty 年収・給与データ(OpenMoney)",
    url: "https://openmoney.jp/corporations/8443/salaries/list",
    kind: "外部集計",
    scope: "日本組織の自己申告給与",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-employees",
    label: "PagerDuty (PD) Number of Employees(stockanalysis.com)",
    url: "https://stockanalysis.com/stocks/pd/employees/",
    kind: "外部集計",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-enterprise-ae-job",
    label: "Enterprise Account Executive求人",
    url: "https://japancloud.jp/career/jobs/7278/",
    kind: "企業公式",
    scope: "Enterprise AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-sr-sales-manager-job",
    label: "Sr. Sales Manager求人",
    url: "https://japancloud.jp/career/jobs/8097/",
    kind: "企業公式",
    scope: "Sr. Sales Managerの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "pagerduty-usage-pricing-detail",
    label: "GuruFocus「PagerDuty Inc (PD) Q1 2027 Earnings Call Highlights」",
    url: "https://www.gurufocus.com/news/8890377/pagerduty-inc-pd-q1-2027-earnings-call-highlights-steady-revenue-and-strategic-shifts-amidst-market-dynamics?mobile=true",
    kind: "外部集計",
    scope: "使用量ベース課金の比率・PLG新規顧客数の詳細",
    checkedAt: "2026-08-08",
  },
  {
    id: "pagerduty-fy26-margin",
    label: "PagerDuty「Announces Fourth Quarter, Full Year Fiscal 2026 Financial Results」",
    url: "https://www.pagerduty.com/newsroom/pagerduty-announces-fourth-quarter-full-year-fiscal-2026-financial-results/",
    kind: "企業公式",
    scope: "FY2026通期の非GAAP営業利益率・フリーキャッシュフロー",
    checkedAt: "2026-08-08",
  },
  {
    id: "pagerduty-growth-deceleration",
    label: "PagerDuty IR「Q1 FY27決算資料」(売上成長率推移)",
    url: "https://www.pagerduty.com/newsroom/pagerduty-announces-first-quarter-fiscal-2027-financial-results/",
    kind: "企業公式",
    scope: "四半期売上成長率・NRRの推移",
    checkedAt: "2026-08-08",
  },
  {
    id: "pagerduty-morgan-stanley-downgrade",
    label: "Investing.com「Morgan Stanley Downgrades PagerDuty Stock Rating on AI Threats」",
    url: "https://www.investing.com/news/analyst-ratings/morgan-stanley-downgrades-pagerduty-stock-rating-on-ai-threats-93CH-4801994",
    kind: "外部集計",
    scope: "2026年7月のアナリスト格下げ・AI脅威評価",
    checkedAt: "2026-08-08",
  },
  {
    id: "pagerduty-japan-settlement",
    label: "官報決算データベース・決算公告データ倉庫「PagerDuty株式会社」決算公告",
    url: "https://catr.jp/companies/c877b/225384",
    kind: "法定開示",
    scope: "日本法人 2023〜2025年(第1〜3期)の純損益・純資産(債務超過含む)",
    checkedAt: "2026-08-08",
  },
];

const pagerdutyIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "PagerDutyは、デジタルサービスを運営する企業の開発・IT運用部門が、システム障害を検知し、適切な担当者を動かして復旧までを統制するインシデント対応基盤。「障害への気づきが遅い」「通知が乱立し、誰が対応すべきか分からない」「復旧手順が属人化し、停止時間が長引く」といった課題を解決する。障害対応ツールの導入にとどまらず、売上損失、顧客離反、開発生産性を数字で捉え、経営と技術組織の双方へ価値を示せる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "PD",
    exchange: "NYSE",
    listedSince: "2019年",
    stockLinkUrl: "https://stockanalysis.com/stocks/pd/",
    growthSummary: "2009年にAlex Solomon氏ら元Amazonエンジニア3名がサンフランシスコで創業(トロントでインキュベーション)し、2019年4月にNYSEへ上場(公開価格$24、初日+59%)。2020年にはDevOps自動化のRundeckを約1億ドルで買収してアラート対応の枠を超えた自動化領域へ拡張、2023年にはインシデント分析・振り返りのJeliを買収し、検知から振り返りまでを一気通貫でカバーする「Operations Cloud」を構築した。直近は座席課金から使用量ベース課金への価格モデル移行を進めており、これが短期的な成長率の重石になっている。売上・ARRの成長率はほぼ横ばいまで鈍化し、既存顧客からの純増収(NRR)も100%を割り込むなど、インシデント管理という成熟市場での競争激化と価格移行の痛みが同時に表れている局面にある、というのがGenbaの読み。",
    milestones: [
      { year: "2019", label: "NYSE上場", detail: "公開価格$24、初日+59%の値上がりで取引開始。", sourceId: "pagerduty-ipo" },
      { year: "2020", label: "Rundeckを約1億ドルで買収", detail: "DevOps自動化領域へ拡張し、アラート対応から自動化までをカバー。", sourceId: "pagerduty-acquisitions" },
      { year: "2023", label: "Jeliを買収しOperations Cloudを構築", detail: "インシデント分析・振り返り機能を統合し、検知から学習までを一気通貫でカバーする体制に。", sourceId: "pagerduty-acquisitions" },
      { year: "2025-26", label: "座席課金から使用量ベース課金へ移行", detail: "価格モデルの移行が進行中で、短期的な成長率の重石になっている。", sourceId: "pagerduty-pricing-shift" },
    ],
    sourceIds: ["pagerduty-ipo", "pagerduty-acquisitions", "pagerduty-pricing-shift", "pagerduty-q1fy27-earnings"],
    genbaVerdict: {
      headline: "グローバルは成長ほぼ停止、日本法人は債務超過。正直、この9社の中で最も厳しい数字が並ぶ。",
      body: "売上成長率は6.4%→2.7%→1.0%と3四半期連続で鈍化し、純収益維持率(NRR)も4四半期連続で低下、2026年7月にはMorgan StanleyがAI時代における構造的な劣位を理由に「Underweight」へ格下げした。日本法人も2025年1月期時点で債務超過(純資産がマイナス)の状態にあることが決算公告から確認できる。使用量ベース課金への移行やPLGでの新規顧客獲得など、次の一手の芽は見えるが、まだ数字として結実していない、というのが率直なGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "使用量ベース課金への移行が、小さいながらも進み始めている",
        body: "AIOps等の使用量ベース製品は全ARRの約10%まで拡大し、この新価格モデルに移行した顧客のARRはQ4→Q1で前四半期比ほぼ倍増。年間10万ドル超を支払う顧客が15社以上、新モデルへ移行した。",
        sourceId: "pagerduty-usage-pricing-detail",
      },
      {
        title: "利益率・キャッシュフローは着実に改善",
        body: "FY2026通期の非GAAP営業利益率は24.6%(前年から約700bp改善)、フリーキャッシュフローは1.027億ドル。成長が止まる中でも、コスト規律では明確な実績を出している。",
        sourceId: "pagerduty-fy26-margin",
      },
      {
        title: "PLG(製品主導型成長)による新規顧客獲得は継続",
        body: "PLGモーション経由の新規顧客獲得は5四半期連続で600社超を維持し、有償+無償の総顧客数は35,000社超(前年比+14%)まで拡大。ただし有償顧客・ARRの伸びはほぼ横ばいで、無償から有償への転換が課題として残る。",
        sourceId: "pagerduty-usage-pricing-detail",
      },
    ],
    riskHypotheses: [
      {
        title: "売上成長率・NRRとも、複数四半期連続で悪化が続いている",
        body: "売上成長率(前年比)は6.4%(2025年7月期)→2.7%(2026年1月期)→1.0%(2026年4月期)と3四半期連続で鈍化。純収益維持率(NRR)も102%→100%→98%→97%と4四半期連続で低下しており、一時的な調整ではなく構造的なトレンドの可能性がある。",
        confidence: "高",
        evidence: [
          "売上成長率が6.4%→2.7%→1.0%と3四半期連続で鈍化",
          "NRRが102%→100%→98%→97%と4四半期連続で低下",
        ],
        counterSignal: "会社側はFY2026通期で+5.4%の増収を確保しており、「収益維持率は底打ちしつつある」と自ら説明している。使用量ベース課金への移行という構造変化の過渡期という側面もあり、移行完了後の姿はまだ見えていない。",
        sourceIds: ["pagerduty-growth-deceleration"],
      },
      {
        title: "Wall Streetは「AI時代の敗者」として織り込み始めている",
        body: "Morgan Stanleyは2026年7月21日、AIオポチュニティ/脅威フレームワークで「下位20%」に位置づけ、AIネイティブ競合への防御力の弱さや座席圧縮リスクを理由に「Underweight」へ格下げ(目標株価$10→$9)。株価は2026年に入り年初来23.8%下落、52週高値から45%下落した水準で推移している。",
        confidence: "中",
        evidence: [
          "Morgan Stanleyが2026年7月にAI脅威フレームワークで「下位20%」と評価し「Underweight」へ格下げ",
          "株価は年初来-23.8%、52週高値から-45%の水準で推移。BofAも「Sell」評価を継続",
        ],
        counterSignal: "会社は同時期に1億ドルの自社株買い増枠を発表しており、経営陣自身は現在の株価水準を割安と見ていることを示唆している。フリーキャッシュフローが安定して黒字である点は、AI時代を生き残るための投資余力自体は残っていることを示す。",
        sourceIds: ["pagerduty-morgan-stanley-downgrade"],
      },
    ],
    japanGrowth: {
      headline: "日本法人は2025年1月期時点で債務超過。決算公告が示す、グローバルより厳しい実態。",
      narrative: "PagerDuty株式会社(日本法人、Japan Cloudとの合弁で2022年5月設立)の決算公告を追うと、第1期(2023年1月期)は純損失▲2.47億円・総資産2.87億円でスタートし、第2期(2024年1月期)には純損失が▲6.24億円まで拡大(「赤字拡大」と決算公告上でも明記)、総資産は4.66億円(+62.4%)まで増えた。第3期(2025年1月期)は純損失▲2.92億円とやや縮小したものの、総資産8.11億円に対して総負債9.21億円、純資産は▲1.10億円の債務超過となり、累積損失(9.16億円)が資本金(9,000万円)を上回っている状態にある。これは日本法人が単体では自立できておらず、親会社(PagerDuty本体)からの財務的な支援に依存していることを示す公開情報上の事実である。第4期(2026年1月期)の決算公告はまだ確認できていないが、合弁パートナーのJapan Cloudは「2年以上の協業を経て日本市場で大きく前進している」という定性的な表現に留めており、具体的な売上・成長率は開示していない。グローバル本体の成長鈍化と合わせて見ると、日本法人の立ち上げも厳しい局面にある可能性が高い、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "2025年1月期時点で債務超過(純資産▲1.10億円)", detail: "累積損失9.16億円が資本金9,000万円を上回る。3期連続の赤字で、親会社からの財務支援に依存している状態。", sourceId: "pagerduty-japan-settlement" },
        { label: "合弁パートナーJapan Cloudは定性的な表現のみ", detail: "「2年以上の協業を経て日本市場で大きく前進」という表現に留まり、具体的な売上・成長率は開示されていない。", sourceId: "pagerduty-japan-settlement" },
      ],
      sourceIds: ["pagerduty-japan-settlement"],
    },
  },
  sellingPlaybook: {
    frameIntro: "PagerDutyの売り方は「システム障害への気づきと対応が遅れるほど、ビジネスの損失が拡大する」という課題が起点。成長が鈍化している局面だからこそ、既存顧客への深耕提案(AI活用等)の物語をどう作れるかが鍵になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "NTTドコモの事例では、不要なアラートを月間1万件から1千件に削減し、初動対応時間を数時間から3分に短縮したと公式に発表されている。単なる通知ツールから、ノイズを減らし意思決定を早める運用基盤への進化が既存顧客の期待になっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "PagerDutyは、システム障害発生時に「誰が・いつ・どう対応すべきか」が曖昧なまま時間だけが過ぎていくという課題を解消するために生まれた。存在理由は「障害対応の初動を自動化し、最速で人に繋げる」ことにある。" },
      { title: "外部環境の要求から見る課題", body: "システムの複雑化・24時間稼働が前提となる中、障害対応の遅れが直接的な事業損失・信頼低下につながるという経営リスク認識が強まっている。" },
    ],
    narrative: [
      { label: "背景", body: "システムが複雑化する中、障害が発生しても「誰が最初に気づき、誰が対応すべきか」が明確でないまま時間が過ぎてしまうケースが多い。" },
      { label: "課題", body: "アラートが大量に発生し、本当に重要な障害が埋もれてしまう(アラート疲れ)。また、対応者への連絡・エスカレーションが手動だと、初動が数時間単位で遅れる。" },
      { label: "解決策", body: "PagerDutyでアラートを自動的に集約・優先順位付けし、適切な担当者に自動で連絡・エスカレーションすることで、初動対応を分単位まで短縮する。" },
      { label: "選定の理由", body: "OpsgenieはAtlassian製品群との連携に強く価格も安いが、分析・自動化ワークフローの深さではPagerDutyに分がある。NTTドコモ・NTTデータのような大規模組織での実績を持つ点が、エンタープライズ商談での信頼材料になる。" },
    ],
    openingHook: "直近の大きな障害で、最初のアラートから担当者が対応を始めるまで何分かかりましたか。",
    valueHypothesis: "NTTドコモでの「初動対応が数時間から3分に短縮」という開示を根拠に、初動対応の速さがそのままビジネス損失の削減額に直結する、という価値仮説を立てる。",
    commonObjection: { objection: "Datadogを使っているので追加のツールは不要では", reframe: "Datadogは異常の検知に強いが、検知後の「誰に・どう連絡し、対応を追跡するか」という運用オペレーションはPagerDutyの方が成熟している。監視ツールと運用オーケストレーションは役割が違う、という切り口で併用を提案する。" },
  },
  facts: [
    { label: "FY27 Q1売上", value: "$121M(約190億円)", detail: "前年比+1%。1ドル=157円換算。", sourceIds: ["pagerduty-q1fy27-earnings"] },
    { label: "ARR", value: "$496M(約779億円)", detail: "前年とほぼ横ばい。1ドル=157円換算。", sourceIds: ["pagerduty-q1fy27-earnings"] },
    { label: "$100K+ARR顧客数", value: "860社", detail: "前年比+1%。", sourceIds: ["pagerduty-q1fy27-earnings"] },
    { label: "有償顧客数", value: "15,380社", detail: "前年比+1%弱。無償顧客含めると36,000社超。", sourceIds: ["pagerduty-q1fy27-earnings"] },
    { label: "ドルベース純増収率(NRR)", value: "97%", detail: "前年104%から低下。既存顧客からの純増収がマイナスに転じている。", sourceIds: ["pagerduty-q1fy27-earnings"] },
    { label: "日本法人設立", value: "2022年5月", detail: "PagerDutyとJapan Cloudの合弁。代表取締役社長は山根伸行氏(元IBM Japan・Microsoft Japan)。", sourceIds: ["pagerduty-japan-founding", "pagerduty-japan-ceo"] },
  ],
  hypotheses: [
    {
      topic: "GROWTH DECELERATION",
      title: "成長がほぼ止まっている、正直に厳しい局面。",
      conclusion: "売上・ARRとも前年からほぼ横ばいで、NRRも100%を下回っている。新規開拓と同時に、既存顧客の解約・縮小をどう防ぐかが経営課題になっていると考えられる。",
      confidence: "高",
      evidence: ["FY27 Q1売上成長率+1%、ARRほぼ横ばい", "NRR97%(前年104%)"],
      counterSignals: ["$100,000以上のARR顧客数はわずかながら増加しており、大口顧客の完全な縮小ではない"],
      interviewQuestions: ["成長を立て直すために、今どんな戦略を取っていますか"],
      sourceIds: ["pagerduty-q1fy27-earnings"],
    },
    {
      topic: "JAPAN CUSTOMER PROOF",
      title: "NTTグループでの導入実績は、日本市場での強力な武器。",
      conclusion: "NTTドコモ・NTTデータという日本を代表する大企業での導入・成果事例を公式に発表しており、日本市場での信頼構築にはこの実績が有効に使えると考えられる。",
      confidence: "高",
      evidence: ["NTTドコモ: アラート月1万件→1千件、初動対応が数時間→3分に短縮", "NTTデータ: アラートから連絡までの時間を秒〜分単位に短縮"],
      counterSignals: [],
      interviewQuestions: ["NTTグループ以外の主要な日本導入事例を教えてください"],
      sourceIds: ["pagerduty-case-docomo", "pagerduty-case-nttdata"],
    },
    {
      topic: "PARTNERSHIP MODEL",
      title: "Japan Cloudとの合弁という、Brazeと同じ運営モデル。",
      conclusion: "PagerDuty株式会社はPagerDuty本社とJapan Cloudの合弁会社であり、Genba既掲載のBrazeと同じ運営モデルを取っている。評価・昇進の仕組みが本社と完全に同一かどうかは非公開。",
      confidence: "中",
      evidence: ["2022年5月、PagerDutyとJapan Cloudの合弁でPagerDuty株式会社を設立"],
      counterSignals: [],
      interviewQuestions: ["Japan Cloudとの合弁体制は、評価制度や意思決定にどう影響していますか"],
      sourceIds: ["pagerduty-japan-founding"],
    },
    {
      topic: "COMPETITIVE PRESSURE",
      title: "Opsgenie等の低価格競合が、成熟市場での価格競争を激化させている。",
      conclusion: "Opsgenieは同等機能をより低価格で提供しており、Datadog Incident Managementのような監視ツール内蔵型の代替も増えている。価格・機能の両面で防衛戦を強いられている可能性がある。",
      confidence: "中",
      evidence: ["Opsgenieの価格はPagerDutyの同等クラスの約半額とされる", "Datadog Incident Managementのような統合型ソリューションが台頭"],
      counterSignals: ["PagerDutyは分析・自動化ワークフローの深さで依然として優位とされる"],
      interviewQuestions: ["Opsgenieとの価格競争で、失注する主な理由は何ですか"],
      sourceIds: ["pagerduty-competitor-comparison"],
    },
    {
      topic: "LEADERSHIP BACKGROUND",
      title: "日本法人代表はIBM・Microsoft出身のエンタープライズ営業のプロ。",
      conclusion: "山根伸行氏はIBM Japan・Microsoft Japanで15年以上のエンタープライズ営業・DX推進の経験を持つ。大企業向けの複雑な商談・組織運営に強みを持つ人物と考えられる。",
      confidence: "中",
      evidence: ["山根氏の前職はIBM Japan・Microsoft Japanでのエグゼクティブ職"],
      counterSignals: [],
      interviewQuestions: ["山根体制になってから、営業戦略にどんな変化がありましたか"],
      sourceIds: ["pagerduty-japan-ceo"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "「プロフェッショナルの集団」を掲げる、Grit重視の文化。",
    hypothesis: {
      title: "個人の才能より、型とやり抜く力を評価する組織文化。",
      body: "Sr. Sales Manager求人には「天才の集団ではなくプロフェッショナルの集団」「Grit(やり抜く力)」という言葉が明記されている。ARR成長が鈍化する厳しい局面だからこそ、派手さより粘り強さを評価する文化が前面に出ていると考えられる。",
    },
    careerValue: {
      title: "NTTグループでの実績を語れることは、日本エンタープライズ営業として強い武器になる。",
      body: "NTTドコモ・NTTデータという日本最大級の企業への導入・成果事例に関わった経験は、次の転職でも「日本の大企業を動かした実績」として説得力を持つ。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "NTTドコモ",
      products: "PagerDuty",
      outcome: "不要なアラートを月間1万件から1千件に削減、初動対応時間を数時間から3分に短縮(公式事例)。",
      implication: "大規模な通信インフラでのインシデント管理の実績。",
      sourceId: "pagerduty-case-docomo",
    },
    {
      company: "NTTデータ",
      products: "PagerDuty",
      outcome: "アラートから担当者への連絡までの時間を秒〜分単位に短縮、検知漏れをほぼ解消(公式事例)。",
      implication: "SIerのような複雑なシステム運用環境での導入実績。",
      sourceId: "pagerduty-case-nttdata",
    },
  ],
  externalSignals: [
    {
      label: "NRRの低下",
      value: "97%(前年104%)",
      detail: "既存顧客からの純増収がマイナスに転じている。",
      caveat: "IR開示の定義に基づく数値。",
      sourceId: "pagerduty-q1fy27-earnings",
    },
    {
      label: "$100K+ARR顧客の伸びは鈍化",
      value: "860社(前年比+1%)",
      detail: "大口顧客の純増ペースが大きく鈍化している。",
      caveat: "IR開示の定義に基づく数値。",
      sourceId: "pagerduty-q1fy27-earnings",
    },
  ],
  roleLens: {
    salesMotion: "Enterprise AEは大手企業向けの新規開拓・既存深耕の両方を担当し、CxO層への提案が前提。Sr. Sales Managerはチームを率いながら複雑な取引交渉・データドリブンなパイプライン管理を行う。",
    compensation: "PagerDuty Japan固有の給与データは確認できていない。OpenMoneyにはコンサルタント職の年収例のみ確認でき、営業職の具体的なデータはない。",
    quota: "求人票に具体的なクオータ額の記載はない。マネジメント職では配下チームのクオータ達成が評価軸になると考えられる。",
    collaboration: "部門横断的なチームワークが求人で明記されている。Sr. Sales ManagerはSalesforce等のSFAを使ったデータドリブンな管理が前提。",
  },
  leadership: {
    name: "山根 伸行",
    role: "PagerDuty株式会社 代表取締役社長",
    read: "IBM Japan・Microsoft Japanで15年以上のエンタープライズ営業経験を持ち、Microsoft Japan退任時はDX推進を率いるエグゼクティブ職を務めた。大企業向けの複雑な商談・組織運営の経験が豊富な人物。",
    sourceId: "pagerduty-japan-ceo",
  },
  companyStats: {
    globalHeadcount: { value: "約1,155人〜1,268人", detail: "2026年時点の推計。集計元・時期により幅がある。", sourceId: "pagerduty-employees" },
    japanHeadcount: { value: "非公開", detail: "PagerDuty株式会社の正確な人数は確認できていない。" },
    japanOffice: { value: "東京", detail: "PagerDuty株式会社(Japan Cloudとの合弁)。", sourceId: "pagerduty-japan-founding" },
    japanSince: { value: "2022年5月", detail: "PagerDutyとJapan Cloudの合弁で設立。", sourceId: "pagerduty-japan-founding" },
  },
  salesAppeal: {
    intro: "NTTグループのような日本最大級の企業への導入実績を持ちながら、成長の立て直しという難易度の高いミッションに挑戦できる環境。",
    points: [
      { title: "NTTドコモ・NTTデータという最強クラスの実績を語れる", detail: "日本最大級の企業への導入・成果事例が公式に公開されており、商談の入り口で使える強力な材料になる。", sourceIds: ["pagerduty-case-docomo", "pagerduty-case-nttdata"] },
      { title: "「立て直し」というミッションで、経営視点の経験が積める", detail: "NRRが100%を下回る局面での新規開拓・既存深耕は、通常の右肩上がりの会社では得にくい「厳しい環境での立て直し」経験になる。", sourceIds: ["pagerduty-q1fy27-earnings"] },
      { title: "Japan Cloudとの合弁による、日本市場に精通した経営体制", detail: "山根体制のもとIBM・Microsoft出身のエンタープライズ営業ノウハウが日本組織に蓄積されつつある。", sourceIds: ["pagerduty-japan-ceo"] },
      { title: "インシデント管理という、システム障害＝経営リスクを扱う仕事の手応え", detail: "顧客のCxOと「障害対応」という経営リスクを軸に対話する経験は、他のSaaS営業とは違う緊張感と手応えがある。", sourceIds: ["pagerduty-enterprise-ae-job"] },
    ],
  },
  interviewPrep: {
    intro: "成長が鈍化している局面だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "成長を立て直すために、今どんな戦略を取っていますか。", why: "ARR・NRRの数字が示す通り厳しい局面にあり、経営の打ち手を直接確認したい。", sourceIds: ["pagerduty-q1fy27-earnings"] },
      { question: "Opsgenieとの価格競争で、失注する主な理由は何ですか。", why: "低価格競合との競争実態を、現場の営業目線で確認したい。", sourceIds: ["pagerduty-competitor-comparison"] },
      { question: "Japan Cloudとの合弁体制は、評価制度や意思決定にどう影響していますか。", why: "合弁会社特有のガバナンス・評価の仕組みを確認したい。", sourceIds: ["pagerduty-japan-founding"] },
      { question: "NTTグループ以外の主要な日本導入事例を教えてください。", why: "特定の大口顧客への依存度合いを確認したい。", sourceIds: ["pagerduty-case-docomo"] },
    ],
  },
  solutions: [
    {
      name: "PagerDuty Operations Cloud",
      valueProp: "システム障害・インシデント発生時の検知・通知・エスカレーション・対応追跡を自動化するインシデント管理プラットフォーム。",
      url: "https://www.pagerduty.com/platform/",
      competitors: "Opsgenie(Atlassian)、Datadog Incident Management、Splunk On-Callが主要な競合。",
      differentiation: "OpsgenieはAtlassian製品群(Jira、Confluence等)との連携に強く価格も安いが、分析・自動化ワークフローの深さではPagerDutyに分がある。Datadog Incident Managementは監視機能と一体化している点が強みだが、PagerDutyは監視ツールを問わない中立性が特徴とされる。",
      retention: "有償顧客15,380社、$100,000以上のARR顧客860社(FY27 Q1決算)。ただしNRRは97%と、既存顧客の純増収は縮小傾向にある。",
    },
  ],
  customerStoriesUrl: "https://www.pagerduty.co.jp/customers/",
  fitTags: [
    "インシデント管理/運用領域を極めたい",
    "経営リスクとしての障害対応を扱う商談がしたい",
    "厳しい環境での立て直しに挑戦したい",
    "NTTグループ等、大手企業への導入実績を武器にしたい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "Japan Cloudのような合弁モデルでのキャリアに関心がある",
    "データドリブンな営業マネジメントを学びたい",
  ],
  comparisonMap: [
    { arena: "運用監視 / インシデント管理", companies: ["PagerDuty", "Datadog", "ServiceNow"], why: "運用監視・インシデント管理予算の比較" },
  ],
  sources: pagerdutySources,
};

const amplitudeSources: ResearchSource[] = [
  {
    id: "amplitude-q2-2026-earnings",
    label: "Amplitude Q2 2026 Earnings(第1四半期100億円突破・通期ガイダンス上方修正)",
    url: "https://seekingalpha.com/news/4627256-amplitude-expects-407_2m-411_2m-fy2026-revenue-as-it-targets-20-percent-plus-long-term",
    kind: "外部集計",
    scope: "Q2 2026決算・ARR・通期ガイダンス",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-japan-cm-2024",
    label: "Amplitude、日本市場への投資を拡大 - カントリー・マネージャーに仁枝かおりが就任",
    url: "https://prtimes.jp/main/html/rd/p/000000032.000048450.html",
    kind: "企業公式",
    scope: "日本法人代表者(2024年5月就任)",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-competitor-comparison",
    label: "Mixpanel vs Amplitude vs Google Analytics比較",
    url: "https://webeyez.com/insights/guides/mixpanel-vs-amplitude-vs-google-analytics-2026-guide",
    kind: "外部集計",
    scope: "プロダクトアナリティクス製品の競合比較",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-case-gdo",
    label: "Amplitudeのコホート分析によりメール開封率が2倍に(ゴルフダイジェスト・オンライン導入事例)",
    url: "https://growth-marketing.jp/cases/case_gdo_amplitude/",
    kind: "コミュニティ",
    scope: "日本導入事例",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-case-docomo",
    label: "Amplitude｜NTTドコモビジネス 法人のお客さま",
    url: "https://www.ntt.com/business/services/amplitude.html",
    kind: "企業公式",
    scope: "日本導入事例(NTTドコモビジネス経由)",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-employees",
    label: "Amplitude Number of Employees(Revelio Labs)",
    url: "https://www.reveliolabs.com/companies/amplitude/employees/",
    kind: "外部集計",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-ipo",
    label: "CNBC「Amplitude Starts Trading on Nasdaq in Direct Listing」",
    url: "https://www.cnbc.com/2021/09/28/amplitude-starts-trading-on-nasdaq-in-direct-listing.html",
    kind: "外部集計",
    scope: "2021年ダイレクトリスティング(直接上場)の経緯",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-statsig-transfer",
    label: "Amplitude公式ブログ「Amplitude and Statsig Partnership」",
    url: "https://amplitude.com/blog/amplitude-and-statsig-partnership",
    kind: "企業公式",
    scope: "Statsigのブランド・顧客基盤の引き継ぎ(2026年5月、通常の買収とは異なる取引形態)",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-enterprise-ae-job",
    label: "Enterprise Account Executive, Japan求人",
    url: "https://job-boards.greenhouse.io/amplitude/jobs/8487436002",
    kind: "企業公式",
    scope: "Enterprise AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-commercial-ae-job",
    label: "Commercial Account Executive - Japan求人",
    url: "https://boards.greenhouse.io/amplitude/jobs/5151817002",
    kind: "企業公式",
    scope: "Commercial AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "amplitude-q2-2026-detail",
    label: "Stocktitan「Amplitude Announces Second Quarter 2026 Financial」",
    url: "https://www.stocktitan.net/news/AMPL/amplitude-announces-second-quarter-2026-financial-j4ykrz6k3c40.html",
    kind: "外部集計",
    scope: "ARR内訳(Statsig寄与分・オーガニック分)、粗利益率の低下",
    checkedAt: "2026-08-08",
  },
  {
    id: "amplitude-growth-turnaround",
    label: "Investing.com「Amplitude Q1 2026 Slides: 17% Revenue Growth」",
    url: "https://www.investing.com/news/company-news/amplitude-q1-2026-slides-17-revenue-growth-profitability-pressures-93CH-4666031",
    kind: "外部集計",
    scope: "2024年後半からの増収率反転、NRRの回復",
    checkedAt: "2026-08-08",
  },
  {
    id: "amplitude-competitor-posthog",
    label: "productgrowth.in「Mixpanel vs Amplitude vs PostHog」比較記事",
    url: "https://productgrowth.in/insights/ai-ml/mixpanel-vs-amplitude-vs-posthog/",
    kind: "コミュニティ",
    scope: "無料枠の比較、低価格帯競合の圧力",
    checkedAt: "2026-08-08",
  },
  {
    id: "amplitude-2023-nrr-decline",
    label: "Amplitude, Inc. - Form 8-K(2023年Q1決算、NRR低下の開示)",
    url: "https://www.sec.gov/Archives/edgar/data/1866692/000095017023019655/ampl-ex99_1.htm",
    kind: "法定開示",
    scope: "2022〜2023年のNRR低下(127%→98%)",
    checkedAt: "2026-08-08",
  },
  {
    id: "amplitude-japan-localization",
    label: "ProductZine「Amplitude、日本語UI拡充を発表」",
    url: "https://codezine.jp/productzine/article/detail/1834",
    kind: "外部集計",
    scope: "日本語UI拡充とNTTドコモの導入事例",
    checkedAt: "2026-08-08",
  },
  {
    id: "amplitude-japan-headcount",
    label: "SalesNow「AMPLITUDE JAPAN合同会社」企業情報",
    url: "https://salesnow.jp/db/companies/jcb4cb14cvycvskam",
    kind: "外部集計",
    scope: "日本オフィスの人員規模(2025年1月時点で8名)",
    checkedAt: "2026-08-08",
  },
];

const amplitudeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Amplitudeは、デジタルプロダクトを持つ企業のプロダクト、データ、マーケティング部門が、ユーザー行動を分析し、継続利用や成長につながる改善を判断するためのプロダクト分析基盤。「どの機能が利用されているか分からない」「離脱の原因を感覚で判断している」「施策や機能変更の効果を検証できない」といった課題を解決する。分析ツールを売るだけでなく、プロダクトの成長モデルや実験文化に入り込み、利用率・継続率・売上の改善まで顧客と追える点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "AMPL",
    exchange: "NASDAQ",
    listedSince: "2021年",
    stockLinkUrl: "https://stockanalysis.com/stocks/ampl/",
    growthSummary: "2012年にSpenser Skates氏とCurtis Liu氏が創業(音声テキスト化アプリの分析ニーズから着想し、2014年に第3の共同創業者Jeffrey Wang氏を加えて正式にプロダクトを立ち上げ)。2021年9月にNASDAQへダイレクトリスティング(通常のIPOと異なり新株発行を伴わない上場方式)で上場し、初値は$50(直前の非公開ラウンド評価額の約1.5倍)。2026年5月には、OpenAIが買収した実験・フィーチャーフラグ管理ツールStatsigのブランドと顧客基盤を引き継ぐ提携を発表(Statsigのエンジニアリングチーム自体はOpenAIに残る、通常の買収とは異なる取引形態)。これにより「見る(分析)」に加えて「試す・決める(実験)」まで一気通貫で提供できる体制を構築した。Q2 2026には四半期売上が初めて1億ドルを突破するなど、成長が加速している局面にある、というのがGenbaの読み。",
    milestones: [
      { year: "2021", label: "NASDAQへダイレクトリスティング", detail: "新株発行を伴わない上場方式で上場。初値は直前の非公開ラウンド評価額の約1.5倍。", sourceId: "amplitude-ipo" },
      { year: "2026.5", label: "Statsigのブランド・顧客基盤を引き継ぎ", detail: "OpenAIが買収したStatsigのブランドと顧客基盤を引き継ぐ提携を発表。実験・意思決定機能を製品ラインへ追加。", sourceId: "amplitude-statsig-transfer" },
      { year: "2026", label: "四半期売上が初めて1億ドルを突破", detail: "Q2 2026売上1.009億ドル(前年比+21.2%)。$100,000以上のARR顧客も824社(前年比+30%)と加速。", sourceId: "amplitude-q2-2026-earnings" },
    ],
    sourceIds: ["amplitude-ipo", "amplitude-statsig-transfer", "amplitude-q2-2026-earnings"],
    genbaVerdict: {
      headline: "9社の中で最も鮮やかな成長反転。ただし「反転の中身」を分解すると、まだ純オーガニックとは言い切れない。",
      body: "売上成長率は2024年後半の+6%から2026年Q2には+21%まで反転しており、この9社の中でも際立った回復ストーリーを持つ。ただしQ2 2026のARR増加分のうち一部はStatsigのブランド・顧客基盤引き継ぎによる寄与で、非GAAP粗利益率もAI推論コストの増加とStatsigの低採算構造の影響で75%台から71%まで低下している。「回復は本物だが、まだコストを払いながらの回復」という段階、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "売上成長率が2024年後半の+6%から2026年Q2には+21%まで反転",
        body: "四半期売上成長率は2024年Q3の+6%を底に、2026年Q1には+17%、Q2には+21%まで回復。純収益維持率(NRR)も2024年Q1の97%から2026年Q1には106%まで回復しており、既存顧客の解約・縮小に歯止めがかかっている。",
        sourceId: "amplitude-growth-turnaround",
      },
      {
        title: "初の四半期売上1億ドル突破、通期ガイダンスも上方修正",
        body: "Q2 2026に四半期売上が初めて1億ドルを突破($100.9M)。FY2026通期ガイダンスは売上$407.2M〜$411.2M、非GAAP営業利益$630万〜$930万(初の通期黒字目標)へ上方修正された。",
        sourceId: "amplitude-q2-2026-detail",
      },
      {
        title: "Statsigのブランド引き継ぎで、実験・意思決定機能を製品ラインに追加",
        body: "2026年5月、OpenAIが買収したStatsig(実験・フィーチャーフラグ管理)のブランドと顧客基盤を引き継ぐ提携を発表。Q2 2026のARR増加のうち1,700万ドルがStatsig起因、1,900万ドルがオーガニック成長という内訳が開示されている。",
        sourceId: "amplitude-q2-2026-detail",
      },
    ],
    riskHypotheses: [
      {
        title: "成長反転の一部はM&Aの寄与で、利益率はむしろ悪化している",
        body: "Q2 2026のARR増加分のうち1,700万ドルはStatsigのブランド・顧客基盤引き継ぎによる寄与で、純粋なオーガニック成長(1,900万ドル)だけで見ると反転の勢いはやや割り引いて見る必要がある。非GAAP粗利益率も、AI機能の推論コスト増加とStatsigの低採算構造の影響で、前年の77%・前四半期の75%から71%まで低下。非GAAP営業利益率も足元ではまだマイナス(-1.4%、Q2 2026)にとどまる。",
        confidence: "中",
        evidence: [
          "Q2 2026のARR増加分1,700万ドルがStatsig起因、1,900万ドルがオーガニック",
          "非GAAP粗利益率が77%(前年)→75%(前四半期)→71%(Q2 2026)へ低下、非GAAP営業利益率もマイナス圏",
        ],
        counterSignal: "Statsigの寄与を除いたオーガニックARR成長(1,900万ドル)自体も健全な水準にあり、NRRの回復(97%→106%)はStatsig提携発表(2026年5月)より前の2024年から始まっている。既存事業自体が地力で回復している可能性が高い。",
        sourceIds: ["amplitude-q2-2026-detail"],
      },
      {
        title: "PostHog等の低価格・高機能な新興競合による、下位セグメントでの侵食リスク",
        body: "Amplitudeの無料枠(月間MTU 1万)は主要3社の中で最も制限が厳しく、PostHogは分析・セッションリプレイ・フィーチャーフラグ・実験・アンケートを含む、より寛容な無料枠(月間イベント100万件)を提供している。2022〜2023年には実際にNRRが127%から98%まで急落する局面があり、この時期はPostHog等の低価格帯競合が台頭した時期と重なる。",
        confidence: "中",
        evidence: [
          "無料枠の比較でAmplitudeが主要3社の中で最も制限が厳しい(月間MTU 1万)",
          "2022〜2023年にNRRが127%→98%まで急落。低価格帯競合が台頭した時期と重なる",
        ],
        counterSignal: "Amplitudeは130以上の統合連携(Braze、HubSpot、Salesforce、Segment等)とアカウント単位の分析機能を持ち、特にB2B・エンタープライズSaaS領域ではPostHogの開発者ツール寄りのポジショニングに対して優位とされる。NRRがその後106%まで回復した事実は、この防御力が実際に機能していることを示唆する。",
        sourceIds: ["amplitude-competitor-posthog", "amplitude-2023-nrr-decline"],
      },
    ],
    japanGrowth: {
      headline: "日本オフィスはわずか8名。それでもNTTドコモを事例に、日本語UIへの投資を続けている。",
      narrative: "AMPLITUDE JAPAN合同会社は合同会社のため決算公告の義務がなく、財務データは非公開。2025年1月時点の情報では、日本オフィスの人員は8名(グローバル全体は約700名)と、9社の中でも際立って小規模なチームで運営されているとみられる。それでも会社としては、Analytics・A/Bテスト・CDP・レコメンデーションといった機能群の日本語UI対応を拡充しており、NTTドコモの複数サービスでの採用を成長ドライバーの一例として挙げている。導入事例としては、LIFULL(特定キャンペーンでコンバージョン10倍)、ゴルフダイジェスト・オンライン(コホート分析でメール開封率2倍)、大手小売企業(分析業務の年間182時間削減)等が確認できる。NTTコミュニケーションズがAmplitudeを取扱製品として掲載しており、パートナー経由の販売チャネルも持っている。8名という小さなチームで、複数の大企業導入事例と代理店網を回している状態は、量より質を優先した日本展開だと考えられる、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "日本オフィスの人員はわずか8名(2025年1月時点)", detail: "グローバル全体の従業員数(約700名)と比べても際立って小規模なチーム運営。", sourceId: "amplitude-japan-headcount" },
        { label: "日本語UIへの投資とNTTドコモの導入事例", detail: "Analytics・A/Bテスト・CDP・レコメンデーション機能の日本語UI対応を拡充。NTTドコモの複数サービスでの採用を成長ドライバーの一例として挙げている。", sourceId: "amplitude-japan-localization" },
      ],
      sourceIds: ["amplitude-japan-headcount", "amplitude-japan-localization"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Amplitudeの売り方は「プロダクトのどの機能が使われていて、どこで離脱しているかが分からない」という課題が起点。PLG(プロダクト主導型成長)企業ほど刺さりやすい。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "$100,000以上のARR顧客が前年比30%増と、既存顧客の投資拡大が続いている。特定機能の分析から、A/Bテスト・実験基盤(Statsig統合)を含めた「プロダクト全体の意思決定基盤」への拡張が成長パターンになっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "Amplitudeは、企業がどの機能が使われ、どこでユーザーが離脱しているかを定量的に把握できていないという課題を解消するために生まれた。存在理由は「勘や経験ではなく、データでプロダクトの意思決定をする」ことにある。" },
      { title: "外部環境の要求から見る課題", body: "プロダクト主導型成長(PLG)モデルを採る企業が増える中、営業やマーケティングだけでなく、プロダクト自体の使われ方を分析し改善し続ける体制が競争力の差になっている。" },
    ],
    narrative: [
      { label: "背景", body: "多くの企業は自社プロダクトのどの機能がよく使われ、どこでユーザーが離脱しているかを、勘や断片的なデータでしか把握できていない。" },
      { label: "課題", body: "定量的なユーザー行動データがないまま新機能開発や改善に投資すると、効果が出ない施策に時間とコストを浪費するリスクが高い。" },
      { label: "解決策", body: "Amplitudeでユーザーの行動データを一元的に可視化し、コホート分析・ファネル分析・A/Bテストを通じて、どの改善が本当に効果があるかをデータで検証できるようにする。" },
      { label: "選定の理由", body: "Google Analytics(GA4)はマーケティング・集客分析には強いが、プロダクト内部の行動分析には向かない。Mixpanelは使いやすさで評価されるが、コホート分析・実験機能の高度さではAmplitudeに分がある。" },
    ],
    openingHook: "直近リリースした新機能、実際にどれくらいのユーザーが使っているか、数字で把握できていますか。",
    valueHypothesis: "$100,000以上のARR顧客が前年比30%増という開示を根拠に、プロダクト分析の効果を実感した顧客ほど、投資を拡大し続ける傾向がある、という価値仮説を立てる。",
    commonObjection: { objection: "Google Analyticsを使っているので十分では", reframe: "GA4はマーケティング・集客の分析に強いが、ログイン後のプロダクト内部でのユーザー行動(機能利用・離脱ポイント)の分析には向かない。「集客はGA4、プロダクト改善はAmplitude」という役割分担で提案するのが有効。" },
  },
  facts: [
    { label: "Q2 2026売上", value: "$100.9M(約1,584億円)", detail: "前年比+21.2%。初の四半期売上1億ドル突破。1ドル=157円換算。", sourceIds: ["amplitude-q2-2026-earnings"] },
    { label: "ARR", value: "$410M(約6,437億円)", detail: "前年比+22%。Statsigのブランド・顧客基盤引き継ぎによる寄与を含む。1ドル=157円換算。", sourceIds: ["amplitude-q2-2026-earnings"] },
    { label: "$100K+ARR顧客数", value: "824社", detail: "前年比+30%。", sourceIds: ["amplitude-q2-2026-earnings"] },
    { label: "有償顧客数", value: "5,200社", detail: "アナリスト予想(平均5,153社)をやや上回る水準。", sourceIds: ["amplitude-q2-2026-earnings"] },
    { label: "FY2026通期売上ガイダンス", value: "$407.2M〜$411.2M(約6,393億〜6,456億円)", detail: "前年比+19〜20%成長を見込む。上方修正済み。1ドル=157円換算。", sourceIds: ["amplitude-q2-2026-earnings"] },
    { label: "日本法人設立", value: "2014年7月", detail: "2024年5月に仁枝かおり氏がカントリーマネージャーに就任。", sourceIds: ["amplitude-japan-cm-2024"] },
  ],
  hypotheses: [
    {
      topic: "GROWTH ACCELERATION",
      title: "四半期売上1億ドル突破という、明確な成長の節目。",
      conclusion: "Q2 2026で初めて四半期売上1億ドルを超え、通期ガイダンスも上方修正された。$100,000以上の大口顧客が前年比30%増という数字も、成長が加速していることを裏付けている。",
      confidence: "高",
      evidence: ["Q2 2026売上が前年比21.2%増の1.009億ドル、初の四半期1億ドル突破", "$100K+ARR顧客が前年比30%増"],
      counterSignals: ["ARR成長の一部はStatsigのブランド・顧客基盤引き継ぎによる寄与であり、既存事業単体の成長率はやや低い可能性がある"],
      interviewQuestions: ["ARR成長のうち、Statsig引き継ぎの寄与と既存事業の成長は、それぞれどれくらいの比率ですか"],
      sourceIds: ["amplitude-q2-2026-earnings"],
    },
    {
      topic: "M&A EXPANSION",
      title: "Statsigのブランド・顧客基盤引き継ぎで、分析だけでなく「実験・意思決定」まで製品領域を拡大。",
      conclusion: "実験・フィーチャーフラグ管理ツールStatsigのブランドと顧客基盤を引き継いだことで(Statsig自体はOpenAIが買収し、エンジニアリングチームはOpenAI側に残る取引形態)、Amplitudeは「見る(分析)」だけでなく「試す・決める(実験)」まで一気通貫で提供する方向に製品戦略を広げていると考えられる。",
      confidence: "中",
      evidence: ["Statsigのブランド・顧客基盤引き継ぎがARR成長の一部(1,700万ドル)に寄与"],
      counterSignals: [],
      interviewQuestions: ["Statsigの統合は、既存の商談・提案にどう組み込まれていますか"],
      sourceIds: ["amplitude-q2-2026-earnings", "amplitude-statsig-transfer"],
    },
    {
      topic: "TARGET CUSTOMER PROFILE",
      title: "狙うのは伝統的大企業より、急成長デジタルスタートアップ。",
      conclusion: "Enterprise AE求人が「急成長中のデジタルスタートアップ(従業員1,000名規模まで)」を明確なターゲットとしており、プロダクト主導型成長(PLG)企業を優先的に開拓する戦略だと考えられる。",
      confidence: "高",
      evidence: ["Enterprise AE求人に「急成長デジタルスタートアップへの新規ロゴ獲得」が明記"],
      counterSignals: ["NTTドコモのような伝統的大企業での導入事例も存在する"],
      interviewQuestions: ["伝統的な大企業とデジタルネイティブ企業、それぞれの商談の進め方はどう違いますか"],
      sourceIds: ["amplitude-enterprise-ae-job"],
    },
    {
      topic: "JAPAN LEADERSHIP",
      title: "現カントリーマネージャーは複数の外資セキュリティ企業出身。",
      conclusion: "2024年に就任した仁枝かおり氏は、Recorded Future・Vectra AI・Infoblox等での日本法人立ち上げ・GTM戦略の経験を持つ。ゼロからの事業拡大に強みを持つ人物と考えられる。",
      confidence: "中",
      evidence: ["仁枝氏の前職はRecorded Future、Vectra AI、Infobloxでの日本法人立ち上げ経験"],
      counterSignals: [],
      interviewQuestions: ["仁枝体制になってから、日本での営業戦略にどんな変化がありましたか"],
      sourceIds: ["amplitude-japan-cm-2024"],
    },
    {
      topic: "COMPENSATION TRANSPARENCY",
      title: "日本の営業職給与データはほぼ非公開。",
      conclusion: "OpenWork・OpenMoneyともに、Amplitude Japanの営業職給与に関する具体的なデータは確認できなかった。オファー交渉は個別の情報収集が前提になる。",
      confidence: "中",
      evidence: ["OpenWork・OpenMoney検索で営業職の具体的な年収データが確認できず"],
      counterSignals: [],
      interviewQuestions: ["OTE・Base:Incentive比率を教えてください"],
      sourceIds: [],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "急成長スタートアップを狙う、開拓型のセールス文化。",
    hypothesis: {
      title: "「新しいテリトリーを自分で作る」ことが前提の求人設計。",
      body: "Enterprise AE求人には、既存顧客基盤を土台にしながらも「新規テリトリーの構築」「マーケットでのコネクション」が明記されている。まだ確立されていない市場・顧客層を自分で開拓する裁量と負荷の両方が大きいポジションだと考えられる。",
    },
    careerValue: {
      title: "プロダクト分析という専門性は、PLG時代のSaaS営業で価値が上がり続ける。",
      body: "プロダクト主導型成長(PLG)モデルを採用する企業が増える中、「プロダクトの使われ方をデータで語れる」営業経験は、今後のSaaS業界で希少性の高いスキルになると考えられる。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "ゴルフダイジェスト・オンライン(GDO)",
      products: "Amplitude",
      outcome: "コホート分析を活用したターゲティングとコンテンツ施策により、メール開封率が約2倍に改善(導入インタビュー記事)。",
      implication: "国内ECメディア企業でのマーケティング活用実績。",
      sourceId: "amplitude-case-gdo",
    },
    {
      company: "NTTドコモ",
      products: "Amplitude",
      outcome: "複数サービス横断でのデータ活用分析にAmplitudeを採用(NTTドコモビジネス公式サイトに掲載)。",
      implication: "日本の大手通信キャリアでも、伝統的な業態を超えたプロダクト分析ニーズがあることを示す事例。",
      sourceId: "amplitude-case-docomo",
    },
  ],
  externalSignals: [
    {
      label: "$100K+ARR顧客の伸び",
      value: "824社(前年比+30%)",
      detail: "大口顧客の拡大が加速している。",
      caveat: "決算発表資料に基づく数値。",
      sourceId: "amplitude-q2-2026-earnings",
    },
    {
      label: "通期売上ガイダンスの上方修正",
      value: "$407.2M〜$411.2M",
      detail: "Q2決算の好調を受けて、通期売上ガイダンスが上方修正された。",
      caveat: "決算発表資料に基づく数値。",
      sourceId: "amplitude-q2-2026-earnings",
    },
  ],
  roleLens: {
    salesMotion: "Enterprise AEは急成長デジタルスタートアップ(従業員1,000名規模まで)への新規ロゴ獲得が中心、Commercial AEはより小規模な企業層を担当。両セグメントとも新規開拓の比重が大きいと考えられる。",
    compensation: "OpenWork・OpenMoneyともに営業職の具体的な給与データは確認できていない。求人にも給与レンジの記載はない。",
    quota: "求人票に具体的なクオータ額の記載はない。トップパフォーマーとしての実績が求人要件として明記されている。",
    collaboration: "求人票からは、単独での新規開拓力(プロスペクティング・ネットワーキング)が特に重視されていると考えられる。",
  },
  leadership: {
    name: "仁枝 かおり",
    role: "AMPLITUDE JAPAN合同会社 カントリーマネージャー",
    read: "2024年5月に就任。Recorded Future・Vectra AI・Infobloxなど複数の外資セキュリティ企業で、日本法人の立ち上げ・GTM戦略・組織マネジメントを主導してきた実績を持つ。ゼロからの事業拡大を得意とする人物と考えられる。",
    sourceId: "amplitude-japan-cm-2024",
  },
  companyStats: {
    globalHeadcount: { value: "約820〜1,000人", detail: "2026年時点の推計。集計元・時期により幅がある(2023年比+20%超の増加傾向)。", sourceId: "amplitude-employees" },
    japanHeadcount: { value: "非公開", detail: "AMPLITUDE JAPAN合同会社の正確な人数は確認できていない。" },
    japanOffice: { value: "東京", detail: "AMPLITUDE JAPAN合同会社。2014年7月設立。", sourceId: "amplitude-japan-cm-2024" },
    japanSince: { value: "2014年7月", detail: "2024年5月にカントリーマネージャーが仁枝かおり氏へ交代。", sourceId: "amplitude-japan-cm-2024" },
  },
  salesAppeal: {
    intro: "四半期売上1億ドル突破という明確な成長モメンタムと、PLG企業を狙う開拓型営業の裁量の大きさが同居する環境。",
    points: [
      { title: "成長が加速している、数字で語れる会社", detail: "初の四半期売上1億ドル突破、$100K+ARR顧客が前年比30%増と、成長ストーリーを商談でそのまま語れる。", sourceIds: ["amplitude-q2-2026-earnings"] },
      { title: "新規テリトリーを自分で作れる裁量の大きさ", detail: "急成長デジタルスタートアップという、まだ耕されていない市場を開拓する裁量がある。", sourceIds: ["amplitude-enterprise-ae-job"] },
      { title: "Statsig引き継ぎによる製品領域の拡大", detail: "分析だけでなく実験・意思決定まで扱えるようになり、商談で語れる価値提案の幅が広がっている。", sourceIds: ["amplitude-statsig-transfer"] },
      { title: "PLG(プロダクト主導型成長)という今後伸びる領域の専門性", detail: "プロダクト分析の知見は、PLGモデルを採用する企業が増える中で希少価値が高まり続けると考えられる。", sourceIds: ["amplitude-competitor-comparison"] },
    ],
  },
  interviewPrep: {
    intro: "成長が加速している局面だからこそ、実態を確認しておきたい質問例です。",
    questions: [
      { question: "ARR成長のうち、Statsig引き継ぎの寄与と既存事業の成長は、それぞれどれくらいの比率ですか。", why: "成長の中身(有機的成長か引き継ぎによる寄与か)を正確に把握したい。", sourceIds: ["amplitude-q2-2026-earnings"] },
      { question: "伝統的な大企業とデジタルネイティブ企業、それぞれの商談の進め方はどう違いますか。", why: "ターゲット顧客像の違いによる、実際の営業活動のイメージをつかみたい。", sourceIds: ["amplitude-enterprise-ae-job"] },
      { question: "仁枝体制になってから、日本での営業戦略にどんな変化がありましたか。", why: "リーダーシップ交代後の戦略の連続性・変化を確認したい。", sourceIds: ["amplitude-japan-cm-2024"] },
      { question: "OTE・Base:Incentive比率を教えてください。", why: "公開されている給与データがなく、面接で直接確認する必要がある。", sourceIds: [] },
    ],
  },
  solutions: [
    {
      name: "Amplitude Analytics",
      valueProp: "ユーザーの行動データを可視化し、コホート分析・ファネル分析・リテンション分析でプロダクト改善の意思決定を支援する。",
      url: "https://amplitude.com/amplitude-analytics",
      competitors: "Mixpanel、Google Analytics(GA4)が主要な競合。",
      differentiation: "GA4はマーケティング・集客分析(セッションベース)に強いが、ログイン後のプロダクト内行動分析(イベントベース)には向かない。Mixpanelは使いやすさに定評があるが、コホート分析・予測分析の高度さではAmplitudeに分がある。",
      retention: "$100,000以上のARR顧客が前年比30%増の824社(Q2 2026決算)。大口顧客の拡大が加速している。",
    },
    {
      name: "Amplitude Experiment(Statsig統合)",
      valueProp: "A/Bテスト・フィーチャーフラグ管理を通じて、プロダクト変更の効果を検証しながら安全にリリースできる実験基盤。",
      url: "https://amplitude.com/amplitude-experiment",
      competitors: "LaunchDarkly、Optimizelyが主要な競合。",
      differentiation: "分析(Amplitude Analytics)と実験機能が同一プラットフォーム上で連携している点が、別々のツールを使う競合との差別化点とされる。",
      retention: "2026年のStatsigブランド・顧客基盤引き継ぎによる統合で、比較的新しい製品領域。継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://amplitude.com/customers",
  fitTags: [
    "プロダクトアナリティクス領域を極めたい",
    "PLG(プロダクト主導型成長)企業への提案経験を積みたい",
    "新規テリトリーを自分で切り拓きたい",
    "成長が加速している会社で初期メンバーとして関わりたい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "データを使ってストーリーを語る力を鍛えたい",
    "急成長デジタルスタートアップを相手にした商談がしたい",
  ],
  comparisonMap: [
    { arena: "プロダクトアナリティクス", companies: ["Amplitude", "Salesforce"], why: "データ分析関連予算の比較" },
    { arena: "マーケティングテクノロジー", companies: ["Amplitude", "HubSpot", "Braze"], why: "マーケティング/プロダクト予算の比較" },
  ],
  sources: amplitudeSources,
};

const contentsquareSources: ResearchSource[] = [
  {
    id: "csq-founding",
    label: "Alejandro Cremades「Jonathan Cherki, Contentsquare」創業ストーリー",
    url: "https://alejandrocremades.com/jonathan-cherki/",
    kind: "外部集計",
    scope: "2012年の創業経緯・ESSEC在学中の着想",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-funding-history",
    label: "Contentsquare公式「Company」ページ(資金調達履歴)",
    url: "https://contentsquare.com/company/",
    kind: "企業公式",
    scope: "Series A〜Fの調達額・時期",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-series-e",
    label: "Cooley「Contentsquare's Valuation Reaches $2.8 Billion With Series E Round」",
    url: "https://www.cooley.com/news/coverage/2021/2021-06-08-contentsquares-valuation-reaches-2-8-billion-with-series-e-round",
    kind: "外部集計",
    scope: "2021年Series E($5億、評価額$28億)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-series-f",
    label: "Sixth Street「Contentsquare Closes $600M Growth Investment Round」",
    url: "https://sixthstreet.com/investment_announce/contentsquare-closes-600m-growth-investment-round-led-by-sixth-street-doubles-valuation-to-5-6b-and-brings-total-funding-to-1-4-billion/",
    kind: "企業公式",
    scope: "2022年Series F($6億、評価額$56億、累計調達額$14億)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-heap-acquisition",
    label: "Contentsquare「Completes Acquisition of Heap」プレスリリース",
    url: "https://contentsquare.com/press/contentsquare-completes-acquisition-heap/",
    kind: "企業公式",
    scope: "2023年Heap買収完了(同社史上最大の買収)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-loris-acquisition",
    label: "Contentsquare「Completes Acquisition of Loris AI」プレスリリース",
    url: "https://contentsquare.com/press/contentsquare-completes-acquisition-of-loris-ai/",
    kind: "企業公式",
    scope: "2025年Loris AI買収完了(会話型AI・CX分析)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-ai-sense",
    label: "BusinessWire「Contentsquare Announces Sense, an AI Agent That Plans and Acts Like an Analyst」",
    url: "https://www.businesswire.com/news/home/20250513200292/en/Contentsquare-Announces-Sense-an-AI-Agent-That-Plans-and-Acts-Like-an-Analyst",
    kind: "外部集計",
    scope: "2025年5月のAIエージェント「Sense」発表",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-ai-2026-expansion",
    label: "PR Newswire「Contentsquare Launches New AI Agent and Analytics Capabilities...Across LLMs, ChatGPT Apps, Web and Mobile」",
    url: "https://www.prnewswire.com/news-releases/contentsquare-launches-new-ai-agent-and-analytics-capabilities-to-understand-customer-journeys-across-llms-chatgpt-apps-web-and-mobile-302715631.html",
    kind: "企業公式",
    scope: "2026年3月、生成AI経由の顧客体験計測への拡張",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-layoffs",
    label: "TechLayoffs.net「Contentsquare Layoffs」集計",
    url: "https://www.techlayoffs.net/contentsquare-layoffs/",
    kind: "外部集計",
    scope: "2023〜2025年のレイオフ履歴",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-clarity-competition",
    label: "Contentsquare公式ブログ「Contentsquare vs Clarity」比較記事",
    url: "https://contentsquare.com/blog/contentsquare-vs-clarity/",
    kind: "企業公式",
    scope: "無料の競合Microsoft Clarityとの比較(自社発行のため一定のバイアスに留意)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-japan-registry",
    label: "houjin.jp「Contentsquare Japan合同会社」企業情報",
    url: "https://houjin.jp/c/4010003037126",
    kind: "外部集計",
    scope: "日本法人の登記情報(法人番号・所在地)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-japan-sdr-job",
    label: "Sales Development Representative求人(Lever、日本事業紹介文を含む)",
    url: "https://jobs.lever.co/contentsquare/ca8108e5-4993-40e0-b89a-5728218df5cb",
    kind: "企業公式",
    scope: "SDRの役割・要件、日本チーム約18名・主要顧客への言及",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-japan-leadership-change",
    label: "LinkedIn 堀井健一郎氏プロフィール",
    url: "https://jp.linkedin.com/in/kenichiro-horii-9643a15",
    kind: "外部集計",
    scope: "2026年2月のカントリーマネージャー就任(前任者は伊奈憲一郎氏)",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-japan-founding-press",
    label: "PR TIMES「Contentsquare、日本法人設立」プレスリリース",
    url: "https://prtimes.jp/main/html/rd/p/000000004.000080319.html",
    kind: "企業公式",
    scope: "2022年4月の日本法人設立、初代カントリーマネージャー(伊奈憲一郎氏)の経歴",
    checkedAt: "2026-08-09",
  },
  {
    id: "csq-japan-case-tbc",
    label: "GAPRISE導入事例「TBCグループ株式会社」",
    url: "https://www.gaprise.com/works/202208171033",
    kind: "外部集計",
    scope: "日本導入事例",
    checkedAt: "2026-08-09",
  },
];

const contentsquareIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Contentsquareは、ECやWebサービスを運営する企業のデジタル、UX、マーケティング部門が、ユーザーが画面上で迷い、離脱する理由を可視化するデジタル体験分析基盤。「アクセス数は分かるが離脱理由が分からない」「UX改善が担当者の感覚に依存している」「サイト障害や使いにくさによる売上損失を把握できない」といった課題を解決する。ユーザー行動の発見から改善施策の優先順位、売上影響までつなぎ、経営、マーケティング、プロダクト、開発を横断する提案ができる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2012年、Jonathan Cherki氏がESSEC Business School在学中に着想した学生プロジェクトから創業。「企業が提供していると思っているデジタル体験」と「実際に消費者が体験している中身」のギャップに着目したのが原点で、2012〜2016年はブートストラップで運営し社員約100人まで成長した。2016年のSeries A($2,000万)以降、2021年5月のSeries E($5億、評価額$28億、SoftBank Vision Fund 2主導)、2022年7月のSeries F($6億、評価額を1年で倍増させ$56億、Sixth Street主導)と大型調達を重ね、累計調達額は$14億に達している。2023年にはプロダクト分析大手Heapを、2025年には会話型AI・CX分析のLoris AIを買収し、単なるヒートマップ・セッションリプレイのツールから「Experience Intelligence」を掲げる統合プラットフォームへ拡張してきた。非公開企業のため財務詳細は開示されていないが、2023年以降ほぼ毎年レイオフを実施しながらも大型買収を続けるという、拡大と縮小が同時に進む局面が続いている、というのがGenbaの読み。",
    ipoOutlookSummary: "Cherki氏本人による具体的なIPO時期の言及は確認できていない。一部のアナリスト記事では「成長一辺倒から効率重視の経営への転換が進めばIPO候補になりうる」という観測はあるが、これは業界一般の推測であり、Contentsquare固有の確定情報ではない。SoftBank・KKR・Sixth Street等、複数のVC・PE・SWFが分散して出資しており、単独の株主が主導権を握る構造にはなっていないため、上場のタイミングは複数の株主の合意形成に左右されると考えられる。",
    milestones: [
      { year: "2012", label: "ESSEC在学中に創業", detail: "Jonathan Cherki氏が学生プロジェクトとして着想。2012〜2016年はブートストラップで運営し社員約100人まで成長。", sourceId: "csq-founding" },
      { year: "2021.5", label: "Series Eで評価額$28億", detail: "$5億を調達、SoftBank Vision Fund 2主導。累計調達額$8.1億。", sourceId: "csq-series-e" },
      { year: "2022.7", label: "Series Fで評価額$56億(1年で倍増)", detail: "$6億を調達(エクイティ$4億+デット$2億)、Sixth Street主導。累計調達額$14億。", sourceId: "csq-series-f" },
      { year: "2023", label: "Heapを買収(自社史上最大の買収)", detail: "プロダクト分析大手Heapを統合し、セッションリプレイ中心のツールから分析プラットフォームへ拡張。", sourceId: "csq-heap-acquisition" },
      { year: "2025", label: "Loris AIを買収", detail: "会話型AI・カスタマーサポート分析を統合し、AIエージェント「Sense」による自律分析機能を強化。", sourceId: "csq-loris-acquisition" },
    ],
    sourceIds: ["csq-founding", "csq-series-e", "csq-series-f", "csq-heap-acquisition", "csq-loris-acquisition"],
    genbaVerdict: {
      headline: "買収は止まらないのに、レイオフも止まらない。3年以上続く「拡大と縮小の同時進行」。",
      body: "2023年以降ほぼ毎年、約200人・1割規模のレイオフを実施しながら、同じ期間にHeap(2023年)・Loris AI(2025年)という大型買収で製品領域を拡張し続けている。2024年1月には「レイオフはしない」と伝えた1か月後に同規模の削減を行ったという従業員証言もあり、社内コミュニケーションへの不信も指摘されている。$56億という評価額を維持したまま非公開企業であり続けており、拡大投資と人員削減を同時に進めるという難しい舵取りが続いている、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "Heap・Loris AI買収による製品領域の拡張",
        body: "2023年のHeap買収(自社史上最大)でプロダクト分析機能を、2025年のLoris AI買収で会話型AI・カスタマーサポート分析を取り込んだ。2026年3月にはChatGPTアプリ内行動分析・LLMトラフィック可視化・Claude/Cursor/Microsoft CopilotとのMCP連携も発表し、生成AI経由の顧客体験まで計測範囲を広げている。",
        sourceId: "csq-ai-2026-expansion",
      },
      {
        title: "自律型AIエージェント「Sense」による分析の自動化",
        body: "2025年5月に発表した「Sense」は、人間のアナリストのように計画・分析・実行までを担うAIエージェント。データを人が読み解く従来型の分析から、AIが能動的に洞察を出す方向への製品転換を進めている。",
        sourceId: "csq-ai-sense",
      },
      {
        title: "American Express・Dell・IKEA・LVMH・Toyota等、大手ブランドの継続導入",
        body: "グローバルではAmerican Express、Best Buy、Dell、IKEA、LVMH、Toyotaといった大手ブランドが導入企業として公式・準公式に言及されており、エンタープライズ市場での定着が進んでいる。",
        sourceId: "csq-funding-history",
      },
    ],
    riskHypotheses: [
      {
        title: "2023年以降、ほぼ毎年レイオフを繰り返している",
        body: "2023年初めに約200人(1割規模)、2024年1月にも約200人(1割規模、「レイオフはしない」という説明の1か月後)、2025年11月にも従業員証言ベースでのレイオフが確認されている。Glassdoor等の口コミでは「毎年年始にレイオフが起きるパターン」「潤沢な資金とIPOの機会を活かせていない」という批判的な声が目立つ。",
        confidence: "中",
        evidence: [
          "2023年初め・2024年1月・2025年11月と、ほぼ毎年1割規模のレイオフが確認されている",
          "2024年のレイオフは「レイオフはしない」という社内説明の1か月後に実施されたとの従業員証言がある",
        ],
        counterSignal: "レイオフと同時期にHeap(2023年)・Loris AI(2025年)という大型買収を実行しており、単なる縮小ではなく事業ポートフォリオの入れ替え(低成長領域の縮小と高成長領域への再投資)という側面もあると考えられる。",
        sourceIds: ["csq-layoffs"],
      },
      {
        title: "無料の競合Microsoft Clarityが、低価格帯の入り口を侵食している可能性",
        body: "Microsoft Clarity(無料・無制限セッション)は、行動分析を初めて導入する企業層の入り口を奪う存在になっている。Contentsquare自身が「Clarityは『何が起きたか』は見せるが『なぜ』は見せない」という比較コンテンツを複数発信していること自体が、この価格帯からの圧力を意識している証左と考えられる。",
        confidence: "探索中",
        evidence: [
          "Microsoft Clarityは無料・無制限セッションで、行動分析の入門層を取り込んでいる",
          "Contentsquare自身がClarityとの比較コンテンツを複数の記事で発信している",
        ],
        counterSignal: "ContentsquareはHeap買収でプロダクト分析、Loris AI買収で会話型CX分析へと機能を広げており、年間契約額数万ドル規模のエンタープライズ向けという価格帯そのものを、Clarityとは異なる土俵に位置づけようとしていると考えられる。",
        sourceIds: ["csq-clarity-competition"],
      },
    ],
    japanGrowth: {
      headline: "カントリーマネージャーが2026年2月に交代したばかり。日本の求人はSDR1件のみという足元の実態。",
      narrative: "Contentsquare Japan合同会社は合同会社のため決算公告の義務がなく、財務データは非公開。2022年4月の設立以来、初代カントリーマネージャーの伊奈憲一郎氏(前職Salesforce Japanでリージョナルバイスプレジデント等を13年間歴任)が日本事業を率いてきたが、2026年1月末にDatabricksへ転じ、2026年2月から堀井健一郎氏(同じく前職Salesforce Japanでリージョナルセールスディレクター)が後任のカントリーマネージャーに就任している。日本チームは約18名(AE・SDR・プリセールス・CSM・マーケティング・パートナーセールス)とされ、ソニー・三井住友カード・カシオ・ベルーナ・ソフトバンク等、60社超のエンタープライズ顧客を持つと公式求人票内で紹介されている。ただし2026年8月時点で公式採用ページ経由で確認できる日本向け求人はSDR職1件のみで、カントリーマネージャー交代直後というタイミングもあり、他職種の採用ペースは公開情報からは読み取れない。電通デジタル・ギャプライズ・ディレクタス・SORAMICHI等、複数の代理店・SIerとのパートナーシップは継続しており、日本市場での存在感を維持する動きは見える、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "カントリーマネージャーが2026年2月に交代", detail: "初代の伊奈憲一郎氏(前職Salesforce Japan)が2026年1月末にDatabricksへ転出。後任は堀井健一郎氏(同じく前職Salesforce Japan)。", sourceId: "csq-japan-leadership-change" },
        { label: "日本チーム約18名、60社超のエンタープライズ顧客", detail: "AE・SDR・プリセールス・CSM・マーケティング・パートナーセールスで構成。ソニー・三井住友カード・カシオ・ベルーナ・ソフトバンク等が導入企業として公式求人票で紹介されている。", sourceId: "csq-japan-sdr-job" },
        { label: "公式に確認できる日本向け求人はSDR1件のみ(2026年8月時点)", detail: "検索エンジンには他にAE等の求人インデックスも見られたが、公式採用ページのAPI経由で確認すると現在の掲載はSDR1件のみだった。", sourceId: "csq-japan-sdr-job" },
      ],
      sourceIds: ["csq-japan-leadership-change", "csq-japan-sdr-job", "csq-japan-founding-press"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Contentsquareの売り方は「サイトのアクセス解析(何が起きたか)は分かるが、なぜユーザーが離脱するのかが分からない」という課題が起点。UXチーム・プロダクトチーム・マーケティングチームそれぞれの持つデータの断片を、行動の文脈ごと可視化する提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "特定ページの離脱率改善という個別課題の解決から入り、その後Heap統合によるプロダクト分析、Loris AI統合による会話ログ分析まで対象を広げるのが拡張パターン。Amex・Dell・IKEA・LVMH・Toyota等、大手ブランドでの継続利用がこの拡張力を裏付けている。" },
      { title: "製品の成り立ちから見る課題", body: "Contentsquareは、企業が「提供していると思っているデジタル体験」と「実際に消費者が体験している中身」にギャップがあるという課題を解消するために創業した。存在理由は「行動データを、数字ではなく実際の画面の動きとして見せる」こと。" },
      { title: "外部環境の要求から見る課題", body: "生成AI経由(ChatGPTアプリ内等)での顧客接点が急増する中、従来のWebアクセス解析だけでは顧客体験の全体像を捉えきれなくなっており、LLMトラフィックまで含めた計測基盤への投資圧力が高まっている。" },
    ],
    narrative: [
      { label: "背景", body: "UXチーム・プロダクトチーム・マーケティングチームは、それぞれ異なるツールでユーザーの行動データを見ており、全体像を共有できていない。" },
      { label: "課題", body: "アクセス解析ツールは「どのページで離脱したか」という数字は見せるが、「なぜ離脱したのか」という行動の文脈(迷い・エラー・不満)までは見えない。" },
      { label: "解決策", body: "Contentsquareでセッションリプレイ・ヒートマップ・行動分析を統合し、AIエージェント「Sense」が離脱要因の仮説出しまで自動で行う体制を作る。" },
      { label: "選定の理由", body: "Microsoft Clarityは無料だが「何が起きたか」の可視化にとどまる。Adobe Analytics・Amplitudeは強力だが、行動の文脈(実際の画面の動き)を直感的に見せる力ではContentsquareに分があるとされる。エンタープライズ規模の顧客基盤と、Heap・Loris AI買収による機能拡張が選定理由として語られやすい。" },
    ],
    openingHook: "直近、サイトやアプリで離脱率が高いページ、なぜユーザーが離脱したのか、理由まで説明できますか。",
    valueHypothesis: "Amex・Dell・IKEA・LVMH・Toyotaのような大手ブランドが継続導入しているという開示を根拠に、一度エンタープライズ規模で定着すると、UX・プロダクト・マーケティングの複数チームにまたがる全社インフラとして扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "Microsoft Clarityが無料なので、それで十分では", reframe: "Clarityは「何が起きたか」の可視化には強いが、「なぜ起きたか」という行動の文脈やAIによる自動分析までは踏み込まない。「入門はClarity、経営判断に使う本格分析はContentsquare」という住み分けで提案するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2012年", detail: "Jonathan Cherki氏がESSEC Business School在学中に着想。2012〜2016年はブートストラップで運営。", sourceIds: ["csq-founding"] },
    { label: "累計調達額", value: "$14億(約2,198億円)", detail: "Series A(2016)〜Series F(2022)まで。1ドル=157円換算。", sourceIds: ["csq-series-f"] },
    { label: "直近評価額", value: "$56億(約8,792億円)", detail: "2022年7月のSeries F時点。1年で評価額が倍増した。1ドル=157円換算。", sourceIds: ["csq-series-f"] },
    { label: "日本法人設立", value: "2022年4月", detail: "Contentsquare Japan合同会社。2026年2月にカントリーマネージャーが交代。", sourceIds: ["csq-japan-founding-press", "csq-japan-leadership-change"] },
  ],
  hypotheses: [
    {
      topic: "M&A STRATEGY",
      title: "Heap・Loris AIの買収で、「見る」ツールから「判断する」プラットフォームへ拡張中。",
      conclusion: "2023年のHeap買収(プロダクト分析)、2025年のLoris AI買収(会話型AI分析)により、単なるセッションリプレイ・ヒートマップのツールから、複数のデータソースを横断してAIが分析するプラットフォームへの転換が進んでいると考えられる。",
      confidence: "高",
      evidence: ["2023年、自社史上最大の買収としてHeapを統合", "2025年、Loris AIを買収し会話型AI分析を追加"],
      counterSignals: ["買収による機能拡張と同時にレイオフも繰り返しており、統合コストが組織に負荷をかけている可能性がある"],
      interviewQuestions: ["HeapやLoris AIの統合は、営業の提案内容やターゲット顧客にどう影響していますか"],
      sourceIds: ["csq-heap-acquisition", "csq-loris-acquisition"],
    },
    {
      topic: "LAYOFF PATTERN",
      title: "2023年以降、ほぼ毎年レイオフを繰り返している。",
      conclusion: "2023年初め・2024年1月・2025年11月と、確認できる範囲でほぼ毎年1割規模のレイオフが発生している。2024年は「レイオフはしない」という説明の1か月後に実施されたとの証言もあり、社内コミュニケーションへの不信が一部で指摘されている。",
      confidence: "中",
      evidence: ["2023年初め・2024年1月に、それぞれ約200人(1割規模)のレイオフ", "2025年11月にも従業員証言ベースでのレイオフが確認されている"],
      counterSignals: ["レイオフと同時期に大型買収(Heap・Loris AI)を実行しており、事業縮小ではなくポートフォリオの入れ替えという側面もある"],
      interviewQuestions: ["直近1年で日本チームの人員に変化はありましたか。グローバルのレイオフは日本にも影響していますか"],
      sourceIds: ["csq-layoffs"],
    },
    {
      topic: "OWNERSHIP STRUCTURE",
      title: "IPO観測はあるが、単独株主が主導権を握らない分散した株主構成。",
      conclusion: "SoftBank Vision Fund 2、KKR、Sixth Street、BlackRock、Bpifrance、Eurazeo、Canaan、Highland Europe等、VC・PE・SWFが分散して出資しており、単独の株主が過半数を握る構造ではないと考えられる。IPOの具体的な時期についてCherki氏本人からの言及は確認できていない。",
      confidence: "中",
      evidence: ["Series F(2022年)の主要投資家がSixth Street・KKR・SoftBank・BlackRock等、多数に分散", "創業者Cherki氏によるIPO時期の公式言及は検索範囲内で確認できず"],
      counterSignals: ["一部のアナリスト記事では、効率重視の経営への転換が進めばIPO候補になりうるとの観測がある(業界一般の推測であり確定情報ではない)"],
      interviewQuestions: ["IPOに関する社内の方針や時期感について、何か共有されている情報はありますか"],
      sourceIds: ["csq-series-f"],
    },
    {
      topic: "JAPAN LEADERSHIP TRANSITION",
      title: "日本のカントリーマネージャーが2026年2月に交代したばかり。",
      conclusion: "初代カントリーマネージャーの伊奈憲一郎氏(前職Salesforce Japan、13年在籍)が2026年1月末にDatabricksへ転じ、2026年2月から堀井健一郎氏(同じく前職Salesforce Japan)が後任に就いた。設立から約4年での初めてのトップ交代であり、方針の連続性・変化を見極める必要がある局面にある。",
      confidence: "高",
      evidence: ["初代カントリーマネージャーが2026年1月末に退任、Databricksへ転出", "後任の堀井健一郎氏も前職Salesforce Japanでリージョナルセールスディレクターを務めた人物"],
      counterSignals: ["前任・後任ともにSalesforce Japan出身であり、営業組織の作り方・文化には一定の連続性が期待できる可能性がある"],
      interviewQuestions: ["堀井体制になってから、日本の営業戦略や採用方針にどんな変化がありましたか"],
      sourceIds: ["csq-japan-leadership-change"],
    },
    {
      topic: "JAPAN HIRING PACE",
      title: "日本の求人はSDR1件のみ。他職種の採用ペースは公開情報から読み取れない。",
      conclusion: "日本チームは約18名(AE・SDR・プリセールス・CSM・マーケティング・パートナーセールス)とされるが、2026年8月時点で公式採用ページ経由で確認できる求人はSDR職1件のみだった。カントリーマネージャー交代直後というタイミングもあり、積極採用フェーズにあるのか、体制固めの時期にあるのかは判断できない。",
      confidence: "中",
      evidence: ["公式採用ページ(Lever)経由で確認できる日本向け求人は、2026年8月時点でSDR1件のみ", "日本チームは6職種(AE・SDR・プリセールス・CSM・マーケティング・パートナーセールス)で構成されているとされる"],
      counterSignals: ["求人が少ないことは、必ずしも採用に消極的であることを意味せず、欠員が出ていないだけの可能性もある"],
      interviewQuestions: ["直近1年で日本チームの採用人数はどれくらいでしたか。今後の採用計画はありますか"],
      sourceIds: ["csq-japan-sdr-job"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "「拡大と縮小の同時進行」を、日本の小さなチームがどう受け止めているか。",
    hypothesis: {
      title: "フランス発のスタートアップ文化と、繰り返されるレイオフへの不安が同居する組織。",
      body: "Contentsquareはフランス発の起業家精神を持つ企業として、大型買収による製品拡張を積極的に進めてきた一方、2023年以降ほぼ毎年レイオフを繰り返しており、従業員の間には将来への不安も一定程度あると考えられる。日本チームは約18名という小規模な組織のため、グローバルの意思決定の影響を受けやすい可能性がある。",
    },
    careerValue: {
      title: "デジタル体験分析という専門性は、CX・プロダクト・マーケティング全般で評価されやすい。",
      body: "セッションリプレイ・行動分析・AIエージェントを組み合わせた提案経験は、Amplitude等の隣接領域や、CX・マーケティングテクノロジー企業全般への転職でも再現性を説明しやすい。一方、日本チームが小規模でカントリーマネージャーも交代したばかりのため、組織の安定性という観点では情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    {
      company: "TBCグループ株式会社",
      products: "Contentsquare",
      outcome: "2021年から継続利用。サイトリニューアル時のUX改善に活用(第三者事例)。",
      implication: "日本の消費者向けサービス企業での導入・継続利用実績。",
      sourceId: "csq-japan-case-tbc",
    },
  ],
  externalSignals: [
    {
      label: "評価額の推移",
      value: "$28億(2021年)→$56億(2022年)",
      detail: "Series EからSeries Fまでの1年間で評価額が倍増した。",
      caveat: "2022年7月以降の評価額の更新は確認できていない。",
      sourceId: "csq-series-f",
    },
    {
      label: "レイオフの頻度",
      value: "2023年・2024年・2025年に、ほぼ毎年発生",
      detail: "確認できる範囲でいずれも約200人・1割規模とされる。",
      caveat: "従業員証言・第三者集計に基づく情報で、会社による公式な規模開示は確認できていない。",
      sourceId: "csq-layoffs",
    },
  ],
  roleLens: {
    salesMotion: "現在確認できる日本の求人はSDR職のみで、Head of Sales Development APJ配下でパーソナライズしたメール・ネットワーキング・業界イベント・紹介を通じた新規開拓が中心。C級幹部を含む意思決定者との関係構築、構造化された営業計画の実行が求められる。",
    compensation: "Contentsquare Japan固有の給与データは確認できていない。求人にも給与レンジの記載はない。",
    quota: "四半期・年間の目標達成が前提とされるが、具体的なクオータ額は非公開。",
    collaboration: "Head of Sales Development APJへの直接レポートで、日本市場向けの営業戦略の型作りに関与する立場。プリセールス・CSM・マーケティング・パートナーセールスを含む約18名の小規模チームでの連携が前提。",
  },
  leadership: {
    name: "堀井 健一郎",
    role: "Contentsquare Japan合同会社 カントリーマネージャー",
    read: "2026年2月に就任。前職はSalesforce Japanでリージョナルセールスディレクターを務めた人物。前任の伊奈憲一郎氏(同じくSalesforce Japan出身、13年在籍)がDatabricksへ転じたことに伴う交代で、営業組織の作り方という点では一定の連続性が期待できる可能性がある。",
    sourceId: "csq-japan-leadership-change",
  },
  companyStats: {
    globalHeadcount: { value: "約1,000〜1,800人", detail: "出典により976人(2025年7月時点)〜1,800人前後(2026年推計)と幅がある。公式の単一数値は非開示。", sourceId: "csq-funding-history" },
    japanHeadcount: { value: "約18人", detail: "AE・SDR・プリセールス・CSM・マーケティング・パートナーセールスで構成(公式求人票の記載)。", sourceId: "csq-japan-sdr-job" },
    japanOffice: { value: "東京都千代田区丸の内(WeWork内)", detail: "Contentsquare Japan合同会社。2022年8月に霞が関から移転。", sourceId: "csq-japan-registry" },
    japanSince: { value: "2022年4月", detail: "2026年2月にカントリーマネージャーが堀井健一郎氏へ交代。", sourceId: "csq-japan-founding-press" },
  },
  salesAppeal: {
    intro: "フランス発の起業家精神と、Heap・Loris AI買収による製品拡張力を併せ持つ、日本ではまだ小さな組織だからこそ裁量が大きい環境。",
    points: [
      { title: "18名という小規模チームだからこその裁量の大きさ", detail: "SDRという入り口からでも、日本市場向けの営業戦略の型作りに直接関与できる立場にある。", sourceIds: ["csq-japan-sdr-job"] },
      { title: "Amex・Dell・IKEA・LVMH・Toyotaクラスの大手ブランド事例を語れる", detail: "グローバルでの大手ブランド導入実績を、日本の商談でも参照材料として使える。", sourceIds: ["csq-funding-history"] },
      { title: "Heap・Loris AI買収による、提案の幅の広さ", detail: "セッションリプレイだけでなく、プロダクト分析・会話型AI分析まで含めた提案ができる。", sourceIds: ["csq-heap-acquisition", "csq-loris-acquisition"] },
      { title: "デジタル体験分析という、CX全般で通用する専門性", detail: "UX・プロダクト・マーケティングを横断する分析提案の経験は、隣接領域の企業への転職でも評価されやすい。", sourceIds: ["csq-ai-sense"] },
    ],
  },
  interviewPrep: {
    intro: "カントリーマネージャー交代直後というタイミングだからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "堀井体制になってから、日本の営業戦略や採用方針にどんな変化がありましたか。", why: "トップ交代直後の組織で、方針の連続性・変化を確認したい。", sourceIds: ["csq-japan-leadership-change"] },
      { question: "直近1年で日本チームの人員に変化はありましたか。グローバルのレイオフは日本にも影響していますか。", why: "グローバルで繰り返されているレイオフが、日本チームにどう波及しているかを確認したい。", sourceIds: ["csq-layoffs"] },
      { question: "SDRとして開拓する対象は、ゼロからの新規開拓ですか、それとも大手企業への食い込みも含みますか。", why: "求人票に言及のある60社超のエンタープライズ顧客との関係性を具体的に確認したい。", sourceIds: ["csq-japan-sdr-job"] },
      { question: "Heap・Loris AIの統合は、実際の商談でどこまで提案に組み込まれていますか。", why: "買収した製品群が、現場の提案でどこまで実装されているかを確認したい。", sourceIds: ["csq-heap-acquisition", "csq-loris-acquisition"] },
    ],
  },
  solutions: [
    {
      name: "Contentsquare Experience Intelligence Platform",
      valueProp: "セッションリプレイ・ヒートマップ・行動分析を統合し、AIエージェント「Sense」がユーザー離脱の要因分析までを自動化するプラットフォーム。",
      url: "https://contentsquare.com/products/",
      competitors: "Microsoft Clarity(無料)、Adobe Analytics、Amplitude、FullStory、Hotjarが主要な競合。",
      differentiation: "Microsoft Clarityは無料だが「何が起きたか」の可視化にとどまる。Adobe Analytics・Amplitudeは強力なデータ分析基盤を持つが、実際の画面の動きを直感的に見せる力ではContentsquareに分があるとされる。Heap買収によるプロダクト分析機能の統合も差別化点。",
      retention: "Amex・Dell・IKEA・LVMH・Toyota等の大手ブランドが継続導入しているとされる。日本でも60社超のエンタープライズ顧客を持つとされるが、具体的な継続率データは非公開。",
    },
    {
      name: "Sense(AIエージェント)",
      valueProp: "人間のアナリストのように、データの計画・分析・実行までを自律的に行うAIエージェント機能。",
      url: "https://contentsquare.com/products/",
      competitors: "他の分析プラットフォームが提供するAIアシスタント機能全般が競合。",
      differentiation: "2025年5月発表の比較的新しい機能で、単なるダッシュボード表示ではなく、AIが能動的に離脱要因の仮説を出す設計を特徴とする。2026年3月にはLLMトラフィックの可視化機能も追加された。",
      retention: "2025年発表の新機能のため、継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://contentsquare.com/customers/",
  fitTags: [
    "デジタル体験分析領域を極めたい",
    "18名という小規模組織で裁量を持って働きたい",
    "SDRから外資SaaS営業のキャリアを始めたい",
    "大手ブランドの導入事例を武器にしたい",
    "フランス発企業ならではのカルチャーに関心がある",
    "外資特有の実力主義に挑戦したい",
    "組織変化(トップ交代・レイオフ)への適応力を鍛えたい",
    "CX・プロダクト・マーケティング横断の提案力を磨きたい",
  ],
  comparisonMap: [
    { arena: "プロダクト・体験分析", companies: ["Contentsquare", "Amplitude"], why: "デジタル体験・プロダクト分析予算の比較" },
  ],
  sources: contentsquareSources,
};

const anaplanSources: ResearchSource[] = [
  {
    id: "anaplan-wikipedia",
    label: "Wikipedia「Anaplan」",
    url: "https://en.wikipedia.org/wiki/Anaplan",
    kind: "外部集計",
    scope: "2006年の創業経緯(英ヨークシャー、Haddleton夫妻・Michael Gould)、2018年IPOの概要",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-ipo-2018",
    label: "Global Venturing「Anaplan raises $264m in IPO」",
    url: "https://globalventuring.com/blog/2018/10/15/anaplan-raises-264m-in-ipo/",
    kind: "外部集計",
    scope: "2018年10月のIPO詳細(NYSE:PLAN、調達額$263.5M)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-fy2022-results",
    label: "Anaplan公式「Fourth Quarter and Full Fiscal Year 2022 Financial Results」",
    url: "https://www.anaplan.com/news/anaplan-announces-fourth-quarter-and-full-fiscal-year-2022-financial-results/",
    kind: "企業公式",
    scope: "非公開化前の最終公表財務(FY2022売上高$592.2M、+32.3%)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-takeprivate-thomabravo",
    label: "Thoma Bravo公式「Anaplan to be Acquired by Thoma Bravo for $10.7 Billion」",
    url: "https://www.thomabravo.com/press-releases/anaplan-to-be-acquired-by-thoma-bravo-for-10-7-billion",
    kind: "企業公式",
    scope: "2022年3月の非公開化発表、$66.00/株、総額$10.7B",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-takeprivate-cnbc",
    label: "CNBC「Thoma Bravo buys Anaplan for $10.7 billion」",
    url: "https://www.cnbc.com/2022/03/21/thoma-bravo-buys-anaplan-for-10point7-billion.html",
    kind: "外部集計",
    scope: "非公開化の背景・アクティビスト投資家(Corvex・Sachem Head等)による株価低迷への圧力",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-ceo-gottdiener",
    label: "Anaplan公式「Anaplan Appoints Charles Gottdiener as CEO」",
    url: "https://www.anaplan.com/news/anaplan-appoints-charles-gottdiener-as-ceo-and-member-of-the-board-of-directors-to-drive-next-phase-of-growth/",
    kind: "企業公式",
    scope: "2022年12月、非公開化後の新CEO就任(Charlie Gottdiener)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-cro-randolph",
    label: "Anaplan公式「Anaplan Names Greg Randolph President and Chief Revenue Officer」",
    url: "https://www.anaplan.com/news/anaplan-names-greg-randolph-president-and-chief-revenue-officer/",
    kind: "企業公式",
    scope: "2025年9月、President 兼 CRO就任",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-ai-agents-dec2025",
    label: "GlobeNewswire「Anaplan Introduces Role-Based AI Agents」",
    url: "https://www.globenewswire.com/news-release/2025/12/09/3202449/0/en/Anaplan-Introduces-Role-Based-AI-Agents-to-Advance-Industry-Leading-Enterprise-Scenario-Planning-and-Analysis-Platform.html",
    kind: "企業公式",
    scope: "2025年12月、役割別AIエージェント発表と$500M規模の複数年AI投資ロードマップ",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-ai-roadmap-2026",
    label: "Anaplan公式「Anaplan Reveals Extended AI Portfolio Roadmap」",
    url: "https://www.anaplan.com/news/anaplan-reveals-extended-ai-portfolio-roadmap-launches-four-new-apps/",
    kind: "企業公式",
    scope: "2026年3月、CoModeler・Custom Analyst・Agent StudioのGA、新規アプリ12種",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-layoffs-warn",
    label: "WARN Tracker「Anaplan」レイオフ集計",
    url: "https://www.warntracker.com/company/anaplan",
    kind: "外部集計",
    scope: "2023年6月、約300人規模のレイオフ(Thoma Bravoによる再編と関連)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-g2-reviews",
    label: "G2「Anaplan」レビュー集計",
    url: "https://www.g2.com/sellers/anaplan",
    kind: "外部集計",
    scope: "導入の複雑さ・学習コストに関するユーザー評価(総合評価4.6/461件)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-registry",
    label: "gBizINFO「Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社」法人情報",
    url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5011001110443",
    kind: "外部集計",
    scope: "日本法人の登記情報(資本金8,200万円、従業員数、所在地)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-fiscal",
    label: "決算公告データ倉庫「Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社 第9期決算公告」",
    url: "https://ryo-nakamura1.hatenablog.jp/entry/2026/02/21/160000_2",
    kind: "外部集計",
    scope: "第9期の決算公告(純資産約▲6.1億円の債務超過、当期純損失約800万円)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-leadership",
    label: "ニッキンONLINE「【インサイト】Anaplan Japan 中田淳 社長執行役員」",
    url: "https://www.nikkinonline.com/article/166474",
    kind: "外部集計",
    scope: "2024年2月時点のカントリーマネージャー(中田淳氏、社長執行役員)、国内約200社の顧客(みずほ銀行・三菱UFJ銀行・三井住友信託銀行等)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-job-finance-ae",
    label: "大手直販営業(Enterprise Account Executive)-Finance求人",
    url: "https://job-boards.greenhouse.io/anaplan/jobs/8438757002",
    kind: "企業公式",
    scope: "業種別(金融)営業体制、単独商談ACV1億円超という募集要件",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-customer-mizuho",
    label: "Anaplan公式 導入事例「みずほ銀行」",
    url: "https://www.anaplan.com/jp/customers/mizuho_bank/",
    kind: "企業公式",
    scope: "海外拠点向け予算管理での導入(予算編成サイクルを8週間→2週間に短縮)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-customer-pasona",
    label: "Anaplan公式 導入事例「パソナグループ」",
    url: "https://www.anaplan.com/jp/customers/pasona/",
    kind: "企業公式",
    scope: "グループ67社の人事データベース統合(2016年8月導入)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-customer-nri",
    label: "Anaplan公式 導入事例「野村総合研究所」",
    url: "https://www.anaplan.com/jp/customers/nomura_research_institute/",
    kind: "企業公式",
    scope: "財務予測・プロジェクト・人員計画の一元化(2020年9月導入)",
    checkedAt: "2026-08-09",
  },
  {
    id: "anaplan-japan-partners",
    label: "Anaplan Japan公式パートナー一覧",
    url: "https://www.anaplan.com/jp/partners/",
    kind: "企業公式",
    scope: "アクセンチュア・BCG・デロイト・PwC・NRI・NTTデータ等の日本パートナー網",
    checkedAt: "2026-08-09",
  },
];

const anaplanIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Anaplanは、経営企画、財務、営業、サプライチェーン、人事部門が、部門別の計画を一つのモデルにつなぎ、変化に応じて意思決定するための計画基盤。「Excelが部門ごとに乱立して数字が合わない」「予算や需要の変化を全社計画へ反映するのが遅い」「複数シナリオを比較できず意思決定が後手に回る」といった課題を解決する。単一部門の予算管理から経営全体の計画プロセスへ広げ、CFOや事業責任者と企業の意思決定そのものを設計できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2006年、英ヨークシャーでGuy Haddleton・Sue Haddleton夫妻とMichael Gould氏が創業。独自の演算エンジン「Hyperblock」を核に、財務・サプライチェーン・営業・人員配置など複数部門の計画をひとつのモデルでつなぐ「コネクテッドプランニング」という概念を掲げてきた。2018年10月にNYSEへ上場(ティッカーPLAN)、2021年2月に株価がピークをつけた後は約4割下落し、Corvex Management・Sachem Head Capital Managementといったアクティビスト投資家が合計約9%の株式を取得して経営改革を要求する状況になった。2022年3月、Thoma Bravoが総額$10.7B(1株$66.00、後に$63.75へ修正)で買収することに合意し、同年6月に非公開化が完了。同年12月には新CEOにCharlie Gottdiener氏(元Neustar CEO)が就任し、成長一辺倒から利益・効率重視の経営への転換が進められてきたとみられる。非公開化後の売上高は非開示だが、顧客数は買収時の約1,900社から現在2,400社超へ拡大しているとされ、2025年12月には$500M規模の複数年AI投資ロードマップを発表するなど、AIエージェント機能への再投資も並行して進んでいる。",
    ipoOutlookSummary: "Thoma Bravoによる非公開化(2022年)からまだ4年程度で、再上場の具体的な時期についての公式言及は確認できていない。Thoma Bravoは投資先を数年〜10年程度保有した後に再上場や再売却を行うことが多いPE(プライベートエクイティ)ファンドであり、Anaplanについても同様のイグジット戦略が想定されるが、現時点では観測にとどまる。",
    milestones: [
      { year: "2006", label: "英ヨークシャーで創業", detail: "Guy Haddleton・Sue Haddleton夫妻とMichael Gould氏が設立。独自エンジン「Hyperblock」を2008年に特許取得。", sourceId: "anaplan-wikipedia" },
      { year: "2018.10", label: "NYSE上場(ティッカーPLAN)", detail: "15.5百万株を$17で売り出し、$263.5Mを調達。初日株価は約43%上昇。", sourceId: "anaplan-ipo-2018" },
      { year: "2022.3", label: "Thoma Bravoが$10.7Bで買収合意", detail: "アクティビスト投資家(Corvex・Sachem Head等)による株価低迷への圧力が背景。同年6月に非公開化完了。", sourceId: "anaplan-takeprivate-thomabravo" },
      { year: "2022.12", label: "Charlie Gottdiener氏がCEOに就任", detail: "非公開化後の新体制。前職はNeustarのCEO。", sourceId: "anaplan-ceo-gottdiener" },
      { year: "2025.12", label: "$500M規模のAI投資ロードマップ発表", detail: "役割別AIエージェント(Forecaster・CoModeler等)を軸とする複数年投資を表明。", sourceId: "anaplan-ai-agents-dec2025" },
    ],
    sourceIds: ["anaplan-wikipedia", "anaplan-ipo-2018", "anaplan-takeprivate-thomabravo", "anaplan-ceo-gottdiener", "anaplan-ai-agents-dec2025"],
    genbaVerdict: {
      headline: "アクティビストに突き上げられた上場を離れ、Thoma Bravo傘下で「利益重視」への転換。日本では業種別の一斉採用が進む。",
      body: "2021年のピークから株価が4割下落し、アクティビスト投資家に経営改革を迫られた末にThoma Bravoの傘下へ入るという、外資SaaSの中でも典型的な「PEによる立て直し」パターンを歩んでいる。非公開化後は2022年8月・2023年6月と複数回のレイオフを経つつ、顧客数は約1,900社から2,400社超へ拡大、2025年12月には$500M規模のAI投資ロードマップを発表するなど、コスト規律と再成長投資を同時に進めている段階と見られる。日本では金融・製造・自動車という業種別の営業チームを同時に7職種募集しており、非公開化から4年を経て、日本市場への本格投資フェーズに入ったと考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "$500M規模のAIロードマップと、PlanIQからForecasterへの製品進化",
        body: "2025年12月に役割別AIエージェント(Forecaster・CoModeler等)とデータ統合基盤「Data Orchestrator」を発表し、$500M規模の複数年投資を表明。2026年3月にはCoModeler・Custom Analyst・Agent Studioが一般提供され、新規アプリ12種も追加された。従来の統計的予測ツール「PlanIQ」から、対話型・自律型のAIエージェントへと製品の重心が急速に移っている。",
        sourceId: "anaplan-ai-roadmap-2026",
      },
      {
        title: "非公開化後も顧客基盤は拡大(約1,900社→2,400社超)",
        body: "2022年の非公開化時点で約1,900社・パートナー175社超だったのに対し、現在は2,400社超・Fortune 50の44%が導入しているとされる。売上高は非開示だが、顧客数ベースでは非公開化後も拡大が続いていると考えられる。",
        sourceId: "anaplan-cro-randolph",
      },
      {
        title: "日本で業種別(金融・製造・自動車)の営業体制を同時構築中",
        body: "2026年8月時点で、金融(FSI)専任のRegional Vice President、Finance・Manufacturing・自動車の3業種別Enterprise AE、Solution Consulting Manager、Professional Services Salesなど計7職種を東京拠点で同時募集。みずほ銀行・パソナグループ・野村総合研究所等での導入実績を土台に、業種特化型の拡張フェーズに入っていると考えられる。",
        sourceId: "anaplan-japan-job-finance-ae",
      },
    ],
    riskHypotheses: [
      {
        title: "非公開化後も複数回のレイオフが続き、日本法人は決算公告上「債務超過」",
        body: "2022年8月に約2%、2023年6月に約300人規模(WARN Act記録では加州分234人)のレイオフが確認されている。日本法人(Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社)の第9期決算公告でも、純資産が約▲6.1億円の債務超過となっていることが確認できた。",
        confidence: "中",
        evidence: [
          "2023年6月に約300人規模のレイオフ、Thoma Bravoによる再編と関連するとされる",
          "日本法人の第9期決算公告で純資産が約▲6.1億円の債務超過",
        ],
        counterSignal: "米国本社の完全子会社が決算公告上「債務超過」であること自体は、親会社の資金配分・移転価格の設計次第で生じやすく、必ずしも日本事業の実態が悪化していることを意味しない。また同時期に日本向け求人を7職種同時掲載しており、採用面では拡大方向にある。",
        sourceIds: ["anaplan-layoffs-warn", "anaplan-japan-fiscal"],
      },
      {
        title: "導入の複雑さと、Pigmentなど「軽量・高速」を訴求する新興競合の台頭",
        body: "G2等のユーザーレビューでは、Anaplanの導入には12〜24か月かかることが多く、学習コストの高さやモデル構築の専門人材への依存が繰り返し指摘されている。Pigmentのような、より直感的なUI・自然言語クエリを売りにする新興ツールが、この複雑さを競争軸として明示的に訴求している。",
        confidence: "探索中",
        evidence: [
          "G2レビューで導入の複雑さ・学習コストの高さが繰り返し指摘されている(総合評価自体は4.6と高い)",
          "PigmentやCubeなど、比較サイトが「Anaplanの複雑さ・コストの代替」を訴求軸に据えている",
        ],
        counterSignal: "G2の総合評価は461件で4.6と高水準であり、複雑さへの指摘は主に大規模導入後の運用フェーズでの声であって、契約継続を脅かすほどの離反にはつながっていない可能性がある。",
        sourceIds: ["anaplan-g2-reviews"],
      },
    ],
    japanGrowth: {
      headline: "決算公告では日本法人が債務超過。一方で顧客・採用は着実に拡大している、という二面性。",
      narrative: "Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社は株式会社(KK)のため決算公告義務があるが、資本金8,200万円と会社法上の「大会社」基準(資本金5億円以上または負債200億円以上)を下回るため、貸借対照表の要旨のみが公告対象で、売上高は非開示。確認できた第9期の公告では、総資産約10.9億円・負債合計約17.0億円に対し、純資産が約▲6.1億円という債務超過の状態にあった。前年以前の公告は検索範囲内では見つからず、複数年の推移は確認できていない。組織面では、中田淳氏が2016年2月に日本法人1人目の社員として入社し、2024年2月時点で社長執行役員(カントリーマネージャー)を務めていることが確認できている。同時期の取材では、国内約200社の顧客としてみずほ銀行・三菱UFJ銀行・三井住友信託銀行が名指しされており、みずほ銀行・パソナグループ・野村総合研究所の公式導入事例も公開されている。決算公告上の債務超過と、顧客基盤・採用の拡大が同時に進んでいるという二面性をどう読むかは、面接で確認したい論点、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "第9期決算公告で純資産が約▲6.1億円の債務超過", detail: "資本金8,200万円のため貸借対照表の要旨のみが公告対象。売上高は非開示。前年以前のデータは確認できていない。", sourceId: "anaplan-japan-fiscal" },
        { label: "中田淳氏が2016年2月の設立時から社長執行役員を継続", detail: "2024年2月時点の取材で、国内約200社の顧客(みずほ銀行・三菱UFJ銀行・三井住友信託銀行等)を統括するカントリーマネージャーとして紹介されている。", sourceId: "anaplan-japan-leadership" },
        { label: "金融・製造・自動車の業種別体制で7職種を同時募集", detail: "2026年8月時点で、Regional Vice President(FSI)・業種別Enterprise AE 3職種・Solution Consulting Manager等を東京拠点で同時掲載。", sourceId: "anaplan-japan-job-finance-ae" },
      ],
      sourceIds: ["anaplan-japan-fiscal", "anaplan-japan-leadership", "anaplan-japan-job-finance-ae"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Anaplanの売り方は「経営企画・財務・サプライチェーンなど各部門がバラバラのExcelで計画を作っており、全社で数字が合わない」という課題が起点。単一のモデリング基盤に統合することで、計画変更が全部門にリアルタイムで波及する状態を作る提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "みずほ銀行は海外拠点の予算編成サイクルを8週間から2週間に短縮、パソナグループはグループ67社の人事データベースを統合、野村総合研究所は財務予測・プロジェクト・人員計画を一元化した。いずれも「部門ごとに分断された計画」を一本化するという共通パターンがある。" },
      { title: "製品の成り立ちから見る課題", body: "独自の演算エンジン「Hyperblock」は、大規模なマルチディメンショナルモデルをリアルタイムで再計算できることが特徴で、Excelでは処理しきれない規模の全社計画を可能にするために開発された。" },
      { title: "外部環境の要求から見る課題", body: "サプライチェーンの不確実性や人的資本の可視化要求が高まる中、財務だけでなくサプライチェーン・人員配置まで横断して「What-Ifシナリオ」を即座に試算できる基盤への投資圧力が高まっている。" },
    ],
    narrative: [
      { label: "背景", body: "財務・サプライチェーン・営業・人事の各部門が、それぞれ異なるExcelファイルやツールで計画を作成している。" },
      { label: "課題", body: "部門間で前提条件がずれ、経営会議のたびに数字のすり合わせに時間がかかる。シナリオ変更の影響を即座に他部門へ反映できない。" },
      { label: "解決策", body: "Anaplanのコネクテッドプランニング基盤で全部門の計画を1つのモデルに統合し、AIエージェント(Forecaster等)による予測精度の向上と、シナリオ変更の即時波及を実現する。" },
      { label: "選定の理由", body: "Fortune 50の44%が導入しているという実績、みずほ銀行・パソナグループ・野村総合研究所のような日本の大手企業での導入実績、そして単一のモデリング基盤に統合できる技術的な柔軟性が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、財務・サプライチェーン・営業の計画がそれぞれ別のExcelで作られていて、経営会議前のすり合わせに時間がかかっていませんか。",
    valueHypothesis: "みずほ銀行が予算編成サイクルを8週間から2週間に短縮したという開示を根拠に、一度全社計画基盤として定着すると、経営企画・財務・サプライチェーンなど複数部門にまたがる意思決定インフラとして扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "導入に1〜2年かかると聞くが、それだけの投資に見合うのか", reframe: "導入の複雑さはG2レビューでも指摘される実際の課題だが、みずほ銀行やパソナグループのような大手企業がグループ全体・海外拠点まで含めて導入している実績は、複雑な要件にも対応しきれる基盤としての信頼の裏返しでもある、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2006年", detail: "英ヨークシャーで、Guy Haddleton・Sue Haddleton夫妻とMichael Gould氏が創業。", sourceIds: ["anaplan-wikipedia"] },
    { label: "非公開化", value: "2022年6月、Thoma Bravoが総額$10.7Bで買収", detail: "アクティビスト投資家による株価低迷への圧力が背景とされる。", sourceIds: ["anaplan-takeprivate-thomabravo"] },
    { label: "顧客数", value: "2,400社超、Fortune 50の44%", detail: "非公開化時点(2022年)の約1,900社から拡大。", sourceIds: ["anaplan-cro-randolph"] },
    { label: "日本法人設立", value: "2016年2月", detail: "中田淳氏が1人目の社員として入社、2024年2月時点で社長執行役員。", sourceIds: ["anaplan-japan-leadership"] },
  ],
  hypotheses: [
    {
      topic: "TAKE-PRIVATE STRATEGY",
      title: "アクティビストに追い込まれた上場からThoma Bravo傘下へ。「利益重視」への転換が進行中。",
      conclusion: "2021年のピークから株価が約4割下落し、Corvex・Sachem Head等のアクティビスト投資家が合計約9%の株式を取得して改革を要求した末に、2022年Thoma Bravoが買収。非公開化後は複数回のレイオフを経ながら、コスト規律と効率重視の経営への転換が進められてきたと考えられる。",
      confidence: "高",
      evidence: ["2021年2月のピークから株価が約4割下落し、アクティビスト投資家が合計約9%の株式を取得", "2022年3月にThoma Bravoが$10.7Bで買収合意、同年6月に非公開化完了"],
      counterSignals: ["非公開化後も顧客数は約1,900社→2,400社超へ拡大しており、単なる縮小均衡ではなく再成長を伴う立て直しの側面もある"],
      interviewQuestions: ["Thoma Bravo傘下になってから、営業組織の目標設定やKPIにどんな変化がありましたか"],
      sourceIds: ["anaplan-takeprivate-cnbc", "anaplan-cro-randolph"],
    },
    {
      topic: "AI PRODUCT SHIFT",
      title: "$500M規模のAI投資で、統計的予測ツールから自律型AIエージェントへ製品の重心が移行中。",
      conclusion: "2025年12月に役割別AIエージェント(Forecaster・CoModeler等)を発表し、$500M規模の複数年投資を表明。2026年3月にはCoModeler・Custom Analyst・Agent Studioが一般提供された。従来のPlanIQから、対話型・自律型のAIエージェントへの製品転換が急速に進んでいる。",
      confidence: "高",
      evidence: ["2025年12月、$500M規模のAI投資ロードマップと役割別AIエージェントを発表", "2026年3月、CoModeler・Custom Analyst・Agent StudioがGA、新規アプリ12種も追加"],
      counterSignals: ["製品名・機能が短期間で入れ替わっており(PlanIQ→Forecaster等)、AI機能のブランディングがまだ流動的な段階にある可能性がある"],
      interviewQuestions: ["直近のAIエージェント機能は、実際の商談でどこまで提案に組み込まれていますか"],
      sourceIds: ["anaplan-ai-agents-dec2025", "anaplan-ai-roadmap-2026"],
    },
    {
      topic: "JAPAN VERTICAL BUILD-OUT",
      title: "金融・製造・自動車の業種別体制で、日本向け求人7職種を同時募集中。",
      conclusion: "2026年8月時点で、FSI(金融)専任のRegional Vice President、Finance・Manufacturing・自動車の3業種別Enterprise AE、Solution Consulting Manager、Professional Services Salesなど計7職種を東京拠点で同時募集しており、業種特化型の営業体制を本格構築するフェーズにあると考えられる。",
      confidence: "高",
      evidence: ["FSI専任のRegional Vice Presidentが単独で募集されている", "Finance・Manufacturing・自動車の3業種別Enterprise AEが同時掲載されている"],
      counterSignals: ["業種別体制がいつから始まったのか、既存の売上構成に占める各業種の比率は公開情報からは分からない"],
      interviewQuestions: ["業種別体制はいつから始まり、現在何名規模のチームになっていますか"],
      sourceIds: ["anaplan-japan-job-finance-ae"],
    },
    {
      topic: "JAPAN BALANCE SHEET",
      title: "決算公告では日本法人が債務超過。ただし米国子会社によくある構造的な要因の可能性もある。",
      conclusion: "第9期の決算公告で、Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社の純資産が約▲6.1億円の債務超過となっていることが確認できた。米国本社の完全子会社における債務超過は、親会社の資金配分・移転価格の設計次第で生じやすく、必ずしも日本事業の実態悪化を意味しない。",
      confidence: "中",
      evidence: ["第9期決算公告で純資産が約▲6.1億円の債務超過", "資本金8,200万円のため貸借対照表の要旨のみが公告対象で、売上高・詳細な損益は非開示"],
      counterSignals: ["同時期に日本向け求人を7職種同時掲載しており、採用面では拡大方向にある"],
      interviewQuestions: ["決算公告上の債務超過について、日本事業の投資方針としてどう捉えていますか"],
      sourceIds: ["anaplan-japan-fiscal"],
    },
    {
      topic: "COUNTRY MANAGER TENURE",
      title: "中田淳氏が2016年の設立時から一貫してトップを務める、日本では珍しく安定したカントリーマネージャー体制。",
      conclusion: "中田淳氏は2016年2月に日本法人1人目の社員として入社し、2024年2月時点でも社長執行役員(カントリーマネージャー)を継続している。設立から約8年間トップが変わっていないという点は、他の外資SaaS日本法人と比べても組織の安定性が高い可能性を示唆する。",
      confidence: "中",
      evidence: ["2016年2月に1人目の社員として入社", "2024年2月時点の取材でも社長執行役員として紹介されている"],
      counterSignals: ["2024年2月以降(2025〜2026年)の在任継続を裏付ける一次情報は見つかっておらず、直近の状況は未確認"],
      interviewQuestions: ["現在のカントリーマネージャー体制について教えてください"],
      sourceIds: ["anaplan-japan-leadership"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "8年間トップが変わらない安定組織と、決算公告が示す債務超過という数字のギャップをどう読むか。",
    hypothesis: {
      title: "PE傘下の規律と、業種特化型の拡張投資が同居する組織。",
      body: "Thoma Bravo傘下でのコスト規律(複数回のレイオフ)と、日本での業種別体制構築という拡張投資が同時に進んでいる。中田淳氏が設立時から一貫してカントリーマネージャーを務めている点は、グローバルの再編があっても日本組織のマネジメント層は比較的安定してきたことを示唆する。",
    },
    careerValue: {
      title: "EPM/FP&A領域という専門性は、経営企画・財務系のキャリアとも接続しやすい。",
      body: "大型商談(単独ACV1億円超)を動かした経験や、業種特化型の提案経験は、他のFP&A/EPM系SaaS企業だけでなく、事業会社の経営企画・FP&A職への転身でも再現性を説明しやすい。一方、日本法人が決算公告上は債務超過という点は、投資方針を面接で確認しておきたい材料。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "みずほ銀行", products: "Anaplan", outcome: "海外拠点向け予算管理を導入し、予算編成サイクルを8週間から2週間に短縮。", implication: "大手金融機関での本格導入・業務プロセス変革の実績。", sourceId: "anaplan-japan-customer-mizuho" },
    { company: "パソナグループ", products: "Anaplan", outcome: "グループ67社の人事データベースを統合(2016年8月導入)。", implication: "グループ経営・人事領域での横断的な活用実績。", sourceId: "anaplan-japan-customer-pasona" },
    { company: "野村総合研究所", products: "Anaplan", outcome: "財務予測・プロジェクト・人員計画を一元化(2020年9月導入)。", implication: "コンサルティング・SIer企業自身による導入実績。", sourceId: "anaplan-japan-customer-nri" },
  ],
  externalSignals: [
    { label: "顧客数の推移", value: "約1,900社(2022年)→2,400社超(現在)", detail: "非公開化から約4年で顧客数は約26%増加。", caveat: "売上高は非公開のため、顧客単価の変化は不明。", sourceId: "anaplan-cro-randolph" },
    { label: "レイオフの頻度", value: "2022年8月・2023年6月に確認", detail: "2023年6月は約300人規模、Thoma Bravoの再編と関連するとされる。", caveat: "2024年以降の追加レイオフの有無は確認できていない。", sourceId: "anaplan-layoffs-warn" },
  ],
  roleLens: {
    salesMotion: "現在確認できる日本の求人はいずれもハンター型のEnterprise AE、業種特化のマネジメント職、プリセールス責任者で構成され、金融・製造・自動車という業種別の営業ポッド体制で新規開拓とアップセルを行う。単独商談でACV1億円超の実績が求められるなど、大型商談中心の営業スタイル。",
    compensation: "Anaplan Japan固有の給与データは確認できていない。求人にも給与レンジの記載はない。",
    quota: "四半期・年間のネットARR目標が前提とされるが、具体的なクオータ額は非公開。",
    collaboration: "業種別のRegional Vice President配下でEnterprise AE・Solution Consulting・Professional Servicesが連携する体制。中田淳氏(社長執行役員)を頂点とする日本組織の中で、業種別チームが並行して動く構造と見られる。",
  },
  leadership: {
    name: "中田 淳",
    role: "Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社 社長執行役員(カントリーマネージャー)",
    read: "2016年2月に日本法人1人目の社員として入社し、2024年2月時点でも社長執行役員を継続。設立から一貫してトップを務めており、他の外資SaaS日本法人と比べても組織の安定性が高い可能性がある。2024年2月時点の取材では、国内約200社の顧客(みずほ銀行・三菱UFJ銀行・三井住友信託銀行等)を統括する立場として紹介されている。",
    sourceId: "anaplan-japan-leadership",
  },
  companyStats: {
    globalHeadcount: { value: "非開示(非公開企業)", detail: "2022年の非公開化以降、グローバル従業員数は公式開示されていない。", sourceId: "anaplan-takeprivate-cnbc" },
    japanHeadcount: { value: "約100人", detail: "gBizINFO登録情報および中田氏の紹介記事における「約100名」という言及に基づく概数。", sourceId: "anaplan-japan-registry" },
    japanOffice: { value: "東京都千代田区丸の内(JPタワー11階)", detail: "Ａｎａｐｌａｎ　Ｊａｐａｎ株式会社、資本金8,200万円。", sourceId: "anaplan-japan-registry" },
    japanSince: { value: "2016年2月", detail: "中田淳氏が1人目の社員として入社した時期を設立の目安とする。", sourceId: "anaplan-japan-leadership" },
  },
  salesAppeal: {
    intro: "8年間トップが変わらない安定した日本組織と、$500M規模のAI投資による製品拡張力を併せ持つ、業種特化型の大型商談に挑める環境。",
    points: [
      { title: "単独ACV1億円超クラスの大型商談を経験できる", detail: "求人要件に「単独商談でACV1億円超の実績」が明記されており、大型商談中心のキャリアを積める。", sourceIds: ["anaplan-japan-job-finance-ae"] },
      { title: "みずほ銀行・パソナグループ・野村総合研究所クラスの導入事例を語れる", detail: "大手金融・グループ経営・コンサルティング企業での公式導入事例を商談の参照材料として使える。", sourceIds: ["anaplan-japan-customer-mizuho", "anaplan-japan-customer-pasona", "anaplan-japan-customer-nri"] },
      { title: "業種特化型の営業ポッドで、専門性を深められる", detail: "金融・製造・自動車という業種別チーム編成のため、特定業界への深い知見を蓄積しやすい。", sourceIds: ["anaplan-japan-job-finance-ae"] },
      { title: "8年間安定したカントリーマネージャー体制", detail: "中田淳氏が設立時から一貫してトップを務めており、経営体制の急変リスクが比較的低いと考えられる。", sourceIds: ["anaplan-japan-leadership"] },
    ],
  },
  interviewPrep: {
    intro: "決算公告上の債務超過という数字と、業種別体制の同時拡大という一見矛盾する状況をどう位置づけているか、率直に確認しておきたい質問例です。",
    questions: [
      { question: "決算公告上、日本法人の純資産が債務超過となっていますが、これは日本事業の投資方針としてどう位置づけられていますか。", why: "米国子会社によくある構造的な要因なのか、実際の事業課題なのかを確認したい。", sourceIds: ["anaplan-japan-fiscal"] },
      { question: "業種別体制(金融・製造・自動車)はいつから始まり、現在何名規模のチームになっていますか。", why: "同時募集されている7職種が、既存チームの拡張なのか新規立ち上げなのかを確認したい。", sourceIds: ["anaplan-japan-job-finance-ae"] },
      { question: "Thoma Bravo傘下になってから、営業組織の目標設定やKPIにどんな変化がありましたか。", why: "PE傘下でのコスト規律が現場の営業目標にどう反映されているかを確認したい。", sourceIds: ["anaplan-takeprivate-cnbc"] },
      { question: "直近のAIエージェント機能(Forecaster・CoModeler等)は、実際の商談でどこまで提案に組み込まれていますか。", why: "急速に進化しているAI機能が、現場の提案でどこまで実装されているかを確認したい。", sourceIds: ["anaplan-ai-agents-dec2025"] },
    ],
  },
  solutions: [
    {
      name: "Anaplan Connected Planning Platform",
      valueProp: "財務・サプライチェーン・営業・人員配置など複数部門の計画を、独自エンジン「Hyperblock」上でひとつのモデルとしてつなぎ、シナリオ変更を全部門にリアルタイムで波及させる基盤。",
      url: "https://www.anaplan.com/platform/",
      competitors: "Workday Adaptive Planning、OneStream、Pigment、Board、SAP Analytics Cloud、Oracle Fusion Cloud EPMが主要な競合。",
      differentiation: "Pigment等の新興ツールは軽量・高速なUIを訴求するが、Anaplanは大規模・複雑なマルチディメンショナルモデルを処理できる実績と、みずほ銀行・パソナグループのような大手企業でのグループ横断導入実績が差別化点とされる。",
      retention: "顧客数は非公開化時の約1,900社から2,400社超へ拡大しているとされるが、日本固有の継続率データは非公開。",
    },
    {
      name: "役割別AIエージェント(Forecaster / CoModeler / Agent Studio)",
      valueProp: "統計的予測ツール「PlanIQ」の後継として、対話型・自律型のAIエージェントが予測・モデル構築・データ統合を支援する新製品群。",
      url: "https://www.anaplan.com/news/anaplan-reveals-extended-ai-portfolio-roadmap-launches-four-new-apps/",
      competitors: "他のEPM/FP&Aベンダーが提供するAI予測機能全般が競合。",
      differentiation: "$500M規模の複数年投資を公言しており、2025年12月の発表から2026年3月のGAまで短期間で機能を拡張している点が特徴。",
      retention: "2025〜2026年の新機能のため、継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.anaplan.com/jp/customers/",
  fitTags: [
    "FP&A/経営管理領域を極めたい",
    "単独ACV1億円超クラスの大型商談に挑みたい",
    "業種特化型の営業ポッドで専門性を深めたい",
    "みずほ銀行クラスの大手導入事例を武器にしたい",
    "PE(プライベートエクイティ)傘下企業の経営規律を体感したい",
    "8年間安定したカントリーマネージャー体制のもとで働きたい",
    "外資特有の実力主義に挑戦したい",
    "AIエージェント製品の立ち上げ期に関わりたい",
  ],
  comparisonMap: [
    { arena: "経営管理・FP&A予算", companies: ["Anaplan", "Workday", "OneStream"], why: "経営企画・財務部門のFP&A/EPM予算の比較(Workday・OneStreamはGenba未掲載)" },
  ],
  sources: anaplanSources,
};

const qualtricsSources: ResearchSource[] = [
  {
    id: "qualtrics-wikipedia",
    label: "Wikipedia「Qualtrics」",
    url: "https://en.wikipedia.org/wiki/Qualtrics",
    kind: "外部集計",
    scope: "2002年の創業経緯(Scott Smith・Ryan Smith・Jared Smith・Stuart Orgill)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-seattletimes",
    label: "Seattle Times「How one family built $8 billion startup far from Silicon Valley」",
    url: "https://www.seattletimes.com/business/how-one-family-built-8-billion-startup-far-from-silicon-valley/",
    kind: "外部集計",
    scope: "創業家族の背景(ブリガムヤング大学の父子創業、ブートストラップ経営)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-sap-acquisition",
    label: "CNBC「Qualtrics, XM begins trading on the Nasdaq」",
    url: "https://www.cnbc.com/2021/01/28/qualtrics-ipo-xm-begins-trading-on-the-nasdaq.html",
    kind: "外部集計",
    scope: "2019年のSAPによる買収($8B)と2021年のIPO(ティッカーXM)の経緯",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-fy2022-results",
    label: "Qualtrics公式「Fourth Quarter and Full Year 2022 Financial Results」",
    url: "https://www.qualtrics.com/news/qualtrics-announces-fourth-quarter-and-full-year-2022-financial-results/",
    kind: "企業公式",
    scope: "非公開化前の最終公表財務(FY2022売上高$1,458.6M、+36%)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-takeprivate-silverlake",
    label: "Silver Lake公式「Qualtrics to be Acquired by Silver Lake and CPP Investments for $12.5 Billion」",
    url: "https://www.silverlake.com/qualtrics-to-be-acquired-by-silver-lake-and-cpp-investments-for-12-5-billion/",
    kind: "企業公式",
    scope: "2023年3月、Silver Lake・CPP Investmentsによる$12.5Bでの非公開化発表(SAPが完全売却)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-pressganey-acquisition",
    label: "Qualtrics公式「Qualtrics to Invest $6.75 Billion in Press Ganey Forsta Acquisition」",
    url: "https://www.qualtrics.com/news/qualtrics-to-invest-6-75-billion-in-press-ganey-forsta-acquisition-to-advance-ai-powered-experience-management/",
    kind: "企業公式",
    scope: "2025年10月契約・2026年5月完了、ヘルスケア/市場調査データ企業Press Ganey Forstaを$6.75Bで買収",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-ceo-serafin-departure",
    label: "Qualtrics公式「A New Chapter for Qualtrics」",
    url: "https://www.qualtrics.com/articles/experience-management/new-chapter-qualtrics/",
    kind: "企業公式",
    scope: "2025年10月21日、Zig Serafin氏がCEO退任、副会長へ",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-ceo-maynard",
    label: "PR Newswire「Qualtrics Appoints Jason Maynard as Chief Executive Officer」",
    url: "https://www.prnewswire.com/news-releases/qualtrics-appoints-jason-maynard-as-chief-executive-officer-302677813.html",
    kind: "企業公式",
    scope: "2026年2月3日、Jason Maynard氏(元Oracle/NetSuite)がCEOに正式就任",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-exec-restructuring-2026",
    label: "GeekWire「Internal memo: Five senior execs out at Qualtrics as new CEO restructures leadership team」",
    url: "https://www.geekwire.com/2026/internal-memo-five-senior-execs-out-at-qualtrics-as-new-ceo-restructures-leadership-team/",
    kind: "外部集計",
    scope: "2026年4月24日、新CEO就任3か月弱で主要幹部5名が同時退任",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-layoffs-2023",
    label: "GeekWire「Qualtrics cuts 780 jobs, about 14% of workforce」",
    url: "https://www.geekwire.com/2023/qualtrics-cuts-780-jobs-about-14-of-workforce-citing-complexity-from-rapid-hiring/",
    kind: "外部集計",
    scope: "2023年10月、780人(当時の約14%)のレイオフ",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-experience-agents",
    label: "PR Newswire「Qualtrics Accelerates AI Leadership and Value with Experience Agents」",
    url: "https://www.prnewswire.com/news-releases/qualtrics-accelerates-ai-leadership-and-value-with-experience-agents-302576892.html",
    kind: "企業公式",
    scope: "2026年3月、X4 SummitでAIエージェント「Experience Agents」発表",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-medallia-distress",
    label: "PE Stakeholder「Thoma Bravo's Medallia in Financial Hot Water」",
    url: "https://pestakeholder.org/news/thoma-bravos-medallia-in-financial-hot-water-in-private-credit-scrutiny/",
    kind: "外部集計",
    scope: "主要競合Medallia(Thoma Bravo傘下)の2026年の財務悪化・事業再編合意",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-company",
    label: "Qualtrics公式日本法人ページ",
    url: "https://www.qualtrics.com/ja/company/",
    kind: "企業公式",
    scope: "クアルトリクス合同会社の会社概要",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-registry",
    label: "catr.jp「クアルトリクス合同会社」登記情報",
    url: "https://catr.jp/companies/95404/164392",
    kind: "外部集計",
    scope: "合同会社としての登記履歴(2016年設立、2017〜2018年に東京へ移転)、決算公告記録なし(GKのため非開示)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-office-2022",
    label: "Qualtrics公式「丸の内オフィス移転」プレスリリース",
    url: "https://www.qualtrics.com/ja/press/2022-04-qualtrics-japan-new-office/",
    kind: "企業公式",
    scope: "2022年4月、丸の内新オフィスへの拡張移転",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-osaka-2022",
    label: "Qualtrics公式「大阪オフィス開設」プレスリリース",
    url: "https://www.qualtrics.com/ja/press/2022-09-osaka-office/",
    kind: "企業公式",
    scope: "2022年9月、西日本営業拠点として大阪オフィス開設",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-leadership",
    label: "Weekly BCN「熊代悟氏キーパーソン紹介」",
    url: "https://www.weeklybcn.com/journal/keyperson/detail/20221205_195312.html",
    kind: "外部集計",
    scope: "カントリーマネージャー熊代悟氏の経歴(2018年に日本法人1人目の社員として入社)",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-fy2026-strategy",
    label: "Weekly BCN「Qualtrics FY2026戦略」",
    url: "https://www.weeklybcn.com/journal/news/detail/20260423_214905.html",
    kind: "外部集計",
    scope: "2026年4月時点、熊代氏が語るパートナー戦略・イベント実績・AI機能「synthetic panel」",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-100m-investment",
    label: "ASCII.jp「Qualtrics、日本市場に5年で1億ドル投資」",
    url: "https://ascii.jp/elem/000/004/212/4212307/",
    kind: "外部集計",
    scope: "2024年7月、東京カンファレンスでの$100M/5年投資発表、LIXIL・ヤマハ発動機・マツダへの言及",
    checkedAt: "2026-08-09",
  },
  {
    id: "qualtrics-japan-nsw-partner",
    label: "日本製鉄ソリューションズ「Qualtricsパートナーシップ」プレスリリース",
    url: "https://www.nssol.nipponsteel.com/press/2025/20250304_110000.html",
    kind: "企業公式",
    scope: "2025年3月、「ソシキノミライ」を通じたQualtrics連携",
    checkedAt: "2026-08-09",
  },
];

const qualtricsIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Qualtricsは、企業のCX、EX、マーケティング、人事部門が、顧客や従業員の声を収集・分析し、改善行動へつなげるエクスペリエンス管理基盤。「アンケートが部門ごとに分散している」「不満の兆候を把握しても現場が動けない」「顧客体験や従業員体験を経営指標と結びつけられない」といった課題を解決する。調査ツールの置き換えではなく、顧客離反、ブランド、人材定着など経営課題へ入り込み、データ収集から組織の行動変革まで提案できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2002年、Brigham Young大学教授だったScott M. Smith氏が、闘病中に息子Ryan Smith氏、そしてJared Smith氏・Stuart Orgill氏と共に、Utah州Provoの自宅地下室で創業。2016年まではブートストラップで運営し、社員約100人規模まで成長した。2019年1月、IPO直前というタイミングでSAPが$8Bの現金で買収。2021年1月、SAPが過半数株式(約82.8%)を維持したままQualtricsをNasdaqへ再上場(ティッカーXM)させ、約$1.2Bを調達した。2023年3月、Silver Lake・CPP Investmentsが総額$12.5B(1株$18.15、30日VWAPに対し73%のプレミアム)でSAPの持株も含め全株式を買収し完全非公開化。直近では2025年10月に契約・2026年5月に完了した形で、米ヘルスケア/市場調査データ企業Press Ganey Forstaを$6.75Bで買収しており、「人間の体験に関する世界最大のAIデータセット」の構築を掲げている。非公開化前最後の公表財務(FY2022)は売上高$1,458.6M(+36%)で、現在は$2Bの売上規模を目指す方針が示されているが、これは目標であり確定した数値ではない。",
    ipoOutlookSummary: "創業者Ryan Smith氏等による具体的なIPO時期の言及は確認できていない。一部の業界メディアでは「成長重視から効率重視への転換が進めばIPO候補になりうる」という一般的な観測はあるが、Qualtrics固有の確定情報ではない。Silver Lake・CPP Investmentsという2社が主要株主であり、2025〜2026年にCEO交代と主要幹部の大規模な入れ替えが起きたばかりというタイミングも踏まえると、当面は非公開のまま経営体制の立て直しを優先する局面にあると考えられる。",
    milestones: [
      { year: "2002", label: "Utah州Provoで創業", detail: "Scott Smith氏・Ryan Smith氏・Jared Smith氏・Stuart Orgill氏が、自宅地下室からブートストラップで開始。", sourceId: "qualtrics-seattletimes" },
      { year: "2019.1", label: "SAPが$8Bで買収", detail: "IPO直前というタイミングでの買収発表。", sourceId: "qualtrics-sap-acquisition" },
      { year: "2021.1", label: "Nasdaqへ再上場(ティッカーXM)", detail: "SAPが約82.8%の株式を維持したまま約$1.2Bを調達。", sourceId: "qualtrics-sap-acquisition" },
      { year: "2023.3", label: "Silver Lake・CPP Investmentsが$12.5Bで買収", detail: "SAPが保有株式を含め全株式を売却、完全非公開化。", sourceId: "qualtrics-takeprivate-silverlake" },
      { year: "2025.10-2026.5", label: "Press Ganey Forstaを$6.75Bで買収", detail: "ヘルスケア/市場調査データ企業を統合し、AIデータセットの拡張を狙う。", sourceId: "qualtrics-pressganey-acquisition" },
      { year: "2026.2", label: "Jason Maynard氏がCEOに就任", detail: "前職はOracle EVP(NetSuite出身)。就任3か月弱で主要幹部5名が同時退任。", sourceId: "qualtrics-ceo-maynard" },
    ],
    sourceIds: ["qualtrics-seattletimes", "qualtrics-sap-acquisition", "qualtrics-takeprivate-silverlake", "qualtrics-pressganey-acquisition", "qualtrics-ceo-maynard"],
    genbaVerdict: {
      headline: "SAP傘下→再上場→PE非公開化と3度所有者を変えた末に、新CEOが就任3か月で幹部を一新。変化の大きさが際立つ局面。",
      body: "2019年のSAP買収、2021年の再上場、2023年のSilver Lake・CPP Investmentsによる非公開化と、Qualtricsは短期間で3度所有構造を変えてきた。極めつけは2025〜2026年で、CEOのZig Serafin氏が9年間の在任を経て退任、暫定共同CEO体制を経て2026年2月にJason Maynard氏(元Oracle/NetSuite)が就任し、その3か月弱後の4月には主要幹部5名が同時退任するという大きな組織再編が起きている。同時期に$6.75Bの大型買収(Press Ganey Forsta)も統合中で、経営体制の刷新と大型M&A統合が重なる、変化の大きい局面にあると考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "Press Ganey Forsta買収による「世界最大のAIデータセット」構想",
        body: "2025年10月契約・2026年5月完了の$6.75B買収により、ヘルスケア/患者体験データとCX/EXデータを統合し、AI駆動のExperience Managementで「世界最大のAIデータセット」を構築する方針を掲げている。ユタ州史上最大級のテック買収と評されている。",
        sourceId: "qualtrics-pressganey-acquisition",
      },
      {
        title: "「Experience Agents」による自律型AIエージェントへの製品転換",
        body: "2026年3月のX4 Summitで発表した「Experience Agents」は、顧客・従業員と直接やり取りし、リアルタイムで課題を自律的に解決するAIエージェント。既に顧客企業での実運用が始まっているとされる。",
        sourceId: "qualtrics-experience-agents",
      },
      {
        title: "日本市場への5年$100M投資表明と、LIXIL・ヤマハ発動機・マツダ等の大手導入",
        body: "2024年7月の東京カンファレンスで、当時のCEOが日本市場に5年間で$100Mを投資すると発表し、500社超の日本企業顧客を根拠に挙げた。LIXIL・ヤマハ発動機・マツダを導入企業として名指ししている。",
        sourceId: "qualtrics-japan-100m-investment",
      },
    ],
    riskHypotheses: [
      {
        title: "新CEO就任3か月弱で主要幹部5名が同時退任",
        body: "2026年2月にJason Maynard氏がCEOに就任した直後の4月、製品・エンジニアリング・戦略・CIO・マーケティングを含む主要幹部5名が一斉に退任した。会社側は「組織の簡素化」「AI機能をより速く市場投入するため」と説明しているが、詳細なコメントは避けている。",
        confidence: "中",
        evidence: [
          "2026年2月のCEO就任からわずか3か月弱で主要幹部5名が同時退任",
          "退任者には製品・エンジニアリング責任者、CIO、CMOなど複数の主要機能の責任者が含まれる",
        ],
        counterSignal: "新CEOはOracle/NetSuiteで事業を約5倍・顧客基盤を11,000社から43,000社超に拡大した実績を持つ人物であり、幹部刷新は買収統合を見据えた意図的な体制再編である可能性もある。",
        sourceIds: ["qualtrics-exec-restructuring-2026"],
      },
      {
        title: "2023年に780人(約14%)のレイオフ。2026年の追加レイオフ報道は要検証。",
        body: "2023年10月に約780人(当時の約14%)のレイオフを実施したことは複数の一次情報で確認できている。一部のアグリゲーターサイトには「2026年にも同規模のレイオフがあった」とする記述が見られるが、日付や人数が2023年の数字と酷似しており、誤情報の可能性がある。2026年に確認できる実際の変化は、4月の幹部レベルの再編である。",
        confidence: "探索中",
        evidence: [
          "2023年10月、約780人(約14%)のレイオフが複数の一次情報で確認されている",
          "2026年の再レイオフ報道は低品質なアグリゲーターのみで、2023年データの誤転載である可能性が高い",
        ],
        counterSignal: "2026年4月の幹部再編は事実として確認できるが、現場レベルでの大規模レイオフの一次情報は見つかっておらず、混同しないよう注意が必要。",
        sourceIds: ["qualtrics-layoffs-2023"],
      },
    ],
    japanGrowth: {
      headline: "合同会社のため財務非開示。カントリーマネージャー8年在任という安定と、$100M投資表明という積極性が両立。",
      narrative: "クアルトリクス合同会社は2016年9月にQJL Technologies合同会社として沖縄県名護市で設立され、2017〜2018年に東京・霞が関へ移転、現社名に変更、2022年4月に丸の内の新丸の内ビルディングへ再移転した。合同会社(GK)のため決算公告義務がなく、catr.jpの登記データベースにも財務数値の記録はない。カントリーマネージャーの熊代悟氏は、ワシントン州立大学でホスピタリティ経営を学んだ後、ウェスティンホテル東京での勤務を経てIT業界へ転じ、Documentum・Interwovenで日本代表を歴任、2018年にQualtricsの日本法人1人目の社員として入社して以来、8年間カントリーマネージャーを務めている。2024年7月には当時のCEOが東京カンファレンスで日本市場に5年間で$100Mを投資すると発表し、500社超の日本企業顧客を根拠に、LIXIL・ヤマハ発動機・マツダを導入企業として名指しした。2026年4月時点の取材では、日本製鉄ソリューションズの「ソシキノミライ」やNTTドコモビジネスの「空電」など、パートナー経由の販売網構築が進んでいることが確認できる一方、直近(2025〜2026年)の日本法人の正確な従業員数は確認できていない。",
      qualitativeSignals: [
        { label: "合同会社のため決算公告義務なし、財務データは非公開", detail: "2016年9月設立(当初はQJL Technologies合同会社、沖縄県名護市)、2017〜2018年に東京へ移転・改称。", sourceId: "qualtrics-japan-registry" },
        { label: "カントリーマネージャー熊代悟氏が8年間在任", detail: "2018年に日本法人1人目の社員として入社。ウェスティンホテル東京・Documentum・Interwovenでの経歴を経て転身。", sourceId: "qualtrics-japan-leadership" },
        { label: "2024年7月に日本市場へ5年$100M投資を表明", detail: "500社超の日本企業顧客を根拠に、LIXIL・ヤマハ発動機・マツダを導入企業として名指し。", sourceId: "qualtrics-japan-100m-investment" },
      ],
      sourceIds: ["qualtrics-japan-registry", "qualtrics-japan-leadership", "qualtrics-japan-100m-investment"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Qualtricsの売り方は「顧客満足度調査やエンゲージメント調査をExcelやアンケートツールでバラバラに行っており、経営判断に使えるレベルで統合できていない」という課題が起点。CX・EX・ブランド調査を単一のXMプラットフォームに統合し、AIエージェントで自動的にアクションへつなげる提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "LIXIL・ヤマハ発動機・マツダのような大手製造業が導入企業として名指しされている。日本製鉄ソリューションズやNTTドコモビジネスのようなSIer・通信キャリアもパートナーとして参画しており、大手企業への深い浸透が進んでいると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "Qualtricsは、大学の市場調査手法を誰でも使えるソフトウェアにするという発想から創業した。存在理由は「調査から得たデータを、経営判断に使えるレベルまで統合・自動化する」こと。" },
      { title: "外部環境の要求から見る課題", body: "AIエージェントが顧客対応の一部を担うようになる中、人間の体験データとAIの挙動データを統合して評価する必要性が高まっており、Press Ganey Forsta買収もこの文脈に位置づけられる。" },
    ],
    narrative: [
      { label: "背景", body: "CX・EX・ブランド調査部門が、それぞれ異なるツールでアンケートを実施しており、全社で顧客・従業員体験の全体像を把握できていない。" },
      { label: "課題", body: "調査結果を集計するだけで数週間かかり、経営判断に反映される頃には状況が変わっている。" },
      { label: "解決策", body: "QualtricsのXMプラットフォームで調査・フィードバックを一元化し、AIエージェント(Experience Agents等)が課題の自動検知・対応まで担う体制を作る。" },
      { label: "選定の理由", body: "18,000社超という導入実績、LIXIL・ヤマハ発動機・マツダのような大手製造業での採用、そしてPress Ganey Forsta買収によるヘルスケア領域への拡張力が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、顧客満足度調査や従業員エンゲージメント調査の結果が、経営判断に反映されるまでにどれくらい時間がかかっていますか。",
    valueHypothesis: "LIXIL・ヤマハ発動機・マツダのような大手製造業が導入しているという開示を根拠に、一度エンタープライズ規模で定着すると、CX・EX・ブランド調査を横断する全社インフラとして扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "経営陣が短期間で入れ替わっているようだが、製品戦略は安定しているのか", reframe: "2026年のCEO交代・幹部再編は事実だが、新CEOはOracle/NetSuiteで事業を大幅に拡大した実績を持つ人物であり、Press Ganey Forsta買収も含めて「AIデータセットの拡張」という一貫した方向性のもとで進められている、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2002年", detail: "Utah州Provoで、Scott Smith氏・Ryan Smith氏・Jared Smith氏・Stuart Orgill氏が創業。", sourceIds: ["qualtrics-seattletimes"] },
    { label: "非公開化", value: "2023年3月、Silver Lake・CPP Investmentsが総額$12.5Bで買収", detail: "SAPが保有株式を含め全株式を売却し完全非公開化。", sourceIds: ["qualtrics-takeprivate-silverlake"] },
    { label: "直近の大型買収", value: "Press Ganey Forstaを$6.75Bで買収(2026年5月完了)", detail: "ヘルスケア/患者体験データを統合。", sourceIds: ["qualtrics-pressganey-acquisition"] },
    { label: "日本法人設立", value: "2016年9月(2018年に事業開始)", detail: "クアルトリクス合同会社。カントリーマネージャー熊代悟氏が8年間在任。", sourceIds: ["qualtrics-japan-registry", "qualtrics-japan-leadership"] },
  ],
  hypotheses: [
    {
      topic: "OWNERSHIP HISTORY",
      title: "SAP傘下→再上場→PE非公開化と、短期間で3度所有構造が変わった企業。",
      conclusion: "2019年にSAPが$8Bで買収、2021年に過半数株式を維持したまま再上場、2023年にSilver Lake・CPP Investmentsが$12.5Bで完全非公開化と、7年間で3度の大きな所有構造の変化を経験している。",
      confidence: "高",
      evidence: ["2019年1月、SAPがIPO直前に$8Bで買収", "2023年3月、Silver Lake・CPP InvestmentsがSAPの持株も含め全株式を$12.5Bで買収"],
      counterSignals: ["所有構造は変わり続けているが、事業自体はFY2022時点で売上$1,458.6M・+36%成長と、買収を重ねながらも成長を続けてきた実績がある"],
      interviewQuestions: ["Silver Lake・CPP Investments傘下になってから、経営方針にどんな変化がありましたか"],
      sourceIds: ["qualtrics-sap-acquisition", "qualtrics-takeprivate-silverlake"],
    },
    {
      topic: "LEADERSHIP TURNOVER",
      title: "新CEO就任3か月弱で、主要幹部5名が同時退任。",
      conclusion: "2025年10月にZig Serafin氏がCEOを退任、暫定共同CEO体制を経て2026年2月にJason Maynard氏が就任。その3か月弱後の4月には、製品・エンジニアリング・戦略・CIO・マーケティングを含む主要幹部5名が一斉に退任した。",
      confidence: "高",
      evidence: ["2026年2月、Jason Maynard氏(元Oracle/NetSuite)がCEOに就任", "2026年4月、主要幹部5名が同時退任、会社は「組織の簡素化」と説明"],
      counterSignals: ["新CEOはOracle/NetSuiteで事業を約5倍・顧客基盤を11,000社から43,000社超に拡大した実績を持つ人物であり、意図的な体制刷新である可能性もある"],
      interviewQuestions: ["幹部の入れ替え後、日本を含むAPACの営業戦略に変化はありましたか"],
      sourceIds: ["qualtrics-ceo-maynard", "qualtrics-exec-restructuring-2026"],
    },
    {
      topic: "COMPETITIVE LANDSCAPE",
      title: "主要競合Medalliaが2026年に財務悪化。Qualtricsにとって追い風の可能性。",
      conclusion: "最大の直接競合であるMedallia(Thoma Bravo傘下)が2026年に入り財務面で苦境に陥り、Blackstone・Apollo・FS KKR主導のグループへの事業再編に合意したと報じられている。Qualtrics自身も経営体制の刷新中だが、競合の不安定化は相対的な追い風となり得る。",
      confidence: "中",
      evidence: ["Medalliaの負債が「distressed(要注意)」と格付けされ、2026年6月に債権者との再編合意が報じられている"],
      counterSignals: ["Qualtrics自身も新CEOの下で大型買収の統合と組織再編を同時に進めており、単純に「敵の失点」を活かせる体制かは不透明"],
      interviewQuestions: ["Medalliaとの競合で、直近の商談における勝率や訴求ポイントに変化はありますか"],
      sourceIds: ["qualtrics-medallia-distress"],
    },
    {
      topic: "JAPAN LEADERSHIP STABILITY",
      title: "カントリーマネージャー熊代悟氏が8年間在任。日本法人トップの安定性は高い。",
      conclusion: "熊代悟氏は2018年の日本法人1人目の社員として入社して以来、8年間カントリーマネージャーを務めている。グローバル本社で3度の所有構造変化とCEO交代・幹部刷新が起きている中でも、日本組織のトップは比較的安定してきたと考えられる。",
      confidence: "中",
      evidence: ["2018年に日本法人1人目の社員として入社", "2026年4月時点の取材でもカントリーマネージャーとして紹介されている"],
      counterSignals: ["グローバル本社の経営体制刷新が、今後日本組織にどう波及するかは未確認"],
      interviewQuestions: ["グローバルの経営体制刷新は、日本の営業戦略や採用方針にどう影響していますか"],
      sourceIds: ["qualtrics-japan-leadership", "qualtrics-japan-fy2026-strategy"],
    },
    {
      topic: "JAPAN PARTNER CHANNEL",
      title: "日本製鉄ソリューションズ・NTTドコモビジネス等、パートナー経由の販売網構築が進行中。",
      conclusion: "2025年3月に日本製鉄ソリューションズの「ソシキノミライ」、NTTドコモビジネスの「空電」など、複数の日本パートナーとの連携が確認できる。2025年度は11回のイベントに350社・679名が参加したとされ、コミュニティ形成を通じた間接販売網の拡大が進んでいると考えられる。",
      confidence: "中",
      evidence: ["2025年3月、日本製鉄ソリューションズとのパートナーシップ", "2025年度、11回のイベントで350社・679名が参加"],
      counterSignals: ["パートナー経由の販売がどの程度の売上構成比を占めるかは公開情報からは分からない"],
      interviewQuestions: ["パートナー経由の商談と直販の商談は、どの程度の比率になっていますか"],
      sourceIds: ["qualtrics-japan-nsw-partner", "qualtrics-japan-fy2026-strategy"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "グローバル本社の経営体制刷新と、日本組織のカントリーマネージャー8年在任という対照的な安定度。",
    hypothesis: {
      title: "本社の変化の大きさに対して、日本組織は相対的に安定したレイヤーとして機能してきた可能性。",
      body: "SAP傘下→再上場→PE非公開化→新CEO就任からの幹部一新と、グローバル本社は7年間で複数回の大きな体制変化を経験してきた。一方で日本組織のカントリーマネージャーは2018年から8年間変わっておらず、グローバルの変化の影響を一定程度緩衝してきた可能性がある。",
    },
    careerValue: {
      title: "XM(エクスペリエンスマネジメント)領域の専門性は、CX・マーケティング・HR Tech全般で評価されやすい。",
      body: "MarTech/HR Tech領域での商談経験や、大企業のC-level層への提案経験は、Medallia等の直接競合だけでなく、隣接するCX・マーケティングテクノロジー企業への転職でも再現性を説明しやすい。一方、グローバル本社の経営体制刷新が今後日本組織にどう波及するかは、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "LIXIL", products: "Qualtrics XMプラットフォーム", outcome: "2024年7月の東京カンファレンスで、当時のCEOにより導入企業として名指しされた。", implication: "日本の大手製造業での導入実績。", sourceId: "qualtrics-japan-100m-investment" },
    { company: "ヤマハ発動機", products: "Qualtrics XMプラットフォーム", outcome: "同カンファレンスで導入企業として名指しされた。", implication: "日本の大手輸送機器メーカーでの導入実績。", sourceId: "qualtrics-japan-100m-investment" },
    { company: "マツダ", products: "Qualtrics XMプラットフォーム", outcome: "同カンファレンスで導入企業として名指しされた。", implication: "日本の大手自動車メーカーでの導入実績。", sourceId: "qualtrics-japan-100m-investment" },
  ],
  externalSignals: [
    { label: "最終公表売上高(FY2022)", value: "$1,458.6M(+36%)", detail: "非公開化前、公開企業として最後に開示された通期実績。", caveat: "2023年の非公開化以降、財務数値は非開示。「$2B規模を目指す」という言及は目標であり確定数値ではない。", sourceId: "qualtrics-fy2022-results" },
    { label: "レイオフの規模(2023年)", value: "約780人(当時の約14%)", detail: "2023年10月に実施。", caveat: "2026年にも同規模のレイオフがあったとする情報源があるが、2023年データの誤転載である可能性が高く未確認。", sourceId: "qualtrics-layoffs-2023" },
  ],
  roleLens: {
    salesMotion: "現在確認できる日本の求人はCommercial AE・Enterprise AE・Commercial Sales Manager・Technical Success Managerで構成され、Commercial/Mid-Market層とEnterprise層でセグメントが分かれている。Enterprise AE・Sales Manager職はネイティブレベルの日本語を必須とする一方、Commercial AE職には日本語要件の明記がなく、セグメントによって求める言語プロファイルが異なる可能性がある。",
    compensation: "Qualtrics Japan固有の給与データは確認できていない。求人にOTE等の金額記載はないが、Experience Bonus(年18.5万円)や四半期ウェルネス手当等の福利厚生は明記されている。",
    quota: "四半期・年間の受注目標が前提とされるが、具体的なクオータ額は非公開。Commercial Sales Manager職では「Uncapped Commissions and Accelerators」と明記されている。",
    collaboration: "熊代悟氏(カントリーマネージャー)のもとで、Commercial・Enterpriseの各セグメントチームが連携する体制。Commercial Sales Manager職は「日本の経営メンバーの一員」と位置づけられており、現場マネージャーが経営レイヤーの意思決定にも関与する構造と見られる。",
  },
  leadership: {
    name: "熊代 悟",
    role: "クアルトリクス合同会社 カントリーマネージャー",
    read: "2018年、Qualtrics日本法人の1人目の社員として入社し、以来8年間カントリーマネージャーを務めている。ウェスティンホテル東京での勤務を経てIT業界へ転じ、Documentum・Interwovenで日本代表を歴任した経歴を持つ。グローバル本社が2019年以降3度の所有構造変化とCEO交代・幹部刷新を経験する中でも、日本組織のトップとしては一貫して在任している。",
    sourceId: "qualtrics-japan-leadership",
  },
  companyStats: {
    globalHeadcount: { value: "非開示(非公開企業)", detail: "2026年4月の幹部再編後、GeekWireの報道では「4,500人超」と言及されているが、正確な現在値は変動している可能性がある。", sourceId: "qualtrics-exec-restructuring-2026" },
    japanHeadcount: { value: "非公開", detail: "2022〜2023年頃の情報では「100名超」との言及があったが、直近(2025〜2026年)の正確な人数は確認できていない。", sourceId: "qualtrics-japan-leadership" },
    japanOffice: { value: "東京都千代田区丸の内(新丸の内ビルディング37階)、大阪オフィスあり", detail: "2022年4月に丸の内へ拡張移転、同年9月に大阪オフィスを開設。", sourceId: "qualtrics-japan-office-2022" },
    japanSince: { value: "2016年9月(2018年に事業開始)", detail: "当初はQJL Technologies合同会社として沖縄県名護市で設立、後に東京へ移転・改称。", sourceId: "qualtrics-japan-registry" },
  },
  salesAppeal: {
    intro: "本社は所有構造・経営体制ともに変化の大きい局面にある一方、日本組織は8年間同じカントリーマネージャーのもとで、LIXIL・ヤマハ発動機・マツダクラスの大手製造業への浸透を進めてきた環境。",
    points: [
      { title: "LIXIL・ヤマハ発動機・マツダクラスの大手導入事例を語れる", detail: "2024年の東京カンファレンスで名指しされた大手製造業の導入実績を、商談の参照材料として使える。", sourceIds: ["qualtrics-japan-100m-investment"] },
      { title: "8年間安定したカントリーマネージャー体制", detail: "熊代悟氏が日本法人設立時から一貫してトップを務めており、グローバルの変化に対する組織の緩衝材になってきた可能性がある。", sourceIds: ["qualtrics-japan-leadership"] },
      { title: "Press Ganey Forsta買収による、ヘルスケア領域への拡張力", detail: "$6.75Bの大型買収により、CX/EXだけでなく患者体験データまで含めた提案の幅が広がっている。", sourceIds: ["qualtrics-pressganey-acquisition"] },
      { title: "XM(エクスペリエンスマネジメント)という、隣接領域でも通用する専門性", detail: "CX・EX・MarTech・HR Techを横断する提案経験は、Medallia等の直接競合や隣接領域の企業への転職でも評価されやすい。", sourceIds: ["qualtrics-experience-agents"] },
    ],
  },
  interviewPrep: {
    intro: "2026年のCEO交代・幹部再編という大きな変化の直後だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2026年4月の幹部再編後、日本を含むAPACの営業戦略に変化はありましたか。", why: "本社の大きな組織変更が、現場の営業戦略にどう波及しているかを確認したい。", sourceIds: ["qualtrics-exec-restructuring-2026"] },
      { question: "Press Ganey Forsta買収は、日本の商談でどこまで提案に組み込まれていますか。", why: "$6.75Bの大型買収が、実際の現場提案にどこまで反映されているかを確認したい。", sourceIds: ["qualtrics-pressganey-acquisition"] },
      { question: "Commercial AEとEnterprise AEで、日本語運用の実態に違いはありますか。", why: "求人票上、Commercial AE職にのみ日本語要件の明記がない点を確認したい。", sourceIds: ["qualtrics-japan-100m-investment"] },
      { question: "2024年に発表された日本市場への5年$100M投資は、現在どの程度進捗していますか。", why: "経営体制の刷新後も、日本市場への投資方針が維持されているかを確認したい。", sourceIds: ["qualtrics-japan-100m-investment"] },
    ],
  },
  solutions: [
    {
      name: "Qualtrics XM Platform(CustomerXM / EmployeeXM / BrandXM)",
      valueProp: "顧客・従業員・ブランドに関する調査・フィードバックを単一のプラットフォームに統合し、AIエージェントが課題の自動検知・対応まで担うエクスペリエンスマネジメント基盤。",
      url: "https://www.qualtrics.com/experience-management/",
      competitors: "Medallia、SurveyMonkey/Momentive、Contentsquare・Amplitudeなどデジタル体験分析系ツールとも一部重複。",
      differentiation: "Medalliaが2026年に財務面で苦境に陥っていると報じられる中、Qualtricsは大型買収(Press Ganey Forsta)による領域拡張とAIエージェント機能の強化を同時に進めている。",
      retention: "18,000社超の導入実績があるとされるが、日本固有の継続率データは非公開。",
    },
    {
      name: "Experience Agents(AIエージェント)",
      valueProp: "顧客・従業員と直接やり取りし、リアルタイムで課題を自律的に解決するAIエージェント機能。",
      url: "https://www.qualtrics.com/news/qualtrics-accelerates-ai-leadership-and-value-with-experience-agents/",
      competitors: "他のCX/XMベンダーが提供するAIエージェント機能全般が競合。",
      differentiation: "2026年3月発表の比較的新しい機能で、既に顧客企業での実運用が始まっているとされる。",
      retention: "2026年発表の新機能のため、継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.qualtrics.com/customers/",
  fitTags: [
    "エクスペリエンスマネジメント(XM)領域を極めたい",
    "LIXIL・ヤマハ発動機クラスの大手導入事例を武器にしたい",
    "8年間安定したカントリーマネージャー体制のもとで働きたい",
    "大型買収(Press Ganey Forsta)の統合期に関わりたい",
    "MarTech/HR Tech領域の専門性を磨きたい",
    "経営体制の変化が大きい環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "AIエージェント製品の立ち上げ期に関わりたい",
  ],
  comparisonMap: [
    { arena: "顧客・従業員体験(CX/XM)", companies: ["Qualtrics", "Amplitude", "Contentsquare"], why: "顧客理解・体験データ活用予算の比較" },
  ],
  sources: qualtricsSources,
};

const celonisSources: ResearchSource[] = [
  {
    id: "celonis-founding",
    label: "Munich Startup「The Celonis story: Almost too good to be true」",
    url: "https://www.munich-startup.de/en/news/the-celonis-story-almost-too-good-to-be-true",
    kind: "外部集計",
    scope: "2011年、TU München出身のAlexander Rinke氏・Bastian Nominacher氏・Martin Klenk氏による創業経緯",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-series-d-techcrunch",
    label: "TechCrunch「With a $13B valuation, Celonis defies current startup economics」",
    url: "https://techcrunch.com/2022/10/16/with-a-13b-valuation-celonis-defies-current-startup-economics/",
    kind: "外部集計",
    scope: "2022年8月、$1BのシリーズDラウンドと評価額$13.2B(2019年から420%増)、累計調達額$2.4B",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-thoma-appointment",
    label: "Celonis公式「Celonis Appoints Carsten Thoma as President」",
    url: "https://www.celonis.com/news/press/celonis-appoints-carsten-thoma-as-president-to-advance-innovation-and-sustainable-growth",
    kind: "企業公式",
    scope: "2023年8月、Carsten Thoma氏がPresidentに就任(共同CEO制のRinke・Nominacher体制を補完)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-sap-legal-update",
    label: "Celonis公式「Legal Update: SAP Agrees to Not Interfere with Celonis Extractor」",
    url: "https://www.celonis.com/news/press/legal-update-sap-agrees-to-not-interfere-with-celonis-extractor-in-antitrust-litigation",
    kind: "企業公式",
    scope: "2025年6月、SAPがCelonisのデータ抽出ツールへの妨害・追加課金を行わないことに合意(訴訟は係争中)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-sap-lawsuit-ruling",
    label: "JDJournal「U.S. Judge Allows Antitrust Lawsuit Against Software Giant SAP to Proceed」",
    url: "https://www.jdjournal.com/2025/10/28/u-s-judge-allows-antitrust-lawsuit-against-software-giant-sap-to-proceed/",
    kind: "外部集計",
    scope: "2025年10月27日、CelonisがSAPを提訴した独禁法訴訟(2025年3月提訴)で、大部分の請求の審理継続を裁判所が許可",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-ipo-boersen",
    label: "Börsen-Zeitung「Celonis considers an IPO in the USA」",
    url: "https://www.boersen-zeitung.de/english/celonis-considers-an-ipo-in-the-usa",
    kind: "外部集計",
    scope: "2023年、NYでのIPOを投資銀行と協議中と報道。Celonis側は「純粋な推測」とコメントし、時期を明言せず",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-ikigai-acquisition",
    label: "Celonis公式「Celonis Launches the Context Model...Agrees to Acquire...Ikigai Labs」",
    url: "https://www.celonis.com/news/press/celonis-launches-the-context-model-to-eliminate-enterprise-ais-operational-blind-spots-agrees-to-acquire-ai-decision-intelligence-leader-ikigai-labs",
    kind: "企業公式",
    scope: "2026年5月12日、Celonis Context Model(CCM)発表とAI意思決定インテリジェンス企業Ikigai Labsの買収合意(MITが特許ライセンスと引き換えにCelonis株式を取得)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-ai-report-2026",
    label: "Celonis公式(日本語)「2026年度版プロセス最適化レポート」",
    url: "https://www.celonis.com/jp/news/press/the-enterprise-ai-reality-check-high-ambitions-meet-operational-barriers",
    kind: "企業公式",
    scope: "2025年6〜7月に世界1,649名のビジネスリーダーを調査。85%が3年以内の自律型企業化を目指す一方、76%が現状の業務プロセスがその障壁になっていると回答",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-establishment",
    label: "Celonis株式会社プレスリリース(PR TIMES)「日本法人を設立し、本格的な事業展開を開始」",
    url: "https://prtimes.jp/main/html/rd/p/000000001.000049282.html",
    kind: "企業公式",
    scope: "2019年2月、Celonis株式会社設立。初代代表は小林裕亨氏。パイロット案件20件超、パートナー10社(SAPジャパン・アクセンチュア・KPMG・三菱総合研究所等)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-president-2021",
    label: "共同通信PRワイヤー「Celonisの代表取締役社長に村瀬 将思が就任」",
    url: "https://kyodonewsprwire.jp/release/202111304129",
    kind: "企業公式",
    scope: "2021年12月1日付で村瀬将思氏が代表取締役社長に就任。前職はServiceNow Japan(約6年間EVP)、日本HP(ソフトウェア事業担当役員)、iGATE Global Solutions",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-fy2025-strategy",
    label: "クラウド Watch「Celonisは“攻めに転じる”、村瀬将思社長が2025年1月期の事業戦略を発表」",
    url: "https://cloud.watch.impress.co.jp/docs/news/1575299.html",
    kind: "外部集計",
    scope: "2024年3月12日発表。FY2024実績はNNACV前年比2.7倍・ARR2.4倍・顧客数1.6倍・社員数1.8倍・認定資格取得者71.5倍。FY2025は「攻めのフェーズ」と位置付け、New Logo獲得を含む6つの重点領域を掲げる",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-openwork",
    label: "OpenWork「Celonis株式会社」社員クチコミ",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x000008yeL5",
    kind: "コミュニティ",
    scope: "回答4件、総合評価3.12(全79,888社中上位20%)。平均残業17.9時間、有休消化率60.8%",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-jobs-portfolio-ae",
    label: "Celonis Careers(Greenhouse)「Portfolio (Scale) Account Executive」",
    url: "https://job-boards.greenhouse.io/celonis/jobs/7551536003",
    kind: "企業公式",
    scope: "東京拠点、売上高10億ドル超のエンタープライズ製造業向け新規ロゴ獲得・経常収益拡大を担う求人票",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-jobs-ecosystem",
    label: "Celonis Careers(Greenhouse)「Head of Ecosystem」",
    url: "https://job-boards.greenhouse.io/celonis/jobs/7827636003",
    kind: "企業公式",
    scope: "東京拠点、NEC・富士通・ABeam等国内SIerとのパートナーシップ構築を担う求人票。Japan Country Managerへ直属",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-office-tokyo",
    label: "Celonis公式「Tokyo Office」採用ページ",
    url: "https://careers.celonis.com/join-us/offices/tokyo",
    kind: "企業公式",
    scope: "東京・大手町エリアのオフィス紹介",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-registry",
    label: "全国法人リスト「Celonis株式会社」",
    url: "https://houjin.jp/c/4010001197277",
    kind: "外部集計",
    scope: "登記住所(東京都千代田区丸の内1-6-5丸の内北口ビルディング9階、2019年設立時点)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-systemsupport",
    label: "Celonis公式プレス「システムサポートの導入事例を発表」",
    url: "https://www.celonis.com/jp/press/system-support-announcement/",
    kind: "企業公式",
    scope: "パートナー企業システムサポートが自社導入(2023年1月開始)。年間3,000件超の部門長承認業務のうち約1,500件(50%)を削減",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-cdt2024",
    label: "Celonis公式ニュース「Celonis Day Tokyo 2024を開催」",
    url: "https://www.celonis.com/jp/news/press/cdt24",
    kind: "企業公式",
    scope: "2024年7月26日開催。Aflac生命保険・マニカホールディングス・イーデザイン損保・NXグループ・ブラザー工業・JTグループ・テラサキ電機が事例登壇",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-japan-ascii-2022",
    label: "ASCII.jp「『日本でもプロセスマイニングの大きな波が起きる』Celonis 村瀬氏」",
    url: "https://ascii.jp/elem/000/004/098/4098507/",
    kind: "外部集計",
    scope: "2022年7月19日の記者説明会での村瀬氏コメント",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-layoffs-community",
    label: "Blind「Celonis layoffs」社員投稿",
    url: "https://www.teamblind.com/post/celonis-layoffs-xjer4jut",
    kind: "コミュニティ",
    scope: "2023年2月頃、過剰採用の反動として約120人規模のレイオフがあったとする社員の投稿(公式発表・一次報道は確認できず)",
    checkedAt: "2026-08-10",
  },
  {
    id: "celonis-global-about",
    label: "Celonis公式(日本語)会社概要ページ",
    url: "https://www.celonis.com/jp/company/about-us",
    kind: "企業公式",
    scope: "2011年創業、社員3,000人超、拠点14か所、顧客5,000社超、創出した顧客価値累計$6.5B",
    checkedAt: "2026-08-10",
  },
];

const celonisIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Celonisは、大企業の経営企画、業務改革、IT部門が、ERPなどの実データから業務プロセスの詰まりや逸脱を可視化し、改善を実行するためのプロセスインテリジェンス基盤。「業務が実際にどう流れているか把握できない」「部門間の手戻りや遅延が利益を圧迫している」「改革施策の効果を数字で追えない」といった課題を解決する。経営課題を受注、調達、在庫、財務などの現場データへ落とし込み、発見した価値を自動化やAI実行まで広げられる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2011年、Technical University of Munich(TUM)出身のAlexander Rinke氏(数学専攻)・Bastian Nominacher氏(ファイナンス専攻)・Martin Klenk氏(情報工学専攻)が、公共放送局Bayerischer Rundfunk向けのプロジェクトで、業務システムに蓄積された取引データから業務の非効率を分析できることに着想を得て創業。Nominacher氏の自宅アパートから始まり、プロセスマイニングという新しいカテゴリーを切り拓いてきた。2019年11月に$290Mを調達し評価額$2.5B、2021年に評価額$11B、2022年8月には$1Bのシリーズラウンドで評価額$13.2Bに達し、2019年比420%の評価額成長を遂げた(累計調達額$2.4B)。2023年8月にはCarsten Thoma氏がPresidentに就任し、共同CEOのRinke氏(商業サイド)・Nominacher氏(技術サイド)体制を補完している。非公開企業のため詳細な財務数値は開示されていないが、2026年時点で社員3,000人超・拠点14か所・顧客5,000社超・累計創出顧客価値$6.5Bを掲げている。",
    ipoOutlookSummary: "2023年、独Börsen-Zeitung紙が投資銀行との協議を経てニューヨークでの2024年IPOを検討していると報じたが、Celonis側は「純粋な推測」とコメントし、時期を明言しなかった。2026年5月時点でもIPOは実現しておらず、非公開企業のままAI関連の大型買収(Ikigai Labs)を進めている。業界メディアでは2026年のIPO候補としてしばしば名前が挙がるが、これはCelonis固有の確定情報ではなく市場観測にとどまる。",
    milestones: [
      { year: "2011", label: "Munichで創業", detail: "Rinke氏・Nominacher氏・Klenk氏がTUM卒業後、Nominacher氏の自宅アパートから開始。", sourceId: "celonis-founding" },
      { year: "2022.8", label: "$1Bシリーズラウンド、評価額$13.2B", detail: "2019年比420%の評価額成長。累計調達額$2.4B。", sourceId: "celonis-series-d-techcrunch" },
      { year: "2023.8", label: "Carsten Thoma氏がPresidentに就任", detail: "共同CEO体制(Rinke・Nominacher)を補完する形で新設。", sourceId: "celonis-thoma-appointment" },
      { year: "2025.3-10", label: "SAPを独禁法で提訴、一部請求の審理継続が認められる", detail: "2025年3月提訴、6月にデータアクセスで一部和解、10月に裁判所が大部分の請求の審理継続を許可。", sourceId: "celonis-sap-lawsuit-ruling" },
      { year: "2026.5", label: "Celonis Context Model発表、Ikigai Labsの買収合意", detail: "AIエージェントに業務コンテキストを与える基盤技術。MIT発のAI意思決定インテリジェンス企業を買収し、MITが株式を取得。", sourceId: "celonis-ikigai-acquisition" },
    ],
    sourceIds: ["celonis-founding", "celonis-series-d-techcrunch", "celonis-thoma-appointment", "celonis-sap-lawsuit-ruling", "celonis-ikigai-acquisition"],
    genbaVerdict: {
      headline: "非公開のままユニコーン評価を維持しつつ、SAPとの法廷闘争とAI企業買収を同時に進める、変化の大きい局面。",
      body: "2022年の$13.2B評価額から4年近く非公開のまま、CelonisはSAPを相手取った独禁法訴訟(2025年3月提訴、10月に大部分の請求の審理継続が認められる)と、MIT発のAI企業Ikigai Labsの買収(2026年5月)という、法務と製品戦略の両面で大きな動きを同時に進めている。IPO観測は繰り返し報じられるものの実現しておらず、「訴訟で守りながら、買収で攻める」という二正面作戦の最中にあると考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "Celonis Context Model + Ikigai Labs買収による、AIエージェント時代への布石",
        body: "2026年5月発表のCelonis Context Model(CCM)は、業務プロセスのリアルタイムなデジタルツインをAIエージェントが理解できる形で提供する基盤技術。同時に発表したMIT発のAI意思決定インテリジェンス企業Ikigai Labsの買収により、計画・シミュレーション・予測機能を取り込み、MITとの特許ライセンス契約も締結した。",
        sourceId: "celonis-ikigai-acquisition",
      },
      {
        title: "「AIの野心と実行ギャップ」という市場環境がプロセスインテリジェンス需要を後押し",
        body: "2025年6〜7月に世界1,649名のビジネスリーダーを対象にした自社調査では、85%が3年以内の自律型企業化を目指す一方、76%が現状の業務プロセスがその障壁になっていると回答。この「野心と実行力のギャップ」を埋める製品としてCelonisを位置づけている。",
        sourceId: "celonis-ai-report-2026",
      },
      {
        title: "日本市場での「攻めのフェーズ」宣言と、NEC・富士通・ABeam等SIerとの連携拡大",
        body: "2024年3月発表のFY2024実績はNNACV前年比2.7倍・ARR2.4倍・顧客数1.6倍・社員数1.8倍と急成長。村瀬社長はFY2025を「スタートアップ期から成長期への移行」と位置づけ、2026年8月時点でもNEC・富士通・ABeamとの連携を担うHead of Ecosystemを新規募集するなど、パートナー経由の拡大投資を継続している。",
        sourceId: "celonis-japan-fy2025-strategy",
      },
    ],
    riskHypotheses: [
      {
        title: "SAPとの独禁法訴訟が長期化する可能性",
        body: "2025年3月にCelonisがSAPを提訴した独禁法訴訟は、6月にデータアクセスに関する一部合意があったものの、10月の裁判所判断で大部分の請求について審理継続が認められ、係争は続いている。SAPのERPと連携して稼働する製品特性上、訴訟の帰趨は顧客への提案にも影響しうる。",
        confidence: "中",
        evidence: ["2025年3月、CelonisがSAPを独禁法で提訴", "2025年10月、裁判所が大部分の請求の審理継続を許可"],
        counterSignal: "2025年6月時点でSAPは「Celonisのデータ抽出ツールを妨害しない」ことに合意しており、当面の実務上の顧客影響は限定的である可能性がある。",
        sourceIds: ["celonis-sap-legal-update", "celonis-sap-lawsuit-ruling"],
      },
      {
        title: "2023年2月頃、過剰採用の反動とされるレイオフの社員報告(未確認)",
        body: "匿名SNS「Blind」上に、2023年2月頃、過剰採用と達成困難な成長目標を背景に約120人規模のレイオフがあったとする社員投稿が複数見られる。ただし公式発表や信頼できる一次報道は確認できておらず、規模・時期の正確性は未検証。",
        confidence: "探索中",
        evidence: ["匿名SNS上で複数の社員が2023年2月前後のレイオフに言及", "四半期ごとの組織再編が続いているとする社員コメントもある"],
        counterSignal: "公式なプレスリリースや大手メディアの報道は確認できておらず、誇張・誤情報が混在している可能性がある。",
        sourceIds: ["celonis-layoffs-community"],
      },
    ],
    japanGrowth: {
      headline: "非公開のため財務非開示。村瀬将思氏が2021年12月から4年以上社長を務め、FY2025を「攻めのフェーズ」と位置付け急成長を継続。",
      narrative: "Celonis株式会社は2019年2月に設立され、初代代表は小林裕亨氏が務めた。2021年12月1日付でServiceNow Japan出身の村瀬将思氏が代表取締役社長に就任し、以来4年以上にわたり日本組織を率いている。2024年3月に発表されたFY2024(2023年2月〜2024年1月)実績は、NNACV(新規年間契約額)が前年比2.7倍、ARR2.4倍、顧客数1.6倍、社員数1.8倍、認定資格取得者71.5倍という急成長で、村瀬氏はこれを「スタートアップ期から成長期への移行」と総括し、FY2025を「攻めのフェーズ」と位置付けた。パートナー面では、2023年度にNEC・富士通との連携を発表したほか、システムサポートが2022年3月からCelonis導入・運用支援サービスを開始し、自社の部門長承認業務のうち年間約1,500件(50%)を削減する実績を上げ、2024年2月にはGoldパートナー認定を取得している。2024年7月開催のCelonis Day Tokyoには、Aflac生命保険・マニカホールディングス・イーデザイン損保・NXグループ(日本通運ホールディングス)・ブラザー工業・JTグループ・テラサキ電機といった保険・物流・製造業の大手企業が事例登壇しており、業種の広がりがうかがえる。2026年8月時点では、NEC・富士通・ABeam等の国内SIerとの連携強化を専任で担うHead of Ecosystemを新規募集しており、パートナー経由の拡大投資は継続している。",
      qualitativeSignals: [
        { label: "村瀬将思氏が2021年12月から4年以上社長を務める", detail: "前職はServiceNow Japan(約6年間EVP)、日本HP、iGATE Global Solutions。", sourceId: "celonis-japan-president-2021" },
        { label: "FY2024実績はNNACV2.7倍・ARR2.4倍・顧客数1.6倍・社員数1.8倍", detail: "2024年3月発表。FY2025は「攻めのフェーズ」と位置付け。", sourceId: "celonis-japan-fy2025-strategy" },
        { label: "NEC・富士通・ABeam等の国内SIer連携強化のためHead of Ecosystemを新設", detail: "2026年8月時点で募集中、Japan Country Managerへ直属。", sourceId: "celonis-japan-jobs-ecosystem" },
      ],
      sourceIds: ["celonis-japan-establishment", "celonis-japan-president-2021", "celonis-japan-fy2025-strategy", "celonis-japan-cdt2024"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Celonisの売り方は「業務プロセスが実際にどう流れているか、経営層も現場も正確に把握できていない」という課題が起点。ERP等に蓄積された実データからプロセスを可視化し、非効率の特定からAIエージェントによる自動実行までを一気通貫でつなぐ提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "Aflac生命保険・NXグループ・ブラザー工業のような保険・物流・製造業の大手企業が事例登壇しており、業種を問わず「業務プロセスの実態把握」が共通の出発点になっていると考えられる。" },
      { title: "製品の成り立ちから見る課題", body: "Celonisは、業務システムのログデータから実際のプロセスフローを可視化するという発想から創業した。存在理由は「思い込みではなく、実データに基づいて業務プロセスを改善する」こと。" },
      { title: "外部環境の要求から見る課題", body: "2026年の自社調査では、企業の85%が3年以内の自律型企業化を目指す一方、76%が現状の業務プロセスがAI活用の障壁になっていると回答しており、AIエージェント導入の前提としてプロセスの可視化・標準化が求められている。" },
    ],
    narrative: [
      { label: "背景", body: "ERP・SFA等の業務システムは導入されているが、実際の業務プロセスがマニュアル通りに流れているかは、経営層も現場も正確に把握できていない。" },
      { label: "課題", body: "非効率なプロセスを勘と経験で改善しようとしても、根拠となるデータがなく、優先順位をつけられない。" },
      { label: "解決策", body: "CelonisのProcess Intelligence Platformで業務システムの実データからプロセスを可視化し、Celonis Context Modelを通じてAIエージェントに業務コンテキストを与え、改善提案から自動実行までをつなげる。" },
      { label: "選定の理由", body: "5,000社超という導入実績、Aflac・NXグループ・ブラザー工業のような大手企業での採用、そしてIkigai Labs買収による計画・シミュレーション機能の拡張が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、実際の業務プロセスがマニュアル通りに流れているかどうかを、データで確認したことはありますか。",
    valueHypothesis: "Aflac生命保険・NXグループ・ブラザー工業のような大手企業が事例登壇しているという開示を根拠に、一度エンタープライズ規模で定着すると、部門横断のプロセス改善基盤として扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "SAPと訴訟中のようだが、SAP環境で使い続けても大丈夫か", reframe: "2025年6月にSAPは、Celonisのデータ抽出ツールを妨害しないことに合意している。訴訟自体は係争中だが、実務上のデータ連携は当面維持される合意がある、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2011年", detail: "Munich、TU München出身のAlexander Rinke氏・Bastian Nominacher氏・Martin Klenk氏が創業。", sourceIds: ["celonis-founding"] },
    { label: "直近の資金調達", value: "2022年8月、$1Bシリーズラウンドで評価額$13.2B", detail: "2019年比420%の評価額成長。非公開企業のまま推移。", sourceIds: ["celonis-series-d-techcrunch"] },
    { label: "日本法人設立", value: "2019年2月", detail: "Celonis株式会社。初代代表は小林裕亨氏。", sourceIds: ["celonis-japan-establishment"] },
    { label: "現社長", value: "村瀬将思氏(2021年12月〜)", detail: "ServiceNow Japan出身。4年以上在任。", sourceIds: ["celonis-japan-president-2021"] },
  ],
  hypotheses: [
    {
      topic: "PRIVATE UNICORN LONGEVITY",
      title: "評価額$13.2Bのまま4年近く非公開を維持。IPO観測は繰り返し報じられるが実現せず。",
      conclusion: "2022年8月の$13.2B評価額から2026年8月時点まで非公開のまま推移している。2023年にはNY IPOの検討が報じられたが、Celonis側は「純粋な推測」とコメントし時期を明言しなかった。",
      confidence: "高",
      evidence: ["2022年8月、$1Bシリーズラウンドで評価額$13.2B", "2023年、Börsen-Zeitungが2024年NY IPO検討を報道するも未実現"],
      counterSignals: ["2026年5月にIkigai Labs買収という大型M&Aを実施しており、IPOよりも製品・技術獲得を優先する局面にあるとも解釈できる"],
      interviewQuestions: ["非公開のまま4年以上が経つが、IPOに関する社内の温度感はどうですか"],
      sourceIds: ["celonis-series-d-techcrunch", "celonis-ipo-boersen"],
    },
    {
      topic: "LEGAL RISK",
      title: "SAPとの独禁法訴訟が係争中。データアクセスでは一部合意も、本訴訟は続く。",
      conclusion: "2025年3月にCelonisがSAPを独禁法で提訴。同年6月にSAPがデータ抽出ツールを妨害しないことに合意したが、10月の裁判所判断で大部分の請求について審理継続が認められており、訴訟自体は続いている。",
      confidence: "高",
      evidence: ["2025年3月提訴、6月にデータアクセスで一部合意", "2025年10月、裁判所が大部分の請求の審理継続を許可"],
      counterSignals: ["データアクセスという実務上最も重要な論点では合意が成立しており、顧客への当面の影響は限定的とみられる"],
      interviewQuestions: ["SAPとの訴訟の進捗は、日本の商談でどの程度話題になりますか"],
      sourceIds: ["celonis-sap-legal-update", "celonis-sap-lawsuit-ruling"],
    },
    {
      topic: "AI PRODUCT PIVOT",
      title: "Ikigai Labs買収により、可視化中心の製品からAIエージェント実行基盤へ拡張。",
      conclusion: "2026年5月、Celonis Context Model(CCM)の発表と同時に、MIT発のAI意思決定インテリジェンス企業Ikigai Labsの買収を発表。計画・シミュレーション・予測機能を取り込み、MITとの特許ライセンス契約も締結しており、プロセス可視化からAIエージェントによる自動実行までを一気通貫でつなぐ方向へ製品戦略を拡張していると考えられる。",
      confidence: "中",
      evidence: ["2026年5月、Celonis Context Model発表とIkigai Labs買収合意", "Ikigai Labs共同創業者のDevavrat Shah氏(MIT教授)がChief Scientist of Enterprise AIに就任"],
      counterSignals: ["買収は発表段階で、完了時期・統合の進捗は今後の確認事項"],
      interviewQuestions: ["Ikigai Labs買収による新機能は、日本の商談にどこまで組み込まれていますか"],
      sourceIds: ["celonis-ikigai-acquisition"],
    },
    {
      topic: "JAPAN LEADERSHIP STABILITY",
      title: "村瀬将思氏が2021年12月から4年以上社長を務め、FY2025を「攻めのフェーズ」と宣言。",
      conclusion: "ServiceNow Japan出身の村瀬氏は2021年12月の就任以来、日本組織を率いている。2024年3月には日本事業を「スタートアップ期から成長期への移行」と総括し、FY2024実績(NNACV2.7倍等)を踏まえてFY2025を「攻めのフェーズ」と位置付けた。",
      confidence: "高",
      evidence: ["2021年12月、村瀬氏が代表取締役社長に就任", "2024年3月、FY2024実績とFY2025戦略を発表"],
      counterSignals: ["FY2025以降の具体的な達成状況(絶対値)は非公開で、成長率の掛け算のみが開示されている"],
      interviewQuestions: ["FY2025で掲げた『攻めのフェーズ』の進捗は、現時点でどう評価されていますか"],
      sourceIds: ["celonis-japan-president-2021", "celonis-japan-fy2025-strategy"],
    },
    {
      topic: "JAPAN PARTNER ECOSYSTEM",
      title: "NEC・富士通・ABeam等、国内SIerとのパートナーシップ強化に専任ポジションを新設。",
      conclusion: "2026年8月時点で、NEC・富士通・ABeam等の国内SIerとの連携構築を専任で担うHead of Ecosystemを新規募集している。Japan Country Managerへ直属し、グローバルEcosystem本部にも破線でレポートする設計で、パートナー経由の拡大を重視する体制が強化されつつあると考えられる。",
      confidence: "中",
      evidence: ["Head of Ecosystem求人で、NEC・富士通・ABeamとの連携が明記", "システムサポートが2024年2月にGoldパートナー認定を取得し、10社以上へ導入実績"],
      counterSignals: ["パートナー経由の売上が全体に占める比率は公開情報からは分からない"],
      interviewQuestions: ["パートナー経由の商談と直販の商談は、どの程度の比率になっていますか"],
      sourceIds: ["celonis-japan-jobs-ecosystem", "celonis-japan-systemsupport"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "グローバル本社は法務・M&Aで大きく動く一方、日本組織は村瀬社長のもとで4年以上安定した成長路線。",
    hypothesis: {
      title: "本社の変化の大きさに対して、日本組織は一貫した成長戦略のもとで拡大を続けてきた可能性。",
      body: "SAPとの独禁法訴訟、Ikigai Labs買収といった大きな動きがグローバル本社で続く一方、日本組織は2021年12月から村瀬氏が一貫して社長を務め、FY2024の急成長(NNACV2.7倍等)からFY2025の「攻めのフェーズ」宣言まで、比較的一貫したメッセージで組織を率いてきたと考えられる。",
    },
    careerValue: {
      title: "プロセスインテリジェンス(プロセスマイニング)領域の専門性は、業務改善・DXコンサルティング全般で評価されやすい。",
      body: "ERP・業務システムの実データに基づく提案経験や、NEC・富士通・ABeamのような大手SIerとの協業経験は、隣接するDX/RPA領域(UiPath等)や業務改善コンサルティングへの転職でも再現性を説明しやすい。一方、SAPとの訴訟の帰趨や、Ikigai Labs買収の統合状況は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "Aflac生命保険", products: "Celonis Process Intelligence Platform", outcome: "2024年7月のCelonis Day Tokyoで、CTO/CDIOが事例として登壇。", implication: "日本の大手保険会社での導入実績。", sourceId: "celonis-japan-cdt2024" },
    { company: "NXグループ(日本通運ホールディングス)", products: "Celonis Process Intelligence Platform", outcome: "同イベントで事例登壇。", implication: "日本の大手物流企業での導入実績。", sourceId: "celonis-japan-cdt2024" },
    { company: "ブラザー工業", products: "Celonis Process Intelligence Platform", outcome: "同イベントで事例登壇。", implication: "日本の大手製造業での導入実績。", sourceId: "celonis-japan-cdt2024" },
  ],
  externalSignals: [
    { label: "直近の評価額(2022年8月)", value: "$13.2B", detail: "$1Bのシリーズラウンドで到達。2019年比420%の評価額成長。", caveat: "非公開企業のため、2026年時点の正確な評価額は確認できていない。", sourceId: "celonis-series-d-techcrunch" },
    { label: "日本のFY2024成長率", value: "NNACV前年比2.7倍・ARR2.4倍・顧客数1.6倍", detail: "2024年3月発表。", caveat: "成長率(倍率)のみの開示で、売上高等の絶対値は非公開。", sourceId: "celonis-japan-fy2025-strategy" },
  ],
  roleLens: {
    salesMotion: "2026年8月時点で確認できる東京拠点の求人はPortfolio (Scale) Account Executive(売上高10億ドル超のエンタープライズ製造業向け新規ロゴ獲得・経常収益拡大、Japan Sales Directorへ直属)とHead of Ecosystem(NEC・富士通・ABeam等国内SIerとのパートナーシップ構築、Japan Country Managerへ直属)の2職種。直販とSIer経由の間接販売の両輪で拡大を図っている構成と考えられる。",
    compensation: "Celonis Japan固有の給与データは確認できていない。求人にOTE等の金額記載はないが、全社共通の制度として「創業初日からのRSU付与」「対象地域での無制限PTO」「四半期の学習支援」等が明記されている。",
    quota: "四半期・年間の目標達成が前提とされるが、具体的なクオータ額は非公開。Portfolio AEでは「新規ロゴ獲得(New Logo Acquisition)と経常収益の拡大」が主要ミッションと明記されている。",
    collaboration: "Portfolio AEはJapan Sales Directorへ、Head of EcosystemはJapan Country Managerへ直属し、グローバルEcosystem本部にも破線でレポートする設計。Portfolio AEはBDRチームと連携してパイプラインを構築する体制が明記されている。",
  },
  leadership: {
    name: "村瀬 将思",
    role: "Celonis株式会社 代表取締役社長",
    read: "2021年12月1日付で代表取締役社長に就任し、4年以上にわたり日本組織を率いている。前職はServiceNow Japanで約6年間エグゼクティブバイスプレジデントを務め、日本HPのソフトウェア事業担当役員、iGATE Global Solutionsでのセールスリーダー経験を持つ。2024年3月には日本事業を「スタートアップ期から成長期への移行」と総括し、FY2025を「攻めのフェーズ」と位置付けた。",
    sourceId: "celonis-japan-president-2021",
  },
  companyStats: {
    globalHeadcount: { value: "3,000人超", detail: "2026年時点の公式サイト記載(拠点14か所、顧客5,000社超)。", sourceId: "celonis-global-about" },
    japanHeadcount: { value: "非公開", detail: "FY2024に前年比1.8倍に拡大したとされるが、絶対数は非公開。", sourceId: "celonis-japan-fy2025-strategy" },
    japanOffice: { value: "東京都千代田区丸の内(登記上)。採用ページでは大手町エリアと案内。", detail: "2019年設立時点の登記住所は丸の内1-6-5丸の内北口ビルディング9階。", sourceId: "celonis-japan-registry" },
    japanSince: { value: "2019年2月", detail: "Celonis株式会社として設立。初代代表は小林裕亨氏。", sourceId: "celonis-japan-establishment" },
  },
  salesAppeal: {
    intro: "非公開のままユニコーン評価を維持し、SAPとの法廷闘争やAI企業買収など変化の大きい局面にあるグローバル本社と、村瀬氏のもとで4年以上急成長を続けてきた日本組織という組み合わせ。",
    points: [
      { title: "Aflac生命保険・NXグループ・ブラザー工業クラスの大手導入事例を語れる", detail: "2024年のCelonis Day Tokyoで登壇した大手企業の事例を、商談の参照材料として使える。", sourceIds: ["celonis-japan-cdt2024"] },
      { title: "NEC・富士通・ABeamとの提携拡大に伴う、SIer経由の大型商談機会", detail: "Head of Ecosystemの新設など、パートナー経由の拡大投資が継続している。", sourceIds: ["celonis-japan-jobs-ecosystem"] },
      { title: "「プロセスインテリジェンス」という、RPAとは異なる切り口の専門性", detail: "UiPath等のRPA・自動化領域とは異なる「実データに基づく可視化」という専門性を積める。", sourceIds: ["celonis-founding"] },
      { title: "Ikigai Labs買収によるAIエージェント時代への製品拡張力", detail: "MIT発のAI意思決定インテリジェンス技術を取り込み、可視化から自動実行までを一気通貫でつなぐ製品戦略に関わることができる。", sourceIds: ["celonis-ikigai-acquisition"] },
    ],
  },
  interviewPrep: {
    intro: "SAPとの訴訟やAI企業買収など、本社レベルで大きな動きが続く局面だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "SAPとの独禁法訴訟が進行中ですが、日本の商談で顧客から質問されることはありますか。", why: "訴訟の帰趨が、SAP環境で稼働する製品への提案にどう影響しているかを確認したい。", sourceIds: ["celonis-sap-lawsuit-ruling"] },
      { question: "Head of Ecosystemの新設は、直販とSIer経由のどちらを今後重視する意思決定でしょうか。", why: "パートナー経由の拡大投資が、担当予定のテリトリーにどう影響するかを確認したい。", sourceIds: ["celonis-japan-jobs-ecosystem"] },
      { question: "FY2025の「攻めのフェーズ」宣言から1年以上経ちますが、New Logo獲得の進捗はいかがですか。", why: "成長率の掛け算ではなく、実際の達成状況を確認したい。", sourceIds: ["celonis-japan-fy2025-strategy"] },
      { question: "Ikigai Labs買収によるAI機能は、日本の商談にどこまで組み込まれていますか。", why: "2026年5月発表の新機能が、実際の現場提案にどこまで反映されているかを確認したい。", sourceIds: ["celonis-ikigai-acquisition"] },
    ],
  },
  solutions: [
    {
      name: "Celonis Process Intelligence Platform",
      valueProp: "ERP等の業務システムに蓄積された実データから、業務プロセスの流れをリアルタイムに可視化し、非効率の特定から改善アクションの実行までをつなぐプロセスインテリジェンス基盤。",
      url: "https://www.celonis.com/platform",
      competitors: "SAP Signavio、UiPath(プロセスマイニング機能)、IBM Process Mining、Microsoft Power Automate等。",
      differentiation: "5,000社超の導入実績と、Aflac・NXグループ・ブラザー工業のような大手企業での日本国内事例を持つ。SAPとは独禁法訴訟の当事者関係にありながら、SAP環境との連携が前提の製品特性を持つ点が特徴的。",
      retention: "5,000社超の導入実績があるとされるが、日本固有の継続率データは非公開。",
    },
    {
      name: "Celonis Context Model(CCM)",
      valueProp: "業務プロセスのリアルタイムなデジタルツインをAIエージェントが理解できる形で提供し、Ikigai Labsの計画・シミュレーション・予測機能と組み合わせて、可視化から自動実行までをつなぐ基盤技術。",
      url: "https://www.celonis.com/platform/context-model",
      competitors: "他のエンタープライズAIエージェント基盤全般が競合。",
      differentiation: "2026年5月発表の新しい技術で、MIT発のIkigai Labs買収により計画・シミュレーション機能を取り込んでいる点が特徴。",
      retention: "2026年発表の新機能のため、継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.celonis.com/jp/solutions/stories",
  fitTags: [
    "プロセスインテリジェンス(プロセスマイニング)領域を極めたい",
    "Aflac・NXグループ・ブラザー工業クラスの大手導入事例を武器にしたい",
    "NEC・富士通・ABeamのような大手SIer経由の大型商談に関わりたい",
    "非公開企業ならではの急成長フェーズを味わいたい",
    "AIエージェント時代の製品拡張(Ikigai Labs買収)に関わりたい",
    "SAPとの独禁法訴訟など、変化の大きい環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "エンタープライズ製造業への提案力を磨きたい",
  ],
  comparisonMap: [
    { arena: "プロセスインテリジェンス/プロセスマイニング", companies: ["Celonis", "UiPath"], why: "業務プロセスの可視化・自動化予算の比較(RPA起点かプロセスマイニング起点か)" },
  ],
  sources: celonisSources,
};

const workatoSources: ResearchSource[] = [
  {
    id: "workato-founding",
    label: "Contrary Research「Workato Business Breakdown & Founding Story」",
    url: "https://research.contrary.com/company/workato",
    kind: "外部集計",
    scope: "2013年12月創業。Vijay Tella氏(CEO、Qik創業者)、Gautham Viswanathan氏、Harish Shetty氏、Dimitris Kogias氏が創業メンバー",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-series-e",
    label: "BusinessWire「Workato Raises $200 Million Series E at a $5.7 Billion Valuation」",
    url: "https://www.businesswire.com/news/home/20211110005457/en/Workato-Raises-200-Million-Series-E-at-a-5.7-Billion-Valuation-to-Accelerate-Record-Growth-and-Capitalize-on-Surging-Demand-for-Enterprise-Automation",
    kind: "企業公式",
    scope: "2021年11月、$200MのシリーズEで評価額$5.7B。累計調達額$421M(9ラウンド)",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-valuation-2025",
    label: "Contrary Research(二次情報)経由の2025年評価額報道",
    url: "https://research.contrary.com/company/workato",
    kind: "外部集計",
    scope: "2025年6月時点、セカンダリー市場で評価額が$5.7Bから$1.7B程度まで下落したとの観測",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-layoffs-2023",
    label: "Layoffs.fyi「Workato」",
    url: "https://layoffs.fyi/company/workato/",
    kind: "外部集計",
    scope: "2023年2月、約85人のレイオフ",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-airo-2026",
    label: "Workato公式「Workato AIRO Global Availability」(businesswire転載)",
    url: "https://www.businesswire.com/news/home/20260505979973/en/Workato-Launches-Otto-the-Trusted-AI-Teammate-that-Gets-Work-Done",
    kind: "企業公式",
    scope: "2026年、マルチエージェントシステム「AIRO」および「Otto」発表。iPaaS(アプリ連携)からAIエージェント実行基盤への製品転換",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-establishment",
    label: "Workato株式会社プレスリリース(PR TIMES)「日本での事業拡大へ向け日本法人を設立」",
    url: "https://prtimes.jp/main/html/rd/p/000000002.000090265.html",
    kind: "企業公式",
    scope: "2021年11月18日発表(登記は同年9月)。東京都千代田区に日本法人設立。初代カントリーマネージャーは中川誠一氏。3年間で$100M投資を表明",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-teng-appointment",
    label: "CIO World Asia「Workato Announces New Executive Leadership Appointments」",
    url: "https://cioworldasia.com/2023/02/27/new-executive-leadership-appointments-announced/",
    kind: "企業公式",
    scope: "2023年2月23日発表。Alan Teng氏(Workato APAC&Japan創業者/シニアアドバイザー)が日本法人のGeneral Manager 兼 VPに就任。就任以前の3年間でAPAC事業を前年比300%成長させ、Grab・Gojek・Scoot等を顧客化した実績が明記",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-bcn-2025",
    label: "週刊BCN+「米Workato日本法人、AIエージェントを企業のコアに」",
    url: "https://www.weeklybcn.com/journal/serial/detail/20251205_213029.html",
    kind: "外部集計",
    scope: "2025年12月5日掲載。Alan Teng氏(執行役員社長・APJ創業者)と堀和紀氏(執行役員 日本営業・パートナーシップ本部長)へのインタビュー。2025年から「つなげる」需要から「AIエージェント活用のためのデータ活用」需要へシフトしていると言及",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-jobs-partner-sales",
    label: "Workato Careers(Greenhouse)「Partner Sales Manager」",
    url: "https://www.workato.com/careers?gh_jid=8627710002#open-roles",
    kind: "企業公式",
    scope: "東京拠点、日本のチャネル/パートナー戦略の構築・実行を担う求人票",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-openwork",
    label: "OpenWork「Workato株式会社」",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x00000Wnvgz",
    kind: "コミュニティ",
    scope: "2026年8月時点、社員クチコミ投稿0件",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-japan-customers",
    label: "Workato公式(日本語)顧客事例ページ",
    url: "https://workato.jp/japan-customer-story/",
    kind: "企業公式",
    scope: "日本の導入企業事例。ナビタイムジャパン、日立ソリューションズ、Ridgelinez(富士通グループ)、大成建設等",
    checkedAt: "2026-08-10",
  },
  {
    id: "workato-competitors",
    label: "Zapier公式ブログ「The 6 best Workato alternatives in 2026」",
    url: "https://zapier.com/blog/workato-alternatives/",
    kind: "外部集計",
    scope: "競合ポジショニング。エンタープライズiPaaSの同格競合としてBoomi・Informatica、モダン自動化領域でTray、軽量自動化でZapier・Makeを位置付け",
    checkedAt: "2026-08-10",
  },
];

const workatoIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Workatoは、企業のIT部門と業務部門が、SaaSや基幹システムをつなぎ、部門横断の業務を自動化するためのエンタープライズiPaaS。「システム間の転記や連携を人に頼っている」「個別開発が積み上がり変更に時間がかかる」「AIエージェントを導入しても実際の業務を実行できない」といった課題を解決する。単一の連携案件から全社の自動化・AI実行基盤へ拡張し、ITと事業部門の双方を巻き込みながら業務そのものを再設計できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2013年12月、Qikの創業者だったVijay Tella氏(CEO)が、Gautham Viswanathan氏・Harish Shetty氏・Dimitris Kogias氏と共に創業。企業システム間の連携(iPaaS)を、従来のMuleSoft等より軽量・迅速に導入できるプラットフォームとして成長し、2021年1月に$110MのシリーズDで評価額$1.7B(ユニコーン化)、同年11月には$200MのシリーズEで評価額$5.7Bに到達した(累計調達額$421M)。しかし2025年6月時点では、セカンダリー市場で評価額が$1.7B程度まで下落したとの観測があり、2021年のピークから大きく後退している可能性がある(非公開企業のため公式な評価額改定は確認できていない)。2023年2月には約85人のレイオフを実施。2025年以降は、単なるアプリ間連携(iPaaS)の会社から、AIエージェントが実際に業務を実行する基盤への製品転換を進めており、2026年には複数エージェントシステム「Workato AIRO」やAIチームメイト「Otto」を発表している。",
    ipoOutlookSummary: "具体的なIPO時期の公式言及は確認できていない。2021年のシリーズE時点では上場観測も一部にあったが、2025年の評価額下落観測を踏まえると、当面はAIエージェント関連製品への転換を優先し、非公開のまま推移する可能性がある。これはGenbaの推測であり確定情報ではない。",
    milestones: [
      { year: "2013.12", label: "Vijay Tella氏らが創業", detail: "Qik創業者のTella氏がCEOに就任。", sourceId: "workato-founding" },
      { year: "2021.1", label: "シリーズDで評価額$1.7B", detail: "$110M調達、ユニコーン化。", sourceId: "workato-series-e" },
      { year: "2021.11", label: "シリーズEで評価額$5.7B", detail: "$200M調達、累計$421M。", sourceId: "workato-series-e" },
      { year: "2021.11", label: "日本法人設立", detail: "3年間で$100M投資を表明。初代カントリーマネージャーは中川誠一氏。", sourceId: "workato-japan-establishment" },
      { year: "2023.2", label: "約85人のレイオフ", detail: "", sourceId: "workato-layoffs-2023" },
      { year: "2023.2", label: "Alan Teng氏が日本法人GM/VPに就任", detail: "APAC事業を前年比300%成長させた実績を持つ。", sourceId: "workato-japan-teng-appointment" },
      { year: "2025-2026", label: "AIエージェント基盤へ製品転換", detail: "Workato One、AIRO、Otto等を発表。", sourceId: "workato-airo-2026" },
    ],
    sourceIds: ["workato-founding", "workato-series-e", "workato-japan-establishment", "workato-japan-teng-appointment", "workato-airo-2026"],
    genbaVerdict: {
      headline: "2021年のピーク評価額$5.7Bから2025年は$1.7B程度まで下落したとの観測がある中、AIエージェント基盤への製品転換で巻き返しを図る局面。",
      body: "Workatoは2021年に$5.7Bの評価額に到達した後、2023年に約85人のレイオフを行い、2025年時点ではセカンダリー市場での評価額がピーク時の3分の1以下($1.7B程度)まで下落したとの観測がある。一方で2025〜2026年にかけては「つなげる」ことが価値だったiPaaS製品から、AIエージェントが実際に業務を実行する基盤(AIRO、Otto等)への転換を急速に進めており、評価額の逆風とプロダクト戦略の大転換が同時に起きている局面だと考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "「つなげる」から「AIエージェントが実行する」への製品転換",
        body: "2025年から顧客ニーズが「アプリ連携」から「AIエージェント活用のためのデータ活用」へシフトしているとして、2026年に複数エージェントシステム「Workato AIRO」、AIチームメイト「Otto」、MCP(Model Context Protocol)対応、DeepConverse買収など、AIエージェント関連の製品投資を急速に進めている。",
        sourceId: "workato-airo-2026",
      },
      {
        title: "日本市場での$100M/3年投資表明と、大手企業への導入実績",
        body: "2021年の日本法人設立時に3年間で$100Mの投資を表明し、データセンター開設・ISMAP認証取得・製品の日本語化を進めた。ナビタイムジャパン、日立ソリューションズ、Ridgelinez(富士通グループ)、大成建設、LIXIL、DeNA、横河電機など、SIer・大手事業会社への導入が確認できる。",
        sourceId: "workato-japan-customers",
      },
    ],
    riskHypotheses: [
      {
        title: "2021年ピークから評価額が3分の1以下まで下落した可能性",
        body: "2021年11月に$5.7Bの評価額に到達した後、2025年6月時点でセカンダリー市場では$1.7B程度まで下落したとの観測がある。非公開企業のため公式な評価額改定は確認できておらず、正確な現在の評価額は不明。",
        confidence: "中",
        evidence: ["2021年11月、シリーズEで評価額$5.7B", "2025年6月、セカンダリー市場で評価額$1.7B程度との観測"],
        counterSignal: "2025〜2026年にかけてAIエージェント関連の製品投資を積極化しており、次の資金調達ラウンドでの評価額改定が上振れる可能性も残る。",
        sourceIds: ["workato-valuation-2025"],
      },
    ],
    japanGrowth: {
      headline: "2021年設立時のカントリーマネージャーから、2023年にAPAC創業者Alan Teng氏へリーダーシップが交代。日本語情報は依然として少ない。",
      narrative: "Workato株式会社は2021年11月18日(登記は同年9月)に東京都千代田区で設立され、初代カントリーマネージャーには中川誠一氏が就任した。設立時には3年間で$100Mを投資する方針が示され、データセンター開設・ISMAP認証取得・製品の日本語化・パートナーエコシステム拡大・100名体制への拡大が計画として掲げられた。2023年2月には、Workato APAC&Japanの創業者でありシニアアドバイザーを務めていたAlan Teng氏が、日本法人のGeneral Manager 兼 Vice Presidentに就任したことが公式発表されている。Teng氏はそれ以前の3年間でAPAC事業を前年比300%成長させ、Grab・Gojek・Scootのような東南アジアの大手企業を顧客化した実績を持つ。2025年12月時点の週刊BCN+のインタビューでは、Teng氏(執行役員社長・APJ創業者)と堀和紀氏(執行役員 日本営業・パートナーシップ本部長)が登場し、2025年から顧客ニーズが「アプリ連携」から「AIエージェント活用のためのデータ活用」へシフトしていると述べている。日本の導入事例としては、ナビタイムジャパン、日立ソリューションズ、Ridgelinez(富士通グループ)、大成建設、LIXIL、DeNA、横河電機などが確認できる。OpenWorkには2026年8月時点で社員クチコミが1件も投稿されておらず、日本組織の内部情報は引き続き乏しい。",
      qualitativeSignals: [
        { label: "2021年11月設立、初代カントリーマネージャーは中川誠一氏", detail: "3年間で$100M投資を表明。", sourceId: "workato-japan-establishment" },
        { label: "2023年2月、Alan Teng氏がGM/VPに就任", detail: "APAC創業者、300%成長の実績を持つ。", sourceId: "workato-japan-teng-appointment" },
        { label: "OpenWorkの社員クチコミが2026年8月時点で0件", detail: "日本組織の内部情報は乏しい。", sourceId: "workato-japan-openwork" },
      ],
      sourceIds: ["workato-japan-establishment", "workato-japan-teng-appointment", "workato-japan-bcn-2025"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Workatoの売り方は「システム間の連携・自動化が、専門のエンジニアリングチームなしでは進められない」という課題が起点。2025年以降は、連携されたデータをAIエージェントが実際に業務実行に使えるようにする、という文脈が加わっている。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "ナビタイムジャパン・日立ソリューションズ・大成建設のような企業が、手動で残っていた業務プロセスの自動化に活用している。SIer(Ridgelinez等)がDXコンサルティングの一環として導入している点も特徴的。" },
      { title: "製品の成り立ちから見る課題", body: "WorkatoはMuleSoft等の従来型iPaaSより軽量・迅速な導入を掲げて創業した。存在理由は「専門のエンジニアリングチームがいなくても、業務部門主導でシステム連携・自動化を進められる」こと。" },
      { title: "外部環境の要求から見る課題", body: "AIエージェントが業務を代行する時代において、エージェントが実際にどのシステムのどのデータにアクセスして実行するかという「配線」の役割が重要になっており、iPaaSプレイヤーがAIエージェント基盤へ拡張する動きが業界的に進んでいる。" },
    ],
    narrative: [
      { label: "背景", body: "複数の業務システムが個別に稼働しており、部門をまたぐ業務プロセスは手作業でのデータ受け渡しに依存している。" },
      { label: "課題", body: "システム間連携をエンジニアリングチームに依頼すると、開発リソースの制約で優先順位が下がりやすく、業務部門が長期間待たされる。" },
      { label: "解決策", body: "Workatoのノーコード/ローコードiPaaSで業務部門主導の連携・自動化を進め、AIRO・Otto等のAIエージェント機能で連携先データを業務実行に活用する。" },
      { label: "選定の理由", body: "2000以上のコネクティビティ(週刊BCN+インタビューでの言及)という接続先の広さと、ナビタイムジャパン・日立ソリューションズのような日本企業での導入実績が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、部門をまたぐ業務プロセスのうち、まだ手作業でデータを受け渡している部分はどれくらいありますか。",
    valueHypothesis: "ナビタイムジャパン・日立ソリューションズ・大成建設のような企業が導入しているという開示を根拠に、一度定着すると全社の業務自動化基盤として扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "評価額が下落しているようだが、製品開発への投資は継続されるのか", reframe: "2025〜2026年にかけてAIRO・Otto・DeepConverse買収など、AIエージェント関連の製品投資はむしろ積極化している、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2013年12月", detail: "Vijay Tella氏(CEO)らが創業。", sourceIds: ["workato-founding"] },
    { label: "直近の評価額推移", value: "2021年11月$5.7B→2025年6月に$1.7B程度との観測", detail: "非公開企業のため公式改定は未確認。", sourceIds: ["workato-series-e", "workato-valuation-2025"] },
    { label: "日本法人設立", value: "2021年11月18日", detail: "初代カントリーマネージャーは中川誠一氏。3年間で$100M投資を表明。", sourceIds: ["workato-japan-establishment"] },
    { label: "現リーダーシップ", value: "Alan Teng氏(2023年2月〜、GM/VP)、堀和紀氏(日本営業・パートナーシップ本部長)", detail: "", sourceIds: ["workato-japan-teng-appointment", "workato-japan-bcn-2025"] },
  ],
  hypotheses: [
    {
      topic: "VALUATION TRAJECTORY",
      title: "2021年ピーク評価額$5.7Bから、2025年は$1.7B程度まで下落したとの観測。",
      conclusion: "2021年11月のシリーズEで$5.7Bに到達したが、2025年6月時点のセカンダリー市場では評価額が$1.7B程度まで下落したとの観測がある。非公開企業のため公式な評価額改定は確認できていない。",
      confidence: "中",
      evidence: ["2021年11月、$200MのシリーズEで評価額$5.7B", "2025年6月、セカンダリー市場で評価額$1.7B程度との観測(二次情報)"],
      counterSignals: ["セカンダリー市場の評価額は必ずしも会社の公式評価額と一致せず、次回調達時の実際の評価額は異なる可能性がある"],
      interviewQuestions: ["直近の資金調達や評価額について、社内でどのように共有されていますか"],
      sourceIds: ["workato-series-e", "workato-valuation-2025"],
    },
    {
      topic: "PRODUCT PIVOT",
      title: "iPaaS(アプリ連携)専業から、AIエージェント実行基盤への急速な製品転換。",
      conclusion: "2025年から顧客ニーズが「アプリ連携」から「AIエージェント活用のためのデータ活用」へシフトしているとして、2026年にAIRO(マルチエージェントシステム)、Otto(AIチームメイト)、MCP対応、DeepConverse買収など、立て続けにAIエージェント関連製品を投入している。",
      confidence: "高",
      evidence: ["2025年12月、日本法人幹部が『つなげる』需要から『AIエージェント活用』需要へのシフトを言及", "2026年、AIRO・Otto・DeepConverse買収を発表"],
      counterSignals: ["製品転換の速度が速く、営業組織が新しい価値提案(AIエージェント文脈)にどこまで追いついているかは未確認"],
      interviewQuestions: ["AIエージェント関連の新製品(AIRO、Otto等)は、日本の商談でどこまで提案に組み込まれていますか"],
      sourceIds: ["workato-airo-2026", "workato-japan-bcn-2025"],
    },
    {
      topic: "JAPAN LEADERSHIP TRANSITION",
      title: "設立時のカントリーマネージャーから、2023年にAPAC創業者Alan Teng氏へリーダーシップが交代。",
      conclusion: "2021年の設立時は中川誠一氏がカントリーマネージャーを務めたが、2023年2月にWorkato APAC&Japanの創業者Alan Teng氏がGM/VPとして日本法人に着任した。Teng氏はAPAC全体を前年比300%成長させた実績を持つ人物。",
      confidence: "高",
      evidence: ["2021年11月、中川誠一氏が初代カントリーマネージャーに就任", "2023年2月、Alan Teng氏がGM/VPに就任(公式発表)"],
      counterSignals: ["交代の背景・経緯は公式発表からは分からない"],
      interviewQuestions: ["2023年のリーダーシップ交代を経て、日本の事業戦略にどのような変化がありましたか"],
      sourceIds: ["workato-japan-teng-appointment"],
    },
    {
      topic: "PARTNER-LED GROWTH",
      title: "SIer(Ridgelinez、日立ソリューションズ等)経由の間接販売が、日本市場拡大の軸になっている可能性。",
      conclusion: "日本の導入事例には、大成建設・ナビタイムジャパンのような直接顧客に加え、Ridgelinez(富士通グループ)・日立ソリューションズのようなSIerが自社のDXコンサルティング・導入支援サービスの一部としてWorkatoを組み込んでいる例がある。現在募集中の求人もPartner Sales Managerであり、パートナー経由の拡大を重視している可能性がある。",
      confidence: "中",
      evidence: ["Ridgelinez・日立ソリューションズがWorkato導入・活用支援サービスを提供", "現在の東京求人がPartner Sales Manager(直販AEではない)"],
      counterSignals: ["直販AEの求人が現時点で確認できないのは、欠員がないだけの可能性もある"],
      interviewQuestions: ["パートナー経由の商談と直販の商談は、どの程度の比率になっていますか"],
      sourceIds: ["workato-japan-customers", "workato-japan-jobs-partner-sales"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "本社は評価額下落とAIエージェントへの製品転換が同時進行、日本組織は2023年のリーダーシップ交代を経て拡大途上。",
    hypothesis: {
      title: "評価額の逆風の中でも、日本市場への投資($100M/3年表明)とAPAC実績者の起用は継続されている可能性。",
      body: "本社レベルでは2021年のピークから評価額が大きく下落したとの観測がある一方、日本では2023年にAPAC全体を300%成長させた実績を持つAlan Teng氏がGM/VPとして着任しており、逆風下でも実力者を日本市場の立て直しに投入する判断があったと考えられる。",
    },
    careerValue: {
      title: "iPaaS/エンタープライズ自動化領域の専門性は、AIエージェント時代の「配線」需要とともに評価が上がりやすい。",
      body: "システム連携・業務自動化の提案経験は、隣接するRPA(UiPath等)やプロセスインテリジェンス(Celonis等)領域、あるいはAIエージェント基盤を提供する企業全般への転職でも再現性を説明しやすい。一方、評価額下落の観測や、日本の直近の採用状況(直販AEの求人が見当たらない)は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "ナビタイムジャパン", products: "Workato iPaaS", outcome: "社内に残る手動の業務プロセスの自動化を進め、年間数百時間の業務時間を削減したとされる。", implication: "日本の成長企業での導入実績。", sourceId: "workato-japan-customers" },
    { company: "日立ソリューションズ", products: "Workato iPaaS", outcome: "カスタマーサポート領域のDXと、データドリブンなCSM活動の加速に活用しているとされる。", implication: "大手SIerでの導入・活用支援実績。", sourceId: "workato-japan-customers" },
    { company: "大成建設", products: "Workato iPaaS", outcome: "レガシーシステムデータのリアルタイム活用をAPI連携で実現し、建設DXを推進しているとされる。", implication: "日本の大手建設会社での導入実績。", sourceId: "workato-japan-customers" },
  ],
  externalSignals: [
    { label: "累計調達額", value: "$421M(2021年11月時点)", detail: "9ラウンドで調達。", caveat: "非公開企業のため、それ以降の追加調達・評価額改定は確認できていない。", sourceId: "workato-series-e" },
    { label: "評価額観測(2025年6月)", value: "$1.7B程度", detail: "セカンダリー市場での観測値。", caveat: "二次情報であり、会社の公式評価額とは異なる可能性がある。", sourceId: "workato-valuation-2025" },
  ],
  roleLens: {
    salesMotion: "2026年8月時点で東京拠点の求人はPartner Sales Manager 1件のみ。既存パートナーの関係管理と新規パートナー開拓を通じて、co-market・co-sell・co-deliveryのチャネル戦略を実行する役割で、直販AEの募集は現時点で確認できない。",
    compensation: "Workato Japan固有の給与データは確認できていない。求人にOTE等の金額記載はない。OpenWorkにも2026年8月時点で口コミの投稿がない。",
    quota: "具体的なクオータ額は非公開。求人ではパートナー経由の新規獲得・アップセル機会の創出が主な成果指標として示唆されている。",
    collaboration: "堀和紀氏(執行役員 日本営業・パートナーシップ本部長)のもとでの直販・パートナーセールス体制と考えられるが、詳細な組織構造は非公開。",
  },
  leadership: {
    name: "Alan Teng",
    role: "Workato日本法人 General Manager 兼 Vice President(Workato APAC&Japan創業者)",
    read: "Workato APAC&Japanの創業者としてAPAC事業を立ち上げ、Grab・Gojek・Scootのような東南アジアの大手企業を顧客化しながら、前年比300%の成長を実現した実績を持つ。2023年2月、日本法人のGeneral Manager 兼 Vice Presidentに正式就任した。2025年12月の取材では、AIエージェント活用へのシフトを踏まえた事業戦略を語っている。",
    sourceId: "workato-japan-teng-appointment",
  },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "2023年2月に約85人のレイオフを実施した記録がある。", sourceId: "workato-layoffs-2023" },
    japanHeadcount: { value: "非公開", detail: "2021年設立時点で100名体制への拡大が計画として掲げられていたが、その後の実績数値は確認できていない。", sourceId: "workato-japan-establishment" },
    japanOffice: { value: "東京都千代田区", detail: "2021年11月設立時点の所在地。", sourceId: "workato-japan-establishment" },
    japanSince: { value: "2021年11月18日(登記は同年9月)", detail: "3年間で$100M投資を表明。", sourceId: "workato-japan-establishment" },
  },
  salesAppeal: {
    intro: "本社は評価額下落とAIエージェントへの製品転換が同時進行する変化の大きい局面にあり、日本組織はAPAC実績者Alan Teng氏のもとで立て直しを進めている環境。",
    points: [
      { title: "ナビタイムジャパン・日立ソリューションズ・大成建設クラスの導入事例を語れる", detail: "日本の成長企業・大手SIer・大手建設会社への導入実績を、商談の参照材料として使える。", sourceIds: ["workato-japan-customers"] },
      { title: "APAC実績者Alan Teng氏のもとでの事業立て直しに関われる", detail: "300%成長の実績を持つリーダーのもとで、日本市場の拡大局面に関わることができる。", sourceIds: ["workato-japan-teng-appointment"] },
      { title: "iPaaSからAIエージェント実行基盤への製品転換期に関われる", detail: "AIRO・Otto等の新製品を、日本の商談へ最初期から組み込んでいく経験を積める。", sourceIds: ["workato-airo-2026"] },
      { title: "SIer(Ridgelinez、日立ソリューションズ等)とのパートナー経由の大型商談機会", detail: "現在募集中のPartner Sales Managerのように、間接販売網の構築に関わる機会がある。", sourceIds: ["workato-japan-jobs-partner-sales"] },
    ],
  },
  interviewPrep: {
    intro: "評価額下落の観測とAIエージェントへの製品転換が重なる局面だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2025年のセカンダリー市場での評価額下落観測について、社内ではどのように受け止められていますか。", why: "本社の評価額動向が、日本の事業投資方針にどう影響しているかを確認したい。", sourceIds: ["workato-valuation-2025"] },
      { question: "AIRO・Ottoのような新しいAIエージェント製品は、日本の商談でどこまで提案に組み込まれていますか。", why: "製品転換の速度に、現場の営業がどこまで追いついているかを確認したい。", sourceIds: ["workato-airo-2026"] },
      { question: "2023年のAlan Teng氏の着任以降、日本の事業戦略にどのような変化がありましたか。", why: "リーダーシップ交代の実際の影響を確認したい。", sourceIds: ["workato-japan-teng-appointment"] },
      { question: "直販とパートナー経由(Ridgelinez、日立ソリューションズ等)の商談は、どの程度の比率になっていますか。", why: "現在の求人がPartner Sales Managerであることから、間接販売の比重を確認したい。", sourceIds: ["workato-japan-jobs-partner-sales"] },
    ],
  },
  solutions: [
    {
      name: "Workato Enterprise Automation Platform(iPaaS)",
      valueProp: "ノーコード/ローコードで業務システム間の連携・自動化を実現するエンタープライズiPaaS。2000以上のコネクティビティを持つとされる。",
      url: "https://www.workato.com/",
      competitors: "Boomi、Informatica、MuleSoft、Tray.io、Zapier(軽量領域)等。",
      differentiation: "MuleSoftのような従来型iPaaSより軽量・迅速な導入を掲げ、業務部門主導での活用を訴求している。",
      retention: "日本固有の継続率データは非公開。",
    },
    {
      name: "Workato AIRO / Otto(AIエージェント基盤)",
      valueProp: "連携されたシステム・データをもとに、AIエージェントが実際の業務実行を担うマルチエージェント基盤。",
      url: "https://www.workato.com/the-connector/agentic-orchestration-future/",
      competitors: "他のエンタープライズAIエージェント基盤全般が競合。",
      differentiation: "2026年発表の新しい製品群で、既存の2000以上のコネクティビティを土台にしている点が特徴。",
      retention: "2026年発表の新機能のため、継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://workato.jp/japan-customer-story/",
  fitTags: [
    "iPaaS/エンタープライズ自動化領域を極めたい",
    "ナビタイムジャパン・日立ソリューションズクラスの導入事例を武器にしたい",
    "APAC実績者Alan Teng氏のもとでの事業立て直しに関わりたい",
    "iPaaSからAIエージェント実行基盤への製品転換期に関わりたい",
    "SIer経由のパートナーセールスに関わりたい",
    "評価額の逆風など、変化の大きい環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "AIエージェント製品の立ち上げ期に関わりたい",
  ],
  comparisonMap: [
    { arena: "iPaaS/業務自動化", companies: ["Workato", "UiPath", "Celonis"], why: "業務プロセスの自動化・可視化予算の比較(iPaaS起点かRPA起点かプロセスマイニング起点か)" },
  ],
  sources: workatoSources,
};

const mondayDotComSources: ResearchSource[] = [
  {
    id: "monday-founding",
    label: "Taskade Blog「What is Monday.com? History of dapulse, Work OS, IPO」",
    url: "https://www.taskade.com/blog/monday-com-history",
    kind: "外部集計",
    scope: "2010年、Wix.com社内ツール「daPulse」として着想。2012年2月、Roy Mann氏・Eran Zinman氏がスピンオフ創業",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-series-c-rebrand",
    label: "Forbes等の集計(Series C・改称関連)",
    url: "https://www.taskade.com/blog/monday-com-history",
    kind: "外部集計",
    scope: "2019年7月、$150MのシリーズCで評価額$1.9B。同時期にdaPulseからmonday.comへ改称",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-ipo",
    label: "Wikipedia「Monday.com」",
    url: "https://en.wikipedia.org/wiki/Monday.com",
    kind: "外部集計",
    scope: "2021年6月10日、Nasdaq上場(ティッカーMNDY)",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-fy2025-results",
    label: "monday.com公式IR「Fourth Quarter and Fiscal Year 2025 Results」",
    url: "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-Fourth-Quarter-and-Fiscal-Year-2025-Results/default.aspx",
    kind: "企業公式",
    scope: "2025年通期売上高$1,232M(初の10億ドル超え、前年比+27%)、GAAP純利益$118.7M",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-q1-2026-results",
    label: "monday.com公式IR「First Quarter 2026 Results」",
    url: "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-First-Quarter-2026-Results/default.aspx",
    kind: "企業公式",
    scope: "2026年Q1売上高$351M(前年比+24%)。ARR5万ドル超の有償顧客数4,547社(前年同期3,444社から+32%)。FY2026通期ガイダンス中央値$1.47B",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-japan-launch",
    label: "monday.com公式プレスリリース(BusinessWire)「Expands Its Asia Pacific and Japan Presence」",
    url: "https://www.businesswire.com/news/home/20221011006091/en/monday.com-Expands-Its-Asia-Pacific-and-Japan-Presence-with-Local-Tokyo-Team-and-Channel-Partner-Growth",
    kind: "企業公式",
    scope: "2022年10月11日発表。東京・丸の内オフィスでの日本本格参入。日本カントリーマネージャーは渡邉興司氏、APAC担当リージョナルVPはDean Swan氏",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-japan-weeklybcn-2022",
    label: "週刊BCN+「monday.comが国内市場に本格参入、パートナーを主軸にビジネスを展開」",
    url: "https://www.weeklybcn.com/journal/news/detail/20221013_194287.html",
    kind: "外部集計",
    scope: "2022年10月、日本参入時点でパートナー主軸の事業展開方針が語られている",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-japan-iwase-interview",
    label: "オプロ公式メディア「change」インタビュー(monday.com岩瀬義裕氏)",
    url: "https://www.opro.net/service/formdx/change/interview/mondaycom.html",
    kind: "企業公式",
    scope: "2023年10月10日掲載。monday.com株式会社カントリーマネージャー兼ストラテジックアライアンス担当の岩瀬義裕氏へのインタビュー。パートナービジネスの重要性と日本の商習慣に寄り添う機能の必要性を言及",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-japan-careers-live",
    label: "monday.com公式採用ページ(全求人一覧)",
    url: "https://monday.com/careers",
    kind: "企業公式",
    scope: "2026年8月10日時点、Tokyo, Japanの募集数は0件(全23求人・10拠点中)",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-japan-customers",
    label: "monday.com公式(日本語)顧客事例ページ",
    url: "https://monday.com/lang/ja/customers/lixil",
    kind: "企業公式",
    scope: "日本の導入企業事例。LIXIL、日立ソリューションズ(販売パートナーでもある)、カバー株式会社、スマートキャンプ、ソニービズネットワークス等",
    checkedAt: "2026-08-10",
  },
  {
    id: "monday-competitors",
    label: "外部比較記事(Asana/ClickUp/Smartsheet等との比較)",
    url: "https://trackingtime.co/project-management-software/asana-vs-monday-vs-clickup.html",
    kind: "外部集計",
    scope: "ワークマネジメント領域の主要競合はAsana・ClickUp・Smartsheet・Wrike・Notion等",
    checkedAt: "2026-08-10",
  },
];

const mondayDotComIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "monday.comは、企業のプロジェクト、営業、IT、人事などの部門が、業務の進捗と責任を一つの画面で管理するためのWork OS。「部門ごとにツールや表計算が分かれている」「誰が何を進めているか見えない」「現場に合わないシステムが定着しない」といった課題を解決する。個人やチームの使いやすさを入口に、プロジェクト管理からCRM、ITサービス管理、全社標準へ利用範囲を広げられる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "MNDY",
    exchange: "Nasdaq",
    listedSince: "2021年6月10日",
    stockLinkUrl: "https://ir.monday.com/",
    growthSummary: "2010年、イスラエルのSaaS企業Wix.com社内で、急成長にともなうコミュニケーション・透明性の課題に対応するため開発された社内ツール「daPulse」がルーツ。2012年2月、Roy Mann氏・Eran Zinman氏がWixからスピンオフする形で創業し、Wixが最初の顧客となった。2016年にシリーズA($7.6M)、2017年にシリーズB($25M)、2019年7月にシリーズC($150M、評価額$1.9B)を調達し、この時期にdaPulseからmonday.comへ改称した。2021年6月10日、Nasdaqへ上場(ティッカーMNDY)。上場後も高成長を続け、2025年通期売上高は$1,232M(前年比+27%)と初めて10億ドルを突破し、GAAP純利益$118.7Mを計上した。2026年第1四半期も売上高$351M(前年比+24%)、ARR5万ドル超の有償顧客数4,547社(前年同期比+32%)と、公開企業としては珍しく高成長と黒字化を両立させている。",
    milestones: [
      { year: "2010", label: "Wix社内ツール「daPulse」として着想", detail: "", sourceId: "monday-founding" },
      { year: "2012.2", label: "Roy Mann氏・Eran Zinman氏がスピンオフ創業", detail: "Wixが最初の顧客に。", sourceId: "monday-founding" },
      { year: "2019.7", label: "シリーズC $150M、評価額$1.9Bで「monday.com」に改称", detail: "", sourceId: "monday-series-c-rebrand" },
      { year: "2021.6", label: "Nasdaq上場(ティッカーMNDY)", detail: "", sourceId: "monday-ipo" },
      { year: "2022.10", label: "日本法人設立・本格参入", detail: "丸の内オフィス。カントリーマネージャーは渡邉興司氏。", sourceId: "monday-japan-launch" },
      { year: "2025", label: "通期売上高が初めて$1Bを突破", detail: "$1,232M、前年比+27%、GAAP黒字。", sourceId: "monday-fy2025-results" },
    ],
    sourceIds: ["monday-founding", "monday-series-c-rebrand", "monday-ipo", "monday-fy2025-results", "monday-japan-launch"],
    genbaVerdict: {
      headline: "公開企業として高成長と黒字化を両立させる一方、日本組織は2022年参入から短期間で少なくとも1度、公式に確認できるリーダーシップ交代を経ている。",
      body: "monday.comは2025年に売上高が初めて$1Bを突破し、2026年第1四半期も+24%成長・黒字を維持するなど、公開企業としては珍しい高成長と収益性の両立を実現している。一方で日本組織は、2022年10月の本格参入時にカントリーマネージャーを務めた渡邉興司氏から、2023年10月の公式インタビュー時点では岩瀬義裕氏へと、1年程度でリーダーシップが交代したことが確認できる。本社の勢いに対して、日本組織はまだ体制が固まりきっていない可能性がある、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "monday CRM・monday service・monday devなど、Work OS上でのマルチプロダクト展開",
        body: "プロジェクト管理を起点に、CRM・ITサービス管理(ESM)・開発ワークフローなど複数の業務領域へプロダクトラインを拡張しており、既存顧客へのクロスセルが成長ドライバーの一つになっていると考えられる。",
        sourceId: "monday-fy2025-results",
      },
      {
        title: "ARR5万ドル超の大口顧客が前年比+32%で拡大",
        body: "2026年第1四半期時点でARR5万ドル超の有償顧客数が4,547社(前年同期3,444社)に拡大しており、中小企業中心だった顧客基盤がエンタープライズ層へシフトしていることを示している。",
        sourceId: "monday-q1-2026-results",
      },
    ],
    riskHypotheses: [
      {
        title: "日本組織のカントリーマネージャーが短期間で交代した可能性",
        body: "2022年10月の本格参入時に渡邉興司氏がカントリーマネージャーとして紹介されたが、2023年10月の公式インタビューでは岩瀬義裕氏がカントリーマネージャー兼ストラテジックアライアンス担当として登場している。約1年での交代である可能性があるが、詳細な経緯は公式発表からは確認できない。",
        confidence: "中",
        evidence: ["2022年10月、渡邉興司氏がカントリーマネージャーとして紹介", "2023年10月、岩瀬義裕氏がカントリーマネージャー兼ストラテジックアライアンス担当として公式インタビューに登場"],
        counterSignal: "役職名が「カントリーマネージャー」から「カントリーマネージャー兼ストラテジックアライアンス担当」に変わっており、単純な後任ではなく役割拡張・体制変更の可能性もある。",
        sourceIds: ["monday-japan-launch", "monday-japan-iwase-interview"],
      },
    ],
    japanGrowth: {
      headline: "2022年10月にパートナー主軸で本格参入。2026年8月時点で東京拠点の求人は0件、直近の採用状況は静かな局面。",
      narrative: "monday.comは2022年10月11日、東京・丸の内にオフィスを構え、日本市場への本格参入を発表した。発表時点のカントリーマネージャーは渡邉興司氏で、APAC担当リージョナルVPのDean Swan氏と共にアンダーズ東京でのプレスイベントに登壇した。週刊BCN+の報道では、参入当初からパートナーを主軸にした事業展開方針が語られている。2023年10月10日には、オプロ運営の企業メディア「change」のインタビューに、カントリーマネージャー兼ストラテジックアライアンス担当の岩瀬義裕氏が登場し、「パートナービジネスが重要」「日本独自の商習慣に寄り添えるソリューションが必要」と述べている。日本の導入事例としては、LIXIL、日立ソリューションズ(自社導入と同時に販売パートナーでもある)、カバー株式会社(VTuber事業のCOVER)、スマートキャンプ、ソニービズネットワークスなどが確認できる。一方、2026年8月10日時点で公式採用ページを直接確認したところ、全23求人・10拠点の中でTokyo, Japanの募集数は0件だった。本社が高成長を続ける一方、日本の採用活動は現在静かな局面にあると考えられる。",
      qualitativeSignals: [
        { label: "2022年10月、丸の内オフィスで本格参入", detail: "カントリーマネージャーは渡邉興司氏(当時)。", sourceId: "monday-japan-launch" },
        { label: "2023年10月、カントリーマネージャーが岩瀬義裕氏として公式インタビューに登場", detail: "パートナービジネス重視の方針を明言。", sourceId: "monday-japan-iwase-interview" },
        { label: "2026年8月時点、東京拠点の求人は0件", detail: "全23求人・10拠点中。", sourceId: "monday-japan-careers-live" },
      ],
      sourceIds: ["monday-japan-launch", "monday-japan-iwase-interview", "monday-japan-careers-live"],
    },
  },
  sellingPlaybook: {
    frameIntro: "monday.comの売り方は「部門ごとにバラバラなツールでタスク・プロジェクトを管理しており、全社横断の可視化ができていない」という課題が起点。プロジェクト管理から始まり、CRM・ITサービス管理等へ業務範囲を広げていく「Work OS」としての提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "カバー株式会社(急成長するVTuber事業部門)やスマートキャンプのような成長企業が、直感的なUIと高いカスタマイズ性を理由に導入している。LIXIL・日立ソリューションズのような大手企業でも、誰もが使えるツールとしての採用が確認できる。" },
      { title: "製品の成り立ちから見る課題", body: "monday.comは、Wix社内の急成長にともなうコミュニケーション課題を解決するために生まれた。存在理由は「専門知識がなくても、チームが自分たちの業務に合わせてツールを作れる」こと。" },
      { title: "外部環境の要求から見る課題", body: "ノーコード/ローコードでの業務ツール作成需要が高まる中、monday.comはプロジェクト管理だけでなくCRM・ITサービス管理まで領域を広げ、単一プラットフォームでの全社導入を狙っている。" },
    ],
    narrative: [
      { label: "背景", body: "部門ごとに異なるツール(Excel、Trello、専用システム等)でタスク・プロジェクトを管理しており、全社横断での進捗把握ができていない。" },
      { label: "課題", body: "ツールが分散しているため、部門をまたぐプロジェクトの状況確認に時間がかかり、意思決定が遅れる。" },
      { label: "解決策", body: "monday.comのWork OS上で、プロジェクト管理・CRM・ITサービス管理等を統合し、全社で共通の可視化基盤を作る。" },
      { label: "選定の理由", body: "直感的なUIとカスタマイズ性、LIXIL・日立ソリューションズのような大手企業を含む導入実績、2025年に売上高10億ドルを突破した公開企業としての信頼性が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、部門ごとに使っているツールが違うことで、全社横断のプロジェクト状況を把握しづらくなっていませんか。",
    valueHypothesis: "LIXIL・日立ソリューションズのような大手企業が導入しているという開示を根拠に、一度定着すると複数部門・複数プロダクト(CRM、ITサービス管理等)へ横展開されやすい、という価値仮説を立てる。",
    commonObjection: { objection: "日本語対応が不十分という声を聞いたことがあるが、実務で問題にならないか", reframe: "2021年に日本語プラットフォームの展開が始まっており、岩瀬氏(2023年インタビュー)も日本の商習慣に寄り添う機能の必要性に言及している。継続的な改善が進んでいる領域として再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2012年2月", detail: "Roy Mann氏・Eran Zinman氏がWixからスピンオフ創業。", sourceIds: ["monday-founding"] },
    { label: "上場", value: "2021年6月10日、Nasdaq(MNDY)", detail: "", sourceIds: ["monday-ipo"] },
    { label: "2025年通期売上高", value: "$1,232M(前年比+27%)", detail: "初めて10億ドルを突破、GAAP純利益$118.7M。", sourceIds: ["monday-fy2025-results"] },
    { label: "日本法人設立", value: "2022年10月11日", detail: "東京・丸の内オフィス。初代カントリーマネージャーは渡邉興司氏。", sourceIds: ["monday-japan-launch"] },
  ],
  hypotheses: [
    {
      topic: "PUBLIC COMPANY GROWTH",
      title: "公開企業として、高成長(+24〜27%)と黒字化を両立させている。",
      conclusion: "2025年通期売上高$1,232M(前年比+27%、初の10億ドル突破)、2026年第1四半期売上高$351M(前年比+24%)と高成長を維持しながら、GAAP純利益・営業キャッシュフローともに黒字を確保している。",
      confidence: "高",
      evidence: ["2025年通期売上高$1,232M、GAAP純利益$118.7M", "2026年Q1売上高$351M(+24%)、ARR5万ドル超顧客数+32%"],
      counterSignals: ["日本を含む地域別の売上高・成長率の開示はなく、日本固有の業績は非公開"],
      interviewQuestions: ["日本市場の成長率は、グローバル平均(+24%前後)と比べてどう評価されていますか"],
      sourceIds: ["monday-fy2025-results", "monday-q1-2026-results"],
    },
    {
      topic: "JAPAN LEADERSHIP CHANGE",
      title: "2022年参入から約1年で、カントリーマネージャーが交代した可能性。",
      conclusion: "2022年10月の本格参入発表では渡邉興司氏がカントリーマネージャーとして紹介されたが、2023年10月の公式インタビューでは岩瀬義裕氏がカントリーマネージャー兼ストラテジックアライアンス担当として登場している。",
      confidence: "中",
      evidence: ["2022年10月、渡邉興司氏がカントリーマネージャーとして公式発表に登場", "2023年10月、岩瀬義裕氏がカントリーマネージャーとして公式インタビューに登場"],
      counterSignals: ["役職名の変化(カントリーマネージャー→カントリーマネージャー兼ストラテジックアライアンス担当)から、単純な交代ではなく体制変更の可能性もある"],
      interviewQuestions: ["日本参入から数年で、事業戦略やチーム体制にどのような変化がありましたか"],
      sourceIds: ["monday-japan-launch", "monday-japan-iwase-interview"],
    },
    {
      topic: "HIRING PAUSE",
      title: "2026年8月時点、東京拠点の求人が0件という静かな採用局面。",
      conclusion: "公式採用ページを直接確認したところ、2026年8月10日時点で全23求人・10拠点の中にTokyo, Japanの募集は含まれていなかった。本社が高成長を続ける一方、日本の新規採用は一時的に止まっている可能性がある。",
      confidence: "中",
      evidence: ["2026年8月10日、公式採用ページでTokyo, Japanの募集数が0件"],
      counterSignals: ["欠員が出ていないだけで、既存チームでの運営が順調な可能性もある。今後の求人再開時期は不明"],
      interviewQuestions: ["直近1年ほど東京拠点の採用が止まっているように見えるが、今後の採用計画はどうなっていますか"],
      sourceIds: ["monday-japan-careers-live"],
    },
    {
      topic: "PARTNER-LED EXPANSION",
      title: "日立ソリューションズのような大手SIerが、導入企業でありパートナーでもある二重の関係を持つ。",
      conclusion: "日本参入当初からパートナーを主軸にした事業展開が明言されており、日立ソリューションズは自社でmonday.comを導入すると同時に、他社への導入・活用支援サービスも提供するパートナーになっている。",
      confidence: "中",
      evidence: ["2022年参入時からパートナー主軸の方針が語られている", "日立ソリューションズが導入企業兼販売パートナー"],
      counterSignals: ["パートナー経由の売上が全体に占める比率は公開情報からは分からない"],
      interviewQuestions: ["パートナー経由の商談と直販の商談は、どの程度の比率になっていますか"],
      sourceIds: ["monday-japan-launch", "monday-japan-customers"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "本社は公開企業として高成長・黒字化を両立、日本組織はリーダーシップ交代と採用の一時停止が重なる静かな局面。",
    hypothesis: {
      title: "本社の勢いに対して、日本組織はまだ体制構築の途上にある可能性。",
      body: "2025年に売上高10億ドルを突破するなど本社は好調な一方、日本組織は2022年参入からリーダーシップが少なくとも1度交代しており、2026年8月時点で東京拠点の求人も0件という状況から、日本市場での体制が完全に固まりきっていない可能性がある。",
    },
    careerValue: {
      title: "ワークマネジメント領域の専門性は、SaaS全般の業務効率化文脈で評価されやすい。",
      body: "プロジェクト管理・業務可視化の提案経験は、Asana・ClickUp・Smartsheetのような直接競合や、隣接するCRM・ITSM領域への転職でも再現性を説明しやすい。一方、日本組織の採用が一時的に静かになっている理由は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "LIXIL", products: "monday.com Work OS", outcome: "誰もが平等に使えるツールとしてExcelの代替に導入。アカウントを持たない相手にもエクスポートでデータ共有ができる点が評価されている。", implication: "日本の大手製造業での導入実績。", sourceId: "monday-japan-customers" },
    { company: "日立ソリューションズ", products: "monday.com Work OS", outcome: "自社の課題解決のために導入すると同時に、販売パートナーとしても事業を展開している。", implication: "大手SIerでの導入・パートナーシップの両立事例。", sourceId: "monday-japan-customers" },
    { company: "カバー株式会社", products: "monday.com Work OS", outcome: "2年で約100人規模に成長したメタバース事業部門が、社内で最初にタスク管理として導入。", implication: "急成長する日本のデジタルエンタテインメント企業での導入実績。", sourceId: "monday-japan-customers" },
  ],
  externalSignals: [
    { label: "2025年通期売上高", value: "$1,232M(前年比+27%)", detail: "初めて10億ドルを突破。", caveat: "日本固有の売上高・成長率は開示されていない。", sourceId: "monday-fy2025-results" },
    { label: "ARR5万ドル超の有償顧客数", value: "4,547社(2026年3月末時点、前年同期比+32%)", detail: "グローバル全体の数値。", caveat: "日本固有の大口顧客数は非公開。", sourceId: "monday-q1-2026-results" },
  ],
  roleLens: {
    salesMotion: "2026年8月10日時点、公式採用ページを直接確認したところ、東京拠点の営業求人は0件だった(全23求人・10拠点中)。過去の求人ではEnterprise Account Executive等の募集歴があるが、現在は募集が止まっている。",
    compensation: "monday.com Japan固有の給与データは確認できていない。募集再開時の条件は不明。",
    quota: "非公開。",
    collaboration: "2023年時点のインタビューでは、カントリーマネージャー兼ストラテジックアライアンス担当のもとでパートナー主軸の事業展開が語られている。直近の組織体制は公式情報からは確認できない。",
  },
  leadership: {
    name: "岩瀬 義裕",
    role: "monday.com株式会社 カントリーマネージャー 兼 ストラテジックアライアンス担当(2023年10月時点)",
    read: "2023年10月10日、オプロ運営の企業メディア「change」のインタビューに、カントリーマネージャー兼ストラテジックアライアンス担当として登場。「パートナービジネスが重要」「業務効率化だけでなく、その後の価値創造のプロセスを支えるプラットフォームとして貢献したい」と述べ、パートナー主軸の事業展開方針と、日本の商習慣に寄り添う機能開発の必要性を強調している。2022年10月の参入発表時のカントリーマネージャーは渡邉興司氏で、その後の交代時期・経緯は公式発表からは確認できない。2026年時点の日本代表については、公式発表・インタビューでの確認ができていない。",
    sourceId: "monday-japan-iwase-interview",
  },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "公開企業だが、直近の正確な全社員数の開示は確認できていない。", sourceId: "monday-fy2025-results" },
    japanHeadcount: { value: "非公開", detail: "2022年参入時点の具体的な人数は確認できていない。", sourceId: "monday-japan-launch" },
    japanOffice: { value: "東京都千代田区丸の内", detail: "2022年10月時点のオフィス所在地。", sourceId: "monday-japan-launch" },
    japanSince: { value: "2022年10月11日", detail: "丸の内オフィスでの本格参入発表。", sourceId: "monday-japan-launch" },
  },
  salesAppeal: {
    intro: "本社は公開企業として売上高10億ドル突破・黒字化を達成した好調な環境である一方、日本組織はリーダーシップ交代を経て、採用が一時的に静かになっている過渡期。",
    points: [
      { title: "LIXIL・日立ソリューションズクラスの大手導入事例を語れる", detail: "大手製造業・SIerへの導入実績を、商談の参照材料として使える。", sourceIds: ["monday-japan-customers"] },
      { title: "公開企業として財務が透明で、成長を数字で語れる", detail: "2025年に売上高10億ドル突破という、社外に説明しやすい成長実績を持つ。", sourceIds: ["monday-fy2025-results"] },
      { title: "プロジェクト管理からCRM・ITSMへ広がるマルチプロダクト提案経験を積める", detail: "単一製品の営業にとどまらない、Work OS全体の提案スキルを磨ける。", sourceIds: ["monday-q1-2026-results"] },
      { title: "日本組織の体制構築期に、初期メンバーとして関われる可能性", detail: "採用再開のタイミングで入社すれば、体制が固まりきっていない組織を自ら作っていく経験を積める。", sourceIds: ["monday-japan-careers-live"] },
    ],
  },
  interviewPrep: {
    intro: "日本組織のリーダーシップ交代と採用の一時停止という状況を踏まえ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2022年の参入から現在まで、日本のカントリーマネージャー・組織体制はどう変化してきましたか。", why: "公式発表・インタビューの間で名前が変わっている点を確認したい。", sourceIds: ["monday-japan-launch", "monday-japan-iwase-interview"] },
      { question: "東京拠点の求人が現在確認できませんが、今後の採用計画はどうなっていますか。", why: "採用が一時的に止まっている理由と再開時期を確認したい。", sourceIds: ["monday-japan-careers-live"] },
      { question: "日本市場の成長率は、グローバル平均(直近+24%前後)と比べてどう評価されていますか。", why: "地域別業績が非公開のため、実際の温度感を確認したい。", sourceIds: ["monday-q1-2026-results"] },
      { question: "日立ソリューションズのようなパートナー経由の商談と、直販の商談はどの程度の比率ですか。", why: "パートナー主軸の方針が、実際の営業活動にどう反映されているかを確認したい。", sourceIds: ["monday-japan-customers"] },
    ],
  },
  solutions: [
    {
      name: "monday Work Management",
      valueProp: "ノーコードでカスタマイズ可能なプロジェクト・タスク管理プラットフォーム。部門横断の可視化を実現するWork OSの中核製品。",
      url: "https://monday.com/lang/ja",
      competitors: "Asana、ClickUp、Smartsheet、Wrike、Notion等。",
      differentiation: "直感的なUIと高いカスタマイズ性、モバイルアプリの完成度が評価されているとされる。",
      retention: "日本固有の継続率データは非公開。",
    },
    {
      name: "monday CRM / monday service",
      valueProp: "プロジェクト管理の基盤の上に、営業管理(CRM)やIT/HRサービス管理(ESM)まで業務範囲を広げた製品ライン。",
      url: "https://monday.com/lang/ja",
      competitors: "Salesforce、HubSpot(CRM領域)、ServiceNow(ITSM領域)等、隣接領域の製品と一部競合。",
      differentiation: "単一のWork OS上で複数業務領域をカバーする点が、単機能ツールとの違いとして訴求されている。",
      retention: "日本固有の継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://monday.com/lang/ja/customers",
  fitTags: [
    "ワークマネジメント領域を極めたい",
    "LIXIL・日立ソリューションズクラスの大手導入事例を武器にしたい",
    "公開企業の透明な財務データを背景に商談したい",
    "プロジェクト管理からCRM・ITSMへ広がるマルチプロダクト提案経験を積みたい",
    "日本組織の体制構築期に初期メンバーとして関わりたい",
    "パートナー経由の間接販売にも関わりたい",
    "外資特有の実力主義に挑戦したい",
    "高成長・黒字化を両立する公開企業で働きたい",
  ],
  comparisonMap: [
    { arena: "ワークマネジメント/プロジェクト管理", companies: ["monday.com", "Asana", "Smartsheet"], why: "業務可視化・プロジェクト管理予算の比較" },
  ],
  sources: mondayDotComSources,
};

const miroSources: ResearchSource[] = [
  {
    id: "miro-founding",
    label: "Wikipedia「Miro (collaboration platform)」",
    url: "https://en.wikipedia.org/wiki/Miro_(collaboration_platform)",
    kind: "外部集計",
    scope: "2011年、Andrey Khusid氏・Oleg Shardin氏が創業(当初はRealtimeBoard)",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-series-c",
    label: "TechCrunch「Visual collaboration company Miro valued at $17.5B following $400M in new funding」",
    url: "https://techcrunch.com/2022/01/05/visual-collaboration-company-miro-valued-at-17-5b-following-400m-in-new-funding/",
    kind: "外部集計",
    scope: "2022年1月、$400MのシリーズCで評価額$17.5B。累計調達額$476.3M",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-layoffs-2024",
    label: "Tech Startups「Miro...cuts 18% of its workforce amid competitive pressures」",
    url: "https://techstartups.com/2024/11/04/miro-a-unicorn-startup-once-valued-at-17-5-billion-cuts-18-of-its-workforce-amid-competitive-pressures/",
    kind: "外部集計",
    scope: "2024年11月、全社員の18%を削減。CEO Andrey Khusid氏が「組織が複雑になりすぎ、階層が多く、役割の重複がある」とコメント。2023年にも一桁台後半%の削減を実施済み",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-ipo-2026",
    label: "MEXC Blog「Miro IPO 2026: Valuation, Competitors & How To Invest」",
    url: "https://blog.mexc.com/finance/miro-ipo-2026-valuation-competitors-how-to-invest/",
    kind: "外部集計",
    scope: "2026年半ば時点、S-1未提出・引受幹事未定で非公開のまま。IPOは市場の注目事項だが確定予定ではない",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-aboutus",
    label: "Miro公式「会社概要」(日本語)",
    url: "https://miro.com/ja/blog/aboutus/",
    kind: "企業公式",
    scope: "ミロ・ジャパン合同会社、2021年7月設立、資本金300万円、代表執行役社長 向山泰貴",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-launch-cloudwatch",
    label: "クラウド Watch「オンラインホワイトボードプラットフォームのミロが日本で始動」",
    url: "https://cloud.watch.impress.co.jp/docs/news/1367263.html",
    kind: "外部集計",
    scope: "2021年11月の日本参入発表。3年でユーザー数10倍、TOPIX100の95%を含む1万社獲得、100名超の採用を目標として掲げる",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-ui-launch",
    label: "ダイヤモンド・シグナル「Miro日本語版を正式リリース」",
    url: "https://signal.diamond.jp/articles/-/1253",
    kind: "外部集計",
    scope: "2022年6月13日、日本語UIを正式リリース",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-igarashi-dropbox",
    label: "Dropbox公式プレスリリース「五十嵐光喜の日本法人社長就任を正式発表」",
    url: "https://navi.dropbox.jp/dropbox_2017_05_25_news_release",
    kind: "企業公式",
    scope: "2017年5月、五十嵐光喜氏がDropbox Japan社長に就任(Miro Japan初代社長就任前の経歴)。Apple Japan・Microsoft Japanでの経験を持つ",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-mukoyama-appointment",
    label: "Miro公式(日本語)「ミロ・ジャパンの代表執行役社長に、向山泰貴が就任」",
    url: "https://mirojapan.com/miro-country-manager-mukoyama/",
    kind: "企業公式",
    scope: "2024年7月10日発表、同年7月1日付で向山泰貴氏が代表執行役社長に就任。前職Doorkel COO、セールスフォース・ジャパンで10年以上(グローバル統括責任者・エンタープライズセールス部長等)、日本NCR・日本テラデータでの経験も持つ",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-jobs-strategic-ae",
    label: "Miro Careers「Strategic Account Executive - Tokyo」",
    url: "https://miro.com/careers/vacancy/8460222002/",
    kind: "企業公式",
    scope: "東京拠点、Fortune 500/Global 2000クラスの戦略アカウントを担当する求人票(JR001757)",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-openwork",
    label: "OpenWork「ミロ・ジャパン合同会社」",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x00000XWdOw",
    kind: "コミュニティ",
    scope: "回答者3件、総合評価2.81。月間残業38.3時間、有休消化率74.4%",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-japan-customers",
    label: "各種導入事例(三菱電機・NTTドコモグループ・図研等)",
    url: "https://aslead.nri.co.jp/products/miro/case/miro-mitsubishi-electric-2.html",
    kind: "外部集計",
    scope: "三菱電機(技術ワーキング)、NTTドコモグループ(Miro AI活用)、図研(設計データのブレインストーミング)",
    checkedAt: "2026-08-10",
  },
  {
    id: "miro-competitors",
    label: "業界比較記事(Figma/Lucidchart/Mural等)",
    url: "https://rivalsense.co/intel/miro/",
    kind: "外部集計",
    scope: "主要競合はFigma(2025年後半IPO準備中と報道)、Lucid/Lucidchart、Mural",
    checkedAt: "2026-08-10",
  },
];

const miroIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Miroは、分散したプロダクト、開発、デザイン、事業部門が、アイデアや複雑な議論を同じキャンバス上で可視化し、意思決定するためのコラボレーション基盤。「会議で議論が発散し結論が残らない」「部門間で仕様や背景を共有できない」「リモート環境で創造的な共同作業が進まない」といった課題を解決する。ホワイトボード利用を入口に、企画、設計、技術検討、ワークショップなど企業のイノベーションプロセス全体へ展開できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2011年、Andrey Khusid氏・Oleg Shardin氏が「RealtimeBoard」として創業し、後にMiroへ改称。オンラインホワイトボード・ビジュアルコラボレーションのカテゴリーを切り拓き、2022年1月には$400MのシリーズCで評価額$17.5Bに到達した(累計調達額$476.3M)。しかしその後、2023年に一桁台後半%の人員削減、2024年11月には全社員の18%を削減するという大規模なレイオフを実施しており、CEO Andrey Khusid氏は「組織が複雑になりすぎ、階層が多く、役割の重複がある」と述べている。2026年半ば時点でIPOのS-1提出や引受幹事の決定はなく、非公開のまま推移している。主要競合のFigmaが2025年後半に上場準備を進めていると報じられる中、Miro自身は組織のスリム化を優先している局面にあると考えられる。",
    ipoOutlookSummary: "2026年半ば時点でS-1未提出・引受幹事未定であり、具体的なIPO時期の公式言及は確認できていない。競合Figmaの上場準備が進む一方、Miroは2023〜2024年にかけて大規模なレイオフによる組織再編を優先しており、IPOは「注目される可能性」にとどまり確定した予定ではない。",
    milestones: [
      { year: "2011", label: "RealtimeBoardとして創業", detail: "Andrey Khusid氏・Oleg Shardin氏が創業、後にMiroへ改称。", sourceId: "miro-founding" },
      { year: "2022.1", label: "シリーズC $400M、評価額$17.5B", detail: "累計調達額$476.3M。", sourceId: "miro-series-c" },
      { year: "2021.7", label: "日本法人設立", detail: "初代代表は五十嵐光喜氏(元Dropbox Japan社長)。", sourceId: "miro-japan-aboutus" },
      { year: "2023", label: "一桁台後半%の人員削減", detail: "", sourceId: "miro-layoffs-2024" },
      { year: "2024.11", label: "全社員の18%を削減", detail: "CEOが組織の複雑化・役割重複を理由に説明。", sourceId: "miro-layoffs-2024" },
      { year: "2024.7", label: "向山泰貴氏が日本法人代表執行役社長に就任", detail: "前職Doorkel COO、セールスフォース・ジャパン10年以上。", sourceId: "miro-japan-mukoyama-appointment" },
    ],
    sourceIds: ["miro-founding", "miro-series-c", "miro-layoffs-2024", "miro-japan-aboutus", "miro-japan-mukoyama-appointment"],
    genbaVerdict: {
      headline: "2022年ピーク評価額$17.5Bの後、2023〜2024年に大規模レイオフ(2024年は18%)を経験。組織再編の只中にある局面。",
      body: "Miroは2022年1月に$17.5Bの評価額に到達した後、2023年に一桁台後半%、2024年11月には18%という大規模な人員削減を実施している。CEO自身が「組織の複雑化・階層過多・役割の重複」を理由に挙げており、単なるコスト削減ではなく組織構造そのものの見直しを進めている局面と考えられる。日本では同時期の2024年7月に、Salesforce Japan出身の向山泰貴氏が代表執行役社長に就任しており、本社の再編と日本のリーダーシップ刷新が重なるタイミングだった、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "AIを活用したイノベーションワークスペースへの製品拡張",
        body: "Strategic Account Executiveの求人票では、Miroを「コラボレーションプロダクトからAI駆動のイノベーションワークスペースへ進化させる」段階にあると位置づけており、単純なホワイトボードツールを超えた製品戦略の拡張が進んでいると考えられる。",
        sourceId: "miro-japan-jobs-strategic-ae",
      },
      {
        title: "三菱電機・NTTドコモグループ・図研のような大手製造業/通信での導入実績",
        body: "技術ワーキングや設計データのブレインストーミングなど、日本の大手製造業・通信キャリアグループでの具体的な活用事例が確認できる。",
        sourceId: "miro-japan-customers",
      },
    ],
    riskHypotheses: [
      {
        title: "2023〜2024年の連続レイオフ(2024年は18%)による組織の不安定さ",
        body: "2023年の一桁台後半%削減に続き、2024年11月には全社員の18%という大規模なレイオフを実施した。CEOは組織の複雑化を理由に挙げているが、競合Figmaの台頭・IPO準備という外部環境変化への対応という側面もあると考えられる。",
        confidence: "中",
        evidence: ["2023年、一桁台後半%の人員削減", "2024年11月、18%の人員削減"],
        counterSignal: "レイオフはコスト構造の見直しであり、必ずしも事業の失速を意味しない。2026年半ば時点でも事業は継続しており、日本を含むStrategic Accounts向けの採用は継続している。",
        sourceIds: ["miro-layoffs-2024"],
      },
    ],
    japanGrowth: {
      headline: "2021年7月、意欲的な数値目標(3年でユーザー10倍、TOPIX100の95%)を掲げて参入。2024年7月にSalesforce Japan出身の向山泰貴氏へリーダーシップが交代。",
      narrative: "ミロ・ジャパン合同会社は2021年7月に設立され(資本金300万円)、初代代表執行役社長には、Apple Japan・Microsoft Japanでの経験を経て2017年5月にDropbox Japan社長に正式就任した五十嵐光喜氏が就いた。2021年11月の参入発表では、3年間でユーザー数を10倍に、TOPIX100の95%を含む1万社の獲得、100名超の採用という意欲的な数値目標が掲げられ、2022年6月13日には日本語UIが正式リリースされている。2024年7月10日、Miro公式より、同年7月1日付で向山泰貴氏が代表執行役社長に就任したことが発表された。向山氏はDoorkelでCOOを務めた後、セールスフォース・ジャパンで10年以上(グローバル統括責任者、エンタープライズセールス部長等)、さらに日本NCR・日本テラデータでの営業経験も持つ、15年以上のエンタープライズDX領域の経歴を持つ人物。日本の導入事例としては、三菱電機(技術ワーキング)、NTTドコモグループ(Miro AI活用)、図研(設計データのブレインストーミング)、コンセント(セキュリティを担保した情報共有)などが確認できる。OpenWorkの回答者3件(2026年8月時点)では総合評価2.81、月間残業38.3時間、有休消化率74.4%で、評価制度については「担当アサイン企業により数字達成は変わってくる」という口コミがある。",
      qualitativeSignals: [
        { label: "2021年7月設立、初代代表は五十嵐光喜氏(元Dropbox Japan社長)", detail: "3年でユーザー10倍、TOPIX100の95%獲得という目標を掲げて参入。", sourceId: "miro-japan-launch-cloudwatch" },
        { label: "2024年7月、向山泰貴氏(元Salesforce Japan)が代表執行役社長に就任", detail: "Doorkel COO、Salesforce Japan10年以上の経歴。", sourceId: "miro-japan-mukoyama-appointment" },
        { label: "OpenWork回答者3件、総合評価2.81", detail: "残業38.3時間、有休消化率74.4%。", sourceId: "miro-japan-openwork" },
      ],
      sourceIds: ["miro-japan-aboutus", "miro-japan-launch-cloudwatch", "miro-japan-mukoyama-appointment"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Miroの売り方は「リモート/ハイブリッド環境で、部門横断のブレインストーミングや技術検討が、対面のホワイトボードのように直感的にできていない」という課題が起点。単なる図形描画ツールではなく、AI駆動のイノベーションワークスペースとしての提案が軸になっている。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "三菱電機のような大手製造業が、従来のパワーポイント資料作成に代えて技術ワーキングにMiroを活用し、議論を活性化させている例がある。図研では複雑な設計データの合意形成にも使われている。" },
      { title: "製品の成り立ちから見る課題", body: "MiroはRealtimeBoardとして創業し、リモート・分散環境でもチームが一緒に「創造」できる場を作るという発想からスタートした。" },
      { title: "外部環境の要求から見る課題", body: "Strategic AE求人票にある通り、単なるコラボレーションツールからAI駆動のイノベーションワークスペースへと製品カテゴリーが再定義されつつあり、戦略立案・ロードマップ・アジャイル実行など、より上流の業務プロセスへの浸透が図られている。" },
    ],
    narrative: [
      { label: "背景", body: "部門を超えたブレインストーミングや技術検討が、対面での付箋・ホワイトボードに依存しており、リモート/ハイブリッド環境では再現しづらい。" },
      { label: "課題", body: "議論の過程や意思決定の経緯が資料として残らず、部門をまたぐ合意形成に時間がかかる。" },
      { label: "解決策", body: "Miroの無限キャンバス上で、ブレインストーミングから技術図解、ロードマップ策定までを一気通貫で行い、AI機能で成果物の整理・要約まで支援する。" },
      { label: "選定の理由", body: "三菱電機・NTTドコモグループ・図研のような大手企業での導入実績と、1億人超のユーザー基盤(公式発信)が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、部門を横断したブレインストーミングや技術検討の内容が、その場限りで終わってしまうことはありませんか。",
    valueHypothesis: "三菱電機・NTTドコモグループのような大手企業が導入しているという開示を根拠に、一度定着すると技術検討・企画立案の標準ツールとして全社に広がりやすい、という価値仮説を立てる。",
    commonObjection: { objection: "2024年に大規模なレイオフがあったと聞いたが、製品開発への投資は継続されるのか", reframe: "レイオフはCEO自身が『組織の複雑化・役割重複』を理由として説明しており、Strategic Accounts向けの採用(東京含む)は継続している、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2011年", detail: "Andrey Khusid氏・Oleg Shardin氏がRealtimeBoardとして創業。", sourceIds: ["miro-founding"] },
    { label: "直近の評価額", value: "2022年1月、$400MのシリーズCで$17.5B", detail: "累計調達額$476.3M。以降追加調達の公式発表は確認できていない。", sourceIds: ["miro-series-c"] },
    { label: "日本法人設立", value: "2021年7月", detail: "資本金300万円。初代代表は五十嵐光喜氏。", sourceIds: ["miro-japan-aboutus"] },
    { label: "現代表", value: "向山泰貴氏(2024年7月1日就任)", detail: "前職Doorkel COO、Salesforce Japan10年以上。", sourceIds: ["miro-japan-mukoyama-appointment"] },
  ],
  hypotheses: [
    {
      topic: "LAYOFF PATTERN",
      title: "2023年・2024年と連続レイオフ、2024年は18%という大規模削減。",
      conclusion: "2023年に一桁台後半%、2024年11月には全社員の18%という大規模な人員削減を実施した。CEOのAndrey Khusid氏は「組織が複雑になりすぎ、階層が多く、役割の重複がある」と説明している。",
      confidence: "高",
      evidence: ["2023年、一桁台後半%の人員削減", "2024年11月、18%の人員削減、CEOコメントあり"],
      counterSignals: ["2026年時点でも事業は継続しており、日本を含むStrategic Accounts向けの採用は行われている"],
      interviewQuestions: ["2024年のレイオフ後、組織体制や評価制度にどのような変化がありましたか"],
      sourceIds: ["miro-layoffs-2024"],
    },
    {
      topic: "JAPAN LEADERSHIP TRANSITION",
      title: "創業期の五十嵐光喜氏から、2024年にSalesforce Japan出身の向山泰貴氏へ交代。",
      conclusion: "2021年の日本参入時は、Dropbox Japan・Apple Japan・Microsoft Japanでの経歴を持つ五十嵐光喜氏が代表執行役社長を務めたが、2024年7月1日付でセールスフォース・ジャパン出身の向山泰貴氏に交代した。",
      confidence: "高",
      evidence: ["2021年7月、五十嵐光喜氏が初代代表に就任(公式サイト記載)", "2024年7月、向山泰貴氏が代表執行役社長に就任(公式発表)"],
      counterSignals: ["交代の具体的な経緯・背景は公式発表からは分からない"],
      interviewQuestions: ["2024年のリーダーシップ交代を経て、日本の事業戦略にどのような変化がありましたか"],
      sourceIds: ["miro-japan-aboutus", "miro-japan-mukoyama-appointment"],
    },
    {
      topic: "AGGRESSIVE JAPAN TARGETS",
      title: "2021年参入時、3年でユーザー10倍・TOPIX100の95%獲得という意欲的な目標を掲げた。",
      conclusion: "日本参入発表時に、3年間でユーザー数を10倍に、TOPIX100の95%を含む1万社の獲得、100名超の採用という具体的な数値目標を掲げている。これらの目標が実際にどこまで達成されたかを示す公式な進捗開示は確認できていない。",
      confidence: "中",
      evidence: ["2021年11月の参入発表で、3年10倍・TOPIX100の95%という目標が明記されている"],
      counterSignals: ["2024年の18%レイオフや2024年のリーダーシップ交代は、当初目標に対する未達・軌道修正を示唆している可能性がある"],
      interviewQuestions: ["2021年に掲げた『3年でユーザー10倍・TOPIX100の95%』という目標は、実際どこまで達成されましたか"],
      sourceIds: ["miro-japan-launch-cloudwatch"],
    },
    {
      topic: "COMPETITIVE LANDSCAPE",
      title: "主要競合Figmaが上場準備を進める中、Miro自身は非公開のまま組織再編を優先。",
      conclusion: "デザインツール大手のFigmaが2025年後半に上場準備を進めていると報じられる一方、Miroは2026年半ば時点でS-1未提出・非公開のまま、2023〜2024年のレイオフによる組織再編を優先している。",
      confidence: "中",
      evidence: ["Figmaが2025年に上場準備を進めていると報じられている", "Miroは2026年半ば時点でIPO関連の公式発表がない"],
      counterSignals: ["Miro・Figmaは製品の重なりが一部にとどまり、単純な直接競合とは言い切れない側面もある"],
      interviewQuestions: ["Figmaのようなデザインツールとの商談における競合状況に変化はありますか"],
      sourceIds: ["miro-competitors", "miro-ipo-2026"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "本社は連続レイオフによる組織再編の只中、日本組織はSalesforce Japan出身の新代表のもとで立て直しの局面。",
    hypothesis: {
      title: "本社の組織再編と、日本のリーダーシップ刷新が同時期に重なった可能性。",
      body: "2024年11月の18%レイオフと同年7月の向山泰貴氏の日本代表就任は、時期が近接している。本社レベルでの組織の複雑性解消という動きと、日本における体制刷新が、独立した動きというより連動していた可能性がある。",
    },
    careerValue: {
      title: "ビジュアルコラボレーション領域の専門性は、隣接するデザイン・プロジェクト管理領域全般で評価されやすい。",
      body: "Fortune 500クラスの戦略アカウントを担当する経験は、Figma・Asana・monday.comのような隣接領域の企業への転職でも再現性を説明しやすい。一方、2023〜2024年の連続レイオフの経緯や、2021年に掲げた目標の達成状況は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "三菱電機", products: "Miro Visual Workspace", outcome: "技術ワーキングでパワーポイント資料に代えてMiro上で協働資料を作成し、議論が活発化したとされる。", implication: "日本の大手製造業での導入実績。", sourceId: "miro-japan-customers" },
    { company: "NTTドコモグループ", products: "Miro AI", outcome: "アンケート分析などにMiro AIを活用しているとされる。", implication: "日本の大手通信キャリアグループでの導入実績。", sourceId: "miro-japan-customers" },
    { company: "図研", products: "Miro Visual Workspace", outcome: "複雑な設計データについてMiro上でブレインストーミングを行い、共通認識を持った議論・合意形成を加速しているとされる。", implication: "日本の設計・エンジニアリング企業での導入実績。", sourceId: "miro-japan-customers" },
  ],
  externalSignals: [
    { label: "直近の評価額(2022年1月)", value: "$17.5B", detail: "$400MのシリーズC。", caveat: "非公開企業のため、それ以降の評価額改定は確認できていない。", sourceId: "miro-series-c" },
    { label: "人員削減率(2024年11月)", value: "18%", detail: "CEOが組織の複雑化・役割重複を理由に説明。", caveat: "削減後の正確な現従業員数は非公開。", sourceId: "miro-layoffs-2024" },
  ],
  roleLens: {
    salesMotion: "2026年8月時点で東京拠点の求人はStrategic Account Executive 1件のみ(過去に確認されたCommercial AE・Technical Account Manager等の求人は掲載終了済み)。Fortune 500/Global 2000クラスの戦略アカウント(3〜10社)を担当し、SE・CS・Value Advisory等を含む部門横断チームを率いる、アカウントCEO的な役割として設計されている。",
    compensation: "Miro Japan固有の給与データは確認できていない。求人にOTE等の金額記載はなく、株式報酬・在宅勤務手当・学習支援等の全社共通制度が明記されている。OpenWorkの回答者3件では待遇面満足度2.9という数値がある。",
    quota: "具体的なクオータ額は非公開。求人では$250K〜$1M超の商談のクロージング・拡張実績が求められると明記されている。",
    collaboration: "求人票では、Solution Engineering・Customer Success・Value Advisory・Professional Services・Product・Marketing・Partnersを含む部門横断チームを率いる立場と明記されている。",
  },
  leadership: {
    name: "向山 泰貴",
    role: "ミロ・ジャパン合同会社 代表執行役社長",
    read: "2024年7月1日付で代表執行役社長に就任。前職はDoorkelでCOOとして経営企画・新規事業を担当し、それ以前はセールスフォース・ジャパンで10年以上(グローバル統括責任者、エンタープライズセールス部長等)、さらに日本NCR・日本テラデータでの営業経験も持つ、15年以上のエンタープライズDX領域の経歴を持つ。前任の五十嵐光喜氏(Dropbox Japan・Apple Japan・Microsoft Japan出身)からの交代となる。",
    sourceId: "miro-japan-mukoyama-appointment",
  },
  companyStats: {
    globalHeadcount: { value: "約1,600人", detail: "公式採用ページの記載(2026年8月時点)。2023年・2024年の人員削減後の数値。", sourceId: "miro-layoffs-2024" },
    japanHeadcount: { value: "非公開", detail: "2021年参入時点で100名超の採用が目標として掲げられていたが、実績数値は確認できていない。", sourceId: "miro-japan-launch-cloudwatch" },
    japanOffice: { value: "非公開(具体的な所在地の公式記載は確認できず)", detail: "", sourceId: "miro-japan-aboutus" },
    japanSince: { value: "2021年7月", detail: "資本金300万円。", sourceId: "miro-japan-aboutus" },
  },
  salesAppeal: {
    intro: "本社は連続レイオフによる組織再編の只中にある一方、日本組織はSalesforce Japan出身の新代表のもとで、大手企業への浸透を進めている環境。",
    points: [
      { title: "三菱電機・NTTドコモグループ・図研クラスの導入事例を語れる", detail: "日本の大手製造業・通信キャリアグループでの導入実績を、商談の参照材料として使える。", sourceIds: ["miro-japan-customers"] },
      { title: "Salesforce Japan出身の向山泰貴氏のもとでの事業立て直しに関われる", detail: "10年以上のSalesforce Japanでの実績を持つ人物のもとで、日本市場の立て直しに関わることができる。", sourceIds: ["miro-japan-mukoyama-appointment"] },
      { title: "コラボレーションツールからAI駆動のイノベーションワークスペースへの転換期に関われる", detail: "Strategic AE求人票にある製品戦略の拡張を、最初期から経験できる。", sourceIds: ["miro-japan-jobs-strategic-ae"] },
      { title: "Fortune 500/Global 2000クラスの戦略アカウントを担当する経験を積める", detail: "アカウントCEO的な役割で、部門横断チームを率いる経験を積める。", sourceIds: ["miro-japan-jobs-strategic-ae"] },
    ],
  },
  interviewPrep: {
    intro: "2024年の大規模レイオフとリーダーシップ交代という変化の大きい局面だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2024年11月の18%レイオフは、日本組織にどの程度影響しましたか。", why: "本社の組織再編が日本にどう波及したかを確認したい。", sourceIds: ["miro-layoffs-2024"] },
      { question: "2021年に掲げた『3年でユーザー10倍・TOPIX100の95%』という目標は、実際どこまで達成されましたか。", why: "参入当初の目標と現在の実態のギャップを確認したい。", sourceIds: ["miro-japan-launch-cloudwatch"] },
      { question: "2024年7月の向山氏就任後、日本の営業戦略やターゲット業界に変化はありましたか。", why: "リーダーシップ交代の実際の影響を確認したい。", sourceIds: ["miro-japan-mukoyama-appointment"] },
      { question: "Figmaのようなデザインツールとの商談における競合状況に変化はありますか。", why: "競合の上場準備が、実際の商談にどう影響しているかを確認したい。", sourceIds: ["miro-competitors"] },
    ],
  },
  solutions: [
    {
      name: "Miro Visual Workspace",
      valueProp: "無限キャンバス上でブレインストーミング・技術図解・ロードマップ策定などを行う、AI駆動のイノベーションワークスペース。",
      url: "https://miro.com/",
      competitors: "Figma(FigJam)、Lucid/Lucidchart、Mural等。",
      differentiation: "単なる図形描画ツールではなく、コラボレーションからAI活用の成果物整理までを一気通貫で提供する点を訴求している。",
      retention: "日本固有の継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://miro.com/customers/",
  fitTags: [
    "ビジュアルコラボレーション領域を極めたい",
    "三菱電機・NTTドコモグループクラスの導入事例を武器にしたい",
    "Salesforce Japan出身の新代表のもとでの事業立て直しに関わりたい",
    "コラボレーションツールからAI駆動ワークスペースへの転換期に関わりたい",
    "Fortune 500クラスの戦略アカウントを担当したい",
    "組織再編など、変化の大きい環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "アカウントCEO的な役割で部門横断チームを率いたい",
  ],
  comparisonMap: [
    { arena: "ビジュアルコラボレーション/ワークマネジメント", companies: ["Miro", "monday.com", "Contentsquare"], why: "業務の可視化・コラボレーション予算の比較" },
  ],
  sources: miroSources,
};

const newRelicSources: ResearchSource[] = [
  {
    id: "newrelic-founding",
    label: "Wikipedia「New Relic」",
    url: "https://en.wikipedia.org/wiki/New_Relic",
    kind: "外部集計",
    scope: "2008年、Lew Cirne氏が創業",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-ipo",
    label: "New Relic公式IR「New Relic Announces Pricing of Initial Public Offering」",
    url: "https://ir.newrelic.com/press-releases/Press-Release-Details/2014/New-Relic-Announces-Pricing-of-Initial-Public-Offering/default.aspx",
    kind: "企業公式",
    scope: "2014年12月、NYSE上場(ティッカーNEWR)。公開価格$23、調達額$115M",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-take-private",
    label: "New Relic公式プレスリリース「Francisco Partners and TPG Complete Acquisition of New Relic」",
    url: "https://newrelic.com/press-release/20231108",
    kind: "企業公式",
    scope: "2023年7月31日発表・11月8日完了、Francisco Partners・TPGによる$6.5B(1株$87)での買収・完全非公開化",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-establishment",
    label: "New Relic公式プレスリリース(共同通信PRワイヤー)「米New Relic社とジャパン・クラウド、合弁でNew Relic株式会社を設立」",
    url: "https://kyodonewsprwire.jp/release/201808076779",
    kind: "企業公式",
    scope: "2018年8月、Japan Cloud Computingとの合弁でNew Relic株式会社を設立",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-konishi-appointment",
    label: "New Relic公式プレスリリース(共同通信PRワイヤー)「日本法人代表に小西真一朗が就任」",
    url: "https://kyodonewsprwire.jp/release/201811019850",
    kind: "企業公式",
    scope: "2018年11月1日発表、小西真一朗氏が日本法人代表取締役に就任",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-konishi-2023",
    label: "週刊BCN+「New Relic 代表取締役社長 小西真一朗」",
    url: "https://www.weeklybcn.com/journal/keyperson/detail/20230501_197865.html",
    kind: "外部集計",
    scope: "2023年5月時点、小西真一朗氏が代表取締役社長を継続。事業開始から4年余りでユーザー数が5,000から16,000超に増加、オブザーバビリティ市場で国内トップシェアと紹介",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-datacenter-2026",
    label: "New Relic公式プレスリリース「アジア太平洋地域初となる日本データセンターの開設」",
    url: "https://newrelic.com/jp/press-release/20260312",
    kind: "企業公式",
    scope: "2026年3月12日発表。APAC初の日本データセンター「東京リージョン」を2026年7月から提供開始。NTTドコモ・中外製薬のコメントを掲載",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-furudate-appointment",
    label: "New Relic公式プレスリリース「日本事業統括責任者に古舘正清が就任」",
    url: "https://newrelic.com/jp/press-release/20260401",
    kind: "企業公式",
    scope: "2026年4月1日付、古舘正清氏がNew RelicグローバルのGroup Vice President(Head of Japan)兼New Relic株式会社執行役員日本事業統括責任者に就任。日本IBM(1984年入社)、日本マイクロソフト業務執行役員(2005年)、レッドハット常務執行役員(2011年)、F5ネットワークスジャパン代表取締役社長(2015年)、ヴィーム・ソフトウェア日本法人執行役員社長(2018年〜)を歴任。記事内に小西真一朗氏への言及はなし",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-jobs-ae",
    label: "New Relic Careers(Greenhouse)「Account Executive - Enterprise Sales」",
    url: "https://job-boards.greenhouse.io/newrelic/jobs/5142016008",
    kind: "企業公式",
    scope: "東京拠点の直販営業求人",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-jobs-sdr",
    label: "New Relic Careers(Greenhouse)「Sales Development Representative」",
    url: "https://job-boards.greenhouse.io/newrelic/jobs/5251325008",
    kind: "企業公式",
    scope: "東京拠点のSDR求人",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-openwork",
    label: "OpenWork「New Relic株式会社」",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x00000055JF",
    kind: "コミュニティ",
    scope: "回答者1件、総合評価3.16(全79,888社中上位16%)",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-salary-openwork",
    label: "OpenWork個別回答「DevOps関連のSaaS企業、急成長と報酬面の充実について」",
    url: "https://www.openwork.jp/user_answer.php?vid=a0A2x0000001awc",
    kind: "コミュニティ",
    scope: "法人営業/Enterprise Account Executiveの自己申告年収1,600万円(基本給744万円+賞与750万円+その他50万円)。営業職は4〜5割がコミッションベースと言及",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-japan-customers",
    label: "New Relic公式(日本語)顧客事例ページ",
    url: "https://newrelic.com/jp/resources/case-studies/base-jp",
    kind: "企業公式",
    scope: "日本の導入企業事例。BASE、ベガコーポレーション、TBSホールディングス等",
    checkedAt: "2026-08-10",
  },
  {
    id: "newrelic-market-position",
    label: "業界比較記事(Coralogix「8 Best New Relic Competitors」等)",
    url: "https://coralogix.com/guides/new-relic-competitors/",
    kind: "外部集計",
    scope: "オブザーバビリティ市場の主要競合はDatadog・Dynatrace・Splunk(2024年Ciscoが$28Bで買収)等",
    checkedAt: "2026-08-10",
  },
];

const newRelicIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "New Relicは、デジタルサービスを運営する企業の開発、SRE、IT運用部門が、アプリケーションとインフラの状態を横断して把握するためのオブザーバビリティ基盤。「障害の原因特定に時間がかかる」「ログやメトリクスがツールごとに分断している」「性能劣化が顧客体験や売上へ与える影響を把握できない」といった課題を解決する。技術課題を停止時間、開発生産性、クラウドコスト、顧客体験へ翻訳し、エンジニアから経営層まで価値を示せる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2008年、Lew Cirne氏がアプリケーションパフォーマンス監視(APM)のパイオニアとして創業。2014年12月にNYSEへ上場(ティッカーNEWR、公開価格$23、調達額$115M)し、長らく公開企業としてオブザーバビリティ市場を牽引してきた。しかし2023年7月31日、投資会社のFrancisco Partners・TPGが総額$6.5B(1株$87)での買収を発表し、同年11月8日に完了、9年間の上場企業としての歴史を終えて完全非公開化した。非公開化後は、Datadog・Dynatrace・Splunk(2024年にCiscoが$28Bで買収)といった競合とのAI駆動型オブザーバビリティ市場での競争が続いている。2026年3月には、APAC地域で初となる日本データセンター「東京リージョン」の開設を発表するなど、非公開化後も地域投資を継続している。",
    ipoOutlookSummary: "2023年に非公開化されたばかりであり、再上場に関する具体的な時期の公式言及は確認できていない。Francisco Partners・TPGという投資会社が主要株主であることを踏まえると、当面は非公開のまま事業価値の向上を優先する局面にあると考えられるが、これはGenbaの推測であり確定情報ではない。",
    milestones: [
      { year: "2008", label: "Lew Cirne氏が創業", detail: "APM(アプリケーションパフォーマンス監視)のパイオニアとして。", sourceId: "newrelic-founding" },
      { year: "2014.12", label: "NYSE上場(ティッカーNEWR)", detail: "公開価格$23、調達額$115M。", sourceId: "newrelic-ipo" },
      { year: "2018.8", label: "日本法人設立", detail: "Japan Cloud Computingとの合弁。同年11月、小西真一朗氏が代表に就任。", sourceId: "newrelic-japan-establishment" },
      { year: "2023.7-11", label: "Francisco Partners・TPGが$6.5Bで買収、完全非公開化", detail: "2023年11月8日完了。", sourceId: "newrelic-take-private" },
      { year: "2026.3", label: "APAC初の日本データセンター開設を発表", detail: "2026年7月提供開始予定。", sourceId: "newrelic-japan-datacenter-2026" },
      { year: "2026.4", label: "古舘正清氏が日本事業統括責任者(GVP)に就任", detail: "日本IBM・日本マイクロソフト・レッドハット・F5・Veeamで要職を歴任。", sourceId: "newrelic-japan-furudate-appointment" },
    ],
    sourceIds: ["newrelic-founding", "newrelic-ipo", "newrelic-take-private", "newrelic-japan-establishment", "newrelic-japan-datacenter-2026"],
    genbaVerdict: {
      headline: "9年間の上場企業としての歴史を経て2023年に非公開化。2026年に入り、日本データセンター開設と外資IT日本代表歴任者の新規着任が相次いだ。",
      body: "New Relicは2014年のIPOから約9年間、公開企業としてオブザーバビリティ市場を牽引してきたが、2023年にFrancisco Partners・TPGによる$6.5Bでの買収を経て非公開化した。2026年に入ってからは、3月のAPAC初日本データセンター開設発表に続き、4月には日本IBM・日本マイクロソフト・レッドハット・F5・Veeamで要職を歴任した古舘正清氏がGVP(Head of Japan)として着任するという、投資と人材の両面で大きな動きが立て続けにあった。2018年の設立から日本組織を率いてきた小西真一朗氏との役割分担は公式発表からは分からないが、非公開化後も日本市場への投資・体制強化が積極化している局面と考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "APAC初の日本データセンター開設によるデータ完結ニーズへの対応",
        body: "2026年3月発表、2026年7月提供開始予定の東京リージョンにより、国内でのデータ完結・低レイテンシー・コンプライアンス対応が可能になる。NTTドコモ・中外製薬が公式コメントで、法令・規制要件への準拠やガバナンス課題の解消への期待を述べている。",
        sourceId: "newrelic-japan-datacenter-2026",
      },
      {
        title: "設立から一貫した代表取締役による、安定した日本組織の成長",
        body: "2018年の設立から小西真一朗氏が代表を務め続けており、2023年時点の報道では、事業開始から4年余りでユーザー数が5,000から16,000超に増加し、オブザーバビリティ市場で国内トップシェアと紹介されている。",
        sourceId: "newrelic-japan-konishi-2023",
      },
    ],
    riskHypotheses: [
      {
        title: "Cisco傘下のSplunk/AppDynamicsなど、大手ベンダーとの価格競争が激化する可能性",
        body: "2024年にCiscoが$28BでSplunkを買収したことで、オブザーバビリティ市場の戦略的価値が改めて示された。2025〜2026年の契約更新期において、CiscoによるSplunk/AppDynamics側の値上げと、Datadog・New Relic・Elastic等の競争的な価格設定がぶつかる複雑な状況が生まれていると指摘されている。",
        confidence: "中",
        evidence: ["2024年、CiscoがSplunkを$28Bで買収", "2025〜2026年の契約更新期に、大手ベンダー間の価格競争が指摘されている"],
        counterSignal: "New RelicはDatadogと比べて3〜5倍安価な価格設定を強みとして訴求しており、価格競争環境はむしろ追い風になる可能性もある。",
        sourceIds: ["newrelic-market-position"],
      },
    ],
    japanGrowth: {
      headline: "2018年設立から小西真一朗氏が代表を継続してきたが、2026年4月に外資IT各社の日本代表歴任者・古舘正清氏がGVP(Head of Japan)として新たに着任。",
      narrative: "New Relic株式会社は2018年8月、米New Relic社とジャパン・クラウド・コンピューティングとの合弁で設立された。同年11月1日、小西真一朗氏が代表取締役に就任したことが公式発表されており、2023年5月時点の報道でも代表取締役社長として紹介されている。同報道では、事業開始から4年余りでユーザー数が5,000から16,000超に増加し、オブザーバビリティ市場で国内トップシェアを占めていると紹介されている。2026年3月12日には、APAC地域で初となる日本データセンター「東京リージョン」の開設が発表され、2026年7月からの提供開始が予定されている。この発表にはNTTドコモ・中外製薬が公式にコメントを寄せており、国内でのデータ完結・低レイテンシー・法令規制対応へのニーズの高さがうかがえる。その3週間後の2026年4月1日、日本IBM(1984年入社)を皮切りに、日本マイクロソフト業務執行役員、レッドハット常務執行役員、F5ネットワークスジャパン代表取締役社長、ヴィーム・ソフトウェア日本法人執行役員社長を歴任してきた古舘正清氏が、New RelicグローバルのGroup Vice President(Head of Japan)兼日本法人執行役員日本事業統括責任者に就任したことが発表された。公式発表内に小西氏への言及はなく、両者が現在どのような役割分担にあるのかは確認できていない。日本の導入事例としては、BASE、ベガコーポレーション(LOWYA・DOKODEMO)、TBSホールディングスなどが確認できる。",
      qualitativeSignals: [
        { label: "2018年8月設立、小西真一朗氏が2023年時点まで代表取締役社長", detail: "Japan Cloud Computingとの合弁。", sourceId: "newrelic-japan-establishment" },
        { label: "2023年時点でユーザー数5,000→16,000超、国内トップシェア", detail: "設立から4年余りでの成長。", sourceId: "newrelic-japan-konishi-2023" },
        { label: "2026年4月、古舘正清氏がGVP(Head of Japan)として新たに着任", detail: "IBM・Microsoft・Red Hat・F5・Veeamで日本代表級の要職を歴任。", sourceId: "newrelic-japan-furudate-appointment" },
      ],
      sourceIds: ["newrelic-japan-establishment", "newrelic-japan-konishi-appointment", "newrelic-japan-konishi-2023", "newrelic-japan-datacenter-2026", "newrelic-japan-furudate-appointment"],
    },
  },
  sellingPlaybook: {
    frameIntro: "New Relicの売り方は「システム障害の原因特定に時間がかかり、開発者・運用チームの生産性が下がっている」という課題が起点。単体のAPMツールではなく、メトリクス・ログ・トレースを統合したオブザーバビリティプラットフォームとしての提案が軸になる。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "BASE・ベガコーポレーションのようなEC事業者が、問題解決にかかる時間を数時間から数分に短縮した例がある。TBSホールディングスのような大手メディア企業では、複数の顧客接点をつなぐ共通IDサービスの安定性・災害対応力の向上に活用されている。" },
      { title: "製品の成り立ちから見る課題", body: "New RelicはAPM(アプリケーションパフォーマンス監視)のパイオニアとして創業した。存在理由は「ソフトウェアの動きを可視化し、開発者・運用チームが問題に素早く対応できるようにする」こと。" },
      { title: "外部環境の要求から見る課題", body: "AIファーストの時代において、複雑化するシステム全体をリアルタイムで可視化する必要性が高まっており、2026年の日本データセンター開設は、データ主権・コンプライアンス要件への対応という外部環境変化への直接的な回答になっている。" },
    ],
    narrative: [
      { label: "背景", body: "システムの複雑化にともない、障害発生時にどこに問題があるのかを特定するのに時間がかかっている。" },
      { label: "課題", body: "メトリクス・ログ・トレースがバラバラのツールに分散しており、根本原因の特定までに数時間かかることもある。" },
      { label: "解決策", body: "New Relicのオブザーバビリティプラットフォームで全システムを一元的に可視化し、問題解決までの時間を数分単位に短縮する。" },
      { label: "選定の理由", body: "BASE・TBSホールディングスのような導入実績、Datadogと比べて3〜5倍安価とされる価格設定、そして2026年7月から始まる国内データセンター(東京リージョン)によるデータ主権対応が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、システム障害が発生してから根本原因を特定するまでに、平均してどれくらいの時間がかかっていますか。",
    valueHypothesis: "BASE・TBSホールディングスのような企業が導入しているという開示を根拠に、一度定着すると開発・運用チーム全体の標準監視基盤として扱われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "2023年に非公開化されたと聞いたが、製品開発への投資は継続されるのか", reframe: "非公開化から2年半ほど経った2026年にAPAC初の日本データセンターという大型投資を発表しており、非公開化後もむしろ地域投資を強化している、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2008年", detail: "Lew Cirne氏が創業。", sourceIds: ["newrelic-founding"] },
    { label: "上場から非公開化まで", value: "2014年12月上場→2023年11月非公開化($6.5B)", detail: "Francisco Partners・TPGによる買収。", sourceIds: ["newrelic-ipo", "newrelic-take-private"] },
    { label: "日本法人設立", value: "2018年8月", detail: "Japan Cloud Computingとの合弁。代表は小西真一朗氏(設立時から継続)。", sourceIds: ["newrelic-japan-establishment"] },
    { label: "日本データセンター開設", value: "2026年7月提供開始予定(2026年3月発表)", detail: "APAC地域初。", sourceIds: ["newrelic-japan-datacenter-2026"] },
  ],
  hypotheses: [
    {
      topic: "TAKE-PRIVATE AFTERMATH",
      title: "2023年の非公開化から2年半ほどで、APAC初の日本データセンターという大型投資を発表。",
      conclusion: "2023年11月にFrancisco Partners・TPGによる$6.5Bでの買収が完了し非公開化した後、2026年3月にAPAC地域で初となる日本データセンター「東京リージョン」の開設が発表された。非公開化がコスト削減一辺倒ではなく、地域投資を伴う成長戦略として進められている可能性がある。",
      confidence: "中",
      evidence: ["2023年11月、$6.5Bでの非公開化完了", "2026年3月、APAC初の日本データセンター開設を発表"],
      counterSignals: ["投資会社傘下での意思決定プロセスや、今後の追加投資の規模・ペースは公開情報からは分からない"],
      interviewQuestions: ["非公開化後、日本市場への投資方針にどのような変化がありましたか"],
      sourceIds: ["newrelic-take-private", "newrelic-japan-datacenter-2026"],
    },
    {
      topic: "JAPAN LEADERSHIP ADDITION",
      title: "2026年4月、外資IT各社の日本代表を渡り歩いてきた古舘正清氏がグループ・バイス・プレジデント(Head of Japan)に就任。",
      conclusion: "2018年の日本法人設立から小西真一朗氏が代表取締役社長を務めてきたが、2026年4月1日付で、日本IBM・日本マイクロソフト・レッドハット・F5ネットワークスジャパン・ヴィーム・ソフトウェアで要職(代表取締役社長級を含む)を歴任した古舘正清氏が、New RelicグローバルのGroup Vice President(Head of Japan)兼日本法人執行役員日本事業統括責任者として着任した。公式発表内に小西氏への言及はなく、両者の役割分担は確認できていない。",
      confidence: "高",
      evidence: ["2018年11月、小西真一朗氏が代表に就任(公式発表)、2023年5月時点でも代表取締役社長として紹介", "2026年4月1日、古舘正清氏がGVP(Head of Japan)兼日本事業統括責任者に就任(公式発表)"],
      counterSignals: ["古舘氏の就任が小西氏の後任なのか、役割を分担する新設ポジションなのかは公式情報からは分からない"],
      interviewQuestions: ["2026年4月の古舘氏の着任後、日本組織の体制や意思決定プロセスにどのような変化がありましたか"],
      sourceIds: ["newrelic-japan-establishment", "newrelic-japan-konishi-2023", "newrelic-japan-furudate-appointment"],
    },
    {
      topic: "DATA SOVEREIGNTY DEMAND",
      title: "国内データセンター開設の背景に、金融・製薬等の規制業界からの強い需要がある。",
      conclusion: "2026年3月の日本データセンター開設発表には、NTTドコモ(低遅延・法令規制対応)と中外製薬(ガバナンス上の長年の課題)という異なる業界の企業が公式コメントを寄せており、データの国内完結に対する需要が複数業界にまたがっていることを示している。",
      confidence: "中",
      evidence: ["NTTドコモが法令・規制要件への準拠を評価", "中外製薬がガバナンス上の課題解消を評価"],
      counterSignals: ["これらの企業が実際にどの程度の規模で東京リージョンを利用する契約になっているかは非公開"],
      interviewQuestions: ["日本データセンターの開設は、規制業界(金融・製薬等)への提案にどう影響していますか"],
      sourceIds: ["newrelic-japan-datacenter-2026"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "本社は上場→非公開化という所有構造の変化を経験、日本組織は2026年に入り投資・人材の両面で動きが活発化。",
    hypothesis: {
      title: "2026年の日本データセンター開設とGVP新規着任は、日本市場への投資強化フェーズを示している可能性。",
      body: "2018年の設立から小西真一朗氏が代表を務め、ユーザー数が5,000から16,000超に増加するなど比較的安定した成長を続けてきた日本組織に対し、2026年3〜4月には日本データセンター開設と外資IT日本代表歴任者の着任という、投資と人材の両面での強化が短期間に集中した。単なる体制変更というより、日本市場への本格的なテコ入れの局面にある可能性がある。",
    },
    careerValue: {
      title: "オブザーバビリティ領域の専門性は、DevOps/SRE市場全体で高く評価されやすい。",
      body: "システム監視・障害対応の文脈での提案経験は、Datadog・Dynatrace・Splunk(Cisco傘下)といった直接競合はもちろん、クラウドインフラ全般を扱う企業への転職でも再現性を説明しやすい。一方、非公開化後の具体的な経営方針や、2024年以降の日本組織の詳細な業績は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "BASE株式会社", products: "New Relic Observability Platform", outcome: "ネットショップ作成サービスの監視に導入し、より速い問題特定・解決を実現しているとされる。", implication: "日本の成長ECプラットフォーム企業での導入実績。", sourceId: "newrelic-japan-customers" },
    { company: "ベガコーポレーション", products: "New Relic One", outcome: "EC サイト「LOWYA」「DOKODEMO」に導入し、問題解決にかかる時間を数時間から数分に短縮したとされる。", implication: "日本の中堅EC企業での導入実績。", sourceId: "newrelic-japan-customers" },
    { company: "TBSホールディングス", products: "New Relic Observability Platform", outcome: "複数の顧客接点をつなぐ共通IDサービス「TBS ID」の安定性・災害対応力の向上に活用しているとされる。", implication: "日本の大手メディア企業での導入実績。", sourceId: "newrelic-japan-customers" },
  ],
  externalSignals: [
    { label: "非公開化時の企業価値", value: "$6.5B(1株$87)", detail: "Francisco Partners・TPGによる買収。", caveat: "非公開企業のため、それ以降の企業価値の変動は確認できていない。", sourceId: "newrelic-take-private" },
    { label: "日本のユーザー数(2023年時点)", value: "5,000→16,000超", detail: "設立(2018年)から4年余りでの増加。", caveat: "2024年以降の最新のユーザー数は確認できていない。", sourceId: "newrelic-japan-konishi-2023" },
  ],
  roleLens: {
    salesMotion: "2026年8月時点で確認できる東京拠点の営業求人は、Account Executive - Enterprise Sales、Senior Account Executive - Enterprise Sales(Japan、同一内容で複数ポジション募集中)、Sales Development Representativeで構成される。特定少数のアカウント深耕よりも、業界を問わず数十社規模のアカウントを担当する新規開拓中心の設計になっている。",
    compensation: "New Relic Japan固有の公式給与データは確認できていない。OpenWorkの自己申告(法人営業/Enterprise Account Executive)では年収1,600万円(基本給744万円+賞与750万円+その他50万円)という事例があり、営業職は4〜5割がコミッションベースの給与制度とされる。",
    quota: "具体的なクオータ額は非公開。求人では「業界にこだわらず営業活動ができる」「特定数社ではなく数十社・複数業界のアカウント担当経験」が求められており、幅広いテリトリーを前提にした設計と考えられる。",
    collaboration: "求人では「チームセリング、特にプリセールスにおいてエンジニアとのコラボレーション」が明記されており、技術者との協業が前提の営業スタイルと考えられる。",
  },
  leadership: {
    name: "古舘 正清",
    role: "New Relic Group Vice President(Head of Japan)兼 New Relic株式会社 執行役員 日本事業統括責任者(2026年4月1日就任)",
    read: "1984年に日本IBMでキャリアを開始し、2001年にテクノロジー事業部長(北アジア担当)、2005年に日本マイクロソフト業務執行役員、2011年にレッドハット常務執行役員、2015年にF5ネットワークスジャパン代表取締役社長、2018年からヴィーム・ソフトウェア日本法人執行役員社長を歴任した、外資IT企業の日本代表を渡り歩いてきた人物。2026年4月1日付でNew Relicの日本事業統括責任者に就任し、「AI強化型のビジネスオブザーバビリティ」の確立を掲げている。2018年の日本法人設立時から代表を務めてきた小西真一朗氏については、この就任発表内で言及がなく、両者の役割分担・現在の在任状況は公式情報からは確認できていない。",
    sourceId: "newrelic-japan-furudate-appointment",
  },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "2023年の非公開化以降、公式な全社員数の開示は確認できていない。", sourceId: "newrelic-take-private" },
    japanHeadcount: { value: "非公開", detail: "2023年時点でユーザー数16,000超と紹介されているが、社員数の開示はない。", sourceId: "newrelic-japan-konishi-2023" },
    japanOffice: { value: "東京", detail: "具体的な所在地の公式記載は確認できていない。", sourceId: "newrelic-japan-establishment" },
    japanSince: { value: "2018年8月", detail: "Japan Cloud Computingとの合弁。", sourceId: "newrelic-japan-establishment" },
  },
  salesAppeal: {
    intro: "本社は上場から非公開化という大きな所有構造の変化を経てなお日本市場への投資(データセンター開設・GVP着任)を2026年に立て続けに行った、勢いのある局面。",
    points: [
      { title: "BASE・TBSホールディングスクラスの導入事例を語れる", detail: "成長ECプラットフォームから大手メディア企業まで、幅広い業種での導入実績を商談の参照材料として使える。", sourceIds: ["newrelic-japan-customers"] },
      { title: "2026年7月開始の国内データセンターという、直近の投資材料を持って商談できる", detail: "データ主権・コンプライアンス要件を重視する金融・製薬等の規制業界への提案材料になる。", sourceIds: ["newrelic-japan-datacenter-2026"] },
      { title: "外資IT各社の日本代表を歴任した古舘正清氏のもとでの事業強化に関われる", detail: "IBM・Microsoft・Red Hat・F5・Veeamで培われた知見のもとで、日本市場のテコ入れ局面に関わることができる。", sourceIds: ["newrelic-japan-furudate-appointment"] },
      { title: "Datadogと比べて3〜5倍安価とされる価格競争力を武器にできる", detail: "価格訴求力のある製品で、コスト意識の高い顧客層にも攻め込みやすい。", sourceIds: ["newrelic-market-position"] },
    ],
  },
  interviewPrep: {
    intro: "非公開化から2年半が経ち、日本データセンターという大型投資が発表された直後だからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2023年の非公開化後、日本市場への投資方針にどのような変化がありましたか。", why: "所有構造変化が日本の事業投資にどう影響したかを確認したい。", sourceIds: ["newrelic-take-private", "newrelic-japan-datacenter-2026"] },
      { question: "2026年7月開始の日本データセンターは、商談でどこまで具体的に訴求できる段階にありますか。", why: "発表されたばかりの投資材料が、実際の現場提案にどこまで反映されているかを確認したい。", sourceIds: ["newrelic-japan-datacenter-2026"] },
      { question: "設立から代表が変わっていないとのことですが、組織文化や意思決定のスピードにどんな特徴がありますか。", why: "長期政権ならではの組織文化を確認したい。", sourceIds: ["newrelic-japan-konishi-2023"] },
      { question: "Datadog・Dynatrace・Splunkとの商談で、直近の勝率や訴求ポイントに変化はありますか。", why: "競合環境の変化(Cisco傘下のSplunk等)が実際の商談にどう影響しているかを確認したい。", sourceIds: ["newrelic-market-position"] },
    ],
  },
  solutions: [
    {
      name: "New Relic Observability Platform",
      valueProp: "メトリクス・ログ・トレースを統合し、AI駆動でシステム全体の異常検知・根本原因分析を行うオブザーバビリティプラットフォーム。",
      url: "https://newrelic.com/jp",
      competitors: "Datadog、Dynatrace、Splunk/AppDynamics(Cisco傘下)等。",
      differentiation: "月間100GBの無料データ枠という業界屈指の太っ腹な無料枠と、Datadogと比べて3〜5倍安価とされる価格設定を訴求している。",
      retention: "日本固有の継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://newrelic.com/jp/resources/case-studies",
  fitTags: [
    "オブザーバビリティ/DevOps領域を極めたい",
    "BASE・TBSホールディングスクラスの導入事例を武器にしたい",
    "国内データセンター開設という直近の投資材料を活かしたい",
    "外資IT各社の日本代表歴任者のもとで事業強化に関わりたい",
    "技術理解を武器にプリセールスと協業する営業スタイルを身につけたい",
    "非公開化など、変化の大きい本社環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "価格競争力のある製品で新規開拓を極めたい",
  ],
  comparisonMap: [
    { arena: "オブザーバビリティ/DevOps", companies: ["New Relic", "PagerDuty", "Confluent"], why: "システム運用・信頼性予算の比較" },
  ],
  sources: newRelicSources,
};

const coupaSources: ResearchSource[] = [
  {
    id: "coupa-founding-ipo",
    label: "外部集計(Finovate等)",
    url: "https://finovate.com/thoma-bravo-acquires-business-spend-management-firm-coupa-software-for-8-billion/",
    kind: "外部集計",
    scope: "2006年創業、2016年IPO",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-take-private",
    label: "Thoma Bravo公式プレスリリース「Coupa Software Enters into Definitive Agreement to Be Acquired by Thoma Bravo for $8 Billion」",
    url: "https://www.thomabravo.com/press-releases/coupa-software-enters-into-definitive-agreement-to-be-acquired-by-thoma-bravo-for-8-billion",
    kind: "企業公式",
    scope: "2022年12月発表、2023年前半完了。Thoma Bravoが企業価値$8Bで買収(1株$81、直近終値比77%プレミアム)。アブダビ投資庁系ファンドがマイノリティ出資",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-establishment",
    label: "EnterpriseZine「Coupa Software、ジャパンクラウドと合弁会社を設立」",
    url: "https://enterprisezine.jp/news/detail/14247",
    kind: "外部集計",
    scope: "2021年4月、Coupa SoftwareとJapan Cloudの相互出資でCoupa株式会社設立。初代代表はJapan Cloudの小関貴志氏",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-sorimachi-appointment",
    label: "Coupa公式(日本語)「Coupa日本法人代表に元OpenText日本法人社長の反町浩一郎が就任」",
    url: "https://coupa.co.jp/news/20250509",
    kind: "企業公式",
    scope: "2025年5月9日発表・同月就任。反町浩一郎氏が代表取締役社長に就任。日産自動車(1990年入社)、日本マイクロソフト(1999年〜15年間)、SAP(VP)、CA Technologies日本法人社長、OpenText日本法人社長(2016年〜)を歴任、30年以上のグローバルエンタープライズビジネス経験",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-jobs-account-director",
    label: "Coupa Careers(Lever)「Account Director - 11081」",
    url: "https://jobs.lever.co/coupa/c2056798-3f3e-4b38-94c1-76ae8bb4650d",
    kind: "企業公式",
    scope: "東京拠点、年商10億ドル超の戦略アカウントを担当するEnterprise Account Directorの求人票",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-jobs-adr",
    label: "Coupa Careers(Lever)「Sr. Account Development Representative - 11536」",
    url: "https://jobs.lever.co/coupa/9a8ec743-c749-429d-a109-36ae523b0b64",
    kind: "企業公式",
    scope: "東京拠点、経営幹部層への戦略的アプローチを行うADR(SDR相当)の求人票",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-jobs-alliances",
    label: "Coupa Careers(Lever)「Sr. Alliances Director - 10999」",
    url: "https://jobs.lever.co/coupa/eaf94b1e-ae23-4828-b5c9-6e53696a3930",
    kind: "企業公式",
    scope: "東京拠点、日本のパートナーエコシステムの構築・拡大を担う求人票",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-openwork",
    label: "OpenWork「Coupa Software合同会社」",
    url: "https://www.openwork.jp/company.php?m_id=a0C1000001SPQ9u",
    kind: "コミュニティ",
    scope: "回答者1件、総合評価3.04(全79,888社中上位31%)",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-japan-customers",
    label: "Coupa公式(日本語)導入事例ページ",
    url: "https://coupa.co.jp/customers/cooper-standard",
    kind: "企業公式",
    scope: "日本の導入企業事例。出光興産、三菱重工業、野村総合研究所、積水化学、Primetals Technologies等",
    checkedAt: "2026-08-10",
  },
  {
    id: "coupa-competitors",
    label: "業界比較記事(Zip「10 best Coupa competitors」等)",
    url: "https://ziphq.com/blog/coupa-competitors",
    kind: "外部集計",
    scope: "調達購買/支出管理(S2P)市場の主要競合はSAP Ariba、Ivalua、Zip、GEP SMART、JAGGAER、Zycus等",
    checkedAt: "2026-08-10",
  },
];

const coupaIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Coupaは、大企業の調達、財務、経理、サプライチェーン部門が、購買・請求・経費・取引先リスクを横断して管理するための支出管理基盤。「誰が何にいくら使っているか把握できない」「購買や承認が部門ごとに分断している」「コスト、供給リスク、コンプライアンスを同時に管理できない」といった課題を解決する。単なるコスト削減ではなく、全社支出を経営資源として捉え、CFOや調達責任者と利益改善・リスク管理の変革を設計できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "2006年創業、2016年に上場し、調達購買・支出管理(Business Spend Management)分野のクラウドプラットフォームとして成長した。2022年12月、投資会社Thoma Bravoが企業価値$8Bでの買収に合意したことを発表し、2023年前半に完了、完全非公開化した。買収価格は1株$81で、発表前終値に対して77%のプレミアムが付いており、アブダビ投資庁系のファンドもマイノリティ出資者として参加している。非公開化後は、AI・コミュニティ生成データを活用した「Total Spend Management」プラットフォームとして、SAP Ariba・Ivalua・Zipのような競合とグローバルで競争を続けている。",
    ipoOutlookSummary: "2023年に非公開化されたばかりであり、再上場に関する具体的な時期の公式言及は確認できていない。Thoma Bravoという大手PEファンドが主要株主であることを踏まえると、当面は非公開のまま企業価値の向上を優先する局面にあると考えられるが、これはGenbaの推測であり確定情報ではない。",
    milestones: [
      { year: "2006", label: "創業", detail: "調達購買・支出管理クラウドプラットフォームとして。", sourceId: "coupa-founding-ipo" },
      { year: "2016", label: "IPO", detail: "", sourceId: "coupa-founding-ipo" },
      { year: "2021.4", label: "日本法人設立", detail: "Japan Cloudとの相互出資。初代代表は小関貴志氏。", sourceId: "coupa-japan-establishment" },
      { year: "2022.12-2023", label: "Thoma Bravoが$8Bで買収、完全非公開化", detail: "1株$81、77%プレミアム。", sourceId: "coupa-take-private" },
      { year: "2025.5", label: "反町浩一郎氏が日本法人代表取締役社長に就任", detail: "元OpenText Japan社長、30年以上のグローバルエンタープライズ経験。", sourceId: "coupa-japan-sorimachi-appointment" },
    ],
    sourceIds: ["coupa-founding-ipo", "coupa-take-private", "coupa-japan-establishment", "coupa-japan-sorimachi-appointment"],
    genbaVerdict: {
      headline: "2023年の非公開化から約2年後の2025年5月、OpenText Japan社長経験者を日本代表に迎え、体制を刷新。",
      body: "Coupaは2022年12月にThoma Bravoによる$8Bでの買収合意を発表し、2023年に非公開化した。日本法人は2021年4月にJapan Cloudとの合弁で設立され、Japan Cloud出身の小関貴志氏が初代代表を務めたが、2025年5月、日産自動車・日本マイクロソフト・SAP・CA Technologies・OpenTextという複数の外資テクノロジー企業で日本代表級の要職を歴任してきた反町浩一郎氏に交代した。本社の非公開化から日本のリーダーシップ刷新まで約2年半というタイミングを踏まえると、Thoma Bravo傘下での経営体制の総仕上げとして、日本市場の本格テコ入れに着手した局面にあると考えられる、というのがGenbaの読み。",
    },
    growthDrivers: [
      {
        title: "外資テクノロジー企業の日本代表を渡り歩いてきた反町浩一郎氏による体制刷新",
        body: "2025年5月に就任した反町氏は、日産自動車での経営企画・経理財務システム導入経験に加え、日本マイクロソフト・SAP・CA Technologies・OpenTextでの30年以上のグローバルエンタープライズ経験を持つ。就任時のコメントでは、QCDだけでなく地政学リスク管理・ESG対応など調達購買部門の課題が多様化していることを指摘し、Coupaのプラットフォームでの支出最適化・リスク低減支援を掲げている。",
        sourceId: "coupa-japan-sorimachi-appointment",
      },
      {
        title: "出光興産・三菱重工業・野村総合研究所クラスの大手企業への導入実績",
        body: "間接材購買から全社調達改革プロジェクトまで、日本の大手製造業・総合研究所での具体的な導入事例が確認できる。日本国内で100社超に導入されているとの推計もある。",
        sourceId: "coupa-japan-customers",
      },
    ],
    riskHypotheses: [
      {
        title: "非公開化以降、業績・財務指標の外部開示がほぼ途絶えている",
        body: "2023年の非公開化以降、Coupaの売上高・成長率・顧客数といった財務指標の定期開示は確認できていない。日本の推定導入社数(100社超)も外部メディアの推計にとどまり、公式な開示ではない。",
        confidence: "中",
        evidence: ["2023年の非公開化以降、公式な財務指標の開示が確認できない", "日本の導入社数も外部推計値にとどまる"],
        counterSignal: "非公開化は珍しいことではなく、業績非開示自体が経営不振を意味するわけではない。Thoma Bravoは調達購買/BSM領域への投資を続けている。",
        sourceIds: ["coupa-take-private"],
      },
    ],
    japanGrowth: {
      headline: "2021年4月にJapan Cloudとの合弁で設立、2025年5月に外資テクノロジー企業の日本代表歴任者へリーダーシップが交代。",
      narrative: "Coupa株式会社は2021年4月、米Coupa SoftwareとJapan Cloudの相互出資により設立された。初代代表取締役社長にはJapan Cloud側の小関貴志氏が就任した。本社は2022年12月にThoma Bravoによる$8Bでの買収に合意し、2023年前半に完全非公開化している。日本法人は2025年5月9日、代表取締役社長が反町浩一郎氏に交代したことが公式発表された。反町氏は1990年に日産自動車に入社して経営企画・経理財務システム導入に従事した後、1999年に日本マイクロソフトへ転じて15年間大企業向けビジネスの要職を歴任、その後SAPでヴァイスプレジデントを務め、2016年以降はCA Technologies・OpenText両社の日本法人代表取締役社長を務めてきた人物。就任コメントでは、QCDに加えて地政学リスク管理・ESG対応など調達購買部門の課題が多様化していることを指摘し、Coupaのプラットフォームによる支出最適化とリスク低減支援を掲げている。日本の導入事例としては、出光興産(間接材購買)、三菱重工業(間接材調達・支出管理)、野村総合研究所(全社調達改革プロジェクト)、積水化学(調達DXの基盤プラットフォーム)、Primetals Technologies(財務管理ソリューションの全面刷新)などが確認でき、日本国内で100社超に導入されているとの推計もある。",
      qualitativeSignals: [
        { label: "2021年4月設立、初代代表はJapan Cloud出身の小関貴志氏", detail: "Japan Cloudとの相互出資。", sourceId: "coupa-japan-establishment" },
        { label: "2025年5月、反町浩一郎氏(元OpenText Japan社長)が代表に就任", detail: "日産・日本マイクロソフト・SAP・CA Technologies・OpenTextを歴任。", sourceId: "coupa-japan-sorimachi-appointment" },
        { label: "出光興産・三菱重工業・野村総合研究所クラスの大手導入実績", detail: "国内100社超に導入との推計あり。", sourceId: "coupa-japan-customers" },
      ],
      sourceIds: ["coupa-japan-establishment", "coupa-japan-sorimachi-appointment", "coupa-japan-customers"],
    },
  },
  sellingPlaybook: {
    frameIntro: "Coupaの売り方は「調達購買のプロセスが部門ごとに分断されており、全社の支出を横断的に可視化・最適化できていない」という課題が起点。単なる購買システムではなく、QCD・地政学リスク・ESGまで含めた「Total Spend Management」としての提案が軸になっている。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "出光興産・三菱重工業のような大手製造業が間接材購買・支出管理に、野村総合研究所が全社調達改革プロジェクトとして導入している。積水化学では調達DXの基盤プラットフォームとして位置づけられている。" },
      { title: "製品の成り立ちから見る課題", body: "Coupaは、企業の調達購買・支出管理をクラウドで一元化するという発想から成長した。存在理由は「バラバラな購買プロセスを統合し、コスト削減とガバナンス強化を両立させる」こと。" },
      { title: "外部環境の要求から見る課題", body: "反町氏が就任コメントで指摘する通り、QCDだけでなく地政学リスク管理・ESG対応など、調達購買部門が扱うべき課題が多様化しており、単なるコスト管理を超えたリスクマネジメント機能への需要が高まっている。" },
    ],
    narrative: [
      { label: "背景", body: "調達購買のプロセスが部門・拠点ごとに分断されており、全社の支出状況をリアルタイムで把握できていない。" },
      { label: "課題", body: "個別最適な購買が横行し、価格交渉力を活かせないだけでなく、サプライヤーの地政学リスクやESG基準への対応も後手に回る。" },
      { label: "解決策", body: "Coupaの支出管理プラットフォームで調達購買を一元化し、コスト最適化とリスク低減を同時に実現する。" },
      { label: "選定の理由", body: "出光興産・三菱重工業・野村総合研究所のような大手企業での導入実績、そして反町浩一郎氏という日本の外資テクノロジー業界で実績のある人物が代表を務めているという体制面の信頼性が選定理由として語られやすい。" },
    ],
    openingHook: "御社では、全社の調達購買の支出状況を、部門を横断してリアルタイムに把握できていますか。",
    valueHypothesis: "出光興産・三菱重工業・野村総合研究所のような大手企業が導入しているという開示を根拠に、一度定着すると全社の調達購買基盤として長期的に使われやすい、という価値仮説を立てる。",
    commonObjection: { objection: "2023年に非公開化されたと聞いたが、経営体制は安定しているのか", reframe: "2025年5月に外資テクノロジー企業の日本代表を複数歴任してきた反町浩一郎氏を新代表に迎えており、Thoma Bravo傘下でも日本市場への投資・体制強化が続いている、という角度で再提示するのが有効。" },
  },
  facts: [
    { label: "創業", value: "2006年", detail: "", sourceIds: ["coupa-founding-ipo"] },
    { label: "非公開化", value: "2022年12月合意・2023年前半完了、Thoma Bravoが$8Bで買収", detail: "1株$81、77%プレミアム。", sourceIds: ["coupa-take-private"] },
    { label: "日本法人設立", value: "2021年4月", detail: "Japan Cloudとの相互出資。", sourceIds: ["coupa-japan-establishment"] },
    { label: "現代表", value: "反町浩一郎氏(2025年5月就任)", detail: "元OpenText Japan社長、30年以上のグローバルエンタープライズ経験。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
  ],
  hypotheses: [
    {
      topic: "TAKE-PRIVATE TIMELINE",
      title: "2022年12月に$8Bで非公開化合意、77%プレミアムという大型ディール。",
      conclusion: "Thoma Bravoが2022年12月に企業価値$8Bでの買収に合意したことを発表し、2023年前半に完了した。買収価格の1株$81は、発表前の終値に対して77%のプレミアムが付いており、アブダビ投資庁系ファンドもマイノリティ出資者として参加している。",
      confidence: "高",
      evidence: ["2022年12月、Thoma Bravoが$8Bでの買収に合意", "1株$81、77%プレミアム、アブダビ投資庁系ファンドが出資"],
      counterSignals: ["非公開化後の具体的な業績・評価額の推移は非公開のため確認できない"],
      interviewQuestions: ["Thoma Bravo傘下になってから、経営方針や投資判断のスピードにどんな変化がありましたか"],
      sourceIds: ["coupa-take-private"],
    },
    {
      topic: "JAPAN LEADERSHIP TRANSITION",
      title: "Japan Cloud出身の初代代表から、外資テクノロジー企業の日本代表歴任者へ交代。",
      conclusion: "2021年の設立時はJapan Cloud出身の小関貴志氏が代表を務めたが、2025年5月、日産自動車・日本マイクロソフト・SAP・CA Technologies・OpenTextで要職を歴任した反町浩一郎氏に交代した。Japan Cloudとの合弁というスタートアップ的な立ち上げ体制から、外資エンタープライズ企業出身の経験豊富な経営者による体制へ移行したと考えられる。",
      confidence: "高",
      evidence: ["2021年4月、小関貴志氏(Japan Cloud出身)が初代代表に就任", "2025年5月、反町浩一郎氏(元OpenText Japan社長)が代表に就任(公式発表)"],
      counterSignals: ["交代の具体的な経緯・背景は公式発表からは分からない"],
      interviewQuestions: ["2025年5月の代表交代を経て、日本の事業戦略や組織体制にどのような変化がありましたか"],
      sourceIds: ["coupa-japan-establishment", "coupa-japan-sorimachi-appointment"],
    },
    {
      topic: "RISK-EXPANDED VALUE PROPOSITION",
      title: "QCDだけでなく地政学リスク・ESG対応まで含めた提案へ、価値提案が拡張されている。",
      conclusion: "反町氏の就任コメントでは、調達購買部門の課題がQCD(品質・コスト・納期)だけでなく、地政学リスク管理・ESG対応まで多様化していることが明言されており、Coupaの提案軸が単純なコスト削減から、リスクマネジメント機能を含む方向へ拡張されている可能性がある。",
      confidence: "中",
      evidence: ["2025年5月の就任コメントで、地政学リスク管理・ESG対応への言及がある"],
      counterSignals: ["実際の商談でどこまでリスクマネジメント機能が訴求されているかは、求人票からは確認できない"],
      interviewQuestions: ["地政学リスクやESG対応を軸にした提案は、実際の商談でどこまで浸透していますか"],
      sourceIds: ["coupa-japan-sorimachi-appointment"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "本社はThoma Bravo傘下での非公開企業、日本組織はJapan Cloud型のスタートアップ的立ち上げから、外資エンタープライズ経験者による体制へ移行。",
    hypothesis: {
      title: "Japan Cloudとの合弁による立ち上げ期を経て、日本市場が本格展開フェーズに入った可能性。",
      body: "2021年の設立時はJapan Cloudとの合弁というスタートアップ的な立ち上げ体制だったが、2025年5月に外資テクノロジー企業の日本代表を複数歴任してきた反町浩一郎氏へ交代したことは、日本市場が実証実験フェーズから本格展開フェーズへ移行しつつあることを示唆している可能性がある。",
    },
    careerValue: {
      title: "調達購買/支出管理(BSM)領域の専門性は、財務・サプライチェーン領域全般で評価されやすい。",
      body: "C-level(CPO・CFO・CIO)への提案経験や、大型商談のクロージング実績は、SAP Ariba・Ivaluaのような直接競合はもちろん、財務・サプライチェーン管理領域の企業への転職でも再現性を説明しやすい。一方、Thoma Bravo傘下での具体的な経営方針や、2025年の代表交代の詳細な経緯は、情報収集を重ねた上で判断したい局面。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "出光興産", products: "Coupa Business Spend Management", outcome: "間接材購買の効率化に活用しているとされる。", implication: "日本の大手エネルギー企業での導入実績。", sourceId: "coupa-japan-customers" },
    { company: "三菱重工業", products: "Coupa Business Spend Management", outcome: "間接材調達・支出管理に活用しているとされる。", implication: "日本の大手重工業企業での導入実績。", sourceId: "coupa-japan-customers" },
    { company: "野村総合研究所", products: "Coupa Business Spend Management", outcome: "全社調達改革プロジェクトとして導入しているとされる。", implication: "日本の大手シンクタンク/ITサービス企業での導入実績。", sourceId: "coupa-japan-customers" },
  ],
  externalSignals: [
    { label: "非公開化時の企業価値", value: "$8B(1株$81、77%プレミアム)", detail: "Thoma Bravoによる買収。", caveat: "非公開企業のため、それ以降の企業価値の変動は確認できていない。", sourceId: "coupa-take-private" },
    { label: "日本の推定導入社数", value: "100社超", detail: "外部推計値。", caveat: "Coupa公式の日本顧客数開示ではなく、外部メディアの推計値である点に留意。", sourceId: "coupa-japan-customers" },
  ],
  roleLens: {
    salesMotion: "2026年8月時点で確認できる東京拠点の求人は、Account Director(年商10億ドル超の戦略アカウント担当)、Sr. Account Development Representative(経営幹部層への戦略的アプローチを行うADR)、Sr. Alliances Director(パートナーエコシステム構築)の3職種で構成される。直販の新規開拓・アップセルと、パートナー経由の間接販売の両方に投資している体制と考えられる。",
    compensation: "Coupa Japan固有の給与データは確認できていない。OpenWorkには回答1件のみで、詳細な給与水準は確認できなかった。",
    quota: "具体的なクオータ額は非公開。Account Director職では「6桁ドル(数十万ドル)規模の商談」のクロージングが求められると明記されている。",
    collaboration: "Account Director職では、Account Development・Solutions Consultingチームとの部門横断連携が明記されている。Sr. Alliances Director職は、パートナーとCoupaの営業チーム双方を巻き込む共同商談体制の構築を担う。",
  },
  leadership: {
    name: "反町 浩一郎",
    role: "Coupa株式会社 代表取締役社長",
    read: "2025年5月9日発表・同月就任。1990年に日産自動車に入社し、経営企画や経理財務システム導入に従事。1999年に日本マイクロソフトへ転じ、15年間にわたり大企業向けビジネスの要職を歴任。その後SAPでヴァイスプレジデントを務め、2016年以降はCA Technologies・OpenText両社の日本法人代表取締役社長を務めてきた、30年以上のグローバルエンタープライズビジネス経験を持つ人物。就任時、QCDだけでなく地政学リスク管理・ESG対応など調達購買部門の課題が多様化していることを指摘し、Coupaのプラットフォームによる支出最適化・リスク低減支援を掲げた。",
    sourceId: "coupa-japan-sorimachi-appointment",
  },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "2023年の非公開化以降、公式な全社員数の開示は確認できていない。", sourceId: "coupa-take-private" },
    japanHeadcount: { value: "非公開", detail: "", sourceId: "coupa-japan-establishment" },
    japanOffice: { value: "非公開(具体的な所在地の公式記載は確認できず)", detail: "", sourceId: "coupa-japan-establishment" },
    japanSince: { value: "2021年4月", detail: "Japan Cloudとの相互出資。", sourceId: "coupa-japan-establishment" },
  },
  salesAppeal: {
    intro: "本社はThoma Bravo傘下の非公開企業として安定した経営基盤を持ち、日本組織は2025年5月、外資テクノロジー企業の日本代表を複数歴任してきた反町浩一郎氏のもとで本格展開フェーズに入った環境。",
    points: [
      { title: "出光興産・三菱重工業・野村総合研究所クラスの導入事例を語れる", detail: "日本の大手エネルギー・重工業・シンクタンク企業への導入実績を、商談の参照材料として使える。", sourceIds: ["coupa-japan-customers"] },
      { title: "外資テクノロジー企業の日本代表を歴任した反町浩一郎氏のもとで事業拡大に関われる", detail: "日本マイクロソフト・SAP・CA Technologies・OpenTextでの実績を持つ人物のもとで、日本市場の本格展開に関わることができる。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
      { title: "QCDからESG・地政学リスクまで、提案の幅が広がる調達購買領域の専門性を積める", detail: "単なるコスト管理を超えた、リスクマネジメントを含む提案スキルを磨ける。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
      { title: "直販とパートナー経由(Sr. Alliances Director)の両輪に投資する体制に関われる", detail: "パートナーエコシステム構築のポジションが同時募集されており、間接販売網の拡大局面に関わる機会がある。", sourceIds: ["coupa-japan-jobs-alliances"] },
    ],
  },
  interviewPrep: {
    intro: "2025年5月の代表交代からまだ日が浅いタイミングだからこそ、面接で率直に確認しておきたい質問例です。",
    questions: [
      { question: "2025年5月の反町氏就任後、日本の事業戦略や営業組織にどのような変化がありましたか。", why: "代表交代の実際の影響を確認したい。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
      { question: "地政学リスクやESG対応を軸にした提案は、実際の商談でどこまで浸透していますか。", why: "就任コメントで語られた新しい価値提案が、現場にどこまで反映されているかを確認したい。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
      { question: "Thoma Bravo傘下になってから、日本市場への投資方針にどんな変化がありましたか。", why: "PEファンド傘下での投資判断のスピード感を確認したい。", sourceIds: ["coupa-take-private"] },
      { question: "パートナー経由の商談と直販の商談は、どの程度の比率になっていますか。", why: "Sr. Alliances Directorの新設が、担当予定のテリトリーにどう影響するかを確認したい。", sourceIds: ["coupa-japan-jobs-alliances"] },
    ],
  },
  solutions: [
    {
      name: "Coupa Business Spend Management (BSM) Platform",
      valueProp: "調達購買・請求書処理・経費精算・サプライチェーンリスク管理を統合したクラウド型支出管理プラットフォーム。コミュニティ生成AIによる支出データ分析を活用する。",
      url: "https://coupa.co.jp/",
      competitors: "SAP Ariba、Ivalua、Zip、GEP SMART、JAGGAER、Zycus等。",
      differentiation: "1,000万超のバイヤー・サプライヤーのグローバルネットワークから生成される支出データをAIで分析し、コスト最適化とリスク低減を同時に実現する点を訴求している。",
      retention: "日本固有の継続率データは非公開。",
    },
  ],
  customerStoriesUrl: "https://coupa.co.jp/customers",
  fitTags: [
    "調達購買/支出管理(BSM)領域を極めたい",
    "出光興産・三菱重工業クラスの大手導入事例を武器にしたい",
    "外資テクノロジー企業の日本代表歴任者のもとで事業拡大に関わりたい",
    "QCDからESG・地政学リスクまで、提案の幅を広げたい",
    "直販とパートナー経由の両輪に投資する体制に関わりたい",
    "PEファンド傘下など、変化の大きい環境でも自走できる",
    "外資特有の実力主義に挑戦したい",
    "C-level(CPO・CFO)への大型商談提案力を磨きたい",
  ],
  comparisonMap: [
    { arena: "調達購買/支出管理(BSM)", companies: ["Coupa", "Anaplan", "Workato"], why: "コーポレート部門のDX予算・業務効率化予算の比較" },
  ],
  sources: coupaSources,
};

const notionSources: ResearchSource[] = [
  { id: "notion-careers", label: "Notion Careers", url: "https://www.notion.com/careers", kind: "企業公式", scope: "企業情報・採用一覧", checkedAt: "2026-08-11" },
  { id: "notion-job-bdr", label: "Business Development Representative, Japan", url: "https://jobs.ashbyhq.com/notion/c64a2cda-4c84-45bd-823d-f9141c316733", kind: "企業公式", scope: "日本BDRの職務・要件", checkedAt: "2026-08-11" },
  { id: "notion-job-manager", label: "Commercial Sales Manager, Japan", url: "https://jobs.ashbyhq.com/notion/e95ff317-92fe-4e34-88da-a83fe093f017", kind: "企業公式", scope: "日本営業managerの職務・要件", checkedAt: "2026-08-11" },
  { id: "notion-japan-sales", label: "Notion Japan Sales Meetup", url: "https://www.notion.com/ja/blog/notion-japan-salesmeetup", kind: "企業公式", scope: "日本営業組織・PLG・責任者", checkedAt: "2026-08-11" },
  { id: "notion-jp-launch", label: "Notion日本語版ローンチ", url: "https://www.notion.com/blog/notion-launching-in-japanese", kind: "企業公式", scope: "日本市場参入・初期成長", checkedAt: "2026-08-11" },
  { id: "notion-data-residency", label: "日本・韓国のデータレジデンシー", url: "https://www.notion.com/blog/notion-expands-data-residency-to-japan-south-korea", kind: "企業公式", scope: "日本のEnterprise基盤・セキュリティ", checkedAt: "2026-08-11" },
  { id: "notion-about", label: "Why we built Notion", url: "https://www.notion.com/about", kind: "企業公式", scope: "創業思想・all-in-one workspaceの成り立ち", checkedAt: "2026-08-11" },
  { id: "notion-customers", label: "Notion Customer Stories", url: "https://www.notion.com/ja/customers", kind: "企業公式", scope: "ユーザー規模・顧客事例", checkedAt: "2026-08-11" },
  { id: "notion-toyota", label: "トヨタ自動車 導入事例", url: "https://www.notion.com/ja/customers/toyota", kind: "企業公式", scope: "国内Enterprise導入成果", checkedAt: "2026-08-11" },
  { id: "notion-uzabase", label: "ユーザベース 導入事例", url: "https://www.notion.com/ja/customers/uzabase-jp", kind: "企業公式", scope: "全社定着・情報探索成果", checkedAt: "2026-08-11" },
  { id: "notion-jrwest", label: "JR西日本 導入事例", url: "https://www.notion.com/ja/customers/jrwest-jp", kind: "企業公式", scope: "国内ナレッジ・オンボーディング成果", checkedAt: "2026-08-11" },
  { id: "notion-ai", label: "Notion AI", url: "https://www.notion.com/ja/product/ai", kind: "企業公式", scope: "Agent・AI Meeting Notes・Enterprise Search", checkedAt: "2026-08-11" },
  { id: "notion-enterprise-search", label: "Notion Enterprise Search", url: "https://www.notion.com/ja/product/enterprise-search", kind: "企業公式", scope: "権限を考慮した横断検索・connectors", checkedAt: "2026-08-11" },
  { id: "notion-projects", label: "Notion Projects", url: "https://www.notion.com/ja/product/projects", kind: "企業公式", scope: "Wiki・Docs・Projects統合", checkedAt: "2026-08-11" },
  { id: "notion-ai-security", label: "Notion AI Security & Privacy", url: "https://www.notion.com/help/enterprise-search-security-and-privacy-practices", kind: "企業公式", scope: "AI・connectorの権限・データ利用", checkedAt: "2026-08-11" },
];

const notionIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Notionは、企業の全部門が文書、ナレッジ、プロジェクトを一つのワークスペースに集約し、人とAIが同じ業務文脈を使うためのコラボレーション基盤。「情報が複数ツールに散在して探せない」「議事録や知識が業務に再利用されない」「AIが参照すべき社内情報と権限を整えられない」といった課題を解決する。個人やチームの自発的な利用を入口に、全社標準、エンタープライズ検索、AIエージェントへ拡張し、働き方そのものを提案できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Notionは非公開企業で、売上・ARR・日本単体の業績は開示していない。公式ページでは1億ユーザー、Fortune 100の62%、140万人のcommunityを掲げ、日本では2020年の初期採用、2021年の日本語版提供を経て、2025年時点で従業員規模別のAE 3 teamとRelationship Manager teamを展開。2026年5月からEnterprise向け日本データレジデンシーも提供し、個人・team利用から全社AI workspaceへのupmarketを進めている。",
    ipoOutlookSummary: "IPOの時期・計画は公式には確認できない。評価額や二次市場情報を会社の確定事実として扱わず、候補者は提示されるequityの株数・行使価格・希薄化・流動性条件を個別に確認したい。",
    genbaVerdict: {
      headline: "強いPLGを、AI込みの全社標準へ変える日本GTMの拡張局面。",
      body: "1億ユーザーと大規模communityは商談の入口を作る一方、Enterprise契約はセキュリティ、権限、データ所在地、既存suiteとの重複、全社定着を越える必要がある。日本は4つの営業teamと2つの現行営業求人を確認でき、データレジデンシーも整った。ただし日本のARR、顧客数、quota達成率は非公開で、製品人気を営業の達成しやすさへ短絡しない見極めが必要。",
    },
    milestones: [
      { year: "2013", label: "Notionを創業", detail: "Ivan Zhao氏らが、softwareを誰でも組み立てられるworkspaceの構想から事業を開始。", sourceId: "notion-careers" },
      { year: "2020", label: "日本の初期GTMを開始", detail: "公式Sales Meetupで、西勝清氏が2020年に日本1人目の社員として入社したと説明。", sourceId: "notion-japan-sales" },
      { year: "2021", label: "日本語版を正式提供", detail: "日本語の製品、support、help center、template galleryを提供。発表時点で日本のDAUは前年比4倍。", sourceId: "notion-jp-launch" },
      { year: "2025", label: "日本営業を4 teamで展開", detail: "従業員規模別のAE 3 teamとRelationship Manager teamを公式Meetupで紹介。", sourceId: "notion-japan-sales" },
      { year: "2026", label: "日本データレジデンシーを提供", detail: "5月からEnterprise顧客が日本国内にdata at restを保持できる選択肢を追加。", sourceId: "notion-data-residency" },
    ],
    growthDrivers: [
      { title: "1億ユーザーとcommunityを起点にしたPLG", body: "無料・個人・小teamの利用と140万人規模のcommunityが認知と内部championを生む。日本営業は、既存利用者を起点にworkflowと組織課題を見つけ、企業契約へ変える余地がある。", sourceId: "notion-customers" },
      { title: "Docs・Wiki・ProjectsからAI teamへportfolioを拡張", body: "Agent、Enterprise Search、AI Meeting Notesをworkspaceのcontext上で提供し、単なる文書管理ではなく検索・会議・反復業務の実行まで価値範囲を広げている。", sourceId: "notion-ai" },
      { title: "データレジデンシーが日本Enterpriseの障壁を下げる", body: "日本国内でdata at restを保持する選択肢をEnterpriseへ追加。規制業界や大企業で、data locationとsecurity reviewを理由に止まっていた案件を前へ進める材料になる。", sourceId: "notion-data-residency" },
    ],
    japanGrowth: {
      headline: "日本は初期ローカライズから、複数営業teamとEnterprise基盤を持つ段階へ。",
      narrative: "2021年の日本語版発表時点で日本のDAUは前年比4倍だった。2025年の公式Sales Meetupでは、従業員規模別のAE 3 teamとRelationship Manager teamを紹介し、日本事業をscale-up phaseと説明。2026年には日本データレジデンシーを追加した。トヨタ、ユーザベース、JR西日本の事例では承認、情報探索、オンボーディングの定量改善も確認できる。一方、日本の売上・ARR・有料顧客数・従業員数は非公開で、growth rateそのものは断定できない。",
      qualitativeSignals: [
        { label: "日本営業4 team", detail: "従業員規模別AE 3 teamとRelationship Manager teamを2025年に公開。", sourceId: "notion-japan-sales" },
        { label: "東京の現行営業求人2件", detail: "BDRとCommercial Sales Managerを公式APIで確認。", sourceId: "notion-job-bdr" },
        { label: "日本データレジデンシー", detail: "2026年5月からEnterprise顧客向けに提供。", sourceId: "notion-data-residency" },
      ],
      sourceIds: ["notion-jp-launch", "notion-japan-sales", "notion-job-bdr", "notion-job-manager", "notion-data-residency", "notion-toyota", "notion-uzabase", "notion-jrwest"],
    },
    riskHypotheses: [
      { title: "製品人気とquota再現性は別に検証する必要がある", body: "既存ユーザーとcommunityは接点を作るが、企業契約ではsecurity、governance、migration、全社定着、競合suiteとの重複を越える必要がある。日本のquota達成率・平均ACV・sales cycleは非公開。", confidence: "中", evidence: ["1億ユーザーと140万人community", "日本でCommercial leadershipを採用", "日本単体の営業生産性KPIは未開示"], counterSignal: "国内大手の定量事例と日本データレジデンシーは、Enterprise案件の障壁を下げる材料になる。", sourceIds: ["notion-customers", "notion-job-manager", "notion-data-residency", "notion-toyota"] },
      { title: "portfolio拡張は価値を増やす一方、競争とchange managementを広げる", body: "Docs・Wiki・ProjectsにAI、Search、Meeting Notes、Calendar等が重なるほど、Microsoft 365、Google Workspace、Slack、Atlassian、Asanaなど複数予算と比較される。営業は機能比較ではなく統合後の運用設計と定着を示す必要がある。", confidence: "中", evidence: ["workspace上でAI機能を統合", "Enterprise Searchが外部appを横断", "日本営業managerにupmarket経験を要求"], counterSignal: "同一workspaceの権限とcontextをAIが利用できる点は、分断されたpoint solutionとの差別化になりうる。", sourceIds: ["notion-ai", "notion-enterprise-search", "notion-job-manager"] },
    ],
    sourceIds: ["notion-customers", "notion-japan-sales", "notion-jp-launch", "notion-data-residency", "notion-job-bdr", "notion-job-manager"],
  },
  sellingPlaybook: {
    frameIntro: "Notionの売り方は「AIを導入したいが、AIが参照すべき社内知識と業務contextが分散している」という課題が起点。便利な文書toolの全社展開ではなく、Docs・Wiki・Projects・接続appを権限付きの一つのworkspaceへ集め、人とAIが同じcontextで仕事を進める基盤として提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "トヨタは情報共有と承認workflowを集約して承認を3倍高速化し、JR西日本は散在していた情報をWikiへ集めてonboarding対応時間を50%以上削減。ユーザベースでも1,093人が利用し、70%が情報へ速く到達できると回答している。導入目的は文書作成ではなく、検索・引き継ぎ・承認・部門連携に失われる時間を減らすことにある。" },
      { title: "製品の成り立ちから見る課題", body: "Notionは、email、chat、document、file、taskなど用途ごとに増えたtoolをcopy & pasteでつなぐ働き方への問題意識から生まれた。blockとdatabaseを組み替え、利用者自身が自社の仕事に合うsoftwareを作れるall-in-one workspaceという設計思想は、「業務にtoolを合わせられず、情報とworkflowが分断する」という課題を指し示している。" },
      { title: "外部環境の要求から見る課題", body: "生成AI・AI agentの業務利用が広がるほど、企業は回答精度だけでなく、参照権限、機密情報の扱い、data location、監査可能性を説明する必要がある。Notionが日本のEnterprise顧客・見込み客から繰り返しlocal data residencyを求められ、東京保管・大阪backupを提供した事実は、AI活用の前提として「信頼できる社内contextとgovernance」を整える圧力が高まっていることを示す。" },
    ],
    narrative: [
      { label: "背景", body: "hybrid workと生成AI活用が同時に進む一方、社内の文書、会議記録、project、意思決定はdrive、chat、個人folder、複数の業務toolへ分散している。" },
      { label: "課題", body: "人は最新版を探すことに時間を失い、AIも権限付きの正しいcontextへ到達できない。汎用AIを追加しても、分断・古い情報・shadow ITが残れば、回答の信頼性と全社governanceを両立できない。" },
      { label: "解決策", body: "Docs・Wiki・Projectsを一つのworkspaceへ集め、Slack・Google Drive・GitHub等をEnterprise Searchで接続。Meeting NotesとAgentを同じ権限・context上で動かし、日本data residency、SSO、監査・管理機能を含めて全社標準化する。" },
      { label: "選定の理由", body: "Microsoft 365やGoogle Workspaceは既存suiteとの統合、Gleanは横断検索、Atlassianは開発workflowに強い。Notionは柔軟なblock/database、文書・project・AIの一体性、既存のPLG利用者、国内の定量事例、日本data residencyを同時に持つ点を選定理由として語りやすい。" },
    ],
    openingHook: "AI agentへ投資する前に、貴社の社員とAIは、権限を守りながら『最新版の社内知識』へ何分で到達できますか。",
    valueHypothesis: "トヨタの承認3倍高速化、JR西日本のonboarding対応時間50%以上削減、ユーザベースの情報到達改善を根拠に、最初のworkflowで検索・承認・引き継ぎ時間を測る。効果を確認後、Enterprise SearchとAgentを重ね、tool削減ではなく意思決定cycleとAI回答の信頼性を全社KPIとして広げる。",
    commonObjection: { objection: "Microsoft 365やGoogle Workspace、既存wikiがあるので、新しいworkspaceを増やしたくない。", reframe: "toolの追加ではなく、既存toolに散らばる情報を権限付きで検索・再利用し、人とAIが同じcontextから行動できるかを問う。全置換から始めず、onboardingや承認など一つのworkflowで検索時間・cycle time・問い合わせ件数を比較する。" },
  },
  facts: [
    { label: "公式ユーザー規模", value: "1億人", detail: "公式Customer Storiesページの全世界ユーザー数。日本の有料席数ではない。", sourceIds: ["notion-customers"] },
    { label: "Enterprise浸透", value: "Fortune 100の62%", detail: "公式Customer Storiesページの利用比率。契約製品・席数は非公開。", sourceIds: ["notion-customers"] },
    { label: "Community", value: "140万人", detail: "50超の国に広がる公式community規模。", sourceIds: ["notion-customers"] },
    { label: "日本初期成長", value: "DAU前年比4倍", detail: "2021年の日本語版発表時点。現在の成長率ではない。", sourceIds: ["notion-jp-launch"] },
    { label: "日本営業体制", value: "4 team", detail: "2025年時点の従業員規模別AE 3 teamとRelationship Manager team。", sourceIds: ["notion-japan-sales"] },
    { label: "日本の公開営業求人", value: "2件", detail: "BDRとCommercial Sales Managerを2026年8月11日に公式APIで確認。", sourceIds: ["notion-job-bdr", "notion-job-manager"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "PLGの強さを、AI込みのEnterprise標準へ広げる余地がある", conclusion: "1億ユーザー、国内大手事例、日本データレジデンシーを合わせると、認知獲得より既存利用を全社標準へ変えるupmarketが日本成長の中心とみます。", confidence: "高", evidence: ["1億ユーザー・Fortune 100の62%が利用", "日本営業4 team", "2026年に日本データレジデンシー"], counterSignals: ["日本のARR・有料顧客数は非公開", "AIを含む製品別の日本採用率は未開示"], interviewQuestions: ["日本で最も拡張率の高い入口workflowは何か", "free/team利用からEnterprise化する標準conversion rateは"], sourceIds: ["notion-customers", "notion-japan-sales", "notion-data-residency"] },
    { topic: "SALES MOTION", title: "product signalをworkflow仮説へ変えるbuilder-led sales", conclusion: "BDR求人はICP・intent・workflow fitを重視し、manager求人はPLGとsales-ledの統合とupmarketを要求。大量接触より、既存利用の文脈を企業課題へ翻訳する力が重要です。", confidence: "高", evidence: ["BDRがsignal/dataでaccountを優先", "Commercial teamが新規・拡張・更新をfull cycleで担当", "PLGとsales-led双方の経験をmanager要件に設定"], counterSignals: ["marketing・community・product由来pipelineの比率は非公開", "role間のaccount ownershipは求人から不明"], interviewQuestions: ["self-source、product signal、marketing由来pipelineの比率は", "BDRからAEへのhandoffと受注creditはどう設計されるか"], sourceIds: ["notion-job-bdr", "notion-job-manager", "notion-japan-sales"] },
    { topic: "QUOTA ATTAINABILITY", title: "brandではなくsegment定義とEnterprise化の再現性を見る", conclusion: "強い認知は入口になるが、日本のquota、達成率、平均ACV、sales cycleは非公開。Commercialの企業規模と既存free workspaceの質で達成難度が変わります。", confidence: "探索中", evidence: ["Commercial managerを採用", "日本営業は規模別team", "国内で定量成果を持つ導入事例"], counterSignals: ["日本teamのquota達成率は未開示", "検索に残る終了求人を現行採用と誤認しやすい"], interviewQuestions: ["fully-ramped AE/BDRの直近4四半期の達成者比率は", "Commercialのaccount数、平均ACV、sales cycle、white spaceは"], sourceIds: ["notion-job-manager", "notion-japan-sales", "notion-toyota", "notion-uzabase"] },
    { topic: "COMPENSATION", title: "日本固有の報酬は未確認。private equityの条件まで分けて見る", conclusion: "日本求人に基本給、OTE、Pay Mix、equityの記載はありません。提示額だけでなくquota、達成中央値、ramp保証と非公開株式の条件を確認すべきです。", confidence: "探索中", evidence: ["日本の2求人に給与レンジ記載なし", "Notionは非公開企業"], counterSignals: ["equityが付与される可能性はあるが日本roleの条件は未確認", "外資SaaS相場は個社の実支給を示さない"], interviewQuestions: ["base/variable、team quota、accelerator、ramp保証は", "equityの株数、行使価格、vesting、流動性条件は"], sourceIds: ["notion-job-bdr", "notion-job-manager", "notion-careers"] },
    { topic: "CULTURE / CAREER", title: "日本のscale-upで、GTMの型づくりに関われる可能性", conclusion: "日本初期社員がAPAC GMとなり、営業を4 teamへ広げた経緯とbuilderを求める求人から、完成したprocessの運用より自ら仕組みを作る人に合いそうです。", confidence: "中", evidence: ["日本1人目社員がAPAC GM", "Commercial managerにupmarketとcross-functional設計を要求", "BDRにworkflow-firstのbuilder姿勢を要求"], counterSignals: ["日本teamの離職・昇進実績は非公開", "managerやsegmentによる文化差は公開情報で判断できない"], interviewQuestions: ["直近12カ月の昇進・離職とmanager spanは", "日本で決められるpricing、campaign、product feedbackの範囲は"], sourceIds: ["notion-japan-sales", "notion-job-manager", "notion-job-bdr"] },
  ],
  cultureNotes: { organizationReadTitle: "productの人気に乗るだけでなく、workflowとGTMを作るbuilder文化。", hypothesis: { title: "透明な文書化と速い実験を両立する人が合いそう。", body: "Notion自身がknowledgeとprojectを一つのworkspaceで運営する製品会社で、日本求人もclear handoff、forecast、cross-functional collaborationを重視する。個人技より、仮説・判断・学びを文書化してteamへ再利用できる動きが評価されそうです。" }, careerValue: { title: "PLGからEnterpriseへの拡張を実績にできる。", body: "既存利用signalをpipelineへ変え、AI workspaceを全社標準へ広げる経験は希少。ただし昇進率やquota再現性は非公開で、配属teamの実績確認が必要です。", confidence: "中" } },
  customerProof: [
    { company: "トヨタ自動車 Frontier Research Center", products: "Notion workspace", outcome: "情報共有と承認workflowを集約し、承認までの時間を3倍高速化。", implication: "大企業でも、文書・意思決定のcycle timeを定量Business Caseにできる。", sourceId: "notion-toyota" },
    { company: "ユーザベース", products: "Notion / Notion AI", outcome: "1,093人が利用。導入6カ月で利用率約80%、現在は90%台後半。70%が情報へ速く到達できると回答。", implication: "全社定着とAI活用を、利用率・探索時間で示せる国内事例。", sourceId: "notion-uzabase" },
    { company: "JR西日本", products: "Wiki / Docs / Projects", outcome: "データ分析組織でonboarding対応時間を50%以上削減し、組織は3年で4人から約50人へ拡大。", implication: "急拡大組織の知識移転と進捗管理を一つのworkflowとして提案できる。", sourceId: "notion-jrwest" },
  ],
  externalSignals: [
    { label: "利用・community規模", value: "1億users / 140万community", detail: "Fortune 100の62%が利用すると公式に掲載。", caveat: "free userを含む全世界値で、ARR・有料席数・日本比率ではありません。", sourceId: "notion-customers" },
    { label: "日本Enterpriseシグナル", value: "営業4 team / data residency", detail: "2025年に日本営業4 team、2026年に日本data residencyを確認。", caveat: "日本の売上、顧客数、quota達成率は非公開です。", sourceId: "notion-japan-sales" },
  ],
  roleLens: { salesMotion: "free・個人・team利用とcommunityから得られるproduct signalを、workflow単位の商談へ変え、CommercialからEnterpriseへupmarketするPLG + sales-led motion。BDRはpipeline創出、Commercial teamは新規・拡張・更新を担う。", compensation: "Notion Japan固有の基本給、OTE、Pay Mix、accelerator、equityは非公開。非公開企業のため、cashとequityを分け、株式条件は流動性まで確認する必要がある。", quota: "BDR/Commercialの目標、平均ACV、達成率、ramp期間は非公開。既存workspaceの有無・利用活性度とsegment定義が達成難度を左右しそう。", collaboration: "BDRからseller/SCへのhandoff、manager求人ではSales、Channel、Customer Success、Deal Desk、Operations、Legalとの連携を明記。全社標準化にはIT/securityと現場championを同時に動かす必要がある。" },
  leadership: { name: "西 勝清", role: "General Manager, APAC", read: "2020年に日本1人目の社員として入社し、日本事業の立ち上げを経てAPACの事業運営を統括。公式Sales Meetupでは日本組織をscale-up phaseと説明している。", sourceId: "notion-japan-sales" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "現在の全世界従業員数を裏付ける公式値は確認できていない。" }, japanHeadcount: { value: "非公開", detail: "日本単体の従業員数は公式に確認できていない。" }, japanOffice: { value: "東京", detail: "現行2求人のlocation。", sourceId: "notion-job-bdr" }, japanSince: { value: "2021年", detail: "日本語版を正式提供。日本初期社員の入社は2020年。", sourceId: "notion-jp-launch" } },
  salesAppeal: { intro: "求人票だけでは見えにくい、Notion Japanで営業する具体的な面白さを公開情報から整理しました。", points: [
    { title: "PLGの利用signalをEnterprise商談へ変えられる", detail: "1億ユーザーと大規模communityを入口に、既存利用の深さ・workflow fit・組織課題を見極めて全社契約へ広げる。ゼロ認知からの営業とは異なるGTMを学べる。", sourceIds: ["notion-customers", "notion-job-bdr", "notion-japan-sales"] },
    { title: "AIを単品ではなく、仕事のcontext上で提案できる", detail: "Agent、Enterprise Search、Meeting NotesをDocs・Wiki・Projectsと同じ権限・contextで動かすため、AI model比較ではなく業務cycle全体を提案対象にできる。", sourceIds: ["notion-ai", "notion-enterprise-search", "notion-projects"] },
    { title: "日本のupmarket playbookづくりに関われる", detail: "営業4 teamと日本data residencyを持ちながら、Commercial leadershipとBDRを同時採用。既存の認知を大企業のgovernance・定着へ変える型づくりに参加できる可能性がある。", sourceIds: ["notion-japan-sales", "notion-data-residency", "notion-job-manager"] },
  ] },
  interviewPrep: { intro: "brandの強さではなく、配属segmentのterritory、product signalの質、全社化のconversionと報酬条件を確認したいポイントです。", questions: [
    { question: "BDR/AEのpipelineはself-source、product signal、marketing、partnerで何%ずつか。", why: "PLGの強さが各roleの実際のpipeline負担をどこまで軽くするかを見る。", sourceIds: ["notion-job-bdr", "notion-japan-sales"] },
    { question: "fully-rampedの直近4四半期のquota達成者比率と中央値は。", why: "ユーザー規模と日本teamの達成再現性を分けて判断する。", sourceIds: ["notion-customers", "notion-job-manager"] },
    { question: "Commercialの企業規模、account数、平均ACV、sales cycle、更新責任は。", why: "同じtitleでもterritoryとfull-cycle責任で難度が大きく変わる。", sourceIds: ["notion-job-manager"] },
    { question: "日本data residencyとAI機能が、security review・win rate・拡張へ与えた実績は。", why: "新しい製品投資が日本で実際に商談を前へ進めているか確認する。", sourceIds: ["notion-data-residency", "notion-ai-security"] },
  ] },
  solutions: [
    { name: "Notion Workspace / Wiki / Docs", valueProp: "文書、knowledge base、databaseを一つのworkspaceに集め、teamの情報作成・共有・検索を標準化する。", url: "https://www.notion.com/ja/product", competitors: "Microsoft 365、Google Workspace、Confluence、各種wiki・document tool。", differentiation: "柔軟なblock/databaseと、同じworkspace上のproject・AIを組み合わせ、利用者自身がworkflowを組み立てられる点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "Notion Projects", valueProp: "project、task、document、knowledgeを同じdatabaseとpageで管理し、進捗と背景情報を分断しない。", url: "https://www.notion.com/ja/product/projects", competitors: "Asana、monday.com、Jira、ClickUp等のwork management製品。", differentiation: "project itemと仕様・議事録・wikiを同じworkspaceで柔軟に接続できる点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "Notion Agent", valueProp: "workspace、接続app、webのcontextを使い、質問回答だけでなく多段階taskの実行まで支援する。", url: "https://www.notion.com/ja/product/ai", competitors: "Microsoft 365 Copilot、Google Gemini for Workspace、汎用AI assistant、AI agent platform。", differentiation: "teamのdocs・database・projectと同じ権限付きcontextで、情報取得からworkspace内の実行へつなぐ点。", retention: "新しいAI機能で、日本の利用・継続率は非公開。" },
    { name: "Enterprise Search", valueProp: "Notionに加えSlack、Google Drive、GitHub等の接続appを横断し、権限を考慮した回答を返す。", url: "https://www.notion.com/ja/product/enterprise-search", competitors: "Glean、Microsoft Search/Copilot、Google Cloud Search、各suite内検索。", differentiation: "検索結果をknowledge workspace、AI、workflowの実行へ同じUIでつなぐ点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "AI Meeting Notes", valueProp: "会議の記録、要約、action itemを自動作成し、既存projectやknowledgeへ残す。", url: "https://www.notion.com/ja/product/ai", competitors: "Zoom AI Companion、Microsoft Teams/Copilot、Otter、Fireflies等。", differentiation: "transcriptを単独保存せず、teamのworkspace・task・databaseへ直接つなげる点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "Enterprise Security / Data Residency", valueProp: "SSO、権限、監査・security controlと、日本国内のdata at rest保管選択肢で全社導入を支える。", url: "https://www.notion.com/blog/notion-expands-data-residency-to-japan-south-korea", competitors: "大手productivity suiteとEnterprise wiki/work management製品。", differentiation: "柔軟なPLG workspaceを、local data residencyとEnterprise管理へ拡張できる点。", retention: "日本data residencyは2026年5月提供開始。日本の継続率は非公開。" },
  ],
  customerStoriesUrl: "https://www.notion.com/ja/customers",
  fitTags: ["PLGからEnterpriseへ広げたい", "AI workspaceを売りたい", "workflow課題を言語化できる", "既存利用signalを活かしたい", "Commercialをupmarketしたい", "日本のGTMを作りたい", "部門横断のchange managementが得意", "private companyのscale-upを楽しめる"],
  comparisonMap: [
    { arena: "AI productivity suite", companies: ["Notion", "Microsoft", "Google"], why: "既存suite内AIか、workspace統合型AIかの比較" },
    { arena: "Knowledge / Enterprise Search", companies: ["Notion", "Atlassian", "Glean"], why: "knowledge作成・検索・権限・AI回答の比較" },
    { arena: "Work Management", companies: ["Notion", "monday.com", "Miro"], why: "project管理と文書・collaborationの統合度を比較" },
  ],
  sources: notionSources,
};

const elevenLabsSources: ResearchSource[] = [
  { id: "eleven-careers", label: "ElevenLabs Careers", url: "https://elevenlabs.io/careers", kind: "企業公式", scope: "組織・働き方・採用一覧", checkedAt: "2026-08-11" },
  { id: "eleven-job-ae", label: "Account Executive, Japan", url: "https://jobs.ashbyhq.com/elevenlabs/ac7cc39a-a58b-4ef2-961a-ca16e060a361", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "eleven-job-am", label: "Account Manager, Japan", url: "https://jobs.ashbyhq.com/elevenlabs/15eb4b53-fdd8-49e6-8c7c-0951f6e40b99", kind: "企業公式", scope: "日本AMの職務・要件", checkedAt: "2026-08-11" },
  { id: "eleven-japan", label: "ElevenLabs日本法人設立", url: "https://elevenlabs.io/blog/elevenlabs-establishes-japanese-subsidiary-elevenlabs-gk", kind: "企業公式", scope: "日本法人・責任者・国内協業", checkedAt: "2026-08-11" },
  { id: "eleven-series-d", label: "ElevenLabs Series D", url: "https://elevenlabs.io/blog/series-d", kind: "企業公式", scope: "資金調達・評価額・ARR", checkedAt: "2026-08-11" },
  { id: "eleven-arr", label: "$500M ARR and new investors", url: "https://elevenlabs.io/blog/500m-arr-and-new-investors", kind: "企業公式", scope: "最新ARR・成長", checkedAt: "2026-08-11" },
  { id: "eleven-docs", label: "ElevenLabs Documentation", url: "https://elevenlabs.io/docs/overview/intro", kind: "企業公式", scope: "製品portfolio・models・languages", checkedAt: "2026-08-11" },
  { id: "eleven-origin", label: "What is ElevenLabs?", url: "https://elevenlabs.io/docs/help-center/other/what-is-eleven-labs", kind: "企業公式", scope: "創業背景・dubbingと言語障壁", checkedAt: "2026-08-11" },
  { id: "eleven-dubbing-v2", label: "Introducing Dubbing v2", url: "https://elevenlabs.io/blog/introducing-dubbing-v2", kind: "企業公式", scope: "従来dubbingの費用・制作工程・多言語化", checkedAt: "2026-08-11" },
  { id: "eleven-agents", label: "ElevenAgents", url: "https://elevenlabs.io/docs/eleven-agents/overview/", kind: "企業公式", scope: "会話型AI agent・統合", checkedAt: "2026-08-11" },
  { id: "eleven-aiuc", label: "AIUC-1 insurance for ElevenAgents", url: "https://elevenlabs.io/blog/aiuc-announcement", kind: "企業公式", scope: "agent利用規模・Fortune 500・安全性", checkedAt: "2026-08-11" },
  { id: "eleven-ailas", label: "AILASとの音声権利保護協業", url: "https://elevenlabs.io/blog/ailas", kind: "企業公式", scope: "日本の音声本人確認・同意", checkedAt: "2026-08-11" },
  { id: "eleven-tbs", label: "TBS KASSOの多言語吹替", url: "https://elevenlabs.io/blog/elevenlabs-establishes-japanese-subsidiary-elevenlabs-gk", kind: "企業公式", scope: "日本の商用利用事例", checkedAt: "2026-08-11" },
  { id: "eleven-deloitte", label: "DeloitteとのEnterprise AI協業", url: "https://elevenlabs.io/blog/elevenlabs-and-deloitte-partner", kind: "企業公式", scope: "contact center導入・partner GTM", checkedAt: "2026-08-11" },
  { id: "eleven-headcount", label: "Field CTO appointment", url: "https://elevenlabs.io/blog/alex-holt-field-cto", kind: "企業公式", scope: "2026年の組織規模", checkedAt: "2026-08-11" },
];

const elevenLabsIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "ElevenLabsは、メディア、ゲーム、教育、顧客対応などの企業が、高品質なAI音声を多言語のコンテンツや会話型エージェントへ組み込むための音声AI基盤。「収録や吹き替えに時間と費用がかかる」「言語や話者を増やしてグローバル展開できない」「顧客対応を自動化すると会話品質が落ちる」といった課題を解決する。音声デモの分かりやすさを入口に、制作工程、海外展開、コンタクトセンターの本番業務へ提案を広げ、技術、事業、権利管理を横断できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "ElevenLabsは2023年に製品を公開した非公開AI企業。2025年末ARR 3.5億ドルから2026年最初の4カ月で5億ドル超へ伸び、2026年2月のSeries Dでは5億ドルを調達し評価額110億ドル。製品は音声生成・認識・cloning・dubbingから、会話型agentとAPI platformへ広がる。日本では2025年4月に初の海外子会社を東京へ設立し、2026年8月時点でAEとAMを採用している。",
    ipoOutlookSummary: "IPOの時期・計画は公式には確認できない。高い評価額と急成長はequityの魅力になりうる一方、非公開株の行使価格、希薄化、流動性、税務を分けて確認する必要がある。",
    genbaVerdict: { headline: "超高速成長のVoice AIを、日本でPoCから本番利用と拡張へ変える局面。", body: "ARR 5億ドル超、300万超のvoice agent、Fortune 500企業の75%超で従業員利用というglobal signalは強い。日本でも法人・責任者・TBS事例・権利保護partner・2営業求人を確認できる。一方、日本のARR、顧客数、quota達成率、agentの本番KPIは非公開。AEはself-source、AMはagent設計とNRRまで負い、成長市場でも役割の広さと実装負荷を見極める必要がある。" },
    milestones: [
      { year: "2023", label: "製品を公開", detail: "AI voice platformを立ち上げ、text-to-speechとvoice cloningから利用を拡大。", sourceId: "eleven-series-d" },
      { year: "2025", label: "日本法人を設立", detail: "4月に東京で初の海外子会社ElevenLabs Japan合同会社を設立。", sourceId: "eleven-japan" },
      { year: "2025年末", label: "ARR 3.5億ドル", detail: "公式発表で2025年末ARRを3.5億ドルと更新。", sourceId: "eleven-arr" },
      { year: "2026年2月", label: "Series D / $11B評価", detail: "5億ドルを調達し、評価額110億ドル。", sourceId: "eleven-series-d" },
      { year: "2026年4月", label: "ARR 5億ドル超", detail: "2026年最初の4カ月でARR 5億ドルを突破。", sourceId: "eleven-arr" },
    ],
    growthDrivers: [
      { title: "ARRの急拡大とEnterprise利用", body: "2025年末ARR 3.5億ドルから4カ月で5億ドル超へ成長。300万超のvoice agentとFortune 500企業の75%超での従業員利用を公式に掲げ、developer/self-serveからEnterpriseまで入口が広い。", sourceId: "eleven-arr" },
      { title: "Creative・Agents・APIの三つの製品family", body: "生成音声だけでなく、speech-to-text、dubbing、music、会話型agent、APIへportfolioを拡張。新規導入後に利用量・use case・製品を横へ広げる余地がある。", sourceId: "eleven-docs" },
      { title: "日本法人とlocal ecosystem", body: "東京法人をAsia hubとして設立し、TBS、DOCOMO Innovations、MBC C&I、LLSOLLUとの協業を公表。AILASとはvoice IDとconsentを組み合わせ、音声権利への国内懸念にも対応する。", sourceId: "eleven-japan" },
    ],
    japanGrowth: {
      headline: "初の海外子会社を東京に置き、新規獲得と既存拡張を同時採用。",
      narrative: "2025年4月、ElevenLabsは初の海外子会社としてElevenLabs Japan合同会社を東京に設立し、日本・韓国GMに田村元氏を任命。TBSのKASSOで多言語dubbingを支援し、DOCOMO Innovationsによる技術評価、AILASとの音声ID・consent連携を公表した。2026年8月にはAEとAMを採用し、新規logoと既存顧客のagent設計・NRRを並行して強化している。ただし日本のARR、顧客数、production agent数、従業員数は非公開で、国内の成長率は断定しない。",
      qualitativeSignals: [
        { label: "2025年4月に日本法人", detail: "初の海外子会社を東京へ設立し、Asia expansionのhubと位置づけ。", sourceId: "eleven-japan" },
        { label: "国内の商用・技術・安全性partner", detail: "TBS、DOCOMO Innovations、AILASとの取り組みを公式発表。", sourceId: "eleven-ailas" },
        { label: "日本営業求人2件", detail: "新規AEと、agent設計・NRRを持つAMを公式APIで確認。", sourceId: "eleven-job-ae" },
      ],
      sourceIds: ["eleven-japan", "eleven-job-ae", "eleven-job-am", "eleven-ailas", "eleven-tbs"],
    },
    riskHypotheses: [
      { title: "超高速成長は、日本teamのrole幅とenablement負荷も大きくする", body: "AEはself-source、AMはagent設計・API連携・利用分析・NRRまで担当。製品とmodelの更新が速い中、日本のSolutions、Support、Legal、CS体制が不足すると個人へ負荷が集中する可能性がある。", confidence: "中", evidence: ["AEにself-sourced pipelineを要求", "AMにtechnical designとexpansion quotaを要求", "global headcountは500人超まで拡大"], counterSignal: "Series D資金とDeloitte等のpartnerはEnterprise deliveryを補強できる。", sourceIds: ["eleven-job-ae", "eleven-job-am", "eleven-headcount", "eleven-series-d", "eleven-deloitte"] },
      { title: "音声品質だけでなく権利・安全性・本番運用が購買条件になる", body: "voice cloningとagentは本人同意、なりすまし、data handling、失言、業務systemへの誤操作を伴う。デモ成功後もsecurity・legal・brand reviewで販売cycleが長くなる可能性がある。", confidence: "高", evidence: ["AILASとvoice ID・consentを連携", "AIUC-1で5,000 adversarial simulationとinsuranceを提供", "AM求人がconversation logとperformance監視を要求"], counterSignal: "権利保護とinsuranceを製品化している点は、規制懸念を競争力へ変える材料になる。", sourceIds: ["eleven-ailas", "eleven-aiuc", "eleven-job-am"] },
    ],
    sourceIds: ["eleven-series-d", "eleven-arr", "eleven-japan", "eleven-job-ae", "eleven-job-am", "eleven-aiuc"],
  },
  sellingPlaybook: {
    frameIntro: "ElevenLabsの売り方は「人による音声制作・顧客対応の品質を保ったまま、言語・時間帯・需要量を広げられない」という課題が起点。自然なAI音声のdemoではなく、多言語contentとvoice agentを本番運用し、制作cycle・応答capacity・到達市場を拡大するplatformとして、権利・安全性・human handoffまで含めて提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "TBSは番組KASSOを英語・スペイン語・ポルトガル語へdubbingし、MBC C&IはTTSと効果音をcommercial AI video制作に利用している。既存顧客が買っているのは音声modelそのものではなく、収録・翻訳・再収録の工程を増やさず、元の話者らしさを保ってcontentの到達市場と制作capacityを広げる手段である。" },
      { title: "製品の成り立ちから見る課題", body: "ElevenLabsは、創業者が幼少期に見た海外映画の不自然なdubbingへの違和感から、contentをあらゆる言語・あらゆる声で利用可能にするために始まった。Text to Speech、voice cloning、dubbing、Agentsへ広がった製品の成り立ちは、「翻訳できても声の個性・感情・間が失われ、体験が別物になる」という課題を指し示している。" },
      { title: "外部環境の要求から見る課題", body: "生成AI音声が顧客接点とcommercial contentへ入るほど、企業は自然さだけでなく、本人同意、voice権利、なりすまし対策、誤応答、監査、human escalationを説明する必要がある。AILASとのvoice ID・consent連携や、AIUC-1の5,000回のadversarial simulationとinsuranceは、安全性と権利処理がPoC後の本番調達条件になっていることへの回答と読める。" },
    ],
    narrative: [
      { label: "背景", body: "企業は顧客対応の人材不足・24時間化・多言語化と、video・game・教育contentのglobal展開を同時に求められているが、人による収録・再収録・翻訳・品質確認は言語とvolumeに比例して増える。" },
      { label: "課題", body: "従来工程では応答capacityと公開速度を伸ばしにくい。一方、汎用的なAI音声をそのまま本番へ入れると、不自然な抑揚・latency・誤応答に加え、voice権利、本人同意、brand毀損、監査の問題でLegal・Security・現場の承認が止まる。" },
      { label: "解決策", body: "ElevenCreativeとDubbingで元話者のtone・emotionを保った多言語制作を行い、ElevenAPIとAgentsで音声認識、低latency会話、tool連携、human handoffをworkflowへ組み込む。voice ID・consent、guardrail、monitoring、adversarial testを本番要件として同時に設計する。" },
      { label: "選定の理由", body: "大手cloudのTTSは基盤統合、contact center suiteは運用機能、dubbing専業は制作workflowに強い。ElevenLabsはvoice品質・感情保持・低latency、Creative・API・Agentsの一体性、安全性の仕組みを横断して持ち、TBS等の国内利用を示せる点を選定理由として語りやすい。" },
    ],
    openingHook: "音声の品質と権利・安全性を落とさず、対応できる顧客数や公開できる言語を2倍にするとしたら、今の人手工程のどこが最初に限界になりますか。",
    valueHypothesis: "TBSが一つの番組を3言語へ展開した国内事例を入口に、contentでは制作時間・言語数・視聴可能市場、agentでは応答率・完了率・待ち時間・cost・CSATをbaseline化する。限定workflowで品質と安全性を確認し、production利用量、言語、channel、Creative・Agents・APIの順に拡張する。",
    commonObjection: { objection: "日本語品質、誤応答、voice権利のriskがあるため、本番の顧客接点やcommercial contentには使えない。", reframe: "全面自動化か不採用かの二択にせず、human handoffを残した限定workflowで、品質KPIと停止条件を先に合意する。voice ID・consent、adversarial test、monitoring、auditを調達要件へ組み込み、人手運用とのriskとcostを同じ基準で比較する。" },
  },
  facts: [
    { label: "ARR", value: "$500M超", detail: "2026年最初の4カ月で突破。2025年末は$350M。", sourceIds: ["eleven-arr"] },
    { label: "Series D", value: "$500M / 評価額$11B", detail: "2026年2月の公式発表。", sourceIds: ["eleven-series-d"] },
    { label: "Voice agents", value: "300万超", detail: "2026年2月時点の公式発表。production比率・日本比率は非公開。", sourceIds: ["eleven-aiuc"] },
    { label: "Enterprise利用signal", value: "Fortune 500の75%超", detail: "該当企業の従業員がElevenLabs技術を利用。企業契約率を意味しない。", sourceIds: ["eleven-aiuc"] },
    { label: "グローバル組織", value: "500人超", detail: "2026年6月の公式blog時点。", sourceIds: ["eleven-headcount"] },
    { label: "日本の公開営業求人", value: "2件", detail: "AEとAMを2026年8月11日に公式APIで確認。", sourceIds: ["eleven-job-ae", "eleven-job-am"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "Voice modelからEnterprise agent platformへ拡張するhypergrowth", conclusion: "ARR 5億ドル超と300万agentは需要の強さを示す。Creative・Agents・APIの三方向を持ち、日本では新規と拡張を同時採用しているため、単品音声生成より本番workflowのplatform化が成長軸とみます。", confidence: "高", evidence: ["2026年4月にARR 5億ドル超", "300万超のvoice agent", "AEとAMを日本で同時採用"], counterSignals: ["日本のARR・production顧客数は非公開", "agent数は有料・本番のみとは限らない"], interviewQuestions: ["日本でproduction化が進む上位3 use caseは", "Creative、Agents、API別の日本pipelineとNRRは"], sourceIds: ["eleven-arr", "eleven-aiuc", "eleven-job-ae", "eleven-job-am", "eleven-docs"] },
    { topic: "SALES MOTION", title: "AEのself-sourceとAMのtechnical expansionをつなぐ", conclusion: "AEが新規pipelineを自ら作り、AMがagent設計・利用改善・multiproduct adoption・NRRを持つ。new logoの契約より、本番利用量と拡張までが一連のsales motionです。", confidence: "高", evidence: ["AEにself-sourced pipelineを明記", "AMにexpansion quotaとNRR ownership", "AMがAPI/SDKとagent flowを設計"], counterSignals: ["renewal、Solutions、Supportとの役割境界は不明", "usage-based revenueのcredit ruleは未開示"], interviewQuestions: ["AE/AM/Solutionsのhandoffとaccount ownershipは", "契約、usage、renewal、cross-sellのquota creditはどう分かれるか"], sourceIds: ["eleven-job-ae", "eleven-job-am"] },
    { topic: "QUOTA ATTAINABILITY", title: "全社ARRより、日本のproduction conversionを確認したい", conclusion: "global成長は強いが、日本のquota達成率、平均ACV、sales cycle、PoC-to-production率は非公開。voice品質のdemoからintegration・security・legalを越える力が達成を左右します。", confidence: "探索中", evidence: ["日本法人設立から約1年", "TBSの国内事例", "AE/AMを同時採用"], counterSignals: ["全社ARRは短期間で大幅成長", "Deloitte等のpartnerがEnterprise実装を補強"], interviewQuestions: ["fully-rampedの達成者比率、平均ACV、sales cycleは", "PoC-to-production率と、最も多い失注・停滞理由は"], sourceIds: ["eleven-arr", "eleven-japan", "eleven-tbs", "eleven-deloitte", "eleven-job-ae"] },
    { topic: "COMPENSATION", title: "日本報酬は未確認。usage creditとequityを分けて見る", conclusion: "日本求人に給与、OTE、Pay Mix、equityの記載はありません。高速成長や評価額ではなく、quota計上ルール、ramp保証、同teamの実支給と株式条件で判断すべきです。", confidence: "探索中", evidence: ["日本2求人に給与レンジ記載なし", "ElevenLabsは非公開企業", "AMはNRRとexpansion quotaを持つ"], counterSignals: ["Series Dの大型調達は採用投資余力のsignal", "equity付与の可能性はあるが日本条件は未確認"], interviewQuestions: ["base/variable、quota、accelerator、ramp保証は", "usage増、renewal、multiproductのcreditとequity条件は"], sourceIds: ["eleven-job-ae", "eleven-job-am", "eleven-series-d"] },
    { topic: "CULTURE / CAREER", title: "remote・high ownershipで、技術と商売の境界を越える", conclusion: "30超の国でremote/asynchronousに働き、AEは市場開拓、AMはagent設計まで持つ。役割の境界を待たず、英語でglobal product teamと動ける人ほど機会を得やすそうです。", confidence: "中", evidence: ["careersでremote・asynchronous・high ownershipを掲げる", "日本AEにproduct intuitionを要求", "日本AMにtechnical integrationを要求"], counterSignals: ["日本teamのmanager差・昇進・離職は非公開", "広いownershipは支援不足の場合に負荷へ転じる"], interviewQuestions: ["日本teamのmeeting cadence、時差、意思決定範囲は", "直近12カ月の昇進・離職と、Solutions/Supportのcoverageは"], sourceIds: ["eleven-careers", "eleven-job-ae", "eleven-job-am"] },
  ],
  cultureNotes: { organizationReadTitle: "高いownershipで、model・product・顧客運用をつなぐ。", hypothesis: { title: "速さと安全性を同時に扱える人が合いそう。", body: "remote/asynchronousで役割の範囲が広く、製品更新も市場変化も速い。一方、voice AIは権利・安全性・brand riskを伴うため、勢いだけで進めず、仮説・実験・停止条件・学びを文書化できる人が向きそうです。" }, careerValue: { title: "AI agentを本番KPIとNRRまで持つ経験。", body: "音声modelのdemoではなく、API統合、agent運用、安全性、利用量拡大まで経験できれば希少性が高い。ただし日本のenablementと役割分担は面接確認が必要です。", confidence: "中" } },
  customerProof: [
    { company: "TBS", products: "ElevenLabs Dubbing", outcome: "video game番組KASSOを英語、スペイン語、ポルトガル語へdubbingし、global audienceへ展開。", implication: "日本発contentの多言語化を、制作速度と海外配信のBusiness Caseにできる。", sourceId: "eleven-tbs" },
    { company: "DOCOMO Innovations", products: "ElevenLabs voice technology", outcome: "日本法人発表で技術評価を実施した企業として公表。production導入や定量成果は非公開。", implication: "通信・Enterpriseで評価対象になる一方、検証と本番導入を分けて見る必要がある。", sourceId: "eleven-japan" },
    { company: "AILAS", products: "Voice ID / consent + ElevenLabs", outcome: "本人確認済みvoice IDと同意情報をElevenLabsのAI音声作成workflowへ接続する協業を発表。", implication: "日本市場のvoice権利・同意を、導入障壁ではなくgovernance提案へ変える材料。", sourceId: "eleven-ailas" },
  ],
  externalSignals: [
    { label: "成長signal", value: "ARR $500M超", detail: "2025年末$350Mから2026年4月までに$500M超。Series D評価額は$11B。", caveat: "全世界値で、日本の売上・営業生産性ではありません。", sourceId: "eleven-arr" },
    { label: "agent adoption signal", value: "300万agents", detail: "Fortune 500の75%超で従業員利用と公式発表。", caveat: "agentの有料・production比率と、日本比率は開示されていません。", sourceId: "eleven-aiuc" },
  ],
  roleLens: { salesMotion: "AEが日本のnew logoとself-sourced pipelineを作り、AMがagent設計・利用改善・NRR・multiproduct expansionを担う。契約締結より、production化とusage拡大までが成長モーション。", compensation: "日本固有の基本給、OTE、Pay Mix、accelerator、equityは非公開。usage-based productでは契約額・消費量・更新・cross-sellのcredit定義が実支給を左右する。", quota: "AE/AMのquota、達成率、平均ACV、rampは非公開。PoC-to-production率、usage forecast、technical/legal reviewの期間をteam実績で確認したい。", collaboration: "AEはGrowth、AMは顧客のtechnical teamと連携。実運用ではSolutions、Product、Engineering、Support、Legal/Safety、partnerを束ね、agentの品質・統合・governance・KPIを同時に管理する必要がある。" },
  leadership: { name: "田村 元 (Hajime Jim Tamura)", role: "General Manager, Japan & Korea", read: "2025年4月の日本法人設立時に就任。SAP Japan、NetSuite Japan、Microsoft、Asana Japan等で日本GTMを率いた経歴を公式発表し、日本をAsia expansionのhubと位置づけている。", sourceId: "eleven-japan" },
  companyStats: { globalHeadcount: { value: "500人超", detail: "2026年6月の公式blog時点。", sourceId: "eleven-headcount" }, japanHeadcount: { value: "非公開", detail: "日本単体の従業員数は公式に確認できていない。" }, japanOffice: { value: "東京 / remote求人", detail: "日本法人本拠は東京。営業2求人はJapan remote。", sourceId: "eleven-japan" }, japanSince: { value: "2025年4月", detail: "ElevenLabs Japan合同会社を初の海外子会社として設立。", sourceId: "eleven-japan" } },
  salesAppeal: { intro: "求人票だけでは見えにくい、ElevenLabs Japanで営業する具体的な面白さを公開情報から整理しました。", points: [
    { title: "急成長するAI categoryを、日本で市場開拓できる", detail: "ARR 5億ドル超のglobal demandを背景に、設立約1年の日本法人でnew logoとindustry use caseを作る。完成したterritoryより市場定義に近い営業経験になりうる。", sourceIds: ["eleven-arr", "eleven-japan", "eleven-job-ae"] },
    { title: "AI demoをproduction KPIへ変える経験", detail: "Agentはconversation flow、tool integration、voice、log分析まで対象。応答率、完了率、cost、CSAT等を改善し、利用量とNRRへつなげる技術・commercial両面の経験を積める。", sourceIds: ["eleven-agents", "eleven-job-am"] },
    { title: "安全性と権利保護を含めたEnterprise提案", detail: "AILASとのvoice ID・consent、AIUC-1 insuranceとadversarial simulationを持ち、AI riskを避けるだけでなく導入条件として設計できる。", sourceIds: ["eleven-ailas", "eleven-aiuc"] },
  ] },
  interviewPrep: { intro: "全社ARRの勢いより、日本のterritory、production conversion、usage credit、技術支援体制を確認したいポイントです。", questions: [
    { question: "日本のAE/AMでfully-rampedのquota達成者比率、平均ACV、sales cycleは。", why: "global ARRと日本teamの達成再現性を分けて判断する。", sourceIds: ["eleven-arr", "eleven-job-ae", "eleven-job-am"] },
    { question: "AEのself-source比率と、PoC-to-production率、主な停滞理由は。", why: "認知・demo需要が継続売上へ変わる実態を見る。", sourceIds: ["eleven-job-ae", "eleven-aiuc"] },
    { question: "AM、Solutions、Support、Productの導入・障害・renewal責任はどう分かれるか。", why: "technical designとcommercial ownershipが一人へ集中しないか確認する。", sourceIds: ["eleven-job-am", "eleven-agents"] },
    { question: "契約額、usage、renewal、multiproduct expansionのquota creditとforecast方法は。", why: "usage-based businessで実支給と達成管理を理解する。", sourceIds: ["eleven-job-am", "eleven-docs"] },
  ] },
  solutions: [
    { name: "ElevenAgents", valueProp: "voice/chatの会話型AIを作り、knowledge、tool、workflow、telephonyへ接続して顧客対応を自動化する。", url: "https://elevenlabs.io/docs/eleven-agents/overview/", competitors: "Google Dialogflow/CCAI、Amazon Connect、Genesys、Twilio、OpenAI等のagent/voice stack。", differentiation: "高品質なvoice modelとlow-latency conversation、agent orchestration、tool integrationを同じplatformで扱う点。", retention: "製品別・日本別のNRRは非公開。" },
    { name: "Text to Speech / ElevenAPI", valueProp: "多言語・表現豊かな音声をAPIまたはUIで生成し、app、media、accessibility、agentへ組み込む。", url: "https://elevenlabs.io/ja/text-to-speech", competitors: "Google Cloud TTS、Amazon Polly、Azure AI Speech、OpenAI、音声合成専業製品。", differentiation: "自然さ、speaker表現、multilingual modelとdeveloper APIを一つのplatformで提供。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "Speech to Text / Scribe", valueProp: "音声を文字起こしし、speaker diarizationやtimestampを含めてagent、media、分析workflowへ渡す。", url: "https://elevenlabs.io/ja/speech-to-text", competitors: "OpenAI Whisper、Google Speech-to-Text、AWS Transcribe、Deepgram等。", differentiation: "生成・認識・agentを同一platform/APIで組み合わせ、voice workflowをend-to-endで作れる点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "Voice Cloning", valueProp: "本人の同意を前提にvoiceを再現し、brand voice、creator、localization、personalized experienceへ使う。", url: "https://elevenlabs.io/ja/voice-cloning", competitors: "Resemble AI、PlayHT、Azure Custom Neural Voice等。", differentiation: "短いsampleからの作成、multilingual表現と広い生成・agent platformへの接続。", retention: "製品別・日本別の継続率は非公開。権利・同意が購買条件。" },
    { name: "Dubbing Studio", valueProp: "video/audioを多言語へ翻訳・吹替し、speakerの声質と表現を保ちながらglobal配信を速める。", url: "https://elevenlabs.io/ja/dubbing-studio", competitors: "従来の翻訳・収録studio、HeyGen、Papercup等のAI localization。", differentiation: "90超の言語・accentとvoice preservation、編集workflowを組み合わせる点。", retention: "製品別・日本別の継続率は非公開。" },
    { name: "ElevenCreative", valueProp: "voice、music、sound effect、dubbing等をcontent制作環境として提供し、企画から多言語展開までのcycleを短縮する。", url: "https://elevenlabs.io/", competitors: "音声・music・videoの個別生成toolと従来制作studio。", differentiation: "複数のgenerative audio機能とlicensed voice ecosystemを一つの制作platformで扱う点。", retention: "製品別・日本別の継続率は非公開。" },
  ],
  customerStoriesUrl: "https://elevenlabs.io/customer-stories/agents",
  fitTags: ["Voice AIを売りたい", "日本市場を新規開拓したい", "self-sourceが得意", "AI agentの技術対話ができる", "API/SDKに抵抗がない", "usage expansionを作りたい", "remote・asynchronousで自走できる", "AI safetyを商談に組み込める"],
  comparisonMap: [
    { arena: "Voice AI API", companies: ["ElevenLabs", "OpenAI", "Google Cloud"], why: "音声品質・latency・model/API・価格の比較" },
    { arena: "Conversational AI / Contact Center", companies: ["ElevenLabs", "Genesys", "Twilio"], why: "agent orchestration、telephony、Enterprise運用の比較" },
    { arena: "AI Dubbing / Content", companies: ["ElevenLabs", "HeyGen", "従来制作会社"], why: "voice preservation、多言語化速度、編集・権利管理の比較" },
  ],
  sources: elevenLabsSources,
};

const rubrikSources: ResearchSource[] = [
  { id: "rubrik-careers", label: "Rubrik Sales Careers", url: "https://www.rubrik.com/company/careers/departments/sales", kind: "企業公式", scope: "日本の公開求人一覧", checkedAt: "2026-08-11" },
  { id: "rubrik-job-midmarket", label: "Mid Market Account Executive | Tokyo", url: "https://www.rubrik.com/company/careers/departments/job.8014986.54284?reqId=11055", kind: "企業公式", scope: "東京AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "rubrik-fy26", label: "Rubrik FY2026通期決算", url: "https://ir.rubrik.com/news-events/press-releases/news-details/2026/Rubrik-Reports-Fourth-Quarter-and-Fiscal-Year-2026-Financial-Results/default.aspx", kind: "企業公式", scope: "業績・ARR・顧客数", checkedAt: "2026-08-11" },
  { id: "rubrik-q1fy27", label: "Rubrik Q1 FY2027決算", url: "https://ir.rubrik.com/financials/quarterly-results/default.aspx", kind: "企業公式", scope: "最新ARR・成長率", checkedAt: "2026-08-11" },
  { id: "rubrik-10k", label: "Rubrik FY2026 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm", kind: "法定開示", scope: "製品・GTM・競合・人員・財務・事業リスク", checkedAt: "2026-08-11" },
  { id: "rubrik-platform", label: "Rubrik Security Cloud", url: "https://www.rubrik.com/products", kind: "企業公式", scope: "プラットフォーム・対象Buyer・攻撃前後の価値", checkedAt: "2026-08-11" },
  { id: "rubrik-data-protection", label: "Rubrik データ保護", url: "https://www.rubrik.com/ja/products/data-protection", kind: "企業公式", scope: "イミュータブル保護・クラウド・SaaS・復旧", checkedAt: "2026-08-11" },
  { id: "rubrik-threat-analytics", label: "Rubrik Data Threat Analytics", url: "https://www.rubrik.com/products/data-threat-analytics", kind: "企業公式", scope: "異常検知・脅威ハンティング・監視", checkedAt: "2026-08-11" },
  { id: "rubrik-command-center", label: "Rubrik Data Security Command Center", url: "https://www.rubrik.com/products/data-security-command-center", kind: "企業公式", scope: "データリスクの可視化・改善提案", checkedAt: "2026-08-11" },
  { id: "rubrik-identity", label: "Rubrik Identity Recovery", url: "https://www.rubrik.com/products/identity-recovery", kind: "企業公式", scope: "AD・Entra ID・Oktaの保護と復旧", checkedAt: "2026-08-11" },
  { id: "rubrik-saas", label: "Rubrik SaaS Data Protection", url: "https://www.rubrik.com/products/saas-data-protection", kind: "企業公式", scope: "Microsoft 365等のSaaSデータ保護", checkedAt: "2026-08-11" },
  { id: "rubrik-agent-cloud", label: "Rubrik Agent Cloud", url: "https://www.rubrik.com/products/rubrik-agent-cloud", kind: "企業公式", scope: "AIエージェントの監視・統制・巻き戻し", checkedAt: "2026-08-11" },
  { id: "rubrik-japan-leader", label: "Rubrik Japan新営業最高責任者就任", url: "https://www.rubrik.com/ja/company/newsroom/press-releases/24/rubrik-named-new-chief-sales-officer-of-japan-announcement-of-the-appointment-of-yuki-takayama", kind: "企業公式", scope: "日本営業リーダー・パートナー方針", checkedAt: "2026-08-11" },
  { id: "rubrik-nec", label: "NEC導入事例", url: "https://www.rubrik.com/ja/customers/nec", kind: "企業公式", scope: "国内顧客・導入成果", checkedAt: "2026-08-11" },
  { id: "rubrik-nttdata", label: "NTTデータグループ導入事例", url: "https://www.rubrik.com/content/dam/rubrik/ja/resources/case-study/ntt-data.pdf", kind: "企業公式", scope: "国内顧客・導入規模", checkedAt: "2026-08-11" },
  { id: "rubrik-gree", label: "グリー導入事例", url: "https://www.rubrik.com/ja/customers/gree", kind: "企業公式", scope: "国内顧客・運用効率化", checkedAt: "2026-08-11" },
  { id: "rubrik-lixil", label: "LIXIL導入事例", url: "https://www.rubrik.com/content/dam/rubrik/ja/resources/case-study/rubrik-lixil.pdf", kind: "企業公式", scope: "国内顧客・復旧時間・BCP", checkedAt: "2026-08-11" },
  { id: "rubrik-shinshu", label: "信州大学医学部附属病院導入事例", url: "https://www.rubrik.com/ja/customers/shinshu-university-hospital", kind: "企業公式", scope: "医療・復旧操作・事業継続", checkedAt: "2026-08-11" },
  { id: "rubrik-partners", label: "Rubrik Japan Partner Award 2026", url: "https://www.rubrik.com/ja/blog/company/26/5/rubrik-japan-partner-award-announcement", kind: "企業公式", scope: "日本のパートナーエコシステム", checkedAt: "2026-08-11" },
  { id: "rubrik-customers", label: "Rubrikお客様事例", url: "https://www.rubrik.com/ja/customers/all-customers", kind: "企業公式", scope: "国内導入事例一覧", checkedAt: "2026-08-11" },
];

const rubrikIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Rubrikは、企業のIT・セキュリティ部門が、ランサムウェアや誤操作で失われたデータとIDを安全に復旧するためのサイバーレジリエンス基盤。「バックアップはあるが攻撃後に戻せるか分からない」「どのデータが侵害されたか特定できない」「復旧手順が部門ごとに分断し事業再開が遅れる」といった課題を解決する。バックアップ製品の更改ではなく、CISOや経営層と事業停止リスクを定量化し、攻撃前の備えから復旧訓練まで全社課題として提案できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: true,
    ticker: "RBRK",
    exchange: "NYSE",
    listedSince: "2024年4月",
    stockLinkUrl: "https://ir.rubrik.com/stock-info/stock-quote/default.aspx",
    growthSummary: "2014年創業、2024年4月にNYSEへ上場。従来のバックアップから、データ保護・脅威分析・ID復旧・AIエージェント運用まで対象を広げている。FY2026売上高は13.16億ドル(前年比48%増)、2026年4月末のSubscription ARRは15.7億ドル(同32%増)。日本では創立10周年、複数業界の導入事例、東京AE採用、パートナー表彰を確認できる。ただし日本単体の売上・ARR・人員は非公開で、国内成長率は断定できない。",
    genbaVerdict: {
      headline: "成長率だけでなく、バックアップから「事業を戻す基盤」へ売上の入口を増やしている会社。",
      body: "Subscription ARR 15.7億ドル、FY2026の平均Subscription DBNRR 120%超、Cloud ARR 48%増は、新規獲得だけでなく既存顧客で保護対象・データ量・セキュリティ製品を広げるland-and-expandが機能している証拠。一方、FY2026はGAAP最終赤字で、売上の大半がチャネルを通る構造でもある。営業候補者は、成長の追い風だけでなく、複雑な技術評価とパートナー共同販売をやり切れるかで見るべき。",
    },
    milestones: [
      { year: "2014", label: "創業", detail: "Bipul Sinha氏らが創業。クラウドデータ管理から事業を開始。", sourceId: "rubrik-fy26" },
      { year: "2016", label: "日本法人を創立", detail: "2026年の公式Partner Awardで「Rubrik Japan創立10周年」と公表。", sourceId: "rubrik-partners" },
      { year: "2024", label: "NYSE上場", detail: "2024年4月にティッカーRBRKで上場。", sourceId: "rubrik-fy26" },
      { year: "FY2026", label: "クラウド移行と拡張が進展", detail: "売上高13.16億ドル、Subscription ARR 14.6億ドル、Cloud ARR 12.93億ドル。", sourceId: "rubrik-10k" },
      { year: "2026", label: "Data・Identity・AIへ拡張", detail: "2月にRubrik Agent Cloudを商用化し、AIエージェントの監視・統制・修復へ製品領域を拡張。", sourceId: "rubrik-agent-cloud" },
    ],
    growthDrivers: [
      { title: "DBNRR 120%超を支えるland-and-expand", body: "10-Kは、enterprise、非構造化データ、cloud、SaaS、identity providerの5つを最初の導入入口として説明。導入後は、既存アプリのデータ量、新しいアプリ、追加のデータセキュリティ製品という3方向へ拡張する。FY2026の平均Subscription DBNRRが120%超だったことは、この拡張モーションが全社成長を支えている証拠になる。", sourceId: "rubrik-10k" },
      { title: "Cloud ARR 48%増とsubscriptionへの移行", body: "FY2026のCloud ARRは12.93億ドルで前年比48%増、Subscription ARRは14.6億ドルで34%増。新規・既存顧客の多くがRubrik Security Cloudを採用し、legacy CDMからRSCへの移行も概ね完了した。FY2027 Q1もSubscription ARR 15.7億ドル、売上高39%増と成長が継続している。", sourceId: "rubrik-10k" },
      { title: "データ保護からIdentity・AIへ予算の入口を拡張", body: "Rubrik Security CloudはData Protection、Cyber Recovery、Identity Securityを一つのplatformで扱い、2026年2月にはRubrik Agent Cloudを商用化した。バックアップ更新だけでなく、CISO向けのdata risk、identity recovery、AI agent governanceへ提案領域を広げられる一方、営業には複数Buyerへの価値翻訳が求められる。", sourceId: "rubrik-agent-cloud" },
    ],
    japanGrowth: {
      headline: "2016年の日本法人創立から10年。財務は非公開だが、大規模顧客・チャネル・営業採用の3点は確認できる。",
      narrative: "Rubrik Japanは2026年に創立10周年を迎えた。日本単体の売上、ARR、従業員数、顧客数は公式・法定開示で確認できないため、グローバルの32〜48%成長を日本へそのまま当てはめることはできない。一方、NECはhybrid multi-cloudの2.7PBへ適用し、NTTデータグループは国内約70社・8万ユーザーの基盤を更新。グリー、LIXIL、信州大学医学部附属病院まで、製造・ITサービス・ゲーム・医療に事例が広がっている。2024年にはServiceNow Japan・SAPジャパンで営業責任者を歴任した高山勇喜氏が営業最高責任者へ就任し、国内パートナーとの協業強化を明示。2026年のPartner AwardではCTC、JBS、NECセキュリティ、ノックス等を案件創出・大型成約・新規パートナー・サービスの役割別に表彰している。東京Mid Market AEの求人もSDR、channel、distributor、VARとの連携を明記しており、日本のGTMは直販単独ではなくpartnerとの共同販売を前提に動いている、というのがGenbaの読み。",
      qualitativeSignals: [
        { label: "2016年創立、2026年に日本法人10周年", detail: "日本単体の財務・人員は非公開だが、国内事業の継続期間は確認できる。", sourceId: "rubrik-partners" },
        { label: "NEC・NTTデータ・LIXIL等の大規模導入", detail: "製造、ITサービス、ゲーム、医療まで公式事例が広がる。", sourceId: "rubrik-customers" },
        { label: "Partner Awardと東京AE採用を同時に確認", detail: "案件創出・成約・導入支援をpartnerと分担するGTM。", sourceId: "rubrik-job-midmarket" },
      ],
      sourceIds: ["rubrik-partners", "rubrik-job-midmarket", "rubrik-customers", "rubrik-japan-leader"],
    },
    riskHypotheses: [
      { title: "日本の成長性は、公開事例の厚さと数値開示の薄さを分けて見る", body: "国内の大規模事例、創立10周年、partner活動、東京AE採用は確認できる一方、日本単体の売上、ARR、顧客数、従業員数、quota達成率は非公開。グローバルの高成長を日本の営業機会へそのまま置き換えることはできない。", confidence: "中", evidence: ["製造・ITサービス・ゲーム・医療の公式事例を確認", "Partner Awardと東京Mid Market AE採用を確認", "日本単体の財務・人員・営業生産性KPIは未開示"], counterSignal: "NEC 2.7PB、NTTデータグループ約70社・8万ユーザー、LIXILの復旧時間半減見込みは、国内で大型案件を実行できる顧客・partner基盤があることを示す。", sourceIds: ["rubrik-nec", "rubrik-nttdata", "rubrik-lixil", "rubrik-job-midmarket", "rubrik-partners"] },
      { title: "チャネル依存と長い技術評価が、成長市場でもquotaの再現性を左右する", body: "10-KではFY2026売上の約68%を上位3社のChannel Partnerと関連会社が生成し、大企業案件では長い評価・テスト・監査・統合・価格交渉が発生すると説明している。グローバル値で日本の構成は不明だが、AEにはpipeline創出だけでなく、partnerの案件登録・役割分担・導入品質とPoC後の事業稟議を管理する力が求められる。", confidence: "中", evidence: ["売上の大半がChannel Partner経由", "上位3社と関連会社がFY2026売上の約68%を生成", "Enterprise案件で長い販売サイクルと広範な技術評価"], counterSignal: "日本ではCTC、JBS、NECセキュリティ、ノックス等が案件創出・大型成約・新規partner・serviceで役割別に表彰されており、共同販売を支える実働実績はある。", sourceIds: ["rubrik-10k", "rubrik-partners", "rubrik-job-midmarket"] },
    ],
    sourceIds: ["rubrik-fy26", "rubrik-q1fy27", "rubrik-10k", "rubrik-partners"],
  },
  sellingPlaybook: {
    frameIntro: "Rubrikの売り方は「バックアップは取得しているが、サイバー攻撃後にクリーンなデータとIDを、事業の優先順に戻せるか証明できていない」という課題が起点。バックアップ製品の更改ではなく、攻撃前のリスク把握、攻撃中の影響分析、攻撃後の復旧を一続きのサイバーレジリエンスとして提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "NECはhybrid multi-cloud環境の2.7PBを保護し、インシデント管理コストを約20%削減。LIXILはランサムウェア被災時のバックアップ健全性と復旧時間を課題に挙げ、想定復旧時間を従来比で半分以下にできる見込みを示している。運用効率と有事の復旧を一つの投資理由にできる。" },
      { title: "製品の成り立ちから見る課題", body: "Rubrikはデータ保護から出発し、Rubrik Security Cloud上でData Threat Analytics、Cyber Recovery、Identity Recoveryへ拡張した。製品の成り立ちそのものが「バックアップの有無」ではなく、侵害範囲を特定し、感染データを隔離してクリーンな状態へ戻すという課題を指し示している。" },
      { title: "外部環境の要求から見る課題", body: "オンプレミス、cloud、SaaS、AD・Entra ID・Oktaへ保護対象が広がり、ITだけでなくCISO、BCP、監査部門も復旧可能性の説明を求める。XDRやSIEMが予防・検知を担っても、重要業務をどの順序で戻すかは別の経営課題として残る。" },
    ],
    narrative: [
      { label: "背景", body: "企業データはオンプレミス、複数cloud、SaaS、identity providerへ分散し、保護ツール・担当・復旧手順も環境ごとに分かれている。" },
      { label: "課題", body: "バックアップの取得には成功していても、攻撃後に侵害範囲とクリーンポイントを特定し、再感染させず重要業務から戻せるかを実測できていない。" },
      { label: "解決策", body: "Rubrik Security Cloudで不変バックアップ、異常検知、影響分析、隔離、data・SaaS・identityの復旧を統合し、平時から復旧計画を検証する。" },
      { label: "選定の理由", body: "NECの2.7PB運用、NTTデータグループ約70社・8万ユーザー、LIXILの想定復旧時間半減など、日本の大規模環境で定量成果を伴う公式事例が選定理由として語りやすい。" },
    ],
    openingHook: "御社では最後に、本番相当の環境で侵害範囲を特定し、クリーンなデータとIDを重要業務の順に戻すところまで演習したのはいつですか。",
    valueHypothesis: "NECでインシデント管理コストを約20%削減し、LIXILで想定復旧時間を従来比半分以下にできる見込みが示された事例を根拠に、平時の運用負荷と有事の停止時間を同じ基盤で下げられる、という価値仮説を立てる。",
    commonObjection: { objection: "既存のバックアップで十分", reframe: "バックアップ成功率ではなく、管理者権限が侵害された前提での不変性、侵害範囲の特定、クリーンポイントの判定、IDを含む復旧順序、実測時間で比較する。現行環境で条件を満たす部分は残し、復旧ギャップだけを提案対象にする。" },
  },
  facts: [
    { label: "FY26売上", value: "$1.316B(約2,066億円)", detail: "前年比48%増。Subscription売上は12.64億ドル、前年比53%増(1ドル=157円換算、2026年8月時点の目安)。", sourceIds: ["rubrik-fy26"] },
    { label: "Subscription ARR", value: "$1.57B(約2,465億円)", detail: "2026年4月30日時点、前年比32%増。Q1 FY2027売上高は3.87億ドル、前年比39%増。", sourceIds: ["rubrik-q1fy27"] },
    { label: "Subscription DBNRR", value: "120%超", detail: "FY2026平均。既存顧客のupsell、contraction、attritionを含む指標。", sourceIds: ["rubrik-10k"] },
    { label: "$100K+ ARR顧客", value: "2,805社", detail: "2026年1月31日時点、前年比25%増。大型顧客への浸透を示す指標。", sourceIds: ["rubrik-fy26", "rubrik-10k"] },
    { label: "グローバル従業員", value: "約3,797人", detail: "2026年1月31日時点の法定開示値。", sourceIds: ["rubrik-10k"] },
    { label: "日本法人・公開求人", value: "2016年創立 / 東京AE 1件", detail: "2026年に創立10周年。Mid Market Account Executiveを公式採用ページで確認。", sourceIds: ["rubrik-partners", "rubrik-careers", "rubrik-job-midmarket"] },
  ],
  hypotheses: [
    {
      topic: "PRODUCT / MARKET",
      title: "売る土台は強い。バックアップからData・Identity・AIへ拡張フェーズにある",
      conclusion: "ARR成長、DBNRR 120%超、日本の大規模事例を合わせると、単品のバックアップ更改より、既存顧客で保護対象とセキュリティ製品を広げる余地が大きいとみます。",
      confidence: "高",
      evidence: ["Q1 FY2027のSubscription ARRは15.7億ドル、前年比32%増", "FY2026の平均Subscription DBNRRは120%超", "NEC 2.7PB、NTTデータグループ約70社・8万ユーザー等の国内事例"],
      counterSignals: ["FY2026はGAAP純損失3.49億ドル", "2026年2月商用化のAgent Cloudは日本での販売実績が未開示"],
      interviewQuestions: ["日本で最も成長しているworkloadと製品は何か", "既存顧客で2製品目・2 workload目へ拡張する標準playbookはあるか"],
      sourceIds: ["rubrik-q1fy27", "rubrik-10k", "rubrik-nec", "rubrik-nttdata", "rubrik-agent-cloud"],
    },
    {
      topic: "SALES MOTION",
      title: "新規と既存拡張の両方を持ち、partnerを動かす力が成果を左右しそう",
      conclusion: "東京求人は新規ロゴと既存成長を同時に担当し、SDR、presales、channel、distributor、VARとの協働を明記。単独ハンターより、複数の社内外関係者を動かせるAE向きです。",
      confidence: "高",
      evidence: ["求人が新規顧客獲得と既存顧客成長の双方を職務に設定", "10-Kは二層の間接販売モデルとland-and-expandをGTMの中核に置く", "国内Partner Awardで案件創出・大型成約・serviceを役割別に表彰"],
      counterSignals: ["日本の直販・partner由来pipeline比率は非公開", "account ownership、quota credit、更新責任の分担は求人から分からない"],
      interviewQuestions: ["自己創出・SDR・partner由来pipelineの比率はどれくらいか", "partner案件の登録、値引き、quota credit、導入責任はどう分かれるか"],
      sourceIds: ["rubrik-job-midmarket", "rubrik-10k", "rubrik-partners"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "全社成長より、日本のテリトリーとPoC後の稟議再現性を見るべき",
      conclusion: "グローバルの成長率は強い一方、日本のquota達成率・平均ACV・sales cycleは非公開。大企業案件は評価・監査・統合・価格交渉が長く、配属territoryと支援体制で達成難度が変わりそうです。",
      confidence: "中",
      evidence: ["10-KがEnterprise案件の長い販売サイクルと広範な評価を明記", "求人がcomplex data center環境とFortune 1000への販売経験を重視", "日本では東京Mid Market AE 1件の採用を確認"],
      counterSignals: ["NEC・NTTデータ・LIXIL等の国内大型事例は、複雑な案件を完遂できる証拠", "会社全体では新規獲得と既存拡張の双方でARRが成長"],
      interviewQuestions: ["fully-ramped AEの直近4四半期のquota達成者比率と中央値は", "担当named account数、white space、平均ACV、PoC期間、主な失注段階は"],
      sourceIds: ["rubrik-10k", "rubrik-job-midmarket", "rubrik-nec", "rubrik-lixil"],
    },
    {
      topic: "COMPENSATION",
      title: "報酬水準は未確認。OTEより先にquotaとcrediting ruleを検証したい",
      conclusion: "Rubrik Japan固有の基本給、OTE、Pay Mix、equity、実支給中央値は公開されていません。外資SaaS相場を個社の確認値に見せず、提示条件と同一teamの達成実績で判断すべきです。",
      confidence: "探索中",
      evidence: ["公式求人に日本の給与レンジ・OTE・Pay Mixの記載なし", "応募フォームは候補者の現在quotaと直近2年のbackup/recovery販売経験を質問"],
      counterSignals: ["NYSE上場企業でequityを含む可能性はあるが、日本ポジションへの付与は未確認", "表示中のOTE相場はsegment別のGenba目安でRubrik固有値ではない"],
      interviewQuestions: ["base / variable、equity、ramp保証、accelerator、実支給中央値は", "新規・既存・partner案件のquota creditとsplit ruleを書面で確認できるか"],
      sourceIds: ["rubrik-job-midmarket", "rubrik-10k"],
    },
    {
      topic: "CULTURE / CAREER",
      title: "インフラ営業を、CIO・CISO向けのサイバーレジリエンスへ広げられそう",
      conclusion: "Data ProtectionだけでなくThreat Analytics、Identity Recovery、Agent Cloudまで扱うため、技術更新を事業停止・監査・顧客信頼へ翻訳する経験を積める可能性があります。",
      confidence: "中",
      evidence: ["会社valueにRelentlessness、Integrity、Velocity、Excellence、Transparency", "求人がpresales・SDR・channel・partnerとのOne Rubrik型協業を明記", "製品範囲がData・Identity・AIへ拡張"],
      counterSignals: ["日本teamのmanager差、昇進実績、在籍年数は公開情報で確認できない", "製品範囲の拡大はenablement負荷と複数Buyer対応の難しさにもなる"],
      interviewQuestions: ["入社後30・60・90日の認定・pipeline・初回受注の期待値は", "同teamの直近12カ月の昇進、離職、managerのspan of controlは"],
      sourceIds: ["rubrik-10k", "rubrik-job-midmarket", "rubrik-platform", "rubrik-agent-cloud"],
    },
  ],
  cultureNotes: {
    organizationReadTitle: "個人の新規開拓だけでなく、社内外の共同販売力を見る。",
    hypothesis: {
      title: "VelocityとTransparencyを、複雑な案件で両立できるか。",
      body: "会社はRelentlessness、Integrity、Velocity、Excellence、Transparencyをvalueに掲げています。東京求人はpresales、SDR、channel、distributor、VARとの協働を反復しており、個人で案件を抱えるより、役割・次アクション・リスクを透明にして周囲を動かす営業が合いそうです。",
    },
    careerValue: {
      title: "インフラ営業を、サイバーレジリエンスへ広げる。",
      body: "Data・Identity・AIへ製品が広がる中で、新規ロゴ、既存拡張、技術検証、partner共同提案を経験できる可能性があります。一方、日本teamの昇進実績やmanager差は面接で確認が必要です。",
      confidence: "中",
    },
  },
  customerProof: [
    { company: "NEC", products: "Rubrikデータレジリエンスプラットフォーム", outcome: "2.7PBへ適用し、セキュリティインシデント管理コストを約20%削減。復旧時間は半分以下となる見込み。", implication: "大規模なhybrid multi-cloudで、平時の運用と有事の復旧を同じBusiness Caseにできる証拠。", sourceId: "rubrik-nec" },
    { company: "NTTデータグループ", products: "Rubrikアプライアンス", outcome: "国内グループ約70社・8万ユーザーのプライベートクラウドバックアップを更新。", implication: "国内の大規模エンタープライズ実績。", sourceId: "rubrik-nttdata" },
    { company: "LIXIL", products: "Rubrik Security Cloud / Threat Monitoring / RRT", outcome: "バックアップからの想定復旧時間を従来比で半分以下へ。24時間の無償復旧支援も選定理由。", implication: "製造業のBCPで、機能・復旧時間・支援体制を一体で評価された証拠。", sourceId: "rubrik-lixil" },
  ],
  externalSignals: [
    { label: "グローバル成長シグナル", value: "ARR $1.57B / +32%", detail: "Q1 FY2027の売上高は前年比39%増、Free Cash Flow marginは19%。", caveat: "グローバル全体の数値で、日本単体の成長率・営業生産性ではありません。", sourceId: "rubrik-q1fy27" },
    { label: "既存拡張シグナル", value: "DBNRR 120%超", detail: "FY2026平均。$100K+ Subscription ARR顧客は2,805社、前年比25%増。", caveat: "maintenanceからsubscriptionへの移行効果を一部含み、日本・製品別の継続率は非公開です。", sourceId: "rubrik-10k" },
  ],
  roleLens: { salesMotion: "Mid-Market担当でも、新規ロゴ獲得と既存顧客の成長を両方持つ。担当アカウント戦略、pipeline生成、complex data center環境での提案を担い、最初のworkloadから追加アプリ・データ量・セキュリティ製品へland-and-expandするモーションが想定される。", compensation: "Rubrik Japan固有の基本給、OTE、Pay Mix、accelerator、equityは公式求人で確認できない。表示する相場値はGenbaのセグメント目安であり、選考時に給与レンジ、変動比率、quota credit、partner案件の配分を確認する必要がある。", quota: "当該ポジションの年間quota、平均ACV、達成率、ramp期間は非公開。応募フォームは現在のquotaを質問しており、即戦力性を測る材料にしていると読める。新規/既存のcredit、複数AE・partnerが関わる案件の配分も確認したい。", collaboration: "プリセールス、SDR、チャネルセールス、ディストリビューター、VARとの協働が職務に明記。10-KもPartner Networkと二層間接モデルをGTMの中核に置くため、AEの価値は単独クロージングだけでなく、技術評価・案件登録・提案役割・導入支援を束ねることにある。" },
  leadership: { name: "高山 勇喜", role: "Rubrik Japan株式会社 常務執行役員 営業最高責任者", read: "2024年3月18日付で就任。公式発表では、ServiceNow Japanのソリューション営業統括、SAPジャパンのHybris事業本部長・営業部長等を歴任し、国内パートナーとの協業強化を掲げている。", sourceId: "rubrik-japan-leader" },
  companyStats: { globalHeadcount: { value: "約3,797人", detail: "2026年1月31日時点のfull-time employee。", sourceId: "rubrik-10k" }, japanHeadcount: { value: "非公開", detail: "公式・法定開示で日本単体従業員数は確認できていない。" }, japanOffice: { value: "東京", detail: "公式求人の拠点表示。", sourceId: "rubrik-careers" }, japanSince: { value: "2016年", detail: "2026年に創立10周年。", sourceId: "rubrik-partners" } },
  salesAppeal: { intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。", points: [
    { title: "インフラ更新を、CIO・CISO向けの経営課題へ引き上げられる", detail: "バックアップの容量・速度だけでなく、侵害範囲、クリーンな復旧、事業停止、監査まで提案対象にできる。NEC・LIXIL等の国内事例には運用コストや想定復旧時間の定量成果がある。", sourceIds: ["rubrik-nec", "rubrik-lixil", "rubrik-platform"] },
    { title: "新規ロゴとland-and-expandの両方を経験できる", detail: "東京求人は新規顧客と既存成長の双方を担当。全社では5つの導入入口と3つの拡張軸を持ち、FY2026の平均Subscription DBNRRは120%超だった。", sourceIds: ["rubrik-job-midmarket", "rubrik-10k"] },
    { title: "partner共同販売を本流として学べる", detail: "presales、SDR、channel、distributor、VARとの協働が求人に明記され、日本でも案件創出・大型成約・serviceを複数partnerと分担している。単独営業ではなく、社内外を束ねる経験を積みやすい。", sourceIds: ["rubrik-job-midmarket", "rubrik-partners"] },
  ] },
  interviewPrep: { intro: "会社全体の成長率だけでなく、実際に割り当てられるterritory、partnerとの成果配分、技術評価を商談へ変える再現性を確認したいポイントです。", questions: [
    { question: "Mid-Marketの定義、named account数、white space、年間quota、平均ACVは。", why: "同じ職位名でも担当範囲と案件規模で達成難度が大きく変わる。", sourceIds: ["rubrik-job-midmarket", "rubrik-10k"] },
    { question: "fully-ramped AEの直近4四半期のquota達成者比率と中央値は。", why: "グローバルのARR成長ではなく、日本teamでのquota再現性を確認するため。", sourceIds: ["rubrik-q1fy27", "rubrik-10k"] },
    { question: "自己創出・SDR・partner由来pipelineの比率と、partner案件のquota creditは。", why: "チャネル共同販売が本流のGTMでは、pipeline責任と成果配分が実支給を左右する。", sourceIds: ["rubrik-job-midmarket", "rubrik-partners", "rubrik-10k"] },
    { question: "PoCの標準期間・成功基準・失注段階と、入社後90日のenablementは。", why: "複雑な技術評価をBusiness Caseへ変える支援体制と、立ち上がりの現実性を確認したい。", sourceIds: ["rubrik-10k", "rubrik-job-midmarket", "rubrik-platform"] },
  ] },
  solutions: [
    { name: "Rubrik Security Cloud / Data Protection", valueProp: "オンプレ、AWS/Azure/GCP、NAS、SaaSのデータを、policy-drivenな不変バックアップと単一の制御面で保護・復旧する基盤。", url: "https://www.rubrik.com/ja/products/data-protection", competitors: "会社の10-Kが挙げるCommvault、Dell EMC、IBM、Veeam、Cohesityと、cloud/SaaSの個別保護製品・標準機能。", differentiation: "native immutability、logical air gap、時系列のdata/metadata、データ・cloud・SaaSをまたぐ統合と、cyber recoveryまで同じplatformで扱う点を訴求。", retention: "FY2026の平均Subscription DBNRRはグローバルで120%超。日本・製品別の継続率は非公開。" },
    { name: "Data Threat Analytics", valueProp: "データの異常を検知し、脅威ハンティングで攻撃経路と影響データを調査し、復旧前の隔離と対応を支援。", url: "https://www.rubrik.com/products/data-threat-analytics", competitors: "ransomware検知・調査、insider threat、incident containment等の製品群。個社名は当該製品ページでは列挙されていない。", differentiation: "productionだけでなく保護データとmetadataを継続監視し、影響分析からクリーン復旧へつなぐ点。", retention: "日本・製品別の継続率は非公開。" },
    { name: "Data Security Command Center", valueProp: "保護状況、ransomware調査、機密データの発見をrisk scoreと改善提案にまとめ、経営・GRCへデータリスクを説明する。", url: "https://www.rubrik.com/products/data-security-command-center", competitors: "DSPM、data classification、data governance、security posture管理の製品群。", differentiation: "バックアップのRPO/RTO充足、ransomware監視、sensitive dataの保護を一つのdata risk viewへまとめ、復旧可能性まで評価する点。", retention: "日本・製品別の継続率は非公開。" },
    { name: "Identity Recovery", valueProp: "Active Directory、Entra ID、Oktaを不変バックアップし、forest全体から個別objectまで、clean roomを含む手順で復旧する。", url: "https://www.rubrik.com/products/identity-recovery", competitors: "identity recovery/resilience、AD forest recovery、ITDR周辺の製品群。", differentiation: "on-premとcloudのhybrid identityを同一platformで保護し、AD forest、Entra ID object、Oktaをcleanな状態へ復旧する点。", retention: "日本・製品別の継続率は非公開。" },
    { name: "SaaS Data Protection", valueProp: "Microsoft 365、Salesforce、Jira等のSaaSデータを、サービス本体から独立したコピーとして保護し、誤削除・大量変更・侵害から復旧する。", url: "https://www.rubrik.com/products/saas-data-protection", competitors: "SaaS backup専業製品、各SaaSの保持・ごみ箱・監査機能。", differentiation: "Data・Identity・AIをまたぐ独立した防御層として、重要業務順の復旧とidentityの再接続まで広げる設計。", retention: "日本・製品別の継続率は非公開。" },
    { name: "Rubrik Agent Cloud", valueProp: "企業内AIエージェントを発見・監視し、自然言語policyのguardrailで行動を制御し、誤操作をAgent Rewindで巻き戻す。", url: "https://www.rubrik.com/products/rubrik-agent-cloud", competitors: "AI agent observability、AI security、AI governance、runtime guardrailの製品群。会社の10-Kは個社名を列挙していない。", differentiation: "監視・監査・統制に加え、agentが変更したデータや設定を復旧基盤からundoするreversibilityを前面に出す点。", retention: "2026年2月に商用化された新規領域。日本固有の導入・継続率は非公開。" },
  ],
  customerStoriesUrl: "https://www.rubrik.com/ja/customers/all-customers",
  fitTags: ["サイバーレジリエンスを売りたい", "データセンター商材の経験がある", "新規ロゴ開拓が得意", "SIer・VARとの協業経験がある", "CIO・CISO層に経営リスクを提案したい", "成長中の上場外資SaaSを見たい", "複雑なチームセリングを楽しめる", "製品学習と技術対話を苦にしない"],
  comparisonMap: [
    { arena: "データ保護/サイバーレジリエンス", companies: ["Rubrik", "Cohesity", "Veeam"], why: "復旧・データ保護予算の比較" },
    { arena: "サイバーセキュリティ", companies: ["Rubrik", "CrowdStrike", "Palo Alto Networks"], why: "予防・検知か、侵害後の復旧まで含めるかの比較" },
    { arena: "クラウド・データセンター", companies: ["Rubrik", "Dell Technologies", "Commvault"], why: "ハイブリッドクラウドのデータ管理予算の比較" },
  ],
  sources: rubrikSources,
};

const gleanSources: ResearchSource[] = [
  { id: "glean-about", label: "About Glean", url: "https://www.glean.com/about", kind: "企業公式", scope: "創業背景・創業者・製品の原点", checkedAt: "2026-08-11" },
  { id: "glean-arr-200", label: "Glean ARR 2億ドル発表", url: "https://prtimes.jp/main/html/rd/p/000000001.000179911.html", kind: "企業公式", scope: "ARR・顧客地域・従業員規模", checkedAt: "2026-08-11" },
  { id: "glean-series-f", label: "Glean Series F発表", url: "https://www.glean.com/blog/glean-series-f-announcement", kind: "企業公式", scope: "資金調達・評価額・成長戦略", checkedAt: "2026-08-11" },
  { id: "glean-japan-leader", label: "小澤正治氏 日本カントリーマネージャー就任", url: "https://prtimes.jp/main/html/rd/p/000000004.000179911.html", kind: "企業公式", scope: "日本責任者・日本市場方針", checkedAt: "2026-08-11" },
  { id: "glean-japan-entry", label: "アシストによる国内初販売開始", url: "https://www.ashisuto.co.jp/news/detail/1220972_1675.html", kind: "企業公式", scope: "日本参入時期・国内販売体制", checkedAt: "2026-08-11" },
  { id: "glean-konoike", label: "鴻池運輸 導入事例", url: "https://prtimes.jp/main/html/rd/p/000000003.000179911.html", kind: "企業公式", scope: "国内顧客・導入規模・AI活用成果", checkedAt: "2026-08-11" },
  { id: "glean-booking", label: "Booking.com 導入事例", url: "https://www.glean.com/jp/resources/customer-stories/booking-com", kind: "企業公式", scope: "全社導入・業務成果・選定条件", checkedAt: "2026-08-11" },
  { id: "glean-zillow", label: "Zillow 導入事例", url: "https://www.glean.com/resources/customer-stories/zillow", kind: "企業公式", scope: "利用率・時間削減・Agent活用", checkedAt: "2026-08-11" },
  { id: "glean-platform", label: "Glean Work AI Platform", url: "https://www.glean.com/jp/platform", kind: "企業公式", scope: "製品構成・Enterprise Context・差別化", checkedAt: "2026-08-11" },
  { id: "glean-agents", label: "Glean Agents発表", url: "https://www.glean.com/jp/blog/glean-agents-launch-blog", kind: "企業公式", scope: "Agent・governance・製品拡張", checkedAt: "2026-08-11" },
  { id: "glean-job-commercial", label: "Commercial Account Executive, Japan", url: "https://job-boards.greenhouse.io/gleanwork/jobs/4671954005", kind: "企業公式", scope: "Commercial AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "glean-job-enterprise", label: "Enterprise Account Executive, Japan", url: "https://job-boards.greenhouse.io/gleanwork/jobs/4672064005", kind: "企業公式", scope: "Enterprise AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "glean-job-sdr", label: "Sales Development Representative, Japan", url: "https://job-boards.greenhouse.io/gleanwork/jobs/4689174005", kind: "企業公式", scope: "SDRの職務・要件", checkedAt: "2026-08-11" },
  { id: "glean-ai-guideline", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "外部集計", scope: "AIガバナンスに関する外部環境", checkedAt: "2026-08-11" },
];

const gleanIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Gleanは、企業の全社員とIT・AI推進部門が、複数のSaaSに散在する社内情報を権限付きで検索し、AIエージェントの行動へつなげるためのEnterprise AI基盤。「必要な情報を探すのに時間がかかる」「生成AIが正しい社内文脈を参照できない」「AIのPoCが個別部門に閉じ、全社展開できない」といった課題を解決する。検索という分かりやすい課題から入り、全社員向けAIアシスタントや部門別エージェントへ広げ、企業のAI活用基盤を経営層と設計できる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Gleanは非公開企業。2025年2月にARR 1億ドル到達、同年6月に1.5億ドルを調達して評価額72億ドル、さらに公式発表ではARR 2億ドルまで9カ月で倍増した。従業員は1,000人超、顧客は27カ国以上。日本では2023年の国内初reseller販売から、2026年の日本カントリーマネージャー任命と直販3職種採用へ進み、partner-ledの市場開拓に直販coverageを重ねる段階にある。",
    ipoOutlookSummary: "IPO計画・時期は公式には確認できない。評価額72億ドルは2025年Series F時点の資金調達評価であり、流動性や将来価値を保証しない。equity提示時は株数、行使価格、優先株条件、希薄化、売却可能性を確認したい。",
    genbaVerdict: { headline: "日本はreseller起点から、直販・leadership・国内実績を揃えるscale-up初期。", body: "ARR成長と企業AI需要は強いが、日本では新カントリーマネージャー就任直後で、Commercial・Enterprise・SDRを同時採用している。完成したterritoryを引き継ぐより、category教育、PoC、security review、利用定着、partner co-sellを組み立てるbuilder型の局面。グローバル成長を日本のquota達成へ短絡せず、segment別account数と支援体制を確認したい。" },
    milestones: [
      { year: "2019", label: "Glean創業", detail: "Google Search等の経験を持つ創業teamが、社内情報を見つけにくい問題からEnterprise Searchを開発。", sourceId: "glean-about" },
      { year: "2023", label: "日本で国内販売を開始", detail: "アシストが国内初resellerとしてGleanの取り扱いを開始。", sourceId: "glean-japan-entry" },
      { year: "2025", label: "ARR 1億ドル・Series F", detail: "ARR 1億ドル到達後、1.5億ドルを調達し評価額72億ドル。国際展開を資金使途に掲げた。", sourceId: "glean-series-f" },
      { year: "2026", label: "ARR 2億ドルへ倍増", detail: "公式発表でARR 1億ドルから9カ月で2億ドルへ到達、従業員1,000人超。", sourceId: "glean-arr-200" },
      { year: "2026", label: "日本責任者を任命", detail: "小澤正治氏が日本カントリーマネージャーに就任し、市場進出戦略・Enterprise Sales・日本組織構築を統括。", sourceId: "glean-japan-leader" },
    ],
    growthDrivers: [
      { title: "検索からAssistant・Agentへ拡張", body: "100超のconnectorとEnterprise Graphで社内contextを整え、検索、回答、Agent実行を同じ権限基盤へ載せる。seat利用だけでなく部門workflowとAgent数へ拡張できる。", sourceId: "glean-platform" },
      { title: "定量ROIを持つ全社導入事例", body: "Zillowは従業員1人あたり週1.5時間超を削減し、80%超の利用率と3,400超のAgent作成を公開。PoCを利用率・削減時間・Agent活用でBusiness Case化できる。", sourceId: "glean-zillow" },
      { title: "日本の直販体制を本格強化", body: "2026年に日本カントリーマネージャーを任命し、市場進出戦略、Enterprise Sales、日本組織構築を一体で担う体制へ移行。reseller起点の市場開拓に直販coverageを重ねる段階に入った。", sourceId: "glean-japan-leader" },
    ],
    japanGrowth: {
      headline: "国内初resellerから3年で、named customer・Country Manager・3職種採用へ。",
      narrative: "2023年にアシストが国内初販売を開始。2026年には鴻池運輸が第1phaseで1,200 licenseを本格稼働し、会議資料の検索・作成工数を体感約9割削減したとの利用者評価を公開した。同年6月に小澤正治氏を日本カントリーマネージャーへ任命し、Commercial AE、Enterprise AE、SDRを同時採用。日本を最優先の成長市場とする会社発言はあるが、日本のARR・顧客数・quota達成率・team人数は非公開。",
      qualitativeSignals: [
        { label: "国内大手の全社AI基盤", detail: "鴻池運輸が1,200 licenseを導入し、75本のAI Agent開発を目標化。", sourceId: "glean-konoike" },
        { label: "日本責任者を任命", detail: "2026年6月、小澤正治氏が市場進出戦略・Enterprise Sales・日本組織構築を統括。", sourceId: "glean-japan-leader" },
        { label: "Commercial AEを採用", detail: "日本のCommercial・Mid-Marketでnet-new ARRとterritory構築を担う求人を公式ATSで確認。", sourceId: "glean-job-commercial" },
      ],
      sourceIds: ["glean-japan-entry", "glean-konoike", "glean-japan-leader", "glean-job-commercial", "glean-job-enterprise", "glean-job-sdr"],
    },
    riskHypotheses: [
      { title: "AI categoryの追い風と競争激化が同時に進む", body: "Microsoft、Google、OpenAI、Notion等が既存suiteやassistantへ企業検索・Agentを統合する。Gleanはvendor-neutralなcontext layerを主張できる一方、既存契約内のbundleとの価格比較を避けられない。", confidence: "中", evidence: ["検索からWork AIへportfolioを拡張", "35種類超のLLMと100超connectorを訴求", "求人がROI reportとstructured PoCを要求"], counterSignal: "複数suiteを横断する権限付きcontextと定量事例は、単一suite内assistantとの差別化になる。", sourceIds: ["glean-platform", "glean-job-commercial", "glean-booking"] },
      { title: "日本の成長速度は、local実装とchange managementの容量に左右される", body: "全社AI導入はconnector、権限、security review、use case設計、利用定着を伴う。営業採用が先行しても、Solutions・CS・partnerのdelivery capacityが追いつかなければPoC後のscaleが詰まる。", confidence: "中", evidence: ["日本でAE 2職種とSDRを採用", "鴻池運輸がAI人材育成とAgent目標を設定", "日本team人数と導入支援capacityは非公開"], counterSignal: "国内reseller網とCustomer Successを組み合わせれば、直販だけに依存せず支援をscaleできる。", sourceIds: ["glean-job-commercial", "glean-job-enterprise", "glean-konoike", "glean-japan-entry"] },
    ],
    sourceIds: ["glean-arr-200", "glean-series-f", "glean-japan-leader", "glean-konoike", "glean-job-commercial", "glean-job-enterprise", "glean-job-sdr"],
  },
  sellingPlaybook: {
    frameIntro: "Gleanの売り方は『社員が情報を探す時間』だけでなく、生成AIが権限付きの正しい社内contextへ到達できず、PoCから全社成果へ進めない課題が起点。検索、Assistant、Agentを別々に売らず、企業知識を安全に行動へ変える共通基盤として提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "Booking.comは複数appに分散した古い情報と非効率な検索を解消し、動画制作を8週から2週へ短縮。Zillowは30超のdata source・1.38億文書を横断し、従業員1人あたり週1.5時間超を削減、利用率80%超を実現。鴻池運輸もBox、Outlook、ServiceNow横断とAgent開発を全社AI基盤の目的に置いた。共通課題は、情報分散を検索時間だけでなく、意思決定・制作・support・AI活用の遅延へ変えてしまうことにある。" },
      { title: "製品の成り立ちから見る課題", body: "Gleanは、Google Search等を作った創業者たちが『Web上の情報より、自社の仕事に必要な答えの方が見つけにくい』と感じたことから始まった。最初のEnterprise Searchから、権限、人物・content・activityの関係を理解するEnterprise Graphへ進み、AssistantとAgentを追加した成り立ちは、model単体では社内固有のcontextと実行権限を持てないという課題を示す。" },
      { title: "外部環境の要求から見る課題", body: "生成AIが個人の試用から企業の業務実行へ移るほど、経営とITはROIだけでなく、入力data、access権、出典、model選択、Agentの行動、監査を説明する必要がある。経産省のAI事業者ガイドライン第1.2版もAI governanceの継続的な構築を求める。外部要求が強まる中、部門ごとに汎用AIを足すだけでは統制と再利用が分断し、全社scaleの投資判断が止まる。" },
    ],
    narrative: [
      { label: "背景", body: "SaaSと生成AIが増え、社員の文書・会話・ticket・顧客情報は複数systemへ分散。各部門が個別にAIを試し、経営は生産性向上を求めている。" },
      { label: "課題", body: "人もAIも最新版・権限・業務contextを揃えられず、回答確認とsystem横断に時間を失う。PoCが増えても利用率、security、ROI、Agent governanceを共通化できず、全社展開へ進まない。" },
      { label: "解決策", body: "100超のconnectorで既存systemを権限付きで接続し、Enterprise Graphを共通contextにSearch、Assistant、Agentを展開。最初のuse caseで検索時間・ticket処理・cycle timeを測り、利用率とAgent成果を見ながら部門横断へ広げる。" },
      { label: "選定の理由", body: "Microsoft CopilotやGoogle Geminiは各suite内、Notionはworkspace内の統合に強い。Gleanは複数vendorを横断するpermission-aware search、model flexibility、既存systemを置換しない100超connector、検索からAgentまで同じcontextを使う点が選定条件になる。" },
    ],
    openingHook: "生成AIのlicense数ではなく、社員とAgentが『権限を守った最新版の答え』へ到達するまでの時間を、いま測れていますか。",
    valueHypothesis: "最初の8〜12週間で一つの部門と3〜5 data sourceを接続し、検索時間、問い合わせ解決時間、weekly active use、回答の出典確認率をbaseline比較する。Booking.com、Zillow、鴻池運輸の成果を参考に、効果が出たworkflowからAgent化し、削減時間だけでなくcycle timeと利用率で全社展開を判断する。",
    commonObjection: { objection: "Microsoft CopilotやGoogle Geminiを既に契約しており、Enterprise AIを増やしたくない。", reframe: "modelやchat UIの重複ではなく、複数suiteにまたがる権限付きcontextとAgent governanceが既存投資で共通化できているかを比較する。全置換ではなく、検索失敗が多い部門で同じ質問群・同じsecurity条件・同じKPIのPoCを行う。" },
  },
  facts: [
    { label: "グローバルARR", value: "$200M", detail: "公式発表でARR 1億ドルから9カ月で倍増。日本単体ではない。", sourceIds: ["glean-arr-200"] },
    { label: "Series F評価額", value: "$7.2B", detail: "2025年6月に1.5億ドルを調達した時点の評価。", sourceIds: ["glean-series-f"] },
    { label: "従業員規模", value: "1,000人超", detail: "2026年の会社公式発表。日本team人数は非公開。", sourceIds: ["glean-arr-200"] },
    { label: "日本参入", value: "2023年", detail: "アシストが国内初resellerとして販売開始。", sourceIds: ["glean-japan-entry"] },
    { label: "国内導入規模", value: "1,200 license", detail: "鴻池運輸の第1phase。Glean全体の日本顧客数ではない。", sourceIds: ["glean-konoike"] },
    { label: "日本の公開営業求人", value: "3件", detail: "Commercial AE、Enterprise AE、SDRを2026年8月11日に公式ATSで確認。", sourceIds: ["glean-job-commercial", "glean-job-enterprise", "glean-job-sdr"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "企業AIの競争軸はmodelからcontext・governance・adoptionへ移る", conclusion: "Gleanは検索を入口に、権限付きcontext、Assistant、Agentを全社基盤として売ることで、個別AI toolの乱立を統合する余地があります。", confidence: "高", evidence: ["ARR 2億ドルへ9カ月で倍増", "100超connectorと複数LLM対応", "顧客が検索時間・利用率・Agent数を定量化"], counterSignals: ["Microsoft・Google等のsuite bundleが競争を強める", "日本の有料顧客数と更新率は非公開"], interviewQuestions: ["日本で検索、Assistant、Agentのどれが初回契約の主入口か", "既存suiteとの競合時に勝敗を分ける評価項目は何か"], sourceIds: ["glean-arr-200", "glean-platform", "glean-zillow"] },
    { topic: "SALES MOTION", title: "category educationとstructured PoCを担うvalue sellerが必要", conclusion: "AE求人がROI reportと成功基準付きPoCを明記し、SDRもoutbound中心。既製需要の刈り取りより、分散情報を経営KPIへ翻訳し自らterritoryを作る比重が高そうです。", confidence: "高", evidence: ["Commercial AEがnet-newとterritory構築を担当", "Enterprise AEがC-levelと複雑商談を担当", "SDRがAPAC outbound pipelineを担当"], counterSignals: ["強いglobal brandとpartner経由のinboundも想定される", "役割別pipeline比率は非公開"], interviewQuestions: ["self-source、SDR、partner、marketing由来pipelineの比率は", "PoC開始・成功・有償化の標準conversion rateは"], sourceIds: ["glean-job-commercial", "glean-job-enterprise", "glean-job-sdr"] },
    { topic: "QUOTA ATTAINABILITY", title: "ARR成長よりsegment別territoryとimplementation capacityを検証する", conclusion: "日本で3職種を同時採用する成長局面だが、quota、平均ACV、達成率、rampは非公開。CommercialとEnterpriseのaccount設計、SE・CS・partnerの容量で達成難度が大きく変わります。", confidence: "探索中", evidence: ["日本責任者就任と3営業職採用", "国内1,200 license事例", "日本を重点成長市場と表明"], counterSignals: ["日本のARR・顧客数・quota達成者比率は未開示", "新任体制ではterritory再設計の可能性"], interviewQuestions: ["fully-ramped AEの達成者比率と中央値は", "named account数、white space、平均ACV、平均sales cycleは"], sourceIds: ["glean-japan-leader", "glean-konoike", "glean-job-commercial", "glean-job-enterprise"] },
    { topic: "COMPENSATION", title: "日本の報酬は非公開。equityとquota economicsを同時に見る", conclusion: "公式求人はvariable compensationとequityの可能性を示すが、金額・Pay Mix・acceleratorは非公開。高い評価額を報酬価値と同一視せず、quotaと実支給実績を確認すべきです。", confidence: "探索中", evidence: ["日本求人に給与rangeなし", "役割によりvariable compensation・equity対象の可能性", "会社は非公開でSeries F評価額72億ドル"], counterSignals: ["equityの付与有無と条件は個別offer次第", "日本の現金報酬benchmarkは公式確認できない"], interviewQuestions: ["base/variable、equity、ramp保証、accelerator、clawbackは", "同segmentの実支給中央値とquota credit ruleは"], sourceIds: ["glean-job-commercial", "glean-job-enterprise", "glean-series-f"] },
    { topic: "CULTURE / CAREER", title: "AI productを使いながら日本GTMを作るbuilder経験になりうる", conclusion: "求人はAI fluencyを選考で確認し、account・ROI・PoCをdata-drivenに運ぶことを要求。日本GTMの型を作る経験は希少だが、曖昧さと高速変更を受け入れる必要があります。", confidence: "中", evidence: ["全候補者にAI-focused exercise/discussion", "新Country Managerが日本組織構築を統括", "Sales・SE・BDR・PM・Engineeringのcross-functional motion"], counterSignals: ["日本の昇進・離職・在籍年数は非公開", "組織拡大期は役割境界が変わりやすい"], interviewQuestions: ["入社90日のenablementとAI exerciseの評価基準は", "日本からAPAC/managementへ進んだ実例と期待条件は"], sourceIds: ["glean-job-commercial", "glean-job-enterprise", "glean-japan-leader"] },
  ],
  cultureNotes: {
    organizationReadTitle: "AI fluencyを前提に、dataでterritoryとPoCを作る組織。",
    hypothesis: { title: "完成したplaybookより、仮説検証の速度を重視。", body: "日本のAE求人はgreenfield territory、ROI report、metric-based bookings、tight PoCを反復し、選考にもAI活用のexerciseを含む。曖昧な市場でaccount researchと成功基準を自ら設計し、学習を営業processへ戻せる人が合いそうです。" },
    careerValue: { title: "Enterprise AIのcategory creationと全社展開を経験できる。", body: "CIO/ITだけでなく各部門へuse caseを広げ、security・data・change management・ROIを一つの商談で扱う経験を積める可能性がある。一方、昇進実績と日本teamの安定性は未確認。", confidence: "中" },
  },
  customerProof: [
    { company: "鴻池運輸", products: "Glean Work AI Platform", outcome: "第1phaseで1,200 licenseを導入。先行利用では会議資料の検索・作成工数が体感約9割減との声を公開し、75本のAgent開発を目標化。", implication: "日本大企業で、検索だけでなくAI人材育成とAgent創出まで全社Business Caseにできる証拠。", sourceId: "glean-konoike" },
    { company: "Booking.com", products: "Glean Search / AI / Agents", outcome: "14,000人へ展開。動画制作を8週から2週へ短縮し、月2本から5本へ増加。IT ticketの情報探索も最大10分からほぼ即時へ。", implication: "全社導入でも、部門別cycle timeを明確な価値指標にできる。", sourceId: "glean-booking" },
    { company: "Zillow", products: "Glean Search / Agents / MCP", outcome: "7,000人規模で80%超が利用し、1人週1.5時間超を削減。3,400超のAgentを作成。", implication: "導入後のadoptionとAgent expansionをrenewal・拡張の根拠にできる。", sourceId: "glean-zillow" },
  ],
  externalSignals: [
    { label: "グローバル成長", value: "ARR $200M", detail: "ARR 1億ドルから9カ月で倍増し、従業員1,000人超、顧客は27カ国以上。", caveat: "会社発表のグローバル値で、日本の売上・継続率・営業生産性ではない。", sourceId: "glean-arr-200" },
    { label: "日本GTM拡張", value: "Country Manager任命", detail: "2026年に日本責任者を任命し、市場進出戦略・Enterprise Sales・日本組織構築を一体で統括。", caveat: "体制強化は成長意欲のsignalであり、受注やquota達成を保証しない。", sourceId: "glean-japan-leader" },
  ],
  roleLens: {
    salesMotion: "Commercial/Enterpriseともnet-new logoとgreenfield territory構築が中心。account research、executive sponsor、ROI report、success criteria付きPoC、cross-functional closeを一貫して担い、導入後は部門・connector・Agentへ広げるland-and-expandが想定される。",
    compensation: "日本の基本給、OTE、Pay Mix、accelerator、equity条件は公式求人で確認できない。variable compensation・equity対象の可能性はあるが、金額や付与を推測せずofferで確認する。",
    quota: "年間quota、平均ACV、達成率、ramp期間は非公開。CommercialとEnterpriseでaccount規模・cycleが異なるため、segment別のfully-ramped達成率、white space、PoC conversionを確認したい。",
    collaboration: "AEはSE、BDR、PM、Executive、Engineerと連携。日本ではreseller/partner網も先行しているため、直販商談だけでなくpartnerとの案件登録、technical validation、導入・定着責任を束ねる力が必要。",
  },
  leadership: { name: "小澤 正治", role: "日本カントリーマネージャー", read: "2026年6月就任。公式発表では日本の市場進出戦略、Enterprise Sales、日本組織構築を統括。Looker、Treasure Data、GitLab等で日本GTMを率いた経験を持ち、安全で実用的なEnterprise AIを定量成果へつなぐ方針を掲げる。", sourceId: "glean-japan-leader" },
  companyStats: {
    globalHeadcount: { value: "1,000人超", detail: "2026年の会社公式発表。日本team人数は含まれるが内訳は未開示。", sourceId: "glean-arr-200" },
    japanHeadcount: { value: "非公開", detail: "公式発表で国内team拡充は確認できるが人数は未開示。" },
    japanOffice: { value: "日本remote", detail: "公開中の3営業職はいずれも日本在住remote。法人・固定officeの住所は確認できていない。", sourceId: "glean-job-commercial" },
    japanSince: { value: "2023年", detail: "国内初resellerによる販売開始。直販組織の開始時期とは限らない。", sourceId: "glean-japan-entry" },
  },
  salesAppeal: { intro: "強いAI市場の追い風だけでなく、営業として獲得できる具体的な経験を公開情報から整理しました。", points: [
    { title: "AIをdemoではなくROIと全社adoptionで売れる", detail: "求人はROI reportとstructured PoCを明記し、顧客事例は削減時間・利用率・cycle timeを公開。AIの新奇性からBusiness Caseへ翻訳する実績を作りやすい。", sourceIds: ["glean-job-commercial", "glean-zillow", "glean-booking"] },
    { title: "日本GTMのsegment設計に関われる", detail: "新Country Managerの下でCommercial、Enterprise、SDRを同時採用。既存組織の運用だけでなく、account coverage、outbound、partner連携の型を作る余地がある。", sourceIds: ["glean-japan-leader", "glean-job-commercial", "glean-job-enterprise", "glean-job-sdr"] },
    { title: "検索・data・security・Agentを横断する提案経験", detail: "複数systemの権限とcontextを扱い、検索からAgent実行まで広げるため、IT、Security、部門責任者、経営の異なる評価軸を一つの商談で扱える。", sourceIds: ["glean-platform", "glean-agents", "glean-konoike"] },
  ] },
  interviewPrep: { intro: "成長率の強さと、日本の個別territoryの達成可能性を分けて確認したい論点です。", questions: [
    { question: "Commercial/Enterpriseのaccount定義、named account数、white space、平均ACVは。", why: "職種名だけでは実際の市場余地と商談複雑度を判断できない。", sourceIds: ["glean-job-commercial", "glean-job-enterprise"] },
    { question: "fully-ramped AEの直近4四半期のquota達成者比率・中央値・平均sales cycleは。", why: "ARR倍増を日本の個人quota再現性へ誤変換しないため。", sourceIds: ["glean-arr-200", "glean-job-enterprise"] },
    { question: "self-source、SDR、partner、marketing由来pipelineの比率とcredit ruleは。", why: "outboundとpartner-ledの両方があり、成果配分が実支給を左右する。", sourceIds: ["glean-job-sdr", "glean-japan-entry", "glean-job-commercial"] },
    { question: "PoCの標準成功基準、有償化率、SE/CS/partnerの同時案件capacityは。", why: "security reviewとchange managementを越えて本番scaleできる支援体制を確認する。", sourceIds: ["glean-job-commercial", "glean-konoike", "glean-booking"] },
  ] },
  solutions: [
    { name: "Glean Search", valueProp: "SaaS、文書、会話、ticketを権限付きで横断し、利用者の役割とcontextに合う回答・出典を返すEnterprise Search。", url: "https://www.glean.com/jp/enterprise-ai", competitors: "Microsoft Search/Copilot、Google Cloud Search/Gemini、Elastic、Coveo等。", differentiation: "既存sourceを置換せず100超connectorで接続し、Enterprise Graphとsource側permissionを反映する点。", retention: "製品別・日本別のNRRは非公開。" },
    { name: "Glean Assistant", valueProp: "社内contextを使って回答、分析、content作成、業務実行を支援する全社員向けAI assistant。", url: "https://www.glean.com/jp", competitors: "Microsoft 365 Copilot、Google Gemini Enterprise、ChatGPT Enterprise、Notion AI。", differentiation: "複数suiteを横断するcontextとmodel flexibilityを一つの利用面へ載せる点。", retention: "製品別・日本別のNRRは非公開。" },
    { name: "Glean Agents", valueProp: "自然言語で部門workflowのAgentを作り、企業knowledge・world knowledge・actionを接続して実行する。", url: "https://www.glean.com/jp/blog/glean-agents-launch-blog", competitors: "Microsoft Copilot Studio、Google Agentspace、Salesforce Agentforce、各種agent builder。", differentiation: "検索で整えた権限付きEnterprise ContextをそのままAgentへ使い、全社で発見・管理・統制する点。", retention: "Agent actionsは全社成長指標を公開するが、日本・製品別継続率は非公開。" },
    { name: "Glean Platform / APIs", valueProp: "Search、Graph、connector、governance、APIを使い、自社appや既存workflowへEnterprise AIを組み込む。", url: "https://www.glean.com/jp/platform", competitors: "自社RAG構築、data platform、cloud AI search、iPaaS連携。", differentiation: "connector・permission・retrieval・Agentをturnkeyで提供し、modelや既存SaaSを選べる点。", retention: "製品別・日本別のNRRは非公開。" },
  ],
  customerStoriesUrl: "https://www.glean.com/jp/resources/customer-stories",
  fitTags: ["Enterprise AIを売りたい", "greenfield territoryを作りたい", "ROI型PoCが得意", "CIO・IT・Securityへ提案したい", "partner co-sellを経験したい", "複雑なtechnical SaaSを学べる", "AIを日常業務で使える", "曖昧なscale-up局面を楽しめる"],
  comparisonMap: [
    { arena: "Enterprise AI Assistant", companies: ["Glean", "Microsoft Copilot", "Google Gemini"], why: "既存suite内AIか、cross-platform context layerかの比較" },
    { arena: "AI Workspace / Knowledge", companies: ["Glean", "Notion", "Atlassian"], why: "検索・knowledge・workflow・Agentの中心をどこに置くかの比較" },
    { arena: "Enterprise Search", companies: ["Glean", "Elastic", "Coveo"], why: "permission-aware search、導入速度、AI実行までの比較" },
  ],
  sources: gleanSources,
};

const speakSources: ResearchSource[] = [
  { id: "speak-series-c", label: "Speak Series C発表", url: "https://www.speak.com/blog/series-c", kind: "企業公式", scope: "資金調達・評価額・法人事業の成長", checkedAt: "2026-08-11" },
  { id: "speak-origin", label: "Speakの言語学習再設計", url: "https://www.speak.com/blog/how-speak-reinvents-language-learning", kind: "企業公式", scope: "学習設計・製品思想", checkedAt: "2026-08-11" },
  { id: "speak-asr", label: "Speak音声認識基盤の開発", url: "https://www.speak.com/blog/asr-levelup", kind: "企業公式", scope: "非native音声認識・技術差別化", checkedAt: "2026-08-11" },
  { id: "speak-live-roleplay", label: "Live Roleplays発表", url: "https://www.speak.com/blog/live-roleplays", kind: "企業公式", scope: "会話練習の課題・Realtime AI", checkedAt: "2026-08-11" },
  { id: "speak-japan-b2b", label: "Speak for Business日本本格提供", url: "https://prtimes.jp/main/html/rd/p/000000016.000116340.html", kind: "企業公式", scope: "日本法人・国内導入・製品・日本責任者", checkedAt: "2026-08-11" },
  { id: "speak-b2b", label: "Speak for Business 日本公式", url: "https://www.speak.com/jp/b2b", kind: "企業公式", scope: "導入企業数・管理機能・法人価値", checkedAt: "2026-08-11" },
  { id: "speak-japan-product", label: "Speak日本公式", url: "https://www.speak.com/jp", kind: "企業公式", scope: "日本製品・法人導入規模", checkedAt: "2026-08-11" },
  { id: "speak-job-ae", label: "Account Executive - Japan", url: "https://jobs.ashbyhq.com/speak/ef2e18e0-81be-4d1f-a460-ff90049d969c", kind: "企業公式", scope: "Japan AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "speak-job-apac-head", label: "Head of APAC Sales", url: "https://jobs.ashbyhq.com/speak/29647892-bc3f-40fb-bd1b-8f70017073fd", kind: "企業公式", scope: "APAC営業組織・GTM・要件", checkedAt: "2026-08-11" },
  { id: "speak-job-csm", label: "Customer Success Manager - Japan", url: "https://jobs.ashbyhq.com/speak/b7cba6a0-9ba0-4f7d-be62-6331ef5038a6", kind: "企業公式", scope: "Japan CSM・更新拡張・導入支援", checkedAt: "2026-08-11" },
  { id: "speak-jetro-workforce", label: "JETRO 2025年度日本企業の海外事業展開調査", url: "https://www.jetro.go.jp/ext_images/_News/releases/2026/fb2468413e5d19f0/survey_v3.pdf", kind: "外部集計", scope: "海外営業人材・多言語人材の外部需要", checkedAt: "2026-08-11" },
  { id: "speak-ef-epi", label: "EF English Proficiency Index 2025 日本", url: "https://www.ef.com/wwen/epi/regions/asia/japan/", kind: "外部集計", scope: "日本の英語・speaking skill指標", checkedAt: "2026-08-11" },
];

const speakIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Speakは、グローバル展開する企業の人事・事業部門が、社員の英語で話す力をAIとの反復練習で高める法人向け語学学習基盤。「研修を受けても会議や交渉で話せない」「社員ごとの業務場面に合う練習を提供できない」「受講状況は追えても実践力の向上を測れない」といった課題を解決する。福利厚生の英語研修ではなく、海外売上、グローバル人材育成、現場の実行力へ価値を結びつけ、消費者向けAI製品を法人課題へ転換して売れる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Speakは非公開企業。2016年創業、2019年に韓国で最初の市場を立ち上げ、2023年に日本語版を正式提供。2024年12月のSeries Cで7,800万ドルを調達し評価額10億ドル、累計調達は1.62億ドルとなった。法人事業は2024年時点の200社超・employee adoption 85%から、日本公式では500社超へ拡大。現在はJapan AE、Japan CSM、Head of APAC Salesを同時採用し、consumer productの成長をB2Bのrepeatable revenueへ変える局面。",
    ipoOutlookSummary: "IPO計画・時期は公式には確認できない。10億ドル評価は2024年Series C時点で、将来の株式価値や流動性を保証しない。equityが提示される場合は、株数、行使価格、希薄化、vesting、売却機会を確認したい。",
    genbaVerdict: { headline: "日本のconsumer PMFを、Enterprise L&Dの継続売上へ変える0→1後半。", body: "日本では2023年のconsumer launch、2024年の法人先行導入、2025年の本格提供を経て500社超を掲げる。今はJapan AE・CSMに加えAPAC Sales責任者を採用し、獲得・定着・地域playbookを同時に作っている。ただし日本B2B ARR、平均契約額、renewal、quota達成率は非公開。アプリの知名度とEnterprise salesの再現性を分けて見る必要がある。" },
    milestones: [
      { year: "2016", label: "Speak創業", detail: "Connor Zwick氏とAndrew Hsu氏が、人の会話partnerへ依存せず発話量を増やすAI tutorを構想。", sourceId: "speak-series-c" },
      { year: "2019", label: "韓国で最初の市場を展開", detail: "英語学習appとして韓国でlaunchし、その後日本・台湾等へ拡張。", sourceId: "speak-job-ae" },
      { year: "2023", label: "日本語版を正式提供", detail: "日本で英語speaking特化appを正式launchし、東京拠点を運営。", sourceId: "speak-japan-b2b" },
      { year: "2024", label: "Series CでUnicornへ", detail: "7,800万ドルを調達し評価額10億ドル、累計調達1.62億ドル。法人事業は200社超・adoption 85%を公開。", sourceId: "speak-series-c" },
      { year: "2025", label: "日本B2Bを本格提供", detail: "サッポロビール・LIXILの先行導入を経て、2025年2月にSpeak for Businessを日本で本格提供。", sourceId: "speak-japan-b2b" },
    ],
    growthDrivers: [
      { title: "consumerの利用体験を法人導入の入口にできる", body: "日本のindividual利用とbrand認知が社員側の導入障壁を下げ、HR/L&Dは既知のmobile体験を福利厚生・人材育成・global readinessへ広げられる。", sourceId: "speak-japan-product" },
      { title: "AIで1対1の発話練習をscale", body: "人の講師では時間・供給・心理負担に制約がある発話練習を、非native音声向けASR、Realtime conversation、個別scenarioで常時提供。seat当たりの練習量を増やせる。", sourceId: "speak-asr" },
      { title: "管理portalとCSでrenewalへ接続", body: "法人版はlearner追加、content customization、engagement測定を管理portalで提供し、Japan CSMがonboarding、QBR、renewal、expansionを担う。福利厚生配布で終わらず利用率を運用できる。", sourceId: "speak-job-csm" },
    ],
    japanGrowth: {
      headline: "consumer launchから2年でB2B本格提供、500社超と獲得・定着の採用へ。",
      narrative: "2023年に日本語正式版を提供し、2024年からサッポロビール、LIXIL等で法人版を先行導入。2025年2月に本格提供を開始し、現在の日本公式ページは500社超を掲げる。Japan AEは5,000人超企業へのHR/L&D sales、Japan CSMはonboarding・QBR・renewal/expansion、Head of APAC Salesは日本を含む地域playbookとteam運営を担当する。日本B2BのARR・有料seat数・更新率は非公開。",
      qualitativeSignals: [
        { label: "法人導入500社超", detail: "日本公式B2Bページの現在値。日本企業だけの件数か、対象時点の詳細は非公開。", sourceId: "speak-b2b" },
        { label: "国内Enterprise reference", detail: "サッポロビールとLIXILが2024年から先行導入。", sourceId: "speak-japan-b2b" },
        { label: "Japan AEを採用", detail: "日本のnew ARR、full-cycle sales、land-and-expandを担う求人を公式ATSで確認。", sourceId: "speak-job-ae" },
      ],
      sourceIds: ["speak-japan-b2b", "speak-b2b", "speak-job-ae", "speak-job-csm", "speak-job-apac-head"],
    },
    riskHypotheses: [
      { title: "高いapp engagementを、会社が更新するBusiness Outcomeへ変換できるか", body: "英語学習は利用者満足が高くても、HR予算の更新にはactivation、継続利用、skill improvement、業務での活用を説明する必要がある。self-reportのconfidenceだけでは大型契約のROIとして弱い場合がある。", confidence: "中", evidence: ["法人版が管理portalとengagement測定を提供", "Japan CSMがQBR・renewal・expansionを担当", "日本の顧客別定量成果は限定的"], counterSignal: "2024年Series C時点で法人顧客200社超・adoption 85%、現在は500社超を掲げる。", sourceIds: ["speak-series-c", "speak-b2b", "speak-job-csm"] },
      { title: "consumerとEnterpriseの優先順位が変化しやすい", body: "同じproduct・brandを使えるのは強みだが、consumer acquisition、言語追加、AI research、法人管理機能ではroadmap要求が異なる。B2Bが成長エンジン化する過程ではsales promiseとproduct deliveryの整合が重要。", confidence: "中", evidence: ["求人がB2Bを最大級のgrowth engineへ育てる方針", "Head of APAC Salesがmarket feedbackでroadmapへ影響", "Japan CSMがProduct/Engineeringへ課題を翻訳"], counterSignal: "専任Engineering、Product、Content、CS teamをB2B向けに構築済みと求人が説明。", sourceIds: ["speak-job-ae", "speak-job-apac-head", "speak-job-csm"] },
    ],
    sourceIds: ["speak-series-c", "speak-japan-b2b", "speak-b2b", "speak-job-ae", "speak-job-csm", "speak-job-apac-head"],
  },
  sellingPlaybook: {
    frameIntro: "Speak for Businessの売り方は『英語研修を提供しているのに、社員が実際の会議・交渉で話せない』というexecution gapが起点。学習contentの量ではなく、個別の業務scenarioで発話量を増やし、HRがengagementと成長を測れる仕組みとして提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "サッポロビールはglobal businessで必要なspeaking力の向上・維持を目的に、時間・場所・回数を問わず、本人が業務場面をcustomizeできる点を評価した。LIXILも法人版を先行導入。法人顧客群では2024年時点でemployee adoption 85%、現在は500社超を掲げる。導入目的は英語教材の配布ではなく、会議・presentation・顧客対応で発話できる状態を、社員ごとに反復して作ることにある。" },
      { title: "製品の成り立ちから見る課題", body: "Speakは『語彙や文法を学んでも、実際に声を出す機会が足りず大半が流暢になれない』『最も有効な1対1tutorは高価でscaleしない』という問題から生まれた。非native・accented speechに最適化したASR、Learn→Practice→Apply、Realtime roleplayを積み上げた成り立ちは、knowledge不足より発話量・即時feedback・心理的安全性がbottleneckだという見方を示す。" },
      { title: "外部環境の要求から見る課題", body: "JETROの2025年度調査では海外展開人材で海外営業・marketing不足が目立ち、英語も必要言語として挙がる。一方、EF EPI 2025で日本のspeaking scoreは393と低位。海外顧客・外国人同僚とのlive communicationが増えるほど、企業は『研修を置いたか』ではなく、必要人材が業務で話せるか、利用と成長を測れているかを問われる。人の講師だけで全社員へ十分な会話量を配るのは費用・予約・供給面で難しく、常時使える個別練習が投資テーマになる。" },
    ],
    narrative: [
      { label: "背景", body: "日本企業の海外展開、越境team、外国人採用が進み、会議・交渉・presentationで英語を話す役割が一部の駐在員から幅広い社員へ広がっている。" },
      { label: "課題", body: "従来研修は時間固定、講師供給、受講の心理負担、level差、実務scenario不足で発話量が限られる。seatを配っても利用と業務成果を追えなければ、HRは更新理由を説明できない。" },
      { label: "解決策", body: "AI tutorでいつでも発話し、非native音声向け認識と即時feedback、業務別roleplay、custom contentを提供。管理portalとCSでactivation、学習量、継続利用を見ながら、対象部署の実務scenarioへ合わせる。" },
      { label: "選定の理由", body: "真人英会話は人間の臨場感、Duolingo等は広いconsumer学習、ELSA等は発音、Udemy等はcontent catalogに強い。Speakはspeaking-firstの反復量、Realtime AI conversation、非native音声への技術投資、法人portal・CS、consumerで磨いた継続設計を同時に持つ点が選定条件になる。" },
    ],
    openingHook: "英語研修の受講率ではなく、次の海外会議で社員が自分の意見を話した回数と、話せなかった場面を把握できていますか。",
    valueHypothesis: "global projectや海外顧客対応がある一部門で8〜12週間実施し、activation、週次発話回数、継続率、pre/post speaking assessment、会議での発言自己効力感、manager評価を測る。利用量だけでなく対象業務の行動変化を確認してから、職種別scenarioと管理運用を全社へ広げる。",
    commonObjection: { objection: "オンライン英会話やe-learningの補助制度が既にあり、新しい英語研修は不要。", reframe: "制度の有無ではなく、社員1人あたりの実発話時間、予約離脱、level別利用率、業務scenarioの再現、管理者が見える成果を比較する。既存制度を全置換せず、発話が必要な一部門で同じ期間・同じoutcomeを測る。" },
  },
  facts: [
    { label: "Series C", value: "$78M", detail: "2024年12月に調達。累計調達は1.62億ドル。", sourceIds: ["speak-series-c"] },
    { label: "評価額", value: "$1B", detail: "2024年Series C時点の非公開株式評価。", sourceIds: ["speak-series-c"] },
    { label: "法人導入", value: "500社超", detail: "日本公式B2Bページの現在値。日本企業のみかは明記されていない。", sourceIds: ["speak-b2b"] },
    { label: "日本consumer launch", value: "2023年", detail: "日本語正式版を提供。", sourceIds: ["speak-japan-b2b"] },
    { label: "日本B2B本格提供", value: "2025年2月", detail: "2024年からサッポロビール・LIXIL等で先行導入。", sourceIds: ["speak-japan-b2b"] },
    { label: "公開B2B求人", value: "3件", detail: "Japan AE、Japan CSM、東京勤務可能なHead of APAC Salesを確認。", sourceIds: ["speak-job-ae", "speak-job-csm", "speak-job-apac-head"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "consumer PMFを法人の高利用率へ移植できる可能性がある", conclusion: "speaking-firstのmobile体験と日本brandを入口に、管理portal・CS・custom scenarioを加えれば、従来研修の低利用を改善する余地があります。", confidence: "高", evidence: ["法人導入500社超", "Series C時点の法人adoption 85%", "サッポロビール・LIXILの国内先行導入"], counterSignals: ["日本企業だけの有料seat数・renewalは非公開", "自己学習appの利用は企業cultureとmanager支援に左右される"], interviewQuestions: ["日本B2Bのactivation、WAU、renewal、seat expansionは", "最も利用率が高い企業の導入運用に共通する条件は"], sourceIds: ["speak-b2b", "speak-series-c", "speak-japan-b2b"] },
    { topic: "SALES MOTION", title: "HR/L&Dへのland後、職種・地域・use caseでexpandするmotion", conclusion: "Japan AEは5,000人超企業のcomplex salesとnew/upsellを担当し、CSMはQBR・renewal・expansionを担う。福利厚生一括導入より、global役割の明確な部門から成果を作る売り方が再現性を持ちそうです。", confidence: "高", evidence: ["AEが3〜12カ月sales cycleとland-and-expandを要件化", "CSMがdata分析とQBRを担当", "APAC責任者がnew logoと既存拡張を統括"], counterSignals: ["日本のinbound/self-source比率は非公開", "HR予算の季節性・年度調達がcycleを左右する可能性"], interviewQuestions: ["初回導入の平均seat数と拡張triggerは", "AEとCSMのrenewal/upsell ownershipとcreditは"], sourceIds: ["speak-job-ae", "speak-job-csm", "speak-job-apac-head"] },
    { topic: "QUOTA ATTAINABILITY", title: "500社のheadlineより日本Enterprise economicsを確認したい", conclusion: "顧客logoの広がりは強いsignalだが、日本のARR、ACV、quota、達成率、sales cycle中央値は非公開。大企業向けの3〜12カ月cycleとself-source負荷を前提にterritoryを確認すべきです。", confidence: "探索中", evidence: ["Japan AEがnew ARRと自らpipelineを担当", "5,000人超企業への経験を重視", "APAC Sales責任者を新規採用"], counterSignals: ["consumer brandと国内導入事例はdoor openerになる", "専任Product・Content・CS teamを構築済み"], interviewQuestions: ["fully-ramped Japan AEのquota達成者比率、平均ACV、win rateは", "inbound、self-source、partner由来pipelineの比率は"], sourceIds: ["speak-job-ae", "speak-job-apac-head", "speak-japan-b2b"] },
    { topic: "COMPENSATION", title: "日本のOTE・Pay Mix・equityは未確認", conclusion: "公式求人に日本の報酬rangeはなく、role別のquotaやcommissionも非公開。Unicorn評価を現金報酬やequityの実現価値へ短絡せず、offerと実支給を確認したい。", confidence: "探索中", evidence: ["Japan求人に報酬rangeなし", "Series C評価額10億ドル", "AEはnew ARRとupsellを担当"], counterSignals: ["累計調達1.62億ドルは投資余力のsignal", "equityの付与有無・条件は未確認"], interviewQuestions: ["base/variable、equity、ramp保証、accelerator、capは", "new ARR、upsell、multi-year、seat expansionのcredit ruleは"], sourceIds: ["speak-job-ae", "speak-series-c"] },
    { topic: "CULTURE / CAREER", title: "B2B 0→1とAPAC scaleの両方を経験できる可能性", conclusion: "Japan AEはfounding B2B team、CSMはprogramをground-upで作り、Headはmulti-country playbookを整備する。役割定義を待つ人より、実務からprocessを文書化できる人に向きます。", confidence: "中", evidence: ["求人がrare 0-to-1 momentと説明", "Headがplaybook・battlecard・scriptを整備", "CSMがprogram構築とProduct feedbackを担当"], counterSignals: ["日本B2Bの昇進・在籍・離職実績は非公開", "consumer/B2B間の優先順位変更リスク"], interviewQuestions: ["日本B2B teamの現在人数と12カ月後のorg designは", "東京からAPAC leadershipへ進む評価指標と実例は"], sourceIds: ["speak-job-ae", "speak-job-csm", "speak-job-apac-head"] },
  ],
  cultureNotes: {
    organizationReadTitle: "小さなB2B teamで、売上とplaybookを同時に作る。",
    hypothesis: { title: "high-velocityとcraftの両立を求める。", body: "求人はtight-knit team、fast-changing environment、data-driven pipeline、playbook整備を強調する。AEは自ら商談を作り、CSMは運用を作り、APAC Headは地域間で再現させる。役割の外にある課題も拾い、学習をprocessへ変える姿勢が合いそうです。" },
    careerValue: { title: "AI × L&D × Enterprise Salesのcategoryを作る。", body: "HR/L&D buyerへAI productを売り、利用dataからrenewal・expansionまでつなぐ経験は、EdTech、HR Tech、AI applicationのGTMで説明しやすい。一方、日本組織の昇進実績はこれから検証が必要。", confidence: "中" },
  },
  customerProof: [
    { company: "サッポロビール", products: "Speak for Business", outcome: "時間・場所・回数を問わないAI会話、業務scenarioのcustomize、継続しやすさを評価。実務communicationへの寄与を担当者が説明。", implication: "一般英語ではなく、global businessの具体的な発話場面と習慣化が選定理由になる。", sourceId: "speak-japan-b2b" },
    { company: "LIXIL", products: "Speak for Business", outcome: "2024年から日本で先行導入。公開資料では利用seat・定量成果は未開示。", implication: "大手日本企業での初期referenceだが、営業では未公開成果を補わず、評価項目を確認する必要がある。", sourceId: "speak-japan-b2b" },
    { company: "Speak for Business導入企業群", products: "AI tutor / 管理portal / Customer Success", outcome: "2024年Series C時点で法人顧客200社超、employee adoption 85%と公式発表。", implication: "法人需要と利用のsignal。ただし地域・契約規模・renewalの内訳は非公開。", sourceId: "speak-series-c" },
  ],
  externalSignals: [
    { label: "法人traction", value: "500社超", detail: "日本公式B2Bページが掲げる現在の導入企業数。", caveat: "日本企業のみの件数か、有料seat・ARR・renewalの内訳は非公開。", sourceId: "speak-b2b" },
    { label: "市場課題", value: "日本speaking score 393", detail: "EF EPI 2025で公開された日本のspeaking score。", caveat: "EF受験者に基づく外部集計で、個別企業やSpeak利用者の能力を示さない。", sourceId: "speak-ef-epi" },
  ],
  roleLens: {
    salesMotion: "Japan AEはHR/L&D/Talent buyerと5,000人超企業を想定し、inbound/outboundから3〜12カ月のcomplex cycle、trial、Business Case、new ARR、upsellまで担当。初期部門でlandし、CSMと利用率・成果を作ってseat・region・scenarioをexpandするmotion。",
    compensation: "日本の基本給、OTE、Pay Mix、equity、acceleratorは公式求人で確認できない。金額を推測せず、new/upsellのcredit、ramp、multi-year、renewal分担と同時に確認する。",
    quota: "Japan AEのquota、平均ACV、達成率、rampは非公開。self-sourceとcomplex Enterprise salesの双方を求めるため、brand inboundだけでなくoutbound capacityと年度調達cycleが達成難度を左右する。",
    collaboration: "AEはCSM、SDR、Marketing、Product、Content、Engineeringと連携。CSMはonboarding、training、QBR、data分析、renewal/expansionを担い、APAC Headは地域playbookとforecastを統括する。小規模teamでhand-offとownershipを明確にする必要がある。",
  },
  leadership: { name: "Yan Kindyushenko", role: "スピークジャパン合同会社 日本統括", read: "2025年の法人版本格提供発表と2026年の日本向け公式発表で日本統括として確認。日本consumer事業と法人展開を率いる。一方、B2B営業の日常reporting lineやHead of APAC Sales採用後の役割分担は面接で確認したい。", sourceId: "speak-japan-b2b" },
  companyStats: {
    globalHeadcount: { value: "非公開", detail: "現行求人はSan Francisco、Seoul、Tokyo、Taipei、Ljubljanaの分散teamを説明するが、最新人数は未開示。", sourceId: "speak-job-ae" },
    japanHeadcount: { value: "非公開", detail: "東京にB2C/B2B teamがあるが、日本単体人数は確認できていない。" },
    japanOffice: { value: "東京・渋谷", detail: "Japan AE求人が渋谷officeを拠点とするhybrid勤務を記載。法人登記上の所在地と実勤務officeが異なる可能性は選考で確認したい。", sourceId: "speak-job-ae" },
    japanSince: { value: "2023年", detail: "日本語正式版をlaunch。法人版は2025年2月に本格提供。", sourceId: "speak-japan-b2b" },
  },
  salesAppeal: { intro: "consumer appの知名度だけでなく、B2B営業として得られる具体的な経験を整理しました。", points: [
    { title: "consumer PMFをEnterprise revenueへ変える0→1", detail: "日本で既に利用されるproductを、HR/L&DのBusiness Case、管理portal、CS運用へ翻訳する。brandのdoor openerと、未完成なB2B playbook作りを同時に経験できる。", sourceIds: ["speak-japan-product", "speak-job-ae", "speak-job-apac-head"] },
    { title: "学習効果とcommercial outcomeをつなぐ", detail: "AEがtrialとBusiness Caseを作り、CSMがactivation、QBR、renewal、expansionを担う。license販売だけでなく利用dataから継続売上を作る経験になる。", sourceIds: ["speak-job-ae", "speak-job-csm", "speak-b2b"] },
    { title: "AI音声技術を非technical buyerへ売る", detail: "非native speech向けASR、Realtime conversation、個別学習を、HR/L&Dの人材戦略と現場の会話行動へ翻訳する。AI infrastructure営業とは異なるapplication-layerの価値販売を学べる。", sourceIds: ["speak-asr", "speak-live-roleplay", "speak-japan-b2b"] },
  ] },
  interviewPrep: { intro: "appの成長と、日本B2B teamのquota economics・renewalの再現性を分けて確認したいポイントです。", questions: [
    { question: "日本B2BのARR、平均初回seat数、平均ACV、renewal、seat expansionは。", why: "500社超という導入数だけでは契約規模と継続性を判断できない。", sourceIds: ["speak-b2b", "speak-job-csm"] },
    { question: "fully-ramped Japan AEのquota、達成者比率、平均sales cycle、win rateは。", why: "consumer brandがEnterprise salesへどこまで転換しているかを見る。", sourceIds: ["speak-job-ae", "speak-series-c"] },
    { question: "inbound/self-source/SDR/partner由来pipelineと、new/upsellのcredit分担は。", why: "AEに自走pipelineとland-and-expandの双方を求めるため、実際の責任範囲が重要。", sourceIds: ["speak-job-ae", "speak-job-apac-head"] },
    { question: "trial成功を何で判定し、CSMはactivation・skill・業務成果をどうQBRへ載せるか。", why: "福利厚生利用で終わらず、renewalできるBusiness Outcomeの測定方法を確認する。", sourceIds: ["speak-job-csm", "speak-b2b", "speak-japan-b2b"] },
  ] },
  solutions: [
    { name: "Speak for Business", valueProp: "AI tutor、business English、custom roleplay、管理portal、Customer Successを企業向けに提供し、社員のspeaking実践と運用を支援。", url: "https://www.speak.com/jp/b2b", competitors: "Bizmates、RareJob、EF Corporate Learning、Duolingo for Business、ELSA等。", differentiation: "speaking-firstの反復量、AIによる個別scenario、consumerで磨いた継続設計、管理portalとCSを一体化。", retention: "日本のrenewal/NRRは非公開。2024年時点のemployee adoption 85%は会社公式値。" },
    { name: "AI Tutor / Tutor Lessons", valueProp: "個人のlevelと目標に合わせて説明・会話・feedbackを生成し、1対1の学習体験を常時提供。", url: "https://help.speak.com/en/articles/11966855-what-are-tutor-lessons", competitors: "ChatGPT音声、Duolingo Max、ELSA、真人tutor。", differentiation: "Learn→Practice→Applyのpedagogyと音声systemを組み合わせ、会話だけでなくlesson progressionを設計する点。", retention: "製品別・地域別の継続率は非公開。" },
    { name: "Live Roleplays", valueProp: "業務・日常のscenarioをAI相手に低latencyで練習し、tone、発音、prosody等のfeedbackを得る。", url: "https://www.speak.com/blog/live-roleplays", competitors: "真人英会話、汎用voice AI、他のAI英会話app。", differentiation: "Realtime speech-to-speechと学習contextを統合し、非native learnerが繰り返し話せる設計。", retention: "機能別の利用継続率は非公開。" },
    { name: "Speak Method / Business Content", valueProp: "Learn、Practice、Applyの3段階でphrase patternを実際の会話へ移し、会議・presentation・顧客対応等のbusiness scenarioへ適用。", url: "https://www.speak.com/blog/how-speak-reinvents-language-learning", competitors: "動画e-learning、語学教材、集合研修、online英会話。", differentiation: "content専門家とAI personalizationを組み合わせ、暗記より発話とcontextual feedbackを優先する点。", retention: "course別・法人別の継続率は非公開。" },
  ],
  customerStoriesUrl: "https://www.speak.com/jp/b2b",
  fitTags: ["HR/L&Dへ売りたい", "AI EdTechに関心がある", "Enterprise新規開拓が得意", "land-and-expandを作りたい", "0→1のplaybookを作れる", "利用dataをQBRへ変えたい", "日本語・英語で協業できる", "consumer PMFをB2Bへ広げたい"],
  comparisonMap: [
    { arena: "法人英会話", companies: ["Speak", "Bizmates", "RareJob"], why: "AI self-practiceか、真人lesson中心かの比較" },
    { arena: "AI語学学習", companies: ["Speak", "Duolingo", "ELSA Speak"], why: "発話量、curriculum、発音、法人管理の比較" },
    { arena: "Global人材育成", companies: ["Speak", "EF Corporate Learning", "Udemy Business"], why: "speaking skill特化か、広い研修portfolioかの比較" },
  ],
  sources: speakSources,
};

const dataikuSources: ResearchSource[] = [
  { id: "dataiku-about", label: "About Dataiku", url: "https://www.dataiku.com/company", kind: "企業公式", scope: "会社規模・使命・顧客数", checkedAt: "2026-08-11" },
  { id: "dataiku-origin", label: "The Dataiku Story", url: "https://www.dataiku.com/blog/the-dataiku-story", kind: "企業公式", scope: "創業背景・資金調達史", checkedAt: "2026-08-11" },
  { id: "dataiku-arr", label: "Dataiku $350M ARR発表", url: "https://www.dataiku.com/company/news/dataiku-surpasses-350-million-arr", kind: "企業公式", scope: "ARR・顧客・従業員・製品方向", checkedAt: "2026-08-11" },
  { id: "dataiku-product", label: "Dataiku日本公式 製品概要", url: "https://www.dataiku.com/ja/", kind: "企業公式", scope: "AI・分析・Agent・governance", checkedAt: "2026-08-11" },
  { id: "dataiku-japan-office", label: "Dataiku日本 お問い合わせ", url: "https://www.dataiku.com/ja/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B/", kind: "企業公式", scope: "日本オフィス所在地", checkedAt: "2026-08-11" },
  { id: "dataiku-hitachi", label: "日立ソリューションズとの販売代理店契約", url: "https://prtimes.jp/main/html/rd/p/000000299.000053429.html", kind: "企業公式", scope: "日本責任者・国内partner・導入支援", checkedAt: "2026-08-11" },
  { id: "dataiku-jal", label: "JALがDataikuを導入", url: "https://prtimes.jp/main/html/rd/p/000000018.000084325.html", kind: "企業公式", scope: "国内顧客・分析標準化・CX", checkedAt: "2026-08-11" },
  { id: "dataiku-softbank", label: "SoftBank customer story", url: "https://www.dataiku.com/blog/softbank", kind: "企業公式", scope: "国内顧客・Agent営業成果", checkedAt: "2026-08-11" },
  { id: "dataiku-mitsubishi", label: "Mitsubishi Electric customer story", url: "https://www.dataiku.com/blog/mitsubishi-electric", kind: "企業公式", scope: "国内顧客・製造分析成果", checkedAt: "2026-08-11" },
  { id: "dataiku-job-fsi", label: "Enterprise Account Executive, Japan | FSI", url: "https://job-boards.greenhouse.io/dataiku/jobs/5592425004", kind: "企業公式", scope: "日本FSI営業の職務・要件", checkedAt: "2026-08-11" },
  { id: "dataiku-job-retail", label: "Enterprise Account Executive – Japan | Retail & Telco", url: "https://job-boards.greenhouse.io/dataiku/jobs/5999894004", kind: "企業公式", scope: "日本Retail/Telco営業の職務・要件", checkedAt: "2026-08-11" },
  { id: "dataiku-fsa", label: "金融庁 AIディスカッションペーパー第1.1版", url: "https://www.fsa.go.jp/news/r6/sonota/20250304/aidp.html", kind: "外部集計", scope: "金融AIの活用・リスク・governance要求", checkedAt: "2026-08-11" },
];

const dataikuIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Dataikuは、企業のデータ活用から機械学習、生成AI・AIエージェントの開発と運用までを一つの環境で進めるエンタープライズAI基盤。「専門家が足りずデータ活用が一部門に閉じている」「PoCは増えるが本番運用に進まない」「ツールやデータが分散し、品質・権限・ガバナンスを管理できない」といった課題を解決する。データ部門だけでなく、事業部門、IT、経営層を巻き込み、個別のAI案件から全社共通基盤へ提案を広げられる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Dataikuは非公開企業。2025年10月にARR 3.5億ドルを超え、750社超、従業員1,250人超、13拠点を公式発表した。日本では渋谷拠点、日立ソリューションズ等のpartner、JAL・SoftBank・三菱電機の公開事例を持ち、2026年8月時点でFSIとRetail/Telcoに分けたEnterprise AEを採用している。",
    ipoOutlookSummary: "IPO計画・時期は公式確認できない。2022年の資金調達時評価額37億ドルは過去時点の非公開株式評価で、現在価値や流動性を保証しない。equityは株数、行使価格、希薄化、売却条件を個別に確認したい。",
    genbaVerdict: { headline: "AI実験を、業界別の統制された本番運用へ変えるEnterprise platform sale。", body: "ARRと国内事例は強いが、日本の2求人はいずれも5〜7年のfield salesとC-level alignmentを要求する。既存需要の刈り取りではなく、data platform・cloud・modelが混在する顧客で、use case、governance、ROIを一本のprogramへまとめる局面。日本ARR、territory、quota、implementation capacityは面接で分けて確認したい。" },
    milestones: [
      { year: "2013", label: "Dataiku創業", detail: "4人の創業者がdata scienceを専門家だけでなくbusiness teamも協働できるものにする目的で創業。", sourceId: "dataiku-origin" },
      { year: "2022", label: "2億ドルを調達", detail: "評価額37億ドルで資金調達し、platformとglobal expansionへ投資。", sourceId: "dataiku-origin" },
      { year: "2023", label: "日本カントリーマネージャー就任", detail: "佐藤豊氏が日本事業責任者に就任。", sourceId: "dataiku-hitachi" },
      { year: "2025", label: "ARR 3.5億ドル突破", detail: "750社超、従業員1,250人超、13拠点を公式発表。", sourceId: "dataiku-arr" },
      { year: "2026", label: "日本で業界別Enterprise AEを採用", detail: "FSIとRetail/Telcoを分けた2求人を公式ATSで確認。", sourceId: "dataiku-job-fsi" },
    ],
    growthDrivers: [
      { title: "analytics・ML・GenAI・Agentを一つのgovernanceへ", body: "既存data/cloud/modelの上にorchestration layerを置き、business userとtechnical teamが同じ統制下で開発・運用できる。個別toolから全社programへ契約を広げやすい。", sourceId: "dataiku-product" },
      { title: "国内顧客の定量成果", body: "SoftBankは営業1人あたり月約20時間削減、三菱電機は分析output時間60%削減を公開。生産性・cycle timeでBusiness Caseを作れる。", sourceId: "dataiku-softbank" },
      { title: "業界GTMとpartner delivery", body: "FSI、Retail/Telcoに営業coverageを分け、日立ソリューションズ等が販売・定着化を支援。業界知識と導入capacityを組み合わせる余地がある。", sourceId: "dataiku-hitachi" },
    ],
    japanGrowth: {
      headline: "渋谷拠点・国内大手事例・業界別AE採用が揃うscale段階。",
      narrative: "JALは部門横断のdata分析と手法標準化、SoftBankはAgentを使った営業活動、三菱電機は製造・energy分析で成果を公開。2025年には日立ソリューションズが販売と定着支援を開始し、2026年8月時点でFSIとRetail/TelcoのEnterprise AEを同時募集している。日本の売上・顧客数・team人数・quota達成率は非公開。",
      qualitativeSignals: [
        { label: "国内partnerを拡張", detail: "日立ソリューションズが販売代理店契約を締結し、導入・定着化支援を提供。", sourceId: "dataiku-hitachi" },
        { label: "日本発の定量事例", detail: "SoftBankと三菱電機が削減時間・分析cycleの具体的成果を公開。", sourceId: "dataiku-softbank" },
        { label: "industry coverageを採用", detail: "FSIとRetail/TelcoのEnterprise AEを別求人で募集。", sourceId: "dataiku-job-fsi" },
      ],
      sourceIds: ["dataiku-hitachi", "dataiku-jal", "dataiku-softbank", "dataiku-mitsubishi", "dataiku-job-fsi", "dataiku-job-retail"],
    },
    riskHypotheses: [
      { title: "AI platform競争でscopeが広がり、差別化説明が難しくなる", body: "cloud/data warehouse/model vendorもAI開発・governance・Agentを拡張する。Dataikuはvendor-neutralなorchestrationを訴求できる一方、既存platform内機能との重複と追加費用を問われる。", confidence: "中", evidence: ["複数vendor環境を統合すると求人が説明", "analyticsからAgentまでportfolioを拡張", "Enterprise営業がcompetitive positioningを要件化"], counterSignal: "business userとtechnical teamを同じgovernanceへ載せるcross-stack設計は、単一vendorの機能と異なる選定軸になる。", sourceIds: ["dataiku-product", "dataiku-job-fsi", "dataiku-job-retail"] },
      { title: "日本の成長はuse case量より本番化capacityに左右される", body: "regulated FSIや大企業ではsecurity、risk、data、legal、change managementを通過する必要がある。pipelineが増えてもSE・CS・partnerがPoCからproductionを支えられなければ拡張が遅れる。", confidence: "中", evidence: ["FSI求人がsecurity・compliance・legal inquiryを明記", "日立ソリューションズが定着支援を提供", "日本team人数は非公開"], counterSignal: "複数の国内事例とpartner deliveryはlocal proofとcapacityの土台になる。", sourceIds: ["dataiku-job-fsi", "dataiku-hitachi", "dataiku-jal"] },
    ],
    sourceIds: ["dataiku-arr", "dataiku-origin", "dataiku-hitachi", "dataiku-softbank", "dataiku-mitsubishi", "dataiku-job-fsi", "dataiku-job-retail"],
  },
  sellingPlaybook: {
    frameIntro: "Dataikuの売り方は『AIを作れるか』ではなく、部門ごとの実験が統制・再利用・成果測定を欠き、全社の本番運用へ進まない問題が起点。data stackを置換する提案ではなく、人・data・model・Agentを一つの運用systemへするBusiness Caseを作る。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "JALは複数sourceのdata分析と分析手法の標準化、SoftBankは営業conversationから商談につながるAgent活用、三菱電機はPython中心の分析cycle短縮を目的に導入した。共通するのはmodel精度だけでなく、専門家依存、手作業、部門分断、再現できない分析を解消し、業務KPIへ反復してつなぐことにある。" },
      { title: "製品の成り立ちから見る課題", body: "Dataikuは、data scienceがcodeを書ける少数の専門家に閉じ、business側と共同で価値へ変えにくい問題から生まれた。visual workflowとcodeを共存させ、data準備からML・GenAI・Agent・governanceへ広げた成り立ちは、個別modelより人と工程の分断がscaleのbottleneckだという見方を示す。" },
      { title: "外部環境の要求から見る課題", body: "企業は生成AIの速度と同時に、dataの出所、model判断、access、risk、説明可能性、費用対効果を問われる。金融庁のAIディスカッションペーパー第1.1版も、AIのリスク管理だけでなく『挑戦しないリスク』を踏まえた健全な利活用とgovernanceを求める。部門ごとのnotebookや汎用AIでは、迅速な実装と全社統制を同時に証明しにくい。" },
    ],
    narrative: [
      { label: "背景", body: "各部門がdata分析、ML、生成AI、Agentを試し、経営は実験数ではなく本番成果と投資回収を求めている。cloud、warehouse、modelは複数vendorへ分散している。" },
      { label: "課題", body: "専門家不足、手作業、重複pipeline、権限・承認・監視の分断により、PoCがproductionへ進まない。部門ごとにtoolを足すほど再利用と監査が難しくなる。" },
      { label: "解決策", body: "既存stackの上にDataikuを置き、data準備、analytics、ML、GenAI、Agentを共通workflow・governanceで運用。最初の業務use caseでcycle time、利用者、品質、損失回避・増収を測り、templateとcontrolを横展開する。" },
      { label: "選定の理由", body: "Databricks・Snowflakeはdata/AI基盤、SASは高度analytics、cloud各社は自社stackに強い。Dataikuはbusiness userとdata scientist、codeとvisual、複数cloud/model、開発とgovernanceを一つのorchestration layerでつなぐ点が選定条件になる。" },
    ],
    openingHook: "AIのPoC数ではなく、誰が・どのdataとmodelで・どの承認を通し・いくらの業務成果を出したかを、全社で説明できますか。",
    valueHypothesis: "一つの高頻度業務を8〜12週間で対象にし、現行の分析cycle、手作業時間、production化率、利用者数、review工数をbaseline化。Dataikuでworkflowとcontrolを共通化し、SoftBankや三菱電機のように削減時間とbusiness KPIを測ってから、隣接use caseへtemplate展開する。",
    commonObjection: { objection: "Databricks、Snowflake、各cloudのAI機能があり、新しいplatformは不要。", reframe: "data保存やmodel提供の重複ではなく、複数stackを跨ぐ人・workflow・approval・monitoringが既存投資で共通化されているかを比較する。一つのuse caseで開発速度だけでなくgovernance工数と利用定着も同じKPIで測る。" },
  },
  facts: [
    { label: "グローバルARR", value: "$350M超", detail: "2025年10月の会社公式発表。", sourceIds: ["dataiku-arr"] },
    { label: "顧客数", value: "750社超", detail: "世界の組織数。日本単体ではない。", sourceIds: ["dataiku-arr"] },
    { label: "従業員規模", value: "1,250人超", detail: "13拠点・remoteを含むグローバル値。", sourceIds: ["dataiku-arr"] },
    { label: "創業", value: "2013年", detail: "Parisで創業。現在はNew Yorkにも本社機能。", sourceIds: ["dataiku-origin"] },
    { label: "日本の定量成果", value: "月約20時間削減", detail: "SoftBankの営業1人あたりの会社公式事例。", sourceIds: ["dataiku-softbank"] },
    { label: "日本の公開営業求人", value: "2件", detail: "FSI、Retail & Telco向けEnterprise AEを確認。", sourceIds: ["dataiku-job-fsi", "dataiku-job-retail"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "AI本番化の競争軸はmodelからorchestrationとgovernanceへ", conclusion: "複数vendorを残したまま人・workflow・controlを共通化できれば、単発PoCを全社AI programへ変える余地があります。", confidence: "高", evidence: ["ARR 3.5億ドル・750社超", "日本顧客がcycle timeを定量化", "金融庁が活用とrisk管理の両立を提起"], counterSignals: ["cloud/data vendorが隣接機能を拡張", "日本の顧客数・renewalは非公開"], interviewQuestions: ["日本で初回契約の主use caseと競合は", "PoCからproduction・expandへのconversionは"], sourceIds: ["dataiku-arr", "dataiku-softbank", "dataiku-fsa"] },
    { topic: "SALES MOTION", title: "industry painからC-level programを作るfull-cycle sale", conclusion: "業界別AEがRisk・Compliance・Technology・Operationsを束ねるため、technical demoより規制・業務・ROIを同じvisionへ揃える比重が高い。", confidence: "高", evidence: ["FSIとRetail/Telcoで求人を分割", "C-level vision alignmentを明記", "security・legal・technical inquiryもAEが管理"], counterSignals: ["partner/inboundの比率は非公開", "既存customer expansionも含みnew logo比率は不明"], interviewQuestions: ["self-source・partner・marketing由来pipelineの比率は", "AE/SE/CS/partnerのstage別ownershipは"], sourceIds: ["dataiku-job-fsi", "dataiku-job-retail", "dataiku-hitachi"] },
    { topic: "QUOTA ATTAINABILITY", title: "global ARRより日本のterritoryとproduction capacityを見る", conclusion: "国内proofはあるがquota、平均ACV、達成率、rampは非公開。industry account数とSE・CS・partner容量が達成難度を決める。", confidence: "探索中", evidence: ["2業界AEを同時採用", "日立ソリューションズが支援", "国内定量事例が複数"], counterSignals: ["日本売上・顧客数は非公開", "長いsecurity/governance reviewの可能性"], interviewQuestions: ["fully-ramped AEの達成者比率と中央値は", "named account、平均ACV、sales cycle、PoC conversionは"], sourceIds: ["dataiku-job-fsi", "dataiku-job-retail", "dataiku-hitachi"] },
    { topic: "COMPENSATION", title: "日本のOTE・Pay Mix・equityは非公開", conclusion: "過去評価額やARRを個人報酬へ短絡せず、quota economics、ramp保証、equity条件をofferで確認すべきです。", confidence: "探索中", evidence: ["日本求人に給与rangeなし", "会社は非公開", "AEがnewとexistingを担当"], counterSignals: ["ARR成長は投資余力のsignal", "報酬条件は個別offer次第"], interviewQuestions: ["base/variable、accelerator、cap、equity、rampは", "new・expansion・multi-year・partner dealのcreditは"], sourceIds: ["dataiku-arr", "dataiku-job-fsi", "dataiku-job-retail"] },
    { topic: "CULTURE / CAREER", title: "業界知識とAI platformの両方を深めるbuilder role", conclusion: "顧客の規制・業務課題をProduct・Engineeringへ返しながらindustry playbookを作る経験になりうる。", confidence: "中", evidence: ["求人がvoice of customerを明記", "cross-functionalにProduct/Engineeringと連携", "日本partner網を拡張"], counterSignals: ["日本のpromotion・tenureは非公開", "急速なproduct拡張でenablement負荷が高い可能性"], interviewQuestions: ["入社90日のindustry/product enablementは", "日本からmanagement/APACへ進んだ実例は"], sourceIds: ["dataiku-job-fsi", "dataiku-job-retail", "dataiku-hitachi"] },
  ],
  cultureNotes: { organizationReadTitle: "業界課題とAI技術を横断し、顧客の声をplatformへ戻す組織。", hypothesis: { title: "consultativeだが、full-cycleのrevenue ownershipは明確。", body: "求人はC-level vision、industry expertise、proactive outreach、複数account、security/legal/technical escalationを同時に要求する。専門家へ任せきらず、課題発見からcloseまで統合する姿勢が合いそう。" }, careerValue: { title: "regulated Enterprise AIを本番化する経験。", body: "AI/data platformを業界規制、governance、ROIへ翻訳し、partnerとproductionへ進める実績は希少。一方、日本の昇進dataは未確認。", confidence: "中" } },
  customerProof: [
    { company: "SoftBank", products: "Dataiku / AI Agent", outcome: "営業のconversationを商談へ結び付けるAgent modelを展開し、営業1人あたり月約20時間、年25万時間の削減を見込むと公式事例で説明。", implication: "AI導入をlicense数でなく営業活動の質・時間・商談接続で売れる。", sourceId: "dataiku-softbank" },
    { company: "三菱電機", products: "Dataiku analytics platform", outcome: "analytics output作成時間を60%、data visualization時間を80%削減したと公式事例で公開。", implication: "専門家のPython作業を共通workflowへ変え、cycle timeをBusiness Caseにできる。", sourceId: "dataiku-mitsubishi" },
    { company: "日本航空(JAL)", products: "Dataiku", outcome: "複数data sourceの横断分析と分析手法の標準化を進め、1to1 marketingと顧客体験向上を狙う。", implication: "部門単体の分析toolより、全社の再利用・標準化を入口にできる。", sourceId: "dataiku-jal" },
  ],
  externalSignals: [
    { label: "成長traction", value: "ARR $350M超", detail: "2025年10月に750社超で到達。", caveat: "グローバル値で、日本売上やrenewalを示さない。", sourceId: "dataiku-arr" },
    { label: "外部要求", value: "AI活用とrisk管理の両立", detail: "金融庁AIディスカッションペーパー第1.1版が、健全な利活用とgovernance、挑戦しないリスクを論点化。", caveat: "法的義務を一律に定める資料ではなく、個社要件は業態・use caseで異なる。", sourceId: "dataiku-fsa" },
  ],
  roleLens: { salesMotion: "業界別named accountへproactive outreachし、business・data・IT・Risk/ComplianceのC-level visionを揃え、use case・security・legal・technical reviewを通してland。production成果をtemplate化し、部門・use caseへexpandする。", compensation: "日本のbase、OTE、Pay Mix、equity、acceleratorは未公開。推測せず、new/expansion、partner deal、multi-yearのcreditとrampを確認する。", quota: "quota、平均ACV、達成率、rampは非公開。industry account density、existing/new比率、PoC conversion、SE/CS/partner capacityが達成難度を左右する。", collaboration: "AEはMarketing、Product Management、Engineering、SE、CS、partnerと連携。特にFSIではRisk・Compliance・Technology・Operationsの社内外stakeholderを一つのdecision processへまとめる。" },
  leadership: { name: "佐藤 豊", role: "Dataiku Japan カントリーマネージャー", read: "2023年就任。2025年の日立ソリューションズ提携発表でも日本責任者として確認でき、partner販売と定着支援を含む日本scaleを進める。営業組織の詳細なreporting lineは選考で確認したい。", sourceId: "dataiku-hitachi" },
  companyStats: { globalHeadcount: { value: "1,250人超", detail: "13拠点・remoteを含む2025年10月時点。", sourceId: "dataiku-arr" }, japanHeadcount: { value: "非公開", detail: "日本team単体の最新人数は確認できていない。" }, japanOffice: { value: "東京・渋谷", detail: "神宮前1-5-8 神宮前タワービルディング14階。", sourceId: "dataiku-japan-office" }, japanSince: { value: "確認中", detail: "日本officeの現住所と2023年の責任者就任は確認したが、日本法人の設立年月を一次情報で確定できていない。", sourceId: "dataiku-hitachi" } },
  salesAppeal: { intro: "AIの追い風だけでなく、営業として積める再現可能な経験を整理しました。", points: [
    { title: "AIを業界KPIとgovernanceへ翻訳する", detail: "FSIのfraud・risk・reporting、Retail/Telcoの顧客・運用課題を、platform機能ではなくC-level programとBusiness Caseへ変える。", sourceIds: ["dataiku-job-fsi", "dataiku-job-retail", "dataiku-fsa"] },
    { title: "PoCから全社productionを売る", detail: "SoftBank・三菱電機のように削減時間と業務成果を測り、workflowとcontrolを再利用して部門横断へexpandする。", sourceIds: ["dataiku-softbank", "dataiku-mitsubishi", "dataiku-product"] },
    { title: "directとpartner deliveryを組み合わせる", detail: "AEが顧客visionを持ち、日立ソリューションズ等が導入・定着を支える。Enterprise platformのecosystem saleを経験できる。", sourceIds: ["dataiku-hitachi", "dataiku-job-fsi"] },
  ] },
  interviewPrep: { intro: "global成長と日本territoryの実現可能性を分けて確認する質問です。", questions: [
    { question: "日本の業界別ARR、顧客数、平均ACV、平均sales cycle、renewal/expansionは。", why: "750社・ARR 3.5億ドルはglobal値で、日本quotaの土台を示さない。", sourceIds: ["dataiku-arr", "dataiku-job-fsi"] },
    { question: "fully-ramped AEのquota達成者比率と中央値、ramp期間は。", why: "業界知識とcomplex salesを求める分、立ち上がりとterritoryの質が重要。", sourceIds: ["dataiku-job-fsi", "dataiku-job-retail"] },
    { question: "PoC開始・成功・production・expandのconversionと標準KPIは。", why: "AI実験を本番成果へ変える再現性を確認する。", sourceIds: ["dataiku-softbank", "dataiku-mitsubishi", "dataiku-product"] },
    { question: "AE、SE、CS、Product、日立等partnerのstage別ownershipとcapacityは。", why: "security・integration・定着支援がquota達成を左右する。", sourceIds: ["dataiku-hitachi", "dataiku-job-fsi"] },
  ] },
  solutions: [
    { name: "Dataiku Platform", valueProp: "analytics、ML、GenAI、Agentを一つのenterprise orchestration layerで構築・展開・govern。", url: "https://www.dataiku.com/ja/", competitors: "Databricks、Snowflake、SAS、各cloud AI platform等。", differentiation: "visualとcode、businessとtechnical、複数data/model vendor、開発とgovernanceを同じ環境で接続。", retention: "製品別NRR・日本renewalは非公開。" },
    { name: "Agent Hub", valueProp: "Enterprise AI Agentの作成・利用・監視・governanceを共通workspaceへまとめる。", url: "https://www.dataiku.com/product/deliver-ai-agents", competitors: "Microsoft Copilot Studio、Google Vertex AI Agent Builder、AWS Bedrock Agents等。", differentiation: "既存analytics/ML workflowと同じdata・権限・governanceの文脈でAgentを運用。", retention: "Agent Hub単体のcommercial指標は非公開。" },
    { name: "Dataiku for FSI", valueProp: "fraud、risk、AML、regulatory reporting、customer intelligenceを統制されたAI programとして支援。", url: "https://www.dataiku.com/solutions/banking", competitors: "SAS、Databricks、cloud各社、内製platform。", differentiation: "business analystからdata scientistまで協働し、regulated workflowのcontrolと再利用を両立。", retention: "日本FSIの顧客数・renewalは非公開。" },
  ],
  customerStoriesUrl: "https://www.dataiku.com/company/customers",
  fitTags: ["Enterprise AIを売りたい", "FSIに強い", "Retail/Telcoに強い", "C-level商談が得意", "data/analyticsを理解する", "governanceを価値へ変えたい", "partnerと協業できる", "複雑商談を動かせる"],
  comparisonMap: [
    { arena: "Enterprise AI / Data Science", companies: ["Dataiku", "Databricks", "SAS"], why: "collaboration、ML lifecycle、governanceの比較" },
    { arena: "Data Cloud上のAI", companies: ["Dataiku", "Snowflake", "Google Cloud"], why: "vendor-neutral orchestrationかstack-native機能かの比較" },
    { arena: "Enterprise Agent", companies: ["Dataiku", "Microsoft Copilot Studio", "AWS Bedrock"], why: "Agent作成だけでなく既存analyticsとgovernanceをどう共通化するか" },
  ],
  sources: dataikuSources,
};

const verkadaSources: ResearchSource[] = [
  { id: "verkada-about", label: "Verkada会社概要", url: "https://www.verkada.com/jp/about/", kind: "企業公式", scope: "会社規模・製品・成長史・leadership", checkedAt: "2026-08-11" },
  { id: "verkada-origin", label: "Verkada創業背景", url: "https://www.verkada.com/uk/blog/modern-video-security-businesses-schools/", kind: "企業公式", scope: "製品の原点・cloud architecture", checkedAt: "2026-08-11" },
  { id: "verkada-valuation", label: "Verkada 2025年評価額発表", url: "https://www.verkada.com/ca/blog/our-new-valuation-dec-2025/", kind: "企業公式", scope: "評価額・bookings・導入規模", checkedAt: "2026-08-11" },
  { id: "verkada-japan-contact", label: "Verkada Japan お問い合わせ", url: "https://www.verkada.com/jp/contact/", kind: "企業公式", scope: "日本オフィス所在地", checkedAt: "2026-08-11" },
  { id: "verkada-japac", label: "Verkada JAPAC成長・責任者発表", url: "https://www.prnewswire.com/apac/news-releases/verkada-continues-rapid-growth-and-expansion-in-japan-and-asia-pacific-302272487.html", kind: "企業公式", scope: "JAPAC顧客成長・責任者・国内partner", checkedAt: "2026-08-11" },
  { id: "verkada-chiba", label: "千葉ロッテマリーンズ導入事例", url: "https://www.verkada.com/jp/customers/chiba-lotte-marines/", kind: "企業公式", scope: "国内顧客・stadium security", checkedAt: "2026-08-11" },
  { id: "verkada-nishimachi", label: "西町インターナショナルスクール導入事例", url: "https://www.verkada.com/jp/customers/nishimachi-international-school/", kind: "企業公式", scope: "国内顧客・school・privacy", checkedAt: "2026-08-11" },
  { id: "verkada-chunichi", label: "中日美容専門学校導入事例", url: "https://www.verkada.com/jp/customers/chunichi-beauty-school/", kind: "企業公式", scope: "国内顧客・camera・air quality", checkedAt: "2026-08-11" },
  { id: "verkada-partners", label: "Verkada partner program", url: "https://www.verkada.com/jp/partners/", kind: "企業公式", scope: "channel model・partner value", checkedAt: "2026-08-11" },
  { id: "verkada-job-ae", label: "Account Executive, Tokyo", url: "https://job-boards.greenhouse.io/verkada/jobs/4915934007", kind: "企業公式", scope: "東京AEの職務・勤務条件", checkedAt: "2026-08-11" },
  { id: "verkada-job-enterprise", label: "Enterprise Account Executive, Tokyo", url: "https://job-boards.greenhouse.io/verkada/jobs/4913872007", kind: "企業公式", scope: "Enterprise AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "verkada-job-channel", label: "Channel Sales Manager, Japan", url: "https://job-boards.greenhouse.io/verkada/jobs/4568144007", kind: "企業公式", scope: "Channel Salesの職務・要件", checkedAt: "2026-08-11" },
  { id: "verkada-ppc", label: "個人情報保護委員会 カメラ画像利用資料", url: "https://www.ppc.go.jp/news/camera_related/", kind: "外部集計", scope: "顔識別cameraの透明性・利用目的・安全管理", checkedAt: "2026-08-11" },
  { id: "verkada-ftc", label: "FTC Verkada enforcement", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/ftc-takes-action-against-security-camera-firm-verkada-over-charges-it-failed-secure-videos-other", kind: "外部集計", scope: "過去breach・security program・監査要求", checkedAt: "2026-08-11" },
];

const verkadaIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Verkadaは、多拠点を持つ企業の総務、セキュリティ、IT部門が、防犯カメラ、入退室、アラームなどをクラウドで一元管理するための物理セキュリティ基盤。「拠点ごとに機器と管理方法が分断している」「事故発生時に映像や入退室履歴をすぐ確認できない」「保守や権限管理が現地担当者に依存している」といった課題を解決する。ハードウェアとSaaSを組み合わせ、現場の安全、全社ガバナンス、運用効率を同時に扱い、IT以外の多様な意思決定者を巻き込める点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Verkadaは非公開企業。2025年12月に評価額58億ドル、annualized bookings 10億ドル超、170カ国超・200万台超のdevice、3万社超を公式発表した。2026年4月時点で従業員2,200人、17拠点。日本では渋谷office、国内顧客・partner、東京と大阪の直販採用に加え、追加Channel Sales Managerを募集している。",
    ipoOutlookSummary: "IPO計画・時期は公式確認できない。58億ドルは2025年の非公開株式評価であり、equityの流動性や将来価値を保証しない。株数、行使価格、優先株条件、希薄化、売却可能性を確認したい。",
    genbaVerdict: { headline: "日本は直販・channel・地域coverageを同時に増やす、field-heavyなscale局面。", body: "cloud SaaSの分かりやすさとphysical siteの複雑さが同居する。東京・大阪のAE、Enterprise AE、Channel Salesの同時採用は拡張signalだが、hardware、施工、network、privacy、travel、partner executionまでquotaに影響する。30,000社のglobal momentumだけでなく、日本のpilot conversion、partner capacity、territoryを確認したい。" },
    milestones: [
      { year: "2016", label: "Verkada創業", detail: "consumer cameraの簡単さをEnterprise securityへ持ち込む目的で創業。", sourceId: "verkada-origin" },
      { year: "2017", label: "初期video securityをlaunch", detail: "on-premise NVRと複雑なnetwork設定を減らすcloud-managed architectureを市場投入。", sourceId: "verkada-origin" },
      { year: "2024", label: "JAPAC顧客が前年比72%増", detail: "Jonathon Dixon氏をJAPAC VP/MDへ任命し、regional GTMを強化。", sourceId: "verkada-japac" },
      { year: "2025", label: "評価額58億ドル", detail: "annualized bookings 10億ドル超、200万台超を公式発表。", sourceId: "verkada-valuation" },
      { year: "2026", label: "30,000社・2,200人規模", detail: "17拠点へ拡大し、日本で東京・大阪・channelの営業採用を継続。", sourceId: "verkada-about" },
    ],
    growthDrivers: [
      { title: "単一platformで複数product lineをexpand", body: "video、access、alarm、intercom、air quality、visitorを一つのcloud管理へ統合。cameraからlandし、site・product・use caseを増やす余地がある。", sourceId: "verkada-about" },
      { title: "hybrid cloudの導入容易性", body: "edge側の保存・処理とcloud管理を組み合わせ、NVRや複雑なnetwork運用を減らす。multi-site顧客で遠隔管理とrolloutのBusiness Caseを作れる。", sourceId: "verkada-origin" },
      { title: "channelで施工・地域coverageをscale", body: "integrator・installer・resellerをenableし、direct AEとco-sellする。日本全域のsite対応を直販人員だけに依存せず広げられる。", sourceId: "verkada-job-channel" },
    ],
    japanGrowth: {
      headline: "国内reference、partner、東京・大阪の直販採用が同時に進む。",
      narrative: "千葉ロッテマリーンズ、西町インターナショナルスクール、中日美容専門学校など、stadium・school・複数buildingで国内事例を公開。2024年には高千穂交易を含むregional partnerを挙げ、JAPAC顧客が1年で72%増と発表した。2026年8月時点で東京・大阪のAE/Enterprise AEと追加Channel Sales Managerを募集。日本のARR、顧客数、team人数、quota達成率は非公開。",
      qualitativeSignals: [
        { label: "国内業界reference", detail: "stadium、school、municipality、manufacturing等の日本事例を公開。", sourceId: "verkada-chiba" },
        { label: "JAPAC顧客72%増", detail: "2024年発表。日本単体の成長率ではない。", sourceId: "verkada-japac" },
        { label: "地域・channel採用", detail: "東京・大阪の直販roleと追加Channel Sales Managerを公式ATSで確認。", sourceId: "verkada-job-channel" },
      ],
      sourceIds: ["verkada-japac", "verkada-chiba", "verkada-nishimachi", "verkada-chunichi", "verkada-job-ae", "verkada-job-enterprise", "verkada-job-channel"],
    },
    riskHypotheses: [
      { title: "privacy-sensitive productは信頼がsales cycleの前提", body: "cameraと顔識別dataを扱うため、利用目的、通知、安全管理、access、retentionを説明できなければ導入が止まる。日本の個人情報保護委員会も顔識別機能の利用目的特定と公表等を求める。", confidence: "高", evidence: ["製品がprivacy-sensitiveを使命に明記", "PPCがcamera画像利用の留意点を公開", "教育・医療等sensitive siteへ展開"], counterSignal: "granular permissionとcentralized managementをprivacy designとして提案できる。", sourceIds: ["verkada-about", "verkada-ppc", "verkada-nishimachi"] },
      { title: "過去のsecurity breachを踏まえたtrust verificationが必要", body: "FTCは2020〜2021年のbreach等をめぐり、2024年に包括的information security programと第三者監査等を含む措置を公表した。営業は現在のcontrol・監査・運用改善をfactで説明する必要がある。", confidence: "高", evidence: ["FTCが2024年の措置を公表", "過去breachでcamera access等を指摘", "cloud physical securityは信頼がpurchase条件"], counterSignal: "現在はprivacy-sensitive missionとtrust programを掲げ、規模も3万社超へ成長しているが、顧客は個別に最新audit evidenceを確認すべき。", sourceIds: ["verkada-ftc", "verkada-about"] },
    ],
    sourceIds: ["verkada-about", "verkada-valuation", "verkada-japac", "verkada-job-ae", "verkada-job-enterprise", "verkada-job-channel", "verkada-ppc", "verkada-ftc"],
  },
  sellingPlaybook: {
    frameIntro: "Verkadaの売り方は『cameraを新しくする』ではなく、security systemがsiteごとに分断され、incident対応・maintenance・access・privacy説明を全社で再現できない問題が起点。hardwareとsoftwareを別々に売らず、人と場所を守る運用systemとして提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "千葉ロッテマリーンズは3万人規模stadiumで遠距離の状況把握と要注意人物の早期検知、西町インターナショナルスクールは470人・35国籍のcommunityで高速検索と細かなaccess権限、中日美容専門学校は4棟のcameraとair qualityを統合した。共通課題は録画機器の更新ではなく、少人数でも複数site・多様なriskを素早く把握し、権限と証跡を管理することにある。" },
      { title: "製品の成り立ちから見る課題", body: "Verkadaは、consumer cameraは簡単なのにEnterprise video securityはNVR、network設定、現地maintenance、古いUIで複雑だという問題から生まれた。edge processing/storageとcloud managementを組み合わせ、videoからaccess・alarm等へ広げた成り立ちは、個別deviceより分断された運用とownershipがbottleneckだという見方を示す。" },
      { title: "外部環境の要求から見る課題", body: "人手不足、複数拠点、盗難・災害・労働安全への対応が増える一方、camera・顔特徴dataには説明責任がある。個人情報保護委員会は顔識別機能の利用目的を特定し、機能利用を明らかにして通知・公表すること等を示す。企業は『見える範囲を増やす』だけでなく、誰が何の目的でdataへaccessし、どう守るかを同時に証明しなければならない。" },
    ],
    narrative: [
      { label: "背景", body: "店舗、工場、学校、office、stadiumの物理securityはcamera、入退室、alarm、visitor、sensorが別systemで増え、現場人員は限られている。" },
      { label: "課題", body: "incident時の映像探索、remote確認、user管理、更新、施工がsiteごとに分断。古いNVRとnetwork運用がIT負荷を増やし、privacy・security reviewも全社標準化できない。" },
      { label: "解決策", body: "一つのpilot siteでcameraと必要productをcloud管理へ統合し、検索時間、false alert、現地出動、maintenance、access reviewを測る。権限・retention・利用目的を設計し、partnerと標準構成を複数siteへrolloutする。" },
      { label: "選定の理由", body: "Axis・Hanwha等はcamera ecosystem、Genetec・Milestoneはopen VMS、既存security vendorはlocal integrationに強い。Verkadaはdevice、cloud software、AI search、複数product、remote supportをsingle-vendorで簡素化し、導入・運用速度を出せる点が選定条件になる。" },
    ],
    openingHook: "incidentが起きた時、何分で該当映像へ到達し、誰が閲覧したかを示し、別siteでも同じ手順を再現できますか。",
    valueHypothesis: "一つの代表siteで6〜10週間のpilotを行い、映像検索時間、現地出動、device downtime、alert-to-action、user access review工数をbaseline比較。privacy notice、role、retention、incident responseも同時に設計し、成果と標準構成をpartnerと複数siteへ展開する。",
    commonObjection: { objection: "既存cameraは動いており、cloud化はcostとcyber riskを増やす。", reframe: "camera台数や購入価格だけでなく、NVR、server、VPN、更新、現地maintenance、検索時間、downtime、権限監査を含む3〜5年TCOとriskを比較する。全置換せず、一siteで同じincident scenarioとsecurity requirementを検証する。" },
  },
  facts: [
    { label: "顧客数", value: "30,000社超", detail: "Fortune 500の100社超を含む会社公式値。", sourceIds: ["verkada-about"] },
    { label: "年間換算bookings", value: "$1B超", detail: "2025年12月の会社公式発表。ARRとは異なる。", sourceIds: ["verkada-valuation"] },
    { label: "評価額", value: "$5.8B", detail: "2025年12月時点の非公開株式評価。", sourceIds: ["verkada-valuation"] },
    { label: "導入device", value: "200万台超", detail: "170カ国超に展開するglobal値。", sourceIds: ["verkada-valuation"] },
    { label: "従業員規模", value: "2,200人", detail: "2026年4月時点、17拠点。", sourceIds: ["verkada-about"] },
    { label: "日本の掲載営業求人", value: "3件", detail: "東京AE、Enterprise AE、Channel SalesをGenbaに掲載。大阪にも別求人を確認。", sourceIds: ["verkada-job-ae", "verkada-job-enterprise", "verkada-job-channel"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "physical securityの統合とremote運用に強い追い風", conclusion: "multi-site顧客でcameraから入り、access・alarm・sensor等へ広げれば、securityとfacilityの共通platformになりうる。", confidence: "高", evidence: ["30,000社・200万台超", "6 product line", "国内で多業界の事例"], counterSignals: ["legacy/open ecosystemを好む顧客", "privacy・cyber reviewが導入障壁"], interviewQuestions: ["日本で最初に売れるproductとcross-sell順序は", "pilotからmulti-site rolloutのconversionは"], sourceIds: ["verkada-about", "verkada-chiba", "verkada-nishimachi"] },
    { topic: "SALES MOTION", title: "direct full-cycleとchannel executionを一体化するsale", conclusion: "AEがoutbound・demo・closeを持ち、integrator/resellerが施工と地域coverageを支える。案件ownershipとpartner enablementの質がscaleを決める。", confidence: "高", evidence: ["AEがfull-cycleとpartner連携を担当", "Channel Managerがnet-new pipeline責任", "Enterprise AEは出張50%超"], counterSignals: ["direct/channel別pipeline比率は非公開", "siteごとの導入条件でcycleが変動"], interviewQuestions: ["sourced/influenced/directのcredit ruleは", "partner別のactive pipelineと施工capacityは"], sourceIds: ["verkada-job-ae", "verkada-job-enterprise", "verkada-job-channel"] },
    { topic: "QUOTA ATTAINABILITY", title: "global bookingsより日本のsite economicsを見る", conclusion: "東京・大阪・channelの採用は成長signalだが、日本のquota、平均deal、達成率は非公開。pilot conversion、site数、hardware供給、partner capacityが重要。", confidence: "探索中", evidence: ["日本で複数営業roleを採用", "JAPAC顧客72%増", "国内referenceを公開"], counterSignals: ["日本単体売上・顧客数は非公開", "Enterprise roleは移動負荷が高い"], interviewQuestions: ["fully-ramped AEのquota達成者比率は", "平均初回site数、ACV、cycle、rollout expansionは"], sourceIds: ["verkada-japac", "verkada-job-enterprise", "verkada-job-channel"] },
    { topic: "COMPENSATION", title: "日本のOTE・equity・expense economicsは非公開", conclusion: "報酬だけでなく、travel、partner deal、hardware/software、multi-year、rolloutのcreditを確認しないと実支給を判断できない。", confidence: "探索中", evidence: ["日本求人に給与rangeなし", "Enterprise roleは出張50%超", "会社は非公開"], counterSignals: ["bookings 10億ドル超は成長signal", "条件はrole・offerで異なる"], interviewQuestions: ["base/variable、equity、ramp、accelerator、capは", "hardware、license、partner、site expansionのcreditは"], sourceIds: ["verkada-valuation", "verkada-job-enterprise", "verkada-job-channel"] },
    { topic: "CULTURE / CAREER", title: "office・field・partnerを動かすhigh-activity culture", conclusion: "求人は原則office、頻繁なtravel、outbound、demo、site visit、partner QBRを明記。desk-based SaaSより現場密度が高い。", confidence: "高", evidence: ["Tokyo AEは原則office", "Enterprise AEは出張50%超", "Channel roleは全国出張"], counterSignals: ["日本のtenure・promotionは非公開", "rapid scalingでterritory変更の可能性"], interviewQuestions: ["週次のoffice/customer/partner/travel配分は", "AEからEnterprise/managerへの実例と基準は"], sourceIds: ["verkada-job-ae", "verkada-job-enterprise", "verkada-job-channel"] },
  ],
  cultureNotes: { organizationReadTitle: "officeと現場で高速に動き、directとpartnerで売上を作る組織。", hypothesis: { title: "activity量だけでなく、現地導入までownershipを持つ。", body: "prospecting、demo、site visit、integrator連携、market feedbackをAEが持ち、Channel Managerはonboardingからrevenueまで担当。曖昧なhandoffを拾い、現場の学びをGTMへ返せる人が合いそう。" }, careerValue: { title: "SaaS・hardware・AI・channelを横断する。", body: "physical securityのBusiness Caseからmulti-site rolloutまで経験できれば、IoTやSecurityのEnterprise GTMで希少性がある。一方、travelとtrust workの負荷は高い。", confidence: "高" } },
  customerProof: [
    { company: "千葉ロッテマリーンズ", products: "Video Security", outcome: "3万人規模stadiumで28倍zoom・360度viewを活用し、100m離れた人物の状況把握や要注意人物の早期検知を支援。", implication: "画質ではなく、混雑環境の検索・判断・初動速度を価値にできる。", sourceId: "verkada-chiba" },
    { company: "西町インターナショナルスクール", products: "Video Security", outcome: "470人・35国籍のcommunityで高速なsmart searchと細かなaccess権限を評価。", implication: "school safetyとprivacyを二者択一にせず、permission設計を選定条件にできる。", sourceId: "verkada-nishimachi" },
    { company: "中日美容専門学校", products: "Video Security / Air Quality Sensors", outcome: "4棟でcameraとair quality sensorを統合し、喫煙対策をdataで追跡。", implication: "security部門だけでなくfacility・health complianceへmulti-productを広げられる。", sourceId: "verkada-chunichi" },
  ],
  externalSignals: [
    { label: "global traction", value: "30,000社超", detail: "200万台超、170カ国超へ展開。", caveat: "日本単体の顧客数・ARR・renewalを示さない。", sourceId: "verkada-valuation" },
    { label: "privacy要求", value: "顔識別機能の利用目的・公表", detail: "個人情報保護委員会がcamera画像と顔特徴dataの適切な取扱いを整理。", caveat: "具体的義務は機能・利用目的・dataの扱いで異なり、個別法務確認が必要。", sourceId: "verkada-ppc" },
  ],
  roleLens: { salesMotion: "AEがoutbound・demo・proposal・negotiationをfull-cycleで持ち、pilot siteの成果をEnterprise rolloutへ展開。integrator/resellerが設計・施工・地域coverageを支え、Channel Managerがpartner plan・enablement・QBR・co-sellをrevenueまで持つ。", compensation: "日本のbase、OTE、Pay Mix、equity、acceleratorは未公開。hardware/software、partner、rollout、multi-yearのcreditとtravel expenseを確認する。", quota: "quota、平均deal、達成率、rampは非公開。site density、pilot conversion、partner capacity、travel、supply・installation timelineが達成難度を左右する。", collaboration: "AEはSolutions Engineer、integrator、reseller、Channel Sales、Marketing、Productと連携。顧客側ではSecurity、IT、Facilities、Operations、Legal/Privacy、現地siteを束ねる。" },
  leadership: { name: "Jonathon Dixon", role: "Vice President & Managing Director, JAPAC", read: "2024年に就任し、日本を含むAustralia、Korea、Taiwan、SingaporeのGTMとoperationsを統括。日本Country Managerの公開確認はできず、国内営業のreporting lineと権限は面接で確認したい。", sourceId: "verkada-japac" },
  companyStats: { globalHeadcount: { value: "2,200人", detail: "2026年4月時点、17拠点。", sourceId: "verkada-about" }, japanHeadcount: { value: "非公開", detail: "Tokyo officeと複数求人は確認したが、日本単体人数は未開示。" }, japanOffice: { value: "東京・渋谷", detail: "渋谷1-17-4 PMO渋谷9階。", sourceId: "verkada-japan-contact" }, japanSince: { value: "確認中", detail: "Tokyo officeと2024年のJAPAC拡大は確認したが、日本法人の設立年月を一次情報で確定できていない。", sourceId: "verkada-japac" } },
  salesAppeal: { intro: "cloud SaaS営業とは異なる、現場とecosystemを含む経験を整理しました。", points: [
    { title: "physical siteのBusiness Caseを作る", detail: "検索時間、現地出動、downtime、maintenance、incident responseを定量化し、security投資を経営判断へ変える。", sourceIds: ["verkada-chiba", "verkada-nishimachi", "verkada-job-enterprise"] },
    { title: "pilotからmulti-site・multi-productへexpand", detail: "cameraでlandし、access、alarm、sensor等と別siteへ展開。HQ標準と現場実装を同時に経験できる。", sourceIds: ["verkada-about", "verkada-chunichi", "verkada-job-enterprise"] },
    { title: "channelをrevenue engineへ変える", detail: "integrator・VARの採用、enablement、QBR、co-sell、pipelineを一貫して動かす。", sourceIds: ["verkada-job-channel", "verkada-partners"] },
  ] },
  interviewPrep: { intro: "global momentumと、日本のfield economics・trust要求を分けて確認します。", questions: [
    { question: "日本の顧客数、ARR/bookings、平均初回site・ACV、pilot-to-rollout conversionは。", why: "globalの3万社・10億ドルbookingsだけでは日本quotaを判断できない。", sourceIds: ["verkada-valuation", "verkada-japac"] },
    { question: "fully-ramped AE/Enterprise AEのquota達成者比率、ramp、territory変更は。", why: "東京・大阪で採用が進むためcoverageの安定性が重要。", sourceIds: ["verkada-job-ae", "verkada-job-enterprise"] },
    { question: "direct・partner sourced/influenced案件のownership、margin、credit、施工capacityは。", why: "channel conflictとdeliveryがclose・rolloutを左右する。", sourceIds: ["verkada-job-channel", "verkada-partners"] },
    { question: "FTC措置後のsecurity program、第三者監査、顧客へ提示する最新evidenceは。", why: "過去incidentを曖昧にせず、現在のtrust postureをfactで確認する。", sourceIds: ["verkada-ftc", "verkada-about"] },
  ] },
  solutions: [
    { name: "Video Security", valueProp: "edgeとcloudを組み合わせ、AI検索、remote管理、alert、共有をmulti-siteで提供。", url: "https://www.verkada.com/jp/security-cameras/", competitors: "Axis、Hanwha Vision、Avigilon、Rhombus、Eagle Eye等。", differentiation: "device・software・cloud management・supportを統合し、NVR運用と導入複雑性を減らす。", retention: "製品別NRR・日本renewalは非公開。" },
    { name: "Access Control", valueProp: "door accessとvideoを同じplatformで管理し、entry eventと映像を統合。", url: "https://www.verkada.com/jp/access-control/", competitors: "LenelS2、Genetec、Brivo、HID ecosystem等。", differentiation: "video・identity・door eventを一つのcloud interfaceで扱い、remote operationを簡素化。", retention: "cross-sell・renewal指標は非公開。" },
    { name: "Command Platform", valueProp: "video、access、alarm、intercom、air quality、visitorを一つの管理面へ統合。", url: "https://www.verkada.com/jp/command/", competitors: "Genetec、Milestone、複数vendor統合、各security suite。", differentiation: "single-vendorのproduct統合、permission、AI search、remote supportによる展開速度。", retention: "platformの日本NRRは非公開。" },
  ],
  customerStoriesUrl: "https://www.verkada.com/jp/customers/",
  fitTags: ["Physical Securityを売りたい", "field salesが得意", "Enterprise rolloutを動かせる", "channelを作れる", "IoTに関心がある", "privacyを説明できる", "出張に対応できる", "demoからcloseまで持ちたい"],
  comparisonMap: [
    { arena: "Cloud video security", companies: ["Verkada", "Rhombus", "Eagle Eye Networks"], why: "device、cloud、AI、managementの統合比較" },
    { arena: "Enterprise VMS", companies: ["Verkada", "Genetec", "Milestone"], why: "single-vendor simplicityかopen ecosystemか" },
    { arena: "Camera ecosystem", companies: ["Verkada", "Axis", "Hanwha Vision"], why: "hardware選択肢、partner網、cloud運用の比較" },
  ],
  sources: verkadaSources,
};

const miraklSources: ResearchSource[] = [
  { id: "mirakl-about", label: "Mirakl会社概要", url: "https://www.mirakl.com/ja-jp/company/about-mirakl/", kind: "企業公式", scope: "創業史・顧客規模・leadership", checkedAt: "2026-08-11" },
  { id: "mirakl-arr", label: "Mirakl 2025年業績発表", url: "https://www.mirakl.com/fr-fr/news/mirakl-a-atteint-218-m-darr-23-et-a-lance-mirakl-nexus-sa-solution-pour-le-commerce-agentique-1/", kind: "企業公式", scope: "ARR・profitability・GMV・製品成長", checkedAt: "2026-08-11" },
  { id: "mirakl-series-e", label: "Mirakl Series E発表", url: "https://www.mirakl.com/news/mirakl-announces-555-million-series-e-funding-2", kind: "企業公式", scope: "資金調達・評価額", checkedAt: "2026-08-11" },
  { id: "mirakl-japan-launch", label: "Mirakl日本法人設立", url: "https://www.mirakl.com/ja-jp/news/press-release-20220525/", kind: "企業公式", scope: "日本参入・Japan Cloud・日本責任者", checkedAt: "2026-08-11" },
  { id: "mirakl-japan-2025", label: "Mirakl Japan 年頭所感2025", url: "https://www.mirakl.com/ja-JP/blog/hew-year-thought-2025", kind: "企業公式", scope: "国内顧客・日本事業方向", checkedAt: "2026-08-11" },
  { id: "mirakl-nitori", label: "ニトリ採用発表", url: "https://www.mirakl.com/ja-JP/news/jp-press-2024-01-22", kind: "企業公式", scope: "国内顧客・品揃え・在庫物流cost", checkedAt: "2026-08-11" },
  { id: "mirakl-satsudora", label: "サツドラ採用発表", url: "https://www.mirakl.com/ja-jp/news/sapporo-drug-store-241011/", kind: "企業公式", scope: "国内顧客・地域marketplace・launch速度", checkedAt: "2026-08-11" },
  { id: "mirakl-gladd", label: "GLADD導入事例", url: "https://www.mirakl.com/ja-JP/news/jp-press-230728", kind: "企業公式", scope: "国内顧客・assortment・customer experience", checkedAt: "2026-08-11" },
  { id: "mirakl-platform", label: "Mirakl日本公式", url: "https://www.mirakl.com/ja-jp/", kind: "企業公式", scope: "Marketplace・Dropship・Ads・Agentic Commerce", checkedAt: "2026-08-11" },
  { id: "mirakl-job-ae", label: "Senior Account Executive", url: "https://job-boards.greenhouse.io/japan/jobs/5735648004", kind: "企業公式", scope: "日本AEの職務・要件", checkedAt: "2026-08-11" },
  { id: "mirakl-job-sc", label: "Solution Consultant", url: "https://job-boards.greenhouse.io/japan/jobs/6006507004", kind: "企業公式", scope: "日本Solution Consultantの職務・要件", checkedAt: "2026-08-11" },
  { id: "mirakl-meti-ec", label: "経済産業省 令和6年度EC市場調査", url: "https://www.meti.go.jp/press/2025/08/20250826005/20250826005.html", kind: "外部集計", scope: "日本のB2C/B2B EC市場・EC化率", checkedAt: "2026-08-11" },
  { id: "mirakl-meti-platform", label: "経済産業省 デジタルプラットフォーム取引透明化法", url: "https://www.meti.go.jp/policy/mono_info_service/digitalplatform/provider.html", kind: "外部集計", scope: "platformの透明性・公正性・運営体制", checkedAt: "2026-08-11" },
];

const miraklIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-11",
  salesSnapshot: "Miraklは、小売、メーカー、卸売企業が自社ECをマーケットプレイスへ拡張し、在庫を抱えずに品揃えと新たな収益源を増やすためのコマース基盤。「自社在庫だけでは品揃えを広げられない」「出品者、商品、受注、品質の管理が複雑で運営できない」「既存の顧客基盤やブランドを新たなプラットフォーム事業に変えられない」といった課題を解決する。ECツールの導入にとどまらず、経営層と新しい事業のP&Lを設計し、IT、商品、物流、法務まで巻き込んで事業を立ち上げる点が、営業としての面白さ。",
  marketStatus: {
    isPublic: false,
    growthSummary: "Miraklは非公開企業。2025年にARR 2.18億ドル(前年比23%増)、group通期黒字化、Marketplace/Dropship GMV 146億ドル(31%増)を公式発表。450社超、10万超のbrand・sellerを支える。日本法人は2022年にJapan Cloudと設立し、JR西日本、ニトリ、アイリスプラザ、サツドラ等の採用を公開。2026年8月時点でSenior AEとSolution Consultantを募集している。",
    ipoOutlookSummary: "IPO計画・時期は公式確認できない。2021年Series Eの評価額35億ドル超は過去時点の非公開株式評価で、現在価値や流動性を保証しない。黒字化とARR成長は事業signalだが、equityは個別条件を確認したい。",
    genbaVerdict: { headline: "日本はcategory教育から、国内platform businessの実装・拡張へ進む段階。", body: "国内大手の採用とcurrent ARRは強い一方、marketplaceはSaaS導入だけで成功せず、assortment、seller獲得、catalog、物流、決済、CS、governance、P&Lの再設計が必要。AEは経営変革を売り、Solution Consultantは受注後のarchitectureとlaunchを担う。日本顧客のlive状況、GMV、quota、delivery capacityを確認したい。" },
    milestones: [
      { year: "2012", label: "Mirakl創業", detail: "SplitGames/Fnac marketplaceの経験をもとに、企業が自社marketplaceを持てるよう創業。", sourceId: "mirakl-about" },
      { year: "2013", label: "初のDropship platform", detail: "El Corte Inglésと初のDropship platformをlaunch。", sourceId: "mirakl-about" },
      { year: "2021", label: "Series E 5.55億ドル", detail: "評価額35億ドル超で調達。", sourceId: "mirakl-series-e" },
      { year: "2022", label: "日本法人を設立", detail: "Japan Cloudと提携し、佐藤恭平氏が代表取締役社長に就任。", sourceId: "mirakl-japan-launch" },
      { year: "2025", label: "ARR 2.18億ドル・通期黒字", detail: "GMV 146億ドル、前年比31%増を達成。", sourceId: "mirakl-arr" },
    ],
    growthDrivers: [
      { title: "MarketplaceからCommerce OSへ拡張", body: "Marketplace、Dropship、catalog、payment、Ads、seller network、Agentic Commerceを組み合わせ、GMVだけでなく効率・広告・新channelへwallet shareを広げる。", sourceId: "mirakl-platform" },
      { title: "core businessの黒字化とGMV成長", body: "2025年にARR 23%増、通期黒字、GMV 31%増。45社の新規Enterprise顧客がMarketplace、Dropship、payment、catalogを採用。", sourceId: "mirakl-arr" },
      { title: "国内大手のplatform戦略", body: "ニトリ、サツドラ、JR西日本、アイリスプラザ等が自社brandを軸に品揃え・地域ecosystem・新収益を狙う。日本向けreferenceでcategory教育を進めやすい。", sourceId: "mirakl-japan-2025" },
    ],
    japanGrowth: {
      headline: "2022年設立から、国内大手の複数platform計画と実装人材採用へ。",
      narrative: "Japan Cloudとの共同体制で2022年に法人を設立。ニトリは品揃え拡大と在庫・物流cost削減、サツドラは自社ECと地域marketplaceの同時launch、GLADDは商品数と購買体験の拡張を目的に採用した。2025年の会社発表ではJR西日本、ニトリ、アイリスプラザ、サツドラを公開顧客として挙げる。日本のARR、顧客数、live marketplace数、GMV、team人数は非公開。",
      qualitativeSignals: [
        { label: "国内大手4社を公開", detail: "JR西日本、ニトリ、アイリスプラザ、サツドラがplatform構築を開始。", sourceId: "mirakl-japan-2025" },
        { label: "地域ecosystem use case", detail: "サツドラが北海道の商品・地域事業者をつなぐmarketplaceを計画。", sourceId: "mirakl-satsudora" },
        { label: "post-sale consultingを採用", detail: "受注直後からarchitecture・integration・launchを担うSolution Consultantを募集。", sourceId: "mirakl-job-sc" },
      ],
      sourceIds: ["mirakl-japan-launch", "mirakl-japan-2025", "mirakl-nitori", "mirakl-satsudora", "mirakl-gladd", "mirakl-job-ae", "mirakl-job-sc"],
    },
    riskHypotheses: [
      { title: "software導入よりoperating modelが成否を左右する", body: "marketplaceはseller recruitment、catalog quality、pricing、service level、returns、payment、trust、P&Lを継続運営する必要がある。顧客側のexecutive sponsorと専任teamが弱いと、launchやGMVが遅れる。", confidence: "高", evidence: ["Solution Consultantが受注直後からlaunchを支援", "AEはtechnical/legal/financeを含む全cycleを担当", "国内事例が品揃え・物流・地域partnerを目的化"], counterSignal: "Miraklの10万超seller networkとglobal best practice、local consultingが運営立上げを支援できる。", sourceIds: ["mirakl-job-ae", "mirakl-job-sc", "mirakl-nitori", "mirakl-about"] },
      { title: "platform規模拡大でseller governanceと透明性が重くなる", body: "品揃えを第三者sellerへ広げるほど、取引条件、審査、品質、苦情、返品、ranking、payment、product safetyの管理が必要。経産省も大規模online mallに透明性・公正性の体制と報告を求める。", confidence: "中", evidence: ["Transparency Actが取引条件開示等を要求", "marketplaceはsellerとの継続関係を持つ", "Solution Consultantがriskと要件を設計"], counterSignal: "Miraklのseller・catalog・payment機能とoperating practiceを、顧客の適用法・policyに合わせて設計できる。", sourceIds: ["mirakl-meti-platform", "mirakl-platform", "mirakl-job-sc"] },
    ],
    sourceIds: ["mirakl-arr", "mirakl-about", "mirakl-japan-launch", "mirakl-japan-2025", "mirakl-job-ae", "mirakl-job-sc", "mirakl-meti-ec"],
  },
  sellingPlaybook: {
    frameIntro: "Miraklの売り方は『EC siteを作る』ではなく、自社在庫と既存channelだけでは品揃え・成長・収益性を同時に伸ばせず、顧客接点を巨大platformへ明け渡す問題が起点。technology、seller ecosystem、運営modelを一つのP&L変革として提案する。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "ニトリは品揃えを広げながら在庫・物流costを抑え事業領域を拡大、サツドラは自社ECと北海道の地域事業者をつなぐmarketplaceを同時launch、GLADDは目的買いに対応する商品数とpersonalization dataの拡充を狙った。共通課題はEC機能不足ではなく、自社brandと顧客dataを保ちながら外部sellerの供給力を成長へ変える運営能力にある。" },
      { title: "製品の成り立ちから見る課題", body: "創業者は2005年のSplitGamesとFnac marketplace運営を通じ、Amazon等のplatform modelに対し、既存企業もopenでscalableなecosystemを持つ必要があると考えた。2012年の創業後、Marketplace、Dropship、B2Bへ広げた成り立ちは、ECを自社在庫のonline販売だけで捉えると品揃え・speed・network effectで限界が来るという見方を示す。" },
      { title: "外部環境の要求から見る課題", body: "経産省調査では2024年の国内B2C-ECは26.1兆円、B2B-ECは514.4兆円へ増加し、EC化率も上昇した。成長する一方、platform運営にはsellerとの取引条件、透明性、公正性、苦情処理等の説明責任が強まる。企業は商品数を増やすだけでなく、第三者sellerを速くonboardし、品質・service・payment・dataを自社brand基準で統制できなければならない。" },
    ],
    narrative: [
      { label: "背景", body: "EC市場と顧客期待が拡大し、retailer・manufacturer・wholesalerは自社在庫だけで幅広い品揃え、即時性、新channel、収益性を実現しにくい。" },
      { label: "課題", body: "marketplaceを内製するとseller onboarding、catalog、order、payment、quality、returns、reportingの開発・運用が増える。大手mall依存では顧客data・brand・marginを自社で持ちにくい。" },
      { label: "解決策", body: "一つのcategoryでseller・assortment・economicsを設計し、MiraklでMarketplace/Dropship、catalog、paymentをlaunch。SKU、active seller、GMV、margin、fulfillment、NPSを測り、categoryとAds等へ拡張する。" },
      { label: "選定の理由", body: "Adobe Commerce・commercetools等はcommerce stack、marketplacer等はmarketplace構築、内製は自由度に強い。MiraklはEnterprise規模のMarketplace/Dropship運営、10万超のseller network、catalog・payment・Ads、global best practiceを一体で提供する点が選定条件になる。" },
    ],
    openingHook: "自社ECの売上だけでなく、『在庫を持たずに増やせる品揃え』と、そのseller品質・margin・顧客体験を経営指標として管理できていますか。",
    valueHypothesis: "優先categoryで8〜12週間のbusiness designを行い、現行SKU、欠品検索、在庫cost、supplier onboarding、margin、顧客離脱をbaseline化。限定sellerでlaunchし、active seller、time-to-onboard、SKU、GMV、contribution margin、delivery/return、NPSを確認してからcategoryとchannelを拡張する。",
    commonObjection: { objection: "自社EC基盤や大手mallがあり、marketplaceを増やすと運用が複雑になる。", reframe: "新site追加ではなく、自社brand・顧客dataを維持したまま品揃えとmarginを増やすoperating modelとして比較する。内製・mall・Miraklでseller onboarding時間、在庫risk、take rate、data ownership、運用headcountを同じP&Lに置く。" },
  },
  facts: [
    { label: "ARR", value: "$218M", detail: "2025年、前年比23%増。", sourceIds: ["mirakl-arr"] },
    { label: "Marketplace/Dropship GMV", value: "$14.6B", detail: "2025年、前年比31%増。", sourceIds: ["mirakl-arr"] },
    { label: "収益性", value: "通期黒字", detail: "2025年group全体で達成した会社公式発表。", sourceIds: ["mirakl-arr"] },
    { label: "顧客規模", value: "450社超", detail: "B2C/B2BのEnterprise顧客。", sourceIds: ["mirakl-about"] },
    { label: "日本法人", value: "2022年設立", detail: "Japan Cloudと提携して東京に設立。", sourceIds: ["mirakl-japan-launch"] },
    { label: "日本の公開求人", value: "2件", detail: "Senior AEとSolution Consultantを確認。", sourceIds: ["mirakl-job-ae", "mirakl-job-sc"] },
  ],
  hypotheses: [
    { topic: "PRODUCT / MARKET", title: "EC成長をinventory-lightなplatform modelへ変える余地", conclusion: "自社brandとdataを保ちながら第三者assortmentを増やす需要は、小売だけでなくB2B・manufacturerにも広がる可能性があります。", confidence: "高", evidence: ["ARR 23%・GMV 31%成長", "450社超", "日本のB2C/B2B EC市場が拡大"], counterSignals: ["marketplace運営能力がないと成果が遅れる", "日本のlive/renewal/GMVは非公開"], interviewQuestions: ["日本でlive済みmarketplaceとGMVは", "Marketplace/Dropship/Adsの初回・cross-sell比率は"], sourceIds: ["mirakl-arr", "mirakl-meti-ec", "mirakl-japan-2025"] },
    { topic: "SALES MOTION", title: "経営P&Lをchallenger型で作るcomplex sale", conclusion: "AEはC-suiteへ新しいbusiness modelを提案し、technical/legal/financeをcloseまで管理。既製categoryのlicense販売よりbusiness case設計が中心。", confidence: "高", evidence: ["AEが8年以上とROI/challengerを要件化", "newとupsell/cross-sellを担当", "SCが受注後のarchitectureとlaunchを主導"], counterSignals: ["inbound・partner比率は非公開", "顧客側の専任team不足でcycleが長期化"], interviewQuestions: ["商談のeconomic buyerと平均stakeholder数は", "AEからSC/partnerへのhandoffと共同KPIは"], sourceIds: ["mirakl-job-ae", "mirakl-job-sc"] },
    { topic: "QUOTA ATTAINABILITY", title: "global成長より日本のlive実績とdelivery capacityを見る", conclusion: "国内logoは強いが日本ARR、ACV、quota、達成率は非公開。契約だけでなくlaunchとGMVがreferenceとexpansionを左右する。", confidence: "探索中", evidence: ["国内大手4社を公開", "AEとSCを同時採用", "groupは黒字化"], counterSignals: ["日本のlive件数・GMVは未開示", "complex transformationでsales cycleが長い可能性"], interviewQuestions: ["fully-ramped AEの達成者比率、quota、ACV、cycleは", "signed-to-live期間とSC/partner capacityは"], sourceIds: ["mirakl-japan-2025", "mirakl-job-ae", "mirakl-job-sc", "mirakl-arr"] },
    { topic: "COMPENSATION", title: "日本の報酬・equity・quota creditは非公開", conclusion: "ARRと黒字化は会社signalだが、個人報酬はnew、upsell、multi-product、go-live、partner dealのcreditで判断すべきです。", confidence: "探索中", evidence: ["求人に給与rangeなし", "会社は非公開", "AEはnewとexisting拡張を担当"], counterSignals: ["収益性改善は安定性のsignal", "offer条件は個別"], interviewQuestions: ["base/variable、equity、ramp、accelerator、capは", "new、upsell、multi-product、go-liveのcredit ruleは"], sourceIds: ["mirakl-arr", "mirakl-job-ae"] },
    { topic: "CULTURE / CAREER", title: "expertiseとexecutionを同時に求める小規模Japan team", conclusion: "5つのvalueはGet Things Done、expertise、client empowerment、teamworkを強調。AEもSCもrole境界を越えてplatform businessの成功へ関与する可能性が高い。", confidence: "中", evidence: ["求人が5 core valuesを明記", "SCが複数projectとProduct feedbackを担当", "Japan Cloudとlocal operationを構築"], counterSignals: ["日本のtenure・promotionは非公開", "global/localの意思決定分担は不明"], interviewQuestions: ["日本team人数と12カ月の採用計画は", "日本からAPAC/managementへ進む実例は"], sourceIds: ["mirakl-job-ae", "mirakl-job-sc", "mirakl-japan-launch"] },
  ],
  cultureNotes: { organizationReadTitle: "platform businessのP&Lとlaunchを、expertiseで最後まで動かす組織。", hypothesis: { title: "categoryを教えるだけでなく、clientの運営能力まで作る。", body: "AEはchallengerとROI、SCはarchitecture・risk・go-live、会社valueはGet Things DoneとSatisfy & Empower Clientsを掲げる。契約だけでなく顧客の自走とscaleへ踏み込む人が合いそう。" }, careerValue: { title: "Commerce SaaSと事業開発の中間経験。", body: "marketplace P&L、seller ecosystem、Enterprise architecture、launchを横断できれば、platform strategyやCommerce Transformationで希少性がある。", confidence: "高" } },
  customerProof: [
    { company: "ニトリ", products: "Mirakl Marketplace Platform", outcome: "品揃え拡大、在庫・物流cost削減、収益性向上を狙い採用。2032年の事業visionに向けECの事業領域を広げる。", implication: "marketplaceを商品数ではなくinventory-lightな成長P&Lとして売れる。", sourceId: "mirakl-nitori" },
    { company: "サッポロドラッグストアー", products: "Mirakl Marketplace Platform", outcome: "自社EC刷新とmarketplaceを同時に立ち上げ、北海道の商品・地域事業者との連携を目指す。", implication: "地域ecosystemとmember baseをplatform businessへ変えるuse case。", sourceId: "mirakl-satsudora" },
    { company: "la belle vie / GLADD", products: "Mirakl Marketplace Platform", outcome: "約600万人の会員基盤で商品数を増やし、目的買い、personalization、購買体験、新収益を狙う。", implication: "assortment拡大をdata・discovery・revenueへつなげる提案ができる。", sourceId: "mirakl-gladd" },
  ],
  externalSignals: [
    { label: "国内EC市場", value: "B2C 26.1兆円", detail: "2024年、前年比5.1%増。B2B-ECは514.4兆円、10.6%増。", caveat: "市場全体の成長で、Miraklの売上や顧客成果を直接示さない。", sourceId: "mirakl-meti-ec" },
    { label: "platform運営要求", value: "透明性・公正性", detail: "経産省が指定platformに取引条件開示、手続・体制整備、年次報告等を要求。", caveat: "すべてのMirakl顧客が指定対象になるわけではなく、規模・業態・法適用を個別確認する必要がある。", sourceId: "mirakl-meti-platform" },
  ],
  roleLens: { salesMotion: "AEがretail・manufacturer・wholesalerのC-suiteへplatform P&Lを提案し、technical/legal/financeを含むcomplex cycleをclose。SCが受注直後からarchitecture、integration、risk、launchを主導し、MarketplaceからDropship・catalog・payment・Adsへexpandする。", compensation: "日本のbase、OTE、Pay Mix、equity、acceleratorは未公開。new/upsell、multi-product、partner、go-liveのcreditとrampを確認する。", quota: "quota、平均ACV、達成率、rampは非公開。greenfield category、顧客のexecutive sponsor、business case、signed-to-live capacityが達成難度を左右する。", collaboration: "AEはSolution Consulting、Customer Success、Product、Legal、Finance、SI/agencyと連携。顧客側では経営、EC、Merchandising、IT、Operations、Finance、Legal、seller teamを束ねる。" },
  leadership: { name: "佐藤 恭平", role: "Mirakl株式会社 代表取締役 兼 日本カントリーマネージャー", read: "2022年の日本法人設立時に就任し、現行会社概要でも日本カントリーマネージャーとして掲載。SAP・Microsoft等でのSaaS/cloud・business network経験を持ち、Japan Cloudと日本GTMを進める。", sourceId: "mirakl-about" },
  companyStats: { globalHeadcount: { value: "非公開", detail: "最新のグローバル従業員数は会社公式ページで確認できていない。" }, japanHeadcount: { value: "非公開", detail: "日本teamの最新人数は未開示。" }, japanOffice: { value: "東京", detail: "2022年設立発表で東京拠点を明記。詳細住所は本調査の一次情報で確定していない。", sourceId: "mirakl-japan-launch" }, japanSince: { value: "2022年", detail: "Japan Cloudとの戦略提携でMirakl株式会社を設立。", sourceId: "mirakl-japan-launch" } },
  salesAppeal: { intro: "Commerce software営業を超えて積める経験を整理しました。", points: [
    { title: "新しいplatform P&LをC-suiteへ売る", detail: "品揃え、inventory、take rate、margin、seller、customer dataを一つのgrowth modelとして提案する。", sourceIds: ["mirakl-job-ae", "mirakl-nitori", "mirakl-satsudora"] },
    { title: "契約からlaunch・GMVまでをつなぐ", detail: "AEのBusiness CaseをSCがarchitecture・integration・riskへ落とし、signed dealをlive businessへ変える。", sourceIds: ["mirakl-job-ae", "mirakl-job-sc"] },
    { title: "MarketplaceからCommerce OSへexpand", detail: "Marketplace/Dropshipを入口にcatalog、payment、seller network、Ads、Agentic Commerceへ広げるmulti-product motion。", sourceIds: ["mirakl-platform", "mirakl-arr"] },
  ] },
  interviewPrep: { intro: "国内logoだけでなく、日本のlive economicsとroleの実現可能性を確認します。", questions: [
    { question: "日本の有料顧客、live marketplace、GMV、ARR、renewal、multi-product比率は。", why: "公開採用logoと実稼働・commercial tractionを分けて見る。", sourceIds: ["mirakl-japan-2025", "mirakl-arr"] },
    { question: "fully-ramped AEのquota達成者比率、平均ACV、sales cycle、rampは。", why: "greenfieldのbusiness model saleでterritoryとcycleが重要。", sourceIds: ["mirakl-job-ae"] },
    { question: "signed-to-liveの中央値、同時project数、SC/partner capacity、launch KPIは。", why: "deliveryがreference・renewal・expansionを左右する。", sourceIds: ["mirakl-job-sc", "mirakl-satsudora"] },
    { question: "new、upsell、Marketplace、Dropship、Ads、partner案件のcreditとhandoffは。", why: "Commerce OSへの拡張でownershipが曖昧だとquota評価が読めない。", sourceIds: ["mirakl-job-ae", "mirakl-platform"] },
  ] },
  solutions: [
    { name: "Mirakl Marketplace Platform", valueProp: "Enterpriseが第三者sellerをonboardし、自社brandのmarketplaceを立ち上げ・運営・scaleする。", url: "https://www.mirakl.com/ja-jp/products/marketplace-platform/", competitors: "Marketplacer、Spryker、Adobe Commerce拡張、内製等。", differentiation: "Enterprise運営機能、10万超のseller network、global best practice、B2C/B2B実績。", retention: "日本renewal・product別NRRは非公開。" },
    { name: "Mirakl Dropship Platform", valueProp: "supplier在庫を活用し、retailerがpricing・margin・customer experienceを管理しながら品揃えを増やす。", url: "https://www.mirakl.com/ja-jp/products/dropship-platform/", competitors: "CommerceHub、fabric、EDI/OMS内製等。", differentiation: "Marketplaceと共通のseller・catalog・order infrastructureでmodelを組み合わせられる。", retention: "Dropship単体のcommercial指標は非公開。" },
    { name: "Mirakl Ads / Commerce Suite", valueProp: "marketplace trafficとfirst-party commerce dataをretail media収益へ変え、catalog・payment・seller管理と統合。", url: "https://www.mirakl.com/ja-jp/products/ads/", competitors: "Criteo、CitrusAd、Amazon Ads、retailer内製等。", differentiation: "marketplace operating dataとseller ecosystemに近い位置で広告収益化を設計。", retention: "Mirakl Adsの日本売上・renewalは非公開。" },
  ],
  customerStoriesUrl: "https://www.mirakl.com/ja-jp/content/customer-stories/",
  fitTags: ["Enterprise Commerceを売りたい", "小売に強い", "製造・卸売に強い", "C-suite商談が得意", "challenger saleができる", "P&Lを設計できる", "複雑導入を動かせる", "platform businessに関心がある"],
  comparisonMap: [
    { arena: "Enterprise Marketplace", companies: ["Mirakl", "Marketplacer", "Spryker"], why: "seller運営、scale、B2B/B2C、ecosystemの比較" },
    { arena: "Commerce Platform", companies: ["Mirakl", "Adobe Commerce", "commercetools"], why: "transaction storefrontかplatform operating modelか" },
    { arena: "Dropship / Supplier Network", companies: ["Mirakl", "CommerceHub", "fabric"], why: "supplier onboarding、catalog、order、marketplace統合の比較" },
  ],
  sources: miraklSources,
};

const intelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  mongodb: mongodbIntelligence,
  braze: brazeIntelligence,
  hubspot: hubspotIntelligence,
  okta: oktaIntelligence,
  zendesk: zendeskIntelligence,
  uipath: uipathIntelligence,
  confluent: confluentIntelligence,
  pagerduty: pagerdutyIntelligence,
  amplitude: amplitudeIntelligence,
  contentsquare: contentsquareIntelligence,
  anaplan: anaplanIntelligence,
  qualtrics: qualtricsIntelligence,
  celonis: celonisIntelligence,
  workato: workatoIntelligence,
  "monday-com": mondayDotComIntelligence,
  miro: miroIntelligence,
  "new-relic": newRelicIntelligence,
  coupa: coupaIntelligence,
  rubrik: rubrikIntelligence,
  notion: notionIntelligence,
  elevenlabs: elevenLabsIntelligence,
  glean: gleanIntelligence,
  speak: speakIntelligence,
  dataiku: dataikuIntelligence,
  verkada: verkadaIntelligence,
  mirakl: miraklIntelligence,
  ...expansionIntelligenceBySlug,
  ...waveTwoIntelligenceBySlug,
  ...preEntryIntelligenceBySlug,
  ...waveThreeIntelligenceBySlug,
  ...preEntryWaveTwoIntelligenceBySlug,
  ...waveFourIntelligenceBySlug,
  ...preEntryWaveThreeIntelligenceBySlug,
  ...cursorIntelligenceBySlug,
  ...daily20260813IntelligenceBySlug,
  ...additions20260813IntelligenceBySlug,
  ...additions20260813WaveTwoIntelligenceBySlug,
  ...additions20260813WaveThreeIntelligenceBySlug,
  ...daily20260814IntelligenceBySlug,
  ...daily20260814WaveTwoIntelligenceBySlug,
  ...daily20260815IntelligenceBySlug,
  ...daily20260816IntelligenceBySlug,
  ...daily20260817IntelligenceBySlug,
  ...additions20260817BatchTwentyThreeIntelligenceBySlug,
};

applyCompanyPageRolloutBatchOne(intelligenceBySlug);
applyCompanyPageRolloutBatchTwo(intelligenceBySlug);
applyCompanyPageRolloutBatchThree(intelligenceBySlug);
applyCompanyPageRolloutBatchFour(intelligenceBySlug);
applyCompanyPageRolloutBatchFive(intelligenceBySlug);
applyCompanyPageRolloutBatchSix(intelligenceBySlug);
applyCompanyPageRolloutBatchSeven(intelligenceBySlug);
applyCompanyPageRolloutBatchEight(intelligenceBySlug);
applyCompanyPageRolloutBatchNine(intelligenceBySlug);
applyCompanyPageRolloutBatchTen(intelligenceBySlug);
applyCompanyPageRolloutBatchEleven(intelligenceBySlug);
applyCompanyPageRolloutBatchTwelve(intelligenceBySlug);
applyCompanyPageRolloutBatchThirteen(intelligenceBySlug);
applyCompanyPageRolloutBatchFourteen(intelligenceBySlug);
applyCompanyPageRolloutBatchFifteen(intelligenceBySlug);
applyCompanyPageRolloutBatchSixteen(intelligenceBySlug);
applyCompanyPageRolloutBatchSeventeen(intelligenceBySlug);
applyCompanyPageRolloutBatchEighteen(intelligenceBySlug);
applyCompanyPageRolloutBatchNineteen(intelligenceBySlug);
applyCompanyPageRolloutBatchTwenty(intelligenceBySlug);
applyCompanyPageRolloutBatchTwentyOne(intelligenceBySlug);
applyCompanyPageRolloutBatchTwentyTwo(intelligenceBySlug);
applyCompanyPageRolloutBatchTwentyThree(intelligenceBySlug);
applyCompanyPageRolloutBatchTwentyFour(intelligenceBySlug);

export function getCompanyPublicIntelligence(slug: string) {
  const intelligence = intelligenceBySlug[slug];
  return intelligence ? addYenConversionsDeep(intelligence) : undefined;
}

export function getAllCompanyPublicIntelligence() {
  return Object.fromEntries(
    Object.entries(intelligenceBySlug).map(([slug, intelligence]) => [slug, addYenConversionsDeep(intelligence)]),
  );
}

export function getResearchSource(intelligence: CompanyPublicIntelligence, sourceId: string) {
  return intelligence.sources.find((source) => source.id === sourceId);
}
