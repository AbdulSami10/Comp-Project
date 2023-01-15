import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizMcqs from "../components/quizMcqs";
import QuizResult from "../components/quizResult";
import QuizStart from "../components/quizStart";
import { quiz } from "../information/quiz";
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
  const [correct, setCorrect] = useState(0);
  let per = (correct / quiz.length) * 100;
  console.log(per);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <H1 className={styles.heading}>Quiz</H1>
        {result ? (
          <QuizResult
            setResult={setResult}
            correct={correct}
            percentage={per}
            setCorrect={setCorrect}
          />
        ) : (
          <>
            {start ? (
              <QuizStart setStart={setStart} />
            ) : (
              <div className={styles.quizMc}>
                <img
                  src="./img/quizMc.jpg"
                  width="500"
                  height="320"
                  alt="quizMCQsImage"
                />
                <QuizMcqs
                  setResult={setResult}
                  correct={correct}
                  setCorrect={setCorrect}
                  percentage={per}
                />
              </div>
            )}
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default Quiz;
