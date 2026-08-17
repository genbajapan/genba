import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function patchPlanet(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2010", "創業", "NASA科学者3人が創業。", "rollout-planet-about");
  ensureMilestone(intelligence, "確認不能", "日本事業開始年は確認不能", "日本法人・六本木officeは確認できるが、設立・進出年は公式一次資料で確認できない。", "rollout-planet-locations");
  applyStandard(intelligence, buildCompactPatch({
    slug: "planet", leaderName: "Will Marshall", leaderLabel: "Co-founder・CEO・Chair", leaderUrl: "https://www.planet.com/faqs/", localName: "Shoichi Seki", localLabel: "Japan Country Manager", localUrl: "https://www.planet.com/sheets/wef-2024/japan/",
    companyId: "rollout-planet-about", jobId: "rollout-planet-jobs-20260817", customersId: "rollout-planet-snet", externalId: "rollout-planet-mod-space", financeId: "rollout-planet-q1fy27",
    targets: ["防衛・情報収集・政府調達", "地理情報・地球観測分析", "災害対応・行政機関", "農業・森林・エネルギー・社会基盤", "データ基盤・AI・サステナビリティ"], competitors: "Vantor（旧Maxar）、BlackSky、Airbus Intelligence、ICEYE・Synspective・QPS、政府保有衛星、航空・UAV、open data・現地調査",
    feature: "PlanetScopeのnear-daily Monitoring、Pelican・SkySat Tasking、Mosaics、SuperRes、Analytic Feeds、Hyperspectral、Planetary VariablesをPlanet Insights Platform・APIへ統合。", advantage: "広域の日次級cadenceと長期archiveで変化のbaselineを作り、重要兆候だけ高解像度・SAR・UAVへcueingできる。", benefit: "広域AOIの再訪、異常把握、analyst着手、tasking優先度、現地確認を速め、情報収集coverageを高められる可能性がある。", evidence: "SNET経由の日本防衛・情報機関事例はnear-daily撮影と24/7 accessを報告。UMITRONは100km²のseagrass mappingをpilotで実施。vendor-selected事例で独立ROIではない。",
    marketVerdict: "結論：日本政府の衛星コンステレーション・商用宇宙service活用がpersistent monitoring需要を作る。FY2026は売上成長・FCF黒字だがGAAP赤字で、最新Q1のFCFも再びnegative。日本の現行1求人を確認。", marketParagraphs: ["地政学変化、海洋・広域AOI、移動目標に対し、高解像度衛星単独ではrevisit、雲、広域coverage、分析着手がbottleneckになる。", "D&I Buyerはpersistent monitoring、早期兆候、既存high-res・SARへのcueing、API integration、政府調達・情報保全を同時に求める。", "Genba分析：対象AOIでcadence、usable image率、change-to-alert、analyst hours、tasking・現地確認削減、integration、securityを比較する。"],
    cultureHeadline: "Do good、Dream big、Drive for results、Be collaborative、Strive for openness。Japan AEはRemoteだがoffice近隣居住者は週3日office。", classification: "フルリモート", displayLabel: "日本Remote（条件付き週3日office）", officeDays: "office近隣居住者は週3日", remoteOnly: "日本拠点のfull-time Remote", flexibility: "出張最大10%。福利厚生は地域・雇用形態差あり",
    goodFor: ["政府・防衛の長期調達を進めたい", "衛星dataとanalyticsをworkflowへ売りたい", "partnerとJapan D&I市場を深掘りしたい"], cautionFor: ["GAAP黒字を必須にする", "短期・transactional saleを好む", "光学の雲・夜間制約を許容できない"],
    unresolved: [["Territory", "Japan D&I AE 1件を確認。", "対象省庁・機関、named accounts、partner ownership、security clearanceは？"], ["Compensation", "数値報酬は非公開。", "quota、OTE、pay mix、ramp、attainment、average contract、procurement cycleは？"], ["Japan scale", "日本法人・六本木office・Country Managerを確認。", "Japan revenue、customers、headcount、SE・CS・support coverageは？"], ["Delivery・security", "SNET型partnerとcloud・API・24/7 supportの事例あり。", "data sovereignty、情報保全、SLA、incident、local delivery責任は？"], ["Product fit", "daily opticalとtasking・analyticsを統合。", "雲・night、resolution、SAR complement、archive・API costをどう評価する？"]],
  }));
  intelligence.marketStatus.growthSummary = "FY2026売上3.077億米ドル（約484.9億円、前年比26%増）。Q1 FY2027売上は9,420万米ドル（約148.4億円、42%増）。";
  intelligence.facts = [
    { label: "FY2026売上", value: "3.077億米ドル（約484.9億円）", detail: "前年比26%増。1米ドル=157.56円換算。", sourceIds: ["rollout-planet-10k", "rollout-b14-customs-fx"] },
    { label: "FY2026稼ぐ力", value: "GAAP純損失2.469億米ドル（約389.0億円）／FCF 5,300万米ドル（約83.5億円）", detail: "adjusted EBITDAは1,550万米ドル。GAAP lossとnon-GAAP・cashを分離。", sourceIds: ["rollout-planet-10k", "rollout-b14-customs-fx"] },
    { label: "Q1 FY2027契約残", value: "RPO 8.160億米ドル（約1,285.7億円）", detail: "backlogは9.061億米ドル。いずれも売上ではなく未実現riskがある。", sourceIds: ["rollout-planet-q1fy27", "rollout-b14-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "最新値は非公開", detail: "旧FY2024開示の約1,180人をcurrent headcountへ転用しない。", sourceId: "rollout-planet-10k" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行求人1件から在籍人数を推測しない。", sourceId: "rollout-planet-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "六本木ヒルズ森タワー", detail: "東京都港区六本木6-10-1。", sourceId: "rollout-planet-locations" };
  intelligence.companyStats.japanSince = { value: "確認不能", detail: "日本法人・officeは確認できるが設立・進出年は公式一次資料で確認できない。", sourceId: "rollout-planet-locations" };
  intelligence.customerProof = [
    { company: "日本の防衛・情報機関（SNET経由・匿名）", products: "PlanetScope・cloud/API", outcome: "対象AOIをnear-daily撮影し、24/7 accessと高解像度tasking前のmonitoringを提供。", implication: "頻度・運用のproofだが金額・削減率は非公開。", sourceId: "rollout-planet-snet" },
    { company: "UMITRON", products: "PlanetScope・AI", outcome: "100km²の海草域をmappingし、blue carbon推定と未発見seagrass探索を実施。", implication: "pilot・vendor storyで第三者比較ではない。", sourceId: "rollout-planet-umitron" },
  ];
  intelligence.roleLens = { salesMotion: "Japan D&I AEが政府・防衛のpipeline、full-cycle、procurement、partner・co-sellを担う。", compensation: "日本のbase、OTE、pay mix、equity額は非公開。", quota: "quota、attainment、account数、average contract、procurement cycleは非公開。", collaboration: "AE、partner、Solutions、Product、政府調達・analyst・security stakeholdersが連携。" };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "FY2026 / Q1 FY2027（2026-08-17確認）",
    metrics: [{ label: "FY2026売上", value: "3.077億米ドル（約484.9億円）", change: "+26%", interpretation: "政府・商用需要で成長。", sourceId: "rollout-planet-10k" }, { label: "FY2026 cash", value: "FCF 5,300万米ドル（約83.5億円）", change: "GAAP純損失2.469億米ドル（約389.0億円）", interpretation: "cash黒字とGAAP赤字を分離。", sourceId: "rollout-planet-10k" }],
    growthDrivers: [{ title: "政府・防衛契約", evidence: "Q1 RPO 8.160億米ドル（約1,285.7億円）、backlog 9.061億米ドル（約1,427.6億円）。売上ではない。", japanMeaning: "日本D&I AEとSNET事例を確認。", sourceIds: ["rollout-planet-q1fy27", "rollout-planet-jobs-20260817"] }],
    risks: [{ title: "GAAP赤字・契約未実現・光学制約", disclosedRisk: "Q1のadjusted EBITDA・FCFはnegative。backlogは解約・予算未充当riskを含む。", companyResponse: "Monitoring、Tasking、analyticsを統合。", genbaRead: "cadence、雲、resolution、security、procurementを実案件で検証。", sourceIds: ["rollout-planet-10k", "rollout-planet-q1fy27"] }],
    japanCommitment: { verdict: "日本法人・六本木office・Country Manager・D&I求人を確認", summary: "国内事例はあるが日本売上・人数・設立年は非公開。", signals: [{ year: "2026", title: "日本D&I AE", detail: "政府・防衛・partnerを担う現行求人。", sourceIds: ["rollout-planet-jobs-20260817"] }], unknowns: ["日本売上・顧客数・headcount", "日本法人設立年", "quota・attainment・security clearance"] },
    scenarios: [{ scenario: "基本", title: "政府・商用monitoring拡大", body: "daily imageryとanalyticsの利用が増える。" }, { scenario: "上振れ", title: "防衛コンステレーション需要", body: "persistent monitoringとcueingが標準化する。" }, { scenario: "下振れ", title: "赤字・契約・競争", body: "予算、雲、SAR・高解像度競争が成長を抑える。" }],
    sourceIds: ["rollout-planet-10k", "rollout-planet-q1fy27", "rollout-planet-jobs-20260817"],
  };
  intelligence.solutions = [
    { name: "Planet Monitoring・Insights Platform", valueProp: "near-daily broad-area imagery、archive、analytics、APIで変化のbaselineを作る。", url: "https://www.planet.com/products/planet-insights-platform-refresh/", competitors: "Vantor、BlackSky、Airbus、open data。", differentiation: "cadence、coverage、archive、cloud integration。", retention: "Japan・製品別の継続率は非公開。" },
    { name: "Planet Tasking・Pelican", valueProp: "重要地点を高解像度・高revisitでtaskingする。", url: "https://www.planet.com/products/pelican/", competitors: "Vantor、Airbus、BlackSky、SAR。", differentiation: "daily monitoringからtaskingへcueing。", retention: "Japan・製品別の継続率は非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-planet-about", label: "Planet FAQ・10-K", url: "https://www.planet.com/faqs/", kind: "企業公式", scope: "創業・経営・会社", checkedAt: researchedAt },
    { id: "rollout-planet-jobs-20260817", label: "Planet現行Japan求人", url: "https://job-boards.greenhouse.io/planetlabs/jobs/7564777", kind: "企業公式", scope: "求人・勤務・言語・終了反証", checkedAt: researchedAt },
    { id: "rollout-planet-10k", label: "Planet FY2026 10-K", url: "https://www.sec.gov/Archives/edgar/data/1836833/000119312526119957/pl-20260131.htm", kind: "法定開示", scope: "売上・利益・cash・risk", checkedAt: researchedAt },
    { id: "rollout-planet-q1fy27", label: "Planet Q1 FY2027", url: "https://www.sec.gov/Archives/edgar/data/1836833/000119312526257401/pl-ex99_1.htm", kind: "法定開示", scope: "最新売上・RPO・backlog・cash", checkedAt: researchedAt },
    { id: "rollout-planet-locations", label: "Planet locations", url: "https://www.planet.com/locations/", kind: "企業公式", scope: "日本法人・office", checkedAt: researchedAt },
    { id: "rollout-planet-snet", label: "Planet・SNET日本防衛事例", url: "https://assets.planet.com/docs/SNET_Success_Story_letter_web.pdf", kind: "企業公式", scope: "国内防衛・monitoring", checkedAt: researchedAt },
    { id: "rollout-planet-umitron", label: "Planet・UMITRON", url: "https://www.planet.com/pulse/breaking-through-blue-carbons-potential-improving-food-security-through-sustainable-aquaculture/", kind: "企業公式", scope: "国内blue carbon pilot", checkedAt: researchedAt },
    { id: "rollout-planet-mod-space", label: "防衛省 宇宙領域防衛指針", url: "https://www.mod.go.jp/j/press/news/2025/07/28a_01.pdf", kind: "公的機関", scope: "衛星コンステレーション・商用活用", checkedAt: researchedAt },
    { id: "rollout-b14-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchRubrik(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2016", "日本法人設立", "2026年に日本法人創立10周年を公式発表。", "rubrik-partners");
  applyStandard(intelligence, buildCompactPatch({
    slug: "rubrik", leaderName: "Bipul Sinha", leaderLabel: "Co-founder・CEO・Chairman", leaderUrl: "https://www.rubrik.com/company/about/leadership", localName: "高山勇喜", localLabel: "Rubrik Japan株式会社 代表執行役社長", localUrl: "https://www.rubrik.com/ja/company/newsroom",
    companyId: "rollout-rubrik-company", jobId: "rollout-rubrik-jobs-20260817", customersId: "rubrik-nttdata", externalId: "rollout-rubrik-ipa-threats", financeId: "rubrik-q1fy27",
    targets: ["最高情報責任者・最高情報セキュリティ責任者", "インフラ・バックアップ・基盤運用", "セキュリティ・事故対応", "アイデンティティ・SaaS管理", "AI統制・リスク・事業継続"], competitors: "Commvault、Dell EMC、IBM、Veeam、Cohesity、cloud・SaaS native backup、既存backup・自社運用",
    feature: "Rubrik Security Cloudでdata protection、threat analytics、Security Command Center、identity recovery、SaaS protectionを統合し、Agent CloudでAI agentを監視・guardrail・undoする。", advantage: "immutable protection、clean recovery、data・identity・SaaS・AI agentのresilienceを一つのarchitectureとpolicyへ広げる。", benefit: "RTO・RPO、backup運用工数、incident scope、clean restore、identity復旧、事業再開説明を改善できる可能性がある。", evidence: "NTT DATA Groupは月次最大30%・週次最大70%のbackup高速化、dedupe 80%、job作成工数実質zeroを報告。vendor caseで一般化不可。",
    marketVerdict: "結論：ransomware、cloud・SaaS・identity・AI agent分散がbackup更新をcyber resilience投資へ変える。Q1 FY2027はGAAP赤字だがFCF positive。東京の現行2求人を確認。", marketParagraphs: ["backupがあっても汚染・改ざん、clean copy、復旧優先順、identity起点攻撃、RTOの実証が分断されると、経営へ事業再開時刻を説明できない。", "CIO・CISOはdata、identity、SaaS、AI actionを保護し、recovery drillとincident evidenceを継続的に検証する必要がある。", "Genba分析：実data規模でrecovery drillを行い、RTO・RPO、運用hours、dedupe、脅威検知、clean recovery、partner deliveryを比較する。"],
    cultureHeadline: "RIVET：Relentlessness、Integrity、Velocity、Excellence、Transparency。Tokyo 2求人のworkstyleは非公開。", classification: "未確認", displayLabel: "東京・勤務形態非公開", officeDays: "非公開", remoteOnly: "非公開", flexibility: "会社一般のflexibilityを個別求人へ転用しない",
    goodFor: ["CIO・CISOへresilienceを売りたい", "100% channel modelで共同販売したい", "data・identity・AIを横断したい"], cautionFor: ["GAAP黒字を必須にする", "direct-only saleを好む", "数値報酬・勤務形態を事前に必須とする"],
    unresolved: [["Territory", "Mid Market AEとCustomer Experience Managerを確認。", "segment定義、named accounts、新規・拡張、portfolio、partner creditは？"], ["Compensation", "数値報酬は非公開。", "quota、OTE、pay mix、ramp、attainment、accelerator、equityは？"], ["Japan scale", "2016年創立・国内大規模case・100% channelを確認。", "Japan revenue、ARR、customers、headcount、SE・CS・support coverageは？"], ["PoC・delivery", "国内partnerと大規模導入proofあり。", "PoC期間・成功基準、recovery drill、implementation責任、support SLAは？"], ["Financial quality", "Q1売上成長・FCF positive、GAAP loss。", "GAAP黒字化、SBC、FCF再現性、RSC移行・material-right影響は？"]],
  }));
  intelligence.marketStatus.growthSummary = "Q1 FY2027売上3.871億米ドル（約609.9億円、前年比39%増）、Subscription ARR 15.65億米ドル（約2,466.0億円、32%増）。";
  intelligence.facts = [
    { label: "Q1 FY2027売上", value: "3.871億米ドル（約609.9億円）", detail: "前年比39%増。1米ドル=157.56円換算。", sourceIds: ["rubrik-q1fy27", "rollout-b14-customs-fx"] },
    { label: "Q1 FY2027稼ぐ力", value: "GAAP純損失4,185万米ドル（約65.9億円）／FCF 7,361万米ドル（約116.0億円）", detail: "GAAP lossとpositive FCFを併記。", sourceIds: ["rubrik-q1fy27", "rollout-b14-customs-fx"] },
    { label: "Subscription ARR", value: "15.65億米ドル（約2,466.0億円）", detail: "前年比32%増。ARRは売上ではない。10万米ドル超ARR顧客は2,946社。", sourceIds: ["rubrik-q1fy27", "rollout-b14-customs-fx"] },
  ];
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行2求人から在籍人数を推測しない。", sourceId: "rollout-rubrik-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区・詳細番地非公開", detail: "公式ニュースルームで日本法人所在地を確認。", sourceId: "rollout-rubrik-japan" };
  intelligence.companyStats.japanSince = { value: "2016年", detail: "2026年に日本法人創立10周年。", sourceId: "rubrik-partners" };
  intelligence.customerProof = [
    { company: "NTT DATA Group", products: "Rubrik", outcome: "国内約70社・8万users、100+ systems・3,000+ VMs・650TB超。月次最大30%、週次最大70%高速化、dedupe 80%、job作成工数実質zero。", implication: "国内大規模運用の定量proof。vendor caseで独立監査なし。", sourceId: "rubrik-nttdata" },
    { company: "NEC", products: "Rubrik", outcome: "2.7PBへ導入しincident管理cost約20%削減。復旧時間半減以下は見通し。", implication: "実測costと将来期待を分離。", sourceId: "rubrik-nec" },
    { company: "LIXIL", products: "Rubrik Security Cloud", outcome: "想定復旧時間を従来比半分以下へ。24h RRT支援を評価。", implication: "将来攻撃時の期待で実測障害結果ではない。", sourceId: "rubrik-lixil" },
  ];
  intelligence.roleLens = { salesMotion: "Mid Market AEがnew・expandとpartner co-sell、Customer Experience Managerがlifecycle・escalation・footprint growthを担う。", compensation: "日本2求人の給与、OTE、bonus、equityは非公開。", quota: "quota、attainment、portfolio、growth credit、cycleは非公開。", collaboration: "AE、Customer Experience、SE、Support、distributor・VAR、顧客CIO・CISO・infra・securityが連携。" };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "Q1 FY2027（2026-08-17確認）",
    metrics: [{ label: "売上", value: "3.871億米ドル（約609.9億円）", change: "+39%", interpretation: "subscription成長。", sourceId: "rubrik-q1fy27" }, { label: "稼ぐ力", value: "FCF 7,361万米ドル（約116.0億円）", change: "GAAP純損失4,185万米ドル（約65.9億円）", interpretation: "cashとGAAP lossを併記。", sourceId: "rubrik-q1fy27" }],
    growthDrivers: [{ title: "Subscription・大口顧客", evidence: "ARR 15.65億米ドル（約2,466.0億円）、10万米ドル（約1,575.6万円）超ARR顧客2,946社。", japanMeaning: "AEとCustomer Experienceを採用しland・expandを補強。", sourceIds: ["rubrik-q1fy27", "rollout-rubrik-jobs-20260817"] }],
    risks: [{ title: "GAAP赤字・移行・競争", disclosedRisk: "Q1はGAAP operating・net loss。", companyResponse: "data、identity、SaaS、AI agentへcoverageを拡張。", genbaRead: "recovery drill、partner delivery、TCOを実測する。", sourceIds: ["rubrik-q1fy27"] }],
    japanCommitment: { verdict: "2016年日本法人、国内大規模case、現行2求人", summary: "100% channelでAE・Customer Experienceを採用。", signals: [{ year: "2026", title: "東京2求人", detail: "Mid Market AEとCustomer Experience Manager。", sourceIds: ["rollout-rubrik-jobs-20260817"] }], unknowns: ["日本売上・ARR・顧客数", "Japan headcount・office番地", "quota・attainment・workstyle"] },
    scenarios: [{ scenario: "基本", title: "Cyber resilience拡張", body: "backupからdata・identity・SaaSへ広がる。" }, { scenario: "上振れ", title: "AI agent protection", body: "agent actionのguardrail・undoが新需要になる。" }, { scenario: "下振れ", title: "赤字・bundle競争", body: "既存backup・suiteとの価格競争が続く。" }],
    sourceIds: ["rubrik-q1fy27", "rollout-rubrik-jobs-20260817", "rubrik-nttdata"],
  };
  addSources(intelligence, [
    { id: "rollout-rubrik-jobs-20260817", label: "Rubrik現行Japan求人", url: "https://boards-api.greenhouse.io/v1/boards/rubrik/jobs?content=true", kind: "企業公式", scope: "2求人・条件・終了反証", checkedAt: researchedAt },
    { id: "rollout-rubrik-company", label: "Rubrik leadership・10-K", url: "https://www.rubrik.com/company/about/leadership", kind: "企業公式", scope: "経営・会社", checkedAt: researchedAt },
    { id: "rollout-rubrik-japan", label: "Rubrik Japan newsroom", url: "https://www.rubrik.com/ja/company/newsroom", kind: "企業公式", scope: "日本法人・責任者", checkedAt: researchedAt },
    { id: "rollout-rubrik-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b14-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchReplit(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !/Tokyo|日本法人|日本office/i.test(`${item.label} ${item.detail}`));
  ensureMilestone(intelligence, "2026", "日本市場GTM開始", "Founding AE採用を確認。日本法人・local office・正式進出年は確認不能。", "rollout-replit-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "replit", leaderName: "Amjad Masad", leaderLabel: "Founder・CEO", leaderUrl: "https://replit.com/about", localName: "非公開", localLabel: "Japan責任者", localUrl: "https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44",
    companyId: "rollout-replit-about", jobId: "rollout-replit-jobs-20260817", customersId: "rollout-replit-smfl", externalId: "rollout-replit-ipa-dx", financeId: "rollout-replit-series-d",
    targets: ["最高情報責任者・最高技術責任者・IT", "DX・イノベーション・業務変革", "製品・デザイン・開発", "業務運用・営業・マーケティング・財務", "セキュリティ・法務・データ統制"], competitors: "Lovable、Bolt、Base44、v0、Cursor、GitHub Copilot、Claude Code・Codex、traditional IDE＋cloud・PaaS、Power Apps・Mendix、SI・outsourcing、既存SaaS",
    feature: "Agent 4がpromptからplan、build、test、debug、iterateを進め、UI、backend、database、auth、Deploy、connectorsを一体化し、EnterpriseはSSO、SCIM、RBAC、audit、private deploymentを提供。", advantage: "非技術builderのideaからfull-stack production、security review、source handoffまで同じbrowser workflowでつなぐ。", benefit: "prototype・internal appのlead time、engineering backlog、SaaS・outsourcing cost、部門adoptionを改善できる可能性がある。", evidence: "SMFL Digital Labはmulti-user vibe codingとrole別task managementを定性評価。国内定量成果は非公開。global caseは大幅な時間・cost削減を報告するがvendor-selected。",
    marketVerdict: "結論：DX人材不足と部門app backlogがAI software creation需要を作る一方、production化にはsecurity・governance・ownershipが必要。最新のannualized revenueは公表済みだがprofitは非公開。Japanの現行1求人を確認。", marketParagraphs: ["central engineering、SI、SaaS購入だけでは小規模app・automationが優先順位待ちになり、無統制vibe codingはshadow IT、data leakage、code quality、運用ownerのriskを生む。", "Buyerはnontechnical accessibilityだけでなくSSO、RBAC、audit、private deployment、security review、existing repositoryへのhandoffを求める。", "Genba分析：低risk workflowでpaid pilotを行い、lead time、backlog、SaaS・外注cost、adoption、defect、security finding、handoff hoursを比較する。"],
    cultureHeadline: "Mission first、Think radical、Work with intensity、Seek pain。予測可能性・9–5・明確なscopeを重視する人には不向きと公式に明記。", classification: "フルリモート", displayLabel: "日本Remote開始・office開設後Hybrid", officeDays: "未定", remoteOnly: "開始時はRemote", flexibility: "local officeの都市・開設日・Hybrid頻度は非公開",
    goodFor: ["Japan市場を0→1で作りたい", "非技術buyerとIT gatekeeperをつなぎたい", "AI app creationのcategory saleをしたい"], cautionFor: ["明確な役割境界・9–5を重視する", "国内定量proofを必須にする", "生成codeを無審査で本番利用したい"],
    unresolved: [["Territory", "Founding AE 1件、日本法人・officeは未設置。", "Japan installed base、named accounts、new・expand、partner、decision rightsは？"], ["Compensation", "Competitive Salary & Equityのみ。", "quota、OTE、pay mix、ramp、attainment、accelerator、equity、employment entityは？"], ["Office plan", "Remote開始・local office後Hybrid予定。", "都市、時期、出社日数、leader、headcount planは？"], ["Production readiness", "full-stack・deploy・Enterprise governanceを提供。", "generated code review、SLA、incident、ownership、exit・handoff、Japan data locationは？"], ["Financial quality", "annualized revenueとfunding・valuationを公表。", "recognized revenue、ARR、gross margin、profit、FCF、enterprise paid customers・NRRは？"]],
  }));
  intelligence.marketStatus.growthSummary = "2025年9月時点annualized revenue 1.5億米ドル（約236.3億円）。2026年末10億米ドルrun-rateは目標で現況ではない。";
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.genbaVerdict = { headline: "急成長だが収益認識・利益は非公開", body: "annualized revenueと50m+ usersは成長を示す一方、recognized revenue、profit、FCF、paid enterprise scaleは非公開。" };
    intelligence.marketStatus.ipoOutlookSummary = "非公開会社。2026年3月に4億米ドルを調達し評価額90億米ドル。資本・valuationであり売上・利益ではない。";
  }
  intelligence.facts = [
    { label: "売上規模の代替", value: "Annualized revenue 1.5億米ドル（約236.3億円）", detail: "2025年9月時点のrun-rate。監査済み年間売上・ARRとは断定しない。", sourceIds: ["rollout-replit-series-c", "rollout-b14-customs-fx"] },
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "recognized revenue、営業・純利益、EBITDA、FCF、gross margin、burnは確認できない。", sourceIds: ["rollout-replit-series-d"] },
    { label: "2026年資本・規模", value: "4億米ドル調達（約630.2億円）／評価額90億米ドル（約1兆4,180.4億円）", detail: "50m+ users、Fortune 500の85%からusers。paid顧客数ではない。", sourceIds: ["rollout-replit-series-d", "rollout-b14-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "現行公式情報でcurrent headcountを確認できない。", sourceId: "rollout-replit-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "Founding AE求人から在籍人数を推測しない。", sourceId: "rollout-replit-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "未設置・都市非公開", detail: "求人はlocal office presenceを今後設けると説明。", sourceId: "rollout-replit-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2026年にFounding AE採用を確認", detail: "法人設立・正式進出年ではない。", sourceId: "rollout-replit-jobs-20260817" };
  intelligence.customerProof = [
    { company: "三井住友ファイナンス＆リース（SMFL Digital Lab）", products: "Replit Agent 4", outcome: "multi-user vibe codingとkanban・role別task managementを定性評価。", implication: "導入範囲、production稼働、時間・cost削減は非公開。", sourceId: "rollout-replit-smfl" },
    { company: "BatchData", products: "Replit", outcome: "年間6.2万米ドル超（約976.9万円）の削減、CPQ prototypeを30米ドル（約4,727円）・working MVP 1時間と報告。", implication: "global vendor caseで日本再現性は未証明。", sourceId: "rollout-replit-batchdata" },
  ];
  intelligence.roleLens = { salesMotion: "Founding AEがnet-new acquisition、demo・hackathon、negotiation、forecast、adoption・expansionをfull-cycleで担う。", compensation: "Competitive Salary & Equityのみ。日本のbase、OTE、commission、equity額は非公開。", quota: "quota、attainment、ACV、cycle、ramp、new・expansion creditは非公開。", collaboration: "AE、SE・technical sales、Product・Engineering、Security・Legal、顧客business builder・ITが連携。" };
  intelligence.solutions = [
    { name: "Replit Agent 4", valueProp: "自然言語からfull-stack app、test・debug、database・auth、deploymentまで進める。", url: "https://replit.com/enterprise", competitors: "Lovable、Bolt、Base44、v0、Cursor。", differentiation: "nontechnical builderからproduction・handoffまで一つのworkspace。", retention: "Japan・製品別の継続率は非公開。" },
    { name: "Replit Enterprise", valueProp: "SSO、SCIM、RBAC、audit、Security Center、private deploymentで組織利用を統制。", url: "https://replit.com/enterprise", competitors: "GitHub Enterprise、Power Apps、Mendix、cloud IDE。", differentiation: "AI creationとgovernance・deploymentを統合。", retention: "Enterprise paid customers・NRRは非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-replit-about", label: "Replit About・Careers", url: "https://replit.com/about", kind: "企業公式", scope: "経営・会社・culture", checkedAt: researchedAt },
    { id: "rollout-replit-jobs-20260817", label: "Replit現行Japan求人", url: "https://jobs.ashbyhq.com/replit/bcfdb564-48c9-42c9-ab5b-c901b6babb44", kind: "企業公式", scope: "求人・勤務・言語非開示・日本体制", checkedAt: researchedAt },
    { id: "rollout-replit-series-c", label: "Replit 2025 funding announcement", url: "https://replit.com/news/funding-announcement-series-c", kind: "企業公式", scope: "annualized revenue", checkedAt: researchedAt },
    { id: "rollout-replit-series-d", label: "Replit 2026 funding announcement", url: "https://replit.com/blog/replit-raises-400-million-dollars", kind: "企業公式", scope: "funding・valuation・users・target", checkedAt: researchedAt },
    { id: "rollout-replit-smfl", label: "Replit Enterprise・SMFL testimonial", url: "https://replit.com/enterprise", kind: "企業公式", scope: "国内named proof", checkedAt: researchedAt },
    { id: "rollout-replit-batchdata", label: "Replit・BatchData", url: "https://replit.com/customers/batchdata", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-replit-ipa-dx", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html", kind: "公的機関", scope: "DX人材不足・生成AI・内製化", checkedAt: researchedAt },
    { id: "rollout-b14-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchSaviynt(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !/2010|Los Angeles/i.test(`${item.year} ${item.label} ${item.detail}`));
  ensureMilestone(intelligence, "2011", "創業", "Sachin Nayyarが創業し、現在もFounder・CEOを務める。", "rollout-saviynt-company");
  ensureMilestone(intelligence, "2026", "日本法人設立", "Saviynt Japan株式会社を新設。Ashisutoとの出資手続きは2026年6月4日時点で未完了と正式訂正。", "rollout-saviynt-japan-correction");
  applyStandard(intelligence, buildCompactPatch({
    slug: "saviynt", leaderName: "Sachin Nayyar", leaderLabel: "Founder・CEO", leaderUrl: "https://saviynt.com/leadership-team", localName: "Masahiro Nishimura", localLabel: "2024年にJapan Country Managerへ任命・現任は再確認不能", localUrl: "https://saviynt.com/fr/press-release/saviynt-appoints-identity-security-leaders-to-strengthen-presence-in-japan-and-invest-in-australia-and-new-zealand-channel-community",
    companyId: "rollout-saviynt-company", jobId: "rollout-saviynt-jobs-20260817", customersId: "rollout-saviynt-lixil", externalId: "rollout-saviynt-ppc", financeId: "rollout-saviynt-zuma",
    targets: ["最高情報セキュリティ責任者・最高情報責任者", "IAM・アイデンティティセキュリティ責任者", "コンプライアンス・リスク・内部監査", "開発運用・アプリケーション・SAP・人事owner", "セキュリティ設計・調達"], competitors: "SailPoint、Oracle、CA、SAP、CyberArk、Microsoft Entra、Okta、Omada、複数point tools・manual workflow・legacy維持",
    feature: "IGA、ISPM、Application Access Governance、PAM、External Identity、NHI、JITをSaviynt Identity Platformへ統合し、ZumaでAI・NHIをdiscover、govern、runtime authorizeする。", advantage: "human、external、workload、AI agentのidentityとentitlementをsingle control planeへ置き、ownership・lifecycle・policy・audit evidenceをつなぐ。", benefit: "application onboarding、JML、access review、SoD、orphan・overprivilege、audit evidenceの時間とriskを減らせる可能性がある。", evidence: "LIXILは70,000+ internal・third-party identitiesを対象にvisibilityとon/offboarding・attestation・reporting・audit controlの集約を報告。vendor caseで削減率・ROIは非公開。",
    marketVerdict: "結論：cloud、委託先、M&A、AI agentでidentity populationが増え、least privilege・定期review・runtime authorizationが投資テーマになる。ARRは3億米ドル超（約472.7億円）だがrecognized revenueは非公開。日本の現行4求人を確認。", marketParagraphs: ["HR source、SaaS、legacy IGA・PAMが分断するとJML、SoD、certification、orphaned NHI・AI agent ownershipがmanualになり、過剰権限とaudit evidence不足が残る。", "BuyerはhumanだけでなくNHI・AI agentをdiscoverし、owner・lifecycle・policy・runtime accessを一貫して説明する必要がある。", "Genba分析：対象applicationでonboarding time、orphan・overprivileged identities、review decision time、JML completeness、audit evidence、implementation hoursを比較する。"],
    cultureHeadline: "Innovation、Customer-Focus、Results、Respect、Accountability。Japanの現行4求人はいずれもHybridだが出社頻度は非公開。", classification: "ハイブリッド", displayLabel: "日本Hybrid・出社頻度非公開", officeDays: "非公開", remoteOnly: "非公開", flexibility: "Trainingは非標準時間・最大50%出張、SEは最大60%出張",
    goodFor: ["Identity Securityをbusiness・auditへ翻訳したい", "Sales・SE・Delivery・Enablementを横断したい", "AI・NHI governanceの新領域を作りたい"], cautionFor: ["recognized revenueや現在利益を必須にする", "JV・local deliveryの確定情報を必須にする", "Hybrid頻度・数値報酬を事前に必須とする"],
    unresolved: [["Territory", "Strategic AE、Staff SE、Professional Services、Trainingの4職種を確認。", "named accounts、new・renewal、partner credit、role間handoff、Japan decision rightsは？"], ["Compensation", "数値報酬・OTEは非公開。", "quota、OTE、pay mix、ramp、attainment、bonus、equity、travel allowanceは？"], ["Japan entity", "Saviynt Japan設立済み、Ashisuto出資は6月4日時点で未完了。", "closing完了日、65/35 ownership、代表・Country Manager、office、headcountは？"], ["Delivery", "LIXIL 70k+ identitiesとJapan PS・Training採用を確認。", "implementation responsibility、partner capacity、SLA、data residency、日本語supportは？"], ["Financial quality", "ARR 3億米ドル超（約472.7億円）、FY2024 positive cash EBITDA。", "recognized revenue、2026 profit・FCF、gross retention・NRR、customer concentrationは？"]],
  }));
  intelligence.marketStatus.growthSummary = "2026年7月時点ARR 3億米ドル超（約472.7億円）、bookings 80%超増、customer retention 96%。ARR・bookingsは売上ではない。";
  intelligence.facts = [
    { label: "売上規模", value: "Recognized revenueは非公開", detail: "FY2024のnew SaaS ACV bookings約6,000万米ドル（約94.5億円）は受注指標で売上ではない。", sourceIds: ["rollout-saviynt-fy2024", "rollout-b14-customs-fx"] },
    { label: "稼ぐ力", value: "FY2024にpositive cash EBITDA", detail: "subscription gross marginは約80%。cash EBITDA額・率と2025・2026利益は非公開。", sourceIds: ["rollout-saviynt-fy2024"] },
    { label: "売上規模の代替（ARR）", value: "ARR 3億米ドル超（約472.7億円）", detail: "2026年7月時点。bookings 80%超増、customer retention 96%。ARRは売上ではなく、認識売上額は非公開。", sourceIds: ["rollout-saviynt-zuma", "rollout-b14-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "公式current employee数は確認できない。", sourceId: "rollout-saviynt-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行4求人から在籍人数を推測しない。", sourceId: "rollout-saviynt-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区六本木1-9-10", detail: "アークヒルズ仙石山森タワー28階 Baker McKenzie内。日常の勤務場所・席数は非公開。", sourceId: "rollout-saviynt-japan-correction" };
  intelligence.companyStats.japanSince = { value: "2026年に日本法人新設", detail: "Ashisutoのshare acquisition・追加出資は2026年6月4日時点で未完了と正式訂正。", sourceId: "rollout-saviynt-japan-correction" };
  intelligence.customerProof = [{ company: "LIXIL", products: "Saviynt IGA", outcome: "53,000+ employees・150+ countries、70,000+ internal・third-party identitiesへvisibilityを拡大し、on/offboarding、attestation、reporting、audit controlsを集約。", implication: "coverage規模は確認できるがcost・time削減率とROIは非公開。", sourceId: "rollout-saviynt-lixil" }];
  intelligence.roleLens = { salesMotion: "Strategic AEがpipeline・partner・renewal、Staff SEがtechnical win、PSがimplementation、Trainingがcustomer・partner enablementを担う。", compensation: "4求人とも数値給与・OTEは非公開。", quota: "quota、attainment、ACV、cycle、partner credit、billable targetは非公開。", collaboration: "AE、SE、Professional Services、Training、Ashisuto・partner、CISO・IAM・Audit・application ownerが連携。" };
  intelligence.solutions = [
    { name: "Saviynt Identity Platform", valueProp: "IGA、PAM、AAG、ISPM、External Identity、NHIをsingle control planeへ統合。", url: "https://saviynt.com/platform", competitors: "SailPoint、Oracle、SAP、CyberArk、Microsoft Entra。", differentiation: "human・workload・external identityとgovernance・privilegeを統合。", retention: "2026年のcompany-wide customer retentionは96%。Japan・製品別は非公開。" },
    { name: "Zuma AI Security Platform", valueProp: "AI agent、LLM、application、NHIをdiscoverし、ownership・lifecycle・runtime accessをgovern。", url: "https://saviynt.com/press-release/saviynt-launches-zuma-ai-security-platform?hsLang=en", competitors: "AI security point tools、Entra・CyberArk、manual registry。", differentiation: "identity governanceからintent-aware runtime authorizationまで接続。", retention: "2026年7月available now。導入・継続率は非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-saviynt-company", label: "Saviynt company・leadership", url: "https://saviynt.com/company/about-saviynt", kind: "企業公式", scope: "創業・経営・製品・規模", checkedAt: researchedAt },
    { id: "rollout-saviynt-jobs-20260817", label: "Saviynt現行Japan求人", url: "https://jobs.lever.co/saviynt?location=Japan", kind: "企業公式", scope: "4求人・条件・終了反証", checkedAt: researchedAt },
    { id: "rollout-saviynt-fy2024", label: "Saviynt FY2024 results", url: "https://saviynt.com/press-release/saviynt-a-global-leader-in-cloud-identity-security-achieves-record-results-for-2024?hsLang=en", kind: "企業公式", scope: "bookings・cash EBITDA・gross margin", checkedAt: researchedAt },
    { id: "rollout-saviynt-zuma", label: "Saviynt Zuma launch", url: "https://saviynt.com/press-release/saviynt-launches-zuma-ai-security-platform?hsLang=en", kind: "企業公式", scope: "ARR・retention・製品", checkedAt: researchedAt },
    { id: "rollout-saviynt-japan-correction", label: "アシスト Saviynt Japan出資訂正", url: "https://www.ashisuto.co.jp/news/detail/1188752_1507.html", kind: "企業公式", scope: "日本法人・JV未完了反証", checkedAt: researchedAt },
    { id: "rollout-saviynt-lixil", label: "Saviynt・LIXIL", url: "https://saviynt.com/ja/customers/lixil/", kind: "企業公式", scope: "国内customer・70k identities", checkedAt: researchedAt },
    { id: "rollout-saviynt-ppc", label: "個人情報保護委員会 通則ガイドライン", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "access control・識別認証", checkedAt: researchedAt },
    { id: "rollout-b14-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchScandit(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !/2026.*AE|Tokyo AE|採用/i.test(`${item.year} ${item.label} ${item.detail}`));
  ensureMilestone(intelligence, "2020", "日本法人設立を発表", "2020年11月末を目途にスキャンディット合同会社を設立。発表時点で国内20社超が導入。", "rollout-scandit-japan-entry");
  applyStandard(intelligence, buildCompactPatch({
    slug: "scandit", leaderName: "Samuel Mueller", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.scandit.com/management/", localName: "秋谷哲也", localLabel: "Country Manager（2024年就任）", localUrl: "https://www.scandit.com/jp/blog/tetsuya-akiya-appointed-country-manager-scandit-japan/",
    companyId: "rollout-scandit-company", jobId: "rollout-scandit-jobs-20260817", customersId: "rollout-scandit-usmh", externalId: "rollout-scandit-meti-logistics", financeId: "rollout-scandit-series-d",
    targets: ["小売・店舗運用", "オムニチャネル・EC配送", "物流・倉庫・最終配送", "在庫・商品管理・損失防止", "モバイル製品・開発・IT"], competitors: "Zebra、Honeywell、Datalogic、Cognex、Anyline、Dynamsoft、Microblink、Apple VisionKit、Google ML Kit、ZXing、custom computer vision、manual input",
    feature: "Smart Data Captureでbarcode、text、ID、labelをNative・Web SDK、MatrixScan、SparkScan、Expressへ統合し、Store Intelligence・Shelf Intelligence・Agent Skillsへ拡張する。", advantage: "専用scannerだけに依存せず既存smart deviceでsingle・multi capture、AR guidance、offline・on-device処理を業務applicationへ組み込める。", benefit: "scan秒数、rescan・mispick、training、端末TCO、picking・checkout・price check throughputを改善できる可能性がある。", evidence: "U.S.M.Hは500店超のself-scanと119店のpicking、ヨークベニマルは248店で売価check時間半減を報告。成果はworkflow全体のvendor caseでScandit単独因果ではない。",
    marketVerdict: "結論：物流効率化法と小売・物流の人手不足がcaptureを現場productivity・accuracyのKPIへ変える。売上・利益は非公開。2026年8月17日時点で公式日本求人は0件。", marketParagraphs: ["専用端末の調達・故障・教育、低照度・損傷・反射・複数codeの再scan、application別engine分断が、荷役時間、誤出荷、欠品、checkout frictionへ累積する。", "Buyerはscan精度だけでなく現場最悪条件、既存端末・app統合、offline・privacy、全国展開、hardwareを含む3〜5年TCOを求める。", "Genba分析：対象workflowで秒／scan、rescan率、mispick、training hours、端末TCO、throughputをbaseline化し、同一barcode・端末でblind PoCする。"],
    cultureHeadline: "Pioneer spirit、Dedication、Innovation、Getting things done、Have fun、Team spirit。会社一般はhome・office・Hybridを掲げるが、現行日本求人は0件。", classification: "未確認", displayLabel: "現行日本求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "終了求人・会社一般の働き方を現行条件へ転用しない",
    goodFor: ["Retail・物流現場のworkflowを定量改善したい", "softwareとdevice・operationを横断したい", "国内大規模caseを使いvalue saleしたい"], cautionFor: ["今すぐ応募できる日本求人を探す", "認識売上・利益の透明性を必須にする", "vendor caseの成果を単独効果と扱う"],
    unresolved: [["Hiring", "公式Greenhouse全15件にJapan・Tokyoは0。旧AE IDは404。", "日本採用の再開時期、予定職種、employment entity、配属責任者は？"], ["Compensation", "現行日本求人がなく報酬条件なし。", "次回採用時のbase、OTE、pay mix、quota、ramp、attainmentは？"], ["Japan scale", "2020年法人設立、Country Manager、国内大規模caseを確認。", "Japan revenue、customers、headcount、Sales・SE・CS・support coverageは？"], ["Office", "公式日本Careerは渋谷、global Aboutは丸の内を掲載。", "current official office、Hybrid policy、顧客訪問・出張条件は？"], ["Product economics", "公式日本siteは1.7億devices・年800億scanを掲載。", "定義・期間、paid devices、NRR、pricing、hardware込みTCO、accuracy SLAは？"]],
  }));
  intelligence.marketStatus.growthSummary = "売上・ARR絶対額・利益・FCFは非公開。公式日本siteは2,100社超、1.7億active devices超、年間800億scanを掲載するが期間・定義は非開示。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "annual revenue、ARR絶対額、operating・net income、EBITDA、FCFを確認できない。", sourceIds: ["rollout-scandit-company"] },
    { label: "事業固有規模", value: "2,100社超・1.7億active devices超・年間800億scan", detail: "公式日本site掲載値。期間・定義は非公開で、global Aboutの1.5億・500億と不一致。", sourceIds: ["rollout-scandit-jp"] },
    { label: "資本", value: "2022年Series D 1.5億米ドル（約236.3億円）", detail: "評価額10億米ドル超・累計調達約3億米ドル。売上・利益ではない。", sourceIds: ["rollout-scandit-series-d", "rollout-b14-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "第三者headcountをcurrent公式値として採用しない。", sourceId: "rollout-scandit-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行日本求人は0件。", sourceId: "rollout-scandit-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "公式ページ間で住所不一致", detail: "日本Careerは渋谷2-24-12、global Aboutは丸の内1-6-6を掲載。current住所の再確認が必要。", sourceId: "rollout-scandit-jp-careers" };
  intelligence.companyStats.japanSince = { value: "2020年", detail: "2020年11月末を目途に日本法人設立と公式発表。", sourceId: "rollout-scandit-japan-entry" };
  intelligence.customerProof = [
    { company: "U.S.M.H", products: "Smart Data Capture・Scan & Go", outcome: "pickingは119店、self-scanは500店超。一部店舗で顧客単価7%増、200商品比較でscan error 0と報告。", implication: "workflow・決済等の複合施策で単独attribution不可。", sourceId: "rollout-scandit-usmh" },
    { company: "イオンリテール", products: "レジゴー・Scandit SDK", outcome: "店舗売上5%増、平均購入点数2点増、顧客単価約500円増、継続意向67%超を報告。", implication: "レジゴー全体の成果でScandit単独効果ではない。", sourceId: "rollout-scandit-aeon" },
    { company: "ヤマト運輸", products: "Delivery App・Scandit", outcome: "最大約9,000 users、1人1日約300 scansで利用。", implication: "効率化率・costのbefore-afterは非公開。", sourceId: "rollout-scandit-yamato" },
  ];
  intelligence.roleLens = { salesMotion: "現行日本求人は0件。終了したAEはRetail・T&Lのnew logo、renewal・upsell、SC・BDR・Marketing連携を担っていたが現在条件へ転用しない。", compensation: "現行日本求人がなく報酬条件は確認不能。", quota: "次回採用のquota、OTE、attainment、ACV、cycle、portfolioは非公開。", collaboration: "現行採用なし。国内事業ではSales、Solutions、Customer Success、partner、Retail・物流のIT・Operationsが連携すると考えられるが面接で確認が必要。" };
  intelligence.solutions = [
    { name: "Smart Data Capture・MatrixScan", valueProp: "barcode、text、ID、labelをsmart deviceでsingle・multi captureしAR guidanceを加える。", url: "https://www.scandit.com/jp/", competitors: "Zebra、Honeywell、Datalogic、capture SDK、standard/open-source。", differentiation: "現場条件でのcaptureと既存device・appへのsoftware統合。", retention: "Japan・製品別の継続率は非公開。" },
    { name: "Store Intelligence・Shelf Intelligence", valueProp: "price、planogram、expiry、inventory、pickingをcapture dataとcomputer visionで支援。", url: "https://www.scandit.com/jp/", competitors: "retail execution suites、custom vision、manual audit。", differentiation: "capture engineと現場workflowを同じplatformで再利用。", retention: "Japan・製品別の継続率は非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-scandit-company", label: "Scandit company・management", url: "https://www.scandit.com/company/", kind: "企業公式", scope: "創業・経営・global規模", checkedAt: researchedAt },
    { id: "rollout-scandit-jp", label: "Scandit日本公式", url: "https://www.scandit.com/jp/", kind: "企業公式", scope: "日本向け製品・規模", checkedAt: researchedAt },
    { id: "rollout-scandit-jobs-20260817", label: "Scandit公式Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/scandit/jobs?content=true", kind: "企業公式", scope: "現行日本求人0・終了反証", checkedAt: researchedAt },
    { id: "rollout-scandit-japan-entry", label: "Scandit日本進出発表", url: "https://www.scandit.com/jp/blog/scandit-expands-into-the-japanese-market/", kind: "企業公式", scope: "2020年日本法人・国内20社超", checkedAt: researchedAt },
    { id: "rollout-scandit-jp-careers", label: "Scandit日本Career", url: "https://www.scandit.com/jp/careers/", kind: "企業公式", scope: "日本office・culture", checkedAt: researchedAt },
    { id: "rollout-scandit-series-d", label: "Scandit Series D", url: "https://www.scandit.com/blog/scandit-smart-data-capture-leader-150m-series-d-investment/", kind: "企業公式", scope: "funding・valuation・ARR増加", checkedAt: researchedAt },
    { id: "rollout-scandit-usmh", label: "Scandit・U.S.M.H", url: "https://www.scandit.com/jp/resources/case-studies/usmh/", kind: "企業公式", scope: "国内retail定量case", checkedAt: researchedAt },
    { id: "rollout-scandit-aeon", label: "Scandit・イオンリテール", url: "https://www.scandit.com/jp/resources/case-studies/aeon-retail/", kind: "企業公式", scope: "国内retail定量case", checkedAt: researchedAt },
    { id: "rollout-scandit-yamato", label: "Scandit・ヤマト運輸", url: "https://www.scandit.com/jp/resources/case-studies/yamato/", kind: "企業公式", scope: "国内物流case", checkedAt: researchedAt },
    { id: "rollout-scandit-meti-logistics", label: "経産省 物流効率化法", url: "https://www.meti.go.jp/policy/economy/distribution/logistics_efficiency/bukkouhougaiyou.html", kind: "公的機関", scope: "荷待ち・荷役・効率化要件", checkedAt: researchedAt },
    { id: "rollout-b14-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchFourteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.planet) patchPlanet(records.planet);
  if (records.replit) patchReplit(records.replit);
  if (records.rubrik) patchRubrik(records.rubrik);
  if (records.saviynt) patchSaviynt(records.saviynt);
  if (records.scandit) patchScandit(records.scandit);
}
