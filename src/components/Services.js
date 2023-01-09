import { Card } from "antd";

import React from "react";
import H1 from "../UI/H1/H1";
import styles from "../styles/services.module.css";
import {
  cardOneHeading,
  cardThreeHeading,
  cardTwoHeading,
} from "../information/content";

const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <H1>Our Services</H1>
      <div className={styles.cardMain}>
        <Card
          hoverable
          className={styles.card}
          cover={<img src="./img/QUIZ.webp" alt="quizImage" />}
        >
          <h1 className={styles.cardHeading}>{cardOneHeading}</h1>
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img src="./img/brain.webp" alt="quizImage" />}
        >
          <h1 className={styles.cardHeading}>{cardTwoHeading}</h1>
        </Card>
        <Card
          hoverable
          className={styles.card}
          cover={<img src="./img/live.webp" alt="quizImage" />}
        >
          <h1 className={styles.cardHeading}>{cardThreeHeading}</h1>
        </Card>
      </div>
    </section>
  );
};

export default Services;
