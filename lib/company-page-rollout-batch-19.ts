import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

type Config = {
  slug: string;
  leaderName: string;
  leaderLabel: string;
  leaderUrl: string;
  localName: string;
  localLabel: string;
  localUrl: string;
  companyId: string;
  jobsId: string;
  customerId: string;
  externalId: string;
  financeId: string;
  founded: string;
  foundedDetail: string;
  localStatus: string;
  localDetail: string;
  targets: string[];
  competitors: string;
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  domesticStatus: string;
  domesticDetail: string;
  marketVerdict: string;
  marketParagraphs: string[];
  cultureHeadline: string;
  classification: "フルリモート" | "ハイブリッド" | "出社中心" | "未確認";
  displayLabel: string;
  officeDays: string;
  remoteOnly: string;
  flexibility: string;
  goodFor: string[];
  cautionFor: string[];
  unresolved: string[][];
  growthSummary: string;
  facts: CompanyPublicIntelligence["facts"];
  customerProof: CompanyPublicIntelligence["customerProof"];
  roleLens: CompanyPublicIntelligence["roleLens"];
  sources: ResearchSource[];
};

function addSources(intelligence: CompanyPublicIntelligence, sources: ResearchSource[]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function milestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function patch(intelligence: CompanyPublicIntelligence, config: Config) {
  milestone(intelligence, config.founded, "創業", config.foundedDetail, config.companyId);
  milestone(intelligence, config.localStatus, "日本市場の現状", config.localDetail, config.jobsId);
  applyStandard(intelligence, buildCompactPatch({
    slug: config.slug,
    leaderName: config.leaderName,
    leaderLabel: config.leaderLabel,
    leaderUrl: config.leaderUrl,
    localName: config.localName,
    localLabel: config.localLabel,
    localUrl: config.localUrl,
    companyId: config.companyId,
    jobId: config.jobsId,
    customersId: config.customerId,
    externalId: config.externalId,
    financeId: config.financeId,
    targets: config.targets,
    competitors: config.competitors,
    feature: config.feature,
    advantage: config.advantage,
    benefit: config.benefit,
    evidence: config.evidence,
    marketVerdict: config.marketVerdict,
    marketParagraphs: config.marketParagraphs,
    cultureHeadline: config.cultureHeadline,
    classification: config.classification,
    displayLabel: config.displayLabel,
    officeDays: config.officeDays,
    remoteOnly: config.remoteOnly,
    flexibility: config.flexibility,
    goodFor: config.goodFor,
    cautionFor: config.cautionFor,
    unresolved: config.unresolved,
  }));
  intelligence.marketStatus.growthSummary = config.growthSummary;
  intelligence.facts = config.facts;
  intelligence.customerProof = config.customerProof;
  intelligence.roleLens = config.roleLens;
  if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: config.domesticStatus, need: config.domesticDetail, sourceId: config.customerId }];
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience[1] = { label: "国内顧客成果", value: config.domesticStatus, detail: config.domesticDetail, sourceId: config.customerId };
  addSources(intelligence, config.sources);
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

const fx: ResearchSource = { id: "rollout-b19-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt };
const ipaThreats: ResearchSource = { id: "rollout-b19-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI利用risk", checkedAt: researchedAt };
const metiAi: ResearchSource = { id: "rollout-b19-meti-ai", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance・透明性・説明責任", checkedAt: researchedAt };
const ppc: ResearchSource = { id: "rollout-b19-ppc", label: "個人情報保護委員会 ガイドライン通則編", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "個人dataの利用目的・安全管理・委託先監督", checkedAt: researchedAt };
const fsa: ResearchSource = { id: "rollout-b19-fsa", label: "金融庁 暗号資産・電子決済手段関係", url: "https://www.fsa.go.jp/policy/virtual_currency02/index.html", kind: "公的機関", scope: "暗号資産・stablecoinの制度・監督情報", checkedAt: researchedAt };

function patchFireblocks(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "fireblocks", leaderName: "Michael Shaulov", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.fireblocks.com/company",
    localName: "東京office・日本team", localLabel: "日本体制", localUrl: "https://www.fireblocks.com/blog/fireblocks-launches-japan-office-support-institutional-adoption-blockchain",
    companyId: "rollout-fireblocks-company", jobsId: "rollout-fireblocks-jobs", customerId: "rollout-fireblocks-mitsui", externalId: fsa.id, financeId: "rollout-fireblocks-scale",
    founded: "2018", foundedDetail: "Michael Shaulov、Idan Ofrat、Pavel Berengoltzがdigital asset transferのsecurity infrastructureとして創業。",
    localStatus: "2024–2026", localDetail: "2024年12月に東京officeを開設。2026年8月17日時点の公式Greenhouseは日本求人1件で、bilingual Project ManagerをHybrid・週3日出社で募集。旧BDR・Sales Directorは終了。",
    targets: ["銀行・証券・資産運用", "暗号資産交換・カストディ・取引", "決済・ステーブルコイン・FinTech", "企業財務・トークン化", "セキュリティ・リスク・コンプライアンス・開発"],
    competitors: "BitGo、Copper、Anchorage Digital、Coinbase Institutional、Ripple・BVNK、HSM・MPC・custodyの内製、bank・exchangeの既存基盤",
    feature: "MPC wallet、policy engine、treasury、payments・stablecoin、tokenization、network、Off Exchangeを同じdigital asset infrastructureで提供。",
    advantage: "keyを単一点へ置かず、approval・workflow・counterparty network・APIを統合し、複数chain・providerをcustom開発だけに頼らず運用する。",
    benefit: "wallet・exchange onboarding、settlement、approval、reconciliation、integration、security incident、time-to-launchを改善できる可能性がある。",
    evidence: "Mitsui Digital Commoditiesはcustom chain開発なしでmulti-chainへ進み、Zipangcoinのgovernanceとexchange onboardingを支えた。vendor-selected caseで単独因果は未監査。",
    domesticStatus: "Mitsui Digital Commodities", domesticDetail: "Zipangcoinの3 commodity token、multi-chain、governance、exchange onboardingを公式caseで確認。発行上限390億円はtoken program規模でFireblocks売上ではない。",
    marketVerdict: "結論：stablecoin・tokenized asset・institutional digital assetは制度・security・operationsを同時に満たす必要がある。Fireblocksは東京office、2,400超の機関、10兆米ドル超（約1,575兆6,000億円超）のtransfer実績を持つが、recognized revenue・Japan売上・数値報酬は非公開。",
    marketParagraphs: ["制度整備と企業利用が進むほど、walletを作るだけでなくkey、approval、counterparty、chain、reconciliation、audit、incident responseを運用可能にする必要がある。", "BuyerはMPCという方式名より、責任分界、policy、recovery、custody・license、data・key location、partner、24/7 support、3年TCOを求める。", "Genba分析：限定asset・workflowでonboarding time、approval steps、settlement、failure、reconciliation、security review、operations hoursをbaseline比較する。"],
    cultureHeadline: "現行日本求人はHybrid・週3日出社、日本語・英語fluent。globalの高成長・security missionと、regulated customer deliveryの厳密さを両立する。", classification: "ハイブリッド", displayLabel: "東京office・Hybrid", officeDays: "週3日出社", remoteOnly: "full remoteではない", flexibility: "顧客・project要件による移動や時間外対応は求人で具体頻度を確認できない",
    goodFor: ["FinTech・cryptoの本番deliveryを作りたい", "API・cloud・securityと顧客運用を横断したい", "日本teamの拡張局面に入りたい"], cautionFor: ["pure remoteを必須にする", "数値報酬の公開を必須にする", "規制・securityの複雑性を避けたい"],
    unresolved: [["Delivery scope", "Project Managerは複雑な顧客導入をend-to-endで所有。", "担当社数、平均project期間・規模、success KPI、escalationとSales・CS・Supportの境界は？"], ["Compensation", "日本求人は数値給与・bonus・equityを非公開。", "base、bonus target、equity、評価指標、昇進、直近の達成分布は？"], ["Regulatory responsibility", "Fireblocksはtechnology infrastructureで、顧客の規制適合を代行しない。", "日本のlicense・custody・AML・stablecoin・key責任を契約と設計でどう分ける？"], ["Japan team", "東京officeはあるがcurrent country leader・人数は未確認。", "JapanのSales、SE、Services、Support、Product、partnerの人数とdecision rightsは？"], ["Reliability", "10兆米ドル超（約1,575兆6,000億円超）のtransfer規模を公表。", "Japan workloadのSLA、incident、recovery drill、insurance、key loss・vendor exitをどう検証する？"]],
    growthSummary: "recognized revenue、ARR、operating・net income、FCFは非公開。公式求人は2,400超の機関、10兆米ドル超のtransfer、10億米ドル超（約1,575.6億円超）の資金調達を掲載。資金調達は売上ではない。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-fireblocks-scale"] },
      { label: "利用規模", value: "2,400超の機関・10兆米ドル超（約1,575兆6,000億円超）transfer", detail: "公式求人・company掲載値。customer countとtransaction volumeで、売上ではない。", sourceIds: ["rollout-fireblocks-scale"] },
      { label: "資本", value: "10億米ドル超（約1,575.6億円超）", detail: "累計調達。recognized revenue・valuationではない。", sourceIds: ["rollout-fireblocks-scale", fx.id] },
      { label: "日本採用", value: "Project Manager 1件", detail: "Hybrid週3日、日本語・英語fluent。数値給与は非公開。", sourceIds: ["rollout-fireblocks-jobs"] },
    ],
    customerProof: [
      { company: "Mitsui Digital Commodities", products: "Fireblocks Network・Wallet Infrastructure", outcome: "custom blockchain開発なしでmulti-chainに対応し、3 commodity tokenの運用とexchange onboardingを支援。", implication: "vendor-selected case。390億円はZPG発行上限でFireblocks revenue・ROIではない。", sourceId: "rollout-fireblocks-mitsui" },
      { company: "B2C2", products: "Fireblocks Digital Asset Infrastructure", outcome: "2020年以来、client asset数十億米ドル規模でoperational security incident 0と報告。", implication: "SBI-backed global顧客のvendor caseで、日本国内deploymentの成果とは断定しない。", sourceId: "rollout-fireblocks-b2c2" },
    ],
    roleLens: { salesMotion: "現行日本求人はProject Manager。Salesがcloseした後、顧客・Product・Engineering・Supportを束ねて本番稼働と価値実現を作るdelivery motion。", compensation: "給与、bonus、equity、OTE該当有無は数値非公開。", quota: "Sales quotaは該当しない可能性が高いが、delivery KPI、担当社数、renewal・expansion creditは非公開。", collaboration: "銀行・FinTechのBusiness、Engineering、Security、Risk、Compliance、Legal、Procurementと社内Sales、Product、Supportを横断。" },
    sources: [
      { id: "rollout-fireblocks-company", label: "Fireblocks Company", url: "https://www.fireblocks.com/company", kind: "企業公式", scope: "会社・leadership・product・規模", checkedAt: researchedAt },
      { id: "rollout-fireblocks-scale", label: "Fireblocks Careers・Current Scale", url: "https://www.fireblocks.com/careers/", kind: "企業公式", scope: "顧客・transfer・funding規模", checkedAt: researchedAt },
      { id: "rollout-fireblocks-jobs", label: "Fireblocks Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/fireblocks/jobs?content=true", kind: "企業公式", scope: "現行69求人・Japan 1件・終了反証", checkedAt: researchedAt },
      { id: "rollout-fireblocks-mitsui", label: "Fireblocks Mitsui Case", url: "https://www.fireblocks.com/customers/mitsui", kind: "企業公式", scope: "国内customer proof", checkedAt: researchedAt },
      { id: "rollout-fireblocks-b2c2", label: "Fireblocks B2C2 Case", url: "https://www.fireblocks.com/customers/b2c2", kind: "企業公式", scope: "SBI-backed global case", checkedAt: researchedAt },
      fsa, fx,
    ],
  });
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.filter((item) => item.label !== "Japan sales採用");
  milestone(intelligence, "2024", "日本進出・東京office開設", "2024年12月に東京officeを開設。2026年はbilingual Project Managerを公式募集。", "rollout-fireblocks-jobs");
  intelligence.companyStats.japanOffice = { value: "東京office", detail: "2024年12月に日本でのregional office開設を公式発表。", sourceId: "rollout-fireblocks-company" };
  intelligence.companyStats.japanSince = { value: "2024年", detail: "東京officeを開設し、国内顧客・partner supportを強化。", sourceId: "rollout-fireblocks-company" };
  intelligence.salesAppeal = {
    intro: "digital assetの新規事業を、security・規制・顧客deliveryまで本番運用へ落とす経験を積める。",
    points: [
      { title: "顧客導入を本番成果へ変える", detail: "scope、schedule、risk、API・cloud、顧客・社内stakeholderを束ね、複雑な導入を稼働まで進める。", sourceIds: ["rollout-fireblocks-jobs"] },
      { title: "東京officeの拡張局面に入る", detail: "2024年に東京officeを開設し、現行求人はProject Manager。旧BDR・Sales Directorを現行職として扱わない。", sourceIds: ["rollout-fireblocks-company", "rollout-fireblocks-jobs"] },
      { title: "金融・security・規制を横断する", detail: "stablecoin、tokenization、paymentsの成長機会と、key、approval、custody、AML、incident responsibilityを同時に扱う。", sourceIds: [fsa.id, "rollout-fireblocks-company"] },
    ],
  };
  intelligence.interviewPrep = {
    intro: "global scaleと、自分が担当する日本projectのscope・support・評価条件を分けて確認する。",
    questions: [
      { question: "日本のProject Managerが担当する顧客数、project期間・規模、稼働・価値実現KPIは。", why: "delivery負荷と成功条件を見る。", sourceIds: ["rollout-fireblocks-jobs"] },
      { question: "Sales、SE、Product、Engineering、Support、Customer SuccessとのRACIとescalationは。", why: "複雑案件の責任境界を見る。", sourceIds: ["rollout-fireblocks-jobs"] },
      { question: "直近の日本導入で、security reviewからproductionまで何が最長のbottleneckだったか。", why: "local product-market fitと実装難度を見る。", sourceIds: ["rollout-fireblocks-mitsui", fsa.id] },
      { question: "給与、bonus、equity、評価、昇進、標準時間外・travelの実績は。", why: "求人で非公開の雇用条件を確認する。", sourceIds: ["rollout-fireblocks-jobs"] },
    ],
  };
  intelligence.fitTags = ["Project Management", "Customer Delivery", "Digital Assets", "FinTech", "API・Cloud", "Regulated", "Hybrid", "Tokyo"];
}

function patchGong(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "gong", leaderName: "Amit Bendov", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.gong.io/about",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.gong.io/careers",
    companyId: "rollout-gong-company", jobsId: "rollout-gong-jobs", customerId: "rollout-gong-customers", externalId: ppc.id, financeId: "rollout-gong-arr",
    founded: "2015", foundedDetail: "Amit BendovとEilon Reshefがcustomer conversationを収益dataへ変えるRevenue Intelligenceとして創業。",
    localStatus: "2026", localDetail: "公式Greenhouseの現行98求人にJapan・Tokyoは0件。Singaporeは公式officeだが、日本法人・office・責任者・国内named caseは確認不能。",
    targets: ["CRO・営業責任者", "レベニューオペレーション・営業企画", "大企業営業・営業管理職", "営業支援・人材育成", "カスタマーサクセス・IT・セキュリティ"],
    competitors: "Salesforce、Microsoft、Clari、ZoomInfo Chorus、Salesloft、Outreach、Avoma、CRM・recording・BI・AI assistantの組合せ",
    feature: "Revenue Graphを基盤にconversation、account・deal、Engage、Forecast、Enable、AI agentをRevenue AI OSで統合。",
    advantage: "recording単体ではなく、buyer interaction、pipeline、rep action、forecast、coachingを共通のrevenue contextでつなぐ。",
    benefit: "reply、meeting、ramp、forecast accuracy、win rate、cycle、manager coaching、CRM hygieneを改善できる可能性がある。",
    evidence: "Anthropicはproductivity 64%増・ramp 46%短縮、Canvaはrevenue 6%増・selling capacity 60%増と報告。global vendor-selected caseで日本成果ではない。",
    domesticStatus: "確認不能", domesticDetail: "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。global caseと日本語transcription対応を国内実績へ転用しない。",
    marketVerdict: "結論：AIでsales activityを増やすだけでなく、management・forecast・enablementを同じevidenceで改善する需要がある。GongはARR 5億米ドル超（約787.8億円）・5,000顧客超だが、日本求人・拠点・国内caseは未確認。",
    marketParagraphs: ["CRMだけではmeetingで何が起き、buyerが何を求め、どのactionがdealを進めたかを構造化しにくい。", "Buyerはrecording数より、consent、transcription・Japanese accuracy、CRM sync、AI reasoning、manager adoption、forecast lift、seat・usage TCOを求める。", "Genba分析：一つのsegmentでramp、activity quality、reply、meeting、stage conversion、cycle、forecast error、manager hoursをbaseline比較する。"],
    cultureHeadline: "公式careersはcustomer focus、challenge、collaborationを重視。現行Japan求人0件で、日本固有の勤務条件・報酬は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Singapore・US等の条件を将来の日本求人へ転用しない",
    goodFor: ["Revenue AIとsales transformationを深めたい", "data・coaching・forecastを一体で売りたい", "将来のJapan entryを長期観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "国内named referenceを必須にする", "recognized revenue・profit開示を必須にする"],
    unresolved: [["Japan trigger", "Singapore officeと5,000超の顧客はあるがJapan求人0。", "日本paid cohort、language quality、partner、ARRのどの条件で専任podを作る？"], ["Financials", "ARR 5億米ドル超（約787.8億円）・直近quarter成長55%超。", "recognized revenue、gross margin、profit、FCF、NRR、customer concentrationは？"], ["Localization", "Japanese transcriptionを提供するがfeature差があり得る。", "UI、AI summary・agent、support、data residency、contract、roadmapの日本対応は？"], ["Governance", "customer conversationを記録・分析。", "consent、access、retention、training use、redaction、employee monitoringをどう統制する？"], ["Economics", "複数product利用50%を公表。", "ACV、module adoption、seat・usage cost、implementation、manager adoption、3年TCOは？"]],
    growthSummary: "2026年5月にARR 5億米ドル超（約787.8億円）、直近quarterのYoY growth 55%超、5,000顧客超、50%がmulti-productと発表。ARRは売上ではなく、recognized revenue・profit・FCFは非公開。",
    facts: [
      { label: "事業固有指標", value: "ARR 5億米ドル超（約787.8億円）", detail: "2026年5月発表。ARRはrecognized revenueではない。", sourceIds: ["rollout-gong-arr", fx.id] },
      { label: "成長", value: "直近quarter YoY 55%超", detail: "会社発表のARR growth。10四半期連続加速との説明で、recognized revenue growthではない。", sourceIds: ["rollout-gong-arr"] },
      { label: "顧客", value: "5,000顧客超・50% multi-product", detail: "global customer scale。日本顧客数・paid seats・retentionは非公開。", sourceIds: ["rollout-gong-arr"] },
      { label: "日本採用", value: "0件", detail: "公式Greenhouseの現行98求人にJapan・Tokyoなし。", sourceIds: ["rollout-gong-jobs"] },
    ],
    customerProof: [
      { company: "Anthropic", products: "Gong Revenue AI", outcome: "productivity 64%増、ramp 46%短縮と報告。", implication: "global vendor-selected case。日本のsales processでの再現性・単独因果は未検証。", sourceId: "rollout-gong-customers" },
      { company: "Canva", products: "Gong Revenue AI Platform", outcome: "revenue 6%増、selling capacity 60%増と報告。", implication: "global case。enablement・process変更を含み保証値ではない。", sourceId: "rollout-gong-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はconversation intelligenceでlandし、Engage、Forecast、Enable、multi-product Revenue AI OSへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CRO、Sales、RevOps、Enablement、CS、IT、Security、Legal、Procurementを横断する想定。" },
    sources: [
      { id: "rollout-gong-company", label: "Gong About", url: "https://www.gong.io/about", kind: "企業公式", scope: "会社・leadership・office・platform", checkedAt: researchedAt },
      { id: "rollout-gong-arr", label: "Gong ARR 5億米ドル発表", url: "https://www.gong.io/press/gong-growth-accelerates-past-55-yoy-arr-tops-500m", kind: "企業公式", scope: "ARR・growth・customer・multi-product", checkedAt: researchedAt },
      { id: "rollout-gong-jobs", label: "Gong Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/gongio/jobs?content=true", kind: "企業公式", scope: "現行98求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-gong-customers", label: "Gong Customer Stories", url: "https://www.gong.io/customers", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ppc, fx,
    ],
  });
}

function patchHalcyon(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "halcyon", leaderName: "Jon Miller", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.halcyon.ai/company",
    localName: "露木 正樹", localLabel: "Japan Country Manager", localUrl: "https://www.halcyon.ai/jp/press/halcyon-japan-launch-press-release",
    companyId: "rollout-halcyon-company", jobsId: "rollout-halcyon-jobs", customerId: "rollout-halcyon-japan", externalId: ipaThreats.id, financeId: "rollout-halcyon-funding",
    founded: "2021", foundedDetail: "Jon Millerらがransomware専用のendpoint resilience platformとして創業。",
    localStatus: "2026", localDetail: "Halcyon Japan株式会社を東京都渋谷区に設立し、露木正樹氏をCountry Managerとして日本語support・partner motionを開始。公式Greenhouseの現行10求人にJapan 0件で、旧Commercial AEは終了。",
    targets: ["CISO・CIO・情報システム責任者", "エンドポイントセキュリティ・SOC・インシデント対応", "サイバー復旧・バックアップ・BCP", "リスク・監査・経営管理", "MSSP・SI・セキュリティパートナー"],
    competitors: "CrowdStrike、Microsoft Defender、SentinelOne、Sophos、Palo Alto、EDR・backup・incident responseの組合せ、native security、既存endpoint stack",
    feature: "endpoint prevention、ransomware rollback・decryption向けkey material capture、data exfiltration protection、Ransomware Rollback・ROC・warrantyを組み合わせる。",
    advantage: "generic EDR検知だけでなく、ransomwareの実行阻止、key捕捉、decrypt・recovery、exfiltration、responseを専用architectureで扱う。",
    benefit: "business interruption、ransom payment、restore time、data loss、incident handling、recovery uncertaintyを減らせる可能性がある。",
    evidence: "日本法人launchはCCI Group・北國銀行の評価コメントを掲載するが定量成果なし。ROCは2026年5月に悪性audio偽装fileを実行前に阻止し被害0と報告。vendor evidenceで独立監査なし。",
    domesticStatus: "CCI Group・北國銀行", domesticDetail: "日本法人launchでcomplementary defenseへの評価コメントを確認。導入範囲・削減率・ROIは非公開で、named定量成果ではない。",
    marketVerdict: "結論：IPAはransomwareを11年連続で組織脅威1位とし、経営はbackup保有でなく事業再開まで説明する必要がある。Halcyonは日本法人・日本語supportを開始したが、現行求人・売上・国内定量ROIは未確認。",
    marketParagraphs: ["ransomwareは暗号化だけでなくcredential、data exfiltration、backup破壊、業務停止を組み合わせ、EDR検知とbackupだけではclean recoveryの確実性が残る。", "Buyerはblock rateより、coexistence、false positive、key capture、decrypt・rollback、incident SLA、warranty、exercise、partner delivery、3年TCOを求める。", "Genba分析：代表endpoint群でattack simulation、detect・block、exfiltration、restore・decrypt time、false positive、operations hours、business RTOをbaseline比較する。"],
    cultureHeadline: "mission、urgency、technical depthを重視するremote-native company。ただし現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "日本法人あり・現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "global remote方針や旧AE条件を将来の日本求人へ転用しない",
    goodFor: ["ransomware resilienceを専門にしたい", "endpoint・IR・recoveryを横断したい", "partner-led Japan expansionを観測したい"], cautionFor: ["今すぐ日本専任求人へ応募したい", "国内定量caseを必須にする", "recognized revenue・profit開示を必須にする"],
    unresolved: [["Hiring", "日本法人はあるが現行Japan求人0。", "次のJapan hiring、Sales・SE・Services・ROC・Support人数と雇用主体は？"], ["Financials", "Series C 1億米ドル（約157.6億円）・評価額10億米ドル（約1,575.6億円）を開示。", "recognized revenue、ARR、gross margin、profit、FCF、customer concentrationは？"], ["Customer proof", "国内named customerの定量成果なし。", "Japan paid customers、deployment、attack・restore drill、renewal、referenceabilityは？"], ["Platform fit", "EDR・backupとcomplementaryに使う。", "競合・既存agentとのcoexistence、performance、false positive、SOC workflow、responsibilityは？"], ["Warranty・response", "warranty・ROCを提供。", "coverage exclusion、claim、SLA、local IR、decrypt・recovery成功条件をどう契約する？"]],
    growthSummary: "recognized revenue、ARR、profit、FCFは非公開。2024年Series C 1億米ドル（約157.6億円）、累計1.9億米ドル（約299.4億円）、valuation 10億米ドル（約1,575.6億円）は資本・評価額で売上ではない。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-halcyon-funding"] },
      { label: "資本", value: "Series C 1億米ドル（約157.6億円）", detail: "valuation 10億米ドル、累計1.9億米ドル。売上・profitではない。", sourceIds: ["rollout-halcyon-funding", fx.id] },
      { label: "日本体制", value: "Halcyon Japan株式会社", detail: "東京都渋谷区、Country Manager露木正樹、日本語support・partner delivery。", sourceIds: ["rollout-halcyon-japan"] },
      { label: "日本採用", value: "0件", detail: "現行Greenhouse 10求人にJapanなし。旧Commercial AEは終了。", sourceIds: ["rollout-halcyon-jobs"] },
    ],
    customerProof: [
      { company: "CCI Group・北國銀行", products: "Halcyon Anti-Ransomware Platform", outcome: "日本法人launchで既存securityへのcomplementary defenseとして評価コメント。", implication: "導入範囲・before/after・ROIは非公開で、定量成果を示さない。", sourceId: "rollout-halcyon-japan" },
      { company: "匿名ROC事例", products: "Halcyon ROC・Anti-Ransomware Engine", outcome: "悪性audio偽装fileを実行前に阻止し、被害0と報告。", implication: "vendor incident report。日本顧客か、独立監査かは確認できない。", sourceId: "rollout-halcyon-roc" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。日本法人、Country Manager、partner、日本語supportを軸にlandし、endpoint deployment、ROC、warranty、recovery validationへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CISO、SOC、Endpoint、IR、Backup・BCP、Risk、Legal、Procurementとpartner・ROC・Productを横断する想定。" },
    sources: [
      { id: "rollout-halcyon-company", label: "Halcyon Company", url: "https://www.halcyon.ai/company", kind: "企業公式", scope: "会社・leadership・mission・platform", checkedAt: researchedAt },
      { id: "rollout-halcyon-funding", label: "Halcyon Series C", url: "https://www.halcyon.ai/press/halcyon-closes-100m-in-series-c-funding-round-at-1-billion-valuation-to-protect-society-from-ransomware-disruption", kind: "企業公式", scope: "funding・valuation・company claims", checkedAt: researchedAt },
      { id: "rollout-halcyon-jobs", label: "Halcyon Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/halcyon/jobs?content=true", kind: "企業公式", scope: "現行10求人・Japan 0件・終了反証", checkedAt: researchedAt },
      { id: "rollout-halcyon-japan", label: "Halcyon Japan Launch", url: "https://www.halcyon.ai/jp/press/halcyon-japan-launch-press-release", kind: "企業公式", scope: "日本法人・Country Manager・国内コメント", checkedAt: researchedAt },
      { id: "rollout-halcyon-roc", label: "Halcyon ROC STAR Report May 2026", url: "https://www.halcyon.ai/jp/press/roc-star-report-may-2026", kind: "企業公式", scope: "ransomware阻止case", checkedAt: researchedAt },
      ipaThreats, fx,
    ],
  });
  milestone(intelligence, "2026", "日本法人設立・事業開始", "Halcyon Japan株式会社を東京都渋谷区に設立し、Country Managerと日本語support・partner motionを公表。", "rollout-halcyon-japan");
}

function patchHarvey(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "harvey", leaderName: "Winston Weinberg", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.harvey.ai/company",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.harvey.ai/careers",
    companyId: "rollout-harvey-company", jobsId: "rollout-harvey-jobs", customerId: "rollout-harvey-mhm", externalId: metiAi.id, financeId: "rollout-harvey-funding",
    founded: "2022", foundedDetail: "Winston WeinbergとGabriel Pereyraがlaw firm・professional services向けdomain AIとして創業。",
    localStatus: "2026", localDetail: "Mori Hamada & Matsumotoのfirmwide caseはあるが、公式Careersの現行勤務地にJapan・Tokyoはない。Singapore officeは2026年6月開設、日本法人・office・責任者は確認不能。",
    targets: ["法律事務所・弁護士", "企業法務・コンプライアンス", "金融・資産運用・専門サービス", "ナレッジ管理・法務オペレーション", "CIO・CISO・AIガバナンス"],
    competitors: "Thomson Reuters CoCounsel、Lexis+ AI、vLex Vincent、Microsoft・OpenAI・Anthropic、Luminance・Hebbia、legal research・DMS・内製RAG",
    feature: "Agents、Assistant、Vault、Knowledge、Shared Spaces、Contract Intelligence、Command Centerをlegal・professional workflowへ統合。",
    advantage: "generic chatだけでなく、firm knowledge、documents、sources、matter workflow、admin・security controlをdomain-specific workspaceに置く。",
    benefit: "research、draft、review、translation、knowledge reuse、contract analysis、client response、legal team capacityを改善できる可能性がある。",
    evidence: "Mori Hamada & Matsumotoはfirmwideでmultiple queries/dayを利用し、基礎作業のhours削減、法令・policy分析、publication、multilingual・cross-border workの高速化を報告。定量値・独立監査なし。",
    domesticStatus: "森・濱田松本法律事務所", domesticDetail: "firmwide adoption、multiple queries/day、hours単位のmanual task削減を公式caseで確認。具体時間・ROI・control groupは非公開。",
    marketVerdict: "結論：法務・professional servicesは速度だけでなくsource、privilege、confidentiality、review責任を維持するAI workflowを求める。Harveyは1,300超の組織・国内firmwide caseを持つが、日本求人・拠点・total ARR・profitは未確認。",
    marketParagraphs: ["legal research、drafting、contract review、knowledge searchはdocument・matter・jurisdiction・clientごとに分断し、senior reviewとreworkがbottleneckになる。", "Buyerはmodel精度だけでなくcitation、privilege、data boundary、retention、human review、matter billing、adoption、vendor exitを求める。", "Genba分析：限定matter・workflowでturnaround、lawyer hours、citation validation、revision、knowledge reuse、client response、security exceptionをbaseline比較する。"],
    cultureHeadline: "high bar、ownership、speed、mission intensityを重視。現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Singapore・US等の条件を将来の日本求人へ転用しない",
    goodFor: ["Legal AIとknowledge workflowを深めたい", "法務・security・businessを横断したい", "国内customer proofのあるpre-entry企業を観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "日本法人・officeを必須にする", "recognized revenue・profit開示を必須にする"],
    unresolved: [["Japan trigger", "国内firmwide顧客とSingapore officeはあるがJapan求人0。", "日本ARR、paid users、reference、partner、supportのどの条件で専任podを作る？"], ["Financials", "2億米ドル（約315.1億円）調達・110億米ドル（約1兆7,331.6億円）valuation、四半期に1億米ドル超（約157.6億円超）ARR追加を発表。", "total ARR、recognized revenue、gross margin、profit、FCF、retentionは？"], ["Legal quality", "source-linked domain AIを提供。", "日本法・判例・契約のgold set、false citation、human review、audit、error liabilityをどう測る？"], ["Data governance", "firm knowledge・matter dataを扱う。", "privilege、client isolation、training use、retention、residency、subprocessor、export・deletionをどう保証する？"], ["Economics", "1,300組織・10万lawyersへ拡大。", "seat・usage・matter pricing、adoption、hours saved、write-off、3年TCO、billing impactは？"]],
    growthSummary: "2026年3月に2億米ドル（約315.1億円）調達、valuation 110億米ドル（約1兆7,331.6億円）、累計10億米ドル超。7月は初めて1四半期で1億米ドル超ARRを追加と発表。total ARR・recognized revenue・profit・FCFは非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、total ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-harvey-funding"] },
      { label: "成長", value: "1四半期でARR 1億米ドル超（約157.6億円超）を追加", detail: "total ARRではなくadded ARR。recognized revenueと混同しない。", sourceIds: ["rollout-harvey-arr", fx.id] },
      { label: "資本", value: "2億米ドル調達・valuation 110億米ドル", detail: "約315.1億円・約1兆7,331.6億円。売上・profitではない。", sourceIds: ["rollout-harvey-funding", fx.id] },
      { label: "規模", value: "1,300超の組織・10万超lawyers・60超の国", detail: "global adoption。日本paid customer数・retentionは非公開。", sourceIds: ["rollout-harvey-funding"] },
    ],
    customerProof: [
      { company: "森・濱田松本法律事務所", products: "Harvey Assistant・Knowledge", outcome: "firmwideでmultiple queries/day、manual basic taskのhours削減、法令・policy分析、publication、cross-border translationを高速化。", implication: "vendor-selected case。具体時間・ROI・独立監査はない。", sourceId: "rollout-harvey-mhm" },
      { company: "Global customer base", products: "Harvey Platform", outcome: "majority of AmLaw 100、500超のin-house legal teams、50 asset managersを含む1,300超の組織。", implication: "adoption scaleであり、Japan revenue・outcome・retentionではない。", sourceId: "rollout-harvey-funding" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はtrusted legal workflowでlandし、Assistant、Vault、Knowledge、Agents、Contract Intelligence、enterprise governanceへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "Managing Partner、GC、lawyer、Knowledge、Legal Ops、IT、Security、Risk、Procurementを横断する想定。" },
    sources: [
      { id: "rollout-harvey-company", label: "Harvey Company", url: "https://www.harvey.ai/company", kind: "企業公式", scope: "会社・leadership・mission", checkedAt: "2026-08-20" },
      { id: "rollout-harvey-funding", label: "Harvey 110億米ドルvaluation", url: "https://www.harvey.ai/blog/harvey-raises-at-dollar11-billion-valuation-to-scale-agents-across-law-firms-and-enterprises", kind: "企業公式", scope: "funding・valuation・customer scale", checkedAt: researchedAt },
      { id: "rollout-harvey-arr", label: "Harvey Strategic Investment", url: "https://www.harvey.ai/blog/harvey-announces-strategic-investment-from-goldman-sachs-and-jp-morgan", kind: "企業公式", scope: "quarterly added ARR", checkedAt: researchedAt },
      { id: "rollout-harvey-jobs", label: "Harvey Careers", url: "https://www.harvey.ai/careers", kind: "企業公式", scope: "現行求人・勤務地一覧・Japan 0件", checkedAt: "2026-08-20" },
      { id: "rollout-harvey-mhm", label: "Harvey Mori Hamada & Matsumoto Case", url: "https://www.harvey.ai/customers/mori-hamada-and-matsumoto", kind: "企業公式", scope: "国内firmwide customer proof", checkedAt: researchedAt },
      metiAi, fx,
    ],
  });
}

function patchIntercom(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "intercom", leaderName: "Eoghan McCabe", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.intercom.com/about",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.intercom.com/careers",
    companyId: "rollout-intercom-company", jobsId: "rollout-intercom-jobs", customerId: "rollout-intercom-customers", externalId: ppc.id, financeId: "rollout-intercom-fin",
    founded: "2011", foundedDetail: "Eoghan McCabe、Des Traynor、Ciaran Lee、David Barrettがinternet business向けcustomer messagingとして創業。2026年に会社名をFinへ変更。",
    localStatus: "2026", localDetail: "2026年5月に会社名をFinへ変更しIntercomはsoftware product名として継続。6月にSalesforceが約36億米ドル（約5,672.2億円）で買収する契約を締結したが未完了。公式Greenhouseの現行118求人にJapan 0件。",
    targets: ["カスタマーサービス・サポート責任者", "CX運用・ヘルプデスク", "CIO・デジタル・AI変革", "ナレッジ・品質管理・人員管理", "セキュリティ・プライバシー・調達"],
    competitors: "Zendesk、Salesforce Service Cloud、Microsoft Dynamics、HubSpot Service Hub、Freshworks、Ada、Decagon、Sierra、native chatbot・内製AI support",
    feature: "Fin Customer Agent、Intercom Helpdesk、Knowledge、Operator、Apex、Evals・MonitorsをAI customer service platformとして統合。",
    advantage: "bot追加ではなく、AI resolution、human handoff、ticket・conversation、knowledge、quality・evaluationを同じsupport operationで閉じる。",
    benefit: "resolution rate、cost per resolution、AHT、backlog、CSAT、agent capacity、knowledge coverage、escalationを改善できる可能性がある。",
    evidence: "Vantaは71% resolution、solidcoreは年56.9万米ドル（約8,965.2万円）cost・12,600時間削減と報告。global vendor-selected caseで日本成果ではない。",
    domesticStatus: "確認不能", domesticDetail: "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。日本語提供やAPAC Sydney officeを国内成果へ転用しない。",
    marketVerdict: "結論：AI supportはdemoの回答率から、正確なresolution、handoff、quality、costへ競争軸が移る。Finは約1億米ドル（約157.6億円）のrecurring revenue・週約200万件を解決するが、日本求人・拠点・国内case、買収後roadmapは未確認。",
    marketParagraphs: ["FAQ bot、helpdesk、knowledge、QA、human escalationが分断すると、AIが回答しても解決・品質・責任・learning loopを一貫して管理できない。", "Buyerはautomation rateより、resolution定義、accuracy、handoff、knowledge freshness、privacy、Japanese quality、pricing、vendor continuityを求める。", "Genba分析：限定queueでresolution、reopen、escalation、AHT、CSAT、cost、knowledge gap、unsafe answer、agent acceptanceをbaseline比較する。"],
    cultureHeadline: "AI-first transformation、customer outcome、speedを重視。現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Sydney・US・Europe求人の条件を将来の日本求人へ転用しない",
    goodFor: ["AI customer serviceのend-to-end運用を深めたい", "product transformationとbusiness model変化を追いたい", "将来のJapan entryを長期観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "買収後組織の確定を必須にする", "国内named caseを必須にする"],
    unresolved: [["Transaction", "Salesforceによる約36億米ドル（約5,672.2億円）の買収契約はQ4 FY2027 close予定。", "close条件、組織・product・pricing・support・roadmap、既存customer contractはどう変わる？"], ["Financials", "Finは約1億米ドル（約157.6億円）recurring revenue。", "company total recognized revenue、ARR、gross margin、profit、FCF、NRR、concentrationは？"], ["Japan trigger", "Sydney APAC officeはあるがJapan求人0。", "日本paid cohort、resolution、language、partner、ARRのどの条件で専任podを作る？"], ["AI quality", "7,000 teams・平均resolution 76%を発表。", "resolution定義、reopen、CSAT、unsafe answer、Japanese benchmark、human QAをどう測る？"], ["Economics", "AI outcome pricingへ移行。", "cost per resolution、minimum・overage、implementation、knowledge operations、human fallback、3年TCOは？"]],
    growthSummary: "2026年3月にFin recurring revenueは1億米ドル近く（約157.6億円）、週約200万件を解決。recognized revenue・company total ARR・profit・FCFは非公開。Salesforceの約36億米ドル（約5,672.2億円）買収契約は未完了で、売上ではない。",
    facts: [
      { label: "事業固有指標", value: "Fin recurring revenue 約1億米ドル", detail: "約157.6億円。Fin product指標でcompany total recognized revenueではない。", sourceIds: ["rollout-intercom-fin", fx.id] },
      { label: "運用規模", value: "週約200万件を解決", detail: "会社発表。resolution定義・日本内訳・独立監査は非公開。", sourceIds: ["rollout-intercom-fin"] },
      { label: "顧客", value: "7,000 teams・平均resolution 76%", detail: "2026年会社発表。全顧客のpaid status・Japan内訳は非公開。", sourceIds: ["rollout-intercom-outcomes"] },
      { label: "M&A", value: "約36億米ドル（約5,672.2億円）", detail: "Salesforceとのdefinitive agreement。2026年8月17日時点で未close、売上・valuation currentではない。", sourceIds: ["rollout-intercom-acquisition", fx.id] },
    ],
    customerProof: [
      { company: "Vanta", products: "Fin AI Agent", outcome: "71% resolutionと報告。", implication: "global vendor-selected case。resolution定義・Japan再現性・独立監査は未確認。", sourceId: "rollout-intercom-customers" },
      { company: "solidcore", products: "Fin・Intercom", outcome: "年間56.9万米ドル（約8,965.2万円）のcost・12,600時間を削減と報告。", implication: "global vendor case。business model・support mixに依存し保証値ではない。", sourceId: "rollout-intercom-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はFin Customer Agentでlandし、Intercom Helpdesk、Knowledge、Operator、Evals・Monitorsへexpandするoutcome-based motionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "Customer Service、CX Ops、IT、Knowledge、Data、Security、Privacy、Legal、Procurementを横断する想定。" },
    sources: [
      { id: "rollout-intercom-company", label: "Intercom About", url: "https://www.intercom.com/about", kind: "企業公式", scope: "会社・leadership・product・office", checkedAt: researchedAt },
      { id: "rollout-intercom-fin", label: "Fin Apex Announcement", url: "https://www.intercom.com/blog/announcing-fin-apex-the-age-of-vertical-models-is-here/", kind: "企業公式", scope: "Fin recurring revenue・resolution volume", checkedAt: researchedAt },
      { id: "rollout-intercom-outcomes", label: "Fin Outcomes", url: "https://www.intercom.com/blog/from-resolutions-to-outcomes-evolving-how-fin-delivers-value/", kind: "企業公式", scope: "customer count・average resolution", checkedAt: researchedAt },
      { id: "rollout-intercom-acquisition", label: "Salesforce Agreement to Acquire Fin", url: "https://www.intercom.com/blog/salesforce-signs-definitive-agreement-to-acquire-fin/", kind: "企業公式", scope: "pending acquisition・transaction value", checkedAt: researchedAt },
      { id: "rollout-intercom-jobs", label: "Intercom Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/intercom/jobs?content=true", kind: "企業公式", scope: "現行118求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-intercom-customers", label: "Intercom Customers", url: "https://www.intercom.com/customers", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ppc, metiAi, fx,
    ],
  });
}

export function applyCompanyPageRolloutBatchNineteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.fireblocks) patchFireblocks(records.fireblocks);
  if (records.gong) patchGong(records.gong);
  if (records.halcyon) patchHalcyon(records.halcyon);
  if (records.harvey) patchHarvey(records.harvey);
  if (records.intercom) patchIntercom(records.intercom);
}
