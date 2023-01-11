import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rules from "../components/rules";
import { aboutDescription, aboutHeading } from "../information/content";
import styles from "../styles/about.module.css";
import H1 from "../UI/H1/H1";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <div className={styles.aboutSection}>
          <H1 className={styles.heading}>{aboutHeading}</H1>
          <p className={styles.shortDescription}>{aboutDescription}</p>
        </div>
        <img src="./img/about.jpg" alt="aboutImage" width="420px" />
      </div>
      <Rules />
    </React.Fragment>
  );
};

export default About;
