import styles from "./styles.module.scss";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
export default function Category({ header, products, background }) {
  return (
    <div className={styles.category}>
      <div className={styles.category__header}>
        <h1> {header} </h1> <BsArrowRightCircle />
      </div>{" "}
    </div>
  );
}
