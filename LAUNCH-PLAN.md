# LAUNCH PLAN: Copy as Markdown Link

**Product:** Copy as Markdown Link (Chrome Extension)
**Slug:** copy-link-markdown
**Status:** QA PASS — ready for human-led launch
**Date:** 2026-06-19

---

## Launch Channels (priority order)

### 1. Chrome Web Store (primary)
The main distribution channel. Users install directly in Chrome.
- **Action required:** Human must create a Chrome Web Store developer account ($5 one-time fee) and publish the extension.
- **Assets needed:** Store listing (done), promo screenshots (need human), extension ZIP (need human).

### 2. GitHub Repository (secondary)
Open-source the code. Drives organic discovery via GitHub search and serves as the "source of truth" install method.
- **Action required:** Human must create a public repo, push the code, and add a README badge for the Chrome Web Store link once live.

### 3. Product Hunt (launch day)
Classic developer tool launch platform. Good for first-day visibility.
- **Action required:** Human must create a Product Hunt account, prepare the submission, and publish on launch day.

### 4. Reddit (organic, post-launch)
Subreddits: r/Chrome, r/Markdown, r/ObsidianMD, r/webdev, r/productivity.
- **Action required:** Human must post a short "Show HN" style post in 2-3 relevant subreddits.

### 5. Twitter/X (organic, post-launch)
Short announcement tweet with a screenshot/GIF of the extension in action.
- **Action required:** Human must post from their account.

---

## First-Week Plan

### Day 0 (Prep — before public launch)
1. Create Chrome Web Store developer account ($5 fee).
2. Create GitHub public repo, push code, add README.
3. Record a 15-second screen GIF of the extension in action (toolbar click → badge flash → paste into a Markdown editor).
4. Take Chrome Web Store promo screenshots (1280x800 or 640x400).
5. Write Product Hunt description (use store-listing.md as base).

### Day 1 (Launch Day)
1. **Publish to Chrome Web Store** — upload the ZIP, fill in listing from `store-listing.md`, submit for review (review takes 1-3 days; can be done in advance).
2. **Publish to GitHub** — push code, add topics: `chrome-extension`, `markdown`, `productivity`, `manifest-v3`.
3. **Product Hunt launch** — submit and share.
4. **Reddit posts** — post to r/Markdown, r/ObsidianMD, r/Chrome.
5. **Twitter/X** — announce with GIF.

### Day 2-3 (Momentum)
1. Respond to early comments/questions on Reddit and Product Hunt.
2. Post to Hacker News ("Show HN: Copy as Markdown Link — a 5KB Chrome extension").
3. Share in relevant Discord/Slack communities (Obsidian Discord, etc.).

### Day 4-7 (Sustain)
1. Monitor Chrome Web Store reviews and ratings.
2. Fix any bugs reported by early users.
3. Update GitHub README with install count badge once available.
4. Consider a follow-up blog post: "I built a Chrome extension in 30 minutes — here's what happened."

---

## Exact Human Actions Required

The following actions **cannot be performed by agents** and require a human:

| # | Action | Platform | Cost | Time |
|---|--------|----------|------|------|
| 1 | Create Chrome Web Store developer account | Chrome Web Store | $5 one-time | 10 min |
| 2 | Upload extension ZIP + listing to Chrome Web Store | Chrome Web Store | Free | 20 min |
| 3 | Create public GitHub repo, push code | GitHub | Free | 15 min |
| 4 | Record screen GIF of extension in action | Any screen recorder | Free | 10 min |
| 5 | Take Chrome Web Store promo screenshots | Any screenshot tool | Free | 10 min |
| 6 | Submit to Product Hunt | Product Hunt | Free | 15 min |
| 7 | Post to Reddit (2-3 subreddits) | Reddit | Free | 20 min |
| 8 | Post to Twitter/X | Twitter/X | Free | 5 min |
| 9 | Post to Hacker News | HN | Free | 10 min |
| 10 | Share in Discord/Slack communities | Various | Free | 15 min |

**Total estimated human time:** ~2 hours
**Total cost:** $5 (Chrome Web Store developer account)

---

## Assets Ready

All marketing copy is in `~/businesses/copy-link-markdown/launch/`:
- `landing.md` — headline, subhead, 3 benefit bullets, CTA
- `store-listing.md` — name, short + long description, keywords
- `pricing.md` — free model with optional donation path

## Escalation File

See `~/hermes_ops/escalations/copy-link-markdown.md` for the detailed escalation checklist.
