import { createHash } from "node:crypto";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const inlineMarkdown = (value) => {
  const links = [];
  const protectedValue = value.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_, label, href) => {
    const index = links.length;
    links.push(`<a href="${escapeHtml(href)}" style="color:#0b6078;text-decoration:underline">${escapeHtml(label)}</a>`);
    return `@@LINK_${index}@@`;
  });

  return escapeHtml(protectedValue)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/@@LINK_(\d+)@@/g, (_, index) => links[Number(index)]);
};

const unquote = (value) => {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  if (trimmed === "null") return null;
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  return trimmed;
};

const parseDraft = (source, inputPath) => {
  const frontMatterMatch = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!frontMatterMatch) throw new Error(`${inputPath}: front matter が見つかりません`);

  const metadata = Object.fromEntries(
    frontMatterMatch[1]
      .split("\n")
      .filter((line) => line.includes(":"))
      .map((line) => {
        const separator = line.indexOf(":");
        return [line.slice(0, separator).trim(), unquote(line.slice(separator + 1))];
      }),
  );

  const body = frontMatterMatch[2].replace(/\n## 編集用メモ（配信時は削除）[\s\S]*$/, "").trim();
  const companyMatches = [...body.matchAll(/^## (0[1-5]) (.+)\n\n\*\*(.+)\*\*　\[(.+)\]\n\n([\s\S]*?)\n\n\*\*(仕事として見ると：|日本進出を先回りすると：)\*\* ([\s\S]*?)\n\n\[([^\]]+)\]\((https?:\/\/[^)]+)\)(?=\n\n---|\n\n##)/gm)];
  if (companyMatches.length !== 5) {
    throw new Error(`${inputPath}: 企業カードを5件抽出できませんでした（${companyMatches.length}件）`);
  }

  const introMatch = body.match(/^# .+\n\n\*\*今日の5社｜読了3分\*\*\n\n([\s\S]*?)(?=\n\n## 01 )/);
  if (!introMatch) throw new Error(`${inputPath}: 導入文を抽出できませんでした`);

  const closingMatch = body.match(/## 今日の1社はありましたか？\n\n([\s\S]*?)\n\n---\n\n([\s\S]*)$/);
  if (!closingMatch) throw new Error(`${inputPath}: 末尾CTAを抽出できませんでした`);

  const closingParagraphs = closingMatch[1].split(/\n\n+/).filter(Boolean);
  const footerParagraphs = closingMatch[2].split(/\n\n+/).filter(Boolean);
  const primaryCta = closingParagraphs.find((paragraph) => paragraph.includes("footer_companies"));
  const sponsorCta = footerParagraphs.find((paragraph) => paragraph.includes("footer_sponsor"));
  const primaryMatch = primaryCta?.match(/\*\*\[([^\]]+)\]\((https?:\/\/[^)]+)\)\*\*/);
  const sponsorMatch = sponsorCta?.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
  if (!primaryMatch || !sponsorMatch) throw new Error(`${inputPath}: 末尾リンクを抽出できませんでした`);

  return {
    metadata,
    intro: introMatch[1].split(/\n\n+/).filter(Boolean),
    companies: companyMatches.map((match) => ({
      number: match[1],
      name: match[2],
      category: match[3],
      status: match[4],
      description: match[5].replace(/\n/g, " "),
      perspectiveLabel: match[6],
      perspective: match[7].replace(/\n/g, " "),
      ctaLabel: match[8],
      ctaUrl: match[9],
    })),
    closingBefore: closingParagraphs.slice(0, closingParagraphs.indexOf(primaryCta)),
    closingAfter: closingParagraphs.slice(closingParagraphs.indexOf(primaryCta) + 1),
    primaryCta: { label: primaryMatch[1], url: primaryMatch[2] },
    footer: footerParagraphs.filter((paragraph) => paragraph !== sponsorCta && !paragraph.startsWith("配信停止は")),
    sponsorCta: { label: sponsorMatch[1], url: sponsorMatch[2] },
  };
};

const statusStyle = (status) => {
  const styles = {
    積極採用: ["#dff3e4", "#176b3a"],
    採用中: ["#e4f1f7", "#0b6078"],
    継続観測: ["#edf0f2", "#526578"],
    日本未進出: ["#eee8f7", "#6b4c8a"],
    広告: ["#fff0cc", "#9a5b00"],
  };
  const selected = styles[status];
  if (!selected) throw new Error(`未定義の状態ラベルです: ${status}`);
  return `background:${selected[0]};color:${selected[1]}`;
};

const paragraphHtml = (paragraph) => `<p style="margin:0 0 14px;font:15px/1.8 Arial;color:#25384a">${inlineMarkdown(paragraph)}</p>`;

export const renderNewsletter = (draft) => {
  const issue = String(draft.metadata.issue).padStart(3, "0");
  const intro = draft.intro.map((paragraph) => inlineMarkdown(paragraph)).join("<br><br>");
  const cards = draft.companies
    .map(
      (company) => `<tr><td data-genba-card="${company.number}" style="padding:24px 28px;border-bottom:1px solid #e5eaf0"><table role="presentation" width="100%"><tr><td style="font:700 12px Arial;color:#697b8c;letter-spacing:.08em">${company.number}</td><td align="right"><span style="${statusStyle(company.status)};padding:4px 9px;border-radius:12px;font:700 11px Arial">${escapeHtml(company.status)}</span></td></tr></table><h2 style="margin:10px 0 4px;font:700 22px/1.3 Arial;color:#102a43">${escapeHtml(company.name)}</h2><p style="margin:0 0 14px;font:700 13px Arial;color:#526578">${escapeHtml(company.category)}</p><p style="margin:0 0 12px;font:15px/1.8 Arial;color:#25384a">${inlineMarkdown(company.description)}</p><p style="margin:0 0 14px;font:15px/1.8 Arial;color:#25384a"><strong>${escapeHtml(company.perspectiveLabel)}</strong> ${inlineMarkdown(company.perspective)}</p><p style="margin:0;font:700 14px/1.6 Arial"><a href="${escapeHtml(company.ctaUrl)}" style="color:#0b6078;text-decoration:underline">${escapeHtml(company.ctaLabel)}</a></p></td></tr>`,
    )
    .join("");
  const closingBefore = draft.closingBefore.map(paragraphHtml).join("");
  const closingAfter = draft.closingAfter.map(paragraphHtml).join("");
  const footer = draft.footer.map((paragraph) => inlineMarkdown(paragraph)).join("<br><br>");

  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Genba発掘 #${issue}</title></head><body style="margin:0;background:#f3f6f8"><div style="display:none;max-height:0;overflow:hidden">${escapeHtml(draft.metadata.preheader)}</div><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f6f8"><tr><td align="center" style="padding:24px 12px"><table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#fff;border-radius:8px;overflow:hidden"><tr><td data-genba-header="standard-v1" style="background:#102a43;padding:30px 28px"><div style="font:700 12px Arial;color:#8fd3e6;letter-spacing:.12em">外資戦士と予備軍の作戦会議室。</div><h1 style="margin:8px 0 4px;font:700 30px/1.25 Arial;color:#fff">Genba発掘 #${issue}</h1><div style="font:14px Arial;color:#d8e5ed">今日の5社｜読了3分</div></td></tr><tr><td style="padding:26px 28px 18px;font:15px/1.8 Arial;color:#25384a">${intro}</td></tr>${cards}<tr><td style="padding:28px"><h2 style="margin:0 0 14px;font:700 20px/1.4 Arial;color:#102a43">今日の1社はありましたか？</h2>${closingBefore}<p style="margin:24px 0;text-align:center"><a data-genba-primary-cta="true" href="${escapeHtml(draft.primaryCta.url)}" style="display:inline-block;background:#0b6078;color:#fff;text-decoration:none;padding:13px 22px;border-radius:5px;font:700 15px Arial">${escapeHtml(draft.primaryCta.label)}</a></p>${closingAfter}</td></tr><tr><td style="background:#eef2f5;padding:24px 28px;font:12px/1.7 Arial;color:#617080">${footer}<br><a href="${escapeHtml(draft.sponsorCta.url)}" style="color:#0b6078">${escapeHtml(draft.sponsorCta.label)}</a><br><br><a href="{{ unsubscribe_url }}" style="color:#617080">配信停止</a> ・ <a href="{{ subscriber_preferences_url }}" style="color:#617080">配信設定</a><br>{{ address }}</td></tr></table></td></tr></table><div style="display:none">{{ message_content }}</div></body></html>`;
};

export const renderDraftFile = async (inputPath) => {
  const absoluteInput = path.resolve(ROOT, inputPath);
  const source = await readFile(absoluteInput, "utf8");
  const draft = parseDraft(source, inputPath);
  const html = renderNewsletter(draft);
  return {
    draft,
    html,
    sha256: createHash("sha256").update(html).digest("hex"),
    inputPath: absoluteInput,
  };
};

const run = async () => {
  const args = process.argv.slice(2);
  const inputIndex = args.indexOf("--input");
  if (inputIndex === -1 || !args[inputIndex + 1]) {
    throw new Error("使い方: node scripts/render-newsletter.mjs --input content/newsletter/drafts/YYYY-MM-DD.md [--write]");
  }
  const rendered = await renderDraftFile(args[inputIndex + 1]);
  if (args.includes("--write")) {
    const basename = path.basename(rendered.inputPath, ".md");
    const outputDir = path.join(ROOT, "content/newsletter/rendered");
    const outputPath = path.join(outputDir, `${basename}.html`);
    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, `${rendered.html}\n`, "utf8");
    process.stdout.write(`${path.relative(ROOT, outputPath)}\nsha256:${rendered.sha256}\n`);
    return;
  }
  process.stdout.write(`${rendered.html}\n`);
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  run().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
