export type ResearchSourceKind = "企業公式" | "法定開示" | "外部集計" | "コミュニティ";

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

export type JapanGrowthAnalysis = {
  headline: string;
  narrative: string;
  fiscalData: JapanFiscalDataPoint[];
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

export type MarketStatus =
  | {
      isPublic: true;
      ticker: string;
      exchange: string;
      listedSince: string;
      stockLinkUrl: string;
      growthSummary: string;
      milestones: GrowthMilestone[];
      sourceIds: string[];
      // 深掘り分析(調査が完了した企業のみ populate。未設定の企業は従来通りの表示になる)
      genbaVerdict?: GenbaVerdict;
      growthDrivers?: GrowthDriver[];
      japanGrowth?: JapanGrowthAnalysis;
      riskHypotheses?: RiskHypothesis[];
    }
  | {
      isPublic: false;
      growthSummary: string;
      ipoOutlookSummary: string;
      milestones: GrowthMilestone[];
      sourceIds: string[];
    };

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

export type CompanyPublicIntelligence = {
  researchedAt: string;
  marketStatus: MarketStatus;
  sellingPlaybook: SellingPlaybook;
  facts: PublicFact[];
  hypotheses: GenbaHypothesis[];
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
  solutions: Array<{
    name: string;
    valueProp: string;
    url: string;
    competitors: string;
    differentiation: string;
    retention: string;
  }>;
  customerStoriesUrl: string;
  fitTags: string[];
  comparisonMap: Array<{
    arena: string;
    companies: string[];
    why: string;
  }>;
  sources: ResearchSource[];
};

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
  researchedAt: "2026-08-07",
  marketStatus: {
    isPublic: true,
    ticker: "CRM",
    exchange: "NYSE",
    listedSince: "2004年",
    stockLinkUrl: "https://stockanalysis.com/stocks/crm/",
    growthSummary: "1999年にMarc Benioff氏らが創業し、2004年6月にNYSEへ上場(公開価格$11、調達額約1.1億ドル)。上場後はMuleSoft(2018年、$65億)・Tableau(2019年、$153億)・Slack(2021年、$277億=同社史上最大の買収)と大型買収を重ねてCRMから統合プラットフォームへ拡張してきた。2023年には株価下落とアクティビスト投資家の圧力を受けて人員の約10%を削減し、成長一辺倒から収益性重視の経営へ転換。直近はAgentforce・Data 360を軸としたAIエージェント事業への大きな賭けに入っており、既存の人的ライセンス売上の伸び鈍化とAI事業の急拡大が同時に進む転換期にある、というのがGenbaの読み。",
    milestones: [
      { year: "2004", label: "NYSE上場", detail: "公開価格1株$11、調達額約1.1億ドルでIPO。", sourceId: "sf-ipo" },
      { year: "2018-21", label: "MuleSoft・Tableau・Slackを相次いで買収", detail: "MuleSoft($65億)・Tableau($153億)・Slack($277億、自社最大の買収)で統合プラットフォーム化を推進。", sourceId: "sf-acquisitions-history" },
      { year: "2023", label: "人員約10%削減・収益性重視へ転換", detail: "株価下落とアクティビスト投資家(Elliott等)の圧力を受け、成長一辺倒から利益重視の経営へ舵を切った。", sourceId: "sf-2023-layoffs" },
      { year: "2025-26", label: "Agentforce・Data 360のARRが前年比200%超で拡大", detail: "AIエージェント事業のARRが急拡大し、既存事業の減速とのせめぎ合いが続く。", sourceId: "sf-agentforce-arr-growth" },
    ],
    sourceIds: ["sf-ipo", "sf-acquisitions-history", "sf-2023-layoffs", "sf-agentforce-arr-growth", "sf-q1fy27-earnings"],
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

const datadogSources: ResearchSource[] = [
  {
    id: "dd-q1fy26",
    label: "Datadog 2026年第1四半期決算",
    url: "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-first-quarter-2026-financial-results",
    kind: "企業公式",
    scope: "グローバル業績・顧客数・ARR超過顧客数・通期ガイダンス",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-10k",
    label: "Datadog FY2025 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
    kind: "法定開示",
    scope: "グローバル従業員数・通期売上",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-japan-company",
    label: "Datadog Japan合同会社 会社概要",
    url: "https://salesnow.jp/db/companies/7010003029533",
    kind: "外部集計",
    scope: "日本法人従業員数の推定値・設立日",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-japan-careers",
    label: "Datadog Japan キャリアページ",
    url: "https://careers.datadoghq.com/ja/",
    kind: "企業公式",
    scope: "日本の採用・カルチャー",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-newyear",
    label: "Datadog Japan 2026年 年頭所感",
    url: "https://prtimes.jp/main/html/rd/p/000000100.000077474.html",
    kind: "企業公式",
    scope: "日本市場戦略・大阪拠点新設・組織方針",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-president-bcn",
    label: "週刊BCN+ Datadog Japanプレジデント紹介記事",
    url: "https://www.weeklybcn.com/journal/keyperson/detail/20240617_204637.html",
    kind: "コミュニティ",
    scope: "日本法人社長プロフィール",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-cyberagent",
    label: "サイバーエージェント Datadog導入事例",
    url: "https://www.datadoghq.com/ja/case-studies/cyberagent/",
    kind: "企業公式",
    scope: "国内導入事例(メディア・IT)",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-softbank",
    label: "ソフトバンク Datadog導入事例",
    url: "https://www.datadoghq.com/ja/case-studies/softbank/",
    kind: "企業公式",
    scope: "国内導入事例(通信キャリア)",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-jcb",
    label: "ジェーシービー Datadog導入事例",
    url: "https://www.datadoghq.com/ja/case-studies/jcb/",
    kind: "企業公式",
    scope: "国内導入事例(金融・クレジットカード)",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-openmoney",
    label: "OpenMoney Datadog Japan給与データ",
    url: "https://openmoney.jp/corporations/2687/salaries",
    kind: "外部集計",
    scope: "日本・自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-repvue",
    label: "RepVue Datadog company reviews",
    url: "https://www.repvue.com/companies/Datadog",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-interview-prep",
    label: "Career Compass「Datadog Japan面接対策 想定質問100選」",
    url: "https://note.com/careercompass_c/n/nfb03e766f7e3",
    kind: "コミュニティ",
    scope: "中途面接の想定質問・対策記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-gaishitenshoku",
    label: "外資転職.com「Datadogの年収・採用・口コミをデータで分析」",
    url: "https://gaishitenshoku.com/datadog/",
    kind: "コミュニティ",
    scope: "給与レンジ・採用要件・カルチャーの集計記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-cloud-security-compare",
    label: "vCSO.ai「Best CSPM Tools 2026」比較記事",
    url: "https://vcso.ai/learn/best-cspm-tools-2026/",
    kind: "コミュニティ",
    scope: "クラウドセキュリティ製品の比較・差別化",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-splunk-compare",
    label: "MonitoringCost.com ログ管理料金比較",
    url: "https://monitoringcost.com/log-management-pricing",
    kind: "コミュニティ",
    scope: "ログ管理製品の料金・コスト比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-midmarket-job",
    label: "Mid-Market Account Executive求人",
    url: "https://careers.datadoghq.com/ja/detail/6523631/",
    kind: "企業公式",
    scope: "Mid-Market AEの役割・要件",
    checkedAt: "2026-08-04",
  },
  {
    id: "dd-commercial-job",
    label: "Commercial Account Executive求人",
    url: "https://careers.datadoghq.com/ja/detail/6009777/?gh_jid=6009777",
    kind: "企業公式",
    scope: "Commercial AEの役割・要件",
    checkedAt: "2026-08-04",
  },
  {
    id: "dd-public-sector-job",
    label: "Strategic Account Executive, Public Sector求人",
    url: "https://careers.datadoghq.com/ja/detail/7439573/",
    kind: "企業公式",
    scope: "Public Sector AEの役割・要件",
    checkedAt: "2026-08-04",
  },
  {
    id: "dd-q2-2026-earnings",
    label: "Datadog Q2 2026: Revenue Up 36% and Guidance Raised, but the Stock Fell 17%(TradingKey)",
    url: "https://www.tradingkey.com/analysis/stocks/us-stocks/262084073-datadog-ddog-q2-2026-earnings-stock-drop-tradingkey",
    kind: "外部集計",
    scope: "Q2 2026決算・株価反応",
    checkedAt: "2026-08-06",
  },
  {
    id: "dd-ipo",
    label: "CNBC「Datadog pops 50% in Nasdaq debut」",
    url: "https://www.cnbc.com/2019/09/19/datadog-pops-50percent-in-nasdaq-debut-as-cloud-software-ipos-stay-hot.html",
    kind: "外部集計",
    scope: "2019年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "dd-fy2025-earnings",
    label: "Datadog Announces Fourth Quarter and Fiscal Year 2025 Financial Results",
    url: "https://investors.datadoghq.com/news-releases/news-release-details/datadog-announces-fourth-quarter-and-fiscal-year-2025-financial",
    kind: "企業公式",
    scope: "FY2025通期決算・AI関連製品の拡大",
    checkedAt: "2026-08-07",
  },
  {
    id: "dd-customer-concentration",
    label: "Invezz「Why is Datadog stock down 18% despite a Q2 earnings beat and guidance raise?」",
    url: "https://invezz.com/news/2026/08/06/why-is-datadog-stock-down-18-despite-a-q2-earnings-beat-and-guidance-raise/",
    kind: "外部集計",
    scope: "最大顧客の利用鈍化ガイダンスと株価反応",
    checkedAt: "2026-08-07",
  },
];

const datadogIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
  marketStatus: {
    isPublic: true,
    ticker: "DDOG",
    exchange: "NASDAQ",
    listedSince: "2019年",
    stockLinkUrl: "https://stockanalysis.com/stocks/ddog/",
    growthSummary: "2010年にOlivier Pomel氏らが創業し、2019年9月にNASDAQへ上場(公開価格$27、初日+39〜40%の値上がり)。2020年前後のクラウド移行需要で急成長した後、2022年には景気減速に伴う「クラウドコスト最適化」の動きで使用量ベース売上の伸びが一時鈍化するという、従量課金モデル特有のストレステストを経験した。その後はAIネイティブな可観測性(Bits AI、LLM Observability等)へ製品を拡張し、FY2025通期売上は34.3億ドル(前年比+28%)。直近は特定の大口顧客の利用鈍化が2026年後半のガイダンスに織り込まれており、高成長を維持しつつも顧客集中リスクが意識される局面にある、というのがGenbaの読み。",
    milestones: [
      { year: "2019", label: "NASDAQ上場", detail: "公開価格$27、初日+39〜40%の値上がりで約87億ドルの評価額に。", sourceId: "dd-ipo" },
      { year: "2022", label: "クラウドコスト最適化の逆風", detail: "景気減速で顧客のクラウド利用が抑制され、使用量ベース売上の伸びが一時鈍化。従量課金モデルの弱点が試された局面。", sourceId: "dd-fy2025-earnings" },
      { year: "2023-25", label: "AIネイティブな可観測性へ製品拡張", detail: "Bits AI・LLM Observability等を投入し、FY2025通期売上は34.3億ドル(前年比+28%)。", sourceId: "dd-fy2025-earnings" },
      { year: "2026", label: "大口顧客の利用鈍化を織り込むガイダンス", detail: "特定の最大顧客の利用鈍化が2026年後半のガイダンスに反映され、決算好調にも関わらず株価が急落する場面があった。", sourceId: "dd-customer-concentration" },
    ],
    sourceIds: ["dd-ipo", "dd-fy2025-earnings", "dd-customer-concentration", "dd-q2-2026-earnings"],
  },
  sellingPlaybook: {
    frameIntro: "Datadogの売り方の核心は「障害対応の分断コスト」を可視化すること。単一プラットフォームへの統合提案は、ツール比較ではなくMTTR(平均復旧時間)という経営指標への翻訳が効く。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "新規顧客の多くはログやAPMなど1モジュールから入り、その後Infrastructure・Security・RUMへ広げる。AI連携を使う顧客がARRの約80%を占めるなど、既存顧客内でも「統合活用できているか」で成長格差が生まれている。" },
      { title: "製品の成り立ちから見る課題", body: "Datadogはもともと、開発者が複数の監視ツールを行き来する非効率を解消するために統合プラットフォームとして生まれた。存在理由そのものが「単一ペインでの可観測性」という課題を指している。" },
      { title: "外部環境の要求から見る課題", body: "マイクロサービス化・AIワークロードの急増でシステムの複雑性が増し、障害の原因特定にかかる時間(MTTR)を経営が問題視する場面が増えている。" },
    ],
    narrative: [
      { label: "背景", body: "クラウドネイティブ化が進むほどサービス数・ログ量が指数関数的に増え、複数の監視ツール(自社ホストの監視スタックなど)では障害の因果関係を追いにくくなる。" },
      { label: "課題", body: "障害が起きた際にインフラ・アプリ・ログ・セキュリティが別ツールに散らばっているため原因特定に時間がかかり、MTTRが伸びる。" },
      { label: "解決策", body: "ログ・APM・インフラ監視・セキュリティを単一プラットフォームに統合し、AIで異常検知から根本原因の提示までを一気通貫にする。" },
      { label: "選定の理由", body: "自社構築の監視スタックは初期コストが低く見えるが運用人員が必要になる。Datadogは新規契約の年換算予約額が過去最高・前年比2倍超という実績が示す通り、導入の速さと拡張性で選ばれている。" },
    ],
    openingHook: "直近の大きな障害で、原因の切り分けに何分かかりましたか。その間、何個の画面を行き来しましたか。",
    valueHypothesis: "AI連携を使う顧客がARRの約80%を占めるという自社実績を根拠に、可観測性の統合度合いがAI活用の前提条件になる、という価値仮説を立てる。",
    commonObjection: { objection: "今の監視ツールで足りている", reframe: "足りているのは平常時。障害時に複数ツールを往復するコスト(人件費・機会損失)を可視化すると、統合のROIが見えやすくなる。" },
  },
  cultureNotes: {
    organizationReadTitle: "急拡大期の組織では、「看板」より配属チームの実態を見抜く。",
    hypothesis: {
      title: "MEDDICなど型はある。ただし日本組織での再現性はまだ蓄積中。",
      body: "公式には研修でMEDDICとCommand of the Messageの活用を掲げていますが、日本法人は2019年設立とまだ新しく、教育体系がどこまで整備・定着しているかは公開情報だけでは判断できません。配属チーム・マネージャーによる差を面接で確認する必要があります。",
    },
    careerValue: {
      title: "“急成長オブザーバビリティ企業のAE”という経験値。",
      body: "32%成長を続ける市場で新規開拓を経験したという実績は、次の転職でも説明しやすい。一方、組織が若く昇進・異動の実例データがまだ蓄積されていないため、キャリアパスの再現性は自分で切り拓く前提で臨みたいです。",
      confidence: "探索中",
    },
  },
  facts: [
    {
      label: "売上(2026年Q1)",
      value: "$1,006M(約1,579億円)",
      detail: "前年比+32%。1ドル=157円換算。",
      sourceIds: ["dd-q1fy26"],
    },
    {
      label: "通期2026年ガイダンス",
      value: "$43.0億〜$43.4億(約6,751億〜6,814億円)",
      detail: "前年比+25〜27%の成長を見込む(2026年Q1決算時点)。1ドル=157円換算。",
      sourceIds: ["dd-q1fy26"],
    },
    {
      label: "ARR10万ドル以上の顧客数",
      value: "約4,550社",
      detail: "前年比+21%(2026年3月31日時点)。",
      sourceIds: ["dd-q1fy26"],
    },
    {
      label: "Dollar-based Net Retention",
      value: "120%台前半",
      detail: "既存顧客への製品拡張が成長の主要因であることを示す(2026年Q1時点)。",
      sourceIds: ["dd-q1fy26"],
    },
    {
      label: "グローバル従業員数",
      value: "8,100人",
      detail: "2025年12月末時点、Form 10-K開示値。",
      sourceIds: ["dd-10k"],
    },
    {
      label: "日本市場でのポジション",
      value: "国内シェア1位(自社発表)",
      detail: "2025年Fuji Chimera Research Institute調査に基づく自社発表。第三者による独立検証ではない。",
      sourceIds: ["dd-newyear"],
    },
  ],
  hypotheses: [
    {
      topic: "MARKET EXPANSION",
      title: "日本市場は「作っている最中」。大阪拠点新設と自社シェア1位表明は本気の拡大シグナル",
      conclusion: "2019年設立とまだ若い日本法人が、2025年に観測市場でシェア1位を掲げ、2026年に大阪拠点を新設した点から、日本市場への投資を積極化している時期だと考えられます。組織がまだ小さいため、入社時期によって裁量の大きさが変わりやすいとみます。",
      confidence: "中",
      evidence: [
        "2025年Fuji Chimera Research Institute調査で観測市場国内シェア1位と自社発表",
        "2026年に大阪拠点を新設し、西日本エリアのカバレッジ拡大を明言",
        "NTTデータ・東京エレクトロンデバイスとの協業強化、AWS「Technology Partner of the Year Japan」受賞",
      ],
      counterSignals: [
        "市場シェア1位は自社調査(Fuji Chimera)の引用であり、独立した第三者検証ではない",
        "日本法人の正式な社員数・営業体制の詳細は非公開(推定約117人)",
      ],
      interviewQuestions: [
        "大阪拠点は現時点で何人体制か、今後の採用計画は具体的にあるか",
        "西日本エリアの新規開拓は既存メンバーの兼務か、専任採用か",
      ],
      sourceIds: ["dd-newyear", "dd-japan-company"],
    },
    {
      topic: "COMP STRUCTURE",
      title: "セグメントで採用要件が明確に違う。給与は「ポジション一律」で交渉余地が薄い可能性",
      conclusion: "Commercial(経験2年以上)、Mid-Market(新規開拓実績)、Public Sector(5年以上+官公庁営業経験必須)と要件が明確に分かれている一方、口コミでは「給与はポジションごとにほぼ一律」という声が複数あり、オファー額より入社後の達成率でインセンティブが左右されやすいと考えられます。",
      confidence: "中",
      evidence: [
        "外資転職.comの集計・口コミで「給与はポジション一律で交渉の余地が少ない」との指摘",
        "OpenMoney自己申告データで営業平均年収1,238万円、レンジ760万〜3,000万円",
        "求人要件がセグメントごとに経験年数・専門性で明確に差別化されている",
      ],
      counterSignals: [
        "「ジュニアレベルでも入社時にRSUが付与される」という口コミもあり、一律という評判と矛盾する情報もある",
        "自己申告データのため、セグメント別の正確な内訳は不明",
      ],
      interviewQuestions: [
        "オファー時の給与テーブルはセグメント別にどう分かれているか",
        "RSUの付与条件・ベスティングスケジュールはグレードによってどう変わるか",
      ],
      sourceIds: ["dd-gaishitenshoku", "dd-openmoney"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "「市場飽和」を指摘する声がある。ブランドの成長率と現場の達成率は別軸で見るべき",
      conclusion: "全社としては32%成長を続けていますが、RepVueの一部レビューでは「市場が飽和しコミッション向け案件が枯渇」「クオータ達成が難しい」という批判も見られます。担当エリアの残存見込み顧客の密度を面接で確認すべきです。",
      confidence: "中",
      evidence: [
        "RepVueで一部レビューが「市場が非常に飽和しており、Commercial規模の案件のほとんどで価格的に不利」「達成不可能なターゲット」と指摘",
        "OpenMoney口コミに「AEはじめ、人がどんどんPIP等で辞めていく環境」との記述",
        "RepVueスコアは3.6/5、業界内では上位20%と相対的には悪くない評価",
      ],
      counterSignals: [
        "会社全体は32%成長を継続しており、批判的レビューは特定チーム・時期に偏っている可能性がある",
        "OpenWorkでは「学ぶことが絶えない」という肯定的な口コミも見られる",
        "レビューの母数はSalesforceなど大手ほど多くなく、平均への収束が弱い",
      ],
      interviewQuestions: [
        "自分の担当エリアで直近1年のチーム全体のクオータ達成率は何%か",
        "PIP(業績改善プログラム)に入る基準と、直近1年の運用実態はどうか",
      ],
      sourceIds: ["dd-repvue", "dd-openmoney"],
    },
    {
      topic: "SALES MOTION",
      title: "新規ロゴ獲得の負荷が高い。既存拡張は会社全体では強いが、担当者個人の配分は要確認",
      conclusion: "全社のNet Revenue Retentionは120%台前半と既存顧客への拡張が成長の柱である一方、Mid-Market/Commercial双方の求人が「新規ロゴ獲得」を明記しており、現場のAE個人には新規開拓の負荷がかかりやすい設計だと考えられます。",
      confidence: "中",
      evidence: [
        "Dollar-based Net Retentionが120%台前半(2026年Q1)",
        "Mid-Market/Commercial双方の求人で新規ロゴ獲得・アウトバウンド営業が明記されている",
        "製品ラインが8以上に広がっており、Cloud Security等は既存顧客への追加販売が中心と見られる",
      ],
      counterSignals: [
        "求人票だけでは、個人のクオータに占める新規:既存の配分比率は分からない",
        "クロスセル専任のチームが別に存在する可能性があり、その場合AE個人の負荷は求人票の印象と異なる",
      ],
      interviewQuestions: [
        "自分のクオータのうち、新規ロゴと既存拡張の配分はどれくらいか",
        "クロスセル(他製品への追加提案)は自分のノルマに含まれるか、別チームの担当か",
      ],
      sourceIds: ["dd-q1fy26", "dd-midmarket-job", "dd-commercial-job"],
    },
    {
      topic: "PRODUCT BREADTH",
      title: "オブザーバビリティ起点から、セキュリティ・AIへ広がる「土台」ができつつある",
      conclusion: "Infrastructure MonitoringやAPMといった基盤製品に加え、Cloud SecurityやLLM Observabilityなど新領域への投資が進んでおり、1社に複数製品を売るプラットフォームセールスの色が強まっています。ただし新領域は専業ベンダー(Wiz、Langfuseなど)との比較でまだ発展途上という評価もあります。",
      confidence: "中",
      evidence: [
        "8以上の製品ライン(Infrastructure Monitoring、APM、Log Management、RUM/Synthetics、Cloud Security、Database Monitoring、CI Visibility、LLM Observability)",
        "2026年頭所感でAI・セキュリティ領域への投資強化を明言",
        "LLM ObservabilityはAI Agent Monitoring・LLM Experiments・AI Agents Consoleを2025年に追加し急速に拡張中",
      ],
      counterSignals: [
        "Cloud SecurityはWiz・Prisma Cloudのような専業CNAPPほど作り込まれていないという指摘がある",
        "LLM ObservabilityもLangfuseなどAIネイティブ専業ツールほどトレース機能を深掘りしていないという評価がある",
      ],
      interviewQuestions: [
        "自分が担当する顧客で、複数製品を横断提案する機会は実際にどれくらいあるか",
        "新領域(セキュリティ・AI)の専門トレーニングは入社後どの段階で受けられるか",
      ],
      sourceIds: ["dd-newyear", "dd-cloud-security-compare"],
    },
  ],
  customerProof: [
    {
      company: "サイバーエージェント",
      products: "Infrastructure Monitoring / APM / Watchdog(機械学習)",
      outcome: "数万台規模のサーバーを一元監視する基盤として全社導入。属人化していた監視ツールを統合し、利用開始までの時間を数日から数時間に短縮",
      implication: "1チームではなく全社導入を狙う提案ができる根拠になる、ボトムアップで広がった事例。",
      sourceId: "dd-cyberagent",
    },
    {
      company: "ジェーシービー(JCB)",
      products: "APM / Infrastructure Monitoring / SLO",
      outcome: "MTTD(平均検知時間)を短縮し、夜間オンコール対応の初動を迅速化。SRE・アプリ・事業部門で共通のSLIダッシュボードを構築",
      implication: "金融・クレジットカードという厳格な業界でも、SRE主導での導入実績があることを示す。",
      sourceId: "dd-jcb",
    },
    {
      company: "ソフトバンク",
      products: "Infrastructure Monitoring(マルチクラウド)",
      outcome: "AWS・Azureにまたがるマルチクラウド環境とKubernetesコンテナ基盤を一元的に監視",
      implication: "通信キャリアクラスの大規模インフラでも採用されており、大企業のマルチクラウド戦略への提案材料になる。",
      sourceId: "dd-softbank",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "営業平均 1,238万円",
      detail: "OpenMoney自己申告データ(21件)。レンジは760万〜3,000万円。",
      caveat: "自己申告・母数が少なく、セグメント別の内訳は不明。",
      sourceId: "dd-openmoney",
    },
    {
      label: "営業組織の外部評価",
      value: "RepVue 3.6 / 5.0",
      detail: "約2,582件のレーティング、87% verified。業界内では上位20%。",
      caveat: "グローバル集計であり日本法人限定ではない。市場飽和やクオータ達成の難しさを指摘する批判的レビューも含まれる。",
      sourceId: "dd-repvue",
    },
  ],
  roleLens: {
    salesMotion: "Mid-Market・Commercialとも「新規ロゴ獲得に特化」と求人に明記されており、既存顧客拡張の機会は限定的。Public Sector(SLED)だけは自治体・教育・医療機関等への新規開拓と既存深耕の両方を担う設計で、セグメントによって新規特化か新規+深耕かが分かれる。",
    compensation: "OpenMoney集計で営業平均年収1,238万円(レンジ760万〜3,000万円)。ジュニアでもRSU付与という口コミがある一方「ポジションごとにほぼ一律で交渉余地が少ない」という声も。Public SectorはSLED専門性(官公庁向け営業経験2〜3年以上)が要件化されておりレンジ上位が想定されるが、公開データでの裏付けはない。",
    quota: "Public Sectorは年間売上目標100万ドル(約1.57億円)以上・平均ディールサイズ10万ドル(約1,570万円)以上と具体的に明記。Mid-Market・Commercialは新規開拓比率が高く、担当エリアの企業密度がクオータ達成を左右しやすい。",
    collaboration: "Mid-MarketはSDR・パートナー・マーケティングとの連携、Sales Navigator/Demandbase等のツール活用が求人に明記。CTOやエンジニアリング層への技術的な説明力がどのセグメントでも共通して問われる。",
  },
  leadership: {
    name: "正井 拓己",
    role: "President & Country General Manager",
    read: "2019年設立とまだ若い組織で、2026年はAI・セキュリティ領域への投資、大阪拠点の新設など、拡大フェーズの最中にあることが読み取れる。日本語のオブザーバビリティ市場で1位(自社調査)を掲げるが、組織の急拡大に伴う体制整備の速度は候補者自身が見極める必要がある。",
    sourceId: "dd-newyear",
  },
  companyStats: {
    globalHeadcount: {
      value: "8,100人",
      detail: "2025年12月末時点、Form 10-K開示値。",
      sourceId: "dd-10k",
    },
    japanHeadcount: {
      value: "約117人(推定)",
      detail: "採用データベースによる推定値。公式には開示されていない。",
      sourceId: "dd-japan-company",
    },
    japanOffice: {
      value: "東京(本社)、大阪(2026年新設)",
      detail: "西日本エリアのカバレッジ強化を目的に大阪拠点を新設(2026年頭所感)。",
      sourceId: "dd-newyear",
    },
    japanSince: {
      value: "2019年3月",
      detail: "Datadog Japan合同会社設立。",
      sourceId: "dd-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "急拡大市場で、エンジニア層に刺さる技術営業力が鍛えられる",
        detail: "CTO・エンジニアリング・ITリーダー層への技術的な説明が前提のポジションが多く、単なる御用聞き営業ではなく技術理解を伴う提案力が磨かれる。全社は32%成長を継続しており、追い風の中で新規開拓を経験できる。",
        sourceIds: ["dd-q1fy26", "dd-midmarket-job"],
      },
      {
        title: "セグメントを選べる。育成前提のCommercialから即戦力性の高いPublic Sectorまで幅がある",
        detail: "ポテンシャル層も対象になるCommercial、新規開拓力を求めるMid-Market、5年以上の経験と官公庁営業経験を要件化するPublic Sectorまで、自分の経験値に応じたエントリーポイントを選べる。",
        sourceIds: ["dd-commercial-job", "dd-public-sector-job"],
      },
      {
        title: "オブザーバビリティ起点でセキュリティ・AIまで扱える製品の広がり",
        detail: "2026年はAI・セキュリティ領域への投資を強化する方針が示されており、Infrastructure MonitoringやAPMだけでなく、Cloud SecurityやLLM Observabilityといった伸び盛りの新領域も扱える可能性がある。",
        sourceIds: ["dd-newyear"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜDatadogか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "New Relic・Dynatrace・Splunkとの違いを、自分の担当予定セグメントの顧客像に当てはめて具体的に説明できるか",
        why: "面接では製品比較の理解度が定番で問われる。競合との違いを自分の言葉で語れるかが評価軸になっている。",
        sourceIds: ["dd-interview-prep"],
      },
      {
        question: "戦略的にアカウントプランを作成し、複数ステークホルダーにアプローチした経験を具体的に話せるか",
        why: "求人票・面接双方で「戦略的にプランを作成して各アカウントにアプローチできる方」が明記されている。",
        sourceIds: ["dd-gaishitenshoku"],
      },
      {
        question: "自分の担当予定エリア・業種で、直近のクオータ達成率とPIPの運用実態を逆質問できるか",
        why: "口コミで市場飽和やクオータ達成の難しさが指摘されており、入社後のギャップを避けるために確認しておきたい。",
        sourceIds: ["dd-repvue", "dd-openmoney"],
      },
      {
        question: "MEDDICやCommand of the Messageなど、同社の営業方法論についてどこまで理解しているか",
        why: "外資転職.comの記事で、同社の営業研修がMEDDICとCommand of the Messageを活用していると紹介されている。",
        sourceIds: ["dd-gaishitenshoku"],
      },
    ],
  },
  solutions: [
    {
      name: "Infrastructure Monitoring",
      valueProp: "サーバー・コンテナ・クラウドサービスをリアルタイムで可視化する基盤製品。750以上の統合先を持ち、Datadog導入の入口(Land)になることが多い。",
      url: "https://www.datadoghq.com/ja/product/infrastructure-monitoring/",
      competitors: "New Relic、Dynatrace、AWS CloudWatch、Google Cloud Opsが主要な競合。",
      differentiation: "ホスト単位の課金体系でわかりやすい一方、大規模になるとコストが読みにくくなるという指摘がある。750以上の統合先の広さと、他製品(APM・Log等)とのシームレスな連携がDatadogの強み。",
      retention: "この製品が他製品へのクロスセルの起点になることが多く、会社全体のDollar-based Net Revenue Retentionは2026年Q1時点で120%台前半。",
    },
    {
      name: "APM(Application Performance Monitoring)",
      valueProp: "マイクロサービス間のリクエストをEnd-to-Endでトレースし、ボトルネックを特定する製品。",
      url: "https://www.datadoghq.com/ja/product/apm/",
      competitors: "New Relic、Dynatrace、AppDynamics、Splunkが主要な競合。",
      differentiation: "Infrastructure MonitoringとのUI統合が強みで、$31/ホスト/月から。単体の性能・コスパ比較ではNew Relicが優位という比較記事も複数ある。DynatraceはAIによる自動根本原因分析で高く評価される。",
      retention: "Infrastructure Monitoringとセットで契約されるケースが多く、単体の継続率は非公開。JCBの事例ではAPM導入によりMTTD(平均検知時間)短縮を実現したと公式に紹介されている。",
    },
    {
      name: "Log Management",
      valueProp: "大量のログを収集・分析し、コスト最適化しながら運用できるログ管理製品。",
      url: "https://www.datadoghq.com/ja/product/log-management/",
      competitors: "Splunk、Elasticが主要な競合。",
      differentiation: "$0.10/GB/月からとSplunkの公表価格(1GB/日あたり$150程度)より安いという比較記事がある一方、使用量が増えるとコストが読みにくくなるという批判もある。ElasticはCPU・メモリ課金で大量ログ時のコスト優位性があるとされる。SplunkはSIEM・コンプライアンス実績で依然として強い。",
      retention: "製品単体の継続率は非公開。",
    },
    {
      name: "Digital Experience Monitoring(RUM & Synthetics)",
      valueProp: "実ユーザーの体験(Real User Monitoring)と合成監視(Synthetics)でフロントエンド性能を追跡する製品群。",
      url: "https://www.datadoghq.com/ja/product/real-user-monitoring/",
      competitors: "New Relic Browser、Dynatrace RUM、Sentryが主要な競合。",
      differentiation: "バックエンドのAPM・Infrastructure Monitoringと同一基盤でフロントエンドの体験まで一気通貫に追えることが強み。Sentryはエラートラッキングに特化し開発者体験で評価が高い。",
      retention: "製品単体の継続率は非公開。",
    },
    {
      name: "Cloud Security Platform(CSM)",
      valueProp: "CSPM・CWPP・Cloud SIEMを含むクラウドセキュリティ製品群。",
      url: "https://www.datadoghq.com/ja/product/cloud-security-management/",
      competitors: "Wiz、Prisma Cloud(Palo Alto Networks)、CrowdStrike Falcon Cloud Securityが主要な競合。",
      differentiation: "既存のDatadog顧客にとっては追加導入のハードルが低い一方、Wiz・Prisma Cloudのような専業CNAPPほど作り込まれていないという評価がある(比較記事)。CrowdStrikeは281以上の脅威アクター情報と紐づけた検知に強みがあるとされる。",
      retention: "既存Infrastructure Monitoring顧客への追加販売(アップセル)が中心と見られ、会社全体のNRR向上に寄与していると考えられるが、製品単体の継続率は非公開。",
    },
    {
      name: "Database Monitoring",
      valueProp: "データベースのクエリ・パフォーマンスを可視化する専門監視製品。",
      url: "https://www.datadoghq.com/ja/product/database-monitoring/",
      competitors: "IBM Instana、SolarWinds、クラウドベンダー純正のDB監視ツール(AWS RDS Performance Insights等)が隣接する競合。",
      differentiation: "他のDatadog製品と同一ダッシュボードでDB性能を横断的に見られる点が強み。専業DB監視ツールとの詳細な機能比較は公開情報が少なく、確認できていない。",
      retention: "製品単体の継続率・普及率は非公開。",
    },
    {
      name: "CI Visibility",
      valueProp: "CI/CDパイプラインの実行時間・失敗率を可視化する開発生産性向け製品。",
      url: "https://www.datadoghq.com/ja/product/ci-cd-monitoring/",
      competitors: "New Relicなど一般的なAPMベンダーの多くはCI Visibility相当の機能を持たないとされる。",
      differentiation: "比較記事では「DatadogにはCI visibility、feature flags、code coverageなど、New Relicにはないソフトウェア配信機能がある」と評されており、開発生産性まで含めた提案ができる点が差別化材料になり得る。",
      retention: "製品単体の継続率・普及率は非公開。",
    },
    {
      name: "LLM Observability",
      valueProp: "LLM・AIエージェントのトレース・品質・コストを監視する新領域製品。",
      url: "https://www.datadoghq.com/ja/product/llm-observability/",
      competitors: "Langfuse、Arize Phoenix、Braintrust、New Relicが主要な競合。",
      differentiation: "2024年にローンチし、2025年にAI Agent Monitoring・LLM Experiments・AI Agents Consoleを追加して急速に拡張中。既存のAPM基盤に統合されている点が強みだが、Langfuseなどトレース機能に特化したAIネイティブ専業ツールほど深掘りはしていないという評価もある。",
      retention: "2025年12月にはAWSとの戦略的協業も発表されており、生成AI関連の新規商談を作る入口として位置づけられていると見られるが、既存顧客への普及率など具体的な継続データは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.datadoghq.com/ja/case-studies/",
  fitTags: [
    "急成長企業でスピード感を求めたい",
    "新規開拓力を鍛えたい",
    "AI・オブザーバビリティ領域を極めたい",
    "エンジニア層と対等に話せる技術営業がしたい",
    "官公庁向け営業に挑戦したい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "裁量の大きい拡大期の組織で働きたい",
  ],
  comparisonMap: [
    { arena: "Observability基盤", companies: ["New Relic", "Dynatrace", "Splunk"], why: "APM・インフラ監視予算の比較" },
    { arena: "ログ管理", companies: ["Splunk", "Elastic"], why: "ログ管理・SIEM予算の比較" },
    { arena: "クラウドセキュリティ", companies: ["Wiz", "CrowdStrike", "Palo Alto Networks"], why: "CSPM・CWPP予算の比較" },
    { arena: "AI / LLM Observability", companies: ["New Relic", "Langfuse", "Arize"], why: "生成AI監視予算の比較" },
  ],
  sources: datadogSources,
};

const servicenowSources: ResearchSource[] = [
  {
    id: "sn-q2fy26",
    label: "ServiceNow 2026年第2四半期決算",
    url: "https://investor.servicenow.com/news/news-details/2026/ServiceNow-Reports-Second-Quarter-2026-Financial-Results/default.aspx",
    kind: "企業公式",
    scope: "グローバル業績・cRPO・大型契約数",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-10k",
    label: "ServiceNow FY2025 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1373715/000137371526000007/now-20251231.htm",
    kind: "法定開示",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-suzuki-appointment",
    label: "ServiceNow Japan 執行役員社長就任リリース",
    url: "https://www.servicenow.com/jp/company/media/press-room/suzuki.html",
    kind: "企業公式",
    scope: "日本法人代表者・独立事業体化・組織体制",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-mynavi-suzuki",
    label: "マイナビTECH+ ServiceNow Japan鈴木社長インタビュー",
    url: "https://news.mynavi.jp/techplus/article/20250107-3094863/",
    kind: "コミュニティ",
    scope: "日本法人社長インタビュー・戦略",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-japan-careers",
    label: "ServiceNow Japan キャリアページ",
    url: "https://careers.servicenow.com/locations/apj/japan/",
    kind: "企業公式",
    scope: "日本の採用情報",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-panasonic",
    label: "パナソニック コネクト ServiceNow導入事例",
    url: "https://www.servicenow.com/jp/customers/panasonicconnect.html",
    kind: "企業公式",
    scope: "国内導入事例(製造・CSM)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-nsk",
    label: "日本精工(NSK) ServiceNow導入事例",
    url: "https://www.servicenow.com/customers/nsk.html",
    kind: "企業公式",
    scope: "国内導入事例(製造・セキュリティ運用)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-softbank",
    label: "ソフトバンク ServiceNow導入事例",
    url: "https://www.servicenow.com/customers/softbank.html",
    kind: "企業公式",
    scope: "国内導入事例(通信・CSM)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-openmoney",
    label: "OpenMoney ServiceNow Japan給与データ",
    url: "https://openmoney.jp/corporations/1528/salaries",
    kind: "外部集計",
    scope: "日本・自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-repvue",
    label: "RepVue ServiceNow company reviews",
    url: "https://www.repvue.com/companies/ServiceNow",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-interview-prep",
    label: "Career Compass「ServiceNow Japan面接対策 想定質問100選」",
    url: "https://note.com/careercompass_c/n/n3ddabf441e99",
    kind: "コミュニティ",
    scope: "中途面接の想定質問・対策記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-onecareer",
    label: "ワンキャリア ServiceNow Japan面接体験談",
    url: "https://www.onecareer.jp/experiences/companies/90783/middle_categories/interview",
    kind: "コミュニティ",
    scope: "面接体験談・質問内容",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-jira-compare",
    label: "Redress Compliance「Jira vs ServiceNow 2026」比較記事",
    url: "https://redresscompliance.com/jira-vs-servicenow-2026",
    kind: "コミュニティ",
    scope: "ITSM市場シェア・導入期間の比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-workday-compare",
    label: "TechPratham「Workday vs ServiceNow」比較記事",
    url: "https://www.techpratham.com/blog/workday-vs-servicenow-which-platform-is-better-for-your-career-in-2025",
    kind: "コミュニティ",
    scope: "HR Tech領域の比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-commercial-ae-job",
    label: "Account Executive - Commercial求人(JB0074345)",
    url: "https://careers.servicenow.com/jobs/744000140382539/account-executive-commercial/",
    kind: "企業公式",
    scope: "Commercial AEの役割・要件",
    checkedAt: "2026-08-07",
  },
  {
    id: "sn-q2-2026-earnings",
    label: "ServiceNow's AI ACV Surges Past $1 Billion(BigGo Finance)",
    url: "https://finance.biggo.com/news/US_NOW_2026-07-22",
    kind: "外部集計",
    scope: "Q2 2026決算・AI ACV",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-ipo",
    label: "Bloomberg「ServiceNow Advances in Debut After $210 Million IPO」",
    url: "https://www.bloomberg.com/news/articles/2012-06-29/servicenow-advances-in-debut-after-210-million-ipo",
    kind: "外部集計",
    scope: "2012年IPO時の公開価格・調達額",
    checkedAt: "2026-08-07",
  },
  {
    id: "sn-moveworks-acquisition",
    label: "ServiceNow「Acquisition of Moveworks」プレスリリース",
    url: "https://newsroom.servicenow.com/press-releases/details/2025/ServiceNow-to-extend-leading-agentic-AI-to-every-employee-for-every-corner-of-the-business-with-acquisition-of-Moveworks-03-10-2025-traffic/default.aspx",
    kind: "企業公式",
    scope: "2025年Moveworks買収(約28.5億ドル)",
    checkedAt: "2026-08-07",
  },
  {
    id: "sn-fy2025-results",
    label: "ServiceNow「Fourth Quarter and Full Year 2025 Financial Results」",
    url: "https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-Reports-Fourth-Quarter-and-Full-Year-2025-Financial-Results-Board-of-Directors-Authorizes-Additional-5B-for-Share-Repurchase-Program/default.aspx",
    kind: "企業公式",
    scope: "FY2025通期決算・Now Assist ACV",
    checkedAt: "2026-08-07",
  },
];

const servicenowIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
  marketStatus: {
    isPublic: true,
    ticker: "NOW",
    exchange: "NYSE",
    listedSince: "2012年",
    stockLinkUrl: "https://stockanalysis.com/stocks/now/",
    growthSummary: "2003〜2004年にFred Luddy氏が創業し、2012年6月にNYSEへ上場(公開価格$18、初日+37%)。Luddy氏は上場前に2.5億ドルの買収提案を断り、Frank Slootman氏(元Data Domain CEO)を招いて組織を専門経営化した経緯がある。2019年にBill McDermott氏がCEOに就任してからは、IT運用管理(ITSM)の枠を超えてHR・カスタマーサービス・セキュリティを横断する「ワークフロー基盤」へ拡張。2025年にはMoveworksを約28.5億ドルで買収し、対話型AI・社内検索をAgentforce戦略の穴埋めに据えた。売上は2021年の59億ドルから2025年には133億ドルへとほぼ倍増しており、2030年までに300億ドル規模を目指す方針を掲げるなど、依然として高成長を維持している、というのがGenbaの読み。",
    milestones: [
      { year: "2012", label: "NYSE上場", detail: "公開価格$18、初日+37%の値上がりで取引開始。", sourceId: "sn-ipo" },
      { year: "2019", label: "Bill McDermott氏がCEOに就任", detail: "ITSM中心から、HR・カスタマーサービス・セキュリティを含む全社ワークフロー基盤への拡張を主導。", sourceId: "sn-fy2025-results" },
      { year: "2025", label: "Moveworksを約28.5億ドルで買収", detail: "対話型AI・社内検索エンジンを取り込み、エージェンティックAI戦略を強化。", sourceId: "sn-moveworks-acquisition" },
      { year: "2021-25", label: "売上が59億ドルから133億ドルへほぼ倍増", detail: "2030年までに売上300億ドル規模を目指す方針を掲げる。Now Assist(AI)のACVは2026年第1四半期に7.5億ドルを突破。", sourceId: "sn-fy2025-results" },
    ],
    sourceIds: ["sn-ipo", "sn-moveworks-acquisition", "sn-fy2025-results", "sn-q2-2026-earnings"],
  },
  sellingPlaybook: {
    frameIntro: "ServiceNowの売り方は「バラバラな申請・承認プロセスの単一化」が起点。ITSMで確立した型をHR・調達・カスタマーサービスへ横展開し、その定義済みワークフローにAI Agentを重ねる、という順番で語ると刺さりやすい。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "多くはITSM(ヘルプデスク)から入り、その後HR・セキュリティ・カスタマーサービスへワークフローを横展開する。既存のワークフロー基盤の上に300以上のAIスキルを展開しているのも、この横展開の延長線上にある。" },
      { title: "製品の成り立ちから見る課題", body: "ServiceNowはIT部門のチケット管理の煩雑さを解消するために生まれ、後にワークフロー自動化基盤へ拡張した。存在理由は「部門ごとに分断された申請・承認プロセスの単一化」にある。" },
      { title: "外部環境の要求から見る課題", body: "生成AIエージェントの実務投入が経営アジェンダ化し、既存の業務プロセス基盤にAIを載せられるかどうかが投資判断の分かれ目になっている。" },
    ],
    narrative: [
      { label: "背景", body: "大企業ほどIT・HR・法務・調達など部門ごとに個別の申請システムを持ち、承認フローがブラックボックス化している。" },
      { label: "課題", body: "申請から承認までの所要時間が可視化されず、AIエージェントを載せようにも土台となるワークフロー定義が存在しない部門が多い。" },
      { label: "解決策", body: "Now Platform上で申請・承認プロセスを一度デジタル化し、その定義済みワークフローにAI Agentを重ねることで、既存プロセスをAIが代行する形に持ち込む。" },
      { label: "選定の理由", body: "Microsoft Copilotは既存アプリの生産性向上が中心でワークフロー基盤を持たない。ServiceNowはAI ACVが四半期で10億ドル突破という実績を武器に、ワークフロー起点のAI導入を主張できる。" },
    ],
    openingHook: "新入社員のPC申請から支給まで、平均で何営業日かかっていますか。",
    valueHypothesis: "エージェンティックAIの実運用が9か月で9倍という自社実績を根拠に、ワークフローが定義されている領域ほどAI Agentの投資回収が早い、という価値仮説を立てる。",
    commonObjection: { objection: "ITSMだけで十分で、HRや他部門まで広げる予定はない", reframe: "ITSMで確立した承認フローの型は、HR・調達でもほぼ同じ構造。1部門で得たROIの実績値を横展開の説得材料にする、という広げ方を提案する。" },
  },
  cultureNotes: {
    organizationReadTitle: "「市場シェアNo.1」の看板より、独立事業体化した日本組織の伸びしろを見る。",
    hypothesis: {
      title: "型ができた大企業だが、日本組織はまだ拡張途上。",
      body: "本社はITSM市場でシェア44.4%を持つ確立したプレイヤーですが、日本法人は2023年に独立事業体へ昇格したばかりで、経営体制の強化が続いています。本社の型がどこまで日本に持ち込まれているか、配属チームによる差を面接で確認する必要があります。",
    },
    careerValue: {
      title: "「複数C-suiteを動かした経験」は、次の転職でも強い武器になる。",
      body: "CFO・CIO・COO・CDOとの折衝、仮想チームのオーケストレーション経験は、他のエンタープライズSaaS企業でも即座に評価されやすい。一方、ITSMという特定領域への依存が強いと、業界非特化のSaaS営業への転換にはやや説明の工夫が必要です。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "売上(2026年Q2、サブスクリプション)",
      value: "$3,877M(約6,087億円)",
      detail: "前年比+24.5%(定額為替ベース+23%)。1ドル=157円換算。",
      sourceIds: ["sn-q2fy26"],
    },
    {
      label: "cRPO(残存履行義務)",
      value: "$132.0億(約2兆724億円)",
      detail: "前年比+21%(定額為替ベース+21.5%)、2026年Q2時点。1ドル=157円換算。",
      sourceIds: ["sn-q2fy26"],
    },
    {
      label: "ACV500万ドル超の顧客数",
      value: "658社",
      detail: "前年比+23%(2026年Q2時点)。",
      sourceIds: ["sn-q2fy26"],
    },
    {
      label: "ACV100万ドル超の新規取引",
      value: "123件",
      detail: "前年比で40%近い増加(2026年Q2時点)。",
      sourceIds: ["sn-q2fy26"],
    },
    {
      label: "グローバル従業員数",
      value: "29,187人",
      detail: "2025年12月末時点、Form 10-K開示値。",
      sourceIds: ["sn-10k"],
    },
    {
      label: "Now Assist(AI)ARR",
      value: "10億ドル超",
      detail: "2026年Q2時点で年間経常収益(ARR)が10億ドルを突破。",
      sourceIds: ["sn-q2fy26"],
    },
  ],
  hypotheses: [
    {
      topic: "AI PLATFORM SHIFT",
      title: "全製品AI化を掲げ、Now AssistのARRが10億ドルを突破。AI商談が営業の主戦場になりつつある",
      conclusion: "2026年4月に「全製品をAI対応にする」と発表し、Now AssistのARRが四半期で10億ドルを超えました。今後の営業活動は、ITSM単体の新規導入提案より、既存プラットフォームへのAIアドオン提案が中心になっていく可能性が高いとみます。",
      confidence: "高",
      evidence: [
        "2026年4月に全製品のAI対応を発表(データ連携・ワークフロー実行・セキュリティ・ガバナンスを標準搭載)",
        "Now Assist(AI)が2026年Q2時点でARR10億ドルを突破",
        "cRPOが前年比+21%、ACV500万ドル超の顧客が前年比+23%と、既存の大口顧客への拡張が伴っている",
      ],
      counterSignals: [
        "AI ARRの内訳(新規契約 vs 既存顧客のアップセル)は公開されていない",
        "Now Assistは消費量に応じた課金とされ、営業のコミッション設計にどう反映されるかは非公開",
      ],
      interviewQuestions: [
        "Now Assistの営業ノルマは既存のサブスクリプション目標と別立てか、統合されているか",
        "AI関連商談の比率は、直近四半期でどれくらいに達しているか",
      ],
      sourceIds: ["sn-q2fy26"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "クオータ達成率は公開データで約47〜48%。ブランド力と現場の難易度は別",
      conclusion: "RepVueの集計によると、Account Executiveのクオータ達成率は約48%、Enterprise Account Executiveは約47%です。市場シェア44.4%という強いブランドの一方で、現場のクオータ達成は決して簡単ではないことがうかがえます。",
      confidence: "中",
      evidence: [
        "RepVue集計でAccount Executiveのクオータ達成率48%、Enterprise Account Executiveは47%",
        "Enterprise Account Executiveの標準クオータは約155万ドル(約2.4億円)と高水準",
        "ServiceNowの総合評価はRepVueスコア86.65、Software企業内404位という中位の評価",
      ],
      counterSignals: [
        "RepVueはグローバル集計であり、日本法人・特定チームの数値ではない",
        "クオータ達成率48%という数字は必ずしも低いとは限らず、業界内での相対比較データが必要",
      ],
      interviewQuestions: [
        "自分が担当予定のテリトリー・業界で、直近のクオータ達成率は何%か",
        "未達成の場合のPIPやクオータ調整の運用実態はどうなっているか",
      ],
      sourceIds: ["sn-repvue"],
    },
    {
      topic: "SALES MOTION",
      title: "「オーケストレーター」型の営業。仮想チームを動かす力がクオータ達成を左右する",
      conclusion: "Enterprise AEの求人はSolutions Consultant・Success・Partner・Marketingを含む仮想チームを率いてアカウント戦略を統括することを明記しています。単独ハンター型ではなく、社内の専門リソースを動員する調整力が成果に直結する設計です。",
      confidence: "高",
      evidence: [
        "求人票に「仮想チームを率いてアカウント戦略を統括」「適切なタイミングで専門リソースを投入」が明記",
        "複数のC-suite(CFO・CIO・COO・CDO)との関係構築が要件化されている",
        "Services Account Executiveという別動線で、既存顧客への価値実現(ポストセールス)を専任するチームが存在する",
      ],
      counterSignals: [
        "仮想チームの規模・専任度は求人票だけでは分からない",
        "新規開拓とチーム運営の負荷配分は個人差が大きい可能性がある",
      ],
      interviewQuestions: [
        "自分のアカウントに付くSolutions Consultant・Success担当は専任か兼任か",
        "C-suiteとの関係構築で、直近半年の成功例と失敗例を教えてほしい",
      ],
      sourceIds: ["sn-japan-careers"],
    },
    {
      topic: "MARKET POSITION",
      title: "ITSM市場でシェア44.4%のリーダー。ただし導入期間の長さが商談サイクルにも影響しうる",
      conclusion: "ITSM市場で44.4%のシェアを持つ一方、エンタープライズ導入は9〜18ヶ月かかるとされ、Jira Service Managementなど「速さ」を売りにする競合との商談では、導入の重さがネックになる場面もあると考えられます。",
      confidence: "中",
      evidence: [
        "ITSM市場シェア44.4%(比較記事の集計)",
        "エンタープライズ向け導入は9〜18ヶ月とされ、Jira Service Managementの60〜90日より大幅に長い",
        "ServiceNowは資格認定された専門家(管理者・開発者・アーキテクト)のエコシステムが業界最大級とされる",
      ],
      counterSignals: [
        "市場シェアの集計元・算出方法は記事によって異なり、独立した第三者機関の公式統計ではない",
        "導入期間の長さは裏を返せば大型商談・複数年契約になりやすいとも言え、必ずしもネガティブではない",
      ],
      interviewQuestions: [
        "商談の平均クロージング期間はどれくらいか。競合(特にJira Service Management)との失注理由の傾向は",
        "導入の長さを理由に価格・スコープを見直された経験はあるか",
      ],
      sourceIds: ["sn-jira-compare"],
    },
    {
      topic: "CULTURE / LEADERSHIP",
      title: "日本法人は米本社直轄の独立事業体に昇格。経営体制強化で投資フェーズにあると見られる",
      conclusion: "2023年に鈴木正敏氏が社長に就任して以降、日本法人は米本社直轄の独立事業体に昇格し、顧問招聘など経営体制を強化しています。日本市場への投資・裁量を拡大している時期だと考えられます。",
      confidence: "中",
      evidence: [
        "日本法人が米本社直轄の独立事業体に昇格、鈴木正敏氏が執行役員社長に就任",
        "顧問に内田士郎氏を招へいするなど経営体制を継続的に強化",
        "パナソニックコネクト・NSK・SoftBankなど大手企業の導入事例が複数公開されている",
      ],
      counterSignals: [
        "独立事業体昇格の具体的な権限・予算規模は公開されていない",
        "経営体制の強化が現場の営業組織の拡大ペースと連動しているかは確認できていない",
      ],
      interviewQuestions: [
        "独立事業体への昇格後、日本法人の意思決定でどこまで裁量があるか",
        "直近1年で営業組織の人員はどれくらい増えたか",
      ],
      sourceIds: ["sn-suzuki-appointment", "sn-mynavi-suzuki"],
    },
  ],
  customerProof: [
    {
      company: "パナソニック コネクト",
      products: "Customer Service Management(CSM)",
      outcome: "顧客ニーズの変化に対応できるサービスデスクを構築し、問合せ対応を可視化・自動化",
      implication: "製造業大手でのCSM導入実績として、同業界への提案材料になる。",
      sourceId: "sn-panasonic",
    },
    {
      company: "日本精工(NSK)",
      products: "Security Operations",
      outcome: "セキュリティインシデント報告を効率的に処理し、対応時間を短縮",
      implication: "製造業のセキュリティ運用領域での導入実績。Security Operationsの提案材料になる。",
      sourceId: "sn-nsk",
    },
    {
      company: "ソフトバンク",
      products: "Customer Service Management(CSM)",
      outcome: "日英のリアルタイム翻訳をAPIで統合し、海外子会社・関連会社も含めた顧客対応の効率と満足度を向上",
      implication: "通信キャリア規模の大規模カスタマーサービス基盤としての採用実績。",
      sourceId: "sn-softbank",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "営業平均 1,766万円",
      detail: "OpenMoney自己申告データ(全社43件中の営業職平均値)。全社平均は1,639万円。",
      caveat: "自己申告・母数が少なく、グレード・職種混在。",
      sourceId: "sn-openmoney",
    },
    {
      label: "営業組織の外部評価",
      value: "RepVueスコア 86.65",
      detail: "総合評価3.9/5.0。Enterprise Account Executiveの標準クオータは約155万ドル、達成率は約47%。",
      caveat: "グローバル集計であり日本法人限定ではない。",
      sourceId: "sn-repvue",
    },
  ],
  roleLens: {
    salesMotion: "Enterprise AE(Manufacturing)は複数のC-suite(CFO・CIO・COO・CDO)と関係構築しながらSolutions Consultant等の仮想チームを統括するオーケストレーター型。Services AEは新規開拓ではなく、導入済み顧客への追加サービス(Impact成功パッケージ等)提案が中心で、動き方が明確に異なる。",
    compensation: "OpenMoney集計で営業部門平均年収1,766万円(全社平均1,639万円より高水準)。RepVue集計ではEnterprise AEの標準クオータは約155万ドル。Services AEは既存顧客提案中心でクオータ構造がEnterprise AEと異なるため、単純比較はできない。",
    quota: "RepVueの集計ではEnterprise AEの達成率は約47%。Manufacturing特化のEnterprise AEは業界知識(サプライチェーン・IT/OT統合等)の深さが選考・達成双方で重視されると考えられる。",
    collaboration: "CFO・CIO・COO・CDOなど複数のC-suiteとの折衝、Solutions Consultant・Solutions Specialist・Success・Partner・Marketingを含む仮想チームを率いる調整力が前提。",
  },
  leadership: {
    name: "鈴木 正敏",
    role: "執行役員社長(Executive Vice President & President, Japan)",
    read: "2023年の就任以降、日本法人は米本社直轄の独立事業体に昇格し、顧問招聘など経営体制の強化が続いています。全社的なAIプラットフォームシフトの号令のもと、日本でも大手製造業・通信キャリアへの導入が進んでおり、投資フェーズにあると見られます。",
    sourceId: "sn-suzuki-appointment",
  },
  companyStats: {
    globalHeadcount: {
      value: "29,187人",
      detail: "2025年12月末時点、Form 10-K開示値。",
      sourceId: "sn-10k",
    },
    japanHeadcount: {
      value: "非公開",
      detail: "日本法人の正式な従業員数は公開されていない。",
      sourceId: "sn-japan-careers",
    },
    japanOffice: {
      value: "東京都千代田区有楽町(日比谷三井タワー)、大阪オフィス",
      detail: "本社は日比谷三井タワー。大阪市北区曽根崎新地に大阪オフィスを設置。",
      sourceId: "sn-suzuki-appointment",
    },
    japanSince: {
      value: "2013年",
      detail: "ServiceNow Japan合同会社設立。",
      sourceId: "sn-suzuki-appointment",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "ITSM市場シェア44.4%のリーダーで、大型商談を経験できる",
        detail: "エンタープライズ商談は9〜18ヶ月と長期にわたるが、その分複数年契約・大型契約(ACV500万ドル超の顧客が658社)を動かす経験を積める。",
        sourceIds: ["sn-jira-compare", "sn-q2fy26"],
      },
      {
        title: "複数のC-suiteと折衝し、社内の専門チームを率いる「経営視点の営業力」が鍛えられる",
        detail: "CFO・CIO・COO・CDOなど複数のC-suiteとの関係構築、Solutions Consultant等の仮想チームのオーケストレーションが前提となるため、単なる御用聞きではない経営視点の提案力が磨かれる。",
        sourceIds: ["sn-japan-careers"],
      },
      {
        title: "全社的なAIシフトの最前線で、新しい商材の営業経験を積める",
        detail: "Now AssistのARRが2026年Q2に10億ドルを突破するなど、全製品AI化の号令のもとで急成長中の領域。早期にAI関連商談の経験を積めば、次のキャリアでも希少価値になりうる。",
        sourceIds: ["sn-q2fy26"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜServiceNowか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "ServiceNowとSalesforce、Microsoftとの違いを、自分の担当予定領域(ITSM/CSM/HRSD等)に当てはめて具体的に説明できるか",
        why: "面接では競合比較の理解度が定番で問われる。",
        sourceIds: ["sn-interview-prep"],
      },
      {
        question: "自分が担当予定の業界・テリトリーで、直近のクオータ達成率とPIPの運用実態を逆質問できるか",
        why: "RepVueでクオータ達成率が約47%と公開されており、入社後のギャップを避けるために確認しておきたい。",
        sourceIds: ["sn-repvue"],
      },
      {
        question: "仮想チーム(Solutions Consultant、Success、Partner)との連携経験を具体的に話せるか",
        why: "求人票・面接双方でアカウント戦略の統括力が問われる。",
        sourceIds: ["sn-japan-careers"],
      },
      {
        question: "最終面接で想定されるケーススタディ・ロールプレイに向けて、担当予定業界の課題を用意できているか",
        why: "ワンキャリアの面接体験談では、複数段階の面接を通じて業界理解や提案力を問う質問が報告されている。",
        sourceIds: ["sn-onecareer"],
      },
    ],
  },
  solutions: [
    {
      name: "IT Service Management(ITSM)",
      valueProp: "IT部門の問い合わせ対応・変更管理・資産管理を統合するServiceNowの中核製品。",
      url: "https://www.servicenow.com/products/itsm.html",
      competitors: "BMC Helix、Jira Service Managementが主要な競合。ITSM市場ではServiceNowが44.4%のシェアを持つとされる。",
      differentiation: "Jira Service Managementは60〜90日という短期間で導入できる速さが強みだが、ServiceNowは9〜18ヶ月かけて厳格なITILプロセスに沿った大規模導入を行う。BMC Helixは複雑なハイブリッドインフラの運用に強いとされる。ServiceNowの強みは資格認定された管理者・開発者のエコシステムの規模。",
      retention: "製品単体の継続率は非公開。cRPOは前年比+21%で、既存顧客の契約拡張が事業成長の柱になっている(2026年Q2時点)。",
    },
    {
      name: "IT Operations Management(ITOM)",
      valueProp: "ITインフラの可観測性・自動化を担う製品。ITSMと組み合わせて使われることが多い。",
      url: "https://www.servicenow.com/products/it-operations-management.html",
      competitors: "Datadog、Dynatrace、BMCが主要な競合。",
      differentiation: "DatadogやDynatraceが専業の可観測性ツールであるのに対し、ITOMはITSMのワークフロー(インシデント・変更管理)と一体化している点が強み。専業ツールほどの監視粒度・自動修復機能では見劣りするという指摘もある(Genba分析)。",
      retention: "製品単体の継続率は非公開。",
    },
    {
      name: "HR Service Delivery(HRSD)",
      valueProp: "従業員向けのHR問い合わせ対応・オンボーディングなどを一元化する製品。",
      url: "https://www.servicenow.com/products/hr-service-delivery.html",
      competitors: "Workday、SAP SuccessFactorsが主要な競合。",
      differentiation: "WorkdayはHR・財務・人材管理に特化したデータ基盤としての強みがあるのに対し、HRSDは「問い合わせ対応・ケース管理」に強みがあり、Workdayなど他のHRISとの併用を前提に設計されている。単独のHRISではなく、既存のHR基盤の上に乗るサービス層という位置づけ。",
      retention: "製品単体の継続率は非公開。",
    },
    {
      name: "Customer Service Management(CSM)",
      valueProp: "カスタマーサポートの問い合わせ管理・自動化を行う製品。",
      url: "https://www.servicenow.com/products/customer-service-management.html",
      competitors: "Salesforce Service Cloud、Zendesk、Microsoft Dynamics 365 Customer Serviceが主要な競合。",
      differentiation: "Salesforce Service CloudはCRMデータとの統合が強みなのに対し、ServiceNow CSMはバックオフィス(IT・オペレーション)のワークフローと連携し、フロントの問い合わせを裏側の業務プロセスまで一気通貫でつなげられる点が差別化点とされる。",
      retention: "パナソニックコネクト・ソフトバンクの事例が公式に公開されており、大手企業での複数年活用が確認できる。",
    },
    {
      name: "Creator Workflows(App Engine)",
      valueProp: "ノーコード・ローコードで業務アプリを内製開発するための基盤。",
      url: "https://www.servicenow.com/products/app-engine.html",
      competitors: "Microsoft Power Platform、Mendix、OutSystemsが主要な競合。",
      differentiation: "Microsoft Power PlatformはMicrosoft 365との統合が強みで、Mendix・OutSystemsは専業ローコード企業として開発者体験に強みがある。App EngineはNow Platform上の既存データ・ワークフローをそのまま再利用できる点が強みとされる。",
      retention: "製品単体の継続率は非公開。",
    },
    {
      name: "Security Operations",
      valueProp: "セキュリティインシデントの対応をワークフロー化し、IT運用と連携させる製品。",
      url: "https://www.servicenow.com/products/security-operations.html",
      competitors: "Palo Alto Networks、Splunk、IBMが主要な競合。",
      differentiation: "Palo Alto NetworksやSplunkがセキュリティ専業の検知・分析に強みを持つのに対し、Security OperationsはIT運用のワークフロー(変更管理・資産管理)とインシデント対応を統合できる点が強み。NSKの事例では、セキュリティインシデント報告の効率化・対応時間短縮が公式に紹介されている。",
      retention: "NSKの事例が公式に公開されているが、製品単体の継続率データは非公開。",
    },
    {
      name: "Now Assist(AI / Agentic Workflow)",
      valueProp: "Now Platform全体に組み込まれた生成AI・エージェント機能。ワークフローの自動生成・推奨を行う。",
      url: "https://www.servicenow.com/platform/now-assist.html",
      competitors: "Microsoft Copilot Studio、Salesforce Agentforceが主要な競合。",
      differentiation: "Microsoft CopilotはMicrosoft Graph全体のコンテキストを活用できる強みがあり、Salesforce AgentforceはCRMデータの厚みを強みにする。Now Assistの強みは、ITSM・CSM・HRSDなど既存のワークフローデータに直接組み込まれている点で、2026年4月には全製品がAI対応になったと発表されている。",
      retention: "2026年Q2時点でARRが10億ドルを突破しており、既存顧客への急速な普及が進んでいると見られるが、個別の継続率は非公開。",
    },
    {
      name: "Strategic Portfolio Management(SPM)",
      valueProp: "プロジェクト・製品ポートフォリオの投資判断を可視化する製品。",
      url: "https://www.servicenow.com/products/strategic-portfolio-management.html",
      competitors: "Planview、Broadcom(Clarity)が主要な競合。",
      differentiation: "PlanviewやBroadcom Clarityがポートフォリオ管理専業として詳細なリソース計画機能を持つのに対し、SPMはNow Platform上の実行データ(ITSM・DevOps等)と直接連携し、計画と実行のギャップを埋められる点が強みとされる(Genba分析)。",
      retention: "製品単体の継続率・普及率は非公開。",
    },
  ],
  customerStoriesUrl: "https://www.servicenow.com/customers.html",
  fitTags: [
    "大型エンタープライズ商談を経験したい",
    "複数のC-suiteと渡り合う経営視点を鍛えたい",
    "社内の専門チームを動かす調整力を磨きたい",
    "AI・エージェント領域の最前線に立ちたい",
    "業界特化(製造/金融/通信等)の専門性を築きたい",
    "高OTEで稼ぎたい",
    "外資特有の実力主義に挑戦したい",
    "市場シェアNo.1企業のブランドを味方につけたい",
  ],
  comparisonMap: [
    { arena: "ITSM", companies: ["BMC", "Atlassian(Jira)", "Ivanti"], why: "IT運用管理予算の比較" },
    { arena: "CRM / Customer Service", companies: ["Salesforce", "Zendesk", "Microsoft"], why: "カスタマーサービス予算の比較" },
    { arena: "HR Tech", companies: ["Workday", "SAP"], why: "HRワークフロー予算の比較" },
    { arena: "AI Agent / Workflow", companies: ["Salesforce", "Microsoft", "Google Cloud"], why: "業務AIエージェント予算の比較" },
  ],
  sources: servicenowSources,
};

const snowflakeSources: ResearchSource[] = [
  {
    id: "sno-q1fy27",
    label: "Snowflake 2027年度第1四半期決算",
    url: "https://www.businesswire.com/news/home/20260527027931/en/Snowflake-Reports-Financial-Results-for-the-First-Quarter-of-Fiscal-2027",
    kind: "企業公式",
    scope: "グローバル業績・NRR・AIアカウント数(2026年4月期)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-q4fy26",
    label: "Snowflake 2026年度第4四半期・通期決算",
    url: "https://www.snowflake.com/en/news/press-releases/snowflake-reports-financial-results-for-the-fourth-quarter-and-full-year-of-fiscal-2026/",
    kind: "企業公式",
    scope: "通期業績・RPO",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-10k",
    label: "Snowflake FY2026 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm",
    kind: "法定開示",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-ukita-appointment",
    label: "Snowflake 社長執行役員 浮田竜路 就任リリース",
    url: "https://www.snowflake.com/ja/news/press-releases/snowflake-appoints-ryuji-ukita-as-president-and-CEO-japanese-subsidiary/",
    kind: "企業公式",
    scope: "日本法人代表者・経歴",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-worldtour",
    label: "Snowflake World Tour Tokyo 2026 開催リリース",
    url: "https://prtimes.jp/main/html/rd/p/000000123.000116784.html",
    kind: "企業公式",
    scope: "日本市場での事例登壇企業数・AI活用状況",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-japan-company",
    label: "Snowflake合同会社 会社概要",
    url: "https://salesnow.jp/db/companies/jcbha1b0nbsrj488",
    kind: "外部集計",
    scope: "日本法人従業員数の推定値・設立日",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-docomo",
    label: "NTTドコモ Snowflake導入事例",
    url: "https://www.snowflake.com/ja/customers/all-customers/case-study/ntt-docomo/",
    kind: "企業公式",
    scope: "国内導入事例(通信・全社データ基盤)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-nissin",
    label: "日清食品 Snowflake導入事例",
    url: "https://www.snowflake.com/ja/customers/all-customers/case-study/nissin/",
    kind: "企業公式",
    scope: "国内導入事例(消費財・データドリブン経営)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-jal",
    label: "日本航空(JAL) Snowflake導入事例(CTC提供)",
    url: "https://www.ctc-g.co.jp/report/case-study/jal/",
    kind: "外部集計",
    scope: "国内導入事例(航空・基盤マイグレーション)",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-openmoney",
    label: "OpenMoney Snowflake Japan給与データ",
    url: "https://openmoney.jp/corporations/11970/salaries",
    kind: "外部集計",
    scope: "日本・自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-repvue",
    label: "RepVue Snowflake company reviews",
    url: "https://www.repvue.com/companies/Snowflake",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-gaishitenshoku",
    label: "外資転職.com「Snowflakeの年収・採用・口コミをデータで分析」",
    url: "https://gaishitenshoku.com/snowflake/",
    kind: "コミュニティ",
    scope: "給与レンジ・採用要件・カルチャーの集計記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-databricks-compare",
    label: "TechnologyMatch「Snowflake vs Databricks vs BigQuery」比較記事",
    url: "https://technologymatch.com/blog/snowflake-vs-databricks-vs-bigquery-a-guide-for-it-leaders-in-2026",
    kind: "コミュニティ",
    scope: "データ基盤の競合比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-openwork",
    label: "OpenWork Snowflake社員クチコミ",
    url: "https://www.openwork.jp/company.php?m_id=a0C2x000008zfxh",
    kind: "コミュニティ",
    scope: "組織文化・裁量・ワークライフバランスの口コミ",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-q1fy27-outlook",
    label: "Snowflake Reports Financial Results for the First Quarter of Fiscal 2027",
    url: "https://www.businesswire.com/news/home/20260527027931/en/Snowflake-Reports-Financial-Results-for-the-First-Quarter-of-Fiscal-2027",
    kind: "企業公式",
    scope: "Q1 FY27決算・通期ガイダンス上方修正",
    checkedAt: "2026-08-06",
  },
  {
    id: "sno-ipo",
    label: "CNBC「Snowflake begins trading on the NYSE」",
    url: "https://www.cnbc.com/2020/09/16/snowflake-snow-opening-trading-on-the-nyse.html",
    kind: "外部集計",
    scope: "2020年IPO時の公開価格・初日株価(当時最大規模のソフトウェアIPO)",
    checkedAt: "2026-08-07",
  },
  {
    id: "sno-2024-breach",
    label: "Wikipedia「Snowflake data breach」",
    url: "https://en.wikipedia.org/wiki/Snowflake_data_breach",
    kind: "外部集計",
    scope: "2024年の顧客認証情報流出インシデント",
    checkedAt: "2026-08-07",
  },
  {
    id: "sno-fy2026-results",
    label: "Futurum「Snowflake Q4 FY2026 Results Highlight AI-Led Consumption」",
    url: "https://futurumgroup.com/insights/snowflake-q4-fy-2026-results-highlight-ai-led-consumption-and-platform-expansion/",
    kind: "外部集計",
    scope: "FY2026製品売上成長率の再加速",
    checkedAt: "2026-08-07",
  },
];

const snowflakeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
  marketStatus: {
    isPublic: true,
    ticker: "SNOW",
    exchange: "NYSE",
    listedSince: "2020年",
    stockLinkUrl: "https://stockanalysis.com/stocks/snow/",
    growthSummary: "2012年にBenoît Dageville氏らが創業し、2020年9月にNYSEへ上場(公開価格$120、初日は$245まで急伸し当時史上最大規模のソフトウェアIPOに)。2019年にFrank Slootman氏がCEOに就任し、技術志向のスタートアップからエンタープライズ営業体制へ転換したことが急成長の起点になった。2024年5〜6月には、盗まれた顧客の認証情報を使ってAT&Tやチケットマスター等、複数企業のデータが不正アクセスされる事件が発生(Snowflake自体の環境が直接侵害されたわけではなく、多要素認証を設定していなかった顧客アカウントが狙われた)。2024年2月にはSridhar Ramaswamy氏がCEOに就任、Slootman氏は会長に。事件後の信頼回復を経て、直近は製品売上成長率が26%→34%へ再加速するなど、AI活用(Cortex等)を軸に高成長を取り戻している局面にある、というのがGenbaの読み。",
    milestones: [
      { year: "2020", label: "NYSE上場", detail: "公開価格$120、初日に$245まで急伸。当時史上最大規模のソフトウェアIPOとなった。", sourceId: "sno-ipo" },
      { year: "2019", label: "Frank Slootman氏がCEOに就任", detail: "技術志向のスタートアップから、エンタープライズ営業体制の企業へ転換を主導。", sourceId: "sno-fy2026-results" },
      { year: "2024", label: "顧客認証情報の窃取による不正アクセス事件", detail: "多要素認証未設定の顧客アカウントが狙われ、AT&Tやチケットマスター等のデータが影響を受けた。Snowflake自体の環境への侵害ではないとされる。", sourceId: "sno-2024-breach" },
      { year: "2025-26", label: "製品売上成長率が26%→34%へ再加速", detail: "AI活用(Cortex等)を軸に、新規顧客の約半数がAI関連のユースケースで採用したとされる。", sourceId: "sno-fy2026-results" },
    ],
    sourceIds: ["sno-ipo", "sno-2024-breach", "sno-fy2026-results", "sno-q1fy27-outlook"],
  },
  sellingPlaybook: {
    frameIntro: "Snowflakeの売り方は「正しい数字がどれか分からない」という素朴な痛みから始めるのが効く。一次データの統合が、その先のAI活用(Cortex/Snowflake Intelligence)の前提条件になる、という順で語る。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "まずデータウェアハウスとして複数ソースのデータを統合し、その後Cortex・Snowflake IntelligenceでAI活用へ拡張するのが典型。CoCo利用アカウントが四半期比で倍増しているのは、この拡張フェーズの証拠。" },
      { title: "製品の成り立ちから見る課題", body: "Snowflakeはクラウド間・部門間でデータがサイロ化し、分析基盤の運用が重いという課題を解消するために、コンピュートとストレージを分離した設計で生まれた。存在理由は「データ基盤の運用負荷を下げながら誰でも使えるようにする」こと。" },
      { title: "外部環境の要求から見る課題", body: "生成AIの実務活用が進むほど信頼できる一次データへのアクセスが前提条件になり、AIモデルの精度はデータ基盤の統合度に依存するという認識が広がっている。" },
    ],
    narrative: [
      { label: "背景", body: "企業はSalesforceや基幹システム、ログなど複数箇所にデータを持ち、部門ごとに別のBIツール・別の集計ロジックで数字が食い違う。" },
      { label: "課題", body: "正しい数字がどれかを確認する作業に時間がかかり、AIに聞かせても参照するデータが古い・断片的で回答の精度が落ちる。" },
      { label: "解決策", body: "Snowflakeに一次データを集約し、Cortex・Snowflake Intelligenceで自然言語による分析・エージェント開発(CoCo)まで一貫させる。" },
      { label: "選定の理由", body: "Databricksはエンジニア主導のML基盤として強いが、非エンジニアが自然言語で使う体験は発展途上。SnowflakeはCoCo利用アカウントの増加がFY27上方修正の主要因という決算開示が示す通り、ビジネスユーザー起点のAI活用で差別化している。" },
    ],
    openingHook: "先月の役員会で出た数字、部門ごとに集計ロジックが違って揉めたことはありませんか。",
    valueHypothesis: "FY27ガイダンスが27%→31%成長に上方修正された主因がCoCo・Snowflake Intelligenceの伸びだという開示を根拠に、信頼できる一次データがAI活用の投資対効果を左右する、という価値仮説を立てる。",
    commonObjection: { objection: "すでにBIツールがあるので新しい基盤は不要", reframe: "BIツールは見るためのもの。Snowflakeは聞く・作る(自然言語分析・エージェント開発)ための基盤という違いを、既存BIとの併存前提で説明する。" },
  },
  cultureNotes: {
    organizationReadTitle: "「ニアゼロマネジメント」の裏側にある、成果への高いプレッシャーを見抜く。",
    hypothesis: {
      title: "裁量は大きいが、要求水準も高い。8年以上の経験者が主戦場。",
      body: "OpenWorkの口コミには裁量の大きさ(ニアゼロマネジメント)を評価する声がある一方、「期待値が高く、給与が低い」という指摘もある。求人要件も8年以上のフィールドセールス経験を求めており、育成前提のポジションというより即戦力採用が中心と見られる。",
    },
    careerValue: {
      title: "「データ×AI基盤を売った経験」は、次の転職でも通用する武器になる。",
      body: "Databricksとの競合を経験しながらデータプラットフォームを売った実績は、他のデータ・AI関連SaaS企業でも評価されやすい。一方、クオータ達成率の低さが示す通り、在籍中に十分な実績を積めるかどうかは個人差が大きく、次の転職で語れる成果を意識的に作る必要がある。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "売上(2027年度Q1)",
      value: "$1.39B(約2,182億円)",
      detail: "前年比+33%。製品売上は$1.33B、前年比+34%。1ドル=157円換算。",
      sourceIds: ["sno-q1fy27"],
    },
    {
      label: "Net Revenue Retention",
      value: "126%",
      detail: "2026年4月期(FY2027 Q1)時点。既存顧客の利用拡大が成長の柱。",
      sourceIds: ["sno-q1fy27"],
    },
    {
      label: "年間売上100万ドル超の顧客数",
      value: "779社",
      detail: "前年比+29%(2026年4月期時点)。同四半期で46社が新たに到達。",
      sourceIds: ["sno-q1fy27"],
    },
    {
      label: "RPO(残存履行義務)",
      value: "$97.7億(約1兆5,349億円)",
      detail: "前年比+42%(2026年度第4四半期時点)。1ドル=157円換算。",
      sourceIds: ["sno-q4fy26"],
    },
    {
      label: "AI利用アカウント数",
      value: "13,600件超",
      detail: "2026年4月期に約4,500件純増。AIが成長の主要ドライバーになりつつある。",
      sourceIds: ["sno-q1fy27"],
    },
    {
      label: "グローバル従業員数",
      value: "9,060人",
      detail: "2026年1月31日時点(FY2026)、Form 10-K開示値。",
      sourceIds: ["sno-10k"],
    },
  ],
  hypotheses: [
    {
      topic: "QUOTA ATTAINABILITY",
      title: "RepVueの集計でクオータ達成率は約1%。ブランド成長と現場の体感には大きな差がある可能性",
      conclusion: "全社の製品売上は前年比34%成長と好調ですが、RepVueの集計ではAccount Executiveのクオータ達成率がわずか約1%とされています。母数や算出方法の偏りを差し引いても、クオータ設計が非常に厳しい可能性を示唆しており、オファー時のクオータ水準を慎重に確認すべきです。",
      confidence: "中",
      evidence: [
        "RepVue集計でAccount Executive・Sales Development Representative・Sales Engineerいずれもクオータ達成率が約1%",
        "外資転職.com集計のAE要件は「8年以上のフィールドセールス経験」「週8回以上の対面商談」など高いハードルが明記",
        "OpenWork口コミに「期待値が高く、給与が低い」という指摘がある",
      ],
      counterSignals: [
        "RepVueの母数・集計期間は非公開であり、極端に少ないサンプルで偏っている可能性がある",
        "全社の製品売上は前年比34%成長、NRR126%と会社全体の勢いは強く、達成率の低さと矛盾するように見える点は解釈に注意が必要",
        "「ニアゼロマネジメント(裁量の大きさ)」を評価する声もOpenWorkにはある",
      ],
      interviewQuestions: [
        "自分にオファーされるクオータの水準と、チーム全体の直近の達成率(実数)を教えてほしい",
        "クオータ未達成が続いた場合のPIP運用や、達成率の低さに対する会社側の認識を聞きたい",
      ],
      sourceIds: ["sno-repvue", "sno-gaishitenshoku"],
    },
    {
      topic: "AI MOMENTUM",
      title: "AI関連アカウントが四半期で4,500件純増。データ基盤からAI基盤への転換が営業の主戦場に",
      conclusion: "2026年4月期時点でAI機能を使うアカウントが13,600件を超え、単四半期で4,500件近く純増しました。今後の商談は、従来のデータウェアハウス提案よりも、Cortex等のAI機能アドオン提案が中心になっていく可能性が高いとみます。",
      confidence: "高",
      evidence: [
        "AI機能を使うcapacity/on-demandアカウントが13,600件超(2026年4月期時点)",
        "同四半期でAIアカウントが約4,500件純増",
        "製品売上が前年比34%増、NRRが126%と既存顧客への拡張が伴っている",
      ],
      counterSignals: [
        "AI機能の「利用」が即座に追加のライセンス収益に直結するかは公開データからは判断できない",
        "AI関連の営業ノルマが既存の消費量ベースの目標と統合されているか、別立てかは非公開",
      ],
      interviewQuestions: [
        "AI関連の商談・アップセルは自分のノルマにどう反映されるか",
        "Cortex等のAI機能の営業トレーニングは入社後どの段階で受けられるか",
      ],
      sourceIds: ["sno-q1fy27"],
    },
    {
      topic: "JAPAN LEADERSHIP",
      title: "日本法人は生え抜き社長体制に移行。日本市場の独自色を強める投資フェーズ",
      conclusion: "2025年8月、日本法人の営業統括を長く務めた浮田竜路氏が社長執行役員に就任しました。外部招聘ではなく内部昇格である点は、日本市場での実績とチームへの理解を重視した経営判断だと考えられます。Snowflake World Tour Tokyo 2026で40社超の国内企業が事例登壇するなど、日本市場での存在感を強めています。",
      confidence: "中",
      evidence: [
        "2021年から日本法人の営業統括を務めた浮田竜路氏が2025年8月に社長執行役員に就任(内部昇格)",
        "JAL・NTTドコモ・日清食品など大手企業の導入事例が複数公開されている",
        "Snowflake World Tour Tokyo 2026で40社超の国内企業が「稼働中」のAI事例を語ると告知",
      ],
      counterSignals: [
        "日本法人の正式な従業員数・営業組織の規模は公開されていない(推定約200人)",
        "内部昇格の背景・意図についての公式な説明は確認できていない",
      ],
      interviewQuestions: [
        "浮田社長体制になってから、営業組織の方針で変わった点は具体的に何か",
        "直近1年で日本の営業チームの人数はどれくらい増えたか",
      ],
      sourceIds: ["sno-ukita-appointment", "sno-worldtour"],
    },
    {
      topic: "COMP STRUCTURE",
      title: "OTEは外資SaaSの中でも高水準。ただし要件も厳しく「高OTE=達成しやすい」ではない",
      conclusion: "外資転職.comの集計ではAEの総報酬レンジは1,880万〜3,160万円と高水準です。一方で要件は8年以上のフィールドセールス経験、週8回以上の対面商談など高いハードルが明記されており、前述のクオータ達成率の低さと合わせて、高OTEの裏側にある難易度を理解した上で臨むべきです。",
      confidence: "中",
      evidence: [
        "外資転職.com集計でAE総報酬レンジ1,880万〜3,160万円、ベース980万〜1,470万円",
        "OpenMoney自己申告データで営業平均年収1,168万円(全社平均1,390万円よりやや低い)",
        "求人要件で8年以上のフィールドセールス経験、週8回以上の対面ミーティング実績が明記",
      ],
      counterSignals: [
        "外資転職.comとOpenMoneyで数値に開きがあり、集計方法・母集団が異なる可能性がある",
        "自己申告データのため、グレード・在籍年数による差が反映されていない可能性がある",
      ],
      interviewQuestions: [
        "ベース・コミッションの比率と、コミッションが発生する具体的な条件(ARR認識のタイミング等)を教えてほしい",
        "週8回以上の対面商談という要件は、リモート商談が主流の現在も適用されるか",
      ],
      sourceIds: ["sno-gaishitenshoku", "sno-openmoney"],
    },
    {
      topic: "PRODUCT BREADTH",
      title: "データウェアハウスからAI・アプリ開発基盤へ拡張。プラットフォームセールスの色が強まっている",
      conclusion: "SnowflakeはSQL分析基盤としての強みに加え、Cortex AI、Snowpark(開発者向け)、Data Sharing/Cleanroom(企業間データ連携)など製品群を広げています。Databricksとの差別化も「使いやすさ」から「AI・データ連携の広さ」へと軸が移りつつあります。",
      confidence: "中",
      evidence: [
        "Cortex AI、Snowpark、Data Sharing/Data Clean Roomsなど複数の製品ラインが公式に展開されている",
        "NTTドコモの全社データ基盤事例のように、単一のデータウェアハウス用途を超えた全社統合プロジェクトが公開されている",
        "2026年時点で3社(Snowflake/Databricks/BigQuery)は「分析・AI・業務データの単一統治プラットフォーム」という同じ方向に収斂しつつあるとされる",
      ],
      counterSignals: [
        "Databricksは機械学習・MLOps(MLflow、Unity Catalog)で先行しているという評価がある",
        "各製品の日本国内での普及率・営業体制の専門分化度合いは非公開",
      ],
      interviewQuestions: [
        "自分が担当する顧客で、Cortex AIやSnowparkなど新製品を横断提案する機会は実際にどれくらいあるか",
        "Databricksとの競合案件で、直近の勝率・失注理由の傾向はどうか",
      ],
      sourceIds: ["sno-databricks-compare", "sno-docomo"],
    },
  ],
  customerProof: [
    {
      company: "NTTドコモ",
      products: "Data Cloud(全社データ基盤)",
      outcome: "全社データ基盤を構築し、データ利活用を促進",
      implication: "通信キャリア規模の全社データ統合プロジェクトとしての導入実績。",
      sourceId: "sno-docomo",
    },
    {
      company: "日清食品",
      products: "Data Cloud(データドリブン経営基盤)",
      outcome: "複数の事業システムに散在するデータを一元化する分析基盤を構築",
      implication: "消費財メーカーのデータドリブン経営への転換事例として提案材料になる。",
      sourceId: "sno-nissin",
    },
    {
      company: "日本航空(JAL)",
      products: "Data Cloud(オンプレミスからの移行)",
      outcome: "オンプレミスのデータ基盤をクラウドに移行し、ライセンス・保守コストを最大60%削減",
      implication: "レガシー基盤からのマイグレーション案件として、航空・大手インフラ企業への提案材料になる。",
      sourceId: "sno-jal",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "営業平均 1,168万円",
      detail: "OpenMoney自己申告データ(6件)。全社平均は1,390万円。",
      caveat: "自己申告・母数が少なく、グレード・在籍年数の内訳は不明。",
      sourceId: "sno-openmoney",
    },
    {
      label: "営業組織の外部評価",
      value: "RepVue クオータ達成率 約1%",
      detail: "Account Executive・SDR・Sales Engineerいずれも直近ratingsでの達成率が極めて低い。",
      caveat: "グローバル集計であり、母数・算出期間は非公開。極端な数値のため単独の判断材料にはしない。",
      sourceId: "sno-repvue",
    },
  ],
  roleLens: {
    salesMotion: "消費量ベースの課金モデルのため、初期導入後の利用拡大(アップセル)が成長の柱。NRR126%が示す通り既存顧客への深耕が重要。",
    compensation: "外資転職.com集計でAE総報酬レンジ1,880万〜3,160万円。ただしOpenMoneyの営業平均は1,168万円とやや低く、集計方法による差が大きい。",
    quota: "RepVueの集計ではAE達成率が約1%と極端に低い。母数・算出方法に留保はあるが、クオータ設計の厳しさを示唆する。",
    collaboration: "Sales Engineer・Professional Services・Partnerとの連携が前提。技術的な検証(PoC)を伴う商談が多いと考えられる。",
  },
  leadership: {
    name: "浮田 竜路",
    role: "社長執行役員(President and CEO, Japan)",
    read: "2021年から日本法人の営業統括を務めた浮田氏が2025年8月に社長へ内部昇格しました。外部招聘ではなく生え抜き人材の登用は、これまでの実績とチームへの理解を重視した経営判断だと考えられます。JAL・NTTドコモなど大手企業への導入が進み、日本市場での投資は着実に積み上がっているようです。",
    sourceId: "sno-ukita-appointment",
  },
  companyStats: {
    globalHeadcount: {
      value: "9,060人",
      detail: "2026年1月31日時点(FY2026)、Form 10-K開示値。",
      sourceId: "sno-10k",
    },
    japanHeadcount: {
      value: "約200人(推定)",
      detail: "採用データベースによる推定値。公式には開示されていない。",
      sourceId: "sno-japan-company",
    },
    japanOffice: {
      value: "東京",
      detail: "日本法人本社は東京。",
      sourceId: "sno-japan-company",
    },
    japanSince: {
      value: "2019年7月",
      detail: "Snowflake合同会社設立。",
      sourceId: "sno-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "消費量ベースのビジネスモデルで、顧客の利用拡大＝自分の成果に直結する",
        detail: "NRR126%という高い数値が示す通り、導入後の利用拡大が事業成長の柱。単発の契約獲得だけでなく、顧客が使えば使うほど成果が積み上がる設計を体感できる。",
        sourceIds: ["sno-q1fy27"],
      },
      {
        title: "JAL・NTTドコモ・日清食品など、業界を代表する大手企業のデータ基盤刷新に関われる",
        detail: "レガシー基盤からのマイグレーションや全社データ統合など、企業の基幹インフラに関わる大型プロジェクトを経験できる。",
        sourceIds: ["sno-jal", "sno-docomo", "sno-nissin"],
      },
      {
        title: "AI機能アカウントが急増中で、データ×AIの最前線に立てる",
        detail: "AI機能を使うアカウントが四半期で4,500件近く純増しており、Cortex AI等の新しい提案軸を早期に経験できる。",
        sourceIds: ["sno-q1fy27"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜSnowflakeか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "SnowflakeとDatabricks、BigQueryとの違いを、自分の担当予定顧客像に当てはめて具体的に説明できるか",
        why: "3社の競合比較は面接での定番。",
        sourceIds: ["sno-databricks-compare"],
      },
      {
        question: "自分にオファーされるクオータの水準と、チーム全体の直近の達成率(実数)を逆質問できるか",
        why: "RepVueでクオータ達成率が極めて低いと公開されており、入社後のギャップを避けるために必ず確認したい。",
        sourceIds: ["sno-repvue"],
      },
      {
        question: "週8回以上の対面商談など、要件に明記された営業活動量を今の担当予定エリアでどう実現するか説明できるか",
        why: "外資転職.comの記事で活動量の要件が明記されている。",
        sourceIds: ["sno-gaishitenshoku"],
      },
      {
        question: "消費量ベースの課金モデルにおける、自分のノルマ設計(新規契約 vs 既存利用拡大の比重)を確認できるか",
        why: "NRR126%が示す通り既存顧客の利用拡大が成長の中心であり、自分の評価がどちらで測られるかは事前に理解しておきたい。",
        sourceIds: ["sno-q1fy27"],
      },
    ],
  },
  solutions: [
    {
      name: "Data Warehouse / Core Platform",
      valueProp: "SQL分析基盤としての中核製品。ほぼ運用不要のマネージド型データウェアハウス。",
      url: "https://www.snowflake.com/en/data-cloud/workloads/data-warehouse/",
      competitors: "Databricks、Google BigQuery、Amazon Redshiftが主要な競合。",
      differentiation: "Databricksはエンジニア向けのオープンな基盤(Apache Spark/Delta Lake)、BigQueryはGoogleエコシステムとのサーバーレス連携が強み。Snowflakeの強みは「ほぼ運用管理不要」な使いやすさと、SQLアナリストにとっての予測可能なパフォーマンス。",
      retention: "NRRは126%(2026年4月期時点)で、既存顧客の利用拡大が成長の柱。",
    },
    {
      name: "Snowflake Cortex AI",
      valueProp: "プラットフォーム上のデータに対して直接生成AI・LLM機能を実行できるAIレイヤー。",
      url: "https://www.snowflake.com/en/product/features/cortex/",
      competitors: "Databricks Mosaic AI、Google Vertex AIが主要な競合。",
      differentiation: "Databricksは機械学習モデルの構築・MLOps(MLflow、Unity Catalog)で先行しているという評価がある。Cortex AIの強みは、データを外部に移動せずプラットフォーム内で完結してAI処理ができる点。",
      retention: "2026年4月期時点でAI機能を使うアカウントが13,600件超、四半期で4,500件近く純増しており、急速に普及が進んでいる。",
    },
    {
      name: "Snowpark(開発者向け実行環境)",
      valueProp: "Python・Java・Scalaでデータエンジニアリング・ML処理をSnowflake内で実行できる開発者向け環境。",
      url: "https://www.snowflake.com/en/data-cloud/snowpark/",
      competitors: "Databricksが最大の競合(開発者体験ではDatabricksが先行しているという評価が一般的)。",
      differentiation: "DatabricksはApache Sparkベースのオープンな開発環境として長年の実績があるのに対し、SnowparkはSQL分析基盤の使いやすさをそのままエンジニアリング領域に拡張した位置づけ。",
      retention: "製品単体の普及率・継続率は非公開。",
    },
    {
      name: "Data Sharing / Data Clean Rooms",
      valueProp: "企業間でデータを安全に共有・分析できる機能。個社を超えたデータ連携を可能にする。",
      url: "https://www.snowflake.com/en/data-cloud/data-sharing/",
      competitors: "Databricks Delta Sharing、AWS Data Exchangeが主要な競合。",
      differentiation: "単一企業内の分析にとどまらず、企業間でのデータ連携・共同分析を可能にする点が特徴。Databricksも同様のDelta Sharing機能を展開しており、差別化は縮小しつつある(Genba分析)。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Native Apps / Marketplace",
      valueProp: "サードパーティのデータ・アプリケーションをSnowflake上で直接利用できるマーケットプレイス。",
      url: "https://www.snowflake.com/en/data-cloud/marketplace/",
      competitors: "Databricks Marketplace、AWS Data Exchangeが主要な競合。",
      differentiation: "自社のデータ基盤上でサードパーティアプリを動かせる点はDatabricksも同様の戦略を取っており、プラットフォーム間の差別化は縮小しつつある(Genba分析)。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Unistore(トランザクション処理)",
      valueProp: "分析用データと業務トランザクションデータを同一プラットフォームで扱う機能。",
      url: "https://www.snowflake.com/en/data-cloud/workloads/unistore/",
      competitors: "従来の業務システムDB(Oracle、PostgreSQL等)とDatabricksが隣接する競合。",
      differentiation: "分析基盤とトランザクション処理を分離しないアーキテクチャは新しい試みで、専業のOLTPデータベースほどの実績蓄積はまだ薄いと見られる(Genba分析)。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Cybersecurity Workload(セキュリティデータ分析)",
      valueProp: "セキュリティログ・脅威データを大規模に分析するためのワークロード。",
      url: "https://www.snowflake.com/en/data-cloud/workloads/cybersecurity/",
      competitors: "Splunk、Datadogが主要な競合。",
      differentiation: "SplunkはSIEM専業として検知ルール・コンプライアンス実績で先行するのに対し、Snowflakeは大量のセキュリティログを低コストで長期保管・横断分析できる点を強みとする。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Snowflake for Media & Entertainment(業界特化ソリューション)",
      valueProp: "メディア・広告業界向けに、視聴データ・広告効果測定などを統合するインダストリーソリューション。",
      url: "https://www.snowflake.com/en/data-cloud/industries/media-entertainment/",
      competitors: "Databricks、Google Cloud(業界特化ソリューション)が主要な競合。",
      differentiation: "業界特化のデータモデル・パートナーエコシステム(広告代理店・計測ベンダーとの連携)を用意している点が特徴。過去には北米でAccount Executive, Media & Entertainmentという専任ポジションが募集されていたこともあり、業界特化営業の存在がうかがえる。",
      retention: "日本国内での普及率・継続率のデータは非公開。",
    },
  ],
  customerStoriesUrl: "https://www.snowflake.com/ja/customers/all-customers/",
  fitTags: [
    "データ×AI領域を極めたい",
    "消費量ベースの成長モデルを経験したい",
    "大手企業の基幹データ基盤刷新に関わりたい",
    "高OTEを狙いたい(達成難易度は要確認)",
    "技術理解を伴う提案力を鍛えたい",
    "外資特有の実力主義に挑戦したい",
    "急成長企業でスピード感を求めたい",
    "生え抜きの経営体制のもとで働きたい",
  ],
  comparisonMap: [
    { arena: "データ基盤 / AI", companies: ["Databricks", "Google BigQuery", "Amazon Redshift"], why: "データ・AI予算の比較" },
    { arena: "セキュリティデータ分析", companies: ["Splunk", "Datadog"], why: "ログ分析・SIEM予算の比較" },
    { arena: "CRM / データ活用", companies: ["Salesforce", "Adobe"], why: "顧客データ活用予算の比較" },
    { arena: "開発者基盤", companies: ["Databricks", "AWS"], why: "データエンジニアリング予算の比較" },
  ],
  sources: snowflakeSources,
};

const mongodbSources: ResearchSource[] = [
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
];

const mongodbIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
      label: "ARR10万ドル以上の顧客数",
      value: "2,895社",
      detail: "前年の2,506社から増加(2026年4月期時点)。",
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
      valueProp: "フルマネージドのクラウドデータベースサービス。AWS/Azure/GCPで動作し、Net ARR Expansion121%で成長を牽引する中核製品。",
      url: "https://www.mongodb.com/atlas",
      competitors: "Azure Cosmos DB、Amazon DynamoDB、Google Cloud Firestoreが主要な競合。",
      differentiation: "Cosmos DBは5段階の一貫性レベルで柔軟な制御ができる一方、Atlasはインスタンス課金でワークロードが安定していればコストが読みやすい。ドキュメント指向のスキーマ柔軟性と、AWS/Azure/GCPいずれでも同等に使えるマルチクラウド対応が強み。",
      retention: "Atlas売上は全体の75%(前年72%から上昇)、前年比+29%成長。Net ARR Expansionは121%。",
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
];

const brazeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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

const crowdstrikeSources: ResearchSource[] = [
  {
    id: "cs-q1fy27",
    label: "CrowdStrike 2027年度第1四半期決算",
    url: "https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-first-quarter-fiscal-year-2027-financial",
    kind: "企業公式",
    scope: "グローバル業績・ARR・Flex顧客動向(2026年4月期)",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-10k",
    label: "CrowdStrike FY2026 Form 10-K",
    url: "https://www.sec.gov/Archives/edgar/data/1535527/000153552726000010/crwd-20260131.htm",
    kind: "法定開示",
    scope: "グローバル従業員数",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-dixon-appointment",
    label: "CrowdStrike Japonathon Dixon JAPAC VP任命リリース",
    url: "https://prtimes.jp/main/html/rd/p/000000146.000031049.html",
    kind: "企業公式",
    scope: "日本・APAC統括責任者の経歴・戦略",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-japan-company",
    label: "クラウドストライク合同会社 企業情報",
    url: "https://salesnow.jp/db/companies/jcbvap4j6k5wbumt",
    kind: "外部集計",
    scope: "日本法人設立日・所在地・登記代表者",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-his",
    label: "H.I.S. CrowdStrike導入事例(Macnica提供)",
    url: "https://www.macnica.co.jp/en/business/security/manufacturers/crowdstrike/case_17.html",
    kind: "外部集計",
    scope: "国内導入事例(旅行業・EDR/NGAV)",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-openmoney",
    label: "OpenMoney クラウドストライク給与データ",
    url: "https://openmoney.jp/corporations/3966/salaries",
    kind: "外部集計",
    scope: "日本・自己申告給与データ",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-repvue",
    label: "RepVue CrowdStrike company reviews",
    url: "https://www.repvue.com/companies/Crowdstrike",
    kind: "コミュニティ",
    scope: "グローバル営業職の自己申告評価・クオータ達成率",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-gaishitenshoku",
    label: "外資転職.com「CrowdStrikeの年収・採用・口コミをデータで分析」",
    url: "https://gaishitenshoku.com/crowdstrike/",
    kind: "コミュニティ",
    scope: "給与レンジ・採用要件・カルチャーの集計記事",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-openwork",
    label: "OpenWork クラウドストライク合同会社 採用情報・面接質問",
    url: "https://www.openwork.jp/a0C1000001V6bhv/job/",
    kind: "コミュニティ",
    scope: "面接での想定質問・採用プロセス",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-competitors-compare",
    label: "Tech Insider「CrowdStrike vs Defender vs SentinelOne」比較記事",
    url: "https://tech-insider.org/crowdstrike-vs-defender-vs-sentinelone-2026/",
    kind: "コミュニティ",
    scope: "EDR/XDR製品の競合比較",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-q1fy27-outlook",
    label: "CrowdStrike Reports First Quarter Fiscal Year 2027 Financial Results",
    url: "https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-first-quarter-fiscal-year-2027-financial",
    kind: "企業公式",
    scope: "Q1 FY27決算・通期ARRガイダンス",
    checkedAt: "2026-08-06",
  },
  {
    id: "cs-ipo",
    label: "CNBC「CrowdStrike IPO stock starts trading on the Nasdaq」",
    url: "https://www.cnbc.com/2019/06/12/crowdstrike-ipo-stock-starts-trading-on-the-nasdaq.html",
    kind: "外部集計",
    scope: "2019年IPO時の公開価格・初日株価",
    checkedAt: "2026-08-07",
  },
  {
    id: "cs-2024-outage",
    label: "Wikipedia「2024 CrowdStrike-related IT outages」",
    url: "https://en.wikipedia.org/wiki/2024_CrowdStrike-related_IT_outages",
    kind: "外部集計",
    scope: "2024年7月の世界的ITアウトージの規模・影響",
    checkedAt: "2026-08-07",
  },
  {
    id: "cs-fy2026-results",
    label: "CrowdStrike「Reports Fourth Quarter and Fiscal Year 2026 Financial Results」",
    url: "https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-reports-fourth-quarter-and-fiscal-year-2026",
    kind: "企業公式",
    scope: "FY2026通期決算・ARR5.25億ドル到達",
    checkedAt: "2026-08-07",
  },
  {
    id: "cs-delta-lawsuit",
    label: "Judge Lets Delta Lawsuit Over CrowdStrike Outage Proceed(BankInfoSecurity)",
    url: "https://www.bankinfosecurity.com/judge-lets-deltas-cyber-failure-suit-vs-crowdstrike-proceed-a-28443",
    kind: "外部集計",
    scope: "Delta Air Lines訴訟(2024年障害関連)の係争状況",
    checkedAt: "2026-08-07",
  },
  {
    id: "cs-corporate-ae-job",
    label: "Corporate Account Executive(新規開拓担当営業)求人",
    url: "https://crowdstrike.wd5.myworkdayjobs.com/crowdstrikecareers/job/Japan---Tokyo/Corporate-Account-Executive---_R29332",
    kind: "企業公式",
    scope: "日本の新規開拓型AEポジションの役割・要件",
    checkedAt: "2026-08-07",
  },
];

const crowdstrikeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
  marketStatus: {
    isPublic: true,
    ticker: "CRWD",
    exchange: "NASDAQ",
    listedSince: "2019年",
    stockLinkUrl: "https://stockanalysis.com/stocks/crwd/",
    growthSummary: "2011年にGeorge Kurtz氏らが創業し、2019年6月にNASDAQへ上場(公開価格$34、初日+71%)。クラウドネイティブなAI検知型EDRとして急成長を続けてきたが、2024年7月19日にFalconセンサーのWindows向け構成ファイル更新の不具合により、世界で約850万台のWindows端末が同時にクラッシュする大規模障害を引き起こした。航空・金融・医療等に影響が波及し、経済損失は推定100億ドル規模、株価も一時-45%下落したが、その後165%超のリバウンドを見せて回復した。Delta Air Lines等からの訴訟が一部係属中だが、契約上の賠償上限により実際の負担額は限定的とみられている。障害後もARRは拡大を続け、FY2026通期でARRは52.5億ドルに到達、純新規ARRは年間で初めて10億ドルを突破するなど、事業への実害は限定的だったことを示している、というのがGenbaの読み。",
    milestones: [
      { year: "2019", label: "NASDAQ上場", detail: "公開価格$34、初日+71%の値上がりで取引開始。", sourceId: "cs-ipo" },
      { year: "2024.7", label: "世界規模のITアウトージを引き起こす", detail: "Falconセンサーの構成ファイル更新の不具合で約850万台のWindows端末がクラッシュ。株価は一時-45%下落後、165%超のリバウンドで回復。", sourceId: "cs-2024-outage" },
      { year: "2024-", label: "Delta Air Lines等の訴訟が一部係属中", detail: "重過失請求の審理は続くが、詐欺・製造物責任等の主張は棄却され、契約上の上限により実際の賠償額は限定的とみられる。", sourceId: "cs-delta-lawsuit" },
      { year: "2026", label: "ARRが52.5億ドルへ到達", detail: "FY2026通期で純新規ARRが年間として初めて10億ドルを突破。障害後も高成長を維持している。", sourceId: "cs-fy2026-results" },
    ],
    sourceIds: ["cs-ipo", "cs-2024-outage", "cs-delta-lawsuit", "cs-fy2026-results", "cs-q1fy27-outlook"],
  },
  sellingPlaybook: {
    frameIntro: "CrowdStrikeの売り方は「侵入から検知までの時間」を可視化することが起点。EDR単体からモジュール拡張していく既存の拡張パターンをそのまま提案の型にする。",
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "EDR(エンドポイント検知)単体から入り、その後Cloud Security・Identity Protection等へモジュール拡張するのが典型。純新規ARR成長率が前年比32%増と加速しているのはこの拡張の強さを示す。" },
      { title: "製品の成り立ちから見る課題", body: "CrowdStrikeは従来型アンチウイルスがシグネチャベースで新種の攻撃を検知できないという課題を解消するために、クラウドネイティブ・AI検知のEDRとして生まれた。存在理由は「侵入後の検知・対応速度を上げること」。" },
      { title: "外部環境の要求から見る課題", body: "ランサムウェア・国家関与型攻撃の高度化と、規制強化(インシデント報告義務など)により、経営層がセキュリティ投資の説明責任を負う場面が増えている。" },
    ],
    narrative: [
      { label: "背景", body: "従来型アンチウイルスは既知の攻撃パターンしか検知できず、新種のマルウェアや侵入後の横展開(ラテラルムーブメント)を見逃す。" },
      { label: "課題", body: "侵入に気づくまでの時間(Dwell Time)が長引くほど被害が拡大するが、複数ベンダーのツールを組み合わせても検知・対応が分断されている。" },
      { label: "解決策", body: "Falconプラットフォーム1つでエンドポイント・クラウド・ID保護を統合し、AIによる検知から自動対応までを一気通貫にする。" },
      { label: "選定の理由", body: "従来型ベンダーはシグネチャ検知が中心で後手に回りやすい。CrowdStrikeはARR成長率が前年から加速という実績と、単一エージェント・単一コンソールでのモジュール拡張のしやすさで選ばれている。" },
    ],
    openingHook: "直近のセキュリティインシデントで、侵入から検知までにかかった時間を把握していますか。",
    valueHypothesis: "通期ARR成長ガイダンスが27.7%へ上方修正(前年から加速)という開示を根拠に、検知の速さがそのままインシデント被害額の削減に直結する、という価値仮説を立てる。",
    commonObjection: { objection: "すでにEDR製品を導入済みで切り替えコストが高い", reframe: "全置き換えでなく、まず可視化されていない領域(クラウドワークロードやID)からモジュール追加する入り方を提案し、切り替えコストの議論を避ける。" },
  },
  cultureNotes: {
    organizationReadTitle: "新任APAC統括の『成長最優先』方針が、現場の採用ペースにも波及しうる。",
    hypothesis: {
      title: "JAPAC統括の交代は、日本オフィスの拡大シグナルとして読める。",
      body: "2026年2月に就任したJonathon Dixon氏はCloudflareやVerkadaでAPAC事業を急成長させた実績を持つ人物。『JAPACは重要な成長市場』という本社メッセージと合わせて読むと、日本オフィスの投資が今後強まる可能性がある。ただし、これは経営メッセージからの読み解きであり、具体的な採用計画が公開されているわけではない。",
    },
    careerValue: {
      title: "『EDR/XDR市場のリーダー企業を売った経験』は、セキュリティ業界で強い武器になる。",
      body: "Microsoft・Palo Alto Networks・SentinelOneという強力な競合との比較商談を経験することは、他のセキュリティベンダーへの転職でも即座に評価されやすい。一方、クオータ達成の難易度(後述)を踏まえると、在籍中にどれだけ実際の成果を積めるかが次のキャリアの説得力を左右する。",
      confidence: "中",
    },
  },
  facts: [
    {
      label: "売上(2027年度Q1)",
      value: "$1.39B(約2,182億円)",
      detail: "前年比+26%。サブスクリプション売上は$1.32B、同+26%。1ドル=157円換算。",
      sourceIds: ["cs-q1fy27"],
    },
    {
      label: "ARR(年間経常収益)",
      value: "$55.1億(約8,651億円)",
      detail: "前年比+24%。純新規ARRは$2.56億(前年比+32%)。1ドル=157円換算。",
      sourceIds: ["cs-q1fy27"],
    },
    {
      label: "Non-GAAP EPS",
      value: "$1.10(約173円)",
      detail: "前年同期$0.73から増加(2026年4月期)。1ドル=157円換算。",
      sourceIds: ["cs-q1fy27"],
    },
    {
      label: "ReFlex顧客の動向",
      value: "480社",
      detail: "Flexアカウントの約25%。平均ARR増額率26%、複数回reflexした130社超は平均51%増額。",
      sourceIds: ["cs-q1fy27"],
    },
    {
      label: "グローバル従業員数",
      value: "10,698人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceIds: ["cs-10k"],
    },
    {
      label: "日本法人設立",
      value: "2016年",
      detail: "東京都港区赤坂Bizタワー。2026年2月にJonathon Dixon氏がJAPAC担当VP&Managing Directorに就任。",
      sourceIds: ["cs-japan-company", "cs-dixon-appointment"],
    },
  ],
  hypotheses: [
    {
      topic: "JAPAC LEADERSHIP",
      title: "新任JAPAC統括は『成長請負人』。日本オフィスの拡大投資が今後強まる可能性",
      conclusion: "2026年2月に就任したJonathon Dixon氏は、CloudflareでAPACを最速成長市場に押し上げ、Verkadaでも同地域のGTM戦略を主導した実績を持ちます。本社が『JAPACは重要な成長市場』と位置づけている点と合わせると、日本オフィスへの投資が今後強まる可能性が高いとみます。2026年8月には新規開拓型のCorporate Account Executiveポジションが東京拠点で新たに公開されており、しばらく途絶えていた日本セールスの採用が再開した兆候とみられます。",
      confidence: "中",
      evidence: [
        "Dixon氏はCloudflareでAPAC・日本・中国担当VPとして同地域を最速成長市場に押し上げた実績を持つ",
        "President Michael Sentonas氏が『JAPACは重要な成長市場』と公式にコメント",
        "Dixon氏はAWS・Cisco・IBMで数十億ドル規模の地域事業を統括した経歴を持つ",
        "2026年8月、東京拠点の新規開拓型Corporate Account Executiveポジションが新規公開された(数か月ぶりの日本セールス求人)",
      ],
      counterSignals: [
        "具体的な日本オフィスの採用計画・予算規模は公開されていない",
        "確認できた新規求人は現時点で1件のみで、大規模な採用拡大とまでは言い切れない",
      ],
      interviewQuestions: [
        "Dixon体制になってから、日本オフィスの方針・目標設定で変わった点は具体的に何か",
        "直近半年〜1年で日本チームの採用計画はどうなっているか",
      ],
      sourceIds: ["cs-dixon-appointment", "cs-corporate-ae-job"],
    },
    {
      topic: "QUOTA ATTAINABILITY",
      title: "Account Executiveの達成率は約36%。SDRは約1%と職種による差が非常に大きい",
      conclusion: "RepVueの集計ではAccount Executiveの達成率が約36%、Sales Managerが約42%です。一方でSales Development Representativeは約1%と極端に低く、エンタープライズ中心の企業文化の中でSMB領域が特に苦戦しているという指摘もあります。",
      confidence: "中",
      evidence: [
        "RepVue集計でAccount Executive達成率約36%、Sales Manager約42%、SDR約1%",
        "RepVueのレビューで『エンタープライズ中心の企業のため、SMB部門はクオータ達成とカルチャーの両面で苦戦している』との指摘がある",
        "OpenMoney自己申告データで営業平均年収2,035万円(全社平均1,827万円)と高水準",
      ],
      counterSignals: [
        "RepVueの母数・算出期間は非公開であり、SDRの1%という数値は極端なため単独の判断材料にはしない",
        "高い平均年収は達成後の実支給額を反映している可能性があり、未達成時の実態とは別軸で見る必要がある",
      ],
      interviewQuestions: [
        "自分が応募するポジション(Enterprise/Corporate/SMB)の直近のクオータ達成率(実数)を教えてほしい",
        "SMB領域とEnterprise領域で、カルチャー・支援体制にどのような違いがあるか",
      ],
      sourceIds: ["cs-repvue", "cs-openmoney"],
    },
    {
      topic: "COMPENSATION",
      title: "日本の営業平均年収は外資IT各社の中でも最高水準グループ",
      conclusion: "OpenMoneyの集計では、CrowdStrike Japanの営業平均年収は2,035万円(全社平均1,827万円)で、比較対象となった外資ITベンダーの中でもGoogle Cloud(2,342万円)に次ぐ高水準です。ただしインセンティブ・RSU中心の設計とみられ、達成率次第で実支給額は変動します。",
      confidence: "中",
      evidence: [
        "OpenMoney集計で営業平均年収2,035万円、全社平均1,827万円(36件の投稿)",
        "外資ITベンダー平均年収比較でCrowdStrikeは1,827万円とGoogle Cloud(2,342万円)に次ぐ高さ",
        "OpenMoney口コミで『インセンティブおよびRSU、昇給もあり。ただし日本法人にはルールがある』との言及",
      ],
      counterSignals: [
        "自己申告データであり、グレード・在籍年数・達成率による差が反映されている可能性がある",
        "RepVueのクオータ達成率(AE約36%)を踏まえると、高い平均値は達成できた一部社員に偏っている可能性がある",
      ],
      interviewQuestions: [
        "ベース・インセンティブ・RSUの比率と、未達成時の実支給額の目安を教えてほしい",
        "口コミにある『日本法人特有のルール』とは具体的に何を指すか",
      ],
      sourceIds: ["cs-openmoney", "cs-gaishitenshoku"],
    },
    {
      topic: "PRODUCT MOMENTUM",
      title: "Flex/ReFlex契約モデルが、既存顧客への拡張提案の武器になっている",
      conclusion: "ReFlex(既存Flex契約の再編成による追加購入)を行った顧客は平均26%のARR増額を記録し、複数回reflexした顧客では平均51%の増額に達しています。営業にとっては、新規モジュール販売よりも既存契約の再編成による拡張提案が有力な打ち手になっていると考えられます。",
      confidence: "高",
      evidence: [
        "480社がReFlex(Flexアカウントの約25%)、平均26%のARR増額",
        "130社超が複数回reflexし、平均51%の増額を記録",
        "純新規ARRが前年比+32%で、既存顧客の拡張が成長ドライバーの一つになっている",
      ],
      counterSignals: [
        "Flex/ReFlexモデルの日本市場での普及度・活用状況は公開されていない",
        "ReFlexの評価が営業個人のノルマにどう反映されるかは非公開",
      ],
      interviewQuestions: [
        "Flex/ReFlexは日本の顧客でもどの程度活用されているか",
        "ReFlexによる拡張提案は、自分のクオータにどう計上されるか",
      ],
      sourceIds: ["cs-q1fy27"],
    },
    {
      topic: "MARKET POSITION",
      title: "EDR/XDR市場でMicrosoft・Palo Alto・SentinelOneと拮抗。『軽量エージェント』が差別化の核",
      conclusion: "MITRE ATT&CK評価やGartnerの評価では、CrowdStrike・SentinelOne・Palo Altoが僅差で並ぶとされています。CrowdStrikeの差別化ポイントは単一の軽量エージェントによる迅速な導入で、Microsoft Defenderは既にE5ライセンスを持つ企業にとってコスト面で優位とされます。",
      confidence: "中",
      evidence: [
        "EDR上位5社で2025年の市場売上の約58%を占め、CrowdStrike・Microsoft・SentinelOneがそこに含まれる",
        "CrowdStrikeの単一軽量エージェントは『真の差別化要因』とされ、導入スコープ確定後の展開が比較的速いと評価される",
        "Palo Altoはファイアウォール顧客がネットワークとエンドポイント検知を統合したい場合に選ばれやすいとされる",
      ],
      counterSignals: [
        "Microsoft DefenderはE5ライセンス既契約企業にとってコスト面で優位という評価がある",
        "各社ともCharlotte AI(CrowdStrike)、Purple AI(SentinelOne)などAI機能を急速に強化しており、差別化は流動的",
      ],
      interviewQuestions: [
        "Microsoft Defender・Palo Alto・SentinelOneとの競合案件で、直近の勝率・失注理由の傾向はどうか",
        "日本市場でE5ライセンスを理由に失注するケースはどれくらいあるか",
      ],
      sourceIds: ["cs-competitors-compare"],
    },
  ],
  customerProof: [
    {
      company: "H.I.S.",
      products: "Falcon Platform(EDR / NGAV)",
      outcome: "国内8,000台・海外29拠点の端末にFalconを導入し、セキュリティ対策を大幅強化。検知から過去にさかのぼった調査が容易になった",
      implication: "旅行業界での大規模グローバル展開事例。多拠点企業への提案材料になる。",
      sourceId: "cs-his",
    },
  ],
  externalSignals: [
    {
      label: "日本の給与公開データ",
      value: "営業平均 2,035万円",
      detail: "OpenMoney自己申告データ(21件)。全社平均は1,827万円で、比較対象の外資ITベンダーの中でも上位水準。",
      caveat: "自己申告・達成率による差が反映されている可能性がある。",
      sourceId: "cs-openmoney",
    },
    {
      label: "営業組織の外部評価",
      value: "RepVue AE達成率 約36%",
      detail: "Sales Managerは約42%、SDRは約1%と職種による差が大きい。",
      caveat: "グローバル集計であり日本法人限定ではない。",
      sourceId: "cs-repvue",
    },
  ],
  roleLens: {
    salesMotion: "新規ロゴ獲得に加え、Flex/ReFlex契約の再編成による既存顧客拡張が有力な成長ドライバー。エンタープライズ中心の商談設計。",
    compensation: "日本の営業平均年収2,035万円(OpenMoney)と外資ITの中でも高水準。インセンティブ・RSU中心の設計とみられる。",
    quota: "RepVueの集計ではAE達成率約36%。SMB領域は特に苦戦しているという口コミがある。",
    collaboration: "Sales Engineer・Channel Partnerとの連携が前提。エンタープライズ中心のため、C-level折衝力も求められる。",
  },
  leadership: {
    name: "Jonathon Dixon",
    role: "Vice President & Managing Director, Japan/APAC",
    read: "2026年2月就任。Cloudflare・Verkadaでの豊富なAPAC統括経験を持ち、本社は『JAPACは重要な成長市場』と位置づけています。ただし着任直後のため、具体的な組織拡大・採用計画はまだ公開されておらず、今後の動きを注視する必要があります。",
    sourceId: "cs-dixon-appointment",
  },
  companyStats: {
    globalHeadcount: {
      value: "10,698人",
      detail: "2026年1月31日時点、Form 10-K開示値。",
      sourceId: "cs-10k",
    },
    japanHeadcount: {
      value: "非公開",
      detail: "日本法人の正式な従業員数は公開されていない。",
      sourceId: "cs-japan-company",
    },
    japanOffice: {
      value: "東京都港区赤坂(赤坂Bizタワー)",
      detail: "クラウドストライク合同会社本社。",
      sourceId: "cs-japan-company",
    },
    japanSince: {
      value: "2016年",
      detail: "クラウドストライク合同会社設立。",
      sourceId: "cs-japan-company",
    },
  },
  salesAppeal: {
    intro: "求人票だけでは伝わらない、営業として働く上での具体的な面白さを公開情報から整理しました。",
    points: [
      {
        title: "EDR/XDR市場のトップ3企業として、業界最先端の競合比較商談を経験できる",
        detail: "Microsoft・Palo Alto Networks・SentinelOneという強力な競合との比較商談は、セキュリティ営業としての提案力を鍛える上で最良の環境の一つとされる。",
        sourceIds: ["cs-competitors-compare"],
      },
      {
        title: "Flex/ReFlexモデルによる拡張提案で、既存顧客からの成果を積み上げやすい",
        detail: "複数回reflexした顧客で平均51%のARR増額を記録するなど、既存契約の再編成提案が有力な成果創出の打ち手になっている。",
        sourceIds: ["cs-q1fy27"],
      },
      {
        title: "日本オフィスは新任JAPAC統括のもとで投資拡大が見込まれる局面にある",
        detail: "APAC事業を急成長させた実績を持つリーダーが着任したばかりで、早期に参画すれば拡大期の裁量を得やすい可能性がある。",
        sourceIds: ["cs-dixon-appointment"],
      },
    ],
  },
  interviewPrep: {
    intro: "「なぜCrowdStrikeか」という一般論ではなく、実際に聞かれている質問の型から準備しておきたいポイントです。",
    questions: [
      {
        question: "CrowdStrikeの公式プレゼンテーションスライドを使って、CrowdStrikeを自分の言葉でピッチできるか",
        why: "OpenWorkの採用情報で、実際にこの形式の質問が行われたと報告されている。",
        sourceIds: ["cs-openwork"],
      },
      {
        question: "Microsoft Defender・Palo Alto・SentinelOneとの違いを、自分の担当予定顧客像に当てはめて具体的に説明できるか",
        why: "EDR/XDR市場は上位企業が拮抗しており、競合比較の理解度が定番で問われる。",
        sourceIds: ["cs-competitors-compare"],
      },
      {
        question: "自分が応募するポジション(Enterprise/Corporate/SMB)の直近のクオータ達成率(実数)を逆質問できるか",
        why: "RepVueで職種・セグメントによる達成率の差が大きいと公開されており、入社後のギャップを避けるために確認したい。",
        sourceIds: ["cs-repvue"],
      },
      {
        question: "Flex/ReFlex契約モデルの日本市場での活用状況を理解した上で、拡張提案の考え方を説明できるか",
        why: "既存顧客拡張が成長ドライバーの一つになっており、その理解度が評価されると考えられる。",
        sourceIds: ["cs-q1fy27"],
      },
    ],
  },
  solutions: [
    {
      name: "Falcon Endpoint Protection(EDR/NGAV)",
      valueProp: "単一の軽量エージェントでエンドポイントの検知・防御を行う中核製品。",
      url: "https://www.crowdstrike.com/en-us/platform/endpoint-security/",
      competitors: "Microsoft Defender、SentinelOne、Palo Alto Cortex XDRが主要な競合。",
      differentiation: "単一の軽量エージェントによる迅速な導入が『真の差別化要因』とされる。Microsoft DefenderはE5ライセンス既契約企業にとってコスト面で優位、Palo Altoはファイアウォール顧客への統合提案で強い。",
      retention: "H.I.S.の事例では8,000台規模への導入が公式に紹介されている。ReFlexによる契約拡張が全社的な成長ドライバーの一つ。",
    },
    {
      name: "Falcon Cloud Security",
      valueProp: "クラウドワークロード・コンテナ環境のセキュリティ(CSPM/CWPP)を提供する製品群。",
      url: "https://www.crowdstrike.com/en-us/platform/cloud-security/",
      competitors: "Wiz、Palo Alto Prisma Cloudが主要な競合。",
      differentiation: "281以上の脅威アクター情報と紐づけた検知に強みがあるとされ、既知の攻撃者が悪用する設定不備を優先的に警告できる。Wizは агентless(エージェントレス)なマルチクラウド可視化で先行しているという評価もある。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Falcon Identity Protection",
      valueProp: "Active Directory・クラウドID基盤への不正アクセスを検知・防御する製品。",
      url: "https://www.crowdstrike.com/en-us/platform/identity-protection/",
      competitors: "Microsoft Entra ID Protection、Okta連携ソリューションが主要な競合。",
      differentiation: "エンドポイントのFalconエージェントと同一基盤でID保護を扱える点が強み。Microsoftは自社ID基盤(Entra ID)との統合で優位という評価がある。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Falcon Next-Gen SIEM",
      valueProp: "ログ管理・脅威検知を統合する次世代SIEM製品。",
      url: "https://www.crowdstrike.com/en-us/platform/next-gen-siem/",
      competitors: "Splunk、Microsoft Sentinelが主要な競合。",
      differentiation: "既存のFalconエンドポイントテレメトリと同一基盤でSIEM機能を提供できる点が強み。Splunkは長年のログ管理・コンプライアンス実績で依然として強い。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Charlotte AI",
      valueProp: "生成AIによるセキュリティ運用の自動化・支援を行うAIアシスタント機能。",
      url: "https://www.crowdstrike.com/en-us/platform/charlotte-ai/",
      competitors: "Microsoft Copilot for Security、SentinelOne Purple AI、Palo Alto XSIAM AIが主要な競合。",
      differentiation: "2024年のマーケティングデモ段階から、2025年半ばには実運用レベルのツールへと各社が急速に進化させている領域。CrowdStrikeは自社の脅威インテリジェンスデータを学習基盤とする点を強みとする。",
      retention: "普及率・継続率のデータは非公開。",
    },
    {
      name: "Falcon Flex(柔軟な契約モデル)",
      valueProp: "複数のFalconモジュールを事前予算枠内で柔軟に組み替えられる契約形態。",
      url: "https://www.crowdstrike.com/en-us/falcon-flex/",
      competitors: "他ベンダーの伝統的なライセンス体系(モジュールごとの個別契約)が対比される。",
      differentiation: "ReFlex(契約の再編成)により、追加購入の心理的ハードルを下げる設計になっている。2026年Q1時点で480社がReFlexを実施し、平均26%のARR増額を記録している。",
      retention: "複数回reflexした130社超は平均51%のARR増額を記録しており、契約拡張の主要な仕組みとして機能している。",
    },
  ],
  customerStoriesUrl: "https://www.crowdstrike.com/en-us/resources/customer-stories/",
  fitTags: [
    "セキュリティ領域を極めたい",
    "業界トップ3企業での競合比較提案力を鍛えたい",
    "高OTEで稼ぎたい",
    "既存顧客拡張(アップセル)の実績を作りたい",
    "外資特有の実力主義に挑戦したい",
    "拡大期のJAPAC組織で裁量を持ちたい",
    "AI・脅威インテリジェンス領域に関わりたい",
    "エンタープライズの大型商談経験を積みたい",
  ],
  comparisonMap: [
    { arena: "EDR / XDR", companies: ["Microsoft", "SentinelOne", "Palo Alto Networks"], why: "エンドポイントセキュリティ予算の比較" },
    { arena: "クラウドセキュリティ", companies: ["Wiz", "Palo Alto Networks"], why: "CSPM・CWPP予算の比較" },
    { arena: "SIEM / ログ管理", companies: ["Splunk", "Microsoft"], why: "SIEM・ログ管理予算の比較" },
    { arena: "ID保護", companies: ["Microsoft", "Okta"], why: "ID・アクセス管理予算の比較" },
  ],
  sources: crowdstrikeSources,
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
];

const hubspotIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
];

const oktaIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
    ],
    sourceIds: ["okta-ipo", "okta-auth0-acquisition", "okta-lapsus-breach", "okta-github-breach", "okta-q1fy27-earnings"],
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
];

const zendeskIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
];

const uipathIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
];

const confluentIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
];

const pagerdutyIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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
];

const amplitudeIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-07",
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

const intelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  salesforce: salesforceIntelligence,
  datadog: datadogIntelligence,
  servicenow: servicenowIntelligence,
  snowflake: snowflakeIntelligence,
  mongodb: mongodbIntelligence,
  braze: brazeIntelligence,
  crowdstrike: crowdstrikeIntelligence,
  hubspot: hubspotIntelligence,
  okta: oktaIntelligence,
  zendesk: zendeskIntelligence,
  uipath: uipathIntelligence,
  confluent: confluentIntelligence,
  pagerduty: pagerdutyIntelligence,
  amplitude: amplitudeIntelligence,
};

export function getCompanyPublicIntelligence(slug: string) {
  return intelligenceBySlug[slug];
}

export function getResearchSource(intelligence: CompanyPublicIntelligence, sourceId: string) {
  return intelligence.sources.find((source) => source.id === sourceId);
}
