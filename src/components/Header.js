import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} alt="Scooter with vegetables" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/" className="links">Home</Link></li>
          <li><Link to="/about" className="links">About Us</Link></li>
          <li><Link to="/contact" className="links">Contact Us</Link></li>
          <li><Link to="/cart" className="links">Cart</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
