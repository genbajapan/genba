import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const canonical = path.join(root, "PROJECT_RULES.md");

function fail(message) {
  errors.push(message);
}

if (!fs.existsSync(canonical)) {
  fail("PROJECT_RULES.md がありません。");
}

for (const entry of ["AGENTS.md", "CLAUDE.md"]) {
  const entryPath = path.join(root, entry);
  if (!fs.existsSync(entryPath)) {
    fail(`${entry} がありません。`);
    continue;
  }
  const stat = fs.lstatSync(entryPath);
  if (!stat.isSymbolicLink()) {
    fail(`${entry} は PROJECT_RULES.md へのシンボリックリンクである必要があります。`);
    continue;
  }
  if (fs.realpathSync(entryPath) !== fs.realpathSync(canonical)) {
    fail(`${entry} のリンク先が PROJECT_RULES.md ではありません。`);
  }
}

const requiredRuleReferences = [
  "docs/09-pivot-business-plan.md",
  "docs/10-website-renewal-spec.md",
  "ops/job-publication-and-sponsor-policy.md",
  "ops/guardrails.md",
  "ops/legal-checklist.md",
  "ops/daily-workflow.md",
];

if (fs.existsSync(canonical)) {
  const rules = fs.readFileSync(canonical, "utf8");
  for (const reference of requiredRuleReferences) {
    if (!rules.includes(reference)) fail(`PROJECT_RULES.md に ${reference} の参照がありません。`);
  }
}

const claudeCommandPath = path.join(root, ".claude/commands/genba-daily.md");
if (!fs.existsSync(claudeCommandPath)) {
  fail("Claude Codeのgenba-dailyコマンドがありません。");
} else {
  const command = fs.readFileSync(claudeCommandPath, "utf8");
  if (!command.includes("@PROJECT_RULES.md")) fail("Claude Codeコマンドが共通ルールを参照していません。");
  if (!command.includes("@ops/daily-workflow.md")) fail("Claude Codeコマンドが共有日次フローを参照していません。");
  for (const stale of ["Japan sales advisory", "both languages", "no separate human approval step", "pushes to `main`"]) {
    if (command.includes(stale)) fail(`Claude Codeコマンドに旧ルールが残っています: ${stale}`);
  }
}

const codexSkillPath = path.join(root, ".agents/skills/source-command-genba-daily/SKILL.md");
if (!fs.existsSync(codexSkillPath)) {
  fail("Codexのgenba-dailyスキルがありません。");
} else {
  const skill = fs.readFileSync(codexSkillPath, "utf8");
  if (!skill.includes("PROJECT_RULES.md")) fail("Codexスキルが共通ルールを参照していません。");
  if (!skill.includes("ops/daily-workflow.md")) fail("Codexスキルが共有日次フローを参照していません。");
  if (skill.split("\n").length > 80) fail("Codexスキルが長すぎます。共有フローへルールを移してください。");
}

if (errors.length) {
  console.error("AI運用ルールの検証に失敗しました:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("AI運用ルール: OK");
console.log("- AGENTS.md / CLAUDE.md は同じ PROJECT_RULES.md を参照");
console.log("- Codex / Claude Code の日次運用は ops/daily-workflow.md を共有");
