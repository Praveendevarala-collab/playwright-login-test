const { devices } = require('@playwright/test');

module.exports = {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
   // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  use: {
  storageState: process.env.CI ? undefined : 'playwright/.auth/user.json',
},
};
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    storageState: 'playwright/.auth/user.json',
    baseURL: 'https://demohri.sutihr.com/'
  }
});