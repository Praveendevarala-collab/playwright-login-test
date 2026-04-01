require('dotenv').config();

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 10000
  },

  fullyParallel: true,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    headless: true, // set true in CI

    viewport: { width: 1280, height: 720 },

    ignoreHTTPSErrors: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    baseURL: 'https://demohri.sutihr.com'
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ]

});