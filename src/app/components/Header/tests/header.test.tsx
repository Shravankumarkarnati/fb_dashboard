import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';

describe('Header Tests', () => {
  beforeEach(() => {
    render(<Header />);
  });
  it('Header Renders and Is Not Empty', () => {
    expect.assertions(1);
    const HeaderContainer = screen.getByTestId('Header');
    expect(HeaderContainer).not.toBeEmptyDOMElement();
  });

  it('Header Text : Facebook Dashboard', () => {
    expect.assertions(1);
    const HeaderContainer = screen.getByTestId('Header');
    expect(HeaderContainer).toHaveTextContent('Facebook Dashboard');
  });
});
