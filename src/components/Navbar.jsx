import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

export default function Navbar(props) {
  // Handle Click Event
  // Action: When Beer icon is clicked, it changes to a full beer.
  // Purpose: To practice complex state objects w/ useState()

  // Toggle DarkMode Slider
  // Action: When clicked, the page will go from the "light mode" to a "dark mode"
  // Purpose: To practice useState, props and css styling.

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    setClick((prevClick) => !prevClick);
  }

  function closeMobileMenu() {
    setClick((prevClick) => !prevClick);
  }

  function showButton() {
    if (window.innerWidth <= 1020) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  // Prevents the Sign Up button from reappearing after each reload.
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    // <nav className={props.darkMode ? "dark" : ""}>
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          BEER -
          <i className="fa-regular fa-clock" /> - CLOCK
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/find-a-beer"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Find A Beer
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>
      </div>
    </div>
    // </nav>
  );
}
