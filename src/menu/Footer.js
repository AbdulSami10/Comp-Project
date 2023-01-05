import React from "react";
import styles from "../styles/footer.module.css";
import { CopyrightCircleOutlined } from "@ant-design/icons";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.h1}>
        ALL Right Reserved to Abdul Sami Sayani Memon{" "}
      </h3>
      <CopyrightCircleOutlined className={styles.icon} />
    </footer>
  );
};

export default Footer;
