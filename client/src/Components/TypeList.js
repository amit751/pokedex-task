import { component } from "react";
export default function TypeList({ pokemons }) {
  return (
    <ul>
      {pokemons.map((pokemon) => {
        return <li>{pokemon.name}</li>;
      })}
    </ul>
  );
}
