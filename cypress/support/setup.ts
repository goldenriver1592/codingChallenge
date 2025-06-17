// Global setup & teardown hooks for Cypress tests

// Runs once before all tests in suite
before(`Browser name: ${Cypress.env("browserName") || 'unknown'}`, () => {
    console.log(`>> Running setup for browser: ${Cypress.env("browserName") || 'unknown'}`);
});

// Runs once after all tests
after(`Teardown for ${Cypress.env("browserName") || 'unknown'}`,() => {
    console.log(`>> Completed tests on: ${Cypress.env("browserName") || 'unknown'}`);
});
  
// Runs before each test
beforeEach(() => {
  console.log(`Runs before each test`);
});

// Runs after each test
afterEach(() => {
    console.log(`Runs after each test`);
});