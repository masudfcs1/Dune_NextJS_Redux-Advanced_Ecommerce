import React from "react";
import styles from "./styles.module.scss";
import { IoArrowDown } from "react-icons/io5";
import { useState } from "react";

export default function Select({ property, text, data, handleChange }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.select}>
      <div className={styles.select__header}></div>
    </div>
  );
}
