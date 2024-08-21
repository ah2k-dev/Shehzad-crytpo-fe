import React from "react";
import Heading from "../common/heading";
import { Globe, Package, Search, ShoppingCart } from "lucide-react";

const HowItWork = () => {
  return (
    <div>
      <Heading title={"How it works?"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
        <div className="rounded-md border border-slate-200">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-blackcurrent-500 rounded-lg border border-blackcurrent-700 p-2 shadow-lg">
                <Globe size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Visit The Site
            </p>
            <p className="text-center text-slate-500 ">
              Explore the latest trends and discover featured products that suit
              your style and needs. Whether you're looking for the newest
              arrivals or the most sought-after items, you'll find everything at
              reasonable prices.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-slate-200">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-blackcurrent-500 rounded-lg border border-blackcurrent-700 p-2 shadow-lg">
                <ShoppingCart size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Choose Your Product
            </p>
            <p className="text-center text-slate-500 ">
              Search through our extensive collection of products and easily
              find exactly what you're looking for. You can explore a wide range
              of options, from the latest trends to timeless classics. Dive into
              the details—learn about the product's features, and customer
              reviews to make an informed decision.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-slate-200">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-blackcurrent-500 rounded-lg border border-blackcurrent-700 p-2 shadow-lg">
                <Package size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Recieve Your Parcel
            </p>
            <p className="text-center text-slate-500 ">
              Place your order with ease and enjoy the convenience of having
              your products delivered right to your doorstep.Shop comfortably
              from home and experience the hassle-free way to get the products
              you love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
