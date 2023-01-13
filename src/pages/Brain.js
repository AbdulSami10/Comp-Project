import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  return <div>Brain</div>;
};

export default Brain;
