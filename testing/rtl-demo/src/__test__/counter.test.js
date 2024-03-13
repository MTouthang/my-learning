import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('Renders Counter component with initial count and increments count on button click', () => {
  const initialCount = 10;
  render(<Counter initialCount={initialCount} />);

  // check if initial count is rendered
  const countElement = screen.getByText(`Count: ${initialCount}`);
  expect(countElement).toBeInTheDocument();

  // Find the increment button and simulate a click
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);

  // check if count is increment correctly
  const incrementedCountElement = screen.getByText(
    `Count: ${initialCount + 1}`
  );

  expect(incrementedCountElement).toBeInTheDocument();
});
