import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Axios } from 'axios';

// Import the component to be tested
import App from './App';

// Mock Axios for API calls
jest.mock('axios');

// Define mock data
const mockData = [
  { id: 1, title: 'Mock Title 1' },
  { id: 2, title: 'Mock Title 2' },
];

// Set up mock implementation for Axios
Axios.get.mockResolvedValue({ data: mockData });

describe('App component', () => {
  test('renders fetched data', async () => {
    // Render the component
    render(<App />);

    // Expect loading text to be present initially
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the data to be fetched
    await waitFor(() => {
      // Expect each item in the mock data to be rendered
      mockData.forEach((item) => {
        expect(screen.getByText(item.title)).toBeInTheDocument();
      });
    });

    // Ensure the loading text is not present after data is fetched
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  test('handles API call error', async () => {
    // Mock Axios to reject the promise with an error
    axios.get.mockRejectedValue(new Error('API error'));

    // Render the component
    render(<App />);

    // Expect error message to be logged in console
    console.error = jest.fn(); // Suppress console.error output
    await waitFor(() => expect(console.error).toHaveBeenCalled());

    // Expect error message to be displayed in the UI
    expect(screen.getByText('Error fetching data:')).toBeInTheDocument();
  });
});
