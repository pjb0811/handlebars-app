import puppeteer from 'puppeteer';
import urlModule from 'url';

const URL = urlModule.URL;
const RENDER_CACHE = new Map();

async function ssr({ url }) {
  if (RENDER_CACHE.has(url)) {
    return { html: RENDER_CACHE.get(url), ttRenderMs: 0 };
  }

  const start = Date.now();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    const renderUrl = new URL(url);
    renderUrl.searchParams.set('headless', '');
    await page.goto(renderUrl.href, { waitUntil: 'networkidle2' });
    await page.waitForSelector('#root');
  } catch (err) {
    throw new Error('page.goto/waitForSelector timed out.');
    console.error(err);
  }
  const html = await page.content();

  await browser.close();

  const ttRenderMs = Date.now() - start;
  console.info(`Headless rendered page in: ${ttRenderMs}ms`);

  RENDER_CACHE.set(url, html);

  return { html, ttRenderMs };
}

export default ssr;
