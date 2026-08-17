import type { CompanyPublicIntelligence, ResearchSource } from "@/lib/company-public-intelligence";
import { applyStandard, buildCompactPatch, rolloutResearchedAt as researchedAt } from "@/lib/company-page-rollout-standard-helpers";

const fx: ResearchSource = { id: "rollout-b21-fx", label: "税関 2026年8月16日〜22日外国為替相場", url: "https://www.customs.go.jp/tetsuzuki/kawase/kawase2026/kouji-rate20260816-20260822.pdf", kind: "公的機関", scope: "円換算（1米ドル=157.56円）", checkedAt: researchedAt };
const ipaModernization: ResearchSource = { id: "rollout-b21-ipa-modernization", label: "IPA レガシーシステムモダン化委員会", url: "https://www.ipa.go.jp/disc/committee/legacy-system-modernization-comittee.html", kind: "公的機関", scope: "legacy刷新・内製化・生成AI活用", checkedAt: researchedAt };
const metiAi: ResearchSource = { id: "rollout-b21-meti-ai", label: "経済産業省 AI事業者ガイドライン第1.2版", url: "https://www.meti.go.jp/shingikai/mono_info_service/ai_shakai_jisso/20260331_report.html", kind: "公的機関", scope: "AI governance・透明性・説明責任", checkedAt: researchedAt };
const ppc: ResearchSource = { id: "rollout-b21-ppc", label: "個人情報保護委員会 ガイドライン通則編", url: "https://www.ppc.go.jp/personalinfo/legal/guidelines_tsusoku/", kind: "公的機関", scope: "個人dataの安全管理・委託先監督", checkedAt: researchedAt };
const digitalGov: ResearchSource = { id: "rollout-b21-digital-gov", label: "経済産業省 デジタルガバナンス・コード3.0", url: "https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc.html", kind: "公的機関", scope: "DX施策のKPI・経営とITの協働", checkedAt: researchedAt };

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

type BaseConfig = {
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
  ids: { company: string; jobs: string; finance: string; customer: string; external: string };
  targets: string[];
  competitors: string;
  feature: string;
  advantage: string;
  benefit: string;
  evidence: string;
  verdict: string;
  paragraphs: string[];
  culture: string;
  display: string;
  goodFor: string[];
  cautionFor: string[];
  unresolved: string[][];
  growth: string;
  facts: CompanyPublicIntelligence["facts"];
  proof: CompanyPublicIntelligence["customerProof"];
  role: CompanyPublicIntelligence["roleLens"];
  stats: CompanyPublicIntelligence["companyStats"];
  comparisons: CompanyPublicIntelligence["comparisonMap"];
  sources: ResearchSource[];
  privateVerdict?: string;
};

function patchBase(intelligence: CompanyPublicIntelligence, config: BaseConfig) {
  milestone(intelligence, config.founded, "創業", config.foundedDetail, config.ids.company);
  milestone(intelligence, config.localYear, "日本市場の現状", config.localDetail, config.ids.jobs);
  applyStandard(intelligence, buildCompactPatch({
    slug: config.slug,
    leaderName: config.leader,
    leaderLabel: config.leaderLabel,
    leaderUrl: config.leaderUrl,
    localName: config.localName,
    localLabel: config.localLabel,
    localUrl: config.localUrl,
    companyId: config.ids.company,
    jobId: config.ids.jobs,
    customersId: config.ids.customer,
    externalId: config.ids.external,
    financeId: config.ids.finance,
    targets: config.targets,
    competitors: config.competitors,
    feature: config.feature,
    advantage: config.advantage,
    benefit: config.benefit,
    evidence: config.evidence,
    marketVerdict: config.verdict,
    marketParagraphs: config.paragraphs,
    cultureHeadline: config.culture,
    classification: "未確認",
    displayLabel: config.display,
    officeDays: "対象求人なし",
    remoteOnly: "対象求人なし",
    flexibility: "他国求人・全社制度を将来の日本求人へ転用しない",
    goodFor: config.goodFor,
    cautionFor: config.cautionFor,
    unresolved: config.unresolved,
  }));
  intelligence.marketStatus.growthSummary = config.growth;
  if (!intelligence.marketStatus.isPublic) {
    intelligence.marketStatus.ipoOutlookSummary = intelligence.marketStatus.ipoOutlookSummary || "非公開企業。IPO計画・時期は公式未公表で、資金調達・valuationを上場確度へ読み替えない。";
    intelligence.marketStatus.genbaVerdict = { headline: config.verdict, body: config.privateVerdict ?? config.verdict };
  }
  intelligence.facts = config.facts;
  intelligence.customerProof = config.proof;
  intelligence.roleLens = config.role;
  intelligence.companyStats = config.stats;
  intelligence.comparisonMap = config.comparisons;
  if (intelligence.salesMarketOutlook) intelligence.salesMarketOutlook.cases = [{ company: config.proof[0]?.company ?? "国内公式事例は確認不能", need: config.evidence, sourceId: config.ids.customer }];
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.tokyoExperience[1] = { label: "国内顧客成果", value: config.proof[0]?.company ?? "確認不能", detail: config.evidence, sourceId: config.ids.customer };
  addSources(intelligence, config.sources);
  intelligence.sources = intelligence.sources.map((source) => ({ ...source, checkedAt: researchedAt }));
}

function patchMongoDb(intelligence: CompanyPublicIntelligence) {
  patchBase(intelligence, {
    slug: "mongodb", leader: "Chirantan “CJ” Desai", leaderLabel: "President・CEO", leaderUrl: "https://www.mongodb.com/company/leadership",
    localName: "MongoDB Japan合同会社", localLabel: "日本法人", localUrl: "https://www.mongodb.com/ja-jp",
    founded: "2007", foundedDetail: "10genとして創業し、developer向けdocument databaseからAtlas、Search、Vector Search、AI retrievalを含むapplication data platformへ拡張。",
    localYear: "2026", localDetail: "日本法人と国内顧客事例は継続する一方、公式Careersの全399求人・locations一覧にJapan・Tokyoの現行求人は0件。検索残存の旧求人を現行扱いしない。",
    ids: { company: "rollout-mongodb-leadership", jobs: "rollout-mongodb-jobs", finance: "rollout-mongodb-q1", customer: "mdb-plaid-atlas", external: ipaModernization.id },
    targets: ["CIO・CTO・企業アーキテクチャ責任者", "アプリケーション開発・プラットフォーム基盤", "データ・AI・検索基盤", "クラウド・SRE・データベース運用", "セキュリティ・調達・業務システム責任者"],
    competitors: "PostgreSQL・pgvector、Oracle、Microsoft SQL・Cosmos DB、AWS DynamoDB・DocumentDB、Google Cloud database、Elastic、Databricks・Snowflake、内製open source",
    feature: "MongoDB Atlasでdocument database、operational data、search、vector search、stream processing、multi-cloud operationsを統合する。",
    advantage: "柔軟なdocument modelとdeveloper experienceを起点に、transactional workloadとsearch・AI retrievalを同じapplication data layerへ寄せる。",
    benefit: "schema変更、release lead time、DB・search同期、SRE工数、availability、query performance、AI groundingを改善できる可能性がある。",
    evidence: "プレイドは毎秒数万件の読み書きとSRE負荷軽減、Toyota Connectedは99.99%可用性・最短3秒処理を公表。ただしvendor-hosted caseで単独因果を一般化しない。",
    verdict: "結論：日本法人・国内enterprise proof・公開財務は強い一方、現行Japan求人は0件。Atlas・AI成長と日本採用の静かな局面を分け、territory再投資条件を確認する。",
    paragraphs: ["legacy core、cloud別database、search、AI retrievalが分断すると、application変更のたびにdata移動・schema・operationsがbottleneckになる。", "BuyerはNoSQLの名称より、actual workloadでのperformance、consistency、migration、security、data location、availability、cloud cost、skill portabilityを求める。", "Genba分析：一つのmodernization・AI use caseでrelease lead time、DB運用工数、latency、incident、availability、migration risk、3年TCOをbaseline比較する。"],
    culture: "公式CareersはThink Big, Build Together、成長支援とrole別working modelを重視。現行Japan求人0件のため日本職の勤務条件は確認不能。",
    display: "日本法人・国内事例あり／現行Japan求人なし",
    goodFor: ["database modernizationとAI data layerを横断したい", "developer-led adoptionからenterprise expansionを学びたい", "公開企業の数字でGTM仮説を検証したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "単一cloud・relational標準だけで進めたい", "経営・営業体制の変化を避けたい"],
    unresolved: [["Japan hiring", "国内法人・顧客proofはあるが現行求人0件。", "Japanのteam人数、採用再開条件、territory coverage、installed baseは？"], ["Public economics", "Q1 FY2027売上は25%増、GAAP営業赤字とpositive FCFが併存。", "Japan売上、Atlas mix、consumption predictability、gross margin、renewalは？"], ["Migration", "Relational・DocumentDB・Elastic等からの置換を訴求。", "migration effort、downtime、data validation、rollback、customer-side skillsは？"], ["Competition", "PostgreSQL・hyperscaler・search・data platformと競合。", "segment別win rate、primary loss reason、discount、multi-product attachは？"], ["Role economics", "対象求人なし。", "再採用時のquota、OTE、ramp、attainment、SE・CS coverage、partner creditは？"]],
    growth: "Q1 FY2027売上6.876億米ドル（約1,083.4億円、前年比25%増）。GAAP営業損失2,480万米ドル（約39.1億円の赤字）、純利益440万米ドル（約6.9億円）、FCF 1.975億米ドル（約311.2億円）。RPO 14.586億米ドル（約2,298.2億円）は将来契約指標で売上ではない。",
    facts: [
      { label: "Q1 FY2027売上", value: "6.876億米ドル（約1,083.4億円）", detail: "前年比25%増。subscriptionは6.661億米ドル。", sourceIds: ["rollout-mongodb-q1", fx.id] },
      { label: "GAAP稼ぐ力", value: "営業損失2,480万米ドル（約39.1億円）", detail: "純利益440万米ドル（約6.9億円）。non-GAAP利益と分ける。", sourceIds: ["rollout-mongodb-q1", fx.id] },
      { label: "FCF・契約残", value: "FCF 1.975億米ドル（約311.2億円）", detail: "RPO 14.586億米ドル（約2,298.2億円）は売上ではない。", sourceIds: ["rollout-mongodb-q1", fx.id] },
      { label: "従業員・日本採用", value: "5,636人・Japan求人0件", detail: "従業員は2026年1月末。求人は2026年8月17日の公式一覧。", sourceIds: ["rollout-mongodb-10k", "rollout-mongodb-jobs"] },
    ],
    proof: [
      { company: "プレイド", products: "MongoDB Atlas", outcome: "毎秒数万件の読み書きを支え、DB管理・拡張・backupのSRE負荷を軽減。", implication: "運用負荷と開発速度の国内proofだが、削減率・financial ROIは非公開。", sourceId: "mdb-plaid-atlas" },
      { company: "Toyota Connected", products: "MongoDB Atlas", outcome: "99.99%可用性と最短3秒のdata processingを公表。", implication: "特定systemのvendor caseで、全workloadへの保証ではない。", sourceId: "mdb-toyota-connected-atlas" },
    ],
    role: { salesMotion: "現行Japan求人なし。既存のdeveloper・Atlas consumptionからmodernization、search、vector、AI applicationへexpandするEnterprise motionが想定される。", compensation: "対象求人なし。日本のbase・OTE・equityは確認不能。", quota: "Japan quota、ACV、cycle、attainment、consumption creditは非公開。", collaboration: "Developer、Architecture、Data・AI、Cloud・SRE、Security、Finance、Procurementとpartnerを横断する想定。" },
    stats: { globalHeadcount: { value: "5,636人", detail: "2026年1月31日時点の10-K。", sourceId: "rollout-mongodb-10k" }, japanHeadcount: { value: "非公開", detail: "日本法人のcurrent employee数は未開示。" }, japanOffice: { value: "東京", detail: "日本法人は確認済み。現住所・勤務頻度は求人0件のため補完しない。", sourceId: "rollout-mongodb-japan" }, japanSince: { value: "確認済み", detail: "日本法人・日本語site・国内顧客事例を確認。正式な初営業年は今回確定していない。", sourceId: "rollout-mongodb-japan" } },
    comparisons: [{ arena: "Application Database", companies: ["MongoDB", "PostgreSQL", "Oracle", "Microsoft", "AWS"], why: "data model、transaction、performance、operations、cost" }, { arena: "AI Retrieval・Search", companies: ["MongoDB", "Elastic", "Pinecone", "Databricks", "Snowflake"], why: "operational dataとの一体性、retrieval quality、governance、TCO" }],
    sources: [
      { id: "rollout-mongodb-leadership", label: "MongoDB Leadership", url: "https://www.mongodb.com/company/leadership", kind: "企業公式", scope: "current CEO・leadership", checkedAt: researchedAt },
      { id: "rollout-mongodb-jobs", label: "MongoDB Careers All Jobs", url: "https://www.mongodb.com/company/careers/see-jobs", kind: "企業公式", scope: "現行399求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-mongodb-q1", label: "MongoDB Q1 FY2027 Results", url: "https://investors.mongodb.com/news-releases/news-release-details/mongodb-inc-announces-first-quarter-fiscal-2027-financial", kind: "法定開示", scope: "revenue・profit・FCF・RPO", checkedAt: researchedAt },
      { id: "rollout-mongodb-10k", label: "MongoDB FY2026 10-K", url: "https://www.sec.gov/Archives/edgar/data/1441816/000162828026016799/mdb-20260131.htm", kind: "法定開示", scope: "従業員・business・risk", checkedAt: researchedAt },
      { id: "rollout-mongodb-japan", label: "MongoDB 日本公式", url: "https://www.mongodb.com/ja-jp", kind: "企業公式", scope: "日本法人・製品・国内展開", checkedAt: researchedAt },
      ipaModernization, metiAi, fx,
    ],
  });
  milestone(intelligence, "2015以前", "日本事業開始を確認", "プレイドが2015年からMongoDBを利用。日本法人の正式な営業開始年は今回の公式確認で確定していない。", "mdb-plaid-atlas");
  intelligence.marketStatus.capitalMarketRead = {
    asOf: "2026年4月30日終了のQ1 FY2027",
    metrics: [
      { label: "売上", value: "6.876億米ドル（約1,083.4億円）", change: "前年比25%増", interpretation: "Atlasを中心に成長するがJapan寄与は非公開。", sourceId: "rollout-mongodb-q1" },
      { label: "GAAP営業損失", value: "2,480万米ドル（約39.1億円）", change: "前年より赤字縮小", interpretation: "純利益は黒字でも営業段階は赤字。", sourceId: "rollout-mongodb-q1" },
      { label: "FCF", value: "1.975億米ドル（約311.2億円）", change: "前年1.059億米ドル", interpretation: "cash generationは強いが四半期変動に留意。", sourceId: "rollout-mongodb-q1" },
    ],
    growthDrivers: [{ title: "Atlas・AI application data layer", evidence: "Atlas売上は前年比29%超、LangChain等とAI agent向け統合を拡張。", japanMeaning: "日本ではlegacy modernizationとAI groundingを一つのbusiness caseへまとめられるかが条件。", sourceIds: ["rollout-mongodb-q1", "mdb-atlas-10-years"] }],
    risks: [{ title: "競争と日本採用の静かな局面", disclosedRisk: "database・cloud・search・AI platformの競争は強く、現行Japan求人は0件。", companyResponse: "Atlas機能とglobal GTM leadershipを拡張。", genbaRead: "本社成長をJapan territory・quotaへ直接帰属させない。", sourceIds: ["rollout-mongodb-10k", "rollout-mongodb-jobs"] }],
    japanCommitment: { verdict: "参入済み・採用は静かな局面", summary: "日本法人・国内caseはあるが、公式現行Japan求人は0件。", signals: [{ year: "2015〜", title: "国内Atlas事例", detail: "プレイドは2015年から利用。", sourceIds: ["mdb-plaid-atlas"] }, { year: "2026", title: "現行求人0件", detail: "公式全求人・locationsにJapanなし。", sourceIds: ["rollout-mongodb-jobs"] }], unknowns: ["Japan売上・顧客数", "current Japan leadership", "採用再開条件", "quota・attainment"] },
    scenarios: [{ scenario: "基本", title: "installed base拡張", body: "Atlas consumption、modernization、AI workloadへ拡張する。" }, { scenario: "上振れ", title: "AI基盤需要で再採用", body: "Japan pipelineが増えSales・Solutions・CSを再採用する。" }, { scenario: "下振れ", title: "standard database競争", body: "PostgreSQL・hyperscaler等との競争でlocal投資が伸びない。" }],
    sourceIds: ["rollout-mongodb-q1", "rollout-mongodb-10k", "rollout-mongodb-jobs", "mdb-plaid-atlas"],
  };
  replaceStringsDeep(intelligence, [["$24", "24米ドル（約3,781円）"], ["$100K", "10万米ドル（約1,575.6万円）"]]);
}

function patchPinecone(intelligence: CompanyPublicIntelligence) {
  patchBase(intelligence, {
    slug: "pinecone", leader: "Edo Liberty", leaderLabel: "Founder・CEO", leaderUrl: "https://www.pinecone.io/about/",
    localName: "公開情報で確認不能", localLabel: "Japan法人・責任者", localUrl: "https://www.pinecone.io/careers/",
    founded: "2019", foundedDetail: "AWSのAI Lab責任者だったEdo Libertyが、vector searchをdeveloperがproductionで使えるmanaged databaseとして創業。",
    localYear: "2026", localDetail: "SingaporeにAsia初のserverless regionを展開する一方、公式Careersの現行5求人はUS中心でJapan・Tokyo 0件。New York・Tel Aviv以外のofficeを補完しない。",
    ids: { company: "rollout-pinecone-company", jobs: "rollout-pinecone-jobs", finance: "rollout-pinecone-series-b", customer: "rollout-pinecone-customers", external: metiAi.id },
    targets: ["CTO・技術部門責任者", "AI・機械学習・検索基盤", "データ基盤・アーキテクチャ", "製品・AIアプリケーション責任者", "セキュリティ・プライバシー・調達"],
    competitors: "Weaviate、Qdrant、Zilliz・Milvus、pgvector、Elastic、MongoDB Atlas Vector Search、OpenSearch、Databricks・Snowflake・hyperscaler native、内製ANN index",
    feature: "managed vector database、Assistant、Inference・RerankとNexus knowledge engineでAI applicationのretrieval・memoryを提供する。",
    advantage: "vector searchのoperational burdenをmanaged serviceへ移し、embedding・rerank・agent knowledge accessを一つのdeveloper workflowへ寄せる。",
    benefit: "retrieval quality、latency、scale、index運用、developer lead time、agent回答のgroundingを改善できる可能性がある。",
    evidence: "公式customer pageは三菱電機の採用名を掲載するが国内のsystem・成果は非公開。Glaspの5倍cost saving等はglobal vendor caseでJapanへ外挿しない。",
    verdict: "結論：vector database categoryとAsia regionは進展したが、日本法人・専任求人・国内定量caseは未確認。Singapore infrastructure readinessをJapan GTM readinessへ読み替えない。",
    paragraphs: ["RAG・agentが増えるほど、document・permission・freshness・retrieval evaluation・production latencyを一貫して運用する必要がある。", "Buyerはvector benchmarkだけでなく、hybrid search、rerank、metadata filter、data region、security、observability、cost predictability、model portabilityを求める。", "Genba分析：自社gold setでrecall・precision、answer quality、p95 latency、index freshness、operator hours、storage・query costを比較する。"],
    culture: "公式CareersはBe a pro / Be yourself / Be a friendとhybrid workforceを掲げるが、現行Japan求人0件で日本固有条件は未確認。",
    display: "Asia regionあり・現行Japan求人／拠点なし",
    goodFor: ["AI retrieval infrastructureを深く扱いたい", "developer-first category creationが好き", "将来のJapan entryを長期観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内delivery・supportを必須にする", "認識売上・利益の開示を必須にする"],
    unresolved: [["Japan trigger", "Singapore regionはあるがJapan求人・法人なし。", "Japan workload、paid cohort、partner、pipelineのどの条件で専任podを作る？"], ["Private economics", "2023年Series B 1億米ドル（約157.6億円）、valuation 7.5億米ドル（約1,181.7億円）。", "recognized revenue、ARR、gross margin、burn、NRR、enterprise mixは？"], ["Customer proof", "三菱電機名は掲載するが内容・KPIなし。", "国内production workload、scale、referenceability、support ownerは？"], ["Technology fit", "Nexus、Database、Assistant、Inferenceへ拡張。", "retrieval quality、freshness、permissions、DR、exit、costをどう実測する？"], ["Competition", "database・search・warehouse nativeと競合。", "workload別win rate、primary loss、pricing、migration、lock-inは？"]],
    growth: "recognized revenue、ARR、operating・net income、FCFは非公開。2023年Series B 1億米ドル（約157.6億円）、valuation 7.5億米ドル（約1,181.7億円）は資本・評価額で売上ではない。2026年Nexusをpublic preview。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、profit、FCFを確認できない。", sourceIds: ["rollout-pinecone-series-b"] },
      { label: "資本", value: "Series B 1億米ドル（約157.6億円）", detail: "valuation 7.5億米ドル（約1,181.7億円）。売上ではない。", sourceIds: ["rollout-pinecone-series-b", fx.id] },
      { label: "利用規模", value: "9,000超customers・80万超developers", detail: "既存公式掲載値。定義・Japan内訳・paid mixは非公開。", sourceIds: ["rollout-pinecone-company"] },
      { label: "日本採用", value: "0件", detail: "公式Careersの現行5求人にJapan・Tokyoなし。", sourceIds: ["rollout-pinecone-jobs"] },
    ],
    proof: [{ company: "三菱電機", products: "Pinecone", outcome: "公式customer pageに利用企業として掲載。", implication: "国内の対象system、production scale、定量成果は非公開で、named adoption以上へ広げない。", sourceId: "rollout-pinecone-customers" }],
    role: { salesMotion: "現行Japan求人なし。将来はRAG・agentのproduction use caseでlandし、Database、rerank、Assistant、Nexusへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "CTO、AI・ML、Data Platform、Product、Security、Legal、Procurementとcloud・SI partnerを横断する想定。" },
    stats: { globalHeadcount: { value: "201〜500人規模", detail: "LinkedIn企業ページの外部レンジで、公式在籍数ではない。", sourceId: "rollout-pinecone-linkedin" }, japanHeadcount: { value: "非公開", detail: "日本teamを確認できない。" }, japanOffice: { value: "未確認", detail: "公式CareersはNew York・Tel Avivをofficeとして掲載。", sourceId: "rollout-pinecone-jobs" }, japanSince: { value: "未確認", detail: "日本法人・office・正式進出年を確認できない。", sourceId: "rollout-pinecone-jobs" } },
    comparisons: [{ arena: "Vector Database", companies: ["Pinecone", "Weaviate", "Qdrant", "Zilliz・Milvus", "pgvector"], why: "retrieval、scale、operations、cost、portability" }, { arena: "Unified AI Data", companies: ["Pinecone", "MongoDB", "Elastic", "Databricks", "Snowflake", "Hyperscalers"], why: "data gravity、hybrid search、governance、ecosystem" }],
    sources: [
      { id: "rollout-pinecone-company", label: "Pinecone About", url: "https://www.pinecone.io/", kind: "企業公式", scope: "会社・products・利用規模", checkedAt: researchedAt },
      { id: "rollout-pinecone-jobs", label: "Pinecone Careers", url: "https://www.pinecone.io/careers/", kind: "企業公式", scope: "現行5求人・Japan 0件・office・culture", checkedAt: researchedAt },
      { id: "rollout-pinecone-series-b", label: "Pinecone Series B", url: "https://www.pinecone.io/newsroom/pinecone-raises-usd100m-in-series-b-funding-to-provide-long-term-memory-for-ai/", kind: "企業公式", scope: "funding・valuation", checkedAt: researchedAt },
      { id: "rollout-pinecone-customers", label: "Pinecone Customers", url: "https://www.pinecone.io/customers/", kind: "企業公式", scope: "三菱電機・global customer proof", checkedAt: researchedAt },
      { id: "rollout-pinecone-nexus", label: "Pinecone Nexus", url: "https://www.pinecone.io/newsroom/pinecone-nexus-now-in-public-preview/", kind: "企業公式", scope: "current knowledge engine product", checkedAt: researchedAt },
      { id: "rollout-pinecone-linkedin", label: "Pinecone LinkedIn", url: "https://www.linkedin.com/company/pinecone-io/", kind: "外部集計", scope: "会社規模レンジ", checkedAt: researchedAt },
      metiAi, ppc, fx,
    ],
    privateVerdict: "PineconeはAI retrieval categoryで9,000超customersとAsia infrastructureを示すが、recognized revenue・profit、日本法人・国内定量case・現行Japan求人は未確認。Singapore regionを日本での販売・support能力へ読み替えない。",
  });
  replaceStringsDeep(intelligence, [["$100M", "1億米ドル（約157.6億円）"], ["$750M", "7.5億米ドル（約1,181.7億円）"]]);
}

function patchPostman(intelligence: CompanyPublicIntelligence) {
  patchBase(intelligence, {
    slug: "postman", leader: "Abhinav Asthana", leaderLabel: "Co-founder・CEO", leaderUrl: "https://www.postman.com/company/about-postman/",
    localName: "Postman Japan・東京office", localLabel: "日本体制", localUrl: "https://www.postman.com/company/about-postman/",
    founded: "2014", foundedDetail: "API requestのtestingを簡単にするside projectから創業し、design、test、docs、monitoring、governance、AI-native API platformへ拡張。",
    localYear: "2026", localDetail: "東京・新丸の内ビル10階のofficeを公式掲載。一方、公式Careersの現行109求人にJapan・Tokyoは0件で、旧SMB AE 7519682003を終了扱いにする。",
    ids: { company: "rollout-postman-company", jobs: "rollout-postman-jobs", finance: "rollout-postman-series-d", customer: "rollout-postman-customers", external: metiAi.id },
    targets: ["CTO・技術部門・プラットフォーム基盤", "API基盤・開発者体験", "品質保証・テスト・DevOps", "セキュリティ・設計・ガバナンス", "製品・パートナーAPI・CIO・調達"],
    competitors: "Insomnia、Bruno、SmartBear SwaggerHub・ReadyAPI、Stoplight、Kong・Apigee・MuleSoft・AWS API Gateway、GitHub・IDE・CI tool、内製portal・test framework",
    feature: "API design、development、test、docs、monitoring、catalog、governance、AI Engineer・Agent Mode・MCPを一つのAPI platformへ統合する。",
    advantage: "40M超developersのbottom-up usageとexecutable collection・workspaceを起点に、human・AI agent双方のAPI lifecycleをenterprise controlへ広げる。",
    benefit: "time to first call、onboarding、test automation、release quality、API reuse、secret・policy management、partner activationを改善できる可能性がある。",
    evidence: "東京officeはあるが国内named定量caseは確認不能。global caseではMedibankのrelease 3週短縮等を公表するが、日本成果へ外挿しない。",
    verdict: "結論：東京officeと大規模developer adoptionはあるが、現行Japan求人0件・国内定量case不在・recognized revenue非公開。PLG規模と日本commercial momentumを分けて見る。",
    paragraphs: ["microservices、partner API、AI agent・MCPが増えるほど、spec、owner、test、secret、documentation、policyがteamごとに分断する。", "BuyerはAPI request toolの便利さより、inventory、reuse、change governance、security、AI agent compatibility、enterprise administration、TCOを求める。", "Genba分析：既存usageの高い一部門でonboarding、time to first call、test coverage、release failure、duplicate API、secret finding、active collaborationをbaseline比較する。"],
    culture: "公式AboutはCreate with curiosity、Earn trust、Embrace constraints、Win together、Own & deliverとhybrid workplaceを掲げるが、現行Japan求人0件で日本固有条件は未確認。",
    display: "東京officeあり・現行Japan求人なし",
    goodFor: ["developer-led PLGをenterprise saleへ変えたい", "API lifecycleとAI agent governanceを横断したい", "東京officeの採用再開を観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内named定量caseを必須にする", "認識売上・利益開示を必須にする"],
    unresolved: [["Japan organization", "東京officeはあるが現行求人0件。", "current Japan leader、team人数、territory coverage、採用再開条件は？"], ["Private economics", "Series D 2.25億米ドル（約354.5億円）、当時valuation 56億米ドル（約8,823.4億円）。", "recognized revenue、ARR、paid mix、NRR、profit、FCFは？"], ["PLG conversion", "40M超developers・500k organizations。", "Japan active・paid cohort、PQL、free-to-paid、seat expansion、enterprise ACVは？"], ["Domestic proof", "東京officeはあるが国内named定量caseを確認不能。", "Japan reference、partner、implementation、support SLA、security reviewは？"], ["Competition", "developer tool、API management、gateway、IDE・CIと重なる。", "どのuse caseでbudgetを作り、primary lossとconsolidation TCOをどう説明する？"]],
    growth: "recognized revenue、ARR、operating・net income、FCFは非公開。2021年Series D 2.25億米ドル（約354.5億円）、valuation 56億米ドル（約8,823.4億円）は資本・当時評価額で現在価値ではない。40M超developers・500k organizations。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、profit、FCFを確認できない。", sourceIds: ["rollout-postman-series-d"] },
      { label: "資本", value: "Series D 2.25億米ドル（約354.5億円）", detail: "当時valuation 56億米ドル（約8,823.4億円）。売上ではない。", sourceIds: ["rollout-postman-series-d", fx.id] },
      { label: "利用規模", value: "40M超developers・500k organizations", detail: "98% of Fortune 500。active・paid・Japan内訳は非公開。", sourceIds: ["rollout-postman-company"] },
      { label: "日本採用", value: "0件", detail: "公式Career 109求人にJapan・Tokyoなし。", sourceIds: ["rollout-postman-jobs"] },
    ],
    proof: [{ company: "国内named caseは確認不能", products: "Postman API Platform", outcome: "東京officeと日本語siteはあるが、日本企業の個別customer story・定量成果を今回確認できない。", implication: "global adoption・caseをJapan tractionへ読み替えない。", sourceId: "rollout-postman-customers" }],
    role: { salesMotion: "現行Japan求人なし。再採用時はbottom-up usage・PQLからteam collaboration、governance、API catalog、AI-native APIへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan quota、ACV、cycle、attainment、expansion creditは非公開。", collaboration: "Developer、Platform Engineering、QA、Security、Architecture、Product、Partner、CIO、Procurementを横断する想定。" },
    stats: { globalHeadcount: { value: "約1,000人", detail: "Postman自社caseがroughly 1,000 employeesと記載。確認時点の厳密なcurrent headcountではない。", sourceId: "rollout-postman-self-case" }, japanHeadcount: { value: "非公開", detail: "Japan team人数は未開示。" }, japanOffice: { value: "東京・新丸の内ビル10階", detail: "1-5-1 Marunouchi, Chiyoda-ku。", sourceId: "rollout-postman-company" }, japanSince: { value: "確認済み", detail: "公式AboutにJapan officeを掲載。正式設立・営業開始年は今回確定していない。", sourceId: "rollout-postman-company" } },
    comparisons: [{ arena: "API Development", companies: ["Postman", "Insomnia", "Bruno", "SmartBear", "Stoplight"], why: "developer UX、design、test、collaboration" }, { arena: "API Platform・Governance", companies: ["Postman", "Kong", "Apigee", "MuleSoft", "AWS・Azure"], why: "lifecycle、runtime、catalog、security、TCO" }],
    sources: [
      { id: "rollout-postman-company", label: "Postman About", url: "https://www.postman.com/company/about-postman/", kind: "企業公式", scope: "company・founders・values・Tokyo office・scale", checkedAt: researchedAt },
      { id: "rollout-postman-jobs", label: "Postman Open Positions", url: "https://www.postman.com/company/careers/open-positions/", kind: "企業公式", scope: "現行109求人・Japan 0件", checkedAt: researchedAt },
      { id: "rollout-postman-series-d", label: "Postman Series D", url: "https://blog.postman.com/postman-announces-series-d/", kind: "企業公式", scope: "funding・historical valuation", checkedAt: researchedAt },
      { id: "rollout-postman-customers", label: "Postman Customer Stories", url: "https://www.postman.com/customer-stories/", kind: "企業公式", scope: "global case・国内named case未確認", checkedAt: researchedAt },
      { id: "rollout-postman-self-case", label: "Postman on Postman", url: "https://www.postman.com/customer-stories/postman-on-postman/", kind: "企業公式", scope: "employee規模・automation outcomes", checkedAt: researchedAt },
      { id: "rollout-postman-product", label: "Postman API Platform", url: "https://www.postman.com/product/", kind: "企業公式", scope: "current AI-native API platform", checkedAt: researchedAt },
      metiAi, ppc, fx,
    ],
    privateVerdict: "Postmanは東京officeと40M超developersを持つが、recognized revenue・profit、日本paid cohort・国内named定量case・現行Japan求人は未確認。登録・利用規模をpaid tractionや採用再開確度へ読み替えない。",
  });
  milestone(intelligence, "非公開", "日本事業開始年は非公開", "公式Aboutで東京officeを確認できるが、日本法人の設立・営業開始年は今回の公式確認で確定していない。", "rollout-postman-company");
  replaceStringsDeep(intelligence, [["$225 million", "2.25億米ドル（約354.5億円）"], ["$225M", "2.25億米ドル（約354.5億円）"], ["$5.6 billion", "56億米ドル（約8,823.4億円）"]]);
}

function patchPrimer(intelligence: CompanyPublicIntelligence) {
  patchBase(intelligence, {
    slug: "primer", leader: "Gabriel Le Roux", leaderLabel: "Co-founder・CEO", leaderUrl: "https://primer.io/about-us",
    localName: "Singapore APAC体制", localLabel: "APAC leadership", localUrl: "https://primer.io/careers",
    founded: "2020", foundedDetail: "Braintree・PayPal出身者がPSPごとのfragmented integrationを解くopen payments orchestration layerとして創業。",
    localYear: "2026", localDetail: "SingaporeのAPAC Customer Success・teamは確認できるが、日本法人・office・Japan専任求人は0件。Ashbyの現行Talent CommunityはEuropeで、日本求人へ含めない。",
    ids: { company: "rollout-primer-company", jobs: "rollout-primer-jobs", finance: "rollout-primer-series-c", customer: "rollout-primer-customers", external: digitalGov.id },
    targets: ["決済・製品責任者", "CFO・財務・資金管理", "デジタルコマース・成長責任者", "エンジニアリング・決済基盤", "リスク・不正対策・コンプライアンス・調達"],
    competitors: "Stripe・Adyen等single PSP、Spreedly、Gr4vy、BR-DGE、Akurateco、CellPoint Digital、Checkout.com・Worldpay等provider orchestration、複数PSPの内製routing・reconciliation",
    feature: "Universal Checkout、Workflows、routing、Fallbacks、Observability、Reconciliation、Global Accounts、AI Companionをunified payments infrastructureで提供する。",
    advantage: "PSP・fraud・payment methodを固定せず、checkoutからpayoutまでのtransaction contextとrouting controlをmerchant側に持たせる。",
    benefit: "authorization、failed-payment recovery、resilience、provider追加時間、payment cost、reconciliation、operator・engineering工数を改善できる可能性がある。",
    evidence: "国内named caseは未確認。Ferryhopperの承認率+2pt・月340万ユーロ（約6.18億円）回収、Dabbleのretry 23%回収はglobal vendor caseでJapanへ外挿しない。",
    verdict: "結論：Series CとAPAC support拡張は強いが、日本法人・専任求人・国内proofは未確認。payments performanceのglobal成果とJapan connector・regulation・delivery readinessを分ける。",
    paragraphs: ["multi-PSP、fraud、APM、FX、reconciliationが増えるほど、payment・finance・engineeringは同じtransactionを別systemで判断する。", "Buyerはconnector数より、authorization uplift、failure recovery、routing control、ledger・reconciliation、data residency、compliance、cost attributionを求める。", "Genba分析：一市場・一payment flowでauthorization、decline reason、recovery、latency、downtime、engineering hours、processor feeをbaseline比較する。"],
    culture: "公式Careersはremote-first、ownership、high bar、annual retreat・workationを掲げるが、日本雇用条件・求人は未確認。",
    display: "Singapore APAC体制・現行Japan求人／拠点なし",
    goodFor: ["payments performanceを事業KPIで売りたい", "Finance・Product・Engineeringを横断したい", "将来のJapan entryを長期観測したい"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "国内processor・regulation対応を前提にする", "認識売上・利益開示を必須にする"],
    unresolved: [["Japan trigger", "APAC CSはあるがJapan専任求人・法人なし。", "Japan payment volume、merchant、connector、pipelineのどの条件でlocal podを作る？"], ["Private economics", "Series C 1億米ドル（約157.6億円）、US ARRは倍増とだけ公表。", "total recognized revenue、ARR、gross margin、profit、burn、NRRは？"], ["Localization", "日本のproduction case・connector・contract・supportは未確認。", "国内acquirer、3DS、fraud、currency、settlement、data・regulatory要件を誰が担う？"], ["Attribution", "global caseは承認・recovery成果を公表。", "Primer単独lift、control、fee・mix effect、customer-side engineeringをどう分離する？"], ["Competition", "PSP・orchestration・内製routingと競合。", "primary win・loss、implementation、pricing、3年TCO、exit portabilityは？"]],
    growth: "recognized revenue、total ARR、operating・net income、FCFは非公開。2026年Series C 1億米ドル（約157.6億円）は資本で売上ではない。USはrevenue約20%・ARR前年比2倍と公式説明するが、絶対額は非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、total ARR、profit、FCFを確認できない。", sourceIds: ["rollout-primer-series-c"] },
      { label: "資本", value: "Series C 1億米ドル（約157.6億円）", detail: "2026年。fundingであり売上ではない。", sourceIds: ["rollout-primer-series-c", fx.id] },
      { label: "platform規模", value: "年間billions of transactions", detail: "95%超の顧客payment volumeと400超data points/transactionを会社説明。監査値・Japan内訳は非公開。", sourceIds: ["rollout-primer-series-c"] },
      { label: "日本採用", value: "0件", detail: "公式AshbyにJapan・Tokyo専任求人なし。", sourceIds: ["rollout-primer-jobs"] },
    ],
    proof: [
      { company: "国内named caseは確認不能", products: "Primer Unified Payments Infrastructure", outcome: "日本企業・日本拠点の公式customer storyと定量成果を確認できない。", implication: "global caseをJapan tractionへ読み替えない。", sourceId: "rollout-primer-customers" },
      { company: "Ferryhopper", products: "Workflows・Fallbacks", outcome: "取引量47%増、月340万ユーロ（約6.18億円）回収、承認率+2pt。", implication: "vendor-selected global caseで、日本での再現保証ではない。", sourceId: "primer-ferryhopper" },
    ],
    role: { salesMotion: "現行Japan求人なし。将来はpayment performance・multi-PSP controlでlandし、checkout、routing、reconciliation、treasury、AIへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan TAM、quota、ACV、cycle、attainmentは確認不能。", collaboration: "Payments、Product、Finance・Treasury、Engineering、Risk、Legal、Security、Procurementとprocessor partnerを横断する想定。" },
    stats: { globalHeadcount: { value: "51〜200人規模", detail: "LinkedIn企業ページの外部レンジで、公式在籍数ではない。", sourceId: "rollout-primer-linkedin" }, japanHeadcount: { value: "非公開", detail: "日本teamを確認できない。" }, japanOffice: { value: "未確認", detail: "Singapore APAC体制はあるがJapan officeは未確認。", sourceId: "rollout-primer-jobs" }, japanSince: { value: "未確認", detail: "日本法人・office・正式進出年を確認できない。", sourceId: "rollout-primer-jobs" } },
    comparisons: [{ arena: "Payments Orchestration", companies: ["Primer", "Spreedly", "Gr4vy", "BR-DGE", "CellPoint Digital"], why: "routing、connector、performance、control、cost" }, { arena: "Unified Payments", companies: ["Primer", "Stripe", "Adyen", "Checkout.com", "Worldpay", "内製"], why: "processor breadth、checkout、treasury、reconciliation、TCO" }],
    sources: [
      { id: "rollout-primer-company", label: "Primer About", url: "https://primer.io/about-us", kind: "企業公式", scope: "company・leadership・current platform", checkedAt: researchedAt },
      { id: "rollout-primer-jobs", label: "Primer Careers / Ashby", url: "https://jobs.ashbyhq.com/primer.io", kind: "企業公式", scope: "現行Japan求人0件・remote culture", checkedAt: researchedAt },
      { id: "rollout-primer-series-c", label: "Primer Series C", url: "https://webflow.primer.io/blog/series-c", kind: "企業公式", scope: "funding・US revenue share・transaction scale", checkedAt: researchedAt },
      { id: "rollout-primer-customers", label: "Primer Case Studies", url: "https://primer.io/case", kind: "企業公式", scope: "global cases・国内case未確認", checkedAt: researchedAt },
      { id: "rollout-primer-product", label: "Primer Unified Payments Infrastructure", url: "https://primer.io/", kind: "企業公式", scope: "products・AI Companion・payments workflow", checkedAt: researchedAt },
      { id: "rollout-primer-linkedin", label: "Primer LinkedIn", url: "https://www.linkedin.com/company/primer-io/", kind: "外部集計", scope: "会社規模レンジ", checkedAt: researchedAt },
      { id: "primer-primer-growth", label: "Primer Series C", url: "https://webflow.primer.io/blog/series-c", kind: "企業公式", scope: "既存growth参照alias", checkedAt: researchedAt },
      { id: "primer-primer-apac", label: "Primer Careers", url: "https://primer.io/careers", kind: "企業公式", scope: "既存APAC参照alias", checkedAt: researchedAt },
      { id: "primer-primer-careers", label: "Primer Ashby", url: "https://jobs.ashbyhq.com/primer.io", kind: "企業公式", scope: "既存careers参照alias", checkedAt: researchedAt },
      { id: "primer-primer-customers", label: "Primer Cases", url: "https://primer.io/case", kind: "企業公式", scope: "既存customers参照alias", checkedAt: researchedAt },
      { id: "primer-primer-company", label: "Primer About", url: "https://primer.io/about-us", kind: "企業公式", scope: "既存company参照alias", checkedAt: researchedAt },
      { id: "primer-primer-external", label: "経済産業省 デジタルガバナンス・コード", url: "https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc.html", kind: "公的機関", scope: "既存external参照alias", checkedAt: researchedAt },
      { id: "primer-primer-trust", label: "Primer Security", url: "https://primer.io/security", kind: "企業公式", scope: "既存trust参照alias", checkedAt: researchedAt },
      digitalGov, ppc, fx,
    ],
    privateVerdict: "Primerは1億米ドル（約157.6億円）のSeries Cとglobal payment proofを持つが、recognized revenue・profit、日本法人・国内case・専任求人は未確認。Singapore CS体制を日本のdelivery readinessへ読み替えない。",
  });
  replaceStringsDeep(intelligence, [["$100M", "1億米ドル（約157.6億円）"], ["€3.4M", "340万ユーロ（約6.18億円）"]]);
}

function patchRetool(intelligence: CompanyPublicIntelligence) {
  patchBase(intelligence, {
    slug: "retool", leader: "David Hsu", leaderLabel: "Founder・CEO", leaderUrl: "https://retool.com/about",
    localName: "GxP", localLabel: "Japan exclusive official partner", localUrl: "https://retool.com/customers/isetan-mitsukoshi",
    founded: "2017", foundedDetail: "database・APIへ接続するinternal tool builderから、Apps、Workflows、Mobile、Agents、AppGen、enterprise governance・self-hostingへ拡張。",
    localYear: "2026", localDetail: "日本法人・office・Japan専任求人は確認できず、公式Careersは全社0求人。一方、GxPをJapan exclusive official partnerとし、伊勢丹三越の国内production caseを公開。",
    ids: { company: "rollout-retool-company", jobs: "rollout-retool-jobs", finance: "rollout-retool-scale", customer: "rollout-retool-isetan", external: digitalGov.id },
    targets: ["CIO・CTO・技術部門責任者", "社内ツール・プラットフォーム基盤", "業務運用・顧客支援・リスク管理", "データ・AI基盤", "セキュリティ・設計・調達・業務部門"],
    competitors: "Microsoft Power Apps、Appsmith、Superblocks、Mendix・OutSystems、ServiceNow・Salesforce platform、custom React・backend、RPA・spreadsheet・個別SaaS",
    feature: "Retool Apps、Workflows、Mobile、Database、External Apps、Agents、AppGenとenterprise governance・self-hostingでbusiness softwareを構築する。",
    advantage: "既存database・API・permissionへ接続し、component・code・AI generationを組み合わせてprototypeからproduction・governanceまで同じplatformで進める。",
    benefit: "engineering backlog、development lead time、support・ops処理、tool sprawl、change cycle、AI app deliveryを改善できる可能性がある。",
    evidence: "伊勢丹三越はscratch開発6カ月超見込みを3カ月へ短縮、internal users 100→30,000超、weekly releaseを実現。GxPとの共同成果でRetool単独因果ではない。",
    verdict: "結論：日本法人・求人は未確認だが、exclusive partnerと大規模国内production caseがあり、純粋な未進出より一段進んだpartner-led市場。direct GTMとlocal support ownershipを確認する。",
    paragraphs: ["業務要件がSaaSに合わずcentral engineeringが不足すると、spreadsheet・legacy admin・one-off toolが増え、変更と権限管理がbottleneckになる。", "Buyerは10x開発claimより、existing data・permission、testing、SDLC、self-host・cloud、AI governance、maintainability、partner capacity、3年TCOを求める。", "Genba分析：一つのops workflowでdevelopment lead time、engineer hours、handling time、error、active users、release frequency、maintenance costをbaseline比較する。"],
    culture: "公式Careersはambition、curiosity、speed、ownership、高いbarとsupportを掲げるが、現行全社求人0件で日本固有条件は未確認。",
    display: "国内exclusive partner・caseあり／現行求人0件",
    goodFor: ["internal toolsとAI app deliveryを横断したい", "partner-led Japan marketを作りたい", "国内大規模production proofを重視する"],
    cautionFor: ["今すぐ日本専任職へ応募したい", "日本法人によるdirect supportを必須にする", "認識売上・利益開示を必須にする"],
    unresolved: [["Japan ownership", "GxPがexclusive partner、Retool法人・office・求人なし。", "Japan pipeline、account ownership、support SLA、renewal、escalationを誰が持つ？"], ["Private economics", "10,000超organizationsを公表するがfinanceは非公開。", "recognized revenue、ARR、growth、gross margin、profit、FCF、NRRは？"], ["Customer proof", "伊勢丹三越は30,000超users・3カ月launch。", "Retool単独効果、license・service cost、security、maintenance、referenceabilityは？"], ["Platform fit", "AppGen・Agentsへ拡張。", "generated code quality、testing、permission、model・data use、handoff、exitをどう統制する？"], ["Competition", "Power Apps・Appsmith・custom・enterprise low-codeと競合。", "segment別win rate、implementation、pricing、3年TCO、skill ownershipは？"]],
    growth: "recognized revenue、ARR、operating・net income、FCF、最新funding・valuationは非公開。公式Careersは10,000超organizationsを掲載するが、paid mix・Japan内訳・retentionは非公開。",
    facts: [
      { label: "売上・稼ぐ力", value: "非公開", detail: "recognized revenue、ARR、profit、FCFを確認できない。", sourceIds: ["rollout-retool-scale"] },
      { label: "導入規模", value: "10,000超organizations", detail: "公式Careers掲載値。paid mix・active definition・Japan内訳は非公開。", sourceIds: ["rollout-retool-jobs"] },
      { label: "国内case", value: "30,000超users", detail: "伊勢丹三越。100から拡大し、weekly feature release。", sourceIds: ["rollout-retool-isetan"] },
      { label: "採用", value: "全社0件", detail: "公式Careersのcurrent openings。Japan専任も0件。", sourceIds: ["rollout-retool-jobs"] },
    ],
    proof: [{ company: "伊勢丹三越", products: "Retool Apps", outcome: "scratchなら6カ月超のinternal toolを3カ月でlaunch、users 100→30,000超、weekly release。", implication: "GxP・IMDL・IMSとの共同deliveryで、Retool単独のROI・全案件への再現保証ではない。", sourceId: "rollout-retool-isetan" }],
    role: { salesMotion: "現行求人なし。JapanはGxPとのpartner-led discovery・deliveryで一use caseをlandし、Apps、Workflows、Mobile、AI Agents、governanceへexpandするmotionが想定される。", compensation: "対象求人なし。日本の給与・OTEは確認不能。", quota: "Japan quota、ACV、cycle、attainment、partner creditは確認不能。", collaboration: "Engineering、Platform、Data、Ops、Security、Business owner、ProcurementとGxPを横断する想定。" },
    stats: { globalHeadcount: { value: "501〜1,000人規模", detail: "LinkedIn企業ページの外部レンジで、公式在籍数ではない。", sourceId: "rollout-retool-linkedin" }, japanHeadcount: { value: "非公開", detail: "Retool Japan teamを確認できない。GxP社員をRetool人数に含めない。" }, japanOffice: { value: "未確認", detail: "GxPはTokyo-based partnerだがRetool officeではない。", sourceId: "rollout-retool-isetan" }, japanSince: { value: "partner-led activity確認", detail: "国内caseとexclusive partnerを確認。法人設立・direct entry年は未確認。", sourceId: "rollout-retool-isetan" } },
    comparisons: [{ arena: "Internal Apps", companies: ["Retool", "Microsoft Power Apps", "Appsmith", "Superblocks", "Custom development"], why: "speed、flexibility、code、governance、TCO" }, { arena: "Enterprise App・AI Platform", companies: ["Retool", "Mendix", "OutSystems", "ServiceNow", "Salesforce"], why: "complex workflow、AI、SDLC、deployment、partner ecosystem" }],
    sources: [
      { id: "rollout-retool-company", label: "Retool About", url: "https://retool.com/about", kind: "企業公式", scope: "company・leadership・platform", checkedAt: researchedAt },
      { id: "rollout-retool-jobs", label: "Retool Careers", url: "https://retool.com/careers", kind: "企業公式", scope: "10,000超organizations・現行全社0求人・culture", checkedAt: researchedAt },
      { id: "rollout-retool-scale", label: "Retool Platform", url: "https://retool.com/", kind: "企業公式", scope: "current products・private financial boundary", checkedAt: researchedAt },
      { id: "rollout-retool-isetan", label: "Retool × Isetan Mitsukoshi", url: "https://retool.com/customers/isetan-mitsukoshi", kind: "企業公式", scope: "国内定量case・GxP exclusive partner", checkedAt: researchedAt },
      { id: "rollout-retool-customers", label: "Retool Customers", url: "https://retool.com/customers", kind: "企業公式", scope: "global case・product outcomes", checkedAt: researchedAt },
      { id: "rollout-retool-security", label: "Retool Trust Center", url: "https://trust.retool.com/", kind: "企業公式", scope: "security・enterprise controls", checkedAt: researchedAt },
      { id: "rollout-retool-linkedin", label: "Retool LinkedIn", url: "https://www.linkedin.com/company/retool/", kind: "外部集計", scope: "会社規模レンジ", checkedAt: researchedAt },
      digitalGov, metiAi, ppc,
    ],
    privateVerdict: "Retoolは10,000超organizationsと伊勢丹三越30,000超usersの国内proofを持つが、recognized revenue・profit、日本法人・direct team・現行求人は未確認。GxPのexclusive partner体制をRetool現地法人へ読み替えない。",
  });
  replaceStringsDeep(intelligence, [["$20K", "2万米ドル（約315.1万円）"]]);
}

export function applyCompanyPageRolloutBatchTwentyOne(records: Record<string, CompanyPublicIntelligence>) {
  if (records.mongodb) patchMongoDb(records.mongodb);
  if (records.pinecone) patchPinecone(records.pinecone);
  if (records.postman) patchPostman(records.postman);
  if (records.primer) patchPrimer(records.primer);
  if (records.retool) patchRetool(records.retool);
}
