import { BaseUIObject } from "../core/BaseUIObject";


export class MainMenuItem extends BaseUIObject {

    protected selector: string;

    constructor(selector: string) {
        super(selector);
        this.selector = selector;
    }

    getLabel(): Cypress.Chainable<string> {
        return super.get().invoke('text');
    }
    
}