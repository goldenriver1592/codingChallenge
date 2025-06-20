import { TextField } from "../components/TextField";
import { BasePage } from "../core/BasePage";
import { LoginPageSelectors as S, LoginPageMessage as M } from "../constants/page/loginPageConstants";
import { Button } from "../components/Button";
import { Credentials } from "../types";
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

    getUsername() {
        return this.username;
    }

    getPassword() {
        return this.password;
    }

    getPageTitle(): Cypress.Chainable<string> {
        return cy.get(S.title).invoke('text');
    }

    getErrorAlertText(): Cypress.Chainable<string> {
        const errorAlert = new ErrorAlert(S.errorAlert);
        return errorAlert.getErrorAlertText();
    }

    // ---------- Actions ----------

    login({ username, password }: Credentials) {
        if (username) this.username.type(username);
        if (password) this.password.type(password);
        this.loginButton.click();
    }

    // ---------- Assertion ----------

    loginPageIsVisible() {
        this.getPageTitle().should('equal', 'Login');
    }

    invalidCredentialsAlertIsVisible() {
        this.getErrorAlertText().should('equal', M.invalidCredentials);
    }
}

export default LoginPage;