/* eslint-disable @next/next/no-img-element */
import { RiSearch2Fill } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image1 from "next/image";
import { useSelector } from "react-redux";

const Main = () => {
  const { cart } = useSelector((state) => ({ ...state }));
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>
            {" "}
            <img src="/public/logo.png" alt="" />
            {/* <Image1 src="/public/logo.png" width="30" height="50" /> */}
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search Your ..." />
          <div className={styles.search__icon}>
            <RiSearch2Fill />
          </div>
        </div>
        <Link href="/cart" legacyBehavior>
          <a className={styles.cart}>
            <FaOpencart />
            <span>0</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Main;
