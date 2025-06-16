import { loginPage } from "../support/pages/index.page";

describe('Demo', () => {
    beforeEach('', () => {
        cy.visit("/");
    })

    it('login', () => {
       cy.fixture('users').then((data) => {
        loginPage.login(data.validUser.username, data.validUser.password);
       })
    })
})