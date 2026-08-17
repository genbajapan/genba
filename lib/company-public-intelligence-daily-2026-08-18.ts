import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-18";

const atlassianIntelligence = buildIntelligence({
  checkedAt,
  slug: "atlassian",
  name: "Atlassian",
  jobUrl: "https://join.atlassian.com/atlassian-talent-community/jobs/21718?lang=en-us",
  officialUrl: "https://www.atlassian.com/ja/company",
  customersUrl: "https://www.atlassian.com/ja/resources/japan",
  externalUrl: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html",
  financeUrl: "https://investors.atlassian.com/ir-home/default.aspx",
  publicInfo: { ticker: "TEAM", exchange: "NASDAQ", listedSince: "2015年" },
  salesSnapshot: "Atlassianは、software development、IT service、project、knowledgeに分散した仕事をJira、Confluence、Jira Service Management、LoomとAIでつなぐ会社。日本のSenior Customer Success Managerは、製品利用の説明ではなく、顧客のsuccess plan、adoption、value realization、executive alignmentを担い、契約後の成果をrenewal・expansionへつなぐ。",
  growthSummary: "2026年6月末時点のIR表示は、直近12カ月売上66億ドル、顧客35万社超、前年比成長26%、Fortune 500の85%超が有料顧客。日本単体の売上、ARR、顧客数、達成率は非公開。",
  milestones: [
    { year: "2002", label: "創業", detail: "Sydneyで創業し、team collaboration softwareを開発。", source: "company" },
    { year: "2013", label: "日本法人設立", detail: "アトラシアン株式会社を設立。", source: "company" },
    { year: "2015", label: "NASDAQ上場", detail: "ticker TEAMで上場。", source: "finance" },
    { year: "2026.06", label: "顧客35万社超", detail: "IRで直近12カ月売上66億ドルと顧客35万社超を表示。", source: "finance" },
    { year: "2026.08", label: "日本CS採用", detail: "横浜で日本語対応Senior Customer Success Managerを確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "KADOKAWA等の国内事例は、teamごとに分散したproject、knowledge、service deskを共通の働き方へ揃え、可視性、引継ぎ、意思決定を改善する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "developer向けissue trackingから始まり、knowledge、ITSM、video、AIへ拡張した。個別toolではなく、開発・業務・IT運用をつなぐSystem of Workとして価値を広げる。" },
    { title: "外部環境の要求から見る課題", body: "生成AIとcloud toolが増えるほど、情報、work item、service request、decisionが分散する。企業はAIの追加より、権限を保ったcontext共有と仕事の完了速度を説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "開発、IT、business teamが別々のtoolと会議で仕事を進め、AIが参照するcontextも分断している。" },
    { label: "課題", body: "進捗、判断理由、knowledge、incidentがつながらず、待ち時間、二重入力、handoff、会議が増える。" },
    { label: "解決策", body: "一つのcross-functional workflowをJira、Confluence、JSM、Loom、AIへ載せ、cycle time、handoff、self-service、meeting hours、adoptionを測る。" },
    { label: "選定の理由", body: "Microsoft、ServiceNow、Asana、Notion、GitHub、個別toolとの比較で、development・service・knowledgeを共通contextへ統合できる場合に選ぶ。" },
  ],
  openingHook: "企画が決まってから開発・運用へ渡るまで、進捗、判断、knowledgeを探すために何時間と何回のhandoffが発生していますか。",
  valueHypothesis: "cycle time、handoff、meeting hours、self-service、MTTR、active usage、time-to-value、renewal・expansionをbaseline比較する。",
  objection: "Microsoft 365、GitHub、ServiceNowなど既存suiteで十分で、Atlassianを広げるとtoolが増える。",
  reframe: "seat数ではなく、開発・service・knowledgeをまたぐ一つのworkflowで、待ち時間、会議、integration、administrationを含む3年TCOと成果を比較する。",
  facts: [
    { label: "直近12カ月売上", value: "66億ドル", detail: "2026年6月末時点のIR表示。", source: "finance" },
    { label: "顧客", value: "35万社超", detail: "2026年6月末時点。", source: "finance" },
    { label: "Fortune 500", value: "85%超", detail: "2026年6月末時点の有料顧客比率。", source: "finance" },
    { label: "日本法人", value: "2013年", detail: "アトラシアン株式会社を設立。", source: "company" },
    { label: "国内被保険者", value: "77人", detail: "gBizINFOの事業所欄。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Senior Customer Success Manager。", source: "job" },
  ],
  customers: [
    { company: "KADOKAWA", products: "Atlassian solutions", outcome: "グループ横断の情報共有基盤として公式日本resourceで紹介。", implication: "knowledgeとprojectの標準化を大規模組織へ広げる国内proof。" },
    { company: "Royal Caribbean", products: "Jira / Confluence", outcome: "自動reportingにより年800時間超、50万ドルのconsulting cost削減を公表。", implication: "管理reportの時間と費用をbusiness caseにできる。" },
    { company: "Lumen", products: "Atlassian", outcome: "throughput 200%増を顧客事例で公表。", implication: "tool adoptionをdelivery速度へ結びつける例。" },
  ],
  externalSignals: [
    { label: "DX動向", value: "組織・人材・成果", detail: "IPAはDXをtechnology導入だけでなく組織、process、人材、成果測定の課題として整理。", caveat: "公的調査はAtlassianの導入成果や採用を保証しない。" },
    { label: "生成AI", value: "contextとgovernance", detail: "AIを業務へ組み込むほど、権限付きknowledge、source、human decisionの運用設計が必要。", caveat: "製品導入だけで正確性・安全性が確保されるわけではない。" },
  ],
  role: "日本のSenior Customer Success Managerがstrategic customerのsuccess plan、adoption、value realization、executive engagementを担う。",
  organization: "横浜を国内拠点に、Customer SuccessがSales、Solutions、Support、Product、Partnerと連携してcloud・AI adoptionを進める成熟GTM。",
  careerValue: "Work Management、DevOps、ITSM、AI adoption、executive value realizationを横断し、post-salesで顧客成果を定量化する経験を積める。",
  globalHeadcount: "12,000人超",
  japanPresence: "アトラシアン株式会社・横浜ランドマークタワー",
  japanSince: "2013年6月設立",
  solutions: [
    { name: "Jira", valueProp: "ideaからdeliveryまでのworkを計画・追跡し、team間の可視性を作る。", url: "https://www.atlassian.com/ja/software/jira", competitors: "Asana、monday.com、Azure DevOps、GitHub Projects。", differentiation: "software developmentを起点にbusiness teamまで広がるworkflowとecosystem。" },
    { name: "Confluence", valueProp: "文書、decision、knowledgeを権限付きworkspaceへ集約する。", url: "https://www.atlassian.com/ja/software/confluence", competitors: "Notion、SharePoint、Google Workspace。", differentiation: "Jira work itemとknowledgeを同じSystem of Workへ接続。" },
    { name: "Jira Service Management", valueProp: "IT・business service request、incident、changeを開発・運用へ接続する。", url: "https://www.atlassian.com/ja/software/jira/service-management", competitors: "ServiceNow、BMC、Freshservice。", differentiation: "Dev・Ops・service managementの近接性とflexible workflow。" },
  ],
  fitTags: ["アンカー企業", "Work Management", "DevOps", "ITSM", "AI", "Customer Success", "Japan"],
  comparisons: [
    { arena: "Work Management", companies: ["Atlassian", "Asana", "monday.com", "Notion"], why: "workflow、knowledge、AI、adoption" },
    { arena: "IT Service Management", companies: ["Atlassian", "ServiceNow", "BMC"], why: "DevOps接続、enterprise governance、TCO" },
    { arena: "Developer Collaboration", companies: ["Atlassian", "GitHub", "Microsoft"], why: "planning、code、knowledge、AI context" },
  ],
});

atlassianIntelligence.leadership = { name: "Mike Cannon-Brookes / Scott Farquhar", role: "Co-founders", read: "2002年創業。日本の現任country leaderとreporting lineは本調査の一次情報で確定できない。", sourceId: "atlassian-company" };

const dynatraceIntelligence = buildIntelligence({
  checkedAt,
  slug: "dynatrace",
  name: "Dynatrace",
  jobUrl: "https://apply.careers.dynatrace.com/job/Tokyo-Sr-Solutions-Engineer-Toky-100-0005/1390103700/",
  officialUrl: "https://www.dynatrace.com/ja/",
  customersUrl: "https://www.dynatrace.com/ja/customers/fujitsu/",
  externalUrl: "https://www.ipa.go.jp/security/guide/vuln/guideforecsite.html",
  financeUrl: "https://ir.dynatrace.com/",
  publicInfo: { ticker: "DT", exchange: "NYSE", listedSince: "2019年" },
  salesSnapshot: "Dynatraceは、application、infrastructure、log、user experience、securityを一つのobservability platformで相関し、障害原因と事業影響に答える会社。日本のEnterprise Solutions Engineerは、demo担当ではなく、technical discovery、architecture、workshop、PoV、business valueをAE・partnerと設計してtechnical winを作る。",
  growthSummary: "Q1 FY2027はARR 21.36億ドル、売上5.55億ドル、subscription売上5.30億ドルで、売上は前年比16%増。FY2026末は約4,100顧客、約5,600人。日本単体の売上、ARR、顧客数、達成率は非公開。",
  milestones: [
    { year: "2005", label: "創業", detail: "application performance monitoringを起点に事業化。", source: "company" },
    { year: "2019", label: "NYSE上場", detail: "ticker DTで上場。", source: "finance" },
    { year: "2026.03", label: "ARR 20億ドル超", detail: "FY2026末ARR 20.54億ドル。", source: "finance" },
    { year: "2026.06", label: "ARR 21.36億ドル", detail: "Q1 FY2027、前年比17%増。", source: "finance" },
    { year: "2026.08", label: "日本SE採用", detail: "東京でJapan Enterprise Solutions Engineerを確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "富士通は1,000 VMの統合監視で障害調査を1日超から1〜2時間へ短縮し、年約9,960時間の削減を見込む。顧客はdashboard追加ではなく、原因特定と運用品質を変える目的で導入する。" },
    { title: "製品の成り立ちから見る課題", body: "APMから始まり、infrastructure、log、digital experience、application security、business analytics、AI observabilityへ拡張した。telemetryを集めるだけでなくDavis AIとGrailで原因・context・actionへつなぐ。" },
    { title: "外部環境の要求から見る課題", body: "cloud-native、SaaS、AI agentでsystem dependencyとtelemetry量が増え、障害は顧客体験・売上・securityへ直結する。企業は可用性だけでなくAI reliabilityと運用costを同時に管理する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "cloud、container、SaaS、AI workloadが増え、monitoring dataと運用toolが分散する。" },
    { label: "課題", body: "alertは増えてもbusiness impactとroot causeが分からず、複数teamがlog・metric・traceを手作業で突合する。" },
    { label: "解決策", body: "重要serviceを対象にfull-stack observabilityとAI相関を導入し、MTTD、MTTR、alert、運用時間、SLO、digital conversionを測る。" },
    { label: "選定の理由", body: "Datadog、New Relic、Splunk、Elastic、cloud-native toolとの比較で、enterprise scale、context、automation、security、data flexibilityが合う場合に選ぶ。" },
  ],
  openingHook: "重大障害で最初のbusiness impactとroot causeを特定するまで、何team、何tool、何時間を使っていますか。",
  valueHypothesis: "MTTD、MTTR、alert noise、調査工数、SLO、release failure、cloud cost、digital conversionをbaseline比較する。",
  objection: "Datadog、Splunk、cloud標準監視が既にあり、さらにplatformを追加するとingest costと運用が増える。",
  reframe: "data量やdashboard数ではなく、原因特定時間、重大incident、tool重複、運用工数、digital lossを含むservice単位の3年TCOで比較する。",
  facts: [
    { label: "Q1 FY2027 ARR", value: "21.36億ドル", detail: "前年比17%増。", source: "finance" },
    { label: "Q1売上", value: "5.55億ドル", detail: "前年比16%増。", source: "finance" },
    { label: "FY2026顧客", value: "約4,100社", detail: "110カ国超。", source: "finance" },
    { label: "global人員", value: "約5,600人", detail: "2026年3月末。", source: "finance" },
    { label: "国内被保険者", value: "41人", detail: "gBizINFOの事業所欄。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Enterprise Solutions Engineer。", source: "job" },
  ],
  customers: [
    { company: "富士通", products: "Dynatrace", outcome: "1,000 VMで障害調査を1日超から1〜2時間へ短縮し、年約9,960時間削減見込み。", implication: "大規模日本企業で運用工数を定量化したproof。" },
    { company: "DNPグループ", products: "Dynatrace", outcome: "分散・microservice環境でOneAgentによる導入と全体可視化を評価。", implication: "監視項目の継ぎ足しからsystem visibilityへ変える国内例。" },
    { company: "Coca-Cola HBC", products: "Dynatrace", outcome: "MTTR 30%短縮、user-facing incident 10%削減を公表。", implication: "運用KPIと顧客影響を同じbusiness caseへ置く例。" },
  ],
  externalSignals: [
    { label: "system resilience", value: "継続監視と対応", detail: "IPAのsecurity資料は脆弱性、incident、継続的な運用管理の重要性を示す。", caveat: "Dynatrace導入や特定の製品構成を義務づけない。" },
    { label: "AI workload", value: "reliabilityの可視化", detail: "AI applicationではmodel、prompt、token、latency、infrastructure、business resultを横断して監視する必要がある。", caveat: "AI observabilityだけでmodel riskや法令対応が完了するわけではない。" },
  ],
  role: "Japan Enterprise Solutions EngineerがAE・partnerとEnterprise顧客のdiscovery、demo、workshop、architecture、PoV、technical winを担う。",
  organization: "東京のSales・Solutions・Customer・Partnerがglobal product・engineeringと連携するEnterprise GTM。日本のteam別人数とSE比率は非公開。",
  careerValue: "Observability、AIOps、application security、cloud architecture、value engineeringを横断し、technical proofを経営成果へ翻訳する経験を積める。",
  globalHeadcount: "約5,600人",
  japanPresence: "Dynatrace合同会社・東京",
  japanSince: "国内法人を確認。正確な営業開始年は本調査で確定できない",
  solutions: [
    { name: "Dynatrace Platform", valueProp: "metric、log、trace、topology、user experienceを統合してservice healthと原因を可視化する。", url: "https://www.dynatrace.com/ja/platform/", competitors: "Datadog、New Relic、Splunk、Elastic。", differentiation: "OneAgent、Grail、Davis AIによるautomatic contextと原因分析。" },
    { name: "AI Observability", valueProp: "LLM・agent applicationのquality、latency、cost、security、business resultを観測する。", url: "https://www.dynatrace.com/platform/ai-observability/", competitors: "Datadog、Arize、LangSmith、cloud-native。", differentiation: "AI layerをunderlying application・infrastructure・business contextへ接続。" },
    { name: "Application Security", valueProp: "runtime contextを使ってvulnerabilityとattack riskを優先順位付けする。", url: "https://www.dynatrace.com/platform/application-security/", competitors: "Wiz、Snyk、AppDynamics、cloud security。", differentiation: "observability dataとruntime application securityの連続性。" },
  ],
  fitTags: ["Observability", "AIOps", "Application Security", "Solutions Engineering", "Enterprise", "Japan"],
  comparisons: [
    { arena: "Observability", companies: ["Dynatrace", "Datadog", "New Relic", "Splunk"], why: "automation、data model、enterprise scale、TCO" },
    { arena: "AI Observability", companies: ["Dynatrace", "Arize", "Datadog", "LangSmith"], why: "modelからinfrastructure・businessまでのcontext" },
    { arena: "Application Security", companies: ["Dynatrace", "Wiz", "Snyk"], why: "runtime risk、developer workflow、coverage" },
  ],
});

dynatraceIntelligence.marketStatus.milestones.push({ year: "2015", label: "日本法人設立", detail: "Dynatrace合同会社の設立を国内販売partnerの公式発表で確認。", sourceId: "dynatrace-japan-launch" });
dynatraceIntelligence.sources.push({ id: "dynatrace-japan-launch", label: "アイ・アイ・エム Dynatrace国内提供発表", url: "https://www.iim.co.jp/news-iim/20170720", kind: "企業公式", scope: "Dynatrace合同会社の設立年・国内提供", checkedAt });

dynatraceIntelligence.leadership = { name: "Rick McConnell", role: "CEO", read: "2021年就任。日本の現任country leaderとreporting lineは本調査の一次情報で確定できない。", sourceId: "dynatrace-company" };

const vercelIntelligence = buildPreEntryIntelligence({
  checkedAt,
  slug: "vercel",
  name: "Vercel",
  homepage: "https://vercel.com/",
  growthUrl: "https://vercel.com/blog/series-f",
  careersUrl: "https://vercel.com/careers",
  customersUrl: "https://vercel.com/customers",
  trustUrl: "https://vercel.com/docs/security/compliance",
  apacUrl: "https://vercel.com/careers/account-executive-majors-install-base-apac-6100103004",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  linkedinUrl: "https://www.linkedin.com/company/vercel/",
  salesSnapshot: "Vercelは、frontend applicationとAI agentをbuild、deploy、scale、secureするAI Cloudを提供する会社。Next.js、AI SDK、v0のdeveloper adoptionを入口に、Enterpriseへdeveloper velocity、web performance、global infrastructure、securityを提案する。APAC営業求人はSydney等を対象とし、日本法人・国内拠点・Japan専任求人は確認できない。",
  growthSummary: "2025年9月にSeries F 3億ドル、評価額93億ドルを発表。AI SDKは週300万download超、Next.jsは直近12カ月で5億download超。認識売上、ARR、利益、FCF、日本売上は非公開。",
  verdict: "可能性は中。日本のinfrastructure接点は強いが、local commercial・delivery proofが不足",
  entryNarrative: "VercelはTokyo・Osakaを含むglobal network、Next.jsとAI SDKの広いdeveloper adoption、93億ドル評価、APAC sales hiringを持ち、日本のdeveloper利用を支えるtechnical footprintはある。一方、日本法人、Tokyo office、Japan専任求人、国内named customer case、日本語enterprise support、local SI・cloud partnerのcommercial体制は確認できない。利用者の存在を進出とみなさず、APACからのJapan有償顧客とrenewalが専任podを支え、security・data・support条件を国内で説明できる段階を進出条件とする。",
  headcount: "501〜1,000人規模",
  headcountDetail: "LinkedIn企業ページの会社規模レンジ。会社公式の厳密値ではない。",
  apacPresence: "APAC Major Account Executive等を募集するが、確認したroleはSydney・ANZを対象。Tokyo・Japan拠点またはJapan専任coverageは未確認。",
  productLanguage: "Tokyo（hnd1）とOsaka（kix1）のcompute regionを提供する一方、日本語UI・契約・support・国内data handlingの同等性と国内customer proofは未確認。",
  milestones: [
    { year: "2015", label: "創業", detail: "frontend developmentとdeploymentの摩擦を減らすplatformとして創業。", source: "company" },
    { year: "2016", label: "Next.js", detail: "open-source React frameworkを公開。", source: "company" },
    { year: "2024", label: "AI SDK拡大", detail: "multi-model AI application developmentをopen-sourceで拡大。", source: "company" },
    { year: "2025", label: "Series F", detail: "3億ドル調達、93億ドル評価。", source: "growth" },
    { year: "2026", label: "APAC採用", detail: "Sydney等を対象にAPAC sales・Solutionsを採用。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Roxはdeploy 3〜5分、P95 load 2.5倍改善、AI featureを数カ月ではなく数週間で提供。顧客はhostingではなく、developer velocityとglobal experienceを同時に改善する目的で使う。" },
    { title: "製品の成り立ちから見る課題", body: "Next.jsを中心にfrontend build・preview・deploy・edgeを統合し、v0、AI SDK、AI Gateway、Sandbox、Agentへ拡張した。frameworkとcloudを一体で最適化する設計。" },
    { title: "外部環境の要求から見る課題", body: "AI applicationはmodel選択、streaming、agent execution、security、cost、global latencyの変化が速い。企業は試作速度とproduction reliability・governanceを同時に満たす必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "webとAI applicationのrelease頻度が上がり、developerはframework、CI/CD、compute、CDN、securityを個別に組み合わせている。" },
    { label: "課題", body: "previewからproduction、global scale、AI model接続、security reviewのhandoffが増え、開発速度と運用責任が分断する。" },
    { label: "解決策", body: "一つのcustomer-facing applicationを対象にbuild、preview、deploy、AI access、observability、securityを統合し、lead time、performance、incident、cloud costを測る。" },
    { label: "選定の理由", body: "AWS、Cloudflare、Netlify、Render、cloud-native、内製platformとの比較で、frontend・AI developer experienceとglobal production運用を一体化できる場合に選ぶ。" },
  ],
  openingHook: "code mergeからglobal productionまで何分かかり、preview、security review、AI model接続、rollbackで何teamのhandoffが発生していますか。",
  valueHypothesis: "deploy lead time、build time、Core Web Vitals、conversion、developer hours、incident、rollback、AI latency・costをbaseline比較する。",
  objection: "AWSやCloudflareと既存CI/CDで実装でき、Vercelを加えるとplatform lock-inとusage costが増える。",
  reframe: "infrastructure単価ではなく、developer time、release frequency、performance、incident response、AI integrationを含むapplication単位の3年TCOで比較する。",
  facts: [
    { label: "Series F", value: "3億ドル", detail: "2025年9月。", source: "growth" },
    { label: "評価額", value: "93億ドル", detail: "Series F時点。", source: "growth" },
    { label: "AI SDK", value: "週300万download超", detail: "会社発表。", source: "growth" },
    { label: "Next.js", value: "年5億download超", detail: "発表前12カ月。", source: "growth" },
    { label: "日本region", value: "Tokyo / Osaka", detail: "compute regionを公式docsで提供。", source: "company" },
    { label: "Japan求人", value: "0件", detail: "APAC求人はSydney等で、Japan・Tokyo勤務地を確認できず。", source: "careers" },
  ],
  customers: [
    { company: "Rox", products: "Vercel / AI SDK", outcome: "deploy 3〜5分、P95 load 2.5倍改善、AI featureを数週間でrelease。", implication: "AI applicationの速度とglobal performanceを同時に示す。" },
    { company: "The Weather Company", products: "Vercel", outcome: "日次3.5億active usersへreal-time forecastを提供する事例。", implication: "global consumer scaleのtechnical proof。" },
    { company: "Code and Theory", products: "v0 / Vercel", outcome: "prototype時間75%短縮を公表。", implication: "ideaから顧客検証までのlead timeをbusiness caseにできる。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "production責任", detail: "AI事業者ガイドラインはrisk、透明性、accountability、人間中心の運用を求める。", caveat: "Vercelの適合性や個別利用の適法性を保証しない。" },
    { label: "security", value: "shared responsibility", detail: "cloud利用者はvendor certificationだけでなくapplication、identity、data、incidentの責任分界を設計する必要。", caveat: "認証取得はcustomer application全体の安全を保証しない。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。technical footprintとAPAC hiringはあるがJapan commercial proofが未確認",
    factSignals: [
      { title: "日本のtechnical footprint", body: "Tokyo・Osaka compute regionがあり、日本userへの低latency配信を支える基盤がある。", sourceIds: ["company"] },
      { title: "強いdeveloper adoption", body: "Next.js年5億download超、AI SDK週300万download超はself-serveからEnterpriseへ広げるdistributionを示す。", sourceIds: ["growth"] },
      { title: "country投資余力", body: "3億ドルSeries Fと93億ドル評価は国際展開を検討できる資本規模。", sourceIds: ["growth"] },
      { title: "APAC sales investment", body: "APAC Major AccountとSolutions求人を確認し、regional Enterprise coverageへ投資している。", sourceIds: ["apac", "careers"] },
    ],
    hurdles: [
      { title: "Japan commercial proofがない", body: "日本法人、office、country owner、Japan専任求人、国内named caseを確認できない。", sourceIds: ["customers", "careers"] },
      { title: "local support・契約", body: "日本語support、契約、security review、incident escalationを国内時間帯で担う体制が未確認。", sourceIds: ["trust", "apac"] },
      { title: "hyperscaler・platform競争", body: "AWS、Cloudflare、Microsoft、Google、Netlify、内製platformが既存契約と技術標準を持つ。", sourceIds: ["company"] },
      { title: "cost・lock-in説明", body: "usage cost、framework最適化、region・data、migration、exit planをEnterprise調達へ説明する必要がある。", sourceIds: ["company", "trust"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse customer", body: "国内Enterpriseでdeveloper velocity・performance・事業成果を公開。" },
      { title: "Japan paid traction", body: "APACから担当する日本ARR、renewal、pipelineが専任podを支える。" },
      { title: "local pod", body: "AE、Solutions、CS・Support、Partnerを日本専任で配置。" },
      { title: "日本語enterprise readiness", body: "契約、support、security・data資料、trainingを日本語で提供。" },
      { title: "partner motion", body: "国内cloud・SI・digital agencyとのco-sell・deliveryを確立。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本法人・office", "国内named customer case", "日本語enterprise support", "国内SI・cloud partner", "APAC roleのJapan territory"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "developer adoptionとapplication teamから入り、CTO・VP Engineering・Digital・Securityへrelease speed、experience、AI production、platform TCOを提案するEnterprise land-and-expand。",
  careerValue: "Developer platform、AI application infrastructure、PLG-to-enterprise、cloud economics、将来のJapan country buildを横断する可能性。",
  leader: { name: "Guillermo Rauch", role: "Founder / CEO", read: "2015年創業。open-source frameworkとmanaged cloudを一体で拡張し、AI application platformへportfolioを広げる。" },
  solutions: [
    { name: "Vercel AI Cloud", valueProp: "web・AI applicationをbuild、deploy、scale、secureする。", url: "https://vercel.com/ai", competitors: "AWS、Cloudflare、Netlify、Render。", differentiation: "framework-aware developer experienceとglobal production infrastructure。" },
    { name: "AI SDK / AI Gateway", valueProp: "複数modelへ統一interfaceで接続し、AI applicationをstream・observe・operateする。", url: "https://vercel.com/ai", competitors: "LangChain、cloud AI gateway、model vendor SDK。", differentiation: "Next.js・frontendとAI application runtimeの近接性。" },
    { name: "v0", valueProp: "promptからUI・applicationを作り、Vercelへ展開する。", url: "https://v0.app/", competitors: "Lovable、Replit、Bolt、Cursor。", differentiation: "design・code generationからproduction cloudへの直結。" },
  ],
  fitTags: ["日本未進出", "AI Cloud", "Developer Platform", "Next.js", "AI SDK", "APAC", "Enterprise"],
  comparisons: [
    { arena: "Frontend Cloud", companies: ["Vercel", "Cloudflare", "Netlify", "AWS"], why: "developer experience、performance、security、TCO" },
    { arena: "AI Application Platform", companies: ["Vercel", "AWS", "Google Cloud", "Microsoft"], why: "model access、agent runtime、observability、enterprise control" },
    { arena: "AI Software Creation", companies: ["v0", "Lovable", "Replit", "Bolt"], why: "生成範囲、code ownership、deployment、governance" },
  ],
});

export const daily20260818IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  atlassian: atlassianIntelligence,
  dynatrace: dynatraceIntelligence,
  vercel: vercelIntelligence,
};
