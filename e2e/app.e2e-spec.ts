import { MdesignPage } from './app.po';

describe('mdesign App', function() {
  let page: MdesignPage;

  beforeEach(() => {
    page = new MdesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
