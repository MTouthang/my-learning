import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import LoginForm from '../components/Form';

test('submits login form with user input', async () => {
  // Mock function to handle form submission
  const handleSubmit = jest.fn();

  // render the login form component
  render(<LoginForm onSubmit={handleSubmit} />);

  // Simulate user input - type username and password
  fireEvent.change(screen.getByPlaceholderText('Username'), {
    target: { value: 'john_doe' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });

  // Simulate form submission by clicking the "Login" button
  fireEvent.click(screen.getByText('Login'));

  // Wait for the form submission to complete
  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));

  // Assert that the handleSubmit function was called with the correct values
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'john_doe',
    password: 'password123',
  });

  // Assert that the handleSubmit function was called with the correct values
  expect(handleSubmit).toHaveBeenCalledWith({
    username: 'john_doe',
    password: 'password123',
  });
});
