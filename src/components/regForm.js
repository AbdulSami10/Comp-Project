import { Button, DatePicker, Form, Input, Select } from "antd";
import React from "react";
import styles from "../styles/regForm.module.css";
import H1 from "../UI/H1/H1";
import {
  curCourses,
  hearAboutUs,
  interestedStudy,
  regFormHeading,
} from "../information/content";
import { useNavigate } from "react-router-dom";

const RegForm = () => {
  const navigate = useNavigate();

  const submitHandler = (values) => {
    console.log(values);
    localStorage.setItem("live", JSON.stringify(values));
    navigate("/live");
  };
  const submitFailed = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <H1>{regFormHeading}</H1>

      <Form
        name="regstration"
        onFinish={submitHandler}
        onFinishFailed={submitFailed}
      >
        <label>{interestedStudy}</label>
        <Form.Item name="interestedStudy">
          <Input placeholder="Provide Details:(optional)" />
        </Form.Item>
        <label>{hearAboutUs}</label>

        <Form.Item name="hearAboutUs">
          <Input placeholder="Provide Details:(optional)" />
        </Form.Item>
        <h3>Personal Details</h3>
        <div className={styles.flexSection}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Enter Your Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="familyName"
            label="Former Name"
            rules={[{ required: true, message: "Enter Your Former Name" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className={styles.flexSection}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Enter Your Title" }]}
          >
            <Select
              defaultValue="Title"
              options={[
                {
                  value: "Mr",
                  label: "Mr",
                },
                {
                  value: "Mrs",
                  label: "Mrs",
                },
                {
                  value: "Ms",
                  label: "Ms",
                },
                {
                  value: "Miss",
                  label: "Miss",
                },
                {
                  value: "Dr",
                  label: "Dr",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="birthdate"
            label="Date of Birth"
            rules={[{ required: true, message: "Enter Your Date Of Birth" }]}
          >
            <DatePicker />
          </Form.Item>
        </div>
        <Form.Item name="curCourse">
          <label>{curCourses}</label>
          <Input placeholder="(Optional)" />
        </Form.Item>
        <h3>Contact Details</h3>
        <Form.Item
          rules={[{ required: true, message: "Enter your Address" }]}
          name="address"
        >
          {/* <label>Address</label> */}
          <Input />
        </Form.Item>
        <div className={styles.flexSection}>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                required: true,
                message: "Enter your Email",
              },
            ]}
          >
            <Input type="email" />
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
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default RegForm;
