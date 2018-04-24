import {Then} from 'cucumber';
import {browser} from 'protractor';
import {expect} from '../utils/chai-imports';
import {HeroesTopPage} from '../page-objects/heroes.top.page';

Then(
  'I would like to compare the viewport of the top heroes',
  async (): Promise<void> => {
    await HeroesTopPage.overview.card(1).header.likeButton.click();
    expect(await browser.imageComparison.checkScreen('top-heroes-overview')).to.equal(0);
  }
);

