import "./Main.css";

import Button from "./Button";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1>WELCOME</h1>
      <p>
        Tired of drinking the same old beer? Looking for something new? Well,
        you've come to the right place!
      </p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--" buttonSize="btn--large">
          GET STARTED
        </Button>
      </div>
    </main>
  );
}
