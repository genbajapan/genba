import type { CompanyPublicIntelligence, CompanySolution, CustomerProof } from "@/lib/company-public-intelligence";

export type SolutionFABE = {
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  competitor: string;
};

export type CompanyFABESalesView = {
  summary: string;
  expanded: string;
};

// 一覧で機械圧縮すると固有技術や比較軸が欠けやすい企業は、公開プロファイルの要点を明示的に編集する。
const cardSummaryOverrides: Record<string, string> = {
  twilio: "顧客との電話・SMS・メール・データが分断するという課題を、通信APIと顧客エンゲージメント基盤で解決し、会話チャネルと顧客データを一体運用できる点で競合と差別化する企業。",
  "fusion-worldwide": "半導体不足・EOL・余剰在庫・偽造品リスクが同時に生じるという課題を、グローバル調達・品質検査・在庫管理で解決し、希少部品へのアクセスと品質証跡を両立できる点で競合と差別化する企業。",
  deepgram: "音声AIの遅延・誤認識・割り込み処理で顧客体験が崩れるという課題を、リアルタイム音声認識・合成・Voice Agent APIで解決し、低遅延と多言語品質を両立できる点で競合と差別化する企業。",
  mongodb: "データモデル変更や複数クラウド運用の複雑さを、柔軟なドキュメントDBとフルマネージド基盤で解決するクラウド・AIアプリ向けデータプラットフォーム企業。",
  okta: "課題「SaaSごとに認証・権限が分散する」。主力製品はSSO・MFA・IDライフサイクル管理を統合する。優位性は、18,000超のアプリ連携でマルチベンダー環境を横断できる点。",
  anaplan: "課題「部門別Excelで計画数値がつながらない」。主力製品はHyperblock上で財務・営業・人員等の計画を連動させる。優位性は、大規模で複雑な全社モデルの運用実績。",
  qualtrics: "課題「顧客・従業員の声が部門別アンケートに埋もれる」。主力製品は複数接点の体験データを統合・分析するXM基盤。優位性は、CX・EX・ブランドを同じ基盤で改善へつなげる点。",
  workato: "課題「システム間の転記・連携を人手に頼る」。主力製品は2,000超のコネクターとレシピで連携を自動化するiPaaS。優位性は、業務部門の構築速度と企業向け統制を両立する点。",
  notion: "課題「文書・タスク・社内知識が複数ツールへ散在する」。主力製品は文書・Wiki・データベース・AIを統合する。優位性は、柔軟なブロック設計で現場が業務を組み立てられる点。",
  elevenlabs: "課題「音声制作・吹き替え・電話応対の時間と費用が大きい」。主力製品は生成音声と会話AIをAPIで提供する。優位性は、多言語の音声品質と低遅延の対話技術。",
  speak: "課題「語学研修を受けても会議や交渉で話せない」。主力製品はAI会話・個別ロールプレイ・法人管理を統合する。優位性は、発話量を増やす設計と学習シナリオの個別化。",
  mirakl: "課題「自社在庫だけでは品揃えと売上機会を広げにくい」。主力製品は出店者・商品・注文を管理するマーケットプレイス基盤。優位性は、大企業向けの運営機能と蓄積した導入知見。",
  anthropic: "課題「生成AIを基幹業務へ入れる際の安全性と統制を説明できない」。主力製品は長文理解・ツール利用に対応するClaude。優位性は、安全性を重視したモデル設計と企業導入の選択肢。",
  fireblocks: "課題「デジタル資産の秘密鍵・送金承認・接続先を安全に管理できない」。主力製品はMPCウォレットとポリシー制御をAPIで提供する。優位性は、統制された運用と接続ネットワークの一体化。",
  deel: "課題「海外雇用のたびに契約・給与・労務を国別設計する」。主力製品はEOR・給与・契約者管理を統合するHR基盤。優位性は、対応国の広さと自社運営インフラを一つの画面で扱える点。",
  deepl: "課題「翻訳量の増加で外注費と確認時間が膨らむ」。主力製品は文書・会議・業務システムへ組み込めるLanguage AI。優位性は、翻訳品質に加え用語集・セキュリティ・企業統制を備える点。",
  sysdig: "課題「クラウド・コンテナの資産と実行時リスクが見えない」。主力製品はCNAPPとFalco由来の実行時検知を統合する。優位性は、実際の挙動から優先リスクを絞れる点。",
  saviynt: "課題「従業員・委託先・AIの権限が増え、過剰アクセスを追えない」。主力製品はクラウド型IGAで申請・レビュー・統制を自動化する。優位性は、多様なIDを一つのガバナンスへ統合できる点。",
  sonar: "課題「開発速度の上昇で不具合・脆弱性・技術的負債が増える」。主力製品はIDEからCIまでコードを継続検査する。優位性は、新規コードの品質基準を多言語・全チームへ標準化できる点。",
  "channel-talk": "課題「チャット・電話・メールと顧客情報が分断する」。主力製品は会話チャネル・CRM・AI対応を統合する。優位性は、問い合わせ対応から顧客育成までを同じ顧客文脈で運用できる点。",
  "extreme-networks": "課題「拠点ごとに有線・無線・データセンター網の管理が分かれる」。主力製品はネットワーク機器とクラウド管理を統合する。優位性は、複数環境を単一運用へまとめられる点。",
  zadara: "課題「データ配置・主権・コスト要件がクラウド一択では満たせない」。主力製品はストレージとクラウド機能をサービス型で分散配置する。優位性は、設置場所の柔軟性と従量運用。",
  sixsense: "課題「匿名企業の購買意欲が見えず、営業優先順位を決められない」。主力製品はIntent・CRM・接触データをAIで統合する。優位性は、購買段階の推定から広告・営業実行までを接続する点。",
  "abnormal-ai": "課題「正規メールを装う詐欺やアカウント侵害をルールで見抜けない」。主力製品は人・取引先の通常行動をAIで学習する。優位性は、既知シグネチャではなく行動の逸脱を検知する点。",
  "apollo-io": "課題「見込み客データ・調査・アウトリーチが別々で商談創出が遅い」。主力製品は企業・担当者データとシーケンスを統合する。優位性は、データ更新から実行までを一つのGTMワークフローで扱える点。",
  "dbt-labs": "課題「分析SQLが属人化し、変更履歴・品質・依存関係を追えない」。主力製品は変換処理へテスト・版管理・リネージを組み込む。優位性は、Analytics Engineeringの標準と大きなエコシステム。",
  gurobi: "課題「制約の多い生産・物流・人員計画を表計算と経験で解けない」。主力製品は数理最適化ソルバーで最良案を探索する。優位性は、計算性能と成熟したAPI・企業サポート。",
  "neural-concept": "課題「3D設計のシミュレーション反復に日数と計算費用がかかる」。主力製品は3D形状を直接学習するAIで結果を予測する。優位性は、形状ネイティブの学習と設計探索の高速化。",
  patch: "課題「カーボンクレジットの供給・品質・取引を一貫管理できない」。主力製品は調達・評価・取引をAPIと市場機能で支える。優位性は、購入実務とポートフォリオ管理を同じ基盤へ統合する点。",
  veeva: "課題「製薬の臨床・品質・規制・営業データが工程ごとに分断する」。主力製品はライフサイエンス専用クラウドで各工程を接続する。優位性は、業界固有のデータモデルと規制対応。",
  lakera: "課題「生成AIへの攻撃・危険な出力・情報漏えいを本番で制御できない」。主力製品はモデル非依存の実行時ガードレールと攻撃テストを提供する。優位性は、公開攻撃知見を継続防御へ反映する点。",
  tines: "課題「セキュリティ・ITのアラート処理とAPI操作が手作業になる」。主力製品はノーコードのワークフローとAIで対応を自動化する。優位性は、人の承認を残しながら既存ツールを横断できる点。",
  attio: "課題「固定的なCRM項目と営業フローが新しいGTMに合わない」。主力製品は柔軟なデータモデルを持つAIネイティブCRM。優位性は、リアルタイムの顧客データと共同作業を自由なスキーマで扱える点。",
  retool: "課題「社内ツールが開発バックログに滞留し、手作業が残る」。主力製品はDB・APIへ接続する業務アプリ・ワークフロー・AIをローコードで構築する。優位性は、開発速度と企業向け統制を両立する点。",
  stripe: "決済・請求・税・不正・入金管理が分断するという課題を、統合金融基盤で解決し、製品群とglobal対応の広さで競合と差別化する企業。",
  aghanim: "Mobile gameのapp store依存とplayer接点が分断するという課題を、Game HubとMoRで解決し、LiveOpsとの一体運用で競合と差別化する企業。",
  primer: "複数PSPの接続・routing・失敗決済回収が分断するという課題を、payments orchestrationで解決し、provider中立性で競合と差別化する企業。",
  "cato-networks": "課題「拠点網とセキュリティ機器が分散し、運用と障害切り分けが複雑」。主力製品はSD-WANとセキュリティをクラウドSASEへ統合する。優位性は、単一のグローバル網と制御面。",
  patsnap: "課題「特許・論文・企業・市場データが分かれ、R&D判断に時間がかかる」。主力製品は複数データをAIで接続・検索・分析する。優位性は、技術情報に特化したデータ網とオントロジー。",
  netskope: "課題「クラウド・Web利用時のアクセスと機密データを一貫制御できない」。主力製品はSSE・SASEで通信を検査し、権限とDLPを適用する。優位性は、利用文脈を捉えるデータ保護と専用ネットワーク。",
  mambu: "課題「旧来の勘定系で金融商品の変更と外部連携に時間がかかる」。主力製品はAPI中心のコンポーザブルなクラウドコアバンキング。優位性は、必要機能を組み替えられるモジュール設計。",
  nice: "課題「電話・デジタル対応・AI・品質管理が分断し、CXを改善できない」。主力製品はCXoneでチャネル・AI・要員・品質を統合する。優位性は、大規模な対話データと運用機能を同じ基盤で扱える点。",
  island: "課題「SaaS・Web上のデータ操作を端末やVDIだけでは細かく統制できない」。主力製品は業務ブラウザ自体へアクセス・DLP・監査を組み込む。優位性は、利用画面で統制しながら操作性を保てる点。",
  "1password": "課題「パスワード・端末・未統合SaaS・AIのアクセスが管理外になる」。主力製品は認証情報と拡張アクセス管理を統合する。優位性は、使いやすさを保ちながら人・端末・アプリを横断できる点。",
};

const cardDomainOverrides: Record<string, { issue?: string; capability: string; advantage: string }> = {
  zendesk: { capability: "問い合わせ履歴・チャネル・AI対応の一元化", advantage: "AIと有人対応を同じ顧客文脈で運用できる" },
  contentsquare: { capability: "行動データによる離脱要因・UXの可視化", advantage: "行動分析から売上影響まで一つの基盤で追える" },
  qualtrics: { capability: "顧客・従業員の体験データ分析と改善実行", advantage: "CX・EX・ブランドを同じ基盤で改善できる" },
  miro: { capability: "視覚的な共同作業と意思決定の一元化", advantage: "自由なキャンバスと企業統制を両立できる" },
  glean: { capability: "権限を継承する企業内検索とAIエージェント", advantage: "元システムの権限を保ったまま横断検索できる" },
  cambly: { capability: "ネイティブ講師とのオンライン英会話と法人管理", advantage: "実会話の量と受講の柔軟性を両立できる" },
  censys: { issue: "インターネット公開資産と攻撃経路を継続把握できない", capability: "インターネット資産の継続スキャンとリスク可視化", advantage: "攻撃者視点の資産データを継続更新できる" },
  "channel-talk": { capability: "チャット・電話・メール・CRMの一元化", advantage: "問い合わせ対応から顧客育成まで同じ文脈で運用できる" },
  "extreme-networks": { issue: "拠点ごとに有線・無線・データセンター網の管理が分かれる", capability: "有線・無線・クラウドネットワークの一元管理", advantage: "複数環境を単一の運用画面で管理できる" },
  gong: { capability: "商談会話の記録・分析と営業コーチング", advantage: "CRM入力だけでなく実際の顧客会話から判断できる" },
  celonis: { capability: "実データによる業務プロセス分析と改善実行", advantage: "発見した詰まりを自動化・AI実行までつなげられる" },
  mirakl: { capability: "出店者・商品・注文を統合するマーケットプレイス基盤", advantage: "大企業向けの運営機能と導入知見を持つ" },
  airwallex: { capability: "多通貨口座・決済・送金・経費の統合", advantage: "国をまたぐ資金移動を一つの基盤で扱える" },
  postman: { capability: "APIの設計・テスト・文書・共同作業の一元化", advantage: "APIライフサイクルを開発チーム横断で標準化できる" },
  lighthouse: { capability: "宿泊需要の予測と料金・販売判断の自動化", advantage: "市場データから価格実行まで一つの基盤で扱える" },
  datadog: { capability: "メトリクス・ログ・トレースの相関分析", advantage: "監視データを共通タグで横断できる" },
  "dbt-labs": { issue: "分析SQLが属人化し品質・変更履歴・依存関係を追えない", capability: "データ変換のテスト・版管理・依存関係の標準化", advantage: "テスト・版管理の標準と大きなエコシステムを持つ" },
  gurobi: { capability: "数理最適化による制約下の最良案探索", advantage: "計算性能と成熟したAPI・企業サポートを持つ" },
  patch: { issue: "カーボンクレジットの供給・品質・取引を一貫管理できない", capability: "クレジットの調達・評価・取引・管理の一元化", advantage: "購入実務とポートフォリオ管理を同じ基盤で扱える" },
  veeva: { issue: "製薬の臨床・品質・規制・営業データが工程ごとに分断する", capability: "ライフサイエンス専用クラウドによる工程統合", advantage: "業界固有のデータモデルと規制対応を備える" },
  wiz: { capability: "クラウド資産・設定・攻撃経路の統合分析", advantage: "エージェントレスでリスクの優先順位を絞れる" },
  patsnap: { issue: "特許・論文・企業・市場データが分断しR&D判断に時間がかかる", capability: "技術・市場データのAI検索と分析", advantage: "技術情報に特化したデータ網とオントロジーを持つ" },
  mambu: { issue: "旧来の勘定系で金融商品の変更と外部連携に時間がかかる", capability: "API中心のコンポーザブルなクラウド勘定系", advantage: "必要機能を組み替えられるモジュール設計を持つ" },
  nice: { issue: "電話・デジタル対応・AI・品質管理が分断している", capability: "コンタクトセンターのチャネル・AI・品質管理の統合", advantage: "大規模な対話データと運用機能を同じ基盤で扱える" },
  dialpad: { issue: "電話・会議・コンタクトセンターの会話データが分断する", capability: "クラウド電話と会話AI・営業支援の統合", advantage: "会話データからコーチング・業務改善までつなげられる" },
  zilliz: { capability: "大規模ベクトルデータの検索・運用", advantage: "MilvusのOSS基盤とマルチクラウド運用を両立できる" },
  airtable: { capability: "業務データベース・アプリ・自動化のローコード統合", advantage: "現場の柔軟性と企業向け統制を両立できる" },
};

function clean(text: string) {
  return text.replace(/\s+/g, " ").trim().replace(/[\u3002\s]+$/, "");
}

function clip(text: string, max: number) {
  const normalized = clean(text);
  if (normalized.length <= max) return normalized;
  const candidate = normalized.slice(0, max - 1);
  const breakAt = Math.max(candidate.lastIndexOf("、"), candidate.lastIndexOf("・"));
  return `${candidate.slice(0, breakAt >= Math.floor(max * 0.55) ? breakAt : max - 1)}…`;
}

function sentences(text: string) {
  return text
    .split("。")
    .map(clean)
    .filter(Boolean);
}

function compactDifferentiator(text: string, max: number) {
  return compactCardClause(text.replace(/^競合・代替手段との比較では、/, ""), max, "advantage");
}

function compactCardClause(text: string, max: number, kind: "feature" | "advantage") {
  const finishClause = (value: string) => value
    .replace(/統合し$/, "統合する")
    .replace(/つなぎ$/, "接続する")
    .replace(/持ち$/, "備える")
    .replace(/用い$/, "用いる")
    .replace(/行い$/, "行う")
    .replace(/支援し$/, "支援する")
    .replace(/実現し$/, "実現する")
    .replace(/掲げ$/, "掲げる")
    .replace(/訴求し$/, "訴求する")
    .replace(/強く$/, "強い")
    .replace(/武器に$/, "強みとする")
    .replace(/前提で$/, "前提とする")
    .replace(/集中$/, "集中している")
    .replace(/特化$/, "特化している")
    .replace(/理解し$/, "理解する")
    .replace(/一体化し$/, "一体化する")
    .replace(/とされ$/, "とされる");
  const options = clean(text)
    .split(kind === "feature" ? /。/ : /[。、]/)
    .map((item) => finishClause(clean(item).replace(/(一方|だが|ながら|といわれる)$/, "").replace(/[とで]$/, "")))
    .filter((item) => item.length >= 9 && !/^という/.test(item) && !/は$/.test(item));
  const scored = options
    .map((item) => ({
      item,
      score: kind === "feature"
        ? (/(自動|統合|検索|分析|管理|可視|予測|検知|構築|制御|基盤|機能|サービス|データベース|エンジン|プラットフォーム)/.test(item) ? 4 : 0) + item.length / max
        : (/差別/.test(item) ? 14 : 0)
          + (/優位/.test(item) ? 9 : 0)
          + (/(特徴|分がある)/.test(item) ? 11 : 0)
          + (/(強み|武器)/.test(item) ? 10 : 0)
          + (/(選ばれ|訴求)/.test(item) ? 5 : 0)
          + (/(統合|一体|柔軟|API|マルチ|中立|同じ基盤|エコシステム)/i.test(item) ? 3 : 0)
          - (/(制約|手薄|向かない|弱い|長い|苦境|報じ)/.test(item) ? 8 : 0)
          - (/が$/.test(item) ? 14 : 0)
          + item.length / max,
    }))
    .sort((a, b) => b.score - a.score);
  if (scored[0] && (kind === "feature" || scored[0].score >= 0)) return clip(scored[0].item, max);

  if (kind === "advantage") {
    if (/マルチクラウド/i.test(text)) return "マルチクラウドで同等に運用できる";
    if (/API/i.test(text)) return "API中心で既存環境へ組み込みやすい";
    if (/(統合|一体)/.test(text)) return "関連機能を同じ基盤で統合できる";
    if (/柔軟/.test(text)) return "データ・業務要件に合わせて柔軟に設計できる";
    return "運用・統合・拡張を一つの基盤で扱える";
  }
  if (/(インシデント|障害)/.test(text)) return "障害の検知・通知・エスカレーション・対応追跡を自動化する";
  if (/(連携|iPaaS)/i.test(text)) return "業務システムを接続し、部門横断の処理を自動化する";
  if (/(code|IDE|CI|quality|vulnerability)/i.test(text)) return "IDEからCIまでコード品質と脆弱性を継続検査する";
  if (/(network|wired|wireless|fabric)/i.test(text)) return "有線・無線・fabric・クラウド管理を一つのnetwork基盤に統合する";
  if (/(identity|access|SSO|MFA)/i.test(text)) return "identity・アクセス・権限レビューを一つのcontrol planeで管理する";
  if (/(commerce|checkout|storefront|POS)/i.test(text)) return "顧客・在庫・注文・決済を販売channel横断で統合する";
  if (/(customer|CRM|support|contact)/i.test(text)) return "顧客データと会話・営業・サポートworkflowを統合する";
  if (/検索/.test(text)) return "分散したデータを接続し、検索・分析できる状態にする";
  if (/AI/i.test(text)) return "AIと業務データを組み合わせ、対象ワークフローを自動化する";
  return "対象業務のデータとワークフローを一つの基盤で処理する";
}

export function extractCustomerIssues(salesSnapshot: string) {
  return Array.from(salesSnapshot.matchAll(/「([^」]+)」/g), (match) => match[1]);
}

function resolveCustomerIssues(intelligence: CompanyPublicIntelligence) {
  const explicit = extractCustomerIssues(intelligence.salesSnapshot);
  if (explicit.length >= 3) return explicit.slice(0, 3);

  const narrative = Object.fromEntries(intelligence.sellingPlaybook.narrative.map((stage) => [stage.label, stage.body]));
  const snapshotIssue = intelligence.salesSnapshot.match(/が抱える(.+?)(?:という|の)?課題を.+?で解く/)?.[1];
  const backgroundIssue = clean(narrative["背景"] ?? "")
    .replace(/^.+?により/, "")
    .replace(/^.+?は、/, "");
  const challengeParts = clean(narrative["課題"] ?? "")
    .split(/うえ[、,]/)
    .map((item) => item.replace(/ため[、,].*$/, "").replace(/ため$/, ""));
  const externalIssue = intelligence.sellingPlaybook.issueLenses.find((lens) => lens.title === "外部環境の要求から見る課題")?.body;
  const productIssue = intelligence.sellingPlaybook.issueLenses.find((lens) => lens.title === "製品の成り立ちから見る課題")?.body;
  const customerIssue = intelligence.sellingPlaybook.issueLenses.find((lens) => lens.title === "既存顧客の導入目的から見る課題")?.body;
  const candidates = [
    ...explicit,
    snapshotIssue,
    backgroundIssue,
    ...challengeParts,
    externalIssue,
    productIssue,
    customerIssue,
    intelligence.sellingPlaybook.openingHook,
  ]
    .filter((item): item is string => Boolean(item))
    .map((item) => sentences(item)[0] ?? clean(item))
    .filter((item) => item.length >= 8 && !item.includes("…"));
  const unique = candidates.filter((item, index) => {
    const normalized = item.replace(/[、,・\s]/g, "").slice(0, 32);
    return candidates.findIndex((candidate) => candidate.replace(/[、,・\s]/g, "").slice(0, 32) === normalized) === index;
  });
  return unique.slice(0, 3);
}

function proofMatchesSolution(proof: CustomerProof, solution: CompanySolution) {
  const normalizedProducts = proof.products.toLocaleLowerCase();
  const tokens = solution.name
    .toLocaleLowerCase()
    .split(/[^a-z0-9ぁ-んァ-ン一-龯]+/)
    .filter((token) => token.length >= 4 && !/^(platform|enterprise|cloud|data|business|applications?)$/.test(token));
  return tokens.some((token) => normalizedProducts.includes(token));
}

function resolveEvidence(intelligence: CompanyPublicIntelligence, solution: CompanySolution) {
  if (solution.evidence) return clean(solution.evidence);

  const matchedProof = intelligence.customerProof.find((proof) => proofMatchesSolution(proof, solution));
  if (matchedProof) {
    const source = intelligence.sources.find((item) => item.id === matchedProof.sourceId);
    const sourceLabel = source?.kind === "企業公式" ? "企業公式事例" : `${source?.kind ?? "公開情報"}の事例`;
    return `${matchedProof.company}の${sourceLabel}では、${clean(matchedProof.outcome)}。`;
  }

  const retention = clean(solution.retention);
  if (retention && !/(非公開|未公開|確認できない|公開されていない)/.test(retention)) {
    return `企業公式の製品ページで機能範囲を確認でき、${retention}。`;
  }

  return `企業公式の製品ページで上記機能を確認できる。一方、${retention || "日本の製品別導入社数・継続率・定量成果は未公開"}。`;
}

function resolveBenefit(intelligence: CompanyPublicIntelligence, solution: CompanySolution) {
  if (solution.benefit) return clean(solution.benefit);
  const issue = resolveCustomerIssues(intelligence)[0]
    ?? intelligence.sellingPlaybook.issueLenses[0]?.body
    ?? "現行業務の時間・コスト・リスクを十分に改善できない";
  const valueHypothesis = clean(intelligence.sellingPlaybook.valueHypothesis);
  const measurement = /(測る|baseline|導入前後|前後比較|比較する)/i.test(valueHypothesis)
    ? valueHypothesis
    : "導入前後の処理時間、品質、売上・継続率、運用コスト、リスクのうち、対象業務に直結するKPIで測る";
  return `「${clean(issue)}」という状態を改善できる。成果は、${clean(measurement)}。`;
}

export function getSolutionFABE(
  intelligence: CompanyPublicIntelligence,
  solution: CompanySolution,
): SolutionFABE {
  const storedFeature = clean(solution.feature ?? solution.valueProp);
  const primaryIssue = clean(resolveCustomerIssues(intelligence)[0] ?? "");
  const isGeneratedFeature = /課題を.+で解消$/.test(storedFeature)
    || /(できない|分断し|課題を)/.test(storedFeature)
    || resolveCustomerIssues(intelligence).some((issue) => issue.length >= 16 && (storedFeature.includes(issue.slice(0, 24)) || issue.includes(storedFeature.slice(0, 24))))
    || (primaryIssue.length >= 16 && (storedFeature.includes(primaryIssue.slice(0, 24)) || primaryIssue.includes(storedFeature.slice(0, 24))));
  const featureBase = isGeneratedFeature
    ? sentences(solution.differentiation).find((item) => !/^という/.test(item)) ?? storedFeature
    : storedFeature;
  const feature = featureBase.length < 28
    ? `${featureBase}。${clean(intelligence.sellingPlaybook.narrative.find((stage) => stage.label === "解決策")?.body ?? "対象業務のデータとワークフローを一つの基盤で扱う")}`
    : featureBase;
  const advantageBase = clean(solution.advantage ?? (isGeneratedFeature
    ? intelligence.sellingPlaybook.commonObjection.reframe
    : solution.differentiation));
  const advantage = /(競合|代替|比較)/.test(advantageBase)
    ? advantageBase
    : `競合・代替手段との比較では、${advantageBase}`;
  const competitorBase = (clean(solution.competitor ?? solution.competitors) || "内製、既存スイートの標準機能、同領域の専門製品")
    .replace(/が主要な競合(?=[(（]|$)/, "")
    .replace(/(が)?(主要な)?競合(とされる)?$/, "")
    .replace(/(が)?競合候補$/, "");

  return {
    feature: `${feature}。`,
    advantage: `${advantage}。`,
    benefit: resolveBenefit(intelligence, solution),
    evidence: resolveEvidence(intelligence, solution),
    competitor: `主な競合・代替手段は${competitorBase}。比較時は、機能の有無だけでなく、「${clip(advantageBase, 92)}」を同じ要件・実データで検証したい。`,
  };
}

function sentence(text: string) {
  return `${clean(text)}。`;
}

function firstSentence(text: string) {
  return sentences(text)[0] ?? clean(text);
}

function completeClause(text: string) {
  const clause = clean(text)
    .replaceAll("…", "")
    .replace(/を(統合|拡張|構築|最適化|改善|削減)を/g, "の$1を")
    .replace(/測り$/, "測る")
    .replace(/評価し$/, "評価する")
    .replace(/確認し$/, "確認する")
    .replace(/説明し$/, "説明する")
    .replace(/拡大$/, "拡大した")
    .replace(/向上$/, "向上した")
    .replace(/改善$/, "改善した")
    .replace(/実現$/, "実現した")
    .replace(/紹介$/, "紹介されている")
    .replace(/高速化$/, "高速化した")
    .replace(/短縮$/, "短縮した")
    .replace(/削減$/, "削減した")
    .replace(/継続利用$/, "継続利用している")
    .replace(/支援$/, "支援している")
    .replace(/をbaseline化$/, "をbaselineとして記録する")
    .replace(/活用\(第三者事例\)$/, "活用している(第三者事例)");
  if (/[るうすくむぶぐつぬた]$/.test(clause) || /(ない|高い|強い|低い|にある|である|ている|となる)$/.test(clause)) return clause;
  if (clause.endsWith("へ")) return `${clause}進んでいる`;
  if (/(非公開|未公開|未確認|必要|段階|局面|余地|可能性|見込み)$/.test(clause)) return `${clause}である`;
  if (clause.endsWith("評価")) return `${clause}している`;
  if (clause.endsWith("説明")) return `${clause}している`;
  if (clause.endsWith("公開")) return `${clause}している`;
  if (clause.endsWith("確認")) return `${clause}できる`;
  if (clause.endsWith("導入")) return `${clause}している`;
  if (/\(第三者事例\)$/.test(clause)) return clause;
  return `${clause}である`;
}

function resolveBuyer(intelligence: CompanyPublicIntelligence) {
  const snapshot = clean(intelligence.salesSnapshot);
  const lead = firstSentence(snapshot).replace(/^[^、]{1,80}は、/, "");
  const directBuyer = lead.match(/^(.{2,100}?)が、/)?.[1]
    ?? lead.match(/^(.{2,60}?)が(?=[一-龯A-Za-z])/u)?.[1]
    ?? lead.match(/^(.{2,100}?)(?:に対し|へ|に)[、,]/)?.[1];
  if (directBuyer && !/[「」]/.test(directBuyer)) return directBuyer;

  const corpus = `${snapshot} ${intelligence.sellingPlaybook.frameIntro} ${intelligence.solutions[0]?.valueProp ?? ""}`;
  if (/(RPA|自動化|workflow|ワークフロー)/i.test(corpus)) return "業務自動化を進める業務改革・IT部門";
  if (/(identity|認証|IGA|SSO|MFA|パスワード|security|セキュリティ|脆弱性|SASE|DLP)/i.test(corpus)) return "ID・クラウド・情報資産を守るIT・セキュリティ部門";
  if (/(cloud|クラウド|storage|ストレージ|network|ネットワーク|infrastructure|インフラ|database|DB)/i.test(corpus)) return "クラウド・データ基盤を設計運用するIT・インフラ部門";
  if (/(CRM|marketing|マーケティング|support|サポート|contact center)/i.test(corpus)) return "顧客獲得・継続支援を担う営業・マーケティング・顧客対応部門";
  if (/(data|データ|AI|machine learning|機械学習|database|DB)/i.test(corpus)) return "データ・AI活用を担う事業・データ・IT部門";
  if (/(財務|調達|経費|計画|予算|supply chain|サプライチェーン)/i.test(corpus)) return "計画・支出・業務改革を担う経営企画・財務・事業部門";
  if (/(開発|application|アプリケーション|code|コード|障害|observability)/i.test(corpus)) return "デジタルサービスを開発・運用する開発・SRE・IT部門";
  return "対象業務の変革を担う事業責任者・IT部門";
}

function featureStatement(productName: string, feature: string) {
  const clause = firstSentence(feature)
    .replace(new RegExp(`^${productName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:は|で)[、,]?`), "")
    .replace(/^主力製品(?:は|「[^」]+」は)[、,]?/, "");
  const completeFeature = clause
    .replace(/を相関$/, "を相関分析する")
    .replace(/を提供$/, "を提供する")
    .replace(/で提供$/, "で提供する")
    .replace(/を支援$/, "を支援する")
    .replace(/支援$/, "支援する")
    .replace(/へ発展$/, "へ発展している")
    .replace(/構築・展開・govern$/, "構築・展開・統制する")
    .replace(/統合$/, "統合する")
    .replace(/拡張$/, "拡張する")
    .replace(/最適化$/, "最適化する")
    .replace(/構築$/, "構築する")
    .replace(/解消$/, "解消する")
    .replace(/自動化$/, "自動化する")
    .replace(/管理$/, "管理する");
  if (/(製品|基盤|サービス|プラットフォーム|platform|データベース|DB)$/i.test(completeFeature)) {
    return `主力製品「${productName}」は、${completeFeature}である。`;
  }
  return `主力製品「${productName}」は、${/[るうすくむぶぐつぬ]$/.test(completeFeature) ? completeFeature : `${completeFeature}を提供する`}。`;
}

function advantageStatement(advantage: string) {
  const clause = sentences(advantage)
    .map((item) => ({
      item,
      score: (/(強み|優位|差別|点)/.test(item) ? 8 : 0)
        + (/(一方|これに対し|自社|同一基盤|一つの基盤)/.test(item) ? 4 : 0)
        - (/^[A-Za-z0-9 .-]{2,40}は/.test(item) && !/(強み|優位)/.test(item) ? 3 : 0),
    }))
    .sort((a, b) => b.score - a.score)[0]?.item
    ?.replace(/^一方[、,]?/, "")
    .replace(/^競合・代替手段との比較では、/, "")
    .replace(/^競合に対する優位性は、/, "")
    .replace(/^競合優位性は、/, "")
    .replace(/^[^、]{1,60}?は(?=.+(?:強み|優位|差別|点))/, "")
    .replace(/を統合$/, "を統合する")
    .replace(/を一体化$/, "を一体化する")
    .replace(/一体化$/, "一体化している")
    .replace(/接続$/, "接続できる")
    ?? "運用・統合・拡張を一つの基盤で扱える";
  if (clause.endsWith("点")) return `競合優位性は、${clause}にある。`;
  if (clause.endsWith("強み")) return `競合優位性は、${clause}である。`;
  return `競合優位性は、${clause}${/[るうすくむぶぐつぬ]$/.test(clause) ? "点にある" : "にある"}。`;
}

function categoryBenefit(intelligence: CompanyPublicIntelligence, primary: CompanySolution) {
  const corpus = `${primary.name} ${primary.valueProp} ${primary.feature ?? ""} ${primary.differentiation}`;
  if (/(camera|カメラ|video|映像|barcode|scan|衛星|画像|3D|simulation)/i.test(corpus)) return "現場データの取得と判断を速め、作業時間・誤り・見落としを減らせることにある";
  if (/(voice|音声|会話|speaking|語学|翻訳|language)/i.test(corpus)) return "制作・翻訳・会話対応にかかる時間と費用を減らし、品質と提供範囲を広げられることにある";
  if (/(observability|APM|monitor|監視|incident|障害)/i.test(corpus)) return "障害の検知から原因特定・復旧までを短縮し、停止損失と調査工数を減らせることにある";
  if (/(identity|認証|IGA|SSO|MFA|パスワード|アクセス管理)/i.test(corpus)) return "IDと権限の運用を標準化し、不正アクセス・監査リスクと管理工数を減らせることにある";
  if (/(security|セキュリティ|脆弱性|threat|attack|SASE|DLP)/i.test(corpus)) return "リスクの発見と対応を早め、侵害・情報漏えい・監査対応の負担を減らせることにある";
  if (/(CRM|marketing|マーケティング|campaign|キャンペーン|commerce|ecommerce|lifecycle|engagement|顧客エンゲージメント|experience|UX|行動分析)/i.test(corpus)) return "顧客データと施策をつなぎ、獲得効率・継続率・LTVの改善を同じ基盤で進められることにある";
  if (/(collaboration|共同|文書|ナレッジ|project|プロジェクト|会議)/i.test(corpus)) return "情報探索と引き継ぎの時間を減らし、部門横断の意思決定と実行を速められることにある";
  if (/(database|データベース|vector|ベクトル|Milvus|Zilliz|stream|Kafka|data platform|データ基盤|storage|ストレージ|edge cloud)/i.test(corpus)) return "データ変更と連携にかかる時間を減らし、開発速度・安定性・運用効率を高められることにある";
  if (/(plan|計画|予算|調達|経費|supply chain|最適化|solver)/i.test(corpus)) return "部門別の数字と制約をつなぎ、計画更新・意思決定・コスト最適化を速められることにある";
  if (/(RPA|automation|自動化|workflow|ワークフロー|iPaaS)/i.test(corpus)) return "手作業と部門間の待ち時間を減らし、処理時間・コスト・ミス率を改善できることにある";
  return "対象業務の処理時間・コスト・品質・リスクを同じKPIで改善できることにある";
}

function benefitStatement(benefit: string, intelligence: CompanyPublicIntelligence, primary: CompanySolution) {
  const clause = firstSentence(benefit)
    .replace(/^顧客への一番のメリットは、/, "")
    .replace(/^顧客メリットは、/, "");
  if (/^「.+」という状態を改善できる$/.test(clause)) return `顧客への一番のメリットは、${categoryBenefit(intelligence, primary)}。`;
  if (clause.endsWith("ことにある")) return `顧客への一番のメリットは、${clause}。`;
  if (clause.endsWith("こと")) return `顧客への一番のメリットは、${clause}にある。`;
  if (clause.endsWith("できる")) return `顧客への一番のメリットは、${clause}ことにある。`;
  if (clause.endsWith("する")) return `顧客への一番のメリットは、${clause.slice(0, -2)}できることにある。`;
  return `顧客への一番のメリットは、${clause}点にある。`;
}

function measurementStatement(intelligence: CompanyPublicIntelligence, benefit: string) {
  const benefitMeasurement = sentences(benefit).find((item) => /^成果は/.test(item));
  if (benefitMeasurement) return sentence(completeClause(benefitMeasurement));
  const hypothesis = clean(intelligence.sellingPlaybook.valueHypothesis)
    .replace(/^成果は[、,]?/, "")
    .replace(/^顧客価値は[、,]?/, "")
    .replace(/をbaseline比較$/, "をbaselineと比較する")
    .replace(/を減らすを導入前後/g, "の削減を導入前後")
    .replace(/を削減を導入前後/g, "の削減を導入前後")
    .replace(/を(統合|拡張|構築|最適化|改善)を/g, "の$1を");
  return `成果は、${completeClause(hypothesis)}。`;
}

function evidenceStatement(evidence: string) {
  const normalized = clean(evidence)
    .replace(/^根拠は[、,]?/, "")
    .replace(/^公開根拠として[、,]?/, "")
    .replace(/を導入\(公式事例ページで公開\)/g, "を導入したことが公式事例ページで公開されている");
  const completeEvidence = sentences(normalized).map(completeClause).join("。");
  return `公開根拠として、${sentence(completeEvidence)}`;
}

function japanMarketStatement(intelligence: CompanyPublicIntelligence) {
  const headline = intelligence.marketStatus.japanGrowth?.headline;
  if (!headline) {
    return "日本市場では、製品別の導入社数・継続率・競合勝率が未公開であり、公式事例と市場・採用シグナルの継続確認が必要である。";
  }
  const normalized = clean(headline).replace(/^日本(?:市場)?では[、,]?/, "");
  return `日本市場では、${completeClause(normalized)}。`;
}

export function getCompanyFABESalesView(intelligence: CompanyPublicIntelligence): CompanyFABESalesView {
  if (intelligence.salesSnapshotFabe && intelligence.salesSnapshotFabeExpanded) {
    return {
      summary: intelligence.salesSnapshotFabe,
      expanded: intelligence.salesSnapshotFabeExpanded,
    };
  }

  const issues = resolveCustomerIssues(intelligence);
  const primary = intelligence.solutions[0];
  if (!primary) {
    return {
      summary: intelligence.salesSnapshot,
      expanded: japanMarketStatement(intelligence),
    };
  }

  const fabe = getSolutionFABE(intelligence, primary);
  const context = `${resolveBuyer(intelligence)}に対し、${issues.map((issue) => `「${clean(issue)}」`).join("")}などの課題を解決する。`;
  return {
    summary: `${context}${featureStatement(primary.name, fabe.feature)}${advantageStatement(fabe.advantage)}${benefitStatement(fabe.benefit, intelligence, primary)}`,
    expanded: `${measurementStatement(intelligence, fabe.benefit)}${evidenceStatement(fabe.evidence)}${japanMarketStatement(intelligence)}`,
  };
}

export function getCompanyFABESalesSnapshot(intelligence: CompanyPublicIntelligence) {
  return getCompanyFABESalesView(intelligence).summary;
}

function cardCapability(intelligence: CompanyPublicIntelligence, primary: CompanySolution) {
  const corpus = `${primary.name} ${primary.valueProp} ${primary.feature ?? ""} ${primary.differentiation}`;
  if (/(camera|カメラ|video|映像|barcode|scan|衛星|画像|3D|simulation)/i.test(corpus)) return "画像・現場データの取得分析";
  if (/(voice|音声|会話|speaking|語学|翻訳|language)/i.test(corpus)) return "音声・言語処理のAI自動化";
  if (/(observability|APM|monitor|監視|incident|障害)/i.test(corpus)) return "運用データの相関分析・障害対応自動化";
  if (/(identity|認証|IGA|SSO|MFA|パスワード|アクセス管理)/i.test(corpus)) return "ID・認証・権限の一元管理";
  if (/(security|セキュリティ|脆弱性|threat|attack|SASE|DLP)/i.test(corpus)) return "リスクの検知・制御・対応自動化";
  if (/(CRM|marketing|マーケティング|commerce|ecommerce|sales engagement|experience|UX|行動分析)/i.test(corpus)) return "顧客データと施策・業務の統合自動化";
  if (/(collaboration|共同|文書|ナレッジ|project|プロジェクト|会議)/i.test(corpus)) return "情報・計画・共同作業の一元化";
  if (/(database|データベース|vector|ベクトル|Milvus|Zilliz|stream|Kafka|data platform|データ基盤|storage|ストレージ|edge cloud)/i.test(corpus)) return "データの柔軟な管理・連携・検索";
  if (/(plan|計画|予算|調達|経費|supply chain|最適化|solver)/i.test(corpus)) return "計画・意思決定プロセスの統合最適化";
  if (/(RPA|automation|自動化|workflow|ワークフロー|iPaaS)/i.test(corpus)) return "業務ワークフローの統合自動化";
  if (/AI/i.test(corpus)) return "AIによるデータ分析・業務実行";
  return "業務データとワークフローの統合自動化";
}

function cardAdvantage(intelligence: CompanyPublicIntelligence, primary: CompanySolution) {
  const corpus = `${primary.name} ${primary.valueProp} ${primary.differentiation}`;
  if (/3D|simulation/i.test(corpus)) return "3D形状を直接学習し設計探索を高速化できる";
  if (/(camera|カメラ|video|映像)/i.test(corpus)) return "映像・入退室・アラートを多拠点で一元管理できる";
  if (/(barcode|scan|衛星|画像)/i.test(corpus)) return "専用機器に依存せず現場へ展開できる";
  if (/(voice|音声|会話|speaking|語学|翻訳|language)/i.test(corpus)) return "多言語品質と業務組み込みを両立できる";
  if (/(observability|APM|monitor|監視|incident|障害)/i.test(corpus)) return "監視データを同じ文脈で相関できる";
  if (/(identity|認証|IGA|SSO|MFA|パスワード|アクセス管理)/i.test(corpus)) return "人・端末・アプリの権限を一つの統制面で扱える";
  if (/(security|セキュリティ|脆弱性|threat|attack|SASE|DLP)/i.test(corpus)) return "リスク検知から対応までを同じ基盤で扱える";
  if (/(CRM|marketing|マーケティング|commerce|ecommerce|sales engagement|experience|UX|行動分析)/i.test(corpus)) return "顧客データと施策を同じ基盤で扱える";
  if (/(collaboration|共同|文書|ナレッジ|project|プロジェクト|会議)/i.test(corpus)) return "現場の柔軟性と企業統制を両立できる";
  if (/(database|データベース|vector|ベクトル|Milvus|Zilliz|stream|Kafka|data platform|データ基盤|storage|ストレージ|edge cloud)/i.test(corpus)) return "既存データと運用を分けずに拡張できる";
  if (/(plan|計画|予算|調達|経費|supply chain|最適化|solver)/i.test(corpus)) return "複雑な制約と部門計画を同時に扱える";
  if (/(RPA|automation|自動化|workflow|ワークフロー|iPaaS)/i.test(corpus)) return "既存システムを横断して全社展開できる";
  return "データから業務実行までを一貫させられる";
}

function cardIssue(issue: string, corpus: string) {
  const normalized = clean(issue)
    .replaceAll("海外採用", "海外雇用")
    .replaceAll("採用", "増員")
    .replace(/という(?:3つの)?課題$/, "")
    .replace(/課題$/, "");
  if (normalized.length <= 38) return normalized;
  if (/3D|simulation/i.test(corpus)) return "3D設計のシミュレーション反復に時間と計算資源がかかる";
  if (/(identity|認証|権限|security|セキュリティ|脆弱性|attack)/i.test(corpus)) return "高度化する攻撃や過剰権限を従来のルールだけでは制御できない";
  if (/(CRM|marketing|マーケティング|campaign|キャンペーン|commerce|ecommerce|lifecycle|engagement|顧客エンゲージメント)/i.test(corpus)) return "顧客・商談データと施策・実行業務が分断している";
  if (/(code|developer|開発|bug|vulnerability)/i.test(corpus)) return "開発速度の向上で品質・脆弱性リスクが増えている";
  if (/(workflow|自動化|RPA|automation)/i.test(corpus)) return "部門をまたぐ業務が手作業と個別ツールに分断している";
  if (/(cloud|クラウド|data|データ|storage|network|DB)/i.test(corpus)) return "クラウド・データ基盤の運用が分断・複雑化している";
  return "対象業務のデータ・判断・実行が複数の仕組みに分断している";
}

function compactCardText(text: string, max: number) {
  const normalized = text.replaceAll("…", "");
  if (normalized.length <= max) return normalized;
  const prefix = normalized.slice(0, max);
  const breakAt = Math.max(prefix.lastIndexOf("、"), prefix.lastIndexOf("・"), prefix.lastIndexOf(" "));
  return (breakAt >= Math.floor(max * 0.65) ? prefix.slice(0, breakAt) : prefix).replace(/[、・\s]+$/, "");
}

export function getFABECompanyCardSummary(intelligence: CompanyPublicIntelligence, slug?: string) {
  if (slug && cardSummaryOverrides[slug] && !cardSummaryOverrides[slug].startsWith("課題「")) {
    return cardSummaryOverrides[slug];
  }
  const primary = intelligence.solutions[0];
  if (!primary) return "顧客の業務課題を専門テクノロジーで解決するソフトウェア企業。";

  const firstIssue = resolveCustomerIssues(intelligence)[0] ?? intelligence.sellingPlaybook.frameIntro;
  const corpus = `${primary.name} ${primary.valueProp} ${primary.feature ?? ""} ${primary.differentiation} ${firstIssue}`;
  const domain = slug ? cardDomainOverrides[slug] : undefined;
  const issue = compactCardText(domain?.issue ?? cardIssue(firstIssue, corpus), 38);
  const capability = domain?.capability ?? cardCapability(intelligence, primary);
  const advantage = domain?.advantage ?? cardAdvantage(intelligence, primary);
  return `${issue}という課題を、${capability}で解決し、${advantage}点で競合と差別化する企業。`
    .replaceAll("採用国", "雇用国")
    .replaceAll("採用", "雇用");
}
