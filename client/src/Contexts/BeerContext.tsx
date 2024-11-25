import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export interface Brewery {
  id: string;
  name: string;
  brewery_type: string;
  address: string;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  website_url: string;
  state: string;
  longitude: number;
  latitude: number;
}

interface BeerCountType {
  beerCount: number;
  setBeerCount: Dispatch<SetStateAction<number>>;
  favorites: string[];
  toggleFavorite: (breweryId: string) => void;
  setBreweries: Dispatch<SetStateAction<Brewery[]>>;
  breweries: Brewery[];
  filteredBreweries: Brewery[];
  setFilteredBreweries: Dispatch<SetStateAction<Brewery[]>>;
  applyFilter: (searchText: string) => void;
}

const defaultValue: BeerCountType = {
  beerCount: 0,
  setBeerCount: () => {},
  favorites: [],
  toggleFavorite: () => {},
  breweries: [],
  setBreweries: () => {},
  filteredBreweries: [],
  setFilteredBreweries: () => {},
  applyFilter: () => {},
};

const BeerContext = createContext<BeerCountType>(defaultValue);

export const BeerProvider = ({ children }: { children: React.ReactNode }) => {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [filteredBreweries, setFilteredBreweries] = useState<Brewery[]>([]);

  useEffect(() => {
    getBreweries();
  }, []);

  const getBreweries = () => {
    const urls = [
      "https://api.openbrewerydb.org/v1/breweries?by_country=england&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=austria&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=france&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=isle_of_man&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=ireland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=200",
      "https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=200",
    ];

    const fetchPromises = urls.map((url) => fetch(url));
    Promise.all(fetchPromises)
      .then((responses) =>
        Promise.all(responses.map((response) => response.json())),
      )
      .then((data) => {
        const breweries = data.flat();

        setBreweries(breweries);
      });
  };

  const [beerCount, setBeerCount] = useState<number>(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (breweryId: string) => {
    if (favorites.includes(breweryId)) {
      setFavorites(favorites.filter((id) => id !== breweryId));
      setBeerCount(beerCount - 1);
    } else {
      setFavorites([...favorites, breweryId]);
      setBeerCount(beerCount + 1);
    }
  };

  const applyFilter = (searchText: string) => {
    setFilteredBreweries((prevBreweries) =>
      prevBreweries.filter((brewery) =>
        brewery.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  };

  return (
    <BeerContext.Provider
      value={{
        beerCount,
        setBeerCount,
        favorites,
        toggleFavorite,
        breweries,
        setBreweries,
        filteredBreweries,
        setFilteredBreweries,
        applyFilter,
      }}
    >
      {children}
    </BeerContext.Provider>
  );
};

export default BeerContext;
