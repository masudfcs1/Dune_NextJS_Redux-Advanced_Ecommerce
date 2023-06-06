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
import { useSession } from "next-auth/react";

const Top = ({ country }) => {
  const { data: session } = useSession();
  const [visible, setvisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <img src={country.flag} alt="image" />

            <span>{country.name}/usd</span>
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
          <li
            className={styles.li}
            onMouseLeave={() => setvisible(false)}
            onMouseOver={() => setvisible(true)}
          >
            {session ? (
              <li>
                <div className={styles.flex}>
                  <img src={session.user.image} alt="" />
                  <span> {session.user.name} </span>
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
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
