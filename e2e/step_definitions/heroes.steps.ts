import {Given, When, Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../utils/chai-imports';
import {HeroesTopPage} from '../page-objects/heroes.top.page';
import {NavigationComponent} from '../page-objects/navigation.component';
import {HeroesDetailPage} from '../page-objects/heroes.details.page';

Given('I open the heroes app', openHeroesApp);
Given('{string} has {int} likes', checkLikes);
Given('hero number {int} has {int} likes', checkLikes);

When('I like {string}', likeHero);
When('I like hero number {int}', likeHero);
When('I want to type into the "Find hero" searchbox', () => NavigationComponent.autoComplete.input.click());
When('I type {string}', (string) => NavigationComponent.autoComplete.findHero(string));
When('I select {string}', (string) => NavigationComponent.autoComplete.selectHero(string));

Then('the amount of likes of {string} equals {int}', checkLikes);
Then('the amount of likes of hero number {int} equals {int}', checkLikes);
Then('the autocomplete contains {int} heroes', checkFoundOptions);
Then('the detailpage of {string} is shown', checkDetailPageShown);

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

/**
 * Check the amount of options in the autocomplete
 *
 * @param {number} amount
 *
 * @return {Promise<void>}
 */
async function checkFoundOptions(amount: number): Promise<void> {
  expect(await(NavigationComponent.autoComplete.amountOfOptions))
    .to.equal(amount, 'Amount of options');
}

/**
 * Check the detail page of a person is shown
 *
 * @param {string} person
 *
 * @return {Promise<void>}
 */
async function checkDetailPageShown(person: string): Promise<void> {
  expect(await(HeroesDetailPage.detail.allCards.count()))
    .to.equal(1, 'More or no cards found on the detail page.');
  expect(await(HeroesDetailPage.detail.card(1).header.title.getText()))
    .to.equal(person, 'Person not found');
}
