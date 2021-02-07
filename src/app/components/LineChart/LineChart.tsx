import React from 'react';
import XYFrame from 'semiotic/lib/XYFrame';
import groupDataPostMonth from '../BarGraph/BarGraph.d3';
import './LineChart.styles.scss';

interface LineChartProps {}

const LineChart: React.FC<LineChartProps> = () => {
  const data = groupDataPostMonth();
  if (!data) return null;
  const LineChartSize = [500, 500];
  const margin = 70;
  const lines = [
    { coordinates: data.map((cur, index) => [index, cur.number]) },
  ];
  return (
    <div className="LineChart">
      <XYFrame
        size={LineChartSize}
        margin={margin}
        lines={lines}
        xAccessor={(d: any) => d[0]}
        yAccessor={(d: any) => d[1]}
        lineStyle={{ stroke: '#d43d51', strokeWidth: 4 }}
        axes={[
          {
            orient: 'bottom',
            label: { name: 'Months', locationDistance: 55 },
            tickFormat: (e: any) => {
              return data[e].type;
            },
          },
          {
            orient: 'left',
            label: { name: 'Number of Posts', locationDistance: 55 },
            tickFormat: (e: any) => {
              return e;
            },
          },
        ]}
        showLinePoints
        pointStyle={{ r: 5, fill: '#5c70e6' }}
      />
    </div>
  );
};

export default LineChart;
