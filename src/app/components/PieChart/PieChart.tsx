import distinctColors from 'distinct-colors';
import React from 'react';
import OrdinalFrame from 'semiotic/lib/OrdinalFrame';
import groupData, { dataType } from './PieChart.d3';
import './PieChart.styles.scss';

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = () => {
  const data = groupData();
  if (!data) return <div />;
  const pieChartSize = [500, 500];
  const margin = 50;
  const ordinalValue = 'type';
  const rangeValue = 'number';

  const colorPallate = distinctColors({
    count: data.length,
    hueMin: 35,
    hueMax: 300,
    lightMin: 30,
    lightMax: 90,
    chromaMin: 40,
    chromaMax: 68,
  }).map((cur) => `rgba(${cur.rgba()})`);

  const getColor = (d: any, i: number) => {
    return { fill: colorPallate[i] };
  };

  const toolTipFunction = (d: dataType) => (
    <div className="PieChart-OF--toolTip">
      <p className="text-lg font-bold bg-red-500">{d.number}</p>
    </div>
  );

  return (
    <div className="PieChart">
      <OrdinalFrame
        className="PieChart-OF"
        size={pieChartSize}
        margin={margin}
        projection="radial"
        type="bar"
        data={data}
        dynamicColumnWidth={rangeValue}
        oAccessor={ordinalValue}
        oLabel
        style={getColor}
        tooltipContent={toolTipFunction}
        pieceHoverAnnotation
      />
      <div className="PieChart-summary">
        <p>PieChart: Distribution of Type of Post Posted on the page</p>
      </div>
    </div>
  );
};

export default PieChart;
