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
    
    filtersQATesting() {
        cy.get('.toolbar__filtersButton').click()
        cy.get("div[value='102'] h6[class='aj-text aj-pill__title -bold -bodySmall").click()
    }

    applyFilters() {
        cy.get('.-confirm').click()
    }

    filterItemsOne() {
        cy.get('.-subtleLight.aj-button.toolbar__filtersButton').should('have.length', 1)
        cy.url().should('include', 'qa-testing')
    }

}