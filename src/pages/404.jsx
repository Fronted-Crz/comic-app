import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFount = () => {
  return (
    <div>
      <h1>Ese Heroe no esta en la lista de Heroes 😥</h1>
      <Link to={'/'}> Regresar a Home </Link>
    </div>
  );
};

export default PageNotFount;
