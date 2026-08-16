import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";

const checkedAt = "2026-08-16";

const profiles: Profile[] = [
  {
    checkedAt, slug: "adyen", name: "Adyen", jobUrl: "https://careers.adyen.com/vacancies/7601353-team-lead-sales", officialUrl: "https://www.adyen.com/ja_JP/", customersUrl: "https://www.adyen.com/ja_JP/press-and-media/hoshino-resorts-rolls-out-adyen-payment-platform", externalUrl: "https://www.meti.go.jp/policy/mono_info_service/cashless/index.html", financeUrl: "https://investors.adyen.com/financials/2025", publicInfo: { ticker: "ADYEN", exchange: "Euronext Amsterdam", listedSince: "2018年" },
    salesSnapshot: "Adyenは、Digital・Finance・Retail・Operationsが抱えるonline・店頭・platform決済の分断、承認率、不正、reconciliation、越境展開の課題をsingle platformで解く会社。TokyoのTeam Lead, Salesは日本のEnterprise sellerを率い、coaching、pipeline、forecast、executive relationshipを持つ。PSP置換ではなく、顧客体験と収益基盤の再設計をteamで再現する営業が面白い。",
    growthSummary: "Adyenは2025年通期のnet revenueを€2.36B、processed volumeを€1.47T、EBITDA marginを55%と公表。日本単体の売上・顧客数・営業達成率は非公開。",
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
      { label: "2025 net revenue", value: "€2.36B", detail: "Adyen 2025 annual report。", source: "finance" },
      { label: "2025 processed volume", value: "€1.47T", detail: "会社公表値。", source: "finance" },
      { label: "2025 EBITDA margin", value: "55%", detail: "会社公表値。", source: "finance" },
      { label: "日本拠点", value: "Shibuya, Tokyo", detail: "Tokyo officeとJapan Country Managerを確認。", source: "company" },
      { label: "国内顧客事例", value: "星野リゾート", detail: "2025年7月から界で先行導入。", source: "customers" },
      { label: "現行営業求人", value: "1件", detail: "Team Lead, Sales。", source: "job" },
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
    role: "Team Lead, SalesがEnterprise sales managerをcoachingし、pipeline、forecast、deal execution、C-level relationship、日本のnew business growthを担う。Head of Sales Japanへreportする。", organization: "office-firstのTokyo teamでSales、Account Management、Solution Engineering、Implementation、Risk、Product等をdealごとに束ねるmatrix型GTM。", careerValue: "Payments、Unified Commerce、FinTech、Enterprise transformation、people managementを横断する経験。", globalHeadcount: "4,000人超", japanPresence: "Adyen Japan / Shibuya Scramble Square、local acquiring、国内顧客事例、Japan sales leadership求人", japanSince: "2021年に日本でacquiring capabilityを開始",
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
  { id: "adyen-cashless-2025", label: "経済産業省 2025年キャッシュレス決済比率", url: "https://www.meti.go.jp/press/2025/03/20260331006/20260331006.html", kind: "公的機関", scope: "2025年実績・2030年目標・長期目標", checkedAt },
  { id: "adyen-acquiring-japan", label: "Adyen 日本でのアクワイアリング開始", url: "https://www.adyen.com/ja_JP/press-and-media/adyen-expands-acquiring-capabilities-to-japan", kind: "企業公式", scope: "日本市場への製品投資・現地決済処理", checkedAt },
  { id: "adyen-unified-commerce-japan", label: "Adyen 日本でのユニファイドコマース開始", url: "https://www.adyen.com/press-and-media/adyen-brings-unified-commerce-to-japan", kind: "企業公式", scope: "日本の対面決済・チャネル統合", checkedAt },
  { id: "adyen-country-manager-japan", label: "Adyen 日本カントリーマネージャー就任", url: "https://www.adyen.com/ja_JP/press-and-media/adyen-names-adam-brownstein-as-country-manager-in-japan", kind: "企業公式", scope: "日本GTMへの継続投資", checkedAt },
  { id: "adyen-on-japan", label: "Adyen × On Japan", url: "https://www.adyen.com/ja_JP/knowledge-hub/on-running-multi-channel", kind: "企業公式", scope: "東京店舗とオンライン決済の統合", checkedAt },
  { id: "adyen-wolt-japan", label: "Adyen 日本の3Dセキュア動向・Wolt事例", url: "https://www.adyen.com/ja_JP/knowledge-hub/post-3ds-mandate-in-japan", kind: "企業公式", scope: "本人認証・不正対策・購入完了率", checkedAt },
);

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
