import React, { useState } from "react";
import { demoQuiz } from "../information/demoQuiz";
import Button from "../UI/Button/Button";
import { GiExitDoor } from "react-icons/gi";
import styles from "../styles/quiz.module.css";
import { Popconfirm, Progress } from "antd";
import { useNavigate } from "react-router-dom";

const QuizMcqs = (props) => {
  const navigate = useNavigate();
  const [queNo, setQueNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const correct = props.correct;
  const setCorrect = props.setCorrect;
  const percentage = props.percentage;
  const setResult = props.setResult;

  const [ans, setAns] = useState("");
  const que = demoQuiz[queNo];
  const next = () => {
    if (queNo !== demoQuiz.length - 1) {
      setQueNo(queNo + 1);
    } else {
      setShowResult(true);
    }

    if (que.correct === ans) {
      setCorrect(correct + 1);
      console.log(correct);
    }
    setAns("");
  };
  const reset = () => {
    setQueNo(0);
    setCorrect(1);
    setAns("");
  };
  const exitHandler = () => {
    localStorage.removeItem("quiz");
    setQueNo(0);
    setCorrect(1);
    setAns("");
    navigate("/");
  };
  const cancel = () => {
    setAns("");
  };
  const result = () => {
    setResult(true);
  };
  return (
    <React.Fragment>
      <div className={styles.quizMcMain}>
        <div className={styles.quizMcSec}>
          <Popconfirm
            title="Quit Game"
            description="are sure you want to quit this game?"
            onConfirm={exitHandler}
          >
            <GiExitDoor className={styles.exitIcon} />
          </Popconfirm>
          <p className={styles.quizMcCur}>
            {queNo + 1} Out Of {demoQuiz.length}
          </p>
        </div>
        <h2 className={styles.quizMcTitle}>
          {queNo + 1}) &nbsp;{que.title}
        </h2>

        <div className={styles.quizMcOptMain}>
          <p
            className={` ${
              ans === "a"
                ? `${styles.quizMcOpt} ${styles.quizMcOptActive}`
                : styles.quizMcOpt
            }`}
            onClick={() => {
              setAns("a");
            }}
          >
            a)&nbsp;{que.a}
          </p>
          <p
            className={` ${
              ans === "b"
                ? `${styles.quizMcOpt} ${styles.quizMcOptActive}`
                : styles.quizMcOpt
            }`}
            onClick={() => {
              setAns("b");
            }}
          >
            b)&nbsp;{que.b}
          </p>
          <p
            className={` ${
              ans === "c"
                ? `${styles.quizMcOpt} ${styles.quizMcOptActive}`
                : styles.quizMcOpt
            }`}
            onClick={() => {
              setAns("c");
            }}
          >
            c)&nbsp;{que.c}
          </p>
          <p
            className={` ${
              ans === "d"
                ? `${styles.quizMcOpt} ${styles.quizMcOptActive}`
                : styles.quizMcOpt
            }`}
            onClick={() => {
              setAns("d");
            }}
          >
            d)&nbsp;{que.d}
          </p>
        </div>

        <Button onClick={next} className={styles.nxtBtn}>
          Next
        </Button>
        <Button className={styles.cancelBtn} onClick={cancel}>
          Cancel
        </Button>

        <Button onClick={reset} className={styles.resetBtn}>
          Reset
        </Button>
        {showResult && (
          <Button onClick={result} className={styles.cancelBtn}>
            Result
          </Button>
        )}
      </div>
      <Progress percent={percentage} />
    </React.Fragment>
  );
};

export default QuizMcqs;
