import React, { useEffect } from "react";
import { LoginForm } from "../components";
import { useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <React.Fragment>
      <div className={styles.main}>
        <img src="./img/login.png" width="480" height="420" alt="loginImage" />
        <LoginForm />
      </div>
    </React.Fragment>
  );
};

export default Login;
