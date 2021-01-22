import React from 'react';
import OrdinalFrame from 'semiotic/lib/OrdinalFrame';
import { getColor, toolTipFunction } from './PieChart.utils';
import './PieChart.styles.scss';

interface PieChartProps {}

const data = [
  { user: 'Jason', tweets: 40, retweets: 5, favorites: 15 },
  { user: 'Susie', tweets: 5, retweets: 25, favorites: 100 },
];

const PieChart: React.FC<PieChartProps> = () => {
  return (
    <div className="PieChart">
      <div className="PieChart-title">Retweets</div>
      <OrdinalFrame
        className="PieChart-OF"
        size={[500, 500]}
        margin={50}
        projection="radial"
        type="bar"
        data={data}
        dynamicColumnWidth="retweets"
        oAccessor="user"
        oLabel
        style={getColor}
        tooltipContent={toolTipFunction}
        pieceHoverAnnotation
      />
    </div>
  );
};

export default PieChart;
