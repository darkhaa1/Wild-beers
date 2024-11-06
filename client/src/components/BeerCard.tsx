import type { Beer } from "./Beers";

interface BeerCardProps {
  beer: Beer;
}

function BeerCard({ beer }: BeerCardProps) {
  return (
    <>
      <figure>
        <figcaption>{beer.name}</figcaption>
        <ul>
          <li>Type de brassage: {beer.brewery_type}</li>
          <li>
            Adresse : {beer.address} {beer.city} {beer.postal_code} {beer.state}
          </li>
          <li>Site internet : {beer.website_url}</li>
        </ul>
      </figure>
    </>
  );
}

export default BeerCard;
