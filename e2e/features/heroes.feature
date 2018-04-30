Feature: Basic setup

  @demo
  Scenario: Validate likes on name on top page
    Given I open the heroes app
    And "Wim Selles" has 9832 likes
    When I like "Wim Selles"
    Then the amount of likes of "Wim Selles" equals 9833

  Scenario: Validate likes on number on top page
    Given I open the heroes app
    And hero number 2 has 9721 likes
    When I like hero number 2
    Then the amount of likes of hero number 2 equals 9722

  Scenario: Validate amount of heroes on the list page
    Given I open the heroes app
    And I go to the Heroes list page
    Then I would see 30 listed heroes

  Scenario: Find a hero
    Given I open the heroes app
    When I want to type into the "Find hero" searchbox
    Then the autocomplete contains 30 heroes
    When I type "Mi"
    Then the autocomplete contains 2 heroes
    When I select "Mischa Dasberg"
    Then the detailpage of "Mischa Dasberg" is shown
