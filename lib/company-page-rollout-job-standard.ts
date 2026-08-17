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

const batchSlugs = new Set(["planet", "replit", "rubrik", "saviynt", "scandit", "nexthink", "nice", "patch", "patsnap", "pendo", "anaplan", "braze", "channel-talk", "coupa", "cursor", "glean", "hubspot", "qualtrics", "speak", "stripe", "verkada", "walkme", "celonis", "confluent", "dataiku", "deepl", "elevenlabs", "mirakl", "new-relic", "notion", "okta", "pagerduty", "sonar", "zendesk", "zilliz", "aghanim", "airwallex", "amplitude", "anthropic", "asana", "cambly", "cato-networks", "censys", "cloudflare", "cognition", "cohere", "contentsquare", "datadog", "dbt-labs", "deel", "dialpad", "docusign", "dragos", "elastic", "extreme-networks", "figma", "fivetran", "grafana-labs", "gurobi", "hightouch", "ideals", "knowbe4", "lakera", "lighthouse", "mambu", "marqvision", "mendix", "miro", "netskope", "neural-concept"]);

for (const slug of ["schrodinger", "sensor-tower", "shopify", "sierra", "sysdig"]) batchSlugs.add(slug);
for (const slug of ["ubiquiti", "veeva", "wasabi", "workato", "zadara"]) batchSlugs.add(slug);
for (const slug of ["zscaler", "1password", "sixsense", "abnormal-ai", "addepar"]) batchSlugs.add(slug);
for (const slug of ["airtable", "apollo-io", "attio", "clay", "cribl"]) batchSlugs.add(slug);
for (const slug of ["fireblocks", "gong", "halcyon", "harvey", "intercom"]) batchSlugs.add(slug);

const officialCompensation: Record<string, {
  headline: string;
  summary: string;
  breakdown: Array<{ label: string; value: string; status: string; detail: string }>;
}> = {
  "grafana-labs-senior-solutions-engineer-japan-current": {
    headline: "公式求人にOTE年1,400万〜1,850万円を掲載",
    summary: "OTE rangeとRSUの存在は確認できるが、base・variable内訳、quota、ramp、達成率、RSU額は非公開。",
    breakdown: [{ label: "OTE", value: "1,400万〜1,850万円", status: "公式掲載", detail: "年額。base・variable内訳は非公開。" }],
  },
  "dragos-advisory-solutions-architect-japan-current": {
    headline: "公式求人にOTE最大3,000万円を掲載",
    summary: "OTE上限は確認できるが、base・variableの内訳、quota、equity、ramp、達成率は公開されていない。",
    breakdown: [{ label: "OTE", value: "最大3,000万円", status: "公式掲載", detail: "base・variable内訳は非公開。" }],
  },
  "dragos-senior-enterprise-account-executive-japan-current": {
    headline: "公式求人にOTE最大3,184万円を掲載",
    summary: "求人内でSalaryとOTEの表記が混在するため固定給額とは解釈しない。base・variable、quota、equity、達成率は非公開。",
    breakdown: [{ label: "OTE", value: "最大3,184万円", status: "公式掲載", detail: "固定給額ではなくOTE上限として扱う。" }],
  },
  "extreme-networks-senior-systems-engineer-tokyo-current": {
    headline: "公式求人にOTE年1,600万〜1,900万円、70:30を掲載",
    summary: "OTEとpay mixは確認できるが、quota、equity、bonus、ramp、達成率は非公開。",
    breakdown: [{ label: "OTE", value: "1,600万〜1,900万円", status: "公式掲載", detail: "年額。資格・経験で変動。" }, { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "base 70%、variable 30%。" }],
  },
  "extreme-networks-systems-engineer-tokyo-current": {
    headline: "公式求人にOTE年1,000万〜1,400万円、70:30を掲載",
    summary: "OTEとpay mixは確認できるが、quota、equity、bonus、ramp、達成率は非公開。",
    breakdown: [{ label: "OTE", value: "1,000万〜1,400万円", status: "公式掲載", detail: "年額。資格・経験で変動。" }, { label: "Pay mix", value: "70 / 30", status: "公式掲載", detail: "base 70%、variable 30%。" }],
  },
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
  fireblocks: {
    name: "Fireblocks", domain: "Digital Asset Infrastructure・Payments・Tokenization", officialUrl: "https://www.fireblocks.com/careers/",
    positive: ["2024年に東京officeを開設し、現行Project Managerは日本語・英語で複雑な顧客導入を担う。", "2,400超の機関、10兆米ドル超のtransfer実績と、Mitsui Digital Commodities等の日本proofを持つ。"],
    negative: ["recognized revenue・ARR・profit・FCF、日本売上・報酬・担当社数は非公開。", "規制適合、custody責任、key・approval設計、incident response、partner deliveryを案件ごとに検証する必要がある。"],
    next: ["FinTech・Digital Asset Program Management", "Enterprise Cloud Professional Services", "Customer Delivery・Technical Account Leadership"],
  },
  gong: {
    name: "Gong", domain: "Revenue AI・Revenue Intelligence", officialUrl: "https://www.gong.io/careers",
    positive: ["ARR 5億米ドル超、5,000顧客超、複数product利用50%を背景にRevenue AIを拡張。", "Anthropic、Canva等のglobal定量caseを持つ。"],
    negative: ["現行Japan求人・法人・office・国内named case・日本語機能の完全性は確認不能。", "recording同意、AI accuracy、CRM data、adoption、suite競争、usage economicsを検証する必要がある。"],
    next: ["Revenue Intelligence Enterprise GTM", "Sales Enablement・RevOps Transformation", "AI-native Revenue Platform Leadership"],
  },
  halcyon: {
    name: "Halcyon", domain: "Anti-Ransomware・Cyber Resilience", officialUrl: "https://www.halcyon.ai/careers",
    positive: ["2026年にHalcyon Japan株式会社を設立し、日本語supportとpartner-led deliveryを開始。", "endpoint preventionに加えてkey capture・decryption・data exfiltration protectionを提供する。"],
    negative: ["現行Japan求人は0件で、旧Commercial AEは終了。売上・ARR・profit・FCF、日本顧客の定量ROIは非公開。", "vendorのzero-disruption claim、agent coexistence、false positive、response SLA、warranty条件を検証する必要がある。"],
    next: ["Ransomware Resilience GTM", "Endpoint・Cyber Recovery Sales", "Japan Security Partner Leadership"],
  },
  harvey: {
    name: "Harvey", domain: "Legal AI・Professional Services AI", officialUrl: "https://www.harvey.ai/company/careers",
    positive: ["1,300超の組織・10万超のlawyers・60超の国へ拡大し、Mori Hamada & Matsumotoのfirmwide caseを持つ。", "Agents、Vault、Knowledge、Contract Intelligenceを同じlegal workflowに統合する。"],
    negative: ["現行Japan求人・法人・office・責任者、recognized revenue・total ARR・profit・FCFは確認不能。", "legal privilege、hallucination、source traceability、data residency、professional responsibilityを案件ごとに検証する必要がある。"],
    next: ["Legal AI Enterprise GTM", "Professional Services AI Transformation", "AI Governance・Knowledge Platform Leadership"],
  },
  intercom: {
    name: "Fin（旧Intercom）", domain: "AI Customer Service・Helpdesk", officialUrl: "https://www.intercom.com/careers",
    positive: ["Finは約1億米ドルのrecurring revenue、週約200万件の解決、7,000 teamsを発表。", "AI Agent、Helpdesk、Knowledge、Evals・Monitorsを一体運用する。"],
    negative: ["現行Japan求人・法人・office・国内named caseは確認不能。Salesforceによる約36億米ドルの買収契約は未完了。", "resolution定義、handoff、accuracy、pricing、data residency、acquisition後roadmapを検証する必要がある。"],
    next: ["AI Customer Service Enterprise GTM", "CX Automation・Support Operations", "Conversational AI Platform Leadership"],
  },
  cribl: {
    name: "Cribl", domain: "Telemetry Infrastructure・Security Data・Observability", officialUrl: "https://cribl.io/careers/",
    positive: ["Remote JapanでPartner Business Manager、Regional Sales Director、Enterprise Regional Sales Managerを同時採用し、日本GTMを0→1で構築する。", "ARR 3億米ドル超・1,400顧客超・Fortune 100の50%というglobal scaleを背景に、directとchannelの両方を作れる可能性がある。"],
    negative: ["日本法人・office・責任者・国内case・数値報酬・言語要件は確認不能。", "telemetry cost削減だけでなくdata loss、query、residency、partner delivery、既存SIEM・observabilityとの責任境界をPoCと面接で検証する必要がある。"],
    next: ["Telemetry・Observability Enterprise Sales", "Security Data Platform GTM", "Japan Channel・Sales Leadership"],
  },
  zscaler: {
    name: "Zscaler", domain: "Zero Trust・SSE・AI Security", officialUrl: "https://job-boards.greenhouse.io/zscaler",
    positive: ["Sales、SE、Value、Renewal、Transformationの29対象求人を公式確認し、segment・specialist・lifecycleを日本で同時強化している。", "Q3 FY2026売上25%増、ARR25%増、ADK・NTTドコモ等の国内proofから大型platform transformationを経験できる可能性がある。"],
    negative: ["GAAP営業赤字が続き、日本売上・headcount・quota・達成率・数値報酬は非公開。", "重複requisition、product credit、AI・data securityの実績、migration、partner delivery、3年TCOを案件・面接で検証する必要がある。"],
    next: ["Zero Trust・SASE Enterprise GTM", "Cybersecurity Solutions・Value Engineering", "Data・AI Security Sales Leadership"],
  },
  "abnormal-ai": {
    name: "Abnormal AI", domain: "Behavioral AI・Email・Identity Security", officialUrl: "https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003",
    positive: ["Japan founding AEとしてterritory、new ARR、new logo・expansion、CISO relationshipを0→1で作る。", "4,500 customers・Fortune 500の25%超とBehavioral AIのemail→identity・AI expansionを日本市場へ持ち込める可能性がある。"],
    negative: ["Japan法人・office・leader・国内case・数値報酬は非公開。求人は英語のみ明記し、日本語水準を補完できない。", "Microsoft coexistence、catch・false positive、API permission、autonomous action、local SE・CS・IRをPoVと面接で検証する必要がある。"],
    next: ["Email・Identity Security Enterprise Sales", "AI-native Cybersecurity Japan GTM", "CISO Platform Sales Leadership"],
  },
  ubiquiti: {
    name: "Ubiquiti", domain: "Enterprise Networking・Physical IT", officialUrl: "https://job-boards.greenhouse.io/ubiquiti",
    positive: ["AEと日本初のSolution Engineering leadを同時採用し、direct・channel・technical validationをlocalで作る段階。", "高いGAAP operating incomeとnetwork・camera・access・voice・storageのwide portfolioを持つ。"],
    negative: ["日本法人・office・責任者・国内named deployment・数値報酬は未確認。", "inventory、warranty、support SLA、founder dependency、partner deliveryを実案件で検証する必要がある。"],
    next: ["Enterprise Networking Sales・SE", "Physical Security・IoT GTM", "Japan Channel・Solution Leadership"],
  },
  veeva: {
    name: "Veeva Systems", domain: "Life Sciences Industry Cloud", officialUrl: "https://jobs.lever.co/veeva",
    positive: ["日本でSales、Consulting、CS、Services、Presalesの対象32求人を公式掲載。", "Q1 FY2027は売上16%増、GAAP operating margin 30.9%で成長と利益を両立。"],
    negative: ["日本の報酬・quota・attainment・採用人数・重複requisitionの扱いは非公開。", "職種は27 On-site・5 Remoteで、travel、規制domain、validation責任を個別確認する必要がある。"],
    next: ["Life Sciences Enterprise Sales", "Clinical・Quality・Safety Consulting", "Industry Cloud Customer・Services Leadership"],
  },
  wasabi: {
    name: "Wasabi Technologies", domain: "Cloud Storage・Data Protection", officialUrl: "https://job-boards.greenhouse.io/wasabi/jobs/5382765008",
    positive: ["日本Inside SalesがSMB・Mid-MarketのcloseとChannel handoffを持つ明確なrole設計。", "東芝・Sumallyの国内定量caseとTokyo・Osaka storage regionを持つ。"],
    negative: ["recognized revenue・profit・ARR、日本責任者のcurrent tenure、workstyle・数値報酬は非公開。", "minimum retention、support、restore、migration・exit、acquisition integrationをTCOで検証する必要がある。"],
    next: ["Cloud Infrastructure Inside Sales", "Storage・Backup Enterprise Sales", "Channel・FinOps GTM"],
  },
  workato: {
    name: "Workato", domain: "Enterprise Automation・Integration・AI Orchestration", officialUrl: "https://www.workato.com/careers?gh_jid=8627710002#open-roles",
    positive: ["Partner Salesとしてco-market・co-sell・co-deliveryと新規partner開拓を一体で担う。", "NAVITIME・Coincheckの国内定量caseとJapan data center・Enterprise MCPを持つ。"],
    negative: ["recognized revenue・profit・current ARR、日本責任者・数値報酬・個別出社日数は非公開。", "task・AI usage cost、connector保守、identity・audit、partner creditを実案件で検証する必要がある。"],
    next: ["iPaaS・Automation Partner Sales", "AI Orchestration GTM", "Japan Ecosystem・Alliance Leadership"],
  },
  zadara: {
    name: "Zadara", domain: "Sovereign Cloud・Edge Infrastructure", officialUrl: "https://jobs.lever.co/Zadara/f913dc3e-76dd-45eb-89a8-bda865b10ea6",
    positive: ["東京RemoteのSenior TAMとしてarchitecture、incident、DR、success plan、MSP enablementをend-to-endで持つ。", "Rakuten Mobile等の日本企業導入と500超edge locationを確認。"],
    negative: ["売上・ARR・profit、日本法人・office・leader・数値報酬・国内定量ROIは非公開。", "sovereigntyの実体、SLA、support、capacity、migration・exit、renewal ownershipを契約・面接で確認する必要がある。"],
    next: ["Sovereign Cloud Technical Account Management", "Cloud・Storage Customer Success", "MSP・Edge Solution Leadership"],
  },
  schrodinger: {
    name: "Schrödinger", domain: "Computational Chemistry・Materials R&D", officialUrl: "https://www.schrodinger.com/company/careers/",
    positive: ["physics-based simulationとAIを創薬・材料R&Dの実験判断へ接続できる。", "2002年から日本法人を持ち、SalesとApplicationsの2職種を公式募集。"],
    negative: ["Q1 FY2026は純損失6,000万米ドル。日本売上・quota・報酬は非公開。", "研究成果はuse caseとdata qualityに依存し、顧客環境で実験validationが必要。"],
    next: ["Scientific Enterprise Sales", "Computational R&D Solutions", "Materials・Life Science GTM Leadership"],
  },
  "sensor-tower": {
    name: "Sensor Tower", domain: "Digital Market Intelligence", officialUrl: "https://jobs.ashbyhq.com/sensor-tower",
    positive: ["2,500社超が利用するmobile・web・広告・gaming intelligenceをJapan・APACへ展開できる。", "東京でPartner、AM、Leadership、PMMの複数職種を採用。"],
    negative: ["売上・利益・Japan scale・数値報酬は非公開。", "推計dataのcoverage・method・privacy・accuracyをcustomer dataで検証する必要がある。"],
    next: ["Market Intelligence Sales・CS", "Data・AdTech Partnerships", "APAC Product Marketing・GTM Leadership"],
  },
  shopify: {
    name: "Shopify", domain: "Commerce Platform・Product Ecosystem", officialUrl: "https://www.shopify.com/careers",
    positive: ["世界175カ国超のcommerce platformで日本のproduct ecosystemを作る役割。", "FY2025は売上30%増、FCF margin 17%と成長・cash generationを両立。"],
    negative: ["Japan revenue・headcount・partner KPI・報酬は非公開。", "platform・app dependency、migration、partner conflict、local fitを実案件で検証する必要がある。"],
    next: ["Commerce Product Partnerships", "Platform Ecosystem GTM", "Japan・APAC Business Development Leadership"],
  },
  sierra: {
    name: "Sierra", domain: "Customer Experience AI Agents", officialUrl: "https://jobs.ashbyhq.com/Sierra",
    positive: ["東京office、Opera Tech買収、SoftBank独占販売partnerとLINEMO定量成果を確認。", "ARR 1.5億米ドル超の急成長categoryでAI agentのproduction outcomeへ携われる可能性。"],
    negative: ["現行対象求人0。recognized revenue・profit・Japan scale・報酬は非公開。", "hallucination、authorization、rollback、data・model governance、outcome attributionを厳密に検証する必要がある。"],
    next: ["AI Agent Enterprise GTM", "Customer Experience AI Strategy", "Japan AI Business Leadership"],
  },
  sysdig: {
    name: "Sysdig", domain: "Cloud Runtime Security・CNAPP", officialUrl: "https://jobs.lever.co/sysdig",
    positive: ["Falco・runtime insightを軸にCISO、Platform、SOC、Developerを横断できる。", "NTTドコモ・ログラスの国内cloud-native事例がある。"],
    negative: ["現行日本求人0。recognized revenue・profit・Japan scale・報酬は非公開。", "競争の強いCNAPP市場でagent overhead、noise、pricing、tool consolidationを実測する必要がある。"],
    next: ["Cloud Security Enterprise Sales", "CNAPP Solutions・Customer Success", "Japan Cybersecurity GTM Leadership"],
  },
  planet: {
    name: "Planet", domain: "Earth Observation・Defence Intelligence", officialUrl: "https://job-boards.greenhouse.io/planetlabs/jobs/7564777",
    positive: ["Japan RemoteのD&I AEとして政府・防衛のpipeline、procurement、partnerを持ち、persistent monitoringを日本の安全保障workflowへ展開できる。", "FY2026売上成長、国内防衛・UMITRON事例、六本木office・Country Managerを公式に確認できる。"],
    negative: ["GAAP赤字が続き、Q1 FY2027はadjusted EBITDA・FCFもnegative。Japan売上・headcount・数値報酬は非公開。", "光学の雲・夜間制約、resolution、data sovereignty、政府調達周期、SAR・高解像度assetとの補完を実案件で検証する必要がある。"],
    next: ["Geospatial・Defence Intelligence Enterprise Sales", "Government・Public Sector GTM", "Earth Observation・Data Platform Leadership"],
  },
  replit: {
    name: "Replit", domain: "AI Software Creation・Agentic Development", officialUrl: "https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44",
    positive: ["Japan Founding AEとしてnet-new、hackathon、adoption・expansion、local office前のmarket creationを0→1で担う。", "Agent 4とEnterprise governanceを、非技術builderとIT・securityへ同時に提案できる成長category。"],
    negative: ["recognized revenue、profit・FCF、日本法人・office・leader・国内定量成果・数値報酬は非公開。", "高強度・曖昧なscopeを公式に明記し、generated codeの品質・security・ownership・handoff・usage costをpilotで検証する必要がある。"],
    next: ["AI Developer Tools Enterprise Sales", "Agentic App Platform Japan GTM", "Business Transformation・AI Adoption Leadership"],
  },
  rubrik: {
    name: "Rubrik", domain: "Data Security・Cyber Resilience", officialUrl: "https://boards-api.greenhouse.io/v1/boards/rubrik/jobs?content=true",
    positive: ["東京でMid Market AEとCustomer Experience Managerを採用し、new・expandとlifecycle・escalationをlocalでつなぐ。", "NTT DATA等の国内大規模・定量proof、100% channel、ARR成長とpositive FCFを確認できる。"],
    negative: ["Q1 FY2027はGAAP operating・net loss。Japan売上・ARR・headcount・数値報酬・勤務形態は非公開。", "NEC・LIXILの復旧半減は期待値で、recovery drill、identity・SaaS coverage、partner delivery、TCOを実測する必要がある。"],
    next: ["Cyber Resilience Enterprise Sales", "Data Security Customer Experience", "Channel Security GTM・Sales Leadership"],
  },
  saviynt: {
    name: "Saviynt", domain: "Identity Security・IGA・PAM", officialUrl: "https://jobs.lever.co/saviynt?location=Japan",
    positive: ["JapanでStrategic AE、Staff SE、Professional Services、Trainingを同時採用し、technical winからdelivery・enablementまでlocal coverageを作る。", "ARR 3億米ドル超、LIXIL 70k+ identities、ZumaのAI・NHI governanceからidentity securityの専門性を広げられる。"],
    negative: ["recognized revenue・current profit・FCF、Japan売上・headcount・数値報酬は非公開。Ashisutoの出資手続きも2026年6月時点で未完了。", "Zumaの実績、local delivery SLA、data residency、legacy migration、SailPoint・Entra・CyberArkとのTCOを実案件で検証する必要がある。"],
    next: ["Identity Security Enterprise Sales", "IGA・PAM Solutions Engineering", "Identity Professional Services・Enablement Leadership"],
  },
  scandit: {
    name: "Scandit", domain: "Smart Data Capture・Retail・Logistics Operations", officialUrl: "https://boards-api.greenhouse.io/v1/boards/scandit/jobs?content=true",
    positive: ["U.S.M.H、AEON、Yamato、York Benimaru等の国内大規模・定量caseと、2020年日本法人・Country Managerを確認できる。", "capture SDKからStore・Shelf Intelligenceへ拡張し、device、software、operationを横断する専門性がある。"],
    negative: ["2026年8月17日時点で現行日本求人0。旧AE IDは404で終了条件を現在へ転用できない。", "売上・ARR絶対額・profit・FCF・Japan売上・headcountは非公開。公式住所とscale指標にもページ間不一致がある。"],
    next: ["Retail・Logistics Technology GTM", "Computer Vision・Edge AI Enterprise Sales", "Store Operations・Supply Chain Solutions Leadership"],
  },
  nexthink: {
    name: "Nexthink", domain: "Digital Employee Experience・IT Operations", officialUrl: "https://api.smartrecruiters.com/v1/companies/Nexthink/postings?limit=100",
    positive: ["日本法人・日本語製品の開始後、Solution ConsultantとCustomer Success Managerを採用し、technical winからvalue realization・renewalまでlocal体制を作る。", "1,500+ enterprise customers・25m employeesのglobal scaleを背景に、CIOへDEX、Service Desk、SaaS・AI adoptionを横断して提案できる。"],
    negative: ["最新売上・ARR・profit・FCF、日本売上・顧客数・headcount・給与・quotaは非公開。国内実名定量caseも確認できない。", "endpoint・employee dataのprivacy、PoV→production、remediation権限、Microsoft・ServiceNow・DEX専業とのTCOを顧客環境で検証する必要がある。"],
    next: ["DEX・Digital Workplace Customer Success", "IT Operations・EUC Solutions Consulting", "ServiceNow・Endpoint・SaaS Adoption GTM"],
  },
  nice: {
    name: "NiCE", domain: "CX AI・CCaaS・Financial Crime", officialUrl: "https://boards-api.greenhouse.io/v1/boards/nice/jobs?content=true",
    positive: ["日本でAE、AI Sales Director、Senior SE、Actimize BAを採用し、CXoneのnew business・technical winとAML deliveryをlocalで広げている。", "FY2025はGAAP営業利益・FCF黒字で、キューサイ等の国内enterprise migration proofを持つ。"],
    negative: ["Q1 2026は売上成長の一方でGAAP operating・net incomeが前年割れ。Japan売上・headcount・quota・数値報酬は非公開。", "CXoneとActimizeのbuyerを混同せず、日本語AI、integration、migration、partner quality、TCOをGenesys・Amazon等と実証比較する必要がある。"],
    next: ["CCaaS・CX AI Enterprise GTM", "Contact Center Solutions Engineering", "Financial Crime・AML Professional Services"],
  },
  patch: {
    name: "Patch", domain: "Climate Markets・Environmental Commodities", officialUrl: "https://jobs.ashbyhq.com/patch.io",
    positive: ["APAC初のAEとしてJapan重点のpipeline、lighthouse deal、playbookをAPAC GMと0→1で作るgreenfield role。", "carbonだけでなくrenewable energy・SAF等のstrategy、diligence、transaction、portfolio管理へ拡張し、Finance・Procurement・Legalを横断できる。"],
    negative: ["売上・ARR・profit・FCF、日本法人・office・顧客proof・給与・OTEは非公開。SF向け報酬を日本へ転用できない。", "instrument eligibility、project integrity、fee・markup、expert independence、delivery・replacement、claim liabilityを制度・顧客側auditで検証する必要がある。"],
    next: ["Climate Finance Enterprise Sales", "Environmental Markets・Energy Procurement GTM", "APAC Market Development・Sustainability Solutions"],
  },
  patsnap: {
    name: "Patsnap", domain: "Innovation Intelligence・Domain AI", officialUrl: "https://jobs.lever.co/patsnap?location=Tokyo",
    positive: ["東京でFDEとKAMを同時採用し、AI solutionのPoC・implementationからretention・expansionまで顧客journeyをつなぐ。", "2024年ARR 1億米ドルとCanon・Takasago等のadoptionがあり、R&D・IP・AIを横断する専門性を得られる。"],
    negative: ["current revenue・profit・FCF、日本法人設立・Country Manager・国内定量成果・給与・OTEは非公開。KAMはTokyo分類とSEA担当本文が不整合。", "AIのrecall・precision、citation、false negative、legal opinionとの境界、private data、3年TCOをgold setで検証する必要がある。"],
    next: ["IP・R&D Intelligence Enterprise GTM", "Forward Deployed AI Engineering", "Strategic Account・Customer Growth Leadership"],
  },
  pendo: {
    name: "Pendo", domain: "Software Experience Management・Product Analytics", officialUrl: "https://job-boards.greenhouse.io/pendo",
    communityUrl: "https://www.glassdoor.ca/Reviews/Pendo-Reviews-E1061465.htm", communityLabel: "Glassdoor global reviews",
    positive: ["日本法人、Country Manager、国内data center、Enterprise AE、SmartDrive・NEC等の定量caseを確認でき、Product・IT・CXを横断するbusiness caseを作れる。", "Analytics、Replay、Feedback、Guides、Agent Analyticsを一つのSXM platformで扱い、insightからactionまで販売できる。"],
    negative: ["GAAP revenue・profit・FCF、日本売上・headcount・quota・数値報酬は非公開。2026年に約10%のlayoff報道がある。", "suiteのmodule adoption、capture精度、privacy、pricing、Classic Feedback移行、Amplitude・WalkMe・FullStory等best-of-breedとのTCOを検証する必要がある。"],
    next: ["Product Analytics・SXM Enterprise GTM", "Digital Adoption・Employee Experience Sales", "Product-led Growth・Customer Experience Leadership"],
  },
  marqvision: {
    name: "MarqVision", domain: "Brand Protection・IP Intelligence", officialUrl: "https://job-boards.greenhouse.io/marqvision",
    positive: ["東京でSales、Brand Protection、Customer Successを同時採用し、new logoから執行・renewalまで日本の顧客journeyを作る段階。", "Panasonic、Nissan、SEGA、Mizunoの採用を公式求人で確認でき、AI・法務・ecommerceを横断する専門性を得られる。"],
    negative: ["売上・利益・FCF、日本法人登記、国内顧客別の定量成果、給与・OTE・勤務頻度は非公開。", "vendor測定のaccuracy・takedown speed・recovered revenueは、日本語dataでfalse positive、再出現、単独寄与を検証する必要がある。"],
    next: ["Brand Protection・Digital RiskのEnterprise GTM", "IP・Trust & Safety Operations", "Customer Success・LegalTech Leadership"],
  },
  mendix: {
    name: "Mendix", domain: "Enterprise Low-code・Agentic App Development", officialUrl: "https://jobs.lever.co/mendix?location=Tokyo",
    positive: ["東京でdirect sales、partner sales、presalesを同時募集し、enterprise pipeline、ecosystem、technical validationをlocalでつなぐ。", "花王・江崎グリコ等の国内定量事例があり、legacy modernization、内製化、AI governanceをbusiness outcomeへ翻訳できる。"],
    negative: ["Mendix単体のcurrent revenue・profit・FCF、日本法人設立・現Country Manager、給与・OTE・言語は非公開。", "OutSystems、Power Apps、Appian、custom developmentとのlicense・lock-in・performance・日本語skill・3年TCO比較が必要。"],
    next: ["Low-code・Application PlatformのEnterprise GTM", "AI・Automation Solution Consulting", "Partner Ecosystem・Digital Transformation Leadership"],
  },
  miro: {
    name: "Miro", domain: "AI Innovation Workspace・Visual Collaboration", officialUrl: "https://miro.com/careers/open-positions/?location=tokyo-jp",
    positive: ["東京でCommercial・Strategic Sales、BDR、SE、SA、TAMの8求人を持ち、new logoからworkflow設計・adoptionまでlocal teamを拡張している。", "日本法人、現代表、東京office、日本data residency、富士通等の国内利用例を一次情報で確認できる。"],
    negative: ["current revenue・ARR・profit・FCF、日本売上・headcount・quota・達成率・数値報酬は非公開。", "Microsoft・Figma・Atlassian等のbundleやpoint toolと、meeting・cycle time・rework・adoption・governanceの増分価値を比較する必要がある。"],
    next: ["Collaboration・Productivity Platform Sales", "Product・DX Workflow Solution Architecture", "Enterprise Customer Success・GTM Leadership"],
  },
  netskope: {
    name: "Netskope", domain: "SSE・SASE・Data・AI Security", officialUrl: "https://www.netskope.com/company/careers/open-positions/",
    positive: ["日本でSales、Channel、SE、SA、TAMの12求人を持ち、territory creationからarchitecture、partner delivery、adoptionまで厚いlocal GTMを構築している。", "上場後も売上・ARRが約30%成長し、PERSOL約3万人など国内enterprise deploymentを確認できる。"],
    negative: ["FY2026 GAAP営業marginは-92%、Q1 FY2027も赤字・FCF negative。日本売上・headcount・quota・達成率・workstyle・給与は非公開。", "inline decryption、latency、privacy、migration、single-vendor concentration、Zscaler・Palo Alto等とのTCOを実trafficで検証する必要がある。"],
    next: ["SASE・Cloud SecurityのEnterprise GTM", "Security Solutions Architecture・Engineering", "Channel・Customer Success・Regional Leadership"],
  },
  "neural-concept": {
    name: "Neural Concept", domain: "Engineering AI・CAE・Design Copilot", officialUrl: "https://jobs.ashbyhq.com/neuralconcept",
    positive: ["東京でSales、SE、TAM、Application Engineerを同時採用し、market creation、technical win、delivery、renewalを直接体制へ広げる段階。", "SUBARUの限定PoCで3時間から2分という国内proofがあり、AI、CAD・CAE、manufacturingを横断する希少性がある。"],
    negative: ["売上・ARR・profit・FCF、日本法人・office住所・責任者・給与・OTEは非公開。Japan SE求人には韓国語要件との重大な不整合がある。", "surrogate modelのaccuracy・OOD・IP・validation・final CAEとの責任分界を同一dataで競合・内製と比較する必要がある。"],
    next: ["Engineering AI・Simulation Software GTM", "CAE・Digital Engineering Solutions", "Technical Account・Application Engineering Leadership"],
  },
  dialpad: {
    name: "Dialpad", domain: "AI Communications・UCaaS・CCaaS", officialUrl: "https://job-boards.greenhouse.io/dialpad",
    positive: ["東京でMid-Market AEとSales Engineerを同時募集し、full-cycle saleとtechnical validationをlocalでつなぐ。", "SoftBank提携、国内3,000社、Proto・USENの導入例があり、日本語AIとUC・CC一体のbusiness caseを作れる。"],
    negative: ["監査済み売上・利益・FCF、日本売上・headcount・quota・達成率は非公開。", "録音・AI monitoringのprivacy、音声品質、番号移行、uptime、Teams・Zoom等bundleとのTCOを顧客環境で検証する必要がある。"],
    next: ["UCaaS・CCaaSのEnterprise／Mid-Market GTM", "Conversational AI・Revenue Intelligence Sales", "Customer Experience・Sales Engineering"],
  },
  docusign: {
    name: "Docusign", domain: "Agreement Management・eSignature・CLM", officialUrl: "https://careers.docusign.com/",
    positive: ["SMB・Enterprise AE、SAP・Salesforce Partner、Field Marketing、MDRの対象7求人を持ち、eSignatureからIAMへのcategory expansionを日本で進める。", "JAL、JERA、Olympus等の国内定量事例とGAAP・FCF黒字を持ち、Legal・Sales・Procurement・ITを横断できる。"],
    negative: ["日本の給与・OTE、quota、達成率、担当社数、IAM adoption、日本売上・headcountは非公開。", "basic e-signatureのbundle・低価格競争、CLM・AI・内製との比較で、migration、data governance、3年TCOを示す必要がある。"],
    next: ["LegalTech・CLMのEnterprise AE／Sales Leadership", "Workflow・Document・AI Platform GTM", "SAP・Salesforce Ecosystem Partnerships"],
  },
  dragos: {
    name: "Dragos", domain: "OT・ICS Cybersecurity", officialUrl: "https://job-boards.greenhouse.io/dragos",
    positive: ["Japan Country Manager、Enterprise AE、日本初のtechnical hireを配置し、Macnicaとsales・technical deliveryを同時に作る段階。", "OT practitioner由来のthreat intelligenceとIR知見を、工場・重要インフラの停止riskへ翻訳する希少な専門性を得られる。"],
    negative: ["単体売上・ARR・利益、日本法人・office・named customer・国内ROIは非公開。Accenture取引も確認日時点で未完了。", "passive coverage、air-gap、partner delivery、既存SOC、false positive、multi-site TCOをPoCで反証する必要がある。"],
    next: ["OT・IoT SecurityのEnterprise GTM", "Critical Infrastructure Cybersecurity", "Industrial Security Solutions Architecture・Country Build"],
  },
  elastic: {
    name: "Elastic", domain: "Search AI・Observability・Security", officialUrl: "https://jobs.elastic.co/",
    positive: ["Retail Sales 2求人とSolutions Architecture leadershipを採用し、search、observability、securityを日本のenterpriseへ広げる。", "FY2026は売上+17%、RPO+28%、positive FCFで、Nikkei・ぐるなび・リコーの国内scale proofを持つ。"],
    negative: ["FY2026はGAAP営業赤字で、2026年6月に約7% workforce削減。日本売上・人数・削減影響・quota・達成率は非公開。", "hyperscaler、open source、specialistとの競争とingest・storage・retention cost、migrationを同一workloadで比較する必要がある。"],
    next: ["Search・Data PlatformのEnterprise GTM", "Observability・Security Platform Sales", "Solutions Architecture・Technical Sales Leadership"],
  },
  "extreme-networks": {
    name: "Extreme Networks", domain: "Cloud Networking・Fabric・Network Security", officialUrl: "https://jobs.lever.co/extremenetworks?location=Tokyo%2C+Japan",
    positive: ["東京でSE 2、Services Sales、Premier Deliveryを採用し、technical winからmigration・lifecycle valueまでをlocalでつなぐ。", "SaaS ARR成長、国内multi-site事例、日本法人・partner ecosystemがあり、network、security、AI、servicesを横断できる。"],
    negative: ["FY2025はGAAP純損失で、FCFもquarterごとの変動がある。日本売上・ARR・headcount・quota・達成率は非公開。", "single-vendor simplicityはlock-inにもなり、Cisco・HPE-Juniper等とのinstalled-base競争、partner quality、rollback、5年TCOを検証する必要がある。"],
    next: ["Cloud Networking・SASEのEnterprise GTM", "Network Sales Engineering・Architecture", "Services・Channel Sales Leadership"],
  },
  cohere: {
    name: "Cohere", domain: "Enterprise AI・Private AI", officialUrl: "https://jobs.ashbyhq.com/cohere",
    positive: ["東京RemoteでAE、Partner Development、FDEを同時採用し、direct、ecosystem、private deploymentを日本で構築する。", "富士通とのTakaneは日本語enterprise AIとprivate deploymentのlocal proofになる。"],
    negative: ["監査済み売上・利益、日本法人・office・責任者・日本売上は非公開。ARRは二次報道。", "GPU・on-prem運用、data boundary、model quality、TCOを顧客環境で競合と比較する必要がある。"],
    next: ["Enterprise AIのStrategic Sales", "AI Infrastructure・Forward Deployed Engineering", "Cloud・SI Partner Development"],
  },
  contentsquare: {
    name: "Contentsquare", domain: "Digital Experience Analytics", officialUrl: "https://jobs.lever.co/contentsquare",
    positive: ["日本法人・東京office・Country Managerと複数の国内定量事例を確認できる。", "journey、session、product、error、VoCを横断し、CXを売上・support・engineering成果へ接続できる。"],
    negative: ["2026年8月17日時点で現行日本求人は0件。過去SDRの条件・team人数を現在へ転用できない。", "最新のexact revenue・ARR・利益・日本売上は非公開。customer outcomeはvendor-selected。"],
    next: ["Digital Analytics・CRO GTM", "Product Analytics・Customer Experience", "Digital Transformation・Value Consulting"],
  },
  datadog: {
    name: "Datadog", domain: "Observability・Cloud Security・FinOps", officialUrl: "https://careers.datadoghq.com/all-jobs/?search=&location=Tokyo",
    positive: ["東京の対象22求人はSales、SE、CS、Support、Partner、Public Sector、Country leadershipまで広く、日本の拡張範囲が大きい。", "売上成長、FCF、国内のTOPPAN・一休・東芝等の定量成果を確認できる。"],
    negative: ["FY2025はGAAP営業赤字で、SBCとnon-GAAP・FCFを分けて見る必要がある。", "日本のquota、達成率、給与・OTE、product credit、出社日数は非公開。data volumeとpricingの複雑性も選定risk。"],
    next: ["Observability・Cloud PlatformのEnterprise Sales", "Sales Engineering・Customer Success Leadership", "Cloud Security・FinOps GTM"],
  },
  "dbt-labs": {
    name: "dbt Labs", domain: "Analytics Engineering・Trusted Data", officialUrl: "https://www.getdbt.com/about-us/careers",
    positive: ["日本RemoteでPartner Sales、BDR、Customer Solutions、Sales Directorを同時採用し、pipelineからadoption・ecosystemまでを広げる。", "Fivetran統合でingestionからtransformation・lineage・semanticまでを一つのtrusted data storyにできる。"],
    negative: ["合併後のrecognized revenue、利益、日本法人・office・責任者・Japan tractionは非公開。ARRは売上高ではない。", "warehouse標準機能、dbt Core内製との重複と、統合後のroadmap・pricing・organizationを確認する必要がある。"],
    next: ["Data InfrastructureのEnterprise Sales", "Analytics Engineering・Customer Solutions", "Data・AI Ecosystem Partnerships"],
  },
  deel: {
    name: "Deel", domain: "Global Employment・Payroll・HR", officialUrl: "https://www.deel.com/careers/",
    positive: ["Deel Japan法人・Country Managerに加え、SDR、Onboarding、Payroll Operationsの現行roleを確認できる。", "ARR 15億米ドル、4万顧客、月200万payroll runを会社発表し、EORからPayroll・HR・ITへ広げる。"],
    negative: ["監査済みannual revenue、EBITDA額・margin、FCF、日本売上・顧客・給与・quotaは非公開。", "work-from-anywhereでもhigh volume・high accountability・high speedを明記し、係争中の競合との主張も未確定。"],
    next: ["HR Tech・Global Payroll Sales", "Customer Onboarding・Payroll Operations Leadership", "Global Mobility・People Operations Platform"],
  },
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
  figma: {
    name: "Figma", domain: "Product Design・Developer Workflow・AI Collaboration", officialUrl: "https://job-boards.greenhouse.io/figma",
    positive: ["Sales 4role、SC、Onboarding、Enablement、TAMの対象8求人を持ち、日本でnew logoからadoption・governanceまでをlocalに強化している。", "三菱電機、みずほ銀行、カプコンの国内定量事例とNDR 136%から、PLGをenterprise workflowへ広げる経験を得られる可能性がある。"],
    negative: ["Q2 2026はGAAP営業赤字でSBCも大きい。日本売上・headcount・quota・達成率・数値報酬は非公開。", "AI credit、code・design IP、security、accessibility、suite・point tool、seat・credit TCOを顧客環境で検証する必要がある。"],
    next: ["Product・Design PlatformのEnterprise GTM", "Developer Experience・AI Collaboration Sales", "Solutions Consulting・Customer Experience Leadership"],
  },
  fivetran: {
    name: "Fivetran", domain: "Data Movement・Analytics Engineering", officialUrl: "https://www.fivetran.com/careers",
    positive: ["Remote JapanでBDR、Sales Director、Partner Sales、Customer Solutionsを採用し、pipeline、direct、ecosystem、post-salesを統合後の日本GTMで強化している。", "LionのSAP→BigQuery 1週間のproofと750超source、200超destinationから、legacy・cloud・AI dataを横断する経験を得られる可能性がある。"],
    negative: ["売上・利益・FCF、日本売上・headcount・leader・quota・達成率は非公開。combined ARR約6億米ドルも契約時の見込み。", "merger integration、consumption・warehouse cost、connector fit、data residency、open-source・cloud nativeとのTCOをPoCで検証する必要がある。"],
    next: ["Data Infrastructure・ELTのEnterprise GTM", "Analytics Engineering・AI Data Platform Sales", "Cloud・SI Partner Sales／Customer Solutions"],
  },
  "grafana-labs": {
    name: "Grafana Labs", domain: "Open Observability・Telemetry・Incident Management", officialUrl: "https://job-boards.greenhouse.io/grafanalabs?keyword=japan",
    positive: ["日本法人、GTM leader、RemoteのAE・SEを確認でき、OSS adoptionからmanaged Cloudのnew logo・technical validationを日本で作る段階。", "OpenTelemetry、LGTM、k6、IRMを横断し、MTTRとtelemetry economicsを同じbusiness caseへまとめる専門性が得られる可能性がある。"],
    negative: ["ARR以外の売上・profit・FCF、日本売上・customer・headcount・quota・attainmentは非公開。", "2025年のpartial outage、ingest・retention cost、data residency、hyperscaler・full-stack競合との3年TCOを検証する必要がある。"],
    next: ["Observability・SRE PlatformのEnterprise GTM", "Open Source・Cloud Infrastructure Sales", "Solutions Engineering・Developer Platform"],
  },
  gurobi: {
    name: "Gurobi", domain: "Mathematical Optimization・Decision Intelligence", officialUrl: "https://jobs.lever.co/GurobiOptimization",
    positive: ["YOKU MOKU CREAと豊田自動織機の国内事例は、計画時間を600時間、2〜3週→1日、63%削減と具体化している。", "solver performanceだけでなく、modeling、deployment、support、SIを製造・物流・経営成果へつなぐ希少な専門性がある。"],
    negative: ["2026年8月17日時点で現行日本求人は0件。旧Regional Sales DirectorのRemote・言語条件を現在へ転用できない。", "売上・ARR・profit・FCF、日本売上・headcount・責任者は非公開で、model保守・教育・目的関数の属人化も国内事例が示す。"],
    next: ["Optimization・Decision Intelligence GTM", "Supply Chain・Manufacturing Solution Sales", "Operations Research・Planning Consulting"],
  },
  ideals: {
    name: "iDeals", domain: "Virtual Data Room・M&A Deal Management", officialUrl: "https://jobs.ashbyhq.com/ideals",
    positive: ["東京でAE、BDA、Premium Solutionsを採用し、開拓からonboarding・権限・Q&A運用までlocalでつなぐ。", "Profitable・bootstrapped、200万超users、30万companiesと公式は説明し、M&A・Legal・Financeの専門性を磨ける。"],
    negative: ["売上・ARR・利益額、日本法人・責任者・進出年、国内named caseは非公開・確認不能。", "給与・OTE・quota・attainment・担当社数と、Japan data location・契約主体・MCP data境界を確認する必要がある。"],
    next: ["Virtual Data Room・LegalTech Enterprise Sales", "M&A・Finance SaaS Customer Delivery", "DealTech・Corporate Development Platform GTM"],
  },
  knowbe4: {
    name: "KnowBe4", domain: "Human Risk Management・Cybersecurity", officialUrl: "https://job-boards.greenhouse.io/knowbe4",
    positive: ["東京でSales、SE、CS、Advisor、Partnerの対象6求人を採用し、human riskをend-to-endで扱う。", "お金のデザインの工数50〜60%削減・hit率改善など国内定量proofがある。"],
    negative: ["非公開化後のrevenue・ARR・profit・FCF、Japan revenue・headcountは非公開。", "顧客成果はvendor-hosted・self-reported。privacy・employee monitoring、Microsoft等existing stack、pricingをPoCで検証する必要がある。"],
    next: ["Cybersecurity Enterprise Sales・Leadership", "Security Awareness・Customer Success Architecture", "Email Security・Human Risk Solutions Engineering"],
  },
  lakera: {
    name: "Lakera", domain: "AI Security・LLM Guardrails", officialUrl: "https://jobs.ashbyhq.com/lakera.ai",
    positive: ["Check Point AI Defense Planeへred-team・runtime guardrailsを統合し、agentic AI securityの新categoryに携われる。", "model-neutral、100超languages、SaaS・self-host、Gandalf threat intelligenceは技術差別化候補。"],
    negative: ["2026年8月17日の公式ATSは現行求人0。過去Japan AEの条件を現在へ転用できない。", "Lakera単体財務、日本法人・責任者・office・顧客は非公開・確認不能。vendor performance claimは日本語workloadで再検証が必要。"],
    next: ["AI Security・AppSec GTM", "GenAI Red Team・Product Security", "Cybersecurity Platform Sales・Solutions Engineering"],
  },
  lighthouse: {
    name: "Lighthouse", domain: "Hospitality Commercial Intelligence", officialUrl: "https://job-boards.eu.greenhouse.io/lighthouse",
    positive: ["Japan Remote AEがfull-cycle・self-sourced pipeline・3x coverageを持ち、early local marketの営業経験になる。", "8万超hotels、400超partnerと国内工数削減caseがあり、dataをhotel P&L・commercial outcomeへつなげられる。"],
    negative: ["Groupのrecognized revenue・profit・FCF、日本法人・office・責任者・売上は非公開・確認不能。", "国内caseはvendor-authored・customer quote。PMS・RMS・OTA・市況の寄与を分け、ADR・RevPAR・TCOを比較する必要がある。"],
    next: ["Hospitality SaaS Enterprise Sales", "Revenue Management・Commercial Strategy", "TravelTech・Vertical SaaS Country Build"],
  },
  mambu: {
    name: "Mambu", domain: "Composable Core Banking・FinTech", officialUrl: "https://careers-mambu.icims.com/jobs/3352/senior-account-executive-%28channel%29/job",
    positive: ["Japan RemoteのChannel AEとしてreseller採用・enablement、joint GTM、New ACVを担い、financial infrastructureのecosystemを作れる。", "230M end users、500M+ API calls/day、65+カ国と、Core・Paymentsのglobal scaleを公式は説明。"],
    negative: ["revenue・ARR・profit・FCF、日本法人・office・責任者・本番顧客は非公開・確認不能。", "MPO廃止・Connectors support縮小、mission-critical移行・resilience・data residency・exit、partner capacityを必ず確認する必要がある。"],
    next: ["Core Banking・FinTech Enterprise Sales", "Financial Services Channel・Alliance GTM", "Cloud Banking・Embedded Finance Country Build"],
  },
  hightouch: {
    name: "Hightouch", domain: "Composable CDP・Agentic Marketing", officialUrl: "https://job-boards.greenhouse.io/hightouch",
    positive: ["Japan first AEとしてpipeline、message、design partner、case study、resellerを作るgreenfield roleで、dataとmarketingを横断する市場開発経験になり得る。", "ARR 1億米ドル、803 paying customers、Series Dからcategory growthを確認でき、国内partner・resellerの足場もある。"],
    negative: ["Japan担当AEの勤務地はAustralia・Singaporeで、日本法人・office・local team・雇用主体は未確認。給与・OTE・言語・勤務形態も非公開。", "ティラド成果はmulti-product全体。usage・warehouse cost、AI lift、real-time・AI cache、privacy・越境data、partner deliveryをPoCで切り分ける必要がある。"],
    next: ["CDP・MarTechのEnterprise AE", "Data Platform・Reverse ETL GTM", "Japan Market Development・Partner Ecosystem"],
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
