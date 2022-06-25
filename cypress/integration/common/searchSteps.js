import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SearchPage } from '../pages/PageObjects/SearchPage'


const searchPage = new SearchPage()

When('I click into search area locations should be displayed', () => {
    searchPage.searchInput()
})

Then('I choose Stockholm from locations', () => {
    searchPage.selectStockholm()

})

And('I assert url page include Stockholm', () => {
    searchPage.assertStockholmPage()
})

And('I navigate back to Home page', () => {
    searchPage.navigateToHome()
})

Then('I enter stock into input area search and Select Stockwell IN', () => {
    searchPage.findStockwellInCity()

})

And('I sroll to the footer section and get Top Cities text', () => {
    searchPage.findTopCities()
}) 