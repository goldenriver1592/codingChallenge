import { users } from "../../fixtures/users";
import { SidePanel } from "../../components/SidePanel";
import DashboardPage from "../../pages/DashboardPage";
import { searchData } from "../../fixtures/searchData";


describe(`Search functional test suite - ${Cypress.env("osName") || 'unknown OS'} - ${Cypress.env("browserName") || 'unknown'}`, { tags: ['@smoke', 'UI'] }, () => {

    let dashboardPage: DashboardPage;
    let sidePanel: SidePanel;

    beforeEach(() => {
        cy.loginViaUI(users.validUser);
        dashboardPage = new DashboardPage();
        sidePanel = dashboardPage.getSidePanel();
    })

    it('Search by full menu name', () => {
        sidePanel.inputToSearchBox(searchData.fullValidName);
        sidePanel.expectedMenusVisible([searchData.fullValidName]);
    })

    it('Search by substring in middle', () => {
        sidePanel.inputToSearchBox(searchData.partOfValidName);
        const expectedLabels = sidePanel.getExpectedLabel(searchData.partOfValidName);
        sidePanel.expectedMenusVisible(expectedLabels);
    })

    it('Case-insensitive match', () => {
        sidePanel.inputToSearchBox(searchData.misCase);
        const expectedLabels = sidePanel.getExpectedLabel(searchData.misCase);
        sidePanel.expectedMenusVisible(expectedLabels);
    })

    it('Numeric input', () => {
        sidePanel.inputToSearchBox(searchData.numberInput);
        sidePanel.noneOfMenuVisible();
    })

    describe(`Searching with special characters`, () => {
        searchData.specialchars.split("").forEach(value => {
            it(`Searching with special characters: ${value}`, () => {
                sidePanel.inputToSearchBox(value);
                sidePanel.noneOfMenuVisible();
            })
        })

    })

    it('Searching with space characters only', () => {
        sidePanel.inputToSearchBox(searchData.spacesOnly);
        sidePanel.noneOfMenuVisible();
    })

    it('No-match returns empty list', () => {
        sidePanel.inputToSearchBox(searchData.nonExistingName);
        sidePanel.noneOfMenuVisible();
    })

    it('Rapid typing + deletion', () => {
        sidePanel.inputToSearchBox(searchData.beforeClean);
        sidePanel.expectedMenusVisible([searchData.beforeClean]);
        sidePanel.getSearchBox().clear();
        sidePanel.expectedMenusVisible(sidePanel.getExpectedLabel(""));
    })

    it('Trimming leading/trailing spaces', () => {
        sidePanel.inputToSearchBox(searchData.trimming);
        sidePanel.noneOfMenuVisible();
    })


})