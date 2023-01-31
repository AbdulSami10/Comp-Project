import React, { useState } from "react";
import styles from "../../styles/brain.module.css";
import H1 from "../../UI/H1/H1";
import { brainTestMcqsTwo } from "../../data/content/brainTest/brainTestMcqsTwo";
import {
  brainChapterTwoHeading,
  brainChapterTwoSubHeading,
} from "../../data/content/brainTest";
const BrainTestTwo = ({
  setBrainTestResult,
  setBrainTestTwo,
  setRightPercentPoint,
  setleftPercentPoint,
  rightPercentPoint,
  leftPercentPoint,
}) => {
  const [quesNo, setQuesNo] = useState(0);
  const [ans, setAns] = useState("");

  const question = brainTestMcqsTwo[quesNo];
  const answerHandler = () => {
    if (ans === question.correct) {
      setRightPercentPoint(rightPercentPoint + 1);
      console.log(rightPercentPoint);
      setAns("");
    } else {
      setleftPercentPoint(leftPercentPoint + 1);
    }
  };
  const nextHandler = () => {
    if (quesNo !== brainTestMcqsTwo.length - 1) {
      setAns("");
      setQuesNo(quesNo + 1);
    } else {
      setBrainTestTwo(false);
      setBrainTestResult(true);
    }
  };
  setInterval(() => {
    nextHandler();
  }, 4000);
  const firstHandler = () => {
    setAns("a");
    answerHandler();
    nextHandler();
  };
  const secoundHandler = () => {
    setAns("b");
    answerHandler();
    nextHandler();
  };
  return (
    <React.Fragment>
      <H1 className={styles.chapHead}>{brainChapterTwoHeading}</H1>
      <div className={styles.chapTwoMain}>
        <h2>{brainChapterTwoSubHeading}</h2>
        <div className={styles.chapTwoSub}>
          <h1 style={{ color: question.question }}>
            {question.question.toUpperCase()}
          </h1>
          <div>
            <h1 style={{ color: question.b }} onClick={firstHandler}>
              {question.a.toUpperCase()}
            </h1>
            <h1 style={{ color: question.a }} onClick={secoundHandler}>
              {question.b.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrainTestTwo;
