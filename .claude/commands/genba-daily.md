---
description: Run Genba's daily media operations — 2 new articles, X post drafts, and an SEO/AEO code tune-up, then publish and deploy.
---

You are running the daily operations cycle for **Genba** (`genbajapan.com`), Jio's Japan sales advisory media site. Full business context is in `docs/`, publishing rules are in `ops/guardrails.md`, and the phased rollout is in `ops/launch-checklist.md`. Read whichever of those you need, but don't re-derive things you can read directly.

This command runs end-to-end and pushes to `main`, which auto-deploys via Cloudflare. There is no separate human approval step after this command finishes — the guardrail check in Step 4 **is** the approval gate. Do not weaken it for the sake of finishing both articles; publishing one solid article is better than two where one is guardrail-risky.

## Step 0 — Orient

- Read frontmatter (`category`, `published_date`) from every file in `content/blog/published/`.
- Read `content/calendar/content-calendar.md` for anything already logged.
- Note today's date and which of the 5 categories (`lib/categories.ts`) are least recently covered — that's your rotation signal, not a hard rule.

## Step 1 — Research (do this fresh every run, don't rely on memorized trends)

Use WebSearch for two things:

1. **Current SEO/AEO practice.** Search something like `AEO answer engine optimization best practices` and `SEO best practices for B2B content sites` for the current year. You're looking for concrete, implementable changes (structured data, heading/answer formatting, meta patterns) — not generic advice you already know.
2. **What's live in sales/B2B GTM/Japan-market discourse right now.** Search for recent discussion — e.g. `B2B sales trends this week`, `enterprise sales Twitter X discussion`, `Japan market entry SaaS news`. There's no direct X/Twitter API here, so this is web-search-based best effort, not literal trending-topics access — treat it as "what's being discussed," not "what's trending on X" literally.

## Step 2 — Pick today's 2 article themes

- Weight toward categories that are under-represented in `content/blog/published/`.
- Let Step 1's research inform the *angle* (not the category) where it genuinely fits — don't force a trend connection that isn't real.
- **Category 3 (market data) rule:** only pick it if Step 1 turned up a real, checkable primary source (METI/JTA/JETRO or similarly credible). If not, skip category 3 for today and pick from the other 4 — do not fabricate figures or citations. This mirrors why `content/blog/drafts/japans-cashless-shift.md` is still a draft.
- Don't repeat a title/angle already in `content/blog/published/`.

## Step 3 — Write both articles

- Match the voice, length (~500–700 words), and structure (H2 sections, closing takeaway) of the existing posts in `content/blog/published/`.
- Content is in **English** — the target reader is a non-Japanese-speaking founder/VP Sales (see `docs/04-target-customers.md`).
- Frontmatter: `title`, `category` ("1"–"5"), `status: "published"`, `published_date` (today, `YYYY-MM-DD`), `excerpt` (one sentence, matches the style of existing excerpts).
- Filename: kebab-case slug matching the title.

## Step 4 — Guardrail gate (mandatory, per `ops/guardrails.md`)

For **each** draft, explicitly check:
- No mention of Adyen — name, deals, clients, or pricing.
- Written as Jio's personal, generalizable experience — not attributed to any employer.
- Any proof-of-work claim leans on Cisco/Shopify, not Adyen.
- No fabricated statistics, client anecdotes, or citations.

If an article fails any check, revise it. If it can't be fixed within this run, drop it — save what you have to `content/blog/drafts/` with a comment explaining what's blocking it, and publish only the article(s) that passed. Say so plainly in your final report; don't quietly publish 1 instead of 2 without flagging it.

## Step 5 — Save and log

- Move/save passing articles into `content/blog/published/`.
- Append a row per article to the table in `content/calendar/content-calendar.md` (date, category, format = Blog, title, status = 公開済み).

## Step 6 — X drafts

For each published article, write a digest-thread draft using `content/templates/x-thread-template.md`'s shape, saved to `content/x/drafts/YYYY-MM-DD-<slug>-thread.md`. These are drafts only — nothing gets posted to X automatically (no API/account wired up here).

## Step 7 — SEO/AEO code tune-up

Apply one or two small, safe, buildable improvements informed by Step 1's research — e.g. JSON-LD structured data (Organization / Article / FAQ schema), heading-hierarchy fixes, meta description tightening, sitemap/robots adjustments. Keep changes incremental and reversible; this runs daily, so favor small compounding fixes over rewrites. Skip this step entirely rather than force a change if nothing concrete came out of Step 1.

## Step 8 — Verify

Run `npm run build`. It must succeed before anything gets committed. If it fails, fix the break (or revert the change that caused it) before proceeding — never push a broken build.

## Step 9 — Commit and push

Stage everything from this run (articles, calendar update, X drafts, any SEO code change) and commit with a message describing what was published and what SEO/AEO change (if any) was made. Push to `origin main` — Cloudflare will auto-deploy from there.

## Step 10 — Report back

Concise summary: which 2 (or 1, if something got dropped) articles were published and why, what SEO/AEO change was made (if any), and where the X draft(s) live. Flag anything that needs Jio's attention (e.g., a dropped category-3 idea worth real research later).
