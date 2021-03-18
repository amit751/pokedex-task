import "../App.css";
import Search from "./Search.js";
import TypeList from "./TypeList.js";
import Header from "./Header.js";
import Image from "./Image.js";
import View from "./View.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <View />
      <TypeList pokemons={[]} />
    </div>
  );
}

export default App;
