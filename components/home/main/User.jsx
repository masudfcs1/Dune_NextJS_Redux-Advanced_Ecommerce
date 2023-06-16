import Image from "next/image";
import styles from "./styles.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsHeart } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useSession } from "next-auth/react";
import Link from "next/link";
import img from "@/public/useinfo.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Navigation } from "swiper";
import { userSwiperArray } from "@/data/home";

export default function User() {
  const { data: session } = useSession();
  return (
    <div className={styles.user}>
      <Image src={img} width={100} height={100} alt="Picture of the author" />
      <div className={styles.user__container}>
        {/* {session ? (
          <div className={styles.user__infos}>
            <Image src={session.user?.image} width={1000} height={300} alt="" />
            <h4>{session.user.name}</h4>
          </div>
        ) : (
          <div className={styles.user__infos}>
            <Image src="/useinfo" alt="" width={800} fill height={700} />
            <div className={styles.user__infos_btns}>
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        )} */}
        <ul className={styles.user__links}>
          <li>
            <Link legacyBehavior href="/profile">
              <a>
                <IoSettingsOutline />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <HiOutlineClipboardList />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <AiOutlineMessage />
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="">
              <a>
                <BsHeart />
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.user__swiper}>
          <img
            src="https://assets.stickpng.com/images/5a5a6d2414d8c4188e0b088d.png"
            alt=""
            className={styles.new}
          />
          <Swiper
            effect={"cards"}
            grabCursor={true}
            navigation={true}
            modules={[EffectCards, Navigation]}
            className="user__swiper"
            style={{
              maxWidth: "180px",
              height: "240px",
              marginTop: "1rem",
            }}
          >
            {userSwiperArray.map((item) => (
              <SwiperSlide>
                <Link href="">
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
