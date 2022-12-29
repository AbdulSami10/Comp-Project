import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import App from "../App";
import styles from "./menu.module.css";
import NavBar from "./NavBar";
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
