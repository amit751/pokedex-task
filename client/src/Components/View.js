import Image from "./Image";
export default function View({ pokemon, callTypes }) {
  return (
    <div>
      <ul>
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
      <Image sprites={pokemon.sprites} />
    </div>
  );
}
