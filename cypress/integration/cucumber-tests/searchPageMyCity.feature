Feature: SearchPageMyCity

#This step is found on home feature
Background: Positive Access: I Navigate to appJobs and web is accessible
        Given I open website appJobs Page and accept cookies
               
#These steps are found in searchPageMycity and am using as Scenario
Scenario: Play with search input my location
    And I am on appJobs website
    When I enter text Florence into search area location
    Then I verify title of the page is Part-time / weekend / student app based jobs
    And I verify jobsInFlorence text should be displayed






