import type { CompanyPublicIntelligence, JapanEntryAssessment } from "@/lib/company-public-intelligence";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-20";

const twilioIntelligence = buildIntelligence({
  checkedAt,
  slug: "twilio",
  name: "Twilio",
  jobUrl: "https://jobs.twilio.com/careers?pid=1099553600898&sort_by=timestamp&start=0",
  officialUrl: "https://www.twilio.com/en-us/company",
  customersUrl: "https://customers.twilio.com/ja-jp?region=asia-pacific",
  externalUrl: "https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/risk/",
  financeUrl: "https://investors.twilio.com/news-releases/news-release-details/twilio-announces-second-quarter-2026-results",
  publicInfo: { ticker: "TWLO", exchange: "NYSE", listedSince: "2016年" },
  salesSnapshot: "TwilioはVoice、Messaging、Email、Verify、Flex、SegmentをAPIとcustomer dataでつなぐ顧客engagement基盤。日本のStrategic Account Executiveは既存大手顧客の利用量だけでなく、複数product、AI agent、顧客体験、gross marginを成長計画へ変える。",
  growthSummary: "Q2 2026は売上14.99億ドル、前年同期比22%増、organic growth 17%、DBNER 116%、free cash flow 3.53億ドル。日本法人の被保険者数は22人と確認できるが、日本単体の売上、顧客数、NRR、営業達成率は非公開。",
  milestones: [
    { year: "2008", label: "創業", detail: "communication機能をdeveloper APIとして提供開始。", source: "company" },
    { year: "2016", label: "NYSE上場", detail: "ticker TWLOで上場。", source: "finance" },
    { year: "2018", label: "日本法人設立", detail: "Twilio Japan合同会社の法人番号指定。", source: "company" },
    { year: "2022", label: "国内固定電話網と接続", detail: "日本で0AB-J番号を含むcloud voice提供を拡張。", source: "company" },
    { year: "2026.08", label: "Strategic AE採用", detail: "日本Remoteで既存顧客拡張roleを確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Toyota Connected、ANA、GO等の国内事例は、単なるSMS・通話の送信ではなく、contact center、運航通知、mobilityの対話をapplicationへ組み込み、処理時間、到達率、運用costを改善する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "電話・SMSをAPI化する起点からEmail、認証、contact center、customer dataへ広がり、channelごとのpoint solutionではなく顧客との会話をprogrammable infrastructureとして扱う。" },
    { title: "外部環境の要求から見る課題", body: "AI agentが顧客対応を増やすほど、企業はlatency、到達、本人確認、同意、個人data、障害時の人へのhandoffを同時に管理し、通信品質と事業責任を説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "電話、SMS、email、chat、contact center、customer dataが別system・別vendorへ分かれている。" },
    { label: "課題", body: "顧客文脈がchannel間で切れ、delivery、fraud、support、AI agentの品質とcostを一つのKPIで管理できない。" },
    { label: "解決策", body: "重要customer journeyを一つ選び、communication API、Flex、Segment、AIを接続して到達、containment、handle time、conversion、cost、満足度を測る。" },
    { label: "選定の理由", body: "AWS、Microsoft、Genesys、Vonage、Sinch、国内carrier、内製との比較で、global通信基盤、developer速度、customer data、AI orchestrationを同じplatformで運用できる場合に選ぶ。" },
  ],
  openingHook: "顧客との電話・message・emailが失敗した時、何人が何systemを調べ、売上・support・信頼への影響を説明できますか。",
  valueHypothesis: "delivery rate、containment、average handle time、conversion、fraud loss、developer hours、channel単価、gross marginをbaseline比較する。",
  objection: "carrier、contact center、CDP、emailは既存vendorで足りており、Twilioへ寄せるcostと複雑性が大きい。",
  reframe: "API単価だけでなく、channel追加速度、integration・運用工数、delivery、AI agentの品質、customer journey全体の3年TCOで比較する。",
  facts: [
    { label: "Q2 2026売上", value: "14.99億ドル", detail: "会社決算。前年同期比22%増。", source: "finance" },
    { label: "Organic growth", value: "17%", detail: "Q2 2026の会社指標。", source: "finance" },
    { label: "Dollar-Based Net Expansion Rate", value: "116%", detail: "Q2 2026の会社指標。", source: "finance" },
    { label: "Free cash flow", value: "3.53億ドル", detail: "Q2 2026。", source: "finance" },
    { label: "従業員", value: "5,492人", detail: "2026年6月30日時点。", source: "finance" },
    { label: "日本法人での想定従業員数", value: "22人", detail: "2026年6月の厚生年金保険・健康保険の被保険者数。社員総数と一致しない場合がある。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Strategic Account Executive。", source: "job" },
  ],
  customers: [
    { company: "Toyota Connected", products: "Twilio Flex", outcome: "PoCを1日で完了し、after-call workを13%、月間平均処理時間を18%削減した公式事例。", implication: "contact center刷新を事業・運用KPIで説明できる。" },
    { company: "ANA", products: "Programmable SMS / SendGrid", outcome: "運航情報を確実かつtimelyに配信し、SMS運用costを削減した国内事例。", implication: "mission-criticalな通知のdeliveryとcostを扱うproof。" },
    { company: "GO", products: "Programmable Voice", outcome: "乗客・乗務員・事業者をつなぐin-app双方向通話に採用。", implication: "mobility productの中核workflowへcommunicationを埋め込む例。" },
  ],
  externalSignals: [
    { label: "通信・AI agent", value: "品質と責任", detail: "自動対話が増えるほど到達、本人確認、human handoff、障害対応を設計する必要がある。", caveat: "Twilio導入だけで個別serviceの適法性・安全性を保証しない。" },
    { label: "個人data", value: "同意・目的・安全管理", detail: "communication logとcustomer dataの統合では利用目的、委託、越境、retentionを確認する。", caveat: "要件は業界・用途・契約で異なる。" },
  ],
  role: "Strategic Account Executiveが日本の既存大手顧客でterritory plan、up-sell・cross-sell、forecast、technical・business stakeholderとの関係を担う。",
  organization: "remote-firstのglobal組織で、Marketing、Solutions Engineering、Partner、Product等と連携。日本法人は確認できるが、担当account数とreporting lineは非公開。",
  careerValue: "CPaaS、CCaaS、customer data、AI agent、usage・gross-margin economicsを横断してStrategic accountを育てる経験。",
  globalHeadcount: "5,492人",
  japanPresence: "Twilio Japan合同会社・東京都渋谷区。2018年設立、2026年6月の被保険者数22人",
  japanSince: "2018年",
  solutions: [
    { name: "Communications APIs", valueProp: "Voice、Messaging、Email、Videoをapplicationへ組み込む。", url: "https://www.twilio.com/ja-jp/messaging", competitors: "Vonage、Sinch、AWS、国内carrier。", differentiation: "global connectivityとdeveloper-first API。" },
    { name: "Twilio Flex", valueProp: "programmable contact centerでagent・workflow・channelを構成する。", url: "https://www.twilio.com/ja-jp/flex", competitors: "Genesys、Amazon Connect、Five9、NICE。", differentiation: "APIとcommunication基盤を同じplatformで拡張。" },
    { name: "Twilio Segment", valueProp: "first-party customer dataを収集・統合し、engagementへ活用する。", url: "https://segment.com/", competitors: "Salesforce Data Cloud、Adobe、Tealium、mParticle。", differentiation: "dataからcommunication actionまで接続。" },
  ],
  fitTags: ["アンカー企業", "Customer Engagement", "CPaaS", "Communications API", "AI", "Strategic Sales", "Remote", "Japan"],
  comparisons: [
    { arena: "CPaaS", companies: ["Twilio", "Vonage", "Sinch", "国内carrier"], why: "coverage、delivery、API、support、cost" },
    { arena: "Contact Center", companies: ["Twilio Flex", "Genesys", "Amazon Connect", "NICE"], why: "programmability、AI、operations、TCO" },
    { arena: "Customer Data", companies: ["Twilio Segment", "Salesforce", "Adobe", "Tealium"], why: "data collection、identity、activation、governance" },
  ],
});

const perforceIntelligence = buildIntelligence({
  checkedAt,
  slug: "perforce",
  name: "Perforce Software",
  jobUrl: "https://jobs.lever.co/perforce/9eeec4e8-9bc0-4a07-9ac1-3cbd99236b7d",
  officialUrl: "https://www.perforce.com/company",
  customersUrl: "https://www.perforce.com/customers",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/",
  financeUrl: "https://www.perforce.com/company",
  salesSnapshot: "Perforceはcode、quality、test data、infrastructure automationをportfolioで提供する会社。日本のEnterprise AE - Delphixは、非本番環境のdata provision、masking、complianceをrelease速度とrisk低減のbusiness caseへ変える。",
  growthSummary: "会社表示は20,000超の顧客、1,700超の社員、14拠点、80カ国超、Fortune 100の75%超。2024年にDelphixを買収したが、非公開企業のため売上、ARR、成長率、日本単体の顧客・売上は非公開。",
  ipoSummary: "非公開企業。IPO計画、全社売上、ARR、日本売上は公表されていない。",
  milestones: [
    { year: "1995", label: "創業", detail: "software configuration managementから事業開始。", source: "company" },
    { year: "2015", label: "Delphix日本法人設立", detail: "Delphix Software合同会社の法人番号指定。", source: "company" },
    { year: "2022", label: "Puppet買収", detail: "infrastructure automationをportfolioへ追加。", source: "company" },
    { year: "2024", label: "Delphix買収", detail: "test data management・data complianceをportfolioへ追加。", source: "company" },
    { year: "2026.08", label: "日本Enterprise AE採用", detail: "Japan based RemoteのDelphix営業を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Choice Hotels、DBS、ADP等の公式事例は、production dataを安全に非本番へ届け、database refreshを日・週単位から短縮しながらprivacyと開発速度を両立する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "version control、test automation、infrastructure automationのportfolioへDelphixのtest data managementを加え、codeだけでなくsoftware deliveryに必要なdataをgovernする設計。" },
    { title: "外部環境の要求から見る課題", body: "AI・cloud開発でtest環境とdata copyが増える一方、企業は個人・機密dataの利用目的、access、masking、委託、削除を管理し、release速度とprivacyを同時に説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "開発・test teamがproductionに近いdataを必要とするが、copy作成に時間がかかり、環境ごとに機密dataが増殖する。" },
    { label: "課題", body: "待ち時間はreleaseを遅らせ、manual maskingとcopy管理はprivacy、storage、audit riskを増やす。" },
    { label: "解決策", body: "対象applicationでdata source、masking policy、provisioning、refresh、accessを標準化し、待ち時間、storage、finding、release頻度を測る。" },
    { label: "選定の理由", body: "Broadcom、IBM、Informatica、K2view、cloud-native、script内製との比較で、heterogeneous data、masking、virtualization、self-service、auditを一体化できる場合に選ぶ。" },
  ],
  openingHook: "test dataを依頼してから利用できるまで何日かかり、そのcopyがどこに何個あり、誰が機密情報へaccessできるか説明できますか。",
  valueHypothesis: "data provision lead time、storage、masking coverage、audit finding、environment wait、release frequency、engineer hoursをbaseline比較する。",
  objection: "database snapshot、cloud clone、masking scriptで足りており、専用platformの導入costが大きい。",
  reframe: "copy速度だけでなく、複数database、policy、self-service、audit、storage、release delayを含む3年TCOで比較する。",
  facts: [
    { label: "顧客", value: "20,000社超", detail: "会社公式値。", source: "company" },
    { label: "社員", value: "1,700人超", detail: "会社公式値。", source: "company" },
    { label: "展開", value: "80カ国超・14拠点", detail: "会社公式値。", source: "company" },
    { label: "Fortune 100", value: "75%超", detail: "会社公式の利用比率。", source: "company" },
    { label: "日本法人", value: "Delphix Software合同会社", detail: "法人番号4010403012901。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Enterprise Account Executive - Delphix。", source: "job" },
  ],
  customers: [
    { company: "DBS", products: "Delphix", outcome: "infrastructure provisioningをdaysからminutesへ短縮した公式事例。", implication: "regulated enterpriseで速度とdata controlを両立するproof。" },
    { company: "Choice Hotels", products: "Delphix", outcome: "database refreshを90%高速化した公式事例。", implication: "test data待ちをrelease KPIへ変換できる。" },
    { company: "ADP", products: "Perforce PDX / Delphix", outcome: "development speedとdata privacyを両立した公式事例。", implication: "個人dataを扱う大規模platformでの適用例。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "非本番dataも管理対象", detail: "test・開発用途でも個人dataの目的、安全管理、access、委託、削除を設計する必要がある。", caveat: "個別systemの適法性はdata・契約・用途で異なる。" },
    { label: "AI開発", value: "data供給と統制", detail: "AI・analytics開発は多様なdataを要求し、provisioning速度とmasking・lineageが同時制約になる。", caveat: "tool導入だけでdata品質やmodel riskを解消しない。" },
  ],
  role: "Enterprise Account Executive - Delphixが日本の大手顧客へtest data management、data compliance、DevOpsの複雑商談を進める。",
  organization: "Perforceのglobal portfolio内でDelphixを担当。日本法人と販売partnerは確認できるが、Japan team構成、reporting line、territoryは非公開。",
  careerValue: "DevOps、database、data privacy、Enterprise transformationを横断し、release速度とriskを同じ商談で扱う経験。",
  globalHeadcount: "1,700人超",
  japanPresence: "Delphix Software合同会社・東京都港区。国内partner販売も確認",
  japanSince: "2015年（Delphix法人番号指定）",
  solutions: [
    { name: "Perforce Delphix", valueProp: "test dataをmasking・virtualization・provisioningし、開発へ安全に届ける。", url: "https://www.perforce.com/products/delphix", competitors: "Broadcom、IBM、K2view、cloud-native、内製。", differentiation: "heterogeneous dataとpolicyをself-serviceへ統合。" },
    { name: "Perforce P4", valueProp: "large binaryとcodeを含むdigital assetのversion control・collaborationを提供。", url: "https://www.perforce.com/products/helix-core", competitors: "Git、Git LFS、Plastic SCM、cloud storage。", differentiation: "game・semiconductor等の大規模asset workflow。" },
    { name: "Puppet", valueProp: "infrastructure configuration、compliance、automationをcodeで管理する。", url: "https://www.perforce.com/products/puppet", competitors: "Red Hat Ansible、Chef、Salt、cloud-native。", differentiation: "大規模既存環境のdesired state管理。" },
  ],
  fitTags: ["DevOps", "Test Data Management", "Data Compliance", "Developer Tools", "Enterprise Sales", "Remote", "Japan"],
  comparisons: [
    { arena: "Test Data Management", companies: ["Perforce Delphix", "K2view", "Broadcom", "IBM"], why: "masking、virtualization、data source、self-service" },
    { arena: "DevOps Portfolio", companies: ["Perforce", "GitLab", "Microsoft", "OpenText"], why: "code、quality、data、infrastructure" },
    { arena: "Data Provisioning", companies: ["Delphix", "cloud-native", "database vendor", "内製"], why: "speed、storage、policy、audit、TCO" },
  ],
});

const fusionWorldwideIntelligence = buildIntelligence({
  checkedAt,
  slug: "fusion-worldwide",
  name: "Fusion Worldwide",
  jobUrl: "https://job-boards.greenhouse.io/fusionworldwide/jobs/5079961003",
  officialUrl: "https://www.fusionww.jp/",
  customersUrl: "https://www.fusionww.com/services/inventory-management",
  externalUrl: "https://www.meti.go.jp/policy/economy/economic_security/semicon/",
  financeUrl: "https://www.fusionww.com/services/inventory-management",
  salesSnapshot: "Fusion Worldwideは半導体・電子部品の不足、EOL、余剰在庫、品質riskをglobal sourcingと検査で解く独立系distributor。顧客の課題はline stop、spot価格、counterfeit、過剰在庫、export controlが同時に動くこと。東京のSales Account Executiveは部品単価だけでなく、生産継続、cash、quality、調達resilienceをSupply Chain・Procurement・Engineering・Financeへ広げる。",
  growthSummary: "会社公式は2001年創業、年間売上20億ドル超（約3,140億円、1ドル=157円）、8,500社のsupplier network、20超の拠点、global社員600人超を掲載。日本公式は2021年12月の法人設立、2022年1月のoffice開設、2025年9月時点16人を公表するが、日本売上、顧客数、seller達成率は非公開。",
  ipoSummary: "非公開企業。IPO計画、利益、free cash flow、日本単体の売上は公式に確認できない。",
  milestones: [
    { year: "2001", label: "創業", detail: "電子部品のopen-market sourcingを開始。", source: "company" },
    { year: "2021.12", label: "日本法人設立", detail: "Fusion Trade Japan合同会社を設立。", source: "company" },
    { year: "2022.01", label: "東京office開始", detail: "丸の内にSales & Service Hubを開設。", source: "company" },
    { year: "2025.09", label: "日本16人", detail: "日本公式サイトが東京officeの社員数を掲載。", source: "company" },
    { year: "2026.08", label: "日本Sales AE採用", detail: "東京で新規開拓のSales Account Executiveを確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "OEM、contract manufacturer、IT infrastructure、自動車、industrial automation、medical deviceの顧客は、通常調達で埋まらない短納期・EOL部品を確保し、line stopを避け、余剰在庫をcashへ戻すために独立系distributorを使う。" },
    { title: "製品の成り立ちから見る課題", body: "Fusion Worldwideはcatalog販売ではなく、global supplier network、purchasing、market intelligence、quality lab、inventory programを組み合わせ、scarcityとexcessの両側を扱うoperating modelを作った。" },
    { title: "外部環境の要求から見る課題", body: "AI datacenter需要、地政学、export control、tariff、fab capacity、災害で供給が急変する一方、半導体は経済安全保障上の特定重要物資。Buyerは価格と納期だけでなく、authenticity、traceability、継続供給を説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "製造・IT企業はauthorized channelとforecastを組むが、allocation、EOL、急な需要、余剰で計画と実需がずれる。" },
    { label: "課題", body: "不足は生産停止とexpedite costを、open market調達はcounterfeit・traceability riskを、余剰はcashとwarehouse costを増やす。" },
    { label: "解決策", body: "対象BOMとrisk部品を選び、global sourcing、inspection、lifecycle・market intelligence、inventory programを接続し、line-stop回避、lead time、defect、purchase variance、excess recoveryを測る。" },
    { label: "選定の理由", body: "Arrow、Avnet、Macnica、Mouser、Digi-Key、他のindependent distributor、direct sourcingとの比較で、scarce-part access、quality evidence、speed、commercial flexibility、global executionが必要な場合に選ぶ。" },
  ],
  openingHook: "調達予定どおりに入らない部品が一つ止まった時、line-stop cost、代替source、authenticity、最短納期を何時間で説明できますか。",
  valueHypothesis: "line-stop回避額、lead time、purchase price variance、inspection defect、expedite、excess inventory recovery、supplier response timeをbaseline比較する。",
  objection: "authorized distributorとmanufacturer directで品質と価格を管理でき、independent distributorは高値・counterfeit riskがある。",
  reframe: "平時の単価ではなく、供給途絶時のline-stop、excess write-down、EOL redesign、inspection・traceabilityを含むrisk-adjusted costで比較する。",
  facts: [
    { label: "年間売上", value: "20億ドル超（約3,140億円）", detail: "会社公式のglobal表示。日本売上ではない。1ドル=157円で概算。", source: "finance" },
    { label: "Supplier network", value: "8,500社", detail: "会社公式のglobal値。", source: "company" },
    { label: "拠点", value: "20超", detail: "4大陸・14カ国。", source: "company" },
    { label: "社員", value: "600人超", detail: "日本公式サイトのglobal表示。", source: "company" },
    { label: "東京office", value: "16人", detail: "2025年9月の会社公式表示。gBizINFOの被保険者数とは定義・時点が異なる。", source: "company" },
    { label: "日本対象求人", value: "1件", detail: "Sales Account Executive (Tokyo)。", source: "job" },
  ],
  customers: [
    { company: "OEM・Contract Manufacturer", products: "Sourcing / Quality", outcome: "不足・EOL部品をglobal networkから調達し、検査reportとともに供給する用途。個社名・定量成果は非公開。", implication: "生産継続とquality evidenceを同じ商談で扱う。" },
    { company: "IT infrastructure・Automotive", products: "Market Intelligence / Product Lifecycle", outcome: "需要・供給・価格・lifecycleの変化からscarcityとlast-time buyを判断する用途。", implication: "spot取引をBOM riskと継続調達へ広げる。" },
    { company: "Industrial・Medical device", products: "Inventory Management / Excess Mitigation", outcome: "vendor・customer-owned inventoryを需要と合わせ、余剰を再流通してcashと保管負担を改善する用途。", implication: "不足対応だけでなくworking capitalへ提案を広げる。" },
  ],
  externalSignals: [
    { label: "経済安全保障", value: "半導体は特定重要物資", detail: "経産省は半導体・部素材・原料の安定供給確保を政策対象としている。", caveat: "政策認定が個別supplier・取引の品質や供給を保証するものではない。" },
    { label: "Quality risk", value: "authenticityとtraceability", detail: "open marketではsource qualification、inspection、test、chain of custodyを契約とevidenceで確認する必要がある。", caveat: "inspectionで全てのlatent defectや将来故障を排除できるとは限らない。" },
  ],
  role: "Sales Account Executiveが日本の新規顧客を開拓し、Purchasing・Business Development teamと価格、納期、品質、supplier accessを束ねて受注と長期関係を作る。",
  organization: "東京Sales & Service Hub。日本公式は2025年9月16人、gBizINFOは別時点・別定義の被保険者13人を表示。global Purchasing、Quality、Operationsと連携する。",
  careerValue: "半導体・電子部品、global sourcing、quality、inventory economics、cold outreach、価格交渉を一つのfull-cycle saleで扱う経験。",
  globalHeadcount: "600人超",
  japanPresence: "Fusion Trade Japan合同会社・東京都千代田区丸の内。2021年設立、2022年office開設",
  japanSince: "2021年（法人設立）",
  solutions: [
    { name: "Global Component Sourcing", valueProp: "半導体、memory、CPU、electronic components、finished goodsをglobal supplier networkから調達する。", url: "https://www.fusionww.com/services/sourcing", competitors: "Arrow、Avnet、Macnica、Mouser、Digi-Key、independent distributor。", differentiation: "scarcity時のglobal accessとcommercial speed。" },
    { name: "Quality & Testing", valueProp: "visual・electrical inspection、test、quality reportでopen-market sourcing riskを管理する。", url: "https://www.fusionww.com/quality/process/", competitors: "authorized channel、third-party lab、customer inspection。", differentiation: "sourcingとquality control center・test labを接続。" },
    { name: "Inventory Management", valueProp: "vendor・customer inventoryを需要と合わせ、excess mitigationとproduct lifecycleを支援する。", url: "https://www.fusionww.com/services/inventory-management", competitors: "manufacturer program、3PL、broker、internal inventory team。", differentiation: "scarcity sourcingと余剰再流通を同じnetworkで扱う。" },
  ],
  fitTags: ["Electronic Components", "Semiconductors", "Supply Chain", "Quality", "Enterprise Sales", "Tokyo", "Japan"],
  comparisons: [
    { arena: "Electronic Components Distribution", companies: ["Fusion Worldwide", "Arrow", "Avnet", "Macnica"], why: "access、authorization、quality、price、delivery" },
    { arena: "Spot・Scarcity Sourcing", companies: ["Fusion Worldwide", "independent distributor", "broker", "direct sourcing"], why: "speed、source、inspection、liability、traceability" },
    { arena: "Inventory Optimization", companies: ["Fusion Worldwide", "manufacturer program", "3PL", "internal team"], why: "excess recovery、cash、storage、forecast、risk" },
  ],
});

const deepgramIntelligence = buildIntelligence({
  checkedAt,
  slug: "deepgram",
  name: "Deepgram",
  jobUrl: "https://jobs.ashbyhq.com/Deepgram/3ecb28e4-4ce3-468c-8bf2-e2b3c4a722bf",
  officialUrl: "https://deepgram.com/about",
  customersUrl: "https://deepgram.com/customers",
  externalUrl: "https://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/risk/",
  financeUrl: "https://deepgram.com/learn/press-release-deepgram-raises-series-c",
  salesSnapshot: "Deepgramはreal-timeのspeech-to-text、text-to-speech、Voice Agent APIをcloud・self-hostedで提供する会社。Japan Country Leader求人は、category教育、direct enterprise、partner co-sell、strategic deal、team採用を同時に作る市場立ち上げrole。",
  growthSummary: "2026年1月に1.3億ドルのSeries Cを13億ドル評価で調達。20万超のdeveloper、1,300超のorganization、累計2.15億ドル調達、5万年分のaudio・1兆語のtranscriptionを会社発表。日本法人・常設拠点・国内named customerは未確認。",
  ipoSummary: "非公開企業。IPO時期、日本法人設立、日本向け正式launchは公式に確認できない。",
  milestones: [
    { year: "2015", label: "創業", detail: "dark matter研究のaudio analysisを起点にend-to-end deep learningのspeech platformを開始。", source: "company" },
    { year: "2022", label: "社員100人", detail: "Series B extensionと多言語展開を公式historyに掲載。", source: "company" },
    { year: "2025", label: "Voice Agent API", detail: "real-time voice agent基盤を一般提供。", source: "company" },
    { year: "2026.01", label: "Series C", detail: "1.3億ドルを調達し13億ドル評価。", source: "finance" },
    { year: "2026.08", label: "Japan Country Leader採用", detail: "日本市場のpipeline、ARR、partner、teamを担うroleを確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Twilio、Telnyx、SigmaMind、Fortune 50 pharmacy等の公式情報は、音声をtext化するだけでなく、低latency、interrupt処理、専門語accuracy、containment、call scaleをproduction KPIとして改善する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "音声波形をend-to-end deep learningで扱うSTTからTTS、turn-taking、Voice Agent APIへ広がり、複数model・vendorを継ぎ合わせるreal-time conversation stackを一体化する。" },
    { title: "外部環境の要求から見る課題", body: "人とAI agentの通話が増えるほど、企業は録音・transcriptの個人data、本人への説明、誤認識、latency、human escalation、障害責任を同時に管理する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "contact center、予約、受付、営業で通話量と人件費が増え、AI agentの期待が高まる。" },
    { label: "課題", body: "音声はaccent、専門語、noise、interruptに弱く、遅延や誤認識が一度でも続くとcustomer trustとcontainmentが崩れる。" },
    { label: "解決策", body: "限定use caseでSTT、TTS、agent、human handoffを接続し、accuracy、latency、containment、completion、escalation、costを測る。" },
    { label: "選定の理由", body: "Google、AWS、Microsoft、OpenAI、ElevenLabs、AssemblyAI、通信platformとの比較で、real-time accuracy、turn-taking、deployment choice、unit economicsが合う場合に選ぶ。" },
  ],
  openingHook: "顧客との一往復で何millisecond待たせ、何%を正しく完了し、どの条件で人へ戻すか測れていますか。",
  valueHypothesis: "word・intent accuracy、first-response latency、containment、completion、transfer、call cost、CSAT、incidentをbaseline比較する。",
  objection: "hyperscalerのspeech APIかLLM vendor、既存CCaaSのvoice AIで十分。",
  reframe: "model単価だけでなく、interruptを含むend-to-end latency、専門語accuracy、deployment、concurrency、human handoff、通話完了costで比較する。",
  facts: [
    { label: "Series C", value: "1.3億ドル", detail: "2026年1月。13億ドル評価。", source: "finance" },
    { label: "累計調達", value: "2.15億ドル超", detail: "会社求人表示。", source: "finance" },
    { label: "Developer", value: "20万人超", detail: "会社発表。", source: "company" },
    { label: "Organization", value: "1,300社超", detail: "会社発表。", source: "finance" },
    { label: "処理規模", value: "5万年分・1兆語", detail: "audio処理・transcriptionの会社発表。", source: "finance" },
    { label: "日本対象求人", value: "1件", detail: "Sales Country Leader (Japan)。", source: "job" },
  ],
  customers: [
    { company: "Twilio", products: "Deepgram STT", outcome: "Twilioのorchestration・通信基盤とDeepgramのspeech recognitionを組み合わせる公式説明。", implication: "global CPaaSとのstrategic distribution・integration proof。" },
    { company: "SigmaMind AI", products: "Deepgram Flux", outcome: "月100万call規模のvoice agentでreal-time speechを利用。", implication: "production scaleとlatency制約のproof。" },
    { company: "Fortune 50 retail pharmacy", products: "Deepgram Voice AI", outcome: "1日100万call超、7,000超の拠点、薬局用語で92% recognition accuracyの匿名公式事例。", implication: "regulated・専門語の大規模use case。" },
  ],
  externalSignals: [
    { label: "音声data", value: "個人情報・機密", detail: "録音・transcript・voice agent actionは利用目的、access、retention、委託、越境を確認する必要がある。", caveat: "個別の適法性は用途・契約・noticeで異なる。" },
    { label: "AI agent", value: "human handoffと責任", detail: "誤認識や意図しないactionに備え、monitoring、fallback、本人説明、incident対応が必要。", caveat: "Voice AI導入だけでcustomer outcomeや安全性を保証しない。" },
  ],
  role: "Sales Country Leaderが日本のpipeline・ARR、direct enterprise、SI・ISV・hyperscaler co-sell、strategic deal、AE採用・coachingを担う。",
  organization: "remote-firstのglobal組織。Japan Country Leader求人はあるが、日本法人、常設office、雇用主体、既存team人数は未確認。",
  careerValue: "Voice AIのcategory creation、country P&Lに近い売上責任、partner ecosystem、team buildを0→1で作る経験。",
  globalHeadcount: "非公開",
  japanPresence: "Japan Country Leader求人を確認。日本法人・常設拠点は未確認",
  japanSince: "2026年にJapan Country Leader求人を確認（法人設立年ではない）",
  solutions: [
    { name: "Nova / Flux Speech-to-Text", valueProp: "real-time transcriptionとvoice agent向けturn-taking recognitionを提供。", url: "https://deepgram.com/product/speech-to-text", competitors: "Google、AWS、Microsoft、AssemblyAI。", differentiation: "real-time latency、interrupt、self-hosted option。" },
    { name: "Aura Text-to-Speech", valueProp: "real-time application向け自然音声を生成。", url: "https://deepgram.com/product/text-to-speech", competitors: "ElevenLabs、OpenAI、Google、AWS。", differentiation: "STT・agent runtimeと同じvoice stack。" },
    { name: "Voice Agent API", valueProp: "listen、reason、speakをreal-time orchestrationしてvoice agentを構築。", url: "https://deepgram.com/product/voice-agent-api", competitors: "OpenAI Realtime、Google、CCaaS、内製。", differentiation: "voice-native modelとturn-takingを一体化。" },
  ],
  fitTags: ["日本進出の兆し", "Voice AI", "Speech-to-Text", "Text-to-Speech", "Voice Agents", "Country Leader", "Japan"],
  comparisons: [
    { arena: "Speech AI", companies: ["Deepgram", "Google", "AWS", "Microsoft"], why: "accuracy、latency、language、deployment、cost" },
    { arena: "Voice AI", companies: ["Deepgram", "OpenAI", "ElevenLabs", "AssemblyAI"], why: "STT、TTS、turn-taking、agent runtime" },
    { arena: "Enterprise Voice Agent", companies: ["Deepgram", "CCaaS", "CPaaS", "内製"], why: "orchestration、carrier、handoff、operations" },
  ],
});

const deepgramEntryAssessment: JapanEntryAssessment = {
  verdict: "日本進出の兆しあり。Japan Country Leaderの現行求人を確認したが、日本法人・常設拠点は未確認。",
  factSignals: [
    { title: "Japan Country Leader求人", body: "日本のpipeline・ARR、direct・partner sales、team buildを担う現行求人を確認。", sourceIds: ["deepgram-job"] },
    { title: "既存需要の会社主張", body: "求人は日本でstrong demandがあると説明するが、顧客名・ARR・pipelineの分母は非公開。", sourceIds: ["deepgram-job"] },
    { title: "国際展開の投資余力", body: "Series C 1.3億ドル、1,300社超、20万developerを会社発表。", sourceIds: ["deepgram-finance", "deepgram-company"] },
    { title: "日本語product", body: "Nova-3・Aura-2等で日本語対応を発表しているが、日本語support・契約の同等性は未確認。", sourceIds: ["deepgram-company"] },
  ],
  hurdles: [
    { title: "法人・雇用主体", body: "日本法人、常設office、雇用主体、国内請求・support体制を確認できない。", sourceIds: ["deepgram-job", "deepgram-company"] },
    { title: "国内commercial proof", body: "Japan ARR、qualified pipeline、named customer、renewal、production volumeは非公開。", sourceIds: ["deepgram-job", "deepgram-customers"] },
    { title: "日本語voice品質", body: "業界用語、dialect、noise、interruptを日本のproduction条件で検証する必要がある。", sourceIds: ["deepgram-company", "deepgram-customers"] },
    { title: "local delivery", body: "SI、carrier、CCaaS、security・privacy review、incident supportを日本時間で継続できるかは未確認。", sourceIds: ["deepgram-job", "deepgram-external"] },
  ],
  readinessConditions: [
    { title: "Japan leader採用", body: "求人が採用され、公式に日本責任者とreporting lineが確認できる。" },
    { title: "専任pod", body: "AEだけでなくSE、CS、Partner、Supportを日本時間で提供する。" },
    { title: "国内lighthouse", body: "日本企業のproduction利用、定量成果、renewalを公式事例化する。" },
    { title: "契約・data体制", body: "日本語契約、privacy、security review、incident escalationを整備する。" },
    { title: "法人・拠点", body: "日本法人、登記または公式な常設拠点を確認できる。" },
  ],
  watchSignals: ["Country Leaderの採用・公式発表", "追加のJapan AE・SE・CS求人", "日本法人・Tokyo office", "国内顧客事例", "carrier・SI・CCaaS partner", "日本語support・契約・data region"],
};

deepgramIntelligence.marketStatus.genbaVerdict = {
  headline: "日本進出の兆しあり：Japan Country Leaderを採用中。",
  body: "日本のpipeline・ARR、direct・partner sales、team buildを担う公式求人を確認。一方、日本法人・常設拠点・国内named customerは未確認のため、日本法人がある企業とは分けて継続観測する。",
};
deepgramIntelligence.marketStatus.japanGrowth = {
  headline: "Japan Country Leaderを採用中。法人・常設拠点の確認前にGTMを組成する段階。",
  narrative: "求人は既存需要を日本のrepeatable GTMへ変え、player-coachとしてteamを作る責任を明記する。求人の存在を法人設立・正式進出・国内売上の証明へ置き換えない。",
  qualitativeSignals: [
    { label: "公式採用", detail: "Sales Country Leader (Japan)を2026年8月20日に現行確認。", sourceId: "deepgram-job" },
    { label: "法人・拠点", detail: "日本法人・Tokyo等の常設拠点を公式・公的情報で確認できない。", sourceId: "deepgram-company" },
    { label: "市場signal", detail: "求人はstrong demandを示すが、日本顧客数・ARR・pipelineは非公開。", sourceId: "deepgram-job" },
  ],
  entryAssessment: deepgramEntryAssessment,
  sourceIds: ["deepgram-job", "deepgram-company", "deepgram-finance", "deepgram-customers", "deepgram-external"],
};
deepgramIntelligence.companyStats.japanHeadcount = { value: "確認できず", detail: "日本法人・雇用主体・Japan team人数は未確認。", sourceId: "deepgram-job" };
deepgramIntelligence.companyStats.japanOffice = { value: "常設オフィス未確認", detail: "日本勤務地の求人は常設officeの証明へ置き換えない。", sourceId: "deepgram-job" };

export const daily20260820IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  twilio: twilioIntelligence,
  perforce: perforceIntelligence,
  "fusion-worldwide": fusionWorldwideIntelligence,
  deepgram: deepgramIntelligence,
};

export function applyDaily20260820Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const extreme = intelligenceBySlug["extreme-networks"];
  if (!extreme) return;
  const sourceId = "extreme-networks-job-closure-20260820";
  if (!extreme.sources.some((source) => source.id === sourceId)) {
    extreme.sources.push({
      id: sourceId,
      label: "Extreme Networks Careers（掲載終了確認）",
      url: "https://jobs.lever.co/extremenetworks/a7e470eb-5893-40ee-a2e8-8454b1ff701c",
      kind: "企業公式",
      scope: "Sr. Services Sales Account Executive・公式URL 404",
      checkedAt,
    });
  }
  extreme.researchedAt = checkedAt;
  extreme.salesSnapshot = "Extreme Networksはnetwork infrastructureとcloud managementを提供する会社。前日まで確認していた東京のSr. Services Sales Account Executive求人は2026年8月20日に公式URLが404となったため、現在の応募可能求人から除外した。";
  if (!extreme.marketStatus.milestones.some((item) => item.sourceId === sourceId)) {
    extreme.marketStatus.milestones.push({ year: "2026.08.20", label: "日本Services Sales求人終了", detail: "公式求人URLが404となったため公開求人から除外。採用停止や日本事業縮小までは意味しない。", sourceId });
  }
}
