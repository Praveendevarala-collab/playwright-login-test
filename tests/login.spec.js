require('dotenv').config();

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Dashboard access test', async ({ page }) => {

  console.log('SUTI_USERNAME:', process.env.SUTI_USERNAME);
  console.log('SUTI_PASSWORD:', process.env.SUTI_PASSWORD);

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    process.env.SUTI_USERNAME,
    process.env.SUTI_PASSWORD
  );

  await expect(page).toHaveURL(/myhrdashboard/);
  //await expect(page.locator('text=Home')).toBeVisible({timeout: 10000});
});