import { useState, useEffect } from "react";

export default function Search({ getPokemon }) {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);
  return (
    <div className="search">
      <input
        name="input"
        type="text"
        className="input"
        onChange={async (e) => {
          await setInputValue(e.target.value);
        }}
      ></input>
      <button
        className="search-button"
        onClick={async () => {
          await getPokemon(inputValue);
        }}
      >
        search pokemon
      </button>
    </div>
  );
}
