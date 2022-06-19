import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate file download in cypress', function () {

        it('File Download using cypress-downloadfile npm package', () => {
            cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
                'cypress/fixtures/Download', 'test.txt')
            cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'Lorem ipsum dolor sit amet')
        })
    })
})