export class BasePage {

    acceptCookies() {
		cy.get('.-subtleDark').should('be.visible').click({force:true})
		//cy.get('.aj-button -small -subtleDark').contains('OK')
	
	}

	searchInput() {
		cy.get("input[placeholder='Type your location']")
			.should('be.visible', {
				timeout: 5000,
			})
			.click()
	}

}