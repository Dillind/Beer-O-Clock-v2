import ReactCountryFlag from "react-country-flag";

export default function CountryFlag(props) {
  return (
    <div>
      {/* IMPORTS COUNTRY FLAG */}
      <ReactCountryFlag
        countryCode={props.country}
        svg
        style={{
          width: "1em",
          height: "1em",
        }}
      />
    </div>
  );
}
