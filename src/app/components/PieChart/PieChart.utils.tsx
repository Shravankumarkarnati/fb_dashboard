import React from 'react';
import distinctColors from 'distinct-colors';

const data = [
  { user: 'Jason', tweets: 40, retweets: 5, favorites: 15 },
  { user: 'Susie', tweets: 5, retweets: 25, favorites: 100 },
];

const colorPallate = distinctColors({
  count: data.length,
}).map((cur) => `rgba(${cur.rgba()})`);

export const getColor = (d: any, i: number) => {
  return { fill: colorPallate[i] };
};

export const toolTipFunction = (d: typeof data[0]) => (
  <div className="PieChart-OF--toolTip">
    <p className="text-sm text-left text-white">{d.retweets}</p>
  </div>
);
