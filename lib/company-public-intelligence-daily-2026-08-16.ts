import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-16";
const adyenCheckedAt = "2026-08-17";

const profiles: Profile[] = [
  {
    checkedAt, slug: "adyen", name: "Adyen", jobUrl: "https://careers.adyen.com/vacancies/7601353-team-lead-sales", officialUrl: "https://www.adyen.com/ja_JP/", customersUrl: "https://www.adyen.com/ja_JP/press-and-media/hoshino-resorts-rolls-out-adyen-payment-platform", externalUrl: "https://www.meti.go.jp/policy/mono_info_service/cashless/index.html", financeUrl: "https://investors.adyen.com/financials/2025", publicInfo: { ticker: "ADYEN", exchange: "Euronext Amsterdam", listedSince: "2018年" },
    salesSnapshot: "Adyenは、Digital・Finance・Retail・Operationsが抱えるonline・店頭・platform決済の分断、承認率、不正、reconciliation、越境展開の課題をsingle platformで解く会社。TokyoのTeam Lead, Salesは日本のEnterprise sellerを率い、coaching、pipeline、forecast、executive relationshipを持つ。PSP置換ではなく、顧客体験と収益基盤の再設計をteamで再現する営業が面白い。",
    growthSummary: "Adyenは2025年通期の純収益を23.64億ユーロ、決済取扱高を1.394兆ユーロ、EBITDAマージンを53%と公表。日本単体の売上・顧客数・営業達成率は非公開。",
    milestones: [
      { year: "2006", label: "創業", detail: "legacy payment stackを置き換えるsingle platformとして開始。", source: "company" },
      { year: "2018", label: "上場", detail: "Euronext Amsterdamへ上場。", source: "finance" },
      { year: "2021", label: "日本でacquiring開始", detail: "日本で直接acquiring capabilityを展開。", source: "company" },
      { year: "2025", label: "星野リゾート採用", detail: "online・対面決済を統合し、国内外施設へ展開予定。", source: "company" },
      { year: "2026.08", label: "Sales leadership採用", detail: "TokyoでTeam Lead, Salesを確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "星野リゾートは予約、現地、KIOSKで分かれた決済を一元化し、宿泊者と施設双方の体験を滑らかにしながら海外展開へ備える目的で採用した。" },
      { title: "製品の成り立ちから見る課題", body: "gateway、risk、processing、acquiringを地域・channelごとに継ぎ足すlegacy構造を避け、一つのcodebaseとdata layerでpayment lifecycleを扱う設計から始まった。" },
      { title: "外部環境の要求から見る課題", body: "cashless化、越境購買、omnichannel、platform businessの拡大により、企業は決済成功率、不正、顧客識別、規制、会計をchannel横断で説明しながら新しい体験を速く出す必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "企業はonline・店舗・app・marketplaceをまたいで顧客体験と販売地域を増やしている。" },
      { label: "課題", body: "channel・国ごとにPSP、risk、data、reconciliationが分かれ、顧客識別と改善速度、運用統制が落ちる。" },
      { label: "解決策", body: "優先journeyを選び、payments dataとprocessingを統合してauthorization、conversion、fraud、refund、reconciliation、運用工数を測る。" },
      { label: "選定の理由", body: "Stripe、Worldpay、PayPal/Braintree、国内PSP、複数vendor内製と比べ、global acquiring、online・POS統合、single data、Enterprise運用がbusiness caseに合う場合に選ばれる。" },
    ],
    openingHook: "同じ顧客がonlineと店舗を行き来した時、決済成功率、fraud、購買履歴、返金を一つのjourneyとして見られますか。", valueHypothesis: "authorization、conversion、payment success、fraud loss、refund、reconciliation time、new-market launch time、payment TCOを測る。", objection: "国内PSPと既存POS・gatewayで十分。", reframe: "現在の手数料だけでなく、channel追加、海外展開、障害、不正、data統合、経理運用まで含む収益機会とTCOで比較する。",
    facts: [
      { label: "2025年純収益", value: "23.64億ユーロ", secondaryValue: "約4,374億円", detail: "2025年年次報告書。1ユーロ=185円で概算。", source: "finance" },
      { label: "2025年取扱高", value: "1.394兆ユーロ", secondaryValue: "約258兆円", detail: "2025年年次報告書。1ユーロ=185円で概算。", source: "finance" },
      { label: "2025年EBITDAマージン", value: "53%", detail: "2025年通期の会社公表値。", source: "finance" },
    ],
    customers: [
      { company: "星野リゾート", products: "Adyen payment platform", outcome: "予約・対面・KIOSKにまたがる決済を一つのplatformへ統合し、国内外全施設へ展開予定。", implication: "hospitalityの複雑なjourneyとglobal expansionを同時に扱う国内proof。" },
      { company: "On", products: "Unified Commerce", outcome: "日本を含むglobal retailの顧客体験を支える企業として公式に紹介。", implication: "digitalと店舗をまたぐglobal brandのproof。" },
      { company: "Uber", products: "Adyen platform", outcome: "global platform customerとして公式に継続紹介。", implication: "multi-market・high-volume paymentのcategory proof。" },
    ],
    externalSignals: [
      { label: "日本のcashless", value: "継続拡大", detail: "経産省はcashless推進と決済環境整備を政策テーマとして継続している。", caveat: "市場拡大はAdyenの個別採用や成果を保証しない。" },
      { label: "omnichannel", value: "data統合要求", detail: "online・店舗・appが増えるほど、決済dataと顧客journeyの横断管理が経営課題になる。", caveat: "必要なarchitectureと契約は企業ごとに異なる。" },
    ],
    role: "Team Lead, SalesがEnterprise sales managerをcoachingし、pipeline、forecast、deal execution、C-level relationship、日本のnew business growthを担う。Head of Sales Japanへreportする。", organization: "office-firstのTokyo teamでSales、Account Management、Solution Engineering、Implementation、Risk、Product等をdealごとに束ねるmatrix型GTM。", careerValue: "Payments、Unified Commerce、FinTech、Enterprise transformation、people managementを横断する経験。", globalHeadcount: "4,000人超", japanPresence: "〒150-6139 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア39階", japanSince: "2021年に日本でアクワイアリングを開始",
    solutions: [
      { name: "Adyen Payments", valueProp: "online・app・店舗の決済受付、processing、acquiringを統合。", url: "https://www.adyen.com/ja_JP/online-payments", competitors: "Stripe、Worldpay、PayPal/Braintree、国内PSP。", differentiation: "global acquiring、single platform、payments dataの連続性。" },
      { name: "Unified Commerce", valueProp: "店舗とdigitalのpayment dataを接続し、cross-channel journeyを運用。", url: "https://www.adyen.com/ja_JP/unified-commerce", competitors: "Stripe Terminal、Worldpay、POS・PSP組合せ。", differentiation: "online・POS・acquiringを同一platformで扱う。" },
      { name: "Adyen for Platforms", valueProp: "marketplace・platformのonboarding、payment、payoutを支援。", url: "https://www.adyen.com/ja_JP/platforms", competitors: "Stripe Connect、PayPal、銀行・内製。", differentiation: "global complianceとmoney movementをplatform modelへ統合。" },
    ],
    fitTags: ["アンカー企業", "Payments", "Unified Commerce", "FinTech", "Enterprise", "Sales Leadership", "Japan"], comparisons: [
      { arena: "Global Payments", companies: ["Adyen", "Stripe", "Worldpay"], why: "coverage、acquiring、authorization、cost、operation" },
      { arena: "Unified Commerce", companies: ["Adyen", "Stripe Terminal", "POS+PSP"], why: "online・店舗data、journey、rollout" },
      { arena: "Platform Payments", companies: ["Adyen for Platforms", "Stripe Connect", "内製"], why: "onboarding、compliance、payout、global expansion" },
    ],
  },
  {
    checkedAt, slug: "figma", name: "Figma", jobUrl: "https://job-boards.greenhouse.io/figma/jobs/5729844004", officialUrl: "https://www.figma.com/ja-jp/", customersUrl: "https://www.figma.com/ja-jp/customers/", externalUrl: "https://www.meti.go.jp/policy/it_policy/investment/dx-chousa.html", financeUrl: "https://investor.figma.com/", publicInfo: { ticker: "FIG", exchange: "NYSE", listedSince: "2025年" },
    salesSnapshot: "Figmaは、Product・Design・Engineering・Marketingが抱えるfile分断、handoff、design system、会議、AI prototypeの課題をmultiplayer product-development platformで解く会社。TokyoのSMB AEは従業員500人以下へinboundとoutboundの両方で入り、1〜3カ月のhigh-volume cycleを持つ。design toolではなく、ideaからproductionまでの共通workflowを売る営業が面白い。",
    growthSummary: "Figmaは2025年7月にNYSEへ上場。日本ではTokyo Hub、native Japaneseを求めるSMB AE、三菱電機・LINEヤフー・Sansan・みずほ銀行等の公式事例を確認できる。日本売上とsegment別達成率は非公開。",
    milestones: [
      { year: "2012", label: "創業", detail: "browser-nativeでmultiplayerなdesign toolを構想。", source: "company" },
      { year: "2016", label: "一般提供", detail: "共同編集できるFigmaを正式公開。", source: "company" },
      { year: "2022", label: "日本法人", detail: "日本でlocal teamとmarket developmentを拡大。", source: "company" },
      { year: "2025", label: "NYSE上場", detail: "ticker FIGで取引開始。", source: "finance" },
      { year: "2026.08", label: "Tokyo SMB採用", detail: "Tokyo HubのAccount Executiveを確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "日本の公式事例は、design制作だけでなく、design system、部門横断の共通言語、developer handoff、内製化、品質とrelease速度を改善する目的を示す。" },
      { title: "製品の成り立ちから見る課題", body: "local fileと専門家だけのdesign processをbrowser上のmultiplayer環境へ移し、FigJam、Dev Mode、Slides、Makeへ範囲を広げ、ideaからcodeまでの分断を減らしてきた。" },
      { title: "外部環境の要求から見る課題", body: "企業のsoftware化とAI-assisted developmentにより、designとcodeの作成速度は上がる一方、brand、component、security、review、ownershipを職種横断で統制する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "product teamはdesign、prototype、code、feedback、marketing assetを複数toolとhandoffでつないでいる。" },
      { label: "課題", body: "file・component・comment・仕様が分かれ、手戻り、会議、developer待ち、brand不整合がrelease速度を落とす。" },
      { label: "解決策", body: "一つのproduct teamで共通libraryとworkflowを作り、handoff時間、review cycle、reuse、release、active collaboratorを測る。" },
      { label: "選定の理由", body: "Adobe、Sketch、Miro、Canva、GitHub・AI coding toolとの比較で、designを中核にbusinessとengineeringまで同じworkspaceへ参加させる価値が合う場合に選ばれる。" },
    ],
    openingHook: "仕様変更が出た時、design、component、code、review、stakeholder feedbackのどこで一番待ち時間が発生していますか。", valueHypothesis: "design cycle、handoff time、component reuse、review回数、meeting time、release lead time、active collaborator、tool consolidationを測る。", objection: "designerは既にFigmaを使っており、free・Professional planで十分。", reframe: "design seat数ではなく、Product・Engineering・Marketingまで含むhandoff、governance、AI build、tool重複のTCOで比較する。",
    facts: [
      { label: "上場", value: "NYSE: FIG", detail: "2025年7月31日に取引開始。", source: "finance" },
      { label: "製品範囲", value: "DesignからMakeまで", detail: "FigJam、Dev Mode、Slides、Buzz、Makeを展開。", source: "company" },
      { label: "日本拠点", value: "Tokyo Hub", detail: "現行求人で勤務拠点を明記。", source: "job" },
      { label: "対象segment", value: "500 FTE以下", detail: "SMB AEの担当範囲。", source: "job" },
      { label: "sales cycle", value: "1〜3カ月", detail: "求人がhigh-volume cycle経験を要件化。", source: "job" },
      { label: "現行営業求人", value: "1件", detail: "Account Executive, SMB。", source: "job" },
    ],
    customers: [
      { company: "みずほ銀行", products: "Figma / FigJam", outcome: "部門・vendor間のcommunicationを改善し、対象appのApp Store評価が1.5から4.5へ上昇した事例を公開。", implication: "regulated enterpriseでdesign collaborationを品質指標へ接続する国内proof。" },
      { company: "三菱電機", products: "Figma Design / Figma Make", outcome: "design systemを共創基盤として開発し、DXの進め方を標準化。", implication: "large enterpriseの部門横断・design system proof。" },
      { company: "Sansan", products: "Figma / Dev Mode MCP", outcome: "designer中心の利用からengineering、sales、customer successへ活用範囲を拡張。", implication: "seat saleからproduct-development platformへのexpandを示す。" },
    ],
    externalSignals: [
      { label: "DX投資", value: "継続的なproduct変革", detail: "経産省のDX調査は企業がdigital capabilityと組織変革を継続して測る必要を示す。", caveat: "Figmaの採用や成果を直接支持する資料ではない。" },
      { label: "生成AI開発", value: "速度とgovernance", detail: "AIでprototype・code作成が速くなるほど、design system、review、security、ownershipの共通基盤が必要になる。", caveat: "生産性効果はworkflowごとに検証が必要。" },
    ],
    role: "SMB AEが従業員500人以下の新規・既存顧客を対象にinbound・outboundからpipelineを作り、discovery、value selling、evaluation、closeをhigh-volumeで担う。", organization: "Tokyo Hubを起点にMarketing、SDR、Solutions、Customer Success、Product等を案件に応じて束ねる。求人はin-person onboardingを必須とする。", careerValue: "PLG-to-sales、Product Development、SMB high-velocity sales、Design・Engineering buyer、AI workflowを横断する経験。", globalHeadcount: "1,000人超", japanPresence: "Figma Japan / Tokyo Hub、日本語製品・国内顧客事例・native JapaneseのSMB AE求人", japanSince: "2022年に日本法人を設立",
    solutions: [
      { name: "Figma Design", valueProp: "multiplayer design、prototype、design systemを一つのfileで運用。", url: "https://www.figma.com/ja-jp/design/", competitors: "Adobe、Sketch、Penpot。", differentiation: "browser-native共同編集とecosystem。" },
      { name: "Dev Mode", valueProp: "design context、component、code情報をdeveloper workflowへ接続。", url: "https://www.figma.com/ja-jp/dev-mode/", competitors: "Zeplin、Storybook、manual handoff。", differentiation: "design sourceとdeveloper contextの連続性。" },
      { name: "Figma Make", valueProp: "promptとdesign contextからinteractive prototype・web experienceを作成。", url: "https://www.figma.com/ja-jp/make/", competitors: "Lovable、Replit、v0、AI coding tool。", differentiation: "既存design systemとmultiplayer reviewに近いAI build。" },
    ],
    fitTags: ["Product Development", "Design", "Collaboration", "Developer Tools", "PLG", "SMB", "Tokyo"], comparisons: [
      { arena: "Product Design", companies: ["Figma", "Adobe", "Sketch"], why: "collaboration、ecosystem、governance" },
      { arena: "Whiteboard / Collaboration", companies: ["FigJam", "Miro", "Microsoft"], why: "workshop、product workflow、bundle" },
      { arena: "AI Product Build", companies: ["Figma Make", "Lovable", "Replit"], why: "design context、code、deployment、governance" },
    ],
  },
];

const built = Object.fromEntries(profiles.map((profile) => [profile.slug, buildIntelligence(profile)])) as Record<string, CompanyPublicIntelligence>;

// Adyenで先行検証する、日本市場の需要・成長性を読むための深掘り枠。
built.adyen.sources.push(
  { id: "adyen-about", label: "Adyen 会社概要・沿革", url: "https://www.adyen.com/ja_JP/about", kind: "企業公式", scope: "2006年の創業地・グローバル沿革", checkedAt: adyenCheckedAt },
  { id: "adyen-cashless-2025", label: "経済産業省 2025年キャッシュレス決済比率", url: "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html", kind: "公的機関", scope: "2025年実績・2030年目標・長期目標", checkedAt },
  { id: "adyen-acquiring-japan", label: "Adyen 日本でのアクワイアリング開始", url: "https://www.adyen.com/ja_JP/press-and-media/adyen-expands-acquiring-capabilities-to-japan", kind: "企業公式", scope: "日本市場への製品投資・現地決済処理", checkedAt },
  { id: "adyen-unified-commerce-japan", label: "Adyen 日本でのユニファイドコマース開始", url: "https://www.adyen.com/press-and-media/adyen-brings-unified-commerce-to-japan", kind: "企業公式", scope: "日本の対面決済・チャネル統合", checkedAt },
  { id: "adyen-country-manager-japan", label: "Adyen 日本カントリーマネージャー就任", url: "https://www.adyen.com/ja_JP/press-and-media/adyen-names-adam-brownstein-as-country-manager-in-japan", kind: "企業公式", scope: "日本GTMへの継続投資", checkedAt },
  { id: "adyen-on-japan", label: "Adyen × On Japan", url: "https://www.adyen.com/ja_JP/knowledge-hub/on-running-multi-channel", kind: "企業公式", scope: "東京店舗とオンライン決済の統合", checkedAt },
  { id: "adyen-wolt-japan", label: "Adyen 日本の3Dセキュア動向・Wolt事例", url: "https://www.adyen.com/ja_JP/knowledge-hub/post-3ds-mandate-in-japan", kind: "企業公式", scope: "本人認証・不正対策・購入完了率", checkedAt },
  { id: "adyen-global-leadership", label: "Adyen 公式経営陣", url: "https://www.adyen.com/about/team", kind: "企業公式", scope: "Co-CEO・日本カントリーマネージャー", checkedAt: adyenCheckedAt },
  { id: "adyen-gbiz-japan", label: "Gビズインフォ Adyen Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=6010401141832", kind: "公的機関", scope: "本店所在地・社会保険適用事業所の被保険者数", checkedAt: adyenCheckedAt },
  { id: "adyen-annual-report-2025", label: "Adyen 2025年年次報告書", url: "https://investors.adyen.com/financials/2025", kind: "法定開示", scope: "通期業績・地域別業績・リスク・日本への投資", checkedAt: adyenCheckedAt },
  { id: "adyen-q1-2026", label: "Adyen 2026年第1四半期事業アップデート", url: "https://investors.adyen.com/financials/q1-2026-4jxrap", kind: "企業公式", scope: "直近の事業進捗・Talon.One買収方針", checkedAt: adyenCheckedAt },
  { id: "adyen-talon-one", label: "AdyenによるTalon.One買収発表", url: "https://investors.adyen.com/events/7cvesgb8bvr5", kind: "企業公式", scope: "ロイヤルティ・販促領域への製品拡張", checkedAt: adyenCheckedAt },
  { id: "adyen-orb", label: "AdyenによるOrb買収発表", url: "https://investors.adyen.com/events/qxmuuiwffoz2", kind: "企業公式", scope: "請求・決済基盤への製品拡張", checkedAt: adyenCheckedAt },
  { id: "adyen-tap-to-pay-japan", label: "Adyen 日本でTap to Pay on iPhoneを提供", url: "https://www.adyen.com/press-and-media/adyen-now-offers-tap-to-pay-on-iphone-for-merchants-in-japan", kind: "企業公式", scope: "日本の対面決済機能への追加投資", checkedAt: adyenCheckedAt },
  { id: "adyen-formula", label: "The Adyen Formula", url: "https://careers.adyen.com/formula", kind: "企業公式", scope: "8つの価値観・意思決定・コミュニケーション", checkedAt: adyenCheckedAt },
  { id: "adyen-tokyo-culture", label: "Adyen 東京オフィス・福利厚生", url: "https://careers.adyen.com/locations/tokyo", kind: "企業公式", scope: "東京の勤務形態・職場環境・国際機会", checkedAt: adyenCheckedAt },
  { id: "adyen-sales-culture", label: "Adyen 営業組織の働き方", url: "https://www.adyen.com/knowledge-hub/five-facts-about-the-adyen-sales-team", kind: "企業公式", scope: "ペアセリング・グローバル連携・評価の考え方", checkedAt: adyenCheckedAt },
  { id: "adyen-hiring-process", label: "Adyen 選考プロセス", url: "https://careers.adyen.com/faqs", kind: "企業公式", scope: "Formulaを重視した面接・最終面接", checkedAt: adyenCheckedAt },
  { id: "adyen-glassdoor", label: "Glassdoor Adyen社員レビュー", url: "https://www.glassdoor.com/Reviews/Adyen-Reviews-E684495.htm", kind: "コミュニティ", scope: "匿名社員レビューの全社集計・肯定と注意の傾向", checkedAt: adyenCheckedAt },
);
const adyenFoundedMilestone = built.adyen.marketStatus.milestones.find((milestone) => milestone.label === "創業");
if (adyenFoundedMilestone) adyenFoundedMilestone.sourceId = "adyen-about";
if (built.adyen.marketStatus.isPublic) {
  built.adyen.marketStatus.stockLinkUrl = "https://live.euronext.com/en/product/equities/NL0012969182-XAMS";
}

built.adyen.overviewLeadership = [
  {
    label: "グローバルCo-CEO",
    people: [
      { name: "Pieter van der Does", url: "https://www.adyen.com/about/team", linkLabel: "公式経営陣" },
      { name: "Ingo Uytdehaage", url: "https://nl.linkedin.com/in/ingo-uytdehaage-559a9133", linkLabel: "LinkedIn" },
    ],
  },
  {
    label: "日本カントリーマネージャー",
    people: [
      { name: "Adam Brownstein", url: "https://jp.linkedin.com/in/abrownstein", linkLabel: "LinkedIn" },
    ],
  },
];
built.adyen.leadership = {
  name: "Adam Brownstein",
  role: "Adyen Japan 日本カントリーマネージャー",
  read: "2024年8月に就任。Adyen公式経営陣ページでも現任の日本カントリーマネージャーとして確認。",
  sourceId: "adyen-country-manager-japan",
};
built.adyen.companyStats.japanOffice = {
  value: "〒150-6139 東京都渋谷区渋谷2-24-12 渋谷スクランブルスクエア39階",
  detail: "法人番号公表情報とAdyen公式オフィス一覧で確認。",
  sourceId: "adyen-gbiz-japan",
};
built.adyen.companyStats.japanSince = {
  value: "2021年に日本でアクワイアリングを開始",
  detail: "Adyen公式が2021年5月に日本でのアクワイアリング機能の提供開始を発表。",
  sourceId: "adyen-acquiring-japan",
};
built.adyen.companyStats.japanHeadcount = {
  value: "53人",
  detail: "Gビズインフォ掲載の厚生年金・健康保険適用事業所における被保険者数。雇用者総数と完全一致しない可能性がある。",
  sourceId: "adyen-gbiz-japan",
};

built.adyen.salesFabeOverview = {
  targetSegments: ["デジタルサービス（SaaS・マーケットプレイス）", "金融・FinTech", "小売", "旅行・ホテル", "D2C"],
  summary: "オンライン、アプリ、店舗など販売チャネルが増えるほど、決済、不正対策、入金照合、顧客データが別々の仕組みに分かれ、決済成功率の改善や海外展開が難しくなる。Adyenは、決済受付、不正対策、決済処理、アクワイアリングを一つの基盤に統合し、決済成功率、不正損失、照合作業、海外展開を同じデータで改善する決済プラットフォームである。",
  fabeRows: [
    { key: "feature", label: "Feature", analysis: "オンライン、アプリ、店舗、KIOSKの決済受付、不正対策、決済処理、アクワイアリングを一つの基盤で提供する。", customerMeaning: "複数の決済事業者や管理画面をまたぐ運用を減らせる。" },
    { key: "advantage", label: "Advantage", analysis: "国やチャネルごとに決済システムを継ぎ足す構成ではなく、グローバルで共通する基盤と決済データを持つ。", customerMeaning: "店舗とEC、国内と海外を同じ考え方で展開・改善できる。" },
    { key: "benefit", label: "Benefit", analysis: "決済成功率の向上、不正損失の抑制、照合作業の削減、海外展開の迅速化を同じデータで追える。", customerMeaning: "売上の取りこぼしと決済運用コストを同じ商談で扱える。" },
    { key: "evidence", label: "Evidence", analysis: "星野リゾートは予約・現地・KIOSKの決済統合を進め、On Japanは店舗とオンラインを接続している。Woltの公式事例ではリピーターの購入完了率が5％超向上した。", customerMeaning: "日本でも旅行・小売・デジタルサービスに近い導入根拠を確認できる。", sourceIds: ["adyen-customers", "adyen-on-japan", "adyen-wolt-japan"] },
    { key: "competitor", label: "Competitor", analysis: "Stripe、Worldpay、PayPal/Braintree、国内PSP、POSと決済代行の組み合わせ、内製が主な代替手段となる。", customerMeaning: "手数料だけでなく、承認率、オンライン・店舗統合、海外対応、照合作業、移行負荷で比較する。" },
  ],
};

built.adyen.salesMarketOutlook = {
  title: "日本市場でのニーズと3-5年の成長性の見立て",
  verdict: "結論：日本での需要は、今後3〜5年で拡大する可能性が高い。",
  paragraphs: [
    "日本のキャッシュレス決済比率は2025年に58.0％まで上昇し、政府は2030年に65％、将来的に80％を目標としている。普及が進むほど、小売、旅行・宿泊、EC、プラットフォームでは、店舗・EC・アプリ・KIOSKごとに分かれた決済、不正対策、3Dセキュア、返金・照合、訪日客向け決済を一体で管理する必要が強まる。Adyenは決済受付、リスク管理、処理、アクワイアリングを単一基盤へまとめ、承認率、購入完了率、不正損失、照合作業を同じデータで改善できる点に価値がある。",
    "Adyenは2021年に日本で現地アクワイアリング、2022年に対面決済とユニファイドコマースを開始し、2024年には日本カントリーマネージャーを任命した。現在も東京で日本営業チームを率いる責任者を募集し、日本を成長市場の一つと位置付けている。継続投資は確認できる一方、日本単体の売上、顧客数、市場シェアは非公開である。",
    "Genba分析：市場ニーズは縮小より拡大を見込む。ただし、キャッシュレス市場の成長がそのままAdyenの成長を保証するわけではない。国内PSPやStripeなどとの競争、既存システムからの移行負荷があるため、勝ち筋は大規模企業のオムニチャネル化、インバウンド対応、海外展開、認証・不正対策の高度化にある。",
  ],
  cases: [
    { company: "星野リゾート", need: "予約・現地・KIOSKで分かれていた決済を統合し、訪日客対応と国内外施設への展開に備える。", sourceId: "adyen-customers" },
    { company: "On Japan", need: "東京店舗とオンライン決済を接続し、チャネル横断の顧客体験と決済データ活用を進める。", sourceId: "adyen-on-japan" },
    { company: "Wolt", need: "3Dセキュアとリスクベース認証を両立し、不正対策による購入離脱を抑える。公式事例ではリピーターの購入完了率が5％超向上。", sourceId: "adyen-wolt-japan" },
  ],
  sourceIds: ["adyen-cashless-2025", "adyen-acquiring-japan", "adyen-unified-commerce-japan", "adyen-country-manager-japan", "adyen-job"],
};

built.adyen.cultureDeepDive = {
  researchedAt: "2026.08.17",
  headline: "東京はハイブリッド。ただし会社としては出社での協働を重視するオフィスファースト。直接対話、高い自律性、個人よりチームで勝つ姿勢が文化の中心にある。",
  workStyle: {
    classification: "ハイブリッド",
    displayLabel: "ハイブリッド（出社中心）",
    remoteOnly: "不可",
    officeDays: "公開情報では未特定",
    flexibility: "必要時の柔軟性あり",
    summary: "東京オフィスの公式ページはハイブリッド勤務を明記。一方、東京の現行求人はオフィスファーストで、リモート専任のポジションは提供しないとしている。東京で週何日の出社が必要かは公開されていないため、選考時の確認が必要。",
    sourceIds: ["adyen-tokyo-culture", "adyen-job"],
  },
  principles: [
    {
      label: "顧客と長期",
      title: "一社向けの特注より、全顧客に効く仕組みを作る",
      companySays: "すべての顧客に利益をもたらす製品を作り、短期的な都合だけでなく顧客・Adyen・社会への長期的な効果で判断する。",
      readerMeaning: "大口顧客の要望でも個別対応が通るとは限らない。営業には、要望を共通製品のロードマップへ翻訳する力が求められる。",
      sourceIds: ["adyen-formula"],
    },
    {
      label: "速度と学習",
      title: "完璧を待たず、早く出して改善する",
      companySays: "速度を重視し、立ち上げ後の学習と反復で品質を高めることを公式の原則にしている。",
      readerMeaning: "指示と完成形を待つより、仮説を置いて動き、顧客やチームから得た材料で修正できる人が合いやすい。",
      sourceIds: ["adyen-formula", "adyen-tokyo-culture"],
    },
    {
      label: "直接対話",
      title: "メールに隠れず、率直に話す",
      companySays: "不明点があれば電話や会話を選び、失礼にならない範囲で必要なことを率直に伝える。",
      readerMeaning: "遠回しな合意形成より、論点を言語化して相手の意見へ反論できることが重要。フィードバックの密度は高くなりやすい。",
      sourceIds: ["adyen-formula"],
    },
    {
      label: "チームと自律",
      title: "個人の手柄より勝利。成長の道筋は自分で作る",
      companySays: "時差や文化を越えて協働し、エゴよりチームの成功を優先する。同時に、個人が自分の成長経路を作ることを求める。",
      readerMeaning: "周囲へ助けを求め、他者を案件へ巻き込む力と、自分の課題・成長機会を自分で取りに行く力の両方が必要。",
      sourceIds: ["adyen-formula", "adyen-sales-culture"],
    },
  ],
  tokyoExperience: [
    { label: "働き方", value: "ハイブリッド", detail: "柔軟な働き方を掲げる一方、オフィスでの対面協働を前提とする。", sourceId: "adyen-tokyo-culture" },
    { label: "日々の環境", value: "昼食・カジュアル", detail: "オフィスでの昼食、カジュアルな服装、通勤手当を公式に掲載。", sourceId: "adyen-tokyo-culture" },
    { label: "休暇", value: "年次休暇20日", detail: "東京拠点向けの福利厚生として公式ページに記載。", sourceId: "adyen-tokyo-culture" },
    { label: "オンボーディング", value: "シンガポール", detail: "東京採用者のオンボーディング旅行先としてAPAC拠点を明記。", sourceId: "adyen-tokyo-culture" },
    { label: "グローバル接点", value: "年次アムステルダム", detail: "本社への年次旅行とGlobal Exchange Programを掲載。", sourceId: "adyen-tokyo-culture" },
    { label: "成長機会", value: "自律・国際連携", detail: "マイクロマネジメントを減らし、24以上の海外拠点やグローバル顧客と連携する環境を掲げる。", sourceId: "adyen-tokyo-culture" },
  ],
  salesCulture: [
    {
      title: "一人で抱えず、ペアで案件を動かす",
      evidence: "公式の営業インタビューは、営業同士がペアを組み、地域・オフィスを越えて専門家を案件へ入れる働き方を繰り返し紹介している。",
      readerMeaning: "個人完結型の営業より、案件の途中で助けを求め、知識と顧客接点を共有できる人が合う。自分の数字だけを守る動きとは相性が悪い。",
      sourceIds: ["adyen-sales-culture"],
    },
    {
      title: "インセンティブまでチーム協働を促す",
      evidence: "公式記事は、グローバルチームで働く行動を報酬設計でも後押ししていると説明している。",
      readerMeaning: "案件貢献や成果配分の仕組みは一般的な個人コミッションと異なる可能性がある。日本の具体的なcreditルールは面接で確認したい。",
      sourceIds: ["adyen-sales-culture", "adyen-job"],
    },
    {
      title: "相談型営業と日本GTMづくりを同時に担う",
      evidence: "東京のTeam Lead求人は、売上管理だけでなくcoaching、forecast、C-level関係、社内連携、営業手法の改善を責任範囲に置く。",
      readerMeaning: "完成済みの台本を管理する役割ではない。顧客の事業を理解しながら、日本のチームと再現可能な営業プロセスを作るリーダーが求められる。",
      sourceIds: ["adyen-job", "adyen-sales-culture"],
    },
  ],
  communitySnapshot: {
    label: "Glassdoor 全社集計",
    rating: "3.6 / 5",
    recommend: "70%が友人へ推奨",
    metrics: [
      { label: "ワークライフバランス", value: "4.0" },
      { label: "カルチャー・価値観", value: "3.7" },
      { label: "キャリア機会", value: "3.2" },
      { label: "シニア経営陣", value: "3.2" },
    ],
    positiveRead: "国際的な協働、フラットに意見を言える環境、自律性、ワークライフバランスを肯定する投稿が確認できる。公式が掲げるチームワークと率直さを支持する材料にはなる。",
    cautionRead: "チームによる文化差、昇進・キャリアパス、マネジメントの透明性や人間関係を課題に挙げる投稿もある。全社文化と配属先の実態は分けて確認したい。",
    caveat: "匿名・自己申告のグローバル集計であり、東京拠点や営業組織だけの評価ではありません。個別投稿は事実認定せず、複数レビューに見られる傾向として扱っています。",
    sourceId: "adyen-glassdoor",
  },
  fit: {
    goodFor: [
      "対面で相談しながら、複雑な案件をチームで前へ進めたい",
      "率直なフィードバックを受け、自分の考えも直接伝えられる",
      "完成した正解がなくても、自分で仮説と成長機会を作れる",
      "海外拠点・多職種・時差をまたぐ協働をキャリアにしたい",
    ],
    cautionFor: [
      "フルリモートを必須条件にしている",
      "一人で営業数字を完結させ、案件への介入を避けたい",
      "明確な手順・昇進経路を会社側から細かく示してほしい",
      "率直な反論や高頻度のフィードバックに強い負荷を感じる",
    ],
    interviewQuestions: [
      "東京チームの標準出社日数と、家庭事情などへの柔軟性は？",
      "直属マネージャーの1on1、フィードバック、評価はどの頻度・形式か？",
      "直近の日本営業チームで、昇進した人の共通点と評価基準は？",
      "ペアセリング時の役割分担と、quota・commission creditの決め方は？",
      "シンガポール・アムステルダムとの会議時間、出張頻度、英語利用は？",
    ],
  },
  careerValue: {
    title: "決済の専門性だけでなく、グローバルなチームセリングを実績にできる",
    body: "Enterprise決済、ユニファイドコマース、C-level提案、複数職種・海外拠点との共同販売、日本GTMとpeople managementを一つの役割で経験できる。次のFinTechやEnterprise Platform営業でも説明しやすい複合経験になる。",
  },
  sourceIds: ["adyen-tokyo-culture", "adyen-job", "adyen-formula", "adyen-sales-culture", "adyen-hiring-process", "adyen-glassdoor"],
};

built.adyen.marketStatus.genbaVerdict = {
  headline: "日本は『参入済み』から、決済手段・規制対応・国内大手導入を積み上げる拡張局面",
  body: "Adyenは2025年に純収益を前年比18%伸ばし、APACの純収益も14%増加した。日本では東京のFTEが40人から49人へ増え、PayPay対応、3Dセキュア義務化への対応、国内データセンター運用の試験、星野リゾートへの展開を進めている。日本への継続投資は確認できる一方、日本単体の純収益、顧客数、市場シェアは非開示であり、国内事業の規模や採算までは断定できない。",
};

// 冒頭の市場見立てと重複するため、旧「日本での成長性」パネルはAdyenでは表示しない。
built.adyen.marketStatus.japanGrowth = undefined;

built.adyen.marketStatus.capitalMarketRead = {
  asOf: "2026年8月17日",
  metrics: [
    {
      label: "2025年純収益",
      value: "23.64億ユーロ（約4,374億円）",
      change: "前年比 +18%（為替一定 +21%）",
      interpretation: "既存顧客の利用拡大に加え、大企業とプラットフォーム企業の新規獲得が成長を支えた。",
      sourceId: "adyen-annual-report-2025",
    },
    {
      label: "EBITDAマージン",
      value: "53%",
      change: "前年から +3ポイント",
      interpretation: "人員・製品・データセンターへ投資しながら利益率を高めており、単一基盤の規模の効果が表れている。",
      sourceId: "adyen-annual-report-2025",
    },
    {
      label: "APAC純収益",
      value: "2.365億ユーロ（約438億円）",
      change: "前年比 +14% / 全社の10%",
      interpretation: "APACは成長を続けるが、全社に占める割合はまだ1割。日本を含む地域別の伸びしろと実行余地が残る。",
      sourceId: "adyen-annual-report-2025",
    },
    {
      label: "東京拠点のFTE",
      value: "49人",
      change: "40人から +23%",
      interpretation: "売上だけでは見えない日本への投入量を示す材料。年次報告書上は営業・サポート拠点として開示されている。",
      sourceId: "adyen-annual-report-2025",
    },
  ],
  growthDrivers: [
    {
      title: "店舗とオンラインをつなぐユニファイドコマース",
      evidence: "2025年のユニファイドコマース純収益は前年比30%増。対面決済は全決済取扱高の18%から22%へ上昇した。",
      japanMeaning: "小売、旅行・ホテル、D2Cで、EC・店舗・KIOSK・訪日客対応を同じ決済データで扱う需要と重なる。",
      sourceIds: ["adyen-annual-report-2025", "adyen-customers"],
    },
    {
      title: "プラットフォームと周辺機能への拡張",
      evidence: "2025年のプラットフォーム純収益は前年比50%増。2026年にはTalon.OneとOrbの買収を進め、販促・ロイヤルティ、請求まで製品範囲を広げている。",
      japanMeaning: "決済だけでなく、SaaS・マーケットプレイスの請求、販促、加盟店管理まで商談を広げられる一方、買収製品の日本対応時期は未開示。",
      sourceIds: ["adyen-annual-report-2025", "adyen-q1-2026", "adyen-talon-one", "adyen-orb"],
    },
    {
      title: "日本固有の決済・規制・運用へのローカライズ",
      evidence: "年次報告書は、PayPay追加、3Dセキュア義務化への対応、主要都市でのデータセンター運用試験を日本での進捗として明記した。",
      japanMeaning: "グローバル製品を持ち込む段階から、国内大手が選定できる機能・認証・可用性を整える段階へ進んでいる。",
      sourceIds: ["adyen-annual-report-2025", "adyen-wolt-japan"],
    },
  ],
  risks: [
    {
      title: "景気・決済量",
      disclosedRisk: "関税や通商政策が、特にAPACに本社を置く大手オンライン小売の成長を抑えた。消費や顧客投資の減速は決済量へ波及する。",
      companyResponse: "業種・地域・顧客の分散、手数料型モデル、外部環境の監視と顧客支援で影響を抑える。",
      genbaRead: "日本は地域分散に寄与するが、国内消費や訪日需要が弱まれば小売・旅行の案件拡大は遅れる。",
      sourceIds: ["adyen-annual-report-2025"],
    },
    {
      title: "競争・価格",
      disclosedRisk: "銀行、決済代行、業界特化ソフトウェア、決済オーケストレーション、新規参入との競争があり、一部競合は価格を攻められる。",
      companyResponse: "持続不可能な価格競争を避け、単一基盤、機能、グローバルなライセンスとデータで差別化する。2025年の解約率は特定1社を除き1%未満。",
      genbaRead: "日本では国内PSPの関係性と移行負荷が強い。手数料ではなく、承認率・運用費・海外展開を含む総効果を証明できるかが鍵。",
      sourceIds: ["adyen-annual-report-2025"],
    },
    {
      title: "サイバー・可用性",
      disclosedRisk: "情報セキュリティと停止リスクは高い。2025年にはDDoS攻撃で一時的なサービス影響が1件発生した。",
      companyResponse: "単一障害点を避ける設計、十分な処理能力、情報セキュリティ指標、脅威監視、原因分析と基盤強化を実施した。",
      genbaRead: "決済停止の影響が大きい国内大手ほど、国内データセンター、障害対応、復旧目標を営業が具体的に説明できる必要がある。",
      sourceIds: ["adyen-annual-report-2025"],
    },
    {
      title: "規制・ローカライズ実行",
      disclosedRisk: "国ごとの規制対応とグローバル展開は複雑で、限られた人員を配分するため、すべての市場で同じ速度の現地化はできない。",
      companyResponse: "自社ライセンス、現地のコンプライアンス体制、重点市場への選択投資で対応。日本では3Dセキュア、PayPay、データセンター試験を進めた。",
      genbaRead: "日本の優先度は投資実績から確認できるが、国内機能の同等性、開発優先順位、拠点の拡張速度は面接で確かめたい。",
      sourceIds: ["adyen-annual-report-2025"],
    },
  ],
  japanCommitment: {
    verdict: "継続投資を確認。ただし日本単体の事業規模は非開示",
    summary: "人員増、責任者の任命、現地アクワイアリング、対面決済、国内決済手段、認証、データセンター試験、大手顧客の展開が一方向に積み上がっているため、短期的な実験ではなく重点市場として運営していると読める。ただし、日本の純収益や市場シェアを伴う開示はない。",
    signals: [
      { year: "2021", title: "国内アクワイアリング開始", detail: "日本の取引を現地で処理する体制を投入し、国内決済の基盤を作った。", sourceIds: ["adyen-acquiring-japan"] },
      { year: "2022", title: "対面決済・ユニファイドコマース開始", detail: "オンラインに加えて店舗決済へ範囲を広げ、日本でのオムニチャネル提案を可能にした。", sourceIds: ["adyen-unified-commerce-japan"] },
      { year: "2024", title: "日本責任者と対面決済機能を強化", detail: "日本カントリーマネージャーを任命し、Tap to Pay on iPhoneの国内提供を開始した。", sourceIds: ["adyen-country-manager-japan", "adyen-tap-to-pay-japan"] },
      { year: "2025", title: "人員・決済手段・基盤・国内大手を同時に拡張", detail: "東京FTEは40人から49人へ増加。PayPay、3Dセキュア対応、データセンター試験に加え、星野リゾートで国内外施設への展開を進めた。", sourceIds: ["adyen-annual-report-2025", "adyen-customers"] },
    ],
    unknowns: [
      "日本単体の純収益、成長率、顧客数、市場シェア",
      "営業人員の目標達成率、採用後に再現すべき生産性",
      "国内データセンターの本番運用時期と対象範囲",
      "買収したTalon.One・Orbの日本語・国内決済対応ロードマップ",
    ],
  },
  scenarios: [
    {
      scenario: "基本",
      title: "大手小売・旅行・デジタル企業で段階的に拡大",
      body: "オムニチャネル、訪日客、国内決済手段、認証・不正対策を入口に、既存の国内大手事例を横展開する。市場は伸びるが、移行期間が長いため成長は段階的になる。",
    },
    {
      scenario: "上振れ",
      title: "国内基盤と製品拡張が大型案件を加速",
      body: "国内データセンターの本番運用、追加の国内決済手段、星野リゾート級の全社展開、Adyen Upliftや買収製品の日本投入が重なると、決済以外も含む案件単価と導入範囲が広がる。",
    },
    {
      scenario: "下振れ",
      title: "移行負荷と国内競争で投資回収が遅れる",
      body: "国内PSP・Stripeとの価格や関係性、基幹・POS移行の長期化、規制・セキュリティ事故、グローバル製品の日本対応遅れが重なると、人員投資に対して売上の立ち上がりが遅れる。",
    },
  ],
  sourceIds: [
    "adyen-annual-report-2025",
    "adyen-q1-2026",
    "adyen-acquiring-japan",
    "adyen-unified-commerce-japan",
    "adyen-country-manager-japan",
    "adyen-customers",
  ],
};

built["mistral-ai"] = buildPreEntryIntelligence({
  checkedAt, slug: "mistral-ai", name: "Mistral AI", homepage: "https://mistral.ai/", growthUrl: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/", careersUrl: "https://jobs.ashbyhq.com/mistral.ai", customersUrl: "https://mistral.ai/news/", trustUrl: "https://trust.mistral.ai/", apacUrl: "https://jobs.ashbyhq.com/mistral.ai/d6dc75fc-714b-437c-8ff4-b43505151bd9", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", linkedinUrl: "https://www.linkedin.com/company/mistralai/",
  salesSnapshot: "Mistral AIは、CIO・CTO・AI leader・Security・business部門が抱えるmodel選定、data control、production化、cost、sovereigntyの課題をfrontier model、Studio、agent、private deployment、Mistral Computeで解く会社。SingaporeでAPAC初のtechnical supportやPeople Opsを採用しているが、Japan専任GTMは未確認。global momentumと日本でのdelivery readinessを分けて観測する。",
  growthSummary: "2025年9月に€1.7BのSeries Cを€11.7B post-money valuationで調達。SingaporeでAPAC technical support、People Ops、Solutions人員を採用する一方、Japan法人・Tokyo求人・国内顧客事例は未確認。",
  verdict: "進出可能性は中。資本・製品・SingaporeのAPAC基盤は強いが、日本語品質、local delivery、国内referenceが不足",
  entryNarrative: "Mistral AIは€1.7B Series C、frontier/open-weight models、enterprise Studio、private deployment、Computeを持ち、SingaporeでAPAC supportとPeople infrastructureを構築している。APAC求人がJapaneseを歓迎する例もあるが、Japan territory、Tokyo office、日本法人、国内顧客事例を示さないため、日本進出の事実とは扱わない。日本で成立するには、日本語model評価、data residency・sovereigntyの説明、local AI engineer・support、SI・cloud partner、production lighthouse customerが必要。",
  headcount: "1,001〜5,000人規模", headcountDetail: "LinkedIn企業ページの会社規模レンジ。公式の厳密な在籍人数ではない。", apacPresence: "SingaporeでAPAC初のEnterprise technical support、People Ops、Solutions職を採用し、Singapore政府を含むpublic-sector活動も公式発表。", productLanguage: "multilingual modelとJapaneseを歓迎するAPAC support求人は確認できるが、日本語UI、model品質、support SLA、国内data residencyの同等性は未確認。",
  milestones: [
    { year: "2023", label: "創業", detail: "open frontier AIを掲げParisで創業。", source: "company" },
    { year: "2023", label: "Mistral 7B", detail: "初のopen-weight modelを公開。", source: "company" },
    { year: "2025", label: "Mistral Compute", detail: "private integrated AI infrastructureへ拡張。", source: "company" },
    { year: "2025", label: "Series C", detail: "€1.7B、€11.7B post-money valuation。", source: "growth" },
    { year: "2026", label: "Singapore APAC体制", detail: "regional support・People・Solutionsの採用を確認。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式発表で紹介されるenterprise・public-sectorの利用は、chat導入だけでなく、proprietary knowledge、regulated workflow、private infrastructure、domain-specific modelをproductionへ置く目的を示す。" },
    { title: "製品の成り立ちから見る課題", body: "open-weight frontier modelから始まり、API、Le Chat、Studio、agents、Forge、Computeへ広げ、model accessだけでは閉じないcustomization、evaluation、deployment、sovereigntyをfull stackで扱う。" },
    { title: "外部環境の要求から見る課題", body: "企業・政府は生成AIの速度を求める一方、機密data、model risk、vendor concentration、計算資源、説明責任を統制する必要がある。model精度だけでなくproduction architectureとoperating modelが投資判断になる。" },
  ],
  narrative: [
    { label: "背景", body: "企業は複数modelとAI pilotを増やし、business部門は早期production化を求めている。" },
    { label: "課題", body: "data access、evaluation、security、deployment、cost、ownerが分断し、PoCからmission-critical workflowへ進まない。" },
    { label: "解決策", body: "一つの高価値workflowでmodel、grounding、evaluation、guardrail、deployment、human approvalを設計し、品質・速度・cost・exceptionを測る。" },
    { label: "選定の理由", body: "OpenAI、Anthropic、Google、Meta、国内LLM、hyperscalerとの比較で、open-weight、private deployment、custom model、European sovereignty、full-stack supportが要件に合う場合に選ばれる。" },
  ],
  openingHook: "現在のAI PoCのうち、proprietary dataと権限を守りながらproductionで毎週使われ、品質とcostを説明できるworkflowは何件ありますか。", valueHypothesis: "production化率、task cycle、quality、human review、exception、inference cost、deployment time、active use、business outcomeを測る。", objection: "OpenAI、Anthropic、Azure・AWS・Googleの既存契約で十分。", reframe: "model benchmarkだけでなく、private deployment、customization、data control、evaluation、migration option、production supportを含むTCOとstrategic controlで比較する。",
  facts: [
    { label: "Series C", value: "€1.7B", detail: "2025年9月の会社発表。", source: "growth" },
    { label: "評価額", value: "€11.7B", detail: "Series C post-money。", source: "growth" },
    { label: "製品範囲", value: "ModelsからComputeまで", detail: "API、Studio、agents、private infrastructureを展開。", source: "company" },
    { label: "APAC拠点", value: "Singapore", detail: "support・People・Solutions求人を確認。", source: "apac" },
    { label: "APAC support", value: "first regional hire", detail: "Enterprise technical support求人。", source: "apac" },
    { label: "日本求人", value: "未確認", detail: "Japan・Tokyo専任求人なし。", source: "careers" },
  ],
  customers: [
    { company: "ASML", products: "Mistral AI models / joint research", outcome: "Series Cのlead investor兼strategic partnerとして、engineering・semiconductor領域の共同研究を発表。", implication: "high-stakes industrial AIのstrategic proof。" },
    { company: "CMA CGM", products: "Mistral AI", outcome: "enterprise・industry向けstrategic partnershipの代表例として公式に紹介。", implication: "global operationへdomain AIを導入するproof。" },
    { company: "Singapore public sector", products: "AI for Citizens", outcome: "public institutionsとAI活用を進める国の一つとして公式発表。", implication: "APACでのpublic-sector proximityを示すがJapan proofではない。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "riskとaccountability", detail: "日本のAI事業者ガイドラインは人間中心、透明性、security、accountabilityを重要事項とする。", caveat: "Mistral AIの適合性や法的結論を示すものではない。" },
    { label: "AI sovereignty", value: "model・data・compute control", detail: "regulated enterpriseではdata location、model access、subprocessor、exit optionがarchitecture判断になる。", caveat: "必要条件は業界・data・use caseで異なる。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。SingaporeのAPAC運用基盤はできつつあるがJapan固有のGTM・delivery proofは未確認",
    factSignals: [
      { title: "資本余力", body: "€1.7B Series Cと€11.7B valuationはR&Dと国際展開を支える規模。", sourceIds: ["mistral-ai-growth"] },
      { title: "APAC support基盤", body: "SingaporeでAPAC初のEnterprise technical supportを採用し、regional customer operationを内製化。", sourceIds: ["mistral-ai-apac", "mistral-ai-careers"] },
      { title: "full-stack portfolio", body: "open-weight model、API、Studio、agents、Forge、Computeまで広げ、regulated enterpriseのdeployment選択肢を持つ。", sourceIds: ["mistral-ai-company"] },
      { title: "日本課題との親和", body: "data control、private deployment、AI governance、industry modelは日本の大企業・公共領域の要求と接続する。", sourceIds: ["mistral-ai-company", "mistral-ai-external"] },
    ],
    hurdles: [
      { title: "Japan固有のproofがない", body: "日本法人、Tokyo office、Japan求人、国内顧客事例を確認できない。", sourceIds: ["mistral-ai-careers", "mistral-ai-customers"] },
      { title: "日本語品質と運用", body: "日本語model評価、UI、documentation、support SLA、prompt・RAG品質の同等性が未確認。", sourceIds: ["mistral-ai-company", "mistral-ai-apac"] },
      { title: "delivery capacity", body: "private・custom deploymentはAI engineer、security、data、change managementをlocalで束ねる必要がある。", sourceIds: ["mistral-ai-company", "mistral-ai-trust"] },
      { title: "競争と既存契約", body: "hyperscaler、OpenAI、Anthropic、Google、Meta、国内LLM・SIがbundleとlocal relationshipを持つ。", sourceIds: ["mistral-ai-company"] },
    ],
    readinessConditions: [
      { title: "Japan lighthouse customer", body: "regulated enterpriseまたは公共領域でproduction成果を公開。" },
      { title: "日本語同等性", body: "model、RAG、UI、evaluation、supportを主要workflowで検証。" },
      { title: "local technical pod", body: "AE、AI engineer、support、securityを日本時間で提供。" },
      { title: "cloud・SI partner", body: "infrastructure、integration、governance、changeを共同delivery。" },
      { title: "repeatable economics", body: "Japan pipeline、ACV、deployment cost、renewalが専任組織を支える。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本法人・office", "日本顧客事例", "日本語model評価・site", "国内cloud・SI partner", "Singapore APAC teamのJapan territory"],
  },
  sourceIds: ["mistral-ai-company", "mistral-ai-growth", "mistral-ai-careers", "mistral-ai-customers", "mistral-ai-trust", "mistral-ai-apac", "mistral-ai-external", "mistral-ai-linkedin"],
  salesMotion: "CIO・CTO・Chief AI Officer・Securityとhigh-value workflowを選び、AI engineer・platform・partnerとevaluationからprivate/cloud productionへ進めるtechnical Enterprise sale。", careerValue: "frontier model、enterprise AI、sovereign deployment、AI infrastructure、public sector、APAC market buildを横断する可能性。", leader: { name: "Arthur Mensch", role: "CEO / Co-founder", read: "frontier model研究を起点に、open-weightとenterprise controlを両立するfull-stack AI companyへ拡張。" },
  solutions: [
    { name: "Mistral Models / API", valueProp: "frontier・open-weight modelをAPIまたはself-managedで利用。", url: "https://mistral.ai/products", competitors: "OpenAI、Anthropic、Google、Meta、国内LLM。", differentiation: "open-weight option、効率、deployment flexibility。" },
    { name: "Mistral AI Studio", valueProp: "prompt、agent、evaluation、governed workflowをproduction管理。", url: "https://mistral.ai/news/ai-studio/", competitors: "Azure AI Foundry、Vertex AI、Bedrock、Databricks。", differentiation: "Mistral modelとenterprise application lifecycleの統合。" },
    { name: "Mistral Compute", valueProp: "GPUからAPI・serviceまでprivate integrated AI infrastructureを提供。", url: "https://mistral.ai/news/mistral-compute/", competitors: "hyperscaler AI infrastructure、NVIDIA stack、private cloud。", differentiation: "sovereign・private deploymentとfull-stack ownership。" },
  ],
  fitTags: ["日本未進出", "Generative AI", "Foundation Model", "Enterprise AI", "Private Deployment", "AI Infrastructure", "APAC"], comparisons: [
    { arena: "Frontier Models", companies: ["Mistral AI", "OpenAI", "Anthropic", "Google"], why: "quality、cost、control、deployment" },
    { arena: "Open-weight AI", companies: ["Mistral AI", "Meta", "domestic LLM"], why: "license、日本語、運用、sovereignty" },
    { arena: "Enterprise AI Platform", companies: ["Mistral Studio", "Azure", "AWS", "Google Cloud"], why: "governance、integration、delivery" },
  ],
});

export const daily20260816IntelligenceBySlug = built;
