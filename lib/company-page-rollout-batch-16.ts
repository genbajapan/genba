import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refresh(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function milestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function patchUbiquiti(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2003", "創業", "Robert J. Peraが創業。現在のoperationsは2005年開始。", "rollout-ubiquiti-company");
  milestone(intelligence, "確認不能", "日本進出年は確認不能", "日本Remote・東京優先の2求人は確認できるが、法人・office・責任者は確認できない。", "rollout-ubiquiti-jobs");
  applyStandard(intelligence, buildCompactPatch({
    slug: "ubiquiti", leaderName: "Robert J. Pera", leaderLabel: "Founder・Chairman・CEO", leaderUrl: "https://ir.ui.com/company/board-of-directors", localName: "公開情報で確認不能", localLabel: "Japan責任者・法人", localUrl: "https://job-boards.greenhouse.io/ubiquiti",
    companyId: "rollout-ubiquiti-company", jobId: "rollout-ubiquiti-jobs", customersId: "rollout-ubiquiti-sony", externalId: "rollout-b16-ipa-dx", financeId: "rollout-ubiquiti-q3fy26",
    targets: ["中堅・大企業IT", "教育・宿泊・小売", "SI・MSP・販売代理店", "複数拠点network運用", "物理security・入退室・ProAV"], competitors: "Cisco Meraki、Aruba・HPE、Fortinet、Juniper Mist、Axis・Verkada、専用access・VoIP・storage、distributor・内製運用",
    feature: "UniFi Network、Protect、Access、Talk、Drive、Connect、ProAVを共通管理面へ統合。", advantage: "networkだけでなくcamera、door access、VoIP、storage、displayまで単一ecosystemで管理し、継続licenseに依存しないpricingを訴求する。", benefit: "multi-site運用、tool・license・hardware TCO、deployment、training、incident対応を簡素化できる可能性がある。", evidence: "Sony Sportsのglobal 12拠点事例はAtlantaの200〜250人拠点を含むfull-stack UniFi管理を報告。日本国内deploymentではなくvendor case。",
    marketVerdict: "結論：IT人材不足とransomware・supply-chain riskが、少人数でnetwork・physical ITを統合運用する需要を作る。Q3 FY2026売上7.882億米ドル（約1,241.9億円）、営業利益2.908億米ドル（約458.2億円）。日本でAE・初のSE leadを募集。", marketParagraphs: ["拠点ごとにnetwork、camera、access、voice、storageが分断すると、configuration、license、support、incidentの運用負荷が増える。", "Buyerは価格だけでなく、enterprise SLA、security update、inventory・warranty、partner skill、migration、故障時対応を求める。", "Genba分析：限定拠点でcoverage、incident、admin hours、tool・license数、deployment、3年TCOを競合と比較する。"],
    cultureHeadline: "創業者主導・lean team・高いexecution ownership。日本2求人はRemote / Hybridで東京優先。", classification: "ハイブリッド", displayLabel: "日本Remote・東京優先", officeDays: "非公開", remoteOnly: "Remote可能", flexibility: "顧客・partner訪問と出張あり",
    goodFor: ["hardwareとsoftwareの両方を売りたい", "direct・channelを横断したい", "日本のSE組織を初期から作りたい"], cautionFor: ["法人・officeの確定を必須にする", "single-product SaaSだけを扱いたい", "inventory・support riskを避けたい"],
    unresolved: [["Territory", "AEと日本初SE leadの2求人。", "named accounts、channel、installed base、AE・SEの責任境界は？"], ["Compensation", "数値報酬は非公開。", "base、OTE、pay mix、quota、equity、ramp、attainmentは？"], ["Japan entity", "Remote・東京優先だが法人・officeは未確認。", "employment entity、住所、責任者、headcount、supportは？"], ["Enterprise support", "統合portfolioと低TCOを訴求。", "SLA、warranty、RMA、security update、spares、escalationは？"], ["Key-person risk", "Founder・CEOへの依存を法定資料がriskとして記載。", "Japan decision rightsとsuccession、product priorityは？"]],
  }));
  intelligence.marketStatus.growthSummary = "Q3 FY2026売上7.882億米ドル（約1,241.9億円）、営業利益2.908億米ドル（約458.2億円）、純利益2.339億米ドル（約368.5億円）。Enterprise Technology売上7.179億米ドル（約1,131.1億円）。";
  intelligence.facts = [
    { label: "Q3 FY2026売上", value: "7.882億米ドル（約1,241.9億円）", detail: "前年同期比18.7%増。", sourceIds: ["rollout-ubiquiti-q3fy26", "rollout-b16-fx"] },
    { label: "稼ぐ力", value: "営業利益2.908億米ドル（約458.2億円）", detail: "純利益2.339億米ドル（約368.5億円）、gross margin 47%。", sourceIds: ["rollout-ubiquiti-q3fy26", "rollout-b16-fx"] },
    { label: "事業構成", value: "Enterprise Technology 7.179億米ドル（約1,131.1億円）", detail: "Service Provider Technologyは7,030万米ドル（約110.8億円）。", sourceIds: ["rollout-ubiquiti-q3fy26", "rollout-b16-fx"] },
  ];
  intelligence.customerProof = [{ company: "Sony Sports", products: "UniFi full stack", outcome: "global 12拠点をcentral management。Atlantaは200〜250人規模。", implication: "日本企業のglobal事例であり、日本国内deployment・ROIの証明ではない。", sourceId: "rollout-ubiquiti-sony" }];
  intelligence.roleLens = { salesMotion: "AEがdirect・channelのfull-cycle、SEがarchitecture・demo・partner enablementを担う初期Japan team。", compensation: "日本の給与、OTE、equityは非公開。", quota: "quota、attainment、booking・shipment credit、ACV、cycleは非公開。", collaboration: "end customer、SI・MSP・distributorとSales、SE、Product、Supportを横断。" };
  intelligence.marketStatus.capitalMarketRead = { asOf: "2026年8月17日", metrics: [{ label: "Q3売上", value: "7.882億米ドル（約1,241.9億円）", change: "+18.7%", interpretation: "Enterprise Technologyが成長を牽引。", sourceId: "rollout-ubiquiti-q3fy26" }, { label: "営業利益", value: "2.908億米ドル（約458.2億円）", change: "margin 36.9%", interpretation: "高いhardware・ecosystem economics。", sourceId: "rollout-ubiquiti-q3fy26" }], growthDrivers: [{ title: "UniFi portfolio・channel expansion", evidence: "日本でAEと初のSE leadを同時募集。", japanMeaning: "direct・channel・technical coverageをlocalで構築。", sourceIds: ["rollout-ubiquiti-jobs"] }], risks: [{ title: "key person・inventory・competition", disclosedRisk: "CEO依存、supply・inventory、price competitionを法定資料が開示。", companyResponse: "portfolio拡張とlean operating modelを継続。", genbaRead: "Japan support、RMA、inventory、partner能力を案件で検証する。", sourceIds: ["rollout-ubiquiti-q3fy26"] }], japanCommitment: { verdict: "現行2求人は確認できるが法人・office・国内caseは未確認。", summary: "初のSE leadを採用。", signals: [{ year: "2026", title: "日本2求人", detail: "AEとSales Solution Engineer。", sourceIds: ["rollout-ubiquiti-jobs"] }], unknowns: ["Japan revenue・customer・headcount", "法人・office・leader", "quota・attainment・support SLA"] }, scenarios: [{ scenario: "基本", title: "portfolio拡張", body: "networkからphysical ITへ拡大。" }, { scenario: "上振れ", title: "統合運用標準化", body: "multi-siteでfull stack採用が進む。" }, { scenario: "下振れ", title: "supply・support・競争", body: "inventoryとenterprise supportが成長制約になる。" }], sourceIds: ["rollout-ubiquiti-q3fy26", "rollout-ubiquiti-jobs"] };
  addSources(intelligence, [
    { id: "rollout-ubiquiti-company", label: "Ubiquiti company・board", url: "https://ir.ui.com/company/board-of-directors", kind: "企業公式", scope: "創業・leadership", checkedAt: researchedAt },
    { id: "rollout-ubiquiti-jobs", label: "Ubiquiti Greenhouse", url: "https://job-boards.greenhouse.io/ubiquiti", kind: "企業公式", scope: "現行日本求人2件", checkedAt: researchedAt },
    { id: "rollout-ubiquiti-q3fy26", label: "Ubiquiti Q3 FY2026 results", url: "https://www.sec.gov/Archives/edgar/data/1511737/000151173726000035/exhibit991-33126.htm", kind: "法定開示", scope: "売上・利益・segment", checkedAt: researchedAt },
    { id: "rollout-ubiquiti-sony", label: "Ubiquiti・Sony Sports", url: "https://casestudies.ui.com/case-study/sony-sports-scaling-global-sports-technology-with-unifi", kind: "企業公式", scope: "日本企業global case", checkedAt: researchedAt },
    { id: "rollout-b16-ipa-dx", label: "IPA DX人材・AI時代", url: "https://www.ipa.go.jp/digital/chousa/discussion-paper/dx2025_digital_talent_ai_era.html", kind: "公的機関", scope: "IT・DX人材不足", checkedAt: researchedAt },
    { id: "rollout-b16-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchVeeva(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2007", "創業", "life sciences industry cloud企業として創業。", "rollout-veeva-company");
  milestone(intelligence, "2011", "日本事業開始", "日本での事業基盤を構築。", "rollout-veeva-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "veeva", leaderName: "Peter Gassner", leaderLabel: "Founder・CEO", leaderUrl: "https://www.veeva.com/about/leadership/", localName: "Hirotaka Chiba", localLabel: "General Manager, Japan", localUrl: "https://www.veeva.com/jp/leadership/leadership-japan/",
    companyId: "rollout-veeva-company", jobId: "rollout-veeva-jobs", customersId: "rollout-veeva-daiichi", externalId: "rollout-veeva-pmda", financeId: "rollout-veeva-q1fy27",
    targets: ["製薬・biotech研究開発", "臨床・data管理", "薬事・安全性・品質", "Medical・Commercial部門", "医療機器・consumer products品質"], competitors: "Salesforce、IQVIA、Oracle、Medidata・Dassault、Microsoft・generic enterprise suites、specialist point tools、SI・in-house systems",
    feature: "Development Cloud、Clinical、Regulatory、Safety、Quality、Medical、Commercial、Data、Vault AIをlife sciences data modelで統合。", advantage: "generic CRM・content managementでなく、規制業務とindustry dataを同じcloud・release modelで標準化する。", benefit: "submission、trial、safety、quality、content・field executionのcycle、inspection readiness、data quality、operating costを改善できる可能性がある。", evidence: "第一三共のVeeva Link事例は国際学会のkey-person分析を15分で実行し、公開情報の検索時間を大幅削減したと報告。vendor caseで独立監査なし。",
    marketVerdict: "結論：医薬品開発・安全性・品質の規制証跡とdata・AI活用がindustry cloud需要を支える。Q1 FY2027売上8.829億米ドル（約1,391.2億円）、営業利益2.731億米ドル（約430.3億円）。日本33求人のうち対象32件。", marketParagraphs: ["Clinical、Regulatory、Safety、Quality、Medical、Commercialが別systemだと、data handoff、変更、inspection、content承認が遅れる。", "Buyerはspeedだけでなくvalidation、audit trail、data integrity、AI explainability、migration、global・Japan regulatory fitを求める。", "Genba分析：限定workflowでcycle time、manual handoff、deviation、inspection evidence、user adoption、3年TCOをbaseline比較する。"],
    cultureHeadline: "業界特化・customer success・長期志向。対象32件は27 On-site、5 Remoteで職種ごとの差が大きい。", classification: "ハイブリッド", displayLabel: "東京・大阪・広島／職種別", officeDays: "On-site 27件、Remote 5件", remoteOnly: "一部Consulting職のみ", flexibility: "travelは職種により最大50〜60%",
    goodFor: ["life sciences domainを深めたい", "営業・consulting・deliveryを横断したい", "規制業務をproduct化したい"], cautionFor: ["業界学習を避けたい", "全職種でremoteを必須にする", "短いtransactional cycleだけを好む"],
    unresolved: [["Territory", "Account、Consulting、CS、Services、Presalesの32件。", "採用人数、重複requisition、product・account別のownershipは？"], ["Compensation", "全32件で数値報酬なし。", "base、bonus・OTE、equity、quota、ramp、attainmentは？"], ["Work Anywhere", "27 On-site・5 Remote。", "実際のoffice頻度、customer travel、在宅例外、region制約は？"], ["Implementation", "wide product・services portfolio。", "partnerとVeeva Servicesの責任、validation、go-live、escalation KPIは？"], ["AI・data", "Vault AI・industry dataを拡張。", "training data、human review、validation、audit、customer data boundaryは？"]],
  }));
  intelligence.marketStatus.growthSummary = "FY2026売上31.953億米ドル（約5,034.5億円）、営業利益9.164億米ドル（約1,443.9億円）、純利益9.089億米ドル（約1,432.1億円）。Q1 FY2027売上は前年同期比16%増。";
  intelligence.facts = [
    { label: "Q1 FY2027売上", value: "8.829億米ドル（約1,391.2億円）", detail: "subscription revenueは7.302億米ドル。", sourceIds: ["rollout-veeva-q1fy27", "rollout-b16-fx"] },
    { label: "Q1稼ぐ力", value: "営業利益2.731億米ドル（約430.3億円）", detail: "GAAP operating margin 30.9%、純利益2.609億米ドル。", sourceIds: ["rollout-veeva-q1fy27", "rollout-b16-fx"] },
    { label: "FY2026", value: "売上31.953億米ドル（約5,034.5億円）", detail: "営業利益9.164億米ドル、純利益9.089億米ドル。", sourceIds: ["rollout-veeva-q1fy27", "rollout-b16-fx"] },
  ];
  intelligence.customerProof = [{ company: "第一三共", products: "Veeva Link Key People", outcome: "国際学会のkey-person分析を15分で実行し、公開情報検索時間を大幅削減。", implication: "顧客談をVeevaが掲載。ROIの独立監査なし。", sourceId: "rollout-veeva-daiichi" }];
  intelligence.roleLens = { salesMotion: "Account Partnerがnew・expand、Solution Consultantがpresales、Consulting・Services・CSが導入・adoption・valueを担う多職種model。", compensation: "32件すべて日本の数値給与・OTE非公開。", quota: "quota、attainment、ACV、cycle、portfolio、services utilizationは非公開。", collaboration: "R&D、Clinical、Safety、Quality、Regulatory、Medical、Commercial、IT、Procurementとglobal product・servicesを横断。" };
  intelligence.marketStatus.capitalMarketRead = { asOf: "2026年8月17日", metrics: [{ label: "Q1 FY2027売上", value: "8.829億米ドル（約1,391.2億円）", change: "+16%", interpretation: "subscription growthが継続。", sourceId: "rollout-veeva-q1fy27" }, { label: "営業利益", value: "2.731億米ドル（約430.3億円）", change: "margin 30.9%", interpretation: "成長とGAAP profitabilityを両立。", sourceId: "rollout-veeva-q1fy27" }], growthDrivers: [{ title: "Development・Commercial・Data・AI expansion", evidence: "日本で32対象求人を掲載。", japanMeaning: "SalesからConsulting・CS・Servicesまでlifecycleを強化。", sourceIds: ["rollout-veeva-q1fy27", "rollout-veeva-jobs"] }], risks: [{ title: "industry concentration・competition・AI validation", disclosedRisk: "life sciences spending、競争、regulatory・data・AI riskが影響。", companyResponse: "industry cloud・data・Vault AIへ継続投資。", genbaRead: "Japan product mix、validation、migration、adoptionを分けて確認する。", sourceIds: ["rollout-veeva-q1fy27"] }], japanCommitment: { verdict: "日本leadershipと32対象求人、国内caseを確認。日本売上・headcountは非公開。", summary: "東京・大阪・広島で多職種採用。", signals: [{ year: "2026", title: "日本32対象求人", detail: "Sales、Consulting、CS、Services、Presales。", sourceIds: ["rollout-veeva-jobs"] }], unknowns: ["Japan revenue・customer・headcount", "quota・attainment・報酬", "重複requisition・採用人数"] }, scenarios: [{ scenario: "基本", title: "industry cloud expansion", body: "R&DとCommercialのsubscriptionが成長。" }, { scenario: "上振れ", title: "data・AI標準化", body: "industry dataとAI workflowが追加成長。" }, { scenario: "下振れ", title: "spending・competition・validation", body: "life sciences予算とAI validationが導入を遅らせる。" }], sourceIds: ["rollout-veeva-q1fy27", "rollout-veeva-jobs"] };
  addSources(intelligence, [
    { id: "rollout-veeva-company", label: "Veeva company", url: "https://www.veeva.com/about/", kind: "企業公式", scope: "会社・product・leadership", checkedAt: researchedAt },
    { id: "rollout-veeva-japan", label: "Veeva Japan leadership", url: "https://www.veeva.com/jp/leadership/leadership-japan/", kind: "企業公式", scope: "日本経営陣", checkedAt: researchedAt },
    { id: "rollout-veeva-jobs", label: "Veeva Japan Careers", url: "https://jobs.lever.co/veeva?location=Japan%20-%20Tokyo", kind: "企業公式", scope: "日本33求人・対象32件", checkedAt: researchedAt },
    { id: "rollout-veeva-q1fy27", label: "Veeva Q1 FY2027 results", url: "https://ir.veeva.com/news/news-details/2026/Veeva-Announces-Fiscal-2027-First-Quarter-Results/default.aspx", kind: "法定開示", scope: "売上・利益・subscription", checkedAt: researchedAt },
    { id: "rollout-veeva-daiichi", label: "Veeva・第一三共", url: "https://www.veeva.com/jp/customer-stories/daiichi-sankyo-pioneers-a-new-phase-of-customer-understanding-with-veeva-link-key-people/", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-veeva-pmda", label: "PMDA 医薬品の承認審査", url: "https://www.pmda.go.jp/review-services/drug-reviews/about-reviews/0001.html", kind: "公的機関", scope: "医薬品規制・審査環境", checkedAt: researchedAt },
    { id: "rollout-b16-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchWasabi(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2017", "創業", "David FriendとJeff Flowersが創業。", "rollout-wasabi-company");
  milestone(intelligence, "2022", "Japan leadership", "Aki WakimotoをJapan Country Managerに任命。現職継続は2026年に再確認できない。", "rollout-wasabi-japan");
  milestone(intelligence, "確認不能", "日本事業開始年は確認不能", "日本法人・国内region・顧客は確認できるが、開始年を一次情報で確定できない。", "rollout-wasabi-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "wasabi", leaderName: "David Friend", leaderLabel: "Co-founder・CEO", leaderUrl: "https://wasabi.com/company/about", localName: "Aki Wakimoto", localLabel: "2022年任命 Japan Country Manager", localUrl: "https://wasabi.com/company/newsroom/press-releases/wasabi-technologies-adds-to-leadership-team-in-japan-and-australia-to-support-the-demand-for-hot-cloud-storage-across-asia-pacific",
    companyId: "rollout-wasabi-company", jobId: "rollout-wasabi-jobs", customersId: "rollout-wasabi-toshiba", externalId: "rollout-b16-ipa-threats", financeId: "rollout-wasabi-presskit",
    targets: ["backup・archive運用", "media・content企業", "AI・analytics data基盤", "教育・公共・規制data", "MSP・販売partner"], competitors: "AWS S3、Azure Blob、Google Cloud Storage、Backblaze B2、Cloudflare R2、Seagate Lyve Cloud、on-prem object storage・tape",
    feature: "S3-compatible Hot Cloud Storage、Reserved Capacity、Covert Copyを、egress・API feeなしのpricingで提供。", advantage: "hot tier一つと単純pricing、partner-first motion、Tokyo・Osakaを含むregionでcloud storageの予見可能性を訴求。", benefit: "backup・archive・media・AI dataのstorage、egress、運用、migration TCOを下げられる可能性がある。", evidence: "東芝は1PB file serverの85%をWasabiへ移し30% cost削減。Sumallyはcostを3分の1、27TB migrationを3日で完了と報告。vendor-selected case。",
    marketVerdict: "結論：ransomware対策、data増加、AI・media workloadが低予測変動のobject storage需要を作る。recognized revenue・利益・ARRは非公開。公式press kitは10万超顧客、1.8万超partner、7億米ドル超（約1,102.9億円）調達。日本Inside Sales 1件。", marketParagraphs: ["cloud dataが増えるほどcapacityだけでなくegress、request、retention、migration、restoreの総費用が予算を不安定にする。", "Buyerは単価だけでなくdurability、immutability、region、restore、support、minimum retention、exit・migrationを求める。", "Genba分析：代表datasetでstorage・egress・request・restore、admin hours、RPO・RTO、3年TCOを比較する。"],
    cultureHeadline: "category disruptionとpartner-firstを掲げるgrowth company。現行Japan求人の勤務形態は非公開。", classification: "未確認", displayLabel: "日本（勤務形態は非公開）", officeDays: "非公開", remoteOnly: "明記なし", flexibility: "個別求人の条件を確認",
    goodFor: ["cloud TCOを定量化したい", "inside salesでcloseまで持ちたい", "partner・storage ecosystemを扱いたい"], cautionFor: ["公開財務を必須にする", "workstyleの明示を必須にする", "egress以外のcontract条件を検証したくない"],
    unresolved: [["Territory", "SMB・Mid-Market close 80%、handoff 20%。", "account数、inbound・outbound、channel credit、renewal ownershipは？"], ["Compensation", "数値報酬は非公開。", "base、OTE、pay mix、quota、ramp、attainmentは？"], ["Japan team", "2022 CM任命と日本法人を確認。", "現責任者、headcount、SE・CS・support、officeは？"], ["Economics", "egress・API feeなしを訴求。", "minimum retention、support、reserved capacity、migration・exitの実質TCOは？"], ["Acquisition", "2026年Lyve Cloudを取得。", "region、customer、product、channel、supportの統合計画とriskは？"]],
  }));
  intelligence.marketStatus.growthSummary = "recognized revenue、ARR、operating・net income、FCFは非公開。公式press kitは10万超顧客、500人超、1.8万超partner、7億米ドル超（約1,102.9億円）funding。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "private company。recognized revenue、profit、FCFを確認できない。", sourceIds: ["rollout-wasabi-presskit"] },
    { label: "事業規模", value: "10万超顧客・1.8万超partner", detail: "16 region、100カ国超。会社press kit掲載値。", sourceIds: ["rollout-wasabi-presskit"] },
    { label: "資本", value: "累計7億米ドル超（約1,102.9億円）", detail: "fundingであり売上・現在価値ではない。", sourceIds: ["rollout-wasabi-presskit", "rollout-b16-fx"] },
  ];
  intelligence.customerProof = [
    { company: "東芝", products: "Hot Cloud Storage", outcome: "1PB file serverの85%を移行し、30% cost削減。", implication: "vendor・customer共同発表。独立監査なし。", sourceId: "rollout-wasabi-toshiba" },
    { company: "Sumally", products: "Hot Cloud Storage", outcome: "costを3分の1、27TB migrationを3日で完了。", implication: "2〜3カ月見込みとの比較を含むvendor case。", sourceId: "rollout-wasabi-sumally" },
  ];
  intelligence.roleLens = { salesMotion: "Inside SalesがSMB・Mid-Marketの80%を管理・closeし、20%をChannel Account teamへhandoff。", compensation: "日本の給与、OTE、pay mixは非公開。", quota: "quota、attainment、account数、cycle、handoff・renewal creditは非公開。", collaboration: "Country Manager、Channel Account、SE・CS・partnerとcustomer IT・backup・data teamを横断。" };
  addSources(intelligence, [
    { id: "rollout-wasabi-company", label: "Wasabi company", url: "https://wasabi.com/company/about", kind: "企業公式", scope: "会社・product・leadership", checkedAt: researchedAt },
    { id: "rollout-wasabi-jobs", label: "Wasabi Greenhouse", url: "https://job-boards.greenhouse.io/wasabi/jobs/5382765008", kind: "企業公式", scope: "現行日本求人1件", checkedAt: researchedAt },
    { id: "rollout-wasabi-presskit", label: "Wasabi press kit", url: "https://wasabi.com/company/newsroom/press-kit", kind: "企業公式", scope: "顧客・partner・funding・region", checkedAt: researchedAt },
    { id: "rollout-wasabi-japan", label: "Wasabi Japan leadership", url: "https://wasabi.com/company/newsroom/press-releases/wasabi-technologies-adds-to-leadership-team-in-japan-and-australia-to-support-the-demand-for-hot-cloud-storage-across-asia-pacific", kind: "企業公式", scope: "Japan Country Manager任命", checkedAt: researchedAt },
    { id: "rollout-wasabi-toshiba", label: "Wasabi・東芝", url: "https://wasabi.com/company/newsroom/press-releases/toshiba-group-selects-wasabi-hot-cloud-storage-for-cost-savings", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-wasabi-sumally", label: "Wasabi・Sumally", url: "https://info.wasabi.com/hubfs/Japan/Sumally_CaseStudy_JP_20240620.pdf", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-b16-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b16-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchWorkato(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2013", "創業", "enterprise automation companyとして創業。", "rollout-workato-company");
  milestone(intelligence, "2021", "日本法人設立", "日本法人・東京拠点を開設。", "rollout-workato-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "workato", leaderName: "Vijay Tella", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.workato.com/company/about-us", localName: "現責任者は確認不能", localLabel: "Japan leadership", localUrl: "https://www.workato.com/ja-JP/careers",
    companyId: "rollout-workato-company", jobId: "rollout-workato-jobs", customersId: "rollout-workato-navitime", externalId: "rollout-b16-ipa-dx", financeId: "rollout-workato-funding",
    targets: ["CIO・企業architecture", "統合・automation CoE", "AI・data基盤", "事業operations", "SI・consulting・技術partner"], competitors: "MuleSoft、Boomi、Informatica、Microsoft Power Automate、UiPath、Celigo、Zapier、n8n、cloud-native integration、custom API・scripts",
    feature: "iPaaS、workflow automation、data orchestration、Enterprise MCP、AI agent・app actionを一つのplatformで提供。", advantage: "integrationとautomationをbusiness・IT双方が使えるrecipe model、governance、connector・MCP ecosystemで統合する。", benefit: "manual work、integration backlog、API保守、AI agentのaction接続、operation costを改善できる可能性がある。", evidence: "NAVITIMEは50 active recipes、月最大10万task、年数百時間・数百万円削減、OCR 95%超、作業を全体で10分の1と報告。vendor case。",
    marketVerdict: "結論：DX人材不足と生成AI・agent導入が、governed integration・action layer需要を作る。recognized revenue・profit・current ARRは非公開。2021年Series E 2億米ドル（約315.1億円）・当時評価額57億米ドル（約8,980.9億円）。日本Partner Sales 1件。", marketParagraphs: ["SaaS・data・AI agentが増えるほど、point-to-point API、manual handoff、shadow automation、権限・auditが複雑になる。", "Buyerはconnector数だけでなくreliability、governance、identity、data boundary、MCP・agent action、usage・maintenance costを求める。", "Genba分析：1 workflowでlead time、manual hours、failure・recovery、change effort、usage cost、audit evidenceをbaseline比較する。"],
    cultureHeadline: "customer first、speed、learningを掲げるHybrid company。個別Japan求人の出社日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・全社Hybrid", officeDays: "個別求人は非公開", remoteOnly: "full remoteの明記なし", flexibility: "partner・customer活動あり",
    goodFor: ["partner ecosystemを作りたい", "integrationとAI actionを横断したい", "business・IT双方へvalue saleしたい"], cautionFor: ["数値財務の透明性を必須にする", "direct salesだけを希望する", "governance・integration検証を避けたい"],
    unresolved: [["Partner scope", "既存管理と新規開拓、co-market・sell・delivery。", "named partners、sourced・influenced target、directとのcreditは？"], ["Compensation", "数値報酬は非公開。", "base、OTE、pay mix、quota、ramp、attainmentは？"], ["Japan leadership", "日本法人・東京officeは確認。現責任者は未確認。", "reporting line、headcount、SE・CS・support、decision rightsは？"], ["MCP・AI", "Enterprise MCPとagent actionを拡張。", "identity、authorization、audit、rollback、data region、model boundaryは？"], ["Economics", "task・usage modelとwide platform。", "connector保守、task消費、AI・MCP usage、3年TCO、exitは？"]],
  }));
  intelligence.marketStatus.growthSummary = "recognized revenue、operating・net income、FCF、current ARRは非公開。2021年Series E 2億米ドル（約315.1億円）、当時評価額57億米ドル（約8,980.9億円）、累計調達4.21億米ドル（約663.3億円）。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "private company。recognized revenue、profit、FCF、current ARRを確認できない。", sourceIds: ["rollout-workato-company"] },
    { label: "historical資本", value: "2021年Series E 2億米ドル（約315.1億円）", detail: "当時評価額57億米ドル。現在の売上・価値ではない。", sourceIds: ["rollout-workato-funding", "rollout-b16-fx"] },
    { label: "platform scale", value: "12,000超のappをMCPで利用可能", detail: "Workato MCP発表のplatform coverage。customer数・revenueではない。", sourceIds: ["rollout-workato-mcp"] },
  ];
  intelligence.customerProof = [
    { company: "NAVITIME", products: "Workato automation", outcome: "50 active recipes、月最大10万task、年数百時間・数百万円削減、OCR 95%超。", implication: "運用設計を含むvendor case。単独因果・一般化不可。", sourceId: "rollout-workato-navitime" },
    { company: "Coincheck", products: "Workato・MCP", outcome: "10超MCP server、500超recipe、1,600万超task、従業員1人あたり月35時間削減。", implication: "vendor-selected caseで独立監査なし。", sourceId: "rollout-workato-coincheck" },
  ];
  intelligence.roleLens = { salesMotion: "Partner Sales Managerが既存・新規partnerのco-market・co-sell・co-deliveryとpipelineを構築。", compensation: "日本の給与、OTE、pay mixは非公開。", quota: "sourced・influenced pipeline、quota、attainment、partner数、cycleは非公開。", collaboration: "SI・consulting・technology partnerとSales、SE、CS、Product、Legal、Marketingを横断。" };
  addSources(intelligence, [
    { id: "rollout-workato-company", label: "Workato company", url: "https://www.workato.com/company/about-us", kind: "企業公式", scope: "会社・platform・leadership", checkedAt: researchedAt },
    { id: "rollout-workato-japan", label: "Workato Japan Careers", url: "https://www.workato.com/ja-JP/careers", kind: "企業公式", scope: "日本office・culture・hybrid", checkedAt: researchedAt },
    { id: "rollout-workato-jobs", label: "Workato Partner Sales Manager", url: "https://www.workato.com/careers?gh_jid=8627710002#open-roles", kind: "企業公式", scope: "現行日本対象求人1件", checkedAt: researchedAt },
    { id: "rollout-workato-mcp", label: "Workato Enterprise MCP", url: "https://www.workato.com/ja-JP/developers/mcp", kind: "企業公式", scope: "MCP・app ecosystem", checkedAt: researchedAt },
    { id: "rollout-workato-funding", label: "Workato Series E", url: "https://www.businesswire.com/news/home/20211110005326/en/Workato-Raises-%24200-Million-Series-E-at-a-%245.7-Billion-Valuation", kind: "企業公式", scope: "historical funding・valuation", checkedAt: researchedAt },
    { id: "rollout-workato-navitime", label: "Workato・NAVITIME", url: "https://www.workato.com/ja-JP/customers/navitime", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-workato-coincheck", label: "Workato・Coincheck", url: "https://www.workato.com/ja-JP/customers/coincheck", kind: "企業公式", scope: "国内AI・MCP定量case", checkedAt: researchedAt },
    { id: "rollout-b16-ipa-dx", label: "IPA DX人材・AI時代", url: "https://www.ipa.go.jp/digital/chousa/discussion-paper/dx2025_digital_talent_ai_era.html", kind: "公的機関", scope: "DX人材不足・AI需要", checkedAt: researchedAt },
    { id: "rollout-b16-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchZadara(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2011", "創業", "enterprise storage・cloud companyとして創業。", "rollout-zadara-company");
  milestone(intelligence, "2019", "日本事業開始を確認", "Rakuten Mobileへのstorage導入を公式事例で確認。法人・office設立年ではない。", "rollout-zadara-rakuten");
  applyStandard(intelligence, buildCompactPatch({
    slug: "zadara", leaderName: "Yoram Novick", leaderLabel: "CEO", leaderUrl: "https://www.zadara.com/blog/2023/04/17/yoram-novick-why-did-i-join-zadara-as-ceo/", localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.zadara.com/ja/",
    companyId: "rollout-zadara-company", jobId: "rollout-zadara-jobs", customersId: "rollout-zadara-rakuten", externalId: "rollout-b16-meti-ai", financeId: "rollout-zadara-company",
    targets: ["通信・service provider", "規制産業enterprise", "MSP・regional cloud事業者", "sovereign AI・GPU基盤", "hybrid・edge infrastructure運用"], competitors: "AWS・Azure・Google Cloud、VMware・Broadcom、Nutanix、Pure・NetApp・Dell、Cloudian・MinIO、regional sovereign cloud・managed service",
    feature: "500超edge locationでcompute、storage、network、sovereign AIをmulti-tenant・consumption modelで提供。", advantage: "customer・partner siteにcloud control planeとmanaged infrastructureを置き、data location、運用、elasticityを組み合わせる。", benefit: "service provider・regulated buyerがdata sovereignty、DR、capacity、運用、cloud economicsを両立できる可能性がある。", evidence: "Rakuten Mobileは2019年にZadara storageを導入。Yamaga caseは1,000 VDI user規模を報告。日本の定量ROIは非公開でvendor case。",
    marketVerdict: "結論：AI・data sovereigntyとregional cloud、telco edge需要がmanaged sovereign infrastructureの投資理由を作る。private companyで売上・ARR・利益は非公開。旧Senior AEは終了し、東京RemoteのSenior TAM 1件。", marketParagraphs: ["public cloud・on-prem二択では、data location、latency、GPU・capacity、運用skill、exit、service provider economicsを同時に満たしにくい。", "Buyerはsovereigntyの標語でなくlegal entity、control plane、key management、subprocessor、SLA、DR、support、unit economicsを求める。", "Genba分析：限定workloadでlatency、availability、DR、admin hours、capacity・egress、3年TCO、exitを比較する。"],
    cultureHeadline: "One Team、Respectful、Accountable、Achievers、Visionaries。現行Japan roleはRemote。", classification: "フルリモート", displayLabel: "東京・Remote", officeDays: "0日を示す明記はなし", remoteOnly: "公式求人はRemote", flexibility: "customer・partner対応、critical incidentあり",
    goodFor: ["post-sale technical ownershipを持ちたい", "sovereign cloud・DRを深めたい", "MSP・telco partnerをenableしたい"], cautionFor: ["hunter AEだけを希望する", "公開財務を必須にする", "incident escalationを避けたい"],
    unresolved: [["Portfolio", "Senior TAMがpriority customer・partnerを担当。", "担当社数、renewal・expansion、support・CS・SAとの境界は？"], ["Compensation", "数値報酬は非公開。", "base、bonus、equity、MBO、on-call、travel、rampは？"], ["Japan entity", "東京Remoteと国内顧客は確認。法人・office・責任者は未確認。", "employment entity、headcount、local support、data・contract entityは？"], ["Sovereignty", "sovereign AI・edgeを訴求。", "control plane、keys、operator、subprocessor、region、government accessは？"], ["Service economics", "consumption・managed model。", "SLA、capacity commitment、support、migration、exit、3年TCOは？"]],
  }));
  intelligence.marketStatus.growthSummary = "private company。recognized revenue、ARR、operating・net income、EBITDA、FCF、current funding・valuationは非公開。500超のedge locationを公式掲載。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、profit、FCFを確認できない。", sourceIds: ["rollout-zadara-company"] },
    { label: "platform規模", value: "500超のedge location", detail: "事業規模でありcustomer数・売上ではない。", sourceIds: ["rollout-zadara-company"] },
    { label: "日本activity", value: "2019年までに確認", detail: "Rakuten Mobileへの導入。日本法人・office設立の証拠ではない。", sourceIds: ["rollout-zadara-rakuten"] },
  ];
  intelligence.customerProof = [
    { company: "Rakuten Mobile", products: "Zadara Storage", outcome: "2019年にmobile infrastructureへ導入。", implication: "導入地域・cost・performanceの定量成果は非公開。", sourceId: "rollout-zadara-rakuten" },
    { company: "Yamaga", products: "Zadara・VDI infrastructure", outcome: "1,000 VDI user規模。", implication: "vendor PDF。削減率・独立監査なし。", sourceId: "rollout-zadara-yamaga" },
  ];
  intelligence.roleLens = { salesMotion: "現行roleはpost-sale Senior TAM。architecture、health、incident、DR、success plan、training、MSP enablementを所有。", compensation: "日本の給与、bonus、equityは非公開。", quota: "portfolio、renewal・expansion credit、MBO、SLA、on-callは非公開。", collaboration: "Customer、MSP、Support、Engineering、Sales、Solution Architectureを横断。" };
  addSources(intelligence, [
    { id: "rollout-zadara-company", label: "Zadara company", url: "https://www.zadara.com/about/", kind: "企業公式", scope: "会社・platform・scale", checkedAt: researchedAt },
    { id: "rollout-zadara-jobs", label: "Zadara Senior TAM", url: "https://jobs.lever.co/Zadara/f913dc3e-76dd-45eb-89a8-bda865b10ea6", kind: "企業公式", scope: "現行日本求人1件", checkedAt: researchedAt },
    { id: "rollout-zadara-rakuten", label: "Zadara・Rakuten", url: "https://www.zadara.com/wp-content/uploads/Zadara-Rakuten-Infrastructure.pdf", kind: "企業公式", scope: "日本企業導入", checkedAt: researchedAt },
    { id: "rollout-zadara-yamaga", label: "Zadara・Yamaga", url: "https://www.zadara.com/wp-content/uploads/CS_Yamaga.pdf", kind: "企業公式", scope: "国内VDI case", checkedAt: researchedAt },
    { id: "rollout-b16-meti-ai", label: "経産省 AI事業者ガイドライン1.2", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance・data管理", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

export function applyCompanyPageRolloutBatchSixteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.ubiquiti) patchUbiquiti(records.ubiquiti);
  if (records.veeva) patchVeeva(records.veeva);
  if (records.wasabi) patchWasabi(records.wasabi);
  if (records.workato) patchWorkato(records.workato);
  if (records.zadara) patchZadara(records.zadara);
}
