import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
import styles from "../styles/login.module.css";
import { Stack } from "@chakra-ui/react";
import { heading } from "../content";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("userInfo", JSON.stringify(values));

    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <React.Fragment>
      <Form
        name="basic"
        className={styles.form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 className={styles.h1}>{heading}</h1>
        {/* <Stack direction={{ base: "column", sm: "row" }}> */}
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        {/* </Stack> */}
        {/* <Stack direction={{ base: "column", sm: "row" }}> */}
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Phone No"
          name="phoneNo"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* </Stack> */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="space-around"
        >
          <Form.Item
            label="Subject"
            name="subject"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Select
              defaultValue="Enter Your Subject"
              options={[
                {
                  value: "computer",
                  label: "Computer",
                },
                {
                  value: "biology",
                  label: "Biology",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            rules={[
              {
                required: true,
                message: "Please input your Age!",
              },
            ]}
          >
            <InputNumber min={15} defaultValue={15} />
          </Form.Item>
        </Stack>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};
export default LoginForm;
