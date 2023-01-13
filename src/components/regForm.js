import { DatePicker, Form, Input, message, Select } from "antd";
import Button from "../UI/Button/Button";
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
    message.open({
      type: "success",
      content: "Successfully Registered",
    });
    navigate("/live");
  };
  const submitFailed = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <H1>{regFormHeading}</H1>

      <div className={styles.main}>
        <img src="./img/reg.png" alt="regImg" width="400" height="400" />
        <Form
          name="regstration"
          onFinish={submitHandler}
          onFinishFailed={submitFailed}
          className={styles.formMain}
        >
          <label>{interestedStudy}</label>
          <Form.Item name="interestedStudy">
            <Input
              placeholder="Provide Details:(optional)"
              className={styles.input}
            />
          </Form.Item>
          <label>{hearAboutUs}</label>

          <Form.Item name="hearAboutUs">
            <Input
              placeholder="Provide Details:(optional)"
              className={styles.input}
            />
          </Form.Item>
          <h3 className={styles.smHead}>Personal Details</h3>

          <div className={styles.flexSection}>
            <div>
              <label>Name</label>
              <Form.Item
                name="name"
                // label="Name"
                rules={[{ required: true, message: "Enter Your Name" }]}
              >
                <Input className={styles.input} />
              </Form.Item>
            </div>
            <div>
              <label>Title</label>
              <Form.Item
                name="title"
                // label="Title"
                rules={[{ required: true, message: "Enter Your Title" }]}
              >
                <Select
                  defaultValue="Title"
                  className={styles.input}
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
            </div>
          </div>
          <div className={styles.flexSection}>
            <div>
              <label>Former Name</label>
              <Form.Item
                name="familyName"
                // label="Former Name"
                rules={[{ required: true, message: "Enter Your Former Name" }]}
              >
                <Input className={styles.input} />
              </Form.Item>
            </div>
            <div>
              <label>Date of Birth</label>
              <Form.Item
                name="birthdate"
                // label="Date of Birth"
                rules={[
                  { required: true, message: "Enter Your Date Of Birth" },
                ]}
              >
                <DatePicker className={styles.input} />
              </Form.Item>
            </div>
          </div>
          <Form.Item name="curCourse">
            <label>{curCourses}</label>
            <Input placeholder="(Optional)" className={styles.input} />
          </Form.Item>
          <h3>Contact Details</h3>
          <label>Address</label>

          <Form.Item
            rules={[{ required: true, message: "Enter your Address" }]}
            name="address"
          >
            <Input className={styles.input} />
          </Form.Item>
          <div className={styles.flexSection}>
            <div>
              <label>E-mail</label>
              <Form.Item
                name="email"
                // label="E-mail"
                rules={[
                  {
                    required: true,
                    message: "Enter your Email",
                  },
                ]}
              >
                <Input type="email" className={styles.input} />
              </Form.Item>
            </div>
            <div>
              <label>Phone-No</label>
              <Form.Item
                //   label="Phone No  "
                name="phoneNo"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input className={styles.input} />
              </Form.Item>
            </div>
          </div>
          <Form.Item>
            <Button type="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default RegForm;
