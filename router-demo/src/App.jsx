import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Home';
import About from './About';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import ProductLayout from './components/ProductLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/products" element={<ProductLayout />}>
              <Route path="list" element={<Products />} />
              <Route path="details" element={<ProductDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
