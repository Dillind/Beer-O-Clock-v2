import "../../App.css";
// import BeerImageCards from "../BeerImageCards";
import CountryDropdown from "../CountryDropdown";
import MainBeerCard from "../MainBeerCard";

export default function FindBeer() {
  return (
    <div className="find-beer">
      {/* <h4>Choose your desired country!</h4> */}
      <MainBeerCard />
      {/* <CountryDropdown country="AU" /> AUSTRALIA
      <CountryDropdown country="US" /> AMERICA
      <CountryDropdown country="JP" /> JAPAN */}
    </div>
  );
}
