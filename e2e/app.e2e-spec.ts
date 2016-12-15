import { WebDevCA1Page } from './app.po';

describe('web-dev-ca1 App', function() {
  let page: WebDevCA1Page;

  beforeEach(() => {
    page = new WebDevCA1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
