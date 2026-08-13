import type { Company } from "@/lib/market-data";
import { getCompanyPublicIntelligence } from "@/lib/company-public-intelligence";

const conciseOverrides: Record<string, string> = {
  anaplan: "Anaplanは、財務・営業・人員など部門別の計画を一つにつなぎ、変化に応じた全社判断を速める計画基盤。",
  speak: "Speakは、AIとの会話練習と管理機能で、社員の実践的な英語スピーキング力を高める法人向け学習基盤。",
  sysdig: "Sysdigは、クラウドとコンテナの実行時リスクを可視化し、優先すべき脅威への対応を速めるセキュリティ基盤。",
  saviynt: "Saviyntは、人・外部委託先・AIエージェントの権限を統合し、過剰アクセスと監査負荷を減らすID管理基盤。",
  sonar: "Sonarは、コードの不具合・脆弱性・技術的負債を開発中に検出し、安全なリリースを支える品質管理基盤。",
  "channel-talk": "Channel Talkは、チャット・電話・メールと顧客情報を統合し、AIと人による顧客対応を一つにつなぐCRM基盤。",
  "extreme-networks": "Extreme Networksは、拠点ごとに分断したネットワークをクラウドで統合し、運用と障害対応を効率化する基盤。",
  zadara: "Zadaraは、データの保管場所・統制・コスト要件に合わせて運用できる、企業向け分散クラウド基盤。",
  sixsense: "6senseは、匿名の購買シグナルとCRMデータをAIで統合し、購入意欲の高い企業を特定するRevenue AI基盤。",
  "abnormal-ai": "Abnormal AIは、通常のメールを装う詐欺やアカウント侵害を行動分析で見抜く、AIメールセキュリティ基盤。",
  "apollo-io": "Apollo.ioは、企業・担当者データ、営業リサーチ、アウトリーチを統合し、新規商談の創出を効率化するGTM基盤。",
  "dbt-labs": "dbt Labsは、分析用データの変換ロジックと品質管理を標準化し、信頼できるデータ活用を支える基盤。",
  gurobi: "Gurobiは、複雑な制約を数理最適化し、生産・物流・人員などの計画判断を改善する意思決定基盤。",
  "neural-concept": "Neural Conceptは、3D設計とシミュレーションへAIを組み込み、製品開発の試行回数と期間を短縮する基盤。",
  patch: "Patchは、カーボンクレジットの調達・品質評価・取引を支え、企業の気候投資を実行につなげる基盤。",
  veeva: "Veevaは、製薬企業の研究開発・臨床・品質・規制・営業データをつなぐライフサイエンス向けクラウド。",
  lakera: "Lakeraは、生成AIへの攻撃と情報漏えいを防ぎ、企業がAIアプリを安全に運用するためのセキュリティ基盤。",
  tines: "Tinesは、セキュリティ・IT業務のアラート、承認、API操作をノーコードで自動化するワークフロー基盤。",
  attio: "Attioは、事業に合わせて顧客データ構造と営業フローを柔軟に設計できるAIネイティブCRM。",
  retool: "Retoolは、社内ツールや業務アプリを少ない開発工数で構築し、現場の手作業を減らす開発基盤。",
  "cato-networks": "Cato Networksは、拠点ネットワークとセキュリティをクラウドへ統合し、接続と運用を簡素化するSASE基盤。",
  patsnap: "Patsnapは、特許・論文・市場データをAIで結び、研究開発や新規事業の判断を速める技術情報基盤。",
  netskope: "Netskopeは、クラウド・Web・社内アプリへのアクセスとデータ保護を統合するSSE・SASE基盤。",
  mambu: "Mambuは、銀行の商品開発や外部サービス連携を速める、柔軟なクラウド型コアバンキング基盤。",
  nice: "NiCEは、電話・デジタル対応・AI・品質管理を統合し、コンタクトセンター運営を改善するCX基盤。",
  island: "Islandは、業務ブラウザ上でデータ・アクセス・アプリ利用を統制する企業向けセキュアワークスペース。",
  "1password": "1Passwordは、パスワード、端末、SaaS、AIエージェントのアクセスを統合管理するIDセキュリティ基盤。",
};

export function getCompanyCardSummary(company: Company): string {
  const override = conciseOverrides[company.slug];
  if (override) return override;

  const valueProp = getCompanyPublicIntelligence(company.slug)?.solutions[0]?.valueProp?.trim();
  if (!valueProp) return `${company.name}は、${company.category}領域の業務課題を解決する企業向けIT基盤を提供。`;

  const firstSentence = valueProp.split("。")[0].trim();
  return `${company.name}は、${firstSentence}。`;
}
