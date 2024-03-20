import React from 'react';

const PriceTag = ({ price }) => {
  // Implement logic to format the price (currency symbol, decimals, etc.)
  const amount = Number(price);
  const formattedPrice = `$${amount.toFixed(2)}`;
  return <p>Price: {formattedPrice}</p>;
};

export default PriceTag;
