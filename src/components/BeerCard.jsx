import { useState } from "react";
import "../components/BeerCard.css";
import ImageCard from "./ImageCard";

export default function BeerCard() {
  // const handleClick = (e) => {
  //   console.log(e.target.className);
  // };

    // to then pass down the props.
  function fetchBeerData() {

  }




  return (
    <div className="cards">
      <ul className="cards-items" id="cards-items-one">
        {/* src, text, label and path for props} */}
        <ImageCard src="" text="" label="Recommended" path="/" /> 
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
      <ul className="cards-items" id="cards-items-two">
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
      <ul className="cards-items" id="cards-items-three">
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
    </div>
  );
}
