---
description: Run Genba's daily media operations — 2 new articles (English + Japanese), X post drafts, and an SEO/AEO code tune-up, then publish and deploy.
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

## Step 3 — Write both articles, in both languages

The site is bilingual (`/blog/...` in English, `/ja/blog/...` in Japanese — see `app/(site)/blog/` vs `app/ja/blog/`). Every article needs both versions before it's considered done.

- Write the English version first: match the voice, length (~500–700 words), and structure (H2 sections, closing takeaway) of the existing posts in `content/blog/published/`. The target reader is a non-Japanese-speaking founder/VP Sales (see `docs/04-target-customers.md`).
- Then write a faithful Japanese translation — not a re-summary — matching the tone of the existing files in `content/blog/published-ja/`. This version's real readers are Japanese sales/business people (per the About page's founding story), so keep it in natural business Japanese, not stiff literal translation.
- **Use the identical slug/filename in both `content/blog/published/<slug>.md` and `content/blog/published-ja/<slug>.md`.** The language switcher and hreflang tags depend on the two directories mirroring each other 1:1 — a slug in one without the other is a broken language toggle for that page.
- Frontmatter (both files): `title` (in that file's language), `category` ("1"–"5", same in both), `status: "published"`, `published_date` (today, `YYYY-MM-DD`, same in both), `excerpt` (one sentence, in that file's language).
- If any internal link to another post is included (see Step 7's internal-linking practice), point the English version at `/blog/<slug>` and the Japanese version at `/ja/blog/<slug>`.

## Step 4 — Guardrail gate (mandatory, per `ops/guardrails.md`)

For **each** draft — English and Japanese both — explicitly check:
- No mention of Adyen — name, deals, clients, or pricing.
- Written as Jio's personal, generalizable experience — not attributed to any employer.
- Any proof-of-work claim leans on Cisco/Shopify, not Adyen.
- No fabricated statistics, client anecdotes, or citations. (The Japanese version isn't exempt just because it's a translation — check it as its own piece of published content, not just a mechanical rendering of an already-approved English draft.)
- The founder's name stays out of it, consistent with the site-wide policy (see `docs/03-founder-profile.md`) — this applies equally to the Japanese copy.

If an article (in either language) fails any check, revise it. If it can't be fixed within this run, drop the whole article — English and Japanese both, since a language pair that's half-published breaks the switcher — save what you have to `content/blog/drafts/` (and the Japanese draft alongside it, same slug) with a comment explaining what's blocking it, and publish only the article(s) that passed both languages. Say so plainly in your final report; don't quietly publish 1 instead of 2 without flagging it.

## Step 5 — Save and log

- Move/save passing articles into `content/blog/published/` (English) and `content/blog/published-ja/` (Japanese), same slug in both.
- Append a row per article to the table in `content/calendar/content-calendar.md` (date, category, format = Blog, title — English title is fine for the log even though the post itself is bilingual, status = 公開済み).

## Step 6 — X drafts

For each published article, write a digest-thread draft using `content/templates/x-thread-template.md`'s shape, saved to `content/x/drafts/YYYY-MM-DD-<slug>-thread.md`. These are drafts only — nothing gets posted to X automatically (no API/account wired up here).

## Step 7 — SEO/AEO code tune-up

Apply one or two small, safe, buildable improvements informed by Step 1's research — e.g. JSON-LD structured data (Organization / Article / FAQ schema), heading-hierarchy fixes, meta description tightening, sitemap/robots adjustments. Keep changes incremental and reversible; this runs daily, so favor small compounding fixes over rewrites. Skip this step entirely rather than force a change if nothing concrete came out of Step 1.

Separately from whatever Step 1 turns up, treat internal linking as a standing practice, not a one-off: when a new article's intro references an earlier post's thesis, make that a real markdown link (`/blog/<slug>` in the English file, `/ja/blog/<slug>` in the Japanese one), not just prose. Every post page also auto-renders a same-category "related posts" block (`lib/posts.ts`'s `getRelatedPosts`), so no extra work is needed there — it picks up new posts automatically.

## Step 8 — Verify

Run `npm run build`. It must succeed before anything gets committed. If it fails, fix the break (or revert the change that caused it) before proceeding — never push a broken build.

## Step 9 — Commit and push

Stage everything from this run (articles, calendar update, X drafts, any SEO code change) and commit with a message describing what was published and what SEO/AEO change (if any) was made. Push to `origin main` — Cloudflare will auto-deploy from there.

## Step 10 — Report back

Concise summary: which 2 (or 1, if something got dropped) articles were published and why, what SEO/AEO change was made (if any), and where the X draft(s) live. Flag anything that needs Jio's attention (e.g., a dropped category-3 idea worth real research later).
