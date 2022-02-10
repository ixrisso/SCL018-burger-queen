/* import '../components.css'; */
import { Link } from "react-router-dom";
import styles from "../styles/waiter.module.css";
import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Fragment>
       <Link to="/">
       <img className="header_logo" src= {logo} alt="page logo" /></Link>
      </Fragment>
      <header className={styles.logo}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <Link to="/">
          <img
            src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/000000/external-web-homepage-button-to-redirects-at-main-page-basic-tritone-tal-revivo.png"
            alt="home"
            className={styles.return}
          />
        </Link>
        <Link to="/kitchen">
          <img
            src="https://img.icons8.com/fluency/48/000000/frying-pan.png"
            alt="kitchen"
            className={styles.kitchen}
          />
        </Link>
      </header>
        </div>
        
    )
}

export default Navbar
