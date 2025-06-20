export abstract class BaseUIObject {

    constructor(protected selector: string) {}

    /**
     * Get element by selector
     */
    get() {
        return cy.get(this.selector);
    }


    /**
     * Click on element
     */
    click() {
        return this.get().click({ force: true });
    }


    /**
     * Double-click on element
     */
    doubleClick() {
        return this.get().dblclick({ force: true });
    }
    
    /**
     * Verify element is visible
     */
    isVisible() {
        return this.get().should('be.visible');
    }
}