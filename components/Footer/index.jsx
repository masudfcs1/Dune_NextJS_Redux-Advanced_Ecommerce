import React from "react";
import styles from "./styles.module.scss";
import Links from "./Links";
import Socials from "./Socials";

const index = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <Links />
        <Socials />
      </div>
    </footer>
  );
};

export default index;
