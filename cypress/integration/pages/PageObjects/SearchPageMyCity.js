import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class SearchPageMyCity extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

    assertAppsJobTitle() {
        cy.title().should('eq', 'Part-time / weekend / student app based jobs - AppJobs')
    }
}