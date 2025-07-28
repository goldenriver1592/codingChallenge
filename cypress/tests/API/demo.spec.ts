import { users } from "../../fixtures/users"


describe('api demo', () => {
    before(() => {
        cy.loginViaApi(users.validUser);
      });
    
      beforeEach(() => {
        cy.visit('/web/index.php/dashboard/index');
      });
    
      it('should show the dashboard after login', () => {
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard');
      });
})