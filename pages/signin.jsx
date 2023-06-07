import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import styles from "@/styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";

const signin = () => {
  return (
    <div>
      {" "}
      <Header />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
          </div>
        </div>
      </div>
      <Footer country={"Ban"} />{" "}
    </div>
  );
};

export default signin;
