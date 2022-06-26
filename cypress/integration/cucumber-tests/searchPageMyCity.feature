Feature: SearchPageMyCity

#This step is found on home feature
Background: Positive Access: I Navigate to appJobs and web is accessible
        Given I open website appJobs Page and accept cookies
               
#These steps are found in searchPageMycity and am using as Scenario
Scenario: Play with search input my location
    When I am on appJobs website
    Then I enter text Florence into search area location
    And I click on Filters selecting Qa Testing on Modal
    And I click Apply Filters button
    Then I verify One item is displayed on Filters and url is qa-testing
    






