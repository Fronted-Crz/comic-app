import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { types } from '../../types/types';

export const Navbar = () => {
  const {
    state: { name },
    dispatch,
  } = useAuth();

  const navigate = useNavigate();

  const handleClickCloseSeion = () => {
    dispatch({
      type: types.logout,
    });
    navigate('/logout');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asosiaciones
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/marvel"
              >
                Marvel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dc">
                DC
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/search"
              >
                Busqueda
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">{name}</span>
            <button onClick={handleClickCloseSeion} className="navbar-text btn">
              Cerrar Sesion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
