import { TextField } from "../components/TextField";
import { BasePage } from "../core/BasePage";
import { LoginPageSelectors as S, LoginPageMessage as M } from "../constants/page/loginPageConstants";
import { Button } from "../components/Button";

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

    login(username: string, password: string) {
        if (username) this.username.type(username);
        if (password) this.password.type(password);
        if (username && password) {
            this.loginButton.click();
        }
    }
}

export default LoginPage;