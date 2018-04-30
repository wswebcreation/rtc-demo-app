import {Given, When, Then} from 'cucumber';
import {browser} from 'protractor';
import {argv} from 'yargs';
import {expect} from '../utils/chai-imports';
import {HeroesTopPage} from '../page-objects/heroes.top.page';
import {NavigationComponent} from '../page-objects/components/navigation.component';
import {HeroesDetailPage} from '../page-objects/heroes.details.page';
import {ListItemComponent} from '../page-objects/components/list.component';
import {removeAllStyle} from '../utils/utils';
import {NotificationComponent} from '../page-objects/components/notification.component';


Given('I open the heroes app', openHeroesApp);
Given('{string} has {int} likes', checkLikes);
Given('hero number {int} has {int} likes', checkLikes);
Given('I go to the Heroes list page', () => NavigationComponent.heroesListButton.click());

When('I like {string}', likeHero);
When('I like hero number {int}', likeHero);
When('I want to type into the "Find hero" searchbox', () => NavigationComponent.autoComplete.input.click());
When('I type {string}', (string) => NavigationComponent.autoComplete.findHero(string));
When('I select {string}', (string) => NavigationComponent.autoComplete.selectHero(string));

Then('the amount of likes of {string} equals {int}', demoCheckLikes);
Then('the amount of likes of hero number {int} equals {int}', checkLikes);
Then('the autocomplete contains {int} heroes', checkFoundOptions);
Then('the detailpage of {string} is shown', checkDetailPageShown);
Then(
  'I would see {int} listed heroes',
  async (amount: number) => expect(await(ListItemComponent.items.count())).to.equal(amount, 'Amount of list items found')
);

/**
 * Like a hero based on his name or card number
 *
 * @returns {Promise<void>}
 */
async function openHeroesApp(): Promise<void> {
  await browser.get('#/');
  if (argv.nocss) {
    await removeAllStyle();
  }
}

/**
 * Like a hero based on his name or card number
 *
 * @param {string | number} selector
 *
 * @returns {Promise<void>}
 */
export async function likeHero(selector: string | number): Promise<void> {
  await HeroesTopPage.overview.card(selector).header.likeButton.click();
  await browser.sleep(1000);
  await NotificationComponent.acceptNotification;
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
  expect(await(NavigationComponent.autoComplete.options.count()))
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

/**
 * Check likes for the demo
 *
 * @param {string|number} selector
 * @param {number} amount
 *
 * @returns {Promise<void>}
 */
async function demoCheckLikes(selector: string | number, amount: number) {
  await checkLikes(selector, amount);

  // For demo the green pipeline mistake
  if (argv.pic) {
    const compareResult = await browser.imageComparison.checkScreen('top_heroes');

    return expect(compareResult).to.equal(0);
  }
}
