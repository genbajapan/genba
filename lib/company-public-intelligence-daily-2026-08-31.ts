import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-31";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.31";
  return intelligence;
}

const omnissaIntelligence = build({
  checkedAt,
  slug: "omnissa",
  name: "Omnissa",
  jobUrl: "https://www.omnissa.com/careers/",
  officialUrl: "https://www.omnissa.com/japan/",
  customersUrl: "https://www.omnissa.com/insights/news/Omnissa-Seven-Eleven-Japan/",
  externalUrl: "https://www.meti.go.jp/policy/netsecurity/mng_guide.html",
  financeUrl: "https://www.omnissa.com/insights/blog/unveiling-the-future-of-omnissa-at-omnissa-live/",
  salesSnapshot: "端末、仮想デスクトップ、アプリ、従業員体験が別々に運用され、IT負荷と利用者の摩擦が増える課題を解く。既存環境を尊重しながら管理と体験を一つのデジタルワーク基盤へ集め、運用の単純化と安全な働き方を両立する。",
  growthSummary: "旧VMwareのEnd-User Computing事業から独立。会社公式は世界4,000人、顧客26,000社、管理endpoint 3,400万台超、ARR 15億ドル超、成長・黒字と説明する。日本単体の売上・更新率は非公開。",
  ipoSummary: "KKRの支援を受ける非公開企業。IPO時期は公表せず、日本単体の売上・更新率・製品別構成も非公開。",
  milestones: [
    { year: "2003頃", label: "EUC製品群の起点", detail: "Workspace ONEとHorizonにつながる20年以上のデジタルワーク領域の実績。", source: "company" },
    { year: "2024.06", label: "日本法人設立", detail: "Omnissa Japan合同会社を設立。", source: "company" },
    { year: "2024", label: "Omnissa創業・独立", detail: "旧VMwareのEnd-User Computing事業から独立会社Omnissaとして始動。", source: "finance" },
    { year: "2025", label: "大規模国内展開", detail: "セブン‐イレブン・ジャパンの約21,000店舗・30万台超の端末管理をSaaSへ移行すると発表。", source: "company" },
    { year: "2026.08", label: "日本で10求人", detail: "営業、Partner、Solution、Professional Servicesの公式求人を確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "店舗・拠点・在宅へ端末とアプリが広がるほど、個別管理は更新、配布、問い合わせ、セキュリティ対応を複雑にする。ITは利用者の作業を止めずに一貫した管理へ移したい。" },
    { title: "製品の成り立ちから見る課題", body: "Workspace ONEの端末・アプリ管理とHorizonの仮想デスクトップを核に、従業員体験、分析、セキュリティを一つへ接続した。既存のEUC資産を捨てずに統合する設計が起点。" },
    { title: "外部環境の要求から見る課題", body: "働く場所、端末、SaaS、AI利用が増える一方、企業は脆弱性、権限、データ、監査、事業継続を説明する必要がある。端末単位の管理から利用者体験とリスクを横断した運用が必要になる。" },
  ],
  narrative: [
    { label: "背景", body: "拠点、在宅、店舗で端末・アプリ・仮想環境が分散し、更新と問い合わせが増える。" },
    { label: "課題", body: "複数製品の継ぎ足しは管理画面と担当を増やし、利用者体験とセキュリティを別々に最適化してしまう。" },
    { label: "解決策", body: "対象部門で端末登録、配布、更新、仮想利用、問い合わせ、体験、セキュリティeventを一つの運用へ集め、導入前後を比較する。" },
    { label: "選定の理由", body: "Microsoft、Citrix、Ivanti等との比較で、既存EUC資産の移行性、管理範囲、体験分析、security連携、運用工数に優位がある場合に選ぶ。" },
  ],
  openingHook: "端末・仮想デスクトップ・アプリを安全に使わせるため、ITは何個の管理画面と何時間の問い合わせ対応を抱えていますか。",
  valueHypothesis: "対象部門で端末登録時間、配布・更新成功率、問い合わせ、解決時間、利用体験、security event、管理tool数を導入前後で比較する。",
  objection: "Microsoftや既存のVDI・端末管理で十分で、独立後の製品を追加する理由が弱い。",
  reframe: "製品名ではなく、既存資産を壊さず端末・仮想環境・体験・securityをどこまで同じ運用へ集め、工数と利用者影響を減らせるかで比較する。",
  facts: [
    { label: "世界顧客", value: "26,000社", detail: "会社公式。", source: "company" },
    { label: "世界従業員", value: "4,000人", detail: "会社公式。", source: "finance" },
    { label: "ARR", value: "15億ドル超", detail: "会社公式発表。", source: "finance" },
    { label: "管理端末", value: "3,400万台超", detail: "会社公式発表。", source: "finance" },
    { label: "日本法人", value: "2024年6月設立", detail: "東京・丸の内の公式会社概要。", source: "company" },
    { label: "日本求人", value: "10件", detail: "公式Workday APIで当日確認。", source: "job" },
  ],
  customers: [
    { company: "セブン‐イレブン・ジャパン", products: "Omnissa SaaS / endpoint management", outcome: "約21,000店舗で使う30万台超の端末管理を2025年2月から順次SaaSへ移行。", implication: "分散した大規模店舗網の端末運用を標準化する例。" },
    { company: "J.フロント リテイリング", products: "Workspace ONE", outcome: "会社公式の日本顧客事例として掲載。公開ページで個別効果を確認した上で商談へ使う必要がある。", implication: "小売groupの端末・働き方運用の参照例。" },
    { company: "旭中央病院", products: "Horizon / Workspace ONE", outcome: "会社公式の日本顧客事例として掲載。医療現場の業務・端末要件との適合を確認できる。", implication: "可用性と安全性が重要な現場の参照例。" },
  ],
  externalSignals: [
    { label: "経営ガイドライン", value: "サイバー対策を経営課題へ", detail: "経産省のサイバーセキュリティ経営ガイドラインは経営責任、体制、委託先を含む対策を求める。", caveat: "特定の端末管理・VDI製品の導入を義務づけるものではない。" },
    { label: "hybrid work", value: "管理対象が分散", detail: "場所・端末・cloud利用が増えるほど、asset、権限、patch、体験を継続把握する必要がある。", caveat: "必要な統合範囲は既存環境と業務で異なる。" },
  ],
  role: "日本でStrategic AE、Partner Business Manager、Solution Consultant、Lighthouse Architect、Professional Servicesを同時採用し、開拓から技術選定、partner、導入までを拡張する。",
  organization: "Omnissa Japan合同会社と東京オフィスを公開。gBizINFOの事業所被保険者数は94人。職種別の人数・reporting line・支援比率は非公開。",
  careerValue: "大規模EUC、端末・仮想化、security、従業員体験、partnerを横断し、既存基盤の刷新を長期案件として進める経験。",
  globalHeadcount: "4,000人（会社公式）",
  japanPresence: "Omnissa Japan合同会社・東京オフィス。gBizINFO事業所被保険者数94人",
  japanSince: "2024年6月に日本法人設立。製品群は旧VMware時代から国内提供",
  solutions: [
    { name: "Workspace ONE", valueProp: "端末、アプリ、access、体験を統合管理する。", url: "https://www.omnissa.com/products/workspace-one/", competitors: "Microsoft Intune、Ivanti、Jamf。", differentiation: "複数OS・利用形態と既存環境を横断するEUC運用。" },
    { name: "Horizon", valueProp: "仮想desktopとapplicationをcloud・on-premisesへ提供する。", url: "https://www.omnissa.com/products/horizon-8/", competitors: "Citrix、Windows 365、Azure Virtual Desktop。", differentiation: "長年の大規模VDI運用とWorkspace ONEとの接続。" },
    { name: "Omnissa Intelligence / DEX", valueProp: "利用体験と運用dataから問題を見つけ、自動化する。", url: "https://www.omnissa.com/platform/", competitors: "Nexthink、Microsoft analytics、ServiceNow。", differentiation: "endpoint・workspaceの管理dataと体験改善を結ぶ。" },
  ],
  fitTags: ["Anchor", "Digital Workspace", "UEM", "VDI", "Enterprise", "Partner"],
  comparisons: [
    { arena: "endpoint管理", companies: ["Omnissa", "Microsoft", "Ivanti"], why: "OS範囲、既存環境、運用" },
    { arena: "仮想desktop", companies: ["Omnissa", "Citrix", "Microsoft"], why: "移行性、性能、cloud選択" },
    { arena: "従業員体験", companies: ["Omnissa", "Nexthink", "ServiceNow"], why: "観測、automation、問い合わせ削減" },
  ],
}, {
  slug: "omnissa", leaderName: "Shankar Iyer", leaderLabel: "CEO", leaderUrl: "https://www.omnissa.com/about-us/", localName: "竹下 雄輔", localLabel: "日本代表", localUrl: "https://www.omnissa.com/japan/",
  companyId: "omnissa-company", jobId: "omnissa-job", customersId: "omnissa-customers", externalId: "omnissa-external", financeId: "omnissa-finance",
  targets: ["CIO・情報システム責任者", "endpoint・VDI・security責任者", "店舗・現場のdigital workplace責任者"],
  heroSummary: "端末、仮想デスクトップ、アプリ、従業員体験が別々に運用される課題を解く。既存環境を生かして管理と体験を一つへ集め、IT工数と利用者の摩擦を減らしながら安全な働き方を広げる。",
  competitors: "Microsoft、Citrix、Ivanti、Jamf、Nexthink等との比較では、既存EUC資産の移行性、管理範囲、体験分析、security連携、総運用工数を見る。",
  feature: "Workspace ONE、Horizon、Intelligenceを通じ、端末・仮想環境・アプリ・体験・securityを同じdigital work基盤へ接続する。",
  advantage: "旧VMware事業の20年以上の運用資産と26,000顧客、3,400万台超のendpointを背景に、複雑な既存環境を段階移行できる。",
  benefit: "管理tool、配布・更新、問い合わせ、障害対応を減らし、場所や端末が変わっても利用者が安全に働ける状態を作る。",
  evidence: "セブン‐イレブン・ジャパンが約21,000店舗・30万台超の端末管理をOmnissaのSaaSへ移行。",
  marketVerdict: "日本法人と94人規模の事業所、複数の大規模顧客、10求人を確認。独立後の製品roadmapと既存顧客更新を新規統合案件へ変えられるかが焦点。",
  marketParagraphs: ["端末と働く場所の分散、security要求、AI利用はEUCを資産管理から従業員体験・riskの継続運用へ変える。", "今後3〜5年は旧VMware資産の継続だけでなく、SaaS移行、tool統合、DEX、AIを国内の削減効果と利用者成果へ変えられるかが成長を分ける。"],
  cultureHeadline: "独立会社の製品群を日本の既存顧客基盤で再設計する、Enterpriseとpartnerの拡張局面。",
  classification: "ハイブリッド", displayLabel: "東京オフィス／日本Remote求人あり", officeDays: "求人別の出社頻度は未確認", remoteOnly: "Nagoya Strategic AEはRemote - Japan表記", flexibility: "職種・担当顧客・出張で異なるため面接確認",
  goodFor: ["大規模な端末・VDI変革を長期商談で進めたい人", "営業・技術・partner・導入を横断したい人"], cautionFor: ["新規categoryだけを売りたい人", "territoryと支援分担が確定済みであることを重視する人"],
  unresolved: [["territory", "日本で10求人を同時掲載。", "各requisitionの担当顧客、既存・新規比率、重複求人の違いは。"], ["独立後の更新", "26,000顧客と15億ドル超ARRを公表。", "日本で旧契約の更新と新規platform拡張はどの比率か。"], ["partner", "Partner Business Managerを2件掲載。", "partner別の責任、共同pipeline、enablement、directとのcreditは。"], ["支援体制", "Solution、Architecture、Professional Servicesも採用。", "案件ごとのSE・CS・PS比率と有償serviceの責任境界は。"], ["評価・報酬", "日本のquota・報酬は非公開。", "ramped達成率、ACV、cycle、pay mix、equity、昇進基準は。"]],
});

omnissaIntelligence.sources.push({ id: "gbiz-headcount-omnissa", label: "gBizINFO Omnissa Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=7010403032896", kind: "公的機関", scope: "日本法人・事業所被保険者数", checkedAt });
omnissaIntelligence.companyStats.japanHeadcount = { value: "94人", detail: "gBizINFO掲載の厚生年金保険・健康保険適用事業所の被保険者数。従業員総数と同義とは限らない。", sourceId: "gbiz-headcount-omnissa" };

const gensparkIntelligence = build({
  checkedAt, slug: "genspark", name: "Genspark",
  jobUrl: "https://jobs.ashbyhq.com/genspark/1218b768-8c39-4d45-bbfa-d1834b734c94", officialUrl: "https://wwj.genspark.ai/ja/business/company", customersUrl: "https://www.genspark.ai/ja/business", externalUrl: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/index.html", financeUrl: "https://wwj.genspark.ai/ja/business/company",
  salesSnapshot: "複数の生成AI、資料作成、表計算、調査、業務エージェントを別々に契約・操作し、情報と統制が分散する課題を解く。用途ごとにモデルと道具を組み合わせ、組織の仕事を一つのAIワークスペースで完了させる。",
  growthSummary: "2024年創業。会社公式は2026年7月時点でSeries B 4.85億ドル、評価額26億ドル、世界4拠点を公表。製品公式は世界利用者1,000万人超を掲載するが、法人ARR・日本売上・企業顧客数は非公開。",
  ipoSummary: "非公開企業。IPO時期は未公表。大型調達と利用者規模は確認できるが、法人ARR、日本売上、有償seat・継続率は非公開。",
  milestones: [
    { year: "2024", label: "創業", detail: "Microsoft・Google等の出身者が米国パロアルトでMainFuncを創業。", source: "company" },
    { year: "2025", label: "Super Agentと法人展開", detail: "複数model・toolを組み合わせるagent型体験を拡張。", source: "company" },
    { year: "2026.01", label: "日本法人設立", detail: "Genspark株式会社を設立し東京拠点を開設。", source: "company" },
    { year: "2026.07", label: "Series B", detail: "4.85億ドル調達、評価額26億ドルを会社公式が公表。", source: "finance" },
    { year: "2026.08", label: "日本初のSE採用", detail: "Solutions Engineer (Japan)を公式掲載。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "部門ごとにAIを試すと契約、prompt、model、data、成果物、権限が分かれ、全社利用の価値とriskを比較できない。業務単位で安全に再利用できる環境が必要になる。" },
    { title: "製品の成り立ちから見る課題", body: "一つのmodelですべてを解くのではなく、複数modelと多数のtoolを仕事ごとに組み合わせる発想から開始。検索だけでなく資料・表・video・code・agent実行まで範囲を広げた。" },
    { title: "外部環境の要求から見る課題", body: "AI導入が個人実験から業務processへ進むほど、data利用、権限、承認、監査、品質、費用を説明する必要がある。model性能だけでなく、接続先と人の確認を含む運用が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "部門ごとにAI toolが増え、仕事と知識が別々の画面へ分散する。" },
    { label: "課題", body: "modelの切り替えと手作業の受け渡しが残り、成果の品質、data統制、全社費用を管理しにくい。" },
    { label: "解決策", body: "限定業務でagent、接続data、承認、成果物、時間、修正、利用費を設計し、既存processと比較する。" },
    { label: "選定の理由", body: "ChatGPT Enterprise、Microsoft Copilot、Gemini、個別AI toolとの比較で、複数model、業務完結、connector、統制、総費用に優位がある場合に選ぶ。" },
  ],
  openingHook: "社員は一つの成果物を完成させるまで、何個のAIと業務toolを行き来し、どこで人の確認を入れていますか。",
  valueHypothesis: "対象業務で完了時間、tool数、修正回数、再利用率、承認、品質事故、利用費、active率を導入前後で比較する。",
  objection: "主要modelの法人版やMicrosoft 365で十分で、AIを束ねる新しい基盤は増やしたくない。",
  reframe: "modelの数ではなく、実際の業務を何工程減らし、既存dataへ安全に接続し、成果物と監査を一つの運用へ残せるかで比較する。",
  facts: [
    { label: "創業", value: "2024年", detail: "米国パロアルト。", source: "company" },
    { label: "Series B", value: "4.85億ドル", detail: "2026年7月時点の会社公式。", source: "finance" },
    { label: "評価額", value: "26億ドル", detail: "同ラウンドの会社公式。", source: "finance" },
    { label: "世界利用者", value: "1,000万人超", detail: "製品公式の掲載値。", source: "company" },
    { label: "日本法人", value: "2026年1月設立", detail: "東京・虎ノ門の公式会社情報。", source: "company" },
    { label: "日本求人", value: "対象1件", detail: "Solutions Engineer (Japan)を確認。Marketing求人は対象外。", source: "job" },
    { label: "年間売上規模（ARR）", value: "$250M", detail: "Gensparkが管理するLinkedIn会社ページの2026年8月掲載値。監査済み財務ではなく会社自己申告。", source: "finance" },
  ],
  customers: [
    { company: "電通", products: "Genspark Enterprise", outcome: "2026年7月の公式launch eventで導入事例sessionへ登壇。定量成果は公開ページで未確認。", implication: "大手企業のmarketing・企画業務での参照例。" },
    { company: "世田谷区", products: "Genspark Enterprise", outcome: "同イベントでDX推進担当が導入事例sessionへ登壇。定量成果は未確認。", implication: "自治体での組織AI活用の参照例。" },
    { company: "協和キリン", products: "Genspark Enterprise", outcome: "同イベントでIT architecture・DX担当が導入事例sessionへ登壇。定量成果は未確認。", implication: "規制産業でのIT・業務利用を確認する入口。" },
  ],
  externalSignals: [
    { label: "AI事業者ガイドライン", value: "riskに応じた統制", detail: "総務省・経産省の議論はAI利用の透明性、data、人の関与、risk管理を重視する。", caveat: "特定製品の導入を推奨・義務づけるものではない。" },
    { label: "tool分散", value: "modelから業務processへ", detail: "企業利用は個別chatの精度だけでなく、接続data、権限、承認、成果物の再利用が論点になる。", caveat: "効果は対象業務ごとにpilotで測る必要がある。" },
  ],
  role: "日本最初のSolutions Engineerとしてdiscovery、architecture、demo、pilot、security review、integration、評価framework、今後のSE向けtoolkitを作る。",
  organization: "Genspark株式会社を2026年1月設立。東京の小規模officeにSales/GTMとMarketingが在籍すると求人に記載。厳密な日本人数は非公開。",
  careerValue: "複数model・agent、Enterprise security、technical selling、pilot、Japan SE組織の0→1を一つの役割で経験する。",
  globalHeadcount: "非公開",
  japanPresence: "Genspark株式会社・東京虎ノ門オフィス。日本人数は非公開",
  japanSince: "2026年1月に日本法人設立",
  solutions: [
    { name: "Genspark Enterprise", valueProp: "複数AI modelとagent、業務suiteを組織向け統制の下で提供。", url: "https://www.genspark.ai/ja/business", competitors: "ChatGPT Enterprise、Microsoft 365 Copilot、Google Gemini Enterprise。", differentiation: "複数modelと業務agentを一つのworkbenchで組み合わせる。" },
    { name: "GenTeam / Agent", valueProp: "複数agentが調査、資料、表、media、業務processを分担して実行。", url: "https://www.genspark.ai/ja/business", competitors: "general AI assistant、agent builder、workflow automation。", differentiation: "成果物作成までをmulti-agent workflowへまとめる。" },
    { name: "Enterprise Controls", valueProp: "組織利用のaccess、data、audit、security条件を管理。", url: "https://www.genspark.ai/business", competitors: "各modelの法人管理、AI gateway。", differentiation: "model横断の利用と業務suiteを同じ契約・管理へ載せる。" },
  ],
  fitTags: ["AI Workspace", "AI Agent", "Enterprise", "Solutions Engineering", "Japan Launch"],
  comparisons: [
    { arena: "法人AI", companies: ["Genspark", "OpenAI", "Microsoft"], why: "業務完結、model、統制" },
    { arena: "資料・業務suite", companies: ["Genspark", "Google", "Notion"], why: "成果物、共同作業、既存data" },
    { arena: "agent実行", companies: ["Genspark", "Salesforce", "ServiceNow"], why: "接続先、承認、再利用" },
  ],
}, {
  slug: "genspark", leaderName: "Eric Jing", leaderLabel: "CEO & Co-founder", leaderUrl: "https://wwj.genspark.ai/ja/business/company", localName: "Eric Jing", localLabel: "日本法人代表", localUrl: "https://wwj.genspark.ai/ja/business/company",
  companyId: "genspark-company", jobId: "genspark-job", customersId: "genspark-customers", externalId: "genspark-external", financeId: "genspark-finance",
  targets: ["CIO・全社AI責任者", "DX・業務改革責任者", "security・data governance責任者"],
  heroSummary: "複数の生成AI、資料作成、表計算、調査、業務エージェントが別々に運用される課題を解く。用途ごとにモデルと道具を組み合わせ、組織の仕事を一つのAIワークスペースで完了させる。",
  competitors: "ChatGPT Enterprise、Microsoft 365 Copilot、Gemini Enterprise、個別AI toolとの比較では、業務完結、model横断、connector、権限・audit、費用を見る。",
  feature: "70以上のAI modelとagent、資料・表・文書・media・code等の業務suiteを一つのworkspaceで組み合わせる。",
  advantage: "特定modelだけへ固定せず、仕事に応じてmodel・toolをroutingし、成果物作成まで同じ導線で完了する。",
  benefit: "tool間の転記と待ち時間を減らし、組織の知識、承認、成果物を再利用しながらAI利用を広げられる可能性がある。",
  evidence: "電通、協和キリン、世田谷区が公式launch eventの導入事例sessionへ登壇し、公式siteは多数の国内導入企業を掲載。",
  marketVerdict: "日本法人、東京拠点、国内導入企業、初のSolutions Engineer求人を確認。急速な製品・資本拡大を、企業の継続利用と安全な業務processへ変えられるかが焦点。",
  marketParagraphs: ["企業AIは個人のchat利用から、data・権限・承認を伴う業務processへ移る。複数modelとtoolの分散管理が新たな負荷になる。", "今後3〜5年は最新modelの追加速度だけでなく、日本企業のsecurity review、connector、導入支援、継続利用を再現可能にできるかが成長を分ける。"],
  cultureHeadline: "日本最初の技術営業として、Enterprise AIの評価・提案・securityの型を作る0→1局面。",
  classification: "ハイブリッド", displayLabel: "東京優先・国内Remote-friendly", officeDays: "東京の小規模officeあり。頻度は未確認", remoteOnly: "東京外は現在Remoteと求人に記載", flexibility: "勤務地と顧客対応・時差の条件は面接確認",
  goodFor: ["AI agentを企業architectureと業務価値へ翻訳したい人", "日本最初のSEとしてtoolkitを作りたい人"], cautionFor: ["完成したdemo・evaluation playbookを重視する人", "単一modelの深い専門だけに集中したい人"],
  unresolved: [["最初のSE", "日本でfirst technical sellerと明記。", "最初の12カ月に求めるpipeline、pilot、受注、enablementの優先順位は。"], ["security", "security reviewを技術営業が担当。", "日本語資料、data residency、subprocessor、audit、承認の標準回答は。"], ["product pace", "多数のmodel・agentを継続追加。", "変更管理、品質評価、顧客への告知、廃止時の責任は。"], ["組織", "東京に小規模GTM・Marketing team。", "AE、CS、Support、Engineeringの人数と案件ごとの支援範囲は。"], ["評価・報酬", "給与・quotaを非公開。", "ramped達成率、pilot転換率、pay mix、equity、昇進基準は。"]],
});
gensparkIntelligence.sources.push({ id: "gbiz-headcount-genspark", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
gensparkIntelligence.sources.push({ id: "genspark-linkedin", label: "Genspark LinkedIn会社ページ", url: "https://www.linkedin.com/company/gensparkai", kind: "企業公式", scope: "会社自己申告のARR・従業員規模", checkedAt });
const gensparkArrFact = gensparkIntelligence.facts.find((fact) => fact.label === "年間売上規模（ARR）");
if (gensparkArrFact) gensparkArrFact.sourceIds = ["genspark-linkedin"];
gensparkIntelligence.companyStats.japanHeadcount = { value: "gBizINFO事業所人数の掲載なし", detail: "公式会社情報で日本法人は確認したが、gBizINFOで対応する事業所被保険者数の掲載を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-genspark" };

const vizcomIntelligence = build({
  checkedAt, slug: "vizcom", name: "Vizcom",
  jobUrl: "https://jobs.ashbyhq.com/vizcom/5724060e-5a9d-4376-8981-554fd59848c8", officialUrl: "https://vizcom.com/blog/our-mission", customersUrl: "https://jobs.ashbyhq.com/vizcom/5724060e-5a9d-4376-8981-554fd59848c8", externalUrl: "https://www.jpo.go.jp/system/laws/rule/guideline/ai_jirei.html", financeUrl: "https://vizcom.com/blog/announcing-our-series-b",
  salesSnapshot: "工業デザイナーが手描きの意図を保ちながら、写実的なrender、反復、3D化、関係者との意思決定へ進むまでに時間がかかる課題を解く。AIを代替ではなく創造性の拡張として使い、案の比較と物理製品への移行を速める。",
  growthSummary: "会社公式は2025年10月にSeries B 2,700万ドル、累計調達5,100万ドル、利用designer 70万人超を公表。日本を初期重点市場とするAPAC初のEnterprise営業を採用するが、日本売上・顧客数は非公開。",
  ipoSummary: "非公開企業。IPO時期は未公表。利用者・調達・global顧客は確認できるが、ARR、Enterprise比率、日本売上は非公開。",
  milestones: [
    { year: "2021", label: "創業", detail: "元Honda designerのJordan Taylorが、render作業の時間を減らす発想から創業。", source: "company" },
    { year: "2023", label: "Seed", detail: "500万ドルを調達。", source: "finance" },
    { year: "2024.03", label: "Series A", detail: "2,000万ドルを調達しEnterpriseと3Dを拡張。", source: "finance" },
    { year: "2025.10", label: "Series B", detail: "2,700万ドルを調達、利用designer 70万人超を公表。", source: "finance" },
    { year: "2026.08", label: "APAC初の営業採用", detail: "東京を優先し日本を初期重点市場とするSenior Enterprise AEを公式掲載。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "自動車、消費財、footwear等では、手描き案を関係者が判断できるvisualへ変え、CAD・prototypeへ渡すまでに専門作業と待ち時間がある。より多くの案を早く比較したい。" },
    { title: "製品の成り立ちから見る課題", body: "Hondaで自動車designを経験した創業者が、designer自身のsketchと意図を保ちながらrender時間を縮める道具を構想。AIでdesignerを置き換えず、既存workflowを加速する思想を置く。" },
    { title: "外部環境の要求から見る課題", body: "生成AIで案の量を増やせる一方、企業には意匠、著作権、秘密情報、brand一貫性、承認の説明責任が残る。速さだけでなく、元の意図とdata境界を保つ運用が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "製品designはsketch、render、review、3D、prototypeの受け渡しに時間がかかる。" },
    { label: "課題", body: "汎用画像生成は速くても、designerの線、brand、形状、修正意図、下流工程を保てないと業務へ定着しない。" },
    { label: "解決策", body: "一つの製品categoryでsketchからrender・3D・reviewまでを試し、案数、判断時間、修正、外注、prototype到達を比較する。" },
    { label: "選定の理由", body: "Adobe、Autodesk、KeyShot、汎用画像AIとの比較で、sketch control、design専用workflow、Enterprise data、3D接続、判断速度に優位がある場合に選ぶ。" },
  ],
  openingHook: "designerの最初のsketchが、関係者が判断できるvisualと3D prototypeになるまで何日かかっていますか。",
  valueHypothesis: "対象projectで案数、最初のreviewまでの時間、修正回数、render外注、prototype到達、designer満足、権利・data incidentを比較する。",
  objection: "Adobe・Autodesk・KeyShotと汎用画像生成で十分で、design専用AIを増やしたくない。",
  reframe: "画像の見栄えではなく、元のsketchと意図を保ち、review・3D・prototypeへ何工程短くつなげ、企業dataをどう守るかで比較する。",
  facts: [
    { label: "創業者", value: "Jordan Taylor", detail: "元Hondaのautomotive designer。", source: "company" },
    { label: "Series B", value: "2,700万ドル", detail: "2025年10月の会社公式。", source: "finance" },
    { label: "累計調達", value: "5,100万ドル", detail: "公式求人と調達発表から確認。", source: "finance" },
    { label: "利用規模", value: "70万人超", detail: "2025年10月の会社公式。", source: "finance" },
    { label: "国内法人・拠点", value: "未確認", detail: "日本法人・officeを公式確認できず。", source: "job" },
    { label: "日本求人", value: "1件", detail: "Senior Enterprise Account Executive, APACを確認。", source: "job" },
  ],
  customers: [
    { company: "Nike", products: "Vizcom", outcome: "公式求人はdesign teamの利用企業として掲載。公開された定量成果と日本適用は未確認。", implication: "footwear・apparel designの参照先。" },
    { company: "General Motors", products: "Vizcom", outcome: "公式求人は利用企業として掲載。定量成果と対象部門は未公開。", implication: "automotive designのEnterprise参照先。" },
    { company: "Riot Games / Hasbro", products: "Vizcom", outcome: "公式求人は両社のdesign team利用を掲載。定量成果は未公開。", implication: "digital・physical product双方への適用幅を示す。" },
  ],
  externalSignals: [
    { label: "AIと知的財産", value: "生成物と学習dataの確認", detail: "特許庁の整理はAI利用と知的財産の論点を事例で示す。", caveat: "個別契約・data・生成物の法的評価を確定するものではない。" },
    { label: "設計の意思決定", value: "案の量から選定品質へ", detail: "AIで案を増やせても、brand、engineering、cost、manufacturingの判断へつながらなければ価値にならない。", caveat: "成果は対象workflowごとに測定が必要。" },
  ],
  role: "日本を初期重点市場にAPAC初のEnterprise営業として、既存関係の拡大、新規開拓、複雑商談、partner、市場feedback、local GTMを作る。",
  organization: "米国basedのSales、Marketing、Customer Success、Product、leadershipと連携。日本法人・国内拠点・local supportは未確認。",
  careerValue: "industrial design AI、Enterprise market building、日本起点のAPAC営業、direct・partner、製品feedbackを横断する経験。",
  globalHeadcount: "51〜200人規模（LinkedIn公開レンジ）",
  japanPresence: "日本法人・国内拠点未確認。日本在住・東京優先のAPAC初Enterprise営業求人あり",
  japanSince: "2026年8月に日本を初期重点市場とする公式求人を確認",
  solutions: [
    { name: "Vizcom Workbench", valueProp: "sketchからrender、反復、presentation用visualへ進む。", url: "https://vizcom.com/", competitors: "Adobe Firefly、Midjourney、KeyShot。", differentiation: "工業designerのsketchとcontrolを中心に置く。" },
    { name: "Generative 3D", valueProp: "画像・sketchから3D geometryを作り、形状を検討する。", url: "https://vizcom.com/blog/introducing-generative-3d-in-vizcom", competitors: "Autodesk、Dassault Systèmes、3D生成tool。", differentiation: "初期ideationから3Dへの受け渡しを短縮する。" },
    { name: "Enterprise", valueProp: "組織のdesign data、custom model、security、共同作業を扱う。", url: "https://vizcom.com/enterprise", competitors: "Adobe Enterprise、Autodesk、内製AI。", differentiation: "design専用workflowと企業固有のstyle・dataを結ぶ。" },
  ],
  fitTags: ["日本進出の兆しあり", "Industrial Design", "Generative AI", "Enterprise Sales", "APAC", "Tokyo"],
  comparisons: [
    { arena: "design生成", companies: ["Vizcom", "Adobe", "Midjourney"], why: "sketch control、権利、業務導線" },
    { arena: "3D・CAD", companies: ["Vizcom", "Autodesk", "Dassault Systèmes"], why: "ideation、形状、下流接続" },
    { arena: "Enterprise展開", companies: ["Vizcom", "Adobe", "Figma"], why: "共同作業、data、管理" },
  ],
}, {
  slug: "vizcom", leaderName: "Jordan Taylor", leaderLabel: "CEO & Co-founder", leaderUrl: "https://vizcom.com/blog/our-mission", localName: "未確認", localLabel: "Japan / APAC責任者", localUrl: "https://jobs.ashbyhq.com/vizcom/5724060e-5a9d-4376-8981-554fd59848c8",
  companyId: "vizcom-company", jobId: "vizcom-job", customersId: "vizcom-customers", externalId: "vizcom-external", financeId: "vizcom-finance",
  targets: ["design・innovation責任者", "自動車・製造・消費財の製品開発責任者", "CIO・security・知財責任者"],
  heroSummary: "工業デザイナーが手描きの意図を保ちながら、写実的な表現、反復、3D化、関係者の意思決定へ進むまでに時間がかかる課題を解く。AIを創造性の拡張として使い、案の比較から物理製品への移行を速める。",
  competitors: "Adobe、Autodesk、Dassault Systèmes、KeyShot、汎用画像AIとの比較では、sketch control、design workflow、3D接続、Enterprise data、総工数を見る。",
  feature: "sketch、生成render、編集、style・palette、3D化を工業design専用のworkspaceでつなぐ。",
  advantage: "元automotive designerの課題から始まり、汎用画像生成ではなくdesignerの線・意図・反復・物理製品への移行を中心に設計する。",
  benefit: "より多くの案を早く比較し、関係者の判断を前倒ししながら、designer自身のcontrolを残せる可能性がある。",
  evidence: "公式求人はNike、General Motors、Riot Games、Hasbroのdesign team利用を掲載し、会社公式は70万人超の利用者を公表。",
  marketVerdict: "日本を初期重点市場とするAPAC初のEnterprise営業は強い進出シグナル。一方、日本法人、office、local support、国内顧客名、契約・雇用基盤は未確認。",
  marketParagraphs: ["日本の自動車・製造・消費財にはdesign集約がある一方、既存CAD・creative toolと知財・dataの条件を越える必要がある。", "今後3〜5年は日本のdesign leaderでpilotを本番・更新へ変え、local雇用・契約・supportと再利用可能な導入方法を作れるかが正式進出を分ける。"],
  cultureHeadline: "日本を起点にAPACのEnterprise販売方法を作る、local infrastructure前の初期市場開拓。",
  classification: "フルリモート", displayLabel: "日本在住・東京優先Remote", officeDays: "国内office未確認", remoteOnly: "東京を優先するRemote表記", flexibility: "APAC出張と米国team連携あり。時差・頻度は面接確認",
  goodFor: ["design・製造のworkflowをEnterprise商談へ翻訳したい人", "日本からAPAC marketとpartnerを0→1で作りたい人"], cautionFor: ["日本法人・support・契約基盤が整った環境を前提にする人", "短い定型SaaS商談だけを望む人"],
  unresolved: [["雇用主体", "日本在住を求める公式求人。", "雇用主体、契約、社会保険、税務、福利厚生、equityは。"], ["日本顧客", "既存Enterprise関係を引き継ぐと記載。", "日本の有償顧客、業界、更新、reference可能性は。"], ["GTM", "APAC初の専任Enterprise営業。", "日本とAPACのterritory、quota、Marketing、SE、CS、Supportは。"], ["product readiness", "design・security・procurementを横断。", "日本語、data hosting、IP、security review、CAD連携の標準回答は。"], ["正式進出", "日本を初期重点市場とする。", "法人、office、local hire、partner、supportを置く判断基準と時期は。"]],
});

if (vizcomIntelligence.marketStatus.japanGrowth) {
  vizcomIntelligence.marketStatus.japanGrowth.headline = "日本起点のAPAC初営業求人を確認、法人・国内拠点は未確認";
  vizcomIntelligence.marketStatus.japanGrowth.narrative = "東京を優先勤務地とし、日本を初期重点市場にするSenior Enterprise Account Executive, APACは強い進出シグナル。一方、日本法人、国内拠点、雇用主体、local support、国内顧客名を公式確認できず、正式進出とは断定しない。";
  vizcomIntelligence.marketStatus.japanGrowth.entryAssessment = {
    verdict: "進出可能性は高め。日本を初期重点市場とするAPAC初のEnterprise営業を採用するが、法人・delivery基盤は未確認",
    factSignals: [
      { title: "日本重点の初期採用", body: "APAC初のEnterprise営業を日本在住・東京優先で募集し、日本を初期重点市場と明記。", sourceIds: ["vizcom-job"] },
      { title: "既存案件", body: "既存Enterprise関係とactive opportunityを引き継ぐと求人に記載。顧客名・金額は未公開。", sourceIds: ["vizcom-job"] },
      { title: "資本と利用規模", body: "累計5,100万ドル調達、70万人超のdesigner利用を会社公式が公表。", sourceIds: ["vizcom-finance"] },
      { title: "日本産業との接点", body: "自動車、製造、消費財、footwear等を重点業界に置き、日本のdesign集約と合う。", sourceIds: ["vizcom-job", "vizcom-company"] },
    ],
    hurdles: [
      { title: "日本のcommercial proof", body: "国内顧客名、売上、更新、契約事例を公式確認できない。", sourceIds: ["vizcom-customers", "vizcom-job"] },
      { title: "雇用・契約基盤", body: "日本法人、雇用主体、請求・税務、国内officeを確認できない。", sourceIds: ["vizcom-job"] },
      { title: "local delivery", body: "日本語製品・security・IP資料、SE、CS、Support、implementation体制が未確認。", sourceIds: ["vizcom-company", "vizcom-job"] },
      { title: "既存toolと知財", body: "Adobe・Autodesk・CAD・汎用AIに追加する価値と、design data・生成物の権利を説明する必要がある。", sourceIds: ["vizcom-company", "vizcom-external"] },
    ],
    readinessConditions: [
      { title: "日本の有償reference", body: "複数のdesign組織でpilotから本番・更新・拡大へ進む。" },
      { title: "雇用・契約基盤", body: "日本の雇用主体、契約、請求、data、税務を明確にする。" },
      { title: "local technical coverage", body: "SE・CS・Supportを日本またはAPACから日本語で提供する。" },
      { title: "IP・security readiness", body: "学習、生成物、秘密情報、data hosting、auditの標準回答を整える。" },
      { title: "repeatable workflow", body: "自動車・製造・消費財で既存CAD・reviewへつなぐ導入方法を再利用可能にする。" },
    ],
    watchSignals: ["日本法人・雇用主体", "Japan SE・CS求人", "国内顧客事例", "日本語製品・security・IP資料", "国内partner", "東京office・support"],
  };
}
vizcomIntelligence.sources.push({ id: "gbiz-headcount-vizcom", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
vizcomIntelligence.sources.push({ id: "vizcom-linkedin", label: "Vizcom LinkedIn会社ページ", url: "https://www.linkedin.com/company/vizcomhq", kind: "外部集計", scope: "グローバル従業員規模・本社・創業年", checkedAt });
vizcomIntelligence.companyStats.globalHeadcount = { value: "51〜200人規模", detail: "LinkedIn公開レンジ。会社公式の厳密人数ではなく、売上規模推定ではレンジ中点を使う。", sourceId: "vizcom-linkedin" };
vizcomIntelligence.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "日本法人・国内拠点を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-vizcom" };

export const daily20260831IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  omnissa: omnissaIntelligence,
  genspark: gensparkIntelligence,
  vizcom: vizcomIntelligence,
};
