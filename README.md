# Copy as Markdown Link

Chrome extension that copies the current page title + URL as a Markdown `[title](url)` link with one click.

## Features

- **Toolbar button** — single click copies `[title](url)` to clipboard
- **Right-click context menu** — "Copy as Markdown link" on any page, or "Copy link as Markdown" on a specific link
- **Badge feedback** — flashes "Copied!" on the toolbar icon for 1.5 seconds
- **Title cleanup** — strips common site suffixes like " - YouTube", " | Medium"

## Install (load unpacked)

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `copy-link-markdown/` folder
5. The extension icon appears in your toolbar — done!

## Usage

- Click the extension icon on any page to copy as Markdown
- Right-click anywhere on a page → "Copy as Markdown link"
- Right-click on a specific link → "Copy link as Markdown" (uses the link's URL)

## Tech

- Chrome Extension Manifest V3
- Zero dependencies — pure Chrome APIs
- ~60 lines of JavaScript
- Permissions: `activeTab`, `contextMenus`, `clipboardWrite`
