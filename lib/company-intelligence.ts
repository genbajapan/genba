import type { Company, Job, Signal } from "@/lib/market-data";

export type DecisionTone = "priority" | "consider" | "watch";

type CategoryLens = {
  cluster: string;
  buyers: string[];
  problem: string;
  appeal: string;
  salesQuestion: string;
};

export type CompanyDecisionProfile = {
  tone: DecisionTone;
  verdict: string;
  verdictReason: string;
  fitSignals: string[];
  observedRoleCount: number;
  knownTopics: number;
  totalTopics: number;
  sourceCount: number;
  lens: CategoryLens;
  alternatives: Array<{
    company: Company;
    reason: string;
  }>;
};

const categoryLenses: Record<string, CategoryLens> = {
  "CRM / AI": {
    cluster: "Revenue Platform",
    buyers: ["営業部長", "マーケティング責任者", "カスタマーサービス責任者", "情報システム部長"],
    problem: "顧客接点と営業データを統合し、収益活動を効率化する領域。",
    appeal: "経営課題と現場運用の両方に触れやすく、業界横断で提案経験を積みやすい。",
    salesQuestion: "AI機能の差別化だけでなく、既存環境からの移行価値を説明できるか。",
  },
  Observability: {
    cluster: "Cloud & Developer",
    buyers: ["情報システム部長", "SREリーダー", "開発責任者", "CTO"],
    problem: "複雑なクラウド環境の状態を可視化し、障害対応と運用品質を改善する領域。",
    appeal: "技術部門の重要課題に入り込みやすく、利用拡大型の営業経験につながる。",
    salesQuestion: "既存監視ツールとの差と、利用量拡大後の費用対効果を説明できるか。",
  },
  "Enterprise Workflow": {
    cluster: "Enterprise Platform",
    buyers: ["情報システム部長", "人事部長", "カスタマーサービス責任者", "業務改革責任者"],
    problem: "部門をまたぐ業務プロセスを統合し、企業の運用を標準化する領域。",
    appeal: "大型案件や複数部門を巻き込む合意形成を経験しやすい。",
    salesQuestion: "長い導入期間と複数ステークホルダーを動かす体制が整っているか。",
  },
  "Data Cloud": {
    cluster: "Cloud & Developer",
    buyers: ["データ責任者(CDO)", "データ分析責任者", "情報システム部長", "事業部長"],
    problem: "企業データを集約し、分析・AI活用の基盤を提供する領域。",
    appeal: "経営テーマであるデータ活用とAI投資に直結しやすい。",
    salesQuestion: "競合基盤との違いを、処理性能ではなく事業成果まで翻訳できるか。",
  },
  "Developer Data Platform": {
    cluster: "Cloud & Developer",
    buyers: ["開発責任者", "データ責任者", "情報システム部長", "ITアーキテクト"],
    problem: "アプリケーション開発に必要なデータ基盤を柔軟に提供する領域。",
    appeal: "開発者起点の採用とEnterprise標準化の両方を扱える。",
    salesQuestion: "技術者の支持を組織標準・大型契約へ広げる営業動線があるか。",
  },
  "Customer Engagement": {
    cluster: "Revenue Platform",
    buyers: ["マーケティング責任者", "プロダクト責任者", "CRM担当マネージャー", "データ責任者"],
    problem: "顧客行動データを使い、複数チャネルのコミュニケーションを最適化する領域。",
    appeal: "売上や継続率など、顧客企業の事業KPIと結びつけやすい。",
    salesQuestion: "国内事例と運用支援を含めて、導入後の成果を再現できるか。",
  },
  Cybersecurity: {
    cluster: "Cloud & Developer",
    buyers: ["CISO", "セキュリティ責任者", "情報システム部長", "経営層(CxO)"],
    problem: "サイバー攻撃への検知・防御・復旧を支える領域。",
    appeal: "経営優先度が高く、専門性とEnterprise営業力を同時に磨きやすい。",
    salesQuestion: "脅威の緊急性だけに頼らず、既存投資からの置き換え価値を示せるか。",
  },
  "データセキュリティ / サイバーレジリエンス": {
    cluster: "Cloud & Developer",
    buyers: ["CISO", "CIO・情報システム責任者", "インフラ・クラウド責任者", "BCP・事業継続責任者"],
    problem: "攻撃を完全に防ぐ前提ではなく、重要なデータ・ID・業務をクリーンな状態へ戻し、事業停止の影響を最小化する領域。",
    appeal: "バックアップ更新だけでなく、サイバー攻撃後の事業復旧をCIO・CISO・経営層へ提案できる。",
    salesQuestion: "復旧可能性を技術指標だけで終わらせず、停止損失・規制・顧客信頼まで数値化できるか。",
  },
  "CRM / Marketing": {
    cluster: "Revenue Platform",
    buyers: ["マーケティング責任者", "営業部長", "カスタマーサービス責任者", "経営層(CxO)"],
    problem: "見込み客獲得から営業・顧客支援までの情報を一元化する領域。",
    appeal: "SMBからMid-Marketまで、再現性のある営業プロセスを学びやすい。",
    salesQuestion: "低価格ツールとの差を、運用定着と成長余地まで含めて説明できるか。",
  },
};

const fallbackLens: CategoryLens = {
  cluster: "Enterprise Technology",
  buyers: ["情報システム部長", "事業部長"],
  problem: "企業の重要業務を支えるテクノロジー領域。",
  appeal: "顧客課題と製品価値を結びつけるEnterprise営業経験につながる。",
  salesQuestion: "日本市場で再現できる導入理由と支援体制があるか。",
};

function unique<T>(values: T[]) {
  return Array.from(new Set(values));
}

function overlap(left: string[], right: string[]) {
  return left.filter((value) => right.includes(value));
}

export function getCategoryLens(category: string) {
  return categoryLenses[category] ?? fallbackLens;
}

export function getCompanyDecisionProfile(
  company: Company,
  companyJobs: Job[],
  companySignals: Signal[],
  allCompanies: Company[],
): CompanyDecisionProfile {
  const activeRoles = Math.max(company.salesRoles, companyJobs.length);
  const tone: DecisionTone = activeRoles >= 3 ? "priority" : activeRoles > 0 ? "consider" : "watch";
  const verdict = tone === "priority"
    ? "今、見る価値が高い"
    : tone === "consider"
      ? "条件が合えば有力候補"
      : "今はウォッチ候補";
  const verdictReason = tone === "priority"
    ? `${activeRoles}件の営業求人を確認。複数の役割・セグメントで採用が動いています。`
    : tone === "consider"
      ? `${activeRoles}件の営業求人を確認。自分の担当領域と要件が合うかを先に見極めたい企業です。`
      : "現在確認中の営業求人はありません。募集再開や日本組織の変化を継続観測します。";

  const fitSignals = unique([
    ...companyJobs.map((job) => job.segment),
    ...company.tags,
  ]).slice(0, 6);

  const knownTopics = 4;
  const sourceCount = unique([
    company.careersUrl,
    ...companyJobs.map((job) => job.source.url),
    ...companySignals.map((signal) => signal.source.url),
  ]).length;
  const companyLens = getCategoryLens(company.category);

  const alternatives = allCompanies
    .filter((candidate) => candidate.slug !== company.slug)
    .map((candidate) => {
      const candidateLens = getCategoryLens(candidate.category);
      const sharedBuyers = overlap(companyLens.buyers, candidateLens.buyers);
      const sharedTags = overlap(company.tags, candidate.tags);
      const sameCluster = companyLens.cluster === candidateLens.cluster;
      const score = (sameCluster ? 5 : 0) + sharedBuyers.length * 2 + sharedTags.length + (candidate.salesRoles > 0 ? 1 : 0);
      const reasons = [
        sameCluster ? `同じ${companyLens.cluster}領域` : "",
        sharedBuyers.length ? `${sharedBuyers.slice(0, 2).join("・")}向け営業が近い` : "",
        sharedTags.length ? `${sharedTags[0]}経験を比較しやすい` : "",
      ].filter(Boolean);
      return {
        company: candidate,
        score,
        reason: reasons.slice(0, 2).join(" / ") || "営業求人の動きを比較したい企業",
      };
    })
    .sort((left, right) => right.score - left.score || right.company.salesRoles - left.company.salesRoles)
    .slice(0, 3)
    .map(({ company: candidate, reason }) => ({ company: candidate, reason }));

  return {
    tone,
    verdict,
    verdictReason,
    fitSignals,
    observedRoleCount: activeRoles,
    knownTopics,
    totalTopics: 8,
    sourceCount,
    lens: companyLens,
    alternatives,
  };
}
