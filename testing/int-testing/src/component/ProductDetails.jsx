import React, { useEffect, useState } from 'react';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`/api/products/${productId}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [productId]);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
