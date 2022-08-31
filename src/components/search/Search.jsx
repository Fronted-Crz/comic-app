import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByName } from '../../services/getHeroByName';
import HeroCard from '../heroes/HeroCard';

// ?Probar con el useParams recperar el parametro de busqueda

function Search() {
  const [searchHeroName, setSearchHeroName] = useState({ heroName: '' });

  const { heroName } = searchHeroName;

  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;
  const heroSearch = search.slice(3);

  const filterHero = useMemo(() => getHeroByName(heroSearch), [heroSearch]);

  const handleChangeSearch = (event) => {
    const { name, value } = event.target;
    setSearchHeroName({
      ...searchHeroName,
      [name]: value,
    });
  };

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    location.search = `?q=${heroName}`;
    navigate(`?q=${heroName}`);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <h4>Busca tu Heroe Favorito</h4>
          <hr />
          <form onSubmit={handleSubmitSearch}>
            <label htmlFor="heroe">Buscar</label>
            <input
              id="heroe"
              className="form-control"
              type="text"
              placeholder="Busca tu heroe"
              name="heroName"
              value={heroName}
              onChange={handleChangeSearch}
            />
            <button
              className="btn mt-2 btn-outline-primary btn-block "
              type="submit"
            >
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4> Resultados </h4>
          <hr />
          {heroSearch === '' && (
            <div className="alert alert-info">No hay Busquedas de Heroes</div>
          )}

          {heroSearch !== '' && filterHero.length === 0 && (
            <div className="alert alert-danger">
              `{heroSearch} no encontrado`
            </div>
          )}
          {filterHero.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
