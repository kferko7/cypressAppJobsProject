export class BasePage {

    acceptCookies() {
		cy.get('.-subtleDark').should('be.visible').click({force:true})
		//cy.get('.aj-button -small -subtleDark').contains('OK')
	
	}

}