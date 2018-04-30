@ng-apimock
Feature: Apimock - delay response

  Scenario: Show spinner
    Given I open the heroes app
    When I delay the heroes service
    And I go to the Heroes list page
    Then the spinner is shown
