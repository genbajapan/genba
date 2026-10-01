import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-02";

export const companies20261002Daily: Company[] = [
  {
    slug: "cohesity",
    name: "Cohesity",
    category: "バックアップ・サイバーレジリエンス・企業データ保護",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンタクララ（米国）",
    japanPresence: "Cohesity Japan株式会社・東京。2018年設立、国内顧客事例と東京勤務の公式求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "分散したバックアップと非構造化データを一つの管理面へ集約し、ランサムウェア対策、復旧、データ活用を支援。日本でNTT担当のチャネル開発職を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.cohesity.com/careers/open-positions/?gh_jid=fbb6c49dd8c11001d8381318e10e0000&type=wd",
    tags: ["Data Security", "Cyber Resilience", "Backup", "Ransomware Recovery", "Channel", "Japan"],
  },
  {
    slug: "armis",
    name: "Armis",
    category: "サイバー露出管理・IT／OT／IoT資産セキュリティ",
    broadCategory: "セキュリティ・IT運用",
    hq: "サンフランシスコ（米国）",
    japanPresence: "東京勤務の公式求人と日本企業の公開導入例を確認。日本法人名・国内在籍人数は未確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "IT、OT、IoT、医療機器、クラウドを横断して未管理資産と脆弱性を可視化し、優先順位付けと対応を支援。東京で技術営業を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/armissecurity/jobs/5765358004",
    tags: ["Cyber Exposure", "OT Security", "IoT Security", "Solutions Consulting", "Japan"],
  },
  {
    slug: "runpod",
    name: "Runpod",
    category: "AI開発者向けGPUクラウド・推論基盤",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本・Singapore・Malaysiaを候補地とするAPAC営業求人を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "GPU Pod、Serverless、Clusterを一つの開発者向け基盤で提供し、AIの実験から学習・推論・本番運用までを支援。日本語・英語のAPAC営業を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/runpod/e3a0f565-dde7-4b3d-8ede-b582cd068f8c",
    tags: ["AI Infrastructure", "GPU Cloud", "Serverless", "Developer Platform", "APAC", "Pre-entry"],
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
      fit: `${draft.segment}で、技術、販売パートナー、顧客成果を一つの事業責任へつなげたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、既存案件、国内の支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、更新、顧客KPIで定量化できれば、隣接する企業向けソフトウェア・クラウド企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる市場開拓・導入支援の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、クラウド、データ、セキュリティ、複数の意思決定者を動かす営業・提携経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、地域リード、パートナー責任者、顧客技術、事業開発へ広げやすい。",
    },
  };
}

export const jobs20261002Daily: Job[] = [
  makeJob({
    id: "cohesity-ntt-channel-development-manager-fbb6c49d",
    companySlug: "cohesity",
    title: "NTT Channel Development Manager",
    segment: "Channel Sales / Data Security",
    location: "Tokyo, Japan",
    workStyle: "東京オフィス。通勤圏の社員は週2〜3日の出社を案内し、販売パートナー対応で50%超の出張を想定",
    language: "公式求人に日本語・英語の水準は明記なし。NTTおよび国内パートナーとの実務言語は選考で確認",
    source: { label: "Cohesity Careers", url: "https://www.cohesity.com/careers/open-positions/?gh_jid=fbb6c49dd8c11001d8381318e10e0000&type=wd" },
    descriptionSummary: "NTT系を含む担当販売パートナーの事業計画、案件創出、販売・技術支援、共同マーケティング、予測、成約率を持ち、日本での予約売上を伸ばす。",
    genbaTake: "代理店窓口ではなく、統合後の広い製品群をパートナーの販売・サービス能力へ落とし込み、共同商談と導入体制を再現可能にするチャネル事業職。",
    compensationReality: "競争力のある給与と福利厚生を案内するが、具体額、基本給・変動給比率、売上目標、達成率、株式は未記載。",
    desiredProfile: "公式求人は7年以上のチャネル営業、販売パートナーの成長、売上目標、共同事業計画、技術・顧客チームとの協働、50%超の出張を重視する。",
  }),
  makeJob({
    id: "armis-sr-advisory-solution-consultant-japan-5765358004",
    companySlug: "armis",
    title: "Sr Advisory Solution Consultant",
    segment: "Solutions Consulting / Cyber Exposure",
    location: "Tokyo, Japan",
    workStyle: "東京勤務。Remote・Hybrid・出社日数の区分は公式求人に明記なし",
    language: "公式求人に日本語・英語の水準は明記なし。国内顧客とグローバル部門の実務言語は選考で確認",
    source: { label: "Armis Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/armissecurity/jobs/5765358004" },
    descriptionSummary: "営業と顧客要件を整理し、IT・OT・IoTを横断する製品説明、デモ、環境分析、概念実証、導入方針を設計して技術判断を前進させる。",
    genbaTake: "機能デモだけでなく、未管理資産の発見、脅威と事業影響、既存セキュリティ基盤との接続を具体的な検証へ落とし、技術採用の根拠を作る役割。",
    compensationReality: "福利厚生を案内するが、日本の給与、変動給、売上・技術目標、達成率、株式、ServiceNow統合後の制度は未記載。",
    desiredProfile: "公式求人はセキュリティ分野の技術営業、IT・IoT・OT、ネットワーク、概念実証、経営層と技術者への説明、部門横断の協働を重視する。",
  }),
  makeJob({
    id: "runpod-account-executive-apac-e3a0f565",
    companySlug: "runpod",
    title: "Account Executive APAC",
    segment: "Enterprise Sales / AI Infrastructure",
    location: "Remote - APAC（候補地: Singapore・Malaysia・Japan）",
    workStyle: "Remote-first。主要顧客訪問と業界イベントで定期出張あり。日本法人・国内オフィス・雇用主体は未確認",
    language: "日本語と英語の業務水準を必須とする",
    source: { label: "Runpod Careers (Ashby)", url: "https://jobs.ashbyhq.com/runpod/e3a0f565-dde7-4b3d-8ede-b582cd068f8c" },
    descriptionSummary: "APACのAI企業、研究機関、大企業の機械学習部門で新規商談を作り、技術評価、SLA、価格、契約を進め、高額の年間契約を獲得する。",
    genbaTake: "GPU時間の販売ではなく、実験から本番推論までの構成、性能、供給、費用、契約を技術・経営の両方へ説明し、地域の販売再現性を作る初期APAC営業。",
    compensationReality: "公式求人はOTE 13万〜30万米ドル相当（基本給とコミッションの合計）と株式を明記。ただし職位・経験・地域で絞り込み、日本での内訳、目標、達成率、雇用主体は未確認。",
    desiredProfile: "公式求人は企業向け技術営業8年以上、うち直接営業4年以上、6〜7桁米ドル規模の契約、AI・GPU・クラウドの技術理解、案件創出と予測、日本語・英語を重視する。",
  }),
];
