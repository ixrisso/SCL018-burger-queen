/* import '../components.css'; */
import { Link } from "react-router-dom";
import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBurger,
  faHouse,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <header>
      Kinwa
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          
        </Link>
        <Link to="/Waiter">
          <FontAwesomeIcon icon={faBurger} />
          </Link>
        <Link to="/Kitchen">
          <FontAwesomeIcon icon={faUtensils} />
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
