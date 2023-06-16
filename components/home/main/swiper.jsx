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
import img from "@/public/images/swiper/3.jpg";

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
          <SwiperSlide>
            <img src={`../../../images/swiper/${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))} */}

        <SwiperSlide>
          {/* <Image src={img} alt="pet" width="100" height="320" /> */}
          {test.map((path) => {
            return (
              <div key={path}>
                <Image
                  src={`/${path}.jpg`}
                  alt="pet"
                  width="250"
                  height="420"
                />
              </div>
            );
          })}
        </SwiperSlide>

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide> */}
      </Swiper>
    </>
  );
}
