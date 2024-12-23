import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useIsOnline();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-slate-200 shadow-2xl mb-8 h-36">
      <div className="logo-container">
        <Link to="/"><img className="w-36 h-36" src={LOGO_URL} alt="Scooter with vegetables" /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4"><Link to="/" className="links">Home</Link></li>
          <li className="px-4"><Link to="/grocery" className="links">Grocery Store</Link></li>
          <li className="px-4"><Link to="/cart" className="links">Cart</Link></li>
          <li className="px-4">Online Status: {isOnline ? "✅":"🔴"}</li>
          <li className="px-4"><Link to="/about" className="links">About Us</Link></li>
          <li className="px-4"><Link to="/contact" className="links">Contact Us</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;