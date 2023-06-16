import React from "react";
import styles from "./styles.module.scss";
export default function Countdown() {
  return (
    <div className={styles.countdown}>
      <span>1</span>
      <span>2</span>
      <b>:</b>
      <span>4</span>
      <span>6</span>
      <b>:</b>
      <span>1</span>
      <span>0</span>
    </div>
  );
}
