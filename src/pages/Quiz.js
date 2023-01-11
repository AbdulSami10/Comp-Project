import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    } else if (!localStorage.getItem("quiz")) {
      navigate("/");
    }
  }, [navigate]);
  return <div>Quiz</div>;
};

export default Quiz;
