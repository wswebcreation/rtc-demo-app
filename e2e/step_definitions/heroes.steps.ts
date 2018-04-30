import {Given, Then, When} from 'cucumber';
import {browser} from 'protractor';
import {argv} from 'yargs';
import {expect} from '../utils/chai-imports';
import {HeroesTopPage} from '../page-objects/heroes.top.page';
import {NavigationComponent} from '../page-objects/components/navigation.component';
import {HeroesDetailPage} from '../page-objects/heroes.details.page';
import {ListItemComponent} from '../page-objects/components/list.component';
import {removeAllStyle} from '../utils/utils';
import {NotificationComponent} from '../page-objects/components/notification.component';
import {ErrorDialogComponent} from '../page-objects/components/errorDialog.component';
import {SpinnerComponent} from '../page-objects/components/spinner.component';

Given('I open the heroes app', openHeroesApp);
Given('{string} has {int} likes', checkLikes);
Given('hero number {int} has {int} likes', checkLikes);
Given('I go to the Heroes list page', goToList);

When('I like {string}', likeHero);
When('I like hero number {int}', likeHero);
When('I want to type into the "Find hero" searchbox', focusSearchBox);
When('I refresh the heroes app', openHeroesApp);
When('I type {string}', typeInSearchbox);
When('I select {string}', selectInSearchbox);

Then('the amount of likes of {string} equals {int}', demoCheckLikes);
Then('the amount of likes of hero number {int} equals {int}', checkLikes);
Then('the autocomplete contains {int} heroes', checkFoundOptions);
Then('the detailpage of {string} is shown', checkDetailPageShown);
Then('I would see {int} listed heroes', checkNumberOfHeroes);
Then('the error is shown', checkError);
Then('the spinner is shown', checkSpinner);


/**
 * Check the detail page of a person is shown.
 * @param {string} person The person.
 * @return {Promise<void>}
 */
async function checkDetailPageShown(person: string): Promise<void> {
  expect(await(HeroesDetailPage.detail.allCards.count()))
    .to.equal(1, 'More or no cards found on the detail page.');
  expect(await(HeroesDetailPage.detail.card(1).header.title.getText()))
    .to.equal(person, 'Person not found');
}

/**
 * Check the error is shown.
 * @return {Promise<void>}
 */
async function openHeroesApp(): Promise<void> {
  await browser.get('#/');
  if (argv.nocss) {
    await removeAllStyle();
  }
}

/**
 * Check the likes based on a name or card number.
 * @param {string|number} selector The selector.
 * @param {number} amount The amount.
 * @returns {Promise<void>}
 */
async function checkLikes(selector: string | number, amount: number): Promise<void> {
  expect(parseInt(await (HeroesTopPage.overview.card(selector).header.likes.getText()), 10))
    .to.equal(amount, 'Amount of likes not equal:');
}

/**
 * Check the number of heroes.
 * @param {number} amount The amount.
 * @return {Promise<void>}
 */
async function checkNumberOfHeroes(amount: number): Promise<void> {
  expect(await(ListItemComponent.items.count()))
    .to.equal(amount, 'Amount of list items found');
}

async function checkSpinner(): Promise<void> {
  expect(await(SpinnerComponent.spinner.isPresent())).to.equal(true);
  await browser.waitForAngularEnabled(true);
}

/**
 * Check likes for the demo.
 * @param {string|number} selector The selector.
 * @param {number} amount The amount.
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

/**
 * Put focus on the search box.
 * @return {Promise<void>}
 */
async function focusSearchBox() {
  await NavigationComponent.autoComplete.input.click();
}

/**
 * Go the list page.
 * @return {Promise<void>}
 */
async function goToList(): Promise<void> {
  await NavigationComponent.heroesListButton.click();
}

/**
 * Like a hero based on his name or card number.
 * @param {string | number} selector The selector.
 * @returns {Promise<void>}
 */
export async function likeHero(selector: string | number): Promise<void> {
  await HeroesTopPage.overview.card(selector).header.likeButton.click();
  await browser.sleep(1000);
  await NotificationComponent.acceptNotification;
}

/**
 * Like a hero based on his name or card number.
 * @returns {Promise<void>}
 */
async function openHeroesApp(): Promise<void> {
  await browser.get('#/');
  if (argv.nocss) {
    await removeAllStyle();
  }
}

/**
 * Select a hero.
 * @param {string} criteria The criteria.
 * @return {Promise<void>}
 */
async function selectInSearchbox(criteria: string): Promise<void> {
  await NavigationComponent.autoComplete.selectHero(criteria);
}

/**
 * Find a hero.
 * @param {string} criteria The criteria.
 * @return {Promise<void>}
 */
async function typeInSearchbox(criteria: string): Promise<void> {
  await NavigationComponent.autoComplete.findHero(criteria);
}
