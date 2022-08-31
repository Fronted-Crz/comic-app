import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/AuthContext';
import ComicHero from './ComicHero';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ComicHero />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
