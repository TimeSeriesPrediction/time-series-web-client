import { TimeSeriesWebClientPage } from './app.po';

describe('time-series-web-client App', () => {
  let page: TimeSeriesWebClientPage;

  beforeEach(() => {
    page = new TimeSeriesWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
