// import FocusCard from "./FocusCard";
import GreatNorthernSingle from "../images/great-northern/original/single-beer.png"
import "../components/FocusCard.css";

export default function FocusCard({ open, onClose, props }) {

  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container">
          {/* modal header */}
        <div className="top-card"> 

          <div className="closeBtn">
            <button onClick={onClose}>X</button>
          </div>
          <div className="beer-title">
            <h4>Great Northern</h4>
            <img
              src={GreatNorthernSingle}
              alt="Beer Image"
              className="beer-img"
            />
          </div>
          {/* Retail Images */}
        </div>
        {/* Bottle-Opener-Warning */}
        {/* modal body */}
        <h4 className="about-beer">About this product:</h4>
        <hr />
        <p className="beer-description">[Description]</p>
        <div className="card-info-container">
          <h4>Product Information</h4>
          <div className="card-stats">
            <ul>
              <li>
                <span>
                  <b>Type: </b>
                </span>
                <span>Type</span>
              </li>
              <hr />
              <li>
                <span>
                  <b>Size:</b>
                </span>
                <span>Size</span>
              </li>
              <hr />
              <li>
                <span>
                  <b>Standard Drinks:</b>
                </span>
                <span>standardDrinks</span>
              </li>
              <hr />
              <li>
                <span>
                  <b>Alcohol Volume:</b>
                </span>
                <span>Alcohol Vol.</span> 
              </li>
              <hr />
              <li>
                <span>
                  <b>Closure:</b>
                </span>
                <span>Closure</span>
              </li>
              <hr />
              <li>
                <span>
                  <b>Beer Style: </b>
                </span>
                <span>Beer Style</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
