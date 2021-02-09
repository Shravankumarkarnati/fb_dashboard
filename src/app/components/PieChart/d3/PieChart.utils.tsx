import React from 'react';
import './singleLegend.scss';

export interface PieChartD3Props {
  data: {
    name: string;
    value: number;
  }[];
  height?: number;
  width?: number;
  outerRadius?: number;
  innerRadius?: number;
  theme?: 'dark' | 'light';
  legend?: Boolean;
}

interface PieChartLegendSingleProps {
  color: string;
  shape: 'square' | 'triangle' | 'circle' | 'diamond';
  height: number;
  width: number;
  text: string;
}

const PieChartLegendSingle: React.FC<PieChartLegendSingleProps> = ({
  color,
  shape,
  height,
  width,
  text,
}) => {
  console.log(color, shape, height, width);
  return (
    <li className="singleLegend">
      <svg height={height} width={width} className="singleLegend-svg">
        <rect height={height} width={width} fill={color} />
      </svg>
      <p className="singleLegend-text">{text}</p>
    </li>
  );
};

export default PieChartLegendSingle;
