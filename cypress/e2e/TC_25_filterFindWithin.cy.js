describe('Example to demonstrate filter, find and within commands in cypress', () => {

    it('Using filter with selector', { tags: 'regression' }, function () {
        cy.visit('/')
        cy.loginOrangeCRM('Admin', 'admin123')
        cy.get('.legendColorBox', { timeout: 7000 }).should('be.visible')
        cy.get('td').filter('.legendLabel').eq(1).should('have.text', 'Administration')
    })

    it('Using filter with innerText', function () {
        cy.visit('/')
        cy.loginOrangeCRM('Admin', 'admin123')
        cy.get('.legendColorBox', { timeout: 7000 }).should('be.visible')
        cy.get('td').filter(':contains("Client Services")').should('have.text', 'Client Services')
    })

    it('Using find', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('empinfo').find('#1 > name').should('have.text', 'David')
    })

    it('Using within', function () {
        cy.visit('/index.php/performance/addPerformanceTrackerLog/trackId/3')
        cy.loginOrangeCRM('Admin', 'admin123')
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('tr.odd').should('be.visible').within(() => {
            cy.get('.left').eq(0).should('have.text', 'Fiona Grace')
            cy.get('.left').eq(1).should('have.text', 'Project X')
            cy.get('.left').eq(2).should('have.text', 'Worked long hours to achieve t...')
            cy.get('.left').eq(3).should('have.text', 'Positive')
            cy.get('.left').eq(4).should('have.text', '2020-10-09')
        })
    })
})