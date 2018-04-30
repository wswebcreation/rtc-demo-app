@ng-apimock
Feature: Apimock - interpolate variables

  Scenario: Show interpolated data
    Given I open the heroes app
    When I set variable "my-name" to "Your name"
    And I set variable "my-likes" to "10000"
    And I refresh the heroes app
    And "Your name" has 10000 likes
