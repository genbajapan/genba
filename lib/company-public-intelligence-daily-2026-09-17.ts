import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-17";

const jfrog = buildDailyCompanyIntelligence({
  slug: "jfrog", name: "JFrog", jobConfirmed: true,
  jobUrl: "https://join.jfrog.com/job/6870647-business-development-representative-tokyo-japan/", officialUrl: "https://jfrog.com/ja/about/",
  customersUrl: "https://jfrog.com/ja/usecase/case-study-ly/", financeUrl: "https://jfrog.com/press-room/",
  problem: "開発成果物、オープンソース依存関係、脆弱性、配布先が複数の道具へ分かれ、何を本番へ出したかを安全かつ一貫して追えない課題を解く。",
  origin: "2008年、Yoav Landmanらが企業ごとに分断していたソフトウェア成果物の管理を共通化するArtifactoryから事業を始め、Shlomi Ben HaimらとJFrogを創業。",
  externalNeed: "AIがコードと依存関係の生成を速めるほど、企業は人だけでなくAIエージェントが取得・作成するパッケージまで、出所、脆弱性、承認、配布履歴を統制する必要がある。",
  solution: "Artifactoryで成果物を一元管理し、XrayとCurationで脆弱性・ライセンス・持込みを検査し、開発から本番・端末までの配布を追跡する。",
  selection: "個別のリポジトリやスキャナーではなく、多言語・複数クラウド・オンプレミスをまたぐ成果物の記録、方針適用、配布、監査を一つの運用へまとめられる点で比較する。",
  growth: "公式求人は世界7,500社超の顧客を掲載。2026年の会社発表はAIエージェントが使うパッケージやモデルも含むソフトウェア供給網の統制へ製品範囲を広げている。",
  role: "東京のBusiness Development Representativeが新規見込み客の最初の接点となり、調査、アウトバウンド、問い合わせ対応から商談候補と市場開拓の型を作る。",
  organization: "JFrog Japan株式会社・東京。会社公式は東京拠点を掲載し、2022年にVicky Chan氏のJapan GM就任を発表。現在の国内人数と責任者の継続状況は未確認。",
  career: "開発者向けの深い技術製品を、開発速度、セキュリティ、監査、AI統制の経営課題へ翻訳して商談を作る市場開拓経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "JFrog Japan株式会社・東京。国内の正確な在籍人数は未確認", japanSince: "日本法人・東京拠点を会社公式で確認",
  customer: { company: "LINEヤフー", outcome: "数千人の開発者向けにArtifactoryでパッケージ管理を統合・キャッシュ化し、Xrayで開発初期から脆弱性を検査する環境を構築したと会社事例で紹介。" },
  facts: [["創業","2008年","イスラエルで創業。"],["顧客","7,500社超","2026年時点の公式求人掲載。定義と有料顧客数の内訳は未確認。"],["利用者","数百万人","会社公式ページ。登録・稼働の定義は未確認。"],["日本拠点","東京","会社公式のグローバル拠点一覧。"],["国内事例","LINEヤフー","数千人の開発者向け導入事例。"],["日本求人","1件","Business Development Representative。"]],
  products: [["JFrog Artifactory","ソフトウェア成果物とAI資産を一元管理し、開発から配布までの記録を保つ。","https://jfrog.com/ja/artifactory/"],["JFrog Xray","依存関係と成果物を継続検査し、脆弱性・ライセンスの影響を追う。","https://jfrog.com/ja/xray/"],["JFrog Curation","開発者やAIエージェントが取得するオープンソース部品を方針で制御する。","https://jfrog.com/ja/curation/"]],
  competitors: "Sonatype、GitHub・Microsoft、GitLab、クラウド各社の成果物管理・内製",
  leader: ["Shlomi Ben Haim","Co-Founder and Chief Executive Officer","https://jfrog.com/about/management/"], local: ["Vicky Chan（2022年就任発表）","Japan GM / Country Manager。当該役職の現在状況は未確認","https://jfrog.com/ja/press-room/jfrog-appoints-vicky-jia-yu-chan-as-japan-gm-country-manager/"],
  work: ["未確認","東京・Remoteタグ","出社日数は未確認","完全リモートの明記なし","雇用主体、出社頻度、担当地域、時差は選考で確認"],
}, checkedAt);
jfrog.sources.push(
  { id: "jfrog-japan-entity", label: "JFrog Japan会社概要・東京拠点", url: "https://jfrog.com/ja/about/", kind: "企業公式", scope: "日本法人・東京拠点・顧客規模", checkedAt },
  { id: "gbiz-headcount-jfrog", label: "gBizINFO JFrog Japan株式会社検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
jfrog.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "JFrog Japan株式会社と東京拠点は公式確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-jfrog" };

const axisCommunications = buildDailyCompanyIntelligence({
  slug: "axis-communications", name: "Axis Communications", jobConfirmed: true,
  jobUrl: "https://axis.wd3.myworkdayjobs.com/en-US/External_Career_Site/job/Sales-Engineer_R-121601", officialUrl: "https://www.axis.com/ja-jp/about-axis",
  customersUrl: "https://www.axis.com/ja-jp/customer-story/department-store", financeUrl: "https://www.axis.com/ja-jp/about-axis",
  problem: "映像、防犯、入退室、音声が別々の設備として運用され、死角、事故、現場確認、保守の手間を減らしながら安全と事業効率を両立しにくい課題を解く。",
  origin: "1984年、Mikael Karlsson、Martin Gren、Keith Bloodworthがネットワーク機器の可能性を広げるためスウェーデンで創業し、1996年に世界初のネットワークカメラを発売。",
  externalNeed: "人手不足と施設の複雑化が進む一方、企業は映像を記録するだけでなく、プライバシーとサイバー安全を守りながら異常を現場で検知し、入退室や業務対応へつなぐ必要がある。",
  solution: "ネットワークカメラ、入退室、インターコム、音響、管理ソフト、エッジAI分析を組み合わせ、現場の検知から確認・対応までを一つのネットワークへつなぐ。",
  selection: "画質や価格だけでなく、死角と誤検知、エッジ処理、ネットワーク安全、既存設備との統合、販売・施工パートナーの運用力を含む全体成果で比較する。",
  growth: "会社公式は50か国超で約5,000人、2025年売上20.8 billion SEK、世界180か国での販売を掲載。2015年からCanon Groupに参画。",
  role: "東京のSales Engineerが顧客・販売パートナーへのデモ、試験導入、技術提案、教育、競合分析、国内規制対応を担い、案件の技術面とパートナー自走を支える。",
  organization: "Axis Communications K.K.・東京。公式グループ法人一覧と東京拠点を確認。国内の正確な人数と日本事業責任者は未確認。",
  career: "ネットワーク、クラウド、映像、エッジ分析を顧客の安全・省人化へ翻訳し、販売パートナーの提案・導入力まで作る技術営業経験。",
  globalHeadcount: "約5,000人（会社公式）", japanPresence: "Axis Communications K.K.・東京。国内の正確な在籍人数は未確認", japanSince: "日本法人を公式グループ一覧で確認",
  customer: { company: "大丸札幌店", outcome: "270台のネットワークカメラと管理ソフトを導入し、従来比で視認範囲3.7倍、1台当たり能力6.8倍として死角と現地確認の負担を減らしたと会社事例で紹介。" },
  facts: [["創業","1984年","スウェーデンのルンドで創業。"],["世界初","1996年","世界初のネットワークカメラを発売。"],["従業員","約5,000人","50か国超。会社公式。"],["2025年売上","208億SEK","会社公式。為替換算ではなく原通貨表記。"],["販売地域","180か国","会社公式。"],["日本求人","1件","東京のSales Engineer。"]],
  products: [["Network Video","ネットワークカメラ、録画、管理ソフトで映像の確認と分析を行う。","https://www.axis.com/ja-jp/solutions/video-surveillance"],["Access Control","映像と入退室を組み合わせ、扉、本人確認、履歴を管理する。","https://www.axis.com/ja-jp/solutions/access-control"],["Edge Analytics","カメラ側で人・車・物体・異常を分析し、必要な対応を起動する。","https://www.axis.com/ja-jp/products/analytics"]],
  competitors: "i-PRO、Hanwha Vision、Bosch、Hikvision、各種映像管理・入退室・内製",
  leader: ["Ray Mauritsson","President and Chief Executive Officer","https://www.axis.com/about-axis/corporate-governance/ceo-and-management-team"], local: ["未確認","日本事業責任者","https://www.axis.com/contact-us?field_country_region_target_id=2602"],
  work: ["ハイブリッド","東京Hybrid","週3日出社・週2日在宅勤務が可能","完全リモートではない","国内外出張と顧客先での長期活動の可能性あり"],
}, checkedAt);
axisCommunications.sources.push(
  { id: "axis-japan-entity", label: "Axis Group legal entities", url: "https://www.axis.com/dam/public/c1/2c/70/legal-entity-en-US%2Ben-GB-422961.pdf", kind: "企業公式", scope: "Axis Communications K.K.・東京住所", checkedAt },
  { id: "gbiz-headcount-axis", label: "gBizINFO Axis Communications K.K.検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
axisCommunications.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本法人と東京拠点は公式確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-axis" };

const rogo = buildDailyCompanyIntelligence({
  slug: "rogo", name: "Rogo", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/rogo/e235ef28-b6f8-4550-8946-18cd8c01a0d0", officialUrl: "https://rogo.com/company",
  customersUrl: "https://rogo.com/", financeUrl: "https://rogo.com/news/strategic-investors",
  problem: "投資銀行・投資会社の調査、財務モデル、投資メモ、提案資料が多数の外部データと社内知見へ分散し、正確性・機密性を守りながら短時間で判断材料を作りにくい課題を解く。",
  origin: "元金融実務家とAI専門家のGabriel Stengel、John Willett、Tumas Rackaitisが、自分たちが金融現場で欲しかった専用AIを作るためニューヨークで創業。",
  externalNeed: "生成AIが一般化しても、金融機関は誤った数値や出典不明の回答を顧客資料へ出せず、社内データ、権限、監査、地域ごとの規制を守りながら実務成果物まで作る必要がある。",
  solution: "金融データ、社内資料、CRM等へ接続し、調査、財務モデル、投資メモ、デューデリジェンス、提案資料を金融業務に沿ったAIエージェントで支援する。",
  selection: "汎用チャットの回答速度ではなく、金融の業務手順、出典、数値の追跡、社内権限、監査可能なExcel・資料、導入支援までを一つの運用へ組み込める点で比較する。",
  growth: "2026年9月の会社発表は350社超・利用者5万人超・1日15万件超の問い合わせを掲載し、金融機関からの戦略投資でEMEAとAPACを数百人規模へ拡大する方針を公表。",
  role: "SingaporeのEnterprise Account Executive, APACが地域初期の営業として銀行、PE、資産運用会社の新規・拡大商談を持ち、対象地域の例にJapanを明記。日本専任求人ではない。",
  organization: "Londonに最初の海外拠点、SingaporeでAPAC初期営業・顧客支援を募集。日本法人、国内拠点、日本専任人員、日本求人は未確認。",
  career: "正式進出後は、金融実務、規制、AI、データ統合を結び、日本で最初の企業顧客と導入モデルを作る市場立ち上げ経験になり得る。",
  globalHeadcount: "201〜500人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本求人は未確認。SingaporeのAPAC求人がJapanを対象例に含む", japanSince: "未進出",
  customer: { company: "Nomura", outcome: "市場データの分析と機会発見を速め、銀行担当者が顧客関係と戦略助言へ注力できると会社公式の顧客コメントで紹介。定量成果は未確認。" },
  facts: [["創業","年未確認","元金融実務家とAI専門家3名がニューヨークで創業。"],["利用者","5万人超","2026年9月会社発表。"],["導入機関","350社超","同発表。"],["日次利用","15万件超","利用者からの日次問い合わせ。"],["APAC採用","Singapore","地域初期のEnterprise Account Executive。"],["日本求人","0件","公式Ashbyで確認。"]],
  products: [["Rogo Platform","金融機関の調査、分析、資料作成を社内外データとAIで支援。","https://rogo.com/product"],["Financial Agents","案件・投資の手順を理解し、調査から成果物までの業務を実行。","https://rogo.com/"],["Enterprise Integrations","SharePoint、CRM、市場データ、社内資料へ権限を保って接続。","https://rogo.com/security"]],
  competitors: "Hebbia、AlphaSense、Microsoft Copilot、汎用生成AI・金融機関の内製",
  leader: ["Gabriel Stengel","Co-Founder and Chief Executive Officer","https://rogo.com/company"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/rogo"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人の勤務地・報酬・雇用条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中〜高。APAC初期営業がJapanを対象例に含み、MUFG系を含む戦略投資家もいるが、日本専任の法人・拠点・求人・顧客事例は未確認。",
    signal: "SingaporeでAPAC初期のEnterprise Account Executiveを公式募集し、対象市場の例にJapanを明記。APAC営業・顧客支援の複数職種を確認。",
    hurdle: "日本法人、国内拠点、日本専任求人、日本語の金融データ・製品・契約・導入支援、国内公開事例を確認できない。",
    conditions: ["Singaporeから日本の金融機関で有償導入と継続利用を作る。", "日本語の金融データ、権限、監査、契約、導入支援を運営できる体制を整える。", "国内案件の更新・拡大が日本専任人員と法人運営の固定費を支える。"],
    watches: ["Japan・Tokyo専任求人", "日本法人・国内拠点", "日本の金融機関による公開導入事例", "日本語製品・導入支援", "Singapore求人のJapan territory具体化"],
  },
}, checkedAt);
rogo.sources.push(
  { id: "rogo-apac-investment", label: "Rogo strategic investment and APAC expansion", url: "https://rogo.com/news/strategic-investors", kind: "企業公式", scope: "利用規模・金融機関からの戦略投資・APAC拡大", checkedAt },
  { id: "gbiz-headcount-rogo", label: "gBizINFO Rogo法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
rogo.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOと会社公式で対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-rogo" };

export function applyDaily20260917Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug["extreme-networks"];
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes("Premier Service Delivery Engineer")),
    { year: "2026.09.17", label: "Premier Service Delivery Engineer求人終了", detail: "公式求人ID b5cef82d-d3a7-4761-bf0f-407f00faa41bが404となり、現行の公式Lever一覧にも存在しないため掲載から除外。別IDの日本求人は検知したが、スケジュール実行では既存企業への新規求人追加を行わない。", sourceId: "extreme-networks-job" },
  ];
}

export const daily20260917IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { jfrog, "axis-communications": axisCommunications, rogo };
