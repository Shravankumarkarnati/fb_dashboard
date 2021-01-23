interface gistObject {
  gistId: string;
  separator: string;
  filename: string;
}

const parseCSVGist = (
  lines: string[],
  separator: string,
  headers: string[]
) => {
  const result = [];
  for (let i = 1; i < lines.length; i += 1) {
    const obj: any = {};
    const currentline = lines[i].split(separator);
    if (currentline[0].length) {
      for (let j = 0; j < headers.length; j += 1) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
  }
  return result;
};

const fetchGist = async ({ gistId, separator, filename }: gistObject) => {
  const gitHubAuth = `token ${process.env.REACT_APP_GITHUB_AUTH}`;
  try {
    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        Authorization: gitHubAuth,
      },
    });
    const stringData = await response.json();
    const extractedData = stringData.files[filename].content;
    const lines = extractedData.split('\n');
    const headers = lines[0].split(separator);
    return parseCSVGist(lines, separator, headers);
  } catch (err) {
    return err;
  }
};

const fetchData = async () => {
  const stockGist = {
    gistId: '49bccef59ce9ac7107a43a3c516be68d',
    separator: ',',
    filename: 'fb_stocks.txt',
  } as gistObject;
  const metricGist = {
    gistId: '264bcdb4149ea436a897326ab88cf521',
    separator: ';',
    filename: 'fb_metrics.txt',
  } as gistObject;

  const stockData = await fetchGist(stockGist);
  const metricData = await fetchGist(metricGist);
  return { stockData, metricData };
};

export default fetchData;
