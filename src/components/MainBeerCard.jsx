import "../components/MainBeerCard.css";
import ImageCard from "./ImageCard";

export default function MainBeerCard() {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items-one">
            <ImageCard src="" text="" label="Recommended" path="/" />
            <ImageCard src="" text="" label="Recommended" path="/" />
            <ImageCard src="" text="" label="Recommended" path="/" />
          </ul>
          <ul className="cards-items-two">
            <ImageCard src="" text="" label="Recommended" path="/" />
            <ImageCard src="" text="" label="Recommended" path="/" />
            <ImageCard src="" text="" label="Recommended" path="/" />
          </ul>
        </div>
      </div>
    </div>
  );
}
