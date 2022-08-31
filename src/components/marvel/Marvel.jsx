import HeroList from '../heroes/HeroList';

const Marvel = () => {
  return (
    <div className="container mt-2">
      <h1>Marvel Comics</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'} />
    </div>
  );
};

export default Marvel;
