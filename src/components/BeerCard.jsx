import { useState } from "react";
import "../components/BeerCard.css";
import ImageCard from "./ImageCard";

export default function BeerCard() {
  // const handleClick = (e) => {
  //   console.log(e.target.className);
  // };

  return (
    <div className="cards">
      <ul className="cards-items" id="one">
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
      <ul className="cards-items" id="two">
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
      <ul className="cards-items" id="three">
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
        <ImageCard src="" text="" label="Recommended" path="/" />
      </ul>
    </div>
  );
}
