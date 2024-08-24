import React, { useState } from "react";
import image from "../../assets/image2.png";
import image2 from "../../assets/image3.png";
import image3 from "../../assets/image4.png";
import image4 from "../../assets/image.png";
import { BreadcrumbItem, Breadcrumbs, cn, Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Magnifier from "react-magnifier";
import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Heading from "../../components/common/heading";
import { ExpandableCardDemo } from "../../components/cards/productCard";



const ProductDetail = () => {

  const Images = [image , image2,image3,image4]

  const [perviewImage , setPreviewImage] = useState(Images[0])

  
  return (
    <div>
      <div
        className={"bg-productDetail bg-cover bg-center mt-[-10rem] h-[80vh]"}
      >
        <div className="bg-zinc-900/70 h-[80vh] flex flex-col justify-end items-center">
          <p className="text-white mt-32 text-5xl md:text-7xl font-Baskervville">
            Product Detail
          </p>
          <div className="mb-20">
            <Breadcrumbs>
              <BreadcrumbItem>
                <Link to={"/"}>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to={"/shop"}>Shop</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>Artist</BreadcrumbItem>
            </Breadcrumbs>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-20 py-20">
        <div className="md:mx-10">
          <Magnifier  src={perviewImage} className="w-full" />
          <div className="my-4">
          <Swiper
        modules={[Pagination, Navigation]}
        loop="Infinite"
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={30}
        slidesPerView={3}
      >
        {Images?.map((value , i)=>(
          
          <SwiperSlide key={i} onClick={()=>setPreviewImage(value)}>
          {console.log(value , perviewImage)
          }
            <div className={cn(" p-1", value === perviewImage && "bg-orange-500/50")}>
          <img src={value} className={cn("w-full bg-zinc-200/20  !border-3 ",value === perviewImage ? "!border-orange-400" :" !border-trans[parent")} />
            </div>
        </SwiperSlide>
        ))}
       
        
      </Swiper>
          </div>
        </div>
        <div>
          <p className="text-2xl mb-4 font-Baskervville">
            2023 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </p>
          <div className="grid grid-cols-2 gap-2 font-Baskervville my-10">
            <div className="flex gap-3">
              <p className="mb-0 text-slate-300 font-medium">SKU :</p>
              <p className="mb-0">Apple_09</p>
            </div>
            <div className="flex gap-3">
              <p className="mb-0 text-slate-300 font-medium">Availability :</p>
              <p className="mb-0 text-green-500">In Stock</p>
            </div>
            <div className="flex gap-3">
              <p className="mb-0 text-slate-300 font-medium">Brand :</p>
              <p className="mb-0">Apple</p>
            </div>
            <div className="flex gap-3">
              <p className="mb-0 text-slate-300 font-medium">Category :</p>
              <p className="mb-0">Computer</p>
            </div>
          </div>
          <div className="flex items-center gap-4 font-Baskervville my-4">
            <p className="text-orange-500 font-bold text-2xl">$80.00</p>
            <p className="text-slate-300 text-lg">$100.00</p>
            <p className="bg-yellow-400/80 font-bold px-4 py-1 text-black">
              20% OFF
            </p>
          </div>
          <Divider className="h-[1px] w-full bg-slate-500 my-6" />
          <p className="text-xl text-slate-300 mb-4">Description</p>
          <p>
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life.The first notebook of
            its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
            performance of the M1 architecture to a whole new level for pro
            users.
          </p>
          <p className="mt-4">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip — the first Apple silicon designed for pros — you
            get groundbreaking performance and amazing battery life. Add to that
            a stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast. 
          </p>
        </div>
      </div>
      <div className="px-20 pb-20">
        <Heading title={"Related Products"}/>
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default ProductDetail;
