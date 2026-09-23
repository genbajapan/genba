import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-09-24";

const rocketSoftware = buildDailyCompanyIntelligence({
  slug: "rocket-software", name: "Rocket Software", jobConfirmed: true,
  jobUrl: "https://rocket.wd5.myworkdayjobs.com/rocket_careers/job/Tokyo-Japan/Principal-Sales-Engineer_R2026-6540", officialUrl: "https://www.rocketsoftware.com/en-us/about-us",
  customersUrl: "https://www.rocketsoftware.com/en-us/case-studies/fujifilm-specialty-ink-systems", financeUrl: "https://www.rocketsoftware.com/en-us/about-us",
  problem: "止めにくい基幹システムへ新しい画面、API、分析、クラウドを加えたい一方、全面書き換えでは費用、障害、知識喪失が大きい課題を解く。",
  origin: "Andy Youniss氏ら2人の技術者が、企業の重要なソフトウェアを長く活かす会社を作るため1990年に米国で創業した。",
  externalNeed: "AIとクラウドへの投資が増えても、企業の取引・顧客・製造データは基幹システムに残る。企業は止めずにデータを開き、技術者不足、監査、性能、移行リスクを同時に管理する必要がある。",
  solution: "基幹アプリケーションの解析、再配置、API化、データ連携、アクセス保護、Vertica分析を組み合わせ、既存処理を残しながら段階的に近代化し、停止リスクと移行工数を減らす。",
  selection: "書き換え範囲だけでなく、停止時間、既存ロジックの保持、移行後の運用、監査、性能、将来の技術者確保を同じ計画で比較する。",
  growth: "会社公式は35年以上、従業員3,000人超、顧客1万2,500社超を掲載。日本では東京・横浜拠点を持ち、Verticaの技術営業を募集している。",
  role: "東京のPrincipal Sales EngineerがVerticaの複雑な商談で設計、実演、実証、性能ベンチマーク、競合比較、提携先との共同提案を主導する。",
  organization: "Rocket Software Japan Ltd.。東京・横浜の2拠点を公式確認。国内の正確な在籍人数は非公開。",
  career: "基幹データ、分析DB、SQL、クラウド、性能検証を横断し、技術的な勝ち筋を大企業の投資判断へ変える上級技術営業経験。",
  globalHeadcount: "3,000人超（会社公式）", japanPresence: "Rocket Software Japan Ltd.。東京・横浜の2拠点", japanSince: "2014年までに横浜、2016年に日本拠点拡大を公式確認",
  customer: { company: "Fujifilm Speciality Ink Systems", outcome: "倉庫業務で支援依頼を90%減らし、在庫確認を15%高速化したと公式事例で説明。" },
  facts: [["創業","1990年","米国で2人の技術者が創業。"],["顧客","12,500社超","会社公式。"],["従業員","3,000人超","会社公式。"],["国内拠点","2拠点","東京、横浜。"],["事業年数","35年以上","会社公式。"],["日本求人","1件","Principal Sales Engineer – Vertica。"]],
  products: [["Rocket Vertica","大規模データの高速分析をオンプレミス、クラウド、複合環境で実行。","https://www.rocketsoftware.com/en-us/products/vertica"],["Rocket Enterprise Suite","基幹アプリケーションを解析、再配置、テストして段階的に近代化。","https://www.rocketsoftware.com/en-us/products/enterprise-suite"],["Rocket Secure Host Access","基幹システムへの接続を認証、暗号化、集中管理。","https://www.rocketsoftware.com/en-us/products/secure-host-access"]],
  competitors: "IBM、OpenText、Precisely、Teradata、ClickHouse、クラウド各社の分析基盤",
  leader: ["Milan Shetti","President and Chief Executive Officer","https://www.rocketsoftware.com/en-us/about-us"], local: ["未確認","日本事業責任者","https://www.rocketsoftware.com/en-us/locations"],
  work: ["未確認","東京勤務","出社日数は未確認","完全リモートの明記なし","顧客ワークショップ、実演、実証、性能検証を含む"],
}, checkedAt);
rocketSoftware.sources.push(
  { id: "rocket-locations", label: "Rocket Software locations", url: "https://www.rocketsoftware.com/en-us/locations", kind: "企業公式", scope: "東京・横浜拠点と日本法人表記", checkedAt },
  { id: "gbiz-headcount-rocket-software", label: "gBizINFO Rocket Software法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
rocketSoftware.companyStats.japanHeadcount = { value: "掲載なし", detail: "会社公式で日本法人と東京・横浜拠点を確認したが、gBizINFOで正確な事業所被保険者数を確認できない。", sourceId: "gbiz-headcount-rocket-software" };

const qnx = buildDailyCompanyIntelligence({
  slug: "qnx", name: "QNX", jobConfirmed: true,
  jobUrl: "https://bb.wd3.myworkdayjobs.com/en-US/BlackBerry/job/QNX--Strategic-Account-Manager--General-Embedded-_20260105-1", officialUrl: "https://www.blackberry.com/en",
  customersUrl: "https://www.qnx.com/news/pr_1095_4.html?lang=jp", financeUrl: "https://www.blackberry.com/us/en/company/investors",
  problem: "自動車、医療、産業設備のソフトウェアが複雑になる一方、停止、遅延、侵害、更新失敗が人命や量産へ直結する課題を解く。",
  origin: "Dan Dodge氏とGordon Bell氏が、資源の限られた機器でも予測可能に動くリアルタイムOSを作るため1980年にカナダで創業した。",
  externalNeed: "自動車や産業機器がソフトウェア定義へ移るほど、機能追加だけでなく、決められた時間内の応答、故障分離、安全認証、長期支援、更新後の挙動を説明する必要がある。",
  solution: "マイクロカーネル型リアルタイムOS、ハイパーバイザー、ミドルウェア、開発道具と技術支援を、安全重要システムの共通基盤として提供する。",
  selection: "機能数だけでなく、応答の予測可能性、故障分離、安全認証、対応半導体、量産実績、長期支援、顧客開発部門との責任分界で比較する。",
  growth: "会社公式はQNXが世界2億7,500万台超の車両に搭載されると説明。日本では1999年から活動し、東京で営業、技術営業、APAC顧客マーケティングを募集している。",
  role: "東京の3求人が、大手顧客営業、自動車向け技術責任、APAC顧客マーケティングをそれぞれ担い、日本の販売・導入・拡大を横断する。",
  organization: "BlackBerry Japan・東京。日本営業チームと国内顧客・提携先を公式確認したが、国内の正確な在籍人数は非公開。",
  career: "組み込みソフトウェア、安全・リアルタイム要件、量産工程、大手製造業の長期製品計画を横断する営業・技術・顧客マーケティング経験。",
  globalHeadcount: "BlackBerry全社の現員は公開資料を参照。QNX部門単独の正確な人数は非公開", japanPresence: "BlackBerry Japan・東京。日本営業チームと東京の現行3求人を確認", japanSince: "1999年に日本拠点開設",
  customer: { company: "日本の製造・自動車関連企業", outcome: "公式の日本5周年資料はEpson、松下、住友などへの導入と、Renesas、Hitachiなどとの提携を説明。現在の個社成果は未確認。" },
  facts: [["創業","1980年","カナダで創業。"],["車両搭載","2億7,500万台超","会社公式。"],["日本活動","1999年から","日本拠点の開設年。"],["東京拠点","1拠点","BlackBerry公式。"],["対象領域","5分野以上","自動車、医療、産業、ロボット、鉄道など。"],["日本求人","3件","営業、技術営業、APAC顧客マーケティング。"]],
  products: [["QNX Software Development Platform","リアルタイムOS、開発環境、基盤サービスを提供。","https://blackberry.qnx.com/en/products/foundation-software/qnx-software-development-platform"],["QNX Hypervisor","安全重要度の異なる機能を同じ計算機上で分離。","https://blackberry.qnx.com/en/products/foundation-software/qnx-hypervisor"],["QNX Cabin","デジタルコックピットの表示、音声、接続機能を統合。","https://blackberry.qnx.com/en/products/automotive/qnx-cabin"]],
  competitors: "Wind River VxWorks、Green Hills INTEGRITY、Elektrobit、Vector、Linux・内製基盤",
  leader: ["John J. Giamatteo","Chief Executive Officer, BlackBerry","https://www.blackberry.com/us/en/company/leadership"], local: ["未確認","日本事業責任者","https://www.blackberry.com/en/blackberry-office-locations"],
  work: ["出社中心","東京勤務","出社日数は未確認","完全リモートの明記なし","顧客訪問と国内・APAC出張を含む"],
}, checkedAt);
qnx.sources.push(
  { id: "qnx-japan-office", label: "BlackBerry office locations", url: "https://www.blackberry.com/en/blackberry-office-locations", kind: "企業公式", scope: "東京拠点", checkedAt },
  { id: "qnx-q1-fy2027", label: "BlackBerry Q1 FY2027 earnings release", url: "https://irp.cdn-website.com/586e2b1b/files/uploaded/Q1%2BFY27%2BEarnings%2BRelease%2BFINAL.pdf", kind: "法定開示", scope: "QNX部門の四半期売上", checkedAt },
  { id: "gbiz-headcount-qnx", label: "gBizINFO BlackBerry・QNX法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
qnx.facts.push({
  label: "Q1 FY2027売上",
  value: "$72.3M(約113.5億円)",
  detail: "BlackBerry QNX部門の2026年5月31日終了四半期。年率換算や通期売上ではない。",
  sourceIds: ["qnx-q1-fy2027"],
});
qnx.companyStats.japanHeadcount = { value: "掲載なし", detail: "東京拠点と日本チームは会社公式で確認したが、QNX事業に対応する国内の正確な事業所被保険者数を確認できない。", sourceId: "gbiz-headcount-qnx" };

const neo4j = buildDailyCompanyIntelligence({
  slug: "neo4j", name: "Neo4j", jobConfirmed: false,
  jobUrl: "https://neo4j.com/careers/", officialUrl: "https://neo4j.com/company/",
  customersUrl: "https://neo4j.com/press-releases/neo4j-hires-apac-leader/", financeUrl: "https://neo4j.com/company/",
  problem: "顧客、取引、人物、製品、文書の関係が表や検索索引へ分断され、不正の連鎖やAI回答の根拠をたどれない課題を解く。",
  origin: "Emil Eifrem氏らが関係データを表で扱う性能問題に直面し、2000年に最初の試作、2007年にスウェーデンで会社を設立した。",
  externalNeed: "生成AIを業務へ入れるほど、文書検索だけでなく、誰が何とどう関係するか、参照権限、出典、複数段の推論を説明できる知識層が必要になる。",
  solution: "関係を第一級のデータとして保持するグラフDB、分析アルゴリズム、Auraクラウド、知識グラフ・GraphRAG・AIエージェント向け機能を提供し、複数段の関係探索と根拠確認の時間を減らす。",
  selection: "検索精度だけでなく、複数段の関係探索、更新の即時性、説明可能性、権限、既存データ基盤との接続、運用規模で比較する。",
  growth: "2024年にARR 2億ドルを突破し、2025年に生成AIへ1億ドル投資。84社のFortune 100が利用し、APACはSingapore・Sydney拠点を持つが日本拠点・求人は未確認。",
  role: "日本向け公式求人は確認できない。APACには地域責任者とSingapore・Sydney拠点があり、日本企業の需要、提携先、日本語支援を観測する段階。",
  organization: "日本法人、国内拠点、日本専任求人は未確認。APACはSingapore・Sydneyの会社拠点を公式確認。",
  career: "正式進出後は、知識グラフとAIの文脈を、不正検知、推薦、製造、顧客情報など日本企業の業務成果へ変える市場立ち上げ経験になり得る。",
  globalHeadcount: "800人超（会社採用情報の公開値）", japanPresence: "日本法人・国内拠点・日本求人は未確認。APACはSingapore・Sydney拠点", japanSince: "未進出",
  customer: { company: "Mercari", outcome: "APAC顧客として会社公式発表に掲載。利用製品、対象業務、数値成果は同発表だけでは確認できない。" },
  facts: [["会社設立","2007年","スウェーデンで設立。"],["ARR","2億ドル超","2024年会社公表。"],["Fortune 100","84社","会社公式。"],["AI投資","1億ドル","2025年会社公表。"],["APAC拠点","2拠点","Singapore、Sydney。"],["日本求人","0件","公式採用ページで確認。"]],
  products: [["Neo4j Graph Database","関係を直接保持し、複数段の探索と取引処理を実行。","https://neo4j.com/product/neo4j-graph-database/"],["Neo4j Aura","グラフDBと分析をクラウドで管理。","https://neo4j.com/product/auradb/"],["Neo4j Graph Data Science","グラフアルゴリズムで不正、推薦、経路、影響を分析。","https://neo4j.com/product/graph-data-science/"]],
  competitors: "Amazon Neptune、TigerGraph、ArangoDB、クラウド各社の知識グラフ・検索基盤、内製RAG",
  leader: ["Emil Eifrem","Co-Founder and Chief Executive Officer","https://neo4j.com/leadership/"], local: ["未確認","日本事業責任者","https://neo4j.com/careers/"],
  work: ["未確認","日本求人なし","該当なし","日本での勤務条件は未確認","APAC拠点の条件を日本へ転用しない"],
  preEntry: {
    verdict: "進出可能性は中。APAC組織、国内顧客名、東京・大阪クラウドリージョンはあるが、日本法人、日本専任求人、日本語の販売・支援体制は未確認。",
    signal: "Singapore・SydneyのAPAC拠点、APAC地域責任者、Mercariを含む地域顧客、東京・大阪のAura対応を公式確認。",
    hurdle: "日本法人、国内拠点、日本専任求人、日本語の契約・技術支援、公開された国内成果を確認できない。",
    conditions: ["APACから日本企業の有償需要と更新・拡大を再現する。", "日本語の販売、契約、導入、障害支援を整える。", "国内の知識グラフ・AI案件量が営業と技術支援の固定費を支える。", "国内顧客の対象業務と数値成果を公開できる事例を作る。", "データ所在、個人情報、AIの根拠・権限を日本語で説明する。"],
    watches: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本語の販売・技術支援", "国内顧客の数値事例", "APAC求人のJapan担当表記", "国内販売・技術提携先"],
  },
}, checkedAt);
neo4j.sources.push(
  { id: "neo4j-newsroom", label: "Neo4j Newsroom corporate profile", url: "https://neo4j.com/newsroom/", kind: "企業公式", scope: "Fortune 100利用・会社拠点", checkedAt },
  { id: "neo4j-aura-regions", label: "Neo4j Aura regions", url: "https://neo4j.com/docs/aura/managing-instances/regions/", kind: "企業公式", scope: "東京・大阪クラウドリージョン対応", checkedAt },
  { id: "gbiz-headcount-neo4j", label: "gBizINFO Neo4j法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
neo4j.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式の拠点一覧とgBizINFOで対応する日本法人・国内拠点を特定できず、日本法人での想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-neo4j" };
const neo4jMilestone = neo4j.marketStatus.milestones.find((item) => item.sourceId === "neo4j-job");
if (neo4jMilestone) {
  neo4jMilestone.label = "日本求人0件を確認";
  neo4jMilestone.detail = "2026年9月24日の公式採用ページで日本勤務地の募集を確認できない。";
}
if (neo4j.marketStatus.japanGrowth?.entryAssessment) {
  neo4j.marketStatus.japanGrowth.entryAssessment.factSignals = [
    { title: "APAC組織", body: "Singapore・Sydney拠点とAPAC地域責任者を会社公式で確認。", sourceIds: ["neo4j-newsroom", "neo4j-finance"] },
    { title: "国内顧客名", body: "APAC顧客としてMercariを会社公式発表に掲載。対象業務と数値成果は未確認。", sourceIds: ["neo4j-customers"] },
    { title: "国内クラウド", body: "Auraは東京・大阪のクラウドリージョンを選択できる。", sourceIds: ["neo4j-aura-regions"] },
    { title: "日本求人0件", body: "公式採用ページで日本勤務地の募集を確認できない。", sourceIds: ["neo4j-job"] },
  ];
}

export const daily20260924IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { "rocket-software": rocketSoftware, qnx, neo4j };
