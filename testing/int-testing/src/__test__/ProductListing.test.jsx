import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ProductListing from './ProductListing';
import { act } from '@testing-library/react'; // Needed for async operations

jest.mock('fetch'); // Mock fetch API

// Mock API responses
const mockProductsResponse = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

const mockProductDetailsResponse = {
  id: 1,
  name: 'Product 1',
  description: 'This is a great product!',
};

test('ProductListing renders product list and shows details on click', async () => {
  // Mock successful API calls
  fetch
    .mockImplementationOnce(() =>
      Promise.resolve(new Response(JSON.stringify(mockProductsResponse)))
    )
    .mockImplementationOnce(() =>
      Promise.resolve(new Response(JSON.stringify(mockProductDetailsResponse)))
    );

  // Render the component
  await act(() => render(<ProductListing />));

  // Assert products are displayed
  const productItems = screen.getAllByRole('button');
  expect(productItems.length).toBe(2);
  expect(productItems[0].textContent).toBe('Product 1');

  // Simulate click on first product
  fireEvent.click(productItems[0]);

  // Assert details component renders with product name
  const productDetails = await screen.findByText(
    mockProductDetailsResponse.name
  );
  expect(productDetails).toBeInTheDocument();
});
