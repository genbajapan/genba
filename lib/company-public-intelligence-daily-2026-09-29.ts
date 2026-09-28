import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-29";

const kpler = buildDailyCompanyIntelligence({
  slug: "kpler", name: "Kpler", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/kpler/4aeb9439-99c7-4013-b6c6-493b36d50a78", officialUrl: "https://www.kpler.com/company/about-us",
  customersUrl: "https://www.kpler.com/solutions/ai", financeUrl: "https://www.kpler.com/company/about-us",
  problem: "船舶、貨物、需給、価格、在庫、制裁リスクの情報が分断し、現物取引の変化と収益・供給への影響を早く判断しにくい課題を解く。",
  origin: "2014年にFrançois CazorとJean Maynierが台所の二人の技術者としてLNGの不透明な現物フローを可視化する製品から始めた。",
  externalNeed: "地政学、制裁、航路変更、気候、供給制約が同時に動くほど、企業は過去の価格だけでなく、どの貨物がどこへ動き、需給とリスクがどう変わるかを継続的に判断する必要がある。",
  solution: "船舶信号、取引・港湾・貨物データ、専門家情報、長期時系列を統合し、エネルギー・海運・コモディティの現物フローとリスクを分析する。",
  selection: "端末の情報量だけでなく、独自データの鮮度・網羅性、現物フローの推定、業務導線、試用から利用定着、更新・複数市場への拡張で比較する。",
  growth: "会社公式は850人超・69カ国出身・13拠点を掲載し、1日13億件超のAIS信号、25万5千超の情報源、15年超の時系列を保有。東京で日本営業を募集し、2026年10月27日の東京オフィス開設記念イベントを案内。",
  role: "東京のCommercial Sales Manager - Japanが顧客開拓、試用、更新、追加販売、別製品提案を担い、Customer Successと顧客利用を拡大する。",
  organization: "東京の日本向け営業求人と、会社公式の東京オフィス開設記念イベントを確認。国内法人名、正確な在籍人数、日本事業責任者は未確認。",
  career: "エネルギー・海運・コモディティの専門知識を、データ利用、意思決定、更新、複数製品への拡張へ変える日本市場の企業営業経験。",
  globalHeadcount: "850人超（会社公式Career）", japanPresence: "東京の営業求人と2026年10月27日のオフィス開設記念イベントを会社公式で確認", japanSince: "2026年に東京オフィス開設を案内",
  customer: { company: "世界のエネルギー・海運・コモディティ企業", outcome: "会社公式はRio Tinto等の利用者の声を掲載するが、国内顧客名と日本での数値成果は今回確認できていない。" },
  facts: [["創業","2014年","LNGの現物フロー可視化から創業。"],["従業員","850人超","69カ国出身・13拠点。会社公式Career。"],["AIS信号","1日13億件超","会社公式。"],["情報源","25万5千超","会社公式。"],["東京イベント","2026年10月27日","東京オフィス開設記念として案内。"],["日本求人","1件","Commercial Sales Manager - Japan。"]],
  products: [["Kpler Trade Intelligence","世界の現物取引、需給、貨物、価格、リスクを分析。","https://www.kpler.com/"],["Maritime Intelligence","船舶の位置、航海、所有、リスクを可視化。","https://www.kpler.com/solutions/maritime"],["Risk & Compliance","制裁、所有、行動の信号から取引リスクを調べる。","https://www.kpler.com/solutions/risk-compliance"]],
  competitors: "S&P Global Commodity Insights、LSEG、Bloomberg、Vortexa、各社の内製分析",
  leader: ["Mark Cunningham","Chief Executive Officer","https://www.kpler.com/company/our-team"], local: ["未確認","日本事業責任者","https://www.kpler.com/company/our-team"],
  work: ["ハイブリッド","Tokyo","具体的な出社日数は未確認","完全リモートではない","日本顧客との対面活動とAPAC連携の頻度は選考で確認"],
}, checkedAt);
kpler.sources.push(
  { id: "kpler-tokyo-event", label: "Kpler Tokyo: A New Chapter", url: "https://www.kpler.com/ja-jp/event/kpler-tokyo-a-new-chapter", kind: "企業公式", scope: "東京オフィス開設記念イベント・開催日", checkedAt },
  { id: "gbiz-headcount-kpler", label: "gBizINFO Kpler法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
kpler.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京での採用とオフィス開設案内は確認したが、gBizINFOで対応する国内法人番号・事業所被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-kpler" };
kpler.companyStats.japanOffice = { value: "東京（詳細住所未確認）", detail: "会社公式が東京オフィス開設記念イベントを案内。詳細住所は今回確認できていない。", sourceId: "kpler-tokyo-event" };

const entrupy = buildDailyCompanyIntelligence({
  slug: "entrupy", name: "Entrupy", jobConfirmed: true,
  jobUrl: "https://www.entrupy.com/careers/apply/?gh_jid=5107413007", officialUrl: "https://www.entrupy.com/ja/",
  customersUrl: "https://www.entrupy.com/case_study/leading-european-retailer/", financeUrl: "https://www.entrupy.com/report/state-of-the-fake-report-2026/",
  problem: "高額商品の偽造、すり替え返品、鑑定者ごとの判断差により、小売・再販・質・市場運営者が在庫損失と信用低下を防ぎにくい課題を解く。",
  origin: "研究者・起業家のVidyuth Srinivasanらが、顕微画像と機械学習で本物と偽物を区別する研究を、現場で使える商品鑑定へ発展させた。",
  externalNeed: "偽造品が精巧になり再販と越境取引が広がるほど、企業は人の経験だけでなく、一貫した判定、証明書、異議時の責任、返品時の同一商品確認を運用として持つ必要がある。",
  solution: "アプリで撮影した詳細画像を、実物と偽造品の独自データと機械学習で照合し、真贋判定を一元管理して、偽造損失と判定時間を減らす。証明書、金銭補償、商品指紋によるすり替え防止も提供する。",
  selection: "公称精度だけでなく、対応ブランドとカテゴリ、平均判定時間、データ更新、異議申立て、金銭補償、日本語支援、店舗・倉庫・市場への組込みで比較する。",
  growth: "日本語公式サイトは90カ国超、精度99.86%、主要20超のバッグ・革小物ブランド対応を掲載。2026年公式レポートは9,000万超の参照画像と平均60秒未満の判定を公表し、日本でBDRを募集。",
  role: "日本のBDRが市場開拓と商談創出を、リモートのAuthentication Specialistが画像評価、判定品質、機械学習データ、顧客SLAを担う。",
  organization: "Entrupy Japan・東京。日本語サイトと国内電話窓口、公式求人のEntrupy Japanオフィスを確認。国内の正確な人数と責任者は未確認。",
  career: "AI鑑定を、偽造損失、返品不正、在庫回転、販売者・購入者の信頼へ翻訳する市場開拓、または人の専門判断を学習データと判定品質へ変える運用経験。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "Entrupy Japan・東京。日本語窓口と日本オフィスの公式求人を確認", japanSince: "2018年に東京拠点を会社公式で発表",
  customer: { company: "欧州の大手小売企業", outcome: "公式事例で6,200万ドル相当の在庫を保護し、疑わしい返品の検知により160万ドルを直接節約したと説明。日本での数値成果ではない。" },
  facts: [["日本展開","2018年","東京の物理拠点を会社公式で発表。"],["展開","90カ国超","日本語公式サイト。"],["鑑定精度","99.86%","会社公式。条件と対象カテゴリに留意。"],["参照画像","9,000万超","2026年会社レポート。"],["平均判定","60秒未満","2026年会社レポート。95%の鑑定。"],["日本求人","2件","BDRとAuthentication Specialist。"]],
  products: [["Bags & Leather Goods Authentication","バッグ・革小物をAIで鑑定し、証明書と金銭補償を提供。","https://www.entrupy.com/ja/luxury-authentication/"],["Return Fraud Detection","商品指紋で販売時と返品時の同一性を確認。","https://www.entrupy.com/return-fraud-detection/"],["MarketEdge","相場、状態、販売判断を鑑定業務と同じ導線で支援。","https://www.entrupy.com/ja/"]],
  competitors: "鑑定士、各市場の真贋保証、ブランド・小売の内製鑑定、画像AI鑑定企業",
  leader: ["Vidyuth Srinivasan","Co-Founder and Chief Executive Officer","https://www.entrupy.com/report/state-of-the-fake-report-2026/"], local: ["未確認","Entrupy Japan責任者","https://www.entrupy.com/ja/contact-us/"],
  work: ["ハイブリッド","Japan","具体的な出社日数と拠点住所は未確認","完全リモートではない","販売先、出張、APAC支援の範囲は選考で確認"],
}, checkedAt);
entrupy.sources.push(
  { id: "entrupy-japan-launch", label: "Entrupy expands into Japan", url: "https://www.entrupy.com/entrupy-expands-global-operations-into-japan/", kind: "企業公式", scope: "2018年の東京拠点・日本展開", checkedAt },
  { id: "entrupy-customer-case", label: "Entrupy leading European retailer case", url: "https://www.entrupy.com/case_study/leading-european-retailer/", kind: "企業公式", scope: "在庫保護・不正返品の数値成果", checkedAt },
  { id: "gbiz-headcount-entrupy", label: "gBizINFO Entrupy法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "entrupy-linkedin", label: "Entrupy LinkedIn会社ページ", url: "https://www.linkedin.com/company/entrupy/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
);
entrupy.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本語窓口とEntrupy Japanオフィス求人は確認したが、gBizINFOで対応する法人番号・事業所被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-entrupy" };

const sparta = buildDailyCompanyIntelligence({
  slug: "sparta-commodities", name: "Sparta", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/sparta-commodities/d1904eef-6762-4fe1-af9f-8a07235a9797", officialUrl: "https://www.spartacommodities.com/about/",
  customersUrl: "https://www.spartacommodities.com/", financeUrl: "https://www.spartacommodities.com/company-news/sparta-secures-42m-series-b-led-by-one-peak-to-transform-commodity-trading-with-ai-powered-insights-and-collaboration/",
  problem: "原油・石油製品の価格、先物曲線、貨物、輸送、ブレンド、裁定機会が表計算と複数端末へ分散し、取引デスクが同じ前提で先を読みにくい課題を解く。",
  origin: "元石油トレーダーのFelipe Elink SchuurmanとMiles Moseleyが、合計37年超の実務で感じた分断データと手作業への不満から、取引デスクの共通基盤を創業した。",
  externalNeed: "地政学、供給制約、航路、制裁、価格が同時に動くほど、取引会社は過去データの表示だけでなく、前提を共有し、複数の裁定・輸送・ブレンド案を早く検証する必要がある。",
  solution: "現物・金融価格、先物曲線、裁定、輸送、ブレンド、専門家情報、独自・第三者データを一つの共有画面とAI判断支援へ統合する。",
  selection: "総合端末の情報量だけでなく、石油取引の業務理解、前向きな信号、前提共有、データ系譜、商品横断、既存モデルへの配信で比較する。",
  growth: "2025年に4,200万ドルのSeries Bを調達。会社公式は200社超の石油・取引企業、30超の仲介・データ・技術パートナーを掲載し、SingaporeのAPAC組織から日本市場を優先開拓するAEを募集。",
  role: "SingaporeのAccount Executive, Japan & Koreaが新規開拓70%、獲得顧客の育成30%で、東京本社と地域取引デスクを結ぶ。日本勤務の求人ではない。",
  organization: "SingaporeをAPAC拠点として日本と韓国を担当する求人を確認。日本法人、国内拠点、日本勤務求人、日本語の契約・支援体制は未確認。",
  career: "正式進出後は、石油取引の専門データを日本の商社・精製・公益・海運企業へ持ち込み、市場開拓と複数製品契約を作る経験になり得る。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "日本法人・国内拠点・日本勤務求人は未確認。Singaporeから日本を優先開拓", japanSince: "未進出",
  customer: { company: "世界の石油・取引企業200社超", outcome: "会社公式は、匿名の石油大手トレーダーが導入初日に費用を上回る取引機会を捉えたと紹介するが、顧客名と再現条件は非公開。" },
  facts: [["起源","元トレーダー2人","合計37年超の石油取引経験。"],["Series B","4,200万ドル","2025年会社公表。"],["利用企業","200社超","石油・取引企業。会社公式。"],["提携先","30社超","仲介・データ・技術パートナー。"],["日本拠点","未確認","Singaporeから市場開拓。"],["日本求人","0件","Singapore勤務のJapan & Korea担当AEを確認。"]],
  products: [["Leonidas AI","価格、裁定、ニュース、季節性をつなぐ石油トレーダー向け判断支援。","https://www.spartacommodities.com/"],["Sparta Intelligence","裁定、輸送、ブレンド余地の前向きな信号を提供。","https://www.spartacommodities.com/sparta-intelligence/"],["Sparta Data Marketplace","独自・第三者データを整形しAPI等で配信。","https://www.spartacommodities.com/about/"]],
  competitors: "Kpler、S&P Global Commodity Insights、LSEG、Bloomberg、取引会社の内製表計算・分析",
  leader: ["Felipe Elink Schuurman","Co-Founder and Chief Executive Officer","https://www.spartacommodities.com/about/"], local: ["未確認","日本事業責任者","https://www.spartacommodities.com/about/"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の週4日出社条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本を即時の優先市場とする専任AEは強いシグナルだが、雇用・契約・支援の国内基盤は未確認。",
    signal: "Singapore勤務のAccount Executive, Japan & Koreaを募集し、日本を即時の優先市場として商社、精製、公益、海運企業を開拓。",
    hurdle: "日本法人、国内拠点、日本勤務求人、日本語の契約・請求・導入・障害対応、国内顧客の公開成果を確認できない。",
    conditions: ["Singaporeから日本企業の新規契約と利用拡張を再現する。", "日本語の販売、契約、請求、導入、障害支援の責任分界を整える。", "国内案件と長期契約の規模が日本常駐組織の固定費を支える。", "日本のエネルギー・商社顧客で公開可能な成果を作る。"],
    watches: ["Japan・Tokyo勤務求人", "日本法人・国内拠点", "国内顧客の数値事例", "日本語の契約・技術支援", "SingaporeのJapan専任採用拡大"],
  },
}, checkedAt);
sparta.sources.push(
  { id: "sparta-series-b", label: "Sparta $42M Series B", url: "https://www.spartacommodities.com/company-news/sparta-secures-42m-series-b-led-by-one-peak-to-transform-commodity-trading-with-ai-powered-insights-and-collaboration/", kind: "企業公式", scope: "調達・創業背景・AI製品方針", checkedAt },
  { id: "gbiz-headcount-sparta", label: "gBizINFO Sparta法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "sparta-linkedin", label: "Sparta Commodities LinkedIn会社ページ", url: "https://www.linkedin.com/company/sparta-commodities/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
);
sparta.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでSparta Commoditiesに紐づく国内法人・事業所情報を特定できず、日本法人の想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-sparta" };
if (sparta.marketStatus.japanGrowth) {
  sparta.marketStatus.japanGrowth.headline = "日本求人0件・Singaporeから日本市場を優先開拓";
  sparta.marketStatus.japanGrowth.narrative = "2026年9月29日の公式求人で、Singapore勤務のJapan & Korea担当AEを確認。日本法人、国内拠点、日本勤務求人、日本語の契約・支援体制は未確認。";
}

export function applyDaily20260929Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.jfrog;
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Business Development Representative求人終了"),
    { year: "2026.09.29", label: "Business Development Representative求人終了", detail: "公式求人URLが404を返し、公式採用一覧にも東京求人を確認できなかったため掲載から除外。これだけで日本事業縮小や採用停止を意味しない。", sourceId: "jfrog-job" },
  ];
}

export const daily20260929IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { kpler, entrupy, "sparta-commodities": sparta };
