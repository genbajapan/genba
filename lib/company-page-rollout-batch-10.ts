import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import {
  applyStandard,
  buildCompactPatch,
  rolloutResearchedAt as researchedAt,
} from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refreshSourceDates(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function ensureMilestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) {
    intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
  }
}

function patchFigma(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2022", "日本法人設立・Tokyo Hub開始", "2022年3月、日本法人化とAsia初のTokyo Hub開設を発表。", "rollout-figma-japan-launch");
  applyStandard(intelligence, buildCompactPatch({
    slug: "figma", leaderName: "Dylan Field", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.figma.com/newsroom/", localName: "Hiroaki Kawanobe", localLabel: "Japan Country Manager（現任の最新確認は要面接確認）", localUrl: "https://www.figma.com/blog/transforming-design-education-for-japans-k-12-students/",
    companyId: "rollout-figma-10k", jobId: "rollout-figma-jobs-20260817", customersId: "rollout-figma-mitsubishi", externalId: "rollout-figma-digital-guidelines", financeId: "rollout-figma-q2-2026",
    targets: ["製品・Design・Engineering", "Design System・Frontend・開発者体験", "Marketing・Brand・Content部門", "IT・Security・調達", "DX・Product経営層"], competitors: "Adobe・Sketchのdesign tool、Miro・Mural、Canva、Zeplin・Storybook・manual handoff、Replit・Lovable・v0等AI build、内製tool",
    feature: "Figma Design、Dev Mode、FigJam、Sites、Make、Draw、Buzz、Slides、Weave、MCP・agentをbrowser-native multiplayerで提供する。", advantage: "design、prototype、component、feedback、developer context、AI buildを同じworkspaceとpermissionで接続し、PLGからenterprise governanceへ広げる。", benefit: "design cycle、handoff、component reuse、review、meeting、release lead time、brand・accessibility consistencyを改善できる可能性がある。", evidence: "三菱電機はprototypeを2週間から1日、カプコンはweb制作工数を約50%削減、みずほ銀行はapp評価1.5から4.5を公式事例で説明。",
    marketVerdict: "結論：AI-assisted product developmentと内製化、accessibility・security要求が追い風。Q2 2026売上3.70億米ドル（約589.8億円）は前年比+48%、NDR 136%だがGAAP営業赤字。東京の対象8求人を確認。", marketParagraphs: ["design、component、code、feedback、brand assetが分断すると、handoff待ち、再実装、review往復、UX・accessibilityのばらつきがreleaseを遅らせる。", "今後3〜5年はAI prototype・agentが追い風だが、credit cost、生成code精度、IP、export、data governance、suite・point toolとのTCOが選定条件になる。", "Genba分析：1 product・design systemでcycle、reuse、review、handoff、release、active collaborator、AI creditをbaseline比較する。"],
    cultureHeadline: "公式valuesはBuild community、Run with it、Love your craft、Grow as you go、Play。明記HybridはOnboarding・Enablementのみで、他roleの出社頻度を補完しない。", classification: "ハイブリッド", displayLabel: "東京・職種別", officeDays: "明記なし", remoteOnly: "完全在宅とは確認できない", flexibility: "Onboarding・EnablementはHybrid。全9求人で対面onboarding必須",
    goodFor: ["PLGからEnterpriseへ広げたい", "Design・Engineering・Marketingを横断したい", "AI product-development workflowを扱いたい"], cautionFor: ["GAAP黒字の安定性を最優先する", "日本の給与・quota開示を必須にする", "完全remoteを全roleで必須にする"],
    unresolved: [["収益性", "売上+48%、positive FCF。", "SBC、GAAP赤字、AI credit gross margin、FCF durabilityは？"], ["日本scale", "法人・Tokyo Hub・8対象求人を確認。", "Japan revenue、customer、headcount、Country Managerの現認は？"], ["AI・IP", "Make・MCP・agentを拡張。", "training use、code・design IP、model vendor、human review、auditは？"], ["Commercial", "8roleの数値報酬は非公開。", "pay mix、quota、ramp、attainment、seat・creditの評価は？"], ["Adoption", "国内定量事例を確認。", "licensed・active、workflow別定着、TAM・Onboardingの成果は？"]],
  }));
  intelligence.facts = [
    { label: "Q2 2026売上", value: "3.70億米ドル（約589.8億円）", detail: "前年比+48%。", sourceIds: ["rollout-figma-q2-2026", "rollout-b10-boj-usd-20260814"] },
    { label: "Q2稼ぐ力", value: "GAAP営業損失1.17億米ドル（約186.9億円）／FCF 0.53億米ドル（約84.8億円）", detail: "GAAP margin -32%、FCF margin 14%。SBC 1.48億米ドル（約235.2億円）を含む。", sourceIds: ["rollout-figma-q2-2026", "rollout-b10-boj-usd-20260814"] },
    { label: "事業固有指標", value: "NDR 136%／ARR 10万米ドル（約1,593.8万円）超1,635社", detail: "ARR 1万米ドル（約159.4万円）超は15,964社。総ARR額は非公開。", sourceIds: ["rollout-figma-q2-2026"] },
  ];
  intelligence.marketStatus.capitalMarketRead = { asOf: "2026年8月17日", metrics: [{ label: "Q2売上", value: "3.70億米ドル（約589.8億円）", change: "+48%", interpretation: "seat・product・AI利用が成長。", sourceId: "rollout-figma-q2-2026" }, { label: "GAAP営業損失・FCF", value: "1.17億米ドル（約186.9億円）の損失／0.53億米ドル（約84.8億円）", change: "GAAP赤字・cash黒字", interpretation: "SBCとAI投資を分けて評価。", sourceId: "rollout-figma-q2-2026" }], growthDrivers: [{ title: "AI・multi-product expansion", evidence: "NDR 136%、ARR 1万米ドル（約159.4万円）超顧客の80%超がAI creditsをweekly消費。", japanMeaning: "Sales、SC、Onboarding、TAM、Enablementの8roleでlocal lifecycleを強化。", sourceIds: ["rollout-figma-q2-2026", "rollout-figma-jobs-20260817"] }], risks: [{ title: "GAAP赤字・AI・競争", disclosedRisk: "SBC、AI model・vendor dependency、credit acceptance、lower-cost・point・内製代替を開示。", companyResponse: "DesignからDev・Sites・Make・agentへ拡張。", genbaRead: "AI精度、IP、adoption、seat・credit TCOをPoCで見る。", sourceIds: ["rollout-figma-10k", "rollout-figma-q2-2026"] }], japanCommitment: { verdict: "日本法人・Tokyo Hub・8対象求人・国内事例は強い。日本売上・人数は非公開。", summary: "2022年法人化、Salesからpost-salesまで採用。", signals: [{ year: "2026", title: "東京8対象求人", detail: "Enterprise・SMB・Strategic、Sales leadership、SC、Onboarding、Enablement、TAM。", sourceIds: ["rollout-figma-jobs-20260817"] }], unknowns: ["Japan revenue・customer・headcount", "Country Managerの現任", "quota・attainment・product credit"] }, scenarios: [{ scenario: "基本", title: "multi-product expansion", body: "Design起点でDev・AI・Marketingへ広がる。" }, { scenario: "上振れ", title: "AI build標準化", body: "design systemとagentがidea-to-productionの共通基盤になる。" }, { scenario: "下振れ", title: "suite・point・AI競争", body: "credit costとtool consolidationで増分価値が問われる。" }], sourceIds: ["rollout-figma-q2-2026", "rollout-figma-10k", "rollout-figma-jobs-20260817"] };
  intelligence.companyStats.globalHeadcount = { value: "1,600人超（2025年3月時点）", detail: "現在の厳密人数ではない。", sourceId: "rollout-figma-newsroom" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "9求人は現在人数を示さない。", sourceId: "rollout-figma-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "Tokyo Hub（street address非公開）", detail: "2022年にAsia初Hubを開設。", sourceId: "rollout-figma-japan-launch" };
  intelligence.companyStats.japanSince = { value: "2022年3月", detail: "日本法人化・東京office開設。", sourceId: "rollout-figma-japan-launch" };
  intelligence.customerProof = [
    { company: "三菱電機", products: "Figma・Figma Make", outcome: "15万人規模・500 core users向け基盤。あるprojectでprototype構築2週間→1日。", implication: "vendor-selected・workflow限定の成果。", sourceId: "rollout-figma-mitsubishi" },
    { company: "みずほ銀行", products: "Figma・FigJam", outcome: "みずほダイレクトapp評価1.5→4.5。", implication: "Figma単独因果ではなく、内製化・部門・vendor協業も寄与。", sourceId: "rollout-figma-mizuho" },
    { company: "カプコン", products: "Figma", outcome: "web制作工数を約50%削減、社内tutorial約50本を蓄積。", implication: "vendor-selectedで、対象範囲・測定方法は限定的。", sourceId: "rollout-figma-capcom" },
  ];
  intelligence.roleLens = { salesMotion: "Enterprise・SMB・Strategicの3sellerとSales leadership、SC leadership、Onboarding、Enablement、TAMがnew・expansion・adoptionを分担。", compensation: "対象8求人の日本の数値給与・OTEは非公開。", quota: "quota、担当社数、ACV、cycle、attainment、seat・AI creditの評価は非公開。", collaboration: "Sales、SC、Onboarding、TAM、Enablement、Product・Engineering、customer Design・IT・Securityが連携。" };
  intelligence.salesAppeal = { intro: "PLG利用をenterprise product-development platformへ変える日本GTMの広がりを整理した。", points: [{ title: "3 segmentを売り分ける", detail: "SMBの1〜3カ月からEnterprise・Strategicの6〜9カ月超まで担当モデルがある。", sourceIds: ["rollout-figma-jobs-20260817"] }, { title: "technical・post-salesをlocalで強化", detail: "SC、Onboarding、TAMがsecurity、API、identity、AI governance、adoptionを担う。", sourceIds: ["rollout-figma-jobs-20260817"] }, { title: "AIと実業を同時に売る", detail: "Make・MCP・agentをcycle、reuse、release、governanceの定量成果に接続する。", sourceIds: ["rollout-figma-mitsubishi", "rollout-figma-q2-2026"] }] };
  addSources(intelligence, [
    { id: "rollout-figma-jobs-20260817", label: "Figma現行東京求人", url: "https://job-boards.greenhouse.io/figma", kind: "企業公式", scope: "9求人・対象8・勤務・言語", checkedAt: researchedAt },
    { id: "rollout-figma-q2-2026", label: "Figma Q2 2026決算", url: "https://s206.q4cdn.com/973901332/files/doc_financials/2026/q2/Figma-Q2-26-Press-Release.pdf", kind: "法定開示", scope: "売上・利益・FCF・NDR・顧客", checkedAt: researchedAt },
    { id: "rollout-figma-10k", label: "Figma FY2025 10-K", url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828026009228/fig-20251231.htm", kind: "法定開示", scope: "会社・競合・risk", checkedAt: researchedAt },
    { id: "rollout-figma-newsroom", label: "Figma Newsroom", url: "https://www.figma.com/newsroom/", kind: "企業公式", scope: "製品・人数", checkedAt: researchedAt },
    { id: "rollout-figma-japan-launch", label: "Figma日本法人・Tokyo Hub開設", url: "https://www.figma.com/blog/expanding-figmas-international-presence/", kind: "企業公式", scope: "日本法人・拠点・責任者", checkedAt: researchedAt },
    { id: "rollout-figma-mitsubishi", label: "Figma・三菱電機事例", url: "https://www.figma.com/customers/mitsubishi-electric-corporation/", kind: "企業公式", scope: "国内prototype成果", checkedAt: researchedAt },
    { id: "rollout-figma-mizuho", label: "Figma・みずほ銀行事例", url: "https://www.figma.com/ja-jp/customers/mizuho-bank-improves-efficiency-of-communication/", kind: "企業公式", scope: "国内app・協業成果", checkedAt: researchedAt },
    { id: "rollout-figma-capcom", label: "Figma・カプコン事例", url: "https://www.figma.com/ja-jp/customers/how-capcom-elevates-speed-quality-and-creative-vision-with-figma/", kind: "企業公式", scope: "国内制作工数成果", checkedAt: researchedAt },
    { id: "rollout-figma-digital-guidelines", label: "デジタル庁 標準ガイドライン", url: "https://www.digital.go.jp/resources/standard_guidelines", kind: "公的機関", scope: "利用者中心・UI・accessibility・security", checkedAt: researchedAt },
    { id: "rollout-b10-boj-usd-20260814", label: "日本銀行 外国為替市況 2026年8月14日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=159.38円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchFivetran(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2024", "日本法人設立", "2024年2月、Fivetran Japan株式会社の法人番号が指定された。実稼働officeとは限らない。", "rollout-fivetran-nta");
  applyStandard(intelligence, buildCompactPatch({
    slug: "fivetran", leaderName: "George Fraser / Tristan Handy", leaderLabel: "CEO／President", leaderUrl: "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents", localName: "非公開", localLabel: "日本責任者", localUrl: "https://www.fivetran.com/careers",
    companyId: "rollout-fivetran-about", jobId: "rollout-fivetran-jobs-20260817", customersId: "rollout-fivetran-lion", externalId: "rollout-fivetran-ipa-talent", financeId: "rollout-fivetran-arr-2024",
    targets: ["CIO・CDO・Data Platform責任者", "Data Engineering・Analytics Engineering部門", "AI・ML Platform・BI部門", "SAP・Cloud Modernization責任者", "Security・Privacy・Governance・Partner部門"], competitors: "Informatica・Qlik Talend・Matillion・Airbyte、hyperscaler native pipeline、open-source・self-host、内製connector・CDC",
    feature: "750超sourceのELT・CDC、HVR、Managed Data Lake、Hybrid Deployment、Connector SDK、dbt transformation・semantic context、200超activation destinationを提供する。", advantage: "schema・API change、backfill、CDC、security、lineageの運用負荷をmanaged service化し、dbt Labs・Census統合後はmove-to-model-to-activateを一社で扱う。", benefit: "time-to-data、pipeline開発・保守工数、freshness、failure・recovery、AI・BIの信頼性を改善できる可能性がある。", evidence: "ライオンはSAP→BigQueryのinitial verification syncをnetwork開通後1週間で完了したと公式事例で説明。",
    marketVerdict: "結論：AI・DXのdata需要とdata engineer不足、越境・委託governanceが追い風。Standalone ARR 3億米ドル超（約478.1億円、2024年）だが売上・利益・FCFは非公開。日本の対象4求人を確認。", marketParagraphs: ["custom pipelineはAPI・schema change、障害、backfill、freshness、lineage、SAP・on-prem対応に希少engineer時間を消費する。", "今後3〜5年はtrusted AI dataが追い風だが、consumption課金、merger統合、connector fit、data residency、open-source・cloud nativeとのTCOが選定条件になる。", "Genba分析：保守負荷の高い1 sourceでfreshness、failure、recovery、engineer hours、MAR・MMR cost、auditを比較する。"],
    cultureHeadline: "公式valuesはOne team one dream、Get stuck in、Do the right thing。公式Careersの一般hybrid週2日より、日本4求人のRemote表記を優先。", classification: "フルリモート", displayLabel: "Remote Japan", officeDays: "恒常的な出社日数は非公開", remoteOnly: "日本4求人はRemote", flexibility: "BDRのみ入社2週目の対面Revenue Bootcamp出張が必要",
    goodFor: ["data pipelineの運用価値を売りたい", "SAP・cloud・AIを横断したい", "move・transform・activateの統合後GTMを作りたい"], cautionFor: ["consumption costの変動を避けたい", "merger後の役割・製品境界の不確実性を避けたい", "監査済み財務を必須にする"],
    unresolved: [["統合後財務", "Standalone ARRと契約時のcombined見込みはある。", "current combined ARR、recognized revenue、margin、FCFは？"], ["日本体制", "法人登記・Remote求人・Japan processingを確認。", "Japan leader、実office、人数、売上、supportは？"], ["Merger", "Fivetranとdbt Labsの統合完了。", "product、pricing、sales credit、CS、roadmap、顧客migrationは？"], ["Consumption", "managed movementと幅広いconnectorを提供。", "MAR・MMR、backfill、warehouse compute、supportを含む3年TCOは？"], ["Commercial", "対象4roleの数値報酬は非公開。", "quota、ramp、attainment、product・partner・expansion creditは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "監査済みrevenue、GAAP利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-fivetran-about"] },
    { label: "年間売上規模の参考値（Standalone ARR）", value: "3億米ドル超（約478.1億円）", detail: "2024年9月時点のrun-rate。認識売上高ではなく、規模比較の参考値としてのみ使う。", sourceIds: ["rollout-fivetran-arr-2024", "rollout-b10-boj-usd-20260814"] },
    { label: "合併後scale", value: "10万超data teams／750超sources／200超destinations", detail: "data teamsはpaying customers数と同義ではない。契約時combined ARR約6億米ドル（約956.3億円）は見込み。", sourceIds: ["rollout-fivetran-merger", "rollout-fivetran-connectors"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "統合後の一次情報による厳密人数を確認できない。", sourceId: "rollout-fivetran-merger" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "4求人から現在人数を推定しない。", sourceId: "rollout-fivetran-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "実稼働officeは確認不能", detail: "登記上は東京都港区。現行求人はRemote Japan。", sourceId: "rollout-fivetran-nta" };
  intelligence.companyStats.japanSince = { value: "2024年2月法人登記", detail: "営業開始年・実officeと同義ではない。", sourceId: "rollout-fivetran-nta" };
  intelligence.customerProof = [
    { company: "ライオン", products: "Fivetran・SAP→BigQuery", outcome: "network開通後1週間でinitial verification syncを完了。", implication: "vendor-selected。運用costの大幅削減は定性で、大規模SAP syncのusageが当初想定超という反証もある。", sourceId: "rollout-fivetran-lion" },
    { company: "Saint-Gobainの日本team", products: "Fivetran", outcome: "fragile・high-costのAzure Data Factory pipelineを置換したreliability・infra cost改善を説明。", implication: "global全体の3カ月・50%等を日本team成果へ誤帰属しない。", sourceId: "rollout-fivetran-saint-gobain" },
  ];
  intelligence.roleLens = { salesMotion: "BDRがpipelineを作り、Sales Directorがenterprise full-cycle、Partner Salesがecosystem、Customer Solutions Architectがadoption・expansionを担う。", compensation: "BDRはbase＋uncapped commission、他はsalary・equity・performance payの定性記載のみ。数値は非公開。", quota: "quota、ACV、cycle、attainment、MAR・MMR、partner・dbt・Fivetran product creditは非公開。", collaboration: "Sales、BDR、Partner、Customer Solutions、Product・Engineering、dbt、cloud・SI・GSI、customer Data・Securityが連携。" };
  intelligence.salesAppeal = { intro: "data movement単体からmove・transform・context・activateへ広がる統合後GTMを整理した。", points: [{ title: "4つのlifecycle role", detail: "BDR、Enterprise Sales、Partner Sales、Customer SolutionsをRemote Japanで同時採用。", sourceIds: ["rollout-fivetran-jobs-20260817"] }, { title: "SAP・legacyからAIまで扱う", detail: "connectorの保守負荷をtime-to-data、freshness、engineer hours、AI reliabilityの価値へ変える。", sourceIds: ["rollout-fivetran-lion", "rollout-fivetran-connectors"] }, { title: "merger後の役割境界を作る", detail: "Sales Directorはdbt Cloud製品のrole。二重計上ではなく、統合会社内の製品責任を面接で確認する。", sourceIds: ["rollout-fivetran-merger", "rollout-fivetran-jobs-20260817"] }] };
  addSources(intelligence, [
    { id: "rollout-fivetran-about", label: "Fivetran About", url: "https://www.fivetran.com/about", kind: "企業公式", scope: "創業・HQ・CEO", checkedAt: researchedAt },
    { id: "rollout-fivetran-jobs-20260817", label: "Fivetran現行日本求人", url: "https://www.fivetran.com/careers", kind: "企業公式", scope: "Remote Japan 4求人・言語・報酬", checkedAt: researchedAt },
    { id: "rollout-fivetran-arr-2024", label: "Fivetran ARR 3億米ドル超", url: "https://www.fivetran.com/press/fivetran-surpasses-300m-arr-driven-by-growing-ai-and-data-movement-demand", kind: "企業公式", scope: "Standalone ARR", checkedAt: researchedAt },
    { id: "rollout-fivetran-merger", label: "Fivetran・dbt Labs merger完了", url: "https://www.fivetran.com/press/fivetran-dbt-labs-complete-merger-to-create-the-data-infrastructure-for-trusted-ai-agents", kind: "企業公式", scope: "統合・経営・data teams", checkedAt: researchedAt },
    { id: "rollout-fivetran-connectors", label: "Fivetran Connectors", url: "https://www.fivetran.com/connectors", kind: "企業公式", scope: "source・destination scale", checkedAt: researchedAt },
    { id: "rollout-fivetran-nta", label: "国税庁 法人番号公表サイト", url: "https://www.houjin-bangou.nta.go.jp/", kind: "公的機関", scope: "Fivetran Japan株式会社・法人番号指定", checkedAt: researchedAt },
    { id: "rollout-fivetran-lion", label: "Fivetran・ライオン事例", url: "https://www.fivetran.com/case-studies/lion-corporation-automates-sap-data-integration-to-power-digital-transformation", kind: "企業公式", scope: "国内SAP・BigQuery・導入期間", checkedAt: researchedAt },
    { id: "rollout-fivetran-saint-gobain", label: "Fivetran・Saint-Gobain事例", url: "https://www.fivetran.com/fr/case-studies/saint-gobain-gains-real-time-sap-data-optimizes-spend-with-fivetran", kind: "企業公式", scope: "日本team・global成果の境界", checkedAt: researchedAt },
    { id: "rollout-fivetran-ipa-talent", label: "IPA DX人材不足分析", url: "https://www.ipa.go.jp/digital/chousa/discussion-paper/dx2025_digital_talent_ai_era.html", kind: "公的機関", scope: "DX人材不足・AI・data skill", checkedAt: researchedAt },
    { id: "rollout-fivetran-ppc-offshore", label: "個人情報保護委員会 外国第三者提供ガイドライン", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore/", kind: "公的機関", scope: "越境data・委託・継続確認", checkedAt: researchedAt },
    { id: "rollout-b10-boj-usd-20260814", label: "日本銀行 外国為替市況 2026年8月14日", url: "https://www.boj.or.jp/statistics/market/forex/fxdaily/fxlist/fx260814.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=159.38円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchGrafana(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2014", "会社創業", "Grafana OSSを起点に、Raj Dutt、Anthony Woods、Torkel Ödegaardが会社を創業。", "rollout-grafana-about");
  ensureMilestone(intelligence, "2025", "日本法人設立", "2025年11月、東京にグラファナラボ日本合同会社を設立。", "rollout-grafana-japan-subsidiary");
  applyStandard(intelligence, buildCompactPatch({
    slug: "grafana-labs", leaderName: "Raj Dutt", leaderLabel: "Co-founder・CEO", leaderUrl: "https://grafana.com/about/", localName: "加賀美 正篤", localLabel: "副社長執行役員 GTMカントリーリーダー", localUrl: "https://grafana.com/ja/blog/grafana-labs-enters-into-a-partnership-with-dirbato/",
    companyId: "rollout-grafana-about", jobId: "rollout-grafana-jobs-20260817", customersId: "rollout-grafana-jaxa", externalId: "rollout-grafana-ipa-dx2025", financeId: "rollout-grafana-arr-2026",
    targets: ["CTO・CIO・Engineering責任者", "SRE・DevOps・Platform Engineering部門", "Cloud・Infrastructure Operations部門", "Incident・Reliability・FinOps部門", "Security・IT Operations部門"], competitors: "Datadog、Dynatrace、New Relic、Splunk・Cisco、Elastic、AWS・Azure・Google Cloud標準監視、自前Prometheus・Loki・Tempo",
    feature: "Grafana Cloud、EnterpriseとLGTM stack、k6、IRM・SLO、AI AssistantをOpenTelemetry-nativeで提供する。", advantage: "open source ecosystemと既存data sourceを残したまま、metrics、logs、traces、profiles、incident workflowをmanaged platformへ統合できる。", benefit: "MTTD・MTTR、alert noise、telemetry ingest・retention費、self-managed toil、tool数、engineer hoursを改善できる可能性がある。", evidence: "JAXA SLIMは10超dashboardと数千telemetry seriesを制御室で共有。DENSOは世界130工場、GREE・SORACOMも国内利用を公式発表で確認。",
    marketVerdict: "結論：cloud・AI・内製化でtelemetryと運用負荷が増える市場が追い風。ARR 4億米ドル超（約630.2億円）・顧客7,000社超だが、売上・利益・FCFは非公開。日本の対象2求人はRemote。", marketParagraphs: ["cloud、AI、legacy刷新でserviceとsignalが増えると、tool・data silo、alert noise、MTTR、telemetry bill、自前OSS運用が拡大する。", "今後3〜5年はOpenTelemetryとmanaged observabilityが追い風だが、hyperscaler標準、full-stack specialist、data residency、ingest・retention費、outage riskが選定条件になる。", "Genba分析：critical service一つでMTTD・MTTR、alert、ingest・retention費、tool数、engineer hoursを既存stackと比較する。"],
    cultureHeadline: "公式Careersは100% fully remote、hours・locationよりoutcomesを掲げる。日本2求人もRemote。高い透明性、継続的なship、customer successへの全員参加を求める。", classification: "フルリモート", displayLabel: "Remote Japan", officeDays: "恒常的な出社なし", remoteOnly: "日本2求人はRemote", flexibility: "対面onboardingや全社meetingの条件は面接確認",
    goodFor: ["OSSとenterprise SaaSを横断したい", "SRE・Platformの技術価値を売りたい", "telemetry economicsとincident成果を定量化したい"], cautionFor: ["監査済み財務を必須にする", "日本の言語・quota開示を必須にする", "mission-critical SaaSの集中riskを避けたい"],
    unresolved: [["財務の質", "ARR 4億米ドル超（約630.2億円）と7,000社超を会社発表。", "recognized revenue、growth、gross margin、profit、FCF、retentionは？"], ["日本scale", "法人・GTM leader・Remote 2求人を確認。", "Japan revenue、customer、headcount、EBC実開設、SE・CS coverageは？"], ["Data economics", "OpenTelemetry-nativeとAdaptive Telemetryを訴求。", "signal別ingest・retention・query・egress、discount、3年TCOは？"], ["Reliability", "2025年に約150分のpartial outageを公表。", "region、SLA、data loss boundary、DR、incident creditは？"], ["Commercial", "SEのみOTE 1,400万〜1,850万円を開示。", "AE pay、base mix、quota、ramp、attainment、RSUは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "監査済みrevenue、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-grafana-arr-2026"] },
    { label: "ARR", value: "4億米ドル超（約630.2億円）", detail: "2026年1月期のcompany-reported run-rate。売上高ではない。", sourceIds: ["rollout-grafana-arr-2026", "rollout-b10-customs-usd-20260816"] },
    { label: "事業固有規模", value: "顧客7,000社超／Fortune 50の70%／users 3,500万超", detail: "会社発表のglobal scale。日本の有料顧客数ではない。", sourceIds: ["rollout-grafana-arr-2026", "rollout-grafana-jobs-20260817"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "1,600人超・40カ国超", detail: "現行求人の会社表示。", sourceId: "rollout-grafana-jobs-20260817" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "2求人から現在人数を推定しない。", sourceId: "rollout-grafana-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京（住所・EBC稼働は確認不能）", detail: "2025年発表のEBCは開設予定で、実開設を確認できない。", sourceId: "rollout-grafana-japan-subsidiary" };
  intelligence.companyStats.japanSince = { value: "2025年11月", detail: "グラファナラボ日本合同会社を設立。", sourceId: "rollout-grafana-japan-subsidiary" };
  intelligence.customerProof = [
    { company: "JAXA SLIM", products: "Grafana", outcome: "10超dashboard、数千telemetry series、約50 heatersを制御室でreal-time共有。", implication: "利用規模の証拠であり、有償Grafana Cloud契約やbusiness ROIの証明ではない。", sourceId: "rollout-grafana-jaxa" },
    { company: "DENSO・GREE・SORACOM", products: "Grafana OSS・Grafana Cloud", outcome: "DENSOは世界130工場、GREEは2015年から標準stack、SORACOMは2018年からIoT可視化に利用。", implication: "会社発表・祝辞を含み、MTTR・cost等の定量成果は非公開。", sourceId: "rollout-grafana-japan-subsidiary" },
  ];
  intelligence.roleLens = { salesMotion: "Senior Enterprise AEがJapan new logoを開拓し、Senior Solutions Engineerがdiscovery、architecture、demo・PoC、security reviewを支える。", compensation: "SEの公式OTEは年1,400万〜1,850万円。AEの数値報酬、base・variable内訳、RSU額は非公開。", quota: "quota、担当社数、ACV、cycle、attainment、Cloud・Enterprise・consumption creditは非公開。", collaboration: "AE、SE、Product・Engineering、Customer Success、SRE・Platform・CIO・Securityが連携する。" };
  intelligence.salesAppeal = { intro: "OSS adoptionをmanaged observabilityのbusiness caseへ変える日本GTMを整理した。", points: [{ title: "new logoとtechnical winを同時採用", detail: "AEとSEの2roleでprospectingからPoC・closeまでを日本で強化。", sourceIds: ["rollout-grafana-jobs-20260817"] }, { title: "open ecosystemを前提に売る", detail: "既存Prometheus・Loki・Tempo・data sourceを残し、運用責任とeconomicsをCloudへ移す。", sourceIds: ["rollout-grafana-cloud"] }, { title: "costとreliabilityを同じPoCで測る", detail: "MTTRだけでなくingest・retention・operator hoursとoutage toleranceを定量化する。", sourceIds: ["rollout-grafana-outage", "rollout-grafana-ipa-dx2025"] }] };
  addSources(intelligence, [
    { id: "rollout-grafana-about", label: "Grafana Labs About", url: "https://grafana.com/about/", kind: "企業公式", scope: "会社・創業・経営", checkedAt: researchedAt },
    { id: "rollout-grafana-jobs-20260817", label: "Grafana Labs現行日本求人", url: "https://job-boards.greenhouse.io/grafanalabs?keyword=japan", kind: "企業公式", scope: "日本2求人・Remote・OTE", checkedAt: researchedAt },
    { id: "rollout-grafana-arr-2026", label: "Grafana Labs FY2026 scale", url: "https://grafana.com/press/2026/02/03/grafana-labs-caps-a-breakout-year-of-growth-and-product-innovation/", kind: "企業公式", scope: "ARR・顧客・成長", checkedAt: researchedAt },
    { id: "rollout-grafana-japan-subsidiary", label: "Grafana Labs日本法人設立", url: "https://grafana.com/about/press/2025/11/12/grafana-labs-establishes-japan-subsidiary-to-accelerate-local-market-expansion-ja/", kind: "企業公式", scope: "日本法人・顧客・EBC予定", checkedAt: researchedAt },
    { id: "rollout-grafana-japan-leader", label: "Grafana Labs日本GTM leader", url: "https://grafana.com/ja/blog/grafana-labs-enters-into-a-partnership-with-dirbato/", kind: "企業公式", scope: "日本責任者・市場調査", checkedAt: researchedAt },
    { id: "rollout-grafana-jaxa", label: "Grafana・JAXA SLIM事例", url: "https://grafana.com/blog/how-japans-space-agency-used-grafana-to-monitor-its-first-moon-landing-in-real-time/", kind: "企業公式", scope: "国内telemetry事例", checkedAt: researchedAt },
    { id: "rollout-grafana-cloud", label: "Grafana Cloud", url: "https://grafana.com/products/cloud/", kind: "企業公式", scope: "製品・Adaptive Telemetry", checkedAt: researchedAt },
    { id: "rollout-grafana-outage", label: "Grafana Cloud partial outage review", url: "https://grafana.com/blog/how-we-responded-to-a-2-hour-partial-outage-in-grafana-cloud/", kind: "企業公式", scope: "reliability counter-signal", checkedAt: researchedAt },
    { id: "rollout-grafana-ipa-dx2025", label: "IPA DX動向2025", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2025.html", kind: "公的機関", scope: "cloud・AI・内製化・data活用", checkedAt: researchedAt },
    { id: "rollout-b10-customs-usd-20260816", label: "税関 2026年8月16日〜22日公示レート", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算レート（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchGurobi(intelligence: CompanyPublicIntelligence) {
  ensureMilestone(intelligence, "2023", "日本法人設立", "2023年6月、Gurobi Optimization LLCの日本法人として業務を開始。", "rollout-gurobi-japan-company");
  ensureMilestone(intelligence, "2025", "Gurobi Japanへ社名変更", "2025年10月、株式会社Gurobi Japanへ社名変更。", "rollout-gurobi-japan-company");
  applyStandard(intelligence, buildCompactPatch({
    slug: "gurobi", leaderName: "Duke Perrucci / Ed Rothberg", leaderLabel: "CEO／Chairman・Chief Scientist", leaderUrl: "https://www.gurobi.com/company/newsroom/gurobi-appoints-duke-perrucci-as-chief-executive-officer", localName: "Duke Perrucci", localLabel: "株式会社Gurobi Japan 代表取締役", localUrl: "https://www.gurobi.com/jp/company",
    companyId: "rollout-gurobi-company", jobId: "rollout-gurobi-jobs-20260817", customersId: "rollout-gurobi-yokumoku", externalId: "rollout-gurobi-mlit-logistics", financeId: "rollout-gurobi-company",
    targets: ["COO・CIO・Supply Chain責任者", "Manufacturing・Production Planning部門", "Operations Research・Data Science部門", "Logistics・Network・Workforce Planning部門", "Finance・Pricing・Risk・SI部門"], competitors: "IBM CPLEX、FICO Xpress、MOSEK、Google OR-Tools、HiGHS・CBC・SCIP・CP-SAT、SAP・Blue Yonder等planning suite、Excel・manual heuristic・内製",
    feature: "Gurobi Optimizer、Compute Server、Instant CloudをLP・QP・QCP・NLP・mixed-integerと主要APIで提供し、Intelligence Hubを拡張する。", advantage: "actual-sizeの数理modelを高速に解き、enterprise support、deployment、Cloud、SIと組み合わせて業務workflowへ組み込める。", benefit: "production・物流・人員計画の作成時間、再計算、capacity・在庫・service・cost trade-off、属人化を改善できる可能性がある。", evidence: "YOKU MOKU CREAは各工場で年約600時間を削減し、初期計画を2〜3週から1日へ。豊田自動織機は初期案作成工数を63%削減。",
    marketVerdict: "結論：物流capacity不足と製造人材・熟練者依存が数理最適化の投資理由。売上・利益・ARRは非公開。公式Leverで日本求人は0件となり、旧Regional Sales Directorは終了扱い。", marketParagraphs: ["人手・物流capacity不足、需要・供給・energy変動、熟練者引退で、制約の多い計画を短時間で再計算する必要が高まる。", "今後3〜5年は予測AIから実行可能なdecisionへの接続が追い風だが、小規模modelのopen-source、planning suite、要件定義・保守、license TCOが選定条件になる。", "Genba分析：同一model・data・hardwareでsolve time、gap、constraint violation、objective value、plan hours、compute、保守工数を比較する。"],
    cultureHeadline: "公式valuesはInnovation、Customer Focus、Integrity、Dedication、Power of the Team。現行日本求人が0件のため、旧Tokyo-Remote条件を現在の勤務条件へ転用しない。", classification: "未確認", displayLabel: "現行日本求人なし", officeDays: "該当なし", remoteOnly: "旧Remote求人は終了", flexibility: "日本の現在の勤務条件・benefitsは確認不能",
    goodFor: ["制約の多い業務を定量化したい", "manufacturing・logisticsの現場と数理をつなぎたい", "solver performanceと業務ROIを売りたい"], cautionFor: ["今すぐ応募可能な日本求人を求める", "財務透明性を必須にする", "modeling・change managementを避けたい"],
    unresolved: [["採用", "公式boardの日本求人は0件。", "再採用時期、Japan GTM・technical teamの役割、後任計画は？"], ["財務", "private companyでcustomer scaleのみ。", "revenue、ARR、profit、FCF、growth、Japan contributionは？"], ["日本組織", "法人・府中office・代表を確認。", "日常のJapan leader、headcount、sales・technical・support体制は？"], ["Model lifecycle", "国内で大幅な計画工数削減例。", "要件定義、parameter、data quality、説明、保守、教育、再現性は？"], ["Product maturity", "Intelligence Hubを発表。", "Modeler beta、Explainer・MCP experimentalのGA、support、security境界は？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "revenue、ARR、営業利益、純利益、EBITDA、FCFは確認できない。", sourceIds: ["rollout-gurobi-company"] },
    { label: "顧客規模", value: "2,500社超・40業種超（2023年）", detail: "dated company-reported metric。現在の顧客数・有料契約数ではない。", sourceIds: ["rollout-gurobi-nec"] },
    { label: "顧客評価", value: "NPS 70／Support・TAM満足度各98%（2023年）", detail: "会社実施のcustomer surveyで、独立比較ではない。", sourceIds: ["rollout-gurobi-nps"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "非公開", detail: "一次情報で現在の厳密人数を確認できない。", sourceId: "rollout-gurobi-company" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "現行日本求人は0件。", sourceId: "rollout-gurobi-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "東京都府中市府中町1-25-12 ゼルコバビル3階", detail: "株式会社Gurobi Japanの公式会社概要。", sourceId: "rollout-gurobi-japan-company" };
  intelligence.companyStats.japanSince = { value: "2010年2月", detail: "October Sky設立・総販売代理店契約。2023年日本法人化、2025年社名変更。", sourceId: "rollout-gurobi-japan-company" };
  intelligence.customerProof = [
    { company: "YOKU MOKU CREA", products: "Gurobi Optimizer・custom planning", outcome: "各工場の年間作業を約600時間削減し、初期生産計画を2〜3週間から1日へ短縮。", implication: "vendor-selected。October Sky支援とcustom solutionを含み、license単独効果ではない。", sourceId: "rollout-gurobi-yokumoku" },
    { company: "豊田自動織機", products: "Gurobi Optimizer", outcome: "57 lines・約400品番の計画で、初期案作成工数を63%削減。", implication: "model管理の属人化、教育、目的関数を人が決める課題も顧客講演で明記。", sourceId: "rollout-gurobi-toyota-industries" },
  ];
  intelligence.roleLens = { salesMotion: "現行日本求人は0件。旧Regional Sales Directorのstrategy・team・account・partner・forecast条件を現在の役割として残さない。", compensation: "現行日本求人がなく、給与・OTE・bonus・equityの確認対象はない。", quota: "Japan quota、ACV、cycle、attainment、license・Cloud・service creditは非公開。", collaboration: "日本法人、global Product・Support、October Sky・SI、顧客Operations・OR・IT・経営層が連携する構造は事例から確認できる。" };
  intelligence.salesAppeal = { intro: "現行求人はないため、応募可能性ではなく日本事業とcategoryの判断材料として整理した。", points: [{ title: "計画工数をhard KPIで扱う", detail: "国内事例は600時間、2〜3週→1日、63%削減と成果を具体化している。", sourceIds: ["rollout-gurobi-yokumoku", "rollout-gurobi-toyota-industries"] }, { title: "solverだけでなくmodel lifecycleを売る", detail: "要件、data、objective、deployment、support、教育まで含めて成功条件を設計する。", sourceIds: ["rollout-gurobi-company"] }, { title: "現行採用を誤認しない", detail: "旧Japan求人の残存HTMLよりcurrent official boardとLever API 404を優先。", sourceIds: ["rollout-gurobi-jobs-20260817"] }] };
  intelligence.solutions = [
    { name: "Gurobi Optimizer", valueProp: "LP・QP・QCP・NLP・mixed-integerをenterprise scaleで解く。", url: "https://www.gurobi.com/solutions/gurobi-optimizer/", competitors: "IBM CPLEX、FICO Xpress、MOSEK、open-source solver。", differentiation: "actual modelでのperformance、API、support、deployment。", retention: "model・API・業務workflowへ組み込まれるほど継続利用につながる。" },
    { name: "Compute Server / Instant Cloud", valueProp: "centralized・distributed・cloudでsolver workloadを運用する。", url: "https://www.gurobi.com/product/instant-cloud", competitors: "self-managed infrastructure、cloud batch、planning suite。", differentiation: "AWS Tokyo regionを含むmanaged deployment option。", retention: "production planningの定期実行とcapacity拡張が継続利用の起点。" },
    { name: "Intelligence Hub", valueProp: "GurobotとAI-guided workflowでmodel作成・説明を支援する。", url: "https://www.gurobi.com/company/newsroom/gurobi-launches-intelligence-hub-to-deliver-ai-guided-workflows-across-the-optimization-lifecycle", competitors: "manual modeling、notebook、general coding agent。", differentiation: "Modelerはbeta、Explainer・Local MCPはexperimentalでGAと混同しない。", retention: "model lifecycle全体の利用は将来余地で、preview段階の定着を仮定しない。" },
  ];
  addSources(intelligence, [
    { id: "rollout-gurobi-company", label: "Gurobi company・careers", url: "https://www.gurobi.com/company/careers", kind: "企業公式", scope: "会社・values・採用正規性", checkedAt: researchedAt },
    { id: "rollout-gurobi-jobs-20260817", label: "Gurobi公式Lever board", url: "https://jobs.lever.co/GurobiOptimization", kind: "企業公式", scope: "現行7求人・日本0・旧求人終了", checkedAt: researchedAt },
    { id: "rollout-gurobi-japan-company", label: "株式会社Gurobi Japan会社概要", url: "https://www.gurobi.com/jp/company", kind: "企業公式", scope: "法人沿革・代表・府中office", checkedAt: researchedAt },
    { id: "rollout-gurobi-nec", label: "NEC・Gurobi partnership", url: "https://www.gurobi.com/company/newsroom/nec-and-gurobi-optimization-sign-system-integration-partnership-agreement", kind: "企業公式", scope: "2023年顧客・業種・満足度", checkedAt: researchedAt },
    { id: "rollout-gurobi-nps", label: "Gurobi 2023 NPS", url: "https://www.gurobi.com/company/newsroom/gurobi-achieves-industry-leading-net-promoter-score-2023", kind: "企業公式", scope: "NPS・Support・TAM満足度", checkedAt: researchedAt },
    { id: "rollout-gurobi-yokumoku", label: "Gurobi・YOKU MOKU CREA事例", url: "https://www.gurobi.com/resources/case-studies/optimizing-daily-production-how-yoku-moku-crea-co-ltd-transformed-operations-with-gurobi", kind: "企業公式", scope: "国内計画時間削減", checkedAt: researchedAt },
    { id: "rollout-gurobi-toyota-industries", label: "Gurobi・豊田自動織機事例", url: "https://www.gurobi.com/jp/blog/category01-019", kind: "企業公式", scope: "国内計画工数・反証", checkedAt: researchedAt },
    { id: "rollout-gurobi-mlit-logistics", label: "国土交通省 物流白書", url: "https://www.mlit.go.jp/hakusyo/mlit/r05/hakusho/r06/html/n2522c01.html", kind: "公的機関", scope: "輸送力不足・物流capacity", checkedAt: researchedAt },
    { id: "rollout-gurobi-meti-manufacturing", label: "経済産業省 2025年版ものづくり白書", url: "https://www.meti.go.jp/report/whitepaper/mono/2025/index.html", kind: "公的機関", scope: "製造人材・DX", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

function patchHightouch(intelligence: CompanyPublicIntelligence) {
  const foundingMilestone = intelligence.marketStatus.milestones.find((item) => item.label === "創業");
  if (foundingMilestone) {
    foundingMilestone.year = "2019";
    foundingMilestone.detail = "San FranciscoでTejas Manohar、Kashish Gupta、Joshua Curlが共同創業。";
    foundingMilestone.sourceId = "rollout-hightouch-about";
  } else {
    ensureMilestone(intelligence, "2019", "創業", "San FranciscoでTejas Manohar、Kashish Gupta、Joshua Curlが共同創業。", "rollout-hightouch-about");
  }
  ensureMilestone(intelligence, "2023", "日本提供開始・初reseller", "2023年、DearOneが日本初のreseller partnerとして提供を開始。", "rollout-hightouch-dearone");
  applyStandard(intelligence, buildCompactPatch({
    slug: "hightouch", leaderName: "Tejas Manohar / Kashish Gupta / Joshua Curl", leaderLabel: "Co-CEOs／Co-founder・CTO", leaderUrl: "https://hightouch.com/authors", localName: "非公開", localLabel: "日本責任者", localUrl: "https://job-boards.greenhouse.io/hightouch/jobs/5836057004",
    companyId: "rollout-hightouch-about", jobId: "rollout-hightouch-jobs-20260817", customersId: "rollout-hightouch-tirad", externalId: "rollout-hightouch-ppc-general", financeId: "rollout-hightouch-series-d",
    targets: ["CMO・CRM・Lifecycle・Growth部門", "CDO・Data Platform・Analytics Engineering部門", "MarTech・Advertising・Retail Media部門", "CIO・Architecture・Security部門", "Privacy・Legal・Procurement・Partner部門"], competitors: "Adobe RT-CDP、Salesforce Data Cloud、Twilio Segment、Treasure Data、mParticle、ActionIQ、Amperity、Census、RudderStack、Databricks・Snowflake native、Braze・Iterable、内製pipeline・ML",
    feature: "Agentic Marketing PlatformとComposable CDPでReverse ETL、Customer Studio、Identity Resolution、Events、Ad Studio、Lifecycle Studio、Content Assembly、AI Decisioningを提供する。", advantage: "既存warehouseをsource of truthにmarketer self-service、activation、approval・audit、AI decision loopを重ね、300超integrationへ接続する。", benefit: "audience build・launch time、data-team ticket、sync error、match・reach、consent・suppression、warehouse・CDP二重costを改善できる可能性がある。", evidence: "国内ティラド事例は開発工数4分の1、月約300時間削減、数億円規模の効果を説明。ただしDatabricks・Fivetran・Hightouch・MethodoLogic全体の成果。",
    marketVerdict: "結論：warehouse投資、AI marketing、data人材不足とprivacy governanceが追い風。ARR 1億米ドル（約161億円）だが売上・利益・FCFは非公開。Japan担当AE 1件の勤務地はAustralia・Singaporeで、日本法人・officeは未確認。", marketParagraphs: ["customer dataがwarehouseへ集まっても、audience作成、CSV・API、channel同期、consent・suppression、measurementがdata teamとtoolへ分断する。", "今後3〜5年はagentic marketingが追い風だが、suite・warehouse native、usage・compute cost、AI lift、data cache・越境、reseller deliveryが選定条件になる。", "Genba分析：一つのaudienceでlaunch time、sync、match、conversion、data-team工数、consent accuracy、3年TCO、auditを比較する。"],
    cultureHeadline: "公式valuesはForever hungry、Kindness、Efficient execution、Compassion、Impact driven、Raising the bar、Humility。Hub & Remote friendlyは全社方針だが、Japan AE個別求人の勤務形態は明記なし。", classification: "未確認", displayLabel: "Australia・SingaporeからJapan担当", officeDays: "明記なし", remoteOnly: "Remoteとは確認できない", flexibility: "日本法人・office・雇用主体は未確認",
    goodFor: ["dataとmarketingを横断したい", "early Japan marketをpartnerと作りたい", "Reverse ETLからagentic marketingへcategoryを広げたい"], cautionFor: ["日本法人・local teamの安定を必須にする", "監査済み財務を必須にする", "usage・warehouse costの変動を避けたい"],
    unresolved: [["日本entry", "2022 partner、2023 first reseller、2026 dedicated AE。", "法人、office、雇用主体、日本責任者、SE・CS・support、Japan ARRは？"], ["財務", "ARR 1億米ドル（約161億円）、Series D・valuationを会社発表。", "recognized revenue、ARR definition、growth、NRR、margin、profit、FCF、cashは？"], ["Data boundary", "core architectureはlong-lived copyを避ける。", "real-time・AI cache、bucket、logs、retention、subprocessor、region、deletionは？"], ["AI outcomes", "AI Decisioning・Agentic Marketingへ拡張。", "holdout、incremental lift、brand・human review、false action、model costは？"], ["Commercial", "AEの数値報酬・勤務・言語は非公開。", "quota、ramp、attainment、reseller credit、territory、travel、pay mixは？"]],
  }));
  intelligence.facts = [
    { label: "年間売上・稼ぐ力", value: "非公開", detail: "recognized revenue、営業利益、純利益、EBITDA、gross margin、FCFは確認できない。", sourceIds: ["rollout-hightouch-series-d"] },
    { label: "ARR", value: "1億米ドル（約161億円）", detail: "2026年のcompany-reported run-rate。売上高ではない。", sourceIds: ["rollout-hightouch-arr-2026", "rollout-b10-boj-august-rate"] },
    { label: "Series D・事業規模", value: "調達1.5億米ドル（約241.5億円）／評価額27.5億米ドル（約4,427.5億円）／803 paying customers", detail: "調達・評価額は売上・利益ではない。公式Aboutは約100億AI decisionsと7.358兆超records syncedも表示。", sourceIds: ["rollout-hightouch-series-d", "rollout-hightouch-about", "rollout-b10-boj-august-rate"] },
  ];
  intelligence.companyStats.globalHeadcount = { value: "400人超", detail: "2026年の会社公式social発信。", sourceId: "rollout-hightouch-arr-2026" };
  intelligence.companyStats.japanHeadcount = { value: "非公開", detail: "専任AE 1求人はAustralia・Singapore locationで、日本在籍数を示さない。", sourceId: "rollout-hightouch-jobs-20260817" };
  intelligence.companyStats.japanOffice = { value: "確認不能", detail: "日本法人・officeの公式情報は確認できない。", sourceId: "rollout-hightouch-jobs-20260817" };
  intelligence.companyStats.japanSince = { value: "2022年partner activity／2023年first reseller", detail: "2026年はdedicated Japan AE採用。進出を単年で断定しない。", sourceId: "rollout-hightouch-dearone" };
  intelligence.customerProof = [
    { company: "ティラド", products: "Hightouch・Databricks・Fivetran", outcome: "data分析開発工数を4分の1、line全体で月約300時間削減し、数億円規模の効果を試算。", implication: "MethodoLogicのpartner事例。複数product・integrator全体の成果で、Hightouch単独因果は分離できない。", sourceId: "rollout-hightouch-tirad" },
    { company: "国内匿名顧客", products: "Hightouch", outcome: "1日数億件規模のdata連携基盤が進行したと日本resellerが発表。", implication: "顧客名、契約、business outcome、renewalは非公開。", sourceId: "rollout-hightouch-dearone" },
  ];
  intelligence.roleLens = { salesMotion: "Australia・SingaporeからJapanへ売るfirst AEとして、pipeline、outbound、executive discovery、technical evaluation、design partner・case study、reseller relationshipを作る。", compensation: "給与、OTE、pay mix、equity、benefitsは個別求人で非公開。", quota: "quota、ACV、cycle、attainment、new・expansion、reseller・product credit、territory ownershipは非公開。", collaboration: "Founders、Product・Engineering、APAC、reseller・SI、warehouse partner、顧客Marketing・Data・Privacyが連携する。" };
  intelligence.salesAppeal = { intro: "日本のpartner-led motionから専任enterprise saleへ移る初期市場の判断材料を整理した。", points: [{ title: "first AEとしてmarketを作る", detail: "既存territoryの運用でなく、outbound、message、design partner、case study、resellerをゼロから構築する。", sourceIds: ["rollout-hightouch-jobs-20260817"] }, { title: "DataとMarketingを一つのcaseへ", detail: "warehouse ownership、activation speed、consent、campaign lift、data-team工数を同時に扱う。", sourceIds: ["rollout-hightouch-platform", "rollout-hightouch-ppc-general"] }, { title: "国内partner attributionを誠実に扱う", detail: "ティラドの大きな成果はmulti-product全体であり、PoCではHightouchの増分を切り分ける。", sourceIds: ["rollout-hightouch-tirad"] }] };
  intelligence.solutions = [
    { name: "Composable CDP / Reverse ETL", valueProp: "warehouse dataをaudience化し、広告・CRM・MAへ同期する。", url: "https://hightouch.com/platform/composable-cdp", competitors: "Census、RudderStack、Segment、custom pipeline。", differentiation: "warehouseをsource of truthにmarketer self-serviceとgovernanceを重ねる。", retention: "日次sync、audience運用、destination追加が継続利用の起点。" },
    { name: "Agentic Marketing Platform", valueProp: "Ad Studio、Lifecycle Studio、Content Assemblyでcontext付きcampaignを作る。", url: "https://hightouch.com/", competitors: "Adobe、Salesforce、Braze、Iterable、agency・内製AI。", differentiation: "customer・brand・channel contextとmeasurement loopを統合する。", retention: "campaign作成・実行・measurement loopへ組み込まれるほど利用が深まる。" },
    { name: "AI Decisioning", valueProp: "個人ごとのnext-best actionを継続的に最適化する。", url: "https://hightouch.com/platform/ai-decisioning", competitors: "Dynamic Yield、OfferFit系、内製ML。", differentiation: "warehouse dataとactivation・holdoutを接続する。", retention: "decision volumeとoutcome feedbackが継続利用の起点だが、incremental liftは個別検証が必要。" },
  ];
  addSources(intelligence, [
    { id: "rollout-hightouch-about", label: "Hightouch About", url: "https://hightouch.com/about", kind: "企業公式", scope: "創業・顧客・AI decisions・records", checkedAt: researchedAt },
    { id: "rollout-hightouch-jobs-20260817", label: "Hightouch現行Japan担当求人", url: "https://job-boards.greenhouse.io/hightouch/jobs/5836057004", kind: "企業公式", scope: "Japan AE・location・role・非公開条件", checkedAt: researchedAt },
    { id: "rollout-hightouch-arr-2026", label: "Hightouch company ARR announcement", url: "https://www.linkedin.com/posts/hightouchio_100m-arr-series-d-and-400-employees-around-activity-7456016316446044161-k48U", kind: "企業公式", scope: "ARR・headcount", checkedAt: researchedAt },
    { id: "rollout-hightouch-series-d", label: "Hightouch Series D", url: "https://hightouch.com/blog/hightouch-funding-series-d", kind: "企業公式", scope: "調達・評価額・製品・顧客成果", checkedAt: researchedAt },
    { id: "rollout-hightouch-dearone", label: "DearOne・Hightouch reseller発表", url: "https://prtimes.jp/main/html/rd/p/000000191.000002473.html", kind: "企業公式", scope: "日本初reseller・国内匿名scale", checkedAt: researchedAt },
    { id: "rollout-hightouch-tirad", label: "MethodoLogic・ティラド事例", url: "https://www.methodologic.co.jp/cases/trad/", kind: "企業公式", scope: "国内multi-product定量成果", checkedAt: researchedAt },
    { id: "rollout-hightouch-platform", label: "Hightouch Composable CDP", url: "https://hightouch.com/platform/composable-cdp", kind: "企業公式", scope: "製品・architecture", checkedAt: researchedAt },
    { id: "rollout-hightouch-security", label: "Hightouch Security architecture", url: "https://hightouch.com/docs/security/overview", kind: "企業公式", scope: "data storage・cache caveat", checkedAt: researchedAt },
    { id: "rollout-hightouch-ppc-general", label: "個人情報保護委員会 通則ガイドライン", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "委託先監督・安全管理", checkedAt: researchedAt },
    { id: "rollout-hightouch-meti-ai", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance", checkedAt: researchedAt },
    { id: "rollout-b10-boj-august-rate", label: "日本銀行 2026年8月基準外国為替相場", url: "https://www.boj.or.jp/about/services/tame/tame_rate/kijun/kiju2608.htm", kind: "公的機関", scope: "円換算レート（1米ドル=161円）", checkedAt: researchedAt },
  ]);
  refreshSourceDates(intelligence);
}

export function applyCompanyPageRolloutBatchTen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.figma) patchFigma(records.figma);
  if (records.fivetran) patchFivetran(records.fivetran);
  if (records["grafana-labs"]) patchGrafana(records["grafana-labs"]);
  if (records.gurobi) patchGurobi(records.gurobi);
  if (records.hightouch) patchHightouch(records.hightouch);
}
