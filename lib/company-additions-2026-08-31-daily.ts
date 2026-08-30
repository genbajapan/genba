import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-08-31";

export const companies20260831Daily: Company[] = [
  {
    slug: "omnissa",
    name: "Omnissa",
    category: "デジタルワークスペース・端末管理",
    broadCategory: "セキュリティ・IT運用",
    hq: "マウンテンビュー（米国）",
    japanPresence: "Omnissa Japan合同会社・東京オフィス（2024年6月設立）",
    hiringStatus: "積極採用",
    salesRoles: 10,
    description: "旧VMwareのEUC事業を母体に、端末管理、仮想デスクトップ、従業員体験、セキュリティを統合する。東京・日本Remoteで営業、Partner、Solution、Professional Servicesを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.omnissa.com/careers/",
    tags: ["Anchor", "Digital Workspace", "UEM", "VDI", "Enterprise", "Tokyo", "Partner"],
  },
  {
    slug: "genspark",
    name: "Genspark",
    category: "AIワークスペース・業務エージェント",
    broadCategory: "AI・データ基盤",
    hq: "パロアルト（米国）",
    japanPresence: "Genspark株式会社・東京オフィス（2026年1月設立）",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "複数のAIモデルと業務エージェントを一つのワークスペースで提供する。日本法人を設立し、東京で日本最初のSolutions Engineerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/genspark",
    tags: ["AI Workspace", "AI Agent", "Enterprise", "Solutions Engineering", "Tokyo", "Japan Launch"],
  },
  {
    slug: "vizcom",
    name: "Vizcom",
    category: "工業デザイン・AI可視化",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点を確認できず。東京を優先勤務地とするAPAC初のEnterprise営業求人を確認",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "手描きのスケッチから写実的なレンダリング、反復、3D化までをつなぐ工業デザイナー向けAI基盤。日本を初期重点市場とするAPAC営業求人を進出シグナルとして掲載。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/vizcom",
    tags: ["日本進出の兆しあり", "Industrial Design", "Generative AI", "Enterprise Sales", "APAC", "Tokyo"],
    entryStatus: "pre-entry-signal",
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  const domain = draft.segment;
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "日本の給与、賞与・変動報酬、株式、担当範囲、評価指標は公式求人で確認できない。提示条件と評価方法を面接で確認したい。",
    careerInsights: {
      fit: `${domain}で、顧客課題の確認から部門横断の実行まで自分で前へ進めたい人に向く。`,
      thingsToKnow: "担当社数・territory、個人とチームの評価指標、支援体制、給与・賞与・株式、日本組織の人数は未公開。面接で確認したい。",
      marketValue: `${domain}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接するEnterprise softwareの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `【Genba仮説】${domain}では在籍年数だけでなく、担当範囲の成果と再利用できる提案・導入の型が次の職位を左右する。支持材料: 公式求人は顧客成果と部門横断の実行を求め、個人だけでなく関係部門を動かす責任を置く。反証・留保: 日本の昇進率・離職率・職位別基準は未公開で、成果と昇進の関係は確認できない。面接で確認: 直近24カ月の昇進・異動・退職と、次の職位に必要な定量成果、専門職と管理職の経路は。`,
      priorCompanies: `【Genba仮説】${domain}に近い顧客課題、複数stakeholder、目標責任を持った人材が隣接する。支持材料: 公式求人の職務と要件は、社名よりも顧客の意思決定と社内協働を前へ進めた経験を重視する。反証・留保: 日本の採用者を同じ条件で十分に集計できず、特定企業や業界からの採用傾向は断定できない。面接で確認: 直近採用者の前職領域上位3つ、共通skill、異業種採用例、ramp期間は。`,
      nextCompanies: `【Genba仮説】${domain}の成果を数字で残せれば、同領域の専門職、より大きなsegment、Lead・managementへ広げやすい。支持材料: 公式求人が成果責任とcross-functional ownershipを置く。反証・留保: 公開された転職先分布ではなく職務構造からの仮説。面接で確認: 退職者の次職種と、社内で担当範囲を広げた実例は。`,
    },
  };
}

const omnissaBase = "https://omnissa.wd501.myworkdayjobs.com/en-US/Omnissa_External_Career_Site";

const omnissaJobs: Job[] = [
  makeJob({
    id: "omnissa-solution-consultant-strategic-r101299",
    companySlug: "omnissa",
    title: "Solution Consultant for Strategic Customers",
    segment: "Solution Consulting / Strategic Enterprise",
    location: "東京都千代田区",
    workStyle: "東京オフィス。出社頻度は公式求人で確認できず",
    language: "日本語・英語の水準は公式求人で確認できず",
    source: { label: "Omnissa Careers (Workday)", url: `${omnissaBase}/job/Chiyoda-ku-Tokyo-Japan-Office/Solution-Architect-for-Strategic-Customers_R-101299-1` },
    descriptionSummary: "戦略顧客の業務・端末・仮想デスクトップ・セキュリティ要件を整理し、Omnissaの構成、製品説明、技術評価を営業と進めるSolution Consultant。",
    genbaTake: "製品説明だけでなく、既存の端末・仮想化・ID・セキュリティ環境を一つの変革計画へつなぎ、技術選定を前へ進める役割。",
    desiredProfile: "公式求人名と勤務地から、戦略顧客向けの技術提案を担うポジションとして確認。具体的な経験年数・資格は応募前に公式本文で再確認したい。",
  }),
  makeJob({
    id: "omnissa-professional-service-senior-consultant-r100253",
    companySlug: "omnissa",
    title: "Professional Service - Senior Consultant",
    segment: "Professional Services / Digital Workspace",
    location: "東京都千代田区",
    workStyle: "東京オフィス。出社頻度は公式求人で確認できず",
    language: "日本語・英語の水準は公式求人で確認できず",
    source: { label: "Omnissa Careers (Workday)", url: `${omnissaBase}/job/Chiyoda-ku-Tokyo-Japan-Office/Professional-Service---Senior-Consultant_R-100253` },
    descriptionSummary: "顧客のデジタルワークスペース導入で、要件整理、設計、移行、定着を支援するSenior Consultant。",
    genbaTake: "契約後の設定作業に閉じず、複雑な既存環境から安全に移行し、利用部門が運用できる状態まで作る導入責任の役割。",
    desiredProfile: "公式求人でProfessional ServicesのSenior Consultantとして掲載。詳細な技術要件と経験年数は公式本文で確認したい。",
  }),
  ...[
    ["r101735", "R-101735"],
    ["r101858", "R-101858"],
  ].map(([suffix, requisition]) => makeJob({
    id: `omnissa-lighthouse-architect-${suffix}`,
    companySlug: "omnissa",
    title: "Lighthouse Architect",
    segment: "Customer Architecture / Strategic Adoption",
    location: "東京都千代田区",
    workStyle: "東京オフィス。出社頻度は公式求人で確認できず",
    language: "日本語・英語の水準は公式求人で確認できず",
    source: { label: "Omnissa Careers (Workday)", url: `${omnissaBase}/job/Chiyoda-ku-Tokyo-Japan-Office/Lighthouse-Architect_${requisition}` },
    descriptionSummary: "重要顧客のデジタルワーク戦略とOmnissa製品の活用設計をつなぎ、関係部門と長期的な技術ロードマップを作るArchitect。",
    genbaTake: "単発の技術回答ではなく、顧客の標準構成、利用拡大、経営上の成果を継続して結びつける戦略的な顧客技術責任。",
    desiredProfile: "同名で異なるrequisitionの公式求人を確認。職位・担当顧客・製品範囲の違いは面接で確認したい。",
  })),
  ...[
    ["r101899", "R-101899"],
    ["r101077", "R-101077"],
  ].map(([suffix, requisition]) => makeJob({
    id: `omnissa-partner-business-manager-${suffix}`,
    companySlug: "omnissa",
    title: "Partner Business Manager",
    segment: "Partner Sales / Channel",
    location: "東京都千代田区",
    workStyle: "東京オフィス。出社頻度は公式求人で確認できず",
    language: "日本語・英語の水準は公式求人で確認できず",
    source: { label: "Omnissa Careers (Workday)", url: `${omnissaBase}/job/Chiyoda-ku-Tokyo-Japan-Office/Partner-Business-Manager_${requisition}` },
    descriptionSummary: "販売・導入パートナーと共同事業計画、案件創出、提案、enablementを進め、日本でOmnissaの販売網を拡大するPartner Business Manager。",
    genbaTake: "紹介件数ではなく、パートナーが顧客課題を見つけ、提案し、導入まで自走できる再現可能な販売能力を作る役割。",
    desiredProfile: "同名で異なるrequisitionの公式求人を確認。担当partner区分と新規・既存比率、個別要件は公式本文と面接で確認したい。",
  })),
  ...[
    { id: "omnissa-strategic-account-executive-nagoya-r101908", title: "Strategic Account Executive - Nagoya", location: "日本（Remote）", url: "/job/Remote---Japan/Strategic-Account-Executive---Nagoya_R-101908" },
    { id: "omnissa-strategic-account-executive-r101067", title: "Strategic Account Executive", location: "東京都千代田区", url: "/job/Chiyoda-ku-Tokyo-Japan-Office/Strategic-Account-Executive_R-101067" },
    { id: "omnissa-strategic-account-executive-tokyo-r101346", title: "Strategic Account Executive - Tokyo", location: "東京都千代田区", url: "/job/Chiyoda-ku-Tokyo-Japan-Office/Strategic-Account-Executive---Tokyo_R-101346" },
    { id: "omnissa-senior-strategic-account-executive-r100947", title: "Senior Strategic Account Executive", location: "東京都千代田区", url: "/job/Chiyoda-ku-Tokyo-Japan-Office/Senior-Strategic-Account-Executive_R-100947" },
  ].map((role) => makeJob({
    id: role.id,
    companySlug: "omnissa",
    title: role.title,
    segment: "Strategic Enterprise Sales / Digital Workspace",
    location: role.location,
    workStyle: role.location.includes("Remote") ? "Remote - Japan表記。出張・担当地域は要確認" : "東京オフィス。出社頻度は公式求人で確認できず",
    language: "日本語・英語の水準は公式求人で確認できず",
    source: { label: "Omnissa Careers (Workday)", url: `${omnissaBase}${role.url}` },
    descriptionSummary: "大企業の端末、仮想デスクトップ、従業員体験、セキュリティ課題を起点に、複数部門・パートナーを束ねて戦略案件を開拓し受注するAccount Executive。",
    genbaTake: "旧来の製品更新だけでなく、分散した端末・仮想環境・体験管理を統合する投資理由を作り、長いEnterprise商談を進める役割。",
    desiredProfile: "公式求人でStrategic Account Executiveとして掲載。担当業界・顧客、経験年数、既存・新規比率は各requisition本文と面接で確認したい。",
  })),
];

export const jobs20260831Daily: Job[] = [
  ...omnissaJobs,
  makeJob({
    id: "genspark-solutions-engineer-japan-1218b768",
    companySlug: "genspark",
    title: "Solutions Engineer (Japan)",
    segment: "Solutions Engineering / Enterprise AI",
    location: "日本（東京優先）",
    workStyle: "Hybrid。東京外はRemote-friendly、東京に小規模オフィスあり",
    language: "日本語・英語の明示水準は公式求人で確認できず",
    source: { label: "Genspark Careers (Ashby)", url: "https://jobs.ashbyhq.com/genspark/1218b768-8c39-4d45-bbfa-d1834b734c94" },
    descriptionSummary: "日本最初の技術営業として、discovery、構成、demo、pilot、security review、integrationを一貫して担い、今後のSEが使う評価・提案の型を作る。",
    genbaTake: "モデルや機能を見せるだけでなく、顧客のID、CRM、ITSM、cloud、SaaSへ接続し、AIエージェントが安全に業務成果を出すことを技術評価で証明する役割。",
    desiredProfile: "公式求人はSolutions/Sales Engineering等で5年以上、Enterprise security・compliance・procurement、AI agent、技術demo・pilot設計を重視する。",
  }),
  makeJob({
    id: "vizcom-senior-enterprise-account-executive-apac-5724060e",
    companySlug: "vizcom",
    title: "Senior Enterprise Account Executive, APAC",
    segment: "Enterprise Sales / APAC Market Building",
    location: "日本（東京優先、Remote）",
    workStyle: "日本勤務、東京優先のRemote。APAC出張あり",
    language: "日本語ネイティブまたはプロ水準、英語プロ水準",
    source: { label: "Vizcom Careers (Ashby)", url: "https://jobs.ashbyhq.com/vizcom/5724060e-5a9d-4376-8981-554fd59848c8" },
    descriptionSummary: "APAC初の専任Enterprise営業として、日本を初期重点市場に既存関係の拡大、新規開拓、複雑商談、partner開拓、市場情報の製品還元を担う。",
    genbaTake: "完成した日本playbookを運用するのではなく、自動車・製造・消費財などのデザイン組織で、AIを創造性と統制の両方へ結びつけ、APACの市場参入方法そのものを作る役割。",
    desiredProfile: "公式求人はEnterprise software営業5年以上、日本の大企業購買の理解、日本語・英語、複雑商談、新規pipeline開拓を求める。design/CAD領域、APAC、channel経験は歓迎。",
  }),
];
