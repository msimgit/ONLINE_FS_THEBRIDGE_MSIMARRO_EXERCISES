import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../store/authSlice';


function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  
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