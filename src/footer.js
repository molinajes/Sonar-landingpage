import "./App.css";
import footerLogo from "./assets/footerLogo.svg";
import instagram from "./assets/instagram.svg";
import linkedIn from "./assets/linkedin.svg";
import inputcard from "./assets/inputCard.svg";

function Footer() {
  return (
    <div>
      <div className="displayFlex justifyContentSpaceAround responsive">
        <div className="footerLeft">
          <div className="footerLogo">
            <img src={footerLogo} />
          </div>
          <div className="footerSocialIcons">
            <img src={instagram} />
            <img src={linkedIn} />
          </div>
          <div className="footerOptText">
            <ul>
              <li>About</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footerRight">
          <div className="footerSignupTextField">
            <p className="footerSignupText">
              Sign up to join our pod and get early access to Sonar.
            </p>
          </div>
          <div className="email-form">
            <label for="email-input" className="footerLabel">
              Email
            </label>
            <div>
              <input
                type="email"
                id="email-input"
                placeholder="pods@getsonar.org"
                className="footerInput"
              />
              <button type="submit" className="footerButton">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite">
        <p>&copy; 2023 Get Sonar, Inc. all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
