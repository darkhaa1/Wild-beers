// import { useState } from "react";

// export interface Beer {
//   id: number;
//   name: string;
//   brewery_type: string;
//   address: string;
//   city: string;
//   state_province: string;
//   postal_code: string;
//   country: string;
//   website_url: string;
//   state: string;
// }

// const breweries: Beer[] = [
//   {
//     id: 1,
//     name: "Bute Brew Co",
//     brewery_type: "closed",
//     address: "15-17 Columshill Street",
//     city: "Isle of Bute",
//     state_province: "Bute",
//     postal_code: "PA20 0DN",
//     country: "Scotland",
//     website_url: "http://butebrewco.co.uk/",
//     state: "Bute",
//   },
//   {
//     id: 2,
//     name: "Colonsay Ales",
//     brewery_type: "micro",
//     address: "Colonsay Brewery",
//     city: "Isle of Colonsay",
//     state_province: "Argyll",
//     postal_code: "PA61 7YZ",
//     country: "England",
//     website_url: "https://colonsaybrewery.co.uk/",
//     state: "Argyll",
//   },
//   {
//     id: 3,
//     name: "Fyne Ales",
//     brewery_type: "micro",
//     address: "Achadunan",
//     city: "Cairndow",
//     state_province: "Argyll",
//     postal_code: "PA26 8BJ",
//     country: "Poland",
//     website_url: "https://www.fyneales.com/",
//     state: "Argyll",
//   },
//   {
//     id: 4,
//     name: "Glen Luss Craft Brewery & Distillery",
//     brewery_type: "micro",
//     address: "Church Road",
//     city: "Alexandria",
//     state_province: "West Dunbartonshire",
//     postal_code: "G83 8NZ",
//     country: "Scotland",
//     website_url: "https://glenluss.co.uk/",
//     state: "West Dunbartonshire",
//   },
//   {
//     id: 5,
//     name: "Islay Ales",
//     brewery_type: "micro",
//     address: "Islay House Square",
//     city: "Isle of Islay",
//     state_province: "Argyll",
//     postal_code: "PA44 7NZ",
//     country: "Scotland",
//     website_url: "https://www.islayales.com/",
//     state: "Argyll",
//   },
// ];

// const countries = ["England", "Scotland", "Poland"];

// function App() {
//   const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
//   const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
//   const [selectedCities, setSelectedCities] = useState<string[]>([]);
//   const [filteredBreweries, setFilteredBreweries] = useState<Beer[]>(breweries);
//   const [filter, setFilter] = useState(false);

//   const handleCountryChange = (country: string) => {
//     const newSelectedCountries = selectedCountries.includes(country)
//       ? selectedCountries.filter((c) => c !== country)
//       : [...selectedCountries, country];
//     setSelectedCountries(newSelectedCountries);
//     setSelectedProvinces([]);
//     setSelectedCities([]);
//     filterBreweries(newSelectedCountries, [], []);
//   };

//   const handleProvincesChange = (province: string) => {
//     const newSelectedProvinces = selectedProvinces.includes(province)
//       ? selectedProvinces.filter((r) => r !== province)
//       : [...selectedProvinces, province];
//     setSelectedProvinces(newSelectedProvinces);
//     setSelectedCities([]);
//     filterBreweries(selectedCountries, newSelectedProvinces, []);
//   };

//   const handleCitiesChange = (city: string) => {
//     const newSelectedCities = selectedCities.includes(city)
//       ? selectedCities.filter((c) => c !== city)
//       : [...selectedCities, city];
//     setSelectedCities(newSelectedCities);
//     filterBreweries(selectedCountries, selectedProvinces, newSelectedCities);
//   };

//   const provinces = Array.from(
//     new Set(
//       breweries
//         .filter((brewery) => selectedCountries.includes(brewery.country))
//         .map((brewery) => brewery.state_province)
//     )
//   );

//   const cities = Array.from(
//     new Set(
//       breweries
//         .filter((brewery) => selectedProvinces.includes(brewery.state_province))
//         .map((brewery) => brewery.city)
//     )
//   );

//   const filterBreweries = (
//     countries: string[],
//     provinces: string[],
//     cities: string[]
//   ) => {
//     setFilteredBreweries(
//       breweries.filter(
//         (brewery) =>
//           (!countries.length || countries.includes(brewery.country)) &&
//           (!provinces.length || provinces.includes(brewery.state_province)) &&
//           (!cities.length || cities.includes(brewery.city))
//       )
//     );
//   };

//   return (
//     <>
//       <div>
//         <button type="button" onClick={() => setFilter((prev) => !prev)}>
//           Filtre
//         </button>
//         {filter && (
//           <div>
//             <h2>Filtrer par :</h2>

//             {countries.map((country) => (
//               <div key={country}>
//                 <input
//                   type="checkbox"
//                   id={country}
//                   checked={selectedCountries.includes(country)}
//                   onChange={() => handleCountryChange(country)}
//                 />
//                 <label htmlFor={country}>{country}</label>
//               </div>
//             ))}

//             {provinces.length > 0 && (
//               <>
//                 <h2>Select Regions</h2>
//                 {provinces.map((province) => (
//                   <div key={province}>
//                     <input
//                       type="checkbox"
//                       id={province}
//                       checked={selectedProvinces.includes(province)}
//                       onChange={() => handleProvincesChange(province)}
//                     />
//                     <label htmlFor={province}>{province}</label>
//                   </div>
//                 ))}
//               </>
//             )}

//             {cities.length > 0 && (
//               <>
//                 <h2>Select Cities</h2>
//                 {cities.map((city) => (
//                   <div key={city}>
//                     <input
//                       type="checkbox"
//                       id={city}
//                       checked={selectedCities.includes(city)}
//                       onChange={() => handleCitiesChange(city)}
//                     />
//                     <label htmlFor={city}>{city}</label>
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         )}

//         <ul>
//           {filteredBreweries.map((brewery) => (
//             <li key={brewery.id}>
//               {brewery.name} - {brewery.country}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// export default App;
