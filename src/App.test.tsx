
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('check if user exists before app renders', () => {
  render(<App />);
  const userObj = localStorage.getItem('user') 
  console.log(userObj)
  expect(userObj).toBeValid();
});
