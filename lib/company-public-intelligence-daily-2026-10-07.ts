import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-07";

const blackpanda = buildDailyCompanyIntelligence({
  slug: "blackpanda", name: "Blackpanda", jobConfirmed: true,
  jobUrl: "https://blackpanda.bamboohr.com/careers", officialUrl: "https://www.blackpanda.com/jp/about-us/who-we-are",
  customersUrl: "https://www.blackpanda.com/jp/case-studies/ir1-singapore-retail-fraud", financeUrl: "https://www.blackpanda.com/jp/about-us/who-we-are",
  problem: "サイバー攻撃の発生後は、被害範囲、証拠保全、封じ込め、復旧、経営判断を同時に進める必要があり、平時に契約と手順がなければ初動が遅れる。",
  origin: "元米陸軍特殊部隊のGene Yuが、現実の誘拐事件で救出作戦に関わった経験から、危機時にすぐ呼べる専門家へのアクセスをサイバー領域へ持ち込んだ。",
  externalNeed: "ランサムウェア、サプライチェーン侵害、情報漏えいが事業停止へ直結し、企業は事故後に業者を探すのではなく、初動時間、権限、費用、保険まで事前に設計する必要がある。",
  solution: "24時間365日のインシデント対応を、定額のIR-1契約、平時の診断、デジタルフォレンジック、サイバー保険と組み合わせて提供する。",
  selection: "単発のフォレンジックや一般的な監視サービスと比べ、緊急時の応答条件、地域の対応要員、平時準備、復旧までの責任範囲、保険との接続で比較する。",
  growth: "会社公式はアジアを中心に複数地域で24時間対応を提供。日本法人、東京拠点、SB C&Sとの協業を公表し、日本の公式求人4件を確認した。",
  role: "Partner Sales ManagerとCustomer Success Managerが契約・利用を広げ、Junior／Senior Incident Responderが事故時の調査、封じ込め、復旧を担う。",
  organization: "Blackpanda Japan株式会社と東京拠点を確認。日本の総在籍人数は未確認だが、営業・顧客成功・対応要員を同時に採用している。",
  career: "サイバーセキュリティ、危機対応、保険・販売パートナー、経営・IT部門の判断を、事故前後の一つの運用へ束ねる経験。",
  globalHeadcount: "51〜200人規模（LinkedIn会社ページの公開レンジ）", japanPresence: "Blackpanda Japan株式会社。東京拠点と日本の公式求人4件を確認", japanSince: "2022年にBlackpanda Japan株式会社を設立",
  customer: { company: "シンガポールの小売グループ（匿名）", outcome: "ギフトカード不正をIR-1で調査し、攻撃経路の把握と封じ込めを支援したと会社公式事例で紹介。顧客名と定量成果は非公開。" },
  facts: [["創業","2015年","アジアでサイバー緊急対応事業を開始。"],["日本法人","2022年","Blackpanda Japan株式会社を設立。"],["対応","24時間365日","定額契約から緊急対応へ接続。"],["日本協業","SB C&S","IR-1の国内展開で協業。"],["国内拠点","東京","大手町の連絡先を会社公式に掲載。"],["日本求人","4件","営業、顧客成功、インシデント対応。"]],
  products: [["IR-1","平時の準備と緊急インシデント対応を定額契約で提供する。","https://www.blackpanda.com/jp/ir-1"],["Compromise Assessment","侵害の兆候を調べ、対応の優先順位を示す。","https://www.blackpanda.com/jp/"],["Cyber Insurance","対応サービスと保険を組み合わせ、事故時の費用と初動を設計する。","https://www.blackpanda.com/jp/"]],
  competitors: "Mandiant、CrowdStrike Services、Palo Alto Networks Unit 42、国内のDFIR・MSSP、サイバー保険付帯サービス",
  leader: ["Gene Yu","Founder and Group Chief Executive Officer","https://www.blackpanda.com/jp/about-us/our-team"], local: ["Masaki Hiraoka","Representative, Blackpanda Japan","https://www.blackpanda.com/jp/blog/blackpanda-japan-sb-c-s-partnership"],
  work: ["未確認","Japan / Tokyo","職種別の出社頻度は未確認","完全リモートの明記なし","待機、夜間対応、出張、担当地域を職種別に確認"],
}, checkedAt);
blackpanda.sources.push(
  { id: "blackpanda-japan-company", label: "Blackpanda Japan legal and contact information", url: "https://www.blackpanda.com/jp/legal", kind: "企業公式", scope: "日本法人・東京所在地", checkedAt },
  { id: "blackpanda-japan-careers", label: "Blackpanda Careers", url: "https://blackpanda.bamboohr.com/careers", kind: "企業公式", scope: "日本求人4件", checkedAt },
  { id: "blackpanda-japan-partner", label: "Blackpanda Japan and SB C&S partnership", url: "https://www.blackpanda.com/jp/blog/blackpanda-japan-sb-c-s-partnership", kind: "企業公式", scope: "日本法人設立・国内協業", checkedAt },
  { id: "gbiz-headcount-blackpanda", label: "gBizINFO Blackpanda Japan法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の掲載状況", checkedAt },
);
blackpanda.companyStats.japanOffice = { value: "東京都千代田区大手町", detail: "会社公式の日本語連絡先に東京拠点を掲載。", sourceId: "blackpanda-japan-company" };
blackpanda.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と4求人は確認できるが、gBizINFOで制度対象外を含む総在籍人数を確認できず、0人とは扱わない。", sourceId: "gbiz-headcount-blackpanda" };

const streamhub = buildDailyCompanyIntelligence({
  slug: "streamhub", name: "Streamhub", jobConfirmed: true,
  jobUrl: "https://streamhub.breezy.hr/", officialUrl: "https://streamhub.co.uk/",
  customersUrl: "https://streamhub.co.uk/streamhub-and-video-research-ltd-launch-cross-broadcaster-data-platform/", financeUrl: "https://streamhub.co.uk/about-us/",
  problem: "放送局、動画配信、広告、会員サービスに視聴データが分散すると、どのコンテンツが誰を動かし、広告・加入・継続へつながったかを横断して判断しにくい課題がある。",
  origin: "2014年にロンドンで創業。当初は動画事業向けのGoogle Analyticsのような計測を目指し、放送局や調査会社との共同開発を通じて横断データ基盤へ広げた。",
  externalNeed: "視聴が放送、見逃し配信、複数端末へ分散し、第三者Cookieにも依存しにくくなる中、媒体社は自社データで番組、広告、会員施策の価値を説明する必要がある。",
  solution: "動画視聴、会員、広告等のデータを統合し、利用者、コンテンツ、配信面、収益の関係を分析・活用できる基盤を提供する。",
  selection: "汎用アクセス解析や個別集計と比べ、放送・動画固有のデータモデル、複数媒体の横断計測、ID・広告データの統合、業界内の運用実績で比較する。",
  growth: "会社公式は日本の放送局での利用を中核実績として案内し、東京オフィスを運営。現行求人は全社20〜50人規模と記載し、東京で2職種を募集する。",
  role: "Account Manager / Business Developmentが新規・既存顧客の商用成果を持ち、Technical Account Managerがデータ・API・導入・拡大を支える。",
  organization: "ロンドンと東京に拠点を置く小規模組織。会社公式求人は全社20〜50人規模と記載するが、日本の在籍人数と法人名は未確認。",
  career: "放送・動画、広告、会員、データ処理・APIを、顧客の編成・収益・利用継続の判断へつなぐ経験。",
  globalHeadcount: "20〜50人（会社公式求人のCompany Size）", japanPresence: "東京オフィスと東京勤務の公式求人2件を確認。日本法人名・国内在籍人数は未確認", japanSince: "東京オフィスの開設時期は未確認",
  customer: { company: "日本の放送局・広告会社", outcome: "2019年にVideo Researchと放送局横断の動画データ基盤catch-anを開始し、日本の放送局・広告会社で利用されていると会社公式が説明。定量成果は未確認。" },
  facts: [["創業","2014年","ロンドンで創業。"],["企業規模","20〜50人","会社公式求人。"],["日本拠点","東京","城山トラストタワーの住所を会社公式に掲載。"],["日本向け基盤","catch-an","放送局横断の動画データ基盤。"],["日本顧客","放送局・広告会社","会社公式の利用説明。"],["日本求人","2件","営業開拓と技術顧客支援。"]],
  products: [["Streamhub Audience Analytics","動画視聴と利用者データを統合し、コンテンツと事業成果を分析する。","https://streamhub.co.uk/"],["catch-an","日本の放送局横断で動画視聴データを分析・活用する。","https://streamhub.co.uk/streamhub-and-video-research-ltd-launch-cross-broadcaster-data-platform/"],["Data Integration","APIやデータ処理を通じて視聴、会員、広告データをつなぐ。","https://streamhub.co.uk/"]],
  competitors: "Google Analytics、Adobe Analytics、Conviva、NPAW、放送局・配信事業者の内製データ基盤",
  leader: ["Aki Tsuchiya","Founder and Chief Executive Officer","https://streamhub.co.uk/about-us/"], local: ["未確認","Japan Leadership","https://streamhub.co.uk/"],
  work: ["ハイブリッド","Tokyo","週3日出社","完全リモートではない","顧客訪問、海外連携、出社曜日、時間帯を選考で確認"],
}, checkedAt);
streamhub.sources.push(
  { id: "streamhub-tokyo-office", label: "Streamhub contact", url: "https://streamhub.co.uk/contact-us/", kind: "企業公式", scope: "東京オフィス所在地", checkedAt },
  { id: "streamhub-japan-careers", label: "Streamhub Careers", url: "https://streamhub.breezy.hr/", kind: "企業公式", scope: "東京求人2件・全社規模", checkedAt },
  { id: "streamhub-catchan", label: "Streamhub and Video Research launch catch-an", url: "https://streamhub.co.uk/streamhub-and-video-research-ltd-launch-cross-broadcaster-data-platform/", kind: "企業公式", scope: "日本の放送局横断データ基盤", checkedAt },
  { id: "gbiz-headcount-streamhub", label: "gBizINFO Streamhub法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の掲載状況", checkedAt },
);
streamhub.companyStats.japanOffice = { value: "東京都港区虎ノ門4-3-1", detail: "城山トラストタワー。会社公式の連絡先。", sourceId: "streamhub-tokyo-office" };
streamhub.companyStats.japanHeadcount = { value: "掲載なし", detail: "東京拠点と2求人は確認できるが、gBizINFOで対象法人と被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-streamhub" };

const solace = buildDailyCompanyIntelligence({
  slug: "solace", name: "Solace", jobConfirmed: true,
  jobUrl: "https://solace.com/careers/", officialUrl: "https://solace.com/company/",
  customersUrl: "https://solace.com/customer-stories/", financeUrl: "https://solace.com/company/",
  problem: "企業のアプリ、クラウド、機器、データ基盤、AIエージェントが増えるほど、情報の到着遅延、接続の個別実装、障害範囲、統制が複雑になる課題がある。",
  origin: "2001年にカナダのオタワで創業。企業の大量メッセージを低遅延かつ高信頼に届ける専用技術から、クラウドとオンプレミスをまたぐイベント駆動基盤へ広げた。",
  externalNeed: "生成AI・自動化が意思決定へ入るほど、古いデータを後から集めるだけでなく、権限と品質を保ちながら出来事をリアルタイムに届ける必要がある。",
  solution: "イベントブローカーと管理サービスをEvent Meshとして提供し、アプリ、クラウド、機器、AIエージェント間のデータをリアルタイムにつなぐ。",
  selection: "個別API、キュー、ストリーミング製品の寄せ集めと比べ、異種環境の接続、配信保証、運用可視化、イベントの再利用、世界規模の分散運用で比較する。",
  growth: "会社公式は大企業のリアルタイムデータ基盤を中核にし、2026年はエージェント型AIを需要要因として発信。日本・韓国市場専任の初のSDRをシンガポールで募集する。",
  role: "Sales Development Representativeが日本・韓国企業を開拓し、見込み顧客を見極めて地域営業との商談を作る。",
  organization: "日本法人、国内常設拠点、国内雇用は未確認。シンガポールのAPAC SDR拠点から日本・韓国を開拓する求人を確認した。",
  career: "リアルタイムデータ、イベント駆動、企業向けAI基盤を、日韓英の3言語で市場開拓する経験。",
  globalHeadcount: "501〜1,000人規模（外部公開レンジ）", japanPresence: "日本法人・常設拠点・国内求人は未確認。シンガポールで日本・韓国市場専任の初のSDR求人を確認", japanSince: "日本向け事業の開始時期は未確認",
  customer: { company: "Bosch、Heineken、PSA Singapore、United Airlines等", outcome: "アプリ、機器、クラウド間でリアルタイムにデータを届ける基盤として利用していると会社公式が紹介。日本の社名入り事例と定量成果は未確認。" },
  facts: [["創業","2001年","カナダのオタワで創業。"],["事業","リアルタイムデータ","Event Meshを提供。"],["利用企業","大企業中心","Bosch、Heineken等を会社公式が掲載。"],["地域拠点","シンガポール","APACの営業開拓拠点。"],["日本体制","未確認","法人・常設拠点・国内雇用は未確認。"],["日本市場求人","1件","日本・韓国専任の初のSDR。"]],
  products: [["PubSub+ Platform","イベントの配信、管理、可視化を一つの基盤で提供する。","https://solace.com/products/platform/"],["Event Mesh","クラウド、拠点、アプリをまたいで出来事をリアルタイムに届ける。","https://solace.com/what-is-an-event-mesh/"],["Agent Mesh","AIエージェントと企業データ・業務をイベント駆動で接続する。","https://solace.com/solutions/ai/"]],
  competitors: "Confluent、IBM MQ、TIBCO、AWS EventBridge、Azure Event Grid、個別API・メッセージングの内製",
  leader: ["Denis King","President and Chief Executive Officer","https://solace.com/company/leadership/"], local: ["未確認","Japan Leadership","https://solace.com/careers/"],
  work: ["未確認","シンガポール","職種別の出社頻度は未確認","日本からの完全リモート求人ではない","日本・韓国の担当比率、出張、勤務時間、将来の国内採用を確認"],
  preEntry: {
    verdict: "進出可能性は中程度。日本企業での事業実績を示唆し、日本・韓国市場専任の初の営業開拓を置く一方、日本法人・拠点・国内雇用は未確認。",
    signal: "シンガポールのAPAC SDR拠点で、日本・韓国市場だけを担当する初の専任SDR求人を公開。",
    hurdle: "国内の契約・請求・導入支援・保守・日本語窓口と、日本専任の営業責任者を確認できない。",
    conditions: ["日本での契約・請求・保守の主体を明確にする。","日本語で設計・導入・障害対応を支える技術体制を置く。","日本企業の公開事例と定量成果を示す。","シンガポールの開拓を国内の営業・顧客成功採用へつなげる。"],
    watches: ["日本法人・常設拠点","日本勤務の営業・技術求人","日本企業の社名入り事例","国内パートナー","日本語の契約・支援体制","専任SDR採用後の組織拡張"],
  },
}, checkedAt);
solace.sources.push(
  { id: "solace-careers", label: "Solace Careers", url: "https://solace.com/careers/", kind: "企業公式", scope: "会社公式採用導線・働き方", checkedAt },
  { id: "solace-japan-korea-job", label: "Solace Japan and Korea SDR listing", url: "https://techjobfinder.investottawa.ca/companies/solace/jobs/92935086-sales-development-representative", kind: "外部集計", scope: "日本・韓国市場専任の初のSDR求人", checkedAt },
  { id: "solace-company", label: "Solace company information", url: "https://solace.com/company/", kind: "企業公式", scope: "創業・事業・本社", checkedAt },
  { id: "gbiz-headcount-solace", label: "gBizINFO Solace法人確認", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報と被保険者数の確認", checkedAt },
);
solace.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOで日本法人・事業所情報と被保険者数を特定できず、制度対象外を含む想定従業員数を0人とは扱わない。", sourceId: "gbiz-headcount-solace" };

for (const intelligence of [blackpanda, streamhub, solace]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export const daily20261007IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { blackpanda, streamhub, solace };
