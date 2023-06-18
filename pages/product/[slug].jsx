import React, { useState } from "react";
import styles from "@/styles/product.module.scss";
import db from "@/utils/db";
import Product from "@/models/Product";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import Head from "next/head";
import MainSwiper from "@/components/productPage/mainSwiper";

export default function product({ product, related }) {
  const [activeImg, setActiveImg] = useState("");
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      {/* <Header country={country} /> */}
      <div className={styles.product}>
        <div className={styles.product__container}>
          <div className={styles.path}>
            Home / {product.category.name}
            {product.subCategories.map((sub, i) => (
              <span key={i}>/{sub.name}</span>
            ))}
          </div>
          <div className={styles.product__main}>
            <MainSwiper images={product.images} activeImg={activeImg} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const slug = query.slug;
  const style = query.style;
  const size = query.size || 0;
  //console.log(slug, style, size);
  db.connectDb();
  //......
  let product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    .lean();
  let subProduct = product.subProducts[style];
  let prices = subProduct.sizes
    .map((s) => {
      return s.price;
    })
    .sort((a, b) => {
      return a - b;
    });

  // console.log(product);
  console.log(prices);

  let newProduct = {
    ...product,
    style,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => {
      return p.color;
    }),
    // priceRange: subProduct.discount
    //   ? `From ${(prices[0] - prices[0] / subProduct.discount).toFixed(2)} to ${(
    //       prices[prices.length - 1] -
    //       prices[prices.length - 1] / subProduct.discount
    //     ).toFixed(2)}$`
    //   : `From ${prices[0]} to ${prices[prices.length - 1]}$`,

    priceRange:
      prices > 1 ? `From ${prices[0]} to ${prices[prices.length - 1]}$` : "",

    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };

  //....
  db.disconnectDb();
  return {
    props: {
      product: JSON.parse(JSON.stringify(newProduct)),
      // related: JSON.parse(JSON.stringify(related)),
    },
  };
}
