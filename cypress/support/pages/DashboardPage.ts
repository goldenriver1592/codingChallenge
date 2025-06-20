import { BaseLoggedInPage } from "../core/BaseLoggedInPage";


export class DashboardPage extends BaseLoggedInPage {

    // ---------- Assertion ----------

    dashboardPageTitleIsVissible() {
        this.getPageTitle().should('equal', 'Dashboard');
    }
}

export default DashboardPage;