import TestFilters from '../support/filterTests.js'

TestFilters(['regression','smoke'], () => {
    describe('Example to demonstrate API Testing in cypress', function () {

        it('Hit an API End point and validate its response status code and body', () => {
            cy.request({
                method: 'GET',
                url: 'https://randomuser.me/api/',
                qs: 'results=1'
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('info')
                expect(response.body.info).to.have.property('version', '1.3')
            })
        })
    })
})