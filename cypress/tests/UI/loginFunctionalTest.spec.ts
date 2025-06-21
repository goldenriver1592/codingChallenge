import { LoginPage } from "../../pages/index.page";
import { users } from "../../fixtures/users"
import { DashboardPage } from "../../pages/DashboardPage";

describe(`Login Functional Test Suite - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: ['@smoke', '@UI'] }, () => {

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
            loginPage.login(users.validUser);
            dashboardPage.dashboardPageTitleVissible();        
        })
    
        it('Logging in with different case-sensitive username', () => {
            loginPage.login(users.caseSensitiveUser);
            dashboardPage.dashboardPageTitleVissible();
        })
    
        it('Logging in with trailing spaces in username', () => {
            loginPage.login(users.trailingSpacesUser);
            dashboardPage.dashboardPageTitleVissible();
        })

    })

    describe(`Functional invalid credential`, () => {
    
        it('Logging in with leading spaces in username', () => {
            loginPage.login(users.leadingSpacesUser);
            loginPage.invalidCredentialsAlertIsVisible();
        })

        it(`Logging in with invalid username`, () => {
            loginPage.login(users.invalidUsername);
            loginPage.invalidCredentialsAlertIsVisible();
        })

        it(`Logging in with invalid password`, () => {
            loginPage.login(users.invalidPassword);
            loginPage.invalidCredentialsAlertIsVisible();
        })

        it(`Logging in with both fields empty`, () => {
            loginPage.login(users.invalidAllEmpty);
            loginPage.getUsername().haveRequiredWarning();
            loginPage.getPassword().haveRequiredWarning();
        })

        it(`Logging in with empty username`, () => {
            loginPage.login(users.invalidEmptyUsername);
            loginPage.getUsername().haveRequiredWarning();
        })

        it(`Logging in with empty password`, () => {
            loginPage.login(users.invalidEmptyPassword);
            loginPage.getPassword().haveRequiredWarning();
        })

        it(`Logging in with fields of spaces only`, () => {
            loginPage.login(users.invalidAllSpaces);
            loginPage.getUsername().haveRequiredWarning();
            loginPage.getPassword().haveRequiredWarning();
        })
    })

    // this case is skipped because the target web app did not handle it
    it.skip(`Maximum invalid attempts`, () => {

        for (let i=0; i < 5; i++) {
            loginPage.login(users.invalidPassword);
        }
        loginPage.login(users.validUser);
        loginPage.limitAttepmsAlertIsVisible();
    })
})