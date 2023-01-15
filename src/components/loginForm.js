import React from "react";
import { Button, Form, Input, InputNumber, Select, message } from "antd";
import styles from "../styles/login.module.css";
import {
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { heading, mobilePrefix } from "../information/content";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    localStorage.setItem("userInfo", JSON.stringify(values));

    navigate("/");
  };
  const onFinishFailed = (errorInfo) => {
    message.open({
      type: "error",
      content: "Please all the required information",
    });
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
          <Input prefix={<UserOutlined />} />
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
          <Input type="email" prefix={<MailOutlined />} />
        </Form.Item>

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
          <Input.Password prefix={<LockOutlined />} />
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
          <Input addonBefore={mobilePrefix} prefix={<MobileOutlined />} />
        </Form.Item>
        <div className={styles.lastSec}>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "Please input your Subject!",
              },
            ]}
          >
            <Select
              defaultValue="Gender"
              options={[
                {
                  value: "male",
                  label: "Male",
                },
                {
                  value: "female",
                  label: "Female",
                },
                {
                  value: "other",
                  label: "Other",
                },
              ]}
            />
          </Form.Item>
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
                {
                  value: "arts",
                  label: "Arts",
                },
                {
                  value: "commerce",
                  label: "Commerce",
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
        </div>
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
