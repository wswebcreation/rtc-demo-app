import {When} from 'cucumber';
import {browser} from 'protractor';

interface NgApimock {
  delayResponse: (name: string, delay: number) => {};
  setGlobalVariable: (key: string, value: string | number) => {};
  selectScenario: (name: string, scenarioName: string) => {};
}
declare const ngApimock: NgApimock;

When('I delay the heroes service', delayHeroesServiceGetHeroes);
When('I set variable {string} to {string}', setVariable);
When('I take the heroes service offline', takeHeroesServiceGetHeroesOffline);

/**
 * Delay the heroes service response.
 * @returns {Promise<void>}
 */
async function delayHeroesServiceGetHeroes(): Promise<void | string> {
  await browser.waitForAngularEnabled(false);
  // IMPLEMENT THE DELAY, SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  await ngApimock.delayResponse('get all heroes', 3000);

  // return Promise.resolve('pending');
}

/**
 * Sets the variable.
 * @param {string} key The key.
 * @param {string} value The value.
 * @return {Promise<void>}
 */
async function setVariable(key: string, value: string): Promise<void | string> {
  // IMPLEMENT THE VARIABLES, SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  await ngApimock.setGlobalVariable(key, value);

  // return Promise.resolve('pending');
}

/**
 * Set the heroes service to be unreachable.
 * @returns {Promise<void>}
 */
async function takeHeroesServiceGetHeroesOffline(): Promise<void | string> {
  // IMPLEMENT THE DELAY, SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  await ngApimock.selectScenario('get all heroes', 'unreachable');

  // return Promise.resolve('pending');
}
