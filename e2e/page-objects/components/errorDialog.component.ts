import {$, ElementFinder} from 'protractor';

const CONTAINER_SELECTOR = 'mat-dialog-container';
const APP_ERROR_SELECTOR = `${CONTAINER_SELECTOR} app-error`;
const MESSAGE_SELECTOR = `${APP_ERROR_SELECTOR} .mat-dialog-content`;

export class ErrorDialogComponent {
  /**
   * Get the message ElementFinder.
   * @return {ElementFinder}
   */
  public static get message(): ElementFinder {
    return $(MESSAGE_SELECTOR);
  }
}
