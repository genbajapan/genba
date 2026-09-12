import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-13";

export const companies20260913Daily: Company[] = [
  {
    slug: "equativ",
    name: "Equativ",
    category: "広告配信・CTV・媒体収益化",
    broadCategory: "CRM・顧客体験",
    hq: "パリ（フランス）",
    japanPresence: "EQUATIV JAPAN株式会社・東京。公式求人は国内8人、gBizINFOは事業所被保険者数5人を掲載",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "広告主と媒体社をつなぐ独立系広告技術基盤。日本でPublisher Key Account Managerを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.lever.co/equativ?location=Tokyo",
    tags: ["AdTech", "CTV", "Publisher Monetization", "Curation", "Account Management", "Tokyo"],
  },
  {
    slug: "quantexa",
    name: "Quantexa",
    category: "意思決定インテリジェンス・データ統合",
    broadCategory: "AI・データ基盤",
    hq: "ロンドン（英国）",
    japanPresence: "Quantexa Japan株式会社・東京。日本法人と東京拠点を公式・法人番号情報で確認",
    hiringStatus: "採用中",
    salesRoles: 2,
    description: "分断データを名寄せとネットワーク分析でつなぎ、金融犯罪対策や顧客判断を支える。東京で営業・技術営業2件を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://jobs.ashbyhq.com/quantexa",
    tags: ["Decision Intelligence", "Entity Resolution", "Graph Analytics", "AI", "Enterprise Sales", "Tokyo"],
  },
  {
    slug: "torq",
    name: "Torq",
    category: "AIセキュリティ運用自動化",
    broadCategory: "セキュリティ・IT運用",
    hq: "デンバー（米国）",
    japanPresence: "日本法人・国内拠点は未確認。日本またはSingapore勤務のAPAC営業責任者を公式募集",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "調査、優先順位付け、対応をAIエージェントと自動化でつなぐセキュリティ運用基盤。日本勤務可能なAPAC営業求人を進出シグナルとして観測。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/torq",
    entryStatus: "pre-entry-signal",
    tags: ["日本進出の兆しあり", "AI SOC", "Security Operations", "Automation", "APAC", "Remote"],
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
      fit: `${draft.segment}で、顧客課題を技術と事業成果へ変え、複数の関係者を動かしたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は十分に公開されていない。",
      marketValue: `${draft.segment}の成果を案件創出、受注、導入、利用、顧客KPIで定量化できれば、隣接する企業向けソフトウェアの同職種へ再現性を説明しやすい。`,
      tenureAndPromotion: "年数だけでなく、担当拡張、顧客成果、再利用できる実行の型が次の役割の土台になる。",
      priorCompanies: "同領域の顧客課題、複数の意思決定者、成果責任を持った経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、同領域の専門職やより大きな顧客層へ広げやすい。",
    },
  };
}

export const jobs20260913Daily: Job[] = [
  makeJob({
    id: "equativ-publisher-key-account-manager-japan-ba1faf59", companySlug: "equativ", title: "Publisher Key Account Manager, Japan", segment: "Publisher Sales / Account Management", location: "東京", workStyle: "Hybrid。公式求人は水曜在宅、9月1日から水・木曜在宅と記載", language: "日本語・英語ともに業務で使える水準",
    source: { label: "Equativ Careers (Lever)", url: "https://jobs.lever.co/equativ/ba1faf59-5901-4caf-9b17-cfa5aaf1fdcd" },
    descriptionSummary: "国内媒体社の新規開拓から契約、請求、運用、四半期レビュー、追加収益の創出まで顧客ライフサイクルを一貫して担う。",
    genbaTake: "広告枠を売るだけでなく、媒体社の在庫価値、買い手需要、ブランド安全性、収益を同じデータで改善する事業開発兼顧客責任者。",
    desiredProfile: "公式求人は媒体・広告技術業界8年以上、プログラマティック広告の理解、分析的な顧客管理、日本語・英語の業務運用力を重視する。",
  }),
  makeJob({
    id: "quantexa-fsi-sales-director-0de928b5", companySlug: "quantexa", title: "FSI Sales Director", segment: "Financial Services Enterprise Sales", location: "東京", workStyle: "Hybrid。東京勤務", language: "日本語流暢・英語ビジネス水準",
    source: { label: "Quantexa Careers (Ashby)", url: "https://jobs.ashbyhq.com/quantexa/0de928b5-1e7b-49f3-88f8-678242e21f3d" },
    descriptionSummary: "日本の大手銀行・保険会社で新規顧客を開拓し、複数年・複数部門にまたがる大規模なデータ・AI商談を作って受注する。",
    genbaTake: "金融犯罪対策の製品説明ではなく、経営、業務、データ、規制の利害を束ね、数百万ドル規模の投資判断を前へ進める新規開拓責任者。",
    desiredProfile: "公式求人は日本の金融業界理解、複雑な大企業向けソフトウェア販売、経営層対応、新規案件創出、日本語と英語を求める。",
  }),
  makeJob({
    id: "quantexa-solution-engineer-72a9cd98", companySlug: "quantexa", title: "Solution Engineer", segment: "Solutions Engineering / Pre-Sales", location: "東京", workStyle: "Hybrid。顧客訪問に伴う出張の可能性あり", language: "日本語で技術・事業関係者へ説明できる水準。英語はグローバル協働水準（TOEIC 700超を一例として記載）",
    source: { label: "Quantexa Careers (Ashby)", url: "https://jobs.ashbyhq.com/quantexa/72a9cd98-4e83-4e1f-922f-08eefec687be" },
    descriptionSummary: "金融機関等の課題発見、提案、デモ、技術検証、RFP対応を担い、分断データをつないだ意思決定基盤の価値を実証する。",
    genbaTake: "名寄せやグラフ分析を見せるだけでなく、誤検知、調査時間、データ品質、規制対応の改善を技術検証の成功条件へ変える技術営業。",
    desiredProfile: "公式求人は技術営業・プリセールス経験、金融・規制業務、クラウド、データ処理、検索技術への理解、日本語での提案力を重視する。",
  }),
  makeJob({
    id: "torq-regional-sales-manager-apac-5831930004", companySlug: "torq", title: "Regional Sales Manager (Asia-Pacific)", segment: "APAC Enterprise Security Sales", location: "日本またはSingapore", workStyle: "Remote。日本またはSingaporeを拠点", language: "公式求人で日本語要件の明記なし",
    source: { label: "Torq Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/torq/jobs/5831930004" },
    descriptionSummary: "新設するAPAC地域で戦略顧客と販売パートナーを開拓し、AIを使うセキュリティ運用基盤の新規・拡大商談を担う。",
    genbaTake: "日本専任求人とは断定できないが、日本を勤務地候補に含む初期APAC営業として、市場選定、案件創出、販売網づくりを同時に担う進出シグナル。",
    desiredProfile: "公式求人はセキュリティソフトウェア直販5〜10年以上、新規開拓と目標超過、経営層への提案、複雑な大企業商談を重視する。",
  }),
];
