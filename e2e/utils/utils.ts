import {browser} from 'protractor';
import * as webdriver from 'selenium-webdriver';

/**
 * INTERFACES
 */
export interface World {
  attach: ((arg1: string | Buffer, arg2: string) => void);
}

/**
 * METHODS
 */

/**
 * Upper case the first letter of a given string
 */
export function upperCaseFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert promise to a ES6 promise
 */
export function convertToES6Promise<T>(promise: webdriver.promise.Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => promise.then(resolve, reject));
}

/**
 * Disable the sticky header
 *
 * @return {Promise<void>}
 */
export function removeStickyHeader(): Promise<void> {
  const css = 'header {position: inherit !important} app-nav {padding-bottom: 0em !important}';
  return setCustomCSS(css);
}

/**
 * Set custom CSS
 * @param {string} customCss
 * @return {Promise<void>}
 */
async function setCustomCSS(customCss) {
  return convertToES6Promise(browser.driver.executeScript<void>(setCSS, customCss));

  function setCSS(css) {
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }
}

/**
 * Remove all style form the page
 *
 * @return {Promise<any>}
 */
export async function removeAllStyle() {
  return convertToES6Promise(
    browser.driver.executeScript(
      'document.querySelectorAll("style").forEach(elem => elem.parentNode.removeChild(elem))'
    )
  );
}

/**
 * Replace all spaces with an underscore
 *
 * @param {string} string
 *
 * @return {string}
 */
export function spaceToUnderscore(string: string): string {
  return string.replace(/\s+/g, '_');
}
