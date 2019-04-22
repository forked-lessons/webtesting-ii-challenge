import React from 'react';
import ReactDOM from 'react-dom';
import 'jest-dom/extend-expect';
import { render, fireEvent, cleanup } from 'react-testing-library';

import App from './App';

afterEach(cleanup);

describe('The Count', () => {
  describe('balls', () => {
    it('increments balls', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add ball/i);
      fireEvent.click(button);
      const selected = getByTestId('balls');
      expect(selected).toHaveTextContent(/Balls:1/i);
    });
    it('increments balls and resets', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add ball/i);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      const selected = getByTestId('balls');
      expect(selected).toHaveTextContent(/Balls:0/i);
    });
  });
  describe('strikes', () => {
    it('increments strikes', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add strike/i);
      fireEvent.click(button);
      const selected = getByTestId('strikes');
      expect(selected).toHaveTextContent(/strikes:1/i);
    });
    it('increments strikes and resets', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add strike/i);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      const selected = getByTestId('strikes');
      expect(selected).toHaveTextContent(/strikes:0/i);
    });
  });
  describe('Fouls', () => {
    it('increments fouls', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add foul/i);
      fireEvent.click(button);
      const selected = getByTestId('strikes');
      expect(selected).toHaveTextContent(/strikes:1/i);
    });
    it('increments fouls and stops at 2', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByText(/add foul/i);
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      const selected = getByTestId('strikes');
      expect(selected).toHaveTextContent(/strikes:2/i);
    });
  });
});
