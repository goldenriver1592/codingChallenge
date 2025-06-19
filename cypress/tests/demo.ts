import { LoginPage } from "../support/pages/index.page";

describe(`Login Suite - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: 'smoke' }, () => {

    let loginPage: LoginPage;

    beforeEach(() => {
        cy.visit("/");
        loginPage = new LoginPage();
    })

    it('login smoke', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })

    it('login in regression', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })
})