import {$, ElementFinder} from 'protractor';

const CONTAINER_SELECTOR = 'mat-progress-spinner';

export class SpinnerComponent {
  /**
   * Get the message ElementFinder.
   * @return {ElementFinder}
   */
  public static get spinner(): ElementFinder {
    return $(CONTAINER_SELECTOR);
  }
}
