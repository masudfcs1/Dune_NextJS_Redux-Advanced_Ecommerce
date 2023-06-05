import React from "react";
import styles from "./styles.module.scss";
import Ad from "./Ad.jsx";
import Top from "./Top.jsx";
const Header = () => {
  return (
    <header className={styles.header}>
      {" "}
      <Ad /> <Top />
    </header>
  );
};

export default Header;
