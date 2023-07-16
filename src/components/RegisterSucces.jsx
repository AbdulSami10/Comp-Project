import React from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { message, Popconfirm, Result } from "antd";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("live");
    message.open({
      type: "success",
      content: "Succesfully Sign-out",
    });
    navigate("/registration");
  };
  return (
    <React.Fragment>
      <Result
        title="You are already Registered"
        status="success"
        extra={[
          <Popconfirm
            title="Sign-Out"
            description="are you want to cancel your registereation"
            onConfirm={logoutHandler}
          >
            <Button>Sign-Out</Button>
          </Popconfirm>,
        ]}
      />
    </React.Fragment>
  );
};

export default RegisterSuccess;
