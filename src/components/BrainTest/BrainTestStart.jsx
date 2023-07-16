import React from "react";
import H1 from "../../UI/H1/H1";
import { message } from "antd";
import styles from "../../styles/brain.module.css";
import Button from "../../UI/Button/Button";
import {
  brainStartText,
  brainTestStartHeading,
} from "../../data/content/brainTest";

const BrainTestStart = ({ setBrainStart, setBrainTestOne }) => {
  const startHandler = () => {
    message.open({ type: "info", content: "Loading", duration: "0.5" });
    setTimeout(() => {
      message.open({ type: "success", content: "Succefully Loaded" });
      setBrainStart(false);
      setBrainTestOne(true);
    }, 600);
  };
  return (
    <React.Fragment>
      <div className={styles.brainStartMain}>
        <div>
          <H1 className={styles.brainStartHeading}>{brainTestStartHeading}</H1>
          <p>{brainStartText}</p>
          <Button className={styles.brainStartBtn} onClick={startHandler}>
            Start Now
          </Button>
        </div>
        <img alt="brainStart" src="./img/brainStart.png" width="200" />
      </div>
    </React.Fragment>
  );
};

export default BrainTestStart;
