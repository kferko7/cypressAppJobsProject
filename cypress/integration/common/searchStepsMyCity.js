import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SearchPageMyCity } from '../pages/PageObjects/SearchPageMyCity'


const searchPageMyCity = new SearchPageMyCity()

And('I am on appJobs website', () => {
    searchPageMyCity.appJobsWeb()
})

When('I enter text Florence into search area location', () => {
    searchPageMyCity.searchInput()
    searchPageMyCity.searchMyNativeCity()
    searchPageMyCity.assertPageTitleFlorence() 

})

Then('I verify title of the page is Part-time / weekend / student app based jobs',() => {
    searchPageMyCity.assertPageTitleFlorence() 
})

And('I verify jobsInFlorence text should be displayed',() => {
    searchPageMyCity.verifyJobsInFlorence()
})