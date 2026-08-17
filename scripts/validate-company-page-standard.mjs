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
      import { getJobRoleMarketArchetype } from "./lib/company-page-rollout-job-standard.ts";
      export { companies, jobs, getAllCompanyPublicIntelligence, COMPANY_PAGE_STANDARD, COMPANY_PAGE_PRIORITY_ORDER, getCompanyPagePriority, getJobRoleMarketArchetype };
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
  getJobRoleMarketArchetype,
} = runtimeModule.exports;
const intelligenceBySlug = getAllCompanyPublicIntelligence();
const jobsBySlug = new Map();
for (const job of jobs) jobsBySlug.set(job.companySlug, [...(jobsBySlug.get(job.companySlug) ?? []), job]);
let officialCompensationJobs = 0;
let hypothesisCompensationJobs = 0;
let externalReputationJobs = 0;
const externalReputationCompanies = new Set();
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
  addMissing(missing, intelligence.companyStats?.japanHeadcount?.value, "国内被保険者数");
  addMissing(missing, !/(?:非公開|確認不能|確認できず|未確認)/.test(intelligence.companyStats?.japanHeadcount?.value ?? ""), "国内被保険者数:gBizINFO監査ステータス");
  addMissing(missing, intelligence.companyStats?.japanHeadcount?.sourceId?.startsWith("gbiz-headcount-"), "国内被保険者数:gBizINFO出典");
  addMissing(missing, /(?:被保険者|対象外)/.test(intelligence.companyStats?.japanHeadcount?.detail ?? ""), "国内被保険者数:定義・対象範囲");
  addMissing(missing, intelligence.marketStatus?.milestones?.some((item) => item.label.includes("創業")), "創業年");
  if (company.entryStatus !== "not-entered") {
    addMissing(missing, intelligence.marketStatus?.milestones?.some((item) => item.label.includes("日本") && /(進出|開始|設立)/.test(item.label)), "日本進出年");
  }
  addMissing(missing, intelligence.facts?.length >= 3, "主要指標");
  addMissing(missing, intelligence.salesMarketOutlook?.paragraphs?.length >= 2, "日本市場の需要・3〜5年の見立て");
  addMissing(missing, intelligence.salesFabeOverview?.fabeRows?.length === 5, "FABE分析と競合比較");
  if (intelligence.salesFabeOverview) {
    const heroSummary = intelligence.salesFabeOverview.summary.trim();
    const featureRow = intelligence.salesFabeOverview.fabeRows.find((row) => row.key === "feature")?.analysis.trim();
    const sentenceCount = heroSummary.split("。").filter(Boolean).length;
    addMissing(missing, heroSummary.length >= 80, "ヒーロー説明:課題・解決・成果の粒度");
    addMissing(missing, sentenceCount >= COMPANY_PAGE_STANDARD.heroSummary.minimumSentences, "ヒーロー説明:2文以上");
    addMissing(missing, heroSummary !== featureRow, "ヒーロー説明:Feature欄の転用禁止");
    addMissing(missing, /(課題|困|分断|分かれ|手作業|遅|できない|負荷|リスク|機密|実験|取りこぼし|属人)/.test(heroSummary), "ヒーロー説明:顧客課題");
    addMissing(missing, /(解決|改善|減ら|高め|つな|変え|支援|実現|移せ|広げ|成果|売上|コスト|速度|安全|収益|生産性|定着|時間|工数|意思決定|投資効果|統合|自動化|一元管理|運用)/.test(heroSummary), "ヒーロー説明:解決と事業成果");
  }
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
    addMissing(missing, job.compensationResearch, `${prefix}:職種別の報酬調査`);
    if (job.compensationResearch) {
      const breakdown = job.compensationResearch.breakdown ?? [];
      const isOfficial = breakdown.length > 0 && breakdown.every((item) => /公式/.test(item.status));
      if (isOfficial) {
        officialCompensationJobs += 1;
        addMissing(missing, breakdown.every((item) => /\d/.test(item.value)), `${prefix}:公式報酬の数値レンジ`);
      } else {
        hypothesisCompensationJobs += 1;
        addMissing(missing, breakdown.length >= 3 && breakdown.some((item) => /Genba(?:仮説|推定)/.test(item.status)), `${prefix}:報酬仮説の算定内訳`);
        addMissing(missing, breakdown.some((item) => /固定給/.test(item.label) && /\d/.test(item.value)), `${prefix}:推定固定給レンジ`);
        addMissing(missing, breakdown.some((item) => /OTE|総現金報酬/.test(item.label) && /\d/.test(item.value)), `${prefix}:推定OTE・総現金報酬レンジ`);
        addMissing(missing, breakdown.some((item) => /Pay model|変動給|固定給：変動給/.test(item.label) && item.value.length >= 5), `${prefix}:Pay modelの前提`);
        addMissing(missing, /(?:equity|株式報酬)は含めない/.test(JSON.stringify(breakdown)), `${prefix}:equityを現金報酬から除外`);
        addMissing(missing, job.compensationResearch.sources?.some((source) => /salary guide/i.test(`${source.label} ${source.url}`)) || job.compensationResearch.sources?.length >= 3, `${prefix}:報酬仮説の市場benchmark`);
      }
      addMissing(missing, !/確認不能|非公開$/.test(job.compensationResearch.headline), `${prefix}:確認不能で止めない報酬仮説`);
    }
    addMissing(missing, job.reputationResearch?.positiveTopics?.length && job.reputationResearch?.negativeTopics?.length, `${prefix}:ポジティブ・ネガティブ評判`);
    if (job.reputationResearch) {
      const reputationText = JSON.stringify(job.reputationResearch);
      const hasExternalSource = job.reputationResearch.sources?.some((source) =>
        /glassdoor|indeed|comparably|repvue|openwork|greatplacetowork|trustpilot|ambitionbox|reddit|lightbrd|demoday/i.test(source.url),
      );
      if (hasExternalSource) {
        externalReputationJobs += 1;
        externalReputationCompanies.add(job.companySlug);
      }
      addMissing(missing, hasExternalSource, `${prefix}:海外を含む外部評判source`);
      addMissing(missing, /【Genba仮説】/.test(job.reputationResearch.summary), `${prefix}:職種別の評判仮説`);
      addMissing(missing, /【海外レビュー参考】/.test(reputationText), `${prefix}:海外reviewの肯定・注意theme`);
      addMissing(missing, /quota|territory|portfolio|PoC|utilization|SLA|pipeline|KPI|partner/.test(reputationText), `${prefix}:職種固有の検証論点`);
      addMissing(missing, !/確認できない[。.]?$|情報(?:が)?ない[。.]?$/.test(job.reputationResearch.summary), `${prefix}:情報なしで止めない評判分析`);
    }
    addMissing(missing, job.marketValueResearch?.skills?.length && job.marketValueResearch?.nextRoles?.length && job.marketValueResearch?.marketBands?.length, `${prefix}:市場価値`);
    if (job.marketValueResearch) {
      addMissing(missing, job.marketValueResearch.marketBands.every((band) => /\d/.test(band.range) && !/確認不能|非公開/.test(band.range)), `${prefix}:数値ありの職種別報酬帯`);
      addMissing(missing, job.marketValueResearch.nextRoles.every((role) => role.title.trim().toLowerCase() !== job.title.trim().toLowerCase()), `${prefix}:現職と異なる次の役割`);
    }
  }

  const marketOutputBySignature = new Map();
  for (const job of companyJobs) {
    if (!job.marketValueResearch) continue;
    const signature = JSON.stringify({ nextRoles: job.marketValueResearch.nextRoles, marketBands: job.marketValueResearch.marketBands });
    const archetype = getJobRoleMarketArchetype(job);
    const previous = marketOutputBySignature.get(signature);
    if (previous && previous.archetype !== archetype) {
      missing.push(`異なる職種で市場価値が同一:${previous.title}≠${job.title}`);
    } else if (!previous) {
      marketOutputBySignature.set(signature, { archetype, title: job.title });
    }
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
  "# 企業ページ 共通企業ページv1 展開進捗",
  "",
  `最終監査: ${auditDate} / 公開見本: [Figma](${COMPANY_PAGE_STANDARD.canonicalPath}) / 基準コミット: \`${COMPANY_PAGE_STANDARD.canonicalCommit}\``,
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
if (!COMPANY_PAGE_STANDARD.layout?.heroDisclosureBoundedToContentColumn) errors.push("ヒーロー展開パネルを本文カラム内に収める標準が未定義です。");
if (COMPANY_PAGE_STANDARD.layout?.allowHorizontalResize !== false) errors.push("ヒーロー展開パネルの横方向リサイズは禁止してください。");
if (COMPANY_PAGE_STANDARD.layout?.wideTableOverflow !== "horizontal-scroll") errors.push("幅の広い表はパネル内横スクロールを標準にしてください。");
if (/company-sales-(?:table|content)-resize-note/.test(profileSource)) errors.push("共通UIに横方向リサイズの案内が残っています。");
if (/\.company-(?:sales-fabe-details[^\{]*\.company-sales-table-scroll|market-outlook-resizable)\s*\{[^}]*resize\s*:\s*horizontal/s.test(profileStyleSource)) errors.push("ヒーロー展開パネルに横方向リサイズが残っています。");
if (!/\.company-identity\s*\{[^}]*min-width\s*:\s*0/s.test(profileStyleSource)) errors.push("ヒーロー本文カラムの縮小許可がありません。");
if (!/\.company-market-outlook-resizable\s*\{[^}]*width\s*:\s*100%[^}]*max-width\s*:\s*100%/s.test(profileStyleSource)) errors.push("市場見立てパネルが本文カラム幅に制限されていません。");
for (const forbidden of [
  /isAdyen/,
  /company\.slug\s*[!=]==?\s*["']adyen["']/,
  /Genba仮説・確度/,
  /Feature\(機能\)|Advantage\(優位性\)|Benefit\(メリット\)|Evidence\(証拠\)|Competitor\(競合\)/,
]) {
  if (forbidden.test(profileSource)) errors.push(`共通UIに禁止された企業固有分岐・旧表記があります: ${forbidden}`);
}

if (errors.length) {
  console.error("共通企業ページv1の検証に失敗しました:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("共通企業ページv1: OK");
console.log(`- 全${counts.total}社を監査（HOT ${counts.byPriority.HOT} / Active ${counts.byPriority.Active} / Selective ${counts.byPriority.Selective} / 求人なし ${counts.byPriority["求人なし"]}）`);
console.log(`- 標準充足 ${counts.standardReady}社 / 公開済み ${counts.byStatus["公開済み"]}社`);
console.log(`- 給与レンジ ${jobs.length}求人（公式 ${officialCompensationJobs} / Genba仮説 ${hypothesisCompensationJobs} / 未算定 ${jobs.length - officialCompensationJobs - hypothesisCompensationJobs}）`);
console.log(`- 海外を含む外部評判 ${externalReputationJobs}/${jobs.length}求人・${externalReputationCompanies.size}/${jobsBySlug.size}社（全件に職種別Genba仮説）`);
console.log(`- 進捗台帳: ${path.relative(projectRoot, manifestPath)}`);
