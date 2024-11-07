import "./App.css";
// import BeerCard from "./components/BeerCard";
import { beersList } from "./components/Beers";
import BeersList from "./components/BeersList";

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
      </header>
      <main>
        <h2 className="titreMain">
          Voyagez dans le monde des brasseries écossises
        </h2>
        <div className="cardContainer">
          {/* <p><BeerCard {beerCount}/>
       </p> */}
      <BeersList beers={beersList} />
        </div>
      </main>
      <footer>
        <p>Coordonées - 2024</p>
      </footer>
    </>
  );
}

export default App;
