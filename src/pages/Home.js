import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { heading, homeText } from "../content";
import styles from "../styles/home.module.css";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, []);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.firstSection}>
          <hi className={styles.h1}>{heading}</hi>
          <p className={styles.p}>{homeText}</p>
        </div>
        <img src="./img/mind pic.png" alt="mindPic" width="420px" />
      </div>
    </React.Fragment>
  );
};

export default Home;