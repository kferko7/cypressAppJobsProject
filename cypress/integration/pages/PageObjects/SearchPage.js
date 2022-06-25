import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class SearchPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

	searchInput() {
		cy.get("input[placeholder='Type your location']")
			.should('be.visible', {
				timeout: 5000,
			})
			.click()
	}

	selectStockholm() {
		cy.get('div[data-value="2"]')
			.should('have.text', ' Stockholm ')
			.click({ force: true })
	}

	assertStockholmPage() {
		cy.url().should('include', 'stockholm')
		cy.get('.city__name').contains('Stockholm').should('be.visible')
	}

	navigateToHome() {
		cy.go('back')
	}

	findStockwellInCity() {
		cy.get("input[placeholder='Type your location']")
			.should('be.visible', {
				timeout: 5000,
			})
			.type('Stock')
		cy.get('div:nth-of-type(8) > span')
			.should('have.text', ' Stockwell, IN ')
			.click()
	}

	findTopCities(){
		cy.get('div:nth-of-type(3) > .header').contains('Top Cities').should('be.visible')
	}
}
