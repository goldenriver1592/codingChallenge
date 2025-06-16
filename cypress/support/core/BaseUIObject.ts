export abstract class BaseUIObject {

    /**
     * Get element by selector
     */
    protected get(selector: string) {
        return cy.get(selector);
    }


    /**
     * Click on element
     */
    protected click(selector: string) {
        return this.get(selector).click({ force: true });
    }


    /**
     * Double-click on element
     */
    protected doubleClick(selector: string) {
        return this.get(selector).dblclick({ force: true });
    }
}