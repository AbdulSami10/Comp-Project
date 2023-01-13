import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizMcqs from "../components/quizMcqs";
import QuizResult from "../components/quizResult";
import QuizStart from "../components/quizStart";
import styles from "../styles/quiz.module.css";
import H1 from "../UI/H1/H1";
const Quiz = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/login");
    } else if (!localStorage.getItem("quiz")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/");
    }
  }, [navigate]);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState(false);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <H1 className={styles.heading}>Quiz</H1>
        {result ? (
          <QuizResult setResult={setResult} />
        ) : (
          <>
            {start ? (
              <QuizStart setStart={setStart} />
            ) : (
              <QuizMcqs setResult={setResult} />
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Quiz;
