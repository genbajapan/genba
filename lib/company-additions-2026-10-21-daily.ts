import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-21";

export const companies20261021Daily: Company[] = [
  {
    slug: "reaktor",
    name: "Reaktor",
    category: "デジタルプロダクト開発・技術コンサルティング",
    broadCategory: "業務自動化・コラボレーション",
    hq: "ヘルシンキ（フィンランド）",
    japanPresence: "Reaktor Japan株式会社は2014年設立、東京・恵比寿。会社概要は2023年7月時点31名で、テックリード＆クライアントリードを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "企業のデジタルサービスを、事業設計、顧客体験、ソフトウェア開発、データ・AIまで一体で作る技術コンサルティング会社。",
    lastChecked: checkedAt,
    careersUrl: "https://www.reaktor.com/ja-jp/careers",
    tags: ["Digital Product", "Technology Consulting", "Client Lead", "Software Engineering", "Tokyo"],
  },
  {
    slug: "green-hills-software",
    name: "Green Hills Software",
    category: "組み込み向け安全・セキュリティOS",
    broadCategory: "セキュリティ・IT運用",
    hq: "カリフォルニア州サンタバーバラ（米国）",
    japanPresence: "Green Hills Software合同会社は2018年に東京で営業開始。東京のField Application Engineerを公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "自動車、航空宇宙、防衛、医療、産業機器向けに、リアルタイムOS、開発環境、組み込みセキュリティを提供。",
    lastChecked: checkedAt,
    careersUrl: "https://www.ghs.com/corporate/career.html",
    tags: ["RTOS", "Embedded", "Functional Safety", "Field Application Engineer", "Tokyo"],
  },
  {
    slug: "orca-ai",
    name: "Orca AI",
    category: "船舶航行AI・海事オペレーション",
    broadCategory: "AI・データ基盤",
    hq: "ロンドン（英国）／テルアビブ（イスラエル）",
    japanPresence: "日本法人・国内拠点は未確認。日本市場で顧客関係、利用、継続、拡大を担うCustomer Success Manager求人1件を公式確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "船上のカメラ、センサー、コンピュータビジョンを使い、航行安全、船隊の状況把握、燃料効率、遠隔運航を支援する海事AI基盤。",
    lastChecked: checkedAt,
    careersUrl: "https://careers.orca-ai.io/",
    tags: ["日本未進出", "Maritime AI", "Customer Success", "Fleet Operations", "Japan"],
    entryStatus: "not-entered",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、顧客の技術・業務・事業成果を一つの責任として持ちたい人に向く。`,
      thingsToKnow: "目標、達成率、担当社数、案件期間、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、継続、拡大、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる技術提案・導入支援の型が次の役割の土台になる。",
      priorCompanies: "企業向け技術提案、ソフトウェア開発、組み込みシステム、顧客成功、産業向け導入支援の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、技術営業、顧客成功、ソリューション責任者、地域事業開発へ広げやすい。",
    },
  };
}

export const jobs20261021Daily: Job[] = [
  makeJob({
    id: "reaktor-technical-client-lead-tokyo-20261021",
    companySlug: "reaktor",
    title: "テックリード＆クライアントリード",
    segment: "Japan Technology Consulting・Client Delivery",
    location: "東京都渋谷区・恵比寿",
    workStyle: "東京・恵比寿のオフィス、顧客先、リモートを組み合わせるハイブリッド。出張の可能性あり",
    language: "日本語はネイティブまたはバイリンガル、英語はビジネス水準",
    source: { label: "Reaktor Japan Careers", url: "https://www.reaktor.com/ja-jp/careers/senior-technical-lead-tokyo" },
    descriptionSummary: "国内大手企業のプロダクト開発で、技術方針、実装、顧客との関係、案件の成長、事業と利用者の価値を横断して担う。",
    genbaTake: "設計だけを渡すコンサルタントではなく、顧客と同じチームで手を動かしながら、技術品質と取引の継続・拡大を同時に持つ役割。",
    desiredProfile: "ソフトウェア開発の実務、技術リード、顧客折衝、プロダクト・事業への理解を組み合わせられる人が近い。",
    compensationReality: "給与、賞与、担当社数、売上責任、評価指標は公式求人で確認できない。",
  }),
  makeJob({
    id: "green-hills-software-field-application-engineer-japan-20261021",
    companySlug: "green-hills-software",
    title: "Field Application Engineer (Tokyo, Japan)",
    segment: "Japan Embedded Presales・Customer Engineering",
    location: "東京都渋谷区・神宮前",
    workStyle: "正社員。勤務時間と勤務地は柔軟と公式求人に記載。顧客訪問、展示会、出張あり",
    language: "日本語は流暢、英語はビジネス水準",
    source: { label: "Green Hills Software Careers", url: "https://www.ghs.com/corporate/jobs_field_app_engineer_japan.html" },
    descriptionSummary: "顧客の組み込み開発で、製品評価、技術提案、導入、研修、デバイスドライバー、販売前後の技術支援を担う。",
    genbaTake: "RTOSや開発環境の機能説明ではなく、安全性とセキュリティが厳しい製品へ実装し、顧客の設計判断と採用を技術で前へ進める役割。",
    desiredProfile: "C/C++、組み込みソフトウェア、RTOS、デバッグ、顧客向け技術支援またはプリセールスの経験が隣接する。",
    compensationReality: "日本の給与、賞与、変動給、担当顧客数、出張頻度は公式求人で確認できない。",
  }),
  makeJob({
    id: "orca-ai-customer-success-manager-japan-9d27b",
    companySlug: "orca-ai",
    title: "Customer Success Manager",
    segment: "Japan Maritime Customer Success・Market Build",
    location: "日本",
    workStyle: "日本を拠点とし、顧客との対面対応と国内・海外出張あり。固定オフィスと出社日数は未確認",
    language: "日本語はネイティブ、英語はグローバルチームと業務を進める水準",
    source: { label: "Orca AI Careers (Comeet)", url: "https://www.comeet.com/jobs/Orca-AI/86.003/customer-success-manager/9D.27B" },
    descriptionSummary: "日本顧客の主要窓口として、販売後の導入、利用、満足、継続、拡大を持ち、日本の商習慣と海外チームをつなぐ。",
    genbaTake: "既存顧客の問い合わせ対応に留まらず、日本での顧客成功の型と市場プレゼンスを最初期から作る進出シグナル性の高い役割。",
    desiredProfile: "日本のテクノロジー企業や新興企業での顧客成功、グローバル組織との協働、顧客維持・拡大の経験が隣接する。",
    compensationReality: "給与、賞与、株式、担当船社数、継続・拡大目標、国内の雇用主体は公式求人で確認できない。",
  }),
];
