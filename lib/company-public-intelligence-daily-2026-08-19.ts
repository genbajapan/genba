import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-19";
const gitlabCheckedAt = "2026-08-28";

const gitlabIntelligence = buildIntelligence({
  checkedAt: gitlabCheckedAt,
  slug: "gitlab",
  name: "GitLab",
  jobUrl: "https://job-boards.greenhouse.io/gitlab",
  officialUrl: "https://about.gitlab.com/company/team/",
  customersUrl: "https://about.gitlab.com/customers/fujitsu/",
  externalUrl: "https://www.ipa.go.jp/digital/ai/guideline.html",
  financeUrl: "https://about.gitlab.com/press/releases/2026-03-03-gitlab-reports-fourth-quarter-fiscal-year-2026-financial-results/",
  publicInfo: { ticker: "GTLB", exchange: "NASDAQ", listedSince: "2021年" },
  salesSnapshot: "GitLabは、planning、source code、CI/CD、security、AIを一つのDevSecOps platformへ統合する会社。日本向けにEnterprise Sales、Ecosystem、Professional Services、Commercial Legalの4求人を公式募集し、販売から導入・契約まで複数機能を補強している。",
  growthSummary: "FY2026にARR 10億ドル超、free cash flow 2.2億ドル、登録user 5,000万人超を公表。2026年5月にはagentic software deliveryへ集中する再編も発表しており、成長指標と実行riskを併せて見る必要がある。日本単体の売上、顧客数、partner経由売上は非公開。",
  milestones: [
    { year: "2014", label: "創業・会社設立", detail: "open source projectを基にGitLab Inc.を設立。", source: "company" },
    { year: "2020", label: "日本へ本格進出", detail: "日本語製品・営業・support体制を含む市場投資を公式発表。", source: "company" },
    { year: "2021", label: "NASDAQ上場", detail: "ticker GTLBで上場。", source: "finance" },
    { year: "2026.03", label: "ARR 10億ドル超", detail: "FY2026通期でARR 10億ドル超、free cash flow 2.2億ドルを公表。", source: "finance" },
    { year: "2026.08", label: "日本向け4求人", detail: "Enterprise Sales、Ecosystem、Professional Services、Commercial Legalの公式求人を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "富士通の公式事例は、複数toolと手作業に分かれたsoftware deliveryを共通platformへ寄せ、workflow、security、developer productivityを改善する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "source code collaborationからCI/CD、planning、security、AIへ広がり、point toolを継ぎ足すのではなくsoftware lifecycleのdataとgovernanceを一つにする設計。" },
    { title: "外部環境の要求から見る課題", body: "AI codingとagentが変更量を増やすほど、企業は生成速度だけでなくsource、review、security、audit、production責任を同時に管理する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "code、CI/CD、security scan、issue、AI assistantが別toolに分かれ、software deliveryのcontextと責任が切れている。" },
    { label: "課題", body: "handoff、license、integration、security exceptionが増え、release速度とgovernanceを同時に説明できない。" },
    { label: "解決策", body: "重要productを対象にplanningからproductionまでを一つのplatformへ寄せ、lead time、deployment frequency、change failure、security remediation、developer hoursを測る。" },
    { label: "選定の理由", body: "GitHub、Microsoft、Atlassian、Jenkins、Snyk、cloud-native toolとの比較で、lifecycle全体のdata、workflow、security、AI governanceを統合できる場合に選ぶ。" },
  ],
  openingHook: "ideaがproductionへ届くまで、code、CI/CD、security、approvalを何tool・何teamで渡し、待ち時間と例外処理に何時間使っていますか。",
  valueHypothesis: "lead time、deployment frequency、change failure、MTTR、security remediation、tool cost、developer hoursをbaseline比較する。",
  objection: "GitHub、Azure DevOps、Jenkins、security toolを既に使っており、GitLabへ寄せるmigration costとlock-inが大きい。",
  reframe: "license単価ではなく、integration、administration、handoff、security exception、developer timeを含むproduct単位の3年TCOとdelivery成果で比較する。",
  facts: [
    { label: "FY2026 ARR", value: "10億ドル超", detail: "会社のFY2026決算発表。", source: "finance" },
    { label: "FY2026 free cash flow", value: "2.2億ドル", detail: "会社のFY2026決算発表。", source: "finance" },
    { label: "登録user", value: "5,000万人超", detail: "2026年6月時点の会社情報。", source: "company" },
    { label: "team members", value: "2,500人超", detail: "all-remote組織の会社表示。", source: "company" },
    { label: "日本市場", value: "2020年本格参入", detail: "公式press release。", source: "company" },
    { label: "日本法人での想定従業員数", value: "58人", detail: "gBizINFOの事業所欄に掲載された被保険者数。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "4件", detail: "Territory Sales Manager、Senior Ecosystem Sales Manager、Senior Professional Services Engineer、Senior Commercial Legal Counsel。", source: "job" },
  ],
  customers: [
    { company: "富士通", products: "GitLab", outcome: "cloud service開発のworkflowとcollaborationを改善した国内公式事例。", implication: "大規模日本企業でplatform標準化を進めるproof。" },
    { company: "NatWest Group", products: "GitLab Ultimate", outcome: "software deliveryとsecurity workflowを共通platformへ統合した事例。", implication: "regulated enterpriseで速度とgovernanceを同時に扱う参照例。" },
    { company: "Mercedes-Benz", products: "GitLab", outcome: "global software developmentのcollaboration platformとして公式掲載。", implication: "分散teamと複雑なproduct portfolioでのscale proof。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "lifecycle全体の責任", detail: "AI事業者ガイドラインはrisk、透明性、accountability、人間中心の運用を求める。", caveat: "GitLabの利用が個別systemの適法性・安全性を保証するものではない。" },
    { label: "software supply chain", value: "速度と統制", detail: "AI生成codeが増えるほどsource、dependency、review、security、deploymentのtraceabilityが重要になる。", caveat: "platform統合だけで脆弱性やincidentを防げるわけではない。" },
  ],
  role: "Territory Sales ManagerはDigital Native・Retailの大手顧客、Ecosystem Salesはhyperscaler・GSI・partner、Professional Servicesは導入・migration、Commercial LegalはAPAC取引を担う。",
  organization: "all-remoteのglobal組織で、日本向け4求人がSales、Ecosystem、Professional Services、Legalを横断する。GitLab合同会社は確認できるが、現在のteam構成とreporting lineは非公開。",
  careerValue: "DevSecOps・AI software deliveryでEnterprise Sales、alliance、顧客導入、APAC commercial legalの複数careerを比較できる。",
  globalHeadcount: "2,500人超",
  japanPresence: "GitLab合同会社・東京都中央区日本橋。2020年に日本市場への本格参入を公式発表",
  japanSince: "2020年に本格参入",
  solutions: [
    { name: "GitLab DevSecOps Platform", valueProp: "planning、source、CI/CD、security、operationsを一つのapplicationとdata modelでつなぐ。", url: "https://about.gitlab.com/platform/", competitors: "GitHub、Azure DevOps、Atlassian、Jenkins、Snyk。", differentiation: "software lifecycle全体をsingle applicationで扱う設計。" },
    { name: "GitLab Duo", valueProp: "software lifecycleへAI支援とagentic workflowを組み込み、開発・review・securityを支援する。", url: "https://about.gitlab.com/gitlab-duo/", competitors: "GitHub Copilot、Amazon Q Developer、Google Gemini Code Assist。", differentiation: "code生成だけでなくDevSecOps contextとgovernanceへ接続。" },
    { name: "GitLab Ultimate", valueProp: "Enterprise向けsecurity、compliance、portfolio、governance機能を提供する。", url: "https://about.gitlab.com/pricing/ultimate/", competitors: "GitHub Enterprise、Azure DevOps、複数point tool。", differentiation: "deliveryとsecurity・complianceを同じworkflowへ統合。" },
  ],
  fitTags: ["アンカー企業", "DevSecOps", "AI", "Developer Platform", "Ecosystem Sales", "Remote", "Japan"],
  comparisons: [
    { arena: "DevSecOps Platform", companies: ["GitLab", "GitHub", "Microsoft"], why: "lifecycle coverage、AI、security、governance、TCO" },
    { arena: "Software Delivery", companies: ["GitLab", "Atlassian", "Jenkins", "cloud-native"], why: "planning、CI/CD、integration、operations" },
    { arena: "Application Security", companies: ["GitLab", "Snyk", "Checkmarx", "Veracode"], why: "developer workflow、coverage、remediation、audit" },
  ],
});

const watchguardIntelligence = buildIntelligence({
  checkedAt,
  slug: "watchguard",
  name: "WatchGuard Technologies",
  jobUrl: "https://jobs.lever.co/watchguard/31981db1-54fb-4764-9f8c-16b886d176ae",
  officialUrl: "https://www.watchguard.com/wgrd-about",
  customersUrl: "https://www.watchguard.co.jp/success-stories",
  externalUrl: "https://www.ipa.go.jp/security/10threats/10threats2026.html",
  salesSnapshot: "WatchGuardはnetwork、endpoint、identity、MDRをWatchGuard Cloudへまとめ、MSP・channelが中堅中小企業へ運用できるsecurity platformを提供する会社。Country Manager - Japanは営業戦略、売上、forecast、team、distribution、partnerをまとめて日本事業を率いる。",
  growthSummary: "会社表示はglobal 1,250人、25,000 MSP、179カ国のpartner、175万台のactive network security appliance、750万のendpoint・identity保護。非公開企業のため売上、ARR、成長率、日本単体の顧客数・売上は非公開。",
  ipoSummary: "非公開企業。IPO計画、全社売上、ARR、日本売上は公表されていない。",
  milestones: [
    { year: "1996", label: "創業", detail: "network security applianceから事業を開始。", source: "company" },
    { year: "2015", label: "Unified Security", detail: "network、endpoint、identityをchannel・MSPが運用できるplatformへ拡張。", source: "company" },
    { year: "2025", label: "MDR拡張", detail: "managed detection and responseをMSP portfolioへ拡張。", source: "company" },
    { year: "2026.08", label: "日本Country Manager採用開始", detail: "東京onsiteで日本事業責任者を募集。事業開始年を意味しない。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "宮崎市やソフトクリエイト・ホールディングス等の国内事例は、endpoint・networkの防御と運用を統合し、限られた人員でsecurityを継続する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "network security applianceからendpoint、identity、MFA、MDR、XDRへ広がり、MSPが複数顧客を共通cloud consoleで運用できる設計。" },
    { title: "外部環境の要求から見る課題", body: "ransomware、credential abuse、cloud・endpoint分散が続く一方、国内の中堅中小企業と地域事業者はsecurity人材が限られる。Buyerは製品数より、24時間運用、検知・対応時間、partner deliveryを求める。" },
  ],
  narrative: [
    { label: "背景", body: "中堅中小企業ではfirewall、endpoint、identity、incident対応が別製品・別partnerへ分かれている。" },
    { label: "課題", body: "alertと契約は増えても24時間監視、優先順位、復旧責任が曖昧で、担当者とMSPの負荷が上がる。" },
    { label: "解決策", body: "対象customer群でnetwork、endpoint、identity、MDRを共通platformへ寄せ、coverage、detection、response、ticket、運用時間、costを測る。" },
    { label: "選定の理由", body: "Fortinet、Sophos、Palo Alto Networks、Cisco、Microsoft、CrowdStrikeとの比較で、MSP運用、portfolio統合、partner economicsが合う場合に選ぶ。" },
  ],
  openingHook: "security製品とalertが増える中で、誰が24時間監視し、重大incidentを何分で判断・封じ込め、顧客へ説明する責任を持っていますか。",
  valueHypothesis: "coverage、alert、MTTD、MTTR、incident、analyst hours、ticket、service attach、顧客当たり運用costをbaseline比較する。",
  objection: "既存のMicrosoft、Fortinet、Sophos等で足りており、別vendorを追加するとskillと運用が分散する。",
  reframe: "appliance単価ではなく、network・endpoint・identity・MDRの運用時間、partner margin、incident costを含む顧客群単位の3年TCOで比較する。",
  facts: [
    { label: "global人員", value: "1,250人", detail: "会社About表示。", source: "company" },
    { label: "MSP", value: "25,000", detail: "会社About表示。", source: "company" },
    { label: "partner展開", value: "179カ国", detail: "会社About表示。", source: "company" },
    { label: "active appliance", value: "175万台", detail: "network security applianceの会社表示。", source: "company" },
    { label: "保護対象", value: "750万", detail: "endpoint・identityの会社表示。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Country Manager - Japan。", source: "job" },
  ],
  customers: [
    { company: "宮崎市", products: "WatchGuard EPDR", outcome: "自治体endpoint securityの運用事例を日本公式サイトで掲載。", implication: "国内public sectorでendpoint防御と運用を扱うproof。" },
    { company: "ソフトクリエイト・ホールディングス", products: "WatchGuard", outcome: "国内企業のsecurity基盤事例を公式掲載。", implication: "日本のpartner・enterprise運用へ接続する参照例。" },
    { company: "WatchGuard MSP network", products: "Unified Security Platform", outcome: "25,000 MSPへportfolioを提供すると会社表示。", implication: "directだけでなくservice provider economicsがGTMの中心。" },
  ],
  externalSignals: [
    { label: "情報security脅威", value: "継続運用", detail: "IPAの情報security 10大脅威はransomware、supply chain、credential等への継続対策を示す。", caveat: "公的資料はWatchGuardの導入や個別製品の有効性を保証しない。" },
    { label: "security人材", value: "managed service需要", detail: "人材が限られる組織では検知だけでなくtriage、containment、報告までの運用責任が投資判断になる。", caveat: "MDR導入だけでincident riskをなくせるわけではない。" },
  ],
  role: "Country Manager - Japanがregional sales strategy、売上目標、forecast、営業team、二層distribution、channel・MSP、採用・coachingを統括する。",
  organization: "Tokyo onsiteのcountry leadership role。global・regional leadership、Sales、Marketing、Technical、Support、distribution・channelと連携する。現在の日本team人数と法人は本調査で特定できない。",
  careerValue: "Cybersecurity、MSP、distribution、channel、country sales leadershipを横断し、日本事業のstrategy、forecast、team成果を担う経験。",
  globalHeadcount: "1,250人",
  japanPresence: "日本公式サイトと東京onsite求人を確認。国内法人・人員は本調査で特定できず",
  japanSince: "日本での正確な事業開始年は本調査で確定できない",
  solutions: [
    { name: "Unified Security Platform", valueProp: "network、endpoint、identity、MDRをWatchGuard Cloudで統合管理する。", url: "https://www.watchguard.com/wgrd-products/platform", competitors: "Fortinet、Sophos、Cisco、Palo Alto Networks、Microsoft。", differentiation: "MSP・channelが複数顧客へ運用しやすい共通platform。" },
    { name: "WatchGuard MDR", valueProp: "endpoint、network、identity telemetryを監視し、検知・triage・対応をmanaged serviceとして提供する。", url: "https://www.watchguard.com/wgrd-products/managed-services/mdr", competitors: "Sophos MDR、CrowdStrike Falcon Complete、Microsoft MDR partner。", differentiation: "WatchGuard portfolioとMSP deliveryへの統合。" },
    { name: "Network Security", valueProp: "firewall、secure Wi-Fi、SD-WAN、security serviceを中堅中小・分散拠点へ提供する。", url: "https://www.watchguard.com/wgrd-products/network-security", competitors: "Fortinet、Sophos、Cisco Meraki、Palo Alto Networks。", differentiation: "channel-first設計と統合cloud management。" },
  ],
  fitTags: ["Cybersecurity", "MSP", "MDR", "Channel", "Sales Leadership", "Country Manager", "Japan"],
  comparisons: [
    { arena: "SMB Security Platform", companies: ["WatchGuard", "Fortinet", "Sophos", "Cisco"], why: "coverage、manageability、channel economics、TCO" },
    { arena: "MDR", companies: ["WatchGuard", "Sophos", "CrowdStrike", "Microsoft partners"], why: "telemetry、response scope、SLA、partner delivery" },
    { arena: "Endpoint / Identity", companies: ["WatchGuard", "Microsoft", "CrowdStrike", "SentinelOne"], why: "protection、operations、integration、cost" },
  ],
});

const langchainIntelligence = buildPreEntryIntelligence({
  checkedAt,
  slug: "langchain",
  name: "LangChain",
  homepage: "https://www.langchain.com/",
  growthUrl: "https://www.langchain.com/careers",
  careersUrl: "https://www.langchain.com/careers",
  customersUrl: "https://www.langchain.com/blog/customers-rakuten",
  trustUrl: "https://www.langchain.com/security",
  apacUrl: "https://www.smith.langchain.com/",
  externalUrl: "https://www.ipa.go.jp/digital/ai/guideline.html",
  linkedinUrl: "https://www.linkedin.com/company/langchain",
  salesSnapshot: "LangChainはLangChain、LangGraph、LangSmithでAI agentの開発、評価、observability、deploymentを支える会社。楽天の国内利用とLangSmithのAPAC region選択は確認できるが、日本法人、office、Japan専任求人、local commercial ownerは確認できない。",
  growthSummary: "会社の採用情報はSeries Bで1.25億ドル調達、platform利用がFortune 500の35%と表示。求人情報はopen source frameworkが月1億download超と説明するが、日本単体の売上・顧客数は非公開。",
  verdict: "進出可能性は中。国内lighthouse customerとAPAC technical optionはあるが、Japan commercial organizationは未確認",
  entryNarrative: "楽天の社内AI platform事例は日本のEnterprise需要を示す。一方、現行求人はUS・Europe中心で、日本法人、国内拠点、Japan専任sales・solutions・supportを確認できないため、日本未進出として扱う。",
  headcount: "300人超",
  headcountDetail: "LinkedIn公開企業ページの会社更新は約100人から300人超へ拡大したと説明。会社の厳密な現在人員ではなく、外部公開情報による観測。",
  apacPresence: "LangSmith signupでAPAC region選択を確認。日本の法人・office・commercial teamを意味しない。",
  productLanguage: "公式product・docsは主に英語。日本語のEnterprise support・契約・security資料は本調査で確認できない。",
  milestones: [
    { year: "2022", label: "創業", detail: "open sourceのLangChain projectを基に会社を設立。", source: "company" },
    { year: "2024", label: "LangGraph / LangSmith", detail: "agent orchestrationとevaluation・observabilityをplatform化。", source: "company" },
    { year: "2025", label: "Series B", detail: "採用情報で累計1.25億ドルのSeries B調達を表示。", source: "growth" },
    { year: "2026", label: "APAC region選択", detail: "LangSmith signupでAPACを選択可能。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "楽天は3人のengineerが1週間で初期platformを構築し、32,000人への展開を計画。目的はmodel demoではなく、社内teamが安全に再利用できるAI application基盤を作ること。" },
    { title: "製品の成り立ちから見る課題", body: "open sourceのapplication frameworkからLangGraphのstateful agent、LangSmithのtrace・evaluation・deploymentへ広がり、prototypeからproductionまでのfeedback loopを一体化する。" },
    { title: "外部環境の要求から見る課題", body: "AI agentはmodel、prompt、tool、data、human approvalが頻繁に変わり、企業はquality、cost、latency、security、auditを継続評価する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "各teamが異なるmodel・frameworkでAI applicationを試作し、prompt、tool、evaluation、production telemetryが分散する。" },
    { label: "課題", body: "demoは作れてもfailureを再現できず、quality、cost、security、human approvalをproductionで説明できない。" },
    { label: "解決策", body: "対象agentをLangGraphとLangSmithでtrace・evaluate・deployし、task success、error、latency、cost、human escalationをbaseline比較する。" },
    { label: "選定の理由", body: "cloud AI platform、OpenAI・Anthropic SDK、LlamaIndex、CrewAI、内製observabilityとの比較で、framework flexibilityとproduction feedback loopが合う場合に選ぶ。" },
  ],
  openingHook: "AI agentが失敗したとき、どのmodel・prompt・tool・data・human decisionが原因かを何分で再現し、release前に評価できますか。",
  valueHypothesis: "task success、evaluation pass rate、latency、token cost、error、human escalation、release lead time、developer hoursをbaseline比較する。",
  objection: "cloud vendorやmodel providerのSDK・observabilityで足り、別frameworkを加えるとabstractionとlock-inが増える。",
  reframe: "frameworkの人気ではなく、agent変更の速度、評価coverage、incident再現、model portability、運用工数を含むapplication単位のTCOで比較する。",
  facts: [
    { label: "Series B調達", value: "1.25億ドル", detail: "会社採用情報の表示。", source: "growth" },
    { label: "Fortune 500利用", value: "35%", detail: "会社採用情報のplatform利用表示。", source: "growth" },
    { label: "open source", value: "月1億download超", detail: "公式求人のLangChain・LangGraph説明。", source: "growth" },
    { label: "楽天初期team", value: "3人・1週間", detail: "楽天customer storyの初期platform構築。", source: "customers" },
    { label: "楽天展開計画", value: "32,000人", detail: "計画値であり達成済み成果ではない。", source: "customers" },
    { label: "Japan求人", value: "0件", detail: "現在の公式求人でJapan・Tokyo勤務地を確認できず。", source: "careers" },
  ],
  customers: [
    { company: "楽天", products: "LangChain / LangSmith", outcome: "3人のengineerが1週間で初期platformを構築し、32,000人への配布を計画。", implication: "国内Enterprise lighthouseはあるが、計画値を成果として扱わない。" },
    { company: "Klarna", products: "LangSmith", outcome: "AI applicationのdevelopment・evaluation事例を公式掲載。", implication: "regulated customer experienceでproduction feedback loopを示す。" },
    { company: "Elastic", products: "LangChain", outcome: "agent・retrieval applicationの開発事例を公式掲載。", implication: "data platformとのintegration ecosystemを示す。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "継続評価", detail: "AI事業者ガイドラインはrisk、透明性、accountability、人間中心の運用を求める。", caveat: "LangSmithの利用だけで法令・社内policyへの適合が完了するわけではない。" },
    { label: "agent production", value: "observability需要", detail: "model・tool・dataが変わるagentではtrace、evaluation、human review、incident再現が運用条件になる。", caveat: "framework adoptionやdownload数はenterprise revenueを示さない。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。楽天の国内proofとAPAC technical optionはあるが、Japan commercial teamは未確認",
    factSignals: [
      { title: "国内lighthouse customer", body: "楽天がLangChain・LangSmithを使う社内AI platform事例を公開。", sourceIds: ["customers"] },
      { title: "developer adoption", body: "公式求人はLangChain・LangGraphが月1億download超と説明。", sourceIds: ["growth"] },
      { title: "Enterprise利用", body: "会社採用情報はFortune 500の35%がplatformを利用すると表示。", sourceIds: ["growth"] },
      { title: "APAC technical option", body: "LangSmith signupでAPAC region選択を確認。", sourceIds: ["apac"] },
    ],
    hurdles: [
      { title: "Japan commercial ownerがいない", body: "日本法人、office、Japan専任sales・solutions・support求人を確認できない。", sourceIds: ["careers"] },
      { title: "日本語enterprise readiness", body: "日本語の契約、support、security・data資料、trainingの提供範囲が未確認。", sourceIds: ["trust", "company"] },
      { title: "platform競争", body: "AWS、Google Cloud、Microsoft、Datadog、model vendor、open source・内製toolが既存契約を持つ。", sourceIds: ["company"] },
      { title: "open sourceからpaidへの転換", body: "free framework利用とLangSmithのpaid adoption、日本ARR・renewalを分けて検証する必要がある。", sourceIds: ["growth", "customers"] },
    ],
    readinessConditions: [
      { title: "Japan paid traction", body: "楽天以外を含む日本ARR、renewal、production workloadが専任podを支える。" },
      { title: "local pod", body: "AE、Solutions、Customer Success・Support、Partnerを日本専任で配置。" },
      { title: "日本語enterprise readiness", body: "契約、support、security・data、trainingを日本語で提供。" },
      { title: "国内partner motion", body: "cloud、SI、AI consultancyとco-sell・implementationを確立。" },
      { title: "production proof", body: "国内named customerがquality、cost、latency、運用成果を公開。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本法人・office", "国内paid customer事例", "日本語enterprise support", "国内SI・cloud partner", "APAC roleのJapan territory"],
  },
  sourceIds: ["company", "growth", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "developer adoptionとAI application teamから入り、Engineering・Data・AI Platform・Securityへevaluation、observability、production governanceを提案するland-and-expand。",
  careerValue: "AI agent engineering、developer platform、observability、open-source-to-enterprise、将来のJapan country buildを横断する可能性。",
  leader: { name: "Harrison Chase", role: "Co-founder / CEO", read: "open source frameworkからagent engineering platformへ拡張。日本のcommercial ownerは未確認。" },
  solutions: [
    { name: "LangChain", valueProp: "model、tool、retrievalを組み合わせてLLM applicationを開発するframework。", url: "https://www.langchain.com/langchain", competitors: "model SDK、LlamaIndex、Semantic Kernel。", differentiation: "広いintegration ecosystemとapplication abstraction。" },
    { name: "LangGraph", valueProp: "stateful・long-running agent workflowとhuman-in-the-loopを構築する。", url: "https://www.langchain.com/langgraph", competitors: "CrewAI、AutoGen、cloud agent framework。", differentiation: "graph state、durable execution、human control。" },
    { name: "LangSmith", valueProp: "trace、evaluation、prompt・dataset管理、deploymentでAI applicationをproduction運用する。", url: "https://www.langchain.com/langsmith", competitors: "Datadog、Arize、Weights & Biases、cloud observability。", differentiation: "LangChain・LangGraphとの近接性とframework-neutral tracing。" },
  ],
  fitTags: ["日本未進出", "AI Agent", "LangGraph", "LangSmith", "Developer Platform", "APAC", "Enterprise"],
  comparisons: [
    { arena: "Agent Framework", companies: ["LangChain", "LlamaIndex", "CrewAI", "cloud frameworks"], why: "orchestration、state、integration、portability" },
    { arena: "AI Observability", companies: ["LangSmith", "Arize", "Datadog", "Weights & Biases"], why: "trace、evaluation、cost、production operations" },
    { arena: "AI Platform", companies: ["LangChain", "AWS", "Google Cloud", "Microsoft"], why: "developer velocity、governance、managed services、TCO" },
  ],
});

export const daily20260819IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  gitlab: gitlabIntelligence,
  watchguard: watchguardIntelligence,
  langchain: langchainIntelligence,
};

export function applyDaily20260819Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const atlassian = intelligenceBySlug.atlassian;
  if (!atlassian) return;

  const closureSourceId = "atlassian-job-closure-20260819";
  if (!atlassian.sources.some((source) => source.id === closureSourceId)) {
    atlassian.sources.push({
      id: closureSourceId,
      label: "Atlassian Careers（掲載終了確認）",
      url: "https://join.atlassian.com/atlassian-talent-community/jobs/21718?lang=en-us",
      kind: "企業公式",
      scope: "Senior Customer Success Manager求人URLの404・公開終了",
      checkedAt,
    });
  }
  atlassian.researchedAt = checkedAt;
  atlassian.salesSnapshot = "AtlassianはJira、Confluence、Jira Service Management、LoomとAIで開発・業務・IT運用をつなぐ会社。前日まで確認していた日本のSenior Customer Success Manager求人は2026年8月19日に公式URLが404となったため、現在の応募可能求人から除外した。";
  atlassian.marketStatus.milestones.push({ year: "2026.08.19", label: "日本CS求人終了", detail: "公式求人URLが404となったため公開求人から除外。採用停止や日本事業縮小までは意味しない。", sourceId: closureSourceId });
  if (atlassian.marketStatus.japanGrowth) {
    atlassian.marketStatus.japanGrowth.headline = "日本法人・国内事例は確認、現在の対象求人は0件";
    atlassian.marketStatus.japanGrowth.narrative = "アトラシアン株式会社、横浜拠点、国内顧客事例、日本法人での想定従業員数77人を確認。前日までのSenior CSM求人は2026年8月19日に公式URLが404となり、現在の応募可能求人から除外した。日本売上、顧客数、role別達成率は非公開。";
  }
  const jobsFact = atlassian.facts.find((fact) => fact.label === "日本対象求人");
  if (jobsFact) {
    jobsFact.value = "0件";
    jobsFact.detail = "前日確認のSenior Customer Success Manager求人は2026年8月19日に404となり公開終了。";
    jobsFact.sourceIds = [closureSourceId];
  }
  atlassian.roleLens.salesMotion = "前日まで確認していたSenior Customer Success Manager求人は公開終了。現在の日本向け応募可能求人は0件で、同職種の再掲・差し替えを継続観測する。";
  if (atlassian.cultureDeepDive) atlassian.cultureDeepDive.headline = "Team Anywhereとopen companyの原則を掲げるglobal組織。前日までの日本CS求人は公開終了しており、現在の募集条件として転用しない。";
  if (atlassian.salesMarketOutlook) atlassian.salesMarketOutlook.verdict = "結論：直近12カ月売上66億ドル、顧客35万社超、国内法人・事例・日本法人での想定従業員数77人を確認。一方、前日までの日本CS求人は2026年8月19日に終了し、現在の対象求人は0件。日本売上・顧客数・role別達成率は非公開。";
  if (atlassian.aeInterviewHypotheses) atlassian.aeInterviewHypotheses.intro = "現在の日本向け応募可能求人は0件。前日まで確認したCS職の構造を調査履歴として保持し、再掲・差し替え時にquota、portfolio、支援体制を改めて検証する。";
  if (atlassian.marketStatus.isPublic && atlassian.marketStatus.capitalMarketRead) {
    atlassian.marketStatus.capitalMarketRead.japanCommitment = {
      verdict: "2013年法人、横浜拠点、国内事例、日本法人での想定従業員数77人を確認。現在の対象求人は0件",
      summary: "国内基盤は確認できるが、前日までのSenior CSM求人は2026年8月19日に公開終了。日本売上、顧客数、CS portfolio・達成率は非公開。",
      signals: [{ year: "2026", title: "Senior CSM求人終了", detail: "公式求人URLが404となり公開求人から除外。採用停止や日本事業縮小までは意味しない。", sourceIds: [closureSourceId] }],
      unknowns: ["日本売上・ARR・顧客数", "次の日本向け採用計画", "CS portfolio・目標・達成率"],
    };
  }
}
