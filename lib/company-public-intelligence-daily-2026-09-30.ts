import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-30";

const adjoe = buildDailyCompanyIntelligence({
  slug: "adjoe", name: "adjoe", jobConfirmed: true,
  jobUrl: "https://adjoe.io/careers/open-positions/30d19b10-25c8-47dd-a074-4d8b55eb0152/", officialUrl: "https://adjoe.io/company/",
  customersUrl: "https://adjoe.io/success-stories/hello-town-adjoe-playtime/", financeUrl: "https://adjoe.io/news-insights/adjoe-expands-to-apac-region/",
  problem: "アプリ事業者が広告収益を増やそうとすると利用体験や継続率を損ねやすく、広告主も継続利用する利用者を効率よく獲得しにくい課題を解く。",
  origin: "2018年にドイツ・ハンブルクでapplike groupから生まれ、ゲームを遊ぶ時間に応じて報酬を得るPlaytimeを軸に、広告を中断ではなく継続利用の動機へ変えた。",
  externalNeed: "アプリの獲得費用が上がり、プライバシー制約で外部データに頼りにくくなるほど、企業は自社データで収益、利用継続、広告効果を同時に測る必要がある。",
  solution: "報酬型ゲーム広告、広告配信、ロイヤルティ機能を自社開発し、利用者の行動と媒体の収益、広告主の獲得成果を同じ運用で最適化する。",
  selection: "表示量だけでなく、継続率、ARPDAU、獲得単価、不正対策、対象利用者、導入後の改善速度を同じ条件で比較する。",
  growth: "会社公式は2018年創業、250人超、1,000社超の提携スタジオ、7.7億人の利用者、ハンブルク・ボストン・シンガポール・東京の拠点を掲載。東京で複数の日本担当職を募集している。",
  role: "東京のSupply Growth Manager - Japanがアプリ運営会社の収益・継続率・ARPDAU等を分析し、利用拡大、四半期レビュー、製品改善を担う。",
  organization: "東京オフィスとJapan Country Managerを会社公式で確認。国内法人名、正確な在籍人数、求人ごとの出社日数は未確認。",
  career: "モバイル広告の指標を、媒体の広告収益、利用継続、利用者体験、パートナー拡張へ変える日本市場の顧客成長経験。",
  globalHeadcount: "250人超（会社公式）", japanPresence: "東京オフィスとJapan Country Manager、複数の東京求人を会社公式で確認", japanSince: "2025年に東京オフィス開設を会社公式で発表",
  customer: { company: "Springcomes", outcome: "公式事例はPlaytime導入後、Hello Townの30日目広告費用対効果が70%伸び、2025年第1〜第3四半期に同社作品群で110万件超を獲得したと説明。" },
  facts: [["創業","2018年","ドイツ・ハンブルクで創業。"],["従業員","250人超","会社公式。"],["利用者","7.7億人","会社公式。"],["提携スタジオ","1,000社超","会社公式。"],["東京拠点","確認済み","会社公式のAPAC進出発表。"],["日本求人","3件以上","会社公式一覧で東京の日本担当職を確認。"]],
  products: [["Playtime","ゲーム内の進行に応じた報酬で利用継続と広告収益を高める。","https://adjoe.io/playtime/"],["adjoe Ads","機械学習と自社データでモバイル広告の入札と配信を最適化。","https://adjoe.io/adjoe-ads/"],["Arcade","ゲーム体験をロイヤルティ・会員アプリへ組み込む。","https://adjoe.io/arcade/"]],
  competitors: "AppLovin、Unity、ironSource系製品、各アプリの内製広告・ロイヤルティ運用",
  leader: ["Jonas Thiemann","Co-Founder and CEO, applike group","https://adjoe.io/news-insights/"], local: ["Daisuke Hattori","Japan Country Manager","https://adjoe.io/news-insights/adjoe-expands-to-apac-region/"],
  work: ["ハイブリッド","Tokyo","具体的な出社日数は未確認","完全リモートではない","日本顧客、APAC、製品部門との連携頻度は選考で確認"],
}, checkedAt);
adjoe.sources.push(
  { id: "adjoe-apac", label: "adjoe Expands to APAC Region", url: "https://adjoe.io/news-insights/adjoe-expands-to-apac-region/", kind: "企業公式", scope: "東京オフィス・日本責任者・国内顧客", checkedAt },
  { id: "adjoe-customer", label: "Hello Town grows D30 ROAS with Playtime", url: "https://adjoe.io/success-stories/hello-town-adjoe-playtime/", kind: "企業公式", scope: "顧客課題・導入成果", checkedAt },
  { id: "gbiz-headcount-adjoe", label: "gBizINFO adjoe法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
adjoe.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京オフィスと日本責任者は確認したが、gBizINFOで対応する国内法人番号・事業所被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-adjoe" };

const securityscorecard = buildDailyCompanyIntelligence({
  slug: "securityscorecard", name: "SecurityScorecard", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/securityscorecard/jobs/8167848", officialUrl: "https://securityscorecard.com/company/",
  customersUrl: "https://securityscorecard.com/resources/case-study/", financeUrl: "https://securityscorecard.com/",
  problem: "自社のサイバー対策だけでは取引先・委託先から侵入するリスクを把握できず、質問票や年次評価だけでは変化を継続管理しにくい課題を解く。",
  origin: "2013年にセキュリティとリスクの専門家Alex YampolskiyとSam Kassoumehが、社外から観測できる信号で組織のリスクを継続評価する仕組みを創業した。",
  externalNeed: "サプライチェーン侵害と規制・経営報告の要求が増えるほど、企業は取引開始時の質問票だけでなく、全取引先の変化、重大度、改善状況を継続して説明する必要がある。",
  solution: "インターネット上の信号、脅威情報、質問票、規制対応を統合し、自社・取引先の評価、優先順位、改善協働、取締役会報告を支援する。",
  selection: "評価対象の網羅性だけでなく、データ精度への異議対応、実際の侵害との相関、改善導線、日本語支援、販売・運用パートナーで比較する。",
  growth: "現行求人は1,200万社超を継続評価し、64カ国・2万5千組織超で利用と説明。日本語サイト、東京の日本法人、国内事例があり、新しいCountry Managerを募集している。",
  role: "Remote JapanのCountry Managerが新規ARR、商談量、企業・金融・保険・公共の営業、販売パートナー、日本市場戦略を持ち、将来の国内営業組織を作る。",
  organization: "SecurityScorecard株式会社・東京。日本語サイト、国内窓口、複数の国内事例を確認。正確な在籍人数と職種別構成は未確認。",
  career: "サイバー・第三者リスクを経営課題へ翻訳し、個人の新規ARRから販売網、国別戦略、採用・育成まで広げる日本責任者経験。",
  globalHeadcount: "501〜1,000人規模（外部公開レンジ、現員は変動あり）", japanPresence: "SecurityScorecard株式会社・東京。日本語サイト、国内事例、現行のCountry Manager求人を確認", japanSince: "少なくとも2021年に日本法人・東京窓口を会社公式で確認",
  customer: { company: "日本の半導体メーカー（社名非公開）", outcome: "2026年の公式事例は、TITAN MAXの支援により重大リスクを持つ取引先の80%と改善協働できたと説明。社名と対象母数は非公開。" },
  facts: [["創業","2013年","米国ニューヨークで創業。"],["継続評価","1,200万社超","現行公式求人。"],["利用組織","2万5千超","現行公式求人。"],["展開","64カ国","現行公式求人。"],["日本法人","東京","会社公式資料・日本語サイト。"],["日本求人","1件","Country Manager, Japan。"]],
  products: [["Security Ratings","社外から観測する信号で組織のサイバーリスクを継続評価。","https://securityscorecard.com/ja/product/security-ratings/"],["Third-Party Risk Management","取引先の発見、評価、質問票、改善を一元管理。","https://securityscorecard.com/ja/"],["TITAN AI","脅威情報とAIエージェントで検知から対応までを支援。","https://securityscorecard.com/"]],
  competitors: "BitSight、UpGuard、Black Kite、Panorays、質問票・表計算による内製評価",
  leader: ["Alex Yampolskiy","Co-Founder and Chief Executive Officer","https://securityscorecard.com/company/"], local: ["未確認","日本事業責任者","https://securityscorecard.com/ja/"],
  work: ["フルリモート","Remote (Japan)","国内出張と定期的なAPAC・米国出張あり","日本国内のリモート勤務","将来の国内チーム拡大と出張頻度は選考で確認"],
}, checkedAt);
securityscorecard.sources.push(
  { id: "ssc-japan", label: "SecurityScorecard日本語サイト", url: "https://securityscorecard.com/ja/", kind: "企業公式", scope: "製品・日本市場向け情報", checkedAt },
  { id: "ssc-japan-cases", label: "SecurityScorecard日本企業のTITAN MAX事例", url: "https://securityscorecard.com/wp-content/uploads/2026/05/SSC_CaseStudy-IndustrialSector_050426.pdf", kind: "企業公式", scope: "国内顧客事例・重大リスク取引先との改善協働", checkedAt },
  { id: "gbiz-headcount-securityscorecard", label: "gBizINFO SecurityScorecard株式会社検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "ssc-linkedin", label: "SecurityScorecard LinkedIn会社ページ", url: "https://www.linkedin.com/company/securityscorecard/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
);
securityscorecard.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京住所は会社公式で確認したが、gBizINFOの事業所被保険者数を今回特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-securityscorecard" };

const pallet = buildDailyCompanyIntelligence({
  slug: "pallet", name: "Pallet", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/pallet/jobs/5186143007", officialUrl: "https://www.pallet.com/company",
  customersUrl: "https://www.pallet.com/customers/stg-logistics", financeUrl: "https://www.pallet.com/company",
  problem: "物流・製造・流通の受注、見積、書類、追跡、請求がメール・表計算・基幹システムに分断し、担当者が転記と例外確認に時間を取られる課題を解く。",
  origin: "米国の技術者と物流実務者が、物理的な商品を動かす現場に残る表計算、属人的な手順、手入力をAIで実行可能な業務へ変えるために創業した。",
  externalNeed: "人手不足と顧客の即時回答要求が強まる一方、物流は顧客別手順、危険物、通関、複数システムなど例外が多く、企業は自動化と人の確認を同じ統制で運用する必要がある。",
  solution: "メール、PDF、EDI、既存TMS・ERPを横断するAIエージェントが、受注、配車、追跡、書類、請求を読み取り、実行し、例外だけを人へ戻す。",
  selection: "一般的なOCRや対話AIではなく、顧客別手順、既存システムへの接続、正確性、例外処理、導入速度、測定可能な投資対効果で比較する。",
  growth: "現行求人は累計5,000万ドル調達、2年未満で売上700%成長を掲載。米国・英国に拠点を持ち、東京で最初の商用採用を募集して将来の東京オフィス開設を明記した。",
  role: "東京のSales Directorが最初の商用採用として大手物流企業を開拓し、業務発見、AI活用案、試行、投資対効果、企業契約、国際展開の販売方法を作る。",
  organization: "日本法人・東京オフィス・既存の国内チームは未確認。求人は当初リモート、将来オフィス開設後に週5日出社と明記。",
  career: "物流業務とAIをつなぎ、大型企業契約だけでなく日本市場の顧客像、販売方法、導入成果、現地拠点をゼロから作る市場立ち上げ経験。",
  globalHeadcount: "201〜500人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "日本法人・東京オフィスは未確認。東京で最初の商用採用を公式募集", japanSince: "進出準備中",
  customer: { company: "STG Logistics", outcome: "公式事例は注文の95%を人手なしで処理し、入力費用を80%削減、15人の担当者が使っていた時間の60%を戻し、投資対効果5倍と説明。" },
  facts: [["本社","サンフランシスコ","米国で創業。"],["調達","5,000万ドル","現行公式求人。"],["売上成長","700%","2年未満。現行公式求人。"],["顧客成果","注文95%を自動処理","STG Logistics公式事例。"],["東京拠点","将来開設予定","現時点の開設は未確認。"],["日本求人","1件","Sales Director - Tokyo。"]],
  products: [["Pallet Agents","物流・供給網の定型業務を既存システム上で実行。","https://www.pallet.com/"],["Pallet Memory","顧客別手順と例外知識をエージェントへ供給。","https://www.pallet.com/"],["Pallet Forge","業務を学習・試験し、短期間でエージェントを本番化。","https://www.pallet.com/"]],
  competitors: "物流各社の内製自動化、RPA、OCR、TMS・ERPベンダー、汎用AIエージェント",
  leader: ["未確認","Chief Executive Officer","https://www.pallet.com/company"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/pallet/jobs/5186143007"],
  work: ["出社中心","Tokyo（当初リモート）","オフィス開設後は顧客訪問時を除き週5日出社","当初のみ東京からリモート","業務時間の約75%を顧客訪問・出張に使う想定"],
  preEntry: {
    verdict: "進出可能性は高い。東京の最初の商用採用と将来オフィス開設を明記した強いシグナルだが、法人・雇用・支援の国内基盤は未確認。",
    signal: "東京で最初のSales Directorを募集し、日本の大手物流企業開拓、国際展開の販売方法、将来の東京オフィス開設を求人へ明記。",
    hurdle: "日本法人、既存の東京オフィス、国内雇用主体、日本語の契約・請求・導入・障害対応、国内顧客事例を確認できない。",
    conditions: ["最初の日本顧客で試行から企業契約への転換と投資対効果を再現する。", "日本語の契約、請求、導入、データ管理、障害対応の責任分界を整える。", "現地採用と東京オフィスの固定費を支える商談量と契約規模を作る。", "物流の顧客別手順と国内システムへの接続を標準化する。"],
    watches: ["日本法人・雇用主体", "東京オフィスの開設", "国内顧客の数値事例", "日本語の契約・導入・障害支援", "日本の追加営業・導入求人"],
  },
}, checkedAt);
pallet.sources.push(
  { id: "pallet-stg", label: "STG Logistics customer story", url: "https://www.pallet.com/customers/stg-logistics", kind: "企業公式", scope: "顧客課題・導入成果", checkedAt },
  { id: "gbiz-headcount-pallet", label: "gBizINFO Pallet法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "pallet-linkedin", label: "Pallet LinkedIn会社ページ", url: "https://www.linkedin.com/company/trypallet/", kind: "外部集計", scope: "グローバル従業員規模・創業年", checkedAt },
);
pallet.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでPalletに紐づく国内法人・事業所を特定できず、日本法人の想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-pallet" };
if (pallet.marketStatus.japanGrowth) {
  pallet.marketStatus.japanGrowth.headline = "東京初の商用採用・国内組織は進出準備中";
  pallet.marketStatus.japanGrowth.narrative = "2026年9月30日の公式求人で東京のSales Directorを確認。当初は東京からリモートで、将来の東京オフィス開設後は週5日出社と明記する一方、日本法人と既存の国内支援組織は未確認。";
}

export const daily20260930IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { adjoe, securityscorecard, pallet };
