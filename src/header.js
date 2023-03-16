import "./App.css";
import Logo from "./assets/logo.svg";

function Header() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <img src={Logo} className="logo" height="38px" width="150px" />
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a className="NavBarMenuText marginTop10percent">About</a>
        <a className="NavBarMenuText">FAQ</a>
        <a className="NavBarMenuText">Contact</a>
      </div>
      <div className="btnParent displayFlex justifyContentCenter">
        <button className="signupBtn">Signup</button>
        <button className="loginBtn">Login</button>
      </div>
    </div>
  );
}

export default Header;
