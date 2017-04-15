import { Ng2WeatherappPage } from './app.po';

describe('ng2-weatherapp App', () => {
  let page: Ng2WeatherappPage;

  beforeEach(() => {
    page = new Ng2WeatherappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
