import { LoginPage } from "../support/pages/index.page";
import { users } from "../fixtures/users"
import { DashboardPage } from "../support/pages/DashboardPage";

describe(`Login Functional Test Suite - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: ['smoke', 'UI'] }, () => {

    let loginPage: LoginPage;

    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit("/");
    })

    afterEach(() => {

    })

    describe(`Functional valid credential`, () => {

        let dashboardPage: DashboardPage;

        beforeEach (() => {
            dashboardPage = new DashboardPage();
        })

        it('Logging in with valid credentials', () => {
            loginPage.login(users.validUser.username, users.validUser.password);
            dashboardPage.dashboardPageTitleShouldBeVissible();        
        })
    
        it('Logging in with different case sensetive', () => {
            loginPage.login(users.caseSensitiveUser.username, users.caseSensitiveUser.password);
            dashboardPage.dashboardPageTitleShouldBeVissible();
        })
    
        it('Logging in with Username contains Trailing Spaces', () => {
            loginPage.login(users.trailingSpacesUser.username, users.trailingSpacesUser.password);
            dashboardPage.dashboardPageTitleShouldBeVissible();
        })
    
        it('Logging in with Username contains Leading Spaces', () => {
            loginPage.login(users.leadingSpacesUser.username, users.leadingSpacesUser.password);
            dashboardPage.dashboardPageTitleShouldBeVissible();
        })

    })
})