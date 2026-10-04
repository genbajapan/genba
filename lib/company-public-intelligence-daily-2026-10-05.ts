import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-05";

const legora = buildDailyCompanyIntelligence({
  slug: "legora", name: "Legora", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/legora/42f62bc1-edef-4406-ab82-2dc8a09de327", officialUrl: "https://legora.com/about",
  customersUrl: "https://legora.com/customers", financeUrl: "https://legora.com/blog/series-d",
  problem: "法律実務では、調査、大量文書レビュー、起案、修正、顧客との共同作業が分断し、高い専門性を判断に集中させにくい。",
  origin: "2023年にMax Junestrandらがストックホルムで創業。弁護士の仕事と判断に沿う協働型AIを、法律専門家と共に作るという発想から始まった。",
  externalNeed: "取引・規制・訴訟資料が増え、ジェネラリストAIの利用が広がるほど、法務組織は根拠、守秘、権限、品質確認を保ちながら処理量を上げることを求められる。",
  solution: "法務調査、文書レビュー、起案、ナレッジと共同作業を、法律業務の文脈と人の確認を残すAIワークスペースで支援する。",
  selection: "汎用AIと比べ、法務業務の一貫性、出典・引用、文書管理、権限、監査、利用定着、成果品質で検証する。",
  growth: "公式Aboutは875人超、2,080社超、60市場超を掲載。2026年3月に5.5億ドルを調達し、評価額55.5億ドル。東京で営業・導入・Legal Engineeringを同時採用している。",
  role: "Enterprise Account Executiveが日本市場のパイプラインと収益を持ち、Engagement ManagerとLegal Engineerが業務設計・導入・定着を支える。",
  organization: "東京の4求人を確認。日本法人名、オフィス所在地、雇用主体、国内の正確な在籍人数は未確認。",
  career: "法律専門性、AI製品、企業変革、経営層提案、利用成果の設計を日本市場の立ち上げで横断する経験。",
  globalHeadcount: "875人超（会社公式Aboutの現行表示）", japanPresence: "東京のGo To Market・導入・Legal Engineering求人4件を確認。日本法人と国内在籍人数は未確認", japanSince: "2026年10月時点で東京の専任求人群を確認",
  customer: { company: "DKSH", outcome: "公式顧客ページは、法務レビュー、調査、起案の効率を改善したと紹介。定量成果と日本部門での利用は未確認。" },
  facts: [["創業","2023年","スウェーデンで創業。"],["従業員","875人超","会社公式About。"],["顧客","2,080社超","会社公式Aboutの現行表示。"],["資金調達","$550M(約864億円)","2026年3月Series D。"],["企業価値","$5.55B(約8,714億円)","Series D発表時。"],["東京求人","4件","営業、導入、Legal Engineer、Director。"]],
  products: [["Legora Workspace","法務調査、レビュー、起案、共同作業を一つの基盤で扱う。","https://legora.com/"],["Tabular Review","大量の契約・資料から必要事項を構造化して確認する。","https://legora.com/"],["Legal Research","法的調査と出典確認をAIで支援する。","https://legora.com/blog"]],
  competitors: "Harvey、Lexis+ AI、Thomson Reuters CoCounsel、Microsoft Copilotと個別の法務テック",
  leader: ["Max Junestrand","Co-Founder and Chief Executive Officer","https://legora.com/about"], local: ["未確認","Japan Leadership","https://jobs.ashbyhq.com/legora"],
  work: ["出社中心","Tokyo","出社日数の例外は未記載","完全リモートの明記なし","日本組織の雇用主体・オフィスは選考で確認"],
}, checkedAt);
legora.sources.push(
  { id: "legora-about-current", label: "Legora About", url: "https://legora.com/about", kind: "企業公式", scope: "従業員数・顧客数・市場数・事業概要", checkedAt },
  { id: "legora-jobs-api", label: "Legora Ashby job board", url: "https://api.ashbyhq.com/posting-api/job-board/legora", kind: "企業公式", scope: "東京求人4件と勤務形態", checkedAt },
  { id: "gbiz-headcount-legora", label: "gBizINFO Legora法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
legora.companyStats.japanHeadcount = { value: "対応法人未特定", detail: "東京専任求人4件は確認したが、日本法人と事業所被保険者数を確定できず、0人とは扱わない。", sourceId: "gbiz-headcount-legora" };

const rescale = buildDailyCompanyIntelligence({
  slug: "rescale", name: "Rescale", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/rescale/08a43132-a891-42b8-9aa3-feb0a2a49c83", officialUrl: "https://rescale.com/company/about/",
  customersUrl: "https://rescale.com/ja/customers/", financeUrl: "https://rescale.com/news/rescale-series-c-funding/",
  problem: "製造・航空宇宙・ライフサイエンスの研究開発では、解析ソフト、計算機、データ、ジョブ設定が分断し、計算待ちとIT運用が開発を遅らせる。",
  origin: "Boeing 787の翼構造をシミュレーションしていたJoris PoortとAdam McKenzieが、研究者が同じ計算制約を抱えていると気づき、2011年に創業した。",
  externalNeed: "モデルとシミュレーションが大規模化し、専用チップとAIが増えるほど、研究開発部門は計算速度と費用、ソフトウェアライセンス、知財保護を同時に管理する必要がある。",
  solution: "複数クラウドのHPC、1,250超のソフトウェア統合、ジョブワークフロー、データ、セキュリティ統制を一つのデジタルエンジニアリング基盤で提供する。",
  selection: "個別クラウドの計算機と比べ、必要な解析ソフトとハードウェアの組み合わせ、待ち時間、計算費、再現性、データ統制、移行負荷で比較する。",
  growth: "公式Aboutは5,000万超の事前構成済みワークフロー、1,250超のソフトウェア統合、180超の計算アーキテクチャを掲載。日本法人は2016年から展開する。",
  role: "Solutions Architect (Japan)が顧客の研究ワークフローとIT環境を把握し、技術評価、アーキテクチャ、導入と価値説明を担う。",
  organization: "Rescale Japan株式会社・東京。公式は2016年の法人設立と東京オフィスを掲載。外部会社データの2026年推定は17人だが、会社公式人数ではない。",
  career: "HPC、複数クラウド、CAE・研究ソフト、データ統制、セキュリティを研究開発の事業成果へ変える技術提案経験。",
  globalHeadcount: "201〜500人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "Rescale Japan株式会社・東京。国内顧客事例と現行求人を確認", japanSince: "2016年に日本法人と東京オフィスを設立",
  customer: { company: "住友電気工業", outcome: "AIを用いた次世代素材の開発期間を半減し、複数の特許化につながったとRescaleの公式事例で紹介。会社作成事例であり独立監査済み成果ではない。" },
  facts: [["創業","2011年","Boeing 787の計算工学の経験が起点。"],["ソフト統合","1,250超","会社公式About。"],["計算アーキテクチャ","180超","会社公式About。"],["日本法人","2016年","会社公式発表。"],["日本従業員","17人（外部推定）","SalesNowの2026年推定。公式値ではない。"],["日本求人","1件","Solutions Architect (Japan)。"]],
  products: [["Rescale Platform","複数クラウドのHPC、解析ソフト、データと統制を管理する。","https://rescale.com/"],["Rescale High Performance Computing","用途に合う計算資源を弾力的に選び、ジョブを実行する。","https://rescale.com/platform/high-performance-computing/"],["AI Physics / Agentic Engineering","シミュレーションとAIをつなぎ、設計探索と分析を支援する。","https://rescale.com/"]],
  competitors: "AWS・Azure・Google Cloudの直接利用、Altair One、Ansys Gateway powered by AWS、社内HPC、個別のクラウド移行支援",
  leader: ["Joris Poort","Founder and Chief Executive Officer","https://rescale.com/company/about/"], local: ["Josh Hwang","Vice President and General Manager, APAC","https://rescale.com/company/about/"],
  work: ["未確認","Tokyo","出社頻度は未記載","完全リモートの明記なし","顧客の研究環境に合わせた対面・技術対応条件を選考で確認"],
}, checkedAt);
rescale.sources.push(
  { id: "rescale-japan-entry", label: "Rescale Tokyo office announcement", url: "https://www.rescale.com/ja/blog/rescale-opens-tokyo-office/", kind: "企業公式", scope: "日本法人・東京オフィス・進出時期", checkedAt },
  { id: "rescale-sumitomo-electric", label: "Rescale 住友電工事例", url: "https://rescale.com/ja/news/20231026_sumitomo_electric/", kind: "企業公式", scope: "日本の導入成果", checkedAt },
  { id: "rescale-linkedin", label: "Rescale LinkedIn company page", url: "https://www.linkedin.com/company/rescale", kind: "外部集計", scope: "グローバル会社規模", checkedAt },
  { id: "rescale-japan-headcount", label: "SalesNow Rescale Japan会社データ", url: "https://salesnow.jp/db/companies/jcbhmbdb865gxf888", kind: "外部集計", scope: "国内従業員数の外部推定", checkedAt },
);
rescale.companyStats.japanHeadcount = { value: "17人（外部推定）", detail: "SalesNowの2026年推定。Rescale公式値ではなく、実際のJapan team人数と一致するとは限らない。", sourceId: "rescale-japan-headcount" };

const drata = buildDailyCompanyIntelligence({
  slug: "drata", name: "Drata", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/drata", officialUrl: "https://drata.com/",
  customersUrl: "https://drata.com/customers", financeUrl: "https://drata.com/blog/announcing-fy25-momentum",
  problem: "セキュリティ管理策、監査証跡、ベンダー評価、顧客からの質問票が分断し、セキュリティ部門が同じ証明を繰り返す。",
  origin: "2020年に創業し、クラウド企業が統制と証跡を継続的に確認し、顧客・監査人へ信頼を証明できる基盤として開発した。",
  externalNeed: "AI利用、外部SaaS、規制と顧客審査が増えるほど、企業は一時点の監査合格だけでなく、統制の運用と第三者・AIリスクを継続的に説明する必要がある。",
  solution: "クラウド等から証跡を収集し、統制を継続監視し、コンプライアンス、Trust Center、質問票、第三者・AIリスク管理を一つの基盤で扱う。",
  selection: "Vanta、Secureframe、ServiceNow GRC、監査支援と比べ、統合、対応基準、証跡自動化、監査人連携、質問票時間、規制地域の支援で検証する。",
  growth: "2025年にARR 1億ドル超、7,000社超・60カ国の顧客を公表。現行求人は600人超の組織と記載し、Remote APACのSolutions Architectを募集する。",
  role: "日本専任の公式求人は未確認。Remote APACのSolutions ArchitectはAPAC企業の導入、利用定着、更新リスク、データ移行、API連携を支える。",
  organization: "米国中心のグローバル組織。日本法人、国内オフィス、Japanカントリーリーダー、日本専任求人、国内顧客事例は未確認。",
  career: "現在は日本から応募できる専任ポジションを確認できず、APAC支援の地域・雇用条件を要確認。将来的にはGRC、クラウド、顧客導入の交差が主な役割になる。",
  globalHeadcount: "600人超（現行の会社公式求人の記載）", japanPresence: "日本法人・国内拠点・Japan専任求人・国内顧客事例を確認できず", japanSince: "未進出",
  customer: { company: "Connective", outcome: "オーストラリアの顧客事例でEssential Eight対応準備を2時間で行い、SOC 2監査を5カ月から5週へ短縮したと紹介。会社作成事例で独立監査済み成果ではない。" },
  facts: [["創業","2020年","米国で創業。"],["ARR","$100M(約157億円)超","2025年会社公表。"],["顧客","7,000社超","2025年会社公表。現行顧客ページは8,500社超を表示。"],["展開国","60カ国","会社公表。"],["従業員","600人超","会社公式求人。"],["APAC求人","1件","Remote APAC Solutions Architect。日本応募可否は未確認。"]],
  products: [["Compliance Automation","統制と証跡を継続的に収集・監視する。","https://drata.com/product/compliance"],["Trust Center / AI Questionnaire Assistance","顧客へのセキュリティ証明と質問票回答を支援する。","https://drata.com/"],["Third-Party Risk Management","ベンダーとAIを含む外部リスクの評価・継続監視を行う。","https://drata.com/third-party-risk-management"]],
  competitors: "Vanta、Secureframe、ServiceNow GRC、OneTrust、AuditBoard、監査・コンサルティングの手作業",
  leader: ["Adam Markowitz","Founder and Chief Executive Officer","https://drata.com/about"], local: ["未確認","Japan Leadership","https://jobs.ashbyhq.com/drata"],
  work: ["未確認","日本国内拠点未確認","Remote APAC職の対象国に日本が含まれるか未確認","日本向けの雇用主体・福利厚生未確認","日本専任採用が始まるまで継続観測"],
  preEntry: {
    verdict: "進出可能性は中。日本専任の求人・法人・顧客事例は未確認だが、Remote APACの顧客導入機能とオーストラリア顧客は地域展開の土台になる。",
    signal: "APAC企業の導入・更新・拡大を支えるRemote APAC Solutions Architectを募集。オーストラリア向けの報酬と雇用条件が表示され、日本が対象かは未確認。",
    hurdle: "日本の法人・雇用主体、国内顧客、日本語UI・支援・監査法人連携、日本固有の規格対応を確認できない。",
    conditions: ["日本企業の規制・顧客審査に合う対応基準と日本語運用を揃える。","国内の監査法人・コンサルティング・MSPとの導入役割を作る。","日本での雇用、契約、データ所在地とサポート窓口を明確にする。","国内顧客で監査時間と商談審査時間の改善を実証する。"],
    watches: ["Japan・Tokyo専任求人","日本法人・国内拠点","日本語製品・支援","国内顧客事例","監査法人・コンサルティングの提携","日本がRemote APAC職の雇用対象に入るか"],
  },
}, checkedAt);
drata.sources.push(
  { id: "drata-apac-role", label: "Drata Solutions Architect - APAC", url: "https://jobs.ashbyhq.com/drata/4b5cd1ca-7d7d-4985-ba77-a9870fbd3d1a", kind: "企業公式", scope: "APAC導入体制・対象業務・地域条件", checkedAt },
  { id: "drata-current-customers", label: "Drata customer stories", url: "https://drata.com/customers", kind: "企業公式", scope: "顧客数・APAC事例・導入成果", checkedAt },
  { id: "gbiz-headcount-drata", label: "gBizINFO Drata法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
drata.companyStats.japanHeadcount = { value: "対応法人未特定", detail: "日本法人・国内拠点・Japan専任従業員を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-drata" };

for (const intelligence of [legora, rescale, drata]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export const daily20261005IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { legora, rescale, drata };
