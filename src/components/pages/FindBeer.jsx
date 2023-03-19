import { useState } from "react";
import "../../App.css";
// import BeerImageCards from "../BeerImageCards";
import CountryDropdown from "../CountryDropdown";
import BeerCard from "../BeerCard";

export default function FindBeer() {
  return (
    <div className="find-beer">
      <h1>Choose your desired country!</h1>
      {<CountryDropdown country="AU" />}
    </div>
  );
}
