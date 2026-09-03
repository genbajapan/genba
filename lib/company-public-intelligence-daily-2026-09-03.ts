import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-09-03";

type DailyInput = {
  profile: Profile;
  patch: CompactPatchInput;
  preEntry?: {
    verdict: string;
    factSignals: Array<[string, string, string[]]>;
    hurdles: Array<[string, string, string[]]>;
    conditions: Array<[string, string]>;
    watches: string[];
  };
};

function build(input: DailyInput) {
  const intelligence = buildIntelligence(input.profile);
  applyStandard(intelligence, buildCompactPatch(input.patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.09.03";
  if (input.preEntry && intelligence.marketStatus.japanGrowth) {
    intelligence.marketStatus.japanGrowth.headline = "日本法人・国内拠点・日本求人は未確認";
    intelligence.marketStatus.japanGrowth.narrative = `${input.profile.japanPresence}。現在応募できる日本求人があるとは扱わず、正式進出の成立条件を継続観測する。`;
    intelligence.marketStatus.japanGrowth.entryAssessment = {
      verdict: input.preEntry.verdict,
      factSignals: input.preEntry.factSignals.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      hurdles: input.preEntry.hurdles.map(([title, body, sourceIds]) => ({ title, body, sourceIds })),
      readinessConditions: input.preEntry.conditions.map(([title, body]) => ({ title, body })),
      watchSignals: input.preEntry.watches,
    };
  }
  return intelligence;
}

function addGbiz(intelligence: CompanyPublicIntelligence, input: { id: string; label: string; url: string; count: string; office: string }) {
  intelligence.sources.push({ id: input.id, label: input.label, url: input.url, kind: "公的機関", scope: "日本法人・事業所被保険者数・所在地", checkedAt });
  intelligence.companyStats.japanHeadcount = { value: input.count, detail: "gBizINFOの事業所被保険者数。役員・業務委託等を含む総在籍人数ではない。", sourceId: input.id };
  intelligence.companyStats.japanOffice = { value: input.office, detail: "gBizINFOの現行登記情報。実際の勤務先は公式求人で確認する。", sourceId: input.id };
}

const jamf = build({
  profile: {
    checkedAt,
    slug: "jamf",
    name: "Jamf",
    jobUrl: "https://www.jamf.com/about/careers/jobs/",
    officialUrl: "https://www.jamf.com/ja/about/",
    customersUrl: "https://www.jamf.com/ja/resources/case-studies/jbs/",
    externalUrl: "https://www.cyber.go.jp/policy/framework.html",
    financeUrl: "https://www.jamf.com/resources/press-releases/jamf-names-beth-tschida-as-chief-executive-officer/",
    salesSnapshot: "Apple端末が増えても、配布、設定、更新、ID、アプリ、脅威対策が別々の運用に残る課題を解く。Apple専用の管理とセキュリティを一つにつなぎ、利用者体験を損なわずに情報システム部門の統制と対応速度を高める。",
    growthSummary: "2024年の会社資料は33.2百万台と76,500超の顧客を公表。2026年にFrancisco Partners傘下となり、新CEOを任命した。日本では57人規模の法人と営業・営業技術・内勤営業の現行3求人を確認したが、日本売上・更新率・職種別人数は非公開。",
    ipoSummary: "2026年1月にFrancisco Partnersによる約22億ドルの買収が完了し、非公開企業となった。日本単体の売上・ARRは公表されていない。",
    milestones: [
      { year: "2002", label: "Jamf創業", detail: "Apple端末を企業・教育で管理する会社として米国ミネソタで創業。", source: "company" },
      { year: "2013", label: "日本法人設立", detail: "Jamf Japan合同会社を東京に設立。", source: "company" },
      { year: "2024", label: "33.2百万台", detail: "会社資料で76,500超の顧客と33.2百万台を公表。", source: "finance" },
      { year: "2026.01", label: "非公開化", detail: "Francisco Partnersによる約22億ドルの買収を完了。", source: "finance" },
      { year: "2026.05", label: "CEO交代", detail: "Beth TschidaをCEOに任命。", source: "finance" },
      { year: "2026.09", label: "日本で3職種採用", detail: "営業、営業技術、内勤営業を公式確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "JBSはMicrosoft中心の環境でもMacの設定・更新を利用者任せにせず、少数端末を情報システム部門の統制下へ置く必要があった。" },
      { title: "製品の成り立ちから見る課題", body: "学校のMac管理を簡単にする起点から、Apple専用の配布・設定・ID・アプリ・脅威対策へ対象を広げてきた。" },
      { title: "外部環境の要求から見る課題", body: "業務端末と生成AI利用が増えるほど、企業は端末の状態、更新、権限、情報持ち出し、脅威対応を継続して説明する必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "Apple端末の採用が部門や職種ごとに広がり、Windows中心の運用へ例外が増える。" },
      { label: "課題", body: "配布、設定、ID、更新、脅威対策が別々だと、利用者体験を損なわずに一貫した統制を保ちにくい。" },
      { label: "解決策", body: "対象部門のApple端末で配布から更新・認証・脅威対応をつなぎ、作業時間、準拠率、問い合わせ、検知・復旧時間を比較する。" },
      { label: "選定の理由", body: "Microsoft Intune、VMware Workspace ONE、Kandji、Mosyle等と比べ、Apple専用の深さ、既存基盤との連携、日本支援、総運用負荷に優位がある場合に選ぶ。" },
    ],
    openingHook: "入社者へMacを渡して安全に業務を始めるまで、何人が何時間を使い、設定漏れをどう確認していますか。",
    valueHypothesis: "対象部門で端末配布時間、更新準拠率、設定漏れ、問い合わせ、脅威の検知・復旧時間を導入前後で比較する。",
    objection: "Microsoft Intuneなど既存の統合端末管理で十分で、Apple専用製品を増やす必要はない。",
    reframe: "管理画面の数ではなく、Apple固有の更新・ID・脅威対応を既存環境へつないだときの運用時間、準拠率、利用者体験、総費用で比べる。",
    facts: [
      { label: "創業", value: "2002年", detail: "米国ミネソタで創業。" },
      { label: "管理端末", value: "33.2百万台", detail: "2024年会社資料。", source: "finance" },
      { label: "顧客", value: "76,500超", detail: "2024年会社資料。", source: "finance" },
      { label: "所有", value: "Francisco Partners", detail: "2026年に約22億ドルの買収を完了。", source: "finance" },
      { label: "国内規模", value: "57人", detail: "gBizINFO事業所被保険者数。", source: "company" },
      { label: "日本求人", value: "3件", detail: "営業、営業技術、内勤営業。", source: "job" },
    ],
    customers: [
      { company: "日本ビジネスシステムズ", products: "Jamf Pro", outcome: "Microsoft中心の環境でMac管理を強化し、会社事例は従来のMDM移行より短い構築期間だったと紹介。", implication: "少数のApple端末でも統制と運用効率を両立する参照になる。" },
      { company: "サイバーエージェント", products: "Jamf Pro", outcome: "会社事例は約7,000台のMac管理とAPIによる端末可視化を紹介。", implication: "大規模なApple運用と自動化の参照になる。" },
    ],
    externalSignals: [
      { label: "サイバーセキュリティ", value: "端末を含む継続管理", detail: "政府のサイバーセキュリティ政策は、組織的なリスク管理とサプライチェーンを含む対策を継続課題に置く。", caveat: "Jamf単独で要求を満たすことや安全性を保証しない。" },
      { label: "AI利用", value: "端末上の情報統制", detail: "生成AIの業務利用が増えるほど、端末状態、アプリ、権限、情報持ち出しを説明する必要がある。", caveat: "対象業務と既存統制を踏まえた検証が必要。" },
    ],
    role: "日本の新規・既存顧客で、営業、営業技術、内勤営業が販売パートナーとAppleを含む関係者を束ね、課題確認から技術評価、受注、拡大までを担う。",
    organization: "Jamf Japan合同会社の東京拠点。gBizINFOで57人を確認したが、営業・営業技術・顧客支援の職種別人数と報告系統は非公開。",
    careerValue: "Apple管理・ID・セキュリティを、利用者体験と企業統制の両方へ翻訳し、直販と販売パートナーを横断する経験。",
    globalHeadcount: "2,000人超（2024年会社資料）",
    japanPresence: "Jamf Japan合同会社・東京都港区",
    japanSince: "2013年に日本法人設立",
    solutions: [
      { name: "Jamf Pro", valueProp: "Mac、iPhone、iPadの配布・設定・更新・アプリを管理。", url: "https://www.jamf.com/ja/products/jamf-pro/", competitors: "Microsoft Intune、Workspace ONE、Kandji、Mosyle。", differentiation: "Apple専用の管理深度と運用自動化。" },
      { name: "Jamf Protect", valueProp: "Apple端末の脅威、挙動、準拠状態を可視化・保護。", url: "https://www.jamf.com/ja/products/jamf-protect/", competitors: "Microsoft Defender、CrowdStrike、SentinelOne。", differentiation: "Apple端末管理と安全対策を同じ文脈で運用。" },
      { name: "Jamf Connect", valueProp: "クラウドIDとMacの認証・アカウントを接続。", url: "https://www.jamf.com/ja/products/jamf-connect/", competitors: "Microsoft Entra ID、Okta、JumpCloud。", differentiation: "Macの初期設定と利用者認証をApple運用へ統合。" },
    ],
    fitTags: ["Apple", "Endpoint Management", "Security", "Enterprise", "Sales", "Tokyo"],
    comparisons: [
      { arena: "端末管理", companies: ["Jamf", "Microsoft Intune", "Omnissa"], why: "Apple専用性、統合、運用" },
      { arena: "Apple管理専業", companies: ["Jamf", "Kandji", "Mosyle"], why: "製品範囲、規模、日本支援" },
    ],
  },
  patch: {
    slug: "jamf", leaderName: "Beth Tschida", leaderLabel: "Chief Executive Officer", leaderUrl: "https://www.jamf.com/about/leadership/",
    localName: "狩野 央道", localLabel: "Jamf Japan カントリーマネージャー", localUrl: "https://www.jamf.com/ja/resources/press-releases/jamfjbs/",
    companyId: "jamf-company", jobId: "jamf-job", customersId: "jamf-customers", externalId: "jamf-external", financeId: "jamf-finance",
    targets: ["情報システム責任者", "端末・ID管理責任者", "セキュリティ責任者"],
    heroSummary: "Apple端末が増えても、配布、設定、更新、ID、アプリ、脅威対策が別々の運用に残る課題を解く。Apple専用の管理とセキュリティを一つにつなぎ、利用者体験を損なわずに統制と対応速度を高める。",
    competitors: "Microsoft Intune、Omnissa Workspace ONE、Kandji、Mosyle、Microsoft Defender、CrowdStrike。Apple専用性、既存統合、運用時間、準拠率、総費用で比較する。",
    feature: "Apple端末の配布・設定・更新、アプリ、ID、脅威対策を管理・セキュリティ製品群でつなぐ。",
    advantage: "20年以上のApple専業知見と33.2百万台の運用基盤を、管理・ID・安全対策へ一貫して適用する。",
    benefit: "端末配布と更新の工数、設定漏れ、問い合わせ、脅威対応時間を減らしながら利用者体験を保てる可能性がある。",
    evidence: "日本ビジネスシステムズの公式事例は、Microsoft中心の環境でもJamf ProでMac管理を強化し、短期間で構築したと紹介。",
    marketVerdict: "日本法人13年、57人規模、豊富な国内事例、現行3求人を確認。非公開化後もApple管理とセキュリティを日本で拡張できるかが焦点。",
    marketParagraphs: ["Apple端末と端末上のAI利用が増えるほど、利用者体験を損なわず設定・ID・脅威を継続管理する需要は続く。", "今後3〜5年はMDM単体ではなく、Microsoft等の既存基盤と共存しながら管理・ID・安全対策を一つの成果へ結べるかが成長を分ける。"],
    cultureHeadline: "57人規模の日本法人で、Apple専用の直販・技術・販売網を横断する組織。",
    classification: "出社中心", displayLabel: "東京オフィス勤務", officeDays: "出社頻度は未確認", remoteOnly: "完全リモートではない", flexibility: "職種により出張10〜30%。詳細は面接確認",
    goodFor: ["Apple運用を企業統制と顧客成果へ翻訳したい人", "直販・技術・販売パートナーを横断したい人"],
    cautionFor: ["OS横断の製品だけを扱いたい人", "顧客・販売パートナー訪問を避けたい人"],
    unresolved: [["非公開化後の計画", "2026年にFrancisco Partners傘下。", "日本の投資、製品統合、目標はどう変わったか。"], ["達成可能性", "営業3職種を採用。", "quota、達成率、ACV、cycle、既存・新規の構成は。"], ["競争", "既存統合端末管理と競合。", "Intune等との共存・置換で直近の勝因と敗因は。"], ["支援体制", "国内規模57人。", "営業、SE、CS、Support、Partnerの人数と責任境界は。"], ["報酬・昇進", "給与・評価指標は非公開。", "pay mix、株式、評価KPI、専門職・管理職の昇進基準は。"]],
  },
});

addGbiz(jamf, { id: "gbiz-headcount-jamf", label: "gBizINFO Jamf Japan合同会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2010401128965", count: "57人", office: "東京都港区" });

const matterport = build({
  profile: {
    checkedAt,
    slug: "matterport",
    name: "Matterport",
    jobUrl: "https://www.costargroup.com/careers",
    officialUrl: "https://matterport.com/ja/about-us",
    customersUrl: "https://matterport.com/ja/industries/customer-stories",
    externalUrl: "https://www.mlit.go.jp/tochi_fudousan_kensetsugyo/const/ifc.html",
    financeUrl: "https://www.costargroup.com/press-room/2025/costar-group-completes-acquisition-matterport-ushering-new-era-3d-digital-twins-and",
    ipoSummary: "2025年2月にCoStar Groupが買収を完了し、Matterport単体では非公開。親会社はNASDAQ上場だが、日本単体の売上・投資額は公表されていない。",
    salesSnapshot: "建物の状態が写真、図面、現地担当者の記憶へ分かれ、調査・施工・販売・保守のたびに現地確認と手戻りが生じる課題を解く。空間を3Dデジタルツインへ変え、遠隔確認、寸法、記録、共有を同じデータへまとめる。",
    growthSummary: "2025年2月のCoStar Group買収完了時点で177カ国、1,400万超の空間、500億平方フィートのデジタル化を公表。日本では6人規模の法人と直販、販売パートナー、顧客技術支援の現行3求人を確認したが、日本売上・更新率は非公開。",
    milestones: [
      { year: "2011", label: "Matterport創業", detail: "現実空間をデータ化する3D撮影・処理技術を開発。", source: "company" },
      { year: "2021", label: "NASDAQ上場", detail: "Matterportとして公開企業化。", source: "finance" },
      { year: "2022", label: "日本法人設立", detail: "マーターポート株式会社の法人番号指定。", source: "company" },
      { year: "2025.02", label: "CoStar Group傘下", detail: "買収を完了し、不動産データ・市場基盤との統合へ。", source: "finance" },
      { year: "2026.09", label: "日本で3職種採用", detail: "直販、販売パートナー、顧客技術支援を公式確認。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "三菱地所は物件の現地確認や関係者共有をデジタル化し、遠隔でも空間の状態を共通理解できるようにする必要があった。" },
      { title: "製品の成り立ちから見る課題", body: "専用カメラと立体処理で現実空間を再現する起点から、スマートフォン撮影、寸法、注記、外部連携、AIによる空間理解へ広げた。" },
      { title: "外部環境の要求から見る課題", body: "建設・不動産の人手不足と生産性要求が強まる一方、企業は設計、施工、検査、販売、保守で同じ建物情報を再利用し、手戻りを減らす必要がある。" },
    ],
    narrative: [
      { label: "背景", body: "建物の関係者が増え、現地の状態を写真、図面、口頭で別々に共有する。" },
      { label: "課題", body: "必要な箇所・寸法・時点が揃わず、現地再訪、認識違い、施工・保守の手戻りが増える。" },
      { label: "解決策", body: "対象物件を3D化し、現地訪問、確認時間、手戻り、成約・工期、保守対応を導入前後で比較する。" },
      { label: "選定の理由", body: "Cupix、NavVis、Leica、各種360度カメラ、内製撮影と比べ、撮影の容易さ、空間精度、共有、外部連携、保有コストに優位がある場合に選ぶ。" },
    ],
    openingHook: "一つの物件で確認のために現地へ戻る回数と、関係者が写真・図面を探す時間は月にどれくらいですか。",
    valueHypothesis: "対象物件で現地訪問回数、確認時間、手戻り、工期、問い合わせ、成約までの日数を導入前後で比較する。",
    objection: "スマートフォン写真、360度カメラ、既存の図面・BIMで十分で、専用の空間基盤は不要。",
    reframe: "画像の見栄えではなく、現地再訪と手戻りを減らし、同じ空間データを計画・施工・販売・保守で再利用できるかで比べる。",
    facts: [
      { label: "創業", value: "2011年", detail: "米国で創業。" },
      { label: "対象国", value: "177カ国", detail: "2025年買収完了時の会社公表。", source: "finance" },
      { label: "空間", value: "1,400万超", detail: "2025年買収完了時の会社公表。", source: "finance" },
      { label: "デジタル化面積", value: "500億平方フィート", detail: "2025年買収完了時。", source: "finance" },
      { label: "2024年売上高", value: "$169.699M", detail: "Matterport単体の買収前最終Form 10-K。", source: "finance" },
      { label: "国内規模", value: "6人", detail: "gBizINFO事業所被保険者数。", source: "company" },
      { label: "日本求人", value: "3件", detail: "直販、販売パートナー、顧客技術支援。", source: "job" },
    ],
    customers: [
      { company: "三菱地所", products: "Matterport", outcome: "会社事例はオフィス等の空間を3D化し、遠隔での内覧・確認と関係者共有へ活用した取り組みを紹介。", implication: "大規模不動産で空間情報を再利用する国内参照になる。" },
      { company: "AECOM", products: "Matterport", outcome: "会社事例は現場記録と関係者共有をデジタルツインで支援。", implication: "設計・施工・顧客をまたぐ建物情報の共通化を検討できる。" },
    ],
    externalSignals: [
      { label: "建設DX", value: "BIM・データ連携", detail: "国土交通省は建築分野でBIMを通じた情報活用と生産性向上を推進している。", caveat: "Matterport単独の効果やBIM適合を保証しない。" },
      { label: "人手不足", value: "現地作業の削減", detail: "人手制約が続くほど、現地確認と手戻りを減らし、空間情報を複数工程で再利用する価値が高まる。", caveat: "効果は物件・工程・運用で検証が必要。" },
    ],
    role: "日本の新規大手顧客を直販で開拓し、販売パートナーを育成し、撮影機器・アプリ・クラウド・外部連携の技術課題を顧客成果まで支援する。",
    organization: "マーターポート株式会社の東京拠点。gBizINFOで6人を確認し、CoStar Groupの営業・製品・技術組織と連携するが、国内の職種別人数は非公開。",
    careerValue: "3D空間データを、建設・不動産・小売・施設運用の現地コストと手戻りへ翻訳し、直販・販売網・技術支援を横断する経験。",
    globalHeadcount: "Matterport単体は非公開（CoStar Group傘下）",
    japanPresence: "マーターポート株式会社・東京都港区",
    japanSince: "2022年に日本法人の法人番号指定を確認",
    solutions: [
      { name: "Matterport Digital Twins", valueProp: "建物を撮影し、遠隔で確認・共有・測定できる3D空間へ変換。", url: "https://matterport.com/ja/platform", competitors: "Cupix、NavVis、各種360度撮影。", differentiation: "撮影からクラウド処理・共有までの一体運用。" },
      { name: "Matterport Pro3", valueProp: "屋内外の広い空間を高精度に撮影。", url: "https://matterport.com/ja/cameras/pro3", competitors: "Leica、FARO、NavVis。", differentiation: "専用カメラとMatterport基盤を直接接続。" },
      { name: "Matterport APIs / SDKs", valueProp: "空間データを既存の物件・施工・業務システムへ組み込む。", url: "https://matterport.com/developers", competitors: "内製3D基盤、BIM viewer。", differentiation: "既存の大規模空間データと作成・共有体験を再利用。" },
    ],
    fitTags: ["Digital Twin", "Spatial Data", "PropTech", "Enterprise", "Sales", "Tokyo"],
    comparisons: [
      { arena: "空間デジタルツイン", companies: ["Matterport", "Cupix", "NavVis"], why: "撮影、精度、共有、費用" },
      { arena: "建物情報", companies: ["Matterport", "Autodesk", "Leica"], why: "工程、連携、再利用" },
    ],
  },
  patch: {
    slug: "matterport", leaderName: "Andy Florance", leaderLabel: "CoStar Group Founder & CEO", leaderUrl: "https://www.costargroup.com/about-us/leadership",
    localName: "未確認", localLabel: "Matterport日本事業責任者", localUrl: "https://www.costargroup.com/careers",
    companyId: "matterport-company", jobId: "matterport-job", customersId: "matterport-customers", externalId: "matterport-external", financeId: "matterport-finance",
    targets: ["建設・不動産DX責任者", "施設・店舗運用責任者", "設計・施工・保守責任者"],
    heroSummary: "建物の状態が写真、図面、現地担当者の記憶へ分かれ、調査・施工・販売・保守のたびに現地確認と手戻りが生じる課題を解く。空間を3Dデジタルツインへ変え、遠隔確認、寸法、記録、共有を同じデータへまとめる。",
    competitors: "Cupix、NavVis、Leica、FARO、Autodesk、各種360度カメラ、内製撮影。撮影負荷、精度、共有、外部連携、再利用、総費用で比較する。",
    feature: "専用カメラやスマートフォンで空間を撮影し、3D処理、測定、注記、共有、外部連携をクラウドで提供する。",
    advantage: "177カ国・1,400万超の空間データと、撮影機器からクラウド共有までの一体体験を持つ。",
    benefit: "現地再訪、確認時間、認識違い、施工・保守の手戻りを減らし、建物情報を複数工程で再利用できる可能性がある。",
    evidence: "三菱地所等の国内公式事例と、177カ国・1,400万超の空間・500億平方フィートの会社公表規模を確認。成果は顧客運用を含む。",
    marketVerdict: "6人規模の日本法人で直販、販売パートナー、顧客技術支援の3職種を同時採用。CoStar統合後の国内販売方法を作る局面。",
    marketParagraphs: ["人手不足と建設・不動産DXで、現地確認を減らし、同じ空間情報を複数工程で再利用する需要は続く。", "今後3〜5年は3D内覧だけでなく、CoStarの不動産データと空間データを日本の設計・施工・運用成果へ結べるかが成長を分ける。"],
    cultureHeadline: "6人規模の日本法人で、CoStar傘下の直販・販売網・顧客技術を作る局面。",
    classification: "ハイブリッド", displayLabel: "東京・虎ノ門へ通勤可能", officeDays: "出社頻度は未確認", remoteOnly: "Channel職はHome-based表記", flexibility: "職種により顧客・Partner訪問あり。詳細は面接確認",
    goodFor: ["物理現場の課題をソフトウェア価値へ翻訳したい人", "小規模な日本組織で職種横断したい人"],
    cautionFor: ["完全な内勤だけを望む人", "完成した国内分業体制を前提にする人"],
    unresolved: [["CoStar統合", "2025年に買収完了。", "製品、顧客データ、営業組織の統合計画と日本への影響は。"], ["達成可能性", "営業2職種を採用。", "quota、達成率、ACV、4〜9カ月商談の勝率は。"], ["販売網", "Channel職を採用。", "稼働Partner数、Partner起点pipeline、教育・技術支援の分担は。"], ["顧客支援", "Support Engineerを採用。", "案件数、重要対応、Support・QA・Productの責任境界は。"], ["報酬・昇進", "給与・評価指標は非公開。", "pay mix、株式、評価KPI、CoStar内の昇進・異動経路は。"]],
  },
});

addGbiz(matterport, { id: "gbiz-headcount-matterport", label: "gBizINFO マーターポート株式会社", url: "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=3010401164200", count: "6人", office: "東京都港区" });
matterport.sources.push({ id: "matterport-sec-2024", label: "Matterport 2024 Form 10-K", url: "https://www.sec.gov/Archives/edgar/data/1819394/000181939425000007/mttr-20241231.htm", kind: "法定開示", scope: "2024年売上高・事業規模", checkedAt });
const matterportRevenue = matterport.facts.find((fact) => fact.label === "2024年売上高");
if (matterportRevenue) matterportRevenue.sourceIds = ["matterport-sec-2024"];

const gamma = build({
  profile: {
    checkedAt,
    jobConfirmed: false,
    slug: "gamma",
    name: "Gamma",
    jobUrl: "https://careers.gamma.app/",
    officialUrl: "https://gamma.app/about",
    customersUrl: "https://gamma.app/",
    externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
    financeUrl: "https://gamma.app/insights/how-we-built-a-usd100m-business-differently",
    salesSnapshot: "伝えたい内容はあっても、構成、文章、図版、レイアウト、共有形式の調整に時間がかかる課題を解く。メモや指示からプレゼンテーション、文書、Webページを生成し、共同編集・公開・分析までを同じ作成基盤へまとめる。",
    growthSummary: "2025年11月の会社公式記事はARR 1億ドル、評価額21億ドル、利用者7,000万人、1日100万件、従業員50人、2年間の黒字を公表。2026年の会社公式調査は利用者1億人・累計6.25億件超を示すが、日本法人・国内拠点・日本求人は未確認。",
    ipoSummary: "非公開企業。2025年11月にSeries Bで6,800万ドルを調達し評価額21億ドルと公表したが、IPO時期、日本売上、日本法人計画は未公表。",
    milestones: [
      { year: "2020", label: "Gamma創業", detail: "Grant Lee、James Fox、Jon Noronhaが従来のスライド作成を置き換える構想で開始。", source: "company" },
      { year: "2022", label: "AIへ集中", detail: "約6万人の利用者と限られた資金の中で、AI中心の製品へ再設計。", source: "finance" },
      { year: "2023", label: "黒字化", detail: "会社は2025年時点で2年間黒字と公表。", source: "finance" },
      { year: "2025.11", label: "ARR 1億ドル", detail: "Series B、評価額21億ドル、従業員50人を公表。", source: "finance" },
      { year: "2026", label: "利用者1億人", detail: "会社公式のCreation Indexで累計6.25億件超を公表。", source: "company" },
      { year: "2026.09", label: "日本状況を確認", detail: "日本法人・国内拠点・日本求人は確認できず。", source: "job" },
    ],
    issueLenses: [
      { title: "既存顧客の導入目的から見る課題", body: "会社公式に掲載された利用者コメントは、営業資料、教育、提案、企画の内容作成とデザイン調整にかかる時間を減らす目的を示す。ただし組織単位の定量成果は未確認。" },
      { title: "製品の成り立ちから見る課題", body: "PowerPointのテンプレート調整へ時間を使う体験への反発から始まり、AIによる構成・文章・デザインと、文書・Web・SNSまでを一つの作成体験へ広げた。" },
      { title: "外部環境の要求から見る課題", body: "生成AIで作成量が増えるほど、企業は情報源、ブランド、権限、機密データ、出力品質、公開前承認を説明できる運用が必要になる。" },
    ],
    narrative: [
      { label: "背景", body: "営業、企画、教育など多くの職種が、内容作成よりレイアウト調整と形式変換へ時間を使う。" },
      { label: "課題", body: "汎用AIで文章を作っても、構成、図版、ブランド、共同編集、公開が別工程に残り、手戻りと品質差が減らない。" },
      { label: "解決策", body: "対象資料を限定し、初稿時間、修正回数、ブランド逸脱、共同編集、公開後の閲覧・反応を導入前後で比較する。" },
      { label: "選定の理由", body: "Microsoft PowerPoint/Copilot、Google Slides/Gemini、Canva、Beautiful.ai等と比べ、初稿速度、編集自由度、ブランド統制、共有、既存形式との互換性に優位がある場合に選ぶ。" },
    ],
    openingHook: "提案資料の内容が固まってから顧客へ見せられる初稿になるまで、何人が何時間をレイアウトと差し戻しに使っていますか。",
    valueHypothesis: "対象資料で初稿までの時間、修正回数、再利用率、ブランド逸脱、共同編集時間、閲覧・反応を導入前後で比較する。",
    objection: "Microsoft 365、Google Workspace、Canvaと汎用AIで十分で、新しい作成基盤を増やす必要はない。",
    reframe: "生成品質の印象ではなく、内容から公開までの時間、ブランドと権限、共同編集、既存形式への受け渡し、総費用で比べる。",
    facts: [
      { label: "創業", value: "2020年", detail: "サンフランシスコで創業。" },
      { label: "ARR", value: "1億ドル", detail: "2025年11月会社公式。", source: "finance" },
      { label: "評価額", value: "21億ドル", detail: "2025年11月Series B。", source: "finance" },
      { label: "従業員", value: "50人", detail: "2025年11月会社公式。現員は変動あり。", source: "finance" },
      { label: "利用者", value: "1億人", detail: "2026年会社公式。", source: "company" },
      { label: "日本求人", value: "0件", detail: "現行公式採用ページで確認。", source: "job" },
    ],
    customers: [
      { company: "営業・企画・教育等の利用者", products: "Gamma", outcome: "会社公式サイトは、構成・デザインを含む資料作成の時間短縮に関する利用者コメントを掲載。", implication: "部門ごとに初稿時間と修正回数を測る仮説になる。" },
      { company: "組織利用", products: "Gamma for Teams / Business", outcome: "共有フォルダ、管理、SSO、高度なデータ制御を公式に提供。組織単位の定量成果は未確認。", implication: "個人利用から企業統制へ広げるための製品条件を持つ。" },
    ],
    externalSignals: [
      { label: "AIガバナンス", value: "作成物の説明責任", detail: "経済産業省のAI事業者ガイドラインは、リスクに応じたガバナンスと関係者への説明を求める。", caveat: "Gamma単独の適法性・安全性を保証しない。" },
      { label: "作成量の増加", value: "品質とブランド管理", detail: "生成AIで資料の作成量が増えるほど、情報源、権限、ブランド、公開前確認を業務として設計する必要がある。", caveat: "効果は用途・入力情報・確認工程で異なる。" },
    ],
    role: "日本向け公式求人は0件。現行採用ページは主にサンフランシスコの職種を掲載し、日本法人・国内雇用・APAC営業責任者は確認できない。",
    organization: "サンフランシスコ発の小規模な世界組織。日本法人・国内拠点・日本語の営業・顧客支援組織は確認できない。",
    careerValue: "AI作成基盤の高成長と企業利用を観測し、日本進出に必要な契約・ブランド・安全・顧客支援の成立条件を見極める。",
    globalHeadcount: "50人（2025年11月会社公式。現員は変動あり）",
    japanPresence: "日本法人・国内拠点・日本向け公式求人は未確認。日本語作成には対応",
    japanSince: "正式な日本進出時期は未確認",
    solutions: [
      { name: "Gamma", valueProp: "指示や文章からプレゼンテーション、文書、Webページを生成・編集・共有。", url: "https://gamma.app/", competitors: "PowerPoint、Google Slides、Canva、Beautiful.ai。", differentiation: "構成・文章・デザイン・公開を一つのAI作成体験へまとめる。" },
      { name: "Gamma for Teams / Business", valueProp: "共有フォルダ、ブランド、管理、SSO、データ制御を組織へ提供。", url: "https://gamma.app/pricing/teams", competitors: "Microsoft 365、Google Workspace、Canva Enterprise。", differentiation: "個人の高速作成と組織統制を同じ基盤で扱う。" },
      { name: "Gamma API", valueProp: "外部業務から資料・文書・Web作成を自動化。", url: "https://developers.gamma.app/", competitors: "各種生成AI API、文書自動化製品。", differentiation: "Gammaの作成・レイアウト・公開体験を業務へ組み込む。" },
    ],
    fitTags: ["日本進出の観測", "AI", "Presentation", "Collaboration", "Enterprise"],
    comparisons: [
      { arena: "資料作成", companies: ["Gamma", "Microsoft", "Google"], why: "初稿、互換性、統制" },
      { arena: "AIデザイン", companies: ["Gamma", "Canva", "Beautiful.ai"], why: "自由度、ブランド、共有" },
    ],
  },
  patch: {
    slug: "gamma", leaderName: "Grant Lee", leaderLabel: "共同創業者・CEO", leaderUrl: "https://gamma.app/insights/how-we-built-a-usd100m-business-differently",
    localName: "未確認", localLabel: "日本・APAC責任者", localUrl: "https://careers.gamma.app/",
    companyId: "gamma-company", jobId: "gamma-job", customersId: "gamma-customers", externalId: "gamma-external", financeId: "gamma-finance",
    targets: ["営業・提案企画責任者", "ブランド・コンテンツ責任者", "情報システム・AI活用責任者"],
    heroSummary: "伝えたい内容はあっても、構成、文章、図版、レイアウト、共有形式の調整に時間がかかる課題を解く。メモや指示からプレゼンテーション、文書、Webページを生成し、共同編集・公開・分析までを同じ作成基盤へまとめる。",
    competitors: "Microsoft PowerPoint/Copilot、Google Slides/Gemini、Canva、Beautiful.ai、汎用AI。初稿速度、編集自由度、ブランド、権限、共有、互換性、総費用で比較する。",
    feature: "指示や文章から構成、文章、図版、レイアウトを生成し、プレゼンテーション、文書、Webページの編集・共有・分析までつなぐ。",
    advantage: "1億人の利用と1日100万件規模で磨く作成体験を、共有、ブランド、SSO、データ制御、APIへ広げる。",
    benefit: "初稿と形式調整の時間、修正回数、ブランド逸脱を減らし、作成から共有までを速められる可能性がある。",
    evidence: "会社は2025年にARR 1億ドル、従業員50人、2年間の黒字、2026年に利用者1億人を公表。企業単位の定量事例は未確認。",
    marketVerdict: "世界利用と収益性は強いが、日本法人・拠点・求人・国内の公式顧客事例を確認できず、進出可能性は探索段階。",
    marketParagraphs: ["生成AIで資料作成の初稿は速くなる一方、企業ではブランド、権限、機密情報、共同編集、公開前承認を一体で管理する需要が増える。", "今後3〜5年は自然流入と日本語対応だけでなく、日本の契約・営業・顧客支援と企業向け統制を置く判断が正式進出を分ける。"],
    cultureHeadline: "50人でARR 1億ドルへ到達した小規模組織。日本での雇用・勤務は未確認。",
    classification: "出社中心", displayLabel: "日本向け勤務は未確認", officeDays: "日本拠点なし", remoteOnly: "現行求人は主にサンフランシスコ", flexibility: "日本からの雇用・勤務条件は確認できない",
    goodFor: ["AI作成基盤の企業利用と進出条件を継続観測したい人", "小規模・高成長の製品組織を研究したい人"],
    cautionFor: ["現在日本から応募したい人", "国内契約・支援体制を必須とする人"],
    unresolved: [["日本需要", "日本語を含む60超の言語に対応。", "日本の有償組織数、利用用途、更新率、問い合わせは。"], ["企業利用", "Team・Business機能を提供。", "ブランド、権限、データ制御が利用拡大へ与える効果は。"], ["進出基盤", "日本法人・拠点・求人なし。", "契約、請求、雇用、営業、顧客支援を置く判断条件は。"], ["競争", "既存suiteへAIが統合。", "PowerPoint、Google、Canvaとの共存・置換で勝つ用途は。"], ["情報統制", "企業向けデータ制御を提供。", "日本語の安全資料、法務審査、保管・学習設定をどう支援するか。"]],
  },
  preEntry: {
    verdict: "進出可能性は探索段階。日本語での利用は可能だが、日本の法人・雇用・販売・顧客支援へ投資する公式シグナルは未確認",
    factSignals: [["日本語対応", "日本語を含む60超の言語で作成できる。", ["gamma-company"]], ["世界利用", "2026年に利用者1億人、累計6.25億件超を会社が公表。", ["gamma-company"]], ["企業機能", "共有、管理、SSO、高度なデータ制御を提供。", ["gamma-customers"]], ["日本求人0件", "現行公式採用ページで日本・APACのcommercial職を確認できない。", ["gamma-job"]]],
    hurdles: [["法人・雇用", "日本法人、国内拠点、雇用主体を確認できない。", ["gamma-company"]], ["国内実績", "日本企業の組織単位の公式事例と定量成果を確認できない。", ["gamma-customers"]], ["既存suite", "Microsoft、Google、Canvaの既存契約とAI機能に勝つ必要がある。", ["gamma-company"]], ["local support", "日本語の営業、導入、顧客支援、法務・安全審査体制が未確認。", ["gamma-job"]]],
    conditions: [["国内の有償実績", "複数組織で本番利用、更新、拡大を確認。"], ["Japan commercial owner", "日本市場の営業・顧客支援責任者を配置。"], ["契約・請求・雇用", "国内の販売・契約・請求・雇用経路を明確化。"], ["企業統制", "日本語の安全・法務資料とブランド・権限運用を提供。"], ["現行Japan求人", "公式採用で日本市場の職務を確認。"]],
    watches: ["Japan・APAC求人", "日本法人・国内拠点", "国内企業の公式事例", "日本語Trust資料", "国内販売Partner", "日本向け契約・請求"],
  },
});

gamma.sources.push({ id: "gbiz-headcount-gamma", label: "gBizINFO 法人検索", url: "https://info.gbiz.go.jp/hojin/ichiran", kind: "公的機関", scope: "日本法人・事業所情報・被保険者数", checkedAt });
gamma.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "gBizINFOで対応する日本法人を特定できず、事業所情報の被保険者数を0人とは扱わない。", sourceId: "gbiz-headcount-gamma" };

export const daily20260903IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { jamf, matterport, gamma };
