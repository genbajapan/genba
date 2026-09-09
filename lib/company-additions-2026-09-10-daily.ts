import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-10";

export const companies20260910Daily: Company[] = [
  {
    slug: "recorded-future",
    name: "Recorded Future",
    category: "サイバー脅威インテリジェンス",
    broadCategory: "セキュリティ・IT運用",
    hq: "ボストン（米国）",
    japanPresence: "レコーデッド・フューチャー・ジャパン株式会社・東京。gBizINFOの事業所被保険者数24人",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "公開Web、ダークWeb、技術データをAIと専門家で分析する脅威インテリジェンス会社。東京でPrincipal Technical Account Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/recordedfuture",
    tags: ["Threat Intelligence", "Cybersecurity", "Technical Account Management", "AI", "Tokyo"],
  },
  {
    slug: "sprinklr",
    name: "Sprinklr",
    category: "AI搭載統合顧客体験管理・CCaaS",
    broadCategory: "CRM・顧客体験",
    hq: "ニューヨーク（米国）",
    japanPresence: "Sprinklr Japan株式会社・東京。2014年設立、gBizINFOの事業所被保険者数21人",
    hiringStatus: "積極採用",
    salesRoles: 3,
    description: "ソーシャル、マーケティング、顧客サービス、顧客インサイトを一つのAI基盤へ統合。東京で導入・運用支援の3職種を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://sprinklr.wd1.myworkdayjobs.com/careers",
    tags: ["Unified CXM", "CCaaS", "Customer Experience", "Professional Services", "AI", "Tokyo"],
  },
  {
    slug: "decagon",
    name: "Decagon",
    category: "顧客対応AIエージェント・コンシェルジュ",
    broadCategory: "CRM・顧客体験",
    hq: "サンフランシスコ（米国）",
    japanPresence: "2026年4月にSydney拠点を開設しAPAC向け営業・技術営業を公式募集。日本法人・国内拠点・日本求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "音声、チャット、メールで問い合わせの解決と業務実行を担うAIエージェント。Sydney拠点と豪州の顧客接点採用から日本進出条件を観測。",
    lastChecked: checkedAt,
    careersUrl: "https://decagon.ai/careers",
    entryStatus: "not-entered",
    tags: ["日本未進出", "AI Agents", "Customer Experience", "Voice AI", "Sydney", "APAC"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile"> & { compensationReality?: string };

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: draft.compensationReality ?? "公式求人に日本の給与、変動給、株式、評価指標の十分な記載はない。面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題を定量成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当社数、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260910Daily: Job[] = [
  makeJob({
    id: "recorded-future-principal-technical-account-manager-8725963002", companySlug: "recorded-future", title: "Principal Technical Account Manager", segment: "Technical Account Management / Threat Intelligence", location: "東京都", workStyle: "東京オフィスへ週3日の通勤を公式求人に明記", language: "日本語ネイティブ、英語での会話力を求める",
    source: { label: "Recorded Future Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/recordedfuture/jobs/8725963002" },
    descriptionSummary: "日本の顧客に脅威インテリジェンスの運用設計、定着、価値評価、技術的な問題解決を支援する。",
    genbaTake: "製品操作の支援に留まらず、外部脅威情報をSOC、脆弱性管理、第三者リスクの意思決定に定着させる顧客技術職。",
    desiredProfile: "公式求人はセキュリティ、脅威インテリジェンス、顧客技術支援、複数部門との関係構築を重視する。",
  }),
  makeJob({
    id: "sprinklr-senior-project-manager-saas-implementation-113222", companySlug: "sprinklr", title: "Senior Project Manager - SaaS Implementation", segment: "Professional Services / Enterprise CCaaS Delivery", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "英語を含む複数地域・時差での業務が想定されるが、日本語要件は明記なし",
    source: { label: "Sprinklr Careers (Workday)", url: "https://sprinklr.wd1.myworkdayjobs.com/en-US/careers/job/Senior-Project-Manager---SaaS-Implementation_113222-JOB-2" },
    descriptionSummary: "大企業のCCaaS・統合CXM導入を、要件確認から設計、連携、テスト、本番移行、定着まで統括する。",
    genbaTake: "日程管理より、範囲、利益、品質、導入率、顧客価値を同時に持ち、複数ベンダーと部門の意思決定を進める導入責任者。",
    desiredProfile: "公式求人は8年以上の大企業向けSaaS・CCaaS導入、経営層対応、変更・リスク・採算管理を求める。",
  }),
  makeJob({
    id: "sprinklr-senior-implementation-consultant-ccaas-113178", companySlug: "sprinklr", title: "Senior Implementation Consultant, CCaaS", segment: "Implementation Consulting / CCaaS", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "英語ビジネス水準を求める。日本語要件は明記なし",
    source: { label: "Sprinklr Careers (Workday)", url: "https://sprinklr.wd1.myworkdayjobs.com/en-US/careers/job/Sr-Implementation-Consultant--CCaaS_113178-JOB" },
    descriptionSummary: "要件整理からCCaaSの設計・設定、CRM連携、テスト、本番移行、教育、定着を顧客と進める。",
    genbaTake: "コンタクトセンターの経路、IVR、自動化、CRMを、稼働と利用定着まで責任を持って統合する導入コンサルタント。",
    desiredProfile: "公式求人は5年以上の企業ソフトウェア・CCaaS導入、ルーティング、IVR、CRM連携、顧客折衝を重視する。",
  }),
  makeJob({
    id: "sprinklr-managed-services-consultant-112941", companySlug: "sprinklr", title: "Managed Services Consultant", segment: "Managed Services / Adoption & Expansion", location: "東京都", workStyle: "東京勤務。出社日数は公式求人で未確認", language: "日本語ネイティブ、英語ビジネス水準を求める",
    source: { label: "Sprinklr Careers (Workday)", url: "https://sprinklr.wd1.myworkdayjobs.com/en-US/careers/job/Japan---Tokyo/Sr-Managed-Services-Consultant_112941-JOB-2" },
    descriptionSummary: "導入済み顧客の設定を継続改善し、業務変化に合わせた最適化、教育、利用定着、更新・拡張を支援する。",
    genbaTake: "問い合わせ対応ではなく、顧客の業務変化を設定と利用価値へ反映し、顧客健全性と新規・拡張商談へつなぐ運用支援。",
    desiredProfile: "公式求人は企業ソフトウェアの導入・運用、技術的な設定、SNSやCCaaSの理解、複数案件の管理を重視する。",
  }),
];
