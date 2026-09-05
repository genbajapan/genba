import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-05";

function build(profile: Profile, patch: CompactPatchInput, preEntry?: {
  verdict: string;
  factSignals: Array<[string, string, string[]]>;
  hurdles: Array<[string, string, string[]]>;
  conditions: Array<[string, string]>;
  watches: string[];
}) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.05";
  if (preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人・国内拠点・日本向け公式求人は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${profile.japanPresence}。シンガポールのAPJ求人を日本から応募できるとは補完せず、正式進出の成立条件を継続観測する。`;
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

const shiftTechnology = build({
  checkedAt, slug: "shift-technology", name: "Shift Technology",
  jobUrl: "https://job-boards.greenhouse.io/shifttechnology/jobs/7651254003",
  officialUrl: "https://www.shift-technology.com/ja/about",
  customersUrl: "https://www.shift-technology.com/en-gb/resources/case-studies/how-ai-solutions-are-transforming-claims-operations-for-a-better-future-in-insurance",
  externalUrl: "https://www.fsa.go.jp/common/law/guide/ins/index.html",
  financeUrl: "https://www.shift-technology.com/en-gb/resources/news/shift-technology-secures-series-d",
  salesSnapshot: "保険金請求、引受、不正調査で人が大量の文書と履歴を見比べる課題を解く。保険業務に特化したAIで、優先案件の抽出から担当者の判断、支払・調査までを支援する。",
  growthSummary: "会社は世界120超の保険会社、30超の国、40億件超の請求・文書を公表。日本法人と複数の国内保険会社事例、東京の営業求人1件を確認したが、日本売上、更新率、職種別人数は非公開。",
  ipoSummary: "非公開企業。2021年に3.2億ドルを調達し10億ドル超の評価額を会社が公表したが、IPO時期と日本単体の業績は未開示。",
  milestones: [
    { year: "2014", label: "創業", detail: "保険会社で不正検知を作った経験からパリで創業。", source: "company" },
    { year: "2018", label: "日本法人設立", detail: "東京にShift Technology Japan株式会社を設立。", source: "company" },
    { year: "2021", label: "Series D", detail: "3.2億ドルを調達し、評価額10億ドル超を公表。", source: "finance" },
    { year: "2026", label: "日本採用", detail: "東京で損害保険向けSales Executiveを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "東京海上日動の会社事例は、請求量が増える中で不正の兆候を早く見つけ、調査担当者の判断を支える必要を示す。" },
    { title: "製品の成り立ちから見る課題", body: "保険会社内で不正検知を作った経験から、汎用分析では拾いにくい保険固有の関係・文書・行動を扱う製品へ広げた。" },
    { title: "外部環境の要求から見る課題", body: "自然災害、請求のデジタル化、生成AIで処理量と手口が変わるほど、保険会社には迅速な支払いと説明可能な不正管理の両立が求められる。" },
  ],
  narrative: [
    { label: "背景", body: "請求と文書が増え、不正手口も変化する一方、調査できる人員と時間には限りがある。" },
    { label: "課題", body: "全件を同じ深さで確認すると支払いが遅れ、単純なルールだけでは誤検知と見逃しが増える。" },
    { label: "解決策", body: "対象商品でAIの優先順位と担当者判断を組み合わせ、不正検知、処理時間、誤検知、支払品質を比較する。" },
    { label: "選定の理由", body: "自社ルール、SAS、FRISS等と比べ、保険固有データ、説明可能性、日本語支援、既存査定業務への定着で優位がある場合に選ぶ。" },
  ],
  openingHook: "保険金請求が急増した日に、調査すべき案件を何時間で絞り、なぜ止めたかを説明できますか。",
  valueHypothesis: "対象商品で不正検知額、誤検知率、調査時間、支払所要日数、担当者あたり処理件数を導入前後で比較する。",
  objection: "自社の査定ルールと汎用AIで十分で、保険専用製品を増やす必要はない。",
  reframe: "モデル精度だけでなく、保険固有データ、説明可能性、担当者の判断導線、既存業務への定着、不正抑止と迅速支払いの両立で比べる。",
  facts: [
    { label: "創業", value: "2014年", detail: "フランス・パリ発。" },
    { label: "顧客", value: "120社超", detail: "世界の保険会社。", source: "finance" },
    { label: "利用国", value: "30カ国超", detail: "会社公式。", source: "finance" },
    { label: "処理規模", value: "40億件超", detail: "請求・文書の会社公表値。", source: "finance" },
    { label: "日本進出", value: "2018年", detail: "日本法人設立。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Sales Executive, B2B Insurance。", source: "job" },
  ],
  customers: [
    { company: "東京海上日動", products: "Claims Fraud Detection", outcome: "AIを用いた保険金不正請求の検知と調査支援を会社事例で紹介。定量成果は未確認。", implication: "国内の保険業務と日本語データへ適用した参照になる。" },
    { company: "あいおいニッセイ同和損保", products: "Fraud Detection", outcome: "保険金不正請求の検知業務での導入を会社資料が説明。", implication: "損害保険会社の査定・調査業務へ組み込む参照になる。" },
  ],
  externalSignals: [
    { label: "顧客保護", value: "迅速支払いと不正管理", detail: "保険会社には適切な保険金支払いと業務管理を両立する責任がある。", caveat: "Shift単独で法令・監督要件への適合を保証しない。" },
    { label: "生成AI", value: "説明可能な判断", detail: "文書処理が自動化されても、調査・支払判断の根拠と人の責任は残る。", caveat: "効果とリスクは商品・データ・運用ごとに検証する。" },
  ],
  role: "日本の損害保険会社で新規開拓、経営層との提案、契約、既存拡大を担うSales Executive。",
  organization: "Shift Technology Japan株式会社の東京拠点。日本の営業・技術・顧客支援人数と報告系統は非公開。",
  careerValue: "保険業務とAIを、不正抑止、支払速度、担当者生産性の事業指標へ翻訳する複雑商談の経験。",
  globalHeadcount: "501〜1,000人（LinkedIn会社ページ）", japanPresence: "Shift Technology Japan株式会社・東京都", japanSince: "2018年に日本法人設立",
  solutions: [
    { name: "Claims Fraud Detection", valueProp: "請求データから不正の兆候を優先順位付けし調査を支援。", url: "https://www.shift-technology.com/ja/solutions/claims-fraud-detection", competitors: "自社ルール、SAS、FRISS。", differentiation: "保険固有のデータと関係性を学習し担当者の判断へつなぐ。" },
    { name: "Subrogation Detection", valueProp: "請求から代位求償の可能性を見つけ回収業務を支援。", url: "https://www.shift-technology.com/solutions/subrogation-detection", competitors: "手作業、自社分析。", differentiation: "請求処理の中で見落としやすい回収機会を抽出。" },
    { name: "Underwriting Risk Detection", valueProp: "引受時の虚偽・リスク兆候を検知。", url: "https://www.shift-technology.com/solutions/underwriting-risk-detection", competitors: "引受ルール、自社AI。", differentiation: "請求だけでなく保険契約の入口へ分析を広げる。" },
  ],
  fitTags: ["Insurance", "AI", "Fraud", "Enterprise", "Sales", "Tokyo"],
  comparisons: [
    { arena: "保険不正検知", companies: ["Shift Technology", "SAS", "FRISS"], why: "保険固有データ、説明可能性、業務定着" },
    { arena: "保険AI", companies: ["Shift Technology", "自社開発", "汎用AI"], why: "精度、運用、監査、総費用" },
  ],
}, {
  slug: "shift-technology", leaderName: "Jeremy Jawish", leaderLabel: "共同創業者・CEO", leaderUrl: "https://www.shift-technology.com/ja/about",
  localName: "未確認", localLabel: "Japan責任者（現任者未確認）", localUrl: "https://www.shift-technology.com/ja/about",
  companyId: "shift-technology-company", jobId: "shift-technology-job", customersId: "shift-technology-customers", externalId: "shift-technology-external", financeId: "shift-technology-finance",
  targets: ["損害保険の保険金・不正対策責任者", "査定・業務改革責任者", "データ・AI責任者"],
  heroSummary: "保険金請求、引受、不正調査で人が大量の文書と履歴を見比べ、支払いと調査が遅れる課題を解く。保険業務に特化したAIで、優先案件の抽出から担当者の判断、支払・調査までを支援し、処理時間と見逃しを減らす。",
  competitors: "自社ルール・自社開発、SAS、FRISS、汎用AI。保険固有データ、説明可能性、業務定着、日本語支援、総費用で比較する。",
  feature: "保険金請求、引受、代位求償のデータをAIで分析し、担当者が確認すべき案件と理由を業務画面へ返す。",
  advantage: "120超の保険会社と40億件超の請求・文書で磨いた保険固有の分析を、調査担当者の判断導線へ組み込む。",
  benefit: "不正の見逃しと誤検知を抑えながら、調査時間と支払所要日数を減らせる可能性がある。",
  evidence: "東京海上日動とあいおいニッセイ同和損保の国内導入を会社事例で確認。個別の定量成果は未確認。",
  marketVerdict: "日本法人8年、国内保険会社事例、東京の営業求人を確認。保険専用AIを説明可能な日常業務へ定着させる力が日本成長の焦点。",
  marketParagraphs: ["自然災害と請求のデジタル化で処理量が増え、不正検知と迅速な支払いを同時に改善する需要が続く。", "今後3〜5年は汎用AIの精度競争だけでなく、日本の保険データ、説明責任、既存査定業務への定着を証明できるかが成長を分ける。"],
  cultureHeadline: "東京の日本法人から保険会社の複雑な業務変革を担う組織。", classification: "出社中心", displayLabel: "東京オフィス勤務", officeDays: "出社日数は未確認", remoteOnly: "完全リモートではない", flexibility: "顧客訪問を含む。詳細は面接確認",
  goodFor: ["保険業務とAIを事業成果へ翻訳したい人", "経営層と現場を跨ぐ複雑商談を担いたい人"], cautionFor: ["保険業界の専門性を避けたい人", "製品説明だけで営業を完結したい人"],
  unresolved: [["達成可能性", "東京で営業1件を採用。", "日本の担当社数、目標、達成率、平均契約額、営業期間は。"], ["日本組織", "2018年に日本法人設立。", "営業、技術、導入、顧客支援の現員と採用計画は。"], ["AI精度", "保険専用AIを提供。", "商品別の検知率、誤検知率、人の判断、再学習、監査方法は。"], ["競争", "国内保険会社事例あり。", "自社開発、SAS、FRISS、汎用AIに対する直近の勝因・敗因は。"], ["報酬・昇進", "給与・昇進分布は非公開。", "報酬構成、株式、評価指標、昇進基準は。"]],
});

const via = build({
  checkedAt, slug: "via", name: "Via",
  jobUrl: "https://job-boards.greenhouse.io/via/jobs/8334684002", officialUrl: "https://ridewithvia.com/", customersUrl: "https://www.itochu.co.jp/ja/news/press/2019/190415.html", externalUrl: "https://www.mlit.go.jp/sogoseisaku/transport/sosei_transport_tk_000041.html", financeUrl: "https://investors.ridewithvia.com/news/news-details/2026/Via-Announces-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx",
  publicInfo: { ticker: "VIA", exchange: "NYSE", listedSince: "2025年" },
  salesSnapshot: "固定路線だけでは拾いにくい地域の移動需要と、車両・運転手・予算の制約を同時に解く。予約、配車、運行、利用者案内、分析をまとめ、自治体・交通事業者が地域ごとの交通を設計・改善できるようにする。",
  growthSummary: "2025年通期の売上4.389億ドル、期末ARR4.76億ドル、顧客821を会社が公表。日本法人と国内事業、東京のExpansion Manager求人を確認したが、日本売上、顧客数、職種別人数は非公開。",
  milestones: [
    { year: "2012", label: "創業", detail: "交通をソフトウェアで動的に組み直す会社としてニューヨークで創業。", source: "company" },
    { year: "2018", label: "日本法人設立", detail: "Via Mobility Japan株式会社を設立。", source: "company" },
    { year: "2025", label: "NYSE上場", detail: "NYSEでVIAとして上場。", source: "finance" },
    { year: "2025", label: "顧客821", detail: "通期決算で顧客数とARR4.76億ドルを公表。", source: "finance" },
    { year: "2026", label: "東京採用", detail: "Expansion Managerを公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "自治体・交通事業者は、低密度地域や時間帯ごとの需要に合わせ、限られた車両と運転手で利用可能な交通を維持する必要がある。" },
    { title: "製品の成り立ちから見る課題", body: "相乗りの配車技術から始まり、予約アプリだけでなく、路線、車両、運転手、運行、分析を交通事業者向けの仕組みへ広げた。" },
    { title: "外部環境の要求から見る課題", body: "人口減少と運転手不足で固定路線の維持が難しくなる一方、自治体には移動手段、公平性、予算、運行品質を継続して説明する責任がある。" },
  ],
  narrative: [
    { label: "背景", body: "地域ごとに需要が偏り、固定路線では空車と乗れない時間帯が同時に起きる。" },
    { label: "課題", body: "運行を人手で調整すると予約、配車、車両、運転手、住民案内が分断し、費用と利用状況を改善しにくい。" },
    { label: "解決策", body: "対象地域で予約・配車・運行・分析をつなぎ、利用者数、待ち時間、乗合率、1乗車あたり費用を比較する。" },
    { label: "選定の理由", body: "既存配車、自社開発、固定路線運用と比べ、需要予測、運行設計、利用者体験、現場導入、継続改善で優位がある場合に選ぶ。" },
  ],
  openingHook: "同じ予算と車両台数で、乗れない住民を減らしながら空車も減らせますか。",
  valueHypothesis: "対象地域で利用者数、待ち時間、乗合率、定時性、1乗車あたり費用、問い合わせを導入前後で比較する。",
  objection: "既存の配車システムと交通事業者の運行ノウハウで十分で、新しい基盤は不要。",
  reframe: "アプリの使いやすさだけでなく、需要予測、路線・配車、運転手運用、住民支援、現場導入、費用・公平性の継続改善で比べる。",
  facts: [
    { label: "創業", value: "2012年", detail: "米国ニューヨーク発。" },
    { label: "2025年売上", value: "4.389億ドル", detail: "会社決算。", source: "finance" },
    { label: "期末ARR", value: "4.76億ドル", detail: "2025年末。", source: "finance" },
    { label: "顧客", value: "821", detail: "2025年末の会社公表値。", source: "finance" },
    { label: "日本法人", value: "2018年", detail: "Via Mobility Japan株式会社。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Expansion Manager。", source: "job" },
  ],
  customers: [
    { company: "伊藤忠商事", products: "Via交通サービス", outcome: "2019年に日本での共同事業とVia Mobility Japanへの出資を公表。個別の運行成果は未確認。", implication: "国内事業の販売・導入パートナーを持つ参照になる。" },
    { company: "日本の自治体・交通事業者", products: "オンデマンド交通", outcome: "国内各地で交通サービスを展開しているが、本調査の一次情報で統一定義の成果値は確定していない。", implication: "地域ごとの運行設計と現場定着を個別に検証する必要がある。" },
  ],
  externalSignals: [
    { label: "地域交通", value: "維持と再設計", detail: "国土交通省は地域公共交通の再構築を政策課題に置く。", caveat: "Viaの採用だけで地域課題が解決するとは限らない。" },
    { label: "運転手不足", value: "車両・人員の制約", detail: "需要に合わせた運行と限られた供給の効率化が投資理由になる。", caveat: "効果は地域、制度、運行主体で異なる。" },
  ],
  role: "自治体・交通事業者と新しい運行地域を設計・立ち上げ、利用・定時性・効率の数値を見ながら改善と拡大を担うExpansion Manager。",
  organization: "Via Mobility Japan株式会社の東京拠点。日本の営業、導入、運行、顧客支援の職種別人数と報告系統は非公開。",
  careerValue: "ソフトウェア、公共政策、現場運行、データ分析を横断し、地域交通を立ち上げて継続改善する経験。",
  globalHeadcount: "501〜1,000人（LinkedIn会社ページ）", japanPresence: "Via Mobility Japan株式会社・東京都", japanSince: "2018年に日本法人設立",
  solutions: [
    { name: "Via Transportation Suite", valueProp: "予約、配車、運行、利用者案内、分析を交通事業者向けに統合。", url: "https://ridewithvia.com/solutions", competitors: "自社開発、既存配車、固定路線運用。", differentiation: "ソフトウェアと運行設計・立ち上げ支援を一体で提供。" },
    { name: "On-demand Transit", valueProp: "需要に応じて乗降地点と経路を動的に組み替える。", url: "https://ridewithvia.com/solutions/microtransit", competitors: "固定路線、タクシー配車。", differentiation: "公共交通の費用・公平性・運行品質を同時に扱う。" },
    { name: "Transit Planning", valueProp: "運行データから路線と供給計画を比較・設計。", url: "https://ridewithvia.com/solutions/planning", competitors: "表計算、自社分析、計画ソフト。", differentiation: "計画から実運行のデータまでをつなぐ。" },
  ],
  fitTags: ["TransitTech", "Mobility", "Public Sector", "Operations", "Data", "Tokyo"],
  comparisons: [
    { arena: "オンデマンド交通", companies: ["Via", "既存配車会社", "交通事業者の自社運用"], why: "需要予測、運行、現場導入、費用" },
    { arena: "交通ソフトウェア", companies: ["Via", "Optibus", "既存計画システム"], why: "計画から運行までの範囲、地域支援" },
  ],
}, {
  slug: "via", leaderName: "Daniel Ramot", leaderLabel: "共同創業者・CEO", leaderUrl: "https://ridewithvia.com/about",
  localName: "未確認", localLabel: "Japan責任者（現任者未確認）", localUrl: "https://www.itochu.co.jp/ja/news/press/2019/190415.html",
  companyId: "via-company", jobId: "via-job", customersId: "via-customers", externalId: "via-external", financeId: "via-finance",
  targets: ["自治体の交通政策・地域交通責任者", "交通事業者の運行・企画責任者", "モビリティ事業責任者"],
  heroSummary: "固定路線だけでは地域の移動需要を拾いきれず、限られた車両・運転手・予算で交通を維持できない課題を解く。予約、配車、運行、利用者案内、分析をまとめ、待ち時間と空車を減らしながら地域交通を継続改善できるようにする。",
  competitors: "既存配車会社、自社開発、固定路線運用、Optibus等。需要予測、運行設計、現場導入、利用者支援、費用・公平性で比較する。",
  feature: "予約、配車、路線・車両・運転手管理、利用者案内、運行分析を公共交通向けに一体化する。",
  advantage: "821顧客で蓄積した交通運行のデータと導入手順を、自治体・交通事業者の現場へ適用する。",
  benefit: "限られた車両と運転手で利用可能な交通を広げ、待ち時間、空車、1乗車あたり費用を改善できる可能性がある。",
  evidence: "伊藤忠商事は2019年にVia Mobility Japanへの出資と日本での共同事業を公表。個別地域の統一定義による成果値は未確認。",
  marketVerdict: "日本法人8年と国内事業、東京のExpansion Manager求人を確認。ソフトウェアだけでなく地域ごとの運行を成立させる実装力が成長の焦点。",
  marketParagraphs: ["人口減少と運転手不足で固定路線の維持が難しくなり、限られた供給を需要へ合わせる投資が続く。", "今後3〜5年は配車精度だけでなく、自治体調達、交通事業者、住民支援、運行現場を跨いで成果を再現できるかが成長を分ける。"],
  cultureHeadline: "東京から自治体・交通事業者と運行を立ち上げる実装型の組織。", classification: "出社中心", displayLabel: "東京勤務・顧客現場対応", officeDays: "出社日数は未確認", remoteOnly: "完全リモートではない", flexibility: "顧客現場への訪問を含む",
  goodFor: ["ソフトウェアと現場運行を一体で改善したい人", "公共交通・地域課題を数値で動かしたい人"], cautionFor: ["純粋なソフトウェア営業だけを望む人", "顧客現場や複数案件の実行を避けたい人"],
  unresolved: [["成果指標", "顧客821を会社が公表。", "日本の利用者数、待ち時間、乗合率、1乗車費用の改善実績は。"], ["日本組織", "2018年に日本法人設立。", "営業、導入、運行、技術、顧客支援の現員と採用計画は。"], ["案件責任", "Expansion Managerを採用。", "同時案件数、地域、出張、売上・運行KPI、引継ぎ条件は。"], ["競争", "自治体・交通事業者向けに展開。", "既存配車、自社運用、国内事業者に対する直近の勝因・敗因は。"], ["報酬・昇進", "給与・昇進分布は非公開。", "報酬構成、株式、評価指標、次の職位は。"]],
});

const temporal = build({
  checkedAt, jobConfirmed: false, slug: "temporal", name: "Temporal",
  jobUrl: "https://temporal.io/careers", officialUrl: "https://temporal.io/about", customersUrl: "https://temporal.io/customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies",
  salesSnapshot: "障害や再試行が起きる長時間の業務処理を、開発者が途中状態を手作業で管理する課題を解く。処理履歴を保存し、決済以外の注文、物流、顧客対応、AIエージェント等を失敗地点から安全に再開する。",
  growthSummary: "会社は2026年に3億ドルを調達し評価額50億ドル、前年比380%超の売上成長、月2,000万の導入、累計9.1兆のCloud Actionsを公表。シンガポールのAPJ求人は確認したが、日本法人、国内拠点、日本向け求人は未確認。",
  ipoSummary: "非公開企業。2026年Series Dで評価額50億ドルを会社が公表したが、IPO時期、日本売上、日本顧客数は未開示。",
  milestones: [
    { year: "2019", label: "創業", detail: "UberでCadenceを作ったMaxim FateevとSamar Abbasが創業。", source: "company" },
    { year: "2019", label: "Series A", detail: "1,875万ドルを調達しTemporalを事業化。", source: "finance" },
    { year: "2026", label: "Series D", detail: "3億ドルを調達し評価額50億ドルを公表。", source: "finance" },
    { year: "2026", label: "APJ求人", detail: "シンガポールでSenior Solutions Architectを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "顧客事例は、複数サービスを跨ぐ重要処理で障害・再試行・待機を各チームが個別実装し、変更と障害対応が遅くなる課題を示す。" },
    { title: "製品の成り立ちから見る課題", body: "Uberの配車・決済等を止めずに進めるため作られたCadenceの考え方を、オープンソースのTemporalとして企業全体へ広げた。" },
    { title: "外部環境の要求から見る課題", body: "AIエージェントが長時間にわたり外部サービスと人の承認を跨ぐほど、途中状態、権限、再試行、監査を説明できる実行基盤が必要になる。" },
  ],
  narrative: [
    { label: "背景", body: "注文、物流、顧客対応、AIエージェントが複数サービスと人の承認を跨いで長時間動く。" },
    { label: "課題", body: "途中で障害が起きると、どこまで成功したか、何を再試行するか、二重実行をどう防ぐかを各チームが個別に作る。" },
    { label: "解決策", body: "対象処理をTemporalへ載せ、失敗復旧時間、二重実行、手作業、変更速度、監査証跡を比較する。" },
    { label: "選定の理由", body: "自社キュー、AWS Step Functions、Conductor等と比べ、長時間処理、開発体験、移植性、運用負荷、Cloud支援で優位がある場合に選ぶ。" },
  ],
  openingHook: "数時間後に失敗する注文やAIエージェントを、二重実行せず最後の成功地点から再開できますか。",
  valueHypothesis: "対象処理で失敗復旧時間、二重実行、手作業、障害件数、変更時間、監査証跡の作成工数を比較する。",
  objection: "クラウドのワークフローやメッセージキューで十分で、新しい実行基盤は不要。",
  reframe: "機能数ではなく、長時間処理の状態管理、再試行、開発者体験、移植性、監査、運用負荷、障害時の支援で比べる。",
  facts: [
    { label: "創業", value: "2019年", detail: "UberのCadence開発者が創業。" },
    { label: "Series D", value: "3億ドル", detail: "2026年会社公式。", source: "finance" },
    { label: "評価額", value: "50億ドル", detail: "2026年会社公式。", source: "finance" },
    { label: "Cloud Actions", value: "累計9.1兆", detail: "2026年会社公表値。", source: "finance" },
    { label: "APJ求人", value: "シンガポール", detail: "Senior Solutions Architect。", source: "job" },
    { label: "日本求人", value: "0件", detail: "日本勤務地・日本専任・国内雇用は未確認。", source: "job" },
  ],
  customers: [
    { company: "Snap", products: "Temporal", outcome: "重要な長時間処理の耐障害性を高める利用事例を会社が紹介。個別の日本成果ではない。", implication: "大規模サービスでの処理復旧と開発速度の参照になる。" },
    { company: "NVIDIA", products: "Temporal Cloud", outcome: "会社顧客一覧で利用企業として掲載。個別成果と日本での利用は未確認。", implication: "AI関連処理での利用可能性は示すが、導入成果の確認が必要。" },
  ],
  externalSignals: [
    { label: "AIエージェント", value: "長時間処理と監査", detail: "外部サービスと人の承認を跨ぐほど、状態、権限、再試行、監査の設計が必要になる。", caveat: "Temporalの採用だけでAIの安全性・適法性を保証しない。" },
    { label: "クラウド集中", value: "移植性と運用責任", detail: "重要処理の実行基盤は障害範囲、復旧、データ所在、切替可能性が選定条件になる。", caveat: "自社運用とCloudの責任分界を確認する。" },
  ],
  role: "日本向け公式求人は0件。シンガポールのSenior Solutions ArchitectはAPJを担当するが、日本勤務地・日本雇用・日本専任とは確認できない。",
  organization: "世界の開発・営業・支援組織とシンガポールのAPJ技術職は確認できるが、日本法人、国内拠点、日本語の営業・顧客支援組織は未確認。",
  careerValue: "分散システムとAIエージェントの重要処理を、障害復旧、開発速度、監査の業務価値へ翻訳する経験を先回りして研究する。",
  globalHeadcount: "201〜500人（LinkedIn会社ページ）", japanPresence: "日本法人・国内拠点・日本向け求人は未確認", japanSince: "正式な日本進出時期は未確認",
  solutions: [
    { name: "Temporal Platform", valueProp: "長時間の業務処理を状態保存、再試行、タイマー、外部イベントで耐障害化。", url: "https://temporal.io/", competitors: "自社キュー、AWS Step Functions、Conductor。", differentiation: "開発者が通常のコードで耐障害処理を記述できる。" },
    { name: "Temporal Cloud", valueProp: "Temporalの実行基盤を管理サービスとして提供。", url: "https://temporal.io/cloud", competitors: "自社運用、クラウド各社のワークフロー。", differentiation: "運用負荷と世界展開を会社側の支援へ移す。" },
    { name: "Temporal Nexus", valueProp: "組織間の処理とサービス境界を耐障害な呼び出しで接続。", url: "https://temporal.io/nexus", competitors: "API連携、自社オーケストレーション。", differentiation: "組織を跨ぐ長時間処理の状態と契約を管理する。" },
  ],
  fitTags: ["Pre-entry", "Workflow", "Developer Platform", "Open Source", "AI", "Infrastructure"],
  comparisons: [
    { arena: "耐障害ワークフロー", companies: ["Temporal", "AWS Step Functions", "Conductor"], why: "開発体験、長時間処理、移植性、運用" },
    { arena: "AI実行基盤", companies: ["Temporal", "自社実装", "クラウド管理サービス"], why: "状態、再試行、権限、監査" },
  ],
}, {
  slug: "temporal", leaderName: "Samar Abbas", leaderLabel: "共同創業者・CEO", leaderUrl: "https://temporal.io/about",
  localName: "未確認", localLabel: "日本・APJ責任者", localUrl: "https://temporal.io/careers",
  companyId: "temporal-company", jobId: "temporal-job", customersId: "temporal-customers", externalId: "temporal-external", financeId: "temporal-finance",
  targets: ["開発基盤・クラウド責任者", "分散システム・SRE責任者", "AIエージェント基盤責任者"],
  heroSummary: "障害や再試行が起きる長時間の業務処理を、開発者が途中状態を手作業で管理する課題を解く。処理履歴を保存し、注文、物流、顧客対応、AIエージェント等を失敗地点から安全に再開する。",
  competitors: "自社キュー・自社実装、AWS Step Functions、Conductor、クラウド各社。長時間処理、開発体験、移植性、監査、運用負荷で比較する。",
  feature: "長時間の処理状態、再試行、タイマー、外部イベントを履歴として保存し、障害後も処理を継続する。",
  advantage: "Uberの大規模運用から生まれたオープンソースと、累計9.1兆のCloud Actionsで耐障害処理の実装・運用を磨く。",
  benefit: "二重実行、復旧の手作業、障害対応時間を減らし、重要な業務処理とAIエージェントを安全に変更できる可能性がある。",
  evidence: "Snap等の公式顧客事例はあるが、日本企業の公式事例、日本法人、国内支援は未確認。",
  marketVerdict: "世界の成長とシンガポールのAPJ求人は強いが、日本法人・拠点・求人・国内事例を確認できず、正式進出の可能性は探索段階。",
  marketParagraphs: ["AIエージェントが長時間にわたり外部サービスと人の承認を跨ぐほど、状態、再試行、権限、監査を持つ実行基盤の需要が増える。", "今後3〜5年は世界の開発者利用だけでなく、日本の契約、データ所在、技術支援、顧客事例へ投資する判断が正式進出を分ける。"],
  cultureHeadline: "世界分散の開発者向け企業。日本での雇用条件と国内組織は未確認。", classification: "ハイブリッド", displayLabel: "世界分散・拠点別の勤務", officeDays: "日本オフィスなし", remoteOnly: "求人ごとに勤務地指定あり", flexibility: "日本の雇用主体・応募可否は未確認",
  goodFor: ["分散システムとAI実行基盤を研究したい人", "オープンソースから企業利用への成長を追いたい人"], cautionFor: ["現在日本向け職務へ応募したい人", "日本法人・国内支援を必須とする人"],
  unresolved: [["日本需要", "世界で急成長を会社が公表。", "日本の有償顧客数、用途、利用量、更新率は。"], ["APJ求人", "シンガポールでAPJ技術職を募集。", "日本の担当範囲、雇用可否、出張、言語、営業・支援体制は。"], ["企業基盤", "重要処理とAIエージェントを支援。", "日本のデータ所在、契約、安全審査、障害連絡をどう支えるか。"], ["競争", "オープンソースとCloudを提供。", "クラウド各社、自社実装、Conductorに対する勝因・敗因は。"], ["進出条件", "日本法人・拠点・求人なし。", "法人、契約、販売、技術支援、顧客成功を置く判断条件は。"]],
}, {
  verdict: "進出可能性は探索段階。世界の成長とシンガポールのAPJ採用はあるが、日本の法人・雇用・販売・支援へ投資する公式シグナルは未確認",
  factSignals: [["世界成長", "2026年に3億ドル調達、前年比380%超の売上成長を会社が公表。", ["temporal-finance"]], ["APJ求人", "シンガポールでSenior Solutions Architectを募集。", ["temporal-job"]], ["日本求人0件", "日本勤務地・日本専任・国内雇用を確認できない。", ["temporal-job"]]],
  hurdles: [["法人・雇用", "日本法人、国内拠点、雇用主体を確認できない。", ["temporal-company"]], ["国内実績", "日本企業の公式事例と国内顧客数を確認できない。", ["temporal-customers"]], ["企業審査", "日本語の契約、請求、データ所在、障害対応、安全資料の体制が未確認。", ["temporal-job"]], ["競争", "クラウド各社、自社実装、Conductor等に勝つ必要がある。", ["temporal-company"]]],
  conditions: [["国内の有償実績", "複数組織で本番利用、更新、拡大を確認。"], ["Japan commercial owner", "日本市場の営業・顧客支援責任者を配置。"], ["契約・請求・雇用", "国内の販売・契約・請求・雇用経路を明確化。"], ["企業支援", "日本語の安全・法務資料、データ要件、障害連絡を提供。"], ["現行Japan求人", "公式採用で日本市場の職務を確認。"]],
  watches: ["Japan・APJ求人", "日本法人・国内拠点", "国内企業の公式事例", "日本語Trust資料", "国内販売パートナー", "日本向け契約・請求"],
});

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = `gbiz-headcount-${input.slug}`;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(shiftTechnology, {
  slug: "shift-technology", label: "gBizINFO Shift Technology Japan株式会社 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "掲載なし",
  detail: "ブランドと国内法人は確認したが、gBizINFOの事業所情報に被保険者数の掲載を確認できない。0人とは扱わず、役員・制度対象外・業務委託等を含む想定従業員数は未算定。", office: "東京都", since: "2018年",
});
addGbizAudit(via, {
  slug: "via", label: "gBizINFO Via Mobility Japan株式会社 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "掲載なし",
  detail: "ブランドと国内法人は確認したが、gBizINFOの事業所情報に被保険者数の掲載を確認できない。0人とは扱わず、役員・制度対象外・業務委託等を含む想定従業員数は未算定。", office: "東京都", since: "2018年",
});
addGbizAudit(temporal, {
  slug: "temporal", label: "gBizINFO Temporal Technologies 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定",
  detail: "会社ブランドと結びつく国内法人を特定できず、事業所情報の被保険者数を0人とは扱わない。", office: "日本法人住所なし", since: "日本未進出",
});

if (via.marketStatus.isPublic) {
  via.marketStatus.capitalMarketRead = {
    asOf: checkedAt,
    metrics: [
      { label: "2025年売上", value: "4.389億ドル", change: "前年比30%増", interpretation: "顧客導入と既存地域の拡大が成長を支える。", sourceId: "via-finance" },
      { label: "期末ARR", value: "4.76億ドル", change: "前年比30%増", interpretation: "継続収益は伸びるが日本寄与は非開示。", sourceId: "via-finance" },
    ],
    growthDrivers: [{ title: "顧客と運行地域の拡大", evidence: "2025年末に821顧客とARR成長を会社が公表。", japanMeaning: "日本では新規導入だけでなく、運行指標の改善と地域拡大を再現できるかが重要。", sourceIds: ["via-finance", "via-job"] }],
    risks: [{ title: "自治体調達と現場実装", disclosedRisk: "公共部門の予算、調達、規制、長い導入期間の影響を受ける。", companyResponse: "ソフトウェアと運行設計・立ち上げ支援を一体で提供する。", genbaRead: "世界の顧客成長を日本案件の容易さへ置き換えず、地域ごとの運行成果と責任分界を確認する。", sourceIds: ["via-finance", "via-company", "via-job"] }],
    japanCommitment: {
      verdict: "日本法人と東京の現行求人は確認できるが、国内売上・顧客数・職種別人数は未公開。",
      summary: "2018年からの国内事業とExpansion Manager採用を投資シグナルとして扱い、世界決算だけから日本の成長を断定しない。",
      signals: [{ year: "2018", title: "日本法人設立", detail: "Via Mobility Japan株式会社を設立。", sourceIds: ["via-company", "via-customers"] }, { year: "2026", title: "東京求人", detail: "Expansion Managerを公式募集。", sourceIds: ["via-job"] }],
      unknowns: ["日本売上・ARR", "国内顧客数・地域別成果", "日本組織の人数・採用計画"],
    },
    scenarios: [
      { scenario: "基本", title: "地域ごとの導入を選択的に拡大", body: "交通事業者・自治体と運行成果を作り、近い条件の地域へ再利用する。" },
      { scenario: "上振れ", title: "運転手不足と再編需要で拡大", body: "導入効果と国内パートナー網が整い、複数地域へ展開する。" },
      { scenario: "下振れ", title: "調達と現場負荷で停滞", body: "長い調達、運行主体との責任分界、住民支援の負荷で拡大が遅れる。" },
    ],
    sourceIds: ["via-finance", "via-company", "via-customers", "via-job"],
  };
}

export const daily20260905IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  "shift-technology": shiftTechnology,
  via,
  temporal,
};
