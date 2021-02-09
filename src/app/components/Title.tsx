import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  theme?: 'dark' | 'light';
  text: string;
}

const TitleContainerStyled = styled.h1<{ theme: 'dark' | 'light' }>`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
`;

const Title: React.FC<TitleProps> = ({ theme = 'light', text }) => {
  return <TitleContainerStyled theme={theme}>{text}</TitleContainerStyled>;
};

export default Title;
