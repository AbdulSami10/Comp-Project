import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Live = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
    } else if (!localStorage.getItem("live")) {
      navigate("/");
    }
  }, [navigate]);

  return <div>Live</div>;
};

export default Live;
