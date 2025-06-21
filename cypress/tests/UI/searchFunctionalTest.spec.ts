import { users } from "../../fixtures/users";
import { SidePanel } from "../../support/components/SidePanel";
import DashboardPage from "../../support/pages/DashboardPage";
import LoginPage from "../../support/pages/LoginPage";
import { searchData } from "../../fixtures/searchData";


describe(`Search functional test suite - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: ['@smoke', 'UI']}, () => {

    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let sidePanel: SidePanel;

    beforeEach(() => {
        loginPage = new LoginPage();
        loginPage.visit("/");
        loginPage.login(users.validUser);
        dashboardPage = new DashboardPage();
        sidePanel = dashboardPage.getSidePanel();
    })

    it('Search by full menu name', () => {
        sidePanel.inputToSearchBox(searchData.fullValidName);
        sidePanel.expectedMenusIsVisible([searchData.fullValidName]);
    })

    it('Search by substring in middle', () => {
        sidePanel.inputToSearchBox(searchData.partOfValidName);
        const expectedLabels = sidePanel.getExpectedLabel(searchData.partOfValidName);
        sidePanel.expectedMenusIsVisible(expectedLabels);
    })

    it('Case-insensitive match', () => {
        sidePanel.inputToSearchBox(searchData.misCase);
        const expectedLabels = sidePanel.getExpectedLabel(searchData.misCase);
        sidePanel.expectedMenusIsVisible(expectedLabels);
    })

    it('Numeric input', () => {
        sidePanel.inputToSearchBox(searchData.numberInput);
        sidePanel.noneOfMenuIsVisible();
    })

    it('Special characters', () => {
        sidePanel.inputToSearchBox(searchData.specialchars);
        sidePanel.noneOfMenuIsVisible();
    })

    it('Searching with space characters only', () => {
        sidePanel.inputToSearchBox(searchData.spacesOnly);
        sidePanel.noneOfMenuIsVisible();
    })

    it('No-match returns empty list', () => {
        sidePanel.inputToSearchBox(searchData.nonExistingName);
        sidePanel.noneOfMenuIsVisible();
    })

    it('Rapid typing + deletion', () => {
        sidePanel.inputToSearchBox(searchData.beforeClean);
        sidePanel.expectedMenusIsVisible([searchData.beforeClean]);
        sidePanel.getSearchBox().clear();
        sidePanel.expectedMenusIsVisible(sidePanel.getExpectedLabel(""));
    })

    it('Trimming leading/trailing spaces', () => {
        sidePanel.inputToSearchBox(searchData.trimming);
        sidePanel.noneOfMenuIsVisible();
    })

    
})