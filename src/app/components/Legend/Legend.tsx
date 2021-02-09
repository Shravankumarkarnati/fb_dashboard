import React from 'react';
import styled from 'styled-components';

interface LegendProps {
  labels: string[];
  colors: string[];
  height?: number;
  width?: number;
}

interface LegendContainerProps {
  horizontal: Boolean;
}

interface SingleLegendStyledProps {}

interface SingleLegendProps {
  color: string;
  shape?: 'square' | 'triangle' | 'circle' | 'diamond';
  height: number;
  width: number;
  text: string;
}

const LegendContainer = styled.ul<LegendContainerProps>`
  list-style: none;
  list-style-type: none;
  text-align: left;

  ${({ horizontal }) =>
    horizontal &&
    `
    display:flex;
    align-items:center;
    justify-content:center;
  `}
`;

const SingleLegendStyled = styled.li<SingleLegendStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  & svg {
    margin-right: 1rem;
  }

  & p {
    font-weight: bold;
  }
`;

const SingleLegend: React.FC<SingleLegendProps> = ({
  color,
  height,
  width,
  text,
}) => {
  return (
    <SingleLegendStyled>
      <svg height={height} width={width}>
        <rect height={height} width={width} fill={color} />
      </svg>
      <p>{text}</p>
    </SingleLegendStyled>
  );
};

const Legend: React.FC<LegendProps> = ({
  labels,
  colors,
  height = 10,
  width = 10,
}) => {
  return (
    <LegendContainer horizontal={false}>
      {labels.map((cur, index) => (
        <SingleLegend
          height={height}
          width={width}
          color={colors[index]}
          text={cur}
          key={cur}
        />
      ))}
    </LegendContainer>
  );
};

export default Legend;
