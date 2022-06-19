import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Login to OrangeHRM website (E2E)', function () {
        before(function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
        })

        it('Validate successful Login', function () {
            cy.get('#txtUsername').type(this.testdata.username)
            cy.get('#txtPassword').type(this.testdata.password)
            cy.get('#btnLogin').click()
            cy.get('#welcome').contains(this.testdata.welcomeText)
        })
    })
})
