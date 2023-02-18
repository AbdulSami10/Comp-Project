import React from "react";
import { Form, Input, InputNumber, Select, message } from "antd";
import styles from "../styles/login.module.css";
import Button from "../UI/Button/Button";
import {
  LockOutlined,
  UserOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { heading } from "../data/index";
import { mobilePrefix } from "../data/content/login";
import { useNavigate } from "react-router-dom";
import { useForm } from "@formspree/react";
const LoginForm = () => {
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xgebvodw");
  const onFinish = async (values) => {
    try {
      const respond = await fetch(
        "https://drbrain-e1efb-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/Json",
          },
        }
      );
      if (respond.ok) {
        const data = await respond.json;
        console.log(data);
        console.log("Success:", values);
        localStorage.setItem("userInfo", JSON.stringify(values));
        handleSubmit(values);
        navigate("/");
      }
    } catch (error) {
      message.open({
        type: "error",
        content: "Error Please Tryagain",
      });
    }
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
        method="POST"
        action="https://formspree.io/f/xgebvodw"
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
          <Button type="submit" className={styles.button}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};
export default LoginForm;
