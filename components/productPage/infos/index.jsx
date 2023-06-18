import styles from "./styles.module.scss";
import React from "react";

export default function Info({ product, setActiveImg }) {
  return;
  <div className={styles.infos}>
    <DialogModal />
    <div className={styles.infos__container}>
      <h1 className={styles.infos__name}>{product.name}</h1>
      <h2 className={styles.infos__sku}>{product.sku}</h2>
    </div>
  </div>;
}
