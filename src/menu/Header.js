import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "../styles/menu.module.css";
import NavBar from "../components/NavBar";
const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={styles.header}>
      <NavLink to={"/"}>
        <img src="./img/LOGO.png" alt="logo" className={styles.logo} />
      </NavLink>
      <NavBar />
    </div>
  );
};

export default Header;
