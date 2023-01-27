// import FocusCard from "./FocusCard";

import "../App.css";

export default function FocusCard({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal-container">
        <p onClick={onClose} className="closeBtn">
          X
        </p>
        <div className="content">
          <p>Do you want a</p>
          <h1>$20 CREDIT</h1>
          <p>for your first trade</p>
        </div>
      </div>
    </div>
  );
}
