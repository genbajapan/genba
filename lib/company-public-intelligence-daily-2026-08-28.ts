import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-28";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.28";
  return intelligence;
}

const roktIntelligence = build({
  checkedAt,
  slug: "rokt",
  name: "Rokt",
  jobUrl: "https://apply.workable.com/rokt/j/361B100E01/apply/",
  officialUrl: "https://www.rokt.com/jp/company/about",
  customersUrl: "https://www.rokt.com/jp/clients/case-studies",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/",
  financeUrl: "https://www.rokt.com/jp/company/about",
  salesSnapshot: "ECの購入完了前後という意思が最も明確な瞬間に、顧客ごとに関連する広告・オファー・商品を選び、EC事業者の追加収益と広告主の顧客獲得を両立する。日本ではRokt Adsの顧客導入と成果改善を担うCustomer Success Managerを募集。",
  growthSummary: "2012年創業。会社公式は2025年に従業員700人超、評価額35億ドル、mParticleとの統合を掲載し、現在は年間100億件超の取引を支え、40%の前年比成長と説明する。日本別の売上・取引件数は非公開。",
  ipoSummary: "非公開企業。2025年の二次取引で35億ドル評価を公式掲載するが、IPO時期、日本売上、国内顧客数は公表していない。",
  milestones: [
    { year: "2012", label: "オーストラリアで創業", detail: "Justin VilesとBruce BuchananがRockliveを買収し、Roktを開始。", source: "company" },
    { year: "2017", label: "日本進出", detail: "会社公式の沿革でドイツと日本への進出を掲載。", source: "company" },
    { year: "2021", label: "Series E", detail: "3.25億ドルを調達。", source: "finance" },
    { year: "2025", label: "事業統合と評価額更新", detail: "mParticleと統合し、従業員700人超、評価額35億ドルを掲載。", source: "finance" },
    { year: "2026.08", label: "東京で顧客成功を採用", detail: "Rokt AdsのCustomer Success Managerを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "EC事業者は購入後の画面を単なる完了通知で終わらせず、顧客体験を壊さずに追加収益を作りたい。広告主は検索・SNS以外で、実際に購入した直後の高い意図へ到達したい。" },
    { title: "製品の成り立ちから見る課題", body: "Jetstarで購入導線を運営したBruce Buchananが、購入手続きの最後に顧客へ関連性の高い選択肢を出す機会が技術で十分に使われていないと見たことが起点。取引ごとの選択をAIで最適化する設計へ発展した。" },
    { title: "外部環境の要求から見る課題", body: "第三者Cookieの制約と広告費上昇で、企業は同意済みの取引接点を収益化したい一方、購入データの利用目的、委託、選択肢、表示の透明性を保つ必要がある。短期収益だけでなく顧客信頼と再購入を同時に管理する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "ECの獲得費が上がり、購入完了後の接点と自社取引データを使った増分収益が注目される。" },
    { label: "課題", body: "一律の広告や追加販売は関連性を欠くと顧客体験を損ね、広告主の成果とEC事業者の長期価値を同時に改善しにくい。" },
    { label: "解決策", body: "一つの購入導線で対象顧客、表示内容、増分収益、広告主獲得効率、再購入、問い合わせを比較し、関連性と収益を検証する。" },
    { label: "選定の理由", body: "小売メディア、広告ネットワーク、EC内製、購入後追加販売との比較で、取引時の予測精度、実装負荷、増分性、顧客体験、データ統制に優位がある場合に選ぶ。" },
  ],
  openingHook: "購入が完了した直後の画面は、顧客に価値を返しながらどれだけの増分収益を生んでいますか。",
  valueHypothesis: "対象導線で表示率、反応率、広告主獲得単価、増分収益、再購入、問い合わせ、表示速度を導入前後と対照群で比較する。",
  objection: "購入後の広告は顧客体験を損ね、既存の小売メディアや追加販売で十分。",
  reframe: "広告枠の有無ではなく、取引ごとの関連性を増分収益と顧客体験の両方で検証し、無関係な表示を減らせるかで比較する。",
  facts: [
    { label: "創業", value: "2012年", detail: "オーストラリアでRockliveを買収してRoktを開始。", source: "company" },
    { label: "公式従業員規模", value: "700人超", detail: "2025年の会社公式沿革。", source: "finance" },
    { label: "評価額", value: "35億ドル", detail: "2025年の二次取引時点。", source: "finance" },
    { label: "取引規模", value: "年間100億件超", detail: "会社公式リーダー紹介での現在値。", source: "company" },
    { label: "日本進出", value: "2017年", detail: "会社沿革。Rokt合同会社の会社概要も公開。", source: "company" },
    { label: "日本求人", value: "1件", detail: "本調査ではCustomer Success Manager, Rokt Adsを確認。", source: "job" },
  ],
  customers: [
    { company: "Booking.com", products: "Rokt Ads", outcome: "公式事例は広告費用対効果の目標を15%上回ったと掲載。", implication: "取引接点を広告主の獲得成果へ変える例。" },
    { company: "BJ's Wholesale Club", products: "Rokt Ecommerce", outcome: "公式事例は広告費用対効果300%を掲載。", implication: "小売側の購入導線を収益面へ広げる例。" },
    { company: "Newegg", products: "Rokt Ecommerce", outcome: "公式事例は100万取引当たり30万ドルの増分収益を掲載。", implication: "取引量と追加収益を結ぶ参照値。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "利用目的・委託・第三者提供", detail: "購入履歴や反応データを広告最適化へ使う場合、データ流れ、同意、委託先、保持・削除を確認する必要がある。", caveat: "具体的な法的要件はデータ、契約、表示、処理主体で異なる。" },
    { label: "小売メディア", value: "増分性と顧客体験", detail: "広告売上だけでなく、既存購入の付け替えではない増分効果、表示速度、苦情、再購入を同じ実験で見る必要がある。", caveat: "Rokt導入の効果は顧客基盤、導線、広告主、実装で異なる。" },
  ],
  role: "日本の広告主を導入し、施策開始、成果分析、最適化、関係拡大を担う。営業、実装、分析、製品と連携してRokt Adsの顧客成果を継続させる。",
  organization: "東京を基点とし、公式求人は週4日のオフィス勤務、日本語ネイティブ、英語ビジネスレベルを記載。日本組織人数とreporting lineは未公開。",
  careerValue: "小売メディア、広告運用、購入データ、顧客成功、施策の増分測定を横断する経験。",
  globalHeadcount: "700人超（2025年会社公式）",
  japanPresence: "Rokt合同会社、東京都港区六本木の会社概要、日本語公式サイト、東京求人を確認",
  japanSince: "2017年に日本進出、Rokt合同会社は2018年10月設立",
  solutions: [
    { name: "Rokt Ecommerce", valueProp: "購入時に関連性の高い広告・オファーを選び、EC事業者の増分収益を作る。", url: "https://www.rokt.com/jp/products/rokt-ecommerce", competitors: "小売メディア、広告ネットワーク、EC内製。", differentiation: "取引瞬間のデータと予測を表示選択へ使う。" },
    { name: "Rokt Ads", valueProp: "実際に購入する顧客へ広告主の獲得提案を届ける。", url: "https://www.rokt.com/jp/products/rokt-ads", competitors: "検索広告、SNS広告、アフィリエイト。", differentiation: "購入完了前後の高い意図とEC網への到達。" },
    { name: "Rokt mParticle", valueProp: "顧客データを収集・統合し、取引時の関連性へ接続する。", url: "https://www.rokt.com/jp/products/mparticle", competitors: "顧客データ基盤、EC分析、内製データ基盤。", differentiation: "顧客データ基盤と取引時の意思決定を同一企業内で接続。" },
  ],
  fitTags: ["AI Commerce", "Retail Media", "Advertising", "Customer Success", "Tokyo", "Japanese"],
  comparisons: [
    { arena: "小売メディア", companies: ["Rokt", "Criteo", "EC内製"], why: "取引接点、増分性、実装" },
    { arena: "広告主獲得", companies: ["Rokt", "Google", "Meta"], why: "意図、到達、獲得効率" },
    { arena: "購入後収益", companies: ["Rokt", "追加販売", "会員施策"], why: "収益、顧客体験、再購入" },
  ],
}, {
  slug: "rokt", leaderName: "Bruce Buchanan", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://www.rokt.com/jp/company/about", localName: "三嶋 健", localLabel: "Rokt合同会社 代表者", localUrl: "https://www.rokt.com/jp/policies/about-roktgk",
  companyId: "rokt-company", jobId: "rokt-job", customersId: "rokt-customers", externalId: "rokt-external", financeId: "rokt-finance",
  targets: ["EC・小売の収益責任者", "広告・顧客獲得責任者", "デジタルコマース・顧客体験責任者"],
  heroSummary: "広告費が上がる一方、購入完了後の接点が一律表示のままで増分収益を取りこぼす課題を解く。購入が完了する瞬間の顧客意図を使い、関連する広告・商品だけを選び、EC事業者の収益と広告主の獲得効率を顧客体験を保ちながら改善する。",
  competitors: "Criteo等の小売メディア、Google・Meta、EC内製、購入後追加販売との比較では、増分性、取引時の関連性、実装、顧客体験、総コストを見る。",
  feature: "取引時の顧客・商品・広告データをAIで評価し、購入導線へ表示する内容をリアルタイムに選ぶ。",
  advantage: "年間100億件超の取引データ、EC事業者と広告主の両面網、mParticleの顧客データ基盤を同じ意思決定へ接続する。",
  benefit: "EC事業者は既存取引から増分収益を作り、広告主は購入意思の高い顧客を獲得できる可能性がある。",
  evidence: "Booking.comは広告費用対効果の目標超過、BJ'sは300%、Neweggは100万取引当たり30万ドルの増分収益を公式事例で掲載。日本個社の定量成果は未確認。",
  marketVerdict: "日本法人、日本語サイト、東京採用は揃う。一方、日本売上、国内取引件数、顧客数、組織人数、広告主の継続率は未公開。",
  marketParagraphs: ["獲得費の上昇と第三者Cookie制約で、同意済みの購入接点を顧客価値と収益へ変える需要が増える。", "今後3〜5年は国内のEC・広告主網を広げ、短期広告収益だけでなく増分性、再購入、表示品質を再現できるかが成長条件になる。"],
  cultureHeadline: "東京で広告主の導入から成果拡大まで持つ、週4日オフィスの顧客成功職。",
  classification: "ハイブリッド", displayLabel: "東京・週4日オフィス", officeDays: "週4日", remoteOnly: "フルリモートではない", flexibility: "残り1日の勤務場所と例外条件は未公開",
  goodFor: ["広告成果と顧客継続を一つの施策で改善したい人", "実装・分析・営業を束ねて顧客価値を作りたい人"], cautionFor: ["在宅中心の働き方を必須にする人", "広告運用の進行だけを担当したい人"],
  unresolved: [["担当範囲", "導入・最適化・関係拡大を担当。", "担当社数、顧客区分、導入中と運用中の比率は。"], ["評価", "広告主の成果と継続を支援。", "売上、継続、広告成果、利用の評価配分は。"], ["増分性", "取引時の関連性を最適化。", "対照群、再購入、苦情、表示速度をどう測るか。"], ["組織", "東京で週4日勤務。", "日本人数、reporting line、実装・分析支援の配置は。"], ["報酬", "給与額は未公開。", "base、bonus、equity、昇進基準は。"]],
});

roktIntelligence.sources.push({ id: "gbiz-headcount-rokt", label: "gBizINFO Rokt合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=5010403019417", kind: "外部集計", scope: "日本法人・事業所情報・被保険者数", checkedAt });
roktIntelligence.companyStats.japanHeadcount = { value: "6人（公開集計の参考値）", detail: "gBizINFOでRokt合同会社を特定。事業所情報の被保険者数を日本法人での想定従業員数として扱い、役員・業務委託・未加入者は含まれない。", sourceId: "gbiz-headcount-rokt" };

const menloSecurityIntelligence = build({
  checkedAt,
  slug: "menlo-security",
  name: "Menlo Security",
  jobUrl: "https://jobs.ashbyhq.com/menlosecurity/6d39fd97-f731-453c-99ef-8331eca78749",
  officialUrl: "https://www.menlosecurity.com/ja-jp/about/life-at-menlo",
  customersUrl: "https://www.menlosecurity.com/ja-jp/customers",
  externalUrl: "https://www.meti.go.jp/policy/netsecurity/mng_guide.html",
  financeUrl: "https://www.menlosecurity.com/ja-jp/about/press-releases",
  salesSnapshot: "従業員が普段のブラウザを変えずにWeb、SaaS、社内アプリを使いながら、未知の脅威、フィッシング、ファイル、データ流出をクラウド側で分離・制御する。日本では販売パートナーの技術提案を作るChannel Sales Engineerを募集。",
  growthSummary: "2012年創業。2024年に年間経常収益1億ドル超、顧客1,000社超、保護利用者800万人超を公式発表。LinkedInの公開会社規模は201〜500人。日本別の売上・顧客数は非公開。",
  ipoSummary: "非公開企業。年間経常収益1億ドル超を公式発表するが、IPO時期、日本売上、国内契約数は公表していない。",
  milestones: [
    { year: "2012", label: "創業", detail: "ブラウザをクラウドで分離し、未知のWeb脅威を端末へ届かせない設計から開始。", source: "company" },
    { year: "2017", label: "日本法人設立・展開", detail: "国内法人・東京拠点と日本語の製品・事例情報を展開。", source: "company" },
    { year: "2021", label: "Series E", detail: "1億ドルを調達し、評価額8億ドルを発表。", source: "finance" },
    { year: "2024", label: "ARR 1億ドル超", detail: "顧客1,000社超、利用者800万人超を公式発表。", source: "finance" },
    { year: "2026.08", label: "日本Channel SE採用", detail: "JapanのSales Engineer - Channelを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "東京海上ディーアール、日本郵政グループ、宮崎県等は、Web経由の未知脅威を止めながら、隔離端末やVDIの遅さ・手作業を減らし、利用者が普段の業務を続けられることを導入目的にした。" },
    { title: "製品の成り立ちから見る課題", body: "既知の悪性判定を端末で待つのではなく、ブラウザ処理をクラウドで実行し、安全な表示だけを利用者へ返すIsolation Coreから開始。現在はアクセス、データ、ファイル、AIエージェントまでブラウザ上の制御を広げる。" },
    { title: "外部環境の要求から見る課題", body: "業務がWebとSaaSへ移り、生成AIとAIエージェントもブラウザから外部サービスへ接続する。企業は侵入防止だけでなく、誰がどの情報へアクセスし、何を入力・持ち出したかを事業継続と生産性を損なわず管理する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "Web、メール、SaaSが主要な業務入口となり、既知判定をすり抜ける攻撃と機密情報の持ち出し経路がブラウザへ集中する。" },
    { label: "課題", body: "端末検知、VDI、専用端末、禁止中心の対策は未知脅威を残すか、利用者の速度とIT運用を犠牲にする。" },
    { label: "解決策", body: "一つの利用者群と業務で分離・データ制御を導入し、感染、検知後対応、閲覧待ち時間、問い合わせ、例外、運用工数を比較する。" },
    { label: "選定の理由", body: "既存SSE、エンドポイント防御、VDI、専用Enterprise Browserとの比較で、未知脅威の防止、既存ブラウザ維持、データ制御、導入・運用負荷に優位がある場合に選ぶ。" },
  ],
  openingHook: "Web経由の脅威を検知して直すまでに、利用者とセキュリティ担当は毎月何時間を失っていますか。",
  valueHypothesis: "対象群で感染、検知後対応、閲覧待ち時間、例外申請、問い合わせ、運用工数、データ流出イベントを導入前後で比較する。",
  objection: "既存のSSE、エンドポイント防御、VDI、ブラウザ設定で十分。",
  reframe: "機能の重複ではなく、未知のWeb処理を端末へ届かせず、普段のブラウザと既存構成を保ったまま運用負荷まで減らせるかで比較する。",
  facts: [
    { label: "創業", value: "2012年", detail: "米国でブラウザ分離の会社として創業。", source: "company" },
    { label: "ARR", value: "1億ドル超", detail: "2024年10月の会社公式発表。", source: "finance" },
    { label: "顧客", value: "1,000社超", detail: "同発表時点。", source: "finance" },
    { label: "保護利用者", value: "800万人超", detail: "同発表時点。", source: "finance" },
    { label: "グローバル規模", value: "201〜500人", detail: "LinkedIn公開会社規模レンジ。公式厳密値ではない。", source: "company" },
    { label: "日本求人", value: "1件以上", detail: "本調査ではSales Engineer - Channelを確認。", source: "job" },
  ],
  customers: [
    { company: "東京海上ディーアール", products: "Menlo Secure Cloud Browser", outcome: "公式事例は導入後2年間のマルウェア感染ゼロと保守負荷の削減を掲載。", implication: "国内の専門業務で安全と操作性を両立する例。" },
    { company: "日本郵政グループ", products: "Menlo Security Cloud Platform", outcome: "公式事例は全組織のWeb閲覧でマルウェアゼロ、追加ブラウザ・プラグイン不要を掲載。", implication: "大規模利用者へ既存操作を保って展開する例。" },
    { company: "四国電力グループ", products: "Menlo Security", outcome: "公式発表はグループ11社・約1万3,000人でVDIの遅さ等を解消し、生産性と運用負荷を改善したと掲載。", implication: "隔離方式の置換を業務体験で評価する例。" },
  ],
  externalSignals: [
    { label: "サイバーセキュリティ経営", value: "事業継続と経営責任", detail: "経産省ガイドラインはサイバーリスクを経営課題として、体制、委託先、継続的な対策を求める。", caveat: "Menlo導入や特定の分離方式を義務づけるものではない。" },
    { label: "AI利用", value: "人とエージェントのブラウザ操作", detail: "生成AIとAIエージェントがWeb・SaaSへ接続するほど、入力データ、権限、操作、外部応答をブラウザ経路で管理する必要が増える。", caveat: "必要な統制は利用形態、データ、業界で異なる。" },
  ],
  role: "日本の販売パートナーへ技術支援、製品説明、デモ、評価、構成助言を行い、Channel Account Managerと共同で案件を作るChannel Sales Engineer。",
  organization: "日本を担当するチャネル技術営業。公式サイトに東京・大手町拠点を掲載するが、出社頻度、担当パートナー数、reporting lineは求人で確認できない。",
  careerValue: "ブラウザセキュリティ、SSE、ゼロトラスト、チャネル提案、技術評価を横断する経験。",
  globalHeadcount: "201〜500人規模（LinkedIn公開レンジ、厳密値ではない）",
  japanPresence: "メンロ・セキュリティ・ジャパン株式会社、東京・大手町拠点、日本語製品・顧客事例、日本求人を確認",
  japanSince: "日本法人の事業開始年は本調査の一次情報で確定できず",
  solutions: [
    { name: "Menlo Browser Security", valueProp: "普段のブラウザを維持しながら、Web・SaaS・社内アプリへのアクセスとデータを制御する。", url: "https://www.menlosecurity.com/ja-jp/product/browser-security", competitors: "SSE、Enterprise Browser、VDI、ブラウザ管理。", differentiation: "既存ブラウザとクラウド分離を組み合わせる。" },
    { name: "Threat Prevention", valueProp: "Web、メール、ファイルの処理を分離し、未知の脅威を端末へ届かせない。", url: "https://www.menlosecurity.com/ja-jp/product/threat-prevention", competitors: "エンドポイント防御、Secure Web Gateway、CDR。", differentiation: "判定後の駆除より実行自体を端末から隔離。" },
    { name: "Menlo Agentic Runtime Security", valueProp: "AIエージェントがブラウザ上で行う外部アクセスとデータ操作を保護する。", url: "https://www.menlosecurity.com/", competitors: "AI Security、SSE、ブラウザDLP。", differentiation: "人とエージェントが共有するブラウザ実行面を制御。" },
  ],
  fitTags: ["Browser Security", "Zero Trust", "Threat Prevention", "Channel", "Sales Engineering", "Japan"],
  comparisons: [
    { arena: "ブラウザ防御", companies: ["Menlo Security", "Island", "既存ブラウザ管理"], why: "操作性、分離、データ制御" },
    { arena: "SSE", companies: ["Menlo Security", "Zscaler", "Netskope"], why: "Web防御、アクセス、統合" },
    { arena: "業務分離", companies: ["Menlo Security", "VDI", "専用端末"], why: "安全、速度、運用負荷" },
  ],
}, {
  slug: "menlo-security", leaderName: "Bill Robbins", leaderLabel: "CEO", leaderUrl: "https://www.menlosecurity.com/about/leadership", localName: "高柳 洋人", localLabel: "Japan Country Manager", localUrl: "https://www.menlosecurity.com/ja-jp/about/press-releases",
  companyId: "menlo-security-company", jobId: "menlo-security-job", customersId: "menlo-security-customers", externalId: "menlo-security-external", financeId: "menlo-security-finance",
  targets: ["CISO・セキュリティ責任者", "ネットワーク・SSE責任者", "情報システム・デジタル職場責任者"],
  heroSummary: "Web・SaaS経由の未知攻撃と機密データ流出を、検知後の対応や遅い隔離環境だけでは防ぎ切れない課題を解く。処理をクラウド側で分離・制御して端末へ脅威を届かせず、普段のブラウザを保ちながら安全性と業務速度を改善する。",
  competitors: "Zscaler・Netskope等のSSE、Island等の専用ブラウザ、エンドポイント防御、VDIとの比較では、分離、既存ブラウザ、データ制御、運用負荷、総コストを見る。",
  feature: "ブラウザ処理をクラウドで実行し、安全な表示だけを返しながら、アクセス、ファイル、入力・出力データを制御する。",
  advantage: "既存ブラウザを置換せず、Isolation Coreを脅威防御、SaaS・私有アプリ接続、データ保護、AIエージェントへ広げる。",
  benefit: "未知のWeb脅威への対応と隔離端末・VDIの待ち時間を減らし、利用者の生産性とセキュリティ運用を改善できる可能性がある。",
  evidence: "東京海上ディーアールは2年間感染ゼロ、日本郵政は全組織のWeb閲覧でマルウェアゼロ、四国電力は約1万3,000人の業務体験改善を公式掲載。",
  marketVerdict: "日本法人、東京拠点、国内大規模事例、販売網、日本求人は揃う。一方、日本売上、顧客数、組織人数、販売パートナー別実績は未公開。",
  marketParagraphs: ["業務とAI利用がブラウザへ集まるほど、入口の攻撃防止と出口のデータ制御を同じ操作面で行う需要が増える。", "今後3〜5年は既存SSEや専用ブラウザとの役割を明確にし、国内パートナーが評価・導入・運用を再現できるかが成長条件になる。"],
  cultureHeadline: "日本の販売パートナーと技術評価・提案の型を作るChannel Sales Engineer。",
  classification: "ハイブリッド", displayLabel: "Japan・東京拠点（出社頻度未公開）", officeDays: "未公開", remoteOnly: "フルリモート可否は未確認", flexibility: "顧客・パートナー訪問と国内出張の頻度は未公開",
  goodFor: ["セキュリティ構成を顧客の業務成果へ翻訳したい人", "販売パートナーの提案力と案件化を同時に作りたい人"], cautionFor: ["単一製品のデモだけに集中したい人", "パートナー調整や共同提案を避けたい人"],
  unresolved: [["担当網", "日本のChannel SE。", "担当パートナー数、tier、地域、既存案件の配分は。"], ["案件所有", "Channel Account Managerと共同提案。", "直販と間接の案件所有、技術支援の優先順位は。"], ["技術評価", "デモ・評価・構成助言を担当。", "評価期間、勝率、環境準備、導入への引継ぎは。"], ["組織", "東京拠点あり。", "Japan人数、SE・CS・Support・Productとの責任境界は。"], ["報酬", "日本の条件は未公開。", "base、variable、equity、案件credit、昇進基準は。"]],
});

menloSecurityIntelligence.sources.push({ id: "gbiz-headcount-menlo-security", label: "gBizINFO メンロ・セキュリティ・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "外部集計", scope: "日本法人・事業所情報・被保険者数", checkedAt });
menloSecurityIntelligence.companyStats.japanHeadcount = { value: "掲載なし", detail: "gBizINFOで法人名を監査したが、事業所情報の被保険者数は掲載なし。日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-menlo-security" };
menloSecurityIntelligence.companyStats.japanOffice = { value: "東京都千代田区大手町1-6-1 大手町ビル4階 FINOLAB", detail: "Menlo Security公式の日本拠点一覧。", sourceId: "menlo-security-company" };

const witnessAIIntelligence = build({
  checkedAt,
  slug: "witnessai",
  name: "WitnessAI",
  jobUrl: "https://jobs.ashbyhq.com/witnessai/2674ec49-4e29-463f-b6a4-07277aac23e6",
  officialUrl: "https://witness.ai/about-us/",
  customersUrl: "https://witness.ai/resources/",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://witness.ai/resources/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents/",
  salesSnapshot: "従業員とAIエージェントが何を入力し、何をしようとしているかを可視化し、シャドーAI、機密情報流出、脱獄、危険な操作をリアルタイムに制御する。日本ではSASE、ファイアウォール、端末、SIEMへ組み込むSenior Sales EngineerをRemoteで募集。",
  growthSummary: "2024年5月に2,750万ドルのSeries A、2026年1月に5,800万ドルの戦略調達を公式発表。直近12カ月でARRが500%超成長し、社員数を5倍にしたと説明する。現在の厳密な社員数と日本売上は非公開。",
  ipoSummary: "非公開企業。累計調達と急成長は確認できるが、日本法人、国内拠点、IPO時期、日本売上は公表していない。",
  milestones: [
    { year: "2023", label: "創業期", detail: "AI利用を企業の境界内で観測・制御するConfidence Layerを構築。", source: "company" },
    { year: "2024.05", label: "Series A", detail: "2,750万ドルを調達し、製品提供を開始。", source: "finance" },
    { year: "2025", label: "顧客・組織拡大", detail: "会社発表では直近12カ月でARR500%超、社員数5倍。", source: "finance" },
    { year: "2026.01", label: "戦略調達", detail: "5,800万ドルを調達し、海外展開とAIエージェント保護を強化。", source: "finance" },
    { year: "2026.07", label: "Japan SE採用", detail: "Japan RemoteのSr. Sales Engineerを公式掲載。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "公式の匿名事例は、従業員の生成AI利用を止めずにプロンプト、応答、機密情報、利用サービスを把握し、業界・職務ごとの方針を適用する課題を示す。" },
    { title: "製品の成り立ちから見る課題", body: "AIサービスごとに個別対策するのではなく、人とAIの間に中立なConfidence Layerを置き、利用の可視化、方針、保護、調査を一体化する設計から開始。現在はAIエージェントの意図と操作へ範囲を広げる。" },
    { title: "外部環境の要求から見る課題", body: "企業の生成AI利用が部門・個人・エージェントへ広がるほど、禁止だけでは利用を把握できず、許可だけでは機密情報と意図しない操作を制御できない。経営、法務、セキュリティ、業務部門が許容範囲と証拠を共有する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "従業員とAIエージェントが複数の生成AIへ接続し、入力データと実行内容が既存のSaaS管理や端末防御から見えにくくなる。" },
    { label: "課題", body: "全面禁止は業務利用を地下化させ、サービス単位の許可は同じAI内の安全な用途と危険な用途を区別しにくい。" },
    { label: "解決策", body: "限定部署で利用サービス、プロンプト、機密情報、方針違反、業務継続、問い合わせを観測し、意図とデータに応じた制御を段階導入する。" },
    { label: "選定の理由", body: "SASE、CASB、DLP、AI gateway、各AIサービスの管理機能との比較で、複数AIを横断した可視化、意図判定、リアルタイム制御、既存構成への統合に優位がある場合に選ぶ。" },
  ],
  openingHook: "従業員とAIエージェントが、どのAIへ何を入力し、何を実行したかを一つの証跡で説明できますか。",
  valueHypothesis: "対象部署で利用AI、シャドー利用、機密情報イベント、方針違反、誤検知、業務継続率、調査時間、問い合わせを導入前後で比較する。",
  objection: "既存のSASE、CASB、DLPと各AIサービスの管理機能で十分。",
  reframe: "AIサービスの遮断ではなく、同じサービス内でも利用者の意図、入力データ、エージェント操作を区別し、複数AIを横断して説明・制御できるかで比較する。",
  facts: [
    { label: "Series A", value: "2,750万ドル", detail: "2024年5月の会社公式発表。", source: "finance" },
    { label: "戦略調達", value: "5,800万ドル", detail: "2026年1月の会社公式発表。", source: "finance" },
    { label: "ARR成長", value: "500%超", detail: "2026年1月時点の直近12カ月。会社発表値。", source: "finance" },
    { label: "社員増加", value: "5倍", detail: "同期間の会社発表。現在の厳密人数は非公開。", source: "finance" },
    { label: "国内法人・拠点", value: "未確認", detail: "日本法人、東京オフィス、国内顧客事例を公式確認できず。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Sr. Sales Engineer - Japanを公式確認。", source: "job" },
  ],
  customers: [
    { company: "世界大手ホテル企業（匿名）", products: "WitnessAI", outcome: "公式事例は100カ国・6,000ホテル規模でAI利用を可視化・保護する展開を説明。定量成果と社名は非公開。", implication: "分散した大規模組織での適用例。" },
    { company: "大手資産運用会社（匿名）", products: "WitnessAI", outcome: "公式事例は規制下での生成AI利用、機密データ保護、利用方針の適用を説明。定量成果は非公開。", implication: "規制産業の業務利用と統制を両立する例。" },
    { company: "世界大手通信企業（匿名）", products: "WitnessAI", outcome: "公式資料で大規模なAI利用の可視化と制御事例を掲載。顧客名・日本適用・定量成果は未公開。", implication: "利用者規模の大きい環境での参照例。" },
  ],
  externalSignals: [
    { label: "AI事業者ガイドライン", value: "リスクに応じた統制と透明性", detail: "経産省・総務省のガイドラインはAI利用の方針、リスク管理、透明性、人間の関与を重視する。", caveat: "WitnessAI導入や特定機能を義務づけるものではない。" },
    { label: "AIエージェント", value: "閲覧から実行へ", detail: "AIが回答だけでなく外部システムを操作するほど、利用者権限、目的、承認、実行証跡、停止条件を一体で管理する必要がある。", caveat: "必要統制はエージェントの権限、接続先、業界で異なる。" },
  ],
  role: "日本の企業へAIセキュリティの技術提案、製品説明、概念実証、構成設計を行い、SASE、ファイアウォール、Windows／Mac、API、SIEMとの統合を設計するSenior Sales Engineer。",
  organization: "Japan Remote表記でHead of Sales Engineeringへreport。公式求人の福利厚生欄にはHybrid、米国向け福利厚生のような記載もあり、日本の雇用主体・実勤務条件は未確認。",
  careerValue: "AIセキュリティ、SASE、SIEM、API統合、概念実証、日本市場の初期構築を横断する経験。",
  globalHeadcount: "51〜200人規模（LinkedIn公開レンジ）",
  japanPresence: "日本法人・国内拠点は未確認。Japan RemoteのSenior Sales Engineer求人を公式確認",
  japanSince: "2026年7月にJapan向け公式求人の掲載を確認。法人・正式launch時期は未確認",
  solutions: [
    { name: "WitnessAI Observe", valueProp: "従業員・システム・エージェントのAI利用、プロンプト、応答、リスクを可視化する。", url: "https://witness.ai/", competitors: "CASB、SASE、AI利用分析、各AI管理画面。", differentiation: "複数AIを横断し、利用内容と意図を同じ証跡へ集める。" },
    { name: "WitnessAI Control / Protect", valueProp: "機密情報、脱獄、危険な用途を方針に応じてリアルタイム制御する。", url: "https://witness.ai/", competitors: "DLP、AI gateway、LLM guardrails。", differentiation: "通信遮断だけでなく利用意図と会話内容を制御条件へ使う。" },
    { name: "AI Agent Security", valueProp: "AIエージェントの活動、権限利用、危険な操作を観測・保護する。", url: "https://witness.ai/resources/witnessai-raises-58-million-for-global-expansion-and-announces-new-ways-to-secure-ai-agents/", competitors: "AI-SPM、権限管理、API security、監査log。", differentiation: "人のAI利用とエージェント実行を同じConfidence Layerで扱う。" },
  ],
  fitTags: ["法人未確認・日本向け採用", "AI Security", "AI Governance", "Sales Engineering", "Remote Japan", "Enterprise"],
  comparisons: [
    { arena: "AI利用統制", companies: ["WitnessAI", "SASE / CASB", "AI管理機能"], why: "可視化、意図、横断性" },
    { arena: "データ保護", companies: ["WitnessAI", "DLP", "AI Gateway"], why: "文脈、誤検知、業務継続" },
    { arena: "AIエージェント", companies: ["WitnessAI", "権限管理", "API Security"], why: "意図、操作、証跡" },
  ],
}, {
  slug: "witnessai", leaderName: "Rick Caccia", leaderLabel: "CEO", leaderUrl: "https://witness.ai/about-us/", localName: "未確認", localLabel: "Japan責任者・雇用主体", localUrl: "https://jobs.ashbyhq.com/witnessai/2674ec49-4e29-463f-b6a4-07277aac23e6",
  companyId: "witnessai-company", jobId: "witnessai-job", customersId: "witnessai-customers", externalId: "witnessai-external", financeId: "witnessai-finance",
  targets: ["CISO・AIセキュリティ責任者", "AI統制・リスク・法務責任者", "ネットワーク・SASE・SIEM責任者"],
  heroSummary: "従業員とAIエージェントの利用が複数サービスへ分散し、誰が何を入力・実行したか説明できない課題を解く。どのAIで何をしようとしているかを可視化し、機密情報流出、脱獄、危険な操作をリアルタイムに制御して安全な業務利用を広げる。",
  competitors: "Zscaler・Netskope等のSASE、DLP、AI gateway、各AIサービスの管理機能との比較では、複数AIの横断性、意図判定、既存構成統合、誤検知、運用を見る。",
  feature: "AIへのプロンプト、応答、利用者・エージェント活動を観測し、意図とデータに応じた方針をリアルタイム適用する。",
  advantage: "特定AIサービスに閉じず、人とAIの間の中立なConfidence LayerとしてSASE、firewall、端末、API、SIEMへ統合する。",
  benefit: "全面禁止で利用を地下化させず、機密情報と危険な操作を抑えながら承認済みAIの利用を拡大できる可能性がある。",
  evidence: "匿名ながら世界大手ホテル、資産運用、通信等の公式事例を掲載。ARR500%超成長と社員数5倍も公式発表するが、日本顧客の定量成果は未確認。",
  marketVerdict: "Japan Remoteの技術営業求人は強い進出シグナル。一方、日本法人、国内拠点、雇用主体、営業担当、国内顧客、契約・support体制は未確認。",
  marketParagraphs: ["生成AIとAIエージェントが企業のデータ・業務へ接続するほど、サービス単位の許可・禁止から、利用意図と操作を継続管理する需要へ移る。", "今後3〜5年は日本の概念実証を本番利用へ変え、国内の雇用・契約・supportと再利用可能な構成を整えられるかが専任組織の成立条件になる。"],
  cultureHeadline: "日本の初期顧客へAIセキュリティの概念実証と構成を作るRemoteの技術営業。",
  classification: "フルリモート", displayLabel: "Japan Remote（条件要確認）", officeDays: "国内オフィス未確認", remoteOnly: "求人はRemote表記", flexibility: "福利厚生欄のHybrid表記、日本の雇用主体・勤務条件との整合は未確認",
  goodFor: ["AI利用統制を既存セキュリティ構成へ落としたい人", "初期市場で概念実証と製品フィードバックを同時に作りたい人"], cautionFor: ["確立済みの日本組織と支援体制を前提にする人", "雇用・報酬条件の曖昧さを受け入れられない人"],
  unresolved: [["雇用主体", "Japan Remote求人を掲載。", "日本法人、雇用主体、契約形態、社会保険、税務は。"], ["GTM体制", "Head of Sales Engineeringへreport。", "Japan AE、既存顧客・案件、Marketing・CS・Supportの配置は。"], ["概念実証", "SASE・firewall・端末・API・SIEMへ統合。", "標準期間、顧客工数、成功基準、本番転換率は。"], ["勤務条件", "RemoteとHybridの両記載。", "実際の勤務地、出社、出張、勤務時間、時差対応は。"], ["報酬", "公式求人は米ドルOTEを掲載。", "日本への適用、通貨、base・variable、equity、福利厚生は。"]],
});

if (witnessAIIntelligence.marketStatus.japanGrowth) {
  witnessAIIntelligence.marketStatus.japanGrowth.headline = "Japan Remote求人を確認、法人・国内拠点は未確認";
  witnessAIIntelligence.marketStatus.japanGrowth.narrative = "Sr. Sales Engineer - Japanは日本市場へ技術提案・概念実証の能力を置く強いシグナル。一方、日本法人、国内拠点、雇用主体、営業担当、国内顧客、契約・support体制を公式確認できず、正式進出の時期は断定しない。";
  witnessAIIntelligence.marketStatus.japanGrowth.entryAssessment = {
    verdict: "進出可能性は中〜高。日本向け技術営業を採用するが、commercial・employment基盤は未確認",
    factSignals: [
      { title: "Japan専任求人", body: "Japan RemoteのSenior Sales Engineerを公式募集し、日本顧客向けの提案、概念実証、構成設計を職務へ置く。", sourceIds: ["witnessai-job"] },
      { title: "成長と投資余力", body: "5,800万ドルの戦略調達、直近12カ月のARR500%超成長、社員数5倍を会社発表。", sourceIds: ["witnessai-finance"] },
      { title: "日本課題との親和", body: "生成AIとAIエージェントの利用拡大は、SASE、DLP、SIEMを越えた意図・操作の統制課題を作る。", sourceIds: ["witnessai-company", "witnessai-external"] },
      { title: "大企業での参照例", body: "匿名ながらホテル、資産運用、通信等の大規模な公式事例を持つ。", sourceIds: ["witnessai-customers"] },
    ],
    hurdles: [
      { title: "日本のcommercial proofがない", body: "国内顧客名、売上、契約、更新、営業担当を公式確認できない。", sourceIds: ["witnessai-customers", "witnessai-job"] },
      { title: "雇用・勤務条件が曖昧", body: "日本法人・雇用主体を確認できず、Remote表記とHybrid福利厚生、米ドルOTEの適用範囲も未確定。", sourceIds: ["witnessai-job"] },
      { title: "local delivery", body: "日本語の製品・security・legal資料、国内時間帯のsupport、導入・運用支援体制が未確認。", sourceIds: ["witnessai-company", "witnessai-job"] },
      { title: "既存防御との競合", body: "SASE、CASB、DLP、AI gateway、各AIの管理機能へ追加する価値を概念実証で定量化する必要がある。", sourceIds: ["witnessai-company", "witnessai-customers"] },
    ],
    readinessConditions: [
      { title: "日本の有償顧客", body: "複数社で概念実証から本番・更新へ進む実績を作る。" },
      { title: "雇用・契約基盤", body: "日本の雇用主体、契約、請求、データ処理、税務を明確にする。" },
      { title: "Japan pod", body: "AE、Sales Engineer、CS・Supportを日本またはAPACから専任配置する。" },
      { title: "日本語・security readiness", body: "製品、概念実証、security・legal、supportを日本語で提供する。" },
      { title: "repeatable architecture", body: "SASE、firewall、端末、SIEMとの国内標準構成を再利用可能にする。" },
    ],
    watchSignals: ["日本法人・雇用主体", "Japan AE・CS求人", "国内顧客事例", "日本語製品・security資料", "国内partner", "公式求人の勤務・報酬条件更新"],
  };
}
witnessAIIntelligence.companyStats.japanHeadcount = { value: "確認できず", detail: "日本法人・国内拠点・公式なJapan在籍人数は確認できない。Japan Remote求人1件のみを確認。", sourceId: "witnessai-job" };
witnessAIIntelligence.companyStats.japanOffice = { value: "法人・拠点未確認", detail: "Japan Remote求人はあるが、日本法人・東京オフィスの公式発表は確認できない。", sourceId: "witnessai-job" };
witnessAIIntelligence.sources.push({ id: "gbiz-headcount-witnessai", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "外部集計", scope: "日本法人・事業所情報・被保険者数", checkedAt });
witnessAIIntelligence.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOで対応する日本法人を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-witnessai" };

export const daily20260828IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  rokt: roktIntelligence,
  "menlo-security": menloSecurityIntelligence,
  witnessai: witnessAIIntelligence,
};
