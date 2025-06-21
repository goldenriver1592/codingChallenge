import { LoginPage } from "../../support/pages/index.page";
import { users } from "../../fixtures/users"
import { DashboardPage } from "../../support/pages/DashboardPage";

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
            dashboardPage.dashboardPageTitleIsVissible();        
        })
    
        it('Logging in with different case sensetive', () => {
            loginPage.login(users.caseSensitiveUser);
            dashboardPage.dashboardPageTitleIsVissible();
        })
    
        it('Logging in with Username contains Trailing Spaces', () => {
            loginPage.login(users.trailingSpacesUser);
            dashboardPage.dashboardPageTitleIsVissible();
        })
    
        it('Logging in with Username contains Leading Spaces', () => {
            loginPage.login(users.leadingSpacesUser);
            dashboardPage.dashboardPageTitleIsVissible();
        })

    })

    describe(`Functional invalid credential`, () => {

        it(`Logging in with invalid Username`, () => {
            loginPage.login(users.invalidUsername);
            loginPage.invalidCredentialsAlertIsVisible();
        })

        it(`Logging in with invalid Password`, () => {
            loginPage.login(users.invalidPassword);
            loginPage.invalidCredentialsAlertIsVisible();
        })

        it(`Logging in with all fields is empty`, () => {
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

        it(`Logging in with all fields contain space only`, () => {
            loginPage.login(users.invalidAllSpaces);
            loginPage.getUsername().haveRequiredWarning();
            loginPage.getPassword().haveRequiredWarning();
        })
    })

    // this case is skipped because the target web app did not handle it
    it.skip(`Maximum invalid attemps edge case`, () => {

        for (let i=0; i < 5; i++) {
            loginPage.login(users.invalidPassword);
        }
        loginPage.login(users.validUser);
        loginPage.limitAttepmsAlertIsVisible();
    })
})