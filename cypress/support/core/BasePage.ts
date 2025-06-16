import { BaseUIObject } from "./BaseUIObject";

export abstract class BasePage extends BaseUIObject {

    /**
     * Reload current page and load
     */
    reloadCurrentPage() {
        cy.reload();
        cy.get('body').should('be.visible');
    }

    /**
     * Visit URL and wait until it loaded
     */
    visit(url: string) {
        cy.visit(url);
        cy.get('main').should('be.visible');
    }

}