import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-01";

const litmus = buildDailyCompanyIntelligence({
  slug: "litmus", name: "Litmus", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/litmus/a2250c34-6808-40c9-b23a-f4783949c01f", officialUrl: "https://litmus.io/who-we-are",
  customersUrl: "https://litmus.io/customer-stories", financeUrl: "https://litmus.io/ja/blog/litmus-raises-new-funding-to-expand-industrial-edge-data-and-ai",
  problem: "工場の設備、PLC、SCADA、履歴データが機器・拠点ごとに分断し、AIや分析へ渡す前の接続、整形、意味付けに時間と個別開発が必要な課題を解く。",
  origin: "Vatsal ShahとJohn Younesらが、産業機器からデータを取り出して一貫した形で使う難しさを、エッジ側の共通ソフトウェアで解くために創業した。",
  externalNeed: "製造業がAIを試行から複数工場へ広げるほど、企業は設備ごとの生データを移すだけでなく、現場で意味付け、品質、権限、遅延、切断時の動作を統制する必要がある。",
  solution: "産業プロトコルで設備へ接続し、エッジでデータを収集・構造化・分析して、クラウド、データ基盤、企業システム、AIへ安全に配信する。",
  selection: "接続機器数だけでなく、現場でのデータ意味付け、オフライン動作、拠点横断の管理、クラウド・分析基盤との接続、導入後の再利用性で比較する。",
  growth: "会社公式は世界の数千の産業拠点で利用と説明。東京オフィス、日本法人、Panasonic Solution Technologiesとの提携を持ち、日本・AsiaのSales Directorと顧客導入技術職を募集している。",
  role: "Sales Directorが日本・Asiaの営業組織と売上を、Customer Success Application Engineerが概念実証、本番導入、技術支援、製品改善を担う。",
  organization: "Litmus Automation Japan・東京。日本語サイト、日本オフィス、国内パートナー提携、日本・Asia向け求人2件を確認。正確な国内在籍人数は未確認。",
  career: "製造現場のOTデータを企業のAI・分析基盤へつなぎ、地域営業の構築、または概念実証から本番・拡張までの技術成果を作る経験。",
  globalHeadcount: "51〜200人規模（外部公開レンジ、現員は変動あり）", japanPresence: "Litmus Automation Japan・東京。国内提携と日本・Asia向け公式求人2件を確認", japanSince: "東京オフィスとLitmus Automation Japanを会社公式で確認",
  customer: { company: "Nature Fresh Farms", outcome: "公式事例は包装ライン1本で効率を6%改善し、年180万ドル相当の効果と説明。日本での成果ではなく、算定条件の再確認が必要。" },
  facts: [["創業","2014年","産業エッジデータの共通基盤として創業。"],["導入","数千拠点","世界の産業拠点。会社公式。"],["東京拠点","確認済み","会社公式のオフィス一覧。"],["国内提携","Panasonic Solution Technologies","2025年に戦略提携を発表。"],["製品評価","2026年Leader","会社公式がGartner評価を発表。"],["日本求人","2件","Sales DirectorとApplication Engineer。"]],
  products: [["Litmus Edge","設備データをエッジで接続、構造化、分析、配信する。","https://litmus.io/litmus-edge"],["Litmus Edge Manager","複数工場のエッジ環境と配備を一元管理する。","https://litmus.io/edge-data-platform"],["Litmus Data Catalog","産業データの意味、系譜、利用条件を管理する。","https://litmus.io/newsroom"]],
  competitors: "HighByte、Cognite、Siemens、PTC、各製造業の内製OT・クラウド連携",
  leader: ["Vatsal Shah","Co-Founder and Chief Executive Officer","https://litmus.io/who-we-are"], local: ["未確認","日本事業責任者","https://litmus.io/ja"],
  work: ["フルリモート","Japan / APAC","出社日数の明記なし","日本国内のリモート勤務","営業職は25〜40%の域内出張、技術職は24時間365日支援当番の頻度を選考で確認"],
}, checkedAt);
litmus.sources.push(
  { id: "litmus-japan-office", label: "Litmus offices and contact", url: "https://litmus.io/sign-up-litmus-ai-available-in-private-beta", kind: "企業公式", scope: "東京オフィス住所", checkedAt },
  { id: "litmus-panasonic", label: "Litmus Automation Japan and Panasonic Solution Technologies alliance", url: "https://litmus.io/newsroom", kind: "企業公式", scope: "国内提携・日本市場支援", checkedAt },
  { id: "litmus-customer", label: "Litmus Edge customer outcomes", url: "https://litmus.io/litmus-edge", kind: "企業公式", scope: "製造顧客・包装効率の数値成果", checkedAt },
  { id: "gbiz-headcount-litmus", label: "gBizINFO Litmus Automation Japan検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
  { id: "litmus-linkedin", label: "Litmus LinkedIn会社ページ", url: "https://www.linkedin.com/company/litmus-automation/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
);
litmus.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京オフィスは会社公式で確認したが、gBizINFOの事業所被保険者数を今回特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-litmus" };

const hiya = buildDailyCompanyIntelligence({
  slug: "hiya", name: "Hiya", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/hiya/69e4a937-3275-44c9-b640-4cce3d663337", officialUrl: "https://www.hiya.com/en-au/company/about",
  customersUrl: "https://www.hiya.com/customer-stories/financial-services", financeUrl: "https://www.hiya.com/company/about",
  problem: "詐欺・迷惑電話と番号偽装が増え、利用者が知らない番号へ出なくなる一方、正当な企業も顧客へつながらず、通信事業者は信頼低下と対応負荷を抱える課題を解く。",
  origin: "Whitepagesの発信者情報と迷惑電話対策を基に2016年に独立し、端末アプリから通信事業者網へ発信者認証と詐欺検知を広げた。",
  externalNeed: "AI音声と番号偽装で詐欺が精巧になるほど、企業と通信事業者は通話後の苦情対応だけでなく、着信前に発信者、評判、危険度を判定し、正当な通話を識別する必要がある。",
  solution: "通信事業者網と端末から得る通話信号をAIで分析し、迷惑・詐欺電話を止め、正当な企業の名称・目的を着信画面へ表示して接続率と信頼を高める。",
  selection: "アプリの利用者数だけでなく、通信網への組込み範囲、検知精度、誤判定への訂正、発信者認証、規制・プライバシー、通話成果の測定で比較する。",
  growth: "会社公式は150人超、40カ国超、5億人超の利用者を掲載。通信事業者・端末メーカーへの組込みを持ち、東京で日本の通信事業者提携と商用責任を担うCountry Managerを募集している。",
  role: "東京のCountry Managerが日本の市場戦略、通信事業者との提携、主要顧客、新規契約、既存顧客拡張、国内での事業基盤を一貫して担う。",
  organization: "東京を拠点とするRemoteの国責任者求人を確認。日本法人、国内オフィス、既存の国内人員、既存の日本通信事業者との提携は未確認。",
  career: "通信網、発信者認証、詐欺対策、企業の顧客接点をつなぎ、複雑な提携と市場立ち上げを日本の商用モデルへ変える国責任者経験。",
  globalHeadcount: "150人超（会社公式）", japanPresence: "東京拠点のCountry Manager求人を確認。日本法人・国内オフィス・既存国内人員は未確認", japanSince: "2026年にCountry Manager, Japan採用を確認",
  customer: { company: "世界的な金融サービス企業（社名非公開）", outcome: "公式事例はHiya Connect導入後、平均通話時間が27%増え、8カ月の試行中に対象番号への迷惑電話報告が0件だったと説明。日本での成果ではない。" },
  facts: [["独立","2016年","Whitepagesから独立。"],["従業員","150人超","会社公式。"],["利用者","5億人超","会社公式。"],["展開","40カ国超","会社公式。"],["通話分析","月280億件超","通信事業者向け公式ページ。"],["日本求人","1件","Country Manager, Japan。"]],
  products: [["Hiya Protect","通信事業者網で迷惑・詐欺電話を検知し、利用者を保護。","https://www.hiya.com/solutions/operators"],["Hiya Connect","企業の発信者名と目的を認証表示し、通話成果を分析。","https://www.hiya.com/solutions"],["Hiya AI Phone","着信を選別し、詐欺対策と通話要約を支援。","https://www.hiya.com/newsroom/press-releases/hiya-launches-first-ai-call-assistant-that-stops-live-and-deepfake-scams-in-real-time"]],
  competitors: "Truecaller、TNS、First Orion、通信事業者・端末メーカーの内製迷惑電話対策",
  leader: ["Alex Algard","Founder and Chief Executive Officer","https://www.hiya.com/en-au/company/about"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/hiya/69e4a937-3275-44c9-b640-4cce3d663337"],
  work: ["フルリモート","Tokyo, Japan","顧客・通信事業者との対面と国内外出張あり","日本国内のリモート勤務","日本での雇用主体、既存チーム、出張頻度は選考で確認"],
}, checkedAt);
hiya.sources.push(
  { id: "hiya-network", label: "Hiya for Operators", url: "https://www.hiya.com/solutions/operators", kind: "企業公式", scope: "利用者・国・月間通話・通信事業者網への組込み", checkedAt },
  { id: "hiya-customer", label: "Hiya financial services customer story", url: "https://www.hiya.com/customer-stories/financial-services", kind: "企業公式", scope: "通話時間・迷惑電話報告の数値成果", checkedAt },
  { id: "gbiz-headcount-hiya", label: "gBizINFO Hiya法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
hiya.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "東京拠点のCountry Manager求人は確認したが、会社公式情報とgBizINFOで対応する日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-hiya" };

const hoxhunt = buildDailyCompanyIntelligence({
  slug: "hoxhunt", name: "Hoxhunt", jobConfirmed: false,
  jobUrl: "https://jobs.ashbyhq.com/hoxhunt/b770639c-917c-4ac2-b7a5-8c4294d74a62", officialUrl: "https://hoxhunt.com/careers",
  customersUrl: "https://hoxhunt.com/case-studies/moss-credits-hoxhunt-with-measurable-human-cyber-risk-reduction", financeUrl: "https://hoxhunt.com/careers",
  problem: "年1回の定型研修では、従業員が実際のフィッシングや詐欺を見分けて報告する行動へ変わらず、セキュリティ部門も誰にどの介入が必要か測りにくい課題を解く。",
  origin: "2016年にフィンランドで、罰する定型研修ではなく、一人ひとりに合う短い訓練と報酬で安全な行動を習慣化する会社として創業した。",
  externalNeed: "生成AIで偽装メールと音声・文面の品質が上がるほど、企業は受講率ではなく、実際の報告、失敗、対応速度、部門別リスクを継続測定して介入する必要がある。",
  solution: "AIで難易度と内容を個人へ適応するフィッシング訓練、不審メール報告、メール事故対応、行動リスク分析を一つの導線で運用する。",
  selection: "研修教材数ではなく、参加率、報告率、失敗率、実メールの検知、個人別の適応、管理者工数、既存メール・セキュリティ基盤への接続で比較する。",
  growth: "会社公式は2016年創業、270人超、米国・英国・Singapore・フィンランドを主要拠点として掲載。SingaporeでAPACの企業営業を募集するが、日本法人・国内拠点・日本求人は未確認。",
  role: "SingaporeのEnterprise Account Executive, APACが大企業の商談を自ら作り、CISO・CIOを含む複雑な購買を進める。日本専任または日本勤務の求人ではない。",
  organization: "Singaporeを含む4地域の主要拠点を確認。日本法人、国内拠点、日本勤務求人、日本専任人員、日本語の販売・契約・支援体制は未確認。",
  career: "正式進出後は、人的サイバーリスクを研修受講ではなく行動指標と事故対応へ変え、日本企業のCISOへ販売・定着させる経験になり得る。",
  globalHeadcount: "270人超（会社公式Career）", japanPresence: "日本法人・国内拠点・日本勤務求人は未確認。SingaporeでAPAC企業営業を公式募集", japanSince: "未進出",
  customer: { company: "Moss", outcome: "公式事例は1年で参加率92%、活動率83%、成功率60%、失敗率5%となり、失敗率が36%改善したと説明。日本での成果ではない。" },
  facts: [["創業","2016年","フィンランドで創業。"],["従業員","270人超","会社公式Career。"],["Series B","4,000万ドル","2022年。会社公式Career。"],["顧客成果","失敗率5%","Mossの公式事例。"],["日本拠点","未確認","国内法人・拠点を確認できず。"],["日本求人","0件","SingaporeのAPAC営業求人を確認。"]],
  products: [["Human Risk Management","従業員の行動と人的サイバーリスクを測定・改善。","https://hoxhunt.com/"],["Adaptive Phishing Training","個人の水準に合わせた訓練と即時学習を自動化。","https://hoxhunt.com/products/phishing-training"],["Email Incident Response","従業員の報告から不審メールの分析と対応を支援。","https://hoxhunt.com/products/email-incident-response"]],
  competitors: "KnowBe4、Proofpoint、Microsoft Attack Simulation Training、各社の内製研修・メール報告",
  leader: ["Mika Aalto","Co-Founder and Chief Executive Officer","https://hoxhunt.com/company"], local: ["未確認","日本事業責任者","https://hoxhunt.com/careers"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","Singapore求人のハイブリッド条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。SingaporeのAPAC企業営業と270人超の地域基盤はあるが、日本専任の採用、法人、顧客事例、日本語支援は未確認。",
    signal: "SingaporeでEnterprise Account Executive, APACを募集し、大企業のCISO・CIO向けに地域の新規商談と売上を拡大。",
    hurdle: "日本法人、国内拠点、日本勤務・日本専任求人、日本語の販売・契約・導入・事故対応、国内顧客の公開成果を確認できない。",
    conditions: ["Singaporeから日本企業の有償需要と長いセキュリティ審査を再現する。", "日本語の訓練内容、管理画面、契約、導入、事故対応の責任分界を整える。", "国内のメール・セキュリティ販売パートナーと顧客支援体制を作る。", "国内案件と更新・拡張の規模が日本専任組織の固定費を支える。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "国内顧客の数値事例", "日本語製品・支援", "SingaporeのJapan territory表記"],
  },
}, checkedAt);
hoxhunt.sources.push(
  { id: "hoxhunt-customer", label: "Moss human risk reduction case study", url: "https://hoxhunt.com/case-studies/moss-credits-hoxhunt-with-measurable-human-cyber-risk-reduction", kind: "企業公式", scope: "参加率・活動率・成功率・失敗率", checkedAt },
  { id: "gbiz-headcount-hoxhunt", label: "gBizINFO Hoxhunt法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
hoxhunt.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでHoxhuntに紐づく日本法人・事業所を特定できず、日本法人の想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-hoxhunt" };
if (hoxhunt.marketStatus.japanGrowth) {
  hoxhunt.marketStatus.japanGrowth.headline = "日本求人0件・SingaporeからAPAC企業営業を拡大";
  hoxhunt.marketStatus.japanGrowth.narrative = "2026年10月1日の公式求人でSingapore勤務のEnterprise Account Executive, APACを確認。日本法人、国内拠点、日本勤務・日本専任求人、日本語支援は未確認。";
}

export function applyDaily20261001Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const closures: Array<[string, string, string, string, string, string]> = [
    ["extreme-networks", "Senior Services Sales Account Executive求人終了", "2026.10.01", "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。日本の別求人は継続中。", "extreme-networks-services-sales-closure-20261001", "https://jobs.lever.co/extremenetworks/dc7de9db-7057-4321-8a80-b0ec64d53dae"],
    ["extreme-networks", "Senior Systems Engineer求人終了", "2026.10.01", "旧公式求人URLが404を返し、現行一覧では別IDのSystems Engineer求人へ入れ替わったため旧求人を掲載から除外。", "extreme-networks-systems-engineer-closure-20261001", "https://jobs.lever.co/extremenetworks"],
    ["coupa", "Sr. Account Development Representative求人終了", "2026.10.01", "旧公式求人URLが404を返し、現行の公式採用一覧にも日本求人を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", "coupa-adr-closure-20261001", "https://jobs.lever.co/coupa/9a8ec743-c749-429d-a109-36ae523b0b64"],
  ];
  for (const [slug, label, year, detail, sourceId, url] of closures) {
    const intelligence = intelligenceBySlug[slug];
    if (!intelligence) continue;
    if (!intelligence.sources.some((source) => source.id === sourceId)) {
      intelligence.sources.push({ id: sourceId, label: `${label}（公式求人）`, url, kind: "企業公式", scope: "公式URLの終了と現行採用一覧を確認", checkedAt });
    }
    intelligence.researchedAt = checkedAt;
    intelligence.marketStatus.milestones = [
      ...intelligence.marketStatus.milestones.filter((item) => item.label !== label),
      { year, label, detail, sourceId },
    ];
  }
}

export const daily20261001IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { litmus, hiya, hoxhunt };
