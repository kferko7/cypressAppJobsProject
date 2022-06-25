Feature: JoinNowSteps

Background: Positive Access: I Navigate to appJobs and web is accessible
        Given I open website appJobs Page and accept cookies
        #When I click on logo APPJOBS it should displayed
        #Then I verify h1 text Flexible job offers tailored to you is displayed
        

Scenario: Click on Join Now Button 
    When I click into search area locations should be displayed
    Then  I choose Stockholm from locations
    And I assert url page include Stockholm
    And I navigate back to Home page
    Then I enter stock into input area search and Select Stockwell IN
    And I sroll to the footer section and get Top Cities text
    



