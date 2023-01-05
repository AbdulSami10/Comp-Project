import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../styles/header.module.css";
import NavBar from "../components/NavBar";
const Header = () => {
  return (
    <div className={styles.main}>
      <NavLink to={"/"}>
        <img src="./img/LOGO.png" alt="logo" className={styles.logo} />
      </NavLink>
      <NavBar />
    </div>
  );
};

export default Header;
