import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";

const projectRoot = process.cwd();
const manifestPath = path.join(projectRoot, "ops/company-page-rollout.json");
const rolloutTablePath = path.join(projectRoot, "ops/company-page-rollout.md");
const writeManifest = process.argv.includes("--write");
const strictAll = process.argv.includes("--strict") || process.env.COMPANY_PAGE_STRICT === "1";

const bundle = await build({
  stdin: {
    contents: `
      import { companies, jobs } from "./lib/market-data.ts";
      import { getAllCompanyPublicIntelligence } from "./lib/company-public-intelligence.ts";
      import { COMPANY_PAGE_STANDARD, COMPANY_PAGE_PRIORITY_ORDER, getCompanyPagePriority } from "./lib/company-page-standard.ts";
      export { companies, jobs, getAllCompanyPublicIntelligence, COMPANY_PAGE_STANDARD, COMPANY_PAGE_PRIORITY_ORDER, getCompanyPagePriority };
    `,
    resolveDir: projectRoot,
    sourcefile: "company-page-standard-validator-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});

const runtimeModule = { exports: {} };
new Function("module", "exports", bundle.outputFiles[0].text)(runtimeModule, runtimeModule.exports);
const {
  companies,
  jobs,
  getAllCompanyPublicIntelligence,
  COMPANY_PAGE_STANDARD,
  COMPANY_PAGE_PRIORITY_ORDER,
  getCompanyPagePriority,
} = runtimeModule.exports;
const intelligenceBySlug = getAllCompanyPublicIntelligence();
const jobsBySlug = new Map();
for (const job of jobs) jobsBySlug.set(job.companySlug, [...(jobsBySlug.get(job.companySlug) ?? []), job]);
const auditDate = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
const today = new Date(`${auditDate}T00:00:00Z`);

function addMissing(missing, condition, label) {
  if (!condition) missing.push(label);
}

function isRecent(date) {
  const checked = new Date(`${date}T00:00:00Z`);
  return Number.isFinite(checked.getTime()) && (today.getTime() - checked.getTime()) / 86_400_000 <= COMPANY_PAGE_STANDARD.staleJobDays;
}

function containsJapanese(value) {
  return typeof value === "string" && /[ぁ-んァ-ヶ一-龠]/.test(value);
}

function collectSourceReferences(value, refs = new Set()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectSourceReferences(item, refs));
    return refs;
  }
  if (!value || typeof value !== "object") return refs;
  for (const [key, child] of Object.entries(value)) {
    if (key === "sourceId" && typeof child === "string") refs.add(child);
    else if (key === "sourceIds" && Array.isArray(child)) child.forEach((id) => typeof id === "string" && refs.add(id));
    else if (key !== "sources") collectSourceReferences(child, refs);
  }
  return refs;
}

function collectCurrencyIssues(value, currentPath = "", parent = undefined, issues = []) {
  if (typeof value === "string") {
    if (/https?:\/\//.test(value)) return issues;
    const hasForeignAmount = /(?:€|£|\$|ユーロ|ポンド|ドル).{0,18}\d|\d.{0,18}(?:ユーロ|ポンド|ドル)/i.test(value);
    const parentHasYen = parent && typeof parent === "object" && Object.values(parent).some((item) => typeof item === "string" && /円/.test(item));
    if (hasForeignAmount && !/円/.test(value) && !parentHasYen && !/(?:1ユーロ|1ドル|1ポンド)\s*[=＝]\s*\d+(?:\.\d+)?円/.test(value)) {
      issues.push(`${currentPath}=${value}`);
    }
    return issues;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => collectCurrencyIssues(item, `${currentPath}[${index}]`, value, issues));
    return issues;
  }
  if (!value || typeof value !== "object") return issues;
  for (const [key, child] of Object.entries(value)) {
    if (key === "url" || key.endsWith("Url") || key === "sources") continue;
    collectCurrencyIssues(child, currentPath ? `${currentPath}.${key}` : key, value, issues);
  }
  return issues;
}

function assess(company) {
  const missing = [];
  const intelligence = intelligenceBySlug[company.slug];
  const companyJobs = jobsBySlug.get(company.slug) ?? [];
  addMissing(missing, intelligence, "公開インテリジェンス");
  if (!intelligence) return missing;

  addMissing(missing, containsJapanese(company.description) && containsJapanese(intelligence.salesSnapshot), "日本語の会社説明");
  addMissing(missing, containsJapanese(company.category) && containsJapanese(company.hq), "日本語の事業領域・本社表記");
  addMissing(missing, intelligence.overviewLeadership?.length >= 1, "経営陣");
  addMissing(missing, intelligence.companyStats?.japanOffice?.value, "日本オフィス");
  addMissing(missing, intelligence.companyStats?.globalHeadcount?.value, "グローバル社員数");
  addMissing(missing, intelligence.companyStats?.japanHeadcount?.value, "日本社員数");
  addMissing(missing, intelligence.marketStatus?.milestones?.some((item) => item.label.includes("創業")), "創業年");
  if (company.entryStatus !== "not-entered") {
    addMissing(missing, intelligence.marketStatus?.milestones?.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label)), "日本進出年");
  }
  addMissing(missing, intelligence.facts?.length >= 3, "主要指標");
  addMissing(missing, intelligence.salesMarketOutlook?.paragraphs?.length >= 2, "日本市場の需要・3〜5年の見立て");
  addMissing(missing, intelligence.salesFabeOverview?.fabeRows?.length === 5, "FABE分析と競合比較");
  addMissing(missing, intelligence.salesFabeOverview?.targetSegments?.every((segment) => containsJapanese(segment) || /^(?:D2C|B2B|B2C|SaaS|FinTech|AI|IT)$/.test(segment)), "対象領域の日本語表記");
  addMissing(missing, intelligence.cultureDeepDive?.workStyle?.classification, "働き方・カルチャー");
  addMissing(missing, intelligence.comparisonMap?.length >= 1, "合わせて見るべき会社");

  if (intelligence.marketStatus.isPublic) {
    addMissing(missing, intelligence.marketStatus.capitalMarketRead, "決算分析・日本への注力度・リスク対応");
    addMissing(missing, /^https:\/\//.test(intelligence.marketStatus.stockLinkUrl), "最新株価リンク");
  } else {
    addMissing(missing, intelligence.marketStatus.genbaVerdict && intelligence.marketStatus.ipoOutlookSummary, "IPO・Exit方針分析");
  }

  const aeItems = intelligence.aeInterviewHypotheses?.items ?? [];
  addMissing(missing, aeItems.length === 5, "AEとして検証すべき5つの未解決論点");
  if (aeItems.length) {
    addMissing(missing, aeItems.every((item) => item.issue && item.hypothesis && item.question && item.goodSignal && item.cautionSignal && item.sourceIds?.length), "未解決論点の比較項目・根拠");
  }

  addMissing(missing, intelligence.solutions?.length >= 1, "ソリューション");
  addMissing(missing, intelligence.sellingPlaybook?.issueLenses?.length === 3, "売り方の3つの課題レンズ");
  addMissing(missing, intelligence.sellingPlaybook?.narrative?.map((item) => item.label).join("|") === "背景|課題|解決策|選定の理由", "売り方の固定順序");

  if (company.salesRoles > 0) addMissing(missing, companyJobs.length > 0, "確認済み公式求人");
  for (const job of companyJobs) {
    const prefix = `求人:${job.title}`;
    addMissing(missing, /^https:\/\//.test(job.source?.url ?? ""), `${prefix}:公式URL`);
    addMissing(missing, isRecent(job.lastChecked), `${prefix}:30日以内の最終更新`);
    addMissing(missing, containsJapanese(job.location) && containsJapanese(job.language), `${prefix}:勤務地・言語の日本語表記`);
    addMissing(missing, job.descriptionSummary && job.desiredProfile, `${prefix}:概要・求める人物`);
    addMissing(missing, job.compensationResearch || /非公開|確認でき|記載はない|未確認/.test(job.compensationReality), `${prefix}:給与調査または非公開確認`);
    addMissing(missing, job.reputationResearch?.positiveTopics?.length && job.reputationResearch?.negativeTopics?.length, `${prefix}:ポジティブ・ネガティブ評判`);
    addMissing(missing, job.marketValueResearch?.skills?.length && job.marketValueResearch?.nextRoles?.length && job.marketValueResearch?.marketBands?.length, `${prefix}:市場価値`);
  }

  const sources = new Map((intelligence.sources ?? []).map((source) => [source.id, source]));
  addMissing(missing, sources.size >= 5, "出典台帳");
  for (const [id, source] of sources) {
    addMissing(missing, /^https:\/\//.test(source.url) && /^\d{4}-\d{2}-\d{2}$/.test(source.checkedAt), `出典:${id}:URL・確認日`);
  }
  for (const sourceId of collectSourceReferences(intelligence)) {
    addMissing(missing, sources.has(sourceId), `出典参照:${sourceId}`);
  }

  const currencyIssues = collectCurrencyIssues(intelligence);
  if (currencyIssues.length) missing.push(`外貨の円換算:${currencyIssues.slice(0, 3).join(",")}`);
  return [...new Set(missing)];
}

const existingManifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : undefined;
const statusBySlug = new Map(existingManifest?.companies?.map((entry) => [entry.slug, entry.status]) ?? []);
const priorityRank = new Map(COMPANY_PAGE_PRIORITY_ORDER.map((priority, index) => [priority, index]));
const entries = companies.map((company) => {
  const missingFields = assess(company);
  const priority = getCompanyPagePriority(company.salesRoles);
  return {
    slug: company.slug,
    company: company.name,
    priority,
    salesRoles: company.salesRoles,
    status: statusBySlug.get(company.slug) ?? (company.slug === COMPANY_PAGE_STANDARD.canonicalSlug ? "公開済み" : "未着手"),
    standardReady: missingFields.length === 0,
    missingFields,
  };
}).sort((a, b) => priorityRank.get(a.priority) - priorityRank.get(b.priority) || a.company.localeCompare(b.company, "ja"));

const counts = {
  total: entries.length,
  byStatus: Object.fromEntries(["未着手", "調査中", "検証済み", "公開済み"].map((status) => [status, entries.filter((entry) => entry.status === status).length])),
  byPriority: Object.fromEntries(COMPANY_PAGE_PRIORITY_ORDER.map((priority) => [priority, entries.filter((entry) => entry.priority === priority).length])),
  standardReady: entries.filter((entry) => entry.standardReady).length,
};
const manifest = {
  standard: COMPANY_PAGE_STANDARD.id,
  canonical: { path: COMPANY_PAGE_STANDARD.canonicalPath, commit: COMPANY_PAGE_STANDARD.canonicalCommit },
  auditedAt: auditDate,
  statusOrder: ["未着手", "調査中", "検証済み", "公開済み"],
  priorityOrder: COMPANY_PAGE_PRIORITY_ORDER,
  counts,
  companies: entries,
};

const rolloutTable = [
  "# 企業ページ Adyen v1 展開進捗",
  "",
  `最終監査: ${auditDate} / 正本: [Adyen](${COMPANY_PAGE_STANDARD.canonicalPath}) / 基準コミット: \`${COMPANY_PAGE_STANDARD.canonicalCommit}\``,
  "",
  `全${counts.total}社（未着手 ${counts.byStatus["未着手"]} / 調査中 ${counts.byStatus["調査中"]} / 検証済み ${counts.byStatus["検証済み"]} / 公開済み ${counts.byStatus["公開済み"]}）`,
  "",
  "|優先度|企業|営業求人|進捗|標準充足|主な不足|",
  "|---|---|---:|---|---|---|",
  ...entries.map((entry) => {
    const missing = entry.missingFields.length
      ? `${entry.missingFields.slice(0, 4).join("、")}${entry.missingFields.length > 4 ? `ほか${entry.missingFields.length - 4}件` : ""}`
      : "なし";
    return `|${entry.priority}|${entry.company}|${entry.salesRoles}|${entry.status}|${entry.standardReady ? "はい" : "いいえ"}|${missing.replaceAll("|", "／")}|`;
  }),
  "",
  "進捗状態と公開ゲートは `ops/company-page-standard.md` を正本とする。詳細な不足項目は `ops/company-page-rollout.json` を参照。",
  "",
].join("\n");

if (writeManifest) {
  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(rolloutTablePath, rolloutTable);
}

const errors = [];
const allowedStatuses = new Set(manifest.statusOrder);
for (const entry of entries) {
  if (!allowedStatuses.has(entry.status)) errors.push(`${entry.slug}: 不正な進捗状態「${entry.status}」`);
  if ((strictAll || entry.status === "検証済み" || entry.status === "公開済み") && entry.missingFields.length) {
    errors.push(`${entry.slug}(${entry.status}): ${entry.missingFields.join(" / ")}`);
  }
}

if (!writeManifest) {
  if (!existingManifest) errors.push("進捗台帳 ops/company-page-rollout.json がありません。--writeで生成してください。");
  else {
    const existingSlugs = existingManifest.companies.map((entry) => entry.slug).join("|");
    const currentSlugs = entries.map((entry) => entry.slug).join("|");
    if (existingSlugs !== currentSlugs) errors.push("進捗台帳の企業一覧・優先順位が最新データと一致しません。--writeで更新してください。");
  }
  if (!fs.existsSync(rolloutTablePath)) errors.push("進捗管理表 ops/company-page-rollout.md がありません。--writeで生成してください。");
}

const profileSource = fs.readFileSync(path.join(projectRoot, "components/CompanyIntelligenceProfile.tsx"), "utf8");
const profileStyleSource = fs.readFileSync(path.join(projectRoot, "app/globals.css"), "utf8");
if (/adyen/i.test(`${profileSource}\n${profileStyleSource}`)) errors.push("共通UI/CSSにAdyen固有の名称または分岐が残っています。");
for (const forbidden of [
  /isAdyen/,
  /company\.slug\s*[!=]==?\s*["']adyen["']/,
  /Genba仮説・確度/,
  /Feature\(機能\)|Advantage\(優位性\)|Benefit\(メリット\)|Evidence\(証拠\)|Competitor\(競合\)/,
]) {
  if (forbidden.test(profileSource)) errors.push(`共通UIに禁止された企業固有分岐・旧表記があります: ${forbidden}`);
}

if (errors.length) {
  console.error("Adyen v1企業ページ標準の検証に失敗しました:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Adyen v1企業ページ標準: OK");
console.log(`- 全${counts.total}社を監査（HOT ${counts.byPriority.HOT} / Active ${counts.byPriority.Active} / Selective ${counts.byPriority.Selective} / 求人なし ${counts.byPriority["求人なし"]}）`);
console.log(`- 標準充足 ${counts.standardReady}社 / 公開済み ${counts.byStatus["公開済み"]}社`);
console.log(`- 進捗台帳: ${path.relative(projectRoot, manifestPath)}`);
