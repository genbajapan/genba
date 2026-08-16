import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  applyStandard,
  buildCompactPatch,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) {
    intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
  }
}

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function patchVerkada(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2021", "日本市場で提供開始を確認", "高千穂交易が日本市場へ最初に導入。Verkada Japan株式会社の設立年月は非公開。", "rollout-verkada-japan-entry-2021");
  applyStandard(intelligence, buildCompactPatch({
    slug: "verkada", leaderName: "Filip Kaliszan", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.verkada.com/jp/about/", localName: "Jonathon Dixon", localLabel: "JAPAC Vice President & Managing Director", localUrl: "https://www.prnewswire.com/apac/news-releases/verkada-continues-rapid-growth-and-expansion-in-japan-and-asia-pacific-302272487.html",
    companyId: "verkada-about", jobId: "verkada-job-ae", customersId: "verkada-chiba", externalId: "verkada-ppc", financeId: "verkada-valuation",
    targets: ["多拠点の大手企業", "製造・物流", "小売・飲食", "教育・公共施設", "総務・IT・Security"], competitors: "Axis、Hanwha、Genetec、Milestone、既存camera・入退室systemとlocal integrator",
    feature: "camera、access control、alarm、intercom、air quality等のdeviceを、edge処理・保存とcloud管理で一つのphysical security platformへ統合する。", advantage: "device、software、AI検索、権限、remote supportをsingle-vendorでまとめ、siteごとのNVR・server・管理toolを減らす。", benefit: "incident検索、現地出動、device運用、access reviewを短縮し、複数siteのsecurityとprivacy運用を標準化する。", evidence: "千葉ロッテマリーンズは約3万人規模のstadium、西町インターナショナルスクールは470人・35国籍のcommunityでcloud video securityを導入。",
    marketVerdict: "結論：人手不足、多拠点運営、security・労働安全の要求は追い風。日本で直販とChannelを拡大する一方、privacy、過去のsecurity incident、施工capacityが選定とquotaを左右する。", marketParagraphs: ["店舗、工場、学校、office、stadiumではcamera、入退室、alarm、sensorがsiteごとに分断し、少人数の本社teamがincident、権限、保守を統一できない。国内事例は、録画機器の更新より検索・remote運用・accessの標準化を求める需要を示す。", "今後3〜5年は、複数拠点、人手不足、盗難・災害・労働安全、AI video analyticsが追い風になる。一方、camera・顔特徴dataの利用目的、通知、安全管理と、partnerによる現地施工が導入条件になる。", "Genba分析：勝ち筋はdevice台数でなく、検索時間、alert-to-action、現地出動、downtime、access reviewをpilot前後で測り、privacy設計と標準構成をpartnerと複数siteへ展開すること。"],
    cultureHeadline: "日本の現行求人はoffice・顧客site・国内出張を職種別に明記するfield-heavyな環境。fast-pacedな直販と、施工・partner executionを両方持つ。", classification: "出社中心", displayLabel: "渋谷オフィス・顧客先を中心", officeDays: "職種別に確認", remoteOnly: "該当しない", flexibility: "site訪問・国内出張あり",
    goodFor: ["SaaSとhardware・現場を横断したい", "securityを経営・現場KPIで売りたい", "directとchannelの両方を動かしたい"], cautionFor: ["フルリモートを必須にする", "software-onlyの短期商談だけを望む", "privacy・施工・site要件を避けたい"],
    unresolved: [["日本territory", "global成長だけでは日本のaccount qualityを判断できない。", "segment別のnamed account、既存顧客、平均site数、ACV、cycleは？"], ["pilotからrollout", "site pilotが全社標準へ進む転換率は非公開。", "pilot開始・成功・multi-site展開のconversionと期間は？"], ["Channel capacity", "partnerの施工・enablementが売上実現を制約しうる。", "active partner数、認定・施工capacity、sourced/influenced creditは？"], ["security・privacy", "過去incidentとcamera dataの性質から最新controlの検証が必要。", "最新audit、incident response、retention、顔検索の日本運用は？"], ["quotaと報酬", "給与、OTE、quota、達成率、昇進は非公開。", "base/variable、quota、ramp、達成者比率、Enterprise昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。annualized bookingsを年間売上高として扱わない。", sourceIds: ["verkada-valuation"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、フリーキャッシュフロー、marginは公開情報で確認できない。", sourceIds: ["verkada-valuation"] },
    { label: "Annualized bookings", value: "10億米ドル超（約1,621.5億円超）", detail: "2025年12月の会社発表。売上高・ARRではない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算で、発表日・期間平均ではない。", sourceIds: ["verkada-valuation", "rollout-b02-boj-usd-20260716"] },
    { label: "導入規模", value: "3万社超・200万台超", detail: "世界170カ国超の会社公表値。日本の有料顧客数・device数ではない。", sourceIds: ["verkada-about", "verkada-valuation"] },
  ];
  intelligence.companyStats.japanSince = { value: "2021年（国内partnerによる提供開始）", detail: "高千穂交易が日本市場へ最初に導入。日本法人の正確な設立年月は補完しない。", sourceId: "rollout-verkada-japan-entry-2021" };
  addSources(intelligence, [
    { id: "rollout-verkada-japan-entry-2021", label: "Verkada・高千穂交易 partner story", url: "https://www.verkada.com/partners/story/takachiho-koheki/", kind: "企業公式", scope: "日本市場への最初の導入（2021年）", checkedAt: researchedAt },
    { id: "rollout-b02-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
}

function patchWalkMe(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2011", "創業", "Dan Adika氏らが創業。", "walkme-company");
  ensureMilestone(intelligence, "2019", "日本法人を設立し日本進出", "WalkMe株式会社を2019年2月に設立。", "rollout-walkme-japan-5th");
  applyStandard(intelligence, buildCompactPatch({
    slug: "walkme", leaderName: "Dan Adika", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.walkme.com/about-us/", localName: "野田 亮", localLabel: "代表取締役・カントリーマネージャー", localUrl: "https://www.walkme.com/jp/news-releases/new-country-manager/",
    companyId: "walkme-company", jobId: "rollout-walkme-careers-20260817", customersId: "rollout-walkme-ebara-2026", externalId: "walkme-external", financeId: "rollout-walkme-fy2023-sec",
    targets: ["大手企業の情報システム・DX", "基幹・業務システム利用部門", "人事・従業員体験", "顧客サービス", "システムインテグレーター・コンサルティング会社"], competitors: "SAP Enable Now、Whatfix、Pendo、application標準help、研修・manual、内製guide",
    feature: "業務application上の文脈guide、workflow analytics、automation、AI assistanceで、利用者がsystemを正しく使い業務を完了するまでを支援する。", advantage: "特定applicationのhelpに閉じず、複数systemを横断して利用行動、friction、business process、change adoptionを同じlayerで測る。", benefit: "training、support ticket、error、task completion、software utilizationを改善し、大規模system投資の定着とROIを高める。", evidence: "荏原製作所は45 systemsへ展開し勤怠問合せ80%減・workflow問合せゼロ、富士通は10 systems・約8万人で問合せ60%以上減を公開。",
    marketVerdict: "結論：基幹system刷新とAI導入が増えるほど、license導入後の定着と成果証明は重要になる。SAP傘下の販売・製品統合は追い風と同時に、組織・territory変更の確認点。", marketParagraphs: ["企業はSAP、CRM、HR、service等へ投資しても、利用者が正しいworkflowを使えず、training・support・manual更新に工数を使う。WalkMeの既存事例は、softwareを導入することと業務成果へ定着させることのgapを示す。", "今後3〜5年は、SAP cloud移行、生成AI、業務systemの増加、人手不足、change programの成果説明が追い風になる。SAP傘下でのroute-to-marketと日本のAlliance・Partner・Solution体制がscale条件になる。", "Genba分析：勝ち筋はguide表示数でなく、task completion、error、support ticket、training time、feature adoptionをbaseline比較し、change ownerとapplication ownerの共通KPIへすること。"],
    cultureHeadline: "東京の現行7求人はすべてHybrid。6職種で週3日出社を明記し、Partner Sales Managerだけは正確な日数を公開していない。", classification: "ハイブリッド", displayLabel: "東京のハイブリッド", officeDays: "多くの現行求人で週3日（Partner Salesは日数非公開）", remoteOnly: "該当しない", flexibility: "顧客・event対応で確認",
    goodFor: ["software定着をbusiness outcomeで売りたい", "SAP・SIer ecosystemを動かしたい", "salesとchange managementを横断したい"], cautionFor: ["単一buyerの短期商談だけを望む", "買収後の変化を避けたい", "導入・定着の責任から距離を置きたい"],
    unresolved: [["SAP統合", "買収後の製品・営業統合が日本の役割を変えうる。", "WalkMeとSAPのaccount、product、quota、brandはどう統合される？"], ["日本の事業規模", "global顧客数を日本の再現性へ置き換えられない。", "日本ARR、顧客数、renewal、expansion、主要use caseは？"], ["partner economics", "Alliance・Partner roleの成果定義が達成難度を左右する。", "sourced/influenced ARR、credit、active partner、delivery capacityは？"], ["value realization", "guidance利用が業務成果へ直結するかを検証する必要がある。", "導入前後でtask、error、ticket、training、utilizationをどう測る？"], ["報酬・culture", "日本の給与・OTE・達成率・昇進・出社頻度は非公開。", "base/variable、quota、ramp、達成者比率、勤務と昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "買収前最終年間売上高", value: "2億6,695.4万米ドル（約432.9億円）", detail: "FY2023の監査済み単独売上。SAP買収後のWalkMe単独売上ではない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算。", sourceIds: ["rollout-walkme-fy2023-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "GAAP純損失", value: "5,680万米ドル（約92.1億円）の損失", detail: "FY2023。同期の営業cash flowは1,530万米ドル（約24.8億円）、FCFは1,150万米ドル（約18.6億円）。買収後の単独収益性は非公開。", sourceIds: ["rollout-walkme-fy2023-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "ARR", value: "2億7,630万米ドル（約448.0億円）", detail: "2023年末。年間売上高ではない。全顧客DBNRRは100%（前年113%）、顧客1,638社（前年1,806社）で、expansion鈍化・顧客減の反証を伴う。", sourceIds: ["rollout-walkme-fy2023-sec", "rollout-b02-boj-usd-20260716"] },
    { label: "買収前最終四半期FCF", value: "1,110万米ドル（約18.0億円）", detail: "2024年Q2。同期売上6,951.2万米ドル（約112.7億円）、GAAP営業損失2,081.5万米ドル（約33.8億円）、non-GAAP営業利益490万米ドル（約7.9億円）。調整指標とGAAPを分ける。", sourceIds: ["rollout-walkme-q2-2024", "rollout-b02-boj-usd-20260716"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "900人超", detail: "現行Aboutの会社公表値。", sourceId: "walkme-company" };
  intelligence.companyStats.japanOffice = { value: "東京都中央区日本橋室町2-1-1 日本橋三井タワー6階", detail: "WalkMe公式contactで確認。", sourceId: "rollout-walkme-contact" };
  intelligence.companyStats.japanSince = { value: "2019年2月", detail: "WalkMe株式会社を設立。", sourceId: "rollout-walkme-japan-5th" };
  addSources(intelligence, [
    { id: "rollout-walkme-careers-20260817", label: "WalkMe公式Career・Tokyo求人一覧", url: "https://www.walkme.com/careers/careers_list/", kind: "企業公式", scope: "現行日本求人7件・働き方・職務条件", checkedAt: researchedAt },
    { id: "rollout-walkme-fy2023-sec", label: "WalkMe FY2023 Form 20-F", url: "https://www.sec.gov/Archives/edgar/data/1847584/000117891324000974/zk2431111.htm", kind: "法定開示", scope: "売上・損失・cash flow・ARR・DBNRR・顧客数", checkedAt: researchedAt },
    { id: "rollout-walkme-q2-2024", label: "WalkMe 2024年Q2決算", url: "https://www.walkme.com/news-releases/walkme-ltd-announces-second-quarter-2024-financial-results/", kind: "企業公式", scope: "買収前最終単独四半期の売上・利益・cash flow", checkedAt: researchedAt },
    { id: "rollout-walkme-japan-5th", label: "WalkMe 日本法人設立5周年", url: "https://www.walkme.com/jp/news-releases/walkme-5th-anniversary/", kind: "企業公式", scope: "日本法人設立（2019年2月）", checkedAt: researchedAt },
    { id: "rollout-walkme-contact", label: "WalkMe公式Contact", url: "https://www.walkme.com/contact/", kind: "企業公式", scope: "東京office所在地", checkedAt: researchedAt },
    { id: "rollout-walkme-ebara-2026", label: "WalkMe 荏原製作所事例", url: "https://www.walkme.com/jp/news-releases/ebara-corporation_realizer-award-2026/", kind: "企業公式", scope: "国内展開規模・問合せ・誤操作・改修費の成果", checkedAt: researchedAt },
    { id: "rollout-b02-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt },
  ]);
}

function patchCelonis(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2019", "日本法人を設立し日本進出", "Celonis株式会社を2019年2月に設立。", "celonis-japan-establishment");
  applyStandard(intelligence, buildCompactPatch({
    slug: "celonis", leaderName: "Alexander Rinke / Bastian Nominacher", leaderLabel: "共同創業者・共同CEO", leaderUrl: "https://www.celonis.com/company/about-us", localName: "村瀬 将思", localLabel: "代表取締役社長", localUrl: "https://kyodonewsprwire.jp/release/202111304129",
    companyId: "celonis-global-about", jobId: "celonis-japan-jobs-portfolio-ae", customersId: "celonis-japan-systemsupport", externalId: "celonis-ai-report-2026", financeId: "celonis-series-d-techcrunch",
    targets: ["大手製造", "金融・保険", "流通・物流", "CFO・調達・Supply Chain", "IT・業務変革"], competitors: "SAP Signavio、UiPath Process Mining、Microsoft Process Mining、ServiceNow、既存BI・業務分析・consulting",
    feature: "ERP等のevent dataから実際のprocessを可視化し、Context Model、analytics、automation、AIでvalue opportunityを発見・実行・追跡する。", advantage: "surveyや業務設計図でなく実dataからprocessの逸脱・原因・価値を捉え、複数systemと部門を横断する改善loopを作る。", benefit: "cycle time、working capital、欠品、手戻り、compliance、automation効果を定量化し、改革施策の優先順位と実行を速める。", evidence: "システムサポートは年間3,000件超の部門長承認の約1,500件削減を公開。国内イベントでも金融・製造・物流等の事例を確認。",
    marketVerdict: "結論：AI・ERP刷新の前提となるprocess context需要は強い。日本の成長signalとEcosystem採用は追い風だが、非公開財務、SAPとの係争、PoCから実行への負荷を分けて見る。", marketParagraphs: ["企業はERPやautomationへ投資しても、部門をまたぐ実際の業務flow、手戻り、滞留、逸脱を同じdataで把握できず、改革の優先順位と効果を説明しにくい。国内事例は承認・財務・調達等のprocessを実件数で改善する需要を示す。", "今後3〜5年は、ERP・基幹刷新、生成AI agent、working capital、supply chain resilience、人手不足が追い風になる。AIが正しく動くには現行processのcontextが必要で、国内SIerのdelivery capacityがscale条件になる。", "Genba分析：勝ち筋はprocess map作成でなく、value hypothesisをtransaction dataへ接続し、cycle、cash、error、capacityをbaseline比較してaction ownerへ渡すこと。SAP標準機能とconsultingが反証になる。"],
    cultureHeadline: "日本の現行求人はEnterprise new logoとEcosystem責任者を配置。value selling、data、partner、executive stakeholderを横断し、category educationと実行成果を求める。", classification: "ハイブリッド", displayLabel: "東京オフィスを含むハイブリッド", officeDays: "正確な日数は非公開", remoteOnly: "現行日本求人で未確認", flexibility: "役割・顧客対応で確認",
    goodFor: ["業務改革をtransaction dataで売りたい", "C-level value engineeringを磨きたい", "SIerと大規模transformationを作りたい"], cautionFor: ["短期・単一systemの商談だけを望む", "category educationを避けたい", "data接続・partner deliveryから距離を置きたい"],
    unresolved: [["日本economics", "過去の日本成長率は現在のquotaを示さない。", "日本ARR、顧客数、new/expansion、平均ACV、cycleは？"], ["value realization", "分析から実行・拡張へ進む転換率が重要。", "PoC、production、value realization、renewal、expandのconversionは？"], ["Ecosystem", "国内SIerのdelivery capacityとcreditがscaleを左右する。", "active partner、認定人数、sourced/influenced ARR、案件ownershipは？"], ["競合・SAP", "SAPとの係争とSignavio競争が顧客判断へ影響しうる。", "SAP data access、Signavio競合、顧客へのrisk説明は？"], ["quota・報酬", "給与、OTE、quota達成率、昇進は非公開。", "base/variable、quota、ramp、達成者比率、AE・leaderの昇進例は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。ARRを含む最新の監査済み年間売上高・純収益は確認できない。", sourceIds: ["celonis-global-about"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、FCF、marginは公開情報で確認できない。", sourceIds: ["celonis-global-about"] },
    { label: "利用企業・deployment", value: "1,400社超・5,000件超", detail: "platform利用企業数とdeployment数は別尺度。日本の有料顧客数・renewalを示さない。", sourceIds: ["celonis-global-about", "rollout-celonis-platform"] },
    { label: "累計創出顧客価値", value: "65億米ドル（約1兆241.4億円）", detail: "会社公表の累計valueでCelonisの売上高・ARRではない。1ドル=157.56円で参照換算。identified valueとrealized valueの定義・監査は個別確認が必要。", sourceIds: ["celonis-global-about", "rollout-b03-customs-usd-202608"] },
  ];
  addSources(intelligence, [
    { id: "rollout-celonis-platform", label: "Celonis公式Platform", url: "https://www.celonis.com/jp/platform", kind: "企業公式", scope: "platform利用企業1,400社超", checkedAt: researchedAt },
    { id: "rollout-b03-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
}

function patchConfluent(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2021", "日本でoperationsを開始", "2021年4月1日に日本operationsの開始を公式発表。法人登記の正確な設立日とは分けて扱う。", "confluent-japan-founding");
  applyStandard(intelligence, buildCompactPatch({
    slug: "confluent", leaderName: "Jay Kreps", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.confluent.io/about/", localName: "石井 晃一", localLabel: "日本カントリーマネージャー", localUrl: "https://digitalpr.jp/r/85756",
    companyId: "confluent-ibm-acquisition", jobId: "rollout-confluent-careers-20260817", customersId: "confluent-case-list", externalId: "confluent-japan-salesnow", financeId: "rollout-confluent-fy2025-sec",
    targets: ["デジタルネイティブ企業", "金融・保険", "製造・小売", "データ・AI基盤", "マネージドサービス・ソフトウェア事業者"], competitors: "AWS MSK、Azure Event Hubs、Google Cloud Managed Kafka、Redpanda、Apache Kafka内製、IBM MQ等",
    feature: "Apache Kafkaを基盤に、data streamの接続、処理、governance、Flink、Tableflowをmanaged cloudとして提供する。", advantage: "Kafka開発者によるplatformとconnector ecosystemを、multi-cloud・on-premをまたぐdata in motionの運用へ展開する。", benefit: "batch lag、integration開発、Kafka運用、data freshnessを改善し、不正検知、顧客体験、supply chain、AI agentへ最新dataを届ける。", evidence: "買収発表時に6,500社超、Fortune 500の約40%利用を公表。日本固有の定量顧客成果は本調査で十分確認できない。",
    marketVerdict: "結論：AI・event-driven architectureにはreal-time dataが必要で需要は続く。IBM統合は販路・製品連携の追い風と、組織・territory・independence変更の両面がある。", marketParagraphs: ["企業の基幹、顧客、transaction、log dataは複数systemへ分散し、batch連携では不正検知、在庫、customer action、AI agentが古いcontextで動く。Kafkaを内製運用すると専門人材と信頼性・governanceが制約になる。", "今後3〜5年は、AI agent、event-driven application、hybrid cloud、data governanceが追い風になる。IBMの顧客・productとの統合が進む一方、日本の営業組織・brand・quotaがどう変わるかは継続確認が必要。", "Genba分析：勝ち筋はevent数でなく、data freshness、pipeline downtime、運用工数、fraud・conversion・AI qualityをbusiness caseにし、MSP/ISVとrepeatable data productへ展開すること。"],
    cultureHeadline: "Kafka creator文化とIBM傘下のenterprise executionが交わる変化局面。現行日本求人は公式Careerで再現確認できず、旧remote-first方針を現在の勤務条件へ転用しない。", classification: "未確認", displayLabel: "日本の現行勤務条件は確認不能", officeDays: "公開情報で確認不能", remoteOnly: "確認不能", flexibility: "IBM統合後の方針を確認",
    goodFor: ["data infrastructureをbusiness outcomeで売りたい", "developer・data・経営buyerを横断したい", "M&A統合局面を機会として扱える"], cautionFor: ["組織・territoryの変化を避けたい", "短期・非technical商談だけを望む", "data architectureの学習を避けたい"],
    unresolved: [["IBM統合", "買収直後で営業制度・product integrationが変わりうる。", "日本のbrand、reporting、quota、territory、IBM sellerとのcreditは？"], ["現行求人", "公式CareerのJapan filter・job detailを再現確認できず、旧求人は掲載できない。", "現在openの日本role、scope、勤務地、勤務形態、言語、給与は？"], ["日本economics", "global顧客規模から日本の達成可能性は分からない。", "日本ARR、顧客数、平均ACV、cycle、cloud consumptionは？"], ["MSP・ISV", "partner data productのproduction化とrevenue creditが複雑。", "sourced/influenced、consumption credit、active partner、support ownershipは？"], ["報酬・career", "現行求人を確認できず、給与・OTE・quota達成率・昇進・離職も非公開。", "現行roleのbase/variable、quota、ramp、達成者比率、IBM内外のcareer pathは？"]],
  }));
  intelligence.facts = [
    { label: "買収前最終年間売上高", value: "11億6,670万米ドル（約1,838.3億円）", detail: "FY2025、前年比21%増。IBM買収後の2026年単独売上ではない。1ドル=157.56円（税関 2026年8月16〜22日適用）の参照換算。", sourceIds: ["rollout-confluent-fy2025-sec", "rollout-b03-customs-usd-202608"] },
    { label: "GAAP営業損失", value: "3億8,010万米ドル（約598.9億円）の損失", detail: "FY2025、営業margin -32.6%。同期のnon-GAAP営業利益は8,610万米ドル（約135.7億円）で、SBC 3億9,732.5万米ドル（約626.1億円）等を除外する調整指標。", sourceIds: ["rollout-confluent-fy2025-sec", "rollout-b03-customs-usd-202608"] },
    { label: "調整後フリーキャッシュフロー", value: "7,600万米ドル（約119.7億円）", detail: "FY2025のadjusted FCF。GAAP cash flowと同一視しない。同期の営業cash flowは6,430万米ドル（約101.3億円）。", sourceIds: ["rollout-confluent-fy2025-sec", "rollout-b03-customs-usd-202608"] },
    { label: "RPO", value: "14億5,970万米ドル（約2,299.9億円）", detail: "FY2025末の残存履行義務で、売上高・ARRではない。57%を12カ月以内に認識予定。買収後の現行RPOは非公開。", sourceIds: ["rollout-confluent-fy2025-sec", "rollout-b03-customs-usd-202608"] },
  ];
  intelligence.hypotheses = [
    { topic: "M&A INTEGRATION", title: "IBM統合の販路拡大と運営変更を両面で見る", conclusion: "IBMの顧客基盤・watsonx.data・MQ・webMethodsとの連携は拡張機会。一方、日本のreporting、territory、quota credit、brand、product autonomyは非公開で、買収後の単独業績も推定できない。", confidence: "高", evidence: ["2026年3月17日にIBMが買収完了", "IBM製品との連携を買収完了時に発表"], counterSignals: ["日本組織の統合方針と後任CROは非公開"], interviewQuestions: ["日本のreporting、territory、IBM sellerとのcredit、製品の提案責任はどう変わったか"], sourceIds: ["confluent-ibm-acquisition"] },
    { topic: "PRODUCT / MARKET", title: "AIのrealtime context需要は追い風だが、すべてのstreaming化が正解ではない", conclusion: "Kafka・Flink・connector・governanceをmanagedで統合する価値は、複数producer/consumerと厳しいfreshness要件がある時に高い。単一cloud・低頻度処理・高いegress costではcloud-nativeやbatchが合理的な場合がある。", confidence: "高", evidence: ["FY2025売上は前年比21%増", "NRR 114%", "Indeedはworkloadにより移行を見送ったと公式eventで説明"], counterSignals: ["GAAP営業損失は3億8,010万米ドル（約598.9億円）", "国内の定量ROI事例は本調査で確認できず"], interviewQuestions: ["主要use caseのlatency・availability・運用工数・costを導入前後でどう測るか"], sourceIds: ["rollout-confluent-fy2025-sec", "rollout-confluent-tokyo-event-2026"] },
    { topic: "CURRENT HIRING", title: "現行日本求人は確認不能で、過去求人から条件を補完できない", conclusion: "2026年8月17日時点で公式CareerのJapan filter・job detailを再現確認できなかった。0件と断定するのではなく、現行role、勤務形態、言語、報酬を公開確認できない状態。", confidence: "高", evidence: ["公式Careerを同日確認", "過去の2求人は現行detailを再確認できず"], counterSignals: ["公式Careerは動的表示のため、募集0件そのものを証明するものではない"], interviewQuestions: ["現在openの日本roleと、公式ATSで確認できるURLはあるか"], sourceIds: ["rollout-confluent-careers-20260817"] },
  ];
  intelligence.roleLens = {
    salesMotion: "現行日本求人は確認不能。過去求人のsegment・担当領域を現行の組織設計として扱わない。",
    compensation: "現行日本roleの給与、OTE、pay mix、equity、quotaは公開確認できない。",
    quota: "日本のquota、達成率、ACV、cloud consumption、renewal、sales cycleは非公開。IBM統合後のcredit ruleも確認が必要。",
    collaboration: "製品構造上はdata engineer、platform、AI、security、application owner、IBM・partnerの連携が必要。現行roleごとの責任境界は未確認。",
  };
  intelligence.salesAppeal = {
    intro: "Kafka・Flink・real-time data governanceを事業KPIとAIのproduction要件へ翻訳できる専門性はキャリア価値になり得る。ただし現行日本求人を確認できないため、応募可能な特定roleの魅力としては断定しない。",
    points: [
      { title: "Kafka開発者が創業した技術基盤", detail: "open-source Kafkaとmanaged platformの差、Flink、connector、schema・lineageを大規模環境の運用と結び付けて学べる可能性がある。", sourceIds: ["confluent-founding"] },
      { title: "IBMのenterprise基盤との統合局面", detail: "watsonx.data、MQ、webMethods、IBM Zとの統合は、mainframeからAIまでの広いdata architectureを扱う機会になり得る。", sourceIds: ["confluent-ibm-acquisition"] },
      { title: "運用指標をbusiness outcomeへ変える", detail: "event latency、availability、connector lead time、schema incident、cost、downstream reuseを不正検知・CX・在庫・AI qualityへ接続する価値設計を磨ける。", sourceIds: ["rollout-confluent-fy2025-sec", "rollout-confluent-merpay"] },
    ],
  };
  intelligence.interviewPrep = {
    intro: "現行求人は公式確認できない。募集再開を確認した場合に、IBM統合後の責任境界と成果条件を検証するための質問。",
    questions: [
      { question: "現在openの日本roleと公式ATS URL、勤務形態、言語、報酬条件は。", why: "過去求人の条件を現行roleへ横展開しないため。", sourceIds: ["rollout-confluent-careers-20260817"] },
      { question: "IBM買収後、日本のreporting、territory、quota、seller credit、product ownershipはどう変わったか。", why: "M&A後の運営設計が入社後の成果条件に直結するため。", sourceIds: ["confluent-ibm-acquisition"] },
      { question: "日本の主要use caseで、latency、availability、運用工数、cost、business KPIをどう証明しているか。", why: "国内の公開定量ROIを十分に確認できないため。", sourceIds: ["rollout-confluent-merpay", "rollout-confluent-tokyo-event-2026"] },
      { question: "FY2025のGAAP赤字とadjusted FCF黒字をどう評価し、買収後の投資優先順位にどう反映しているか。", why: "SBCを含むGAAPと調整指標を分け、成長投資と効率化圧力を確認するため。", sourceIds: ["rollout-confluent-fy2025-sec"] },
    ],
  };
  intelligence.customerProof = [
    { company: "Merpay", products: "Confluent Cloud", outcome: "Google Cloud上のreal-time data pipelineの一部に採用。正確で最新の情報を届け、support・UXを改善する目的を公閏。volume、latency、cost、ROIの実績値は非公開。", implication: "国内FinTechのreal-time pipeline需要を確認できるが、定量効果は補完しない。", sourceId: "rollout-confluent-merpay" },
    { company: "JR東日本・Recruit・Indeed Recruit Technologies", products: "Confluent Cloud / Flink", outcome: "2026年東京eventで、Suica接点、real-time pipeline、Flink移行検証を登壇。Indeedは複雑なfeature aggregationでは移行を採らなかった。", implication: "登壇を全面production導入と扱わず、workloadごとの適合・非適合をPOCで分ける。", sourceId: "rollout-confluent-tokyo-event-2026" },
  ];
  intelligence.fitTags = [
    "real-time data基盤を事業成果につなげたい",
    "Kafka・Flink・data governanceを学びたい",
    "developer・data・経営buyerを横断したい",
    "IBM統合局面の変化を許容できる",
    "現行求人と条件を公式ATSで再確認できる",
  ];
  intelligence.companyStats.japanSince = { value: "2021年4月（operations開始）", detail: "日本operationsの開始日を公式発表で確認。法人登記の正確な設立日とは分けて扱う。", sourceId: "confluent-japan-founding" };
  intelligence.sources = intelligence.sources.filter((source) => !new Set(["confluent-digital-native-job", "confluent-msp-isv-job"]).has(source.id));
  addSources(intelligence, [
    { id: "rollout-confluent-careers-20260817", label: "Confluent公式Career 現行求人一覧", url: "https://careers.confluent.io/open-positions/", kind: "企業公式", scope: "2026-08-17時点でJapan filter・job detailを再現確認不能。旧求人は現行扱いしない", checkedAt: researchedAt },
    { id: "rollout-confluent-fy2025-sec", label: "Confluent FY2025 Form 10-K・決算release", url: "https://www.sec.gov/Archives/edgar/data/1699838/000169983826000006/cflt-20251231.htm", kind: "法定開示", scope: "買収前最終通期の売上・利益・cash flow・RPO・SBC", checkedAt: researchedAt },
    { id: "rollout-b03-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
    { id: "rollout-confluent-merpay", label: "Confluent・Merpay事例", url: "https://www.confluent.io/ja-jp/press-release/confluent-merpay/", kind: "企業公式", scope: "国内顧客のreal-time data pipeline導入目的", checkedAt: researchedAt },
    { id: "rollout-confluent-tokyo-event-2026", label: "Data in Motion Tour Tokyo 2026", url: "https://events.confluent.io/dswt2026tokyo", kind: "企業公式", scope: "JR東日本・Recruit・Indeedの登壇とworkload別の検証", checkedAt: researchedAt },
  ]);
}

function patchDataiku(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本事業開始済みと責任者体制を確認", "佐藤豊氏の日本カントリーマネージャー就任を確認。日本法人の設立・事業開始年月は非公開。", "dataiku-hitachi");
  applyStandard(intelligence, buildCompactPatch({
    slug: "dataiku", leaderName: "Florian Douetteau", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.dataiku.com/company", localName: "佐藤 豊", localLabel: "日本カントリーマネージャー", localUrl: "https://prtimes.jp/main/html/rd/p/000000299.000053429.html",
    companyId: "dataiku-about", jobId: "dataiku-job-fsi", customersId: "dataiku-softbank", externalId: "dataiku-fsa", financeId: "dataiku-arr",
    targets: ["金融・保険", "小売・通信", "製造・航空", "データ・AI部門", "リスク・法令対応・情報システム"], competitors: "Databricks、Snowflake、SAS、Microsoft・Google・AWSのAI基盤、notebook・ML platform内製",
    feature: "data準備、analytics、機械学習、生成AI・Agent、deployment、monitoring、governanceをvisualとcodeの共同workspaceへ統合する。", advantage: "business userとdata scientist、複数cloud・model、開発とgovernanceを同じorchestration layerでつなぎ、既存stackを残して全社標準を作る。", benefit: "分析cycle、手作業、PoC-to-production、再利用、risk reviewを改善し、AI use caseを業務KPIと統制付きで横展開する。", evidence: "SoftBankは営業1人あたり月約20時間、三菱電機はanalytics output 60%・visualization 80%の時間削減を公式事例で公開。",
    marketVerdict: "結論：AI実験を本番・全社統制へ移す需要は強い。ARR成長と国内proofは追い風だが、cloud/data platformとの重複、日本ARR、quota、production転換率は非公開。", marketParagraphs: ["企業はanalytics、ML、生成AI、AgentのPoCを増やしても、専門家不足、data・tool分断、権限・承認・monitoringの不統一でproductionへ進めない。国内事例はmodel数でなく、営業・分析のcycle timeを改善する需要を示す。", "今後3〜5年は、生成AI agent、AI governance、人手不足、複数cloud・modelの併存が追い風になる。Dataikuは日本のAE coverageをFSIとRetail/Telcoに分け、業界knowledgeとpartner deliveryで全社program化を狙う。", "Genba分析：勝ち筋はPoC数でなく、production化率、cycle、manual time、利用者、risk review、増収・損失回避をbaseline比較し、templateとcontrolを隣接use caseへ再利用すること。"],
    cultureHeadline: "日本の現行3求人は、FSI AEがHybrid、Marketing Internがonsite、Retail & Telco AEは勤務形態非公開。職種間で条件を横展開しない。", classification: "未確認", displayLabel: "職種別（Hybrid・onsite・未確認）", officeDays: "職種別に確認", remoteOnly: "Marketing Internはremote不可", flexibility: "AEとInternで条件が異なる",
    goodFor: ["AIを業界KPIとgovernanceへ翻訳したい", "FSI・Retail/Telcoの複雑商談を動かしたい", "PoCからproduction・expandを作りたい"], cautionFor: ["generic AI demoだけを売りたい", "業界規制・data・技術学習を避けたい", "短期・単一buyerの商談だけを望む"],
    unresolved: [["日本economics", "global ARRは日本territoryの達成可能性を示さない。", "日本ARR、顧客数、平均ACV、cycle、new/expansion比率は？"], ["quota", "industry coverageと既存customerが達成難度を左右する。", "fully-ramped AEのquota、達成者比率、ramp、named account数は？"], ["PoCからproduction", "AI実験の本番転換がplatform価値の核心。", "PoC開始・成功・production・expandのconversionと期間は？"], ["delivery capacity", "SE、CS、Product、partnerのcapacityが複雑案件を制約しうる。", "stage別ownership、同時案件数、日立等partnerの役割は？"], ["報酬・career", "給与、OTE、pay mix、equity、昇進・離職は非公開。", "base/variable、quota credit、equity、昇進例、配属先の勤務は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上高", value: "非公開", detail: "非公開企業。ARRを年間売上高・純収益として扱わない。", sourceIds: ["dataiku-arr"] },
    { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、FCF、marginは公開情報で確認できない。", sourceIds: ["dataiku-arr"] },
    { label: "ARR", value: "3億5,000万米ドル超（約567.5億円超）", detail: "2025年10月の会社発表。監査済み売上高ではない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算で、発表日・決算期間平均ではない。", sourceIds: ["dataiku-arr", "rollout-b02-boj-usd-20260716"] },
    { label: "顧客・人員規模", value: "750社超・1,250人超", detail: "会社公表のグローバル値。日本顧客数・日本人員・renewalを示さない。", sourceIds: ["dataiku-arr"] },
  ];
  intelligence.companyStats.japanSince = { value: "2023年までに日本市場の責任者体制を確認", detail: "日本カントリーマネージャーと東京officeを確認。日本法人の正確な設立年月は補完しない。", sourceId: "dataiku-hitachi" };
  addSources(intelligence, [{ id: "rollout-b02-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=162.15円）", checkedAt: researchedAt }]);
}

export function applyCompanyPageRolloutBatchThree(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  if (intelligenceBySlug.verkada) patchVerkada(intelligenceBySlug.verkada);
  if (intelligenceBySlug.walkme) patchWalkMe(intelligenceBySlug.walkme);
  if (intelligenceBySlug.celonis) patchCelonis(intelligenceBySlug.celonis);
  if (intelligenceBySlug.confluent) patchConfluent(intelligenceBySlug.confluent);
  if (intelligenceBySlug.dataiku) patchDataiku(intelligenceBySlug.dataiku);
}
