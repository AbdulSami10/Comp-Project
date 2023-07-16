import { UserOutlined } from "@ant-design/icons";
import { Dropdown, message } from "antd";
import { AiOutlineLogout } from "react-icons/ai";
import { FcBusinessContact } from "react-icons/fc";
import Button from "../UI/Button/Button";
import React from "react";
import styles from ".././styles/accUser.module.css";
import { NavLink, useNavigate } from "react-router-dom";
const AccountSection = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("live");
    message.open({
      type: "success",
      content: "Successfully Logout",
    });
    navigate("/login");
  };
  const items = [
    {
      label: "Account Info",
      key: "0",
      disabled: true,
    },
    { type: "divider" },
    {
      label: (
        <NavLink className={styles.profileLabel} to="/profile">
          Profile
        </NavLink>
      ),
      key: "1",
      icon: (
        <FcBusinessContact style={{ fontSize: "1.5rem", color: "black" }} />
      ),
    },
    {
      label: (
        <Button className={styles.button} onClick={logout}>
          Logout
        </Button>
      ),
      key: "2",
      icon: <AiOutlineLogout style={{ fontSize: "1.3rem" }} />,
    },
  ];
  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        className={styles.user}
        arrow={{ pointAtCenter: true }}
      >
        <UserOutlined />
      </Dropdown>
    </>
  );
};

export default AccountSection;
