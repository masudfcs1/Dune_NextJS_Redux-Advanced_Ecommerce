import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import styles from "@/styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Form, Formik } from "formik";
import LoginInput from "@/components/inputs/LoginInput";
const signin = () => {
  return (
    <div>
      {" "}
      <Header country={"Bangladesh"} />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We had be happy to join us! <Link href="/">Go Shop</Link>{" "}
            </span>
          </div>

          <div className={styles.login__form}>
            <h1>Sign in</h1>
            <p>
              Get access to one of the best Eshopping Services in the world.
            </p>
          </div>
          <Formik>
            {(form) => (
              <Form>
                <LoginInput icon="email" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer country={"Ban"} />{" "}
    </div>
  );
};

export default signin;
