import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import {
  HomeOutlined,
  InfoCircleOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import Button from "../UI/Button/Button";
import { Popconfirm, message } from "antd";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("home");
    message.open({
      type: "success",
      content: "Successfully Logout",
    });
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

          {/* {!localStorage.getItem("userInfo") ? (
            <NavLink to={"/login"} className={styles.navbarLink}>
              <li>
                Login
                <LoginOutlined className={styles.icon} />
              </li>
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
          )} */}

          {!localStorage.getItem("userInfo") ? (
            <NavLink to={"/login"} className={styles.navbarLink}>
              <Button className={styles.button}>Login</Button>
            </NavLink>
          ) : (
            <Popconfirm
              title="Logout"
              description="are sure you want to logout"
              onConfirm={logout}
            >
              <Button className={styles.button}>Logout</Button>
            </Popconfirm>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
