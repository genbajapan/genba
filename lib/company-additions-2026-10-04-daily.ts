import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-04";

export const companies20261004Daily: Company[] = [
  {
    slug: "skydio",
    name: "Skydio",
    category: "自律飛行ドローン・遠隔運用基盤",
    broadCategory: "コマース・業界特化",
    hq: "サンマテオ（米国）",
    japanPresence: "Skydio合同会社・東京。2020年に初の海外子会社として日本法人を設立し、日本顧客・パートナーと現行求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "AIとコンピュータービジョンでドローンの自律飛行、遠隔運用、点検・公共安全業務を支援。東京で導入と技術支援を一貫して担う職種を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/skydio/9e21861e-a035-4283-8e85-42a22908af8c",
    tags: ["Autonomous Drones", "Robotics", "Computer Vision", "Customer Deployment", "Japan"],
  },
  {
    slug: "alarm-com",
    name: "Alarm.com",
    category: "住宅・事業所向けクラウドセキュリティとIoT",
    broadCategory: "セキュリティ・IT運用",
    hq: "タイソンズ（米国）",
    japanPresence: "日本向けサービス、国内ハードウェアパートナー、東京拠点の日本語対応チームと日本担当求人を公式確認。日本法人名・国内在籍人数は未確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "防犯、映像、入退室、空調・エネルギー管理をクラウドでつなぎ、販売・施工・監視事業者を通じて提供。東京で販売パートナー開拓を担う事業開発職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/alarmcom/jobs/8733921002",
    tags: ["Physical Security", "IoT", "Smart Property", "Channel Sales", "Japan"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客・パートナーの課題、技術・製品、社内の専門組織を一つの成果責任へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、既存案件、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、更新、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる市場開拓・導入支援の型が次の役割の土台になる。",
      priorCompanies: "企業向け営業、提携、技術導入、複数の意思決定者を動かす顧客支援の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、地域リード、提携責任者、顧客成功、技術導入責任者へ広げやすい。",
    },
  };
}

export const jobs20261004Daily: Job[] = [
  makeJob({
    id: "skydio-deployment-support-engineer-japan-9e21861e",
    companySlug: "skydio",
    title: "Deployment and Support Engineer (Japan)",
    segment: "Japan Customer Deployment / Technical Support",
    location: "Tokyo, Japan",
    workStyle: "Hybrid。顧客現場への出張が年間勤務時間の30〜50%。米国本社との時差により時間外対応の可能性あり",
    language: "日本語・英語ともに業務上流暢な水準",
    source: { label: "Skydio Careers (Ashby)", url: "https://jobs.ashbyhq.com/skydio/9e21861e-a035-4283-8e85-42a22908af8c" },
    descriptionSummary: "日本の顧客・認定パートナーに対し、ドローン、Dock、クラウド、企業ネットワークの導入を設計し、稼働後の障害解析と製品改善まで担う。",
    genbaTake: "機体の設置だけでなく、安全な遠隔飛行を成立させるネットワーク、運用、ログ解析、顧客定着を一貫して持つ技術導入・顧客成功職。",
    compensationReality: "競争力ある報酬を案内するが、日本の給与、賞与、株式、評価指標、時間外・出張時の条件は未記載。",
    desiredProfile: "公式求人は接続機器の導入・支援3〜4年以上、IPネットワーク、Linux、ログ解析、顧客対応、日本語・英語、国内で必要なドローン資格の取得を重視する。",
  }),
  makeJob({
    id: "alarm-com-business-development-manager-japan-8733921002",
    companySlug: "alarm-com",
    title: "Business Development Manager",
    segment: "Japan Channel Business Development / IoT Security",
    location: "Japan（東京圏を優先）",
    workStyle: "日本、フィリピン、ベトナム、グアムのパートナー訪問に60〜70%の出張を想定。出社・在宅日数は未記載",
    language: "日本語は読み書き・会話ともに流暢、英語力を要求",
    source: { label: "Alarm.com Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/alarmcom/jobs/8733921002" },
    descriptionSummary: "日本を中心にシステム統合、販売、監視、戦略パートナーを開拓し、既存パートナーでのクラウド・IoTサービスの採用と売上を広げる。",
    genbaTake: "エンド顧客への直販ではなく、設置・監視・販売を担う事業者が継続収益を作れるよう、地域ごとの提携網と導入後の成長を設計する役割。",
    compensationReality: "日本の給与、変動給、目標、達成率、株式、出張手当は未記載。",
    desiredProfile: "公式求人は営業・事業開発5年以上、新規開拓と既存深耕、クラウド・IoTへの理解、日本語・英語、複数国への高頻度出張を重視する。",
  }),
];
