import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { heading, homeText } from "../information/content";
import styles from "../styles/home.module.css";
import Button from "../UI/Button/Button";
import Services from "../components/services";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  const homeHandler = () => {
    navigate("/about");
  };
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.firstSection}>
          <hi className={styles.h1}>{heading}</hi>
          <p className={styles.p}>{homeText}</p>
          <Button className={styles.button} onClick={homeHandler}>
            Lets's Start
          </Button>
        </div>
        <img src="./img/mind pic.png" alt="mindPic" width="420px" />
      </div>
      <Services />
    </React.Fragment>
  );
};

export default Home;
