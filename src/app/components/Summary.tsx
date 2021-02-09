import React from 'react';
import styled from 'styled-components';

interface SummaryProps {
  theme?: 'light' | 'dark';
  text: string;
}

const SummaryStyled = styled.p<{ theme: 'light' | 'dark' }>`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0rem;
  text-align: center;
  color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
`;

const Summary: React.FC<SummaryProps> = ({ theme = 'light', text }) => {
  return <SummaryStyled theme={theme}>{text}</SummaryStyled>;
};

export default Summary;
