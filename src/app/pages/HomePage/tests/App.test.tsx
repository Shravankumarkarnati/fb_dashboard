import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App Container Tests', () => {
  test('renders non empty App Container', () => {
    render(<App />);
    const AppContainer = screen.getByTestId('App');
    expect(AppContainer).not.toBeEmptyDOMElement();
  });
});
