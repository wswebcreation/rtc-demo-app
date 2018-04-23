import {$$, ElementArrayFinder, ElementFinder} from 'protractor';
import {isNumber} from 'lodash';

const CARD_SELECTOR = 'mat-card';
const HEADER_SELECTOR = `${CARD_SELECTOR} mat-card-header`;
const HEADER_TITLE_SELECTOR = `${HEADER_SELECTOR} mat-card-title`;
const HEADER_LIKE_BUTTON_SELECTOR = `${HEADER_SELECTOR} mat-icon`;
const HEADER_LIKES_TEXT_SELECTOR = `${HEADER_SELECTOR} .likes`;

export class CardComponent {
  constructor(private elementFinder: ElementFinder = null) {
  }

  /**
   * Get all the cards
   */
  public get allCards(): ElementArrayFinder {
    return $$(CARD_SELECTOR);
  }

  /**
   * Get the card componentobject for card that is found based on an occurrence or a name.
   *
   * @param {number | string} needle The occurrence, count form 0, or the name
   */
  public card(needle: number | string): CardComponent {
    let elementFinder;

    if (isNumber(needle)) {
      elementFinder = this.allCards.get(needle - 1);
    } else {
      elementFinder = this.allCards.filter((elm) => elm.getText().then((text) => text.includes(needle))).first();
    }

    return new CardComponent(elementFinder);
  }

  /**
   * Get the header component object
   */
  public get header(): HeaderComponent {
    return new HeaderComponent(this.elementFinder);
  }
}

class HeaderComponent {

  constructor(private elementFinder: ElementFinder) {
  }

  /**
   * Get the title Elementfinder
   */
  public get title(): ElementFinder {
    return this.elementFinder.$(HEADER_TITLE_SELECTOR);
  }

  /**
   * Get the likes Elementfinder
   */
  public get likes(): ElementFinder {
    return this.elementFinder.$(HEADER_LIKES_TEXT_SELECTOR);
  }

  /**
   * Get the likes button Elementfinder
   */
  public get likeButton(): ElementFinder {
    return this.elementFinder.$(HEADER_LIKE_BUTTON_SELECTOR);
  }
}
