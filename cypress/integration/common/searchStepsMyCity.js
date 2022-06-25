import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SearchPageMyCity } from '../pages/PageObjects/SearchPageMyCity'


const searchPageMyCity = new SearchPageMyCity()

When('I am on appJobs website', () => {
    searchPageMyCity.appJobsWeb()
})

Then('I enter text Florence into search area location', () => {
    searchPageMyCity.searchInput()
    searchPageMyCity.searchMyNativeCity()
})

And('I click on Filters selecting Qa Testing on Modal',() => {
    searchPageMyCity.filtersQATesting()
})

And('I click Apply Filters button',() => {
    searchPageMyCity.applyFilters()
})

Then('I verify One item is displayed on Filters and url is qa-testing',() => {
    searchPageMyCity.filterItemsOne()
})