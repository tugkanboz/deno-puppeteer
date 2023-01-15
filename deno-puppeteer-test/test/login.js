import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch({
    headless: false,
    args: ['--headless'],
})
const page = await browser.newPage();

await page.goto("https://www.mizu.com/en-mx/login");
page.once('load', () => console.log('Page loaded!'));
await page.$eval("#EmailLogin", el => el.value = 'test@example.com');
await page.$eval("#Password", el => el.value = 'test');
await page.click(".js-login-button");
await page.screenshot({ path: "deno-puppeteer-test/screenshots/test-screenshot.png" });

await browser.close();