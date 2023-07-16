import H1 from "../UI/H1/H1";
import { message } from "antd";
import { Rules } from "../components";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/about.module.css";
import {
  aboutDescription,
  aboutHeading,
  aboutLongDescription,
} from "../data/content/about-rule/index";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });
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
        <img src="./img/about.jpg" alt="aboutImage" width="400px" />
      </div>
      <p className={styles.longDescription}>{aboutLongDescription}</p>
      <Rules />
    </React.Fragment>
  );
};

export default About;
