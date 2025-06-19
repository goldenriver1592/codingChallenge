// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import 'allure-cypress';

import { label} from 'allure-cypress';

before(() => {
  const browser = Cypress.env("browserName") || 'unknown browser';
  const osName = Cypress.env("osName") || 'unknown OS'

  // Add suite-level info
  label('suite', `Test Suite - [${browser}] browser on [${osName}] OS`);
});

// Import setup.ts file
import './setup';