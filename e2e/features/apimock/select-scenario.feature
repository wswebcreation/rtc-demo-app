@ng-apimock
Feature: Apimock - select a scenario

  Scenario: Show error state
    Given I open the heroes app
    When I take the heroes service offline
    And I go to the Heroes list page
    Then the error is shown
