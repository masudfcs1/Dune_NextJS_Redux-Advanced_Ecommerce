import React from "react";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import {
  RiAccountCircleFill,
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
} from "react-icons/ri";

const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/14/14/bangladesh-162238_1280.png"
              alt="image"
            />
            <span>Bangladesh/usd</span>
          </li>
          <MdSecurity />
          <li>Buyer Protection</li>
          <li>
            <span>Customer Service </span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <span>
              <BsSuitHeart />
              Whishlist
            </span>
          </li>
          <li>
            {" "}
            <div className={styles.flex}>
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
