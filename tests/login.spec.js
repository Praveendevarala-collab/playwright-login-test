const { test, expect } = require('@playwright/test');

test('Dashboard access test', async ({ page }) => {

  await page.goto('https://demohri.sutihr.com/dashboard');

  await expect(page).not.toHaveURL(/login/);
});