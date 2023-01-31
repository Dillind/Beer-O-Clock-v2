// import FocusCard from "./FocusCard";
import GreatNorthernSingle from "../images/great-northern/single-beer.png";
import "../components/FocusCard.css";

export default function FocusCard({ open, onClose, props }) {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="content">
          <div className="top-card">
            <div className="beer-title">
              <h4>Great Northern</h4>
              <button onClick={onClose} className="closeBtn">
                X
              </button>
            </div>
            <img
              src={GreatNorthernSingle}
              alt="Beer Image"
              className="beer-img"
            />
            {/* Retail Images */}
          </div>
          {/* Bottle-Opener-Warning */}
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
    </div>
  );
}
