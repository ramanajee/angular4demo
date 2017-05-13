import { Angular2cliDemoPage } from './app.po';

describe('angular2cli-demo App', () => {
  let page: Angular2cliDemoPage;

  beforeEach(() => {
    page = new Angular2cliDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
