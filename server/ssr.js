import puppeteer from 'puppeteer';

const RENDER_CACHE = new Map();

async function ssr({ url, pathname }) {
  if (RENDER_CACHE.has(url)) {
    return { html: RENDER_CACHE.get(url), ttRenderMs: 0 };
  }

  const start = Date.now();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setContent('<div>test</div>');
  /*
  try {
    await page.goto(url, { waitUntil: 'networkidle2' });
    await page.waitForSelector('#root');
  } catch (err) {
    console.error(err);
    throw new Error('page.goto/waitForSelector timed out.');
  }
  */

  const html = await page.content();

  await browser.close();

  const ttRenderMs = Date.now() - start;
  console.info(`Headless rendered page in: ${ttRenderMs}ms`);

  RENDER_CACHE.set(url, html);

  return { html, ttRenderMs };
}

export { ssr as default };
