import "../Style/TypeList.css";
export default function TypeList({ pokemons, getPokemon }) {
  try {
    return (
      <ul className="type-list">
        {pokemons.map((pokemon, index) => {
          return (
            <li
              onClick={() => {
                getPokemon(pokemon.pokemon.name);
              }}
              key={index}
            >
              {pokemon.pokemon.name}
            </li>
          );
        })}
      </ul>
    );
  } catch (e) {
    return <div>{pokemons}</div>;
  }
}
