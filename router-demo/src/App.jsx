import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
