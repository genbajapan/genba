import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

type CompanyPatch = Omit<CompactPatchInput, "companyId" | "jobId" | "customersId" | "externalId" | "financeId" | "unresolved"> & {
  preEntry?: boolean;
  roleFocus: string;
};

const companies: CompanyPatch[] = [
  {
    slug: "tanium", leaderName: "Dan Streetman", leaderLabel: "CEO", leaderUrl: "https://www.tanium.com/about-us/leadership/", localName: "確認不能", localLabel: "Tanium Japan責任者", localUrl: "https://job-boards.greenhouse.io/tanium",
    targets: ["最高情報・情報セキュリティ責任者（CIO・CISO）", "IT運用・Endpoint管理", "セキュリティ運用", "リスク・監査", "大規模企業・公共"],
    heroSummary: "大企業では、端末の資産・脆弱性・設定・障害情報が複数toolへ分断され、修正が必要な端末を把握しても実行までに時間がかかる。Taniumはendpointへリアルタイムに質問し、可視化からpatch、exposure低減、threat responseまでを同じdataで動かし、未管理資産、修正時間、復旧時間、tool重複を減らす。",
    competitors: "Microsoft Intune・Defender、CrowdStrike、ServiceNow、HCL BigFix", feature: "大規模endpointへリアルタイムに質問・actionし、asset、patch、exposure、performance、threat responseを一つのplatformで運用する。", advantage: "中央databaseの古いsnapshotだけに頼らず、endpointの最新状態を共通dataとしてITとSecurityの双方が使える。", benefit: "未管理資産、patch遅延、critical exposure、MTTR、tool重複を減らし、障害・攻撃時の判断から実行までを短縮できる可能性がある。", evidence: "HIS等の日本事例とABB、Whirlpool、JLL等のglobal事例を公式公開。個別成果を全顧客へ一般化しない。", marketVerdict: "結論：国内事例とStrategic Accountsを含む複数職種の採用は強い。日本売上・顧客数・quota達成率は非公開のため、territoryと既存顧客基盤を面接で確認する。", marketParagraphs: ["未管理資産、脆弱性悪用、ランサムウェア、hybrid workにより、企業は資産把握から修正・復旧までを同じ証跡で短縮する必要がある。", "Taniumはendpointのreal-time architectureを起点にAutonomous ITへ広げ、IT運用とSecurity予算を横断する提案余地を持つ。", "Genba分析：対象estateでasset coverage、data freshness、patch latency、critical exposure、MTTR、tool costをbaseline比較する。"],
    cultureHeadline: "大手顧客の複雑なIT・Security課題を、技術・partner・value engineeringと横断して解くGTM。", classification: "ハイブリッド", displayLabel: "東京／ハイブリッド", officeDays: "固定日数は求人で明記なし", remoteOnly: "Remote専用ではない", flexibility: "顧客・team条件を面接で確認", goodFor: ["大企業のStrategic Accountを長期で作りたい", "ITとSecurityの両方を扱いたい", "技術・partnerと複数年dealを進めたい"], cautionFor: ["短期・単機能の取引だけを好む", "endpoint技術を学びたくない", "公開quota・報酬を必須とする"], roleFocus: "Strategic Accountのterritory、複数年deal、partner・technical coverage",
  },
  {
    slug: "sayari", leaderName: "Farley Mesko", leaderLabel: "CEO・共同創業者", leaderUrl: "https://sayari.com/company/", localName: "確認不能", localLabel: "Japan commercial責任者", localUrl: "https://job-boards.greenhouse.io/sayari",
    targets: ["最高コンプライアンス責任者", "調達・Supply Chain", "貿易コンプライアンス", "リスク・経済安全保障", "金融・製造・公共"],
    heroSummary: "企業が直接の取引先だけを確認しても、制裁対象や強制労働、輸出規制のリスクは実質所有者、sub-tier supplier、国境を越えた取引の先に残る。Sayariは多言語の公的原始記録をentity・ownership・trade graphへつなぎ、調査時間、見落とし、説明不能なAI判断を減らす。",
    competitors: "LSEG World-Check、Moody's・Bureau van Dijk、Dun & Bradstreet、Palantir", feature: "250超法域の公的原始記録をentity、ownership、trade graphへ解決し、Map、Graph、Screening、Commercial World Modelで調査する。", advantage: "list matchだけでなく、原始sourceへ遡りながら所有・取引・sub-tierを横断できる。", benefit: "risk discovery、entity resolution、manual review、supplier visibility、audit responseを速められる可能性がある。", evidence: "Honeywell、U.S. CBP、HMRC等の公式事例と117億件超のrecordsを公開。日本のnamed定量事例は未確認。", marketVerdict: "結論：東京でcommercialとtechnical職を同時採用し、経済安全保障の外部要求とも合う。一方、国内顧客proofとJapan economicsは非公開。", marketParagraphs: ["経済制裁、強制労働、輸出管理、供給網resilienceにより、企業は直接取引先だけでなく所有・trade・sub-tierまで説明する必要がある。", "Sayariはprimary-source graphとagentic orchestrationへ拡張し、ComplianceだけでなくProcurement・Supply Chainへ予算を広げられる。", "Genba分析：同じcaseでsource coverage、entity accuracy、false positive、調査時間、escalation、audit evidenceを比較する。"],
    cultureHeadline: "Economic Securityのdomain知識とdata productを結び、commercial・technical teamで市場を作る段階。", classification: "未確認", displayLabel: "東京／出社日数未確認", officeDays: "求人で明記なし", remoteOnly: "未確認", flexibility: "配属先で確認", goodFor: ["経済安全保障をbusiness outcomeへ変えたい", "dataとdomainの両方を学びたい", "小規模Japan teamを作りたい"], cautionFor: ["完成済みplaybookだけを望む", "原始sourceの精度検証を避けたい", "国内事例の多さを必須とする"], roleFocus: "Japan territoryのadoption、renewal、expansionとdata精度",
  },
  {
    slug: "doubleverify", leaderName: "Mark Zagorski", leaderLabel: "CEO", leaderUrl: "https://ir.doubleverify.com/governance/management/default.aspx", localName: "確認不能", localLabel: "Japan revenue責任者", localUrl: "https://job-boards.greenhouse.io/doubleverify",
    targets: ["最高マーケティング責任者（CMO）・Media責任者", "デジタルマーケティング", "広告代理店", "広告運用・分析", "グローバル広告主"],
    heroSummary: "広告主は複数platformへmedia費を配分しても、fraud、不適切面、viewability、attention、incremental performanceを同じ基準で比較できない。DoubleVerifyは第三者計測とAI最適化を組み合わせ、広告の無駄、brand risk、判断時間を減らし、media投資を成果へ寄せる。",
    competitors: "Integral Ad Science、platform native measurement、agency独自計測", feature: "digital広告のfraud、viewability、brand suitability、attention、performanceをSocial・CTV・programmatic横断で計測・最適化する。", advantage: "media売買platformから独立した第三者dataを共通基準として使い、計測からactivationへ接続する。", benefit: "invalid traffic、不適切面、media wasteを減らし、attention・VTR・ROASの改善余地を見つけられる。", evidence: "Campari、Mondelēz、Vodafone等の公式事例を公開。Japanのnamed定量事例は未確認。", marketVerdict: "結論：Social・CTV・国際measurementは成長しているが、Q2 2026の売上成長は3%へ鈍化しNielsenとの買収契約も発表。Japan roleのterritoryと統合影響を確認する。", marketParagraphs: ["cookie規制、walled garden、AI生成content、CTV拡大により、広告主はprivacyに配慮しながらmedia qualityと成果を独立して説明する必要がある。", "DoubleVerifyはverificationからAttention・Performanceへ広げる一方、platform標準計測との重複と買収後roadmapが選定論点になる。", "Genba分析：同じcampaignでinvalid traffic、brand suitability、attention、conversion、media waste、incremental lift、計測costを比較する。"],
    cultureHeadline: "advertiser・agency双方を動かし、第三者dataをcommercial outcomeへ変えるRevenue組織。", classification: "ハイブリッド", displayLabel: "東京／週3日以上出社", officeDays: "週3日以上", remoteOnly: "Remote専用ではない", flexibility: "求人記載に従う", goodFor: ["AdTechとbusiness outcomeを横断したい", "new・renewal・expansionを持ちたい", "global platformと協働したい"], cautionFor: ["媒体社dataだけで完結したい", "計測methodの説明を避けたい", "買収後の変化を許容できない"], roleFocus: "advertiser・agencyのnew、renewal、expansionと買収後の組織",
  },
  {
    slug: "similarweb", leaderName: "Or Offer", leaderLabel: "共同創業者・CEO", leaderUrl: "https://ir.similarweb.com/governance/executive-management", localName: "確認不能", localLabel: "Japan・Korea Sales責任者", localUrl: "https://job-boards.greenhouse.io/similarweb/jobs/8045885",
    targets: ["戦略・経営企画", "マーケティング・eCommerce", "営業・収益運用", "投資・市場調査", "デジタル事業責任者"],
    heroSummary: "自社analyticsだけでは、競合のtraffic、顧客のsearch行動、市場の伸び、潜在顧客のdigital signalを把握できず、意思決定が社内dataへ偏る。Similarwebはweb・app・search・marketの外部dataを共通化し、調査時間、優先順位の誤り、機会発見の遅れを減らす。",
    competitors: "Semrush、Sensor Tower、data.ai系代替、Google・自社analytics、調査会社", feature: "web、app、search、shopping、sales、投資向けのdigital dataをplatformとAPIで提供する。", advantage: "複数のdigital signalを同じ市場・競合・account viewへまとめ、workflowやAI agentにも組み込める。", benefit: "research time、lead quality、pipeline、market share、campaign・product prioritizationを改善できる可能性がある。", evidence: "eToro、Google、DHL等の公式顧客情報を公開。個別成果と推計精度はuse caseごとに検証が必要。", marketVerdict: "結論：Q1 2026売上10%増、RPO18%増、大口ARR顧客12%増は強い。全体NRR98%とJapan単体指標の非公開は留意する。", marketParagraphs: ["AI answer、privacy規制、platform仕様変更でdigital行動が分散し、企業はfirst-party dataだけでは市場変化を捉えにくい。", "SimilarwebはDigital ResearchからSales、Retail、AI data licensingへ広げ、複数buyerへexpandする余地がある。", "Genba分析：対象市場でcoverage、推計誤差、freshness、API接続、意思決定時間、pipeline・share変化をbaseline比較する。"],
    cultureHeadline: "Japan・Koreaのstrategy、team、forecast、大口dealを同時に持つregional Sales leadership。", classification: "未確認", displayLabel: "東京／出社日数未確認", officeDays: "求人で明記なし", remoteOnly: "未確認", flexibility: "leadership cadenceを面接で確認", goodFor: ["dataを経営判断へ変えたい", "Japan・Koreaのteamを率いたい", "複数solutionをcross-sellしたい"], cautionFor: ["推計dataの限界説明を避けたい", "単一製品だけを売りたい", "team quotaの公開を必須とする"], roleFocus: "Japan・Koreaのteam quota、forecast、data accuracyとCEO succession",
  },
  {
    slug: "appsflyer", leaderName: "Oren Kaniel", leaderLabel: "CEO・共同創業者", leaderUrl: "https://www.appsflyer.com/company/leadership/", localName: "確認不能", localLabel: "Japan責任者", localUrl: "https://careers.appsflyer.com/tokyo/",
    targets: ["最高マーケティング責任者（CMO）・成長責任者", "モバイルマーケティング", "製品・データ", "プライバシー・セキュリティ", "アプリ・Commerce事業"],
    heroSummary: "mobile・web・CTVに顧客接点が広がるほど、platformのprivacy制約と異なる計測仕様が課題となり、どの施策が本当に成長へ寄与したか見えにくくなる。AppsFlyerはattribution、incrementality、privacy-preserving data連携をつなぎ、media配分、獲得効率、retention判断を改善する。",
    competitors: "Adjust、Singular、Branch、platform native measurement、内製data stack", feature: "mobile・web・CTVのattribution、measurement、incrementality、data collaboration、fraud protectionを提供する。", advantage: "複数channelとprivacy制約をまたぎ、marketing・product・data teamが同じ計測基盤で判断できる。", benefit: "獲得cost、media waste、計測工数を減らし、channel別の増分効果とretentionへ予算を寄せられる可能性がある。", evidence: "グローバルのapp・brand事例を公式公開。Japanの個別成果は対象顧客とmethodを分けて確認する。", marketVerdict: "結論：東京でnewからrenewal・expansionまで持つroleを確認。private companyのためJapan売上、成長率、quota達成率は非公開。", marketParagraphs: ["privacy規制、SKAN、walled garden、CTV、AI marketingにより、last-click attributionだけでは投資判断が難しい。", "AppsFlyerはmeasurementからincrementality・data collaborationへ広げ、CMOだけでなくData・Privacyへstakeholderを拡張する。", "Genba分析：同じcampaignでattribution coverage、incremental lift、fraud、CAC、retention、data・運用costを比較する。"],
    cultureHeadline: "new、renewal、expansionを一人がつなぎ、Marketing・Product・Dataの成果を横断するGTM。", classification: "未確認", displayLabel: "東京／出社日数未確認", officeDays: "求人で明記なし", remoteOnly: "未確認", flexibility: "配属先で確認", goodFor: ["MarTechとdataを横断したい", "full-cycleで顧客を育てたい", "privacy制約下の計測を学びたい"], cautionFor: ["単発new logoだけを好む", "measurement methodを深掘りしたくない", "公開報酬を必須とする"], roleFocus: "SMB bookのnew、renewal、expansion、pay mixと計測method",
  },
  {
    slug: "bluematrix", leaderName: "David Nable", leaderLabel: "CEO", leaderUrl: "https://www.bluematrix.com/about-us", localName: "確認不能", localLabel: "Tokyo client責任者", localUrl: "https://jobs.lever.co/BlueMatrix?location=Tokyo",
    targets: ["投資銀行Research責任者", "コンプライアンス", "調査業務運用", "機関投資家営業", "データ・デジタル変革"],
    heroSummary: "投資調査では、原稿作成、承認、compliance、配信、読者分析が別systemとemailへ分かれ、analystの時間と統制、顧客理解が失われる。BlueMatrixはresearch lifecycleを一つのworkflowへまとめ、制作時間、compliance risk、配信運用を減らし、読者dataをclient engagementへ変える。",
    competitors: "S&P Capital IQの一部workflow、Visible Alpha、内製CMS・email stack", feature: "investment researchのauthoring、approval、compliance、distribution、readership intelligenceを一つのplatformで管理する。", advantage: "research固有のworkflowと配信networkを同じdataでつなぎ、制作から利用状況まで追跡できる。", benefit: "publication cycle、manual handoff、compliance reworkを減らし、adoption・retention・organic expansionを改善できる可能性がある。", evidence: "Jefferies、Oppenheimer等を公式顧客情報で確認。顧客成果は各workflowとbaselineで再検証する。", marketVerdict: "結論：東京のClient Successはadoption・retention・expansionを明確に持つ希少なcapital markets SaaS role。報酬単位とJapan scaleは非公開。", marketParagraphs: ["投資調査は規制、情報管理、cost圧力、AI consumptionの変化を受け、制作だけでなく配信・利用証跡まで統制する必要がある。", "BlueMatrixはvertical workflowとreader dataをつなぎ、supportではなく顧客成果とrenewalを持つCSを東京で配置する。", "Genba分析：publication cycle、compliance rework、distribution error、reader adoption、renewal、expansion、運用costを比較する。"],
    cultureHeadline: "Capital Marketsのdomain知識を使い、adoption・retention・expansionまで持つClient Success。", classification: "ハイブリッド", displayLabel: "東京／ハイブリッド", officeDays: "固定日数は求人で明記なし", remoteOnly: "Remote専用ではない", flexibility: "顧客対応条件を面接で確認", goodFor: ["Capital MarketsとSaaSを横断したい", "CSでcommercial責任を持ちたい", "workflow定着を数字で示したい"], cautionFor: ["product supportだけを望む", "金融domainを学びたくない", "求人の報酬単位を推測したい"], roleFocus: "portfolio規模、retention・expansion credit、報酬単位と顧客data責任",
  },
  {
    slug: "black-duck", leaderName: "Jason Schmitt", leaderLabel: "CEO", leaderUrl: "https://www.blackduck.com/company.html", localName: "確認不能", localLabel: "Japan sales責任者", localUrl: "https://job-boards.greenhouse.io/blackduck",
    targets: ["情報セキュリティ責任者（CISO）・AppSec", "エンジニアリング・DevSecOps", "製品セキュリティ", "オープンソース管理部門", "法務・コンプライアンス"],
    heroSummary: "softwareへopen sourceとAI生成codeが増えるほど、脆弱性、license、品質のriskはscannerごとに分断し、開発速度と安全性が衝突する。Black DuckはSCA、SAST、DAST、servicesをつなぎ、修正優先順位、release friction、audit evidenceを改善する。",
    competitors: "Snyk、Veracode、Checkmarx、GitHub Advanced Security", feature: "proprietary code、open source dependency、実行中applicationをSCA、SAST、DASTとservicesで検査・管理する。", advantage: "open source riskの長いdomain経験と複数testing方式を、developer workflowとenterprise governanceへ接続する。", benefit: "critical finding、false positive、fix time、release friction、license risk、tool重複を減らせる可能性がある。", evidence: "4,000超organizationsと複数のglobal customer storyを公式公開。日本固有の定量caseは未確認。", marketVerdict: "結論：東京でSales、SE、Implementation、Supportを採用しlifecycle coverageは強い。国内proof、Japan economics、報酬内訳は非公開。", marketParagraphs: ["software supply-chain attack、既知脆弱性、license、AI-generated codeにより、企業はSBOM作成だけでなく修正・例外・監査を開発工程へ組み込む必要がある。", "Black DuckはSCAの起点からSAST・DAST・servicesへ広げ、AppSec platformとして予算を統合しようとしている。", "Genba分析：同じapplicationでcoverage、false positive、critical fix time、developer hours、release delay、audit evidence、3年TCOを比較する。"],
    cultureHeadline: "C-levelのriskと開発現場のworkflowをつなぎ、複数年のAppSec transformationを売るGTM。", classification: "未確認", displayLabel: "東京／出社日数未確認", officeDays: "求人で明記なし", remoteOnly: "未確認", flexibility: "配属先で確認", goodFor: ["AppSecの大型dealを作りたい", "開発とSecurity双方を動かしたい", "technical teamと複数年提案をしたい"], cautionFor: ["scanner機能だけを売りたい", "developer workflowを学びたくない", "報酬rangeの内訳を推測したい"], roleFocus: "大口複数年deal、JPY rangeの内訳、technical・delivery coverage",
  },
  {
    slug: "ivanti", leaderName: "Dennis Kozak", leaderLabel: "CEO", leaderUrl: "https://www.ivanti.com/company/leadership", localName: "確認不能", localLabel: "Ivanti Software K.K.責任者", localUrl: "https://careers.ivanti.com/",
    targets: ["最高情報責任者（CIO）・IT運用", "サービス管理", "エンドポイント・UEM", "セキュリティ・脅威露出", "従業員体験"],
    heroSummary: "企業ではendpoint、mobile、asset、service request、vulnerabilityが別toolとteamへ分かれ、端末の状態を見ても修正や従業員支援までつながらない。IvantiはNeuronsでUEM、ITSM、Exposure、Zero Trustを接続し、ticket時間、patch遅延、risk、tool重複を減らす。",
    competitors: "Microsoft Intune・Defender、ServiceNow、ManageEngine、Omnissa", feature: "endpoint・mobile、IT service、asset、exposure、accessをIvanti Neuronsで可視化・優先順位化・automationする。", advantage: "device、user、service、riskのcontextを一つのworkflowへつなぎ、ITとSecurityの分断を減らす。", benefit: "asset coverage、ticket cycle、patch latency、vulnerability risk、employee experience、tool costを改善できる可能性がある。", evidence: "ライフネット生命、東映アニメーション、ブラザー工業、山九等の国内事例を公式公開。", marketVerdict: "結論：日本法人と複数の国内named caseは強い。現行Sales Engineerはtechnical saleの入口だが、日本売上・quota・報酬は非公開。", marketParagraphs: ["hybrid work、BYOD、cloud app、脆弱性悪用により、deviceとuserの状態、access、service、remediationを分断せず運用する必要がある。", "Ivantiは複数製品基盤をNeuronsへ統合し、UEM・ITSM・Exposureを一つのoperating modelとして提案する。", "Genba分析：対象部門でasset coverage、ticket cycle、patch latency、critical exposure、DEX、tool costをbaseline比較する。"],
    cultureHeadline: "technical discoveryとbusiness outcomeをつなぎ、Account Managerと国内顧客のplatform化を支えるPresales。", classification: "未確認", displayLabel: "東京／出社日数未確認", officeDays: "求人で明記なし", remoteOnly: "未確認", flexibility: "顧客・team条件を面接で確認", goodFor: ["EndpointとITSMを横断したい", "technical saleをbusiness caseへ変えたい", "国内事例を使い提案したい"], cautionFor: ["単一製品だけを扱いたい", "security検証を避けたい", "公開報酬を必須とする"], roleFocus: "presales quota、demo・PoC責任、incident対応とproduct統合",
  },
  {
    slug: "pigment", preEntry: true, leaderName: "Eléonore Crespo / Romain Niccoli", leaderLabel: "共同創業者・共同CEO", leaderUrl: "https://www.pigment.com/company", localName: "確認不能", localLabel: "日本法人・日本責任者", localUrl: "https://jobs.lever.co/pigment/",
    targets: ["最高財務責任者（CFO）・FP&A", "収益運用・営業計画", "人員計画", "供給網計画", "最高情報責任者（CIO）・データ"],
    heroSummary: "Finance、Sales、HR、Supply Chainの計画が別々のspreadsheetへ分かれると、同じ前提でscenarioを比較できず、forecastと資源配分が遅れる。Pigmentはgoverned data、model、workflow、AI agentを一つの計画基盤へ統合し、計画更新と意思決定を改善する。日本法人・拠点・Japan求人は現時点で確認できない。",
    competitors: "Anaplan、Workday Adaptive Planning、Oracle EPM、Excel・Google Sheets", feature: "Finance、Sales、HR、Supply Chainのmodel、scenario、forecast、workflow、AI agentを一つのplanning platformへ統合する。", advantage: "spreadsheetに近い柔軟性とEnterprise governanceを両立し、部門横断のassumptionを同じmodelで更新する。", benefit: "planning cycle、manual consolidation、scenario作成、forecast差異、意思決定時間を減らせる可能性がある。", evidence: "Figma、Miro、Gong、Klarna等のglobal顧客を公式掲載。日本のnamed customerと定量成果は未確認。", marketVerdict: "結論：global tractionと日本のFP&A課題との親和性はあるが、現行投資は欧米中心。Japan求人・拠点・顧客proofがないため進出企業として扱わない。", marketParagraphs: ["人手不足、volatile demand、部門別dataにより、日本企業もannual budgetだけでなく継続的なscenario・resource allocationを必要とする。", "PigmentはEPMからAgentic planningへ広げる一方、APAC拠点、local partner、日本語・会計慣行へのreadinessは未確認。", "Genba分析：進出判断は国内lighthouse、Japan pipeline、local delivery、日本語同等性、repeatable economicsの5条件で観測する。"],
    cultureHeadline: "欧米中心の高成長EPM組織。現行Japan求人0件のため日本の働き方と配属組織は確認不能。", classification: "未確認", displayLabel: "日本未進出・現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "海外求人条件を将来の日本求人へ転用しない", goodFor: ["EPM categoryを先回りして学びたい", "CFO transformationを扱いたい", "将来のJapan entryを観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "日本語・国内supportを必須とする", "進出時期の断定を求める"], roleFocus: "Japan entry条件、product localization、local partnerとrepeatable economics",
  },
  {
    slug: "ironclad", preEntry: true, leaderName: "Dan Springer", leaderLabel: "CEO", leaderUrl: "https://ironcladapp.com/resources/articles/ironclad-ceo-dan-springer", localName: "確認不能", localLabel: "日本法人・日本責任者", localUrl: "https://ironcladapp.com/careers",
    targets: ["法務責任者（General Counsel）", "法務業務運用", "調達", "営業業務運用", "財務・最高情報責任者（CIO）"],
    heroSummary: "contractのintake、review、approval、signature、repositoryがemailとdriveへ分かれると、法務待ちでrevenue・調達が遅れ、非標準条項と契約dataを管理できない。IroncladはCLMとLegal AIでworkflowをつなぐ。日本法人・拠点・Japan求人は現時点で確認できない。",
    competitors: "DocuSign CLM、Icertis、Agiloft、LegalOn・MNTSQ・国内契約SaaS", feature: "contractのintake、draft、review、approval、signature、repository、data、AI analysisを一つのdigital contracting platformで管理する。", advantage: "Legal自身がworkflowとplaybookを設計し、AI outputをsource・approval・auditの中で扱える。", benefit: "review cycle、manual handoff、non-standard term、revenue・procurement delay、contract data検索を改善できる可能性がある。", evidence: "L'Oréal、Docker、Hormel等のglobal事例と2,000社超・20億件超のcontract処理を公式説明。日本proofは未確認。", marketVerdict: "結論：CLM・Legal AI需要との親和性はあるが、拠点・採用は米国・London中心。Japan求人・APAC delivery・日本語同等性がないため継続観測とする。", marketParagraphs: ["契約量、cross-border取引、AI reviewが増えるほど、法務は速度と同時にplaybook、権限、監査、professional responsibilityを保つ必要がある。", "IroncladはCLMからAI・Juristへ広げる一方、日本法・契約慣行、電子署名、data residency、local deliveryは未確認。", "Genba分析：進出判断は国内production case、日本語精度、local legal・SI partner、Japan pod、renewal economicsで観測する。"],
    cultureHeadline: "Legal workflowとAIを横断する欧米中心の組織。現行Japan求人0件で日本勤務条件は確認不能。", classification: "未確認", displayLabel: "日本未進出・現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "海外求人条件を将来の日本求人へ転用しない", goodFor: ["Legal AI categoryを先回りしたい", "CLMのbusiness caseを学びたい", "将来のJapan entryを観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "日本法・日本語の同等性を前提にしたい", "進出時期の断定を求める"], roleFocus: "Japan entry条件、日本語Legal AI、国内partnerとdata・法務責任",
  },
];

function unresolved(roleFocus: string, preEntry = false): string[][] {
  if (preEntry) return [
    ["Japan entry", `${roleFocus}は公開情報で未確定。`, "Japan launchを決める顧客数、ARR、partner、product条件は？"],
    ["Product readiness", "日本語・国内要件の同等性は未確認。", "日本語UI・AI品質、security・legal資料、support、data locationの未対応点は？"],
    ["Commercial proof", "国内named customerとrenewalは未確認。", "APACから担当する日本の有償顧客、pipeline、ACV、cycle、renewal実績は？"],
    ["Local delivery", "Japan podとpartnerは未確認。", "最初のJapan podはAE単独か、SE・CS・Marketing・Legalとpartnerを含むか？"],
    ["Role economics", "対象求人がなく報酬・quotaを推測できない。", "採用開始時のterritory、quota、OTE、ramp、coverage、昇進基準は？"],
  ];
  return [
    ["担当市場", `${roleFocus}の公開情報は限定的。`, "担当territory、既存・新規比率、account数、平均ACV、sales cycleは？"],
    ["目標達成", "日本のquota・attainment・rampは非公開。", "過去4四半期のramped人数、達成者比率、median attainment、ramp期間は？"],
    ["報酬", "base、OTE、pay mix、equityの数値は確定できない。", "base、OTE、pay mix、accelerator、equity、credit rule、ramp保証は？"],
    ["顧客成果", "公開事例をJapan全体へ一般化できない。", "time-to-value、adoption、renewal、expansion、顧客KPIを誰が持つ？"],
    ["組織・キャリア", "Japanのheadcount・昇進・離職は非公開。", "team構成、manager span、直近24カ月の昇進・異動・離職と次levelのKPIは？"],
  ];
}

function applyCapitalMarketRead(slug: string, intelligence: CompanyPublicIntelligence) {
  if (slug === "doubleverify") {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "Q2 2026（2026-08-17確認）",
      metrics: [
        { label: "売上", value: "1.938億米ドル（約305.3億円）", change: "+3%", interpretation: "Measurementは6%増、Supply-sideは13%増だが、全社成長は鈍化。", sourceId: "doubleverify-finance" },
        { label: "稼ぐ力", value: "純利益1,290万米ドル（約20.3億円）", change: "調整後EBITDA 6,530万米ドル（約102.9億円）・margin 34%", interpretation: "利益創出を維持する一方、買収契約後の投資・組織方針を確認。", sourceId: "doubleverify-finance" },
      ],
      growthDrivers: [{ title: "Social・CTV・Performance", evidence: "Social measurement、CTV、AIを用いたoptimizationへproduct scopeを拡張。", japanMeaning: "Japan sellerはverificationだけでなくattention・performanceのbusiness caseを作る必要がある。", sourceIds: ["doubleverify-finance", "doubleverify-company", "doubleverify-job"] }],
      risks: [{ title: "成長鈍化と買収統合", disclosedRisk: "Q2売上成長3%。2026年8月にNielsen親会社との買収契約を発表し、従来guidanceをwithdraw。", companyResponse: "product innovationと統合機会を追求。", genbaRead: "territory、reporting、product roadmap、顧客dataの中立性を面接・契約で確認する。", sourceIds: ["doubleverify-finance"] }],
      japanCommitment: { verdict: "東京拠点とJapan向けSales・Account Management求人を確認", summary: "local revenue teamは確認できるが、日本売上・顧客数・headcount・quotaは非公開。", signals: [{ year: "2026", title: "Japan revenue採用", detail: "SalesとAccount Managementの公式求人を確認。", sourceIds: ["doubleverify-job"] }], unknowns: ["日本売上・顧客数", "Japan teamのquota・attainment", "買収後の組織・product方針"] },
      scenarios: [{ scenario: "基本", title: "計測からperformanceへ拡張", body: "Social・CTV・Attention・optimizationを既存advertiserへcross-sell。" }, { scenario: "上振れ", title: "Nielsenとのcross-media統合", body: "digitalとcross-media measurementを同じbuyerへ広げる。" }, { scenario: "下振れ", title: "統合遅延・中立性懸念", body: "組織変更とplatform native競争でnew・renewalが鈍る。" }],
      sourceIds: ["doubleverify-finance", "doubleverify-company", "doubleverify-job", "doubleverify-customers"],
    };
  }
  if (slug === "similarweb") {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "Q1 2026（2026-08-17確認）",
      metrics: [
        { label: "売上", value: "7,387.8万米ドル（約116.4億円）", change: "+10%", interpretation: "AI関連data・solutionと大口顧客の拡大が寄与。", sourceId: "similarweb-finance" },
        { label: "稼ぐ力", value: "GAAP営業損失441.7万米ドル（約7.0億円）", change: "非GAAP営業利益235.4万米ドル（約3.7億円）", interpretation: "GAAP赤字は残るが、非GAAP利益とnormalized FCFを継続。", sourceId: "similarweb-finance" },
        { label: "契約基盤", value: "RPO 2.977億米ドル（約469.0億円）", change: "+18%", interpretation: "複数年契約はARRの64%。全体NRR 98%との両面を見る。", sourceId: "similarweb-finance" },
      ],
      growthDrivers: [{ title: "AI data・large enterprise", evidence: "ARR 10万米ドル（約1,575.6万円）超顧客は461社で12%増。AI関連data licensingとRetail Intelligenceを拡張。", japanMeaning: "Japan・KoreaでResearch、Marketing、Sales、AI data buyerを横断する余地。", sourceIds: ["similarweb-finance", "similarweb-job"] }],
      risks: [{ title: "retention・data依存・CEO succession", disclosedRisk: "全体NRRは98%。外部data sourceとplatform仕様へ依存し、CEO succession planningも開始。", companyResponse: "multi-year比率とAI関連data・solutionを拡大。", genbaRead: "Japan teamのretention、data accuracy、leader transitionを確認する。", sourceIds: ["similarweb-finance", "similarweb-company"] }],
      japanCommitment: { verdict: "東京拠点とJapan・Korea Sales leadership求人を確認", summary: "regional leadership投資は確認できるが、日本売上・ARR・headcount・quotaは非公開。", signals: [{ year: "2026", title: "Head of Sales, Japan & Korea", detail: "東京でstrategy、team、pipeline、forecast、大口dealを統括。", sourceIds: ["similarweb-job"] }], unknowns: ["日本・韓国別ARRとNRR", "team quota・attainment・headcount", "CEO succession後のregional priority"] },
      scenarios: [{ scenario: "基本", title: "data solutionのland-and-expand", body: "既存顧客へSales、Retail、AI dataをcross-sell。" }, { scenario: "上振れ", title: "AI agentのdata layer化", body: "LLM・agent workflowへtrusted digital dataをlicense。" }, { scenario: "下振れ", title: "NRR・data quality圧力", body: "推計accuracy、platform変化、bundle競争でrenewalが弱まる。" }],
      sourceIds: ["similarweb-finance", "similarweb-company", "similarweb-job", "similarweb-customers"],
    };
  }
}

export function applyCompanyPageRolloutBatchTwentyFour(records: Record<string, CompanyPublicIntelligence>) {
  for (const company of companies) {
    const intelligence = records[company.slug];
    if (!intelligence) continue;
    const preEntry = company.preEntry ?? false;
    const ids = preEntry
      ? { companyId: `${company.slug}-company`, jobId: `${company.slug}-careers`, customersId: `${company.slug}-customers`, externalId: `${company.slug}-external`, financeId: `${company.slug}-growth` }
      : { companyId: `${company.slug}-company`, jobId: `${company.slug}-job`, customersId: `${company.slug}-customers`, externalId: `${company.slug}-external`, financeId: `${company.slug}-finance` };
    if (!preEntry && !intelligence.marketStatus.milestones.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label))) {
      intelligence.marketStatus.milestones.push({ year: "年次未確認", label: "日本進出", detail: "日本法人・東京拠点またはJapan専任組織を公式求人・会社情報で確認。進出年は公開情報で確認できない。", sourceId: ids.companyId });
    }
    applyStandard(intelligence, buildCompactPatch({ ...company, ...ids, unresolved: unresolved(company.roleFocus, preEntry) }));
    if (preEntry) {
      if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: "Global公式事例", need: company.evidence, sourceId: ids.customersId }];
      if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience = [
        { label: "日本拠点", value: "未確認", detail: "日本法人・Tokyo office・Japan求人を公式情報で確認できない。", sourceId: ids.jobId },
        { label: "国内顧客", value: "未確認", detail: "global顧客事例を日本のproduction proofとして扱わない。", sourceId: ids.customersId },
        { label: "観測条件", value: "継続観測", detail: "求人、顧客、partner、日本語、local deliveryのsignalを追う。", sourceId: ids.financeId },
      ];
    }
    applyCapitalMarketRead(company.slug, intelligence);
  }
}
