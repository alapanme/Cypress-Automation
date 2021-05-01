import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Test to demonstrate testing of iframes in Cypress', () => {
        before(() => {
            cy.visit('http://the-internet.herokuapp.com/iframe')
        })

        it('Input text in the text editor which is inside an iframe', () => {
            cy.getIframe('#mce_0_ifr').clear().type('This is a test description.')
        })
    })
})