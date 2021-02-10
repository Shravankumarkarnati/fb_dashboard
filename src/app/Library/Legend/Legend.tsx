import React from 'react';
import { LegendContainer, SingleLegendContainer } from './Styled.utils';
import { LegendProps, SingleLegendProps } from './Types.utils';

const SingleLegend: React.FC<SingleLegendProps> = ({
  color,
  height,
  width,
  text,
  horizontal = false,
  theme = 'light',
  shape = 'square',
}) => {
  return (
    <SingleLegendContainer horizontal={horizontal} theme={theme}>
      <svg height={height} width={width}>
        {shape === 'square' && (
          <rect height={height} width={width} fill={color} />
        )}
        {shape === 'circle' && (
          <circle
            cx={Math.min(height, width) / 2}
            cy={Math.min(height, width) / 2}
            r={Math.min(height, width) / 2}
            fill={color}
          />
        )}
      </svg>
      <p>{text}</p>
    </SingleLegendContainer>
  );
};

const Legend: React.FC<LegendProps> = ({
  labels,
  colors,
  height = 10,
  width = 10,
  horizontal = false,
  theme = 'light',
  shape = 'square',
}) => {
  return (
    <LegendContainer horizontal={horizontal}>
      {labels.map((cur, index) => (
        <SingleLegend
          height={height}
          width={width}
          color={colors[index]}
          text={cur}
          key={cur}
          horizontal={horizontal}
          theme={theme}
          shape={shape}
        />
      ))}
    </LegendContainer>
  );
};

export default Legend;
