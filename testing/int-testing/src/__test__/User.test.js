/* eslint-disable testing-library/no-wait-for-multiple-assertions */
// User.test.js

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';

import User from '../component/User';
import fetchUserData from '../api';

// Mock the API function
jest.mock('../api');

test('renders user data after API call', async () => {
  // Mock API response data
  fetchUserData.mockResolvedValueOnce({
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  // Render the User component
  render(<User />);

  // Check if loading message appears
  expect(screen.getByText('Loading user data...')).toBeInTheDocument();

  // Wait for API call to resolve
  await waitFor(() => {
    // Check if user data is rendered
    expect(screen.getByText('ID: 1')).toBeInTheDocument();
    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: johndoe@example.com')).toBeInTheDocument();
  });
});
