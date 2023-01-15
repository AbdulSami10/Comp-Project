import React from "react";
import { useNavigate } from "react-router-dom";
import {
  quizResBest,
  quizResNorml,
  quizResWorst,
} from "../information/content";
import { quiz } from "../information/quiz";

import styles from "../styles/quiz.module.css";
import Button from "../UI/Button/Button";

const QuizResult = (props) => {
  const setResult = props.setResult;
  const correct = props.correct;
  let percentage = props.percentage;
  const setCorrect = props.setCorrect;
  const navigate = useNavigate();
  const home = () => {
    setCorrect(0);

    setResult(false);
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className={styles.quizResMain}>
        <div>
          <h2>
            {percentage <= 40
              ? quizResWorst
              : percentage >= 80
              ? quizResBest
              : percentage <= 80 || percentage >= 40
              ? quizResNorml
              : ""}
          </h2>
          <p>
            Your {correct} out of {quiz.length}
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
