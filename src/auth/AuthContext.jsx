import { createContext, useEffect, useReducer } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  useEffect(() => {
    // *Traemos del localStorage el user
    localStorage.setItem('user', JSON.stringify(state));

    // *Si el user ya esta logueado solo lo redireccionamos
    if (state?.name && pathname === '/logout') {
      navigate('/marvel');
    }
  }, [state, pathname]);

  const DATA = { state, dispatch };

  return <AuthContext.Provider value={DATA}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
