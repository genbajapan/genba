import type { CompanyPublicIntelligence } from "@/lib/company-public-intelligence";
import { buildIntelligence, type Profile } from "@/lib/company-public-intelligence-wave-two";
import { applyStandard, buildCompactPatch, type CompactPatchInput } from "@/lib/company-page-rollout-standard-helpers";

const checkedAt = "2026-08-25";

function build(profile: Profile, patch: CompactPatchInput) {
  const intelligence = buildIntelligence(profile);
  applyStandard(intelligence, buildCompactPatch(patch));
  intelligence.researchedAt = checkedAt;
  if (intelligence.cultureDeepDive) intelligence.cultureDeepDive.researchedAt = "2026.08.25";
  return intelligence;
}

const clickhouseIntelligence = build({
  checkedAt,
  slug: "clickhouse",
  name: "ClickHouse",
  jobUrl: "https://job-boards.greenhouse.io/clickhouse/jobs/6140123004",
  officialUrl: "https://clickhouse.com/company/our-story",
  customersUrl: "https://clickhouse.com/ja/blog/line-yahoo-jp",
  externalUrl: "https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc.html",
  financeUrl: "https://clickhouse.com/blog/thank-you-for-building-with-us",
  salesSnapshot: "大量のevent・log・transaction dataを低遅延で分析する列指向databaseとmanaged cloudを提供。日本のSenior Consulting Engineerは、strategic customerのarchitecture、導入、PoC、production supportを横断する。",
  growthSummary: "2009年にreal-time web analyticsの課題から開発開始、2016年にopen source化、2021年にClickHouse, Inc.を設立。2026年5月の公式発表は4,000社超、annual run-rate revenue 2.5億ドル、ARR前年比3倍超を示す。日本売上とteam人数は非公開。",
  ipoSummary: "非公開企業。2026年1月に4億ドルのSeries Dを公式発表。評価額、IPO時期、日本ARRは公表されていない。",
  milestones: [
    { year: "2009", label: "開発開始", detail: "Alexey Milovidovとteamが、増え続ける非集計dataへreal-time reportを返す実験projectを開始。", source: "company" },
    { year: "2016", label: "open source公開", detail: "Apache 2.0 licenseのcolumn-oriented OLAP databaseとして公開。", source: "company" },
    { year: "2021", label: "会社創業・ClickHouse, Inc.設立", detail: "core開発teamとcloud・business teamを統合し米国法人を設立。", source: "company" },
    { year: "2025.11", label: "日本法人設立", detail: "Japan Cloudとの提携でClickHouse株式会社を設立。", source: "finance" },
    { year: "2026.02", label: "日本代表就任", detail: "金古毅氏がClickHouse株式会社の代表取締役社長に就任。", source: "finance" },
    { year: "2026.08", label: "Japan consulting採用", detail: "Senior Consulting Engineer - Japanを公式Greenhouseで確認。", source: "job" },
  ],
  issueLenses: [
    { title: "既存顧客の導入目的から見る課題", body: "LINEヤフーの公式事例は、Kafka API logを毎秒700万行取り込み、4.1兆行を24 serverで分析して未知のbugを調べる目的を示す。database置換ではなく、production問題へqueryで答える速度とcostが導入理由になる。" },
    { title: "製品の成り立ちから見る課題", body: "増え続ける非集計web analytics dataへreal-time reportを返す実験から始まり、open source database、managed cloud、observability、LLM evaluationへ拡張した。核は大量dataを事前集計だけに頼らず速くqueryすること。" },
    { title: "外部環境の要求から見る課題", body: "AI application、agent、streaming systemがquery量とtelemetryを増やす一方、企業にはdata governance、可用性、cost、障害説明の責任が残る。performanceだけでなく、運用・security・復旧を含むproduction設計が投資条件になる。" },
  ],
  narrative: [
    { label: "背景", body: "AI、customer-facing analytics、observabilityでdataの量とquery頻度が増え、batch集計では判断と障害解析が遅れる。" },
    { label: "課題", body: "既存warehouse、search、log toolが高遅延・高costになると、fresh dataを自由にqueryできず、teamが集計待ちとsamplingへ戻る。" },
    { label: "解決策", body: "代表workloadをClickHouseへ移し、ingest throughput、query latency、concurrency、storage、運用工数、復旧をbaseline比較する。" },
    { label: "選定の理由", body: "Snowflake、Databricks、BigQuery、Redshift、Elastic、Apache Druid、self-managed databaseとの比較で、速度、cost、SQL、運用、cloud flexibilityに優位がある場合に選ぶ。" },
  ],
  openingHook: "障害や顧客行動を調べるqueryで、dataが届くまでと答えが返るまでに何分待っていますか。",
  valueHypothesis: "ingest rows/second、query p95、concurrency、storage compression、compute cost、incident investigation time、運用工数をbaseline比較する。",
  objection: "既存data warehouse、Elastic、managed cloudの標準分析で十分。databaseを増やすと運用が複雑になる。",
  reframe: "benchmark一発の速さではなく、対象workloadのfreshness、latency、concurrency、storage、migration、SRE負荷、failure recovery、総costで比較する。",
  facts: [
    { label: "開発開始", value: "2009年", detail: "real-time analyticsの実験projectとして開始。", source: "company" },
    { label: "open source", value: "2016年", detail: "Apache 2.0で公開。", source: "company" },
    { label: "customers", value: "4,000社超", detail: "2026年5月の会社公式発表。", source: "finance" },
    { label: "annual run-rate revenue", value: "2.5億ドル", detail: "2026年5月の会社公式発表。GAAP売上ではない。", source: "finance" },
    { label: "日本法人", value: "2025年設立", detail: "ClickHouse株式会社。", source: "finance" },
    { label: "日本求人", value: "1件", detail: "Senior Consulting Engineer - Japan。", source: "job" },
  ],
  customers: [
    { company: "LINEヤフー", products: "ClickHouse", outcome: "Kafka API logを毎秒700万行取り込み、4.1兆行を24 serverでreal-time分析すると公式事例が説明。", implication: "国内の大規模observabilityで性能とcostを検証するproof。" },
    { company: "SmartNews", products: "ClickHouse", outcome: "2020年に導入を始め、2021年までに広告主向けreportをreal-time化したと公式newsletterが紹介。", implication: "国内customer-facing analyticsの継続運用例。" },
    { company: "LINEマンガ", products: "ClickHouse", outcome: "MySQL dataを複製せずにreal-time queryする仕組みを公式事例で紹介。", implication: "data copyを増やさない分析architectureの例。" },
  ],
  externalSignals: [
    { label: "digital governance", value: "経営とsystemの継続的更新", detail: "経産省のDigital Governance Codeは、経営visionとdigital strategy、成果指標、system・data環境を継続的に見直す必要を示す。", caveat: "ClickHouse導入だけでdigital governanceや投資成果を満たすものではない。" },
    { label: "data platform operations", value: "性能と統制の両立", detail: "大量・即時dataを扱うほど、access、retention、residency、backup、incident、cost allocationをworkloadごとに設計する必要がある。", caveat: "具体的要件はdata、industry、contract、deploymentで異なる。" },
  ],
  role: "strategic customerのdesign、architecture、benchmark、migration、implementation、PoC、production launchとconsultative supportを各50%で持ち、Product・Engineering・Salesと連携する。",
  organization: "Japan Remoteのfull-time role。東京顧客へのonsite対応と最大35%のregional travel、global 24x7 support schedulingへの対応を求人に記載。日本team人数、reporting line、担当社数は未公開。",
  careerValue: "OLAP・distributed DBMS、cloud・Kubernetes、Professional Services、TAM・support、Enterprise architectureを横断する経験。",
  globalHeadcount: "非公開（20カ国超で事業運営）",
  japanPresence: "ClickHouse株式会社、東京都港区本社、代表取締役社長、国内顧客事例、Japan求人を確認",
  japanSince: "2025年11月に日本法人設立を公式発表",
  solutions: [
    { name: "ClickHouse Cloud", valueProp: "AWS、GCP、Azureでcolumn-oriented analytics databaseをmanaged提供する。", url: "https://clickhouse.com/cloud", competitors: "Snowflake、BigQuery、Redshift、Databricks、self-managed ClickHouse。", differentiation: "real-time OLAPの速度、compression、SQL、managed operation。" },
    { name: "ClickHouse OSS", valueProp: "大規模dataを高throughput・低latencyで集計するopen-source database。", url: "https://clickhouse.com/clickhouse", competitors: "Apache Druid、Pinot、Elastic、PostgreSQL、other OLAP DB。", differentiation: "open source、columnar execution、広いdeployment choice。" },
    { name: "ClickStack / Langfuse", valueProp: "logs、metrics、traces、session replayとLLM observability・evaluationを扱う。", url: "https://clickhouse.com/use-cases/observability", competitors: "Datadog、Elastic、Splunk、Grafana、specialized LLM observability。", differentiation: "ClickHouse engineで高cardinality telemetryとAI traceを統合する。" },
  ],
  fitTags: ["Real-time Analytics", "OLAP", "Data Warehouse", "Observability", "Professional Services", "Japan Remote"],
  comparisons: [
    { arena: "Real-time analytics", companies: ["ClickHouse", "Snowflake", "Databricks", "BigQuery"], why: "freshness、latency、concurrency、cost" },
    { arena: "Observability data", companies: ["ClickHouse", "Elastic", "Datadog", "Grafana"], why: "ingest、query、retention、operation" },
    { arena: "Open-source OLAP", companies: ["ClickHouse", "Apache Druid", "Apache Pinot"], why: "performance、ecosystem、managed option" },
  ],
}, {
  slug: "clickhouse", leaderName: "Aaron Katz", leaderLabel: "Co-Founder / CEO", leaderUrl: "https://clickhouse.com/company/our-story", localName: "金古 毅", localLabel: "ClickHouse株式会社 代表取締役社長", localUrl: "https://clickhouse.com/ja/blog/202602-clickhouse-japan-country-manager",
  companyId: "clickhouse-company", jobId: "clickhouse-job", customersId: "clickhouse-customers", externalId: "clickhouse-external", financeId: "clickhouse-finance",
  targets: ["Data Platform・Analytics責任者", "SRE・Observability責任者", "AI・application engineering責任者"],
  heroSummary: "AI、customer-facing analytics、observabilityで増える大量dataを、batch待ちや高いquery costに縛られず即時に分析する課題を解決する。column-oriented engineとmanaged cloudでingest、query、storage、production運用を最適化する。",
  competitors: "Snowflake、Databricks、BigQuery、Redshift、Elastic、Druid、Pinot、self-managed databaseとの比較では、freshness、latency、concurrency、compression、migration、運用、総costを見る。",
  feature: "open-source ClickHouse、managed ClickHouse Cloud、observability stack、LLM evaluationを提供する。",
  advantage: "real-time OLAP向けに設計されたcolumn-oriented engine、open-source ecosystem、cloudとself-managedの選択肢を持つ。",
  benefit: "分析待ちとincident investigationを短縮し、高cardinality dataをより長く・低costでqueryできる可能性がある。",
  evidence: "LINEヤフーの公式事例は毎秒700万行、4.1兆行、24 serverでのreal-time分析を説明。会社公式は4,000社超、annual run-rate revenue 2.5億ドルを公表。",
  marketVerdict: "日本法人、代表、国内大規模事例、現行consulting求人は揃う。一方、日本売上、team人数、cloud利用比率、role別報酬は未公開。",
  marketParagraphs: ["AI agentとreal-time applicationが増えるほど、query volume、telemetry、freshnessの要求が従来warehouse・log stackへ圧力をかける。", "日本では国内referenceに加え、migration、local architecture、24x7 support、data・security reviewを再現可能なdeliveryへできるかが成長条件になる。"],
  cultureHeadline: "日本顧客のarchitecture、導入、production supportを半々で担うRemote consulting role。",
  classification: "フルリモート", displayLabel: "Japan Remote", officeDays: "office-basedではない", remoteOnly: "求人はJapan Remote", flexibility: "東京顧客へのonsite対応、最大35%のregional travel、global support schedulingあり",
  goodFor: ["database技術を顧客のproduction成果へ変えたい人", "consultingと重大supportを横断したい人"], cautionFor: ["travel・on-callを避けたい人", "architectureだけでhands-on deliveryを持ちたくない人"],
  unresolved: [
    ["担当portfolio", "strategic customerのprojectとsupportを持つ。", "担当社数、project数、support queue、Japan顧客比率は何ですか。"],
    ["評価", "consultingとsupportを各50%で担当。", "utilization、CSAT、time-to-value、case SLA、評価KPIは何ですか。"],
    ["勤務", "Remote、東京onsite、最大35% travel。", "実際の出張日数、on-call頻度、代休、勤務時間帯を教えてください。"],
    ["組織", "日本法人と代表を確認。", "JapanのSales、SE、CS、Support、Consulting人数とreporting lineは。"],
    ["報酬・career", "stock optionは全新規入社者へ付与。", "base、bonus、equity、level、昇進基準、直近24カ月の異動・退職は。"],
  ],
});

clickhouseIntelligence.sources.push(
  { id: "clickhouse-japan-president", label: "ClickHouse日本法人 代表就任", url: "https://clickhouse.com/ja/blog/202602-clickhouse-japan-country-manager", kind: "企業公式", scope: "日本法人・本社・代表・国内顧客", checkedAt },
  { id: "clickhouse-japan-entity", label: "ClickHouse日本法人設立", url: "https://clickhouse.com/ja/blog/japan-cloud-jp", kind: "企業公式", scope: "日本法人設立・Japan Cloud提携", checkedAt },
  { id: "clickhouse-smartnews", label: "ClickHouse November 2025 Newsletter", url: "https://clickhouse.com/blog/202511-newsletter", kind: "企業公式", scope: "SmartNewsのreal-time広告report利用", checkedAt },
  { id: "clickhouse-line-manga", label: "LINEマンガ ClickHouse事例", url: "https://clickhouse.com/jp/blog/line-manga-ja", kind: "企業公式", scope: "MySQLへのdirect queryによるreal-time分析", checkedAt },
);

export const daily20260825IntelligenceBySlug: Record<string, CompanyPublicIntelligence> = {
  clickhouse: clickhouseIntelligence,
};
