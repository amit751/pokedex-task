import { useEffect, useState } from "react";
export default function Image({
  sprites,
  catching,
  release,
  pokemon,
  isCatched,
}) {
  const [text, setText] = useState("Catch");
  useEffect(() => {
    setText(isCatched ? "Release" : "Catch");
  }, [isCatched]);
  const [image, setImage] = useState(sprites.front);
  useEffect(() => {
    setImage(sprites.front);
  }, [sprites]);

  if (pokemon.height !== "Oops!" && pokemon.name !== "initial") {
    return (
      <div>
        <img
          className="display-image"
          onMouseOver={() => setImage(sprites.back)}
          onMouseLeave={() => setImage(sprites.front)}
          src={image}
          alt="Pokemon"
        ></img>

        <button
          className="release-button"
          onClick={() => {
            if (isCatched) {
              release(pokemon);
            } else {
              catching(pokemon);
            }
          }}
        >
          {text}
        </button>
      </div>
    );
  } else if (pokemon.name === "initial") {
    return (
      <div>
        <img
          alt="Pokemon"
          className="display-image"
          onMouseOver={() => setImage(sprites.back)}
          onMouseLeave={() => setImage(sprites.front)}
          src={image}
        ></img>
      </div>
    );
  } else {
    return (
      <div>
        <img
          alt="Pokemon"
          className="display-image"
          onMouseOver={() => setImage(sprites.back)}
          onMouseLeave={() => setImage(sprites.front)}
          src={image}
        ></img>
        <p>{pokemon.name} is not a pokemon!!!!!!!</p>
      </div>
    );
  }
}
