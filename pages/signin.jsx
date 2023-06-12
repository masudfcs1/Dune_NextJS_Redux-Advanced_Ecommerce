import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import styles from "@/styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import LoginInput from "@/components/inputs/LoginInput";
import React, { useState } from "react";
import CircledIconBtn from "@/components/buttons/circledIconBtn";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const initialValues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
};

const signin = ({ providers }) => {
  console.log(providers);
  const [user, setuser] = useState(initialValues);
  const { login_email, login_password, name, email, password, conf_password } =
    user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  console.log(user);

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address."),

    login_password: Yup.string().required("Please enter a password"),
  });

  const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name ?")
      .min(2, "First name must be between 2 and 16 characters")
      .max(16, "First name must be between 2 and 16 characters")
      .matches(/^[^aA-zZ]/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

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
            enableReinitialize
            initialValues={{
              login_email,
              login_password,
            }}
            validationSchema={loginValidation}
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
                <CircledIconBtn text="Sign In" type="submit" />
                <div className={styles.forgot}>
                  <Link href="/forgot">Forgot password ?</Link>
                </div>
              </Form>
            )}
          </Formik>
          <div className={styles.login__socials}>
            <span className={styles.or}>Or continue with </span>
            <div className={styles.login__socials_wrap}>
              {providers.map((provider) => (
                <div key={provider.name}>
                  {" "}
                  <button
                    className={styles.social__btn}
                    onClick={() => signIn(provider.id)}
                  >
                    <img
                      src={`../public/icons/icons&{provider.name}.png`}
                      alt=" "
                    />
                    {/* <Image
                      src={`../public/icons/&{provider.name}.png`}
                      alt="img"
                      width="100"
                      height="100"
                    /> */}
                    {/* <Link
                      href=""
                      src={`../public/icons/icons&{provider.name}.png`}
                    ></Link> */}
                    Sign in with<h4>{provider.name}</h4>
                  </button>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign Up</h1>
            <p>
              Get access to one of the best Eshopping Services in the world.
            </p>
          </div>
          <Formik
            enableReinitialize
            initialValues={{
              name,
              email,
              password,
              conf_password,
            }}
            validationSchema={registerValidation}
          >
            {(form) => (
              <Form>
                <LoginInput
                  onChange={handleChange}
                  name="name"
                  type="text"
                  icon="user"
                  placeholder="Full Name"
                />

                <LoginInput
                  onChange={handleChange}
                  name="email"
                  type="text"
                  icon="email"
                  placeholder="Email Address"
                />

                <LoginInput
                  onChange={handleChange}
                  name="password"
                  type="password"
                  icon="password"
                  placeholder="Password"
                />

                <LoginInput
                  onChange={handleChange}
                  name="conf_password"
                  type="password"
                  icon="password"
                  placeholder="Re - Type Password"
                />
                <CircledIconBtn text="Sign Up" type="submit" />
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

export async function getServerSideProps(context) {
  const providers = Object.values(await getProviders());
  return {
    props: { providers },
  };
}
