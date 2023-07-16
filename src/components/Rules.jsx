import React from "react";
import H1 from "../UI/H1/H1";
import styles from "../styles/rules.module.css";
import {
  ruleFive,
  ruleFour,
  ruleHeading,
  ruleOne,
  ruleSeven,
  ruleSix,
  ruleSubHeading,
  ruleThree,
  ruleTwo,
} from "../data/content/about-rule/index";

const Rules = () => {
  return (
    <React.Fragment>
      <H1>{ruleHeading}</H1>
      <div className={styles.main}>
        <img src="./img/rules.webp" alt="rulesImage" width="400" />
        <section className={styles.sectionOne}>
          <H1 className={styles.subHead}>{ruleSubHeading}</H1>
          <ol className={styles.list}>
            <li>{ruleOne}</li>
            <li>{ruleTwo}</li>
            <li>{ruleThree}</li>
            <li>{ruleFour}</li>
            <li>{ruleFive}</li>
            <li>{ruleSix}</li>
            <li>{ruleSeven}</li>
          </ol>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Rules;
