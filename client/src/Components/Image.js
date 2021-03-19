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

  return (
    <div>
      <img
        className="display-image"
        onMouseOver={() => setImage(sprites.back)}
        onMouseLeave={() => setImage(sprites.front)}
        src={image}
      ></img>

      <button
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
}
