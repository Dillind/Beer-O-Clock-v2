import "./Main.css";

import Button from "./Button";

export default function Main() {
  return (
    <div className="main-container">
      <h1>WELCOME</h1>
      <p>
        Tired of drinking the same old beer? Looking for something new? <br />
        Well, you've come to the right place!
      </p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}
