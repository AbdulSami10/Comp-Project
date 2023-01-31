import React, { useState } from "react";
import { brainChapterOneHeading } from "../../data/content/brainTest";
import H1 from "../../UI/H1/H1";
import styles from "../../styles/brain.module.css";
import { brainTestOneMcqs } from "../../data/content/brainTest/brainTestMcqs";
import Button from "../../UI/Button/Button";

const BrainTestOne = ({
  setBrainTestOne,
  setBrainTestTwo,
  setRightPercentPoint,
  setleftPercentPoint,
  rightPercentPoint,
  leftPercentPoint,
}) => {
  const [questNo, setQuestNo] = useState(0);
  const questions = brainTestOneMcqs[questNo];
  const [ans, setAns] = useState("");
  const answerHandler = () => {
    if (ans === questions.correct) {
      setRightPercentPoint(rightPercentPoint + 1);
    } else {
      setleftPercentPoint(leftPercentPoint + 1);
    }
  };
  const nextHandler = () => {
    if (questNo !== brainTestOneMcqs.length - 1) {
      setQuestNo(questNo + 1);
    } else {
      setBrainTestOne(false);
      setBrainTestTwo(true);
    }
  };
  const leftHandler = () => {
    setAns("a");
    answerHandler();

    nextHandler();
  };
  const rightHandler = () => {
    setAns("b");
    answerHandler();

    nextHandler();
  };

  return (
    <React.Fragment>
      <H1 className={styles.chapHead}>{brainChapterOneHeading}</H1>
      <div className={styles.chapOneMain}>
        <h2>{questions.question}</h2>
        <p>{questions.subQuestion}</p>
        <div>
          <Button onClick={leftHandler}>{questions.a}</Button>
          <Button onClick={rightHandler}>{questions.b}</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrainTestOne;
