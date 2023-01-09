import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    }
  }, [navigate]);
  // localStorage.removeItem("home");
  return <div>Registration</div>;
};

export default Registration;
