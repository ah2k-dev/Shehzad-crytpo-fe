
import { cn, Divider } from "@nextui-org/react";
import RoadmapCard from "../../animations/roadmapCards"
import { motion } from "framer-motion";
import { fadeIn } from "../../animations/fade";
import React from "react";
import Heading from "../common/heading";


const OusrServices = () => {
  
  return (
    <div className=" px-6   py-20  ">
      <motion.p  variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.7 }}
         className="text-5xl text-white font-Baskervville mb-10 text-center">
       <Heading title={"Our services"}/>
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r border-slate-300 ">
          <div className="hidden md:flex justify-end">
          <div className="w-3 h-3 rounded-full bg-slate-400 ms-[-5px] me-[-6px]"></div>
          </div>
          <RoadmapCard >
          {(inView) => (
  <div className="flex items-center">

            <div className="rounded-lg p-8 border border-slate-200/20 text-white bg-gradient-to-b from-zinc-600/40 to-zinc-500">
              <p className="font-Baskervville text-xl">Fast & Secure Shipping</p>
              <Divider className="w-20 h-[0.1rem] bg-slate-200 my-3" />
              <p className="font-Baskervville text-sm">
              We know how important it is to receive your purchases quickly and securely. That's why we offer fast, reliable shipping options that ensure your order arrives at your doorstep in perfect condition. Track your orders in real-time for peace of mind.
              </p>
            </div>
            <Divider className="w-10 h-[1px] bg-zinc-500 hidden md:block" />
            <div className={cn( "w-8 h-3 rounded-full  me-[-6px] hidden md:block",inView ? "bg-zinc-500" : "bg-white")}></div>
  </div>)}
          </RoadmapCard>

          <RoadmapCard >
 {(inView) => (
          <div className="flex items-center mt-10 md:mt-[30rem]">
            <div className="rounded-lg p-8 border border-slate-200/20 text-white bg-gradient-to-b from-zinc-600/40 to-zinc-500">
              <p className="font-Baskervville text-xl">24/7 Customer Support</p>
              <Divider className="w-20 h-[0.1rem] bg-slate-200 my-3" />
              <p className="font-Baskervville text-sm">
              Our dedicated customer support team is available around the clock to assist you with any questions or concerns. Whether you need help with an order, product information, or troubleshooting, we're here to provide the assistance you need, anytime, anywhere.
              </p>
            </div>
            <Divider className="w-10 h-[1px] bg-zinc-500 hidden md:block" />
            <div className={cn( "w-12 h-3 rounded-full  me-[-7px] hidden md:block",inView ? "bg-zinc-500" : "bg-white")}></div>
          </div>)}
          </RoadmapCard>
          <RoadmapCard >
          {(inView) => (
          <div className="flex items-center mt-10 md:mt-[30rem]">
            <div className="rounded-lg p-8 border border-slate-200/20 text-white bg-gradient-to-b from-zinc-600/40 to-zinc-500">
              <p className="font-Baskervville text-xl">Gift Wrapping Services</p>
              <Divider className="w-20 h-[0.1rem] bg-slate-200 my-3" />
              <p className="font-Baskervville text-sm">
              Make your gifts even more special with our premium gift-wrapping services. Choose from a variety of wrapping styles and add a personal message to create the perfect gift for your loved ones.</p>
            </div>
            <Divider className="w-10 h-[1px] bg-zinc-500 hidden md:block" />
            <div className={cn( "w-8 h-3 rounded-full  me-[-7px] hidden md:block",inView ? "bg-zinc-500" : "bg-white")}></div>
          </div>)}
          </RoadmapCard>
          <div className="hidden md:flex justify-end">
          <div className="w-3 h-3 rounded-full bg-slate-400 ms-[-5px] me-[-6px]"></div>
          </div>
        </div>
        <div>
        <RoadmapCard >
        {(inView) => (
          <div className="flex items-center mt-10 md:mt-[20rem]">
          <div className={cn("w-8 h-3 rounded-full  ms-[-7px] hidden md:block", inView ? "bg-zinc-500":"bg-white")}></div>
            <Divider className="w-10 h-[1px] bg-zinc-500 hidden md:block" />
            <div className="rounded-lg p-8 border border-slate-200/20 text-white bg-gradient-to-b from-zinc-600/40 to-zinc-500">
              <p className="font-Baskervville text-xl">Secure Payment Options</p>
              <Divider className="w-20 h-[0.1rem] bg-slate-200 my-3" />
              <p className="font-Baskervville text-sm">
              Your security is our priority. We offer a range of secure payment options, including credit/debit cards, PayPal, and other trusted payment gateways. Shop with confidence knowing that your personal and financial information is protected.</p>
            </div>
          </div>)}
        </RoadmapCard>
        <RoadmapCard >
        {(inView) => (
          <div className="flex items-center mt-10 md:mt-[35rem]">
            <div className={cn("w-8 h-3 rounded-full  ms-[-7px] hidden md:block", inView ? "bg-zinc-500":"bg-white")}></div>
            <Divider className="w-10 h-[1px] bg-zinc-500 hidden md:block" />
            <div className="rounded-lg p-8 border border-slate-200/20 text-white bg-gradient-to-b from-zinc-600/40 to-zinc-500">
              <p className="font-Baskervville text-xl">Exclusive Offers & Discounts</p>
              <Divider className="w-20 h-[0.1rem] bg-slate-200 my-3" />
              <p className="font-Baskervville text-sm">
              Enjoy special offers, discounts, and promotions exclusively for our customers. Sign up for our newsletter to stay updated on the latest deals and save more on your favorite products.</p>
            </div>
          </div>)}
        </RoadmapCard>
        </div>
      </div>
    </div>
  );
};

export default OusrServices;
