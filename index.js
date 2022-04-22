const os = require("os");
const puppeteer = require('puppeteer');

// Maintains the count of screenshots per domain
let DOMAIN_COUNT = {};

// Get the data dump dir
function getScreenshotDumpDir() {
  const userHomeDir = os.homedir();
  // This custom path has auto-sync enabled for my machine
  return `${userHomeDir}/Documents/ScheduledWebsiteScreenshots/`;
}

// Get the filename to save
function getScreenshotName(url = 'https://unknown-domain') {
  let datetimeStr = new Date().toISOString().split('T')[0];
  let domain = (new URL(url)).hostname;
  if (domain.startsWith('www.')) {
    domain = domain.replace('www.', '');
  }
  if (domain.endsWith('.com')) {
    domain = domain.replace('.com', '');
  }
  DOMAIN_COUNT[domain] = 1 + (DOMAIN_COUNT[domain] ?? 0);
  return `${domain}-${datetimeStr}-ss-${DOMAIN_COUNT[domain]}.png`;
}

// Get the full path of the screenshot
function getScreenshotFullPath(url) {
  return getScreenshotDumpDir() + getScreenshotName(url);
}

// Get the screenshot from URL
async function grabUrlScreenshot(url = 'https://news.google.com') {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });
  const page = await browser.newPage();
  const filepath = getScreenshotFullPath(url);
  await page.goto(url);
  await page.screenshot({ path: filepath });
  await browser.close();
}

// Get the URL to scrape
function getUrl() {
  const cmdLineArgs = process.argv.slice(2);
  if (cmdLineArgs.length > 0) {
    // sanitize
    return cmdLineArgs;
  }
  return 'https://news.google.com';
}

(async () => {
  let urls = getUrl();
  console.table(urls);
  for (const url of urls) {
    await grabUrlScreenshot(url);
  };
  console.table(DOMAIN_COUNT);
})();
