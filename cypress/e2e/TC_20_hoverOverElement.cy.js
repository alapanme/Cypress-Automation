describe('Example to Demostrate how to hover over element in cypress', () => {

    it('Hover and Validate Text using trigger(\'mouseover\')', function () {
        cy.visit('https://www.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
        cy.url().should('include','wishlist/intro')
    })

    it('Hover and Validate Text using invoke(\'show\')', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Add to cart', {matchCase: false}).first().click()
        cy.get('.cross', {timeout: 5000}).click()
        cy.get('#searchbox').scrollTo('center',{ensureScrollable: false})
        cy.get('.cart_block').invoke('show')
        cy.contains('Check out', {matchCase: false}).click()
        cy.get('.navigation_page').should('have.text', 'Your shopping cart')
    })

    it('Hover and Validate Text using realHover()', function () {
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.get('div:nth-child(3) > img').realHover('mouse')
        cy.get('div:nth-child(3) > div > h5').should('be.visible')
        cy.get('div:nth-child(4) > img').realHover('mouse')
        cy.get('div:nth-child(4) > div > h5').should('be.visible')
        cy.get('div:nth-child(5) > img').realHover('mouse')
        cy.get('div:nth-child(5) > div > h5').should('be.visible')
    })
})