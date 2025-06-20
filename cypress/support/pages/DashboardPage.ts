import { BaseLoggedInPage } from "../core/BaseLoggedInPage";


export class DashboardPage extends BaseLoggedInPage {

    dashboardPageTitleShouldBeVissible() {
        this.getPageTitle().should('equal', 'Dashboard');
    }
}