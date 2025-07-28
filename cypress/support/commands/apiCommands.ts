import { AuthService } from "../../services/AuthService";

Cypress.Commands.add('loginViaApi', (credentials: { username: string; password: string }) => {
  cy.task('fileExists', 'cypress/fixtures/authStorage.json').then((exists) => {
    const auth = new AuthService();
    if (exists) {
      auth.restoreSession();
    } else {
      auth.login(credentials);
    }
  });
});