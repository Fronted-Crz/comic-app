import { Link } from 'react-router-dom';

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row gy-5">
        <div className="col-md-4">
          <img
            className="card-img"
            src={`../../../public/assets/${id}.jpg`}
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>

            <p className="card-text">{alter_ego}</p>

            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/heroe/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
