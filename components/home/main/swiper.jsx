import React from "react";
import styles from "./styles.module.scss";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import img from "@/public/images/swiper/4.jpg";
// import test from "@/public/test";

export default function MainSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
      >
        {/* {[...Array(15).keys()].map((i) => (
          <SwiperSlide key={i}>
            <img
              src={`/public/test/${i + 1}.png`}
              width="900"
              height="100"
              alt="img"
            />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <Image
            src={img}
            alt="pet"
            width="400"
            height="100+
          "
          />
          {/* {test.map((path) => {
            return (
              <Image
                key={path.src}
                src={`/${path}.jpg`}
                alt="pet"
                width="250"
                height="420"
              />
            ); 
          })}   */}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
