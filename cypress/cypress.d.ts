/// <reference types="cypress" />
/// <reference types="@cypress/grep" />

declare namespace Cypress {
    interface SuiteConfigOverrides {
      tags?: string | string[];
    }
  
    interface TestConfigOverrides {
      tags?: string | string[];
    }
  }
