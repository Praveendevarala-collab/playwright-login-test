const { devices } = require('@playwright/test');

module.exports = {
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
   // { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
   // { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  use: {
    storageState: 'playwright/.auth/user.json',
  }
};