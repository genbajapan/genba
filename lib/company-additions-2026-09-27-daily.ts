import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-27";

export const companies20260927Daily: Company[] = [
  {
    slug: "box",
    name: "Box",
    category: "インテリジェントコンテンツ管理・企業向けAI基盤",
    broadCategory: "業務自動化・コラボレーション",
    hq: "レッドウッドシティ（米国）",
    japanPresence: "株式会社Box Japan・東京。2013年設立、日本で23,000社超が利用",
    hiringStatus: "積極採用",
    salesRoles: 1,
    description: "権限、セキュリティ、ワークフロー、AIをまとめて企業コンテンツを管理。東京でEnterprise Solutions Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/boxinc/jobs/8054660",
    tags: ["Content Management", "Enterprise AI", "Security", "Solutions Engineering", "Tokyo", "Japan"],
  },
  {
    slug: "applied-intuition",
    name: "Applied Intuition",
    category: "車両インテリジェンス・物理AI開発基盤",
    broadCategory: "AI・データ基盤",
    hq: "サニーベール（米国）",
    japanPresence: "2019年に日本参入。東京・大手町拠点と日本の完成車メーカーとの取り組みを公式確認",
    hiringStatus: "積極採用",
    salesRoles: 1,
    description: "シミュレーション、車載OS、自動運転の開発基盤を提供。東京でSolution Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/applied/3783c384-117a-4849-804b-82b2e35a8c8d",
    tags: ["Physical AI", "Automotive", "Simulation", "Vehicle OS", "Solution Engineer", "Tokyo"],
  },
  {
    slug: "chalk",
    name: "Chalk",
    category: "リアルタイムAI・機械学習データ基盤",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本リモートのForward Deployed Engineerを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "学習時と本番推論時のデータ処理を統一し、不正検知、検索、推薦、価格設計を低遅延で支える。日本で顧客技術職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/chalk/96eeb4e1-4621-4c03-b46e-ed2630b48811/",
    tags: ["Machine Learning", "Feature Platform", "Real-Time Inference", "Forward Deployed Engineer", "Japan", "Pre-entry"],
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
      fit: `${draft.segment}で、技術評価を顧客の事業成果と運用に変えたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を実証、導入、利用、顧客KPIで定量化できれば、隣接する企業向け技術企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる設計・実行の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、データ基盤、開発基盤、技術提案で複数の意思決定者を動かした経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、技術営業、顧客技術責任者、導入リードへ広げやすい。",
    },
  };
}

export const jobs20260927Daily: Job[] = [
  makeJob({
    id: "box-enterprise-solutions-engineer-tokyo-8054660",
    companySlug: "box",
    title: "Enterprise Solutions Engineer",
    segment: "Pre-Sales / Intelligent Content Management",
    location: "Tokyo, Japan",
    workStyle: "東京オフィスへ週3日以上出社",
    language: "日本語（ビジネス使用が可能な流暢レベル以上）／英語（読み書きが可能なレベル以上）",
    source: { label: "Box Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/boxinc/jobs/8054660" },
    descriptionSummary: "従業員2,000名以上の大手企業を担当し、デモ、実証、アーキテクチャ、セキュリティ、AI利用統制、導入後の拡張を設計する。",
    genbaTake: "ストレージの製品説明ではなく、権限、分類、監査、AIエージェント、業務自動化を一つの企業運用と投資理由に束ねる役割。",
    compensationReality: "給与、変動給、株式、評価KPI、担当社数は公式求人で未記載。",
    desiredProfile: "公式求人はIT業界5年以上、プリセールス等2年以上、クラウド・データ・セキュリティ、API、SSO、AIエージェント、大手企業提案を重視。",
  }),
  makeJob({
    id: "applied-intuition-solution-engineer-tokyo-3783c384",
    companySlug: "applied-intuition",
    title: "Solution Engineer",
    segment: "Solution Engineering / Vehicle Intelligence",
    location: "Tokyo",
    workStyle: "東京オフィスを主な勤務場所とし、原則週5日出社",
    language: "日本語・英語の具体的水準は公式求人で未記載",
    source: { label: "Applied Intuition Careers (Ashby)", url: "https://jobs.ashbyhq.com/applied/3783c384-117a-4849-804b-82b2e35a8c8d" },
    descriptionSummary: "APACの完成車メーカの車載OSプロジェクトで、技術要件、会議、進捗、本社開発との接続を担う。",
    genbaTake: "一般的な製品実演より、安全性と長い開発周期を持つ車両プログラムに入り、顧客要件とシリコンバレーの開発を結ぶ役割。",
    compensationReality: "日本の給与、株式、評価KPI、顧客担当数、出張頻度は公式求人で未記載。",
    desiredProfile: "公式求人は自動車メーカー・部品会社の経験、顧客対応、複雑なプロジェクト管理、車載ソフトウェア・機能安全の知識を重視。",
  }),
  makeJob({
    id: "chalk-forward-deployed-engineer-japan-96eeb4e1",
    companySlug: "chalk",
    title: "Forward Deployed Engineer",
    segment: "Forward Deployed Engineering / ML Infrastructure",
    location: "Japan",
    workStyle: "日本リモート。国内拠点・出社日数は未確認",
    language: "日本語と英語の具体的水準は公式求人で未記載",
    source: { label: "Chalk Careers (Ashby)", url: "https://jobs.ashbyhq.com/chalk/96eeb4e1-4621-4c03-b46e-ed2630b48811/" },
    descriptionSummary: "医療、金融、推薦の顧客と並走し、Python・SQLで特徴量パイプラインを実装。受注前後の技術窓口として営業・開発をつなぐ。",
    genbaTake: "資料と実演に留まらず、顧客の本番データ処理と機械学習の実装に入り、個別解を製品と再利用可能な導入型へ戻す役割。",
    compensationReality: "日本の給与、株式、出張、担当社数、待機対応、評価KPIは公式求人で未記載。",
    desiredProfile: "公式求人はバックエンドソフトウェア開発4年以上、Python、SQL、顧客・営業との協業、機械学習・データ製品経験を重視。",
  }),
];
