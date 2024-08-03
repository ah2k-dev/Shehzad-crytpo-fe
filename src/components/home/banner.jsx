import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import banner1 from "../../assets/banner1.webp"
import banner2 from "../../assets/banner2.webp"
import banner3 from "../../assets/banner3.webp"// import Slider from 'react-slick/lib/slider';
const Banner = () => {
    
  return (
    <Swiper
    modules={[Navigation, Pagination, EffectFade]}
    effect="fade"
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img src={banner1} className='w-full'/></SwiperSlide>
    <SwiperSlide> <img src={banner2} className='w-full'/></SwiperSlide>
    <SwiperSlide> <img src={banner3} className='w-full'/></SwiperSlide>
    

  </Swiper>

  )
}

export default Banner