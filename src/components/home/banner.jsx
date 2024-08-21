import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import banner1 from "../../assets/banner1.webp"
import banner2 from "../../assets/banner2.webp"
import banner3 from "../../assets/banner3.webp"// import Slider from 'react-slick/lib/slider';
import { Progress } from '@nextui-org/react';
const Banner = () => {
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setProgress(0);
    intervalRef.current = setInterval(() => {
      if (!isHovering) {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 1;
          }
          clearInterval(intervalRef.current);
          return 0;
        });
      }
    }, 10);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 10;
        }
        clearInterval(intervalRef.current);
        return 0;
      });
    }, 10);
  };

  return (
    <div className='relative mt-[-10rem]'>
<div className='w-full md:h-[106vh] bg-zinc-900/40 absolute z-20'></div>
    <Swiper
modules={[Pagination, Autoplay, EffectFade]}
onSlideChange={handleSlideChange}
autoplay={{ delay: 5000 }}
pagination={{ clickable: true }}
fadeEffect={{ crossFade: true }}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
    >
    <SwiperSlide className='!bg-zinc-200/20'>
    <img src={banner1} className='w-full bg-zinc-200/20'/></SwiperSlide>
    <SwiperSlide className='!bg-zinc-200/20'> <img src={banner2} className='w-full !bg-zinc-200/20'/></SwiperSlide>
    <SwiperSlide className='1bg-zinc-200/20'> <img src={banner3} className='w-full !bg-zinc-200/20'/></SwiperSlide>
    

  </Swiper>
  <Progress aria-label="Loading..." value={progress} classNames={{
        base: "max-w-screen rounded-0 mt-[-8px] z-10 absolute bottom-0",
        
        indicator: "bg-gradient-to-r from-zinc-800 to-zinc-500",
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }} maxValue={100}/>
    </div>

  )
}

export default Banner