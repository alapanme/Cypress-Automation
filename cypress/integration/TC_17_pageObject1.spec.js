import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Validate Login and Logout on OrangeHRM website', function () {

        beforeEach(function () {
            cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
        })

        it('Validate successful Login', function () {
            cy.login(this.testdata)
        })

        it('Validate successful Logout', function () {
            cy.logout()
        })

    })
})