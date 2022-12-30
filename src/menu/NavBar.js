import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./menu.module.css";
import {
  LoginOutlined,
  LogoutOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";

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
            <li>
              Home
              <HomeOutlined className={styles.icon} />
            </li>
          </NavLink>
          <NavLink to={"/about"} className={styles.navbarLink}>
            <li>
              About Us <InfoCircleOutlined className={styles.icon} />
            </li>
          </NavLink>
          <NavLink to={"/rules"} className={styles.navbarLink}>
            <li>
              Rules
              <DatabaseOutlined className={styles.icon} />
            </li>
          </NavLink>

          {!localStorage.getItem("userInfo") ? (
            <NavLink to={"/login"} className={styles.navbarLink}>
              Login
              <LoginOutlined className={styles.icon} />
            </NavLink>
          ) : (
            <li
              className={styles.navbarLink}
              style={{ cursor: "pointer" }}
              onClick={logout}
            >
              Logout
              <LogoutOutlined className={styles.icon} />
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
