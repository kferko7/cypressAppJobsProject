Feature: HomePage

    Scenario: Positive Access: I Navigate to appJobs and web is accessible
        Given I open website appJobs Page and accept cookies
        When I click on logo APPJOBS it should displayed
        Then I verify h1 text Flexible job offers tailored to you is displayed
        
        