import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example for writeFile and readFile (Smoke,E2E)', function () {

        it('Write to a text file test1.txt using writeFile', function () {
            cy.writeFile('cypress/fixtures/test1.txt', 'Testersdock.com\n')
        })

        it('Append content to the end of the text file test1.txt using the flag a+', function () {
            cy.writeFile('cypress/fixtures/test1.txt', 'Info Hub for Testers', { flag: 'a+' })
        })

        it('Write to a JSON file test2.json using writeFile', function () {
            cy.writeFile('cypress/fixtures/test2.json', { firstname: 'Alapan', lastname: 'Das' })
        })

        it('Validate the content of both text and JSON file using readFile', function () {
            cy.readFile('cypress/fixtures/test1.txt').should('contain', 'Testersdock')
            cy.readFile('cypress/fixtures/test1.txt').should('eq', 'Testersdock.com\nInfo Hub for Testers')
            cy.readFile('cypress/fixtures/test2.json').its('firstname').should('eq', 'Alapan')
        })

    })
})