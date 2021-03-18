import { component } from "react";
export default function TypeList({ pokemons, getPokemon }) {
  console.log("0000000", pokemons);
  return (
    <ul>
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
}
