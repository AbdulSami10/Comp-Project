import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Brain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    } else if (!localStorage.getItem("brain")) {
      navigate("/");
    }
  }, [navigate]);
  return <div>Brain</div>;
};

export default Brain;
