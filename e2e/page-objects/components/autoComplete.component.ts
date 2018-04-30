import {$, $$, ElementArrayFinder, ElementFinder} from 'protractor';
import {isNumber} from 'lodash';

const SEARCH_BOX_SELECTOR = '#search-box';
const OPTIONS_SELECTOR = 'mat-option';

export class AutoCompleteComponent {
  /**
§   * Get the searchbox ElementFinder.
   * @return {ElementFinder}
   */
  public get input(): ElementFinder {
    return $(SEARCH_BOX_SELECTOR);
  }

  /**
   * Get the options ElementArrayFinder.
   * @return {ElementArrayFinder}
   */
  public get options(): ElementArrayFinder {
    return $$(OPTIONS_SELECTOR);
  }

  /**
   * Get the selected option ElementFinder.
   * @param {number | string} needle The occurrence, count form 0, or the name.
   * @return {ElementFinder}
   */
  public option(needle: number | string): ElementFinder {
    return isNumber(needle)
      ? this.options.get(needle - 1)
      : this.options.filter((elm) => elm.getText().then((text) => text.includes(needle))).first();
  }

  /**
   * Find a hero by entering the name of a hero.
   * @param {string} criteria The criteria.
   * @return {Promise<void>}
   */
  public async findHero(criteria): Promise<void> {
    await this.input.clear().sendKeys(criteria);
  }

  /**
   * Select a hero from the autocomplete.
   * @param {string} criteria The criteria.
   * @return {Promise<void>}
   */
  public async selectHero(criteria: string): Promise<void> {
    await this.findHero(criteria);
    await this.option(criteria).click();
  }
}
