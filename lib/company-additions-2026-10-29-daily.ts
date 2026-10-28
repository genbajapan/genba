import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-10-29";

export const companies20261029Daily: Company[] = [{
  slug: "optro", name: "Optro", category: "AI駆動GRC・監査・リスク管理基盤", broadCategory: "セキュリティ・IT運用", hq: "ウィルミントン（米国）",
  japanPresence: "日本法人・国内常設拠点は未確認。日本在住のEnterprise Account ExecutiveとRegional Alliance Managerを公式募集",
  hiringStatus: "採用中", salesRoles: 2,
  description: "監査、SOX統制、全社リスク、セキュリティ、規制対応の情報と実行を一つのAI駆動GRC基盤でつなぐ企業。",
  lastChecked: checkedAt, careersUrl: "https://jobs.ashbyhq.com/optro", entryStatus: "pre-entry-signal",
  tags: ["GRC", "Internal Audit", "Risk Management", "Compliance", "AI Governance", "Enterprise Sales", "Alliances", "日本進出前"],
}];

type JobDraft = Pick<Job, "id" | "companySlug" | "title" | "segment" | "location" | "workStyle" | "language" | "source" | "descriptionSummary" | "genbaTake" | "desiredProfile" | "compensationReality">;

function makeJob(draft: JobDraft): Job {
  return {
    ...draft,
    firstSeen: checkedAt,
    lastChecked: checkedAt,
    careerInsights: {
      fit: `${draft.segment}で、監査・リスク・統制の専門性を日本企業の導入・採用へ変えたい人に向く。`,
      thingsToKnow: "日本の雇用主体、法人・拠点、チーム人数、担当範囲、目標、達成率、給与と株式、出張頻度は公開情報だけでは分からない。",
      marketValue: "GRCを監査部門だけの道具でなく、経営・IT・調達・法務の投資判断へ広げた成果を残せば、セキュリティ、経営管理、業務変革の企業向け営業・パートナー職へ広げやすい。",
      tenureAndPromotion: "在籍年数だけでなく、日本の新規顧客、紹介パイプライン、大手監査法人・販売パートナーの立ち上げを再現できる形にした実績が次の担当範囲の根拠になる。",
      priorCompanies: "GRC・監査・内部統制・セキュリティ、Big 4・アドバイザリー、企業向けSaaS、パートナー開拓の経験が隣接する。",
      nextCompanies: "日本市場の新規売上、販売パートナー貢献、複数部門の合意形成を定量化できれば、Enterprise Sales、Alliance Leadership、Japan GTM責任者へつなげやすい。",
    },
  };
}

export const jobs20261029Daily: Job[] = [
  makeJob({
    id: "optro-enterprise-account-executive-japan-79f39121",
    companySlug: "optro",
    title: "Enterprise Account Executive (Japan)",
    segment: "Enterprise GRC・New Business & Expansion",
    location: "日本",
    workStyle: "リモート。顧客・パートナーと対面会議あり",
    language: "日本語流暢、英語は地域・グローバルチームと働ける水準",
    source: { label: "Optro Careers (Ashby)", url: "https://jobs.ashbyhq.com/optro/79f39121-fb47-4448-b666-785de56ece4b" },
    descriptionSummary: "日本の大企業を対象に、新規開拓、複数部門の合意形成、技術デモ、投資効果の設計、稟議・法務・調達、既存顧客の拡大までを担う。",
    genbaTake: "監査ツールの製品説明ではなく、監査、リスク、財務、IT、調達の利害を一つの経営テーマへ束ね、日本企業の購買手順を最後まで動かす初期GTM寄りの役割。",
    desiredProfile: "公式求人は営業7年以上、うち企業向けソフトウェア・SaaS 4年以上、日本の大企業営業、自ら案件を作る力、MEDDICC / MEDDPICC、日本語流暢と業務上必要な英語を求める。Big 4のリスク・内部監査アドバイザリーで顧客開拓実績があるSenior Manager以上も対象。",
    compensationReality: "競争力のある基本給と販売インセンティブを公式求人は記載。具体的な金額、OTE、変動給比率、目標、達成率、株式は確認できない。",
  }),
  makeJob({
    id: "optro-regional-alliance-manager-japan-cecd6175",
    companySlug: "optro",
    title: "Regional Alliance Manager (Japan)",
    segment: "Japan Alliances・Partner GTM",
    location: "日本",
    workStyle: "リモート",
    language: "日本語ネイティブ、英語はビジネス会話水準",
    source: { label: "Optro Careers (Ashby)", url: "https://jobs.ashbyhq.com/optro/cecd6175-00c2-4403-88c4-828d073d93b5" },
    descriptionSummary: "日本でBig 4、アドバイザリー、販売会社、ディストリビューターの開拓・活性化・案件創出・育成・認定を担い、四半期・年間のパイプラインと売上目標を追う。",
    genbaTake: "既存パートナーの管理ではなく、日本のGRC市場で誰と、どの顧客課題を、どの役割分担で売るかを設計し、パートナー起点の受注エンジンを作る役割。",
    desiredProfile: "公式求人は営業またはチャネル管理7年以上、Big 4、グローバルSI、販売会社、MSPとの実績、パートナー生態系とGTMを立ち上げた経験、日本市場への理解を求める。",
    compensationReality: "競争力のある基本給と販売インセンティブを公式求人は記載。金額、OTE、変動給比率、目標配分、パートナー貢献の定義、株式は確認できない。",
  }),
];
