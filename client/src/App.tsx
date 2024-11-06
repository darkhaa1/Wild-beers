import "./App.css";
import { beersList } from "./components/Beers";
import BeersList from "./components/BeersList";

function App() {
  return (
    <div>
      <BeersList beers={beersList} />
    </div>
  );
}

export default App;
