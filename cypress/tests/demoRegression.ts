import { LoginPage } from "../support/pages/index.page";

describe(`Login ssss - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: 'regression' }, () => {

    let loginPage: LoginPage;

    beforeEach(() => {
        cy.visit("/");
        loginPage = new LoginPage();
    })

    it('login ssss', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })

    it('login in ssss', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })
})