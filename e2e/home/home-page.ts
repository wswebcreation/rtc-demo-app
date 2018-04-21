import {browser, by, element, promise} from "protractor";

export class HomePage {

  navigateTo(): promise.Promise<any> {
    return browser.get("/");
  }

  getNumberHeroes(): promise.Promise<any> {
    return element.all(by.css("#heroes-list mat-card")).count();
  }
}
