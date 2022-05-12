
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe("App", () => {
  const fakeAxios = {
    get: jest.fn(() => Promise.resolve({ data: {"id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","address":{"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874","geo":{"lat":"-37.3159","lng":"81.1496"}},"phone":"1-770-736-8031 x56442","website":"hildegard.org","company":{"name":"Romaguera-Crona","catchPhrase":"Multi-layered client-server neural-net","bs":"harness real-time e-markets"}} }))
  };

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });
  
  it("Should call localStorage User object on render", () => {
    render(<App />);
    expect(window.localStorage.getItem('user')).toBeDefined();
  });
  
  
});

test('renders Hello text', () => {
  render(<App />);
  const linkElement = screen.getByText('Hello');
  expect(linkElement).toBeInTheDocument();
});

