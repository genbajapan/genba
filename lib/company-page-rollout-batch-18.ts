import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

type Config = {
  slug: string;
  leaderName: string;
  leaderLabel: string;
  leaderUrl: string;
  companyId: string;
  jobsId: string;
  customerId: string;
  externalId: string;
  financeId: string;
  founded: string;
  foundedDetail: string;
  localStatus: string;
  localDetail: string;
  localUrl: string;
  targets: string[];
  competitors: string;
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
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
    localName: "公開情報で確認不能",
    localLabel: "Japan法人・責任者",
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
  if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: "国内公式事例", need: "日本企業・日本拠点のnamed customer caseと定量成果は確認できない。掲載する成果はglobal vendor-selected caseで、日本での再現性は未検証。", sourceId: config.customerId }];
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience[1] = { label: "国内顧客成果", value: "確認不能", detail: "国内named caseの定量成果は確認できない。global caseを国内成果へ転用しない。", sourceId: config.customerId };
  addSources(intelligence, config.sources);
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

const fx: ResearchSource = { id: "rollout-b18-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt };
const ipaDx: ResearchSource = { id: "rollout-b18-ipa-dx", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html", kind: "公的機関", scope: "DX成果・AI利用・人材・KPI", checkedAt: researchedAt };
const ppc: ResearchSource = { id: "rollout-b18-ppc", label: "個人情報保護委員会 ガイドライン通則編", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "個人dataの利用目的・安全管理・委託先監督", checkedAt: researchedAt };
const ipaThreats: ResearchSource = { id: "rollout-b18-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI利用risk", checkedAt: researchedAt };

function patchAirtable(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "airtable", leaderName: "Howie Liu", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.airtable.com/about",
    companyId: "rollout-airtable-company", jobsId: "rollout-airtable-jobs", customerId: "rollout-airtable-customers", externalId: ipaDx.id, financeId: "rollout-airtable-newsroom",
    founded: "2012", foundedDetail: "business userがshared data上にcustom applicationを作るplatformとして創業。",
    localStatus: "2026", localDetail: "公式Greenhouseは現行17求人、日本・東京0件。Sydney officeはあるが日本法人・office・責任者を確認できない。", localUrl: "https://www.airtable.com/about",
    targets: ["業務部門・オペレーション", "マーケティング・コンテンツ運用", "プロダクト・プログラム管理", "IT・エンタープライズ設計", "CIO・DX・業務改革"],
    competitors: "Microsoft Power Apps・Lists、ServiceNow、Smartsheet、monday.com、Notion、Google Workspace、spreadsheet・内製app",
    feature: "relational data、Interface、Automation、AI、governanceを組み合わせ、business userが固有workflowをconnected appとして作る。",
    advantage: "spreadsheetに近い操作性とrelational data・app building・enterprise controlを同じplatformに置く。",
    benefit: "manual entry、handoff、reporting、error、tool数、IT backlog、workflow変更時間を減らせる可能性がある。",
    evidence: "West Elmは週85時間削減、Virgin Voyagesはweekly reporting時間90%削減と報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：日本のDXはtool導入からKPI・全社定着へ移り、現場buildとcentral governanceを両立する需要がある。Airtableは50万組織と強いglobal proofを持つが、日本語GUI・国内case・現行Japan求人は未確認。",
    marketParagraphs: ["spreadsheet、form、chat、project toolが部門ごとに分かれると、status確認、copy、handoff、owner、access、auditが分断する。", "Buyerはno-codeの速さだけでなく、data model、permission、AI governance、lifecycle、既存suiteとの重複、3年TCOを求める。", "Genba分析：高頻度workflow一つでmanual hours、cycle、error、report time、active adoption、admin effortをbaseline比較する。"],
    cultureHeadline: "Airtableはmission、craft、customer impactを重視。現行Japan求人0件で、日本固有の勤務条件・報酬は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Sydney・US等の条件を将来の日本求人へ転用しない",
    goodFor: ["business-led applicationとgovernanceを学びたい", "workflowを顧客KPIへ翻訳したい", "将来のJapan entryを長期観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "日本語GUIを既に必須とする", "recognized revenue・profitの開示を必須にする"],
    unresolved: [["Japan trigger", "Sydney拠点とglobal規模はあるがJapan求人0。", "日本paid cohort、renewal、partner、languageのどの条件で専任podを作る？"], ["Financials", "50万組織・13.6億米ドル（約2,142.8億円）調達を開示。", "recognized revenue、ARR、growth、profit、FCF、paid mixは？"], ["Product localization", "公式GUI対応言語に日本語を確認できない。", "日本語UI・AI・support・contract・security資料のroadmapは？"], ["Enterprise governance", "citizen developmentとAIを拡張。", "owner、permission、audit、AI data use、app lifecycleをどう統制する？"], ["Economics", "suite・low-code競争が強い。", "ACV、implementation、builder adoption、support cost、3年TCOの勝ち筋は？"]],
    growthSummary: "recognized revenue・ARR・operating profit・FCFは非公開。公式Aboutは50万組織、Newsroomは45万超とページ間差があり、累計調達13.6億米ドル（約2,142.8億円）は売上ではない。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-airtable-newsroom"] },
      { label: "利用規模", value: "50万組織", detail: "公式About。Newsroomは45万超で公式ページ間に差がある。paid customer数ではない。", sourceIds: ["rollout-airtable-company", "rollout-airtable-newsroom"] },
      { label: "historical資本", value: "累計13.6億米ドル（約2,142.8億円）", detail: "資金調達累計で売上・現在valuationではない。", sourceIds: ["rollout-airtable-newsroom", fx.id] },
    ],
    customerProof: [
      { company: "West Elm", products: "Airtable App Platform", outcome: "5部門をつなぎ、週85時間を削減。", implication: "global vendor-selected case。日本での再現性・単独因果は未検証。", sourceId: "rollout-airtable-customers" },
      { company: "Virgin Voyages", products: "Airtable AI・Automations", outcome: "80人超のmarketingを統合し、weekly reporting時間を90%削減。", implication: "workflow再設計を含む顧客談で独立監査なし。", sourceId: "rollout-airtable-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来は高頻度workflowでlandし、connected app、automation、AI、Enterprise governanceへexpandするPLG-to-enterprise motionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan territory、quota、ACV、cycle、attainmentは確認不能。", collaboration: "Operations、IT、Security、Data、Finance、ProcurementとSolution・CS・partnerを横断する想定。" },
    sources: [
      { id: "rollout-airtable-company", label: "Airtable About", url: "https://www.airtable.com/about", kind: "企業公式", scope: "会社・leadership・規模・顧客成果", checkedAt: researchedAt },
      { id: "rollout-airtable-newsroom", label: "Airtable Newsroom", url: "https://www.airtable.com/newsroom", kind: "企業公式", scope: "規模・累計調達・product updates", checkedAt: researchedAt },
      { id: "rollout-airtable-jobs", label: "Airtable Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/airtable/jobs?content=true", kind: "企業公式", scope: "現行17求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-airtable-customers", label: "Airtable Customer Stories", url: "https://www.airtable.com/customer-stories", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ipaDx, fx,
    ],
  });
}

function patchApollo(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "apollo-io", leaderName: "Matt Curl", leaderLabel: "CEO", leaderUrl: "https://www.apollo.io/company",
    companyId: "rollout-apollo-company", jobsId: "rollout-apollo-jobs", customerId: "rollout-apollo-customer", externalId: ppc.id, financeId: "rollout-apollo-arr",
    founded: "2015", foundedDetail: "Tim Zhengがprospecting toolを起点に創業。現在はdata・engagement・AIを統合するGTM platform。",
    localStatus: "2026", localDetail: "公式Greenhouseは現行43求人、日本・東京0件。日本法人・office・責任者・国内named caseを確認できない。", localUrl: "https://www.apollo.io/careers",
    targets: ["CRO・営業責任者", "SDR・BDR・アカウント営業", "レベニューオペレーション・営業企画", "グロース・需要創出", "GTMエンジニアリング・データ"],
    competitors: "ZoomInfo、Salesloft、Outreach、HubSpot、Cognism、Lusha、Clay、CRM・data provider・dialerの組合せ",
    feature: "B2B contact・company data、research、sequencing、dialer、conversation、workflow、AIを一つのGTM platformで提供。",
    advantage: "data取得からoutreach・call・CRM actionまでを一つのworkspaceに置き、point-tool間のcopyとintegrationを減らす。",
    benefit: "research、list build、routing、sequence作成、meeting、SQL、rep hours、tool costを改善できる可能性がある。",
    evidence: "Iruはmeeting 20%増・rep週5時間削減、Customer.ioはSQL 70%増と報告。global vendor-selected caseで日本成果ではない。",
    marketVerdict: "結論：GTM人材不足とAI automation需要は強いが、日本では個人dataの正確性・利用目的・outreach運用・deliverabilityが選定条件になる。ARR 1.5億米ドル（約236.3億円）を公式発表する一方、日本求人・拠点・named caseは未確認。",
    marketParagraphs: ["contact data、account research、sequence、dialer、CRM更新が分断すると、rep time、routing、deliverability、conversionの原因を追えない。", "Buyerはrecord数より、日本data coverage・accuracy、lawful use、suppression、email reputation、CRM sync、AI control、total costを求める。", "Genba分析：限定segmentでmatch・bounce・reply・meeting・SQL・rep hours・tool costをbaseline比較する。"],
    cultureHeadline: "remote-firstでownershipとcustomer impactを重視。現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "global remote条件を将来の日本求人へ転用しない",
    goodFor: ["dataとengagementを一体で売りたい", "GTM workflowを数字で改善したい", "将来のJapan entryを長期観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "国内data coverageの公開benchmarkを必須にする", "recognized revenue・profit開示を必須にする"],
    unresolved: [["Japan trigger", "ARR規模はあるがJapan求人0。", "日本paid cohort、retention、partner、data coverageのどの条件で専任podを作る？"], ["Data quality", "global database規模を訴求。", "日本のmobile・business email・company hierarchyのprecision、coverage、refreshは？"], ["Compliance", "outreachは個人dataとemail運用を伴う。", "利用目的、opt-out、suppression、委託先、監査を日本向けにどう運用する？"], ["Economics", "ARR 1.5億米ドル（約236.3億円）を開示。", "recognized revenue、growth、profit、FCF、NRR、enterprise mixは？"], ["Product overlap", "data・engagement・AIを統合。", "CRM、ZoomInfo、Salesloft、Clayとの重複をどのKPI・TCOで置換する？"]],
    growthSummary: "ARR 1.5億米ドル（約236.3億円）を公式発表。ARRは売上ではなく、recognized revenue、operating・net income、FCFは非公開。公式ATSは43求人でJapan 0件。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、operating・net income、FCFを確認できない。", sourceIds: ["rollout-apollo-arr"] },
      { label: "事業固有指標", value: "ARR 1.5億米ドル（約236.3億円）", detail: "annual recurring revenueで売上ではない。", sourceIds: ["rollout-apollo-arr", fx.id] },
      { label: "採用母集団", value: "現行43求人・Japan 0件", detail: "公式Greenhouse APIを2026年8月17日に全件照合。", sourceIds: ["rollout-apollo-jobs"] },
    ],
    customerProof: [
      { company: "Iru", products: "Apollo GTM Platform", outcome: "meeting 20%増、rep一人あたり週5時間削減、partial form-fillから月20 meeting。", implication: "global vendor case。tool統合・workflow変更を含み単独因果の独立監査なし。", sourceId: "rollout-apollo-customer" },
      { company: "Customer.io", products: "Data・Sales Engagement", outcome: "sales-qualified lead 70%増、sales team 12人から29人へ拡大。", implication: "2023年のvendor caseで、現在・日本での再現保証ではない。", sourceId: "rollout-apollo-customer" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はdata・engagement consolidationとrep productivityでlandし、AI workflow・conversation・team governanceへexpandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CRO、Sales、RevOps、Marketing、Data、Security、Legal、Procurementを横断する想定。" },
    sources: [
      { id: "rollout-apollo-company", label: "Apollo Company", url: "https://www.apollo.io/company", kind: "企業公式", scope: "会社・leadership・product", checkedAt: researchedAt },
      { id: "rollout-apollo-arr", label: "Apollo 1.5億米ドルARR", url: "https://www.apollo.io/magazine/apollo-reaches-150-million-arr-fueled-by-ai", kind: "企業公式", scope: "ARR・創業背景", checkedAt: researchedAt },
      { id: "rollout-apollo-jobs", label: "Apollo Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/apolloio/jobs?content=true", kind: "企業公式", scope: "現行43求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-apollo-customer", label: "Apollo Customer Stories", url: "https://www.apollo.io/magazine/articles/customer-stories", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ppc, fx,
    ],
  });
}

function patchAttio(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "attio", leaderName: "Nicolas Sharp", leaderLabel: "Co-founder・CEO", leaderUrl: "https://attio.com/blog/attio-raises-52m-series-b",
    companyId: "rollout-attio-company", jobsId: "rollout-attio-jobs", customerId: "rollout-attio-customers", externalId: ppc.id, financeId: "rollout-attio-seriesb",
    founded: "2019", foundedDetail: "Nicolas SharpとAlexander Christieがrelationship dataを柔軟にmodelingするCRMとして創業。",
    localStatus: "2026", localDetail: "公式Ashbyは現行37求人、日本・東京0件。日本法人・office・責任者・国内named caseを確認できない。", localUrl: "https://attio.com/careers",
    targets: ["創業者・CRO", "営業・カスタマーサクセス", "レベニューオペレーション・GTMエンジニアリング", "プロダクト主導成長チーム", "IT・セキュリティ・データ"],
    competitors: "Salesforce、HubSpot、Notion・spreadsheet、Affinity、folk、custom CRM・data warehouse",
    feature: "柔軟なobject・attribute、email・calendar sync、automation、AI Attributes・Ask Attio、Workflows、Developer PlatformをCRM context上で提供。",
    advantage: "固定schemaにprocessを合わせるのではなく、team固有のGTM modelとagent workflowを同じrelationship graphに構築する。",
    benefit: "lead triage、CRM hygiene、workflow build、research、handoff、time-to-valueを改善できる可能性がある。",
    evidence: "Granolaはlead triage 83%高速化、Passionfrootはrevenue 25%増と報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：AI-native CRMへの置換需要はあるが、日本ではdata enrichment、language、support、security、migration、local partnerがentry条件になる。5,000 paying customersと4倍ARR成長見込みを発表する一方、ARR絶対額・日本求人・国内caseは未確認。",
    marketParagraphs: ["CRM schemaが硬直し、product signal、conversation、research、seller actionが別toolへ分散すると、RevOpsが変更のbottleneckになる。", "BuyerはAI機能数より、data quality、permission、migration、automation reliability、human ownership、integration、3年TCOを求める。", "Genba分析：lead triage、record completeness、workflow build time、manual updates、conversion、admin hoursをbaseline比較する。"],
    cultureHeadline: "builder mindset、craft、speed、global expansionを重視。現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "Europe・US求人の条件を将来の日本求人へ転用しない",
    goodFor: ["AI-native CRMとGTM engineeringを学びたい", "柔軟なdata modelを売りたい", "将来のJapan entryを観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "国内named caseを必須にする", "絶対ARR・profitの開示を必須にする"],
    unresolved: [["Japan trigger", "global expansion方針はあるがJapan求人0。", "日本paid cohort、retention、partner、languageのどの条件で専任podを作る？"], ["Financials", "5,000 paying customersと4倍ARR見込みを開示。", "ARR絶対額、recognized revenue、growth、profit、FCF、NRRは？"], ["Localization", "日本語・国内data enrichmentは未確認。", "UI、AI、support、company/contact data、contract、security資料のroadmapは？"], ["Migration", "既存CRM置換が主要motion。", "Salesforce・HubSpotからのdata、automation、permission、historyをどう移す？"], ["Agent governance", "WorkflowsとAI agentを拡張。", "source、approval、action boundary、audit、failure・rollbackをどう設計する？"]],
    growthSummary: "2025年Series B 5,200万米ドル（約81.9億円）、累計1.16億米ドル（約182.8億円）。5,000 paying customers、同年4倍ARR成長見込みを公式発表。ARR絶対額・recognized revenue・profit・FCFは非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "ARR絶対額、recognized revenue、operating・net income、FCFを確認できない。", sourceIds: ["rollout-attio-seriesb"] },
      { label: "顧客・成長", value: "5,000 paying customers・4倍ARR成長見込み", detail: "2025年発表。4倍は見込みで絶対ARRではない。", sourceIds: ["rollout-attio-seriesb"] },
      { label: "資金調達", value: "5,200万米ドル（約81.9億円）・累計1.16億米ドル（約182.8億円）", detail: "Series Bと累計調達。売上・valuationではない。", sourceIds: ["rollout-attio-seriesb", fx.id] },
    ],
    customerProof: [
      { company: "Granola", products: "Attio CRM・Workflows", outcome: "lead triageを83%高速化。", implication: "global vendor-selected case。算定条件と日本での再現性は未検証。", sourceId: "rollout-attio-customers" },
      { company: "Passionfroot", products: "Attio CRM", outcome: "revenue 25%増と報告。", implication: "複数施策を含み、Attio単独因果の独立監査なし。", sourceId: "rollout-attio-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はstartup・PLG teamへ柔軟なCRMでlandし、automation、AI、Developer Platform、Enterprise controlへexpandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "Founder、CRO、Sales、CS、RevOps、Data、IT、Security、Procurementを横断する想定。" },
    sources: [
      { id: "rollout-attio-company", label: "Attio Product・Blog", url: "https://attio.com/blog", kind: "企業公式", scope: "会社・product roadmap", checkedAt: researchedAt },
      { id: "rollout-attio-seriesb", label: "Attio Series B", url: "https://attio.com/blog/attio-raises-52m-series-b", kind: "企業公式", scope: "資金調達・顧客・ARR成長見込み・leadership", checkedAt: researchedAt },
      { id: "rollout-attio-jobs", label: "Attio Ashby API", url: "https://api.ashbyhq.com/posting-api/job-board/attio", kind: "企業公式", scope: "現行37求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-attio-customers", label: "Attio Customers", url: "https://attio.com/customers", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ppc, fx,
    ],
  });
}

function patchClay(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "clay", leaderName: "Kareem Amin", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.clay.com/blog/tender-offer-2026",
    companyId: "rollout-clay-company", jobsId: "rollout-clay-jobs", customerId: "rollout-clay-customers", externalId: ppc.id, financeId: "rollout-clay-tender",
    founded: "2017", foundedDetail: "Kareem AminとVarun Anandが創業。2026年公式記事は7年の0→1を経てGTM orchestration platformへ成長したと説明。",
    localStatus: "2026", localDetail: "公式Ashbyは現行73求人、日本・東京0件。日本法人・office・責任者・国内named caseを確認できない。", localUrl: "https://www.clay.com/careers",
    targets: ["CRO・収益責任者", "レベニューオペレーション・GTMエンジニアリング", "営業開発・グロース", "マーケティング運用", "データ・AI・CRM運用"],
    competitors: "Apollo、ZoomInfo、Cognism、6sense、HubSpot、Salesforce、Make・Zapier、data provider・agent・内製workflowの組合せ",
    feature: "Tables、150超のdata providers、waterfall enrichment、Claygent、Signals、Sequencer、Ads、CRM・agent integrationでGTM workflowを構築・実行する。",
    advantage: "単一databaseでなく、team固有signal・data・AI・actionを組み立てるGTM development・orchestration environmentを提供する。",
    benefit: "ICP research、list build、enrichment coverage、rep ramp、meeting、revenue per rep、acquisition costを改善できる可能性がある。",
    evidence: "Terrapinnはrevenue per rep 19%増・prospect acquisition cost 90%減、Pumpはrep ramp 6倍高速化と報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：GTM人材不足とAI workflow需要は追い風だが、日本ではdata quality・compliance・email deliverability・usage cost・運用ownerが選定条件になる。1億米ドルARR（約157.6億円）・14,000顧客・enterprise NRR 200%超を発表する一方、Japan求人・拠点は未確認。",
    marketParagraphs: ["data provider、research、AI、spreadsheet、CRM、sequenceが分断すると、GTM ideaを実行するたびにRevOps・manual work・point-tool integrationが必要になる。", "Buyerはautomation数より、data provenance、match・bounce、approval、deliverability、usage cost、workflow owner、CRM integrityを求める。", "Genba分析：一つのICP・motionでresearch time、coverage、meeting、conversion、rep ramp、acquisition cost、data・action costをbaseline比較する。"],
    cultureHeadline: "high ownership、builder、customer creativity、communityを重視。現行Japan求人0件で、日本固有の勤務・報酬条件は確認不能。", classification: "未確認", displayLabel: "現行Japan求人なし", officeDays: "対象求人なし", remoteOnly: "対象求人なし", flexibility: "US・Europe求人の条件を将来の日本求人へ転用しない",
    goodFor: ["GTM engineeringとAI workflowを深めたい", "data・automation・revenueを一体で売りたい", "community-led entryを観測したい"], cautionFor: ["今すぐ日本専任職へ応募したい", "日本data coverageの公開benchmarkを必須にする", "連続黒字の開示を必須にする"],
    unresolved: [["Japan trigger", "14,000顧客・global communityはあるがJapan求人0。", "日本paid cohort、Claygency、Club、retentionのどの条件で専任podを作る？"], ["Data quality", "150超のproviderをorchestrate。", "日本のcompany/contact coverage、precision、refresh、source rights、suppressionは？"], ["Economics", "1億米ドルARR（約157.6億円）・enterprise NRR 200%超。", "recognized revenue、gross margin、profit、FCF、usage margin、customer concentrationは？"], ["Pricing", "Data CreditsとActionsへ分離。", "typical workflowのdata・AI・action cost、budget alert、overage、3年TCOは？"], ["Governance", "AI・agentがexternal actionを実行。", "approval、credential、audit、deliverability、failure・rollback、CRM integrityをどう守る？"]],
    growthSummary: "2025年12月にARR 1億米ドル（約157.6億円）。2026年公式は14,000顧客、enterprise NRR 200%超、前年revenue 3.5倍、前年の一部期間cash-flow positiveと発表。継続profitability・recognized revenue・FCF額は非公開。",
    facts: [
      { label: "事業固有指標", value: "ARR 1億米ドル（約157.6億円）", detail: "2025年12月到達。ARRはrecognized revenueではない。", sourceIds: ["rollout-clay-tender", fx.id] },
      { label: "稼ぐ力", value: "前年の一部期間cash-flow positive", detail: "継続黒字・FCF額・marginは非公開。", sourceIds: ["rollout-clay-tender"] },
      { label: "顧客・retention", value: "14,000顧客・enterprise NRR 200%超", detail: "会社発表。NRRはenterprise cohortで、全顧客retentionではない。", sourceIds: ["rollout-clay-tender"] },
      { label: "tender", value: "最大5,500万米ドル（約86.7億円）・評価額50億米ドル（約7,878.0億円）", detail: "employee secondary liquidityで売上・会社へのprimary fundingではない。", sourceIds: ["rollout-clay-tender", fx.id] },
    ],
    customerProof: [
      { company: "Terrapinn", products: "Clay GTM Orchestration", outcome: "150 repsでrevenue per rep 19%増、prospect acquisition cost 90%減、list作成2カ月から10分。", implication: "global vendor-selected case。組織・process変更を含み単独因果の独立監査なし。", sourceId: "rollout-clay-customers" },
      { company: "Pump", products: "Clay Data・Signals・Workflow", outcome: "rep ramp 90日から14日、meeting 30%増、revenue per rep 25%増。", implication: "global vendor caseで、日本市場・別business modelの再現保証ではない。", sourceId: "rollout-clay-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。将来はself-serve・community・agencyからlandし、GTM engineering、enterprise governance、data・action usageへexpandする可能性。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CRO、RevOps、Sales、Marketing、Data、IT、Security、Legal、Procurement、agencyを横断する想定。" },
    sources: [
      { id: "rollout-clay-company", label: "Clay Blog・Company", url: "https://www.clay.com/blog/behind-the-scenes-of-clays-marketing-and-growth", kind: "企業公式", scope: "創業・GTM・company scale", checkedAt: researchedAt },
      { id: "rollout-clay-tender", label: "Clay 2026 Tender", url: "https://www.clay.com/blog/tender-offer-2026", kind: "企業公式", scope: "ARR・顧客・NRR・cash flow・valuation", checkedAt: researchedAt },
      { id: "rollout-clay-jobs", label: "Clay Ashby API", url: "https://api.ashbyhq.com/posting-api/job-board/claylabs", kind: "企業公式", scope: "現行73求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-clay-customers", label: "Clay Customers", url: "https://www.clay.com/customers", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      ppc, fx,
    ],
  });
}

function patchCribl(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "cribl", leaderName: "Clint Sharp", leaderLabel: "Co-founder・CEO", leaderUrl: "https://cribl.io/about-us/",
    companyId: "rollout-cribl-company", jobsId: "rollout-cribl-jobs", customerId: "rollout-cribl-customers", externalId: ipaThreats.id, financeId: "rollout-cribl-arr",
    founded: "2018", foundedDetail: "Clint Sharp、Dritan Bitincka、Ledion Bitinckaがtelemetry sourceとdestinationをdecoupleする製品から創業。",
    localStatus: "2026", localDetail: "公式GreenhouseでRemote JapanのPartner Business Manager、Regional Sales Director、Enterprise Regional Sales Managerの3件を確認。求人はJapan launch teamを明記するが、日本法人・office・責任者は確認不能。", localUrl: "https://cribl.io/careers/",
    targets: ["CIO・CISO・情報システム責任者", "セキュリティ運用・SIEM", "オブザーバビリティ・SRE・IT運用", "データ基盤・AIインフラ", "チャネル・SI・MSSP・クラウドパートナー"],
    competitors: "Splunk、Elastic、Datadog、Dynatrace、Grafana Labs、OpenTelemetry pipeline、cloud-native logging、data lake・SIEMへの内製routing",
    feature: "Stream、Edge、Search、Lake・LakehouseとAI telemetryをvendor-agnosticにcollect、shape、route、store、searchする。",
    advantage: "sourceとdestinationをdecoupleし、既存SIEM・observability・object storageを残しながらdata volume、quality、routing、searchを制御する。",
    benefit: "ingest・storage cost、pipeline toil、migration risk、investigation time、data access、vendor lock-inを改善できる可能性がある。",
    evidence: "Swisslosはweb・WAF logを50%超削減、SoneparはSIEM migration cost 380万ユーロ（約6.9億円）削減と報告。global vendor caseで日本成果ではない。",
    marketVerdict: "結論：AI・cloud・securityでtelemetry量が増え、cost・visibility・data portabilityを同時に扱う需要が強い。ARR 3億米ドル超（約472.7億円）・1,400顧客超を背景に日本launch 3求人を開始したが、法人・office・国内case・数値報酬は未確認。",
    marketParagraphs: ["log、metric、trace、security eventが増えるほど、全部を高価なanalytics platformへ送る方式はcost、retention、routing、investigationを硬直化する。", "Buyerは削減率だけでなく、data loss、query・investigation、residency、security、pipeline availability、destination flexibility、3年TCOを求める。", "Genba分析：代表data sourceでingest volume、license・storage cost、pipeline admin hours、search time、loss・error、migration effortをbaseline比較する。"],
    cultureHeadline: "remote-first、Customers First Always、curiosity、collaborationを重視。日本3求人はRemoteで、言語名・数値報酬は非公開。", classification: "フルリモート", displayLabel: "Remote Japan・市場立ち上げ", officeDays: "出社要件なし", remoteOnly: "3求人すべてRemote Japan", flexibility: "time zoneにより標準時間外対応、日本国内出張あり",
    goodFor: ["日本telemetry marketを0→1で作りたい", "Security・Observability・Dataを横断したい", "directとchannelを一体で作りたい"], cautionFor: ["完成済みの日本組織を求める", "国内customer proofを既に必須にする", "公開数値報酬を必須にする"],
    unresolved: [["Territory", "3求人でJapan launch、sales team 2〜7名の構築を示す。", "TAM、named account、installed base、new・expand、初年度採用人数は？"], ["Compensation", "3求人とも数値報酬なし。", "base、OTE、pay mix、equity、quota、ramp、attainmentは？"], ["Local entity", "Remote Japanだが法人・office・責任者は未確認。", "雇用主体、契約主体、税務、support、data・security reviewのlocal責任は？"], ["Partner model", "Partner Business Managerをlaunch teamで採用。", "sourced・influenced credit、partner margin、enablement、delivery capacity、conflict ruleは？"], ["Customer proof", "global ARR・caseは強いが国内caseなし。", "日本PoCのdata volume、cost、SIEM・cloud mix、time-to-value、referenceabilityは？"]],
    growthSummary: "2025年にARR 3億米ドル超（約472.7億円）、cloud ARR 1.3億米ドル超（約204.8億円）。1,400顧客超、Fortune 100の50%。ARRは売上ではなく、recognized revenue・profit・FCFは非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、operating・net income、FCFを確認できない。", sourceIds: ["rollout-cribl-arr"] },
      { label: "事業固有指標", value: "ARR 3億米ドル超（約472.7億円）", detail: "2025年到達。cloud ARR 1.3億米ドル超。ARRは売上ではない。", sourceIds: ["rollout-cribl-arr", fx.id] },
      { label: "顧客・規模", value: "1,400顧客超・Fortune 100の50%・1,000人超", detail: "公式About掲載値。", sourceIds: ["rollout-cribl-company"] },
      { label: "日本採用", value: "Remote Japan 3求人", detail: "Partner、Sales Director、Enterprise seller。全件言語名・数値報酬は非公開。", sourceIds: ["rollout-cribl-jobs"] },
    ],
    customerProof: [
      { company: "Swisslos", products: "Cribl Stream", outcome: "Kubernetes cluster growth 35%削減、web・WAF log 50%超削減、admin work 3〜5倍高速化。", implication: "Swiss global vendor-selected case。日本での再現性と単独因果は未検証。", sourceId: "rollout-cribl-customers" },
      { company: "Sonepar", products: "Cribl Platform", outcome: "SIEM migration cost 380万ユーロ（約6.9億円）削減と報告。", implication: "global vendor case。契約・migration条件に依存し保証値ではない。", sourceId: "rollout-cribl-customers" },
    ],
    roleLens: { salesMotion: "Partner Business Managerがecosystemを作り、Regional Sales Managerがnew logo・full-cycle、Sales Directorが2〜7名のteam採用・coaching・forecastを担うJapan launch motion。", compensation: "3求人とも日本の給与、base、OTE、pay mix、equityは数値非公開。", quota: "sellerは年5社以上のnew logo実績を要件化するが、Criblのquota、ACV、cycle、ramp、attainmentは非公開。", collaboration: "CIO・CISO、Security、Observability、IT Ops、Data、ProcurementとSales、Solution、Partner、Marketing、Productを横断。" },
    sources: [
      { id: "rollout-cribl-company", label: "Cribl About", url: "https://cribl.io/about-us/", kind: "企業公式", scope: "会社・leadership・顧客・社員・product history", checkedAt: researchedAt },
      { id: "rollout-cribl-arr", label: "Cribl 3億米ドルARR", url: "https://cribl.io/news/cribl-surpasses-usd300-million-in-arr-powering-the-essential-infrastructure/", kind: "企業公式", scope: "ARR・cloud ARR・顧客成長", checkedAt: researchedAt },
      { id: "rollout-cribl-jobs", label: "Cribl Greenhouse API", url: "https://boards-api.greenhouse.io/v1/boards/cribl/jobs?content=true", kind: "企業公式", scope: "現行66求人・Remote Japan 3件", checkedAt: researchedAt },
      { id: "rollout-cribl-customers", label: "Cribl Case Studies", url: "https://cribl.io/resources/case-studies/", kind: "企業公式", scope: "global定量case", checkedAt: researchedAt },
      { id: "rollout-cribl-products", label: "Cribl Products", url: "https://cribl.io/products/", kind: "企業公式", scope: "Stream・Edge・Search・Lake・AI telemetry", checkedAt: researchedAt },
      ipaThreats, fx,
    ],
  });
  if (intelligence.marketStatus.japanGrowth?.entryAssessment) {
    intelligence.marketStatus.japanGrowth.entryAssessment.verdict = "日本進出局面。Remote JapanのPartner・Sales Director・Enterprise sellerを同時採用するが、法人・office・国内case・local deliveryは未確認";
    intelligence.marketStatus.japanGrowth.entryAssessment.watchSignals = ["日本法人・契約主体", "Japan leader・team採用", "国内顧客事例", "日本語support・security資料", "SI・MSSP partner", "Japan ARR・renewal"];
  }
  milestone(intelligence, "2026", "日本進出開始", "Remote JapanのPartner Business Manager、Regional Sales Director、Enterprise Regional Sales Managerを同時採用。法人・officeの設立は未確認。", "rollout-cribl-jobs");
}

export function applyCompanyPageRolloutBatchEighteen(records: Record<string, CompanyPublicIntelligence>) {
  if (records.airtable) patchAirtable(records.airtable);
  if (records["apollo-io"]) patchApollo(records["apollo-io"]);
  if (records.attio) patchAttio(records.attio);
  if (records.clay) patchClay(records.clay);
  if (records.cribl) patchCribl(records.cribl);
}
