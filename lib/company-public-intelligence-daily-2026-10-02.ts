import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildDailyCompanyIntelligence } from "@/lib/company-public-intelligence-daily-2026-09-11";

const checkedAt = "2026-10-02";

const cohesity = buildDailyCompanyIntelligence({
  slug: "cohesity", name: "Cohesity", jobConfirmed: true,
  jobUrl: "https://www.cohesity.com/careers/open-positions/?gh_jid=fbb6c49dd8c11001d8381318e10e0000&type=wd", officialUrl: "https://www.cohesity.com/company/",
  customersUrl: "https://www.cohesity.com/ja-jp/customers/", financeUrl: "https://www.cohesity.com/newsroom/press/cohesity-completes-combination-with-veritas-enterprise-data-protection-business/",
  problem: "バックアップ、ファイル、オブジェクト、アーカイブが製品・拠点ごとに分断し、障害やランサムウェア時の復旧、権限管理、監査、データ活用が複雑になる課題を解く。",
  origin: "Google File Systemの設計に携わり、Nutanix共同創業者でもあるMohit Aronが、一次ストレージより複雑化していた二次データを一つの分散基盤へまとめるため2013年に創業した。",
  externalNeed: "ランサムウェアと生成AI利用が同時に広がるほど、企業はデータを保存するだけでなく、改ざん耐性、復旧時間、機密情報の発見、AIへ渡す権限と系譜を一体で統制する必要がある。",
  solution: "バックアップと復旧、サイバー金庫、脅威検知、データ分類、企業データを検索・要約するAIを単一の管理面で提供する。",
  selection: "保存容量や単価だけでなく、復旧の確実性、改ざん耐性、既存環境との接続、管理工数、データ分類、AI利用時の権限・監査、販売パートナーの導入能力で比較する。",
  growth: "VeritasのEnterprise Data Protection事業との統合後、会社公式は13,600社超の顧客、Fortune 100の85社超、Global 500の約70%が利用と説明。日本でNTT担当のチャネル開発職を募集している。",
  role: "NTT Channel Development Managerが担当販売パートナーの事業計画、案件創出、販売・技術支援、共同マーケティング、予測と成約率を持ち、日本の予約売上を伸ばす。",
  organization: "Cohesity Japan株式会社を2018年に設立し東京に拠点を置く。国内顧客事例と日本向け公式求人を確認したが、正確な国内在籍人数は未確認。",
  career: "サイバー復旧、企業データ保護、AI活用を一つの提案へ束ね、NTTを含む販売パートナーの販売・技術・サービス能力を事業成果へ変える経験。",
  globalHeadcount: "5,001〜10,000人規模（外部公開レンジ、Veritas事業統合後）", japanPresence: "Cohesity Japan株式会社・東京。2018年設立、国内顧客事例と日本向け求人を確認", japanSince: "2018年に日本法人設立",
  customer: { company: "前橋赤十字病院", outcome: "公式事例はCisco XDRとCohesityを組み合わせ、ランサムウェア防御と復旧、事業継続を強化したと説明。公開された定量成果は確認できない。" },
  facts: [["創業","2013年","企業の二次データを統合する分散基盤として創業。"],["顧客","13,600社超","会社公式、Veritas事業統合後。"],["大手導入","Fortune 100の85社超","会社公式。"],["日本法人","2018年設立","東京のCohesity Japan株式会社。"],["国内顧客","複数確認","赤十字病院、Fukui Systemsなど。"],["日本求人","1件","NTT Channel Development Manager。"]],
  products: [["Cohesity DataProtect","オンプレミスとクラウドのバックアップ、復旧、管理を統合する。","https://www.cohesity.com/products/dataprotect/"],["Cohesity FortKnox","隔離されたサイバー金庫で改ざん耐性と復旧を支援する。","https://www.cohesity.com/products/fortknox/"],["Cohesity Gaia","権限を維持した企業データ検索・要約を生成AIで支援する。","https://www.cohesity.com/products/gaia/"],],
  competitors: "Rubrik、Commvault、Veeam、Dell、既存バックアップ製品とクラウド保管の組合せ",
  leader: ["Sanjay Poonen","Chief Executive Officer and President","https://www.cohesity.com/company/leadership/"], local: ["未確認","日本事業責任者","https://www.cohesity.com/ja-jp/"],
  work: ["ハイブリッド","Tokyo, Japan","通勤圏の社員は週2〜3日出社","東京オフィスを基点","販売パートナー対応で50%超の出張を想定"],
}, checkedAt);
cohesity.sources.push(
  { id: "cohesity-origin", label: "Cohesity emerges from stealth", url: "https://www.cohesity.com/newsroom/press/cohesity-emerges-from-stealth-mode-with-70-million-in-venture-funding-to-deliver-smarter-more-efficient-secondary-storage/", kind: "企業公式", scope: "創業者・創業背景・創業年", checkedAt },
  { id: "cohesity-japan", label: "Cohesity Japan representative appointment", url: "https://www.cohesity.com/newsroom/press/cohesity-announces-the-appointment-of-junichi-iwakami-as-president-and-representative-director-of-cohesity-japan/", kind: "企業公式", scope: "日本法人設立年・東京拠点", checkedAt },
  { id: "cohesity-customer", label: "Cohesity Japan customer stories", url: "https://www.cohesity.com/ja-jp/customers/", kind: "企業公式", scope: "国内顧客・導入目的", checkedAt },
  { id: "cohesity-linkedin", label: "Cohesity LinkedIn company page", url: "https://www.linkedin.com/company/cohesity/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
  { id: "gbiz-headcount-cohesity", label: "gBizINFO Cohesity Japan検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
cohesity.companyStats.japanHeadcount = { value: "掲載なし", detail: "日本法人と東京拠点は会社公式で確認したが、gBizINFOの事業所被保険者数を今回特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-cohesity" };

const armis = buildDailyCompanyIntelligence({
  slug: "armis", name: "Armis", jobConfirmed: true,
  jobUrl: "https://job-boards.greenhouse.io/armissecurity/jobs/5765358004", officialUrl: "https://www.armis.com/about/about-armis/",
  customersUrl: "https://www.armis.com/customer-stories/", financeUrl: "https://www.armis.com/blog/300m-plus-arr-milestone-nadir/",
  problem: "企業のIT、OT、IoT、医療機器、コード、クラウドに未管理資産が増え、どこに何があり、どの脆弱性が事業へ大きな危険を与えるかを一貫して把握できない課題を解く。",
  origin: "AdallomがMicrosoftへ買収された後、Yevgeny DibrovとNadir Izraelが、接続機器の急増に対して既存の端末エージェントでは見えない資産を守る必要を感じ、2015年末に創業した。",
  externalNeed: "工場、病院、物流、クラウドが接続され、攻撃対象が拡大するほど、企業は機器種別ごとの台帳ではなく、全資産の実態、脆弱性、脅威、事業影響を継続して優先順位付けする必要がある。",
  solution: "エージェントを入れにくい機器を含めて資産を発見し、行動と脆弱性を分析し、サイバー露出の優先順位付け、検知、対応を一つの基盤で支援する。",
  selection: "検出資産数だけでなく、IT・OT・IoT・医療・クラウドの範囲、受動的発見、既存製品との接続、誤検知、危険度の根拠、対応の自動化で比較する。",
  growth: "会社公式は2025年に年換算売上3億ドル超を公表し、Fortune企業や政府機関へ展開。ServiceNowによる買収完了後もArmisブランドで東京の技術営業を募集している。",
  role: "Sr Advisory Solution Consultantが営業と顧客要件を整理し、製品説明、デモ、環境分析、概念実証、導入方針を設計して技術採用の根拠を作る。",
  organization: "東京勤務の公式求人とTakeda Pharmaceuticalsの公開導入例を確認。日本法人名、国内オフィス住所、正確な国内在籍人数は未確認。",
  career: "IT・OT・IoTを横断する資産可視化とサイバー露出を、経営リスク、既存セキュリティ基盤、概念実証、導入計画へ変える技術営業経験。",
  globalHeadcount: "1,001〜5,000人規模（外部公開レンジ、ServiceNow買収後）", japanPresence: "東京勤務の公式求人と日本企業の公開導入例を確認。日本法人名・国内在籍人数は未確認", japanSince: "東京勤務の求人と国内顧客例を確認",
  customer: { company: "Takeda Pharmaceuticals", outcome: "会社公式は、世界のIT・IoT・OT・医療資産の可視性とセキュリティ課題へArmisを利用する顧客として掲載。公開された日本単独の定量成果は確認できない。" },
  facts: [["創業","2015年末","接続資産の可視化と保護を目的に創業。"],["年換算売上","3億ドル超","2025年、会社公式。"],["顧客","Fortune企業・政府機関","会社公式。"],["日本顧客例","Takeda Pharmaceuticals","会社公式。国内単独成果は未確認。"],["企業動向","ServiceNow傘下","2026年に買収完了を会社公式で案内。"],["日本求人","1件","Sr Advisory Solution Consultant。"]],
  products: [["Armis Centrix for Cyber Exposure Management","資産、脆弱性、脅威、事業影響を統合して危険度を優先順位付けする。","https://www.armis.com/platform/armis-centrix/"],["Armis Centrix for OT/IoT Security","工場や接続機器を受動的に発見し、異常と危険を監視する。","https://www.armis.com/solution/ot-iot-security/"],["Armis Centrix for VIPR","脆弱性情報と企業資産を結び、対応順序を最適化する。","https://www.armis.com/solution/vulnerability-prioritization-remediation/"],],
  competitors: "Axonius、Claroty、Nozomi Networks、Tenable、Microsoft・ServiceNowを含む既存資産管理・セキュリティ運用",
  leader: ["Yevgeny Dibrov","CEO and Co-Founder","https://www.armis.com/about/about-armis/"], local: ["未確認","日本事業責任者","https://job-boards.greenhouse.io/armissecurity/jobs/5765358004"],
  work: ["未確認","Tokyo, Japan","出社日数は未記載","東京勤務。Remote・Hybridの区分は未確認","顧客環境の分析・概念実証・イベント対応に伴う移動頻度は選考で確認"],
}, checkedAt);
armis.sources.push(
  { id: "armis-origin", label: "Armis mission and origin", url: "https://www.armis.com/blog/our-mission/", kind: "企業公式", scope: "創業者・創業背景", checkedAt },
  { id: "armis-arr", label: "Armis reaches $300M+ ARR", url: "https://www.armis.com/blog/300m-plus-arr-milestone-nadir/", kind: "企業公式", scope: "年換算売上・成長", checkedAt },
  { id: "armis-servicenow", label: "Armis acquisition completion", url: "https://www.armis.com/", kind: "企業公式", scope: "ServiceNowによる買収完了", checkedAt },
  { id: "armis-linkedin", label: "Armis LinkedIn company page", url: "https://www.linkedin.com/company/armis-security/", kind: "外部集計", scope: "グローバル従業員規模", checkedAt },
  { id: "gbiz-headcount-armis", label: "gBizINFO Armis法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
armis.companyStats.japanHeadcount = { value: "掲載なし", detail: "東京勤務求人と国内顧客例は確認したが、日本法人名とgBizINFOの事業所被保険者数を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-armis" };

const runpod = buildDailyCompanyIntelligence({
  slug: "runpod", name: "Runpod", jobConfirmed: true,
  jobUrl: "https://jobs.ashbyhq.com/runpod/e3a0f565-dde7-4b3d-8ede-b582cd068f8c", officialUrl: "https://www.runpod.io/about",
  customersUrl: "https://www.runpod.io/case-studies/how-faceless-video-bootstrapped-to-1m-arr", financeUrl: "https://www.runpod.io/blog/one-million-developers",
  problem: "AI開発者がGPUを確保して環境を構築し、実験から本番推論へ移す際、供給、起動時間、依存関係、スケール、費用、運用が別々の負担になる課題を解く。",
  origin: "Zhen LuとPardeep Singhが2021年、ニュージャージー州の地下室で暗号資産採掘用GPUを運用していたところ、AI開発者から計算資源を求められ、設備をAIクラウドへ転用して創業した。",
  externalNeed: "生成AIモデルと利用量が増えるほど、開発企業はGPUを長期保有するだけでなく、実験時の柔軟性、本番推論の遅延と費用、地域供給、障害時の責任を用途ごとに最適化する必要がある。",
  solution: "GPU Pod、イベント駆動のServerless、専有Clusterを同じ開発者向け導線で提供し、コンテナ化したAI処理を実験から本番へ移す。",
  selection: "GPU単価だけでなく、利用可能なGPUと地域、起動・スケール時間、開発体験、稼働保証、セキュリティ、支援、推論費用、契約主体で比較する。",
  growth: "会社公式は100万人超の開発者、年換算売上1.2億ドル、2026年6月のSeries A 1億ドル、月200億件超の推論リクエストを説明。日本を候補地に含むAPAC営業を募集している。",
  role: "Account Executive APACがAI企業、研究機関、大企業の機械学習部門で新規商談を作り、技術評価、SLA、価格、契約を進め、高額の年間契約を獲得する。",
  organization: "Remote-firstで米国、カナダ、欧州、インドのチームとサンフランシスコ拠点を会社公式が掲載。日本法人・国内拠点・国内雇用主体は未確認。",
  career: "GPU供給、性能、費用、推論運用、SLAを技術・経営の両方へ説明し、未整備なAPAC地域で大型契約と販売の再現性を作る初期営業経験。",
  globalHeadcount: "小規模なRemote-firstチーム（会社公式、正確な現員は非公開）", japanPresence: "日本法人・国内拠点は未確認。Japanを候補地とするAPAC営業求人を公式確認", japanSince: "未進出",
  customer: { company: "Faceless.video", outcome: "公式事例は動画生成費用を50%以上削減し、年換算売上100万ドル超、利用者250万人超まで拡大したと説明。ベンダー作成事例のため算定条件に留意。" },
  facts: [["創業","2021年","ニュージャージー州の地下室から開始。"],["開発者","100万人超","会社公式。"],["年換算売上","1.2億ドル","創業者による会社公式ブログ。"],["Series A","1億ドル","2026年6月、会社公式。"],["推論","月200億件超","公式求人。"],["日本シグナル","APAC営業1件","Japanを候補地に明記。"]],
  products: [["GPU Pods","用途とGPUを選び、コンテナ環境を時間単位で起動する。","https://www.runpod.io/product/cloud-gpus"],["Serverless","AIワークロードをリクエストに応じて自動スケールする。","https://www.runpod.io/product/serverless"],["Clusters","専有GPUクラスターで大規模な学習・推論を運用する。","https://www.runpod.io/product/clusters"],],
  competitors: "AWS・Google Cloud・Microsoft AzureのGPU、CoreWeave、Lambda、各社の自社GPU運用",
  leader: ["Zhen Lu","Co-Founder and Chief Executive Officer","https://www.runpod.io/about"], local: ["未確認","日本事業責任者","https://jobs.ashbyhq.com/runpod/e3a0f565-dde7-4b3d-8ede-b582cd068f8c"],
  work: ["フルリモート","Remote - APAC（Japan・Singapore・Malaysiaが候補）","国内オフィスなし","日本から勤務できる可能性はあるが雇用主体未確認","主要顧客訪問と業界イベントで定期出張あり"],
  preEntry: {
    verdict: "進出可能性は中〜高。日本語必須のAPAC営業でJapanを候補地に明記したが、日本法人、国内拠点、雇用主体、国内顧客と支援体制は未確認。",
    signal: "Japan・Singapore・Malaysiaを候補地とするAccount Executive APACを募集し、日本語・英語、大型AI基盤契約、地域の新規開拓を必須としている。",
    hurdle: "日本法人、国内拠点、日本での雇用・契約・請求、GPU提供地域、国内顧客、障害時の日本語支援、データ所在と規制対応を確認できない。",
    conditions: ["日本での雇用主体と企業契約・請求・税務を整える。", "日本企業が求めるGPU地域、SLA、情報セキュリティ、データ所在を明確にする。", "営業だけでなく導入設計と障害対応を日本語で担う体制を作る。", "APAC営業が国内の有償需要と更新・拡張を再現し、日本専任投資の根拠を作る。"],
    watches: ["Japan・Tokyo求人の増加", "日本法人・国内拠点", "日本リージョン・GPU供給", "国内顧客の数値事例", "日本語契約・技術支援"],
  },
}, checkedAt);
runpod.sources.push(
  { id: "runpod-origin", label: "A note to the developers who built Runpod", url: "https://www.runpod.io/blog/a-note-to-the-developers-who-built-runpod-with-us", kind: "企業公式", scope: "創業者・創業背景・年換算売上", checkedAt },
  { id: "runpod-million", label: "Runpod reaches one million developers", url: "https://www.runpod.io/blog/one-million-developers", kind: "企業公式", scope: "開発者数・Series A", checkedAt },
  { id: "runpod-customer", label: "Faceless.video customer story", url: "https://www.runpod.io/case-studies/how-faceless-video-bootstrapped-to-1m-arr", kind: "企業公式", scope: "費用削減・売上・利用者成果", checkedAt },
  { id: "gbiz-headcount-runpod", label: "gBizINFO Runpod法人検索", url: "https://info.gbiz.go.jp/", kind: "公的機関", scope: "日本法人・事業所情報の確認", checkedAt },
);
runpod.companyStats.japanHeadcount = { value: "対象法人未特定", detail: "会社公式情報とgBizINFOでRunpodに紐づく日本法人・事業所を特定できず、0人とは扱わない。", sourceId: "gbiz-headcount-runpod" };
if (runpod.marketStatus.japanGrowth) {
  runpod.marketStatus.japanGrowth.headline = "日本語必須のAPAC営業でJapanを候補地に明記";
  runpod.marketStatus.japanGrowth.narrative = "2026年10月2日の公式求人でJapan・Singapore・Malaysiaを候補地とするAccount Executive APACを確認。日本法人、国内拠点、国内雇用主体は未確認。";
}

for (const intelligence of [cohesity, armis, runpod]) {
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.year === "2026.09" ? { ...item, year: "2026.10" } : item);
}

export function applyDaily20261002Closures(intelligenceBySlug: Record<string, CompanyPublicIntelligence>) {
  const closures: Array<[string, string, string, string, string, string]> = [
    ["saviynt", "Associate Principal Training Engineer求人終了", "2026.10.02", "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", "saviynt-training-engineer-closure-20261002", "https://saviynt.com/careers/job-openings/associate-principal-training-engineer-japan"],
    ["saviynt", "Principal Engineer, Professional Services求人終了", "2026.10.02", "旧公式求人URLが404を返し、現行の公式採用一覧にも当該職を確認できなかったため掲載から除外。これだけで日本事業縮小を意味しない。", "saviynt-professional-services-closure-20261002", "https://saviynt.com/careers/job-openings/principal-engineer-professional-services-japan"],
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

export const daily20261002IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = { cohesity, armis, runpod };
