import type { CompanyPublicIntelligence, CompanySolution, CustomerProof } from "@/lib/company-public-intelligence";

export type SolutionFABE = {
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  competitor: string;
};

// 一覧で機械圧縮すると固有技術や比較軸が欠けやすい企業は、公開プロファイルの要点を明示的に編集する。
const cardSummaryOverrides: Record<string, string> = {
  mongodb: "データモデル変更や複数クラウド運用の複雑さを、柔軟なドキュメントDBとフルマネージド基盤で解決する、クラウド・AIアプリ向けのデータプラットフォーム企業。",
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
  "cato-networks": "課題「拠点網とセキュリティ機器が分散し、運用と障害切り分けが複雑」。主力製品はSD-WANとセキュリティをクラウドSASEへ統合する。優位性は、単一のグローバル網と制御面。",
  patsnap: "課題「特許・論文・企業・市場データが分かれ、R&D判断に時間がかかる」。主力製品は複数データをAIで接続・検索・分析する。優位性は、技術情報に特化したデータ網とオントロジー。",
  netskope: "課題「クラウド・Web利用時のアクセスと機密データを一貫制御できない」。主力製品はSSE・SASEで通信を検査し、権限とDLPを適用する。優位性は、利用文脈を捉えるデータ保護と専用ネットワーク。",
  mambu: "課題「旧来の勘定系で金融商品の変更と外部連携に時間がかかる」。主力製品はAPI中心のコンポーザブルなクラウドコアバンキング。優位性は、必要機能を組み替えられるモジュール設計。",
  nice: "課題「電話・デジタル対応・AI・品質管理が分断し、CXを改善できない」。主力製品はCXoneでチャネル・AI・要員・品質を統合する。優位性は、大規模な対話データと運用機能を同じ基盤で扱える点。",
  island: "課題「SaaS・Web上のデータ操作を端末やVDIだけでは細かく統制できない」。主力製品は業務ブラウザ自体へアクセス・DLP・監査を組み込む。優位性は、利用画面で統制しながら操作性を保てる点。",
  "1password": "課題「パスワード・端末・未統合SaaS・AIのアクセスが管理外になる」。主力製品は認証情報と拡張アクセス管理を統合する。優位性は、使いやすさを保ちながら人・端末・アプリを横断できる点。",
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
  return [
    explicit[0] ?? snapshotIssue ?? narrative["背景"] ?? intelligence.sellingPlaybook.issueLenses[0]?.body,
    narrative["課題"] ?? intelligence.sellingPlaybook.issueLenses[1]?.body,
    intelligence.sellingPlaybook.issueLenses.find((lens) => lens.title === "外部環境の要求から見る課題")?.body
      ?? intelligence.sellingPlaybook.openingHook,
  ].filter((item): item is string => Boolean(item)).map((item) => clip(item, 82)).slice(0, 3);
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
  return `「${clip(issue, 72)}」という状態を改善できる。成果は、${clip(measurement, 132)}。`;
}

export function getSolutionFABE(
  intelligence: CompanyPublicIntelligence,
  solution: CompanySolution,
): SolutionFABE {
  const storedFeature = clean(solution.feature ?? solution.valueProp);
  const primaryIssue = clean(resolveCustomerIssues(intelligence)[0] ?? "");
  const isGeneratedFeature = /課題を.+で解消$/.test(storedFeature)
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

export function getCompanyFABESalesSnapshot(intelligence: CompanyPublicIntelligence) {
  if (intelligence.salesSnapshotFabe) return intelligence.salesSnapshotFabe;
  const snapshotSentences = sentences(intelligence.salesSnapshot);
  const issues = resolveCustomerIssues(intelligence);
  const explicitIssueSentence = snapshotSentences.find((item) => extractCustomerIssues(item).length >= 3);
  const issueSentence = explicitIssueSentence
    ?? `${issues.map((issue) => `「${issue}」`).join("")}といった課題を解決する`;
  const firstSentence = snapshotSentences[0] ?? intelligence.salesSnapshot;
  const subject = firstSentence.match(/^(.+?)(?:は|とは)[、,]/)?.[1];
  const buyer = firstSentence.match(/(?:は|とは)[、,](.+?)が抱える/)?.[1]
    ?? firstSentence.match(/(?:は|とは)[、,](.+?)(?:が|に対し)[、,]?/)?.[1];
  const conciseExplicitContext = `${subject ?? "この会社"}は、${buyer ? `${clip(buyer, 54)}に対し、` : ""}${issues.map((issue) => `「${clip(issue, 58)}」`).join("")}といった課題を解決する。`;
  const context = subject ? conciseExplicitContext : `${firstSentence}。${issueSentence}。`;
  const primary = intelligence.solutions[0];
  if (!primary) return intelligence.salesSnapshot;

  const fabe = getSolutionFABE(intelligence, primary);
  return `${context}主力製品「${primary.name}」の機能は、${clip(fabe.feature, 92)}。競合に対する優位性は、${compactDifferentiator(fabe.advantage, 92)}。顧客メリットは、${clip(fabe.benefit, 118)}。根拠は、${clip(fabe.evidence, 118)}。`;
}

export function getFABECompanyCardSummary(intelligence: CompanyPublicIntelligence, slug?: string) {
  if (slug && cardSummaryOverrides[slug]) return cardSummaryOverrides[slug];
  const primary = intelligence.solutions[0];
  if (!primary) return "顧客の業務課題を専門テクノロジーで解決し、運用・統合面に優位性を持つ。";

  const fabe = getSolutionFABE(intelligence, primary);
  const issue = (resolveCustomerIssues(intelligence)[0] ?? intelligence.sellingPlaybook.frameIntro)
    .replaceAll("海外採用", "海外雇用")
    .replaceAll("採用", "増員");
  const feature = compactCardClause(fabe.feature, 43, "feature");
  const advantage = compactCardClause(fabe.advantage, 43, "advantage")
    .replace(/^([A-Za-z0-9][A-Za-z0-9 .-]{1,40})は/, "$1が");
  const summary = `課題「${clip(issue, 38)}」。主力製品は${feature}。優位性は、${advantage}。`
    .replaceAll("採用国", "雇用国")
    .replaceAll("採用", "雇用");
  if (summary.length <= 130) return summary;
  return `課題「${clip(issue, 28)}」。主力製品は${compactCardClause(fabe.feature, 36, "feature")}。優位性は、${compactCardClause(fabe.advantage, 36, "advantage")}。`
    .replaceAll("採用国", "雇用国")
    .replaceAll("採用", "雇用");
}
