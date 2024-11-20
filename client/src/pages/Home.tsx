import "../components/home.css";

import BeerContext from "../Contexts/BeerContext";

import { useContext } from "react";
import BreweriesList from "../components/BreweriesList";
import Filter from "../components/Filter";
import BoutonSoif from "../components/boutonSoif";

function Home() {
  const { beerCount } = useContext(BeerContext);

  return (
    <>
      <div>
        <h2 className="titreMain">Voyagez dans le monde des brasseries</h2>
        <h3 className="maSelection">
          Ma sélection : {beerCount} brasseries 🍺
        </h3>
      </div>
      <BoutonSoif />
      <Filter />
      <div className="cardContainer">
        <BreweriesList />
      </div>
    </>
  );
}

export default Home;
