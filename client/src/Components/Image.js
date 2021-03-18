import { useEffect, useState } from "react";
export default function Image({ sprites }) {
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
      <button>Catch</button>
    </div>
  );
}
// function Avatar(props) {
//     const [user, setUser] = React.useState({...props.user});

//     React.useEffect(() => {
//         setUser(props.user);
//     }, [props.user])

//     return user.avatar ?
//            (<img src={user.avatar}/>)
//           : (<p>Loading...</p>);
//   }
