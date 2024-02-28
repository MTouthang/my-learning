import { Link, Outlet } from 'react-router-dom';

const ProductLayout = () => {
  return (
    <>
      <p> Product menu </p>
      <nav>
        <Link to="/products/list"> -Product list- </Link>
        <Link to="/products/details"> -Product details- </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default ProductLayout;
