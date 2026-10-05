import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-06";

const ecovadis = buildDailyCompanyIntelligence({
  slug: "ecovadis", name: "EcoVadis", jobConfirmed: true,
  jobUrl: "https://jobs.smartrecruiters.com/ecovadis/744000141295519", officialUrl: "https://ecovadis.com/ja/about-us/",
  customersUrl: "https://resources.ecovadis.com/ja/buyers-customer-stories/data-driven-sustainability-management-fujitsu-takes-on-supply-chain-reform-with-ecovadis", financeUrl: "https://ecovadis.com/ja/about-us/",
  problem: "グローバル調達では、取引先ごとに環境、人権・労働、倫理、持続可能な調達の証拠が異なり、リスクと改善を同じ物差しで追いにくい。",
  origin: "2007年にPierre-François ThalerとFrédéric Trinelがパリで創業。企業自身だけでなく、広いサプライチェーンのサステナビリティを共通方法論で評価する発想から始まった。",
  externalNeed: "人権・環境のデューデリジェンス、気候開示、取引先審査が広がり、調達部門は自己申告だけでなく、証拠、継続改善、取引判断を説明できる必要がある。",
  solution: "環境、労働・人権、倫理、持続可能な調達を文書と外部情報で評価し、スコアカード、改善計画、取引先ネットワークとして提供する。",
  selection: "質問票だけの運用や個別コンサルティングと比べ、評価方法の一貫性、対象企業のネットワーク、証拠確認、改善追跡、調達システムへの接続で比較する。",
  growth: "公式沿革は2007年創業、評価対象企業15万社超、2019年の東京オフィス開設を掲載。現行求人は日本オフィス約55人と記載する。",
  role: "Sales Developmentが日本企業の調達・サステナビリティ責任者との商談を作り、Sustainability Analystが日本語の企業文書と外部情報を評価する。",
  organization: "東京オフィスは約55人と現行求人が記載。営業開拓、評価分析、人事運営の3求人を確認し、機能横断で日本組織を拡張している。",
  career: "サステナビリティ基準、サプライチェーン、企業データ、日英の顧客・文書分析を、調達判断と改善へつなぐ経験。",
  globalHeadcount: "1,000人超（会社公式の現行紹介）", japanPresence: "2019年に東京オフィス開設。現行求人は日本オフィス約55人と記載", japanSince: "2019年に東京オフィスを開設",
  customer: { company: "富士通", outcome: "2025年度からEcoVadis評価を活用し、データに基づくサプライチェーンのサステナビリティ管理を強化していると公式事例で紹介。定量成果は未確認。" },
  facts: [["創業","2007年","パリで創業。"],["評価対象企業","15万社超","会社公式About。"],["日本進出","2019年","東京オフィスを開設。"],["日本オフィス","約55人","現行People Operations求人。"],["日本顧客事例","富士通","2025年度から評価を活用。"],["日本求人","3件","営業開拓、評価分析、人事運営。"]],
  products: [["EcoVadis Ratings","企業のサステナビリティ管理体制を共通方法論で評価する。","https://ecovadis.com/solutions/ratings/"],["IQ Plus","サプライチェーンのリスクをデータで把握し、評価対象を優先する。","https://ecovadis.com/solutions/iq-plus/"],["Carbon Action Manager","取引先の排出量把握と削減行動を支援する。","https://ecovadis.com/solutions/carbon-action-manager/"]],
  competitors: "IntegrityNext、Sedex、Assent、個別のESG調査・監査・コンサルティング",
  leader: ["Pierre-François Thaler","Co-Founder and Co-Chief Executive Officer","https://ecovadis.com/ja/about-us/"], local: ["未確認","Japan Leadership","https://ecovadis.com/ja/"],
  work: ["ハイブリッド","Tokyo","職種により週2〜3日出社の記載","完全リモートの明記なし","職種ごとの出社頻度と国内外連携時間を選考で確認"],
}, checkedAt);
ecovadis.sources.push(
  { id: "ecovadis-japan-office", label: "EcoVadis About", url: "https://ecovadis.com/ja/about-us/", kind: "企業公式", scope: "創業・評価対象企業・東京オフィス開設", checkedAt },
  { id: "ecovadis-japan-headcount", label: "EcoVadis People Operations Senior Associate", url: "https://jobs.smartrecruiters.com/ecovadis/744000152649339", kind: "企業公式", scope: "日本オフィス約55人・労務運営", checkedAt },
  { id: "ecovadis-japan-jobs", label: "EcoVadis Tokyo job openings", url: "https://careers.ecovadis.com/", kind: "企業公式", scope: "日本求人3件", checkedAt },
  { id: "gbiz-headcount-ecovadis", label: "gBizINFO EcoVadis法人・事業所確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
ecovadis.companyStats.japanOffice = { value: "東京都千代田区麹町6-6", detail: "EcoVadis日本オフィス。会社公式の沿革とLinkedIn会社ページの拠点一覧を照合。", sourceId: "ecovadis-japan-office" };
ecovadis.companyStats.japanHeadcount = { value: "約55人", detail: "会社公式求人が日本オフィス約55人と記載。gBizINFOの事業所情報に基づく被保険者数ではなく、雇用形態別の対象外・内訳は未確認。", sourceId: "gbiz-headcount-ecovadis" };

const cic = buildDailyCompanyIntelligence({
  slug: "cic", name: "CIC", jobConfirmed: true,
  jobUrl: "https://jp.cic.com/career/", officialUrl: "https://jp.cic.com/en/about/",
  customersUrl: "https://jp.cic.com/en/news/en-cic-institute-tokyo-tib-catapult-global-citytech-bridge-limex-sheet/", financeUrl: "https://jp.cic.com/news/cic-catalyst-japan-launch/",
  problem: "スタートアップ、企業、研究機関、行政の資金・技術・実証先・人材が分散し、偶然の紹介だけでは事業化と海外展開の速度を上げにくい。",
  origin: "1999年、MIT周辺の起業家が集まる米国ケンブリッジで創業。柔軟な仕事場に、投資家、研究者、企業、行政との高密度な接点を組み合わせる発想から始まった。",
  externalNeed: "AI、気候、ライフサイエンス等の深い技術ほど、研究だけでなく実証環境、規制、企業顧客、都市・大学との連携が事業化の条件になる。",
  solution: "イノベーション拠点、研究設備、イベント、コミュニティ、アクセラレーション、都市・産業のエコシステム設計を一体で提供する。",
  selection: "通常のオフィスや単発イベントと比べ、入居企業の密度、企業・行政・投資家の接続、実証から社会実装までの支援、海外拠点との往来で比較する。",
  growth: "CIC Japanは2020年に東京、2025年に福岡、2026年に大阪を開設。公式紹介は国内約450の会員企業と、世界111,000平方メートル超の拠点網を掲載する。",
  role: "Marketing Directorが日本・将来のアジア拠点の市場戦略を持ち、HR Director、Accounting Manager、Systems Engineer、Founder's Associateが拡張の組織・財務・基盤・経営運営を支える。",
  organization: "CIC Japan合同会社。東京・福岡・大阪の3拠点を運営。日本の公式求人5件を確認したが、国内の総在籍人数は未確認。",
  career: "施設運営、企業・行政プログラム、深層技術の事業化、都市のイノベーション政策を、複数拠点とグローバル網でつなぐ経験。",
  globalHeadcount: "201〜500人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "CIC Japan合同会社。東京・福岡・大阪の3拠点", japanSince: "2018年に日本法人設立、2020年にCIC Tokyo開設",
  customer: { company: "東京都・JR東海・TBM", outcome: "CIC Instituteの支援プログラムでLIMEX Sheetを実証し、東海道新幹線グリーン車の印刷物へ本採用されたと公式発表。" },
  facts: [["創業","1999年","米国ケンブリッジで創業。"],["日本法人","2018年","CIC Japan合同会社。"],["国内拠点","3拠点","東京・福岡・大阪。"],["国内会員企業","約450社","会社公式About。"],["東京収容力","250社超","CIC Tokyo公式求人。"],["日本求人","5件","経営運営、人事、マーケティング、IT、会計。"]],
  products: [["Innovation Campuses","仕事場、研究設備、イベント、コミュニティを一つの拠点で提供する。","https://jp.cic.com/en/"],["CIC Catalyst","都市・産業のイノベーション事業とアクセラレーションを設計・実行する。","https://jp.cic.com/news/cic-catalyst-japan-launch/"],["CIC Institute Programs","行政・企業とスタートアップの実証と社会実装を支援する。","https://jp.cic.com/tib-catapult/"]],
  competitors: "WeWork、Plug and Play、各地のインキュベーション施設、個別のアクセラレーター・コンサルティング",
  leader: ["Tim Rowe","Founder and Executive Chair","https://cic.com/about"], local: ["Denyse Medlenka","Chief Executive Officer, CIC Japan","https://jp.cic.com/en/about/"],
  work: ["出社中心","Tokyo・Fukuoka・Osaka","多くの職種は拠点勤務。Founder's AssociateはHybrid","完全リモートの明記なし","拠点間移動、緊急対応、アジア連携の頻度を職種別に確認"],
}, checkedAt);
cic.sources.push(
  { id: "cic-japan-company", label: "CIC Tokyo company information", url: "https://jp.cic.com/en/cic-tokyo/", kind: "企業公式", scope: "日本法人・所在地・設立年", checkedAt },
  { id: "cic-japan-careers", label: "CIC Japan Careers", url: "https://jp.cic.com/career/", kind: "企業公式", scope: "日本求人5件", checkedAt },
  { id: "cic-japan-expansion", label: "CIC Catalyst Japan launch", url: "https://jp.cic.com/news/cic-catalyst-japan-launch/", kind: "企業公式", scope: "東京・福岡・大阪の拠点展開", checkedAt },
  { id: "cic-linkedin", label: "Cambridge Innovation Center LinkedIn", url: "https://www.linkedin.com/company/cicnow/", kind: "外部集計", scope: "グローバル従業員規模の公開レンジ", checkedAt },
  { id: "gbiz-headcount-cic", label: "gBizINFO CIC Japan合同会社", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の掲載状況", checkedAt },
);
cic.companyStats.japanOffice = { value: "東京都港区虎ノ門1-17-1", detail: "CIC Japan合同会社。会社公式のCIC Tokyo会社情報。福岡・大阪にも拠点を運営。", sourceId: "cic-japan-company" };
cic.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本の3拠点と求人は確認できるが、gBizINFOの事業所情報に総在籍人数・被保険者数の掲載を確認できず、制度対象外を含む人数は未確認。", sourceId: "gbiz-headcount-cic" };
if (cic.salesFabeOverview) cic.salesFabeOverview.summary = "スタートアップ、企業、研究機関、行政の資金・技術・実証先・人材が分断し、偶然の紹介だけでは事業化が遅れる課題がある。CICは拠点、研究設備、コミュニティ、支援事業を統合し、実証と海外展開につながる接点を増やす。";

const ionq = buildDailyCompanyIntelligence({
  slug: "ionq", name: "IonQ", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/ionq/jobs/6001723004", officialUrl: "https://www.ionq.com/company",
  customersUrl: "https://www.ionq.com/news/ionq-signs-historic-agreement-with-toyota-tsusho-corporation-to-advance", financeUrl: "https://investors.ionq.com/financials/quarterly-results/default.aspx",
  problem: "創薬、材料、最適化、暗号等の一部課題は古典計算だけでは組合せやシミュレーションが急増し、実用的な解へ届く時間と計算資源が制約になる。",
  origin: "2015年、Chris MonroeとJungsang Kimが大学で30年以上積み上げたイオントラップ研究を、研究室から商用利用へ移すために創業した。",
  externalNeed: "量子技術への公的投資が増える一方、企業は性能指標の誇張を避け、古典計算との差、用途、誤り率、導入時期、知財・安全保障を実証で見極める必要がある。",
  solution: "イオントラップ方式の量子計算機をクラウドと専用機で提供し、量子ネットワーク、センシング、セキュリティを含む基盤へ広げる。",
  selection: "物理量子ビット数だけでなく、ゲート精度、接続性、実アプリの性能、クラウド・専用機の利用性、研究から商用導入への支援で比較する。",
  growth: "2026年Q2売上は8,010万ドルで前年同期比287%増、通期見通しは2.8〜2.9億ドル。2025年に豊田通商との販売提携で日本市場参入を発表し、大阪のCountry Managerを募集する。",
  role: "Country Manager - Enterpriseが日本企業の用途開発、顧客・パートナー開拓、案件化、社内技術部門との連携を担う。",
  organization: "豊田通商との販売提携と最初の国内案件、産総研G-QuATとのMOUを確認。日本法人、常設オフィス、雇用主体、国内在籍人数は未確認。",
  career: "量子技術、企業向け市場開拓、研究機関・商社・企業顧客の連携、実証から商用化までを日本で作る経験。",
  globalHeadcount: "1,000人超（2026年の統合後。正確な現員は変動）", japanPresence: "豊田通商との販売提携、産総研とのMOU、大阪のCountry Manager求人を確認。日本法人・常設拠点は未確認", japanSince: "2025年に日本市場参入を公式発表。恒常的な国内拠点は未確認",
  customer: { company: "豊田通商・産総研G-QuAT", outcome: "豊田通商の顧客網を通じた最初の国内案件と、産総研によるForte級量子計算機へのアクセスを検討するMOUを公式発表。MOUの商用成果は未確認。" },
  facts: [["創業","2015年","大学のイオントラップ研究を商用化。"],["上場","2021年","量子専業企業としてNYSE上場。"],["2026年Q2売上","$80.1M(約126億円)","前年同期比287%増。"],["2026年通期見通し","$280M〜$290M(約440億〜455億円)","会社公式。"],["日本シグナル","提携・MOU・求人","豊田通商、産総研、大阪求人。"],["日本求人","1件","Country Manager - Enterprise。"]],
  products: [["IonQ Tempo","企業・研究用途向けの量子計算システム。","https://www.ionq.com/quantum-systems/tempo"],["IonQ Forte Enterprise","企業・研究機関向けの専用量子計算機。","https://www.ionq.com/quantum-systems/forte-enterprise"],["Quantum Networking and Security","量子通信、鍵配送、ネットワーク基盤を提供する。","https://www.ionq.com/"]],
  competitors: "IBM Quantum、Quantinuum、Rigetti、D-Wave、古典HPCと量子インスパイアード最適化",
  leader: ["Niccolo de Masi","Chairman and Chief Executive Officer","https://www.ionq.com/company"], local: ["未確認","Japan Leadership","https://www.ionq.com/careers"],
  work: ["未確認","豊中市・大阪府","出社頻度は未確認","完全リモートの明記なし","日本の雇用主体、拠点、出張、技術支援人数を選考で確認"],
  preEntry: {
    verdict: "進出可能性は高。販売提携、国内初案件、国立研究機関とのMOU、日本市場責任者求人が揃う一方、日本法人と常設拠点は未確認。",
    signal: "豊田通商との販売提携で日本市場参入と最初の国内案件を公表し、大阪でCountry Managerを募集。産総研G-QuATともMOUを締結。",
    hurdle: "日本法人・雇用主体・常設オフィス、国内の技術支援・保守、案件の商用規模、輸出管理とデータ・知財条件を確認できない。",
    conditions: ["日本での契約・雇用・輸出管理の主体を明確にする。","販売パートナーだけでなく、用途設計と技術検証を支える国内体制を置く。","研究MOUと初期案件を継続売上・公開事例へ変える。","古典計算との差を顧客KPIと総費用で実証する。"],
    watches: ["日本法人・常設拠点","Country Managerの採用完了","日本の技術・導入求人","豊田通商経由の国内事例","産総研MOUの具体化","日本語の契約・支援体制"],
  },
}, checkedAt);
ionq.sources.push(
  { id: "ionq-japan-entry", label: "IonQ and Toyota Tsusho agreement", url: "https://www.ionq.com/news/ionq-signs-historic-agreement-with-toyota-tsusho-corporation-to-advance", kind: "企業公式", scope: "日本市場参入・販売提携・最初の国内案件", checkedAt },
  { id: "ionq-aist", label: "IonQ and AIST G-QuAT MOU", url: "https://investors.ionq.com/news/news-details/2025/IonQ-Expands-Quantum-Collaboration-in-Japan-Signs-Memorandum-of-Understanding-with-AISTs-Global-Research-and-Development-Center-for-Business-by-Quantum-AI-Technology-G-QuAT/default.aspx", kind: "企業公式", scope: "産総研との量子AI協業", checkedAt },
  { id: "ionq-japan-job", label: "IonQ Country Manager - Enterprise", url: "https://job-boards.greenhouse.io/ionq/jobs/6001723004", kind: "企業公式", scope: "大阪の日本市場責任者求人", checkedAt },
  { id: "gbiz-headcount-ionq", label: "gBizINFO IonQ法人・事業所確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
ionq.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOで日本法人・事業所情報と被保険者数を特定できず、制度対象外を含む想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-ionq" };

for (const intelligence of [ecovadis, cic, ionq]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export const daily20261006IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { ecovadis, cic, ionq };
