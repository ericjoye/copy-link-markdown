# Copy as Markdown Link

**A zero-dependency Chrome extension** that copies the current page title + URL as a Markdown `[title](url)` link with one click.

[![Landing Page](https://img.shields.io/badge/landing-page-6366f1)](https://copy-link-markdown.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Chrome Manifest V3](https://img.shields.io/badge/manifest-v3-blue)](manifest.json)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **One-click toolbar** | Click the extension icon → `[title](url)` is on your clipboard instantly |
| **Context menu** | Right-click → "Copy as Markdown link" on any page or specific link |
| **Badge feedback** | Toolbar flashes "Copied!" for 1.5 seconds so you know it worked |
| **Title cleanup** | Strips common site suffixes like " - YouTube", " | Medium" automatically |
| **Lightweight** | ~60 lines of vanilla JS, zero dependencies, ~5KB unpacked |
| **Privacy-first** | No tracking, no analytics, no network calls — `activeTab` only |

## 📦 Install (30 seconds)

### Option A: Download ZIP (easiest)

1. [Download the latest release](https://copy-link-markdown.vercel.app/copy-link-markdown.zip)
2. Unzip to a folder (e.g., `copy-link-markdown/`)
3. Open Chrome → `chrome://extensions/`
4. Enable **Developer mode** (top-right toggle)
5. Click **Load unpacked** → select the `copy-link-markdown/` folder

### Option B: Clone from GitHub

```bash
git clone https://github.com/ericjoye/copy-link-markdown.git
# Then Load unpacked from chrome://extensions/
```

## 🚀 Usage

- **Toolbar:** Click the extension icon on any page → link is copied
- **Page context:** Right-click anywhere → "Copy as Markdown link"
- **Link context:** Right-click a specific link → "Copy link as Markdown"

Paste the result anywhere Markdown works: **Obsidian, GitHub, Slack, Notion, email, docs, Discord, Figma, Linear, Notion, and more**.

## 🛠 Tech

| Detail | Value |
|--------|-------|
| Runtime | Chrome Extension Manifest V3 |
| Language | Vanilla JavaScript (~60 lines) |
| Dependencies | **Zero** — pure Chrome APIs |
| Permissions | `activeTab`, `contextMenus`, `clipboardWrite` |
| Filesize | ~5KB unpacked |

## 📄 License

MIT — do whatever you want with it.

---

*Built with ❤️ by [Forgecraft](https://copy-link-markdown.vercel.app)*
