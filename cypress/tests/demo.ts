import { LoginPage } from "../support/pages/index.page";

describe(`Login Suite - ${Cypress.env("browserName") || 'unknown'}`, () => {

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