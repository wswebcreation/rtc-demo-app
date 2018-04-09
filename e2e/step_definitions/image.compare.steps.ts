import {When, Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../utils/chai-imports';
import {HeroesDetailPage} from '../page-objects/heroes.details.page';
import {removeStickyHeader, spaceToUnderscore} from '../utils/utils';
import {likeHero} from './heroes.steps';

When('I like {string} {int} times', likeHeroMultipleTimes);

Then('I would like to compare the viewport of the {string}', checkScreen);
Then('I would like to compare an element screenshot of {string}', checkElement);
Then('I would like to compare a fullpage screenshot of the {string}', checkFullpage);
Then('I would like to compare an element screenshot of {string} with blockouts', checkElementWithBlockout);

/**
 * Like a hero multiple times
 *
 * @param {string} selector
 * @param {number} amount
 *
 * @returns {Promise<void>}
 */
async function likeHeroMultipleTimes(selector: string, amount: number): Promise<void> {
  for (let i = 0; i < amount; i++) {
    await likeHero(selector);
  }
}

/**
 * Compare the screen
 *
 * @param {string} string
 *
 * @returns {Promise<void | string>}
 */
async function checkScreen(string: string): Promise<void | string> {
  const tagName = spaceToUnderscore(string);
  await likeHero(1);

  // IMPLEMENT THE CHECK SCREEN COMPARE RESULT, SEE
  // https://github.com/wswebcreation/protractor-image-comparison/blob/master/docs/index.md#checkscreentag-options--promise
  const compareResult = 0;

  expect(compareResult).to.equal(0);

  return Promise.resolve('pending');
}

/**
 * Compare an element
 *
 * @param {string} string
 *
 * @returns {Promise<void | string>}
 */
async function checkElement(string: string): Promise<void | string> {
  const tagName = spaceToUnderscore(string);

  // IMPLEMENT THE CHECK ELEMENT COMPARE RESULT, SEE
  // https://github.com/wswebcreation/protractor-image-comparison/blob/master/docs/index.md#checkelementelement-tag-options--promise
  const compareResult = 0;

  expect(compareResult).to.equal(0);

  return Promise.resolve('pending');
}

/**
 * Compare a fullpage
 *
 * @param {string} string
 *
 * @returns {Promise<void | string>}
 */
async function checkFullpage(string: string): Promise<void | string> {
  const tagName = spaceToUnderscore(string);
  // First set the header to fixed
  await removeStickyHeader();

  // IMPLEMENT THE FULLPAGE COMPARE RESULT, SEE
  // https://github.com/wswebcreation/protractor-image-comparison/blob/master/docs/index.md#checkfullpagescreentag-options--promise
  const compareResult = 0;

  expect(compareResult).to.equal(0);

  return Promise.resolve('pending');
}

/**
 * Compare an element with blockout
 *
 * @param {string} string
 *
 * @returns {Promise<void | string>}
 */
async function checkElementWithBlockout(string: string): Promise<void | string> {
  const tagName = spaceToUnderscore(string);

  // IMPLEMENT THE ELEMENT COMPARE RESULT WITH BLOCKOUTS, SEE
  // https://github.com/wswebcreation/protractor-image-comparison/blob/master/docs/index.md#checkelementelement-tag-options--promise
  const compareResult = 0;

  expect(compareResult).to.equal(0);

  return Promise.resolve('pending');
}
