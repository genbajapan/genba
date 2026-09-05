import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-05";

export const companies20260905Daily: Company[] = [
  {
    slug: "shift-technology",
    name: "Shift Technology",
    category: "保険金請求・不正検知AI",
    broadCategory: "コマース・業界特化",
    hq: "パリ（フランス）",
    japanPresence: "Shift Technology Japan株式会社・東京。2018年に日本法人設立",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "保険金請求、引受、不正検知、代位求償を保険業務に特化したAIで支援。東京で損害保険向け営業を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.shift-technology.com/careers",
    tags: ["Insurance", "AI", "Fraud Detection", "Claims", "Enterprise", "Tokyo"],
  },
  {
    slug: "via",
    name: "Via",
    category: "公共交通運行・オンデマンド交通ソフトウェア",
    broadCategory: "コマース・業界特化",
    hq: "ニューヨーク（米国）",
    japanPresence: "Via Mobility Japan株式会社・東京。2018年に日本法人設立",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "自治体・交通事業者の路線、予約、配車、運行、分析を一体化。東京で新規地域の立ち上げと運行改善を担うExpansion Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://ridewithvia.com/careers",
    tags: ["TransitTech", "Mobility", "Public Sector", "Operations", "Enterprise", "Tokyo"],
  },
  {
    slug: "temporal",
    name: "Temporal",
    category: "耐障害ワークフロー実行基盤",
    broadCategory: "AI・データ基盤",
    hq: "ベルビュー（米国）",
    japanPresence: "日本法人・国内拠点・日本向け公式求人は未確認。シンガポールでAPJ担当を募集",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "障害や再試行があっても長時間の業務処理を最後まで進めるオープンソースのワークフロー実行基盤。AIエージェントを含む重要処理を支える。",
    lastChecked: checkedAt,
    careersUrl: "https://temporal.io/careers",
    entryStatus: "not-entered",
    tags: ["Workflow", "Developer Platform", "Open Source", "AI", "Infrastructure", "Pre-entry"],
  },
];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    compensationReality: "日本の給与、変動報酬、株式、目標、担当範囲は公式求人で確認できない。提示条件と評価方法を面接で確認したい。",
    careerInsights: {
      fit: `${draft.segment}で、顧客課題の確認から複数部門を動かす実行まで担いたい人に向く。`,
      thingsToKnow: "担当範囲、評価指標、支援体制、給与・賞与・株式、日本組織の職種別人数は十分に公開されていない。面接で確認したい。",
      marketValue: `${draft.segment}の成果を商談、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種・上位職へ再現性を説明しやすい。`,
      tenureAndPromotion: `【Genba仮説】${draft.segment}では在籍年数より、担当範囲の成果と再利用できる実行の型が次の職位を左右する。支持材料: 公式求人は顧客成果と部門横断の実行を求める。求人件数だけで昇進機会が多いとは断定しない。反証・留保: 日本の昇進率・離職率・職位別基準は未公開。面接で確認: 直近24カ月の昇進・異動・退職と次の職位に必要な定量成果は。`,
      priorCompanies: `【Genba仮説】${draft.segment}に近い顧客課題、複数の意思決定者、目標責任を持った人材が隣接する。支持材料: 公式求人は社名より顧客の意思決定を前へ進めた経験を重視する。反証・留保: 日本の採用者を同じ条件で十分に集計できず、特定企業からの採用傾向を断定しない。面接で確認: 直近採用者の前職領域、共通スキル、立ち上がり期間は。`,
      nextCompanies: `【Genba仮説】${draft.segment}の成果を数字で残せれば、同領域の専門職、より大きな顧客層、Lead・管理職へ広げやすい。支持材料: 公式求人が成果責任と部門横断の実行を置く。特定の転職先や昇格を保証せず、成果の再現性を説明できることが前提。反証・留保: 公開された転職先分布ではなく職務構造からの仮説。面接で確認: 退職者の次職種と社内で担当範囲を広げた実例は。`,
    },
  };
}

export const jobs20260905Daily: Job[] = [
  makeJob({
    id: "shift-technology-sales-executive-b2b-insurance-7651254003",
    companySlug: "shift-technology",
    title: "Sales Executive, B2B Insurance",
    segment: "Enterprise Sales / Insurance AI",
    location: "東京都",
    workStyle: "東京勤務。出社頻度は公式求人で確認できず",
    language: "日本語・英語での業務遂行",
    source: { label: "Shift Technology Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/shifttechnology/jobs/7651254003" },
    descriptionSummary: "日本の損害保険会社へ新規開拓から提案、契約、既存拡大までを担い、保険業務とデータの責任者を動かしてAI導入を進める。",
    genbaTake: "AIモデルの精度だけでなく、不正支払の抑止、査定時間、誤検知、調査担当者の判断を同じ業務指標で示し、保険会社の運用へ定着させる営業。",
    desiredProfile: "公式求人は企業向けソフトウェア営業、保険業界への理解、複雑商談の推進、経営層との関係構築、日本語・英語を重視する。",
  }),
  makeJob({
    id: "via-expansion-manager-8334684002",
    companySlug: "via",
    title: "Expansion Manager",
    segment: "Market Expansion / Transit Operations",
    location: "東京都",
    workStyle: "東京勤務。顧客現場への訪問を含む",
    language: "日本語ネイティブ級、英語での業務遂行",
    source: { label: "Via Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/via/jobs/8334684002" },
    descriptionSummary: "自治体・交通事業者と新しい運行地域を設計・立ち上げ、利用・定時性・効率の指標を分析して日々の運行改善と拡大を担う。",
    genbaTake: "ソフトウェア販売や通常の進行管理に閉じず、地域の移動課題を運行設計へ変え、現場の数値を見ながらサービス成立まで持つ役割。",
    desiredProfile: "公式求人は顧客折衝、複雑な事業・運用課題の構造化、データ分析、複数案件の実行、日本語・英語を重視する。",
  }),
];
