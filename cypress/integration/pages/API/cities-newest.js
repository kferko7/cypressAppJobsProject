/// <reference types ="Cypress" />

describe('get api user tests', () => {
	
	it('get user Darth Vader', () => {
		cy.request({
			method: 'GET',
			url: ': https://www.appjobs.com/web-api/en/cities/newest'
			
		}).then((res) => {
			expect(res.status).to.eq(200)
			
			
		})
	})
})