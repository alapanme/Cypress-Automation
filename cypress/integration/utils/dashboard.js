import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
const login = new loginPage();
const dashboard = new dashboardPage();

Cypress.Commands.add('logout', () => {
    dashboard.welcomeTxt().click()
    dashboard.logoutTxt().click()
    login.usernameInput().should('be.visible')
})