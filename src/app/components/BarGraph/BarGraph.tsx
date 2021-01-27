import distinctColors from 'distinct-colors';
import React from 'react';
import OrdinalFrame from 'semiotic/lib/OrdinalFrame';
import groupDataPostMonth, { dataType } from './BarGraph.d3';
import './BarGraph.styles.scss';

interface BarGraphProps {}

const BarGraph: React.FC<BarGraphProps> = () => {
  const data = groupDataPostMonth();
  if (!data) return null;
  const BarGraphSize = [500, 500];
  const margin = 70;
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
    <div className="BarGraph-OF--toolTip">
      <p className="text-lg font-bold bg-red-500">{d.number}</p>
    </div>
  );

  return (
    <div className="BarGraph">
      <OrdinalFrame
        className="BarGraph-OF"
        size={BarGraphSize}
        margin={margin}
        projection="vertical"
        type="bar"
        data={data}
        oAccessor={ordinalValue}
        rAccessor={rangeValue}
        oLabel={(d: any) =>
          (<text className="BarGraph-OF--label">{d}</text>) as any
        }
        style={getColor}
        tooltipContent={toolTipFunction}
        pieceHoverAnnotation
        axes={{ orient: 'left' }}
      />
      <div className="BarGraph-summary">
        <p className="text-center">
          BarGraph: Distribution of Number of Posts Posted on the page per month
        </p>
      </div>
    </div>
  );
};

export default BarGraph;
