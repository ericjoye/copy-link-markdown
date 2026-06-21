# Screenshots — Copy as Markdown Link

**Product:** Copy as Markdown Link — Chrome extension that copies the current page title + URL as a Markdown `[title](url)` link with one click.

**Type:** Chrome Extension (Manifest V3)

---

## Screenshot 1: Main Interface — Toolbar Button Click

**What to capture:** A Chrome browser window showing the extension icon in the toolbar. The user has just clicked the icon on a webpage, and the "Copied!" badge is visible on the icon. Show the resulting clipboard content pasted below.

**ASCII Mockup:**

```
┌──────────────────────────────────────────────────────────┐
│  🌐 Chrome                                               │
│  ┌────────────────────────────────────────────────────┐  │
│  │ 🔙 🔜 🔄  │ https://blog.example.com/my-post   🔒 │  │
│  ├────────────────────────────────────────────────────┤  │
│  │ [📋] ← Extension icon with "Copied!" badge        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  📋 Copied to clipboard!                       │      │
│  │  ┌──────────────────────────────────────────┐  │      │
│  │  │ [My Blog Post Title](https://blog.example│  │      │
│  │  │ .com/my-post)                            │  │      │
│  │  └──────────────────────────────────────────┘  │      │
│  └────────────────────────────────────────────────┘      │
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  My Blog Post Title                             │      │
│  │  ─────────────────────────────────────────     │      │
│  │  This is the content of the blog post...       │      │
│  │                                                │      │
│  └────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

---

## Screenshot 2: Key Feature — Right-Click Context Menu

**What to capture:** The right-click context menu showing both "Copy as Markdown link" (for the page) and "Copy link as Markdown" (for a specific link).

**ASCII Mockup:**

```
┌──────────────────────────────────────────────────────────┐
│  🌐 Chrome — Right-click context menu                    │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐      │
│  │  🔙 Back                    ⌘[                 │      │
│  │  🔜 Forward                 ⌘]                 │      │
│  │  🔄 Reload                  ⌘R                 │      │
│  │  ──────────────────────────────────────        │      │
│  │  💾 Save as...               ⌘S                 │      │
│  │  🖨 Print...                 ⌘P                 │      │
│  │  ──────────────────────────────────────        │      │
│  │  📋 Copy as Markdown link   ← PAGE             │      │
│  │  🔗 Copy link as Markdown   ← LINK (hovering   │      │
│  │                                 over a link)   │      │
│  │  ──────────────────────────────────────        │      │
│  │  🔍 Search Google for "..."                    │      │
│  │  ──────────────────────────────────────        │      │
│  │  🛠 Inspect                 ⌘⌥I                 │      │
│  └────────────────────────────────────────────────┘      │
│                                                          │
│  Page: "How to Build Chrome Extensions"                  │
│  Link: "https://developer.chrome.com/docs/extensions/"   │
│                                                          │
│  Result (page): [How to Build Chrome Extensions]         │
│                 (https://blog.example.com/chrome-ext)     │
│  Result (link): [Chrome Extensions Docs]                 │
│                 (https://developer.chrome.com/docs/...)   │
└──────────────────────────────────────────────────────────┘
```

---

## Screenshot 3: Badge Feedback Animation

**What to capture:** A sequence showing the badge state: default → "Copied!" → back to default after 1.5 seconds.

**ASCII Mockup:**

```
  Before Click          During (0-1.5s)       After (1.5s+)
  ┌──────────┐         ┌──────────┐          ┌──────────┐
  │    📋    │   →     │  Copied! │    →     │    📋    │
  │          │         │    📋    │          │          │
  └──────────┘         └──────────┘          └──────────┘
   Default badge        Green badge with      Returns to
   (gray icon)          "Copied!" text        default state
```

---

## Screenshot 4: Results — Pasted Markdown Output

**What to capture:** A text editor or note-taking app (e.g., Obsidian, Notion, or VS Code) showing multiple copied Markdown links pasted from different pages.

**ASCII Mockup:**

```
┌──────────────────────────────────────────────────────────┐
│  📝 Obsidian — notes.md                                  │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  # Research Notes                                        │
│                                                          │
│  ## Useful Links                                         │
│                                                          │
│  - [Python 3.12 Release Notes](https://docs.python.org/  │
│    3/whatsnew/3.12.html)                                 │
│  - [Chrome Extension Manifest V3](https://developer.     │
│    chrome.com/docs/extensions/mv3/)                      │
│  - [Markdown Guide](https://www.markdownguide.org)       │
│  - [SQLite Documentation](https://www.sqlite.org/docs.   │
│    html)                                                 │
│  - [Rust Book](https://doc.rust-lang.org/book/)          │
│                                                          │
│  ## References                                           │
│                                                          │
│  - [Understanding Zero Dependencies](https://example.com  │
│    /zero-deps)                                           │
│  - [CLI Tools Best Practices](https://example.com/cli-   │
│    best-practices)                                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## Notes for Actual Screenshots

1. **Show the toolbar icon** clearly — it should be a recognizable clipboard/Markdown icon
2. **Badge animation** is a key UX detail — capture the "Copied!" state with a green background
3. **Context menu** should show both options clearly with the "Send to AI" style submenu
4. **Title cleanup** in action: show a page titled "My Post - YouTube" becoming `[My Post](url)` (stripped suffix)
5. **Pasted output** in a real note-taking app shows the practical value
6. **Use real websites** with recognizable titles (docs.python.org, developer.chrome.com, etc.)
7. **Chrome theme:** Use default light theme for consistency
8. **Extension icon** should be visible in the extensions puzzle menu too
