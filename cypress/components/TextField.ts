import { TextFieldSelectors as S, TextFieldMessage as M } from "../constants/component/textFieldConstants";
import { BaseUIObject } from "../core/BaseUIObject";

export class TextField extends BaseUIObject {
    protected selector: string;

    constructor(selector: string) {
        super(selector);
        this.selector = selector;
    }

    // ---------- Actions ----------

    /**
     * Clear the input field
     */
    clear() {
        return super.get().should('be.visible').clear();
    }

    /**
     * Submit the form containing this field
     */
    submit() {
        return super.get().closest('form').submit();
    }

    /**
     * Type into the input field
     */
    type(text: string, options?: Partial<Cypress.TypeOptions>) {
        return super.get().should('be.visible').clear().type(text, options);
    }

    // ---------- Assertion ----------

    /**
     * Assert input has expected value
     */
    shouldHaveValue(value: string) {
        return super.get().should('have.value', value);
    }

    /**
     * Check whether password is currently hidden (dots)
     */
    shouldBePasswordHidden() {
        return super.get().should('have.attr', 'type', 'password');
    }

    /**
     * Assert input has placeholder
     */
    shouldHavePlaceholder(expected: string) {
        return super.get().should('have.attr', 'placeholder', expected);
    }

    /**
     * Check warning/error message is attached to this field
     * @param message expected error text
     */
    checkWarningMessage(message: string) {
        return super
            .get()
            .parent()
            .parent()
            .find(S.warning)
            .should('be.visible')
            .and('contain.text', message);
    }

    /**
     * Assert Required warning is attached to this fields 
     */
    haveRequiredWarning() {
        return this.checkWarningMessage(M.required);
    }
}
