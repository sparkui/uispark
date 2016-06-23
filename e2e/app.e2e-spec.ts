import { UisparkPage } from './app.po';

describe('uispark App', function() {
  let page: UisparkPage;

  beforeEach(() => {
    page = new UisparkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
