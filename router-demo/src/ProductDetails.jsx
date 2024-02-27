import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details - {productId}</h2>
    </div>
  );
}

export default ProductDetails;
