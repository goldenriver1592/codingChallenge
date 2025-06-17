// Global setup & teardown hooks for Cypress tests

(function defineDynamicBefore() {
    const browser = Cypress.env('browserName') || 'unknown';
  
    before(`Browser name: ${browser}`, () => {
      console.log(`>> Running setup for browser: ${browser}`);
    });
  
    after(`Teardown for ${browser}`, () => {
      console.log(`>> Completed tests on: ${browser}`);
    });
  })();
  