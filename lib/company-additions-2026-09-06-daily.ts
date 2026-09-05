import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-06";

export const companies20260906Daily: Company[] = [
  {
    slug: "appier",
    name: "Appier",
    category: "AIマーケティング・顧客データ活用",
    broadCategory: "CRM・顧客体験",
    hq: "台北（台湾）",
    japanPresence: "Appier Japan株式会社・東京。gBizINFOの事業所被保険者数70人",
    hiringStatus: "採用中",
    salesRoles: 4,
    description: "広告、顧客データ、予測、パーソナライゼーションをAIでつなぐ。東京で新規営業、既存支援、Enterprise Sales、Customer Successを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/appier/?offices%5B%5D=23561",
    tags: ["AI", "MarTech", "AdTech", "Customer Data", "Enterprise", "Tokyo"],
  },
  {
    slug: "appian",
    name: "Appian",
    category: "AIプロセス自動化・ローコード開発",
    broadCategory: "業務自動化・コラボレーション",
    hq: "マクリーン（米国）",
    japanPresence: "Appian Japan合同会社・東京。gBizINFOの事業所被保険者数6人",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "複雑な業務プロセスをAI、データ、ローコード開発で再設計。東京のCustomer SuccessでConsultantとSenior Consultantを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://careers.appian.com/jobs",
    tags: ["Process Automation", "AI", "Low-code", "Customer Success", "Tokyo"],
  },
  {
    slug: "tailscale",
    name: "Tailscale",
    category: "アイデンティティ中心の安全なネットワーク接続",
    broadCategory: "セキュリティ・IT運用",
    hq: "トロント（カナダ）",
    japanPresence: "日本法人・国内拠点・日本向け公式求人は未確認",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "WireGuardを基盤に、端末・利用者・業務システムを暗号化された私設ネットワークで接続。日本進出の公式シグナルは未確認。",
    lastChecked: checkedAt,
    careersUrl: "https://tailscale.com/careers",
    entryStatus: "not-entered",
    tags: ["Networking", "Zero Trust", "Developer Tools", "Security", "Remote", "Pre-entry"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "日本の給与、OTE、株式、目標、担当範囲は公式求人で十分に確認できない。提示条件と評価方法を面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題の確認から複数部門を動かす実行まで担いたい人に向く。`,
      thingsToKnow: "担当範囲、評価指標、支援体制、給与・賞与・株式、日本組織の職種別人数は十分に公開されていない。面接で確認したい。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `${draft.segment}では、顧客成果と再利用できる実行の型が担当拡張の土台になる。`,
      priorCompanies: `${draft.segment}に近い顧客課題、複数の意思決定者、目標責任を持った経験が隣接する。`,
      nextCompanies: `${draft.segment}の成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。`,
    },
  };
}

export const jobs20260906Daily: Job[] = [
  makeJob({
    id: "appier-account-executive-digital-advertising-8095567", companySlug: "appier", title: "Account Executive, Digital Advertising (New Business)", segment: "New Business Sales / AI Advertising", location: "東京都港区", workStyle: "入社後3〜6カ月は原則出社、その後ハイブリッド", language: "日本語。英語での業務に関心または英語力を歓迎",
    source: { label: "Appier Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appier/jobs/8095567" },
    descriptionSummary: "AI広告の新規顧客を開拓し、課題確認、提案、交渉、受注、既存拡大までを一貫して担う。",
    genbaTake: "広告枠の販売で終わらず、CPA、ROAS、LTVと売上を結び、顧客獲得から拡大までを事業成果で説明する営業。",
    desiredProfile: "公式求人は法人営業、新規開拓、目標責任を重視。広告・MarTech・SaaS経験と英語は歓迎要件。",
  }),
  makeJob({
    id: "appier-account-manager-ai-ads-8095798", companySlug: "appier", title: "アカウントマネージャー｜AI広告・パフォーマンスマーケティング", segment: "Account Management / Performance Marketing", location: "東京都港区", workStyle: "入社後3〜6カ月は原則出社、その後ハイブリッド", language: "日本語。英語での業務に関心または英語力を歓迎",
    source: { label: "Appier Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appier/jobs/8095798" },
    descriptionSummary: "既存顧客の広告KPIを分析し、戦略、配分、入札、クリエイティブの改善と予算拡大を担う。",
    genbaTake: "定例報告ではなく、CPA、CPI、ROAS、LTVの因果を見つけ、改善実行と投資拡大まで持つ顧客支援。",
    desiredProfile: "公式求人はデジタル広告の運用・分析・改善提案、顧客折衝を重視。SQLやBI、英語は歓迎要件。",
  }),
  makeJob({
    id: "appier-enterprise-solutions-sales-8076116", companySlug: "appier", title: "Enterprise Solutions Sales | AI Marketing & DX - Japan", segment: "Enterprise Sales / AI Marketing", location: "東京都港区", workStyle: "東京勤務。詳細な出社頻度は公式求人で確認できず", language: "日本語・英語の業務要件は公式求人で要確認",
    source: { label: "Appier Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appier/jobs/8076116" },
    descriptionSummary: "日本企業へ顧客データ、予測、施策実行をつなぐAIマーケティング基盤を提案し、マーケティングDXを支援する。",
    genbaTake: "個別施策の自動化より、分散した顧客データと施策をROIへつなぐ変革テーマを、経営・マーケティング・ITで合意する営業。",
    desiredProfile: "公式求人は企業向け提案、複数関係者の合意形成、顧客課題とAI・データ活用の接続を重視する。",
  }),
  makeJob({
    id: "appier-customer-success-manager-enterprise-7562958", companySlug: "appier", title: "Customer Success Manager (Enterprise)", segment: "Customer Success / AI Marketing", location: "東京都", workStyle: "東京勤務。詳細な出社頻度は公式求人で確認できず", language: "日本語・英語での顧客・社内連携",
    source: { label: "Appier Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appier/jobs/7562958" },
    descriptionSummary: "Enterprise顧客の導入、活用、成果測定、継続・拡大を、営業・技術・製品と連携して進める。",
    genbaTake: "利用率を追うだけでなく、マーケティング施策と売上・LTVのつながりを示し、複数製品の定着と拡大を作る役割。",
    desiredProfile: "公式求人は企業顧客の成功支援、データ分析、関係構築、複数部門との協働、日本語・英語を重視する。",
  }),
  makeJob({
    id: "appian-consultant-japan-8065377", companySlug: "appian", title: "Consultant - Japan", segment: "Customer Success / Process Automation", location: "東京都", workStyle: "東京勤務。顧客対応に伴う出張あり", language: "日本語・英語のバイリンガル",
    source: { label: "Appian Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appian/jobs/8065377" },
    descriptionSummary: "顧客の業務プロセスと技術要件を整理し、Appian上の企業向け業務アプリを設計・実装・定着させる。",
    genbaTake: "通常の進行管理ではなく、業務設計、データ連携、実装、利用部門の自走までを一続きで担う導入職。",
    desiredProfile: "公式求人は要件整理、ソフトウェア開発、顧客対応、継続学習、日本語・英語を重視する。",
  }),
  makeJob({
    id: "appian-senior-consultant-7942254", companySlug: "appian", title: "Senior Consultant", segment: "Customer Success / Delivery Leadership", location: "東京都", workStyle: "東京勤務。顧客対応に伴う最大20%の出張", language: "日本語・英語のバイリンガル",
    source: { label: "Appian Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/appian/jobs/7942254" },
    descriptionSummary: "企業向けAppian導入の全工程をリードし、業務・技術要件、データモデル、API、開発、顧客の自走と若手育成を担う。",
    genbaTake: "導入完了だけでなく、顧客が自ら業務アプリを改善できる状態と、複数コンサルタントの品質まで持つ責任者。",
    desiredProfile: "公式求人は導入チームのリード、業務・技術要件、アジャイル開発、API、育成、日本語・英語を重視する。",
  }),
];
