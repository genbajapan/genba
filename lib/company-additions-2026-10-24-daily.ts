import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-24";

export const companies20261024Daily: Company[] = [{
  slug: "lucid-vision-labs", name: "LUCID Vision Labs", category: "産業用マシンビジョンカメラ", broadCategory: "コマース・業界特化", hq: "バーナビー（カナダ）",
  japanPresence: "LUCID Vision Labs G.K.と東京・神田小川町オフィスを公式確認。東京のInside Sales / Customer ServiceとField Application Engineerを公式募集",
  hiringStatus: "採用中", salesRoles: 2,
  description: "工場自動化、ロボティクス、物流、医療、科学用途向けに、GigE Vision対応の2D・3D産業用カメラと開発ソフトウェアを提供する企業。",
  lastChecked: checkedAt, careersUrl: "https://thinklucid.com/ja/careers/", tags: ["Machine Vision", "Industrial Camera", "Inside Sales", "Field Application Engineer", "Tokyo"],
}];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;
function makeJob(draft: JobDraft): Job { return { ...draft, firstSeen: checkedAt, lastChecked: checkedAt, careerInsights: {
  fit: `${draft.segment}で、顧客の画像・検査・自動化要件を製品選定、受注、導入成功へつなげたい人に向く。`,
  thingsToKnow: "給与、賞与、目標、担当社数、案件期間、国内チーム人数、評価・昇進は公開情報だけでは十分に分からない。",
  marketValue: `${draft.segment}の成果を案件創出、設計採用、受注、導入、継続利用で定量化できれば、産業機器、ロボティクス、組み込み技術企業へ再現性を説明しやすい。`,
  tenureAndPromotion: "在籍年数だけでなく、顧客要件を再利用できる選定・導入の型へ変え、販売・技術の担当範囲を広げた実績が次の役割の土台になる。",
  priorCompanies: "産業カメラ、FA、画像処理、電子部品、技術営業、顧客サービス、組み込み開発の経験が隣接する。",
  nextCompanies: "担当市場と成果を数字で残せれば、技術営業、FAE、製品管理、地域営業・技術責任者へ広げやすい。",
} }; }

export const jobs20261024Daily: Job[] = [
  makeJob({ id: "lucid-vision-labs-inside-sales-customer-service-tokyo-20261024", companySlug: "lucid-vision-labs", title: "Inside Sales Representative / Customer Service Representative", segment: "Japan Inside Sales・Customer Operations", location: "東京都千代田区・神田小川町", workStyle: "東京オフィスでの対面勤務", language: "英語の会話・文章力を求める。日本語の具体的水準は公式求人で明記なし", source: { label: "LUCID Vision Labs Careers", url: "https://thinklucid.com/ja/careers/" }, descriptionSummary: "問い合わせ、見積、受注、返品、顧客・案件データ、貸出カメラ、販売パートナー連携を担当し、新規案件の発見と既存顧客の継続支援を進める。", genbaTake: "問い合わせ窓口だけでなく、注文精度、案件発見、販売パートナー、顧客情報をつなぎ、日本の設計採用を前へ進める営業運用の役割。", desiredProfile: "顧客サービスまたはインサイドセールス2年以上、CRM・ERP、電子部品・マシンビジョンへの理解が隣接する。", compensationReality: "給与、賞与、目標、担当社数、問い合わせ件数は公式求人で確認できない。" }),
  makeJob({ id: "lucid-vision-labs-field-application-engineer-tokyo-20261024", companySlug: "lucid-vision-labs", title: "Field Applications Engineer", segment: "Japan Machine Vision Presales・Customer Engineering", location: "東京都", workStyle: "東京を拠点に電話・ビデオで顧客支援。例外的に顧客訪問あり", language: "日本語・英語とも流暢な水準", source: { label: "LUCID Vision Labs Careers", url: "https://thinklucid.com/careers/" }, descriptionSummary: "工場自動化、検査、ロボティクス、3D、科学・医療用途で、カメラ選定、技術評価、設計採用、統合、研修、問題解決を支援する。", genbaTake: "カメラ仕様の説明ではなく、画像、照明、通信、ソフトウェア、装置要件をまとめ、顧客製品への設計採用を技術で作る役割。", desiredProfile: "マシンビジョン、C・C++・C#、Linux、画像処理ツール、顧客向け技術支援・プリセールスの経験が隣接する。", compensationReality: "給与、賞与、案件数、設計採用目標、訪問頻度は公式求人で確認できない。" }),
];
