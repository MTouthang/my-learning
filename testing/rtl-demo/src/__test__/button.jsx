import Button from '../components/Button'; // Import the Button component to be tested
import { screen, render, fireEvent } from '@testing-library/react'; // Import necessary testing utilities

test('button calls onClick handler on click', () => {
  // Create a mock function to simulate onClick handler
  const handleClick = jest.fn();

  // Render the Button component with the mock onClick handler
  render(<Button onClick={handleClick}>Click Me</Button>);

  // Find the button element by its data-testid attribute
  const button = screen.getByTestId('my-button');
  // Simulate a click event on the button
  fireEvent.click(button);
  // Assert that the onClick handler has been called exactly once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
