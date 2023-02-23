import React from "react";

import { motion } from "framer-motion";
import styles from "../../styles/brain.module.css";

const BrainTestResult = ({ rightPercentage, leftPercentage }) => {
  let leftBarValue = leftPercentage * 2;
  let rightBarValue = rightPercentage * 2;
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const name = userInfo.name;

  return (
    <React.Fragment>
      <div className={styles.resultMain}>
        <h3
          className={styles.resultSubheading}
        >{`Congratulations ${name} your...`}</h3>
        <div className={styles.results}>
          <div className={styles.resultLeftBar}>
            <div className={styles.resultLeftBarTop}>
              <h3>Left Brain</h3>
              <img src="./img/leftBrain.png" alt="leftbrainImage" width="200" />
            </div>
            <div className={styles.resultLeftBarValue}>
              <h3>{`${leftPercentage}%`}</h3>
              <motion.div
                animate={{ scale: 1, opacity: 100 }}
                transition={{ type: "linear", delay: 0.3 }}
                initial={{ scale: 0, opacity: 0 }}
                style={{
                  width: "50px",
                  height: `${leftBarValue}px`,
                  backgroundColor: "#e95165",
                }}
              />
            </div>
          </div>
          <div className={styles.resultRightBar}>
            <div className={styles.resultRightBarValue}>
              <h3>{`${rightPercentage}%`}</h3>
              <motion.div
                animate={{ scale: 1 }}
                transition={{ type: "linear", delay: 0.3 }}
                initial={{ scale: 0 }}
                style={{
                  width: "50px",
                  height: `${rightBarValue}px`,
                  backgroundColor: "#8b88d9",
                }}
              />
            </div>
            <div className={styles.resultRightBarTop}>
              <img
                src="./img/right brain.png"
                alt="rightbrainImage"
                width="200"
              />
              <h3>Right Brain</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BrainTestResult;
