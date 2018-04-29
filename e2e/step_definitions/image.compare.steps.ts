import {When, Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../utils/chai-imports';
import {HeroesDetailPage} from '../page-objects/heroes.details.page';
import {removeStickyHeader, spaceToUnderscore} from '../utils/utils';
import {likeHero} from './heroes.steps';

When('I like {string} {int} times', likeHeroMultipleTimes);

Then(
  'I would like to compare the viewport of the {string}',
  async (string: string): Promise<void> => {
    const tagName = spaceToUnderscore(string);
    await likeHero(1);
    const compareResult = await browser.imageComparison.checkScreen(tagName);

    expect(compareResult).to.equal(0);
  }
);

Then(
  'I would like to compare an element screenshot of {string}',
  async (string: string): Promise<void> => {
    const tagName = spaceToUnderscore(string);
    const compareResult = await browser.imageComparison.checkElement(HeroesDetailPage.detail.card(string).element, tagName);

    expect(compareResult).to.equal(0);
  }
);

Then(
  'I would like to compare a fullpage screenshot of the {string}',
  async (string: string): Promise<void> => {
    const tagName = spaceToUnderscore(string);
    // First set the header to fixed
    await removeStickyHeader();

    const compareResult = await browser.imageComparison.checkFullPageScreen(tagName);

    expect(compareResult).to.equal(0);
  }
);

Then(
  'I would like to compare an element screenshot of {string} with blockouts',
  async (string: string): Promise<void> => {
    const tagName = spaceToUnderscore(string);
    const compareResult = await browser.imageComparison.checkElement(
      HeroesDetailPage.detail.card(string).element,
      tagName,
      {blockOut: [{x: 400, y: 40, width: 40, height: 15}]}
    );

    expect(compareResult).to.equal(0);
  }
);

/**
 * Like a hero multiple times
 *
 * @param {string} selector
 * @param {number} amount
 *
 * @returns {Promise<void>}
 */
async function likeHeroMultipleTimes(selector: string ,  amount: number): Promise<void>{
  for (let i = 0; i < amount ; i++) {
    await likeHero(selector);
  }
}

