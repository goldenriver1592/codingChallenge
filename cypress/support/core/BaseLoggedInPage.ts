import { SidePanel } from "../components/SidePanel";
import { UserDropdown } from "../components/UserDropdown";
import { BasePage } from "./BasePage"
import { BaseLoggedInPageSelectors as S } from "../constants/page/baseLoggedInPage";


export abstract class BaseLoggedInPage extends BasePage {

    protected sidePanel: SidePanel;
    protected userDropdown: UserDropdown;

    constructor() {
        super();
        this.sidePanel = new SidePanel(S.sidepanel);
        this.userDropdown = new UserDropdown(S.userDropdown);
    }
    
    getPageTitle(): Cypress.Chainable<string> {
      return cy.get(S.headerTitle).invoke('text');
    }

    getSidePanel(): SidePanel {
      return this.sidePanel;
    }
}