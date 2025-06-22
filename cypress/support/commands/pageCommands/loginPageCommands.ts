import LoginPage from "../../../pages/LoginPage";
import { Credentials } from "../../types";

Cypress.Commands.add("loginViaUI", (user: Credentials) => {
  const loginPage = new LoginPage();
  return cy.wrap(null).then(() => {
    loginPage.visit("/");
    return loginPage.login(user);
  });
})
