import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-18";

export const companies20260918Daily: Company[] = [
  {
    slug: "gainsight",
    name: "Gainsight",
    category: "カスタマーサクセス・定着支援AI",
    broadCategory: "CRM・顧客体験",
    hq: "サンフランシスコ（米国）",
    japanPresence: "Gainsight Japan・東京。Japan Cloudとの提携による日本進出と東京拠点を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "顧客の導入、利用、学習、コミュニティ、更新を一つの運用へつなぐ。東京でEnterprise Account Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/gainsight",
    tags: ["Customer Success", "Retention", "AI Agents", "Enterprise Sales", "Hybrid", "Tokyo"],
  },
  {
    slug: "minitab",
    name: "Minitab",
    category: "統計解析・品質改善・工程データ",
    broadCategory: "AI・データ基盤",
    hq: "ステートカレッジ（米国）",
    japanPresence: "Minitab株式会社・東京。2024年の日本法人・新オフィス開設を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "統計解析、工程管理、製造品質のデータ活用を支援する。東京でAccount Executiveを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/minitab",
    tags: ["Statistics", "Quality", "Manufacturing", "SPC", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "mattermost",
    name: "Mattermost",
    category: "高信頼組織向け協働・業務自動化",
    broadCategory: "セキュリティ・IT運用",
    hq: "パロアルト（米国）",
    japanPresence: "日本法人・国内拠点は未確認。東京で日本・インド太平洋地域初の技術営業を公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "防衛、重要インフラ、規制産業向けに自社運用可能な協働・自動化基盤を提供。東京で初期技術営業を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/mattermost",
    entryStatus: "pre-entry-signal",
    tags: ["日本進出の兆しあり", "Secure Collaboration", "Open Source", "Private Cloud", "Sales Engineering", "Tokyo"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "公式求人に日本向けの給与、変動給、株式、目標、達成率の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を事業成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業の同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260918Daily: Job[] = [
  makeJob({
    id: "gainsight-enterprise-account-executive-japan-923f3346",
    companySlug: "gainsight",
    title: "Enterprise Account Executive",
    segment: "Enterprise Sales / Customer Success",
    location: "東京",
    workStyle: "Hybrid。出社日数は公式求人で未確認。社内会議、研修、催事に伴う出張の可能性あり",
    language: "日本語で日本の大手顧客を担当。英語はビジネス水準を求める",
    source: { label: "Gainsight Careers (Ashby)", url: "https://jobs.ashbyhq.com/gainsight/923f3346-9992-4118-b212-75e9521f06a1" },
    descriptionSummary: "日本の大手顧客で新規開拓からアップセル・クロスセルまでを持ち、経営層へ顧客維持・成長の投資対効果を提案する。",
    genbaTake: "製品説明より、顧客の導入・利用・学習・コミュニティ・更新の分断を経営指標へつなぎ、日本市場で再現できる顧客成長の型を作る役割。",
    desiredProfile: "公式求人はIT業界のフィールド営業5〜8年、SaaS、目標達成、戦略的アカウント計画、経営層とのROI対話、ビジネス英語を重視する。",
  }),
  makeJob({
    id: "minitab-account-executive-japan-7739659003",
    companySlug: "minitab",
    title: "Account Executive",
    segment: "Enterprise Sales / Manufacturing Analytics",
    location: "東京",
    workStyle: "公式求人に東京勤務。出社頻度、在宅勤務、出張条件の詳細は未確認",
    language: "日本語は母語水準、英語は高い業務コミュニケーション水準を求める",
    source: { label: "Minitab Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/minitab/jobs/7739659003" },
    descriptionSummary: "製造企業へ統計解析、工程データ、品質改善の活用を提案し、工場から品質部門までのデータ標準化と意思決定を支える。",
    genbaTake: "分析ソフトのライセンス販売ではなく、測定、工程管理、品質改善を共通言語へ変え、製造現場と経営の改善投資を結ぶ役割。",
    desiredProfile: "公式求人は日本語母語水準と高い業務英語、アプリケーションソフト営業3年以上、製造向け営業、ミッドマーケット顧客、価値提案と目標達成を重視する。",
  }),
  makeJob({
    id: "mattermost-technical-sales-engineer-lead-japan-5381946008",
    companySlug: "mattermost",
    title: "Technical Sales Engineer / Lead",
    segment: "Sales Engineering / Secure Collaboration",
    location: "東京",
    workStyle: "東京勤務。顧客、販売パートナー、催事支援で最大50%の出張可能性を公式求人に記載",
    language: "日本語は母語水準、英語は高い読み書き能力を求める",
    source: { label: "Mattermost Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/mattermost/jobs/5381946008" },
    descriptionSummary: "日本・インド太平洋地域初の技術担当として、閉域、オンプレミス、プライベートクラウドの提案、実証、販売パートナー構築、顧客要件の製品反映を主導する。",
    genbaTake: "一般的なチャットのデモではなく、防衛・重要インフラの機密性、可用性、運用主権を設計し、日本進出の技術的な勝ち筋そのものを作る初期採用。",
    desiredProfile: "公式求人はサイバーセキュリティまたは成長企業での上級技術経験、防衛・国家安全保障・重要インフラ、閉域・オンプレミス、日本語、英語を重視する。",
  }),
];
