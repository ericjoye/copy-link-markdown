# Copy as Markdown Link — Chrome Web Store Listing

## Extension Name

**Copy as Markdown Link**

## Short Description (132 chars max)

Copy the current page title and URL as a Markdown [title](url) link with one click. Right-click support included.

## Long Description

Copy as Markdown Link is a lightweight Chrome extension that copies the current page title and URL as a formatted Markdown link — `[title](url)` — with a single click. No more manually constructing Markdown links or switching between tabs to grab URLs.

**ONE-CLICK COPY**
Click the extension icon on any page to instantly copy `[Page Title](https://url)` to your clipboard. The toolbar badge flashes "Copied!" for 1.5 seconds so you know it worked. The page title is automatically cleaned up — common site suffixes like " - YouTube", " | Medium", or " — GitHub" are stripped so your links look clean.

**RIGHT-CLICK CONTEXT MENU**
Right-click anywhere on a page to see "Copy as Markdown link" in the context menu. Right-click on a specific link to copy that link's URL as Markdown. This makes it easy to grab links from blog posts, documentation, or any page without touching the toolbar.

**ZERO DEPENDENCIES, MINIMAL PERMISSIONS**
The extension is ~60 lines of vanilla JavaScript with zero external dependencies. It only requests the permissions it needs: `activeTab`, `contextMenus`, and `clipboardWrite`. No tracking, no analytics, no network calls — ever.

## Key Features

- **Toolbar button** — single click copies `[title](url)` to clipboard
- **Right-click context menu** — "Copy as Markdown link" on any page or specific link
- **Badge feedback** — flashes "Copied!" on the toolbar icon for 1.5 seconds
- **Title cleanup** — strips common site suffixes (YouTube, Medium, GitHub, etc.)
- **Zero dependencies** — pure Chrome APIs, ~60 lines of JavaScript
- **Minimal permissions** — only `activeTab`, `contextMenus`, `clipboardWrite`
- **Manifest V3** — fully compatible with the latest Chrome extension standard

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked**
4. Select the `copy-link-markdown/` folder
5. The extension icon appears in your toolbar — done!

## Requirements

- Chrome 88+ (Manifest V3 support)
- No additional dependencies

## Support

- **Contact:** eric@ericjoye.com
- **GitHub:** https://github.com/ericjoye/copy-link-markdown
- **Issues:** https://github.com/ericjoye/copy-link-markdown/issues
- **License:** MIT

## Keywords

markdown, copy, link, clipboard, chrome extension, productivity, developer tools, url, bookmark, formatting
