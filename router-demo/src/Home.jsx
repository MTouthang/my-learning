import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
