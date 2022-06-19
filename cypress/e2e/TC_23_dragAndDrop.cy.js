describe('Example to demonstrate Drag and Drop in cypress', () => {

    beforeEach(() => {

        //Defining browser resolution
        cy.viewport(1920, 1080)
    })

    it('Using the cyess-drag-drop plugin on a HTML site', function () {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        //Before Drag and Drop column-a has 'A' and 'column-b' has 'B'
        cy.get('#column-a')
            .should('have.text', 'A')
        cy.get('#column-b')
            .should('have.text', 'B')

        //Drag and drop using cyess-drag-drop plugin
        cy.get('#column-a').drag('#column-b')

        //After Drag and Drop column-a has 'B' and 'column-b' has 'A'
        cy.get('#column-a')
            .should('have.text', 'B')
        cy.get('#column-b')
            .should('have.text', 'A')
    })

    it('Using custom commands on a Angular Material site', function () {

        cy.visit('https://material.angular.io/cdk/drag-drop/overview#cdk-drag-drop-connected-sorting')

        //Click on 'Accept Cookies' button
        cy.get('.buttons > .mat-primary').should('be.visible').click()

        //Check the drop list is visible
        cy.get('#cdk-drop-list-1 > div:nth-child(1)', { timeout: 7000 })
            .should('be.visible')

        //Before Drag and Drop the first item is 'Get up'
        cy.get('#cdk-drop-list-2 > :nth-child(1)')
            .should('have.text', 'Get up')

        //Drag and Drop using custom command   
        cy.draganddrop('#cdk-drop-list-1 > div:nth-child(1)', '#cdk-drop-list-2')

        //After Drag and Drop the first item is 'Get to work'
        cy.get('#cdk-drop-list-2 > :nth-child(1)')
            .should('have.text', 'Get to work')
    })
})