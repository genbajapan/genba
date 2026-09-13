import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-14";

const substack = buildDailyCompanyIntelligence({
  slug: "substack", name: "Substack", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/substack/1c76f297-ed2b-4349-a29d-34f1edf1f3be", officialUrl: "https://substack.com/about",
  customersUrl: "https://substack.com/about", financeUrl: "https://substack.com/about",
  problem: "作り手が媒体やSNSの配信規則に依存し、読者との関係、連絡先、課金、収益を自分で継続管理しにくい課題を解く。",
  origin: "2017年、Chris Best、Hamish McKenzie、Jairaj Sethiが、作り手と読者が直接つながる持続的な出版モデルを作るため創業。",
  externalNeed: "検索・SNSの推薦が変動し、生成AIで情報量も増える中、作り手は信頼する読者へ直接届き、継続課金と退出可能性を自ら持つ必要がある。",
  solution: "記事、メール、音声、動画、コミュニティ、有料購読と推薦を一つの出版・発見基盤で提供する。",
  selection: "配信機能だけでなく、読者データの可搬性、有料転換、推薦網からの新規読者、手数料、作り手のブランド所有で比較する。",
  growth: "公式Aboutは有料購読500万件超、新規購読者の半分超が基盤内ネットワーク経由と掲載。東京Remoteで日本事業責任者を募集。",
  role: "Head of Partnerships, Japanが日本の作り手発掘、参加支援、提携、イベント、ブランド認知と国内ニーズの本社還流を担う。",
  organization: "日本法人・国内拠点・国内在籍人数は未確認。東京を拠点とするRemoteの日本事業責任者求人を確認。",
  career: "単一の提携営業を超え、作り手の供給、読者需要、推薦ネットワーク、ブランドを同時に立ち上げる市場開発経験。",
  globalHeadcount: "非公開（現員の公式絶対数を確認できず）", japanPresence: "日本法人・国内拠点は未確認。東京RemoteのHead of Partnerships, Japanを募集", japanSince: "2026年に日本事業責任者求人を確認",
  customer: { company: "作り手全体", outcome: "公式Aboutは作り手が購読収益の90%を受け取り、新規購読者の半分超がSubstack内ネットワークから来ると説明。個別の日本事例ではない。" },
  facts: [["創業","2017年","作り手と読者を直接つなぐ出版モデルとして創業。"],["有料購読","500万件超","公式About掲載。読者人数とは限らず重複購読を含み得る。"],["作り手取り分","90%","決済手数料を除く。"],["新規購読経路","半分超","Substack内ネットワーク経由と会社説明。"],["日本体制","未確認","法人・拠点・在籍人数は未確認。"],["日本求人","1件","Head of Partnerships, Japan。"]],
  products: [["Substack","記事、メール、有料購読、音声・動画を一つの出版基盤で運営。","https://substack.com/about"],["Recommendations","作り手同士の推薦から新しい読者との接点を作る。","https://substack.com/about"],["Notes・App","読者が作り手と継続的に発見・交流する導線。","https://substack.com/"],],
  competitors: "beehiiv、Ghost、Patreon、YouTube、各種SNS・自社メディア基盤",
  leader: ["Chris Best","Co-founder and Chief Executive Officer","https://substack.com/about"], local: ["未確認","Head of Partnerships, Japan","https://jobs.ashbyhq.com/substack/1c76f297-ed2b-4349-a29d-34f1edf1f3be"],
  work: ["フルリモート","東京Remote","定例出社日なし","東京からのRemoteを公式求人に明記","イベント、作り手訪問、雇用主体、出張頻度は選考で確認"],
}, checkedAt);
substack.sources.push({ id: "gbiz-headcount-substack", label: "gBizINFO Substack法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
substack.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Substackと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-substack" };

const tradlinx = buildDailyCompanyIntelligence({
  slug: "tradlinx", name: "Tradlinx", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/cygnify/0154cd14-2240-4a4a-8a78-bb4dec562da7", officialUrl: "https://www.tradlinx.com/",
  customersUrl: "https://blogs.tradlinx.com/how-shinwon-improved-supply-chain-efficiency-70-with-tradlinx-ocean-visibility/", financeUrl: "https://blogs.tradlinx.com/how-tradlinx-is-reinventing-supply-chain-visibility-in-a-volatile-world/",
  problem: "荷主や物流会社が船会社ごとのサイトと表計算を巡回し、到着予定、積み替え、遅延、超過保管料の兆候を早くつかめない課題を解く。",
  origin: "2015年にソウルで、国際物流に分散する貨物情報を同じ基準で見えるようにするサービスとして創業。",
  externalNeed: "地政学、港湾混雑、気象で到着時刻が揺れる中、荷主は在庫、工場、顧客約束を単一の船会社予定ではなく確率と例外情報で動かす必要がある。",
  solution: "50社超の船会社データを標準化し、貨物追跡、AI到着予測、遅延・超過保管リスク、ERP・TMS連携を一元管理して供給網の意思決定を改善する。",
  selection: "対象航路だけでなく、更新頻度、到着予測の誤差、イベント定義、ERP連携、例外を行動へ変えるまでの時間で比較する。",
  growth: "公式サイトは世界6万社超、主要航路98%を掲載。2023年から海外展開を進め、東京で日本進出の最初の事業開発責任者を募集。",
  role: "Japan Business Development Managerが進出戦略、最初の基準顧客、企業営業、提携、現地化、本社報告と初期採用まで担う。",
  organization: "日本法人・国内拠点・国内在籍人数は未確認。東京Hybridの最初の日本進出責任者求人を確認。",
  career: "物流・供給網の現場課題をデータ製品へ翻訳し、最初の顧客と販売網から日本組織を0→1で作る経験。",
  globalHeadcount: "非公開（現員の公式絶対数を確認できず）", japanPresence: "日本法人・国内拠点は未確認。東京Hybridで最初の日本事業開発責任者を募集", japanSince: "2026年に日本進出求人を確認",
  customer: { company: "Shinwon", outcome: "船会社サイトとフォワーダー確認に頼る作業をOcean Visibilityへ集約し、供給網管理の効率を70%改善したと会社事例で紹介。" },
  facts: [["創業","2015年","ソウルで創業。"],["利用企業","6万社超","公式サイト掲載。無償・有償の内訳は未確認。"],["主要航路覆盖","98%","50社超の主要船会社に対応。"],["AI到着予測","±24時間で92.5%","会社測定。母数・第三者監査は未確認。"],["日本体制","最初の責任者募集","法人・拠点は未確認。"],["日本求人","1件","Japan Business Development Manager。"]],
  products: [["Ocean Visibility","貨物、船舶、到着予定、遅延を同じ画面で追跡。","https://www.tradlinx.com/products"],["AI-ETA","過去データ、混雑、気象等から到着時刻を確率で予測。","https://www.tradlinx.com/"],["Integrations & API","ERP・TMSへ標準化した追跡と予測を連携。","https://www.tradlinx.com/"],],
  competitors: "project44、FourKites、Vizion、Windward、船会社ポータル・表計算・内製連携",
  leader: ["Park Min-gyu","Chief Executive Officer","https://blogs.tradlinx.com/how-tradlinx-is-reinventing-supply-chain-visibility-in-a-volatile-world/"], local: ["未確認","Japan Business Development Manager","https://jobs.ashbyhq.com/cygnify/0154cd14-2240-4a4a-8a78-bb4dec562da7"],
  work: ["ハイブリッド","東京Hybrid","出社日数は未確認","完全リモートではない","雇用主体、出社場所、初期支援、出張、英語・韓国語の比率は選考で確認"],
}, checkedAt);
tradlinx.sources.push({ id: "gbiz-headcount-tradlinx", label: "gBizINFO Tradlinx法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
tradlinx.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Tradlinxと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-tradlinx" };

const motherduck = buildDailyCompanyIntelligence({
  slug: "motherduck", name: "MotherDuck", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/MotherDuck", officialUrl: "https://motherduck.com/about-us/",
  customersUrl: "https://motherduck.com/customers/", financeUrl: "https://motherduck.com/blog/motherduck-open-for-all-with-series-b/",
  problem: "分析データが大きい前提の分散基盤は、小中規模のデータでも構築、運用、待ち時間、費用が重くなり、利用者が素早く問いを試せない課題を解く。",
  origin: "2022年、元Google BigQueryのJordan TiganiがDuckDBを見て、端末の速さとクラウドの共有性を組み合わせたサーバーレス分析を作ろうと創業。",
  externalNeed: "AIでSQLや分析作業が増えるほど、企業は大量処理だけでなく、開発者・分析者が小さく始め、権限と費用を保ちながら本番へ広げる必要がある。",
  solution: "端末上のDuckDBとクラウドを同じSQL体験でつなぎ、保存、共有、アプリ組み込み、サーバーレス分析を提供する。",
  selection: "最大規模だけでなく、端末とクラウドの分担、起動・応答速度、DuckDB互換性、運用負荷、データ所在、処理単価で比較する。",
  growth: "2023年に累計調達1億ドルと公開時2,000利用者を公表。欧州専用領域まで展開したが、日本法人・拠点・日本求人は未確認。",
  role: "現行の顧客技術求人は米国拠点。日本担当、日本から応募できる役割、日本語の販売・支援体制は確認できない。",
  organization: "日本法人・国内拠点・日本求人は未確認。米国を中心とする公式求人を確認。",
  career: "将来進出時は、DuckDBの開発者採用を小さな分析用途から企業の共有・統制・本番運用へ広げる市場開発経験になり得る。",
  globalHeadcount: "非公開（現員の公式絶対数を確認できず）", japanPresence: "日本法人・国内拠点・日本求人は未確認", japanSince: "未進出",
  customer: { company: "初期利用者", outcome: "2023年の公開時に2,000利用者と100人超からの製品フィードバックを会社が公表。日本顧客や有償顧客の内訳ではない。" },
  facts: [["創業","2022年","シアトルでチームを立ち上げ。"],["累計調達","1億ドル","2023年Series B時点。売上ではない。"],["公開時利用者","2,000人","2023年会社発表。現行数ではない。"],["製品","DuckDB連携","DuckDB Labsと共同で商用クラウドを構築。"],["日本法人","未確認","国内法人・拠点を確認できず。"],["日本求人","0件","公式Ashbyで確認。"]],
  products: [["MotherDuck","DuckDBとクラウドをつなぐサーバーレス分析基盤。","https://motherduck.com/"],["DuckDB Cloud Integration","端末とクラウドでSQL処理を分担。","https://motherduck.com/docs/"],["Embedded Analytics","顧客向けアプリへ分析を組み込む。","https://motherduck.com/"],],
  competitors: "Snowflake、Google BigQuery、Databricks、ClickHouse、DuckDB単体・PostgreSQL・内製",
  leader: ["Jordan Tigani","Co-founder and Chief Duck Herder","https://motherduck.com/about-us/"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/MotherDuck"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","米国求人のHybrid条件を将来の日本求人へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。DuckDBの開発者認知と従量型の分析需要は追い風だが、日本法人、販売・支援体制、国内顧客事例、日本向けデータ配置は未確認。",
    signal: "一般提供後に欧州専用領域を開設し、地域ごとのデータ所在と販売要件へ対応を広げている。",
    hurdle: "日本法人、国内拠点、日本求人、日本語支援、国内顧客、国内または近接地域のデータ配置を確認できない。",
    conditions: ["日本のDuckDB利用から有償クラウドへの転換と継続利用を確認する。", "日本語の契約・技術支援とデータ所在の選択肢を整える。", "開発者導入を企業の共有・統制・本番予算へ広げる販売再現性を作る。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語製品・支援", "国内顧客事例", "Asia Pacificのデータ領域"],
  },
}, checkedAt);
motherduck.sources.push({ id: "gbiz-headcount-motherduck", label: "gBizINFO MotherDuck法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
motherduck.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "MotherDuckと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-motherduck" };

export const daily20260914IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { substack, tradlinx, motherduck };
