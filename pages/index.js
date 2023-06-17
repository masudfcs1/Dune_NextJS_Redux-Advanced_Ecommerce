import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import Main from "@/components/home/main";
import FlashDeals from "@/components/home/flashDeals/index";
import Category from "@/components/home/category";
import {
  gamingSwiper,
  homeImprovSwiper,
  women_accessories,
  women_dresses,
  women_shoes,
  women_swiper,
} from "@/data/home";

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Header country={country} />{" "}
      <div className={styles.home}>
        {" "}
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category />
          </div>{" "}
        </div>{" "}
      </div>{" "}
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
