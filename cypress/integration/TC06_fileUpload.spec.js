import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate file upload in cypress', function () {

        it('File Upload using cypress-file-upload npm package', () => {
            cy.visit('https://the-internet.herokuapp.com/upload')
            const filepath = 'images/evening.png'
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').contains('evening.png')
        })

        it('File Upload using selectFile with select mode', () => {
            cy.visit('https://the-internet.herokuapp.com/upload')
            cy.get('#file-upload').selectFile('cypress/fixtures/images/evening.png')
            cy.get('#file-submit').click()
            cy.get('#uploaded-files').contains('evening.png')
        })

        it('File Upload using selectFile with drag and drop mode', () => {
            cy.visit('https://postimages.org/')
            cy.get('#uploadFile').selectFile('cypress/fixtures/images/evening.png', { action: 'drag-drop' })
            cy.get('.controls > h2', { timeout: 7000 }).should('have.text', 'Upload completed!')
            cy.get('.imagetitle').should('have.text', 'evening')
        })

        it.only('Multiple file upload using selectFile', () => {
            cy.visit('https://postimages.org/')
            cy.get('#uploadFile').selectFile([
                'cypress/fixtures/images/morning.jpg',
                'cypress/fixtures/images/evening.png',
                'cypress/fixtures/images/night.jpg',
            ], { action: 'drag-drop' })
            cy.get('.controls > h2', { timeout: 9000 }).should('have.text', 'Upload completed!')
            cy.get('.imagetitle').eq(0).should('have.text', 'evening')
            cy.get('.imagetitle').eq(1).should('have.text', 'morning')
            cy.get('.imagetitle').eq(2).should('have.text', 'night')
        })
    })
})