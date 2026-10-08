import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-09";

export const companies20261009Daily: Company[] = [
  {
    slug: "entrust",
    name: "Entrust",
    category: "ID・暗号鍵・証明書セキュリティ",
    broadCategory: "セキュリティ・IT運用",
    hq: "ミネソタ州シャコピー（米国）",
    japanPresence: "エントラストジャパン株式会社、東京・台場オフィス、日本の公式求人1件を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "本人確認、認証、PKI、暗号鍵、証明書ライフサイクルを通じ、人・端末・データの信頼を保護。東京で技術営業を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://entrust.wd1.myworkdayjobs.com/EntrustCareers",
    tags: ["Identity Security", "PKI", "HSM", "Post-Quantum Cryptography", "Tokyo"],
  },
  {
    slug: "fitch-solutions",
    name: "Fitch Solutions",
    category: "信用・市場・カントリーリスク情報",
    broadCategory: "AI・データ基盤",
    hq: "ニューヨーク（米国、ロンドンとの二本社制）",
    japanPresence: "Fitch Group東京オフィスを確認。関連国内法人の事業所被保険者数は30人。東京の公式求人1件を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "信用、市場、マクロ経済、地政学、業界リスクの調査・データ・分析を金融と事業判断へ提供。東京で顧客成功を募集。",
    lastChecked: checkedAt,
    careersUrl: "https://careers.fitch.group/",
    tags: ["Credit Risk", "Market Intelligence", "Country Risk", "Customer Success", "Tokyo"],
  },
  {
    slug: "element-biosciences",
    name: "Element Biosciences",
    category: "ゲノム・マルチオミクス解析",
    broadCategory: "コマース・業界特化",
    hq: "サンディエゴ（米国）",
    japanPresence: "日本在住リモートのCountry Manager公式求人1件を確認。日本法人・常設拠点は未確認",
    hiringStatus: "継続観測",
    salesRoles: 1,
    description: "研究機関向けにDNAシーケンシングとマルチオミクス解析装置を提供。販売代理店依存を越えて日本事業を担う責任者を採用。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/elementbiosciences",
    tags: ["日本進出兆候", "Genomics", "Multiomics", "Life Science", "Remote"],
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
      fit: `${draft.segment}で、専門知識を顧客・組織の具体的な成果へ変えたい人に向く。`,
      thingsToKnow: "目標、達成率、担当範囲、国内支援体制、評価・昇進、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する海外テクノロジー企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客・組織成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "企業向け営業、顧客支援、専門データ、複数の意思決定者を動かす業務の経験が隣接する。",
      nextCompanies: "担当市場と成果を数字で残せれば、企業営業、顧客成功、地域責任者、専門領域の事業開発へ広げやすい。",
    },
  };
}

export const jobs20261009Daily: Job[] = [
  makeJob({
    id: "entrust-tech-sales-consultant-data-protection-r004181",
    companySlug: "entrust",
    title: "Tech Sales Consultant - Data Protection Solutions",
    segment: "Japan Data Security Presales",
    location: "Tokyo",
    workStyle: "Hybrid eligible。東京を勤務地とするフルタイム",
    language: "日本語は母語水準、英語はグローバル連携ができる業務水準を歓迎",
    source: { label: "Entrust Careers (Workday)", url: "https://entrust.wd1.myworkdayjobs.com/EntrustCareers/job/Japan---Tokyo/Tech-Sales-Consultant---Data-Protection-Solutions_R004181" },
    descriptionSummary: "PKI、HSM、暗号鍵、電子署名、証明書ライフサイクル管理を対象に、顧客課題の整理、提案、実証、RFP、販売パートナー育成、導入支援を担う。",
    genbaTake: "製品説明だけでなく、暗号資産の所在、証明書切れ、ポスト量子暗号への移行を、規制・事業継続・システム設計の投資判断へ変える技術営業職。",
    desiredProfile: "セキュリティの技術営業・コンサルティング・上位サポート、PKI、HSM、暗号、Windows・Linux、ネットワーク、顧客提案の経験が重要。",
    compensationReality: "日本の給与、賞与、目標、達成率、株式、担当社数、同時実証数は公開情報で確認できない。",
  }),
  makeJob({
    id: "fitch-solutions-senior-customer-success-manager-tokyo-49929",
    companySlug: "fitch-solutions",
    title: "Senior Customer Success Manager, Tokyo",
    segment: "Japan Financial Intelligence Customer Success",
    location: "Tokyo",
    workStyle: "Hybrid。週3日オフィス出社",
    language: "日本語と英語は流暢な水準。中国語または韓国語は歓迎",
    source: { label: "Fitch Group Careers", url: "https://careers.fitch.group/job/Tokyo-Senior-Customer-Success-Manager-andor-Customer-Success-Manager%2C-Tokyo-Toky/1397082433/" },
    descriptionSummary: "Fitch Ratings Pro、BMI、CreditSightsの企業顧客に対し、導入、利用定着、契約更新準備、リスク把握、追加提案、経営層レビューを担う。",
    genbaTake: "情報提供の窓口ではなく、信用・市場・地政学データが顧客の投資・リスク判断にどう使われたかを捉え、利用、更新、拡大へつなぐ顧客成功職。",
    desiredProfile: "顧客成功6年以上、金融・FinTech・SaaS、戦略顧客、導入・定着・更新準備、信用市場、日英での関係構築が重要。",
    compensationReality: "給与、賞与、更新・拡大の評価配分、担当社数、担当契約額、達成率は公開情報で確認できない。",
  }),
  makeJob({
    id: "element-biosciences-country-manager-japan-6214062004",
    companySlug: "element-biosciences",
    title: "Country Manager - Japan",
    segment: "Japan Genomics Country Leadership",
    location: "Japan",
    workStyle: "Remote。日本在住必須。国内外出張は最大50%",
    language: "日本語と英語は流暢な水準",
    source: { label: "Element Biosciences Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/elementbiosciences/jobs/6214062004" },
    descriptionSummary: "AVITI装置と消耗品の日本市場戦略、売上、予測、重点顧客、販売代理店、技術研修、商用・技術課題の解決を一貫して担う。",
    genbaTake: "代理店管理だけでなく、日本の研究機関・製薬・検査市場を直接開拓し、装置導入後の消耗品利用まで含む事業成長を作る初期の国責任者。",
    desiredProfile: "生命科学または医用工学、NGS装置営業、地域または損益責任、販売代理店と重点顧客、技術研修、日英、最大50%の出張対応が重要。",
    compensationReality: "公式求人は基本給額を示さず、基本給に加えて株式と営業歩合の対象と記載。目標、達成率、歩合率、株式条件、雇用主体は未確認。",
  }),
];
