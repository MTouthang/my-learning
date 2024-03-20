import React from 'react';
import PriceTag from './PriceTag';

const ProductCard = ({ name, price }) => {
  return (
    <div>
      <h2>{name}</h2>
      <PriceTag price={price} />
    </div>
  );
};
export default ProductCard;
