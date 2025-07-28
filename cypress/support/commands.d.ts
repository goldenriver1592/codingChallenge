/// <reference types="cypress" />

import { Credentials } from "./types";

declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {


            // -------- API Commands --------

            /**
             * Logs in via the API
             * @param user - Credentials object with username and password
             */
            loginViaApi(user: Credentials): Chainable<Subject>;


            // -------- Login Page Commands --------

            /**
             * Logs in via the UI using the Login Page Object.
             * @param user - Credentials object with username and password
             */
            loginViaUI(user: Credentials): Chainable<Subject>;
        }
    }
}

export { };