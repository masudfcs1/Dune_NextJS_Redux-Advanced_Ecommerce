/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

const Copyright = ({ country }) => {
  return (
    <div className={styles.footer__copyright}>
      <section>@2023 Dune All Right Resereved.</section>
      <section>
        <ul>
          {data.map((link) => (
            <li>
              <Link href={link.link}> {link.name} </Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> Bangladesh
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

const data = [
  {
    name: "Privacy Center",
    link: "",
  },
  {
    name: "Privacy & Cookie Policy",
    link: "",
  },
  {
    name: "Manage Cookies",
    link: "",
  },
  {
    name: "Terms & Conditions",
    link: "",
  },
  {
    name: "Copyright Notice",
    link: "",
  },
];
export default Copyright;
