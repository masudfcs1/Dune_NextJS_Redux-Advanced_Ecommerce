import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import styles from "@/styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginInput from "@/components/inputs/LoginInput";
import React, { useState } from "react";

const initialValues = {
  login_email: "",
  login_password: "",
};

const signin = () => {
  const [user, setuser] = useState(initialValues);
  const { login_email, login_password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  console.log(user);
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
          <Formik
          // enableReinitialize
          // initialValues={{
          //   login_email,
          //   login_password,
          // }}
          // validationSchema={loginValidation}
          >
            {(form) => (
              <Form>
                <LoginInput
                  onChange={handleChange}
                  name="login_email"
                  type="text"
                  icon="email"
                  placeholder="Email your name"
                />

                <LoginInput
                  onChange={handleChange}
                  name="login_password"
                  type="password"
                  icon="password"
                  placeholder="Password"
                />
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
