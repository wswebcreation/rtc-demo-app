import {HomePage} from "./home-page";

describe("Home page", function () {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });

  it("should contains heroes limit", () =>
    page.navigateTo().then(() =>
      expect(page.getNumberHeroes()).toBe(4)));
});
