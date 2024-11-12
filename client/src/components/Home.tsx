// import { useState } from "react";
import "../App.css";

// import BeerContext from "../Contexts/BeerContext";
// import { beersList } from "./Beers";
// import BeersList from "./BeersList";
import BreweriesList from "./BreweriesList";

function Home() {
  // const [beerCount, setBeerCount] = useState(0);

  return (
    <>
      <h2 className="titreMain">
        Voyagez dans le monde des brasseries écossaises
      </h2>
      {/* <h3>Ma sélection : {beerCount} brasseries</h3> */}
      <div className="cardContainer">
        <BreweriesList />
      </div>
    </>
  );
}

export default Home;
