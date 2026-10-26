import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-27";

export const companies20261027Daily: Company[] = [{
  slug: "hootsuite",
  name: "Hootsuite",
  category: "ソーシャルメディア運用・分析・顧客対応",
  broadCategory: "CRM・顧客体験",
  hq: "バンクーバー（カナダ）",
  japanPresence: "東京オフィスの通勤圏を条件とするSenior Account Managerを公式募集。日本法人名と国内の正確な在籍人数は未確認",
  hiringStatus: "採用中",
  salesRoles: 1,
  description: "企業のソーシャルメディア運用、リスニング、従業員による発信、顧客対応を統合し、事業成果へつなげるソーシャルメディア管理企業。",
  lastChecked: checkedAt,
  careersUrl: "https://job-boards.greenhouse.io/hootsuite",
  tags: ["Social Media Management", "Social Listening", "Customer Care", "Account Management", "Tokyo Hybrid", "Japanese"],
}];

export const jobs20261027Daily: Job[] = [{
  id: "hootsuite-senior-account-manager-japanese-english-8312189",
  companySlug: "hootsuite",
  title: "Senior Account Manager (Japanese/English)",
  segment: "Emerging Markets・Renewal & Expansion",
  location: "東京",
  workStyle: "ハイブリッド。東京オフィスの通勤圏内が条件",
  language: "日本語・英語ともプロフェッショナル実務水準",
  firstSeen: checkedAt,
  lastChecked: checkedAt,
  source: { label: "Hootsuite Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/hootsuite/jobs/8312189" },
  descriptionSummary: "Emerging Marketsの既存顧客を担当し、更新、解約リスク、追加・クロスセル、幹部関係、案件計画と予測を通じて顧客生涯価値を伸ばす。",
  genbaTake: "SNS運用ツールの席数更新ではなく、ブランド、顧客対応、リスニング、従業員発信を幹部の事業目標に結び、解約を防ぎながら利用領域を広げる既存顧客営業。",
  compensationReality: "給与、変動給、目標、達成率、担当社数は非公開。公式求人は5万〜10万ドル規模の追加案件と、パイプライン3倍を管理する想定を明記。",
  desiredProfile: "SaaSのアカウント管理・営業、更新と拡張の目標達成、Director以上との関係、法務・調達を含む商談、日英バイリンガルを求める。",
  careerInsights: {
    fit: "既存大手顧客で、更新だけでなく幹部合意と複数製品の拡張を主導したい人に向く。",
    thingsToKnow: "日本の顧客構成、担当社数、更新率、目標、達成率、給与・変動給、カスタマーサクセスとの分担は未確認。",
    marketValue: "ソーシャルメディ運用を売上、顧客対応、ブランドリスクへ翻訳し、更新と拡張を両立する既存顧客営業の専門性。",
    tenureAndPromotion: "在籍年数だけでなく、解約リスクを早期に扱い、利用部門と製品を広げた実績が次の担当範囲の根拠になる。",
    priorCompanies: "SNS管理、デジタルマーケティング、CRM、顧客対応、SaaSアカウント管理が隣接する。",
    nextCompanies: "複数部門への展開と更新成果を残せば、Enterprise Account Management、Customer Growth、Japan・APACリーダーシップへ広げやすい。",
  },
}];
