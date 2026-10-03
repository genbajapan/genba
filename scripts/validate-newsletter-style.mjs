import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderDraftFile } from "./render-newsletter.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DRAFTS_DIR = path.join(ROOT, "content/newsletter/drafts");
const RENDERED_DIR = path.join(ROOT, "content/newsletter/rendered");
const EFFECTIVE_DATE = "2026-10-04";

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const validateHtml = (html, label) => {
  assert((html.match(/data-genba-card="0[1-5]"/g) ?? []).length === 5, `${label}: 標準カードが5件ではありません`);
  assert(html.includes('data-genba-header="standard-v1"'), `${label}: 固定ヘッダー識別子がありません`);
  assert(html.includes("background:#102a43;padding:30px 28px"), `${label}: 標準ヘッダーの配色・余白が変わっています`);
  assert((html.match(/border-bottom:1px solid #e5eaf0/g) ?? []).length === 5, `${label}: 5社の区切り線が標準と一致しません`);
  assert(!html.includes("border-left:"), `${label}: 禁止しているカード左アクセント線が含まれています`);
  assert(!html.includes("background:#fffaf0"), `${label}: スポンサー以外のカード背景色変更が含まれています`);
  assert((html.match(/data-genba-primary-cta="true"/g) ?? []).length === 1, `${label}: 主ボタンは末尾1件だけにしてください`);
  assert(html.includes("{{ unsubscribe_url }}"), `${label}: 配信停止URLがありません`);
  assert(html.includes("{{ subscriber_preferences_url }}"), `${label}: 配信設定URLがありません`);
  assert(html.includes("{{ address }}"), `${label}: 送信者住所がありません`);
};

const latestDraftName = (names) => names.filter((name) => /^\d{4}-\d{2}-\d{2}\.md$/.test(name)).sort().at(-1);

const run = async () => {
  const draftNames = await readdir(DRAFTS_DIR);
  const latest = latestDraftName(draftNames);
  if (!latest) throw new Error("ニュースレター下書きが見つかりません");

  const renderedNames = await readdir(RENDERED_DIR).catch(() => []);
  for (const renderedName of renderedNames.filter((name) => name.endsWith(".html"))) {
    validateHtml(await readFile(path.join(RENDERED_DIR, renderedName), "utf8"), `content/newsletter/rendered/${renderedName}`);
  }

  const latestDate = latest.replace(/\.md$/, "");
  if (latestDate < EFFECTIVE_DATE) {
    console.log(`Newsletter style check: active from ${EFFECTIVE_DATE}; latest draft is ${latestDate}`);
    return;
  }

  const renderedPath = path.join(RENDERED_DIR, latest.replace(/\.md$/, ".html"));
  const [storedHtml, generated] = await Promise.all([
    readFile(renderedPath, "utf8").catch(() => null),
    renderDraftFile(path.relative(ROOT, path.join(DRAFTS_DIR, latest))),
  ]);
  assert(storedHtml !== null, `${path.relative(ROOT, renderedPath)} がありません。Kit入稿前に --write で生成してください`);
  assert(storedHtml.trim() === generated.html, `${path.relative(ROOT, renderedPath)} が原稿から再生成したHTMLと一致しません`);
  validateHtml(storedHtml, path.relative(ROOT, renderedPath));
  console.log(`Newsletter style check passed: ${latest} sha256:${generated.sha256}`);
};

run().catch((error) => {
  console.error(`Newsletter style check failed: ${error.message}`);
  process.exitCode = 1;
});
