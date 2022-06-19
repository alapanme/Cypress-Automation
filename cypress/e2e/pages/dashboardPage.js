class dashboardPage {

    welcomeTxt() {
        return cy.get('#welcome')
    }

    logoutTxt() {
        return cy.contains('Logout')
    }
}

export default dashboardPage