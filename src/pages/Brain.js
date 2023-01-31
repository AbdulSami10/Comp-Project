import { message } from "antd";
import React, { useEffect, useState } from "react";
import H1 from "../UI/H1/H1";
import { useNavigate } from "react-router-dom";
import { brainTestHead } from "../data/content/brainTest/index";
import BrainTestStart from "../components/brainTest/brainTestStart";
import BrainTestTwo from "../components/brainTest/brainTestTwo";
import BrainTestOne from "../components/brainTest/brainTestOne";
import styles from "../styles/brain.module.css";
import BrainTestResult from "../components/brainTest/brainTestResult";

const Brain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/login");
    } else if (!localStorage.getItem("brain")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/");
    }
  }, [navigate]);
  const [brainStart, setBrainStart] = useState(true);
  const [brainTestOne, setBrainTestOne] = useState(false);
  const [brainTestTwo, setBrainTestTwo] = useState(false);
  const [brainTestResult, setBrainTestResult] = useState(false);
  const [rightPercentPoint, setRightPercentPoint] = useState(1);
  const [leftPercentPoint, setLeftPercentPoint] = useState(0);

  const rightPercentage = (rightPercentPoint / 8) * 100;
  const leftPercentage = (leftPercentPoint / 8) * 100;

  return (
    <React.Fragment>
      <div className={styles.main}>
        <H1>{brainTestHead}</H1>
        {brainStart && (
          <BrainTestStart
            setBrainStart={setBrainStart}
            setBrainTestOne={setBrainTestOne}
          />
        )}
        {brainTestOne && (
          <BrainTestOne
            setBrainTestOne={setBrainTestOne}
            setBrainTestTwo={setBrainTestTwo}
            setRightPercentPoint={setRightPercentPoint}
            setleftPercentPoint={setLeftPercentPoint}
            rightPercentPoint={rightPercentPoint}
            leftPercentPoint={leftPercentPoint}
          />
        )}
        {brainTestTwo && (
          <BrainTestTwo
            setBrainTestTwo={setBrainTestTwo}
            setBrainTestResult={setBrainTestResult}
            setRightPercentPoint={setRightPercentPoint}
            setleftPercentPoint={setLeftPercentPoint}
            rightPercentPoint={rightPercentPoint}
            leftPercentPoint={leftPercentPoint}
          />
        )}
        {brainTestResult && (
          <BrainTestResult
            rightPercentage={rightPercentage}
            leftPercentage={leftPercentage}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Brain;
