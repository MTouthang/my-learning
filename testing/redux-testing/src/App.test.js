import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter component wrapped with Provider', () => {
  render(<App />);
  const counterElement = screen.getByText(/Counter/i);
  expect(counterElement).toBeInTheDocument();
});
