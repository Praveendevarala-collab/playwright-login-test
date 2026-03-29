const { test, expect } = require('@playwright/test');

test('Admin login test', async ({ page }) => {

  await page.goto('https://demohri.sutihr.com');

  await page.fill('input[name="username"]', 'qatest');
  await page.fill('input[type="password"]', 'test2020');

  // 👇 wait + click
  await page.waitForSelector('button:has-text("Proceed")');
  await page.getByRole('button', { name: 'Proceed' }).click();

  // 👇 better validation
  await expect(page).not.toHaveURL(/login/);
});