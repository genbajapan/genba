import type { Company, Job } from "@/lib/market-data";

const checkedAt = "2026-09-28";

export const companies20260928Daily: Company[] = [
  {
    slug: "keeper-security",
    name: "Keeper Security",
    category: "特権アクセス・パスワード・シークレット管理",
    broadCategory: "セキュリティ・IT運用",
    hq: "シカゴ（米国）",
    japanPresence: "Keeper Security APAC株式会社・東京。2023年に東京へAPAC本社を開設",
    hiringStatus: "採用中",
    salesRoles: 1,
    description: "人、端末、サービスアカウント、AIエージェントの認証情報と特権アクセスを保護。東京でCustomer Success Manager, APACを公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://job-boards.greenhouse.io/keepersecurity/jobs/4408913009",
    tags: ["PAM", "Identity Security", "Password Management", "Customer Success", "Tokyo", "Japan"],
  },
  {
    slug: "liquid-ai",
    name: "Liquid AI",
    category: "高効率・マルチモーダル基盤モデル",
    broadCategory: "AI・データ基盤",
    hq: "ケンブリッジ（米国）",
    japanPresence: "Liquid AI株式会社・東京。会社公式でLiquid AI Japanと東京拠点を確認",
    hiringStatus: "積極採用",
    salesRoles: 2,
    description: "計算量、メモリ、遅延を抑え、端末・車載・企業環境で動かせる基盤モデルを開発。東京で日本語マルチモーダルAIの技術職2件を公式募集。",
    lastChecked: checkedAt,
    careersUrl: "https://www.liquid.ai/careers",
    tags: ["Foundation Models", "Multimodal AI", "Edge AI", "Applied ML", "Tokyo", "Japan"],
  },
  {
    slug: "exa",
    name: "Exa",
    category: "AIエージェント向けWeb検索API",
    broadCategory: "AI・データ基盤",
    hq: "サンフランシスコ（米国）",
    japanPresence: "日本法人・国内拠点・日本求人は未確認。Singaporeで研究職2件を公式募集",
    hiringStatus: "継続観測",
    salesRoles: 0,
    description: "AIエージェントがWeb情報を検索・抽出・監視するための検索APIと索引を提供。Singaporeの研究拠点を拡大するが、日本の応募可能求人は未確認。",
    lastChecked: checkedAt,
    careersUrl: "https://exa.ai/careers",
    tags: ["AI Search", "Search API", "Web Data", "AI Agents", "Singapore", "Pre-entry"],
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
      fit: `${draft.segment}で、製品利用を顧客・事業・技術の成果へ変えたい人に向く。`,
      thingsToKnow: "目標、担当範囲、達成率、支援体制、報酬構成は公開情報だけでは十分に分からない。",
      marketValue: `${draft.segment}の成果を導入、利用、更新、技術品質、顧客KPIで定量化できれば、隣接する企業向け技術企業へ再現性を説明しやすい。`,
      tenureAndPromotion: "在籍年数だけでなく、担当拡張、顧客成果、再利用できる設計・実行の型が次の役割の土台になる。",
      priorCompanies: "企業向けソフトウェア、セキュリティ、機械学習、顧客技術支援で複数の意思決定者を動かした経験が隣接する。",
      nextCompanies: "担当規模と成果を数字で残せれば、顧客成功、応用機械学習、技術責任者、地域リードへ広げやすい。",
    },
  };
}

export const jobs20260928Daily: Job[] = [
  makeJob({
    id: "keeper-security-customer-success-manager-apac-tokyo-4408913009",
    companySlug: "keeper-security",
    title: "Customer Success Manager, APAC",
    segment: "Customer Success / Identity Security",
    location: "Tokyo Prefecture, Japan",
    workStyle: "東京オフィスへ定期的に通勤できることを応募要件で確認",
    language: "日本語のバイリンガル水準と業務で使える英語を必須とする",
    source: { label: "Keeper Security Careers (Greenhouse)", url: "https://job-boards.greenhouse.io/keepersecurity/jobs/4408913009" },
    descriptionSummary: "APACの既存顧客で導入、利用、四半期レビュー、更新、追加販売、問題解決を担い、経営層・IT・セキュリティ責任者との関係を広げる。",
    genbaTake: "問い合わせ対応だけでなく、利用状況とリスクを読み、顧客成果、更新、拡張、事例化まで持つ売上責任を伴う顧客成功職。",
    compensationReality: "給与、変動給、株式、担当社数、売上目標、達成率は公式求人で未記載。",
    desiredProfile: "公式求人は顧客成功・営業経験、SSO・ディレクトリ等の技術理解、大企業・経営層対応、日本語と英語を重視する。",
  }),
  makeJob({
    id: "liquid-ai-ml-scientist-japanese-multimodal-24b6d654",
    companySlug: "liquid-ai",
    title: "Member of Technical Staff - ML Scientist, Japanese Multimodal",
    segment: "Machine Learning Research / Japanese Multimodal",
    location: "Tokyo",
    workStyle: "東京のハイブリッド勤務。具体的な出社日数は公式求人で未確認",
    language: "日本語と英語の具体的水準は公式求人で未確認",
    source: { label: "Liquid AI Careers (Ashby)", url: "https://jobs.ashbyhq.com/liquid-ai/24b6d654-d703-4a49-941b-3461f2d7c28e" },
    descriptionSummary: "日本語と日本市場に適したマルチモーダルモデルの研究、学習、評価を担い、研究成果を日本の製品・顧客環境へつなぐ。",
    genbaTake: "単なる翻訳や地域対応ではなく、日本語の言語・画像・音声特性を学習と評価へ落とし込み、基盤モデル自体の品質を上げる役割。",
    compensationReality: "日本の給与、株式、評価KPI、出社日数、研究計算資源は公式求人で未記載。",
    desiredProfile: "公式求人は機械学習研究、マルチモーダルモデル、学習・評価、実験設計の専門性を重視する。",
  }),
  makeJob({
    id: "liquid-ai-applied-ml-japanese-multimodal-091f16ad",
    companySlug: "liquid-ai",
    title: "Member of Technical Staff - Applied ML, Japanese Multimodal",
    segment: "Applied Machine Learning / Customer Deployment",
    location: "Tokyo",
    workStyle: "東京のハイブリッド勤務。顧客環境での導入を担当",
    language: "日本企業の技術チームと米国本社をつなぐ。日本語と英語の具体的水準は公式求人で未確認",
    source: { label: "Liquid AI Careers (Ashby)", url: "https://jobs.ashbyhq.com/liquid-ai/091f16ad-5d52-4337-89d8-c166c33577bf" },
    descriptionSummary: "日本企業の課題から配備済みAIまでの技術経路を持ち、モデル選定、適応、評価、最適化、顧客環境への導入を進める。",
    genbaTake: "実演に留まらず、遅延、メモリ、プライバシー、信頼性の制約を満たし、モデルを実際の端末・製品・業務で動かす応用機械学習職。",
    compensationReality: "日本の給与、株式、顧客担当数、出張、評価KPIは公式求人で未記載。",
    desiredProfile: "公式求人は応用機械学習、モデルの本番配備、顧客技術対応、研究・推論・製品チームとの協働を重視する。",
  }),
];
