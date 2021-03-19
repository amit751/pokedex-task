import { useEffect, useState } from "react";
import Image from "./Image.js";
export default function CollectionDisplay({ collection, catching, release }) {
  return (
    <div className="collection">
      {collection.map((pokemon, i) => {
        return (
          <div key={"#" + i} className="pokemon-in-collection">
            <p>{pokemon.name}</p>
            <img className="collection-image" src={pokemon.sprites.front}></img>
          </div>
        );
      })}
    </div>
  );
}
