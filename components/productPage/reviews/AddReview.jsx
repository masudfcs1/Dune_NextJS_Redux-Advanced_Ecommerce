import React from "react";
import styles from "./styles.module.scss";
import Select from "./Select";

export default function AddReview({ product }) {
  const [size, setSize] = useState("");
  return (
    <div className={styles.reviews__add}>
      <div className={styles.reviews__add_wrap}>
        <div className={styles.flex} style={{ gap: "10px" }}>
          <Select property={size} text="Size" />
        </div>
      </div>
    </div>
  );
}
