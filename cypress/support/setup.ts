// Global setup & teardown hooks for Cypress tests

const browser = Cypress.env("browserName") || 'unknown';

// Runs once before all tests in suite
before(`Browser name: ${browser}`, () => {
    console.log(`>> Running setup for browser: ${browser}`);
});

// Runs once after all tests
after(`Teardown for ${browser}`,() => {
    console.log(`>> Completed tests on: ${browser}`);
});