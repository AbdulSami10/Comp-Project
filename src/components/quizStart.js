import React from "react";
import H1 from "../UI/H1/H1";
import styles from "../styles/quiz.module.css";
import {
  quizStHead,
  quizSthead2,
  quizStpara,
} from "../data/content/quiz/index";
import Button from "../UI/Button/Button";

const QuizStart = (props) => {
  const nextHandler = () => {
    props.setStart(false);
  };
  return (
    <React.Fragment>
      <div className={styles.quizStMain}>
        <div className={styles.quizStSecound}>
          <H1>{quizStHead}</H1>
          <H1 className={styles.quizSthead2}>{quizSthead2}</H1>
          <p className={styles.quizStpara}>{quizStpara}</p>
          <Button className={styles.quizBtn} onClick={nextHandler}>
            Start
          </Button>
        </div>
        <img src="./img/quizStart.webp" width="420" alt="quizSatrt" />
      </div>
    </React.Fragment>
  );
};

export default QuizStart;
