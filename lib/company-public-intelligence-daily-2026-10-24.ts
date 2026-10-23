import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-24";
const lucid = buildDailyCompanyIntelligence({
  slug: "lucid-vision-labs", name: "LUCID Vision Labs", jobConfirmed: true, jobUrl: "https://thinklucid.com/ja/careers/", officialUrl: "https://thinklucid.com/ja/about-us/", customersUrl: "https://thinklucid.com/ja/case-studies/", financeUrl: "https://thinklucid.com/ja/about-us/",
  problem: "工場、物流、ロボット、医療・科学装置で、対象物を正確に捉えるカメラの画質、速度、距離、筐体、通信、ソフトウェアが用途ごとに分断すると、検査精度と装置開発の再現性が下がる。",
  origin: "産業用カメラ企業を19年間率いたRod Barmanが、最新の画像センサーと標準ネットワークを素早く製品化するため2017年にカナダで創業した。",
  externalNeed: "製造の自動化、人手不足、品質トレーサビリティ、AI画像認識が広がるほど、装置メーカーはモデルだけでなく、安定した画像取得、低遅延、長期供給、現場統合を同時に成立させる必要がある。",
  solution: "Phoenix、Triton、Atlas、Helios等の2D・3D産業用カメラとArena SDKを、GigE Vision等の標準に沿って提供し、装置ごとの画質・速度・筐体・距離要件へ合わせる。",
  selection: "Basler、Teledyne FLIR、IDS、Cognex等と比べ、必要なセンサー、帯域、3D方式、筐体、SDK、供給期間、技術支援を実機の検出率・処理速度・総開発工数で比較する。",
  growth: "2017年創業、会社沿革は2019年に従業員50人へ到達したと掲載。現在の公開規模はLinkedInで51〜200人、カナダ、ドイツ、日本、韓国、中国、台湾に拠点を持つ。売上・利益は非公開。",
  role: "東京のInside Sales / Customer ServiceとField Applications Engineerが、問い合わせ・受注運用から製品選定、設計採用、導入・技術支援までを分担する。",
  organization: "LUCID Vision Labs G.K.と東京・神田小川町のオフィスを会社公式で確認。日本の正確な在籍人数と現地責任者は未確認。",
  career: "画像、通信、ソフトウェア、装置要件を顧客の検査・自動化成果へつなぎ、営業運用と設計採用の両面で日本市場を広げる経験。",
  globalHeadcount: "51〜200人規模（LinkedIn公開レンジ。公式の現行絶対数は非公開）", japanPresence: "LUCID Vision Labs G.K.・東京オフィス。公式求人2件を確認", japanSince: "日本拠点の設立年は未確認",
  customer: { company: "Roboshin", outcome: "Helios2 ToFカメラを深度検知付きロボットハンドへ採用し、積み重ね可能な容器のハンドリングを実現したと会社事例で紹介。定量効果は未掲載。" },
  facts: [["創業","2017年","カナダで創業。"],["創業者","Rod Barman","産業用カメラ企業で19年の経営・技術経験。"],["従業員規模","51〜200人","LinkedIn公開レンジ。"],["世界拠点","6地域","カナダ、ドイツ、日本、韓国、中国、台湾。"],["日本拠点","東京都千代田区","会社公式。"],["日本求人","2件","東京の営業運用とFAE。"]],
  products: [["Phoenix・Triton・Atlas","GigE Vision対応の小型・高性能な2D産業用カメラ。","https://thinklucid.com/camera-models/"],["Helios","Time-of-Flight方式で深度を取得する3Dカメラ。","https://thinklucid.com/helios-time-of-flight-tof-camera/"],["Arena SDK","カメラの設定、画像取得、処理、統合を支える開発ソフトウェア。","https://thinklucid.com/arena-software-development-kit/"]],
  competitors: "Basler、Teledyne FLIR、IDS、Cognex、装置メーカーの内製撮像系", leader: ["Rod Barman","Founder and President","https://thinklucid.com/about-us/"], local: ["未確認","日本・APAC責任者","https://thinklucid.com/ja/contact-us/"],
  work: ["出社中心","東京オフィス勤務／FAEは東京拠点","固定出社日数は未掲載","Inside Salesは対面勤務。FAEは電話・ビデオ中心で例外的に訪問","顧客訪問、展示会、貸出機対応、時間帯は職種別に確認"],
}, checkedAt);
const hiring = lucid.marketStatus.milestones.find((milestone) => milestone.label === "日本採用を確認");
if (hiring) hiring.year = "2026.10";
lucid.sources.push(
  { id: "lucid-about", label: "LUCID会社情報", url: "https://thinklucid.com/ja/about-us/", kind: "企業公式", scope: "創業・沿革・経営陣・製品思想", checkedAt },
  { id: "lucid-contact", label: "LUCID日本連絡先", url: "https://thinklucid.com/ja/contact-us/", kind: "企業公式", scope: "日本法人名・東京拠点", checkedAt },
  { id: "lucid-careers-ja", label: "LUCID日本語採用情報", url: "https://thinklucid.com/ja/careers/", kind: "企業公式", scope: "Inside Sales求人・勤務地・責任", checkedAt },
  { id: "lucid-careers-global", label: "LUCID採用情報", url: "https://thinklucid.com/careers/", kind: "企業公式", scope: "Field Applications Engineer求人・勤務地・責任", checkedAt },
  { id: "lucid-cases", label: "LUCID導入事例", url: "https://thinklucid.com/ja/case-studies/", kind: "企業公式", scope: "用途・顧客・導入目的", checkedAt },
  { id: "lucid-linkedin", label: "LUCID LinkedIn企業ページ", url: "https://www.linkedin.com/company/lucid-vision-labs", kind: "外部集計", scope: "グローバル従業員規模レンジ", checkedAt },
  { id: "gbiz-headcount-lucid", label: "gBizINFO LUCID Vision Labs法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
lucid.companyStats.japanOffice = { value: "東京都千代田区神田小川町", detail: "会社公式でLUCID Vision Labs G.K.と東京オフィスを確認。", sourceId: "lucid-contact" };
lucid.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京オフィスは会社公式で確認したが、gBizINFOの事業所情報で被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-lucid" };
if (lucid.salesMarketOutlook) lucid.salesMarketOutlook.cases = [{ company: "Roboshin", need: "積み重ね可能な容器を扱うロボットハンドへ深度情報を組み込み、現場自動化の用途を広げる必要があった。定量成果は未掲載。", sourceId: "lucid-cases" }];
export const daily20261024IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { "lucid-vision-labs": lucid };
