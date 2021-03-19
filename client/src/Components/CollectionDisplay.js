import "../Style/CollectionDisplay.css";
export default function CollectionDisplay({ collection, catching, release }) {
  return (
    <div className="collection-container">
      <h2>My collection</h2>
      <div className="collection">
        {collection.map((pokemon, i) => {
          return (
            <div key={"#" + i} className="pokemon-in-collection">
              <p>{pokemon.name}</p>
              <img
                alt="Pokemon"
                className="collection-image"
                src={pokemon.sprites.front}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
