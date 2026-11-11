import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";
import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const checkedAt = "2026-11-11";

const weka = buildDailyCompanyIntelligence({
  slug: "weka", name: "WEKA", jobConfirmed: true,
  jobUrl: "https://www.weka.io/careers?gh_jid=5199234007", officialUrl: "https://www.weka.io/company/our-story",
  customersUrl: "https://www.weka.io/customer", financeUrl: "https://www.weka.io/article/a-strategic-step-forward-for-weka-an-open-letter-from-our-ceo",
  problem: "GPUを増やしても学習・推論へデータを十分な速度で渡せないと、高価な計算資源が待機し、AIの処理時間と単位コストが上がる。",
  origin: "2014年、従来のストレージ製品を継ぎ足すのではなく、大規模な非構造データと高速計算に合う分散データ基盤を作る目的から創業した。",
  externalNeed: "生成AIが学習中心から長い文脈を扱う推論・エージェントへ広がり、企業にはGPUだけでなく、データ供給、キャッシュ、消費電力、復旧性を一つのAI基盤として最適化することが求められる。",
  solution: "NeuralMeshで高速ストレージと拡張GPUメモリを一つの分散基盤へまとめ、学習・推論のデータ供給、GPU利用率、処理時間、運用を改善する。",
  selection: "従来型ストレージ、オブジェクトストレージ、クラウド各社のサービスと比べ、実際のAI処理でGPU待機時間、学習・推論速度、障害時の復旧、拡張時の運用負荷を測れる点で比較する。",
  growth: "2024年に1.4億ドルのSeries Eを16億ドル評価で調達し、同年にARR 1億ドル超を公表。公式求人はFortune 50の30%以上で採用と説明する。",
  role: "東京のRegional Sales Managerは日本最初のSales Executiveとして大企業の新規開拓、営業計画、パートナー共同販売、社内SE・製品・支援部門との営業プロセスを担う。",
  organization: "東京勤務の日本最初のSales Executive求人は確認できるが、日本法人、常設拠点、国内雇用主体、既存の国内人数は未確認。",
  career: "AIインフラの技術価値を日本の大企業の投資判断へ翻訳し、市場、顧客、パートナー、社内支援体制をゼロから作る経験。",
  globalHeadcount: "会社公式に従業員数を掲載するが動的表示の数値を取得できず、正確な現員は未確認", japanPresence: "東京勤務の日本最初のSales Executive求人あり。法人・常設拠点は未確認", japanSince: "2026年に日本最初の営業求人を確認",
  customer: { company: "Luma AI", outcome: "公式事例で学習開始を40倍高速化し、H100 GPUがデータ待ちになる時間を減らしたと紹介。" },
  facts: [["創業","2014年","大規模データと高速計算向けの分散基盤を開発。"],["Series E","1.4億ドル","2024年、16億ドル評価で調達。"],["ARR","1億ドル超","2024年実績をCEO公開書簡で公表。"],["顧客基盤","Fortune 50の30%以上","現行公式求人の会社説明。"],["日本法人","未確認","日本求人はあるが法人・拠点・雇用主体は未確認。"],["日本求人","1件","Regional Sales Manager, Tokyo。"]],
  products: [["NeuralMesh","AI学習・推論向けの高速データ・メモリ基盤。","https://www.weka.io"],["WEKApod","NeuralMeshを搭載するAIストレージ・メモリ装置。","https://www.weka.io/news/wekapod-3-densest-ai-storage-memory-system"],["WEKA on Cloud","クラウドのGPU・計算環境へ分散データ基盤を提供。","https://www.weka.io"]],
  competitors: "VAST Data、DDN、Pure Storage、クラウド各社のファイル・オブジェクトストレージ",
  leader: ["Liran Zvibel","Co-founder / Chief Executive Officer","https://www.weka.io/company/our-story"], local: ["未確認","日本事業責任者","https://www.weka.io/careers?gh_jid=5199234007"],
  work: ["未確認","東京勤務","固定出社日数は未確認","完全リモートの明記なし","顧客訪問・イベントに必要な出張あり"],
  preEntry: {
    verdict: "進出の兆しは強い。日本最初の営業責任者を現行公式求人で確認したが、法人・拠点・雇用主体・既存国内顧客は未確認。",
    signal: "東京勤務で日本最初のSales Executiveを募集し、日本市場の新規顧客とパートナー網の構築を明記。",
    hurdle: "一人目営業が使える日本語の技術支援、導入、契約、保守体制と既存顧客の公開がない。",
    conditions: ["日本での雇用・契約主体と常設拠点を明確にする。", "日本語のSE・導入・サポートとパートナー体制を整える。", "国内のAI基盤案件で再現可能な導入成果を作る。"],
    watches: ["日本法人・国内拠点", "国内雇用主体", "日本SE・CS求人", "国内顧客事例", "販売・導入パートナー"],
  },
}, checkedAt);
weka.companyStats.japanHeadcount = { value: "未確認", detail: "日本最初の営業求人は確認したが、日本法人・国内総人数は公式情報から特定できない。", sourceId: "weka-job" };
weka.companyStats.japanOffice = { value: "常設拠点未確認", detail: "公式求人の勤務地は東京。常設オフィスの住所は確認できない。", sourceId: "weka-job" };
weka.facts.push({ label: "2024年年間売上規模（ARR）", value: "$100M超", detail: "CEO公式書簡で2024年にARR 1億ドルを超えたと公表。売上高ではなく年次経常収益。", sourceIds: ["weka-finance"] });

const avepoint = buildDailyCompanyIntelligence({
  slug: "avepoint", name: "AvePoint", jobConfirmed: false,
  jobUrl: "https://www.avepoint.com/careers", officialUrl: "https://www.avepoint.com/leadership/ken-shiomitsu",
  customersUrl: "https://www.avepoint.com/case-studies/kao-corporation-delivers-safe-external-collaboration-in-microsoft-teams-simplifies-lifecycle-management-and-cuts-it-service-time-with-avepoint-cloud-governance",
  financeUrl: "https://www.avepoint.com/news/avepoint-announces-fourth-quarter-and-full-year-2025-financial-results-260226",
  problem: "Microsoft 365や複数SaaSへデータと権限が広がると、バックアップ、外部共有、ライフサイクル、監査、AI利用の統制が個別作業になり、情報漏えいと運用負荷が増える。",
  origin: "2001年に米国で、SharePoint環境の移行、保護、統制を自動化する目的から創業し、複数SaaSとAIのデータ信頼基盤へ広げた。",
  externalNeed: "生成AIとエージェントが社内データを使うほど、企業には利用を止めずに権限、保持、復旧、機密情報、監査証跡を継続管理することが求められる。",
  solution: "Microsoft 365や複数SaaSのバックアップ、移行、権限、ライフサイクル、データ保護を統合し、AIへ使えるデータの信頼性と統制を整える。",
  selection: "Microsoft標準機能、個別バックアップ、権限管理製品と比べ、移行から保護・統制・復旧までを複数SaaSへ広げ、運用工数と監査可能性を測れる点で比較する。",
  growth: "会社公式は2万8,000超の組織と6,000のチャネルパートナーを支援すると説明。日本法人、Head of Japan、複数の国内顧客事例を確認した。",
  role: "実行日の公式Careerを確認したが、日本向け現行対象職種は特定できない。日本組織は販売、導入、変革、顧客成功までをHead of Japanの責任範囲として公式掲載する。",
  organization: "AvePoint Japan株式会社。Head of JapanのKen Shiomitsuが国内の製品開発、販売、業務コンサルティング、導入、変革、顧客成功を統括。",
  career: "Microsoft 365とAIデータ統制を、移行、保護、権限、監査、利用定着まで国内顧客の業務へ実装する経験。",
  globalHeadcount: "現行公式ページで正確な従業員数は未確認", japanPresence: "AvePoint Japan株式会社・東京・Head of Japan・国内導入事例あり", japanSince: "2008年に日本法人設立を公式発表",
  customer: { company: "花王", outcome: "Teamsの外部共有とライフサイクルを統制し、外部利用者を含むチーム作成時間を短縮したと公式事例で紹介。" },
  facts: [["創業","2001年","米国で創業。"],["日本法人","2008年","AvePoint Japan株式会社を設立。"],["顧客","2万8,000超","会社公式Careerの会社説明。"],["パートナー","6,000","会社公式Careerの会社説明。"],["国内責任者","Ken Shiomitsu","Head of Japanとして国内事業を統括。"],["日本求人","0件確認","実行日の公式Careerで対象職種を特定できず。"]],
  products: [["AvePoint Confidence Platform","SaaSデータの保護、統制、復旧、AI準備を統合。","https://www.avepoint.com/?country=jp&culture=ja-jp"],["Cloud Backup","Microsoft 365等のデータを保護・復旧。","https://www.avepoint.com/products/cloud-backup"],["Cloud Governance","Teams・SharePoint等の権限とライフサイクルを統制。","https://www.avepoint.com/products/cloud-governance"]],
  competitors: "Microsoft標準機能、Veeam、Commvault、Rubrik、各種SaaS管理・データ統制製品",
  leader: ["Tianyi Jiang","Co-founder / Chief Executive Officer","https://www.avepoint.com/leadership"], local: ["Ken Shiomitsu","Head of Japan","https://www.avepoint.com/leadership/ken-shiomitsu"],
  work: ["未確認","日本組織あり・現行対象求人は未確認","該当求人なし","勤務条件は未確認","募集再開時に職種別条件を確認"],
}, checkedAt);
avepoint.companyStats.japanHeadcount = { value: "未確認", detail: "日本法人と国内責任者は確認したが、国内の正確な在籍人数は公開情報から特定できない。", sourceId: "avepoint-company" };
avepoint.companyStats.japanOffice = { value: "東京", detail: "日本法人と東京拠点を会社公式情報で確認。", sourceId: "avepoint-company" };
avepoint.facts.push({ label: "2025年通期売上", value: "$419.5M", detail: "会社公式の2025年通期決算。SaaS売上は3億1,920万ドル。", sourceIds: ["avepoint-finance"] });

const vastData = buildDailyCompanyIntelligence({
  slug: "vast-data", name: "VAST Data", jobConfirmed: false,
  jobUrl: "https://www.vastdata.com/careers", officialUrl: "https://www.vastdata.com/about",
  customersUrl: "https://www.vastdata.com/customers/hyundai", financeUrl: "https://www.vastdata.com/press-releases/vast-series-f-financing-at-30-billion-valuation",
  problem: "AIのファイル、表、ベクトル、ストリームが別々の基盤へ分断されると、GPU待機、データ移動、複製、権限、複数拠点の運用が増え、AIを本番へ広げにくい。",
  origin: "2016年、従来のストレージが性能、規模、単純さ、コストを同時に満たせない問題から、分散共有型のDASEアーキテクチャを一から設計した。",
  externalNeed: "企業がAIを実験から本番へ移すほど、学習データだけでなく、推論、ベクトル、イベント、エージェントの状態を複数拠点で安全かつ低遅延に扱う必要がある。",
  solution: "VAST AI OSがファイル、オブジェクト、表、ベクトル、ストリームとAI実行を一つの分散基盤へ統合し、GPU利用、データ移動、複数拠点運用を簡素化する。",
  selection: "従来型ストレージ、データベース、データレイク、クラウド各社の個別サービスと比べ、実際のAI処理でGPU利用率、データ移動、復旧、権限、複数拠点の総運用負荷を測れる点で比較する。",
  growth: "2026年のSeries Fで300億ドル評価、取引総額約10億ドルを公表。Fortune 100の25%超が戦略的AI施策で採用し、東京オフィスを公式連絡先へ掲載する。",
  role: "実行日の公式Careerを確認したが、日本向け現行対象職種は特定できない。東京拠点の販売・技術支援体制と国内雇用主体・人数は追加確認が必要。",
  organization: "会社公式Contactに東京都千代田区有楽町の日本オフィスを掲載。国内責任者、法人名、組織人数は未確認。",
  career: "AI工場、GPUクラウド、企業AIのデータ基盤を、計算資源の利用効率、運用、データ統制へつなぐ市場を日本で観測できる。",
  globalHeadcount: "現行公式ページで正確な従業員数は未確認", japanPresence: "東京都千代田区有楽町の日本オフィスを公式掲載", japanSince: "日本拠点の設置年は未確認",
  customer: { company: "Hyundai・Kia", outcome: "ADASとLLM開発をNVIDIA DGX SuperPOD上のVAST AI OSへ統合し、実データで2対1のデータ削減とゼロコピーの学習・シミュレーションを実現したと紹介。" },
  facts: [["創業","2016年","DASEアーキテクチャを一から設計。"],["Series F","約10億ドル","2026年、300億ドル評価。"],["Fortune 100","25%超","会社公式Aboutの採用比率。"],["成長","予約3.6倍","2025年1月期の前年比。"],["日本拠点","東京・有楽町","会社公式Contact。"],["日本求人","0件確認","実行日の公式Careerで対象職種を特定できず。"]],
  products: [["VAST AI OS","AIのデータ・計算サービスを一つの分散基盤へ統合。","https://www.vastdata.com"],["VAST DataStore","ファイルとオブジェクトの大規模データ基盤。","https://www.vastdata.com/platform/datastore"],["VAST DataBase","表・ベクトル・イベントを扱う分散データ基盤。","https://www.vastdata.com/platform/database"]],
  competitors: "WEKA、DDN、Pure Storage、NetApp、Dell、クラウド各社のAI・データ基盤",
  leader: ["Renen Hallak","Founder / Chief Executive Officer","https://www.vastdata.com/about"], local: ["未確認","日本事業責任者","https://www.vastdata.com/contact"],
  work: ["未確認","東京拠点あり・現行対象求人は未確認","該当求人なし","勤務条件は未確認","募集再開時に職種別条件を確認"],
}, checkedAt);
vastData.companyStats.japanHeadcount = { value: "未確認", detail: "東京オフィスは確認したが、国内法人名と正確な在籍人数は公開情報から特定できない。", sourceId: "vast-data-company" };
vastData.companyStats.japanOffice = { value: "東京都千代田区有楽町", detail: "1 Chome-13-1 Yurakucho。会社公式Contactで確認。", sourceId: "vast-data-company" };
vastData.facts.push({ label: "2023年年間売上規模（ARR）", value: "$100M超", detail: "会社公式発表で販売開始後3年以内にARR 1億ドルを超えたと公表。売上高ではなく年次経常収益。", sourceIds: ["vast-data-finance"] });

export const daily20261111IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  weka,
  avepoint,
  "vast-data": vastData,
};
