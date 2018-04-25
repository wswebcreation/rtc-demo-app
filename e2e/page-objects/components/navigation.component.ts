import {$, ElementFinder} from 'protractor';
import {AutoCompleteComponent} from './autoComplete.component';

const SELECTORS = {
  HEROES_LIST: '#heroes-list',
  HOME: '#home',
  RTC: '#rtc',
};

export class NavigationComponent {
  /**
   * Get the heroes list button ElementFinder
   *
   * @return {ElementFinder}
   */
  public static get heroesListButton(): ElementFinder {
    return $(SELECTORS.HEROES_LIST);
  }

  /**
   * Get the home button ElementFinder
   *
   * @return {ElementFinder}
   */
  public static get homeButton(): ElementFinder {
    return $(SELECTORS.HOME);
  }

  /**
   * Get the RTC button ElementFinder
   *
   * @return {ElementFinder}
   */
  public static get rtcButton(): ElementFinder {
    return $(SELECTORS.RTC);
  }

  /**
   * Get the autocomplete component
   *
   * @return {AutoCompleteComponent}
   */
  public static get autoComplete(): AutoCompleteComponent {
    return new AutoCompleteComponent();
  }
}
