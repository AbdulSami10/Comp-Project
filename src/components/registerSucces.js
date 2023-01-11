import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

const RegisterSucces = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("live");
    navigate("/registration");
  };
  return (
    <React.Fragment>
      <Button onClick={logoutHandler}>Logout</Button>
    </React.Fragment>
  );
};

export default RegisterSucces;
