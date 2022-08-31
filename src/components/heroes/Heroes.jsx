import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroesById } from '../../services/getHeroById';

const Heroes = () => {
  const { heroid } = useParams();

  //* Cuando los procesos sean pesados y las depedencias sean iguales se puede utilizar un use Memo que sirve para memorizar una variable en este caso es heroid.
  const hero = useMemo(() => getHeroesById(heroid), [heroid]);

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  const handleClickReturn = () => {
    if (navigate.length < 2) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft "
          src={`../../../public/assets/${heroid}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight ">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b> Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            {' '}
            <b> Characters: </b>
            {characters}
          </li>
          <li className="list-group-item">
            {' '}
            <b> Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            {' '}
            <b> First_appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5> Characters</h5>
        <p>{characters}</p>
        <button onClick={handleClickReturn} className="btn btn-outline-info">
          Regresar
        </button>
      </div>
    </div>
  );
};

export default Heroes;
