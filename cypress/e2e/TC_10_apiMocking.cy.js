import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate API Mocking in Cypress', () => {

        beforeEach(() => {
            cy.server()
            cy.route('GET', '**/tags', 'fixture:tags.json')
            cy.route('GET', '**/articles*', 'fixture:articlefeed.json')
            cy.visit('https://angular.realworld.io/')
        })

        it('Mock the Tags from the API Response and then validate on UI', () => {
            cy.get('.tag-list')
                .should('contain', 'cypress')
                .and('contain', 'selenium')

        })

        it('Mock the Article feed from the API Response and then validate on UI', () => {
            cy.get('app-favorite-button.pull-xs-right').contains('10')
            cy.get('.author').contains('testersdock')
            cy.get('.preview-link > p').contains('This is a test description')
        })
    })
})