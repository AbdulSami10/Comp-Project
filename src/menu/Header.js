import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/header.module.css";
import NavBar from "../components/NavBar";
import { heading } from "../content";
const Header = () => {
  return (
    <div className={styles.main}>
      <NavLink to={"/"} className={styles.navbarLinkHead}>
        <img src="./img/LOGO.png" alt="logo" className={styles.logo} />
        <h3 className={styles.heading}>{heading}</h3>
      </NavLink>
      <NavBar />
    </div>
  );
};

export default Header;
