import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Products Home </h1>

      <Link to="products">Find your Products </Link>
    </div>
  );
}
