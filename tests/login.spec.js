const {test, expect} = require('@playwright/test');

test('Admin login', async ({page}) => {
  await page.goto('https://demohri.sutihr.com/');
  
  await page.fill('input#username', 'qatest');
  await page.fill('input#password', 'test2020');
  await page.click('text=Proceed');

 });