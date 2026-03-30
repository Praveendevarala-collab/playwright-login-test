const { test } = require('@playwright/test');

test('login and save session', async ({ page }) => {
  await page.goto('https://demohri.sutihr.com');

  await page.waitForSelector('input[name="username"]');

  await page.fill('input[name="username"]', process.env.USERNAME);
  await page.fill('input[type="password"]', process.env.PASSWORD);

  await page.click('button:has-text("Proceed")');

  // ✅ Ensure login success
  await page.waitForURL(/dashboard/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });
});