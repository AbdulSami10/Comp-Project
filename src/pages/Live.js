import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Live = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      message.open({ type: "error", content: "You are not authorized" });

      navigate("/login");
    } else if (!localStorage.getItem("live")) {
      navigate("/");
    }
  }, [navigate]);

  return <div>Under Working..........</div>;
};

export default Live;
