import { BaseUIObject } from "../core/BaseUIObject";
import { ErrorAlertSelector as S } from "../constants/component/errorAlertConstants";

export class ErrorAlert extends BaseUIObject {

    constructor(selector: string) {
        super(selector);
    }

    /**
     * Retrieves the visible error message text from the alert component.
     * @returns A Chainable yielding the text content of the error alert.
     */
    getErrorAlertText(): Cypress.Chainable<string> {
        return cy.get(S.alertText).invoke('text');
    }
    
}