import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

function addSources(intelligence: CompanyPublicIntelligence, sources: CompanyPublicIntelligence["sources"]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function refresh(intelligence: CompanyPublicIntelligence) {
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function milestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function markNoDomesticCase(intelligence: CompanyPublicIntelligence, sourceId: string, detail: string) {
  if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: "国内公式事例", need: detail, sourceId }];
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience[1] = { label: "国内顧客成果", value: "確認不能", detail, sourceId };
}

function patchZscaler(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2007", "創業", "Jay Chaudhryがcloud-native security企業として創業。", "rollout-zscaler-company");
  milestone(intelligence, "2020", "日本事業開始を確認", "金田博之をゼットスケーラー株式会社代表取締役・日本／アジア事業責任者に任命。2026年年頭所感で現職を再確認。法人設立年ではない。", "rollout-zscaler-japan");
  applyStandard(intelligence, buildCompactPatch({
    slug: "zscaler", leaderName: "Jay Chaudhry", leaderLabel: "Founder・Chairman・CEO", leaderUrl: "https://www.zscaler.com/company/leadership", localName: "金田 博之", localLabel: "ゼットスケーラー株式会社 代表取締役", localUrl: "https://www.zscaler.com/jp/blogs/company-news/new-year-message-2026",
    companyId: "rollout-zscaler-company", jobId: "rollout-zscaler-jobs", customersId: "rollout-zscaler-adk", externalId: "rollout-b17-ipa-threats", financeId: "rollout-zscaler-q3fy26",
    targets: ["大企業のCIO・CISO", "ネットワーク・セキュリティ設計", "データ・AIセキュリティ", "公共・金融・製造・通信", "SI・MSP・技術パートナー"], competitors: "Netskope、Palo Alto Prisma SASE、Cloudflare One、Cisco、Microsoft Entra・Purview、legacy VPN・firewall・proxy",
    feature: "Zero Trust Exchangeでinternet・private application、branch、workload、data、AI利用をidentity・contextベースで仲介する。", advantage: "appliance・network access中心でなく、global inline cloudと一接続単位のpolicyを共通architectureにする。", benefit: "VPN・backhaul、attack surface、policy運用、data leakage、user experience、tool・network costを同時に改善できる可能性がある。", evidence: "ADKは約2,600人規模で20拠点へ3カ月で展開し、helpdesk対応時間を50%削減したと報告。vendor caseで独立監査なし。",
    marketVerdict: "結論：cloud・remote・AI agentでaccess pathが増え、zero trustをnetwork刷新とdata・AI governanceへ広げる需要が続く。Q3 FY2026売上8.505億米ドル（約1,340.0億円）、GAAP営業損失2,964万米ドル、FCF 1.36億米ドル。日本は29対象求人。", marketParagraphs: ["VPN、firewall、proxy、CASB、DLPが別々だと、user・device・app・dataのcontext、incident、policy、experienceが分断する。", "Buyerはzero trustの標語でなく、latency、attack surface、DLP precision、AI・agent control、migration、availability、partner delivery、3年TCOを求める。", "Genba分析：限定user・applicationでVPN ticket、latency、policy数、blocked risk、incident、admin hours、network costをbaseline比較する。"],
    cultureHeadline: "customer obsession、teamwork、ownership、accountabilityを重視。日本29対象求人はHybrid表記だが出社日数は非公開。", classification: "ハイブリッド", displayLabel: "東京・大阪／Hybrid", officeDays: "非公開", remoteOnly: "大阪2求人はATS locationがRemote Osaka", flexibility: "role・territoryにより出張あり",
    goodFor: ["CIO・CISO変革を大型案件へしたい", "Sales・SE・Value・Renewalを横断したい", "zero trustからAI securityへ広げたい"], cautionFor: ["少数精鋭の単一求人だけを好む", "GAAP黒字を必須にする", "network・data・identityの学習を避けたい"],
    unresolved: [["Territory", "29求人はsegment・専門領域・重複IDを含む。", "実採用人数、named account、new・expand、重複requisitionの目的は？"], ["Compensation", "全29件で日本の数値報酬なし。", "base、OTE、pay mix、quota、equity、ramp、attainmentは？"], ["Team design", "Sales、SE、Value、Renewal、Transformationを同時採用。", "各roleのreporting、案件credit、partner、CS・Supportとの責任境界は？"], ["AI security", "AI・agent securityをplatformへ拡張。", "Japan customerのproduction scope、data・model boundary、false positive、rollback、auditは？"], ["Economics", "ARR成長とpositive FCFの一方、GAAP赤字。", "Japan growth、retention、product attach、discount、sales efficiencyは？"]],
  }));
  intelligence.marketStatus.growthSummary = "Q3 FY2026売上8.505億米ドル（約1,340.0億円、前年同期比25%増）。ARR 35.25億米ドル（約5,554.0億円、売上ではない）。GAAP営業損失2,964万米ドル、FCF 1.36億米ドル（約214.3億円）。";
  intelligence.facts = [
    { label: "Q3 FY2026売上", value: "8.505億米ドル（約1,340.0億円）", detail: "前年同期比25%増。", sourceIds: ["rollout-zscaler-q3fy26", "rollout-b17-fx"] },
    { label: "稼ぐ力", value: "GAAP営業損失2,964万米ドル（約46.7億円）", detail: "FCFは1.36億米ドル（約214.3億円）、margin 16%。", sourceIds: ["rollout-zscaler-q3fy26", "rollout-b17-fx"] },
    { label: "事業固有指標", value: "ARR 35.25億米ドル（約5,554.0億円）", detail: "前年同期比25%増。ARRは売上ではない。RPOは64.59億米ドル。", sourceIds: ["rollout-zscaler-q3fy26", "rollout-b17-fx"] },
  ];
  intelligence.customerProof = [
    { company: "ADKホールディングス", products: "ZIA・ZPA・Zero Trust Exchange", outcome: "約2,600人・20拠点へ3カ月で展開し、helpdesk対応時間を50%削減。", implication: "Windows 11移行等を含む顧客談・vendor caseで、単独因果の独立監査なし。", sourceId: "rollout-zscaler-adk" },
    { company: "NTTドコモグループ", products: "Zscaler Zero Trust", outcome: "5万人超のstaffを対象に段階移行し、securityとuser experienceを両立。", implication: "deployment規模であり、cost・時間の削減率は非公開。", sourceId: "rollout-zscaler-docomo" },
  ];
  intelligence.roleLens = { salesMotion: "AEがsegment別new・expand、SEがtechnical win、Value Consulting・Transformation Architectがbusiness case、Renewalがretentionを担うplatform sale。", compensation: "日本29対象求人の給与、OTE、pay mix、equityは数値非公開。", quota: "quota、attainment、ACV、cycle、account数、product creditは非公開。", collaboration: "CIO・CISO、Network、Data、AI、Procurement、partnerとSales、SE、Value、Renewal、Transformation、CSを横断。" };
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年8月17日",
    metrics: [
      { label: "Q3 FY2026売上", value: "8.505億米ドル（約1,340.0億円）", change: "+25%", interpretation: "platform需要とRed Canaryを含む成長。", sourceId: "rollout-zscaler-q3fy26" },
      { label: "ARR", value: "35.25億米ドル（約5,554.0億円）", change: "+25%", interpretation: "売上ではない。Red Canary除外では21%増。", sourceId: "rollout-zscaler-q3fy26" },
    ],
    growthDrivers: [{ title: "Zero Trust SASE・Data・AI Security", evidence: "日本で29対象求人を確認。", japanMeaning: "segment sales、specialist、technical、value、renewalをlocalで同時強化。", sourceIds: ["rollout-zscaler-jobs", "rollout-zscaler-q3fy26"] }],
    risks: [{ title: "GAAP赤字・platform competition", disclosedRisk: "Q3はGAAP営業損失2,964万米ドル（約46.7億円）。", companyResponse: "FCF 1.36億米ドル（約214.3億円）とproduct・GTM投資を継続。", genbaRead: "Japanのproduct attach、sales efficiency、migration・partner deliveryを分けて確認する。", sourceIds: ["rollout-zscaler-q3fy26"] }],
    japanCommitment: { verdict: "東京・大阪office、日本責任者、29対象求人、国内大規模caseを確認。日本売上・headcountは非公開。", summary: "Salesからtechnical・value・renewalまで多職種採用。", signals: [{ year: "2026", title: "日本29対象求人", detail: "30求人中Product Support 1件を対象外。", sourceIds: ["rollout-zscaler-jobs"] }], unknowns: ["Japan revenue・ARR・headcount", "実採用人数・重複requisition", "quota・attainment・報酬"] },
    scenarios: [{ scenario: "基本", title: "platform拡張", body: "SSEからdata・AI securityへland-and-expand。" }, { scenario: "上振れ", title: "AI・agent security標準化", body: "AI利用のvisibilityとpolicyが追加需要を作る。" }, { scenario: "下振れ", title: "bundle・migration競争", body: "競合bundleと移行負荷がsales efficiencyを下げる。" }],
    sourceIds: ["rollout-zscaler-q3fy26", "rollout-zscaler-jobs", "rollout-zscaler-adk"],
  };
  addSources(intelligence, [
    { id: "rollout-zscaler-company", label: "Zscaler company・leadership", url: "https://www.zscaler.com/company/leadership", kind: "企業公式", scope: "会社・leadership", checkedAt: researchedAt },
    { id: "rollout-zscaler-japan", label: "Zscaler 2026年頭所感", url: "https://www.zscaler.com/jp/blogs/company-news/new-year-message-2026", kind: "企業公式", scope: "日本責任者・日本事業", checkedAt: researchedAt },
    { id: "rollout-zscaler-office", label: "Zscaler global offices", url: "https://www.zscaler.com/company/contact", kind: "企業公式", scope: "東京・大阪office", checkedAt: researchedAt },
    { id: "rollout-zscaler-jobs", label: "Zscaler Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/zscaler/jobs?content=true", kind: "企業公式", scope: "日本30求人・対象29件", checkedAt: researchedAt },
    { id: "rollout-zscaler-q3fy26", label: "Zscaler Q3 FY2026 results", url: "https://ir.zscaler.com/news-releases/news-release-details/zscaler-announces-strong-third-quarter-fiscal-2026-results", kind: "法定開示", scope: "売上・ARR・利益・FCF・RPO", checkedAt: researchedAt },
    { id: "rollout-zscaler-adk", label: "Zscaler・ADK", url: "https://www.zscaler.com/jp/press/adk-customer-success", kind: "企業公式", scope: "国内定量case", checkedAt: researchedAt },
    { id: "rollout-zscaler-docomo", label: "Zscaler・NTTドコモ", url: "https://www.zscaler.com/jp/press/ntt-docomo-group-customer-success", kind: "企業公式", scope: "国内大規模case", checkedAt: researchedAt },
    { id: "rollout-b17-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b17-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchOnePassword(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2005", "創業", "human-friendly password managerから創業。", "rollout-1password-company");
  milestone(intelligence, "確認不能", "日本進出は未確認", "日本語siteはあるが、日本法人・office・現行Japan求人・国内named caseを確認できない。", "rollout-1password-jobs");
  applyStandard(intelligence, buildCompactPatch({
    slug: "1password", leaderName: "David Faugno", leaderLabel: "CEO", leaderUrl: "https://1password.com/company/meet-the-team/david-faugno", localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://1password.com/jp/",
    companyId: "rollout-1password-company", jobId: "rollout-1password-jobs", customersId: "rollout-1password-virtru", externalId: "rollout-b17-digital-zero-trust", financeId: "rollout-1password-arr",
    targets: ["CISO・CIO・アイデンティティ責任者", "IT・SaaS管理", "開発基盤・シークレット管理", "セキュリティ運用", "AI・非人間アイデンティティ統制"], competitors: "LastPass、Bitwarden、Dashlane、Okta・Microsoft Entra、CyberArk、SaaS management・device trust point tools、browser・内製",
    feature: "Enterprise Password Manager、Device Trust、SaaS Manager、secrets・agent accessをUnified Access Managementへ統合。", advantage: "SSOでcoverできないapp、unmanaged device・SaaS、人とAI agentのcredentialをuser-friendlyなsecurity layerでつなぐ。", benefit: "password・device・SaaS support、shadow IT、credential exposure、agent accessの可視性とgovernanceを改善できる可能性がある。", evidence: "Virtruは9,930件のdevice issueをself-remediateし、employee remediation timeを50%削減。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：SaaS・BYOD・AI agentのaccess gapがUnified Access Management需要を作る。ARR 4億米ドル超（約630.2億円）・FCF positiveだが、recognized revenue・利益額は非公開。現行Japan求人0。", marketParagraphs: ["password、SSO外app、unmanaged device・SaaS、developer secret、AI agentのcredentialが別々だと、accessとoffboardingの空白が増える。", "Buyerはease of useだけでなくencryption、recovery、device posture、SaaS discovery、agent authorization、audit、data region、enterprise supportを求める。", "Genba分析：一部門でpassword ticket、weak・reused credential、unmanaged app、device remediation、joiner・leaver時間、adoptionを比較する。"],
    cultureHeadline: "remote-firstの歴史とownership・growth・collaborationを掲げるが、現行Japan求人は0件。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "全社方針を将来の日本条件へ転用しない",
    goodFor: ["identityをhuman・device・SaaS・AIへ広げたい", "PLGとEnterpriseをつなぎたい", "securityとuser experienceを両立したい"], cautionFor: ["今すぐ日本専任求人へ応募したい", "国内法人・supportを必須にする", "公開recognized revenueを必須にする"],
    unresolved: [["Japan trigger", "日本語productはあるが求人・officeなし。", "Japan revenue、customer、partner、supportのどの閾値で専任podを作る？"], ["Financials", "ARR 4億米ドル超（約630.2億円）・FCF positive。", "recognized revenue、gross margin、FCF額、NRR、growthは？"], ["Enterprise mix", "180,000 business・1.3B credentialを掲載。", "paid enterprise、ACV、retention、UAM attach、seven-figure accountの構成は？"], ["AI governance", "agent・non-human identityへ拡張。", "authorization、credential retrieval、human approval、audit、revocation、data boundaryは？"], ["Local readiness", "日本語site以外のlocal proofは未確認。", "日本語support、contract、security review、reseller、data region、implementationは？"]],
  }));
  intelligence.marketStatus.growthSummary = "2025年11月にARR 4億米ドル超（約630.2億円）・free-cash-flow positiveを公式発表。recognized revenue、operating・net income、FCF額は非公開。180,000 business、1.3B credential、GRR 90%超。";
  intelligence.facts = [
    { label: "売上規模", value: "recognized revenue非公開", detail: "ARR 4億米ドル超（約630.2億円）は年率契約指標で売上ではない。", sourceIds: ["rollout-1password-arr", "rollout-b17-fx"] },
    { label: "稼ぐ力", value: "FCF positive", detail: "会社発表。金額・margin・継続期間は非公開。", sourceIds: ["rollout-1password-arr"] },
    { label: "事業規模", value: "180,000 business・1.3B credentials", detail: "GRR 90%超。customer・credential数は売上ではない。", sourceIds: ["rollout-1password-arr"] },
  ];
  intelligence.customerProof = [
    { company: "Virtru", products: "1Password Device Trust", outcome: "9,930件のdevice issueをself-remediateし、employee remediation timeを50%削減。", implication: "global vendor case。日本での再現性・単独因果は未検証。", sourceId: "rollout-1password-virtru" },
    { company: "Dovetail", products: "1Password", outcome: "password support ticketを半減し、employee active rate 95%。", implication: "global vendor caseで独立監査なし。", sourceId: "rollout-1password-dovetail" },
  ];
  intelligence.roleLens = { salesMotion: "現行Japan求人なし。将来はEnterprise identity、device・SaaS governance、developer・AI agentをland-and-expandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan revenue、territory、quota、ACV、cycle、partner creditは確認不能。", collaboration: "CISO、CIO、Identity、IT、Developer Platform、Security、Procurementとglobal product・partnerを横断する想定。" };
  markNoDomesticCase(intelligence, "rollout-1password-virtru", "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。Virtru等はglobal vendor case。");
  addSources(intelligence, [
    { id: "rollout-1password-company", label: "1Password company", url: "https://1password.com/company", kind: "企業公式", scope: "会社・product・scale", checkedAt: researchedAt },
    { id: "rollout-1password-jobs", label: "1Password Ashby API", url: "https://api.ashbyhq.com/posting-api/job-board/1password", kind: "企業公式", scope: "現行Japan求人0件", checkedAt: researchedAt },
    { id: "rollout-1password-arr", label: "1Password $400M ARR", url: "https://1password.com/press/2025/nov/1password-strengthens-leadership-amid-growth-milestone", kind: "企業公式", scope: "ARR・FCF・customer scale", checkedAt: researchedAt },
    { id: "rollout-1password-virtru", label: "1Password・Virtru", url: "https://1password.com/customer-stories/virtru", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-1password-dovetail", label: "1Password・Dovetail", url: "https://1password.com/customer-stories/dovetail", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-b17-digital-zero-trust", label: "デジタル庁 標準ガイドライン", url: "https://www.digital.go.jp/resources/standard_guidelines", kind: "公的機関", scope: "zero trust・access control", checkedAt: researchedAt },
    { id: "rollout-b17-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchSixsense(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2013", "創業", "B2B buyer signalをAIでGTMへ接続する会社として創業。", "rollout-sixsense-company");
  milestone(intelligence, "確認不能", "日本進出は未確認", "現行Careerは米国・Indiaのみ。日本法人・office・求人・国内caseを確認できない。", "rollout-sixsense-jobs");
  applyStandard(intelligence, buildCompactPatch({
    slug: "sixsense", leaderName: "Chris Ball", leaderLabel: "CEO", leaderUrl: "https://6sense.com/about-us/team/", localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://6sense.com/about-us/locations/",
    companyId: "rollout-sixsense-company", jobId: "rollout-sixsense-jobs", customersId: "rollout-sixsense-sciencelogic", externalId: "rollout-b17-ipa-dx", financeId: "rollout-sixsense-arr",
    targets: ["CMO・CRO・経営層", "需要創出・ABM", "営業開発・大企業営業", "収益運用・GTM運用", "データ・個人情報・調達"], competitors: "Demandbase、ZoomInfo、Salesforce・Agentforce、HubSpot、Apollo、Clay、Marketing Automation・intent point tools、内製data science",
    feature: "GTM Intelligence Platformでintent・account signal、predictive model、AI agent、seller・campaign actionを同じworkflowへ接続。", advantage: "匿名buyer researchからaccount priority、message、orchestration、seller actionまでをRevenue team共通のsignal layerにする。", benefit: "pipeline quality、meeting、conversion、sales velocity、marketing efficiency、seller research timeを改善できる可能性がある。", evidence: "ScienceLogicは約2カ月で100近いmeeting、1,700万米ドル（約26.8億円）pipeline、4倍のsales velocityを報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：B2B buyerの匿名化とGTM AI化がsignal・workflow統合需要を作る。FY2024 ARR 2億米ドル超（約315.1億円）はhistoricalで、current revenue・profit・FCFは非公開。現行Japan求人0。", marketParagraphs: ["intent、CRM、web、campaign、seller activityが分断すると、buying committeeの優先順位とnext best actionが人依存になる。", "Buyerはblack-box scoreでなくJapan data coverage、identity match、false positive、privacy、CRM adoption、incremental pipeline、AI message controlを求める。", "Genba分析：one segmentで6QA、meeting、pipeline、conversion、velocity、seller hours、media costをholdout・baseline比較する。"],
    cultureHeadline: "Win as One Team、Stay Curious、Own the Outcome等を掲げる。現行Japan求人は0件。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "全社HUB modelを将来の日本条件へ転用しない",
    goodFor: ["MarketingとSalesを同じpipelineへつなぎたい", "intent・AI・workflowを定量評価したい", "新しいGTM operating modelを作りたい"], cautionFor: ["今すぐ日本専任求人へ応募したい", "Japan data coverageのproofを必須にする", "black-box model検証を避けたい"],
    unresolved: [["Japan trigger", "APAC office・Japan求人を確認できない。", "Japan customer、intent coverage、partner、languageのどの条件で進出する？"], ["Financials", "FY2024 ARR 2億米ドル超（約315.1億円）がlatest explicit。", "current ARR、recognized revenue、growth、NRR、profit、FCFは？"], ["Data quality", "1T+ signal/dayとagentic GTMを訴求。", "Japan domain・contact・intent coverage、match accuracy、false positive、opt-outは？"], ["Incrementality", "global caseは大きなpipeline成果を報告。", "holdout、multi-touch attribution、existing demandとの分離、renewal proofは？"], ["Local readiness", "日本法人・office・caseなし。", "日本語product・support、contract、privacy、partner delivery、implementationは？"]],
  }));
  intelligence.marketStatus.growthSummary = "private company。FY2024にARR 2億米ドル超（約315.1億円）、revenue 40%増、customer 30%増を発表。current recognized revenue、operating・net income、FCFは非公開。";
  intelligence.facts = [
    { label: "売上規模", value: "recognized revenue非公開", detail: "FY2024 ARR 2億米ドル超（約315.1億円）はhistorical annualized metric。", sourceIds: ["rollout-sixsense-arr", "rollout-b17-fx"] },
    { label: "FY2024 growth", value: "revenue +40%・customer +30%", detail: "金額・母数・current valueは非公開。", sourceIds: ["rollout-sixsense-arr"] },
    { label: "historical資本", value: "2022年Series E 2億米ドル（約315.1億円）", detail: "当時評価額52億米ドル（約8,193.1億円）。現在の価値・売上ではない。", sourceIds: ["rollout-sixsense-series-e", "rollout-b17-fx"] },
  ];
  intelligence.customerProof = [
    { company: "ScienceLogic", products: "6sense GTM Intelligence", outcome: "約2カ月で100近いmeeting、1,700万米ドル（約26.8億円）pipeline、4倍のsales velocity。", implication: "global vendor-selected case。日本市場のdata・因果・再現性は未検証。", sourceId: "rollout-sixsense-sciencelogic" },
    { company: "Corporate Visions", products: "6sense", outcome: "2週間で既存pipeline 1,280万米ドル（約20.2億円）へ影響、marketing pipeline 268%増。", implication: "attribution methodとcontrol groupは未確認。日本成果ではない。", sourceId: "rollout-sixsense-cv" },
  ];
  intelligence.roleLens = { salesMotion: "現行Japan求人なし。将来はCMO・CRO・RevOpsへintent dataとAI workflowをlandし、Sales・Marketing adoptionへexpandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan territory、quota、ACV、cycle、attainment、renewalは確認不能。", collaboration: "Marketing、Sales、SDR、RevOps、Data、Privacy、Procurementとpartner・CSを横断する想定。" };
  markNoDomesticCase(intelligence, "rollout-sixsense-sciencelogic", "日本企業・日本拠点のnamed caseと定量成果は確認できない。ScienceLogic等はglobal vendor case。");
  addSources(intelligence, [
    { id: "rollout-sixsense-company", label: "6sense company・team", url: "https://6sense.com/about-us/", kind: "企業公式", scope: "会社・product・leadership", checkedAt: researchedAt },
    { id: "rollout-sixsense-jobs", label: "6sense Careers", url: "https://6sense.com/about-us/careers/join-us/", kind: "企業公式", scope: "現行勤務地・Japan求人0件", checkedAt: researchedAt },
    { id: "rollout-sixsense-arr", label: "6sense FY2024 ARR", url: "https://6sense.com/newsroom/6sense-surpasses-200m-arr-driven-by-sales-intelligence-innovation-and-market-share-expansion/", kind: "企業公式", scope: "historical ARR・growth", checkedAt: researchedAt },
    { id: "rollout-sixsense-series-e", label: "6sense Series E", url: "https://6sense.com/newsroom/6sense-announces-200-million-series-e-round-increasing-valuation-to-5-2-billion/", kind: "企業公式", scope: "historical funding・valuation", checkedAt: researchedAt },
    { id: "rollout-sixsense-sciencelogic", label: "6sense・ScienceLogic", url: "https://6sense.com/customer-stories/from-intuition-to-intelligence-how-sciencelogic-achieved-4x-faster-sales-velocity-with-6sense/", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-sixsense-cv", label: "6sense・Corporate Visions", url: "https://6sense.com/customer-stories/", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-b17-ipa-dx", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html", kind: "公的機関", scope: "AI・DX成果測定", checkedAt: researchedAt },
    { id: "rollout-b17-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchAbnormal(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2018", "創業", "behavioral AIでhuman-layer attackを防ぐ会社として創業。", "rollout-abnormal-company");
  milestone(intelligence, "2026", "日本市場開始", "日本RemoteでEnterprise AEを初募集し、日本市場の立ち上げを開始。法人・office設立を意味しない。", "rollout-abnormal-jobs");
  applyStandard(intelligence, buildCompactPatch({
    slug: "abnormal-ai", leaderName: "Evan Reiser", leaderLabel: "Co-founder・CEO", leaderUrl: "https://abnormal.ai/about", localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003",
    companyId: "rollout-abnormal-company", jobId: "rollout-abnormal-jobs", customersId: "rollout-abnormal-rate", externalId: "rollout-b17-ipa-threats", financeId: "rollout-abnormal-series-d",
    targets: ["CISO・メールセキュリティ", "SOC・セキュリティ運用", "アイデンティティ・内部リスク", "AIガバナンス", "Microsoft 365・Google Workspace責任者"], competitors: "Microsoft Defender for Office 365、Proofpoint、Mimecast、Darktrace Email、Material Security、IRONSCALES、SEG・rule・SOC手作業",
    feature: "Behavioral Security Platformでemail、account takeover、identity、insider、AI governance・infiltration riskをbehavior baselineから検知・対応。", advantage: "signature・rule・gateway中心でなく、employee・vendor・identityのnormal behaviorとcontextをAPIで学習し、deviationを判断する。", benefit: "phishing・BEC・vendor fraud、analyst triage、false positive、account takeover、AI・identity riskを改善できる可能性がある。", evidence: "Rateはinbox到達phishingを98%削減し、初月に8,047時間を節約したと報告。vendor caseで日本成果ではない。",
    marketVerdict: "結論：AI生成phishing、BEC、identity・agent riskがbehavior-based security需要を作る。2024年時点ARR 2億米ドル（約315.1億円）、Series D 2.5億米ドル・評価額51億米ドル。recognized revenue・profitは非公開。日本founding AE 1件。", marketParagraphs: ["social engineering、vendor fraud、compromised identityは正規mail・sessionに見え、rule・URL・attachmentだけでは捉えにくい。", "Buyerはcatch rateのclaimだけでなくfalse positive、time-to-detect・remediate、API permission、autonomous action、Microsoft coexistence、Japan language・supportを求める。", "Genba分析：historical mailでmiss・false positive、triage hours、user report、remediation、API permission、deployment、TCOをbaseline比較する。"],
    cultureHeadline: "Velocity、Ownership、Intellectual Honesty、Customer Obsession、Excellenceを掲げるAI-native・高強度組織。Japan AEはRemote。", classification: "フルリモート", displayLabel: "日本Remote・市場立ち上げ", officeDays: "0日を示す明記はなし", remoteOnly: "求人locationはRemote - Japan", flexibility: "出張・顧客活動の頻度は非公開",
    goodFor: ["Japan security marketを0→1で作りたい", "CISOへAI-native categoryを売りたい", "emailからidentity・AIへexpandしたい"], cautionFor: ["成熟した日本組織を必須にする", "日本語要件・supportを求人から推測したくない", "完成したplaybookだけで動きたい"],
    unresolved: [["Territory", "foundational Japan AEが3,000 mailbox超企業を担当。", "named account、installed base、new・expand、partner、territory sizeは？"], ["Compensation", "数値報酬は非公開。", "base、OTE、pay mix、quota、equity、ramp、attainmentは？"], ["Japan support", "法人・office・leader・国内caseは未確認。", "employment entity、SE・CS・IR、language、support hours、data regionは？"], ["Product proof", "platformをemailからidentity・AIへ急拡張。", "Japan languageのcatch・false positive、cross-product attach、autonomous action、rollbackは？"], ["Microsoft motion", "API-native・behavioral approachを訴求。", "Defenderとのcoexistence、replacement、pricing、PoV、partner motionは？"]],
  }));
  intelligence.fitTags = ["Japan Entry", "AI-Native Human Behavior Security Platform", "APAC", "Enterprise", "Category Creation"];
  intelligence.marketStatus.growthSummary = "2024年Series D時点でARR 2億米ドル（約315.1億円）、2.5億米ドル（約393.9億円）を評価額51億米ドル（約8,035.6億円）で調達。2026年7月時点4,500 customers・Fortune 500の25%超。recognized revenue・profit・FCFは非公開。";
  intelligence.facts = [
    { label: "売上規模", value: "recognized revenue非公開", detail: "2024年時点ARR 2億米ドル（約315.1億円）。ARRは売上ではない。", sourceIds: ["rollout-abnormal-series-d", "rollout-b17-fx"] },
    { label: "稼ぐ力", value: "非公開", detail: "operating・net income、EBITDA、FCFを確認できない。", sourceIds: ["rollout-abnormal-series-d"] },
    { label: "current scale", value: "4,500 customers・Fortune 500の25%超", detail: "2026年7月会社発表。customer countは売上・retentionではない。", sourceIds: ["rollout-abnormal-platform"] },
  ];
  intelligence.customerProof = [
    { company: "Rate", products: "Abnormal Behavioral Security", outcome: "inbox到達phishingを98%削減し、初月に8,047 employee・VIP hoursを節約。", implication: "vendor-selected case。日本語環境のcatch・false positive・単独因果は未検証。", sourceId: "rollout-abnormal-rate" },
    { company: "Mercury", products: "Abnormal Security", outcome: "analyst工数を月90時間削減したと報告。", implication: "global vendor caseで独立監査なし。", sourceId: "rollout-abnormal-mercury" },
  ];
  intelligence.roleLens = { salesMotion: "founding Japan AEがnew logoとexpansion、CISO relationship、territory、new ARR quotaをfull-cycleで構築。", compensation: "日本の給与、OTE、pay mix、equityは非公開。", quota: "new ARR quotaの存在は明記。額、attainment、ACV、cycle、account数、rampは非公開。", collaboration: "CISO、Email、SOC、Identity、AI Governance、IT、Procurementとglobal SE、CS、Product、Leadershipを横断。" };
  markNoDomesticCase(intelligence, "rollout-abnormal-rate", "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。Rate等はglobal vendor case。");
  addSources(intelligence, [
    { id: "rollout-abnormal-company", label: "Abnormal AI company", url: "https://abnormal.ai/about", kind: "企業公式", scope: "会社・mission・culture", checkedAt: researchedAt },
    { id: "rollout-abnormal-jobs", label: "Abnormal AI Japan AE", url: "https://abnormal.ai/careers/jobs/7820227003?gh_jid=7820227003", kind: "企業公式", scope: "現行日本求人1件", checkedAt: researchedAt },
    { id: "rollout-abnormal-series-d", label: "Abnormal AI Series D", url: "https://abnormal.ai/blog/building-ai-fight-ai", kind: "企業公式", scope: "historical ARR・funding・valuation", checkedAt: researchedAt },
    { id: "rollout-abnormal-platform", label: "Abnormal Behavioral Security expansion", url: "https://abnormal.ai/newsroom/press-releases/abnormal-extends-behavioral-security-platform", kind: "企業公式", scope: "current customer scale・product", checkedAt: researchedAt },
    { id: "rollout-abnormal-rate", label: "Abnormal AI・Rate", url: "https://abnormal.ai/customers/stories/rate", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-abnormal-mercury", label: "Abnormal AI・Mercury", url: "https://abnormal.ai/customers", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-b17-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI risk", checkedAt: researchedAt },
    { id: "rollout-b17-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

function patchAddepar(intelligence: CompanyPublicIntelligence) {
  milestone(intelligence, "2009", "創業", "複雑なinvestment dataを透明化するplatformとして創業。", "rollout-addepar-company");
  milestone(intelligence, "2026", "Singapore APAC hub", "Singapore officeをAPAC regional hubとして開設。Japan法人・officeではない。", "rollout-addepar-apac");
  applyStandard(intelligence, buildCompactPatch({
    slug: "addepar", leaderName: "Eric Poirier", leaderLabel: "CEO", leaderUrl: "https://addepar.com/about/leadership", localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://addepar.com/connect-with-us/",
    companyId: "rollout-addepar-company", jobId: "rollout-addepar-jobs", customersId: "rollout-addepar-we", externalId: "rollout-addepar-fsa", financeId: "rollout-addepar-growth",
    targets: ["ファミリーオフィス", "ウェルスマネージャー・RIA", "プライベートバンク", "資産保有者・オルタナティブ投資", "投資運用・データ・技術部門"], competitors: "SS&C Advent、Black Diamond、Envestnet、private bank・custodian platform、portfolio accounting、data warehouse・Excel・内製",
    feature: "portfolio data、complex ownership、alternative asset、analysis、reporting、Data Exchange、Addison AIをinvestment data modelで統合。", advantage: "複数custodian・currency・private assetをvalidated data layerへ正規化し、analysis・report・workflowへ再利用する。", benefit: "data collection、reconciliation、report lead time、error、operations headcount、advisor capacityを改善できる可能性がある。", evidence: "WE Family Officesはreport作成時間94%削減、transaction 2倍でもoperations headcount増加0%と報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：private asset・cross-border wealthの複雑化と金融dataの説明責任がspecialized platform需要を作る。platform処理資産9兆米ドル超（約1,418.0兆円相当）・1,500 clientsは売上ではない。recognized revenue・profit非公開。Singapore hubはあるが現行Japan求人0。", marketParagraphs: ["bank・fund・private company・real assetのstatement、ownership、valuationが分散すると、analystがportal・PDF・Excelを手作業で突合する。", "Buyerはdashboardよりdata accuracy、custodian connectivity、entitlement、audit、security、local convention、implementation、3年TCOを求める。", "Genba分析：一つのclient bookでdata collection、manual transaction、reconciliation error、report lead time、advisor capacityをbaseline比較する。"],
    cultureHeadline: "client-centric、data rigor、long-term platform buildingを重視。現行Japan求人は0件。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Singaporeの条件を将来の日本求人へ転用しない",
    goodFor: ["wealth・investment dataを深めたい", "financial operationsとAIをつなぎたい", "APAC market entryを長期観測したい"], cautionFor: ["今すぐ日本専任求人へ応募したい", "国内custodian接続を既に必須とする", "公開recognized revenueを必須にする"],
    unresolved: [["Japan trigger", "Singapore hubはあるがJapan求人・officeなし。", "lighthouse client、custodian feed、partnerのどの条件でJapan podを作る？"], ["Financials", "asset・client scaleとSeries Gを開示。", "recognized revenue、ARR、growth、profit、FCF、retentionは？"], ["Data connectivity", "multi-custodian dataが中核。", "日本の銀行・証券・信託・fund administratorへのproduction接続は？"], ["Local control", "financial-grade dataを扱う。", "data residency、outsourcing審査、BCP、audit、Japanese support・contractは？"], ["TAM・economics", "specialized wealth segmentへenterprise sale。", "国内TAM、ACV、implementation effort、sales cycle、support costは？"]],
  }));
  intelligence.marketStatus.growthSummary = "9兆米ドル超assets、1,500 clients、60カ国超はplatform処理規模で売上ではない。2025年Series G 2.3億米ドル（約362.4億円）、当時評価額32.5億米ドル（約5,120.7億円）。recognized revenue・profit・FCFは非公開。";
  intelligence.facts = [
    { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-addepar-growth"] },
    { label: "platform規模", value: "処理資産9兆米ドル超（約1,418.0兆円相当）・1,500 clients", detail: "60カ国超。asset processedはAddeparの売上・AUMではない。", sourceIds: ["rollout-addepar-company", "rollout-b17-fx"] },
    { label: "historical資本", value: "2025年2.3億米ドル（約362.4億円）", detail: "当時評価額32.5億米ドル。現在価値・売上ではない。", sourceIds: ["rollout-addepar-growth", "rollout-b17-fx"] },
  ];
  intelligence.customerProof = [
    { company: "WE Family Offices", products: "Addepar Platform", outcome: "report作成時間94%削減、transaction 2倍でもoperations headcount増加0%。", implication: "global vendor-selected case。日本のdata・workflowでの再現性は未検証。", sourceId: "rollout-addepar-we" },
    { company: "Papo Group", products: "Addepar Platform", outcome: "manual taskへ使っていた時間の75%を取り戻したと報告。", implication: "global vendor caseで独立監査なし。", sourceId: "rollout-addepar-papo" },
  ];
  intelligence.roleLens = { salesMotion: "現行Japan求人なし。将来はfamily office・wealth manager・private bankへdata accuracyとoperating leverageから入り、implementation・client workflowへexpandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainment、renewalは確認不能。", collaboration: "COO、CIO、CTO、Investment、Operations、Advisor、Data、Security、Compliance、ProcurementとData Operations・Implementationを横断する想定。" };
  markNoDomesticCase(intelligence, "rollout-addepar-we", "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。WE Family Offices等はglobal vendor case。");
  addSources(intelligence, [
    { id: "rollout-addepar-company", label: "Addepar company", url: "https://addepar.com/", kind: "企業公式", scope: "会社・platform・scale", checkedAt: researchedAt },
    { id: "rollout-addepar-jobs", label: "Addepar Greenhouse", url: "https://job-boards.greenhouse.io/addepar1", kind: "企業公式", scope: "現行Japan求人0件", checkedAt: researchedAt },
    { id: "rollout-addepar-apac", label: "Addepar locations", url: "https://addepar.com/connect-with-us/", kind: "企業公式", scope: "Singapore APAC hub・Japan拠点なし", checkedAt: researchedAt },
    { id: "rollout-addepar-growth", label: "Addepar growth・funding", url: "https://addepar.com/newsroom/", kind: "企業公式", scope: "platform scale・historical funding", checkedAt: researchedAt },
    { id: "rollout-addepar-we", label: "Addepar・WE Family Offices", url: "https://addepar.com/clients/", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-addepar-papo", label: "Addepar・Papo Group", url: "https://addepar.com/clients/", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
    { id: "rollout-addepar-fsa", label: "金融庁 資産運用立国", url: "https://www.fsa.go.jp/policy/pjlamc/20250627.html", kind: "公的機関", scope: "資産運用業高度化", checkedAt: researchedAt },
    { id: "rollout-b17-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt },
  ]);
  refresh(intelligence);
}

export function applyCompanyPageRolloutBatchSeventeen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.zscaler) patchZscaler(records.zscaler);
  if (records["1password"]) patchOnePassword(records["1password"]);
  if (records.sixsense) patchSixsense(records.sixsense);
  if (records["abnormal-ai"]) patchAbnormal(records["abnormal-ai"]);
  if (records.addepar) patchAddepar(records.addepar);
}
