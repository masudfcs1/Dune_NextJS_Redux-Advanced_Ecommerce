/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import {
  RiAccountCircleFill,
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
} from "react-icons/ri";
import { Img } from "../../public/images/bang.png";
import Link from "next/link";
import UserMenu from "./UserMenu";

const Top = () => {
  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/13/14/14/bangladesh-162238_1280.png"
              alt="image"
            />

            <span>Bangladesh/usd</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service </span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li className={styles.li}>
            {loggedIn ? (
              <li>
                <div className={styles.flex}>
                  <img
                    src="https://avatars.githubusercontent.com/u/57311382?v=4"
                    alt=""
                  />
                  <span>Mausd Rana</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            <UserMenu loggedIn={loggedIn} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
