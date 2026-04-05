require('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Dashboard → Navigate to Personnel', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Step 1: Open app
  await loginPage.goto();

  // Step 2: Login
  await loginPage.login(
    process.env.SUTI_USERNAME,
    process.env.SUTI_PASSWORD
  );
// Step 3: Wait for dashboard URL
  await expect(page).toHaveURL(/myhrdashboard/);
  // ✅ Step 4: Wait for REAL dashboard UI (instead of networkidle)
  const quickLinks = page.locator('div.circle-label2:visible');
  await expect(quickLinks.first()).toBeVisible({ timeout: 60000 });
 // Step 5: Click Personnel (only visible one)
  await page.locator('div.circle-label2:visible >> text=Personnel').click();
  // Step 7: Validate Personnel page UI
  await expect(
    page.locator('text=Personnel').first()
  ).toBeVisible({ timeout: 40000 });
});