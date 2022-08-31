import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import useAuth from '../hooks/useAuth';

const ComicLayout = () => {
  const { state } = useAuth();
  const { pathname } = useLocation();

  // *Definimos la ultima ruta para luego acceder a ella e iniciar sesion en esa ruta entro del area privada, del user logeado.
  localStorage.setItem('lastPathname', pathname);

  return (
    <>
      {state?.name ? (
        <header>
          <Navbar />
          <Outlet />
        </header>
      ) : (
        <Navigate to="/logout" />
      )}
    </>
  );
};

export default ComicLayout;
