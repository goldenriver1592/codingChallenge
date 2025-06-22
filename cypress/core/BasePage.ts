

export abstract class BasePage {

    protected readonly APP_ROOT_SELECTOR: string = '#app';

    /**
     * Reload current page and load
     */
    reloadCurrentPage() {
        return cy.wrap(null).then(() => {
            cy.reload();
            this.waitRootLoaded();
        })
    }

    /**
     * Visit URL and wait until it loaded
     */
    visit(url: string) {
        return cy.wrap(null).then(() => {
            cy.visit(url);
            this.waitRootLoaded();
        })
    }

    /**
     * Wait until root selector is loaded
     */
    waitRootLoaded() {
        return cy.get(this.APP_ROOT_SELECTOR, { timeout: 10000 }).should('be.visible');
    }

}