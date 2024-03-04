import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  let auth = { token: true }; // for demonstration purposes
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
