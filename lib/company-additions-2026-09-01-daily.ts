import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-01";

export const companies20260901Daily: Company[] = [
  {
    slug: "sitecore",
    name: "Sitecore",
    category: "デジタル体験・コンテンツ管理",
    broadCategory: "CRM・顧客体験",
    hq: "セイラム（米国）",
    japanPresence: "Sitecore株式会社・東京オフィス（2009年に日本進出）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "Webコンテンツ、顧客データ、パーソナライズ、AIをつなぐデジタル体験基盤。東京でSales Development Representativeを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.jobvite.com/sitecore/",
    tags: ["Anchor", "DXP", "CMS", "Customer Experience", "AI", "Tokyo"],
  },
  {
    slug: "liferay",
    name: "Liferay",
    category: "デジタル体験・顧客ポータル",
    broadCategory: "CRM・顧客体験",
    hq: "ダイヤモンドバー（米国）",
    japanPresence: "日本ライフレイ株式会社・東京（2012年設立、APAC本部）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "オープンソースを起点に、顧客・取引先ポータル、イントラネット、Webサイトを構築するデジタル体験基盤。東京でSales Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.jobvite.com/liferay/",
    tags: ["DXP", "Open Source", "Portal", "Enterprise", "Sales Engineering", "Tokyo"],
  },
  {
    slug: "rzr",
    name: "RZR",
    category: "モバイル広告・成果最適化",
    broadCategory: "コマース・業界特化",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点を確認できず。日本初の専任営業として東京勤務のAccount Executive求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "自社の予測モデルと広告配信基盤で、モバイルアプリの顧客獲得、再利用、CTV広告を支援する。日本初の専任営業求人を進出シグナルとして掲載。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/rzr",
    tags: ["日本進出の兆しあり", "AdTech", "Mobile Apps", "Machine Learning", "Enterprise Sales", "Tokyo"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "日本の給与、変動報酬、株式、担当範囲、評価指標は公式求人で確認できない。提示条件と評価方法を面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題の確認から複数部門を動かす実行まで担いたい人に向く。`,
      thingsToKnow: "担当社数・territory、個人とチームの評価指標、支援体制、給与・賞与・株式、日本組織の人数は未公開。面接で確認したい。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise softwareの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `【Genba仮説】${draft.segment}では在籍年数だけでなく、担当範囲の成果と再利用できる提案・導入の型が次の職位を左右する。支持材料: 公式求人は顧客成果と部門横断の実行を求める。反証・留保: 日本の昇進率・離職率・職位別基準は未公開。面接で確認: 直近24カ月の昇進・異動・退職と次の職位に必要な定量成果は。`,
      priorCompanies: `【Genba仮説】${draft.segment}に近い顧客課題、複数stakeholder、目標責任を持った人材が隣接する。支持材料: 公式求人は社名より顧客の意思決定を前へ進めた経験を重視する。反証・留保: 日本の採用者を同じ条件で十分に集計できず、特定企業からの採用傾向は断定できない。面接で確認: 直近採用者の前職領域、共通skill、ramp期間は。`,
      nextCompanies: `【Genba仮説】${draft.segment}の成果を数字で残せれば、同領域の専門職、より大きなsegment、Lead・managementへ広げやすい。支持材料: 公式求人が成果責任とcross-functional ownershipを置く。反証・留保: 公開された転職先分布ではなく職務構造からの仮説。面接で確認: 退職者の次職種と社内で担当範囲を広げた実例は。`,
    },
  };
}

export const jobs20260901Daily: Job[] = [
  makeJob({
    id: "sitecore-sales-development-representative-japan-owzjzfwx",
    companySlug: "sitecore",
    title: "Sales Development Representative (Japan)",
    segment: "Sales Development / Digital Experience",
    location: "東京都",
    workStyle: "東京勤務。出社頻度は公式求人で確認できず",
    language: "日本語ネイティブ、英語ビジネス水準が望ましい",
    source: { label: "Sitecore Careers (Jobvite)", url: "https://jobs.jobvite.com/sitecore/job/oWZjzfwx" },
    descriptionSummary: "日本の見込み顧客へ電話、メール、SNS、イベントで接点を作り、課題と検討条件を確認して営業機会を創出するSales Development Representative。",
    genbaTake: "単なる件数作りではなく、コンテンツ、顧客データ、パーソナライズ、AIをどの経営課題へ結びつけるかを仮説化し、Enterprise商談の入口を作る役割。",
    desiredProfile: "公式求人は営業開発または顧客接点の経験、調査と自発的な開拓、日本語ネイティブ、英語での業務遂行を重視する。",
  }),
  makeJob({
    id: "liferay-sales-engineer-tokyo-ocrdafw0",
    companySlug: "liferay",
    title: "Sales Engineer",
    segment: "Sales Engineering / Digital Experience Platform",
    location: "東京都",
    workStyle: "東京勤務。最大30%の出張あり。出社頻度は公式求人で確認できず",
    language: "日本語・英語での業務遂行",
    source: { label: "Liferay Careers (Jobvite)", url: "https://jobs.jobvite.com/liferay/job/oCrDAfw0" },
    descriptionSummary: "顧客の業務・技術要件を整理し、提案、製品説明、デモ、RFI・RFP回答を通じてLiferay DXPの技術選定を支援するSales Engineer。",
    genbaTake: "CMSの機能説明に閉じず、既存システムを生かしたポータルやデジタルサービスの構成を描き、柔軟性と導入負荷の両方を証明する役割。",
    desiredProfile: "公式求人はWeb技術、アプリケーションサーバー、データベース、統合、提案・デモ経験、日本語・英語での顧客対応を求める。",
  }),
  makeJob({
    id: "rzr-account-executive-jp-4335686009",
    companySlug: "rzr",
    title: "Account Executive, JP",
    segment: "Enterprise Sales / Programmatic Advertising",
    location: "日本（東京）",
    workStyle: "東京を拠点とする日本市場担当。出社頻度は公式求人で確認できず",
    language: "日本語・英語に堪能",
    source: { label: "RZR Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/rzr/jobs/4335686009" },
    descriptionSummary: "日本初の専任営業として、アプリ開発会社・広告主・代理店の新規開拓から提案、交渉、受注、拡大までを一貫して担うAccount Executive。",
    genbaTake: "完成した国内販売網を運用するのではなく、成果報酬型の広告投資を顧客の獲得・収益KPIへ結びつけ、日本で再現できる営業方法そのものを作る役割。",
    desiredProfile: "公式求人はプログラマティック広告営業5年以上、モバイルアプリの顧客獲得、複雑な商談、日本語・英語、ゼロから市場を作る姿勢を重視する。",
  }),
];
