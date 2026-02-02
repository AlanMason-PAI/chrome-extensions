// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'analyze-with-gemini',
    title: 'Analyze with Gemini',
    contexts: ['page', 'link']
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'analyze-with-gemini') {
    // Get the URL to analyze (either the link clicked or the page URL)
    const urlToAnalyze = info.linkUrl || tab.url;

    // Copy URL to clipboard and open Gemini
    analyzeWithGemini(urlToAnalyze, tab);
  }
});

// Handle toolbar icon click (analyze current page)
chrome.action.onClicked.addListener((tab) => {
  analyzeWithGemini(tab.url, tab);
});

async function analyzeWithGemini(url, currentTab) {
  // Copy URL to clipboard using a content script
  try {
    await chrome.scripting.executeScript({
      target: { tabId: currentTab.id },
      func: copyToClipboard,
      args: [url]
    });

    // Open Gemini in a new tab (to the right of current tab)
    chrome.tabs.create({
      url: 'https://gemini.google.com/app',
      active: true,
      index: currentTab.index + 1
    });

  } catch (error) {
    console.error('Failed to copy URL:', error);
    // Still open Gemini even if copy fails
    chrome.tabs.create({
      url: 'https://gemini.google.com/app',
      active: true,
      index: currentTab.index + 1
    });
  }
}

// Function injected into page to copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}
