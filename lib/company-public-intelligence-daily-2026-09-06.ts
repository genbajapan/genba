import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-06";

type PreEntry = {
  verdict: string;
  factSignals: Array<[string, string, string[]]>;
  hurdles: Array<[string, string, string[]]>;
  conditions: Array<[string, string]>;
  watches: string[];
};

function build(profile: Profile, patch: CompactPatchInput, preEntry?: PreEntry) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.06";
  if (preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人・国内拠点・日本向け公式求人は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${profile.japanPresence}。海外の求人を日本から応募できるとは補完せず、日本向けの販売・雇用・支援へ投資する公式シグナルを継続観測する。`;
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: preEntry.verdict,
      factSignals: preEntry.factSignals.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      hurdles: preEntry.hurdles.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      readinessConditions: preEntry.conditions.map(([title, body]) => ({ title, body })),
      watchSignals: preEntry.watches,
    };
  }
  return intelligence;
}

const appier = build({
  checkedAt, slug: "appier", name: "Appier",
  jobUrl: "https://job-boards.greenhouse.io/appier/?offices%5B%5D=23561",
  officialUrl: "https://www.appier.com/ja-jp/about",
  customersUrl: "https://www.appier.com/ja-jp/success-stories",
  externalUrl: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/",
  financeUrl: "https://www.appier.com/ja-jp/press-media/fy25q4-earnings",
  publicInfo: { ticker: "4180", exchange: "東京証券取引所プライム市場", listedSince: "2021年" },
  salesSnapshot: "広告、顧客データ、予測、パーソナライゼーションを別々に運用し、施策と売上の因果が見えない課題を解く。AIで顧客の行動を予測し、獲得から継続までの施策実行へつなぐ。",
  growthSummary: "2025年売上は437億円で前年比28%増。17拠点・1,800社超を会社が公表し、東京では営業・顧客支援4職種を確認した。日本単体の売上、更新率、達成率は非公開。",
  milestones: [
    { year: "2012", label: "創業", detail: "台湾発のAI企業として、アパートの一室から事業を開始。", source: "company" },
    { year: "2014", label: "日本法人設立", detail: "Appier Japan株式会社を設立。", source: "company" },
    { year: "2017", label: "日本提供開始", detail: "AIXONの日本提供を開始。", source: "company" },
    { year: "2021", label: "東証上場", detail: "東京証券取引所へ上場。", source: "finance" },
    { year: "2025", label: "売上拡大", detail: "通期売上437億円、前年比28%増を公表。", source: "finance" },
    { year: "2026", label: "東京採用", detail: "営業・顧客支援4職種を公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "GMOポイントタウンやLIFULLの事例は、分散した顧客データから次の行動を予測し、発見・獲得・再訪の成果を高める必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "AI研究者が『AIをもっとシンプルに』する目的で創業し、広告最適化から顧客データ、予測、施策実行へ対象を広げた。" },
    { title: "外部環境の要求から見る課題", body: "識別子規制と個人情報保護が強まるほど、企業には同意を踏まえた自社データ活用と、施策効果を説明できる測定設計が求められる。" },
  ],
  narrative: [
    { label: "背景", body: "獲得費が上がり、顧客接点とデータが広告、ウェブ、アプリ、会員基盤へ分散している。" },
    { label: "課題", body: "部門ごとの施策では顧客の次の行動と投資効果を捉えにくく、配信量を増やしても売上やLTVにつながらない。" },
    { label: "解決策", body: "対象顧客群でデータ統合、予測、施策実行をつなぎ、CVR、ROAS、継続率、LTVを導入前後で比較する。" },
    { label: "選定の理由", body: "Adobe、Salesforce、Braze、各広告基盤、自社開発と比べ、予測から施策までの速度と成果、データ統制、総費用で優位な場合に選ぶ。" },
  ],
  openingHook: "顧客獲得費が上がる中、誰に次の施策を出すべきかを、担当者は何日で判断できますか。",
  valueHypothesis: "一つの顧客群で予測と施策を連携し、CVR、ROAS、継続率、LTV、作業時間を導入前後で比較する。",
  objection: "既存の広告基盤、CDP、MAで足りており、AI製品を増やす必要はない。",
  reframe: "機能数ではなく、データ準備から予測、施策実行、効果検証までの時間と、既存基盤を含む総運用負荷で比べる。",
  facts: [
    { label: "創業", value: "2012年", detail: "台湾発。", source: "company" },
    { label: "世界展開", value: "17拠点", detail: "会社公式。", source: "company" },
    { label: "顧客", value: "1,800社超", detail: "公式求人の会社説明。", source: "job" },
    { label: "2025年売上", value: "437億円", detail: "前年比28%増。", source: "finance" },
    { label: "日本法人規模", value: "被保険者70人", detail: "gBizINFOの事業所情報。", source: "company" },
    { label: "日本求人", value: "4件", detail: "営業・顧客支援の対象職種。", source: "job" },
  ],
  customers: [
    { company: "GMOポイントタウン", products: "AIQUA", outcome: "AIレコメンデーションで商品発見までの時間を短縮したと会社が紹介。", implication: "国内の会員データと接点へ適用する参照になる。" },
    { company: "LIFULL HOME'S", products: "AIXON", outcome: "DMPを用いたマーケティング施策で330%の効果を会社が公表。", implication: "顧客データの予測活用を事業KPIで示す参照になる。" },
  ],
  externalSignals: [
    { label: "個人情報保護", value: "利用目的と適正な取扱い", detail: "顧客データ活用では取得、利用、提供、安全管理を設計する必要がある。", caveat: "Appierの利用だけで法令適合を保証しない。" },
    { label: "識別子変化", value: "自社データの重要性", detail: "外部識別子への依存が難しくなるほど、同意を踏まえた自社データ活用が投資テーマになる。", caveat: "効果は保有データと施策設計で異なる。" },
  ],
  role: "東京で新規広告営業、既存広告支援、Enterprise Sales、Customer Successの4職種を募集。",
  organization: "Appier Japan株式会社の東京拠点。gBizINFOの事業所被保険者数は70人だが、職種別人数と報告系統は非公開。",
  careerValue: "AI・顧客データ・広告・施策実行を、ROAS、売上、LTVの事業成果へ翻訳する経験。",
  globalHeadcount: "708人（2024年末の有価証券報告書）", japanPresence: "Appier Japan株式会社・東京都港区", japanSince: "2014年に日本法人設立、2017年にAIXONを日本提供",
  solutions: [
    { name: "Ad Cloud", valueProp: "AIで獲得、入札、広告制作を最適化。", url: "https://www.appier.com/ja-jp/products", competitors: "Google、Meta、各DSP、AppsFlyer。", differentiation: "予測と獲得施策を同じ製品群でつなぐ。" },
    { name: "Personalization Cloud", valueProp: "ウェブ、アプリ、メール、LINE等の顧客体験を個別化。", url: "https://www.appier.com/ja-jp/products/aiqua", competitors: "Braze、Salesforce、Adobe。", differentiation: "行動予測を複数接点の施策へ接続する。" },
    { name: "Data Cloud", valueProp: "顧客データを統合し、将来行動を予測。", url: "https://www.appier.com/ja-jp/products/aixon-new-user-acuisition", competitors: "Adobe、Treasure Data、各CDP。", differentiation: "データ統合から予測・施策対象作成までを支援する。" },
  ],
  fitTags: ["AI", "MarTech", "AdTech", "Enterprise", "Sales", "Customer Success", "Tokyo"],
  comparisons: [
    { arena: "AIマーケティング", companies: ["Appier", "Adobe", "Salesforce"], why: "データ統合、予測、施策実行、成果測定" },
    { arena: "顧客エンゲージメント", companies: ["Appier", "Braze", "Treasure Data"], why: "運用速度、対応接点、統制、総費用" },
  ],
}, {
  slug: "appier", leaderName: "チハン・ユー", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.appier.com/ja-jp/about", localName: "未確認", localLabel: "日本事業責任者（現任者未確認）", localUrl: "https://www.appier.com/ja-jp/about",
  companyId: "appier-company", jobId: "appier-job", customersId: "appier-customers", externalId: "appier-external", financeId: "appier-finance",
  targets: ["マーケティング責任者", "デジタル・EC責任者", "顧客データ・CRM責任者"],
  heroSummary: "広告、顧客データ、予測、パーソナライゼーションを別々に運用し、施策と売上の因果が見えない課題を解く。AIで顧客の行動を予測し、獲得から継続までの施策実行へつなぐ。",
  competitors: "Adobe、Salesforce、Braze、Treasure Data、Google・Meta、各DSP、自社開発。成果、運用負荷、統制、総費用で比較する。",
  feature: "顧客データの統合、行動予測、広告・メッセージ配信、生成AIによる制作を一つの製品群で支援する。",
  advantage: "2012年から蓄積したAIと、1,800社超・17拠点の利用基盤を、獲得から継続までの施策へ接続する。",
  benefit: "施策準備と分析の時間を減らし、CVR、ROAS、継続率、LTVを高められる可能性がある。",
  evidence: "GMOポイントタウンとLIFULL HOME'Sの国内事例を確認。個別成果の測定条件は要確認。",
  marketVerdict: "日本法人の被保険者70人、国内事例、営業・顧客支援4求人を確認。AI機能の多さより、顧客データを継続的なROIへ変える運用が焦点。",
  marketParagraphs: ["獲得費上昇と識別子規制で、自社データから次の行動を予測し、施策へ移す需要が続く。", "今後3〜5年は生成AIの機能競争より、データ統制、施策実行、効果測定を一体で定着させられるかが成長を分ける。"],
  cultureHeadline: "東京の70人規模の事業所で、AIマーケティングの営業・顧客支援を広げる組織。", classification: "ハイブリッド", displayLabel: "東京オフィスのハイブリッド勤務", officeDays: "入社後3〜6カ月は原則出社の職種あり", remoteOnly: "完全リモートではない", flexibility: "職種ごとの条件を公式求人で確認",
  goodFor: ["AIと顧客データを事業成果へ翻訳したい人", "獲得から継続まで横断したい人"], cautionFor: ["特定の単機能だけを扱いたい人", "成果測定や広告データを避けたい人"],
  unresolved: [["達成可能性", "東京で営業・顧客支援4職種を採用。", "職種別の目標、達成率、担当社数、案件期間は。"], ["製品構成", "広告、データ、施策実行を提供。", "日本売上の製品別構成とクロスセル率は。"], ["成果測定", "国内事例を確認。", "導入前の基準値、増分効果、測定期間をどう合意するか。"], ["組織", "事業所被保険者70人。", "営業、顧客支援、技術、製品の人数と責任分界は。"], ["報酬", "新規営業は上限なしインセンティブを掲載。", "基本給・変動給、目標、加速係数、立ち上がり保証は。"]],
});

const appian = build({
  checkedAt, slug: "appian", name: "Appian",
  jobUrl: "https://careers.appian.com/jobs", officialUrl: "https://appian.com/jp", customersUrl: "https://appian.com/jp/about/explore/customers/browse-customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/dx/dx.html", financeUrl: "https://investors.appian.com/news-releases/news-release-details/appian-announces-fourth-quarter-and-full-year-2025-financial",
  publicInfo: { ticker: "APPN", exchange: "NASDAQ", listedSince: "2017年" },
  salesSnapshot: "例外処理と古いシステムが絡む重要業務を、部門ごとの手作業や点在したアプリで回す課題を解く。AI、業務プロセス、データ、ローコード開発を一つの基盤でつなぎ、処理時間と手作業を減らして変更速度と統制を改善する。",
  growthSummary: "2025年売上は7.269億ドルで前年比18%増、Cloud subscriptions revenueは19%増。東京でCustomer SuccessのConsultant 2件を確認したが、日本売上と国内顧客数は非公開。",
  milestones: [{ year: "1999", label: "創業", detail: "米国バージニア州で創業。", source: "company" }, { year: "2017", label: "NASDAQ上場", detail: "APPNとして上場。", source: "finance" }, { year: "2021", label: "日本法人設立", detail: "Appian Japan合同会社を設立。", source: "company" }, { year: "2025", label: "売上成長", detail: "売上7.269億ドル、前年比18%増。", source: "finance" }, { year: "2026", label: "東京採用", detail: "ConsultantとSenior Consultantを募集。", source: "job" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "NatWestやTELUSの事例は、分散した業務とデータを同じ流れに載せ、手作業、待ち時間、統制負荷を減らす必要を示す。" }, { title: "製品の成り立ちから見る課題", body: "1999年から業務プロセス管理を中核に、ローコード、データ統合、プロセスマイニング、AIへ広げてきた。" }, { title: "外部環境の要求から見る課題", body: "老朽システム、人手不足、生成AI利用が重なるほど、企業には重要業務を止めずに段階移行し、権限と判断根拠を保つ仕組みが求められる。" }],
  narrative: [{ label: "背景", body: "重要業務が複数システム、メール、表計算、担当者判断を跨ぎ、変更に時間がかかる。" }, { label: "課題", body: "部分自動化だけでは例外処理とデータ分断が残り、処理時間、品質、監査対応を一緒に改善できない。" }, { label: "解決策", body: "対象プロセスを選び、データ接続、業務ルール、AI、人の承認を一つの流れで構築して指標を比較する。" }, { label: "選定の理由", body: "ServiceNow、Pega、Salesforce、Microsoft、自社開発と比べ、複雑業務の変更速度、データ統合、統制、総費用で優位な場合に選ぶ。" }],
  openingHook: "重要な申請や案件を変更するとき、業務、データ、承認、監査のどこで最も時間が止まりますか。", valueHypothesis: "一つの重要プロセスで処理時間、自動化率、手戻り、例外件数、開発期間を導入前後で比較する。", objection: "既存の業務システムとRPAで十分で、新しいローコード基盤は不要。", reframe: "画面や単純作業の自動化ではなく、例外を含む端から端までの業務、データ、権限、変更速度で比べる。",
  facts: [{ label: "創業", value: "1999年", detail: "米国バージニア州発。" }, { label: "上場", value: "NASDAQ: APPN", detail: "2017年上場。", source: "finance" }, { label: "2025年売上", value: "7.269億ドル", detail: "前年比18%増。", source: "finance" }, { label: "Cloud売上", value: "4.374億ドル", detail: "前年比19%増。", source: "finance" }, { label: "日本法人規模", value: "被保険者6人", detail: "gBizINFOの事業所情報。", source: "company" }, { label: "日本求人", value: "2件", detail: "Customer SuccessのConsultant職。", source: "job" }],
  customers: [{ company: "NatWest", products: "Appian Platform", outcome: "ガバナンス業務でデータの46%を自動化し、14の分散プロセスを統合したと会社が公表。", implication: "規制業務を統制と効率の両面で再設計する参照になる。" }, { company: "TELUS", products: "Appian Platform", outcome: "年間約7,200人時間を削減したと会社が公表。", implication: "処理時間を財務・人員の効果へつなぐ参照になる。" }],
  externalSignals: [{ label: "レガシー刷新", value: "段階的な業務変革", detail: "DXでは古いシステムだけでなく業務・組織・データを一体で見直す必要がある。", caveat: "Appian単独で変革成果を保証しない。" }, { label: "生成AI", value: "業務内の統制", detail: "AIを重要業務へ入れるほど、入力データ、権限、人の承認、記録を設計する必要がある。", caveat: "用途ごとのリスク評価が必要。" }],
  role: "東京のCustomer Successで、業務・技術要件から実装、定着、顧客の自走まで担うConsultantとSenior Consultant。", organization: "Appian Japan合同会社の東京拠点。gBizINFOの事業所被保険者数は6人で、パートナーを含む実行体制と報告系統は非公開。", careerValue: "複雑な企業業務を、プロセス、データ、AI、開発、利用定着へ落とす導入リーダーの経験。", globalHeadcount: "1,001〜5,000人（LinkedIn会社ページ）", japanPresence: "Appian Japan合同会社・東京都千代田区", japanSince: "2021年に日本法人設立",
  solutions: [{ name: "Appian Platform", valueProp: "重要業務を設計、自動化、最適化。", url: "https://appian.com/jp/platform/overview", competitors: "Pega、ServiceNow、Salesforce、Microsoft、自社開発。", differentiation: "プロセス、データ、AI、ローコードを同じ業務へまとめる。" }, { name: "Data Fabric", valueProp: "元システムを移し切らずに業務データを統合。", url: "https://appian.com/jp/platform/data-fabric", competitors: "データ仮想化、iPaaS、自社統合。", differentiation: "業務アプリとデータ接続を同じ設計へ載せる。" }, { name: "Process HQ", valueProp: "プロセスの実行状況と改善機会を把握。", url: "https://appian.com/jp/platform/process-hq", competitors: "Celonis、UiPath、BI。", differentiation: "発見した課題を同じ基盤の業務変更へつなぐ。" }],
  fitTags: ["Process Automation", "AI", "Low-code", "Customer Success", "Consulting", "Tokyo"], comparisons: [{ arena: "業務プロセス基盤", companies: ["Appian", "Pega", "ServiceNow"], why: "複雑業務、データ統合、変更速度、統制" }, { arena: "ローコード・自動化", companies: ["Appian", "Microsoft", "Salesforce"], why: "開発生産性、適用範囲、運用、総費用" }],
}, {
  slug: "appian", leaderName: "Matt Calkins", leaderLabel: "創業者・CEO", leaderUrl: "https://appian.com/about/explore/overview", localName: "未確認", localLabel: "日本事業責任者（現任者未確認）", localUrl: "https://appian.com/jp",
  companyId: "appian-company", jobId: "appian-job", customersId: "appian-customers", externalId: "appian-external", financeId: "appian-finance", targets: ["業務改革責任者", "CIO・IT部門", "オペレーション・リスク責任者"], heroSummary: "例外処理と古いシステムが絡む重要業務を、部門ごとの手作業や点在したアプリで回す課題を解く。AI、業務プロセス、データ、ローコード開発を一つの基盤でつなぎ、処理時間と手作業を減らして変更速度と統制を改善する。", competitors: "Pega、ServiceNow、Microsoft、Salesforce、UiPath、自社開発。業務の複雑さ、データ統合、変更速度、統制、総費用で比較する。", feature: "AI、業務プロセス、データファブリック、ローコード開発を一つの基盤で提供する。", advantage: "25年以上の重要業務の自動化経験を、例外処理、データ、AI、人の承認を含む端から端までの設計へ生かす。", benefit: "処理時間、手戻り、手作業、開発期間を減らし、規制や事業変化へ重要業務を早く適応できる可能性がある。", evidence: "NatWestの46%データ自動化、TELUSの年間約7,200人時間削減を会社事例で確認。日本企業の定量事例は未確認。", marketVerdict: "日本法人は小規模だが、東京で導入コンサルタント2職種を採用。販売だけでなく顧客が自走できる実装能力の形成が焦点。", marketParagraphs: ["老朽システム、人手不足、AI活用が重なり、重要業務を止めずに変更する需要が続く。", "今後3〜5年はAI機能の有無より、例外処理、データ、権限、人の判断を実運用へ定着させられるかが成長を分ける。"], cultureHeadline: "東京の小規模法人から、顧客の重要業務を設計・実装するCustomer Success組織。", classification: "出社中心", displayLabel: "東京オフィス勤務", officeDays: "出社日数は未確認", remoteOnly: "完全リモートではない", flexibility: "顧客対応に伴う出張あり", goodFor: ["業務設計と実装を横断したい人", "顧客の自走まで責任を持ちたい人"], cautionFor: ["技術実装を避けたい人", "定型的な進行管理だけを望む人"], unresolved: [["案件構造", "導入の全工程を担う。", "平均期間、同時案件数、役割別工数、パートナー比率は。"], ["顧客成果", "海外定量事例を確認。", "日本案件の処理時間、自動化率、定着率は。"], ["組織", "事業所被保険者6人。", "日本の営業、導入、技術支援とパートナーの責任分界は。"], ["評価", "顧客の自走と育成を求める。", "評価KPI、品質基準、昇進に必要な成果は。"], ["報酬", "日本の数値報酬は非公開。", "基本給、賞与、株式、職位別範囲、出張条件は。"]],
});

const tailscale = build({
  checkedAt, jobConfirmed: false, slug: "tailscale", name: "Tailscale", jobUrl: "https://tailscale.com/careers", officialUrl: "https://tailscale.com/company", customersUrl: "https://tailscale.com/customers", externalUrl: "https://www.nisc.go.jp/policy/group/general/zero-trust.html", financeUrl: "https://tailscale.com/blog/series-c",
  salesSnapshot: "クラウド、端末、開発環境、工場や店舗の機器を、複雑なVPN設定と公開IPに頼って接続する課題を解く。利用者と端末の本人性を基点に暗号化された私設ネットワークを作り、接続設定と障害対応の時間を減らして安全な利用範囲を広げる。", growthSummary: "2025年に1.6億ドルのSeries Cを調達し、毎日数百万人、数千社が利用すると会社が公表。一方、日本法人、国内拠点、日本求人、日本企業の公式事例は未確認。", ipoSummary: "非公開企業。2025年に1.6億ドルを調達したが、売上、ARR、評価額、IPO時期、日本単体業績は非公開。",
  milestones: [{ year: "2019", label: "創業", detail: "ネットワーク設定を意識させない目的でカナダで創業。", source: "company" }, { year: "2020", label: "Series A", detail: "1,200万ドルを調達。", source: "finance" }, { year: "2022", label: "Series B", detail: "1億ドルを調達。", source: "finance" }, { year: "2025", label: "Series C", detail: "1.6億ドルを調達し、製品・開発組織への投資を表明。", source: "finance" }, { year: "2026", label: "日本観測", detail: "日本法人・拠点・求人は未確認。", source: "job" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "Instacart、Cribl、Mercury等の事例は、複数クラウドや遠隔環境への安全な接続を、専用網と手作業の設定なしに広げる必要を示す。" }, { title: "製品の成り立ちから見る課題", body: "Google等で大規模基盤を経験した創業者が、小さな開発や社内ツールまで同じ複雑さを負う不合理から、WireGuard上の接続管理を作った。" }, { title: "外部環境の要求から見る課題", body: "クラウド、遠隔勤務、委託先、AIエージェントが増えるほど、企業にはネットワーク位置でなく利用者・端末・処理単位で接続を制御し、記録する要求が強まる。" }],
  narrative: [{ label: "背景", body: "業務資源が複数クラウド、端末、開発環境、拠点へ分散している。" }, { label: "課題", body: "従来VPNや公開IPでは設定・障害対応が増え、接続範囲を広げるほど権限と監査が複雑になる。" }, { label: "解決策", body: "限定した利用者とシステムで接続を構成し、設定時間、障害件数、公開ポート、接続経路、管理工数を比較する。" }, { label: "選定の理由", body: "従来VPN、Cloudflare、Zscaler、各クラウド接続、自社WireGuardと比べ、導入速度、権限、運用負荷、データ経路、総費用で優位な場合に選ぶ。" }],
  openingHook: "新しい開発者やAIエージェントへ必要な接続だけを渡すまで、何件の申請と設定変更が必要ですか。", valueHypothesis: "一つの開発・運用環境で設定時間、公開ポート、接続障害、管理工数、権限見直し時間を導入前後で比較する。", objection: "既存VPNとクラウド各社の接続機能、自社WireGuardで十分。", reframe: "トンネル性能ではなく、本人性、端末、最小権限、接続の直接性、管理工数、複数環境の一貫性で比べる。",
  facts: [{ label: "創業", value: "2019年", detail: "カナダ・トロント発。" }, { label: "基盤", value: "WireGuard", detail: "端末間の暗号化接続。", source: "company" }, { label: "利用", value: "毎日数百万人", detail: "2025年会社公表。", source: "finance" }, { label: "企業利用", value: "数千社", detail: "2025年会社公表。", source: "finance" }, { label: "Series C", value: "1.6億ドル", detail: "2025年調達。", source: "finance" }, { label: "日本求人", value: "0件", detail: "公式採用で日本勤務地を確認できず。", source: "job" }],
  customers: [{ company: "Instacart", products: "Tailscale", outcome: "複数環境への安全な接続を簡素化した事例を会社が紹介。", implication: "クラウドと開発者の増加に接続運用を追随させる参照になる。" }, { company: "Cribl", products: "Tailscale", outcome: "分散した業務資源への接続に利用する事例を会社が紹介。", implication: "成長企業の運用負荷を抑える参照になる。" }],
  externalSignals: [{ label: "ゼロトラスト", value: "都度検証と最小権限", detail: "境界内を自動的に信頼せず、利用者、端末、資源ごとに接続を制御する考え方が広がる。", caveat: "Tailscale単独で全ての安全対策を代替しない。" }, { label: "AIエージェント", value: "機械主体の接続", detail: "人以外の処理が社内資源へ接続するほど、権限の限定、短期化、記録が重要になる。", caveat: "製品機能と顧客側の運用設計を分けて評価する。" }],
  role: "公式採用には北米中心の職種があるが、日本勤務地・日本市場専任・国内雇用の求人は確認できない。", organization: "完全分散の世界組織。日本法人、国内拠点、日本の販売・技術支援体制は未確認。", careerValue: "ネットワーク、本人性、ゼロトラスト、開発者体験を横断する市場を研究できるが、日本向け職務への応募可能性は未確認。", globalHeadcount: "201〜500人（LinkedIn会社ページ）", japanPresence: "日本法人・国内拠点・日本求人は未確認", japanSince: "日本未進出",
  solutions: [{ name: "Tailscale", valueProp: "利用者と端末を基点に暗号化された私設ネットワークを構成。", url: "https://tailscale.com/how-it-works", competitors: "従来VPN、Cloudflare、Zscaler、各クラウド接続。", differentiation: "WireGuardの端末間接続と本人性・権限管理を簡潔に組み合わせる。" }, { name: "Tailscale SSH", valueProp: "SSH鍵配布を減らし、接続権限を集中管理。", url: "https://tailscale.com/tailscale-ssh", competitors: "踏み台、PAM、SSH証明書。", differentiation: "私設ネットワークの本人性と接続制御を共用する。" }, { name: "Aperture", valueProp: "AIエージェントと利用者の接続・権限を統制。", url: "https://tailscale.com/aperture", competitors: "PAM、AIゲートウェイ、自社実装。", differentiation: "ネットワーク接続とAI主体の権限を同じ基盤で扱う。" }],
  fitTags: ["Networking", "Zero Trust", "WireGuard", "Developer Tools", "Security", "Pre-entry"], comparisons: [{ arena: "ゼロトラスト接続", companies: ["Tailscale", "Cloudflare", "Zscaler"], why: "本人性、接続経路、運用負荷、企業統制" }, { arena: "開発・運用接続", companies: ["Tailscale", "従来VPN", "自社WireGuard"], why: "導入速度、複数環境、権限、総費用" }],
}, {
  slug: "tailscale", leaderName: "Avery Pennarun", leaderLabel: "共同創業者・CEO", leaderUrl: "https://tailscale.com/company", localName: "未確認", localLabel: "日本責任者（未確認）", localUrl: "https://tailscale.com/company", companyId: "tailscale-company", jobId: "tailscale-job", customersId: "tailscale-customers", externalId: "tailscale-external", financeId: "tailscale-finance", targets: ["情報セキュリティ責任者", "基盤・クラウド責任者", "開発者基盤責任者"], heroSummary: "クラウド、端末、開発環境、工場や店舗の機器を、複雑なVPN設定と公開IPに頼って接続する課題を解く。利用者と端末の本人性を基点に暗号化された私設ネットワークを作り、接続設定と障害対応の時間を減らして安全な利用範囲を広げる。", competitors: "従来VPN、Cloudflare、Zscaler、各クラウド接続、自社WireGuard。本人性、最小権限、運用、データ経路、総費用で比較する。", feature: "WireGuardを基盤に、利用者、端末、業務資源を本人性と権限で結ぶ私設ネットワークを提供する。", advantage: "端末間の直接暗号化、既存の本人確認基盤、簡潔な権限設定を組み合わせ、専用網の複雑さを減らす。", benefit: "接続の設定・障害対応時間と公開範囲を減らし、分散環境へ安全なアクセスを早く広げられる可能性がある。", evidence: "Instacart、Cribl等の公式事例と毎日数百万人・数千社の利用を公表。日本企業の公式事例は未確認。", marketVerdict: "世界利用と1.6億ドル調達は強いが、日本法人・拠点・求人・国内事例を確認できず、正式進出の可能性は探索段階。", marketParagraphs: ["複数クラウド、遠隔勤務、AIエージェントで接続主体が増え、本人性を基点に最小権限を与える需要が続く。", "今後3〜5年は世界の開発者利用だけでなく、日本語支援、契約、データ要件、販売・導入体制へ投資する判断が進出を分ける。"], cultureHeadline: "完全分散の技術企業。日本での雇用条件と国内組織は未確認。", classification: "フルリモート", displayLabel: "対象国限定の完全リモート", officeDays: "日本オフィスなし", remoteOnly: "求人ごとに対象国指定あり", flexibility: "日本の雇用主体・応募可否は未確認", goodFor: ["ネットワークと開発者体験を研究したい人", "PLGから企業利用への成長を追いたい人"], cautionFor: ["現在日本向け職務へ応募したい人", "日本法人・国内支援を必須とする人"], unresolved: [["日本需要", "世界で数千社が利用。", "日本の有償顧客数、用途、席数、更新率は。"], ["進出体制", "日本法人・拠点・求人なし。", "販売、契約、請求、技術支援を置く判断条件は。"], ["企業審査", "本人性中心の接続を提供。", "日本語の安全資料、データ経路、障害連絡をどう支えるか。"], ["競争", "従来VPNの複雑さを減らす。", "Cloudflare、Zscaler、各クラウド、自社実装への勝因・敗因は。"], ["AI接続", "AIエージェント向け製品を展開。", "権限、秘密情報、監査、緊急停止を顧客がどう運用するか。"]],
}, {
  verdict: "進出可能性は探索段階。世界の利用拡大と大型調達はあるが、日本の法人・雇用・販売・支援へ投資する公式シグナルは未確認",
  factSignals: [["世界利用", "毎日数百万人、数千社が利用すると会社が公表。", ["tailscale-finance"]], ["資本余力", "2025年に1.6億ドルのSeries Cを調達。", ["tailscale-finance"]], ["日本求人0件", "日本勤務地・日本専任・国内雇用を確認できない。", ["tailscale-job"]]],
  hurdles: [["法人・雇用", "日本法人、国内拠点、雇用主体を確認できない。", ["tailscale-company"]], ["国内実績", "日本企業の公式事例と国内顧客数を確認できない。", ["tailscale-customers"]], ["企業審査", "日本語の契約、安全資料、データ経路、障害対応が未確認。", ["tailscale-job"]], ["競争", "従来VPN、Cloudflare、Zscaler、各クラウド接続に勝つ必要がある。", ["tailscale-company"]]],
  conditions: [["国内の有償実績", "複数組織で本番利用、更新、拡大を確認。"], ["Japan commercial owner", "日本市場の販売・顧客支援責任者を配置。"], ["契約・請求・雇用", "国内の販売、契約、請求、雇用経路を明確化。"], ["企業支援", "日本語の安全・法務資料、データ要件、障害連絡を提供。"], ["現行Japan求人", "公式採用で日本市場の職務を確認。"]],
  watches: ["Japan・APJ求人", "日本法人・国内拠点", "国内企業の公式事例", "日本語Trust資料", "国内販売パートナー", "日本向け契約・請求"],
});

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = `gbiz-headcount-${input.slug}`;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(appier, { slug: "appier", label: "gBizINFO Appier Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3010401113280", value: "70人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都港区", since: "2014年" });
addGbizAudit(appian, { slug: "appian", label: "gBizINFO Appian Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3010003034603", value: "6人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都千代田区", since: "2021年" });
addGbizAudit(tailscale, { slug: "tailscale", label: "gBizINFO Tailscale法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定", detail: "会社ブランドと結びつく国内法人・事業所情報を特定できず、日本法人での想定従業員数を0人とは扱わない。", office: "日本法人住所なし", since: "日本未進出" });

if (appier.marketStatus.isPublic) {
  appier.marketStatus.capitalMarketRead = {
    asOf: checkedAt,
    metrics: [
      { label: "2025年売上", value: "437億円", change: "前年比28%増", interpretation: "顧客基盤と複数製品の利用拡大が成長を支えるが、日本単体の寄与は非開示。", sourceId: "appier-finance" },
      { label: "世界展開", value: "17拠点・1,800社超", change: "2026年確認", interpretation: "地域と顧客の広がりは確認できるが、国内の売上・更新率へ置き換えない。", sourceId: "appier-company" },
    ],
    growthDrivers: [{ title: "顧客データから施策実行までの拡張", evidence: "広告、データ統合、予測、個別化をまたぐ製品群と国内顧客事例を会社が公表。", japanMeaning: "日本では単品導入数より、同意を踏まえたデータ活用をROAS、売上、LTVへ結ぶ運用の再現性が重要。", sourceIds: ["appier-company", "appier-customers", "appier-finance"] }],
    risks: [{ title: "競争と効果測定", disclosedRisk: "広告・顧客データ・施策実行は大手基盤や専門製品との競争が強く、プライバシー規制や識別子変更の影響も受ける。", companyResponse: "AIによる予測と施策実行を同じ製品群でつなぎ、国内事例を公開している。", genbaRead: "売上成長を日本案件の優位へ置き換えず、増分効果、データ統制、製品横断利用、総運用負荷を案件ごとに確認する。", sourceIds: ["appier-finance", "appier-company", "appier-external"] }],
    japanCommitment: {
      verdict: "日本法人、国内事例、東京の営業・顧客支援4求人を確認できるが、日本売上・更新率・職種別人数は未公開。",
      summary: "2014年からの国内法人と現行採用を投資シグナルとして扱い、世界決算だけから日本の成長率を断定しない。",
      signals: [{ year: "2014", title: "日本法人設立", detail: "Appier Japan株式会社を設立。", sourceIds: ["appier-company"] }, { year: "2026", title: "東京求人", detail: "営業・顧客支援4職種を公式募集。", sourceIds: ["appier-job"] }],
      unknowns: ["日本売上・製品別構成", "国内の更新率・拡張率", "職種別人数・採用計画"],
    },
    scenarios: [
      { scenario: "基本", title: "国内顧客の成果を選択的に拡大", body: "広告、顧客データ、個別化を顧客課題に応じて組み合わせ、確認できる成果から横展開する。" },
      { scenario: "上振れ", title: "製品横断利用が加速", body: "自社データ活用と効果測定が定着し、獲得から継続までの複数製品利用が広がる。" },
      { scenario: "下振れ", title: "競争と測定負荷で停滞", body: "既存基盤との差別化や増分効果の説明が難しく、導入・拡張判断が長期化する。" },
    ],
    sourceIds: ["appier-finance", "appier-company", "appier-customers", "appier-job", "appier-external"],
  };
}

if (appian.marketStatus.isPublic) {
  appian.marketStatus.capitalMarketRead = {
    asOf: checkedAt,
    metrics: [
      { label: "2025年売上", value: "7.269億ドル", change: "前年比18%増", interpretation: "全社需要は伸びるが、日本単体の寄与は非開示。", sourceId: "appian-finance" },
      { label: "Cloud subscriptions revenue", value: "4.374億ドル", change: "前年比19%増", interpretation: "継続型クラウド収益が全社成長を支える。", sourceId: "appian-finance" },
    ],
    growthDrivers: [{ title: "重要業務の端から端までの自動化", evidence: "プロセス、データ、AI、ローコードを一つの基盤で提供し、海外顧客の処理時間・自動化成果を公表。", japanMeaning: "日本では製品導入より、例外処理、権限、人の承認を含む業務成果と顧客の自走を再現できるかが重要。", sourceIds: ["appian-company", "appian-customers", "appian-finance"] }],
    risks: [{ title: "大型基盤との競争と導入複雑性", disclosedRisk: "ServiceNow、Pega、Microsoft、Salesforce、自社開発との競争があり、重要業務の移行には顧客側の設計・定着負荷が伴う。", companyResponse: "Customer Successの導入コンサルタントを採用し、業務・技術要件から顧客の自走まで支援する。", genbaRead: "全社成長を国内実装能力へ置き換えず、日本の案件期間、役割分担、パートナー能力、定量成果を確認する。", sourceIds: ["appian-finance", "appian-company", "appian-job"] }],
    japanCommitment: {
      verdict: "日本法人と東京のConsultant 2求人を確認できるが、日本売上・国内顧客数・実行体制は未公開。",
      summary: "2021年からの国内法人とCustomer Success採用を投資シグナルとして扱い、世界決算だけから日本の成長を断定しない。",
      signals: [{ year: "2021", title: "日本法人設立", detail: "Appian Japan合同会社を設立。", sourceIds: ["appian-company"] }, { year: "2026", title: "東京求人", detail: "ConsultantとSenior Consultantを公式募集。", sourceIds: ["appian-job"] }],
      unknowns: ["日本売上・クラウド収益", "国内顧客数・定量成果", "日本組織とパートナーの責任分界"],
    },
    scenarios: [
      { scenario: "基本", title: "重要業務を選んで導入成果を蓄積", body: "複雑な一業務で処理時間、手戻り、自動化率を改善し、近い業務へ広げる。" },
      { scenario: "上振れ", title: "AIと業務刷新需要で拡大", body: "老朽システム刷新とAI統制の需要が重なり、導入人材とパートナー体制が拡充する。" },
      { scenario: "下振れ", title: "実装負荷と競争で停滞", body: "顧客側の業務設計、データ統合、定着に時間がかかり、案件拡大が遅れる。" },
    ],
    sourceIds: ["appian-finance", "appian-company", "appian-customers", "appian-job"],
  };
}

export const daily20260906IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { appier, appian, tailscale };
