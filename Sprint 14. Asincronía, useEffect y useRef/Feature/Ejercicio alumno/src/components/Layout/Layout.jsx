import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">
        {/* Aquí el router inyecta la página que corresponda a la URL */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;