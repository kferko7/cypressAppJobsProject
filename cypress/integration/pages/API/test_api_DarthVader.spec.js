/// <reference types ="Cypress" />

describe('get api user tests', () => {
	
	it('get user Darth Vader', () => {
		cy.request({
			method: 'GET',
			url: 'https://swapi.dev/api/people/4/'
			
		}).then((res) => {
			expect(res.status).to.eq(200)
			expect(res.body.data.name).to.eq('Darth Vader')
			
		})
	})
})