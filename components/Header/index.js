import React from "react";
import styles from "./styles.module.scss";
import Ad from "./Ad.jsx";
import Top from "./Top.jsx";
import Main from "./Main";

const Header = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </header>
  );
};

export default Header;
