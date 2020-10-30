class loginPage {

    usernameInput() {
        return cy.get('#txtUsername')
    }

    passwordInput() {
        return cy.get('#txtPassword')
    }

    loginBtn() {
        return cy.get('#btnLogin')
    }
}
export default loginPage