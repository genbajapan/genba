import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-27";

const box = buildDailyCompanyIntelligence({
  slug: "box", name: "Box", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/boxinc/jobs/8054660", officialUrl: "https://www.box.com/ja-jp/about-us",
  customersUrl: "https://japan.box.com/case", financeUrl: "https://investors.box.com/",
  problem: "契約書、請求書、人事情報、製品資料が部門・ツール・取引先ごとに分断し、権限、監査、AI利用、業務プロセスを一貫して管理しにくい課題を解く。",
  origin: "2005年に米国で、人と組織がどこからでも情報へアクセスし、安全に協働できるクラウド基盤を作ることから始まった。",
  externalNeed: "生成AIが企業コンテンツを読み、要約・抽出・ワークフロー実行まで行うほど、企業はモデルの性能だけでなく、誰が何を読み、どの権限で動き、何を記録・承認するかを説明できる必要がある。",
  solution: "非構造化コンテンツを一元管理し、権限、脅威対策、データ所在、電子署名、業務自動化、AIエージェントを同じ統制下で運用する。",
  selection: "容量単価ではなく、外部協働、分類・権限、監査、業務アプリ連携、AIが参照できる範囲、導入後の利用定着までを一つの企業運用として比較する。",
  growth: "会社公式は世界12万社、Box Japanは国内23,000社超の利用を公開。株式会社Box Japanは2013年設立で、東京・名古屋・大阪を含む複数の現行求人を確認。",
  role: "東京のEnterprise Solutions Engineerが従業員2,000名以上の大手企業を担当し、課題整理、実証、アーキテクチャ、セキュリティ、AI利用統制、導入後の定着・拡張を支援する。",
  organization: "株式会社Box Japan・東京丸の内。2025年2月に佐藤範之氏が社長へ就任し、古市克典氏は代表取締役会長。",
  career: "大手企業の非構造化データを、AI、セキュリティ、権限、業務自動化、導入後の定着まで横断する技術営業経験。",
  globalHeadcount: "2,001〜5,000人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "株式会社Box Japan・東京。国内23,000社超が利用", japanSince: "2013年に日本法人設立",
  customer: { company: "山口産業", outcome: "公式国内事例で、現場の写真・図面共有と権限運用を組み直し、月100〜150時間ほどの作業工数を削減したと説明。" },
  facts: [["創業","2005年","米国で創業。"],["世界導入","12万社","会社公式。"],["国内導入","23,000社超","Box Japan公式。"],["日本法人","2013年","株式会社Box Japanを設立。"],["国内成果","月100〜150時間削減","山口産業事例。"],["掲載求人","1件","東京のEnterprise Solutions Engineerを代表掲載。"]],
  products: [["Box Intelligent Content Management","コンテンツ、協働、セキュリティ、業務プロセスを管理。","https://www.box.com/ja-jp/overview"],["Box AI","企業コンテンツの質問応答、要約、抽出、エージェント活用を支援。","https://www.box.com/ja-jp/ai"],["Box Shield","コンテンツの分類、脅威検知、アクセス統制を強化。","https://www.box.com/ja-jp/shield"]],
  competitors: "Microsoft 365・OneDrive、Google Workspace・Drive、Dropbox、OpenText、社内ファイルサーバー",
  leader: ["アーロン・レヴィ","CEO兼共同創業者","https://www.box.com/ja-jp/about-us/leadership"], local: ["佐藤 範之","Box Japan 社長","https://japan.box.com/news/release/20250203-press-release"],
  work: ["ハイブリッド","Tokyo, Japan","Boxの社員は週3日以上オフィス勤務","No","2026年9月27日の公式求人で確認"],
}, checkedAt);
box.sources.push(
  { id: "box-japan-leadership", label: "Box Japan経営体制変更", url: "https://japan.box.com/news/release/20250203-press-release", kind: "企業公式", scope: "日本法人・社長・代表取締役会長", checkedAt },
  { id: "box-japan-customers", label: "Box Japan導入実績・国内事例", url: "https://japan.box.com/case/customer-success/yamaguchi-industry", kind: "企業公式", scope: "国内導入数・山口産業の作業工数削減事例", checkedAt },
  { id: "gbiz-headcount-box", label: "gBizINFO 株式会社Box Japan法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
box.companyStats.japanOffice = { value: "東京都千代田区丸の内1-8-2 鉄鋼ビルディング15階", detail: "Box Japan公式の会社情報に掲載された所在地。", sourceId: "box-company" };
box.companyStats.japanHeadcount = { value: "掲載なし", detail: "株式会社Box Japanと東京拠点は確認したが、gBizINFOで事業所被保険者数を断定できる公的レコードは今回特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-box" };

const appliedIntuition = buildDailyCompanyIntelligence({
  slug: "applied-intuition", name: "Applied Intuition", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/applied/3783c384-117a-4849-804b-82b2e35a8c8d", officialUrl: "https://www.appliedintuition.com/",
  customersUrl: "https://resource.applied.co/app-eng-candidates", financeUrl: "https://www.appliedintuition.com/news",
  problem: "自動運転・運転支援・車載OSの開発で、実車テスト、シミュレーション、データ、車載ソフトが分断し、安全な変更と検証を大規模に繰り返しにくい課題を解く。",
  origin: "2017年に米国シリコンバレーで、安全で知能的な機械の採用を加速するため、自動車開発のシミュレーションと開発基盤を作り始めた。",
  externalNeed: "車両がソフトウェアとAIで更新されるほど、メーカーはセンサー、車載OS、自動運転スタックの変更を、実車だけに依存せず、膨大な状況と安全要件に対して再現可能に検証する必要がある。",
  solution: "仮想車両・センサーのシミュレーション、データ・テスト管理、Vehicle OS、自動運転スタックをつなぎ、実車投入前の設計・検証・導入を加速する。",
  selection: "シミュレータの機能数だけでなく、実車データとの再現性、車載スタックへの統合、安全要件、開発チームの操作、顧客固有ツールチェーンへの導入で比較する。",
  growth: "公式求人は企業価値150億ドル、世界大手完成車メーカ上位20社のうち18社が利用と説明。2019年に日本参入し、東京拠点と日本の完成車メーカー向けチームを拡大。",
  role: "東京のSolution EngineerがAPACの完成車メーカのVehicle OSプロジェクトで、技術要件、会議、進捗、本社開発との接続を主導する。",
  organization: "2019年に日本参入し、東京・大手町に拠点。他の現行公式求人は東京チーム60人超と説明するが、職種別人数は非公開。",
  career: "完成車メーカーの長期プログラムで、車載ソフトウェア、機能安全、顧客要件、本社開発、プロジェクト運営を横断する技術顧客対応経験。",
  globalHeadcount: "1,001〜5,000人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "東京・大手町拠点。公式求人は東京チーム60人超と説明", japanSince: "2019年に日本市場へ参入",
  customer: { company: "Toyota・Isuzu", outcome: "会社公式は、Toyotaが雨天時の車両検知にセンサーシミュレーションを使い、Isuzuが自律走行トラック開発に基盤を使う事例を紹介。数値成果は同ページで未公開。" },
  facts: [["創業","2017年","米国シリコンバレーで創業。"],["企業価値","150億ドル","現行公式求人の会社説明。"],["大手完成車","20社中18社","現行公式求人。"],["日本参入","2019年","公式求人。"],["東京チーム","60人超","他の現行東京求人の説明。"],["掲載求人","1件","東京のSolution Engineerを代表掲載。"]],
  products: [["Applied Development Platform","自動運転・運転支援のシミュレーション、テスト、データ運用を統合。","https://www.appliedintuition.com/products"],["Vehicle OS","ソフトウェア定義車両の車載OSと開発基盤を提供。","https://www.appliedintuition.com/vehicle-os"],["Autonomy","自動運転スタックと車両への導入・検証を支援。","https://www.appliedintuition.com/autonomy"]],
  competitors: "Ansys、Siemens、dSPACE、IPG Automotive、NVIDIA、完成車メーカーの内製開発基盤",
  leader: ["Qasar Younis","Co-Founder and Chief Executive Officer","https://www.appliedintuition.com/about"], local: ["未確認","日本事業責任者","https://www.appliedintuition.com/careers"],
  work: ["出社中心","Tokyo","Full-timeは原則週5日出社","完全リモートではない","家庭等に合わせた一時的なリモートや早退は責任ある運用を認めると公式求人で説明"],
}, checkedAt);
appliedIntuition.sources.push(
  { id: "applied-tokyo-team", label: "Applied Intuition Fleet Operations Specialist", url: "https://jobs.ashbyhq.com/applied/a6ffba3c-37f1-400f-a30f-8644959ad8be", kind: "企業公式", scope: "日本参入年・東京拠点・東京チーム規模", checkedAt },
  { id: "applied-japan-customers", label: "Applied Intuition Application Engineering", url: "https://resource.applied.co/app-eng-candidates", kind: "企業公式", scope: "Toyota・Isuzuの利用例", checkedAt },
  { id: "gbiz-headcount-applied-intuition", label: "gBizINFO Applied Intuition法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
appliedIntuition.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "現行求人は東京チーム60人超と説明する一方、gBizINFOで対応する国内法人番号・事業所情報を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-applied-intuition" };
appliedIntuition.companyStats.japanOffice = { value: "東京都千代田区大手町1-6-1 大手町ビル6階", detail: "LinkedIn会社ページの拠点一覧で確認した東京オフィス。", sourceId: "applied-linkedin-office" };
appliedIntuition.sources.push({ id: "applied-linkedin-office", label: "Applied Intuition LinkedIn会社ページ", url: "https://www.linkedin.com/company/applied-intuition-inc/", kind: "外部集計", scope: "東京オフィス所在地・グローバル従業員規模", checkedAt });

const chalk = buildDailyCompanyIntelligence({
  slug: "chalk", name: "Chalk", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/chalk/96eeb4e1-4621-4c03-b46e-ed2630b48811/", officialUrl: "https://chalk.ai/about",
  customersUrl: "https://chalk.ai/customers", financeUrl: "https://chalk.ai/blog/announcing-chalk-50-seriesa-funding",
  problem: "機械学習のデータ定義が学習、一括評価、リアルタイム推論ごとに分断し、古い特徴量、モデルのずれ、遅延、監査の欠落が本番判断を弱くする課題を解く。",
  origin: "信用・リスク判定のデータ基盤を何度も内製したチームが、既存の道具は開発体験とリアルタイム判断に適さないと考えて創業。社名は数学者の黒板と証明終了のQEDに由来する。",
  externalNeed: "AIをリスク、不正、推薦、検索、価格の即時判断へ入れるほど、企業はモデルだけでなく、判断時点の新鮮なデータ、計算過程、版、権限、監査可能性を本番運用で保つ必要がある。",
  solution: "Python・SQLで書いた特徴量とデータ処理をバッチとリアルタイムで共通化し、低遅延推論、時点整合、版管理、監査、自社クラウド配備を一つの基盤で支え、判断の速度と精度を改善する。",
  selection: "クエリ速度だけでなく、学習と推論の定義一致、新鮮さ、既存データ基盤への接続、監査、自社環境への配備、特徴量の生産までの開発時間で比較する。",
  growth: "2025年に5,000万ドルのSeries Aを調達し、企業価値5億ドルを公表。San FranciscoとNew Yorkに拠点を持つが、日本法人・国内拠点は未確認。現行の日本リモート求人を1件確認。",
  role: "日本リモートのForward Deployed Engineerが、医療、金融、推薦の顧客で特徴量パイプラインを実装し、受注前後の技術窓口として営業・開発をつなぐ。",
  organization: "日本法人、国内拠点、日本事業責任者、日本語の契約・請求・技術支援体制は未確認。求人だけで正式進出とは判定しない。",
  career: "機械学習・データ基盤の実装を、顧客の判断品質、導入速度、監査性、商用拡張へ変えるForward Deployed Engineeringと日本市場初期の経験。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "日本法人・国内拠点は未確認。日本リモートのForward Deployed Engineer 1件を確認", japanSince: "未進出",
  customer: { company: "Verisoul", outcome: "リアルタイムの特徴量基盤で不正検知の更新を10倍速くし、新鮮な推論時データで検知精度を4倍に高めたと会社事例で説明。" },
  facts: [["起源","米国","リアルタイムの信用・リスク基盤を内製した経験から創業。"],["Series A","5,000万ドル","2025年会社公表。"],["企業価値","5億ドル","2025年会社公表。"],["顧客成果","10倍・4倍","Verisoulの更新速度と検知精度。"],["国内拠点","未確認","San Francisco・New York以外の日本拠点は未確認。"],["日本求人","1件","Forward Deployed Engineer。"]],
  products: [["Chalk Data Platform","特徴量とデータ処理を学習・一括評価・リアルタイム推論で共通化。","https://chalk.ai/"],["Chalk Compute","エージェントのデータ計算とサンドボックスを顧客環境で実行。","https://chalk.ai/compute"],["Feature Store","低遅延の特徴量配信とバッチ・時点整合データを管理。","https://chalk.ai/feature-store"]],
  competitors: "Tecton、Databricks、Snowflake、Feast、クラウド各社、企業の内製機械学習データ基盤",
  leader: ["Marc Freed-Finnegan","Co-Founder and Chief Executive Officer","https://chalk.ai/about"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/chalk"],
  work: ["フルリモート","Japan","国内拠点への出社日数は未確認","Japanリモート求人","顧客訪問・出張の頻度は未確認"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本リモートのForward Deployed Engineerは強い初期シグナルだが、日本法人、国内拠点、日本語の契約・技術支援は未確認。",
    signal: "日本を勤務地とするForward Deployed Engineerを公式募集し、顧客の機械学習基盤を受注前後で実装する人材に投資。",
    hurdle: "日本法人、国内拠点、日本事業責任者、日本語の契約・請求・障害対応、国内顧客の公開事例を確認できない。",
    conditions: ["日本の初期顧客で技術導入と更新・拡張の再現性を作る。", "日本語の販売、契約、請求、導入、障害支援の責任分界を整える。", "国内案件と長期契約の規模が、日本専任の営業・技術体制の固定費を支える。", "金融・医療等のデータ所在、権限、監査、説明性を日本語で証明する。"],
    watches: ["Japanの営業・導入・支援求人", "日本法人・国内拠点", "日本語の契約・請求・障害対応", "国内顧客の数値事例", "日本のクラウド・データ基盤提携"],
  },
}, checkedAt);
chalk.sources.push(
  { id: "chalk-series-a", label: "Chalk $50M Series A", url: "https://chalk.ai/blog/announcing-chalk-50-seriesa-funding", kind: "企業公式", scope: "調達・企業価値・顧客基盤", checkedAt },
  { id: "chalk-verisoul", label: "Chalk customer story: Verisoul", url: "https://chalk.ai/customers/verisoul", kind: "企業公式", scope: "不正検知の更新速度・検知精度・監査性", checkedAt },
  { id: "gbiz-headcount-chalk", label: "gBizINFO Chalk法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
chalk.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでChalkに紐づく国内法人番号・事業所情報を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-chalk" };
if (chalk.marketStatus.japanGrowth) {
  chalk.marketStatus.japanGrowth.headline = "日本リモート求人1件・国内法人と拠点は未確認";
  chalk.marketStatus.japanGrowth.narrative = "日本を勤務地とするForward Deployed Engineerの公式求人を確認した。一方、日本法人、国内拠点、日本事業責任者、日本語の契約・請求・障害対応は確認できず、正式進出とは判定しない。";
}

export function applyDaily20260927Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.docusign;
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => item.label !== "Market Development Representative求人終了"),
    { year: "2026.09.27", label: "Market Development Representative求人終了", detail: "公式求人URLが404を返したため掲載から除外。これだけで日本事業縮小や採用停止を意味しない。", sourceId: "docusign-job" },
  ];
}

export const daily20260927IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { box, "applied-intuition": appliedIntuition, chalk };
