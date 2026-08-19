import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";

const checkedAt = "2026-08-13";
const aiExternalUrl = "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html";
const dxExternalUrl = "https://www.meti.go.jp/policy/it_policy/investment/dx-chushokigyou.html";

type EnteredSeed = {
  slug: string; name: string; founded: string; jobUrl: string; officialUrl: string; customersUrl: string; financeUrl: string; externalUrl: string;
  role: string; category: string; buyer: string; departments: string; problems: [string, string, string]; origin: string; external: string;
  value: string; objection: string; reframe: string; headcount: string; japanPresence: string; japanSince: string; growth: string;
  facts: [string, string, string, string]; customers: [string, string, string]; solutions: [string, string, string]; competitors: string; fit: string[];
  publicInfo?: { ticker: string; exchange: string; listedSince: string };
};

function entered(seed: EnteredSeed): CompanyPublicIntelligence {
  const profile: Profile = {
    checkedAt, slug: seed.slug, name: seed.name, jobUrl: seed.jobUrl, officialUrl: seed.officialUrl, customersUrl: seed.customersUrl,
    externalUrl: seed.externalUrl, financeUrl: seed.financeUrl, publicInfo: seed.publicInfo,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。${seed.departments}へ入り、${seed.value}へ提案を広げられる点が営業としての面白さ。`,
    growthSummary: seed.growth,
    ipoSummary: "非公開企業。IPO時期、日本売上、国内顧客数は未公表。資金調達や買収は、日本territoryの達成可能性を直接示さない。",
    milestones: [
      { year: seed.founded, label: "創業", detail: `${seed.category}の起点となる課題から創業。`, source: "company" },
      { year: "成長期", label: "製品拡張", detail: seed.origin, source: "company" },
      { year: "現在", label: "顧客・事業基盤", detail: seed.growth, source: "finance" },
      { year: seed.japanSince, label: "日本展開", detail: seed.japanPresence, source: "company" },
      { year: "2026.08", label: "日本向け採用", detail: `${seed.role}の公式求人を確認。`, source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}などの公式情報から、導入目的は機能追加ではなく、${seed.problems[0]}を解消し、${seed.value}を実現することにある。` },
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
    objection: seed.objection, reframe: seed.reframe,
    facts: [
      { label: "グローバル規模", value: seed.headcount, detail: "会社公式または公式求人・公開集計で確認できる範囲。", source: "finance" },
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
    role: seed.role, organization: `${seed.category}の専門家がProduct、Engineering、SE、CS、Partnerと連携し、複雑な顧客課題を解くglobal organization。`,
    careerValue: `${seed.category}、日本GTM、executive business case、partner・technical collaborationを横断する経験。`, globalHeadcount: seed.headcount,
    japanPresence: seed.japanPresence, japanSince: seed.japanSince,
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
  { slug: "wiz", name: "Wiz", founded: "2020", jobUrl: "https://www.wiz.io/careers/job/4650055006/mid-market-account-executive-japan", officialUrl: "https://www.wiz.io/", customersUrl: "https://www.wiz.io/customers", financeUrl: "https://www.wiz.io/about", externalUrl: aiExternalUrl, role: "Mid-Market Account ExecutiveとしてJapanのnew logo、CISO relationship、partner、pipeline、forecastを担う", category: "Cloud and AI Security Platform", buyer: "CISO・Cloud Security・Platform Engineering・Application Security", departments: "SecurityからCloud、Platform、Application、Risk、経営層", problems: ["multi-cloudの資産・identity・data・vulnerabilityが分断し、攻撃経路が見えない", "大量alertのうちbusiness impactが高いriskを優先できない", "AI applicationとcloud workloadのsecurityを開発速度を落とさず管理できない"], origin: "agentlessにcloud環境へ接続し、設定、identity、vulnerability、data、runtimeをSecurity Graphで関連づける発想から、code・cloud・AIを共通contextで守るplatformへ拡張。", external: "cloudと生成AIの利用拡大により、企業は新しいapplicationを速く出す一方、data、model、identity、supply chainを含むriskとaccountabilityを継続管理する必要がある。", value: "critical exposure、remediation time、tool分断、security review frictionを減らす", objection: "hyperscaler標準機能や既存CNAPPで十分。", reframe: "機能表ではなく、実際に到達可能なattack path、優先順位、修正時間、developer handoff、tool consolidationを同じcloud estateで比較する。", headcount: "1,001〜5,000人規模", japanPresence: "Remote Japan / Japan field sales", japanSince: "Japan向け営業体制を継続展開", growth: "Fortune 100の65%超が利用し、1日2300億file超をscanすると公式求人で公表。現在はGoogle傘下でcloud・AI securityを拡張。", facts: ["Fortune 100の65%超", "1日2300億file超をscan", "日本向け顧客事例の十分な公開母数は未確認", "Mid-Market Account Executive, Japan"], customers: ["Amplitude", "Yotpo", "Agoda"], solutions: ["Wiz Cloud Security Platform", "Wiz Code", "Wiz Defend"], competitors: "Palo Alto Prisma Cloud、CrowdStrike、Orca Security", fit: ["Cloud Security", "CNAPP", "AI Security", "Mid-Market", "Enterprise", "Partner"] },
  { slug: "dbt-labs", name: "dbt Labs", founded: "2016", jobUrl: "https://www.getdbt.com/about-us/careers", officialUrl: "https://www.getdbt.com/jp", customersUrl: "https://www.getdbt.com/case-studies", financeUrl: "https://www.getdbt.com/about-us", externalUrl: aiExternalUrl, role: "Commercial BDRとしてJapan accountへanalytics engineeringの課題を啓蒙しqualified pipelineを作る", category: "Analytics Engineering and Open Data Infrastructure", buyer: "CDO・Data Platform・Analytics Engineering・BI・AI leader", departments: "Data teamからIT、Finance、Operations、Product、AI team", problems: ["warehouse内のtransformation logicが個人SQLとtoolへ分散し信頼できない", "data変更のtest・lineage・documentation・reviewが後追いになる", "AIとanalyticsへ供給するdataの品質とfreshnessをteam横断で説明できない"], origin: "analytics codeへsoftware engineeringのversion control、test、documentation、deploymentを持ち込むdbt Coreから始まり、Cloud、Semantic Layer、Catalog、Fusionへ拡張。Fivetranとの統合でingestionからtransformationまでを接続する方向。", external: "生成AIとself-service analyticsの利用が広がるほど、企業にはsourceからmetricまでのlineage、quality、access、change managementを説明するdata governanceが必要になる。", value: "data incident、manual SQL、review時間、metric不一致、AI data準備を改善", objection: "warehouse標準機能、ETL suite、open-source dbt Coreで十分。", reframe: "SQL実行ではなく、team development workflow、lineage、test、orchestration、governanceを何domainへ再現できるかで比較する。", headcount: "統合後の厳密な在籍数は未確認", japanPresence: "日本語公式サイト / Remote Japan GTM", japanSince: "日本市場向けsite・採用を継続", growth: "日本語公式サイトで5,400超のdeploymentと8万team規模を案内。採用ページはFivetranとの統合を公表し、Japan向けBDR・Sales Director・Customer Solutions Architect等を掲載。", facts: ["5,400超のdeployment（会社表示）", "dbt Core・Cloud・Fusionを展開", "日本語site・Japan remote採用", "Commercial BDRほか複数Japan role"], customers: ["JetBlue", "Siemens", "Nasdaq"], solutions: ["dbt Platform", "dbt Core", "dbt Catalog / Semantic Layer"], competitors: "Snowflake標準機能、Databricks、Dataform", fit: ["Analytics Engineering", "Data Platform", "Open Source", "BDR", "PLG", "Enterprise"] },
  { slug: "gurobi", name: "Gurobi Optimization", founded: "2008", jobUrl: "https://jobs.lever.co/GurobiOptimization/79a51557-6123-4373-acd7-50adc3a0cfa2", officialUrl: "https://www.gurobi.com/", customersUrl: "https://www.gurobi.com/resources/case-studies", financeUrl: "https://www.gurobi.com/company/about-gurobi/", externalUrl: dxExternalUrl, role: "Regional Sales DirectorとしてJapan strategy、team、strategic account、partner、pipeline、forecastを統括", category: "Mathematical Optimization and Decision Intelligence", buyer: "COO・Supply Chain・Manufacturing・Operations Research・Data Science・IT", departments: "生産計画から物流、需給、pricing、workforce、Finance、経営企画", problems: ["制約が多い計画をspreadsheetと熟練者の経験で調整している", "需要・供給・設備条件が変わるたび最適な意思決定を短時間で再計算できない", "AI予測を実行可能な配分・schedule・routeへ変換できない"], origin: "mixed-integer programming等のsolver技術を中核に、modeling language・cloud・partner applicationからbusiness decisionを高速化するoptimization platformを展開。", external: "人手不足、supply chain変動、energy・環境制約により、企業は予測だけでなく複数制約下で利益・service・資源を同時に最適化する意思決定能力を求める。", value: "planning time、在庫、capacity、物流費、材料loss、意思決定速度を改善", objection: "Excel、既存planning suite、open-source solverで十分。", reframe: "solver単体の速度ではなく、重要制約を保ちながら何度再計算でき、現場運用・説明・保守まで成立するかで比較する。", headcount: "201〜500人規模", japanPresence: "Gurobi Japan / Tokyo-Remote", japanSince: "October Sky統合後もGurobi Japanとして展開", growth: "Toyota、Kaneka、YOKU MOKU CREA等の国内事例を公開。Regional Sales Director求人ではJapan teamとstrategic accountを率いる段階を確認。", facts: ["国内外のoptimization事例多数", "数理最適化solverとdecision intelligence", "Toyota・Kaneka・YOKU MOKU CREA事例", "Regional Sales Director (Japan)"], customers: ["Toyota", "Kaneka", "YOKU MOKU CREA"], solutions: ["Gurobi Optimizer", "Gurobi Compute Server", "Gurobi Instant Cloud"], competitors: "IBM CPLEX、FICO Xpress、open-source solver", fit: ["Optimization", "Decision Intelligence", "Manufacturing", "Supply Chain", "Sales Leadership", "Enterprise"] },
  { slug: "neural-concept", name: "Neural Concept", founded: "2018", jobUrl: "https://jobs.ashbyhq.com/neuralconcept/9b018838-aad4-48a6-8d6b-f2a544e0fbed", officialUrl: "https://www.neuralconcept.com/", customersUrl: "https://www.neuralconcept.com/customer-stories", financeUrl: "https://www.neuralconcept.com/press-release/neural-concept-100-percent-enterprise-growth", externalUrl: dxExternalUrl, role: "Regional Sales DirectorとしてJapan revenue、new business、existing customer、strategic partnershipを率いる", category: "AI-First Engineering Platform", buyer: "Engineering・R&D・Simulation・Design・Manufacturing・IT", departments: "CAE・designからR&D、program management、manufacturing、IT、経営層", problems: ["3D designのsimulationとiterationに日数・計算資源・専門家工数がかかる", "simulation dataとengineering knowledgeがproject・tool・担当者へ分断する", "AI modelを実験から設計判断とcompany-wide workflowへscaleできない"], origin: "3D geometryを直接学習するdeep learning技術から始まり、simulation data、predictive model、design copilot、enterprise engineering workflowを統合するplatformへ発展。", external: "EV・aerospace・energy等で性能、safety、cost、sustainabilityのtrade-offが増える一方、熟練engineerと開発期間は限られ、simulation資産をAIで再利用する要求が高まる。", value: "simulation time、design iteration、total development effort、計算資源、handoffを削減", objection: "既存CAE、surrogate model内製、汎用AI基盤で十分。", reframe: "demo精度ではなく、3D geometry、enterprise data、engineerのreview、既存CAE連携、複数programへのscaleで比較する。", headcount: "100人超", japanPresence: "Tokyo hybrid / Japan commercial role", japanSince: "日本顧客・partner実績とTokyo採用を確認", growth: "公式求人で100人超・前年比で成長倍増を案内。2025年発表ではenterprise adoption 100%増、upsell 40%増を公表し、Europe・US・Asiaで拡張。", facts: ["enterprise adoption 100%増（会社発表）", "AI-first engineering platform", "Subaru・Mitsubishi Chemical等の事例", "Regional Sales Director (Japan)"], customers: ["Subaru", "Mitsubishi Chemical Group", "General Motors"], solutions: ["Neural Concept Platform", "Engineering AI Copilots", "Design Optimization"], competitors: "Ansys、Siemens Digital Industries、内製surrogate model", fit: ["Engineering AI", "Simulation", "Manufacturing", "Automotive", "Technical Sales", "Japan Build"] },
  { slug: "patch", name: "Patch", founded: "2020", jobUrl: "https://jobs.ashbyhq.com/patch.io/1d73e679-d6f7-42c1-9545-74c31e97e7da", officialUrl: "https://www.patch.io/", customersUrl: "https://www.patch.io/case-studies", financeUrl: "https://www.patch.io/about", externalUrl: "https://gx-league.go.jp/", role: "APAC初のEnterprise AEとしてJapan中心のpipeline、lighthouse deal、market credibilityをゼロから作る", category: "Environmental Markets and Climate Finance Platform", buyer: "Chief Sustainability Officer・Finance・Procurement・Trading・Legal", departments: "SustainabilityからFinance、Procurement、Trading、Risk、Legal、経営層", problems: ["carbon credit等の供給・品質・価格・claim情報が分散し調達判断が難しい", "net-zero commitmentを具体的なportfolio・transaction・retirementへ落とせない", "environmental claimとproject riskを複数stakeholderへ説明できない"], origin: "carbon removalをAPIで購入できるinfrastructureから始まり、project supply、marketplace、portfolio、diligence、procurementを支えるenvironmental market platformへ拡張。", external: "GX League、carbon pricing、開示、電力需要、net-zero commitmentが重なり、企業はenvironmental commodityの品質、調達、会計、claimを一貫して管理する必要がある。", value: "project diligence、procurement cycle、portfolio visibility、claim risk、program effectivenessを改善", objection: "broker、consulting、既存registryとの個別取引で十分。", reframe: "credit単価ではなく、project quality、供給access、portfolio governance、claim evidence、transaction operationをprogram全体で比較する。", headcount: "51〜200人規模", japanPresence: "Tokyo remote / APAC market entry", japanSince: "2026年にAPAC初のEnterprise AE採用を確認", growth: "500社超が利用し、年間数億ドル規模をenvironmental projectへ動かすと公式情報で案内。Japan中心のAPAC初AEを採用しregional hubのcommercial foundationを作る局面。", facts: ["500社超が利用", "environmental market platform", "日本固有の顧客事例は未確認", "Enterprise Account Executive, APAC - Tokyo"], customers: ["Bain & Company", "Mirakl", "EQT"], solutions: ["Patch Platform", "Patch Offtake", "Patch Radius"], competitors: "South Pole、Watershed marketplace、broker・consulting", fit: ["Climate Tech", "Carbon Markets", "Founding AE", "APAC", "Enterprise", "Category Creation"] },
  { slug: "veeva", name: "Veeva Systems", founded: "2007", jobUrl: "https://jobs.lever.co/veeva/7d586942-3a78-45cf-a240-3a960dde4430", officialUrl: "https://www.veeva.com/jp/", customersUrl: "https://www.veeva.com/jp/resource-type/customer-stories/", financeUrl: "https://ir.veeva.com/", externalUrl: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/0001.html", role: "Account Partnerとして日本のMedTech企業へVault applicationのnew businessとstrategic relationshipを作る", category: "Life Sciences Industry Cloud", buyer: "R&D・Clinical・Quality・Regulatory・Commercial・Medical・IT", departments: "ClinicalからQuality、Regulatory、Safety、Commercial、Medical、Data、IT、経営層", problems: ["life sciencesのdocument・data・workflowが部門と地域ごとに分断する", "規制対応とsystem validationを保ちながらprocess変更を速く展開できない", "研究開発からcommercialまで同じproduct・customer・quality contextで判断できない"], origin: "life sciences向けcloud CRMから始まり、Vault Platform上でClinical、Quality、Regulatory、Safety、Medical、Commercialのapplicationとdataをindustry特化で統合。", external: "医薬品・医療機器企業にはpatient safety、quality、規制当局への説明責任を守りながら、開発cycleと上市後の情報連携を速める要求がある。", value: "cycle time、manual handoff、inspection readiness、content reuse、customer insightを改善", objection: "Salesforce、Microsoft、既存業界systemの組み合わせで十分。", reframe: "generic platformの柔軟性だけでなく、life sciences data model、validated process、規制更新、department間の同一基盤をlifecycle全体で比較する。", headcount: "7,000人超規模", japanPresence: "Veeva Japan / Tokyo・Osaka", japanSince: "日本法人で継続展開", growth: "公式求人で直近年度売上30億ドル超を案内。1,100社超のcustomer baseと国内導入事例を持ち、MedTech・Commercial等のAccount Partnerを採用。", facts: ["1,100社超の顧客基盤", "Vault Platformとindustry application", "武田薬品・第一三共・バイエル薬品事例", "Account Partner - MedTech Japan"], customers: ["武田薬品工業", "第一三共", "バイエル薬品"], solutions: ["Veeva Vault", "Veeva Development Cloud", "Veeva Commercial Cloud"], competitors: "Salesforce、IQVIA、Dassault Systèmes", fit: ["Life Sciences", "Industry Cloud", "MedTech", "Strategic Account", "Regulated", "Enterprise"], publicInfo: { ticker: "VEEV", exchange: "NYSE", listedSince: "2013年" } },
];

type PreSeed = {
  slug: string; name: string; homepage: string; growthUrl: string; careers: string; customersUrl: string; trust: string; apac: string; linkedin: string;
  category: string; buyer: string; problems: [string, string, string]; origin: string; growth: string; verdict: string; headcount: string; headcountDetail: string;
  apacText: string; language: string; customers: [string, string, string]; solutions: [string, string, string]; competitors: string; fit: string[];
};

function preEntry(seed: PreSeed): CompanyPublicIntelligence {
  const assessment: JapanEntryAssessment = {
    verdict: seed.verdict,
    factSignals: [
      { title: "事業規模と成長", body: seed.growth, sourceIds: ["growth"] },
      { title: "APACへの足場", body: seed.apacText, sourceIds: ["apac", "careers"] },
      { title: "日本市場との課題親和性", body: `${seed.buyer}が抱える${seed.problems[0]}課題は日本企業にも存在する。`, sourceIds: ["company", "external"] },
      { title: "global customer proof", body: `${seed.customers.join("、")}などの公式事例・利用情報があり、categoryの価値検証は進んでいる。`, sourceIds: ["customers"] },
    ],
    hurdles: [
      { title: "Japan固有の需要証明がない", body: "日本国内の顧客事例、Japan ARR、qualified pipeline、renewalの公式値を確認できない。", sourceIds: ["customers", "growth"] },
      { title: "日本語とproduct readiness", body: `${seed.language}。契約、security資料、supportの日本語同等性も未確認。`, sourceIds: ["company", "trust"] },
      { title: "local delivery体制", body: "Japan・Tokyo office、country leader、専任AE・SE・CS、国内partnerを公式career・拠点情報で確認できない。", sourceIds: ["careers", "apac"] },
      { title: "既存vendorとの競争", body: `${seed.competitors}が既存relationship、data、bundleを持ち、追加platformのTCOを正当化する必要がある。`, sourceIds: ["company"] },
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
    checkedAt, slug: seed.slug, name: seed.name, homepage: seed.homepage, growthUrl: seed.growthUrl, careersUrl: seed.careers, customersUrl: seed.customersUrl,
    trustUrl: seed.trust, apacUrl: seed.apac, externalUrl: aiExternalUrl, linkedinUrl: seed.linkedin,
    salesSnapshot: `${seed.name}は、${seed.buyer}に${seed.category}を提供する会社。顧客が抱えるのは「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という3つの課題。現時点でJapan求人・拠点は確認できないが、将来は一つのuse caseから部門横断へ提案を広げられる点が営業としての面白さ。`,
    growthSummary: seed.growth, verdict: seed.verdict,
    entryNarrative: `${seed.growth} ${seed.apacText} 一方、日本法人、Tokyo office、Japan求人、日本国内の顧客事例、日本語提供の同等性は確認できない。global tractionだけで進出時期は断定せず、国内lighthouse customer、local partner、日本語・product readiness、専任delivery、repeatable economicsを成立条件として観測する。`,
    headcount: seed.headcount, headcountDetail: seed.headcountDetail, apacPresence: seed.apacText, productLanguage: seed.language,
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
      { title: "外部環境の要求から見る課題", body: "AI・cloud・digital workflowの拡大により企業は生産性を上げる一方、data accuracy、privacy、security、governance、human reviewへの説明責任も負う。" },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}のdata・tool・workflowが増え、判断とexecutionが分断する。` },
      { label: "課題", body: `${seed.problems[0]}うえ、${seed.problems[1]}、${seed.problems[2]}。` },
      { label: "解決策", body: `${seed.category}を一つの高頻度use caseへ導入し、時間、品質、risk、conversion、costをbaseline比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較でdata、workflow、AI、governance、time-to-valueを一体化できる場合に選ばれる。` },
    ],
    openingHook: `${seed.problems[0]}ことで失う時間・機会・riskを、現在どのKPIで把握していますか。`, valueHypothesis: "一つのuse caseでmanual time、accuracy、cycle、risk、adoptionを測る。", objection: `${seed.competitors}で十分。`, reframe: "機能数ではなく、dataからaction、governance、measurementまでの一貫性と運用TCOで比較する。",
    facts: [
      { label: "会社規模", value: seed.headcount, detail: seed.headcountDetail, source: "growth" },
      { label: "成長", value: seed.growth.slice(0, 50), detail: seed.growth, source: "growth" },
      { label: "APAC・地域", value: seed.apacText.slice(0, 42), detail: seed.apacText, source: "apac" },
      { label: "顧客proof", value: seed.customers[0], detail: `${seed.customers.join("、")}を公式情報で確認。`, source: "company" },
      { label: "日本提供", value: "同等性未確認", detail: seed.language, source: "company" },
      { label: "日本求人", value: "0件確認", detail: "Japan・Tokyo勤務地または担当市場の求人を公式careerで確認できない。", source: "careers" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}の公式customer proofとして公開。`, implication: `${seed.problems[0]}課題をbusiness outcomeへ変えるreference。` })),
    externalSignals: [
      { label: "日本市場", value: "生産性とgovernance", detail: "人手不足とAI活用の拡大でautomationとcontrolを同時に求める。", caveat: `${seed.name}の日本進出決定や個別効果を示さない。` },
      { label: "data・AI責任", value: "accuracy・privacy・security", detail: "dataとAIを業務判断へ使うほどsource、目的、権限、human reviewが重要になる。", caveat: "具体要件は業界・data・利用方法で異なる。" },
    ],
    entryAssessment: assessment, sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
    salesMotion: `${seed.buyer}へcategory problemを啓蒙し、一use caseのproofからteam・region・workflowへexpandするEnterprise/PLG hybrid sale。`,
    careerValue: `${seed.category}のcategory creation、APAC market development、data/AI governance、partner-led Japan entryを扱う可能性。`,
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
  { slug: "lakera", name: "Lakera", homepage: "https://www.lakera.ai/", growthUrl: "https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/", careers: "https://api.ashbyhq.com/posting-api/job-board/lakera.ai", customersUrl: "https://www.lakera.ai/customers", trust: "https://trust.lakera.ai/", apac: "https://docs.lakera.ai/docs/data-regions", linkedin: "https://www.linkedin.com/company/lakeraai/", category: "AI Security and LLM Guardrails Platform", buyer: "CISO・AI Platform・Application Security・ML Engineering・Risk", problems: ["employee・application・agentのLLM利用が増えprompt attackとdata leakageの境界が見えない", "modelとuse caseが変わるたびsecurity testとpolicy enforcementを作り直す", "AIのsafety・securityをproductionで継続監視し経営へ説明できない"], origin: "LLMを攻撃する公開game GandalfとAI red teamingの知見を起点に、prompt injection、unsafe content、data loss等をruntimeで検知・制御するGuardへ拡張。現在はCheck PointのAI security portfolioの一部。", growth: "2025年10月にCheck PointがLakeraの買収を完了。公式顧客事例でDropboxとFortune 500 EdTech企業の利用を確認できるが、Lakera単体の売上・ARRは非公開。", verdict: "進出可能性は中。過去のJapan AE求人は強い観測シグナルだが、現行求人・日本法人・国内拠点は未確認", headcount: "51〜200人規模", headcountDetail: "LinkedIn企業ページの公開会社規模レンジ。Check Point買収後のLakera専用の厳密な在籍人数ではない。", apacText: "AI GuardrailsはSingaporeのprocessing endpointを公式提供。一方、2026年8月19日の公式ATSは0件で、Japan・Tokyoの現行求人とLakera専用の国内拠点は確認できない。", language: "100超のlanguage・scriptの検知とSingapore processingは公式情報で確認。日本語workloadの精度、日本語UI・support、Japan data regionの同等性は未確認。", customers: ["Dropbox", "Fortune 500 EdTech企業（匿名）", "Fortune 500企業群（社名非公表）"], solutions: ["AI Guardrails", "AI Agent Security", "AI Red Teaming"], competitors: "model provider標準guardrail、WAF・DLP、Protect AI等", fit: ["AI Security", "LLM", "Guardrails", "APAC", "Enterprise"] },
  { slug: "tines", name: "Tines", homepage: "https://www.tines.com/", growthUrl: "https://www.tines.com/blog/series-b-extension-2024/", careers: "https://www.tines.com/careers/", customersUrl: "https://www.tines.com/customers/", trust: "https://www.tines.com/security/", apac: "https://www.tines.com/careers/", linkedin: "https://www.linkedin.com/company/tines-io/", category: "Workflow Automation and AI Platform", buyer: "CISO・Security Operations・IT・Infrastructure・Support", problems: ["security・ITのalert、ticket、API、承認がtoolごとの手作業へ分断する", "code中心のSOARやRPAでは現場がworkflowを変更するたび専門開発が必要になる", "AIをactionへつなぐ際の権限・review・auditを保てない"], origin: "security practitionerが反復作業をcodeなしで自動化するために作ったStoriesから、IT、Security、AI agent、case managementをhuman-in-the-loopで編成するplatformへ拡張。", growth: "2024年にSeries B extension 5000万ドルを発表し、当時3.3万人のuser、2.6万workflow、1日4000万actionを公表。", verdict: "進出可能性は中。Australia coverageはあるがJapanのcommercial・delivery proofは未確認", headcount: "201〜500人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。", apacText: "公式careerはDublin・Boston・SF Hub・Australia・remoteを掲載し、SydneyのSE・CS求人も確認できるが、Japan・Tokyoの拠点と求人はない。", language: "日本語UI、template、support、security資料、国内system connectorの同等性は未確認。", customers: ["Intercom", "Brex", "Jamf"], solutions: ["Tines Stories", "Tines Cases", "Tines Workbench / Agents"], competitors: "Palo Alto Cortex XSOAR、Torq、Workato", fit: ["Automation", "Security Operations", "AI", "APAC", "Enterprise"] },
  { slug: "attio", name: "Attio", homepage: "https://attio.com/", growthUrl: "https://attio.com/blog/attio-raises-52m-series-b", careers: "https://attio.com/careers", customersUrl: "https://attio.com/customers", trust: "https://attio.com/security", apac: "https://attio.com/careers", linkedin: "https://www.linkedin.com/company/attio/", category: "AI-Native CRM Platform", buyer: "Founder・CRO・Sales・Customer Success・RevOps", problems: ["CRM schemaとworkflowが固定的で新しいGTM motionへ追随できない", "email・calendar・product・research dataがcontact recordとseller actionへつながらない", "AI automationを使ってもsource・権限・human ownershipが曖昧になる"], origin: "会社ごとに異なるrelationship dataを柔軟なobject・attributeでmodelingするCRMから、real-time enrichment、workflow、AI research・automationへ拡張。", growth: "2025年にSeries B 5200万ドル、累計1.16億ドル、5,000 paying customer、ARR 4倍ペースを公式発表。", verdict: "進出可能性は低〜中。高成長だが現在のGTM・office投資はEuropeとUSへ集中", headcount: "130人超", headcountDetail: "公式careerページが130人超、London HQとEurope・US teamを掲載。", apacText: "公式careerのGTM求人はLondon、New York、San Francisco中心で、team所在地もEurope・US。Japan・APACの拠点・求人は確認できない。", language: "日本語UI、support、data enrichment、契約・security資料の同等性は未確認。", customers: ["Granola", "Modal", "Railway"], solutions: ["Attio CRM", "Attio Automations", "Attio AI"], competitors: "Salesforce、HubSpot、Notion・spreadsheet", fit: ["CRM", "AI", "PLG", "GTM", "Category Creation"] },
  { slug: "retool", name: "Retool", homepage: "https://retool.com/", growthUrl: "https://retool.com/about", careers: "https://retool.com/careers", customersUrl: "https://retool.com/customers", trust: "https://trust.retool.com/", apac: "https://retool.com/careers", linkedin: "https://www.linkedin.com/company/retool/", category: "Internal Software and AI App Platform", buyer: "CIO・Engineering・Operations・Data・Customer Support", problems: ["internal appとworkflowがengineering backlog、legacy system、spreadsheetへ分断する", "業務teamが必要なsoftwareを作るたびcustom developmentと保守costが増える", "AI agentをenterprise dataと権限へ安全に接続しproduction運用できない"], origin: "developerがdatabaseやAPIへつなぐinternal toolを短時間で作るcomponent platformから、Apps、Workflows、Agents、Mobile、self-hosting、governanceへ拡張。", growth: "公式careerページで1万超のorganizationが利用すると案内し、Amazon、Stripe、Brex等を顧客として掲載。", verdict: "進出可能性は低〜中。日本企業との接点はあるがoffice・求人・local deliveryの投資は未確認", headcount: "501〜1,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。", apacText: "公式careerが掲載するofficeはSan Francisco、New York、Salt Lake City、Londonで、求人locationもUS・UKのみ。Japan・APACの拠点・求人は確認できない。", language: "日本語UI、support、implementation partner、国内cloud・security資料の同等性は未確認。", customers: ["Komatsu Australia", "Brex", "Plaid"], solutions: ["Retool Apps", "Retool Workflows", "Retool Agents"], competitors: "Microsoft Power Apps、Appsmith、custom development", fit: ["Internal Tools", "AI Agents", "Low Code", "Enterprise", "Developer Platform"] },
];

export const additions20260813WaveTwoIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  ...Object.fromEntries(enteredSeeds.map((seed) => [seed.slug, entered(seed)])),
  ...Object.fromEntries(preSeeds.map((seed) => [seed.slug, preEntry(seed)])),
};
