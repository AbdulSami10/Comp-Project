import React from "react";
import {
  quizResBest,
  quizResNorml,
  quizResWorst,
} from "../information/content";
import { demoQuiz } from "../information/demoQuiz";

import styles from "../styles/quiz.module.css";
import Button from "../UI/Button/Button";

const QuizResult = (props) => {
  const setResult = props.setResult;
  const correct = props.correct;
  const percentage = props.percentage;
  const home = () => {
    setResult(false);
  };
  return (
    <React.Fragment>
      <div className={styles.quizResMain}>
        <div>
          <h2>
            {percentage >= 40
              ? quizResNorml
              : percentage >= 80
              ? quizResBest
              : quizResWorst}
          </h2>
          <p>
            Your {correct} out of {demoQuiz.length}
          </p>

          <p>Your Percentage is {percentage}%</p>
          <Button className={styles.cancelBtn} onClick={home}>
            Back To Home
          </Button>
        </div>
        <img src="./img/quizRes.webp" alt="quizResultImage" />
      </div>
    </React.Fragment>
  );
};

export default QuizResult;
