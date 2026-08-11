import fs from "node:fs";
import path from "node:path";

const target = path.join(process.cwd(), "lib/company-public-intelligence.ts");
const source = fs.readFileSync(target, "utf8");
const errors = [];

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
  source.matchAll(/issueLenses:\s*\[([\s\S]*?)\n\s*\],\n\s*narrative:/g),
  (match) => match[1],
);

const narrativeBlocks = Array.from(
  source.matchAll(/narrative:\s*\[([\s\S]*?)\n\s*\],\n\s*openingHook:/g),
  (match) => match[1],
);

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

if (errors.length) {
  console.error("企業ページの課題啓蒙フォーマット検証に失敗しました:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("企業ページの課題啓蒙フォーマット: OK");
console.log(`- ${intelligenceCount}社すべてで3つの課題視点と4段階のnarrativeを確認`);

