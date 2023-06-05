/* eslint-disable @next/next/no-img-element */
import { RiSearch2Fill } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" legacyBehavior>
          <a className={styles}>
            {" "}
            <img src="../../public/logo.png" alt="" />
          </a>
        </Link>
        <div className={styles.serch}>
          <input type="text" placeholder="Search Your ..." />
          <div className={styles.secrch__icon}>
            <RiSearch2Fill />
          </div>
        </div>
        <Link href="/cart" legacyBehavior>
          <a className={styles.cart}>
            <FaOpencart />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
