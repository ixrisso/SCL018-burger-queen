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
  /* const homeIcon = <FontAwesomeIcon icon={faHouse} />; */
  return (
    <div>
      <header>
      Kinwa
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          {/*  alt="home"
            className={styles.return} */}
        </Link>
        <Link to="/Waiter">
          <FontAwesomeIcon icon={faBurger} />
          {/*  alt="home"
            className={styles.return} */}
        </Link>
        <Link to="/Kitchen">
          <FontAwesomeIcon icon={faUtensils} />
          {/*  alt="kitchen"
            className={styles.kitchen} */}
        </Link>
      </header>
    </div>
  );
};

export default Navbar;
