import type { Beer } from "./Beers";

interface BeerCardProps {
  beer: Beer;
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <>
      <figure className="card">
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
      </figure>
    </>
  );
}

export default BeerCard;
