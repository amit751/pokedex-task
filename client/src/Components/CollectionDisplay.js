export default function CollectionDisplay({ collection, catching, release }) {
  return (
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
  );
}
