import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders Hi text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, I'm Dayeon Hwang./i);
  expect(linkElement).toBeInTheDocument();
});