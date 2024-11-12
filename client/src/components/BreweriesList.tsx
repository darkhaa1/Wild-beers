import { useEffect, useState } from "react";

interface Brewery {
  id: string;
  name: string;
}

const BreweriesList = () => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  useEffect(() => {
    getBreweries();
  }, []);

  const getBreweries = () => {
    fetch(
      "https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=200",
    )
      .then((response) => response.json())
      .then((data) => {
        setBreweries(data);
      });
  };

  return (
    <div>
      <h1>Liste des brasseries</h1>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>{brewery.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BreweriesList;
