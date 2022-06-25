import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class SearchPageMyCity extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

    appJobsWeb() {
        cy.url().should('include', 'appjobs.com')
    }

    searchMyNativeCity() {
        cy.get('div[data-value="122"]').should('have.text', ' Florence ')
        .click()
      
    }

    assertPageTitleFlorence() {
        cy.title().should('eq', 'Part-time / weekend / student app based jobs')
    }

    verifyJobsInFlorence() {
        cy.get(':nth-child(3) > .breadcrumbs__link').should('be.visible')
    }

}