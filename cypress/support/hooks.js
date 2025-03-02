import LoginCommands from "./pageCommands/loginCommands";

const loginCommands = new LoginCommands()

beforeEach(() => {
    // Visit the website
    cy.fixture(('testData')).then((data)=>{
        loginCommands.navigateToLogin();
        loginCommands.login(data.role);
    })
});