import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        {/* ... */}
      </nav>

      {/* Content */}
      <Outlet />

      {/* Footer */}
      <footer>
        {/* ... */}
      </footer>
    </div>
  );
}

export default Layout;