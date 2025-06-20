import { defineConfig } from 'cypress';
import { allureCypress } from "allure-cypress/reporter";
import { pluginGrep } from '@mmisty/cypress-grep/plugins';

export default defineConfig({
  e2e: {
    screenshotsFolder: "cypress/reports/screenshots",
    videosFolder: "cypress/reports/videos",
    setupNodeEvents(on, config) {
      pluginGrep(on, config);
      const browserName = process.env.BROWSER;
      // Set the browser name to Cypress env (will be used inside tests)
      config.env.browserName = browserName;
      const osName = process.env.RUNNER_OS;
      // Set the OS name to Cypress env (will be used inside tests)
      config.env.osName = osName;
      allureCypress(on, config, {
        resultsDir: "cypress/reports/allure-results",
      });
      return config;
    },
    specPattern: ['cypress/tests/**/*.{js,jsx,ts,tsx}', 'cypress/e2e/**/*.{js,jsx,ts,tsx}'],
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  },
})
