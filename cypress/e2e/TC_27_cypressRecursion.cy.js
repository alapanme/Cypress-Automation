import { recurse } from 'cypress-recurse'

describe('Example to demonstrate recursion in Cypress', { tags: 'smoke' }, () => {
    it('Validate the number 3 using recursion', function () {
        cy.visit('https://alapanme.github.io/random-number.html')
        recurse(
            () => {
                cy.reload()
                return cy.get('#myNumber').invoke('text').then(parseInt)
            },
            (x) => x === 3,
            {
                log: false,
                timeout: 7000, // try up to 7 seconds
                limit: 20, // try up to 20 times
                delay: 50 // delay before next iteration, ms
            }
        ).should('equal', 3)
    })
})