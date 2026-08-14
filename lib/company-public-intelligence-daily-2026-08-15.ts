import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-15";

const profiles: Profile[] = [
  {
    checkedAt, slug: "stripe", name: "Stripe", jobUrl: "https://stripe.com/careers/listing/account-executive-commercial-hunter-japanese-fluency/7789539", officialUrl: "https://stripe.com/jp", customersUrl: "https://stripe.com/jp/customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/statistics/outlook/ie_outlook.html", financeUrl: "https://stripe.com/annual-updates/2025",
    salesSnapshot: "Stripeは、Digital・Finance・Product・ITが抱える決済承認率、不正、請求、越境展開の課題をpaymentsからfinancial platformまでのAPIで解く会社。TokyoでCommercial Hunter、Commercial Grower、Enterprise Hunterを募集し、新規獲得と既存拡張をroleで分ける。決済の置換からBilling、Connect、Tax、Radarへ広げ、企業の収益基盤へ入る営業が面白い。",
    growthSummary: "Stripeは2025 annual updateでinternet上の広い事業基盤とpayments以外のproduct expansionを継続公開。非公開企業のため、日本売上とsegment別ARRは非公開。", ipoSummary: "非公開企業。IPO時期と日本単体の財務は公表されていない。",
    milestones: [{ year: "2010", label: "創業", detail: "developer-firstのonline payments APIを構築。", source: "company" }, { year: "2010年代", label: "global expansion", detail: "決済手段と対応地域を拡大。", source: "company" }, { year: "2020年代", label: "financial platform化", detail: "Billing、Connect、Tax、Issuing、Treasury等へ拡張。", source: "company" }, { year: "2025", label: "annual update", detail: "AI・global commerce・financial servicesの成長を公開。", source: "finance" }, { year: "2026.08", label: "Japan sales採用", detail: "Tokyoの複数AE求人を確認。", source: "job" }],
    issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "公式事例は、決済導入だけでなく、global expansion、subscription、platform payout、fraud、finance operationを一つの収益基盤で変える目的を示す。" }, { title: "製品の成り立ちから見る課題", body: "developerが数行でpaymentsを組み込むAPIから始まり、決済の周囲で事業者が自前で抱えるbilling、tax、risk、payoutへ責任範囲を広げた。" }, { title: "外部環境の要求から見る課題", body: "commerceの越境化、subscription化、marketplace化、AI agent経由の購買により、企業は決済率・不正・税・規制・会計を同時に説明しながら新市場へ速く出る要求がある。" }],
    narrative: [{ label: "背景", body: "企業は国・channel・product・課金モデルを増やしている。" }, { label: "課題", body: "決済、fraud、billing、tax、payout、reportingが分断し、売上取得の速度と統制の両方が落ちる。" }, { label: "解決策", body: "優先use caseを1つ選び、authorization、conversion、fraud、reconciliation、launch time、unit economicsを共通指標で再設計する。" }, { label: "選定の理由", body: "Adyen、PayPal/Braintree、国内PSP、複数vendor内製と比べ、API、global coverage、product breadth、developer speed、total operating costが合う場合に選ばれる。" }],
    openingHook: "新しい国・課金モデル・platformを立ち上げるたび、何カ月と何vendorの追加が必要ですか。", valueHypothesis: "authorization率、conversion、fraud loss、checkout completion、reconciliation time、new-market launch time、payment costを測る。", objection: "国内PSPと銀行、既存gatewayで十分。", reframe: "現在の手数料だけでなく、次の国・商材・課金モデルを追加する時間、売上取りこぼし、開発・経理・リスク運用のTCOで比較する。",
    facts: [{ label: "創業", value: "2010年", detail: "payments infrastructureから開始。" }, { label: "日本拠点", value: "Tokyo", detail: "Stripe JapanとTokyo求人を確認。", source: "job" }, { label: "製品", value: "Payments + Financial Platform", detail: "Billing、Connect、Tax、Radar等へ拡張。" }, { label: "GTM", value: "Hunter / Grower", detail: "Commercialの新規・拡張とEnterprise Hunterで分業。", source: "job" }, { label: "公式OTE", value: "1,720万〜2,580万円", detail: "確認したTokyoの3求人で共通。", source: "job" }, { label: "現行求人", value: "3件", detail: "Commercial Hunter・Grower、Enterprise Hunter。", source: "job" }],
    customers: [{ company: "Amazon", products: "Stripe platform", outcome: "global payments infrastructureの顧客事例として公開。", implication: "Enterprise scaleの複雑性に対するproof。" }, { company: "Shopify", products: "Stripe infrastructure", outcome: "platform commerceとseller paymentsの長期連携事例。", implication: "platform buyerのmulti-party paymentを話せる。" }, { company: "OpenAI", products: "Payments / Billing", outcome: "AI productのmonetizationを支える公式事例。", implication: "高成長digital businessのcategory proof。" }],
    externalSignals: [{ label: "越境EC", value: "国・通貨・決済手段", detail: "電子商取引の拡大は決済と税・不正・現地化を同時課題にする。", caveat: "市場成長はStripeの個別成果を保証しない。" }, { label: "platform economy", value: "multi-party money movement", detail: "marketplaceとSaaS platformの増加でonboarding、KYC、split payout、reportingが事業設計になる。", caveat: "必要な許認・契約は事業ごとに異なる。" }],
    role: "Commercial Hunterは新規と既存拡張、Commercial Growerは既存顧客成長、Enterprise Hunterは大規模new logoを担う。", organization: "Engineering、Product、Finance、Partners、Post-Sales等を案件ごとに束ねるmatrix GTM。", careerValue: "Payments、FinTech、API platform、global commerce、Enterprise transformationを横断する経験。", globalHeadcount: "5,001〜10,000人規模", japanPresence: "Stripe Japan / Tokyo、日本語製品・国内事例・3つの営業求人", japanSince: "日本市場で継続展開",
    solutions: [{ name: "Stripe Payments", valueProp: "online・対面の決済受付と最適化。", url: "https://stripe.com/jp/payments", competitors: "Adyen、PayPal/Braintree、国内PSP。", differentiation: "API、global payment methods、optimization、product integration。" }, { name: "Stripe Billing", valueProp: "subscription・usage-based billingとrevenue workflowを管理。", url: "https://stripe.com/jp/billing", competitors: "Zuora、Chargebee、ERP・内製。", differentiation: "paymentsとbilling・tax・revenue dataの連続性。" }, { name: "Stripe Connect", valueProp: "platformのonboarding、money movement、payoutを構築。", url: "https://stripe.com/jp/connect", competitors: "Adyen for Platforms、PayPal、銀行・内製。", differentiation: "global compliance operationとprogrammable platform model。" }],
    fitTags: ["アンカー企業", "Payments", "FinTech", "Enterprise", "API", "Platform", "Japan"], comparisons: [{ arena: "Global Payments", companies: ["Stripe", "Adyen", "PayPal/Braintree"], why: "coverage、authorization、API、手数料、operation" }, { arena: "Billing", companies: ["Stripe Billing", "Zuora", "Chargebee"], why: "pricing flexibility、revenue workflow、integration" }, { arena: "Platform Payments", companies: ["Stripe Connect", "Adyen for Platforms", "内製"], why: "onboarding、compliance、payout、global expansion" }],
  },
  {
    checkedAt, slug: "aghanim", name: "Aghanim", jobUrl: "https://jobs.ashbyhq.com/aghanim/0b7e0d14-4741-4439-bdba-67dca40af857", officialUrl: "https://aghanim.com/", customersUrl: "https://aghanim.com/", externalUrl: "https://www.meti.go.jp/policy/mono_info_service/contents/downloadfiles/report/game_202503.pdf", financeUrl: "https://aghanim.com/",
    salesSnapshot: "Aghanimは、mobile game studioが抱えるapp store依存、player dataの分断、margin、loyaltyの課題をGame Hub、Merchant of Record、LiveOpsで解く会社。Head of BD Japanがstudio・partner・key account開拓、pipeline、market strategy、revenue growthを持つ。checkoutだけでなくplayer relationshipへ提案を広げる営業が面白い。",
    growthSummary: "非公開企業。公式求人で日本のmarket expansionとrevenue ownershipを確認できるが、ARR、顧客数、日本売上は非公開。", ipoSummary: "非公開企業。IPOと日本法人の詳細は未確認。",
    milestones: [{ year: "2023", label: "創業", detail: "mobile gaming D2C基盤を開発。", source: "company" }, { year: "2024", label: "platform拡張", detail: "web shop、payments、loyalty、communityを統合。", source: "company" }, { year: "2025", label: "studio adoption", detail: "game studio向けcommercial deploymentを拡大。", source: "company" }, { year: "2026", label: "Japan expansion", detail: "日本のGTMとrevenue責任者を募集。", source: "job" }, { year: "2026.08", label: "Head of BD Japan", detail: "remote Japanの現行公式求人を確認。", source: "job" }],
    issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "studioがweb shopを作る目的は、単なる手数料削減ではなく、playerとの直接接点、offer実験、loyalty、community、lifetime valueを自社で改善すること。" }, { title: "製品の成り立ちから見る課題", body: "mobile gameのD2Cを個別開発するとpayments、catalog、fraud、CRM、live opsが分断するため、専用platformとmanaged operationに束ねる設計。" }, { title: "外部環境の要求から見る課題", body: "mobile gameのacquisition costとplatform ruleの変化は、studioに収益性とplayer relationshipの説明責任を生み、store外導線のcompliance、conversion、retentionを事業投資として測る要求になる。" }],
    narrative: [{ label: "背景", body: "studioはapp storeに販売・決済・player接点を強く依存している。" }, { label: "課題", body: "marginとplayer dataが制約され、offer実験、loyalty、cross-title relationshipが蓄積しない。" }, { label: "解決策", body: "優先titleでweb shop、payments、catalog、CRMを導入し、migration、conversion、AOV、repeat、marginを測る。" }, { label: "選定の理由", body: "Xsolla、Coda Payments、決済事業者+内製と比べ、gaming-specific operation、立ち上げ速度、player experience、運用支援が合う場合に選ばれる。" }],
    openingHook: "現在のplayer売上のうち、自社が関係・購買data・次のofferを直接管理できる比率はどれくらいですか。", valueHypothesis: "web shop adoption、conversion、AOV、repeat rate、payment success、fraud、net revenue、live-ops cycleを測る。", objection: "自社開発か決済事業者のcheckoutで十分。", reframe: "checkout開発費だけでなく、catalog、promotion、player identity、loyalty、fraud、supportを継続運用するTCOとnet revenueで比較する。",
    facts: [{ label: "対象", value: "mobile game studios", detail: "D2C commerceとplayer relationshipを提供。" }, { label: "製品", value: "Game Hub / Merchant of Record", detail: "LiveOps、loyalty、communityも統合。" }, { label: "Japan role", value: "Head of BD", detail: "market strategyからrevenueまで担当。", source: "job" }, { label: "勤務条件", value: "Japan remote / full-time", detail: "日本語・英語fluent、5年以上を明記。", source: "job" }, { label: "固有顧客KPI", value: "未確認", detail: "公開情報では十分に検証できない。", source: "customers" }, { label: "現行求人", value: "1件", detail: "Head of BD Japan。", source: "job" }],
    customers: [],
    externalSignals: [{ label: "日本のgame産業", value: "global IPとmobile運用", detail: "経産省の関連資料は、ゲーム産業の海外展開と競争力を重要テーマとして扱う。", caveat: "Aghanimの個別導入を支持する資料ではない。" }, { label: "platform policy", value: "D2Cの機会と統制", detail: "store外販売の機会が増えるほど、規約、年齢、返金、tax、fraud、supportの運用責任が増える。", caveat: "国・platform・titleごとに条件が異なる。" }],
    role: "Head of BD Japanがmarket strategy、studio・partner・key account開拓、pipeline、close、retention・expansionをend-to-endで持つ。", organization: "global leadershipと連携して日本GTMを作る役割。日本の正確なteam構成・reporting lineは非公開。", careerValue: "Gaming、Payments、D2C Commerce、Country Build、partner ecosystemを横断する経験。", globalHeadcount: "51〜200人規模", japanPresence: "Head of BD Japanのremote・full-time求人を確認。日本法人・オフィスは未確認。", japanSince: "2026年にJapan expansion roleを確認",
    solutions: [{ name: "Game Hub", valueProp: "mobile gameのD2C catalog・checkout・offer・communityを運用。", url: "https://aghanim.com/", competitors: "Xsolla、Coda型web store、内製Game Hub。", differentiation: "gaming-specific commerceとLiveOpsの一体運用。" }, { name: "Billing Engine / Merchant of Record", valueProp: "決済、税、fraud、chargeback、返金、payment supportを運用。", url: "https://aghanim.com/", competitors: "gaming MoR、PSP＋税・risk・support内製。", differentiation: "Adyen等を処理partnerとして使い、gaming commerce operationを束ねる。" }],
    fitTags: ["Gaming", "Payments", "D2C", "Founding GTM", "Business Development", "Japan"], comparisons: [{ arena: "Gaming Web Shop", companies: ["Aghanim", "Xsolla", "Coda Payments"], why: "launch speed、payment coverage、managed operation、player UX" }, { arena: "Build vs Buy", companies: ["Aghanim", "PSP+内製", "publisher内製"], why: "TCO、control、data、live ops" }, { arena: "Japan entry", companies: ["Aghanim", "global coverage", "local partner"], why: "studio proof、support、commercial model" }],
  },
];

const built = Object.fromEntries(profiles.map((profile) => [profile.slug, buildIntelligence(profile)])) as Record<string, CompanyPublicIntelligence>;

// Primerは日本未進出。通常企業用builderの「local team確認済み」という既定文を使わず、
// 未進出企業向けの事実・障壁・成立条件・観測シグナルに統一する。
built.primer = buildPreEntryIntelligence({
  checkedAt,
  slug: "primer",
  name: "Primer",
  homepage: "https://primer.io/",
  growthUrl: "https://primer.io/blog/series-c",
  careersUrl: "https://jobs.ashbyhq.com/primer.io",
  customersUrl: "https://primer.io/customers",
  trustUrl: "https://primer.io/blog/primer-infrastructure-security",
  apacUrl: "https://www.primer.io/blog/primer-appoints-urvashi-gupta",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/statistics/outlook/ie_outlook.html",
  linkedinUrl: "https://www.linkedin.com/company/primerapi/",
  salesSnapshot: "Primerは、Payments・Finance・Product・Engineeringが抱えるPSP分断、決済失敗、routing、reconciliationの課題をUnified Payments Infrastructureで解く会社。Singaporeを含むAPAC体制は拡大しているが、Japan法人・専任求人・国内顧客事例は未確認。1億ドルSeries Cと定量顧客成果を進出余力、日本固有のconnector・言語・deliveryを成立条件として分けて観測する。",
  growthSummary: "2026年に1億ドルのSeries Cを調達。公式発表では2024年に200% YoY成長し、年間数十億件を処理、顧客の総決済額の95%以上を扱う。非公開企業のためARR・Japan売上は未公表。",
  verdict: "進出可能性は低〜中。APAC投資と資本余力はあるが、Japan固有のcommercial・product・delivery proofが不足",
  entryNarrative: "Primerは1億ドルSeries C、2024年200% YoY成長、Singaporeを軸にしたAPAC組織、APAC顧客の定量成果を持つ。一方、現行APAC AE求人はSingapore勤務でMandarin・Englishを必須とし、Japan担当を示さない。日本法人、Tokyo求人、日本顧客事例、日本語UI・support、国内PSP・決済手段のproduction connectorを確認できないため、地域成長を日本進出決定と解釈しない。",
  headcount: "51〜200人規模",
  headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。",
  apacPresence: "SingaporeにHead of APACを置き、2025年以降に東南アジア・豪州で5人を追加。APAC AEとSingaporeのCustomer Successも確認できる。",
  productLanguage: "公式APAC解説はPayPay・konbiniを日本の主要手段として扱うが、日本語UI・資料・supportと各connectorのproduction提供条件は未確認。",
  milestones: [
    { year: "2020", label: "創業", detail: "PayPal・Braintree出身の創業者がpayments integrationの分断解消を目指して創業。", source: "company" },
    { year: "2021", label: "Series B", detail: "5,000万ドルを調達し、初のEnterprise顧客を獲得。", source: "company" },
    { year: "2024", label: "200% YoY成長", detail: "会社公式Aboutで年間成長を公表し、APACを深耕。", source: "growth" },
    { year: "2026", label: "Series C", detail: "Sofina主導で1億ドルを調達。", source: "growth" },
    { year: "2026", label: "APAC組織拡大", detail: "Singapore拠点のHead of APACと地域採用を発表。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Ferryhopper、Dabble、Zingの公式事例は、PSP追加そのものではなく、承認率、失敗決済の回収、障害耐性、非技術部門の制御を事業KPIとして改善する目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "providerごとのintegration、routing、error処理、dataをsingle integrationとworkflowへ切り離し、merchantがPSPを固定せず変更できる制御層として設計された。" },
    { title: "外部環境の要求から見る課題", body: "越境commerceとAPAC各国のlocal paymentは、決済手段・通貨・規制・不正・障害を増やす。Buyerは一社のPSPだけでなく、performanceとresilienceを継続的に説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "global merchantは国・通貨・payment methodごとに複数PSPとrisk toolを使う。" },
    { label: "課題", body: "接続が個別実装となり、routing、recovery、可視化、provider変更が遅く、決済失敗が売上損失になる。" },
    { label: "解決策", body: "一つのpayment flowで複数providerを接続し、authorization、recovery、latency、cost、operator timeを同じ基盤で比較・改善する。" },
    { label: "選定の理由", body: "Spreedly、Gr4vy、PSP-native orchestration、内製と比べ、provider neutrality、workflow control、observability、integration speedが投資対効果に合う場合に選ばれる。" },
  ],
  openingHook: "主要PSPが落ちた時、何分で別routeへ切り替え、失敗決済と売上影響を回収・説明できますか。",
  valueHypothesis: "authorization、payment recovery、routing uplift、provider integration time、downtime、fraud、operator hours、payment costを測る。",
  objection: "主要PSPの機能か内製routingで十分。",
  reframe: "provider数ではなく、次の国・決済手段を追加する時間、outage、失敗決済、lock-in、運用工数を含むTCOで比較する。",
  facts: [
    { label: "Series C", value: "1億ドル", detail: "2026年、Sofina主導。", source: "growth" },
    { label: "成長", value: "200% YoY", detail: "2024年の会社発表値。", source: "growth" },
    { label: "処理規模", value: "年間数十億件", detail: "顧客TPVの95%以上、取引あたり400超のdata pointを扱うと会社発表。", source: "growth" },
    { label: "APAC", value: "Singapore中心", detail: "Head of APACと地域teamを拡大。", source: "apac" },
    { label: "APAC求人", value: "Singapore / Mandarin・English", detail: "Japan担当を示す求人ではない。", source: "careers" },
    { label: "Japan求人", value: "未確認", detail: "Japan・Tokyo勤務地または担当市場の求人を確認できず。", source: "careers" },
  ],
  customers: [
    { company: "Ferryhopper", products: "Workflows / Fallbacks", outcome: "取引量47%増、1カ月で€3.4Mを回収、承認率を2ポイント改善。", implication: "routing・recoveryを売上KPIへ結びつける定量proof。" },
    { company: "Dabble", products: "Payments orchestration", outcome: "承認率96%、retry対象の23%を回収。", implication: "peak trafficとAPAC supportを含むregional proof。" },
    { company: "Zing", products: "Fallbacks", outcome: "失敗決済の20%を回収。", implication: "payment failureを回収可能な売上として扱う。" },
  ],
  externalSignals: [
    { label: "APAC payment fragmentation", value: "local method・通貨・規制", detail: "国別の決済手段とprovider差が、複数接続と継続最適化の要求を生む。", caveat: "APAC需要はPrimerの日本進出や国内適合を直接示さない。" },
    { label: "payment resilience", value: "single-provider risk", detail: "paymentsが売上基盤になるほど、outage、performance、provider concentrationの説明責任が増える。", caveat: "multi-PSPは取引量・運用能力によってはTCOが上回る。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は低〜中。APAC投資と資本余力はあるが、Japan固有のcommercial・product・delivery proofが不足",
    factSignals: [
      { title: "成長と資本余力", body: "1億ドルSeries C、2024年200% YoY、年間数十億件処理はcountry expansionを検討できる規模。", sourceIds: ["primer-growth"] },
      { title: "APAC組織を拡大", body: "SingaporeにHead of APACを置き、東南アジア・豪州の採用とCustomer Successを増強。", sourceIds: ["primer-apac", "primer-careers"] },
      { title: "APAC customer proof", body: "Dabble等で承認率・recoveryの定量成果があり、地域のpayment complexityへの適合を確認できる。", sourceIds: ["primer-customers"] },
      { title: "Japan課題とのカテゴリ親和", body: "日本の越境commerceにもlocal payment、provider管理、resilienceの課題は存在する。", sourceIds: ["primer-company", "primer-external"] },
    ],
    hurdles: [
      { title: "Japan commercial proof不足", body: "Japan ARR、有償顧客、renewal、pipeline、国内利用volumeを確認できない。", sourceIds: ["primer-customers", "primer-careers"] },
      { title: "APAC求人はJapan担当ではない", body: "現行AEはSingapore勤務でMandarin・English必須。日本語・Japan territoryを示さない。", sourceIds: ["primer-careers"] },
      { title: "local connector・運用", body: "国内PSP・決済手段のproduction条件、返金・会計・incident運用が未確認。", sourceIds: ["primer-company", "primer-external"] },
      { title: "language・delivery gap", body: "日本語UI、documentation、契約・security資料、support、国内SE・CS・partnerが未確認。", sourceIds: ["primer-company", "primer-trust"] },
    ],
    readinessConditions: [
      { title: "Japan paid cohort", body: "複数の日本Enterpriseでproduction volume、renewal、routing upliftを確認する。" },
      { title: "local connector coverage", body: "国内PSP・payment method・fraud・会計へのproduction対応を公開する。" },
      { title: "Japan-ready operation", body: "日本語、契約、security、support、incident responseを日本時間で運用する。" },
      { title: "local GTM pod", body: "AE、Solution、CS、PartnerをJapan territoryへ専任化する。" },
      { title: "repeatable economics", body: "ACV、sales cycle、implementation負荷、retentionがlocal固定費を正当化する。" },
    ],
    watchSignals: ["Japan・Tokyo専任求人", "日本語site・documentation", "国内顧客の定量事例", "国内PSP・partner連携", "Tokyo拠点・日本法人", "Japan time support・incident体制"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "SingaporeのAPAC teamがPayments・Finance・Product・Engineeringへtechnical proofで入り、承認率・recovery・resilienceをbusiness case化するEnterprise sale。現行AE求人はJapan担当を示さない。",
  careerValue: "Payments orchestration、Enterprise FinTech、APAC market development、multi-provider architectureを横断する可能性。Japan roleは未発表。",
  leader: { name: "Gabriel Le Roux", role: "Co-founder / CEO", read: "PayPal・Braintreeでのpayments経験を起点に、provider-neutralな制御層とintelligent paymentsへ製品を拡張。" },
  solutions: [
    { name: "Universal Checkout", valueProp: "複数PSP・payment methodを一つのcheckoutへ統合。", url: "https://primer.io/products/universal-checkout", competitors: "PSP-native checkout、自社checkout。", differentiation: "provider-neutralなcheckoutとpayment workflowの連続性。" },
    { name: "Payments Orchestration", valueProp: "routing、fallback、recovery、fraudをworkflow化。", url: "https://primer.io/products/payments", competitors: "Spreedly、Gr4vy、PSP-native routing、内製。", differentiation: "no-code制御、広い接続、transaction dataの一元化。" },
    { name: "Observability", valueProp: "transaction performanceとprovider差を可視化。", url: "https://primer.io/products", competitors: "PSP dashboard、BI内製、payment analytics。", differentiation: "orchestrationと同じdata layerで原因分析から改善まで回す。" },
  ],
  fitTags: ["日本未進出", "Payments", "Orchestration", "FinTech", "Enterprise", "Singapore", "APAC"],
  comparisons: [
    { arena: "Payment Orchestration", companies: ["Primer", "Spreedly", "Gr4vy"], why: "connector、workflow、observability、cost" },
    { arena: "PSP-native / Build", companies: ["Primer", "Stripe・Adyen", "内製"], why: "neutrality、optimization、stack complexity、TCO" },
    { arena: "Japan readiness", companies: ["Primer", "APAC regional coverage", "国内PSP・partner"], why: "Japan customer proof、connector、language、support" },
  ],
});

const addSource = (slug: "stripe" | "aghanim" | "primer", source: CompanyPublicIntelligence["sources"][number]) => {
  built[slug].sources.push(source);
};

// Stripe: 現行求人、成長数値、日本の定量事例へ根拠を細分化する。
addSource("stripe", { id: "stripe-linkedin", label: "Stripe LinkedIn企業ページ", url: "https://www.linkedin.com/company/stripe/", kind: "外部集計", scope: "グローバル会社規模・Tokyo拠点", checkedAt });
addSource("stripe", { id: "stripe-enterprise-hunter", label: "Stripe Enterprise Hunter, Japan", url: "https://stripe.com/careers/listing/account-executive-enterprise-hunter-japanese-fluency/7528816", kind: "企業公式", scope: "Enterprise職務・OTE・勤務方針・経験要件", checkedAt });
addSource("stripe", { id: "stripe-commercial-grower", label: "Stripe Commercial Grower, Japan", url: "https://stripe.com/careers/listing/account-executive-commercial-grower-japanese-fluency/8042978", kind: "企業公式", scope: "既存顧客拡張・OTE・勤務方針", checkedAt });
addSource("stripe", { id: "stripe-dena", label: "Stripe × DeNA", url: "https://stripe.com/jp/customers/dena", kind: "企業公式", scope: "日本顧客の承認率・問い合わせ成果", checkedAt });
addSource("stripe", { id: "stripe-tential", label: "Stripe × TENTIAL", url: "https://stripe.com/jp/customers/tential", kind: "企業公式", scope: "決済成功率・不正取引block", checkedAt });
addSource("stripe", { id: "stripe-inforich", label: "Stripe × INFORICH", url: "https://stripe.com/jp/customers/inforich", kind: "企業公式", scope: "日本発サービスの決済基盤", checkedAt });
built.stripe.marketStatus.growthSummary = "Stripe上の事業者は2025年に1.9兆ドルを処理し、前年比34%増。500万超の事業者へ直接またはplatform経由で提供し、Revenue suiteは年換算10億ドル規模へ到達見込みと会社発表。";
built.stripe.marketStatus.genbaVerdict = { headline: "global scaleと日本の定量proofは強い。role別territoryとquotaの確認が判断点", body: "1.9兆ドルの処理規模、Payments以外のproduct expansion、日本顧客の定量成果、Tokyoの3つのAE求人を確認。一方、日本ARR、role別quota、ramped達成率、担当portfolioは非公開。HunterとGrowerを分けて評価する必要がある。" };
if (built.stripe.marketStatus.growthDrivers) {
  built.stripe.marketStatus.growthDrivers[2] = { title: "Tokyoのrole別GTM", body: "Commercial Hunter・Grower、Enterprise Hunterの3求人を確認。新規獲得と既存拡張を分け、日英両言語で顧客・社内の複数部門を束ねる。", sourceId: "stripe-job" };
}
built.stripe.customerProof = [
  { company: "DeNA", products: "Stripe Payments", outcome: "決済承認率を10%改善し、決済関連の問い合わせを80%削減。", implication: "日本の大規模digital serviceでconversionと運用負荷を同時に改善。", sourceId: "stripe-dena" },
  { company: "TENTIAL", products: "Stripe Payments / Radar", outcome: "決済成功率98〜99%を維持し、6カ月で約2億円の不正取引をblock。", implication: "成長ECで売上取得とrisk controlを同じ基盤で測れる。", sourceId: "stripe-tential" },
  { company: "INFORICH", products: "Stripe platform", outcome: "ChargeSPOTの日本発サービスで決済基盤の事例を公開。", implication: "国内起点のservice expansionを支えるJapan reference。", sourceId: "stripe-inforich" },
];
built.stripe.facts = built.stripe.facts.map((fact) => fact.label === "公式OTE" || fact.label === "現行求人" ? { ...fact, sourceIds: ["stripe-job", "stripe-enterprise-hunter", "stripe-commercial-grower"] } : fact);
built.stripe.roleLens.salesMotion = "Commercial Hunterは新規獲得と既存user拡張、Commercial Growerは既存顧客の利用・product拡大、Enterprise Hunterは大規模new logoを主導する。";
built.stripe.roleLens.compensation = "確認したTokyoの3求人はいずれも公式OTEが年額1,720万〜2,580万円。pay mix、quota、accelerator、equity、ramp保証は未確認。";
built.stripe.roleLens.quota = "公式OTEは確認済みだが、role別quota、ramped seller達成率、ACV、cycle、pipeline coverage、usage・expansion creditは非公開。";
const stripeCompensationHypothesis = built.stripe.hypotheses.find((item) => item.topic === "COMPENSATION");
if (stripeCompensationHypothesis) {
  stripeCompensationHypothesis.title = "OTEは公開、quotaとcredit ruleは非公開";
  stripeCompensationHypothesis.conclusion = "Tokyoの3求人でOTE年額1,720万〜2,580万円を確認。pay mix、quota、accelerator、equity、ramp保証、HunterとGrowerのcredit ruleは未確認。";
  stripeCompensationHypothesis.evidence = ["3つの現行公式求人に同一のOTE rangeを掲載"];
  stripeCompensationHypothesis.sourceIds = ["stripe-job", "stripe-enterprise-hunter", "stripe-commercial-grower"];
}
built.stripe.companyStats.globalHeadcount = { value: "5,001〜10,000人規模", detail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。", sourceId: "stripe-linkedin" };
built.stripe.solutions = built.stripe.solutions.map((solution) => ({
  ...solution,
  feature: solution.name === "Stripe Payments" ? "online・対面決済、payment method、authorization optimization、Radar。" : solution.name === "Stripe Billing" ? "subscription・usage-based billing、invoice、revenue workflow。" : "connected account onboarding、money movement、split payout。",
  advantage: solution.differentiation,
  benefit: solution.name === "Stripe Payments" ? "承認率・決済成功率を高めながら不正と決済運用を抑える。" : solution.name === "Stripe Billing" ? "pricing変更とrecurring revenue operationをpayments・tax dataへつなぐ。" : "platformがglobal seller・service providerへの資金移動をprogram可能にする。",
  evidence: solution.name === "Stripe Payments" ? "DeNAは承認率10%改善・問い合わせ80%減、TENTIALは決済成功率98〜99%を公開。" : "公式製品情報と顧客事例。日本の製品別継続率は非公開。",
  competitor: solution.competitors,
}));
built.stripe.salesSnapshotFabe = "Digital・Finance・Product・IT部門に対し、「決済承認率と売上取りこぼしを改善できない」「請求・税・不正・入金管理が分断する」「国・課金モデル・platformの追加に時間がかかる」という課題を解決する。主力製品は、Payments、Billing、Connect、Tax、Radarを共通dataとAPIで提供するFinancial Infrastructure Platformである。競合優位性は、決済受付から請求・platform payout・riskまでを分断せず、国や課金モデルを追加できる点にある。顧客への一番のメリットは、承認率・決済成功率・launch timeを改善しながら、不正と開発・経理の運用負荷を下げられることにある。";
built.stripe.salesSnapshotFabeExpanded = "成果は、authorization、conversion、fraud loss、reconciliation time、new-market launch time、payment costで測る。公開根拠として、DeNAは承認率10%改善・問い合わせ80%減、TENTIALは決済成功率98〜99%・6カ月で約2億円の不正取引blockを公表している。日本市場では、PayPay対応とTerminal展開、TokyoのHunter・Grower求人を確認できる一方、role別quota・達成率・担当portfolioは非公開である。";

// Aghanim: 求人の明記事項、MoRの位置づけ、公開できる顧客proofの限界を反映する。
const aghanimCustomerSource = built.aghanim.sources.find((source) => source.id === "aghanim-customers");
if (aghanimCustomerSource) {
  aghanimCustomerSource.label = "Aghanim 製品・会社情報";
  aghanimCustomerSource.scope = "製品価値・会社による成果claim（固有顧客事例ではない）";
}
addSource("aghanim", { id: "aghanim-linkedin", label: "Aghanim LinkedIn企業ページ", url: "https://www.linkedin.com/company/aghanim/", kind: "外部集計", scope: "会社規模レンジ・会社公式投稿", checkedAt });
addSource("aghanim", { id: "aghanim-docs", label: "Aghanim Docs", url: "https://docs.aghanim.com/", kind: "企業公式", scope: "Checkout・MoR・Game Hub・LiveOpsの実装範囲", checkedAt });
addSource("aghanim", { id: "aghanim-adyen", label: "AghanimとAdyenの戦略提携", url: "https://blog.aghanim.com/aghanim-and-adyen-form-strategic-partnership-to-power-direct-to-consumer-payments-for-mobile-games-ff6128c218ee", kind: "企業公式", scope: "決済処理partner・global payment基盤", checkedAt });
addSource("aghanim", { id: "aghanim-jftc", label: "スマホソフトウェア競争促進法", url: "https://www.jftc.go.jp/smartphone_msca.html", kind: "公的機関", scope: "日本のmobile ecosystem・決済選択を巡る外部環境", checkedAt });
addSource("aghanim", { id: "aghanim-apple-japan", label: "Apple 日本向けiOS変更", url: "https://www.apple.com/jp/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/", kind: "企業公式", scope: "日本の代替app marketplace・payment option", checkedAt });
built.aghanim.marketStatus.growthSummary = "非公開企業。2023年創業、2024年のsoft launchとAdyen戦略提携、公式求人によるJapan market expansionを確認。ARR、顧客数、Japan売上、固有顧客の導入KPIは非公開。";
built.aghanim.marketStatus.genbaVerdict = { headline: "Japan revenue roleは明確。顧客proofとdelivery体制の検証が先", body: "Head of BD Japanの職務・言語・勤務条件は公式求人で確認できる。一方、固有顧客の導入KPI、日本法人・office、国内delivery team、quotaは未確認。会社claimを顧客成果へ置き換えず、territoryの成立条件を面接で検証する。" };
built.aghanim.marketStatus.growthDrivers = [
  { title: "外部ルールの変化", body: "日本のmobile ecosystemでpayment・marketplaceの選択肢が変わり、studioはdirect commerceの機会と税・返金・fraud・supportの責任を同時に設計する。", sourceId: "aghanim-jftc" },
  { title: "製品の統合価値", body: "Game Hub、Merchant of Record、segmentation、LiveOpsを束ね、checkout単体では作れないplayer relationshipを運用対象にする。", sourceId: "aghanim-docs" },
  { title: "Japan market role", body: "Head of BD Japanがmarket strategy、studio・partner・key account開拓、pipelineからretention・expansionまで担う。", sourceId: "aghanim-job" },
];
built.aghanim.marketStatus.milestones = [
  { year: "2023.06", label: "創業", detail: "Xsolla出身のfounding teamがmobile gaming DTC基盤を創業。", sourceId: "aghanim-company" },
  { year: "2024初頭", label: "soft launch", detail: "Mobile DTC enablement platformを市場へ展開。", sourceId: "aghanim-company" },
  { year: "2024.08", label: "Adyen提携", detail: "Mobile gameのDTC paymentsを支える戦略提携を発表。", sourceId: "aghanim-adyen" },
  { year: "2026.08", label: "Japan market role", detail: "Head of BD, Japanの現行公式求人を確認。", sourceId: "aghanim-job" },
];
built.aghanim.sellingPlaybook.issueLenses[0].body = "固有顧客の公開事例・導入KPIは十分に確認できない。公式製品説明では、studioがGame Hubを導入する目的を手数料削減だけでなく、playerとの直接接点、offer実験、loyalty、community、LTVの自社制御に置く。";
built.aghanim.customerProof = [];
if (built.aghanim.marketStatus.riskHypotheses?.[1]) {
  built.aghanim.marketStatus.riskHypotheses[1].counterSignal = "Head of BD Japanの公式求人とAdyen提携は確認できるが、顧客成果と日本delivery体制の代替根拠にはしない。";
  built.aghanim.marketStatus.riskHypotheses[1].sourceIds = ["aghanim-job", "aghanim-adyen"];
}
built.aghanim.externalSignals = [
  { label: "日本のmobile競争ルール", value: "選択肢拡大と新しい運用責任", detail: "スマホソフトウェア競争促進法とAppleの日本向け変更は、代替payment・marketplaceを含む選択肢を広げる外部変化。studioは価格だけでなく、規約・税・返金・fraud・supportを設計する必要がある。", caveat: "制度変更はAghanimの採用や個別titleでの利用を保証しない。", sourceId: "aghanim-jftc" },
  { label: "Appleの日本向け変更", value: "alternative payment options", detail: "Appleは日本向けに代替app marketplaceとpayment optionに関する変更を発表。DTC機会とplatform条件を継続観測する必要がある。", caveat: "適用条件、手数料、表示要件は更新され得るため、各titleの実装前に最新条件を確認する。", sourceId: "aghanim-apple-japan" },
];
built.aghanim.roleLens.salesMotion = "Head of BD Japanがmarket strategy、studio・partner・key account開拓、pipelineからclose、retention・expansionまでを担う。成功指標はrevenue growth、deal・partnership、retention、conversion、market penetration。";
built.aghanim.roleLens.compensation = "Full time・Remote・日英fluentは確認済み。日本のbase、bonus、quota、equity、雇用主体は非公開。";
built.aghanim.companyStats.globalHeadcount = { value: "51〜200人規模", detail: "LinkedIn企業ページの会社規模レンジ。表示上の所属人数とは一致しない場合がある。", sourceId: "aghanim-linkedin" };
built.aghanim.leadership = { name: "Konstantin Golubitsky / Constantin Andry / Albert Tugushev", role: "Co-founders", read: "Xsolla・Xsolla Labsでのgaming payments経験を起点に、checkout単体ではなくMoR、Game Hub、LiveOps、communityを一体化。", sourceId: "aghanim-company" };
built.aghanim.solutions = [
  { name: "Game Hub", valueProp: "catalog、checkout、offer、communityをmobile gameのDTC接点として運用。", url: "https://aghanim.com/", competitors: "Xsolla、Coda型web store、内製Game Hub。", differentiation: "commerce、player engagement、LiveOpsを一つのjourneyで扱う。", retention: "固有顧客の継続率・日本での利用実績は非公開。", feature: "Game Hub Builder、SKU管理、segmentation、campaign、creator program。", advantage: "web shopをtransaction画面で終わらせず、player relationshipとoffer運用まで含める。", benefit: "direct revenue、repeat、AOV、LTV、campaign cycleを自社接点で改善できる可能性。", evidence: "公式docsで単一integration、catalog、segmentation、LiveOps機能を確認。固有顧客KPIは未確認。", competitor: "Xsolla、Coda型web store、publisher内製。" },
  { name: "Billing Engine / Merchant of Record", valueProp: "決済、税、fraud、chargeback、返金、payment supportを運用。", url: "https://aghanim.com/", competitors: "gaming MoR、PSP＋税・fraud・support内製。", differentiation: "200超territoryの税務とgaming commerce operationをまとめる会社claim。", retention: "製品別ARR・継続率・日本での処理volumeは非公開。", feature: "Merchant of Record、global taxation、fraud・chargeback management、24/7 payment support。", advantage: "Adyen等を処理partnerとして組み込み、studioがPSP以外のcommercial operationも委ねられる。", benefit: "国別の決済・税・risk・supportを個別構築する負荷を下げる可能性。", evidence: "公式site・docsとAdyen戦略提携。『最大200% net revenue増』は会社claimであり顧客成果ではない。", competitor: "Xsolla等のgaming MoR、PSP＋内製operation。" },
];
built.aghanim.salesSnapshotFabe = "Mobile game studioに対し、「app store外でplayerとの直接接点を持てない」「決済・税・fraud・supportを国別に運用できない」「offer・loyalty・LiveOpsが購買dataと分断する」という課題を解決する。主力製品は、Game Hub、Merchant of Record、segmentation、LiveOps、creator programを一体化したDTC基盤である。競合優位性は、Adyen等を処理partnerとして使いながら、gaming固有のcommerce・税・fraud・player engagementまで運用する点にある。顧客への一番のメリットは、direct revenue、margin、LTV、campaign速度をstudio自身の接点で改善できる可能性にある。";
built.aghanim.salesSnapshotFabeExpanded = "成果は、Game Hub adoption、conversion、AOV、repeat rate、payment success、fraud、net revenue、LiveOps cycleで測る。公開根拠は公式site・docsとAdyen戦略提携であり、固有顧客名と導入KPIは未確認であるため、『最大200% more net revenue』を顧客実績として扱わない。日本市場では、日英fluent・full-time・remoteのHead of BD求人を確認できる一方、日本法人、国内office、顧客数、ARR、quotaは非公開である。";

// Primerの顧客ごとに、集約ページではなく個別の一次情報へ紐づける。
addSource("primer", { id: "primer-ferryhopper", label: "Primer × Ferryhopper", url: "https://webflow.primer.io/case/charting-a-new-course-for-payments-at-ferryhopper", kind: "企業公式", scope: "取引増・recovery・承認率", checkedAt });
addSource("primer", { id: "primer-dabble", label: "Primer × Dabble", url: "https://webflow.primer.io/case/dabble-picks-a-winner-by-partnering-with-primer", kind: "企業公式", scope: "承認率・retry recovery・APAC support", checkedAt });
addSource("primer", { id: "primer-zing", label: "Primer × Zing", url: "https://primer.io/case/zing", kind: "企業公式", scope: "失敗決済の回収", checkedAt });
built.primer.customerProof = [
  { company: "Ferryhopper", products: "Workflows / Fallbacks", outcome: "取引量47%増、1カ月で€3.4Mを回収、承認率を2ポイント改善。", implication: "routing・recoveryを売上KPIへ結びつける定量proof。", sourceId: "primer-ferryhopper" },
  { company: "Dabble", products: "Payments orchestration", outcome: "承認率96%、retry対象の23%を回収。", implication: "peak trafficとAPAC supportを含むregional proof。", sourceId: "primer-dabble" },
  { company: "Zing", products: "Fallbacks", outcome: "失敗決済の20%を回収。", implication: "payment failureを回収可能な売上として扱う。", sourceId: "primer-zing" },
];
built.primer.solutions = built.primer.solutions.map((solution) => ({
  ...solution,
  feature: solution.name === "Universal Checkout" ? "Drop-in / Headless checkoutとpayment method接続。" : solution.name === "Payments Orchestration" ? "Workflows、routing、Fallbacks、provider接続。" : "transaction data、provider performance、errorの一元可視化。",
  advantage: solution.differentiation,
  benefit: solution.name === "Universal Checkout" ? "国・決済手段追加の実装時間とcheckout frictionを減らす。" : solution.name === "Payments Orchestration" ? "承認率・recovery・resilienceをengineerの個別実装から運用workflowへ移す。" : "失敗原因とprovider差を特定し、Finance・Payments teamが改善を回す。",
  evidence: solution.name === "Payments Orchestration" ? "Ferryhopperは承認率+2ポイント・1カ月€3.4M回収、Dabbleは承認率96%を公開。" : "公式製品情報と顧客事例。Japan固有のproduction実績は未確認。",
  competitor: solution.competitors,
}));
built.primer.salesSnapshotFabe = "Payments・Finance・Product・Engineering部門に対し、「PSPごとの個別実装で変更が遅い」「失敗決済を回収できず売上を失う」「routing・障害・provider性能を横断して説明できない」という課題を解決する。主力製品は、Universal Checkout、Workflows、Fallbacks、Observabilityをsingle integrationで提供するUnified Payments Infrastructureである。競合優位性は、PSP・fraud toolを固定せず、routingとtransaction dataをmerchantが制御できる点にある。顧客への一番のメリットは、承認率、失敗決済回収、障害耐性、決済手段追加の速度を同じ基盤で改善できることにある。";
built.primer.salesSnapshotFabeExpanded = "成果は、authorization、payment recovery、routing uplift、provider integration time、downtime、operator hours、payment costで測る。公開根拠として、Ferryhopperは承認率+2ポイント・1カ月€3.4M回収、Dabbleは承認率96%、Zingは失敗決済20%回収を公表している。日本市場では、1億ドルSeries CとAPAC組織拡大は確認できるが、日本法人・顧客事例・専任求人・日本語・国内connectorは未確認である。";

export const daily20260815IntelligenceBySlug = built;
