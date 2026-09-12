import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-13";

const equativ = buildDailyCompanyIntelligence({
  slug: "equativ", name: "Equativ", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/equativ/ba1faf59-5901-4caf-9b17-cfa5aaf1fdcd", officialUrl: "https://www.equativ.com/company/locations",
  customersUrl: "https://www.equativ.com/blog/pioneered-in-japan-lei-zhang", financeUrl: "https://www.equativ.com/press/equativ-japan-expansion",
  problem: "媒体社と広告主の間に取引経路とデータが増え、広告在庫の品質、収益、ブランド安全性、利用者への配慮を同時に管理しにくい課題を解く。",
  origin: "2001年にパリで創業し、媒体社向け広告配信からCTV、広告取引、キュレーション、リテールメディアへ範囲を広げた。",
  externalNeed: "第三者Cookieの縮小、CTV拡大、広告品質への要求により、媒体社は自社データと掲載面を守りながら透明な買い手需要を増やす必要がある。",
  solution: "媒体社向け収益化、SSP、CTV広告配信と、広告会社向けのキュレーションを一つの独立系基盤でつなぐ。",
  selection: "広告需要の量だけでなく、手数料と取引の透明性、掲載面の品質、CTV・リテールメディア対応、媒体社の収益改善で比較する。",
  growth: "2025年の日本進出時に世界19カ国750人超と過去3年で3倍の規模を公表。現行求人は日本チーム8人、国内媒体社20社超を記載。",
  role: "東京のPublisher Key Account Managerが媒体社の新規開拓、契約、請求、運用、四半期レビュー、追加収益までを担う。",
  organization: "EQUATIV JAPAN株式会社。公式求人は東京チーム8人、gBizINFOは事業所被保険者数5人を掲載。",
  career: "小規模な国内組織で、媒体社の事業開発、広告技術、運用、顧客拡大を一つの収益責任として持つ経験。",
  globalHeadcount: "750人超（2025年会社公式。現員は変動あり）", japanPresence: "EQUATIV JAPAN株式会社・東京・虎ノ門。gBizINFO事業所被保険者数5人", japanSince: "2025年2月に日本進出を公式発表",
  customer: { company: "講談社", outcome: "自社の一次データと良質な掲載面を使う広告取引のキュレーションを進め、媒体価値を広告主へ届ける取り組みを紹介。" },
  facts: [["創業","2001年","パリで創業。"],["世界展開","19カ国","2025年会社公表。"],["従業員","750人超","2025年会社公表。"],["国内チーム","8人","現行公式求人。"],["国内媒体社","20社超","現行公式求人。"],["日本求人","1件","Publisher Key Account Manager。"]],
  products: [["Publisher Solutions","広告配信、SSP、CTV、収益化を媒体社向けに提供。","https://www.equativ.com/publishers"],["Maestro by Equativ","広告在庫とデータをキュレーションし、広告会社へ提供。","https://www.equativ.com/curation"],["CTV Solutions","CTVの広告配信、取引、収益化を支援。","https://www.equativ.com/ctv"]],
  competitors: "Google Ad Manager、Magnite、PubMatic、各種媒体社内製基盤",
  leader: ["Arnaud Créput","Chief Executive Officer","https://www.equativ.com/company/leadership"], local: ["Philip Tabet","Managing Director, Japan","https://www.equativ.com/press/equativ-japan-expansion"],
  work: ["ハイブリッド","東京Hybrid","週2日在宅と公式求人に記載","完全リモートではない","顧客訪問・出張・変更後の勤務条件は面接確認"],
}, checkedAt);
equativ.sources.push({ id: "gbiz-headcount-equativ", label: "gBizINFO EQUATIV JAPAN株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=9020001160428", kind: "公的機関", scope: "日本法人・所在地・事業所被保険者数", checkedAt });
equativ.companyStats.japanHeadcount = { value: "5人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。現行公式求人のチーム8人とは定義・時点が異なる。", sourceId: "gbiz-headcount-equativ" };

const quantexa = buildDailyCompanyIntelligence({
  slug: "quantexa", name: "Quantexa", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/quantexa", officialUrl: "https://www.quantexa.com/about/",
  customersUrl: "https://www.quantexa.com/featured-customers/", financeUrl: "https://www.quantexa.com/blog/2024-review/",
  problem: "顧客、取引、法人、外部情報が複数システムへ分断され、同一人物・企業と関係網を把握できず、金融犯罪や顧客判断の誤検知と調査工数が増える課題を解く。",
  origin: "2016年、Vishal Marriaが金融機関で分断データによりリスクと機会が見えない問題を経験し、ロンドンで創業。",
  externalNeed: "AIを重要判断へ使う企業ほど、入力データの名寄せ、関係性、由来、説明可能性を整え、規制と人の判断に耐える必要がある。",
  solution: "名寄せ、ネットワーク分析、知識グラフ、機械学習を組み合わせ、分断データから顧客・取引・リスクの文脈を作る。",
  selection: "照合精度だけでなく、大規模データの処理、関係網の説明、既存システムとの接続、誤検知と調査時間の改善で比較する。",
  growth: "会社は2025年3月の評価額26億ドル、世界900人超、100カ国、利用者1.5万人超を公表。東京で営業・技術営業2件を募集。",
  role: "東京のFSI Sales DirectorとSolution Engineerが、金融機関の新規開拓、課題発見、提案、技術検証、受注を分担する。",
  organization: "Quantexa Japan株式会社・東京。2023年に日本法人と日本事業開始、現在の国内在籍人数は未確認。",
  career: "金融・規制領域で、データ統合とAIを誤検知、調査時間、顧客判断の改善へつなぐ大企業営業・技術営業経験。",
  globalHeadcount: "900人超（会社公式）", japanPresence: "Quantexa Japan株式会社・東京・八重洲。国内の正確な在籍人数は未確認", japanSince: "2023年7月に日本事業開始を公式発表",
  customer: { company: "HSBC・Standard Chartered・ABN AMRO", outcome: "分断した顧客・取引データをつなぎ、金融犯罪対策の誤検知と調査を改善する事例を公開。" },
  facts: [["創業","2016年","ロンドンで創業。"],["評価額","26億ドル","2025年3月会社公表。"],["従業員","900人超","会社公式。"],["利用国","100カ国","会社公式。"],["利用者","1.5万人超","会社公式。"],["日本求人","2件","営業・技術営業。"]],
  products: [["Decision Intelligence Platform","分断データを名寄せし関係性と文脈を可視化。","https://www.quantexa.com/platform/"],["Financial Crime","顧客・取引網から金融犯罪リスクの調査を支援。","https://www.quantexa.com/solutions/financial-crime/"],["Customer Intelligence","顧客データを統合し判断と提案を改善。","https://www.quantexa.com/solutions/customer-intelligence/"]],
  competitors: "Palantir、SAS、Feedzai、各金融機関のデータ・調査基盤",
  leader: ["Vishal Marria","Founder and Chief Executive Officer","https://www.quantexa.com/about/leadership/vishal-marria/"], local: ["未確認","日本事業責任者","https://www.quantexa.com/ja/get-in-touch/"],
  work: ["ハイブリッド","東京Hybrid","出社日数は公式求人で未確認","完全リモートの明記なし","顧客訪問・出張・勤務条件は職種ごとに確認"],
}, checkedAt);
quantexa.sources.push({ id: "gbiz-headcount-quantexa", label: "gBizINFO Quantexa Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=8010001236188", kind: "公的機関", scope: "日本法人・所在地・事業所情報の確認", checkedAt });
quantexa.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と所在地は特定できるが、事業所被保険者数を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-quantexa" };

const torq = buildDailyCompanyIntelligence({
  slug: "torq", name: "Torq", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/torq/jobs/5831930004", officialUrl: "https://torq.io/company/",
  customersUrl: "https://torq.io/customers/", financeUrl: "https://torq.io/news/torq-seriesd/",
  problem: "セキュリティ警告が増え、担当者が調査、優先順位付け、対応を手作業でつなぐため、重要事象の見落としと対応遅延が生じる課題を解く。",
  origin: "2020年、Ofer Smadari、Leonid Belkind、Eldad Livniが、セキュリティ運用の反復作業を企業級の自動化へ変えるため創業。",
  externalNeed: "攻撃と警告が人員より速く増える一方、企業は誤作動を抑え、権限、証跡、人の監督を残したまま調査と対応を高速化する必要がある。",
  solution: "複数のセキュリティ製品から情報を集め、AIエージェントが警告の調査、優先順位付け、対応手順の実行を自動化する。",
  selection: "既存製品との接続数だけでなく、調査精度、誤作動時の制御、監査証跡、導入後の自動化率と対応時間で比較する。",
  growth: "2026年に1.4億ドルのSeries D、評価額12億ドル、累計調達3.32億ドルを公表。世界430人超で、日本勤務可能なAPAC営業責任者を募集。",
  role: "Regional Sales Managerが新設するAPAC地域で戦略顧客と販売パートナーを開拓する。勤務地は日本またはSingaporeだが、日本専任・日本雇用とは断定しない。",
  organization: "日本法人・国内拠点は未確認。公式求人が日本をAPAC営業責任者の勤務地候補に含める。",
  career: "正式進出前後の市場選定、販売網、戦略顧客、複雑なセキュリティ商談を一から作る地域営業経験。",
  globalHeadcount: "430人超（会社公式）", japanPresence: "日本法人・国内拠点は未確認。日本またはSingapore勤務のAPAC営業求人を確認", japanSince: "日本進出の兆しあり",
  customer: { company: "Valvoline", outcome: "導入48時間以内にフィッシング調査を自動化し、担当者の作業時間と対応時間を削減したと紹介。" },
  facts: [["創業","2020年","セキュリティ運用自動化を目的に創業。"],["従業員","430人超","会社公式。"],["Series D","1.4億ドル","2026年会社公表。"],["評価額","12億ドル","2026年会社公表。"],["累計調達","3.32億ドル","2026年会社公表。"],["日本関連求人","1件","日本またはSingapore勤務のAPAC営業。"]],
  products: [["Torq AI SOC Platform","警告の調査、優先順位付け、対応をAIと自動化でつなぐ。","https://torq.io/"],["AI Agents","調査と対応手順を組織のセキュリティ運用へ組み込む。","https://torq.io/ai-soc/"],["Hyperautomation","既存のセキュリティ製品を接続し反復作業を自動化。","https://torq.io/security-hyperautomation/"]],
  competitors: "Palo Alto Networks、Microsoft、CrowdStrike、Splunk、各種SOAR・SIEMと内製自動化",
  leader: ["Ofer Smadari","Chief Executive Officer and Co-Founder","https://torq.io/company/"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/torq"],
  work: ["フルリモート","日本またはSingapore Remote","オフィス日数の指定なし","日本からのRemoteを公式求人に明記","雇用主体、担当地域、出張、時差は面接確認"],
  preEntry: {
    verdict: "進出可能性は中。日本を勤務地候補に含む初期APAC営業求人は強いシグナルだが、日本法人、専任体制、国内顧客事例は未確認。",
    signal: "新設するAPAC地域のRegional Sales Managerを、日本またはSingapore勤務として公式募集。",
    hurdle: "日本法人、国内拠点、日本専任範囲、日本語要件、国内導入・支援体制を確認できない。",
    conditions: ["日本企業の案件量と販売再現性を確認する。", "日本語の契約・技術支援と国内販売パートナーを整える。", "国内顧客の更新・拡大が専任体制の固定費を上回る。"],
    watches: ["Japan専任求人", "日本法人・国内拠点", "日本語製品・支援", "国内顧客事例", "APAC求人のJapan territory表記"],
  },
}, checkedAt);
torq.sources.push({ id: "gbiz-headcount-torq", label: "gBizINFO Torq法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt });
torq.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "Torqと結びつく国内法人・事業所を特定できず、日本在籍人数を0人とは扱わない。", sourceId: "gbiz-headcount-torq" };

export const daily20260913IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  equativ,
  quantexa,
  torq,
};
