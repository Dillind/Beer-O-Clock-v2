import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

import "../components/CountryDropdown.css";

// import ReactCountryFlag from "react-country-flag";

export default function CountryDropdown() {
  const [country, setCountry] = useState("selectCountry");

  const [australianbeerContentVisible, setAustralianBeerContentVisible] =
    useState(false);

  useEffect(() => {
    country === "australia"
      ? setAustralianBeerContentVisible(true)
      : setAustralianBeerContentVisible(false);
  });

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    country === "selectCountry"
      ? (result = "Get Started")
      : (result = makeFirstLetterCapital(country));
    return result;
  };

  return (
    <div className="dropdown-container">
      <h1 className="country-name">{renderResult()}</h1>
      <div className="form-container">
        <select className="form-select" value={country} onChange={handleChange}>
          <option value="selectCountry">Select your Country</option>
          <option value="australia">Australia</option>
        </select>
      </div>
      {australianbeerContentVisible && <BeerCard />}
    </div>
  );
}
