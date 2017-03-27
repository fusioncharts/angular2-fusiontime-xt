import { FusiontimePage } from './app.po';

describe('fusiontime App', () => {
  let page: FusiontimePage;

  beforeEach(() => {
    page = new FusiontimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
