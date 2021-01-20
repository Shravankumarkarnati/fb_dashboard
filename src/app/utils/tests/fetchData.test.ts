import fetchData from '../fetchData';

describe('Fetch Gists and Get Data', () => {
  it('fetchs data without errors', async () => {
    const data = fetchData();
    expect(data).resolves.toBeTruthy();
  });
  it('fetchs non-empty metric and stock data', async () => {
    const { metricData, stockData } = await fetchData();
    expect(metricData.length).toBeGreaterThanOrEqual(1);
    expect(stockData.length).toBeGreaterThanOrEqual(1);
  });
});
