describe('Example to demonstrate file upload in cypress', function () {
    before(function () {
        cy.visit('https://the-internet.herokuapp.com/upload')
    })

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = 'images/evening.png'
        cy.get('input[type="file"]').attachFile(filepath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('evening.png')
    })
})