import { HomePage } from '../integration/pages/PageObjects/HomePage'

const homePage = new HomePage()

/*Cypress.Commands.add('loginData', function () {

	homePage.visit()
	homePage.signUploginButton()
	loginPage.fillUsername(username)
	loginPage.fillPassword(password)
	loginPage.loginButton()
})*/

Cypress.Commands.add('isVisible', selector => {
	homePage.visit()
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', selector => {
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1])
	} else {
		cy.viewport(size)
	}
})