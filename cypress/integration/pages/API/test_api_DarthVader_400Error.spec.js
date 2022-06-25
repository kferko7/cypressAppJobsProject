/// <reference types ="Cypress" />

describe('get api user tests', () => {
	
	it('get user Darth Vader', () => {
		cy.request({
			method: 'GET',
			url: 'https://swapi.dev/api/people/400/'
			
		}).then((res) => {
			expect(res.status).to.eq(404)
			
			
		})
	})
})