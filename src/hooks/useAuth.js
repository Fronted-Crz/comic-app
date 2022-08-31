import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth need of the AuthProvider');
  return context;
};
export default useAuth;
