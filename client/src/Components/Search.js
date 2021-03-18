import { component, useState } from "react";

export default function Search({ getPokemon }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="searc">
      <input
        name="input"
        type="text"
        className="input"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button
        className="search-button"
        onClick={() => {
          getPokemon(inputValue);
        }}
      >
        search pokemon
      </button>
    </div>
  );
}
