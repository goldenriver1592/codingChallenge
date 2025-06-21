import { TextField } from "../components/TextField";
import { BasePage } from "../core/BasePage";
import { LoginPageSelectors as S, LoginPageMessage as M } from "../constants/page/loginPageConstants";
import { Button } from "../components/Button";
import { Credentials } from "../support/types";
import { ErrorAlert } from "../components/ErrorAlert";

export class LoginPage extends BasePage {
    private username: TextField;
    private password: TextField;
    private loginButton: Button;

    constructor() {
        super();
        this.username = new TextField(S.usernameInput);
        this.password = new TextField(S.passwordInput);
        this.loginButton = new Button(S.loginButton);
    }

    // ---------- Actions ----------

    /**
     * Retrieves the TextField object for the username input.
     * @returns The TextField instance representing the username input field.
     */
    getUsername(): TextField {
        return this.username;
    }

    /**
     * Retrieves the TextField object for the password input.
     * @returns The TextField instance representing the password input field.
     */
    getPassword(): TextField {
        return this.password;
    }

    /**
     * Fetches the page title text of the login screen.
     * @returns Chainable that yields the title string.
     */
    getPageTitle(): Cypress.Chainable<string> {
        return cy.get(S.title).invoke('text');
    }

    /**
     * Retrieves the error alert text from the login screen.
     * @returns Chainable that yields the error message string.
     */
    getErrorAlertText(): Cypress.Chainable<string> {
        const errorAlert = new ErrorAlert(S.errorAlert);
        return errorAlert.getErrorAlertText();
    }

    /**
     * Attempts to perform login with given credentials.
     * @param creds - Object containing username and password to input.
     */
    login({ username, password }: Credentials) {
        if (username) this.username.type(username);
        if (password) this.password.type(password);
        this.loginButton.click();
    }

    // ---------- Assertion ----------

    /**
     * Verifies that the login page is currently visible by asserting its title.
     */
    loginPageIsVisible() {
        expect(this.getPageTitle().should('equal', 'Login'),
            "Login page is not visible");
    }

    /**
     * Verifies that the invalid credentials alert is displayed with the expected message.
     */
    invalidCredentialsAlertIsVisible() {
        expect(this.getErrorAlertText().should('equal', M.invalidCredentials),
            "Invalid credentials alert is not visible");
    }

    /**
     * Verifies that the limit attempts alert is displayed with the expected message.
     */
    limitAttepmsAlertIsVisible() {
        expect(this.getErrorAlertText().should('equal', M.limitAttemps),
            "Invalid credentials alert is not visible");
    }
}

export default LoginPage;