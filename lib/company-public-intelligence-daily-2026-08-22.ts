import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-22";

const cirrusDataIntelligence = buildIntelligence({
  checkedAt,
  slug: "cirrus-data",
  name: "Cirrus Data Solutions",
  jobUrl: "https://jobs.smartrecruiters.com/CirrusDataSolutionsInc/743999891680073-account-executive-in-tokyo",
  officialUrl: "https://cirrusdata.com/about-us",
  customersUrl: "https://cirrusdata.com/success-stories-financial/",
  externalUrl: "https://www.digital.go.jp/resources/standard_guidelines",
  financeUrl: "https://cirrusdata.com/about-us",
  salesSnapshot: "稼働中のblock storageを止めずに近い形で移すdata mobility softwareを売る会社。東京担当AEは、storage刷新とcloud移行を停止risk、移行期間、partner delivery、TCOの事業caseへ変える。",
  growthSummary: "会社公式は2011年創業、累計1EB超のdata移行、125超のpartner、13件のdata mobility関連patentを表示。非公開企業で売上、ARR、顧客数、日本売上、日本team人数は非公開。",
  ipoSummary: "非公開企業。調達額、企業価値、IPO時期、日本単体の売上は公表されていない。",
  milestones: [
    { year: "2011", label: "創業", detail: "Wai LamとWayne Lamがblock data移行の停止と手作業を減らすため創業。", source: "company" },
    { year: "2012", label: "TDI特許", detail: "Transparent Datapath Interceptの最初の米国特許を取得。", source: "company" },
    { year: "2021", label: "Cirrus Migrate Cloud", detail: "cloud向けblock data mobilityを提供開始。", source: "company" },
    { year: "2026.08", label: "日本採用開始を観測", detail: "東京担当Account Executiveの応募導線を公式ATSで確認。日本法人や営業開始年の確定を意味しない。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式事例は、24時間稼働する金融・通信・製造等でstorage refreshやdata center統合を進める際、長い停止、manual cutover、複数vendor調整を減らす目的を示す。migration完了だけでなく、事業停止を避けることが価値になる。" },
    { title: "製品の成り立ちから見る課題", body: "創業者はblock-level dataを効率的・安全に移す方法がなく、migrationが数カ月から年単位になる課題からTDIを設計した。核はsource・target storageへ大きな変更を加えず、live dataを透過的に移すこと。" },
    { title: "外部環境の要求から見る課題", body: "cloud移行、data center集約、hardware更改、virtualization変更が続く一方、企業は停止時間、rollback、data integrity、security、責任分界を説明する必要がある。migrationはIT作業ではなくbusiness continuityの投資判断になる。" },
  ],
  narrative: [
    { label: "背景", body: "storage更改、cloud移行、data center統合の期限があるが、critical applicationは長時間止められない。" },
    { label: "課題", body: "migration tool、professional services、source・target vendor、application ownerが分かれ、移行期間、cutover、rollbackのriskが増える。" },
    { label: "解決策", body: "一つのcritical workloadでlive block migrationをpilotし、transfer速度、downtime、staff工数、cutover成功率、rollback条件を測る。" },
    { label: "選定の理由", body: "storage vendor tool、cloud-native migration、professional services、application-level replicationとの比較で、異種環境を跨ぐ非停止性、automation、partner支援、総工数に優位がある場合に選ぶ。" },
  ],
  openingHook: "次のstorage refreshで、最も止められないapplicationを移すために何時間の停止と何人月の調整を見込んでいますか。",
  valueHypothesis: "migration duration、planned downtime、staff hours、cutover success、rollback、professional services cost、移行後のperformanceをbaseline比較する。",
  objection: "storage vendorかcloud providerの移行toolとSIの作業で十分で、専用platformを増やす必要はない。",
  reframe: "license単価ではなく、異種環境のcoverage、停止時間、manual工程、project遅延、rollback、複数migrationを含むportfolio全体のriskとTCOで比較する。",
  facts: [
    { label: "創業", value: "2011年", detail: "Wai Lam・Wayne Lam兄弟が設立。", source: "company" },
    { label: "移行data", value: "1EB超", detail: "会社公式表示。期間と内訳は非公開。", source: "company" },
    { label: "Partner", value: "125超", detail: "storage manufacturer、solution provider、VAR等。", source: "company" },
    { label: "Patent", value: "13件", detail: "会社公式Aboutがdata mobility関連として表示。", source: "company" },
    { label: "cloud移行速度", value: "4〜6倍", detail: "会社公式の顧客利用に関する表示。比較条件は案件ごとに確認が必要。", source: "customers" },
    { label: "日本対象求人", value: "1件", detail: "Account Executive in Tokyo。", source: "job" },
  ],
  customers: [
    { company: "Major Financial Firm", products: "Cirrus Migrate On-Premises", outcome: "24/7稼働の2拠点でapplication performanceを保ちながらstorage移行した匿名公式事例。", implication: "停止riskを重視する金融workloadのproof。" },
    { company: "Telecom Provider", products: "Cirrus Migrate On-Premises / Services", outcome: "9カ月のstorage refreshを進め、vendor・構成の複雑性とdowntimeを抑えた匿名公式事例。", implication: "複数vendorとproject deliveryを含む例。" },
    { company: "Major Automotive Retail Group", products: "Cirrus Migrate On-Premises", outcome: "5,000拠点を持つ企業がDR siteのmigrationを自社で進めた匿名公式事例。", implication: "repeatable operationとself-serviceの価値。" },
  ],
  externalSignals: [
    { label: "cloud・system移行", value: "継続的な可用性管理", detail: "重要systemの更改では、data integrity、access control、backup、rollback、責任分界を移行計画へ組み込む必要がある。", caveat: "具体的要件はsystem、industry、契約で異なる。" },
    { label: "business continuity", value: "停止costの可視化", detail: "migration中の停止は売上、業務、顧客対応、regulatory reportingへ波及するため、technical downtimeを事業impactへ変換する必要がある。", caveat: "製品導入だけで個別企業の継続性を保証しない。" },
  ],
  role: "東京担当Account Executiveがterritory plan、prospecting、qualification、strategic transaction、close、partner・distributor・VARとのco-sell、市場feedbackを持つ。",
  organization: "日本語・英語が必要な東京担当full-time role。日本法人、雇用主体、office、reporting line、local SE・support人数、出社頻度は公式求人で確認できない。",
  careerValue: "block storage、cloud・data center migration、BCDR、channel co-sell、Fortune 1000のbusiness continuityを一つのEnterprise sales cycleで扱う経験。",
  globalHeadcount: "11〜50人規模",
  japanPresence: "東京担当Account Executiveを公式募集。日本法人・常設officeは未確認",
  japanSince: "2026年8月に現行Tokyo求人を確認",
  solutions: [
    { name: "Cirrus Migrate Cloud", valueProp: "live block dataをon-premises、cloud、hybrid間で移行する。", url: "https://cirrusdata.com/cirrus-migrate-cloud", competitors: "cloud-native migration、Zerto、storage vendor tool、professional services。", differentiation: "異種block storageを跨ぐautomationとzero-to-near-zero downtime。" },
    { name: "Cirrus Migrate On-Premises", valueProp: "data center内のstorage refresh・統合を停止を抑えて実行する。", url: "https://cirrusdata.com/cirrus-migrate-on-premises", competitors: "array migration tool、host replication、SI manual migration。", differentiation: "patented TDIとany-to-any connectivity。" },
    { name: "Cirrus Data Cloud", valueProp: "migration project、automation、visibilityをcloud serviceとして管理する。", url: "https://cirrusdata.com/", competitors: "project-specific script、vendor console、migration services。", differentiation: "複数migrationをrepeatableなoperationへ変える。" },
  ],
  fitTags: ["Data Mobility", "Storage Migration", "Cloud Migration", "Enterprise Sales", "Channel", "Tokyo"],
  comparisons: [
    { arena: "Data Mobility", companies: ["Cirrus Data", "Zerto", "storage vendor tools", "professional services"], why: "coverage、downtime、automation、TCO" },
    { arena: "Cloud Migration", companies: ["Cirrus Migrate Cloud", "AWS・Azure native tools", "host replication", "application rebuild"], why: "source・target、cutover、rollback、工数" },
    { arena: "Storage Refresh", companies: ["Cirrus Data", "array replication", "backup restore", "manual copy"], why: "異種対応、performance、business continuity" },
  ],
});

const synthesiaIntelligence = buildIntelligence({
  checkedAt,
  jobConfirmed: false,
  slug: "synthesia",
  name: "Synthesia",
  jobUrl: "https://jobs.ashbyhq.com/synthesia/bd9ba8f0-b87b-4a3a-bca9-6496afc776f2/",
  officialUrl: "https://www.synthesia.io/",
  customersUrl: "https://www.synthesia.io/case-studies",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://www.synthesia.io/post/synthesia-global-expansion-austin-berlin-paris-zurich-2026",
  salesSnapshot: "camera・studio・agency中心だった企業動画を、AI avatar、translation、brand・approval、version、analyticsを備えたsoftware workflowへ変える会社。APAC営業teamと初の専任field marketerは確認できるが、日本の応募可能求人は未確認。",
  growthSummary: "2026年4月公式発表はSeries Eで2億ドルを調達し評価額40億ドル、$100K超契約が12カ月で3倍、NRR 140%超、2026年にheadcount 70%超増を計画と説明。Careersは900人超を表示する。",
  ipoSummary: "非公開企業。Series E後の評価額は40億ドル。IPO時期、日本売上、Japan ARRは公表されていない。",
  milestones: [
    { year: "2017", label: "創業", detail: "AI研究を企業向けvideo creationへ応用して創業。", source: "company" },
    { year: "2025", label: "Series D", detail: "1.8億ドルを調達し、日本を拡張対象市場に挙げた。", source: "finance" },
    { year: "2026.01", label: "Series E", detail: "2億ドルを調達、評価額40億ドル。", source: "finance" },
    { year: "2026.04", label: "global拠点拡張", detail: "Austin、Berlin、Paris、Zurichへ拠点を拡張。", source: "finance" },
    { year: "2026.08", label: "初のAPAC field marketing", detail: "APAC sales teamを支える専任roleを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式事例は、研修、onboarding、sales enablement、compliance contentの制作をstudio・agency・PowerPoint中心から変え、多言語化と更新を速める目的を示す。動画本数ではなく、knowledge更新と学習到達が導入理由になる。" },
    { title: "製品の成り立ちから見る課題", body: "AI研究からtext-to-videoとavatar生成をproduct化し、editor、translation、collaboration、version、analytics、interactive roleplayへ拡張した。核は専門撮影なしで企業知識をvideoへ変え、更新・再利用できること。" },
    { title: "外部環境の要求から見る課題", body: "生成AIでcontent作成が速くなるほど、企業は本人同意、synthetic content表示、brand、copyright、data、accuracy、accessibilityを統制しながら、多言語の教育を最新に保つ必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "研修・enablement contentがdocumentと長いproduction cycleへ依存し、product・policy変更に追いつかない。" },
    { label: "課題", body: "動画化するとstudio・agency・翻訳費が増え、更新のたびに再撮影が必要になる一方、AIを自由利用するとbrandとgovernanceが崩れる。" },
    { label: "解決策", body: "一つの高頻度trainingでtemplate、approved avatar、translation、review、publish、analyticsを標準化し、時間、費用、completion、knowledge retentionを測る。" },
    { label: "選定の理由", body: "video agency、LMS authoring、Canva・Adobe、HeyGen等との比較で、Enterprise governance、多言語化、version管理、学習workflow、定量成果に優位がある場合に選ぶ。" },
  ],
  openingHook: "製品や規程が変わってから、日本語を含む全地域のtraining videoを更新し終えるまで何週間と何社の外注が必要ですか。",
  valueHypothesis: "time-to-publish、production cost、translation time、更新率、completion、support問い合わせ、knowledge retentionをbaseline比較する。",
  objection: "生成AI動画は不自然で信頼を損ね、既存のPowerPoint、LMS、制作会社で十分。",
  reframe: "avatarの見た目だけでなく、更新頻度、多言語coverage、brand・approval、表示、data、学習成果、1本あたり総costで比較する。",
  facts: [
    { label: "設立", value: "2017年", detail: "London発のAI video company。", source: "company" },
    { label: "従業員", value: "900人超", detail: "2026年8月の公式Careers表示。", source: "company" },
    { label: "評価額", value: "40億ドル", detail: "2026年Series Eの会社公式発表。", source: "finance" },
    { label: "Fortune 100", value: "90%超", detail: "会社公式の利用表示。", source: "customers" },
    { label: "NRR", value: "140%超", detail: "2026年4月の会社公式発表。", source: "finance" },
    { label: "Japan求人", value: "0件", detail: "公式Careersで日本・Tokyo専任roleを確認できない。", source: "job" },
  ],
  customers: [
    { company: "SAP", products: "Synthesia Enterprise", outcome: "Head of SAP Experience Garageがenterprise-readyなvideo creationを公式事例で説明。", implication: "大企業のenablement workflowに入るproof。" },
    { company: "Nexity", products: "Synthesia", outcome: "business application trainingのvideo productionを速める公式事例。", implication: "IT changeとtraining更新を接続する例。" },
    { company: "Cision", products: "Synthesia localization", outcome: "180本・5言語のsales enablement videoを運用した公式表示。", implication: "多言語enablementのscaleを示す。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "risk-basedな統制", detail: "生成・synthetic contentでは利用目的、human oversight、data、quality、透明性、incident対応を業務processへ組み込む必要がある。", caveat: "具体的義務は法域・用途・dataで異なる。" },
    { label: "多言語training", value: "速度とaccuracyの両立", detail: "翻訳とvideo更新を速めても、domain用語、承認、accessibility、最新版管理をlocal ownerが確認する必要がある。", caveat: "AI翻訳だけで正確性や学習効果を保証しない。" },
  ],
  role: "日本専任求人は未確認。初のAPAC Field Marketing Managerは地域全体のpipeline、event、ABM、localizationを担い、既存のAPAC sales teamと連携する。",
  organization: "London本社、Europe・US中心のofficeとteamを公式表示。APAC roleは地域内勤務を求めるが、日本法人、Tokyo office、日本語sales・SE・CS・supportは未確認。",
  careerValue: "正式進出時はAI video、L&D・enablement、enterprise governance、多言語localizationを横断するmarket build経験になり得る。",
  globalHeadcount: "900人超",
  japanPresence: "APAC sales teamと初のAPAC専任Field Marketingを確認。日本法人・Tokyo office・Japan求人は未確認",
  japanSince: "2025年に日本を拡張市場として公式言及。正式進出は未確認",
  solutions: [
    { name: "AI Video Platform", valueProp: "script・documentからavatar videoを制作・編集・共有する。", url: "https://www.synthesia.io/", competitors: "HeyGen、Canva、Adobe、video agency。", differentiation: "Enterprise workflowとbusiness trainingへの焦点。" },
    { name: "Localization / Dubbing", valueProp: "videoを160超の言語へ翻訳しversionを管理する。", url: "https://www.synthesia.io/features/video-translator", competitors: "翻訳会社、HeyGen、ElevenLabs、local制作。", differentiation: "制作、翻訳、player、更新を一続きにする。" },
    { name: "Enterprise Governance", valueProp: "brand、approval、audit、security、AI governanceを組織運用へ組み込む。", url: "https://www.synthesia.io/enterprise", competitors: "LMS authoring、Adobe、point AI tools。", differentiation: "ISO 42001を含むAI governanceとvideo workflow。" },
  ],
  fitTags: ["日本未進出", "AI Video", "Learning and Development", "Localization", "Enterprise", "APAC"],
  comparisons: [
    { arena: "Enterprise AI Video", companies: ["Synthesia", "HeyGen", "Canva", "Adobe"], why: "quality、governance、workflow、TCO" },
    { arena: "Training Content", companies: ["Synthesia", "LMS authoring", "video agency", "PowerPoint"], why: "更新、localization、学習成果、cost" },
    { arena: "Video Localization", companies: ["Synthesia", "ElevenLabs", "翻訳会社", "local production"], why: "languages、accuracy、lip sync、approval" },
  ],
});

const synthesiaEntryAssessment: JapanEntryAssessment = {
  verdict: "日本を拡張市場に挙げ、APAC sales teamと初の専任field marketerを確認した一方、日本法人・常設拠点・Japan求人がなく、正式進出前の強い観測signal。",
  factSignals: [
    { title: "日本市場への公式言及", body: "2025年Series D発表で日本を拡張対象市場に挙げた。", sourceIds: ["synthesia-finance"] },
    { title: "APAC GTM", body: "初のAPAC Field Marketing Managerが既存APAC sales teamのpipelineを支える。", sourceIds: ["synthesia-job"] },
    { title: "product readiness", body: "160超の言語、Enterprise governance、90%超のFortune 100利用を公式表示。", sourceIds: ["synthesia-company", "synthesia-customers"] },
    { title: "Japan求人", body: "日本・Tokyo専任求人は確認できない。", sourceIds: ["synthesia-job"] },
  ],
  hurdles: [
    { title: "local team", body: "日本語のsales、SE、CS、support、field marketingの提供主体が未確認。", sourceIds: ["synthesia-job"] },
    { title: "governance", body: "avatar consent、synthetic content表示、training accuracy、data・copyrightを日本のbuyerへ説明する必要がある。", sourceIds: ["synthesia-company", "synthesia-external"] },
    { title: "buyer ownership", body: "L&D、HR、Sales Enablement、IT、Brand、Legalのどこがbudget ownerかをsegment別に絞る必要がある。", sourceIds: ["synthesia-customers"] },
    { title: "competition", body: "HeyGen、Canva、Adobe、制作会社、LMS authoringとの役割分担と差別化が必要。", sourceIds: ["synthesia-company"] },
  ],
  readinessConditions: [
    { title: "Japan leader", body: "JapanまたはNorth Asiaのsales leaderとreporting lineを公式に確認する。" },
    { title: "local pod", body: "AE、SE、CS、Supportを日本語・日本時間で提供する。" },
    { title: "国内proof", body: "日本企業のtraining・enablement事例と時間・cost・learning outcomeを公式化する。" },
    { title: "trust package", body: "日本語のsecurity、privacy、AI governance、avatar consent資料を揃える。" },
    { title: "法人・契約", body: "日本法人または公式拠点、雇用・請求・契約体制を確認する。" },
  ],
  watchSignals: ["Japan sales求人", "Japan SE・CS・Support求人", "日本法人・Tokyo office", "日本企業のnamed case", "日本語trust・support資料", "国内partner program"],
};

synthesiaIntelligence.marketStatus.genbaVerdict = {
  headline: "日本進出の兆しあり：APAC GTM投資は進むが、国内teamのsignal待ち。",
  body: "日本を拡張市場に挙げ、APAC sales teamと初の専任field marketing採用を確認した。日本法人、Tokyo office、Japan専任求人、国内named caseは未確認のため、応募可能企業や進出済み企業として扱わない。",
};
synthesiaIntelligence.marketStatus.japanGrowth = {
  headline: "日本は公式の拡張候補だが、local operating modelは未確認。",
  narrative: "APAC全体のpipeline投資と多言語productは進出準備のsignalになるが、日本での雇用、販売、導入、supportを担う自社teamは確認できない。",
  qualitativeSignals: [
    { label: "市場意図", detail: "2025年に日本を拡張対象市場として公式言及。", sourceId: "synthesia-finance" },
    { label: "APAC採用", detail: "初のAPAC Field Marketing Managerを現行募集。", sourceId: "synthesia-job" },
    { label: "Japan体制", detail: "日本法人、office、Japan求人は未確認。", sourceId: "synthesia-company" },
  ],
  entryAssessment: synthesiaEntryAssessment,
  sourceIds: ["synthesia-job", "synthesia-company", "synthesia-customers", "synthesia-external", "synthesia-finance"],
};
synthesiaIntelligence.companyStats.japanHeadcount = { value: "確認できず", detail: "日本法人・雇用主体・Japan team人数は未確認。", sourceId: "synthesia-company" };
synthesiaIntelligence.companyStats.japanOffice = { value: "常設オフィス未確認", detail: "APAC担当者の存在をTokyo officeの証明へ置き換えない。", sourceId: "synthesia-company" };

applyStandard(cirrusDataIntelligence, buildCompactPatch({
  slug: "cirrus-data",
  leaderName: "Wai Lam / Wayne Lam",
  leaderLabel: "Co-Founders",
  leaderUrl: "https://cirrusdata.com/about-us",
  localName: "未確認",
  localLabel: "日本事業責任者",
  localUrl: "https://jobs.smartrecruiters.com/CirrusDataSolutionsInc/743999891680073-account-executive-in-tokyo",
  companyId: "cirrus-data-company",
  jobId: "cirrus-data-job",
  customersId: "cirrus-data-customers",
  externalId: "cirrus-data-external",
  financeId: "cirrus-data-finance",
  targets: ["ITインフラ・storage部門", "cloud・data center移行責任者", "business continuity責任者"],
  heroSummary: "storage refreshやcloud移行でcritical applicationを長時間止められず、manualなdata copyと複数vendor調整がproject riskになる課題を解決する。live block migrationとautomationで移行期間、停止、staff工数を減らし、予定通りのcutoverとbusiness continuityを支える。",
  competitors: "storage vendor migration、cloud-native tool、Zerto、professional servicesとの比較では、異種block storageのcoverage、停止時間、automation、rollback、総工数を見る。",
  feature: "Cirrus Migrate Cloud、On-Premises、Data Cloudでblock data migrationとproject運用を提供する。",
  advantage: "patented TDIでsource・target環境への大きな変更を避け、異種storage間のlive migrationを自動化する。",
  benefit: "migration duration、planned downtime、staff hours、project delayを減らし、storage・cloud選択の自由度を高める。",
  evidence: "会社公式は累計1EB超の移行と125超のpartnerを表示し、匿名の金融・通信・自動車事例を公開する。",
  marketVerdict: "東京担当求人は日本投資のsignalだが、雇用主体、local team、国内顧客、pipeline、達成率は未公開。",
  marketParagraphs: [
    "cloud移行とhardware refreshが続くほど、企業はdata integrityとbusiness continuityを保ちながら異種環境を移る必要がある。",
    "専用platformの価値は速度だけでなく、停止回避、manual工程、rollback、partner deliveryを含むproject riskの削減で検証する。",
  ],
  cultureHeadline: "東京担当の市場開拓を、global product・partner網と接続する小規模なEnterprise Sales role。",
  classification: "未確認",
  displayLabel: "勤務形態は未確認",
  officeDays: "Tokyo officeと出社日数は未記載",
  remoteOnly: "Remote可否は未記載",
  flexibility: "雇用主体、勤務地条件、出張頻度を面接で確認",
  goodFor: ["storage migrationとbusiness continuityを売りたい人", "channelとnew logoを同時に作りたい人"],
  cautionFor: ["local supportの完成度を前提にする人", "短期transactionだけを望む人"],
  unresolved: [
    ["雇用・組織", "東京担当roleは確認できる。", "雇用主体、reporting line、日本team人数、office、benefitはどうなっていますか。"],
    ["territory", "Fortune 1000とpartnerを対象にする。", "named account、既存顧客、white space、担当社数、segment境界は何ですか。"],
    ["quota", "new logoとstrategic transactionを持つ。", "quota、pay mix、ACV、cycle、coverage、ramp、達成率を教えてください。"],
    ["technical delivery", "migration設計とcutoverが受注条件になる。", "SE・services・supportの地域coverage、PoC、責任分界はどうなっていますか。"],
    ["partner", "distributor・VARとのco-sellを求める。", "partner-sourced比率、credit、enablement、delivery品質をどう管理しますか。"],
  ],
}));

applyStandard(synthesiaIntelligence, buildCompactPatch({
  slug: "synthesia",
  leaderName: "Victor Riparbelli",
  leaderLabel: "Co-Founder / CEO",
  leaderUrl: "https://www.synthesia.io/about",
  localName: "未確認",
  localLabel: "Japan責任者",
  localUrl: "https://www.synthesia.io/careers",
  companyId: "synthesia-company",
  jobId: "synthesia-job",
  customersId: "synthesia-customers",
  externalId: "synthesia-external",
  financeId: "synthesia-finance",
  targets: ["人材開発・L&D部門", "Sales Enablement部門", "全社communication・AI governance部門"],
  heroSummary: "training・enablement videoがstudio、agency、翻訳へ依存して更新に時間と費用がかかる一方、AIを自由利用するとbrand・accuracy・consentの統制が崩れる課題を解決する。制作、翻訳、review、version、publish、analyticsを同じworkflowへつなぎ、更新速度と多言語coverageを高める。",
  competitors: "HeyGen、Canva、Adobe、LMS authoring、video agencyとの比較では、qualityだけでなくEnterprise governance、localization、version管理、学習成果、総costを見る。",
  feature: "AI avatar、video editor、translation、brand・approval、analytics、interactive learningを統合する。",
  advantage: "企業のtraining・enablement workflowに焦点を置き、video生成を単発toolではなく管理・更新・配信まで含むplatformとして提供する。",
  benefit: "time-to-publish、production・translation cost、更新遅れを減らし、各地域へ同じknowledgeを届ける。",
  evidence: "公式は90%超のFortune 100利用、$100K超契約3倍、NRR 140%超を表示する。",
  marketVerdict: "APAC投資と日本への公式言及は強いsignalだが、Japan専任teamと国内proofが揃うまで正式進出扱いにしない。",
  marketParagraphs: [
    "企業のAI利用が広がるほど、training contentの制作速度と同時にconsent、表示、accuracy、brand、dataを統制する需要が強まる。",
    "日本では多言語productだけでなく、local buyer、trust資料、国内事例、sales・SE・CS・supportの提供主体が成立条件になる。",
  ],
  cultureHeadline: "Europe・US中心の高速成長組織。APACをbuild中だが、日本の配属先・雇用・勤務条件は未確認。",
  classification: "未確認",
  displayLabel: "日本勤務条件は未確認",
  officeDays: "Japan officeを確認できず",
  remoteOnly: "APAC roleは地域内勤務だが日本勤務を保証しない",
  flexibility: "Japan求人と雇用主体を確認できない",
  goodFor: ["正式進出signalを先回りして観測したい人", "AI videoとL&D transformationを横断したい人"],
  cautionFor: ["現在応募できるJapan roleを探す人", "日本語support・国内雇用を前提にする人"],
  unresolved: [
    ["Japan優先度", "2025年に拡張市場として公式言及。", "APAC内で日本を優先する定量条件と時期は何ですか。"],
    ["雇用・法人", "APAC teamはあるがJapan entityは未確認。", "日本採用を始める場合の雇用主体、office、契約、benefitはどう設計しますか。"],
    ["local pod", "Enterprise導入はsalesだけで完結しない。", "日本語のSE、CS、Support、trust reviewを誰が担いますか。"],
    ["国内proof", "global caseは豊富だが国内named caseは未確認。", "日本企業のtraining成果を公式事例化する計画はありますか。"],
    ["AI governance", "synthetic contentのtrustが選定条件になる。", "consent、表示、accuracy、data、copyrightの日本語説明をどう提供しますか。"],
  ],
}));

for (const intelligence of [cirrusDataIntelligence, synthesiaIntelligence]) {
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.22";
}

export function applyDaily20260822Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const dropbox = intelligenceBySlug.dropbox;
  if (!dropbox) return;
  dropbox.researchedAt = checkedAt;
  dropbox.salesSnapshot = "cloud storage、content collaboration、eSignature、AI searchを展開する会社。2026年8月22日に日本Customer Success Managerの公式求人URLが404となったため、現行求人から除外した。";
  dropbox.marketStatus.milestones = [
    ...dropbox.marketStatus.milestones.filter((item) => item.label !== "Japan CSM採用"),
    { year: "2026.08.22", label: "Japan CSM求人終了", detail: "公式求人URLが404となり公開求人から除外。採用停止や事業縮小までは意味しない。", sourceId: "dropbox-job" },
  ];
  dropbox.facts = dropbox.facts.map((fact) => fact.label === "日本対象求人"
    ? { ...fact, value: "0件", detail: "Customer Success Manager - Japanは2026年8月22日に公式URLが404となり終了確認。" }
    : fact);
  dropbox.marketStatus.japanGrowth = {
    ...dropbox.marketStatus.japanGrowth,
    headline: "日本法人と国内事例は確認、現行求人は0件。",
    narrative: "日本法人と国内顧客事例は確認できるが、2026年8月22日にCustomer Success Manager求人が終了し、現在公開中の日本対象求人は0件。これだけで採用停止や事業縮小とは判断しない。",
    sourceIds: dropbox.marketStatus.japanGrowth?.sourceIds ?? dropbox.marketStatus.sourceIds,
  };
  dropbox.companyStats.japanHeadcount = { value: "28人", detail: "2026年7月の厚生年金保険・健康保険の被保険者数。社員総数と一致しない場合がある。", sourceId: "gbiz-headcount-dropbox" };
}

export const daily20260822IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "cirrus-data": cirrusDataIntelligence,
  synthesia: synthesiaIntelligence,
};
