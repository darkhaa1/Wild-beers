import "./App.css";
// import BeerCard from "./components/BeerCard";
import { beersList } from "./components/Beers";
import BeersList from "./components/BeersList";

function App() {
  return (
    <div>
      {/* <p><BeerCard {beerCount}/>
       </p> */}
      <BeersList beers={beersList} />
    </div>
  );
}

export default App;
