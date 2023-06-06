import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header country={country} />{" "}
      {/* {session ? "Your are Logged In" : "Your are Not Logged In"}{" "} */}{" "}
      <Footer country={country} />{" "}
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=c50k87tgjim45lbe")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "Bangladesh",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/bd.svg",
      },
    },
  };
}
