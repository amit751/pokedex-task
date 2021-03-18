import Image from "./Image";
export default function View(props) {
  return (
    <div>
      <ul>
        <li>Name:</li>
        <li>Hieght:</li>
        <li>Weight:</li>
        <li>Types:</li>
      </ul>
      <Image />
    </div>
  );
}
