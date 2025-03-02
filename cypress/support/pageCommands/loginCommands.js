///<reference types = "cypress"/>

import { Env } from "../Env"
import LoginPage from "../pageObjects/LoginPage"


const loginPage = new LoginPage()

class LoginCommands {

    navigateToLogin() {
        cy.viewport(2500, 1500)
        const url = new Env().getBaseUrl()
        cy.visit(url)
        loginPage.getArabicLanguageSelector().click();
        loginPage.getEnglishLanguageSelector().click();
        cy.wait(2000);
    }

    desiredCapabilities() {
        indexedDB.deleteDatabase('firebaseLocalStorageDb');        
    }

    login(userRole) {
        userRole = userRole.toLowerCase()
        let userCredentials = new Env().userRole(userRole)
        loginPage.getUsername().should('exist').type(userCredentials.username)
        loginPage.getPassword().should('exist').type(userCredentials.password)
        loginPage.getLoginButton().click({ force: true })
        cy.wait(4000)
    }

}

export default LoginCommands;