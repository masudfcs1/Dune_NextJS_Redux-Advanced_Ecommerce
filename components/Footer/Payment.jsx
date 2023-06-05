import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcJcb } from "react-icons/fa";
const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <section>
          <h5>STAY CONNECTED</h5>
          <ul>
            <li>
              <a href="/" target="_blank">
                <FaCcVisa size={50} color="blue" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <FaCcMastercard
                  size={50}
                  color="#fd602f
                "
                />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <FaCcPaypal size={50} color="blue" />
              </a>
            </li>
            <li>
              <a href="/" target="_blank">
                <FaCcJcb size={50} color="#fca743" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
