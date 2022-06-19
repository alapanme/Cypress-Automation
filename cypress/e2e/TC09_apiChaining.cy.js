import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate API Chaining in Cypress', function () {

        it('Chain two API requests and validate the response', () => {
            //Part 1
            cy.request({
                method: 'GET',
                url: 'https://www.metaweather.com/api/location/search/?query=sn',
            }).then((response) => {
                const location = response.body[0].title
                return location
            })
                //Part 2
                .then((location) => {
                    cy.request({
                        method: 'GET',
                        url: 'https://www.metaweather.com/api/location/search/?query=' + location
                    }).then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body[0]).to.have.property('title', location)
                    })
                })
        })
    })
})