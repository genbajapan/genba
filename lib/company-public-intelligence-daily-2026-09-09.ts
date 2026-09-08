import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-09";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.09";
  return intelligence;
}

const suse = build({
  checkedAt, slug: "suse", name: "SUSE",
  jobUrl: "https://suse.wd3.myworkdayjobs.com/jobsatsuse",
  officialUrl: "https://www.suse.com/ja-jp/company/history/",
  customersUrl: "https://www.suse.com/ja-jp/success/idc_frontier/",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://www.suse.com/company/about/",
  salesSnapshot: "CIO・IT基盤責任者へ、Linux、Kubernetes、コンテナセキュリティ、エッジ、AI基盤を特定クラウドに固定しない形で提供する。顧客が抱える更新手順の分断、脆弱性対応の遅れ、ベンダー固定による移行費用を解く。基幹Linuxの更新からクラウドネイティブ、セキュリティ、AIの統制まで提案を広げられることが営業として面白い。",
  growthSummary: "1992年創業の企業向けオープンソース企業。Fortune 500の60%以上が利用すると会社公表。日本法人の事業所被保険者17人に対し、東京の顧客接点4職種を公式募集している。",
  ipoSummary: "2023年にEQTによる非公開化を完了。現在の売上、日本売上、ARR、利益、企業価値は公開情報で確認できない。",
  milestones: [
    { year: "1992", label: "創業", detail: "ドイツで4人がS.u.S.E.を創業。", source: "company" },
    { year: "2000", label: "企業向けLinux", detail: "IBM S/390向けSUSE Linux Enterprise Serverを展開。", source: "company" },
    { year: "2020", label: "Rancher統合", detail: "Kubernetes管理を加え、クラウドネイティブ領域を拡張。", source: "company" },
    { year: "2024", label: "観測性を拡張", detail: "StackStateを買収し、クラウドネイティブ運用の可視化を追加。", source: "finance" },
    { year: "確認不能", label: "日本法人設立年は確認不能", detail: "日本法人と事業所は確認できるが、公式の沿革で設立年を確認できない。", source: "company" },
    { year: "2026", label: "東京採用", detail: "営業・技術営業・パートナーの4職種を公式募集。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "IDCフロンティアは、複数環境のKubernetes運用を簡素化し、国内向けマネージドコンテナサービスを立ち上げるためRancher Primeを採用した。" },
    { title: "製品の成り立ちから見る課題", body: "Linuxを企業が長期運用できる配布・保守へ変えた出発点から、Kubernetes、セキュリティ、エッジ、AIまでオープンな基盤を広げた。" },
    { title: "外部環境の要求から見る課題", body: "クラウド集中、生成AI、ソフトウェア供給網の依存が増え、企業は可用性だけでなくデータ、モデル、基盤の主権と移行可能性を説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "基幹LinuxとKubernetesが複数クラウド、データセンター、エッジへ分散する。" },
    { label: "課題", body: "基盤ごとに運用、更新、セキュリティ、支援契約が分かれると、変更と障害対応が遅くなり、特定ベンダーへの依存も高まる。" },
    { label: "解決策", body: "重要な業務を対象にLinuxとKubernetesの運用を統合し、更新時間、停止、脆弱性対応、運用工数、移行性を比較する。" },
    { label: "選定の理由", body: "Red Hat、Canonical、VMware、クラウド各社の管理製品と比べ、既存環境の互換性、オープン性、長期保守、Kubernetes・セキュリティの一体運用が優位なら選ぶ。" },
  ],
  openingHook: "基幹LinuxとKubernetesの更新、障害、脆弱性対応を、いくつの契約と運用手順で管理していますか。",
  valueHypothesis: "対象基盤で更新・移行時間、計画外停止、脆弱性修正時間、運用工数、環境間の移植性を導入前後で比べる。",
  objection: "既存のRed Hat、VMware、クラウド標準機能で十分。",
  reframe: "製品一覧ではなく、今後5年の更新・移行・セキュリティ責任と、特定基盤から離れる費用まで含む総運用コストで比較する。",
  facts: [
    { label: "創業", value: "1992年", detail: "ドイツ発。4人がSoftware und System-Entwicklungとして創業。" },
    { label: "利用企業", value: "Fortune 500の60%以上", detail: "会社公式の現在表示。" },
    { label: "製品領域", value: "Linux・Kubernetes・Edge・AI", detail: "企業向けオープンソース基盤。" },
    { label: "日本事業所", value: "被保険者17人", detail: "gBizINFO。役員・制度対象外・業務委託を含む総従業員数ではない。", source: "company" },
    { label: "国内顧客", value: "複数事例", detail: "IDCフロンティア、アビームコンサルティング等を公式掲載。", source: "customers" },
    { label: "日本求人", value: "4件", detail: "東京のAE、Territory Account Manager、Senior Solution Architect、Partner Executive。", source: "job" },
  ],
  customers: [
    { company: "IDCフロンティア", products: "Rancher Prime", outcome: "国内向けマネージドコンテナサービスを立ち上げ、Kubernetes運用の複雑さと管理負荷を抑えたと公式事例で紹介。", implication: "日本のクラウド事業者での設計・運用参照になる。" },
    { company: "アビームコンサルティング", products: "SUSE Linux Enterprise Server for SAP・SUSE Manager", outcome: "基幹システム基盤に採用し、クラウド親和性、長期サポート、SAP連携を評価したと公式発表。", implication: "SAP基幹系での国内参照になる。" },
  ],
  externalSignals: [
    { label: "AIガバナンス", value: "データとモデルの統制", detail: "企業がAIを本番利用するほど、権限、データ保護、監視、人の責任を基盤で説明する必要がある。", caveat: "SUSEの導入だけで法令・ガイドラインへの適合を保証しない。" },
    { label: "デジタル主権", value: "移行可能性と説明責任", detail: "クラウドとAIへの依存が増えるほど、技術選択、データ所在、供給網、出口戦略が調達条件になる。", caveat: "主権要件は業界、データ、契約、地域で異なる。" },
  ],
  role: "東京の4職種が、通信・公共を含む大企業の新規・既存商談、技術検証、販売パートナーとの共同提案を担う。",
  organization: "SUSEソフトウエアソリューションズジャパン株式会社。gBizINFOの事業所被保険者数17人。",
  careerValue: "基幹Linux、Kubernetes、セキュリティ、AI基盤を、技術選定から経営の継続性・主権へ翻訳する経験。",
  globalHeadcount: "約2,500人（SUSEサイト掲載の第三者調査。会社の厳密な現在値ではない）",
  japanPresence: "SUSEソフトウエアソリューションズジャパン株式会社・東京",
  japanSince: "国内法人と長期の顧客・パートナー活動を確認",
  solutions: [
    { name: "SUSE Linux Enterprise", valueProp: "基幹業務向けLinuxを長期保守と支援付きで提供。", url: "https://www.suse.com/ja-jp/products/server/", competitors: "Red Hat Enterprise Linux、Ubuntu Pro、Oracle Linux。", differentiation: "SAP、メインフレーム、エッジまで広い環境とオープンな選択肢。" },
    { name: "Rancher Prime", valueProp: "複数環境のKubernetesを一元管理。", url: "https://www.suse.com/ja-jp/products/rancher/", competitors: "Red Hat OpenShift、VMware Tanzu、各クラウド管理製品。", differentiation: "異なるKubernetes配布版とクラウドを横断する管理。" },
    { name: "SUSE AI", valueProp: "企業が生成AIを自社データと統制下で運用する基盤。", url: "https://www.suse.com/ja-jp/solutions/ai/", competitors: "Red Hat AI、クラウドAI基盤、NVIDIA AI Enterprise。", differentiation: "オンプレミス、クラウド、閉域を含むオープンな構成。" },
  ],
  fitTags: ["Open Source", "Linux", "Kubernetes", "AI Infrastructure", "Enterprise Sales", "Tokyo"],
  comparisons: [
    { arena: "企業向けLinux", companies: ["SUSE", "Red Hat", "Canonical"], why: "互換性、長期保守、SAP、運用費、選択肢" },
    { arena: "Kubernetes管理", companies: ["SUSE", "Red Hat", "VMware", "クラウド各社"], why: "複数環境、セキュリティ、移行性、運用負荷" },
  ],
}, {
  slug: "suse", leaderName: "Dirk-Peter van Leeuwen", leaderLabel: "CEO", leaderUrl: "https://www.suse.com/leadership/",
  localName: "村上 督", localLabel: "Japan Regional Manager", localUrl: "https://www.suse.com/ja-jp/news/suse-appoints-tadashi-murakami/",
  companyId: "suse-company", jobId: "suse-job", customersId: "suse-customers", externalId: "suse-external", financeId: "suse-finance",
  targets: ["CIO・IT基盤責任者", "クラウド・基盤開発責任者", "セキュリティ・AI基盤責任者"],
  heroSummary: "基幹Linux、Kubernetes、エッジ、AI基盤が分散し、更新・セキュリティ・ベンダー依存の責任が複雑になる課題を解く。企業向けオープンソース製品と長期支援で、運用の一貫性と技術選択の自由を両立する。",
  competitors: "Red Hat、Canonical、VMware、クラウド各社。互換性、長期保守、複数環境、移行性、総運用コストで比較。",
  feature: "Linux、Kubernetes、セキュリティ、エッジ、AI基盤を企業向けに提供する。",
  advantage: "1992年からのオープンソース運用、Fortune 500の60%以上の利用、国内顧客・パートナーの参照を持つ。",
  benefit: "更新・移行時間、停止、脆弱性対応、運用工数、ロックイン費用を改善できる可能性がある。",
  evidence: "IDCフロンティア、アビームコンサルティング等の国内事例と東京の4求人を公式確認。",
  marketVerdict: "国内事業所は17人規模だが、東京で営業・技術営業・パートナーの4職種を同時募集。AIとデジタル主権を既存Linux・Kubernetes顧客へ広げる局面。",
  marketParagraphs: ["クラウドとAIへの依存が深まり、企業は性能だけでなく運用継続、データ統制、移行可能性を求める。", "今後3〜5年はオープンという理念より、既存環境の移行負荷、障害・脆弱性対応、AI基盤の統制を数字で示せるかが成長を分ける。"],
  cultureHeadline: "17人規模の国内事業所で、複数製品と販売網を横断して日本の成長を担う。",
  classification: "未確認", displayLabel: "東京勤務", officeDays: "公式求人で明記なし", remoteOnly: "完全リモートの明記なし", flexibility: "顧客・パートナー訪問を含む",
  goodFor: ["オープンソース基盤を経営課題へ翻訳したい人", "直販、技術、パートナーを横断したい人"],
  cautionFor: ["単一製品の短期商談だけを望む人", "完全リモートを必須とする人"],
  unresolved: [
    ["領域", "顧客接点4職種を募集。", "各職種の担当顧客、既存顧客、新規比率、重複をどう分けますか。"],
    ["目標", "売上成長を担う。", "目標、平均契約額、営業期間、達成率、案件量は。"],
    ["製品", "LinuxからAIまで広い。", "日本で最優先の製品、利用例、競合勝因・敗因は。"],
    ["支援", "直販と販売パートナーを併用。", "技術営業、顧客成功、サービス、サポートの国内体制は。"],
    ["報酬", "日本の報酬は未掲載。", "基本給、変動給、株式、評価指標、昇進基準は。"],
  ],
});

const ninjaone = build({
  checkedAt, slug: "ninjaone", name: "NinjaOne",
  jobUrl: "https://jobs.jobvite.com/ninjaone/job/oYJpAfwq",
  officialUrl: "https://www.ninjaone.com/ja/about-us/",
  customersUrl: "https://www.ninjaone.com/ja/customer-stories/",
  externalUrl: "https://www.ipa.go.jp/security/10threats/10threats2026.html",
  financeUrl: "https://www.ninjaone.com/ai-info-page/",
  salesSnapshot: "社内ITとMSPへ、端末管理、パッチ、バックアップ、遠隔支援を一つのクラウド基盤で提供する。顧客が抱える未管理端末の可視性不足、更新・復旧の遅れ、分断した道具による運用負荷を解く。端末管理からセキュリティ、バックアップ、顧客支援まで同じ成果指標で提案を広げられることが営業として面白い。",
  growthSummary: "従業員2,000人超、約4万顧客、140カ国超を会社公表。2026年6月に日本展開、9月2日に国内法人の法人番号指定を確認し、東京の技術営業1件を公式募集している。",
  ipoSummary: "非公開企業。2026年に企業価値123億ドルと会社発表。売上、日本売上、ARR、利益、次回資金調達やIPO時期は確認できない。",
  milestones: [
    { year: "2013", label: "創業", detail: "Sal SferlazzaとChris Matareseが、従来型RMMを刷新する目的で共同創業。", source: "finance" },
    { year: "2015", label: "製品公開", detail: "2年の非公開開発を経て中核基盤を公開。", source: "finance" },
    { year: "2025", label: "製品領域拡張", detail: "Dropsuiteを買収し、端末・サーバー・SaaSのバックアップを統合。", source: "finance" },
    { year: "2026.06", label: "日本事業開始", detail: "日本語支援とマクニカとの販売体制を発表。", source: "company" },
    { year: "2026.09", label: "国内法人", detail: "NinjaOne Japan合同会社の法人番号指定を確認。", source: "company" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "国内顧客GEMBAは、分散したIT管理の可視性と制御を一つへ集約し、手作業を減らす目的で導入したと公式発表で説明する。" },
    { title: "製品の成り立ちから見る課題", body: "創業者はMSP向けRMMの複雑さを刷新するため、端末をクラウドから素早く確認・制御・自動化する基盤を作った。" },
    { title: "外部環境の要求から見る課題", body: "端末、SaaS、遠隔勤務、脆弱性が増え、少人数のIT部門は更新の遅れ、管理漏れ、復旧不能を継続的に説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "PC、モバイル、サーバー、SaaSが分散し、管理・パッチ・バックアップ・遠隔支援の道具が増える。" },
    { label: "課題", body: "道具ごとの一覧、規則、通知、権限では、未管理端末、更新遅延、障害、復旧状況を一貫して把握しにくい。" },
    { label: "解決策", body: "代表部門の端末群へ統合管理と自動化を適用し、管理工数、更新時間、脆弱性、復旧時間、道具数を導入前後で測る。" },
    { label: "選定の理由", body: "Microsoft Intune、Jamf、Kaseya、ConnectWise、各種バックアップ製品と比べ、展開速度、操作性、自動化、複数OS、MSP運用、支援が優位なら選ぶ。" },
  ],
  openingHook: "社内の全端末について、更新、脆弱性、バックアップ、遠隔支援の状態を、何画面・何人で確認していますか。",
  valueHypothesis: "対象端末群で管理工数、パッチ適用時間、未管理端末、脆弱性、復旧時間、問い合わせ解決時間、道具数を導入前後で比べる。",
  objection: "Microsoft Intune、Jamf、既存RMMとバックアップで十分。",
  reframe: "機能数ではなく、複数OSと拠点を一つの規則で管理し、更新・復旧・支援までの工数とリスクを実測できるかで比較する。",
  facts: [
    { label: "創業", value: "2013年", detail: "2人の創業者がRMM刷新を目的に開始。", source: "finance" },
    { label: "従業員", value: "2,000人超", detail: "会社公式の現在表示。", source: "company" },
    { label: "顧客", value: "約4万社", detail: "140カ国超。会社公式。", source: "company" },
    { label: "企業価値", value: "123億ドル", detail: "2026年の資金調達時に会社発表。売上ではない。", source: "finance" },
    { label: "日本展開", value: "2026年6月", detail: "日本語支援とマクニカを初の国内販売会社として発表。", source: "company" },
    { label: "日本求人", value: "1件", detail: "Solutions Engineer - Japan。", source: "job" },
  ],
  customers: [
    { company: "GEMBA", products: "NinjaOne Unified IT Operations", outcome: "複数の道具を一つへ集約し、可視性と制御を得て手作業を削減したと日本展開発表で紹介。", implication: "国内の分散した制作端末を少人数で管理する参照になる。" },
    { company: "Sentree", products: "NinjaOne", outcome: "日本におけるIT運用を統合した事例として日本語公式サイトへ掲載。", implication: "国内運用と日本語支援の確認材料になる。" },
  ],
  externalSignals: [
    { label: "脆弱性対応", value: "端末更新の継続管理", detail: "ランサムウェアや既知脆弱性の悪用に対し、資産把握、更新優先度、適用確認、例外管理が必要。", caveat: "NinjaOneの導入だけで組織のセキュリティ対策全体を満たすものではない。" },
    { label: "IT人材制約", value: "道具統合と自動化", detail: "管理対象が増える一方で運用人員が限られ、反復作業を減らして例外と重要障害へ集中する投資理由が強まる。", caveat: "効果は既存環境、設計、運用品質で異なる。" },
  ],
  role: "東京のSolutions Engineerが大企業・中堅企業の要件整理、デモ、構成設計、技術検証、導入計画を担い、営業、顧客成功、製品、開発へ現場の学びを返す。",
  organization: "2026年6月に日本展開を発表。9月2日にNinjaOne Japan合同会社の法人番号指定を確認したが、国内従業員数と日本責任者は未確認。",
  careerValue: "端末管理、パッチ、バックアップ、遠隔支援を、日本企業の運用工数、脆弱性、復旧という成果へ翻訳し、市場初期の技術営業の型を作る経験。",
  globalHeadcount: "2,000人超（会社公式）",
  japanPresence: "NinjaOne Japan合同会社・東京／国内展開",
  japanSince: "2026年6月に日本展開、9月2日に法人番号指定",
  solutions: [
    { name: "NinjaOne Endpoint Management", valueProp: "Windows、macOS、Linux等の端末を一元管理し、監視と操作を自動化。", url: "https://www.ninjaone.com/ja/endpoint-management/", competitors: "Microsoft Intune、Jamf、Kaseya、ConnectWise。", differentiation: "複数OS、MSPと社内IT、パッチ、遠隔支援を一つの操作面へ統合。" },
    { name: "NinjaOne Patch Management", valueProp: "OSと第三者アプリの更新を規則で配布し、適用状況を可視化。", url: "https://www.ninjaone.com/ja/patch-management/", competitors: "Microsoft Intune、Automox、ManageEngine、既存RMM。", differentiation: "端末状態と遠隔運用の同じ基盤から更新を自動化。" },
    { name: "NinjaOne Backup", valueProp: "端末・サーバー・SaaSのデータ保護と復旧を管理。", url: "https://www.ninjaone.com/ja/backup/", competitors: "Veeam、Acronis、Datto、各SaaSバックアップ。", differentiation: "端末運用と復旧状況を同じ管理導線へ集約。" },
  ],
  fitTags: ["Endpoint Management", "IT Operations", "Patch Management", "Backup", "Solutions Engineering", "Tokyo"],
  comparisons: [
    { arena: "統合端末管理", companies: ["NinjaOne", "Microsoft Intune", "Jamf", "Kaseya"], why: "複数OS、自動化、操作性、展開、総費用" },
    { arena: "MSP・社内IT運用", companies: ["NinjaOne", "ConnectWise", "Datto", "ManageEngine"], why: "複数顧客、権限、遠隔支援、パッチ、バックアップ" },
  ],
}, {
  slug: "ninjaone", leaderName: "Sal Sferlazza", leaderLabel: "Co-founder / CEO", leaderUrl: "https://www.ninjaone.com/leadership/",
  localName: "未確認", localLabel: "日本責任者", localUrl: "https://www.ninjaone.com/press/japan/",
  companyId: "ninjaone-company", jobId: "ninjaone-job", customersId: "ninjaone-customers", externalId: "ninjaone-external", financeId: "ninjaone-finance",
  targets: ["CIO・社内IT責任者", "端末・セキュリティ運用責任者", "MSP・ITサービス責任者"],
  heroSummary: "端末、パッチ、バックアップ、遠隔支援が別々で、少人数のIT部門が全社の状態と復旧責任を一貫して持てない課題を解く。複数OSの可視化、制御、自動化を一つのクラウド基盤へ集約する。",
  competitors: "Microsoft Intune、Jamf、Kaseya、ConnectWise、ManageEngine、Veeam等。複数OS、自動化、展開、操作性、支援、総費用で比較。",
  feature: "端末管理、パッチ、遠隔支援、バックアップ、モバイル管理を一つのクラウド基盤で提供する。",
  advantage: "約4万顧客とMSP運用の蓄積、複数OS、自動化、端末状態から復旧までの一体管理を持つ。",
  benefit: "管理工数、パッチ時間、未管理端末、脆弱性、復旧時間、道具数を改善できる可能性がある。",
  evidence: "約4万顧客、2,000人超、日本語支援、国内顧客、マクニカ提携、国内法人、東京の技術営業求人を公式・公的情報で確認。",
  marketVerdict: "2026年6月の日本展開、9月の国内法人設立直後。東京でSolutions Engineerを採用し、販売会社・日本語支援と技術検証の体制を作る初期局面。",
  marketParagraphs: ["端末と脆弱性が増える一方、社内ITの人員は限られ、管理・更新・復旧の道具統合と自動化が投資理由になる。", "今後3〜5年はAIという表示より、既存の端末情報、権限、作業履歴から安全に自動化し、管理工数と事故を実測できるかが勝敗を分ける。"],
  cultureHeadline: "日本法人設立直後に、販売会社・日本語支援と技術営業の型を作る。",
  classification: "ハイブリッド", displayLabel: "東京／Hybrid Remote", officeDays: "未掲載", remoteOnly: "東京勤務", flexibility: "Hybrid / Remote表記",
  goodFor: ["IT運用技術を経営成果へ翻訳したい人", "日本市場初期の技術営業の型を作りたい人"],
  cautionFor: ["完成した国内支援組織だけを望む人", "端末・ネットワークの実務を避けたい人"],
  unresolved: [
    ["組織", "国内法人設立直後。", "日本責任者、営業、顧客成功、支援、技術営業の現在人数と採用計画は。"],
    ["領域", "大企業・中堅企業の技術営業。", "担当社数、優先業界、既存顧客、新規案件、販売会社経由の比率は。"],
    ["成果", "技術検証から導入計画まで担当。", "評価指標、検証勝率、期間、導入後の引継ぎ、再利用資産の期待は。"],
    ["製品", "端末管理からバックアップまで広い。", "日本で最優先の製品、競合勝因、製品未対応、日本語化範囲は。"],
    ["報酬", "求人のOTE表記は桁区切りが曖昧。", "正確な基本給、変動給、比率、株式、評価指標は。"],
  ],
});

const hebbia = buildPreEntryIntelligence({
  checkedAt,
  slug: "hebbia", name: "Hebbia", homepage: "https://www.hebbia.com/about", growthUrl: "https://www.hebbia.com/blog/hebbia-raises-usd130m-series-b", careersUrl: "https://jobs.ashbyhq.com/hebbia-ai", customersUrl: "https://www.hebbia.com/customers/orrick", trustUrl: "https://www.hebbia.com/security", apacUrl: "https://jobs.ashbyhq.com/hebbia-ai/3b80247b-9924-4beb-8fd7-a8cce8b8d66f", externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html", linkedinUrl: "https://www.linkedin.com/company/hebbia-ai/",
  salesSnapshot: "投資銀行、資産運用、法律、企業戦略の責任者へ、大量文書を表形式で根拠を追いながら比較・分析するAIを提供する。顧客が抱える長い文書確認時間、数値の出典が追えない問題、案件ごとに分断した分析手順を解く。調査から企業買収の精査、契約審査、組織の知識運用まで提案を広げ、Singaporeから日本市場を作る余地が営業として面白い。",
  growthSummary: "2020年創業、4回の資金調達、2024年に1.3億ドルのSeries Bを会社発表。現在は顧客企業の運用資産30兆ドル、15億ページ、1日平均20万プロンプトを公式サイトに表示する。",
  verdict: "進出可能性は中。Singaporeから日本を明示的に担当するが、国内法人・拠点・求人・顧客事例は未確認",
  entryNarrative: "Hebbiaは金融・法務の文書分析に絞り、顧客企業の運用資産30兆ドルと15億ページの利用規模を公表している。初代APAC Sales LeadはSingaporeを拠点に日本を担当市場と出張先へ明記し、地域の販売方法と将来の組織を作る。一方、日本法人、東京拠点、日本居住者向け求人、国内顧客事例、日本語製品・支援は確認できない。Singaporeから日本の有償顧客と更新を再現し、金融機関のデータ・AI審査を日本語で通せるまで正式進出とは扱わない。",
  headcount: "51〜200人規模（LinkedIn企業ページ）", headcountDetail: "会社公式の厳密な現在値ではない外部プロフィールのレンジ。比較上は中央値相当を使う。",
  apacPresence: "Singaporeを本拠とする初代Sales Lead, APACを公式募集。Singapore、香港、豪州、日本等の案件開拓と東京への出張を明記。",
  productLanguage: "世界の金融・法務向け英語製品とセキュリティ情報は確認できるが、日本語製品、日本語支援、国内顧客、国内契約主体は未確認。",
  milestones: [
    { year: "2020", label: "創業", detail: "大規模言語モデルで非公開文書を扱う検索・分析を事業化。", source: "company" },
    { year: "2020", label: "RAG実用化", detail: "非公開データを読む運用型RAGを展開したと会社説明。", source: "company" },
    { year: "2024", label: "Series B", detail: "Andreessen Horowitz主導で1.3億ドルを調達。", source: "growth" },
    { year: "2025", label: "10億ページ", detail: "累計処理ページが前年4,700万から10億へ拡大したと発表。", source: "growth" },
    { year: "2026", label: "APAC販売開始", detail: "Singaporeで初代APAC営業責任者を募集。", source: "apac" },
    { year: "2026", label: "日本市場への遠隔営業開始", detail: "Singapore拠点のAPAC Sales Lead求人が日本を担当市場と東京への出張先に明記。日本法人・拠点の開設を意味しない。", source: "apac" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "Orrickは企業買収の精査を数日から数分へ短縮する目的でMatrixを使い、Apogem Capitalは1日12時間の文書確認を1〜2時間へ短縮したと公式サイトで紹介される。" },
    { title: "製品の成り立ちから見る課題", body: "チャットでは大量の非公開文書を同じ手順で比較し、根拠を追えないという問題から、表計算に近いMatrixと業務別エージェントへ発展した。" },
    { title: "外部環境の要求から見る課題", body: "金融・法務はAIによる速度を求める一方、守秘、権限、越境、根拠、誤答、人の承認を案件単位で説明する必要がある。" },
  ],
  narrative: [
    { label: "背景", body: "投資・法務の案件では、契約、財務、調査、議事録が数千文書へ増える。" },
    { label: "課題", body: "汎用チャットと手作業では、同じ観点での比較、数値の出典、例外、更新を再現しにくい。" },
    { label: "解決策", body: "限定した案件と文書群で抽出・比較・初稿を実行し、所要時間、根拠確認、修正、見落とし、利用率を測る。" },
    { label: "選定の理由", body: "Microsoft、OpenAI、Harvey、AlphaSense、内製RAGと比べ、金融・法務の表形式業務、根拠追跡、非公開データ、導入支援が優位なら選ぶ。" },
  ],
  openingHook: "投資・契約判断のために、何人が何時間かけて文書を読み、数字と根拠を表へ転記していますか。",
  valueHypothesis: "対象案件で文書確認時間、根拠検証、修正回数、見落とし、成果物作成時間、継続利用を導入前後で比べる。",
  objection: "汎用AIや既存の金融情報サービス、内製RAGで十分。",
  reframe: "モデル単体の回答力ではなく、非公開文書を同じ観点で比較し、各セルの根拠、人の確認、権限を案件成果物まで維持できるかで比較する。",
  facts: [
    { label: "創業", value: "2020年", detail: "金融・法務の知識労働向けAI。", source: "company" },
    { label: "Series B", value: "1.3億ドル", detail: "2024年、Andreessen Horowitz主導。", source: "growth" },
    { label: "顧客の運用資産", value: "30兆ドル", detail: "利用企業の合計。Hebbia自身の運用資産・売上ではない。", source: "company" },
    { label: "処理規模", value: "15億ページ", detail: "会社公式の現在表示。", source: "company" },
    { label: "APAC採用", value: "Singapore 1件", detail: "初代APAC Sales Lead。", source: "apac" },
    { label: "日本求人", value: "0件", detail: "Japan・Tokyo勤務地を公式求人で確認できず。", source: "careers" },
  ],
  customers: [
    { company: "Orrick", products: "Matrix", outcome: "企業買収の精査を数日から数分へ短縮し、契約条項、賃貸借、ガバナンス文書の分析へ広げたと公式事例で紹介。", implication: "高い正確性と守秘が必要な法律業務への参照になる。" },
    { company: "Apogem Capital", products: "Hebbia", outcome: "精査文書の確認を1日12時間から1〜2時間へ短縮したと公式イベントで紹介。", implication: "資産運用の大量文書分析への参照になる。" },
    { company: "Fisher Phillips", products: "Matrix", outcome: "生成AIの実験・業務別エージェントを安全に展開する場として利用すると公式サイトで紹介。", implication: "法律事務所の組織的AI利用への参照になる。" },
  ],
  externalSignals: [
    { label: "AIガバナンス", value: "根拠・人の確認・責任", detail: "高影響の金融・法務判断では、AI出力の検証、記録、権限、利用目的を業務工程へ組み込む必要がある。", caveat: "Hebbiaの導入だけで法令・ガイドラインへの適合を保証しない。" },
    { label: "越境データ", value: "契約と処理地域", detail: "顧客文書に個人・機密情報が含まれる場合、処理地域、委託先、保存、削除、事故対応の確認が必要。", caveat: "具体的要件は文書、顧客、国、契約で異なる。" },
  ],
  entryAssessment: {
    verdict: "進出可能性は中。APAC営業が日本を明示的に担当するが、国内の有償顧客、支援体制、契約基盤の証拠が必要",
    factSignals: [
      { title: "日本を担当市場に明記", body: "初代APAC Sales LeadがSingapore、香港、豪州、日本等の案件開拓を担当。", sourceIds: ["apac", "careers"] },
      { title: "東京への出張を明記", body: "公式求人がSingapore拠点から東京を含む地域出張を求める。", sourceIds: ["apac"] },
      { title: "金融向けの利用規模", body: "顧客企業の運用資産30兆ドル、15億ページ、1日20万プロンプトを公式表示。", sourceIds: ["company"] },
      { title: "大型資金調達", body: "2024年に1.3億ドルSeries Bを会社発表。", sourceIds: ["growth"] },
    ],
    hurdles: [
      { title: "国内法人・求人なし", body: "日本法人、東京拠点、日本居住者向け求人を確認できない。", sourceIds: ["careers", "apac"] },
      { title: "国内顧客事例なし", body: "日本企業名、用途、成果を示す公式顧客事例を確認できない。", sourceIds: ["customers"] },
      { title: "日本語の提供体制", body: "日本語製品、導入、支援、法務・セキュリティ審査の担当を確認できない。", sourceIds: ["company", "trust"] },
      { title: "金融データの越境審査", body: "機密文書の処理地域、委託先、保持、削除を日本顧客ごとに説明する必要がある。", sourceIds: ["trust", "external"] },
    ],
    readinessConditions: [
      { title: "日本の有償顧客", body: "Singaporeから国内金融・法務の導入と更新を複数再現する。" },
      { title: "日本語の導入・支援", body: "販売だけでなく技術検証、導入、顧客成功、支援を日本語で提供する。" },
      { title: "データ審査", body: "処理地域、委託先、権限、保持、削除、事故対応を国内要件に合わせる。" },
      { title: "国内契約基盤", body: "契約、請求、雇用、税務・労務の責任主体を明示する。" },
      { title: "日本専任組織", body: "営業、技術営業、顧客成功を含む小規模な国内体制を置く。" },
    ],
    watchSignals: ["Japan・Tokyo求人", "日本法人・国内拠点", "日本企業の公式顧客事例", "APAC求人の日本語要件", "国内金融・法律パートナー", "日本語製品・セキュリティ資料"],
  },
  sourceIds: ["company", "growth", "careers", "customers", "trust", "apac", "external", "linkedin"],
  salesMotion: "Singaporeの初代APAC営業責任者が、金融機関・法律事務所の経営層へ長期の複雑商談を作り、技術検証、受注、導入、将来の地域組織まで担う。",
  careerValue: "金融・法務向けAIの地域販売、長期大型商談、根拠付き文書分析、データ統制、将来の国別組織づくりを横断する可能性。",
  leader: { name: "George Sivulka", role: "Founder / CEO", read: "2020年に非公開文書を扱うRAGを実用化し、チャットではなく金融・法務の表形式業務へ製品を広げた。" },
  solutions: [
    { name: "Matrix", valueProp: "大量文書を同じ観点で表へ抽出・比較し、セルごとに根拠を追える。", url: "https://www.hebbia.com/product", competitors: "Microsoft、OpenAI、Harvey、AlphaSense、内製RAG。", differentiation: "金融・法務の反復可能な分析を表形式と出典で管理。" },
    { name: "Hebbia Max", valueProp: "金融業務向けの調査・分析エージェントを提供。", url: "https://www.hebbia.com/", competitors: "金融情報サービス、生成AIエージェント、内製。", differentiation: "非公開文書と金融文脈を案件成果物までつなぐ。" },
  ],
  fitTags: ["日本未進出", "Enterprise AI", "Financial Services", "Legal", "Document Analysis", "APAC"],
  comparisons: [
    { arena: "金融・法務AI", companies: ["Hebbia", "Harvey", "AlphaSense", "Microsoft"], why: "業務適合、根拠、非公開データ、導入支援" },
    { arena: "企業内文書分析", companies: ["Hebbia", "OpenAI", "Glean", "内製RAG"], why: "大量比較、権限、再現性、成果物、総費用" },
  ],
});

applyStandard(hebbia, buildCompactPatch({
  slug: "hebbia", leaderName: "George Sivulka", leaderLabel: "Founder / CEO", leaderUrl: "https://www.hebbia.com/about",
  localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://jobs.ashbyhq.com/hebbia-ai/3b80247b-9924-4beb-8fd7-a8cce8b8d66f",
  companyId: "hebbia-company", jobId: "hebbia-apac", customersId: "hebbia-customers", externalId: "hebbia-external", financeId: "hebbia-growth",
  targets: ["投資銀行・資産運用の調査責任者", "法律事務所・企業法務の業務責任者", "企業戦略・M&Aの分析責任者"],
  heroSummary: "投資・法務の大量文書を手作業や汎用チャットで読むと、比較、根拠確認、更新に時間がかかる課題を解く。表形式の分析と出典追跡で、守秘性の高い判断の速度と再現性を高める。",
  competitors: "Microsoft、OpenAI、Harvey、AlphaSense、内製RAG。業務適合、根拠追跡、非公開データ、権限、導入支援で比較。",
  feature: "金融・法務文書を同じ観点で表へ抽出・比較し、各セルの根拠を追跡できる。",
  advantage: "金融・法務の長文ワークフロー、30兆ドルの顧客運用資産、15億ページの処理規模を公表する。",
  benefit: "文書確認時間、根拠検証、修正、見落とし、成果物作成時間を改善できる可能性がある。",
  evidence: "OrrickとApogem Capitalの定量事例、Singaporeから日本を担当するAPAC営業求人を公式確認。",
  marketVerdict: "Singaporeから日本を明示的に開拓する初期段階。日本法人、拠点、日本求人、国内顧客事例は確認できず、正式進出とは扱わない。",
  marketParagraphs: ["金融・法務でAI利用が広がるほど、速度と同時に守秘、権限、根拠、人の確認を案件単位で説明する需要が増える。", "今後3〜5年の日本進出は、Singaporeから国内の有償顧客と更新を複数再現し、日本語の導入・支援とデータ審査を提供できるかが分岐点になる。"],
  cultureHeadline: "Singaporeから日本を含むAPACの販売方法と将来の組織を作る。",
  classification: "未確認", displayLabel: "Singapore拠点・東京出張", officeDays: "Singapore拠点", remoteOnly: "日本居住の完全リモートではない", flexibility: "APAC域内出張を含む",
  goodFor: ["金融・法務AIの地域市場を作りたい人", "根拠とデータ統制を大型商談へ変えたい人"],
  cautionFor: ["現時点で日本居住者向け求人を求める人", "日本語の導入・支援体制が完成した環境を必須とする人"],
  unresolved: [
    ["日本進出", "Singaporeから日本を担当。", "日本法人・拠点を設ける顧客数、売上、更新、販売パートナーの条件は。"],
    ["データ", "非公開文書を分析。", "日本顧客向けの処理地域、再委託先、保持、削除、権限、監査の条件は。"],
    ["業務成果", "海外定量事例あり。", "日本の金融・法務文書で、精度、根拠確認、時間短縮をどう検証しますか。"],
    ["支援", "初代APAC営業。", "技術検証、セキュリティ審査、導入、顧客成功を誰が日本語で担いますか。"],
    ["組織", "将来の地域組織を構築。", "最初の日本組織に営業、技術営業、顧客成功のどの職種を置く想定ですか。"],
  ],
}));
hebbia.researchedAt = checkedAt;
if (hebbia.cultureDeepDive) hebbia.cultureDeepDive.researchedAt = "2026.09.09";

function addGbizAudit(intelligence: CompanyPublicIntelligence, input: { slug: string; label: string; url: string; value: string; detail: string; office: string; since: string }) {
  const sourceId = `gbiz-headcount-${input.slug}`;
  intelligence.sources.push({ id: sourceId, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.value, detail: input.detail, sourceId };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "公式求人・会社情報と法人検索で確認できる範囲。", sourceId };
  intelligence.companyStats.japanSince = { value: input.since, detail: "法人設立年と営業開始年が異なる場合がある。", sourceId };
}

addGbizAudit(suse, { slug: "suse", label: "gBizINFO SUSEソフトウエアソリューションズジャパン株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3011101033959", value: "17人", detail: "厚生年金保険・健康保険適用事業所の被保険者数。役員・制度対象外・業務委託等を含む総従業員数ではない。", office: "東京都港区赤坂・ミッドタウンタワー18階", since: "国内法人を確認" });
addGbizAudit(ninjaone, { slug: "ninjaone", label: "gBizINFO NinjaOne Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=9010003052533", value: "公的被保険者数の掲載前", detail: "2026年9月2日の法人番号指定直後。事業所被保険者数はまだ掲載されておらず、0人とは扱わない。", office: "東京都中央区日本橋", since: "2026年" });
addGbizAudit(hebbia, { slug: "hebbia", label: "gBizINFO Hebbia法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", value: "対象法人未特定", detail: "米国Hebbiaと結びつく日本法人・事業所を特定できず、日本法人での想定従業員数を0人とは扱わない。", office: "日本法人住所なし", since: "日本拠点進出は未確認" });

export const daily20260909IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { suse, ninjaone, hebbia };

export function applyDaily20260909Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const intelligence = intelligenceBySlug.behavox;
  if (!intelligence) return;
  const detail = "Delivery Manager 3の公式Greenhouse APIが404となったため、Genba掲載求人から除外。東京のAccount Executive, Enterpriseは引き続き公式掲載されており、採用停止・日本事業縮小を示すものではない。";
  intelligence.researchedAt = checkedAt;
  intelligence.salesSnapshot = `銀行・証券・資産運用会社へ、コミュニケーション監視、取引監視、アーカイブ、規程、案件管理を一つのAI統制基盤として提供。2026年9月9日に東京のDelivery Manager求人終了を確認した。`;
  intelligence.facts = intelligence.facts.map((fact) => /日本.*求人|求人.*日本/.test(fact.label)
    ? { ...fact, value: "Genba掲載1件", detail: `${detail} 2026年9月9日確認。` }
    : fact);
  intelligence.marketStatus.milestones = [
    ...intelligence.marketStatus.milestones.filter((item) => !/Tokyo delivery採用|東京.*求人/.test(item.label)),
    { year: "2026.09.09", label: "東京Delivery求人終了", detail, sourceId: "behavox-job" },
  ];
  if (intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth = {
      ...intelligence.marketStatus.japanGrowth,
      headline: "東京拠点と国内顧客事例を確認、Enterprise Account Executiveを採用中。",
      narrative: `${detail} 公式Career全体の採用状況は継続観測する。`,
    };
  }
}
