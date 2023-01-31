import { useState } from "react";
import "../components/MainBeerCard.css";
import ImageCard from "./ImageCard";

export default function MainBeerCard() {
  const handleClick = (e) => {
    console.log(e.target.className);
  };

  return (
    <div className="cards" onClick={handleClick}>
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
