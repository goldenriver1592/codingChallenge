import { Credentials } from "../support/types";

export class AuthService {
    login({ username, password }: Credentials) {
        cy.visit('/web/index.php/auth/login');
        cy.get('input[name="_token"]')
            .invoke('val')
            .then((csrfToken) => {
                cy.request({
                    method: 'POST',
                    url: '/web/index.php/auth/validate',
                    form: true,
                    body: {
                        _token: csrfToken,
                        username,
                        password
                    },
                    failOnStatusCode: false,
                }).then((res) => {
                    expect(res.status).to.eq(200);
                    cy.getAllLocalStorage().then((allStorage) => {
                        const storage = allStorage["https://opensource-demo.orangehrmlive.com"];
                        Cypress.env('authStorage', storage);
                        cy.writeFile('cypress/fixtures/authStorage.json', storage);
                    });
                    cy.getCookies().then((cookies) => {
                        cy.writeFile('cypress/fixtures/authCookies.json', cookies);
                    });
                })
            })
    }

    restoreSession() {
        cy.readFile('cypress/fixtures/authStorage.json').then((storage) => {
            cy.visit('/', {
                onBeforeLoad(win) {
                    Object.entries(storage).forEach(([key, value]) =>
                        win.localStorage.setItem(key, JSON.stringify(value))
                    )
                }
            });
        })

        cy.readFile('cypress/fixtures/authCookies.json').then((cookies) => {
            cookies.forEach((cookie: any) => {
              cy.setCookie(cookie.name, cookie.value, {
                domain: cookie.domain,
                path: cookie.path,
                secure: cookie.secure,
                httpOnly: cookie.httpOnly,
                expiry: cookie.expiry,
              });
            });
          });
    }
}

export default AuthService;


