import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-15";

export const companies20260915Daily: Company[] = [
  {
    slug: "alteryx",
    name: "Alteryx",
    category: "分析自動化・AI対応データ基盤",
    broadCategory: "AI・データ基盤",
    hq: "アーバイン（米国）",
    japanPresence: "アルテリックス・ジャパン合同会社・東京。gBizINFOの事業所被保険者数6人",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "コードを書かずにデータ準備、業務ロジック、分析を自動化する基盤。東京でSales Development Representativeを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://alteryx.wd108.myworkdayjobs.com/en-US/AlteryxCareers",
    tags: ["Analytics Automation", "Data Preparation", "AI", "SDR", "Tokyo", "Enterprise"],
  },
  {
    slug: "acronis",
    name: "Acronis",
    category: "バックアップ・サイバー保護・IT運用",
    broadCategory: "セキュリティ・IT運用",
    hq: "シャフハウゼン（スイス）",
    japanPresence: "アクロニス・ジャパン株式会社・東京。gBizINFOの事業所被保険者数44人",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "バックアップ、サイバー防御、IT運用を統合し、サービス事業者と企業のシステムを保護する。日本でJunior Cloud Services Advisorを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.acronis.com/en/careers/",
    tags: ["Cyber Protection", "Backup", "MSP", "Cloud", "Partner Sales", "Japan"],
  },
  {
    slug: "telnyx",
    name: "Telnyx",
    category: "音声・メッセージ・通信AI基盤",
    broadCategory: "CRM・顧客体験",
    hq: "オースティン（米国）",
    japanPresence: "日本法人・国内拠点は未確認。東京で最初のEnterprise Sales Podとなる営業・技術職2件を公式募集",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "自社通信網とAPIで音声、メッセージ、Voice AI、無線接続を提供。東京で最初の企業営業組織を立ち上げる2職種を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/telnyx54",
    entryStatus: "pre-entry-signal",
    tags: ["日本進出の兆しあり", "CPaaS", "Voice AI", "Messaging", "Enterprise Sales", "Tokyo"],
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
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職や市場責任者へ広げやすい。",
    },
  };
}

export const jobs20260915Daily: Job[] = [
  makeJob({
    id: "alteryx-sales-development-representative-japan-r12203", companySlug: "alteryx", title: "Sales Development Representative, Japan", segment: "Sales Development / Enterprise Analytics", location: "東京", workStyle: "東京のオフィス勤務。公式求人はtraditional office positionと記載", language: "公式求人で日本語・英語要件の明記なし。日本顧客対応とグローバル連携の実務水準は選考で確認",
    source: { label: "Alteryx Careers (Workday)", url: "https://alteryx.wd108.myworkdayjobs.com/en-US/AlteryxCareers/job/Sales-Development-Representative--Japan_R12203-1" },
    descriptionSummary: "問い合わせ対応と狙う企業への新規開拓から営業機会を作り、Account Executiveと戦略企業の開拓計画を進める。",
    genbaTake: "架電量だけでなく、複雑なデータ課題を短時間で見極め、分析自動化が経営・業務成果へつながる企業を選別する入口の役割。",
    desiredProfile: "公式求人は企業向けソフトウェアの電話営業・事業開発1〜3年、相談型の案件創出、企業分析、反論対応、大量の見込み顧客管理を重視する。",
  }),
  makeJob({
    id: "acronis-junior-cloud-services-advisor-r100909", companySlug: "acronis", title: "Junior Cloud Services Advisor", segment: "Cloud Partner Sales / Business Development", location: "日本", workStyle: "日本勤務。Remote・Hybrid・出社日数は公式求人で未確認", language: "英語流暢を必須と記載。日本語要件は明記なし",
    source: { label: "Acronis Careers", url: "https://www.acronis.com/en/careers/job/r-100909/" },
    descriptionSummary: "サービス事業者候補への新規開拓、案件評価、利用開始支援、小規模契約の受注、大規模案件の上位営業への引き継ぎを担う。",
    genbaTake: "商談設定だけで終わらず、最初の従量利用や小規模契約を自分で受注し、再販・運用パートナーを継続売上へ変える育成型の営業職。",
    desiredProfile: "公式求人はBDR・SDR・内勤営業1年以上、新規開拓、案件評価、小規模商談の受注、整った顧客管理、英語流暢を求める。",
  }),
  makeJob({
    id: "telnyx-founding-account-executive-japan-7992049003", companySlug: "telnyx", title: "Founding Account Executive, Japan", segment: "Japan Market Entry / Enterprise Sales", location: "東京", workStyle: "Hybrid。日本各地の顧客訪問を中核業務として記載", language: "日本語・英語の優れた文書・口頭コミュニケーション",
    source: { label: "Telnyx Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/telnyx54/jobs/7992049003" },
    descriptionSummary: "日本の30〜40社の指名企業を担当し、経営層開拓、商談、技術検証、契約、利用拡大と最初の国内事例づくりを担う。",
    genbaTake: "既存地域を遠隔担当する営業ではなく、専任技術者と最初の本番利用を作り、次の採用が再利用できる日本の販売手順を設計する創業期の営業責任者。",
    desiredProfile: "公式求人は日本の企業向け技術営業5年以上、100万ドル超案件、経営・技術双方への提案、新規開拓、日本語・英語を重視する。",
  }),
  makeJob({
    id: "telnyx-forward-deployed-engineer-japan-7992744003", companySlug: "telnyx", title: "Forward Deployed Engineer, Japan", segment: "Forward Deployed Engineering / Pre-Sales", location: "東京", workStyle: "Hybrid。日本およびAPACの顧客先への出張あり", language: "日本語・英語で技術設計、障害対応、経営説明を行える水準",
    source: { label: "Telnyx Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/telnyx54/jobs/7992744003" },
    descriptionSummary: "顧客の通信・AI業務を調査し、音声・メッセージ・AIの設計、技術検証、実装、本番稼働、監視と引き継ぎまで担う。",
    genbaTake: "デモ支援ではなく、営業と対になって顧客環境へ入り、最初の本番負荷を稼働・安定させるまで技術成果を持つ日本市場の初代技術営業。",
    desiredProfile: "公式求人は本番ソフトウェア開発3年以上、API、コンテナ、監視、高負荷処理、顧客対応、日本語・英語を求める。",
  }),
];
