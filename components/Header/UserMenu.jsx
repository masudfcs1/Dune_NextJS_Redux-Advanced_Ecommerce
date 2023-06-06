/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

const UserMenu = ({ session }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Duneshop !</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session.user.image} alt="" className={styles.menu__img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button onClick={() => signIn()} className={styles.btn_outlined}>
            Login
          </button>
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
