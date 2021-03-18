import { useState } from "react";
export default function View({ sprites }) {
  const [image, setImage] = useState(sprites.front);
  return (
    <div>
      <img
        className="display-image"
        onMouseOver={() => setImage(sprites.back)}
        onMouseLeave={() => setImage(sprites.front)}
        src={image}
      ></img>
      <button>Catch</button>
    </div>
  );
}
