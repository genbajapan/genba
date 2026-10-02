import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-03";

export const companies20261003Daily: Company[] = [
  {
    slug: "back-market",
    name: "Back Market",
    category: "整備済み電子機器の循環型マーケットプレイス",
    broadCategory: "コマース・業界特化",
    hq: "パリ（フランス）",
    japanPresence: "日本向けサービス、東京のAPAC組織、原宿の期間限定店舗、東京勤務の公式求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "専門事業者が整備したスマートフォンやPCを品質基準、保証、返品制度とともに流通させる市場。東京で出品事業者の獲得・成長を担う事業開発職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/backmarket/7df95846-0fb0-4a42-9f35-71674ee096fd",
    tags: ["Circular Commerce", "Refurbished Tech", "Marketplace", "Business Development", "Japan"],
  },
  {
    slug: "bounce",
    name: "Bounce",
    category: "旅行者向け手荷物保管ネットワーク",
    broadCategory: "コマース・業界特化",
    hq: "サンフランシスコ（米国）",
    japanPresence: "東京・大阪・京都などでサービス提供中。東京勤務の日本事業開発求人を公式確認。日本法人名・国内在籍人数は未確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "ホテルや小売店の空き場所を旅行者の短期手荷物保管へ変えるネットワーク。日本で大手提携、新規事業、ロッカー・配送の立ち上げを担う事業開発職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0",
    tags: ["Travel Tech", "Marketplace", "Partnerships", "Business Development", "Japan"],
  },
  {
    slug: "alta-ares",
    name: "Alta Ares",
    category: "AI誘導型対ドローン・防空システム",
    broadCategory: "コマース・業界特化",
    hq: "パリ（フランス）",
    japanPresence: "日本法人・国内拠点は未確認。東京・名古屋で日本市場最初の専任事業開発職を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "AI誘導型迎撃機と指揮・センサーソフトウェアを組み合わせ、ドローンや巡航ミサイルへの防空を支援。日本市場最初の専任事業開発職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/alta-ares/7c82c080-2c9a-41cf-8936-d5719b59f47b",
    tags: ["Defense Tech", "Counter-UAS", "AI", "Business Development", "Pre-entry"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、市場開拓、顧客・提携先の成果、社内の製品・運用を一つの事業責任へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、既存案件、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、更新、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる市場開拓・導入支援の型が次の役割の土台になる。",
      priorCompanies: "市場開拓、企業営業、提携、複数の意思決定者を動かす事業開発の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、地域リード、提携責任者、顧客成功、事業開発へ広げやすい。",
    },
  };
}

export const jobs20261003Daily: Job[] = [
  makeJob({
    id: "back-market-business-development-manager-japan-7df95846",
    companySlug: "back-market",
    title: "Business Development Manager, Japan",
    segment: "Marketplace Business Development / Seller Growth",
    location: "Tokyo, Japan",
    workStyle: "Hybrid。週2日のリモート勤務と四半期ごとのリモート週を案内",
    language: "日本語ネイティブ水準、英語ビジネス水準。中国語は歓迎条件",
    source: { label: "Back Market Careers (Ashby)", url: "https://jobs.ashbyhq.com/backmarket/7df95846-0fb0-4a42-9f35-71674ee096fd" },
    descriptionSummary: "日本の整備済み端末事業者を新規開拓・導入し、既存出品者の品揃え、調達、価格、品質、販売成長をデータで改善する。",
    genbaTake: "出品者数を増やすだけでなく、品質と返品、在庫回転、価格、顧客信頼を両立させ、日本で循環型端末市場の供給側を作る役割。",
    compensationReality: "福利厚生と柔軟な勤務制度を案内するが、日本の給与、変動給、目標、達成率、株式は未記載。",
    desiredProfile: "公式求人は営業・事業開発・アカウント管理5〜7年、出品者・提携先の獲得、データ分析、部門横断の実行、日本語・英語を重視する。",
  }),
  makeJob({
    id: "bounce-business-development-manager-japan-dde5e989",
    companySlug: "bounce",
    title: "Business Development Manager",
    segment: "Japan Partnerships / New Business",
    location: "Tokyo, Japan",
    workStyle: "契約職。東京勤務で顧客・提携先への出張あり。出社・リモート日数は未記載",
    language: "日本語ネイティブ水準、英語ビジネス水準",
    source: { label: "Bounce Careers (Ashby)", url: "https://jobs.ashbyhq.com/Bounce/dde5e989-1be1-4fa5-ada4-bd36626577c0" },
    descriptionSummary: "旅行・不動産・交通の大手提携を開拓し、手荷物保管網の需要と供給を伸ばしながら、日本で配送・ロッカー事業を0→1で立ち上げる。",
    genbaTake: "加盟店開拓だけでなく、旅行者の導線、大手提携、拠点品質、新規事業を束ね、日本の都市ごとに密度と利用を作るネットワーク事業開発。",
    compensationReality: "日本の報酬額、成果報酬、目標、株式、契約期間、正社員登用条件は未記載。",
    desiredProfile: "公式求人は営業・事業開発5年以上、日本語・英語、旅行・不動産・ラストマイル領域の経験、提携交渉、自律的な市場開拓を重視する。",
  }),
  makeJob({
    id: "alta-ares-business-development-manager-japan-7c82c080",
    companySlug: "alta-ares",
    title: "Business Development Manager — Japan",
    segment: "Japan Market Entry / Defense Business Development",
    location: "Tokyo / Nagoya, Japan",
    workStyle: "フルタイム。東京または名古屋。日本・アジア・欧州への定期出張を想定",
    language: "日本語ネイティブ水準、英語流暢。フランス語は歓迎条件",
    source: { label: "Alta Ares Careers (Ashby)", url: "https://jobs.ashbyhq.com/alta-ares/7c82c080-2c9a-41cf-8936-d5719b59f47b" },
    descriptionSummary: "日本市場最初の専任者として、防衛省・防衛装備庁、自衛隊、産業パートナーとの関係、案件、実証、契約、現地展開の土台を作る。",
    genbaTake: "製品営業ではなく、制度・調達・産業提携・実証を横断し、欧州発の防空技術が日本で信頼され採用される条件を作る市場参入職。",
    compensationReality: "競争力ある報酬と株式を案内するが、日本の給与、変動給、目標、株式数、雇用主体は未記載。",
    desiredProfile: "公式求人は防衛・航空宇宙・政府渉外で8年以上、日本の調達制度と意思決定者への理解、複雑な契約、日本語・英語、起業家的な実行を重視する。",
  }),
];
