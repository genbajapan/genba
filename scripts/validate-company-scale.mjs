import { build } from "esbuild";

const bundle = await build({
  stdin: {
    contents: `
      import { companies } from "./lib/market-data.ts";
      import { getAllCompanyPublicIntelligence } from "./lib/company-public-intelligence.ts";
      import { getCompanyScaleComparisons } from "./lib/company-scale-comparison.ts";
      import { addYenConversions } from "./lib/currency-display.ts";
      export { companies, getAllCompanyPublicIntelligence, getCompanyScaleComparisons, addYenConversions };
    `,
    resolveDir: process.cwd(),
    sourcefile: "company-scale-validator-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});

const runtimeModule = { exports: {} };
new Function("module", "exports", bundle.outputFiles[0].text)(runtimeModule, runtimeModule.exports);
const { companies, getAllCompanyPublicIntelligence, getCompanyScaleComparisons, addYenConversions } = runtimeModule.exports;
const intelligenceBySlug = getAllCompanyPublicIntelligence();
const errors = [];
const dollarPattern = /(?:\$[\d,.]+(?:\.\d+)?(?:[KMB]|万|億|兆)?|[\d,.]+(?:\.\d+)?(?:万|億|兆)?ドル)(?!\s*=)/gi;

if (addYenConversions("1ドル=157円換算") !== "1ドル=157円換算") errors.push("換算レート自体へ円換算を重複表示しています。");
if (addYenConversions("$100.9M(約1,584億円)") !== "$100.9M(約158億円)") errors.push("既存の誤ったドル円換算を正規化できません。");
if (addYenConversions("10万ドル以上") !== "10万ドル(約1,570万円)以上") errors.push("日本語のドル金額へ円換算を追加できません。");

function inspectCurrency(value, path = "") {
  if (typeof value === "string") {
    for (const match of value.matchAll(dollarPattern)) {
      const suffix = value.slice((match.index ?? 0) + match[0].length);
      if (!/^\(約[\d,.]+(?:\.\d+)?(?:兆|億|万)?円\)/.test(suffix)) {
        errors.push(`${path}: 円換算のないドル表記があります: ${match[0]}`);
      }
    }
    return;
  }
  if (Array.isArray(value)) return value.forEach((child, index) => inspectCurrency(child, `${path}[${index}]`));
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (key === "url" || key.endsWith("Url")) continue;
    inspectCurrency(child, path ? `${path}.${key}` : key);
  }
}

for (const company of companies) {
  const intelligence = intelligenceBySlug[company.slug];
  if (!intelligence) {
    errors.push(`${company.slug}: CompanyPublicIntelligenceがありません。`);
    continue;
  }
  inspectCurrency(intelligence, company.slug);
  const comparison = getCompanyScaleComparisons(company, companies);
  if (comparison.revenueBasis && comparison.revenue.length < 3) errors.push(`${company.slug}: 売上比較企業が3社未満です。`);
  if (comparison.headcountBasis && comparison.headcount.length < 3) errors.push(`${company.slug}: 従業員数比較企業が3社未満です(${comparison.headcountBasis} / ${comparison.headcount.length}社)。`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("企業規模比較・ドル円換算: OK");
console.log(`- 公開対象 ${companies.length}社すべてに共通の規模比較データを適用`);
console.log("- 売上・従業員数が確認できる企業は、近い企業を3社以上表示");
console.log("- 公開インテリジェンス内のドル金額に1ドル=157円の概算を併記");
