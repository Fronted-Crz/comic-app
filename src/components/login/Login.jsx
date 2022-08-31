import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { types } from '../../types/types';

const Login = () => {
  const navigate = useNavigate();

  const { dispatch } = useAuth();

  // * Navegar a la ultima ruta co la que se cerro sesion.
  const lastPathname = localStorage.getItem('lastPathname');

  const handleClickLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Cruz',
      },
    });
    navigate(lastPathname);
  };
  return (
    <div className="container mt-5">
      <h1>Inicio de Sesion</h1>
      <hr />
      <button onClick={handleClickLogin} className="btn btn-primary">
        Iniciar Sesion
      </button>
    </div>
  );
};

export default Login;
