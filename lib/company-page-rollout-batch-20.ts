import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

type Config = {
  slug: string;
  leader: string;
  leaderLabel: string;
  leaderUrl: string;
  localName: string;
  localLabel: string;
  localUrl: string;
  founded: string;
  foundedDetail: string;
  localYear: string;
  localDetail: string;
  companyId: string;
  jobsId: string;
  financeId: string;
  customerId: string;
  externalId: string;
  targets: string[];
  competitors: string;
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  marketVerdict: string;
  marketParagraphs: string[];
  cultureHeadline: string;
  displayLabel: string;
  goodFor: string[];
  cautionFor: string[];
  unresolved: string[][];
  growthSummary: string;
  facts: CompanyPublicIntelligence["facts"];
  customerProof: CompanyPublicIntelligence["customerProof"];
  roleLens: CompanyPublicIntelligence["roleLens"];
  stats: CompanyPublicIntelligence["companyStats"];
  comparisons: CompanyPublicIntelligence["comparisonMap"];
  sources: ResearchSource[];
  privateVerdict?: string;
};

const fx: ResearchSource = { id: "rollout-b20-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円、1ユーロ=181.66円）", checkedAt: researchedAt };
const ipaThreats: ResearchSource = { id: "rollout-b20-ipa-threats", label: "IPA 情報セキュリティ10大脅威2026", url: "https://www.ipa.go.jp/security/10threats/10threats2026.html", kind: "公的機関", scope: "ransomware・supply chain・AI利用risk", checkedAt: researchedAt };
const metiAi: ResearchSource = { id: "rollout-b20-meti-ai", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance・透明性・説明責任", checkedAt: researchedAt };
const ppc: ResearchSource = { id: "rollout-b20-ppc", label: "個人情報保護委員会 ガイドライン通則編", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "個人dataの安全管理・委託先監督", checkedAt: researchedAt };
const ipaDx: ResearchSource = { id: "rollout-b20-ipa-dx", label: "IPA DX動向2026", url: "https://www.ipa.go.jp/digital/chousa/dx-trend/dx-trend-2026.html", kind: "公的機関", scope: "DX・AI導入と成果測定・人材課題", checkedAt: researchedAt };
const metiCommerce: ResearchSource = { id: "rollout-b20-meti-commerce", label: "経済産業省 電子商取引に関する市場調査", url: "https://www.meti.go.jp/statistics/tyo/denshi_syogyo.html", kind: "公的機関", scope: "国内EC・デジタル商取引環境", checkedAt: researchedAt };
const fsaSustainability: ResearchSource = { id: "rollout-b20-fsa-sustainability", label: "金融庁 サステナビリティ情報の開示", url: "https://www.fsa.go.jp/policy/kaiji/sustainability-kaiji.html", kind: "公的機関", scope: "企業開示・比較可能性・内部統制", checkedAt: researchedAt };

function addSources(intelligence: CompanyPublicIntelligence, sources: ResearchSource[]) {
  const existing = new Set(intelligence.sources.map((source) => source.id));
  intelligence.sources.push(...sources.filter((source) => !existing.has(source.id)));
}

function milestone(intelligence: CompanyPublicIntelligence, year: string, label: string, detail: string, sourceId: string) {
  if (!intelligence.marketStatus.milestones.some((item) => item.label === label)) intelligence.marketStatus.milestones.push({ year, label, detail, sourceId });
}

function replaceStringsDeep(value: unknown, replacements: Array<[string, string]>) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      if (typeof item === "string") value[index] = replacements.reduce((text, [from, to]) => text.includes(to) ? text : text.split(from).join(to), item);
      else replaceStringsDeep(item, replacements);
    });
    return;
  }
  if (!value || typeof value !== "object") return;
  Object.entries(value as Record<string, unknown>).forEach(([key, item]) => {
    if (typeof item === "string") (value as Record<string, unknown>)[key] = replacements.reduce((text, [from, to]) => text.includes(to) ? text : text.split(from).join(to), item);
    else replaceStringsDeep(item, replacements);
  });
}

function patch(intelligence: CompanyPublicIntelligence, config: Config) {
  milestone(intelligence, config.founded, "創業", config.foundedDetail, config.companyId);
  milestone(intelligence, config.localYear, "日本市場の現状", config.localDetail, config.jobsId);
  applyStandard(intelligence, buildCompactPatch({
    slug: config.slug,
    leaderName: config.leader,
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
    classification: "未確認",
    displayLabel: config.displayLabel,
    officeDays: "対象求人なし",
    remoteOnly: "対象求人なし",
    flexibility: "他国求人・全社制度を将来の日本求人へ転用しない",
    goodFor: config.goodFor,
    cautionFor: config.cautionFor,
    unresolved: config.unresolved,
  }));
  intelligence.marketStatus.growthSummary = config.growthSummary;
  if (!intelligence.marketStatus.isPublic && config.privateVerdict) {
    intelligence.marketStatus.genbaVerdict = { headline: config.marketVerdict, body: config.privateVerdict };
  }
  intelligence.facts = config.facts;
  intelligence.customerProof = config.customerProof;
  intelligence.roleLens = config.roleLens;
  intelligence.companyStats = config.stats;
  intelligence.comparisonMap = config.comparisons;
  if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: config.customerProof[0]?.company ?? "国内公式事例", need: config.evidence, sourceId: config.customerId }];
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience[1] = { label: "国内顧客成果", value: config.customerProof[0]?.company ?? "確認不能", detail: config.evidence, sourceId: config.customerId };
  addSources(intelligence, config.sources);
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function patchIsland(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "island", leader: "Mike Fey", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.island.io/about",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.island.io/careers",
    founded: "2020", foundedDetail: "Mike FeyとDan Amigaが、workの中心であるbrowserへsecurity・IT・network controlを組み込むEnterprise Browserとして創業。",
    localYear: "2026", localDetail: "公式CareersはDallas、London、Tel Aviv・Glilotを拠点として掲載し、Japan・Tokyo求人は0件。APAC RemoteやSydney求人を日本求人へ含めない。",
    companyId: "rollout-island-company", jobsId: "rollout-island-jobs", financeId: "rollout-island-series-e", customerId: "rollout-island-customers", externalId: ipaThreats.id,
    targets: ["情報システム・セキュリティ責任者", "デジタルワークプレイス・EUC運用", "ゼロトラスト・SASE・DLP担当", "BYOD・委託先・M&A統合担当", "AIガバナンス・IT運用"],
    competitors: "Chrome Enterprise、Microsoft Edge for Business、Palo Alto Prisma Access Browser、VDI、SASE・DLP・ZTNA、managed deviceとpoint toolの組合せ",
    feature: "Enterprise Browserにaccess、data protection、network、application control、AI利用、IT operationsを組み込む。",
    advantage: "browser外のagent・VDI・proxyを重ねるのではなく、user・device・app・data・session contextを仕事の入口で統合する。",
    benefit: "BYOD・contractor onboarding、VDI cost、SaaS access、copy・download・upload、AI利用、support ticketを改善できる可能性がある。",
    evidence: "450 customersを公式発表するが、日本企業・日本拠点のnamed caseと定量成果は確認できない。global caseを国内成果へ転用しない。",
    marketVerdict: "結論：SaaS・remote work・生成AIでbrowserが主要control pointになる一方、日本法人・国内reference・現行Japan求人は未確認。category fitとJapan delivery readinessを分けて評価する。",
    marketParagraphs: ["SaaS、private app、AI、contractor、BYODが増えるほど、browserの外側へsecurity agentとnetwork controlを追加する運用は複雑になる。", "Buyerはsecure browserの名称より、existing device・SASEとの共存、user friction、policy granularity、data residency、support、3年TCOを求める。", "Genba分析：限定user群でVDI・device配布、access、copy・download、AI policy、ticket、latency、運用工数をbaseline比較する。"],
    cultureHeadline: "公式careersはcustomer mission、ownership、technical category creationを重視。現行Japan求人0件で日本固有条件は未確認。",
    displayLabel: "現行Japan求人なし・国内拠点未確認",
    goodFor: ["Enterprise Browserという新カテゴリーを売りたい", "SecurityとDigital Workplaceを横断したい", "将来のJapan entryを長期観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内named referenceを必須にする", "認識売上・利益開示を必須にする"],
    unresolved: [["Japan trigger", "APAC拡張意向はあるがJapan求人・拠点なし。", "Japan paid cohort、partner、pipeline、supportのどの条件で専任podを作る？"], ["Financials", "Series E 2.5億米ドル（約393.9億円）、valuation 48億米ドル（約7,562.9億円）。", "recognized revenue、ARR、gross margin、profit、FCF、NRRは？"], ["Platform fit", "browserへcontrolを統合。", "Chrome・Edge・VDI・SASEとの共存、migration、extension、performance、exitをどう検証する？"], ["Localization", "日本語UI・support・policy・data residencyは未確認。", "日本語、契約、support SLA、local partner、security reviewを誰が担う？"], ["Economics", "450 customersを公表。", "ACV、seat・usage、implementation、VDI・device削減、3年TCOの実績は？"]],
    growthSummary: "recognized revenue、ARR、profit、FCFは非公開。2025年Series E 2.5億米ドル（約393.9億円）、valuation 48億米ドル（約7,562.9億円）、累計調達約7.3億米ドル（約1,150.2億円）は資本・評価額で売上ではない。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-island-series-e"] },
      { label: "資本", value: "Series E 2.5億米ドル（約393.9億円）", detail: "valuation 48億米ドル（約7,562.9億円）。売上・profitではない。", sourceIds: ["rollout-island-series-e", fx.id] },
      { label: "規模", value: "450 customers・約500 employees", detail: "2025年公式発表。日本内訳・paid seat・retentionは非公開。", sourceIds: ["rollout-island-series-e"] },
      { label: "日本採用", value: "0件", detail: "公式CareersにJapan・Tokyoなし。", sourceIds: ["rollout-island-jobs"] },
    ],
    customerProof: [{ company: "国内named caseは確認不能", products: "Island Enterprise Browser", outcome: "日本企業・日本拠点の公式customer caseと定量成果を確認できない。", implication: "global customer数を国内tractionへ読み替えない。", sourceId: "rollout-island-customers" }],
    roleLens: { salesMotion: "現行Japan求人なし。将来はBYOD・contractor・SaaS access等の限定use caseでlandし、DLP、network、AI、IT operationsへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CIO、CISO、EUC、Network、Security、Privacy、HR、Procurementとpartnerを横断する想定。" },
    stats: { globalHeadcount: { value: "約500人", detail: "2025年Series E公式発表。", sourceId: "rollout-island-series-e" }, japanHeadcount: { value: "非公開", detail: "日本teamを確認できない。" }, japanOffice: { value: "未確認", detail: "公式Careersのoffice一覧にJapanなし。", sourceId: "rollout-island-jobs" }, japanSince: { value: "未確認", detail: "日本法人・office・正式進出年を確認できない。", sourceId: "rollout-island-jobs" } },
    comparisons: [{ arena: "Enterprise Browser", companies: ["Island", "Chrome Enterprise", "Microsoft Edge for Business", "Palo Alto Prisma Access Browser"], why: "browser control、security、management、ecosystem" }, { arena: "Secure Workspace", companies: ["Island", "VDI", "SASE・DLP", "managed device"], why: "user friction、data control、TCO、deployment" }],
    sources: [
      { id: "rollout-island-company", label: "Island About", url: "https://www.island.io/about", kind: "企業公式", scope: "会社・leadership・product", checkedAt: researchedAt },
      { id: "rollout-island-jobs", label: "Island Careers", url: "https://www.island.io/careers", kind: "企業公式", scope: "現行office・Japan求人0件", checkedAt: researchedAt },
      { id: "rollout-island-series-e", label: "Island Series E", url: "https://www.island.io/press/island-secures-250-million-as-valuation-continues-to-soar-to-nearly-5-billion", kind: "企業公式", scope: "funding・valuation・customer・employee規模", checkedAt: researchedAt },
      { id: "rollout-island-customers", label: "Island Customers", url: "https://www.island.io/customers", kind: "企業公式", scope: "global case・国内case未確認", checkedAt: researchedAt },
      { id: "rollout-island-platform", label: "Island Enterprise Platform", url: "https://www.island.io/press/new-island-enterprise-platform", kind: "企業公式", scope: "current platform", checkedAt: researchedAt },
      ipaThreats, metiAi, fx,
    ],
    privateVerdict: "Islandは450 customersと48億米ドル（約7,562.9億円）のvaluationを公表するが、recognized revenue・profit、日本法人・国内customer proof・現行Japan求人は未確認。APAC Remoteという地域名だけで日本からの応募可能性を補完しない。",
  });
}

function patchKlaviyo(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "klaviyo", leader: "Andrew Bialecki", leaderLabel: "Co-founder・Co-CEO", leaderUrl: "https://www.klaviyo.com/about",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.klaviyo.com/careers",
    founded: "2012", foundedDetail: "Andrew Bialeckiらがcustomer dataを所有し、B2C relationshipを直接改善するmarketing platformとしてBostonで創業。",
    localYear: "2026", localDetail: "公式Careers・Greenhouseで現行Japan・Tokyo求人を確認できない。Sydney・SingaporeのAPAC拠点を日本拠点へ読み替えない。",
    companyId: "rollout-klaviyo-company", jobsId: "rollout-klaviyo-jobs", financeId: "rollout-klaviyo-q1", customerId: "rollout-klaviyo-customers", externalId: metiCommerce.id,
    targets: ["マーケティング・Ecommerce責任者", "CRM・ライフサイクルマーケティング", "カスタマーサービス・CX", "データ・分析・CDP", "情報システム・セキュリティ・プライバシー・調達"],
    competitors: "Braze、Salesforce、Adobe、HubSpot、Iterable、Shopify・EC native marketing、CDP・email・SMS・serviceの組合せ",
    feature: "B2C CRMとしてcustomer data、Marketing、Service、analytics、AIをcommerce journeyへ統合する。",
    advantage: "profile・event・transaction dataとemail・SMS・service executionを同じcustomer contextでつなぎ、segmentからactionまで閉じる。",
    benefit: "repeat purchase、LTV、conversion、retention、service resolution、campaign production、data-team依存を改善できる可能性がある。",
    evidence: "196,000超のpaying customersを公表するが、日本企業・日本拠点のnamed official caseと定量成果は確認できない。",
    marketVerdict: "結論：国内ECとfirst-party customer engagementの重要性は高いが、Klaviyoの日本法人・国内reference・現行Japan求人は未確認。global成長とJapan readinessを分けて評価する。",
    marketParagraphs: ["EC、store、support、広告、email・SMSにcustomer dataが分散すると、獲得後のrelationshipとLTVを同じ指標で改善しにくい。", "Buyerはmessage配信数より、identity、consent、deliverability、日本語・channel coverage、data location、service統合、3年TCOを求める。", "Genba分析：一つのcohort・journeyでactivation、repeat、conversion、unsubscribe、service resolution、campaign工数、incremental liftをbaseline比較する。"],
    cultureHeadline: "公式careersはcustomer ownership、learning、high-growth executionを重視。現行Japan求人0件で日本固有条件は未確認。",
    displayLabel: "現行Japan求人なし・APACはSydney／Singapore",
    goodFor: ["B2C CRMとcommerce growthを横断したい", "dataとmarketing・service executionを一体で売りたい", "将来のJapan entryを長期観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内named referenceを必須にする", "日本語channel・supportの同等性を前提にする"],
    unresolved: [["Japan trigger", "APAC拠点はあるがJapan求人・法人なし。", "日本paid cohort、partner、pipeline、supportのどの条件で専任podを作る？"], ["Public economics", "Q1 2026は売上3.58億米ドル（約564.1億円）・GAAP営業利益170万米ドル（約2.7億円）。", "Japan寄与、NRR、gross margin、enterprise mix、Service cross-sellは？"], ["Localization", "日本語AI・UI・SMS・supportの範囲は未確認。", "機能、deliverability、carrier、consent、data residency、support SLAは？"], ["Competition", "Braze・Salesforce・Adobe・Shopify等と重なる。", "どのsegment・stack・use caseでwinし、implementationを誰が担う？"], ["Economics", "196,000超のpaying customersを公表。", "Japan ACV、pricing、message・profile usage、services、3年TCOは？"]],
    growthSummary: "Q1 2026売上3.580億米ドル（約564.1億円、前年比28%増）、GAAP営業利益170万米ドル（約2.7億円、margin 0.5%）。196,000超のpaying customers。",
    facts: [
      { label: "Q1 2026売上", value: "3.580億米ドル（約564.1億円）", detail: "前年比28%増。", sourceIds: ["rollout-klaviyo-q1", fx.id] },
      { label: "GAAP営業利益", value: "170万米ドル（約2.7億円）", detail: "Q1 2026、margin 0.5%。non-GAAP営業利益と分ける。", sourceIds: ["rollout-klaviyo-q1", fx.id] },
      { label: "顧客規模", value: "196,000超のpaying customers", detail: "2026年公式発表。日本内訳は非公開。", sourceIds: ["rollout-klaviyo-scale"] },
      { label: "日本採用", value: "0件", detail: "公式Careers・GreenhouseでJapan・Tokyoを確認できない。", sourceIds: ["rollout-klaviyo-jobs"] },
    ],
    customerProof: [{ company: "国内named caseは確認不能", products: "Klaviyo B2C CRM", outcome: "日本企業・日本拠点の公式customer caseと定量成果を確認できない。", implication: "196,000超のglobal paying customersを国内tractionへ読み替えない。", sourceId: "rollout-klaviyo-customers" }],
    roleLens: { salesMotion: "現行Japan求人なし。将来はMarketing・customer dataでlandし、Service・AI・multi-channelへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CMO、Ecommerce、CRM、Service、Data、IT、Privacy、Procurementとpartnerを横断する想定。" },
    stats: { globalHeadcount: { value: "2,000人超", detail: "公式Careers掲載値。", sourceId: "rollout-klaviyo-jobs" }, japanHeadcount: { value: "非公開", detail: "日本teamを確認できない。" }, japanOffice: { value: "未確認", detail: "Sydney・Singaporeは日本拠点ではない。", sourceId: "rollout-klaviyo-company" }, japanSince: { value: "未確認", detail: "日本法人・office・正式進出年を確認できない。", sourceId: "rollout-klaviyo-jobs" } },
    comparisons: [{ arena: "B2C CRM", companies: ["Klaviyo", "Braze", "Salesforce", "Adobe"], why: "customer data、journey、service、AI、enterprise governance" }, { arena: "Commerce Marketing", companies: ["Klaviyo", "HubSpot", "Iterable", "Shopify native tools"], why: "time-to-value、channel、deliverability、pricing" }],
    sources: [
      { id: "rollout-klaviyo-company", label: "Klaviyo About", url: "https://www.klaviyo.com/about", kind: "企業公式", scope: "会社・leadership・platform", checkedAt: researchedAt },
      { id: "rollout-klaviyo-jobs", label: "Klaviyo Careers・Greenhouse", url: "https://job-boards.greenhouse.io/klaviyojobs", kind: "企業公式", scope: "現行Japan・Tokyo求人0件", checkedAt: researchedAt },
      { id: "rollout-klaviyo-q1", label: "Klaviyo Q1 2026 Results", url: "https://investors.klaviyo.com/financials/quarterly-results/default.aspx", kind: "法定開示", scope: "revenue・operating income", checkedAt: researchedAt },
      { id: "rollout-klaviyo-scale", label: "Klaviyo Q2 2026 Results Announcement", url: "https://investors.klaviyo.com/news/news-details/2026/Klaviyo-to-Announce-Second-Quarter-2026-Results-on-August-5-2026/default.aspx", kind: "企業公式", scope: "paying customers・integrations", checkedAt: researchedAt },
      { id: "rollout-klaviyo-customers", label: "Klaviyo Customers", url: "https://www.klaviyo.com/customers", kind: "企業公式", scope: "global case・国内case未確認", checkedAt: researchedAt },
      metiCommerce, ppc, fx,
    ],
  });
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年4月30日終了のQ1 2026",
    metrics: [
      { label: "売上", value: "3.580億米ドル（約564.1億円）", change: "前年比28%増", interpretation: "B2C CRMのglobal成長は強いがJapan寄与は非公開。", sourceId: "rollout-klaviyo-q1" },
      { label: "GAAP営業利益", value: "170万米ドル（約2.7億円）", change: "margin 0.5%", interpretation: "成長とGAAP黒字を両立したがmarginは小さい。", sourceId: "rollout-klaviyo-q1" },
      { label: "顧客", value: "196,000超", change: "paying customers", interpretation: "global scaleで、日本paid customer数ではない。", sourceId: "rollout-klaviyo-scale" },
    ],
    growthDrivers: [{ title: "B2C CRMへの拡張", evidence: "Marketing、Data、Service、AIを統合。", japanMeaning: "日本ではchannel・language・privacy・partner readinessがcross-sellの前提。", sourceIds: ["rollout-klaviyo-company", ppc.id] }],
    risks: [{ title: "Japan GTM未確認", disclosedRisk: "現行Japan求人・拠点・国内caseを確認できない。", companyResponse: "Sydney・SingaporeでAPAC基盤を持つ。", genbaRead: "global成長を日本tractionへ直接帰属させない。", sourceIds: ["rollout-klaviyo-jobs", "rollout-klaviyo-company"] }],
    japanCommitment: { verdict: "観測段階", summary: "APAC拠点はあるがJapan専任体制を確認できない。", signals: [{ year: "2026", title: "現行Japan求人0件", detail: "公式Careers・Greenhouseで確認できない。", sourceIds: ["rollout-klaviyo-jobs"] }], unknowns: ["Japan売上・顧客数", "日本法人・責任者", "日本語・SMS・support範囲", "Japan hiring trigger"] },
    scenarios: [{ scenario: "基本", title: "APACからJapanをカバー", body: "Sydney・Singaporeとpartnerで需要を検証する。" }, { scenario: "上振れ", title: "専任Japan pod", body: "国内reference・partner・pipelineが立ち、Sales・Solutions・CSを採用する。" }, { scenario: "下振れ", title: "localizationが遅れる", body: "channel・privacy・競合bundleでJapan投資が後回しになる。" }],
    sourceIds: ["rollout-klaviyo-q1", "rollout-klaviyo-scale", "rollout-klaviyo-jobs", ppc.id],
  };
}

function patchLucanet(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "lucanet", leader: "Elias Apel", leaderLabel: "CEO", leaderUrl: "https://www.lucanet.com/en/about-us/",
    localName: "Makoto Yabushita", localLabel: "Country Manager Japan", localUrl: "https://www.lucanet.com/en/press-releases/lucanet-expands-to-japan-16-06-2026/",
    founded: "1999", foundedDetail: "Berlinでfinancial close・consolidationの複雑性を軽減するfinance softwareとして創業。",
    localYear: "2026", localDetail: "2026年6月に東京のlocal teamとCountry Manager Makoto Yabushita氏を公式発表。現行CareersでJapan・Tokyo求人は0件。",
    companyId: "rollout-lucanet-company", jobsId: "rollout-lucanet-jobs", financeId: "rollout-lucanet-japan", customerId: "rollout-lucanet-customers", externalId: fsaSustainability.id,
    targets: ["CFO・経理財務", "連結決算・管理会計", "FP&A・経営企画", "開示・ESG・税務・Treasury", "CIO・Finance Transformation・監査"],
    competitors: "SAP、Oracle、Anaplan、Workday Adaptive Planning、Board、Workiva、国内連結会計・予算管理、Excel・個別system",
    feature: "CFO Solution Platformでconsolidation、planning・xP&A、disclosure、ESG、lease、tax、treasury・cash、AI agentを統合する。",
    advantage: "close・planning・reportingを別々のspreadsheetやpoint toolで運用せず、finance data modelとworkflowを一つのplatformに置く。",
    benefit: "close time、manual adjustment、forecast cycle、data reconciliation、audit evidence、report productionを改善できる可能性がある。",
    evidence: "日本で既存顧客がいると公式発表するが、企業名・導入範囲・定量成果は非公開。ARR・顧客数を国内成果へ読み替えない。",
    marketVerdict: "結論：日本正式進出とlocal Country Managerは確認できるが、現行求人0件・国内named caseなし。CFO platformのglobal scaleとJapan delivery capacityを分けて評価する。",
    marketParagraphs: ["multi-entity、M&A、開示・ESG要求が増えるほど、close・planning・reportingをExcelと複数systemでつなぐ負荷が増える。", "Buyerは機能数より、local accounting・disclosure、ERP接続、migration、partner capacity、audit、AI control、3年TCOを求める。", "Genba分析：一つのclose・planning cycleで日数、adjustment、reconciliation、manual hours、forecast error、audit findingをbaseline比較する。"],
    cultureHeadline: "900人超・60超のnationalitiesを持つfinance software company。現行Japan求人0件で日本固有条件は未確認。",
    displayLabel: "東京local teamあり・現行Japan求人なし",
    goodFor: ["CFO transformationを専門にしたい", "finance dataとAI・workflowを横断したい", "日本市場立ち上げ後の再採用を観測したい"],
    cautionFor: ["今すぐ日本求人へ応募したい", "国内named定量caseを必須にする", "recognized revenue・利益開示を必須にする"],
    unresolved: [["Japan team", "東京local teamとCountry Managerを発表。", "Sales、Solution、Services、CS、partnerの人数と採用計画は？"], ["Financials", "ARR 2億ユーロ超（約363.3億円）を発表。", "recognized revenue、growth、gross margin、profit、FCF、NRRは？"], ["Customer proof", "既存日本顧客はいるがnamed caseなし。", "paid customer数、segment、go-live、close短縮、renewal、referenceabilityは？"], ["Localization", "global CFO platformを日本展開。", "会計・開示・税務、ERP、language、support、data residencyの対応範囲は？"], ["Partner economics", "Japan Country Managerがsales・CS・partnerを統括。", "direct/partner比、implementation owner、margin、capacity、3年TCOは？"]],
    growthSummary: "2026年6月にARR 2億ユーロ超（約363.3億円）と日本正式進出を発表。6,000社超（Careersは6,500社超）、900人超。ARRは売上ではなく、recognized revenue・profit・FCFは非公開。",
    facts: [
      { label: "事業固有指標", value: "ARR 2億ユーロ超（約363.3億円）", detail: "2026年6月公式発表。recognized revenueではない。", sourceIds: ["rollout-lucanet-japan", fx.id] },
      { label: "顧客規模", value: "6,000社超", detail: "Japan expansion発表。Careersは6,500社超で時点・定義差がある。", sourceIds: ["rollout-lucanet-japan", "rollout-lucanet-jobs"] },
      { label: "人員規模", value: "900人超", detail: "official careers掲載値。Japan人数は非公開。", sourceIds: ["rollout-lucanet-jobs"] },
      { label: "日本採用", value: "0件", detail: "現行CareersでJapan・Tokyo求人を確認できない。", sourceIds: ["rollout-lucanet-jobs"] },
    ],
    customerProof: [{ company: "日本の既存顧客（社名非公開）", products: "Lucanet CFO Solution Platform", outcome: "日本正式進出発表で既存顧客へのlocal support強化を説明。", implication: "企業名・導入範囲・定量成果・renewalは非公開。", sourceId: "rollout-lucanet-customers" }],
    roleLens: { salesMotion: "現行Japan求人なし。東京local teamがCFO・Financeへlandし、consolidationからplanning、disclosure、ESG、treasuryへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CFO、Accounting、FP&A、IT、Audit、Tax、ESG、Procurementとpartnerを横断する想定。" },
    stats: { globalHeadcount: { value: "900人超", detail: "公式Careers掲載値。", sourceId: "rollout-lucanet-jobs" }, japanHeadcount: { value: "非公開", detail: "東京local teamの人数は未開示。" }, japanOffice: { value: "東京", detail: "2026年6月の日本正式進出でlocal teamを発表。詳細住所は未確認。", sourceId: "rollout-lucanet-japan" }, japanSince: { value: "2026年", detail: "Country Managerと東京local teamを正式発表。", sourceId: "rollout-lucanet-japan" } },
    comparisons: [{ arena: "Financial Close・Consolidation", companies: ["Lucanet", "SAP", "Oracle", "国内連結会計"], why: "local accounting、close、audit、integration" }, { arena: "Planning・CFO Platform", companies: ["Lucanet", "Anaplan", "Workday Adaptive", "Board", "Workiva"], why: "planning、disclosure、ESG、treasury、TCO" }],
    sources: [
      { id: "rollout-lucanet-company", label: "Lucanet About", url: "https://www.lucanet.com/en/about-us/", kind: "企業公式", scope: "会社・leadership・platform", checkedAt: researchedAt },
      { id: "rollout-lucanet-japan", label: "Lucanet Japan Expansion", url: "https://www.lucanet.com/en/press-releases/lucanet-expands-to-japan-16-06-2026/", kind: "企業公式", scope: "Japan entry・leader・ARR・customer・employee規模", checkedAt: researchedAt },
      { id: "rollout-lucanet-jobs", label: "Lucanet Careers", url: "https://www.lucanet.com/en/careers/", kind: "企業公式", scope: "現行Japan求人0件・company scale", checkedAt: researchedAt },
      { id: "rollout-lucanet-customers", label: "Lucanet Japan Customer Statement", url: "https://www.lucanet.com/en/press-releases/lucanet-expands-to-japan-16-06-2026/", kind: "企業公式", scope: "既存日本顧客・names/outcomes非公開", checkedAt: researchedAt },
      { id: "rollout-lucanet-ai", label: "Lucanet Intelligence Inside", url: "https://www.lucanet.com/en/insights/ai-innovation/intelligence-inside-7-new-family-of-agents/", kind: "企業公式", scope: "current AI agent portfolio", checkedAt: researchedAt },
      fsaSustainability, ipaDx, fx,
    ],
    privateVerdict: "Lucanetは東京local team、Country Manager、ARR 2億ユーロ超（約363.3億円）を同時に発表し、日本投資の事実は明確。一方、現行求人、国内named case、recognized revenue・profit、Japan team規模は非公開。",
  });
  replaceStringsDeep(intelligence, [["2億ユーロ超", "2億ユーロ超（約363.3億円）"]]);
}

function patchMistral(intelligence: CompanyPublicIntelligence) {
  const aliases: ResearchSource[] = [
    { id: "mistral-ai-mistral-ai-growth", label: "Mistral AI Series C", url: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/", kind: "企業公式", scope: "funding・valuation", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-apac", label: "Mistral AI Singapore APAC Job", url: "https://jobs.ashbyhq.com/mistral.ai/d6dc75fc-714b-437c-8ff4-b43505151bd9", kind: "企業公式", scope: "Singapore APAC support", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-careers", label: "Mistral AI Careers", url: "https://jobs.ashbyhq.com/mistral.ai", kind: "企業公式", scope: "現行Japan求人0件", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-company", label: "Mistral AI", url: "https://mistral.ai/", kind: "企業公式", scope: "会社・products", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-external", label: "METI AI事業者ガイドライン", url: metiAi.url, kind: "公的機関", scope: "AI governance", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-customers", label: "Mistral AI News", url: "https://mistral.ai/news/", kind: "企業公式", scope: "global customer・partner announcements", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-trust", label: "Mistral AI Trust Center", url: "https://trust.mistral.ai/", kind: "企業公式", scope: "security・trust", checkedAt: researchedAt },
    { id: "mistral-ai-mistral-ai-linkedin", label: "Mistral AI LinkedIn", url: "https://www.linkedin.com/company/mistralai/", kind: "外部集計", scope: "company profile fallback", checkedAt: researchedAt },
  ];
  patch(intelligence, {
    slug: "mistral-ai", leader: "Arthur Mensch", leaderLabel: "Co-founder・CEO", leaderUrl: "https://mistral.ai/",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://jobs.ashbyhq.com/mistral.ai",
    founded: "2023", foundedDetail: "Arthur Mensch、Guillaume Lample、Timothée LacroixがParisでfrontier・open-weight AI companyとして創業。",
    localYear: "2026", localDetail: "公式AshbyにJapan・Tokyo求人は0件。SingaporeのAPAC求人でJapaneseをnice-to-haveとする例は、日本勤務地・Japan専任職を意味しない。",
    companyId: "rollout-mistral-company", jobsId: "rollout-mistral-jobs", financeId: "rollout-mistral-series-c", customerId: "rollout-mistral-customers", externalId: metiAi.id,
    targets: ["情報システム・技術・AI責任者", "AI・機械学習・データ基盤", "業務部門・製品・自動化", "セキュリティ・リスク・法務・AIガバナンス", "公共・規制産業・ソブリンAI"],
    competitors: "OpenAI、Anthropic、Google、Meta、Azure・AWS・Google Cloud、国内LLM・SI、open-source modelとprivate AI stack",
    feature: "frontier・open-weight models、API、Studio、Agents、Forge、Compute、private deploymentをfull stackで提供する。",
    advantage: "model accessだけでなく、custom model、evaluation、agent workflow、private・sovereign deployment、computeまで選択肢を持つ。",
    benefit: "AI workflowの品質、data control、deployment、latency・cost、vendor optionality、production化を改善できる可能性がある。",
    evidence: "ASML等のglobal strategic partnershipはあるが、日本企業・日本拠点のnamed production caseと定量成果は確認できない。",
    marketVerdict: "結論：full-stack・sovereign AIの需要は高いが、日本法人・国内reference・現行Japan求人は未確認。Singapore APAC activityをJapan進出へ読み替えない。",
    marketParagraphs: ["企業はAI pilotを増やす一方、proprietary data、evaluation、security、cost、owner、deploymentが分断しproduction化できない。", "Buyerはbenchmarkだけでなく、日本語gold set、grounding、guardrail、private deployment、residency、support、exit、3年TCOを求める。", "Genba分析：一つのworkflowでquality、human review、exception、latency、cost、security、active use、business outcomeをbaseline比較する。"],
    cultureHeadline: "frontier research、speed、technical ownership、European AI autonomyを重視。現行Japan求人0件で日本固有条件は未確認。",
    displayLabel: "現行Japan求人なし・Singapore APAC体制",
    goodFor: ["frontier modelとenterprise AIを横断したい", "private・sovereign deploymentを深めたい", "将来のJapan entryを長期観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内production referenceを必須にする", "recognized revenue・profit開示を必須にする"],
    unresolved: [["Japan trigger", "Singapore APAC基盤はあるがJapan求人・法人なし。", "日本pipeline、partner、language、supportのどの条件で専任podを作る？"], ["Financials", "Series C 17億ユーロ（約3,088.2億円）、valuation 117億ユーロ（約2兆1,254.2億円）。", "recognized revenue、ARR、gross margin、profit、FCF、customer concentrationは？"], ["Japanese quality", "multilingual modelを提供。", "日本語のgold set、RAG、tool use、safety、latency・costをどう測る？"], ["Deployment", "APIからprivate Computeまで提供。", "residency、subprocessor、GPU capacity、SLA、migration・exit、local supportは？"], ["Economics", "model・Studio・Forge・Computeへ拡張。", "pricing、services、partner margin、PoC-to-production、3年TCOは？"]],
    growthSummary: "2025年9月にSeries C 17億ユーロ（約3,088.2億円）、post-money valuation 117億ユーロ（約2兆1,254.2億円）を発表。資本・評価額であり、recognized revenue・ARR・profit・FCFは非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、operating・net income、FCFを確認できない。", sourceIds: ["rollout-mistral-series-c"] },
      { label: "資本", value: "Series C 17億ユーロ（約3,088.2億円）", detail: "post-money valuation 117億ユーロ（約2兆1,254.2億円）。売上ではない。", sourceIds: ["rollout-mistral-series-c", fx.id] },
      { label: "製品範囲", value: "ModelsからComputeまで", detail: "API、Studio、Agents、Forge、private infrastructureへ拡張。", sourceIds: ["rollout-mistral-company", "rollout-mistral-forge"] },
      { label: "日本採用", value: "0件", detail: "公式AshbyにJapan・Tokyoなし。", sourceIds: ["rollout-mistral-jobs"] },
    ],
    customerProof: [{ company: "国内named caseは確認不能", products: "Mistral AI Platform", outcome: "日本企業・日本拠点の公式production caseと定量成果を確認できない。", implication: "global partnershipやSingapore public-sector activityを国内成果へ読み替えない。", sourceId: "rollout-mistral-customers" }],
    roleLens: { salesMotion: "現行Japan求人なし。将来はmodel evaluationでlandし、Studio、Agents、Forge、private deployment、Computeへexpandするtechnical enterprise motionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CIO、CTO、AI・Data、Security、Legal、Business、Cloud・SI partnerを横断する想定。" },
    stats: { globalHeadcount: { value: "1,001〜5,000人規模", detail: "LinkedIn企業ページの外部集計レンジ。公式のcurrent employee絶対数ではない。", sourceId: "mistral-ai-mistral-ai-linkedin" }, japanHeadcount: { value: "非公開", detail: "日本teamを確認できない。" }, japanOffice: { value: "未確認", detail: "SingaporeはAPAC拠点でJapan officeではない。", sourceId: "rollout-mistral-jobs" }, japanSince: { value: "未確認", detail: "日本法人・office・正式進出年を確認できない。", sourceId: "rollout-mistral-jobs" } },
    comparisons: [{ arena: "Frontier Models", companies: ["Mistral AI", "OpenAI", "Anthropic", "Google"], why: "quality、cost、language、safety、tool use" }, { arena: "Open・Sovereign AI", companies: ["Mistral AI", "Meta", "国内LLM", "hyperscaler private AI"], why: "license、control、deployment、support、TCO" }],
    sources: [
      { id: "rollout-mistral-company", label: "Mistral AI", url: "https://mistral.ai/", kind: "企業公式", scope: "会社・leadership・products", checkedAt: researchedAt },
      { id: "rollout-mistral-jobs", label: "Mistral AI Ashby", url: "https://jobs.ashbyhq.com/mistral.ai", kind: "企業公式", scope: "現行Japan求人0件・Singapore APAC求人", checkedAt: researchedAt },
      { id: "rollout-mistral-series-c", label: "Mistral AI Series C", url: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/", kind: "企業公式", scope: "funding・valuation", checkedAt: researchedAt },
      { id: "rollout-mistral-forge", label: "Mistral AI Forge", url: "https://mistral.ai/news/forge/", kind: "企業公式", scope: "current enterprise model customization", checkedAt: researchedAt },
      { id: "rollout-mistral-customers", label: "Mistral AI News", url: "https://mistral.ai/news/", kind: "企業公式", scope: "global partnerships・国内case未確認", checkedAt: researchedAt },
      metiAi, fx, ...aliases,
    ],
    privateVerdict: "Mistral AIは17億ユーロ（約3,088.2億円）のSeries Cとfull-stack portfolioを持つが、recognized revenue・profit、日本法人・国内production case・現行Japan求人は未確認。APAC求人のJapanese nice-to-haveを日本求人へ補完しない。",
  });
  intelligence.marketStatus.milestones = intelligence.marketStatus.milestones.map((item) => item.label === "Series C" ? { ...item, detail: "17億ユーロ（約3,088.2億円）、post-money valuation 117億ユーロ（約2兆1,254.2億円）。", sourceId: "rollout-mistral-series-c" } : item);
  replaceStringsDeep(intelligence, [["€1.7B", "17億ユーロ（約3,088.2億円）"], ["€11.7B", "117億ユーロ（約2兆1,254.2億円）"]]);
}

function patchMonday(intelligence: CompanyPublicIntelligence) {
  patch(intelligence, {
    slug: "monday-com", leader: "Roy Mann・Eran Zinman", leaderLabel: "Co-founders・Co-CEOs", leaderUrl: "https://monday.com/about",
    localName: "最新責任者は確認不能", localLabel: "Japan leadership", localUrl: "https://monday.com/careers/",
    founded: "2012", foundedDetail: "Roy MannとEran ZinmanがWix社内の急成長・collaboration課題から生まれたdaPulseを独立企業として創業。",
    localYear: "2022–2026", localDetail: "2022年10月に東京・丸の内で本格参入。2026年8月17日の公式Careersは29求人・10拠点でJapan・Tokyo 0件。検索残存の旧Tokyo求人を現行扱いしない。",
    companyId: "rollout-monday-company", jobsId: "rollout-monday-jobs", financeId: "rollout-monday-q1", customerId: "rollout-monday-lixil", externalId: ipaDx.id,
    targets: ["情報システム・DX・業務改革", "PMO・プロジェクト・ポートフォリオ管理", "営業・CRM・レベニューオペレーション", "ITサービス・運用", "製品・開発・AI変革"],
    competitors: "Asana、Smartsheet、ClickUp、Microsoft Planner・Power Platform、Jira、Salesforce、ServiceNow、Notion、Excel・個別業務system",
    feature: "AI Work Platform上でwork management、CRM、service、dev、AI agent・automationを統合する。",
    advantage: "現場がboard・workflow・automationを組める柔軟性と、複数product・enterprise governanceを同じplatformで提供する。",
    benefit: "project visibility、handoff、cycle time、manual work、CRM adoption、service resolution、portfolio reportingを改善できる可能性がある。",
    evidence: "LIXIL等の国内official caseはあるが、公開成果は主に定性的。COVERの約100人・2年利用はadoption規模で、monday.com単独のROIではない。",
    marketVerdict: "結論：日本法人・東京office・国内customer proofはあるが、現行Japan求人0件で最新Japan leaderも確認不能。本社の高成長・黒字と日本採用の静かな局面を分けて見る。",
    marketParagraphs: ["部門ごとにspreadsheet、project、CRM、service、development toolが分断すると、責任・context・進捗・KPIの再入力が増える。", "Buyerはno-codeの自由度だけでなく、portfolio governance、integration、AI control、license sprawl、adoption、3年TCOを求める。", "Genba分析：一つのcross-functional workflowでcycle、handoff、manual hours、late task、active use、manager reporting、business outcomeをbaseline比較する。"],
    cultureHeadline: "公式Careersはhybridで、多くのteamが週3日officeとするが、現行Japan求人0件のため日本職へ転用しない。",
    displayLabel: "東京officeあり・現行Japan求人なし",
    goodFor: ["work managementからmulti-productへ拡張したい", "現場adoptionとenterprise governanceを横断したい", "日本組織の再採用を観測したい"],
    cautionFor: ["今すぐ日本求人へ応募したい", "最新Japan leaderの明示を必須にする", "国内定量ROIを必須にする"],
    unresolved: [["Japan organization", "2022年に東京office、2023年に別Country Managerを公式確認。", "現在のJapan leader、team人数、decision rights、採用再開条件は？"], ["Public economics", "Q1 2026売上3.513億米ドル（約553.5億円）・GAAP営業利益1,975万米ドル（約31.1億円）。", "Japan成長、NRR、enterprise mix、product別cross-sellは？"], ["Customer proof", "LIXIL等の国内caseは定性中心。", "Japan paid customers、renewal、active use、workflow KPI、referenceabilityは？"], ["Platform sprawl", "work management、CRM、service、dev、AIへ拡張。", "既存Microsoft・Atlassian・Salesforceとの棲み分け、governance、3年TCOは？"], ["Partner motion", "日本参入時からpartner重視。", "direct/partner比、services owner、pipeline credit、support SLA、implementation capacityは？"]],
    growthSummary: "Q1 2026売上3.513億米ドル（約553.5億円、前年比24%増）、GAAP営業利益1,975万米ドル（約31.1億円）、純利益2,803万米ドル（約44.2億円）、adjusted FCF 1.028億米ドル（約161.9億円、margin 29%）。",
    facts: [
      { label: "Q1 2026売上", value: "3.513億米ドル（約553.5億円）", detail: "前年比24%増。", sourceIds: ["rollout-monday-q1", fx.id] },
      { label: "GAAP営業利益", value: "1,975万米ドル（約31.1億円）", detail: "純利益2,803万米ドル（約44.2億円）。", sourceIds: ["rollout-monday-q1", fx.id] },
      { label: "Adjusted FCF", value: "1.028億米ドル（約161.9億円）", detail: "margin 29%。GAAP incomeと区別する。", sourceIds: ["rollout-monday-q1", fx.id] },
      { label: "顧客・日本採用", value: "250,000超・Japan求人0件", detail: "global customer数と現行CareersのJapan状況。", sourceIds: ["rollout-monday-q1", "rollout-monday-jobs"] },
    ],
    customerProof: [
      { company: "LIXIL", products: "monday work management", outcome: "部門横断のworkflow可視化と協働の国内事例を公開。", implication: "vendor-selected caseで、削減率・financial ROIは非公開。", sourceId: "rollout-monday-lixil" },
      { company: "COVER", products: "monday.com", outcome: "約100人が2年利用したadoption規模を公式caseで確認。", implication: "利用規模で、monday.com単独のbefore/after ROIではない。", sourceId: "rollout-monday-customers" },
    ],
    roleLens: { salesMotion: "現行Japan求人なし。既存日本体制はwork managementでlandし、CRM、service、dev、AI、enterprise governanceへexpandするmulti-product motionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CIO、DX、PMO、Sales、Service、Development、Security、Procurementとpartnerを横断する想定。" },
    stats: { globalHeadcount: { value: "非公開", detail: "今回の一次確認でcurrent employee絶対数を確定していない。" }, japanHeadcount: { value: "非公開", detail: "日本team人数は未開示。" }, japanOffice: { value: "東京・丸の内", detail: "2022年10月の日本本格参入で公式発表。", sourceId: "rollout-monday-japan" }, japanSince: { value: "2022年", detail: "東京officeとpartner-led GTMで本格参入。", sourceId: "rollout-monday-japan" } },
    comparisons: [{ arena: "Work Management", companies: ["monday.com", "Asana", "Smartsheet", "ClickUp", "Microsoft"], why: "flexibility、adoption、portfolio、governance" }, { arena: "Business Platforms", companies: ["monday.com", "Atlassian", "Salesforce", "ServiceNow", "Power Platform"], why: "CRM・service・dev・AI、integration、TCO" }],
    sources: [
      { id: "rollout-monday-company", label: "monday.com About", url: "https://monday.com/about", kind: "企業公式", scope: "会社・leadership・platform", checkedAt: researchedAt },
      { id: "rollout-monday-jobs", label: "monday.com Careers", url: "https://monday.com/careers/", kind: "企業公式", scope: "現行29求人・10拠点・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-monday-q1", label: "monday.com Q1 2026 Results", url: "https://ir.monday.com/news-and-events/news-releases/news-details/2026/monday-com-Announces-First-Quarter-2026-Results/default.aspx", kind: "法定開示", scope: "revenue・profit・FCF・customer scale", checkedAt: researchedAt },
      { id: "rollout-monday-japan", label: "monday.com Japan Launch", url: "https://monday.com/blog/ja/news/monday-com-launches-in-japan/", kind: "企業公式", scope: "日本本格参入・東京office", checkedAt: researchedAt },
      { id: "rollout-monday-lixil", label: "monday.com LIXIL Case", url: "https://monday.com/lang/ja/customers/lixil", kind: "企業公式", scope: "国内customer proof", checkedAt: researchedAt },
      { id: "rollout-monday-customers", label: "monday.com Customer Stories", url: "https://monday.com/customers", kind: "企業公式", scope: "国内・global cases", checkedAt: researchedAt },
      ipaDx, fx,
    ],
  });
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年3月31日終了のQ1 2026",
    metrics: [
      { label: "売上", value: "3.513億米ドル（約553.5億円）", change: "前年比24%増", interpretation: "高成長を継続するがJapan寄与は非公開。", sourceId: "rollout-monday-q1" },
      { label: "GAAP営業利益", value: "1,975万米ドル（約31.1億円）", change: "黒字", interpretation: "成長とGAAP営業黒字を両立。", sourceId: "rollout-monday-q1" },
      { label: "Adjusted FCF", value: "1.028億米ドル（約161.9億円）", change: "margin 29%", interpretation: "cash generationは強いがnon-GAAP調整値。", sourceId: "rollout-monday-q1" },
    ],
    growthDrivers: [{ title: "AI Work Platform・multi-product", evidence: "work managementからCRM、service、dev、AIへ拡張。", japanMeaning: "日本ではpartner delivery、governance、existing suiteとの棲み分けが成長条件。", sourceIds: ["rollout-monday-company", "rollout-monday-japan"] }],
    risks: [{ title: "Japan hiringの静かな局面", disclosedRisk: "現行CareersにJapan・Tokyo求人0件。", companyResponse: "2022年に東京officeとpartner-led GTMを開始。", genbaRead: "本社成長を日本採用・territoryへ直接帰属させない。", sourceIds: ["rollout-monday-jobs", "rollout-monday-japan"] }],
    japanCommitment: { verdict: "参入済み・採用は静かな局面", summary: "日本法人・東京office・国内caseはあるが、現行求人0件で最新leaderは未確認。", signals: [{ year: "2022", title: "日本本格参入", detail: "東京officeとpartner-led GTM。", sourceIds: ["rollout-monday-japan"] }, { year: "2026", title: "現行Japan求人0件", detail: "公式Careers 29求人・10拠点にJapanなし。", sourceIds: ["rollout-monday-jobs"] }], unknowns: ["current Japan leader", "Japan売上・顧客数", "採用再開条件", "product別adoption・renewal"] },
    scenarios: [{ scenario: "基本", title: "partner-led拡張", body: "既存顧客へmulti-productを広げ、採用は抑制する。" }, { scenario: "上振れ", title: "日本pod再拡張", body: "enterprise・AI・service案件が増え、Sales・Solutions・CSを再採用する。" }, { scenario: "下振れ", title: "suite競争で停滞", body: "Microsoft・Atlassian・Salesforce等とのbundle競争でlocal投資が弱まる。" }],
    sourceIds: ["rollout-monday-q1", "rollout-monday-japan", "rollout-monday-jobs", "rollout-monday-lixil"],
  };
}

export function applyCompanyPageRolloutBatchTwenty(records: Record<string, CompanyPublicIntelligence>) {
  if (records.island) patchIsland(records.island);
  if (records.klaviyo) patchKlaviyo(records.klaviyo);
  if (records.lucanet) patchLucanet(records.lucanet);
  if (records["mistral-ai"]) patchMistral(records["mistral-ai"]);
  if (records["monday-com"]) patchMonday(records["monday-com"]);
}
