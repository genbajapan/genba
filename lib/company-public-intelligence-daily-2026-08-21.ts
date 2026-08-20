import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-21";

const dropboxIntelligence = buildIntelligence({
  checkedAt,
  slug: "dropbox",
  name: "Dropbox",
  jobUrl: "https://jobs.dropbox.com/listing/6862441",
  officialUrl: "https://navi.dropbox.jp/about-dropbox-japan",
  customersUrl: "https://www.dropbox.com/ja/customers",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/",
  financeUrl: "https://dropbox.gcs-web.com/news-releases/news-release-details/dropbox-announces-second-quarter-2026-results",
  publicInfo: { ticker: "DBX", exchange: "NASDAQ", listedSince: "2018年" },
  salesSnapshot: "cloud storageの知名度を入口に、content collaboration、eSignature、video review、AI searchへportfolioを広げる会社。日本のCustomer Success Managerは、大手顧客のdeploymentとadoptionをretention・growthへ接続する。",
  growthSummary: "Q2 2026は売上6.315億ドルで前年同期比0.9%増、ARR 25.66億ドルで1.0%増、paying users 1,819万人。日本法人は被保険者28人の小規模teamで、国内売上、NRR、CS担当社数、達成率は非公開。",
  milestones: [
    { year: "2007", label: "創業", detail: "file syncとcloud storageから事業開始。", source: "company" },
    { year: "2014", label: "日本法人設立", detail: "Dropbox Japan株式会社を設立。", source: "company" },
    { year: "2018", label: "NASDAQ上場", detail: "ticker DBXで上場。", source: "finance" },
    { year: "2023", label: "Dropbox Dash", detail: "複数toolを横断するAI-powered searchを展開。", source: "company" },
    { year: "2026.08", label: "Japan CSM採用", detail: "Remote JapanのCustomer Success Managerを現行確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "国内事例は、放送・建設・製造・教育などで大容量fileの社内外共有、on-prem serverの運用負荷、version混乱、data消失riskを減らす目的を示す。導入後は保存先ではなく、日々のworkflowと統制へ定着させる必要がある。" },
    { title: "製品の成り立ちから見る課題", body: "file syncから始まり、Sign、DocSend、Replay、Dashへ拡張した。核はcontentがtool・人・場所へ分散しても、安全に見つけ、共有し、承認し、再利用できる状態を作ること。" },
    { title: "外部環境の要求から見る課題", body: "remote・hybrid workと生成AIでcontentの複製・検索範囲が増えるほど、企業はaccess、retention、越境、退職者data、AIによる参照範囲を説明しながら、情報探索時間を減らす必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "file、video、契約、project文脈がfile server、SaaS、email、個人folderへ分散している。" },
    { label: "課題", body: "社員が最新版と権限を確認する時間が増え、共有事故、重複作業、onboardingの遅れが起きる。" },
    { label: "解決策", body: "一つの重要workflowでcontentを集約し、access policy、external sharing、search、approval、recoveryを設計して時間とriskをbaseline比較する。" },
    { label: "選定の理由", body: "Microsoft 365、Google Workspace、Box、Notion、point searchとの比較で、cross-platform sync、外部共有、content workflow、AI searchを既存環境へ段階導入できる場合に選ぶ。" },
  ],
  openingHook: "社員が正しいfileを探し、権限を確認し、社外へ安全に渡すまで、1案件で何分と何往復かかっていますか。",
  valueHypothesis: "search time、file version事故、external sharing turnaround、active usage、support ticket、server運用工数、renewal・expansionをbaseline比較する。",
  objection: "Microsoft 365かGoogle Workspaceのstorageとsearchで十分で、追加platformはtool sprawlを増やす。",
  reframe: "容量単価ではなく、社外collaboration、large file、cross-tool search、recovery、governanceを含むworkflow全体の時間・risk・3年TCOで比較する。",
  facts: [
    { label: "Q2 2026売上", value: "6.315億ドル", detail: "会社決算。前年同期比0.9%増。", source: "finance" },
    { label: "ARR", value: "25.66億ドル", detail: "Q2 2026。前年同期比1.0%増。", source: "finance" },
    { label: "Paying users", value: "1,819万人", detail: "Q2 2026。", source: "finance" },
    { label: "導入team", value: "57万5,000超", detail: "Dropbox公式顧客事例ページの表示。", source: "customers" },
    { label: "日本法人", value: "2014年設立", detail: "東京都千代田区丸の内。", source: "company" },
    { label: "日本法人での想定従業員数", value: "28人", detail: "2026年7月の厚生年金保険・健康保険の被保険者数。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Customer Success Manager - Japan。", source: "job" },
  ],
  customers: [
    { company: "朝日放送テレビ", products: "Dropbox", outcome: "社外との情報共有と外出先でのstreamingを支えるcloud storageとして採用。", implication: "大容量mediaを安全に共有する国内proof。" },
    { company: "戸田建設", products: "Dropbox", outcome: "工事現場の物理serverをcloud storageへ移行した国内事例。", implication: "分散拠点のinfrastructureと運用負荷を比較できる。" },
    { company: "日本翻訳センター", products: "Dropbox / eSignature", outcome: "cloud storageと電子署名を組み合わせ、契約管理を効率化。", implication: "保管から承認workflowへ広げる例。" },
  ],
  externalSignals: [
    { label: "個人data", value: "利用目的・委託・安全管理", detail: "content platformではaccess、外部共有、retention、越境、退職者処理を業務単位で設計する必要がある。", caveat: "具体要件はdata、契約、業界、利用形態で異なる。" },
    { label: "生成AI search", value: "参照範囲の統制", detail: "検索対象が複数SaaSへ広がるほど、source permissionと回答根拠を確認する必要がある。", caveat: "製品導入だけで個別企業のAI governanceを保証しない。" },
  ],
  role: "Customer Success Managerが大手顧客のdeployment、education、usage、adoption、Success Business Reviewを持ち、Salesとretention・growthを進める。",
  organization: "Virtual Firstのglobal組織。Japan CSMはSales、Product、Marketing、CXと連携し、IT adminからexecutiveまで担当する。担当社数とreporting lineは非公開。",
  careerValue: "content collaboration、enterprise search、AI adoption、change management、retention・expansionを一つの顧客journeyで扱う経験。",
  globalHeadcount: "非公開",
  japanPresence: "Dropbox Japan株式会社・東京都千代田区。2014年設立、2026年7月の被保険者数28人",
  japanSince: "2014年",
  solutions: [
    { name: "Dropbox Business", valueProp: "fileを同期・共有・保護し、社内外collaborationを統制する。", url: "https://www.dropbox.com/ja/business", competitors: "Microsoft OneDrive、Google Drive、Box。", differentiation: "cross-platform syncとlarge-file collaboration。" },
    { name: "Dropbox Dash", valueProp: "複数toolとcontentを横断してAI search・整理する。", url: "https://dash.dropbox.com/", competitors: "Glean、Microsoft 365 Copilot、Google Gemini Enterprise。", differentiation: "既存content workflowとsearchを接続。" },
    { name: "Dropbox Sign / DocSend / Replay", valueProp: "署名、document tracking、video reviewをcontent lifecycleへ加える。", url: "https://www.dropbox.com/products", competitors: "DocuSign、Box、Frame.io、point tools。", differentiation: "file共有に隣接するworkflowを同じportfolioで提供。" },
  ],
  fitTags: ["アンカー企業", "Content Collaboration", "Cloud Storage", "Enterprise Search", "AI", "Customer Success", "Remote", "Japan"],
  comparisons: [
    { arena: "Content Collaboration", companies: ["Dropbox", "Microsoft OneDrive", "Google Drive", "Box"], why: "sync、external sharing、governance、TCO" },
    { arena: "Enterprise Search", companies: ["Dropbox Dash", "Glean", "Microsoft 365 Copilot", "Google Gemini Enterprise"], why: "connector、permission、answer quality、adoption" },
    { arena: "Content Workflow", companies: ["Dropbox", "DocuSign", "Adobe", "Frame.io"], why: "署名、review、tracking、portfolio統合" },
  ],
});

const fastlyIntelligence = buildIntelligence({
  checkedAt,
  slug: "fastly",
  name: "Fastly",
  jobUrl: "https://www.fastly.com/about/jobs/apply?gh_jid=6873321",
  officialUrl: "https://www.fastly.com/jp/products/edge-cloud-platform",
  customersUrl: "https://www.fastly.com/jp/customers/japan",
  externalUrl: "https://www.jpcert.or.jp/at/2024/at240010.html",
  financeUrl: "https://investors.fastly.com/news-releases/news-release-details/fastly-announces-second-quarter-2026-financial-results",
  publicInfo: { ticker: "FSLY", exchange: "NASDAQ", listedSince: "2019年" },
  salesSnapshot: "CDNを入口に、edge compute、Next-Gen WAF、DDoS・API security、observabilityをprogrammable edge cloudへ束ねる会社。日本のSenior AEはCommerce・Financeを中心にnew logoからPoC、契約、adoptionまで進める。",
  growthSummary: "Q2 2026は売上1.833億ドルで前年同期比23%増、Security売上は43%増、LTM NRR 117%、RPO 3.41億ドル。日本法人は被保険者35人で、日本単体の売上、顧客数、quota達成率は非公開。",
  milestones: [
    { year: "2011", label: "創業", detail: "developer-firstのprogrammable CDNから開始。", source: "company" },
    { year: "2015", label: "日本法人設立", detail: "ファストリー株式会社を設立。", source: "company" },
    { year: "2019", label: "NASDAQ上場", detail: "ticker FSLYで上場。", source: "finance" },
    { year: "2020", label: "Signal Sciences買収", detail: "Next-Gen WAFをportfolioへ統合。", source: "company" },
    { year: "2026.08.20", label: "Japan AE求人更新", detail: "Senior Account Executiveの公式ATS更新を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "毎日放送はCDN移行でcache hit率98%以上、cache clearを数十分から数秒へ短縮したと公表。DeNA等の事例も、user experience、release速度、origin負荷、securityを同時に扱う目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "software-definedのCDNから、Compute、WAF、DDoS、API security、observabilityへ拡張した。核はedgeを固定networkではなく、developerがcodeとpolicyで即時変更できるapplication platformとして扱うこと。" },
    { title: "外部環境の要求から見る課題", body: "AI bot、API、DDoS、traffic spikeが増えるほど、Commerce・Finance企業はavailability、latency、fraud、content control、incident responseを同じcustomer journeyで管理し、停止costを説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "application配信、WAF、DDoS、API、bot、observabilityが複数vendorとteamへ分かれている。" },
    { label: "課題", body: "performance変更とsecurity policyの反映が遅く、incident時にorigin・edge・applicationの責任分界が曖昧になる。" },
    { label: "解決策", body: "一つのcritical journeyでdelivery、WAF、DDoS、API visibility、real-time logsを統合し、latency、cache hit、attack block、origin cost、MTTRを測る。" },
    { label: "選定の理由", body: "Cloudflare、Akamai、CloudFront、multi-CDN、cloud-native securityとの比較で、programmability、real-time control、security、developer workflowを同じedgeで改善できる場合に選ぶ。" },
  ],
  openingHook: "saleや重要eventでtrafficとattackが同時に増えた時、性能・security・origin costを誰が何分で一つの判断へまとめますか。",
  valueHypothesis: "TTFB、cache hit、origin egress、deployment time、blocked attack、false positive、availability、MTTR、conversionをbaseline比較する。",
  objection: "既存cloudのCDN・WAFで十分で、edge vendorを増やすと構成と調達が複雑になる。",
  reframe: "request単価だけでなく、performance、security policy反映、origin cost、developer時間、incident lossを含む3年TCOと事業riskで比較する。",
  facts: [
    { label: "Q2 2026売上", value: "1.833億ドル", detail: "会社決算。前年同期比23%増。", source: "finance" },
    { label: "Security売上成長", value: "43%", detail: "Q2 2026の前年同期比。", source: "finance" },
    { label: "LTM NRR", value: "117%", detail: "Q2 2026。", source: "finance" },
    { label: "RPO", value: "3.41億ドル", detail: "Q2 2026。前年同期比38%増。", source: "finance" },
    { label: "日本法人", value: "2015年設立", detail: "ファストリー株式会社・東京都港区。", source: "company" },
    { label: "日本法人での想定従業員数", value: "35人", detail: "厚生年金保険・健康保険の被保険者数。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Senior Account Executive。", source: "job" },
  ],
  customers: [
    { company: "毎日放送", products: "Fastly CDN", outcome: "cache hit率98%以上、cache clearを数十分から数秒へ短縮した公式事例。", implication: "performanceとcontent operationを定量化できる。" },
    { company: "DeNA", products: "Fastly", outcome: "portal、mobile game、e-commerceを持つ国内digital事業者の公式事例。", implication: "複数serviceとtraffic patternを扱う国内proof。" },
    { company: "OpenStreetMap", products: "Fastly", outcome: "世界中の何百万人ものuserへのservice拡張を公式事例で紹介。", implication: "global scaleとpublic infrastructureのproof。" },
  ],
  externalSignals: [
    { label: "DDoS・API", value: "継続的な可用性risk", detail: "internet-facing serviceはattack量だけでなく、検知、緩和、false positive、連絡、復旧を事前設計する必要がある。", caveat: "個別の脅威と対策はsystem構成・業界で異なる。" },
    { label: "AI traffic", value: "human以外のrequest増加", detail: "crawler・agent trafficの識別、content policy、cost、business valueを分けて管理する必要がある。", caveat: "Fastly導入だけでAI bot利用の適法性・安全性を保証しない。" },
  ],
  role: "Senior Account ExecutiveがCommerce・Financeを中心にGTM plan、new business、PoC、pricing、contract、account managementを持ち、SE・CS・Marketing・Productと協業する。",
  organization: "Country Manager Japanへreportし、東京officeは週2〜3回のHybrid。日本法人の被保険者35人という公開値はあるが、sales team人数とterritory分割は非公開。",
  careerValue: "edge delivery、application security、cloud economics、developer workflow、C-level value sellingを一つのEnterprise sales cycleで扱う経験。",
  globalHeadcount: "1,140人",
  japanPresence: "ファストリー株式会社・東京都港区。2015年設立、日本法人の被保険者35人",
  japanSince: "2015年",
  solutions: [
    { name: "Network Services", valueProp: "CDN、streaming、image、origin trafficをedgeで高速化・最適化する。", url: "https://www.fastly.com/jp/products/content-delivery-network", competitors: "Akamai、Cloudflare、Amazon CloudFront。", differentiation: "programmable cacheとinstant purge。" },
    { name: "Security", valueProp: "Next-Gen WAF、DDoS、API・bot securityでapplicationを保護する。", url: "https://www.fastly.com/jp/products/security", competitors: "Cloudflare、Akamai、Imperva、cloud-native security。", differentiation: "edge deliveryとsecurity policy・visibilityを接続。" },
    { name: "Compute / Observability", valueProp: "edge code実行とreal-time traffic・log visibilityを提供する。", url: "https://www.fastly.com/jp/products/edge-compute", competitors: "Cloudflare Workers、AWS Lambda@Edge、Vercel。", differentiation: "high-performance edgeとdeveloper control。" },
  ],
  fitTags: ["Edge Cloud", "CDN", "Application Security", "DDoS", "Compute", "Enterprise Sales", "Hybrid", "Japan"],
  comparisons: [
    { arena: "Edge Cloud", companies: ["Fastly", "Cloudflare", "Akamai", "Amazon CloudFront"], why: "performance、network、programmability、cost" },
    { arena: "Application Security", companies: ["Fastly", "Cloudflare", "Imperva", "Akamai"], why: "WAF、DDoS、API・bot、operations" },
    { arena: "Edge Compute", companies: ["Fastly Compute", "Cloudflare Workers", "Lambda@Edge", "Vercel"], why: "runtime、deployment、latency、observability" },
  ],
});

const webflowIntelligence = buildIntelligence({
  checkedAt,
  jobConfirmed: false,
  slug: "webflow",
  name: "Webflow",
  jobUrl: "https://webflow.com/company/careers/roles",
  officialUrl: "https://webflow.com/company/about",
  customersUrl: "https://webflow.com/customers",
  externalUrl: "https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook",
  financeUrl: "https://webflow.com/company/about",
  salesSnapshot: "visual website builderを、CMS、optimization、localization、enterprise governance、AI・agent接続を含むWebsite Experience Platformへ広げる会社。日本ではcommunity・certified partner・課税対応は確認できるが、法人・常設拠点・Japan求人は未確認。",
  growthSummary: "会社公式は900人超・25カ国、350万人users、累計調達3.35億ドル、30万超の導入組織を表示。日本法人・常設拠点・Japan求人・国内売上は未確認で、正式進出と販売体制はまだ判断できない。",
  ipoSummary: "非公開企業。IPO時期、売上、ARR、日本売上は公表されていない。",
  milestones: [
    { year: "2013", label: "創業", detail: "visual web development platformとして開始。", source: "company" },
    { year: "2023", label: "Localization", detail: "native localizationを全顧客へ展開。", source: "company" },
    { year: "2024", label: "Intellimize買収", detail: "optimization・personalizationを拡張。", source: "company" },
    { year: "2025", label: "GSAP買収", detail: "web animation基盤をportfolioへ追加。", source: "company" },
    { year: "2026.06", label: "Localize panel", detail: "localization専用panelと翻訳基盤を更新。", source: "company" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Amazon Adsはproduction cycleを49.5%短縮、Hakim Groupは月間site productionを400%増、Arkose Labsは契約から3.5週間で新siteを公開したと公式事例で示す。共通点はmarketingとengineeringのhandoffを減らすこと。" },
    { title: "製品の成り立ちから見る課題", body: "visual builderからCMS、hosting、Analyze、Optimize、Localization、Cloudへ広がった。核はdesigner・marketerがbrandとgovernanceを保ちながらproduction websiteを自ら更新できること。" },
    { title: "外部環境の要求から見る課題", body: "websiteがAI agentと検索engineにも読まれる入口になる一方、日本企業は日本語content、accessibility、security、approval、speed、global brandを同時に満たす必要がある。制作速度だけでなく運用統制が投資理由になる。" },
  ],
  narrative: [
    { label: "背景", body: "website更新がagency、developer、CMS管理者のticketへ分かれ、campaignとproduct launchに追いつかない。" },
    { label: "課題", body: "marketerの自律性を上げるとbrand・security・accessibilityが崩れ、統制を強めると公開速度が落ちる。" },
    { label: "解決策", body: "一つのregional siteでcomponent、CMS、approval、localization、analytics、optimizationを標準化し、公開時間と品質を測る。" },
    { label: "選定の理由", body: "Adobe Experience Manager、Contentful、WordPress、Framer、agency・内製との比較で、visual ownershipとenterprise governanceを両立できる場合に選ぶ。" },
  ],
  openingHook: "campaignの企画が決まってから日本語pageを安全に公開し、改善を始めるまで何日と何部署のhandoffがありますか。",
  valueHypothesis: "time-to-publish、engineering ticket、agency cost、localized page数、conversion、accessibility defect、component reuseをbaseline比較する。",
  objection: "日本語supportと国内法人がなく、既存CMS・agencyで十分。Enterprise導入の運用riskが高い。",
  reframe: "page制作機能ではなく、marketing autonomy、component governance、localization、optimization、agent接続を含むwebsite operating modelの3年TCOで比較する。",
  facts: [
    { label: "Team members", value: "900+", detail: "25カ国に分散。", source: "company" },
    { label: "Users", value: "350万人", detail: "会社公式表示。", source: "company" },
    { label: "累計調達", value: "3.35億ドル", detail: "会社公式表示。", source: "finance" },
    { label: "導入組織", value: "30万超", detail: "公式顧客事例ページ。", source: "customers" },
    { label: "日本向け課税", value: "JCT対応", detail: "公式helpでJapanのtax registration number対応を表示。", source: "company" },
    { label: "日本拠点", value: "未確認", detail: "日本法人・常設officeを公式・公的情報で確認できない。", source: "job" },
    { label: "Japan求人", value: "0件", detail: "公式open rolesに日本・APAC対象roleを確認できない。", source: "job" },
  ],
  customers: [
    { company: "Amazon Ads", products: "Webflow", outcome: "production cycleを49.5%短縮した公式事例。", implication: "large enterpriseでもcreativeとdeliveryのhandoffを減らせるproof。" },
    { company: "Hakim Group", products: "Webflow / Analyze / Localization / Optimize", outcome: "月間site productionを400%増やした公式事例。", implication: "多数brand・siteをgovernanceしながらscaleする例。" },
    { company: "Arkose Labs", products: "Webflow / MCP", outcome: "契約から3.5週間で新siteを公開した公式事例。", implication: "agentic workflowとmigration速度を示す。" },
  ],
  externalSignals: [
    { label: "Web accessibility", value: "設計・運用での継続対応", detail: "日本語siteでも構造、keyboard、contrast、alternative text、testingを制作processへ組み込む必要がある。", caveat: "具体的義務と適合levelは組織・用途・契約で異なる。" },
    { label: "AI・検索", value: "machine-readable content", detail: "agentとsearchがcontentを参照するほど、構造化、source、更新責任、localizationの品質が重要になる。", caveat: "Webflow導入だけで検索順位やAI回答掲載を保証しない。" },
  ],
  role: "日本専任求人は未確認。現在のopen rolesは米国・Canada・英国・Argentina等が中心で、日本のsales、SE、CS、support体制は公開情報から確認できない。",
  organization: "Remote-firstで900人超・25カ国。日本のcommunity・certified partnerはあるが、Webflow自身の日本法人・常設拠点・local leadershipとは区別する。",
  careerValue: "正式進出時はWebsite Experience Platform、PLG-to-enterprise、agency ecosystem、localization、marketing transformationを横断するmarket build経験になり得る。",
  globalHeadcount: "900+",
  japanPresence: "日本法人・常設拠点・Japan求人は未確認。日本のcommunity・certified partnerは確認",
  japanSince: "正式進出は未確認",
  solutions: [
    { name: "Webflow Platform / CMS", valueProp: "visual development、CMS、hosting、component governanceを統合する。", url: "https://webflow.com/platform", competitors: "WordPress、Contentful、Adobe Experience Manager、Framer。", differentiation: "visual canvasとproduction hostingを一続きにする。" },
    { name: "Analyze / Optimize", valueProp: "first-party analyticsとexperiment・personalizationでwebsite成果を改善する。", url: "https://webflow.com/optimize", competitors: "Optimizely、Adobe Target、Google Analytics周辺。", differentiation: "build・content・optimizationを同じwebsite workflowへ接続。" },
    { name: "Localization", valueProp: "locale別content、style、URL、SEOを管理する。", url: "https://webflow.com/localization", competitors: "Weglot、Lokalise、CMS plugin、TMS。", differentiation: "visual designとlocale operationsをnative統合。" },
  ],
  fitTags: ["日本未進出", "Website Experience Platform", "Visual Development", "CMS", "Localization", "Enterprise", "Remote-first"],
  comparisons: [
    { arena: "Website Experience Platform", companies: ["Webflow", "Adobe Experience Manager", "WordPress", "Contentful"], why: "authoring、governance、hosting、TCO" },
    { arena: "Visual Development", companies: ["Webflow", "Framer", "Wix Studio", "agency内製"], why: "design freedom、production、enterprise control" },
    { arena: "Optimization / Localization", companies: ["Webflow", "Optimizely", "Weglot", "Lokalise"], why: "experiment、translation、regional operations" },
  ],
});

const webflowEntryAssessment: JapanEntryAssessment = {
  verdict: "日本での利用・partner接点とlocalization productは確認できるが、日本法人・常設拠点・Japan求人がなく、現時点は正式進出前の継続観測。",
  factSignals: [
    { title: "日本法人・拠点", body: "Webflow自身の日本法人、Tokyo office、常設拠点を公式・公的情報で確認できない。", sourceIds: ["webflow-company"] },
    { title: "Japan求人", body: "公式open rolesに日本・APAC対象roleを確認できない。", sourceIds: ["webflow-job"] },
    { title: "日本のecosystem", body: "Tokyo communityと日本のcertified enterprise partnerは確認できるが、自社local teamとは区別する。", sourceIds: ["webflow-company"] },
    { title: "市場対応", body: "日本のsubscriptionへJCTを扱い、productはlocale・SEO・translation workflowを提供する。", sourceIds: ["webflow-company"] },
  ],
  hurdles: [
    { title: "local support", body: "日本語sales、solution design、support、incident escalationの提供主体を確認できない。", sourceIds: ["webflow-job"] },
    { title: "Enterprise procurement", body: "日本語契約、security review、data processing、請求・税務のlocal operating modelが未確認。", sourceIds: ["webflow-company", "webflow-external"] },
    { title: "competitive market", body: "Adobe、WordPress、headless CMS、Framer、国内agency・SIとの役割分担と勝ち筋が必要。", sourceIds: ["webflow-company", "webflow-customers"] },
    { title: "delivery capacity", body: "design system migration、localization、accessibility、integrationを担うpartner capacityと品質管理が必要。", sourceIds: ["webflow-customers", "webflow-external"] },
  ],
  readinessConditions: [
    { title: "Japan leader", body: "JapanまたはNorth Asiaのsales leaderとreporting lineを公式に確認する。" },
    { title: "local pod", body: "AEだけでなくSE、CS、Supportを日本時間・日本語で提供する。" },
    { title: "国内lighthouse", body: "日本企業のproduction導入、公開速度、conversion、運用costを公式事例化する。" },
    { title: "partner program", body: "certified partnerとsales・delivery・support・renewalの責任分界を整える。" },
    { title: "法人・契約", body: "日本法人または公式拠点、日本語契約、privacy・security review体制を確認する。" },
  ],
  watchSignals: ["Japan / North Asia sales求人", "Japan SE・CS・Support求人", "日本法人・Tokyo office", "国内named customer事例", "日本語product・supportの拡張", "国内agency・SI partner program"],
};

webflowIntelligence.marketStatus.genbaVerdict = {
  headline: "日本未進出：product readinessとecosystemはあるが、自社local teamのsignal待ち。",
  body: "350万人users、30万超の導入組織、Localization、日本のcommunity・partner接点は市場適合の材料になる。一方、日本法人・常設拠点・Japan求人を確認できず、応募可能企業や正式進出済み企業として扱わない。",
};
webflowIntelligence.marketStatus.japanGrowth = {
  headline: "日本の利用・partner接点はあるが、法人・拠点・求人は未確認。",
  narrative: "JCT対応、localization機能、日本のcommunity・certified partnerは確認できる。ただし、これらをWebflow自身の日本法人、常設office、local sales・supportの証明へ置き換えない。",
  qualitativeSignals: [
    { label: "公式採用", detail: "2026年8月21日時点のopen rolesにJapan・APAC対象roleを確認できない。", sourceId: "webflow-job" },
    { label: "法人・拠点", detail: "日本法人・常設拠点を公式・公的情報で確認できない。", sourceId: "webflow-company" },
    { label: "市場signal", detail: "日本のcommunity・certified partner、JCT対応、Localizationを確認。", sourceId: "webflow-company" },
  ],
  entryAssessment: webflowEntryAssessment,
  sourceIds: ["webflow-job", "webflow-company", "webflow-customers", "webflow-external", "webflow-finance"],
};
webflowIntelligence.companyStats.japanHeadcount = { value: "確認できず", detail: "日本法人・雇用主体・Japan team人数は未確認。", sourceId: "webflow-company" };
webflowIntelligence.companyStats.japanOffice = { value: "常設オフィス未確認", detail: "community・partner拠点はWebflow自身のofficeと区別する。", sourceId: "webflow-company" };

applyStandard(dropboxIntelligence, buildCompactPatch({
  slug: "dropbox",
  leaderName: "Drew Houston",
  leaderLabel: "Co-Founder / Co-CEO",
  leaderUrl: "https://www.dropbox.com/about",
  localName: "龍村 洋一",
  localLabel: "Dropbox Japan 代表取締役社長",
  localUrl: "https://navi.dropbox.jp/about-dropbox-japan",
  companyId: "dropbox-company",
  jobId: "dropbox-job",
  customersId: "dropbox-customers",
  externalId: "dropbox-external",
  financeId: "dropbox-finance",
  targets: ["情報システム部門", "大容量ファイルを扱う事業部門", "全社検索・AI活用責任者"],
  heroSummary: "ファイル、動画、契約情報が複数の保管先へ分断され、最新版の探索や社外共有に時間と事故リスクが生じる課題を解決する。同期、共有、署名、レビュー、横断検索を同じ運用へつなぎ、探索時間と共有の往復を減らして定着・継続利用を高める。",
  competitors: "Microsoft OneDrive、Google Drive、Box、Glean、DocuSignとの比較では、保管容量だけでなく外部共有、同期、検索、承認、復旧を含むworkflow全体を見る。",
  feature: "Dropbox Business、Dash、Sign、DocSend、Replayで、保存・共有・検索・署名・reviewを一つのcontent workflowへ接続する。",
  advantage: "cross-platform syncを入口に、外部共有とcontent lifecycleを広く扱い、単一suiteまたはpoint toolの組み合わせと比較できる。",
  benefit: "社員の探索時間、最新版確認、社外共有の往復、server運用工数を減らし、adoptionをretention・expansionへつなげる。",
  evidence: "公式国内事例は朝日放送テレビ、戸田建設、日本翻訳センターで大容量共有、server移行、電子署名との組み合わせを示す。",
  marketVerdict: "知名度の高いstorageから、AI searchとcontent workflowの利用定着へ価値を広げられるかが日本成長の分岐点。",
  marketParagraphs: [
    "hybrid workと生成AIでcontentが複数toolへ散らばるほど、権限を保った検索、社外共有、retention、退職者dataの統制需要は続く。",
    "一方でMicrosoft 365とGoogle Workspaceのbundlingが強く、Dropbox Japanは国内事例を個別workflowの時間・risk・retention成果へ変える必要がある。",
  ],
  cultureHeadline: "Virtual Firstで、顧客の利用定着を部門横断で進めるCustomer Success組織。",
  classification: "フルリモート",
  displayLabel: "日本国内Remote",
  officeDays: "固定出社日の記載なし",
  remoteOnly: "日本国内からのRemote勤務を公式求人で確認",
  flexibility: "顧客meetingとteam offsiteへの出張あり",
  goodFor: ["大手顧客のadoptionを定量化したい人", "AI searchとchange managementを扱いたい人"],
  cautionFor: ["担当社数やcommercial creditの公開を前提にする人", "対面中心のoffice文化を求める人"],
  unresolved: [
    ["担当portfolio", "大手顧客を少数深耕する可能性がある。", "担当社数、ARR、業界、renewal時期の分布はどう設計されていますか。"],
    ["成果指標", "adoptionとretention・growthの両方を追う。", "CSMのscorecardでusage、renewal、expansionはどの比率ですか。"],
    ["Dashの立ち上げ", "AI searchが既存storage顧客への拡張軸になる。", "日本でDashを本番定着させた顧客数と主要use caseは何ですか。"],
    ["部門間責任", "SalesとCSのcommercial responsibilityが案件で分かれる。", "renewal、expansion、risk accountの最終責任とcredit ruleは何ですか。"],
    ["career path", "ICの上位scopeまたはCS leadershipへ広がる。", "直近24カ月の昇進・異動例と、次levelの定量基準を教えてください。"],
  ],
}));

applyStandard(fastlyIntelligence, buildCompactPatch({
  slug: "fastly",
  leaderName: "Kip Compton",
  leaderLabel: "Chief Executive Officer",
  leaderUrl: "https://www.fastly.com/about/leadership",
  localName: "Richard Wong",
  localLabel: "日本法人 代表取締役",
  localUrl: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010401117015",
  companyId: "fastly-company",
  jobId: "fastly-job",
  customersId: "fastly-customers",
  externalId: "fastly-external",
  financeId: "fastly-finance",
  targets: ["デジタル事業責任者", "アプリケーション・セキュリティ部門", "クラウド基盤・SRE部門"],
  heroSummary: "配信、WAF、DDoS対策、API監視が複数vendorへ分断され、traffic急増や攻撃時の判断と変更が遅れる課題を解決する。programmable edgeで性能とsecurity policyを即時に運用し、origin負荷、復旧時間、停止リスクを減らしてconversionと可用性を高める。",
  competitors: "Cloudflare、Akamai、Amazon CloudFront、Imperva、cloud-native securityとの比較では、network規模だけでなくprogrammability、即時変更、security、developer運用、総コストを見る。",
  feature: "CDN、edge compute、Next-Gen WAF、DDoS・API security、real-time observabilityをprogrammable edge cloudへ統合する。",
  advantage: "deliveryとsecurityをdeveloperがcode・policyで即時変更でき、固定的なnetworkまたは別々のsecurity toolと比較して運用の往復を減らす。",
  benefit: "latency、cache hit、origin cost、policy反映、MTTRを同時に改善し、traffic急増時の売上機会とavailabilityを守る。",
  evidence: "毎日放送の公式事例はcache hit率98%以上とcache clearの数十分から数秒への短縮を示す。",
  marketVerdict: "Security成長とNRRは追い風だが、日本ではCDN更新だけでなくperformance・security・cloud costを一つの事業caseにできるかが重要。",
  marketParagraphs: [
    "Commerce・Financeのdigital化とAI bot・API trafficの増加は、latency、availability、fraud、DDoS、origin costを同時に扱う需要を強める。",
    "Q2 2026の売上23%増、Security売上43%増、LTM NRR 117%は拡張余地を示す一方、日本の売上・顧客数・seller達成率は未公開である。",
  ],
  cultureHeadline: "東京Hybridで、developer-firstの技術をC-levelの事業成果へ翻訳するEnterprise Sales組織。",
  classification: "ハイブリッド",
  displayLabel: "東京Hybrid",
  officeDays: "週2〜3回出社",
  remoteOnly: "Remote併用だが完全Remoteとは明記されていない",
  flexibility: "顧客・社内協働に応じてTokyo officeを利用",
  goodFor: ["securityとnetworkを事業KPIへ翻訳したい人", "new logoからtechnical validationまで担いたい人"],
  cautionFor: ["単一productの短期transactionだけを望む人", "quota・territoryの公開情報だけで判断したい人"],
  unresolved: [
    ["territory", "Commerce・Financeのnamed accountを新規中心で持つ。", "対象account数、既存顧客比率、white space、segment境界はどうなっていますか。"],
    ["quota設計", "new、expansion、usageの複数指標があり得る。", "quota、pay mix、credit、accelerator、ramp保証、直近達成率を教えてください。"],
    ["technical win", "SEとPoCでperformance・securityの両方を証明する。", "PoC比率、平均期間、conversion、SE:AE比、失注理由の分布は何ですか。"],
    ["partner motion", "cloud・SI・resellerとの協業が案件coverageを左右する。", "partner-sourcedとinfluencedの定義、credit、delivery責任はどう分かれますか。"],
    ["Japan投資", "小規模teamでportfolioを広げる局面にある。", "今後12カ月の採用計画、CS・Support・Marketing capacity、意思決定権は何ですか。"],
  ],
}));

applyStandard(webflowIntelligence, buildCompactPatch({
  slug: "webflow",
  leaderName: "Linda Tong",
  leaderLabel: "Chief Executive Officer",
  leaderUrl: "https://webflow.com/company/about",
  localName: "未確認",
  localLabel: "Japan法人責任者",
  localUrl: "https://webflow.com/company/careers/roles",
  companyId: "webflow-company",
  jobId: "webflow-job",
  customersId: "webflow-customers",
  externalId: "webflow-external",
  financeId: "webflow-finance",
  targets: ["デジタルマーケティング部門", "Web運用・ブランド部門", "デザインシステム・開発部門"],
  heroSummary: "Web更新がagency、developer、CMS管理者のticketへ分断され、campaign公開が遅れる一方、内製化するとbrandやsecurityの統制が崩れる課題を解決する。visual development、CMS、localization、optimizationを同じ運用へつなぎ、制作時間とengineering工数を減らして改善速度を高める。",
  competitors: "Adobe Experience Manager、Contentful、WordPress、Framer、agency・内製との比較では、design freedom、governance、localization、optimization、移行負荷、3年TCOを見る。",
  feature: "visual development、CMS、hosting、Analyze、Optimize、Localization、component governanceをWebsite Experience Platformへ統合する。",
  advantage: "designerとmarketerがproduction siteを直接改善しながら、componentと権限を保ち、headless CMSやagency中心運用とのhandoffを減らす。",
  benefit: "time-to-publish、engineering ticket、agency costを減らし、local page数、experiment速度、conversion改善を増やす。",
  evidence: "公式事例はAmazon Adsのproduction cycle 49.5%短縮、Hakim Groupの月間site production 400%増、Arkose Labsの3.5週間公開を示す。",
  marketVerdict: "日本語contentとglobal brandを高速運用する需要はあるが、正式進出にはlocal sales・SE・CS・supportと国内事例の確認が必要。",
  marketParagraphs: [
    "生成AIと検索がwebsite contentを参照するほど、構造化、localization、accessibility、security、更新責任を制作速度と同時に満たす必要がある。",
    "日本のcommunity・certified partner・JCT対応は利用signalだが、日本法人、常設office、Japan求人がなく、自社GTMの成立はまだ確認できない。",
  ],
  cultureHeadline: "Remote-firstのglobal組織だが、日本の配属先・雇用・勤務条件は未確認。",
  classification: "未確認",
  displayLabel: "日本勤務条件は未確認",
  officeDays: "Japan officeを確認できず",
  remoteOnly: "globalはRemote-firstだが日本勤務を保証しない",
  flexibility: "Japan求人と雇用主体を確認できない",
  goodFor: ["正式進出signalを長期観測したい人", "Web運用とmarketing transformationを横断したい人"],
  cautionFor: ["現在応募できる日本求人を探す人", "日本語support・国内雇用を前提にする人"],
  unresolved: [
    ["進出判断", "利用とpartner接点はあるが自社GTM前。", "JapanまたはNorth Asiaの専任leaderを置く判断条件は何ですか。"],
    ["雇用主体", "正式進出時の法人・EOR・APAC雇用は未定。", "日本採用を始める場合の雇用主体、勤務地、契約、benefitはどう設計しますか。"],
    ["local pod", "AEだけでなくSE・CS・Supportが必要。", "日本語でsales、solution design、onboarding、supportを誰が担いますか。"],
    ["国内proof", "partner経由の利用を自社caseへ変える必要がある。", "日本企業のproduction導入と定量成果を公式事例化する計画はありますか。"],
    ["競争戦略", "AEM、WordPress、headless、agencyと用途が重なる。", "日本で最初に絞るsegment、use case、partner、比較軸は何ですか。"],
  ],
}));

for (const intelligence of [dropboxIntelligence, fastlyIntelligence, webflowIntelligence]) {
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.21";
}

const publicMarketRead = (slug: "dropbox" | "fastly", metrics: Array<{ label: string; value: string; change: string; interpretation: string }>) => ({
  asOf: checkedAt,
  metrics: metrics.map((metric) => ({ ...metric, sourceId: `${slug}-finance` })),
  growthDrivers: [{ title: "既存顧客への拡張", evidence: "最新決算の売上・継続利用指標を確認。", japanMeaning: "日本でも導入後の利用定着と複数productへの展開が投資継続の鍵になる。", sourceIds: [`${slug}-finance`, `${slug}-customers`] }],
  risks: [{ title: "競争と実行", disclosedRisk: "大手suite・cloud・専門vendorとの競争が続く。", companyResponse: "portfolioと製品投資を拡張している。", genbaRead: "日本の売上、顧客数、達成率が未公開のため、global成長を国内territoryの容易さへ置き換えない。", sourceIds: [`${slug}-finance`, `${slug}-company`] }],
  japanCommitment: {
    verdict: "日本法人と現行求人は確認できるが、国内売上・顧客数・達成率は未公開。",
    summary: "国内法人、公式求人、顧客事例を投資signalとして扱い、人数やglobal決算だけから成長を断定しない。",
    signals: [{ year: "2026", title: "現行Japan求人", detail: "公式Careerで日本向けroleを確認。", sourceIds: [`${slug}-job`] }],
    unknowns: ["日本売上・ARR", "国内顧客数・segment別pipeline", "quota・達成率・採用計画"],
  },
  scenarios: [
    { scenario: "基本" as const, title: "既存基盤から選択的に拡張", body: "国内事例と現行求人を活かし、明確なworkflow・industryで拡張する。" },
    { scenario: "上振れ" as const, title: "複数productの定着が加速", body: "定量caseとpartner・導入capacityが増え、new logoとexpansionが同時に伸びる。" },
    { scenario: "下振れ" as const, title: "競合と実装負荷で停滞", body: "bundling、価格、移行、運用負荷によりsales cycleとadoptionが悪化する。" },
  ],
  sourceIds: [`${slug}-finance`, `${slug}-company`, `${slug}-customers`, `${slug}-job`],
});

dropboxIntelligence.marketStatus.capitalMarketRead = publicMarketRead("dropbox", [
  { label: "Q2 2026売上", value: "6.315億ドル", change: "前年同期比0.9%増", interpretation: "成長は緩やかで、既存顧客の定着とportfolio拡張が重要。" },
  { label: "ARR", value: "25.66億ドル", change: "前年同期比1.0%増", interpretation: "大きい継続収益基盤はあるが、growth再加速は未確認。" },
]);
fastlyIntelligence.marketStatus.capitalMarketRead = publicMarketRead("fastly", [
  { label: "Q2 2026売上", value: "1.833億ドル", change: "前年同期比23%増", interpretation: "portfolio全体の成長が加速。" },
  { label: "Security売上", value: "非開示", change: "前年同期比43%増", interpretation: "securityが主要な成長driver。" },
]);

export const daily20260821IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  dropbox: dropboxIntelligence,
  fastly: fastlyIntelligence,
  webflow: webflowIntelligence,
};
