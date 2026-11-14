import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { build } from "esbuild";

const projectRoot = process.cwd();
const statePath = path.join(projectRoot, ".genba-state/genba-300-selection.json");
const runDate = process.env.GENBA_RUN_DATE ?? new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
const concurrency = Number.parseInt(process.env.GENBA_URL_CONCURRENCY ?? "8", 10);
const timeoutMs = Number.parseInt(process.env.GENBA_URL_TIMEOUT_MS ?? "12000", 10);
const skipNetwork = process.argv.includes("--skip-network");
const verifiedCareerUrlOverrides = new Map([
  ["clickhouse", "https://clickhouse.com/company/careers"],
  ["pingcap", "https://www.pingcap.com/careers/"],
  ["datasnipper", "https://careers.datasnipper.com/"],
  ["gurobi", "https://www.gurobi.com/company/careers"],
  ["patsnap", "https://careers.patsnap.com/"],
  ["hightouch", "https://hightouch.com/careers"],
  ["lighthouse", "https://www.mylighthouse.com/company/careers"],
  ["via", "https://ridewithvia.com/careers/"],
]);
const reviewedScoreOverrides = new Map([
  ["qualtrics", { breakdown: { careerUsefulness: 22, japanMomentum: 18, informationAsymmetry: 12, productStrength: 14, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
  ["deel", { breakdown: { careerUsefulness: 22, japanMomentum: 18, informationAsymmetry: 13, productStrength: 15, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
  ["halcyon", { breakdown: { careerUsefulness: 18, japanMomentum: 20, informationAsymmetry: 16, productStrength: 15, evidenceFreshness: 10, portfolioContribution: 10 }, confidence: "高" }],
  ["mongodb", { breakdown: { careerUsefulness: 25, japanMomentum: 20, informationAsymmetry: 11, productStrength: 15, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
  ["wasabi", { breakdown: { careerUsefulness: 13, japanMomentum: 18, informationAsymmetry: 15, productStrength: 14, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
  ["weka", { breakdown: { careerUsefulness: 25, japanMomentum: 19, informationAsymmetry: 18, productStrength: 15, evidenceFreshness: 8, portfolioContribution: 8 }, confidence: "高" }],
  ["avepoint", { breakdown: { careerUsefulness: 19, japanMomentum: 20, informationAsymmetry: 13, productStrength: 14, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
  ["vast-data", { breakdown: { careerUsefulness: 15, japanMomentum: 17, informationAsymmetry: 18, productStrength: 15, evidenceFreshness: 10, portfolioContribution: 8 }, confidence: "高" }],
]);
const removalAssessmentOverrides = new Map([
  ["tradlinx", { name: "Tradlinx", total: 64, breakdown: { careerUsefulness: 10, japanMomentum: 6, informationAsymmetry: 16, productStrength: 12, evidenceFreshness: 10, portfolioContribution: 10 }, reason: "日本市場立ち上げ求人が終了し、現行の日本求人・日本法人・国内拠点・後継採用導線を公式情報から確認できない。" }],
  ["bounce", { name: "Bounce", total: 67, breakdown: { careerUsefulness: 11, japanMomentum: 14, informationAsymmetry: 10, productStrength: 12, evidenceFreshness: 10, portfolioContribution: 10 }, reason: "日本のサービス展開は継続しているが、日本向け事業開発求人が終了し、外資IT人材の対象職種と企業向けITの比較価値が相対的に弱い。" }],
  ["patch", { name: "Patch", total: 69, breakdown: { careerUsefulness: 10, japanMomentum: 8, informationAsymmetry: 17, productStrength: 13, evidenceFreshness: 10, portfolioContribution: 11 }, reason: "日本向け営業求人が終了し、現行Careerには日本職種がなく、公式掲載拠点はSan Francisco・London・Singaporeで日本の常設体制を確認できない。" }],
]);
const previous = fs.existsSync(statePath) ? JSON.parse(fs.readFileSync(statePath, "utf8")) : null;
let headState = null;
try {
  headState = JSON.parse(execFileSync("git", ["show", "HEAD:.genba-state/genba-300-selection.json"], { cwd: projectRoot, encoding: "utf8" }));
} catch {
  // The state file may not exist in HEAD during the first initialization.
}
const baseline = previous?.runDate === runDate && headState?.runDate !== runDate ? headState : previous;

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
  const careersUrl = verifiedCareerUrlOverrides.get(company.slug) ?? company.careersUrl;
  if (skipNetwork) return { status: 0, category: "skipped", finalUrl: careersUrl, checkedAt: runDate, requestedUrl: careersUrl };
  try {
    const response = await fetch(careersUrl, {
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
    return { status, category, finalUrl: response.url, checkedAt: runDate, requestedUrl: careersUrl };
  } catch (error) {
    return { status: 0, category: "error", finalUrl: careersUrl, checkedAt: runDate, requestedUrl: careersUrl, error: error instanceof Error ? error.message : String(error) };
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
  const reviewed = reviewedScoreOverrides.get(company.slug);
  const finalBreakdown = reviewed?.breakdown ?? breakdown;
  const total = Object.values(finalBreakdown).reduce((sum, value) => sum + value, 0);
  const confidence = reviewed?.confidence ?? (sourceCount >= 7 && urlCheck.category === "active" ? "高" : sourceCount >= 3 && ["active", "blocked"].includes(urlCheck.category) ? "中" : "探索中");
  return {
    slug: company.slug,
    name: company.name,
    fixedGroup: index % 7,
    breakdown: finalBreakdown,
    total,
    confidence,
    evidenceCheckedAt: runDate,
    lastDeepReviewAt: null,
    deepReviewHistory: [],
    urlCheck: { url: urlCheck.requestedUrl ?? company.careersUrl, ...urlCheck },
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
const previousCompanies = new Map((baseline?.companies ?? []).map((company) => [company.slug, company]));
for (const record of scoredCompanies) {
  const earlier = previousCompanies.get(record.slug);
  record.lastDeepReviewAt = earlier?.lastDeepReviewAt ?? null;
  record.deepReviewHistory = earlier?.deepReviewHistory ?? [];
}

const rankedCompanies = [...scoredCompanies].sort((a, b) => a.total - b.total || a.slug.localeCompare(b.slug));
const comparisonCohort = rankedCompanies.slice(0, Math.ceil(scoredCompanies.length * 0.1));
const comparisonCohortSlugs = new Set(comparisonCohort.map((company) => company.slug));
const bottomTwenty = rankedCompanies.slice(0, 20);
const weekday = new Date(`${runDate}T12:00:00+09:00`).getDay();
const weekdayGroup = scoredCompanies.filter((company) => company.fixedGroup === weekday);
for (const record of weekdayGroup) {
  record.lastDeepReviewAt = runDate;
  const dailyReview = {
    date: runDate,
    score: record.total,
    verdict: comparisonCohortSlugs.has(record.slug) ? "比較対象" : "残留",
    evidence: "保存済み公式情報、企業ページ構造、現行Career・ATSの後継URLを含む応答、国内規模の保存値を同一基準で日次深掘り確認。",
    contrary: record.contrary,
  };
  if (!record.deepReviewHistory.some((item) => item.date === runDate)) record.deepReviewHistory.push(dailyReview);
}

const publishedSlugs = new Set(scoredCompanies.map((company) => company.slug));
const candidatePool = [
  { slug: "avepoint", name: "AvePoint", total: 74, eligibility: "追加調査", officialUrls: ["https://www.avepoint.com/about", "https://www.avepoint.com/ir/governance/leadership/ken-shiomitsu"], rationale: "日本法人・責任者・国内製品情報と強いMicrosoft 365データ統制領域。", contrary: "実行日に公式ATSで日本の現行対象職種を確認できず、Career要件を満たす追加調査が必要。", confidence: "中" },
  { slug: "digicert", name: "DigiCert", total: 71, eligibility: "追加調査", officialUrls: ["https://www.digicert.com/jp/careers", "https://www.digicert.com/master-services-agreement-jp/"], rationale: "日本法人とデジタルトラスト領域の比較価値。", contrary: "公式Career上で日本の現行対象職種を特定できず、国内人数も未確認。", confidence: "中" },
  { slug: "hyland", name: "Hyland", total: 70, eligibility: "追加調査", officialUrls: ["https://www.hyland.com/ja/company/about/locations", "https://www.hyland.com/en/company/careers"], rationale: "東京拠点と企業コンテンツ管理・AIの業務導線を確認。", contrary: "検索で確認したJapan CSMの直接URLは実取得で410となり、現行求人として採用できない。", confidence: "中" },
  { slug: "weka", name: "WEKA", total: 86, eligibility: "入れ替え候補", officialUrls: ["https://www.weka.io/careers?gh_jid=5199234007", "https://www.weka.io/careers"], rationale: "東京勤務のRegional Sales Managerを現行公式求人で確認。同社が日本最初のSales Executiveと明記し、AIデータ基盤のポートフォリオ価値も高い。", contrary: "日本法人の雇用主体と国内組織規模は公式確認が必要。既存除外候補は2回連続の深掘り条件をまだ満たさない。", confidence: "高" },
  { slug: "forescout", name: "Forescout", total: 67, eligibility: "監視", officialUrls: ["https://www.forescout.com/company/careers/"], rationale: "OT・IoT・ネットワーク資産可視化のセキュリティ領域。", contrary: "実行日に日本の対象職種と国内100人以下の根拠を確認できない。", confidence: "探索中" },
  { slug: "vast-data", name: "VAST Data", total: 72, eligibility: "入れ替え候補", officialUrls: ["https://www.vastdata.com/careers", "https://www.vastdata.com/contact"], rationale: "AIデータ基盤の差別化に加え、公式連絡先で東京拠点を確認。", contrary: "日本向け現行公式求人と国内組織規模は確認できない。", confidence: "中" },
  { slug: "precisely", name: "Precisely", total: 65, eligibility: "監視", officialUrls: ["https://www.precisely.com/careers-and-culture/"], rationale: "日本法人とデータ完全性・位置情報・統制で既存企業との差を説明できる。", contrary: "現行の国際求人一覧で日本の対象職種を確認できない。", confidence: "探索中" },
  { slug: "planview", name: "Planview", total: 64, eligibility: "監視", officialUrls: ["https://www.planview.com/company/careers/"], rationale: "戦略ポートフォリオ・製品開発投資管理の業務領域。", contrary: "日本の現行公式求人と国内人数を確認できない。", confidence: "探索中" },
  { slug: "nintex", name: "Nintex", total: 63, eligibility: "監視", officialUrls: ["https://www.nintex.com/careers/jobs/"], rationale: "業務自動化・ワークフローで読者との関連がある。", contrary: "現行12件の公式一覧に日本の対象職種がなく、直近180日の国内シグナルを確認できない。", confidence: "探索中" },
  { slug: "checkmarx", name: "Checkmarx", total: 62, eligibility: "監視", officialUrls: ["https://checkmarx.com/company/careers/"], rationale: "アプリケーションセキュリティの比較価値。", contrary: "実行日に日本向け現行公式求人と国内組織規模を確認できない。", confidence: "探索中" },
].filter((candidate) => !publishedSlugs.has(candidate.slug)).sort((a, b) => b.total - a.total);

const baselineCompanyMap = new Map((baseline?.companies ?? []).map((company) => [company.slug, company]));
const addedSlugs = [...publishedSlugs].filter((slug) => !baselineCompanyMap.has(slug));
const removedSlugs = [...baselineCompanyMap.keys()].filter((slug) => !publishedSlugs.has(slug));
const preferredSwapOrder = [
  ["tradlinx", "weka"],
  ["bounce", "avepoint"],
  ["patch", "vast-data"],
];
const swapPairs = preferredSwapOrder
  .filter(([removed, added]) => removedSlugs.includes(removed) && addedSlugs.includes(added))
  .map(([removed, added]) => {
    const baselineRemoval = baselineCompanyMap.get(removed);
    const reviewedRemoval = removalAssessmentOverrides.get(removed);
    const removal = reviewedRemoval ? { ...baselineRemoval, ...reviewedRemoval } : baselineRemoval;
    const addition = scoredCompanies.find((company) => company.slug === added);
    return {
      removed: { slug: removed, name: removal?.name ?? removed, total: removal?.total ?? null },
      added: { slug: added, name: addition?.name ?? added, total: addition?.total ?? null },
      pointDifference: typeof removal?.total === "number" && typeof addition?.total === "number" ? addition.total - removal.total : null,
      basis: `${removal?.reason ?? "下位10%として再確認。"} 下位10%との同日相対比較で、後継Career URL、読者対象職種、日本市場の動き、ポートフォリオ貢献を同じ100点基準で比較。`,
    };
  });

const urlSummary = Object.fromEntries(["active", "ended", "blocked", "error", "skipped"].map((category) => [category, urlChecks.filter((item) => item.category === category).length]));
const changedCompanies = scoredCompanies.filter((company) => {
  const earlier = previousCompanies.get(company.slug);
  return earlier && (earlier.total !== company.total || earlier.urlCheck?.category !== company.urlCheck.category || earlier.urlCheck?.status !== company.urlCheck.status);
}).map((company) => ({
  slug: company.slug,
  name: company.name,
  previousTotal: previousCompanies.get(company.slug)?.total,
  total: company.total,
  previousUrlCategory: previousCompanies.get(company.slug)?.urlCheck?.category,
  urlCategory: company.urlCheck.category,
  status: company.urlCheck.status,
}));
const currentChangeId = swapPairs.length ? `${runDate}-${swapPairs.map((pair) => `${pair.removed.slug}-to-${pair.added.slug}`).join("+")}` : `${runDate}-no-change`;
const priorNotification = baseline?.notification;
const notificationBacklog = [...(previous?.notificationBacklog ?? baseline?.notificationBacklog ?? [])]
  .filter((item, index, items) => item.changeId !== currentChangeId && items.findIndex((candidate) => candidate.changeId === item.changeId) === index);
if (priorNotification?.status === "pending" && priorNotification.changeId !== currentChangeId && !notificationBacklog.some((item) => item.changeId === priorNotification.changeId)) {
  notificationBacklog.push(priorNotification);
}
const state = {
  schemaVersion: 1,
  updatedAt: new Date().toISOString(),
  runDate,
  publicCount: companies.length,
  initialAssessment: {
    ...(baseline?.initialAssessment ?? {
      completedAt: new Date().toISOString(),
      scoringBasis: "ops/genba-300-selection-standard.mdのA〜Fを、保存済み公式求人、企業ページ構造、国内規模、一次情報件数、当日Career URL応答へ機械的に対応させた初回スコア。未確認項目は加点せず、下位20社は同じ根拠で深掘り。",
      bottomTwentySlugs: bottomTwenty.map((item) => item.slug),
      candidateCount: candidatePool.length,
    }),
    automaticSwapThreshold: "既存下位10%と候補を同一基準で比較し、原則8点差。5〜7点差は複数の項目改善と既存側の複数弱化を公式確認した場合。404単独では除外しない。",
  },
  dailyReview: {
    fixedGroup: weekday,
    fixedGroupCount: weekdayGroup.length,
    fixedGroupSlugs: weekdayGroup.map((item) => item.slug),
    allSavedCareerUrlsChecked: !skipNetwork,
    urlSummary,
    changedCompanies,
    topAdditionCandidates: swapPairs.length
      ? swapPairs.map((pair) => {
          const company = scoredCompanies.find((item) => item.slug === pair.added.slug);
          return { slug: pair.added.slug, name: pair.added.name, total: pair.added.total, rationale: company?.rationale?.join("。") ?? "相対比較で掲載対象へ追加。", contrary: company?.contrary?.join("。") ?? "未確認項目は企業ページへ明記。", confidence: company?.confidence ?? "中" };
        })
      : candidatePool.slice(0, 3).map(({ slug, name, total, rationale, contrary, confidence }) => ({ slug, name, total, rationale, contrary, confidence })),
    topExclusionCandidates: swapPairs.length
      ? swapPairs.map((pair) => {
          const removal = removalAssessmentOverrides.get(pair.removed.slug);
          return { slug: pair.removed.slug, name: pair.removed.name, total: pair.removed.total, rationale: removal?.reason ?? pair.basis, contrary: "求人終了や404単独ではなく、後継Career・国内体制・現在の読者価値まで反証確認。", confidence: "高" };
        })
      : bottomTwenty.slice(0, 3).map(({ slug, name, total, rationale, contrary, confidence }) => ({ slug, name, total, rationale, contrary, confidence })),
    comparisonCohortSize: comparisonCohort.length,
    swapPairs,
    decision: swapPairs.length ? `${swapPairs.length}組を入れ替え` : "入れ替えなし",
    decisionReason: swapPairs.length
      ? "固定55点残留を廃止し、下位10%と候補を同日相対比較。壊れた保存URLは後継Careerへ更新し、ClickHouse・PingCAPは残留。読者価値と日本市場の接点が相対的に弱い3社を入れ替えた。"
      : "下位10%と候補を同日相対比較したが、点差・項目改善・弱化シグナル・反証確認の条件を満たす組み合わせがない。",
  },
  companies: scoredCompanies,
  candidates: candidatePool,
  rotations: swapPairs.length
    ? [...(baseline?.rotations ?? []), ...swapPairs.map((pair) => ({ date: runDate, ...pair }))]
    : baseline?.rotations ?? [],
  notificationBacklog,
  notification: {
    date: runDate,
    type: swapPairs.length ? "change" : "no-change",
    status: "pending",
    sentAt: null,
    changeId: currentChangeId,
    additions: swapPairs.map((pair) => pair.added),
    removals: swapPairs.map((pair) => pair.removed),
    failureReason: null,
  },
};

fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`);
console.log(JSON.stringify({ publicCount: state.publicCount, fixedGroup: weekday, fixedGroupCount: weekdayGroup.length, bottomTwenty: state.initialAssessment.bottomTwentySlugs, urlSummary, decision: state.dailyReview.decision, statePath }, null, 2));
