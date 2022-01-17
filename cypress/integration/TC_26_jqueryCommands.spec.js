describe('Example to demonstrate commonly used JQuery commands in cypress', () => {

    it('Check if a button is disabled or enabled', { tags: 'smoke' }, function () {
        cy.visit('https://getbootstrap.com/docs/4.0/components/buttons/#disabled-state')
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn) => {
            if ($btn.is(':disabled')) { cy.log('Button is disabled') }
            else { cy.log('Button is enabled') }
        })
        cy.get('button.btn.btn-lg.btn-primary').eq(1).then(($btn) => {
            if ($btn.is(':enabled')) { cy.log('Button is enabled') }
            else { cy.log('Button is disabled') }
        })
    })

    it('Remove the disabled attribute and validate that button is enabled now', function () {
        cy.get('button.btn.btn-lg.btn-primary').eq(2).then(($btn) => {
            cy.wrap($btn.removeAttr('disabled')).should('be.enabled')
        })
    })

    it('Assert inner text', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('h2.title').eq(0).then(($ele) => {
            expect($ele.text()).to.equal('New Windows')
        })
    })

    it('Assert value', function () {
        cy.get('input#field1').eq(0).then(($ele) => {
            expect($ele.val()).to.equal('Hello World!')
        })
    })

    it('Assert the value of an attribute', function () {
        cy.get('#HTML7').then(($ele) => {
            expect($ele.attr('data-version')).to.equal('1')
        })
    })

    it('Assert CSS property', function () {
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('table#table1').then(($ele) => {
            expect($ele.css('margin-bottom')).to.equal('20px')
        })
    })
})