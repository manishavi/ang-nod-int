import { AngNodInitPage } from './app.po';

describe('ang-nod-init App', function() {
  let page: AngNodInitPage;

  beforeEach(() => {
    page = new AngNodInitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
