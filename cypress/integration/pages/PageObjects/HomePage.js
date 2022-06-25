import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

	assertLogo() {
		cy.get("div.logo-wrapper > a > svg").click()
		
	}

	assertH1Text() {
		cy.get('h1').contains('Flexible job offers tailored to you').should('be.visible')

	}
	
}