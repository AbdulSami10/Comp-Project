import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";
import { AccountSection } from "./";
import styles from "../styles/navbar.module.css";
import {
  HomeOutlined,
  InfoCircleOutlined,
  FormOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navbarLists}>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.active}`
                : styles.navbarLink
            }
          >
            <li>
              <HomeOutlined className={styles.icon} />
              Home
            </li>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.active}`
                : styles.navbarLink
            }
            end
          >
            <li>
              <InfoCircleOutlined className={styles.icon} />
              About Us
            </li>
          </NavLink>
          <NavLink
            to={"/registration"}
            className={({ isActive }) =>
              isActive
                ? `${styles.navbarLink} ${styles.active}`
                : styles.navbarLink
            }
          >
            <li>
              <FormOutlined className={styles.icon} />
              Registration
            </li>
          </NavLink>

          {!localStorage.getItem("userInfo") ? (
            <NavLink to={"/login"} className={styles.navbarLink}>
              <Button className={styles.button}>Login</Button>
            </NavLink>
          ) : (
            // <Popconfirm
            //   title="Logout"
            //   description="are sure you want to logout"
            //   onConfirm={logout}
            // >
            //   <Button className={styles.button}>Logout</Button>
            // </Popconfirm>
            <AccountSection />
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
