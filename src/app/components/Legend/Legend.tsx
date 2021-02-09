import React from 'react';
import styled from 'styled-components';

interface LegendProps {
  labels: string[];
  colors: string[];
  height?: number;
  width?: number;
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
}

interface LegendContainerProps {
  horizontal: Boolean;
}

interface SingleLegendContainerProps {
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
}

interface SingleLegendProps {
  color: string;
  shape?: 'square' | 'triangle' | 'circle' | 'diamond';
  height: number;
  width: number;
  text: string;
  horizontal?: Boolean;
  theme?: 'dark' | 'light';
}

const LegendContainer = styled.ul<LegendContainerProps>`
  list-style: none;
  list-style-type: none;
  text-align: left;

  padding: 1rem 2rem;

  ${({ horizontal }) =>
    horizontal &&
    `
    display:flex;
    align-items:center;
    justify-content:center;

  `}
`;

const SingleLegendContainer = styled.li<SingleLegendContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-right: ${(props) => (props.horizontal ? '1rem' : '0rem')};

  & svg {
    margin-right: ${(props) => (props.horizontal ? '.2rem' : '1rem')};
  }

  & p {
    font-weight: 500;
    color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
  }
`;

const SingleLegend: React.FC<SingleLegendProps> = ({
  color,
  height,
  width,
  text,
  horizontal = false,
  theme = 'light',
}) => {
  return (
    <SingleLegendContainer horizontal={horizontal} theme={theme}>
      <svg height={height} width={width}>
        <rect height={height} width={width} fill={color} />
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
        />
      ))}
    </LegendContainer>
  );
};

export default Legend;
