import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
