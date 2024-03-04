import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet /> {/* Child routes will render here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
}
export default Layout;
