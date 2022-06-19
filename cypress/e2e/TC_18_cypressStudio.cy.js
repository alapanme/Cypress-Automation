import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to Demonstrate Cypress Studio', () => {

        it('Extend Test via Cypress Studio', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
            /* ==== Generated with Cypress Studio ==== */
            cy.get('#divUsername > .form-hint').click();
            cy.get('#txtUsername').type('Admin');
            cy.get('#txtPassword').type('admin123');
            cy.get('#btnLogin').click();
            cy.get('#welcome').click();
            cy.get('#welcome-menu > :nth-child(1) > :nth-child(2) > a').click();
            /* ==== End Cypress Studio ==== */
        })
    })
})