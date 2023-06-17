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

import { useMediaQuery } from "react-responsive";
import ProductsSwiper from "@/components/productsSwiper";
import db from "@/utils/db";
import Product from "@/models/Product";

export default function Home({ country, products, bg }) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:1300px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  console.log("product", products);
  return (
    <div>
      <Header country={country} />{" "}
      <div className={styles.home}>
        {" "}
        <div className={styles.container}>
          <Main />
          <FlashDeals />
          <div className={styles.home__category}>
            <Category
              header="Dresses"
              products={women_dresses}
              background="#5a31f4"
            />{" "}
            {!isMedium && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}{" "}
            {isMobile && (
              <Category
                header="Shoes"
                products={women_shoes}
                background="#3c811f"
              />
            )}{" "}
            <Category
              header="Accessories"
              products={women_accessories}
              background="#000"
            />
          </div>{" "}
          <ProductsSwiper
            products={women_swiper}
            bg="#5a35f4"
            header="For Girl's"
          />{" "}
          <ProductsSwiper
            products={homeImprovSwiper}
            bg="#5a35f4"
            header="Home products"
          />{" "}
          <ProductsSwiper
            bg="#5a35f4"
            products={gamingSwiper}
            header="Gaming"
          />{" "}
        </div>{" "}
      </div>{" "}
      <Footer country={country} />{" "}
    </div>
  );
}

export async function getServerSideProps() {
  db.connectDb();
  let products = await Product.find().sort({ createdAt: -1 }).lean();
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
      products: JSON.parse(JSON.stringify(products)),
      country: {
        name: "Bangladesh",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/bd.svg",
      },
    },
  };
}
