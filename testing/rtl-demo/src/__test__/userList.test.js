import UserList from '../components/UserList';
import { render, waitFor, screen } from '@testing-library/react';

// Mock the API module
jest.mock('./__mocks__/api');

test('displays list of users', async () => {
  // Render the component
  render(<UserList />);

  // Wait for the component to fetch and display users
  await waitFor(() => {
    // Assert that the first user is displayed correctly
    expect(screen.getByText('1. Leanne Graham')).toBeInTheDocument();
  });

  // Wait for the component to fetch and display users again
  await waitFor(() => {
    // Assert that the second user is displayed correctly
    expect(screen.getByText('2. Ervin Howell')).toBeInTheDocument();
  });
});
