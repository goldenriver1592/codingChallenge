import { SidePanel } from "../components/SidePanel";
import { BasePage } from "./BasePage"
import { BaseLoggedInPageSelectors as S } from "../constants/page/baseLoggedInPage";


export abstract class BaseLoggedInPage extends BasePage {

    protected sidePanel: SidePanel;

    constructor() {
        super();
        this.sidePanel = new SidePanel(S.sidepanel);
    }
    
    /**
     * Retrieves the text of the current page's header title.
     * @returns A Chainable yielding the header title string.
     */
    getPageTitle(): Cypress.Chainable<string> {
      return cy.get(S.headerTitle).invoke('text');
    }

    /**
     * Provides access to the SidePanel component for interaction and assertion.
     * @returns The initialized SidePanel instance.
     */
    getSidePanel(): SidePanel {
      return this.sidePanel;
    }
}