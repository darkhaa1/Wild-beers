import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useContext, useEffect, useState } from "react";
import BeerContext from "../Contexts/BeerContext";
import type { Brewery } from "../Contexts/BeerContext";
export default function Maps() {
  const { breweries} = useContext(BeerContext);

  const [, setValidLocations] = useState<Brewery[]>([]);

  useEffect(() => {
    const filteredBreweries = breweries.filter(
      (location) => location.latitude && location.longitude,
    );
    setValidLocations(filteredBreweries);
  }, [breweries]); 

  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {breweries.map((brewery) => (
        <Marker
          key={brewery.id}
          position={[brewery.latitude, brewery.longitude]}
        >
          <Popup>
            <b>{brewery.name}</b>
            <br />
            {brewery.city}
            <br />
            {brewery.state}
            <br />
            {brewery.country}
            <br />
            <a href={brewery.website_url}>visiter le site</a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
