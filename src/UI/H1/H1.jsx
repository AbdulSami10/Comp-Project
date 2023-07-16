import React from "react";
import styles from "./H1.module.css";

const H1 = (props) => {
  return (
    <h1
      className={`${styles.h1} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </h1>
  );
};

export default H1;
