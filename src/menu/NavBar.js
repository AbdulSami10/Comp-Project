import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navbarLists}>
          <NavLink to={"/"} className={styles.navbarLink}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"} className={styles.navbarLink}>
            <li>About Us</li>
          </NavLink>
          <NavLink to={"/rules"} className={styles.navbarLink}>
            <li>Rules</li>
          </NavLink>

          {!localStorage.getItem("userInfo") ? (
            <NavLink to={"/login"} className={styles.navbarLink}>
              <LoginOutlined />
            </NavLink>
          ) : (
            <li className={styles.navbarLink} onClick={logout}>
              <LogoutOutlined />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
