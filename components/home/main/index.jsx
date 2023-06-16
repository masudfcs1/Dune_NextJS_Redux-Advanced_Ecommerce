import styles from "./styles.module.scss";
import React from "react";
import MainSwiper from "./swiper";
import Offers from "./offers";
import Menu from "./Menu";
import User from "./User";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <Menu />
      <MainSwiper />
      <Offers />
      <User />
    </div>
  );
};

export default Main;
