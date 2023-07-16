import React from "react";
import { Result } from "antd";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };
  return (
    <React.Fragment>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button onClick={homeHandler}>Go Home</Button>}
      />
    </React.Fragment>
  );
};

export default Error;
