describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
    before(() => {
        cy.visit('https://books-pwakit.appspot.com/')
    })

    it('Input a text in the input box and after search validate the URL', () => {
        cy.get('book-app') //1
            .shadow() //2
            .find('app-header') //3
            .find('.toolbar-bottom') //4
            .find('book-input-decorator') //5
            .find('#input') //6
            .type('Science')
            .click()
            .url('contains', 'explore?q=Science')
    })
})