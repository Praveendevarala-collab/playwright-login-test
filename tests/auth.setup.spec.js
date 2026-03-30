require('dotenv').config({ override: true });

const { test } = require('@playwright/test');

test('login and save session', async ({ page }) => {
  await page.goto('https://demohri.sutihr.com/');

  await page.waitForSelector('input[name="username"]');

  console.log("ENV USERNAME:", process.env.TEST_USERNAME);

  await page.fill('input[name="username"]', process.env.TEST_USERNAME);
  await page.fill('input[type="password"]', process.env.TEST_PASSWORD);

  await page.click('button:has-text("Proceed")');

  await page.waitForLoadState('networkidle');

  // Optional: validate login
  // await page.waitForURL('**dashboard**');

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});