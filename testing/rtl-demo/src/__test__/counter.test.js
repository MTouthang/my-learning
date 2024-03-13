import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders with initial count of 0', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count:0');
  expect(countElement).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);

  const countElement = screen.getByText('Count:1');
  expect(countElement).toBeInTheDocument();
});
