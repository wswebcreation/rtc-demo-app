Feature: Basic setup

  Scenario: Validate likes on name
    Given I open the heroes app
    And "Wim Selles" has 9832 likes
    When I like "Wim Selles"
    Then the amount of likes of "Wim Selles" equals 9833

  Scenario: Validate likes on number
    Given I open the heroes app
    And hero number 2 has 9721 likes
    When I like hero number 2
    Then the amount of likes of hero number 2 equals 9722
