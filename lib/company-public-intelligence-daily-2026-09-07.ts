import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-07";

function build(profile: Profile, patch: CompactPatchInput, preEntry = false) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.07";
  if (preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本から応募可能な求人は確認、日本法人・国内拠点は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${profile.japanPresence}。求人の勤務地表記を法人設立や恒常的な国内販売・支援体制へ置き換えず、正式進出の条件を継続観測する。`;
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: "日本を勤務地に含む公式求人は強い雇用シグナルだが、国内法人・拠点・顧客支援体制を確認できず、正式進出とは断定しない。",
      factSignals: [
        { title: "日本を勤務地に明記", body: "APAC Product Support Specialistの勤務地にJapanを明記し、リモート勤務と日本向け給与レンジを掲載。", sourceIds: ["ashby-job"] },
        { title: "APACの雇用基盤", body: "会社はアジアを含む24カ国に分散するremote-first組織と公表。", sourceIds: ["ashby-company"] },
      ],
      hurdles: [
        { title: "法人・拠点が未確認", body: "日本法人、国内住所、販売・導入・顧客成功の常設組織を確認できない。", sourceIds: ["ashby-company", "ashby-job"] },
        { title: "国内顧客実績が未確認", body: "日本企業の公式導入事例と国内売上を確認できない。", sourceIds: ["ashby-customers", "ashby-finance"] },
      ],
      readinessConditions: [
        { title: "雇用と契約", body: "日本での雇用主体、福利厚生、労務・税務責任を継続して明示する。" },
        { title: "顧客体制", body: "日本語の販売、導入、支援と国内顧客事例を整える。" },
      ],
      watchSignals: ["日本法人・国内拠点の公表", "日本専任の営業・導入・顧客成功求人", "日本企業の公式導入事例", "日本語の契約・支援窓口"],
    };
  }
  return intelligence;
}

const o9 = build({
  checkedAt, slug: "o9-solutions", name: "o9 Solutions",
  jobUrl: "https://o9solutions.wd5.myworkdayjobs.com/en-US/o9SolutionsExternal/job/Tokyo-Japan/Account-Executive_JR102757",
  officialUrl: "https://o9solutions.com/ja/about", customersUrl: "https://o9solutions.com/ja/resources/o9-digital-brain-case-studies",
  externalUrl: "https://www.mlit.go.jp/report/press/tokatsu01_hh_000755.html", financeUrl: "https://o9solutions.com/ai-info",
  salesSnapshot: "需要、供給、財務、営業の計画が別々の表計算とシステムに分かれ、変化への判断が遅れる課題を解く。企業知識グラフとAIで計画の前提と意思決定をつなぐ。",
  growthSummary: "会社は3,000人超、2024年評価額37億ドル・サブスクリプション売上37%増、2025年130超の本番稼働と28四半期連続ARR成長を公表。2018年設立の日本法人で東京の営業1求人を確認。",
  ipoSummary: "非公開企業。会社は2024年評価額37億ドルを公表するが、IPO時期、日本売上、国内顧客数は未開示。",
  milestones: [
    { year: "2009", label: "創業", detail: "分断した企業計画と意思決定を変える目的でダラスに創業。", source: "company" },
    { year: "2018", label: "日本法人設立", detail: "o9ソリューションズ・ジャパン株式会社を設立。", source: "company" },
    { year: "2024", label: "企業価値", detail: "評価額37億ドル、サブスクリプション売上37%増を会社公表。", source: "finance" },
    { year: "2026", label: "東京採用", detail: "Account Executiveを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "クボタの事例は、需要変動に表計算とプッシュ型計画が追いつかず、在庫と計画時間を同時に改善する必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "創業者は部門ごとの意思決定、統合されないアプリ、遅い計算という三つの問題からDigital Brainを作った。" },
    { title: "外部環境の要求から見る課題", body: "地政学、物流規制、需要変動が重なるほど、企業には部門ごとの計画を財務・供給・販売の影響へ即時に置き換える力が求められる。" },
  ],
  narrative: [
    { label: "背景", body: "需要、供給、財務の前提が頻繁に変わり、部門ごとに別の数字を持つ。" },
    { label: "課題", body: "表計算と個別計画では変更影響の再計算と合意が遅く、欠品、過剰在庫、運転資本の損失が残る。" },
    { label: "解決策", body: "対象事業で計画データと前提をつなぎ、計画時間、在庫、欠品、予測精度、運転資本を比較する。" },
    { label: "選定の理由", body: "SAP、Oracle、Kinaxis、Anaplan、自社表計算と比べ、部門横断モデル、計算速度、AIの説明、導入負荷、成果で優位な場合に選ぶ。" },
  ],
  openingHook: "需要が変わった日に、在庫、供給、売上、利益への影響を何時間で同じ数字にできますか。",
  valueHypothesis: "対象事業で計画作成時間、予測誤差、欠品、過剰在庫、運転資本、意思決定所要時間を導入前後で比較する。",
  objection: "既存ERPと表計算で計画できており、大規模な新基盤は重い。", reframe: "機能数ではなく、前提変更から部門横断の意思決定までの時間、在庫・利益への効果、定着負荷で比べる。",
  facts: [
    { label: "創業", value: "2009年", detail: "米国ダラス発。" }, { label: "世界従業員", value: "3,000人超", detail: "会社公式。" },
    { label: "評価額", value: "37億ドル", detail: "2024年会社公表。", source: "finance" }, { label: "成長", value: "ARR 28四半期連続成長", detail: "2025年実績。", source: "finance" },
    { label: "日本法人", value: "2018年", detail: "東京都港区。", source: "company" }, { label: "日本求人", value: "1件", detail: "Account Executive。", source: "job" },
  ],
  customers: [
    { company: "クボタ", products: "o9 Digital Brain", outcome: "月間2,000時間の業務削減と適正在庫15%向上を会社事例が紹介。", implication: "国内製造業の計画・在庫成果を定量化した参照になる。" },
    { company: "旭化成マイクロデバイス", products: "o9 Digital Brain", outcome: "日本語公式サイトで国内導入企業として掲載。個別成果は未確認。", implication: "半導体の複雑な需給計画への国内参照になる。" },
  ],
  externalSignals: [
    { label: "物流効率化", value: "荷主・物流の改善責任", detail: "改正物流効率化法で荷主を含む効率化対応が進む。", caveat: "o9導入だけで法令対応を保証しない。" },
    { label: "地政学・需要変動", value: "迅速な再計画", detail: "供給制約と需要変化を財務影響まで同じ前提で判断する必要が高まる。", caveat: "効果はデータ品質と意思決定運用で異なる。" },
  ],
  role: "東京のAccount Executiveとして大企業の新規開拓、経営層合意、契約までを担う。",
  organization: "o9ソリューションズ・ジャパン株式会社の東京組織。2026年6月に塩塚英己氏のカントリーマネージャー就任を公式発表。職種別人数は非公開。",
  careerValue: "統合事業計画を在庫、欠品、計画速度、運転資本の経営成果へ翻訳する複雑商談の経験。",
  globalHeadcount: "3,000人超（会社公式）", japanPresence: "o9ソリューションズ・ジャパン株式会社・東京都港区", japanSince: "2018年に日本法人設立",
  solutions: [
    { name: "o9 Digital Brain", valueProp: "需要、供給、財務、営業の計画と意思決定を統合。", url: "https://o9solutions.com/ja/digital-brain", competitors: "SAP、Oracle、Kinaxis、Anaplan、自社表計算。", differentiation: "企業知識グラフで前提と部門間の影響をつなぐ。" },
    { name: "APEX", valueProp: "計画と実行を学習・適応する運用モデルへつなぐ。", url: "https://o9solutions.com/news/o9-apex-ai-planning-model", competitors: "既存S&OP、自社業務改革。", differentiation: "AIだけでなく意思決定の運用モデルを対象にする。" },
    { name: "IBP / S&OP", valueProp: "販売、供給、財務計画を同じシナリオで評価。", url: "https://o9solutions.com/ja/solutions", competitors: "ERP、EPM、専門計画製品。", differentiation: "短期から長期まで一つのモデルで扱う。" },
  ],
  fitTags: ["Supply Chain", "Enterprise Planning", "AI", "Sales", "Tokyo"], comparisons: [
    { arena: "サプライチェーン計画", companies: ["o9 Solutions", "Kinaxis", "SAP"], why: "統合範囲、計算速度、実装、成果" },
    { arena: "統合事業計画", companies: ["o9 Solutions", "Anaplan", "Oracle"], why: "部門横断モデル、AI、運用負荷" },
  ],
}, {
  slug: "o9-solutions", leaderName: "Chakri Gottemukkala", leaderLabel: "共同創業者・CEO", leaderUrl: "https://o9solutions.com/about", localName: "塩塚 英己", localLabel: "Japanカントリーマネージャー", localUrl: "https://o9solutions.com/ja/news/o9-appoints-hideki-shiozuka-as-japan-country-manager",
  companyId: "o9-solutions-company", jobId: "o9-solutions-job", customersId: "o9-solutions-customers", externalId: "o9-solutions-external", financeId: "o9-solutions-finance",
  targets: ["サプライチェーン・S&OP責任者", "経営企画・財務責任者", "製造・物流DX責任者"], heroSummary: "需要、供給、財務、営業の計画が部門ごとの表計算や個別システムに分かれ、前提が変わるたびに意思決定が遅れる課題を解く。企業知識グラフとAIで計画・データ・承認をつなぎ、計画時間、在庫、欠品、運転資本を改善できるようにする。", competitors: "SAP、Oracle、Kinaxis、Anaplan、自社表計算。統合範囲、計算速度、導入負荷、成果で比較する。",
  feature: "企業知識グラフとAIで需要、供給、財務、営業の計画と前提をつなぐ。", advantage: "3,000人超と30超業界の導入知見を持ち、部門別の計画を同じデータ・シナリオで再計算する。", benefit: "計画時間、在庫、欠品、予測精度、運転資本を同じ変革で改善できる可能性がある。", evidence: "クボタ事例で月間2,000時間削減と適正在庫15%向上を会社公表。",
  marketVerdict: "日本法人8年、国内事例、東京営業採用を確認。大型計画変革を日本で定量成果へ落とす実装力が焦点。", marketParagraphs: ["供給制約と物流効率化の要求で、部門横断の再計画需要が続く。", "今後3〜5年はAI機能より、既存データと意思決定を定着させる導入力が成長を分ける。"],
  cultureHeadline: "東京の日本法人から大企業の計画変革を担う組織。", classification: "ハイブリッド", displayLabel: "東京オフィス・ハイブリッド", officeDays: "週2日を会社が案内", remoteOnly: "完全リモートではない", flexibility: "顧客対応と出社を含む", goodFor: ["経営と現場を跨ぐ複雑商談を担いたい人", "SCM・計画を事業成果へ翻訳したい人"], cautionFor: ["短期の単品販売だけを望む人", "導入変革に関わりたくない人"], unresolved: [["達成可能性", "求人1件。", "日本のquota、ACV、cycle、達成率は。"], ["組織", "日本法人あり。", "営業・技術・導入・顧客支援の人数は。"], ["導入", "国内事例あり。", "平均導入期間と顧客側の必要体制は。"], ["競争", "大手計画製品と競合。", "直近の勝因・敗因は。"], ["報酬", "公開レンジなし。", "報酬構成、株式、昇進基準は。"]],
});

const kinaxis = build({
  checkedAt, slug: "kinaxis", name: "Kinaxis", jobUrl: "https://join.kinaxis.com/jobs/33342?lang=en-us", officialUrl: "https://www.kinaxis.com/ja/about", customersUrl: "https://www.kinaxis.com/ja/customers", externalUrl: "https://www.mlit.go.jp/report/press/tokatsu01_hh_000755.html", financeUrl: "https://investors.kinaxis.com/news-releases/news-release-details/2026/Kinaxis-Inc--Reports-Record-Fourth-Quarter-2025-Results/default.aspx", publicInfo: { ticker: "KXS", exchange: "トロント証券取引所", listedSince: "2014年" },
  salesSnapshot: "計画、調達、生産、物流が別々に動き、需要や供給の変化を全体へ反映するまで時間がかかる課題を解く。Maestroで複数階層の計画を同時に更新し、影響を即時に見る。",
  growthSummary: "2025年売上5.480億ドル、SaaS売上3.624億ドル、ARR4.33億ドルを公表。世界2,000人超、100カ国超4万人利用、日本法人被保険者89人、日本企業40社超、東京求人1件を確認。",
  milestones: [{ year: "1984", label: "創業", detail: "オタワの3人のエンジニアから開始。", source: "company" }, { year: "2002", label: "日本法人設立", detail: "キナクシス・ジャパン株式会社を設立。", source: "company" }, { year: "2014", label: "上場", detail: "トロント証券取引所へ上場。", source: "finance" }, { year: "2026", label: "東京採用", detail: "Account Executiveを公式募集。", source: "job" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "SUBARUや日本光電などは複雑な供給網の計画と変更影響を早く共有する必要がある。" }, { title: "製品の成り立ちから見る課題", body: "3人の技術者から始まり、複数の計画を順番ではなく同時に計算するConcurrent Planningを中核にした。" }, { title: "外部環境の要求から見る課題", body: "地政学、物流、人手不足が重なるほど、企業には在庫・供給・納期の変更を部門横断で早く判断する力が求められる。" }],
  narrative: [{ label: "背景", body: "需要と供給が変動し、部門ごとの計画前提がすぐにずれる。" }, { label: "課題", body: "順番に計画を更新すると影響把握が遅れ、欠品、過剰在庫、納期遅延が残る。" }, { label: "解決策", body: "対象製品群で計画を同期し、応答時間、在庫、納期、予測誤差、意思決定時間を比較する。" }, { label: "選定の理由", body: "SAP、Oracle、o9、自社計画と比べ、同時計画、実装期間、パートナー、顧客成果で優位な場合に選ぶ。" }],
  openingHook: "供給が止まった日に、在庫、顧客納期、生産計画への影響を何分で揃えられますか。", valueHypothesis: "対象製品群で計画応答時間、在庫、欠品、納期遵守、予測誤差、手作業を導入前後で比較する。", objection: "既存ERPと計画製品で足りており、移行負荷が大きい。", reframe: "製品機能だけでなく、変化から意思決定までの速度、実装期間、成果、既存基盤との接続で比べる。",
  facts: [{ label: "創業", value: "1984年", detail: "カナダ・オタワ発。" }, { label: "世界従業員", value: "2,000人超", detail: "公式求人。" }, { label: "2025年売上", value: "5.480億ドル", detail: "会社決算。", source: "finance" }, { label: "ARR", value: "4.33億ドル", detail: "2025年末。", source: "finance" }, { label: "日本法人規模", value: "被保険者89人", detail: "gBizINFO。", source: "company" }, { label: "日本求人", value: "1件", detail: "Account Executive。", source: "job" }],
  customers: [{ company: "SUBARU", products: "Maestro / RapidResponse", outcome: "日本および世界の顧客として公式求人と会社情報に掲載。個別の国内定量成果は未確認。", implication: "自動車の複雑な供給網での参照になる。" }, { company: "日本光電", products: "Maestro / RapidResponse", outcome: "日本の顧客として公式求人に掲載。個別成果は未確認。", implication: "医療機器の供給計画への国内参照になる。" }],
  externalSignals: [{ label: "物流効率化", value: "供給網全体の可視化", detail: "荷主と物流事業者に効率化が求められる。", caveat: "Kinaxis導入だけで法令対応を保証しない。" }, { label: "供給変動", value: "迅速な影響判断", detail: "地政学・災害・需要変動を在庫と顧客納期へ即時に反映する必要がある。", caveat: "効果はデータ・計画運用で異なる。" }],
  role: "東京で既存大企業の更新・拡大、新規売上、Professional Services提案、予測管理を担うAccount Executive。", organization: "キナクシス・ジャパン株式会社の東京拠点。小暮正樹氏が日本法人代表兼社長。gBizINFOの事業所被保険者数89人。", careerValue: "製造・供給網の複雑性を在庫、納期、計画速度、売上へ翻訳し、既存拡大を担う経験。", globalHeadcount: "2,000人超（公式求人）", japanPresence: "キナクシス・ジャパン株式会社・東京都港区", japanSince: "2002年に日本法人設立、10年以上の国内事業を公式求人で確認",
  solutions: [{ name: "Maestro", valueProp: "計画、調達、生産、物流を同時に更新し変更影響を可視化。", url: "https://www.kinaxis.com/ja/maestro", competitors: "SAP、Oracle、o9、自社計画。", differentiation: "Concurrent Planningで階層・時間軸を跨ぐ変更を同期する。" }, { name: "Supply Chain Planning", valueProp: "需要、供給、在庫、S&OPを統合。", url: "https://www.kinaxis.com/ja/solutions", competitors: "専門計画製品、ERP。", differentiation: "計画から実行の影響を一つの環境で扱う。" }, { name: "Maestro Agents", valueProp: "計画担当者の分析と判断をAIエージェントで支援。", url: "https://www.kinaxis.com/en/maestro/ai", competitors: "汎用AI、自社分析。", differentiation: "供給網モデル、権限、業務導線の中でAIを使う。" }],
  fitTags: ["Supply Chain", "Manufacturing", "Enterprise", "Sales", "Tokyo"], comparisons: [{ arena: "サプライチェーン計画", companies: ["Kinaxis", "o9 Solutions", "SAP"], why: "同時計画、統合範囲、実装" }, { arena: "供給網オーケストレーション", companies: ["Kinaxis", "Oracle", "自社計画"], why: "判断速度、既存接続、成果" }],
}, {
  slug: "kinaxis", leaderName: "Razat Gaurav", leaderLabel: "CEO", leaderUrl: "https://www.kinaxis.com/en/about/leadership", localName: "小暮 正樹", localLabel: "日本法人代表兼社長", localUrl: "https://www.kinaxis.com/ja/news/press-releases/2025/Kinaxis-Names-Masaki-Kogure-as-President-Head-of-Japan", companyId: "kinaxis-company", jobId: "kinaxis-job", customersId: "kinaxis-customers", externalId: "kinaxis-external", financeId: "kinaxis-finance",
  targets: ["サプライチェーン・S&OP責任者", "製造・調達・物流責任者", "経営企画・IT責任者"], competitors: "SAP、Oracle、o9、自社計画。判断速度、統合範囲、実装、成果で比較する。", feature: "Maestroで計画、調達、生産、物流を同時に更新し、変更影響を即時に可視化する。", advantage: "100カ国超4万人と日本企業40社超の利用を持ち、複雑な供給網の同時計画を磨いている。", benefit: "在庫、欠品、納期、予測誤差、意思決定時間を改善できる可能性がある。", evidence: "SUBARU、日本光電、ホンダ、小野薬品、ブラザーなど日本企業40社超を会社公表。", marketVerdict: "日本法人24年、被保険者89人、国内40社超、東京営業採用を確認。既存基盤を超える意思決定速度と成果が焦点。", marketParagraphs: ["供給制約と物流効率化で、複数部門の計画を同期する需要が続く。", "今後3〜5年はAI機能より、国内顧客の計画運用とパートナー実装を再現できるかが成長を分ける。"], cultureHeadline: "東京の約89人規模の法人から国内大企業を支える組織。", classification: "ハイブリッド", displayLabel: "東京オフィス・柔軟勤務", officeDays: "詳細は未確認", remoteOnly: "完全リモートではない", flexibility: "顧客訪問と柔軟勤務を含む", goodFor: ["製造・SCMの複雑商談を担いたい人", "既存顧客の更新・拡大まで持ちたい人"], cautionFor: ["新規開拓だけを望む人", "供給網の専門性を避けたい人"], unresolved: [["達成可能性", "求人1件。", "更新・拡大と新規のquota配分、達成率は。"], ["担当", "日本企業40社超。", "担当社数、業界、ACV、cycleは。"], ["組織", "被保険者89人。", "営業・技術・導入・支援の人数は。"], ["競争", "計画基盤を提供。", "直近の勝因・敗因と実装期間は。"], ["報酬", "公開レンジなし。", "報酬構成、株式、昇進基準は。"]],
});

const ashby = build({
  checkedAt, slug: "ashby", name: "Ashby", jobUrl: "https://jobs.ashbyhq.com/ashby/033ce772-ed08-4a59-bb52-4ff0eaac9bcd", officialUrl: "https://www.ashbyhq.com/story", customersUrl: "https://www.ashbyhq.com/customers", externalUrl: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", financeUrl: "https://www.ashbyhq.com/blog/culture/ashby-one-2026-keynote",
  salesSnapshot: "採用CRM、ATS、日程調整、分析が別々で、候補者と採用工程の全体像が見えない課題を解く。一つのデータ基盤で採用業務と意思決定をつなぐ。", growthSummary: "2026年に顧客4,400社超、前年比100%超の売上成長を会社公表。24カ国のremote-first組織で、日本を勤務地に含むAPAC Product Support求人1件を確認したが、日本法人・拠点は未確認。", ipoSummary: "非公開企業。2025年に5,000万ドルのSeries Dを調達。IPO時期、日本売上、国内顧客数は未開示。",
  milestones: [{ year: "2018", label: "創業", detail: "採用責任者としての痛みと100人超の採用リーダー調査から創業。", source: "company" }, { year: "2025", label: "Series D", detail: "5,000万ドルを調達。", source: "finance" }, { year: "2026", label: "顧客4,400社超", detail: "前年比100%超の売上成長を会社公表。", source: "finance" }, { year: "2026", label: "日本求人", detail: "日本を勤務地に含むAPAC支援職を公式募集。", source: "job" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "成長企業の採用チームは、候補者情報、日程、面接評価、分析が分かれ、採用の速度と品質を同時に改善しにくい。" }, { title: "製品の成り立ちから見る課題", body: "創業者自身が採用責任者として分析と面接校正を整えた経験から、100人超の採用リーダーを調査して統合基盤を作った。" }, { title: "外部環境の要求から見る課題", body: "AIによる候補者処理が増えるほど、企業には利用目的、アクセス権、評価の公平性、人の責任を同じ採用工程で管理する要求が高まる。" }],
  narrative: [{ label: "背景", body: "採用チャネルと関係者が増え、候補者情報と判断が複数ツールへ分散する。" }, { label: "課題", body: "分断した運用では日程と評価が遅れ、採用源・面接官・工程の改善点を数字で追えない。" }, { label: "解決策", body: "対象職種でCRM、ATS、日程、分析をつなぎ、採用期間、辞退率、面接負荷、採用源、評価の一貫性を比較する。" }, { label: "選定の理由", body: "Greenhouse、Lever、Workday、自社運用と比べ、統合範囲、分析、設定自由度、移行、支援で優位な場合に選ぶ。" }],
  openingHook: "採用が遅れたとき、候補者不足、日程、面接、承認のどこが詰まったかを同じ数字で説明できますか。", valueHypothesis: "対象職種で採用期間、面接設定時間、辞退率、採用源別成果、面接官負荷、データ作業を導入前後で比較する。", objection: "既存ATSと個別ツールで足りており、移行は候補者体験を損なう。", reframe: "機能数ではなく、採用工程全体のデータ一貫性、作業時間、意思決定、移行支援、候補者体験で比べる。",
  facts: [{ label: "創業", value: "2018年", detail: "米国発。" }, { label: "顧客", value: "4,400社超", detail: "2026年会社公表。", source: "finance" }, { label: "売上成長", value: "前年比100%超", detail: "2026年会社公表。", source: "finance" }, { label: "組織", value: "24カ国", detail: "remote-first。", source: "company" }, { label: "日本進出", value: "法人・拠点未確認", detail: "勤務地表記と区別。", source: "company" }, { label: "日本求人", value: "1件", detail: "APAC Product Support。", source: "job" }],
  customers: [{ company: "Ramp", products: "Ashby", outcome: "公式顧客一覧に掲載。個別の日本成果は未確認。", implication: "急成長企業の採用運用を統合する参照になる。" }, { company: "Notion", products: "Ashby", outcome: "公式顧客一覧に掲載。個別成果は未確認。", implication: "世界分散の採用チームへの参照になる。" }],
  externalSignals: [{ label: "個人情報保護", value: "採用データの適正利用", detail: "候補者情報の利用目的、権限、安全管理、委託先管理が必要。", caveat: "Ashby導入だけで法令適合を保証しない。" }, { label: "AI採用", value: "公平性と人の責任", detail: "AIを選考へ使うほど評価根拠と監督を説明できる運用が必要。", caveat: "個別機能の適合性は設定と利用方法で異なる。" }],
  role: "日本を勤務地に含むremoteのAPAC Product Supportとして、顧客問い合わせ、原因調査、採用業務の設定、知見の製品還元を担う。", organization: "24カ国に分散するremote-first組織。日本法人、国内拠点、日本専任の販売・導入・顧客成功組織は未確認。", careerValue: "複雑な採用業務と製品データを、問題解決、顧客教育、再発防止、製品改善へつなぐ経験。", globalHeadcount: "220人（2025年会社公表）", japanPresence: "日本を勤務地に含むAPACリモート求人あり。法人・国内拠点は未確認", japanSince: "正式な日本進出時期は未確認",
  solutions: [{ name: "All-in-one Recruiting", valueProp: "採用CRM、ATS、日程、分析を一つのデータ基盤へ統合。", url: "https://www.ashbyhq.com/", competitors: "Greenhouse、Lever、Workday、自社運用。", differentiation: "採用業務と分析を同じモデルで扱う。" }, { name: "Analytics", valueProp: "採用工程、面接官、採用源を柔軟に分析。", url: "https://www.ashbyhq.com/product/analytics", competitors: "BI、表計算、ATS標準分析。", differentiation: "業務データから追加連携なしで分析する。" }, { name: "Ashby Assistant / Agents", valueProp: "採用データへの質問と定型業務をAIで支援。", url: "https://www.ashbyhq.com/blog/all/mcp-blog", competitors: "汎用AI、個別自動化。", differentiation: "既存の採用データ、権限、業務導線の中で動く。" }],
  fitTags: ["Pre-entry signal", "HRTech", "Recruiting", "Support", "Remote"], comparisons: [{ arena: "採用基盤", companies: ["Ashby", "Greenhouse", "Lever"], why: "統合範囲、分析、設定、移行" }, { arena: "企業人事基盤", companies: ["Ashby", "Workday", "自社運用"], why: "対象規模、採用工程、データ統制" }],
}, {
  slug: "ashby", leaderName: "Benjamin Encz", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.ashbyhq.com/team/leadership", localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://jobs.ashbyhq.com/ashby", companyId: "ashby-company", jobId: "ashby-job", customersId: "ashby-customers", externalId: "ashby-external", financeId: "ashby-finance",
  targets: ["採用責任者", "採用業務・分析責任者", "人事IT・個人情報責任者"], heroSummary: "採用CRM、ATS、日程調整、面接評価、分析が別々のツールへ分かれ、候補者対応と採用改善が遅れる課題を解く。一つのデータ基盤へ採用工程と権限をまとめ、採用期間、日程作業、辞退、面接品質、採用源の判断を改善できるようにする。", competitors: "Greenhouse、Lever、Workday、個別ツール、自社運用。統合範囲、分析、移行、統制、支援で比較する。", feature: "採用CRM、ATS、日程調整、分析を一つのデータ基盤でつなぐ。", advantage: "4,400社超の採用業務データと統合設計を持ち、設定・分析・AIを同じ権限と導線で扱う。", benefit: "採用期間、日程作業、辞退、面接品質、採用源の判断を改善できる可能性がある。", evidence: "Notion、Ramp等を公式顧客として掲載。日本企業の定量事例は未確認。", marketVerdict: "日本から応募可能なAPAC求人は強い雇用シグナル。ただし法人・拠点・国内事例が未確認で、正式進出は探索段階。", marketParagraphs: ["AIと採用データが増えるほど、業務効率と公平性・個人情報管理を同じ基盤で扱う需要が増える。", "今後3〜5年は世界成長だけでなく、日本の雇用主体、販売・導入・支援、国内事例へ投資する判断が正式進出を分ける。"], cultureHeadline: "24カ国に分散するremote-first組織。日本雇用の詳細は要確認。", classification: "フルリモート", displayLabel: "日本を含むAPACリモート", officeDays: "国内オフィスなし", remoteOnly: "公式求人はリモート", flexibility: "週末1日勤務と平日振替休を含む", goodFor: ["文章と技術調査で顧客課題を解きたい人", "採用業務を製品改善へ還元したい人"], cautionFor: ["平日のみの勤務を必須とする人", "国内常設オフィスを必須とする人"], unresolved: [["雇用", "日本を勤務地に明記。", "日本の雇用主体、福利厚生、税務・労務責任は。"], ["勤務", "週末1日勤務。", "シフト、時差、緊急対応、祝日の扱いは。"], ["支援", "APAC担当。", "担当顧客数、問い合わせ量、エスカレーションは。"], ["進出", "法人・拠点未確認。", "日本の販売・導入・支援を置く条件は。"], ["報酬", "日本給与レンジあり。", "株式、昇給、評価、為替調整は。"]],
}, true);

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = `gbiz-headcount-${input.slug}`;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(o9, { slug: "o9-solutions", label: "gBizINFO o9ソリューションズ・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7010001191161", value: "掲載なし", detail: "法人と所在地は特定したが、事業所被保険者数は掲載されていない。0人とは扱わない。", office: "東京都港区", since: "2018年" });
addGbizAudit(kinaxis, { slug: "kinaxis", label: "gBizINFO キナクシス・ジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7010001099272", value: "89人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都港区", since: "2002年" });
addGbizAudit(ashby, { slug: "ashby", label: "gBizINFO Ashby法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定", detail: "Ashbyブランドと結びつく国内法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", office: "日本法人住所なし", since: "日本未進出" });

if (kinaxis.marketStatus.isPublic) {
  kinaxis.marketStatus.capitalMarketRead = {
    asOf: checkedAt,
    metrics: [
      { label: "2025年売上", value: "5.480億ドル", change: "前年比13%増", interpretation: "全社需要は伸びるが、日本単体の寄与は非開示。", sourceId: "kinaxis-finance" },
      { label: "ARR", value: "4.33億ドル", change: "前年比20%増", interpretation: "継続収益の拡大を示すが、売上そのものではない。", sourceId: "kinaxis-finance" },
    ],
    growthDrivers: [{ title: "複雑な供給網の同時計画", evidence: "SaaS売上17%増、日本企業40社超、国内営業採用を確認。", japanMeaning: "日本では製品導入数より、在庫・納期・計画時間の成果と更新・拡大の再現性が重要。", sourceIds: ["kinaxis-company", "kinaxis-customers", "kinaxis-finance", "kinaxis-job"] }],
    risks: [{ title: "大型基盤との競争と実装負荷", disclosedRisk: "SAP、Oracle、o9、自社計画との競争があり、計画データと業務の移行には顧客側の負荷が伴う。", companyResponse: "Concurrent Planning、パートナー網、国内40社超の顧客基盤を持つ。", genbaRead: "世界成長を国内案件の優位へ置き換えず、実装期間、データ準備、定量成果、更新理由を案件ごとに確認する。", sourceIds: ["kinaxis-finance", "kinaxis-company", "kinaxis-customers"] }],
    japanCommitment: {
      verdict: "日本法人、被保険者89人、国内40社超、東京の営業求人を確認できるが、日本売上・更新率・職種別人数は未公開。",
      summary: "2002年からの国内法人と現行採用を投資シグナルとして扱い、世界決算だけから日本の成長率を断定しない。",
      signals: [{ year: "2002", title: "日本法人設立", detail: "キナクシス・ジャパン株式会社を設立。", sourceIds: ["gbiz-headcount-kinaxis"] }, { year: "2026", title: "東京求人", detail: "Account Executiveを公式募集。", sourceIds: ["kinaxis-job"] }],
      unknowns: ["日本売上・ARR", "国内の更新率・拡張率", "職種別人数・採用計画"],
    },
    scenarios: [
      { scenario: "基本", title: "既存顧客の更新・拡大", body: "国内顧客の計画成果を維持し、製品群と対象部門を選択的に広げる。" },
      { scenario: "上振れ", title: "供給変動とAI需要で拡大", body: "同時計画と意思決定支援が定着し、新規大企業と既存拡大が加速する。" },
      { scenario: "下振れ", title: "移行負荷と競争で停滞", body: "既存基盤との差別化や導入成果の説明が難しく、案件が長期化する。" },
    ],
    sourceIds: ["kinaxis-finance", "kinaxis-company", "kinaxis-customers", "kinaxis-job", "kinaxis-external"],
  };
}

export const daily20260907IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "o9-solutions": o9,
  kinaxis,
  ashby,
};
