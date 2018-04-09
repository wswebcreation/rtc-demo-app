@ng-apimock
Feature: Apimock

  Scenario: Select a scenario
    Given I open the heroes app
    When I take the heroes service offline
    And I go to the Heroes list page
    Then the error is shown

  Scenario: Delay a response
    Given I open the heroes app
    When I delay the heroes service
    And I go to the Heroes list page
    Then the spinner is shown

  Scenario: Interpolate response data
    Given I open the heroes app
    When I set variable "my-name" to "Your name"
    And I set variable "my-likes" to "10000"
    And I refresh the heroes app
    And "Your name" has 10000 likes
