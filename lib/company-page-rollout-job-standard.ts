type JobLike = {
  id: string;
  companySlug: string;
  title: string;
  segment: string;
  location: string;
  language: string;
  lastChecked: string;
  source: { label: string; url: string };
  compensationReality: string;
  compensationResearch?: {
    researchedAt: string;
    confidence: "高" | "中" | "探索中";
    headline: string;
    summary: string;
    breakdown: Array<{ label: string; value: string; status: string; detail: string }>;
    readerTake: string;
    sources: Array<{ label: string; url: string; detail: string }>;
  };
  reputationResearch?: {
    researchedAt: string;
    summary: string;
    positiveTopics: string[];
    negativeTopics: string[];
    caveat: string;
    sources: Array<{ label: string; url: string; detail: string }>;
  };
  marketValueResearch?: {
    headline: string;
    summary: string;
    skills: Array<{ title: string; detail: string }>;
    nextRoles: Array<{ title: string; detail: string }>;
    marketBands: Array<{ level: string; range: string; condition: string }>;
    proofPoints: string[];
    caveat: string;
  };
};

const batchSlugs = new Set(["anaplan", "braze", "channel-talk", "coupa", "cursor", "glean", "hubspot", "qualtrics", "speak", "stripe", "verkada", "walkme", "celonis", "confluent", "dataiku", "deepl", "elevenlabs", "mirakl", "new-relic", "notion", "okta", "pagerduty", "sonar", "zendesk", "zilliz", "aghanim", "airwallex", "amplitude", "anthropic", "asana", "cambly", "cato-networks", "censys", "cloudflare", "cognition"]);

const officialCompensation: Record<string, {
  headline: string;
  summary: string;
  breakdown: Array<{ label: string; value: string; status: string; detail: string }>;
}> = {
  "verkada-sales-strategy-operations-manager-japan": {
    headline: "公式求人に推定年額1,515万〜2,139万円を掲載",
    summary: "求人は適用時にbase salaryとsales commissionsを含むOTE rangeと説明。base/variableの内訳、bonus、RSU、quota、equity条件は公開されていない。",
    breakdown: [{ label: "推定年額", value: "1,515万〜2,139万円", status: "公式掲載", detail: "適用時はbaseとcommissionを含むOTE。内訳は非公開。" }],
  },
  "stripe-account-executive-commercial-hunter-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "stripe-account-executive-enterprise-hunter-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "stripe-account-executive-commercial-grower-japan": {
    headline: "公式求人にOTE年額1,720万〜2,580万円を掲載",
    summary: "基本給とcommissionまたはbonus targetを含むOTE。pay mix、quota、accelerator、equity、ramp保証は公開されていない。",
    breakdown: [{ label: "OTE", value: "1,720万〜2,580万円", status: "公式掲載", detail: "基本給とcommissionまたはbonus targetを含む年額。" }],
  },
  "channel-talk-ax-sales": {
    headline: "公式求人に年収800万〜1,400万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・quota・acceleratorの内訳は公開されていない。",
    breakdown: [{ label: "年収", value: "800万〜1,400万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "channel-talk-inside-sales": {
    headline: "公式求人に年収600万〜1,000万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・quota・acceleratorの内訳は公開されていない。",
    breakdown: [{ label: "年収", value: "600万〜1,000万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "channel-talk-partner-sales": {
    headline: "公式求人に年収600万〜1,400万円を掲載",
    summary: "年収レンジは確認できるが、基本給・変動給・賞与・equity・partner案件のcredit ruleは公開されていない。",
    breakdown: [{ label: "年収", value: "600万〜1,400万円", status: "公式掲載", detail: "基本給と変動給の内訳は未確認。" }],
  },
  "coupa-adr": {
    headline: "公式求人に基本給696.2万〜789.04万円、OTE994.6万〜1,127.2万円を掲載",
    summary: "Pay mix 70/30を公式求人で確認。equity、quota、ramp保証、accelerator、達成率は公開されていない。",
    breakdown: [
      { label: "基本給", value: "696.2万〜789.04万円", status: "公式掲載", detail: "年額。" },
      { label: "OTE", value: "994.6万〜1,127.2万円", status: "公式掲載", detail: "目標達成時の総現金報酬。" },
      { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "基本給70%、変動給30%。" },
    ],
  },
  "coupa-alliances-director": {
    headline: "公式求人に基本給1,527.3万〜1,730.9万円、OTE2,181.8万〜2,472.7333万円を掲載",
    summary: "Pay mix 70/30を公式求人で確認。equity、quota、partner revenue credit、accelerator、達成率は公開されていない。",
    breakdown: [
      { label: "基本給", value: "1,527.3万〜1,730.9万円", status: "公式掲載", detail: "年額。" },
      { label: "OTE", value: "2,181.8万〜2,472.7333万円", status: "公式掲載", detail: "目標達成時の総現金報酬。" },
      { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "基本給70%、変動給30%。" },
    ],
  },
};

const companyResearch: Record<string, {
  name: string;
  domain: string;
  officialUrl: string;
  communityUrl?: string;
  communityLabel?: string;
  positive: string[];
  negative: string[];
  next: string[];
}> = {
  cambly: {
    name: "Cambly", domain: "Corporate Learning・English Training", officialUrl: "https://jobs.ashbyhq.com/Cambly",
    positive: ["現行APAC Sales Directorは日本・中国・韓国の売上計画とSales・Marketing組織を担う広いleadership scope。", "10,000超tutor、human lesson、AI練習、CEFR、法人dashboardを一つの研修programで扱える。"],
    negative: ["日本法人・office・current team・国内売上・利益は非公開。東京はsecondary locationで日本専任roleではない。", "2,000超導入等はcompany claimで、active paid customer・成果・renewalを示さない。"],
    next: ["EdTech・Corporate LearningのAPAC Sales Leadership", "HR Tech・L&D Platform GTM", "Global Talent・Learning Business Development"],
  },
  "cato-networks": {
    name: "Cato Networks", domain: "SASE・Network Security", officialUrl: "https://www.catonetworks.com/careers/",
    positive: ["日本でSales、Presales、CS、Supportの10求人があり、pipelineからproduction supportまでlocal capacityを拡張している。", "current ARR 4.15億米ドル超、4,000超enterprise customerと国内大手事例を公表。"],
    negative: ["recognized revenue、利益、日本ARR、quota、給与・OTE、勤務形態は非公開。ARRを売上高と扱えない。", "single architectureは運用簡素化の反面、vendor concentration・lock-in・migration riskを伴う。"],
    next: ["SASE・CybersecurityのEnterprise Sales", "Network・Security Solutions Engineering", "Customer Success・Support・SASE Leadership"],
  },
  censys: {
    name: "Censys", domain: "Internet Intelligence・Attack Surface Management", officialUrl: "https://job-boards.greenhouse.io/censys",
    positive: ["Japan RemoteでAEとSenior Solutions Engineerを同時採用し、direct・channelとtechnical winを構築する。", "継続的なinternet観測とExposure・Investigations・APIを同じdata基盤で提供。"],
    negative: ["売上・ARR・利益、日本顧客・法人・officeは非公開。APAC成長率は絶対規模を示さない。", "観測coverage、asset attribution、false positive、remediation ownerを顧客環境で検証する必要がある。"],
    next: ["Attack Surface・CTIのEnterprise AE", "Cybersecurity Solutions Engineering", "Internet Data・Security Platform GTM"],
  },
  cloudflare: {
    name: "Cloudflare", domain: "Connectivity Cloud・Network・Security", officialUrl: "https://job-boards.greenhouse.io/cloudflare",
    positive: ["日本でEnterprise Sales、Partner leadership・management、Premium Supportの現行5求人がありcoverageを拡張。", "Q1 2026は売上成長とFCFを確保し、Application・Network・SASE・Developerをglobal networkで横断できる。"],
    negative: ["GAAP営業赤字が続き、2026年には約1,100人の人員削減も発表。成長と組織riskを両方見る必要がある。", "日本売上・quota・達成率・給与・OTEは非公開。製品範囲が広くrole・territoryの境界確認が重要。"],
    next: ["Cloud Security・NetworkのEnterprise Sales", "Partner・Channel Sales Leadership", "Connectivity・Developer Platform GTM"],
  },
  cognition: {
    name: "Cognition", domain: "AI Software Engineering・Developer Productivity", officialUrl: "https://cognition.com/careers",
    positive: ["東京でAccount、Partnerships、Deployed、Support、GTM Opsの7求人を全てOn-siteで募集し、日本buildの範囲が広い。", "DeNA・ちばぎんの国内成果と、run-rate revenue 5億米ドル超の急成長signalがある。"],
    negative: ["run-rateは監査済み売上・ARRではなく、利益・FCF・retention・日本売上は非公開。", "AI生成codeはsecurity、review、defect、IP、長期保守を同一taskで競合と比較する必要がある。"],
    next: ["AI Developer ToolsのEnterprise GTM", "Deployed・Customer Engineering", "AI Platform Partnerships・GTM Operations"],
  },
  aghanim: {
    name: "Aghanim", domain: "Mobile Gaming D2C・Payments・LiveOps", officialUrl: "https://jobs.ashbyhq.com/aghanim/0b7e0d14-4741-4439-bdba-67dca40af857",
    positive: ["Head of BD Japanがmarket strategyからstudio・partner開拓、revenue、retention・expansionまでをend-to-endで持つfounding scope。", "Game Hub、Merchant of Record、LiveOpsをまとめ、決済手数料だけでなくplayer relationship、margin、LTVを事業caseにできる。"],
    negative: ["日本法人、office、team、顧客、売上、導入KPIは非公開。公式product claimを顧客成果へ一般化できない。", "給与、bonus、quota、equity、雇用主体、delivery体制が非公開で、territoryの成立条件を面接で検証する必要がある。"],
    next: ["Gaming Commerce・PaymentsのBusiness Development", "Japan Country Build・Partnerships", "Mobile Game LiveOps・Platform GTM"],
  },
  airwallex: {
    name: "Airwallex", domain: "Global Payments・FinTech Infrastructure", officialUrl: "https://careers.airwallex.com/",
    positive: ["日本でSales、Account、Partner、Operationsを同時採用し、online paymentsの販売とlocal operationsを作る体制が見える。", "globalではannualized revenue 13億米ドル、transaction volume 2,870億米ドル、90%超multi-product revenueを公表。"],
    negative: ["日本で提供中と安全に確認できる中心はonline payments。Business Account等は準備中で、global portfolioをそのまま売れるとは限らない。", "日本売上・顧客・quota・給与は非公開。AUSTRACの外部監査命令も商談riskとして確認が必要。"],
    next: ["Payments・FinTechのEnterprise／SME Sales", "Treasury・Spend・Embedded Finance GTM", "FinTech Operations・Partnerships Leadership"],
  },
  amplitude: {
    name: "Amplitude", domain: "Product Analytics・Experimentation", officialUrl: "https://job-boards.greenhouse.io/amplitude",
    positive: ["Q2 2026は売上+21%、ARR+22%、RPO+35%、FCFプラスで、analyticsからexperimentation・AIへproduct scopeを広げる。", "NTTドコモとLIFULLの国内事例はconversion、分析時間、実験速度の定量成果を持つ。"],
    negative: ["現行日本求人は0件で、終了求人の給与・勤務・roleを現在へ転用できない。", "Q2はGAAP営業赤字。日本売上・人数・現住所・quotaは非公開で、旧日本法人情報には別会社混同riskがある。"],
    next: ["Product Analytics・Growth Platform GTM", "Experimentation・Feature Management Sales", "Product Operations・Customer Data Platform"],
  },
  anthropic: {
    name: "Anthropic", domain: "Frontier AI・Enterprise AI", officialUrl: "https://job-boards.greenhouse.io/anthropic?offices%5B%5D=4035213008",
    positive: ["東京でindustry AE、Channel、Applied AI、CS、Supportを同時採用し、model saleからproduction・partner・expansionまで体制を広げる。", "Rakuten、NRI、NECの国内成果と、3大cloud経由を含むdeployment optionを持つ。"],
    negative: ["470億米ドル超はrun-rate revenueで監査済み年間売上・ARRではない。利益・FCF、日本売上は非公開。", "model・price・提供条件の変化が速く、critical workloadでは供給継続、fallback、eval、安全性を競合と同条件で検証する必要がある。"],
    next: ["Enterprise AIのStrategic／Industry AE", "AI Solutions Architecture・Customer Success", "Cloud・SI Ecosystem・AI Partnerships"],
  },
  asana: {
    name: "Asana", domain: "Work Management・Human／AI Collaboration", officialUrl: "https://asana.com/ja/jobs/tokyo",
    positive: ["Corporate AEがnew logoからstrategic upsellまでfull-cycleを持ち、SE・Marketing・CSとWork Graph・AI Teammatesを企業標準へ広げる。", "国内事例は会議時間、残業、report作成、paperless等の定量成果を持ち、workflow単位のbusiness caseを作れる。"],
    negative: ["Q1 FY2027はGAAP赤字で、overall・Core・10万米ドル超DBNRRが96〜97%と100%未満。既存cohortはupsell込みで縮小。", "日本売上、顧客数、quota、達成率、給与・OTE、current日本責任者は非公開。新3 appsはcoming soonでGAと混同できない。"],
    next: ["Work Management・CollaborationのCorporate／Enterprise AE", "AI Productivity・Agentic Workflow GTM", "PMO・Transformation・Business Operations Platform"],
  },
  okta: {
    name: "Okta", domain: "Identity Security・Workforce／Customer Identity", officialUrl: "https://job-boards.greenhouse.io/oktajp",
    positive: ["OktaとAuth0のAE、Marketing、TAMを同時に採用し、workforce identityとcustomer identityを日本で広げる体制が見える。", "Q1 FY2027はGAAP営業黒字とFCFを確保し、大口顧客とRPOも増加。国内の運用時間短縮事例を持つ。"],
    negative: ["売上成長は11%、FY27 guideは9〜10%で鈍化。Microsoft Entraとのbundle競争とOkta自身のsecurity incidentを説明する必要がある。", "日本売上、quota、達成率、給与・OTE、role別office日数は非公開。Talent Communityを実求人と混同できない。"],
    next: ["Identity・CybersecurityのEnterprise／Commercial AE", "Customer Identity・Developer Platform GTM", "Security Customer Success・Technical Account Management"],
  },
  pagerduty: {
    name: "PagerDuty", domain: "Incident Management・Operational Resilience", officialUrl: "https://japancloud.jp/career/companies/pagerduty/",
    positive: ["Sales、BDR、Solutions、Professional Servicesの現行6求人があり、new logoからPoV・implementationまで日本で横断できる。", "国内のNTTドコモ、NTTデータ、アイレット事例はMTTA・MTTR・automation・工数の具体的成果を示す。"],
    negative: ["Q1売上は1%増、ARRほぼ横ばい、DBNRR 97%でexisting baseはnet contraction。", "日本売上、quota、達成率、給与・OTE、勤務地・workstyleは非公開。PSC 2求人の別headcountかも未確認。"],
    next: ["Incident Management・ObservabilityのEnterprise AE", "SRE・DevOps PlatformのSolutions Consulting", "Professional Services・Operational Resilience Leadership"],
  },
  sonar: {
    name: "Sonar", domain: "Code Quality・Application Security", officialUrl: "https://jobs.lever.co/sonarsource",
    positive: ["Enterprise directとPartnerの2職を日本で採用し、AI code・AppSec・developer productivityを経営とtechnical buyerへ売る機会がある。", "4億米ドル超revenue、profitable、700万developer・2.1万enterprise customerという会社公表scaleがある。"],
    negative: ["売上の期間・会計基準、利益額・margin、ARRは非公開。国内named customer成果、日本法人・責任者も確認できない。", "GitHub・GitLab等のbundleとpoint security競争に対し、precision、build time、adoption、TCOの検証が必要。"],
    next: ["Developer Tools・AppSecのEnterprise AE", "DevSecOps・Platform Engineering GTM", "Security・Cloud ecosystemのPartner Management"],
  },
  zendesk: {
    name: "Zendesk", domain: "AI Customer Service・Contact Center", officialUrl: "https://zendesk.wd1.myworkdayjobs.com/en-US/zendesk",
    positive: ["Commercial AE、Senior Sales Engineer、BDRの現行3件があり、pipelineからAI technical validation・expansionまで日本で横断できる。", "国内の複数定量事例、国内DC、ISMAP対象service、AI・voice・employee serviceのproduct expansionがある。"],
    negative: ["2022非公開化後のcurrent全社売上・利益・total ARRは非公開。2億米ドルはprojected AI ARR subset。", "給与・OTE、quota、達成率、office日、Commercial AEの言語要件は非公開・矛盾あり。"],
    next: ["AI CX・CRMのCommercial／Enterprise AE", "Contact Center・AI Solutions Engineering", "Customer Service PlatformのBusiness Development"],
  },
  zilliz: {
    name: "Zilliz", domain: "Vector Database・AI Data Infrastructure", officialUrl: "https://jobs.lever.co/zilliz",
    positive: ["Enterprise AEとFounding Field Engineerを日本で同時採用し、Milvus developer起点からproduction Cloudへ広げるfounding motionが見える。", "10,000超の利用組織、45,000超GitHub stars、Tokyo region・BYOCはproduction AIのtechnical credibilityになる。"],
    negative: ["売上、ARR、利益、日本法人・責任者・顧客成果は非公開。累計調達やOSS scaleをrevenue・paid conversionと混同できない。", "pgvector、Elastic、cloud-native、自社運用Milvusで足りる顧客には増分platformとTCOが問われる。"],
    next: ["AI Data InfrastructureのEnterprise AE", "Database・RAG PlatformのField Engineering", "Open-source commercialisation・Founding GTM"],
  },
  deepl: {
    name: "DeepL", domain: "Language AI・翻訳・文章支援", officialUrl: "https://jobs.ashbyhq.com/DeepL",
    positive: ["日本でCorporateとEnterpriseのAEを配置し、翻訳だけでなくWrite・Voice・APIを企業workflowへ広げるsales motionが見える。", "日本企業の公開事例とenterprise向けsecurity・glossary・管理機能を持ち、言語業務の時間・品質・統制を同じ商談で扱える。"],
    negative: ["日本のquota達成率、平均ACV、昇進、離職、匿名reviewを十分な母数で確認できない。", "無料翻訳・汎用LLM・Microsoft／Googleとの競争に加え、言語pairや業務ごとの品質差を顧客環境で検証する必要がある。"],
    next: ["Language AI・Productivity SaaSのEnterprise AE", "AI Application・Developer PlatformのGTM", "Localization・Global Operationsの事業開発"],
  },
  elevenlabs: {
    name: "ElevenLabs", domain: "Voice AI・Conversational AI", officialUrl: "https://jobs.ashbyhq.com/elevenlabs",
    positive: ["日本でnew-logo AEとtechnical expansionを担うAccount Managerを同時に配置し、音声生成から本番Agent・API利用へ広げる体制が見える。", "国内content利用とvoice権利・consentの協業を公開し、品質・速度だけでなく安全性をEnterprise提案へ組み込める。"],
    negative: ["日本のARR、production顧客数、quota達成率、給与・OTE、昇進・離職は非公開。", "demo需要が本番利用へ移るにはlatency、誤応答、integration、権利、human handoffを越える必要があり、役割境界と支援体制の確認が必要。"],
    next: ["Voice・Conversational AIのEnterprise AE／AM", "AI Agent・Developer PlatformのGTM", "Contact Center AI・Media Technologyの事業開発"],
  },
  mirakl: {
    name: "Mirakl", domain: "Enterprise Marketplace・Commerce Platform", officialUrl: "https://job-boards.greenhouse.io/japan",
    positive: ["日本でSenior AEとSolution Consultantを配置し、経営層へのmarketplace P&L提案からarchitecture・launchまでをつなぐ体制が見える。", "国内大手の公開事例とglobal ARR・GMVの成長を持ち、品揃え、在庫、seller、物流、広告を事業modelとして提案できる。"],
    negative: ["日本のARR、live marketplace数、GMV、quota達成率、給与・OTE、昇進・離職は非公開。", "契約後もseller獲得、catalog、物流、payment、governanceが必要で、顧客の専任体制とdelivery capacityが成果を制約しうる。"],
    next: ["Commerce SaaSのStrategic AE／Sales Leadership", "Marketplace・Platform事業開発", "Commerce Transformation・Solution Consulting"],
  },
  "new-relic": {
    name: "New Relic", domain: "Observability・DevOps・Cloud Operations", officialUrl: "https://newrelic.com/about/careers",
    positive: ["日本のEnterprise salesとSDR採用、東京regionへの投資から、開発・運用dataを国内Enterpriseへ広げるGTM機会が見える。", "国内のEC・media等の公開事例を持ち、MTTR、digital experience、developer productivity、cloud costをbusiness caseへつなげられる。"],
    negative: ["非公開化後の最新売上・利益、日本ARR、quota達成率、給与・OTE、昇進・離職は確認できない。", "Datadog、Dynatrace、Splunk、cloud-nativeとの競争とtelemetry costの管理が商談を難しくし、旧求人・第三者給与情報を現行条件へ転用できない。"],
    next: ["Observability・Cloud InfrastructureのEnterprise AE", "DevOps・SRE PlatformのGTM", "Sales Development・Technical Sales Leadership"],
  },
  notion: {
    name: "Notion", domain: "AI Workspace・Knowledge・Collaboration", officialUrl: "https://www.notion.com/careers",
    positive: ["日本でBDRとCommercial Sales Managerを配置し、強いPLG利用を企業workflow・AI・全社標準へ変えるupmarket機会が見える。", "トヨタ、ユーザベース、JR西日本の公開事例と日本data residencyを持ち、検索・承認・onboarding・AI contextを一つの提案へまとめられる。"],
    negative: ["日本のARR、有料顧客数、quota達成率、給与・OTE、昇進・離職は非公開。", "Microsoft、Google、Atlassian、Glean等との重複に加え、既存のfree利用がsecurity review・migration・全社定着を越えるかを検証する必要がある。"],
    next: ["AI Workspace・Collaboration SaaSのAE／Sales Leadership", "PLG・Product-led Enterprise GTM", "Knowledge Management・AI Transformation"],
  },
  verkada: {
    name: "Verkada", domain: "Physical Security・IoT・Cloud", officialUrl: "https://www.verkada.com/jp/careers/",
    positive: ["現行求人はdirect AE、Enterprise AE、Channelを並行募集し、日本で直販とpartner deliveryの両方を作る投資を示す。", "cloud software、camera・sensor等のdevice、現地導入を一体で扱うため、securityとbusiness operationを横断する経験を得られる可能性がある。"],
    negative: ["日本営業だけのquota達成率、昇進、離職、匿名reviewを十分な母数で確認できない。", "出社・出張・site対応の負荷、hardware supply、partner施工、privacy reviewがsales cycleへ与える影響は配属先で確認が必要。"],
    next: ["Physical・Cyber SecurityのEnterprise AE／Sales Leadership", "IoT・Cloud NetworkingのGTM", "Channel・Integrator Ecosystem Leadership"],
  },
  walkme: {
    name: "WalkMe", domain: "Digital Adoption・Change Management", officialUrl: "https://jobs.lever.co/walkme?location=Tokyo",
    positive: ["現行の日本求人はCS、Professional Services、Solution、Alliance、Partnerを配置し、大規模system投資の定着をecosystemで支える構造を示す。", "複数applicationの利用dataと業務完了を結ぶため、software salesにchange managementとvalue engineeringを加えられる可能性がある。"],
    negative: ["SAP傘下での日本組織、territory、製品統合、quota creditが今後も変わる可能性があり、公開情報だけで配属先の実態を確定できない。", "日本職種別の給与・OTE、達成率、昇進、離職、出社頻度は公開情報で確認できない。"],
    next: ["Digital Adoption・Employee ExperienceのGTM", "SAP・業務ApplicationのAlliance／Value Engineering", "Change Management・Transformation Consulting"],
  },
  celonis: {
    name: "Celonis", domain: "Process Intelligence・Enterprise Transformation", officialUrl: "https://careers.celonis.com/join-us/offices/tokyo",
    positive: ["Enterprise accountとEcosystem leadershipを同時に採用し、直販と国内SIerによるprocess transformationの両方を重視している。", "業務dataからvalueを発見し実行へつなぐため、C-level business case、process、data、partner deliveryを横断する経験を得られる可能性がある。"],
    negative: ["日本営業だけのquota達成率、昇進、離職、平均在籍、配属先managementを判断できる十分な公開集計はない。", "category education、data接続、業務owner合意、partner deliveryが必要で、PoCから本番・拡張への転換負荷を面接で確認する必要がある。"],
    next: ["Process Mining・AutomationのEnterprise AE／Sales Leadership", "Value Engineering・Transformation Consulting", "SIer・Technology Ecosystem Leadership"],
  },
  confluent: {
    name: "Confluent", domain: "Data Streaming・Cloud Data Infrastructure", officialUrl: "https://careers.confluent.io/jobs",
    positive: ["data in motionをapplication、analytics、AIへつなぐ製品は、developer・data・platform・business buyerを横断する技術営業の学習機会になり得る。", "ただし現行日本求人は公式Careerで再現確認できず、特定roleの機会としては断定できない。"],
    negative: ["2026年8月17日時点でJapan filter・job detailを再現確認できず、過去のDigital Native・MSP/ISV求人は現行扱いにできない。", "買収後の組織・製品・territory・報酬制度も未確認で、日本のquota達成率、昇進、離職、給与・OTEの公開根拠はない。"],
    next: ["Data・Cloud InfrastructureのEnterprise AE", "Kafka・Developer PlatformのGTM", "MSP・ISV・Cloud Ecosystem Leadership"],
  },
  dataiku: {
    name: "Dataiku", domain: "Enterprise AI・Data Science Platform", officialUrl: "https://www.dataiku.com/company/join-us/",
    positive: ["日本のEnterprise AEをFSIとRetail/Telcoに分け、業界課題・governance・C-level valueを重視する専門coverageが見える。", "data preparationからAI agent、governance、business applicationまでを扱い、technical PoCを経営成果と本番運用へつなぐ経験を得られる可能性がある。"],
    negative: ["日本のquota達成率、territory quality、昇進、離職、配属先managementを判断できる十分な公開集計はない。", "AI platform競争、既存cloud・data stackとの重複、PoC停滞を越えるには業界data・governance・delivery体制の検証が必要。"],
    next: ["AI・Data PlatformのStrategic AE／Sales Leadership", "Industry GTM・AI Transformation", "Data Science・AI GovernanceのValue Consulting"],
  },
  glean: {
    name: "Glean", domain: "Enterprise AI・Enterprise Search", officialUrl: "https://www.glean.com/careers",
    positive: ["公式求人は日本在住remote、AI-first mindset、ROI付きPoC、greenfield territoryを明記する。", "ARR 3億ドル超と国内大企業の導入事例から、categoryの成長と日本投資を確認できる。"],
    negative: ["日本営業だけの信頼できる匿名review集計、昇進、離職、quota達成率は確認できない。", "日本法人・office・人数・売上は非公開で、globalの週4 office方針と日本remoteの運用差も確認が必要。"],
    next: ["Enterprise AI・SearchのStrategic AE", "AI Platform・Data・SecurityのGTM", "Japan GTM・Partner・Sales Leadership"],
  },
  hubspot: {
    name: "HubSpot", domain: "CRM・Customer Platform・AI", officialUrl: "https://www.hubspot.com/careers/jobs/all", communityUrl: "https://www.repvue.com/companies/Hubspot", communityLabel: "RepVue HubSpot",
    positive: ["HEART、柔軟な勤務、透明性を公式に掲げ、SMBからCorporateまでのsegmentと隣接GTM職を公開している。", "国内顧客事例と日本法人の拡大から、CRM・AIを中小・中堅企業へ広げる経験を得られる可能性がある。"],
    negative: ["グローバル匿名集計のquota評価には異議もあり、日本の対象segmentへ一般化できない。", "全社の売上成長鈍化とAI収益化、日本のsegment別quota・達成率・昇進実績を面接で分けて確認する必要がある。"],
    next: ["CRM・MarTech・CXのAE／Sales Leadership", "RevOps・Customer PlatformのGTM", "SMB・Mid-MarketのSales Enablement・Management"],
  },
  qualtrics: {
    name: "Qualtrics", domain: "Experience Management・CX・EX", officialUrl: "https://www.qualtrics.com/careers/us/en/japan",
    positive: ["TACOS、柔軟なschedule、学習・wellbeing支援を公式Japan Careerで説明する。", "国内大手のCX・EX事例と日本投資方針から、experience dataを経営actionへ変える専門性が得られる可能性がある。"],
    negative: ["2026年8月17日時点で日本の現行求人を確認できず、終了求人の条件を現在へ転用できない。", "非公開化後の財務、買収統合、新CEO体制、日本の昇進・離職は非公開。"],
    next: ["CX・EX・Research SaaSのEnterprise GTM", "MarTech・HR TechのConsulting／Success", "Experience Strategy・People Analytics"],
  },
  speak: {
    name: "Speak", domain: "AI EdTech・Corporate Learning", officialUrl: "https://jobs.ashbyhq.com/speak/",
    positive: ["東京求人はhybridとglobal collaborationを明記し、小規模teamでB2Bの獲得・定着・marketingを作る機会がある。", "consumerで磨いたvoice-first体験と国内先行導入を、法人の利用data・業務scenarioへ広げる経験を得られる可能性がある。"],
    negative: ["日本営業のquota・達成率・昇進・離職・給与を判断できる公開集計はない。", "B2B ARRの基準日・範囲、日本の定量成果、consumer/B2Bの優先順位は非公開。"],
    next: ["HR Tech・EdTechのEnterprise AE／CS", "AI ApplicationのJapan GTM", "Learning・People Developmentの事業開発"],
  },
  stripe: {
    name: "Stripe", domain: "Payments・Financial Infrastructure", officialUrl: "https://stripe.com/careers/search",
    positive: ["Users first、speed and craft、evidence、ownershipを公式Careerで説明する。", "大規模なglobal利用と日本の定量事例、Payments以外の製品拡張から、事業・技術・財務を横断する経験を得られる可能性がある。"],
    negative: ["Tokyo営業のquota、達成率、担当社数、昇進・離職を示す信頼できる公開集計はない。", "TPV成長は売上・利益額を示さず、月50%以上の対面勤務と高い速度・精度の実態は配属先で確認が必要。"],
    next: ["Payments・FinTechのEnterprise AE／Sales Leadership", "API Platform・Commerce InfrastructureのGTM", "Product・Revenue・Platform Partnerships"],
  },
  anaplan: {
    name: "Anaplan", domain: "コネクテッドプランニング・経営管理", officialUrl: "https://www.anaplan.com/careers/", communityUrl: "https://www.g2.com/sellers/anaplan", communityLabel: "G2 Anaplan製品レビュー",
    positive: ["顧客事例では、財務・供給・人員など複数部門の計画をつなぎ、意思決定時間を短縮する価値が確認できる。", "公式CareerはOne Connected Team、学習、柔軟性を掲げ、部門・地域を越えた協働を重視する。"],
    negative: ["製品レビューには、導入・モデル構築・学習の複雑さと専門人材への依存を指摘する投稿がある。", "非公開化後の日本営業組織について、quota達成率、昇進、離職、配属先マネジメントを判断できる公開集計はない。"],
    next: ["EPM・FP&A・ERPのEnterprise営業／Solution Consulting", "サプライチェーン・人員計画の業務変革責任者", "CFO Advisory・経営管理コンサルティング"],
  },
  braze: {
    name: "Braze", domain: "顧客エンゲージメント・MarTech", officialUrl: "https://www.braze.com/company/careers", communityUrl: "https://www.repvue.com/companies/Braze", communityLabel: "RepVue Braze営業レビュー",
    positive: ["国内公式事例では、リアルタイム施策、運用生産性、購入・継続指標の改善例が確認でき、提案できる事業成果の幅が広い。", "売上、RPO、顧客数が成長し、日本でも複数職種採用と国内データ基盤への投資を継続している。"],
    negative: ["グローバル匿名集計ではquota・territory・managementへの評価が時期やチームで分かれ、日本営業だけの十分な母数はない。", "成長が続く一方でGAAP営業損失、粗利率低下、内部統制の重要な不備が開示されており、成長と効率の両方を求められる可能性がある。"],
    next: ["CRM・CDP・MarTechのEnterprise AE／Sales Leadership", "Commerce・Product Analytics・Customer DataのGTM", "Lifecycle／Growth領域の事業開発・コンサルティング"],
  },
  "channel-talk": {
    name: "Channel Talk", domain: "AI Customer Experience・CRM", officialUrl: "https://channel.io/jp/team",
    positive: ["公式求人・カルチャー記事はCustomer Driven、Think Fundamental、Small Talk Big Resultsを掲げ、全社員が顧客と直接対話する姿勢を示す。", "国内事例では問い合わせ削減、応答時間、自動解決、購入導線など複数の顧客成果が公開されている。"],
    negative: ["東京の職種はHybridとOn-siteが混在し、働き方・負荷・柔軟性を全社一律には判断できない。", "日本営業組織の匿名レビューを十分な母数で確認できず、評価、昇進、離職、マネジメントの実態は非公開。"],
    next: ["AI CX・CRM・Contact Center SaaSのAE／Sales Leadership", "Partner・RevOps・Customer Success leadership", "EC・D2CのCRM／Retention事業責任者"],
  },
  coupa: {
    name: "Coupa", domain: "調達・支出管理・サプライチェーン", officialUrl: "https://careers.coupa.com/en/life-at-coupa/", communityUrl: "https://www.openwork.jp/company.php?m_id=a0C1000001SPQ9u", communityLabel: "OpenWork Coupa Software",
    positive: ["公式CultureはOwn Our Results、Build Tomorrow Togetherなど、成果責任と協働の両立を掲げる。", "国内大手の調達改革事例と、直販・Partner・Servicesを横断する採用から、CPO・CFOへ大規模変革を提案できる環境が見える。"],
    negative: ["OpenWorkの公開母数は少なく、日本営業だけの評判や配属先差を一般化できない。", "PE傘下で非公開化後の成長・収益性・quota達成率・昇進分布が非公開で、投資余力と効率圧力のバランスは面接確認が必要。"],
    next: ["Procurement・ERP・CFO SaaSのEnterprise AE／Sales Leadership", "Supply Chain・Supplier RiskのGTM", "調達DX・CFO Advisory・業務変革コンサルティング"],
  },
  cursor: {
    name: "Cursor", domain: "AI Developer Platform・Developer Productivity", officialUrl: "https://cursor.com/ja/careers",
    positive: ["公式Careerはsmall、talent-dense、flat、truth-seekingを掲げ、製品・顧客へ近い高い自律性を示す。", "Money Forward、NVIDIA、Stripeの公式事例から、大規模な開発組織でAI利用を定着させる経験を得られる可能性がある。"],
    negative: ["日本の勤務形態、出社日数、組織人数、昇進、離職、managementを判断できる公開集計はない。", "製品と市場の変化が速く、初期Japan teamでは役割境界、支援人数、優先順位が短期間で変わる可能性を面接で確認する必要がある。"],
    next: ["AI・Developer ToolsのStrategic AE／Solutions Leadership", "Developer Platform・Cloud・SecurityのGTM", "Japan Country Lead・Partner Ecosystem・AI Transformation"],
  },
};

function roleFamily(job: JobLike) {
  const value = `${job.title} ${job.segment}`.toLowerCase();
  if (/(marketing|demand generation|field marketing)/.test(value)) return "marketing";
  if (/(sales strategy|sales operations|revenue operations|revops)/.test(value)) return "operations";
  if (/(customer success|customer experience|account management)/.test(value)) return "customer";
  if (/(professional services|project manager|implementation|delivery)/.test(value)) return "delivery";
  if (/(director|vice president|manager|leader|head)/.test(value)) return "leadership";
  if (/(partner|alliance|channel)/.test(value)) return "partner";
  if (/(solution|engineer|architect|technical|data scientist|consult)/.test(value)) return "technical";
  if (/(development representative|\bsdr\b|\bbdr\b|inside sales)/.test(value)) return "development";
  return "seller";
}

function roleSkills(family: string, domain: string) {
  if (family === "marketing") return [
    { title: "Category demand creation", detail: `${domain}の外部変化と顧客課題をmessage・content・eventへ変え、qualified pipelineまで追跡する。` },
    { title: "Salesとのrevenue連携", detail: "lead数で終わらず、ICP、account、stage、conversion、sourced／influenced pipelineをSalesと共通管理する。" },
    { title: "市場学習の仕組み化", detail: "campaign・event・content別の反応とwin/lossを分析し、日本のpositioningとGTMへ反映する。" },
  ];
  if (family === "operations") return [
    { title: "GTM operating model", detail: `${domain}のterritory、capacity、pipeline、forecast、processをdataで設計し、意思決定速度を高める。` },
    { title: "Revenue analytics", detail: "activityでなくconversion、cycle、coverage、attainment、unit economicsを一貫した定義で可視化する。" },
    { title: "Cross-functional execution", detail: "Sales、Marketing、Finance、Product、Partnerの責任とcadenceを揃え、戦略を現場の運用へ落とす。" },
  ];
  if (family === "customer") return [
    { title: "Value realization", detail: `${domain}の利用を顧客KPIへ結び、導入後の成果、risk、次の改善をQBRで合意する。` },
    { title: "Renewal・expansion設計", detail: "health、stakeholder、adoption、outcomeを先行指標に、更新riskと拡張機会を再現可能に管理する。" },
    { title: "顧客組織のchange management", detail: "championだけに依存せず、executive sponsor、現場、IT、partnerと定着責任を分担する。" },
  ];
  if (family === "delivery") return [
    { title: "Outcome-led delivery", detail: `${domain}のscope、baseline、success criteria、timeline、riskを定め、導入を業務成果まで進める。` },
    { title: "Program・partner orchestration", detail: "顧客、社内専門家、SI partnerの責任・依存関係・escalationを管理し、複雑projectを完了する。" },
    { title: "再利用可能な実装標準", detail: "個社対応をtemplate、governance、enablementへ変え、品質とdelivery capacityをscaleさせる。" },
  ];
  if (family === "leadership") return [
    { title: "営業組織の再現性", detail: `個人受注でなく、${domain}のpipeline、forecast、採用、coaching、達成者比率を改善する。` },
    { title: "経営・地域間の資源配分", detail: "Japan、APAC、本社の意思決定をつなぎ、担当、価格、専門人材、partner投資を優先順位付けする。" },
    { title: "複雑案件のquality control", detail: "大型案件のqualification、business case、risk、commercial条件をレビューし、予測精度を高める。" },
  ];
  if (family === "partner") return [
    { title: "Ecosystem GTM", detail: `${domain}をpartnerのservice・solutionへ組み込み、共同account planとpipelineを作る。` },
    { title: "Partner economics", detail: "紹介件数だけでなく、sourced／influenced revenue、enablement、delivery capacity、marginを管理する。" },
    { title: "Directとのoperating model", detail: "案件登録、account ownership、credit、導入責任を明確にして競合を避ける。" },
  ];
  if (family === "technical") return [
    { title: "Technical value engineering", detail: `${domain}の評価条件を顧客環境で検証し、技術指標を購買判断へ翻訳する。` },
    { title: "PoCから本番への移行", detail: "成功基準、security、integration、change managementを設計し、demoで終わらせない。" },
    { title: "Product feedback", detail: "個社要件と再利用可能な製品改善を分け、Product・Engineeringへ根拠付きで返す。" },
  ];
  if (family === "development") return [
    { title: "仮説型prospecting", detail: `${domain}のbuyer、外部変化、既存systemを調べ、genericな接触でなくaccount固有の仮説を作る。` },
    { title: "Qualification", detail: "meeting数だけでなく、課題、economic buyer、時期、次の検証をAEへ渡す。" },
    { title: "Pipeline analytics", detail: "channel・segment・message別の転換率を測り、再現性あるpipeline作成へ改善する。" },
  ];
  return [
    { title: "Executive value selling", detail: `${domain}の機能を、売上、利益、生産性、risk、time-to-valueへ翻訳する。` },
    { title: "Multi-stakeholder deal", detail: "business owner、IT、security、finance、legal、procurementと社内専門家を同じ意思決定へまとめる。" },
    { title: "Territory creation", detail: "既存需要を待たず、ICP、account plan、partner、customer proofからnewとexpansionのpipelineを作る。" },
  ];
}

function normalizeJapanese(value: string) {
  return value
    .replaceAll("Tokyo, Hanzomon", "東京・半蔵門")
    .replaceAll("Tokyo Prefecture", "東京都")
    .replace(/^Tokyo$/, "東京")
    .replace(/^Japan$/, "日本");
}

export function strengthenRolloutBatchOneJob<T extends JobLike>(job: T): T {
  if (!batchSlugs.has(job.companySlug)) return job;
  const company = companyResearch[job.companySlug];
  const family = roleFamily(job);
  const skills = roleSkills(family, company.domain);
  const sourceList = [
    { label: `${company.name} 公式Career・会社情報`, url: company.officialUrl, detail: "価値観、組織、働き方、職務を確認。会社発信であり、配属先の体験を保証しない。" },
    { label: job.source.label, url: job.source.url, detail: "対象職種の責任、要件、勤務地、公開されている条件を確認。" },
  ];
  if (company.communityUrl && company.communityLabel) sourceList.push({ label: company.communityLabel, url: company.communityUrl, detail: "匿名・自己申告または製品利用者の公開集計。日本の対象職種へ一般化しない。" });
  const compensation = officialCompensation[job.id];
  const language = job.companySlug === "glean"
    ? "公式求人では明記なし"
    : job.companySlug === "channel-talk"
    ? "公式求人で必須言語の明記なし"
    : job.companySlug === "coupa" && ["coupa-account-director", "coupa-adr", "coupa-alliances-director"].includes(job.id)
      ? "公式求人で明記なし"
      : job.companySlug === "braze" && ["brz-sales-director-enterprise", "brz-ae-commercial", "brz-ae-enterprise"].includes(job.id)
        ? "公式求人で明記なし"
        : normalizeJapanese(job.language);
  return {
    ...job,
    location: normalizeJapanese(job.location),
    language,
    lastChecked: "2026-08-17",
    ...(compensation ? {
      compensationReality: compensation.headline,
      compensationResearch: {
        researchedAt: "2026-08-17",
        confidence: "高" as const,
        headline: compensation.headline,
        summary: compensation.summary,
        breakdown: compensation.breakdown,
        readerTake: "公開レンジだけで判断せず、quota、ramp、達成率、credit、accelerator、equityを同じoffer条件として確認する。",
        sources: [{ label: job.source.label, url: job.source.url, detail: "公式求人に掲載された日本向け報酬レンジを確認。" }],
      },
    } : {}),
    reputationResearch: {
      researchedAt: "2026-08-17",
      summary: `${company.name}の日本における対象職種だけを十分な件数で評価した公開レビューは確認できない。公式情報と確認できた外部集計を分け、肯定材料と注意材料を同じ粒度で整理した。`,
      positiveTopics: company.positive,
      negativeTopics: company.negative,
      caveat: "匿名・自己申告の投稿、会社発信、製品レビューは性質が異なり、配属先や個人の体験を確定しない。公開情報で確認できない評判は補完せず、面接で直属上司、評価、勤務、昇進の具体例を確認する。",
      sources: sourceList,
    },
    marketValueResearch: {
      headline: `${company.domain}の専門性を、再現可能な顧客・組織成果へ変えられるかが市場価値を決める`,
      summary: `【Genba仮説】${job.title}で得られる市場価値は社名や在籍だけでなく、${company.domain}の複雑な課題を定量化し、担当職種の成果を契約・導入・利用・顧客KPIで証明できたかで決まる。公開された転職者分布の十分な集計はないため、以下は職務構造からの仮説である。`,
      skills,
      nextRoles: company.next.map((title) => ({ title, detail: `この職種で${skills.map((skill) => skill.title).join("、")}を数字で証明できる場合の隣接候補。実際の転職実績を示すものではない。` })),
      marketBands: [
        { level: "同職種・同segment", range: "公開報酬レンジは確認不能", condition: "担当目標、達成率、案件・顧客成果を再現可能な形で説明できる。" },
        { level: "上位segment・Lead", range: "公開報酬レンジは確認不能", condition: "より大きい顧客・複雑性に加え、mentoringや標準化の実績がある。" },
        { level: "Manager・事業責任", range: "公開報酬レンジは確認不能", condition: "採用、予算、forecast、組織達成、partner・導入体制まで責任を広げている。" },
      ],
      proofPoints: ["個人またはチームの目標達成率と分母", "new・expansion・partner別のpipelineと受注成果", "顧客の導入前後で改善した業務・事業KPI", "sales cycle、forecast、PoC-to-production、renewal等の改善", "他の担当者・segment・地域へ勝ち方を再現した実績"],
      caveat: "日本固有の給与・OTE・昇進・転職者分布は公開情報で確認できないため補完していない。役割候補は求人要件と隣接市場からの【Genba仮説】で、実際の評価は担当規模、成果、英語、業界知識、採用市場で変わる。",
    },
  };
}
