import React from "react";
import weare from "../../assets/we.jpeg";
import { Divider } from "@nextui-org/react";
import Faqs from "../../components/home/faq";

const AboutUs = () => {
  return (
    <div>
      <div className={"bg-about bg-cover bg-top mt-[-10rem] h-[80vh]"}>
        <div className="bg-zinc-900/70 h-[80vh] flex flex-col justify-end items-center">
          <p className="text-white mt-32 text-5xl md:text-7xl font-Baskervville">
            About Us
          </p>
          <div className="mb-20 flex justify-center">
            <p className="w-3/4 text-center">
              Explore our online marketplace, featuring a wide range of
              products, secure payment options, and fast shipping. Discover new
              brands, read reviews, and shop with ease
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 py-20">
        <div className="md:ps-20">
          <img src={weare} />
        </div>
        <div className="md:pe-20">
          <p className="text-5xl font-Baskervville">Who We Are</p>
          <Divider className="h-[5px] rounded-full my-4 bg-orange-500 w-20"/>
          <p className="font-Baskervville">
            We started [Your Website Name] with a simple idea: to create an
            online marketplace where people could find unique products, connect
            with brands, and shop with confidence. Our founders, [Founders'
            Names], brought their expertise in [Industry/Field] to create a
            platform that combines innovation, quality, and customer-centricity.
          </p>
          <p className="font-Baskervville mt-4">
            At [Your Website Name], we're passionate about making online
            shopping easy, enjoyable, and accessible to everyone. Our team is
            dedicated to curating a diverse range of products, providing
            exceptional customer service, and building a community of happy
            customers.
          </p>
          <p className="font-Baskervville mt-4">
          <span className="text-zinc-400 font-bold me-1">
            Innovation:
            </span>
             We believe in staying ahead of the curve and continuously improving our products/services.
          </p>
          <p className="font-Baskervville mt-4">
          <span className="text-zinc-400 font-bold me-1">
          Excellence:
            </span>
            We're committed to delivering high-quality work and exceeding expectations.
          </p>
          <p className="font-Baskervville mt-4">
          <span className="text-zinc-400 font-bold me-1">
          Collaboration:
            </span>
            We believe in working together as a team to achieve common goals.
          </p>
          <p className="font-Baskervville mt-4">
          <span className="text-zinc-400 font-bold me-1">
          Customer Focus:
            </span>
            We're dedicated to understanding and meeting the needs of our customers.
          </p>
        </div>
      </div>
      <Faqs/>
    </div>
  );
};

export default AboutUs;
