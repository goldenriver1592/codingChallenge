import { LoginPage } from "../support/pages/index.page";

describe('Demo', () => {

    let loginPage: LoginPage;

    beforeEach('', () => {
        cy.visit("/");
        loginPage = new LoginPage();
    })

    it('login', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })
})