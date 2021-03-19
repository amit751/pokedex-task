import Image from "./Image";
export default function View({
  pokemon,
  callTypes,
  catching,
  release,
  isCatched,
}) {
  if (pokemon.height !== "Oops!") {
    return (
      <div>
        <ul className="data-list">
          <li>Name: {pokemon.name}</li>
          <li>Hieght: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          <li>
            Types:{" "}
            {pokemon.types.map((element, i) => {
              return (
                <span
                  key={i}
                  onClick={() => {
                    callTypes(element.type.name);
                  }}
                >
                  {element.type.name}{" "}
                </span>
              );
            })}
          </li>
        </ul>
        <Image
          sprites={pokemon.sprites}
          catching={catching}
          release={release}
          pokemon={pokemon}
          isCatched={isCatched}
        />
      </div>
    );
  } else {
    return (
      <div>
        <ul className="data-list">
          <li>Name: {pokemon.name}</li>
          <li>Hieght: {pokemon.height}</li>
          <li>Weight: {pokemon.weight}</li>
          <li>
            Types:{" "}
            {pokemon.types.map((element, i) => {
              return <span key={i}>{element.type.name} </span>;
            })}
          </li>
        </ul>
        <Image
          key={100}
          sprites={pokemon.sprites}
          catching={catching}
          release={release}
          pokemon={pokemon}
          isCatched={isCatched}
        />
      </div>
    );
  }
}
