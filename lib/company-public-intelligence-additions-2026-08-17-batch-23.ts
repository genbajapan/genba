import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-17";
const securityExternalUrl = "https://www.ipa.go.jp/security/10threats/10threats2026.html";
const privacyExternalUrl = "https://www.ppc.go.jp/personalinfo/";
const dxExternalUrl = "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html";
const economicSecurityUrl = "https://www.meti.go.jp/policy/economy/economic_security/";

type EnteredSeed = {
  slug: string;
  name: string;
  founded: string;
  jobUrl: string;
  officialUrl: string;
  customersUrl: string;
  financeUrl: string;
  externalUrl: string;
  role: string;
  category: string;
  buyer: string;
  departments: string;
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
    externalUrl: seed.externalUrl,
    financeUrl: seed.financeUrl,
    publicInfo: seed.publicInfo,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。${seed.departments}へ入り、${seed.value}へ提案を広げられる点が営業としての面白さ。`,
    growthSummary: seed.growth,
    ipoSummary: "非公開企業。IPO時期、日本売上、国内顧客数、Japan seller達成率は公表されていない。",
    milestones: [
      { year: seed.founded, label: "創業", detail: `${seed.category}の起点となる課題から創業。`, source: "company" },
      { year: "成長期", label: "製品拡張", detail: seed.origin, source: "company" },
      { year: "現在", label: "顧客・事業基盤", detail: seed.growth, source: "finance" },
      { year: seed.japanSince, label: "日本展開", detail: seed.japanPresence, source: "company" },
      { year: "2026.08", label: "日本向け採用", detail: `${seed.role}の公式求人を確認。`, source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}等の公式情報から、導入目的は機能追加ではなく、${seed.problems[0]}を解消し、${seed.value}を実現することにある。` },
      { title: "製品の成り立ちから見る課題", body: seed.origin },
      { title: "外部環境の要求から見る課題", body: seed.external },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}は、事業・data・system・stakeholderの増加により${seed.problems[0]}。` },
      { label: "課題", body: `${seed.problems[1]}うえ、${seed.problems[2]}ため、point solutionの追加だけでは投資効果が閉じない。` },
      { label: "解決策", body: `一つの高頻度use caseから${seed.category}を導入し、${seed.value}をbaselineと比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較で、time-to-value、運用負荷、governance、拡張性を同じ業務で上回る場合に選ばれる。` },
    ],
    openingHook: `${seed.problems[0]}ことで、年間どれだけの時間・risk・機会損失が発生しているか把握していますか。`,
    valueHypothesis: `${seed.value}を導入前後で測り、license価格ではなくbusiness outcomeで投資判断する。`,
    objection: seed.objection,
    reframe: seed.reframe,
    facts: [
      { label: "グローバル規模", value: seed.headcount, detail: "会社公式または公開企業ページの規模range。厳密な現員数ではない場合がある。", source: "finance" },
      { label: "顧客・利用", value: seed.facts[0], detail: "会社公式の顧客・会社情報。", source: "customers" },
      { label: "製品の現在地", value: seed.facts[1], detail: "会社公式の製品・事業情報。", source: "company" },
      { label: "日本拠点", value: seed.japanPresence, detail: "公式求人・会社情報で確認。", source: "company" },
      { label: "国内proof", value: seed.facts[2], detail: "公開された日本顧客・市場情報の範囲。", source: "customers" },
      { label: "現在の求人", value: seed.facts[3], detail: `${seed.role}を公式採用ページで確認。`, source: "job" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}を業務へ導入した公式情報を公開。`, implication: `${seed.value}をbuyerへ具体化するreference。` })),
    externalSignals: [
      { label: "日本市場の外部要求", value: "成果と統制の両立", detail: seed.external, caveat: `${seed.name}の効果や個別適合性を直接示すものではない。` },
      { label: "投資判断", value: "business outcomeで検証", detail: "導入速度だけでなく、risk、運用責任、定着、財務効果を同じuse caseで確認する必要がある。", caveat: "要件と成果は企業・業界・既存環境で異なる。" },
    ],
    role: seed.role,
    organization: `${seed.category}の専門家がProduct、Engineering、SE、CS、Partnerと連携し、複雑な顧客課題を解くglobal organization。`,
    careerValue: `${seed.category}、日本GTM、executive business case、partner・technical collaborationを横断する経験。`,
    globalHeadcount: seed.headcount,
    japanPresence: seed.japanPresence,
    japanSince: seed.japanSince,
    solutions: seed.solutions.map((name) => ({ name, valueProp: `${seed.problems[0]}課題を${seed.category}で解消。`, url: seed.officialUrl, competitors: seed.competitors, differentiation: `${seed.origin}という製品思想と統合運用。` })),
    fitTags: seed.fit,
    comparisons: [
      { arena: seed.category, companies: [seed.name, ...seed.competitors.split("、").slice(0, 2)], why: "機能、運用model、導入速度、ecosystem" },
      { arena: "既存標準・内製", companies: [seed.name, "既存suite", "内製"], why: "TCO、control、time-to-value" },
    ],
  };
  return buildIntelligence(profile);
}

const enteredSeeds: EnteredSeed[] = [
  {
    slug: "tanium", name: "Tanium", founded: "2007", jobUrl: "https://job-boards.greenhouse.io/tanium/jobs/6650305", officialUrl: "https://www.tanium.com/", customersUrl: "https://www.tanium.com/customers/", financeUrl: "https://www.tanium.com/about-us/", externalUrl: securityExternalUrl,
    role: "Director of Strategic Accountsとして日本の大手戦略顧客でaccount plan、pipeline、partner、複数年dealを主導する", category: "Autonomous IT・Endpoint Management and Security Platform", buyer: "CIO・CISO・IT Operations・Endpoint・Security Operations", departments: "IT・SecurityからRisk、Finance、Procurement、経営層", problems: ["endpointの資産・状態・脆弱性がtoolごとに分断しreal timeで見えない", "patch・software配布・threat responseがteamとtoolをまたぎ遅れる", "AI・infrastructure拡大で増える資産とriskを同じdataで優先順位化できない"], origin: "大規模endpointへ数秒で質問しactionできるリアルタイムarchitectureから始まり、asset、patch、exposure、performance、threat hunting、Autonomous ITへ拡張。", external: "ランサムウェア、supply-chain attack、未管理資産、脆弱性の悪用に対し、企業は資産把握から修正・復旧までの時間と説明責任を同時に短縮する必要がある。", value: "asset coverage、patch latency、critical exposure、MTTR、tool costを改善", objection: "Microsoft、ServiceNow、security stackの既存機能で十分。", reframe: "機能数ではなく、未管理資産、data freshness、実行までの時間、tool consolidation、大規模障害時の復旧を同じendpoint estateで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Tanium Japan / Tokyo・Osakaを含む国内採用", japanSince: "日本法人で継続展開", growth: "Forbes Cloud 100に10年連続選出。公式ATSで日本のStrategic Accounts、Customer Success、Value Engineering、Supportなど複数roleを確認。日本単体の売上・顧客数は非公開。", facts: ["JLL・ABB・Whirlpool等の事例", "Autonomous IT / real-time endpoint intelligence", "HIS等の日本事例を公開", "Director of Strategic Accounts"], customers: ["ABB", "Whirlpool", "JLL"], solutions: ["Tanium Autonomous IT Platform", "Tanium Endpoint Management", "Tanium Security Operations"], competitors: "Microsoft Intune・Defender、CrowdStrike、ServiceNow、HCL BigFix", fit: ["Autonomous IT", "Endpoint", "Cybersecurity", "Strategic Accounts", "Enterprise", "Japan"],
  },
  {
    slug: "sayari", name: "Sayari", founded: "2015", jobUrl: "https://job-boards.greenhouse.io/sayari/jobs/4241987009", officialUrl: "https://sayari.com/", customersUrl: "https://sayari.com/resources/case-studies/", financeUrl: "https://sayari.com/company/", externalUrl: economicSecurityUrl,
    role: "Enterprise Account ExecutiveとしてJapanの大手commercial accountでadoption、renewal、upsell・cross-sell、forecastを持つ", category: "Economic Security・Supply Chain and Commercial Risk Intelligence Platform", buyer: "Chief Compliance Officer・Supply Chain・Procurement・Trade Compliance・Risk", departments: "ComplianceからProcurement、Supply Chain、Legal、Risk、Data、経営層", problems: ["supplier・取引先の実質所有者とsub-tier exposureが複数の法域・言語・データに分断する", "sanctions・forced labor・export controlの確認がlist matchと手作業に偏る", "AIが出したリスク判断の根拠を原始sourceまで追跡できない"], origin: "多言語の企業登記・trade・ownership dataをentity graphへ解決する基盤から、Map、Graph、Screening、Commercial World Model、agentic orchestrationへ拡張。", external: "経済安全保障、経済制裁、人権due diligence、supply-chain resilienceの要請により、企業は直接取引先だけでなく所有・際の取引・sub-tierを説明できる必要がある。", value: "risk discovery time、entity resolution、manual review、supplier visibility、false positiveを改善", objection: "既存KYC・credit・sanctions databaseとconsultingで十分。", reframe: "list coverageではなく、primary-sourceへの追跡、ownership traversal、trade relation、sub-tier、調査時間、auditabilityを同じcaseで比較する。", headcount: "201〜500人規模", japanPresence: "Tokyo office / Japan Commercial Enterprise team", japanSince: "Tokyo officeとJapan専任採用を確認", growth: "117億件超のprimary-source records、250超jurisdictions、35カ国超で数千人が利用と公式求人で説明。Honeywell、U.S. CBP、HMRC等のproofを持ち、TokyoでAE・Client Director・FDEを同時採用。", facts: ["117億件超・250超法域", "Commercial World Model / Superconductor", "日本固有のnamed caseは未確認", "Enterprise Account Executive - Japan"], customers: ["Honeywell", "U.S. Customs and Border Protection", "HM Revenue & Customs"], solutions: ["Sayari Commercial World Model", "Sayari Graph", "Sayari Map / Screening"], competitors: "LSEG World-Check、Moody's・Bureau van Dijk、Dun & Bradstreet、Palantir", fit: ["Economic Security", "Supply Chain", "Risk Intelligence", "Compliance", "Enterprise", "Tokyo"],
  },
  {
    slug: "doubleverify", name: "DoubleVerify", founded: "2008", jobUrl: "https://job-boards.greenhouse.io/doubleverify/jobs/8539963002", officialUrl: "https://doubleverify.com/", customersUrl: "https://doubleverify.com/insights/case-studies/", financeUrl: "https://ir.doubleverify.com/news-events/press-releases/press-releases-details/2026/DoubleVerify-Reports-Second-Quarter-2026-Financial-Results/default.aspx", externalUrl: privacyExternalUrl, publicInfo: { ticker: "DV", exchange: "NYSE", listedSince: "2021年" },
    role: "Associate Business DirectorとしてJapanのadvertiser・agencyでnew business、renewal・upsell、test・activation、revenue targetを持つ", category: "Digital Media Measurement・Ad Verification and Performance Platform", buyer: "CMO・Media・Digital Marketing・Agency・Ad Operations", departments: "MarketingからMedia、Analytics、Procurement、Agency、Finance、経営層", problems: ["digital広告のviewability・fraud・brand suitability・attentionがplatformごとに分断する", "media投資を中立的な第三者dataで比較・最適化できない", "privacy・視聴環境の変化で従来指標とbusiness outcomeの因果が見えにくい"], origin: "digital ad fraudとviewabilityを第三者検証する基盤から、brand suitability、Authentic Attention、performance optimization、social・CTV・retail mediaへ拡張。", external: "cookie規制、個人情報、walled garden、生成AI contentとMFAが同時に広がり、advertiserにはprivacyに配慮しながらmedia qualityと成果を実証する要求が強まる。", value: "invalid traffic、不適切面、attention、VTR、ROAS、wasteを改善", objection: "DSP・platform・agency標準のmeasurementで十分。", reframe: "追加計測costではなく、waste削減、cross-platform comparability、中立性、最適化時間、incremental performanceを同じcampaignで測る。", headcount: "1,001〜5,000人規模", japanPresence: "Tokyo office / Japan Revenue team", japanSince: "Tokyo officeで継続展開", growth: "数百のFortune 500企業を支援すると公式求人で説明。TokyoでSalesとAccount Managementを採用し、Social・Performance・Attentionへproduct scopeを広げる。", facts: ["Fortune 500企業数百社", "Verify・Optimise・Prove", "Japanのnamed quantitative caseは未確認", "Associate Business Director - Sales"], customers: ["Campari Group", "Mondelēz International", "Vodafone"], solutions: ["DV Authentic Ad", "DV Authentic Attention", "DV Performance Solutions"], competitors: "Integral Ad Science、Oracle Moat後の代替、platform native measurement", fit: ["AdTech", "Measurement", "Brand Safety", "Attention", "Enterprise", "Tokyo"],
  },
  {
    slug: "similarweb", name: "Similarweb", founded: "2007", jobUrl: "https://job-boards.greenhouse.io/similarweb/jobs/8045885", officialUrl: "https://www.similarweb.com/", customersUrl: "https://www.similarweb.com/corp/clients/", financeUrl: "https://ir.similarweb.com/news-events/press-releases/detail/152/similarweb-announces-first-quarter-2026-results", externalUrl: privacyExternalUrl, publicInfo: { ticker: "SMWB", exchange: "NYSE", listedSince: "2021年" },
    role: "Head of SalesとしてJapan・Koreaのsales strategy、team performance、pipeline、forecast、大口dealを統括する", category: "Digital Intelligence・Market・Sales and Web Data Platform", buyer: "Chief Digital Officer・Strategy・Marketing・Sales・Investment", departments: "StrategyからMarketing、Sales、eCommerce、Data、Investment、経営層", problems: ["web・app・search・marketの外部行動dataがchannelとtoolごとに分断する", "自社dataだけでは競合・市場・潜在顧客の変化を早く把握できない", "推計dataのcoverage・accuracy・限界を説明しつつ現場actionへ変えられない"], origin: "web trafficとaudienceの推計から始まり、Digital Research、Marketing、Sales Intelligence、Shopper、App、Stock、Data-as-a-Serviceへ拡張。", external: "デジタル接点の分断、privacy規制、AI answer、platform仕様変更により、企業はfirst-party dataだけでなく外部市場の変化を継続的に検証する必要がある。", value: "research time、lead quality、pipeline、market share、campaign・product prioritizationを改善", objection: "Google・自社analytics・Semrush・調査会社で十分。", reframe: "dataの量ではなく、欲しい母集団のcoverage、推計誤差、freshness、API接続、意思決定までの時間を同じuse caseで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Tokyo office / Japan GTM", japanSince: "Tokyo officeで継続展開", growth: "10億超websitesと2億mobile appsを分析対象と公式顧客ページで説明。TokyoでSales Manager、Enterprise Account Manager、Customer Successなどを複数採用。", facts: ["10億超websites・2億apps", "Digital Research・Sales・Marketing・Data", "Dentsu・Rakuten Advertisingの事例", "Head of Sales, Japan & Korea"], customers: ["Dentsu", "DHL", "UPS"], solutions: ["Similarweb Digital Research Intelligence", "Similarweb Sales Intelligence", "Similarweb Data-as-a-Service"], competitors: "Semrush、Sensor Tower、data.ai、調査会社・内製data", fit: ["Digital Intelligence", "Market Research", "Sales Intelligence", "Data", "Leadership", "Tokyo"],
  },
  {
    slug: "appsflyer", name: "AppsFlyer", founded: "2011", jobUrl: "https://careers.appsflyer.com/jobs/position/8300434002", officialUrl: "https://www.appsflyer.com/ja/", customersUrl: "https://www.appsflyer.com/customer-success-stories-v1/", financeUrl: "https://www.appsflyer.com/company/about/", externalUrl: privacyExternalUrl,
    role: "Growth Account Managerとして日本のSMBでnew、renewal、cross-sell、retentionをfull-cycleで持つ", category: "Modern Marketing Cloud・Mobile Measurement and Attribution Platform", buyer: "CMO・Growth・User Acquisition・Marketing Analytics・Product", departments: "GrowthからMarketing、Product、Data、Privacy、Finance、経営層", problems: ["mobile・web・CTVのcustomer journeyと広告成果がchannel・platformごとに分断する", "privacy制約下でattributionとincrementalityの信頼性を保てない", "campaign・creative・audienceへの次の投資配分をbusiness outcomeで判断できない"], origin: "mobile attributionのindependent measurementから始まり、analytics、deep linking、fraud protection、data clean room、incrementality、creative、AIを含むModern Marketing Cloudへ拡張。", external: "mobile privacy、identifier制限、consent、platform固有の計測、AI creative増加により、marketerは個人情報を過剰に共有せず増分効果を示す必要がある。", value: "CAC、ROAS、incremental lift、retention、fraud loss、意思決定時間を改善", objection: "ad platform・Firebase・自社data stackで十分。", reframe: "attribution reportの追加ではなく、cross-channel consistency、raw data、privacy、incrementality、最適化までの速度を同じcampaignで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Tokyo office / Japan Sales team", japanSince: "Tokyo officeで継続展開", growth: "8.9万超のmobile appsが利用し、200超のcustomer storiesを掲載。TokyoでGrowth Account ManagerとLead Account Managerを採用中。", facts: ["8.9万超のmobile apps", "Attribution・Incrementality・Privacy Cloud", "日本語公式siteとTokyo team", "Growth Account Manager - Tokyo"], customers: ["Wolt", "Albertsons", "Nike"], solutions: ["AppsFlyer Measurement Suite", "AppsFlyer Data Collaboration Platform", "AppsFlyer Deep Linking / OneLink"], competitors: "Adjust、Singular、Branch、Google・Apple標準計測", fit: ["MarTech", "Mobile Measurement", "Attribution", "Privacy", "Account Management", "Tokyo"],
  },
  {
    slug: "bluematrix", name: "BlueMatrix", founded: "1999", jobUrl: "https://jobs.lever.co/BlueMatrix/6c7fba1c-452a-49fe-b187-62bcf49080a8", officialUrl: "https://www.bluematrix.com/", customersUrl: "https://www.bluematrix.com/", financeUrl: "https://www.bluematrix.com/about", externalUrl: dxExternalUrl,
    role: "Client Success Managerとして日本のinvestment bankでadoption、retention、churn risk、organic expansionを持つ", category: "Investment Research Publishing・Compliance and Email Intelligence Platform", buyer: "Head of Research・Investment Banking・Compliance・Research Operations・Sales", departments: "ResearchからCompliance、Sales、Client Strategy、Technology、Operations、経営層", problems: ["investment researchのauthoring・review・compliance・distribution・readership dataが分断する", "多数のアナリストと受け手のpermission・disclosure・deliveryを統制できない", "AIが調査を消費する環境で何が読まれどの意思決定に使われたか見えない"], origin: "capital markets向けのresearch authoring・publishingの業界特化workflowから始まり、compliance、distribution、analytics、email intelligence、AI consumption governanceへ拡張。", external: "金融researchは正確性、情報管理、利益相反、配信対象、auditabilityを保ちつつ、デジタル・AI時代の顧客engagementへ適応する必要がある。", value: "research cycle、compliance rework、distribution accuracy、reader engagement、renewal・expansionを改善", objection: "email、CMS、document management、社内workflowの組合せで十分。", reframe: "publishing toolではなく、作成からcompliance、entitlement、distribution、readership、AI usageまでの一貫性と運用riskで比較する。", headcount: "201〜500人規模", japanPresence: "Tokyo Client team", japanSince: "TokyoのClient Sales・Success・Solutions採用を確認", growth: "global investment research infrastructureとしてJefferies、Oppenheimer等の公式testimonialを掲載。TokyoでClient Sales、Client Success、Client Solutionsの3roleを同時採用している。", facts: ["research lifecycle全体を統合", "Creator・Compliance・Distribution・Email Intelligence", "Tokyoでinvestment bank顧客を支援", "Client Success Manager - Tokyo"], customers: ["Jefferies", "Oppenheimer", "Global investment bank客（社名非公表）"], solutions: ["BlueMatrix Research Platform", "BlueMatrix Distribution and Compliance", "BlueMatrix Email Intelligence"], competitors: "S&P Capital IQの一部workflow、Visible Alpha、内製CMS・email stack", fit: ["Capital Markets", "Research", "Workflow", "Compliance", "Client Success", "Tokyo"],
  },
  {
    slug: "black-duck", name: "Black Duck", founded: "2002", jobUrl: "https://job-boards.greenhouse.io/blackduck/jobs/5209494008", officialUrl: "https://www.blackduck.com/", customersUrl: "https://www.blackduck.com/customer-success.html", financeUrl: "https://www.blackduck.com/company.html", externalUrl: securityExternalUrl,
    role: "Regional Sales ManagerとしてJapanのEnterprise pipeline、C-level relationship、大口・複数年dealを持つ", category: "Application Security・Software Supply Chain and DevSecOps Platform", buyer: "CISO・Application Security・Engineering・DevSecOps・Open Source Program Office", departments: "SecurityからEngineering、Product、Legal、Compliance、Risk、経営層", problems: ["proprietary code・open source・dependency・running applicationのriskがtoolとteamごとに分断する", "release speedを保ちながらvulnerability・license・qualityの優先順位を付けられない", "AI生成codeとsoftware supply chainの責任範囲を開発とsecurityで共有できない"], origin: "open-source componentの検出・license・vulnerability管理を中核に、SAST、DAST、開発者workflow、コンサルティング、application security postureへ拡張。", external: "software supply-chain attack、既知脆弱性、open-source license、AI-generated codeが増え、企業はSBOM作成だけでなく、修正優先順位と開発workflowの説明責任を負う。", value: "critical finding、false positive、fix time、release friction、license risk、tool costを改善", objection: "GitHub・GitLab・cloud・IDE標準のsecurity機能で十分。", reframe: "scanner数ではなく、code・dependency・runtimeのcoverage、developer workflow、優先順位、修正時間、audit evidence、3年TCOで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Tokyo / Japan Sales and Technical team", japanSince: "Japan teamで継続展開", growth: "4,000超のorganizationが利用と公式顧客ページで説明。TokyoでRegional Sales Manager、Sales Engineer、Implementation、Supportを採用し、commercialとdeliveryの両方を維持。", facts: ["4,000超organizations", "SCA・SAST・DAST・Services", "日本固有のnamed caseは十分に公開されていない", "Regional Sales Manager - Japan"], customers: ["Magneti Marelli", "ScienceLogic", "製造・金融のEnterprise顧客（社名非公表）"], solutions: ["Black Duck SCA", "Black Duck Polaris / SAST", "Black Duck DAST and AppSec Services"], competitors: "Snyk、Veracode、Checkmarx、GitHub Advanced Security", fit: ["AppSec", "SCA", "DevSecOps", "Software Supply Chain", "Enterprise", "Tokyo"],
  },
  {
    slug: "ivanti", name: "Ivanti", founded: "1985", jobUrl: "https://job-boards.greenhouse.io/a3c41b8b71eff8c4/jobs/7632817003", officialUrl: "https://www.ivanti.com/ja", customersUrl: "https://www.ivanti.com/ja/customers", financeUrl: "https://www.ivanti.com/company/about-ivanti", externalUrl: securityExternalUrl,
    role: "Sales EngineerとしてJapanのendpoint management・security商談でdiscovery、demo、technical validation、solution designを持つ", category: "Endpoint Management・ITSM・Exposure and Zero Trust Platform", buyer: "CIO・IT Operations・Service Management・Endpoint・Security", departments: "ITからSecurity、Employee Experience、Risk、HR、Operations、経営層", problems: ["endpoint・mobile・asset・service request・vulnerabilityが異なるtoolと運用に分断する", "remote・field・officeの端末を同じpolicyとuser contextで管理できない", "incident・exposure・employee experienceのデータを優先順位とautomationへつなげられない"], origin: "systems management、patch、service management、mobile、network security等の製品基盤を統合し、Ivanti Neuronsでendpoint・ITSM・exposure・zero trustをつなぐ。", external: "hybrid work、BYOD、cloud application、脆弱性悪用が増え、企業はdeviceとuserの状態、access、service、remediationを分断させず運用する必要がある。", value: "asset coverage、ticket cycle、patch latency、vulnerability risk、employee experience、tool costを改善", objection: "Microsoft、ServiceNow、security vendorの標準機能で十分。", reframe: "bundle価格ではなく、device・user・service・riskをどこまで一つのworkflowで可視化・優先順位化・自動化できるかと3年TCOで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Ivanti Software K.K. / Tokyo", japanSince: "日本法人で継続展開", growth: "ライフネット生命、東映アニメーション、ブラザー工業、山九等の国内事例を公開。TokyoでJapan向けSales Engineerを募集中。", facts: ["複数の国内named case", "Ivanti Neurons・ITSM・UEM・Exposure", "ライフネット生命・東映アニメ事例", "Sales Engineer - Tokyo"], customers: ["ライフネット生命保険", "東映アニメーション", "ブラザー工業"], solutions: ["Ivanti Neurons for ITSM", "Ivanti Neurons for UEM", "Ivanti Neurons for RBVM / Zero Trust Access"], competitors: "Microsoft Intune・Defender、ServiceNow、ManageEngine、Omnissa", fit: ["Endpoint", "ITSM", "UEM", "Exposure Management", "Presales", "Tokyo"],
  },
];

type PreSeed = {
  slug: string;
  name: string;
  founded: string;
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
      { title: "海外展開とAPAC優先順位", body: seed.apacText, sourceIds: ["apac", "careers"] },
      { title: "日本市場との課題親和性", body: `${seed.buyer}が抱える${seed.problems[0]}課題は日本企業にも存在する。`, sourceIds: ["company", "external"] },
      { title: "Enterprise導入の基礎", body: `${seed.customers.join("、")}の公式事例とsecurity情報があり、globalでのcategory proofは進んでいる。`, sourceIds: ["customers", "trust"] },
    ],
    hurdles: [
      { title: "Japan固有の需要証明がない", body: "国内named customer、Japan ARR、qualified pipeline、renewalを公式情報で確認できない。", sourceIds: ["customers", "growth"] },
      { title: "日本語とproduct readiness", body: `${seed.language}。契約、security資料、support、導入支援の日本語同等性も未確認。`, sourceIds: ["company", "trust"] },
      { title: "local delivery体制", body: "Japan・Tokyo office、country leader、専任AE・SE・CS、国内partnerを公式career・拠点情報で確認できない。", sourceIds: ["careers", "apac"] },
      { title: "既存vendorと導入慣行", body: `${seed.competitors}が既存relationship、data、bundle、国内partnerを持ち、追加platformのTCOとchange costを正当化する必要がある。`, sourceIds: ["company", "external"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse customer", body: "国内顧客でproduction利用、renewal、定量成果を公開する。" },
      { title: "日本語・product readiness", body: "日本語UI、support、security、契約、主要use caseの品質を証明する。" },
      { title: "local partner", body: "国内SI・consulting・professional servicesのdeliveryとco-sellを確立する。" },
      { title: "専任Japan pod", body: "AEだけでなくSE・CS・Marketing・Legal/Securityを日本時間でcoverする。" },
      { title: "repeatable economics", body: "Japan pipeline、ACV、cycle、retention、delivery costがlocal固定費を継続的に支える。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本語公式site・UI・support", "国内顧客事例", "Japan country leader・法人", "国内partner発表", "APAC teamのJapan territory表記"],
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
    externalUrl: dxExternalUrl,
    linkedinUrl: seed.linkedin,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。現時点でJapan求人・拠点は確認できないが、進出後は一つのuse caseから部門横断へ提案を広げられる点が営業としての面白さ。`,
    growthSummary: seed.growth,
    verdict: seed.verdict,
    entryNarrative: `${seed.growth} ${seed.apacText} 一方、日本法人、Tokyo office、Japan求人、国内named customer、日本語提供の同等性は確認できない。global tractionだけで進出時期を断定せず、国内lighthouse customer、local partner、日本語・product readiness、専任delivery、repeatable economicsを成立条件として観測する。`,
    headcount: seed.headcount,
    headcountDetail: seed.headcountDetail,
    apacPresence: seed.apacText,
    productLanguage: seed.language,
    milestones: [
      { year: seed.founded, label: "創業", detail: seed.origin, source: "company" },
      { year: "成長期", label: "顧客拡大", detail: seed.growth, source: "growth" },
      { year: "現在", label: "platform化", detail: `${seed.category}として複数workflowを統合。`, source: "company" },
      { year: "現在", label: "地域優先順位", detail: seed.apacText, source: "apac" },
      { year: "2026.08", label: "Japan観測", detail: "Japan法人・拠点・公式求人を確認できず。", source: "apac" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}などの公式事例は、point tool追加ではなく${seed.problems[0]}課題を解き、業務成果へつなげる目的を示す。` },
      { title: "製品の成り立ちから見る課題", body: seed.origin },
      { title: "外部環境の要求から見る課題", body: "日本企業は人手不足とAI・cloud・digital workflowの拡大に対し、生産性と同時にdata accuracy、privacy、security、governance、human reviewの説明責任を求められる。" },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}のdata・tool・workflowが増え、判断とexecutionが分断する。` },
      { label: "課題", body: `${seed.problems[0]}うえ、${seed.problems[1]}、${seed.problems[2]}。` },
      { label: "解決策", body: `${seed.category}を一つの高頻度use caseへ導入し、時間、品質、risk、conversion、costをbaseline比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較でdata、workflow、AI、governance、time-to-valueを一体化できる場合に選ばれる。` },
    ],
    openingHook: `${seed.problems[0]}ことで失う時間・機会・riskを、現在どのKPIで把握していますか。`,
    valueHypothesis: "一つのuse caseでmanual time、accuracy、cycle、risk、adoptionを測る。",
    objection: `${seed.competitors}で十分。`,
    reframe: "機能数ではなく、dataからaction、governance、measurementまでの一貫性と運用TCOで比較する。",
    facts: [
      { label: "会社規模", value: seed.headcount, detail: seed.headcountDetail, source: "growth" },
      { label: "成長", value: seed.growth.slice(0, 50), detail: seed.growth, source: "growth" },
      { label: "地域優先順位", value: seed.apacText.slice(0, 42), detail: seed.apacText, source: "apac" },
      { label: "顧客proof", value: seed.customers[0], detail: `${seed.customers.join("、")}の公式事例を確認。`, source: "customers" },
      { label: "日本語・国内提供", value: "同等性未確認", detail: seed.language, source: "company" },
      { label: "Japan求人", value: "0件確認", detail: "Japan・Tokyo勤務地または担当市場の求人を公式careerで確認できない。", source: "careers" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}の公式customer proofとして公開。`, implication: `${seed.problems[0]}課題をbusiness outcomeへ変えるreference。` })),
    externalSignals: [
      { label: "日本市場", value: "生産性とgovernance", detail: "人手不足とAI活用の拡大でautomationとcontrolを同時に求める。", caveat: `${seed.name}の日本進出決定や個別効果を示さない。` },
      { label: "導入責任", value: "accuracy・privacy・security", detail: "dataとAIを業務判断へ使うほどsource、目的、権限、human reviewが重要になる。", caveat: "具体要件は業界・data・利用方法で異なる。" },
    ],
    entryAssessment: assessment,
    sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
    salesMotion: `${seed.buyer}へcategory problemを啓蒙し、一use caseのproofからteam・region・workflowへexpandするEnterprise sale。`,
    careerValue: `${seed.category}のcategory creation、market development、data/AI governance、partner-led Japan entryを扱う可能性。`,
    leader: { name: "公式Leadership参照", role: "CEO / Executive Team", read: "創業課題からplatformとglobal GTMへ拡張。Japan投資の意思決定者・ownerは未確認。" },
    solutions: seed.solutions.map((name) => ({ name, valueProp: seed.problems[0], url: seed.homepage, competitors: seed.competitors, differentiation: `${seed.category}としてdata・AI・workflowを統合。` })),
    fitTags: ["日本未進出", ...seed.fit],
    comparisons: [
      { arena: seed.category, companies: [seed.name, ...seed.competitors.split("、").slice(0, 2)], why: "data、workflow、AI、delivery" },
      { arena: "Japan entry", companies: [seed.name, "APAC coverage", "local partner"], why: "顧客proof、language、economics" },
    ],
  });
}

const preSeeds: PreSeed[] = [
  {
    slug: "pigment", name: "Pigment", founded: "2019", homepage: "https://www.pigment.com/", growthUrl: "https://www.pigment.com/blog/pigment-raises-88m-series-c", careers: "https://jobs.lever.co/pigment/", customersUrl: "https://www.pigment.com/customers", trust: "https://www.pigment.com/security", apac: "https://jobs.lever.co/pigment/", linkedin: "https://www.linkedin.com/company/pigment/",
    category: "Agentic Enterprise Performance Management and Business Planning Platform", buyer: "CFO・FP&A・RevOps・People Planning・Supply Chain", problems: ["Finance・Sales・HR・Supply Chainの計画とassumptionがspreadsheet・departmentごとに分断する", "forecast・scenario・resource allocationを変化の速度に合わせて更新できない", "AIが作る分析・提案をgoverned data・model・approvalの中で説明できない"], origin: "spreadsheetの柔軟性とEnterprise planningのgovernanceを両立するmodeling platformから始まり、Finance、Sales、HR、Supply Chain、分析・modeling・planning AI agentsへ拡張。", growth: "2023年にSeries C 8,800万ドル、累計2.48億ドルを公式発表。当時の利用者数は前年比10倍で、Klarna、Miro、Figma、Gong等を顧客として掲載。現行公式求人はEurope・North America中心でJapanは0件。", verdict: "進出可能性は低〜中。日本のFP&A・統合計画需要との親和性は高いが、現在の拠点・採用投資はEurope・North Americaに集中", headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの公開規模range。会社公式の厳密な現員数ではない。", apacText: "公式Leverの現行求人はParis、London、Frankfurt、Toronto、New York、Austin、San FranciscoなどEurope・North America中心。Japan・Tokyo・Singapore・Australiaの求人と拠点を確認できない。", language: "日本語UI、planning template、support、日本会計・管理会計慣行、国内data residencyの同等性は未確認。", customers: ["Figma", "Miro", "Gong"], solutions: ["Pigment Business Planning Platform", "Pigment AI Agents", "Pigment Finance / Sales / HR / Supply Chain Planning"], competitors: "Anaplan、Workday Adaptive Planning、Oracle EPM、Excel・Google Sheets", fit: ["EPM", "FP&A", "Business Planning", "Agentic AI", "Enterprise"],
  },
  {
    slug: "ironclad", name: "Ironclad", founded: "2014", homepage: "https://ironcladapp.com/", growthUrl: "https://ironcladapp.com/why/customer-stories", careers: "https://ironcladapp.com/careers", customersUrl: "https://ironcladapp.com/why/customer-stories", trust: "https://ironcladapp.com/trust", apac: "https://ironcladapp.com/careers", linkedin: "https://www.linkedin.com/company/ironclad-inc-/",
    category: "Contract Lifecycle Management and Legal AI Platform", buyer: "General Counsel・Legal Operations・Procurement・Sales Operations・Finance", problems: ["contractのintake・draft・review・approval・signature・repository dataがemail・drive・departmentごとに分断する", "Legalのreview待ちとnon-standard termsの確認でrevenue・procurement・project cycleが遅れる", "AIで契約を生成・レビューしてもplaybook・source・approval・auditを保てない"], origin: "legal teamが自分で契約workflowを設計できるdigital contracting platformから始まり、CLM、Clickwrap、Signature、repository、contract data、AI Assist、Juristへ拡張。", growth: "2,000社超のstartupからFortune 500が利用し、20億件超のcontractを処理と公式製品・顧客ページで公表。公式careerのofficeはSan Francisco、New York、Londonとselect remoteでJapan求人は0件。", verdict: "進出可能性は低〜中。contract workflow・Legal AIの需要はあるが、APAC拠点・Japan product readiness・国内deliveryの証拠がない", headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの公開規模range。会社公式の厳密な現員数ではない。", apacText: "公式careerが明記するofficeはSan Francisco、New York、Londonで、その他はselect remote。Japan・Tokyo・Singapore・Sydney officeとJapan向け公式求人を確認できない。", language: "日本語UI、AI契約review、template・clause library、support、日本法・契約慣行、電子署名の同等性は未確認。", customers: ["L'Oréal", "Docker", "Hormel"], solutions: ["Ironclad CLM", "Ironclad AI / Jurist", "Ironclad Clickwrap / Signature"], competitors: "DocuSign CLM、Icertis、Agiloft、LegalOn・MNTSQ・国内契約SaaS", fit: ["CLM", "LegalTech", "Contract AI", "Workflow", "Enterprise"],
  },
];

export const additions20260817BatchTwentyThreeIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  ...Object.fromEntries(enteredSeeds.map((seed) => [seed.slug, entered(seed)])),
  ...Object.fromEntries(preSeeds.map((seed) => [seed.slug, preEntry(seed)])),
};
