import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <p style={{ color: 'red', fontSize: '30px' }}>
        {error.status == '404' ? '404 Page Not Found' : ''}
      </p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <p>Home </p>
    </div>
  );
}
function Blog() {
  return (
    <div>
      <p>Blog page </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
