/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Duneshop !</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://avatars.githubusercontent.com/u/57311382?v=4"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Masud Rana</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile/">Account</Link>
        </li>
        <li>
          <Link href="/profile/oders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/message">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whislist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
