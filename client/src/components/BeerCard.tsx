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
      <figure>
        <h3>Nombre de favoris : {beerCount}</h3>
        <figcaption>{beer.name}</figcaption>
        <ul>
          <li>Type de brassage: {beer.brewery_type}</li>
          <li>
            Adresse : {beer.address} {beer.city} {beer.postal_code} {beer.state}
          </li>
          <li>Site internet : {beer.website_url}</li>
        </ul>
        <button type="button" onClick={handleClickFavorite}>
          {isFavorite ? "❤️" : "🖤"}
        </button>
      </figure>
    </>
  );
}

export default BeerCard;
