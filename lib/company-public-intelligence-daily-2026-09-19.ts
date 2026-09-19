import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-19";

const edb = buildDailyCompanyIntelligence({
  slug: "edb", name: "EDB", jobConfirmed: true,
  jobUrl: "https://www.enterprisedb.com/careers/job-openings?gh_jid=7812564003", officialUrl: "https://www.enterprisedb.com/jp",
  customersUrl: "https://www.enterprisedb.com/resources/customer-story/ntt-east", financeUrl: "https://www.enterprisedb.com/jp/careers",
  problem: "基幹データベースが特定ベンダー、費用、専門人材、クラウドに強く依存し、可用性を保ちながら刷新し、機密データを自社の統制下でAIへ使いにくい課題を解く。",
  origin: "2004年にEnterpriseDBとして創業し、オープンソースのPostgreSQLを企業の基幹業務で使えるよう、互換性、可用性、安全性、支援を加えてきた。",
  externalNeed: "生成AIと規制対応でデータの利用範囲が広がるほど、企業は性能だけでなく、保存場所、権限、費用、障害時の継続、既存資産からの移行を自ら制御する必要がある。",
  solution: "EDB Postgres AIで取引、分析、ベクトル検索、AIのデータを共通のPostgres基盤へまとめ、オンプレミス、クラウド、複数環境で運用できるようにする。",
  selection: "データベースの単価だけでなく、既存SQL・手順の移行、停止時間、可用性、運用人材、データ主権、AI利用まで含めた総移行リスクで比較する。",
  growth: "日本語公式サイトは世界1,700社超の顧客とPostgreSQLへの20年以上の貢献を掲載。2026年9月19日時点で東京勤務の営業関連求人3件を公式Greenhouseで確認した。",
  role: "Director Sales、Senior Account Executive、Sales Development Repが、日本の直販、案件創出、販売パートナー、データベース刷新とAI基盤の提案を担う。",
  organization: "日本語公式サイトとEDB Japan名義の情報発信、東京勤務の現行求人を確認。国内の法人名、責任者、正確な在籍人数は今回の公式調査で確定できない。",
  career: "基幹データの移行、可用性、規制、費用、AI準備度を一つの事業判断へまとめ、直販と販売パートナーの双方で日本市場を伸ばす経験。",
  globalHeadcount: "1,001〜5,000人規模の公開集計（現員は変動あり）", japanPresence: "EDB Japan・東京。国内の正確な在籍人数は未確認", japanSince: "日本語公式情報と国内顧客事例を確認。進出年は未確認",
  customer: { company: "NTT東日本", outcome: "高い機密性が必要な通信運用で、プライベート環境の生成AIエージェントを支えるデータ基盤としてEDB Postgres AIを検証・活用していると会社事例で紹介。" },
  facts: [["創業","2004年","企業向けPostgres事業として創業。"],["顧客","1,700社超","日本語公式サイト。定義と契約内訳は未確認。"],["Postgres貢献","20年以上","日本語公式サイト。"],["可用性","最大99.999%","会社公式。構成と条件による。"],["国内事例","NTT東日本","プライベート環境のAI主導ネットワーク運用。"],["日本求人","3件","営業責任者、上級営業、営業開発。"]],
  products: [["EDB Postgres AI","取引、分析、AI向けデータをPostgresで統合する。","https://www.enterprisedb.com/jp/products/edb-postgres-ai"],["EDB Postgres Distributed","複数拠点で高可用性と継続運用を支える。","https://www.enterprisedb.com/products/edb-postgres-distributed"],["EDB Migration Portal","既存データベースからPostgresへの移行評価と変換を支援する。","https://www.enterprisedb.com/products/migration-portal"]],
  competitors: "Oracle Database、Microsoft SQL Server、AWS・Google Cloud・Azureの管理型データベース、Crunchy Data、Percona、内製PostgreSQL",
  leader: ["Kevin Dallas","Chief Executive Officer","https://www.enterprisedb.com/company/leadership"], local: ["未確認","Japan Sales Leadership","https://www.enterprisedb.com/careers/job-openings?gh_jid=7812564003"],
  work: ["未確認","東京","職種ごとの出社頻度は未確認","Director Salesは日本国内Remoteも検討","国内および必要に応じた海外出張の可能性"],
}, checkedAt);
edb.sources.push(
  { id: "edb-japan-home", label: "EDB日本語公式サイト", url: "https://www.enterprisedb.com/jp", kind: "企業公式", scope: "顧客数・Postgres貢献・製品・国内情報", checkedAt },
  { id: "edb-greenhouse", label: "EDB Greenhouse current openings", url: "https://boards-api.greenhouse.io/v1/boards/edb/jobs", kind: "企業公式", scope: "東京勤務の現行求人3件", checkedAt },
  { id: "gbiz-headcount-edb", label: "gBizINFO EDB法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
edb.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "日本での事業と東京求人は公式確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-edb" };

const threeE = buildDailyCompanyIntelligence({
  slug: "3e", name: "3E", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/3E/a46635ae-4f6f-4a17-a13c-6e9f038ece17", officialUrl: "https://www.3eco.com/why-3e/",
  customersUrl: "https://www.3eco.com/article/merck-case-study/", financeUrl: "https://www.3eco.com/article/3e-ai-platform-product-compliance/",
  problem: "化学物質、原材料、製品、仕入先、販売国ごとに規制が変わり、安全データシート、製品適合、市場投入可否の判断が分断される課題を解く。",
  origin: "35年以上にわたり化学物質と規制の情報を専門家が収集・更新し、安全、製品適合、供給網の判断をソフトウェアとデータへ組み込んできた。",
  externalNeed: "化学規制、持続可能性開示、供給網の透明性が各国で増えるほど、メーカーは製品発売前に対象物質、仕入先情報、根拠法令、説明責任を継続更新する必要がある。",
  solution: "専門家が整備する化学・規制データ、製品別の適合業務、SDS作成、仕入先情報収集、出典付きAIを組み合わせ、判断と証跡を業務導線へ入れる。",
  selection: "一般的な生成AIや文書管理ではなく、規制データの範囲、更新方法、出典、専門家検証、SAP等への接続、監査時に判断根拠を再現できるかで比較する。",
  growth: "会社公式は35年以上、世界5,000社超、従業員1,000人超、14拠点、規制専門家160人超を掲載。東京・丸の内の公式拠点と現行営業求人2件を確認した。",
  role: "Business Development Executiveが日本とアジア太平洋地域の新規顧客を開拓し、Account Managerが日本中心の顧客の利用、更新、追加提案を担う。",
  organization: "東京・丸の内のオフィスを会社公式の拠点一覧で確認。営業、顧客担当、専門サービスの東京求人があるが、国内の正確な人数と責任者は未確認。",
  career: "規制、安全、製品開発、調達、ITをまたぐ判断を、事故回避だけでなく発売速度、販売地域、供給網の競争力へつなぐ企業営業経験。",
  globalHeadcount: "1,000人超（会社公式）", japanPresence: "東京オフィス・丸の内。国内の正確な在籍人数は未確認", japanSince: "進出年は未確認。会社公式の東京拠点を確認",
  customer: { company: "Merck", outcome: "約2,900万件の有効な安全データシートを管理し、2000年比で作成量が300倍になった一方、担当組織の増員を2倍に抑えられたと会社事例で紹介。" },
  facts: [["事業歴","35年以上","会社公式。"],["顧客","5,000社超","会社公式。"],["従業員","1,000人超","会社公式。"],["専門家","160人超","規制、化学、毒性、安全等の専門家。"],["拠点","14拠点","東京を含む会社公式の物理拠点。"],["日本求人","2件","新規営業と顧客担当。"]],
  products: [["3E Protect","化学物質一覧、安全データシート、職場安全を管理する。","https://www.3eco.com/solutions/chemical-workplace-safety/"],["3E Generate","各国要件に合わせた安全データシートとラベルを作成する。","https://www.3eco.com/solutions/sds-authoring/"],["3E Exchange","仕入先から製品・材料情報を収集し、適合と開示へつなぐ。","https://www.3eco.com/solutions/supply-chain-sustainability/"]],
  competitors: "Sphera、Enhesa、Lisam、Assent、UL Solutions、各社のEHS・製品適合システム、専門調査と内製",
  leader: ["Greg Gartland","Chief Executive Officer","https://www.3eco.com/about-us/leadership/"], local: ["未確認","Japan leadership","https://www.3eco.com/locations/"],
  work: ["ハイブリッド","東京・丸の内","Account Managerは週3日出社","完全リモートの明記なし","Account Managerは月5日まで主に国内出張の可能性"],
}, checkedAt);
threeE.sources.push(
  { id: "3e-locations", label: "3E locations", url: "https://www.3eco.com/locations/", kind: "企業公式", scope: "東京オフィス所在地", checkedAt },
  { id: "3e-why", label: "Why 3E", url: "https://www.3eco.com/why-3e/", kind: "企業公式", scope: "事業歴・顧客・従業員・拠点・専門家", checkedAt },
  { id: "gbiz-headcount-3e", label: "gBizINFO 3E法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の被保険者数監査", checkedAt },
);
threeE.companyStats.japanHeadcount = { value: "掲載値未確認", detail: "東京オフィスは会社公式で確認したが、gBizINFOで対応する事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-3e" };

const mixpanel = buildDailyCompanyIntelligence({
  slug: "mixpanel", name: "Mixpanel", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/mixpanel/jobs/8080832", officialUrl: "https://mixpanel.com/about/",
  customersUrl: "https://mixpanel.com/customers/how-tapnow-increased-rentention-with-mixpanel/", financeUrl: "https://mixpanel.com/ai/info-page",
  problem: "製品の利用データが表や集計へ閉じ、利用者がどこで離脱し、どの機能が継続、課金、成長へつながるかを製品、成長、経営が同じ問いで判断しにくい課題を解く。",
  origin: "2009年、Suhail DoshiとTim Trefrenが、Webやアプリで起きる利用者の行動をイベントとして直接分析し、作り手が専門分析者を待たずに答えを得る製品として始めた。",
  externalNeed: "開発とAIによる変更が速くなるほど、企業は作った量ではなく、利用者の行動、定着、購入、失敗を短い周期で測り、実験と改善へ戻す必要がある。",
  solution: "イベント単位の製品行動分析、目標到達経路、継続率、実験、セッション再生を一つにし、製品・成長担当が自ら仮説を確かめられるようにする。",
  selection: "画面数や報告書ではなく、データ設計、利用者別の行動経路、分析の自助性、実験、データ統制、既存倉庫との整合、現場の定着で比較する。",
  growth: "現行公式求人は29,000社超の利用を説明する一方、同じ求人下部には9,000顧客とも記載があり定義差を確認できない。Singaporeから日本企業を担当する上級営業求人を確認した。",
  role: "Senior Enterprise Account Executive, JapanがSingaporeを拠点に、日本の大手デジタル企業で6〜18か月の新規案件、調達、情報安全審査を契約まで進める。",
  organization: "日本市場担当の公式求人は確認したが、勤務地はSingapore。日本法人、国内拠点、日本常駐の専任組織は会社公式とgBizINFOで確認できない。",
  career: "製品行動データを開発の指標から経営の成長判断へ変え、日本市場の初期案件と再現できる販売方法をSingaporeの地域組織から作る経験。",
  globalHeadcount: "501〜1,000人規模の公開集計（現員は変動あり）", japanPresence: "日本法人・国内拠点は未確認。Singaporeから日本市場を担当する求人を確認", japanSince: "未進出。2026年9月に日本専任営業の公式求人を確認",
  customer: { company: "TapNow", outcome: "東京発のSNSが分析速度を10倍にし、継続率を50%高めたと会社事例で紹介。" },
  facts: [["開始","2009年","イベント型の製品分析として開始。"],["本社","サンフランシスコ","会社公式のAI情報ページ。"],["利用企業","29,000社超","現行求人冒頭。求人下部の9,000顧客との定義差は未確認。"],["国内事例","TapNow","分析速度10倍、継続率50%増。"],["日本組織","未確認","法人・国内拠点・常駐組織を確認できず。"],["日本担当求人","1件","Singapore勤務の上級営業。"]],
  products: [["Product Analytics","行動、経路、継続、転換をイベント単位で分析する。","https://mixpanel.com/platform/product-analytics/"],["Session Replay","数値の変化を実際の利用画面と結び、摩擦を調べる。","https://mixpanel.com/platform/session-replay/"],["Experiments","機能変更の効果を利用者群ごとに測る。","https://mixpanel.com/platform/experiments/"]],
  competitors: "Amplitude、Pendo、Heap、Google Analytics、Adobe Analytics、各社データ倉庫と内製分析",
  leader: ["Jen Taylor","Chief Executive Officer","https://mixpanel.com/about/"], local: ["未確認","Japan market leadership","https://job-boards.greenhouse.io/mixpanel/jobs/8080832"],
  work: ["ハイブリッド","Singapore","出社頻度は未確認","日本国内勤務の記載なし","日本企業への訪問・催事参加の頻度は未確認"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本専任の上級営業を公式募集し、日本市場でのブランド形成まで担わせる一方、勤務地はSingaporeで、日本法人・国内拠点は未確認。",
    signal: "Singapore勤務のSenior Enterprise Account Executive, Japanを公式募集し、日本企業の新規開拓、6〜18か月の購買、日本での市場認知を担当範囲に明記。",
    hurdle: "日本法人、国内拠点、日本常駐の技術・顧客成功、契約主体、日本語支援体制、国内の継続的な導入規模を確認できない。",
    conditions: ["Singaporeから日本企業の新規受注と更新・拡大を再現する。", "日本語の技術支援、情報安全審査、契約、導入支援を安定して提供する。", "国内の案件量が日本常駐組織と法人運営の固定費を支える。"],
    watches: ["Japan・Tokyo勤務求人", "日本法人・国内拠点", "日本常駐の技術・顧客成功", "国内顧客事例", "日本語製品・契約・支援体制"],
  },
}, checkedAt);
mixpanel.sources.push(
  { id: "mixpanel-ai-info", label: "Mixpanel AI Info", url: "https://mixpanel.com/ai/info-page", kind: "企業公式", scope: "会社基本情報・製品範囲・創業者", checkedAt },
  { id: "mixpanel-tapnow", label: "Mixpanel TapNow customer story", url: "https://mixpanel.com/customers/how-tapnow-increased-rentention-with-mixpanel/", kind: "企業公式", scope: "日本企業の導入成果", checkedAt },
  { id: "gbiz-headcount-mixpanel", label: "gBizINFO Mixpanel法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
mixpanel.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式とgBizINFOで対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-mixpanel" };

export function applyDaily20260919Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.walkme;
  if (!intelligence) return;
  intelligence.researchedAt = checkedAt;
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !`${item.label}${item.detail}`.includes("Customer Success Manager")),
    { year: "2026.09.19", label: "Customer Success Manager求人終了", detail: "公式求人URLが404となったため掲載から除外。", sourceId: "walkme-job" },
  ];
}

export const daily20260919IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { edb, "3e": threeE, mixpanel };
