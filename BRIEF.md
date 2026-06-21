# copy-link-markdown

## One-liner
Chrome extension that copies the current page title + URL as Markdown `[title](url)` with one click.

## Target user
Developers, writers, researchers, and anyone who writes Markdown and constantly pastes links into docs, notes, Obsidian, GitHub, Slack, or emails.

## Problem
Copying a link in Markdown format requires multiple manual steps: copy the page title, copy the URL, type `[`, paste title, type `](`, paste url, type `)`. Or you copy the URL, go back for the title, etc. It's a tiny friction repeated dozens of times per day. Browser "copy link" gives raw URL — not Markdown.

## MVP scope (ship in under 1 hour)
1. **Browser action button** — icon in Chrome toolbar, single click
2. **Copy as `[title](url)`** — grabs `document.title` + `document.location.href` from the active tab, formats as Markdown link, writes to clipboard
3. **Visual feedback** — brief badge text flash ("Copied!") on the icon so the user knows it worked
4. **Context menu option** — right-click → "Copy as Markdown link" as an alternative trigger

## Tech approach
- **Type:** Chrome Extension (Manifest V3)
- **Files:** `manifest.json`, `background.js`, `icon16.png` / `icon48.png` / `icon128.png`
- **Permissions:** `activeTab`, `contextMenus`, `clipboardWrite`
- **Dependencies:** None — pure Chrome APIs
- **Estimated build time:** 20–30 minutes (manifest + ~20 lines of JS)

## Risks
1. **Pages with long/ugly titles** — `document.title` may include site branding (" - YouTube", " | Medium"). Could add basic title cleanup later (strip common suffixes).
2. **Extension fatigue** — users may not want another extension for something so simple. Counter: it's 5KB, zero permissions that feel invasive, and replaces a daily friction.
3. **Built-in alternatives** — some apps (Obsidian, VS Code) have paste-as-markdown. But this works everywhere Chrome does, system-wide.

## Definition of done for the MVP
- `manifest.json` with Manifest V3, activeTab + contextMenus + clipboardWrite permissions
- Background service worker that:
  - On toolbar click: gets active tab title + URL → copies `[title](url)` → flashes "Copied!" badge for 1.5s
  - On right-click context menu: copies `[title](url)` for the link or page
- Icons (can be simple colored squares — no design needed for MVP)
- Loaded unpacked in Chrome and verified to work on 3 different site types (article, video, GitHub repo)
- `README.md` with install instructions (load unpacked)
