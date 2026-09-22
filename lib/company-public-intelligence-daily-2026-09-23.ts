import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-23";

const veeam = buildDailyCompanyIntelligence({
  slug: "veeam", name: "Veeam", jobConfirmed: true,
  jobUrl: "https://careers.veeam.com/en/job/tokyo/solution-architect-professional-services/22681/99420332992", officialUrl: "https://www.veeam.com/company/about.html",
  customersUrl: "https://www.veeam.com/jp/resources/customer-stories/taiyo-life-insurance.html", financeUrl: "https://www.veeam.com/data-resilience.html",
  problem: "バックアップがクラウド、SaaS、仮想・物理環境へ分断され、攻撃や障害の後に何をどの順で、どの時間までに復旧できるか検証できない課題を解く。",
  origin: "Ratmir Timashev氏とAndrei Baronov氏が、仮想マシンのバックアップをもっと簡単にするため2006年に創業した。",
  externalNeed: "ランサムウェアとAI利用でデータの保存先・権限・コピーが増え、企業はバックアップ取得だけでなく、隔離、改ざん防止、復旧訓練、復旧時間を事業継続として説明する必要がある。",
  solution: "クラウド、SaaS、仮想・物理環境のデータを発見・保護し、隔離されたバックアップ、復旧、監視、運用を一つのデータレジリエンス基盤へまとめる。",
  selection: "対応製品数だけでなく、既存環境との統合、バックアップの改ざん防止、復旧テスト、復旧時間、権限分離、国内支援まで含めて比較する。",
  growth: "会社公式は世界55万超の顧客、Fortune 500の82%、従業員7,000人超を掲載。日本は2016年設立で、東京、名古屋、大阪の3拠点を持つ。",
  role: "東京のSolution Architectが顧客の復旧目標と環境を整理し、Veeam基盤を設計、導入、検証して長期運用へ引き継ぐ。",
  organization: "ヴィーム・ソフトウェア株式会社。東京本社、名古屋・大阪オフィスを公式確認。国内の正確な在籍人数は非公開。",
  career: "データ保護、クラウド、仮想化、セキュリティ、顧客導入を横断し、復旧可能性を設計と検証で証明する専門サービス経験。",
  globalHeadcount: "7,000人超（会社公式）", japanPresence: "ヴィーム・ソフトウェア株式会社。東京本社、名古屋・大阪オフィス", japanSince: "2016年4月に日本法人設立",
  customer: { company: "太陽生命保険", outcome: "国内155拠点の仮想基盤バックアップを一つの運用へ統合し、重要サーバーを従来想定より短時間で復旧できたと公式事例で説明。" },
  facts: [["創業","2006年","仮想マシンのバックアップを簡素化するため創業。"],["顧客","55万超","会社公式。"],["Fortune 500","82%","Veeam製品群を利用すると会社公式で説明。"],["従業員","7,000人超","会社公式。"],["国内拠点","3拠点","東京、名古屋、大阪。"],["日本求人","1件","Solution Architect (Professional Services)。"]],
  products: [["Veeam Data Platform","複数環境のバックアップ、監視、復旧を統合。","https://www.veeam.com/data-platform.html"],["Veeam Data Cloud","Microsoft 365、Entra ID、SalesforceなどのSaaSデータを保護。","https://www.veeam.com/products/saas/veeam-data-cloud.html"],["Veeam Cyber Secure","攻撃の検知、隔離、復旧支援をデータ保護へ組み込む。","https://www.veeam.com/products/veeam-cyber-secure.html"]],
  competitors: "Rubrik、Cohesity、Commvault、Dell、クラウド各社の標準バックアップ",
  leader: ["Anand Eswaran","Chief Executive Officer","https://www.veeam.com/company/leadership.html"], local: ["鈴木 直樹","専務執行役員","https://www.veeam.com/jp/about-office.html"],
  work: ["出社中心","東京オフィス勤務","出社日数は未確認","完全リモートの明記なし","顧客環境での設計・導入・検証を含む"],
}, checkedAt);
veeam.sources.push(
  { id: "veeam-japan-company", label: "ヴィーム・ソフトウェア株式会社について", url: "https://www.veeam.com/jp/about-office.html", kind: "企業公式", scope: "日本法人・設立・国内拠点・日本幹部", checkedAt },
  { id: "veeam-global-facts", label: "Veeam Data Resilience", url: "https://www.veeam.com/data-resilience.html", kind: "企業公式", scope: "顧客数・Fortune 500利用・製品領域", checkedAt },
);
veeam.companyStats.japanHeadcount = { value: "非公開", detail: "日本法人と3拠点は会社公式で確認したが、国内の正確な在籍人数は公開情報で確認できない。", sourceId: "veeam-japan-company" };

const dFend = buildDailyCompanyIntelligence({
  slug: "d-fend-solutions", name: "D-Fend Solutions", jobConfirmed: true,
  jobUrl: "https://jobs.lever.co/d-fendsolutions/7bcd1f61-af74-41f4-aedb-e9ad52b91b0d", officialUrl: "https://d-fendsolutions.com/about-us/",
  customersUrl: "https://d-fendsolutions.com/press_releases/d-fends-enforceair-provided-world-cup-counter-drone-security-across-array-of-host-cities/", financeUrl: "https://d-fendsolutions.com/newsroom/press-releases/",
  problem: "空港、重要施設、競技場の上空へ不正ドローンが侵入しても、妨害波や物理的な破壊では周辺通信、正規ドローン、人の安全を損なう課題を解く。",
  origin: "サイバー、防衛、無線技術の経験を持つ創業者たちが、ドローンを破壊せず安全に制御するため2017年にイスラエルで創業した。",
  externalNeed: "安価な商用ドローンが偵察、密輸、妨害へ使われる一方、都市・空港・イベントでは通信と正規運用を止めずに脅威だけを特定し、安全な結果へ導く必要がある。",
  solution: "無線周波数を解析して不正ドローンを検知・識別し、RFサイバー技術で操縦系を引き継いで指定地点へ安全に着陸させる。",
  selection: "検知距離だけでなく、妨害波を出さないこと、正規ドローン・通信の継続、対応機種、複数脅威、現地実証、法的運用条件で比較する。",
  growth: "2026年のFIFA World Cupで20超の公共安全機関がEnforceAirを展開。2026年8月にMotorola Solutionsが買収を完了した。",
  role: "東京のPresales Field Engineerが顧客要件、製品説明、屋外デモ、実証、現地調査、提案資料、導入後技術支援まで担う。",
  organization: "D-Fend Solutions Japan・東京。Sales Director, Japanを公式掲載し、東京常駐の技術営業を募集。国内法人の登記名称と正確な在籍人数は未確認。",
  career: "空域・無線・セキュリティの要件を現場で実証し、販売前の技術評価から導入後支援まで一貫して持つ技術営業経験。",
  globalHeadcount: "150人（2021年会社資料。現員は変動あり）", japanPresence: "D-Fend Solutions Japan・東京。日本責任者と現行の東京常駐求人を公式確認", japanSince: "2019年までに日本での活動を公式確認",
  customer: { company: "2026 FIFA World Cupの公共安全機関", outcome: "米国・カナダ・メキシコの開催都市で20超の機関がEnforceAirを展開し、不正ドローン対策へ利用したと公式発表。" },
  facts: [["創業","2017年","イスラエルで創業。"],["世界導入","数千件","実環境での導入実績を会社公式が説明。"],["World Cup","20超の機関","2026年大会の公共安全機関。"],["親会社","Motorola Solutions","2026年8月に買収完了。"],["日本責任者","原 林太郎氏","Sales Director, Japan。"],["日本求人","1件","Presales Field Engineer。"]],
  products: [["EnforceAir2","不正ドローンを検知しRFサイバー技術で安全に制御。","https://d-fendsolutions.com/enforceair2/"],["EnforceAir PLUS","検知・追跡・識別・制御を多層構成へ統合。","https://d-fendsolutions.com/enforceair-plus/"],["Professional Services","現地調査、設置、訓練、24時間365日の支援を提供。","https://d-fendsolutions.com/professional-services/"]],
  competitors: "Dedrone、DroneShield、Robin Radar、各種レーダー・妨害・物理迎撃システム",
  leader: ["Zohar Halachmi","Chairman and Chief Executive Officer","https://d-fendsolutions.com/ja/%E5%BD%93%E7%A4%BE%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/d-fend-solutions%E3%81%AE%E9%A6%96%E8%84%B3%E9%83%A8/"], local: ["原 林太郎","Sales Director, Japan","https://d-fendsolutions.com/ja/%E5%BD%93%E7%A4%BE%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/d-fend-solutions%E3%81%AE%E9%A6%96%E8%84%B3%E9%83%A8/"],
  work: ["出社中心","東京常駐・オンサイト","常時オンサイト","完全リモート不可","屋外実証、現地調査、時間外・週末対応の可能性あり"],
}, checkedAt);
dFend.sources.push(
  { id: "d-fend-japan-office", label: "D-Fend Solutionsの拠点", url: "https://d-fendsolutions.com/ja/%E5%BD%93%E7%A4%BE%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6/%E6%89%80%E5%9C%A8%E5%9C%B0/", kind: "企業公式", scope: "東京拠点", checkedAt },
  { id: "d-fend-acquisition", label: "Motorola Solutions completes acquisition of D-Fend Solutions", url: "https://d-fendsolutions.com/newsroom/press-releases/", kind: "企業公式", scope: "買収完了・会社体制", checkedAt },
);
dFend.companyStats.japanHeadcount = { value: "非公開", detail: "東京拠点、日本責任者、東京常駐求人は公式確認したが、対応する国内法人の登記名称と正確な在籍人数は確認できない。", sourceId: "d-fend-japan-office" };

const aiven = buildDailyCompanyIntelligence({
  slug: "aiven", name: "Aiven", jobConfirmed: false,
  jobUrl: "https://aiven.io/careers/job", officialUrl: "https://aiven.io/about",
  customersUrl: "https://aiven.io/customer", financeUrl: "https://aiven.io/aiven-modern-slavery-statement",
  problem: "Kafka、PostgreSQL、OpenSearchなどのデータ基盤がクラウドと製品ごとに分かれ、更新、障害対応、セキュリティ、費用を少人数で維持できない課題を解く。",
  origin: "Oskari Saarenmaa氏ら4人のエンジニアが、オープンソースのデータ技術を主要クラウドで簡単に運用できるよう2016年にヘルシンキで創業した。",
  externalNeed: "AIとリアルタイムアプリケーションが複数のデータベース、検索、ストリーミングを必要とし、企業はオープンソースの自由度を保ちながら運用・安全性・データ所在を説明する必要がある。",
  solution: "PostgreSQL、Kafka、OpenSearch、ClickHouse、Valkeyなどを主要クラウド上で管理し、構築、更新、監視、バックアップ、障害対応を共通基盤へまとめる。",
  selection: "対応するオープンソース技術だけでなく、クラウド・地域の選択、移行性、運用責任、SLA、費用、技術支援で比較する。",
  growth: "世界60カ国超の1,000社超が利用し、2025年時点で従業員350人超。公式拠点一覧にはSydneyとAucklandがあるが日本はなく、現行38求人にも日本・APAC勤務地はない。",
  role: "現行求人38件に日本・APAC勤務地はなく、日本で応募できる専任営業・技術職は確認できない。",
  organization: "APAC拠点はSydneyとAuckland。日本法人、国内拠点、日本専任の販売・技術支援は未確認。",
  career: "正式進出後は、複数のオープンソースデータ技術を企業のAI・リアルタイム基盤へまとめ、日本市場の販売・技術支援を立ち上げる経験になり得る。",
  globalHeadcount: "350人超（2025年会社公式声明）", japanPresence: "日本法人・国内拠点・日本求人は未確認。APACはSydney・Auckland拠点", japanSince: "未進出",
  customer: { company: "Mirakl", outcome: "Kafka基盤の運用をAivenへ移し、運用費を70%削減したと公式顧客一覧で説明。" },
  facts: [["創業","2016年","フィンランド・ヘルシンキで創業。"],["顧客","1,000社超","60カ国超で利用。"],["従業員","350人超","2025年会社公式声明。"],["APAC拠点","2拠点","Sydney、Auckland。"],["東京対応","クラウドリージョン","Oracle Cloud東京リージョン対応を公式確認。"],["日本求人","0件","現行38求人で日本・APAC勤務地なし。"]],
  products: [["Aiven for Apache Kafka","イベントストリーミング基盤を主要クラウドで管理。","https://aiven.io/kafka"],["Aiven for PostgreSQL","PostgreSQLの構築、更新、監視、バックアップを管理。","https://aiven.io/postgresql"],["Aiven for ClickHouse","リアルタイム分析基盤を管理サービスとして提供。","https://aiven.io/clickhouse"]],
  competitors: "Confluent、MongoDB、Elastic、クラウド各社のマネージドデータサービス、内製運用",
  leader: ["Oskari Saarenmaa","Chief Executive Officer","https://aiven.io/about"], local: ["未確認","日本事業責任者","https://aiven.io/about"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","海外求人のリモート条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。東京のクラウドリージョン対応とAPAC拠点はあるが、日本法人、日本専任求人、日本語の販売・支援、国内公開事例は未確認。",
    signal: "主要クラウドで東京リージョンを選べる製品基盤と、Sydney・AucklandのAPAC拠点を持つ。",
    hurdle: "日本法人、国内拠点、日本専任求人、日本語の契約・請求・技術支援、国内公開事例を確認できない。",
    conditions: ["APACから日本企業の有償需要と更新・拡大を再現する。", "日本語の販売、契約、請求、導入・障害支援を整える。", "国内案件量が日本常駐の営業・技術支援の固定費を支える。", "日本企業の公開事例と販売・技術提携先を作る。", "データ所在、個人情報、情報安全審査への日本語説明を整える。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語製品・契約・支援", "国内顧客事例", "APAC求人のJapan担当表記", "東京リージョンと国内提携先の拡大"],
  },
}, checkedAt);
aiven.sources.push(
  { id: "aiven-jobs", label: "Aiven open positions", url: "https://aiven.io/careers/job", kind: "企業公式", scope: "現行求人38件・日本とAPAC勤務地の掲載状況", checkedAt },
  { id: "aiven-tokyo-region", label: "Aiven adds Oracle Cloud Tokyo region", url: "https://aiven.io/changelog/65d350a3-8233-42e3-b766-2b9cd4b2835f", kind: "企業公式", scope: "東京クラウドリージョン対応", checkedAt },
  { id: "gbiz-headcount-aiven", label: "gBizINFO Aiven法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
aiven.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式の拠点一覧とgBizINFOで対応する日本法人・国内拠点を特定できず、日本での想定人数を0人とは扱わない。", sourceId: "gbiz-headcount-aiven" };
const aivenMilestone = aiven.marketStatus.milestones.find((item) => item.sourceId === "aiven-job");
if (aivenMilestone) {
  aivenMilestone.label = "日本求人0件を確認";
  aivenMilestone.detail = "2026年9月23日の公式求人38件に日本・APAC勤務地の募集を確認できない。";
}
if (aiven.marketStatus.japanGrowth?.entryAssessment) {
  aiven.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "世界利用", body: "60カ国超の1,000社超が利用すると会社公式が説明。", sourceIds: ["aiven-company"] },
    { title: "APAC拠点", body: "SydneyとAucklandの法人・オフィスを会社公式の拠点一覧で確認。", sourceIds: ["aiven-company"] },
    { title: "東京リージョン", body: "Oracle Cloud東京リージョンでAivenサービスを提供。", sourceIds: ["aiven-tokyo-region"] },
    { title: "日本求人0件", body: "公式の現行38求人に日本・APAC勤務地の募集を確認できない。", sourceIds: ["aiven-jobs"] },
  ];
  aiven.marketStatus.japanGrowth.entryAssessment.hurdles = [
    { title: "法人・雇用", body: "日本法人、国内拠点、雇用主体を確認できない。", sourceIds: ["aiven-company", "gbiz-headcount-aiven"] },
    { title: "日本語支援", body: "日本語の販売、契約、請求、導入・障害支援の体制が未確認。", sourceIds: ["aiven-company"] },
    { title: "国内実績", body: "日本企業の公開導入成果と国内顧客数を確認できない。", sourceIds: ["aiven-customers"] },
    { title: "競争", body: "クラウド標準サービスと専業各社が、既存契約、地域、製品別の深さで競合する。", sourceIds: ["aiven-company"] },
  ];
}

export const daily20260923IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { veeam, "d-fend-solutions": dFend, aiven };
