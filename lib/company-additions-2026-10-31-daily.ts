import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-31";

export const companies20261031Daily: Company[] = [{
  slug: "keyloop",
  name: "Keyloop",
  category: "自動車小売・販売店管理・顧客体験",
  broadCategory: "コマース・業界特化",
  hq: "レディング（英国）",
  japanPresence: "Keyloop Japan Co., Ltd.（キー・ループ・ジャパン株式会社）を東京都港区に確認。国内の正確な在籍人数は未確認",
  hiringStatus: "採用中",
  salesRoles: 1,
  description: "自動車販売店、整備事業者、メーカー向けに、販売店管理、顧客接点、在庫、販売、アフターサービスをつなぐ業務基盤を提供する企業。",
  lastChecked: checkedAt,
  careersUrl: "https://jobs.lever.co/keyloop?location=Japan",
  tags: ["Automotive Retail", "Dealer Management", "Customer Experience", "Account Management", "Japan Remote", "SaaS"],
}];

export const jobs20261031Daily: Job[] = [{
  id: "keyloop-senior-account-manager-japan-9558b231",
  companySlug: "keyloop",
  title: "Senior Account Manager, Japan",
  segment: "Japan Portfolio Sales / Automotive Retail SaaS",
  location: "日本",
  workStyle: "リモート。日本国内勤務",
  language: "公式求人で日本語・英語の個別水準は明記なし",
  firstSeen: checkedAt,
  lastChecked: checkedAt,
  source: { label: "Keyloop Careers (Lever)", url: "https://jobs.lever.co/keyloop/9558b231-82a5-4f8e-86b2-b5379b77f3b8" },
  descriptionSummary: "日本の既存・新規顧客を担当し、販売店の事業課題をKeyloopの製品群へ結び、案件創出、提案、契約、利用拡大をCustomer Success・Professional Servicesと進める目標責任付き営業。",
  genbaTake: "販売店管理システムの更新ではなく、車両販売、整備、顧客接点、メーカー連携を横断し、販売店の収益性と顧客体験を継続的に変えるアカウント営業。",
  compensationReality: "給与、変動給、OTE、目標額、達成率、担当社数は非公開。公式求人は個人目標を持つ営業であることを明記。",
  desiredProfile: "自動車業界または企業向けソフトウェアの営業経験、経営層との関係構築、複雑な案件管理、交渉、部門横断の協働を求める。",
  careerInsights: {
    fit: "自動車販売店の現場と経営課題を理解し、既存顧客の利用拡大と新規案件を同じ担当範囲で作りたい人に向く。",
    thingsToKnow: "日本の顧客構成、担当社数、既存・新規の比率、目標、達成率、給与・変動給、出張頻度、導入部門との分担は未確認。",
    marketValue: "販売店管理、顧客接点、整備、在庫、メーカー連携を事業成果へ翻訳し、長期顧客を拡張する業界特化SaaS営業の専門性。",
    tenureAndPromotion: "在籍年数だけでなく、既存顧客の更新・拡張、新規受注、複数製品の導入、顧客成果を再現できるかが次の担当範囲の根拠になる。",
    priorCompanies: "自動車メーカー、販売店向けIT、販売店管理システム、業界特化SaaS、企業向けアカウント営業が隣接する。",
    nextCompanies: "自動車流通の業務変革と複雑なアカウント成果を残せば、Mobility SaaS、業界特化SaaS、Enterprise Account Management、Japan・APAC営業責任者へ広げやすい。",
  },
}];
