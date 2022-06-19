import TestFilters from '../support/filterTests.js'

TestFilters(['smoke'], () => {
    describe('Example to demonstrate API Mocking in Cypress using cy.intercept', () => {

        beforeEach(() => {
            cy.intercept('GET', '**/tags', { fixture: 'tags.json' })
            cy.intercept('GET', '**/articles*', { fixture: 'articlefeed.json' })
            cy.visit('https://angular.realworld.io/')
        })

        it('Mock the Tags from the API Response and then validate on UI', () => {
            cy.get('.tag-list', { timeout: 10000 })
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