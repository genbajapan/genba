import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-20";

const stackadapt = buildDailyCompanyIntelligence({
  slug: "stackadapt", name: "StackAdapt", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/stackadapt/jobs/4317821009", officialUrl: "https://www.stackadapt.com/",
  customersUrl: "https://www.stackadapt.com/case-studies/the7stars-pikmin-4-campaign-nintendo-switch", financeUrl: "https://www.stackadapt.com/news/media-kit",
  problem: "広告媒体、対象者データ、制作、配信、計測が分断し、どの接点が事業成果へつながったかを同じ基準で判断できない課題を解く。",
  origin: "2014年、トロントでIldar Shar、Vitaly Pecherskiy、Yang Hanが、機械学習で広告配信の精度と運用を改善する基盤として始めた。",
  externalNeed: "識別子制限、個人情報保護、動画・テレビ・屋外広告への接点分散で、広告主は対象者の選び方、配信先、説明可能性、重複、事業成果を一体で管理する必要がある。",
  solution: "対象者設計、検索・SNS・動画・テレビ・屋外等の配信、制作、最適化、計測を一つの広告基盤へつなぐ。",
  selection: "広告枠の広さだけでなく、日本で使える媒体・データ、対象者の透明性、複数媒体の重複管理、計測、運用支援、規制対応で比較する。",
  growth: "会社公式は2025年5月時点で従業員1,400人超、顧客4,000社超、対応ブランド2万超、15カ国超を公表。2025年に日本法人の法定表示を開始し、2026年9月に日本市場の営業責任者を募集している。",
  role: "Senior Sales Manager, Japanが広告会社、広告主、事業提携先を新規開拓し、日本の案件創出、受注、予測、販売経路、長期的な市場拡大を担う。",
  organization: "StackAdapt Japan株式会社、Head of OperationsはTakeshi Yamaguchi氏、東京・日本橋。国内の正確な在籍人数と職種構成は未確認。",
  career: "日本市場の営業責任者として、広告会社・広告主・提携先の三方向から販売経路を作り、地域組織と日本の事業計画を接続する経験。",
  globalHeadcount: "1,400人超（2025年5月・会社公式）", japanPresence: "StackAdapt Japan株式会社・東京日本橋。国内の正確な在籍人数は未確認", japanSince: "2025年に日本法人の法定表示を確認",
  customer: { company: "the7stars / Nintendo", outcome: "Pikmin 4のキャンペーンで350万回の表示、クリック率1%、当初目標の約4倍を達成したと会社事例で紹介。" },
  facts: [["創業","2014年","カナダ・トロントで創業。"],["従業員","1,400人超","2025年5月時点の会社公式。"],["顧客","4,000社超","2万超のブランドを支援。"],["日本法人","StackAdapt Japan株式会社","東京・日本橋の法定表示。"],["配信最適化","毎秒4,650億回超","会社公式の処理指標。"],["日本求人","1件","Senior Sales Manager, Japan。"]],
  products: [["StackAdapt Marketing Platform","対象者、制作、複数媒体の配信、最適化、計測を統合する。","https://www.stackadapt.com/"],["Page Context AI","ページ内容を解析し、広告と文脈の関連性を高める。","https://www.stackadapt.com/solutions/page-context-ai"],["Connected TV・動画・屋外広告","テレビ、動画、デジタル屋外広告を他媒体と合わせて運用する。","https://www.stackadapt.com/channels"]],
  competitors: "The Trade Desk、Google Display & Video 360、Amazon DSP、Yahoo!広告、各広告会社の運用基盤",
  leader: ["Vitaly Pecherskiy","共同創業者・CEO","https://www.stackadapt.com/company"], local: ["Takeshi Yamaguchi","Head of Operations","https://www.stackadapt.com/legal-document-centre/commercial-transaction-disclosure"],
  work: ["フルリモート","日本国内のリモート勤務","固定出社日の明記なし","Remote-first","国内出張あり"],
}, checkedAt);
stackadapt.sources.push(
  { id: "stackadapt-japan-legal", label: "StackAdapt Japan KK 法定表示", url: "https://www.stackadapt.com/legal-document-centre/commercial-transaction-disclosure", kind: "法定開示", scope: "日本法人名・責任者・所在地・サービス", checkedAt },
  { id: "stackadapt-about", label: "StackAdapt About", url: "https://www.stackadapt.com/company", kind: "企業公式", scope: "創業・創業者・事業・従業員", checkedAt },
  { id: "stackadapt-media-kit", label: "StackAdapt Media Kit", url: "https://www.stackadapt.com/news/media-kit", kind: "企業公式", scope: "従業員・顧客・ブランド・国数・処理指標", checkedAt },
  { id: "gbiz-headcount-stackadapt", label: "gBizINFO StackAdapt Japan株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010001256002", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
stackadapt.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本法人と所在地は会社の法定表示で確認したが、gBizINFOの事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-stackadapt" };

const acquia = buildDailyCompanyIntelligence({
  slug: "acquia", name: "Acquia", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/acquia/jobs/8000008", officialUrl: "https://www.acquia.com/jp/about-us",
  customersUrl: "https://www.acquia.com/jp/resources/customer-stories/kyocera", financeUrl: "https://www.acquia.com/about-us",
  problem: "国、ブランド、部門ごとにWebとデジタル資産が増え、更新の遅れ、表示の不統一、安全性、アクセシビリティ、成果測定を同時に管理しにくい課題を解く。",
  origin: "Dries Buytaert氏が2000年に学生寮の掲示板として作ったDrupalを、最大規模の企業でも安全に運用できるよう、2007年にAcquiaを共同創業した。",
  externalNeed: "Web、アプリ、AI回答面へ顧客接点が広がるほど、企業は正しいコンテンツを多言語で速く出し、権限、法令、ブランド、機械可読性を一貫して管理する必要がある。",
  solution: "Drupalの企業運用、コンテンツ管理、デジタル資産、個別化、サイト運用を一つのデジタル体験基盤へつなぐ。",
  selection: "CMS機能だけでなく、複数サイト・多言語の統制、開発と運用、クラウド、安全性、提携先の実装力、既存資産の再利用で比較する。",
  growth: "会社公式資料は世界1,200人、顧客4,000社超を掲載。日本語サイト、東京拠点、京セラ等の国内事例があり、日本の新規顧客を中心に提案を支えるLead Solutions Engineerを募集している。",
  role: "Lead Solutions Engineerが営業とSI・販売パートナーを支え、技術調査、設計、実演、検証、競争比較、事業価値の説明を通じて日本の新規顧客獲得を主導する。",
  organization: "アクイアジャパン合同会社。公式サイトは東京・渋谷の勤務拠点、法的ページは東京・永田町の法人所在地を掲載し、用途の異なる住所として分けて扱う。",
  career: "提案技術の個人貢献だけでなく、日本の新規契約の多くを担う提携先を育て、DXPの技術判断を事業価値へ変える経験。",
  globalHeadcount: "1,200人（会社公式資料）", japanPresence: "アクイアジャパン合同会社・東京。勤務拠点と法人所在地は公式ページで表記が異なる", japanSince: "日本法人の登記を確認。進出年は今回確定できず",
  customer: { company: "京セラ", outcome: "電子部品サイトを4言語で刷新し、海外からのアクセスが約1.5倍に増え、製品情報の閲覧と問い合わせ導線を改善したと会社事例で紹介。" },
  facts: [["起点","2000年","Dries Buytaert氏がDrupalを開始。"],["創業","2007年","企業向けDrupal支援としてAcquiaを共同創業。"],["顧客","4,000社超","会社公式資料。"],["従業員","1,200人","会社公式資料。"],["国内事例","京セラ","海外アクセスが約1.5倍。"],["日本求人","1件","Lead Solutions Engineer。"]],
  products: [["Acquia Cloud Platform","Drupalの開発、配備、運用、安全性を企業向けに支える。","https://www.acquia.com/jp/products/acquia-cloud-platform"],["Acquia DAM","画像、動画、ブランド資産を整理し、制作と配布へつなぐ。","https://www.acquia.com/jp/products/dam"],["Acquia Source","AI回答で発見されやすい構造化コンテンツとAPI中心の運用を支える。","https://www.acquia.com/jp/products/source"]],
  competitors: "Adobe Experience Manager、Sitecore、Contentful、Optimizely、WordPress VIP、各社の内製CMS",
  leader: ["Steve Reny","President and Chief Executive Officer","https://www.acquia.com/about-us/leadership"], local: ["未確認","日本事業責任者","https://www.acquia.com/jp/about-us"],
  work: ["フルリモート","Remote - Japan","固定出社日の明記なし","日本国内リモート","国内出張あり"],
}, checkedAt);
acquia.sources.push(
  { id: "acquia-about", label: "Acquia About", url: "https://www.acquia.com/about-us", kind: "企業公式", scope: "Drupalの起点・創業・会社沿革", checkedAt },
  { id: "acquia-japan-contact", label: "Acquia Japan Contact", url: "https://www.acquia.com/contact", kind: "企業公式", scope: "東京の勤務拠点", checkedAt },
  { id: "acquia-japan-entity", label: "Acquia Subprocessors", url: "https://www.acquia.com/about-us/legal/subprocessors", kind: "法定開示", scope: "Acquia Japan GK・法人所在地", checkedAt },
  { id: "gbiz-headcount-acquia", label: "gBizINFO アクイアジャパン合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=1010003028508", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
acquia.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本法人と東京拠点は公式確認したが、gBizINFOの事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-acquia" };

const sentry = buildDailyCompanyIntelligence({
  slug: "sentry", name: "Sentry", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/sentry/c8bb97ce-c9df-4208-8f0a-03ce0e52cc23", officialUrl: "https://sentry.io/about/",
  customersUrl: "https://sentry.io/customers/", financeUrl: "https://sentry.io/careers/",
  problem: "障害情報がエラー、ログ、性能、利用画面へ分散し、開発者が原因と影響範囲を特定して修正するまでに時間がかかる課題を解く。",
  origin: "2008年、David Cramer氏が既存の例外通知に不満を持ち、開発者が問題を再現して修正できるオープンソースのエラー追跡として始めた。",
  externalNeed: "AIがコード量と変更頻度を増やすほど、企業は障害の検知だけでなく、利用者への影響、原因、修正、再発防止を同じ開発導線で短時間に回す必要がある。",
  solution: "エラー、性能、トレース、ログ、利用画面、AI会話を関連付け、開発者が影響の大きい問題から原因と修正候補へ進めるようにする。",
  selection: "監視項目の多さではなく、コード文脈、利用者影響、既存開発道具との接続、データ所在、費用、AI提案の検証可能性で比較する。",
  growth: "2026年の現行求人は20万超の組織が利用すると説明。SydneyでAPAC初期の技術支援体制を作るSenior Solutions Engineer求人を確認したが、日本法人・国内拠点・日本求人は確認できない。",
  role: "SydneyのSenior Solutions EngineerがAPACの顧客に導入、設計、利用定着を支援する。日本専任の営業、技術支援、顧客成功の現行求人は0件。",
  organization: "APACではSydneyの顧客基盤と技術支援採用を確認。日本法人、国内拠点、日本常駐の専任組織は未確認。",
  career: "正式進出後は、開発者向けオープンソース製品を企業の信頼性と開発生産性へ翻訳し、日本の初期顧客と支援体制を作る経験になり得る。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点・日本求人は未確認。SydneyのAPAC技術支援求人を確認", japanSince: "未進出",
  customer: { company: "Canva", outcome: "APACの既存顧客としてSydney求人で明示され、地域の初期技術支援基盤の一社として紹介。個別の定量成果は同求人で未公開。" },
  facts: [["開始","2008年","オープンソースのエラー追跡として開始。"],["利用組織","20万超","2026年の会社公式求人。"],["製品","エラーからAIデバッグまで","ログ、トレース、利用画面を統合。"],["APAC採用","Sydney","地域初期のSenior Solutions Engineer。"],["日本法人","未確認","国内法人・拠点を確認できず。"],["日本求人","0件","公式Ashbyで確認。"]],
  products: [["Sentry","エラー、性能、トレース、ログ、利用画面を開発者の修正作業へつなぐ。","https://sentry.io/"],["Seer","問題の原因分析と修正候補をAIで支援する。","https://sentry.io/product/seer/"],["Application Metrics","事業・アプリケーション指標をトレース、ログ、エラーへ接続する。","https://sentry.io/changelog/application-metrics-are-now-ga/"]],
  competitors: "Datadog、New Relic、Dynatrace、Grafana、Elastic、各クラウドの監視サービスと内製",
  leader: ["Milin Desai","Chief Executive Officer","https://sentry.io/about/"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/sentry"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Sydney求人の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。世界20万超の利用組織とAPAC顧客、Sydneyの技術支援投資はあるが、日本専任の販売・支援・法人基盤は未確認。",
    signal: "SydneyでAPACの初期Senior Solutions Engineerを募集し、Canva、Coles、Air New Zealand、Leonardo.Aiを地域顧客として明示。",
    hurdle: "日本法人、国内拠点、日本専任求人、日本語の販売・契約・技術支援、国内の公開導入成果を確認できない。",
    conditions: ["Sydneyから日本企業の有償需要と更新・拡大を再現する。", "日本語の技術支援、契約、請求、情報安全審査を安定して提供する。", "国内の案件量が日本常駐の営業・技術支援の固定費を支える。", "日本企業の公開事例と販売・技術提携先を作る。", "データ所在と国内規制への説明を整える。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語製品・契約・支援", "国内顧客事例", "APAC求人のJapan担当表記", "日本向けデータ所在・提携先"],
  },
}, checkedAt);
sentry.sources.push(
  { id: "sentry-apac-job", label: "Sentry Senior Solutions Engineer, Sydney", url: "https://jobs.ashbyhq.com/sentry/c8bb97ce-c9df-4208-8f0a-03ce0e52cc23", kind: "企業公式", scope: "APAC技術支援・地域顧客・現地立ち上げ", checkedAt },
  { id: "sentry-trust", label: "Sentry Trust Center", url: "https://trust.sentry.io/", kind: "企業公式", scope: "安全性・認証・データ保護", checkedAt },
  { id: "gbiz-headcount-sentry", label: "gBizINFO Sentry法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
sentry.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式とgBizINFOで対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-sentry" };
if (sentry.marketStatus.japanGrowth?.entryAssessment) {
  sentry.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "APAC技術支援採用", body: "Sydneyで地域初期のSenior Solutions Engineerを募集。", sourceIds: ["sentry-apac-job"] },
    { title: "地域顧客", body: "Canva、Coles、Air New Zealand、Leonardo.AiをAPAC顧客として求人で明示。", sourceIds: ["sentry-apac-job"] },
    { title: "世界利用", body: "2026年の公式求人は20万超の組織が利用すると説明。", sourceIds: ["sentry-job"] },
    { title: "日本求人0件", body: "日本専任・日本勤務地の現行求人を公式Ashbyで確認できない。", sourceIds: ["sentry-job"] },
  ];
  sentry.marketStatus.japanGrowth.entryAssessment.hurdles = [
    { title: "法人・雇用", body: "日本法人、国内拠点、雇用主体を確認できない。", sourceIds: ["sentry-company", "gbiz-headcount-sentry"] },
    { title: "日本語支援", body: "日本語の販売、契約、請求、導入・障害支援の体制が未確認。", sourceIds: ["sentry-job"] },
    { title: "国内実績", body: "日本企業の公開導入成果と国内顧客数を確認できない。", sourceIds: ["sentry-customers"] },
    { title: "競争", body: "大手監視基盤、クラウド標準、オープンソースと既存契約・運用で競合する。", sourceIds: ["sentry-company"] },
  ];
}

export function applyDaily20260920Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const walkme = intelligenceBySlug.walkme;
  if (!walkme) return;
  walkme.researchedAt = checkedAt;
  walkme.marketStatus.milestones = [
    ...walkme.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes("Customer Success Manager求人終了")),
    { year: "2026.09.20", label: "Customer Success Manager求人終了", detail: "公式求人URLが404となったため掲載から除外。これだけで採用停止や日本事業縮小を意味しない。", sourceId: "walkme-job" },
  ];
}

export const daily20260920IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { stackadapt, acquia, sentry };
