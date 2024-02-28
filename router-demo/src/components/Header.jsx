import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/products">Product</Link>
      </nav>
    </header>
  );
}
