import { BaseUIObject } from "../core/BaseUIObject";


export class Button extends BaseUIObject {
    private selector: string;

    constructor(selector: string) {
        super();
        this.selector = selector;
    }

    click(): Cypress.Chainable<JQuery<HTMLElement>> {
        return super.click(this.selector);
    }

    doubleClick(): Cypress.Chainable<JQuery<HTMLElement>> {
        return super.doubleClick(this.selector);
    }


}