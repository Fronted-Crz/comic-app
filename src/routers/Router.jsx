import { Route, Routes } from 'react-router-dom';
import Dc from '../components/dc/Dc';
import Heroes from '../components/heroes/Heroes';
import Login from '../components/login/Login';
import Marvel from '../components/marvel/Marvel';
import Search from '../components/search/Search';

import ComicLayout from '../layouts/ComicLayout';

import PageNotFount from '../pages/404';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/logout">
          <Route index element={<Login />} />
        </Route>
        <Route path="/" element={<ComicLayout />}>
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/heroe/:heroid" element={<Heroes />} />
          <Route path="/dc" element={<Dc />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFount />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
