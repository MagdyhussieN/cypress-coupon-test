class LoginPage
{

    getUsername(){
        return cy.get('#LoginInput_UserNameOrEmailAddress');
    }

    getPassword(){
        return cy.get('#LoginInput_Password');
    }

    getLoginButton(){
        return cy.get('button[type="submit"]').contains('Login');
    }

    getArabicLanguageSelector(){
        return cy.get('span[data-kt-element="current-lang-name"]').contains('العربية');
    }

    getEnglishLanguageSelector(){
        return cy.get('span').contains('English');
    }


}
export default LoginPage;