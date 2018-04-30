import {$$, ElementArrayFinder, ElementFinder} from 'protractor';
import {isNumber} from 'lodash';

const LIST_ITEM_SELECTOR = 'mat-list-item';
const TITLE_SELECTOR = `${LIST_ITEM_SELECTOR} h3`;
const LIKE_BUTTON_SELECTOR = `${LIST_ITEM_SELECTOR} mat-icon`;
const LIKES_TEXT_SELECTOR = `${LIST_ITEM_SELECTOR} .likes`;

export class ListItemComponent {
  constructor(private elementFinder: ElementFinder = null) {
  }

  /**
   * Get all the list items.
   * @return {ElementArrayFinder}
   */
  public static get items(): ElementArrayFinder {
    return $$(LIST_ITEM_SELECTOR);
  }

  /**
   * Get the title ElementFinder.
   * @return {ElementFinder}
   */
  public get title(): ElementFinder {
    return this.elementFinder.$(TITLE_SELECTOR);
  }

  /**
   * Get the likes ElementFinder.
   * @return {ElementFinder}
   */
  public get likes(): ElementFinder {
    return this.elementFinder.$(LIKES_TEXT_SELECTOR);
  }

  /**
   * Get the likes button ElementFinder.
   * @return {ElementFinder}
   */
  public get likeButton(): ElementFinder {
    return this.elementFinder.$(LIKE_BUTTON_SELECTOR);
  }

  /**
   * Get the list item componentobject for a list item that is found based on an occurrence or a name.
   * @param {number | string} needle The occurrence, count form 0, or the name.
   * @return {ListItemComponent}
   */
  public static item(needle: number | string): ListItemComponent {
    const elementFinder = isNumber(needle)
      ? this.items.get(needle - 1)
      : this.items.filter((elm) => elm.getText().then((text) => text.includes(needle))).first();

    return new ListItemComponent(elementFinder);
  }
}
