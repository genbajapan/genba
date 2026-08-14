import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";

const root = process.cwd();
const errors = [];

const bundle = await build({
  stdin: {
    contents: `
      import { companies, jobs } from "./lib/market-data.ts";
      import { getCompanyCardSummary } from "./lib/company-card-summary.ts";
      import { getHeadquartersRegion } from "./lib/company-headquarters.ts";
      import { buildHiringHeatRows, getHiringHeatCompanies, hiringHeatCriteria } from "./lib/solution-categories.ts";
      export { companies, jobs, getCompanyCardSummary, getHeadquartersRegion, buildHiringHeatRows, getHiringHeatCompanies, hiringHeatCriteria };
    `,
    resolveDir: root,
    sourcefile: "hiring-heat-validator-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});

const bundledModule = { exports: {} };
new Function("module", "exports", bundle.outputFiles[0].text)(bundledModule, bundledModule.exports);
const {
  companies,
  jobs,
  buildHiringHeatRows,
  getHiringHeatCompanies,
  getCompanyCardSummary,
  getHeadquartersRegion,
  hiringHeatCriteria,
} = bundledModule.exports;

const expectedCriteria = {
  hot: { minimumJobs: 20, minimumCompanies: 10 },
  active: { minimumJobs: 10, minimumCompanies: 5 },
  selective: { minimumJobs: 1, minimumCompanies: 1 },
};

if (JSON.stringify(hiringHeatCriteria) !== JSON.stringify(expectedCriteria)) {
  errors.push(`採用温度の固定基準が仕様と異なります: ${JSON.stringify(hiringHeatCriteria)}`);
}

const companyBySlug = new Map(companies.map((company) => [company.slug, company]));
const jobCounts = new Map();
for (const job of jobs) {
  const company = companyBySlug.get(job.companySlug);
  if (!company) {
    errors.push(`求人 ${job.id} の企業 ${job.companySlug} が企業データにありません。`);
    continue;
  }
  if (company.entryStatus === "not-entered") {
    errors.push(`日本未進出企業 ${company.name} に求人 ${job.id} が紐づいています。`);
  }
  jobCounts.set(job.companySlug, (jobCounts.get(job.companySlug) ?? 0) + 1);

  for (const [field, label] of [
    ["tenureAndPromotion", "在籍年数・昇進"],
    ["priorCompanies", "入社元"],
    ["nextCompanies", "転職先"],
  ]) {
    const content = job.careerInsights[field];
    if (content.length < 180) {
      errors.push(`${job.id}: ${label}が薄すぎます（${content.length}文字）。実測傾向または構造化したGenba仮説を追加してください。`);
    }
    for (const requiredPart of ["【Genba仮説・確度:", "支持材料:", "反証・留保:", "面接で確認:"]) {
      if (!content.includes(requiredPart)) {
        errors.push(`${job.id}: ${label}に「${requiredPart}」がありません。`);
      }
    }
  }
}

for (const company of companies) {
  const expectedSalesRoles = company.entryStatus === "not-entered" ? 0 : jobCounts.get(company.slug) ?? 0;
  const expectedStatus = expectedSalesRoles >= 3 ? "積極採用" : expectedSalesRoles >= 1 ? "採用中" : "継続観測";
  if (company.salesRoles !== expectedSalesRoles) {
    errors.push(`${company.name}: salesRoles=${company.salesRoles}。求人レコードからの算出値は${expectedSalesRoles}です。`);
  }
  if (company.hiringStatus !== expectedStatus) {
    errors.push(`${company.name}: hiringStatus=${company.hiringStatus}。求人レコードからの算出値は${expectedStatus}です。`);
  }

  const cardSummary = getCompanyCardSummary(company);
  if (cardSummary.length < 20 || cardSummary.length > 130) {
    errors.push(`${company.name}: 一覧用の価値説明は20〜130文字にしてください（現在${cardSummary.length}文字）。`);
  }
  if (/(求人|採用|募集|ポジション|営業職)/.test(cardSummary)) {
    errors.push(`${company.name}: 一覧用の価値説明に求人状況の文言が含まれています: ${cardSummary}`);
  }
  for (const forbidden of ["課題「", "主力製品は", "優位性は", "…"]) {
    if (cardSummary.includes(forbidden)) errors.push(`${company.name}: 一覧カードに旧ラベルまたは省略記号「${forbidden}」を含めないでください: ${cardSummary}`);
  }
  if (company.slug === "mongodb") {
    for (const required of ["解決する", "データプラットフォーム企業"] ) {
      if (!cardSummary.includes(required)) errors.push(`MongoDB: 承認済みカードに「${required}」がありません: ${cardSummary}`);
    }
  } else {
    for (const required of ["という課題を", "で解決し", "競合と差別化"]) {
      if (!cardSummary.includes(required)) {
        errors.push(`${company.name}: 一覧用説明に「${required}」がありません: ${cardSummary}`);
      }
    }
  }
  if (/(?:が|し|つなぎ|用い|行い|支援し|実現し)。$/.test(cardSummary)) {
    errors.push(`${company.name}: 一覧用説明が接続助詞・連用形で途切れています: ${cardSummary}`);
  }
  const summaryLead = cardSummary.match(/^(.+?)(?:とは|は)[、,:：\s]*/)?.[1]?.trim().toLocaleLowerCase();
  const displayedName = company.name.trim().toLocaleLowerCase();
  if (summaryLead && (summaryLead === displayedName || displayedName.startsWith(`${summaryLead} `))) {
    errors.push(`${company.name}: 一覧用の価値説明が社名と重複しています: ${cardSummary}`);
  }
  if (getHeadquartersRegion(company.hq) === "other") {
    errors.push(`${company.name}: 本社所在地を地域へ分類できません: ${company.hq}`);
  }
}

const rows = buildHiringHeatRows(companies, jobs);
for (const row of rows) {
  const expectedTier = row.count >= expectedCriteria.hot.minimumJobs && row.companies >= expectedCriteria.hot.minimumCompanies
    ? "hot"
    : row.count >= expectedCriteria.active.minimumJobs && row.companies >= expectedCriteria.active.minimumCompanies
      ? "active"
      : row.count >= expectedCriteria.selective.minimumJobs
        ? "selective"
        : "observing";
  if (row.tier !== expectedTier) {
    errors.push(`${row.area}: ${row.count}件・${row.companies}社は${expectedTier}ですが、${row.tier}に分類されています。`);
  }
}

const tierNames = ["hot", "active", "selective"];
const seenTierCompanies = new Set();
for (const tier of tierNames) {
  const tierCompanies = getHiringHeatCompanies(companies, jobs, tier);
  const tierAreas = new Set(rows.filter((row) => row.tier === tier).map((row) => row.area));
  for (const company of tierCompanies) {
    if (company.entryStatus === "not-entered") {
      errors.push(`${tier}: 日本未進出企業 ${company.name} が混入しています。`);
    }
    if ((jobCounts.get(company.slug) ?? 0) === 0) {
      errors.push(`${tier}: 求人0件の ${company.name} が混入しています。`);
    }
    if (!tierAreas.has(company.broadCategory)) {
      errors.push(`${tier}: ${company.name} の大分類 ${company.broadCategory} が対象領域ではありません。`);
    }
    if (seenTierCompanies.has(company.slug)) {
      errors.push(`${company.name} が複数の採用温度へ重複しています。`);
    }
    seenTierCompanies.add(company.slug);
  }
}

const spec = fs.readFileSync(path.join(root, "docs/10-website-renewal-spec.md"), "utf8");
for (const required of [
  "国内営業求人20件以上、かつ採用企業10社以上",
  "国内営業求人10件以上、かつ採用企業5社以上",
  "求人0件または`entryStatus: \"not-entered\"`の企業を結果へ混ぜない",
  "`積極採用`は3件以上、`採用中`は1〜2件、`継続観測`は0件",
]) {
  if (!spec.includes(required)) errors.push(`Web仕様に採用温度ルールがありません: ${required}`);
}

const heatmapComponent = fs.readFileSync(path.join(root, "components/HiringHeatmap.tsx"), "utf8");
if (!heatmapComponent.includes("プロダクト領域の求人状況温度感をHOT・Active・Selectiveに分類。")) {
  errors.push("採用ヒート説明文が指定文言になっていません。");
}
if (!heatmapComponent.includes("<summary>（分類基準）</summary>")) {
  errors.push("画面遷移なしで開ける分類基準のsummaryがありません。");
}
if (!heatmapComponent.includes("tierStats.hot.companies") || !heatmapComponent.includes("tierStats.active.companies") || !heatmapComponent.includes("tierStats.selective.companies")) {
  errors.push("HOT・Active・Selectiveの見出しに企業数と求人数の自動集計がありません。");
}

const explorerComponent = fs.readFileSync(path.join(root, "components/CompanyExplorer.tsx"), "utf8");
if (!explorerComponent.includes("<span>本社所在地</span>") || !explorerComponent.includes('setOptionalParam("hq"')) {
  errors.push("企業一覧にURL同期する本社所在地フィルターがありません。");
}
const globalStyles = fs.readFileSync(path.join(root, "app/globals.css"), "utf8");
if (/company-card-grid \.data-card > p\s*\{[^}]*display:\s*none/.test(globalStyles)) {
  errors.push("スマホの企業カードで価値説明が非表示になっています。");
}
if (!/\.company-card-value\s*\{[^}]*display:\s*block;[^}]*overflow:\s*visible/.test(globalStyles)) {
  errors.push("デスクトップの企業カードがFABE価値説明を途中で切らずに表示できていません。");
}
if (!/company-card-grid \.data-card > p\s*\{[^}]*overflow:\s*visible;[^}]*-webkit-line-clamp:\s*unset/.test(globalStyles)) {
  errors.push("スマホの企業カードがFABE価値説明を途中で切らずに表示できていません。");
}

if (errors.length) {
  console.error("採用温度ルールの検証に失敗しました:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const preEntryCount = companies.filter((company) => company.entryStatus === "not-entered").length;
console.log("採用温度ルール: OK");
console.log(`- 固定基準: HOT ${expectedCriteria.hot.minimumJobs}件/${expectedCriteria.hot.minimumCompanies}社、Active ${expectedCriteria.active.minimumJobs}件/${expectedCriteria.active.minimumCompanies}社、Selective ${expectedCriteria.selective.minimumJobs}件以上`);
console.log(`- 日本未進出 ${preEntryCount}社と求人0件企業の3分類からの除外を確認`);
console.log("- 企業単位のsalesRoles・hiringStatus自動算出を確認");
console.log(`- ${companies.length}社すべてで価値説明と本社所在地分類を確認`);
