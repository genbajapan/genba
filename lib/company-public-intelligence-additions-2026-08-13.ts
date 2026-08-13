import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";

type EnteredSeed = {
  slug: string; name: string; founded: string; jobUrl: string; officialUrl: string; customersUrl: string; financeUrl: string;
  role: string; category: string; buyer: string; problems: [string, string, string]; origin: string; external: string;
  value: string; objection: string; reframe: string; headcount: string; japanPresence: string; japanSince: string;
  facts: [string, string, string, string]; customers: [string, string, string];
  solutions: [string, string, string]; competitors: string; fit: string[];
};

const externalUrl = "https://www.meti.go.jp/policy/it_policy/investment/dx-chushokigyou.html";
const checkedAt = "2026-08-13";

function entered(seed: EnteredSeed): CompanyPublicIntelligence {
  const profile: Profile = {
    checkedAt,
    slug: seed.slug,
    name: seed.name,
    jobUrl: seed.jobUrl,
    officialUrl: seed.officialUrl,
    customersUrl: seed.customersUrl,
    externalUrl,
    financeUrl: seed.financeUrl,
    salesSnapshot: `${seed.name}は、${seed.buyer}が抱える「${seed.problems[0]}」「${seed.problems[1]}」「${seed.problems[2]}」という課題を、${seed.category}で解く会社。${seed.role}を日本で採用しており、製品説明にとどまらず業務変化と投資効果を作る営業としての面白さがある。`,
    growthSummary: `${seed.facts[0]}、${seed.facts[1]}を公式情報で確認。日本では${seed.japanPresence}を持ち、公式求人からlocal GTMへの継続投資が見える。`,
    ipoSummary: "非公開企業の場合、IPO時期、日本売上、国内顧客数は未公表。公開企業の場合も日本単体の営業指標は未開示。",
    milestones: [
      { year: seed.founded, label: "創業", detail: `${seed.category}の課題を解く会社として創業。`, source: "company" },
      { year: "成長期", label: "製品拡張", detail: seed.origin, source: "company" },
      { year: "現在", label: "顧客基盤", detail: seed.facts[0], source: "finance" },
      { year: seed.japanSince, label: "日本展開", detail: seed.japanPresence, source: "company" },
      { year: "2026.08", label: "営業採用", detail: `${seed.role}の公式求人を確認。`, source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}などの公式事例から、導入目的は機能追加ではなく、${seed.problems[0]}を解消し、${seed.value}を実現することにある。` },
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
      { label: "グローバル規模", value: seed.headcount, detail: "会社公式または公式求人・法定開示で確認できる範囲。", source: "finance" },
      { label: "顧客・利用", value: seed.facts[0], detail: "会社公式の顧客・会社情報。", source: "customers" },
      { label: "製品の現在地", value: seed.facts[1], detail: "会社公式の製品・事業情報。", source: "company" },
      { label: "日本拠点", value: seed.japanPresence, detail: "日本語公式情報と求人で確認。", source: "company" },
      { label: "国内proof", value: seed.facts[2], detail: "公開された日本顧客・市場情報の範囲。", source: "customers" },
      { label: "現在の求人", value: seed.facts[3], detail: `${seed.role}を公式採用ページで確認。`, source: "job" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}を業務へ導入した公式事例を公開。`, implication: `${seed.value}をbuyerへ具体化できるreference。` })),
    externalSignals: [
      { label: "日本企業のDX", value: "生産性と統制の両立", detail: seed.external, caveat: `${seed.name}の効果や個別適合性を直接示すものではない。` },
      { label: "投資判断", value: "成果と運用risk", detail: "人手不足とAI・cloud活用が進むほど、導入速度だけでなくsecurity、data、運用責任、定着を同時に説明する必要がある。", caveat: "要件と成果は企業・業界・既存環境で異なる。" },
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
      { arena: "内製・既存標準", companies: [seed.name, "既存suite", "内製"], why: "TCO、control、time-to-value" },
    ],
  };
  return buildIntelligence(profile);
}

const enteredSeeds: EnteredSeed[] = [
  { slug: "sysdig", name: "Sysdig", founded: "2014", jobUrl: "https://jobs.lever.co/sysdig?department=Sales", officialUrl: "https://www.sysdig.com/jp/", customersUrl: "https://www.sysdig.com/jp/customers", financeUrl: "https://www.sysdig.com/company", role: "Country Manager, Japanとしてsales strategy、team、partner、pipeline、forecastを作る", category: "Cloud Native Application Protection Platform", buyer: "CISO・Cloud Security・Platform Engineering", problems: ["cloud・containerの資産とriskが短時間で変わり見えない", "build時のscanだけではproduction runtimeの攻撃優先度が分からない", "security toolを増やすほどalertと運用が分断する"], origin: "container runtimeの可視化をopen source Falcoとともに深め、実際に動くworkloadの挙動からpriorityを決めるsecurity platformへ拡張。", external: "cloud native化とsoftware supply chainの拡大により、企業は開発速度を維持しながら脆弱性、runtime threat、identity、complianceを継続管理する必要がある。", value: "critical risk、false positive、remediation time、tool costを減らす", objection: "hyperscaler標準機能と既存CNAPPで十分。", reframe: "機能表ではなく、productionで到達可能なriskの優先順位、検知速度、developer修正時間、tool consolidationを同じworkloadで比較する。", headcount: "501〜1,000人規模", japanPresence: "日本語公式サイト / Tokyo Japan GTM", japanSince: "日本市場で継続展開", facts: ["NTTドコモ・Loglass等の国内事例", "runtime insightを核にCNAPPを統合", "国内顧客事例あり", "Country Manager, Japan"], customers: ["NTTドコモ", "Loglass", "SAP Concur"], solutions: ["Sysdig Secure", "Cloud Detection and Response", "Vulnerability Management"], competitors: "Wiz、Palo Alto Prisma Cloud、CrowdStrike", fit: ["Cloud Security", "CNAPP", "Kubernetes", "Country Build", "Enterprise", "Partner"] },
  { slug: "saviynt", name: "Saviynt", founded: "2010", jobUrl: "https://jobs.lever.co/saviynt/e309fb59-65aa-486d-ada7-6f06fc3c0c58", officialUrl: "https://saviynt.com/ja/", customersUrl: "https://saviynt.com/ja/customers", financeUrl: "https://saviynt.com/ja/company", role: "Strategic Account Executiveとしてlarge enterpriseのnew logo、partner、renewal、expansionを担う", category: "Identity Security Platform", buyer: "CISO・IAM・IT Risk・Audit", problems: ["人・contractor・workload・AI agentのidentityとaccessが増え続ける", "legacy IGAの申請・棚卸・SoDが手作業で遅い", "過剰権限を減らしながら業務速度と監査を両立できない"], origin: "cloud-firstのidentity governanceとして、IGA、privileged access、application access、identity analyticsを一つのcontrol planeへ統合。", external: "cloud・SaaS・M&A・AI agentの増加によりidentityが新しいsecurity perimeterとなり、least privilege、継続的なaccess review、監査証跡が経営要求になる。", value: "access request時間、過剰権限、review工数、audit findingを減らす", objection: "Microsoft Entra、SailPoint、既存IAMの拡張で十分。", reframe: "licenseではなく、joiner-mover-leaver、SoD、privileged access、AI identityを何個のapplicationへ一貫して展開できるかで比較する。", headcount: "501〜1,000人規模", japanPresence: "日本語公式サイト / Japan sales team", japanSince: "日本市場で継続展開", facts: ["1億超のidentityを保護", "cloud-first identity platform", "日本語site・APJ体制", "Strategic Account Executive"], customers: ["Petco", "ENGIE", "VF Corporation"], solutions: ["Enterprise Identity Cloud", "Identity Governance", "Privileged Access Management"], competitors: "SailPoint、Microsoft Entra、CyberArk", fit: ["Identity Security", "IGA", "Strategic", "Regulated", "Enterprise", "Partner"] },
  { slug: "walkme", name: "WalkMe", founded: "2011", jobUrl: "https://jobs.lever.co/walkme?location=Tokyo", officialUrl: "https://www.walkme.com/jp/", customersUrl: "https://www.walkme.com/customer-stories/", financeUrl: "https://www.walkme.com/jp/about-us/", role: "Partner Sales ManagerとしてSI・consulting partnerとのjoint GTM、enablement、pipelineを作る", category: "Digital Adoption Platform", buyer: "CIO・Transformation・Business Application・HR", problems: ["大規模softwareへ投資しても現場が正しいworkflowを使いこなせない", "trainingとmanualが更新へ追いつかずsupport costが増える", "adoptionをusageではなくbusiness outcomeで測れない"], origin: "画面上で利用者を文脈的にguideする発想から始まり、workflow analytics、automation、AI assistanceを統合したDigital Adoption Platformへ発展。", external: "人手不足とsystem刷新が重なるなか、企業にはlicense導入ではなく現場定着、process compliance、生産性という成果の説明が求められる。", value: "task completion、error、support ticket、training time、software utilizationを改善", objection: "system vendorの標準helpと研修で十分。", reframe: "guideの見た目ではなく、複数applicationを横断して業務完了率とchange adoptionを継続測定できるかで比較する。", headcount: "900人超", japanPresence: "WalkMe株式会社 / Tokyo", japanSince: "日本法人で継続展開", facts: ["約2,000顧客", "Fortune 500の31%", "日本法人・国内team", "Alliance・Partner・Solution 3職種"], customers: ["IBM", "Nestlé", "Schneider Electric"], solutions: ["WalkMe Digital Adoption Platform", "WalkMe Discovery", "WalkMe AI"], competitors: "SAP Enable Now、Whatfix、Pendo", fit: ["Digital Adoption", "Change Management", "Partner", "Enterprise", "SAP", "AI"] },
  { slug: "sonar", name: "Sonar", founded: "2008", jobUrl: "https://jobs.lever.co/sonarsource", officialUrl: "https://www.sonarsource.com/ja/", customersUrl: "https://www.sonarsource.com/customers/", financeUrl: "https://www.sonarsource.com/company/", role: "Enterprise Territory ManagerとPartner Business ManagerとしてJapan territoryを拡大", category: "Code Quality and Application Security Platform", buyer: "CTO・Engineering・Application Security・Developer Platform", problems: ["開発速度が上がるほどbug・vulnerability・technical debtが蓄積する", "security reviewをrelease直前に行うと修正costとfrictionが増える", "AI生成codeを含む品質基準を全developerへ一貫して適用できない"], origin: "developerがcodeを書く瞬間にquality feedbackを返すClean as You Codeの思想から、IDE、CI、repositoryを横断するcode quality・security platformへ拡張。", external: "software supply chainとAI codingの普及により、企業はdelivery速度を上げながらnew codeのsecurity、maintainability、auditabilityを証明する必要がある。", value: "new-code issue、remediation time、review rework、release riskを減らす", objection: "GitHub・GitLabのsecurityとopen-source scannerで十分。", reframe: "scanner数ではなく、IDEからCIまでdeveloper workflowへ定着し、new codeのquality gateを何teamへ標準化できるかで比較する。", headcount: "700人超規模", japanPresence: "日本語公式サイト / Tokyo GTM", japanSince: "Japan territoryで継続展開", facts: ["広範なdeveloper利用", "SonarQube・SonarCloud・SonarQube for IDE", "日本語site・Tokyo採用", "Enterprise Territory / Partner Manager"], customers: ["Global financial institution", "Global retailer", "Large software company"], solutions: ["SonarQube Server", "SonarQube Cloud", "SonarQube for IDE"], competitors: "GitHub Advanced Security、Snyk、Veracode", fit: ["Developer Tools", "AppSec", "Code Quality", "Enterprise", "Partner", "PLG"] },
  { slug: "asana", name: "Asana", founded: "2008", jobUrl: "https://asana.com/jobs/tokyo", officialUrl: "https://asana.com/ja", customersUrl: "https://asana.com/ja/campaign/case-studies", financeUrl: "https://investors.asana.com/", role: "Corporate Account Executiveとしてnew logoとexisting customer expansionをfull-cycleで担う", category: "Work Management Platform", buyer: "COO・PMO・Transformation・Business Team・IT", problems: ["strategy、project、task、communicationがtoolと部門に分散する", "会議と進捗確認に時間を使い責任・期限・依存関係が曖昧になる", "AI agentを導入しても人の仕事と同じplan・context・governanceへ接続できない"], origin: "Facebook内で仕事のための仕事が増える課題から創業し、task managementからWork Graph、portfolio、goal、workflow、AI teammateへ拡張。", external: "hybrid work、部門横断project、AI agentの増加により、経営にはstrategyとexecutionをつなぎ、誰が何をいつまでに行うかを継続的に可視化する要求がある。", value: "coordination time、cycle time、missed deadline、workload偏り、goal alignmentを改善", objection: "Microsoft 365、Jira、Slackとspreadsheetで十分。", reframe: "task数ではなく、strategy、portfolio、workflow、人とAIのexecutionを部門横断で一つのwork graphへ接続できるかで比較する。", headcount: "1,500人超規模", japanPresence: "Asana Japan / Tokyo office", japanSince: "Tokyo officeで継続展開", facts: ["169,000社超（公開基準時点）", "Fortune 100の85%で利用", "Fujitsu・SmartHR等の国内事例", "Corporate Account Executive"], customers: ["Fujitsu", "SmartHR", "Cross Marketing"], solutions: ["Asana Enterprise", "Asana AI", "Goals and Portfolios"], competitors: "Microsoft Planner、monday.com、Atlassian", fit: ["Work Management", "AI Collaboration", "Corporate", "PLG", "Enterprise", "Change"] },
  { slug: "channel-talk", name: "Channel Talk", founded: "2017", jobUrl: "https://jobs.lever.co/zoyi?department=Japan", officialUrl: "https://channel.io/ja", customersUrl: "https://channel.io/ja/blog/case-study", financeUrl: "https://channel.io/ja/team", role: "SMB・Enterprise・Partner・Field Sales等を横断してJapan growthを作る", category: "AI Customer Service and CRM Platform", buyer: "CX・Customer Support・EC・Marketing・Sales", problems: ["chat、電話、email、CRM dataが分断して顧客文脈が途切れる", "問い合わせ増へ人員だけで対応し品質と速度が安定しない", "supportをcost centerではなくretention・売上へつなげられない"], origin: "顧客と企業が直接つながるbusiness messengerから始まり、CRM marketing、support workflow、voice、AI agent ALFを一つのcustomer hubへ統合。", external: "EC・subscription・digital serviceの競争で、企業には24時間対応とpersonalizationを求められる一方、人手不足、個人情報、AI品質の管理が必要になる。", value: "resolution time、automation、repeat purchase、conversion、support productivityを改善", objection: "Zendesk、LINE、HubSpot、contact centerの組み合わせで十分。", reframe: "channel数ではなく、会話・顧客data・marketing・voice・AI resolutionを同じcustomer historyで動かせるかで比較する。", headcount: "200人超規模", japanPresence: "Channel Corporation Japan / Tokyo", japanSince: "日本事業を継続拡大", facts: ["19万超のservice利用（会社公開時点）", "service継続率98%（会社発表）", "国内EC・brand事例多数", "営業系8職種以上"], customers: ["and ST", "PAUL & JOE", "SNKRDUNK"], solutions: ["Channel Talk", "ALF AI Agent", "CRM Marketing / Voice"], competitors: "Zendesk、Intercom、HubSpot", fit: ["AI CX", "CRM", "SMB", "Enterprise", "Japan Growth", "Scale-up"] },
  { slug: "extreme-networks", name: "Extreme Networks", founded: "1996", jobUrl: "https://jobs.lever.co/extremenetworks?location=Tokyo%2C+Japan", officialUrl: "https://ja.extremenetworks.com/", customersUrl: "https://www.extremenetworks.com/resources/customer-stories", financeUrl: "https://investor.extremenetworks.com/", role: "Sr. Services Sales Account Executiveとしてnetwork案件へservicesを組み込み成果まで担う", category: "Cloud Networking Platform", buyer: "CIO・Network・Infrastructure・Security・Operations", problems: ["campus、branch、data centerのnetworkがvendor・siteごとに分断する", "Wi-Fi・switch・fabricの運用がmanualで障害原因と変更riskが見えない", "hardware更新だけではuser experienceと運用生産性を改善できない"], origin: "high-performance network equipmentから、acquisitionを通じてwired、wireless、fabric、cloud management、AI operationsを統合したnetwork platformへ発展。", external: "hybrid work、IoT、cloud、cyber riskによりnetworkは単なる接続ではなく、experience、segmentation、resilience、運用automationを担うbusiness infrastructureになる。", value: "incident、change time、onsite operation、downtime、services time-to-valueを改善", objection: "Cisco、HPE Aruba、Juniperの既存standardで十分。", reframe: "box単価ではなく、multi-site visibility、fabric automation、cloud operations、migration・supportを含むlifecycle TCOで比較する。", headcount: "2,000人超規模", japanPresence: "Extreme Networks Japan / Tokyo", japanSince: "日本法人で継続展開", facts: ["global enterprise・public sector顧客", "wired・wireless・fabric・cloud管理", "国内法人・partner ecosystem", "Services Sales Account Executive"], customers: ["Major university", "Global manufacturer", "Large venue operator"], solutions: ["ExtremeCloud IQ", "Universal Switch / Wireless", "Fabric Connect"], competitors: "Cisco、HPE Aruba、Juniper Mist", fit: ["Networking", "Cloud Operations", "Services Sales", "Channel", "Enterprise", "Infrastructure"] },
  { slug: "zadara", name: "Zadara", founded: "2011", jobUrl: "https://jobs.lever.co/Zadara?location=Tokyo", officialUrl: "https://www.zadara.com/ja/", customersUrl: "https://www.zadara.com/ja/customers/", financeUrl: "https://www.zadara.com/about/", role: "Senior Account Executiveとしてenterprise・service providerのnew logoとpartnerを開拓", category: "Sovereign Edge Cloud Platform", buyer: "CIO・Cloud・Infrastructure・Service Provider・Data Governance", problems: ["public cloudかon-premisesかの二択ではdata location・control・economicsを満たせない", "storage・compute・networkの運用とcapacity planningが重い", "AI・regulated workloadを現場近くで安全に動かす基盤が不足する"], origin: "enterprise storage-as-a-serviceから始まり、partner-operated locationでcompute、network、GPU、sovereign AIを提供するedge cloud platformへ拡張。", external: "data sovereignty、AI workload、edge latency、cloud costへの要求により、企業はpublic cloudの利便性とprivate controlを組み合わせるarchitectureを求める。", value: "capacity cost、deployment time、data movement、operation、recovery objectiveを改善", objection: "AWS・Azure・GCPか国内cloud、on-premで十分。", reframe: "instance単価ではなく、data location、ownership、managed operation、consumption、egress、resilienceをworkload単位で比較する。", headcount: "201〜500人規模", japanPresence: "日本語公式サイト / Japan customers / Tokyo sales coverage", japanSince: "日本市場で継続展開", facts: ["500超のcloud location", "sovereign edge cloudへ製品拡張", "KDDI・山鹿市等の国内proof", "Senior Account Executive"], customers: ["KDDI", "LG Electronics", "山鹿市"], solutions: ["zCompute", "zStorage", "Sovereign AI Edge Cloud"], competitors: "AWS、Azure、国内cloud・private cloud", fit: ["Cloud", "Storage", "Sovereign AI", "Edge", "Service Provider", "Partner"] },
];

type PreSeed = {
  slug: string; name: string; homepage: string; growthUrl: string; careers: string; customersUrl: string; trust: string; apac: string; linkedin: string;
  category: string; buyer: string; problem: string; growth: string; headcount: string; apacText: string; language: string; customers: [string, string, string]; solutions: [string, string, string]; competitors: string;
};

function preEntry(seed: PreSeed): CompanyPublicIntelligence {
  const assessment: JapanEntryAssessment = {
    verdict: "日本進出の可能性は中。global tractionは十分だが、日本固有のcommercial proofとlocal deliveryは未確認",
    factSignals: [
      { title: "事業規模と成長", body: seed.growth, sourceIds: ["growth"] },
      { title: "APACへの足場", body: seed.apacText, sourceIds: ["apac", "careers"] },
      { title: "日本市場との課題親和性", body: `${seed.buyer}が抱える${seed.problem}は日本企業にも存在する。`, sourceIds: ["company", "external"] },
      { title: "global customer proof", body: `${seed.customers.join("、")}などの公式事例・利用情報があり、categoryの価値検証は進んでいる。`, sourceIds: ["customers"] },
    ],
    hurdles: [
      { title: "Japan固有の需要証明がない", body: "日本顧客事例、Japan ARR、qualified pipeline、renewalの公式値を確認できない。", sourceIds: ["customers", "growth"] },
      { title: "日本語とdata coverage", body: `${seed.language}。UI、support、契約、security資料の日本語同等性も未確認。`, sourceIds: ["company", "trust"] },
      { title: "local delivery体制", body: "Japan・Tokyo office、country leader、専任AE・SE・CS、国内partnerを公式career・拠点情報で確認できない。", sourceIds: ["careers", "apac"] },
      { title: "既存vendorとの競争", body: `${seed.competitors}が既存relationship、data、bundleを持ち、追加platformのTCOを正当化する必要がある。`, sourceIds: ["company"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse customer", body: "国内顧客でproduction利用、renewal、定量成果を公開する。" },
      { title: "日本語・data readiness", body: "日本語UI、support、security、国内data品質を主要use caseで証明する。" },
      { title: "local partner", body: "国内SI・consulting・agency・MSSP等のdeliveryとco-sellを確立する。" },
      { title: "専任Japan pod", body: "AEだけでなくSE・CS・Marketing・Legal/Securityを日本時間でcoverする。" },
      { title: "repeatable economics", body: "Japan pipeline、ACV、cycle、retentionがlocal固定費を継続的に支える。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本語公式site・support", "国内顧客事例", "Japan country leader・法人", "国内partner発表", "APAC teamのJapan territory表記"],
  };
  return buildPreEntryIntelligence({
    checkedAt, slug: seed.slug, name: seed.name, homepage: seed.homepage, growthUrl: seed.growthUrl, careersUrl: seed.careers, customersUrl: seed.customersUrl, trustUrl: seed.trust, apacUrl: seed.apac, externalUrl, linkedinUrl: seed.linkedin,
    salesSnapshot: `${seed.name}は、${seed.buyer}が抱える「${seed.problem}」を${seed.category}で解く会社。日本法人・Tokyo拠点・Japan求人は確認できないが、海外の成長・customer proof・APAC動向から、日本進出の成立条件を追う価値がある。`,
    growthSummary: seed.growth,
    verdict: assessment.verdict,
    entryNarrative: `${seed.growth} ${seed.apacText} 一方、日本法人、Tokyo office、Japan求人、国内顧客事例、日本語提供の同等性は確認できない。${seed.buyer}の課題とは親和性があるが、global tractionだけで進出時期は断定できない。国内lighthouse customer、local partner、日本語・data readiness、専任delivery、repeatable economicsが揃えばJapan podは現実的になる。`,
    headcount: seed.headcount, headcountDetail: "会社公式またはLinkedIn企業ページの公開レンジ。厳密な最新在籍数ではない。", apacPresence: seed.apacText, productLanguage: seed.language,
    milestones: [
      { year: "創業期", label: "category起点", detail: `${seed.problem}を解くproductとして開始。`, source: "company" },
      { year: "成長期", label: "顧客拡大", detail: seed.growth, source: "growth" },
      { year: "現在", label: "platform化", detail: `${seed.category}として複数workflowを統合。`, source: "company" },
      { year: "現在", label: "APAC", detail: seed.apacText, source: "apac" },
      { year: "2026.08", label: "Japan観測", detail: "Japan法人・拠点・求人は未確認。", source: "apac" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: `${seed.customers.join("、")}などの利用は、point tool追加ではなく${seed.problem}を解き、GTM・security・operationの成果を上げる目的を示す。` },
      { title: "製品の成り立ちから見る課題", body: `${seed.category}としてdata、AI、workflow、measurementを一つにし、手作業とsystem分断を解く設計。` },
      { title: "外部環境の要求から見る課題", body: "AI・cloud・digital channelの拡大により企業は生産性を上げる一方、data accuracy、privacy、security、governance、human reviewへの説明責任も負う。" },
    ],
    narrative: [
      { label: "背景", body: `${seed.buyer}のdata・tool・workflowが増え、判断とexecutionが分断する。` },
      { label: "課題", body: seed.problem },
      { label: "解決策", body: `${seed.category}を一つの高頻度use caseへ導入し、時間、品質、risk、conversion、costをbaseline比較する。` },
      { label: "選定の理由", body: `${seed.competitors}との比較でdata、workflow、AI、governance、time-to-valueを一体化できる場合に選ばれる。` },
    ],
    openingHook: `${seed.problem}ことで失う時間・pipeline・riskを、現在どのKPIで把握していますか。`, valueHypothesis: "一つのuse caseでmanual time、accuracy、conversion、cycle、risk、adoptionを測る。", objection: `${seed.competitors}で十分。`, reframe: "機能数ではなく、dataからaction、governance、measurementまでの一貫性と運用TCOで比較する。",
    facts: [
      { label: "会社規模", value: seed.headcount, detail: "公開情報の範囲。", source: "growth" },
      { label: "成長", value: seed.growth.slice(0, 50), detail: seed.growth, source: "growth" },
      { label: "APAC", value: seed.apacText.slice(0, 42), detail: seed.apacText, source: "apac" },
      { label: "顧客proof", value: seed.customers[0], detail: `${seed.customers.join("、")}を公式情報で確認。`, source: "company" },
      { label: "日本提供", value: "同等性未確認", detail: seed.language, source: "company" },
      { label: "日本求人", value: "未確認", detail: "Japan・Tokyo勤務地または担当市場の求人を確認できない。", source: "careers" },
    ],
    customers: seed.customers.map((company) => ({ company, products: seed.solutions[0], outcome: `${seed.category}の公式customer proofとして公開。`, implication: `${seed.problem}をbusiness outcomeへ変えるreference。` })),
    externalSignals: [
      { label: "日本市場", value: "生産性とgovernance", detail: "人手不足とAI活用の拡大でautomationとcontrolを同時に求める。", caveat: `${seed.name}の日本進出決定や個別効果を示さない。` },
      { label: "data・AI責任", value: "accuracy・privacy・security", detail: "dataとAIを業務判断へ使うほどsource、目的、権限、human reviewが重要になる。", caveat: "具体要件は業界・data・利用方法で異なる。" },
    ],
    entryAssessment: assessment, sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
    salesMotion: `${seed.buyer}へcategory problemを啓蒙し、一use caseのproofからteam・region・workflowへexpandするEnterprise/PLG hybrid sale。`,
    careerValue: `${seed.category}のcategory creation、APAC market development、data/AI governance、partner-led Japan entryを扱う可能性。`,
    leader: { name: "公式Leadership参照", role: "CEO / Executive Team", read: "創業課題からplatformとglobal GTMへ拡張。Japan投資の意思決定者・ownerは未確認。" },
    solutions: seed.solutions.map((name) => ({ name, valueProp: seed.problem, url: seed.homepage, competitors: seed.competitors, differentiation: `${seed.category}としてdata・AI・workflowを統合。` })),
    fitTags: ["日本未進出", seed.category, "APAC", "Enterprise", "Category Creation", "Japan Entry"],
    comparisons: [
      { arena: seed.category, companies: [seed.name, ...seed.competitors.split("、").slice(0, 2)], why: "data、workflow、AI、delivery" },
      { arena: "Japan entry", companies: [seed.name, "APAC hub", "local partner"], why: "顧客proof、language、economics" },
    ],
  });
}

const preSeeds: PreSeed[] = [
  { slug: "sixsense", name: "6sense", homepage: "https://6sense.com/", growthUrl: "https://6sense.com/about-us/", careers: "https://6sense.com/careers/", customersUrl: "https://6sense.com/customers/", trust: "https://6sense.com/trust/", apac: "https://6sense.com/about-us/locations/", linkedin: "https://www.linkedin.com/company/6sense/", category: "Revenue AI Platform", buyer: "CMO・CRO・RevOps・Sales Development", problem: "匿名buyer signal、CRM、intent、campaign、seller actionが分断し、どのaccountが今買うか分からない", growth: "10,000人超のRevCity communityと多数のEnterprise customer storiesを持ち、Revenue AIをmarketingからsales executionへ拡張。", headcount: "1,001〜5,000人規模", apacText: "APACで顧客・採用・regional活動を展開するが、Japan・Tokyoの公式拠点と求人は未確認。", language: "日本語site・support・domestic intent coverage・data sourceの同等性は未確認。", customers: ["Ivanti", "Tipalti", "FullStory"], solutions: ["6sense Revenue AI", "Sales Intelligence", "Intelligent Workflows"], competitors: "Demandbase、ZoomInfo、Salesforce" },
  { slug: "abnormal-ai", name: "Abnormal AI", homepage: "https://abnormal.ai/", growthUrl: "https://abnormal.ai/about", careers: "https://careers.abnormal.ai/", customersUrl: "https://abnormal.ai/customers", trust: "https://abnormal.ai/trust", apac: "https://abnormal.ai/about", linkedin: "https://www.linkedin.com/company/abnormal-security/", category: "AI-Native Human Behavior Security Platform", buyer: "CISO・Email Security・SOC・IT", problem: "credential・vendor・conversationを悪用するattackが正規emailに似ており、ruleとgatewayだけではhuman-layer riskを見抜けない", growth: "4,500社超、Fortune 500の25%超が利用すると会社発表。emailからidentity・AI・insider threatへplatformを拡張。", headcount: "1,001〜5,000人規模", apacText: "APJ向けの顧客・GTM活動は見られるが、Japan法人・Tokyo拠点・Japan求人は公式情報で未確認。", language: "日本語emailのbehavior model、support、incident response、data handlingの同等性は未確認。", customers: ["Domino's", "Valvoline", "Hitachi Energy"], solutions: ["Abnormal Inbound Email Security", "Account Takeover Protection", "Human Behavior Security"], competitors: "Microsoft Defender、Proofpoint、Mimecast" },
  { slug: "apollo-io", name: "Apollo.io", homepage: "https://www.apollo.io/", growthUrl: "https://www.apollo.io/about", careers: "https://www.apollo.io/careers", customersUrl: "https://www.apollo.io/customers", trust: "https://trust.apollo.io/", apac: "https://www.apollo.io/we-are-apollo", linkedin: "https://www.linkedin.com/company/apolloio/", category: "AI Go-to-Market Data and Engagement Platform", buyer: "CRO・Sales・SDR・RevOps・Growth", problem: "B2B contact data、account research、outreach、call、CRM更新がpoint toolと手作業に分断し、pipeline creationの質と速度が安定しない", growth: "700人超・30カ国、4万のpaying customer、100万のsales professional利用を会社発表。Enterprise pageではさらに広いteam利用を訴求。", headcount: "700人超", apacText: "30カ国に分散するremote-first teamを持つが、Japan法人・Tokyo office・Japan GTM求人は未確認。", language: "日本語contact dataのcoverage・accuracy、特定電子メール等の運用、日本語UI・supportの同等性は未確認。", customers: ["Smartling", "Glean", "Sterling Engineering"], solutions: ["Apollo Data Intelligence", "Sales Engagement", "AI Revenue Engine"], competitors: "ZoomInfo、Salesloft、HubSpot" },
];

export const additions20260813IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  ...Object.fromEntries(enteredSeeds.map((seed) => [seed.slug, entered(seed)])),
  ...Object.fromEntries(preSeeds.map((seed) => [seed.slug, preEntry(seed)])),
};
