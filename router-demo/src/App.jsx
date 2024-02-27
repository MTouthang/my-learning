import {
  Link,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Home from './Home';
import About from './About';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

// define routes
const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
