import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-27";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.27";
  return intelligence;
}

const glanceIntelligence = build({
  checkedAt,
  slug: "glance",
  name: "Glance",
  jobUrl: "https://job-boards.greenhouse.io/glance/jobs/7938622",
  officialUrl: "https://glance.com/about-us",
  customersUrl: "https://glance.com/ja-JP/newsroom/pressrelease/glance-ai-brings-the-future-of-commerce-to-japan",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://glance.com/newsroom/pressrelease/glance-raises-45-million-dollar-mithril-capital",
  salesSnapshot: "スマートフォンやテレビの利用中に、検索前の着想から商品発見・販売サイトへの遷移までを生成AIでつなぐ。日本ではSharp端末への搭載を起点に、小売、super-app、widget、TV OSとの流通提携を作る段階。",
  growthSummary: "2019年創業。公式Careersは1日2億人超へのreachと1,000人超の従業員を掲載。2025年8月にSharp AQUOS R10で日本launchし、当時は同年末までに国内1,000万端末を目標として発表したが、達成実績は未確認。",
  ipoSummary: "非公開企業。InMobiの非連結子会社で、Google、Jio Platforms、Mithril Capitalが支援。IPO時期、日本売上、国内利用者数は公表されていない。",
  milestones: [
    { year: "2019", label: "創業", detail: "InMobiから、lock screenを検索前の発見面へ変えるconsumer technologyとして開始。", source: "company" },
    { year: "2019.09", label: "Mithrilから調達", detail: "4,500万ドルの投資と5,000万daily active usersを公式発表。", source: "finance" },
    { year: "2023", label: "global expansion", detail: "新市場、端末、surfaceへ拡張。", source: "company" },
    { year: "2025.08", label: "日本事業開始", detail: "Sharp AQUOS R10へGlance AIを搭載。", source: "company" },
    { year: "2026.08", label: "Japan distribution採用", detail: "TokyoでDistribution Partnerships & BD Directorを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Sharpは端末の差別化とpersonalized shopping体験を目的に採用。端末・小売・internet platformが求めるのはAI demoではなく、利用者activationと商品遷移を継続的に生む新しいsurface。" },
    { title: "製品の成り立ちから見る課題", body: "appを開く前のlock screenを発見面にした設計から、mobile、TV、brand siteに広げた。検索語が固まる前の着想を視覚生成と商品catalogへつなぐ。" },
    { title: "外部環境の要求から見る課題", body: "生成AIをconsumer journeyへ入れるほど、同意、データ最小化、画像・推薦の説明、brand safety、計測、取引先サイトへの遷移を一体で設計する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "端末メーカー、小売、internet platformは既存面の滞在とcommerce収益を伸ばしたい。" },
    { label: "課題", body: "従来の検索・広告は利用者の意図が明確になってから始まり、着想段階の体験と端末差別化を作りにくい。" },
    { label: "解決策", body: "一つのsurfaceとcategoryでopt-in利用、activation、生成継続、商品click、販売サイト到達、conversion、retentionを測る。" },
    { label: "選定の理由", body: "Google・Amazon・Rakutenの検索／広告、OEM内製、super-app mini app、visual commerce toolとの比較で、組み込みreach、体験品質、計測、privacy、unit economicsに優位がある場合に選ぶ。" },
  ],
  openingHook: "利用者が検索語を決める前の着想を、どの自社surfaceで商品発見と売上へつなげていますか。",
  valueHypothesis: "opt-in率、active users、生成継続率、商品click、販売サイト到達、conversion、retention、端末・partner別unit economicsをbaseline比較する。",
  objection: "既存の検索、広告、EC recommendationで十分。",
  reframe: "AI機能数ではなく、検索前の着想を日常surfaceから安全に拾い、partnerと利用者双方の継続価値へ変える総体験とunit economicsで比較する。",
  facts: [
    { label: "創業", value: "2019年", detail: "InMobi発のconsumer technology company。", source: "company" },
    { label: "公式reach", value: "1日2億人超", detail: "2026年8月確認の公式Careers掲載値。", source: "company" },
    { label: "公式従業員規模", value: "1,000人超", detail: "公式Careers掲載値。", source: "company" },
    { label: "日本launch", value: "2025年8月", detail: "Sharp AQUOS R10で開始。", source: "customers" },
    { label: "国内brand network", value: "400超", detail: "日本launch発表時のglobal brand・retailer network。", source: "customers" },
    { label: "日本求人", value: "1件以上", detail: "本調査ではDistribution Partnerships & BD Directorを対象化。公式Careersには他職種も掲載。", source: "job" },
  ],
  customers: [
    { company: "シャープ", products: "Glance AI / AQUOS R10", outcome: "2025年8月にAQUOS R10へ搭載し、日本でAI shopping体験を開始。定量成果は未公開。", implication: "端末組み込みの国内distribution proof。" },
    { company: "Samsung / SoftBank", products: "Glance AI", outcome: "2026年4月の日本公式NewsroomでGalaxy S26 seriesへの展開を掲載。利用者・売上成果は未公開。", implication: "単一OEMを超える国内拡張signal。" },
    { company: "global brands and retailers", products: "Glance AI", outcome: "日本launch時に400超のnetworkから商品へ接続すると発表。個社別成果は未公開。", implication: "catalog供給の規模はあるが、日本conversionは別途検証が必要。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "透明性・人間中心・説明責任", detail: "経産省のAI事業者ガイドラインはrisk管理、透明性、人間中心、accountabilityを重視する。", caveat: "Glanceの適合性や個別の法的結論を示すものではない。" },
    { label: "consumer data", value: "opt-inとdata minimization", detail: "画像、嗜好、商品反応を扱う場合は利用目的、同意、保存、委託、削除、推薦の説明をsurfaceごとに確認する必要がある。", caveat: "具体的要件は機能、契約、data flowで異なる。" },
  ],
  role: "日本の非Telco・非OEM surfaceで、小売、super-app、widget、TV OSのdistribution roadmap、役員交渉、収益分配、activation、unit economics、Japan P&Lを持つ。",
  organization: "Tokyo-based country teamで大きな裁量を持つDirector。Japan team人数、reporting line、出社頻度、既存pipelineは未公開。",
  careerValue: "consumer platformのdistribution strategy、executive partnership、commercial model、activation、country P&Lを横断する経験。",
  globalHeadcount: "1,000人超",
  japanPresence: "Glance Japan株式会社、東京住所、Sharp・Samsungとの国内展開、Tokyo採用を公式確認",
  japanSince: "2025年8月に日本launchを公式発表",
  solutions: [
    { name: "Glance AI", valueProp: "画像と嗜好からshopping inspirationを生成し、関連商品へつなぐ。", url: "https://glance.com/", competitors: "Google Shopping、Amazon、Rakuten、visual commerce tool。", differentiation: "mobile・TV等の日常surfaceへの組み込みと生成visual。" },
    { name: "Distribution Platform", valueProp: "OEM、retail、super-app、TV OSへAI commerce体験を組み込む。", url: "https://glance.com/solutions/b2b/business", competitors: "OEM内製、mini app、広告network。", differentiation: "consumer access、first-party interaction、InMobiのglobal reach。" },
  ],
  fitTags: ["AI Commerce", "Consumer Tech", "Partnerships", "Business Development", "Tokyo", "Bilingual"],
  comparisons: [
    { arena: "商品発見", companies: ["Glance", "Google", "Amazon"], why: "検索前の着想、reach、conversion" },
    { arena: "consumer surface", companies: ["Glance", "Rakuten", "LINE Yahoo"], why: "distribution、data、unit economics" },
    { arena: "visual commerce", companies: ["Glance", "OEM内製", "EC内製"], why: "生成品質、組み込み、運用" },
  ],
}, {
  slug: "glance", leaderName: "Naveen Tewari", leaderLabel: "Founder / CEO", leaderUrl: "https://glance.com/about-us", localName: "Naveen Tewari", localLabel: "Glance Japan代表者", localUrl: "https://glance.com/ja-JP/newsroom/pressrelease/glance-ai-brings-the-future-of-commerce-to-japan",
  companyId: "glance-company", jobId: "glance-job", customersId: "glance-customers", externalId: "glance-external", financeId: "glance-finance",
  targets: ["端末・プラットフォーム事業責任者", "小売・EC・デジタルコマース責任者", "メディア・consumer growth責任者"],
  heroSummary: "検索語が固まる前の着想を商品発見へつなげられず、端末・小売の既存面を収益化しにくい課題を解く。mobile・TV等の日常surfaceからpersonalizedな商品発見と販売サイトへの遷移へつなぎ、利用者activationとcommerce収益を同時に改善する。",
  competitors: "Google・Amazon・Rakutenの検索／広告、OEM内製、super-app mini app、visual commerce toolとの比較では、reach、体験品質、privacy、計測、unit economicsを見る。",
  feature: "生成AI、視覚情報、商品catalogを組み合わせ、mobile・TV・brand site上で着想から商品発見までを作る。",
  advantage: "日常的に使うsurfaceへの組み込み、InMobiのreach、端末・brand・retailer networkを一つのdistribution modelへ束ねる。",
  benefit: "端末差別化、opt-in利用、商品click、販売サイト到達、conversion、partner収益を同じKPIで改善できる可能性がある。",
  evidence: "Sharp AQUOS R10で日本launch。Samsung／SoftBankへの国内展開と400超のbrand・retailer networkを公式掲載。定量的な日本成果は未公開。",
  marketVerdict: "国内法人、端末partner、複数のTokyo求人は揃う。一方、日本のactive users、conversion、売上、team人数、partner別unit economicsは未公開。",
  marketParagraphs: ["生成AIが検索結果だけでなく発見面へ入るほど、consumer platformは体験、同意、brand safety、計測を一体で設計する必要がある。", "今後3〜5年はSharp以外の端末・super-app・retail・TVへdistributionを広げ、activationと収益を継続的に再現できるかが成長条件になる。"],
  cultureHeadline: "東京の初期country teamでdistribution strategyとP&Lを作るDirector role。",
  classification: "ハイブリッド", displayLabel: "Tokyo-based（出社頻度未公開）", officeDays: "未公開", remoteOnly: "フルリモートではない", flexibility: "勤務時間・在宅頻度は未公開",
  goodFor: ["consumer platformの役員提携とP&Lをゼロから作りたい人", "小売・internet・端末を横断してdistributionを設計したい人"], cautionFor: ["完成済みのchannelとquotaを前提にする人", "activation・unit economicsの責任を避けたい人"],
  unresolved: [
    ["Japan P&L", "利用者成長側のP&Lを持つ。", "売上・cost・activationの具体的な責任範囲と初年度目標は。"],
    ["partner pipeline", "小売、super-app、TV OSを開拓。", "既存交渉、優先partner、署名済み案件、平均deal cycleは。"],
    ["評価", "契約とdevice／user activationに連動するbonus。", "base・bonus・equity、KPI配分、未達時の扱いは。"],
    ["組織", "Tokyo country teamで大きな裁量。", "team人数、reporting line、global BD・OEM teamとの責任境界は。"],
    ["privacy・計測", "AI commerceを日常surfaceへ組み込む。", "opt-in、data flow、attribution、brand safetyをpartnerごとにどう承認するか。"],
  ],
});

const getYourGuideIntelligence = build({
  checkedAt,
  slug: "getyourguide",
  name: "GetYourGuide",
  jobUrl: "https://job-boards.greenhouse.io/getyourguide/jobs/8050667",
  officialUrl: "https://www.getyourguide.careers/",
  customersUrl: "https://www.getyourguide.com/c/supplier/",
  externalUrl: "https://www.mlit.go.jp/kankocho/seisaku_seido/kihonkeikaku.html",
  financeUrl: "https://www.getyourguide.press/blog/top-of-mind-all-eyes-on-us",
  salesSnapshot: "旅行者とtour・experience provider・attractionを結び、検索、予約、決済、reviewを一つのmarketplaceで提供する。東京のBDは日本の優良体験を発掘し、交渉、契約、onboardingまで持つ。",
  growthSummary: "2009年創業。会社公式はFY2025に売上10億ユーロ超、GMV40億ユーロ超（1ユーロ=170円の参考換算で約1,700億円・約6,800億円）、3,300万件超の体験予約、5万の供給partner、20万超の体験、1.8万destination、黒字化を発表。日本別の数字は非公開。",
  ipoSummary: "非公開企業。公式Careersは2019年のSeries Eでunicorn、2023年の1.94億ドルSeries Fを掲載。IPO時期、日本売上、国内予約数は公表されていない。",
  milestones: [
    { year: "2009", label: "創業", detail: "学生だった共同創業者が旅行体験のonline categoryを立ち上げた。", source: "company" },
    { year: "2019", label: "Series E", detail: "SoftBank Vision Fund参加の4.84億ドル調達でunicornに。", source: "finance" },
    { year: "2023", label: "Series F", detail: "1.94億ドルを調達。", source: "finance" },
    { year: "2025", label: "黒字化と規模拡大", detail: "売上10億ユーロ超、GMV40億ユーロ超（1ユーロ=170円の参考換算で約1,700億円・約6,800億円）、3,300万件超を公式発表。", source: "finance" },
    { year: "2026.08", label: "日本採用開始を確認", detail: "Business Development ManagerとDMO Partnerships Leadを公式Careersで確認。東京拠点自体の開始年は未確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "地域の体験事業者は海外旅行者へ直接reachし、空席・在庫を予約へ変えたい。必要なのは掲載数ではなく、見つかりやすさ、信頼、conversion、運用、予約品質を一体で改善すること。" },
    { title: "製品の成り立ちから見る課題", body: "flight・hotelはonline予約できても現地体験は到着後に探す時代に、体験専用marketplaceを開始。供給者の在庫と旅行者の発見・予約を同じplatformへ集めた。" },
    { title: "外部環境の要求から見る課題", body: "訪日旅行が拡大しても、地方・時間帯・categoryごとの体験供給、言語、在庫接続、cancel対応、品質保証が不足すると消費は一部に集中する。" },
  ],
  narrative: [
    { label: "背景", body: "日本のtour、体験、attractionは地域ごとに分散し、海外旅行者への集客と予約運用を個別に行う。" },
    { label: "課題", body: "良い体験があっても多言語の発見、在庫、予約、review、cancel対応がつながらず、需要を取りこぼす。" },
    { label: "解決策", body: "一つのdestination・categoryで新規供給を獲得し、掲載、在庫、conversion、予約、cancel、review、repeatを追う。" },
    { label: "選定の理由", body: "Viator、Klook、KKday、OTA、直販との比較で、traveler demand、掲載品質、commission、在庫接続、support、incremental bookingに優位がある場合に選ぶ。" },
  ],
  openingHook: "海外旅行者があなたの体験を見つけてから予約完了するまで、どこで最も多く離脱していますか。",
  valueHypothesis: "qualified supplier、listing activation、available inventory、conversion、booking、cancel、review score、repeat、incremental revenueをbaseline比較する。",
  objection: "既存OTAと自社サイトで十分。",
  reframe: "掲載先の追加ではなく、未接触の旅行者需要、在庫稼働、予約品質、運用工数、commission後の増分利益で比較する。",
  facts: [
    { label: "創業", value: "2009年", detail: "旅行体験専用marketplaceとして開始。", source: "company" },
    { label: "FY2025売上", value: "10億ユーロ超（約1,700億円）", detail: "会社公式発表。1ユーロ=170円の参考換算。", source: "finance" },
    { label: "FY2025 GMV", value: "40億ユーロ超（約6,800億円）", detail: "会社公式発表。1ユーロ=170円の参考換算。", source: "finance" },
    { label: "FY2025予約", value: "3,300万件超", detail: "体験予約数。", source: "finance" },
    { label: "供給規模", value: "5万partner・20万超体験", detail: "2026年1月の会社公式発表。", source: "finance" },
    { label: "東京求人", value: "2件", detail: "Business Development ManagerとPartnerships Lead - DMO。", source: "job" },
  ],
  customers: [
    { company: "travel experience suppliers", products: "GetYourGuide Supplier Platform", outcome: "5万の供給partnerが20万超の体験を18,000 destinationで提供。個社別の平均成果は非公開。", implication: "global demandと供給networkの規模。" },
    { company: "日本のtour・attraction provider", products: "Marketplace listing", outcome: "Tokyo求人は日本の供給者獲得を明記。国内個社事例と定量成果は本調査で公式確認できず。", implication: "local acquisition投資は確認できるが成果は面接で検証が必要。" },
    { company: "DMO", products: "Destination partnership", outcome: "TokyoでPartnerships Lead - DMOを公式募集。提携先と成果は未公開。", implication: "個社供給だけでなく地域単位の需要形成へ広げるsignal。" },
  ],
  externalSignals: [
    { label: "観光立国推進基本計画", value: "消費額・地方誘客・持続可能性", detail: "観光庁は人数だけでなく旅行消費、地方への誘客、持続可能な観光を重視する。", caveat: "GetYourGuide採用や特定marketplaceへの掲載を求めるものではない。" },
    { label: "供給品質", value: "在庫・言語・cancel・安全", detail: "体験流通では集客だけでなく、在庫正確性、説明、cancel対応、review、地域負荷を一体で管理する必要がある。", caveat: "具体的責任は契約、体験category、地域で異なる。" },
  ],
  role: "日本のtour・experience provider・attractionを発掘し、outreach、交渉、契約、onboardingまでのfull funnelとquotaを持つ。最大25%の国内出張を伴う。",
  organization: "Tokyo officeのhybrid role。公式求人は原則月・火・木のoffice collaboration、日本語native・英語proficiencyを記載。Japan team人数とreporting lineは未公開。",
  careerValue: "marketplace supplier acquisition、地域開拓、commercial negotiation、onboarding、供給品質・予約KPIを横断する経験。",
  globalHeadcount: "1,000人規模（公式Careersの会社紹介と公開求人からの概数）",
  japanPresence: "Tokyo officeと日本語話者向けの現行求人2件を公式Careersで確認",
  japanSince: "東京拠点の開始年は本調査の一次情報で確定できず",
  solutions: [
    { name: "GetYourGuide Marketplace", valueProp: "旅行者がtour、activity、attractionを発見・予約する。", url: "https://www.getyourguide.com/", competitors: "Viator、Klook、KKday、OTA、直販。", differentiation: "体験category専用のglobal demand、review、booking。" },
    { name: "Supplier Platform", valueProp: "供給者が体験、在庫、予約、performanceを管理する。", url: "https://www.getyourguide.com/c/supplier/", competitors: "OTA extranet、reservation system、channel manager、直販。", differentiation: "global marketplace demandと一体の供給運用。" },
  ],
  fitTags: ["Travel Tech", "Marketplace", "Supplier Acquisition", "Business Development", "Tokyo Hybrid", "Japanese"],
  comparisons: [
    { arena: "旅行体験marketplace", companies: ["GetYourGuide", "Viator", "Klook"], why: "demand、commission、conversion" },
    { arena: "APAC体験流通", companies: ["GetYourGuide", "Klook", "KKday"], why: "local supply、language、support" },
    { arena: "供給者販売", companies: ["GetYourGuide", "OTA", "Direct"], why: "incremental booking、運用、margin" },
  ],
}, {
  slug: "getyourguide", leaderName: "Johannes Reck", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://www.getyourguide.careers/posts/the-guiding-principles-steering-getyourguide-forward", localName: "未確認", localLabel: "Japan責任者", localUrl: "https://getyourguide.careers/location/tokyo",
  companyId: "getyourguide-company", jobId: "getyourguide-job", customersId: "getyourguide-customers", externalId: "getyourguide-external", financeId: "getyourguide-finance",
  targets: ["体験・attraction事業者", "DMO・観光地域経営組織", "旅行商品・e-commerce責任者"],
  heroSummary: "地域ごとに分散するtour・体験・attractionが、多言語の発見・在庫・予約運用につながらず需要を取りこぼす課題を解く。海外旅行者が予約できる供給へ変え、需要、在庫、予約、reviewをつないで供給者の稼働と増分売上を改善する。",
  competitors: "Viator、Klook、KKday、OTA、直販との比較では、traveler demand、commission、在庫接続、support、incremental booking、運用工数を見る。",
  feature: "旅行体験専用marketplaceとsupplier platformで、商品掲載、在庫、予約、review、traveler supportをつなぐ。",
  advantage: "5万partner、20万超の体験、18,000 destination、FY2025の3,300万件超という供給・需要networkを持つ。",
  benefit: "供給者が新しい海外需要へ届き、空席・在庫を予約へ変え、地域の体験消費を増やせる可能性がある。",
  evidence: "FY2025に売上10億ユーロ超、GMV40億ユーロ超（1ユーロ=170円の参考換算で約1,700億円・約6,800億円）、3,300万件超、黒字化を公式発表。日本個社の定量成果は未公開。",
  marketVerdict: "Tokyo officeと供給者開拓・DMO提携の2求人は日本投資のsignal。一方、日本の予約、GMV、供給者数、team人数、quota達成率は未公開。",
  marketParagraphs: ["訪日需要が増えても、地方・時間帯・categoryごとの体験が予約可能な在庫として流通しなければ消費は広がらない。", "今後3〜5年は日本の優良供給を獲得し、掲載数ではなく予約、品質、repeat、地域分散を再現できるかが成長条件になる。"],
  cultureHeadline: "東京で日本の体験供給を開拓し、onboardingまで持つhybrid full-cycle role。",
  classification: "ハイブリッド", displayLabel: "Tokyo Hybrid", officeDays: "原則週3日（月・火・木）", remoteOnly: "フルリモートではない", flexibility: "年30日は国外から勤務可能と求人に記載",
  goodFor: ["地域の事業者を発掘し、契約から予約開始まで持ちたい人", "旅行とmarketplaceの供給側KPIを深めたい人"], cautionFor: ["大企業の少数accountだけを担当したい人", "国内出張や多数のsupplier開拓を避けたい人"],
  unresolved: [
    ["quota", "supplier acquisitionのfull funnelを持つ。", "獲得数、activated listings、booking、GMVのquota配分と達成率は。"],
    ["territory", "日本のtour・experience・attractionを開拓。", "地域・category、既存portfolio、inboundとself-sourceの比率は。"],
    ["unit economics", "交渉からonboardingまで担当。", "commission、discount、marketing投資、incremental bookingをどう評価するか。"],
    ["品質", "sustainable growthを他teamと作る。", "cancel、review、在庫、safetyの基準とSalesの責任境界は。"],
    ["組織・報酬", "Tokyo hybrid、日本語native・英語proficiency。", "Japan team人数、reporting line、base・bonus・virtual shares、昇進基準は。"],
  ],
});

const antithesisIntelligence = buildPreEntryIntelligence({
  checkedAt,
  slug: "antithesis", name: "Antithesis", homepage: "https://antithesis.com/company/about/", growthUrl: "https://antithesis.com/company/about/", careersUrl: "https://jobs.ashbyhq.com/antithesis", customersUrl: "https://antithesis.com/", trustUrl: "https://antithesis.com/legal/", apacUrl: "https://jobs.ashbyhq.com/antithesis/02420778-a1e4-441c-9563-a3fee88f3f1f", externalUrl: "https://www.ipa.go.jp/digital/chousa/skill-henkaku2024.html", linkedinUrl: "https://www.linkedin.com/company/antithesis-com/",
  salesSnapshot: "Antithesisは、distributed system全体を決定論的な仮想環境で動かし、想定外のfaultを注入し、失敗のroot causeと完全な再現手順を返す。SingaporeでAPAC向けSenior AEとSolutions Engineerを採用するが、日本法人・Japan求人・国内顧客事例は未確認。",
  growthSummary: "FoundationDBのdeterministic simulationを一般化するため2018年創業。2024年に4,700万ドルseed、2025年12月にJane Street主導の1.05億ドルSeries Aを公式会社史に掲載。日本売上とAPAC顧客数は非公開。",
  verdict: "進出可能性は中。Singaporeの営業・技術採用は先行signalだが、Japan customerとlocal deliveryのproofが必要",
  entryNarrative: "FoundationDBで実証したdeterministic simulation、MongoDB・Ethereum Foundation・Palantir等の利用、十分な資本、SingaporeのAE・Solutions EngineerはAPAC拡張の材料。一方、日本法人、Tokyo office、Japan求人、国内顧客事例、日本語security・support、partnerは公式確認できない。Singapore teamが日本のtechnical evaluationと有償契約を再現するまで進出時期は断定しない。",
  headcount: "200人未満の規模（外部profileの公開range。公式厳密値ではない）", headcountDetail: "公式な現在社員数は未公開。LinkedInの公開rangeを参考値とし、Japan人数の代理にはしない。", apacPresence: "SingaporeでSenior Account Executive - APACとSolutions Engineerを公式募集。いずれもJapan territoryの明記はない。", productLanguage: "英語の製品・documentation・legal情報は公開されるが、日本語site、国内support、Japan customer story、国内契約主体は未確認。",
  milestones: [
    { year: "2009", label: "FoundationDB開始", detail: "共同創業者teamがdatabaseより先にdeterministic simulation frameworkを構築。", source: "company" },
    { year: "2015", label: "AppleがFoundationDBを買収", detail: "買収後、teamは他社でも同様のtesting基盤がないと確認。", source: "company" },
    { year: "2018", label: "Antithesis創業", detail: "Will WilsonとDave Schererがdeterministic simulationを一般提供するため創業。", source: "company" },
    { year: "2024", label: "seedとstealth解除", detail: "4,700万ドルseedを発表。", source: "growth" },
    { year: "2025.12", label: "Series A", detail: "Jane Street主導で1.05億ドルを調達。", source: "growth" },
    { year: "2026.08", label: "Singapore採用", detail: "APAC AEとSolutions Engineerを公式募集。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "MongoDBやEthereum Foundationのようなmission-critical systemでは、rareなrace・network fault・state interactionを本番前に見つけ、同じ条件を完全再現したい。" },
    { title: "製品の成り立ちから見る課題", body: "FoundationDBではdatabaseを書く前に決定論的simulationを作り、複雑なdistributed systemを高速に変更できた。その環境を任意のsoftwareへ適用するためhypervisorまで作った。" },
    { title: "外部環境の要求から見る課題", body: "AIがcode変更量を増やすほど、test caseを人が先回りして書く方法だけでは組合せfaultを覆えない。release速度とsystem reliabilityを同時に証明する検証基盤が必要になる。" },
  ],
  narrative: [
    { label: "背景", body: "distributed systemは多くのservice、state、network、timingが相互作用する。" },
    { label: "課題", body: "scripted testは想定済みのcaseに強いが、rareな順序・障害と再現不能なproduction bugを網羅しにくい。" },
    { label: "解決策", body: "対象systemを決定論的simulationへ置き、fault injection、探索量、発見bug、再現時間、修正lead time、incident削減を測る。" },
    { label: "選定の理由", body: "chaos engineering、fuzzing、property-based testing、staging、in-house simulatorとの比較で、system全体のdeterminism、再現性、導入負荷、発見価値に優位がある場合に選ぶ。" },
  ],
  openingHook: "本番で一度しか起きないraceやnetwork faultを、同じ順序で何度でも再現できますか。", valueHypothesis: "探索したstate・fault、重大bug発見、再現時間、fix lead time、release頻度、incident、senior engineer工数をbaseline比較する。", objection: "既存のunit・integration・chaos testで十分。", reframe: "test種類の数ではなく、想定外のsystem-level interactionを自動探索し、同じ失敗を完全再現して修正時間まで減らせるかで比較する。",
  facts: [
    { label: "創業", value: "2018年", detail: "FoundationDBの元teamが創業。", source: "company" },
    { label: "2024 seed", value: "4,700万ドル", detail: "Amplify Partners等が主導。", source: "growth" },
    { label: "2025 Series A", value: "1.05億ドル", detail: "Jane Street主導。", source: "growth" },
    { label: "APAC採用", value: "Singapore 2職種", detail: "Senior AEとSolutions Engineer。", source: "apac" },
    { label: "日本求人", value: "0件", detail: "Japan・Tokyo求人を公式boardで確認できず。", source: "careers" },
    { label: "顧客proof", value: "mission-critical systems", detail: "MongoDB、Ethereum Foundation、Palantir等を公式創業storyで掲載。", source: "customers" },
  ],
  customers: [
    { company: "MongoDB", products: "Antithesis", outcome: "core server softwareとWiredTigerの検証を複数年支援したと創業者が公式説明。定量成果は非公開。", implication: "大規模databaseでのsystem-level proof。" },
    { company: "Ethereum Foundation", products: "Antithesis", outcome: "The Mergeの約1年前からtestingを支援し、継続利用と公式説明。", implication: "高い障害costを持つdistributed protocolでのproof。" },
    { company: "Tigris Data", products: "Antithesis", outcome: "cache coherenceの複数bugを発見・予防した詳細reportを公開。", implication: "通常CIが通るcode pathでもfault interactionを見つける具体例。" },
  ],
  externalSignals: [
    { label: "software engineering変化", value: "AIで変更量が増加", detail: "AI活用でsoftware作成が速くなるほど、verification、security、operationのbottleneckを別に管理する必要がある。", caveat: "Antithesis採用や個別の品質保証を義務づけるものではない。" },
    { label: "mission-critical adoption", value: "再現性と説明", detail: "金融、通信、製造等ではrelease速度だけでなく、failureの再現、修正証拠、責任境界を説明できることが導入条件になる。", caveat: "要件はsystem、industry、contractで異なる。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。Singapore GTMは先行signalだが、日本での有償customer proofとtechnical deliveryが必要",
    factSignals: [
      { title: "Singaporeで営業・技術を採用", body: "Senior AE - APACとSolutions Engineerを同時募集し、regional GTMをcommercial・technicalの両面で作る段階。", sourceIds: ["apac", "careers"] },
      { title: "十分な資本", body: "4,700万ドルseedと1.05億ドルSeries Aを公式会社史に掲載。", sourceIds: ["growth"] },
      { title: "mission-critical proof", body: "MongoDB、Ethereum Foundation、Palantir等での利用を創業者が公式説明。", sourceIds: ["customers", "company"] },
      { title: "日本課題との親和", body: "distributed systemとAI生成codeの増加は、再現可能なsystem-level verification需要を高める。", sourceIds: ["external", "company"] },
    ],
    hurdles: [
      { title: "Japan commercial proofがない", body: "Japan customer、求人、office、country ownerを公式確認できない。", sourceIds: ["customers", "careers"] },
      { title: "導入難度", body: "顧客systemをsimulation環境へ持ち込み、有効なworkload・property・fault modelを作る高いtechnical支援が必要。", sourceIds: ["company", "apac"] },
      { title: "日本語のsecurity・legal対応", body: "architecture、data handling、契約、supportを日本語で説明する体制が未確認。", sourceIds: ["trust", "careers"] },
      { title: "既存testingとの予算競合", body: "内製simulator、chaos engineering、test automation、SREの既存投資に対し、増分価値を定量化する必要。", sourceIds: ["company", "customers"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse account", body: "国内のmission-critical softwareでbug、再現時間、release成果を公開。" },
      { title: "Singapore-to-Japan pipeline", body: "日本のqualified pipeline、ACV、renewalが専任podを支える。" },
      { title: "local technical delivery", body: "日本語のPOC、security review、onboarding、supportを整備。" },
      { title: "partner・community", body: "cloud、database、SRE、developer communityとの紹介・導入導線を作る。" },
      { title: "Japan pod", body: "AE、Solutions Engineer、Customer Experienceを専任coverage。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本顧客事例", "Singapore roleのJapan territory表記", "日本語site・security資料", "国内cloud・SRE partner", "Tokyoのdistributed systems event"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "CTO、VP Engineering、SRE、distributed systems teamへ再現困難なbugとrelease bottleneckから入り、representative systemのtechnical evaluationを経て継続simulationへ広げるEnterprise sale。", careerValue: "developer tools、distributed systems、software reliability、technical Enterprise sale、APAC category creationを横断する可能性。", leader: { name: "Will Wilson", role: "CEO / Co-Founder", read: "FoundationDBでdeterministic simulationを実証し、他社でも使えるhypervisor-based platformとして一般化。" },
  solutions: [
    { name: "Antithesis", valueProp: "system全体を決定論的simulationで動かし、faultを自動探索・完全再現する。", url: "https://antithesis.com/", competitors: "chaos engineering、fuzzing、property-based testing、staging、内製simulator。", differentiation: "任意softwareをdeterministicにするhypervisorとsystem-level exploration。" },
    { name: "Continuous Reliability", valueProp: "最新buildを継続的にsimulationし、bug導入から発見までを短縮する。", url: "https://antithesis.com/product/", competitors: "CI、test automation、SRE tool。", differentiation: "想定外faultの自動探索とperfect reproduction。" },
  ],
  fitTags: ["日本未進出", "Developer Tools", "Distributed Systems", "Testing", "Software Reliability", "APAC", "Singapore"],
  comparisons: [
    { arena: "system testing", companies: ["Antithesis", "Chaos Engineering", "Staging"], why: "探索、再現、導入" },
    { arena: "developer quality", companies: ["Antithesis", "Fuzzing", "Property Testing"], why: "coverage、system scope、fix speed" },
    { arena: "内製", companies: ["Antithesis", "FoundationDB-style simulator", "CI"], why: "build cost、maintenance、reliability" },
  ],
});

applyStandard(antithesisIntelligence, buildCompactPatch({
  slug: "antithesis", leaderName: "Will Wilson", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://antithesis.com/company/about/", localName: "未進出・責任者未確認", localLabel: "Japan法人責任者", localUrl: "https://jobs.ashbyhq.com/antithesis",
  companyId: "antithesis-company", jobId: "antithesis-careers", customersId: "antithesis-customers", externalId: "antithesis-external", financeId: "antithesis-growth",
  targets: ["CTO・技術責任者", "SRE・ソフトウェア信頼性責任者", "分散システム・基盤開発責任者"],
  heroSummary: "想定外のtiming、network、state interactionで起きる再現困難なbugを、本番前に自動探索して完全再現する。重大障害の発見、原因特定、修正lead time、release confidenceを改善する。",
  competitors: "chaos engineering、fuzzing、property-based testing、staging、内製simulatorとの比較では、system全体のdeterminism、探索量、再現性、導入工数、発見価値を見る。",
  feature: "system全体をdeterministicな仮想環境で動かし、fault injection、state探索、root cause、perfect reproductionを提供する。",
  advantage: "FoundationDBで実証したsimulation手法と、任意softwareを決定論的に動かすhypervisorを持つ。",
  benefit: "rare bugの発見と再現を早め、senior engineerの調査工数、release delay、production incidentを減らせる可能性がある。",
  evidence: "MongoDB、Ethereum Foundation、Palantir等での利用を公式説明し、Tigrisは通常CIが通るcode pathのcache coherence bugを発見した事例を公開。",
  marketVerdict: "SingaporeのAE・Solutions Engineerと大型調達はAPAC拡張signal。一方、日本法人、Japan求人、国内事例、local support、国内売上は未確認。",
  marketParagraphs: ["AIがcode変更量を増やすほど、想定済みtestだけではなくsystem-levelの組合せfaultを自動探索する需要が増える。", "今後3〜5年はSingaporeから日本のtechnical evaluationを作り、security review、導入、継続利用をlocalに再現できるかが専任Japan podの成立条件になる。"],
  cultureHeadline: "Singaporeの営業・技術teamからAPACの新categoryを作る段階。",
  classification: "ハイブリッド", displayLabel: "Singapore（日本求人なし）", officeDays: "未確認", remoteOnly: "日本からのremote可否は未確認", flexibility: "Singapore求人の条件であり日本の雇用条件ではない",
  goodFor: ["distributed systemsの技術価値をbusiness caseへ変えたい人", "将来のAPAC・Japan category creationを事実から観測したい人"], cautionFor: ["現在すぐ日本採用へ応募したい人", "深いtechnical evaluationと導入支援を避けたい人"],
  unresolved: [
    ["Japan pipeline", "SingaporeでAPAC営業・技術を採用。", "日本の有償顧客、qualified pipeline、ACV、renewalは。"],
    ["territory", "APAC Senior AEはSingapore勤務。", "Japan territory、quota credit、travel、日本語対応の責任は。"],
    ["POC", "system全体をsimulationへ持ち込む。", "平均導入期間、顧客側工数、property設計、production転換率は。"],
    ["security・support", "mission-critical codeとsystemを扱う。", "data handling、isolation、support、incident対応を日本でどう承認するか。"],
    ["entry gate", "専任Japan podはcommercial proof後の仮説。", "法人・採用を承認する顧客数、ARR、partner、delivery条件は。"],
  ],
}));
antithesisIntelligence.researchedAt = checkedAt;
if (antithesisIntelligence.cultureDeepDive) antithesisIntelligence.cultureDeepDive.researchedAt = "2026.08.27";

export const daily20260827IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  glance: glanceIntelligence,
  getyourguide: getYourGuideIntelligence,
  antithesis: antithesisIntelligence,
};
