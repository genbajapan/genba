import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  ae,
  applyStandard,
  buildCompactPatch,
  culture,
  fabeRows,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function patchAnaplan(intelligence: CompanyPublicIntelligence) {
  const sourceIds = {
    job: "anaplan-japan-job-finance-ae",
    company: "anaplan-ceo-gottdiener",
    japan: "anaplan-japan-leadership",
    mizuho: "anaplan-japan-customer-mizuho",
    pasona: "anaplan-japan-customer-pasona",
    nri: "anaplan-japan-customer-nri",
    partner: "anaplan-japan-partners",
    ai: "anaplan-ai-roadmap-2026",
    reviews: "anaplan-g2-reviews",
  };
  const founded = intelligence.marketStatus.milestones.find((item) => item.year === "2006");
  if (founded) founded.label = "創業";
  if (!intelligence.marketStatus.milestones.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label))) {
    intelligence.marketStatus.milestones.push({ year: "2016", label: "日本法人を設立し日本進出", detail: "中田淳氏が日本法人の1人目として事業を開始。", sourceId: sourceIds.japan });
  }
  intelligence.facts = [
    { label: "最新の監査済み年間売上高", value: "$592.2M（約960.3億円）", detail: "FY2022（2022年1月期）の最終上場期開示。2022年の非公開化後の監査済み売上は非公開で、現況値として扱わない。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算。", sourceIds: ["anaplan-fy2022-results", "rollout-boj-usd-20260716"] },
    { label: "最新の監査済みGAAP営業損失", value: "$200.7M（約325.4億円）の損失", detail: "FY2022の最終上場期開示。現在の収益性は非公開。会社は2026年にRule of 51を説明するが、成長率とEBITDA marginの内訳は非開示。1ドル=162.15円で参照換算。", sourceIds: ["anaplan-fy2022-results", "rollout-anaplan-2026-keynote", "rollout-boj-usd-20260716"] },
    { label: "ARR", value: "$1.2B（約1,946億円）", detail: "2026年の会社イベントで公表。ARRは年間売上高ではなく、契約経常収益の年率換算指標。監査済み財務数値ではない。1ドル=162.15円で参照換算。", sourceIds: ["rollout-anaplan-2026-keynote", "rollout-boj-usd-20260716"] },
    { label: "NRR", value: "113%", detail: "2026年の会社イベントで公表。算定範囲・監査状況は公開情報で確認できない。", sourceIds: ["rollout-anaplan-2026-keynote"] },
  ];
  intelligence.companyStats.japanOffice = { value: "〒100-7011 東京都千代田区丸の内2-7-2 JPタワー11階", detail: "Anaplan公式拠点情報で確認。", sourceId: "rollout-anaplan-contact" };
  intelligence.companyStats.japanSince = { value: "2016年", detail: "Anaplan公式の日本向け資料が、2016年から日本で事業を推進していると説明。法人設立の正確な月日は本調査で確定していない。", sourceId: "rollout-anaplan-japan-2016" };
  applyStandard(intelligence, {
    leadership: [
      { label: "グローバルCEO", people: [{ name: "Charlie Gottdiener", url: "https://www.anaplan.com/news/anaplan-appoints-charles-gottdiener-as-ceo-and-member-of-the-board-of-directors-to-drive-next-phase-of-growth/", linkLabel: "公式発表" }] },
      { label: "日本社長執行役員", people: [{ name: "中田 淳", url: "https://www.nikkinonline.com/article/166474", linkLabel: "公開インタビュー" }] },
    ],
    marketOutlook: {
      title: "日本市場でのニーズと3-5年の成長性の見立て",
      verdict: "結論：不確実性の高い経営環境とAI活用を背景に、全社計画をつなぐ需要は拡大余地がある。ただし大型導入の長期化と専門人材依存が成長の制約になる。",
      paragraphs: [
        "日本企業では財務、営業、サプライチェーン、人員の計画が部門別の表計算や個別システムに残り、前提変更のたびに集計と調整が発生する。みずほ銀行は海外拠点の予算編成、パソナグループはグループ人事、野村総合研究所は財務・案件・人員計画をつなぐ目的で導入しており、単一部門の予算管理を超える需要を確認できる。",
        "今後3〜5年は、原材料・為替・人材配置の変動に加え、AI予測を経営判断へ組み込む要求が追い風になる。Anaplanは役割別AIエージェントとData Orchestratorへの投資を進め、日本では金融・製造を支援できるパートナー網を持つ。一方、日本ARR、更新率、導入期間、専門人材の供給は非公開であり、需要拡大がそのまま短期受注へつながるとは限らない。",
        "Genba分析：勝ち筋は『Excelをなくす』ことではなく、経営会議で変化を何日早く反映できるか、予測誤差や在庫・人員の過不足をどこまで減らせるかを部門横断で示すことにある。大型顧客ほど導入範囲とモデル設計が複雑になるため、契約から定着までの実行力が営業成果を左右する。",
      ],
      cases: [
        { company: "みずほ銀行", need: "海外拠点の予算編成サイクルを短縮し、計画変更を迅速化。", sourceId: sourceIds.mizuho },
        { company: "パソナグループ", need: "グループ各社の人事データと要員計画を統合。", sourceId: sourceIds.pasona },
        { company: "野村総合研究所", need: "財務予測、プロジェクト、人員計画を同じ基盤で管理。", sourceId: sourceIds.nri },
      ],
      sourceIds: [sourceIds.mizuho, sourceIds.pasona, sourceIds.nri, sourceIds.ai, sourceIds.partner],
    },
    fabe: {
      targetSegments: ["金融", "製造・自動車", "小売・消費財", "経営企画・財務", "サプライチェーン・人事"],
      summary: "部門別に分かれた計画モデルとデータを一つにつなぎ、前提変更時の再計算、シナリオ比較、部門間合意を速めるコネクテッドプランニング基盤。",
      fabeRows: fabeRows([
        { key: "feature", analysis: "財務、営業、供給、人員など複数部門の計画モデルを共通基盤で構築し、変更を連動させる。", customerMeaning: "表計算ファイルの回収・突合ではなく、同じ前提で計画を更新できる。" },
        { key: "advantage", analysis: "Hyperblockの大規模モデリングと業務別アプリ、パートナー網、AI予測を組み合わせる。", customerMeaning: "単一業務から始め、全社の意思決定プロセスへ拡張できる。", sourceIds: [sourceIds.ai, sourceIds.partner] },
        { key: "benefit", analysis: "計画サイクル、シナリオ作成時間、予測誤差、在庫・人員の過不足を改善する。", customerMeaning: "システム更新ではなく、意思決定速度と資本配分の改善を投資理由にできる。" },
        { key: "evidence", analysis: "みずほ銀行、パソナグループ、野村総合研究所が異なる計画領域で公式事例を公開。", customerMeaning: "金融・人事・プロジェクト型事業の国内参照例を使える。", sourceIds: [sourceIds.mizuho, sourceIds.pasona, sourceIds.nri] },
        { key: "competitor", analysis: "SAP、Oracle、Workday Adaptive Planning、Pigment、表計算・内製が代替。", customerMeaning: "機能数でなく、既存ERPとの接続、モデル柔軟性、導入期間、運用人材、総保有コストで比べる。" },
      ]),
    },
    culture: culture({
      headline: "東京拠点を持つグローバル組織。公開求人は役割ごとに勤務条件が異なり、統一的な出社日数は確認できない。大型変革を部門横断で進める協働力と、PE傘下で成果を説明する規律の両方が要る。",
      classification: "ハイブリッド", displayLabel: "ハイブリッド（職種別に確認）", remoteOnly: "職種により異なる", officeDays: "公開情報では未特定", flexibility: "求人・配属先ごとに確認", workSummary: "東京拠点の求人は勤務地を明記するが、全職種共通の出社日数は公開されていない。勤務形態を推測せず、対象求人と面接で確認する。", officialSourceIds: [sourceIds.job],
      principles: [
        { label: "顧客成果", title: "ソフトウェア導入より意思決定の変化を追う", companySays: "公式顧客事例は計画期間、データ統合、シナリオ判断の改善を中心に説明する。", readerMeaning: "ライセンス契約だけでなく、顧客の計画プロセスとKPIを理解する必要がある。", sourceIds: [sourceIds.mizuho, sourceIds.pasona, sourceIds.nri] },
        { label: "専門協働", title: "営業だけで完結しない", companySays: "日本ではコンサルティング・SI・業務専門家のパートナー網を公開している。", readerMeaning: "営業、Solution Consulting、Professional Services、パートナーの責任境界を設計できる人が合う。", sourceIds: [sourceIds.partner, sourceIds.job] },
        { label: "変化対応", title: "AIと既存計画モデルをつなぐ", companySays: "AIエージェントとデータ統合へ複数年投資を表明。", readerMeaning: "成熟製品を守るだけでなく、新機能の価値と制約を顧客業務へ翻訳する必要がある。", sourceIds: [sourceIds.ai] },
      ],
      tokyoExperience: [
        { label: "拠点", value: "東京", detail: "日本法人と東京勤務地の求人を確認。", sourceId: sourceIds.job },
        { label: "顧客", value: "大手企業中心", detail: "金融、製造、人事・サービスの国内事例を公開。", sourceId: sourceIds.mizuho },
        { label: "支援体制", value: "パートナー型", detail: "国内のコンサル・SIパートナーを公式掲載。", sourceId: sourceIds.partner },
      ],
      salesCulture: [
        { title: "CFO・事業責任者と計画モデルを作る", evidence: "公式事例は業務部門横断の計画変革を扱う。", readerMeaning: "製品デモより、前提・KPI・意思決定会議を設計するコンサルティブセールスが中心。", sourceIds: [sourceIds.mizuho, sourceIds.pasona] },
        { title: "導入能力が受注後の評価を左右する", evidence: "複雑なモデルとパートナー実装を前提とする。", readerMeaning: "signed dealだけでなく、稼働・活用・拡張までの現実性を確認したい。", sourceIds: [sourceIds.partner, sourceIds.reviews] },
      ],
      community: { label: "G2公開レビュー集計", rating: "4.6 / 5（公開確認時点）", recommend: "東京営業職だけの推奨率は非公開", metrics: [{ label: "評価対象", value: "製品利用者" }, { label: "注意点", value: "導入・学習負荷の指摘あり" }], positiveRead: "柔軟なモデリングと大規模計画への適合を評価する投稿がある。", cautionRead: "導入の複雑さ、学習コスト、専門人材依存を指摘する投稿もある。", caveat: "製品レビューであり、社員・東京営業組織の職場評価ではない。", sourceId: sourceIds.reviews },
      goodFor: ["CFO・経営企画と複雑な変革商談を進めたい", "パートナーと長期導入を設計できる", "財務・供給・人員計画の専門性を積みたい"], cautionFor: ["短期・単一部門の商談だけを好む", "導入・定着を別部門へ完全に切り離したい", "勤務条件を公開情報だけで確定したい"], interviewQuestions: ["対象職種の標準出社日数と例外運用は？", "契約から本番稼働までの中央値と主な遅延要因は？", "日本のAE・SC・PS・パートナーの案件別責任は？", "直近の昇進・担当拡張の実例は？"],
      careerTitle: "経営管理SaaSと業務変革の複合経験", careerBody: "CFO・経営企画への価値提案、複数部門の合意形成、計画モデル、パートナー実装を成果で語れれば、EPM・ERP・サプライチェーン・経営コンサル領域へ接続しやすい。", sourceIds: [sourceIds.job, sourceIds.partner, sourceIds.mizuho, sourceIds.pasona, sourceIds.reviews],
    }),
    aeItems: [
      ae("日本territoryの再現性", "求人の入れ替わりがあるため、採用数だけでなく既存顧客・新規余地・担当設計が達成難度を左右する。", "fully-ramped sellerの達成率、担当アカウント数、newとexpansionの構成は？", "過去4四半期の数字と担当設計を説明できる。", "『市場は大きい』に留まり、分母と達成実績が示されない。", [sourceIds.job, sourceIds.mizuho]),
      ae("導入までの長さ", "大型計画案件では契約後のモデル設計・データ接続・定着が拡張を制約する可能性がある。", "契約から初回稼働までの中央値と、遅延理由の上位3つは？", "期間、責任者、短縮施策を具体的に説明できる。", "導入遅延の責任が曖昧なまま営業評価へ影響する。", [sourceIds.partner, sourceIds.reviews]),
      ae("AIの商談寄与", "AIロードマップは強いが、日本案件では既存計画刷新が主目的で、AI単体の予算化は限定的な可能性がある。", "日本の新規案件でAI機能が受注理由になった割合と代表use caseは？", "利用・受注・更新への寄与を分けて説明できる。", "ロードマップ説明だけで顧客成果がない。", [sourceIds.ai, sourceIds.nri]),
      ae("パートナーとの成果配分", "パートナー依存度が高いほどpipelineとdeliveryは強くなる一方、account ownershipとcreditが複雑になる。", "partner-sourced案件の比率と、direct AE・partner・PSのcredit ruleは？", "案件登録、責任、評価を明確に説明できる。", "商談ごとに慣行が変わり、quota creditが読めない。", [sourceIds.partner, sourceIds.job]),
      ae("PE傘下の投資規律", "Thoma Bravo傘下では成長投資と効率改善を同時に求められ、日本の採用・割引・支援余力へ影響する可能性がある。", "日本が単独で決められる採用、価格、サービス投資の範囲は？", "決裁権と近年の投資例を示せる。", "売上責任はあるが資源配分をほぼ動かせない。", ["anaplan-takeprivate-thomabravo", sourceIds.japan]),
    ],
    sources: [
      { id: "rollout-anaplan-2026-keynote", label: "Anaplan Connect 2026 Keynote", url: "https://www.anaplan.com/connect/on-demand-sessions/connect-ny-welcome-session-keynote-2026/", kind: "企業公式", scope: "ARR・Rule of 51・NRR", checkedAt: researchedAt },
      { id: "rollout-anaplan-contact", label: "Anaplan Contact", url: "https://www.anaplan.com/contact/", kind: "企業公式", scope: "グローバル本社・東京オフィス", checkedAt: researchedAt },
      { id: "rollout-anaplan-japan-2016", label: "Anaplan 日本市場の歩み", url: "https://www.anaplan.com/jp/resources/webinars/finance_area_for_corporate_value_enhancement_anaplan/", kind: "企業公式", scope: "2016年からの日本展開・国内導入規模", checkedAt: researchedAt },
      { id: "rollout-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（USD/JPY中心相場162.15円）", checkedAt: researchedAt },
    ],
  });
}

function patchBraze(intelligence: CompanyPublicIntelligence) {
  const ids = { finance: "brz-fy2026-margin-detail", q1: "brz-q1fy27", japan: "brz-japan-president", company: "brz-japancloud", mercari: "brz-mercari", freee: "brz-freee", mf: "brz-moneyforward", data: "brz-japan-datacenter", reviews: "brz-repvue" };
  if (!intelligence.marketStatus.milestones.some((item) => item.label === "創業")) intelligence.marketStatus.milestones.unshift({ year: "2011", label: "創業", detail: "Appboyとして創業し、2017年にBrazeへ改称。", sourceId: "brz-fy2026-results" });
  if (!intelligence.marketStatus.milestones.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label))) intelligence.marketStatus.milestones.push({ year: "2020", label: "日本法人を設立し日本進出", detail: "Braze株式会社を設立。", sourceId: ids.company });
  intelligence.facts = [
    { label: "年間売上高", value: "$738.2M（約1,197.0億円）", detail: "FY2026（2026年1月期）、前年比24.4%増。1ドル=162.15円（日本銀行 2026年7月16日中心相場）の参照換算。", sourceIds: [ids.finance, "rollout-boj-usd-20260716"] },
    { label: "フリーキャッシュフロー", value: "$58.1M（約94.2億円）", detail: "FY2026。GAAP営業損失は$144.8M（約234.8億円）であり、FCF黒字とGAAP赤字を併記して判断する。1ドル=162.15円で参照換算。", sourceIds: [ids.finance, "rollout-boj-usd-20260716"] },
    { label: "RPO", value: "$1,079.2M（約1,749.9億円）", detail: "Q1 FY2027時点の残存履行義務。売上高ではなく、未充足契約に基づく将来収益の指標。1ドル=162.15円で参照換算。", sourceIds: [ids.q1, "rollout-boj-usd-20260716"] },
    { label: "顧客規模", value: "2,713社", detail: "Q1 FY2027。ARR 50万ドル以上の顧客は349社。", sourceIds: [ids.q1] },
    { label: "日本顧客", value: "130社超", detail: "2026年初時点の会社公表。日本売上・ARR・利益は非公開。", sourceIds: ["rollout-braze-japan-q1"] },
  ];
  intelligence.companyStats.japanOffice = { value: "〒107-6218 東京都港区赤坂9-7-1 ミッドタウン・タワー18階", detail: "Braze公式会社情報で確認。", sourceId: "rollout-braze-company" };
  applyStandard(intelligence, {
    leadership: [
      { label: "共同創業者・CEO", people: [{ name: "Bill Magnuson", url: "https://www.braze.com/company/leadership", linkLabel: "公式Leadership" }] },
      { label: "日本代表取締役社長", people: [{ name: "水谷 篤尚", url: "https://markezine.jp/article/detail/48081", linkLabel: "就任記事" }] },
    ],
    marketOutlook: {
      title: "日本市場でのニーズと3-5年の成長性の見立て", verdict: "結論：ファーストパーティデータ、リアルタイム接客、AI最適化への需要は拡大余地がある。国内データ基盤への投資は追い風だが、既存CRM・MAとの統合競争が激しい。",
      paragraphs: [
        "EC、アプリ、サブスクリプション事業では、顧客獲得後の継続率とLTVが利益を左右する一方、行動データとメール、プッシュ、アプリ内施策が分断しやすい。メルカリ、freee、マネーフォワードの公式事例は、単発配信ではなく、顧客行動を起点にチャネル横断の体験を変える国内需要を示す。",
        "今後3〜5年は、cookie依存の低下、顧客接点の増加、生成AIによる施策最適化が追い風になる。Brazeは日本向け採用を継続し、金融機関のデータ常駐要件を意識した国内データセンター投資も発表した。一方、日本ARR、更新率、競合勝率は非公開で、Salesforce、Adobe、Klaviyo、Iterable、内製データ基盤との競争は続く。",
        "Genba分析：勝ち筋は配信量ではなく、施策作成時間、購入・継続率、チャネル間の顧客体験、データ活用速度を一つの検証へ載せること。日本の規制・セキュリティ要求へ対応しながら、マーケティング、プロダクト、データ部門を同じ成果指標で動かせる案件に向く。",
      ],
      cases: [{ company: "メルカリ", need: "大規模な顧客行動データを使い、複数チャネルのエンゲージメントを改善。", sourceId: ids.mercari }, { company: "freee", need: "顧客ライフサイクルに沿ったコミュニケーションと運用を構築。", sourceId: ids.freee }, { company: "マネーフォワード", need: "顧客データと施策を接続し、パーソナライズを推進。", sourceId: ids.mf }],
      sourceIds: [ids.mercari, ids.freee, ids.mf, ids.data, ids.finance],
    },
    fabe: { targetSegments: ["EC・マーケットプレイス", "デジタルサービス・SaaS", "金融・FinTech", "小売・消費財", "メディア・エンターテインメント"], summary: "顧客行動データをリアルタイムに取り込み、メール、プッシュ、アプリ内、Webなどの施策を一つの基盤から設計・配信・学習する顧客エンゲージメント基盤。", fabeRows: fabeRows([
      { key: "feature", analysis: "リアルタイムデータ、ジャーニー設計、複数チャネル配信、AI最適化を統合。", customerMeaning: "データ連携から施策実行までの待ち時間を減らせる。" },
      { key: "advantage", analysis: "マーケティングだけでなくプロダクト行動を起点に、大規模配信と個別化を同じ基盤で扱う。", customerMeaning: "顧客体験をキャンペーン単位でなくライフサイクル全体で設計できる。", sourceIds: [ids.finance] },
      { key: "benefit", analysis: "施策作成時間、エンゲージメント、継続率、購入率、LTVの改善を狙う。", customerMeaning: "配信コストではなく、既存顧客の売上と定着を投資理由にできる。" },
      { key: "evidence", analysis: "メルカリ、freee、マネーフォワードが国内事例を公開。", customerMeaning: "大規模B2CとSaaS・金融に近い参照例を使える。", sourceIds: [ids.mercari, ids.freee, ids.mf] },
      { key: "competitor", analysis: "Salesforce Marketing Cloud、Adobe Experience Platform、Klaviyo、Iterable、内製が代替。", customerMeaning: "チャネル数でなく、リアルタイム性、データ連携、運用生産性、AIの検証可能性、総コストで比べる。" },
    ]) },
    culture: culture({
      headline: "日本はJapan Cloudとの協業で拡大中。勤務形態と出社日数は職種別求人で確認が必要。高成長と製品変化を楽しめる一方、quota、役割境界、組織制度の実態は面接で切り分けたい。", classification: "ハイブリッド", displayLabel: "ハイブリッド（職種別に確認）", remoteOnly: "公開求人では未確認", officeDays: "公開情報では未特定", flexibility: "職種・チームごとに確認", workSummary: "日本の採用はJapan Cloudの公式求人を通じて行われる。全職種共通の出社日数は確認できず、推測しない。", officialSourceIds: [ids.company],
      principles: [
        { label: "顧客中心", title: "配信ではなく関係を作る", companySays: "公式事例は顧客行動を理解し、継続的な体験を設計する価値を示す。", readerMeaning: "プロダクト利用と事業KPIまで踏み込む営業が合う。", sourceIds: [ids.mercari, ids.freee] },
        { label: "学習速度", title: "AIとデータ活用を現場へ落とす", companySays: "AI判断と大規模なメッセージ処理への投資を継続。", readerMeaning: "新機能を追うだけでなく、顧客の運用へ定着させる力が必要。", sourceIds: [ids.finance] },
        { label: "部門横断", title: "マーケティング・プロダクト・データを束ねる", companySays: "国内事例は複数部門のデータと顧客接点を接続する。", readerMeaning: "単一buyerへの機能販売より、複数stakeholderの合意形成が中心になる。", sourceIds: [ids.mf, ids.mercari] },
      ],
      tokyoExperience: [{ label: "運営", value: "Braze株式会社 / Japan Cloud協業", detail: "日本採用と事業拡大をJapan Cloudが支援。", sourceId: ids.company }, { label: "代表", value: "水谷篤尚氏", detail: "2024年に日本代表へ就任。", sourceId: ids.japan }, { label: "国内基盤", value: "データセンター投資", detail: "国内データ常駐要求への対応を発表。", sourceId: ids.data }],
      salesCulture: [{ title: "カテゴリーを事業成果へ翻訳する", evidence: "公式事例はマーケティング施策と顧客成果を接続。", readerMeaning: "CX、LTV、retentionを顧客データと運用へ落とす力が必要。", sourceIds: [ids.mercari, ids.freee] }, { title: "成長と収益性の両面を追う", evidence: "売上成長が加速する一方、GAAP損失と粗利率は投資家の論点。", readerMeaning: "成長だけでなく、deal qualityと効率の説明も重くなる可能性がある。", sourceIds: [ids.finance, ids.q1] }],
      community: { label: "RepVue グローバル営業集計", rating: "自己申告の公開集計", recommend: "日本営業だけの推奨率は非公開", metrics: [{ label: "対象", value: "グローバル営業" }, { label: "日本固有", value: "十分な母数なし" }], positiveRead: "製品カテゴリー、成長性、顧客価値を評価する投稿が見られる。", cautionRead: "quota達成、territory、マネジメントに関する評価は時期・チームで分かれる。", caveat: "匿名・自己申告で日本営業の実態を直接示さない。個別投稿を事実認定しない。", sourceId: ids.reviews },
      goodFor: ["MarTechとプロダクトデータを横断したい", "高成長SaaSで複数部門を動かしたい", "国内の顧客エンゲージメント市場を作りたい"], cautionFor: ["確立済みのterritoryと制度だけを求める", "単一チャネルの配信営業に集中したい", "公開情報だけでquotaと勤務条件を確定したい"], interviewQuestions: ["対象職種の標準出社日数は？", "Japan CloudとBraze本社の評価・雇用・昇進の分担は？", "ramped sellerの達成率とnew/expansion構成は？", "AI機能の利用が受注・更新へ与えた実例は？"], careerTitle: "Customer Engagement、データ、AIの複合営業", careerBody: "顧客行動データ、リアルタイム施策、LTV・retention、複数部門合意を成果で示せれば、MarTech、CDP、Commerce、CRM、Product Analyticsへ接続しやすい。", sourceIds: [ids.company, ids.japan, ids.data, ids.reviews, ids.finance],
    }),
    aeItems: [
      ae("quotaの実現可能性", "グローバル成長が加速していても、日本のterritory品質とseller達成率は別問題。", "直近4四半期のfully-ramped seller達成率、平均ACV、cycleは？", "分布とセグメント差を説明できる。", "全社成長率だけで回答する。", [ids.q1, ids.company]),
      ae("newとexpansion", "顧客基盤が広がるほど既存拡張は増えるが、職種別のquota creditが異なる可能性がある。", "new logo、expansion、multi-productの目標とcredit ruleは？", "役割・成果配分が明確。", "案件ごとに例外が多く評価が読めない。", [ids.mercari, ids.company]),
      ae("AIの価値証明", "AI機能の利用拡大が、売上・継続率の改善として検証できていない案件もある可能性。", "日本でAI機能が受注・更新を動かした定量事例は？", "利用率と顧客KPIを分けて示せる。", "機能採用数だけを成果とする。", [ids.finance, ids.freee]),
      ae("データ基盤の競争", "Snowflake等と接続できても、既存CRM suiteや内製との役割境界が失注要因になる。", "日本で最も多い競合と、勝因・敗因の上位3つは？", "移行負荷・価格・運用まで説明できる。", "機能優位だけで敗因を語らない。", [ids.data, ids.mf]),
      ae("Japan Cloudとの分担", "日本組織の採用・評価・営業支援はBraze本社とJapan Cloudで分かれる可能性がある。", "採用、評価、昇進、価格、製品要望は誰が決める？", "決裁経路と近年の実例が明確。", "売上責任と意思決定権が釣り合わない。", [ids.company, ids.japan]),
    ],
    sources: [
      { id: "rollout-braze-company", label: "Braze 会社概要", url: "https://www.braze.com/ja/company", kind: "企業公式", scope: "創業・経営陣・本社・日本法人・オフィス", checkedAt: researchedAt },
      { id: "rollout-braze-japan-q1", label: "Braze 2027年度第1四半期 日本語発表", url: "https://www.braze.com/ja/press-releases/reports-fiscal-first-quarter-2027-results", kind: "企業公式", scope: "日本顧客数・国内データセンター", checkedAt: researchedAt },
      { id: "rollout-boj-usd-20260716", label: "日本銀行 外国為替市況 2026年7月16日", url: "https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx260716.pdf", kind: "公的機関", scope: "円換算レート（USD/JPY中心相場162.15円）", checkedAt: researchedAt },
    ],
  });
  if (intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.capitalMarketRead = {
      asOf: "2026年4月期 / 2026-08-17確認",
      metrics: [
        { label: "年間売上高", value: "$738M", change: "前年比+24.4%", interpretation: "FY2026の会社開示。成長率は再加速。", sourceId: ids.finance },
        { label: "GAAP営業損失", value: "-$144.8M", change: "前年-$122.2Mから拡大", interpretation: "非GAAP黒字化と同時に、株式報酬等を含むGAAP損失は拡大。", sourceId: ids.finance },
        { label: "RPO", value: "$1B超", change: "前年比+30%", interpretation: "将来売上の契約残高は売上を上回る速度で増加。", sourceId: ids.finance },
      ],
      growthDrivers: [{ title: "既存顧客の利用拡張", evidence: "NRRと大口顧客、RPOが成長を支える。", japanMeaning: "日本でも単一チャネルから複数チャネル・AIへ拡張できるかが重要。", sourceIds: [ids.finance] }, { title: "AIとデータ基盤", evidence: "AI判断機能とパートナー統合を強化。", japanMeaning: "データ・プロダクト部門を巻き込む商談余地。", sourceIds: [ids.finance, ids.data] }],
      risks: [{ title: "収益性と粗利", disclosedRisk: "GAAP営業損失が拡大し、粗利率低下が投資家の論点。", companyResponse: "非GAAP営業利益とFCFを改善しつつ成長投資を継続。", genbaRead: "日本でも低採算案件より継続・拡張可能なdeal qualityが重くなる可能性。", sourceIds: [ids.finance, ids.q1] }, { title: "カテゴリー競争", disclosedRisk: "大手suite、新興MarTech、内製との競争。", companyResponse: "リアルタイム性、AI、データ連携、国内基盤へ投資。", genbaRead: "顧客の既存stackと運用負荷まで含む比較が必要。", sourceIds: [ids.data, "brz-competitors-compare"] }],
      japanCommitment: { verdict: "継続投資を確認", summary: "日本代表、複数職種採用、国内データセンター、国内顧客事例を確認。一方、日本単体の売上・顧客数・採算は非公開。", signals: [{ year: "2020", title: "日本法人設立", detail: "日本市場のlocal体制を開始。", sourceIds: [ids.company] }, { year: "2024", title: "日本代表就任", detail: "水谷篤尚氏が就任。", sourceIds: [ids.japan] }, { year: "2026", title: "国内データ基盤", detail: "データ常駐要求への対応を発表。", sourceIds: [ids.data] }], unknowns: ["日本ARR・売上", "日本の有料顧客数・NRR", "seller別quota達成率", "国内事業の採算"] },
      scenarios: [{ scenario: "基本", title: "顧客基盤とAI利用が拡大", body: "成長を維持しつつ、非GAAP利益とFCFを改善。日本は既存事例から大手・金融へ拡張。" }, { scenario: "上振れ", title: "AIが新規予算を作る", body: "AI最適化と国内データ基盤が競合差別化となり、大型案件と拡張が加速。" }, { scenario: "下振れ", title: "粗利と競争が圧迫", body: "インフラ・AIコスト、価格競争、suite統合で成長と利益率が鈍化。" }],
      sourceIds: [ids.finance, ids.q1, ids.data, ids.japan],
    };
  }
}

// Channel Talk、Coupa、Cursorは、共通のAdyen v1必須フィールドを個社情報で補う。
// 詳細な既存本文・顧客事例・求人根拠は各元データを維持し、ここでは不足セクションだけを追加する。
function patchRemaining(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const channel = intelligenceBySlug["channel-talk"];
  if (channel) {
    if (!channel.marketStatus.milestones.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label))) {
      channel.marketStatus.milestones.push({ year: "2014", label: "日本法人を設立し日本進出", detail: "株式会社Channel Corporationを設立。製品の正式開始年は公式記事間で表記差があるため、法人設立と製品開始を分けて扱う。", sourceId: "channel-talk-company" });
    }
    applyStandard(channel, buildCompactPatch({
    slug: "channel-talk", leaderName: "崔在鎔", leaderLabel: "代表取締役CEO", leaderUrl: "https://channel.io/jp/blog/articles/press-release-channelworks-f1efb91b", localName: "玉川 葉", localLabel: "日本CEO", localUrl: "https://channel.io/ja/blog/articles/event-beams-ships-bce13bb9",
    companyId: "channel-talk-company", jobId: "channel-talk-job", customersId: "channel-talk-customers", externalId: "channel-talk-external", financeId: "channel-talk-finance",
    targets: ["電子商取引（EC）・D2C", "小売・消費財", "デジタルサービス", "カスタマーサポート", "CRM・マーケティング"], competitors: "Zendesk、Intercom、HubSpot、LINE・電話・メールの組み合わせ",
    feature: "チャット、電話、CRMマーケティング、顧客データ、AIエージェントALFを一つの顧客履歴で扱う。", advantage: "問い合わせ対応と売上・継続施策を同じ会話データから動かす。", benefit: "応答時間、自動解決率、サポート生産性、購入・継続率の改善を狙う。", evidence: "and ST、PAUL & JOE、SNKRDUNKなどの国内事例と、世界23万社超の利用を会社公式発表で確認。",
    marketVerdict: "結論：人手不足とAI対応需要を背景に伸びる余地は大きい。日本で営業・CS・技術職を同時採用しているが、国内ARR・更新率・有料顧客数は非公開。", marketParagraphs: ["EC・デジタルサービスではチャット、電話、メール、CRMが分かれ、担当者が顧客文脈を引き継げない。国内事例は、問い合わせ効率だけでなく購入・継続へ会話データを使う需要を示す。", "今後3〜5年は、24時間対応、人手不足、生成AI品質、個人情報管理が同時テーマになる。Channel Talkは日本で営業、CS、AIコンサル、FDE、Sales Engineerを広く採用し、製品と導入の両方へ投資している。", "Genba分析：勝ち筋はチャットの置換ではなく、AI解決率、有人引継ぎ、顧客履歴、売上貢献を同じ運用で改善すること。Zendesk等との比較では、既存システム移行と大企業の統制要件が制約になる。"],
    cultureHeadline: "東京・半蔵門でHybridとOn-siteの求人を職種別に明記。AI Nativeと高い実行速度を掲げる成長組織で、役割分業と部門横断の両方に適応できるかが重要。", classification: "ハイブリッド", displayLabel: "ハイブリッド／出社（職種別）", officeDays: "求人ごとにHybridまたはOn-site", remoteOnly: "現行日本求人で未確認", flexibility: "職種ごとに異なる",
    goodFor: ["AI CXを日本市場で作りたい", "SMBからEnterpriseまで異なるsales motionを経験したい", "顧客の声を製品へ近距離で返したい"], cautionFor: ["フルリモートを必須にする", "役割変更の少ない成熟組織を求める", "AI機能の説明だけで営業を完結したい"],
    unresolved: [
      ["日本の収益性", "利用社数が多くても有料ARRと継続率は別指標。", "日本の有料顧客数、ARR、GRR、NRRは？"], ["AIの成果", "ALF導入が有人削減だけでなくCX・売上へつながる案件は限定される可能性。", "日本で自動解決率と顧客KPIを同時改善した事例は？"], ["役割分業", "営業職が細分化され、handoffとcreditが成果を左右する。", "IS、FS、Enterprise、Partner、CSのownershipとcreditは？"], ["Enterprise適合", "SMB・ECでの強さを大企業のsecurity・integrationへ再現できるかが成長条件。", "大企業案件の平均cycle、失注理由、SE/FDE支援は？"], ["勤務と成長", "HybridとOn-siteが職種で異なり、昇進・異動の基準も変化中の可能性。", "出社基準、評価、直近の昇進・異動実例は？"],
    ],
    }));
    channel.facts = [
      { label: "年間売上高（韓国法人・二次情報）", value: "350.0億ウォン（約38.6億円）", detail: "2025年。韓国の監査情報を表示する外部データで確認した株式会社Channel Corporation単体とみられる数値。公式連結売上ではなく、連結範囲も未確認。100ウォン=11.02円（税関 2026年8月16〜22日適用）の参照換算。", sourceIds: ["rollout-channel-finance-secondary", "rollout-customs-krw-202608"] },
      { label: "営業損失（韓国法人・二次情報）", value: "36.0億ウォン（約4.0億円）の損失", detail: "2025年。上記と同じ外部データ。公式連結損益ではなく、現行のグループ収益性を断定しない。100ウォン=11.02円で参照換算。", sourceIds: ["rollout-channel-finance-secondary", "rollout-customs-krw-202608"] },
      { label: "ARR", value: "約450億ウォン（約49.6億円）", detail: "2026年7月の会社公式記事。ARRは年間売上高ではない。100ウォン=11.02円で参照換算。", sourceIds: ["rollout-channel-arr", "rollout-customs-krw-202608"] },
      { label: "利用規模", value: "世界23万社", detail: "会社公表の利用社数で、有料顧客数ではない。月800万件の問い合わせのうち400万件をALFが処理と説明。", sourceIds: ["rollout-channel-press-202607"] },
    ];
    channel.companyStats.japanOffice = { value: "〒102-0083 東京都千代田区麹町2-3-2 半蔵門PREX North 13階", detail: "会社公式発表で確認。", sourceId: "rollout-channel-press-202607" };
    channel.companyStats.japanSince = { value: "2014年1月10日", detail: "株式会社Channel Corporationの設立日。製品の正式開始年は公式記事間で2017年11月と2018年の表記差があるため分けて記録。", sourceId: "rollout-channel-press-202607" };
    const sourceIds = new Set(channel.sources.map((source) => source.id));
    channel.sources.push(...[
      { id: "rollout-channel-arr", label: "Channel Corporation 2026年事業戦略", url: "https://channel.io/kr/team/blog/articles/channel-strategy-ea6fce0a", kind: "企業公式" as const, scope: "ARR・MRR", checkedAt: researchedAt },
      { id: "rollout-channel-press-202607", label: "Channel Corporation 会社・ALF発表", url: "https://channel.io/jp/blog/articles/press-release-channelworks-f1efb91b", kind: "企業公式" as const, scope: "会社概要・日本法人・利用社数・ALF処理規模", checkedAt: researchedAt },
      { id: "rollout-channel-finance-secondary", label: "Channel Corporation 財務情報（監査情報由来の外部表示）", url: "https://www.saramin.co.kr/zf_user/company-info/view-inner-finance/csn/TXBYQ1hrYllrN21LZ0VkalFPRXZUQT09/company_nm/%28%EC%A3%BC%29%EC%B1%84%EB%84%90%EC%BD%94%ED%8D%BC%EB%A0%88%EC%9D%B4%EC%85%98", kind: "外部集計" as const, scope: "韓国法人の2025年売上・営業損失・純損失", checkedAt: researchedAt },
      { id: "rollout-customs-krw-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関" as const, scope: "円換算レート（100韓国ウォン=11.02円）", checkedAt: researchedAt },
    ].filter((source) => !sourceIds.has(source.id)));
  }

  const coupa = intelligenceBySlug.coupa;
  if (coupa) applyStandard(coupa, buildCompactPatch({
    slug: "coupa", leaderName: "Leagh Turner", leaderLabel: "CEO", leaderUrl: "https://www.coupa.com/company/leadership/", localName: "反町 浩一郎", localLabel: "日本代表取締役社長", localUrl: "https://coupa.co.jp/news/20250509",
    companyId: "coupa-take-private", jobId: "coupa-japan-jobs-account-director", customersId: "coupa-japan-customers", externalId: "coupa-japan-sorimachi-appointment", financeId: "coupa-take-private",
    targets: ["製造", "金融・サービス", "大手企業の調達・購買", "サプライチェーン", "経理・財務"], competitors: "SAP Ariba、Ivalua、GEP、JAGGAER、Zip、ERP・内製",
    feature: "調達、購買、請求、経費、サプライヤー、支出分析を統合するTotal Spend Management基盤。", advantage: "大規模な支出データとbuyer・supplier networkを使い、取引を横断してベンチマークとAI判断を提供する。", benefit: "支出可視化、契約外購買、処理工数、調達コスト、サプライヤーリスクを改善する。", evidence: "出光興産、三菱重工業、野村総合研究所など国内大手の導入情報と、日本の直販・Partner・Services求人を確認。",
    marketVerdict: "結論：コスト圧力、地政学・ESG・サプライヤーリスクを背景に需要は続く。日本では直販・アライアンス・導入支援を同時採用するが、非公開化後の売上・日本ARRは非公開。", marketParagraphs: ["日本企業の調達は部門・拠点ごとの購買、請求、サプライヤーデータが分かれ、全社支出と契約外購買を即時に把握しにくい。国内大手事例は、単なる経費精算でなく調達改革の基盤需要を示す。", "今後3〜5年は、原価上昇、供給網の地政学リスク、ESG・取引先管理、請求デジタル化が追い風になる。Coupaは日本代表を刷新し、直販、アライアンス、Professional Servicesの求人を展開している。", "Genba分析：勝ち筋は削減率だけでなく、支出カバレッジ、購買遵守、処理時間、サプライヤーリスクを同じbusiness caseへ載せること。SAP等の既存基盤との統合と大型導入の実行力が制約になる。"],
    cultureHeadline: "東京求人はHybridを中心に、一部Services職はRemote表記。PE傘下の成果規律と、日本の直販・Partner・Servicesを横断する協働が同時に求められる。", classification: "ハイブリッド", displayLabel: "ハイブリッド中心（職種別）", officeDays: "公開情報では未特定", remoteOnly: "一部職種のみRemote表記", flexibility: "職種ごとに異なる",
    goodFor: ["CPO・CFOへ大型変革を提案したい", "直販とパートナーを横断したい", "調達・支出・サプライチェーンの専門性を積みたい"], cautionFor: ["短期・小規模商談だけを好む", "導入部門と切り離して契約だけを追いたい", "PE傘下の成果規律を避けたい"],
    unresolved: [
      ["非公開化後の成長", "支出データ規模は大きいが、売上・ARR・収益性は非公開。", "直近の売上・ARR成長と日本の寄与は？"], ["日本territory", "大手導入実績があってもnew logo余地と担当設計は別。", "日本の有料顧客数、new/expansion構成、seller達成率は？"], ["Partnerとの分担", "アライアンス採用は強化シグナルだが、direct ownershipとcreditが複雑化する。", "partner-sourced比率と案件登録・credit ruleは？"], ["導入capacity", "大型調達改革は契約後のintegrationとchange managementが長い。", "契約から稼働までの中央値、Services capacity、遅延理由は？"], ["日本の意思決定権", "代表交代後の投資方針とThoma Bravoの効率要求が採用・価格へ影響する可能性。", "日本が決められる採用、割引、製品要望の範囲は？"],
    ],
  }));
  if (coupa) {
    coupa.facts = [
      { label: "最新の監査済み年間売上高", value: "$725.289M（約1,142.7億円）", detail: "FY2022（2022年1月期）の最終通期開示。2023年の非公開化後の売上は非公開で、現況値として扱わない。1ドル=157.56円（税関 2026年8月16〜22日適用）の参照換算。", sourceIds: ["rollout-coupa-10k-fy22", "rollout-customs-usd-202608"] },
      { label: "調整後フリーキャッシュフロー", value: "$155.6M（約245.2億円）", detail: "FY2022。同期のGAAP純損失は$379.039M（約597.3億円）。非公開化後の収益性は非公開。1ドル=157.56円で参照換算。", sourceIds: ["rollout-coupa-10k-fy22", "rollout-customs-usd-202608"] },
      { label: "コミュニティ支出データ", value: "$7T超（約1,102.9兆円）", detail: "2025年の会社公表。累計の支出データ規模であり、売上高・取扱高・AUMではなく、Coupaの売上と直接相関しない。1ドル=157.56円で参照換算。", sourceIds: ["coupa-japan-sorimachi-appointment", "rollout-customs-usd-202608"] },
      { label: "顧客規模", value: "3,100社超", detail: "2025年の会社公表。日本の顧客数は非公開。", sourceIds: ["coupa-japan-sorimachi-appointment"] },
    ];
    coupa.companyStats.japanOffice = { value: "〒107-6218 東京都港区赤坂9-7-1 ミッドタウン・タワー18階", detail: "Coupa日本公式会社概要で確認。", sourceId: "rollout-coupa-company" };
    coupa.companyStats.japanSince = { value: "2017年 / 2021年", detail: "Coupa Software合同会社を2017年、Coupa株式会社を2021年に設立。日本進出年を単一化せず併記。", sourceId: "rollout-coupa-company" };
    const sourceIds = new Set(coupa.sources.map((source) => source.id));
    coupa.sources.push(...[
      { id: "rollout-coupa-10k-fy22", label: "Coupa FY2022 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1385867/000138586722000010/coup-20220131.htm", kind: "法定開示" as const, scope: "最終通期売上・損益・FCF・支出データ", checkedAt: researchedAt },
      { id: "rollout-coupa-company", label: "Coupa 日本会社概要", url: "https://coupa.co.jp/company", kind: "企業公式" as const, scope: "創業・本社・日本法人・オフィス・製品", checkedAt: researchedAt },
      { id: "rollout-customs-usd-202608", label: "税関 週間為替相場 2026年8月16〜22日", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関" as const, scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
    ].filter((source) => !sourceIds.has(source.id)));
  }

  const cursor = intelligenceBySlug.cursor;
  if (cursor) {
    const founded = cursor.marketStatus.milestones.find((item) => item.year === "2022");
    if (founded) founded.label = "創業";
    if (!cursor.marketStatus.milestones.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label))) cursor.marketStatus.milestones.push({ year: "2026", label: "日本向けGTM採用を開始", detail: "Strategic AE、Channel、Field Engineering、FDE、Solutions Architectを公開。法人設立の有無は未確認。", sourceId: "cursor-job" });
    applyStandard(cursor, buildCompactPatch({
      slug: "cursor", leaderName: "Michael Truell", leaderLabel: "共同創業者・CEO", leaderUrl: "https://cursor.com/compile", localName: "日本責任者は公開情報で未確認", localLabel: "日本GTM", localUrl: "https://cursor.com/ja/careers",
      companyId: "cursor-company", jobId: "cursor-job", customersId: "cursor-money-forward", externalId: "cursor-external", financeId: "cursor-finance",
      targets: ["大手開発組織", "SaaS・デジタルサービス", "金融・FinTechの開発部門", "製造・モビリティのソフトウェア部門", "開発者基盤・開発生産性"], competitors: "GitHub Copilot、Claude Code、Gemini Code Assist、Devin、既存IDE・内製",
      feature: "AI-native editor、coding agent、code review、cloud execution、Enterprise security・管理を一つの開発環境で提供。", advantage: "個人のcode補完だけでなく、repository文脈、agent実行、review、組織統制まで同じworkflowへつなぐ。", benefit: "issueからreview済みcodeまでの時間、onboarding、review待ち、tool分散を改善する。", evidence: "Money Forwardは1,000人超、NVIDIAは3万人、Stripeは3,000人超への大規模展開を公式事例で紹介。",
      marketVerdict: "結論：AI codingの全社展開需要は急拡大する可能性が高い。一方、モデル競争、security、品質、開発者定着が速く変化し、日本事業の規模・継続率は未公開。", marketParagraphs: ["日本企業は内製化と開発者不足に直面し、生成AIを個人実験から標準開発環境へ移す必要がある。Money Forwardの公式事例は、エンジニアだけでなくProduct、Design、QAへ用途が広がる国内需要を示す。", "今後3〜5年は、code生成量よりreview、security、IP、model選択、利用定着、投資対効果が競争軸になる。Cursorは日本で直販、Partner、pre-sales、FDE、post-salesを同時採用し、初期GTM podを作っている。", "Genba分析：勝ち筋はseat数ではなく、time-to-reviewed-PR、defect、developer adoption、tool cost、security reviewを導入前後で示すこと。競合の製品進化が速いため、移行コストと継続的な差別化が最大の反証になる。"],
      cultureHeadline: "日本向け職種は勤務地を日本とするが、勤務形態・出社日数は求人で明記されないものがある。急成長・高い自律性・技術顧客への深い関与が魅力で、役割境界と持続可能性は面接で確認したい。", classification: "未確認", displayLabel: "勤務形態は職種別に要確認", officeDays: "公開情報では未特定", remoteOnly: "公開求人で明記なし", flexibility: "推測せず選考で確認",
      goodFor: ["AI Developer Platformの日本市場を作りたい", "CTOと開発者の両方へ価値を語れる", "製品変化が速い環境で自律的に動ける"], cautionFor: ["安定した製品範囲と役割境界を最優先する", "勤務形態を公開情報だけで確定したい", "技術評価・導入後の成果から距離を置きたい"],
      unresolved: [
        ["Japan traction", "国内大規模事例はあるが、日本ARR・有料顧客数・renewalは非公開。", "日本の有料顧客、ARR、GRR、NRR、new/expansion構成は？"], ["quotaとterritory", "高成長でも日本初期のaccount配分とpipelineは未成熟な可能性。", "named account数、quota、ramp、seller達成率は？"], ["PoCから全社展開", "個人利用が多くてもsecurity reviewとchange managementで全社化が止まる可能性。", "評価からproduction rolloutへの転換率と期間は？"], ["Partnerと直販", "partner-first市場でcreditとdelivery責任が曖昧だと速度が落ちる。", "direct/partner ownership、revenue credit、FDE capacityは？"], ["製品差別化", "競合モデル・agentの進化で機能差が短期間に縮む可能性。", "日本での勝因・敗因と、継続利用を決めるKPIは？"],
      ],
    }));
    cursor.facts = [
      { label: "Annualized revenue", value: "$1B超（約1,547億円）", detail: "2025年11月のSeries D時点の会社公表。ARRとは表記されておらず、年間売上高とも同一視しない。1ドル=154.72円（日本銀行 2025年11月13日17時時点レンジの中値）の参照換算。", sourceIds: ["cursor-finance", "rollout-cursor-boj-20251113"] },
      { label: "収益性", value: "非公開", detail: "純利益、営業利益、EBITDA、フリーキャッシュフロー、粗利率は公開情報で確認できない。", sourceIds: ["cursor-finance"] },
      { label: "Enterprise利用", value: "Fortune 500の70%超", detail: "2026年5月の会社発表。採用・利用を示すが、顧客単価・継続率・日本売上は示さない。", sourceIds: ["rollout-cursor-gartner-2026"] },
      { label: "資金調達・評価額", value: "$2.3B（約3,559億円） / $29.3B（約4.53兆円）", detail: "2025年11月のSeries D調達額 / post-money評価額。売上や収益性ではない。1ドル=154.72円で参照換算。", sourceIds: ["cursor-finance", "rollout-cursor-boj-20251113"] },
      { label: "日本の利用事例", value: "Money Forwardで1,000人超が日次利用", detail: "2026年の公式事例。効果値は顧客側発表でも確認したが、他社への平均効果を示さない。", sourceIds: ["cursor-money-forward", "rollout-cursor-moneyforward-customer"] },
    ];
    cursor.companyStats.japanOffice = { value: "非公開", detail: "日本法人名、日本オフィス住所、日本責任者は公式情報で確認できない。現行求人は勤務地を日本とするが、オフィス設置を意味しない。", sourceId: "cursor-job" };
    cursor.companyStats.japanSince = { value: "2026年に初期GTM採用を確認", detail: "法人設立・正式な進出年月は確認できないため、求人確認年だけを記録。", sourceId: "cursor-job" };
    const sourceIds = new Set(cursor.sources.map((source) => source.id));
    cursor.sources.push(...[
      { id: "rollout-cursor-boj-20251113", label: "日本銀行 外国為替市況 2025年11月13日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx251113.pdf", kind: "公的機関" as const, scope: "円換算レート（USD/JPY 154.71〜154.73円の中値154.72円）", checkedAt: researchedAt },
      { id: "rollout-cursor-gartner-2026", label: "Cursor 2026 Enterprise AI Coding Agents発表", url: "https://cursor.com/blog/cursor-leads-gartner-mq-2026", kind: "企業公式" as const, scope: "Fortune 500利用率・市場評価（Gartner非推奨の但書あり）", checkedAt: researchedAt },
      { id: "rollout-cursor-moneyforward-customer", label: "マネーフォワード Cursor活用発表", url: "https://corp.moneyforward.com/news/info/20260331-mf-press-2/", kind: "企業公式" as const, scope: "顧客側による国内導入規模・効果の再確認", checkedAt: researchedAt },
    ].filter((source) => !sourceIds.has(source.id)));
  }
}

export function applyCompanyPageRolloutBatchOne(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  if (intelligenceBySlug.anaplan) patchAnaplan(intelligenceBySlug.anaplan);
  if (intelligenceBySlug.braze) patchBraze(intelligenceBySlug.braze);
  patchRemaining(intelligenceBySlug);
}
