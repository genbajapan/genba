import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-22";

export const companies20261022Daily: Company[] = [
  {
    slug: "megaport",
    name: "Megaport",
    category: "Network as a Service・マルチクラウド接続",
    broadCategory: "セキュリティ・IT運用",
    hq: "ブリスベン（オーストラリア）",
    japanPresence: "Megaport Japan株式会社と東京拠点を公式確認。日本のSales Development Representativeと東京・大阪のSales Executiveを公式募集",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "クラウド、データセンター、拠点間のネットワークを、ポータルやAPIからオンデマンドで接続・変更できるNetwork as a Service企業。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.lever.co/megaport",
    tags: ["Network as a Service", "Multicloud", "Sales Executive", "SDR", "Tokyo", "Osaka"],
  },
  {
    slug: "tradinghub",
    name: "TradingHub",
    category: "取引監視・市場不正検知",
    broadCategory: "AI・データ基盤",
    hq: "ロンドン（英国）",
    japanPresence: "日本法人・国内拠点は未確認。東京で日本展開を主導する最初のSenior Relationship Managerを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "金融取引の市場影響と行動を数理モデルで分析し、単一商品・商品横断の市場不正を検知する取引監視ソフトウェア企業。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/tradinghub",
    tags: ["日本未進出", "Trade Surveillance", "RegTech", "Relationship Management", "Tokyo"],
    entryStatus: "not-entered",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の技術・規制・事業課題を商談と継続利用へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当社数、案件期間、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、更新・拡大で定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当市場の拡張、顧客成果、再利用できる販売・導入の型が次の役割の土台になる。",
      priorCompanies: "企業向けネットワーク、クラウド、金融市場、規制対応、データ分析、複雑商談の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、顧客戦略、地域事業開発、営業責任者へ広げやすい。",
    },
  };
}

export const jobs20261022Daily: Job[] = [
  makeJob({
    id: "megaport-sales-development-representative-japan-80b34baf",
    companySlug: "megaport",
    title: "Sales Development Representative",
    segment: "Japan Cloud Network・Pipeline Development",
    location: "日本",
    workStyle: "リモート。コワーキング利用制度あり",
    language: "日本語は流暢。英語水準は公式求人で明記なし",
    source: { label: "Megaport Careers (Lever)", url: "https://jobs.lever.co/megaport/80b34baf-e689-41e6-abb3-add16166efdc" },
    descriptionSummary: "日本の見込み顧客へ電話、メール、LinkedInで接点を作り、問い合わせと開拓施策から商談を選別・創出する。",
    genbaTake: "件数だけを追う役割ではなく、クラウド接続の構成と顧客課題を学び、日本営業組織の案件創出手順を作る入口。",
    desiredProfile: "日本市場の理解、法人営業開拓、SaaS・ネットワーク・クラウドへの基礎理解、曖昧な環境での自己管理が隣接する。",
    compensationReality: "給与、変動給、目標商談数、案件化基準、達成率は公式求人で確認できない。",
  }),
  makeJob({
    id: "megaport-sales-executive-japan-d8f1e7d3",
    companySlug: "megaport",
    title: "Sales Executive",
    segment: "Japan Enterprise Network as a Service Sales",
    location: "東京／大阪",
    workStyle: "ハイブリッド。販売パートナー行事へ通常週1〜2回参加",
    language: "公式求人で日本語・英語水準の明記なし",
    source: { label: "Megaport Careers (Lever)", url: "https://jobs.lever.co/megaport/d8f1e7d3-92f4-4172-9455-9b75bb95f0d5" },
    descriptionSummary: "大企業の新規開拓と既存拡大を担当し、クラウド・ネットワーク要件を設計して、直販と販売パートナーの両方で受注を進める。",
    genbaTake: "回線の価格比較ではなく、複数クラウドと拠点を素早く接続・変更する運用を、100万ドル超の企業商談へ変える役割。",
    desiredProfile: "法人向けクラウド、通信、SaaS、基盤の営業、Named Account、販売パートナー、複雑な大企業調達の経験が隣接する。",
    compensationReality: "給与、OTE、基本給・変動給比率、quota、達成率は公式求人で確認できない。",
  }),
];
