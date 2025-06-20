import { BaseUIObject } from "../core/BaseUIObject";
import { ErrorAlertSelector as S } from "../constants/component/errorAlertConstants";

export class ErrorAlert extends BaseUIObject {

    constructor(selector: string) {
        super(selector);
    }

    getErrorAlertText(): Cypress.Chainable<string> {
        return cy.get(S.alertText).invoke('text');
    }
    
}