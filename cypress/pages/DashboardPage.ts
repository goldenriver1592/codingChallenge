import { BaseLoggedInPage } from "../core/BaseLoggedInPage";


export class DashboardPage extends BaseLoggedInPage {

    // ---------- Assertion ----------

    /**
     * Verifies that the dashboard page title is visible and matches the expected text.
     * If the title is not exactly 'Dashboard', the assertion will fail with a clear message.
     */
    dashboardPageTitleVissible() {
        return this.getPageTitle()
        .should('equal', 'Dashboard', `Dashboard page title should be visible.`);
    }
}

export default DashboardPage;