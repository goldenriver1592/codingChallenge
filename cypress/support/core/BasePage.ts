

export abstract class BasePage {

    /**
     * Reload current page and load
     */
    reloadCurrentPage() {
        cy.reload();
        cy.get('#app', {timeout: 10000}).should('be.visible'); // #app should be add to constant file later (if more constant on this base page)
    }

    /**
     * Visit URL and wait until it loaded
     */
    visit(url: string) {
        cy.visit(url);
        cy.get('#app', {timeout: 10000}).should('be.visible');
    }

}