import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";

const defaultCheckedAt = "2026-08-12";

export type Profile = {
  checkedAt?: string;
  jobConfirmed?: boolean;
  slug: string;
  name: string;
  jobUrl: string;
  officialUrl: string;
  customersUrl: string;
  externalUrl: string;
  financeUrl?: string;
  publicInfo?: { ticker: string; exchange: string; listedSince: string };
  salesSnapshot: string;
  growthSummary: string;
  ipoSummary?: string;
  milestones: Array<{ year: string; label: string; detail: string; source: "company" | "finance" | "job" }>;
  issueLenses: Array<{ title: string; body: string }>;
  narrative: Array<{ label: string; body: string }>;
  openingHook: string;
  valueHypothesis: string;
  objection: string;
  reframe: string;
  facts: Array<{ label: string; value: string; detail: string; source?: "company" | "customers" | "external" | "finance" | "job" }>;
  customers: Array<{ company: string; products: string; outcome: string; implication: string }>;
  externalSignals: Array<{ label: string; value: string; detail: string; caveat: string }>;
  role: string;
  organization: string;
  careerValue: string;
  globalHeadcount: string;
  japanPresence: string;
  japanSince: string;
  solutions: Array<{ name: string; valueProp: string; url: string; competitors: string; differentiation: string }>;
  fitTags: string[];
  comparisons: Array<{ arena: string; companies: string[]; why: string }>;
};

export function buildIntelligence(profile: Profile): CompanyPublicIntelligence {
  const checkedAt = profile.checkedAt ?? defaultCheckedAt;
  const jobConfirmed = profile.jobConfirmed ?? true;
  const sourceId = (suffix: string) => `${profile.slug}-${suffix}`;
  const roleWithoutTerminalPeriod = profile.role.replace(/。$/, "");
  const sources: ResearchSource[] = [
    { id: sourceId("job"), label: jobConfirmed ? `${profile.name} 日本向け営業求人` : `${profile.name} 日本市場展開`, url: profile.jobUrl, kind: "企業公式", scope: jobConfirmed ? "職務・勤務地・採用要件" : "日本進出・現地組織・市場戦略", checkedAt },
    { id: sourceId("company"), label: `${profile.name} 公式情報`, url: profile.officialUrl, kind: "企業公式", scope: "製品・会社概要・事業展開", checkedAt },
    { id: sourceId("customers"), label: `${profile.name} 顧客事例`, url: profile.customersUrl, kind: "企業公式", scope: "導入目的・顧客成果", checkedAt },
    { id: sourceId("external"), label: "日本の外部環境資料", url: profile.externalUrl, kind: "外部集計", scope: "法規制・ガイドライン・市場要請", checkedAt },
    { id: sourceId("finance"), label: `${profile.name} 企業・財務情報`, url: profile.financeUrl ?? profile.officialUrl, kind: profile.publicInfo ? "法定開示" : "企業公式", scope: "成長・資本・企業規模", checkedAt },
  ];
  const marketStatus: CompanyPublicIntelligence["marketStatus"] = profile.publicInfo
    ? {
        isPublic: true,
        ticker: profile.publicInfo.ticker,
        exchange: profile.publicInfo.exchange,
        listedSince: profile.publicInfo.listedSince,
        stockLinkUrl: profile.financeUrl ?? profile.officialUrl,
        growthSummary: profile.growthSummary,
        milestones: profile.milestones.map((item) => ({ ...item, sourceId: sourceId(item.source) })),
        sourceIds: [sourceId("company"), sourceId("finance"), sourceId("job")],
      }
    : {
        isPublic: false,
        growthSummary: profile.growthSummary,
        ipoOutlookSummary: profile.ipoSummary ?? "非公開企業。IPO時期と日本単体の売上は公表されていない。",
        milestones: profile.milestones.map((item) => ({ ...item, sourceId: sourceId(item.source) })),
        sourceIds: [sourceId("company"), sourceId("finance"), sourceId("job")],
      };

  marketStatus.genbaVerdict = {
    headline: "global momentumではなく、日本で再現できる勝ち筋を見極める局面",
    body: `${profile.growthSummary} 一方、日本の顧客基盤、ramped sellerの達成率、案件単価は非公開であり、求人の勢いとterritoryの実現可能性を分けて判断する必要がある。`,
  };
  marketStatus.growthDrivers = [
    { title: "顧客課題の構造変化", body: profile.issueLenses[2].body, sourceId: sourceId("external") },
    { title: "製品の統合価値", body: profile.issueLenses[1].body, sourceId: sourceId("company") },
    { title: "日本GTMへの投資", body: jobConfirmed ? `日本向けに${roleWithoutTerminalPeriod}を採用し、local pipelineと顧客接点を広げる。` : `${roleWithoutTerminalPeriod}。公式発表でlocal組織への投資を確認できる。`, sourceId: sourceId("job") },
  ];
  marketStatus.japanGrowth = {
    headline: jobConfirmed ? "日本営業採用を確認、組織・売上は非公開" : "日本進出とlocal teamを確認、営業求人は未確認",
    narrative: `${profile.japanPresence}。${jobConfirmed ? "公開求人" : "公式の進出発表"}から日本市場への投資は確認できるが、Japan ARR、顧客数、営業人数、達成率は開示されていない。`,
    qualitativeSignals: [
      { label: jobConfirmed ? "営業求人" : "日本市場体制", detail: profile.role, sourceId: sourceId("job") },
      { label: "日本拠点", detail: profile.japanPresence, sourceId: sourceId("company") },
      { label: "顧客価値", detail: profile.valueHypothesis, sourceId: sourceId("customers") },
    ],
    sourceIds: [sourceId("job"), sourceId("company"), sourceId("customers")],
  };
  marketStatus.riskHypotheses = [
    {
      title: "カテゴリ説明だけでは予算化されない",
      body: profile.narrative[1].body,
      confidence: "中",
      evidence: [profile.issueLenses[0].body, profile.objection],
      counterSignal: profile.reframe,
      sourceIds: [sourceId("customers"), sourceId("job")],
    },
    {
      title: "日本territoryの再現性が未開示",
      body: "採用は投資シグナルだが、既存pipeline、partner寄与、quota達成率、営業cycleの公開値は確認できない。",
      confidence: "探索中",
      evidence: [profile.role, profile.japanPresence],
      counterSignal: "公式求人と顧客事例から、日本で売るための製品・支援体制は存在する。",
      sourceIds: [sourceId("job"), sourceId("customers")],
    },
  ];

  return {
    researchedAt: checkedAt,
    salesSnapshot: profile.salesSnapshot,
    marketStatus,
    sellingPlaybook: {
      frameIntro: profile.narrative[1].body,
      issueLenses: profile.issueLenses,
      narrative: profile.narrative,
      openingHook: profile.openingHook,
      valueHypothesis: profile.valueHypothesis,
      commonObjection: { objection: profile.objection, reframe: profile.reframe },
    },
    facts: profile.facts.map(({ source, ...fact }, index) => ({ ...fact, sourceIds: [sourceId(source ?? (index === 5 ? "job" : index < 3 ? "company" : "finance"))] })),
    hypotheses: [
      { topic: "PRODUCT / MARKET", title: "選定条件は機能数ではなく業務変化", conclusion: profile.narrative[3].body, confidence: "中", evidence: [profile.issueLenses[0].body], counterSignals: [profile.objection], interviewQuestions: ["日本で最も再現性のあるuse caseとbuyerは", "直近の競合勝因・敗因は"], sourceIds: [sourceId("company"), sourceId("customers")] },
      { topic: "SALES MOTION", title: jobConfirmed ? "求人が示す日本の営業モデル" : "進出発表が示す日本の営業モデル", conclusion: profile.role, confidence: jobConfirmed ? "高" : "中", evidence: [jobConfirmed ? "公式求人を確認" : "日本進出とlocal teamを公式確認", profile.openingHook], counterSignals: ["inbound・partner・self-sourceの構成は非公開"], interviewQuestions: ["self-sourced pipeline比率は", "SE・CS・partnerの役割分担は"], sourceIds: [sourceId("job")] },
      { topic: "QUOTA ATTAINABILITY", title: "territory設計の確認が先", conclusion: "日本のquota、ACV、cycle、ramped seller達成率は非公開。面接で数値と失注理由を確認する必要がある。", confidence: "探索中", evidence: ["日本向け営業採用を確認"], counterSignals: ["global顧客事例と製品投資は確認できる"], interviewQuestions: ["直近4四半期のramped seller達成率は", "平均ACV・sales cycle・pipeline coverageは"], sourceIds: [sourceId("job"), sourceId("customers")] },
      { topic: "COMPENSATION", title: "報酬とcredit ruleは非公開", conclusion: "日本のbase、OTE、equity、accelerator、ramp保証は求人で確認できない。", confidence: "探索中", evidence: ["求人に給与rangeなし"], counterSignals: [profile.growthSummary], interviewQuestions: ["pay mix、equity、acceleratorは", "renewal・expansion・usageのcredit ruleは"], sourceIds: [sourceId("job"), sourceId("finance")] },
      { topic: "CULTURE / CAREER", title: "日本で型を作る経験", conclusion: profile.careerValue, confidence: "中", evidence: [profile.organization, profile.role], counterSignals: ["日本teamの昇進・離職dataは非公開"], interviewQuestions: ["Japan teamの人数と12カ月の採用計画は", "localで変えられるGTM判断は"], sourceIds: [sourceId("job"), sourceId("company")] },
    ],
    cultureNotes: {
      organizationReadTitle: profile.organization,
      hypothesis: { title: "完成したplaybookの運用より、日本市場で検証する役割。", body: `${profile.role} 求人と製品の成長段階から、自律的なpipeline形成とglobal teamへのfeedbackが評価されると読む。` },
      careerValue: { title: "カテゴリ知識とbusiness case設計を同時に積む。", body: profile.careerValue, confidence: "中" },
    },
    customerProof: profile.customers.map((item) => ({ ...item, sourceId: sourceId("customers") })),
    externalSignals: profile.externalSignals.map((item) => ({ ...item, sourceId: sourceId("external") })),
    roleLens: {
      salesMotion: profile.role,
      compensation: "日本のbase、OTE、equity、acceleratorは非公開。offer前にquotaとcredit ruleを含め確認したい。",
      quota: "quota、ramped seller達成率、ACV、cycle、pipeline coverageは非公開。global成長率で代替評価しない。",
      collaboration: "顧客側のbusiness owner、IT・Security・Finance・Procurementと、社内のSE、CS、Product、Legal、Partnerを案件ごとに束ねる。",
    },
    leadership: { name: "非公開", role: "日本事業・営業責任者", read: "本調査の一次情報では現任責任者とreporting lineを確定できない。面接で日本の意思決定権と支援範囲を確認したい。", sourceId: sourceId("job") },
    companyStats: {
      globalHeadcount: { value: profile.globalHeadcount, detail: "会社公式または公式求人で確認できる範囲。", sourceId: sourceId("finance") },
      japanHeadcount: { value: "非公開", detail: "日本の正確な在籍人数は未開示。" },
      japanOffice: { value: profile.japanPresence, detail: "公式求人・会社情報に基づく。", sourceId: sourceId("job") },
      japanSince: { value: profile.japanSince, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId: sourceId("company") },
    },
    salesAppeal: {
      intro: profile.careerValue,
      points: [
        { title: "経営課題を定量化する", detail: profile.valueHypothesis, sourceIds: [sourceId("customers")] },
        { title: "日本GTMを作る", detail: profile.role, sourceIds: [sourceId("job")] },
        { title: "専門カテゴリを深める", detail: profile.issueLenses[2].body, sourceIds: [sourceId("external"), sourceId("company")] },
      ],
    },
    interviewPrep: {
      intro: "ブランドの勢いと自分が受け取るterritoryを分け、公開されていない運用数値を確認する。",
      questions: [
        { question: "日本のICP、優先use case、直近の競合勝因・敗因は。", why: "product-market fitの具体性を見る。", sourceIds: [sourceId("customers"), sourceId("company")] },
        { question: "ramped sellerの達成率、ACV、cycle、pipeline coverageは。", why: "quotaの実現可能性を見る。", sourceIds: [sourceId("job")] },
        { question: "self-source、marketing、partnerのpipeline構成は。", why: "日々の開拓負荷と支援を測る。", sourceIds: [sourceId("job")] },
        { question: "導入後の価値測定、renewal、expansionを誰が持つか。", why: "受注後の再現性とcreditを確認する。", sourceIds: [sourceId("customers")] },
      ],
    },
    solutions: profile.solutions.map((item) => ({ ...item, retention: "日本の製品別継続率は非公開。" })),
    customerStoriesUrl: profile.customersUrl,
    fitTags: profile.fitTags,
    comparisonMap: profile.comparisons,
    sources,
  };
}

const replitIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "replit", name: "Replit", jobUrl: "https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44", officialUrl: "https://replit.com/enterprise", customersUrl: "https://replit.com/customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://replit.com/about",
  salesSnapshot: "「業務改善のideaがあってもengineering backlogで着手できない課題」を事業責任者へ問う会社。「AI生成codeを野放しにせず権限・data・監査を管理する課題」をIT責任者へ可視化する会社。「prototype止まりでproductionへ運べない課題」をbuildからdeployまで一つへ束ねる会社で、Japan GTMをゼロから作る営業としての面白さがある。",
  growthSummary: "AI Agentによるsoftware creationを個人利用からEnterpriseへ広げ、日本ではFounding Account Executiveを採用する市場立ち上げ局面。", ipoSummary: "非公開企業。IPO計画は未公表で、Enterprise ARRと日本売上も非開示。",
  milestones: [
    { year: "2016", label: "創業", detail: "browser上でcodeを書き実行できる共同開発環境として開始。", source: "company" },
    { year: "2023", label: "AI統合", detail: "生成AIによるcode支援を製品の中核へ拡張。", source: "company" },
    { year: "2024", label: "Replit Agent", detail: "自然言語からapplicationを構築する体験を展開。", source: "company" },
    { year: "2026", label: "Enterprise self-serve", detail: "SSO・SCIMを備えたEnterprise購入をself-serve化。", source: "company" },
    { year: "2026", label: "Japan founding AE", detail: "日本初期のfull-cycle営業を募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Zinusは外注費と開発期間、BatchDataはCPQ等の業務tool不足、Firecrown Mediaはnon-engineerのapplication開発を課題にした。共通点は、中央ITの待ち行列が現場改善の速度を制限すること。" },
    { title: "製品の成り立ちから見る課題", body: "Replitは環境構築なしにbrowserでcodingできる場から始まり、共同開発、hosting、Agentへ拡張した。設計思想はcode補完ではなく、ideaから稼働softwareまでの摩擦を消すこと。" },
    { title: "外部環境の要求から見る課題", body: "生成AIでsoftware作成者が広がる一方、企業にはdata access、approval、audit、securityの説明責任が残る。開発民主化とgovernanceを同時に満たす基盤が投資テーマになる。" },
  ],
  narrative: [
    { label: "背景", body: "各部門がAIでapplicationを作れるようになる一方、engineering backlogとshadow ITが同時に増える。" },
    { label: "課題", body: "ideaがticket待ちで止まるか、管理外のtoolとして作られ、速度・security・保守性のどれかを失う。" },
    { label: "解決策", body: "一部署のworkflowを対象に、build、review、deploy、権限管理を一つの環境で検証する。" },
    { label: "選定の理由", body: "Copilot系、IDE、no-code、外注との比較で、non-engineerからdeveloperまで同じworkspaceでproductionへ運べる条件なら選ばれる。" },
  ],
  openingHook: "改善ideaが出てから社内で使えるapplicationになるまで、何件が何週間backlogに滞留していますか。", valueHypothesis: "pilotで完成までの日数、外注費、engineering ticket、active builder、production化率を測る。", objection: "AI codingはsecurityが怖く、既存IDEで十分。", reframe: "個人のcode生成精度ではなく、誰が何のdataへ接続し、誰が承認し、production後を誰が持つかで比較する。",
  facts: [
    { label: "創業", value: "2016年", detail: "San Francisco発のsoftware creation platform。" }, { label: "製品", value: "Agent / Workspace / Deployments", detail: "ideaから運用までを統合。" }, { label: "Enterprise", value: "SSO・SCIM・RBAC", detail: "企業管理機能を提供。" }, { label: "顧客成果", value: "$140K+削減", detail: "Zinus事例の会社公表値。", source: "customers" }, { label: "開発短縮", value: "50%", detail: "Zinus事例の会社公表値。", source: "customers" }, { label: "日本求人", value: "Founding AE 1件", detail: "Tokyo/Japanの公式求人を確認。" },
  ],
  customers: [
    { company: "Zinus", products: "Replit Agent / Deployments", outcome: "$140K超削減、開発期間50%短縮を公表。", implication: "build-or-buyを財務で比較できる。" }, { company: "BatchData", products: "Replit Agent", outcome: "CPQ prototypeを1時間で作り、年間$62K超の削減を公表。", implication: "business user起点のinternal app。" }, { company: "Firecrown Media", products: "Replit Enterprise", outcome: "non-engineerによるapplication開発と$1.2M削減を紹介。", implication: "全社enablementのbusiness case。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "開発利用にも管理責任", detail: "AI事業者ガイドラインはrisk-based governanceを求める。", caveat: "具体的統制は企業とuse caseで異なる。" }, { label: "software需要", value: "部門開発が拡大", detail: "生成AIで作り手が増え、中央ITの統制設計が重要になる。", caveat: "生産性効果はpilotで測定が必要。" },
  ],
  role: "日本のnew logoをprospectingからdemo、hackathon、security review、close、adoptionまで持つFounding Account Executive。", organization: "高いproduct速度と個人ownershipを前提にするbuild phase。", careerValue: "AI application platform、PLG-to-enterprise、Japan launchを同時に経験できる。", globalHeadcount: "非公開", japanPresence: "Japan remote、将来Tokyo hybridを想定", japanSince: "2026年にFounding AE採用を確認",
  solutions: [
    { name: "Replit Agent", valueProp: "自然言語からapplicationを設計・実装。", url: "https://replit.com/ai", competitors: "Lovable、Cursor、GitHub Copilot。", differentiation: "browser上でbuildからdeployまで完結。" }, { name: "Replit Enterprise", valueProp: "組織のAI開発をSSO・SCIM・権限で管理。", url: "https://replit.com/enterprise", competitors: "GitHub Enterprise、cloud IDE。", differentiation: "developer以外のbuilderも同じgovernanceへ載せる。" }, { name: "Deployments", valueProp: "作成したappをproductionへ公開・運用。", url: "https://replit.com/products/deployments", competitors: "Vercel、Render、cloud PaaS。", differentiation: "workspaceとhostingが一続き。" },
  ],
  fitTags: ["Founding AE", "AI", "Developer Tools", "PLG", "Enterprise", "Japan launch", "full-cycle", "高agency"], comparisons: [
    { arena: "AI coding", companies: ["Replit", "Cursor", "GitHub Copilot"], why: "利用者、build範囲、governanceの比較" }, { arena: "no-code", companies: ["Replit", "Microsoft Power Apps", "Bubble"], why: "自由度と運用統制の比較" }, { arena: "deployment", companies: ["Replit", "Vercel", "cloud PaaS"], why: "ideaからproductionまでの摩擦比較" },
  ],
});

const grafanaLabsIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "grafana-labs", name: "Grafana Labs", jobUrl: "https://job-boards.greenhouse.io/grafanalabs/jobs/6092347004", officialUrl: "https://grafana.com/about/", customersUrl: "https://grafana.com/success/", externalUrl: "https://www.digital.go.jp/resources/standard_guidelines", financeUrl: "https://grafana.com/about/press/",
  salesSnapshot: "「監視toolごとにdataと担当が分かれ障害原因へ辿り着けない課題」をIT責任者へ問う会社。「observability costがdata量とともに予測不能になる課題」をplatform責任者へ可視化する会社。「open sourceは広がったがenterprise運用の責任主体が曖昧な課題」をLGTM stackとmanaged cloudへ束ねる会社で、technical communityをenterprise dealへ変える営業としての面白さがある。",
  growthSummary: "Grafana OSSの広い利用基盤をGrafana Cloudへ転換し、公式求人は35M超のusersと7,000超の顧客を掲げる。日本ではacquisition型Enterprise AEを採用。", ipoSummary: "非公開企業。上場時期と日本ARRは未公表。",
  milestones: [
    { year: "2014", label: "Grafana公開", detail: "dashboard OSSとして利用が拡大。", source: "company" }, { year: "2019", label: "Grafana Labs", detail: "OSSとcommercial offeringを統合する会社へ。", source: "company" }, { year: "2021", label: "LGTM拡張", detail: "Loki・Grafana・Tempo・Mimirでobservability stackを形成。", source: "company" }, { year: "2025", label: "Cloud拡張", detail: "managed observabilityとAI支援を強化。", source: "company" }, { year: "2026", label: "Japan AE採用", detail: "Tokyo remoteのacquisition AEを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公開事例ではBloomberg、Salesforce、TomTom等が、分散serviceの可視化、tool consolidation、developer self-serviceを進める。共通課題はmetric・log・traceが別々で、復旧判断とcost ownershipが遅れること。" },
    { title: "製品の成り立ちから見る課題", body: "Grafanaはdata sourceを置き換えず一つの画面で見るOSSから始まり、logs、traces、metrics、profilesとmanaged cloudへ拡張した。核はvendor lock-inを抑えながら観測の共通言語を作ること。" },
    { title: "外部環境の要求から見る課題", body: "cloud-nativeとAI workloadでsystem dependencyとtelemetry量が増え、障害時にはservice ownerと経営へ迅速な説明が必要。SRE生産性、可用性、observability spendの同時管理が投資テーマになる。" },
  ],
  narrative: [
    { label: "背景", body: "cloud、container、SaaSが増え、複数teamが異なる監視toolとdataを持つ。" }, { label: "課題", body: "障害時のwar roomで同じ事実を見られず、MTTRとtool cost、engineerの認知負荷が膨らむ。" }, { label: "解決策", body: "一つのcritical serviceでmetrics・logs・tracesとon-call workflowを統合し、MTTRとingestion costをbaseline比較する。" }, { label: "選定の理由", body: "Datadog、New Relic、Elastic、自前OSSとの比較で、open standardsと既存data sourceを活かしながらmanaged運用できる条件なら選ばれる。" },
  ],
  openingHook: "重大障害の最初の30分で、何人が何画面を行き来し、原因候補を一つに絞るまで何分かかりますか。", valueHypothesis: "一serviceでMTTD、MTTR、alert noise、tool数、telemetry単価、engineer時間を比較する。", objection: "Grafana OSSを自前運用すれば十分。", reframe: "license費ではなく、upgrade、scale、on-call、security、data retentionを含む運用人件費と復旧速度で比較する。",
  facts: [
    { label: "users", value: "35M+", detail: "公式求人記載。" }, { label: "顧客", value: "7,000+", detail: "公式求人記載。" }, { label: "製品基盤", value: "LGTM", detail: "Loki・Grafana・Tempo・Mimir。" }, { label: "働き方", value: "remote-first", detail: "会社公式の組織形態。" }, { label: "日本拠点", value: "Tokyo/Japan", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Enterprise AE 1件", detail: "acquisition担当を確認。" },
  ],
  customers: [
    { company: "Bloomberg", products: "Grafana Enterprise", outcome: "observabilityの共通dashboardと運用を公式事例で紹介。", implication: "既存data sourceを活かすenterprise標準化。" }, { company: "Salesforce", products: "Grafana", outcome: "大規模systemの可視化事例を公開。", implication: "scaleとdeveloper adoptionを両立。" }, { company: "TomTom", products: "Grafana Cloud", outcome: "managed observabilityへの移行事例を公開。", implication: "自前運用costを比較できる。" },
  ],
  externalSignals: [
    { label: "cloud運用", value: "責任分界が複雑化", detail: "政府cloud guidelineもmonitoringと継続運用を要求。", caveat: "民間企業の要件はindustryごとに異なる。" }, { label: "AI workload", value: "telemetry増加", detail: "GPU・model・applicationを跨ぐ観測が必要になる。", caveat: "AI observabilityのROIは個別検証が必要。" },
  ],
  role: "new logoを自ら開拓し、technical discovery、demo・PoC、procurement、closeまでSEと進めるEnterprise acquisition AE。", organization: "OSS communityとcommercial cloudをつなぐremote-first組織。", careerValue: "observability、open source、cloud consumption、technical value sellingを横断できる。", globalHeadcount: "1,600+", japanPresence: "Tokyo / remote", japanSince: "日本営業採用を継続確認",
  solutions: [
    { name: "Grafana Cloud", valueProp: "metrics・logs・traces・profilesをmanaged提供。", url: "https://grafana.com/products/cloud/", competitors: "Datadog、New Relic、Elastic。", differentiation: "open standardsとLGTM stack。" }, { name: "Grafana Enterprise", valueProp: "self-managed Grafanaへenterprise controlを追加。", url: "https://grafana.com/products/enterprise/", competitors: "自前OSS、Splunk。", differentiation: "OSS利用体験を維持。" }, { name: "Application Observability", valueProp: "application performanceとuser impactを統合。", url: "https://grafana.com/solutions/application-observability/", competitors: "APM各社。", differentiation: "複数signalを一つのworkflowへ接続。" },
  ],
  fitTags: ["Enterprise", "Observability", "OSS", "New Logo", "Remote", "Technical Sale", "Cloud", "SRE"], comparisons: [
    { arena: "Full-stack observability", companies: ["Grafana Labs", "Datadog", "New Relic"], why: "data openness、運用、価格の比較" }, { arena: "Log analytics", companies: ["Grafana Loki", "Elastic", "Splunk"], why: "query、retention、ingestion costの比較" }, { arena: "Self-managed", companies: ["Grafana Enterprise", "Grafana OSS", "managed SaaS"], why: "controlと運用負荷の比較" },
  ],
});

const elasticIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "elastic", name: "Elastic", jobUrl: "https://jobs.elastic.co/jobs/sales/tokyo-japan/mid-market-account-executive/7938834", officialUrl: "https://www.elastic.co/jp/", customersUrl: "https://www.elastic.co/customers/", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://ir.elastic.co/", publicInfo: { ticker: "ESTC", exchange: "NYSE", listedSince: "2018年" },
  salesSnapshot: "「社内dataがsystemごとに散在し必要な答えへ辿り着けない課題」をCIOへ問う会社。「securityとobservabilityが別製品で同じeventを重複保管する課題」をIT責任者へ可視化する会社。「生成AIへ企業固有dataを安全に接続できない課題」をsearchという共通基盤へ束ねる会社で、複数予算を一つのplatform storyにする営業としての面白さがある。",
  growthSummary: "Elasticsearchを核にSearch AI、Observability、Securityを一つのplatformへ広げるNYSE上場企業。日本ではMid-Market AEを採用。",
  milestones: [
    { year: "2012", label: "Elastic創業", detail: "Elasticsearchを中心にcommercial organizationを設立。", source: "company" }, { year: "2018", label: "NYSE上場", detail: "ticker ESTCで上場。", source: "finance" }, { year: "2021", label: "cloud重視", detail: "managed Elastic Cloudを成長軸へ。", source: "finance" }, { year: "2024", label: "Search AI", detail: "vector searchと生成AI use caseを前面化。", source: "company" }, { year: "2026", label: "Japan Mid-Market採用", detail: "東京でnew business・expansion AEを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Cisco、BMW、Booking.com等の公開事例は、検索体験、脅威検知、application可視化をそれぞれ改善する。共通課題は大量のmachine・business dataから必要なsignalをreal timeで取り出せないこと。" },
    { title: "製品の成り立ちから見る課題", body: "分散検索engine Elasticsearchから始まり、ingest、visualization、security、observability、vector searchへ拡張した。核はdataを移すことより、同じindexとqueryで答えを得ること。" },
    { title: "外部環境の要求から見る課題", body: "生成AI、cloud-native、cyber threatで非構造dataとmachine dataが増える一方、企業にはaccess controlと説明可能性が必要。検索精度、latency、data cost、governanceを同時に扱う要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "application log、security event、document、customer dataが別systemに蓄積する。" }, { label: "課題", body: "検索・監視・調査がtool別になり、回答時間、storage cost、security responseが悪化する。" }, { label: "解決策", body: "一use caseでdata source、query精度、response time、operator工数、costをbaseline比較する。" }, { label: "選定の理由", body: "Splunk、Datadog、OpenSearch、vector databaseとの比較で、search・security・observabilityを同一data platformへ寄せる条件なら選ばれる。" },
  ],
  openingHook: "顧客や担当者が必要な答えを探すとき、何system、何query、何分を費やしていますか。", valueHypothesis: "一workflowで検索成功率、MTTR、analyst工数、data retention cost、AI回答精度を測る。", objection: "OpenSearchや既存monitoringで足りる。", reframe: "licenseだけでなく、運用skill、upgrade、検索品質、security、複数use caseのdata重複を含む総costで比較する。",
  facts: [
    { label: "上場", value: "NYSE: ESTC", detail: "2018年上場。" }, { label: "利用", value: "Fortune 500の50%超", detail: "公式求人記載。" }, { label: "主要領域", value: "Search / Observability / Security", detail: "同一platformで提供。" }, { label: "deployment", value: "Cloud / self-managed", detail: "複数形態を提供。" }, { label: "日本拠点", value: "東京", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Mid-Market AE 1件", detail: "公式Careerで確認。" },
  ],
  customers: [
    { company: "Cisco", products: "Elasticsearch", outcome: "enterprise search・data活用の事例を公開。", implication: "大量dataの回答速度で売る。" }, { company: "BMW", products: "Elastic Stack", outcome: "connected serviceのdata活用を紹介。", implication: "製造・mobilityの横断data。" }, { company: "Booking.com", products: "Elastic", outcome: "大規模search・observability事例を公開。", implication: "scaleとreliabilityが選定軸。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "RAG dataにも管理要求", detail: "AI利用ではdataの適法性・security・説明責任が必要。", caveat: "技術導入だけでgovernanceは完結しない。" }, { label: "cyber resilience", value: "迅速な検知・説明", detail: "event dataを横断してincidentを調査する要求が高まる。", caveat: "業界規制とdata retention要件は個別確認。" },
  ],
  role: "Mid-Marketのnew logoとexpansionを担当し、technical discovery、PoC、partner、commercial closeをfull-cycleで進めるAE。", organization: "distributed cultureとopen source heritageを持つpublic SaaS組織。", careerValue: "search、security、observability、AIを複数buyerへ売るplatform saleを積める。", globalHeadcount: "非公開", japanPresence: "東京 / distributed", japanSince: "日本法人・東京拠点を展開",
  solutions: [
    { name: "Elasticsearch", valueProp: "全文・vector・hybrid searchで大量dataから回答。", url: "https://www.elastic.co/elasticsearch", competitors: "OpenSearch、Solr、vector DB。", differentiation: "成熟したdistributed searchと幅広いecosystem。" }, { name: "Elastic Observability", valueProp: "logs・metrics・traces・APMを統合。", url: "https://www.elastic.co/observability", competitors: "Datadog、Grafana、New Relic。", differentiation: "search platformとdata control。" }, { name: "Elastic Security", valueProp: "SIEM・endpoint・cloud securityを分析。", url: "https://www.elastic.co/security", competitors: "Splunk、Microsoft Sentinel、CrowdStrike。", differentiation: "同じsearch基盤でinvestigation。" },
  ],
  fitTags: ["Mid-Market", "Search AI", "Observability", "Security", "Open Source", "Platform Sale", "Technical", "Public SaaS"], comparisons: [
    { arena: "Search AI", companies: ["Elastic", "OpenSearch", "Pinecone"], why: "検索品質、運用、vectorの比較" }, { arena: "Observability", companies: ["Elastic", "Datadog", "Grafana Labs"], why: "data controlとTCOの比較" }, { arena: "SIEM", companies: ["Elastic", "Splunk", "Microsoft Sentinel"], why: "検知、調査、retentionの比較" },
  ],
});

const knowBe4Intelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "knowbe4", name: "KnowBe4", jobUrl: "https://job-boards.greenhouse.io/knowbe4/jobs/7089100002", officialUrl: "https://www.knowbe4.com/", customersUrl: "https://www.knowbe4.com/customer-stories", externalUrl: "https://www.nisc.go.jp/policy/group/general/niscrm.html", financeUrl: "https://www.knowbe4.com/press",
  salesSnapshot: "「security研修を受けてもphishing行動が変わらない課題」をCISOへ問う会社。「人を原因として責めるだけでriskを測定できない課題」を経営へ可視化する会社。「生成AIでsocial engineeringが高度化する課題」をsimulation・training・risk scoreへ束ねる会社で、技術ではなく行動変容を売る営業としての面白さがある。",
  growthSummary: "70,000超の組織へsecurity awareness、phishing simulation、human risk managementを提供し、日本でEnterprise new logoと既存拡張を担うAEを採用。", ipoSummary: "Vista Equity Partnersによる非公開化後の企業。日本売上とIPO再計画は未公表。",
  milestones: [
    { year: "2010", label: "創業", detail: "security awareness trainingに特化して創業。", source: "company" }, { year: "2021", label: "NASDAQ上場", detail: "KNBEとして上場。", source: "finance" }, { year: "2023", label: "非公開化", detail: "Vista Equity Partners傘下へ。", source: "finance" }, { year: "2025", label: "Human Risk Management", detail: "trainingから行動risk platformへ拡張。", source: "company" }, { year: "2026", label: "Japan Enterprise AE", detail: "東京でnew logo・cross-sell担当を募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Whitbread、Listrak等の事例は、phishing報告、mail triage、継続教育を改善する。共通課題は年一回の研修では実際の攻撃行動と組織riskを変えられないこと。" },
    { title: "製品の成り立ちから見る課題", body: "KnowBe4はsocial engineering被害を減らすための模擬phishingと教育から始まり、reporting、email defense、AI agent riskへ拡張した。核は人の行動を測定可能なcontrolに変えること。" },
    { title: "外部環境の要求から見る課題", body: "生成AIで攻撃文面と偽装が高度化し、経営には人的riskを含むcyber governanceの説明責任がある。受講率ではなくreporting率、failure率、対応時間を改善する要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "email、collaboration、AI agentを介したsocial engineeringが日常業務へ入り込む。" }, { label: "課題", body: "研修完了率だけでは実被害riskを説明できず、SOCは大量の不審mail処理に追われる。" }, { label: "解決策", body: "対象部門でbaseline simulationを行い、failure・reporting・triage時間を継続測定する。" }, { label: "選定の理由", body: "Microsoft、Proofpoint、教育content各社との比較で、training・simulation・human risk・email workflowを一つにする条件なら選ばれる。" },
  ],
  openingHook: "全社員が研修を完了した翌月、実際のphishingに何人が反応し、何分でSOCへ届きましたか。", valueHypothesis: "phish-prone percentage、reporting率、triage時間、repeat offender、incident件数を測る。", objection: "年次研修とMicrosoftの機能で十分。", reframe: "受講の有無ではなく、実際の行動riskと報告・対応workflowが継続的に改善したかで比較する。",
  facts: [
    { label: "顧客", value: "70,000+組織", detail: "公式求人記載。" }, { label: "data", value: "15年の行動data", detail: "公式求人記載。" }, { label: "platform", value: "Human Risk Management", detail: "人とAI agentを対象。" }, { label: "所有", value: "Vista傘下", detail: "2023年に非公開化。" }, { label: "日本拠点", value: "東京", detail: "公式location page。" }, { label: "日本求人", value: "Enterprise AE 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "Whitbread", products: "Security Awareness Training", outcome: "hospitality workforceのphishing awareness改善を事例化。", implication: "大規模現場人員への継続教育。" }, { company: "Listrak", products: "PhishER", outcome: "不審mailの報告・triage workflowを事例化。", implication: "SOC工数を価値指標にできる。" }, { company: "公開顧客事例群", products: "KnowBe4 Platform", outcome: "教育、simulation、reportingの継続運用を紹介。", implication: "受講率からbehavior riskへ論点を移す。" },
  ],
  externalSignals: [
    { label: "cyber governance", value: "経営責任が拡大", detail: "NISC資料は組織的なrisk managementと訓練を重視。", caveat: "法的義務は業種・規模で異なる。" }, { label: "生成AI攻撃", value: "social engineering高度化", detail: "自然な文面・音声・偽装で人の判断を狙う攻撃が増える。", caveat: "具体的被害率は顧客ごとに測定が必要。" },
  ],
  role: "Enterprise新規獲得と既存cross-sellを月次quotaで追い、outbound、demo、channel、renewal expansionを持つRegional AE。", organization: "高頻度のactivityと数値disciplineを重視するsecurity sales組織。", careerValue: "CISO商談、human risk、channel、high-velocity enterprise saleを積める。", globalHeadcount: "非公開", japanPresence: "東京オフィス", japanSince: "Tokyo locationを公式展開",
  solutions: [
    { name: "Security Awareness Training", valueProp: "role別教育と模擬phishingで行動を変える。", url: "https://www.knowbe4.com/products/security-awareness-training", competitors: "Proofpoint、Microsoft、Cofense。", differentiation: "training contentとsimulation dataの規模。" }, { name: "PhishER", valueProp: "社員報告mailをtriage・response。", url: "https://www.knowbe4.com/products/phisher", competitors: "SOAR、email security各社。", differentiation: "employee reportingをresponse workflowへ接続。" }, { name: "HRM+", valueProp: "人のriskをscore化しcontrolを最適化。", url: "https://www.knowbe4.com/products", competitors: "security awareness各社。", differentiation: "behavior dataをplatform横断で利用。" },
  ],
  fitTags: ["Enterprise", "Cybersecurity", "Human Risk", "New Logo", "Expansion", "Channel", "CISO", "High Velocity"], comparisons: [
    { arena: "Awareness", companies: ["KnowBe4", "Proofpoint", "Microsoft"], why: "content、simulation、測定の比較" }, { arena: "Human risk", companies: ["KnowBe4", "Cofense", "Hoxhunt"], why: "behavior dataとpersonalization" }, { arena: "Email response", companies: ["PhishER", "SOAR", "managed service"], why: "報告からtriageまでの工数比較" },
  ],
});

// The remaining profiles intentionally keep the same full public-intelligence schema while
// concentrating company-specific research in the problem, evidence, product and role fields.
const deelIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "deel", name: "Deel", jobUrl: "https://jobs.ashbyhq.com/deel/c0af44a5-7e40-4bf3-9d74-6a888ff2b5b9", officialUrl: "https://www.deel.com/", customersUrl: "https://www.deel.com/case-studies/", externalUrl: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/index.html", financeUrl: "https://www.deel.com/blog/category/deel-news/",
  salesSnapshot: "「海外採用のたびに現地法人・契約・給与を個別設計する課題」を経営へ問う会社。「国別providerで人事dataとpayroll controlが分断する課題」をHR責任者へ可視化する会社。「採用速度と労務complianceを同時に守れない課題」をEOR・Payroll・HRISへ束ねる会社で、組織成長そのものを売る営業としての面白さがある。",
  growthSummary: "150超の国をcoverするglobal payroll・HR platformへ拡張し、40,000超の顧客と$1B ARRを公式求人で掲げる。日本ではoutbound SDRを採用。", ipoSummary: "非公開企業。公式求人は$17.3B valuationと$1B ARRを記載するが、IPO時期は未公表。",
  milestones: [
    { year: "2019", label: "創業", detail: "global contractor hiring・paymentから開始。", source: "company" }, { year: "2020", label: "EOR拡張", detail: "法人なしで雇用するinfrastructureへ。", source: "company" }, { year: "2023", label: "HR platform", detail: "Payroll、HRIS、IT、Immigrationへ拡張。", source: "company" }, { year: "2025", label: "$1B ARR", detail: "公式求人で到達を記載。", source: "finance" }, { year: "2026", label: "Japan SDR採用", detail: "東京優先のremote営業開拓を募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Infostellarは海外人材雇用、FICOはglobal payroll統合、ElevenLabsは分散team拡大を進めた。共通課題は国が増えるたび契約、給与、benefit、device、dataが別運用になること。" },
    { title: "製品の成り立ちから見る課題", body: "Deelは海外contractor契約と支払の摩擦から始まり、EOR、owned payroll、HRIS、IT、immigrationへ拡張した。核は国別vendorを足すのでなくglobal workforceを一つのsystemで動かすこと。" },
    { title: "外部環境の要求から見る課題", body: "remote hiringが国境を越える一方、雇用区分、税、社会保険、個人data、sanction screeningの責任は残る。採用速度とlocal complianceを同時に証明する要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "専門人材を海外で採用する企業が増え、worker typeと雇用国が複雑になる。" }, { label: "課題", body: "国別vendor、spreadsheet、manual payrollでonboarding遅延、compliance risk、finance reconciliationが増える。" }, { label: "解決策", body: "一つの採用国とworker typeで契約、onboarding、payroll、support工数をbaseline比較する。" }, { label: "選定の理由", body: "Remote、Rippling、Papaya Global、現地社労士との比較で、owned infrastructureとHR・Payroll・ITの統合範囲が合う場合に選ばれる。" },
  ],
  openingHook: "新しい国で一人を採用すると決めてから、合法的に働き初回給与を受け取るまで何日・何provider必要ですか。", valueHypothesis: "time-to-hire、payroll error、vendor数、HR工数、onboarding日数、compliance incidentを測る。", objection: "現地社労士と既存HRISで足りる。", reframe: "月額単価だけでなく、国追加のlead time、provider管理、error correction、worker supportを含む総運用costで比較する。",
  facts: [
    { label: "coverage", value: "150+ countries", detail: "公式顧客ページ。" }, { label: "顧客", value: "40,000+", detail: "公式顧客ページ。" }, { label: "payroll処理", value: "$20B+", detail: "会社公式。" }, { label: "ARR", value: "$1B", detail: "公式求人記載。" }, { label: "valuation", value: "$17.3B", detail: "公式求人記載。" }, { label: "日本求人", value: "SDR 1件", detail: "Japan remoteを確認。" },
  ],
  customers: [
    { company: "Infostellar", products: "EOR", outcome: "海外現地人材の雇用を日本語事例で紹介。", implication: "日本企業のglobal hiring入口。" }, { company: "FICO", products: "Global Payroll", outcome: "複数国payrollの統合を公式事例で紹介。", implication: "CFO・HRIS両部門を巻き込む。" }, { company: "ElevenLabs", products: "Deel platform", outcome: "global workforce拡大を公式事例で紹介。", implication: "high-growth techの速度を売る。" },
  ],
  externalSignals: [
    { label: "cross-border employment", value: "国別法令適用", detail: "雇用契約、給与、社会保険は勤務地の制度に従う。", caveat: "EOR利用で雇用主責任が全て消えるわけではない。" }, { label: "personal data", value: "越境移転管理", detail: "employee dataの委託・移転には管理が必要。", caveat: "対象国とdata flowで要件が変わる。" },
  ],
  role: "JapanのSMB・Mid-Market・Enterpriseへoutboundで接点を作り、課題をqualifyしてAEのdemoとpipelineへ接続するSDR。", organization: "100カ国超に分散し、speedとownershipを強く求めるremote組織。", careerValue: "global payroll、HR tech、complianceとmulti-segment outboundを身につけられる。", globalHeadcount: "7,000", japanPresence: "Japan remote、Tokyo優先", japanSince: "日本市場向け営業を展開",
  solutions: [
    { name: "Deel EOR", valueProp: "現地法人なしで海外人材を雇用。", url: "https://www.deel.com/employees/", competitors: "Remote、Papaya Global。", differentiation: "country coverageとowned infrastructure。" }, { name: "Global Payroll", valueProp: "複数国payrollを一つのcontrolへ統合。", url: "https://www.deel.com/global-payroll/", competitors: "ADP、CloudPay、local vendors。", differentiation: "HRIS・EORとの連携。" }, { name: "Deel HR", valueProp: "worker data、onboarding、performanceを管理。", url: "https://www.deel.com/hr/", competitors: "Rippling、Workday、BambooHR。", differentiation: "global worker typeを共通管理。" },
  ],
  fitTags: ["SDR", "HR Tech", "Global Payroll", "FinTech", "Remote", "Outbound", "SMB-to-Enterprise", "High Growth"], comparisons: [
    { arena: "EOR", companies: ["Deel", "Remote", "Papaya Global"], why: "country coverage、ownership、support" }, { arena: "Global payroll", companies: ["Deel", "ADP", "CloudPay"], why: "統合範囲と運用責任" }, { arena: "HR platform", companies: ["Deel", "Rippling", "Workday"], why: "global-firstとsuite breadth" },
  ],
});

const cohereIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "cohere", name: "Cohere", jobUrl: "https://jobs.ashbyhq.com/cohere/85e808ab-ee45-4944-bedc-832bf933d0b6", officialUrl: "https://cohere.com/", customersUrl: "https://cohere.com/customer-stories", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://cohere.com/about",
  salesSnapshot: "「生成AIのPoCがdata securityと精度要件を越えられない課題」をCIOへ問う会社。「汎用modelを導入しても業務dataへ安全に接続できない課題」をAI責任者へ可視化する会社。「model性能だけでなくprivate deployment・RAG・運用まで必要な課題」をenterprise AI stackへ束ねる会社で、frontier AIを経営成果へ翻訳する営業としての面白さがある。",
  growthSummary: "security-first enterprise AIを掲げ、foundation model、RAG、agent platformを提供。東京remoteのAccount Executiveを採用し日本GTMを拡張。", ipoSummary: "非公開企業。資金調達は公表されるがIPO時期、日本ARR、model別売上は未公表。",
  milestones: [
    { year: "2019", label: "創業", detail: "enterprise向けlanguage model companyとしてTorontoで創業。", source: "company" }, { year: "2021", label: "API提供", detail: "Command・Embed系modelを企業へ展開。", source: "company" }, { year: "2023", label: "RAG強化", detail: "enterprise dataを根拠に回答する機能を拡張。", source: "company" }, { year: "2025", label: "North", detail: "agentic workplaceを展開。", source: "company" }, { year: "2026", label: "Japan AE採用", detail: "東京remoteのRevenue roleを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "CoreWeave等の事例は、enterprise knowledgeへgroundedなAIを接続し、supportや業務判断を変える。共通課題は汎用chatではsecurity、data residency、accuracy、workflow integrationを満たせないこと。" },
    { title: "製品の成り立ちから見る課題", body: "Cohereはconsumer chatbotよりenterprise NLPを起点に、Command、Embed、Rerank、Northへ広げた。核は企業dataを外へ持ち出さず、検索と生成を業務systemへ組み込むこと。" },
    { title: "外部環境の要求から見る課題", body: "AI利用拡大とともに企業にはdata governance、human oversight、model risk、著作権、vendor dependencyの説明責任が生じる。PoC速度とproduction controlを両立する基盤が必要になる。" },
  ],
  narrative: [
    { label: "背景", body: "各部門が生成AIを試すが、企業dataと既存workflowへの接続で止まる。" }, { label: "課題", body: "model精度、privacy、latency、cost、権限、evaluationが別論点となりPoCがproductionへ進まない。" }, { label: "解決策", body: "一業務でretrieval、answer quality、human review、latency、unit costを同時に検証する。" }, { label: "選定の理由", body: "OpenAI、Anthropic、Google、open modelsとの比較で、private deployment、multilingual、RAG stack、enterprise supportが必須なら選ばれる。" },
  ],
  openingHook: "生成AI PoCのうち、権限と精度評価を越えてproductionで毎日使われているものは何%ですか。", valueHypothesis: "task completion、answer acceptance、review時間、hallucination、latency、cost per taskを測る。", objection: "既存cloudのmodel catalogで十分。", reframe: "benchmark scoreではなく、企業dataを使う実業務でdeployment、retrieval、security、unit economicsを比較する。",
  facts: [
    { label: "創業", value: "2019年", detail: "Toronto発のenterprise AI企業。" }, { label: "positioning", value: "security-first", detail: "公式求人の表現。" }, { label: "model", value: "Command / Embed / Rerank", detail: "enterprise AI stack。" }, { label: "product", value: "North", detail: "agentic workplace。" }, { label: "日本拠点", value: "Tokyo remote", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Account Executive 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "CoreWeave", products: "Cohere North", outcome: "customer support変革を90日で進めた事例を公開。", implication: "production time-to-valueを売れる。" }, { company: "Oracle", products: "Cohere models", outcome: "cloud・applicationへのmodel提供を公式に紹介。", implication: "ecosystem経由のenterprise adoption。" }, { company: "公開顧客事例群", products: "Command / RAG", outcome: "knowledge retrievalと業務automationを紹介。", implication: "modelではなくworkflow成果へ寄せる。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "risk-based管理", detail: "AI事業者ガイドラインは透明性、安全性、human oversightを求める。", caveat: "任意guidelineと法的義務を区別する必要。" }, { label: "data sovereignty", value: "deployment選択", detail: "機密dataを扱う企業はlocationとaccessを重視。", caveat: "必要条件は業種とsystem構成で異なる。" },
  ],
  role: "Japan enterpriseへnew logoを開拓し、AI use case、technical evaluation、security、commercial negotiationをmulti-threadでcloseするAE。", organization: "researchとenterprise productを近接させるhigh-agency AI組織。", careerValue: "foundation model、RAG、private deployment、AI business caseの最前線を経験できる。", globalHeadcount: "非公開", japanPresence: "Tokyo / remote", japanSince: "2026年にJapan AE採用を確認",
  solutions: [
    { name: "Command", valueProp: "enterprise向け生成・agent model。", url: "https://cohere.com/command", competitors: "OpenAI、Anthropic、Gemini。", differentiation: "enterprise deploymentとRAG重視。" }, { name: "Embed / Rerank", valueProp: "enterprise searchのretrieval品質を高める。", url: "https://cohere.com/embed", competitors: "open embeddings、search vendors。", differentiation: "multilingualとretrieval stack。" }, { name: "North", valueProp: "企業knowledge上でagent workflowを構築。", url: "https://cohere.com/north", competitors: "Microsoft Copilot、Glean、ChatGPT Enterprise。", differentiation: "private enterprise AI stack。" },
  ],
  fitTags: ["Enterprise AI", "Japan AE", "RAG", "Security", "New Logo", "Technical", "Remote", "Builder"], comparisons: [
    { arena: "Foundation models", companies: ["Cohere", "OpenAI", "Anthropic"], why: "model、deployment、enterprise control" }, { arena: "Enterprise search", companies: ["Cohere", "Glean", "Elastic"], why: "retrievalとapplication layer" }, { arena: "Private AI", companies: ["Cohere", "open models", "cloud model services"], why: "controlと運用責任" },
  ],
});

const deepLIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "deepl", name: "DeepL", jobUrl: "https://jobs.ashbyhq.com/DeepL/33708c39-653b-477f-80ae-77036d242087", officialUrl: "https://www.deepl.com/ja/products", customersUrl: "https://www.deepl.com/ja/customer-stories", externalUrl: "https://www.ppc.go.jp/personalinfo/legal/", financeUrl: "https://www.deepl.com/ja/press-room",
  salesSnapshot: "「翻訳量が増えるほど外注costとturnaroundが事業速度を止める課題」を部門責任者へ問う会社。「無料翻訳では機密dataと用語統一を管理できない課題」をITへ可視化する会社。「document・会議・writingの言語摩擦を個別toolで解く課題」をLanguage AIへ束ねる会社で、日本企業のglobal業務を直接変える営業としての面白さがある。",
  growthSummary: "翻訳からWrite、Voice、APIへ拡張し、200,000超のbusiness customersを公式求人で掲げる。日本ではCorporateとEnterprise AEを採用。", ipoSummary: "非公開企業。IPO時期と日本売上は未公表。",
  milestones: [
    { year: "2017", label: "創業", detail: "neural machine translation serviceとして開始。", source: "company" }, { year: "2018", label: "DeepL Pro", detail: "business向けdata protectionと契約を提供。", source: "company" }, { year: "2023", label: "DeepL Write", detail: "文章改善へ拡張。", source: "company" }, { year: "2024", label: "Voice", detail: "real-time音声翻訳へ拡張。", source: "company" }, { year: "2026", label: "Japan sales採用", detail: "Corporate/Enterprise AEを東京で募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式事例はglobal sales、legal document、support、product localizationで翻訳待ちと品質ばらつきを減らす。共通課題は言語業務が専門部署のqueueとなり、現場の意思決定を遅らせること。" },
    { title: "製品の成り立ちから見る課題", body: "DeepLは高品質machine translationから始まり、glossary、document、API、writing、voiceへ拡張した。核は単語置換ではなく、business contextを保ってcommunicationを成立させること。" },
    { title: "外部環境の要求から見る課題", body: "global supply chainと海外人材が増える一方、企業には機密情報、個人data、brand terminology、誤訳riskの管理責任がある。速度と品質・securityを同時に標準化する要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "海外顧客、拠点、vendor、社員とのdocument・meetingが日常化する。" }, { label: "課題", body: "外注待ち、無料toolの利用、用語不統一でrelease、sales、support、契約reviewが遅れる。" }, { label: "解決策", body: "一部門のdocumentとmeetingでturnaround、cost、修正率、利用率、security要件を比較する。" }, { label: "選定の理由", body: "Google、Microsoft、LLM、翻訳会社との比較で、品質、glossary、data protection、document・voice・API統合が必要なら選ばれる。" },
  ],
  openingHook: "海外向けdocument一つが承認されるまで、翻訳待ちと修正往復に何日・何人・何円かかっていますか。", valueHypothesis: "翻訳turnaround、外注費、修正率、用語逸脱、meeting理解度、active usageを測る。", objection: "無料翻訳や汎用LLMで十分。", reframe: "一文の品質でなく、機密data、用語管理、document format、workflow、利用統制まで含めて比較する。",
  facts: [
    { label: "創業", value: "2017年", detail: "Germany発のLanguage AI企業。" }, { label: "business customers", value: "200,000+", detail: "公式求人記載。" }, { label: "markets", value: "228", detail: "公式求人記載。" }, { label: "従業員", value: "1,000+", detail: "公式求人記載。" }, { label: "日本拠点", value: "東京", detail: "公式求人勤務地。" }, { label: "日本求人", value: "AE 2件", detail: "Corporate/Enterpriseを確認。" },
  ],
  customers: [
    { company: "Klarna", products: "DeepL", outcome: "global communicationでのLanguage AI活用を紹介。", implication: "全社seatとworkflow統合。" }, { company: "Mitsubishi Electric", products: "DeepL Pro", outcome: "日本企業のglobal業務活用を公式事例で紹介。", implication: "日本の用語・security要件。" }, { company: "公開顧客事例群", products: "Translator / API", outcome: "legal、support、localizationの利用を公開。", implication: "部門別land-and-expand。" },
  ],
  externalSignals: [
    { label: "個人情報", value: "第三者提供・越境管理", detail: "翻訳対象に個人dataを含む場合は取扱い確認が必要。", caveat: "契約・設定とdata種別で要件が異なる。" }, { label: "global workforce", value: "言語workflow増加", detail: "海外拠点・人材・顧客とのcommunication量が増える。", caveat: "品質効果は言語pairと業務で異なる。" },
  ],
  role: "CorporateまたはEnterprise accountでnew logoとexpansionを持ち、business workflow、security、procurementをmulti-threadでcloseするAE。", organization: "research品質とproduct craftを重視し、office collaborationを求める成長組織。", careerValue: "AI、global productivity、multi-department expansion、Japan enterprise saleを積める。", globalHeadcount: "1,000+", japanPresence: "東京オフィス", japanSince: "日本拠点を公式展開",
  solutions: [
    { name: "DeepL Translator", valueProp: "business文書を高品質に翻訳。", url: "https://www.deepl.com/ja/translator", competitors: "Google Translate、Microsoft Translator。", differentiation: "business contextとglossary。" }, { name: "DeepL Write", valueProp: "文章のtone・style・clarityを改善。", url: "https://www.deepl.com/ja/write", competitors: "Grammarly、LLM。", differentiation: "translationと同じLanguage AI suite。" }, { name: "DeepL Voice / API", valueProp: "meetingとsystem workflowへ翻訳を組み込む。", url: "https://www.deepl.com/ja/products", competitors: "Microsoft、Google、専業通訳。", differentiation: "document・text・voiceの統合。" },
  ],
  fitTags: ["Corporate", "Enterprise", "Language AI", "Japan", "Global Business", "Expansion", "AI", "Value Selling"], comparisons: [
    { arena: "Machine translation", companies: ["DeepL", "Google", "Microsoft"], why: "品質、language coverage、control" }, { arena: "Writing AI", companies: ["DeepL Write", "Grammarly", "LLM"], why: "多言語とbrand tone" }, { arena: "Voice translation", companies: ["DeepL Voice", "meeting platforms", "通訳"], why: "latency、品質、risk" },
  ],
});

const pendoIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "pendo", name: "Pendo", jobUrl: "https://job-boards.greenhouse.io/pendo/jobs/8518472002", officialUrl: "https://www.pendo.io/", customersUrl: "https://www.pendo.io/customers/", externalUrl: "https://www.meti.go.jp/policy/it_policy/investment/dx-chousa/dx-chousa.html", financeUrl: "https://www.pendo.io/news/",
  salesSnapshot: "「製品を出しても利用dataと顧客feedbackが別々で優先順位を決められない課題」をProduct責任者へ問う会社。「新機能が届かずsupportとtraining costが増える課題」をCX責任者へ可視化する会社。「analytics・in-app guide・feedbackを別toolで運用する課題」をproduct experience platformへ束ねる会社で、顧客のdigital adoptionを売上と継続へ結ぶ営業としての面白さがある。",
  growthSummary: "Product Analytics、In-app Guides、Feedback、Roadmapsを統合し、日本で1,500人超の企業を対象にするEnterprise AEを採用。", ipoSummary: "非公開企業。IPO時期、日本ARR、顧客別NRRは未公表。",
  milestones: [
    { year: "2013", label: "創業", detail: "product team向けanalyticsとin-app guidanceから開始。", source: "company" }, { year: "2018", label: "platform拡張", detail: "feedback・roadmap領域へ。", source: "company" }, { year: "2021", label: "Product-led", detail: "digital adoptionとproduct analyticsを統合。", source: "company" }, { year: "2025", label: "AI機能", detail: "product discoveryとanalysisへAIを拡張。", source: "company" }, { year: "2026", label: "Japan Enterprise AE", detail: "東京hybridで採用。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "CallRail、Onapsis、TraceGains等の事例は、feature adoption、beta feedback、in-app guidanceを改善する。共通課題はproduct data、顧客の声、communicationが別々で優先順位と定着を閉loop化できないこと。" },
    { title: "製品の成り立ちから見る課題", body: "Pendoはproduct managerがcode変更を待たずusageを理解し案内できるtoolから始まり、feedback、roadmap、session replay、AIへ拡張した。核はbuild後の顧客行動をproduct decisionへ戻すこと。" },
    { title: "外部環境の要求から見る課題", body: "SaaSとemployee softwareが増え、buyerはlicense数でなくadoption、retention、digital productivityの説明を求める。product、CS、ITが同じ利用dataで投資判断する要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "software featureが増える一方、userは必要な機能を発見せず、product teamは定性feedbackとusageを別管理する。" }, { label: "課題", body: "開発優先順位が声の大きさに寄り、adoption、renewal、support costを改善できない。" }, { label: "解決策", body: "一product journeyでactivation、feature adoption、guide completion、support ticket、retentionを測る。" }, { label: "選定の理由", body: "Amplitude、WalkMe、Appcues、Qualtricsとの比較で、analytics・guidance・feedbackをproduct teamが一つに扱う条件なら選ばれる。" },
  ],
  openingHook: "直近四半期に出した重要機能を、対象userの何%が発見し継続利用していますか。", valueHypothesis: "activation、time-to-value、feature adoption、ticket削減、renewal、expansionをcohortで測る。", objection: "既存analyticsとCS toolで足りる。", reframe: "page viewではなく、誰に何を案内し行動がどう変わりproduct decisionへ戻ったかで比較する。",
  facts: [
    { label: "創業", value: "2013年", detail: "North Carolina発。" }, { label: "platform", value: "Product Experience", detail: "analytics・guide・feedback。" }, { label: "target", value: "1,500+ employees", detail: "Japan求人のEnterprise区分。" }, { label: "sales method", value: "MEDDPICC", detail: "公式求人記載。" }, { label: "日本拠点", value: "東京", detail: "週3日officeのhybrid。" }, { label: "日本求人", value: "Enterprise AE 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "CallRail", products: "In-app Guides", outcome: "in-appでupgrade・cross-sellを促す事例を公開。", implication: "adoptionをrevenueへ接続。" }, { company: "Onapsis", products: "Analytics / Guides", outcome: "beta launchとfeedback改善を紹介。", implication: "release riskを下げる。" }, { company: "TraceGains", products: "Pendo Platform", outcome: "analyticsとguideでuser experience改善を紹介。", implication: "product・CSの共通data。" },
  ],
  externalSignals: [
    { label: "DX投資", value: "成果説明を要求", detail: "DX投資は導入数ではなく業務・顧客成果での評価が必要。", caveat: "Pendo導入だけで成果が保証されるわけではない。" }, { label: "SaaS rationalization", value: "license利用率を重視", detail: "software cost見直しでadoption dataの重要性が増す。", caveat: "市場規模や削減率は顧客ごとに異なる。" },
  ],
  role: "1,500人超のenterpriseへnew logoを作り、MEDDPICCでmulti-year account strategy、executive relationship、complex closeを担うAE。", organization: "product-led rootsとdisciplined enterprise salesを併せ持つhybrid組織。", careerValue: "Product、CX、Digital Adoptionの複数buyerを束ねるenterprise saleを積める。", globalHeadcount: "非公開", japanPresence: "東京オフィス / 週3日hybrid", japanSince: "日本法人・東京拠点を展開",
  solutions: [
    { name: "Product Analytics", valueProp: "user journeyとfeature adoptionを分析。", url: "https://www.pendo.io/product/product-analytics/", competitors: "Amplitude、Mixpanel。", differentiation: "guidance・feedbackと同一platform。" }, { name: "In-app Guides", valueProp: "code負荷を抑えuserへ案内。", url: "https://www.pendo.io/product/in-app-guides/", competitors: "WalkMe、Appcues。", differentiation: "usage dataでtargeting。" }, { name: "Listen / Feedback", valueProp: "定性feedbackをproduct priorityへ変える。", url: "https://www.pendo.io/product/listen/", competitors: "Qualtrics、Productboard。", differentiation: "behavior dataとfeedbackを接続。" },
  ],
  fitTags: ["Enterprise", "Product Analytics", "Digital Adoption", "MEDDPICC", "New Logo", "Hybrid", "Product-led", "CX"], comparisons: [
    { arena: "Product analytics", companies: ["Pendo", "Amplitude", "Mixpanel"], why: "analysis depthとaction layer" }, { arena: "Digital adoption", companies: ["Pendo", "WalkMe", "Whatfix"], why: "employee/customer、guidance、analytics" }, { arena: "Feedback", companies: ["Pendo", "Productboard", "Qualtrics"], why: "定性とbehaviorの統合" },
  ],
});

const dragosIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "dragos", name: "Dragos", jobUrl: "https://job-boards.greenhouse.io/dragos/jobs/5254855008", officialUrl: "https://www.dragos.com/", customersUrl: "https://www.dragos.com/resources/case-studies/", externalUrl: "https://www.meti.go.jp/policy/netsecurity/wg1/keieiguideline.html", financeUrl: "https://www.dragos.com/company/press-releases/",
  salesSnapshot: "「工場・電力・交通のassetを止めずにcyber riskを把握できない課題」をCISOへ問う会社。「IT security toolではOT protocolと現場影響を判断できない課題」を操業責任者へ可視化する会社。「可視化・threat intelligence・incident responseが別契約になる課題」をOT security platformへ束ねる会社で、社会infraの継続性を売る営業としての面白さがある。",
  growthSummary: "ICS/OT cybersecurityに特化し、energy、water、transport、manufacturingを守る。日本で自律的にterritoryとdistribution partnerを作るSenior Enterprise AEを採用。", ipoSummary: "非公開企業。IPO時期、日本売上、顧客数は未公表。",
  milestones: [
    { year: "2016", label: "創業", detail: "industrial control system防御に特化。", source: "company" }, { year: "2020", label: "platform拡張", detail: "asset visibility、detection、responseを統合。", source: "company" }, { year: "2021", label: "大型調達", detail: "global expansionへ投資。", source: "finance" }, { year: "2025", label: "community defense", detail: "threat intelligenceとserviceを拡張。", source: "company" }, { year: "2026", label: "Japan Senior AE", detail: "日本市場leadの営業を募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公開事例はenergy、manufacturing、utilityでasset inventory、threat detection、incident readinessを改善する。共通課題は操業を止められないためscanやpatchをITと同じ方法で進められないこと。" },
    { title: "製品の成り立ちから見る課題", body: "DragosはOT incident responseとindustrial threat intelligenceの現場知見から生まれ、asset visibility、detection、vulnerability、servicesへ拡張した。核はcyber eventをphysical processの影響へ翻訳すること。" },
    { title: "外部環境の要求から見る課題", body: "critical infrastructureへの攻撃とsupply chain接続が増え、経営には操業継続、safety、regulatory reportingの説明責任がある。ITとOTを跨ぐinventoryとresponse planが投資テーマになる。" },
  ],
  narrative: [
    { label: "背景", body: "工場・utilityのlegacy assetがnetwork接続され、vendor remote accessとIT/OT convergenceが進む。" }, { label: "課題", body: "assetが見えず、脆弱性の優先順位も操業影響も判断できないため、攻撃時の停止riskが大きい。" }, { label: "解決策", body: "一siteでpassive inventory、detection coverage、critical vulnerability、response時間を測る。" }, { label: "選定の理由", body: "Claroty、Nozomi Networks、Microsoft Defender for IoTとの比較で、OT-specific intelligenceとincident expertiseが重要なら選ばれる。" },
  ],
  openingHook: "重大incident時に止めてはいけないassetを、owner・firmware・network pathまで何分で一覧化できますか。", valueHypothesis: "asset coverage、unknown asset、critical finding、alert fidelity、response exercise時間、downtime riskを測る。", objection: "既存SIEM・EDRとnetwork監視で足りる。", reframe: "検知件数ではなく、OT protocol理解、safety context、操業を止めない導入、incident時の現場支援で比較する。",
  facts: [
    { label: "創業", value: "2016年", detail: "US発のOT security企業。" }, { label: "focus", value: "ICS / OT", detail: "critical infrastructureに特化。" }, { label: "target", value: "Energy / Water / Transport / Manufacturing", detail: "公式求人記載。" }, { label: "motion", value: "Direct + Distributor", detail: "Japan求人の責任範囲。" }, { label: "日本拠点", value: "Japan remote", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Senior Enterprise AE 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "公開energy事例", products: "Dragos Platform", outcome: "asset visibilityとthreat detection改善を紹介。", implication: "utilityの操業継続を売る。" }, { company: "公開manufacturing事例", products: "Dragos Platform", outcome: "複数siteのOT risk統合を紹介。", implication: "plant横展開のland-and-expand。" }, { company: "公開critical infrastructure事例", products: "Services / Intelligence", outcome: "incident readinessと専門支援を紹介。", implication: "productとexpertiseを一体で売る。" },
  ],
  externalSignals: [
    { label: "経営ガイドライン", value: "supply chainを含むcyber経営", detail: "経産省は経営課題としてのcybersecurityを要求。", caveat: "業界別の強制要件は個別確認。" }, { label: "critical infrastructure", value: "操業継続責任", detail: "physical impactを伴うincidentへの備えが必要。", caveat: "riskはsiteとasset構成で異なる。" },
  ],
  role: "日本territoryの売上責任を持ち、energy・water・transport・manufacturingのenterpriseとdistribution partnerを自律的に開拓するSenior AE。", organization: "mission-drivenなOT専門家とremote-first commercial teamの協働組織。", careerValue: "OT security、critical infrastructure、channel、country buildの希少な経験を積める。", globalHeadcount: "非公開", japanPresence: "Japan / remote", japanSince: "日本市場leadの求人を確認",
  solutions: [
    { name: "Dragos Platform", valueProp: "OT asset可視化、detection、investigation。", url: "https://www.dragos.com/platform/", competitors: "Claroty、Nozomi Networks。", differentiation: "OT threat intelligenceとresponse知見。" }, { name: "WorldView", valueProp: "industrial threat intelligenceを提供。", url: "https://www.dragos.com/platform/worldview/", competitors: "threat intelligence各社。", differentiation: "ICS adversaryと技法に特化。" }, { name: "OT-CERT / Services", valueProp: "incident responseとcommunity支援。", url: "https://www.dragos.com/services/", competitors: "consulting、MSSP。", differentiation: "frontline OT expertise。" },
  ],
  fitTags: ["OT Security", "Critical Infrastructure", "Enterprise", "Country Build", "Channel", "CISO", "Japan Remote", "Mission"], comparisons: [
    { arena: "OT visibility", companies: ["Dragos", "Claroty", "Nozomi Networks"], why: "asset、detection、deployment" }, { arena: "OT threat intel", companies: ["Dragos", "Mandiant", "MSSP"], why: "industrial-specific context" }, { arena: "Incident readiness", companies: ["Dragos", "consulting firms", "internal SOC"], why: "expertiseとresponse speed" },
  ],
});

const anthropicIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "anthropic", name: "Anthropic", jobUrl: "https://job-boards.greenhouse.io/anthropic/jobs/5104755008", officialUrl: "https://www.anthropic.com/enterprise", customersUrl: "https://www.anthropic.com/customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://www.anthropic.com/news",
  salesSnapshot: "「生成AIを基幹業務へ入れたいが安全性と責任分界を説明できない課題」を経営へ問う会社。「汎用chatの試用からsystem・data・agentへ展開できない課題」をCIOへ可視化する会社。「高性能modelとenterprise controlを別々に調達する課題」をClaudeとAPIへ束ねる会社で、frontier AIの採用基準そのものを作る営業としての面白さがある。",
  growthSummary: "Claude model、API、enterprise offeringを急速に拡張し、日本ではtransportation・utilities等の業界別Enterprise AEを東京で採用。", ipoSummary: "非公開企業。資本提携・調達は公表されるがIPO時期、日本ARR、segment別売上は未公表。",
  milestones: [
    { year: "2021", label: "創業", detail: "reliable・interpretable・steerable AIをmissionに設立。", source: "company" }, { year: "2023", label: "Claude提供", detail: "consumerとAPIで展開。", source: "company" }, { year: "2024", label: "Claude Enterprise", detail: "企業向けcontrolと大規模利用を拡張。", source: "company" }, { year: "2025", label: "Claude Code", detail: "agentic coding workflowへ展開。", source: "company" }, { year: "2026", label: "Japan vertical sales", detail: "東京で業界別AEを採用。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "GitLab、Notion、SK Telecom等の公開事例はcoding、knowledge work、customer experienceへClaudeを組み込む。共通課題はAIの試用をsecurity、evaluation、workflow integrationを伴うproductionへ進めること。" },
    { title: "製品の成り立ちから見る課題", body: "AnthropicはAI safety研究から始まり、Constitutional AI、Claude、API、Enterprise、Claude Codeへ拡張した。核はcapabilityの高さだけでなく、企業が制御し信頼して使えるmodelを作ること。" },
    { title: "外部環境の要求から見る課題", body: "frontier AIの能力とagent autonomyが高まるほど、企業にはsecurity、human oversight、model evaluation、data use、critical infrastructureへの影響を説明する責任が生じる。安全性と事業速度の両立が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "各部門が生成AIを試し、coding、support、research、operationへagent利用を広げる。" }, { label: "課題", body: "model選定、data access、evaluation、security、change managementが分断し、PoCが乱立する。" }, { label: "解決策", body: "一業務でquality、time saved、human escalation、risk event、unit costを共通rubricで評価する。" }, { label: "選定の理由", body: "OpenAI、Google、Cohere、open modelsとの比較で、reasoning/coding性能、安全設計、enterprise control、ecosystemが適合する場合に選ばれる。" },
  ],
  openingHook: "生成AIで短縮した時間と、その回答を人が確認・修正・監査する時間を同じ指標で測れていますか。", valueHypothesis: "task success、time saved、acceptance、escalation、risk event、cost per completed taskを測る。", objection: "既存cloud経由のmodelで十分。", reframe: "model名ではなく、対象業務でのquality、latency、control、deployment、commercial terms、provider dependencyを比較する。",
  facts: [
    { label: "創業", value: "2021年", detail: "San Francisco発のAI company。" }, { label: "mission", value: "Reliable / Interpretable / Steerable", detail: "会社公式。" }, { label: "products", value: "Claude / API / Code", detail: "consumerからdeveloperまで。" }, { label: "sales focus", value: "Industry vertical", detail: "Japan求人でtransport・utilitiesを確認。" }, { label: "日本拠点", value: "東京", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Enterprise AE 1件", detail: "vertical roleを確認。" },
  ],
  customers: [
    { company: "GitLab", products: "Claude", outcome: "software developmentへのAI活用を公式事例で紹介。", implication: "developer productivityとquality。" }, { company: "Notion", products: "Claude API", outcome: "knowledge workへのAI組込みを紹介。", implication: "end-user product embedded AI。" }, { company: "SK Telecom", products: "Claude", outcome: "telecom customer experienceでの活用を紹介。", implication: "日本のtransport・utilityにも近いregulated scale。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "安全性・透明性・human oversight", detail: "AI事業者ガイドラインがrisk-based対応を要求。", caveat: "任意guidelineと個別法令を区別。" }, { label: "critical infrastructure", value: "高い説明責任", detail: "transport・utilityでは安全と継続運用への影響が大きい。", caveat: "use caseごとにhuman controlを設計する必要。" },
  ],
  role: "日本のtransportation・utilities大手でnew logoとexpansionを持ち、executive、technical、risk、procurementを束ねるvertical Enterprise AE。", organization: "missionとsafetyを強く掲げながら急拡大するfrontier AI組織。", careerValue: "frontier model、industry transformation、AI governance、C-level saleを同時に経験できる。", globalHeadcount: "非公開", japanPresence: "東京オフィス", japanSince: "日本法人・東京採用を展開",
  solutions: [
    { name: "Claude Enterprise", valueProp: "enterprise knowledge workへClaudeを展開。", url: "https://www.anthropic.com/enterprise", competitors: "ChatGPT Enterprise、Gemini Enterprise。", differentiation: "reasoning、safety、long context。" }, { name: "Claude API", valueProp: "applicationへmodelを組み込む。", url: "https://www.anthropic.com/api", competitors: "OpenAI API、Gemini、Cohere。", differentiation: "model capabilityとdeveloper experience。" }, { name: "Claude Code", valueProp: "software developmentをagenticに支援。", url: "https://www.anthropic.com/claude-code", competitors: "GitHub Copilot、Cursor、Replit。", differentiation: "terminal・repositoryでのagent workflow。" },
  ],
  fitTags: ["Enterprise AI", "Vertical Sales", "Transportation", "Utilities", "C-level", "New Logo", "AI Safety", "Tokyo"], comparisons: [
    { arena: "Frontier models", companies: ["Anthropic", "OpenAI", "Google"], why: "quality、safety、commercial terms" }, { arena: "Enterprise AI", companies: ["Claude", "Microsoft Copilot", "Cohere North"], why: "application layerとcontrol" }, { arena: "AI coding", companies: ["Claude Code", "GitHub Copilot", "Cursor"], why: "agent scopeとdeveloper workflow" },
  ],
});

const fireblocksIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "fireblocks", name: "Fireblocks", jobUrl: "https://job-boards.greenhouse.io/fireblocks/jobs/4440710006", officialUrl: "https://www.fireblocks.com/platforms/", customersUrl: "https://www.fireblocks.com/customers/", externalUrl: "https://www.fsa.go.jp/policy/virtual_currency02/index.html", financeUrl: "https://www.fireblocks.com/newsroom/",
  salesSnapshot: "「digital assetを扱いたいが秘密鍵・送金承認・接続先を統制できない課題」を金融責任者へ問う会社。「取引所・custodian・blockchainごとにoperationが分断する課題」をCOOへ可視化する会社。「新規収益機会と規制・cyber riskを同時に管理する課題」をwallet・network・policy engineへ束ねる会社で、金融infraの新市場を作る営業としての面白さがある。",
  growthSummary: "2,000超のinstitutional customersと$10T超のdigital asset transferを公式求人で掲げ、日本ではBDRとSales Directorを採用。", ipoSummary: "非公開企業。$1B超の調達は公式求人で言及されるがIPO時期と日本売上は未公表。",
  milestones: [
    { year: "2018", label: "創業", detail: "institutional digital asset securityに特化。", source: "company" }, { year: "2019", label: "MPC wallet", detail: "秘密鍵riskを分散するplatformを提供。", source: "company" }, { year: "2021", label: "network拡張", detail: "institutional transfer networkを拡大。", source: "company" }, { year: "2025", label: "$10T transfer", detail: "公式求人で累計規模を記載。", source: "finance" }, { year: "2026", label: "Japan sales採用", detail: "BDRとSales Directorを東京で募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "BNY Mellon、ANZ、Revolut等の公開導入は、digital asset custody、transfer、settlement、新product launchを支える。共通課題はasset移動の速度を上げるほどkey管理、approval、counterparty riskが増えること。" },
    { title: "製品の成り立ちから見る課題", body: "Fireblocksはexchange侵害で見えたhot walletの脆弱性から生まれ、MPC wallet、policy engine、network、tokenization、paymentsへ拡張した。核はdigital asset operationをsecurity controlと一体化すること。" },
    { title: "外部環境の要求から見る課題", body: "stablecoin、tokenized asset、crypto paymentが広がる一方、日本では交換業、custody、AML、travel rule等の規制対応が必要。事業機会とoperational・regulatory riskを同時に管理する要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "金融機関とFinTechがdigital asset商品・決済・tokenizationを検討する。" }, { label: "課題", body: "wallet、key、approval、counterparty、chain接続が個別開発となり、launch速度とcontrolが両立しない。" }, { label: "解決策", body: "一use caseでtransaction policy、approval time、integration工数、failure、compliance reviewを検証する。" }, { label: "選定の理由", body: "自社wallet、BitGo、Copper、custodianとの比較で、MPC、network、policy、API、institutional adoptionが必要なら選ばれる。" },
  ],
  openingHook: "digital assetを一件移動するとき、誰が何systemで承認し、key riskとcounterpartyをどう証明しますか。", valueHypothesis: "launch lead time、approval時間、manual touch、integration数、policy violation、settlement時間を測る。", objection: "custodianや取引所のwalletで足りる。", reframe: "保管単体でなく、複数asset・counterparty・workflowを跨ぐoperation controlとproduct速度で比較する。",
  facts: [
    { label: "顧客", value: "2,000+", detail: "公式求人記載。" }, { label: "transfer", value: "$10T+", detail: "公式求人の累計値。" }, { label: "調達", value: "$1B+", detail: "公式求人記載。" }, { label: "technology", value: "MPC", detail: "key managementの中核。" }, { label: "日本拠点", value: "Tokyo", detail: "公式求人勤務地。" }, { label: "日本求人", value: "2件", detail: "BDR・Sales Directorを確認。" },
  ],
  customers: [
    { company: "BNY Mellon", products: "Fireblocks Platform", outcome: "institutional digital asset infrastructureでの関係を公式紹介。", implication: "global bankのcontrol要件。" }, { company: "ANZ", products: "Tokenization / Network", outcome: "digital asset transactionを公式事例で紹介。", implication: "regulated financeの新product。" }, { company: "Revolut", products: "Wallet Infrastructure", outcome: "digital asset operationでの利用を公式紹介。", implication: "consumer scaleとsecurity。" },
  ],
  externalSignals: [
    { label: "暗号資産規制", value: "登録・AML・custody要件", detail: "金融庁が交換業等の制度と利用者保護を監督。", caveat: "Fireblocks利用で法的義務が代替されるわけではない。" }, { label: "stablecoin", value: "制度下で事業化", detail: "決済・tokenized moneyの検討が拡大。", caveat: "product可否はentity・license・assetで異なる。" },
  ],
  role: "JapanでBDRがoutbound pipelineを作り、Sales Directorが金融・FinTechのterritory、partner、complex closeをleadする二層のGTM。", organization: "cybersecurityと金融productを横断するfast-moving infrastructure組織。", careerValue: "FinTech、crypto infrastructure、regulation、enterprise new-market salesを積める。", globalHeadcount: "非公開", japanPresence: "Tokyo Prefecture", japanSince: "日本向けSales Director/BDRを展開",
  solutions: [
    { name: "Wallets-as-a-Service", valueProp: "digital asset walletをAPIで組み込む。", url: "https://www.fireblocks.com/platforms/wallets-as-a-service/", competitors: "BitGo、Copper、自社開発。", differentiation: "MPC、policy、networkの統合。" }, { name: "Fireblocks Network", valueProp: "institution間のasset transferを接続。", url: "https://www.fireblocks.com/network/", competitors: "custodian network、exchange rails。", differentiation: "counterparty ecosystem。" }, { name: "Payments / Tokenization", valueProp: "stablecoin paymentとtoken発行を支援。", url: "https://www.fireblocks.com/solutions/payments/", competitors: "payment processor、tokenization platforms。", differentiation: "wallet infrastructureと同一control。" },
  ],
  fitTags: ["FinTech", "Digital Assets", "BDR", "Sales Director", "Regulated", "New Market", "Enterprise", "Tokyo"], comparisons: [
    { arena: "Custody infrastructure", companies: ["Fireblocks", "BitGo", "Copper"], why: "key、policy、deployment" }, { arena: "Digital asset network", companies: ["Fireblocks", "custodians", "exchanges"], why: "counterparty reachとcontrol" }, { arena: "Stablecoin payments", companies: ["Fireblocks", "Circle infrastructure", "payment processors"], why: "product速度と規制責任" },
  ],
});

const wasabiIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "wasabi", name: "Wasabi Technologies", jobUrl: "https://job-boards.greenhouse.io/wasabi/jobs/5132017008", officialUrl: "https://wasabi.com/", customersUrl: "https://wasabi.com/customers", externalUrl: "https://www.digital.go.jp/resources/standard_guidelines", financeUrl: "https://wasabi.com/company/newsroom",
  salesSnapshot: "「backup・media・AI dataが増えcloud storage請求を予測できない課題」をIT責任者へ問う会社。「egress feeがdata移行と活用を阻む課題」をCFOへ可視化する会社。「安価な保管を選ぶとpartner・security・復旧設計が別になる課題」をsimpleなobject storageへ束ねる会社で、価格破壊をchannel ecosystemで広げる営業としての面白さがある。",
  growthSummary: "egress・API feeを抑えたhot cloud storageをchannel-firstで展開し、日本ではpartner recruitmentと共同pipelineを担うChannel Account Managerを採用。", ipoSummary: "非公開企業。IPO時期、日本売上、partner別revenueは未公表。",
  milestones: [
    { year: "2015", label: "創業", detail: "simple・predictableなcloud storageを目指し創業。", source: "company" }, { year: "2017", label: "Hot Cloud Storage", detail: "S3-compatible object storageを提供。", source: "company" }, { year: "2021", label: "global regions", detail: "data center footprintを拡張。", source: "company" }, { year: "2024", label: "partner拡張", detail: "backup・media・surveillance ecosystemを強化。", source: "company" }, { year: "2026", label: "Japan channel採用", detail: "Channel Account Managerを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公開事例はbackup、media archive、video surveillance、research dataでstorage costとdata accessを改善する。共通課題はcapacityだけでなくegress・API feeが利用と移行を抑制すること。" },
    { title: "製品の成り立ちから見る課題", body: "Wasabiはcloud storageの複雑なtierと追加feeへの反論として、S3-compatibleなhot storageをsimple pricingで設計した。核はdataを保管するだけでなく必要時に動かせる経済性。" },
    { title: "外部環境の要求から見る課題", body: "ransomware backup、生成AI、video、researchで非構造dataが増え、企業には保管cost、data residency、immutability、復旧可能性の説明責任がある。predictable TCOとpartner実装が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "backup、archive、media、surveillance、AI dataが継続的に増える。" }, { label: "課題", body: "cloud billがcapacity以外のegress・requestで変動し、dataを戻す・分析する判断が遅れる。" }, { label: "解決策", body: "一workloadでstorage、egress、request、retrieval、backup window、restore testを比較する。" }, { label: "選定の理由", body: "AWS S3、Azure Blob、Backblaze、on-prem object storageとの比較で、S3互換、simple pricing、partner solutionが合う場合に選ばれる。" },
  ],
  openingHook: "保管単価ではなく、実際にdataを戻して使った月の1TBあたり総請求額を把握していますか。", valueHypothesis: "effective TB cost、bill variance、backup window、restore time、migration工数、partner marginを測る。", objection: "hyperscalerのbundleとdiscountで十分。", reframe: "list priceでなく、egress・API・minimum retention・network・運用skillを含む実workloadの総costで比較する。",
  facts: [
    { label: "創業", value: "2015年", detail: "Boston発のcloud storage企業。" }, { label: "interface", value: "S3-compatible", detail: "主要backup・applicationと接続。" }, { label: "pricing", value: "egress/API feeなしを訴求", detail: "fair use等の条件は契約確認が必要。" }, { label: "motion", value: "Channel-first", detail: "Japan求人でpartner開拓を重視。" }, { label: "日本拠点", value: "Japan", detail: "Country Manager配下の求人。" }, { label: "日本求人", value: "Channel AM 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "Liverpool Football Club", products: "Wasabi Hot Cloud Storage", outcome: "media data保管の公式事例を公開。", implication: "大容量mediaのaccess cost。" }, { company: "Boston Red Sox", products: "Wasabi", outcome: "video archive活用を公式紹介。", implication: "保管と再利用を両立。" }, { company: "公開backup事例群", products: "Wasabi + Partner", outcome: "backup・ransomware recoveryの導入を紹介。", implication: "partner-led saleの中心。" },
  ],
  externalSignals: [
    { label: "data growth", value: "非構造dataが増加", detail: "AI・video・backupでstorage需要が増える。", caveat: "成長率は顧客workloadで異なる。" }, { label: "resilience", value: "restore可能性を重視", detail: "backupは保存だけでなく復旧testとimmutabilityが必要。", caveat: "storage単体で全resilienceは完結しない。" },
  ],
  role: "Japanのdistributor、reseller、MSP、technology partnerを採用・enableし、共同business planとpartner-led opportunityを作るChannel Account Manager。", organization: "disruptive pricingとpartner leverageを重視するcloud infrastructure組織。", careerValue: "cloud storage、backup、channel development、unit economicsを横断できる。", globalHeadcount: "非公開", japanPresence: "日本 / Country Manager配下", japanSince: "日本channel teamを展開",
  solutions: [
    { name: "Hot Cloud Storage", valueProp: "S3-compatible object storageをsimple pricingで提供。", url: "https://wasabi.com/cloud-storage-pricing", competitors: "AWS S3、Azure Blob、Backblaze。", differentiation: "egress・API feeを抑えたpredictability。" }, { name: "Object Lock", valueProp: "immutable backupで改ざんを防ぐ。", url: "https://wasabi.com/solutions/data-protection", competitors: "hyperscaler object lock、on-prem storage。", differentiation: "backup partner ecosystem。" }, { name: "Wasabi AiR", valueProp: "media dataのsearch・managementを支援。", url: "https://wasabi.com/solutions/media-entertainment", competitors: "media asset management各社。", differentiation: "storageとAI metadataの近接。" },
  ],
  fitTags: ["Channel", "Cloud Storage", "Backup", "Japan", "Partners", "Infrastructure", "TCO", "S3"], comparisons: [
    { arena: "Object storage", companies: ["Wasabi", "AWS S3", "Azure Blob"], why: "effective cost、ecosystem、residency" }, { arena: "Backup target", companies: ["Wasabi", "Backblaze", "on-prem"], why: "immutabilityとrestore" }, { arena: "Channel", companies: ["Wasabi", "hyperscalers", "storage vendors"], why: "partner marginとsales motion" },
  ],
});

const zscalerIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "zscaler", name: "Zscaler", jobUrl: "https://job-boards.greenhouse.io/zscaler/jobs/4771753007", officialUrl: "https://www.zscaler.com/jp", customersUrl: "https://www.zscaler.com/resources/customer-stories", externalUrl: "https://www.nisc.go.jp/policy/group/general/niscrm.html", financeUrl: "https://ir.zscaler.com/", publicInfo: { ticker: "ZS", exchange: "NASDAQ", listedSince: "2018年" },
  salesSnapshot: "「VPNと拠点networkがcloud・remote workの前提に追いつかない課題」をCIOへ問う会社。「user・device・applicationごとのaccess riskを一貫して判断できない課題」をCISOへ可視化する会社。「network変革とsecurity統制が別projectになる課題」をZero Trust Exchangeへ束ねる会社で、経営規模の変革を動かす営業としての面白さがある。",
  growthSummary: "160超のdata centersでZero Trust Exchangeを運営するNASDAQ上場security企業。日本でC-suiteを含むaccount strategyを担うAEを採用。",
  milestones: [
    { year: "2007", label: "創業", detail: "securityをcloud serviceとして提供する構想で創業。", source: "company" }, { year: "2018", label: "NASDAQ上場", detail: "ticker ZSで上場。", source: "finance" }, { year: "2020", label: "ZPA拡大", detail: "private application accessをzero trust化。", source: "company" }, { year: "2024", label: "Zero Trust Everywhere", detail: "user、branch、workload、dataへ範囲拡張。", source: "company" }, { year: "2026", label: "Japan AE採用", detail: "東京hybridでAccount Executiveを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公開事例はglobal企業のVPN削減、cloud access、M&A統合、data protectionを進める。共通課題はnetwork locationを信頼する旧来設計がuser・application・deviceの分散に耐えないこと。" },
    { title: "製品の成り立ちから見る課題", body: "Zscalerはapplianceを各拠点に置くsecurityから脱し、internet経由でpolicyを適用するcloud proxyから始まった。核はnetworkへ入れるのではなく、identityとcontextで一接続ずつ仲介すること。" },
    { title: "外部環境の要求から見る課題", body: "SaaS、remote work、third party、AI agentでaccess pathが増え、経営にはidentity、data、supply chainを含むcyber risk説明が必要。network刷新とcontinuous controlを同時に進める要求が強まる。" },
  ],
  narrative: [
    { label: "背景", body: "user、device、applicationが拠点network外へ移り、VPNとfirewall ruleが増える。" }, { label: "課題", body: "access latency、lateral movement、運用複雑性、data leakageを同時に抑えられない。" }, { label: "解決策", body: "一user groupとapplicationでexperience、attack surface、policy、incident、network costをbaseline比較する。" }, { label: "選定の理由", body: "Palo Alto Networks、Netskope、Cloudflare、Microsoftとの比較で、global cloud scaleとproxy architecture、data protectionが適合する場合に選ばれる。" },
  ],
  openingHook: "VPNで社内networkへ入れた後、誰がどのapplicationとdataへ触れたかを一接続単位で説明できますか。", valueHypothesis: "VPN ticket、login latency、attack surface、policy数、incident、network cost、user experienceを測る。", objection: "firewall・VPNとMicrosoft bundleで十分。", reframe: "製品単価でなく、branch・remote・cloudを跨ぐpolicy運用、user experience、attack surface、incident costで比較する。",
  facts: [
    { label: "上場", value: "NASDAQ: ZS", detail: "2018年上場。" }, { label: "cloud", value: "160+ data centers", detail: "公式求人記載。" }, { label: "platform", value: "Zero Trust Exchange", detail: "user・branch・workloadをcover。" }, { label: "buyer", value: "CIO / CISO", detail: "transformation sale。" }, { label: "日本拠点", value: "東京", detail: "hybrid求人。" }, { label: "日本求人", value: "Account Executive 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "Siemens", products: "ZIA / ZPA", outcome: "global zero trust transformationを公式事例で紹介。", implication: "大規模network変革。" }, { company: "Novartis", products: "Zero Trust Exchange", outcome: "cloud・workforce access変革を紹介。", implication: "regulated enterprise。" }, { company: "公開日本顧客事例群", products: "Zscaler Platform", outcome: "VPN・internet access・data protectionの移行を紹介。", implication: "日本のpartner・architecture要件。" },
  ],
  externalSignals: [
    { label: "zero trust", value: "政府・企業guidelineで採用", detail: "perimeter依存からidentity・context型controlへ移行。", caveat: "zero trustは単一製品で完成しない。" }, { label: "cyber経営", value: "経営層の説明責任", detail: "supply chainとdataを含む継続的risk管理が必要。", caveat: "業界別法令は個別確認。" },
  ],
  role: "Japan accountでC-suite relationship、long-term account plan、partner、SE、multi-year transformation dealを進めるhybrid AE。", organization: "execution、customer obsession、ownershipを強く求めるpublic security組織。", careerValue: "zero trust、network transformation、C-level、partner-led enterprise saleを積める。", globalHeadcount: "非公開", japanPresence: "東京 / hybrid", japanSince: "日本法人・東京拠点を展開",
  solutions: [
    { name: "Zscaler Internet Access", valueProp: "internet・SaaS accessをcloudで保護。", url: "https://www.zscaler.com/jp/products-and-solutions/zscaler-internet-access", competitors: "Netskope、Palo Alto、Cloudflare。", differentiation: "global inline cloud scale。" }, { name: "Zscaler Private Access", valueProp: "private applicationへzero trust access。", url: "https://www.zscaler.com/jp/products-and-solutions/zscaler-private-access", competitors: "VPN、Cloudflare Access、Microsoft。", differentiation: "networkへ接続せずapp単位で仲介。" }, { name: "Data Protection", valueProp: "SaaS・endpoint・AI利用のdata riskを制御。", url: "https://www.zscaler.com/jp/products-and-solutions/data-protection", competitors: "Netskope、Microsoft Purview。", differentiation: "inline access controlと統合。" },
  ],
  fitTags: ["Enterprise", "Zero Trust", "CISO", "CIO", "Network", "Security", "Hybrid", "Public SaaS"], comparisons: [
    { arena: "SSE", companies: ["Zscaler", "Netskope", "Palo Alto Networks"], why: "architecture、data、network" }, { arena: "ZTNA", companies: ["Zscaler", "Cloudflare", "Microsoft"], why: "application accessとidentity" }, { arena: "Network transformation", companies: ["Zscaler", "SD-WAN vendors", "traditional firewall"], why: "TCOとoperating model" },
  ],
});

const cloudflareIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "cloudflare", name: "Cloudflare", jobUrl: "https://job-boards.greenhouse.io/cloudflare/jobs/7421718", officialUrl: "https://www.cloudflare.com/ja-jp/", customersUrl: "https://www.cloudflare.com/case-studies/", externalUrl: "https://www.nisc.go.jp/policy/group/general/niscrm.html", financeUrl: "https://cloudflare.net/", publicInfo: { ticker: "NET", exchange: "NYSE", listedSince: "2019年" },
  salesSnapshot: "「web performance・DDoS・application securityを別vendorで運用する課題」をCIOへ問う会社。「拠点・user・applicationの接続をlegacy networkへ戻す課題」をnetwork責任者へ可視化する会社。「internet edgeとdeveloper platformを別々に設計する課題」をglobal networkへ束ねる会社で、security・network・applicationを横断して売る営業としての面白さがある。",
  growthSummary: "global network上でapplication security、performance、SASE、developer platformを提供するNYSE上場企業。日本でnamed accountとpartnerを担うSenior AEを採用。",
  milestones: [
    { year: "2009", label: "創業", detail: "internet securityとperformanceをglobal networkで提供。", source: "company" }, { year: "2019", label: "NYSE上場", detail: "ticker NETで上場。", source: "finance" }, { year: "2020", label: "Cloudflare One", detail: "zero trust・network serviceへ拡張。", source: "company" }, { year: "2023", label: "Workers AI", detail: "developer・AI platformを拡張。", source: "company" }, { year: "2026", label: "Japan Named AE", detail: "東京でSenior Named AEを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公開事例はL'Oréal、Canva、Shopify等のsecurity、performance、developer scaleを支える。共通課題はinternet-facing serviceのtraffic、attack、latency、deploymentが別team・別vendorに分かれること。" },
    { title: "製品の成り立ちから見る課題", body: "Cloudflareはwebsite ownerがtrafficを経由させるだけでsecurityとspeedを得るnetworkから始まり、DDoS、WAF、DNS、Zero Trust、Workers、AIへ拡張した。核はinternet edgeを共通control planeにすること。" },
    { title: "外部環境の要求から見る課題", body: "DDoS、bot、API abuse、remote access、AI inferenceが増え、企業にはavailability、data protection、software deliveryを同時に守る責任がある。securityとperformanceをtrade-offにしないarchitectureが投資テーマになる。" },
  ],
  narrative: [
    { label: "背景", body: "customer application、employee access、branch、API、AI workloadがinternetへ広がる。" }, { label: "課題", body: "CDN、WAF、DDoS、VPN、DNS、computeが別契約となり、policy、障害対応、costが複雑化する。" }, { label: "解決策", body: "一applicationまたはuser groupでlatency、attack block、availability、tool数、運用時間を比較する。" }, { label: "選定の理由", body: "Akamai、Zscaler、Palo Alto、hyperscaler、Fastlyとの比較で、一つのglobal network上にsecurity・connectivity・computeを載せる条件なら選ばれる。" },
  ],
  openingHook: "一つのcustomer requestがuserからoriginへ届くまで、何vendorのnetworkとpolicyを通り、障害時に誰が責任を持ちますか。", valueHypothesis: "latency、availability、blocked attack、vendor数、change lead time、egress・network costを測る。", objection: "CDN・firewall・cloud providerの標準機能で十分。", reframe: "単機能性能でなく、複数traffic pathのpolicy一貫性、global reach、運用tool、incident responseを含む総体で比較する。",
  facts: [
    { label: "上場", value: "NYSE: NET", detail: "2019年上場。" }, { label: "platform", value: "Global Connectivity Cloud", detail: "security・network・computeを展開。" }, { label: "products", value: "Application / Zero Trust / Network / Developer", detail: "multi-product。" }, { label: "sales", value: "Named Account + Partner", detail: "公式求人記載。" }, { label: "日本拠点", value: "東京", detail: "公式求人勤務地。" }, { label: "日本求人", value: "Senior Named AE 1件", detail: "公式求人を確認。" },
  ],
  customers: [
    { company: "Canva", products: "Application Services", outcome: "global applicationのperformance・securityを公式事例で紹介。", implication: "digital-native scale。" }, { company: "L'Oréal", products: "Cloudflare One", outcome: "global network・security変革を紹介。", implication: "large enterprise transformation。" }, { company: "Shopify", products: "Cloudflare Network", outcome: "internet scaleのperformance・resilienceを紹介。", implication: "mission-critical traffic。" },
  ],
  externalSignals: [
    { label: "cyber resilience", value: "internet service継続", detail: "経営にはattack時のavailabilityとresponse説明が必要。", caveat: "service architecture全体の設計が必要。" }, { label: "AI workload", value: "edge inference需要", detail: "AI applicationでlatency、security、data transferが新たな論点。", caveat: "workload別costを検証する必要。" },
  ],
  role: "Japanのnamed enterpriseを担当し、sales plan、technical value、contract negotiation、partner recruitment、customer satisfactionを持つSenior AE。", organization: "technical curiosityと高速iterationを重視するpublic internet infrastructure組織。", careerValue: "security、network、developer platform、partnerを一つのenterprise storyで売れる。", globalHeadcount: "非公開", japanPresence: "東京オフィス", japanSince: "日本法人・東京拠点を展開",
  solutions: [
    { name: "Application Services", valueProp: "CDN、WAF、DDoS、bot、APIを保護・高速化。", url: "https://www.cloudflare.com/ja-jp/application-services/", competitors: "Akamai、Fastly、hyperscalers。", differentiation: "同一global networkとsimple onboarding。" }, { name: "Cloudflare One", valueProp: "user・branch・applicationをzero trust接続。", url: "https://www.cloudflare.com/ja-jp/cloudflare-one/", competitors: "Zscaler、Netskope、Palo Alto。", differentiation: "internet edgeとnetwork serviceの統合。" }, { name: "Developer Platform", valueProp: "edgeでapplicationとAIを実行。", url: "https://www.cloudflare.com/ja-jp/developer-platform/", competitors: "AWS、Vercel、Fastly。", differentiation: "network・securityとcomputeの近接。" },
  ],
  fitTags: ["Named Accounts", "Security", "Network", "Developer Platform", "Partner", "Enterprise", "Technical", "Tokyo"], comparisons: [
    { arena: "Application edge", companies: ["Cloudflare", "Akamai", "Fastly"], why: "performance、security、platform" }, { arena: "SASE", companies: ["Cloudflare", "Zscaler", "Netskope"], why: "network architectureとpolicy" }, { arena: "Edge compute", companies: ["Cloudflare Workers", "Vercel", "AWS"], why: "developer experienceとglobal runtime" },
  ],
});

const planetIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "planet", name: "Planet", jobUrl: "https://job-boards.greenhouse.io/planetlabs/jobs/7564777", officialUrl: "https://www.planet.com/faqs/", customersUrl: "https://www.planet.com/company/customer-stories/", externalUrl: "https://www.mod.go.jp/j/policy/defense/space_domain_defense/index.html", financeUrl: "https://investors.planet.com/financials/quarterly-results/default.aspx", publicInfo: { ticker: "PL", exchange: "NYSE", listedSince: "2021年" },
  salesSnapshot: "Planetは、防衛・政府・農業・インフラ組織へ、地球全体を高頻度で観測する衛星画像と変化分析を提供し、「広域の変化を単発画像では継続把握できない課題」をmission ownerへ問う会社。顧客が抱える「複数dataの人手照合で意思決定が遅れる課題」と「調達した画像を現場の監視業務へ組み込めない課題」を、衛星群、archive、API、analyticsで可視化する。防衛・情報機関のmissionから入り、継続監視、tasking、AI変化検知、partner連携へ提案を広げられる営業としての面白さがある。",
  growthSummary: "約200機の地球観測衛星とcloud platformを運用し、FY2026売上は3億770万ドル、recurring ACV比率は98%。日本では防衛・情報機関を担当するAccount Executiveを採用し、APACでは日本企業との大型satellite services契約も公表している。",
  milestones: [
    { year: "2010", label: "創業", detail: "NASA出身者3名が、地球の変化を日次で可視化する構想から創業。", source: "company" },
    { year: "2013", label: "初の衛星展開", detail: "小型衛星の継続投入を始め、daily monitoringの基盤を構築。", source: "company" },
    { year: "2021", label: "NYSE上場", detail: "Public Benefit Corporationとしてticker PLで上場。", source: "finance" },
    { year: "2025", label: "日本企業との大型契約", detail: "SKY Perfect JSATとの2.3億ドル規模のsatellite services契約を公表。", source: "finance" },
    { year: "2026", label: "Japan D&I営業採用", detail: "日本の防衛・情報機関を担当するAccount Executiveを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "New South Wales州政府は水移動の時期と量、ブラジル連邦警察は遠隔地の環境犯罪、Humboldt Countyは許可対象の栽培活動を把握するためPlanetの画像を利用した。共通課題は、広い地域の変化を現地調査や単発画像だけでは継続的に把握できず、対応の優先順位を付けられないこと。" },
    { title: "製品の成り立ちから見る課題", body: "Planetは大型衛星を少数運用する発想ではなく、小型衛星群で地球全体を高頻度に撮影する構想から始まった。衛星設計、打上げ、ground station、archive、API、analyticsまで垂直統合した理由は、画像を納品物で終わらせず、変化を継続監視するdata productへ変えるため。" },
    { title: "外部環境の要求から見る課題", body: "日本では宇宙領域防衛指針の策定や民間衛星を活用した情報収集体制の強化が進み、防衛・情報機関には広域を継続監視し、異常を早期に説明できる能力が求められる。監視頻度、解析速度、調達・export control、data governanceを満たせなければ意思決定が事象の後追いになるため、商用衛星dataを運用workflowへ組み込むことが投資テーマになる。" },
  ],
  narrative: [
    { label: "背景", body: "安全保障、災害、森林、海洋、supply chainの変化が速まり、広域を継続的に観測する必要が高まる。" },
    { label: "課題", body: "単発の高解像度画像と人手分析だけでは、平常時のbaselineを作れず、異常の発見、優先順位付け、現場への共有が遅れる。" },
    { label: "解決策", body: "対象地域を定め、PlanetScopeの高頻度monitoring、tasking、archive、change analyticsを既存のGEOINT workflowへ接続し、検知から判断までを測る。" },
    { label: "選定の理由", body: "政府保有衛星、Maxar、Airbus、BlackSky、SAR事業者との比較で、広域の日次級coverage、長期archive、tasking、API、analyticsを同じplatformで扱う条件なら選ばれる。" },
  ],
  openingHook: "重要地域で異常が起きたとき、最初の兆候を何日後に発見し、過去の平常状態と比較して誰へ共有できますか。", valueHypothesis: "観測間隔、異常検知までの時間、analystの手作業、現地調査回数、判断までのlead time、監視対象面積を測る。", objection: "政府保有衛星と必要時の高解像度画像だけで足りる。", reframe: "一枚の解像度ではなく、平常時のbaselineを作る頻度、archive、tasking、analytics、既存systemへの統合、data governanceを含む運用全体で比較する。",
  facts: [
    { label: "創業", value: "2010年", detail: "NASA出身者3名が創業。", source: "company" },
    { label: "衛星群", value: "約200機", detail: "公式FAQの公表値。", source: "company" },
    { label: "上場", value: "NYSE: PL", detail: "2021年上場のPBC。", source: "finance" },
    { label: "FY2026売上", value: "$307.7M", detail: "会社公表値。", source: "finance" },
    { label: "Recurring ACV", value: "98%", detail: "FY2026期末の会社公表値。", source: "finance" },
    { label: "日本求人", value: "D&I AE 1件", detail: "応募期限2026年9月27日の公式求人を確認。", source: "job" },
  ],
  customers: [
    { company: "New South Wales州政府", products: "PlanetScope / Platform", outcome: "衛星画像からwater movementの時期と貯水量変化を推定する活用を公式事例で紹介。", implication: "広域行政では継続観測を判断dataへ変える統合が価値になる。" },
    { company: "ブラジル連邦警察", products: "Planet imagery / change alerts", outcome: "SCCONと連携し、遠隔地の環境犯罪を把握する活用を公式事例で紹介。", implication: "画像販売よりpartner analyticsと捜査workflowへの実装が重要。" },
    { company: "Humboldt County", products: "SkySat imagery", outcome: "許可対象の栽培活動を監視し、complianceと環境影響の把握に活用。", implication: "現地確認の優先順位付けに高頻度taskingを使える。" },
  ],
  externalSignals: [
    { label: "宇宙領域防衛", value: "継続監視と早期把握", detail: "防衛省は2025年に宇宙領域防衛指針を策定し、宇宙利用と情報収集能力の強化を進める。", caveat: "個別調達要件、機密区分、data residency、export controlは案件ごとに異なる。" },
    { label: "官民衛星活用", value: "commercial dataの運用組込み", detail: "政府保有assetだけでなく民間衛星を利用して観測頻度とcoverageを補完する政策方向が確認できる。", caveat: "商用画像だけで全missionを代替できず、sensor fusionとanalyst判断が必要。" },
  ],
  role: "日本のGovernment Intelligence、Defense、National Security機関でpipelineを作り、partner、pre-sales、Customer Successと連携して政府調達・technical validation・契約を進めるD&I Account Executive。", organization: "衛星hardware、data platform、AI analyticsと公共benefit missionを一体で扱い、仮説検証と結果責任を重視する組織。", careerValue: "政府調達、GEOINT、satellite data、AI change detection、partner co-sellを横断する希少なenterprise sales経験を積める。", globalHeadcount: "600人超（公式FAQ）", japanPresence: "Planet Labs Japan KK / Japan remote", japanSince: "日本法人の公式表記を確認、設立年は未確認",
  solutions: [
    { name: "Planet Monitoring", valueProp: "PlanetScopeで広域を高頻度に撮影し、変化のbaselineを作る。", url: "https://www.planet.com/products/satellite-monitoring/", competitors: "Airbus OneAtlas、Maxar、政府保有衛星。", differentiation: "地球全陸域の日次級coverageと長期archive。" },
    { name: "Planet Tasking", valueProp: "高解像度衛星を対象地域へtaskingし、必要な時点の詳細を取得。", url: "https://www.planet.com/products/tasking/", competitors: "Maxar、BlackSky、Airbus。", differentiation: "monitoringで変化を見つけtaskingへ接続できる。" },
    { name: "Planet Insights Platform", valueProp: "imagery、API、analysis-ready data、change analyticsをworkflowへ統合。", url: "https://www.planet.com/products/planet-insights-platform/", competitors: "Esri ecosystem、cloud geospatial platform、内製GEOINT基盤。", differentiation: "自社衛星dataとanalyticsを一つのplatformで運用。" },
  ],
  fitTags: ["Government", "Defense", "GEOINT", "Satellite Data", "Enterprise", "Partner", "Japan Remote", "Public Company"], comparisons: [
    { arena: "Wide-area monitoring", companies: ["Planet", "Airbus", "government constellations"], why: "revisit、coverage、archiveの比較" },
    { arena: "High-resolution tasking", companies: ["Planet", "Maxar", "BlackSky"], why: "resolution、latency、capacityの比較" },
    { arena: "Operational GEOINT", companies: ["Planet", "Esri ecosystem", "internal platforms"], why: "dataから意思決定workflowまでの比較" },
  ],
});

export const waveTwoIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  replit: replitIntelligence,
  "grafana-labs": grafanaLabsIntelligence,
  elastic: elasticIntelligence,
  knowbe4: knowBe4Intelligence,
  deel: deelIntelligence,
  cohere: cohereIntelligence,
  deepl: deepLIntelligence,
  pendo: pendoIntelligence,
  dragos: dragosIntelligence,
  anthropic: anthropicIntelligence,
  fireblocks: fireblocksIntelligence,
  wasabi: wasabiIntelligence,
  zscaler: zscalerIntelligence,
  cloudflare: cloudflareIntelligence,
  planet: planetIntelligence,
};
