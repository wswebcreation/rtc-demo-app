import {After, When} from 'cucumber';

When('I delay the heroes service', delayHeroesServiceGetHeroes);
When('I set variable {string} to {string}', setVariable);
When('I take the heroes service offline', takeHeroesServiceGetHeroesOffine);

/**
 * Delay the heroes service response.
 * @returns {Promise<void>}
 */
async function delayHeroesServiceGetHeroes(): Promise<void> {
  await browser.waitForAngularEnabled(false);
  await ngApimock.delayResponse('get all heroes', 3000);
}

/**
 * Sets the variable.
 * @param {string} key The key.
 * @param {string} value The value.
 * @return {Promise<void>}
 */
async function setVariable(key: string, value: string): Promise<void> {
  await ngApimock.setGlobalVariable(key, value);
}

/**
 * Set the heroes service to be unreachable.
 * @returns {Promise<void>}
 */
async function takeHeroesServiceGetHeroesOffine(): Promise<void> {
  await ngApimock.selectScenario('get all heroes', 'unreachable');
}

/**
 * Reset the state after the test!!!
 */
After(async () => {
  await ngApimock.setAllScenariosToDefault();
  await ngApimock.delayResponse('get all heroes', 0);
  await ngApimock.deleteGlobalVariable('my-name');
  await ngApimock.deleteGlobalVariable('my-likes');
});



