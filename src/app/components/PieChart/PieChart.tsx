import React from 'react';
import OrdinalFrame from 'semiotic/lib/OrdinalFrame';
import distinctColors from 'distinct-colors';
import './PieChart.styles.scss';

interface PieChartProps {}

const data = [
  { user: 'Jason', tweets: 40, retweets: 5, favorites: 15 },
  { user: 'Susie', tweets: 5, retweets: 25, favorites: 100 },
];
const colorPallate = distinctColors({
  count: data.length,
}).map((cur) => `rgba(${cur.rgba()})`);

const getColor = (d: any, i: number) => {
  return { fill: colorPallate[i] };
};

const PieChartTitle = () => {
  return <text className="PieChart-OF--title">Retweets</text>;
};

const PieChart: React.FC<PieChartProps> = () => {
  return (
    <div className="PieChart">
      <OrdinalFrame
        className="PieChart-OF"
        size={[500, 500]}
        margin={50}
        projection="radial"
        type="bar"
        data={data}
        dynamicColumnWidth="retweets"
        oAccessor="user"
        title={PieChartTitle()}
        oLabel
        style={getColor}
      />
    </div>
  );
};

export default PieChart;
