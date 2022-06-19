import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Test to demonstrate Test Retries in Cypress', () => {
        before(() => {
            cy.visit('https://wikipedia.org')
        })

        it('Validate Page Title', () => {
            //Intentionally making it fail to check retries
            cy.title().should('eq', 'Wikipedia1111')
        })
    })
})