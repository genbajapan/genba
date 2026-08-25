import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildPreEntryIntelligence } from "@/lib/company-public-intelligence-pre-entry-wave-two";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-26";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.26";
  return intelligence;
}

const behavoxIntelligence = build({
  checkedAt,
  slug: "behavox",
  name: "Behavox",
  jobUrl: "https://job-boards.greenhouse.io/behavox/jobs/7959497",
  officialUrl: "https://www.behavox.com/",
  customersUrl: "https://www.behavox.com/behavox-deepens-commitment-to-japan-in-new-partnership-with-nomura-research-institute/",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/ai-governance/index.html",
  financeUrl: "https://www.behavox.com/news",
  salesSnapshot: "銀行・証券・資産運用会社へ、コミュニケーション監視、取引監視、アーカイブ、policy、case workflowを一つのAI controls platformとして提供。東京のDelivery Managerは、複雑なenterprise導入をscope、risk、time-to-value、revenue recognitionまで管理する。",
  growthSummary: "2014年創業。会社公式Newsroomは2024年ARR 44%成長と黒字化、2025年顧客基盤86%成長、2026年6月の1.75億ドル調達を掲載。日本売上、国内顧客数、team人数は非公開。",
  ipoSummary: "非公開企業。2026年6月にHPS Investment Partnersから1.75億ドルを調達したと公式発表。評価額、IPO時期、日本ARRは公表されていない。",
  milestones: [
    { year: "2014", label: "創業", detail: "Erkin Adylovが金融機関のconduct riskをAIで検出する会社として創業。", source: "company" },
    { year: "2020.10", label: "日本進出・東京オフィス開設", detail: "日本市場への長期投資としてTokyo officeを開設。", source: "company" },
    { year: "2021.07", label: "NRIと提携", detail: "国内顧客へのconsulting・implementationと日本語data annotationで連携。", source: "company" },
    { year: "2026.04", label: "みずほ証券が採用", detail: "AI-powered communications monitoring frameworkへの採用を公式Newsroomに掲載。", source: "finance" },
    { year: "2026.08", label: "Tokyo delivery採用", detail: "Delivery Manager 3を公式Greenhouseで確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "みずほ証券、SMBC、BNY等を顧客として掲載。金融機関が必要とするのはalert数ではなく、複数channel・取引・policyを一つの証拠記録へつなぎ、regulatorや監査へ説明できる統制。" },
    { title: "製品の成り立ちから見る課題", body: "communication surveillanceから始まり、trade surveillance、archive、policy、preventive control、front-office analyticsへ拡張した。riskごとにtoolを足す分断を一つのdata・policy・case layerへ戻す設計。" },
    { title: "外部環境の要求から見る課題", body: "生成AI、音声・chat、digital asset、cross-border業務が増える一方、金融機関はmodel risk、privacy、保存、human review、監査証跡を維持する必要がある。検出精度だけでなくdefensibilityが投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "金融機関はchannel、asset class、地域ごとに監視・archive・policy toolを増やしてきた。" },
    { label: "課題", body: "data、rule、case、証拠が分断するとalertの重複とmanual reviewが増え、new marketやchannelの承認も遅れる。" },
    { label: "解決策", body: "一つのrisk・channelからdata、policy、detection、case、archiveを統合し、alert volume、review時間、coverage、audit準備、導入期間を測る。" },
    { label: "選定の理由", body: "NICE Actimize、Smarsh、Global Relay、SteelEye、従来SIEM・archiveとの比較で、coverage、false positive、explainability、data ownership、導入速度、総costに優位がある場合に選ぶ。" },
  ],
  openingHook: "同じ社員・取引のriskを調べるために、監視、archive、policy、caseの何画面を横断していますか。",
  valueHypothesis: "alert volume、true-positive precision、review時間、case cycle、channel・asset coverage、audit準備、導入期間、運用工数をbaseline比較する。",
  objection: "既存のcommunication surveillance、trade surveillance、archiveを個別に更新すれば十分。",
  reframe: "単一modelの精度ではなく、data ingestionからpolicy、human decision、証拠保存まで同じriskを一貫して説明できるか、変更時の総costで比較する。",
  facts: [
    { label: "創業", value: "2014年", detail: "AI-native compliance companyとして創業。", source: "company" },
    { label: "2024 ARR成長", value: "44%", detail: "会社公式Newsroom掲載値。", source: "finance" },
    { label: "2025顧客基盤成長", value: "86%", detail: "会社公式Newsroom掲載値。", source: "finance" },
    { label: "2026年調達", value: "1.75億ドル", detail: "HPS Investment Partnersによる投資。", source: "finance" },
    { label: "日本拠点", value: "2020年開設", detail: "東京office。", source: "customers" },
    { label: "日本求人", value: "1件", detail: "Delivery Manager 3。", source: "job" },
  ],
  customers: [
    { company: "みずほ証券", products: "Behavox Quantum", outcome: "AI-powered communications monitoring frameworkへの採用を2026年4月の公式Newsroomで発表。", implication: "日本の大手証券でのlocal proof。" },
    { company: "三井住友銀行", products: "Behavox", outcome: "世界の主要機関として公式サイトに顧客logoを掲載。利用scopeと定量成果は非公開。", implication: "国内金融機関へのreachを示すが、成果は推測しない。" },
    { company: "BNY", products: "Behavox Quantum AI", outcome: "communications compliance monitoringのimplementation完了をNewsroomで掲載。", implication: "global systemically important institutionでのenterprise delivery proof。" },
  ],
  externalSignals: [
    { label: "AI governance", value: "riskと説明責任", detail: "経産省のAI事業者ガイドラインはrisk管理、透明性、人間中心、accountabilityを重視する。", caveat: "Behavoxの適合性や個別の法的結論を示すものではない。" },
    { label: "regulated data", value: "保存・越境・model管理", detail: "金融機関の監視dataでは利用目的、保存、access、委託、越境、model validation、human decisionを一体で確認する必要がある。", caveat: "具体的要件は業務、data、地域、契約で異なる。" },
  ],
  role: "enterprise client projectでschedule、Gantt、RAID log、scope、change、technical dependencyを管理し、cloud-native・data integrationを理解してtime-to-first-valueとrevenue recognitionへ接続する。",
  organization: "Tokyoのfull-time role。東京office週2日を求人に記載。日本team人数、reporting line、担当project数、travel、日本語・英語の実運用は未公開。",
  careerValue: "RegTech、financial services、enterprise SaaS delivery、cloud・data integration、risk・change managementを横断する経験。",
  globalHeadcount: "250〜500人規模（外部profileの公開range。公式厳密値ではない）",
  japanPresence: "東京オフィス、NRIとの国内delivery連携、日本金融機関の公式顧客proof、Tokyo求人を確認",
  japanSince: "2020年10月に東京オフィス開設を公式発表",
  solutions: [
    { name: "Behavox Quantum / Polaris", valueProp: "voice・textのcommunicationとtradeをAI・rule・statisticsで監視する。", url: "https://www.behavox.com/", competitors: "NICE Actimize、SteelEye、Smarsh、Global Relay。", differentiation: "communication・tradeを一つのdata・policy・case workflowへ統合。" },
    { name: "Intelligent Archive", valueProp: "communicationとtradeの記録をsearchable・reconstructableな形で保持する。", url: "https://www.behavox.com/", competitors: "Smarsh、Global Relay、native archive。", differentiation: "surveillance・caseと同じdata layerで証拠を作る。" },
    { name: "Preventive Controls / Digital Employees", valueProp: "policy、pre-clearance、cross-border ruleとmanual control workflowを自動化する。", url: "https://www.behavox.com/trident", competitors: "MCO、StarCompliance、manual workflow。", differentiation: "検出前の統制からcorrective evidenceまで同じplatformで扱う。" },
  ],
  fitTags: ["RegTech", "AI Controls", "Surveillance", "Financial Services", "Professional Services", "Tokyo Hybrid"],
  comparisons: [
    { arena: "Communication surveillance", companies: ["Behavox", "Smarsh", "Global Relay"], why: "coverage、precision、archive、case" },
    { arena: "Trade surveillance", companies: ["Behavox", "NICE Actimize", "SteelEye"], why: "asset coverage、explainability、deployment" },
    { arena: "Employee compliance", companies: ["Behavox", "MCO", "StarCompliance"], why: "prevent、policy、workflow" },
  ],
}, {
  slug: "behavox", leaderName: "Erkin Adylov", leaderLabel: "Founder / CEO", leaderUrl: "https://www.behavox.com/our-company", localName: "未確認", localLabel: "Japan責任者", localUrl: "https://www.behavox.com/behavox-deepens-commitment-to-japan-in-new-partnership-with-nomura-research-institute/",
  companyId: "behavox-company", jobId: "behavox-job", customersId: "behavox-customers", externalId: "behavox-external", financeId: "behavox-finance",
  targets: ["Compliance・Market Conduct責任者", "Trade・Communication Surveillance責任者", "Financial Crime・Operational Risk責任者"],
  heroSummary: "金融機関のcommunication、trade、policy、archive、caseが地域・channel・assetごとに分断する課題を解決する。AI・rules・statisticsとhuman reviewを一つのcontrols lifecycleへ統合し、risk coverage、review、監査証拠を改善する。",
  competitors: "NICE Actimize、Smarsh、Global Relay、SteelEye、MCO、StarCompliance、既存SI・内製との比較では、coverage、precision、explainability、data、delivery、総costを見る。",
  feature: "communication／trade surveillance、archive、policy、preventive control、AI agentsを一つのAI controls platformで提供する。",
  advantage: "一つのdata layer、policy framework、case workflowにより、riskをchannel・product・jurisdiction横断で定義し直せる。",
  benefit: "alert review、case investigation、new market承認、audit preparationの時間を短縮し、controlの説明可能性を高める可能性がある。",
  evidence: "東京officeとNRI提携に加え、みずほ証券のcommunications monitoring採用を公式掲載。会社公式は2024年ARR 44%成長、2025年顧客基盤86%成長を示す。",
  marketVerdict: "国内拠点、delivery partner、金融機関proof、現行delivery求人は揃う。一方、日本売上、team人数、顧客別scope、renewal、role別報酬は未公開。",
  marketParagraphs: ["AIとdigital channelが監視対象を増やすほど、単一modelの精度より、data・policy・decision・evidenceを一貫して管理する必要が増える。", "日本ではlocal regulationと日本語voice・textに加え、global金融機関のmodel validation・data handlingと国内deliveryを両立できるかが成長条件になる。"],
  cultureHeadline: "東京で複数の金融機関導入をscope、risk、time-to-valueまで持つHybrid delivery role。",
  classification: "ハイブリッド", displayLabel: "Tokyo Hybrid", officeDays: "週2日", remoteOnly: "フルリモートではない", flexibility: "個別事情に応じた一時的な在宅配慮を求人に記載",
  goodFor: ["金融機関向け複雑導入を技術とcommercial outcomeの両方で持ちたい人", "SOW・risk・changeを厳密に管理したい人"], cautionFor: ["完全remoteを前提にする人", "project進行だけを持ち技術・収益文脈を避けたい人"],
  unresolved: [
    ["担当portfolio", "複数enterprise projectを管理。", "同時案件数、顧客segment、平均期間、導入phaseは。"],
    ["評価", "time-to-valueとrevenue recognitionを理解する。", "on-time、scope、CSAT、utilization、revenueの評価配分は。"],
    ["技術責任", "cloud-nativeとdata integrationを理解。", "Solution Architect、Engineering、Supportとの責任境界は。"],
    ["組織・勤務", "東京office週2日。", "Japan team人数、reporting line、travel、勤務時間帯、日本語・英語の割合は。"],
    ["報酬・career", "cash、equity、health、30日休暇を記載。", "base、bonus、equity、level、昇進基準、直近24カ月の異動・退職は。"],
  ],
});

const chainguardIntelligence = buildPreEntryIntelligence({
  checkedAt,
  slug: "chainguard", name: "Chainguard", homepage: "https://www.chainguard.dev/about-us", growthUrl: "https://www.chainguard.dev/unchained/announcing-chainguards-series-d-building-the-safe-source-for-all-open-source", careersUrl: "https://job-boards.greenhouse.io/chainguard", customersUrl: "https://www.chainguard.dev/customers", trustUrl: "https://www.chainguard.dev/trust-center", apacUrl: "https://job-boards.greenhouse.io/chainguard/jobs/4674013006", externalUrl: "https://www.meti.go.jp/english/press/2025/0904_001.html", linkedinUrl: "https://www.linkedin.com/company/chainguard-dev/",
  salesSnapshot: "Chainguardは、CISO・Application Security・Platform Engineeringへ、脆弱性を継続修正したproduction-readyなcontainer、VM、libraryを供給する会社。顧客が抱えるのは『open sourceのCVE修正が追いつかない』『SBOMとprovenanceを監査へ説明できない』『AI agentが増やすdependencyを安全なsourceへ固定できない』という課題。SingaporeのAE・Sales Engineer採用はAPAC enterprise販売の足場だが、日本採用ではない。",
  growthSummary: "2025年4月に3.56億ドルSeries D・35億ドル評価を公式発表。container catalogを400から1,400へ、売上を500万ドルから4,000万ドルへ伸ばし、100社超を追加したと発表。日本法人・拠点・求人は未確認。",
  verdict: "進出可能性は中。Singapore GTMとAPAC顧客proofはあるが、日本のcommercial・delivery proofがない", entryNarrative: "Chainguardは急成長、Fortune 500を含む顧客、Canva・Hapag-Lloyd等の公開事例と、SingaporeのEnterprise AE・Sales Engineerを持つ。software supply chainとAI workloadの安全性は日本企業にも重要で、APACから市場検証できる段階にある。一方、日本法人、Tokyo office、Japan求人、国内顧客事例、日本語support、国内partnerは公式確認できない。Singapore teamが日本の有償pipelineを作り、security review、procurement、local partner deliveryを再現できるまで進出時期は断定しない。",
  headcount: "約500人規模", headcountDetail: "会社公式careersの『500 people』という表現。厳密な現在社員数ではない。", apacPresence: "Singapore RemoteでEnterprise Account ExecutiveとEnterprise Sales Engineerを公式募集。Japan territoryの明記はない。", productLanguage: "container registryとdocumentationを日本から利用できるが、日本語site、国内support、Japan customer story、国内契約主体は未確認。",
  milestones: [{ year: "2021", label: "創業", detail: "Kubernetes、Sigstore、Distroless等に関わったopen-source security経験者が創業。", source: "company" }, { year: "2023", label: "Chainguard Images拡張", detail: "継続patchされたminimal containerのcommercial catalogを拡張。", source: "company" }, { year: "2024", label: "Series C", detail: "1.4億ドル、11.2億ドル評価を発表。", source: "growth" }, { year: "2025.04", label: "Series D", detail: "3.56億ドル、35億ドル評価。", source: "growth" }, { year: "2026.08", label: "Singapore GTM採用", detail: "Enterprise AEとSales Engineerを公式募集。", source: "apac" }],
  issueLenses: [{ title: "既存顧客の導入目的から見る課題", body: "Hapag-Lloydの公式事例は約60 imageの脆弱性を数百件からzeroへ減らしたと説明。顧客はscannerを増やすのではなく、productionへ入れるartifact自体を継続patchするsourceを求める。" }, { title: "製品の成り立ちから見る課題", body: "Kubernetes・Sigstore・Distrolessのopen-source経験から、build後に脆弱性を追うのではなく、sourceからhardened・signed・SBOM付きartifactを継続供給するsoftware factoryを構築。" }, { title: "外部環境の要求から見る課題", body: "AI agentとcloud-native開発がdependencyを増やす一方、企業はSBOM、provenance、vulnerability response、secure-by-designを顧客・監査・調達へ説明する必要がある。" }],
  narrative: [{ label: "背景", body: "teamごとにbase imageとdependencyが増え、CVE ticketとpatch backlogが蓄積する。" }, { label: "課題", body: "scannerは問題を列挙できても、安全なbuildへ置換し続けるengineering工数とownershipを減らせない。" }, { label: "解決策", body: "一つの重要workloadでChainguard artifactへ置換し、CVE、patch lead time、engineer hours、image size、deployment failure、audit準備を測る。" }, { label: "選定の理由", body: "Docker Official Images、Red Hat UBI、cloud vendor image、Distroless、内製hardeningとの比較で、compatibility、patch velocity、provenance、support、総工数に優位がある場合に選ぶ。" }],
  openingHook: "本番containerのcritical CVEを見つけてから、安全なbuildを再配布するまで何日と何人時かかっていますか。", valueHypothesis: "対象workloadでcritical CVE、patch lead time、engineer hours、image size、deployment failure、exception、audit準備をbaseline比較する。", objection: "既存scannerとDocker／cloud vendorのbase imageで十分。", reframe: "検出件数ではなく、安全なartifactを継続供給し、application teamがpatch作業へ戻らずに済むまでのtotal engineering costで比較する。",
  facts: [{ label: "創業", value: "2021年", detail: "software supply chain security企業として創業。", source: "company" }, { label: "Series D", value: "3.56億ドル", detail: "2025年4月。", source: "growth" }, { label: "評価額", value: "35億ドル", detail: "Series D時点。", source: "growth" }, { label: "container catalog", value: "1,400", detail: "Series D発表時点。", source: "growth" }, { label: "APAC採用", value: "Singapore", detail: "Enterprise AEとSales Engineer。", source: "apac" }, { label: "日本求人", value: "0件", detail: "Japan・Tokyo求人を公式boardで確認できず。", source: "careers" }],
  customers: [{ company: "Hapag-Lloyd", products: "Chainguard Containers", outcome: "約60 imageで数百のCVEをzeroへ減らしたと公式事例で紹介。", implication: "global critical platformでのcompatibilityとpatch proof。" }, { company: "Canva", products: "Chainguard", outcome: "global enterprise customerとして公式掲載。個別の定量成果は非公開。", implication: "APAC発software companyでの採用signal。" }, { company: "Cloudera", products: "Chainguard Containers", outcome: "enterprise data platformのsecure foundationとして採用した事例を公開。", implication: "多数のdownstream顧客を持つsoftware supply chainでのproof。" }],
  externalSignals: [{ label: "SBOM guidance", value: "国際連携とsecure-by-design", detail: "経産省は2025年のSBOM国際ガイダンスでsoftware supply chainの透明性、脆弱性管理、国際協調を示す。", caveat: "Chainguard採用や特定製品への適合を義務づけるものではない。" }, { label: "AI software supply chain", value: "dependencyとprovenance", detail: "AI workloadでもmodel以外にcontainer、library、GPU stack等のopen sourceが増え、build sourceとpatch責任の説明が必要。", caveat: "riskと要求はsystem、industry、contractで異なる。" }],
  entryAssessment: {
    verdict: "進出可能性は中。Singapore GTMは先行signalだが、Japan revenueとlocal deliveryのproofが必要",
    factSignals: [{ title: "SingaporeでGTMを配置", body: "Enterprise AEとSales Engineerを同時募集し、APAC enterpriseをcommercial・technical両面で支援できる足場がある。", sourceIds: ["apac", "careers"] }, { title: "投資余力と成長", body: "3.56億ドルSeries D、35億ドル評価、売上500万ドルから4,000万ドルへの伸長を会社が発表。", sourceIds: ["growth"] }, { title: "APAC customer proof", body: "Canvaをcustomerとして公式掲載し、Singapore teamからregional pipelineを検証できる。", sourceIds: ["customers", "apac"] }, { title: "日本課題との親和", body: "SBOM、CVE remediation、provenance、AI dependencyは日本企業のsecure developmentにも直接関係する。", sourceIds: ["external", "company"] }],
    hurdles: [{ title: "国内commercial proofがない", body: "Japan customer story、求人、office、country ownerを公式確認できない。", sourceIds: ["customers", "careers"] }, { title: "日本語security review", body: "製品、support、契約、SBOM・provenance資料を日本語で説明する体制が未確認。", sourceIds: ["company", "trust"] }, { title: "compatibility責任", body: "既存base imageからの置換でapplication compatibility、exception、support boundaryを国内顧客ごとに検証する必要。", sourceIds: ["customers", "company"] }, { title: "既存供給元との競争", body: "Docker、Red Hat、cloud vendor、internal platform teamが既存relationshipとbundleを持つ。", sourceIds: ["company"] }],
    readinessConditions: [{ title: "Japan lighthouse account", body: "国内enterpriseでCVE・工数・compatibility成果を公開。" }, { title: "Singapore-to-Japan pipeline", body: "日本の有償pipeline、ACV、renewalが専任podを支える。" }, { title: "local security delivery", body: "日本語のPOV、security review、support、incident対応を整備。" }, { title: "partner ecosystem", body: "cloud・DevSecOps・SI partnerがmigrationとmanaged operationを提供。" }, { title: "Japan pod", body: "AE、Sales Engineer、Customer Successを専任coverage。" }],
    watchSignals: ["Japan・Tokyo求人", "日本顧客事例", "Singapore roleのJapan territory表記", "国内cloud・SI partner", "日本語site・security資料", "Tokyoのsoftware supply chain event"],
  },
  sourceIds: ["growth", "company", "careers", "customers", "trust", "apac", "external", "linkedin"], salesMotion: "CISO・AppSec・Platform EngineeringへCVE backlogとpatch工数から入り、代表workloadのtechnical proofを経て標準artifact catalogへ拡張するEnterprise sale。", careerValue: "software supply chain、container・open source security、DevSecOps、usage expansion、APAC country buildを横断する可能性。", leader: { name: "Dan Lorenc", role: "CEO / Co-founder", read: "Kubernetes・Sigstore等のopen-source経験から、scannerではなく安全なsource自体を作り直すsoftware factoryへ展開。" },
  solutions: [{ name: "Chainguard Containers", valueProp: "継続patchされたminimal・signed container imageを提供。", url: "https://www.chainguard.dev/chainguard-containers", competitors: "Docker Official Images、Red Hat UBI、Distroless、cloud images。", differentiation: "低CVE、SBOM・provenance、continuous rebuild。" }, { name: "Chainguard VMs", valueProp: "hardened・verifiableなVM artifactを提供。", url: "https://www.chainguard.dev/chainguard-vms", competitors: "cloud marketplace image、CIS image、internal golden image。", differentiation: "software factoryによる継続build・patch。" }, { name: "Chainguard Libraries", valueProp: "application dependencyの安全なbuildを供給。", url: "https://www.chainguard.dev/chainguard-libraries", competitors: "public package registry、artifact repository、internal build。", differentiation: "containerより前のopen-source layerへprovenanceを拡張。" }],
  fitTags: ["日本未進出", "Software Supply Chain", "Container Security", "Open Source", "APAC", "Singapore", "Enterprise"], comparisons: [{ arena: "Container image", companies: ["Chainguard", "Docker", "Red Hat"], why: "CVE、compatibility、support" }, { arena: "Software supply chain", companies: ["Chainguard", "Snyk", "Wiz"], why: "safe sourceとdetection" }, { arena: "Internal platform", companies: ["Chainguard", "Golden Image", "Cloud Marketplace"], why: "build ownership、patch、provenance" }],
});

applyStandard(chainguardIntelligence, buildCompactPatch({
  slug: "chainguard", leaderName: "Dan Lorenc", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://www.chainguard.dev/about-us", localName: "未進出・責任者未確認", localLabel: "Japan法人責任者", localUrl: "https://job-boards.greenhouse.io/chainguard",
  companyId: "chainguard-company", jobId: "chainguard-careers", customersId: "chainguard-customers", externalId: "chainguard-external", financeId: "chainguard-growth",
  targets: ["アプリケーションセキュリティ責任者", "開発基盤・クラウド責任者", "ソフトウェア供給網・監査責任者"],
  heroSummary: "open sourceの脆弱性を発見しても、安全なbuildへ直し続ける担当と工数が足りず、CVE backlogと監査負荷が増える課題を解決する。継続patchされたcontainer・VM・libraryを供給し、修正時間、engineering工数、provenance、software supply chainの安全性を改善する。",
  competitors: "Docker Official Images、Red Hat UBI、Distroless、cloud vendor image、Snyk、Wiz、内製golden imageとの比較では、compatibility、patch速度、provenance、support、総工数を見る。",
  feature: "継続patchされたminimal・signed container、VM、libraryをSBOM・provenance付きで供給するsoftware factory。",
  advantage: "Kubernetes・Sigstore・Distrolessに関わったopen-source経験と、1,400 image・13,000 package超を継続buildする供給基盤を持つ。",
  benefit: "critical CVE、patch lead time、application engineerの保守工数、image size、audit準備を減らし、開発速度とsecurityを両立できる可能性がある。",
  evidence: "Hapag-Lloydの公式事例は約60 imageで数百のCVEをzeroへ減らしたと説明。Series D発表は100社超の追加顧客と売上500万ドルから4,000万ドルへの成長を公表。",
  marketVerdict: "SingaporeのAE・Sales EngineerとAPAC顧客proofは進出の先行signal。一方、日本法人、Japan求人、国内顧客事例、local delivery、国内売上は未確認。",
  marketParagraphs: ["日本企業でもSBOM、CVE remediation、secure-by-design、AI workloadのdependency管理を顧客・監査・調達へ説明する需要が増える。", "今後3〜5年はSingaporeから日本の有償pipelineを作り、国内partnerがmigrationとsupportを再現できるかが専任Japan podの成立条件になる。"],
  cultureHeadline: "Singaporeのremote-first teamからAPAC enterpriseへtechnical proofを広げる段階。",
  classification: "フルリモート", displayLabel: "Singapore Remote（日本求人なし）", officeDays: "出社日数の指定なし", remoteOnly: "Singapore求人はRemote", flexibility: "bi-annual summitとcoworking stipendを求人に記載。日本での雇用・勤務条件ではない",
  goodFor: ["software supply chainとopen sourceの課題を顧客KPIへ変えたい人", "将来のAPAC・Japan market buildを事実から観測したい人"], cautionFor: ["現在すぐ日本採用へ応募したい人", "compatibility検証やmigration責任を避けたい人"],
  unresolved: [
    ["Japan pipeline", "Singaporeから日本の初期需要を検証する可能性。", "日本の有償顧客、qualified pipeline、平均ACV、renewalは。"],
    ["territory", "Singapore AE・SEはAPACを支援する。", "Japan territory、quota credit、travel、日本語対応の責任は。"],
    ["product readiness", "artifactは日本から利用できる。", "日本顧客のsecurity review、contract、support、incident対応で未整備な点は。"],
    ["delivery", "container置換にはcompatibility検証が必要。", "国内cloud・SI partnerとProfessional Servicesの責任境界は。"],
    ["entry gate", "専任Japan podはcommercial proof後の仮説。", "法人・採用を承認する顧客数、ARR、partner、product条件は。"],
  ],
}));
chainguardIntelligence.researchedAt = checkedAt;
if (chainguardIntelligence.cultureDeepDive) chainguardIntelligence.cultureDeepDive.researchedAt = "2026.08.26";

export const daily20260826IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  behavox: behavoxIntelligence,
  chainguard: chainguardIntelligence,
};
