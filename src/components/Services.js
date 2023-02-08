import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import H1 from "../UI/H1/H1";
import styles from "../styles/services.module.css";
import {
  cardOneHeading,
  cardThreeHeading,
  cardTwoHeading,
} from "../data/content/home/index";

const Services = () => {
  const navigate = useNavigate();
  const quizCard = () => {
    localStorage.setItem("quiz", 1);
    navigate("/quiz");
  };
  const brainCard = () => {
    localStorage.setItem("brain", 1);
    navigate("/brain");
  };
  const liveCard = () => {
    if (localStorage.getItem("live")) {
      navigate("/live");
    }
  };
  return (
    <section className={styles.serviceSection}>
      <H1>Our Services</H1>
      <div className={styles.cardMain}>
        <Card
          hoverable
          onClick={quizCard}
          className={styles.card}
          cover={<img src="./img/quiz.webp" alt="quizImage" />}
        >
          <h1 className={styles.cardHeading}>{cardOneHeading}</h1>
        </Card>
        <Card
          hoverable
          onClick={brainCard}
          className={styles.card}
          cover={<img src="./img/brain.webp" alt="quizImage" />}
        >
          <h1 className={styles.cardHeading}>{cardTwoHeading}</h1>
        </Card>
        <Card
          hoverable
          onClick={liveCard}
          className={`${
            localStorage.getItem("live") ? styles.card : styles.cardBlock
          }`}
          cover={<img src="./img/live.webp" alt="quizImage" />}
        >
          {/* <div className={styles.overlay} />
          <h1 className={styles.cardHeading}>{cardThreeHeading}</h1> */}
        </Card>
      </div>
    </section>
  );
};

export default Services;
