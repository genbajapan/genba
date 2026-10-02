import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-03";

const backMarket = buildDailyCompanyIntelligence({
  slug: "back-market", name: "Back Market", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/backmarket/7df95846-0fb0-4a42-9f35-71674ee096fd", officialUrl: "https://www.backmarket.com/en-us/about-us",
  customersUrl: "https://www.backmarket.com/en-us/seller/home", financeUrl: "https://www.backmarket.com/en-us/c/press-release/2025-business-growth",
  problem: "整備済み電子機器は新品より安く環境負荷を抑えられる一方、品質、保証、出品者の信頼性、在庫、価格がばらつき、購入判断と事業者の販売拡大が難しい課題を解く。",
  origin: "Thibaud Hug de Larauze、Quentin Le Brouster、Vianney Vauteが、電子機器の大量生産・短期買い替えに代わる信頼できる整備済み市場を作るため、2014年にパリで創業した。",
  externalNeed: "端末価格の上昇、電子廃棄物、企業のIT費用と環境目標が重なるほど、購入者と企業は価格だけでなく、品質検査、保証、返品、端末寿命、供給の安定性を一緒に求める。",
  solution: "専門事業者を審査し、品質基準、商品評価、保証、返品、顧客対応を市場の共通ルールとして整え、整備済み端末の売買を仲介する。",
  selection: "新品・中古販売店・他の市場と比べ、出品者審査、端末品質、保証、返品、在庫と価格、販売後対応、環境効果の根拠で比較する。",
  growth: "会社公式は2026年7月時点で18百万人の顧客と17市場、2025年にはGMV 30億ユーロ予測を公表。日本向けサービスと東京のAPAC組織を展開し、出品者開拓職を募集している。",
  role: "Business Development Manager, Japanが新規出品者の獲得・導入と既存出品者の品揃え、調達、価格、品質、販売成長を持つ。",
  organization: "日本向けサービス、東京のAPAC組織、2026年の原宿期間限定店舗を確認。日本法人名と正確な国内在籍人数は未確認。",
  career: "循環型コマースで供給者獲得、品質管理、価格・在庫、販売成長、顧客信頼を同時に動かす市場運営・事業開発経験。",
  globalHeadcount: "501〜1,000人規模（外部公開レンジ、現員は変動）", japanPresence: "日本向けサービスと東京のAPAC組織、東京勤務の公式求人を確認。国内在籍人数は未確認", japanSince: "日本向けサービスを展開、2026年に原宿で期間限定店舗を実施",
  customer: { company: "認定出品事業者", outcome: "公式出品者ページは17カ国の専門出品者1,800社、200超の商品分類、販売・価格・在庫・品質を管理する機能を案内する。" },
  facts: [["創業","2014年","パリで創業。"],["顧客","1,800万人","2026年7月、会社公式。"],["市場","17市場","会社公式。"],["GMV予測","30億ユーロ","2025年会社予測。監査済み売上ではない。"],["出品者","1,800社","会社公式の出品者ページ。"],["日本求人","1件","Business Development Manager, Japan。"]],
  products: [["整備済み端末マーケットプレイス","審査済み事業者の端末を品質区分、保証、返品制度とともに販売する。","https://www.backmarket.co.jp/ja-jp"],["Seller Hub","出品、注文、品質指標、価格、在庫、調達、顧客対応を管理する。","https://www.backmarket.com/en-us/seller/home"],["Back Market Pro","企業の端末調達を整備済み製品で支援する。","https://www.backmarket.com/en-us/c/press-release/2025-business-growth"]],
  competitors: "新品端末、Amazon Renewed、各国の中古端末市場、通信会社・小売の認定中古品",
  leader: ["Clément Petit","Chief Executive Officer","https://www.backmarket.com/en-us/c/hub/press"], local: ["未確認","General Manager APAC","https://jobs.ashbyhq.com/backmarket/7df95846-0fb0-4a42-9f35-71674ee096fd"],
  work: ["ハイブリッド","Tokyo, Japan","週3日程度の出社を想定","週2日のリモート勤務","四半期ごとに1週間のリモート勤務を案内"],
}, checkedAt);
backMarket.sources.push(
  { id: "back-market-japan", label: "Back Market Tokyo pop-up", url: "https://www.backmarket.com/en-us/c/technology/harajuku-japan-refurbished-tech-pop-up-store", kind: "企業公式", scope: "日本展開・東京の組織", checkedAt },
  { id: "back-market-quality", label: "Back Market seller standards", url: "https://www.backmarket.com/en-us/c/news/who-sells-on-back-market", kind: "企業公式", scope: "出品者審査・品質基準", checkedAt },
  { id: "gbiz-headcount-back-market", label: "gBizINFO Back Market法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
backMarket.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本向けサービスと東京の組織は確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-back-market" };

const bounce = buildDailyCompanyIntelligence({
  slug: "bounce", name: "Bounce", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0", officialUrl: "https://usebounce.com/",
  customersUrl: "https://usebounce.com/reviews", financeUrl: "https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0",
  problem: "旅行者は到着前後や移動中に手荷物へ行動を縛られ、ホテルや小売店は安全に使える空き場所を需要と結び付けられない課題を解く。",
  origin: "多くの都市を移動してきたCody CandeeとAleksandar Rakicが、持ち物のために一日の行動を決める不便を減らすため、固定の倉庫や車両を持たず地域店舗を活用する形で創業した。",
  externalNeed: "訪日旅行と都市間移動が増えるほど、旅行者は駅や観光地の近くで予約できる保管場所を求め、提携店舗は安全性、本人確認、受け渡し、補償、需要予測を標準化する必要がある。",
  solution: "ホテル、小売店、飲食店などの空き場所を予約可能な手荷物保管拠点としてネットワーク化し、検索、予約、決済、補償、レビューを提供する。",
  selection: "駅ロッカー、ホテル預かり、他の保管サービスと比べ、拠点密度、営業時間、予約確実性、保管品質、補償、価格、提携店の運用負荷で比較する。",
  growth: "会社公式サイトは世界2万超の保管拠点と100万件超のレビューを掲載。日本では東京、大阪、京都、名古屋、横浜などで提供し、大手提携と配送・ロッカー事業を担う東京の事業開発職を募集している。",
  role: "Business Development Managerが旅行・不動産・交通の大手提携を開拓し、日本の手荷物保管網と新しい配送・ロッカー事業を伸ばす。",
  organization: "日本の複数都市でサービス提供と東京勤務求人を確認。日本法人名、国内オフィス、正確な国内在籍人数は未確認。",
  career: "需要と供給が同時に必要な旅行市場で、都市ごとの拠点密度、大手提携、現場品質、新規事業を0→1で作る経験。",
  globalHeadcount: "51〜200人規模（外部公開レンジ）", japanPresence: "東京・大阪・京都・名古屋・横浜などでサービス提供。日本法人名・国内在籍人数は未確認", japanSince: "日本の複数都市で現行サービスを確認",
  customer: { company: "旅行者と地域の提携店舗", outcome: "公式サイトは世界2万超の保管拠点と100万件超の利用者レビューを掲載し、ホテルや小売店の空き場所を予約可能な保管網へ変えている。" },
  facts: [["創業背景","都市移動の不便","持ち物に行動を縛られる課題から開始。"],["保管拠点","2万超","会社公式サイト。"],["レビュー","100万件超","会社公式サイト。"],["日本提供都市","東京・大阪・京都など","現行サービスで確認。"],["新規事業","配送・ロッカー","公式求人に日本での0→1を記載。"],["日本求人","1件","Business Development Manager。"]],
  products: [["Luggage Storage Marketplace","近隣の提携店舗を検索・予約し、短時間から手荷物を預ける。","https://usebounce.com/"],["Partner Network","ホテルや小売店の空き場所を保管拠点として運営する。","https://usebounce.com/"],["Delivery / Locker","日本で立ち上げを検討する新規事業。現行提供範囲は未確認。","https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0"]],
  competitors: "駅・空港ロッカー、ホテル預かり、Stasher、LuggageHero、地域の手荷物配送・保管事業者",
  leader: ["Cody Candee","Co-Founder and Chief Executive Officer","https://marketing.usebounce.com/blog/the-story-behindbounce"], local: ["未確認","Japan Business Development","https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0"],
  work: ["未確認","Tokyo, Japan","出社日数は未記載","完全リモートの明記なし","契約職。提携先訪問と出張あり"],
}, checkedAt);
bounce.sources.push(
  { id: "bounce-origin", label: "The story behind Bounce", url: "https://marketing.usebounce.com/blog/the-story-behindbounce", kind: "企業公式", scope: "創業者・創業背景・事業モデル", checkedAt },
  { id: "gbiz-headcount-bounce", label: "gBizINFO Bounce法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
bounce.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本でのサービスと東京勤務求人は確認したが、対応する日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-bounce" };

const altaAres = buildDailyCompanyIntelligence({
  slug: "alta-ares", name: "Alta Ares", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/alta-ares/7c82c080-2c9a-41cf-8936-d5719b59f47b", officialUrl: "https://www.altaares.com/",
  customersUrl: "https://www.altaares.com/", financeUrl: "https://www.altaares.com/blog-post/alta-ares-raises-eu50m-to-become-a-leading-european-player-in-air-defense",
  problem: "小型無人機と巡航ミサイルが低コスト・多数で運用される一方、既存の高価な迎撃手段だけでは検知、判断、迎撃数、費用のバランスを取りにくい課題を解く。",
  origin: "欧州の防空能力を大量生産可能なAI誘導型迎撃機とソフトウェアで再構築するため、2024年にパリで創業した。",
  externalNeed: "無人機による脅威と防衛生産の逼迫が強まるほど、政府と軍はセンサー、指揮統制、迎撃機を接続し、費用対効果、供給能力、同盟国との相互運用性を説明する必要がある。",
  solution: "AI誘導型迎撃機、センサー、指揮・統制ソフトウェアを組み合わせ、無人機や巡航ミサイルの検知から対応までを支援する。",
  selection: "迎撃性能だけでなく、実戦・演習での検証、単価、量産能力、センサー接続、電子戦耐性、現地産業との連携、輸出・調達要件で比較する。",
  growth: "会社公式は2026年6月に5,000万ユーロの資金調達を発表。公式求人は約90人、累計6,000万ドル超の調達、当年の売上40倍を説明し、日本最初の専任事業開発職を募集している。",
  role: "Business Development Manager — Japanが防衛省・防衛装備庁、自衛隊、産業パートナーとの関係、案件、実証、契約、現地展開を作る。",
  organization: "日本法人・国内拠点・雇用主体は未確認。東京・名古屋で日本市場最初の専任者を募集している。",
  career: "防衛調達、政府渉外、航空宇宙、産業提携、実証、契約を横断し、新市場の信頼と導入条件を作る経験。",
  globalHeadcount: "約90人（公式求人、2026年10月確認）", japanPresence: "日本法人・国内拠点は未確認。東京・名古屋で最初の専任事業開発職を募集", japanSince: "未進出",
  customer: { company: "欧州・中東・アジアの防衛機関", outcome: "会社公式は複数地域の演習・実証でシステムを展開し、複数年・数百万ユーロ規模の契約を獲得したと説明。顧客名と日本の実績は未確認。" },
  facts: [["創業","2024年","パリで創業。"],["従業員","約90人","公式求人。"],["資金調達","5,000万ユーロ","2026年6月、会社公式。"],["累計調達","6,000万ドル超","公式求人。"],["日本体制","未確認","法人・拠点・雇用主体は未確認。"],["日本求人","1件","Business Development Manager — Japan。"]],
  products: [["AI-guided Interceptors","無人機・巡航ミサイルへ対応する自律・協調型迎撃機。","https://www.altaares.com/"],["Command and Control Software","センサー情報を統合し、脅威評価と迎撃判断を支援する。","https://www.altaares.com/"],["Sensor and Counter-UAS Stack","検知から追跡、判断、対応までを一体化する。","https://www.altaares.com/"]],
  competitors: "既存の防空・対無人機メーカー、Anduril、Helsing、各国の防衛産業・共同開発",
  leader: ["Mathieu Mabin","Co-Founder and Chief Executive Officer","https://www.altaares.com/"], local: ["未確認","Japan Business Development","https://jobs.ashbyhq.com/alta-ares/7c82c080-2c9a-41cf-8936-d5719b59f47b"],
  work: ["未確認","Tokyo / Nagoya, Japan","出社日数は未記載","完全リモートの明記なし","日本・アジア・欧州への定期出張を想定"],
  preEntry: {
    verdict: "進出可能性は高め。日本市場最初の専任職を明記した一方、日本法人、国内拠点、雇用主体、契約・輸出管理、国内産業パートナーは未確認。",
    signal: "東京・名古屋を勤務地とするBusiness Development Managerを、日本市場最初の専任者として募集している。",
    hurdle: "防衛装備の調達、輸出管理、情報保全、国内産業との連携、保守・量産、日本での雇用・契約主体を確認できない。",
    conditions: ["日本での雇用・契約・情報保全を担う法的主体を整える。", "防衛省・防衛装備庁と国内産業パートナーに対する実証・調達経路を作る。", "輸出管理、機密情報、相互運用性、保守、量産の責任分界を明確にする。", "日本固有の脅威・運用条件で性能と費用を検証する。"],
    watches: ["日本法人・国内拠点", "国内産業パートナー", "防衛省・防衛装備庁での実証", "日本向け契約・量産", "追加の技術・運用採用"],
  },
}, checkedAt);
altaAres.sources.push(
  { id: "alta-ares-funding", label: "Alta Ares raises €50M", url: "https://www.altaares.com/blog-post/alta-ares-raises-eu50m-to-become-a-leading-european-player-in-air-defense", kind: "企業公式", scope: "資金調達・製品・展開地域", checkedAt },
  { id: "gbiz-headcount-alta-ares", label: "gBizINFO Alta Ares法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
altaAres.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本求人は確認したが、日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-alta-ares" };
if (altaAres.marketStatus.japanGrowth) {
  altaAres.marketStatus.japanGrowth.headline = "日本市場最初の専任事業開発職を東京・名古屋で募集";
  altaAres.marketStatus.japanGrowth.narrative = "2026年10月3日の公式求人で日本市場最初の専任者を確認。日本法人、国内拠点、雇用主体、国内契約・実証は未確認。";
}

for (const intelligence of [backMarket, bounce, altaAres]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export function applyDaily20261003Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.hightouch;
  if (!intelligence) return;
  const sourceId = "hightouch-enterprise-ae-closure-20261003";
  const url = "https://job-boards.greenhouse.io/hightouch/jobs/5836057004";
  if (!intelligence.sources.some((source) => source.id === sourceId)) {
    intelligence.sources.push({ id: sourceId, label: "Enterprise Account Executive - APAC (Japan)求人終了", url, kind: "企業公式", scope: "公式URLの404と現行採用一覧を確認", checkedAt });
  }
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Enterprise Account Executive - APAC (Japan)求人終了"),
    { year: "2026.10.03", label: "Enterprise Account Executive - APAC (Japan)求人終了", detail: "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", sourceId },
  ];
}

export const daily20261003IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "back-market": backMarket,
  bounce,
  "alta-ares": altaAres,
};
