import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Rules = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  return <div>Rules</div>;
};

export default Rules;
