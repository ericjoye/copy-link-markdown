// background.js — Copy as Markdown Link (Manifest V3)

// ── Helpers ──────────────────────────────────────────────────────────────────

function cleanTitle(title) {
  // Strip common site suffixes like " - YouTube", " | Medium", " — GitHub"
  return title
    .replace(/\s*[|\-–—]\s*[^|\-–—]*$/, '')
    .trim();
}

function toMarkdownLink(title, url) {
  return `[${title}](${url})`;
}

async function copyMarkdownLink(tab) {
  const title = cleanTitle(tab.title || 'Untitled');
  const url = tab.url || '';
  const md = toMarkdownLink(title, url);

  await navigator.clipboard.writeText(md);

  // Flash badge
  const original = await chrome.action.getBadgeText({});
  await chrome.action.setBadgeText({ text: 'Copied!' });
  await chrome.action.setBadgeBackgroundColor({ color: '#4CAF50' });

  setTimeout(async () => {
    await chrome.action.setBadgeText({ text: original });
  }, 1500);
}

// ── Browser action (toolbar click) ──────────────────────────────────────────

chrome.action.onClicked.addListener(async (tab) => {
  await copyMarkdownLink(tab);
});

// ── Context menu ────────────────────────────────────────────────────────────

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'copy-md-link-page',
    title: 'Copy as Markdown link',
    contexts: ['page'],
  });

  chrome.contextMenus.create({
    id: 'copy-md-link-link',
    title: 'Copy link as Markdown',
    contexts: ['link'],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'copy-md-link-page') {
    await copyMarkdownLink(tab);
  } else if (info.menuItemId === 'copy-md-link-link') {
    // User right-clicked a link — use link URL + page title
    const title = cleanTitle(tab.title || 'Link');
    const url = info.linkUrl || '';
    const md = toMarkdownLink(title, url);
    await navigator.clipboard.writeText(md);

    await chrome.action.setBadgeText({ text: 'Copied!' });
    await chrome.action.setBadgeBackgroundColor({ color: '#4CAF50' });

    setTimeout(async () => {
      await chrome.action.setBadgeText({ text: '' });
    }, 1500);
  }
});

// ── Badge reset on tab switch ───────────────────────────────────────────────

chrome.tabs.onActivated.addListener(async () => {
  await chrome.action.setBadgeText({ text: '' });
});

chrome.tabs.onUpdated.addListener(async () => {
  await chrome.action.setBadgeText({ text: '' });
});
