import { COMPANY_GLOBAL_REVIEW_PROFILES } from "@/lib/company-global-review-profiles";

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
for (const slug of ["uipath", "wiz"]) batchSlugs.add(slug);
for (const slug of ["servicenow"]) batchSlugs.add(slug);
for (const slug of ["tanium", "sayari", "doubleverify", "similarweb", "appsflyer", "bluematrix", "black-duck", "ivanti"]) batchSlugs.add(slug);
for (const slug of ["atlassian", "dynatrace"]) batchSlugs.add(slug);
for (const slug of ["gitlab", "watchguard"]) batchSlugs.add(slug);
for (const slug of ["twilio", "perforce", "fusion-worldwide", "deepgram"]) batchSlugs.add(slug);

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
  atlassian: {
    name: "Atlassian", domain: "Work Management・DevOps・ITSM・Customer Success", officialUrl: "https://join.atlassian.com/atlassian-talent-community/jobs/21718?lang=en-us",
    communityUrl: "https://www.repvue.com/companies/Atlassian", communityLabel: "RepVue Atlassian sales reviews",
    positive: ["横浜で日本語対応Senior Customer Success Managerを公式募集し、strategic customerのadoption・value realizationを担う。", "直近12カ月売上66億米ドル、35万顧客超と国内事例を持ち、product adoptionをbusiness outcomeへつなげられる。", "RepVueのglobal sales reviewは583 ratings・3.8/5を表示するが、日本CSの評価ではない。"],
    negative: ["日本売上、顧客数、CS portfolio、renewal・expansion目標、達成率、数値報酬は非公開。", "Microsoft、ServiceNow、specialist toolとの重複、cloud migration、multi-product adoptionを顧客・面接で検証する必要がある。", "海外reviewにはquota・territory・leadershipへの注意もあり、Japan CSMのportfolio・managerへ一般化せず面接で反証する。"],
    next: ["Enterprise Customer Success・Value Leadership", "Work Management・DevOps Transformation", "Customer Outcomes・APAC Leadership"],
  },
  dynatrace: {
    name: "Dynatrace", domain: "Observability・AIOps・Application Security", officialUrl: "https://apply.careers.dynatrace.com/job/Tokyo-Sr-Solutions-Engineer-Toky-100-0005/1390103700/",
    communityUrl: "https://www.glassdoor.co.uk/Reviews/Dynatrace-Reviews-E309684.htm", communityLabel: "Glassdoor Dynatrace global reviews",
    positive: ["東京でEnterprise Solutions Engineerを公式募集し、discovery、architecture、PoV、technical winを担う。", "Q1 FY2027売上16%増、ARR21.36億米ドルと富士通の国内定量事例から、technical proofをbusiness caseへ変えられる。", "Glassdoorのglobal集計は3.7/5・1,498 reviews・62% recommendを表示するが、日本SEの評価ではない。"],
    negative: ["日本売上、顧客数、SE:AE比、PoV conversion、quota、数値報酬は非公開。", "Datadog、Splunk、cloud標準等との重複、telemetry cost、partner・delivery capacityを案件と面接で検証する必要がある。", "海外reviewにはworkload、leadership、career opportunityへの注意もあり、日本の配属先へ一般化せずportfolio・managerを面接で確認する。"],
    next: ["Observability Solutions Engineering", "AIOps・Application Security Value Consulting", "Principal SE・Japan Technical Leadership"],
  },
  gitlab: {
    name: "GitLab", domain: "DevSecOps・AI Software Delivery・Ecosystem Sales", officialUrl: "https://job-boards.greenhouse.io/gitlab/jobs/8640173002",
    communityUrl: "https://www.comparably.com/companies/gitlab", communityLabel: "Comparably GitLab employee reviews",
    positive: ["日本RemoteのSenior Ecosystem Sales Managerとしてhyperscaler、GSI、resellerとのjoint planとpartner pipelineを担う。", "FY2026にARR 10億米ドル超、free cash flow 2.2億米ドルを公表し、富士通の国内事例も持つ。"],
    negative: ["日本売上、顧客数、partner経由売上、team人数、quota、達成率、数値報酬は非公開。", "2026年の再編後の日本投資、directとのcredit、partner delivery capacityを面接で検証する必要がある。"],
    next: ["Japan Head of Alliances・Channels", "APAC Partner Sales Director", "DevSecOps Country Leadership"],
  },
  watchguard: {
    name: "WatchGuard Technologies", domain: "Cybersecurity・MSP・Channel Leadership", officialUrl: "https://jobs.lever.co/watchguard/31981db1-54fb-4764-9f8c-16b886d176ae",
    communityUrl: "https://www.comparably.com/companies/watchguard-technologies", communityLabel: "Comparably WatchGuard Technologies employee reviews",
    positive: ["東京onsiteのCountry Managerとしてsales strategy、revenue、forecast、team、distribution、MSP・channelを統括する。", "25,000 MSP、179カ国のpartner、国内customer storyを持ち、channel-firstのsecurity事業を率いられる。"],
    negative: ["非公開企業で日本売上、顧客数、team人数、seller達成率、報酬、権限範囲は非公開。", "installed base、partner productivity、service attach、P&L・pricing・hiringのdecision rightを面接で確認する必要がある。"],
    next: ["大規模Cybersecurity Country Manager", "APAC Channel・Sales Vice President", "Managed Security事業責任者"],
  },
  twilio: {
    name: "Twilio", domain: "Customer Engagement・CPaaS・Strategic Sales", officialUrl: "https://jobs.twilio.com/careers?pid=1099553600898&sort_by=timestamp&start=0",
    communityUrl: "https://www.glassdoor.com/Overview/Working-at-Twilio-EI_IE410790.11%2C17.htm", communityLabel: "Glassdoor Twilio global reviews",
    positive: ["日本RemoteのStrategic AEとして既存大手顧客のmulti-product expansionを担う。", "Q2 2026はorganic growth 17%、DBNER 116%、国内法人22人と複数の国内事例を確認。"],
    negative: ["日本売上、顧客数、担当account、gross margin、quota、達成率、数値報酬は非公開。", "通信原価、discount、customer concentration、product別creditを面接で検証する必要がある。"],
    next: ["Global・Strategic Account Director", "Customer Engagement Sales Leadership", "Japan・APAC Communications Platform Leadership"],
  },
  perforce: {
    name: "Perforce Software", domain: "Test Data Management・DevOps・Data Compliance", officialUrl: "https://jobs.lever.co/perforce/9eeec4e8-9bc0-4a07-9ac1-3cbd99236b7d",
    communityUrl: "https://www.glassdoor.com/Overview/Working-at-Perforce-Software-EI_IE381047.11%2C28.htm", communityLabel: "Glassdoor Perforce Software global reviews",
    positive: ["Japan based RemoteのEnterprise AEとしてDelphixのdata provisioning・masking・complianceを売る。", "20,000社超、Fortune 100の75%超と日本法人・partner基盤を確認。"],
    negative: ["非公開企業で日本売上、顧客数、team、quota、達成率、数値報酬は非公開。", "買収後のportfolio ownership、delivery capacity、script・cloud-nativeとのTCOを検証する必要がある。"],
    next: ["Data Platform Strategic Sales", "DevOps・Data Security Sales Leadership", "Japan・APAC Portfolio Sales Leadership"],
  },
  "fusion-worldwide": {
    name: "Fusion Worldwide", domain: "半導体・電子部品調達・Supply Chain Sales", officialUrl: "https://job-boards.greenhouse.io/fusionworldwide/jobs/5079961003",
    communityUrl: "https://www.glassdoor.co.uk/Reviews/Fusion-Worldwide-Reviews-E39187.htm", communityLabel: "Glassdoor Fusion Worldwide global reviews",
    positive: ["東京officeのSales AEとして新規開拓、価格・納期交渉、global Purchasingとの案件実行を担う。", "会社公式は年間売上20億ドル超、8,500 supplier、20超拠点、日本公式は東京16人を掲載。"],
    negative: ["日本売上、顧客数、account数、quota、pay mix、達成率、repeat gross profitは非公開。", "scarcity時の価格、source quality、RMA・liability、spotからrepeat businessへの転換を面接で検証する必要がある。"],
    next: ["Semiconductor・Supply Chain Strategic Sales", "Procurement・Distribution Sales Leadership", "Japan・APAC Electronic Components Leadership"],
  },
  deepgram: {
    name: "Deepgram", domain: "Voice AI・Developer Infrastructure・Country Build", officialUrl: "https://jobs.ashbyhq.com/Deepgram/3ecb28e4-4ce3-468c-8bf2-e2b3c4a722bf",
    communityUrl: "https://www.glassdoor.com/Overview/Working-at-Deepgram-EI_IE1404455.11%2C19.htm", communityLabel: "Glassdoor Deepgram global reviews",
    positive: ["Japan Country Leaderとしてpipeline・ARR、direct・partner sales、team buildを0→1で担う。", "Series C 1.3億ドル、1,300社超、20万developerとVoice AIのproduction事例を確認。"],
    negative: ["日本法人、office、雇用主体、国内顧客、team、quota、報酬は非公開。", "日本語accuracy、latency、privacy、human handoff、local deliveryを実環境で検証する必要がある。"],
    next: ["Voice AI Country Manager", "APAC AI Infrastructure Sales Vice President", "AI・Customer Experience事業責任者"],
  },
  servicenow: {
    name: "ServiceNow", domain: "Enterprise Workflow・AI Platform", officialUrl: "https://careers.servicenow.com/jobs/?search=&country=Japan",
    communityUrl: "https://www.repvue.com/companies/servicenow", communityLabel: "RepVue ServiceNow sales ratings",
    positive: ["日本でSales、BDR、Partner、Presales、Architecture、Customer Success、Deal Operationsの26対象求人を公式確認し、顧客lifecycleを広く覆う。", "Q2 2026売上24%増、AI ACV 10億ドル超、資生堂等の国内定量caseから、platformのbusiness caseを職種別に作れる。"],
    negative: ["日本の売上・ARR・headcount・quota・担当社数・数値報酬は非公開。", "Glassdoorはglobal 4.0/5・5,700件超、RepVueは約1,055 ratings・quota attainment約50.3%の参考値を示すが、Japan・segment・職種差を面接で分解する必要がある。"],
    next: ["Enterprise Workflow GTM", "AI・Solution Architecture", "Customer Success・Value Leadership"],
  },
  uipath: {
    name: "UiPath", domain: "Agentic Automation・Enterprise Workflow", officialUrl: "https://jobs.ashbyhq.com/uipath",
    positive: ["2017年から日本法人を展開し、東京・大阪拠点、現会長CEO、JPX・NTT Communicationsの国内caseを持つ。", "FY2026通期GAAP黒字化後、東京でSales・BDR・金融Sales Associate・Specialist SEの4職を採用している。"],
    negative: ["日本の売上・ARR・headcount・quota・attainment・数値報酬は非公開。", "既存RPAからagentic productionへの転換、Microsoft等との競争、on-prem・partner deliveryを顧客環境と面接で検証する必要がある。"],
    next: ["Agentic Automation Enterprise GTM", "AI・Workflow Solutions Engineering", "Automation CoE・Transformation Leadership"],
  },
  wiz: {
    name: "Wiz", domain: "Cloud・AI Security・CNAPP", officialUrl: "https://www.wiz.io/careers",
    positive: ["Google買収完了後も東京でAE、Partner、SE、TAM、Advanced Deliveryの8対象職を採用し、full-lifecycle coverageを構築している。", "Fortune 100の65%超、1日2300億files、顧客の約90%がAI security機能を利用するglobal scaleを持つ。"],
    negative: ["日本の売上・顧客数・headcount・leader・国内named定量case・数値報酬は非公開。", "Google統合後のreporting、multi-cloud neutrality、product credit、quota、partner delivery、CNAPP競争を面接とPoCで検証する必要がある。"],
    next: ["Cloud Security Enterprise GTM", "CNAPP Solutions・Customer Engineering", "Security Partner・Post-sales Leadership"],
  },
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
    name: "Harvey", domain: "Legal AI・Professional Services AI", officialUrl: "https://www.harvey.ai/careers",
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
    negative: ["2026年8月19日の公式ATSは現行求人0。過去Japan AEの条件を現在へ転用できない。", "Lakera単体財務、日本法人・責任者・office・顧客は非公開・確認不能。vendor performance claimは日本語workloadで再検証が必要。"],
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
  tanium: {
    name: "Tanium", domain: "自律型IT・Endpoint Management・Security", officialUrl: "https://job-boards.greenhouse.io/tanium",
    communityUrl: "https://www.comparably.com/companies/tanium", communityLabel: "Comparably Tanium employee reviews",
    positive: ["日本のStrategic Accountsに加え、Customer Success、Value Engineering、Supportの採用を公式ATSで確認。", "real-time endpoint dataをasset、patch、exposure、threat responseへ広げ、大企業のIT・Security成果を横断できる。"],
    negative: ["日本売上・顧客数・headcount・quota・attainment・数値報酬は非公開。", "Microsoft等の既存stackとの重複、未管理資産、data freshness、復旧性能、3年TCOを顧客環境と面接で検証する必要がある。"],
    next: ["Endpoint・Cybersecurity Strategic Sales", "Autonomous IT・Value Engineering", "Enterprise Security Sales Leadership"],
  },
  sayari: {
    name: "Sayari", domain: "経済安全保障・Supply Chain Risk Intelligence", officialUrl: "https://job-boards.greenhouse.io/sayari",
    communityUrl: "https://www.comparably.com/companies/sayari", communityLabel: "Comparably Sayari employee reviews",
    positive: ["東京でEnterprise AE、Client Director、Forward Deployed Engineerを採用し、commercialとtechnical deliveryを同時に構築。", "117億件超・250超法域のprimary-source recordsをownership・trade graphへ変え、経済安全保障の意思決定を支える。"],
    negative: ["日本売上・顧客数・headcount・quota・attainment・報酬内訳は非公開。求人の海外向けドルrangeをJapan報酬へ転用しない。", "国内named case、source coverage、entity resolution、false positive、規制・供給網riskの成果を実案件で検証する必要がある。"],
    next: ["Risk Intelligence Enterprise Sales", "Economic Security・Supply Chain GTM", "Compliance Data Sales Leadership"],
  },
  doubleverify: {
    name: "DoubleVerify", domain: "デジタル広告計測・Ad Verification", officialUrl: "https://job-boards.greenhouse.io/doubleverify",
    communityUrl: "https://www.comparably.com/companies/doubleverify", communityLabel: "Comparably DoubleVerify employee reviews",
    positive: ["東京でadvertiser・agency向けSalesとAccount Managementを採用し、new、renewal、expansionをlocalで担う。", "Social、CTV、Attention、Performanceへ計測範囲を広げ、media qualityを投資成果へ接続できる。"],
    negative: ["日本売上・顧客数・quota・attainment・数値報酬は非公開。", "platform native measurementとの差、incrementality、privacy、MFA・AI content、Nielsenとの買収契約後の組織・roadmapを検証する必要がある。"],
    next: ["AdTech・Measurement Enterprise Sales", "Media Analytics・Customer Growth", "Japan・APAC Revenue Leadership"],
  },
  similarweb: {
    name: "Similarweb", domain: "Digital Intelligence・Market and Sales Data", officialUrl: "https://job-boards.greenhouse.io/similarweb",
    communityUrl: "https://www.comparably.com/companies/similarweb", communityLabel: "Comparably Similarweb employee reviews",
    positive: ["東京のHead of SalesがJapan・Koreaのstrategy、team、pipeline、forecast、大口dealを統括する。", "web・app・search・market・sales dataを外部市場の意思決定へつなぐ領域横断のGTM経験になる。"],
    negative: ["日本売上・ARR・headcount・team quota・attainment・報酬は非公開。", "推計dataのcoverage・accuracy・freshness、platform仕様変更、AI answer経由のtraffic変化、競合とのTCOを検証する必要がある。"],
    next: ["Digital Intelligence Sales Leadership", "Data・Market Intelligence GTM", "Japan・Korea Country Leadership"],
  },
  appsflyer: {
    name: "AppsFlyer", domain: "モバイル計測・Modern Marketing Cloud", officialUrl: "https://careers.appsflyer.com/tokyo/",
    communityUrl: "https://www.comparably.com/companies/appsflyer", communityLabel: "Comparably AppsFlyer employee reviews",
    positive: ["東京のGrowth Account Managerがnew businessからrenewal、cross-sell、retentionまで一貫して担う。", "mobile・web・CTVのattribution、incrementality、privacy-preserving data collaborationを横断できる。"],
    negative: ["日本売上・顧客数・quota・attainment・pay mix・数値報酬は非公開。", "privacy制約、SKAN・platform変化、attributionとincrementalityの差、data clean room・既存MarTechとのTCOを検証する必要がある。"],
    next: ["MarTech・Mobile Measurement Sales", "Customer Growth・Account Management", "Marketing Data Platform Leadership"],
  },
  bluematrix: {
    name: "BlueMatrix", domain: "投資調査制作・配信・読者分析", officialUrl: "https://jobs.lever.co/BlueMatrix?location=Tokyo",
    communityUrl: "https://www.comparably.com/companies/bluematrix", communityLabel: "Comparably BlueMatrix employee reviews",
    positive: ["東京のClient Successが投資銀行顧客のadoption、retention、churn risk、organic expansionを持つ。", "research authoring、compliance、distribution、readership dataをcapital marketsのworkflow成果へつなげられる。"],
    negative: ["求人表示の報酬rangeは単位を確定できず転載しない。日本売上・quota・担当社数・attainmentも非公開。", "confidential research、AI consumption、email・distribution、compliance、既存CMSとの責任境界とROIを検証する必要がある。"],
    next: ["Capital Markets Client Success", "Research Workflow Enterprise SaaS", "Financial Data Customer Leadership"],
  },
  "black-duck": {
    name: "Black Duck", domain: "Application Security・Software Supply Chain", officialUrl: "https://job-boards.greenhouse.io/blackduck",
    communityUrl: "https://www.comparably.com/companies/black-duck-software", communityLabel: "Comparably Black Duck employee reviews",
    positive: ["東京でSales、Sales Engineer、Implementation、Supportを採用し、commercialからdeliveryまでlocal coverageを持つ。", "SCA、SAST、DASTとservicesを通じ、open source・proprietary code・runtime riskを横断できる。"],
    negative: ["公式求人のJPY 7M〜11MはbaseかOTEかを本文で確定できないため、incentive内訳とともに要確認。", "false positive、fix time、developer friction、license risk、AI-generated code、既存DevSecOps stackとのTCOを検証する必要がある。"],
    next: ["AppSec Enterprise Sales", "Software Supply Chain Security GTM", "Cybersecurity Sales Leadership"],
  },
  ivanti: {
    name: "Ivanti", domain: "Endpoint Management・ITSM・Exposure Management", officialUrl: "https://careers.ivanti.com/",
    communityUrl: "https://www.comparably.com/companies/ivanti", communityLabel: "Comparably Ivanti employee reviews",
    positive: ["東京のSales Engineerがdiscovery、demo、technical validation、solution designをAccount Managerと担う。", "ライフネット生命、東映アニメーション、ブラザー工業等の国内事例を持ち、UEM・ITSM・Exposureを横断できる。"],
    negative: ["日本売上・headcount・quota・attainment・数値報酬は非公開。", "Microsoft・ServiceNow等との重複、patch・exposureの実効性、security incidentへの対応、tool consolidationと3年TCOを検証する必要がある。"],
    next: ["Endpoint・ITSM Solutions Engineering", "Cybersecurity Presales", "Enterprise IT Platform Architecture"],
  },
};

type RoleArchetype =
  | "country-leadership" | "sales-leadership" | "development-leadership" | "partner-leadership" | "presales-leadership" | "customer-leadership"
  | "strategic-seller" | "enterprise-seller" | "commercial-seller" | "smb-seller" | "account-manager" | "development"
  | "partner" | "presales" | "customer" | "delivery" | "delivery-leadership" | "support" | "support-leadership"
  | "marketing" | "marketing-leadership" | "operations" | "operations-leadership" | "technical-advisor" | "technical-specialist";

type RoleMarketProfile = {
  key: RoleArchetype;
  label: string;
  benchmarkLabel: string;
  benchmarkRange: string;
  baseRange: string;
  totalRange: string;
  payModel: string;
  skills: Array<{ title: string; detail: string }>;
  nextRoles: Array<{ title: string; detail: string }>;
  marketBands: Array<{ level: string; range: string; condition: string }>;
  proofPoints: string[];
};

const compensationBenchmarkUrl = "https://www.morganmckinley.com/jp/salary-guide/sales-marketing/permanent-salaries";
const technologyBenchmarkUrl = "https://www.morganmckinley.com/jp/salary-guide/technology/permanent-salaries";

function hasLeadershipScope(value: string) {
  return /(director|vice president|\bvp\b|head of|country manager|general manager|regional sales director|sales director|team lead|team manager|leader|senior .{0,30} manager|(?:^|\s)manager\s*(?:i|ii|1|2)\b|manager, (?:enterprise sales|solutions|solution|sales)|director of sales|営業部長|責任者)/i.test(value);
}

function roleArchetype(job: JobLike): RoleArchetype {
  const value = `${job.title} ${job.segment}`.toLowerCase();
  const title = job.title.toLowerCase();
  if (/(country manager|general manager|head of japan|regional sales director.*japan)/.test(value)) return "country-leadership";
  if (/(business development)/.test(value) && hasLeadershipScope(value)) return "development-leadership";
  if (/(sales director|director of sales)/.test(title)) return "sales-leadership";
  if (/(solutions consulting|solution consulting|pre.?sales|sales engineer|solutions engineer|solution engineer|solutions architect|solution architect|value engineer|solution advisor)/.test(value)) return hasLeadershipScope(value) ? "presales-leadership" : "presales";
  if (/(account partner)/.test(title)) return "enterprise-seller";
  if (/(partner|channel|alliance|alliances|ecosystem)/.test(value)) return hasLeadershipScope(value) ? "partner-leadership" : "partner";
  if (/(customer success|customer experience|technical account|customer solutions|premium solutions|onboarding manager|account management)/.test(value)) return hasLeadershipScope(value) && !/(account director)/.test(title) ? "customer-leadership" : "customer";
  if (/(technical success)/.test(value)) return "customer";
  if (/(marketing|demand generation|field marketing)/.test(value)) return hasLeadershipScope(value) ? "marketing-leadership" : "marketing";
  if (/(sales strategy|sales operations|revenue operations|revops|enablement|gtm operations|business analyst)/.test(value)) return hasLeadershipScope(value) ? "operations-leadership" : "operations";
  if (/(technical escalation|technical support|support engineer|support specialist)/.test(value)) return hasLeadershipScope(value) ? "support-leadership" : "support";
  if (/(forward.?deployed data scientist|applied ai architect|applications scientist|customer-facing data science|technical lead|business value consult|transformation architect|outcomes architect|field engineer|product gtm specialist|ai security specialist)/.test(value)) return "technical-specialist";
  if (/(professional services|implementation|delivery|project manager|program manager|deployed engineer|application engineer|training engineer|forward deployed|consultant)/.test(value)) return hasLeadershipScope(value) ? "delivery-leadership" : "delivery";
  if (/(ciso advisor|security advisor|technical advisor|evangelist|advocate)/.test(value)) return "technical-advisor";
  if (hasLeadershipScope(value)) return "sales-leadership";
  if (/(development representative|market development representative|sales development|business development representative|\bsdr\b|\bbdr\b|\bmdr\b|inside sales)/.test(value)) return "development";
  if (/(strategic|global account|majors|major account|named account|top.?tier)/.test(value)) return "strategic-seller";
  if (/(enterprise|large|key account)/.test(value)) return "enterprise-seller";
  if (/(commercial|mid.?market|midmarket|field sales)/.test(value)) return "commercial-seller";
  if (/(smb|small business|growth account)/.test(value)) return "smb-seller";
  if (/(account manager|renewal|existing business)/.test(value)) return "account-manager";
  return "enterprise-seller";
}

function profileForRole(job: JobLike, domain: string): RoleMarketProfile {
  const key = roleArchetype(job);
  const title = job.title;
  const shared = {
    key,
    skills: [] as Array<{ title: string; detail: string }>,
    nextRoles: [] as Array<{ title: string; detail: string }>,
    marketBands: [] as Array<{ level: string; range: string; condition: string }>,
    proofPoints: [] as string[],
  };
  if (key === "country-leadership") return { ...shared, label: "Japan事業責任者", benchmarkLabel: "President / Country Manager (Small)", benchmarkRange: "2,500万〜7,000万円", baseRange: "2,500万〜4,500万円", totalRange: "3,000万〜7,000万円", payModel: "固定給＋事業・売上bonus＋equityを想定。P&L範囲で振れ幅が大きい。", skills: [
    { title: "Japan P&Lと資源配分", detail: `${domain}の売上だけでなく、採用、partner、delivery、marketing投資を統合する。` },
    { title: "本社と日本市場の翻訳", detail: "global優先順位を日本の商習慣・調達・導入体制に落とし、必要なproduct投資を勝ち取る。" },
    { title: "複数機能の組織設計", detail: "Sales、SE、CS、Partnerの目標と責任を揃え、個人に依存しない成長modelを作る。" },
  ], nextRoles: [
    { title: "より大規模な外資ITのJapan Country Manager", detail: "日本売上、利益、複数機能の採用・定着を数字で証明できる場合。" },
    { title: "APAC Regional Vice President", detail: "日本で作ったGTMを他国で再現し、複数国責任者を育成できることが条件。" },
    { title: "事業会社のChief Revenue Officer・事業部長", detail: "SaaS営業に加え、P&L、product、customer operationまで持った場合の隣接候補。" },
  ], marketBands: [
    { level: "小〜中規模のCountry Manager", range: "2,500万〜7,000万円", condition: "Japan P&L、採用、複数機能、本社交渉まで持つ。" },
    { level: "大規模のCountry Manager", range: "5,000万〜1億円", condition: "大規模売上と利益、組織階層、複数productの実績がある。" },
    { level: "APAC事業責任", range: "5,000万〜1億2,000万円（Genba仮説）", condition: "複数国のP&Lと人材育成を再現。equityの影響が大きい。" },
  ], proofPoints: ["Japan売上・成長率・利益貢献", "組織のquota達成者比率と採用・ramp", "partner由来売上とdelivery capacity", "日本発のproduct・pricing・GTM改善"] };
  if (key === "sales-leadership") return { ...shared, label: "Sales Manager・Director", benchmarkLabel: "Sales Manager / Sales Director", benchmarkRange: "2,000万〜5,000万円", baseRange: "1,500万〜2,500万円", totalRange: "2,000万〜4,000万円", payModel: "固定給＋team quota連動の変動給を想定。equityは企業stageとgrade次第。", skills: [
    { title: "Team revenueの再現性", detail: `${domain}のpipeline、forecast、達成者比率を個人AEではなくteam単位で改善する。` },
    { title: "採用・育成・ramp", detail: "採用基準、onboarding、deal coachingを標準化し、新任AEの立ち上がりを短縮する。" },
    { title: "大型案件のquality control", detail: "qualification、executive coverage、commercial riskをレビューし、forecast精度とwin rateを高める。" },
  ], nextRoles: [
    { title: "Vice President of Sales, Japan", detail: "複数team・segmentの売上とleader育成を持てる場合の直線的な候補。" },
    { title: "Japan Country Manager", detail: "Sales以外にpartner、marketing、delivery、予算まで責任を広げた場合。" },
    { title: "APAC Sales Director・RVP", detail: "日本の勝ち方を英語で他国teamへ展開し、複数国で再現できることが条件。" },
  ], marketBands: [
    { level: "Sales Manager", range: "2,000万〜3,000万円", condition: "単一teamのquota、採用、coaching、forecastを持つ。" },
    { level: "Sales Director", range: "2,500万〜5,000万円", condition: "複数teamまたは複数segmentの売上とleader育成を持つ。" },
    { level: "Country Manager候補", range: "2,500万〜7,000万円", condition: "P&L、partner、delivery、採用全体まで実績を広げる。" },
  ], proofPoints: ["team quota達成率と達成者比率", "forecast accuracyとpipeline coverage", "採用数・ramp期間・離職率", "案件単価・win rate・sales cycleの改善"] };
  if (key === "partner-leadership" || key === "partner") {
    const leader = key === "partner-leadership";
    return { ...shared, label: leader ? "Partner・Alliance Leadership" : "Partner・Channel Sales", benchmarkLabel: "Channel Sales / Alliance Manager", benchmarkRange: "1,000万〜2,500万円", baseRange: leader ? "1,300万〜2,000万円" : "900万〜1,500万円", totalRange: leader ? "1,800万〜3,000万円" : "1,200万〜2,200万円", payModel: "固定給＋partner-sourced・partner-influenced目標に連動するbonusを想定。credit ruleで大きく変わる。", skills: [
      { title: "Ecosystem GTM", detail: `${domain}をpartnerのservice・solutionへ組み込み、共同account planとpipelineを作る。` },
      { title: "Partner economics", detail: "紹介件数でなく、sourced・influenced revenue、enablement、delivery capacity、marginを管理する。" },
      { title: "Directとのoperating model", detail: "案件登録、account ownership、credit、導入責任を明確にし、channel conflictを抑える。" },
    ], nextRoles: leader ? [
      { title: "Japan Head of Alliances・Channels", detail: "複数種別のpartner portfolioとteam targetを持つ。" },
      { title: "APAC Partner Sales Director", detail: "複数国でpartner programとsourced revenueを再現する。" },
      { title: "Country Manager", detail: "partnerだけでなくdirect sales、delivery、P&Lまで責任を広げる。" },
    ] : [
      { title: "Senior Partner・Alliance Manager", detail: "単なるenablementでなく、sourced revenueと複数重要partnerを持つ。" },
      { title: "Partner Sales Lead・Manager", detail: "担当者育成、portfolio設計、forecastまで責任を広げる。" },
      { title: "Direct Enterprise AE", detail: "partner案件でもdiscovery、business case、commercial closeを自ら持った場合の転換候補。" },
    ], marketBands: [
      { level: "Channel Sales", range: "1,000万〜2,000万円", condition: "partner portfolioとsourced・influenced revenueを持つ。" },
      { level: "Alliance Manager", range: "1,200万〜2,500万円", condition: "GSI・cloud・strategic allianceでjoint solutionと大型pipelineを作る。" },
      { level: "Partner Sales Director", range: "2,000万〜3,500万円（Genba仮説）", condition: "team、複数partner種別、Japan targetを持つ。" },
    ], proofPoints: ["partner-sourced・influenced pipelineと受注", "active・certified partner数と稼働率", "partner経由のwin rate・sales cycle", "delivery capacity・更新・拡張実績"] };
  }
  if (key === "presales-leadership" || key === "presales") {
    const leader = key === "presales-leadership";
    return { ...shared, label: leader ? "Solutions Consulting Leadership" : "Solutions Engineer・Architect", benchmarkLabel: "Pre-Sales / Solutions Architect", benchmarkRange: "800万〜2,500万円", baseRange: leader ? "1,300万〜2,000万円" : "900万〜1,600万円", totalRange: leader ? "1,600万〜2,600万円" : "1,100万〜2,100万円", payModel: "固定給中心＋teamまたは担当案件のtechnical win・受注連動bonusを想定。", skills: [
      { title: "Technical value engineering", detail: `${domain}の評価条件を顧客環境で検証し、技術指標を購買判断へ翻訳する。` },
      { title: "PoCから本番への設計", detail: "success criteria、security、integration、operationを先に定め、demoで終わせない。" },
      { title: leader ? "SE組織のcapacityとquality" : "Productへの根拠付きfeedback", detail: leader ? "案件優先順位、専門性、coaching、technical winをteamとして最適化する。" : "個社要件と再利用可能な製品改善を分け、Product・Engineeringへ返す。" },
    ], nextRoles: leader ? [
      { title: "Director of Solutions Consulting", detail: "複数segmentのSE、technical win、採用・rampを持つ。" },
      { title: "Japan CTO・Field CTO", detail: "個別案件を越え、経営層のcategory educationとproduct strategyに広げる。" },
      { title: "APAC Solutions Engineering Leader", detail: "複数国のSE operating modelを英語で再現する。" },
    ] : [
      { title: "Senior・Principal Solutions Engineer", detail: "より大型・高難度の案件とtechnical standardを持つ。" },
      { title: "Solutions Consulting Manager", detail: "SEの採用、coaching、capacity、technical winをteam単位で持つ。" },
      { title: "Field CTO・Product Strategy", detail: "顧客課題を市場・product roadmapへ一般化できる場合。" },
    ], marketBands: [
      { level: "Pre-Sales・Solutions Engineer", range: "800万〜2,500万円", condition: "技術専門性、顧客対応、PoC、受注支援の複合度で変動。" },
      { level: "Solutions Architect・Principal", range: "1,200万〜2,500万円（Genba仮説）", condition: "architecture、security、大型案件、再利用可能な設計を持つ。" },
      { level: "Solutions Consulting Manager・Director", range: "1,600万〜3,000万円（Genba仮説）", condition: "team target、採用、capacity、technical winを持つ。" },
    ], proofPoints: ["PoC-to-close・PoC-to-production転換率", "technical winと受注金額", "評価期間・実装工数の短縮", "再利用されたdemo・architecture・playbook"] };
  }
  if (key === "customer-leadership" || key === "customer" || key === "account-manager") {
    const leader = key === "customer-leadership";
    const account = key === "account-manager";
    return { ...shared, label: leader ? "Customer Success Leadership" : account ? "Account Management・Renewal" : "Customer Success・TAM", benchmarkLabel: account ? "Account Manager / Renewal Sales" : "Customer Success Manager", benchmarkRange: account ? "700万〜2,200万円" : "900万〜2,500万円", baseRange: leader ? "1,300万〜2,000万円" : "850万〜1,500万円", totalRange: leader ? "1,600万〜2,700万円" : "950万〜1,900万円", payModel: "固定給中心＋retention・expansion・customer outcome連動bonusを想定。renewal quotaの有無を要確認。", skills: [
      { title: "Value realization", detail: `${domain}の利用を顧客KPIへ結び、導入後の成果、risk、次の改善をQBRで合意する。` },
      { title: "Renewal・expansionの先行管理", detail: "health、stakeholder、adoption、outcomeから更新riskと拡張機会を予測する。" },
      { title: leader ? "Portfolio・CS組織設計" : "顧客組織のchange management", detail: leader ? "segment別coverage、capacity、playbook、escalationを設計し、NRRをteamで再現する。" : "championだけに依存せず、executive sponsor、現場、IT、partnerと定着責任を分担する。" },
    ], nextRoles: leader ? [
      { title: "Director・VP of Customer Success", detail: "NRR、portfolio health、team productivity、採用を持つ。" },
      { title: "Chief Customer Officer・Japan Customer Leader", detail: "CSに加えSupport、Services、Renewal全体のP&L・KPIへ広げる。" },
      { title: "APAC Customer Success Leader", detail: "複数国のcoverage modelとleader育成を再現する。" },
    ] : account ? [
      { title: "Strategic Account Manager", detail: "より大きいrenewal・expansion portfolioとexecutive relationshipを持つ。" },
      { title: "Renewal・Account Management Lead", detail: "team forecast、retention、expansion、更新processを持つ。" },
      { title: "Customer Success Manager", detail: "commercial更新だけでなくadoptionとbusiness outcomeを持った場合の隣接候補。" },
    ] : [
      { title: "Senior・Strategic Customer Success Manager", detail: "大型portfolio、executive QBR、複数productのadoptionを持つ。" },
      { title: "Customer Success・TAM Manager", detail: "teamのcapacity、retention、expansion、採用・育成を持つ。" },
      { title: "Value Consulting・Customer Transformation", detail: "利用定着の実績を経営KPIと変革programへ広げた場合。" },
    ], marketBands: [
      { level: account ? "Account Manager・Renewal" : "Customer Success Manager・TAM", range: account ? "700万〜2,200万円" : "900万〜2,500万円", condition: "portfolio規模、renewal quota、技術難度、expansion責任で変動。" },
      { level: "Strategic・Principal", range: "1,200万〜2,500万円（Genba仮説）", condition: "大型顧客、executive sponsor、複数product、NRR貢献を持つ。" },
      { level: "CS Manager・Director", range: "1,600万〜3,000万円（Genba仮説）", condition: "teamのGRR・NRR、capacity、採用・rampを持つ。" },
    ], proofPoints: ["GRR・NRR・renewal率と担当ARR", "adoption・active use・time-to-value", "expansion pipeline・upsell・churn回避", "顧客の業務KPIとescalation削減"] };
  }
  if (key === "development-leadership") return { ...shared, label: "Business Development Leadership", benchmarkLabel: "Sales Manager / Business Development", benchmarkRange: "1,500万〜3,000万円（職務接続仮説）", baseRange: "1,200万〜1,800万円", totalRange: "1,600万〜2,600万円", payModel: "固定給＋teamのqualified pipeline・accepted opportunity・受注貢献に連動する変動給を想定。", skills: [
    { title: "Pipeline engineの設計", detail: `${domain}のICP、segment、channel、message、capacityを分解し、必要pipelineから逆算する。` },
    { title: "BDRの採用・育成・ramp", detail: "call数ではなく、仮説品質、AE acceptance、pipeline貢献まで再現する。" },
    { title: "Sales・Marketingとのfunnel統合", detail: "lead定義、handoff、SLA、stage conversionを揃え、部門間の数字のずれをなくす。" },
  ], nextRoles: [
    { title: "Director of Business Development・Sales Development", detail: "複数segment、manager、採用・ramp、pipeline targetを持つ。" },
    { title: "Head of Growth・Pipeline Generation", detail: "BDRに加えdemand、digital、partner経由のfunnel全体を持つ。" },
    { title: "Commercial Sales Manager", detail: "pipeline創出だけでなく、AEのclose、forecast、revenue targetまで責任を広げる。" },
  ], marketBands: [
    { level: "BDR・SDR Manager", range: "1,300万〜2,200万円（OTE仮説）", condition: "team pipeline、conversion、採用・rampを持つ。" },
    { level: "Business Development Director", range: "1,800万〜3,000万円（OTE仮説）", condition: "複数team・segmentのpipeline targetとmanager育成を持つ。" },
    { level: "Head of Growth・Commercial Sales Manager", range: "2,000万〜3,500万円（OTE仮説）", condition: "pipelineからrevenue・予算・複数channelへ責任を広げる。" },
  ], proofPoints: ["teamのsourced pipeline金額と受注貢献", "AE acceptance・meeting-to-opportunity転換率", "採用数・ramp期間・達成者比率", "segment・message・channel別の再現性"] };
  if (key === "development") return { ...shared, label: "SDR・BDR・MDR", benchmarkLabel: "Business Development（Enterprise Technology市場の需要トレンド）", benchmarkRange: "700万〜1,200万円（Genba仮説）", baseRange: "550万〜850万円", totalRange: "700万〜1,200万円", payModel: "固定給＋meeting・qualified pipeline連動の変動給。外資SaaSは65:35〜75:25程度を仮置するが個社確認が必要。", skills: [
    { title: "仮説型prospecting", detail: `${domain}のbuyer、外部変化、既存systemを調べ、account固有の接触理由を作る。` },
    { title: "Qualificationとhandoff", detail: "meeting数だけでなく、課題、economic buyer、時期、次の検証をAEへ渡す。" },
    { title: "Pipeline analytics", detail: "channel・segment・message別の転換率を測り、再現性あるpipeline作成へ改善する。" },
  ], nextRoles: [
    { title: "Senior BDR・Enterprise BDR", detail: "大手accountの仮説、executive outreach、pipeline金額で成果を証明する。" },
    { title: "Commercial・SMB Account Executive", detail: "discovery、demo、negotiation、closeを持ち、自分でrevenueを作る役割へ進む。" },
    { title: "Sales Development Manager", detail: "message、capacity、conversion、採用・rampをteam単位で再現する。" },
  ], marketBands: [
    { level: "SDR・BDR・MDR", range: "700万〜1,200万円（OTE仮説）", condition: "qualified meeting、pipeline金額、conversionとpay mix次第。" },
    { level: "Senior・Enterprise BDR", range: "900万〜1,400万円（OTE仮説）", condition: "大手・outbound・executive向けのpipeline創出を証明。" },
    { level: "Commercial AEへ転換", range: "1,200万〜2,000万円（OTE仮説）", condition: "pipeline創出に加え、full-cycle closeとquota達成が必要。" },
  ], proofPoints: ["qualified meeting数とAE acceptance率", "sourced pipeline金額・受注貢献", "meeting-to-opportunity・opportunity-to-close転換率", "outbound・account-basedで再現したmessage"] };
  if (["strategic-seller", "enterprise-seller", "commercial-seller", "smb-seller"].includes(key)) {
    const settings = key === "strategic-seller"
      ? { label: "Strategic・Global Account Sales", benchmark: "Strategic / Global Account Manager", benchmarkRange: "1,000万〜2,500万円", base: "1,300万〜1,900万円", total: "2,200万〜3,500万円", current: "2,000万〜3,500万円（OTE仮説）", next: ["Global・Strategic Account Director", "Enterprise Sales Manager", "Industry Sales Lead"] }
      : key === "enterprise-seller"
        ? { label: "Enterprise Account Executive", benchmark: "Account Executive", benchmarkRange: "800万〜2,200万円", base: "1,100万〜1,600万円", total: "1,800万〜3,000万円", current: "1,800万〜3,000万円（OTE仮説）", next: ["Strategic・Global Account Executive", "Enterprise Sales Manager", "Industry・Account Director"] }
        : key === "commercial-seller"
          ? { label: "Commercial・Mid-Market AE", benchmark: "Account Executive", benchmarkRange: "800万〜2,200万円", base: "850万〜1,300万円", total: "1,300万〜2,200万円", current: "1,300万〜2,200万円（OTE仮説）", next: ["Senior Commercial・Mid-Market AE", "Enterprise Account Executive", "Commercial Sales Manager"] }
          : { label: "SMB・Growth AE", benchmark: "Account Executive", benchmarkRange: "800万〜2,200万円", base: "650万〜1,000万円", total: "1,000万〜1,700万円", current: "1,000万〜1,700万円（OTE仮説）", next: ["Senior SMB・Growth AE", "Commercial・Mid-Market AE", "SMB Sales Manager"] };
    return { ...shared, label: settings.label, benchmarkLabel: settings.benchmark, benchmarkRange: settings.benchmarkRange, baseRange: settings.base, totalRange: settings.total, payModel: "固定給＋個人quota連動の変動給。外資SaaSは50:50〜60:40を仮置するが、segment・ramp・acceleratorは個社確認が必要。", skills: [
      { title: "Executive value selling", detail: `${domain}の機能を、売上、利益、生産性、risk、time-to-valueへ翻訳する。` },
      { title: key === "smb-seller" ? "High-velocity full-cycle sales" : "Multi-stakeholder deal", detail: key === "smb-seller" ? "短いcycleでdiscovery、demo、交渉、closeを回し、conversionを改善する。" : "business owner、IT、security、finance、legal、procurementを同じ意思決定へまとめる。" },
      { title: key === "strategic-seller" ? "Multi-year account strategy" : "Territory・pipeline creation", detail: key === "strategic-seller" ? "単発受注でなく、複数部門・複数productの長期account planを作る。" : "ICP、account plan、partner、customer proofからnewとexpansionのpipelineを作る。" },
    ], nextRoles: settings.next.map((nextTitle, index) => ({ title: nextTitle, detail: /manager/i.test(nextTitle) ? "個人成果に加え、mentoring、deal review、forecast、採用・rampの実績が必要。" : index === 0 ? `現在の${settings.label}でquota達成と担当規模の拡大を再現した場合の直線的な候補。` : `特定業界または${domain}の専門性を、複数accountの勝ち方へ一般化できる場合。` })), marketBands: [
      { level: settings.label, range: settings.current, condition: "quota、平均案件単価、sales cycle、new・expansion比率で上下。" },
      { level: key === "smb-seller" || key === "commercial-seller" ? settings.next[1] : settings.next[0], range: key === "smb-seller" ? "1,300万〜2,200万円（OTE仮説）" : key === "commercial-seller" ? "1,800万〜3,000万円（OTE仮説）" : "2,000万〜3,500万円（OTE仮説）", condition: "より大きい担当規模、長いcycle、複数の意思決定者で達成を再現する。" },
      { level: key === "smb-seller" || key === "commercial-seller" ? settings.next[2] : settings.next[1], range: "2,000万〜3,500万円（マネジャーOTE仮説）", condition: "team quota、採用、coaching、forecast accuracyを持つ。" },
    ], proofPoints: ["quota達成率と達成年数", "new・expansion別の受注額と平均案件単価", "win rate・sales cycle・forecast accuracy", "executive sponsor・複数product・partnerを含む案件実績"] };
  }
  if (key === "marketing-leadership") return { ...shared, label: "Japan Marketing Leadership", benchmarkLabel: "Marketing, Enterprise Technology", benchmarkRange: "800万〜2,000万円", baseRange: "1,300万〜2,000万円", totalRange: "1,500万〜2,600万円", payModel: "固定給中心＋company・pipeline KPI bonus。予算・team・Japan planの範囲で変動。", skills: [
    { title: "Japan category・brand strategy", detail: `${domain}のglobal messageを日本のbuyer、競合、導入実績に合わせ、市場の認知と購買理由を作る。` },
    { title: "Marketing予算とrevenue貢献", detail: "brand、field、digital、partnerの予算をpipeline・受注・CACで優先順位付けする。" },
    { title: "Team・agency・globalの運営", detail: "社内team、agency、Sales、APAC・HQのresponsibilityとcadenceを揃える。" },
  ], nextRoles: [
    { title: "Head・Director of Marketing, Japan", detail: "brand、demand、digital、partner、予算・teamの全体責任を持つ。" },
    { title: "APAC Marketing Director", detail: "日本の学習を複数国へ展開し、国別leaderと予算を持つ。" },
    { title: "Chief Marketing Officer・Revenue Marketing Leader", detail: "brandとpipelineだけでなく、company growth、product marketing、customer lifecycleまで責任を広げる。" },
  ], marketBands: [
    { level: "Senior Marketing Manager・Lead", range: "1,200万〜2,200万円（Genba仮説）", condition: "複数channel、予算、pipeline貢献を持つ。" },
    { level: "Head・Director of Marketing, Japan", range: "1,600万〜3,000万円（Genba仮説）", condition: "team、Japan plan、予算、brandとdemand全体を持つ。" },
    { level: "APAC Marketing Director・CMO候補", range: "2,500万〜4,500万円（Genba仮説）", condition: "複数国、leader育成、company growthを持つ。" },
  ], proofPoints: ["marketing-sourced・influenced pipelineと受注", "予算ROI・CAC・stage conversion", "Japan発messageの認知・win rate・sales cycleへの影響", "team採用・agency運用・global資源の獲得"] };
  if (key === "marketing") return { ...shared, label: "B2B Field・Demand Marketing", benchmarkLabel: "Marketing, Enterprise Technology", benchmarkRange: "800万〜2,000万円", baseRange: "800万〜1,500万円", totalRange: "900万〜1,800万円", payModel: "固定給中心＋company・pipeline KPI連動bonusを想定。", skills: [
    { title: "Category demand creation", detail: `${domain}の外部変化と顧客課題をmessage・content・eventへ変え、qualified pipelineまで追跡する。` },
    { title: "Salesとのrevenue連携", detail: "lead数で終わらず、ICP、account、stage、conversion、sourced・influenced pipelineを共通管理する。" },
    { title: "日本市場のpositioning", detail: "campaign・event・content別の反応とwin/lossを分析し、global messageを日本の購買理由へ変える。" },
  ], nextRoles: [
    { title: "Senior Field・Demand Generation Manager", detail: "複数segmentのyearly planとsourced pipelineを持つ。" },
    { title: "Head of Marketing, Japan", detail: "brand、field、digital、partner marketingと予算・teamを持つ。" },
    { title: "Revenue Marketing・GTM Strategy", detail: "campaign経験をfunnel、capacity、pipeline modelへ広げる。" },
  ], marketBands: [
    { level: "Enterprise Technology Marketing", range: "800万〜2,000万円", condition: "担当領域、予算、sourced pipeline、英語でのglobal連携で変動。" },
    { level: "Senior・Lead", range: "1,200万〜2,200万円（Genba仮説）", condition: "複数segmentのplanと予算、pipeline貢献を持つ。" },
    { level: "Head of Marketing, Japan", range: "1,600万〜3,000万円（Genba仮説）", condition: "team、予算、brand、demand、partner marketingを統括。" },
  ], proofPoints: ["sourced・influenced pipelineと受注", "MQL-to-opportunity・opportunity-to-close転換", "campaign・event別ROI", "Japan messageがwin rate・sales cycleへ与えた変化"] };
  if (key === "operations-leadership") return { ...shared, label: "GTM・Revenue Operations Leadership", benchmarkLabel: "Consultant / Sales Managerの隣接市場", benchmarkRange: "1,200万〜3,000万円（職務接続仮説）", baseRange: "1,300万〜2,000万円", totalRange: "1,500万〜2,500万円", payModel: "固定給中心＋company・planning KPI bonus。個人commissionは通常持たない。", skills: [
    { title: "GTM資源配分とannual planning", detail: `${domain}のterritory、capacity、quota、pipeline、予算を統合し、Japan planを作る。` },
    { title: "Executive revenue cadence", detail: "forecast、attainment、hiring、riskを同じ定義で経営に示し、意思決定を早める。" },
    { title: "Ops・Enablement teamの設計", detail: "system、analytics、process、enablementの優先順位とcapacityを持つ。" },
  ], nextRoles: [
    { title: "Head of Revenue Operations, Japan", detail: "annual planning、territory、quota、compensation、systems、teamを持つ。" },
    { title: "APAC GTM Operations Director", detail: "複数国のplanningとdata definition、国別Ops leaderを持つ。" },
    { title: "GTM Strategy・Chief of Staff", detail: "revenue operationから事業計画、投資配分、経営会議の意思決定へ広げる。" },
  ], marketBands: [
    { level: "Senior GTM・Revenue Operations Manager", range: "1,200万〜2,200万円（Genba仮説）", condition: "planning、territory、quota、forecastとproject leadを持つ。" },
    { level: "Head of Revenue Operations, Japan", range: "1,800万〜3,000万円（Genba仮説）", condition: "team、annual planning、executive cadence、compensationを持つ。" },
    { level: "APAC GTM Operations Director", range: "2,300万〜4,000万円（Genba仮説）", condition: "複数国の資源配分とleader育成を持つ。" },
  ], proofPoints: ["forecast accuracy・pipeline coverage・attainment", "quota・headcount・territory配分の改善", "ramp期間・達成者比率・admin工数", "経営会議から実行までの意思決定速度"] };
  if (key === "operations") return { ...shared, label: "GTM・Revenue Operations・Enablement", benchmarkLabel: "Consultant / Enterprise Technologyの隣接市場", benchmarkRange: "800万〜2,000万円", baseRange: "850万〜1,500万円", totalRange: "950万〜1,800万円", payModel: "固定給中心＋company・team KPI bonusを想定。個人commissionは通常小さい。", skills: [
    { title: "GTM operating model", detail: `${domain}のterritory、capacity、pipeline、forecast、processをdataで設計する。` },
    { title: "Revenue analytics", detail: "activityでなくconversion、cycle、coverage、attainment、unit economicsを一貫した定義で可視化する。" },
    { title: "Cross-functional execution", detail: "Sales、Marketing、Finance、Product、Partnerの責任とcadenceを揃え、戦略を運用へ落とす。" },
  ], nextRoles: [
    { title: "Senior GTM・Revenue Operations Manager", detail: "planning、forecast、territory、compensation、systemsの複数領域を持つ。" },
    { title: "Head of Revenue Operations, Japan・APAC", detail: "team、annual planning、executive cadence、複数国を持つ。" },
    { title: "GTM Strategy・Chief of Staff", detail: "運用改善だけでなく、資源配分と事業計画の意思決定へ広げる。" },
  ], marketBands: [
    { level: "GTM・Revenue Operations", range: "900万〜1,800万円（Genba仮説）", condition: "scope、データ・CRM専門性、planning責任で変動。" },
    { level: "Senior・Lead", range: "1,200万〜2,200万円（Genba仮説）", condition: "annual planning、territory、quota、compensationまで持つ。" },
    { level: "Head of RevOps・GTM Strategy", range: "1,800万〜3,000万円（Genba仮説）", condition: "team、APAC scope、経営会議、事業計画を持つ。" },
  ], proofPoints: ["forecast accuracy・pipeline coverage", "sales cycle・stage conversion・attainmentの改善", "planning・reporting・admin工数の削減", "ramp期間・達成者比率・data quality"] };
  if (key === "delivery" || key === "delivery-leadership") {
    const leader = key === "delivery-leadership";
    return { ...shared, label: leader ? "Professional Services・Delivery Leadership" : "Professional Services・Implementation", benchmarkLabel: "Consultant / IT Project Manager", benchmarkRange: "800万〜2,400万円", baseRange: leader ? "1,300万〜2,000万円" : "850万〜1,500万円", totalRange: leader ? "1,500万〜2,600万円" : "900万〜1,700万円", payModel: "固定給中心＋company・project KPI bonusを想定。稼働率・travel・専門資格も影響。", skills: [
    { title: "Outcome-led delivery", detail: `${domain}のscope、baseline、success criteria、timeline、riskを定め、導入を業務成果まで進める。` },
    { title: "Program・partner orchestration", detail: "顧客、社内専門家、SI partnerの責任・依存関係・escalationを管理する。" },
    { title: "再利用可能な実装標準", detail: "個社対応をtemplate、governance、enablementへ変え、品質とdelivery capacityをscaleさせる。" },
    ], nextRoles: leader ? [
      { title: "Director・VP of Professional Services", detail: "複数team、utilization、margin、quality、採用を持つ。" },
      { title: "Japan Customer Delivery Leader", detail: "Servicesに加えSupport、CS、Partner deliveryの共通KPIを持つ。" },
      { title: "APAC Services Leader", detail: "複数国のcapacity、partner model、収益性を再現する。" },
    ] : [
      { title: "Principal Consultant・Program Lead", detail: "より大きいscope、複数workstream、executive steeringを持つ。" },
      { title: "Professional Services Manager・Director", detail: "team、utilization、quality、partner capacity、収益性を持つ。" },
      { title: "Customer Transformation・Solution Architecture", detail: "deliveryの実績を上流のbusiness case・architecture設計へ広げる。" },
    ], marketBands: leader ? [
      { level: "Services Manager・Director", range: "1,600万〜3,000万円（Genba仮説）", condition: "team、utilization、margin、partner deliveryを持つ。" },
      { level: "Japan Customer Delivery Leader", range: "2,000万〜3,500万円（Genba仮説）", condition: "Services、Support、CSのcross-functional KPIを持つ。" },
      { level: "APAC Services Leader", range: "2,500万〜4,500万円（Genba仮説）", condition: "複数国、収益性、leader育成を持つ。" },
    ] : [
      { level: "Consultant・Implementation", range: "800万〜2,000万円", condition: "専門性、project規模、customer-facing、travelで変動。" },
      { level: "IT Project Manager・Principal", range: "1,200万〜2,400万円", condition: "複数workstream、大型顧客、risk・予算・品質を持つ。" },
      { level: "Services Manager・Director", range: "1,600万〜3,000万円（Genba仮説）", condition: "team、utilization、margin、partner deliveryを持つ。" },
    ], proofPoints: ["time-to-live・納期・予算遵守", "PoC-to-production・adoption・利用定着", "不具合・escalation・手戻りの削減", "template再利用・partner enablement・utilization"] };
  }
  if (key === "technical-specialist") {
    const value = `${job.title} ${job.segment}`.toLowerCase();
    const scientist = /(data scientist|applied ai|applications scientist)/.test(value);
    const valueAdvisor = /(business value|transformation architect|outcomes architect)/.test(value);
    const productGtm = /(product gtm)/.test(value);
    const fieldEngineer = /(field engineer)/.test(value);
    const roleLabel = scientist ? "Applied AI・Customer Data Science" : valueAdvisor ? "Value Consulting・Transformation Architecture" : productGtm ? "Product GTM Specialist" : fieldEngineer ? "Customer・Field Engineering" : "Technical Specialist・Lead";
    const next = scientist
      ? ["Principal Applied Scientist・Data Scientist", "AI Solutions・Data Science Lead", "AI Product・Decisioning Strategy"]
      : valueAdvisor
        ? ["Principal Value Consultant・Transformation Architect", "Value Consulting Manager", "Field CTO・Business Transformation"]
        : productGtm
          ? ["Principal Product GTM Specialist", "Product Marketing・GTM Lead", "Product Strategy・Business Development"]
          : fieldEngineer
            ? ["Principal Field・Customer Engineer", "Customer Engineering Manager", "Product・Solutions Engineering"]
            : ["Principal Technical Specialist", "Specialist Practice Lead", "Product・Field CTO Strategy"];
    return { ...shared, label: roleLabel, benchmarkLabel: "Consultant / Solutions Architect / AI専門職", benchmarkRange: "800万〜2,500万円", baseRange: "1,000万〜1,700万円", totalRange: "1,100万〜2,100万円", payModel: "固定給中心＋案件・product・company KPI bonusを想定。sales quotaの有無でpay mixが大きく変わる。", skills: [
      { title: scientist ? "Model・dataを顧客KPIへつなぐ力" : valueAdvisor ? "技術投資をbusiness caseへ変える力" : "専門技術を意思決定へ翻訳する力", detail: `${domain}の技術指標を、顧客の売上、cost、risk、speed、adoptionの指標へ変える。` },
      { title: scientist ? "Production AIの検証と運用" : "Complex discovery・solution design", detail: "現行環境、data、workflow、security、success criteriaを分解し、検証から本番までの条件を設計する。" },
      { title: "FieldからProductへの学習loop", detail: "個社要件、再利用可能なpattern、roadmap gapを分け、製品とGTMへ返す。" },
    ], nextRoles: next.map((nextTitle, index) => ({ title: nextTitle, detail: index === 0 ? `${roleLabel}の専門性を高難度案件と再利用可能な標準で証明する。` : index === 1 ? "案件成果に加え、専門家のcapacity、coaching、quality、採用を持つ。" : "customer insightをproduct roadmap・市場戦略・executive advisoryへ一般化できる場合。" })), marketBands: [
      { level: roleLabel, range: "1,100万〜2,100万円（総現金仮説）", condition: "専門性、customer-facing scope、sales quotaの有無、production責任で変動。" },
      { level: next[0], range: "1,400万〜2,500万円（Genba仮説）", condition: "高難度案件、標準化、複数顧客への再現を持つ。" },
      { level: next[1], range: "1,800万〜3,000万円（Genba仮説）", condition: "team、専門practice、案件優先順位、product影響を持つ。" },
    ], proofPoints: ["model・architecture・workflowが改善した顧客KPI", "PoC-to-production・enablement・adoption", "技術評価期間・実装工数・errorの改善", "複数案件で再利用されたasset・product feedback"] };
  }
  if (key === "support-leadership") return { ...shared, label: "Technical Support Leadership", benchmarkLabel: "Application Support Team Lead / IT Manager", benchmarkRange: "800万〜1,600万円", baseRange: "1,000万〜1,600万円", totalRange: "1,100万〜1,900万円", payModel: "固定給中心＋SLA・quality・company KPI bonus。shift・待機・エスカレーション責任は個別確認。", skills: [
    { title: "Support capacity・SLA設計", detail: `${domain}のticket量、severity、shift、skill mixから必要capacityを設計する。` },
    { title: "Incident・escalation leadership", detail: "重大障害の顧客影響、復旧、root cause、executive communicationを統括する。" },
    { title: "採用・育成・knowledge経営", detail: "専門性の採用とramp、knowledge・automationで、品質を落とさずscaleする。" },
  ], nextRoles: [
    { title: "Director of Technical Support", detail: "複数team、SLA、quality、採用、予算を持つ。" },
    { title: "Japan Customer Reliability・Support Leader", detail: "Supportに加えTAM、incident response、customer communicationの共通KPIを持つ。" },
    { title: "APAC Support Engineering Leader", detail: "複数国のfollow-the-sun運用とleader育成を持つ。" },
  ], marketBands: [
    { level: "Application Support Team Lead", range: "800万〜1,400万円", condition: "単一teamのSLA、quality、shift、育成を持つ。" },
    { level: "Support Engineering Manager・Director", range: "1,300万〜2,500万円（Genba仮説）", condition: "複数team、重大障害、採用、capacityを持つ。" },
    { level: "APAC Support Leader", range: "2,000万〜3,500万円（Genba仮説）", condition: "複数国、follow-the-sun、leader育成、予算を持つ。" },
  ], proofPoints: ["SLA・MTTR・初回解決率", "severity別backlog・escalation・再発の削減", "採用数・ramp期間・attrition", "knowledge・automationで削減した工数"] };
  const isSupport = key === "support";
  return { ...shared, label: isSupport ? "Technical Support・Customer Engineering" : "Technical Advisor・Specialist", benchmarkLabel: isSupport ? "Application Support" : "Consultant / Solutions Architect", benchmarkRange: isSupport ? "600万〜1,600万円" : "800万〜2,200万円", baseRange: isSupport ? "700万〜1,200万円" : "900万〜1,600万円", totalRange: isSupport ? "750万〜1,350万円" : "1,000万〜1,900万円", payModel: "固定給中心＋company・quality KPI bonusを想定。shift・待機・専門資格手当は個別確認。", skills: [
    { title: isSupport ? "Production troubleshooting" : "Executive・market advisory", detail: isSupport ? `${domain}の顧客環境で事象を再現し、root cause、復旧、再発防止をつなぐ。` : `${domain}の技術・riskを、経営層と市場が意思決定できる言葉へ変える。` },
    { title: "Cross-functional escalation", detail: "customer、Sales、Product、Engineering、Securityの責任を切り分け、事実と優先順位を揃える。" },
    { title: "Knowledgeの資産化", detail: "個別事象をplaybook、FAQ、product feedback、trainingへ変える。" },
  ], nextRoles: isSupport ? [
    { title: "Senior・Lead Technical Support Engineer", detail: "高難度incident、root cause、後進育成を持つ。" },
    { title: "Support Engineering Manager", detail: "teamのSLA、quality、capacity、escalation、採用を持つ。" },
    { title: "TAM・Customer Reliability", detail: "受動的な問題解決から、予防、architecture、adoption、executive communicationへ広げる。" },
  ] : [
    { title: "Principal Advisor・Field CTO", detail: "個別案件を越え、重要顧客と市場のcategory educationを持つ。" },
    { title: "Product・Security Strategy", detail: "市場の課題をroadmap、policy、solution設計へ一般化する。" },
    { title: "Specialist Team Manager", detail: "専門家のcapacity、品質、市場影響、採用・育成を持つ。" },
  ], marketBands: [
    { level: isSupport ? "Application・Technical Support" : "Technical Advisor・Specialist", range: isSupport ? "600万〜1,600万円" : "900万〜2,000万円（Genba仮説）", condition: "専門性、顧客impact、待機・shift、英語での本社連携で変動。" },
    { level: "Senior・Principal", range: isSupport ? "900万〜1,800万円（Genba仮説）" : "1,300万〜2,500万円（Genba仮説）", condition: "高難度案件、標準化、executiveまたはproduct impactを持つ。" },
    { level: "Manager・Field CTO", range: "1,600万〜3,000万円（Genba仮説）", condition: "team、品質、市場・productへの影響を持つ。" },
  ], proofPoints: isSupport ? ["SLA・MTTR・初回解決率", "escalation・再発・incident影響の削減", "knowledge・automationで削減した工数", "高難度環境のroot-cause実績"] : ["executive briefing・重要案件の貢献", "市場・customer insightからのproduct改善", "content・event・mediaによるcategory impact", "再利用されたadvisory・assessment標準"] };
}

function normalizeJapanese(value: string) {
  return value
    .replaceAll("Tokyo, Hanzomon", "東京・半蔵門")
    .replaceAll("Tokyo, Japan", "東京・日本")
    .replaceAll("Osaka, Japan", "大阪・日本")
    .replaceAll("Tokyo Prefecture", "東京都")
    .replace(/^Tokyo$/, "東京")
    .replace(/^Japan$/, "日本");
}

export function getJobRoleMarketArchetype(job: JobLike) {
  return roleArchetype(job);
}

function roleReputationHypothesis(role: RoleMarketProfile, companyName: string) {
  const key = role.key;
  if (["country-leadership", "sales-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "で活躍しやすいのは、個人の受注力よりも、適正なquota、territory、採用・ramp、forecastをteam単位で整えられる人。",
    caution: "【Genba仮説】面接ではJapan planの決定権、teamの達成者比率、未充足headcount、HQとの意思決定、直属上司のcoaching実績を数字で確認すべき。",
  };
  if (["strategic-seller", "enterprise-seller", "commercial-seller", "smb-seller", "account-manager", "development", "development-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、" + companyName + "の知名度より、良質なterritory、現実的なquota、十分なpipeline、managerのdeal coachingが揃うかが活躍確率を左右する。",
    caution: "【Genba仮説】面接では過去4四半期のquota達成者比率、現実のpipeline source、territory変更、失注理由、ramp中の達成定義、managerごとの離職率を分けて聞くべき。",
  };
  if (["presales", "presales-leadership", "technical-specialist", "technical-advisor"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、AEと対等にdiscoveryとsuccess criteriaを設計し、PoCを受注・本番化まで進められる環境なら市場価値を伸ばしやすい。",
    caution: "【Genba仮説】面接ではSE一人当たりのAE数・同時PoC数、demo資産、PoC-to-close、失注時の技術責任、Productへのfeedback経路、出張負荷を確認すべき。",
  };
  if (["customer", "customer-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、問合せ対応ではなく、担当portfolioのadoption・renewal・expansionと顧客KPIを自分で動かせる設計なら実績を転用しやすい。",
    caution: "【Genba仮説】面接では担当ARR・社数、GRR・NRR、renewalの契約責任、expansion credit、escalation比率、導入後のServices・Support境界を確認すべき。",
  };
  if (["delivery", "delivery-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、個別導入をtemplate・partner enablement・governanceに変え、納期と顧客成果の両方を再現できる人が活躍しやすい。",
    caution: "【Genba仮説】面接ではutilization目標、同時project数、travel、scope変更の責任、無償支援の比率、partner capacity、導入後の引継ぎを確認すべき。",
  };
  if (["support", "support-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、incident解決をknowledge・product改善・予防運用に変えられるなら、単なるticket処理を超えた実績になる。",
    caution: "【Genba仮説】面接ではshift・待機、severity別SLA、backlog、escalation比率、Engineeringの応答責任、customer abuse対策、自動化で減らした工数を確認すべき。",
  };
  if (["partner", "partner-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、partner数でなく、sourced・相互pipeline、delivery capacity、win rateを作れる環境なら実績を証明しやすい。",
    caution: "【Genba仮説】面接ではpartner-sourced・influencedのcredit定義、案件登録、direct salesとの競合、active partner数、certificationと導入品質を確認すべき。",
  };
  if (["marketing", "marketing-leadership"].includes(key)) return {
    positive: "【Genba仮説】" + role.label + "では、event数ではなく、Japan messageとsourced・influenced pipelineの両方を作れるかが成長機会になる。",
    caution: "【Genba仮説】面接では予算決定権、MQL以降の責任、SalesとのSLA、agency依存、HQ approval、campaign別pipelineとROIを確認すべき。",
  };
  return {
    positive: "【Genba仮説】" + role.label + "では、個人の作業を再利用可能なprocess・data・enablementに変え、他部門の成果まで動かせる環境かが活躍可能性を左右する。",
    caution: "【Genba仮説】面接では目標KPI、意思決定権、stakeholder、未整備process、過去の成功者の共通点、managerのfeedback・昇進実績を確認すべき。",
  };
}

export function strengthenRolloutBatchOneJob<T extends JobLike>(job: T): T {
  if (!batchSlugs.has(job.companySlug)) return job;
  const company = companyResearch[job.companySlug];
  const role = profileForRole(job, company.domain);
  const review = COMPANY_GLOBAL_REVIEW_PROFILES[job.companySlug];
  const reputationHypothesis = roleReputationHypothesis(role, company.name);
  const sourceList = [
    { label: `${company.name} 公式Career・会社情報`, url: company.officialUrl, detail: "価値観、組織、働き方、職務を確認。会社発信であり、配属先の体験を保証しない。" },
    { label: job.source.label, url: job.source.url, detail: "対象職種の責任、要件、勤務地、公開されている条件を確認。" },
  ];
  if (company.communityUrl && company.communityLabel) sourceList.push({ label: company.communityLabel, url: company.communityUrl, detail: "匿名・自己申告または製品利用者の公開集計。日本の対象職種へ一般化しない。" });
  if (review && !sourceList.some((source) => source.url === review.source.url)) {
    sourceList.push({
      label: review.source.label,
      url: review.source.url,
      detail: review.snapshot + "。対象範囲は" + review.scope + "。日本の配属先の事実として一般化しない。",
    });
  }
  const compensation = officialCompensation[job.id];
  const hypothesisCompensation = {
    researchedAt: "2026-08-18",
    confidence: "中" as const,
    headline: `${role.label}の市場比較は年${role.totalRange}を起点とする`,
    summary: `当該企業の公開提示額ではない。2026年の東京Enterprise Technology市場における${role.benchmarkLabel}の公開benchmark（${role.benchmarkRange}）を母数に、求人の職種、seniority、担当segment、quota・技術・portfolio責任を掛け合わせた【Genba仮説】。`,
    breakdown: [
      { label: "推定固定給", value: role.baseRange, status: "Genba仮説", detail: `2026年の職種別benchmarkと、${job.title}のseniority・責任範囲から算定。` },
      { label: "推定OTE・総現金報酬", value: role.totalRange, status: "Genba仮説", detail: "目標達成時の変動給またはbonusを含む比較起点。equityは含めない。" },
      { label: "Pay modelの前提", value: role.payModel, status: "要面接確認", detail: "quota、ramp、credit、accelerator、bonus、equityは企業・gradeごとに異なる。" },
    ],
    readerTake: `オファーでは固定給だけでなく、${role.payModel} あわせてquota、担当規模、ramp保証、達成者比率、accelerator、equity、退職時の権利を同じ表で比較する。`,
    sources: [
      { label: job.source.label, url: job.source.url, detail: `公式求人から${job.title}の職種、seniority、担当領域、目標責任を算定inputとして確認。` },
      { label: "Morgan McKinley 2026 Japan Salary Guide — Sales & Marketing", url: compensationBenchmarkUrl, detail: "東京のEnterprise Technology職における職種別Low・Median・Highを市場benchmarkに使用。個社の提示額ではない。" },
      ...(role.key === "delivery" || role.key === "support" ? [{ label: "Morgan McKinley 2026 Japan Salary Guide — Technology", url: technologyBenchmarkUrl, detail: "IT Project Manager・Application Support等のTokyo市場値をtechnical・delivery職の補助benchmarkに使用。" }] : []),
    ],
  };
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
    lastChecked: job.lastChecked,
    compensationReality: compensation ? compensation.headline : `日本向けの公開報酬レンジは確認できない。${role.label}の市場benchmarkから【Genba仮説】を算定。`,
    compensationResearch: compensation ? {
        researchedAt: "2026-08-18",
        confidence: "高" as const,
        headline: compensation.headline,
        summary: compensation.summary,
        breakdown: compensation.breakdown,
        readerTake: "公開レンジだけで判断せず、quota、ramp、達成率、credit、accelerator、equityを同じoffer条件として確認する。",
        sources: [{ label: job.source.label, url: job.source.url, detail: "公式求人に掲載された日本向け報酬レンジを確認。" }],
      } : hypothesisCompensation,
    reputationResearch: {
      researchedAt: "2026-08-18",
      summary: review
        ? company.name + "の日本の対象職種だけの十分なreview母数はないため、" + review.source.label + "の" + review.snapshot + "を参考にした。その上で【Genba仮説】として、" + role.label + "の活躍条件と面接で検証すべき論点まで導いた。"
        : company.name + "の公開情報を、【Genba仮説】として" + role.label + "の活躍条件と面接の検証論点へ落とし込んだ。",
      positiveTopics: [
        ...company.positive.map((topic) => "【公開事実】" + topic),
        ...(review ? ["【海外レビュー参考】" + review.positive + "。"] : []),
        ...(!review && company.communityUrl ? ["【海外レビュー参考】海外の公開employee review集計は国・職種・時期が混在するため、個別評価ではなく面接論点を作る参考に限定する。"] : []),
        reputationHypothesis.positive,
      ],
      negativeTopics: [
        ...company.negative.map((topic) => "【公開事実】" + topic),
        ...(review ? ["【海外レビュー参考】" + review.caution + "。"] : []),
        ...(!review && company.communityUrl ? ["【海外レビュー参考】日本の対象職種だけの十分な母数は確認できず、海外集計の評点や個別投稿を配属先へ一般化しない。"] : []),
        reputationHypothesis.caution,
      ],
      caveat: "匿名・自己申告のreviewはself-selection biasがあり、国、時期、職種、managerの違いを分離できない。" + (review?.scope ?? "外部employee reviewの十分な母数は未確認") + "。ここでの結論は配属先の事実ではなく、面接で数字と実例を引き出すための仮説として使う。",
      sources: sourceList,
    },
    marketValueResearch: {
      headline: `${role.label}として${company.domain}の成果を再現できるかが市場価値を決める`,
      summary: `【Genba仮説】${job.title}の市場価値は、社名や在籍年数ではなく、${role.label}固有の責任と${company.domain}の専門性を、数字で証明できたかで決まる。次の役割と報酬は、求人の担当segment・seniorityと2026年のTokyo Enterprise Technology市場benchmarkから個別算定した。`,
      skills: role.skills,
      nextRoles: role.nextRoles,
      marketBands: role.marketBands,
      proofPoints: role.proofPoints,
      caveat: `報酬帯は当該企業の公式提示額ではない。Morgan McKinley 2026 Japan Salary Guideの東京職種別benchmarkを母数に、${job.title}のseniority、segment、目標責任を反映した【Genba仮説】。実際のオファーはquota、ramp、pay mix、達成率、equity、英語、採用時の市場で変わる。`,
    },
  };
}
