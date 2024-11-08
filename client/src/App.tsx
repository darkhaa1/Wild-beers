import { useState } from "react";
import "./App.css";

import BeerContext from "./Contexts/BeerContext";
import { beersList } from "./components/Beers";
import BeersList from "./components/BeersList";

function App() {
	const [beerCount, setBeerCount] = useState(0);

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
					Voyagez dans le monde des brasseries écossaises
				</h2>
				<h3>Ma sélection : {beerCount} brasseries</h3>
				<div className="cardContainer">
					<BeerContext.Provider value={{ beerCount, setBeerCount }}>
						<BeersList beers={beersList} />
					</BeerContext.Provider>
				</div>
			</main>
			<footer>
				<p>Coordonées - 2024</p>
			</footer>
		</>
	);
}

export default App;
