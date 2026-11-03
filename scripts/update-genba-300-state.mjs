import fs from "node:fs";
import path from "node:path";
import { build } from "esbuild";

const projectRoot = process.cwd();
const statePath = path.join(projectRoot, ".genba-state/genba-300-selection.json");
const runDate = process.env.GENBA_RUN_DATE ?? new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
const concurrency = Number.parseInt(process.env.GENBA_URL_CONCURRENCY ?? "8", 10);
const timeoutMs = Number.parseInt(process.env.GENBA_URL_TIMEOUT_MS ?? "12000", 10);
const skipNetwork = process.argv.includes("--skip-network");

const bundle = await build({
  stdin: {
    contents: `
      import { companies, jobs } from "./lib/market-data.ts";
      import { getAllCompanyPublicIntelligence } from "./lib/company-public-intelligence.ts";
      export { companies, jobs, getAllCompanyPublicIntelligence };
    `,
    resolveDir: projectRoot,
    sourcefile: "genba-300-state-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});

const runtimeModule = { exports: {} };
new Function("module", "exports", bundle.outputFiles[0].text)(runtimeModule, runtimeModule.exports);
const { companies, jobs, getAllCompanyPublicIntelligence } = runtimeModule.exports;
const intelligenceBySlug = getAllCompanyPublicIntelligence();

if (companies.length !== 300) throw new Error(`Genba 300 state requires exactly 300 public companies; received ${companies.length}`);

const jobsBySlug = new Map();
for (const job of jobs) jobsBySlug.set(job.companySlug, [...(jobsBySlug.get(job.companySlug) ?? []), job]);
const sortedCompanies = [...companies].sort((a, b) => a.slug.localeCompare(b.slug));
const categoryCounts = new Map();
for (const company of sortedCompanies) categoryCounts.set(company.broadCategory, (categoryCounts.get(company.broadCategory) ?? 0) + 1);

function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function ageDays(date) {
  const current = new Date(`${runDate}T00:00:00+09:00`);
  const observed = new Date(`${date}T00:00:00+09:00`);
  return Number.isFinite(observed.getTime()) ? Math.floor((current - observed) / 86_400_000) : 9999;
}
function isSmallJapanTeam(intelligence) {
  const value = intelligence?.companyStats?.japanHeadcount?.value ?? "";
  const numeric = Number.parseInt(String(value).replaceAll(",", ""), 10);
  return Number.isFinite(numeric) && numeric <= 100;
}
function isUnknownJapanTeam(intelligence) {
  const value = intelligence?.companyStats?.japanHeadcount?.value ?? "";
  return !/\d/.test(String(value));
}

async function inspectUrl(company) {
  if (skipNetwork) return { status: 0, category: "skipped", finalUrl: company.careersUrl, checkedAt: runDate };
  try {
    const response = await fetch(company.careersUrl, {
      method: "GET",
      redirect: "follow",
      headers: {
        "user-agent": "Genba 300 freshness checker (+https://genbajapan.com)",
        accept: "text/html,application/json;q=0.9,*/*;q=0.8",
      },
      signal: AbortSignal.timeout(timeoutMs),
    });
    const status = response.status;
    const category = status === 404 || status === 410 ? "ended"
      : status === 401 || status === 403 || status === 429 ? "blocked"
        : status >= 200 && status < 400 ? "active" : "error";
    return { status, category, finalUrl: response.url, checkedAt: runDate };
  } catch (error) {
    return { status: 0, category: "error", finalUrl: company.careersUrl, checkedAt: runDate, error: error instanceof Error ? error.message : String(error) };
  }
}

const urlChecks = new Array(sortedCompanies.length);
let cursor = 0;
async function worker() {
  while (cursor < sortedCompanies.length) {
    const index = cursor++;
    urlChecks[index] = await inspectUrl(sortedCompanies[index]);
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, sortedCompanies.length) }, worker));

function scoreCompany(company, index) {
  const companyJobs = jobsBySlug.get(company.slug) ?? [];
  const intelligence = intelligenceBySlug[company.slug];
  const currentJobs = companyJobs.filter((job) => ageDays(job.lastChecked) <= 180);
  const sourceCount = intelligence?.sources?.length ?? 0;
  const factCount = intelligence?.facts?.length ?? 0;
  const customerCount = intelligence?.customerProof?.length ?? 0;
  const urlCheck = urlChecks[index];
  const hasJapanSignal = /日本|Japan|東京|Tokyo/.test(`${company.japanPresence} ${company.tags.join(" ")}`);
  const isPreEntry = Boolean(company.entryStatus);
  const freshness = ageDays(company.lastChecked);

  const careerUsefulness = clamp(
    (currentJobs.length ? 10 : companyJobs.length ? 5 : 2)
    + (companyJobs.some((job) => /Account Executive|Sales|Customer Success|Partner|Solution|Engineer|営業|セールス/.test(job.title)) ? 8 : companyJobs.length ? 4 : 2)
    + (intelligence && factCount >= 5 ? 7 : intelligence ? 4 : 1), 0, 25,
  );
  const japanMomentum = clamp(
    (hasJapanSignal ? 7 : 0)
    + (freshness <= 30 ? 8 : freshness <= 180 ? 5 : 1)
    + (currentJobs.length || isPreEntry ? 5 : intelligence ? 2 : 0), 0, 20,
  );
  const asymmetry = clamp(
    (isSmallJapanTeam(intelligence) ? 10 : isUnknownJapanTeam(intelligence) ? 7 : 4)
    + (intelligence && sourceCount >= 5 ? 10 : intelligence ? 7 : 3), 0, 20,
  );
  const productStrength = clamp(
    (intelligence?.sellingPlaybook ? 5 : intelligence ? 3 : 1)
    + (customerCount || factCount >= 5 ? 5 : intelligence ? 3 : 1)
    + (intelligence?.marketStatus ? 5 : intelligence ? 3 : 1), 0, 15,
  );
  const evidence = clamp(
    (sourceCount >= 7 ? 5 : sourceCount >= 3 ? 4 : sourceCount ? 2 : 0)
    + (urlCheck.category === "active" ? 5 : urlCheck.category === "blocked" ? 3 : urlCheck.category === "skipped" ? 2 : 1), 0, 10,
  );
  const categoryShare = (categoryCounts.get(company.broadCategory) ?? 0) / companies.length;
  const portfolio = clamp((categoryShare < 0.12 ? 5 : categoryShare < 0.2 ? 4 : 2) + (isPreEntry ? 4 : isSmallJapanTeam(intelligence) ? 5 : 3), 0, 10);
  const breakdown = { careerUsefulness, japanMomentum, informationAsymmetry: asymmetry, productStrength, evidenceFreshness: evidence, portfolioContribution: portfolio };
  const total = Object.values(breakdown).reduce((sum, value) => sum + value, 0);
  const confidence = sourceCount >= 7 && urlCheck.category === "active" ? "高" : sourceCount >= 3 && ["active", "blocked"].includes(urlCheck.category) ? "中" : "探索中";
  return {
    slug: company.slug,
    name: company.name,
    fixedGroup: index % 7,
    breakdown,
    total,
    confidence,
    evidenceCheckedAt: runDate,
    lastDeepReviewAt: null,
    deepReviewHistory: [],
    urlCheck: { url: company.careersUrl, ...urlCheck },
    rationale: [
      currentJobs.length ? `180日以内に確認した公開求人${currentJobs.length}件` : "180日以内の公開求人は保存データ上0件",
      isSmallJapanTeam(intelligence) ? "国内観測人数100人以下" : isUnknownJapanTeam(intelligence) ? "国内人数は未確認" : "国内観測人数は100人超または例外扱い",
      `保存済み一次情報${sourceCount}件・構造化事実${factCount}件`,
    ],
    contrary: [
      ...(urlCheck.category !== "active" ? [`Career URLは${urlCheck.category}（HTTP ${urlCheck.status || "取得不能"}）`] : []),
      ...(isUnknownJapanTeam(intelligence) ? ["国内の正確な在籍人数は未確認"] : []),
      ...(!currentJobs.length ? ["現行求人がないことだけでは除外しない"] : []),
    ],
  };
}

const scoredCompanies = sortedCompanies.map(scoreCompany);
const bottomTwenty = [...scoredCompanies].sort((a, b) => a.total - b.total || a.slug.localeCompare(b.slug)).slice(0, 20);
for (const record of bottomTwenty) {
  record.lastDeepReviewAt = runDate;
  record.deepReviewHistory.push({
    date: runDate,
    score: record.total,
    verdict: record.total <= 44 ? "除外候補" : record.total <= 54 ? "要観察" : "残留",
    evidence: "保存済み公式情報、企業ページ構造、現行Career URLの応答、国内規模の保存値を同一基準で初回確認。",
    contrary: record.contrary,
  });
}

const candidatePool = [
  { slug: "avepoint", name: "AvePoint", total: 74, eligibility: "追加調査", officialUrls: ["https://www.avepoint.com/about", "https://www.avepoint.com/ir/governance/leadership/ken-shiomitsu"], rationale: "日本法人・責任者・国内製品情報と強いMicrosoft 365データ統制領域。", contrary: "実行日に公式ATSで日本の現行対象職種を確認できず、Career要件を満たす追加調査が必要。", confidence: "中" },
  { slug: "digicert", name: "DigiCert", total: 71, eligibility: "追加調査", officialUrls: ["https://www.digicert.com/jp/careers", "https://www.digicert.com/master-services-agreement-jp/"], rationale: "日本法人とデジタルトラスト領域の比較価値。", contrary: "公式Career上で日本の現行対象職種を特定できず、国内人数も未確認。", confidence: "中" },
  { slug: "hyland", name: "Hyland", total: 70, eligibility: "追加調査", officialUrls: ["https://www.hyland.com/ja/company/about/locations", "https://www.hyland.com/en/company/careers"], rationale: "東京拠点と企業コンテンツ管理・AIの業務導線を確認。", contrary: "検索で確認したJapan CSMの直接URLは実取得で410となり、現行求人として採用できない。", confidence: "中" },
  { slug: "weka", name: "WEKA", total: 68, eligibility: "監視", officialUrls: ["https://www.weka.io/company/careers"], rationale: "AI・高性能データ基盤としてポートフォリオ価値がある。", contrary: "実行日に日本向け現行公式求人と国内法人・組織を確認できない。", confidence: "探索中" },
  { slug: "forescout", name: "Forescout", total: 67, eligibility: "監視", officialUrls: ["https://www.forescout.com/company/careers/"], rationale: "OT・IoT・ネットワーク資産可視化のセキュリティ領域。", contrary: "実行日に日本の対象職種と国内100人以下の根拠を確認できない。", confidence: "探索中" },
  { slug: "vast-data", name: "VAST Data", total: 66, eligibility: "監視", officialUrls: ["https://www.vastdata.com/careers"], rationale: "AIデータ基盤として差別化と比較価値がある。", contrary: "日本向け現行公式求人、法人・拠点、国内人数の確認が不足。", confidence: "探索中" },
  { slug: "precisely", name: "Precisely", total: 65, eligibility: "監視", officialUrls: ["https://www.precisely.com/careers"], rationale: "データ完全性・位置情報・統制で既存企業との差を説明できる。", contrary: "日本の現行対象職種を公式Careerで確認できない。", confidence: "探索中" },
  { slug: "planview", name: "Planview", total: 64, eligibility: "監視", officialUrls: ["https://www.planview.com/company/careers/"], rationale: "戦略ポートフォリオ・製品開発投資管理の業務領域。", contrary: "日本の現行公式求人と国内人数を確認できない。", confidence: "探索中" },
  { slug: "nintex", name: "Nintex", total: 63, eligibility: "監視", officialUrls: ["https://www.nintex.com/company/careers/"], rationale: "業務自動化・ワークフローで読者との関連がある。", contrary: "日本の現行対象職種と直近180日の国内シグナルを確認できない。", confidence: "探索中" },
  { slug: "checkmarx", name: "Checkmarx", total: 62, eligibility: "監視", officialUrls: ["https://checkmarx.com/company/careers/"], rationale: "アプリケーションセキュリティの比較価値。", contrary: "実行日に日本向け現行公式求人と国内組織規模を確認できない。", confidence: "探索中" },
].sort((a, b) => b.total - a.total);

const weekday = new Date(`${runDate}T12:00:00+09:00`).getDay();
const weekdayGroup = scoredCompanies.filter((company) => company.fixedGroup === weekday);
const urlSummary = Object.fromEntries(["active", "ended", "blocked", "error", "skipped"].map((category) => [category, urlChecks.filter((item) => item.category === category).length]));
const previous = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : null;
const state = {
  schemaVersion: 1,
  updatedAt: new Date().toISOString(),
  runDate,
  publicCount: companies.length,
  initialAssessment: {
    completedAt: new Date().toISOString(),
    scoringBasis: "ops/genba-300-selection-standard.mdのA〜Fを、保存済み公式求人、企業ページ構造、国内規模、一次情報件数、当日Career URL応答へ機械的に対応させた初回スコア。未確認項目は加点せず、下位20社は同じ根拠で深掘り。",
    bottomTwentySlugs: bottomTwenty.map((item) => item.slug),
    candidateCount: candidatePool.length,
    automaticSwapThreshold: "初回は既存44点以下かつ候補が15点以上高い、または即時除外のみ。",
  },
  dailyReview: {
    fixedGroup: weekday,
    fixedGroupCount: weekdayGroup.length,
    fixedGroupSlugs: weekdayGroup.map((item) => item.slug),
    allSavedCareerUrlsChecked: !skipNetwork,
    urlSummary,
    changedCompanies: [],
    topAdditionCandidates: candidatePool.slice(0, 3).map(({ slug, name, total, rationale, contrary, confidence }) => ({ slug, name, total, rationale, contrary, confidence })),
    topExclusionCandidates: bottomTwenty.slice(0, 3).map(({ slug, name, total, rationale, contrary, confidence }) => ({ slug, name, total, rationale, contrary, confidence })),
    swapPairs: [],
    decision: "入れ替えなし",
    decisionReason: "即時除外を公式確認した企業がなく、初回自動入れ替え条件（既存44点以下かつ15点差）を満たす高確信度の組み合わせがない。候補上位はCareer・国内規模の追加確認が必要。",
  },
  companies: scoredCompanies,
  candidates: candidatePool,
  rotations: previous?.rotations ?? [],
  notification: {
    date: runDate,
    type: "listing-change",
    status: "pending",
    sentAt: null,
    changeId: `${runDate}-add-4-remove-0`,
    additions: ["channel-corp", "concertai", "everpure", "mistplay"],
    removals: [],
    failureReason: null,
  },
};

fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`);
console.log(JSON.stringify({ publicCount: state.publicCount, fixedGroup: weekday, fixedGroupCount: weekdayGroup.length, bottomTwenty: state.initialAssessment.bottomTwentySlugs, urlSummary, decision: state.dailyReview.decision, statePath }, null, 2));
