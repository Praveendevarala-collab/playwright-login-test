import { test, expect } from '@playwright/test';

test('Admin Login Test', async ({ page }) => {
  await page.goto('https://demohri.sutihr.com');

  await page.fill('#username', 'qatest');
  await page.fill('#password', 'test2020');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});