Feature: Image compare

  Scenario: Viewport screenshot
    Given I open the heroes app
    Then I would like to compare the viewport of the "top heroes"

  Scenario: Element screenshot
    Given I open the heroes app
    When I select "Angie Jones"
    Then the detailpage of "Angie Jones" is shown
    And I would like to compare an element screenshot of "Angie Jones"

  Scenario: Fullpage screenshot
    Given I open the heroes app
    And I go to the Heroes list page
    Then I would like to compare a fullpage screenshot of the "Heroes List"
