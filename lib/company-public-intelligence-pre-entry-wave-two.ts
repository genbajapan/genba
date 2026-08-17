import type { CompanyPublicIntelligence, JapanEntryAssessment, ResearchSource } from "@/lib/company-public-intelligence";

const defaultCheckedAt = "2026-08-12";

type PreEntryProfile = {
  checkedAt?: string;
  slug: string;
  name: string;
  homepage: string;
  growthUrl: string;
  careersUrl: string;
  customersUrl: string;
  trustUrl: string;
  apacUrl: string;
  externalUrl: string;
  linkedinUrl: string;
  salesSnapshot: string;
  growthSummary: string;
  verdict: string;
  entryNarrative: string;
  headcount: string;
  headcountDetail: string;
  apacPresence: string;
  productLanguage: string;
  milestones: Array<{ year: string; label: string; detail: string; source: "company" | "growth" | "apac" }>;
  issueLenses: Array<{ title: string; body: string }>;
  narrative: Array<{ label: string; body: string }>;
  openingHook: string;
  valueHypothesis: string;
  objection: string;
  reframe: string;
  facts: Array<{ label: string; value: string; detail: string; source: "company" | "growth" | "apac" | "careers" | "customers" }>;
  customers: Array<{ company: string; products: string; outcome: string; implication: string }>;
  externalSignals: Array<{ label: string; value: string; detail: string; caveat: string }>;
  entryAssessment: JapanEntryAssessment;
  sourceIds: string[];
  salesMotion: string;
  careerValue: string;
  leader: { name: string; role: string; read: string };
  solutions: Array<{ name: string; valueProp: string; url: string; competitors: string; differentiation: string }>;
  fitTags: string[];
  comparisons: Array<{ arena: string; companies: string[]; why: string }>;
};

export function buildPreEntryIntelligence(profile: PreEntryProfile): CompanyPublicIntelligence {
  const checkedAt = profile.checkedAt ?? defaultCheckedAt;
  const id = (suffix: string) => `${profile.slug}-${suffix}`;
  const sources: ResearchSource[] = [
    { id: id("company"), label: `${profile.name}公式サイト`, url: profile.homepage, kind: "企業公式", scope: "製品・会社概要・拠点", checkedAt },
    { id: id("growth"), label: `${profile.name}成長発表`, url: profile.growthUrl, kind: "企業公式", scope: "業績・資金調達・顧客基盤", checkedAt },
    { id: id("careers"), label: `${profile.name} Careers`, url: profile.careersUrl, kind: "企業公式", scope: "採用地域・Japan求人の有無", checkedAt },
    { id: id("customers"), label: `${profile.name}顧客事例`, url: profile.customersUrl, kind: "企業公式", scope: "導入目的・成果・国内顧客の有無", checkedAt },
    { id: id("trust"), label: `${profile.name} Trust / Security`, url: profile.trustUrl, kind: "企業公式", scope: "security・privacy・governance", checkedAt },
    { id: id("apac"), label: `${profile.name} APAC情報`, url: profile.apacUrl, kind: "企業公式", scope: "APAC拠点・販売・support", checkedAt },
    { id: id("external"), label: "日本の外部環境資料", url: profile.externalUrl, kind: "外部集計", scope: "日本市場の制度・導入要件", checkedAt },
    { id: id("linkedin"), label: `${profile.name} LinkedIn企業ページ`, url: profile.linkedinUrl, kind: "外部集計", scope: "グローバル会社規模レンジ", checkedAt },
  ];
  const mapEntry = (assessment: JapanEntryAssessment): JapanEntryAssessment => ({
    ...assessment,
    factSignals: assessment.factSignals.map((item) => ({ ...item, sourceIds: item.sourceIds.map(id) })),
    hurdles: assessment.hurdles.map((item) => ({ ...item, sourceIds: item.sourceIds.map(id) })),
  });
  return {
    researchedAt: checkedAt,
    salesSnapshot: profile.salesSnapshot,
    marketStatus: {
      isPublic: false,
      growthSummary: profile.growthSummary,
      ipoOutlookSummary: "非公開企業。IPO時期、日本法人設立、日本向け採用の計画は公式に確認できない。資金調達時の評価額がある場合も現在価値や進出決定を意味しない。",
      milestones: profile.milestones.map((item) => ({ ...item, sourceId: id(item.source) })),
      sourceIds: [id("growth"), id("company"), id("careers")],
      genbaVerdict: { headline: profile.verdict, body: profile.entryNarrative },
      growthDrivers: [
        { title: "事業規模と成長", body: profile.growthSummary, sourceId: id("growth") },
        { title: "APACへの距離", body: profile.apacPresence, sourceId: id("apac") },
        { title: "日本市場との接点", body: profile.productLanguage, sourceId: id("company") },
      ],
      japanGrowth: {
        headline: profile.verdict,
        narrative: profile.entryNarrative,
        qualitativeSignals: [
          { label: "公式拠点・地域", detail: `${profile.apacPresence} Japan・Tokyoの公式拠点は確認できない。`, sourceId: id("apac") },
          { label: "公式採用", detail: "海外求人は確認できるが、Japan・Tokyoを勤務地または担当市場とする求人は確認できない。", sourceId: id("careers") },
          { label: "製品・市場接点", detail: profile.productLanguage, sourceId: id("company") },
        ],
        entryAssessment: mapEntry(profile.entryAssessment),
        sourceIds: profile.sourceIds.map(id),
      },
      riskHypotheses: [
        { title: "日本のcommercial proofが進出判断を左右", body: profile.entryAssessment.hurdles[0].body, confidence: "中", evidence: [profile.entryAssessment.factSignals[0].body, profile.entryAssessment.factSignals[1].body], counterSignal: profile.entryAssessment.readinessConditions[0].body, sourceIds: [id("growth"), id("customers"), id("careers")] },
        { title: "localizationと販売体制は別投資", body: profile.entryAssessment.hurdles[1].body, confidence: "中", evidence: [profile.productLanguage, profile.apacPresence], counterSignal: profile.entryAssessment.readinessConditions[1].body, sourceIds: [id("company"), id("apac"), id("trust")] },
      ],
    },
    sellingPlaybook: {
      frameIntro: profile.narrative[1].body,
      issueLenses: profile.issueLenses,
      narrative: profile.narrative,
      openingHook: profile.openingHook,
      valueHypothesis: profile.valueHypothesis,
      commonObjection: { objection: profile.objection, reframe: profile.reframe },
    },
    facts: profile.facts.map((fact) => ({ label: fact.label, value: fact.value, detail: fact.detail, sourceIds: [id(fact.source)] })),
    hypotheses: [
      { topic: "日本進出", title: "進出時期ではなく成立条件で見る", conclusion: profile.entryAssessment.verdict, confidence: "中", evidence: profile.entryAssessment.factSignals.slice(0, 3).map((item) => item.body), counterSignals: profile.entryAssessment.hurdles.slice(0, 3).map((item) => item.body), interviewQuestions: ["Japan launchを決める定量条件は", "APACから日本の有償顧客を担当しているか"], sourceIds: [id("growth"), id("apac"), id("careers")] },
      { topic: "製品・市場", title: "海外の勝ち筋を日本で再現できるか", conclusion: profile.narrative[3].body, confidence: "中", evidence: [profile.issueLenses[0].body, profile.valueHypothesis], counterSignals: [profile.objection], interviewQuestions: ["最も再現性の高いbuyerとuse caseは", "日本で競合する既存運用は"], sourceIds: [id("company"), id("customers")] },
      { topic: "営業モデル", title: "APAC組織からのcountry build候補", conclusion: profile.salesMotion, confidence: "探索中", evidence: [profile.apacPresence], counterSignals: ["日本向け求人・country leaderは未確認"], interviewQuestions: ["APACの国別coverageは", "最初のJapan podに必要な役割は"], sourceIds: [id("apac"), id("careers")] },
      { topic: "報酬・Quota", title: "日本条件は推測しない", conclusion: "日本求人がないため、海外のbase、OTE、quota、rampを日本の代理値にしない。", confidence: "高", evidence: ["Japan・Tokyo求人を未確認"], counterSignals: ["海外求人の存在は日本の条件を示さない"], interviewQuestions: ["greenfield quotaか既存pipeline継承か", "local referenceとpartnerを誰が持つか"], sourceIds: [id("careers")] },
      { topic: "人材・キャリア", title: "category creationとlocal execution", conclusion: profile.careerValue, confidence: "探索中", evidence: [profile.apacPresence, profile.growthSummary], counterSignals: ["Japan組織と役割は未発表"], interviewQuestions: ["local decision rightはどこまであるか", "product localizationへのfeedback loopは"], sourceIds: [id("growth"), id("apac")] },
    ],
    cultureNotes: { organizationReadTitle: "海外でproduct-market fitを作り、次の地域へ拡張する成長組織", hypothesis: { title: "完成したJapan playbookではなく、反証を集めるbuild phase。", body: `${profile.apacPresence} 日本採用は未発表のため、将来進出時はpipeline、reference、partner、localizationを同時に作る高いagencyが必要になる。` }, careerValue: { title: "将来のcountry build候補", body: profile.careerValue, confidence: "探索中" } },
    customerProof: profile.customers.map((item) => ({ ...item, sourceId: id("customers") })),
    externalSignals: profile.externalSignals.map((item) => ({ ...item, sourceId: id("external") })),
    roleLens: { salesMotion: profile.salesMotion, compensation: "日本のbase、OTE、equity、pay mixは未確認。海外条件を転用しない。", quota: "日本のquota、ACV、cycle、ramp、pipelineは未確認。進出求人が出た時点でgreenfieldか既存顧客継承かを確認する。", collaboration: "将来はAPAC leadership、SE、CS、Product、Security、Legal、partnerを束ね、日本固有の導入条件とproduct feedbackをglobalへ返す役割になる可能性。" },
    leadership: { ...profile.leader, sourceId: id("company") },
    companyStats: {
      globalHeadcount: { value: profile.headcount, detail: profile.headcountDetail, sourceId: id(profile.headcount.includes("規模") ? "linkedin" : "growth") },
      japanHeadcount: { value: "確認できず", detail: "日本法人・国内拠点・公式なJapan在籍人数を確認できない。", sourceId: id("careers") },
      japanOffice: { value: "未進出", detail: "公式拠点一覧にJapan・Tokyoの掲載を確認できない。", sourceId: id("apac") },
      japanSince: { value: "未設立", detail: "日本法人設立または正式launchの発表を確認できない。", sourceId: id("company") },
    },
    salesAppeal: { intro: "日本採用はまだない。進出時に得られる可能性がある経験を、事実と仮説に分けて整理。", points: [
      { title: "伸びるcategoryを売る", detail: profile.growthSummary, sourceIds: [id("growth")] },
      { title: "経営課題から案件を作る", detail: profile.valueHypothesis, sourceIds: [id("customers"), id("company")] },
      { title: "APACからJapanを作る", detail: profile.careerValue, sourceIds: [id("apac"), id("careers")] },
    ] },
    interviewPrep: { intro: "現時点では応募面接ではなく、JapanまたはAPAC採用が動いた際に確認する論点。", questions: [
      { question: "Japan launchを決める顧客数、ARR、partner、product条件は。", why: "進出の期待と承認済み計画を分ける。", sourceIds: [id("growth"), id("apac")] },
      { question: "APACから担当する日本顧客、pipeline、renewal実績は。", why: "現地固定費を支えるcommercial proofを見る。", sourceIds: [id("customers"), id("apac")] },
      { question: "日本語製品、support、security・legal資料の未対応点は。", why: "翻訳とenterprise deployment readinessを分ける。", sourceIds: [id("company"), id("trust")] },
      { question: "最初のJapan podはAE単独か、SE・CS・Marketing・partnerを含むか。", why: "greenfield quotaを実行できるcoverageを見る。", sourceIds: [id("careers"), id("apac")] },
    ] },
    solutions: profile.solutions.map((solution) => ({ ...solution, retention: "製品別ARR、NRR、日本での継続率は非公開。" })),
    customerStoriesUrl: profile.customersUrl,
    fitTags: profile.fitTags,
    comparisonMap: profile.comparisons,
    sources,
  };
}

const harveyIntelligence: CompanyPublicIntelligence = buildPreEntryIntelligence({
  slug: "harvey", name: "Harvey", homepage: "https://www.harvey.ai/", growthUrl: "https://www.harvey.ai/blog/harvey-raises-growth-round-at-dollar11-billion-valuation-co-led-by-gic-and-sequoia", careersUrl: "https://www.harvey.ai/company/careers", customersUrl: "https://www.harvey.ai/customers", trustUrl: "https://www.harvey.ai/security", apacUrl: "https://www.harvey.ai/blog/harvey-opens-in-singapore", externalUrl: "https://www.moj.go.jp/housei/shihouseido/housei10_00134.html", linkedinUrl: "https://www.linkedin.com/company/harvey-ai/",
  salesSnapshot: "Harveyは、law firm・企業法務・professional servicesに、法律業務向けAI workspaceとagentを提供する会社。顧客が抱えるのは「調査・review・draftに高単価人材の時間を使う」「firm内の知見が案件ごとに分断する」「汎用AIでは守秘・引用・権限を担保できない」という3つの課題。legal researchから入り、due diligence、contract、knowledge、client delivery、firm全体のoperating modelへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "70カ国超・2,400社超の顧客、2026年の110億ドル評価、Q1だけで1億ドル超のARR追加を会社発表。SingaporeをAPAC拠点とし、森・濱田松本法律事務所とdentsuの公開事例も持つ。",
  verdict: "可能性は中〜高。日本顧客proofはあるが、local entity・delivery体制の公式シグナルは未確認", entryNarrative: "Harveyはglobal legal AIで2,400社超の顧客と高成長を持ち、Singapore拠点に加え、森・濱田松本法律事務所とdentsuという日本の公開顧客proofまである。日本市場を全く検証していない会社ではない。一方、Japan・Tokyoの拠点、求人、country leader、日本語site、国内data handling・support体制は確認できず、日本顧客がSingaporeやglobal teamから支援されている可能性が残る。進出可能性は比較的高いが、local revenueとrenewalが専任podを正当化し、professional servicesとsecurity審査を国内で回せる状態になるまでは時期を断定しない。",
  headcount: "1,001〜5,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密値ではない。", apacPresence: "SingaporeにAPAC拠点を開設し、region向けGTM・customer支援を展開。", productLanguage: "日本のlaw firmと企業の公開事例がある一方、日本語UI・support・契約体系の同等性は公式情報で確定できない。",
  milestones: [{ year: "2022", label: "創業", detail: "legal professional向け生成AIとして開始。", source: "company" }, { year: "2024", label: "国際展開", detail: "law firm・企業法務への導入を70カ国超へ拡大。", source: "growth" }, { year: "2025", label: "Singapore", detail: "APAC拠点を開設。", source: "apac" }, { year: "2026", label: "110億ドル評価", detail: "2億ドルのgrowth roundを発表。", source: "growth" }, { year: "2026", label: "成長加速", detail: "Q1に1億ドル超のARR追加を会社発表。", source: "growth" }],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "森・濱田松本法律事務所やdentsuを含む事例は、draft短縮だけでなく、research、review、knowledge、複数国案件を統一した安全なworkspaceへ載せる課題を示す。" },
    { title: "製品の成り立ちから見る課題", body: "汎用chatをlegal workflowへ当てるのではなく、professional-grade model access、source、vault、workflow、permissionをlawyerの仕事へ組み込む発想が起点。" },
    { title: "外部環境の要求から見る課題", body: "法務は生産性を求める一方、弁護士職務、守秘、個人情報、著作権、誤答の責任が重い。speedだけでなくreview可能性と組織統制を同時に満たす必要がある。" },
  ],
  narrative: [{ label: "背景", body: "cross-border案件と文書量が増え、lawyer・法務の時間が検索・比較・初稿に固定される。" }, { label: "課題", body: "汎用AIは守秘・権限・根拠・firm knowledgeを業務gradeで扱えず、個人利用かpilotで止まる。" }, { label: "解決策", body: "限定practiceとdocument setでresearch、review、draftを導入し、時間、引用精度、review工数、adoptionを測る。" }, { label: "選定の理由", body: "Microsoft・Thomson Reuters・LexisNexis・内製RAGとの比較で、legal workflow、customer proof、security、implementationが一体なら選ばれる。" }],
  openingHook: "高単価のlawyer・法務が、検索・比較・初稿に使っている時間を案件別に把握していますか。", valueHypothesis: "対象workflowでturnaround time、review工数、引用確認、再利用knowledge、active userを測る。", objection: "Microsoft Copilotか既存legal databaseのAIで十分。", reframe: "modelの賢さではなく、firm knowledge、権限、source、legal workflow、導入支援を一つのoperating modelとして展開できるかで比較する。",
  facts: [{ label: "顧客", value: "2,400社超", detail: "70カ国超で利用。", source: "growth" }, { label: "評価額", value: "110億ドル", detail: "2026年growth round時点。", source: "growth" }, { label: "成長", value: "Q1にARR 1億ドル超追加", detail: "会社発表値。", source: "growth" }, { label: "APAC", value: "Singapore", detail: "地域拠点を公式発表。", source: "apac" }, { label: "日本顧客", value: "公開事例あり", detail: "森・濱田松本法律事務所、dentsu。", source: "company" }, { label: "日本求人", value: "未確認", detail: "Japan・Tokyo勤務地を公式careerで確認できず。", source: "careers" }],
  customers: [{ company: "森・濱田松本法律事務所", products: "Harvey", outcome: "legal research・draft等でAI活用を展開。", implication: "日本のtop-tier law firmという強いreference。" }, { company: "dentsu", products: "Harvey", outcome: "global legal functionでAI活用を会社事例化。", implication: "law firm以外のenterprise legalへ拡張。" }, { company: "Allen & Overy Shearman", products: "Harvey", outcome: "大規模law firmでの業務活用を公開。", implication: "practice横断のdeployment proof。" }],
  externalSignals: [{ label: "legal AI", value: "専門責任が残る", detail: "AI利用後もlawyer・企業法務の確認、守秘、適切な業務設計が必要。", caveat: "個別利用の適法性は契約・data・用途で異なる。" }, { label: "日本市場", value: "大手顧客proofあり", detail: "国内著名組織の事例は需要を示す。", caveat: "顧客事例だけで日本法人設立や売上規模は分からない。" }],
  entryAssessment: {
    verdict: "進出可能性は中〜高。国内referenceは強いがlocal operating modelが未確認",
    factSignals: [{ title: "日本の有償利用を示す強いreference", body: "森・濱田松本法律事務所とdentsuの公開事例があり、日本語・国内業務で価値検証する入口は存在する。", sourceIds: ["customers"] }, { title: "会社規模と投資余力", body: "2,400社超、70カ国超、110億ドル評価、Q1にARR 1億ドル超追加という会社発表はcountry investmentを検討できる規模。", sourceIds: ["growth"] }, { title: "APAC deliveryの足場", body: "Singapore拠点を持ち、Asia customerを現地時間帯で支援できる構造がある。", sourceIds: ["apac"] }, { title: "日本のhigh-value業務と親和", body: "law firm・enterprise legalの文書量、cross-border案件、専門人材不足はHarveyのtime-to-valueと結びつきやすい。", sourceIds: ["customers", "external"] }],
    hurdles: [{ title: "local組織・売上規模が見えない", body: "日本顧客proofはあるがJapan entity、Tokyo office、country leader、Japan求人は未確認。Singaporeから十分に支援できているなら法人設立を急がない可能性もある。", sourceIds: ["careers", "apac"] }, { title: "日本語と国内legal contentの同等性", body: "日本語UI、model精度、domestic legal source、support、implementationの範囲を公式情報だけで確定できない。", sourceIds: ["company", "customers"] }, { title: "守秘・data handling・professional responsibility", body: "案件文書とclient情報を扱うため、data location、retention、model training、subprocessor、access、output reviewを日本語で説明する必要がある。", sourceIds: ["trust", "external"] }, { title: "強いplatform競争", body: "Microsoft、Thomson Reuters、LexisNexis、国内legal tech、law firm内製RAGとの比較で追加予算と標準化を正当化する必要がある。", sourceIds: ["company"] }],
    readinessConditions: [{ title: "国内顧客のrenewal・expansion", body: "複数顧客でpractice・部門横断の更新と拡張が見える。" }, { title: "日本語でのenterprise readiness", body: "UI、support、security、legal資料、implementationが日本語で揃う。" }, { title: "local delivery pod", body: "AEだけでなくsolution、CS、legal/securityを国内または専任APACでcoverする。" }, { title: "国内knowledge ecosystem", body: "law firm・企業法務・content provider・consulting partnerとの連携を作る。" }, { title: "local economics", body: "日本ARR、pipeline、ACV、retentionが現地固定費を継続的に支える。" }],
    watchSignals: ["Japan・Tokyo求人", "日本語公式site・supportの公開", "国内顧客事例の追加", "Japan country leaderまたはlocal法人", "国内legal content・partner発表", "Singapore所属のJapan territory GTM人材"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "海外ではlaw firmのmanaging partner、CIO、knowledge leaderと企業GC・legal opsへ入り、practice pilotから全firm・全法務へ拡張するEnterprise sale。", careerValue: "legal AIのcategory creation、C-suite・partner商談、high-trust dataのgovernance、APAC country buildを扱う可能性。", leader: { name: "Winston Weinberg", role: "CEO / Co-founder", read: "legal professionのworkflowを起点に、model競争ではなくdomain-specific systemとしてglobal展開を進める。" },
  solutions: [{ name: "Harvey Assistant", valueProp: "legal research、analysis、draftを専門workflowで支援。", url: "https://www.harvey.ai/", competitors: "Microsoft Copilot、CoCounsel、Lexis+ AI。", differentiation: "legal use caseとfirm deploymentに集中。" }, { name: "Harvey Vault", valueProp: "大量documentのreview・分析を権限下で実行。", url: "https://www.harvey.ai/", competitors: "eDiscovery、VDR AI、内製RAG。", differentiation: "Assistantとdocument workspaceを接続。" }, { name: "Harvey Knowledge / Workflows", valueProp: "firm knowledgeと反復業務を組織標準へ組み込む。", url: "https://www.harvey.ai/", competitors: "knowledge management、workflow automation。", differentiation: "legal professionalの作業単位をtemplate化。" }],
  fitTags: ["日本未進出", "Legal AI", "Enterprise", "APAC", "Professional Services", "Security", "Category creation", "Japan customers"], comparisons: [{ arena: "Legal AI", companies: ["Harvey", "Thomson Reuters", "LexisNexis"], why: "content、workflow、model、導入支援" }, { arena: "Enterprise AI", companies: ["Harvey", "Microsoft", "Writer"], why: "domain特化と全社platform" }, { arena: "内製", companies: ["Harvey", "law firm内製RAG", "SIer"], why: "速度、守秘、保守、差別化" }],
});

const clayIntelligence: CompanyPublicIntelligence = buildPreEntryIntelligence({
  slug: "clay", name: "Clay", homepage: "https://www.clay.com/", growthUrl: "https://www.clay.com/blog/tender-offer-2026", careersUrl: "https://www.clay.com/careers", customersUrl: "https://www.clay.com/customers", trustUrl: "https://www.clay.com/security", apacUrl: "https://www.clay.com/community", externalUrl: "https://www.ppc.go.jp/personalinfo/legal/", linkedinUrl: "https://www.linkedin.com/company/clay-hq/",
  salesSnapshot: "Clayは、Growth・RevOps・SDR・Marketingに、100超のdata sourceとAI agentを組み合わせてaccount research・enrichment・personalized outreachを作るGTM development environmentを提供する会社。顧客が抱えるのは「CRMと外部dataが古い」「targetingとpersonalizationが手作業」「point toolを増やすほどworkflow・credit・governanceが分断する」という3つの課題。data enrichmentから入り、ABM、signal-based selling、inbound routing、CRM hygiene、GTM engineeringへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2025年12月にARR 1億ドル、2026年1月に50億ドル評価、300人、14,000顧客、Enterprise NRR 200%超を会社発表。150 agencyと90 international clubを持つが、日本法人・拠点・求人は未確認。",
  verdict: "可能性は中。product-ledな日本利用余地は大きいが、local Enterprise投資の根拠はまだ弱い", entryNarrative: "Clayは300人でARR 1億ドル、14,000顧客、Enterprise NRR 200%超まで伸び、international clubとagency ecosystemも持つ。JapanのGTM teamがproduct-ledに使い始める可能性は高く、日本語処理もLLMとdata provider次第で実行できる。一方、公式拠点・careers・customer storiesにJapan固有のcommercial signalはなく、data providerの国内coverage、個人情報・outreach運用、日本語support、Enterprise procurementの成熟度も未確認。まずcommunity・agency・global顧客の日本team経由で需要を測り、local ARRとpartner deliveryが見える状態が進出の前提。",
  headcount: "300人", headcountDetail: "2026年1月の会社発表。", apacPresence: "90 international clubとglobal agency networkを持つが、APACの正式regional HQ・Japan officeは確認できない。", productLanguage: "flexibleなtable・AI workflowは日本語dataも処理可能と考えられるが、日本語UI・domestic data coverage・supportの公式同等性は未確認。",
  milestones: [{ year: "2017", label: "創業", detail: "no-codeのprogrammable tableを起点に開始。", source: "company" }, { year: "2023", label: "GTMへ集中", detail: "enrichmentとAIを組み合わせるGTM development environmentへ。", source: "company" }, { year: "2025", label: "Series C", detail: "1億ドルを調達し、評価額31億ドルと発表。", source: "growth" }, { year: "2025.12", label: "ARR 1億ドル", detail: "1百万ドルから2年で到達と会社発表。", source: "growth" }, { year: "2026", label: "50億ドル評価", detail: "employee tenderで300人・14,000顧客を公表。", source: "growth" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "OpenAI、HubSpot、Canva等の利用とClay自身のplaybookは、data enrichment単体ではなく、独自signalを見つけ、scoreし、personalized actionへ即時につなぐ課題を示す。" }, { title: "製品の成り立ちから見る課題", body: "programmingの力をnon-technical userへ渡すno-code spreadsheetが起点。固定されたsales toolではなく、data・AI・actionを組み替えるGTM development environmentとして設計。" }, { title: "外部環境の要求から見る課題", body: "outbound量をAIで増やすほどdataの正確性、利用目的、opt-out、brand damageが経営riskになる。日本では個人情報と特定電子メール等の運用を含め、automationとgovernanceを同時に設計する必要がある。" }],
  narrative: [{ label: "背景", body: "GTM dataはCRM、provider、web、intent、callへ分散し、sellerが手作業で調べている。" }, { label: "課題", body: "一括sequenceは文脈が弱く、dataはすぐ古くなり、point tool追加ではworkflowとmeasurementがさらに分断する。" }, { label: "解決策", body: "一つのICP・playでdata source、signal、AI research、human review、CRM/actionを組み、meeting・pipeline・error・costを測る。" }, { label: "選定の理由", body: "Apollo、ZoomInfo、6sense、Salesforce、内製automationとの比較で、独自logic・多数provider・AI・actionを柔軟に組める場合に選ばれる。" }],
  openingHook: "sellerが一社を調べてpersonalized outreachを送るまで、何分と何toolを使っていますか。", valueHypothesis: "一つのplayでresearch時間、valid contact率、reply、meeting、pipeline、data cost、opt-outを測る。", objection: "ZoomInfo・Apollo・Salesforceで十分。", reframe: "databaseの件数ではなく、複数dataとfirst-party signalを独自logicで組み、actionと学習まで何日で回せるかで比較する。",
  facts: [{ label: "ARR", value: "1億ドル", detail: "2025年12月の会社発表。", source: "growth" }, { label: "顧客", value: "14,000社", detail: "2026年1月。", source: "growth" }, { label: "社員", value: "300人", detail: "会社発表。", source: "growth" }, { label: "Enterprise NRR", value: "200%超", detail: "会社発表値。", source: "growth" }, { label: "ecosystem", value: "150 agencies / 90 clubs", detail: "global network。", source: "growth" }, { label: "日本求人", value: "未確認", detail: "Japan・Tokyo求人なし。", source: "careers" }],
  customers: [{ company: "OpenAI", products: "Clay", outcome: "GTM teamのdata・research workflowで利用企業として公表。", implication: "AI-native企業でもGTM data orchestrationが必要。" }, { company: "Verkada", products: "Clay", outcome: "prospectごとのlanding page生成を会社事例で紹介。", implication: "enrichmentからweb personalizationへ拡張。" }, { company: "Intercom", products: "Clay", outcome: "support documentationをAIで評価しlead scoringへ利用。", implication: "独自signalをICPへ変える価値。" }],
  externalSignals: [{ label: "個人情報", value: "利用目的・適正取得", detail: "contact dataと行動signalの利用では日本の個人情報保護法・顧客規程を確認する必要。", caveat: "個別workflowの適法性はdata source・目的・通知等で異なる。" }, { label: "AI outbound", value: "量より信頼", detail: "automationで接触量を増やすほどbrand、opt-out、deliverabilityが制約になる。", caveat: "成果はICPとcontent qualityで大きく変わる。" }],
  entryAssessment: {
    verdict: "進出可能性は中。global成長は強いがJapan固有のEnterprise proofが不足",
    factSignals: [{ title: "高い成長効率", body: "300人でARR 1億ドル、14,000顧客、Enterprise NRR 200%超は国際展開へ再投資できる基盤。", sourceIds: ["growth"] }, { title: "product-ledな越境利用", body: "cloud productとinternational communityにより、法人設立前に日本team・agencyが利用し需要を作れる。", sourceIds: ["company", "apac"] }, { title: "日本のGTM課題と親和", body: "seller不足、data分断、ABM・personalizationへの関心はworkflow型価値と一致。", sourceIds: ["customers", "external"] }, { title: "partner leverage", body: "150 agencyと90 clubのmodelはlocal deliveryをpartnerから始める選択肢を持つ。", sourceIds: ["growth", "apac"] }],
    hurdles: [{ title: "Japan固有の需要証拠がない", body: "国内顧客事例、Japan求人、office、country ownerを確認できず、既存利用規模が分からない。", sourceIds: ["customers", "careers"] }, { title: "domestic data coverageと日本語支援", body: "日本企業・役職・contact dataのcoverage、表記揺れ、support、templateの同等性が未確認。", sourceIds: ["company"] }, { title: "privacy・outreach governance", body: "複数providerの個人dataとAI outreachを組み合わせるため、利用目的、契約、opt-out、brand controlを国内で設計する必要。", sourceIds: ["trust", "external"] }, { title: "tool consolidation競争", body: "Salesforce、HubSpot、Apollo、ZoomInfo、6senseとdata・AI・sequenceが重複し、追加platformのownershipを明確にする必要。", sourceIds: ["company"] }],
    readinessConditions: [{ title: "Japan customer cohort", body: "複数の日本teamでpaid adoption・renewal・expansionを確認。" }, { title: "domestic data quality", body: "日本のICPでvalid data率とmatching qualityを検証。" }, { title: "local partner", body: "RevOps agency・SIがimplementationとgovernanceを支援。" }, { title: "Enterprise support", body: "日本時間帯のCS・security・procurement supportを提供。" }, { title: "responsible outbound package", body: "privacy、opt-out、brand、provider lineageを説明できる。" }],
    watchSignals: ["Japan・Tokyo求人", "日本顧客事例", "Tokyo Clay Clubの継続活動", "国内agency partner", "日本語site・template・support", "APAC regional sales/CS hub"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "RevOps・Growth・Sales/Marketing leaderへone playで入り、usage・data creditからteam・workflow・EnterpriseへexpandするPLG-to-enterprise sale。", careerValue: "GTM engineeringという新category、PLG、usage economics、data・AI governance、community-led growthを扱う可能性。", leader: { name: "Kareem Amin", role: "CEO / Co-founder", read: "programmable toolの柔軟性をGTMへ集中させ、community・agency・enterpriseのflywheelで拡張。" },
  solutions: [{ name: "Clay Tables", valueProp: "複数data sourceをenrich・score・routeするprogrammable workspace。", url: "https://www.clay.com/product", competitors: "Apollo、ZoomInfo、spreadsheet+automation。", differentiation: "providerを選び独自logicを構築。" }, { name: "Claygent", valueProp: "web researchと非構造data判断をAI agentで実行。", url: "https://www.clay.com/claygent", competitors: "ChatGPT、Glean、内製agent。", differentiation: "GTM tableとactionに直接組み込む。" }, { name: "Sequencer / Signals", valueProp: "triggerからpersonalized outreachとCRM actionへ接続。", url: "https://www.clay.com/", competitors: "Outreach、Salesloft、6sense。", differentiation: "research・data・messageを同一workflowで作る。" }],
  fitTags: ["日本未進出", "GTM Engineering", "RevOps", "PLG", "AI", "Data", "Community", "Enterprise"], comparisons: [{ arena: "Sales data", companies: ["Clay", "Apollo", "ZoomInfo"], why: "databaseとorchestrationの違い" }, { arena: "ABM", companies: ["Clay", "6sense", "Demandbase"], why: "signal・score・activation" }, { arena: "Automation", companies: ["Clay", "Workato", "Zapier", "内製"], why: "GTM特化と自由度" }],
});

const vantaIntelligence: CompanyPublicIntelligence = buildPreEntryIntelligence({
  slug: "vanta", name: "Vanta", homepage: "https://www.vanta.com/", growthUrl: "https://www.vanta.com/resources/vanta-crosses-300m-in-arr-as-growth-accelerates", careersUrl: "https://www.vanta.com/careers", customersUrl: "https://www.vanta.com/customers", trustUrl: "https://www.vanta.com/trust", apacUrl: "https://www.vanta.com/resources/vanta-2025-year-in-review", externalUrl: "https://www.meti.go.jp/policy/netsecurity/mng_guide.html", linkedinUrl: "https://www.linkedin.com/company/vanta-security/",
  salesSnapshot: "Vantaは、CISO・Security・Compliance・Vendor Risk・Salesに、compliance evidence収集、継続monitoring、trust center、security questionnaireを統合するTrust Management Platformを提供する会社。顧客が抱えるのは「監査証跡をspreadsheetで追う」「vendor riskとcontrol ownerが分断する」「security questionnaireがsales cycleを止める」という3つの課題。SOC 2・ISO取得から入り、continuous GRC、third-party risk、customer assurance、AI governanceへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2026年4月にARR 3億ドルを突破し、2025年Series Dでは41.5億ドル評価。Sydney拠点・APAC CSを持ち、顧客の国際比率も高い一方、日本法人・Tokyo求人は未確認。",
  verdict: "可能性は中。APAC基盤とcategory需要は強いが、日本のframework・partner・buyer proofが不足", entryNarrative: "VantaはARR 3億ドル、Sydney拠点、APAC Customer Success、international customer比率を持ち、日本へ展開できる規模とregional operating modelがある。日本企業も海外取引でSOC 2・ISO・security questionnaire対応を求められ、Trust Centerとcontinuous monitoringの親和性は高い。一方、Japan・Tokyoの拠点・求人・国内顧客事例・日本固有framework mapping・監査法人やMSP partnerは確認できない。Australiaから越境販売できるため、国内顧客のrenewalとpartner economicsが専任podを正当化するまで法人設立を待つ可能性がある。",
  headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密値ではない。", apacPresence: "Sydney officeとAPAC Customer Success teamを公式に展開。2026年もSydneyでregional eventを計画。", productLanguage: "global compliance frameworkとTrust Centerを提供するが、日本語UI・support、日本固有framework mappingの公式同等性は未確認。",
  milestones: [{ year: "2018", label: "創業", detail: "security compliance automationとして開始。", source: "company" }, { year: "2022", label: "APAC拡張", detail: "Sydney teamを拡大。", source: "apac" }, { year: "2024", label: "ARR 1億ドル超", detail: "global顧客7,000社と会社発表。", source: "growth" }, { year: "2025", label: "Series D", detail: "1.5億ドル、41.5億ドル評価。", source: "growth" }, { year: "2026", label: "ARR 3億ドル", detail: "9カ月で2億から3億ドルへ成長。", source: "growth" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "顧客事例は、初回認証の短縮だけでなく、control monitoring、vendor risk、Trust Center、questionnaireを継続運用し、securityをsales enablementへ変える課題を示す。" }, { title: "製品の成り立ちから見る課題", body: "SOC 2の証跡収集をautomationする起点から、組織・vendor・顧客へtrustを証明するplatformへ拡張。point-in-time auditと日常のsecurity operationの断絶を解く。" }, { title: "外部環境の要求から見る課題", body: "supply-chain攻撃、AI利用、委託先増加で企業は自社だけでなくthird partyのrisk説明を求められる。国内でも経営層がcybersecurityを事業riskとして管理する必要がある。" }],
  narrative: [{ label: "背景", body: "顧客・監査人・取引先からsecurity証明を求められる頻度とframeworkが増える。" }, { label: "課題", body: "evidence、owner、vendor、questionnaireがspreadsheetと複数toolへ分散し、Securityが反復作業に追われる。" }, { label: "解決策", body: "一つのframeworkとscopeでcontrol・evidence連携を開始し、audit準備時間、finding、questionnaire時間、sales delayを測る。" }, { label: "選定の理由", body: "Drata、Secureframe、ServiceNow GRC、consultingとの比較で、automation、framework、Trust Center、third-party riskを同じplatformで運用できる場合に選ばれる。" }],
  openingHook: "security questionnaireと監査証跡の収集が、直近の商談・監査で何時間と何日のdelayを生んでいますか。", valueHypothesis: "evidence収集時間、audit lead time、questionnaire turnaround、vendor review、sales cycleを測る。", objection: "監査法人とspreadsheet、既存GRCで足りる。", reframe: "認証を一度取ることではなく、controlを継続monitoringし、顧客へ即時にtrustを証明して売上を止めないoperating costで比較する。",
  facts: [{ label: "ARR", value: "3億ドル", detail: "2026年4月。", source: "growth" }, { label: "評価額", value: "41.5億ドル", detail: "2025年Series D。", source: "growth" }, { label: "APAC拠点", value: "Sydney", detail: "officeとCS team。", source: "apac" }, { label: "global展開", value: "顧客の国際比率を拡大", detail: "海外office・eventを継続。", source: "apac" }, { label: "product", value: "Trust Management", detail: "complianceからvendor・customer trustへ。", source: "company" }, { label: "日本求人", value: "未確認", detail: "Japan・Tokyo求人なし。", source: "careers" }],
  customers: [{ company: "Cursor", products: "Vanta", outcome: "創業初期からsecurity foundationを構築した例として紹介。", implication: "startup landから成長に伴うexpand。" }, { company: "Rakkar Digital", products: "Vanta", outcome: "APACのdigital asset事業でcomplianceを支援。", implication: "regulated APAC customer proof。" }, { company: "Atlassian", products: "Vanta", outcome: "global顧客基盤の一例として会社発表。", implication: "SMB専用ではなくEnterpriseへ上がる。" }],
  externalSignals: [{ label: "cybersecurity経営", value: "経営責任", detail: "経産省ガイドラインはcyber riskを経営課題として扱う。", caveat: "Vanta導入や特定frameworkを義務づけるものではない。" }, { label: "supply chain", value: "third-party説明", detail: "取引先・委託先のrisk評価と継続monitoringが重要。", caveat: "必要controlは業界・契約で異なる。" }],
  entryAssessment: {
    verdict: "進出可能性は中。SydneyからのAPAC基盤はあるがJapan commercial proofが不足",
    factSignals: [{ title: "十分な事業規模", body: "ARR 3億ドル、41.5億ドル評価はlocal market investmentを検討できる。", sourceIds: ["growth"] }, { title: "APAC operating model", body: "Sydney office、SalesとCSのregional teamを持ち、時差・supportの足場がある。", sourceIds: ["apac"] }, { title: "日本需要との親和", body: "security questionnaire、ISO、third-party risk、AI governanceは日本企業の海外取引でも増える。", sourceIds: ["company", "external"] }, { title: "land-and-expand構造", body: "complianceからTrust Center、Vendor Risk、Questionnaireへ拡張しlocal fixed costを複数製品で回収できる。", sourceIds: ["company", "growth"] }],
    hurdles: [{ title: "国内顧客・求人が見えない", body: "Japan customer story、office、country leader、求人を確認できない。", sourceIds: ["customers", "careers"] }, { title: "日本固有frameworkと日本語", body: "国内規格mapping、日本語UI・support・audit partner workflowの同等性が未確認。", sourceIds: ["company", "apac"] }, { title: "監査・consulting ecosystem", body: "compliance softwareだけで完結せず、監査法人、consultant、MSPとの役割設計が必要。", sourceIds: ["customers", "external"] }, { title: "GRC競争", body: "Drata、Secureframe、ServiceNow、国内GRC、consultingとの競合でbuyerとbudget ownerを明確にする必要。", sourceIds: ["company"] }],
    readinessConditions: [{ title: "国内paid cohort", body: "複数日本顧客のrenewalとexpansionを確認。" }, { title: "日本語・framework readiness", body: "UI、support、domestic guidance、security資料をlocalize。" }, { title: "audit partner", body: "監査・consulting・MSPとのreferralとdeliveryを確立。" }, { title: "regional pod", body: "AE、CS、Solution、Partnerを日本専任でcover。" }, { title: "Enterprise win", body: "startupだけでなく国内中堅・大手の公開referenceを作る。" }],
    watchSignals: ["Japan・Tokyo求人", "日本語site・UI", "国内顧客事例", "国内監査・MSP partner", "Japan framework mapping", "Sydney teamのJapan territory表記"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "startup・scale-upのCompliance/Securityへ認証から入り、CISO・Procurement・SalesへTrust Center、Vendor Risk、Questionnaireをexpandする。", careerValue: "security compliance、GRC、PLG-to-enterprise、APAC market build、sales enablementを横断する可能性。", leader: { name: "Christina Cacioppo", role: "CEO / Founder", read: "security complianceの手作業をsoftware化し、trustを企業成長のoperating systemへ広げる。" },
  solutions: [{ name: "Compliance Automation", valueProp: "controlとevidenceを連携しframework運用を自動化。", url: "https://www.vanta.com/products/compliance-automation", competitors: "Drata、Secureframe、consulting。", differentiation: "広いintegrationとcontinuous monitoring。" }, { name: "Trust Center / Questionnaire", valueProp: "顧客へのsecurity証明と回答を高速化。", url: "https://www.vanta.com/products/trust-center", competitors: "SafeBase、Conveyor、manual portal。", differentiation: "内部control dataとcustomer assuranceを接続。" }, { name: "Third-Party Risk", valueProp: "vendor inventory、review、monitoringを統合。", url: "https://www.vanta.com/products/third-party-risk-management", competitors: "ServiceNow、OneTrust、Whistic。", differentiation: "compliance programと同じcontrol contextを使う。" }],
  fitTags: ["日本未進出", "Security", "GRC", "Trust", "APAC", "PLG", "Enterprise", "Partner"], comparisons: [{ arena: "Compliance", companies: ["Vanta", "Drata", "Secureframe"], why: "automation、framework、service" }, { arena: "GRC", companies: ["Vanta", "ServiceNow", "OneTrust"], why: "mid-market agilityとenterprise breadth" }, { arena: "Customer assurance", companies: ["Vanta", "SafeBase", "Conveyor"], why: "Trust Centerとquestionnaire" }],
});

const criblIntelligence: CompanyPublicIntelligence = buildPreEntryIntelligence({
  slug: "cribl", name: "Cribl", homepage: "https://cribl.io/", growthUrl: "https://cribl.io/blog/announcing-our-series-e/", careersUrl: "https://cribl.io/careers/", customersUrl: "https://cribl.io/customers/", trustUrl: "https://cribl.io/legal-and-privacy/", apacUrl: "https://docs.cribl.io/stream/cloud-regions/", externalUrl: "https://www.meti.go.jp/policy/netsecurity/mng_guide.html", linkedinUrl: "https://www.linkedin.com/company/cribl/",
  salesSnapshot: "Criblは、CISO・Security Operations・IT Operations・Observability teamに、log・metric・trace等のtelemetryを収集、加工、route、search、storeするData Engineを提供する会社。顧客が抱えるのは「SIEM・observability費用がingest量とともに膨らむ」「data sourceとdestinationのlock-inで移行できない」「security・IT・AI agent向けtelemetryが分断する」という3つの課題。pipeline最適化から入り、SIEM migration、data lake、search、edge collection、AI-ready telemetryへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2018年創業後4年未満でARR 1億ドルを突破し、2024年Series Eで35億ドル評価、累計6億ドル超を調達。Fortune 100の半数を顧客に持ち、CloudではSydney regionを提供するがJapan GTMは未確認。",
  verdict: "可能性は中。日本のtelemetry economicsと親和性は高いが、local partner・support・referenceが不足", entryNarrative: "CriblはARR 1億ドル超、Fortune 100の半数、35億ドル評価というEnterprise基盤を持ち、Sydneyのcloud regionも提供する。Splunk、Elastic、Datadog、cloud SIEMを大規模運用する日本企業には、ingest費用、migration、data sovereignty、tool choiceという明確な課題がある。一方、Japan・Tokyoの求人、法人、国内顧客事例、日本語site・support、SIer/MSSP partnerの公式発表は確認できない。technical productはremote saleも可能だが、Security・ITのmission-critical dataを扱うため、国内SE・partner・supportを置けるcommercial proofが進出条件になる。",
  headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密値ではない。", apacPresence: "Cribl.CloudでAsia Pacific (Sydney) regionを提供。APACの正式HQ・Japan teamは公式情報で確認できない。", productLanguage: "data planeとして日本のcloud・SIEMと接続可能だが、日本語UI・documentation・support、国内data source templateの同等性は未確認。",
  milestones: [{ year: "2018", label: "創業", detail: "Splunk経験者がtelemetry pipelineの選択肢を作るため創業。", source: "company" }, { year: "2020", label: "Cloud展開", detail: "usage型のcloud serviceを開始。", source: "company" }, { year: "2023", label: "ARR 1億ドル", detail: "4年未満で到達。", source: "growth" }, { year: "2024", label: "Series E", detail: "3.19億ドル、35億ドル評価。", source: "growth" }, { year: "2026", label: "AI Platform for Telemetry", detail: "humanとagent双方のtelemetry基盤へpositionを拡張。", source: "company" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "Nutanixはfirewall log volumeを50%削減し、ServiceNowやCox Automotive等はdata problemとcost・complexityを改善。共通点は、全部を高価なdestinationへ送る設計が持続しないこと。" }, { title: "製品の成り立ちから見る課題", body: "SIEM vendor内でobservability pipelineの制約を経験した創業者が、sourceとdestinationの間にvendor-neutralなcontrol layerを置く発想で開始。route・reduceからsearch・lakeへ拡張。" }, { title: "外部環境の要求から見る課題", body: "cloud、security tool、AI agentでtelemetry量は増える一方、企業には保存、detection、監査、data sovereigntyと費用の説明責任がある。全量ingestか削除かの二択を避けるarchitectureが必要。" }],
  narrative: [{ label: "背景", body: "security・IT data sourceが増え、SIEM・observabilityへのingest量と費用が予算を上回る。" }, { label: "課題", body: "使わないdataまでpremium destinationへ送り、migration・retention・new use caseのたびにvendorとpipelineを作り直す。" }, { label: "解決策", body: "一つのhigh-volume sourceでroute・reduce・enrichを導入し、ingest、query、retention、detection、運用工数を測る。" }, { label: "選定の理由", body: "Splunk Edge Processor、Elastic、Datadog、cloud-native pipeline、Kafkaとの比較で、destination choiceとreplayを保ちながら即時cost・flexibilityを出せる場合に選ばれる。" }],
  openingHook: "収集しているtelemetryのうち、実際にsearch・detectionへ使う割合と、使わないdataへ払う年間ingest費を把握していますか。", valueHypothesis: "対象sourceで送信volume、destination cost、query hit、retention、routing変更時間、detection coverageを測る。", objection: "Splunk・cloud・observability vendorの標準pipelineで十分。", reframe: "今のdestinationで動くかではなく、data量とtoolが変わってもchoice、replay、routing、cost controlを自社側に残せるかで比較する。",
  facts: [{ label: "ARR", value: "1億ドル超", detail: "2023年に4年未満で到達。", source: "growth" }, { label: "評価額", value: "35億ドル", detail: "2024年Series E。", source: "growth" }, { label: "調達", value: "累計6億ドル超", detail: "会社発表。", source: "growth" }, { label: "顧客", value: "Fortune 100の50%", detail: "会社発表。", source: "growth" }, { label: "APAC cloud", value: "Sydney", detail: "cloud regionを提供。", source: "apac" }, { label: "日本求人", value: "未確認", detail: "Japan・Tokyo求人なし。", source: "careers" }],
  customers: [{ company: "Nutanix", products: "Cribl Stream", outcome: "firewall log volumeを50%削減と会社事例で紹介。", implication: "ingest costとsignal qualityを同時に扱う。" }, { company: "ServiceNow", products: "Cribl", outcome: "data problemsを半減する事例を公開。", implication: "large enterpriseの運用標準化。" }, { company: "Reddit", products: "Cribl", outcome: "security data managementのstreamliningを公開。", implication: "high-scale digital nativeでのproof。" }],
  externalSignals: [{ label: "cybersecurity経営", value: "data説明責任", detail: "経営層はincident response、monitoring、supply chainを含むrisk管理を求められる。", caveat: "Cribl導入や特定architectureを義務づけない。" }, { label: "data sovereignty", value: "保存・移送設計", detail: "mission-critical telemetryではregion、retention、access、subprocessorを確認する必要。", caveat: "要件はdata種別と業界で異なる。" }],
  entryAssessment: {
    verdict: "進出可能性は中。Enterprise tractionは強いがJapan delivery ecosystemが未整備",
    factSignals: [{ title: "Enterprise scale", body: "ARR 1億ドル超、Fortune 100の半数、累計6億ドル超の資本は国際展開可能な規模。", sourceIds: ["growth"] }, { title: "APAC technical footprint", body: "Sydney cloud regionによりregional data hostingの入口がある。", sourceIds: ["apac"] }, { title: "日本のcost課題と親和", body: "SIEM・observabilityのingest増とtool migrationは大規模日本企業にも発生する。", sourceIds: ["customers", "external"] }, { title: "partner-led余地", body: "SIEM・MSSP・cloud migration案件と組み合わせ、direct team前にlocal partnerで検証できる。", sourceIds: ["company", "customers"] }],
    hurdles: [{ title: "国内proofがない", body: "Japan顧客事例、求人、office、country ownerを確認できない。", sourceIds: ["customers", "careers"] }, { title: "technical supportと日本語", body: "POC・architecture・incident時に日本語と国内時間帯で支援できる体制が未確認。", sourceIds: ["company", "apac"] }, { title: "partner ecosystem", body: "SIer、MSSP、Splunk/Elastic/Datadog partnerとのcommercial・delivery関係が必要。", sourceIds: ["customers"] }, { title: "incumbent機能との重複", body: "destination vendorもpipeline・archive・searchを拡張し、独立layerの追加complexityを正当化する必要。", sourceIds: ["company"] }],
    readinessConditions: [{ title: "Japan lighthouse account", body: "large enterpriseでcost・migration成果を公開。" }, { title: "local SE/support", body: "POC、architecture、supportを日本時間で提供。" }, { title: "MSSP/SI partner", body: "導入・managed service・co-sellを確立。" }, { title: "regional data readiness", body: "Sydney等のregionでdomestic requirementを満たす説明を整備。" }, { title: "repeatable economics", body: "日本pipeline、ACV、consumption、renewalがlocal podを支える。" }],
    watchSignals: ["Japan・Tokyo求人", "日本顧客事例", "国内SI/MSSP partner", "日本語site・training", "APAC sales/SEのJapan territory", "Japan event・user community"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "Security/IT architectとpractitionerへtechnical proofで入り、CISO・CIO・Financeへtelemetry economicsとtool choiceをbusiness case化するconsumption型Enterprise sale。", careerValue: "observability・security data、FinOps、SIEM migration、usage economics、partner ecosystemを横断する可能性。", leader: { name: "Clint Sharp", role: "CEO / Co-founder", read: "元practitionerとしてvendor lock-inとtelemetry costをfirst-principlesで解き、data engineへportfolioを拡張。" },
  solutions: [{ name: "Cribl Stream", valueProp: "telemetryをcollect・reduce・enrich・route。", url: "https://cribl.io/stream/", competitors: "Splunk Edge Processor、Kafka、Fluentd。", differentiation: "vendor-neutralなchoiceとreplay。" }, { name: "Cribl Edge", valueProp: "endpoint・edgeからdataをcollectしcontrol。", url: "https://cribl.io/edge/", competitors: "OpenTelemetry Collector、endpoint agent。", differentiation: "fleet管理とStream連携。" }, { name: "Cribl Search / Lake", valueProp: "dataを移動せずsearchし低costで保持。", url: "https://cribl.io/search/", competitors: "Splunk、Elastic、cloud data lake。", differentiation: "route・store・searchをmodularに選択。" }],
  fitTags: ["日本未進出", "Observability", "Security", "Telemetry", "Enterprise", "APAC", "Consumption", "Partner"], comparisons: [{ arena: "Telemetry pipeline", companies: ["Cribl", "Splunk", "OpenTelemetry"], why: "choice、processing、運用" }, { arena: "Observability", companies: ["Cribl", "Datadog", "Elastic"], why: "data layerとdestination" }, { arena: "Security data", companies: ["Cribl", "SIEM", "data lake"], why: "cost、retention、detection" }],
});

const writerIntelligence: CompanyPublicIntelligence = buildPreEntryIntelligence({
  slug: "writer", name: "Writer", homepage: "https://writer.com/", growthUrl: "https://writer.com/blog/series-c-funding-writer-press-release/", careersUrl: "https://writer.com/company/careers/", customersUrl: "https://writer.com/customers/", trustUrl: "https://writer.com/trust/", apacUrl: "https://writer.com/blog/writer-global-expansion-press-release/", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", linkedinUrl: "https://www.linkedin.com/company/getwriter/",
  salesSnapshot: "Writerは、CIO・Chief AI Officer・business leader・ITに、Palmyra LLM、Knowledge Graph、guardrail、agent builderを統合したenterprise agentic AI platformを提供する会社。顧客が抱えるのは「部門ごとにAI pilotが乱立する」「社内dataへ根拠付きで接続できない」「security・brand・policyを守りながらproduction workflowへ展開できない」という3つの課題。content・knowledge use caseから入り、customer service、financial research、healthcare、operations、全社AI operating modelへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2024年にSeries C 2億ドル・19億ドル評価、Fortune 500を含むhundreds of enterprise customersと平均9x ROIを会社発表。2025年にSingaporeへAPJ初のhubを置き専任VPを任命したがJapan office・求人は未確認。",
  verdict: "可能性は中。APJ投資とEnterprise顧客基盤は強いが、日本語・delivery・partner proofが不足", entryNarrative: "WriterはFortune 500を含むhundreds of enterprise customers、19億ドル評価、Palmyra・Knowledge Graph・guardrail・agent applicationを一体化したplatformを持つ。SingaporeにAPJ hubとregional leaderを置き、APJを明示的な成長地域としているため、日本は自然な次市場候補。一方、日本法人、Tokyo求人、国内顧客事例、日本語model・UI・supportの同等性、国内SI partnerは確認できない。Microsoft・Google・AWS・OpenAI・Anthropic・国内LLMとの競争も強く、日本で勝つにはvertical use caseと導入責任まで含むregional proofが必要。",
  headcount: "201〜500人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密値ではない。", apacPresence: "2025年にSingaporeへAPJ初の専任hubを開設し、VP Head of APJを任命。", productLanguage: "multi-model・full-stack AIは日本語dataも扱える可能性があるが、日本語UI・Palmyra品質・support・国内caseの公式同等性は未確認。",
  milestones: [{ year: "2020", label: "創業", detail: "enterprise向けlanguage AIとして開始。", source: "company" }, { year: "2023", label: "Series B", detail: "1億ドルを調達、NRR 150%超を発表。", source: "growth" }, { year: "2024", label: "Series C", detail: "2億ドル、19億ドル評価。", source: "growth" }, { year: "2025", label: "Singapore APJ hub", detail: "地域初の専任拠点とleaderを設置。", source: "apac" }, { year: "2026", label: "partner拡張", detail: "Enterprise AI delivery向けpartner programを展開。", source: "company" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "Mars、Vanguard、Salesforce、Uber等の公開利用は、文章生成単体ではなく、社内knowledge・business rule・agent actionをmission-critical workflowへ組み込み、全社でROIを出す課題を示す。" }, { title: "製品の成り立ちから見る課題", body: "localization・language技術の経験を起点に、Palmyra、graph-based RAG、guardrail、application layerを自社で統合。model APIだけではproduction品質・policy・workflowが閉じない課題を解く。" }, { title: "外部環境の要求から見る課題", body: "経営はAIの全社展開とROIを急ぐ一方、data leakage、hallucination、権限、説明責任、vendor concentrationを管理する必要がある。pilot数ではなく安全に動くworkflowを増やすoperating modelが必要。" }],
  narrative: [{ label: "背景", body: "各部門がAI toolとPoCを増やすが、model・data・prompt・policy・measurementが分断する。" }, { label: "課題", body: "demoは動いても社内dataへのgrounding、権限、guardrail、system action、ownerが揃わずproductionへ進まない。" }, { label: "解決策", body: "一つのhigh-value workflowでknowledge、guardrail、human approval、agent actionを設計し、時間、品質、exception、adoption、ROIを測る。" }, { label: "選定の理由", body: "Microsoft、Google、AWS、OpenAI、Anthropic、国内AI platformとの比較で、modelからapplication・governance・deliveryまで一体でtime-to-valueを出せる場合に選ばれる。" }],
  openingHook: "全社のAI PoCのうち、productionで毎週使われ、ownerとROIを説明できるworkflowは何件ありますか。", valueHypothesis: "対象workflowでcycle time、human review、quality、exception、active user、system action、財務効果を測る。", objection: "Microsoft Copilotと既存LLM/APIで十分。", reframe: "seat・model精度ではなく、社内data、policy、agent action、human approvalを含むmission-critical workflowを何週間で安全にproduction化できるかで比較する。",
  facts: [{ label: "Series C", value: "2億ドル", detail: "2024年。", source: "growth" }, { label: "評価額", value: "19億ドル", detail: "Series C時点。", source: "growth" }, { label: "顧客", value: "数百社", detail: "Fortune 500を含む。", source: "growth" }, { label: "顧客ROI", value: "平均9x", detail: "会社発表。", source: "growth" }, { label: "APJ拠点", value: "Singapore", detail: "専任hub・regional leader。", source: "apac" }, { label: "日本求人", value: "未確認", detail: "Japan・Tokyo求人なし。", source: "careers" }],
  customers: [{ company: "Vanguard", products: "Writer Platform", outcome: "enterprise knowledgeと生成AIを業務へ組み込む顧客として紹介。", implication: "regulated enterpriseのsecurity・quality要求。" }, { company: "Salesforce", products: "Writer", outcome: "workflowを加速した顧客・投資家として紹介。", implication: "AI企業自身でもhorizontal workflow需要。" }, { company: "Mars", products: "Writer", outcome: "global enterpriseのmission-critical workで利用。", implication: "function・region横断のexpand。" }],
  externalSignals: [{ label: "AI governance", value: "経営と運用", detail: "AI事業者ガイドラインはrisk、透明性、accountability、人間中心を求める。", caveat: "Writerの適合性や法的結論を示さない。" }, { label: "AI pilot fatigue", value: "production ROI", detail: "企業はPoC件数よりworkflow定着と財務効果を求める段階へ進む。", caveat: "ROIは対象業務・baseline・change managementで異なる。" }],
  entryAssessment: {
    verdict: "進出可能性は中。Singapore APJ hubは明確だがJapan固有のproduct-market proofが未確認",
    factSignals: [{ title: "APJを明示した投資", body: "Singaporeに初のAPJ hubとVP Head of APJを置き、regional expansionを公式発表。", sourceIds: ["apac"] }, { title: "Enterprise scaleと資本", body: "2億ドルSeries C、19億ドル評価、数百のlarge enterprise顧客はcountry expansionの基盤。", sourceIds: ["growth"] }, { title: "日本のAI課題と親和", body: "pilot乱立、data grounding、governance、ROIは国内大企業の共通論点。", sourceIds: ["company", "external"] }, { title: "partner leverage", body: "2026年にdelivery-oriented partner programを拡張し、日本SI経由で市場検証する選択肢がある。", sourceIds: ["company", "apac"] }],
    hurdles: [{ title: "Japan固有のproofがない", body: "国内顧客事例、office、求人、country ownerを確認できない。", sourceIds: ["customers", "careers"] }, { title: "日本語product quality", body: "日本語generation・retrieval・UI・support・vertical modelの同等性が未確認。", sourceIds: ["company"] }, { title: "hyperscaler・domestic競争", body: "Microsoft、Google、AWS、OpenAI、Anthropic、国内LLM・SIが既存relationshipとbundleを持つ。", sourceIds: ["company"] }, { title: "delivery capacity", body: "agentic workflowはsoftware saleだけでなくprocess redesign、integration、change managementが必要。", sourceIds: ["customers", "apac"] }],
    readinessConditions: [{ title: "Japan lighthouse customer", body: "規制・大企業でproduction ROIを公開。" }, { title: "日本語同等性", body: "model、RAG、UI、support、guardrailを主要workflowで検証。" }, { title: "local SI partner", body: "integration・change・managed deliveryを提供。" }, { title: "Japan pod", body: "AE、Solution、AI engineer、CSを専任coverage。" }, { title: "differentiated vertical", body: "financial、healthcare、retail等でbundle優位を超えるuse caseを確立。" }],
    watchSignals: ["Japan・Tokyo求人", "日本顧客事例", "日本語site・model評価", "国内SI/consulting partner", "Singapore APJ teamのJapan territory", "Tokyo AI leadership event"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "Chief AI Officer・CIOとbusiness executiveへhigh-value workflowから入り、Solution/AI engineer・partnerとproduction化し、departmentから全社platformへexpandする。", careerValue: "full-stack enterprise AI、agentic transformation、vertical solution、APJ country build、complex partner deliveryを扱う可能性。", leader: { name: "May Habib", role: "CEO / Co-founder", read: "language AIのdomain経験から、model単体ではなくenterprise production systemとしてfull stackを構築。" },
  solutions: [{ name: "Writer AI HQ / Agent Platform", valueProp: "enterprise agentをbuild・deploy・manage。", url: "https://writer.com/product/", competitors: "Microsoft Copilot Studio、Google Vertex AI、AWS Bedrock。", differentiation: "model・RAG・guardrail・applicationを統合。" }, { name: "Palmyra LLMs", valueProp: "enterprise・industry向け自社model family。", url: "https://writer.com/product/palmyra/", competitors: "OpenAI、Anthropic、Gemini、domestic LLM。", differentiation: "specialized modelとplatform統合。" }, { name: "Knowledge Graph / Guardrails", valueProp: "社内dataへのgroundingとpolicy・quality control。", url: "https://writer.com/product/knowledge-graph/", competitors: "Glean、RAG platform、AI gateway。", differentiation: "agent applicationと同一stack。" }],
  fitTags: ["日本未進出", "Enterprise AI", "Agentic AI", "APJ", "CIO", "Partner", "Vertical", "Transformation"], comparisons: [{ arena: "Enterprise AI", companies: ["Writer", "Microsoft", "Google", "AWS"], why: "stack、bundle、delivery" }, { arena: "Foundation model", companies: ["Palmyra", "OpenAI", "Anthropic", "domestic LLM"], why: "quality、cost、control、日本語" }, { arena: "Knowledge / Agent", companies: ["Writer", "Glean", "ServiceNow"], why: "retrieval、workflow、action" }],
});

export const preEntryWaveTwoIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  harvey: harveyIntelligence,
  clay: clayIntelligence,
  vanta: vantaIntelligence,
  cribl: criblIntelligence,
  writer: writerIntelligence,
};
