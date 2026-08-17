import { build } from "esbuild";

const projectRoot = process.cwd();
const concurrency = Number.parseInt(process.env.JOB_LINK_CONCURRENCY ?? "12", 10);
const timeoutMs = Number.parseInt(process.env.JOB_LINK_TIMEOUT_MS ?? "12000", 10);

const bundle = await build({
  stdin: {
    contents: `import { jobs } from "./lib/market-data.ts"; export { jobs };`,
    resolveDir: projectRoot,
    sourcefile: "job-source-status-entry.ts",
  },
  bundle: true,
  format: "cjs",
  platform: "node",
  write: false,
});

const runtimeModule = { exports: {} };
new Function("module", "exports", bundle.outputFiles[0].text)(runtimeModule, runtimeModule.exports);
const { jobs } = runtimeModule.exports;

const records = [...new Map(jobs.map((job) => [job.source.url, {
  url: job.source.url,
  jobs: [],
}])).values()];
for (const job of jobs) {
  const record = records.find((item) => item.url === job.source.url);
  record.jobs.push(`${job.companySlug}:${job.id}`);
}

async function inspect(record) {
  try {
    const response = await fetch(record.url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "user-agent": "Genba job freshness checker (+https://genbajapan.com)",
        accept: "text/html,application/json;q=0.9,*/*;q=0.8",
      },
      signal: AbortSignal.timeout(timeoutMs),
    });
    const status = response.status;
    const category = status === 404 || status === 410
      ? "ended"
      : status === 401 || status === 403 || status === 429
        ? "blocked"
        : status >= 200 && status < 400
          ? "active"
          : "error";
    return { ...record, status, category, finalUrl: response.url };
  } catch (error) {
    return {
      ...record,
      status: 0,
      category: "error",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < records.length) {
    const index = cursor++;
    results[index] = await inspect(records[index]);
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, records.length) }, worker));

const counts = Object.fromEntries(["active", "ended", "blocked", "error"].map((category) => [
  category,
  results.filter((result) => result.category === category).length,
]));
console.log(JSON.stringify({ checkedJobs: jobs.length, checkedUrls: records.length, counts }, null, 2));

for (const result of results.filter((item) => item.category !== "active")) {
  console.log(`${result.category.toUpperCase()} ${result.status || "FETCH"} ${result.url}`);
  console.log(`  ${result.jobs.join(", ")}${result.error ? ` — ${result.error}` : ""}`);
}

if (counts.ended > 0) process.exitCode = 2;
