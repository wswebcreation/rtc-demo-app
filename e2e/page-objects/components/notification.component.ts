import {$} from 'protractor';

const CONTAINER_SELECTOR = 'snack-bar-container';
const BUTTON_SELECTOR = `${CONTAINER_SELECTOR} button`;

export class NotificationComponent {
  /**
   * Accept the notification.
   * @return {Promise<void>}
   */
  public static get acceptNotification() {
    return $(BUTTON_SELECTOR).click();
  }
}
