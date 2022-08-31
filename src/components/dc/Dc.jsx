import HeroList from '../heroes/HeroList';

const Dc = () => {
  return (
    <div className="container mt-2">
      <h1>DC Comics</h1>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </div>
  );
};

export default Dc;
