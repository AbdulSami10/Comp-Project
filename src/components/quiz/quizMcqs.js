import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import { GiExitDoor } from "react-icons/gi";
import styles from "../../styles/quiz.module.css";
import { message, Popconfirm, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { quiz } from "../../data/content/quiz/quizContent";

const QuizMcqs = (props) => {
  const navigate = useNavigate();
  const [queNo, setQueNo] = useState(0);

  const correct = props.correct;
  const setCorrect = props.setCorrect;
  let percentage = props.percentage;
  const setResult = props.setResult;

  const [ans, setAns] = useState("");
  const que = quiz[queNo];
  const next = () => {
    if (queNo !== quiz.length - 1) {
      setQueNo(queNo + 1);
    } else {
      message.open({ type: "info", content: "Loading", duration: "0.5" });
      setTimeout(() => {
        setResult(true);
      }, 500);
    }

    if (que.correct === ans) {
      setCorrect(correct + 1);
      console.log(correct);
    }
    setAns("");
  };
  const reset = () => {
    setQueNo(0);
    setCorrect(0);
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

  return (
    <React.Fragment>
      <div className={styles.quizMcMain}>
        <div className={styles.quizMcSec}>
          <p className={styles.quizMcCur}>
            {queNo + 1} Out Of {quiz.length}
          </p>
          <Popconfirm
            title="Quit Game"
            description="are sure you want to quit this game?"
            onConfirm={exitHandler}
          >
            <GiExitDoor className={styles.exitIcon} />
          </Popconfirm>
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
      </div>
      <Progress percent={percentage} />
    </React.Fragment>
  );
};

export default QuizMcqs;
