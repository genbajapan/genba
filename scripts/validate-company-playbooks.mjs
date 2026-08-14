import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";

const targets = [
  "lib/company-public-intelligence.ts",
  "lib/company-public-intelligence-expansion.ts",
  "lib/company-public-intelligence-wave-two.ts",
  "lib/company-public-intelligence-pre-entry.ts",
  "lib/company-public-intelligence-wave-three.ts",
  "lib/company-public-intelligence-pre-entry-wave-two.ts",
  "lib/company-public-intelligence-wave-four.ts",
  "lib/company-public-intelligence-pre-entry-wave-three.ts",
  "lib/company-public-intelligence-daily-2026-08-13.ts",
].map((target) => path.join(process.cwd(), target));
const source = targets
  .map((target) => fs.readFileSync(target, "utf8"))
  .join("\n");
const errors = [];
const marketDataSource = fs.readFileSync(path.join(process.cwd(), "lib/market-data.ts"), "utf8");

const runtimeBundle = await build({
  stdin: {
    contents: `
      import { companies } from "./lib/market-data.ts";
      import { getCompanyPublicIntelligence } from "./lib/company-public-intelligence.ts";
      import { getCompanyDirectoryEntry } from "./lib/company-directory.ts";
      import { getCompanyFABESalesSnapshot, getSolutionFABE } from "./lib/company-fabe.ts";
      export { companies, getCompanyPublicIntelligence, getCompanyDirectoryEntry, getCompanyFABESalesSnapshot, getSolutionFABE };
    `,
    resolveDir: process.cwd(),
    sourcefile: "company-playbook-validator-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});
const runtimeModule = { exports: {} };
new Function("module", "exports", runtimeBundle.outputFiles[0].text)(runtimeModule, runtimeModule.exports);
const {
  companies: runtimeCompanies,
  getCompanyPublicIntelligence,
  getCompanyDirectoryEntry,
  getCompanyFABESalesSnapshot,
  getSolutionFABE,
} = runtimeModule.exports;

const expectedIssueLenses = [
  "既存顧客の導入目的から見る課題",
  "製品の成り立ちから見る課題",
  "外部環境の要求から見る課題",
];

const expectedNarrative = ["背景", "課題", "解決策", "選定の理由"];

const intelligenceCount = Array.from(
  source.matchAll(/const\s+\w+Intelligence:\s+CompanyPublicIntelligence\s*=/g),
).length;

const issueBlocks = Array.from(
  source.matchAll(/issueLenses:\s*\[([\s\S]*?)\s*\],\s*narrative:/g),
  (match) => match[1],
);

const narrativeBlocks = Array.from(
  source.matchAll(/narrative:\s*\[([\s\S]*?)\s*\],\s*openingHook:/g),
  (match) => match[1],
);

const salesSnapshots = Array.from(
  source.matchAll(/salesSnapshot:\s*"([^"]+)"/g),
  (match) => match[1],
);

const entryAssessmentBlocks = Array.from(
  source.matchAll(/entryAssessment:\s*\{([\s\S]*?)\n\s*\},\n\s*sourceIds:/g),
  (match) => match[1],
);

const companySlugs = new Set(Array.from(
  marketDataSource.matchAll(/\bslug:\s*"([a-z0-9-]+)"/g),
  (match) => match[1],
));

for (const slug of companySlugs) {
  if (!getCompanyDirectoryEntry(slug)) errors.push(`company-directoryに${slug}の公式サイト定義がありません。`);
}

const notEnteredCompanies = runtimeCompanies.filter((company) => company.entryStatus === "not-entered");
const notEnteredCount = notEnteredCompanies.length;
const missingEntryAssessments = notEnteredCompanies.filter((company) => (
  !getCompanyPublicIntelligence(company.slug)?.marketStatus?.japanGrowth?.entryAssessment
));
if (missingEntryAssessments.length) {
  errors.push(`日本未進出企業のentryAssessmentがありません: ${missingEntryAssessments.map((company) => company.slug).join(", ")}`);
}

let runtimeSolutionCount = 0;
for (const company of runtimeCompanies) {
  const intelligence = getCompanyPublicIntelligence(company.slug);
  if (!intelligence) {
    errors.push(`${company.slug}: CompanyPublicIntelligenceがありません。`);
    continue;
  }

  const fabeSnapshot = getCompanyFABESalesSnapshot(intelligence);
  for (const required of ["主力製品", "機能は", "優位性は", "顧客メリットは", "根拠は"]) {
    if (!fabeSnapshot.includes(required)) errors.push(`${company.slug}: FABEセールスサマリーに「${required}」がありません。`);
  }
  if (Array.from(fabeSnapshot.matchAll(/「/g)).length < 3) {
    errors.push(`${company.slug}: FABEセールスサマリーに顧客課題3点がありません。`);
  }

  if (!intelligence.solutions.length) errors.push(`${company.slug}: solutionsが空です。`);
  for (const solution of intelligence.solutions) {
    runtimeSolutionCount += 1;
    const fabe = getSolutionFABE(intelligence, solution);
    for (const [field, label] of [
      ["feature", "Feature"],
      ["advantage", "Advantage"],
      ["benefit", "Benefit"],
      ["evidence", "Evidence"],
      ["competitor", "Competitor"],
    ]) {
      if (!fabe[field] || fabe[field].length < 20) {
        errors.push(`${company.slug}/${solution.name}: ${label}の説明が薄すぎます。`);
      }
    }
    if (!/(競合|代替|比較)/.test(fabe.advantage)) {
      errors.push(`${company.slug}/${solution.name}: Advantageに相対比較の視点がありません。`);
    }
    if (!/(公式|法定|公開|事例)/.test(fabe.evidence)) {
      errors.push(`${company.slug}/${solution.name}: Evidenceに根拠の種類がありません。`);
    }
    if (!fabe.competitor.includes("比較時は")) {
      errors.push(`${company.slug}/${solution.name}: Competitorに比較軸がありません。`);
    }
  }
}

const profileComponent = fs.readFileSync(path.join(process.cwd(), "components/CompanyIntelligenceProfile.tsx"), "utf8");
const expectedFabeLabels = ["Feature(機能)", "Advantage(優位性)", "Benefit(メリット)", "Evidence(証拠)", "Competitor(競合)"];
let previousLabelIndex = -1;
for (const label of expectedFabeLabels) {
  const labelIndex = profileComponent.indexOf(label);
  if (labelIndex < 0) errors.push(`ソリューション詳細に「${label}」がありません。`);
  if (labelIndex >= 0 && labelIndex < previousLabelIndex) errors.push(`ソリューション詳細の「${label}」の順序がFABE標準と異なります。`);
  previousLabelIndex = labelIndex;
}
for (const required of ["セールス観点から見たこの会社", "(FABE分析ベース)", "FABE分析とは", "<summary>(FABE分析ベース)</summary>"]) {
  if (!profileComponent.includes(required)) errors.push(`FABEセールスサマリーUIに「${required}」がありません。`);
}

entryAssessmentBlocks.forEach((block, index) => {
  const factSignals = block.match(/factSignals:\s*\[([\s\S]*?)\s*\],\s*hurdles:/)?.[1] ?? "";
  const hurdles = block.match(/hurdles:\s*\[([\s\S]*?)\s*\],\s*readinessConditions:/)?.[1] ?? "";
  const readinessConditions = block.match(/readinessConditions:\s*\[([\s\S]*?)\s*\],\s*watchSignals:/)?.[1] ?? "";
  const watchSignals = block.match(/watchSignals:\s*\[([\s\S]*?)\s*\],?\s*$/)?.[1] ?? "";
  const countTitles = (value) => Array.from(value.matchAll(/\btitle:\s*"/g)).length;
  const watchSignalCount = Array.from(watchSignals.matchAll(/"[^"]+"/g)).length;

  if (!/\bverdict:\s*"[^"]+"/.test(block)) errors.push(`entryAssessment #${index + 1}: verdictがありません。`);
  if (countTitles(factSignals) < 4) errors.push(`entryAssessment #${index + 1}: factSignalsは4件以上必要です。`);
  if (countTitles(hurdles) < 4) errors.push(`entryAssessment #${index + 1}: hurdlesは4件以上必要です。`);
  if (countTitles(readinessConditions) < 5) errors.push(`entryAssessment #${index + 1}: readinessConditionsは5件以上必要です。`);
  if (watchSignalCount < 6) errors.push(`entryAssessment #${index + 1}: watchSignalsは6件以上必要です。`);
});

function extractValues(block, key) {
  return Array.from(
    block.matchAll(new RegExp(`\\b${key}:\\s*"([^"]+)"`, "g")),
    (match) => match[1],
  );
}

function sameValues(actual, expected) {
  return actual.length === expected.length && actual.every((value, index) => value === expected[index]);
}

if (issueBlocks.length !== intelligenceCount) {
  errors.push(`CompanyPublicIntelligence ${intelligenceCount}件に対し、issueLensesは${issueBlocks.length}件です。`);
}

if (narrativeBlocks.length !== intelligenceCount) {
  errors.push(`CompanyPublicIntelligence ${intelligenceCount}件に対し、narrativeは${narrativeBlocks.length}件です。`);
}

if (salesSnapshots.length !== intelligenceCount) {
  errors.push(`CompanyPublicIntelligence ${intelligenceCount}件に対し、salesSnapshotは${salesSnapshots.length}件です。`);
}

issueBlocks.forEach((block, index) => {
  const actual = extractValues(block, "title");
  if (!sameValues(actual, expectedIssueLenses)) {
    errors.push(`issueLenses #${index + 1}: ${JSON.stringify(actual)}。標準は${JSON.stringify(expectedIssueLenses)}です。`);
  }
});

narrativeBlocks.forEach((block, index) => {
  const actual = extractValues(block, "label");
  if (!sameValues(actual, expectedNarrative)) {
    errors.push(`narrative #${index + 1}: ${JSON.stringify(actual)}。標準は${JSON.stringify(expectedNarrative)}です。`);
  }
});

salesSnapshots.forEach((snapshot, index) => {
  const issueCount = Array.from(snapshot.matchAll(/「/g)).length;
  if (issueCount !== 3) {
    errors.push(`salesSnapshot #${index + 1}: 顧客課題は3点必要ですが、${issueCount}点です。`);
  }
  if (!snapshot.includes("営業としての面白さ")) {
    errors.push(`salesSnapshot #${index + 1}: 営業としての面白さが明記されていません。`);
  }
  if (/(です|ます)。/.test(snapshot)) {
    errors.push(`salesSnapshot #${index + 1}: です・ます調ではなく断定調で記載してください。`);
  }
});

if (errors.length) {
  console.error("企業ページの課題啓蒙フォーマット検証に失敗しました:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("企業ページの課題啓蒙フォーマット: OK");
console.log(`- ${intelligenceCount}社すべてで3つの課題視点と4段階のnarrativeを確認`);
console.log(`- ${salesSnapshots.length}社すべてで営業視点サマリーの標準構成を確認`);
console.log(`- 公開対象 ${runtimeCompanies.length}社・${runtimeSolutionCount}ソリューションのFABEと競合比較を確認`);
console.log(`- 基礎登録 ${companySlugs.size}社の公式トップページ導線を確認`);
console.log(`- 日本未進出企業 ${notEnteredCount}社すべてでGong基準のentryAssessmentを確認`);
