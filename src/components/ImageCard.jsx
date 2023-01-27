import { useState } from "react";
import "../App.css";

import GreatNorthernSingle from "../images/great-northern/single-beer.png";
import FocusCard from "./FocusCard";

export default function ImageCard() {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Refresh prevented!");
  };

  return (
    // this is the image modal. once clicked, a pop-up will show and display a beer information card.
    // THIS WILL USE PROPS.
    <div className="cards-item">
      <form onSubmit={onSubmit}>
        <input
          type="image"
          src={GreatNorthernSingle}
          alt="Beer Image"
          className="modal-btn"
          onClick={() => setOpenModal(true)}
        />
        <FocusCard open={openModal} onClose={() => setOpenModal(false)} />
      </form>
    </div>
  );
}

// when modalBtn is clicked, the Modal screen appears and the modalBtn disappears. When the box outside is clicked, the modalbtn reappears again.
