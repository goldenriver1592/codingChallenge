import { BaseUIObject } from "../core/BaseUIObject";
import { MainMenuItem } from "./MainMenuItem";
import { SidePanelSelectors as S, SidePanelMenuLabels } from "../constants/component/sidepanelConstants";
import { TextField } from "./TextField";


export class SidePanel extends BaseUIObject {

    protected searchBox: TextField;
    protected adminMenu: MainMenuItem;
    protected pimMenu: MainMenuItem;
    protected leaveMenu: MainMenuItem;
    protected timeMenu: MainMenuItem;
    protected recruitmentMenu: MainMenuItem;
    protected myInfoMenu: MainMenuItem;
    protected performanceMenu: MainMenuItem;
    protected dashboardMenu: MainMenuItem;
    protected directoryMenu: MainMenuItem;
    protected maintenanceMenu: MainMenuItem;
    protected claimMenu: MainMenuItem;
    protected buzzMenu: MainMenuItem;

    constructor(selector: string) {
        super(selector);
        this.searchBox = new TextField(S.searchBox);
        this.adminMenu = new MainMenuItem(S.adminMenu);
        this.pimMenu = new MainMenuItem(S.pimMenu);
        this.leaveMenu = new MainMenuItem(S.leaveMenu);
        this.timeMenu = new MainMenuItem(S.timeMenu);
        this.recruitmentMenu = new MainMenuItem(S.recruitmentMenu);
        this.myInfoMenu = new MainMenuItem(S.myDetailsMenu);
        this.performanceMenu = new MainMenuItem(S.performanceMenu);
        this.dashboardMenu = new MainMenuItem(S.dashboardMenu);
        this.directoryMenu = new MainMenuItem(S.directoryMenu);
        this.maintenanceMenu = new MainMenuItem(S.maintenanceMenu);
        this.claimMenu = new MainMenuItem(S.claimMenu);
        this.buzzMenu = new MainMenuItem(S.buzzMenu);
    }

    // ---------- Actions ----------

    /**
     * Retrieves all visible menu items as MainMenuItem instances.
     * @returns Chainable that yields an array of MainMenuItem objects for each visible menu link.
     */
    getAllVisibleMenus(): Cypress.Chainable<MainMenuItem[]> {
        return cy.get(S.rootAllMenu)
            .find<HTMLAnchorElement>('li a:visible')
            .then($menus => {
                return Array.from($menus).map((el, idx) => {
                    const itemSelector = `${S.rootAllMenu} li a:eq(${idx})`;
                    return new MainMenuItem(itemSelector);
                })
            })
    }

    /**
     * Retrieves the labels (text) of all visible menu items.
     * @returns Chainable that yields an array of strings representing the menu labels.
     */
    getAllVisibleMenuLabels(): Cypress.Chainable<string[]> {
        return this.getAllVisibleMenus().then((menus) => {
            // Start with an empty array in a Cypress chain
            let labelsChain: Cypress.Chainable<string[]> = cy.wrap<string[]>([]);

            // For each MainMenuItem, append its label to the array
            menus.forEach((menu) => {
                labelsChain = labelsChain.then((labels) => {
                    return menu
                        .getLabel()
                        .then((txt) => {
                            labels.push(txt);
                            return labels;
                        });
                });
            });

            // Finally yields Chainable<string[]> with all labels
            return labelsChain;
        });
    }

    /**
     * Gets the TextField object representing the side panel's search box.
     * @returns The TextField instance for the search box.
     */
    getSearchBox() {
        return this.searchBox;
    }

    /**
     * Types the given text into the side panel's search box.
     * @param data - The string to input into the search box.
     * @returns Chainable of the typing action.
     */
    inputToSearchBox(data: string) {
        return this.getSearchBox().type(data);
    }

    /**
     * Filters the predefined menu labels by matching the input text.
     * @param inputText - Partial or full text to search within menu labels.
     * @returns An array of expected labels containing the input text (case-insensitive).
     */
    getExpectedLabel(inputText: string) {
        return SidePanelMenuLabels.filter(label => label.toLowerCase().includes(inputText.toLowerCase()));
    }

    // ---------- Assertion ----------

    /**
     * Asserts that exactly the provided menu labels are visible in the side panel.
     * @param expectedMenu - Array of expected menu labels to verify.
     */
    expectedMenusVisible(expectedMenu: string[]) {
        return this.getAllVisibleMenuLabels().then((actualLabels) => {
          cy.log(`Expected menu labels: ${expectedMenu.join(', ')}`);
          cy.log(`Actual visible labels: ${actualLabels.join(', ')}`);
      
          expect(actualLabels, 'All expected menus should be visible')
            .to.have.members(expectedMenu);
      
          expect(actualLabels.length, 'Number of visible menus should match')
            .to.equal(expectedMenu.length);
        });
      }

    /**
     * Asserts that no menu items are visible in the side panel.
     */
    noneOfMenuVisible() {
        return cy
            .get(S.rootAllMenu)
            .find('li a:visible')
            .should('have.length', 0, 'No visible menu items should be present');
    }
}