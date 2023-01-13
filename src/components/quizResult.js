import React from "react";

const QuizResult = (props) => {
  return (
    <div
      onClick={() => {
        props.setResult(false);
      }}
    >
      QuizResult
    </div>
  );
};

export default QuizResult;
