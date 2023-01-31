import React from "react";
import H1 from "../../UI/H1/H1";

const BrainTestResult = ({ rightPercentage, leftPercentage }) => {
  return (
    <React.Fragment>
      <H1>{rightPercentage}</H1>
      <H1>{leftPercentage}</H1>
    </React.Fragment>
  );
};

export default BrainTestResult;
