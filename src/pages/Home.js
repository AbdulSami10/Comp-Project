import React from "react";
import { Stack } from "@chakra-ui/react";
import { heading, homeText } from "../content";
import styles from "../styles/home.module.css";
const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.firstSection}>
          <hi className={styles.h1}>{heading}</hi>
          <p>{homeText}</p>
        </div>
        <img src="./img/mind pic.png" alt="mindPic" width="420px" />
      </div>
    </React.Fragment>
  );
};

export default Home;
