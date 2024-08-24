import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, EffectFade, Autoplay } from "swiper/modules";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp"; // import Slider from 'react-slick/lib/slider';

const Banner = () => {
  return (
    <div className="relative  md:mt-[-10rem]">
      <div className="w-full md:h-[106vh] bg-zinc-900/40 absolute z-20"></div>
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide className="!bg-zinc-200/20">
          <img src={banner1} className="w-full bg-zinc-200/20" />
        </SwiperSlide>
        <SwiperSlide className="!bg-zinc-200/20">
          {" "}
          <img src={banner2} className="w-full !bg-zinc-200/20" />
        </SwiperSlide>
        <SwiperSlide className="1bg-zinc-200/20">
          {" "}
          <img src={banner3} className="w-full !bg-zinc-200/20" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
