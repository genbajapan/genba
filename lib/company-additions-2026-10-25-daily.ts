import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-25";

export const companies20261025Daily: Company[] = [{
  slug: "apryse", name: "Apryse", category: "文書処理SDK・PDF開発基盤", broadCategory: "業務自動化・コラボレーション", hq: "デンバー（米国）",
  japanPresence: "日本法人・国内拠点は未確認。日本市場を担当するEnterprise Account Executiveを公式募集",
  hiringStatus: "採用中", salesRoles: 1,
  description: "PDF、Office、CAD等の表示・編集・変換・抽出・分類をソフトウェアへ組み込む文書処理SDKを提供する企業。",
  lastChecked: checkedAt, careersUrl: "https://jobs.lever.co/apryse", entryStatus: "pre-entry-signal",
  tags: ["Document SDK", "PDF", "Developer Tools", "Enterprise Sales", "Remote", "日本進出前"],
}];

export const jobs20261025Daily: Job[] = [{
  id: "apryse-enterprise-account-executive-japan-45fb8fc3", companySlug: "apryse", title: "Enterprise Account Executive, Japan", segment: "Japan Enterprise Software Sales", location: "日本", workStyle: "リモート",
  language: "日本語・英語のprofessional working fluency", source: { label: "Apryse Careers (Lever)", url: "https://jobs.lever.co/apryse/45fb8fc3-c804-4547-86df-f64b3507f2ed" },
  descriptionSummary: "日本の大手企業へ、文書表示・編集・変換・抽出等のSDKを提案し、見込み案件の発掘から要件整理、交渉、受注までを担う。",
  genbaTake: "完成品の利用席を売るのではなく、CTO、製品、開発の責任者と、顧客製品に文書機能を組み込むbuild-vs-buyの判断を作る営業。",
  desiredProfile: "複雑なB2Bソフトウェア営業5年以上、技術・製品責任者への提案、複数年の目標達成実績を求める。",
  compensationReality: "給与、変動給、OTE、目標、担当社数、国内雇用主体は公式求人で確認できない。",
  firstSeen: checkedAt, lastChecked: checkedAt,
  careerInsights: {
    fit: "開発者向けSDKの技術価値を、顧客製品の開発期間、品質、保守負荷へ翻訳して受注まで持ちたい人に向く。",
    thingsToKnow: "日本法人、雇用主体、日本チーム人数、販売パートナー、給与・OTE、目標、実装後の支援境界は面接で確認したい。",
    marketValue: "SDKの受注を開発工数、市場投入期間、製品利用、継続売上で証明できれば、開発者ツールや基盤ソフトウェア営業へ再現性を示しやすい。",
    tenureAndPromotion: "在籍年数だけでなく、複雑な技術評価を勝ち切り、導入後の利用拡大まで再利用できる営業の型にした実績が次の担当範囲の土台になる。",
    priorCompanies: "開発者ツール、API、組み込みソフトウェア、データ処理、企業向けSaaSの複雑営業が隣接する。",
    nextCompanies: "担当市場と受注・継続成果を数字で残せれば、開発者基盤、文書AI、技術営業、日本市場責任者へ広げやすい。",
  },
}];
