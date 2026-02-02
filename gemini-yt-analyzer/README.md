# Analyze with Gemini - Chrome Extension

Quickly analyze YouTube videos (or any URL) with Google Gemini.

## Installation

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select this folder: `~/MyData/Documents/Development/chrome-extensions/gemini-yt-analyzer`

## Usage

### Option 1: Toolbar Icon
- Click the extension icon in the toolbar
- Gemini opens with URL copied to clipboard
- Press `Cmd+V` to paste, then Enter

### Option 2: Right-Click Menu
- Right-click anywhere on a YouTube page
- Select **Analyze with Gemini**
- Gemini opens with URL copied to clipboard
- Press `Cmd+V` to paste, then Enter

## How It Works

1. Copies current page URL to clipboard
2. Opens Gemini in a new tab
3. You paste the URL (Gemini can't be pre-filled via URL parameter)

## Icons (Optional)

The extension works without icons. To add custom icons:
- Create 16x16, 48x48, and 128x128 PNG files
- Name them `icon16.png`, `icon48.png`, `icon128.png`
- Place in this folder

## Notes

- Works on any URL, not just YouTube
- Gemini will automatically fetch and analyze YouTube transcripts
- For non-YouTube URLs, Gemini will analyze the page content
