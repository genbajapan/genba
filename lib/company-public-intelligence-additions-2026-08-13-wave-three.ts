import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";

const checkedAt = "2026-08-13";
const securityExternalUrl = "https://www.meti.go.jp/policy/netsecurity/mng_guide.html";

type EnteredSeed = {
  slug: string;
  name: string;
  founded: string;
  jobUrl: string;
  officialUrl: string;
  customersUrl: string;
  financeUrl: string;
  role: string;
  category: string;
  buyer: string;
  problems: [string, string, string];
  origin: string;
  external: string;
  value: string;
  objection: string;
  reframe: string;
  headcount: string;
  japanPresence: string;
  japanSince: string;
  growth: string;
  facts: [string, string, string, string];
  customers: [string, string, string];
  solutions: [string, string, string];
  competitors: string;
  fit: string[];
  publicInfo?: { ticker: string; exchange: string; listedSince: string };
};

function entered(seed: EnteredSeed): CompanyPublicIntelligence {
  const profile: Profile = {
    checkedAt,
    slug: seed.slug,
    name: seed.name,
    jobUrl: seed.jobUrl,
    officialUrl: seed.officialUrl,
    customersUrl: seed.customersUrl,
    externalUrl: securityExternalUrl,
    financeUrl: seed.financeUrl,
    publicInfo: seed.publicInfo,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。${seed.value}へ提案を広げられる点が営業としての面白さ。`,
    growthSummary: seed.growth,
    ipoSummary: "非公開企業。IPO時期、日本売上、国内顧客数は未公表。global規模を日本territoryの達成可能性へ直接置き換えない。",
    milestones: [
      { year: seed.founded, label: "創業", detail: `${seed.category}の起点となる課題から創業。`, source: "company" },
      { year: "成長期", label: "製品拡張", detail: seed.origin, source: "company" },
      { year: "現在", label: "顧客・事業基盤", detail: seed.growth, source: "finance" },
      { year: seed.japanSince, label: "日本展開", detail: seed.japanPresence, source: "company" },
      { year: "2026.08", label: "日本向け採用", detail: `${seed.role}の公式求人を確認。`, source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}の公式事例から、導入目的は機能追加ではなく、${seed.problems[0]}状態を変え、${seed.value}を実現することにある。` },
      { title: "製品の成り立ちから見る課題", body: seed.origin },
      { title: "外部環境の要求から見る課題", body: seed.external },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}は、事業・system・stakeholderの増加により${seed.problems[0]}。` },
      { label: "課題", body: `${seed.problems[1]}うえ、${seed.problems[2]}ため、point solutionの追加だけでは投資効果が閉じない。` },
      { label: "解決策", body: `一つの高頻度use caseから${seed.category}を導入し、${seed.value}をbaselineと比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較で、time-to-value、運用負荷、governance、拡張性を同じ業務で上回る場合に選ばれる。` },
    ],
    openingHook: `${seed.problems[0]}ことで、年間どれだけの時間・risk・機会損失が発生しているか把握していますか。`,
    valueHypothesis: `${seed.value}を導入前後で測り、licenseではなくbusiness outcomeで投資判断する。`,
    objection: seed.objection,
    reframe: seed.reframe,
    facts: [
      { label: "グローバル規模", value: seed.headcount, detail: "会社公式または公式求人で確認できる範囲。", source: "finance" },
      { label: "顧客・利用", value: seed.facts[0], detail: "会社公式の顧客・会社情報。", source: "customers" },
      { label: "製品の現在地", value: seed.facts[1], detail: "会社公式の製品・事業情報。", source: "company" },
      { label: "日本拠点", value: seed.japanPresence, detail: "公式求人・会社情報で確認。", source: "company" },
      { label: "国内proof", value: seed.facts[2], detail: "公開された日本顧客・市場情報の範囲。", source: "customers" },
      { label: "現在の求人", value: seed.facts[3], detail: "2026年8月13日に公式求人を確認。", source: "job" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}の導入事例として公開。`, implication: `${seed.problems[0]}課題をbusiness outcomeへ変えるreference。` })),
    externalSignals: [
      { label: "経営課題", value: "DXと統制の同時実行", detail: seed.external, caveat: `${seed.name}の日本売上・個別効果を示す資料ではない。` },
      { label: "投資判断", value: "riskとoutcome", detail: "新技術の導入では運用責任、security、data、継続性、既存systemとの境界を含むbusiness caseが必要。", caveat: "具体要件は業界・data・利用方法で異なる。" },
    ],
    role: seed.role,
    organization: "日本teamでlocal pipelineを作り、SE・CS・partner・global productと顧客課題を往復する組織",
    careerValue: `${seed.category}の専門性、経営課題の定量化、日本GTM、partnerを含むcomplex enterprise saleを扱う経験。`,
    globalHeadcount: seed.headcount,
    japanPresence: seed.japanPresence,
    japanSince: seed.japanSince,
    solutions: seed.solutions.map((name) => ({ name, valueProp: seed.problems[0], url: seed.officialUrl, competitors: seed.competitors, differentiation: `${seed.category}としてdata・workflow・governanceを統合。` })),
    fitTags: seed.fit,
    comparisons: [
      { arena: seed.category, companies: [seed.name, ...seed.competitors.split("、").slice(0, 2)], why: "architecture、outcome、governance、delivery" },
      { arena: "Japan GTM", companies: [seed.name, "direct sale", "partner-led"], why: "pipeline、reference、local support、economics" },
    ],
  };
  return buildIntelligence(profile);
}

const enteredSeeds: EnteredSeed[] = [
  {
    slug: "cato-networks", name: "Cato Networks", founded: "2015", jobUrl: "https://www.catonetworks.com/careers/careers-post/4746809101/regional-sales-director-japan", officialUrl: "https://www.catonetworks.com/ja/", customersUrl: "https://www.catonetworks.com/customers/", financeUrl: "https://www.catonetworks.com/careers/", role: "Regional Sales DirectorとしてJapanのpipeline、forecast、full sales cycle、existing customer、partner relationshipを担う", category: "SASE Cloud Platform", buyer: "CIO・CISO・Network・Security・Infrastructure", problems: ["networkとsecurityのappliance・carrier・policyが拠点ごとに分断する", "cloud・remote・AI利用の追加で運用costとattack surfaceが増え続ける", "性能・security・user experienceを別teamと別KPIで判断している"], origin: "networkingとsecurityを単一のcloud-native backboneへ収束する発想から始まり、SD-WAN、SSE、ZTNA、DLP、XDR、AI securityへ拡張。", external: "cloud、hybrid work、third party、AI applicationの利用拡大により、企業は接続速度だけでなくdata protection、zero trust、incident visibilityを一つの経営riskとして管理する必要がある。", value: "vendor数、network cost、incident対応、policy変更時間、application performanceを改善", objection: "既存のfirewall、SD-WAN、SSE vendorを組み合わせれば十分。", reframe: "個別機能ではなく、global backbone、single policy、運用人員、障害切り分け、更新、全拠点TCOを一つのarchitectureで比較する。", headcount: "1,500人超", japanPresence: "Cato Networks株式会社 / Tokyo office", japanSince: "2020年に日本法人設立", growth: "公式careerで資金調達10億ドル超、2025年ARR 3.5億ドル超・前年比43%成長、4,000社超のenterprise customer、1,500人超を案内。", facts: ["4,000社超", "Cato SASE Cloud Platform", "日本法人・東京/大阪PoP・国内partner", "Regional Sales Director - Japan"], customers: ["Swissport", "Carlsberg Group", "RingCentral"], solutions: ["Cato SASE Cloud Platform", "Cato SSE 360", "Cato Managed XDR"], competitors: "Palo Alto Networks、Zscaler、Cisco", fit: ["SASE", "Network Security", "CISO", "Channel", "Enterprise", "Japan GTM"]
  },
  {
    slug: "patsnap", name: "Patsnap", founded: "2007", jobUrl: "https://jobs.lever.co/patsnap/0875a720-5be3-41de-9dd9-d989618bfb53", officialUrl: "https://www.patsnap.com/", customersUrl: "https://www.patsnap.com/customers", financeUrl: "https://www.patsnap.com/resources/blog/patsnap-surpasses-us100-million-in-annual-recurring-revenue/", role: "Channel Managerとして日本のIP channelをend-to-endで管理し、既存partner強化、新規reseller採用、enablement、pipeline process、growthを担う", category: "Innovation Intelligence and R&D AI Platform", buyer: "R&D・IP・Product Strategy・Competitive Intelligence・Corporate Planning", problems: ["patent・paper・compound・market dataが分断しtechnology判断に時間がかかる", "専門検索とlandscape分析が一部のexpertへ属人化する", "AI生成のresearch・draftをsourceと検証可能性付きで業務へ組み込めない"], origin: "patent analyticsから始まり、science・company・market dataとdomain-specific AI agentを統合し、IP、R&D、life sciences、materialsのworkflowへ拡張。", external: "研究開発費が大きくtechnology cycleが短い企業ほど、知財riskを避けながらwhite space、競合動向、共同研究候補を早く見つけ、限られたR&D資源を配分する必要がある。", value: "research time、FTO・landscape cycle、重複調査、idea-to-decision、partner発見を改善", objection: "既存の特許database、Google Patents、専門調査会社で十分。", reframe: "収録件数だけでなく、patent・science・company dataの接続、AI回答のsource、collaboration、repeatable workflow、R&D decisionまでの時間で比較する。", headcount: "700人超（2021年公式発表）", japanPresence: "Tokyo office / Japan commercial team", japanSince: "Tokyo officeを公式拠点一覧で確認", growth: "2024年にARR 1億ドル、前年比20%成長、50カ国・12,000のIP/R&D team、life sciences/materials製品の3年CAGR 50%超を公式発表。", facts: ["12,000 IP/R&D teams", "Innovation Intelligence・Eureka AI", "Tokyo officeと日本企業事例", "Channel Manager"], customers: ["Dyson", "Spotify", "Oxford University Innovation"], solutions: ["Patsnap Analytics", "Patsnap Eureka", "Patsnap Bio / Chemical"], competitors: "Clarivate、LexisNexis、Derwent・専門調査", fit: ["R&D", "IP", "Innovation Intelligence", "AI", "Channel", "Enterprise"]
  },
  {
    slug: "netskope", name: "Netskope", founded: "2012", jobUrl: "https://www.netskope.com/company/careers/open-positions/?gh_jid=7493456", officialUrl: "https://www.netskope.com/jp/", customersUrl: "https://www.netskope.com/resources/case-studies", financeUrl: "https://www.netskope.com/jp/company/careers", role: "Regional Sales Managerとして日本のenterprise accountを開拓し、SE・channel・leadershipとcomplex cloud security saleを進める", category: "Netskope One SSE / SASE Platform", buyer: "CISO・CIO・Network・Security・Data Protection", problems: ["user・data・applicationがcloud・web・private app・AIへ広がり通信の文脈が見えない", "networkとsecurityのpoint productが増えpolicy・incident・user experienceが分断する", "dataを止めずに生成AIとSaaS利用を許可するgranular controlが足りない"], origin: "cloud applicationの可視化とdata protectionを起点にCASBからSSE、SASE、ZTNA、DLP、DSPM、AI securityへ拡張し、NewEdge network上で統合。", external: "企業はSaaSと生成AIを止めずに活用しながら、personal data、confidential data、third party access、shadow AIをrisk-basedで制御し説明する必要がある。", value: "vendor数、policy運用、data incident、remote access、latency、helpdesk負荷を改善", objection: "既存firewall、VPN、Microsoft・cloud providerのsecurityで十分。", reframe: "bundle価格ではなく、inline visibility、data context、application control、private access、network performance、運用統合を実trafficで比較する。", headcount: "約3,000人", japanPresence: "Netskope Japan / Tokyo office", japanSince: "日本officeを公式careerで確認", growth: "公式careerは約3,000人のteamと日本を含むglobal officeを案内。2026年の日本向けRegional Sales Manager求人を確認。", facts: ["約3,000人規模", "Netskope One・NewEdge", "日本officeと国内partner ecosystem", "Regional Sales Manager, Japan"], customers: ["Prologis", "Red Sea Global", "National Life Group"], solutions: ["Netskope One SSE", "Netskope One SASE", "Netskope One DLP"], competitors: "Zscaler、Palo Alto Networks、Cisco", fit: ["SSE", "SASE", "Data Security", "Zero Trust", "CISO", "Enterprise"]
  },
  {
    slug: "mambu", name: "Mambu", founded: "2011", jobUrl: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job?in_iframe=1", officialUrl: "https://mambu.com/en", customersUrl: "https://mambu.com/en/customers", financeUrl: "https://cloud.mambu.com/hubfs/2026/Website/Modern_Slavery_Statement_-_2025.pdf", role: "Senior Account Executive (Channel)としてJapanのreseller portfolio経由でNew ACV、partner採用・enablement、共同GTM、complex cycleを担う", category: "Composable SaaS Cloud Banking Platform", buyer: "Banking CIO・Digital・Product・Operations・Risk・Finance", problems: ["legacy coreが商品変更・integration・地域展開の速度を制約する", "lending・deposit・payment機能を大規模一括更改しなければ変えられない", "regulatory controlとcloud deliveryを保ちながら段階migrationできない"], origin: "microfinance向けcloud coreから始まり、lending、deposit、payments、process orchestration、ecosystem integrationをcomposable SaaSとして提供。", external: "金融機関はcustomer expectation、FinTech競争、regulation、cost圧力の中で、24/7 reliabilityを守りながら商品投入とcore modernizationを同時に進める必要がある。", value: "product launch time、legacy cost、API integration、migration risk、operational resilienceを改善", objection: "既存core vendorのupgradeか内製modernizationで十分。", reframe: "全置換か維持かではなく、一product・segmentからの段階migration、configuration速度、API ecosystem、operational risk、長期TCOで比較する。", headcount: "551人（2025年10月末）", japanPresence: "JP-Remote / Employee of Record", japanSince: "2026年にJapan EOR求人を確認", growth: "公式サイトは230M end users、500M+ API calls/day、65+ countries、450+ partnersを案内。法定statementは2025年10月末551人を開示。", facts: ["230M end users / 65+ countries", "Composable cloud core banking", "Japan EORのchannel求人", "Senior Account Executive (Channel)"], customers: ["BancoEstado", "OakNorth", "Western Union"], solutions: ["Mambu Core", "Mambu Process Orchestrator", "Mambu Payments"], competitors: "Temenos、Thought Machine、既存core・内製", fit: ["FinTech", "Core Banking", "SaaS", "Channel", "Enterprise", "Japan Build"]
  },
  {
    slug: "nice", name: "NiCE", founded: "1986", jobUrl: "https://job-boards.eu.greenhouse.io/nice/jobs/4661611101", officialUrl: "https://www.nice.com/", customersUrl: "https://www.nice.com/resources", financeUrl: "https://www.nice.com/company/investors", role: "Account ExecutiveとしてJapan territoryのnew logo、competitive displacement、C-level relationship、multi-year plan、partner・presales orchestrationを担う", category: "AI-Powered CX and Interaction Platform", buyer: "Customer Service・Contact Center・CX・IT・Digital・Risk", problems: ["voice・digital・bot・agent・quality dataがchannelとvendorごとに分断する", "customer volumeとexpectationが増えてもagent productivityとservice qualityを両立できない", "AI automationの回答品質・handoff・compliance・ROIを継続管理できない"], origin: "interaction recordingとanalyticsから始まり、workforce engagement、omnichannel CCaaS、AI routing・agent assist・automationをCXoneへ統合。Actimizeではfinancial crimeも展開。", external: "customer serviceには人手不足と24/7 digital対応への要求がある一方、AIの誤答、personal data、recording、accessibility、human escalationへの説明責任も高まる。", value: "containment、AHT、FCR、quality、agent ramp、customer satisfaction、cost-to-serveを改善", objection: "既存PBX・CRM・BPOと追加のAI botで十分。", reframe: "channel数ではなく、interaction data、routing、workforce、quality、AI、human handoffを同じKPIとgovernanceで改善できるかを比較する。", headcount: "8,500人超", japanPresence: "Japan - Tokyo / NiCE-FLEX", japanSince: "日本のlocal teamとTokyo求人を公式確認", growth: "公式求人は25,000+ global businesses、Fortune 100の85社、120M超のdaily customer interactions、3B+ financial transactions、8,500人超・30カ国超を案内。", facts: ["25,000+ global businesses", "CXone・Enlighten AI・Actimize", "TokyoのAE・presales求人", "Account Executive, Japan"], customers: ["County of San Diego", "Danone", "Marriott"], solutions: ["NiCE CXone", "NiCE Enlighten AI", "NiCE Actimize"], competitors: "Genesys、Five9、Amazon Connect", fit: ["CX", "CCaaS", "AI", "Enterprise", "Value Selling", "Japan GTM"], publicInfo: { ticker: "NICE", exchange: "NASDAQ / TASE", listedSince: "1991年" }
  },
];

type PreSeed = {
  slug: string;
  name: string;
  homepage: string;
  growthUrl: string;
  careers: string;
  customersUrl: string;
  trust: string;
  apac: string;
  linkedin: string;
  category: string;
  buyer: string;
  problems: [string, string, string];
  origin: string;
  growth: string;
  verdict: string;
  headcount: string;
  headcountDetail: string;
  apacText: string;
  language: string;
  customers: [string, string, string];
  solutions: [string, string, string];
  competitors: string;
  fit: string[];
};

function preEntry(seed: PreSeed): CompanyPublicIntelligence {
  const assessment: JapanEntryAssessment = {
    verdict: seed.verdict,
    factSignals: [
      { title: "事業規模と成長", body: seed.growth, sourceIds: ["growth"] },
      { title: "APAC・globalへの足場", body: seed.apacText, sourceIds: ["apac", "careers"] },
      { title: "日本市場との課題親和性", body: `${seed.buyer}が抱える${seed.problems[0]}課題は日本企業にも存在する。`, sourceIds: ["company", "external"] },
      { title: "global customer proof", body: `${seed.customers.join("、")}などの公式事例があり、categoryの価値検証は進んでいる。`, sourceIds: ["customers"] },
    ],
    hurdles: [
      { title: "Japan固有の需要証明がない", body: "日本国内の顧客事例、Japan ARR、qualified pipeline、renewalの公式値を確認できない。", sourceIds: ["customers", "growth"] },
      { title: "日本語とproduct readiness", body: `${seed.language} 契約、security資料、supportの日本語同等性も未確認。`, sourceIds: ["company", "trust"] },
      { title: "local delivery体制", body: "Japan・Tokyo office、country leader、専任AE・SE・CS、国内partnerを公式career・拠点情報で確認できない。", sourceIds: ["careers", "apac"] },
      { title: "既存vendorとの競争", body: `${seed.competitors}が既存relationshipとbundleを持ち、追加platformのTCOを正当化する必要がある。`, sourceIds: ["company"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse customer", body: "国内顧客でproduction利用、renewal、定量成果を公開する。" },
      { title: "日本語・product readiness", body: "日本語UI、support、security、主要use caseの品質を証明する。" },
      { title: "local partner", body: "国内SI・consulting・MSSP等のdeliveryとco-sellを確立する。" },
      { title: "専任Japan pod", body: "AEだけでなくSE・CS・Marketing・Legal/Securityを日本時間でcoverする。" },
      { title: "repeatable economics", body: "Japan pipeline、ACV、cycle、retentionがlocal固定費を継続的に支える。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本語公式site・support", "国内顧客事例", "Japan country leader・法人", "国内partner発表", "APAC teamのJapan territory表記"],
  };

  return buildPreEntryIntelligence({
    checkedAt,
    slug: seed.slug,
    name: seed.name,
    homepage: seed.homepage,
    growthUrl: seed.growthUrl,
    careersUrl: seed.careers,
    customersUrl: seed.customersUrl,
    trustUrl: seed.trust,
    apacUrl: seed.apac,
    externalUrl: securityExternalUrl,
    linkedinUrl: seed.linkedin,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。現時点でJapan求人・拠点は確認できないため、将来の進出条件を観測する。`,
    growthSummary: seed.growth,
    verdict: seed.verdict,
    entryNarrative: `${seed.growth} ${seed.apacText} 一方、日本法人、Tokyo office、Japan求人、日本国内の顧客事例は確認できない。global tractionだけで進出時期は断定せず、国内lighthouse customer、local partner、日本語・product readiness、専任delivery、repeatable economicsを成立条件として観測する。`,
    headcount: seed.headcount,
    headcountDetail: seed.headcountDetail,
    apacPresence: seed.apacText,
    productLanguage: seed.language,
    milestones: [
      { year: "創業期", label: "category起点", detail: seed.origin, source: "company" },
      { year: "成長期", label: "顧客拡大", detail: seed.growth, source: "growth" },
      { year: "現在", label: "platform化", detail: `${seed.category}として複数workflowを統合。`, source: "company" },
      { year: "現在", label: "APAC・地域動向", detail: seed.apacText, source: "apac" },
      { year: "2026.08", label: "Japan観測", detail: "Japan法人・拠点・求人を確認できず。", source: "apac" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}などの公式事例は、point tool追加ではなく${seed.problems[0]}課題を解き、業務成果へつなげる目的を示す。` },
      { title: "製品の成り立ちから見る課題", body: seed.origin },
      { title: "外部環境の要求から見る課題", body: "SaaS、AI、hybrid workの拡大により企業は生産性を上げる一方、identity、data、privacy、security、human reviewへの説明責任も負う。" },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}のidentity・data・tool・workflowが増え、判断とexecutionが分断する。` },
      { label: "課題", body: `${seed.problems[0]}うえ、${seed.problems[1]}、${seed.problems[2]}。` },
      { label: "解決策", body: `${seed.category}を一つの高頻度use caseへ導入し、時間、品質、risk、costをbaseline比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較でidentity、data、workflow、governance、time-to-valueを一体化できる場合に選ばれる。` },
    ],
    openingHook: `${seed.problems[0]}ことで失う時間・機会・riskを、現在どのKPIで把握していますか。`,
    valueHypothesis: "一つのuse caseでmanual time、adoption、incident、helpdesk、risk、costを測る。",
    objection: `${seed.competitors}で十分。`,
    reframe: "機能数ではなく、user experience、identity・data context、policy、deployment、measurementまでの一貫性と運用TCOで比較する。",
    facts: [
      { label: "会社規模", value: seed.headcount, detail: seed.headcountDetail, source: "growth" },
      { label: "成長", value: seed.growth.slice(0, 48), detail: seed.growth, source: "growth" },
      { label: "APAC・地域", value: seed.apacText.slice(0, 42), detail: seed.apacText, source: "apac" },
      { label: "顧客proof", value: seed.customers[0], detail: `${seed.customers.join("、")}を公式情報で確認。`, source: "company" },
      { label: "日本提供", value: "一部接点あり・同等性未確認", detail: seed.language, source: "company" },
      { label: "日本求人", value: "0件確認", detail: "Japan・Tokyo勤務地または担当市場の求人を公式careerで確認できない。", source: "careers" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}の公式customer proofとして公開。`, implication: `${seed.problems[0]}課題をbusiness outcomeへ変えるreference。` })),
    externalSignals: [
      { label: "日本市場", value: "生産性とgovernance", detail: "人手不足とAI活用の拡大でautomationとcontrolを同時に求める。", caveat: `${seed.name}の日本進出決定や個別効果を示さない。` },
      { label: "security責任", value: "identity・data・access", detail: "SaaSとAIを業務判断へ使うほどuser、device、data、目的、権限、human reviewが重要になる。", caveat: "具体要件は業界・data・利用方法で異なる。" },
    ],
    entryAssessment: assessment,
    sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
    salesMotion: `${seed.buyer}へcategory problemを啓蒙し、一use caseのproofからteam・region・workflowへexpandするEnterprise/PLG hybrid sale。`,
    careerValue: `${seed.category}のcategory creation、APAC market development、security governance、partner-led Japan entryを扱う可能性。`,
    leader: { name: "公式Leadership参照", role: "CEO / Executive Team", read: "創業課題からplatformとglobal GTMへ拡張。Japan投資の意思決定者・ownerは未確認。" },
    solutions: seed.solutions.map((name) => ({ name, valueProp: seed.problems[0], url: seed.homepage, competitors: seed.competitors, differentiation: `${seed.category}としてidentity・data・workflowを統合。` })),
    fitTags: ["日本未進出", ...seed.fit],
    comparisons: [
      { arena: seed.category, companies: [seed.name, ...seed.competitors.split("、").slice(0, 2)], why: "identity、data、workflow、delivery" },
      { arena: "Japan entry", companies: [seed.name, "global coverage", "local partner"], why: "顧客proof、language、economics" },
    ],
  });
}

const preSeeds: PreSeed[] = [
  {
    slug: "island", name: "Island", homepage: "https://www.island.io/", growthUrl: "https://www.island.io/about", careers: "https://www.island.io/careers", customersUrl: "https://www.island.io/customers", trust: "https://www.island.io/trust", apac: "https://www.island.io/press/island-announces-participation-of-singapore-based-global-investor-edbi", linkedin: "https://www.linkedin.com/company/island-io/", category: "Enterprise Browser and Secure Workspace Platform", buyer: "CIO・CISO・IT・Security・Digital Workplace", problems: ["SaaS・web app上のdata controlがbrowserの外側のagentとpoint toolへ分断する", "BYOD・contractor・M&A userへVDIやmanaged deviceを配るとcostとuser frictionが増える", "AI・copy/paste・download・session・private app accessを同じcontextで制御できない"], origin: "workの中心であるbrowserにsecurity、IT、network、data protection、application accessを組み込む発想からEnterprise Browser categoryを創出。", growth: "公式aboutは累計7.5億ドル調達を案内。2024年Series Dは30億ドル評価で、SingaporeのEDBI参加とAPAC拡張意向を公式発表。", verdict: "進出可能性は中。APAC拡張意向は明確だが、local customer・office・delivery proofは未確認", headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。", apacText: "2024年にSingaporeのEDBI参加を発表し、APACでcustomer base・partner・operationsを広げる意向を表明。一方、公式aboutのofficeはDallas・London・Tel AvivでJapanなし。", language: "日本語UI、support、policy template、data residency、security・legal資料の同等性は未確認。", customers: ["Swiss Life", "The Bank of Marion", "ED&F Man"], solutions: ["Island Enterprise Browser", "Island Enterprise AI", "Island Enterprise Network"], competitors: "Google Chrome Enterprise、Microsoft Edge for Business、Palo Alto Prisma Access Browser", fit: ["Enterprise Browser", "Zero Trust", "DLP", "BYOD", "APAC", "Category Creation"]
  },
  {
    slug: "1password", name: "1Password", homepage: "https://1password.com/jp/", growthUrl: "https://1password.com/press", careers: "https://jobs.ashbyhq.com/1password", customersUrl: "https://1password.com/customer-stories", trust: "https://1password.com/security", apac: "https://1password.com/jp/partners", linkedin: "https://www.linkedin.com/company/1password/", category: "Unified Access Management and Identity Security Platform", buyer: "CISO・CIO・IT・Security・Identity・Developer Platform", problems: ["password・SSO外application・device・SaaS・AI agentのidentity contextが分断する", "security policyを強めるほどemployeeがworkaroundを作りproductivityが落ちる", "BYODとunmanaged applicationへのaccessをidentity・device trust・credentialで一貫制御できない"], origin: "human-friendlyなpassword managerから始まり、enterprise password、secrets、device trust、SaaS management、unified access managementへ拡張。", growth: "公式pressはARR 4億ドル超、180,000社超、team 1,000人超を案内。2022年には6.2億ドル調達・68億ドル評価を公式発表。", verdict: "進出可能性は低〜中。日本語product接点はあるが、Japan commercial・delivery投資の公式signalは弱い", headcount: "1,000人超", headcountDetail: "公式newsroomのat-a-glance。", apacText: "日本語siteと日本語partner pageはあるが、公式careerの公開求人は主にUS・Canada等で、Japan・Tokyo求人と国内officeを確認できない。", language: "日本語siteとconsumer/product localizationは確認できるが、enterprise sales、support、security review、contract、partner deliveryの国内同等性は未確認。", customers: ["DigitalOcean", "Asana", "Canva"], solutions: ["1Password Enterprise Password Manager", "1Password Device Trust", "1Password SaaS Manager"], competitors: "LastPass、Bitwarden、Okta・Microsoft Entra bundle", fit: ["Identity Security", "Password", "Device Trust", "SaaS Governance", "PLG", "Enterprise"]
  },
];

export const additions20260813WaveThreeIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  ...Object.fromEntries(enteredSeeds.map((seed) => [seed.slug, entered(seed)])),
  ...Object.fromEntries(preSeeds.map((seed) => [seed.slug, preEntry(seed)])),
};
