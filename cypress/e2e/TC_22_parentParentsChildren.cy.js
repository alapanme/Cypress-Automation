describe('Example to demonstrate parent, parents and children commands in cypress', () => {

    before(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Using parents and children', function () {
        cy.get('employee#2')
            .parents('empinfo')
            .children('#3')
            .should('contain', 'Marry')
    })

    it('Using parent and children', function () {
        cy.get('employee#2')
            .parent()
            .children('#1')
            .should('contain', 'david@myemail.com')
    })

})