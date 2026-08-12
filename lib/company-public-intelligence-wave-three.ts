import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence } from "@/lib/company-public-intelligence-wave-two";

const nexthinkIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "nexthink", name: "Nexthink", jobUrl: "https://jobs.smartrecruiters.com/Nexthink/744000103694809-enterprise-account-executive", officialUrl: "https://nexthink.com/ja/press/nexthink-launches-new-japanese-entity", customersUrl: "https://nexthink.com/ja/customers/customer-stories", externalUrl: "https://www.digital.go.jp/resources/standard_guidelines", financeUrl: "https://nexthink.com/ja/press/nexthink-launches-new-japanese-entity",
  salesSnapshot: "Nexthinkは、CIO・デジタルワークプレイス・IT運用部門に、端末・アプリ・ネットワーク上の従業員体験を観測し、問題を予防・自動修復するDEX基盤を提供する会社。顧客が抱えるのは「問い合わせが来るまで不具合を把握できない」「SaaSやAIへの投資が実際に使われているか測れない」「端末ごとの差異が大きくService Deskの工数が膨らむ」という3つの課題。IT運用の可視化から入り、従業員生産性、AI adoption、ソフトウェア費用最適化、Service Desk自動化へ提案を広げられる点が営業としての面白さ。",
  growthSummary: "1,200社超、2,000万台超の端末、約1,200人のグローバル基盤を持ち、2025年6月に日本法人を設立。日本語製品と東京拠点を同時に立ち上げ、partnerと導入支援を拡張する初期局面。", ipoSummary: "非公開企業。日本単体の売上、顧客数、ARR、IPO計画は公表されていない。",
  milestones: [
    { year: "2004", label: "創業", detail: "Lausanne発でendpoint analyticsとDigital Employee Experience領域を開拓。", source: "company" },
    { year: "2024", label: "世界展開", detail: "約1,200人、1,200社超、2,000万台超の端末を支える規模を会社発表。", source: "finance" },
    { year: "2025.06", label: "日本法人設立", detail: "Nexthink合同会社を東京都港区に設立。", source: "company" },
    { year: "2025.07", label: "日本で本格営業", detail: "日本語platform、公式日本語site、国内supportを同時に開始。", source: "company" },
    { year: "2026", label: "founding営業採用", detail: "Japan enterprise市場を作るEnterprise Account Executiveを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "大規模な顧客事例に共通するのは、端末の稼働率ではなく、従業員が実際に感じる遅延・障害・application adoptionを把握し、ticket発生前に直したいという課題。Service Desk削減と生産性を同じ指標で扱う必要がある。" },
    { title: "製品の成り立ちから見る課題", body: "endpointの状態を観測するanalyticsから、employee feedback、remote action、automation、AI adoptionへ拡張した。monitoringだけでは改善が閉じず、原因特定から修復・効果測定まで一続きにすることが設計思想。" },
    { title: "外部環境の要求から見る課題", body: "hybrid work、SaaS乱立、Windows更新、生成AI導入でdigital workplaceは複雑化する一方、経営はIT支出のROIと従業員生産性を求める。台数管理ではなく体験とbusiness impactを説明できる運用が必要。" },
  ],
  narrative: [
    { label: "背景", body: "端末・SaaS・networkが増え、IT部門は個々の稼働状態を見ても従業員の業務停止を把握できない。" },
    { label: "課題", body: "問い合わせ後の事後対応に人手を使い、同じ障害が再発し、導入したSaaSやAIの利用定着と投資効果も説明できない。" },
    { label: "解決策", body: "限定部門で端末telemetry、employee feedback、ticket、application usageを統合し、検知から自動修復までの時間と削減ticketを測る。" },
    { label: "選定の理由", body: "endpoint管理・ITSM・監視製品との比較で、実際のemployee experienceと修復automationを同じDEX data layerで扱える場合に選ばれる。" },
  ],
  openingHook: "ITへの問い合わせが来る前に、どの従業員が何のdigital frictionで何分の生産性を失っているか説明できますか。", valueHypothesis: "対象部門でticket件数、平均解決時間、起動・応答時間、SaaS利用率、失われた時間をbefore/afterで測る。", objection: "既存の端末管理、監視、ITSMで十分。", reframe: "機器が正常かではなく、従業員が仕事を完了できているか、問題を予防・自動修復し投資効果まで示せるかで比較する。",
  facts: [
    { label: "グローバル社員", value: "約1,200人", detail: "2024年時点の会社発表。", source: "finance" },
    { label: "顧客", value: "1,200社超", detail: "世界のenterprise顧客。", source: "company" },
    { label: "対象端末", value: "2,000万台超", detail: "platformが解析・管理する端末規模。", source: "company" },
    { label: "日本法人", value: "2025年6月", detail: "東京都港区、Japan Presidentは萩野武志氏。", source: "company" },
    { label: "日本語対応", value: "製品・site・support", detail: "法人設立に合わせ提供開始。", source: "company" },
    { label: "日本求人", value: "Enterprise AE", detail: "founding teamとして公式求人を確認。", source: "job" },
  ],
  customers: [
    { company: "大規模global enterprise", products: "Nexthink Infinity", outcome: "端末・application・employee feedbackを一つの体験指標へ統合。", implication: "CIOとIT運用の双方へDEXを共通KPIとして提案できる。" },
    { company: "Service Desk運用企業", products: "Experience / Act", outcome: "問題検知とremote actionを組み合わせ、ticket発生前の対応を支援。", implication: "licenseではなく回避ticketと回復時間でROIを作る。" },
    { company: "AI・SaaS導入企業", products: "Adopt / AI Drive", outcome: "利用実態とfrictionを観測し、adoption施策の効果を測定。", implication: "IT運用からCIOのAI投資効果へ案件を上げられる。" },
  ],
  externalSignals: [
    { label: "政府情報system", value: "利用者中心", detail: "デジタル庁の標準ガイドラインは利用者視点と継続的改善を重視する。", caveat: "Nexthinkの導入義務や適合性を示すものではない。" },
    { label: "AI投資", value: "効果測定が課題", detail: "生成AI導入ではlicense配布後の利用・業務効果を測るoperating modelが必要。", caveat: "効果は顧客の対象業務とbaselineで異なる。" },
  ],
  role: "日本enterprise市場でnew logoを開拓し、executive discovery、partner、pre-sales、professional servicesと戦略からcloseまで担うEnterprise AE。", organization: "Japan President直下のlocal teamとglobal専門部門をつなぐ市場立ち上げ期。", careerValue: "DEXというcategory creation、CIO向けvalue selling、local partner形成を同時に経験できる。", globalHeadcount: "約1,200人", japanPresence: "Nexthink合同会社 / 東京都港区", japanSince: "2025年6月設立、7月本格営業開始",
  solutions: [
    { name: "Nexthink Infinity", valueProp: "端末・application・network・employee feedbackを統合しDEXを可視化。", url: "https://nexthink.com/ja/platform", competitors: "Lakeside、ControlUp、Microsoft Intune、IT monitoring。", differentiation: "experience scoringから診断・修復までを統合。" },
    { name: "Nexthink Act", valueProp: "検知したfrictionにremote actionとautomationで対応。", url: "https://nexthink.com/ja/platform", competitors: "endpoint management、RPA、ITSM automation。", differentiation: "同じDEX telemetryをtriggerと効果測定に使う。" },
    { name: "AI Drive / Adopt", valueProp: "AI・SaaSの利用定着、friction、投資効果を観測。", url: "https://nexthink.com/ja/press/ai-drive-closing-ai-value-gap", competitors: "digital adoption platform、SaaS management、survey。", differentiation: "申告ではなくendpoint上の実利用と体験を結ぶ。" },
  ],
  fitTags: ["Enterprise", "CIO", "DEX", "Japan launch", "IT Operations", "AI adoption", "Partner", "category creation"], comparisons: [
    { arena: "DEX", companies: ["Nexthink", "Lakeside", "ControlUp"], why: "可視化、employee feedback、automationの深さ" },
    { arena: "Endpoint / ITSM", companies: ["Nexthink", "Microsoft", "ServiceNow"], why: "device管理・workflowとexperience改善の境界" },
    { arena: "Digital adoption", companies: ["Nexthink", "WalkMe", "Whatfix"], why: "application内支援とendpoint起点の体験測定" },
  ],
});

const mendixIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "mendix", name: "Mendix", jobUrl: "https://jobs.lever.co/mendix/e6a4788f-a823-412f-bde9-44a926043011", officialUrl: "https://www.mendix.com/ja/company/", customersUrl: "https://www.mendix.com/ja/customer-stories/", externalUrl: "https://www.meti.go.jp/policy/it_policy/jinzai/index.html", financeUrl: "https://www.mendix.com/ja/company/",
  salesSnapshot: "Mendixは、CIO・application開発責任者・業務部門に、business userとdeveloperが共同でenterprise applicationを短期間に作るlow-code platformを提供する会社。顧客が抱えるのは「開発人材不足でbacklogが減らない」「legacy刷新が大規模project化して成果が遅い」「部門ごとのno-codeがshadow ITになり再利用・統制できない」という3つの課題。単体applicationから入り、開発標準化、core system周辺刷新、factory・field operations、AI agentを含む全社portfolioへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2005年創業、2018年にSiemens傘下へ入り、1,100人超の組織と多数のglobal顧客事例を持つ。日本ではTokyoのEnterprise Account Executiveを採用し、channelを含むAPAC営業を拡張。", ipoSummary: "Siemens傘下の非上場事業。Mendix単体および日本単体の売上、ARR、利益は公表されていない。",
  milestones: [
    { year: "2005", label: "創業", detail: "businessとITが共同でapplicationを作るmodel-driven platformとして開始。", source: "company" },
    { year: "2018", label: "Siemensが買収", detail: "industrial softwareとdigital enterprise戦略へ統合。", source: "finance" },
    { year: "2020", label: "1,100人超", detail: "会社の成長節目として従業員規模を公表。", source: "finance" },
    { year: "2024", label: "AI・automation拡張", detail: "low-codeにAI-assisted developmentとintelligent automationを統合。", source: "company" },
    { year: "2026", label: "Japan enterprise営業", detail: "TokyoでSpecialized Account Executiveを募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Jabil等の事例は、単一applicationの高速開発だけでなく、複数拠点で再利用できるapplication factoryと現場改善を狙う。backlog削減、標準化、保守性を同時に満たすことが共通課題。" },
    { title: "製品の成り立ちから見る課題", body: "visual modelingで長いcoding工程を抽象化し、business userとdeveloperを同じdevelopment lifecycleへ置く発想が起点。速度だけでなく共同設計、再利用、deployment、governanceの断絶を解く。" },
    { title: "外部環境の要求から見る課題", body: "国内ではIT人材不足とlegacy systemの刷新が同時進行する一方、生成AI・no-codeで作り手だけ増やすとshadow ITが拡大する。限られたdeveloperを高難度領域へ寄せ、部門開発を統制する基盤が必要。" },
  ],
  narrative: [
    { label: "背景", body: "業務部門の改善要求は増えるが、中央ITのdeveloperと予算は増えずbacklogが積み上がる。" },
    { label: "課題", body: "個別開発は遅く高価、部門no-codeは管理外になり、PoCがproduction・全社再利用へ進まない。" },
    { label: "解決策", body: "一つの優先業務を対象にbusinessとITのfusion teamを作り、開発日数、変更lead time、再利用率、運用負荷を測る。" },
    { label: "選定の理由", body: "Power Platform、OutSystems、ServiceNow、内製開発との比較で、複雑なenterprise applicationとmulti-cloud運用を共通governance下で拡張できる場合に選ばれる。" },
  ],
  openingHook: "業務改善ideaが承認されてからproductionで使われるまで、中央ITのbacklogに何カ月滞留していますか。", valueHypothesis: "対象workflowで開発期間、変更lead time、外注費、reusable component、active user、障害件数を測る。", objection: "Microsoft Power Platformか既存開発基盤で十分。", reframe: "最初の画面を速く作れるかではなく、複雑化した後もbusinessとITが共同で変更し、全社で再利用・監査・運用できるかで比較する。",
  facts: [
    { label: "創業", value: "2005年", detail: "Rotterdam発のlow-code platform。", source: "company" },
    { label: "親会社", value: "Siemens", detail: "2018年に買収。", source: "finance" },
    { label: "社員規模", value: "1,100人超", detail: "会社が公表した成長節目。現在の厳密値は非公開。", source: "finance" },
    { label: "顧客事例", value: "300件超掲載", detail: "業界・業務別の公開事例群。", source: "customers" },
    { label: "販売model", value: "Direct + Channel", detail: "Japan求人でpartnerとのpipeline形成を明記。", source: "job" },
    { label: "日本求人", value: "Enterprise AE", detail: "Tokyo on-siteの公式求人を確認。", source: "job" },
  ],
  customers: [
    { company: "Jabil", products: "Mendix Platform", outcome: "100件のapplicationを構築しglobal site operationsを改善したと会社事例で紹介。", implication: "一つのappではなくfactory型の拡張価値。" },
    { company: "Zurich Insurance", products: "Mendix Platform", outcome: "customer・employee向けapplicationの迅速な提供を公開事例で紹介。", implication: "規制業界でもgovernanceを含む提案が必要。" },
    { company: "Siemens", products: "Mendix / Industrial ecosystem", outcome: "業務・製造現場とenterprise softwareをつなぐuse caseを展開。", implication: "IT部門からoperationsへ案件を広げられる。" },
  ],
  externalSignals: [
    { label: "IT人材", value: "不足が継続", detail: "経済産業省はdigital人材育成と構造的不足を政策課題に置く。", caveat: "人材不足だけでlow-codeの投資効果は保証されない。" },
    { label: "内製化", value: "統制との両立", detail: "業務部門を開発へ参加させるほどarchitecture、security、運用責任が重要になる。", caveat: "最適な分担は企業のskillとsystem landscapeで異なる。" },
  ],
  role: "Japan enterprise顧客・prospectへexecutive relationshipを作り、channel partnerとpipelineを形成し、technical/business value、procurement、closeまで統括するEnterprise Account Executive。", organization: "Siemensの資本・industrial ecosystemと、Mendix固有のAPAC GTMをつなぐmatrix組織。", careerValue: "low-codeのtool saleではなく、application portfolio、内製化、partner、enterprise transformationを売る経験になる。", globalHeadcount: "1,100人超の公表実績", japanPresence: "Tokyoの営業・partner体制", japanSince: "日本語事業とTokyo採用を継続、設立年は一次情報で未確認",
  solutions: [
    { name: "Mendix Platform", valueProp: "visual modelingでweb・mobile enterprise applicationを共同開発。", url: "https://www.mendix.com/ja/platform/", competitors: "OutSystems、Microsoft Power Platform、Appian。", differentiation: "businessとprofessional developerを同じlifecycleへ置く。" },
    { name: "Mendix for Enterprise", valueProp: "portfolio、governance、reusable component、multi-cloud deploymentを管理。", url: "https://www.mendix.com/ja/enterprise-software-development/", competitors: "内製framework、cloud PaaS、ServiceNow。", differentiation: "開発速度とenterprise運用を一つのplatformで扱う。" },
    { name: "Mendix AI", valueProp: "AI-assisted developmentとAI-enabled applicationをlow-codeへ統合。", url: "https://www.mendix.com/platform/ai/", competitors: "Copilot Studio、AI coding、agent platform。", differentiation: "生成からdeployment・governanceまで既存application lifecycleに載せる。" },
  ],
  fitTags: ["Enterprise", "Low-code", "CIO", "Partner", "Application Modernization", "Siemens", "Manufacturing", "APAC"], comparisons: [
    { arena: "Enterprise low-code", companies: ["Mendix", "OutSystems", "Microsoft Power Platform"], why: "複雑性、citizen development、governanceの比較" },
    { arena: "Workflow platform", companies: ["Mendix", "ServiceNow", "Appian"], why: "用途の自由度と業務templateの比較" },
    { arena: "Custom development", companies: ["Mendix", "SIer", "cloud native"], why: "速度、保守、lock-in、内製skillの比較" },
  ],
});

const cognitionIntelligence: CompanyPublicIntelligence = buildIntelligence({
  slug: "cognition", name: "Cognition", jobUrl: "https://jobs.ashbyhq.com/cognition/0aabb166-3e97-437b-ab84-b04fe20dd426", officialUrl: "https://cognition.com/blog/launching-in-japan", customersUrl: "https://cognition.com/customers", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", financeUrl: "https://cognition.com/blog/series-d",
  salesSnapshot: "Cognitionは、CTO・VP Engineering・開発組織に、自律型AI software engineerのDevinとAI-native IDEのWindsurfを提供する会社。顧客が抱えるのは「legacy・backlogに人材が固定される」「AI codingが個人補完に留まりteamのdeliveryへつながらない」「生成codeの品質・権限・監査をenterprise標準にできない」という3つの課題。developer productivityから入り、application modernization、運用automation、AI-native SDLC、全社のengineering capacityへ提案を広げられる点が営業としての面白さ。",
  growthSummary: "2026年にrun-rate revenue 4.92億ドル、評価額260億ドル、累計調達10億ドル超を会社発表。4月に日本をAsia初の市場として正式launchし、Japan Presidentの下でsales・engineering・partnershipを拡大。", ipoSummary: "非公開企業。IPO計画、日本売上、Japan ARR、国内顧客数は公表されていない。",
  milestones: [
    { year: "2023", label: "創業", detail: "end-to-end software agentの研究開発を開始。", source: "company" },
    { year: "2024", label: "Devin公開", detail: "自律型AI software engineerとしてenterprise導入を開始。", source: "company" },
    { year: "2025", label: "Windsurf統合", detail: "AI-native IDE事業を加え、agentとIDEを一つのvisionへ統合。", source: "finance" },
    { year: "2026.04", label: "Cognition Japan", detail: "Asia初の展開として日本launch、Japan President就任。", source: "company" },
    { year: "2026.05", label: "Series D", detail: "評価額260億ドル、run-rate revenue 4.92億ドルを発表。", source: "finance" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "DeNAは新規service、code quality、定型workflowで効率を2倍超にしたと会社発表。Mizuho Securitiesはpartnerを介し大規模金融で導入。共通するのは、code補完ではなく完了するengineering taskを増やす課題。" },
    { title: "製品の成り立ちから見る課題", body: "benchmark上のcode生成ではなく、repositoryを読み、計画し、toolを使い、実装・testまで長時間のtaskを完遂するagentとしてDevinを設計。Windsurf統合でhuman-in-the-loopのIDE体験も補完する。" },
    { title: "外部環境の要求から見る課題", body: "国内のdeveloper不足とlegacy modernization圧力は強い一方、AI生成codeにはsecurity、IP、data access、review、説明責任が残る。個人toolの利用からenterprise SDLCへ上げるgovernanceが必要。" },
  ],
  narrative: [
    { label: "背景", body: "開発需要が増える一方、熟練developerはlegacy保守・移行・定型taskに時間を取られる。" },
    { label: "課題", body: "AI codingを配布しても補完利用に留まり、完了task・release頻度・backlogへのbusiness impactを説明できない。" },
    { label: "解決策", body: "権限を限定したrepositoryとtask群でDevinを導入し、成功率、review時間、cycle time、再作業、security findingを測る。" },
    { label: "選定の理由", body: "Copilot、Cursor、Claude Code、内製agentとの比較で、複数stepのtask完遂、managed environment、enterprise support、実運用成果が優れる場合に選ばれる。" },
  ],
  openingHook: "優先度は高いのにdeveloperが着手できず、四半期をまたいでいるengineering taskは何件ありますか。", valueHypothesis: "選定したtask群でcompletion rate、cycle time、review工数、deploy頻度、defect、backlog削減を測る。", objection: "AI coding assistantをすでに全developerへ配布している。", reframe: "seat adoptionではなく、agentがどの種類のtaskをどこまで完遂し、人のreviewを含むdelivery capacityを何%増やしたかで比較する。",
  facts: [
    { label: "日本launch", value: "2026年4月", detail: "Asia初の市場として正式発表。", source: "company" },
    { label: "Japan President", value: "正井拓己氏", detail: "IBM、Pivotal、Microsoft、Workday、Datadog Japan等の経験。", source: "company" },
    { label: "run-rate revenue", value: "4.92億ドル", detail: "2026年5月の会社発表。", source: "finance" },
    { label: "評価額", value: "260億ドル", detail: "2026年Series D時点。", source: "finance" },
    { label: "累計調達", value: "10億ドル超", detail: "2026年Series D発表時点。", source: "finance" },
    { label: "日本求人", value: "Account Directorほか", detail: "TokyoでGTM・partnership等を採用。", source: "job" },
  ],
  customers: [
    { company: "DeNA", products: "Devin", outcome: "複数engineering機能でoperational efficiencyを2倍超にしたと会社発表。", implication: "単発codingではなく複数workflowへexpandできる国内proof。" },
    { company: "Mizuho Securities", products: "Devin", outcome: "ULS Consultingとの連携で大規模金融機関へ導入したと会社発表。", implication: "regulated enterpriseではpartner・governanceが販売条件。" },
    { company: "Infosys", products: "Devin / Windsurf", outcome: "global enterpriseへのAI software engineering変革で提携。", implication: "direct saleだけでなくlarge SI経由のscale。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "risk-based管理", detail: "AI事業者ガイドラインは便益とriskの両面、透明性、accountabilityを求める。", caveat: "個別製品の適合性や法的結論を示さない。" },
    { label: "legacy modernization", value: "国内需要が大きい", detail: "高stakes systemの保守・移行にAIを使う余地がある。", caveat: "成功率はcodebase、test、権限、task設計で大きく変わる。" },
  ],
  role: "Tokyoでenterprise顧客を開拓し、executive・engineering leaderとAI software engineeringのbusiness caseを作り、technical team・partnerとpilotから拡張を担うAccount Director。", organization: "Japan Presidentの下でsales、engineering、partnershipを同時に組成するcountry build初期。", careerValue: "frontier AI、developer tool、large enterprise transformation、Japan launchを同時に経験できる一方、product変化と高い期待値への適応が必要。", globalHeadcount: "201〜500人規模の公開集計", japanPresence: "Cognition Japan / Tokyoで専任team構築", japanSince: "2026年4月正式launch",
  solutions: [
    { name: "Devin", valueProp: "repositoryを理解し複数stepのengineering taskを計画・実行するAI software engineer。", url: "https://devin.ai/", competitors: "Claude Code、OpenAI Codex、GitHub Copilot agent。", differentiation: "isolated environmentと長時間taskのend-to-end実行。" },
    { name: "Windsurf", valueProp: "developerとAI agentがIDE内で共同作業するAI-native development環境。", url: "https://windsurf.com/", competitors: "Cursor、VS Code + Copilot、JetBrains AI。", differentiation: "IDE体験とDevinのagentic executionを同じ会社で提供。" },
    { name: "Enterprise AI Engineering", valueProp: "管理、security、deployment、partner支援を含めAI-native SDLCを全社展開。", url: "https://cognition.com/enterprise", competitors: "hyperscaler AI、SIer内製、AI coding suite。", differentiation: "model・agent・IDE・deployed engineerを一つのoutcomeに束ねる。" },
  ],
  fitTags: ["Enterprise AI", "Developer Tools", "Japan launch", "Account Director", "Engineering", "Partner", "Frontier AI", "Transformation"], comparisons: [
    { arena: "Coding agent", companies: ["Cognition", "Anthropic", "OpenAI", "GitHub"], why: "task完遂、environment、enterprise管理の比較" },
    { arena: "AI IDE", companies: ["Windsurf", "Cursor", "GitHub Copilot"], why: "developer workflowとagent連携" },
    { arena: "Enterprise delivery", companies: ["Cognition", "Accenture", "Infosys", "内製"], why: "tool導入と業務変革・governanceの境界" },
  ],
});

export const waveThreeIntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  nexthink: nexthinkIntelligence,
  mendix: mendixIntelligence,
  cognition: cognitionIntelligence,
};
