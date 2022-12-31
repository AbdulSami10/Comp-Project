import React, { useEffect } from "react";
import LoginForm from "../components/loginForm";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/");
    }
  }, []);
  return (
    <React.Fragment>
      <LoginForm />
    </React.Fragment>
  );
};

export default Login;
