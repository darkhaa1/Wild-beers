import "./App.css";

import { Link, Outlet } from "react-router-dom";


// import BeerContext from "./Contexts/BeerContext";
// import BeersList from "./components/BeersList";
import BreweriesList from "./components/BreweriesList";


function App() {
  return (
    <>
      <header>
        <div className="h1-logo-container">
          <h1 className="titre">Wild beers </h1>
          <img
            className="logoImg"
            src="/src/assets/images/logo.png"
            alt="logo"
          />
        </div>
        <button type="button" className="burger-menu">
          ☰ Menu
        </button>

        <nav>
          <Link to="/"> Home </Link>
          <Link to="/mes-favoris"> Mes favoris </Link>
          <Link to="/notre-histoire"> Notre histoire </Link>
        </nav>
      </header>

      <main>

        <Outlet />

        <h2 className="titreMain">
          Voyagez dans le monde des brasseries écossaises
        </h2>
        <h3>Ma sélection : {beerCount} brasseries</h3>
        <div className="cardContainer">
          {/* <BeerContext.Provider value={{ beerCount, setBeerCount }}>
            <BeersList beers={beersList} />
          </BeerContext.Provider> */}
          <BreweriesList />
        </div>

      </main>
      <footer>
        <p>Coordonées - 2024</p>
      </footer>
    </>
  );
}

export default App;
