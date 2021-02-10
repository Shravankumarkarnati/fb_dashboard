import styled from 'styled-components';
import {
  LegendContainerProps,
  SingleLegendContainerProps,
} from './Types.utils';

export const LegendContainer = styled.ul<LegendContainerProps>`
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

export const SingleLegendContainer = styled.li<SingleLegendContainerProps>`
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
