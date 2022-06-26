/// <reference types ="Cypress" />

describe('get api user tests', () => {
	
	it('get payload request url web-api/en/job', () => {
		cy.request({
			method: 'GET',
			url: 'https://www.appjobs.com/miami'
			
		}).then((res) => {
			expect(res.status).to.eq(200)
			expect(res.body.meta.pagination.limit).to.eq(20)
			
			
		})
	})
})