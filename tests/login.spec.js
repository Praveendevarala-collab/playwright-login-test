const { test, expect } = require('@playwright/test');

test('Admin login test', async ({ page }) => {
  
  // 1. Open URL
  await page.goto('https://demohri.sutihr.com');

  // 2. Enter username
  await page.fill('#username', 'qatest');

  // 3. Enter password
  await page.fill('#password', 'test2020');

  // 4. Click login button
  await page.click('Proceed');

  // 5. Verify login success (example)
  await expect(page).toHaveURL(/dashboard/);
});