import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

function patchAtlassian(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "atlassian",
    leaderName: "Mike Cannon-Brookes / Scott Farquhar",
    leaderLabel: "共同創業者",
    leaderUrl: "https://www.atlassian.com/company/people",
    localName: "スチュアート・アラン・ハリントン",
    localLabel: "アトラシアン株式会社 代表取締役（gBizINFO掲載）",
    localUrl: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7011001095419",
    companyId: "atlassian-company",
    jobId: "atlassian-job",
    customersId: "atlassian-customers",
    externalId: "atlassian-external",
    financeId: "atlassian-finance",
    targets: ["最高情報責任者・最高デジタル責任者", "開発・Platform Engineering", "IT運用・Service Management", "製品・プロジェクト・PMO", "Knowledge・業務部門"],
    heroSummary: "開発、IT運用、project、knowledgeが別々のtoolと会議に分かれると、進捗、判断理由、incident、顧客要望のcontextが切れる。AtlassianはJira、Confluence、Jira Service Management、LoomとAIを一つのSystem of Workへつなぎ、handoff、待ち時間、会議、復旧、delivery速度を改善する。",
    competitors: "Microsoft、ServiceNow、Asana、monday.com、Notion、GitHub、BMC、個別project・knowledge tool",
    feature: "Jira、Confluence、Jira Service Management、LoomとAIでdevelopment、service、knowledge、project workをつなぐ。",
    advantage: "developer workflowを起点にbusiness・IT service・knowledgeまで広がるdata・workflow・ecosystemと、35万社超の導入基盤。",
    benefit: "cycle time、handoff、meeting hours、self-service、MTTR、adoptionを減らし、team間の仕事をbusiness outcomeへ結びつけられる可能性がある。",
    evidence: "Royal Caribbeanは年800時間超・50万ドルのconsulting cost削減、Lumenはthroughput 200%増を公表。国内ではKADOKAWA等の事例を公式掲載。",
    marketVerdict: "結論：直近12カ月売上66億ドル、顧客35万社超、日本法人での想定従業員数77人、日本CS採用は強い。一方、日本売上・顧客数・role別達成率は非公開で、既存suiteとの重複とadoption責任を見極める必要がある。",
    marketParagraphs: [
      "AIとcloud toolが増えるほど、team間のcontext、権限、decision、work itemをつなぐoperating layerの重要性が高まる。",
      "Atlassianはdeveloper issue trackingからknowledge、ITSM、video、AIへ広がり、個別team toolからenterprise System of Workへ予算範囲を拡張している。",
      "Genba分析：一つのcross-functional workflowでcycle time、handoff、meeting、self-service、MTTR、adoptionをbaseline比較し、integrationとadministrationを含む3年TCOで選定する。",
    ],
    cultureHeadline: "Team Anywhereとopen companyの原則を掲げるglobal組織。日本CS求人の勤務条件は対象求人と面接で確認する。",
    classification: "ハイブリッド",
    displayLabel: "横浜／Team Anywhere",
    officeDays: "対象求人に固定日数の明記なし",
    remoteOnly: "居住・team条件により異なる",
    flexibility: "customer・team・roleに応じた運用を面接で確認",
    goodFor: ["developer・IT・businessを横断したい", "post-salesで価値実現を定量化したい", "大規模customerのadoptionを動かしたい"],
    cautionFor: ["単一機能の短期導入だけを望む", "利用率だけでCS成果を完結したい", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["Customer portfolio", "Strategic customerのsuccess planを担当。", "担当社数、ARR、industry、renewal時期、new・existing比率は？"],
      ["目標", "adoptionとvalue realizationを担う。", "NRR、renewal、expansion、adoption、executive engagementのweightと達成率は？"],
      ["報酬", "日本向け数値報酬は非公開。", "base、bonus、equity、ramp、目標未達時の運用は？"],
      ["協働", "Sales・Solutions・Support・Productと連携。", "renewal・expansionのownerとcredit、escalation時のdecision rightは？"],
      ["キャリア", "成熟したglobal CS。", "直近24カ月の昇進・異動・離職と、次levelの共通成果は？"],
    ],
  }));
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "2026年6月末（2026-08-18確認）",
      metrics: [
        { label: "直近12カ月売上", value: "66億米ドル（約1兆362億円）", change: "+26%", interpretation: "cloud・AI・enterprise拡張を含む全社成長。", sourceId: "atlassian-finance" },
        { label: "顧客", value: "35万社超", change: "Fortune 500の85%超", interpretation: "広い顧客基盤。日本単体の構成は非公開。", sourceId: "atlassian-finance" },
      ],
      growthDrivers: [{ title: "System of WorkとAI", evidence: "development、service、knowledge、work managementをAI付きplatformへ統合。", japanMeaning: "日本CS roleは契約後のadoptionとvalue realizationを担う。", sourceIds: ["atlassian-finance", "atlassian-job"] }],
      risks: [{ title: "suite競争・cloud移行・価値実現", disclosedRisk: "Microsoft、ServiceNow、specialist toolとの競争とplatform重複。", companyResponse: "System of Work、cloud、AI、ecosystemを拡張。", genbaRead: "seat増よりworkflow成果、migration、adoption、3年TCOを検証する。", sourceIds: ["atlassian-finance", "atlassian-company"] }],
      japanCommitment: { verdict: "2013年法人、横浜拠点、国内事例、Senior CSM採用、日本法人での想定従業員数77人を確認", summary: "国内基盤は確認できるが日本売上、顧客数、CS portfolio・達成率は非公開。", signals: [{ year: "2026", title: "Senior CSM採用", detail: "日本語対応のEnterprise Customer Successを横浜で募集。", sourceIds: ["atlassian-job"] }], unknowns: ["日本売上・ARR・顧客数", "CS portfolio・目標・達成率", "team別昇進・離職"] },
      scenarios: [
        { scenario: "基本", title: "Cloud・AI adoption拡大", body: "既存顧客でJira・Confluence・JSM・AIの利用とvalue realizationが進む。" },
        { scenario: "上振れ", title: "System of Work標準化", body: "developmentからbusiness・serviceまで共通platformになる。" },
        { scenario: "下振れ", title: "suite重複と移行疲れ", body: "Microsoft等のbundle、cloud migration、adoption不足で拡張が鈍る。" },
      ],
      sourceIds: ["atlassian-finance", "atlassian-company", "atlassian-job", "atlassian-customers"],
    };
  }
}

function patchDynatrace(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "dynatrace",
    leaderName: "Rick McConnell",
    leaderLabel: "CEO",
    leaderUrl: "https://www.dynatrace.com/company/leadership/",
    localName: "確認不能",
    localLabel: "日本事業責任者",
    localUrl: "https://careers.dynatrace.com/locations/tokyo/",
    companyId: "dynatrace-company",
    jobId: "dynatrace-job",
    customersId: "dynatrace-customers",
    externalId: "dynatrace-external",
    financeId: "dynatrace-finance",
    targets: ["最高情報責任者・最高技術責任者", "SRE・Cloud・基盤Engineering", "Application開発", "Security・Risk管理", "Digital Business・顧客体験"],
    heroSummary: "cloud、container、SaaS、AIが増えるとalertとtelemetryは増えても、顧客影響とroot causeが分からず、複数teamに調査が分断して時間を使う。Dynatraceはapplication、infrastructure、log、user experience、securityをAIで相関し、障害原因、事業影響、automationを同じ運用へつなぐ。",
    competitors: "Datadog、New Relic、Splunk、Elastic、AppDynamics、cloud-native monitoring、open-source observability",
    feature: "OneAgent、Grail、Davis AIでmetric、log、trace、topology、user experience、securityを一つのcontextへ統合する。",
    advantage: "automatic discovery・topologyとcausal AIを軸に、observability、business analytics、application security、AI workloadを同じplatformで扱う。",
    benefit: "MTTD・MTTR、alert noise、調査工数、release risk、digital lossを減らし、system reliabilityを事業KPIへ結びつけられる可能性がある。",
    evidence: "富士通は1,000 VMで障害調査を1日超から1〜2時間へ短縮し、年約9,960時間削減見込み。Coca-Cola HBCはMTTR 30%短縮を公表。",
    marketVerdict: "結論：Q1売上16%増、ARR21.36億ドル、日本法人での想定従業員数41人、日本Enterprise SE採用は堅調。一方、日本売上・顧客数・quotaは非公開で、telemetry costと既存tool重複を含むtechnical・business proofが必要。",
    marketParagraphs: [
      "cloud-nativeとAI workloadはsystem dependency、data量、failure modeを増やし、reliabilityとsecurityを顧客体験・売上へ結びつける必要がある。",
      "DynatraceはAPMからfull-stack observability、log、security、business analytics、AI observabilityへ広がり、operations dataの予算範囲を拡張している。",
      "Genba分析：重要serviceでMTTD、MTTR、alert、調査工数、SLO、release failure、digital conversionをbaseline比較し、ingestとtool consolidationを含む3年TCOで選定する。",
    ],
    cultureHeadline: "Flex・Remote optionとcontinuous learningを掲げるglobal組織。東京求人の具体的勤務条件は対象求人で確認する。",
    classification: "ハイブリッド",
    displayLabel: "東京／Flex",
    officeDays: "対象求人に固定日数の明記なし",
    remoteOnly: "Remote専任ではない",
    flexibility: "顧客workshop・team collaborationに応じて運用",
    goodFor: ["技術をbusiness valueへ翻訳したい", "observability・security・AIを横断したい", "Enterprise PoVを設計したい"],
    cautionFor: ["製品demoだけに専念したい", "usage・telemetry economicsを扱いたくない", "日本のquota・達成率開示を必須にする"],
    unresolved: [
      ["Territory", "Enterprise顧客のtechnical winを担当。", "担当industry・account、new・existing比率、SE:AE比、同時PoV数は？"],
      ["目標", "discovery、PoV、architecture、valueを担う。", "technical win、revenue influence、PoV conversion、cycleの目標と達成率は？"],
      ["報酬", "日本向け数値報酬は非公開。", "base、bonus・variable、equity、ramp、目標未達時の運用は？"],
      ["Delivery", "AE・partner・Customer teamと連携。", "PoV後のimplementation、adoption、supportのownerとcapacityは？"],
      ["キャリア", "technical・value skillを横断。", "直近24カ月の昇進・異動・離職、Principal・Managerへの共通成果は？"],
    ],
  }));
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "Q1 FY2027（2026-08-18確認）",
      metrics: [
        { label: "ARR", value: "21.36億米ドル（約3,353.5億円）", change: "+17%", interpretation: "subscription基盤の拡大。", sourceId: "dynatrace-finance" },
        { label: "売上", value: "5.55億米ドル（約871.4億円）", change: "+16%", interpretation: "constant currencyでは15%増。", sourceId: "dynatrace-finance" },
      ],
      growthDrivers: [{ title: "ObservabilityからAI reliabilityへ", evidence: "full-stack observability、security、business、AI workloadを統合。", japanMeaning: "東京でEnterprise Solutions Engineerを採用しtechnical coverageを強化。", sourceIds: ["dynatrace-finance", "dynatrace-job"] }],
      risks: [{ title: "競争・consumption・platform consolidation", disclosedRisk: "Observability市場の競争、customer consumption、cloud・open-source代替。", companyResponse: "DPS consumption model、Grail、AI・securityのplatform拡張。", genbaRead: "data量よりMTTR・business impact・tool TCOを同条件で検証する。", sourceIds: ["dynatrace-finance", "dynatrace-company"] }],
      japanCommitment: { verdict: "東京法人、国内事例、Enterprise SE採用、日本法人での想定従業員数41人を確認", summary: "local technical capacityは確認できるが、日本売上、顧客数、team別quota・達成率は非公開。", signals: [{ year: "2026", title: "Enterprise SE採用", detail: "東京でJapan Enterprise Solutions Engineerを募集。", sourceIds: ["dynatrace-job"] }], unknowns: ["日本売上・ARR・顧客数", "SE:AE比・PoV conversion", "職種別quota・昇進・離職"] },
      scenarios: [
        { scenario: "基本", title: "Observability consolidation", body: "full-stack observabilityとlog・securityの統合が進む。" },
        { scenario: "上振れ", title: "AI reliability control plane", body: "AI workloadのquality・cost・securityを既存system contextと一体管理する。" },
        { scenario: "下振れ", title: "tool・cost重複", body: "cloud標準、Datadog・Splunk等との重複とtelemetry costで拡張が鈍る。" },
      ],
      sourceIds: ["dynatrace-finance", "dynatrace-company", "dynatrace-job", "dynatrace-customers"],
    };
  }
}

function patchVercel(intelligence: CompanyPublicIntelligence) {
  applyStandard(intelligence, buildCompactPatch({
    slug: "vercel",
    leaderName: "Guillermo Rauch",
    leaderLabel: "Founder・CEO",
    leaderUrl: "https://vercel.com/blog/series-f",
    localName: "確認不能",
    localLabel: "日本法人・日本責任者",
    localUrl: "https://vercel.com/careers",
    companyId: "vercel-company",
    jobId: "vercel-careers",
    customersId: "vercel-customers",
    externalId: "vercel-external",
    financeId: "vercel-growth",
    targets: ["最高技術責任者・VP Engineering", "Platform・開発者体験", "Digital Product・Commerce責任者", "AI Application開発team", "Security・Cloud基盤"],
    heroSummary: "web・AI applicationのrelease頻度が上がると、framework、preview、CI/CD、compute、CDN、security、model接続のhandoffが増え、開発速度とproduction責任が分断する。Vercelはbuild、deploy、global delivery、AI stackを一つにつなぎ、release lead time、performance、developer工数、AI体験を改善する。",
    competitors: "AWS、Cloudflare、Netlify、Render、Google Cloud、Microsoft Azure、内製platform、Lovable、Replit",
    feature: "Next.js、Vercel platform、AI SDK・Gateway、v0、global compute・edgeでweb・AI applicationをbuild・deploy・operateする。",
    advantage: "open-source framework adoption、framework-aware platform、previewからglobal productionまでのdeveloper experience、AI application stackの一体性。",
    benefit: "deploy lead time、build time、performance、developer工数、incident、AI latency・costを減らし、ideaからproductionまでを短縮できる可能性がある。",
    evidence: "Roxはdeploy 3〜5分、P95 load 2.5倍改善、AI featureを数週間でrelease。Code and Theoryはprototype時間75%短縮を公表。国内named caseは未確認。",
    marketVerdict: "結論：93億ドル評価、Next.js年5億download超、Tokyo・Osaka region、APAC採用は強い。一方、日本法人・office・専任求人・国内case・local supportは未確認で、日本未進出として0人表示を継続する。",
    marketParagraphs: [
      "AI applicationはmodel、agent、frontend、security、global infrastructureを同時に変え、prototype速度とproduction reliabilityの両立が投資課題になる。",
      "Vercelはfrontend cloudからAI SDK、Gateway、Sandbox、Agent、v0へ広がり、developer起点のadoptionをEnterprise AI platformへ拡張している。",
      "Genba分析：一つのapplicationでdeploy、performance、developer hours、incident、AI latency・cost、3年TCOを比較し、Japan support・data・exit planを進出条件にする。",
    ],
    cultureHeadline: "Ship速度とdeveloper empathyを重視する米欧・Australia中心の成長組織。現行Japan求人0件で日本固有の働き方は確認不能。",
    classification: "未確認",
    displayLabel: "日本未進出・現行Japan求人なし",
    officeDays: "対象求人なし",
    remoteOnly: "対象求人なし",
    flexibility: "海外・APAC求人の条件を将来の日本求人へ転用しない",
    goodFor: ["AI・developer platformを先回りしたい", "PLGからEnterpriseへの拡張を作りたい", "将来のJapan country buildを観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内support・契約・data条件を必須にする", "hyperscaler以外を追加したくない"],
    unresolved: [
      ["Japan entry", "APAC hiringと国内regionはあるがJapan求人0件。", "Japan launchのARR・顧客・partner条件と最初のlocal podは？"],
      ["Private economics", "funding・valuation・downloadは公開。", "recognized revenue、ARR、NRR、gross margin、profit、FCFは？"],
      ["Local readiness", "Tokyo・Osaka regionは提供。", "日本語契約・support・security・data・incident escalationの未対応点は？"],
      ["Competition", "hyperscaler・platformとの重複。", "日本でVercelが勝つICP、workload、3年TCO、exit planは？"],
      ["Role economics", "対象求人なし。", "再採用時のterritory、quota、OTE、ramp、attainment、SE・CS coverageは？"],
    ],
  }));
}

export function applyCompanyPageRolloutBatchTwentyFive(records: Record<string, CompanyPublicIntelligence>) {
  if (records.atlassian) patchAtlassian(records.atlassian);
  if (records.dynatrace) patchDynatrace(records.dynatrace);
  if (records.vercel) patchVercel(records.vercel);
}
