import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';


test('renders login prompt', () => {
  const { getByPlaceholderText} = render(<App />);
  expect(getByPlaceholderText("Enter your name")).toBeInTheDocument();
});
