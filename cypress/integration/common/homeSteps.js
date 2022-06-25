import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { HomePage } from '../pages/PageObjects/HomePage'
//import * as LoginData from '../../fixtures/loginData.json'

const homePage = new HomePage()

//1.Positive Scwenario: Login with valid credentials into Login form
Given('I open website appJobs Page and accept cookies', () => {
	homePage.visit()
	homePage.acceptCookies()
	
		
})

When('I click on logo APPJOBS it should displayed', () => {
	homePage.assertLogo() 
})

Then('I verify h1 text Flexible job offers tailored to you is displayed', () => {
	homePage.assertH1Text()	

})