import { LoginPage } from "../support/pages/index.page";

const browser = Cypress.env('CYPRESS_BROWSER_NAME') || 'unknown';

describe(`Login Suite - ${browser}`, () => {

    let loginPage: LoginPage;

    beforeEach(() => {
        cy.visit("/");
        loginPage = new LoginPage();
    })

    it('login', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })
})