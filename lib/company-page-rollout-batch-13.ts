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

function replaceTextDeep(value: unknown, from: string, to: string): void {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      if (typeof item === "string") value[index] = item.replaceAll(from, to);
      else replaceTextDeep(item, from, to);
    });
    return;
  }
  for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
    if (typeof child === "string") (value as Record<string, unknown>)[key] = child.replaceAll(from, to);
    else replaceTextDeep(child, from, to);
  }
}

function patchNexthink(intelligence: CompanyPublicIntelligence) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => !/EAE|Enterprise Account Executive/i.test(`${item.label} ${item.detail}`));
  ensureMilestone(intelligence, "2025", "日本法人設立・営業開始", "Nexthink合同会社を6月に設立し、7月に日本語製品・営業を開始。", "rollout-nexthink-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "nexthink", leaderName: "Pedro Bados", leaderLabel: "Co-founder・CEO", leaderUrl: "https://nexthink.com/ja/company/leadership", localName: "萩野武志", localLabel: "Japan President", localUrl: "https://nexthink.com/ja/press/nexthink-launches-new-japanese-entity",
    companyId: "rollout-nexthink-company", jobId: "rollout-nexthink-jobs-20260817", customersId: "rollout-nexthink-japan-customers", externalId: "rollout-nexthink-ipa-dx", financeId: "rollout-nexthink-vista",
    targets: ["最高情報責任者・IT経営", "デジタルワークプレイス・EUC", "IT運用・サービスデスク", "アプリケーション・SaaS管理", "従業員体験・DX推進"], competitors: "Lakeside SysTrack、ControlUp、Riverbed Aternity、1E、Microsoft Intune Endpoint Analytics、ServiceNow、WalkMe・Whatfix",
    feature: "Infinityでendpoint、device、network、application、employee feedbackを一つのDEX data layerへ集約し、診断、remote action、Flow、Adopt、AI agentへつなぐ。", advantage: "観測、root-cause、remediation、application adoption、value trackingを同じemployee-experience dataで閉じる。", benefit: "未申告friction、ticket、MTTR、software adoption、service desk工数、AI・SaaS投資価値を改善・説明できる可能性がある。", evidence: "国内実名顧客の定量成果は非公開。Spark early programの初回解決率77%はglobal 25顧客のvendor集計で、日本成果ではない。",
    marketVerdict: "結論：AI・SaaSとhybrid workplaceの拡大に対し、DX人材不足と投資価値の測定gapがDEX需要を作る。最新売上・利益は非公開。日本の現行2求人を確認。", marketParagraphs: ["ticketやVOCだけでは未申告のfrictionと全端末の利用差を捉えられず、productivity lossとsoftware ROIを経営へ説明しにくい。", "CIO・EUC・Service Deskは実利用・体験baseline、問題の予防・自動修復、adoption・value trackingを同時に必要とする。", "Genba分析：対象部門のDEX、incident、adoptionをPoVで測り、ticket、MTTR、端末健全性、利用率、IT工数をbaseline比較する。"],
    cultureHeadline: "Positive、Get things done、One team、Keep growing。現行2求人はHybridだがoffice日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・Hybrid", officeDays: "非公開", remoteOnly: "該当なし", flexibility: "officeとremoteのbalancing、flexible hoursを求人に記載",
    goodFor: ["DEXとIT outcomeをCIOへ売りたい", "presales・CSで日本市場を作りたい", "adoptionと自動修復を同じdataで扱いたい"], cautionFor: ["国内実名ROIを必須にする", "最新の売上・利益開示を必須にする", "数値報酬・office日数を事前に必須とする"],
    unresolved: [["最新財務", "評価額約30億米ドル（約4,726.8億円）でmajority investment。", "latest revenue、ARR、profit、FCF、growth、debtは？"], ["日本scale", "2025年法人・日本語製品、CSM・SCを確認。", "Japan revenue、customers、headcount、AE・support coverageは？"], ["Customer proof", "国内実名定量事例は非公開。", "日本のPoV→本番率、ticket・MTTR・adoption改善の中央値は？"], ["Commercial", "CSMはrenewal・expansion、SCはPoVを担当。", "portfolio、quota・credit、attainment、cycle、partner ownershipは？"], ["Data・privacy", "endpoint・employee feedbackを扱う。", "Japan data location、retention、employee notice、RBAC、AI training useは？"]],
  }));
  intelligence.marketStatus.growthSummary = "1,500社超・2,500万人を支援。最新売上・ARR・利益は非公開で、2020年ARRを現況へ転用しない。";
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.genbaVerdict = { headline: "拡張投資は明確、収益性は非公開", body: "Vistaのmajority investmentと日本法人設立は拡張意欲を示すが、最新の収益性と日本単体規模は非公開。" };
    intelligence.marketStatus.ipoOutlookSummary = "非公開会社。評価額約30億米ドル（約4,726.8億円）は2025年の取引評価であり、売上・IPO計画ではない。";
  }
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "最新revenue、ARR、営業・純利益、FCFは確認できない。", sourceIds: ["rollout-nexthink-vista"] },
    { label: "事業固有規模", value: "1,500+ enterprise customers／25m employees", detail: "利用規模であり売上・paid seat valueではない。", sourceIds: ["rollout-nexthink-vista"] },
    { label: "2025 majority investment", value: "評価額約30億米ドル（約4,726.8億円）", detail: "企業評価額であり売上・ARRではない。", sourceIds: ["rollout-nexthink-vista", "rollout-b13-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,000人超", detail: "現行求人。75超のnationalities。", sourceId: "rollout-nexthink-jobs-20260817" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "2求人から現人数を推測しない。", sourceId: "rollout-nexthink-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "赤坂グリーンクロス6F", detail: "東京都港区赤坂2-4-6。", sourceId: "rollout-nexthink-japan" };
  intelligence.companyStats.japanSince = { value: "2025年6月", detail: "Nexthink合同会社設立。7月に本格営業・日本語提供開始。", sourceId: "rollout-nexthink-japan" };
  intelligence.customerProof = [{ company: "国内顧客", products: "Nexthink Infinity", outcome: "日本法人発表は顧客基盤拡大を述べるが、実名・定量成果は非公開。", implication: "global事例やvendor集計を国内成果へ外挿しない。", sourceId: "rollout-nexthink-japan-customers" }];
  intelligence.roleLens = { salesMotion: "Solution Consultantがdiscovery・PoV・partner GTM、Customer Success Managerがadoption・value・renewal・expansionを担う。", compensation: "日本2求人の数値給与、OTE、variableは非公開。", quota: "portfolio、renewal・expansion credit、PoV KPI、attainment、cycleは非公開。", collaboration: "SC、CSM、Sales、Professional Services、Partner、顧客CIO・EUC・Service Deskが連携。" };
  addSources(intelligence, [
    { id: "rollout-nexthink-company", label: "Nexthink leadership・platform", url: "https://nexthink.com/ja/company/leadership", kind: "企業公式", scope: "経営・製品", checkedAt: researchedAt },
    { id: "rollout-nexthink-jobs-20260817", label: "Nexthink現行Japan求人API", url: "https://api.smartrecruiters.com/v1/companies/Nexthink/postings?limit=100", kind: "企業公式", scope: "2求人・終了反証・勤務条件", checkedAt: researchedAt },
    { id: "rollout-nexthink-vista", label: "Nexthink・Vista majority investment", url: "https://nexthink.com/press/vista-equity-partners-to-make-majority-investment-in-nexthink-valuing-the-company-at-approximately-dollar3-billion", kind: "企業公式", scope: "valuation・顧客・利用規模", checkedAt: researchedAt },
    { id: "rollout-nexthink-japan", label: "Nexthink日本法人発表", url: "https://nexthink.com/ja/press/nexthink-launches-new-japanese-entity", kind: "企業公式", scope: "法人・責任者・office・営業開始", checkedAt: researchedAt },
    { id: "rollout-nexthink-japan-customers", label: "Nexthink日本語customer page", url: "https://nexthink.com/ja/customers", kind: "企業公式", scope: "国内実名成果の非開示", checkedAt: researchedAt },
    { id: "rollout-nexthink-ipa-dx", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html", kind: "公的機関", scope: "DX成果・人材不足", checkedAt: researchedAt },
    { id: "rollout-b13-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchNice(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2004", "日本法人設立", "ナイスジャパン株式会社を設立。", "rollout-nice-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "nice", leaderName: "Scott Russell", leaderLabel: "CEO", leaderUrl: "https://www.nice.com/company/about-us", localName: "Olivier Georlette", localLabel: "日本法人社長", localUrl: "https://www.nice.com/ja/press-releases/centereye-adapter-amivoice-nice-cxone-integration",
    companyId: "rollout-nice-about", jobId: "rollout-nice-jobs-20260817", customersId: "rollout-nice-qsai", externalId: "rollout-nice-mhlw", financeId: "rollout-nice-fy2025",
    targets: ["コンタクトセンター・顧客体験", "最高情報責任者・IT・デジタル", "業務運用・品質・人材配置", "金融犯罪対策・AML・不正検知", "データ・リスク・コンプライアンス"], competitors: "Amazon Connect、Avaya、Cisco、Five9、Genesys、Talkdesk、Kore.ai、Sierra.ai、Cresta、Salesforce、Verint、SAS、Oracle、Quantexa、FICO、Feedzai",
    feature: "CXoneでvoice・digital・AI・routing・workforce・quality・analyticsを統合し、ActimizeでAML・fraud・financial markets complianceを提供。", advantage: "agentic・human interactionのorchestration、WEM・QM・analyticsとenterprise contact-center scaleを一つのCX platformで扱い、金融crime workflowも別portfolioで持つ。", benefit: "AHT、FCR、transfer、after-call、quality、agent load、cost-to-serve、AML false positive・case handlingを改善できる可能性がある。", evidence: "キューサイは月15万件規模・2部門のsystemを計画通り統合。機能差よりcost・提案・支援姿勢を選定理由に挙げた。",
    marketVerdict: "結論：customer interactionのAI化とカスハラ対策、金融AML高度化が別々のBuyer需要を作る。FY2025売上は成長・FCF黒字だがQ1 2026利益は前年割れ。日本の現行4求人を確認。", marketParagraphs: ["PBX、CRM、bot、WFM、QMが分断すると、interaction全体、agent負荷、AI handoff、quality・complianceを同じdataで改善できない。", "金融ではrule-only・silo監視がfalse positiveと見逃しを生み、ActimizeはCXoneと分けたAML・fraud buyer laneで評価する必要がある。", "Genba分析：限定queueでAHT、FCR、transfer、after-call、quality、agent loadをbefore-after比較し、日本語AI、integration、migration、TCOを検証する。"],
    cultureHeadline: "Speed and Precision、Obsessed with Winning、Super-Sizing Customer Value。AE・Senior SEは週2日office・週3日remote、Director・BAは非公開。", classification: "ハイブリッド", displayLabel: "東京・NiCE-FLEX（一部職種）", officeDays: "AE・Senior SEは週2日", remoteOnly: "該当なし", flexibility: "Director Sales AI・Senior Business Analystは勤務形態を補完しない",
    goodFor: ["CX・AI transformationを大型案件にしたい", "Sales・SE・PSでJapan teamを拡張したい", "CCaaSまたはAMLの専門性を深めたい"], cautionFor: ["Q1利益減を許容できない", "全roleの勤務条件・数値報酬を事前必須にする", "CXoneとActimizeを一つのbuyerへ混同したい"],
    unresolved: [["Profitability", "FY2025売上・FCFは成長。Q1 2026 GAAP利益は前年割れ。", "Cognigy寄与、organic growth、SBC、margin、FCF outlookは？"], ["Japan scale", "2004法人、社長、4求人、国内事例を確認。", "Japan revenue、cloud ARR、customers、headcount、partner capacityは？"], ["Commercial", "AE・AI Sales Director・SE・Actimize BAを採用。", "quota、attainment、ACV、cycle、new・expand、AI creditは？"], ["AI outcome", "agentic＋human interactionを統合。", "日本語accuracy、handoff、latency、hallucination、human review、data useは？"], ["Migration・TCO", "国内migration事例を確認。", "parallel期間、integration、rollback、partner品質、3年TCO、realized KPIは？"]],
  }));
  intelligence.marketStatus = { ...intelligence.marketStatus, isPublic: true, ticker: "NICE", exchange: "NASDAQ・TASE", listedSince: "1996年", stockLinkUrl: "https://www.nice.com/company/investors" };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "FY2025 / Q1 2026（2026-08-17確認）",
    metrics: [
      { label: "FY2025売上", value: "29.45億米ドル（約4,640.8億円）", change: "cloud 22.38億米ドル（約3,526.9億円）", interpretation: "cloud中心の事業規模。", sourceId: "rollout-nice-fy2025" },
      { label: "FY2025稼ぐ力", value: "GAAP営業利益6.46億米ドル（約1,017.5億円）", change: "margin 21.9%・FCF 6.23億米ドル（約981.6億円）", interpretation: "売上成長とcash generationを両立。", sourceId: "rollout-nice-fy2025" },
      { label: "Q1 2026", value: "売上7.69億米ドル（約1,211.0億円）", change: "+9.8%・GAAP純利益0.47億米ドル（約73.8億円）", interpretation: "売上成長の一方、operating・net incomeは前年割れ。", sourceId: "rollout-nice-q1-2026" },
    ],
    growthDrivers: [{ title: "CX AI・Self-Service", evidence: "2025年末ARR 3.28億米ドル（約516.8億円）、前年比66%増。ARRは売上ではない。", japanMeaning: "AI Sales leadershipとSenior SEを採用。", sourceIds: ["rollout-nice-fy2025", "rollout-nice-jobs-20260817"] }],
    risks: [{ title: "利益減・買収統合・競争", disclosedRisk: "Q1 2026 GAAP operating・net incomeが前年割れ。", companyResponse: "CXone AIとCognigy、Actimizeへ投資。", genbaRead: "日本では機能差だけでなくmigration、support、TCO、realized KPIを検証する。", sourceIds: ["rollout-nice-q1-2026"] }],
    japanCommitment: { verdict: "日本法人・4求人・国内顧客事例を確認", summary: "2004年設立。Sales、AI leadership、SE、Actimize deliveryを採用。", signals: [{ year: "2026", title: "日本4求人", detail: "CXone sales・technicalとActimize PSを公式確認。", sourceIds: ["rollout-nice-jobs-20260817"] }], unknowns: ["日本売上・ARR・顧客数", "Japan headcount・partner capacity", "quota・attainment・pricing"] },
    scenarios: [{ scenario: "基本", title: "CXone cloud・AI拡張", body: "既存contact-centerのmigrationとAI adoptionを進める。" }, { scenario: "上振れ", title: "Agentic AI標準化", body: "AI＋human orchestrationが新規予算を作る。" }, { scenario: "下振れ", title: "利益・競争圧力", body: "買収統合、bundle競争、migration負荷がmarginを圧迫。" }],
    sourceIds: ["rollout-nice-fy2025", "rollout-nice-q1-2026", "rollout-nice-jobs-20260817"],
  };
  intelligence.facts = [
    { label: "FY2025売上", value: "29.45億米ドル（約4,640.8億円）", detail: "cloud revenue 22.38億米ドル（約3,526.9億円）。", sourceIds: ["rollout-nice-fy2025", "rollout-b13-customs-fx"] },
    { label: "FY2025稼ぐ力", value: "GAAP営業利益6.46億米ドル（約1,017.5億円）／FCF 6.23億米ドル（約981.6億円）", detail: "operating margin 21.9%、FCF margin 21%。", sourceIds: ["rollout-nice-fy2025", "rollout-b13-customs-fx"] },
    { label: "CX AI事業固有指標", value: "ARR 3.28億米ドル（約516.8億円）", detail: "2025年末、前年比66%増。ARRは売上ではない。", sourceIds: ["rollout-nice-fy2025", "rollout-b13-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "10,000人超", detail: "25,000+ customers・150+ countries。", sourceId: "rollout-nice-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "4求人から現人数を推測しない。", sourceId: "rollout-nice-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区赤坂2-2-17", detail: "政府GビズINFO。建物・階は補完しない。", sourceId: "rollout-nice-gbiz" };
  intelligence.companyStats.japanSince = { value: "2004年", detail: "ナイスジャパン株式会社設立。", sourceId: "rollout-nice-japan" };
  intelligence.customerProof = [
    { company: "キューサイ", products: "CXone", outcome: "月15万件規模・2部門のsystemを統合し、2025年12月に計画通り移行。", implication: "効率化は定性。機能差よりcost・提案・支援姿勢が決め手。", sourceId: "rollout-nice-qsai" },
    { company: "アイティフォー", products: "CXone", outcome: "IVR・routingで年約100時間、Salesforce連携で年180時間削減を見込む。", implication: "実測でなく期待値。", sourceId: "rollout-nice-itfor" },
    { company: "メニコン", products: "CXone", outcome: "約半年で移行し、1年以上安定稼働・運用負荷低下・BCPを報告。", implication: "削減率・金額は非公開。", sourceId: "rollout-nice-menicon" },
  ];
  intelligence.roleLens = { salesMotion: "AEがnew・displacement、AI DirectorがJapan Agentic Sales・Presales、Senior SEがtechnical win、Actimize BAがAML deliveryを担う。", compensation: "日本4求人の給与、OTE、pay mixは非公開。", quota: "quota、attainment、ACV、cycle、AI・CXone・Actimize creditは非公開。", collaboration: "Sales、SE、AI leadership、PS、Partner、顧客CX・IT・Operations・AMLが連携。" };
  addSources(intelligence, [
    { id: "rollout-nice-about", label: "NiCE About", url: "https://www.nice.com/company/about-us", kind: "企業公式", scope: "経営・社員・顧客・製品", checkedAt: researchedAt },
    { id: "rollout-nice-jobs-20260817", label: "NiCE現行Japan求人API", url: "https://boards-api.greenhouse.io/v1/boards/nice/jobs?content=true", kind: "企業公式", scope: "4求人・言語・勤務・終了反証", checkedAt: researchedAt },
    { id: "rollout-nice-fy2025", label: "NiCE FY2025 20-F", url: "https://www.sec.gov/Archives/edgar/data/1003935/000100393526000010/nice-20251231.htm", kind: "法定開示", scope: "売上・利益・FCF・ARR・競合", checkedAt: researchedAt },
    { id: "rollout-nice-q1-2026", label: "NiCE Q1 2026 results", url: "https://www.nice.com/press-releases/nice-reports-10-year-over-year-revenue-growth-driven-by-14-6-cloud-revenue-growth-in-first-quarter-2026", kind: "企業公式", scope: "四半期売上・利益", checkedAt: researchedAt },
    { id: "rollout-nice-japan", label: "NiCE Japan interview・release", url: "https://www.nice.com/ja/blog/interview-with-ando", kind: "企業公式", scope: "日本法人設立", checkedAt: researchedAt },
    { id: "rollout-nice-gbiz", label: "GビズINFO ナイスジャパン", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=1010401099134", kind: "公的機関", scope: "日本office住所", checkedAt: researchedAt },
    { id: "rollout-nice-qsai", label: "NiCE・キューサイ", url: "https://www.nice.com/ja/press-releases/nice-japan-press-release-qsai", kind: "企業公式", scope: "国内規模・migration", checkedAt: researchedAt },
    { id: "rollout-nice-itfor", label: "NiCE・アイティフォー", url: "https://www.nice.com/ja/press-releases/itfor-cxone-win", kind: "企業公式", scope: "国内期待工数", checkedAt: researchedAt },
    { id: "rollout-nice-menicon", label: "NiCE・メニコン", url: "https://www.nice.com/ja/resources/menicon-case-study", kind: "企業公式", scope: "国内migration・運用", checkedAt: researchedAt },
    { id: "rollout-nice-mhlw", label: "厚生労働省 カスタマーハラスメント対策", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/seisaku06/", kind: "公的機関", scope: "2026年10月義務化", checkedAt: researchedAt },
    { id: "rollout-b13-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchPatch(intelligence: CompanyPublicIntelligence) {
  replaceTextDeep(intelligence, "年間数億ドル規模", "年間数億米ドル規模（少なくとも約315.1億円相当、範囲非公開）");
  ensureMilestone(intelligence, "2026", "日本市場採用開始", "東京を拠点にAPAC初のEnterprise AEを採用。日本法人・officeは確認不能。", "rollout-patch-jobs-20260817");
  applyStandard(intelligence, buildCompactPatch({
    slug: "patch", leaderName: "Brennan Spellacy", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.patch.io/blog-author/brennan-spellacy", localName: "Rory Heskin", localLabel: "APAC General Manager", localUrl: "https://www.patch.io/blog/corporate-buyers-are-caught-in-asias-ai-energy-squeeze",
    companyId: "rollout-patch-about", jobId: "rollout-patch-jobs-20260817", customersId: "rollout-patch-japan-customers", externalId: "rollout-patch-meti-ets", financeId: "rollout-patch-series-b",
    targets: ["サステナビリティ・脱炭素", "財務・最高財務責任者", "調達・エネルギー・トレーディング", "法務・リスク・開示", "サプライチェーン・出張・事業部門"], competitors: "South Pole、Watershed Marketplace、Sylvera、BeZero、Xpansiv、broker・consultancy、registry直接調達、内製spreadsheet",
    feature: "AI-native servicesとしてStrategy、Source、Diligence、Purchase、Manageをembedded expert、market data、softwareで統合し、carbon、REC・VPPA、SAF等を扱う。", advantage: "instrument・registry・projectを跨ぐmarket access、diligence、contract、delivery・retirement、claims evidenceを一つのportfolio運用へ束ねる。", benefit: "sourcing・diligence時間、price、delivery default、retirement・audit completeness、internal hours、claim riskを改善できる可能性がある。", evidence: "日本企業の実名・定量顧客事例は非公開。現行求人はfirst APAC lighthouse dealsをこれから作る段階と説明。",
    marketVerdict: "結論：GX-ETSとSSBJ開示がvolumeだけでなくeligibility、quality、delivery、claims・auditの説明責任を強める。売上・利益は非公開。東京Remoteの現行1求人を確認。", marketParagraphs: ["carbon、renewable energy、SAF等をbroker・registry・consultant別に扱うと、quality、price、delivery、claim evidenceが分断しやすい。", "Buyerはcomplianceとvoluntary instrumentを分離し、制度適格性、supplier risk、retirement、開示証跡を同時に管理する必要がある。", "Genba分析：priority portfolioでprice dispersion、diligence lead time、delivery default、retirement・audit completeness、internal hoursをbaseline比較する。"],
    cultureHeadline: "Build the future we want、All in this together、Amp it up。東京求人はRemote表記・remote flexibilityだが頻度は非公開。", classification: "フルリモート", displayLabel: "東京拠点・Remote", officeDays: "非公開", remoteOnly: "勤務地は東京", flexibility: "ATSはRemote、本文はTokyo based with remote flexibility",
    goodFor: ["climate financeの新市場を作りたい", "complex instrumentを経営・調達へ売りたい", "APAC first AEとして0→1を担いたい"], cautionFor: ["国内顧客proofを必須にする", "売上・利益開示を必須にする", "制度適格性をvendor任せにしたい"],
    unresolved: [["財務", "Series B 5,500万米ドル（約86.7億円）まで公表。", "revenue、ARR、profit、FCF、valuation、cash runwayは？"], ["Japan team", "Tokyo Remoteのfirst APAC AEを確認。", "法人、雇用主体、office、headcount、local delivery・legal coverageは？"], ["国内proof", "日本顧客成果は非公開。", "first lighthouse pipeline、sector、PoC→contract、delivery実績は？"], ["Integrity", "25,000+ project databaseと275+ partner projects。", "eligibility、rating conflict、replacement、default、claim liabilityは？"], ["Commercial", "APAC初AE、Japan重点。", "quota、attainment、fee・markup、ACV、cycle、OTE、partner creditは？"]],
  }));
  intelligence.marketStatus.growthSummary = "500+ companies、275+ climate project partners、25,000+ project database。取扱規模はPatch売上ではない。";
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.genbaVerdict = { headline: "APAC市場開発の初期局面", body: "APAC first AEとend-to-end product拡張は市場開発局面を示すが、日本法人・顧客proof・収益性は非公開。" };
    intelligence.marketStatus.ipoOutlookSummary = "非公開会社。IPO時期・current valuationは非公開。資金調達額は売上・利益ではない。";
  }
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "revenue、ARR、営業・純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-patch-series-b"] },
    { label: "事業固有規模", value: "500+ companies／275+ project partners／25,000+ projects", detail: "顧客・partner・databaseの別母集団。取扱高・売上ではない。", sourceIds: ["rollout-patch-about"] },
    { label: "資金調達", value: "Series A 2,075万米ドル（約32.7億円）／Series B 5,500万米ドル（約86.7億円）", detail: "資本であり売上・valuationではない。", sourceIds: ["rollout-patch-series-a", "rollout-patch-series-b", "rollout-b13-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "current official人数を確認できない。", sourceId: "rollout-patch-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "first APAC AE求人から現人数を推測しない。", sourceId: "rollout-patch-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "常設office未確認", detail: "公式拠点はSan Francisco、London、Singapore。求人はTokyo Remote。", sourceId: "rollout-patch-about" };
  intelligence.companyStats.japanSince = { value: "2026年にTokyo採用確認", detail: "正式進出・法人設立年ではない。", sourceId: "rollout-patch-jobs-20260817" };
  intelligence.customerProof = [{ company: "国内顧客", products: "Patch", outcome: "日本企業名・日本拠点の顧客事例、国内定量成果は確認できない。", implication: "IFS・Workday等global事例を国内成果へ外挿しない。", sourceId: "rollout-patch-japan-customers" }];
  intelligence.roleLens = { salesMotion: "APAC GMとfirst Enterprise AEがJapan中心のpipeline、lighthouse deal、full-cycle enterprise saleを作る。", compensation: "20万〜30万米ドル（約3,151万〜4,727万円）OTEはSF勤務者向け。日本報酬は非公開。", quota: "Japan quota、attainment、ACV、cycle、fee・markup、partner creditは非公開。", collaboration: "AE、APAC GM、Climate expert、Product、Legal、顧客Sustainability・Finance・Procurementが連携。" };
  addSources(intelligence, [
    { id: "rollout-patch-about", label: "Patch About・Platform", url: "https://www.patch.io/about", kind: "企業公式", scope: "経営・拠点・規模・製品", checkedAt: researchedAt },
    { id: "rollout-patch-jobs-20260817", label: "Patch現行Tokyo求人", url: "https://jobs.ashbyhq.com/patch.io/1d73e679-d6f7-42c1-9545-74c31e97e7da", kind: "企業公式", scope: "求人・勤務・言語・報酬caveat", checkedAt: researchedAt },
    { id: "rollout-patch-series-a", label: "Patch Series A", url: "https://www.patch.io/blog/announcing-our-series-a-carbon-removal-marketplace", kind: "企業公式", scope: "資金調達", checkedAt: researchedAt },
    { id: "rollout-patch-series-b", label: "Patch Series B", url: "https://www.patch.io/blog/patch-series-b-funding-scales-unified-climate-action", kind: "企業公式", scope: "資金調達・経営", checkedAt: researchedAt },
    { id: "rollout-patch-japan-customers", label: "Patch Case Studies", url: "https://www.patch.io/case-studies", kind: "企業公式", scope: "国内事例非開示", checkedAt: researchedAt },
    { id: "rollout-patch-meti-ets", label: "経済産業省 排出量取引制度", url: "https://www.meti.go.jp/policy/energy_environment/global_warming/ets.html", kind: "公的機関", scope: "GX-ETS・allowance", checkedAt: researchedAt },
    { id: "rollout-b13-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchPatsnap(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本市場進出・拡大", "Japan戦略とlocal office増強計画を公式発表。法人設立日は非公開。", "rollout-patsnap-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "patsnap", leaderName: "Jeffrey Tiong", leaderLabel: "Founder・CEO", leaderUrl: "https://www.patsnap.com/resources/blog/patsnap-surpasses-us100-million-in-annual-recurring-revenue/", localName: "Guan Dian", localLabel: "Co-founder・CMO・APAC GM", localUrl: "https://info.patsnap.com/al-role-in-shaping-ip-strategy-2025",
    companyId: "rollout-patsnap-about", jobId: "rollout-patsnap-jobs-20260817", customersId: "rollout-patsnap-takasago", externalId: "rollout-patsnap-stat-rd", financeId: "rollout-patsnap-arr",
    targets: ["研究開発・エンジニアリング", "知財・特許・法務・FTO", "イノベーション・技術戦略", "医薬・化学・素材R&D", "データ・AIガバナンス"], competitors: "Clarivate Derwent、LexisNexis PatentSight・TotalPatent One、Questel Orbit、CAS SciFinder、Google Patents・公的DB、調査会社・弁理士、generic LLM・内製RAG",
    feature: "Eurekaのdomain AI agentでpatent・science・chemical・clinical・company dataを検索・分析し、novelty、FTO、landscape、monitor、technical Q&A、API・MCPへつなぐ。", advantage: "curated domain data、legal status・family normalization、citation traceability、IP・R&D agent workflow、professional servicesを一つのplatformで扱う。", benefit: "調査turnaround、analyst・弁理士hours、外注費、relevant-document recall・precision、再調査、decision lead timeを改善できる可能性がある。", evidence: "Canon、Suntory、Takasagoの利用を確認するが、Japan deployment固有の定量成果は非公開。Takasagoは競合監視とwhite space探索の改善を定性報告。",
    marketVerdict: "結論：日本企業のR&D投資増加とGenAI・IP governanceが、速度とtraceabilityを両立するdomain AI需要を作る。2024年ARRは公表済みだがprofitは非公開。東京の現行2求人を確認。", marketParagraphs: ["patent、paper、compound、clinical情報をmanualで横断すると、landscape、novelty、FTOがbottleneckになり、generic AIだけではcitation・legal status・機密性がreviewに耐えない。", "R&D・IP Buyerはdomain data、source traceability、human legal review、private data controlを同じworkflowへ組み込む必要がある。", "Genba分析：1 workflowを4〜8週PoCし、turnaround、hours、recall・precision、citation validation、再調査、decision lead timeをgold setで比較する。"],
    cultureHeadline: "Integrity、Leadership、Openness、Growth、Innovation、Customer。Tokyoの現行2求人はいずれもOn-site。", classification: "出社中心", displayLabel: "東京・On-site", officeDays: "非公開", remoteOnly: "該当なし", flexibility: "generic flexible arrangementをJapan roleへ転用しない",
    goodFor: ["R&D・IPへdomain AIを導入したい", "FDEとaccount expansionを横断したい", "citation・legal workflowを重視したい"], cautionFor: ["日本の定量ROIを必須にする", "KAMのterritory矛盾を許容できない", "AI出力をlegal opinionの代替にしたい"],
    unresolved: [["財務", "2024年ARR 1億米ドル（約157.6億円）。", "current ARR、revenue、profit、FCF、NRR、IPO planは？"], ["Japan team", "Tokyo office・2求人、2023 expansionを確認。", "法人名、設立日、Country Manager、headcount、employment entityは？"], ["Job scope", "KAMはTokyo分類だがSingapore・SEA本文。", "actual territory、Japan account比率、language、manager、travelは？"], ["AI quality", "domain agentとcitationを提供。", "Japan gold-set recall・precision、false negative、human review、liabilityは？"], ["Commercial", "FDE＋KAMを採用。", "quota、attainment、ACV、renewal・expansion credit、implementation fee・TCOは？"]],
  }));
  intelligence.marketStatus.growthSummary = "2024年ARR 1億米ドル（約157.6億円）、2023年比20%増。current scaleは18,000+ innovators、800+ employees。";
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.genbaVerdict = { headline: "ARR到達後も収益性は非公開", body: "ARR到達とdomain agent拡張は成長を示すが、current revenue・profit・Japan成果は非公開。" };
    intelligence.marketStatus.ipoOutlookSummary = "非公開会社。2021年Series Eと当時valuationはhistoricalで、現行求人のpre-IPO表現は時期を保証しない。";
  }
  intelligence.facts = [
    { label: "事業固有規模", value: "2024年ARR 1億米ドル（約157.6億円）", detail: "前年比20%増。ARRは売上ではない。", sourceIds: ["rollout-patsnap-arr", "rollout-b13-customs-fx"] },
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "GAAP revenue、営業・純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-patsnap-arr"] },
    { label: "2021 Series E", value: "3億米ドル（約472.7億円）／当時評価額10億米ドル（約1,575.6億円）", detail: "資本・historical valuationであり売上・current valueではない。", sourceIds: ["rollout-patsnap-series-e", "rollout-b13-customs-fx"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "800人超", detail: "現行公式Careers。", sourceId: "rollout-patsnap-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "2求人から現人数を推測しない。", sourceId: "rollout-patsnap-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都港区新橋1-12-9 7F", detail: "公式About。", sourceId: "rollout-patsnap-about" };
  intelligence.companyStats.japanSince = { value: "2023年までにmarket activity確認", detail: "Japan戦略とoffice増強を公式発表。法人設立年ではない。", sourceId: "rollout-patsnap-japan" };
  intelligence.customerProof = [
    { company: "Canon", products: "Patsnap", outcome: "global patent・literature coverage、search・analytics、AI integrationを選定理由に掲載。", implication: "定量成果・Japan deployment範囲は非公開。", sourceId: "rollout-patsnap-customers" },
    { company: "Takasago International", products: "Patsnap", outcome: "競合IP把握、white space・new molecule探索、proactive monitoringを定性報告。", implication: "話者はUS R&D。時間・金額は非公開。", sourceId: "rollout-patsnap-takasago" },
  ];
  intelligence.roleLens = { salesMotion: "KAMがretention・expansion、FDEがAI solution design・PoC・implementationを担う。", compensation: "日本2求人の給与、OTE、bonus、equityは非公開。", quota: "portfolio、renewal・expansion credit、delivery KPI、attainment、ACVは非公開。", collaboration: "KAM、FDE、Sales、CS、Product、顧客R&D・IP・Legal・Dataが連携。" };
  intelligence.solutions = [
    { name: "Eureka by Patsnap", valueProp: "IP・R&D向けdomain AI agentとevidence-linked workflow。", url: "https://eureka.patsnap.com/rd-landing?start_from=eureka_landingpage", competitors: "Clarivate、LexisNexis、Questel、CAS、generic AI。", differentiation: "patent・science・chemical・clinical dataとcitation・agent workflow。", retention: "製品別・日本の継続率は非公開。" },
    { name: "Open Platform", valueProp: "300+ data API、60+ agent API、MCP・Skills・SDK。", url: "https://www.patsnap.com/", competitors: "data API・内製RAG。", differentiation: "curated domain dataとagent integration。", retention: "API・agent別の継続率は非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-patsnap-about", label: "Patsnap About・Careers", url: "https://www.patsnap.com/about-us", kind: "企業公式", scope: "拠点・社員・規模・culture", checkedAt: researchedAt },
    { id: "rollout-patsnap-jobs-20260817", label: "Patsnap現行Tokyo求人", url: "https://jobs.lever.co/patsnap?location=Tokyo", kind: "企業公式", scope: "2求人・終了反証・条件", checkedAt: researchedAt },
    { id: "rollout-patsnap-arr", label: "Patsnap ARR発表", url: "https://www.patsnap.com/resources/blog/patsnap-surpasses-us100-million-in-annual-recurring-revenue/", kind: "企業公式", scope: "ARR・growth・経営", checkedAt: researchedAt },
    { id: "rollout-patsnap-series-e", label: "Patsnap Series E", url: "https://www.patsnap.com/wp-content/uploads/2021/03/patsnap-press-release-march-16-2021-patsnap-secures-300-million-dollars-in-series-e-funding.pdf", kind: "企業公式", scope: "historical funding・valuation", checkedAt: researchedAt },
    { id: "rollout-patsnap-japan", label: "Patsnap Japan strategy", url: "https://www.patsnap.com/resources/blog/patsnap-makes-strong-foray-into-japanese-market/", kind: "企業公式", scope: "日本市場・office増強", checkedAt: researchedAt },
    { id: "rollout-patsnap-customers", label: "Patsnap customer page", url: "https://official.patsnap.com/fr/customers/?industry=Tech", kind: "企業公式", scope: "Canon adoption", checkedAt: researchedAt },
    { id: "rollout-patsnap-takasago", label: "Patsnap・Takasago", url: "https://www.patsnap.com/fr/customers/takasago/", kind: "企業公式", scope: "日本企業global事例", checkedAt: researchedAt },
    { id: "rollout-patsnap-stat-rd", label: "総務省 2025科学技術研究調査", url: "https://www.stat.go.jp/english/data/kagaku/pdf/2025summary.pdf", kind: "公的機関", scope: "日本R&D支出", checkedAt: researchedAt },
    { id: "rollout-b13-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchPendo(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2020", "日本法人設立", "Pendo.io Japan株式会社を2020年11月に設立。", "rollout-pendo-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "pendo", leaderName: "Todd Olson", leaderLabel: "Founder・CEO", leaderUrl: "https://www.pendo.io/about/", localName: "花尾和成", localLabel: "Japan Country Manager", localUrl: "https://www.pendo.io/news/new-year-2026/",
    companyId: "rollout-pendo-about", jobId: "rollout-pendo-jobs-20260817", customersId: "rollout-pendo-smartdrive", externalId: "rollout-pendo-ipa-dx", financeId: "rollout-pendo-arr",
    targets: ["プロダクト・プロダクト運用", "顧客体験・カスタマーサクセス", "最高情報責任者・IT・DX", "業務変革・人材開発", "データ・AIガバナンス・調達"], competitors: "Amplitude、Mixpanel、Heap、PostHog、WalkMe、Whatfix、Appcues、FullStory、Contentsquare、Productboard、Qualtrics、Gainsight、内製analytics・guide",
    feature: "Analytics、Guides、Session Replay、Listen・Validate・Roadmaps、Predict、Sentiment、Orchestrate、Data Sync、Leo・MCP、Agent AnalyticsをSXM platformで統合。", advantage: "quant・qual・visual analysisからsegment別in-app actionまで同じidentity・data modelで閉じ、customer・employee・agent experienceを横断する。", benefit: "activation、time-to-value、workflow completion、ticket・training hours、retention、software utilization、agent outcomeを改善できる可能性がある。", evidence: "SmartDriveはonboarding工数60%減・問い合わせ約20%減、NECは約2,500時間削減等を報告。複数施策の共同成果で単独因果ではない。",
    marketVerdict: "結論：DX・AI導入が進む一方、成果指標・ROI・業務組込みが弱く、利用dataから介入まで閉じるSXM需要がある。売上・profitは非公開。東京の現行1求人を確認。", marketParagraphs: ["analytics、feedback、ticket、roadmap、guideが分断すると、誰がどこで止まり、未定着がsupport工数・retention・software ROIへどう波及したか説明できない。", "AI agent拡大で人とagent双方の完了、error、escalation、governanceを測る追加要求が生まれる。", "Genba分析：1 workflowでactivation、TTV、completion、error、ticket、training、retentionをbaseline化し、analysis→GuideのliftをA/B比較する。"],
    cultureHeadline: "Maniacal Focus on Customer、Hone your craft、The TEAM is Pendo、Bias to act。Japan AEは週3日office。", classification: "ハイブリッド", displayLabel: "東京・Hybrid", officeDays: "週3日", remoteOnly: "該当なし", flexibility: "flexible hours・PTOの全社説明。Japan roleは週3日officeを優先",
    goodFor: ["product・IT・CXを横断して売りたい", "analyticsからactionまで成果化したい", "enterprise new logoをbuilderとして開拓したい"], cautionFor: ["GAAP財務開示を必須にする", "2026 layoffの影響を許容できない", "best-of-breedよりsuiteを避けたい"],
    unresolved: [["Territory", "Japan Enterprise AE 1件、国内caseとdata centerを確認。", "installed base、new・expand、partner credit、named accounts、coverageは？"], ["Compensation", "数値報酬は非公開。", "quota、OTE、pay mix、ramp、attainment、ACV、cycleは？"], ["Delivery", "国内SE・CS等の人数は非公開。", "SE、CS、PS、日本語support、security review、Japan DCの責任境界は？"], ["Platform adoption", "analyticsからguide・agentまでsuite拡張。", "module attach、replacement proof、pricing、implementation負荷、Classic Feedback移行は？"], ["Organization", "2026年に約10%layoff報道。", "日本影響、headcount、decision rights、career path、liquidity・IPO方針は？"]],
  }));
  intelligence.marketStatus.growthSummary = "FY2024公表ARR 2億米ドル（約315.1億円）。current scaleは14,000+ companies、月間1B+ users。ARRは売上ではない。";
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.genbaVerdict = { headline: "国内proofは強いが財務透明性は限定", body: "ARR・顧客規模と国内定量caseは強いが、current revenue・profit、Japan scale、layoff影響は非公開。" };
    intelligence.marketStatus.ipoOutlookSummary = "非公開会社。2021年評価額26億米ドル（約4,096.6億円）はhistorical。2025年のcredit facilityは借入枠であり売上・equity fundingではない。";
  }
  intelligence.facts = [
    { label: "事業固有規模", value: "FY2024 ARR 2億米ドル（約315.1億円）", detail: "ARRは売上ではない。同年度に初のpositive cash generation quarterを公表したが金額・継続性は非公開。", sourceIds: ["rollout-pendo-arr", "rollout-b13-customs-fx"] },
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "GAAP revenue、営業・純利益、EBITDA、FCF額は確認できない。", sourceIds: ["rollout-pendo-arr"] },
    { label: "Current scale", value: "14,000+ companies／1B+ monthly users／850+ employees", detail: "paid・free内訳、user重複定義は非公開。", sourceIds: ["rollout-pendo-about"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "850人超", detail: "現行公式About。10 offices。", sourceId: "rollout-pendo-about" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "求人・support増加claimから現人数を推測しない。", sourceId: "rollout-pendo-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都渋谷区・street address非公開", detail: "PR代理店住所やdata centerをofficeと混同しない。", sourceId: "rollout-pendo-japan" };
  intelligence.companyStats.japanSince = { value: "2020年11月", detail: "Pendo.io Japan株式会社設立。2021年3月にTokyo展開を発表。", sourceId: "rollout-pendo-japan" };
  intelligence.customerProof = [
    { company: "SmartDrive", products: "Pendo", outcome: "onboarding工数60%減、SMBの60%をself-onboarding、特定機能問い合わせ約20%減、計測反映2週超から翌日。", implication: "SFA・API・BI連携と3部門運用を含む共同成果。", sourceId: "rollout-pendo-smartdrive" },
    { company: "PPIH", products: "Pendo", outcome: "約5万人・650+店舗の移行で初週問い合わせは予測300〜400件に対し約150〜200件。", implication: "実績との同条件比較でなくforecast比。100+ guidesと外部助言を含む。", sourceId: "rollout-pendo-ppih" },
    { company: "NEC", products: "Pendo", outcome: "約48,000人のHR systemで約2,500時間削減、登録率85%から98%等を報告。", implication: "process mining・業務改革・guide設計との共同成果。", sourceId: "rollout-pendo-nec" },
  ];
  intelligence.roleLens = { salesMotion: "Enterprise AEが1,500人超企業へnew pipeline、multi-year strategy、C-suite・IT・business alignment、closeを担う。", compensation: "日本のbase、OTE、pay mix、equityは非公開。", quota: "quota、attainment、ACV、cycle、new・expansion・partner creditは非公開。", collaboration: "AE、SE、CS、Legal、Product、Leadership、顧客Product・IT・CX・Procurementが連携。" };
  intelligence.solutions = [
    { name: "Pendo Analytics・Guides", valueProp: "user behaviorをcapture・分析し、segment別in-app actionへ接続。", url: "https://www.pendo.io/product/analytics/", competitors: "Amplitude、Mixpanel、WalkMe、Whatfix。", differentiation: "analysisとactionを同一platformで扱う。", retention: "module別・日本の継続率は非公開。" },
    { name: "Listen・Replay・Agent Analytics", valueProp: "feedback、session、agent outcomeをproduct decisionへ統合。", url: "https://www.pendo.io/product/", competitors: "FullStory、Contentsquare、Productboard、Qualtrics。", differentiation: "quant・qual・visual・agentをidentity付きで横断。", retention: "module attach・継続率は非公開。" },
  ];
  addSources(intelligence, [
    { id: "rollout-pendo-about", label: "Pendo About・Careers", url: "https://www.pendo.io/about/", kind: "企業公式", scope: "経営・社員・顧客・culture・製品", checkedAt: researchedAt },
    { id: "rollout-pendo-jobs-20260817", label: "Pendo現行Japan求人", url: "https://job-boards.greenhouse.io/pendo/jobs/8518472002", kind: "企業公式", scope: "求人・勤務・言語非開示・終了反証", checkedAt: researchedAt },
    { id: "rollout-pendo-arr", label: "Pendo ARR発表", url: "https://www.pendo.io/ja-jp/news/pendo-surpasses-200-million-in-arr-releases-record-number-of-new-products-during-fiscal-year/", kind: "企業公式", scope: "ARR・顧客・cash generation", checkedAt: researchedAt },
    { id: "rollout-pendo-japan", label: "Pendo Japan展開・2026年頭所感", url: "https://www.pendo.io/news/new-year-2026/", kind: "企業公式", scope: "日本責任者・local support", checkedAt: researchedAt },
    { id: "rollout-pendo-smartdrive", label: "Pendo・SmartDrive", url: "https://www.pendo.io/customers/smartdrive/", kind: "企業公式", scope: "国内onboarding・support成果", checkedAt: researchedAt },
    { id: "rollout-pendo-ppih", label: "Pendo・PPIH", url: "https://www.pendo.io/customers/ppih/", kind: "企業公式", scope: "国内大規模移行", checkedAt: researchedAt },
    { id: "rollout-pendo-nec", label: "Pendo・NEC", url: "https://www.pendo.io/customers/nec/", kind: "企業公式", scope: "国内工数・登録率", checkedAt: researchedAt },
    { id: "rollout-pendo-ipa-dx", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html", kind: "公的機関", scope: "DX・AI成果指標・ROI", checkedAt: researchedAt },
    { id: "rollout-b13-customs-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchThirteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.nexthink) patchNexthink(records.nexthink);
  if (records.nice) patchNice(records.nice);
  if (records.patch) patchPatch(records.patch);
  if (records.patsnap) patchPatsnap(records.patsnap);
  if (records.pendo) patchPendo(records.pendo);
}
