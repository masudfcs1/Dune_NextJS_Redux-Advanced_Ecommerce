import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
const NewsLetter = () => {
  return (
    <div className={styles.footer__newsletter}>
      <h3>Signup for our newsletter</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Enter your email" />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>
      <p>
        By clicking the SUBSCRIBE button, you are agreeing to{" "}
        <Link href="">
          <span>our Privacy & Cookie Policy</span>
        </Link>
      </p>
    </div>
  );
};

export default NewsLetter;
