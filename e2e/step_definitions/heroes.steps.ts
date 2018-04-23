import {Given, When, Then} from 'cucumber';
import {browser} from 'protractor';
import {HeroesTopPage} from '../page-objects/heroes.top.page';
import {expect} from '../utils/chai-imports';

Given('I open the heroes app', openHeroesApp);
Given('{string} has {int} likes', checkLikes);
Given('hero number {int} has {int} likes', checkLikes);

When('I like {string}', likeHero);
When('I like hero number {int}', likeHero);

Then('the amount of likes of {string} equals {int}', checkLikes);
Then('the amount of likes of hero number {int} equals {int}', checkLikes);

/**
 * Like a hero based on his name or card number
 *
 * @returns {Promise<void>}
 */
async function openHeroesApp(): Promise<void> {
  await browser.get('#/');
}

/**
 * Like a hero based on his name or card number
 *
 * @param {string | number} selector
 *
 * @returns {Promise<void>}
 */
async function likeHero(selector: string | number): Promise<void> {
  await HeroesTopPage.overview.card(selector).header.likeButton.click();
}

/**
 * Check the likes based on a name or card number
 *
 * @param {string|number} selector
 * @param {number} amount
 *
 * @returns {Promise<void>}
 */
async function checkLikes(selector: string | number, amount: number): Promise<void> {
  expect(
    parseInt(await (HeroesTopPage.overview.card(selector).header.likes.getText()), 10)
  ).to.equal(amount, 'Amount of likes not equal:');
}
