import {When} from 'cucumber';
import {browser} from 'protractor';
import {NgApimock} from '../utils/utils';

declare const ngApimock: NgApimock;

When('I delay the heroes service', delayHeroesServiceGetHeroes);
When('I set variable {string} to {string}', setVariable);
When('I take the heroes service offline', takeHeroesServiceGetHeroesOffline);
When('I use the actual the heroes services', useTheActualHeroesServices);

/**
 * Set the heroes service to be unreachable.
 * @returns {Promise<void>}
 */
async function takeHeroesServiceGetHeroesOffline(): Promise<void | string> {
  // WE HAVE ALREADY IMPLEMENTED THE SELECT SCENARIO FOR YOU AS AN EXAMPLE. FOR DOCUMENTATION OF NG-APIMOCK SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  // WE USE `await` IN FRONT OF THE COMMAND TO BE SURE THE PROMISE IS RESOLVED
  await ngApimock.selectScenario('get all heroes', 'unreachable');
}

/**
 * Delay the heroes service response.
 * @returns {Promise<void>}
 */
async function delayHeroesServiceGetHeroes(): Promise<void | string> {
  // THIS TAKES CARE OF PROTRACTOR WAITING FOR ANGULAR (ASYNC STUFF)
  await browser.waitForAngularEnabled(false);
  // IMPLEMENT THE DELAY, SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  // USE `await` IN FRONT OF THE COMMAND TO BE SURE THE PROMISE IS RESOLVED, SEE ABOVE EXAMPLE

  await ngApimock.delayResponse('get all heroes', 3000);
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
  // USE `await` IN FRONT OF THE COMMAND TO BE SURE THE PROMISE IS RESOLVED, SEE ABOVE EXAMPLE

  await ngApimock.setGlobalVariable(key, value);
}

/**
 * Set the heroes service to be unreachable.
 * @returns {Promise<void>}
 */
async function useTheActualHeroesServices(): Promise<void | string> {
  // IMPLEMENT THE ALL SCENARIOS TO PASSTHROUGH, SEE
  // https://github.com/mdasberg/ng-apimock#available-functions
  // USE `await` IN FRONT OF THE COMMAND TO BE SURE THE PROMISE IS RESOLVED, SEE ABOVE EXAMPLE

  await ngApimock.setAllScenariosToPassThrough();
}
