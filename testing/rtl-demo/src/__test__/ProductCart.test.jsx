import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCart';

// Mock the PriceTag component
jest.mock('../components/PriceTag', () => ({ price }) => (
  <p>Price: ${price}</p>
));

describe('ProductCard', () => {
  it('renders with provided name and price', () => {
    const productName = 'Headphones';
    const productPrice = 9.99;

    render(<ProductCard name={productName} price={productPrice} />);

    // Assert that ProductCard renders product name
    expect(screen.getByText(productName)).toBeInTheDocument();

    // Assert that ProductCard renders product price
    expect(screen.getByText(`Price: $${productPrice}`)).toBeInTheDocument();
  });
});
