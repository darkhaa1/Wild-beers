import { useState } from "react";
import type { Beer } from "./Beers";

interface BeerCardProps {
  beer: Beer;
}

function BeerCard({ beer }: BeerCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const [beerCount, setBeerCount] = useState(0);

  function handleClickFavorite() {
    if (isFavorite) {
      setBeerCount((prevCount) => Math.max(prevCount - 1, 0));
    } else {
      setBeerCount((prevCount) => prevCount + 1);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <figure className="card">
        <h3>Nombre de favoris : {beerCount}</h3>
        <h3 className="nameBrasserie">{beer.name}</h3>
        <ul className="cardList">
          <li>Type de brassage: {beer.brewery_type}</li>
          <li>
            Adresse :{beer.address} {beer.city} {beer.postal_code} {beer.state}
          </li>
          <li>
            Site internet : <a href="{beer.website_url}">visiter le site </a>
          </li>
        </ul>
        <button type="button" onClick={handleClickFavorite}>
          {isFavorite ? "❤️" : "🖤"}
        </button>
      </figure>
    </>
  );
}

export default BeerCard;
