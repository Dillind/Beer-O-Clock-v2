import Github from "../img/footer-imgs/github-logo.png";
import Twitter from "../img/footer-imgs/twitter-logo.png";
import Website from "../img/footer-imgs/website-icon.png";
import LinkedIn from "../img/footer-imgs/linkedin-logo.png";

export default function Footer() {
  return (
    <div className="main--footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col">
            <a href="https://github.com/Dillind">
              <img src={Github} alt="Github Logo" className="footer--icons" />
            </a>
          </div>
          {/* Column 2 */}
          {/* <div className="col">
            <img src={Twitter} alt="Twitter Logo" className="footer--icons" />
          </div> */}
          {/* Column 3 */}
          <div className="col">
            <a href="https://www.linkedin.com/in/dylan-lindsay/">
              <img
                src={LinkedIn}
                alt="LinkedIn Logo"
                className="footer--icons"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()}{" "}
            <a href="https://dylan-lindsay.com">
              <u>dylan-lindsay.com</u>
            </a>{" "}
            | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
