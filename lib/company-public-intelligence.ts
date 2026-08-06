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

export type CompanyPublicIntelligence = {
  researchedAt: string;
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
];

const salesforceIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-05",
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
    salesMotion: "既存顧客への拡張・cross-sell比重が高い可能性。Core / Specialistで要確認。",
    compensation: "国内上位水準のシグナルはあるが、同一OUの実支給中央値で判断。",
    quota: "ブランドよりterritory qualityが達成を左右する可能性。前任者実績を確認。",
    collaboration: "Core AE、Specialist、SE、SDR、Channel、Partnerを動かす社内営業力が重要。",
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
];

const datadogIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-06",
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
      value: "$1,006M",
      detail: "前年比+32%。",
      sourceIds: ["dd-q1fy26"],
    },
    {
      label: "通期2026年ガイダンス",
      value: "$43.0億〜$43.4億",
      detail: "前年比+25〜27%の成長を見込む(2026年Q1決算時点)。",
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
    salesMotion: "新規ロゴ獲得中心。会社全体ではLand-and-expandで既存顧客への製品拡張(NRR120%台)が成長の柱だが、個人のクオータ配分は要確認。",
    compensation: "口コミでは「ポジションごとにほぼ一律で交渉余地が少ない」という声がある一方、ジュニアでもRSU付与という声も。",
    quota: "セグメントによって前提が異なる。Public Sectorは年間売上目標100万ドル以上・平均ディールサイズ10万ドル以上が明記。市場飽和を指摘する批判的レビューもある。",
    collaboration: "SDR、パートナー、マーケティングとの連携が前提。CTO・エンジニアリング層への技術的な説明力も問われる。",
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
    id: "sn-enterprise-manufacturing-job",
    label: "Enterprise Account Executive, Manufacturing求人",
    url: "https://careers.servicenow.com/jobs/744000058131540/enterprise-account-executive-manufacturing-1/",
    kind: "企業公式",
    scope: "Enterprise AE(製造業)の役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-sr-enterprise-job",
    label: "Sr Enterprise Account Executive求人",
    url: "https://careers.servicenow.com/jobs/744000126215269/sr-enterprise-account-executive/",
    kind: "企業公式",
    scope: "Sr Enterprise AEの役割・要件",
    checkedAt: "2026-08-06",
  },
  {
    id: "sn-services-ae-job",
    label: "Services Account Executive求人",
    url: "https://careers.servicenow.com/jobs/744000088755823/services-account-executive/",
    kind: "企業公式",
    scope: "Services AEの役割・要件",
    checkedAt: "2026-08-06",
  },
];

const servicenowIntelligence: CompanyPublicIntelligence = {
  researchedAt: "2026-08-06",
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
      value: "$3,877M",
      detail: "前年比+24.5%(定額為替ベース+23%)。",
      sourceIds: ["sn-q2fy26"],
    },
    {
      label: "cRPO(残存履行義務)",
      value: "$132.0億",
      detail: "前年比+21%(定額為替ベース+21.5%)、2026年Q2時点。",
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
    salesMotion: "仮想チーム(Solutions Consultant・Success・Partner)を率いるオーケストレーター型営業。新規開拓のEnterprise AEと、既存顧客深耕のServices AEで動きが異なる。",
    compensation: "Enterprise AEの標準クオータは約155万ドル(RepVue)。OTE・Pay Mixの具体的な内訳は非公開。",
    quota: "RepVueの集計ではEnterprise AEの達成率は約47%。ブランド力と現場の達成難易度は別軸で見る必要がある。",
    collaboration: "CFO・CIO・COO・CDOなど複数のC-suiteとの折衝、Solutions Consultant等の専門チームとの連携が前提。",
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

const intelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  salesforce: salesforceIntelligence,
  datadog: datadogIntelligence,
  servicenow: servicenowIntelligence,
};

export function getCompanyPublicIntelligence(slug: string) {
  return intelligenceBySlug[slug];
}

export function getResearchSource(intelligence: CompanyPublicIntelligence, sourceId: string) {
  return intelligence.sources.find((source) => source.id === sourceId);
}
