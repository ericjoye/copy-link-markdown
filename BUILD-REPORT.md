# BUILD-REPORT: copy-link-markdown

## What was built

A zero-dependency Chrome Extension (Manifest V3) that copies the current page
title + URL as a Markdown `[title](url)` link to the clipboard with one click.

## File layout

```
copy-link-markdown/
  manifest.json       Manifest V3 config — permissions: activeTab, contextMenus, clipboardWrite
  background.js       Service worker — browser action + context menu + clipboard + badge
  icons/
    icon16.png        16x16 toolbar icon (blue square with "M")
    icon48.png        48x48 icon
    icon128.png       128x128 Chrome Web Store icon
  README.md           Install instructions (load unpacked)
```

## How to run

1. Open Chrome → `chrome://extensions/`
2. Enable Developer mode (top-right toggle)
3. Click "Load unpacked" → select `copy-link-markdown/` folder
4. Click the extension icon on any page → Markdown link is in your clipboard

## What works

- Toolbar click: grabs active tab title + URL, formats as `[title](url)`, copies to clipboard
- Badge flashes "Copied!" in green for 1.5 seconds on success
- Right-click context menu: "Copy as Markdown link" (page context) and "Copy link as Markdown" (link context)
- Title cleanup: strips common site suffixes (" - YouTube", " | Medium", " — GitHub")
- Badge resets on tab switch/update

## Known gaps (post-MVP)

- Title cleanup is basic — only strips trailing " - X" / " | X" / " — X" patterns
- No options page for customizing title cleanup rules
- No keyboard shortcut support
- Icons are simple programmatic PNGs — not polished design assets
- Not published to Chrome Web Store

## Build time

~15 minutes. All files are pure HTML/JS/CSS with zero external dependencies.
