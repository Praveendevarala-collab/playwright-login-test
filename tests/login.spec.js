const { test, expect } = require('@playwright/test');

test('Dashboard access test', async ({ page }) => {

  await page.goto('https://demohri.sutihr.com');

  await page.fill('input[name="username"]', 'qatest');
  await page.fill('input[name="password"]', 'test2020');

  await page.getByRole('button', { name: 'Proceed' }).click();

// Wait for URL to contain myhrdashboard (SPA-safe)
await expect(page).toHaveURL(/myhrdashboard/);

  // Validate successful login
  await expect(page).toHaveURL(/myhrdashboard/);

});