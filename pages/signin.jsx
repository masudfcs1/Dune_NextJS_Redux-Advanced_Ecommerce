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
import axios from "axios";

const initialValues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
};

const signin = ({ providers }) => {
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState(initialValues);
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
  } = user;

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

  const signUpHandler = async () => {
    try {
      setloading(true);
      const { data } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      setuser({ ...user, error: "", success: data.message });
      setloading(false);
    } catch (error) {
      setloading(false);
      setuser({ ...user, success: "", error: error.response.data.message });
    }
  };

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
              ))}{" "}
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
            onSubmit={() => {
              signUpHandler();
            }}
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
          <div>{success && <span> {success} </span>}</div>
          <div>{error && <span> {error} </span>}</div>
        </div>
      </div>
      <Footer country={"Bangladesh"} />{" "}
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

//------

// import Header from "@/components/Header";
// import Footer from "../components/footer";
// import styles from "../styles/signin.module.scss";
// import { BiLeftArrowAlt } from "react-icons/bi";
// import Link from "next/link";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import LoginInput from "../components/inputs/loginInput";
// import { useState } from "react";
// import CircledIconBtn from "../components/buttons/circledIconBtn";
// import {
//   getCsrfToken,
//   getProviders,
//   getSession,
//   signIn,
//   country,
// } from "next-auth/react";
// import axios from "axios";
// import Router from "next/router";
// const initialvalues = {
//   login_email: "",
//   login_password: "",
//   name: "",
//   email: "",
//   password: "",
//   conf_password: "",
//   success: "",
//   error: "",
//   login_error: "",
// };
// export default function signin({ providers, callbackUrl, csrfToken }) {
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(initialvalues);
//   const {
//     login_email,
//     login_password,
//     name,
//     email,
//     password,
//     conf_password,
//     success,
//     error,
//     login_error,
//   } = user;
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const loginValidation = Yup.object({
//     login_email: Yup.string()
//       .required("Email address is required.")
//       .email("Please enter a valid email address."),
//     login_password: Yup.string().required("Please enter a password"),
//   });
//   const registerValidation = Yup.object({
//     name: Yup.string()
//       .required("What's your name ?")
//       .min(2, "First name must be between 2 and 16 characters.")
//       .max(16, "First name must be between 2 and 16 characters.")
//       .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
//     email: Yup.string()
//       .required(
//         "You'll need this when you log in and if you ever need to reset your password."
//       )
//       .email("Enter a valid email address."),
//     password: Yup.string()
//       .required(
//         "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
//       )
//       .min(6, "Password must be atleast 6 characters.")
//       .max(36, "Password can't be more than 36 characters"),
//     conf_password: Yup.string()
//       .required("Confirm your password.")
//       .oneOf([Yup.ref("password")], "Passwords must match."),
//   });
//   const signUpHandler = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.post("/api/auth/signup", {
//         name,
//         email,
//         password,
//       });
//       setUser({ ...user, error: "", success: data.message });
//       setLoading(false);
//       setTimeout(async () => {
//         let options = {
//           redirect: false,
//           email: email,
//           password: password,
//         };
//         const res = await signIn("credentials", options);
//         Router.push("/");
//       }, 2000);
//     } catch (error) {
//       setLoading(false);
//       setUser({ ...user, success: "", error: error.response.data.message });
//     }
//   };
//   const signInHandler = async () => {
//     setLoading(true);
//     let options = {
//       redirect: false,
//       email: login_email,
//       password: login_password,
//     };
//     const res = await signIn("credentials", options);
//     setUser({ ...user, success: "", error: "" });
//     setLoading(false);
//     if (res?.error) {
//       setLoading(false);
//       setUser({ ...user, login_error: res?.error });
//     } else {
//       return Router.push(callbackUrl || "/");
//     }
//   };
//   const country = {
//     name: "Bangladesh",
//     flag: "https://cdn-icons-png.flaticon.com/512/197/197551.png?w=360",
//   };
//   return (
//     <>
//       <Header country={country} />
//       <div className={styles.login}>
//         <div className={styles.login__container}>
//           <div className={styles.login__header}>
//             <div className={styles.back__svg}>
//               <BiLeftArrowAlt />
//             </div>
//             <span>
//               We'd be happy to join us ! <Link href="/">Go Store</Link>
//             </span>
//           </div>
//           <div className={styles.login__form}>
//             <h1>Sign in</h1>
//             <p>
//               Get access to one of the best Eshopping services in the world.
//             </p>
//             <Formik
//               enableReinitialize
//               initialValues={{
//                 login_email,
//                 login_password,
//               }}
//               validationSchema={loginValidation}
//               onSubmit={() => {
//                 signInHandler();
//               }}
//             >
//               {(form) => (
//                 <Form method="post" action="/api/auth/signin/email">
//                   <input
//                     type="hidden"
//                     name="csrfToken"
//                     defaultValue={csrfToken}
//                   />
//                   <LoginInput
//                     type="text"
//                     name="login_email"
//                     icon="email"
//                     placeholder="Email Address"
//                     onChange={handleChange}
//                   />
//                   <LoginInput
//                     type="password"
//                     name="login_password"
//                     icon="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                   />
//                   <CircledIconBtn type="submit" text="Sign in" />
//                   {login_error && (
//                     <span className={styles.error}>{login_error}</span>
//                   )}
//                   <div className={styles.forgot}>
//                     <Link href="/auth/forgot">Forgot password ?</Link>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//             <div className={styles.login__socials}>
//               <span className={styles.or}>Or continue with</span>
//               <div className={styles.login__socials_wrap}>
//                 {providers.map((provider) => (
//                   <div key={provider.name}>
//                     {" "}
//                     <button
//                       className={styles.social__btn}
//                       onClick={() => signIn(provider.id)}
//                     >
//                       <img
//                         src={`../public/icons/icons&{provider.name}.png`}
//                         alt=" "
//                       />
//                       {/* <Image
//                       src={`../public/icons/&{provider.name}.png`}
//                       alt="img"
//                       width="100"
//                       height="100"
//                     /> */}
//                       {/* <Link
//                       href=""
//                       src={`../public/icons/icons&{provider.name}.png`}
//                     ></Link> */}
//                       Sign in with<h4>{provider.name}</h4>
//                     </button>{" "}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={styles.login__container}>
//           <div className={styles.login__form}>
//             <h1>Sign up</h1>
//             <p>
//               Get access to one of the best Eshopping services in the world.
//             </p>
//             <Formik
//               enableReinitialize
//               initialValues={{
//                 name,
//                 email,
//                 password,
//                 conf_password,
//               }}
//               validationSchema={registerValidation}
//               onSubmit={() => {
//                 signUpHandler();
//               }}
//             >
//               {(form) => (
//                 <Form>
//                   <LoginInput
//                     type="text"
//                     name="name"
//                     icon="user"
//                     placeholder="Full Name"
//                     onChange={handleChange}
//                   />
//                   <LoginInput
//                     type="text"
//                     name="email"
//                     icon="email"
//                     placeholder="Email Address"
//                     onChange={handleChange}
//                   />
//                   <LoginInput
//                     type="password"
//                     name="password"
//                     icon="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                   />
//                   <LoginInput
//                     type="password"
//                     name="conf_password"
//                     icon="password"
//                     placeholder="Re-Type Password"
//                     onChange={handleChange}
//                   />
//                   <CircledIconBtn type="submit" text="Sign up" />
//                 </Form>
//               )}
//             </Formik>
//             <div>
//               {success && <span className={styles.success}>{success}</span>}
//             </div>
//             <div>{error && <span className={styles.error}>{error}</span>}</div>
//           </div>
//         </div>
//       </div>
//       <Footer country="Morocco" />
//     </>
//   );
// }
